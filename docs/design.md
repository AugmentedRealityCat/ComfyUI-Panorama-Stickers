# Panorama Suite — Design System

---

## 1. Visual Theme & Atmosphere

- **ムード:** 暗く締まったツール系UI。Framer / Linear 系のプロフェッショナルな質感。
- **密度:** コンパクト。コントロール高さは30px基準（現行CSSでは40pxが混在 → Vue移行で30pxに統一）。
- **デザインリファレンス:** Framer Plugin UI / Framer Toolbox globals.css スタイルに寄せる。
- **テーマ:** ダークのみ（ComfyUIのライト/ダーク追従は将来対応）。

---

## 2. Color Palette & Roles

すべてのカラーは `--pano-*` CSS カスタムプロパティで管理する。  
Vue コンポーネントではハードコードを禁止し、必ずトークンを使う。

### Surface（背景階層）

| トークン | 値 | 用途 |
|---|---|---|
| `--pano-surface-0` | `#0a0a0a` | モーダル・パネル背景 |
| `--pano-surface-1` | `#0f0f10` | ピッカーポップオーバー背景 |
| `--pano-surface-2` | `#1a1a1a` | コントロール背景（入力・ボタンデフォルト） |
| `--pano-surface-3` | `#3d3d3f` | アクティブ・選択インジケータ |
| `--pano-surface-hover` | `#222224` | ホバー状態の背景 |

> **設計メモ:** `design_system.md` は bg/panel=#171717, bg/control=#232323 を定義しているが、  
> 実CSSは #0f0f10 / #1a1a1a とやや暗め。Vue移行時は surface-1 / surface-2 を正とする。

### Float（HUD / フローティングパネル）

| トークン | 値 | 用途 |
|---|---|---|
| `--pano-float-bg` | `rgba(10,10,10,0.74)` | ツールバー・ビュートグル等のHUD背景 |

> HUD は常に `backdrop-filter: blur(12px)` を併用する。

### Text

| トークン | 値 | 用途 |
|---|---|---|
| `--pano-text` | `#f5f5f5` | 主要テキスト |
| `--pano-muted` | `#787878` | セカンダリ・ラベル |
| `--pano-muted-strong` | `#a0a0a0` | ホバー時のセカンダリ |
| `--pano-text-tertiary` | `#5e5e5e` | 三次情報・無効状態ヒント |
| `--pano-text-reversed` | `#ffffff` | 強調ボタン上のテキスト |

### Border

| トークン | 値 | 用途 |
|---|---|---|
| `--pano-border` | `rgba(255,255,255,0.09)` | 境界線・セパレータ |

> ディバイダー（`.pano-divider`）は `rgba(255,255,255,0.08)` を直接使用している箇所がある。  
> Vue移行時に `--pano-border` へ統一する。

### Accent

| トークン | 値 | 用途 |
|---|---|---|
| `--pano-accent` | `var(--pano-theme-accent, #0070f3)` | フォーカスリング・スライダー・アクセント |
| `--pano-accent-dimmed` | `color-mix(in srgb, var(--pano-accent) 34%, transparent)` | 薄いアクセント塗り |
| `--pano-accent-dark` | `var(--pano-theme-accent-dark, #0366d6)` | アクセントホバー |
| `--pano-accent-extra-dark` | `var(--pano-theme-accent-extra-dark, #0059bc)` | アクセントアクティブ |

> `--pano-theme-accent` で外部からテーマ色を上書き可能。デフォルトは `#0070f3`。  
> `design_system.md` のデフォルト `#0099ff` とは異なる。Vue移行時は `#0070f3` を正とする。

### Emphasis（プライマリボタン）

| トークン | 値 | 用途 |
|---|---|---|
| `--pano-emphasis-bg` | `#185fb8` | プライマリボタン背景 |
| `--pano-emphasis-bg-hover` | `#2672d2` | プライマリホバー |
| `--pano-emphasis-bg-active` | `#114f9d` | プライマリアクティブ |
| `--pano-emphasis-text` | `#ffffff` | プライマリボタンテキスト |

### Overlay

