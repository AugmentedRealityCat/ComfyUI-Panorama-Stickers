# Cutout Shared Architecture Refactor

## Goal

`PanoramaCutout` must behave like `PanoramaStickers + camera/frame + crop`.
It must not maintain its own live-preview policy, cache policy, or paint-update policy.

## Shared Layers

These are intended to be shared across node types:

- Frontend render core: `web_src/pano_render_core.js`
- Render descriptor builders: `web_src/pano_render_descriptors.js`
- Panorama scene/view helpers: `web_src/pano_gl_scene.js`
- Paint engine: `web_src/pano_paint_engine.js`
- Preview runtime: `web_src/pano_preview_runtime.js`
- Modal editor shell: `web_src/pano_editor.js`
- Backend state model: `state_json`, `painting`, `painting_layer`, `stickers`, `shots`

## Node-specific Responsibilities

### PanoramaStickers

- Edit sticker placement on ERP
- Edit paint/mask on ERP
- Export composited ERP + mask

### PanoramaCutout

- Reuse sticker + paint editing behavior
- Add `shots[]` camera/frame authoring
- Present camera-based cutout preview
- Export `ERP -> rect crop`

### PanoramaPreview

- Standalone preview/viewer only

### PanoramaSeamPrep

- Backend seam-prep utility only

## Desired Shape

```text
shared state
  -> shared paint engine
  -> shared scene/descriptor builders
  -> shared render core
  -> thin node-specific consumers

Stickers consumer:
  shared ERP editing + ERP output

Cutout consumer:
  shared ERP editing + camera/frame + crop output
```

## Current Structural Drift

`PanoramaCutout` drifted away from the shared model by adding its own consumer policy in
`web_src/pano_editor.js`:

- dedicated cutout preview surface cache
- dedicated cutout preview timer / RAF scheduling
- dedicated cutout live-preview policy
- cutout-only invalidation rules

This means the render primitives are shared, but the orchestration is not.

## Refactor Rule

During interaction:

- render cutout preview directly from shared state
- do not schedule or rebuild a secondary cached preview surface

At rest:

- rebuild and reuse the cached cutout preview surface

This keeps cutout aligned with the shared live-edit path while preserving an idle cached preview.

## This Change

Frontend refactor in `web_src/pano_editor.js`:

- keep cutout frame preview on the shared editor render loop (`tick()` / `requestDraw()`)
- render frame-view content through `drawFrameViewBackground()`
- use `runtime.pendingStableLayoutFrames` only as a short layout-settle guard after cutout canvas resize
- keep cutout preview invalidation tied to the existing `cause === "cutout_frame"` and shared `runtime.dirty` / `runtime.backgroundDirty` flow

## Follow-up

If more cleanup is needed, the next step is to extract a shared preview-policy helper so
`stickers` and `cutout` differ only in camera/frame semantics, not in paint-preview semantics.
