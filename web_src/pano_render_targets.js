function roundSize(value, fallback = 1) {
  const n = Math.round(Number(value || fallback));
  return Math.max(1, n);
}

export function createPanoramaTargetPool() {
  const targets = new Map();

  function targetKey(targetId) {
    return targetId != null ? String(targetId) : "default";
  }

  function ensureTarget(targetId, width, height) {
    const key = targetKey(targetId);
    let entry = targets.get(key) || null;
    if (!entry) {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;
      entry = {
        id: key,
        canvas,
        ctx,
        width: 0,
        height: 0,
      };
      targets.set(key, entry);
    }
    const nextWidth = roundSize(width);
    const nextHeight = roundSize(height);
    if (entry.width !== nextWidth) {
      entry.canvas.width = nextWidth;
      entry.width = nextWidth;
    }
    if (entry.height !== nextHeight) {
      entry.canvas.height = nextHeight;
      entry.height = nextHeight;
    }
    return entry;
  }

  function getTarget(targetId) {
    return targets.get(targetKey(targetId)) || null;
  }

  function clearTarget(targetId) {
    const entry = getTarget(targetId);
    if (!entry) return;
    entry.ctx.clearRect(0, 0, entry.canvas.width, entry.canvas.height);
  }

  function dispose() {
    targets.clear();
  }

  return {
    ensureTarget,
    getTarget,
    clearTarget,
    dispose,
  };
}
