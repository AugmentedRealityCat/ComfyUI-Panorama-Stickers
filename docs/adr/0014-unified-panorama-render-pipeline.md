# ADR 0014: Unified Panorama Render Pipeline

## Status

Proposed

## Date

2026-04-17

## Context

現状の panorama 系レンダリングは、見た目上は似ていても内部構造が統一されていない。

特に次のズレがある。

- `stickers` の `pano` modal は、背景 ERP と sticker 本体を visible な GL background layer に寄せており比較的軽い
- `cutout` の `pano` modal は、背景だけ一部 GL layer に寄ったが、frame / raster / strokeGroup / mask は旧来の 2D 転写経路が残っている
- `preview` は一部の低レベル部品を共有しているが、top-level の描画 orchestration は modal と別実装で、node preview / standalone preview / read-only modal preview の間にも分岐がある

この構造のままだと、以下の問題が続く。

- `stickers` だけ特別に軽く、`cutout` は frame を足すと急に重い
- `coverage` のような表示パラメータが path ごとに微妙にズレやすい
- 3D scene や video のような新しい panorama object を追加するたびに、同じ責務を別ファイルに複製しやすい
- `web_src/` 配下に「似ているが責務の違う render helper」が増え続ける

## Current State

### 共有されているもの

- `pano_gl_renderer.js`
  - WebGL backend
- `pano_gl_viewport.js`
  - GL surface を target context へ描く低レベル utility
- `pano_preview_render.js`
  - panorama background pass の一部
- `pano_gl_scene.js`
  - scene/view parameter の一部 builder

### まだ統一されていないもの

- `pano_editor.js`
  - modal 用の top-level rendering orchestration
- `pano_preview_runtime.js`
  - node preview / DOM preview 用の top-level rendering orchestration
- `pano_preview_previewnode.js`
  - standalone preview node 用 orchestration
- `pano_cutout_preview_shared.js`
  - cutout output preview 専用 wrapper

### Preview ノードは共通コンポーネントに乗っているか

部分的には `Yes`、全体としては `No`。

- `Yes`
  - preview ノードは `renderSceneToContext2D(...)`
  - `drawErpBackground(...)`
  - `buildPreviewNodeViewParams(...)`
  - `createPanoInteractionController(...)`
  などの shared low-level component を使っている
- `No`
  - preview ノードは modal と同じ top-level render pipeline には乗っていない
  - node preview / standalone preview / read-only modal preview が別の orchestration を持つ
  - そのため「同じ panorama を描く」責務が path ごとに分散している

つまり、preview ノードは「共有 backend の上にある」が、「共有 pipeline の上にある」とはまだ言えない。

## Decision

`stickers` / `cutout` / `preview` の panorama 表示は、すべて同じ 3 層 pipeline に統一する。

### 1. Shared pipeline を 3 層で定義する

panorama 表示は必ず次の 3 pass に分ける。

- `background pass`
  - ERP 背景の解釈
  - `coverage`
  - wrap / seam の有無
- `object pass`
  - sticker
  - cutout frame に伴う panorama object
  - paint / mask / raster
  - 将来の 3D scene / video layer
- `overlay pass`
  - selection
  - handles
  - hover
  - guides / grid
  - UI overlay

### 2. `stickers` を特別扱いしない

`stickers` だけが fast path を持つ構造をやめる。

`stickers` は shared pipeline に最初に適合した node と見なし、今後は `cutout` / `preview` を同じ責務分離へ寄せる。

### 3. `cutout` の pano object を旧 2D 転写から外す

`cutout` の `pano` view で個別に `renderCutoutViewToContext2D(...)` を呼ぶ構造は廃止対象とする。

特に以下は shared object pass へ移す。

- `rasterObject`
- `strokeGroup`
- `mask`
- 将来の frame 由来 pano object

### 4. Preview を shared pipeline の consumer にする

preview は専用 renderer を持たない。

preview ごとの差は次だけに限定する。

- viewport サイズ
- interaction の有無
- overlay の簡略表示
- object の inclusion policy

背景解釈や panorama object 描画の意味論は modal と共有する。

### 5. Cutout output preview は薄い adapter にする

cutout output preview surface は独立した第二 renderer を持たない。

役割は

- shared panorama pipeline を使って shot rect に描く
- 必要ならキャッシュする

だけに限定する。

### 6. 将来の 3D scene / video を前提に interface を切る

この refactor では 3D scene / video 自体は実装しないが、shared pipeline はそれらを後から追加できる形で設計する。

重要なのは、`video` や `3D scene` を技術種別でまとめないこと。

- panorama 空間の土台として使うもの
  - 例: ERP 動画背景、3D scene からレンダした背景
  - これは `background pass`
- panorama 空間内に配置するもの
  - 例: 動画ステッカー、動画パネル、3D object、将来の軽量 Blender 的 scene object
  - これは `object pass`

つまり、pass は「video か 3D か」ではなく、「背景として使うか / 配置 object として使うか」で決まる。

少なくとも internal interface では、background source と object entry が次を区別できるようにする。

- background source
  - image-backed
  - video-backed
  - future 3D-rendered-backed
- object entry
  - image-backed
  - raster-backed
  - mask-backed
  - future video-backed
  - future 3D-backed

## Consequences

### Positive

- `stickers` / `cutout` / `preview` の panorama 表示が同じ責務分離で揃う
- `coverage` や今後の panorama parameter を path ごとに二重実装しなくてよくなる
- `cutout` の「背景だけ軽いが frame を足すと急に重い」構造的原因を潰せる
- 将来、背景 3D / 背景 video と、配置 object としての 3D / video を混同せずに拡張できる
- 3D scene / video 対応で renderer を増殖させずに済む
- file 増加を「機能追加ごと」ではなく「責務ごと」に整理できる

### Tradeoffs

- 既存の `cutout` / `preview` の accidental behavior は、`stickers` 基準に正規化される可能性がある
- refactor 中は一時的に adapter 層が増える
- `frame` mode / `unwrap` mode は別責務のため、今回の shared pano pipeline に無理に混ぜない

## Module Direction

長期的には `web_src/` の panorama rendering を次の責務へ寄せる。

- `pano_render_pipeline.js`
  - shared orchestration
- `pano_render_background.js`
  - ERP background pass
- `pano_render_objects.js`
  - sticker / raster / paint / mask / future 3D-video object pass
- `pano_render_overlay.js`
  - UI overlay pass
- `pano_gl_renderer.js`
  - low-level GL backend のみ
- `pano_gl_viewport.js`
  - low-level viewport / blit utility のみ

`pano_editor.js` / `pano_preview_runtime.js` / `pano_preview_previewnode.js` は「state と interaction の orchestration」へ寄せ、描画意味論を持ちすぎないようにする。

## Follow-up

1. `cutout` の pano object pass を shared pipeline に移す
2. `preview` の top-level panorama orchestration を shared pipeline consumer に置き換える
3. `cutout output preview surface` を thin adapter にする
4. profiling を shared pass 単位に揃える
5. その後に 3D scene / video 用 object entry を追加する