| 用途 | 値 |
|---|---|
| モーダルスクリム | `rgba(0,0,0,0.62)` |
| キャンバス確認ダイアログ背景 | `rgba(0,0,0,0.35)` |
| カラーピッカーポップオーバー | `rgba(20,20,23,0.98)` |

---

## 3. Typography Rules

**フォントファミリー:**
```
"Plus Jakarta Sans", "Geist", system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, sans-serif
```
> `design_system.md` はInterを想定していたが、実装はPlus Jakarta Sansを優先。Vue移行後もこれを維持する。

**フォントスケール:**

| 役割 | サイズ | ウェイト | 用途 |
|---|---|---|---|
| `--fs-xs` | 10px | 500 | フッター注釈・ツールチップサブ |
| `--fs-sm` | 11px | 500 | パラメータ値・セクションタイトル・注記 |
| `--fs-base` | 12px | 500 | ラベル・ボタンテキスト・本文 |
| `--fs-md` | 12px | **600** | 見出し・サイドタイトル・確認ダイアログタイトル |
| `--fs-lg` | 13px | 500 | FOV数値（tabular-nums）・確認ダイアログタイトル |

> セクションタイトル（`.pano-section-title`）は `#d0d0d0` をハードコードしている。  
> Vue移行時に `--pano-text` または `--pano-muted-strong` に統一する。

**数値表示:** `font-variant-numeric: tabular-nums`（FOV・サイズ値など）。

**Letter spacing:** ラベル系に `0.01em`。

---

## 4. Spacing Scale

| トークン | 値 | 用途 |
|---|---|---|
| `--pano-space-xs` | 4px | アイコン内パディング・最小ギャップ |
| `--pano-space-sm` | 6px | HUDボタン間ギャップ |
| `--pano-space-md` | 8px | コントロール内パディング・行ギャップ |
| `--pano-space-lg` | 12px | パネル内パディング・モーダルギャップ |
| `--pano-space-xl` | 14px | テキストアイコンボタンパディング |
| `--pano-space-2xl` | 24px | HUDのbottomオフセット |

> `design_system.md` は 10px / 16px / 20px も定義しているが、実CSSには使われていない。  
> Vue移行時は上記6段階を正式スケールとし、中間値の10px/16px/20pxは廃止。

---

## 5. Border Radius

| トークン（提案） | 値 | 用途 |
|---|---|---|
| `--pano-radius-sm` | 4px | アスペクト選択肢等の小要素 |
| `--pano-radius-md` | 8px | ボタン・インプット・コントロール |
| `--pano-radius-lg` | 10px | HUDパネル・サイドバー・ステージ |
| `--pano-radius-xl` | 12px | モーダル本体 |
| `--pano-radius-pill` | 999px | カラードット・スライダーつまみ |

> 現行CSSにはradius用のトークンが存在しない（全てハードコード）。  
> `--pano-float-radius: 10px` のみトークン化されている。  
> Vue移行時に上記トークンを `.pano-modal` のルートに定義し、各コンポーネントで使用する。  
> **注意:** カラーピッカーポップオーバーのみ 14px（他より大きい）。意図的な強調として維持。

---

## 6. Component Specs

### Modal Shell

```
max-width: min(1200px, 94vw)
max-height: min(760px, 92vh)
border-radius: var(--pano-radius-xl)   /* 12px */
background: var(--pano-surface-0)
box-shadow: 0 28px 80px rgba(0,0,0,0.66)
padding: var(--pano-space-lg)          /* 12px */
gap: var(--pano-space-lg)              /* 12px */
grid: minmax(0,1fr) 300px              /* side width: 300px */
```

**フルスクリーンモード:** `border-radius: 0 / padding: 0 / gap: 0 / grid: 1fr`。サイドパネル・HUD要素を `display:none` で非表示。

### Button サイズ階層

ボタン高さは用途によって3段階に分かれており、これは**意図的な設計**。

| 用途 | 高さ | 対象 |
|---|---|---|
| メインツールバー | **40px** | `.pano-floating-left` / `.pano-floating-bottom` / `.pano-floating-top` のボタン |
| セレクションフロート | **35px** | `.pano-selection-menu .pano-btn-icon`（画像選択時に出るフロートUI） |
| インスペクタ — 単独コントロール | **30px** | `.pano-picker-trigger` / `.pano-field-wide` / テキスト入力 |
| インスペクタ — 複合行内コントロール | **28px** | `.pano-field`（label+slider+number）/ リストアイテム |

