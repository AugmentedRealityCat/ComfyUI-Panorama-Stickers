# ComfyUI-Panorama-Stickers 実装方針

> このドキュメントは開発の全体方針を記述する。  
> 各フェーズの着手前に該当セクションを読み、方針に沿って実装すること。

---

## アーキテクチャ概要

### Pythonノード側

- ルートの `__init__.py` はComfyUIへの公開インターフェースのみ（`NODE_CLASS_MAPPINGS`, `WEB_DIRECTORY`）
- `comfyui_pano_suite/__init__.py` はPythonパッケージの初期化のみ
- 各ノードは `comfyui_pano_suite/nodes/` 以下に分割

### フロントエンド側

- Vite + Vue 3 でビルドし、`web/panorama_suite.js` 1ファイルに出力
- ComfyUI の WEB_DIRECTORY にはこの1ファイルだけを置く
- 出力形式は **ESM**（`format: 'es'`）。IIFEは禁止（`import.meta.url` が使えなくなるため）

### データ型方針

- `IMAGE`（torch.Tensor）は既存通り。全ノードの主入力として維持する。変更しない。
- `PANO_SCENE` 型はPhase 4で必要になった時点で初めて設計・実装する。今は定義しない。
- `PANO_SCENE` は `IMAGE` を置き換えるものではなく、**追加のオプション入力ピン**として足す。
- カメラ情報の出力は、将来 ComfyUI コアの `LOAD3D_CAMERA` 型との互換性を意識して設計する（Cutoutノード）。

---

## コンポーネント設計（Vue）

### モーダルの共通構造

Stickers / Cutout / Preview の3ノードのモーダルは同一の骨格を持つ。
SeamPrepはVue移行対象外（現行実装のまま）。
差分は「どのツールを出すか」「どのインスペクタパネルを出すか」のみ。

```text
PanoModal.vue          ← 共通ベース（レイアウト / ライフサイクル / ComfyUIブリッジ）
  ├── PanoCanvas.vue   ← WebGLレンダリングキャンバス
  ├── ToolBar.vue      ← props: tools[] で表示するツールを制御
  └── Inspector.vue    ← props: panels[] で表示するパネルを制御
```

### DOF（自由度）

- `PanoCanvas.vue` が `dof` prop（`'3' | '6'`）を受け取る
- 全モーダルで6DOFは将来対応できる設計にしておく
- 初期実装は3DOFのみでよいが、**propのインターフェースは最初から定義しておく**

| ノード | dof初期値 | 備考 |
|---|---|---|
| Stickers | `'3'` | 並進は混乱するので不要 |
| Cutout | `'3'` → 将来 `'6'` | 撮影位置の空間指定に意味がある |
| Preview | `'3'` → 将来 `'6'` | |
| SeamPrep | — | Vue移行・DOF設計のスコープ外。現行実装のまま触らない |

### ロジックの分離

- `useScene.js` composable：シーンタイプの抽象化。Phase 3で実装。
- `useWebGL.js` composable：WebGLレンダリングロジック。Phase 2で実装。

### design.md

- `feat/vue-modal-base` ブランチと同時に作成する
- 先に完璧に書かない。実装しながら育てる。
- 最低限記載すること：
  - CSSカスタムプロパティ一覧（色・サイズ・スペーシング）
  - ComfyUIのダーク/ライトテーマへの追従方針
  - ツールバー・インスペクタの基本レイアウトルール

---

## フェーズ別実装計画

### Phase 1 — フロントエンド安定化（完了）

**目標：JSファイルを1本に統合し、配信の単純化と保守性向上を図る**

> 「複数ファイルが読み込み失敗の原因」という仮説は未検証・再現不能。
> バンドル化の主な動機は保守性（依存関係の明示化・ビルド成果物の単純化）であり、読み込み失敗の修正として期待しないこと。

#### `fix/js-bundling`（完了）

- Vite + **ESM出力**（`format: 'es'`）の導入
- 既存JSをVue化せずそのままバンドル（この時点でVueは不要）
- 出力：`web/panorama_suite.js` 1ファイル
- `package.json` / `vite.config.js` を追加

**実装上の注意点（必読）**

1. **出力形式は `format: 'es'` を使うこと。`format: 'iife'` は禁止。**
   - 現行コードが `import.meta.url` を使ってCSSを読み込んでいる（`pano_editor.js`）。
     IIFEでは `import.meta.url` が使えずCSSが無音で壊れる。

2. **ComfyUIのスクリプトは external にすること。**
   - `../../scripts/app.js` と `../../scripts/api.js` はバンドルに含めず外部参照のまま残す。
   - rollupOptions.external に `../../scripts/app.js` と `../../scripts/api.js` を列挙するか、
     `/^\.\.\/\.\.\/scripts\//` のような正規表現で除外する。

3. **CSSファイルは `web/` にそのまま残すこと。**
   - `pano_editor.css` はバンドル後も `web/pano_editor.css` として存在していなければならない。
   - Viteにインライン化させない（`assetsInlineLimit: 0`、またはCSSをJSに取り込まない設定）。
   - バンドル後の `panorama_suite.js` と同じディレクトリに置かれていれば `import.meta.url` で正しく解決される。

