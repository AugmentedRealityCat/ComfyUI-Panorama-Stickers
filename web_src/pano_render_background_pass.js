const DEG2RAD = Math.PI / 180;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function expandTri(d0, d1, d2, px = 0.45) {
  const cx = (d0.x + d1.x + d2.x) / 3;
  const cy = (d0.y + d1.y + d2.y) / 3;
  const push = (p) => {
    const dx = p.x - cx;
    const dy = p.y - cy;
    const len = Math.hypot(dx, dy) || 1;
    return { x: p.x + (dx / len) * px, y: p.y + (dy / len) * px };
  };
  return [push(d0), push(d1), push(d2)];
}

function drawImageTriTo(targetCtx, img, s0, s1, s2, d0, d1, d2, triExpandPx = 0.45) {
  const denom = (s0.x * (s1.y - s2.y)) + (s1.x * (s2.y - s0.y)) + (s2.x * (s0.y - s1.y));
  if (Math.abs(denom) < 1e-6) return;

  const a = ((d0.x * (s1.y - s2.y)) + (d1.x * (s2.y - s0.y)) + (d2.x * (s0.y - s1.y))) / denom;
  const b = ((d0.x * (s2.x - s1.x)) + (d1.x * (s0.x - s2.x)) + (d2.x * (s1.x - s0.x))) / denom;
  const c = ((d0.x * (s1.x * s2.y - s2.x * s1.y)) + (d1.x * (s2.x * s0.y - s0.x * s2.y)) + (d2.x * (s0.x * s1.y - s1.x * s0.y))) / denom;
  const d = ((d0.y * (s1.y - s2.y)) + (d1.y * (s2.y - s0.y)) + (d2.y * (s0.y - s1.y))) / denom;
  const e = ((d0.y * (s2.x - s1.x)) + (d1.y * (s0.x - s2.x)) + (d2.y * (s1.x - s0.x))) / denom;
  const f = ((d0.y * (s1.x * s2.y - s2.x * s1.y)) + (d1.y * (s2.x * s0.y - s0.x * s2.y)) + (d2.y * (s0.x * s1.y - s1.x * s0.y))) / denom;

  const [e0, e1, e2] = expandTri(d0, d1, d2, triExpandPx);
  targetCtx.save();
  targetCtx.beginPath();
  targetCtx.moveTo(e0.x, e0.y);
  targetCtx.lineTo(e1.x, e1.y);
  targetCtx.lineTo(e2.x, e2.y);
  targetCtx.closePath();
  targetCtx.clip();
  targetCtx.setTransform(a, d, b, e, c, f);
  targetCtx.drawImage(img, 0, 0);
  targetCtx.restore();
}

function isSourceReady(img) {
  if (!img) return false;
  const width = Number(img.naturalWidth || img.width || 0);
  const height = Number(img.naturalHeight || img.height || 0);
  if (!(width > 0) || !(height > 0)) return false;
  if ("complete" in img) return !!img.complete;
  return true;
}