### Button（`.pano-btn`）

| 状態 | 背景 | テキスト |
|---|---|---|
| デフォルト | `--pano-surface-2` | `--pano-muted` |
| ホバー | `--pano-surface-hover` | `--pano-text` |
| アクティブ | `--pano-surface-3` | `--pano-text` |
| 無効 | opacity 0.46 | — |
| フォーカス | box-shadow: 0 0 0 1px `--pano-accent` | — |

```
height: 40px  (メインツールバー)
       35px  (セレクションフロート)
       30px  (インスペクタ単独コントロール)
       28px  (インスペクタ複合行内)
border-radius: var(--pano-radius-md)   /* 8px */
font-size: 12px / weight 500
transition: 120ms cubic-bezier(0.2,0,0,1)
```

**プライマリボタン（`.pano-btn-primary`）:**
```
background: --pano-emphasis-bg
hover: --pano-emphasis-bg-hover
active: --pano-emphasis-bg-active
color: --pano-emphasis-text
disabled: opacity 0.5
```

**アイコンボタン（`.pano-btn-icon`）:** `width: 40px / height: 40px / padding: 0`

### View Toggle（`.pano-view-toggle`）

- HUDガラス背景 + `backdrop-filter: blur(12px)`
- 選択インジケータ: `--pano-surface-3` / `border-radius: 8px`
- アニメーション: `transform: translateX(N * 100%)` / `170ms cubic-bezier(0.2,0,0,1)`
- ボタン幅: 124px / 高さ: 40px

### Floating Panels（HUD共通）

```
background: var(--pano-float-bg)       /* rgba(10,10,10,0.74) */
backdrop-filter: blur(12px)
border-radius: var(--pano-float-radius) /* 10px */
box-shadow: 0 8px 30px rgba(0,0,0,0.35)
padding: var(--pano-float-pad)          /* 4px */
gap: var(--pano-float-gap)              /* 6px */
```

対象: `.pano-floating-top` / `.pano-floating-bottom` / `.pano-floating-left` / `.pano-paint-footer`

### Inspector Sidebar（`.pano-side`）

```
background: var(--pano-surface-0)
border-radius: 10px
padding: 0 var(--pano-space-lg)
overflow-y: auto
```

**セクション構造:**
- `.pano-side-head`: 高さ42px、上部ヘッダー
- `.pano-side-title`: 12px / weight 600
- `.pano-divider`: 高さ1px / `rgba(255,255,255,0.08)` / マイナスマージンで全幅
- `.pano-inspector`: `gap: 6px` / `padding: 12px 0`
- `.pano-section-title`: 11px / weight 600 / `#d0d0d0` → Vue移行時に `--pano-muted-strong` へ
- `.pano-side-footer`: `margin-top: auto` でフッターを下部に固定

### Parameter Row（`.pano-field`）

```
grid: 58px 1fr 60px
height: 28px
gap: var(--pano-space-md)   /* 8px */
```

ワイド版（`.pano-field-wide`）: `grid: 66px 1fr / height: 30px`

### Picker（`.pano-picker`）

```
trigger: height 30px / bg surface-2 / border-radius 8px
popover: bg surface-1 / border-radius 12px / box-shadow 0 18px 54px rgba(0,0,0,0.5)
         padding 6px / max-height 240px
```

### Tooltip（`.pano-tooltip`）

```
background: color-mix(in srgb, surface-1 92%, black)
font-size: 11px
padding: 6px 8px / border-radius: 8px
box-shadow: 0 8px 24px rgba(0,0,0,0.34)
transition: opacity 100ms ease
```

### Confirm Dialog（`.pano-canvas-confirm-card`）

```
background: #111                       /* ← 要トークン化: surface-1 */
border-radius: 10px
padding: 14px
box-shadow: 0 16px 44px rgba(0,0,0,0.45)
width: min(340px, calc(100% - 32px))
```

> **不整合:** `#111` はハードコード。Vue移行時に `var(--pano-surface-1)` に置き換える。

---

## 7. Elevation & Shadows