4. **ソースファイルの置き場所。**
   - 現行 `web/` 以下のJSを `web_src/`（または `src/`）に移動してViteのソースとする。
   - Viteの出力先を `web/` にする（`build.outDir: 'web'`）。
   - `web/` はビルド成果物置き場になるため `.gitignore` の扱いを検討すること
     （ただし配布リポジトリとして `web/` をgit管理する必要があるため、
     成果物を明示的にコミットする運用にすること）。

5. **ComfyUIは `web/` 以下の `.js` ファイルを再帰的にスキャンしてすべてimportする。**
   - バンドル後は `web/panorama_suite.js` の1ファイルだけが存在するようにする。
   - ソースファイル（`web_src/`）を `web/` 以下に置かないこと。

**vite.config.js の最低限の構成イメージ：**

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: 'web_src/pano_editor.js',  // エントリーポイント（app.registerExtensionを呼ぶファイル）
      formats: ['es'],
      fileName: () => 'panorama_suite.js',
    },
    outDir: 'web',
    emptyOutDir: false,  // web/pano_editor.css を消さないよう注意（または別途コピー）
    rollupOptions: {
      external: [
        /^\.\.\/\.\.\/scripts\//,  // ../../scripts/app.js, ../../scripts/api.js 等
      ],
    },
    assetsInlineLimit: 0,
  },
})
```

#### `fix/init-cleanup`（完了）

- ルート `__init__.py` の役割をコメントで明記し、薄くする
- `comfyui_pano_suite/__init__.py` の役割を明記する
- 動作は変えない、整理のみ

---

### Phase 2 — Vue移行

**目標：モーダルUIをVue 3コンポーネントに移行し、開発効率を上げる**

#### `feat/vue-modal-base`（進行中）

**完了済み（ビルド基盤セットアップ）：**
- `vue` + `@vitejs/plugin-vue` を devDependencies に追加
- `vite.config.js` に Vue プラグイン追加
- Vite を正式ビルドに昇格：`build:web` → `vite build`（旧カスタムバンドラーは `build:web:legacy` として残置）
- 出力ファイル名を `panorama_suite.vite.js` → `panorama_suite.js` に変更
- `node_modules/` / `package-lock.json` を `.gitignore` に追加
- ビルド確認済み（464KB、警告なし）

**残タスク（Codex担当）：**
- `PanoModal.vue`（ベースレイアウト）
- `PanoCanvas.vue`（WebGLキャンバス、`dof` prop含む）
- `ToolBar.vue` / `Inspector.vue`（props制御）
- `useWebGL.js` composable
- **`design.md` をここで同時作成**

#### `feat/vue-stickers-modal`（baseに依存）
#### `feat/vue-cutout-modal`（baseに依存）
#### `feat/vue-preview-modal`（baseに依存）
上記3つはそれぞれ独立したブランチ・PRとして、1ノードずつ順次移行する。
SeamPrepは移行対象外（現行実装のまま）。
一気にやらない。

---

### Phase 3 — シーン抽象化

**目標：将来の入力拡張に備えた内部設計を整える**

#### `feat/scene-format`（先に着手）

- `scene.json` のスキーマ設計（最低限 `type` フィールドを持つdict）
- `useScene.js` composable の実装
- 初期タイプ：`"erp-image"` のみ

```json
{
  "type": "erp-image",
  "source": { "image": "output.png" },
  "meta": { "width": 4096, "height": 2048 }
}
```

#### `feat/scene-erp-refactor`（scene-formatに依存）

- 既存のERP処理を `useScene.js` 経由に置き換える
- 外部から見た動作は変わらない

---

### Phase 4 — 入力拡張

**目標：ERP画像以外のシーン表現に対応する**

> **方針：技術と型はセットで実装する。**  
> 深度マップのノードだけ作っても、それを生成する手段がなければワークフローとして完結しない。  
> 対応する生成技術が揃った時点で、その型と対応ノードをセットで実装する。
> **`PANO_SCENE` 型の内部設計はこの時点で初めて決定する。**  
> 今は設計しない。

各対応はそれぞれ独立したブランチ・PRとして、順次実装する（並行不要）：

- `feat/depth-image` — 深度マップ + 画像の対応
- `feat/video-input` — images + audio（動画）の対応
- `feat/3dgs-mesh` — 3DGS / mesh の対応（パノラマ→3DGS生成技術とセット）

3DGSのPLYなどのバイナリデータは、コアの `Load 3D` ノードの流儀に倣い、**ファイルパス（STRING）として渡す**方向で検討する。

---

## 決定済み事項

| 事項 | 決定内容 |
|---|---|
| JSバンドル | Vite **ESM**（`format: 'es'`）、1ファイル出力。IIFEは禁止（`import.meta.url`が壊れる） |
| フロントエンドフレームワーク | Vue 3 |
| モーダルの共通化 | PanoModal.vue ベース、props差分 |
| DOF | PanoCanvas.vue の prop で制御 |
| IMAGE型 | 維持。全ノードの主入力として変更しない |
| PANO_SCENE | オプション追加入力として後から足す。今は設計しない |
| カメラ型 | 将来 LOAD3D_CAMERA との互換を意識する |
| design.md | feat/vue-modal-base と同時作成 |

## 未決定事項（今は決めない）

| 事項 | 決定タイミング |
|---|---|
| PANO_SCENE の内部構造 | Phase 4 最初の対応タイプ実装時 |
| 深度マップ / 3DGS の具体的な型 | 対応する生成技術の実装時 |
| 6DOF の具体的な実装 | Phase 2のPanoCanvas実装後 |
