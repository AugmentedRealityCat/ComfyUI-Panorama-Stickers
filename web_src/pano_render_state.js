import {
  buildPanoramaRenderDescriptor,
} from "./pano_render_object_pass.js";

function normalizeDescriptor(descriptor = {}) {
  if (descriptor?.background || descriptor?.objectPass || descriptor?.overlay) {
    const normalized = buildPanoramaRenderDescriptor(descriptor);
    const objectEntries = Array.isArray(normalized.objectPass?.objects)
      ? normalized.objectPass.objects
      : [];
    const scene = {
      stickers: objectEntries
        .filter((item) => item.type === "sticker")
        .map((item) => ({
          id: item.id,
          assetId: String(item?.params?.assetId || item?.params?.asset_id || ""),
          yawDeg: Number(item?.transform?.yawDeg ?? item?.params?.yawDeg ?? 0),
          pitchDeg: Number(item?.transform?.pitchDeg ?? item?.params?.pitchDeg ?? 0),
          rollDeg: Number(item?.transform?.rollDeg ?? item?.params?.rollDeg ?? 0),
          hFovDeg: Number(item?.transform?.hFovDeg ?? item?.params?.hFovDeg ?? 30),
          vFovDeg: Number(item?.transform?.vFovDeg ?? item?.params?.vFovDeg ?? 30),
          crop: item?.params?.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number(item?.opacity ?? 1),
          visible: item?.visible !== false,
          zIndex: Number(item?.zIndex ?? 0),
        })),
      selectedId: normalized.objectPass?.selectedId ?? null,
      hoveredId: normalized.objectPass?.hoveredId ?? null,
    };
    const textures = objectEntries
      .filter((item) => item.type === "sticker")
      .map((item) => ({
        assetId: String(item?.params?.assetId || item?.params?.asset_id || item?.id || ""),
        source: item.source || null,
        revision: String(item?.revision || ""),
      }))
      .filter((item) => item.assetId && item.source);
    const paintEntry = objectEntries.find((item) => item.type === "paint") || null;
    const maskEntry = objectEntries.find((item) => item.type === "mask") || null;
    return {
      stateRevision: String(descriptor?.stateRevision || ""),
      backgroundSource: normalized.background?.source || null,
      backgroundRevision: String(normalized.background?.revision || ""),
      coverageDeg: Number(normalized.background?.coverageDeg || 360) === 180 ? 180 : 360,
      paintSource: paintEntry?.source || null,
      paintRevision: String(paintEntry?.revision || ""),
      maskSource: maskEntry?.source || null,
      maskRevision: String(maskEntry?.revision || ""),
      textures,
      scene,
      backgroundOpacity: Number(normalized.background?.opacity ?? 1),
      showMaskTint: descriptor?.overlay?.showMaskTint === true,
    };
  }
  const scene = descriptor.scene || { stickers: [], selectedId: null, hoveredId: null };
  const textures = Array.isArray(descriptor.textures) ? descriptor.textures : [];
  const layers = descriptor.layers || {};
  return {
    stateRevision: String(descriptor.stateRevision || ""),
    backgroundSource: descriptor.backgroundSource || null,
    backgroundRevision: String(descriptor.backgroundRevision || ""),
    coverageDeg: Number(descriptor.coverageDeg || 360) === 180 ? 180 : 360,
    paintSource: layers.paintSource || null,
    paintRevision: String(layers.paintRevision || ""),
    maskSource: layers.maskSource || null,
    maskRevision: String(layers.maskRevision || ""),
    textures,
    scene,
    backgroundOpacity: Number(descriptor.backgroundOpacity ?? 1),
    showMaskTint: descriptor.showMaskTint === true,
  };
}

export function createPanoramaRendererStateController(renderer) {
  let current = null;

  function sync(descriptor = {}) {
    const next = normalizeDescriptor(descriptor);
    const synced = renderer.syncState({
      stateRevision: next.stateRevision,
      backgroundSource: next.backgroundSource,
      backgroundRevision: next.backgroundRevision,
      coverageDeg: next.coverageDeg,
      paintSource: next.paintSource,
      paintRevision: next.paintRevision,
      maskSource: next.maskSource,
      maskRevision: next.maskRevision,
      textures: next.textures,
      scene: next.scene,
      backgroundOpacity: next.backgroundOpacity,
      showMaskTint: next.showMaskTint,
    });
    if (!synced) return false;
    current = next;
    return true;
  }

  function snapshot() {
    return current;
  }

  function clear() {
    current = null;
  }

  return {
    sync,
    snapshot,
    clear,
  };
}
