function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function normalizeLayerDescriptor(raw = {}, fallbackType = "paint") {
  const type = String(raw?.type || fallbackType);
  const rawZIndex = Number(raw?.zIndex ?? raw?.z_index ?? 0);
  const rawOpacity = Number(raw?.opacity ?? 1);
  return {
    id: String(raw?.id || `${type}_layer`),
    type,
    source: raw?.source || null,
    revision: String(raw?.revision || ""),
    zIndex: Number.isFinite(rawZIndex) ? rawZIndex : 0,
    opacity: Number.isFinite(rawOpacity) ? clamp(rawOpacity, 0, 1) : 1,
    visible: raw?.visible !== false,
    coverageAware: false,
    transform: raw?.transform && typeof raw.transform === "object"
      ? { ...raw.transform }
      : null,
    params: raw?.params && typeof raw.params === "object"
      ? { ...raw.params }
      : {},
  };
}

export function buildPaintLayerDescriptor(source, revision, options = {}) {
  if (!source) return null;
  return normalizeLayerDescriptor({
    id: String(options?.id || "paint_layer"),
    type: "paint",
    source,
    revision,
    zIndex: Number(options?.zIndex ?? 100),
    opacity: Number(options?.opacity ?? 1),
    visible: options?.visible !== false,
    params: options?.params || {},
  }, "paint");
}

export function buildMaskLayerDescriptor(source, revision, options = {}) {
  if (!source) return null;
  return normalizeLayerDescriptor({
    id: String(options?.id || "mask_layer"),
    type: "mask",
    source,
    revision,
    zIndex: Number(options?.zIndex ?? 110),
    opacity: Number(options?.opacity ?? 1),
    visible: options?.visible !== false,
    params: options?.params || {},
  }, "mask");
}

export function buildRasterLayerDescriptor(source, revision, options = {}) {
  if (!source) return null;
  return normalizeLayerDescriptor({
    id: String(options?.id || "raster_layer"),
    type: "raster",
    source,
    revision,
    zIndex: Number(options?.zIndex ?? 90),
    opacity: Number(options?.opacity ?? 1),
    visible: options?.visible !== false,
    transform: options?.transform || null,
    params: options?.params || {},
  }, "raster");
}

export function buildPanoramaLayerDescriptors(options = {}) {
  const layers = [];
  const paint = buildPaintLayerDescriptor(options?.paintSource, options?.paintRevision, options?.paintOptions);
  const mask = buildMaskLayerDescriptor(options?.maskSource, options?.maskRevision, options?.maskOptions);
  const rasterEntries = Array.isArray(options?.rasterEntries) ? options.rasterEntries : [];
  if (paint) layers.push(paint);
  if (mask) layers.push(mask);
  rasterEntries.forEach((entry, index) => {
    const descriptor = buildRasterLayerDescriptor(
      entry?.source || null,
      entry?.revision || "",
      {
        id: String(entry?.id || `raster_layer_${index}`),
        zIndex: Number(entry?.zIndex ?? entry?.z_index ?? 90),
        opacity: Number(entry?.opacity ?? 1),
        visible: entry?.visible !== false,
        transform: entry?.transform || null,
        params: entry?.params || {},
      },
    );
    if (descriptor) layers.push(descriptor);
  });
  return layers.sort((a, b) => {
    const za = Number(a?.zIndex || 0);
    const zb = Number(b?.zIndex || 0);
    if (za !== zb) return za - zb;
    return String(a?.id || "").localeCompare(String(b?.id || ""));
  });
}