export function createPanoramaBackgroundPass(deps = {}) {
  const renderErpPass =
    typeof deps.renderErpViewToContext2D === "function"
      ? deps.renderErpViewToContext2D
      : null;

  return function renderPanoramaBackgroundPass(options = {}) {
    const owner = options.owner || null;
    const ctx = options.ctx || null;
    const rect = options.rect || null;
    const img = options.img || null;
    const mesh = options.mesh || { Nu: 24, Nv: 14 };
    const coverageDeg = Number(options.coverageDeg || 360) === 180 ? 180 : 360;
    const viewBasis = options.viewBasis || null;
    const tanHalfY = Number(options.tanHalfY || 0);
    const resolveWrappedSource = typeof options.resolveWrappedSource === "function"
      ? options.resolveWrappedSource
      : () => null;

    if (!owner || !ctx || !rect || !isSourceReady(img)) return false;

    if (renderErpPass && renderErpPass({
      owner,
      cacheKey: options.cacheKey || "shared_pano_bg",
      ctx,
      rect,
      img,
      mode: "panorama",
      yawDeg: Number(options.yawDeg || 0),
      pitchDeg: Number(options.pitchDeg || 0),
      fovDeg: Number(options.fovDeg || 100),
      coverageDeg,
      backgroundOpacity: Number(options.backgroundOpacity ?? 1),
    })) return true;

    if (!viewBasis) return false;

    const iw = Number(img.naturalWidth || img.width || 0);
    const ih = Number(img.naturalHeight || img.height || 0);
    if (iw <= 1 || ih <= 1) return false;
    const source = (coverageDeg === 180 ? null : resolveWrappedSource(img)) || img;
    const Nu = Math.max(4, Number(mesh?.Nu || 24));
    const Nv = Math.max(4, Number(mesh?.Nv || 14));
    const triExpand = (Nu <= 14 && Nv <= 9) ? 0.24 : ((Nu >= 32 && Nv >= 20) ? 0.42 : 0.34);

    const verts = [];
    const sample = [];
    for (let j = 0; j <= Nv; j++) {
      verts[j] = [];
      sample[j] = [];
    }

    const cx = rect.x + rect.w * 0.5;
    const cy = rect.y + rect.h * 0.5;
    const hRectH = rect.h * 0.5;

    for (let j = 0; j <= Nv; j++) {
      const y = rect.y + (rect.h * j) / Nv;
      const sy = ((cy - y) / hRectH) * tanHalfY;

      for (let i = 0; i <= Nu; i++) {
        const x = rect.x + (rect.w * i) / Nu;
        const sx = ((x - cx) / hRectH) * tanHalfY;

        const dx = viewBasis.fwd.x + viewBasis.right.x * sx + viewBasis.up.x * sy;
        const dy = viewBasis.fwd.y + viewBasis.right.y * sx + viewBasis.up.y * sy;
        const dz = viewBasis.fwd.z + viewBasis.right.z * sx + viewBasis.up.z * sy;
        const dmag = Math.hypot(dx, dy, dz) || 1e-8;
        const dnx = dx / dmag;
        const dny = dy / dmag;
        const dnz = dz / dmag;

        const lon = Math.atan2(dnx, dnz);
        const lat = Math.asin(clamp(dny, -1, 1));
        let u = 0;
        if (coverageDeg === 180) {
          if (Math.abs(lon) > (Math.PI * 0.5)) {
            verts[j][i] = null;
            sample[j][i] = null;
            continue;
          }
          const localU = clamp(lon / Math.PI + 0.5, 0, 1);
          u = localU * iw;
        } else {
          u = (lon / (2 * Math.PI) + 0.5) * iw;
          while (u < 0) u += iw;
          while (u >= iw) u -= iw;
        }
        const v = (0.5 - lat / Math.PI) * ih;
        verts[j][i] = { x, y };
        sample[j][i] = { x: u, y: v };
      }
    }

    ctx.save();
    ctx.globalAlpha = Number(options.backgroundOpacity ?? 1);
    for (let j = 0; j < Nv; j += 1) {
      for (let i = 0; i < Nu; i += 1) {
        const p00 = verts[j][i];
        const p10 = verts[j][i + 1];
        const p01 = verts[j + 1][i];
        const p11 = verts[j + 1][i + 1];
        if (!p00 || !p10 || !p01 || !p11) continue;
        const s00 = { ...sample[j][i] };
        const s10 = { ...sample[j][i + 1] };
        const s01 = { ...sample[j + 1][i] };
        const s11 = { ...sample[j + 1][i + 1] };
        const umin = Math.min(s00.x, s10.x, s01.x, s11.x);
        const umax = Math.max(s00.x, s10.x, s01.x, s11.x);
        if (coverageDeg === 360 && (umax - umin > iw * 0.5)) {
          [s00, s10, s01, s11].forEach((s) => {
            if (s.x < iw * 0.5) s.x += iw;
          });
        }
        drawImageTriTo(ctx, source, s00, s10, s11, p00, p10, p11, triExpand);
        drawImageTriTo(ctx, source, s00, s11, s01, p00, p11, p01, triExpand);
      }
    }
    ctx.restore();
    return true;
  };
}

export const renderPanoramaBackgroundPass = createPanoramaBackgroundPass();

export function buildViewBasis(yawDeg = 0, pitchDeg = 0, rollDeg = 0) {
  const yaw = Number(yawDeg || 0) * DEG2RAD;
  const pitch = Number(pitchDeg || 0) * DEG2RAD;
  const roll = Number(rollDeg || 0) * DEG2RAD;
  const cp = Math.cos(pitch);
  const fwd = {
    x: cp * Math.sin(yaw),
    y: Math.sin(pitch),
    z: cp * Math.cos(yaw),
  };
  const worldUp = { x: 0, y: 1, z: 0 };
  let right = {
    x: worldUp.y * fwd.z - worldUp.z * fwd.y,
    y: worldUp.z * fwd.x - worldUp.x * fwd.z,
    z: worldUp.x * fwd.y - worldUp.y * fwd.x,
  };
  const rightMag = Math.hypot(right.x, right.y, right.z) || 1e-8;
  if (rightMag < 1e-6) right = { x: 1, y: 0, z: 0 };
  right = {
    x: right.x / (Math.hypot(right.x, right.y, right.z) || 1e-8),
    y: right.y / (Math.hypot(right.x, right.y, right.z) || 1e-8),
    z: right.z / (Math.hypot(right.x, right.y, right.z) || 1e-8),
  };
  const up0 = {
    x: fwd.y * right.z - fwd.z * right.y,
    y: fwd.z * right.x - fwd.x * right.z,
    z: fwd.x * right.y - fwd.y * right.x,
  };
  const up0Mag = Math.hypot(up0.x, up0.y, up0.z) || 1e-8;
  const up = {
    x: up0.x / up0Mag,
    y: up0.y / up0Mag,
    z: up0.z / up0Mag,
  };
  const cr = Math.cos(roll);
  const sr = Math.sin(roll);
  const rolledRight = {
    x: right.x * cr + up.x * sr,
    y: right.y * cr + up.y * sr,
    z: right.z * cr + up.z * sr,
  };
  const rolledUp = {
    x: right.x * -sr + up.x * cr,
    y: right.y * -sr + up.y * cr,
    z: right.z * -sr + up.z * cr,
  };
  return { fwd, right: rolledRight, up: rolledUp };
}
