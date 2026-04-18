import { buildPanoramaRenderDescriptor } from "./pano_render_object_pass.js";
import { buildPanoramaLayerDescriptors } from "./pano_render_layer_descriptors.js";

export function buildStickerObjectDescriptors(scene, textures) {
  const textureMap = new Map(
    (Array.isArray(textures) ? textures : [])
      .map((item) => [String(item?.assetId || ""), item])
      .filter(([assetId, item]) => assetId && item?.source),
  );
  return Array.isArray(scene?.stickers)
    ? scene.stickers.map((item) => {
      const texture = textureMap.get(String(item?.assetId || ""));
      return texture ? {
        id: String(item?.id || ""),
        type: "sticker",
        source: texture.source,
        revision: texture.revision,
        zIndex: Number(item?.zIndex || 0),
        opacity: Number(item?.opacity ?? 1),
        visible: item?.visible !== false,
        transform: {
          yawDeg: Number(item?.yawDeg || 0),
          pitchDeg: Number(item?.pitchDeg || 0),
          rollDeg: Number(item?.rollDeg || 0),
          hFovDeg: Number(item?.hFovDeg || 30),
          vFovDeg: Number(item?.vFovDeg || 30),
        },
        params: {
          assetId: String(item?.assetId || ""),
          crop: item?.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
        },
      } : null;
    }).filter(Boolean)
    : [];
}

export function buildStickerRenderDescriptor(options = {}) {
  const bgImg = options?.backgroundSource || null;
  const coverageDeg = Number(options?.coverageDeg || 360) === 180 ? 180 : 360;
  const stateRevision = String(options?.stateRevision || "");
  const scene = options?.scene || { stickers: [], selectedId: null, hoveredId: null };
  const textures = Array.isArray(options?.textures) ? options.textures : [];
  const backgroundRevision = String(options?.backgroundRevision || [
    String(bgImg?.currentSrc || bgImg?.src || ""),
    Number(bgImg?.naturalWidth || bgImg?.width || 0),
    Number(bgImg?.naturalHeight || bgImg?.height || 0),
  ].join("|"));
  return buildPanoramaRenderDescriptor({
    stateRevision,
    background: {
      type: "erp_image",
      source: bgImg,
      revision: backgroundRevision,
      coverageDeg,
      opacity: Number(options?.backgroundOpacity ?? 1),
    },
    objectPass: {
      selectedId: scene?.selectedId ?? null,
      hoveredId: scene?.hoveredId ?? null,
      objects: buildStickerObjectDescriptors(scene, textures),
    },
    overlay: {
      showMaskTint: options?.showMaskTint === true,
    },
  });
}

export function buildPanoramaCompositeDescriptor(options = {}) {
  const scene = options?.scene || { stickers: [], selectedId: null, hoveredId: null };
  const textures = Array.isArray(options?.textures) ? options.textures : [];
  const stickerObjects = buildStickerObjectDescriptors(scene, textures);
  const layerObjects = buildPanoramaLayerDescriptors({
    paintSource: options?.paintSource || null,
    paintRevision: options?.paintRevision || "",
    paintOptions: options?.paintOptions || null,
    maskSource: options?.maskSource || null,
    maskRevision: options?.maskRevision || "",
    maskOptions: options?.maskOptions || null,
    rasterEntries: options?.rasterEntries || [],
  });
  return buildPanoramaRenderDescriptor({
    stateRevision: String(options?.stateRevision || ""),
    background: {
      type: "erp_image",
      source: options?.backgroundSource || null,
      revision: String(options?.backgroundRevision || ""),
      coverageDeg: Number(options?.coverageDeg || 360) === 180 ? 180 : 360,
      opacity: Number(options?.backgroundOpacity ?? 1),
    },
    objectPass: {
      selectedId: scene?.selectedId ?? null,
      hoveredId: scene?.hoveredId ?? null,
      objects: [...stickerObjects, ...layerObjects],
    },
    overlay: {
      showMaskTint: options?.showMaskTint === true,
    },
  });
}