| レベル | 値 | 用途 |
|---|---|---|
| モーダル | `0 28px 80px rgba(0,0,0,0.66)` | モーダル本体 |
| パネル | `0 18px 54px rgba(0,0,0,0.5)` | ピッカーポップオーバー |
| HUD | `0 8px 30px rgba(0,0,0,0.35)` | フローティングパネル |
| ダイアログ | `0 16px 44px rgba(0,0,0,0.45)` | 確認ダイアログ |
| ツールチップ | `0 8px 24px rgba(0,0,0,0.34)` | ツールチップ |
| カラーピッカー | `0 16px 40px rgba(0,0,0,0.42) + inset 0 0 0 1px rgba(255,255,255,0.08)` | カラーポップ |

---

## 8. Motion

| 用途 | 値 |
|---|---|
| ボタン・コントロール | `120ms cubic-bezier(0.2,0,0,1)` |
| ビュートグルインジケータ | `170ms cubic-bezier(0.2,0,0,1)` |
| ツールチップ表示 | `100ms ease` |
| ペイントドック表示/非表示 | `220ms ease` |
| ペイントペイン切替 | `180ms ease` |
| ステージフィルター | `130ms ease` |
| パラメータ無効化 | `160ms ease` |

---

## 9. SVG Icon Rules

- `stroke: currentColor / fill: none`
- `stroke-width: 1.5`（HUD・ボタン系）/ `1.6`（ビュートグル）
- `stroke-linecap: round / stroke-linejoin: round`
- サイズ: 14px（インスペクタ）/ 18px（ツールバー・メインボタン）

---

## 10. Known Inconsistencies（Vue移行で解消する箇所）

| 箇所 | 現状 | 修正方針 |
|---|---|---|
| ボタン高さ | 40px / 35px / 30px / 28px の4段階 | **意図的な階層。** メインツールバー=40px、セレクション=35px、インスペクタ単独=30px、インスペクタ複合行内=28px |
| `.pano-canvas-confirm-card` background | `#111` ハードコード | `var(--pano-surface-1)` に置換 |
| `.pano-section-title` color | `#d0d0d0` ハードコード | `var(--pano-muted-strong)` に置換 |
| HUDとカラーポップのbg | 前者 `rgba(10,10,10,0.74)` / 後者 `rgba(20,20,23,0.98)` で別物 | 意図的な差異として維持（HUD=半透明、ピッカー=ほぼ不透明）|
| radius トークン未定義 | 全てハードコード（`--pano-float-radius: 10px` のみ例外） | Vueコンポーネントのルートで `--pano-radius-*` を定義 |
| accent デフォルト値 | `#0070f3`（CSSの実態）vs `#0099ff`（design_system.md） | `#0070f3` を正とする |

---

## 11. Layout Principles

- **2カラムグリッド:** `minmax(0,1fr)` + `300px`（サイドパネル）
- **Canvas優先:** 左カラムはキャンバスが主役。コントロールは全てオーバーレイかサイドに寄せる。
- **フローティング配置:** ツール系UIはキャンバス上にフロート。HUDは4辺（top/bottom/left/right）に配置。
- **スクロール:** サイドパネルのみ `overflow-y: auto`。モーダル本体は `overflow: hidden`。

---

## 12. Agent Prompt Guide

Vueコンポーネントを書く際の参照まとめ：

```
背景: --pano-surface-0 (panel) / --pano-surface-2 (control)
テキスト: --pano-text (primary) / --pano-muted (secondary) / --pano-text-tertiary (tertiary)
アクセント: --pano-accent (#0070f3)
ボーダー: --pano-border (rgba(255,255,255,0.09))
HUD背景: --pano-float-bg (rgba(10,10,10,0.74)) + backdrop-filter: blur(12px)
角丸: 8px (control) / 10px (panel/HUD) / 12px (modal)
スペーシング: xs=4 sm=6 md=8 lg=12 xl=14 2xl=24
モーション: 120ms cubic-bezier(0.2,0,0,1)
フォント: "Plus Jakarta Sans", system-ui / 12px/500 (base) / 12px/600 (heading)
ハードコード禁止: 必ず --pano-* トークンを使うこと
```
