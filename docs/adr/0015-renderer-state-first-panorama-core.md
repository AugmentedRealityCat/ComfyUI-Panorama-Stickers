# ADR 0015: Renderer-State-First Panorama Core

## Status

Proposed

## Date

2026-04-18

## Context

`ADR 0014` では panorama rendering を共通化する方針を定めたが、実装途中で次の問題が明確になった。

- `state -> bundle -> render` の流れが各 consumer に残っていた
- `bundle` が実質的に `scene/resources/view` の混合物になっていた
- `cutout preview` は camera 差し替えではなく、bundle 再構築と compose cache に依存していた
- `paint / mask / raster` が persistent な layer resource ではなく、canvas compose 結果として毎回解決されていた
- `main view` / `cutout preview` / `node preview` が同じ low-level renderer を共有していても、top-level の render system は共有できていなかった

その結果、

- `frame` move / `stroke` move が重い
- `cutout preview` が camera ではなく別の dirty 条件でしか更新されない
- preview 修正のつもりで main 側の layer cache や compose 条件を壊しやすい
- 将来の `video` / `3D background` / `3D object` を入れる時に、consumer ごとの例外処理が増殖する

この時点で分かったことは単純で、

- 問題は preview ではない
- 問題は render system より先に data pipeline を作っていたこと

である。

## Decision

panorama rendering は今後、**rendererState-first** で設計する。

### 1. rendererState を先に持つ

共有 core は persistent な `rendererState` を持つ。

`rendererState` に含めるもの:

- background texture
- sticker textures
- paint texture
- mask texture
- future object/layer textures
- geometry buffers
- shader program
- framebuffer / render target

これらは consumer ごとに生成しない。

### 2. bundle は descriptor に格下げする

従来の `bundle = scene + resources + view` は廃止方向とする。

今後の descriptor は lightweight な入力だけを持つ。

- view / camera
- visible layer flags
- render params
- quality / target size

descriptor は GPU resource を持たない。

### 3. render API は state sync と view render を分ける

render API は必ず次の 2 段に分ける。

- `syncState(rendererState, layerState)`
- `renderView(rendererState, camera, target, params)`

ここでいう `syncState` は layer/resource の更新であり、camera 更新ではない。

### 4. preview は camera consumer にする

`cutout preview` / `node preview` / `modal preview` は、

- 同じ `rendererState`
- 別 camera
- 別 render target

で描く。

preview は bundle rebuild を通らない。

### 5. offscreen target は persistent にする

preview は offscreen render target に描き、visible UI にはそれを blit する。

- target 作成: 初期化時または resize 時のみ
- interaction 中: 再利用

`ensure*Surface` が interaction ごとに object/resource を作り直す構造は禁止する。

### 6. pass は render graph として固定する

shared core の pass は次で固定する。

- `background pass`
  - ERP / video background / future 3D-rendered background
  - `coverage 180/360`
- `object pass`
  - sticker / raster / paint / mask / future 3D object / future video object
- `overlay pass`
  - selection / handles / guides / hover / UI-only decoration

`paint / mask` は `coverage` に従って縮まない。
`coverage` は background/output の責務に閉じる。

### 7. cutout preview は node-specific adapter だが、第二の renderer ではない

`cutout preview` は node-specific adapter でよい。
ただし、別 renderer / 別 render meaning を持ってはいけない。

責務は次だけに限定する。

- cutout camera を作る
- preview target を管理する
- shared core の render を呼ぶ
- visible UI へ blit する

### 8. 旧コードは「完成後に捨てる」

移行方針は、旧 path を少しずつ絡ませるのではなく、

1. 新しい shared core を別実装で成立させる
2. consumer を順に差し替える
3. 最後に旧 path を一括削除する

とする。

## Consequences

### Positive

- preview は camera 差し替えだけで redraw できる
- interaction 中に bundle rebuild を走らせないで済む
- main / preview / cutout preview が同じ scene/layer semantics を共有できる
- `video` / `3D background` / `3D object` を pass 単位で自然に拡張できる

### Negative

- 既存の `bundle` helper 群や `compose` helper 群を温存したままでは移行できない
- 初期段階では新旧 path が並立する
- `paint / raster / mask` を persistent layer resource に載せ替えるまでは、一部 consumer が旧 path に残る

## Implementation Direction

### Shared core

新しい shared core は少なくとも次を持つ。

- `pano_render_core.js`
  - rendererState owner
  - state sync entrypoint
  - target allocation / resize
  - renderView dispatch
- `pano_render_layers.js`
  - background / paint / mask / raster / sticker の layer resource sync
- `pano_render_targets.js`
  - offscreen target reuse
- existing `pano_gl_renderer.js`
  - low-level GL backend

### Consumer side

- `pano_editor.js`
  - main modal consumer
- `pano_cutout_preview_shared.js`
  - cutout preview adapter
- `pano_preview_runtime.js`
  - runtime preview consumer
- `pano_preview_previewnode.js`
  - preview node consumer

consumer は render meaning を持たず、

- which camera
- which target
- which overlays

だけを決める。

## Non-goals

この ADR では次を同時に解かない。

- `frame mode` / `unwrap mode` の全面統一
- paint engine 自体の全面再設計
- 3D / video の実装そのもの

ただし、それらを後から自然に載せられる構造にする。

## Follow-up

1. `pano_render_core.js` を追加し、`rendererState + camera` で main pano を描けるようにする
2. `cutout preview` を bundle path から外し、shared core の camera consumer に置き換える
3. `node preview` / `modal preview` を同じ core に載せる
4. `getRasterObjectErpCanvas()` / `getComposedPaintErpCanvas()` / `getComposedMaskErpCanvas()` を render path から排除する
5. 旧 `bundle/compose` 系 helper を削除する
