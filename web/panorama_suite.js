import * as Vi from "../../scripts/app.js";
import { app as Pe } from "../../scripts/app.js";
import { api as we } from "../../scripts/api.js";
const ce = Math.PI / 180, Nc = Math.PI * 2, md = 2048;
function Xt(t, e, i) {
  return Math.max(e, Math.min(i, t));
}
function xn(t, e, i) {
  return { x: t, y: e, z: i };
}
function qi(t, e) {
  return xn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function lr(t, e) {
  return xn(t.x * e, t.y * e, t.z * e);
}
function Hi(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Rs(t, e) {
  return xn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Br(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return xn(t.x / e, t.y / e, t.z / e);
}
function gd(t, e) {
  const i = Number(t || 0) * ce, o = Number(e || 0) * ce, c = Math.cos(o);
  return xn(c * Math.sin(i), Math.sin(o), c * Math.cos(i));
}
function Ui(t, e, i = 0) {
  const o = gd(t, e);
  let c = xn(0, 1, 0);
  Math.abs(Hi(o, c)) > 0.999 && (c = xn(0, 0, 1));
  let d = Br(Rs(c, o)), h = Br(Rs(o, d));
  const y = Number(i || 0) * ce, x = Math.cos(y), w = Math.sin(y), P = qi(lr(d, x), lr(h, w)), p = qi(lr(d, -w), lr(h, x));
  return d = Br(P), h = Br(p), { fwd: o, right: d, up: h };
}
function yd(t, e) {
  const i = (Number(t || 0) - 0.5) * Nc, o = (0.5 - Number(e || 0)) * Math.PI, c = Math.cos(o);
  return xn(c * Math.sin(i), Math.sin(o), c * Math.cos(i));
}
function Fs(t, e, i = 1) {
  const o = Math.max(1, Math.round(Number(t || 1))), c = Math.max(1, Math.round(Number(e || 1))), d = Math.max(1, Number(i || 1)), h = Math.max(512, md), y = Math.min(1, h / Math.max(o, c));
  return {
    sourceWidth: o,
    sourceHeight: c,
    sourceDpr: d,
    renderScale: y,
    width: Math.max(1, Math.round(o * y)),
    height: Math.max(1, Math.round(c * y))
  };
}
function Os(t, e, i) {
  const o = t.createShader(e);
  if (t.shaderSource(o, i), t.compileShader(o), !t.getShaderParameter(o, t.COMPILE_STATUS)) {
    const c = t.getShaderInfoLog(o) || "shader compile failed";
    throw t.deleteShader(o), new Error(c);
  }
  return o;
}
function $s(t, e, i) {
  const o = Os(t, t.VERTEX_SHADER, e);
  let c;
  try {
    c = Os(t, t.FRAGMENT_SHADER, i);
  } catch (h) {
    throw t.deleteShader(o), h;
  }
  const d = t.createProgram();
  if (t.attachShader(d, o), t.attachShader(d, c), t.linkProgram(d), t.deleteShader(o), t.deleteShader(c), !t.getProgramParameter(d, t.LINK_STATUS)) {
    const h = t.getProgramInfoLog(d) || "program link failed";
    throw t.deleteProgram(d), new Error(h);
  }
  return d;
}
const zs = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, bd = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_background;
uniform sampler2D u_paint;
uniform sampler2D u_mask;
uniform int u_mode;
uniform float u_yaw;
uniform float u_pitch;
uniform float u_roll;
uniform float u_hfov;
uniform float u_vfov;
uniform vec2 u_viewport;
uniform float u_opacity;
uniform float u_paintOpacity;
uniform float u_maskOpacity;
uniform int u_hasPaint;
uniform int u_hasMask;
uniform int u_showMaskTint;
uniform vec3 u_maskTint;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 rotateCameraForward(float yaw, float pitch) {
  float cy = cos(yaw);
  float sy = sin(yaw);
  float cp = cos(pitch);
  float sp = sin(pitch);
  return vec3(cp * sy, sp, cp * cy);
}

mat3 cameraBasis(float yaw, float pitch, float roll) {
  vec3 fwd = normalize(rotateCameraForward(yaw, pitch));
  vec3 worldUp = vec3(0.0, 1.0, 0.0);
  if (abs(dot(fwd, worldUp)) > 0.999) worldUp = vec3(0.0, 0.0, 1.0);
  vec3 right = normalize(cross(worldUp, fwd));
  vec3 up = normalize(cross(fwd, right));
  float cr = cos(roll);
  float sr = sin(roll);
  vec3 r2 = normalize(right * cr + up * sr);
  vec3 u2 = normalize(right * (-sr) + up * cr);
  return mat3(r2, u2, fwd);
}

vec2 unwrapUv() {
  return vec2(v_uv.x, clamp(v_uv.y, 0.0, 1.0));
}

vec2 projectCameraUv(float yaw, float pitch, float roll, float hfov, float vfov) {
  mat3 basis = cameraBasis(yaw, pitch, roll);
  float nx = (v_uv.x * 2.0 - 1.0) * tan(hfov * 0.5);
  float ny = (1.0 - v_uv.y * 2.0) * tan(vfov * 0.5);
  vec3 dir = normalize(basis[2] + basis[0] * nx + basis[1] * ny);
  float lon = atan(dir.x, dir.z);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  return vec2(lon / TWO_PI + 0.5, clamp(0.5 - lat / PI, 0.0, 1.0));
}

void main() {
  vec2 sampleUv = unwrapUv();
  if (u_mode == 1 || u_mode == 2) {
    sampleUv = projectCameraUv(u_yaw, u_pitch, u_roll, u_hfov, u_vfov);
  }
  vec4 bg = texture(u_background, sampleUv);
  vec4 paint = u_hasPaint == 1 ? texture(u_paint, sampleUv) : vec4(0.0);
  vec4 mask = u_hasMask == 1 ? texture(u_mask, sampleUv) : vec4(0.0);

  float bgAlpha = clamp(bg.a * u_opacity, 0.0, 1.0);
  vec3 premul = bg.rgb * u_opacity;
  float alpha = bgAlpha;
  if (u_hasPaint == 1) {
    float paintAlpha = clamp(paint.a * u_paintOpacity, 0.0, 1.0);
    premul = paint.rgb * u_paintOpacity + premul * (1.0 - paintAlpha);
    alpha = paintAlpha + alpha * (1.0 - paintAlpha);
  }
  if (u_hasMask == 1 && u_showMaskTint == 1) {
    // Mask tint is a viewport-only visualization. Backend materialization keeps mask as a separate grayscale layer.
    float maskAlpha = clamp(mask.a * u_maskOpacity, 0.0, 1.0);
    premul = u_maskTint * maskAlpha + premul * (1.0 - maskAlpha);
    alpha = maskAlpha + alpha * (1.0 - maskAlpha);
  }
  outColor = vec4(premul, alpha);
}`, vd = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_texture;
uniform int u_mode;

uniform vec3 u_viewRight;
uniform vec3 u_viewUp;
uniform vec3 u_viewFwd;
uniform float u_viewHfov;
uniform float u_viewVfov;

uniform vec3 u_stickerRight;
uniform vec3 u_stickerUp;
uniform vec3 u_stickerFwd;
uniform float u_stickerTanX;
uniform float u_stickerTanY;
uniform vec4 u_crop;
uniform float u_opacity;

const float PI = 3.1415926535897932384626433832795;
const float TWO_PI = 6.283185307179586476925286766559;

vec3 dirFromUnwrapUv(vec2 uv) {
  float lon = (uv.x - 0.5) * TWO_PI;
  float lat = (0.5 - uv.y) * PI;
  float cp = cos(lat);
  return vec3(cp * sin(lon), sin(lat), cp * cos(lon));
}

vec3 dirFromProjectedView(vec2 uv) {
  float nx = (uv.x * 2.0 - 1.0) * tan(u_viewHfov * 0.5);
  float ny = (1.0 - uv.y * 2.0) * tan(u_viewVfov * 0.5);
  return normalize(u_viewFwd + u_viewRight * nx + u_viewUp * ny);
}

void main() {
  vec3 dir = (u_mode == 0) ? dirFromUnwrapUv(v_uv) : dirFromProjectedView(v_uv);
  float dz = dot(dir, u_stickerFwd);
  if (dz <= 1e-5) discard;

  float px = dot(dir, u_stickerRight) / dz;
  float py = dot(dir, u_stickerUp) / dz;
  float fullU = px / max(u_stickerTanX, 1e-6) * 0.5 + 0.5;
  float fullV = 0.5 - py / max(u_stickerTanY, 1e-6) * 0.5;

  if (fullU < u_crop.x || fullU > u_crop.z || fullV < u_crop.y || fullV > u_crop.w) discard;

  vec2 cropSize = max(u_crop.zw - u_crop.xy, vec2(1e-4));
  vec2 texUv = vec2((fullU - u_crop.x) / cropSize.x, (fullV - u_crop.y) / cropSize.y);
  vec4 texel = texture(u_texture, texUv);
  float alpha = clamp(texel.a * u_opacity, 0.0, 1.0);
  outColor = vec4(texel.rgb * u_opacity, alpha);
}`;
function Ni(t, e, i) {
  if (!t || t.mode === "unwrap") return null;
  const o = Number(t.mode === "cutout" ? t.hFovDeg || 90 : t.fovDeg || 100), c = Number(t.mode === "cutout" ? t.vFovDeg || 60 : 2 * Math.atan(Math.tan(Xt(o, 1, 179) * ce * 0.5) * (i / Math.max(e, 1))) / ce);
  return {
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.mode === "cutout" && t.rollDeg || 0),
    hFovDeg: Xt(o, 1, 179),
    vFovDeg: Xt(c, 0.1, 179)
  };
}
function _d(t) {
  const e = Ui(
    Number(t.yawDeg || 0),
    Number(t.pitchDeg || 0),
    Number(t.rollDeg || 0)
  );
  return {
    right: e.right,
    up: e.up,
    fwd: e.fwd,
    tanX: Math.tan(Xt(Number(t.hFovDeg || 30), 0.1, 179) * 0.5 * ce),
    tanY: Math.tan(Xt(Number(t.vFovDeg || 30), 0.1, 179) * 0.5 * ce),
    crop: t.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: Xt(Number(t.opacity ?? 1), 0, 1)
  };
}
function wd() {
  const t = document.createElement("canvas");
  let e = null, i = null, o = null, c = null, d = null, h = null, y = null, x = null, w = null, P = null, p = !1, M = Fs(1, 1, 1), k = null, L = null, I = null, R = null;
  const T = /* @__PURE__ */ new Map();
  let F = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  };
  function U($ = null, mt = null) {
    const pt = e.createTexture();
    return e.bindTexture(e.TEXTURE_2D, pt), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, $ ?? e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, mt ?? e.CLAMP_TO_EDGE), pt;
  }
  function S() {
    if (p) return !0;
    try {
      return e = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), e ? (i = $s(e, zs, bd), o = $s(e, zs, vd), k = {
        mode: e.getUniformLocation(i, "u_mode"),
        yaw: e.getUniformLocation(i, "u_yaw"),
        pitch: e.getUniformLocation(i, "u_pitch"),
        roll: e.getUniformLocation(i, "u_roll"),
        hFov: e.getUniformLocation(i, "u_hfov"),
        vFov: e.getUniformLocation(i, "u_vfov"),
        viewport: e.getUniformLocation(i, "u_viewport"),
        opacity: e.getUniformLocation(i, "u_opacity"),
        paintOpacity: e.getUniformLocation(i, "u_paintOpacity"),
        maskOpacity: e.getUniformLocation(i, "u_maskOpacity"),
        hasPaint: e.getUniformLocation(i, "u_hasPaint"),
        hasMask: e.getUniformLocation(i, "u_hasMask"),
        showMaskTint: e.getUniformLocation(i, "u_showMaskTint"),
        maskTint: e.getUniformLocation(i, "u_maskTint"),
        background: e.getUniformLocation(i, "u_background"),
        paint: e.getUniformLocation(i, "u_paint"),
        mask: e.getUniformLocation(i, "u_mask")
      }, L = {
        texture: e.getUniformLocation(o, "u_texture"),
        mode: e.getUniformLocation(o, "u_mode"),
        viewRight: e.getUniformLocation(o, "u_viewRight"),
        viewUp: e.getUniformLocation(o, "u_viewUp"),
        viewFwd: e.getUniformLocation(o, "u_viewFwd"),
        viewHfov: e.getUniformLocation(o, "u_viewHfov"),
        viewVfov: e.getUniformLocation(o, "u_viewVfov"),
        stickerRight: e.getUniformLocation(o, "u_stickerRight"),
        stickerUp: e.getUniformLocation(o, "u_stickerUp"),
        stickerFwd: e.getUniformLocation(o, "u_stickerFwd"),
        stickerTanX: e.getUniformLocation(o, "u_stickerTanX"),
        stickerTanY: e.getUniformLocation(o, "u_stickerTanY"),
        crop: e.getUniformLocation(o, "u_crop"),
        opacity: e.getUniformLocation(o, "u_opacity")
      }, c = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, c), e.bufferData(e.ARRAY_BUFFER, new Float32Array([
        -1,
        -1,
        1,
        -1,
        -1,
        1,
        -1,
        1,
        1,
        -1,
        1,
        1
      ]), e.STATIC_DRAW), d = U(e.REPEAT, e.CLAMP_TO_EDGE), h = U(e.REPEAT, e.CLAMP_TO_EDGE), y = U(e.REPEAT, e.CLAMP_TO_EDGE), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), p = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function K() {
    var $;
    if (e) {
      try {
        c && e.deleteBuffer(c), d && e.deleteTexture(d), h && e.deleteTexture(h), y && e.deleteTexture(y), T.forEach((mt) => {
          ot(mt);
        }), i && e.deleteProgram(i), o && e.deleteProgram(o), ($ = e.getExtension("WEBGL_lose_context")) == null || $.loseContext();
      } catch {
      }
      e = null, i = null, o = null, c = null, d = null, h = null, y = null, T.clear(), x = null, w = null, P = null, F = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, I = null, R = null, p = !1;
    }
  }
  function q($, mt, pt = 1) {
    M = Fs($, mt, pt), (t.width !== M.width || t.height !== M.height) && (t.width = M.width, t.height = M.height);
  }
  function ct($, mt, pt = [], St = { width: 0, height: 0 }, Pt = !1) {
    if (!e || !$ || !mt) return !1;
    const It = Math.max(1, Number(mt.width || mt.videoWidth || mt.naturalWidth || 0)), Ct = Math.max(1, Number(mt.height || mt.videoHeight || mt.naturalHeight || 0)), Bt = Array.isArray(pt) ? pt.filter((Vt) => Vt && Vt.w > 0 && Vt.h > 0) : [];
    if (!Bt.length) return !1;
    if (e.bindTexture(e.TEXTURE_2D, $), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Pt ? 1 : 0), St.width !== It || St.height !== Ct)
      return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, mt), St.width = It, St.height = Ct, e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (I || (I = document.createElement("canvas"), R = I.getContext("2d")), !R)
      return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, mt), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const Vt of Bt) {
      const Lt = Math.max(0, Math.floor(Number(Vt.x || 0))), Ht = Math.max(0, Math.floor(Number(Vt.y || 0))), Tt = Math.min(It - Lt, Math.ceil(Number(Vt.w || 0))), se = Math.min(Ct - Ht, Math.ceil(Number(Vt.h || 0)));
      if (!(Tt <= 0 || se <= 0)) {
        if (I.width !== Tt || I.height !== se) {
          if (I.width = Tt, I.height = se, R = I.getContext("2d"), !R)
            return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, mt), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          R.clearRect(0, 0, Tt, se);
        R.drawImage(mt, Lt, Ht, Tt, se, 0, 0, Tt, se), e.texSubImage2D(e.TEXTURE_2D, 0, Lt, Ht, e.RGBA, e.UNSIGNED_BYTE, I);
      }
    }
    return e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function Z($, mt, pt, St, Pt = null, It = !1) {
    if (!S()) return !1;
    if (!pt)
      return $ === "background" ? x = null : $ === "paint" ? w = null : P = null, !1;
    const Ct = String(St ?? ""), Bt = $ === "background" ? x : $ === "paint" ? w : P, Vt = F[$], Lt = Math.max(1, Number(pt.width || pt.videoWidth || pt.naturalWidth || 0)), Ht = Math.max(1, Number(pt.height || pt.videoHeight || pt.naturalHeight || 0)), Tt = Vt.width !== Lt || Vt.height !== Ht;
    return Bt === Ct && !Tt && !(Array.isArray(Pt) && Pt.length) || (e.bindTexture(e.TEXTURE_2D, mt), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, It ? 1 : 0), (Array.isArray(Pt) && Pt.length ? ct(mt, pt, Pt, Vt, It) : !1) || (e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, pt), Vt.width = Lt, Vt.height = Ht), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), $ === "background" ? x = Ct : $ === "paint" ? w = Ct : P = Ct), !0;
  }
  function G($, mt) {
    return Z("background", d, $, mt, null, !0);
  }
  function D($, mt, pt = null) {
    return Z("paint", h, $, mt, pt, !0);
  }
  function X($, mt, pt = null) {
    return Z("mask", y, $, mt, pt, !0);
  }
  function ot($) {
    $ != null && $.texture && e && e.deleteTexture($.texture);
  }
  function rt($) {
    if (!e || !($ != null && $.assetId) || !($ != null && $.source)) return null;
    const mt = String($.assetId), pt = String($.revision ?? ""), St = $.source, Pt = Math.max(1, Number(St.width || St.naturalWidth || St.videoWidth || 0)), It = Math.max(1, Number(St.height || St.naturalHeight || St.videoHeight || 0));
    if (Pt <= 0 || It <= 0) return null;
    let Ct = T.get(mt);
    return Ct || (Ct = {
      texture: U(e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, T.set(mt, Ct)), (Ct.revision !== pt || Ct.width !== Pt || Ct.height !== It) && (e.bindTexture(e.TEXTURE_2D, Ct.texture), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, St), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Ct.revision = pt, Ct.width = Pt, Ct.height = It), Ct.texture;
  }
  function j($ = []) {
    if (!S()) return !1;
    const mt = /* @__PURE__ */ new Set();
    return $.forEach((pt) => {
      !(pt != null && pt.assetId) || !(pt != null && pt.source) || (mt.add(String(pt.assetId)), rt(pt));
    }), T.forEach((pt, St) => {
      mt.has(St) || (ot(pt), T.delete(St));
    }), !0;
  }
  function z() {
    return S() ? (e.viewport(0, 0, t.width, t.height), e.disable(e.DEPTH_TEST), e.disable(e.CULL_FACE), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), !0) : !1;
  }
  function ut($) {
    e.useProgram($), e.bindBuffer(e.ARRAY_BUFFER, c), e.enableVertexAttribArray(0), e.vertexAttribPointer(0, 2, e.FLOAT, !1, 0, 0);
  }
  function lt($, mt = {}) {
    if (!x) return null;
    e.disable(e.BLEND), ut(i), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, d), e.uniform1i(k.background, 0), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, h), e.uniform1i(k.paint, 1), e.activeTexture(e.TEXTURE2), e.bindTexture(e.TEXTURE_2D, y), e.uniform1i(k.mask, 2), e.uniform2f(k.viewport, Math.max(1, M.width), Math.max(1, M.height)), e.uniform1i(k.mode, ($ == null ? void 0 : $.mode) === "unwrap" ? 0 : ($ == null ? void 0 : $.mode) === "cutout" ? 2 : 1);
    const pt = Ni($, M.width, M.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return e.uniform1f(k.yaw, Number(pt.yawDeg || 0) * ce), e.uniform1f(k.pitch, Number(pt.pitchDeg || 0) * ce), e.uniform1f(k.roll, Number(pt.rollDeg || 0) * ce), e.uniform1f(k.hFov, Xt(Number(pt.hFovDeg || 90), 0.1, 179) * ce), e.uniform1f(k.vFov, Xt(Number(pt.vFovDeg || 60), 0.1, 179) * ce), e.uniform1f(k.opacity, Xt(Number(mt.backgroundOpacity ?? 1), 0, 1)), e.uniform1f(k.paintOpacity, Xt(Number(mt.paintOpacity ?? 1), 0, 1)), e.uniform1f(k.maskOpacity, Xt(Number(mt.maskOpacity ?? 0.55), 0, 1)), e.uniform1i(k.hasPaint, w != null ? 1 : 0), e.uniform1i(k.hasMask, P != null ? 1 : 0), e.uniform1i(k.showMaskTint, mt.showMaskTint === !1 ? 0 : 1), e.uniform3f(k.maskTint, 34 / 255, 197 / 255, 94 / 255), e.drawArrays(e.TRIANGLES, 0, 6), t;
  }
  function ht($, mt, pt) {
    var Vt;
    if (!((Vt = $ == null ? void 0 : $.stickers) != null && Vt.length) || !(mt != null && mt.length)) return;
    const St = (pt == null ? void 0 : pt.mode) === "unwrap" ? 0 : (pt == null ? void 0 : pt.mode) === "cutout" ? 2 : 1, Pt = Ni(pt, M.width, M.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, It = Ui(Pt.yawDeg, Pt.pitchDeg, Pt.rollDeg), Ct = /* @__PURE__ */ new Map();
    mt.forEach((Lt) => {
      const Ht = rt(Lt);
      Ht && Ct.set(String(Lt.assetId || ""), Ht);
    }), e.enable(e.BLEND), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA), ut(o), e.uniform1i(L.texture, 0), e.uniform1i(L.mode, St), e.uniform3f(L.viewRight, It.right.x, It.right.y, It.right.z), e.uniform3f(L.viewUp, It.up.x, It.up.y, It.up.z), e.uniform3f(L.viewFwd, It.fwd.x, It.fwd.y, It.fwd.z), e.uniform1f(L.viewHfov, Xt(Number(Pt.hFovDeg || 90), 0.1, 179) * ce), e.uniform1f(L.viewVfov, Xt(Number(Pt.vFovDeg || 60), 0.1, 179) * ce), [...$.stickers].sort((Lt, Ht) => Number((Lt == null ? void 0 : Lt.zIndex) || 0) - Number((Ht == null ? void 0 : Ht.zIndex) || 0)).forEach((Lt) => {
      const Ht = Ct.get(String((Lt == null ? void 0 : Lt.assetId) || ""));
      if (!Ht) return;
      const Tt = _d(Lt), se = Tt.crop;
      e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, Ht), e.uniform3f(L.stickerRight, Tt.right.x, Tt.right.y, Tt.right.z), e.uniform3f(L.stickerUp, Tt.up.x, Tt.up.y, Tt.up.z), e.uniform3f(L.stickerFwd, Tt.fwd.x, Tt.fwd.y, Tt.fwd.z), e.uniform1f(L.stickerTanX, Math.max(1e-6, Tt.tanX)), e.uniform1f(L.stickerTanY, Math.max(1e-6, Tt.tanY)), e.uniform4f(
        L.crop,
        Xt(Number(se.x0 ?? 0), 0, 1),
        Xt(Number(se.y0 ?? 0), 0, 1),
        Xt(Number(se.x1 ?? 1), 0, 1),
        Xt(Number(se.y1 ?? 1), 0, 1)
      ), e.uniform1f(L.opacity, Tt.opacity), e.drawArrays(e.TRIANGLES, 0, 6);
    }), e.disable(e.BLEND);
  }
  function ft($) {
    return !z() || !x ? null : (lt({
      mode: "panorama",
      yawDeg: ($ == null ? void 0 : $.yawDeg) || 0,
      pitchDeg: ($ == null ? void 0 : $.pitchDeg) || 0,
      fovDeg: ($ == null ? void 0 : $.fovDeg) || 100
    }, $), t);
  }
  function Mt($) {
    return !z() || !x ? null : (lt({ mode: "unwrap" }, $), t);
  }
  function W($) {
    return !z() || !x ? null : (lt({
      mode: "cutout",
      yawDeg: ($ == null ? void 0 : $.yawDeg) || 0,
      pitchDeg: ($ == null ? void 0 : $.pitchDeg) || 0,
      rollDeg: ($ == null ? void 0 : $.rollDeg) || 0,
      hFovDeg: ($ == null ? void 0 : $.hFovDeg) || 90,
      vFovDeg: ($ == null ? void 0 : $.vFovDeg) || 60
    }, $), t);
  }
  function gt($ = {}) {
    return !S() || (q($.width, $.height, $.dpr || 1), !z()) ? null : ($.backgroundSource && (G($.backgroundSource, $.backgroundRevision ?? ""), lt($.view, $)), j($.textures || []), ht(
      $.scene || { stickers: [] },
      $.textures || [],
      $.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t);
  }
  function Et($, mt, pt) {
    const St = Math.max(1, Number(($ == null ? void 0 : $.viewportWidth) || M.sourceWidth || M.width || 1)), Pt = Math.max(1, Number(($ == null ? void 0 : $.viewportHeight) || M.sourceHeight || M.height || 1)), It = Number(mt), Ct = Number(pt);
    if (!Number.isFinite(It) || !Number.isFinite(Ct)) return null;
    if (($ == null ? void 0 : $.mode) === "unwrap")
      return { u: (It / St % 1 + 1) % 1, v: Xt(Ct / Pt, 0, 1) };
    const Bt = Ni($, St, Pt);
    if (!Bt) return null;
    const Vt = Ui(Bt.yawDeg, Bt.pitchDeg, Bt.rollDeg), Lt = (It - St * 0.5) / (St * 0.5) * Math.tan(Xt(Bt.hFovDeg, 1, 179) * ce * 0.5), Ht = (Pt * 0.5 - Ct) / (Pt * 0.5) * Math.tan(Xt(Bt.vFovDeg, 0.1, 179) * ce * 0.5), Tt = Br(qi(qi(lr(Vt.right, Lt), lr(Vt.up, Ht)), Vt.fwd));
    return {
      u: (Math.atan2(Tt.x, Tt.z) / Nc + 0.5 + 1) % 1,
      v: Xt(0.5 - Math.asin(Xt(Tt.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function ee($, mt, pt) {
    const St = Math.max(1, Number(($ == null ? void 0 : $.viewportWidth) || M.sourceWidth || M.width || 1)), Pt = Math.max(1, Number(($ == null ? void 0 : $.viewportHeight) || M.sourceHeight || M.height || 1));
    if (($ == null ? void 0 : $.mode) === "unwrap")
      return {
        x: (Number(mt || 0) % 1 + 1) % 1 * St,
        y: Xt(Number(pt || 0), 0, 1) * Pt,
        visible: !0
      };
    const It = Ni($, St, Pt);
    if (!It)
      return { x: St * 0.5, y: Pt * 0.5, visible: !1 };
    const Ct = Ui(It.yawDeg, It.pitchDeg, It.rollDeg), Bt = yd(mt, pt), Vt = Hi(Bt, Ct.right), Lt = Hi(Bt, Ct.up), Ht = Hi(Bt, Ct.fwd);
    if (Ht <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Tt = St * 0.5 + Vt / Ht * (St * 0.5 / Math.tan(Xt(It.hFovDeg, 1, 179) * ce * 0.5)), se = Pt * 0.5 - Lt / Ht * (Pt * 0.5 / Math.tan(Xt(It.vFovDeg, 0.1, 179) * ce * 0.5));
    return { x: Tt, y: se, visible: Tt >= 0 && Tt <= St && se >= 0 && se <= Pt };
  }
  return {
    init: S,
    dispose: K,
    setViewport: q,
    setBackgroundErp: G,
    setPaintErp: D,
    setMaskErp: X,
    renderPanorama: ft,
    renderUnwrap: Mt,
    renderCutout: W,
    renderScene: gt,
    screenToErpUv: Et,
    erpUvToScreen: ee,
    getCanvas() {
      return t;
    },
    isSupported() {
      return S();
    },
    getViewport() {
      return { ...M };
    }
  };
}
const Vs = "__shared_renderer";
function xd(t) {
  return t ? (t.__panoGlViewportCache || (t.__panoGlViewportCache = /* @__PURE__ */ new Map()), t.__panoGlViewportCache) : null;
}
function Sd(t, e) {
  var d;
  const i = xd(t);
  if (!i) return null;
  let o = i.get(Vs);
  if (!o) {
    const h = wd();
    if (!((d = h == null ? void 0 : h.isSupported) != null && d.call(h))) return null;
    o = { renderer: h }, i.set(Vs, o);
  }
  let c = i.get(e);
  return c || (c = { renderer: o.renderer, lastRenderKey: null, cachedCanvas: null }, i.set(e, c)), c;
}
function Nd(t) {
  return t ? [
    String(t.currentSrc || t.src || ""),
    Number(t.naturalWidth || t.videoWidth || t.width || 0),
    Number(t.naturalHeight || t.videoHeight || t.height || 0)
  ].join("|") : "";
}
function Md(t) {
  const e = String((t == null ? void 0 : t.mode) || "panorama");
  return e === "unwrap" ? "unwrap" : e === "cutout" ? `c|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.rollDeg || 0).toFixed(4)}|${Number(t.hFovDeg || 90).toFixed(4)}|${Number(t.vFovDeg || 60).toFixed(4)}` : `p|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.fovDeg || 100).toFixed(4)}`;
}
function kd(t = {}) {
  return t.rect ? t.rect : {
    x: 0,
    y: 0,
    w: Math.max(1, Number(t.width || 1)),
    h: Math.max(1, Number(t.height || 1))
  };
}
function br(t = {}) {
  const e = t.owner || null, i = t.ctx || null, o = kd(t);
  if (!e || !i || !(o != null && o.w) || !(o != null && o.h)) return !1;
  const c = String(t.cacheKey || "scene"), d = Sd(e, c), h = t.backgroundSource || t.img || null, y = t.scene || { stickers: [], selectedId: null, hoveredId: null }, x = Array.isArray(t.textures) ? t.textures : [], w = t.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 };
  if (!(d != null && d.renderer)) return !1;
  const P = d.renderer, p = Math.max(1, Number(t.dpr || window.devicePixelRatio || 1)), M = t.backgroundRevision != null, k = typeof HTMLVideoElement < "u" && h instanceof HTMLVideoElement || typeof HTMLCanvasElement < "u" && h instanceof HTMLCanvasElement, L = M ? String(t.backgroundRevision) : k ? "" : Nd(h), I = Number(t.backgroundOpacity ?? 1), T = y.stickers.length === 0 && x.length === 0 && (!!M || !k), F = `${Math.round(o.w)}x${Math.round(o.h)}|${p}|${Md(w)}|${L}|${I.toFixed(3)}`;
  if (T && d.lastRenderKey === F && d.cachedCanvas)
    return i.drawImage(d.cachedCanvas, o.x, o.y, o.w, o.h), !0;
  const U = P.renderScene({
    width: o.w,
    height: o.h,
    dpr: p,
    backgroundSource: h,
    backgroundRevision: L,
    textures: x,
    scene: y,
    view: w,
    backgroundOpacity: I
  });
  if (!U) return !1;
  if (T) {
    const S = U.width, K = U.height;
    (!d.cachedCanvas || d.cachedCanvas.width !== S || d.cachedCanvas.height !== K) && (d.cachedCanvas = document.createElement("canvas"), d.cachedCanvas.width = S, d.cachedCanvas.height = K);
    const q = d.cachedCanvas.getContext("2d");
    q.clearRect(0, 0, S, K), q.drawImage(U, 0, 0), d.lastRenderKey = F;
  } else
    d.lastRenderKey = null;
  return i.drawImage(U, o.x, o.y, o.w, o.h), !0;
}
function Pd(t = {}) {
  let e;
  return t.mode === "cutout" ? e = {
    mode: "cutout",
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.rollDeg || 0),
    hFovDeg: Number(t.hFovDeg || 90),
    vFovDeg: Number(t.vFovDeg || 60)
  } : t.mode === "unwrap" ? e = { mode: "unwrap" } : e = {
    mode: "panorama",
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    fovDeg: Number(t.fovDeg || 100)
  }, br({
    ...t,
    cacheKey: t.cacheKey || t.mode || "erp_view",
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    view: e
  });
}
function Mi(t = {}) {
  const e = t.view || {
    mode: "cutout",
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.rollDeg || 0),
    hFovDeg: Number(t.hFovDeg || 90),
    vFovDeg: Number(t.vFovDeg || 60)
  };
  return br({
    ...t,
    cacheKey: t.cacheKey || "cutout_view",
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    view: e
  });
}
function sr(t, e) {
  const i = document.createElement("canvas");
  i.width = Math.max(1, Math.round(t)), i.height = Math.max(1, Math.round(e));
  const o = i.getContext("2d");
  return o && (o.clearRect(0, 0, i.width, i.height), o.imageSmoothingEnabled = !0), { canvas: i, ctx: o };
}
function Je(t, e, i) {
  if (!t) return sr(e, i);
  const o = Math.max(1, Math.round(e)), c = Math.max(1, Math.round(i));
  return (t.canvas.width !== o || t.canvas.height !== c) && (t.canvas.width = o, t.canvas.height = c, t.ctx.imageSmoothingEnabled = !0), t;
}
function Yt(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let qa = null, Ya = null, Hs = null, Us = null, Gt = null, zr = null, _e = null, vn = null;
function Cd() {
  if (Ya) return Ya;
  const t = 6, e = 17, i = document.createElement("canvas");
  i.width = e, i.height = e;
  const o = i.getContext("2d");
  return o.fillStyle = "rgba(0, 0, 0, 0.25)", o.fillRect(0, 0, e, e), o.strokeStyle = "rgba(0, 0, 0, 0.5)", o.lineWidth = t, o.lineCap = "square", o.beginPath(), o.moveTo(0, 0), o.lineTo(e, e), o.moveTo(-e / 2, e / 2), o.lineTo(e / 2, e + e / 2), o.moveTo(e / 2, -e / 2), o.lineTo(e + e / 2, e / 2), o.stroke(), Ya = i, i;
}
function nr(t, e) {
  if (!t || !e) return;
  const i = e.width, o = e.height;
  qa = Je(qa, i, o);
  const c = qa;
  Yt(c), c.ctx.drawImage(e, 0, 0), c.ctx.globalCompositeOperation = "source-in", Us !== c.ctx && (Hs = c.ctx.createPattern(Cd(), "repeat"), Us = c.ctx), c.ctx.fillStyle = Hs, c.ctx.fillRect(0, 0, i, o), c.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(c.canvas, 0, 0), t.restore();
}
function Ad(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function Id(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function Ed(t, e) {
  const i = Number(t == null ? void 0 : t.radiusValue), o = String((t == null ? void 0 : t.radiusModel) || "").trim(), c = (e == null ? void 0 : e.width) || 1;
  return o === "erp_uv_norm" && i > 0 ? Math.max(0.5, i * c) : o === "degree_norm" && i > 0 ? Math.max(0.5, i * 90 / 360 * c) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function Dd(t, e) {
  const i = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(i) && i > 0) return Math.max(1, i * e * 2);
  const o = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (o === "brush" || o === "eraser" ? 0.15 : 0.2) * e * 2);
}
const te = /* @__PURE__ */ new Map(), _o = 128;
function Ld(t, e, i, o, c, d) {
  const h = Math.max(1, Math.round(t)), y = Math.max(0, Math.min(1, e)), x = `${h}:${y.toFixed(2)}:${i}:${o}:${c}:${d.toFixed(3)}`;
  if (te.has(x)) {
    const F = te.get(x);
    return te.delete(x), te.set(x, F), F;
  }
  te.size >= _o && te.delete(te.keys().next().value);
  const w = h * 2 + 2, P = h + 1, p = new OffscreenCanvas(w, w), M = p.getContext("2d"), k = y * h, L = h + 1, I = `rgba(${i},${o},${c},${d})`, R = `rgba(${i},${o},${c},0)`, T = M.createRadialGradient(P, P, k, P, P, L);
  return T.addColorStop(0, I), T.addColorStop(1, R), M.fillStyle = T, M.fillRect(0, 0, w, w), te.set(x, p), p;
}
function Td(t, e, i, o, c, d, h) {
  const { r: y, g: x, b: w, a: P } = o, p = Math.max(2, Math.ceil(t) * 2), M = Math.max(2, Math.ceil(e) * 2), k = Math.max(0, c), L = Math.max(0, Math.min(0.99, d)), I = Math.max(0, Math.min(1, h ?? 0)), R = `chisel:${p}:${M}:${i.toFixed(2)}:${y}:${x}:${w}:${P.toFixed(3)}:${k.toFixed(2)}:${L.toFixed(2)}:${I.toFixed(2)}`;
  if (te.has(R)) {
    const Z = te.get(R);
    return te.delete(R), te.set(R, Z), Z;
  }
  te.size >= _o && te.delete(te.keys().next().value);
  const T = new OffscreenCanvas(p, M), F = T.getContext("2d"), U = F.createImageData(p, M), S = U.data, K = Math.max(0, t - e), q = Math.max(0, Math.min(1, i)), ct = 1 + k;
  for (let Z = 0; Z < M; Z++)
    for (let G = 0; G < p; G++) {
      const D = G + 0.5 - t, X = Z + 0.5 - e, ot = Math.max(Math.abs(D) - K, 0), j = Math.hypot(ot, X) / e;
      if (j >= 1) continue;
      const z = j <= q ? 1 : Math.max(0, (1 - j) / Math.max(1e-4, 1 - q)), ut = 1 - j, lt = 1 + k * (1 - ut) * (1 - ut), ht = 1 - L * ut * ut, ft = lt * ht / ct;
      let Mt = 1;
      if (I > 0) {
        const Et = Math.floor((X + e) / 1.5), ee = Math.floor((D + t) / 8), $ = Fn(hr(Et * 41 + 500, ee * 19 + 300));
        Mt = 1 - I * 0.42 * $;
      }
      const W = Math.round(255 * Math.min(1, P * z * ft * Mt));
      if (W <= 0) continue;
      const gt = (Z * p + G) * 4;
      S[gt] = y, S[gt + 1] = x, S[gt + 2] = w, S[gt + 3] = W;
    }
  return F.putImageData(U, 0, 0), te.set(R, T), T;
}
function hr(t, e) {
  const i = Math.trunc(Math.round(t * 4)), o = Math.trunc(Math.round(e * 4));
  let c = 2166136261;
  return c = Math.imul(c ^ i & 255, 16777619), c = Math.imul(c ^ i >> 8 & 255, 16777619), c = Math.imul(c ^ o & 255, 16777619), c = Math.imul(c ^ o >> 8 & 255, 16777619), c >>> 0;
}
function Fn(t) {
  let e = t + 1831565813 >>> 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Rd(t, e, i, o, c, d, h) {
  const y = t + 0.5 - i, x = e + 0.5 - o, w = Math.max(0, i - o), P = Math.max(Math.abs(y) - w, 0), p = Math.hypot(P, x) / o;
  if (p >= 1) return 0;
  const M = Fn(hr(t * 17 + 3, e * 13 + 7)), k = p + d * 0.22 * (M - 0.5);
  if (k >= 1) return 0;
  const L = k <= c ? 1 : Math.max(0, (1 - k) / Math.max(1e-4, 1 - c)), I = Fd(t, e, y, x, i, o), R = d * 0.55;
  if (I < R) return 0;
  const F = 0.45 + 0.55 * ((I - R) / Math.max(1e-4, 1 - R));
  return Math.round(255 * Math.min(1, h * L * F));
}
function Fd(t, e, i, o, c, d) {
  const h = Math.floor((i + c) / 3), y = Math.floor((o + d) / 2), x = Fn(hr(h * 13 + 700, y * 17 + 400)), w = Math.floor((i + c) / 1.5), P = Math.floor((o + d) / 1.5), p = Fn(hr(w * 23 + 800, P * 29 + 500)), M = Fn(hr(t * 3 + 100, e * 5 + 200));
  return x * 0.55 + p * 0.3 + M * 0.15;
}
function Od(t, e, i, o, c) {
  const { r: d, g: h, b: y, a: x } = o, w = Math.max(2, Math.ceil(t) * 2), P = Math.max(2, Math.ceil(e) * 2), p = Math.max(0, Math.min(1, c)), M = `crayon:${w}:${P}:${i.toFixed(2)}:${d}:${h}:${y}:${x.toFixed(3)}:${p.toFixed(2)}`;
  if (te.has(M)) {
    const F = te.get(M);
    return te.delete(M), te.set(M, F), F;
  }
  te.size >= _o && te.delete(te.keys().next().value);
  const k = new OffscreenCanvas(w, P), L = k.getContext("2d"), I = L.createImageData(w, P), R = I.data, T = Math.max(0, Math.min(1, i));
  for (let F = 0; F < P; F++)
    for (let U = 0; U < w; U++) {
      const S = Rd(U, F, t, e, T, p, x);
      if (S <= 0) continue;
      const K = (F * w + U) * 4;
      R[K] = d, R[K + 1] = h, R[K + 2] = y, R[K + 3] = S;
    }
  return L.putImageData(I, 0, 0), te.set(M, k), k;
}
function Mc(t, e, i) {
  var k;
  const o = String((e == null ? void 0 : e.stampKind) || "round"), c = Ed(e, i), d = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), h = $d(e), y = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), x = Number(((k = e == null ? void 0 : e.angle) == null ? void 0 : k.value) ?? 0), w = Dd(e, c), P = e == null ? void 0 : e.scatter, p = P ? { radius: Number(P.radius ?? 1.5), count: Math.max(1, Math.round(P.count ?? 6)) } : null;
  let M;
  if (o === "chisel") {
    const L = c * y, I = c, R = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), T = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), F = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    M = Td(L, I, d, h, R, T, F);
  } else if (o === "crayon") {
    const L = c * y, I = c, R = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    M = Od(L, I, d, h, R);
  } else
    M = Ld(c, d, h.r, h.g, h.b, h.a);
  return { ctx: t, stampTex: M, radiusPx: c, spacingPx: w, desc: i, aspect: y, angle: x, stampKind: o, scatter: p };
}
function $d(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const o = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, c = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.flow) ?? 1))), d = Math.max(0, Math.min(1, Number(o.a ?? 1))) * c;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(o.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(o.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(o.b || 0))) * 255),
    a: d
  };
}
function zd(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const o = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, c = Math.max(0, Math.min(1, Number(o.a ?? 1)));
  return `rgba(${Math.round(Number(o.r || 0) * 255)},${Math.round(Number(o.g || 0) * 255)},${Math.round(Number(o.b || 0) * 255)},${c})`;
}
function Gs(t, e, i, o, c) {
  const d = t.angle, h = t.desc.width;
  function y(w, P) {
    d === 0 ? t.ctx.drawImage(t.stampTex, w - c, P - o, c * 2, o * 2) : (t.ctx.save(), t.ctx.translate(w, P), t.ctx.rotate(d), t.ctx.drawImage(t.stampTex, -c, -o, c * 2, o * 2), t.ctx.restore());
  }
  y(e, i);
  const x = d === 0 ? c : c * Math.abs(Math.cos(d)) + o * Math.abs(Math.sin(d));
  e - x < 0 && y(e + h, i), e + x > h && y(e - h, i);
}
function wo(t, e, i, o) {
  const c = Math.max(0.01, Number.isFinite(o) ? o : 1);
  if (t.scatter) {
    const { radius: x, count: w } = t.scatter, P = x * t.radiusPx * c, p = hr(e, i);
    for (let M = 0; M < w; M++) {
      const k = Fn(p + M * 2) * Math.PI * 2, L = Math.sqrt(Fn(p + M * 2 + 1)) * P, I = e + Math.cos(k) * L, R = i + Math.sin(k) * L, T = Math.max(0.5, t.radiusPx * c * 0.48), F = (0.5 - R / Math.max(1, t.desc.height)) * Math.PI, U = T * t.aspect / Math.max(0.05, Math.cos(F));
      Gs(t, I, R, T, U);
    }
    return;
  }
  const d = Math.max(0.5, t.radiusPx * c), h = (0.5 - i / Math.max(1, t.desc.height)) * Math.PI, y = d * t.aspect / Math.max(0.05, Math.cos(h));
  Gs(t, e, i, d, y);
}
function js(t, e, i) {
  const o = Id(e);
  if (!t || o.length === 0) return;
  const c = i.width, d = i.height, h = Mc(t, e, i);
  t.save(), t.globalCompositeOperation = "source-over";
  const y = [];
  for (let M = 0; M < o.length; M++) {
    let k = Number(o[M].u || 0) * c;
    const L = Number(o[M].v || 0) * d;
    M > 0 && Math.abs(k - y[M - 1].x) > c * 0.5 && (k += k < y[M - 1].x ? c : -c), y.push({ x: k, y: L });
  }
  if (wo(h, y[0].x, y[0].y, 1), y.length === 1) {
    t.restore();
    return;
  }
  let x = y[0], w = y[0], P = y[0], p = 0;
  for (let M = 1; M < y.length; M++) {
    const k = y[M], L = { x: (w.x + k.x) * 0.5, y: (w.y + k.y) * 0.5 };
    M === 1 ? p = ti(h, P.x, P.y, L.x, L.y, p) : p = Yi(h, x, P, L, k, p), x = w, w = k, P = L;
  }
  y.length === 2 ? ti(h, P.x, P.y, w.x, w.y, p) : Yi(h, x, P, w, w, p), t.restore();
}
function Gi(t, e, i) {
  var p;
  const o = Array.isArray((p = e == null ? void 0 : e.geometry) == null ? void 0 : p.points) ? e.geometry.points : [];
  if (!t || o.length < 3) return;
  const c = i.width, d = i.height, h = zd(e), y = [];
  let x = 1 / 0, w = -1 / 0;
  for (let M = 0; M < o.length; M++) {
    const k = Ad(o[M]);
    let L = Number(k.x || 0) * c;
    M > 0 && Math.abs(L - y[M - 1].x) > c * 0.5 && (L += L < y[M - 1].x ? c : -c), y.push({ x: L, y: Number(k.y || 0) * d }), L < x && (x = L), L > w && (w = L);
  }
  function P(M) {
    t.beginPath(), t.moveTo(y[0].x + M, y[0].y);
    for (let k = 1; k < y.length; k++) t.lineTo(y[k].x + M, y[k].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = h, P(0), x < 0 && P(c), w > c && P(-c), t.restore();
}
function ki(t, e, i) {
  var h;
  if (String(((h = e == null ? void 0 : e.geometry) == null ? void 0 : h.geometryKind) || "") === "lasso_fill") {
    Gi(t, e, i);
    return;
  }
  const d = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  d >= 0.999 ? js(t, e, i) : (zr = Je(zr, i.width, i.height), Yt(zr), js(zr.ctx, e, i), t.save(), t.globalAlpha = d, t.drawImage(zr.canvas, 0, 0), t.restore());
}
function _n(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function ti(t, e, i, o, c, d) {
  const h = o - e, y = c - i, x = Math.hypot(h, y);
  if (x < 1e-9) return d;
  let w = t.spacingPx - d;
  for (; w <= x; ) {
    const P = w / x;
    wo(t, e + h * P, i + y * P, 1), w += t.spacingPx;
  }
  return x - w + t.spacingPx;
}
function Yi(t, e, i, o, c, d) {
  const y = Math.sqrt(Math.hypot(i.x - e.x, i.y - e.y)) + 1e-4, x = Math.sqrt(Math.hypot(o.x - i.x, o.y - i.y)) + 1e-4, w = Math.sqrt(Math.hypot(c.x - o.x, c.y - o.y)) + 1e-4, P = 0, p = y, M = p + x, k = M + w, L = M - p, I = 16;
  let R = d, T = i.x, F = i.y;
  for (let U = 1; U <= I; U++) {
    const S = p + L * U / I, K = ((p - S) * e.x + (S - P) * i.x) / (p - P), q = ((p - S) * e.y + (S - P) * i.y) / (p - P), ct = ((M - S) * i.x + (S - p) * o.x) / (M - p), Z = ((M - S) * i.y + (S - p) * o.y) / (M - p), G = ((k - S) * o.x + (S - M) * c.x) / (k - M), D = ((k - S) * o.y + (S - M) * c.y) / (k - M), X = ((M - S) * K + (S - P) * ct) / (M - P), ot = ((M - S) * q + (S - P) * Z) / (M - P), rt = ((k - S) * ct + (S - p) * G) / (k - p), j = ((k - S) * Z + (S - p) * D) / (k - p), z = ((M - S) * X + (S - p) * rt) / (M - p), ut = ((M - S) * ot + (S - p) * j) / (M - p);
    R = ti(t, T, F, z, ut, R), T = z, F = ut;
  }
  return R;
}
function Vd(t, e, i, o) {
  const c = t.currentStroke.ctx;
  if (!c) return;
  const d = t.descriptor, h = d.width, y = i * d.height, x = t.activeStroke;
  let w = e * h;
  if (x && Math.abs(w - x.prev.x) > h * 0.5 && (w += w < x.prev.x ? h : -h), !x) {
    const k = Mc(c, o, d), L = Math.max(0, Math.min(1, Number((o == null ? void 0 : o.opacity) ?? 1))), I = Math.max(0, Number((o == null ? void 0 : o.velocityWidthFactor) ?? 0)), R = String((o == null ? void 0 : o.toolKind) || "") === "eraser", T = String((o == null ? void 0 : o.layerKind) || "paint");
    c.globalCompositeOperation = "source-over", wo(k, w, y, 1), t.activeStroke = {
      pprev: { x: w, y },
      prev: { x: w, y },
      lastMidX: w,
      lastMidY: y,
      stampTex: k.stampTex,
      radiusPx: k.radiusPx,
      spacingPx: k.spacingPx,
      aspect: k.aspect,
      angle: k.angle,
      stampKind: k.stampKind,
      scatter: k.scatter,
      strokeOpacity: L,
      velocityWidthFactor: I,
      distSinceStamp: 0,
      isEraser: R,
      layerKind: T,
      pointCount: 1
    }, t.displayDirty = !0;
    return;
  }
  const P = (x.prev.x + w) * 0.5, p = (x.prev.y + y) * 0.5;
  c.globalCompositeOperation = "source-over";
  const M = {
    ctx: c,
    stampTex: x.stampTex,
    radiusPx: x.radiusPx,
    spacingPx: x.spacingPx,
    desc: d,
    aspect: x.aspect,
    angle: x.angle,
    stampKind: x.stampKind,
    scatter: x.scatter
  };
  x.pointCount === 1 ? x.distSinceStamp = ti(M, x.lastMidX, x.lastMidY, P, p, x.distSinceStamp) : x.distSinceStamp = Yi(
    M,
    x.pprev,
    { x: x.lastMidX, y: x.lastMidY },
    { x: P, y: p },
    { x: w, y },
    x.distSinceStamp
  ), x.pprev = x.prev, x.prev = { x: w, y }, x.lastMidX = P, x.lastMidY = p, x.pointCount++, t.displayDirty = !0;
}
function oo(t = {}) {
  const e = Math.max(1, Math.round(Number((t == null ? void 0 : t.width) || 2048))), i = Math.max(1, Math.round(Number((t == null ? void 0 : t.height) || 1024))), o = { kind: "ERP_GLOBAL", width: e, height: i }, c = /* @__PURE__ */ new Map(), d = sr(e, i), h = {
    descriptor: o,
    committedMask: sr(e, i),
    currentStroke: d,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, y = {
    actionGroupId: "__eraser__",
    descriptor: o,
    committedPaint: sr(e, i),
    currentStroke: d,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, x = sr(e, i);
  let w = null, P = "", p = null;
  function M(D) {
    return {
      actionGroupId: D,
      descriptor: o,
      committedPaint: sr(e, i),
      currentStroke: d,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function k(D) {
    let X = c.get(D);
    return X || (X = M(D), c.set(D, X)), X;
  }
  function L(D) {
    return P === "mask" ? h : w ? k(w) : y;
  }
  function I(D) {
    var ht;
    const X = !p || p.length !== D.length || D.some((ft, Mt) => ft !== p[Mt]);
    let ot = h.displayDirty || y.displayDirty || X;
    for (const ft of D) {
      const Mt = c.get(ft);
      if (Mt != null && Mt.displayDirty) {
        ot = !0;
        break;
      }
    }
    if (!ot) return;
    h.displayDirty = !1, y.displayDirty = !1;
    for (const ft of D) {
      const Mt = c.get(ft);
      Mt && (Mt.displayDirty = !1);
    }
    p = [...D];
    const rt = x.ctx;
    Yt(x);
    const j = P === "paint" && ((ht = w ? c.get(w) : y) == null ? void 0 : ht.activeStroke) || null, z = !!(j != null && j.isEraser);
    for (const ft of D) {
      const Mt = c.get(ft);
      if (!Mt) continue;
      const gt = w === Mt.actionGroupId && P === "paint" ? Mt.activeStroke : null;
      if (z)
        Gt = Je(Gt, e, i), Yt(Gt), Gt.ctx.drawImage(Mt.committedPaint.canvas, 0, 0), _n(Gt.ctx, d.canvas), rt.drawImage(Gt.canvas, 0, 0);
      else if (rt.drawImage(Mt.committedPaint.canvas, 0, 0), gt) {
        const Et = Mt.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, gt.strokeOpacity ?? 1));
        rt.save(), rt.globalAlpha = Et, rt.drawImage(d.canvas, 0, 0), rt.restore();
      }
    }
    const ut = P === "mask", lt = h.activeStroke;
    ut && (lt != null && lt.isEraser) ? (Gt = Je(Gt, e, i), Yt(Gt), Gt.ctx.drawImage(h.committedMask.canvas, 0, 0), _n(Gt.ctx, d.canvas), nr(rt, Gt.canvas)) : (nr(rt, h.committedMask.canvas), ut && lt && nr(rt, d.canvas));
  }
  function R(D) {
    var ot, rt, j, z, ut;
    for (const lt of c.values())
      Yt(lt.committedPaint), Yt(lt.currentStroke), lt.activeStroke = null, lt.displayDirty = !0;
    Yt(h.committedMask), Yt(h.currentStroke), h.activeStroke = null, h.displayDirty = !0, y.displayDirty = !0, p = null;
    const X = [
      ...Array.isArray((rt = (ot = D == null ? void 0 : D.painting) == null ? void 0 : ot.paint) == null ? void 0 : rt.strokes) ? D.painting.paint.strokes : [],
      ...Array.isArray((z = (j = D == null ? void 0 : D.painting) == null ? void 0 : j.mask) == null ? void 0 : z.strokes) ? D.painting.mask.strokes : []
    ];
    for (const lt of X) {
      if (((ut = lt == null ? void 0 : lt.targetSpace) == null ? void 0 : ut.kind) !== "ERP_GLOBAL") continue;
      const ht = String((lt == null ? void 0 : lt.layerKind) || "paint"), Mt = String((lt == null ? void 0 : lt.toolKind) || "pen") === "eraser";
      if (ht === "mask") {
        const W = h.descriptor;
        Mt ? (Gt = Je(Gt, W.width, W.height), Yt(Gt), ki(Gt.ctx, lt, W), _n(h.committedMask.ctx, Gt.canvas)) : ki(h.committedMask.ctx, lt, W);
        continue;
      }
      if (Mt) {
        Gt = Je(Gt, o.width, o.height), Yt(Gt), ki(Gt.ctx, lt, o);
        for (const W of c.values())
          _n(W.committedPaint.ctx, Gt.canvas), W.displayDirty = !0;
      } else {
        const W = String((lt == null ? void 0 : lt.actionGroupId) || "__default__"), gt = k(W), Et = gt.descriptor;
        ki(gt.committedPaint.ctx, lt, Et), gt.displayDirty = !0;
      }
    }
    I([...c.keys()]);
  }
  function T(D, X) {
    P = String((D == null ? void 0 : D.layerKind) || "");
    const ot = String((D == null ? void 0 : D.toolKind) || "") === "eraser";
    if (P === "mask")
      w = null, Yt(h.currentStroke), h.activeStroke = null, h.displayDirty = !0;
    else {
      const rt = ot ? y : k(String((D == null ? void 0 : D.actionGroupId) || "__default__"));
      w = ot ? "" : String((D == null ? void 0 : D.actionGroupId) || "__default__"), Yt(rt.currentStroke), rt.activeStroke = null, rt.displayDirty = !0;
    }
  }
  function F(D, X) {
    const ot = String((D == null ? void 0 : D.layerKind) || "paint"), rt = String((D == null ? void 0 : D.toolKind) || "") === "eraser", j = ot === "mask" ? h : rt ? y : k(String((D == null ? void 0 : D.actionGroupId) || w || "__default__")), z = j.activeStroke, ut = j.descriptor;
    if (z && z.pointCount > 1) {
      const ht = j.currentStroke.ctx;
      ht.globalCompositeOperation = "source-over";
      const ft = {
        ctx: ht,
        stampTex: z.stampTex,
        radiusPx: z.radiusPx,
        spacingPx: z.spacingPx,
        desc: ut,
        aspect: z.aspect,
        angle: z.angle,
        stampKind: z.stampKind,
        scatter: z.scatter
      };
      z.pointCount === 2 ? ti(ft, z.lastMidX, z.lastMidY, z.prev.x, z.prev.y, z.distSinceStamp) : Yi(ft, z.pprev, { x: z.lastMidX, y: z.lastMidY }, z.prev, z.prev, z.distSinceStamp);
    }
    j.lassoPreviewActive && (Yt(j.currentStroke), Gi(j.currentStroke.ctx, D, ut), j.lassoPreviewActive = !1);
    const lt = ot === "mask" ? h.committedMask : j.committedPaint;
    if (rt && ot === "paint")
      for (const ht of c.values())
        _n(ht.committedPaint.ctx, j.currentStroke.canvas), ht.displayDirty = !0;
    else if (rt)
      _n(lt.ctx, j.currentStroke.canvas);
    else {
      const ht = Math.max(0, Math.min(1, (z == null ? void 0 : z.strokeOpacity) ?? 1));
      lt.ctx.save(), lt.ctx.globalAlpha = ht, lt.ctx.drawImage(j.currentStroke.canvas, 0, 0), lt.ctx.restore();
    }
    Yt(j.currentStroke), j.activeStroke = null, j.displayDirty = !0, w = null, P = "", I([...c.keys()]);
  }
  function U(D) {
    if (P === "mask")
      Yt(h.currentStroke), h.activeStroke = null, h.lassoPreviewActive = !1, h.displayDirty = !0;
    else if (P === "paint" && !w)
      Yt(y.currentStroke), y.activeStroke = null, y.lassoPreviewActive = !1, y.displayDirty = !0;
    else if (w) {
      const X = c.get(w);
      X && (Yt(X.currentStroke), X.activeStroke = null, X.lassoPreviewActive = !1, X.displayDirty = !0);
    }
    w = null, P = "", I([...c.keys()]);
  }
  function S(D, X) {
    var rt;
    if (P = String((D == null ? void 0 : D.layerKind) || ""), String(((rt = D == null ? void 0 : D.geometry) == null ? void 0 : rt.geometryKind) || "") === "lasso_fill") {
      if (P === "mask")
        Yt(h.currentStroke), Gi(h.currentStroke.ctx, D, h.descriptor), h.lassoPreviewActive = !0, h.displayDirty = !0;
      else {
        const j = String((D == null ? void 0 : D.toolKind) || "") === "eraser", z = j ? y : k(String((D == null ? void 0 : D.actionGroupId) || w || "__default__"));
        w = j ? "" : String((D == null ? void 0 : D.actionGroupId) || w || "__default__"), Yt(z.currentStroke), Gi(z.currentStroke.ctx, D, z.descriptor), z.lassoPreviewActive = !0, z.displayDirty = !0;
      }
      I([...c.keys()]);
    }
  }
  function K(D) {
    return I(D ?? [...c.keys()]), {
      displayPaint: x,
      committedMask: h.committedMask,
      descriptor: o
    };
  }
  function q(D) {
    return c.get(String(D)) ?? null;
  }
  function ct() {
    return [...c.keys()];
  }
  function Z(D) {
    var ut;
    const X = c.get(String(D));
    if (!X) return null;
    const ot = P === "paint" && w === X.actionGroupId, rt = P === "paint" && ((ut = w ? c.get(w) : y) == null ? void 0 : ut.activeStroke) || null;
    if (rt != null && rt.isEraser)
      return _e = Je(_e, e, i), Yt(_e), _e.ctx.drawImage(X.committedPaint.canvas, 0, 0), _n(_e.ctx, d.canvas), _e.canvas;
    const j = ot ? X.activeStroke : null;
    if (!j) return X.committedPaint.canvas;
    _e = Je(_e, e, i), Yt(_e), _e.ctx.drawImage(X.committedPaint.canvas, 0, 0);
    const z = X.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, j.strokeOpacity ?? 1));
    return _e.ctx.save(), _e.ctx.globalAlpha = z, _e.ctx.drawImage(d.canvas, 0, 0), _e.ctx.restore(), _e.canvas;
  }
  function G() {
    return vn = Je(vn, e, i), Yt(vn), nr(vn.ctx, h.committedMask.canvas), P === "mask" && h.activeStroke && (h.activeStroke.isEraser ? (Gt = Je(Gt, e, i), Yt(Gt), Gt.ctx.drawImage(h.committedMask.canvas, 0, 0), _n(Gt.ctx, d.canvas), Yt(vn), nr(vn.ctx, Gt.canvas)) : nr(vn.ctx, d.canvas)), vn.canvas;
  }
  return {
    rebuildCommitted: R,
    beginStroke: T,
    appendStrokePoint: Vd,
    updateActiveStroke: S,
    commitActiveStroke: F,
    cancelActiveStroke: U,
    getErpTarget: K,
    ensureTarget: L,
    getGroupTarget: q,
    getGroupDisplayCanvas: Z,
    getMaskDisplayCanvas: G,
    getAllGroupIds: ct
  };
}
function O(t, e, i) {
  return Math.max(e, Math.min(i, t));
}
function ji(t, e, i) {
  const o = Number(t);
  return Number.isFinite(o) ? Math.max(Number(e), Math.min(Number(i), o)) : Number(e);
}
function pe(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function Hd(t, e) {
  let i = pe(e) - pe(t);
  return i > 180 && (i -= 360), i < -180 && (i += 360), i;
}
const Bs = 0.12, Ud = 3, Gd = 35, jd = 140, Xa = 100, Bd = 20, Ks = 0.8;
function Kd(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function ca(t = {}) {
  const e = typeof t.getView == "function" ? t.getView : (() => ({ yaw: 0, pitch: 0, fov: Xa })), i = typeof t.setView == "function" ? t.setView : (() => {
  }), o = typeof t.getInvert == "function" ? t.getInvert : (() => ({ x: 1, y: 1 })), c = typeof t.getUnwrapRect == "function" ? t.getUnwrapRect : (() => ({ w: 1, h: 1 })), d = typeof t.onInteraction == "function" ? t.onInteraction : (() => {
  }), h = typeof t.onDebug == "function" ? t.onDebug : null, y = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function x(R, T = null) {
    h && h(R, T);
  }
  function w(R, T, F = null, U = performance.now()) {
    return y.drag.active = !0, y.drag.lastX = Number(R || 0), y.drag.lastY = Number(T || 0), y.drag.lastTs = Number(U || performance.now()), y.drag.pointerId = F, y.inertia.active = !1, y.inertia.vx = 0, y.inertia.vy = 0, y.inertia.lastTs = y.drag.lastTs, y.velHistory = [], x("drag", { phase: "start", x: y.drag.lastX, y: y.drag.lastY, pointerId: F }), !0;
  }
  function P(R, T, F = "pano", U = performance.now()) {
    if (!y.drag.active) return !1;
    const S = Number(U || performance.now()), K = Number(R), q = Number(T), ct = K - y.drag.lastX, Z = q - y.drag.lastY;
    y.drag.lastX = K, y.drag.lastY = q, y.drag.lastTs = S;
    const G = o() || { x: 1, y: 1 }, D = Number(G.x || 1), X = Number(G.y || 1), ot = { ...e() };
    let rt = 0, j = 0;
    if (F === "unwrap") {
      const ut = c() || { w: 1, h: 1 }, lt = Math.max(1, Number(ut.w || 1)), ht = Math.max(1, Number(ut.h || 1)), ft = ct / lt, Mt = Z / ht;
      rt = -ft * 360 * D, j = Mt * 180 * X;
    } else
      rt = -ct * Bs * D, j = Z * Bs * X;
    ot.yaw = pe(Number(ot.yaw || 0) + rt), ot.pitch = O(Number(ot.pitch || 0) + j, -89.9, 89.9), i(ot), y.velHistory.push({ ts: S, yaw: ot.yaw, pitch: ot.pitch });
    let z = 0;
    for (; z < y.velHistory.length - 1 && y.velHistory[z].ts < S - 100; ) z++;
    return z > 0 && y.velHistory.splice(0, z), y.inertia.active = !1, y.inertia.lastTs = S, d(), x("drag", { phase: "move", dx: ct, dy: Z, dYaw: rt, dPitch: j }), !0;
  }
  function p(R = performance.now()) {
    if (!y.drag.active) return !1;
    y.drag.active = !1;
    const T = Number(R || performance.now());
    y.drag.lastTs = T;
    const F = y.velHistory.filter((S) => T - S.ts <= 80);
    if (F.length >= 2) {
      const S = F[0], K = F.at(-1), q = Math.max(1e-3, (K.ts - S.ts) / 1e3);
      let ct = K.yaw - S.yaw;
      ct > 180 && (ct -= 360), ct < -180 && (ct += 360), y.inertia.vx = ct / q, y.inertia.vy = (K.pitch - S.pitch) / q;
    } else
      y.inertia.vx = 0, y.inertia.vy = 0;
    y.velHistory = [];
    const U = Math.hypot(y.inertia.vx, y.inertia.vy);
    return y.inertia.active = U > Bd, y.inertia.lastTs = T, x("drag", { phase: "end", speed: U, inertiaActive: y.inertia.active }), !0;
  }
  function M(R = performance.now()) {
    if (!y.inertia.active) return !1;
    const T = Number(R || performance.now()), F = Math.max(1e-3, (T - (y.inertia.lastTs || T)) / 1e3);
    y.inertia.lastTs = T;
    const U = { ...e() };
    U.yaw = pe(Number(U.yaw || 0) + y.inertia.vx * F), U.pitch = O(Number(U.pitch || 0) + y.inertia.vy * F, -89.9, 89.9);
    const S = Math.exp(-5.5 * F);
    return y.inertia.vx *= S, y.inertia.vy *= S, Math.abs(y.inertia.vx) < Ks && Math.abs(y.inertia.vy) < Ks && (y.inertia.vx = 0, y.inertia.vy = 0, y.inertia.active = !1), i(U), d(), y.inertia.active;
  }
  function k(R) {
    const T = Math.sign(Number(R || 0));
    if (!T) return !1;
    const F = { ...e() }, U = Number(F.fov || Xa);
    return F.fov = O(U + T * Ud, Gd, jd), i(F), d(), x("wheel", { deltaSign: T, fovBefore: U, fovAfter: F.fov }), !0;
  }
  function L(R) {
    return k(Math.sign(Kd(R)));
  }
  function I() {
    i({ yaw: 0, pitch: 0, fov: Xa }), y.inertia.active = !1, y.inertia.vx = 0, y.inertia.vy = 0, d();
  }
  return {
    state: y,
    startDrag: w,
    moveDrag: P,
    endDrag: p,
    stepInertia: M,
    applyWheel: k,
    applyWheelEvent: L,
    resetView: I
  };
}
function so(t) {
  const e = String(t || "").trim();
  return e ? e === "PanoramaPreview" || e === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(e) : !1;
}
const $n = Math.PI / 180;
function Ve(t, e = 0) {
  const i = Number(t);
  return Number.isFinite(i) ? i : Number(e);
}
function zn(t, e, i) {
  return { x: t, y: e, z: i };
}
function Xi(t, e) {
  return zn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function dr(t, e) {
  return zn(t.x * e, t.y * e, t.z * e);
}
function Kr(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return zn(t.x / e, t.y / e, t.z / e);
}
function Wd(t, e) {
  const i = Number(t || 0) * $n, o = Number(e || 0) * $n, c = Math.cos(o);
  return zn(c * Math.sin(i), Math.sin(o), c * Math.cos(i));
}
function Ws(t, e) {
  return zn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function qd(t, e, i = 0) {
  const o = Wd(t, e), c = zn(0, 1, 0);
  let d = Ws(c, o);
  Math.hypot(d.x, d.y, d.z) < 1e-6 && (d = zn(1, 0, 0)), d = Kr(d);
  let h = Kr(Ws(o, d));
  const y = Number(i || 0) * $n, x = Math.cos(y), w = Math.sin(y), P = Xi(dr(d, x), dr(h, w)), p = Xi(dr(d, -w), dr(h, x));
  return { fwd: o, right: Kr(P), up: Kr(p) };
}
function Yd(t, e, i, o = 0.45) {
  const c = (t.x + e.x + i.x) / 3, d = (t.y + e.y + i.y) / 3, h = (y) => {
    const x = y.x - c, w = y.y - d, P = Math.hypot(x, w) || 1;
    return { x: y.x + x / P * o, y: y.y + w / P * o };
  };
  return [h(t), h(e), h(i)];
}
function qs(t, e, i, o, c, d, h, y) {
  const x = i.x * (o.y - c.y) + o.x * (c.y - i.y) + c.x * (i.y - o.y);
  if (Math.abs(x) < 1e-6) return !1;
  const [w, P, p] = Yd(d, h, y, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(w.x, w.y), t.lineTo(P.x, P.y), t.lineTo(p.x, p.y), t.closePath(), t.clip();
  const M = (d.x * (o.y - c.y) + h.x * (c.y - i.y) + y.x * (i.y - o.y)) / x, k = (d.x * (c.x - o.x) + h.x * (i.x - c.x) + y.x * (o.x - i.x)) / x, L = (d.x * (o.x * c.y - c.x * o.y) + h.x * (c.x * i.y - i.x * c.y) + y.x * (i.x * o.y - o.x * i.y)) / x, I = (d.y * (o.y - c.y) + h.y * (c.y - i.y) + y.y * (i.y - o.y)) / x, R = (d.y * (c.x - o.x) + h.y * (i.x - c.x) + y.y * (o.x - i.x)) / x, T = (d.y * (o.x * c.y - c.x * o.y) + h.y * (c.x * i.y - i.x * c.y) + y.y * (i.x * o.y - o.x * i.y)) / x;
  return t.transform(M, I, k, R, L, T), t.drawImage(e, 0, 0), t.restore(), !0;
}
function Xd(t, e) {
  if (!e || !e.complete || !(e.naturalWidth || e.width)) return null;
  const i = Number(e.naturalWidth || e.width || 0), o = Number(e.naturalHeight || e.height || 0);
  if (i <= 1 || o <= 1) return null;
  t.__panoSharedWrappedErpCache || (t.__panoSharedWrappedErpCache = { src: "", w: 0, h: 0, canvas: null });
  const c = String(e.src || ""), d = t.__panoSharedWrappedErpCache;
  if (d.canvas && d.src === c && d.w === i && d.h === o) return d.canvas;
  const h = document.createElement("canvas");
  h.width = i * 2, h.height = o;
  const y = h.getContext("2d");
  return y ? (y.drawImage(e, 0, 0, i, o), y.drawImage(e, i, 0, i, o), t.__panoSharedWrappedErpCache = { src: c, w: i, h: o, canvas: h }, h) : null;
}
function kc(t) {
  const e = t || {}, i = Ve(e.yaw_deg, 0), o = Ve(e.pitch_deg, 0), c = Ve(e.roll_deg ?? e.rot_deg, 0), d = ji(Ve(e.hFOV_deg, 90), 1, 179), h = ji(Ve(e.vFOV_deg, 60), 1, 179), y = Math.tan(d * $n * 0.5) / Math.max(1e-6, Math.tan(h * $n * 0.5)), x = ji(y, 0.1, 10);
  return {
    yaw: i,
    pitch: o,
    roll: c,
    hfov: d,
    vfov: h,
    aspect: x
  };
}
function Zd(t, e, i, o, c, d = "balanced") {
  const h = (G = {}) => {
    e.__panoCutoutProjectionStats = {
      drawnTriCount: 0,
      Nu: 0,
      Nv: 0,
      rectW: Ve(o == null ? void 0 : o.w, 0),
      rectH: Ve(o == null ? void 0 : o.h, 0),
      imageW: Ve((i == null ? void 0 : i.naturalWidth) || (i == null ? void 0 : i.width), 0),
      imageH: Ve((i == null ? void 0 : i.naturalHeight) || (i == null ? void 0 : i.height), 0),
      ...G
    };
  };
  if (!t || !e || !i || !o || !c)
    return e && h({ reason: "invalid_args" }), !1;
  if (!i.complete || !(i.naturalWidth || i.width))
    return h({ reason: "image_not_ready" }), !1;
  const y = Ve(o.w, 0), x = Ve(o.h, 0);
  if (y <= 1 || x <= 1)
    return h({ reason: "invalid_rect", rectW: y, rectH: x }), !1;
  const w = Number(i.naturalWidth || i.width || 0), P = Number(i.naturalHeight || i.height || 0);
  if (w <= 1 || P <= 1)
    return h({ reason: "invalid_image", imageW: w, imageH: P }), !1;
  const p = Xd(e, i) || i, { yaw: M, pitch: k, roll: L, hfov: I, vfov: R } = kc(c), T = qd(M, k, L), F = Math.tan(I * $n * 0.5), U = Math.tan(R * $n * 0.5), S = d === "high" ? 20 : d === "draft" ? 10 : 14, K = d === "high" ? 14 : d === "draft" ? 7 : 10;
  let q = 0;
  const ct = Array.from({ length: K + 1 }, () => Array(S + 1).fill(null)), Z = Array.from({ length: K + 1 }, () => Array(S + 1).fill(null));
  for (let G = 0; G <= K; G += 1)
    for (let D = 0; D <= S; D += 1) {
      const X = D / S, ot = G / K, rt = (X * 2 - 1) * F, j = (1 - ot * 2) * U, z = Kr(Xi(Xi(T.fwd, dr(T.right, rt)), dr(T.up, j))), ut = Math.atan2(z.x, z.z), lt = Math.asin(ji(z.y, -1, 1));
      let ht = (ut / (2 * Math.PI) + 0.5) * w;
      for (; ht < 0; ) ht += w;
      for (; ht >= w; ) ht -= w;
      const ft = (0.5 - lt / Math.PI) * P;
      ct[G][D] = { x: o.x + X * o.w, y: o.y + ot * o.h }, Z[G][D] = { x: ht, y: ft };
    }
  for (let G = 0; G < K; G += 1)
    for (let D = 0; D < S; D += 1) {
      const X = ct[G][D], ot = ct[G][D + 1], rt = ct[G + 1][D], j = ct[G + 1][D + 1], z = { ...Z[G][D] }, ut = { ...Z[G][D + 1] }, lt = { ...Z[G + 1][D] }, ht = { ...Z[G + 1][D + 1] }, ft = Math.min(z.x, ut.x, lt.x, ht.x);
      Math.max(z.x, ut.x, lt.x, ht.x) - ft > w * 0.5 && [z, ut, lt, ht].forEach((W) => {
        W.x < w * 0.5 && (W.x += w);
      }), qs(t, p, z, ut, ht, X, ot, j) && (q += 1), qs(t, p, z, ht, lt, X, j, rt) && (q += 1);
    }
  return h({
    drawnTriCount: q,
    Nu: S,
    Nv: K,
    rectW: y,
    rectH: x,
    imageW: w,
    imageH: P,
    reason: "ok"
  }), q > 0;
}
const Pc = 0.28;
function Jd(t) {
  const e = t && typeof t == "object" ? t : {}, i = O(Number(e.x0 ?? 0), 0, 1), o = O(Number(e.y0 ?? 0), 0, 1), c = O(Number(e.x1 ?? 1), 0, 1), d = O(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(i, c),
    y0: Math.min(o, d),
    x1: Math.max(i, c),
    y1: Math.max(o, d)
  };
}
function Qd(t, e = {}) {
  if (!t || typeof t != "object") return null;
  const i = String(t.asset_id || t.assetId || "").trim(), o = t.type === "external_image" || t.source_kind === "external_image", c = i || (o ? String(t.id || "").trim() : ""), d = e.includeHidden === !0, h = t.visible === !1, y = d && o && h;
  return {
    id: String(t.id || ""),
    assetId: c,
    zIndex: Number(t.z_index || t.zIndex || 0),
    yawDeg: Number(t.yaw_deg || t.yawDeg || 0),
    pitchDeg: Number(t.pitch_deg || t.pitchDeg || 0),
    rollDeg: Number(t.rot_deg ?? t.roll_deg ?? t.rollDeg ?? 0),
    hFovDeg: O(Number(t.hFOV_deg || t.hFovDeg || 30), 1, 179),
    vFovDeg: O(Number(t.vFOV_deg || t.vFovDeg || 30), 1, 179),
    crop: Jd(t.crop),
    opacity: y ? Pc : O(Number(t.opacity ?? 1), 0, 1),
    visible: y ? !0 : t.visible !== !1,
    external: o
  };
}
function ua(t, e = {}) {
  var d;
  const i = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], o = e.includeHidden === !0;
  return {
    stickers: i.map((h) => Qd(h, { includeHidden: o })).filter((h) => h && (o || h.visible !== !1)).sort((h, y) => Number(h.zIndex || 0) - Number(y.zIndex || 0)),
    selectedId: e.selectedId ?? ((d = t == null ? void 0 : t.active) == null ? void 0 : d.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function Cc(t, e, i = {}) {
  if (typeof e != "function") return [];
  const o = i.scene || ua(t, i), c = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, d = [], h = /* @__PURE__ */ new Set();
  return o.stickers.forEach((y) => {
    var L;
    const x = String((y == null ? void 0 : y.assetId) || "").trim(), w = x || (y != null && y.external ? String((y == null ? void 0 : y.id) || "").trim() : "");
    if (!w || h.has(w)) return;
    const P = x ? c[x] : null, p = e(w, P, y), M = Number((p == null ? void 0 : p.naturalWidth) || (p == null ? void 0 : p.videoWidth) || (p == null ? void 0 : p.width) || 0), k = Number((p == null ? void 0 : p.naturalHeight) || (p == null ? void 0 : p.videoHeight) || (p == null ? void 0 : p.height) || 0);
    !p || M <= 0 || k <= 0 || (h.add(w), d.push({
      assetId: w,
      source: p,
      revision: String(((L = i.revisionFor) == null ? void 0 : L.call(i, w, P, p)) ?? [
        w,
        Number(p.naturalWidth || p.videoWidth || p.width || 0),
        Number(p.naturalHeight || p.videoHeight || p.height || 0),
        String(p.currentSrc || p.src || "")
      ].join("|"))
    }));
  }), d;
}
function xo(t) {
  return {
    mode: "panorama",
    yawDeg: Number((t == null ? void 0 : t.yaw) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch) || 0),
    fovDeg: O(Number((t == null ? void 0 : t.fov) || 100), 1, 179)
  };
}
function tf(t) {
  return xo(t);
}
function fr(t) {
  const e = kc(t || {});
  return {
    mode: "cutout",
    yawDeg: Number((t == null ? void 0 : t.yaw_deg) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch_deg) || 0),
    rollDeg: Number((e == null ? void 0 : e.roll) ?? (t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0),
    hFovDeg: O(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179),
    vFovDeg: O(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1)
  };
}
const { app: Zt } = Vi;
function co() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (Vi == null ? void 0 : Vi.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Vn = Math.PI / 180, gr = { Nu: 14, Nv: 9 }, Za = { Nu: 24, Nv: 14 }, Ys = { Nu: 32, Nv: 20 }, ef = 10, nf = 120;
function Ac() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ft(t, e, i = null) {
  if (!Ac()) return;
  const o = (t == null ? void 0 : t.id) ?? "?";
  if (i == null) {
    console.info(`[PANO_PREVIEW][${e}] node=${o}`);
    return;
  }
  console.info(`[PANO_PREVIEW][${e}] node=${o}`, i);
}
function Vr(t) {
  var i, o, c, d, h;
  if (!t) return null;
  const e = (i = t.getBoundingClientRect) == null ? void 0 : i.call(t);
  return {
    tag: String(t.tagName || "").toLowerCase(),
    className: String(t.className || ""),
    clientW: Number(t.clientWidth || 0),
    clientH: Number(t.clientHeight || 0),
    offsetW: Number(t.offsetWidth || 0),
    offsetH: Number(t.offsetHeight || 0),
    rectW: Number((e == null ? void 0 : e.width) || 0),
    rectH: Number((e == null ? void 0 : e.height) || 0),
    styleHeight: String(((o = t.style) == null ? void 0 : o.height) || ""),
    styleWidth: String(((c = t.style) == null ? void 0 : c.width) || ""),
    stylePos: String(((d = t.style) == null ? void 0 : d.position) || ""),
    styleTransform: String(((h = t.style) == null ? void 0 : h.transform) || "")
  };
}
function rf() {
  if (document.getElementById("pano-node-preview-mode-style")) return;
  const t = document.createElement("style");
  t.id = "pano-node-preview-mode-style", t.textContent = `
    .pano-node-preview-dom {
      outline: none !important;
    }
    .pano-node-preview-dom.pano-node-preview--stickers canvas {
      object-fit: cover;
    }
    .pano-node-preview-dom.pano-node-preview--cutout canvas {
      object-fit: contain;
    }
    .pano-node-preview-dom button:hover {
      background: rgba(46,46,50,0.98) !important;
      border-color: rgba(120,120,130,1) !important;
      color: #fff !important;
      box-shadow: 0 0 8px rgba(0,0,0,0.4);
    }
    .pano-node-preview-dom button:active {
      background: rgba(28,28,30,1) !important;
      transform: translateY(1px);
    }
  `, document.head.appendChild(t);
}
function Sn(t) {
  const e = t == null ? void 0 : t.size;
  if (e == null) return null;
  const i = (o, c) => {
    const d = Number(o), h = Number(c);
    return !Number.isFinite(d) || !Number.isFinite(h) ? null : [d, h];
  };
  if (typeof e == "object" || typeof e == "function") {
    if (e[0] !== void 0 || e[1] !== void 0) {
      const o = i(e[0], e[1]);
      if (o) return o;
    }
    if (e.width !== void 0 || e.height !== void 0) {
      const o = i(e.width, e.height);
      if (o) return o;
    }
    if (e.w !== void 0 || e.h !== void 0) {
      const o = i(e.w, e.h);
      if (o) return o;
    }
  }
  return null;
}
function af(t) {
  const e = Sn(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function Ic(t, e, i) {
  af(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(i || 1))]);
}
function uo(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function Ec(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function of(t) {
  return so(Ec(t));
}
function On(t = null) {
  var d, h;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), i = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), o = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", c = String(((h = (d = Zt == null ? void 0 : Zt.canvas) == null ? void 0 : d.constructor) == null ? void 0 : h.name) || "");
  return [e, o, i, c].join("|");
}
function Dc(t, e = null) {
  const i = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return i === "legacy_draw" || i === "dom" ? {
    chosenPath: i,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: On(e)
  } : String(t) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: On(e)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: On(e)
  };
}
const qr = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(t) {
    !t || String(t.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(t), this.lastSignature || (this.lastSignature = On(t)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(t) {
    t && this.nodes.delete(t), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const t = this.nodes.values().next().value || null, e = On(t);
    e !== this.lastSignature && (this.lastSignature = e, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((o) => {
        if (!(!o || String(o.__panoPreviewMode || "") !== "stickers"))
          try {
            o.__panoRebindGeneration = this.generation, Ft(o, "path.switch", {
              from: String(o.__panoStickersPath || "unknown"),
              to: "rebind",
              reason: "frontend_signature_changed",
              signature: e,
              generation: this.generation
            }), Lc(o).rebind(o.__panoAttachOptions || { mode: "stickers" });
          } catch (c) {
            Ft(o, "path.switch.error", { message: String((c == null ? void 0 : c.message) || c || "unknown") });
          }
      });
    }, 300));
  }
};
function Lc(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(i = {}) {
      const o = String(i.mode || "stickers") === "cutout" ? "cutout" : "stickers", c = o === "cutout" ? "dom" : Dc(o, t).chosenPath, d = uo(t);
      this.activeBackend = d;
      const h = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", y = t.__panoPreviewNoPreview === !0, x = i.noPreview === !0;
      if (d === c && d !== "none" && h === o && y === x) {
        t.__panoAttachOptions = { ...i, mode: o }, t.__panoPreviewMode = o, t.__panoPreviewNoPreview = x, t.__panoPreviewButtonText = String(i.buttonText || (o === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof i.onOpen == "function" ? i.onOpen : t.__panoOpenEditor;
        return;
      }
      d !== "none" && mr(t, { keepMonitor: o === "stickers" }), Wf(t, { ...i, mode: o, __panoForcedPath: c }), this.activeBackend = uo(t);
    },
    rebind(i = {}) {
      const o = String(i.mode || (t == null ? void 0 : t.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      mr(t, { keepMonitor: o === "stickers" }), this.activeBackend = "none", this.attach({ ...i, mode: o });
    },
    teardown() {
      mr(t), this.activeBackend = "none";
    }
  };
  return t.__panoPreviewController = e, e;
}
function sf(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function mr(t, e = {}) {
  var y, x, w, P, p;
  if (!t) return;
  Qi.unregister(t), sf(t);
  const i = !!t.__panoDomPreview, o = !!t.__panoLegacyPreviewHooked, c = typeof t.__panoDomRestore == "function", d = typeof t.__panoLegacyRestore == "function";
  try {
    (y = t.__panoDomRestore) == null || y.call(t);
  } catch {
  }
  t.__panoDomRestore = null;
  try {
    (x = t.__panoLegacyRestore) == null || x.call(t);
  } catch {
  }
  t.__panoLegacyRestore = null;
  const h = t.__panoDomPreview;
  if (h) {
    try {
      (w = h.state) != null && w.raf && cancelAnimationFrame(h.state.raf);
    } catch {
    }
    try {
      (p = (P = h.root) == null ? void 0 : P.remove) == null || p.call(P);
    } catch {
    }
  }
  try {
    Array.isArray(t.widgets) && (t.widgets = t.widgets.filter((M) => {
      if (M === (h == null ? void 0 : h.widget)) return !1;
      const k = String((M == null ? void 0 : M.name) || ""), L = String((M == null ? void 0 : M.type) || ""), I = co();
      return !(k === I || L === I || k === "pano_preview" || L === "pano_preview" || k === "preview" && L === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", Ft(t, "teardown.done", {
    reason: String(e.reason || ""),
    removedDom: i || c,
    removedLegacy: o || d,
    keepMonitor: !!e.keepMonitor
  }), e.keepMonitor || qr.unregister(t);
}
function Hn(t, e, i) {
  return { x: t, y: e, z: i };
}
function Xs(t, e) {
  return Hn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Pi(t, e) {
  return Hn(t.x * e, t.y * e, t.z * e);
}
function Ja(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Zs(t, e) {
  return Hn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Ci(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Hn(t.x / e, t.y / e, t.z / e);
}
function Dn(t, e) {
  const i = t * Vn, o = e * Vn, c = Math.cos(o);
  return Hn(c * Math.sin(i), Math.sin(o), c * Math.cos(i));
}
function So(t, e, i = 0) {
  const o = Dn(t, e), c = Hn(0, 1, 0);
  let d = Zs(c, o);
  Math.hypot(d.x, d.y, d.z) < 1e-6 && (d = Hn(1, 0, 0)), d = Ci(d);
  let h = Ci(Zs(o, d));
  const y = i * Vn, x = Math.cos(y), w = Math.sin(y), P = Xs(Pi(d, x), Pi(h, w)), p = Xs(Pi(d, -w), Pi(h, x));
  return { fwd: o, right: Ci(P), up: Ci(p) };
}
function cf(t, e = "#00ff00") {
  const i = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    bg_color: e,
    output_preset: 2048,
    assets: {},
    stickers: [],
    shots: [],
    active: { selected_sticker_id: null }
  };
  let o = null;
  if (t && typeof t == "object")
    o = t;
  else if (typeof t == "string") {
    const c = t.trim();
    if (!c) return i;
    try {
      o = JSON.parse(c);
    } catch {
      return i;
    }
  } else
    return i;
  try {
    const c = o;
    return !c || typeof c != "object" || Array.isArray(c) ? i : {
      ...i,
      ...c,
      assets: c.assets && typeof c.assets == "object" ? c.assets : {},
      stickers: Array.isArray(c.stickers) ? c.stickers : [],
      shots: Array.isArray(c.shots) ? c.shots : [],
      active: c.active && typeof c.active == "object" ? c.active : i.active
    };
  } catch {
    return i;
  }
}
function uf(t) {
  var i;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((i = Zi(t, "state_json")) == null ? void 0 : i.value) || "");
}
function Tc(t) {
  var d;
  const e = uf(t), i = String(((d = Zi(t, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), o = t.__panoStateCache;
  if (o && o.source === e && o.bg === i)
    return o.parsed;
  const c = cf(e, i);
  return t.__panoStateCache = { source: e, bg: i, parsed: c }, c;
}
function Zi(t, e) {
  var i;
  return ((i = t.widgets) == null ? void 0 : i.find((o) => o.name === e)) || null;
}
function Js(t, e, i) {
  return !!i && t >= i.x && t <= i.x + i.w && e >= i.y && e <= i.y + i.h;
}
function Rc(t, e) {
  if (!t || e == null) return null;
  const i = t.links;
  return i ? i instanceof Map ? i.get(e) || i.get(Number(e)) || i.get(String(e)) || null : i[e] || i[String(e)] || null : null;
}
function lf(t, e) {
  var i, o;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((i = t._nodes_by_id) == null ? void 0 : i[e]) || ((o = t._nodes_by_id) == null ? void 0 : o[String(e)]) || null;
}
function Fc(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Oc(t, e, i = null) {
  var c, d;
  let o = null;
  try {
    o = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    o = null;
  }
  if ((c = o == null ? void 0 : o.isSubgraphNode) != null && c.call(o))
    try {
      const h = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, y = h ? (d = o.resolveSubgraphOutputLink) == null ? void 0 : d.call(o, Number(h.origin_slot ?? 0)) : null;
      y != null && y.outputNode && (o = y.outputNode);
    } catch {
    }
  return !o && i != null && (o = lf(t == null ? void 0 : t.graph, i)), o;
}
function df(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((i) => String((i == null ? void 0 : i.name) || "")).filter(Boolean);
}
function No(t, e = []) {
  const i = df(t), o = [];
  return e.forEach((c) => {
    i.includes(String(c)) && o.push(String(c));
  }), i.forEach((c) => {
    (c === "erp_image" || c === "bg_erp") && !o.includes(c) && o.push(c);
  }), o.length ? o : e;
}
function Qs(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const i = e.split(":").map((o) => String(o).trim()).filter(Boolean);
  return { full: e, tail: i.length ? i[i.length - 1] : e };
}
function Ji(t, e) {
  const i = Qs(t), o = Qs(e);
  return !i.full || !o.full ? !1 : i.full === o.full || i.tail === o.full || i.full === o.tail || i.tail === o.tail;
}
function ff(t, e = ["erp_image", "bg_erp"]) {
  var x;
  const i = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!i.length) return [];
  const c = No(t, e).map((w) => i.findIndex((P) => String((P == null ? void 0 : P.name) || "") === String(w))).filter((w) => w >= 0), d = i.map((w, P) => ({ input: w, idx: P })).filter(({ input: w }) => String((w == null ? void 0 : w.type) || "").toUpperCase() === "IMAGE").map(({ idx: w }) => w), h = [.../* @__PURE__ */ new Set([...c, ...d])], y = [];
  for (const w of h) {
    const P = Oc(t, w);
    if ((P == null ? void 0 : P.id) != null) {
      y.push(String(P.id));
      continue;
    }
    const p = (x = i[w]) == null ? void 0 : x.link;
    if (p == null) continue;
    const M = Rc(t == null ? void 0 : t.graph, p), { originId: k } = Fc(M);
    k != null && y.push(String(k));
  }
  return [...new Set(y)];
}
const Qi = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = we) != null && t.addEventListener) || (this.listener = (e) => {
      const i = (e == null ? void 0 : e.detail) || {}, o = String((i == null ? void 0 : i.display_node) ?? (i == null ? void 0 : i.node) ?? "").trim();
      [...this.nodes].forEach((d) => {
        var P, p, M, k, L;
        if (!d) return;
        const h = Ji(o, d == null ? void 0 : d.id), x = ff(d, ["erp_image", "bg_erp"]).some((I) => Ji(o, I)), w = h ? "self" : x ? "upstream" : "global_executed";
        Ft(d, "exec-refresh", { executedId: o, reason: w }), fo(d), Ft(d, "invalidate", { cachesCleared: !0 }), (p = (P = d.__panoDomPreview) == null ? void 0 : P.requestDraw) == null || p.call(P), (M = d.setDirtyCanvas) == null || M.call(d, !0, !0), (L = (k = d.graph) == null ? void 0 : k.setDirtyCanvas) == null || L.call(k, !0, !0), Ft(d, "draw-request", {
          route: String(d.__panoPreviewMode || ""),
          mode: String(d.__panoPreviewMode || ""),
          reason: w
        });
      });
    }, we.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var t;
    !this.bound || !this.listener || !((t = we) != null && t.removeEventListener) || (we.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(t) {
    t && (this.nodes.add(t), this.ensureBound());
  },
  unregister(t) {
    t && this.nodes.delete(t), this.nodes.size || this.ensureUnbound();
  }
};
function ta(t) {
  var d;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const i = new URLSearchParams();
  i.set("filename", e);
  const o = String(
    t.storage || (String(t.type || "").trim().toLowerCase() === "comfy_image" ? "output" : t.type) || "output"
  );
  i.set("type", o), t.subfolder && i.set("subfolder", String(t.subfolder));
  const c = `/view?${i.toString()}`;
  return typeof ((d = we) == null ? void 0 : d.apiURL) == "function" ? we.apiURL(c) : c;
}
function pf(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function hf(t) {
  const i = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!i) return { filename: "", subfolder: "" };
  const o = i.split("/").filter(Boolean);
  if (!o.length) return { filename: "", subfolder: "" };
  const c = String(o.pop() || "").trim(), d = o.join("/");
  return { filename: c, subfolder: d };
}
function mf(t) {
  const e = [], i = /* @__PURE__ */ new Set();
  return t.forEach((o) => {
    const c = String(o || "").trim();
    !c || i.has(c) || (i.add(c), e.push(c));
  }), e;
}
function $c(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (pf(e)) return [e];
  const { filename: i, subfolder: o } = hf(e);
  if (!i) return [e];
  const c = ["temp", "output", "input"].map((d) => ta({
    filename: i,
    subfolder: o,
    type: d
  }));
  return mf([...c, e]);
}
function gf(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const i = String(t.filename || "").trim();
    return i ? ta({
      filename: i,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function lo(t) {
  const e = Zt == null ? void 0 : Zt.nodeOutputs;
  if (!e || t == null) return null;
  const i = String(t);
  let o = null;
  if (e instanceof Map ? o = e.get(t) || e.get(i) || e.get(Number(i)) || null : o = e[t] || e[i] || null, o) return o;
  const c = i;
  if (e instanceof Map) {
    for (const d of e.keys())
      if (Ji(d, c)) return e.get(d);
  } else {
    const d = Object.keys(e);
    for (const h of d)
      if (Ji(h, c)) return e[h];
  }
  return null;
}
function Qe(t) {
  if (!t) return "";
  if (typeof t == "string")
    return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Qe(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const i = String(t[1] || "").trim(), o = String(t[2] || "output").trim() || "output";
      return ta({ filename: e, subfolder: i, type: o });
    }
    for (const i of t) {
      const o = Qe(i);
      if (o) return o;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : ta(t);
}
function zc(t, e) {
  var o;
  const i = String(t || "").trim();
  if (!i) return "";
  try {
    const c = typeof window < "u" && ((o = window == null ? void 0 : window.location) != null && o.href) ? window.location.href : "http://127.0.0.1/", d = new URL(i, c);
    return e > 0 && d.searchParams.set("pano_rev", String(e)), d.toString();
  } catch {
    const c = i.includes("?") ? "&" : "?";
    return e > 0 ? `${i}${c}pano_rev=${e}` : i;
  }
}
function yf(t) {
  const e = [], i = /* @__PURE__ */ new Set(), o = (d) => {
    Array.isArray(d) && d.forEach((h) => e.push(h));
  }, c = (d, h = 0) => {
    !d || h > 3 || i.has(d) || typeof d == "object" && (i.add(d), o(d.images), c(d.output, h + 1), c(d.ui, h + 1), c(d.data, h + 1), c(d.result, h + 1));
  };
  return c(t, 0), e;
}
function bf(t, e) {
  try {
    const i = yf(e);
    let o = "";
    for (const c of i)
      if (o = Qe(c), o) break;
    o ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(o || ""), Ft(t, "cutout.output-sync", {
      hasOutputImage: !0,
      src: zc(t.__panoOwnOutputSrc, t.__panoOwnOutputRev),
      rev: t.__panoOwnOutputRev
    })) : Ft(t, "cutout.output-sync", { hasOutputImage: !1, keys: Object.keys(e || {}) });
  } catch {
    Ft(t, "cutout.output-sync", { hasOutputImage: !1 });
  }
}
function vf(t, e = null) {
  const i = t == null ? void 0 : t.id;
  if (i == null) return null;
  const o = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), c = lo(i), d = Array.isArray(c == null ? void 0 : c.images) ? c.images : [], h = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], y = o ? [o, ...d, ...h] : [...d, ...h];
  let x = "";
  for (const T of y)
    if (x = Qe(T), x) break;
  if (!x) return null;
  const w = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), p = $c(x).map((T) => zc(T, w));
  if (!p.length) return null;
  const M = `${x}|rev:${w}`;
  t.__panoOwnOutputImageCache || (t.__panoOwnOutputImageCache = {
    src: "",
    img: null,
    pendingSrc: "",
    pendingImg: null
  });
  const k = t.__panoOwnOutputImageCache;
  if (k.img && k.src === M) return k.img;
  if (k.pendingImg && k.pendingSrc === M)
    return k.img && (k.img.complete || k.img.naturalWidth || k.img.width) ? k.img : k.pendingImg;
  const L = new Image();
  let I = -1;
  const R = () => {
    if (I += 1, I >= p.length) {
      t.__panoOwnOutputImageCache === k && (k.pendingSrc = "", k.pendingImg = null);
      return;
    }
    L.src = p[I];
  };
  return L.onload = () => {
    var T;
    t.__panoOwnOutputImageCache === k && k.pendingImg === L && k.pendingSrc === M && (k.src = M, k.img = L, k.pendingSrc = "", k.pendingImg = null), e == null || e(), (T = t.setDirtyCanvas) == null || T.call(t, !0, !0);
  }, L.onerror = () => {
    if (I + 1 >= p.length) {
      t.__panoOwnOutputImageCache === k && k.pendingImg === L && (k.pendingSrc = "", k.pendingImg = null);
      return;
    }
    R();
  }, k.pendingSrc = M, k.pendingImg = L, R(), k.img && (k.img.complete || k.img.naturalWidth || k.img.width) ? k.img : L;
}
function _f(t, e = []) {
  var w, P;
  const i = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!i.length) return { src: "", sourceType: "", inputName: "" };
  const o = No(t, e), c = o.map((p) => i.findIndex((M) => String((M == null ? void 0 : M.name) || "") === String(p))).filter((p) => p >= 0), d = i.map((p, M) => ({ input: p, idx: M })).filter(({ input: p }) => String((p == null ? void 0 : p.type) || "").toUpperCase() === "IMAGE").map(({ idx: p }) => p), h = [.../* @__PURE__ */ new Set([...c, ...d])];
  Ft(t, "image-resolve", {
    inputCandidates: o,
    resolvedIndices: h,
    stage: "start"
  });
  for (const p of h) {
    const M = i[p], k = M == null ? void 0 : M.link;
    if (k == null) continue;
    const L = Rc(t.graph, k), { originId: I, originSlot: R } = Fc(L);
    if (I == null) continue;
    const T = Oc(t, p, I);
    if (!T) continue;
    const F = Number(R || 0), U = lo((T == null ? void 0 : T.id) ?? I), S = Array.isArray(U == null ? void 0 : U.images) ? U.images : [];
    if (S.length) {
      const Z = [];
      F >= 0 && F < S.length && Z.push(S[F]), Z.push(...S);
      for (const G of Z) {
        const D = Qe(G);
        if (D)
          return Ft(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "nodeOutputs",
            stage: "hit"
          }), { src: D, sourceType: "nodeOutputs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    let K = [];
    try {
      K = typeof (Zt == null ? void 0 : Zt.getNodeImageUrls) == "function" ? Zt.getNodeImageUrls(T) || [] : [];
    } catch {
      K = [];
    }
    if (Array.isArray(K) && K.length) {
      const Z = [];
      F >= 0 && F < K.length && Z.push(K[F]), Z.push(...K);
      for (const G of Z) {
        const D = Qe(G);
        if (D)
          return Ft(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "appNodeImageUrls",
            stage: "hit"
          }), { src: D, sourceType: "appNodeImageUrls", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const q = Array.isArray(T == null ? void 0 : T.imgs) ? T.imgs : [];
    if (q.length) {
      const Z = [];
      F >= 0 && F < q.length && Z.push(q[F]), Z.push(...q);
      for (const G of Z) {
        const D = Qe(G);
        if (D)
          return Ft(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "nodeImgs",
            stage: "hit"
          }), { src: D, sourceType: "nodeImgs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const ct = (w = T == null ? void 0 : T.widgets) == null ? void 0 : w.find((Z) => String((Z == null ? void 0 : Z.name) || "").toLowerCase() === "image");
    if (ct) {
      let Z = Qe(ct.value);
      if (Z && !Z.includes("/") && !Z.includes(":") && (T.comfyClass === "LoadImage" || T.type === "LoadImage") && (Z = we.apiURL(`/view?filename=${encodeURIComponent(Z)}&type=input&subfolder=`)), Z)
        return Ft(t, "image-resolve", {
          inputName: String((M == null ? void 0 : M.name) || ""),
          sourceType: "widget",
          stage: "hit"
        }), { src: Z, sourceType: "widget", inputName: String((M == null ? void 0 : M.name) || "") };
    }
  }
  const y = lo(t == null ? void 0 : t.id), x = [];
  if (Array.isArray(y == null ? void 0 : y.pano_input_images) && x.push(...y.pano_input_images), Array.isArray((P = y == null ? void 0 : y.ui) == null ? void 0 : P.pano_input_images) && x.push(...y.ui.pano_input_images), x.length > 0)
    for (const p of x) {
      const M = Qe(p);
      if (M)
        return Ft(t, "image-resolve", { sourceType: "selfOutput", src: M, stage: "hit" }), { src: M, sourceType: "selfOutput", inputName: "fallback" };
    }
  return Ft(t, "image-resolve", { stage: "miss" }), { src: "", sourceType: "", inputName: "" };
}
function wf(t, e = []) {
  const i = _f(t, e), o = String((i == null ? void 0 : i.src) || "").trim();
  if (!o) return null;
  const c = $c(o);
  if (!c.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const d = e.join("|") || "image", h = t.__panoLinkedInputImageCache.get(d);
  if (h && h.srcRaw === o && h.img) return h.img;
  const y = new Image(), x = { srcRaw: o, resolvedSrc: "", img: y };
  t.__panoLinkedInputImageCache.set(d, x);
  let w = -1;
  const P = () => {
    var M, k;
    if (w += 1, w >= c.length) {
      try {
        (k = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || k.call(M, d);
      } catch {
      }
      Ft(t, "image-load", {
        ok: !1,
        src: o,
        preferredInputNames: e,
        sourceType: String((i == null ? void 0 : i.sourceType) || ""),
        attemptCount: c.length,
        errorType: "all_candidates_failed"
      });
      return;
    }
    const p = c[w];
    x.resolvedSrc = p, y.src = p;
  };
  return y.onload = () => {
    var p;
    Ft(t, "image-load", {
      ok: !0,
      src: o,
      resolvedSrc: String(x.resolvedSrc || y.src || ""),
      preferredInputNames: e,
      sourceType: String((i == null ? void 0 : i.sourceType) || ""),
      attemptCount: w + 1
    }), (p = t.setDirtyCanvas) == null || p.call(t, !0, !0);
  }, y.onerror = (p) => {
    var M, k;
    if (w + 1 < c.length) {
      P();
      return;
    }
    try {
      (k = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || k.call(M, d);
    } catch {
    }
    Ft(t, "image-load", {
      ok: !1,
      src: o,
      resolvedSrc: String(x.resolvedSrc || ""),
      preferredInputNames: e,
      sourceType: String((i == null ? void 0 : i.sourceType) || ""),
      attemptCount: w + 1,
      errorType: String((p == null ? void 0 : p.type) || "error")
    });
  }, P(), y;
}
function ea(t, e = [], i = null) {
  const o = wf(t, e);
  return o ? (typeof i == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => i(), { once: !0 })), o) : null;
}
function fo(t) {
  var e, i;
  if (t) {
    try {
      (i = (e = t.__panoLinkedInputImageCache) == null ? void 0 : e.clear) == null || i.call(e);
    } catch {
    }
    t.__panoOwnOutputImageCache = null, t.__panoWrappedErpCache = null;
  }
}
function Vc(t, e) {
  t.__panoRenderCache || (t.__panoRenderCache = {
    mode: String(e || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const i = t.__panoRenderCache, o = String(e || "");
  return i.mode !== o && (i.mode = o, i.isLoading = !1, i.loadingSinceTs = 0), i;
}
function wn(t, e, i = "") {
  const o = Vc(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), c = performance.now();
  return e ? (o.isLoading || (o.isLoading = !0, o.loadingSinceTs = c, Ft(t, "loading", { phase: "enter", src: String(i || "") })), !0) : o.isLoading ? c - Number(o.loadingSinceTs || 0) < nf ? !0 : (o.isLoading = !1, o.loadingSinceTs = 0, Ft(t, "loading", { phase: "exit", src: String(i || "") }), !1) : !1;
}
function po(t, e) {
  const i = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), c = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || i)), d = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || o)), h = i / c, y = o / d, x = Math.min(h, y);
  return Number.isFinite(x) && x > 0 ? x : 1;
}
function tc(t, e, i = 1) {
  const o = Number((e == null ? void 0 : e.x) || 0), c = Number((e == null ? void 0 : e.y) || 0), d = Number((e == null ? void 0 : e.w) || 0), h = Number((e == null ? void 0 : e.h) || 0);
  if (d <= 0 || h <= 0) return;
  const y = Math.max(14, Math.round(14 * i)), x = Math.min(Math.round(220 * i), Math.max(Math.round(120 * i), d * 0.44)), w = Math.max(Math.round(34 * i), y + Math.round(14 * i)), P = o + (d - x) * 0.5, p = c + (h - w) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(P, p, x, w, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${y}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", P + x * 0.5, p + w * 0.5 + 0.5), t.restore();
}
function Hr(t, e, i = "Open editor and add frame") {
  var c;
  const o = (c = t == null ? void 0 : t.__panoDomPreview) == null ? void 0 : c.emptyHintEl;
  o && (o.textContent = String(i || "Open editor and add frame"), o.style.display = e ? "flex" : "none");
}
function xf(t) {
  var o;
  const e = Array.isArray(t == null ? void 0 : t.shots) ? t.shots : [];
  if (!e.length) return null;
  const i = String(((o = t == null ? void 0 : t.active) == null ? void 0 : o.selected_shot_id) || "");
  if (i) {
    const c = e.find((d) => String((d == null ? void 0 : d.id) || "") === i);
    if (c) return c;
  }
  return e[0] || null;
}
function Hc(t, e) {
  const i = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), c = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), d = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), h = Number(e) > 0 ? Number(e) : 1;
  let y = c, x = c / h;
  return x > d && (x = d, y = d * h), {
    x: i + (c - y) * 0.5,
    y: o + (d - x) * 0.5,
    w: y,
    h: x
  };
}
function Sf(t, e, i, o = 0) {
  if (!t || !e || !i) return !1;
  const c = Math.max(1, Number(e.naturalWidth || e.width || 0)), d = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (c <= 1 || d <= 1) return !1;
  const h = Hc(i, c / d);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, h.x, h.y, h.w, h.h);
  const y = Math.max(0, Math.min(1, Number(o) || 0));
  return y > 0 && (t.fillStyle = `rgba(0,0,0,${y})`, t.fillRect(h.x, h.y, h.w, h.h)), t.restore(), !0;
}
function Nf(t, e) {
  if (!e || !e.complete || !(e.naturalWidth || e.width)) return null;
  const i = Number(e.naturalWidth || e.width || 0), o = Number(e.naturalHeight || e.height || 0);
  if (i <= 1 || o <= 1) return null;
  t.__panoWrappedErpCache || (t.__panoWrappedErpCache = { src: "", w: 0, h: 0, canvas: null });
  const c = String(e.src || ""), d = t.__panoWrappedErpCache;
  if (d.canvas && d.src === c && d.w === i && d.h === o) return d.canvas;
  const h = document.createElement("canvas");
  h.width = i * 2, h.height = o;
  const y = h.getContext("2d");
  return y ? (y.drawImage(e, 0, 0, i, o), y.drawImage(e, i, 0, i, o), t.__panoWrappedErpCache = { src: c, w: i, h: o, canvas: h }, h) : null;
}
function Mf(t, e = null) {
  const o = Array.isArray(t.widgets) ? t.widgets : [];
  let c = 32;
  return o.forEach((d) => {
    var y;
    if (d === e || !d || d.hidden || d.type === "hidden") return;
    let h = 22;
    try {
      const x = typeof d.computeSize == "function" ? d.computeSize(((y = Sn(t)) == null ? void 0 : y[0]) || 0) : null;
      Array.isArray(x) && Number.isFinite(Number(x[1])) && (h = Number(x[1]));
    } catch {
      h = 22;
    }
    c += h;
  }), c;
}
function ho(t) {
  const i = Mf(t) + 2, o = 8, c = Sn(t), d = Math.max(120, Number((c == null ? void 0 : c[0]) || 0) - 16), h = Math.max(84, Number((c == null ? void 0 : c[1]) || 0) - i - 8);
  return h < 40 || d < 80 ? null : { x: o, y: i, w: d, h };
}
function Uc(t, e, i) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const o = String(e || "");
  if (!o) return null;
  const c = gf(i);
  if (!c) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const d = window.__panoSharedImageCache.get(c);
  if (d != null && d.img)
    return t.__panoPreviewImageCache.set(o, { src: c, img: d.img }), d.img;
  const h = t.__panoPreviewImageCache.get(o);
  if (h && h.src === c) return h.img;
  const y = new Image();
  return y.src = c, y.onload = () => {
    var x;
    return (x = t.setDirtyCanvas) == null ? void 0 : x.call(t, !0, !0);
  }, window.__panoSharedImageCache.set(c, { img: y }), t.__panoPreviewImageCache.set(o, { src: c, img: y }), y;
}
function kf(t, e) {
  const i = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], o = t.__panoStickerSortCache;
  if ((o == null ? void 0 : o.source) === i && Array.isArray(o.sorted)) return o.sorted;
  const c = [...i].sort((d, h) => Number((d == null ? void 0 : d.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0));
  return t.__panoStickerSortCache = { source: i, sorted: c }, c;
}
function Gc(t, e) {
  return ua(e, {
    selectedId: null,
    hoveredId: null
  });
}
function jc(t, e, i) {
  return Cc(e, (o, c) => Uc(t, o, c), { scene: i });
}
function Pf(t, e, i, o = 0.45) {
  const c = (t.x + e.x + i.x) / 3, d = (t.y + e.y + i.y) / 3, h = (y) => {
    const x = y.x - c, w = y.y - d, P = Math.hypot(x, w) || 1;
    return { x: y.x + x / P * o, y: y.y + w / P * o };
  };
  return [h(t), h(e), h(i)];
}
function na(t, e, i, o, c, d, h, y) {
  const x = i.x * (o.y - c.y) + o.x * (c.y - i.y) + c.x * (i.y - o.y);
  if (Math.abs(x) < 1e-6) return;
  const [w, P, p] = Pf(d, h, y, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(w.x, w.y), t.lineTo(P.x, P.y), t.lineTo(p.x, p.y), t.closePath(), t.clip();
  const M = (d.x * (o.y - c.y) + h.x * (c.y - i.y) + y.x * (i.y - o.y)) / x, k = (d.x * (c.x - o.x) + h.x * (i.x - c.x) + y.x * (o.x - i.x)) / x, L = (d.x * (o.x * c.y - c.x * o.y) + h.x * (c.x * i.y - i.x * c.y) + y.x * (i.x * o.y - o.x * i.y)) / x, I = (d.y * (o.y - c.y) + h.y * (c.y - i.y) + y.y * (i.y - o.y)) / x, R = (d.y * (c.x - o.x) + h.y * (i.x - c.x) + y.y * (o.x - i.x)) / x, T = (d.y * (o.x * c.y - c.x * o.y) + h.y * (c.x * i.y - i.x * c.y) + y.y * (i.x * o.y - o.x * i.y)) / x;
  t.transform(M, I, k, R, L, T), t.drawImage(e, 0, 0), t.restore();
}
function Bc(t, e, i, o) {
  const c = Ja(t, e.right), d = Ja(t, e.up), h = Ja(t, e.fwd);
  if (h <= 1e-4) return null;
  const y = d / h / o, x = c / h / o;
  return { x: i.x + i.w * 0.5 + x * i.h * 0.5, y: i.y + i.h * 0.5 - y * i.h * 0.5 };
}
function Kc(t, e, i, o, c, d, h, y = 12, x = 9) {
  var j;
  const w = O(Number(h.hFOV_deg || 30), 1, 179) * Vn, P = O(Number(h.vFOV_deg || 30), 1, 179) * Vn, p = Math.tan(w * 0.5), M = Math.tan(P * 0.5), k = h.crop || {}, L = O(Number(k.x0 ?? 0), 0, 1), I = O(Number(k.y0 ?? 0), 0, 1), R = O(Number(k.x1 ?? 1), 0, 1), T = O(Number(k.y1 ?? 1), 0, 1), F = Math.max(1e-4, R - L), U = Math.max(1e-4, T - I), S = So(Number(h.yaw_deg || 0), Number(h.pitch_deg || 0), Number(h.rot_deg || h.roll_deg || 0)), K = [], q = [], ct = [], Z = [];
  for (let z = 0; z <= x; z++) {
    const ut = z / x, ht = (1 - (I + ut * U) * 2) * M;
    for (let ft = 0; ft <= y; ft++) {
      const Mt = ft / y, gt = ((L + Mt * F) * 2 - 1) * p, Et = S.fwd.x + S.right.x * gt + S.up.x * ht, ee = S.fwd.y + S.right.y * gt + S.up.y * ht, $ = S.fwd.z + S.right.z * gt + S.up.z * ht, mt = Math.hypot(Et, ee, $) || 1e-8, pt = Et / mt, St = ee / mt, Pt = $ / mt, It = pt * o.right.x + St * o.right.y + Pt * o.right.z, Ct = pt * o.up.x + St * o.up.y + Pt * o.up.z, Bt = pt * o.fwd.x + St * o.fwd.y + Pt * o.fwd.z;
      if (Bt <= 1e-4)
        K[z] || (K[z] = []), q[z] || (q[z] = []), K[z][ft] = null, q[z][ft] = null;
      else {
        const Vt = Ct / Bt / c, Lt = It / Bt / c;
        K[z] || (K[z] = []), q[z] || (q[z] = []), K[z][ft] = i.x + i.w * 0.5 + Lt * i.h * 0.5, q[z][ft] = i.y + i.h * 0.5 - Vt * i.h * 0.5;
      }
      ct[z] || (ct[z] = []), Z[z] || (Z[z] = []), ct[z][ft] = Mt, Z[z][ft] = ut;
    }
  }
  const G = (j = d.assets) == null ? void 0 : j[h.asset_id], D = Uc(e, h.asset_id, G);
  if (!D || !D.complete || !D.naturalWidth) return;
  const X = Number(D.naturalWidth || D.width || 1), ot = Number(D.naturalHeight || D.height || 1), rt = y < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = rt;
  for (let z = 0; z < x; z++)
    for (let ut = 0; ut < y; ut++) {
      const lt = K[z][ut], ht = q[z][ut], ft = K[z][ut + 1], Mt = q[z][ut + 1], W = K[z + 1][ut], gt = q[z + 1][ut], Et = K[z + 1][ut + 1], ee = q[z + 1][ut + 1];
      if (lt === null || ft === null || W === null || Et === null) continue;
      const $ = ct[z][ut] * X, mt = Z[z][ut] * ot, pt = ct[z][ut + 1] * X, St = Z[z][ut + 1] * ot, Pt = ct[z + 1][ut] * X, It = Z[z + 1][ut] * ot, Ct = ct[z + 1][ut + 1] * X, Bt = Z[z + 1][ut + 1] * ot;
      na(t, D, { x: $, y: mt }, { x: pt, y: St }, { x: Ct, y: Bt }, { x: lt, y: ht }, { x: ft, y: Mt }, { x: Et, y: ee }), na(t, D, { x: $, y: mt }, { x: Ct, y: Bt }, { x: Pt, y: It }, { x: lt, y: ht }, { x: Et, y: ee }, { x: W, y: gt });
    }
}
function Cf(t, e, i = null) {
  String(t.__panoPreviewMode || "stickers");
  const o = Tc(t), c = ho(t);
  if (!c) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const d = So(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), h = Math.tan(Number(t.__panoPreviewView.fov || 100) * Vn * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(c.x, c.y, c.w, c.h, 8), e.fill(), e.stroke(), e.clip();
  const y = ea(
    t,
    No(t, ["erp_image", "bg_erp"]),
    () => {
      var S;
      return (S = t.setDirtyCanvas) == null ? void 0 : S.call(t, !0, !1);
    }
  ), x = !!(y && y.complete && (y.naturalWidth || y.width)), w = Yc(t), P = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, p = w || P, M = gr, k = Gc(t, o), L = jc(t, o, k), I = xo(t.__panoPreviewView), R = x ? br({
    owner: t,
    cacheKey: "runtime_panorama_scene",
    ctx: e,
    rect: c,
    backgroundSource: y,
    backgroundRevision: [
      String(y.currentSrc || y.src || ""),
      Number(y.naturalWidth || y.width || 0),
      Number(y.naturalHeight || y.height || 0)
    ].join("|"),
    textures: L,
    scene: k,
    view: I
  }) : !1, T = p ? 8 : 12, F = p ? 6 : 9, U = kf(t, o);
  if (!x || U.length === 0) {
    const S = po(e == null ? void 0 : e.canvas, c);
    Wc(e, c, d, h, S);
  }
  !R && x && ra(t, e, c, d, h, y, M), !R && U.length > 0 && U.forEach((S) => Kc(e, t, c, d, h, o, S, T, F)), e.restore();
}
function Bi(t, e, i, o) {
  var d, h, y, x, w, P;
  if (Array.isArray(i) && i.length >= 2) return { x: i[0], y: i[1] };
  if (i && typeof i == "object" && Number.isFinite(Number(i.x)) && Number.isFinite(Number(i.y)))
    return { x: Number(i.x), y: Number(i.y) };
  if (o && Array.isArray(o.graph_mouse) && o.graph_mouse.length >= 2)
    return {
      x: Number(o.graph_mouse[0]) - Number(((d = t == null ? void 0 : t.pos) == null ? void 0 : d[0]) || 0),
      y: Number(o.graph_mouse[1]) - Number(((h = t == null ? void 0 : t.pos) == null ? void 0 : h[1]) || 0)
    };
  if (o && typeof o.convertEventToCanvasOffset == "function" && e)
    try {
      const p = o.convertEventToCanvasOffset(e);
      if (Array.isArray(p) && p.length >= 2)
        return {
          x: Number(p[0]) - Number(((y = t == null ? void 0 : t.pos) == null ? void 0 : y[0]) || 0),
          y: Number(p[1]) - Number(((x = t == null ? void 0 : t.pos) == null ? void 0 : x[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(e == null ? void 0 : e.canvasX)) && Number.isFinite(Number(e == null ? void 0 : e.canvasY)))
    return {
      x: Number(e.canvasX) - Number(((w = t == null ? void 0 : t.pos) == null ? void 0 : w[0]) || 0),
      y: Number(e.canvasY) - Number(((P = t == null ? void 0 : t.pos) == null ? void 0 : P[1]) || 0)
    };
  const c = If(t, e, o);
  return c || null;
}
function Af(t, e) {
  var p, M;
  const i = Number(t == null ? void 0 : t.clientX), o = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(i) || !Number.isFinite(o)) return null;
  const c = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, d = (p = c == null ? void 0 : c.getBoundingClientRect) == null ? void 0 : p.call(c), h = (e == null ? void 0 : e.ds) || ((M = Zt == null ? void 0 : Zt.canvas) == null ? void 0 : M.ds);
  if (!d || !h) return null;
  const y = Number(h.scale || 1);
  if (!Number.isFinite(y) || Math.abs(y) < 1e-6) return null;
  const x = Array.isArray(h.offset) ? h.offset : [0, 0], w = (i - Number(d.left || 0)) / y - Number(x[0] || 0), P = (o - Number(d.top || 0)) / y - Number(x[1] || 0);
  return !Number.isFinite(w) || !Number.isFinite(P) ? null : { x: w, y: P };
}
function If(t, e, i) {
  var c, d;
  const o = Af(e, i || (Zt == null ? void 0 : Zt.canvas));
  return o ? {
    x: o.x - Number(((c = t == null ? void 0 : t.pos) == null ? void 0 : c[0]) || 0),
    y: o.y - Number(((d = t == null ? void 0 : t.pos) == null ? void 0 : d[1]) || 0)
  } : null;
}
function Ai(t) {
  if (t.__panoLegacyPreviewHooked) return;
  Ft(t, "legacy.attach", {
    mode: t.__panoPreviewMode,
    nodeType: String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""),
    nodeSize: Sn(t)
  }), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", Ic(t, 320, 180), cr(t);
  const e = t.onDrawForeground, i = t.onResize;
  t.onDrawForeground = function() {
    var M, k;
    const p = e ? e.apply(this, arguments) : void 0;
    try {
      const L = arguments[0];
      L && !((M = this.flags) != null && M.collapsed) && (o.stepInertia(performance.now()) && ((k = this.setDirtyCanvas) == null || k.call(this, !0, !1)), Cf(this, L, o));
    } catch {
    }
    return p;
  }, t.onResize = function() {
    var M;
    const p = i ? i.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ia(this, 150), (M = this.setDirtyCanvas) == null || M.call(this, !0, !0), Xc(this, 220, null), p;
  };
  const o = ca({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (p) => {
      t.__panoPreviewView = p;
    },
    onInteraction: () => {
      var p;
      qc(t), (p = t.setDirtyCanvas) == null || p.call(t, !0, !1);
    }
  }), c = t.onMouseDown;
  t.onMouseDown = function(p, M, k) {
    var L;
    try {
      if (!((L = this.flags) != null && L.collapsed)) {
        const I = Bi(this, p, M, k) || { x: 0, y: 0 }, R = Sn(this), T = Number((R == null ? void 0 : R[0]) || 0), F = Number((R == null ? void 0 : R[1]) || 0);
        if (I.x >= T - 20 && I.y >= F - 20)
          return c ? c.apply(this, arguments) : void 0;
        const S = ho(this);
        if (Js(I.x, I.y, S))
          return (p == null ? void 0 : p.button) === 0 && o.startDrag(I.x, I.y), !0;
      }
    } catch {
    }
    return c ? c.apply(this, arguments) : void 0;
  };
  const d = t.onMouseMove;
  t.onMouseMove = function(p, M, k) {
    try {
      const L = Bi(this, p, M, k);
      if (o.state.drag.active) {
        if (typeof (p == null ? void 0 : p.buttons) == "number" && (p.buttons & 1) === 0)
          return o.endDrag(), !0;
        const I = L || o.state.drag;
        return o.moveDrag(I.x, I.y, "pano"), !0;
      }
    } catch {
    }
    return d ? d.apply(this, arguments) : void 0;
  };
  const h = t.onMouseUp;
  t.onMouseUp = function() {
    return o.state.drag.active ? (o.endDrag(), !0) : h ? h.apply(this, arguments) : void 0;
  };
  const y = t.onMouseLeave;
  t.onMouseLeave = function() {
    const p = y ? y.apply(this, arguments) : void 0;
    return o.state.drag.active && o.endDrag(), p;
  };
  const x = t.onMouseWheel;
  t.onMouseWheel = function(p, M, k) {
    var L, I;
    try {
      if ((L = this.flags) != null && L.collapsed) return x ? x.apply(this, arguments) : void 0;
      const R = Bi(this, p, M, k), T = ho(this);
      if (!R || !Js(R.x, R.y, T)) return x ? x.apply(this, arguments) : void 0;
      const F = Number((p == null ? void 0 : p.deltaY) ?? (p == null ? void 0 : p.wheelDeltaY) ?? (typeof M == "number" ? M : 0));
      return o.applyWheel(Math.sign(F)) && ((I = this.setDirtyCanvas) == null || I.call(this, !0, !1)), typeof (p == null ? void 0 : p.preventDefault) == "function" && p.preventDefault(), typeof (p == null ? void 0 : p.stopPropagation) == "function" && p.stopPropagation(), !0;
    } catch {
      return x ? x.apply(this, arguments) : void 0;
    }
  };
  const w = t.onRemoved, P = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = i, t.onDrawForeground = e, t.onMouseDown = c, t.onMouseMove = d, t.onMouseUp = h, t.onMouseLeave = y, t.onMouseWheel = x, t.onRemoved = w, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = P, t.onRemoved = function() {
    return P(), qr.unregister(this), Qi.unregister(this), w ? w.apply(this, arguments) : void 0;
  };
}
function Ef(t, e) {
  const i = ea(
    t,
    ["erp_image", "bg_erp"],
    () => {
      var h, y;
      return (y = (h = t.__panoDomPreview) == null ? void 0 : h.requestDraw) == null ? void 0 : y.call(h);
    }
  ), o = Number((i == null ? void 0 : i.naturalWidth) || (i == null ? void 0 : i.width) || 0), c = Number((i == null ? void 0 : i.naturalHeight) || (i == null ? void 0 : i.height) || 0);
  if (o > 1 && c > 1)
    return {
      kind: "ERP_GLOBAL",
      width: Math.max(1, Math.round(o)),
      height: Math.max(1, Math.round(c))
    };
  const d = Math.max(1, Number((e == null ? void 0 : e.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: d,
    height: Math.max(1, Math.round(d * 0.5))
  };
}
function Df(t, e) {
  var w, P, p, M, k, L, I, R, T, F, U, S;
  const i = (P = (w = e == null ? void 0 : e.painting) == null ? void 0 : w.paint) == null ? void 0 : P.strokes, o = (M = (p = e == null ? void 0 : e.painting) == null ? void 0 : p.mask) == null ? void 0 : M.strokes, c = Array.isArray(i) && i.length > 0, d = Array.isArray(o) && o.length > 0;
  if (!c && !d) return null;
  const h = Ef(t, e), y = `${h.width}x${h.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== y) && (t.__panoPreviewPaintEngine = oo(h), t.__panoPreviewPaintDescriptorKey = y, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const x = {
    paint: i || null,
    mask: o || null,
    groups: ((k = e == null ? void 0 : e.painting) == null ? void 0 : k.groups) || null,
    rasterObjects: ((L = e == null ? void 0 : e.painting) == null ? void 0 : L.raster_objects) || null
  };
  return (((I = t.__panoPreviewPaintRevision) == null ? void 0 : I.paint) !== x.paint || ((R = t.__panoPreviewPaintRevision) == null ? void 0 : R.mask) !== x.mask || ((T = t.__panoPreviewPaintRevision) == null ? void 0 : T.groups) !== x.groups || ((F = t.__panoPreviewPaintRevision) == null ? void 0 : F.rasterObjects) !== x.rasterObjects) && (t.__panoPreviewPaintRevision = x, t.__panoPreviewPaintRevisionKey = [
    c ? "p1" : "p0",
    d ? "m1" : "m0",
    String(Array.isArray((U = e == null ? void 0 : e.painting) == null ? void 0 : U.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((S = e == null ? void 0 : e.painting) == null ? void 0 : S.raster_objects) ? e.painting.raster_objects.length : 0)
  ].join(":"), t.__panoPreviewPaintEngine.rebuildCommitted(e)), t.__panoPreviewPaintEngine;
}
function Lf(t) {
  var i;
  return (Array.isArray((i = t == null ? void 0 : t.painting) == null ? void 0 : i.groups) ? t.painting.groups : []).filter((o) => o && typeof o == "object").slice().sort((o, c) => Number((o == null ? void 0 : o.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((o) => String((o == null ? void 0 : o.actionGroupId) || (o == null ? void 0 : o.id) || "").trim()).filter(Boolean);
}
function Tf(t, e) {
  const i = Df(t, e);
  if (!i) return null;
  const o = Lf(e);
  return i.getErpTarget(o).displayPaint.canvas;
}
function Rf(t, e, i = null) {
  var y;
  const o = (y = e == null ? void 0 : e.painting_layer) == null ? void 0 : y.paint, c = Qe(o);
  if (!c) return null;
  t.__panoPaintingLayerImageCache || (t.__panoPaintingLayerImageCache = { src: "", img: null });
  const d = t.__panoPaintingLayerImageCache;
  if (d.img && d.src === c) return d.img;
  const h = new Image();
  return h.onload = () => {
    var x;
    i == null || i(), (x = t.setDirtyCanvas) == null || x.call(t, !0, !0);
  }, h.onerror = () => {
    var x;
    ((x = t.__panoPaintingLayerImageCache) == null ? void 0 : x.img) === h && (t.__panoPaintingLayerImageCache = { src: "", img: null });
  }, h.src = c, t.__panoPaintingLayerImageCache = { src: c, img: h }, h;
}
function ec(t, e) {
  var d, h;
  const i = t == null ? void 0 : t.__panoLivePaintSurface;
  if (i != null && i.source)
    return {
      source: i.source,
      revision: String(i.revision || "")
    };
  if (Array.isArray((d = e == null ? void 0 : e.painting) == null ? void 0 : d.raster_objects) && e.painting.raster_objects.length > 0) {
    const y = Rf(t, e, () => {
      var x, w;
      return (w = (x = t.__panoDomPreview) == null ? void 0 : x.requestDraw) == null ? void 0 : w.call(x);
    });
    if (y && (y.complete || y.naturalWidth || y.width))
      return {
        source: y,
        revision: String(((h = e == null ? void 0 : e.painting_layer) == null ? void 0 : h.revision) || y.currentSrc || y.src || "")
      };
  }
  const c = Tf(t, e);
  return c ? {
    source: c,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function Ff(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function Of(t, e, i, o) {
  let c = (t == null ? void 0 : t[e]) || null;
  return (!c || c.width !== i || c.height !== o) && (c = document.createElement("canvas"), c.width = i, c.height = o, t[e] = c), c;
}
function $f(t, e, i, o, c, d) {
  if (!e || !i || !(o > 0) || !(c > 0)) return;
  const h = Ff(i);
  if (h.width === o && h.height === c) {
    e.drawImage(i, 0, 0, o, c);
    return;
  }
  const x = Of(t, d, h.width, h.height).getContext("2d", { willReadFrequently: !0 });
  if (!x) {
    e.drawImage(i, 0, 0, o, c);
    return;
  }
  try {
    x.clearRect(0, 0, h.width, h.height), x.drawImage(i, 0, 0, h.width, h.height);
    const w = x.getImageData(0, 0, h.width, h.height).data, P = e.getImageData(0, 0, o, c), p = P.data, M = Math.max(0, h.width - 1), k = Math.max(0, h.height - 1);
    for (let L = 0; L < c; L += 1) {
      const I = (L + 0.5) * h.height / c - 0.5, R = O(Math.floor(I), 0, k), T = O(R + 1, 0, k), F = O(I - R, 0, 1);
      for (let U = 0; U < o; U += 1) {
        const S = (U + 0.5) * h.width / o - 0.5, K = O(Math.floor(S), 0, M), q = O(K + 1, 0, M), ct = O(S - K, 0, 1);
        let Z = 0, G = 0, D = 0, X = 0;
        const ot = (z, ut, lt) => {
          const ht = (ut * h.width + z) * 4, ft = (w[ht + 3] || 0) / 255;
          Z += ft * lt, G += (w[ht] || 0) / 255 * ft * lt, D += (w[ht + 1] || 0) / 255 * ft * lt, X += (w[ht + 2] || 0) / 255 * ft * lt;
        };
        if (ot(K, R, (1 - ct) * (1 - F)), ot(q, R, ct * (1 - F)), ot(K, T, (1 - ct) * F), ot(q, T, ct * F), Z <= 1e-6) continue;
        const rt = (L * o + U) * 4, j = 1 - Z;
        p[rt] = Math.round(O((G + p[rt] / 255 * j) * 255, 0, 255)), p[rt + 1] = Math.round(O((D + p[rt + 1] / 255 * j) * 255, 0, 255)), p[rt + 2] = Math.round(O((X + p[rt + 2] / 255 * j) * 255, 0, 255)), p[rt + 3] = 255;
      }
    }
    e.putImageData(P, 0, 0);
  } catch {
    e.drawImage(i, 0, 0, o, c);
  }
}
function nc(t, e, i, o) {
  const c = Math.max(1, Number(e.naturalWidth || e.width || 0)), d = Math.max(1, Number(e.naturalHeight || e.height || 0)), y = `${String(e.currentSrc || e.src || "")}|${c}x${d}|${o}`;
  let x = t.__panoPreviewBgPaint;
  if (!x || x.__revKey !== y || x.width !== c || x.height !== d) {
    (!x || x.width !== c || x.height !== d) && (x = document.createElement("canvas"), x.width = c, x.height = d, t.__panoPreviewBgPaint = x);
    const w = x.getContext("2d");
    w.clearRect(0, 0, c, d), w.drawImage(e, 0, 0, c, d), $f(t, w, i, c, d, "__panoPreviewOverlayScratch"), x.__revKey = y;
  }
  return x;
}
function zf(t, e, i, o = null) {
  const c = String(t.__panoPreviewMode || "stickers");
  Vc(t, c);
  const d = Tc(t), h = c === "cutout" ? vf(t, () => {
    var I, R;
    return (R = (I = t.__panoDomPreview) == null ? void 0 : I.requestDraw) == null ? void 0 : R.call(I);
  }) : null, y = !!(h && h.complete && (h.naturalWidth || h.width)), x = e.parentElement, w = 1, P = Math.max(1, Number((x == null ? void 0 : x.clientWidth) || e.clientWidth || 0)), p = Math.max(1, Number((x == null ? void 0 : x.clientHeight) || e.clientHeight || 0)), M = Math.max(64, Math.round(P * w)), k = Math.max(64, Math.round(p * w)), L = e.getContext("2d");
  if (L)
    if (c === "cutout") {
      const I = xf(d), R = ea(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var j, z;
          return (z = (j = t.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : z.call(j);
        }
      ), T = !!(R && R.complete && (R.naturalWidth || R.width));
      (e.width !== M || e.height !== k) && (e.width = M, e.height = k);
      const F = { x: 0, y: 0, w: M, h: k }, U = y ? O(Number((h.naturalWidth || h.width) / Math.max(1, Number(h.naturalHeight || h.height || 1))), 0.05, 20) : T ? O(Number((R.naturalWidth || R.width) / Math.max(1, Number(R.naturalHeight || R.height || 1))), 0.05, 20) : 1, S = I ? fr(I) : null, K = O(Number((S == null ? void 0 : S.aspect) || U || 1), 0.05, 20), q = Hc(F, K), ct = po(e, F);
      L.setTransform(1, 0, 0, 1, 0, 0), L.fillStyle = "#070707", L.fillRect(0, 0, M, k);
      const Z = t == null ? void 0 : t.__panoCutoutPreviewSurface, G = (Z == null ? void 0 : Z.source) || null;
      if (!!(G && Number(G.width || 0) > 1 && Number(G.height || 0) > 1)) {
        L.drawImage(G, q.x, q.y, q.w, q.h), Hr(t, !1), wn(t, !1, "");
        return;
      }
      let X = "none", ot = "Open editor and add frame", rt = "";
      if (y)
        L.drawImage(h, q.x, q.y, q.w, q.h);
      else if (rt = String((R == null ? void 0 : R.src) || ""), I)
        R && !T ? X = "loading" : T ? (X = "empty", ot = "Open editor or run node") : (X = "empty", ot = "Connect ERP image");
      else {
        if (T) {
          const j = ec(t, d), z = j != null && j.source ? nc(t, R, j.source, j.revision || "") : R;
          Sf(L, z, F, 0.44);
        }
        X = "empty", ot = "Open editor and add frame";
      }
      X === "loading" ? (tc(L, q, ct), Hr(t, !1), wn(t, !0, rt)) : X === "empty" ? (Hr(t, !0, ot), wn(t, !1, "")) : (Hr(t, !1), wn(t, !1, ""));
    } else {
      Hr(t, !1), (e.width !== M || e.height !== k) && (e.width = M, e.height = k);
      const I = { x: 0, y: 0, w: M, h: k }, R = po(e, I);
      L.setTransform(1, 0, 0, 1, 0, 0), L.clearRect(0, 0, M, k), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const T = So(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), F = Math.tan(Number(t.__panoPreviewView.fov || 100) * Vn * 0.5), U = ea(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var j, z;
          return (z = (j = t.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : z.call(j);
        }
      ), S = !!(U && U.complete && (U.naturalWidth || U.width));
      L.fillStyle = "#1a1a1e", L.fillRect(0, 0, M, k);
      const K = Gc(t, d), q = jc(t, d, K), ct = xo(t.__panoPreviewView), Z = ec(t, d), G = (Z == null ? void 0 : Z.source) || null, D = S && G ? nc(t, U, G, (Z == null ? void 0 : Z.revision) || "") : U, X = D !== U ? String(D.__revKey || "") : U ? [
        String(U.currentSrc || U.src || ""),
        Number(U.naturalWidth || U.width || 0),
        Number(U.naturalHeight || U.height || 0)
      ].join("|") : "", ot = S ? br({
        owner: t,
        cacheKey: "runtime_dom_scene",
        ctx: L,
        rect: I,
        backgroundSource: D,
        backgroundRevision: X,
        textures: q,
        scene: K,
        view: ct
      }) : !1, rt = K.stickers;
      if (S && ot)
        wn(t, !1, "");
      else if (S)
        ra(t, L, I, T, F, D, gr), wn(t, !1, "");
      else if (G)
        ra(t, L, I, T, F, G, gr), wn(t, !!U && !S, String((U == null ? void 0 : U.src) || ""));
      else {
        const j = !!U && !S;
        wn(t, j, String((U == null ? void 0 : U.src) || "")), j && tc(L, I, R);
      }
      if ((!S || rt.length === 0) && Wc(L, I, T, F, R), !ot && rt.length > 0) {
        const j = Yc(t), z = o != null && o.state ? o.state.inertia.active || o.state.drag.active : !1, ut = j || z, lt = ut ? 8 : 12, ht = ut ? 6 : 9;
        rt.forEach((ft) => Kc(L, t, I, T, F, d, ft, lt, ht));
      } else if (!U || !S) {
        const j = Math.max(14, Math.round(16 * R));
        L.fillStyle = "rgba(212,212,216,0.85)", L.font = `600 ${j}px Plus Jakarta Sans, Geist, sans-serif`, L.textAlign = "center", L.fillText("Open editor to add stickers", M * 0.5, k * 0.5 + 24 * R);
      }
    }
}
function ra(t, e, i, o, c, d, h = Za) {
  if (!(!!d && (typeof HTMLCanvasElement < "u" && d instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && d instanceof OffscreenCanvas || typeof ImageBitmap < "u" && d instanceof ImageBitmap) || !!d && d.complete && (d.naturalWidth || d.width))) return;
  const w = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  if (Pd({
    owner: t,
    cacheKey: "runtime_pano_bg",
    ctx: e,
    rect: i,
    img: d,
    mode: "panorama",
    yawDeg: Number(w.yaw || 0),
    pitchDeg: Number(w.pitch || 0),
    fovDeg: Number(w.fov || 100)
  })) return;
  const P = Number(d.naturalWidth || d.width || 0), p = Number(d.naturalHeight || d.height || 0);
  if (P <= 1 || p <= 1) return;
  const k = Nf(t, d) || d, L = Math.max(4, Number((h == null ? void 0 : h.Nu) || Za.Nu)), I = Math.max(4, Number((h == null ? void 0 : h.Nv) || Za.Nv)), R = L <= gr.Nu && I <= gr.Nv ? 0.24 : L >= Ys.Nu && I >= Ys.Nv ? 0.42 : 0.34, T = [], F = [];
  for (let q = 0; q <= I; q++)
    T[q] = [], F[q] = [];
  const U = i.x + i.w * 0.5, S = i.y + i.h * 0.5, K = i.h * 0.5;
  for (let q = 0; q <= I; q++) {
    const ct = i.y + i.h * q / I, Z = (S - ct) / K * c;
    for (let G = 0; G <= L; G++) {
      const D = i.x + i.w * G / L, X = (D - U) / K * c, ot = o.fwd.x + o.right.x * X + o.up.x * Z, rt = o.fwd.y + o.right.y * X + o.up.y * Z, j = o.fwd.z + o.right.z * X + o.up.z * Z, z = Math.hypot(ot, rt, j) || 1e-8, ut = ot / z, lt = rt / z, ht = j / z, ft = Math.atan2(ut, ht), Mt = Math.asin(O(lt, -1, 1));
      let W = (ft / (2 * Math.PI) + 0.5) * P;
      for (; W < 0; ) W += P;
      for (; W >= P; ) W -= P;
      const gt = (0.5 - Mt / Math.PI) * p;
      T[q][G] = { x: D, y: ct }, F[q][G] = { x: W, y: gt };
    }
  }
  e.save(), e.__panoTriExpandPx = R, e.globalAlpha = 1;
  for (let q = 0; q < I; q += 1)
    for (let ct = 0; ct < L; ct += 1) {
      const Z = T[q][ct], G = T[q][ct + 1], D = T[q + 1][ct], X = T[q + 1][ct + 1];
      if (!Z || !G || !D || !X) continue;
      const ot = { ...F[q][ct] }, rt = { ...F[q][ct + 1] }, j = { ...F[q + 1][ct] }, z = { ...F[q + 1][ct + 1] }, ut = Math.min(ot.x, rt.x, j.x, z.x);
      Math.max(ot.x, rt.x, j.x, z.x) - ut > P * 0.5 && [ot, rt, j, z].forEach((ht) => {
        ht.x < P * 0.5 && (ht.x += P);
      }), na(e, k, ot, rt, z, Z, G, X), na(e, k, ot, z, j, Z, X, D);
    }
  e.__panoTriExpandPx = 0.45, e.restore();
}
function rc(t, e, i, o, c, d, h = 1) {
  let y = !1;
  t.strokeStyle = d, t.lineWidth = h, t.beginPath();
  for (const x of e) {
    const w = Bc(x, i, o, c);
    if (!w) {
      y = !1;
      continue;
    }
    y ? t.lineTo(w.x, w.y) : (t.moveTo(w.x, w.y), y = !0);
  }
  t.stroke();
}
function Wc(t, e, i, o, c = 1) {
  t.save();
  const d = "rgba(63, 63, 70, 0.5)", h = "rgba(250, 250, 250, 0.35)";
  for (let w = -75; w <= 75; w += 15) {
    const P = [];
    for (let p = -180; p <= 180; p += 15) P.push(Dn(p, w));
    rc(t, P, i, e, o, w === 0 ? h : d, w === 0 ? 1.5 : 1);
  }
  for (let w = -180; w <= 180; w += 45) {
    const P = [];
    for (let p = -89; p <= 89; p += 15) P.push(Dn(w, p));
    rc(t, P, i, e, o, w % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : d, w % 90 === 0 ? 1.2 : 1);
  }
  const y = [
    { name: "Front", dir: Dn(0, 0) },
    { name: "Right", dir: Dn(90, 0) },
    { name: "Back", dir: Dn(180, 0) },
    { name: "Left", dir: Dn(-90, 0) }
  ];
  t.fillStyle = "rgba(250, 250, 250, 0.32)";
  const x = Math.max(9, Math.round(11 * c));
  t.font = `500 ${x}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", y.forEach((w) => {
    const P = Bc(w.dir, i, e, o);
    P && t.fillText(w.name, P.x, P.y + 20 * c);
  }), t.restore();
}
function Vf(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function qc(t) {
  const e = Vf(t);
  e.dragging = !1, e.hqFrames = ef;
}
function ia(t, e = 150, i = performance.now()) {
  t && (t.__panoResizeUntil = Number(i || performance.now()) + Math.max(0, Number(e || 0)));
}
function Yc(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function Hf(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function Uf(t, e, i = 20) {
  var h;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const o = (h = e.getBoundingClientRect) == null ? void 0 : h.call(e);
  if (!o) return !1;
  const c = Number(t.clientX) - Number(o.left || 0), d = Number(t.clientY) - Number(o.top || 0);
  return c >= o.width - i && d >= o.height - i;
}
function rr(t, e) {
  return Uf(t, e) ? !1 : (Hf(t), !0);
}
function Gf() {
  var i;
  const t = (i = Zt == null ? void 0 : Zt.canvas) == null ? void 0 : i.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function jf(t) {
  var i;
  if (!t) return;
  const e = (i = Zt == null ? void 0 : Zt.canvas) == null ? void 0 : i.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function Bf(t, e = 360, i = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const o = Sn(t), c = Number((o == null ? void 0 : o[0]) || 0), d = Number((o == null ? void 0 : o[1]) || 0);
  if (!Number.isFinite(c) || !Number.isFinite(d) || c >= e && d >= i) return;
  const h = [Math.max(e, c), Math.max(i, d)];
  try {
    typeof t.setSize == "function" ? t.setSize(h) : t.size = h, t.__panoStandaloneBootSized = !0, Ft(t, "size.bootstrap", { from: [c, d], to: h });
  } catch (y) {
    Ft(t, "size.bootstrap.error", { message: String((y == null ? void 0 : y.message) || y || "unknown") });
  }
}
function Kf(t, e = 0, i = null, o = 1200) {
  const c = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = c > 0, !(c <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var d, h;
    t.__panoBootMinHeightTimer = null, (d = t == null ? void 0 : t.__panoDomPreview) != null && d.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, i == null || i(), (h = t.setDirtyCanvas) == null || h.call(t, !0, !0));
  }, Math.max(0, Number(o || 0))));
}
function ic(t, e = null, i = 0) {
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return t != null && t.__panoBootMinHeightActive ? Math.max(0, Number(i || 0)) : 0;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return t != null && t.__panoBootMinHeightActive ? Math.max(0, Number(i || 0)) : "auto";
    },
    afterResize() {
      t.__panoUserResized = !0, ia(t, 150), e == null || e(), Xc(t, 180, e);
    }
  };
}
function Xc(t, e = 180, i = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var o;
    t.__panoResizeSettleTimer = null, i == null || i(), (o = t.setDirtyCanvas) == null || o.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function cr(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function Wf(t, e = {}) {
  var Mt;
  const i = e.__allowStandalone === !0, o = of(t);
  if (o && !i) {
    Ft(t, "attach.skip", { reason: "standalone_preview_node", route: "blocked_legacy_path", nodeType: Ec(t) });
    return;
  }
  o && Bf(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", Qi.register(t);
  const c = t.__panoPreviewMode === "stickers", d = e.__noLegacyFallback === !0, h = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null;
  const y = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
  c || qr.unregister(t);
  const x = String(e.__panoForcedPath || "").trim(), w = c ? Dc(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: On(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  c && (x === "dom" || x === "legacy_draw") && (w.chosenPath = x, w.reason = "controller_target_backend");
  const P = c ? w.chosenPath : "dom", p = w.signature || On(t), M = Number(t.__panoRebindGeneration || 0), k = uo(t);
  if (Ft(t, "attach.begin", {
    nodeId: (t == null ? void 0 : t.id) ?? null,
    nodeType: y,
    mode: t.__panoPreviewMode,
    legacyFrontend: P === "legacy_draw",
    activeBackend: k,
    targetBackend: P,
    chosenPath: P,
    pathReason: w.reason,
    signature: p,
    generation: M,
    frontendVersionRaw: w.frontendVersionRaw,
    hasDomWidget: typeof t.addDOMWidget == "function",
    size: Sn(t)
  }), t.__panoFrontendSig = p, t.__panoStickersPath = P, c && qr.register(t), c && P === "legacy_draw") {
    if (d) return;
    mr(t, { keepMonitor: !0 }), Ai(t);
    return;
  }
  if ((Mt = t.__panoDomPreview) != null && Mt.widget) return;
  if (t.__panoLegacyPreviewHooked && mr(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    c && !d && Ai(t);
    return;
  }
  const L = e.noPreview === !0, I = c || L ? 0 : 56, R = document.createElement("div");
  if (rf(), R.className = "pano-node-preview-dom", R.classList.add(c ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), L && R.classList.add("pano-node-preview--no-preview"), R.setAttribute("data-capture-wheel", "true"), R.setAttribute("tabindex", "-1"), R.style.cssText = [
    "width:100%",
    L ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), L) {
    const W = t.addDOMWidget(co(), "preview", R, ic(t, null));
    cr(t), t.__panoDomPreview = { widget: W, root: R, requestDraw: () => {
    } }, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom";
    return;
  }
  const T = document.createElement("div");
  T.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const F = document.createElement("canvas");
  F.style.cssText = [
    "position:absolute",
    "inset:0",
    "width:100%",
    "height:100%",
    "object-position:center",
    "display:block",
    "touch-action:none",
    "cursor:grab",
    "user-select:none",
    "-webkit-user-select:none"
  ].join(";");
  const U = document.createElement("div");
  U.style.cssText = [
    "position:absolute",
    "inset:0",
    "display:none",
    "align-items:center",
    "justify-content:center",
    "pointer-events:none",
    "color:rgba(161,161,170,0.95)",
    "font:600 15px 'Plus Jakarta Sans', Geist, sans-serif",
    "text-align:center",
    "padding:0 10px",
    "z-index:2"
  ].join(";"), U.textContent = "Open editor and add frame", T.appendChild(F), T.appendChild(U), R.appendChild(T), Ic(t, 120, 120), cr(t);
  let S = null;
  try {
    Kf(t, I, () => {
      var W, gt;
      return (gt = (W = t.__panoDomPreview) == null ? void 0 : W.requestDraw) == null ? void 0 : gt.call(W);
    }), S = t.addDOMWidget(
      co(),
      "preview",
      R,
      ic(t, () => {
        var W, gt;
        return (gt = (W = t.__panoDomPreview) == null ? void 0 : W.requestDraw) == null ? void 0 : gt.call(W);
      }, I)
    );
  } catch {
    c && Ai(t);
    return;
  }
  const K = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, q = () => {
    K.needsDraw = !0, K.raf || (K.raf = requestAnimationFrame(G));
  }, ct = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    ia(t, 150), q();
  }) : null;
  ct == null || ct.observe(T);
  const Z = () => {
    if (!c || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const W = 3, gt = (Et) => {
      requestAnimationFrame(() => {
        var $;
        const ee = !!(R != null && R.isConnected && (T != null && T.isConnected) && (F != null && F.isConnected) && Number(T.clientHeight || 0) > 0 && Number(F.clientHeight || 0) > 0);
        if (!ee && Et < W) {
          gt(Et + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, Ft(t, "probe.result", {
          mode: t.__panoPreviewMode,
          result: ee ? "dom_ok" : "dom_fail",
          wrapH: Number((T == null ? void 0 : T.clientHeight) || 0),
          canvasH: Number((F == null ? void 0 : F.clientHeight) || 0),
          attempt: Et
        }), !ee) {
          if (d) {
            Ft(t, "path.keep", {
              route: "dom",
              reason: "probe_dom_not_ready",
              mode: t.__panoPreviewMode,
              wrapH: Number((T == null ? void 0 : T.clientHeight) || 0),
              canvasH: Number((F == null ? void 0 : F.clientHeight) || 0)
            });
            return;
          }
          Ft(t, "path.switch", {
            from: "dom",
            to: "legacy_draw",
            reason: "probe_dom_fail_fallback_legacy"
          }), mr(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", Ai(t), ($ = t.setDirtyCanvas) == null || $.call(t, !0, !0);
        }
      });
    };
    gt(1);
  }, G = (W) => {
    var Et, ee, $;
    K.raf = 0;
    const gt = D.stepInertia(W);
    (K.needsDraw || gt) && (K.needsDraw = !1, (Et = t.flags) != null && Et.collapsed || zf(t, F, null, D), (ee = t.setDirtyCanvas) == null || ee.call(t, !0, !1)), (gt || K.needsDraw) && (K.raf = requestAnimationFrame(G)), Ac() && (!t.__panoDebugLastTs || W - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = W, Ft(t, "dom.snapshot", {
      mode: t.__panoPreviewMode,
      nodeSize: Sn(t),
      root: Vr(R),
      wrap: Vr(T),
      canvas: Vr(F),
      rootParent: Vr(R.parentElement),
      rootGrandParent: Vr(($ = R.parentElement) == null ? void 0 : $.parentElement),
      canvasIntrinsic: { width: Number(F.width || 0), height: Number(F.height || 0) }
    }));
  }, D = ca({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (W) => {
      t.__panoPreviewView = W;
    },
    onInteraction: () => {
      q();
    }
  });
  F.addEventListener("pointerdown", (W) => {
    var gt, Et;
    rr(W, T) && h && W.button === 0 && ((gt = R.focus) == null || gt.call(R), (Et = F.setPointerCapture) == null || Et.call(F, W.pointerId), F.style.cursor = "grabbing", D.startDrag(W.clientX, W.clientY, W.pointerId));
  }), F.addEventListener("pointermove", (W) => {
    !h || !D.state.drag.active || (rr(W, T), D.moveDrag(W.clientX, W.clientY, "pano"));
  });
  const X = (W) => {
    var gt;
    !h || !D.state.drag.active || (rr(W, T), (gt = F.releasePointerCapture) == null || gt.call(F, W.pointerId), F.style.cursor = "grab", D.endDrag(), qc(t), q());
  };
  F.addEventListener("pointerup", X), F.addEventListener("pointercancel", X), F.addEventListener("pointerleave", (W) => {
    D.state.drag.active && X(W);
  });
  const ot = (W) => {
    var Et, ee, $;
    if (Ft(t, "event", { kind: "wheel", via: "stickers", interactiveView: h }), !rr(W, T) || !h) return;
    const gt = Gf();
    D.applyWheelEvent(W) && q(), (Et = W.preventDefault) == null || Et.call(W), (ee = W.stopPropagation) == null || ee.call(W), ($ = W.stopImmediatePropagation) == null || $.call(W), requestAnimationFrame(() => {
      var mt, pt;
      jf(gt), (pt = (mt = Zt == null ? void 0 : Zt.canvas) == null ? void 0 : mt.setDirty) == null || pt.call(mt, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((W) => {
    T.addEventListener(W, ot, { passive: !1, capture: !0 }), F.addEventListener(W, ot, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((W) => {
    F.addEventListener(W, (gt) => rr(gt, T)), T.addEventListener(W, (gt) => rr(gt, T));
  });
  const rt = Zi(t, "state_json");
  if (rt && !rt.__panoPreviewPatchedCb) {
    rt.__panoPreviewPatchedCb = !0;
    const W = rt.callback;
    rt.callback = (gt) => {
      const Et = W ? W(gt) : void 0;
      return q(), Et;
    };
  }
  const j = Zi(t, "bg_color");
  if (j && !j.__panoPreviewPatchedCb) {
    j.__panoPreviewPatchedCb = !0;
    const W = j.callback;
    j.callback = (gt) => {
      const Et = W ? W(gt) : void 0;
      return q(), Et;
    };
  }
  const z = t.onRemoved, ut = t.onResize, lt = t.onExecuted;
  t.onExecuted = function(W) {
    bf(t, W), fo(t), cr(t), q();
    const gt = lt ? lt.apply(this, arguments) : void 0;
    return cr(t), gt;
  };
  const ht = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return fo(t), cr(t), q(), ht ? ht.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var gt;
    const W = ut ? ut.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ia(this, 150), q(), (gt = this.setDirtyCanvas) == null || gt.call(this, !0, !1), W;
  }, t.onRemoved = function() {
    return ft(), qr.unregister(this), Qi.unregister(this), z ? z.apply(this, arguments) : void 0;
  };
  const ft = () => {
    var W;
    K.raf && cancelAnimationFrame(K.raf), (W = ct == null ? void 0 : ct.disconnect) == null || W.call(ct), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = ut, t.onExecuted = lt, t.onConnectionsChange = ht, t.onRemoved = z;
  };
  t.__panoDomRestore = ft, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: S, root: R, canvas: F, requestDraw: q, state: K, emptyHintEl: U }, Z(), q();
}
function ac(t, e = {}) {
  Lc(t).attach({
    ...e,
    mode: "cutout"
  });
}
const aa = Math.PI / 180;
function Un(t, e, i) {
  return { x: t, y: e, z: i };
}
function oc(t, e) {
  return Un(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Ii(t, e) {
  return Un(t.x * e, t.y * e, t.z * e);
}
function sc(t, e) {
  return Un(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Ei(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Un(t.x / e, t.y / e, t.z / e);
}
function qf(t, e) {
  const i = t * aa, o = e * aa, c = Math.cos(o);
  return Un(c * Math.sin(i), Math.sin(o), c * Math.cos(i));
}
function Yf(t, e, i = 0) {
  const o = qf(t, e), c = Un(0, 1, 0);
  let d = sc(c, o);
  Math.hypot(d.x, d.y, d.z) < 1e-6 && (d = Un(1, 0, 0)), d = Ei(d);
  const h = Ei(sc(o, d)), y = i * aa, x = Math.cos(y), w = Math.sin(y), P = oc(Ii(d, x), Ii(h, w)), p = oc(Ii(d, -w), Ii(h, x));
  return { fwd: o, right: Ei(P), up: Ei(p) };
}
const Di = 140, Xf = 180, cc = 40, Qa = 10;
function uc(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const i = e.split(":");
  return { full: e, tail: String(i[i.length - 1] || "").trim() };
}
function lc(t, e) {
  const i = uc(t), o = uc(e);
  return !i.full || !o.full ? !1 : i.full === o.full || i.tail === o.full || i.full === o.tail || i.tail === o.tail;
}
function dc(t) {
  var d;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "").trim();
  if (!e) return "";
  const i = new URLSearchParams();
  i.set("filename", e);
  const o = String(
    t.storage || (String(t.type || "").trim().toLowerCase() === "comfy_image" ? "output" : t.type) || "output"
  );
  i.set("type", o), t.subfolder && i.set("subfolder", String(t.subfolder));
  const c = `/view?${i.toString()}`;
  return typeof ((d = we) == null ? void 0 : d.apiURL) == "function" ? we.apiURL(c) : c;
}
function Yr(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Yr(t[0]);
    const e = typeof t[0] == "string" ? String(t[0] || "").trim() : "";
    if (e)
      return dc({
        filename: e,
        subfolder: String(t[1] || "").trim(),
        type: String(t[2] || "output").trim() || "output"
      });
    for (const i of t) {
      const o = Yr(i);
      if (o) return o;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : dc(t);
}
function fc(t) {
  var c;
  const e = (c = Pe) == null ? void 0 : c.nodeOutputs;
  if (!e || t == null) return null;
  const i = String(t);
  let o = null;
  if (e instanceof Map ? o = e.get(t) || e.get(i) || e.get(Number(i)) || null : o = e[t] || e[i] || null, o) return o;
  if (e instanceof Map) {
    for (const d of e.keys())
      if (lc(d, i)) return e.get(d);
  } else
    for (const d of Object.keys(e))
      if (lc(d, i)) return e[d];
  return null;
}
function Zf(t, e = "erp_image") {
  var L, I, R, T, F, U, S, K, q, ct, Z, G;
  const i = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let o = null;
  const c = i.find((D) => String((D == null ? void 0 : D.name) || "") === String(e));
  if ((c == null ? void 0 : c.link) != null && (o = c.link), o == null) {
    const D = i.find((X) => String((X == null ? void 0 : X.type) || "").toUpperCase() === "IMAGE" && (X == null ? void 0 : X.link) != null);
    (D == null ? void 0 : D.link) != null && (o = D.link);
  }
  if (o == null) return "";
  const d = ((I = (L = t == null ? void 0 : t.graph) == null ? void 0 : L.links) == null ? void 0 : I[o]) || ((F = (T = (R = Pe) == null ? void 0 : R.graph) == null ? void 0 : T.links) == null ? void 0 : F[o]);
  if (!d) return "";
  const h = Number(d.origin_id);
  if (!Number.isFinite(h)) return "";
  const y = (K = (S = (U = Pe) == null ? void 0 : U.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : K.call(S, h), x = fc(h), w = fc(t == null ? void 0 : t.id), P = [
    x == null ? void 0 : x.images,
    (q = x == null ? void 0 : x.ui) == null ? void 0 : q.pano_input_images,
    x == null ? void 0 : x.pano_input_images,
    (ct = w == null ? void 0 : w.ui) == null ? void 0 : ct.pano_input_images,
    w == null ? void 0 : w.pano_input_images
  ];
  for (const D of P)
    if (Array.isArray(D))
      for (const X of D) {
        const ot = Yr(X);
        if (ot) return ot;
      }
  let p = [];
  try {
    p = typeof ((Z = Pe) == null ? void 0 : Z.getNodeImageUrls) == "function" ? Pe.getNodeImageUrls(y) || [] : [];
  } catch {
    p = [];
  }
  if (Array.isArray(p) && p.length > 0)
    for (const D of p) {
      const X = Yr(D);
      if (X) return X;
    }
  if (y) {
    const D = Array.isArray(y == null ? void 0 : y.imgs) ? y.imgs : [];
    for (const X of D) {
      const ot = Yr(X);
      if (ot) return ot;
    }
  }
  const M = (G = y == null ? void 0 : y.widgets) == null ? void 0 : G.find((D) => String((D == null ? void 0 : D.name) || "").toLowerCase() === "image"), k = String((M == null ? void 0 : M.value) || "").trim();
  return k ? we.apiURL(`/view?filename=${encodeURIComponent(k)}&type=input&subfolder=`) : "";
}
function pc(t, e, i) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, i), t.moveTo(0, i * 0.5), t.lineTo(e, i * 0.5), t.stroke();
}
function hc(t, e, i, o, c, d) {
  if (e.clearRect(0, 0, i, o), e.fillStyle = "#070707", e.fillRect(0, 0, i, o), !d || !d.complete || !(d.naturalWidth || d.width) || i <= 1 || o <= 1) {
    pc(e, i, o);
    return;
  }
  const h = Yf(Number(c.yaw || 0), Number(c.pitch || 0), 0), y = Math.tan(Number(c.fov || 100) * aa * 0.5);
  br({
    owner: t,
    cacheKey: "standalone_preview_scene",
    ctx: e,
    width: i,
    height: o,
    backgroundSource: d,
    backgroundRevision: [
      String(d.currentSrc || d.src || ""),
      Number(d.naturalWidth || d.width || 0),
      Number(d.naturalHeight || d.height || 0)
    ].join("|"),
    textures: [],
    scene: ua(null, {}),
    view: tf(c)
  }) || (ra(t, e, { x: 0, y: 0, w: i, h: o }, h, y, d, gr), pc(e, i, o));
}
function mc(t, e, i) {
  return t >= i.x && t <= i.x + i.w && e >= i.y && e <= i.y + i.h;
}
class Jf {
  constructor(e, i = {}) {
    this.node = e, this.options = i, this.imageInputName = String(i.imageInputName || "erp_image"), this.buttonText = String(i.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = ca({
      getView: () => this.view,
      setView: (o) => {
        this.view = {
          yaw: pe(Number((o == null ? void 0 : o.yaw) || 0)),
          pitch: O(Number((o == null ? void 0 : o.pitch) || 0), -89.9, 89.9),
          fov: O(Number((o == null ? void 0 : o.fov) || 100), 35, 140)
        };
      },
      onInteraction: () => this.requestDraw()
    }), this.orig = {
      onDrawForeground: e.onDrawForeground,
      onMouseDown: e.onMouseDown,
      onMouseMove: e.onMouseMove,
      onMouseUp: e.onMouseUp,
      onMouseWheel: e.onMouseWheel,
      onExecuted: e.onExecuted,
      onConnectionsChange: e.onConnectionsChange,
      onResize: e.onResize,
      onRemoved: e.onRemoved
    }, this.legacyDragPointer = !1, this.tick = this.tick.bind(this), this.onResizeDom = this.onResizeDom.bind(this);
  }
  attach() {
    var e;
    typeof ((e = this.node) == null ? void 0 : e.addDOMWidget) == "function" ? this.attachDom() : this.attachLegacy(), this.installCommonHooks(), this.refreshImage(), this.requestDraw();
  }
  installCommonHooks() {
    const e = this;
    this.node.onExecuted = function() {
      const i = e.orig.onExecuted ? e.orig.onExecuted.apply(this, arguments) : void 0;
      return e.refreshImage(), i;
    }, this.node.onConnectionsChange = function() {
      const i = e.orig.onConnectionsChange ? e.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return e.refreshImage(), i;
    }, this.node.onResize = function() {
      const i = e.orig.onResize ? e.orig.onResize.apply(this, arguments) : void 0;
      return e.requestDraw(), i;
    }, this.node.onRemoved = function() {
      const i = e.orig.onRemoved ? e.orig.onRemoved.apply(this, arguments) : void 0;
      return e.teardown(), i;
    };
  }
  installErrorForeground() {
    const e = this;
    this.node.onDrawForeground = function(i) {
      var d;
      const o = e.orig.onDrawForeground ? e.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!i || (d = this.flags) != null && d.collapsed || !e.errorText) return o;
      const c = e.getLegacyPreviewRect();
      return i.save(), i.fillStyle = "rgba(18,18,22,0.92)", i.strokeStyle = "rgba(82,82,89,1)", i.lineWidth = 1, i.beginPath(), i.roundRect(c.x, c.y, c.w, c.h, 8), i.fill(), i.stroke(), i.fillStyle = "rgba(236,236,242,0.92)", i.font = "600 12px sans-serif", i.textAlign = "center", i.textBaseline = "middle", i.fillText(e.errorText, c.x + c.w * 0.5, c.y + c.h * 0.5), i.restore(), o;
    };
  }
  attachDom() {
    var e;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--stickers", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${Di}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = document.createElement("canvas"), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const i = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return Di;
        },
        getHeight() {
          return Di;
        },
        onRemove: () => this.teardown(),
        afterResize: () => this.requestDraw()
      };
      if (this.widget = this.node.addDOMWidget("preview", "preview", this.root, i), this.widget) {
        this.widget.serialize = !1;
        const o = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (c) => {
          const d = o ? o(c) || {} : {};
          return {
            ...d,
            minHeight: Math.max(Di, Number(d.minHeight || 0)),
            minWidth: Math.max(Xf, Number(d.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (e = this.resizeObserver) == null || e.observe(this.root), this.bindDomInput(this.canvas, this.root), this.onResizeDom(), this.logProbeFrames();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  bindDomInput(e, i) {
    e.addEventListener("pointerdown", (c) => {
      var d, h, y;
      c.button === 0 && ((d = i.focus) == null || d.call(i, { preventScroll: !0 }), (h = e.setPointerCapture) == null || h.call(e, c.pointerId), e.style.cursor = "grabbing", this.controller.startDrag(c.clientX, c.clientY, c.pointerId), c.preventDefault(), c.stopPropagation(), (y = c.stopImmediatePropagation) == null || y.call(c));
    }), e.addEventListener("pointermove", (c) => {
      var d;
      this.controller.state.drag.active && (this.controller.moveDrag(c.clientX, c.clientY, "pano"), c.preventDefault(), c.stopPropagation(), (d = c.stopImmediatePropagation) == null || d.call(c));
    });
    const o = (c) => {
      var d, h;
      this.controller.state.drag.active && ((d = e.releasePointerCapture) == null || d.call(e, c.pointerId), e.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), c.preventDefault(), c.stopPropagation(), (h = c.stopImmediatePropagation) == null || h.call(c));
    };
    e.addEventListener("pointerup", o), e.addEventListener("pointercancel", o), i.addEventListener("wheel", (c) => {
      var d;
      this.controller.applyWheelEvent(c), c.preventDefault(), c.stopPropagation(), (d = c.stopImmediatePropagation) == null || d.call(c);
    }, { passive: !1, capture: !0 });
  }
  attachLegacy() {
    const e = this;
    this.node.onDrawForeground = function(i) {
      const o = e.orig.onDrawForeground ? e.orig.onDrawForeground.apply(this, arguments) : void 0;
      return e.drawLegacy(i), o;
    }, this.node.onMouseDown = function(i, o) {
      var h;
      const c = e.localPoint(o);
      if (!c) return e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
      const d = e.getLegacyPreviewRect();
      return mc(c.x, c.y, d) ? (e.legacyDragPointer = !0, e.controller.startDrag(c.x - d.x, c.y - d.y), (h = this.setDirtyCanvas) == null || h.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(i, o) {
      var h;
      if (!e.legacyDragPointer || !e.controller.state.drag.active)
        return e.orig.onMouseMove ? e.orig.onMouseMove.apply(this, arguments) : void 0;
      const c = e.localPoint(o);
      if (!c) return !0;
      const d = e.getLegacyPreviewRect();
      return e.controller.moveDrag(c.x - d.x, c.y - d.y, "pano"), (h = this.setDirtyCanvas) == null || h.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var i;
      return !e.legacyDragPointer && !e.controller.state.drag.active ? e.orig.onMouseUp ? e.orig.onMouseUp.apply(this, arguments) : void 0 : (e.legacyDragPointer = !1, e.controller.endDrag(), (i = this.setDirtyCanvas) == null || i.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(i, o, c) {
      var w, P, p, M, k, L;
      const d = Bi(this, i, o, c), h = e.getLegacyPreviewRect();
      if (!d || !mc(d.x, d.y, h))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const y = Number((i == null ? void 0 : i.deltaY) ?? (i == null ? void 0 : i.wheelDeltaY) ?? (typeof o == "number" ? o : 0));
      Number(((w = e.view) == null ? void 0 : w.fov) || 100);
      const x = e.controller.applyWheel(Math.sign(y));
      return Number(((P = e.view) == null ? void 0 : P.fov) || 100), x && ((p = this.setDirtyCanvas) == null || p.call(this, !0, !1)), (M = i == null ? void 0 : i.preventDefault) == null || M.call(i), (k = i == null ? void 0 : i.stopPropagation) == null || k.call(i), (L = i == null ? void 0 : i.stopImmediatePropagation) == null || L.call(i), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var o, c, d, h;
    const e = Math.max(80, Number(((c = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : c[0]) || 0) - Qa * 2), i = Math.max(60, Number(((h = (d = this.node) == null ? void 0 : d.size) == null ? void 0 : h[1]) || 0) - cc - Qa);
    return { x: Qa, y: cc, w: e, h: i };
  }
  drawLegacy(e) {
    var o, c;
    if (!e || (c = (o = this.node) == null ? void 0 : o.flags) != null && c.collapsed) return;
    const i = this.getLegacyPreviewRect();
    i.w <= 2 || i.h <= 2 || (e.save(), e.translate(i.x, i.y), hc(this.node, e, i.w, i.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, i.w, i.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, i.w * 0.5, i.h * 0.5)), e.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const e = this.root.getBoundingClientRect(), i = 1, o = Math.max(1, Math.round(e.width * i)), c = Math.max(1, Math.round(e.height * i));
    (this.canvas.width !== o || this.canvas.height !== c) && (this.canvas.width = o, this.canvas.height = c, this.requestDraw());
  }
  refreshImage() {
    const e = Zf(this.node, this.imageInputName);
    if (!e) {
      this.img = null, this.imgSrc = "", this.requestDraw();
      return;
    }
    if (e === this.imgSrc && this.img) return;
    this.imgSrc = e;
    const i = new Image();
    i.onload = () => {
      this.imgSrc === e && (this.img = i, this.requestDraw());
    }, i.onerror = () => {
      this.imgSrc === e && (this.img = null, this.requestDraw());
    }, i.src = e;
  }
  requestDraw() {
    var e, i;
    if (this.needsDraw = !0, this.inTick) {
      this.queuedDuringTick = !0;
      return;
    }
    this.rafId || (this.rafId = requestAnimationFrame(this.tick)), this.canvas || (i = (e = this.node).setDirtyCanvas) == null || i.call(e, !0, !1);
  }
  tick(e = performance.now()) {
    var c, d;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const i = this.controller.stepInertia(e);
    this.canvas && this.ctx ? (hc(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (d = (c = this.node).setDirtyCanvas) == null || d.call(c, !0, !1), this.inTick = !1, (i || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  logProbeFrames() {
    if (!this.root || !this.canvas) return;
    let e = 0;
    const i = () => {
      !this.root || !this.canvas || e >= 3 || (e += 1, requestAnimationFrame(i));
    };
    requestAnimationFrame(i);
  }
  teardown() {
    var e, i, o, c, d, h;
    if (((e = this.node) == null ? void 0 : e.__panoPreviewNodeRuntime) === this) {
      this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (i = this.resizeObserver) == null ? void 0 : i.disconnect) == null || o.call(i), this.resizeObserver = null;
      try {
        (d = (c = this.root) == null ? void 0 : c.remove) == null || d.call(c);
      } catch {
      }
      if (Array.isArray((h = this.node) == null ? void 0 : h.widgets) && this.widget)
        try {
          this.node.widgets = this.node.widgets.filter((y) => y !== this.widget);
        } catch {
        }
      this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved, this.node.__panoPreviewNodeRuntime = null;
    }
  }
}
function Qf(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const i = new Jf(t, e);
  t.__panoPreviewNodeRuntime = i, i.attach();
}
function tp(t, e, i) {
  if (!(t != null && t.prototype) || typeof i != "function") return;
  const o = `__panoLifecyclePatched_${String(e)}`;
  if (t[o]) return;
  t[o] = !0;
  const c = `[PanoramaPreview:${String(e)}]`, d = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const x = d ? d.apply(this, arguments) : void 0;
    try {
      i(this);
    } catch (w) {
      try {
        console.warn(c, "onNodeCreated wiring skipped:", w);
      } catch {
      }
    }
    return x;
  };
  const h = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const x = h ? h.apply(this, arguments) : void 0;
    try {
      i(this);
    } catch (w) {
      try {
        console.warn(c, "onConfigure wiring skipped:", w);
      } catch {
      }
    }
    return x;
  };
  const y = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const x = y ? y.apply(this, arguments) : void 0;
    try {
      i(this);
    } catch (w) {
      try {
        console.warn(c, "onAdded wiring skipped:", w);
      } catch {
      }
    }
    return x;
  };
}
function Zc(t) {
  return !!(t != null && t.prototype);
}
function mo(t, e) {
  return typeof e == "function" ? (...i) => e(t, ...i) : e;
}
function ep(t, e = {}) {
  Zc(t) || Qf(t, {
    ...e,
    onOpen: mo(t, e.onOpen)
  });
}
function np(t, e = {}) {
  if (!Zc(t)) {
    ac(t, {
      ...e,
      onOpen: mo(t, e.onOpen)
    });
    return;
  }
  tp(t, "cutout_preview", (i) => {
    ac(i, {
      ...e,
      onOpen: mo(i, e.onOpen)
    });
  });
}
function rp(t = {}) {
  const {
    owner: e = null,
    ctx: i = null,
    rect: o = null,
    shot: c = null,
    bgImage: d = null,
    cachePrefix: h = "cutout_preview",
    quality: y = "balanced",
    drawDisplayList: x = null
  } = t;
  if (!i || !o || !c) return !1;
  const w = fr(c), P = typeof x == "function" ? !!x(i, o, w, d, String(h || "cutout_preview")) : !1, p = !P && !!d && !!Zd(
    i,
    e,
    d,
    o,
    c,
    String(y || "balanced")
  );
  return !!P || !!p;
}
const xe = {
  pen: {
    id: "pen",
    label: "Pen",
    stampKind: "round",
    hardness: 0.92,
    spacing: 0.14,
    flow: 1,
    opacity: 1,
    opacityMode: "accumulate",
    aspect: 1,
    angle: { kind: "fixed", value: 0 },
    velocityWidthFactor: 0,
    chiselEdgeLift: 0,
    chiselCenterDip: 0,
    scatter: null,
    sizeScale: 1
  },
  marker: {
    id: "marker",
    label: "Marker",
    stampKind: "chisel",
    hardness: 0.76,
    spacing: 0.06,
    // flow < 1 so accumulate mode shows visible overlap buildup (Apple Freeboard style).
    flow: 0.8,
    opacity: 0.88,
    // accumulate: overlapping areas within one stroke build up darker, like a real marker.
    opacityMode: "accumulate",
    aspect: 2.4,
    angle: { kind: "fixed", value: Math.PI / 6 },
    velocityWidthFactor: 0,
    chiselEdgeLift: 0.3,
    chiselCenterDip: 0.12,
    // Nib-fiber texture: felt channels visible as subtle streaks along the nib.
    chiselFiber: 0.28,
    scatter: null,
    // Compensates for aspect=2.4: at same slider value, nib height matches pen stroke width.
    sizeScale: 0.6
  },
  brush: {
    id: "brush",
    label: "Soft Brush",
    stampKind: "round",
    hardness: 0.06,
    spacing: 0.06,
    flow: 0.28,
    opacity: 0.85,
    opacityMode: "accumulate",
    aspect: 1,
    angle: { kind: "fixed", value: 0 },
    velocityWidthFactor: 0,
    chiselEdgeLift: 0,
    chiselCenterDip: 0,
    scatter: null,
    // Soft edges feather out visually; scale up so it feels similar in weight to pen.
    sizeScale: 1.5
  },
  crayon: {
    id: "crayon",
    label: "Pastel",
    stampKind: "crayon",
    hardness: 0.55,
    spacing: 0.1,
    flow: 0.82,
    opacity: 0.92,
    opacityMode: "accumulate",
    aspect: 1.2,
    angle: { kind: "fixed", value: 0 },
    velocityWidthFactor: 0,
    chiselEdgeLift: 0,
    chiselCenterDip: 0,
    // Grain = amount of per-pixel wax-texture noise applied inside the shape.
    // 0 = no grain (smooth), 1 = maximum grain.
    crayonGrain: 0.68,
    scatter: null,
    sizeScale: 0.92
  }
}, sn = "pen";
function gc(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function ip(t = 80, e = null, i = 8) {
  const o = [];
  let c = -1;
  const d = Math.max(1, Number(t || 80)), h = Math.max(1, Number(i || 8));
  function y(w) {
    if (o.splice(0, o.length), c = -1, !w || typeof w != "object" || !Array.isArray(w.entries) || (w.entries.forEach((p) => {
      o.push(String(p || ""));
    }), !o.length)) return;
    const P = Number(w.index);
    Number.isInteger(P) ? P === -1 ? c = -1 : c = Math.max(0, Math.min(o.length - 1, P)) : c = o.length - 1;
  }
  function x(w) {
    o[c] !== w && (o.splice(c + 1), o.push(w), o.length > d && o.shift(), c = o.length - 1);
  }
  return y(e), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(w) {
      x(String(w || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const w = c - 1;
      return w < 0 || w >= o.length ? null : (c = w, o[c]);
    },
    redo() {
      const w = c + 1;
      return w < 0 || w >= o.length ? null : (c = w, o[c]);
    },
    get entries() {
      return o.slice();
    },
    get index() {
      return c;
    },
    serialize() {
      const w = o.length, P = Math.max(0, w - h), p = c >= 0 ? Math.min(P, c) : P, M = o.slice(p), k = c < 0 ? -1 : Math.max(-1, Math.min(M.length - 1, c - p));
      return {
        version: 1,
        entries: M,
        index: k
      };
    },
    hydrate: y
  };
}
function jt(t, e = null) {
  const i = Number(t);
  return Number.isFinite(i) ? i : e;
}
function ap() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function op(t) {
  if (!Array.isArray(t)) return [];
  const e = [], i = /* @__PURE__ */ new Set();
  for (const o of t) {
    if (!o || typeof o != "object") continue;
    const c = String(o.actionGroupId || o.id || "").trim();
    if (!c || i.has(c)) continue;
    i.add(c);
    const d = jt(o.z_index ?? o.zIndex, e.length);
    e.push({
      id: String(o.id || c),
      type: "strokeGroup",
      actionGroupId: c,
      z_index: Math.max(0, Math.round(d ?? e.length)),
      locked: o.locked === !0
    });
  }
  return e;
}
function sp(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const i = String(t.frameId ?? "").trim();
    return i ? { kind: "FRAME_LOCAL", frameId: i } : null;
  }
  return null;
}
function cp(t, e) {
  if (!t || typeof t != "object" || !e) return null;
  const i = jt(t.t, 0), o = jt(t.widthScale, null), c = jt(t.pressureLike, null);
  if (e.kind === "ERP_GLOBAL") {
    const d = jt(t.u, null), h = jt(t.v, null);
    if (d == null || h == null) return null;
    const y = {
      targetKind: "ERP_GLOBAL",
      u: (d % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, h)),
      t: i
    };
    return o != null && (y.widthScale = Math.max(0, o)), c != null && (y.pressureLike = Math.max(0, c)), y;
  }
  if (e.kind === "FRAME_LOCAL") {
    const d = jt(t.u, null), h = jt(t.v, null);
    if (d == null || h == null) return null;
    const y = {
      targetKind: "FRAME_LOCAL",
      frameId: e.frameId,
      u: d,
      v: h,
      t: i
    };
    return o != null && (y.widthScale = Math.max(0, o)), c != null && (y.pressureLike = Math.max(0, c)), y;
  }
  return null;
}
function Li(t, e, i = 1) {
  if (!Array.isArray(t)) return null;
  const o = [];
  for (const c of t) {
    const d = cp(c, e);
    if (!d) return null;
    o.push(d);
  }
  return o.length >= i ? o : null;
}
function up(t, e, i, o) {
  if (!t || typeof t != "object") return null;
  const c = String(t.geometryKind || "").trim();
  if (c === "lasso_fill") {
    if (!o || i !== "lasso_fill") return null;
    const x = Li(t.points, e, 3);
    return x ? { geometryKind: c, points: x } : null;
  }
  if (c !== "freehand_open" && c !== "freehand_closed" || i === "lasso_fill") return null;
  const d = Li(t.points, e, 1);
  if (!d) return null;
  const h = Li(t.rawPoints, e, 1), y = Li(t.processedPoints, e, 1);
  return {
    geometryKind: c,
    points: d,
    rawPoints: h || d.map((x) => ({ ...x })),
    processedPoints: y || d.map((x) => ({ ...x }))
  };
}
function lp(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const i = sp(t.targetSpace);
  if (!i) return null;
  const o = String(t.toolKind || "").trim(), c = up(t.geometry, i, o, e === "paint");
  if (!c) return null;
  const d = jt(t.size, null), h = jt(t.opacity, null);
  if (d == null || h == null) return null;
  const y = String(t.id || "").trim(), x = String(t.actionGroupId || "").trim();
  if (!y || !x) return null;
  const w = jt(t.radiusValue, null), P = String(t.radiusModel || "").trim() || null;
  let p = null;
  if (e === "paint") {
    const M = t.color;
    if (!M || typeof M != "object") return null;
    p = {
      r: Math.max(0, Math.min(1, jt(M.r, 0))),
      g: Math.max(0, Math.min(1, jt(M.g, 0))),
      b: Math.max(0, Math.min(1, jt(M.b, 0))),
      a: Math.max(0, Math.min(1, jt(M.a, 1)))
    };
  }
  return {
    id: y,
    actionGroupId: x,
    targetSpace: i,
    layerKind: e,
    toolKind: o,
    brushPresetId: String(t.brushPresetId || "").trim() || null,
    size: Math.max(0, d),
    opacity: Math.max(0, Math.min(1, h)),
    hardness: jt(t.hardness, null),
    flow: jt(t.flow, null),
    spacing: jt(t.spacing, null),
    createdAt: Math.trunc(jt(t.createdAt, 0)),
    color: p,
    radiusModel: P,
    radiusValue: w == null ? null : Math.max(0, w),
    geometry: c
  };
}
function yc(t, e) {
  const i = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return i;
  for (const o of t.strokes) {
    const c = lp(o, e);
    c && i.strokes.push(c);
  }
  return i;
}
function dp(t) {
  if (!t || typeof t != "object") return null;
  const e = jt(t.u0, null), i = jt(t.v0, null), o = jt(t.u1, null), c = jt(t.v1, null);
  if (e == null || i == null || o == null || c == null) return null;
  const d = (y) => Math.max(0, Math.min(1, y)), h = { u0: d(e), v0: d(i), u1: d(o), v1: d(c) };
  return h.u1 <= h.u0 || h.v1 <= h.v0 ? null : h;
}
function fp(t) {
  const e = t || {};
  return {
    du: jt(e.du, 0) ?? 0,
    dv: jt(e.dv, 0) ?? 0,
    rot_deg: jt(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, jt(e.scale, 1) ?? 1)
  };
}
function pp(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const i = String(t.id || "").trim();
  if (!i) return null;
  const o = String(t.layerKind || "paint");
  if (o !== "paint" && o !== "mask") return null;
  const c = String(t.rasterDataUrl || "").trim();
  if (!c.startsWith("data:")) return null;
  const d = dp(t.bbox);
  return d ? {
    id: i,
    type: "raster_frozen",
    layerKind: o,
    z_index: Math.max(0, jt(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: d,
    rasterDataUrl: c,
    transform: fp(t.transform)
  } : null;
}
function hp(t) {
  if (!Array.isArray(t)) return [];
  const e = [], i = /* @__PURE__ */ new Set();
  for (const o of t) {
    const c = pp(o, e.length);
    !c || i.has(c.id) || (i.add(c.id), e.push(c));
  }
  return e;
}
function Xr(t) {
  const e = ap();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: op(t.groups),
    paint: yc(t.paint, "paint"),
    mask: yc(t.mask, "mask"),
    raster_objects: hp(t.raster_objects)
  };
}
const go = "state_json", En = "sticker_image_1", to = "external_image", eo = "pano_sticker_input_images", Ki = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], fe = Math.PI / 180, Tn = 180 / Math.PI, oa = 24, mp = 4, gp = 4, Wr = /* @__PURE__ */ new Map(), yo = /* @__PURE__ */ new Map(), at = {
  // Source: @geist-ui/icons globe.js (v1.0.2)
  globe: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' shape-rendering='geometricPrecision'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'/></svg>",
  pano: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M1.5 8.2c1.9-2.2 4.1-3.3 6.5-3.3s4.6 1.1 6.5 3.3'/><path d='M2.6 10.9c1.5-1.5 3.3-2.3 5.4-2.3s3.9.8 5.4 2.3'/><circle cx='8' cy='12.2' r='1' fill='currentColor' stroke='none'/></svg>",
  unwrap: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='1.75' y='3' width='12.5' height='10' rx='2'/><path d='M5.9 3v10M10.1 3v10'/></svg>",
  undo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M5.5 4.3 2.8 7l2.7 2.7'/><path d='M3.1 7h5.3a3.7 3.7 0 1 1 0 7.4'/></svg>",
  redo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m10.5 4.3 2.7 2.7-2.7 2.7'/><path d='M12.9 7H7.6a3.7 3.7 0 1 0 0 7.4'/></svg>",
  clear: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  duplicate: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.3' y='5.3' width='7.7' height='7.7' rx='1.4'/><rect x='3' y='3' width='7.7' height='7.7' rx='1.4'/></svg>",
  replace_image: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m17 2 4 4-4 4'/><path d='M3 11v-1a4 4 0 0 1 4-4h14'/><path d='m7 22-4-4 4-4'/><path d='M21 13v1a4 4 0 0 1-4 4H3'/></svg>",
  bring_front: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 12V4'/><path d='m4.4 5.6 1.6-1.6 1.6 1.6'/><path d='M9.5 11h3.1M9.5 8h2.2M9.5 5h1.2'/></svg>",
  send_back: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 4v8'/><path d='m4.4 10.4 1.6 1.6 1.6-1.6'/><path d='M9.5 11h1.2M9.5 8h2.2M9.5 5h3.1'/></svg>",
  aspect: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.866 14.7041C13.9131 14.5727 12.9574 14.4687 12 14.3923V12.8876C12.8347 12.9523 13.6683 13.0373 14.4999 13.1426L14.5 9.00003H16L15.9999 14L15.9999 14.8605L15.1475 14.7429L14.866 14.7041ZM16 7.00003L16 2.49996L16 1.6394L15.1475 1.75699L14.866 1.79581C13.9131 1.92725 12.9574 2.03119 12 2.10765V3.61228C12.8347 3.54757 13.6683 3.46256 14.5 3.35727L14.5 7.00003H16ZM9.99998 2.22729V3.72844C8.66715 3.77999 7.33282 3.77999 5.99998 3.72844V2.22729C7.33279 2.28037 8.66718 2.28037 9.99998 2.22729ZM9.99998 14.2726V12.7715C8.66715 12.7199 7.33282 12.7199 5.99998 12.7715V14.2726C7.33279 14.2195 8.66718 14.2195 9.99998 14.2726ZM3.99998 14.3923C3.04258 14.4687 2.08683 14.5727 1.13391 14.7041L0.85242 14.7429L-0.0000610352 14.8605L-0.0000578761 14L-0.0000396322 9.00003H1.49996L1.49995 13.1426C2.33162 13.0373 3.16521 12.9523 3.99998 12.8876V14.3923ZM1.49997 7.00003L1.49998 3.35727C2.33164 3.46256 3.16522 3.54757 3.99998 3.61228V2.10765C3.0426 2.03119 2.08686 1.92725 1.13395 1.79581L0.852462 1.75699L-0.0000127554 1.6394L-0.0000159144 2.49995L-0.0000323345 7.00003H1.49997Z' fill='currentColor'/></svg>",
  rotate_90: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.21967 4.71967L5.68934 5.25L6.75 6.31066L7.28033 5.78033L9.25 3.81066V13.5C9.25 13.6381 9.13807 13.75 9 13.75H2.75H2V15.25H2.75H9C9.9665 15.25 10.75 14.4665 10.75 13.5V3.81066L12.7197 5.78033L13.25 6.31066L14.3107 5.25L13.7803 4.71967L10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L6.21967 4.71967Z' fill='currentColor'/></svg>",
  back_initial: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 14V2.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M4.5 3.5h6.2l-1.6 2.2 1.6 2.2H4.5z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M12.8 12.2H7.2' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='m8.9 10.6-1.7 1.6 1.7 1.6' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  delete: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  reset: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M8 3.2a4.8 4.8 0 1 1-4.8 4.8'/><path d='M3.2 3.2v3.6h3.6'/></svg>",
  eye: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  eye_dashed: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.51404 3.15793C7.48217 2.87411 8.51776 2.87411 9.48589 3.15793L9.90787 1.71851C8.66422 1.35392 7.33571 1.35392 6.09206 1.71851L6.51404 3.15793ZM10.848 3.78166C11.2578 4.04682 11.6393 4.37568 11.9783 4.76932L13.046 6.00934L14.1827 5.03056L13.1149 3.79054C12.6818 3.28761 12.1918 2.86449 11.6628 2.52224L10.848 3.78166ZM4.02168 4.76932C4.36065 4.37568 4.74209 4.04682 5.15195 3.78166L4.33717 2.52225C3.80815 2.86449 3.3181 3.28761 2.88503 3.79054L1.81723 5.03056L2.95389 6.00934L4.02168 4.76932ZM14.1138 7.24936L14.7602 7.99999L14.1138 8.75062L15.2505 9.72941L16.3183 8.48938V7.5106L15.2505 6.27058L14.1138 7.24936ZM1.88609 7.24936L1.23971 7.99999L1.88609 8.75062L0.749437 9.72941L-0.318359 8.48938V7.5106L0.749436 6.27058L1.88609 7.24936ZM13.0461 9.99064L11.9783 11.2307C11.6393 11.6243 11.2578 11.9532 10.848 12.2183L11.6628 13.4777C12.1918 13.1355 12.6818 12.7124 13.1149 12.2094L14.1827 10.9694L13.0461 9.99064ZM4.02168 11.2307L2.95389 9.99064L1.81723 10.9694L2.88503 12.2094C3.3181 12.7124 3.80815 13.1355 4.33717 13.4777L5.15195 12.2183C4.7421 11.9532 4.36065 11.6243 4.02168 11.2307ZM9.90787 14.2815L9.48589 12.8421C8.51776 13.1259 7.48217 13.1259 6.51405 12.8421L6.09206 14.2815C7.33572 14.6461 8.66422 14.6461 9.90787 14.2815ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  fullscreen: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z' fill='currentColor'/></svg>",
  camera: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.75 5.25H4.79C5.23 5.25 5.63 4.98 5.79 4.57L6.02 3.98C6.18 3.57 6.58 3.3 7.02 3.3H8.98C9.42 3.3 9.82 3.57 9.98 3.98L10.21 4.57C10.37 4.98 10.77 5.25 11.21 5.25H13.25C13.8 5.25 14.25 5.7 14.25 6.25V11.25C14.25 11.8 13.8 12.25 13.25 12.25H2.75C2.2 12.25 1.75 11.8 1.75 11.25V6.25C1.75 5.7 2.2 5.25 2.75 5.25Z'/><circle cx='8' cy='8.75' r='2.25'/></svg>",
  // Source: vercel.com/geist/icons
  plus_circle: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z' fill='currentColor'/></svg>",
  image: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M2.5 2h11A1.5 1.5 0 0 1 15 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2ZM2 9.56l2.77-2.77a1 1 0 0 1 1.41 0l1.32 1.32 2.82-2.82a1 1 0 0 1 1.42 0L14 7.55V3.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v6.06Zm0 1.41V12.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8.97L10.8 5.76 7.85 8.7a.75.75 0 0 1-1.06 0L5.47 7.38 2 10.97ZM5.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z' fill='currentColor'/></svg>",
  crosshair: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M7.25 11.75L7.25 14.4572C4.2595 14.1136 1.88638 11.7405 1.5428 8.75H4.25H5V7.25H4.25H1.5428C1.88638 4.2595 4.2595 1.88638 7.25 1.5428V4.25V5H8.75V4.25V1.5428C11.7405 1.88638 14.1136 4.2595 14.4572 7.25L11.75 7.25H11V8.75L11.75 8.75H14.4572C14.1136 11.7405 11.7405 14.1136 8.75 14.4572V11.75L8.75 11H7.25V11.75ZM15.9653 8.75C15.6102 12.5697 12.5697 15.6102 8.75 15.9653V16H8H7.25V15.9653C3.43032 15.6102 0.389836 12.5697 0.0346937 8.75H0V8V7.25H0.0346937C0.389836 3.43032 3.43032 0.389836 7.25 0.0346937V0H8H8.75V0.0346937C12.5697 0.389836 15.6102 3.43032 15.9653 7.25H16V8V8.75H15.9653Z' fill='currentColor'/></svg>",
  fullscreen_close: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6 1V1.75V5C6 5.55229 5.55228 6 5 6H1.75H1V4.5H1.75H4.5V1.75V1H6ZM14.25 6H15V4.5H14.25H11.5V1.75V1H10V1.75V5C10 5.55228 10.4477 6 11 6H14.25ZM10 14.25V15H11.5V14.25V11.5H14.29H15.04V10H14.29H11C10.4477 10 10 10.4477 10 11V14.25ZM1.75 10H1V11.5H1.75H4.5V14.25V15H6V14.25V11C6 10.4477 5.55229 10 5 10H1.75Z' fill='currentColor'/></svg>",
  copy: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.2' y='5.2' width='7.8' height='7.8' rx='1.4'/><rect x='3' y='3' width='7.8' height='7.8' rx='1.4'/></svg>",
  chevron: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m4.5 6.5 3.5 3.5 3.5-3.5'/></svg>",
  cursor_tool: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 2.5 12.2 8l-4 1.2 1.8 4.3-1.8.8-1.9-4.3-2.6 2.2z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  palette_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z'/><path d='M7 13.5a2.5 2.5 0 0 0 2.5 2.5H11a2 2 0 0 1 0 4h-1'/><circle cx='7.5' cy='8.5' r='.9' fill='currentColor' stroke='none'/><circle cx='12' cy='6.5' r='.9' fill='currentColor' stroke='none'/><circle cx='16.5' cy='8.5' r='.9' fill='currentColor' stroke='none'/></svg>",
  circle_dashed_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10.1 2.6A9.9 9.9 0 0 1 13.9 2.6'/><path d='M17.8 4.2a9.9 9.9 0 0 1 2 2.8'/><path d='M21.4 10.1a9.9 9.9 0 0 1 0 3.8'/><path d='M19.8 17.8a9.9 9.9 0 0 1-2.8 2'/><path d='M13.9 21.4a9.9 9.9 0 0 1-3.8 0'/><path d='M6.2 19.8a9.9 9.9 0 0 1-2-2.8'/><path d='M2.6 13.9a9.9 9.9 0 0 1 0-3.8'/><path d='M4.2 6.2a9.9 9.9 0 0 1 2.8-2'/></svg>",
  pencil_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m3 21 3.8-1 10-10a2.1 2.1 0 0 0-3-3L3.8 17z'/><path d='m14.5 6.5 3 3'/></svg>",
  // Source: Lucide paintbrush-vertical
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  highlighter_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m14 4 6 6'/><path d='m4 20 4.5-1 9-9-3.5-3.5-9 9z'/><path d='M13 7 17 11'/><path d='M3 21h7'/></svg>",
  spray_can_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 6h6'/><path d='M12 3h2a2 2 0 0 1 2 2v1'/><path d='M9 8h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z'/><path d='M5 10h.01'/><path d='M3 14h.01'/><path d='M5 18h.01'/></svg>",
  eraser_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m7 13.5 6.8-6.8a2.2 2.2 0 0 1 3.1 0l2.4 2.4a2.2 2.2 0 0 1 0 3.1l-6.8 6.8a2.2 2.2 0 0 1-1.5.6H7.8a2.2 2.2 0 0 1-1.6-.6l-1.5-1.5a2.2 2.2 0 0 1 0-3.1L7 13.5Z'/><path d='M13.5 19.5H21'/></svg>",
  lasso_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M7.2 18.8C4.6 18 3 16.2 3 14c0-3.9 4-7 9-7s9 3.1 9 7-4 7-9 7c-1.1 0-2.2-.1-3.1-.4'/><path d='M7 17c1 0 1.8.8 1.8 1.8S8 20.6 7 20.6s-1.8-.8-1.8-1.8S6 17 7 17Z'/></svg>",
  lock_closed: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z' fill='currentColor'></path></svg>",
  lock_open: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14 6V4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5V6H10.5H12V7.5V12.5C12 13.8807 10.8807 15 9.5 15H2.5C1.11929 15 0 13.8807 0 12.5V7.5V6H1.5H8.5V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V6H14ZM10.5 7.5H10H8.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H9.5C10.0523 13.5 10.5 13.0523 10.5 12.5V7.5Z' fill='currentColor'></path></svg>"
};
function yp(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function bp(t) {
  return 1 - Math.pow(1 - t, 3);
}
function vp(t) {
  return t * t * t;
}
function tn(t, e, i) {
  return { x: t, y: e, z: i };
}
function Ti(t, e) {
  return tn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Ri(t, e) {
  return tn(t.x * e, t.y * e, t.z * e);
}
function Oe(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Fi(t, e) {
  return tn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function ir(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return tn(t.x / e, t.y / e, t.z / e);
}
function Xe(t, e) {
  const i = t * fe, o = e * fe, c = Math.cos(o);
  return tn(c * Math.sin(i), Math.sin(o), c * Math.cos(i));
}
function Oi(t) {
  return {
    yaw: pe(Math.atan2(t.x, t.z) * Tn),
    pitch: O(Math.asin(O(t.y, -1, 1)) * Tn, -90, 90)
  };
}
function cn(t, e) {
  let i = !1;
  for (let o = 0, c = e.length - 1; o < e.length; c = o++) {
    const d = e[o].x, h = e[o].y, y = e[c].x, x = e[c].y;
    h > t.y != x > t.y && t.x < (y - d) * (t.y - h) / (x - h || 1e-6) + d && (i = !i);
  }
  return i;
}
function Ln(t, e) {
  const i = t.x - e.x, o = t.y - e.y;
  return i * i + o * o;
}
function no(t, e, i) {
  const o = Number(i.x || 0) - Number(e.x || 0), c = Number(i.y || 0) - Number(e.y || 0), d = Number(t.x || 0) - Number(e.x || 0), h = Number(t.y || 0) - Number(e.y || 0), y = o * o + c * c;
  if (y <= 1e-6) return Ln(t, e);
  const x = O((d * o + h * c) / y, 0, 1), w = Number(e.x || 0) + o * x, P = Number(e.y || 0) + c * x, p = Number(t.x || 0) - w, M = Number(t.y || 0) - P;
  return p * p + M * M;
}
function $e(t, e, i) {
  return t + (e - t) * i;
}
function ze(t, e = null) {
  const i = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(O(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(O(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(O(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${O(i, 0, 1)})`;
}
function _p(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let $i = { fillStyle: "", url: "" };
function wp(t, e, i) {
  if ($i.url && $i.fillStyle === String(t || ""))
    return $i.url;
  const o = _p(`
<svg xmlns="http://www.w3.org/2000/svg" width="${oa}" height="${oa}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${i}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return $i = { fillStyle: String(t || ""), url: o }, o;
}
function Wi(t, e, i = 0.015) {
  return !t || !e ? !1 : Math.abs(Number(t.r ?? 0) - Number(e.r ?? 0)) <= i && Math.abs(Number(t.g ?? 0) - Number(e.g ?? 0)) <= i && Math.abs(Number(t.b ?? 0) - Number(e.b ?? 0)) <= i && Math.abs(Number(t.a ?? 1) - Number(e.a ?? 1)) <= i;
}
function ke(t) {
  return {
    r: O(Number((t == null ? void 0 : t.r) ?? 0), 0, 1),
    g: O(Number((t == null ? void 0 : t.g) ?? 0), 0, 1),
    b: O(Number((t == null ? void 0 : t.b) ?? 0), 0, 1),
    a: O(Number((t == null ? void 0 : t.a) ?? 1), 0, 1)
  };
}
function Se(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function xp(t) {
  return Ki.some((e) => Wi(t, e.color));
}
function ro(t, e, i) {
  const o = (Number(t) % 1 + 1) % 1, c = O(Number(e), 0, 1), d = O(Number(i), 0, 1);
  if (c <= 1e-6) return { r: d, g: d, b: d };
  const h = Math.floor(o * 6), y = o * 6 - h, x = d * (1 - c), w = d * (1 - y * c), P = d * (1 - (1 - y) * c);
  switch (h % 6) {
    case 0:
      return { r: d, g: P, b: x };
    case 1:
      return { r: w, g: d, b: x };
    case 2:
      return { r: x, g: d, b: P };
    case 3:
      return { r: x, g: w, b: d };
    case 4:
      return { r: P, g: x, b: d };
    default:
      return { r: d, g: x, b: w };
  }
}
function Ur(t) {
  const e = O(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), i = O(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), o = O(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), c = Math.max(e, i, o), d = Math.min(e, i, o), h = c - d;
  let y = 0;
  h > 1e-6 && (c === e ? y = ((i - o) / h + (i < o ? 6 : 0)) / 6 : c === i ? y = ((o - e) / h + 2) / 6 : y = ((e - i) / h + 4) / 6);
  const x = c <= 1e-6 ? 0 : h / c;
  return { h: y, s: x, v: c };
}
function io(t) {
  const e = Number(t);
  return Number.isFinite(e) ? Number(e.toFixed(3)).toString() : "0";
}
function bc(t, e = 0) {
  const i = Number(t);
  return Number.isFinite(i) && i > 0 ? i : Number(e);
}
function Jc(t, e) {
  const i = bc(t, 1), o = bc(e, 1);
  if (i <= 0 || o <= 0) return "1:1";
  const c = 1e3, d = Math.max(1, Math.round(i * c)), h = Math.max(1, Math.round(o * c)), y = (p, M) => M ? y(M, p % M) : p, x = y(d, h) || 1, w = Math.max(1, Math.round(d / x)), P = Math.max(1, Math.round(h / x));
  return `${w}:${P}`;
}
function bo(t) {
  const e = O(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * fe, i = O(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * fe;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(i * 0.5))));
}
function Sp(t) {
  const e = Number(t);
  if (!Number.isFinite(e) || e <= 0) return "1:1";
  const i = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ], o = 0.015;
  for (const [c, d] of i)
    if (Math.abs(e - d) <= o) return c;
  return "";
}
function Rn(t) {
  const e = bo(t);
  return Sp(e) || Jc(e, 1);
}
function Np(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = Rn(e), e;
}
function ar(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : Rn(t);
}
function Mp() {
  if (document.getElementById("pano-suite-style-link")) return;
  const t = document.createElement("link");
  t.id = "pano-suite-style-link", t.rel = "stylesheet", t.href = new URL("./pano_editor.css", import.meta.url).toString(), document.head.appendChild(t);
}
const Qc = "pano_suite.ui_settings.v1", tu = "pano_suite.node_grid_visibility.v1";
let ur = null, Ze = null, zi = { text: null, parsed: null };
function Zr(t) {
  const e = t && typeof t == "object" ? t : {}, i = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: i === "draft" || i === "balanced" || i === "high" ? i : "balanced"
  };
}
function kp() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Qc)) || "").trim();
    if (!e) return ur ? Zr(ur) : null;
    const i = JSON.parse(e), o = Zr(i);
    return ur = o, o;
  } catch {
    return ur ? Zr(ur) : null;
  }
}
function Pp(t) {
  var i;
  const e = Zr(t);
  ur = e;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(Qc, JSON.stringify(e));
  } catch {
  }
  return e;
}
function eu() {
  var t;
  if (Ze && typeof Ze == "object")
    return Ze;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(tu)) || "").trim();
    if (!e)
      return Ze = {}, Ze;
    const i = JSON.parse(e);
    return Ze = i && typeof i == "object" ? i : {}, Ze;
  } catch {
    return Ze = {}, Ze;
  }
}
function Cp(t, e = !0) {
  const i = String(t ?? "").trim();
  if (!i) return !!e;
  const c = eu()[i];
  return typeof c == "boolean" ? c : !!e;
}
function Ap(t, e) {
  var c;
  const i = String(t ?? "").trim();
  if (!i) return;
  const o = eu();
  o[i] = !!e, Ze = o;
  try {
    (c = window == null ? void 0 : window.localStorage) == null || c.setItem(tu, JSON.stringify(o));
  } catch {
  }
}
function Ip(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([i, o]) => {
    e[i] = o && typeof o == "object" ? { ...o } : o;
  }), e;
}
function Ep(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const i = { ...e };
    return i.crop && typeof i.crop == "object" && (i.crop = { ...i.crop }), i.initial_pose && typeof i.initial_pose == "object" && (i.initial_pose = { ...i.initial_pose }), i.visible = i.visible !== !1, i.locked = i.locked === !0, i;
  }) : [];
}
function Dp(t) {
  var o, c;
  const e = Array.isArray((o = t == null ? void 0 : t.paint) == null ? void 0 : o.strokes) ? t.paint.strokes.length : 0, i = Array.isArray((c = t == null ? void 0 : t.mask) == null ? void 0 : c.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: i };
}
function vc(t) {
  const { paintCount: e, maskCount: i } = Dp(t), o = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
  let c = 0, d = 0;
  return o.forEach((h) => {
    String((h == null ? void 0 : h.layerKind) || "paint") === "mask" ? d += 1 : c += 1;
  }), {
    paintCount: e,
    maskCount: i,
    paintRasterCount: c,
    maskRasterCount: d,
    totalPaintCount: e + c,
    totalMaskCount: i + d
  };
}
function or(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function _c(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function Lp(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : Np(e)) : [];
}
function Tp(t, e = 2048, i = "#00ff00") {
  const o = kp(), c = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    bg_color: i,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Xr(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(o != null && o.invert_view_x),
      invert_view_y: !!(o != null && o.invert_view_y),
      preview_quality: String((o == null ? void 0 : o.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, d = String(t || "").trim();
  if (!d) return c;
  try {
    let h = null;
    if (zi.text === d ? h = zi.parsed : (h = JSON.parse(d), zi = { text: d, parsed: h }), !h || typeof h != "object" || Array.isArray(h)) return c;
    const y = {
      ...c,
      ...h,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Ip(h.assets),
      stickers: Ep(h.stickers),
      shots: Lp(h.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: Xr(h.painting),
      painting_layer: h.painting_layer && typeof h.painting_layer == "object" ? h.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(h.ui_settings && h.ui_settings.invert_view_x),
        invert_view_y: !!(h.ui_settings && h.ui_settings.invert_view_y),
        preview_quality: (() => {
          var w;
          const x = String(((w = h.ui_settings) == null ? void 0 : w.preview_quality) || "balanced");
          return x === "draft" || x === "balanced" || x === "high" ? x : "balanced";
        })()
      },
      active: h.active && typeof h.active == "object" ? { ...h.active } : { ...c.active }
    };
    return o && (y.ui_settings = Zr({ ...y.ui_settings, ...o })), delete y.editor_history, y;
  } catch {
    return zi = { text: d, parsed: null }, c;
  }
}
function pr(t, e) {
  var i;
  return ((i = t.widgets) == null ? void 0 : i.find((o) => o.name === e)) || null;
}
function Gr(t) {
  return String(t ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function Rp(t, e) {
  const i = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "").trim(), o = {
    PanoramaStickers: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return o[i] ? o[i] : i || (e === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Fp(t, e) {
  (Array.isArray(t == null ? void 0 : t.widgets) ? t.widgets : []).forEach((o) => {
    var d, h;
    const c = String((o == null ? void 0 : o.name) || "");
    (c === e || c.trim() === e || c.toLowerCase().includes(String(e).toLowerCase())) && (o.__panoHidden || (o.__panoHidden = !0, o.computeSize = () => [0, 0], o.type = "hidden", o.hidden = !0, o.options = { ...o.options || {}, hidden: !0 }, (d = o.inputEl) != null && d.style && (o.inputEl.style.display = "none"), (h = o.parentEl) != null && h.style && (o.parentEl.style.display = "none")));
  });
}
function vo(t, e, i) {
  var d, h;
  if (!t || typeof t.addWidget != "function") return null;
  let c = (Array.isArray(t.widgets) ? t.widgets : []).find((y) => String((y == null ? void 0 : y.name) || "") === String(e));
  return c ? (c.callback = i, c.hidden = !1, c.__panoHidden = !1, c.type = "button", (d = c.inputEl) != null && d.style && (c.inputEl.style.display = ""), (h = c.parentEl) != null && h.style && (c.parentEl.style.display = ""), (typeof c.computeSize != "function" || c.computeSize() == null || c.hidden) && (c.computeSize = () => {
    var y;
    return [Math.max(120, Number(((y = t == null ? void 0 : t.size) == null ? void 0 : y[0]) || 0) - 20), 30];
  }), c) : (c = t.addWidget("button", e, null, i), c && (c.serialize = !1), c);
}
function jr(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function wc(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const i = String(t ?? "").trim();
  if (!i) return e;
  const o = i.includes("x") ? i.split("x", 1)[0].trim() : i, c = Number(o);
  return Number.isFinite(c) ? Math.round(c) : e;
}
function nu(t, e) {
  if (!t || e == null) return null;
  const i = t.links;
  return i ? i instanceof Map ? i.get(e) || i.get(Number(e)) || i.get(String(e)) || null : i[e] || i[String(e)] || null : null;
}
function Op(t, e) {
  var i, o;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((i = t._nodes_by_id) == null ? void 0 : i[e]) || ((o = t._nodes_by_id) == null ? void 0 : o[String(e)]) || null;
}
function ru(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function $p(t, e, i = null) {
  var c, d;
  let o = null;
  try {
    o = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    o = null;
  }
  if ((c = o == null ? void 0 : o.isSubgraphNode) != null && c.call(o))
    try {
      const h = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, y = h ? (d = o.resolveSubgraphOutputLink) == null ? void 0 : d.call(o, Number(h.origin_slot ?? 0)) : null;
      y != null && y.outputNode && (o = y.outputNode);
    } catch {
    }
  return !o && i != null && (o = Op(t == null ? void 0 : t.graph, i)), o;
}
function sa(t) {
  var c;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const i = new URLSearchParams();
  i.set("filename", e), i.set("type", String(t.type || "output")), t.subfolder && i.set("subfolder", String(t.subfolder));
  const o = `/view?${i.toString()}`;
  return typeof ((c = we) == null ? void 0 : c.apiURL) == "function" ? we.apiURL(o) : o;
}
function zp(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Vp(t) {
  const i = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!i) return { filename: "", subfolder: "" };
  const o = i.split("/").filter(Boolean);
  if (!o.length) return { filename: "", subfolder: "" };
  const c = String(o.pop() || "").trim(), d = o.join("/");
  return { filename: c, subfolder: d };
}
function Hp(t) {
  const e = [], i = /* @__PURE__ */ new Set();
  return t.forEach((o) => {
    const c = String(o || "").trim();
    !c || i.has(c) || (i.add(c), e.push(c));
  }), e;
}
function iu(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (zp(e)) return [e];
  const { filename: i, subfolder: o } = Vp(e);
  if (!i) return [e];
  const c = ["temp", "output", "input"].map((d) => sa({
    filename: i,
    subfolder: o,
    type: d
  }));
  return Hp([...c, e]);
}
function Up(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const i = String(t.filename || "").trim();
    return i ? sa({
      filename: i,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function Jr(t) {
  var o;
  const e = (o = Pe) == null ? void 0 : o.nodeOutputs;
  if (!e || t == null) return null;
  const i = String(t);
  return e instanceof Map ? e.get(t) || e.get(i) || e.get(Number(i)) || null : e[t] || e[i] || null;
}
function yr(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return yr(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const i = String(t[1] || "").trim(), o = String(t[2] || "output").trim() || "output";
      return sa({ filename: e, subfolder: i, type: o });
    }
    for (const i of t) {
      const o = yr(i);
      if (o) return o;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : sa(t);
}
function Gp(t, e = -1) {
  var c;
  const i = [];
  Array.isArray(t == null ? void 0 : t.images) && t.images.length && i.push(t.images), Array.isArray((c = t == null ? void 0 : t.ui) == null ? void 0 : c.images) && t.ui.images.length && i.push(t.ui.images);
  const o = [];
  for (const d of i)
    !Array.isArray(d) || !d.length || (e >= 0 && e < d.length && o.push(d[e]), o.push(...d));
  return o;
}
function ao(t) {
  const e = [], i = /* @__PURE__ */ new Set();
  for (const o of t || []) {
    const c = yr(o);
    !c || i.has(c) || (i.add(c), e.push(c));
  }
  return e;
}
function jp(t, e, i, o = null) {
  var p;
  const c = Jr(t == null ? void 0 : t.id), d = Array.isArray((p = c == null ? void 0 : c.ui) == null ? void 0 : p[e]) ? c.ui[e] : Array.isArray(c == null ? void 0 : c[e]) ? c[e] : [], h = Array.isArray(d) && d.length ? d[0] : null, y = yr(h);
  if (!y) return null;
  const x = `__ui__${e}`, w = i.get(x);
  if (w && w.__panoSrc === y) return w;
  const P = new Image();
  return P.__panoSrc = y, P.onload = () => {
    typeof o == "function" && o(P);
  }, P.src = y, i.set(x, P), P;
}
function Bp(t, e) {
  var F, U;
  const i = String(e || "").trim();
  if (!i) return { src: "", sourceType: "", inputName: "" };
  const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], c = o.findIndex((S) => String((S == null ? void 0 : S.name) || "") === i);
  if (c < 0) return { src: "", sourceType: "", inputName: i };
  const d = o[c], h = d == null ? void 0 : d.link;
  if (h == null) return { src: "", sourceType: "", inputName: i };
  const y = nu(t.graph, h), { originId: x, originSlot: w } = ru(y);
  if (x == null) return { src: "", sourceType: "", inputName: i };
  const P = $p(t, c, x), p = Number(w || 0);
  if (!P) return { src: "", sourceType: "", inputName: i };
  let M = [];
  try {
    M = typeof ((F = Pe) == null ? void 0 : F.getNodeImageUrls) == "function" ? Pe.getNodeImageUrls(P) || [] : [];
  } catch {
    M = [];
  }
  if (Array.isArray(M) && M.length) {
    const S = [];
    p >= 0 && p < M.length && S.push(M[p]), S.push(...M);
    const K = ao(S);
    if (K.length) return { src: K[0], srcCandidates: K, sourceType: "appNodeImageUrls", inputName: i };
  }
  const k = Jr((P == null ? void 0 : P.id) ?? x), L = Gp(k, p), I = ao(L);
  if (I.length) return { src: I[0], srcCandidates: I, sourceType: "nodeOutputs", inputName: i };
  const R = Array.isArray(P == null ? void 0 : P.imgs) ? P.imgs : [];
  if (R.length) {
    const S = [];
    p >= 0 && p < R.length && S.push(R[p]), S.push(...R);
    const K = ao(S);
    if (K.length) return { src: K[0], srcCandidates: K, sourceType: "nodeImgs", inputName: i };
  }
  const T = (U = P == null ? void 0 : P.widgets) == null ? void 0 : U.find((S) => String((S == null ? void 0 : S.name) || "").toLowerCase() === "image");
  if (T) {
    let S = yr(T.value);
    if (S && !S.includes("/") && !S.includes(":") && (P.comfyClass === "LoadImage" || P.type === "LoadImage") && (S = we.apiURL(`/view?filename=${encodeURIComponent(S)}&type=input&subfolder=`)), S) return { src: S, sourceType: "widget", inputName: i };
  }
  return { src: "", sourceType: "", inputName: i };
}
function Kp(t, e, i, o = null) {
  const c = String(i || "").trim();
  if (!c) return null;
  const d = iu(c);
  if (!d.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const h = String(e || "image"), y = t.__panoLinkedInputImageCache.get(h);
  if (y && y.srcRaw === c && y.img) return y.img;
  const x = new Image(), w = { srcRaw: c, resolvedSrc: "", img: x };
  t.__panoLinkedInputImageCache.set(h, w);
  let P = -1;
  const p = () => {
    var k, L;
    if (P += 1, P >= d.length) {
      try {
        (L = (k = t.__panoLinkedInputImageCache) == null ? void 0 : k.delete) == null || L.call(k, h);
      } catch {
      }
      return;
    }
    const M = d[P];
    w.resolvedSrc = M, x.src = M;
  };
  return x.onload = () => {
    var M;
    o == null || o(), (M = t.setDirtyCanvas) == null || M.call(t, !0, !0);
  }, x.onerror = () => {
    var M, k;
    if (P + 1 < d.length) {
      p();
      return;
    }
    try {
      (k = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || k.call(M, h);
    } catch {
    }
  }, p(), x;
}
function Wp(t, e, i, o = null) {
  const c = Array.isArray(i) ? i.map((L) => String(L || "").trim()).filter(Boolean) : [];
  if (!c.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const d = String(e || "image"), h = c.join(`
`), y = t.__panoLinkedInputImageCache.get(d);
  if (y && y.srcRaw === h && y.img) return y.img;
  const x = [], w = /* @__PURE__ */ new Set();
  if (c.forEach((L) => {
    iu(L).forEach((I) => {
      const R = String(I || "").trim();
      !R || w.has(R) || (w.add(R), x.push(R));
    });
  }), !x.length) return null;
  const P = new Image(), p = { srcRaw: h, resolvedSrc: "", img: P };
  t.__panoLinkedInputImageCache.set(d, p);
  let M = -1;
  const k = () => {
    var I, R;
    if (M += 1, M >= x.length) {
      try {
        (R = (I = t.__panoLinkedInputImageCache) == null ? void 0 : I.delete) == null || R.call(I, d);
      } catch {
      }
      return;
    }
    const L = x[M];
    p.resolvedSrc = L, P.src = L;
  };
  return P.onload = () => {
    var L;
    o == null || o(), (L = t.setDirtyCanvas) == null || L.call(t, !0, !0);
  }, P.onerror = () => {
    var L, I;
    if (M + 1 < x.length) {
      k();
      return;
    }
    try {
      (I = (L = t.__panoLinkedInputImageCache) == null ? void 0 : L.delete) == null || I.call(L, d);
    } catch {
    }
  }, k(), P;
}
function au(t, e = []) {
  const i = Array.isArray(e) ? e : [e];
  for (const o of i) {
    const c = Bp(t, o);
    if (String((c == null ? void 0 : c.src) || "").trim()) return c;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function xc(t, e = [], i = null, o = "") {
  const c = Array.isArray(e) ? e : [e], d = au(t, c), h = String(o || c.join("|") || "image_exact"), y = Array.isArray(d == null ? void 0 : d.srcCandidates) ? d.srcCandidates : [];
  if (y.length) return Wp(t, h, y, i);
  const x = String((d == null ? void 0 : d.src) || "").trim();
  return x ? Kp(t, h, x, i) : null;
}
function Qr(t, e, i = {}) {
  var _i, Is, Es, wi, Ds, Ls, xi, Ts;
  const o = (i == null ? void 0 : i.readOnly) === !0, c = (i == null ? void 0 : i.hideSidebar) ?? o, d = o, h = Rp(t, e), y = `<span class="pano-side-title-icon" aria-hidden="true">${at.globe}</span><span>${Gr(h)}</span>`;
  Mp();
  const x = pr(t, "output_preset"), w = pr(t, "bg_color"), P = pr(t, go), p = Tp(
    String((P == null ? void 0 : P.value) || ""),
    wc(x == null ? void 0 : x.value, 2048),
    String((w == null ? void 0 : w.value) || "#00ff00")
  );
  t.__panoLiveStateOverride = JSON.stringify(p), (Is = (_i = t.__panoDomPreview) == null ? void 0 : _i.requestDraw) == null || Is.call(_i), (Es = t.setDirtyCanvas) == null || Es.call(t, !0, !0), (Ds = (wi = t.graph) == null ? void 0 : wi.setDirtyCanvas) == null || Ds.call(wi, !0, !0), (Ts = (xi = (Ls = Pe) == null ? void 0 : Ls.canvas) == null ? void 0 : xi.setDirty) == null || Ts.call(xi, !0, !0), e === "cutout" && (p.shots = Array.isArray(p.shots) ? p.shots.slice(0, 1) : [], p.shots.length || (p.active.selected_shot_id = null));
  const M = document.createElement("div");
  M.className = "pano-modal-overlay";
  const k = document.createElement("div");
  k.className = "pano-modal";
  const L = d ? `<button class="pano-btn pano-btn-icon" data-action="toggle-fullscreen" aria-label="Fullscreen" data-tip="Fullscreen">${at.fullscreen}</button>` : "";
  k.innerHTML = `
    <div class="pano-stage-wrap">
      <canvas class="pano-stage" width="1600" height="800"></canvas>
      <div class="pano-stage-drop-hint" aria-hidden="true">
        <div class="pano-stage-drop-hint-text">Drag and drop image here</div>
      </div>
      ${d ? "" : `
      <div class="pano-floating-left" data-tool-rail>
        <button class="pano-btn pano-btn-icon active" type="button" data-tool-mode="cursor" aria-label="Cursor" aria-pressed="true" data-tip="Cursor">${at.cursor_tool}</button>
        <button class="pano-btn pano-btn-icon" type="button" data-tool-mode="paint" aria-label="Paint" aria-pressed="false" data-tip="Paint">${at.palette_tool}</button>
        <button class="pano-btn pano-btn-icon" type="button" data-tool-mode="mask" aria-label="Mask" aria-pressed="false" data-tip="Mask">${at.circle_dashed_tool}</button>
        ${e === "cutout" ? `<button class="pano-btn pano-btn-icon" type="button" data-tool-ui-action="add-image" aria-label="Add Image" data-tip="Add image">${at.image}</button>
             <button class="pano-btn pano-btn-icon pano-btn-icon-accent" type="button" data-tool-ui-action="add-or-look" aria-label="Add Frame" data-tip="Add frame">${at.plus_circle}</button>` : `<button class="pano-btn pano-btn-icon pano-btn-icon-accent" type="button" data-tool-ui-action="add" aria-label="Add Image" data-tip="Add image">${at.image}</button>`}
        <button class="pano-btn pano-btn-icon" type="button" data-tool-ui-action="clear" aria-label="Clear All" data-tip="Clear all">${at.clear}</button>
        <button class="pano-btn pano-btn-icon" type="button" data-tool-ui-action="undo" aria-label="Undo" data-tip="Undo">${at.undo}</button>
        <button class="pano-btn pano-btn-icon" type="button" data-tool-ui-action="redo" aria-label="Redo" data-tip="Redo">${at.redo}</button>
      </div>
      <div class="pano-paint-dock is-hidden" data-paint-dock>
        <div class="pano-paint-pane" data-paint-pane="paint">
          <div class="pano-paint-color-float" data-paint-color-row hidden>
              ${Ki.map((n) => `<button class="pano-paint-color-dot" type="button" data-paint-color-swatch="${n.id}" aria-label="${n.label}" style="--swatch:${ze(n.color, 1)}"></button>`).join("")}
              <button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color"></button>
            <div class="pano-paint-color-pop" data-paint-color-pop hidden>
              <div class="pano-paint-color-pop-head">
                <span class="pano-paint-color-preview" data-paint-color-preview></span>
                <span class="pano-paint-color-pop-label">Custom Color</span>
              </div>
              <div class="pano-paint-color-field">
                <div class="pano-paint-sv-panel" data-paint-color-sv>
                  <div class="pano-paint-sv-cursor" data-paint-color-sv-cursor></div>
                </div>
                <div class="pano-paint-hue-strip" data-paint-hue-strip>
                  <div class="pano-paint-hue-handle" data-paint-hue-handle></div>
                </div>
              </div>
              <label class="pano-paint-color-field">
                <span>Opacity</span>
                <div class="pano-paint-alpha-wrap">
                  <input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider>
                  <span data-paint-alpha-value>100%</span>
                </div>
              </label>
              <div class="pano-paint-color-history" data-paint-color-history-wrap>
                <div class="pano-paint-color-history-list" data-paint-color-history></div>
              </div>
            </div>
          </div>
          <div class="pano-paint-footer" data-paint-footer="paint">
            <div class="pano-paint-footer-group" data-paint-group="paint">
              <button class="pano-btn pano-btn-icon" type="button" data-paint-tool="pen" aria-label="Pen" data-tip="Pen">${at.pencil_tool}</button>
              <button class="pano-btn pano-btn-icon" type="button" data-paint-tool="brush" aria-label="Soft Brush" data-tip="Soft Brush">${at.spray_can_tool}</button>
              <button class="pano-btn pano-btn-icon" type="button" data-paint-tool="marker" aria-label="Marker" data-tip="Marker">${at.highlighter_tool}</button>
              <button class="pano-btn pano-btn-icon" type="button" data-paint-tool="crayon" aria-label="Pastel" data-tip="Pastel">${at.paintbrush_vertical_tool}</button>
              <button class="pano-btn pano-btn-icon" type="button" data-paint-tool="eraser" aria-label="Eraser" data-tip="Eraser">${at.eraser_tool}</button>
              <button class="pano-btn pano-btn-icon" type="button" data-paint-tool="lasso_fill" aria-label="Lasso" data-tip="Lasso">${at.lasso_tool}</button>
            </div>
            <div class="pano-paint-size-row" data-paint-size-row hidden>
              <input class="pano-paint-size-slider" data-paint-size-slider type="range" min="1" max="120" step="1" value="10">
              <span class="pano-paint-size-value" data-paint-size-value>10</span>
            </div>
            <div class="pano-paint-clear-row" data-paint-clear-row hidden>
              <button class="pano-btn pano-btn-icon pano-paint-layer-clear" type="button" data-paint-layer-clear-current="paint" aria-label="Clear paint" data-tip="Clear paint">${at.clear}</button>
            </div>
          </div>
        </div>
        <div class="pano-paint-pane" data-paint-pane="mask">
          <div class="pano-paint-footer" data-paint-footer="mask">
            <div class="pano-paint-footer-group" data-paint-group="mask">
              <button class="pano-btn pano-btn-icon" type="button" data-mask-tool="pen" aria-label="Mask Pen" data-tip="Mask pen">${at.pencil_tool}</button>
              <button class="pano-btn pano-btn-icon" type="button" data-mask-tool="eraser" aria-label="Mask Eraser" data-tip="Mask eraser">${at.eraser_tool}</button>
              <button class="pano-btn pano-btn-icon" type="button" data-mask-tool="lasso_fill" aria-label="Mask Lasso" data-tip="Mask lasso">${at.lasso_tool}</button>
            </div>
            <div class="pano-paint-size-row" data-paint-size-row hidden>
              <input class="pano-paint-size-slider" data-paint-size-slider type="range" min="1" max="120" step="1" value="10">
              <span class="pano-paint-size-value" data-paint-size-value>10</span>
            </div>
            <div class="pano-paint-clear-row" data-paint-clear-row>
              <button class="pano-btn pano-btn-icon pano-paint-layer-clear" type="button" data-paint-layer-clear-current="mask" aria-label="Clear mask" data-tip="Clear mask">${at.clear}</button>
            </div>
          </div>
        </div>
      </div>`}
      <div class="pano-floating-top">
        <div class="pano-view-toggle" data-selected="pano" data-view-count="${e === "cutout" ? "3" : "2"}">
          <button class="pano-view-btn" data-view="pano" aria-pressed="true" aria-label="Panorama">${at.pano}<span class="label">Panorama</span></button>
          <button class="pano-view-btn" data-view="unwrap" aria-pressed="false" aria-label="Unwrap">${at.unwrap}<span class="label">Unwrap</span></button>
          ${e === "cutout" ? `<button class="pano-view-btn pano-view-btn-icon" data-view="frame" aria-pressed="false" aria-label="Frame">${at.camera}<span>Frame</span></button>` : ""}
        </div>
      </div>
      <div class="pano-floating-right">
        <span class="pano-fov-value" data-fov-value aria-label="Field of view">100°</span>
        <button class="pano-btn pano-btn-icon" data-action="reset-view" aria-label="Reset View" data-tip="Reset view">${at.reset}</button>
        <button class="pano-btn pano-btn-icon" data-action="toggle-grid" aria-label="Hide Grid" data-tip="Hide grid" aria-pressed="true">${at.eye}</button>
        ${L}
      </div>
      <div class="pano-selection-menu" data-selection-menu>
      </div>
      <button class="pano-btn pano-btn-icon pano-output-preview-toggle" data-action="toggle-output-preview-size" aria-label="Expand Preview" data-tip="Expand preview" style="display:none">${at.fullscreen}</button>
      <div class="pano-tooltip" data-tooltip></div>
    </div>
    <div class="pano-side" data-side>
      <div class="pano-side-head">
        <div class="pano-side-title">${y}</div>
        <div class="pano-side-actions"></div>
      </div>
      <div class="pano-divider"></div>
    </div>
  `, M.appendChild(k), document.body.appendChild(M);
  const I = k.querySelector("canvas"), R = k.querySelector(".pano-stage-wrap"), T = document.createElement("div");
  T.setAttribute("aria-hidden", "true"), T.style.position = "absolute", T.style.left = "0", T.style.top = "0", T.style.pointerEvents = "none", T.style.zIndex = "12", T.style.display = "none", T.style.willChange = "transform,width,height,background,border-radius", R == null || R.appendChild(T);
  const F = document.createElement("div");
  F.className = "pano-paint-size-preview", F.setAttribute("aria-hidden", "true");
  const U = document.createElement("div");
  U.className = "pano-paint-size-preview-sample", F.appendChild(U), R == null || R.appendChild(F);
  const S = I.getContext("2d"), K = k.querySelector("[data-side]"), q = k.querySelectorAll("[data-view]"), ct = k.querySelector(".pano-view-toggle"), Z = k.querySelector("[data-fov-value]"), G = k.querySelector("[data-selection-menu]"), D = k.querySelector("[data-action='toggle-output-preview-size']"), X = k.querySelector("[data-tool-ui-action='add-or-look']"), ot = k.querySelector("[data-view='frame']"), rt = k.querySelector("[data-action='toggle-fullscreen']"), j = k.querySelector("[data-tooltip]"), z = k.querySelector("[data-tool-rail]"), ut = k.querySelector("[data-paint-dock]"), lt = Array.from(k.querySelectorAll("[data-paint-pane]")), ht = k.querySelector("[data-paint-color-row]"), ft = k.querySelector("[data-paint-color-pop]"), Mt = k.querySelector("[data-paint-color-preview]"), W = k.querySelector("[data-paint-color-sv]"), gt = k.querySelector("[data-paint-color-sv-cursor]"), Et = k.querySelector("[data-paint-hue-strip]"), ee = k.querySelector("[data-paint-hue-handle]"), $ = k.querySelector("[data-paint-alpha-slider]"), mt = k.querySelector("[data-paint-alpha-value]"), pt = k.querySelector("[data-paint-color-history-wrap]"), St = k.querySelector("[data-paint-color-history]"), Pt = Array.from(k.querySelectorAll("[data-paint-size-row]")), It = Array.from(k.querySelectorAll("[data-paint-clear-row]")), Ct = Array.from(k.querySelectorAll("[data-paint-layer-clear-current]")), Bt = Array.from(k.querySelectorAll("[data-paint-size-slider]")), Vt = Array.from(k.querySelectorAll("[data-paint-size-value]"));
  let Lt = 0, Ht = 0;
  e === "cutout" && (I.style.opacity = "0"), c && (K == null || K.remove(), k.classList.add("pano-modal-readonly"));
  function Tt(n) {
    ut && ut.classList.toggle("is-hidden", !n);
  }
  const se = () => {
    if (!l.customPaintSessionStart) return;
    if (Wi(l.customPaintSessionStart, l.customPaintColor)) {
      l.customPaintSessionStart = null;
      return;
    }
    if (xp(l.customPaintColor)) {
      l.customPaintSessionStart = null;
      return;
    }
    const n = [
      ke(l.customPaintColor),
      ...l.customPaintHistory.filter((r) => !Wi(r, l.customPaintColor))
    ];
    l.customPaintHistory = n.slice(0, 8), l.customPaintSessionStart = null;
  }, la = (n = !1) => {
    !ft || ft.hidden || (n ? se() : l.customPaintSessionStart = null, ft.hidden = !0);
  }, ou = () => {
    ft && (ft.hidden && (l.customPaintSessionStart = ke(l.customPaintColor)), ft.hidden = !1);
  };
  k.addEventListener("pointerdown", (n) => {
    yi(), !n.target.closest(".pano-picker") && (n.target.closest("[data-paint-color-row]") || (k.querySelectorAll(".pano-picker-pop").forEach((r) => {
      r.hidden = !0;
    }), la(!0), e === "cutout" && l.cutoutAspectOpen && !n.target.closest(".pano-aspect-popover") && !n.target.closest("[data-action='aspect']") && (l.cutoutAspectOpen = !1, l.menuMode = "", l.menuSize.measured = !1, Dt(), Q())));
  });
  const su = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, cu = JSON.stringify(_c(p)), l = {
    mode: "pano",
    selectedId: su,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    historyController: ip(80, { entries: [cu], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: sn,
    paintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintColor: { r: 0, g: 1, b: 0, a: 1 },
    customPaintHistory: [],
    customPaintSessionStart: null,
    pointerPos: { x: 0, y: 0, inside: !1 },
    interaction: null,
    hqFrames: 0,
    viewInertia: { vx: 0, vy: 0, active: !1 },
    menuSize: { w: 220, h: 40, measured: !1 },
    menuMode: "",
    cutoutAspectOpen: !1,
    showGrid: Cp(t == null ? void 0 : t.id, !0),
    showPanorama: !0,
    showObjects: !0,
    showMask: !0,
    outputPreviewExpanded: !1,
    outputPreviewAnim: 0,
    outputPreviewAnimFrom: 0,
    outputPreviewAnimTo: 0,
    outputPreviewAnimStartTs: 0,
    outputPreviewAnimDurationMs: 180,
    outputPreviewRect: null,
    frameView: { zoom: 1, panX: 0, panY: 0 },
    paintEngine: oo(),
    paintEngineDescriptorKey: "",
    paintEngineRevisionKey: "",
    paintStrokeRevision: 0,
    paintCompositeRevision: 0,
    objectVisualRevision: 0,
    livePaintInteractionRevision: 0,
    cutoutPreviewSurfaceRaf: 0,
    cutoutPreviewSurfaceTimer: 0,
    cutoutPreviewSurfaceLastTs: 0,
    selectedIds: [],
    _sortedItemsCache: null,
    _strokeGeomCache: /* @__PURE__ */ new Map(),
    _strokeRasterBoundsCache: /* @__PURE__ */ new Map(),
    marqueeModifier: !1,
    panelLastValues: null,
    panelWasEnabled: !1,
    viewTween: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null
  };
  e === "stickers" && (l.selectedId = null, p.active.selected_sticker_id = null), l.selectedIds = l.selectedId ? [l.selectedId] : [];
  const He = /* @__PURE__ */ new Map(), Mo = /* @__PURE__ */ new Map(), da = /* @__PURE__ */ new Map(), ei = /* @__PURE__ */ new Map(), Ot = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: e === "cutout" ? 2 : 0,
    hasPresentedFrame: e !== "cutout"
  }, Ce = {
    timer: 0,
    target: null
  }, Ae = {
    active: !1,
    depth: 0
  };
  function fa(n) {
    const r = n == null ? void 0 : n.dataTransfer;
    if (!r) return !1;
    if (r.items && r.items.length) {
      for (const a of r.items) {
        if (!a || a.kind !== "file") continue;
        const s = String(a.type || "").toLowerCase();
        if (!s || s.startsWith("image/")) return !0;
      }
      return !1;
    }
    return r.files && r.files.length ? Array.from(r.files).some((a) => hi(a)) : !1;
  }
  function Nn(n) {
    const r = !!n;
    Ae.active !== r && (Ae.active = r, R.classList.toggle("drop-active", r));
  }
  function pa(n, r, a = l.viewFov, s = 140, u = 620) {
    const f = Hd(l.viewYaw, n), b = r - l.viewPitch, m = a - l.viewFov, g = Math.hypot(f, b) + Math.abs(m) * 0.6, _ = Math.round(O(s + g * 2.2, s, u));
    l.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: _,
      startYaw: l.viewYaw,
      startPitch: l.viewPitch,
      startFov: l.viewFov,
      targetPitch: r,
      targetFov: a,
      deltaYaw: f
    }, l.viewInertia.active = !1, l.viewInertia.vx = 0, l.viewInertia.vy = 0, Q();
  }
  Ou();
  function un() {
    return e === "stickers" ? p.stickers : p.shots;
  }
  function he() {
    const n = p.painting || (p.painting = Xr(null));
    return Array.isArray(n.groups) || (n.groups = []), n.groups;
  }
  function uu(n = "paint") {
    var u, f;
    const r = Array.isArray((f = (u = p.painting) == null ? void 0 : u[n]) == null ? void 0 : f.strokes) ? p.painting[n].strokes : [], a = [], s = /* @__PURE__ */ new Set();
    for (const b of r) {
      const m = String((b == null ? void 0 : b.actionGroupId) || "").trim();
      !m || s.has(m) || (s.add(m), a.push(m));
    }
    return a;
  }
  function lu() {
    return uu("paint");
  }
  function vr(n, r) {
    const a = String(r || "").trim();
    return a ? `${n === "mask" ? "mask" : "paint"}:${a}` : "";
  }
  function _r(n) {
    const r = String(n || "").trim();
    return r ? `raster:${r}` : "";
  }
  function ge(n) {
    const r = String(n || "").trim();
    if (!r) return "";
    const a = r.match(/^raster:(.*)$/);
    return String(a ? a[1] || "" : r).trim();
  }
  function wr(n, r = null) {
    const a = String(n || "").trim();
    if (!a) return { layerKind: "paint", actionGroupId: "" };
    const s = a.match(/^(paint|mask):(.*)$/);
    return s ? { layerKind: s[1] === "mask" ? "mask" : "paint", actionGroupId: String(s[2] || "").trim() } : { layerKind: r === "mask" ? "mask" : "paint", actionGroupId: a };
  }
  function ha() {
    var r;
    let n = -1;
    for (const a of Array.isArray(p.stickers) ? p.stickers : [])
      n = Math.max(n, Number((a == null ? void 0 : a.z_index) || 0));
    for (const a of he())
      n = Math.max(n, Number((a == null ? void 0 : a.z_index) || 0));
    for (const a of Array.isArray((r = p.painting) == null ? void 0 : r.raster_objects) ? p.painting.raster_objects : [])
      String((a == null ? void 0 : a.layerKind) || "paint") === "paint" && (n = Math.max(n, Number((a == null ? void 0 : a.z_index) || 0)));
    return n + 1;
  }
  function ko(n, r = null) {
    const a = String(n || "").trim();
    if (!a) return null;
    const s = he();
    let u = s.find((f) => String((f == null ? void 0 : f.actionGroupId) || "") === a);
    return u ? r != null && (u.z_index = Math.max(0, Number(r || 0))) : (u = {
      id: a,
      type: "strokeGroup",
      actionGroupId: a,
      z_index: r == null ? ha() : Math.max(0, Number(r || 0)),
      locked: !1,
      frame: null
    }, s.push(u)), u;
  }
  function du() {
    const n = new Set(lu()), a = he().filter((s) => n.has(String((s == null ? void 0 : s.actionGroupId) || "")));
    return n.forEach((s) => {
      a.some((u) => String((u == null ? void 0 : u.actionGroupId) || "") === s) || a.push({
        id: s,
        type: "strokeGroup",
        actionGroupId: s,
        z_index: ha(),
        locked: !1,
        frame: null
      });
    }), a.sort((s, u) => Number((s == null ? void 0 : s.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)), p.painting.groups = a, a;
  }
  function fu(n, r, a) {
    const s = [];
    for (const A of a) {
      const E = A == null ? void 0 : A.geometry, H = (E == null ? void 0 : E.geometryKind) === "lasso_fill" ? E == null ? void 0 : E.points : (E == null ? void 0 : E.processedPoints) || (E == null ? void 0 : E.rawPoints) || (E == null ? void 0 : E.points) || [];
      Array.isArray(H) && s.push(...H);
    }
    if (!s.length) return null;
    let u = 0, f = 0;
    s.forEach((A) => {
      u += Number((A == null ? void 0 : A.u) || 0), f += Number((A == null ? void 0 : A.v) || 0);
    });
    const b = u / s.length;
    let m = 1 / 0, g = -1 / 0, _ = 1 / 0, v = -1 / 0;
    s.forEach((A) => {
      const E = Nr(Number((A == null ? void 0 : A.u) || 0), b);
      m = Math.min(m, E), g = Math.max(g, E);
      const H = Number((A == null ? void 0 : A.v) || 0);
      _ = Math.min(_, H), v = Math.max(v, H);
    });
    const N = a.reduce((A, E) => {
      const H = gn(String((E == null ? void 0 : E.toolKind) || "pen")), B = xe[H] || xe[sn], nt = Math.max(1, Number((E == null ? void 0 : E.size) || 10)) * Math.max(0.1, Number((B == null ? void 0 : B.sizeScale) ?? 1));
      return Math.max(A, nt);
    }, 0), C = Math.max(35e-4, N / 2048);
    return {
      centerUv: { u: ((b + (m + g) * 0.5) % 1 + 1) % 1, v: O((_ + v) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (g - m) * 0.5 + C,
      halfH: (v - _) * 0.5 + C,
      uvPad: C
    };
  }
  function Mn(n, r, a) {
    const s = String(n || "").trim();
    if (!s) return null;
    const u = he().find((f) => String((f == null ? void 0 : f.actionGroupId) || "") === s);
    if (!u) return null;
    if (!u.frame) {
      const f = a || Ee(s, r);
      u.frame = fu(s, r, f);
    }
    return u.frame;
  }
  function kn() {
    var s;
    const n = (Array.isArray(p.stickers) ? p.stickers : []).map((u) => ({
      type: "sticker",
      id: String((u == null ? void 0 : u.id) || ""),
      z_index: Number((u == null ? void 0 : u.z_index) || 0),
      item: u
    })), r = du().map((u) => ({
      type: "strokeGroup",
      id: String((u == null ? void 0 : u.id) || (u == null ? void 0 : u.actionGroupId) || ""),
      actionGroupId: String((u == null ? void 0 : u.actionGroupId) || ""),
      z_index: Number((u == null ? void 0 : u.z_index) || 0),
      item: u
    })), a = (Array.isArray((s = p.painting) == null ? void 0 : s.raster_objects) ? p.painting.raster_objects : []).filter((u) => String((u == null ? void 0 : u.layerKind) || "paint") === "paint").map((u) => ({
      type: "rasterObject",
      id: String((u == null ? void 0 : u.id) || ""),
      z_index: Number((u == null ? void 0 : u.z_index) || 0),
      item: u
    }));
    return [...n, ...r, ...a].sort((u, f) => Number(u.z_index || 0) - Number(f.z_index || 0));
  }
  function xr(n = !0) {
    var a, s, u, f, b, m;
    const r = kn().filter((g) => g.type === "strokeGroup").map((g) => String(g.actionGroupId || "")).filter((g) => !!g);
    if (n) {
      const g = String(((s = (a = l.interaction) == null ? void 0 : a.stroke) == null ? void 0 : s.actionGroupId) || "").trim(), _ = String(((f = (u = l.interaction) == null ? void 0 : u.stroke) == null ? void 0 : f.layerKind) || "").trim(), v = String(((m = (b = l.interaction) == null ? void 0 : b.stroke) == null ? void 0 : m.toolKind) || "").trim();
      g && _ === "paint" && v !== "eraser" && !r.includes(g) && r.push(g);
    }
    return r;
  }
  function ma(n = !0) {
    var m, g, _, v, N, C;
    const r = kn();
    if (!n) return r;
    const a = String(((g = (m = l.interaction) == null ? void 0 : m.stroke) == null ? void 0 : g.actionGroupId) || "").trim(), s = String(((v = (_ = l.interaction) == null ? void 0 : _.stroke) == null ? void 0 : v.layerKind) || "").trim(), u = String(((C = (N = l.interaction) == null ? void 0 : N.stroke) == null ? void 0 : C.toolKind) || "").trim();
    if (!a || s !== "paint" || u === "eraser" || r.some((A) => A.type === "strokeGroup" && String(A.actionGroupId || "") === a))
      return r;
    const f = Jt();
    let b = r.reduce((A, E) => Math.max(A, Number((E == null ? void 0 : E.z_index) || 0)), -1) + 1;
    return f && oe(f) && String(f.actionGroupId || "") === a && (b = Number(f.z_index || 0)), [
      ...r,
      {
        type: "strokeGroup",
        id: a,
        actionGroupId: a,
        z_index: b,
        item: null
      }
    ].sort((A, E) => Number((A == null ? void 0 : A.z_index) || 0) - Number((E == null ? void 0 : E.z_index) || 0));
  }
  function pu() {
    return he().slice().sort((n, r) => Number((n == null ? void 0 : n.z_index) || 0) - Number((r == null ? void 0 : r.z_index) || 0)).map((n) => jn(vr("paint", (n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || ""))).filter(Boolean);
  }
  function hu() {
    var n;
    return (Array.isArray((n = p.painting) == null ? void 0 : n.raster_objects) ? p.painting.raster_objects : []).filter((r) => String((r == null ? void 0 : r.layerKind) || "paint") === "paint").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => Gn(_r((r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function ni(n = l.interaction) {
    const r = String((n == null ? void 0 : n.kind) || "");
    if (r === "paint_stroke" || r === "paint_lasso_fill" || r === "move_stroke_group" || r === "scale_stroke_group" || r === "rotate_stroke_group" || r === "move_raster_object") return !0;
    if (r === "move_multi") {
      const a = Array.isArray(n == null ? void 0 : n.strokeSnapshots) && n.strokeSnapshots.length > 0, s = Array.isArray(n == null ? void 0 : n.rasterSnapshots) && n.rasterSnapshots.length > 0;
      return a || s;
    }
    return !1;
  }
  function Po(n = l.interaction) {
    if (e !== "cutout") return !1;
    const r = String((n == null ? void 0 : n.kind) || "");
    return ni(n) || r === "move" || r === "scale" || r === "scale_x" || r === "scale_y" || r === "rotate" ? !0 : r === "move_multi" ? Array.isArray(n == null ? void 0 : n.stickerSnapshots) && n.stickerSnapshots.length > 0 : !1;
  }
  function mu(n = l.interaction) {
    if (!Po(n)) return 0;
    const r = String((n == null ? void 0 : n.kind) || "");
    return r === "paint_stroke" || r === "paint_lasso_fill" ? 120 : 33;
  }
  function Sr() {
    var u, f, b, m, g, _, v;
    const n = l.interaction, r = String((n == null ? void 0 : n.kind) || "");
    if (!ni(n)) return "";
    if (r === "paint_stroke" || r === "paint_lasso_fill") {
      const N = ((u = n == null ? void 0 : n.stroke) == null ? void 0 : u.geometry) || null, C = String(((f = n == null ? void 0 : n.stroke) == null ? void 0 : f.layerKind) || ""), A = ((b = N == null ? void 0 : N.rawPoints) == null ? void 0 : b.length) ?? ((m = N == null ? void 0 : N.points) == null ? void 0 : m.length) ?? 0, E = String((n == null ? void 0 : n._livePreviewToken) || "");
      return `_${C || "paint"}_${r}_live${E}_${A}_${l.livePaintInteractionRevision}`;
    }
    const a = String(((g = n == null ? void 0 : n.item) == null ? void 0 : g.actionGroupId) || ""), s = String(((_ = n == null ? void 0 : n.item) == null ? void 0 : _.rasterObjectId) || ((v = n == null ? void 0 : n.item) == null ? void 0 : v.id) || "");
    return `_${r}_${a || s || "active"}_${l.livePaintInteractionRevision}`;
  }
  function ga() {
    return [
      ...Array.isArray(p.stickers) ? p.stickers : [],
      ...Array.isArray(p.shots) ? p.shots : []
    ];
  }
  function Ie(n) {
    return !!n && Array.isArray(p.shots) && p.shots.includes(n);
  }
  function ue(n) {
    return !!n && Array.isArray(p.stickers) && p.stickers.includes(n);
  }
  function Ne() {
    var n;
    return Array.isArray((n = p.painting) == null ? void 0 : n.raster_objects) ? p.painting.raster_objects : [];
  }
  function Gn(n) {
    const r = ge(n);
    if (!r) return null;
    const a = Ne().find((s) => String((s == null ? void 0 : s.id) || "").trim() === r);
    return !a || String((a == null ? void 0 : a.layerKind) || "paint") !== "paint" ? null : {
      ...a,
      id: _r(r),
      type: "rasterObject",
      rasterObjectId: r
    };
  }
  function ye(n) {
    if (!n || typeof n != "object" || String(n.type || "") !== "rasterObject") return !1;
    const r = ge(n.rasterObjectId || n.id || "");
    return !!r && !!Gn(_r(r));
  }
  function jn(n) {
    const r = wr(n), a = String(r.actionGroupId || "").trim();
    if (!a) return null;
    const s = he().find((u) => String((u == null ? void 0 : u.id) || (u == null ? void 0 : u.actionGroupId) || "") === a || String((u == null ? void 0 : u.actionGroupId) || "") === a);
    return s ? {
      ...s,
      id: vr("paint", a),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: a
    } : null;
  }
  function oe(n) {
    if (!n || typeof n != "object" || String(n.type || "") !== "strokeGroup") return !1;
    const r = String(n.actionGroupId || "").trim(), a = String(n.layerKind || "paint").trim() || "paint";
    return !!r && !!jn(vr(a, r));
  }
  function Ee(n, r = null) {
    const a = wr(n, r), s = String(a.actionGroupId || "").trim();
    return s ? Jn(a.layerKind).filter((u) => String((u == null ? void 0 : u.actionGroupId) || "").trim() === s) : [];
  }
  function gu(n, r = "paint") {
    var f, b, m;
    const a = String(n || "").trim(), u = `${String(r || "paint").trim() || "paint"}:${a}:${l.mode}:${An()}`;
    if (l.mode === "frame") {
      const g = Ut(), _ = String((g == null ? void 0 : g.id) || ""), v = g ? ve(g) : null;
      return `${u}:frame:${_}:${Math.round(Number((v == null ? void 0 : v.x) || 0))}:${Math.round(Number((v == null ? void 0 : v.y) || 0))}:${Math.round(Number((v == null ? void 0 : v.w) || 0))}:${Math.round(Number((v == null ? void 0 : v.h) || 0))}:${Math.round(Number(((f = l.frameView) == null ? void 0 : f.zoom) || 1) * 1e3)}:${Math.round(Number(((b = l.frameView) == null ? void 0 : b.panX) || 0))}:${Math.round(Number(((m = l.frameView) == null ? void 0 : m.panY) || 0))}`;
    }
    return `${u}:view:${Math.round(Number(l.viewYaw || 0) * 100)}:${Math.round(Number(l.viewPitch || 0) * 100)}:${Math.round(Number(l.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function ri(n, r, a) {
    return !n || typeof n != "object" ? n : {
      ...n,
      u: ((Number(n.u || 0) + Number(r || 0)) % 1 + 1) % 1,
      v: O(Number(n.v || 0) + Number(a || 0), 0, 1)
    };
  }
  function Nr(n, r) {
    let a = Number(n || 0) - Number(r || 0);
    for (; a > 0.5; ) a -= 1;
    for (; a < -0.5; ) a += 1;
    return a;
  }
  function Co(n, r = null, a = null) {
    var _;
    const s = wr(n, r), u = Array.isArray(a) ? a : Ee(s.actionGroupId, s.layerKind), f = [];
    if (u.forEach((v) => {
      const N = (v == null ? void 0 : v.geometry) || null, C = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
      Array.isArray(C) && f.push(...C);
    }), !f.length) return { u: 0.5, v: 0.5 };
    const b = Number(((_ = f[0]) == null ? void 0 : _.u) || 0);
    let m = 0, g = 0;
    return f.forEach((v) => {
      m += b + Nr(Number((v == null ? void 0 : v.u) || 0), b), g += Number((v == null ? void 0 : v.v) || 0);
    }), {
      u: (m / f.length % 1 + 1) % 1,
      v: O(g / f.length, 0, 1)
    };
  }
  function ii(n, r, a = 1, s = 0) {
    if (!n || typeof n != "object") return n;
    const u = Number((r == null ? void 0 : r.u) || 0), f = Number((r == null ? void 0 : r.v) || 0), b = Nr(Number(n.u || 0), u), m = Number(n.v || 0) - f, g = Number(s || 0) * fe, _ = Math.cos(g), v = Math.sin(g), N = Math.max(0.02, Number(a || 1)), C = (b * _ - m * v) * N, A = (b * v + m * _) * N;
    return {
      ...n,
      u: ((u + C) % 1 + 1) % 1,
      v: O(f + A, 0, 1)
    };
  }
  function Ao(n, r, a, s = null, u = null, f = null) {
    const b = wr(n, u), m = String(b.actionGroupId || "").trim();
    if (!m) return !1;
    const g = Jn(b.layerKind), _ = Array.isArray(s) ? new Map(s.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let v = !1;
    if (g.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== m) return;
      const C = (_ == null ? void 0 : _.get(String((N == null ? void 0 : N.id) || ""))) || N, A = N == null ? void 0 : N.geometry, E = C == null ? void 0 : C.geometry;
      !A || !E || (Array.isArray(E.points) && (A.points = E.points.map((H) => ri(H, r, a)), v = !0), Array.isArray(E.rawPoints) && (A.rawPoints = E.rawPoints.map((H) => ri(H, r, a)), v = !0), Array.isArray(E.processedPoints) && (A.processedPoints = E.processedPoints.map((H) => ri(H, r, a)), v = !0));
    }), v && f) {
      const N = he().find((C) => String((C == null ? void 0 : C.actionGroupId) || "") === m);
      N && (N.frame = {
        ...f,
        centerUv: {
          u: ((f.centerUv.u + r) % 1 + 1) % 1,
          v: O(f.centerUv.v + a, 0, 1)
        }
      });
    }
    return v;
  }
  function Io(n, r = 1, a = 0, s = null, u = null, f = null) {
    const b = wr(n, u), m = String(b.actionGroupId || "").trim();
    if (!m) return !1;
    const g = Jn(b.layerKind), _ = Array.isArray(s) ? s : Ee(m, b.layerKind), v = Array.isArray(_) ? new Map(_.map((A) => [String((A == null ? void 0 : A.id) || ""), A])) : null, N = (f == null ? void 0 : f.centerUv) ?? Co(m, b.layerKind, _);
    let C = !1;
    if (g.forEach((A) => {
      if (String((A == null ? void 0 : A.actionGroupId) || "").trim() !== m) return;
      const E = (v == null ? void 0 : v.get(String((A == null ? void 0 : A.id) || ""))) || A, H = A == null ? void 0 : A.geometry, B = E == null ? void 0 : E.geometry;
      !H || !B || (Array.isArray(B.points) && (H.points = B.points.map((nt) => ii(nt, N, r, a)), C = !0), Array.isArray(B.rawPoints) && (H.rawPoints = B.rawPoints.map((nt) => ii(nt, N, r, a)), C = !0), Array.isArray(B.processedPoints) && (H.processedPoints = B.processedPoints.map((nt) => ii(nt, N, r, a)), C = !0));
    }), C && f) {
      const A = Number(r || 1), E = he().find((H) => String((H == null ? void 0 : H.actionGroupId) || "") === m);
      E && (E.frame = {
        centerUv: f.centerUv,
        rot_deg: Number(f.rot_deg || 0) + Number(a || 0),
        halfW: f.halfW * A,
        halfH: f.halfH * A,
        uvPad: f.uvPad
      });
    }
    return C;
  }
  function Eo(n, r, a, s = null) {
    const u = ge(n);
    if (!u) return !1;
    const f = Ne().find((v) => String((v == null ? void 0 : v.id) || "").trim() === u);
    if (!f) return !1;
    const b = s && typeof s == "object" ? s : f, m = (b == null ? void 0 : b.transform) || {}, g = Number(m.du || 0) + Number(r || 0), _ = O(Number(m.dv || 0) + Number(a || 0), -1, 1);
    return f.transform || (f.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), f.transform.du = g, f.transform.dv = _, !0;
  }
  function Jt() {
    const n = String(l.selectedId || "");
    if (!n) return null;
    const r = jn(n);
    if (r) return r;
    const a = Gn(n);
    return a || (e === "cutout" ? ga().find((s) => String((s == null ? void 0 : s.id) || "") === n) || null : un().find((s) => String((s == null ? void 0 : s.id) || "") === n) || null);
  }
  function Ue() {
    const n = Array.isArray(l.selectedIds) && l.selectedIds.length ? l.selectedIds : l.selectedId ? [l.selectedId] : [], r = [], a = /* @__PURE__ */ new Set();
    return n.forEach((s) => {
      const u = String(s || "").trim();
      if (!u || a.has(u)) return;
      a.add(u);
      const f = u === String(l.selectedId || "") ? Jt() : jn(u) || Gn(u) || (e === "cutout" ? ga().find((b) => String((b == null ? void 0 : b.id) || "") === u) : un().find((b) => String((b == null ? void 0 : b.id) || "") === u));
      f && r.push(f);
    }), r;
  }
  function ya(n = null) {
    const r = Array.isArray(n) ? n : Ue();
    if (!r || r.length < 2) return null;
    const a = r.map((_) => le(_)).filter((_) => (_ == null ? void 0 : _.visible) && Array.isArray(_.corners) && _.corners.length);
    if (!a.length) return null;
    const s = a.flatMap((_) => _.corners.map((v) => Number((v == null ? void 0 : v.x) || 0))), u = a.flatMap((_) => _.corners.map((v) => Number((v == null ? void 0 : v.y) || 0))), f = Math.min(...s), b = Math.max(...s), m = Math.min(...u), g = Math.max(...u);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (f + b) * 0.5, y: (m + g) * 0.5 },
      corners: [
        { x: f, y: m },
        { x: b, y: m },
        { x: b, y: g },
        { x: f, y: g }
      ],
      edgeMidpoints: [
        { edge: "top", x: (f + b) * 0.5, y: m, a: { x: f, y: m }, b: { x: b, y: m } },
        { edge: "right", x: b, y: (m + g) * 0.5, a: { x: b, y: m }, b: { x: b, y: g } },
        { edge: "bottom", x: (f + b) * 0.5, y: g, a: { x: b, y: g }, b: { x: f, y: g } },
        { edge: "left", x: f, y: (m + g) * 0.5, a: { x: f, y: g }, b: { x: f, y: m } }
      ],
      rotateStemBase: { x: (f + b) * 0.5, y: m },
      rotateHandle: { x: (f + b) * 0.5, y: m - 30 }
    };
  }
  function yu(n) {
    const r = String((n == null ? void 0 : n.id) || "").trim();
    return !!r && Array.isArray(l.selectedIds) && l.selectedIds.includes(r);
  }
  function Do() {
    const n = Jt();
    return n ? oe(n) || ye(n) ? "stroke" : Ie(n) ? "frame" : "image" : null;
  }
  function ln(n) {
    if (!n || typeof n != "object") return !1;
    if (oe(n)) {
      const r = String(n.actionGroupId || n.id || "").trim(), a = he().find((s) => String((s == null ? void 0 : s.actionGroupId) || (s == null ? void 0 : s.id) || "").trim() === r);
      return (a == null ? void 0 : a.locked) === !0;
    }
    if (ye(n)) {
      const r = ge(n.rasterObjectId || n.id || ""), a = Ne().find((s) => String((s == null ? void 0 : s.id) || "").trim() === r);
      return (a == null ? void 0 : a.locked) === !0;
    }
    return n.locked === !0;
  }
  function ba(n = null) {
    const r = Array.isArray(n) ? n : Ue();
    return r.length > 0 && r.every((a) => ln(a));
  }
  function bu(n, r) {
    const a = r === !0;
    if (!n || typeof n != "object") return !1;
    if (oe(n)) {
      const s = String(n.actionGroupId || n.id || "").trim(), u = he().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return !u || u.locked === a ? !1 : (u.locked = a, !0);
    }
    if (ye(n)) {
      const s = ge(n.rasterObjectId || n.id || ""), u = Ne().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return !u || u.locked === a ? !1 : (u.locked = a, !0);
    }
    return n.locked === a ? !1 : (n.locked = a, !0);
  }
  function vu() {
    if (o) return;
    const n = Ue();
    if (!n.length) return;
    const r = !ba(n);
    let a = !1;
    n.forEach((s) => {
      bu(s, r) && (a = !0);
    }), a && (Kt(), ne(), Dt(), Q());
  }
  function ai(n) {
    l.selectedId = (n == null ? void 0 : n.id) || null, l.selectedIds = n != null && n.id ? [n.id] : [], n && ue(n) ? p.active.selected_sticker_id = n.id || null : p.active.selected_sticker_id = null, n && Ie(n) ? p.active.selected_shot_id = n.id || null : n ? Ie(n) || (p.active.selected_shot_id = p.active.selected_shot_id) : p.active.selected_shot_id = null;
  }
  function _u(n, r = null) {
    const a = [], s = /* @__PURE__ */ new Set();
    (Array.isArray(n) ? n : []).forEach((b) => {
      const m = String((b == null ? void 0 : b.id) || "").trim();
      !m || s.has(m) || (s.add(m), a.push(m));
    }), l.selectedIds = a;
    const u = String(r || "").trim();
    l.selectedId = u && a.includes(u) ? u : a[a.length - 1] || null;
    const f = Jt();
    p.active.selected_sticker_id = f && ue(f) && f.id || null, f && Ie(f) ? p.active.selected_shot_id = f.id || null : a.length || (p.active.selected_shot_id = null);
  }
  function wu() {
    const n = (Array.isArray(p.shots) ? p.shots : []).map((a, s) => ({
      kind: "frame",
      item: a,
      label: "Frame"
    })), r = (Array.isArray(p.stickers) ? p.stickers : []).map((a, s) => {
      var f, b;
      const u = ie(a) ? String(a.id || En) : String(((b = (f = p.assets) == null ? void 0 : f[a.asset_id]) == null ? void 0 : b.name) || a.asset_id || a.id || `Image ${s + 1}`);
      return {
        kind: "image",
        item: a,
        label: u
      };
    });
    return [...n, ...r];
  }
  function xu(n) {
    return n === "frame" ? at.camera : n === "stroke" ? at.paintbrush_vertical_tool : at.image;
  }
  function Lo(n) {
    return !n || !n.item ? Gr(String((n == null ? void 0 : n.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${xu(n.kind)}</span><span>${Gr(String(n.label || ""))}</span>`;
  }
  function To() {
    return ha();
  }
  function ie(n) {
    return !n || typeof n != "object" ? !1 : String(n.id || "") === En || String(n.source_kind || "") === to;
  }
  function Bn(n) {
    return !!(n && typeof n == "object" && n.visible === !1);
  }
  function Su(n) {
    return ie(n) && Bn(n) ? Pc : 1;
  }
  function Nu() {
    return l.primaryTool === "mask" ? l.maskTool : l.paintTool;
  }
  function Mu() {
    return String(Nu() || "") === "lasso_fill";
  }
  function ku() {
    if (o) return;
    const n = Jt();
    !n || !ie(n) || (n.visible = Bn(n), De(), Kt(), ne(), $t(), Dt(), Q());
  }
  function Pu() {
    if (o || e !== "stickers") return;
    const n = Jt();
    if (!n || !ie(n)) return;
    const r = n.initial_pose;
    if (!r || typeof r != "object") return;
    n.yaw_deg = Number(r.yaw_deg ?? n.yaw_deg ?? 0), n.pitch_deg = Number(r.pitch_deg ?? n.pitch_deg ?? 0), n.hFOV_deg = Number(r.hFOV_deg ?? n.hFOV_deg ?? 30);
    const a = va(eo, () => {
      Q();
    });
    a && (a.complete || a.naturalWidth || a.width) ? n.vFOV_deg = Pn(
      Number(r.hFOV_deg ?? n.hFOV_deg ?? 30),
      Number(a.naturalWidth || a.width || 1),
      Number(a.naturalHeight || a.height || 1)
    ) : n.vFOV_deg = Number(r.vFOV_deg ?? n.vFOV_deg ?? 30), n.rot_deg = Number(r.rot_deg ?? n.rot_deg ?? 0), Kt(), ne(), $t(), Dt(), Q();
  }
  function Cu(n) {
    if (!n || !ie(n)) return null;
    const r = n.initial_pose;
    if (!r || typeof r != "object") return null;
    const a = {
      yaw_deg: Number(r.yaw_deg ?? n.yaw_deg ?? 0),
      pitch_deg: Number(r.pitch_deg ?? n.pitch_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg ?? n.hFOV_deg ?? 30),
      vFOV_deg: Number(r.vFOV_deg ?? n.vFOV_deg ?? 30),
      rot_deg: Number(r.rot_deg ?? n.rot_deg ?? 0)
    }, s = va(eo, () => {
      Q();
    });
    return s && (s.complete || s.naturalWidth || s.width) && (a.vFOV_deg = Pn(
      a.hFOV_deg,
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    )), a;
  }
  function Au() {
    const n = Jt();
    if (!n || !ie(n)) return !1;
    const r = Cu(n);
    if (!r) return !1;
    const a = (s, u) => Math.abs(Number(s || 0) - Number(u || 0)) <= 1e-4;
    return !(a(n.yaw_deg, r.yaw_deg) && a(n.pitch_deg, r.pitch_deg) && a(n.hFOV_deg, r.hFOV_deg) && a(n.vFOV_deg, r.vFOV_deg) && a(n.rot_deg, r.rot_deg));
  }
  function Ro(n) {
    var a;
    const r = Jr(t == null ? void 0 : t.id);
    return Array.isArray((a = r == null ? void 0 : r.ui) == null ? void 0 : a[n]) ? r.ui[n] : Array.isArray(r == null ? void 0 : r[n]) ? r[n] : [];
  }
  function Iu(n) {
    const r = Jr(t == null ? void 0 : t.id);
    return r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, n) ? r.ui[n] : r && Object.prototype.hasOwnProperty.call(r, n) ? r[n] : null;
  }
  function Eu(n, r = null) {
    var a;
    if (n && typeof n == "object" && !Array.isArray(n)) return n;
    if (Array.isArray(n) && n.length > 0) {
      const s = n[0];
      if (s && typeof s == "object" && !Array.isArray(s)) return s;
    }
    if (Array.isArray(r) && r.length > 0) {
      const s = (a = r[0]) == null ? void 0 : a.parsed_state;
      if (s && typeof s == "object" && !Array.isArray(s))
        return {
          yaw_deg: Number(s.yaw_deg || 0),
          pitch_deg: Number(s.pitch_deg || 0),
          hFOV_deg: Number(s.hFOV_deg || 30),
          rot_deg: Number(s.roll_deg || 0)
        };
    }
    return null;
  }
  function va(n, r = null) {
    const a = Ro(n), s = Array.isArray(a) && a.length ? a[0] : null, u = yr(s);
    if (!u) return null;
    const f = `__ui__${n}`, b = He.get(f);
    if (b && b.__panoSrc === u) return b;
    const m = new Image();
    return m.__panoSrc = u, m.onload = () => {
      typeof r == "function" ? r(m) : Q();
    }, m.src = u, He.set(f, m), m;
  }
  function Fo(n = null) {
    const r = xc(t, ["sticker_image"], n, "sticker_image_exact");
    return r || va(eo, n);
  }
  function Oo(n) {
    const r = String(n || "");
    let a = 2166136261;
    for (let s = 0; s < r.length; s += 1)
      a ^= r.charCodeAt(s), a = Math.imul(a, 16777619);
    return String(a >>> 0);
  }
  function Pn(n, r, a) {
    const s = Math.max(1, Number(r || 1)), u = Math.max(1, Number(a || 1)), f = O(Number(n || 30), 0.1, 179) * fe, b = 2 * Math.atan(Math.tan(f * 0.5) * (u / s));
    return O(b * Tn, 0.1, 179);
  }
  function Du(n) {
    const r = String(n || "").trim();
    if (!r) return null;
    try {
      const a = JSON.parse(r);
      if (!a || typeof a != "object" || String(a.kind || "") !== "pano_sticker_state") return null;
      const s = a.version;
      let u = null;
      if (typeof s == "number" && Number.isInteger(s) ? u = s : typeof s == "string" && /^\d+$/.test(s) && (u = Number.parseInt(s, 10)), u !== 1) return null;
      const f = a.pose;
      if (!f || typeof f != "object") return null;
      const b = Number(f.yaw_deg), m = Number(f.pitch_deg), g = Number(f.roll_deg), _ = Number(f.hFOV_deg);
      if (![b, m, g, _].every((A) => Number.isFinite(A))) return null;
      let v = ((b + 180) % 360 + 360) % 360 - 180;
      Object.is(v, -0) && (v = 0);
      const N = {
        yaw_deg: v,
        pitch_deg: O(m, -89.9, 89.9),
        roll_deg: g,
        hFOV_deg: O(_, 0.1, 179)
      }, C = Number(a.source_aspect);
      return Number.isFinite(C) && C > 0 && (N.source_aspect = C), N;
    } catch {
      return null;
    }
  }
  function $o(n) {
    const r = Number(n == null ? void 0 : n.yaw_deg), a = Number(n == null ? void 0 : n.pitch_deg), s = Number((n == null ? void 0 : n.roll_deg) ?? (n == null ? void 0 : n.rot_deg)), u = Number(n == null ? void 0 : n.hFOV_deg), f = bo(n);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: pe(Number.isFinite(r) ? r : 0),
        pitch_deg: O(Number.isFinite(a) ? a : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(s) ? s : 0,
        hFOV_deg: O(Number.isFinite(u) ? u : 90, 0.1, 179)
      },
      source_aspect: f
    };
  }
  function Lu(n) {
    var m;
    if (!n || typeof n != "object") return $o(null);
    const r = Number(n == null ? void 0 : n.yaw_deg), a = Number(n == null ? void 0 : n.pitch_deg), s = Number((n == null ? void 0 : n.roll_deg) ?? (n == null ? void 0 : n.rot_deg)), u = Number(n == null ? void 0 : n.hFOV_deg), f = Number(n == null ? void 0 : n.vFOV_deg);
    let b = 1;
    if (Number.isFinite(u) && Number.isFinite(f)) {
      const g = O(u, 0.1, 179) * fe, _ = O(f, 0.1, 179) * fe, v = Math.tan(_ * 0.5);
      if (Math.abs(v) > 1e-6) {
        const N = Math.tan(g * 0.5) / v;
        Number.isFinite(N) && N > 0 && (b = N);
      }
    }
    if (n != null && n.asset_id && ((m = p == null ? void 0 : p.assets) != null && m[n.asset_id])) {
      const g = p.assets[n.asset_id], _ = Number((g == null ? void 0 : g.w) || 0), v = Number((g == null ? void 0 : g.h) || 0);
      _ > 0 && v > 0 && (b = _ / v);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: pe(Number.isFinite(r) ? r : 0),
        pitch_deg: O(Number.isFinite(a) ? a : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(s) ? s : 0,
        hFOV_deg: O(Number.isFinite(u) ? u : 30, 0.1, 179)
      },
      source_aspect: b
    };
  }
  function Tu(n) {
    var s, u, f, b, m;
    const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((g) => String((g == null ? void 0 : g.name) || "") === String(n)) : null, a = r == null ? void 0 : r.link;
    if (a != null) {
      const g = nu(t.graph, a), { originId: _, originSlot: v } = ru(g), N = Jr(_), C = [
        N == null ? void 0 : N.output,
        N == null ? void 0 : N.result,
        (s = N == null ? void 0 : N.data) == null ? void 0 : s.output,
        (u = N == null ? void 0 : N.data) == null ? void 0 : u.result,
        (f = N == null ? void 0 : N.ui) == null ? void 0 : f.output,
        (b = N == null ? void 0 : N.ui) == null ? void 0 : b.result
      ];
      for (const A of C) {
        if (!Array.isArray(A)) continue;
        const E = Number(v || 0), H = A[E];
        if (typeof H == "string" && H.trim()) return H;
      }
    }
    return String(((m = pr(t, n)) == null ? void 0 : m.value) || "");
  }
  function Ru(n, r, a) {
    const s = n && typeof n == "object" ? {
      yaw_deg: Number(n.yaw_deg || 0),
      pitch_deg: Number(n.pitch_deg || 0),
      roll_deg: Number(n.rot_deg ?? n.roll_deg ?? 0),
      hFOV_deg: Number(n.hFOV_deg || 30)
    } : Du(r);
    if (s) {
      const b = Number((a == null ? void 0 : a.naturalWidth) || (a == null ? void 0 : a.width) || s.source_aspect || 1), m = Number((a == null ? void 0 : a.naturalHeight) || (a == null ? void 0 : a.height) || 1);
      return {
        yaw_deg: Number(s.yaw_deg || 0),
        pitch_deg: Number(s.pitch_deg || 0),
        hFOV_deg: Number(s.hFOV_deg || 30),
        vFOV_deg: Pn(s.hFOV_deg, b, m),
        rot_deg: Number(s.roll_deg || 0)
      };
    }
    const u = Number((a == null ? void 0 : a.naturalWidth) || (a == null ? void 0 : a.width) || 1), f = Number((a == null ? void 0 : a.naturalHeight) || (a == null ? void 0 : a.height) || 1);
    return {
      yaw_deg: Number(l.viewYaw || 0),
      pitch_deg: Number(l.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Pn(30, u, f),
      rot_deg: 0
    };
  }
  function zo(n = "sync") {
    if (e !== "stickers" || o) return;
    const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((A) => String((A == null ? void 0 : A.name) || "") === "sticker_image") : null, a = (r == null ? void 0 : r.link) ?? null, s = Fo(() => {
      var A;
      (A = t.__panoExternalStickerSync) == null || A.call(t, "image-loaded");
    }), u = Eu(Iu("pano_sticker_input_pose"), null), f = Tu("sticker_state"), b = Oo(u && typeof u == "object" ? JSON.stringify(u) : f), m = Array.isArray(p.stickers) ? p.stickers : p.stickers = [], g = m.findIndex((A) => String((A == null ? void 0 : A.id) || "") === En);
    if (a == null) {
      g >= 0 && (m.splice(g, 1), l.selectedId === En && (l.selectedId = null, l.selectedIds = [], p.active.selected_sticker_id = null), ne(), $t(), Dt(), Q());
      return;
    }
    const _ = m.reduce((A, E) => Math.max(A, Number((E == null ? void 0 : E.z_index) || 0)), -1);
    let v = g >= 0 ? m[g] : null;
    const N = !v || Number(v.source_link_id ?? -1) !== Number(a) || String(v.source_state_hash || "") !== b;
    v || (v = {
      id: En,
      source_kind: to
    }, m.push(v)), v.id = En, v.source_kind = to, v.source_link_id = Number(a), v.source_state_hash = b, v.visible = v.visible !== !1;
    let C = !1;
    if (N) {
      const A = Ru(u, f, s);
      Object.assign(v, A, {
        initial_pose: { ...A },
        visible: !0,
        z_index: _ + 1
      }), C = !0;
    } else if (s && (s.complete || s.naturalWidth || s.width)) {
      const A = Pn(
        Number(v.hFOV_deg || 30),
        Number(s.naturalWidth || s.width || 1),
        Number(s.naturalHeight || s.height || 1)
      );
      Math.abs(Number(v.vFOV_deg || 0) - A) > 1e-6 && (v.vFOV_deg = A, C = !0);
    }
    C && (ne(), $t(), Dt()), Q();
  }
  function Kn(n = {}) {
    const a = n.preservePanelValues !== !1 ? Jt() : null;
    a && (l.panelLastValues = {
      yaw_deg: Number(a.yaw_deg || 0),
      pitch_deg: Number(a.pitch_deg || 0),
      hFOV_deg: Number(a.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(a.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(a.rot_deg || 0),
      roll_deg: Number(a.roll_deg || 0),
      aspect_id: ar(a)
    }), l.selectedId = null, l.selectedIds = [], l.cutoutAspectOpen = !1, p.active.selected_sticker_id = null, p.active.selected_shot_id = null;
  }
  function Fu() {
    var s;
    if (e !== "cutout") return;
    const n = Array.isArray(p.shots) ? p.shots : [];
    if (!Array.isArray(n) || n.length === 0) return;
    const r = String(((s = p.active) == null ? void 0 : s.selected_shot_id) || ""), a = n.find((u) => String((u == null ? void 0 : u.id) || "") === r) || n[0];
    a && (p.active.selected_shot_id = a.id || null, l.viewYaw = pe(Number(a.yaw_deg || 0)), l.viewPitch = O(Number(a.pitch_deg || 0), -89.9, 89.9));
  }
  function oi() {
    if (!X) return;
    e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0 ? (X.innerHTML = at.crosshair, X.setAttribute("aria-label", "Look at frame"), X.setAttribute("data-tip", "Look at frame")) : (X.innerHTML = at.plus_circle, X.setAttribute("aria-label", "Add frame"), X.setAttribute("data-tip", "Add frame"));
  }
  function si() {
    const n = e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0;
    l.mode === "frame" && !n && (l.mode = "pano"), ot && (ot.disabled = !n, ot.setAttribute("aria-disabled", n ? "false" : "true")), q.forEach((r) => {
      const a = r.dataset.view === l.mode;
      r.setAttribute("aria-pressed", a ? "true" : "false");
    }), ct && ct.setAttribute("data-selected", l.mode), ds() ? Qt(l.pointerPos) : I.style.cursor = l.mode === "pano" ? "grab" : "default";
  }
  function Ou() {
    const r = jo({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !r || r.length !== 4 ? !1 : r[0].y >= r[3].y;
  }
  function _a() {
    const n = Xe(l.viewYaw, l.viewPitch);
    let r = tn(0, 1, 0);
    Math.abs(Oe(n, r)) > 0.999 && (r = tn(0, 0, 1));
    const a = ir(Fi(r, n)), s = ir(Fi(n, a));
    return { right: a, up: s, fwd: n };
  }
  function Mr(n) {
    const { right: r, up: a, fwd: s } = _a(), u = Oe(n, r), f = Oe(n, a), b = Oe(n, s);
    if (b <= 1e-5) return null;
    const m = I.width, g = I.height, _ = l.viewFov * fe, v = 2 * Math.atan(Math.tan(_ / 2) * (g / m)), N = m / 2 / Math.tan(_ / 2), C = g / 2 / Math.tan(v / 2);
    return {
      x: m / 2 + u / b * N,
      y: g / 2 - f / b * C,
      z: b
    };
  }
  function wa(n, r) {
    const { right: a, up: s, fwd: u } = _a(), f = I.width, b = I.height, m = l.viewFov * fe, g = 2 * Math.atan(Math.tan(m / 2) * (b / f)), _ = (n - f / 2) / (f / 2) * Math.tan(m / 2), v = (b / 2 - r) / (b / 2) * Math.tan(g / 2), N = Ti(Ti(Ri(a, _), Ri(s, v)), u);
    return ir(N);
  }
  function dn() {
    const n = I.width, r = I.height, a = 2;
    if (n / Math.max(r, 1) >= a) {
      const m = r, g = m * a;
      return { x: (n - g) * 0.5, y: 0, w: g, h: m };
    }
    const u = n, f = u / a;
    return { x: 0, y: (r - f) * 0.5, w: u, h: f };
  }
  function $u(n) {
    var b;
    if (n && typeof n == "object" && (ie(n) || n.external === !0))
      return Fo(() => {
        var m;
        (m = t.__panoExternalStickerSync) == null || m.call(t, "image-loaded");
      });
    const r = String(n && typeof n == "object" ? n.asset_id || n.assetId || "" : n || "");
    if (!r) return null;
    const a = He.get(r);
    if (a) return a;
    const s = (b = p.assets) == null ? void 0 : b[r], u = Up(s);
    if (!u) return null;
    const f = new Image();
    return f.onload = () => Q(), f.src = u, He.set(r, f), f;
  }
  function Vo(n, r = null) {
    const a = String((n == null ? void 0 : n.rasterDataUrl) || "").trim();
    if (!a) return null;
    const s = Mo.get(a);
    if (s)
      return s.complete || s.width || s.naturalWidth, s;
    const u = new Image();
    return u.onload = () => {
      typeof r == "function" && r();
    }, u.src = a, Mo.set(a, u), u;
  }
  function zu(n) {
    const r = String((n == null ? void 0 : n.rasterDataUrl) || "").trim();
    if (!r) return null;
    const a = da.get(r);
    if (a) return a.ready ? a : null;
    const s = Vo(n, () => {
      const v = da.get(r);
      v && (v.ready = !1), Q({ localOnly: !0 });
    });
    if (!s || !(s.complete || s.width || s.naturalWidth)) return null;
    const u = Number(s.naturalWidth || s.width || 0), f = Number(s.naturalHeight || s.height || 0);
    if (u < 1 || f < 1) return null;
    const b = document.createElement("canvas");
    b.width = u, b.height = f;
    const m = b.getContext("2d", { willReadFrequently: !0 });
    if (!m) return null;
    m.clearRect(0, 0, u, f), m.drawImage(s, 0, 0, u, f);
    const g = m.getImageData(0, 0, u, f).data, _ = { canvas: b, width: u, height: f, alpha: g, ready: !0 };
    return da.set(r, _), _;
  }
  function Vu(n, r, a = 1, s = 0) {
    if (!n || typeof n != "object") return n;
    const u = Number((r == null ? void 0 : r.u) || 0), f = Number((r == null ? void 0 : r.v) || 0), b = Nr(Number(n.u || 0), u), m = Number(n.v || 0) - f, g = Math.max(0.02, Number(a || 1)), _ = Number(s || 0) * fe, v = Math.cos(_), N = Math.sin(_), C = b / g, A = m / g, E = C * v + A * N, H = -C * N + A * v;
    return {
      ...n,
      u: ((u + E) % 1 + 1) % 1,
      v: f + H
    };
  }
  function Hu(n, r) {
    if (!n || !r) return null;
    const a = (n == null ? void 0 : n.bbox) || null;
    if (!a) return null;
    const s = (n == null ? void 0 : n.transform) || {}, u = {
      u: (Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5,
      v: (Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5
    }, f = {
      u: ((Number(r.u || 0) - Number(s.du || 0)) % 1 + 1) % 1,
      v: Number(r.v || 0) - Number(s.dv || 0)
    }, b = Vu(
      f,
      u,
      Number(s.scale || 1),
      Number(s.rot_deg || 0)
    ), m = Number(a.u1 || 0) - Number(a.u0 || 0), g = Number(a.v1 || 0) - Number(a.v0 || 0);
    if (!(m > 1e-6) || !(g > 1e-6)) return null;
    const _ = Nr(Number(b.u || 0), Number(a.u0 || 0)) / m, v = (Number(b.v || 0) - Number(a.v0 || 0)) / g;
    if (_ < 0 || _ > 1 || v < 0 || v > 1) return 0;
    const N = zu(n);
    if (!N) return null;
    const C = O(Math.floor(_ * N.width), 0, N.width - 1), A = O(Math.floor(v * N.height), 0, N.height - 1);
    return Number(N.alpha[(A * N.width + C) * 4 + 3] || 0);
  }
  function Ho(n, r, a, s = null) {
    if (!(r != null && r.visible) || !cn(a, r.corners)) return !1;
    const u = s || Le(a, performance.now()), f = Hu(n, u);
    return f === null ? !0 : f > 8;
  }
  function Uu() {
    var s, u, f, b, m, g, _, v;
    const n = ((u = (s = l.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : u.call(s, xr(!1))) || null, r = Math.max(1, Number(((f = n == null ? void 0 : n.descriptor) == null ? void 0 : f.width) || ((m = (b = n == null ? void 0 : n.displayPaint) == null ? void 0 : b.canvas) == null ? void 0 : m.width) || 2048)), a = Math.max(1, Number(((g = n == null ? void 0 : n.descriptor) == null ? void 0 : g.height) || ((v = (_ = n == null ? void 0 : n.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : v.height) || 1024));
    return { width: r, height: a };
  }
  function Uo(n = null) {
    var m, g, _, v, N, C, A, E, H, B, nt, dt, tt;
    Yn();
    const r = Array.isArray(n) ? n : xr(!1), a = ((g = (m = l.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, r)) || null, s = Math.max(1, Number(((_ = a == null ? void 0 : a.descriptor) == null ? void 0 : _.width) || ((N = (v = a == null ? void 0 : a.displayPaint) == null ? void 0 : v.canvas) == null ? void 0 : N.width) || 2048)), u = Math.max(1, Number(((C = a == null ? void 0 : a.descriptor) == null ? void 0 : C.height) || ((E = (A = a == null ? void 0 : a.displayPaint) == null ? void 0 : A.canvas) == null ? void 0 : E.height) || 1024));
    (!l._rasterComposeSurface || Number(((H = l._rasterComposeSurface.canvas) == null ? void 0 : H.width) || 0) !== s || Number(((B = l._rasterComposeSurface.canvas) == null ? void 0 : B.height) || 0) !== u) && (l._rasterComposeSurface = Cn(s, u));
    const f = l._rasterComposeSurface;
    f.ctx.clearRect(0, 0, s, u);
    let b = !1;
    for (const it of kn()) {
      if (it.type === "strokeGroup") {
        const et = ((dt = (nt = l.paintEngine) == null ? void 0 : nt.getGroupDisplayCanvas) == null ? void 0 : dt.call(nt, it.actionGroupId)) || null;
        if (!et) continue;
        f.ctx.drawImage(et, 0, 0), b = !0;
        continue;
      }
      if (it.type === "rasterObject" && String(((tt = it.item) == null ? void 0 : tt.layerKind) || "paint") === "paint") {
        const et = ci(it.item, () => Q());
        if (!et) continue;
        f.ctx.drawImage(et, 0, 0), b = !0;
      }
    }
    return b ? f.canvas : null;
  }
  function Gu(n = null) {
    var m, g, _, v, N, C, A;
    Yn();
    const r = n || ((g = (m = l.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, xr(!1))) || null, a = ((_ = r == null ? void 0 : r.committedMask) == null ? void 0 : _.canvas) || null, s = Math.max(1, Number(((v = r == null ? void 0 : r.descriptor) == null ? void 0 : v.width) || (a == null ? void 0 : a.width) || 2048)), u = Math.max(1, Number(((N = r == null ? void 0 : r.descriptor) == null ? void 0 : N.height) || (a == null ? void 0 : a.height) || 1024)), f = Ne().filter((E) => String((E == null ? void 0 : E.layerKind) || "paint") === "mask").slice().sort((E, H) => Number((E == null ? void 0 : E.z_index) || 0) - Number((H == null ? void 0 : H.z_index) || 0));
    if (!a && !f.length) return null;
    (!l._maskComposeSurface || Number(((C = l._maskComposeSurface.canvas) == null ? void 0 : C.width) || 0) !== s || Number(((A = l._maskComposeSurface.canvas) == null ? void 0 : A.height) || 0) !== u) && (l._maskComposeSurface = Cn(s, u));
    const b = l._maskComposeSurface;
    b.ctx.clearRect(0, 0, s, u), a && b.ctx.drawImage(a, 0, 0);
    for (const E of f) {
      const H = ci(E, () => Q());
      H && b.ctx.drawImage(H, 0, 0);
    }
    return b.canvas;
  }
  function ju() {
    var A, E, H;
    const n = l.interaction;
    if ((n == null ? void 0 : n.kind) !== "paint_stroke") return null;
    const r = (n == null ? void 0 : n.stroke) || null;
    if (!r || String((r == null ? void 0 : r.layerKind) || "") !== "paint" || String((r == null ? void 0 : r.toolKind) || "") !== "eraser") return null;
    const a = en(), s = `${Sr()}:${a.width}:${a.height}`;
    if (((A = l._activePaintEraserPreviewInfo) == null ? void 0 : A.cacheKey) === s)
      return l._activePaintEraserPreviewInfo.value || null;
    const u = Se(r), f = (u == null ? void 0 : u.geometry) || null;
    if (f && String(f.geometryKind || "") !== "lasso_fill") {
      const B = Array.isArray(f.rawPoints) && f.rawPoints.length ? f.rawPoints : Array.isArray(f.points) ? f.points : [];
      f.processedPoints = Da(B, u.targetSpace, !0);
    }
    const b = Cn(a.width, a.height);
    if (!Qo(b, u, { w: a.width, h: a.height })) return null;
    const m = ((H = (E = b.ctx) == null ? void 0 : E.getImageData(0, 0, a.width, a.height)) == null ? void 0 : H.data) || null;
    if (!m) return null;
    let g = a.width, _ = a.height, v = -1, N = -1;
    for (let B = 0; B < a.height; B += 1)
      for (let nt = 0; nt < a.width; nt += 1)
        m[(B * a.width + nt) * 4 + 3] <= 8 || (nt < g && (g = nt), B < _ && (_ = B), nt > v && (v = nt), B > N && (N = B));
    if (v < g || N < _)
      return l._activePaintEraserPreviewInfo = { cacheKey: s, value: null }, null;
    const C = {
      surface: b,
      bounds: { minX: g, minY: _, maxX: v, maxY: N },
      key: `${s}:${g}:${_}:${v}:${N}`
    };
    return l._activePaintEraserPreviewInfo = { cacheKey: s, value: C }, l._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), C;
  }
  function kr() {
    l._activePaintEraserPreviewInfo = null, l._liveEraserPreviewCanvasCache = null;
  }
  function Bu(n, r, a) {
    var s, u;
    if (!n) return null;
    if (n.type === "rasterObject" && ((s = n.item) != null && s.bbox)) {
      const f = n.item.bbox, b = ((u = n.item) == null ? void 0 : u.transform) || {}, m = Number(f.u0 || 0) + Number(b.du || 0), g = Number(f.u1 || 0) + Number(b.du || 0), _ = Number(f.v0 || 0) + Number(b.dv || 0), v = Number(f.v1 || 0) + Number(b.dv || 0);
      return {
        minX: Math.floor((m % 1 + 1) % 1 * r),
        maxX: Math.ceil((g % 1 + 1) % 1 * r),
        minY: Math.floor(O(_, 0, 1) * a),
        maxY: Math.ceil(O(v, 0, 1) * a),
        wraps: g - m >= 1 || m < 0 || g > 1
      };
    }
    if (n.type === "strokeGroup") {
      const f = Ee(n.actionGroupId, "paint"), b = Mn(n.actionGroupId, "paint", f);
      if (!b) return null;
      const m = b.centerUv.u - b.halfW, g = b.centerUv.u + b.halfW, _ = b.centerUv.v - b.halfH, v = b.centerUv.v + b.halfH;
      return {
        minX: Math.floor((m % 1 + 1) % 1 * r),
        maxX: Math.ceil((g % 1 + 1) % 1 * r),
        minY: Math.floor(O(_, 0, 1) * a),
        maxY: Math.ceil(O(v, 0, 1) * a),
        wraps: g - m >= 1 || m < 0 || g > 1
      };
    }
    return null;
  }
  function Ku(n, r, a) {
    if (!n || !r) return !1;
    const s = (b) => b.wraps ? [
      { minX: 0, maxX: b.maxX, minY: b.minY, maxY: b.maxY, wraps: !1 },
      { minX: b.minX, maxX: a - 1, minY: b.minY, maxY: b.maxY, wraps: !1 }
    ] : [b], u = s(n), f = s(r);
    return u.some((b) => f.some((m) => !(b.maxX < m.minX || m.maxX < b.minX || b.maxY < m.minY || m.maxY < b.minY)));
  }
  function Go(n, r, a) {
    var N, C, A;
    if (!n || !r || !((N = a == null ? void 0 : a.surface) != null && N.canvas) || r.type !== "rasterObject") return n;
    const s = Number(n.width || a.surface.canvas.width || 0), u = Number(n.height || a.surface.canvas.height || 0);
    if (s < 1 || u < 1) return n;
    const f = Bu(r, s, u);
    if (f && !Ku(f, a.bounds, s)) return n;
    const b = String(((C = r.item) == null ? void 0 : C.id) || r.id || ""), m = ((A = r.item) == null ? void 0 : A.transform) || {}, g = `${a.key}:${b}:${s}:${u}:${Number(m.du || 0).toFixed(6)}:${Number(m.dv || 0).toFixed(6)}:${Number(m.rot_deg || 0).toFixed(3)}:${Number(m.scale || 1).toFixed(4)}`, _ = l._liveEraserPreviewCanvasCache instanceof Map ? l._liveEraserPreviewCanvasCache : l._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (_.has(g)) return _.get(g);
    const v = Cn(s, u);
    return v.ctx.clearRect(0, 0, s, u), v.ctx.drawImage(n, 0, 0), v.ctx.save(), v.ctx.globalCompositeOperation = "destination-out", v.ctx.drawImage(a.surface.canvas, 0, 0), v.ctx.restore(), _.size > 64 && _.clear(), _.set(g, v.canvas), v.canvas;
  }
  function ci(n, r = null) {
    const a = ge((n == null ? void 0 : n.rasterObjectId) || (n == null ? void 0 : n.id) || ""), s = (n == null ? void 0 : n.bbox) || null;
    if (!a || !s) return null;
    const u = Vo(n, r);
    if (!u || !(u.complete || u.width || u.naturalWidth)) return null;
    const { width: f, height: b } = Uu(), m = (n == null ? void 0 : n.transform) || {}, g = [
      a,
      f,
      b,
      s.u0,
      s.v0,
      s.u1,
      s.v1,
      m.du,
      m.dv,
      m.rot_deg,
      m.scale,
      An()
    ].join(":"), _ = ei.get(g);
    if (_) return _;
    ei.size > 64 && ei.clear();
    const v = document.createElement("canvas");
    v.width = f, v.height = b;
    const N = v.getContext("2d");
    if (!N) return null;
    const C = Number(s.u0 || 0) * f, A = Number(s.v0 || 0) * b, E = Math.max(1, (Number(s.u1 || 0) - Number(s.u0 || 0)) * f), H = Math.max(1, (Number(s.v1 || 0) - Number(s.v0 || 0)) * b), B = C + E * 0.5 + Number(m.du || 0) * f, nt = A + H * 0.5 + Number(m.dv || 0) * b, dt = Number(m.rot_deg || 0) * fe, tt = Math.max(0.01, Number(m.scale || 1));
    for (const it of [-f, 0, f])
      N.save(), N.translate(B + it, nt), N.rotate(dt), N.scale(tt, tt), N.drawImage(u, -E * 0.5, -H * 0.5, E, H), N.restore();
    return ei.set(g, v), v;
  }
  function Wu(n) {
    return ua(p, {
      stickers: n ? [n] : [],
      selectedId: l.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function qu(n, r) {
    return Cc(
      p,
      (a, s, u) => $u(u || a),
      { scene: r, stickers: n ? [n] : [] }
    );
  }
  function ui(n, r, a, s, u = "modal_object_view") {
    var g, _, v, N, C;
    if (!n || !r || !a) return !1;
    let f = !1;
    const b = ju();
    if (s && l.showPanorama) {
      const A = Mi({
        owner: t,
        cacheKey: `${u}_bg_only`,
        ctx: n,
        rect: r,
        img: s,
        view: a
      });
      f = f || !!A;
    }
    if (l.showObjects)
      for (const A of ma(!0)) {
        if (A.type === "sticker" && A.item) {
          const E = Wu(A.item), H = qu(A.item, E), B = br({
            owner: t,
            cacheKey: `${u}_sticker_${String(A.id || A.item.id || "")}`,
            ctx: n,
            rect: r,
            backgroundSource: null,
            textures: H,
            scene: E,
            view: a
          });
          f = f || !!B;
          continue;
        }
        if (A.type === "rasterObject" && A.item) {
          let E = ci(A.item, () => Q());
          if (!E) continue;
          const H = b ? `_${b.key}` : "";
          b && (E = Go(E, A, b));
          const B = ((g = A.item) == null ? void 0 : g.transform) || {};
          Mi({
            owner: t,
            cacheKey: `${u}_raster_${String(A.id || A.item.id || "")}`,
            ctx: n,
            rect: r,
            img: E,
            view: a,
            backgroundRevision: `${qn()}_raster_${String(A.id || A.item.id || "")}_${Number(B.du || 0).toFixed(6)}_${Number(B.dv || 0).toFixed(6)}_${Number(B.rot_deg || 0).toFixed(3)}_${Number(B.scale || 1).toFixed(4)}${H}`,
            backgroundOpacity: 1
          }), f = !0;
          continue;
        }
        if (A.type === "strokeGroup") {
          let E = ((v = (_ = l.paintEngine) == null ? void 0 : _.getGroupDisplayCanvas) == null ? void 0 : v.call(_, A.actionGroupId)) || null;
          if (!E) continue;
          b && (E = Go(E, A, b)), Mi({
            owner: t,
            cacheKey: `${u}_group_${String(A.actionGroupId || "")}`,
            ctx: n,
            rect: r,
            img: E,
            view: a,
            backgroundRevision: `${An()}_${String(A.actionGroupId || "")}${Sr()}`,
            backgroundOpacity: 1
          }), f = !0;
        }
      }
    const m = l.showMask && ((C = (N = l.paintEngine) == null ? void 0 : N.getMaskDisplayCanvas) == null ? void 0 : C.call(N)) || null;
    return m && (Mi({
      owner: t,
      cacheKey: `${u}_mask`,
      ctx: n,
      rect: r,
      img: m,
      view: a,
      backgroundRevision: `${An()}${Sr()}_mask`,
      backgroundOpacity: 1
    }), f = !0), f;
  }
  async function xa(n, r = "sticker.png") {
    const a = new FormData();
    a.append("image", n), a.append("type", "input"), a.append("subfolder", "panorama_stickers");
    const s = await we.fetchApi("/upload/image", { method: "POST", body: a });
    if (!s || s.status !== 200)
      throw new Error(`upload failed (${(s == null ? void 0 : s.status) || "no-response"})`);
    const u = await s.json(), f = String((u == null ? void 0 : u.name) || "").trim();
    if (!f)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: f,
      subfolder: String((u == null ? void 0 : u.subfolder) || "panorama_stickers"),
      storage: String((u == null ? void 0 : u.type) || "input"),
      name: String((n == null ? void 0 : n.name) || r)
    };
  }
  async function Sa(n, r) {
    const a = await new Promise((m) => n.toBlob(m, "image/png")), s = new FormData();
    s.append("image", a, r), s.append("type", "temp"), s.append("subfolder", "panorama_stickers"), s.append("overwrite", "1");
    const u = await we.fetchApi("/upload/image", { method: "POST", body: s });
    if (!u || u.status !== 200) throw new Error(`upload failed (${u == null ? void 0 : u.status})`);
    const f = await u.json(), b = String((f == null ? void 0 : f.name) || "").trim();
    if (!b) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: b,
      subfolder: String((f == null ? void 0 : f.subfolder) || "panorama_stickers"),
      storage: String((f == null ? void 0 : f.type) || "input")
    };
  }
  let Na = null, li = !1;
  function Yu() {
    const n = vc(p.painting);
    if (n.totalPaintCount <= 0 && n.totalMaskCount <= 0) return !1;
    const r = p.painting_layer, a = qn();
    return !r || typeof r != "object" || String(r.revision || "") !== a || n.totalPaintCount > 0 && !r.paint || n.totalMaskCount > 0 && !r.mask;
  }
  function Ma() {
    const n = String(t.id ?? "0"), r = Wr.get(n);
    if (li && r) return r;
    const a = (async () => {
      var f, b, m, g, _, v, N, C, A, E;
      const s = qn(), u = vc(p.painting);
      if (u.totalPaintCount <= 0 && u.totalMaskCount <= 0) {
        p.painting_layer !== null && (p.painting_layer = null, Na = s, je());
        return;
      }
      if (Na !== s && !li) {
        li = !0;
        try {
          Yn();
          const H = xr(!1), B = ((b = (f = l.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : b.call(f, H)) || null, nt = Uo(H), dt = Gu(B), tt = Math.max(1, Number(((m = B == null ? void 0 : B.descriptor) == null ? void 0 : m.width) || (nt == null ? void 0 : nt.width) || (dt == null ? void 0 : dt.width) || 2048)), it = Math.max(1, Number(((g = B == null ? void 0 : B.descriptor) == null ? void 0 : g.height) || (nt == null ? void 0 : nt.height) || (dt == null ? void 0 : dt.height) || 1024));
          (!nt && u.totalPaintCount > 0 || !dt && u.totalMaskCount > 0) && ((!l._paintLayerSyncBlankSurface || Number(((_ = l._paintLayerSyncBlankSurface.canvas) == null ? void 0 : _.width) || 0) !== tt || Number(((v = l._paintLayerSyncBlankSurface.canvas) == null ? void 0 : v.height) || 0) !== it) && (l._paintLayerSyncBlankSurface = Cn(tt, it)), l._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, tt, it));
          const et = nt || u.totalPaintCount > 0 && ((N = l._paintLayerSyncBlankSurface) == null ? void 0 : N.canvas) || null, st = dt || u.totalMaskCount > 0 && ((C = l._paintLayerSyncBlankSurface) == null ? void 0 : C.canvas) || null;
          if (!et && !st) return;
          let J = null, V = null;
          const Y = [];
          if (u.totalPaintCount > 0) {
            J = await Sa(et, `pano_paint_${n}.png`);
            for (const bt of H) {
              const _t = String(bt || "").trim();
              if (!_t) continue;
              const vt = ((E = (A = l.paintEngine) == null ? void 0 : A.getGroupDisplayCanvas) == null ? void 0 : E.call(A, _t)) || null;
              if (!vt) continue;
              const wt = _t.replace(/[^a-zA-Z0-9_-]+/g, "_"), Nt = await Sa(vt, `pano_group_${n}_${wt}.png`);
              Nt && Y.push({
                id: _t,
                actionGroupId: _t,
                image: Nt
              });
            }
          }
          u.totalMaskCount > 0 && (V = await Sa(st, `pano_mask_${n}.png`)), s === qn() && (p.painting_layer = {
            paint: J,
            mask: V,
            groups: Y,
            revision: s
          }, Na = s, je());
        } catch (H) {
          console.warn("[pano] paint layer upload failed:", H);
        } finally {
          li = !1;
        }
      }
    })();
    return Wr.set(n, a), a.finally(() => {
      Wr.get(n) === a && Wr.delete(n);
    }), a;
  }
  function Wn() {
    const n = jp(t, "pano_input_images", He, () => Q());
    if (n) return n;
    const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((b) => String((b == null ? void 0 : b.name) || "")) : [], a = r.includes("erp_image"), s = r.includes("bg_erp");
    let u = [];
    return o && (a || s) ? u = a ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : u = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], xc(t, u, () => Q(), `background:${u.join("|")}`);
  }
  function Pr() {
    const n = new Set(
      (p.stickers || []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter((r) => !!r)
    );
    Object.keys(p.assets || {}).forEach((r) => {
      n.has(r) || (delete p.assets[r], He.delete(r));
    });
  }
  function ka(n) {
    return {
      lon: Math.atan2(n.x, n.z),
      lat: Math.asin(O(n.y, -1, 1))
    };
  }
  function Pa(n, r = null) {
    const { lon: a, lat: s } = ka(n), u = dn();
    let f = u.x + (a / (2 * Math.PI) + 0.5) * u.w;
    const b = u.y + (0.5 - s / Math.PI) * u.h;
    if (r !== null) {
      for (; f - r > u.w / 2; ) f -= u.w;
      for (; f - r < -u.w / 2; ) f += u.w;
    }
    return { x: f, y: b, z: 1 };
  }
  function di(n) {
    const r = Xe(Number(n.yaw_deg || 0), Number(n.pitch_deg || 0));
    let a = tn(0, 1, 0);
    Math.abs(Oe(r, a)) > 0.999 && (a = tn(0, 0, 1));
    const s = ir(Fi(a, r)), u = ir(Fi(r, s)), f = Math.tan(O(Number(n.hFOV_deg || 20), 0.1, 179) * 0.5 * fe), b = Math.tan(O(Number(n.vFOV_deg || 20), 0.1, 179) * 0.5 * fe), m = Number(n.rot_deg || n.roll_deg || 0) * fe, g = Math.cos(m), _ = Math.sin(m);
    return {
      centerDir: r,
      right: s,
      up: u,
      tanX: f,
      tanY: b,
      cr: g,
      sr: _
    };
  }
  function fn(n, r, a) {
    const s = r * n.cr - a * n.sr, u = r * n.sr + a * n.cr;
    return ir(Ti(Ti(n.centerDir, Ri(n.right, s)), Ri(n.up, u)));
  }
  function jo(n) {
    const r = di(n);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: s, v: u }) => fn(r, s * r.tanX, u * r.tanY));
  }
  function Bo(n, r, a) {
    const s = di(n), u = (r * 2 - 1) * s.tanX, f = (1 - a * 2) * s.tanY;
    return fn(s, u, f);
  }
  function Xu(n) {
    const r = (n == null ? void 0 : n.bbox) || null, a = (n == null ? void 0 : n.transform) || {};
    return r ? {
      u: (((Number(r.u0 || 0) + Number(r.u1 || 0)) * 0.5 + Number(a.du || 0)) % 1 + 1) % 1,
      v: O((Number(r.v0 || 0) + Number(r.v1 || 0)) * 0.5 + Number(a.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Zu(n) {
    var g, _, v, N;
    const r = (n == null ? void 0 : n.bbox) || null;
    if (!r) return [];
    const a = {
      u: (Number(r.u0 || 0) + Number(r.u1 || 0)) * 0.5,
      v: (Number(r.v0 || 0) + Number(r.v1 || 0)) * 0.5
    }, s = Math.max(0.01, Number(((g = n == null ? void 0 : n.transform) == null ? void 0 : g.scale) || 1)), u = Number(((_ = n == null ? void 0 : n.transform) == null ? void 0 : _.rot_deg) || 0), f = Number(((v = n == null ? void 0 : n.transform) == null ? void 0 : v.du) || 0), b = Number(((N = n == null ? void 0 : n.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(r.u0 || 0), v: Number(r.v0 || 0) },
      { u: Number(r.u1 || 0), v: Number(r.v0 || 0) },
      { u: Number(r.u1 || 0), v: Number(r.v1 || 0) },
      { u: Number(r.u0 || 0), v: Number(r.v1 || 0) }
    ].map((C) => ri(ii(C, a, s, u), f, b));
  }
  function Ju(n) {
    const r = ge((n == null ? void 0 : n.rasterObjectId) || (n == null ? void 0 : n.id) || ""), a = (n == null ? void 0 : n.transform) || {}, s = (n == null ? void 0 : n.bbox) || {}, u = `${r}:${l.mode}:${An()}:${s.u0}:${s.v0}:${s.u1}:${s.v1}:${a.du}:${a.dv}:${a.rot_deg}:${a.scale}`;
    if (l.mode === "frame") {
      const f = Ut(), b = f ? ve(f) : null;
      return `${u}:frame:${String((f == null ? void 0 : f.id) || "")}:${Math.round(Number((b == null ? void 0 : b.x) || 0))}:${Math.round(Number((b == null ? void 0 : b.y) || 0))}:${Math.round(Number((b == null ? void 0 : b.w) || 0))}:${Math.round(Number((b == null ? void 0 : b.h) || 0))}`;
    }
    return `${u}:view:${Math.round(Number(l.viewYaw || 0) * 100)}:${Math.round(Number(l.viewPitch || 0) * 100)}:${Math.round(Number(l.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function Qu(n) {
    const r = String((n == null ? void 0 : n.id) || ""), s = [
      Ie(n) ? "frame" : ue(n) ? "sticker" : "item",
      r,
      l.mode,
      Number((n == null ? void 0 : n.yaw_deg) || 0).toFixed(4),
      Number((n == null ? void 0 : n.pitch_deg) || 0).toFixed(4),
      Number((n == null ? void 0 : n.hFOV_deg) || 0).toFixed(4),
      Number((n == null ? void 0 : n.vFOV_deg) || 0).toFixed(4),
      Number((n == null ? void 0 : n.rot_deg) || 0).toFixed(4),
      Number((n == null ? void 0 : n.roll_deg) || 0).toFixed(4),
      ar(n)
    ].join(":");
    if (l.mode === "frame") {
      const u = Ut(), f = u ? ve(u) : null;
      return `${s}:frame:${String((u == null ? void 0 : u.id) || "")}:${Math.round(Number((f == null ? void 0 : f.x) || 0))}:${Math.round(Number((f == null ? void 0 : f.y) || 0))}:${Math.round(Number((f == null ? void 0 : f.w) || 0))}:${Math.round(Number((f == null ? void 0 : f.h) || 0))}`;
    }
    return `${s}:view:${Math.round(Number(l.viewYaw || 0) * 100)}:${Math.round(Number(l.viewPitch || 0) * 100)}:${Math.round(Number(l.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function tl() {
    var r;
    const n = String(((r = p.ui_settings) == null ? void 0 : r.preview_quality) || "balanced");
    return n === "draft" ? l.hqFrames && l.hqFrames > 0 ? [28, 20] : l.interaction ? [12, 9] : [20, 14] : n === "high" ? l.hqFrames && l.hqFrames > 0 ? [48, 36] : l.interaction ? [20, 14] : [36, 26] : l.hqFrames && l.hqFrames > 0 ? [40, 30] : l.interaction ? [16, 12] : [28, 20];
  }
  function el(n = !1) {
    const r = I.width, a = I.height, s = dn();
    if (S.globalAlpha = 1, S.lineWidth = 1, n || (S.fillStyle = "#070707", S.fillRect(0, 0, r, a), S.fillStyle = "#070707", S.fillRect(s.x, s.y, s.w, s.h)), Yn(), ui(
      S,
      { x: s.x, y: s.y, w: s.w, h: s.h },
      { mode: "unwrap" },
      Wn(),
      "modal_unwrap"
    ), l.showGrid && !l.fullscreen) {
      S.strokeStyle = "#3f3f46";
      for (let f = 0; f <= 16; f += 1) {
        const b = s.x + s.w * f / 16;
        S.beginPath(), S.moveTo(b, s.y), S.lineTo(b, s.y + s.h), S.stroke();
      }
      for (let f = 0; f <= 8; f += 1) {
        const b = s.y + s.h * f / 8;
        S.beginPath(), S.moveTo(s.x, b), S.lineTo(s.x + s.w, b), S.stroke();
      }
      S.strokeStyle = "rgba(250, 250, 250, 0.86)", S.lineWidth = 1.2, S.beginPath(), S.moveTo(s.x, s.y + s.h / 2), S.lineTo(s.x + s.w, s.y + s.h / 2), S.stroke(), S.fillStyle = "rgba(250, 250, 250, 0.42)", S.font = "500 11px Geist, sans-serif", S.textAlign = "center";
      const u = s.y + s.h * 0.57;
      S.fillText("Left", s.x + s.w * 0.25, u), S.fillText("Front", s.x + s.w * 0.5, u), S.fillText("Right", s.x + s.w * 0.75, u), S.fillText("Back", s.x + 38, u), S.fillText("Back", s.x + s.w - 38, u);
    }
  }
  function Ko(n, r, a = 1) {
    let s = !1;
    S.strokeStyle = r, S.lineWidth = a, S.beginPath();
    for (const u of n) {
      const f = Mr(u);
      if (!f) {
        s = !1;
        continue;
      }
      s ? S.lineTo(f.x, f.y) : (S.moveTo(f.x, f.y), s = !0);
    }
    S.stroke();
  }
  function nl(n = !1) {
    const r = I.width, a = I.height;
    if (n || (S.fillStyle = "#070707", S.fillRect(0, 0, r, a)), Yn(), ui(
      S,
      { x: 0, y: 0, w: r, h: a },
      {
        mode: "panorama",
        yawDeg: l.viewYaw,
        pitchDeg: l.viewPitch,
        fovDeg: l.viewFov
      },
      Wn(),
      "modal_pano"
    ), l.showGrid && !l.fullscreen) {
      for (let u = -180; u <= 180; u += 15) {
        const f = [];
        for (let b = -89; b <= 89; b += 4) f.push(Xe(u, b));
        Ko(f, "#3f3f46", u % 90 === 0 ? 1.3 : 1);
      }
      for (let u = -75; u <= 75; u += 15) {
        const f = [];
        for (let b = -180; b <= 180; b += 4) f.push(Xe(b, u));
        Ko(f, u === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", u === 0 ? 1.5 : 1);
      }
      const s = [
        { name: "Left", dir: Xe(-90, 0) },
        { name: "Front", dir: Xe(0, 0) },
        { name: "Right", dir: Xe(90, 0) },
        { name: "Back", dir: Xe(180, 0) }
      ];
      S.fillStyle = "rgba(250, 250, 250, 0.42)", S.font = "500 11px Geist, sans-serif", S.textAlign = "center", s.forEach((u) => {
        const f = Mr(u.dir);
        f && S.fillText(u.name, f.x, f.y + 24);
      });
    }
  }
  function Wo(n, r = null, a = null) {
    if (l.mode === "frame") {
      const s = r || Ut();
      if (!s) return [];
      const u = a || ve(s);
      return Tl(n, s, u);
    }
    return El(n);
  }
  function rl(n, r) {
    const a = String(n.actionGroupId || n.id || "").trim(), s = Ee(a, n.layerKind), u = [], f = [], b = l.mode === "frame" ? Ut() : null, m = b ? ve(b) : null;
    for (const tt of s) {
      const it = (tt == null ? void 0 : tt.geometry) || null, et = (it == null ? void 0 : it.geometryKind) === "lasso_fill" ? it == null ? void 0 : it.points : (it == null ? void 0 : it.processedPoints) || (it == null ? void 0 : it.rawPoints) || (it == null ? void 0 : it.points) || [], st = Wo(et, b, m).filter((Y) => Number.isFinite(Y == null ? void 0 : Y.x) && Number.isFinite(Y == null ? void 0 : Y.y));
      if (!st.length) continue;
      f.push(...st);
      const J = gn(String((tt == null ? void 0 : tt.toolKind) || "pen")), V = xe[J] || xe[sn];
      u.push({
        points: st,
        closed: String((it == null ? void 0 : it.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((tt == null ? void 0 : tt.size) || 10) * Math.max(0.1, Number((V == null ? void 0 : V.sizeScale) ?? 1)) + 10),
        layerKind: String((tt == null ? void 0 : tt.layerKind) || n.layerKind || "paint")
      });
    }
    if (!f.length) {
      const tt = { visible: !1, kind: "strokeGroup" };
      return l._strokeGeomCache.set(r, tt), tt;
    }
    let g = 1 / 0, _ = 1 / 0, v = -1 / 0, N = -1 / 0;
    for (const tt of u)
      for (const et of Array.isArray(tt == null ? void 0 : tt.points) ? tt.points : []) {
        const st = Number((et == null ? void 0 : et.x) || 0), J = Number((et == null ? void 0 : et.y) || 0);
        g = Math.min(g, st - 2), _ = Math.min(_, J - 2), v = Math.max(v, st + 2), N = Math.max(N, J + 2);
      }
    if (!Number.isFinite(g) || !Number.isFinite(_) || !Number.isFinite(v) || !Number.isFinite(N)) {
      const tt = { visible: !1, kind: "strokeGroup" };
      return l._strokeGeomCache.set(r, tt), tt;
    }
    const C = [
      { x: g, y: _ },
      { x: v, y: _ },
      { x: v, y: N },
      { x: g, y: N }
    ], A = { x: (g + v) * 0.5, y: (_ + N) * 0.5 }, E = { x: A.x, y: _ }, H = { x: v, y: A.y }, B = { x: A.x, y: N }, nt = { x: g, y: A.y }, dt = {
      kind: "strokeGroup",
      center: A,
      corners: C,
      edgeMidpoints: [
        { edge: "top", x: E.x, y: E.y, a: C[0], b: C[1] },
        { edge: "right", x: H.x, y: H.y, a: C[1], b: C[2] },
        { edge: "bottom", x: B.x, y: B.y, a: C[2], b: C[3] },
        { edge: "left", x: nt.x, y: nt.y, a: C[3], b: C[0] }
      ],
      rotateStemBase: E,
      rotateHandle: { x: E.x, y: E.y - 30 },
      strokePaths: u,
      visible: !0
    };
    return l._strokeGeomCache.set(r, dt), dt;
  }
  function il(n, r) {
    const a = Zu(n), s = Wo(a);
    if (!Array.isArray(s) || s.length < 4) {
      const m = { visible: !1, kind: "rasterObject" };
      return l._strokeGeomCache.set(r, m), m;
    }
    const u = s.slice(0, 4).map((m) => ({ x: Number((m == null ? void 0 : m.x) || 0), y: Number((m == null ? void 0 : m.y) || 0) })), b = {
      kind: "rasterObject",
      center: {
        x: u.reduce((m, g) => m + Number(g.x || 0), 0) / u.length,
        y: u.reduce((m, g) => m + Number(g.y || 0), 0) / u.length
      },
      corners: u,
      visible: !0
    };
    return l._strokeGeomCache.set(r, b), b;
  }
  function pn(n, r = null, a = null, s = null) {
    if (l.mode === "frame") {
      const dt = a || Ut(), tt = s || ve(dt), it = dt ? Ir(dt, n) : null;
      return it ? {
        x: Number(tt.x || 0) + Number(it.x || 0) * Number(tt.w || 0),
        y: Number(tt.y || 0) + Number(it.y || 0) * Number(tt.h || 0),
        z: 1
      } : null;
    }
    if (l.mode === "unwrap") return Pa(n, r);
    const { right: u, up: f, fwd: b } = _a(), m = Oe(n, u), g = Oe(n, f), _ = Oe(n, b), v = I.width, N = I.height, C = l.viewFov * fe, A = 2 * Math.atan(Math.tan(C / 2) * (N / Math.max(v, 1))), E = v / 2 / Math.tan(C / 2), H = N / 2 / Math.tan(A / 2), B = Math.max(_, 1e-4), nt = Math.max(v, N) * 2;
    return {
      x: O(v / 2 + m / B * E, -nt, v + nt),
      y: O(N / 2 - g / B * H, -nt, N + nt),
      z: B
    };
  }
  function al(n) {
    const r = Xe(Number(n.yaw_deg || 0), Number(n.pitch_deg || 0)), a = l.mode === "frame" ? Ut() : null, s = a ? ve(a) : null, u = pn(r, null, a, s);
    if (!u) return { visible: !1 };
    const f = di(n), m = jo(n).map((et) => pn(et, u.x, a, s)), g = fn(f, 0, f.tanY), _ = fn(f, 0, f.tanY + Math.max(f.tanY * 0.43, 0.053)), v = pn(g, u.x, a, s), N = pn(_, (v == null ? void 0 : v.x) ?? u.x, a, s), C = ((N == null ? void 0 : N.x) ?? v.x) - v.x, A = ((N == null ? void 0 : N.y) ?? v.y) - v.y, E = Math.hypot(C, A) || 1, H = {
      x: v.x + C / E * 30,
      y: v.y + A / E * 30
    }, B = pn(fn(f, 0, f.tanY), u.x, a, s), nt = pn(fn(f, f.tanX, 0), u.x, a, s), dt = pn(fn(f, 0, -f.tanY), u.x, a, s), tt = pn(fn(f, -f.tanX, 0), u.x, a, s), it = [
      {
        edge: "top",
        x: B.x,
        y: B.y,
        a: { x: m[0].x, y: m[0].y },
        b: { x: m[1].x, y: m[1].y }
      },
      {
        edge: "right",
        x: nt.x,
        y: nt.y,
        a: { x: m[1].x, y: m[1].y },
        b: { x: m[2].x, y: m[2].y }
      },
      {
        edge: "bottom",
        x: dt.x,
        y: dt.y,
        a: { x: m[2].x, y: m[2].y },
        b: { x: m[3].x, y: m[3].y }
      },
      {
        edge: "left",
        x: tt.x,
        y: tt.y,
        a: { x: m[3].x, y: m[3].y },
        b: { x: m[0].x, y: m[0].y }
      }
    ];
    return {
      center: { x: u.x, y: u.y },
      corners: m.map((et) => ({ x: et.x, y: et.y })),
      edgeMidpoints: it,
      rotateStemBase: { x: v.x, y: v.y },
      rotateHandle: H,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function le(n) {
    if (oe(n)) {
      const u = String(n.actionGroupId || n.id || "").trim(), f = gu(u, n.layerKind), b = l._strokeGeomCache.get(f);
      return b || (l._strokeGeomCache.size > 256 && l._strokeGeomCache.clear(), rl(n, f));
    }
    if (ye(n)) {
      const u = Ju(n), f = l._strokeGeomCache.get(u);
      return f || (l._strokeGeomCache.size > 256 && l._strokeGeomCache.clear(), il(n, u));
    }
    const r = Qu(n), a = l._strokeGeomCache.get(r);
    if (a) return a;
    l._strokeGeomCache.size > 256 && l._strokeGeomCache.clear();
    const s = al(n);
    return l._strokeGeomCache.set(r, s), s;
  }
  function fi(n, r, a, s = null) {
    const u = [];
    for (let f = 0; f <= a; f += 1) {
      const b = f / a;
      let m = 0, g = 0;
      r === 0 ? (m = b, g = 0) : r === 1 ? (m = 1, g = b) : r === 2 ? (m = 1 - b, g = 1) : (m = 0, g = 1 - b);
      const _ = Bo(n, m, g), v = l.mode === "unwrap" ? Pa(_, s) : Mr(_);
      v && u.push(v);
    }
    return u;
  }
  function ol(n, r) {
    const a = Xe(Number(n.yaw_deg || 0), Number(n.pitch_deg || 0)), s = l.mode === "unwrap" ? Pa(a) : null, u = s ? s.x : null, f = l.mode === "pano" ? 28 : 20, b = [
      fi(n, 0, f, u),
      fi(n, 1, f, u),
      fi(n, 2, f, u),
      fi(n, 3, f, u)
    ];
    S.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", S.lineWidth = r ? 2 : 1, S.beginPath();
    let m = !1;
    for (const g of b)
      for (const _ of g)
        m ? S.lineTo(_.x, _.y) : (S.moveTo(_.x, _.y), m = !0);
    S.closePath(), S.stroke();
  }
  function sl() {
    const n = [...Array.isArray(p.stickers) ? p.stickers : []].sort((a, s) => Number(a.z_index || 0) - Number(s.z_index || 0));
    if (l.mode === "frame") return n;
    const r = Array.isArray(p.shots) ? p.shots : [];
    return [...n, ...r];
  }
  function Ca() {
    const n = [...Array.isArray(p.stickers) ? p.stickers : []].sort((a, s) => Number(s.z_index || 0) - Number(a.z_index || 0));
    if (l.mode === "frame") return n;
    const r = Array.isArray(p.shots) ? p.shots : [];
    return [...n, ...r];
  }
  function Aa(n, r = []) {
    if (!(!n || !Array.isArray(r) || r.length < 4)) {
      n.beginPath(), n.moveTo(r[0].x, r[0].y);
      for (let a = 1; a < 4; a += 1) n.lineTo(r[a].x, r[a].y);
      n.closePath();
    }
  }
  function cl(n, r, a, s) {
    if (ue(n)) {
      const u = S.globalAlpha;
      S.globalAlpha = Su(n), l.mode === "frame" ? (S.strokeStyle = a ? "rgba(250, 250, 250, 0.9)" : s ? "rgba(255, 89, 89, 0.72)" : "#71717a", S.lineWidth = a ? 2 : 1, Aa(S, r.corners), S.stroke()) : ol(n, a), S.globalAlpha = u;
      return;
    }
    S.fillStyle = a ? "rgba(0, 112, 243, 0.24)" : s ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Aa(S, r.corners), S.fill(), S.strokeStyle = a ? "rgba(255, 255, 255, 1)" : s ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", S.lineWidth = a ? 2.8 : 1.9, Aa(S, r.corners), S.stroke();
  }
  function ul(n, r, a) {
    S.fillStyle = a, r.corners.forEach((s) => {
      S.beginPath(), S.arc(s.x, s.y, 6.5, 0, Math.PI * 2), S.fill();
    }), Ie(n) && (S.strokeStyle = a, S.lineCap = "round", S.lineWidth = 4, r.edgeMidpoints.forEach((s) => {
      var v, N, C, A;
      const u = (((v = s.b) == null ? void 0 : v.x) ?? s.x) - (((N = s.a) == null ? void 0 : N.x) ?? s.x), f = (((C = s.b) == null ? void 0 : C.y) ?? s.y) - (((A = s.a) == null ? void 0 : A.y) ?? s.y), b = Math.hypot(u, f) || 1, m = u / b, g = f / b, _ = 10;
      S.beginPath(), S.moveTo(s.x - m * _, s.y - g * _), S.lineTo(s.x + m * _, s.y + g * _), S.stroke();
    }), S.lineCap = "butt"), oe(n) || (S.strokeStyle = "rgba(250, 250, 250, 0.9)", S.lineWidth = 1.8, S.beginPath(), S.moveTo(r.rotateStemBase.x, r.rotateStemBase.y), S.lineTo(r.rotateHandle.x, r.rotateHandle.y), S.stroke(), S.fillStyle = a, S.beginPath(), S.arc(r.rotateHandle.x, r.rotateHandle.y, 10, 0, Math.PI * 2), S.fill());
  }
  function ll() {
    var m;
    const [n, r] = tl(), a = Ue(), s = a.length > 1, u = e === "cutout" ? sl() : un(), f = u.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${Ie(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!l._sortedItemsCache || l._sortedItemsCache.src !== u || l._sortedItemsCache.orderKey !== f) && (l._sortedItemsCache = {
      src: u,
      orderKey: f,
      sorted: [...u]
    });
    const b = l._sortedItemsCache.sorted;
    for (const g of b) {
      const _ = !s && yu(g);
      if (l.mode === "frame" && !_ || !l.showObjects && !Ie(g)) continue;
      const v = le(g);
      if (e !== "stickers" && !v.visible)
        continue;
      const N = ue(g), C = ln(g);
      if (cl(g, v, _, C), _ && v.visible) {
        const A = C ? "#ff4d4f" : N && ie(g) ? "#f59e0b" : "#0070f3";
        ul(g, v, A);
      }
    }
    if (s) {
      const g = ya(a);
      if (g != null && g.visible) {
        const _ = ba(a) ? "#ff4d4f" : "#0070f3";
        S.save(), S.strokeStyle = "rgba(255, 255, 255, 0.95)", S.lineWidth = 2, S.setLineDash([6, 4]), S.beginPath(), S.moveTo(g.corners[0].x, g.corners[0].y);
        for (let v = 1; v < g.corners.length; v += 1) S.lineTo(g.corners[v].x, g.corners[v].y);
        S.closePath(), S.stroke(), S.setLineDash([]), S.fillStyle = _, g.corners.forEach((v) => {
          S.beginPath(), S.arc(v.x, v.y, 6.5, 0, Math.PI * 2), S.fill();
        }), S.restore();
      }
    } else
      a.forEach((g) => {
        if (!oe(g) && !ye(g)) return;
        const _ = le(g);
        if (!(_ != null && _.visible)) return;
        const v = ln(g) ? "#ff4d4f" : "#0070f3";
        S.save(), S.strokeStyle = "rgba(255, 255, 255, 0.95)", S.lineWidth = 2, S.setLineDash([6, 4]), S.beginPath(), S.moveTo(_.corners[0].x, _.corners[0].y);
        for (let N = 1; N < _.corners.length; N += 1) S.lineTo(_.corners[N].x, _.corners[N].y);
        S.closePath(), S.stroke(), S.setLineDash([]), oe(g) && (S.fillStyle = v, _.corners.forEach((N) => {
          S.beginPath(), S.arc(N.x, N.y, 6.5, 0, Math.PI * 2), S.fill();
        })), S.restore();
      });
    if (((m = l.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = hs(l.interaction.start, l.interaction.current);
      S.save(), S.strokeStyle = "rgba(255, 255, 255, 0.9)", S.fillStyle = "rgba(255, 255, 255, 0.08)", S.lineWidth = 1, S.setLineDash([5, 4]), S.beginPath(), S.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), S.fill(), S.stroke(), S.restore();
    }
    l.hqFrames && n >= 40 && r >= 30 && (l.hqFrames -= 1, l.hqFrames > 0 && Q());
  }
  function qo(n) {
    const r = fr(n), a = O(Number((r == null ? void 0 : r.aspect) || 1), 0.05, 20), s = 320;
    return a >= 1 ? { width: s, height: Math.max(1, Math.round(s / a)) } : { width: Math.max(1, Math.round(s * a)), height: s };
  }
  function dl() {
    var a;
    const n = Array.isArray(p.stickers) ? p.stickers : [], r = Array.isArray((a = p.painting) == null ? void 0 : a.raster_objects) ? p.painting.raster_objects : [];
    return JSON.stringify({
      stickers: n.map((s) => ({
        id: String((s == null ? void 0 : s.id) || ""),
        asset_id: String((s == null ? void 0 : s.asset_id) || (s == null ? void 0 : s.assetId) || ""),
        source_kind: String((s == null ? void 0 : s.source_kind) || ""),
        source_link_id: Number((s == null ? void 0 : s.source_link_id) ?? -1),
        source_state_hash: String((s == null ? void 0 : s.source_state_hash) || ""),
        visible: (s == null ? void 0 : s.visible) !== !1,
        z_index: Number((s == null ? void 0 : s.z_index) || 0),
        yaw_deg: Number((s == null ? void 0 : s.yaw_deg) || 0),
        pitch_deg: Number((s == null ? void 0 : s.pitch_deg) || 0),
        hFOV_deg: Number((s == null ? void 0 : s.hFOV_deg) || 0),
        vFOV_deg: Number((s == null ? void 0 : s.vFOV_deg) || 0),
        rot_deg: Number((s == null ? void 0 : s.rot_deg) || 0),
        roll_deg: Number((s == null ? void 0 : s.roll_deg) || 0),
        crop: (s == null ? void 0 : s.crop) || null
      })),
      rasters: r.filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").map((s) => ({
        id: String((s == null ? void 0 : s.id) || ""),
        visible: (s == null ? void 0 : s.visible) !== !1,
        z_index: Number((s == null ? void 0 : s.z_index) || 0),
        transform: (s == null ? void 0 : s.transform) || null,
        bbox: (s == null ? void 0 : s.bbox) || null
      }))
    });
  }
  function Yo(n, r = {}) {
    if (!n) return "";
    const a = Wn(), s = a && (a.complete || a.naturalWidth || a.width) ? [
      String(a.currentSrc || a.src || ""),
      Number(a.naturalWidth || a.width || 0),
      Number(a.naturalHeight || a.height || 0)
    ].join("|") : "no_bg", u = qo(n);
    return [
      String((n == null ? void 0 : n.id) || ""),
      JSON.stringify(n || null),
      qn(),
      dl(),
      Sr(),
      s,
      l.showPanorama ? "panorama:1" : "panorama:0",
      l.showObjects ? "objects:1" : "objects:0",
      l.showMask ? "mask:1" : "mask:0",
      `${u.width}x${u.height}`,
      String(r.quality || "balanced")
    ].join("|");
  }
  function Xo(n = {}) {
    var m, g;
    if (e !== "cutout") return null;
    const r = n.shot || Ut();
    if (!r)
      return t.__panoCutoutPreviewSurface = null, null;
    const a = qo(r);
    (!t.__panoCutoutPreviewCanvas || Number(t.__panoCutoutPreviewCanvas.width || 0) !== a.width || Number(t.__panoCutoutPreviewCanvas.height || 0) !== a.height) && (t.__panoCutoutPreviewCanvas = document.createElement("canvas"), t.__panoCutoutPreviewCanvas.width = a.width, t.__panoCutoutPreviewCanvas.height = a.height);
    const s = Yo(r, n);
    if (((m = t.__panoCutoutPreviewSurface) == null ? void 0 : m.source) === t.__panoCutoutPreviewCanvas && ((g = t.__panoCutoutPreviewSurface) == null ? void 0 : g.revision) === s)
      return t.__panoCutoutPreviewSurface;
    const u = t.__panoCutoutPreviewCanvas, f = u.getContext("2d");
    return f ? pl(
      f,
      { x: 0, y: 0, w: a.width, h: a.height },
      r,
      {
        cachePrefix: "shared_cutout_preview_surface",
        quality: String(n.quality || "balanced")
      }
    ) ? (t.__panoCutoutPreviewSurface = {
      source: u,
      revision: s
    }, t.__panoCutoutPreviewSurface) : t.__panoCutoutPreviewSurface || null : (t.__panoCutoutPreviewSurface = null, null);
  }
  function fl() {
    if (e !== "cutout") return;
    const n = Ut();
    if (!n) {
      l.outputPreviewRect = null, D && (D.style.display = "none");
      return;
    }
    const r = 14, a = O(Number(l.outputPreviewAnim ?? (l.outputPreviewExpanded ? 1 : 0)), 0, 1), s = Math.max(120, Math.min(250, I.width * 0.28)), u = Math.max(260, Math.min(560, I.width * 0.62)), f = Math.max(76, Math.min(150, I.height * 0.22)), b = Math.max(160, Math.min(340, I.height * 0.48)), m = $e(s, u, a), g = $e(f, b, a), _ = fr(n), v = Number((_ == null ? void 0 : _.aspect) || 1);
    let N = m, C = N / v;
    C > g && (C = g, N = C * v);
    const A = I.width - r - N, E = r, H = 12;
    l.outputPreviewRect = { x: A, y: E, w: N, h: C };
    const B = () => {
      if (!D) return;
      const st = `${Math.round(A + N - 8 - 24)}px`, J = `${Math.round(E + 8)}px`;
      D.style.display = "inline-flex", D.style.left !== st && (D.style.left = st), D.style.top !== J && (D.style.top = J);
    }, nt = (st, J, V, Y, bt) => {
      const _t = Math.max(0, Math.min(bt, Math.min(V, Y) * 0.5));
      S.beginPath(), typeof S.roundRect == "function" ? S.roundRect(st, J, V, Y, _t) : (S.moveTo(st + _t, J), S.arcTo(st + V, J, st + V, J + Y, _t), S.arcTo(st + V, J + Y, st, J + Y, _t), S.arcTo(st, J + Y, st, J, _t), S.arcTo(st, J, st + V, J, _t)), S.closePath();
    };
    S.save(), S.shadowColor = "rgba(0, 0, 0, 0.45)", S.shadowBlur = 22, S.shadowOffsetX = 0, S.shadowOffsetY = 8, S.fillStyle = "rgba(10, 10, 10, 0.72)", nt(A, E, N, C, H), S.fill(), S.restore(), S.save(), nt(A, E, N, C, H), S.clip();
    const dt = Yo(n, { quality: "balanced" });
    let tt = t.__panoCutoutPreviewSurface;
    (!tt || tt.revision !== dt) && !l.interaction && !l.cutoutPreviewSurfaceRaf && !l.cutoutPreviewSurfaceTimer && (tt = Xo({ shot: n, quality: "balanced" }));
    const it = (tt == null ? void 0 : tt.source) || null, et = !!(it && Number(it.width || 0) > 1 && Number(it.height || 0) > 1);
    if ((tt == null ? void 0 : tt.revision) !== dt && Ia(), !et) {
      S.fillStyle = "rgba(255, 255, 255, 0.06)", S.fillRect(A, E, N, C), S.strokeStyle = "rgba(255, 255, 255, 0.12)", S.lineWidth = 1, S.strokeRect(A + 0.5, E + 0.5, N - 1, C - 1), Ia(), S.restore(), B();
      return;
    }
    S.drawImage(it, A, E, N, C), S.restore(), B();
  }
  function pl(n, r, a, s = {}) {
    const u = Wn();
    return rp({
      owner: t,
      ctx: n,
      rect: r,
      shot: a,
      bgImage: u,
      cachePrefix: String(s.cachePrefix || "modal_cutout_output_preview"),
      quality: String(s.quality || "balanced"),
      drawDisplayList: ui
    });
  }
  function hl() {
    Xo();
  }
  function Ia() {
    if (e !== "cutout") return;
    const n = performance.now(), r = mu(), a = n - Number(l.cutoutPreviewSurfaceLastTs || 0);
    if (l.cutoutPreviewSurfaceRaf || l.cutoutPreviewSurfaceTimer) return;
    const s = () => {
      l.cutoutPreviewSurfaceRaf = requestAnimationFrame(() => {
        var u, f, b, m, g, _, v, N;
        l.cutoutPreviewSurfaceRaf = 0, l.cutoutPreviewSurfaceLastTs = performance.now(), hl(), Ot.dirty = !0, (f = (u = t.__panoDomPreview) == null ? void 0 : u.requestDraw) == null || f.call(u), (b = t.setDirtyCanvas) == null || b.call(t, !0, !1), (g = (m = t.graph) == null ? void 0 : m.setDirtyCanvas) == null || g.call(m, !0, !0), (N = (v = (_ = Pe) == null ? void 0 : _.canvas) == null ? void 0 : v.setDirty) == null || N.call(v, !0, !0);
      });
    };
    if (a >= r) {
      s();
      return;
    }
    l.cutoutPreviewSurfaceTimer = window.setTimeout(() => {
      l.cutoutPreviewSurfaceTimer = 0, l.cutoutPreviewSurfaceRaf || s();
    }, Math.max(0, Math.ceil(r - a)));
  }
  function Ea(n, r) {
    if (!n || !r) return null;
    const a = Number(r.x || 0), s = Number(r.y || 0);
    return Bo(n, a, s);
  }
  function Cr(n) {
    if (!n) return null;
    const r = (Number(n.u || 0) - 0.5) * (2 * Math.PI), a = (0.5 - Number(n.v || 0)) * Math.PI, s = Math.cos(a);
    return tn(s * Math.sin(r), Math.sin(a), s * Math.cos(r));
  }
  function be(n) {
    return !n || typeof n != "object" ? { x: 0, y: 0 } : { x: Number((n == null ? void 0 : n.u) || 0), y: Number((n == null ? void 0 : n.v) || 0) };
  }
  function hn(n, r, a, s = {}) {
    return { ...{
      ...n,
      t: Number((n == null ? void 0 : n.t) || 0),
      widthScale: me(n, "widthScale", 1),
      pressureLike: me(n, "pressureLike", 1)
    }, ...s, u: r, v: a };
  }
  function ml(n, r, a) {
    const s = be(n), u = be(r);
    return hn(n, $e(s.x, u.x, a), $e(s.y, u.y, a), {
      t: $e(Number((n == null ? void 0 : n.t) || 0), Number((r == null ? void 0 : r.t) || 0), a),
      widthScale: $e(me(n, "widthScale", 1), me(r, "widthScale", 1), a),
      pressureLike: $e(me(n, "pressureLike", 1), me(r, "pressureLike", 1), a)
    });
  }
  function gl(n, r = !1) {
    return r ? 12e-4 : 18e-4;
  }
  function Da(n, r, a = !1) {
    if (!Array.isArray(n) || !n.length) return [];
    if (n.length === 1) return [hn(n[0], be(n[0]).x, be(n[0]).y)];
    const s = gl(r, a), u = (v, N) => {
      const C = [0];
      for (let it = 1; it < v.length; it += 1) {
        const et = be(v[it - 1]), st = be(v[it]);
        C.push(C[it - 1] + Math.hypot(st.x - et.x, st.y - et.y));
      }
      const A = C[C.length - 1] || 0;
      if (A <= 1e-8) {
        const it = v[0], et = be(it);
        return [hn(it, et.x, et.y)];
      }
      const E = [];
      let H = 0;
      for (let it = 0; it <= A + 1e-9; it += N) {
        for (; H < C.length - 2 && C[H + 1] < it; ) H += 1;
        const et = C[H], st = C[H + 1], J = Math.max(1e-8, st - et);
        E.push(ml(v[H], v[H + 1], O((it - et) / J, 0, 1)));
      }
      const B = v[v.length - 1], nt = be(B), dt = E[E.length - 1], tt = dt ? be(dt) : null;
      return (!tt || Math.hypot(tt.x - nt.x, tt.y - nt.y) > N * 0.35) && E.push(hn(B, nt.x, nt.y)), E;
    }, f = (v) => {
      if (!Array.isArray(v) || v.length < 3) return v ? v.slice() : [];
      const N = [hn(v[0], be(v[0]).x, be(v[0]).y)];
      for (let C = 0; C < v.length - 1; C += 1) {
        const A = v[C], E = v[C + 1], H = be(A), B = be(E), nt = hn(
          A,
          H.x * 0.75 + B.x * 0.25,
          H.y * 0.75 + B.y * 0.25,
          {
            t: Number(A.t || 0) * 0.75 + Number(E.t || 0) * 0.25,
            widthScale: me(A, "widthScale", 1) * 0.75 + me(E, "widthScale", 1) * 0.25,
            pressureLike: me(A, "pressureLike", 1) * 0.75 + me(E, "pressureLike", 1) * 0.25
          }
        ), dt = hn(
          A,
          H.x * 0.25 + B.x * 0.75,
          H.y * 0.25 + B.y * 0.75,
          {
            t: Number(A.t || 0) * 0.25 + Number(E.t || 0) * 0.75,
            widthScale: me(A, "widthScale", 1) * 0.25 + me(E, "widthScale", 1) * 0.75,
            pressureLike: me(A, "pressureLike", 1) * 0.25 + me(E, "pressureLike", 1) * 0.75
          }
        );
        N.push(nt, dt);
      }
      return N.push(hn(v[v.length - 1], be(v[v.length - 1]).x, be(v[v.length - 1]).y)), N;
    }, b = u(n, s);
    if (b.length < 3) return b;
    const m = a ? 2 : 1;
    let g = b.slice();
    for (let v = 0; v < m; v += 1) g = f(g);
    return u(g, Math.max(s * 0.75, 55e-5));
  }
  function me(n, r, a = 1) {
    const s = Number(n == null ? void 0 : n[r]);
    return Number.isFinite(s) ? Math.max(0, s) : a;
  }
  function yl(n) {
    const r = Number(n == null ? void 0 : n.radiusValue);
    if (Number.isFinite(r) && r > 0) {
      const a = String((n == null ? void 0 : n.radiusModel) || "").trim() || "erp_uv_norm";
      return a === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((n == null ? void 0 : n.size) || 10) * 0.5 / 2048)
      } : {
        model: a,
        value: r
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((n == null ? void 0 : n.size) || 10) * 0.5 / 2048)
    };
  }
  function Cn(n, r) {
    const a = document.createElement("canvas");
    a.width = Math.max(1, Math.round(n)), a.height = Math.max(1, Math.round(r));
    const s = a.getContext("2d");
    return s && (s.clearRect(0, 0, a.width, a.height), s.imageSmoothingEnabled = !0), { canvas: a, ctx: s };
  }
  function An() {
    const n = pi();
    return `${String(l.paintStrokeRevision)}:${n.width}x${n.height}`;
  }
  function qn() {
    const n = pi();
    return `${String(l.paintStrokeRevision)}:${String(l.paintCompositeRevision)}:${n.width}x${n.height}`;
  }
  function bl() {
    l.paintStrokeRevision += 1, l.paintCompositeRevision += 1;
  }
  function vl() {
    l.paintCompositeRevision += 1;
  }
  function _l() {
    l._sortedItemsCache = null, l._strokeGeomCache.clear();
  }
  function Zo() {
    var n, r;
    l.paintEngineRevisionKey = null, (r = (n = l.paintEngine) == null ? void 0 : n.rebuildCommitted) == null || r.call(n, p), l.paintEngineRevisionKey = An();
  }
  function De() {
    l.objectVisualRevision = Number(l.objectVisualRevision || 0) + 1, _l();
  }
  function Ge({ rebuildPaintEngine: n = !1 } = {}) {
    bl(), De(), n && Zo();
  }
  function Ar() {
    vl(), De();
  }
  function Yn() {
    var s;
    const n = pi(), r = `${n.width}x${n.height}`;
    l.paintEngineDescriptorKey !== r && (l.paintEngine = oo(n), l.paintEngineDescriptorKey = r, l.paintEngineRevisionKey = "");
    const a = An();
    l.paintEngineRevisionKey !== a && (l.paintEngineRevisionKey = a, (s = l.paintEngine) == null || s.rebuildCommitted(p));
  }
  function pi() {
    const n = Wn(), r = Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0), a = Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0);
    if (r > 1 && a > 1)
      return { kind: "ERP_GLOBAL", width: r, height: a };
    const s = Math.max(1, Number((p == null ? void 0 : p.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: s,
      height: Math.max(1, Math.round(s * 0.5))
    };
  }
  function en() {
    return pi();
  }
  function wl(n, r, a, s, u = null) {
    const f = yl(n), b = me(r, "widthScale", 1) * me(r, "pressureLike", 1);
    return f.model === "erp_uv_norm" ? Math.max(0.5, f.value * a * b) : f.model === "world_angle" ? u ? Math.max(0.5, f.value / Math.max(1e-6, Number(u.hFOV_deg || 90) * fe) * a * b) : Math.max(0.5, f.value / (2 * Math.PI) * a * b) : Math.max(0.5, Number((n == null ? void 0 : n.size) || 10) * 0.5 * b);
  }
  function xl(n, r, a = {}) {
    const s = String((r == null ? void 0 : r.layerKind) || "paint"), u = String((r == null ? void 0 : r.toolKind) || "pen"), f = a.preview === !0, b = f ? 0.78 : 1;
    if (n.globalAlpha = u === "marker" ? 0.7 * b : 1, s === "mask") {
      n.fillStyle = f ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (u === "eraser") {
      n.globalCompositeOperation = "destination-out", n.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const m = String((r == null ? void 0 : r.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, g = f ? Math.max(0.28, Number(m.a ?? 1) * 0.88) : Math.max(0.12, Number(m.a ?? 1));
    n.fillStyle = `rgba(${Math.round(Number(m.r || 0) * 255)}, ${Math.round(Number(m.g || 0) * 255)}, ${Math.round(Number(m.b || 0) * 255)}, ${g})`;
  }
  function Sl(n, r, a) {
    const s = Math.max(0.5, Math.min(a, Number((r == null ? void 0 : r.radiusPx) || 0.5)));
    !Number.isFinite(r == null ? void 0 : r.x) || !Number.isFinite(r == null ? void 0 : r.y) || !Number.isFinite(s) || (n.beginPath(), n.arc(Number(r.x || 0), Number(r.y || 0), s, 0, Math.PI * 2), n.fill());
  }
  function Nl(n, r, a, s, u = {}) {
    if (!n || !Array.isArray(r) || !r.length) return;
    const f = Math.max(s.w, s.h) * 0.25;
    n.save(), xl(n, a, u);
    const b = (m) => Sl(n, m, f);
    if (r.length === 1) {
      b(r[0]), n.restore();
      return;
    }
    for (let m = 0; m < r.length - 1; m += 1) {
      const g = r[m], _ = r[m + 1];
      if (!g || !_) continue;
      const v = Number(g.x || 0), N = Number(g.y || 0), C = Number(_.x || 0), A = Number(_.y || 0), E = Math.max(0.5, Math.min(f, Number(g.radiusPx || 0.5))), H = Math.max(0.5, Math.min(f, Number(_.radiusPx || 0.5)));
      if (!Number.isFinite(v) || !Number.isFinite(N) || !Number.isFinite(C) || !Number.isFinite(A) || !Number.isFinite(E) || !Number.isFinite(H)) continue;
      const B = C - v, nt = A - N, dt = Math.hypot(B, nt);
      if (!Number.isFinite(dt) || dt < 1e-6) {
        b(g);
        continue;
      }
      if (dt > Math.max(s.w, s.h) * 0.5) continue;
      const tt = Math.max(0.5, Math.min(E, H)), it = Math.max(0.35, Math.min(tt * 0.4, 2.25)), et = Math.max(1, Math.ceil(dt / it));
      for (let st = 0; st <= et; st += 1) {
        const J = st / et;
        b({
          x: $e(v, C, J),
          y: $e(N, A, J),
          radiusPx: $e(E, H, J)
        });
      }
    }
    b(r[r.length - 1]), n.restore();
  }
  function Ml(n, r, a, s) {
    Nl(n, r, a, s, { preview: !1 });
  }
  function kl(n, r, a, s, u) {
    var m, g, _, v;
    if (!n || !Array.isArray(r) || r.length < 3) return;
    const f = "u", b = "v";
    if (n.save(), String((a == null ? void 0 : a.layerKind) || "") === "mask")
      n.fillStyle = "rgba(255,255,255,1)";
    else if (String((a == null ? void 0 : a.toolKind) || "") === "eraser")
      n.globalCompositeOperation = "destination-out", n.fillStyle = "rgba(0,0,0,1)";
    else {
      const N = (a == null ? void 0 : a.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      n.fillStyle = `rgba(${Math.round(Number(N.r || 0) * 255)}, ${Math.round(Number(N.g || 0) * 255)}, ${Math.round(Number(N.b || 0) * 255)}, ${Number(N.a ?? 1)})`;
    }
    n.beginPath(), n.moveTo(Number(((m = r[0]) == null ? void 0 : m[f]) || 0) * s.w, Number(((g = r[0]) == null ? void 0 : g[b]) || 0) * s.h);
    for (let N = 1; N < r.length; N += 1)
      n.lineTo(Number(((_ = r[N]) == null ? void 0 : _[f]) || 0) * s.w, Number(((v = r[N]) == null ? void 0 : v[b]) || 0) * s.h);
    n.closePath(), n.fill(), n.restore();
  }
  function Jo(n) {
    const r = (n == null ? void 0 : n.geometry) || null;
    return r ? String(r.geometryKind || "") === "lasso_fill" ? Array.isArray(r.points) ? r.points : [] : Array.isArray(r.processedPoints) && r.processedPoints.length ? r.processedPoints : Array.isArray(r.rawPoints) && r.rawPoints.length ? r.rawPoints : Array.isArray(r.points) ? r.points : [] : [];
  }
  function Pl(n, r) {
    const a = Jo(n);
    return !Array.isArray(a) || !a.length ? [] : a.map((s) => ({
      x: Number((s == null ? void 0 : s.u) || 0) * Number((r == null ? void 0 : r.w) || 1),
      y: Number((s == null ? void 0 : s.v) || 0) * Number((r == null ? void 0 : r.h) || 1),
      radiusPx: wl(n, s, Number((r == null ? void 0 : r.w) || 1), Number((r == null ? void 0 : r.h) || 1))
    }));
  }
  function Qo(n, r, a = null) {
    var m, g, _, v;
    if (!(n != null && n.ctx) || !r) return !1;
    const s = a || { w: Number(((m = n.canvas) == null ? void 0 : m.width) || 0), h: Number(((g = n.canvas) == null ? void 0 : g.height) || 0) }, u = String((r == null ? void 0 : r.toolKind) || "") === "eraser" ? {
      ...r,
      layerKind: "mask",
      toolKind: String(((_ = r == null ? void 0 : r.geometry) == null ? void 0 : _.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : r;
    if (String(((v = r == null ? void 0 : r.geometry) == null ? void 0 : v.geometryKind) || "") === "lasso_fill")
      return kl(n.ctx, Jo(u), u, s), !0;
    const b = Pl(u, s);
    return b.length ? (Ml(n.ctx, b, u, s), !0) : !1;
  }
  function Cl(n, r, a, s = 8) {
    const u = new Uint8Array(r * a), f = [], b = new Int32Array(r * a), m = new Int32Array(r * a);
    for (let g = 0; g < a; g += 1)
      for (let _ = 0; _ < r; _ += 1) {
        const v = g * r + _;
        if (u[v] || n[v] <= s) continue;
        let N = 0, C = 0;
        b[C] = _, m[C] = g, C += 1, u[v] = 1;
        const A = [];
        let E = _, H = g, B = _, nt = g;
        for (; N < C; ) {
          const dt = b[N], tt = m[N];
          N += 1, A.push({ x: dt, y: tt }), dt < E && (E = dt), tt < H && (H = tt), dt > B && (B = dt), tt > nt && (nt = tt);
          const it = [
            [dt - 1, tt],
            [dt + 1, tt],
            [dt, tt - 1],
            [dt, tt + 1]
          ];
          for (const [et, st] of it) {
            if (et < 0 || st < 0 || et >= r || st >= a) continue;
            const J = st * r + et;
            u[J] || n[J] <= s || (u[J] = 1, b[C] = et, m[C] = st, C += 1);
          }
        }
        f.push({ pixels: A, minX: E, minY: H, maxX: B, maxY: nt });
      }
    return f;
  }
  function Al(n, r, a = {}) {
    var _;
    const s = Number((n == null ? void 0 : n.width) || 0), u = Number((n == null ? void 0 : n.height) || 0), f = (_ = n == null ? void 0 : n.getContext) == null ? void 0 : _.call(n, "2d");
    if (!f || s < 1 || u < 1) return [];
    const b = f.getImageData(0, 0, s, u), m = new Uint8Array(s * u);
    for (let v = 0; v < m.length; v += 1) m[v] = b.data[v * 4 + 3];
    return Cl(m, s, u, 8).map((v, N) => {
      const C = v.maxX - v.minX + 1, A = v.maxY - v.minY + 1, E = document.createElement("canvas");
      E.width = C, E.height = A;
      const H = E.getContext("2d");
      if (!H) return null;
      const B = H.createImageData(C, A);
      return v.pixels.forEach(({ x: nt, y: dt }) => {
        const tt = (dt * s + nt) * 4, it = ((dt - v.minY) * C + (nt - v.minX)) * 4;
        B.data[it + 0] = b.data[tt + 0], B.data[it + 1] = b.data[tt + 1], B.data[it + 2] = b.data[tt + 2], B.data[it + 3] = b.data[tt + 3];
      }), H.putImageData(B, 0, 0), {
        id: or("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((a == null ? void 0 : a.z_index) || 0) + N * 1e-3,
        locked: (a == null ? void 0 : a.locked) === !0,
        bbox: {
          u0: v.minX / s,
          v0: v.minY / u,
          u1: (v.maxX + 1) / s,
          v1: (v.maxY + 1) / u
        },
        rasterDataUrl: E.toDataURL("image/png"),
        transform: {
          du: 0,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Ir(n, r) {
    if (!n || !r) return null;
    const a = di(n), s = Oe(r, a.centerDir);
    if (!Number.isFinite(s) || s <= 1e-6) return null;
    const u = Oe(r, a.right) / s, f = Oe(r, a.up) / s, b = u * a.cr + f * a.sr, m = -u * a.sr + f * a.cr;
    return {
      x: (b / Math.max(1e-6, a.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, a.tanY)) * 0.5
    };
  }
  function Il(n) {
    if (!Array.isArray(n) || n.length < 3) return [];
    if (l.mode === "unwrap") {
      const a = dn();
      return n.map((s) => ({
        x: a.x + Number(s.u || 0) * a.w,
        y: a.y + Number(s.v || 0) * a.h
      }));
    }
    const r = n.map((a) => Mr(Cr(a))).filter(Boolean);
    return r.every((a) => Number(a.z || 0) > 0) ? r.map((a) => ({ x: Number(a.x || 0), y: Number(a.y || 0) })) : [];
  }
  function El(n) {
    if (!Array.isArray(n) || n.length < 1) return [];
    if (l.mode === "unwrap") {
      const a = dn();
      return n.map((s) => ({
        x: a.x + Number(s.u || 0) * a.w,
        y: a.y + Number(s.v || 0) * a.h
      }));
    }
    const r = n.map((a) => Mr(Cr(a))).filter(Boolean);
    return r.every((a) => Number(a.z || 0) > 0) ? r.map((a) => ({ x: Number(a.x || 0), y: Number(a.y || 0) })) : [];
  }
  function Dl(n, r = 160) {
    if (!Array.isArray(n) || n.length < 3) return !1;
    for (let a = 0; a < n.length; a += 1) {
      const s = n[a], u = n[(a + 1) % n.length];
      if (!s || !u || !Number.isFinite(s.x) || !Number.isFinite(s.y) || !Number.isFinite(u.x) || !Number.isFinite(u.y) || Math.hypot(Number(u.x) - Number(s.x), Number(u.y) - Number(s.y)) > r) return !1;
    }
    return !0;
  }
  function Ll(n, r, a) {
    if (!Array.isArray(n) || n.length < 3 || !r || !a) return [];
    const s = [];
    for (const u of n) {
      const f = Cr(u), b = Ir(r, f);
      if (!b) return [];
      s.push({
        x: Number(a.x || 0) + Number(b.x || 0) * Number(a.w || 0),
        y: Number(a.y || 0) + Number(b.y || 0) * Number(a.h || 0)
      });
    }
    return Dl(s, Math.max(80, Math.max(a.w, a.h) * 0.75)) ? s : [];
  }
  function Tl(n, r, a) {
    if (!Array.isArray(n) || n.length < 1 || !r || !a) return [];
    const s = [];
    for (const u of n) {
      const f = Cr(u), b = Ir(r, f);
      b && s.push({
        x: Number(a.x || 0) + Number(b.x || 0) * Number(a.w || 0),
        y: Number(a.y || 0) + Number(b.y || 0) * Number(a.h || 0)
      });
    }
    return s;
  }
  function Rl() {
    var s;
    const n = Ut(), r = ve(n), a = Wn();
    if (!n || !r) return !1;
    if (S.save(), S.fillStyle = "#050505", S.fillRect(0, 0, I.width, I.height), S.shadowColor = "rgba(0, 0, 0, 0.45)", S.shadowBlur = 24, S.shadowOffsetX = 0, S.shadowOffsetY = 10, S.fillStyle = "rgba(14, 14, 14, 1)", S.fillRect(r.x, r.y, r.w, r.h), S.restore(), S.save(), S.beginPath(), S.rect(r.x, r.y, r.w, r.h), S.clip(), a && (a.complete || a.naturalWidth || a.width) && Number(a.naturalWidth || a.width || 0) > 1 && Number(a.naturalHeight || a.height || 0) > 1) {
      const u = fr(n);
      ui(S, r, u, a, `modal_frame_${String(n.id || "")}`) || drawCutoutProjectionPreview(
        S,
        t,
        a,
        r,
        n,
        String(((s = p.ui_settings) == null ? void 0 : s.preview_quality) || "balanced")
      );
    } else
      S.fillStyle = "rgba(255, 255, 255, 0.03)", S.fillRect(r.x, r.y, r.w, r.h);
    return S.restore(), S.save(), S.strokeStyle = "rgba(255, 255, 255, 0.12)", S.lineWidth = 1, S.strokeRect(r.x + 0.5, r.y + 0.5, r.w - 1, r.h - 1), S.restore(), !0;
  }
  function Fl() {
    var g, _;
    if (((g = l.interaction) == null ? void 0 : g.kind) !== "paint_lasso_fill") return;
    const n = l.interaction.stroke, r = (_ = n == null ? void 0 : n.geometry) == null ? void 0 : _.points;
    let a;
    if (l.mode === "frame") {
      const v = Ut(), N = ve(v);
      a = Ll(r, v, N);
    } else
      a = Il(r);
    if (!Array.isArray(a) || a.length < 3) return;
    const s = String((n == null ? void 0 : n.layerKind) || "") === "mask", u = (n == null ? void 0 : n.color) || { r: 1, g: 0.25, b: 0.25 }, f = Math.round(Number(u.r || 0) * 255), b = Math.round(Number(u.g || 0) * 255), m = Math.round(Number(u.b || 0) * 255);
    S.save(), S.beginPath(), S.moveTo(Number(a[0].x || 0), Number(a[0].y || 0));
    for (let v = 1; v < a.length; v++) S.lineTo(Number(a[v].x || 0), Number(a[v].y || 0));
    S.closePath(), s ? (S.lineWidth = 2, S.setLineDash([6, 6]), S.lineDashOffset = 0, S.strokeStyle = "rgba(0,0,0,0.96)", S.stroke(), S.lineDashOffset = -6, S.strokeStyle = "rgba(255,255,255,0.96)", S.stroke(), S.setLineDash([]), S.lineDashOffset = 0) : (S.lineWidth = 1.5, S.setLineDash([6, 4]), S.strokeStyle = `rgba(${f},${b},${m},1)`, S.stroke(), S.setLineDash([])), S.restore();
  }
  function Ol() {
    l.mode === "frame" ? Rl() : l.mode === "unwrap" ? el(!1) : nl(!1), ll(), l.mode !== "frame" && fl(), Fl(), Z && (Z.textContent = `${Math.round(l.viewFov)}°`), Dt(), Ot.hasPresentedFrame || (Ot.hasPresentedFrame = !0, I.style.opacity = "1");
  }
  function $l() {
    var r;
    if (e !== "cutout") return !1;
    const n = String(((r = l.interaction) == null ? void 0 : r.kind) || "");
    return n === "move" || n === "scale" || n === "scale_x" || n === "scale_y" || n === "rotate";
  }
  function zl(n = {}) {
    var s, u, f, b;
    const r = n.updateCutoutPreview !== !1;
    if (t.__panoLiveStateOverride = p, e === "cutout") {
      t.__panoLivePaintSurface = null, r && Ia();
      return;
    }
    let a = null;
    try {
      const m = xr(!1), g = ni(), _ = ((b = (f = (u = (s = l.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : u.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : b.canvas) || null, v = g ? null : Uo(m), N = g ? _ || v : v || _;
      N && (a = {
        source: N,
        revision: `${qn()}:${Sr()}`
      });
    } catch {
      a = null;
    }
    t.__panoLivePaintSurface = a;
  }
  function Q(n = {}) {
    var f, b, m, g, _, v, N, C;
    const r = !!n.localOnly, a = String(n.cause || "");
    r && ni() && (l.livePaintInteractionRevision += 1), (!r || a === "selection" || a === "mode" || a === "cutout_frame") && (oi(), si());
    const u = e === "cutout" && (!r || a === "paint" || a === "cutout_frame" || a === "frame_transform" || a === "frame_view" || Po() || $l());
    zl({ updateCutoutPreview: u }), (u || !r || e !== "cutout") && ((b = (f = t.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || b.call(f), (m = t.setDirtyCanvas) == null || m.call(t, !0, !1)), r || ((_ = (g = t.graph) == null ? void 0 : g.setDirtyCanvas) == null || _.call(g, !0, !0), (C = (N = (v = Pe) == null ? void 0 : v.canvas) == null ? void 0 : N.setDirty) == null || C.call(N, !0, !0)), Ot.dirty = !0;
  }
  function ts() {
    const n = I.getBoundingClientRect(), r = Math.max(2, Math.round(n.width)), a = Math.max(2, Math.round(n.height));
    return I.width !== r || I.height !== a ? (I.width = r, I.height = a, Ot.dirty = !0, e === "cutout" && (Ot.pendingStableLayoutFrames = Math.max(Number(Ot.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function La(n = performance.now()) {
    var r;
    if (Ot.running) {
      if (Ot.lastTickTs = n, l.outputPreviewAnim !== l.outputPreviewAnimTo) {
        const a = Math.max(1, Number(l.outputPreviewAnimDurationMs)), s = O((n - Number(l.outputPreviewAnimStartTs || 0)) / a, 0, 1), f = l.outputPreviewAnimTo > l.outputPreviewAnimFrom ? bp(s) : vp(s);
        l.outputPreviewAnim = $e(l.outputPreviewAnimFrom, l.outputPreviewAnimTo, f), Ot.dirty = !0, s >= 1 && (l.outputPreviewAnim = l.outputPreviewAnimTo);
      }
      if ((r = l.viewTween) != null && r.active) {
        const a = l.viewTween, s = O((n - a.startTs) / a.durationMs, 0, 1), u = yp(s);
        l.viewYaw = pe(a.startYaw + a.deltaYaw * u), l.viewPitch = a.startPitch + (a.targetPitch - a.startPitch) * u, l.viewFov = a.startFov + (a.targetFov - a.startFov) * u, Ot.dirty = !0, s >= 1 && (l.viewTween = null);
      }
      if (l.viewInertia.vx = Number(de.state.inertia.vx || 0), l.viewInertia.vy = Number(de.state.inertia.vy || 0), l.viewInertia.active = !!de.state.inertia.active, de.stepInertia(n) && (l.viewInertia.vx = Number(de.state.inertia.vx || 0), l.viewInertia.vy = Number(de.state.inertia.vy || 0), l.viewInertia.active = !!de.state.inertia.active, Ot.dirty = !0), (Ot.dirty || n - Ot.lastSizeCheckTs >= 220) && (ts(), Ot.lastSizeCheckTs = n), Ot.pendingStableLayoutFrames > 0 && (Ot.pendingStableLayoutFrames -= 1, Ot.dirty = !0), Ot.dirty) {
        if (Ot.pendingStableLayoutFrames > 0) {
          Ot.rafId = requestAnimationFrame(La);
          return;
        }
        Ot.dirty = !1, Ol();
      }
      Ot.rafId = requestAnimationFrame(La);
    }
  }
  function Vl() {
    Ot.running = !1, Ot.rafId && cancelAnimationFrame(Ot.rafId), Ot.rafId = 0;
  }
  function Kt() {
    o || (l.historyController.commitActionGroup(JSON.stringify(_c(p))), za());
  }
  function Er(n) {
    if (o) return;
    const r = n < 0 ? l.historyController.undo() : l.historyController.redo();
    if (za(), !r) return;
    const a = JSON.parse(r);
    Object.keys(p).forEach((s) => delete p[s]), Object.assign(p, a), l.selectedId = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, l.selectedIds = l.selectedId ? [l.selectedId] : [], Ge(), Me(), $t(), je(), Q({ cause: "cutout_frame" });
  }
  function es() {
    var a, s;
    const n = Array.isArray((a = l.historyController) == null ? void 0 : a.entries) ? l.historyController.entries : [], r = Number((s = l.historyController) == null ? void 0 : s.index);
    return {
      canUndo: !o && n.length > 1 && r > 0,
      canRedo: !o && n.length > 1 && r >= 0 && r < n.length - 1
    };
  }
  function Me() {
    var b, m, g;
    z == null || z.querySelectorAll("[data-tool-mode]").forEach((_) => {
      const v = _.getAttribute("data-tool-mode") === l.primaryTool;
      _.classList.toggle("active", v), _.setAttribute("aria-pressed", v ? "true" : "false");
    });
    const n = l.primaryTool === "paint" || l.primaryTool === "mask";
    if (ut && Tt(n), !n) {
      lt.forEach((_) => {
        _.classList.remove("is-active");
      }), ft && (ft.hidden = !0);
      return;
    }
    const r = l.primaryTool, a = lt.find((_) => String(_.getAttribute("data-paint-pane") || "") === r) || null;
    if (lt.forEach((_) => {
      _.classList.toggle("is-active", _ === a);
    }), Pt.forEach((_) => {
      _.hidden = !1;
    }), It.forEach((_) => {
      _.hidden = !1;
    }), Ht && (clearTimeout(Ht), Ht = 0), k.querySelectorAll("[data-paint-tool]").forEach((_) => {
      _.classList.toggle("active", _.getAttribute("data-paint-tool") === l.paintTool);
    }), k.querySelectorAll("[data-mask-tool]").forEach((_) => {
      _.classList.toggle("active", _.getAttribute("data-mask-tool") === l.maskTool);
    }), ht) {
      const _ = l.paintTool !== "eraser";
      ht.hidden = !1, ht.classList.toggle("disabled", !_), !_ && ft && !ft.hidden && (Ht = window.setTimeout(() => {
        ft.hidden = !0, Ht = 0;
      }, 170));
      const v = ((b = Ki.find((C) => Wi(l.paintColor, C.color))) == null ? void 0 : b.id) || "";
      ht.querySelectorAll("[data-paint-color-swatch]").forEach((C) => {
        const A = C.getAttribute("data-paint-color-swatch") === v;
        C.classList.toggle("active", A), C.setAttribute("aria-pressed", A ? "true" : "false"), C.disabled = !_;
      });
      const N = ht.querySelector("[data-paint-color-custom]");
      if (N) {
        const C = !v;
        N.classList.toggle("active", C), N.style.setProperty("--custom-color", ze(l.customPaintColor, 1)), N.setAttribute("aria-pressed", C ? "true" : "false"), N.disabled = !_;
      }
      if ($ && ($.value = String(Math.round(O(Number(((m = l.customPaintColor) == null ? void 0 : m.a) ?? 1), 0, 1) * 100))), mt && (mt.textContent = `${Math.round(O(Number(((g = l.customPaintColor) == null ? void 0 : g.a) ?? 1), 0, 1) * 100)}%`), Mt && (Mt.style.background = ze(l.customPaintColor)), ft) {
        const C = Ur(l.customPaintColor);
        ft.style.setProperty("--picker-hue-color", ze({ ...ro(C.h, 1, 1), a: 1 }, 1)), ft.style.setProperty("--picker-sat", `${O(C.s, 0, 1) * 100}%`), ft.style.setProperty("--picker-val", `${(1 - O(C.v, 0, 1)) * 100}%`), ft.style.setProperty("--picker-hue", `${O(C.h, 0, 1) * 100}%`);
      }
      if (gt) {
        const C = Ur(l.customPaintColor);
        gt.style.left = `${O(C.s, 0, 1) * 100}%`, gt.style.top = `${(1 - O(C.v, 0, 1)) * 100}%`;
      }
      if (ee) {
        const C = Ur(l.customPaintColor);
        ee.style.left = `${O(C.h, 0, 1) * 100}%`;
      }
      if (pt && St) {
        const C = Array.from({ length: 8 }, (A, E) => l.customPaintHistory[E] || null);
        St.innerHTML = C.map((A, E) => `
          <button class="pano-paint-color-history-dot${A ? "" : " empty"}" type="button" data-paint-history-index="${E}" ${A ? `style="--swatch:${ze(A, 1)}"` : ""} aria-label="Recent color ${E + 1}" ${A ? "" : "disabled"}></button>
        `).join(""), St.querySelectorAll("[data-paint-history-index]").forEach((A) => {
          A.onclick = () => {
            const E = Number(A.getAttribute("data-paint-history-index")), H = l.customPaintHistory[E];
            H && (l.customPaintColor = ke(H), l.paintColor = ke(H), Me());
          };
        });
      }
    }
    const s = gn(l.primaryTool === "paint" ? l.paintTool : l.maskTool), u = l.brushSizes[s] ?? 10, f = Mu();
    Pt.forEach((_) => {
      _.classList.toggle("disabled", f);
    }), Bt.forEach((_) => {
      _.value = String(u);
      const v = (u - 1) / 119 * 100;
      _.style.setProperty("--v", `${O(v, 0, 100)}%`), _.disabled = f;
    }), Vt.forEach((_) => {
      _.textContent = String(u);
    });
  }
  function Xn(n, r, a, s, u, f, b, m = !0) {
    const g = document.createElement("div");
    g.dataset.key = a, g.dataset.min = String(u), g.dataset.max = String(f), g.className = "pano-field", g.innerHTML = `<label>${s}</label><input type='range' min='${u}' max='${f}' step='${b}' value='${Number(r[a] || 0)}'><input type='number' min='${u}' max='${f}' step='${b}' value='${io(r[a] || 0)}'>`;
    const [_, v] = g.querySelectorAll("input"), N = () => {
      const A = Number(u), E = Number(f), B = (Number(_.value) - A) / Math.max(1e-6, E - A) * 100;
      _.style.setProperty("--v", `${O(B, 0, 100)}%`);
    };
    _.disabled = !m, v.disabled = !m;
    const C = (A) => {
      if (!m) return;
      let E = Number(A);
      Number.isNaN(E) && (E = 0), E = O(E, u, f), a === "yaw_deg" && (E = pe(E)), r[a] = E, e === "cutout" && (a === "hFOV_deg" || a === "vFOV_deg") && (r.aspect_id = Rn(r)), _.value = String(E), v.value = io(E), N(), Q();
    };
    _.oninput = () => C(_.value), v.oninput = () => C(v.value), _.onchange = () => Kt(), v.onchange = () => Kt(), N(), n.appendChild(g);
  }
  function Ta() {
    const n = Jt();
    if (!n) return;
    l.panelLastValues = {
      yaw_deg: Number(n.yaw_deg || 0),
      pitch_deg: Number(n.pitch_deg || 0),
      hFOV_deg: Number(n.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(n.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(n.rot_deg || 0),
      roll_deg: Number(n.roll_deg || 0),
      aspect_id: ar(n)
    }, K.querySelectorAll(".pano-field[data-key]").forEach((f) => {
      const b = f.dataset.key;
      if (!b || !(b in n)) return;
      const m = f.querySelector("input[type='range']"), g = f.querySelector("input[type='number']");
      if (!m || !g) return;
      const _ = Number(f.dataset.min ?? m.min ?? 0), v = Number(f.dataset.max ?? m.max ?? 0);
      let N = Number(n[b] || 0);
      Number.isNaN(N) && (N = 0), N = O(N, _, v);
      const C = String(N);
      m.value !== C && (m.value = C);
      const A = io(N);
      g.value !== A && (g.value = A);
      const E = (N - _) / Math.max(1e-6, v - _) * 100;
      m.style.setProperty("--v", `${O(E, 0, 100)}%`);
    });
    const a = ar(n), s = K.querySelector(".pano-cutout-aspect-label span");
    s && (s.textContent = a), K.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]").forEach((f) => {
      f.classList.toggle("active", String(f.getAttribute("data-aspect")) === a);
    });
  }
  function $t() {
    var Y, bt, _t, vt, wt, Nt, kt, At, qt, nn, rn, Tr, Si, Qn, tr, Rr;
    if (c) return;
    const n = [...K.children].slice(0, 2);
    K.innerHTML = "", n.forEach((yt) => K.appendChild(yt));
    const r = K.querySelector(".pano-side-actions");
    if (r && (r.innerHTML = ""), d) {
      const yt = document.createElement("div");
      yt.className = "pano-inspector";
      const Rt = document.createElement("details");
      Rt.className = "pano-ui-settings", Rt.open = !1, Rt.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${at.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(Y = p.ui_settings) != null && Y.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(bt = p.ui_settings) != null && bt.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(_t = p.ui_settings) != null && _t.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(vt = p.ui_settings) != null && vt.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(wt = p.ui_settings) != null && wt.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Nt = p.ui_settings) != null && Nt.invert_view_y ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label for="pano-ui-quality">Render Quality</label>
          <div class="pano-picker pano-ui-picker" data-ui-picker="quality">
            <button class="pano-picker-trigger" type="button">
              <span class="pano-picker-label"></span>
              <span class="pano-picker-caret">▾</span>
            </button>
            <div class="pano-picker-pop" hidden></div>
          </div>
        </div>
        <div class="pano-ui-row">
          <span></span>
          <button class="pano-btn subtle" type="button" data-action="ui-reset-defaults">Reset Defaults</button>
        </div>
      </div>
    `;
      const ae = Rt.querySelector("[data-setting='invert-x']"), Be = Rt.querySelector("[data-setting='invert-y']"), an = Rt.querySelector("[data-ui-picker='quality']"), Ke = Rt.querySelector("[data-action='ui-reset-defaults']"), on = (Wt, re, Re, er) => {
        const yn = Wt.querySelector(".pano-picker-trigger"), Fr = Wt.querySelector(".pano-picker-label"), Fe = Wt.querySelector(".pano-picker-pop"), bn = () => {
          const qe = String(Re()), Ye = re.find((Or) => String(Or.value) === qe) || re[0];
          Fr.textContent = Ye.label, Fe.innerHTML = "", re.forEach((Or) => {
            const $r = document.createElement("button");
            $r.type = "button", $r.className = `pano-picker-item${String(Or.value) === qe ? " active" : ""}`, $r.textContent = Or.label, $r.onclick = () => {
              er(Or.value), Fe.hidden = !0, bn(), mn(), Q();
            }, Fe.appendChild($r);
          });
        };
        return yn.onclick = (qe) => {
          qe.stopPropagation(), Rt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((Ye) => {
            Ye !== Fe && (Ye.hidden = !0);
          }), Fe.hidden = !Fe.hidden;
        }, bn(), bn;
      }, We = (Wt, re) => {
        Wt.setAttribute("data-selected", re ? "1" : "0"), Wt.querySelectorAll(".pano-segment-btn").forEach((Re) => {
          Re.setAttribute("aria-pressed", Re.getAttribute("data-value") === (re ? "1" : "0") ? "true" : "false");
        });
      };
      ae.querySelectorAll(".pano-segment-btn").forEach((Wt) => {
        Wt.onclick = () => {
          const re = Wt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = re, We(ae, re), mn(), Q();
        };
      }), Be.querySelectorAll(".pano-segment-btn").forEach((Wt) => {
        Wt.onclick = () => {
          const re = Wt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = re, We(Be, re), mn(), Q();
        };
      });
      const xt = on(
        an,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(p.ui_settings.preview_quality || "balanced"),
        (Wt) => {
          const re = String(Wt || "balanced");
          p.ui_settings.preview_quality = re === "draft" || re === "high" ? re : "balanced";
        }
      );
      Ke.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", We(ae, !1), We(Be, !1), xt(), mn(), Q();
      }, yt.appendChild(Rt), K.appendChild(yt);
      const zt = document.createElement("div");
      zt.className = "pano-side-footer", zt.innerHTML = '<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>', zt.querySelector("[data-action='close-preview']").onclick = () => Lr(), K.appendChild(zt), Dr(yt);
      return;
    }
    const a = Jt(), s = Ue(), u = Do();
    s.length > 1 && (l.panelLastValues = l.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), a && u !== "stroke" && (l.panelLastValues = {
      yaw_deg: Number(a.yaw_deg || 0),
      pitch_deg: Number(a.pitch_deg || 0),
      hFOV_deg: Number(a.hFOV_deg || (u === "image" ? 30 : 90)),
      vFOV_deg: Number(a.vFOV_deg || (u === "image" ? 30 : 60)),
      rot_deg: Number(a.rot_deg || 0),
      roll_deg: Number(a.roll_deg || 0),
      aspect_id: ar(a)
    });
    const f = l.panelLastValues || (e === "stickers" || u === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), b = u === "stroke" ? null : a, m = b || f, g = !!b, _ = document.createElement("div");
    _.className = "pano-inspector";
    const v = document.createElement("div");
    for (v.innerHTML = `
      <div class="pano-section-title">
        <span>Transform</span>
      </div>
    `; v.firstChild; ) _.appendChild(v.firstChild);
    if (K.appendChild(_), e === "stickers" || e === "cutout") {
      const yt = document.createElement("div");
      yt.className = "pano-field-wide pano-target-row";
      const Rt = "Selection";
      yt.innerHTML = `
        <label>${Rt}</label>
        <div class="pano-picker">
          <button class="pano-picker-trigger" type="button">
            <span class="pano-picker-label"></span>
            <span class="pano-picker-caret">▾</span>
          </button>
          <div class="pano-picker-pop" hidden></div>
        </div>
      `;
      const ae = yt.querySelector(".pano-picker-trigger"), Be = yt.querySelector(".pano-picker-label"), an = yt.querySelector(".pano-picker-pop"), Ke = [{ id: "", label: e === "stickers" ? "No image" : "Nothing selected", item: null }];
      e === "stickers" ? un().forEach((xt, zt) => {
        var Re, er;
        const Wt = ie(xt) ? String(xt.id || En) : String(((er = (Re = p.assets) == null ? void 0 : Re[xt.asset_id]) == null ? void 0 : er.name) || xt.asset_id || xt.id), re = `${zt + 1}. ${Wt}${ie(xt) && Bn(xt) ? " (hidden)" : ""}`;
        Ke.push({ id: xt.id, label: re, item: xt, kind: "image" });
      }) : wu().forEach((xt) => {
        Ke.push({ id: xt.item.id, label: xt.label, item: xt.item, kind: xt.kind });
      });
      const on = (b == null ? void 0 : b.id) || "", We = Ke.find((xt) => xt.id === on) || Ke[0];
      Be.innerHTML = We.item ? Lo(We) : Gr(String(We.label || "")), an.innerHTML = "", Ke.forEach((xt) => {
        const zt = document.createElement("button");
        zt.type = "button", zt.className = `pano-picker-item${xt.id === on ? " active" : ""}`, zt.innerHTML = xt.item ? Lo(xt) : Gr(String(xt.label || "")), zt.onclick = () => {
          an.hidden = !0, ai(xt.item || null);
          const Wt = xt.item || null;
          if (Wt && !oe(Wt)) {
            const re = pe(Number(Wt.yaw_deg || 0)), Re = O(Number(Wt.pitch_deg || 0), -89.9, 89.9);
            pa(re, Re, l.viewFov);
          }
          $t(), Dt(), Q();
        }, an.appendChild(zt);
      }), ae.disabled = Ke.length <= 1, ae.onclick = (xt) => {
        xt.stopPropagation(), !ae.disabled && (an.hidden = !an.hidden);
      }, _.appendChild(yt);
    }
    const N = document.createElement("div");
    N.className = "pano-state-actions", N.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${at.copy}<span>Copy State</span></button>`;
    const C = N.querySelector("[data-action='copy-state-inline']");
    C.disabled = !g || u === "stroke" || s.length > 1, C.onclick = async () => {
      if (!g || u === "stroke" || s.length > 1) return;
      const yt = JSON.stringify(e === "cutout" && u !== "image" ? $o(m) : Lu(a));
      try {
        await navigator.clipboard.writeText(yt);
        const Rt = C.querySelector("span");
        Rt && (Rt.textContent = "Copied", window.setTimeout(() => {
          Rt.textContent = "Copy State";
        }, 900));
      } catch {
      }
    }, _.appendChild(N);
    const A = document.createElement("div");
    A.className = `pano-params${l.panelWasEnabled ? "" : " disabled"}`, _.appendChild(A), s.length > 1 ? (A.innerHTML = `
        <div class="pano-param-note">Selected objects: ${s.length}</div>
        <div class="pano-param-note">Multi-selection supports z-order and delete.</div>
      `, A.classList.toggle("disabled", !g), l.panelWasEnabled = g, oi()) : (Xn(A, m, "yaw_deg", "Yaw", -180, 180, 0.1, g && !o), Xn(A, m, "pitch_deg", "Pitch", -90, 90, 0.1, g && !o), Xn(A, m, "hFOV_deg", "H FOV", 1, 179, 0.1, g && !o), Xn(A, m, "vFOV_deg", "V FOV", 1, 179, 0.1, g && !o), e === "stickers" || u === "image" ? Xn(A, m, "rot_deg", "Rotation", -180, 180, 0.1, g && !o) : Xn(A, m, "roll_deg", "Roll", -180, 180, 0.1, g && !o), g !== l.panelWasEnabled ? requestAnimationFrame(() => {
      A.classList.toggle("disabled", !g);
    }) : A.classList.toggle("disabled", !g), l.panelWasEnabled = g, oi());
    const E = document.createElement("div");
    E.className = "pano-visibility-section", E.innerHTML = `
      <div class="pano-section-title">
        <span>Layers</span>
      </div>
      <div class="pano-visibility-stack">
        <div class="pano-visibility-row" data-visibility-row="mask">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${at.circle_dashed_tool}</span><span>Mask</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="mask" aria-label="Toggle mask"></button>
        </div>
        <div class="pano-visibility-row" data-visibility-row="objects">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${at.image}</span><span>Paint / Images</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="objects" aria-label="Toggle paint and images"></button>
        </div>
        <div class="pano-visibility-row" data-visibility-row="panorama">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${at.globe}</span><span>Panorama</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="panorama" aria-label="Toggle panorama"></button>
        </div>
      </div>
    `;
    const H = Array.isArray((At = (kt = p == null ? void 0 : p.painting) == null ? void 0 : kt.paint) == null ? void 0 : At.strokes) ? p.painting.paint.strokes.length : 0, B = Array.isArray((nn = (qt = p == null ? void 0 : p.painting) == null ? void 0 : qt.mask) == null ? void 0 : nn.strokes) ? p.painting.mask.strokes.length : 0, nt = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((yt) => String((yt == null ? void 0 : yt.name) || "")) : [], dt = au(
      t,
      nt.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), tt = !!String((dt == null ? void 0 : dt.src) || "").trim() || Ro("pano_input_images").length > 0, it = Array.isArray(un()) && un().length > 0 || H > 0, et = B > 0, st = (yt) => yt === "panorama" ? tt : yt === "objects" ? it : et, J = (yt, Rt) => {
      const ae = yt.closest("[data-visibility-row]"), Be = st(String(yt.getAttribute("data-visibility") || ""));
      yt.innerHTML = Rt ? at.eye : at.eye_dashed, yt.setAttribute("aria-pressed", Rt ? "true" : "false"), yt.setAttribute("data-tip", Rt ? "Hide" : "Show"), yt.disabled = !Be, yt.classList.toggle("active", !!Rt), ae == null || ae.classList.toggle("is-hidden", !Rt), ae == null || ae.classList.toggle("is-disabled", !Be);
    };
    if (E.querySelectorAll("[data-visibility]").forEach((yt) => {
      const Rt = String(yt.getAttribute("data-visibility") || ""), ae = () => Rt === "panorama" ? !!l.showPanorama : Rt === "objects" ? !!l.showObjects : !!l.showMask;
      J(yt, ae()), yt.onclick = () => {
        st(Rt) && (Rt === "panorama" ? l.showPanorama = !l.showPanorama : Rt === "objects" ? l.showObjects = !l.showObjects : l.showMask = !l.showMask, J(yt, ae()), Q());
      };
    }), _.appendChild(Object.assign(document.createElement("div"), { className: "pano-divider" })), _.appendChild(E), !o) {
      const yt = document.createElement("details");
      yt.className = "pano-ui-settings", yt.open = !1, yt.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${at.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(rn = p.ui_settings) != null && rn.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Tr = p.ui_settings) != null && Tr.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Si = p.ui_settings) != null && Si.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(Qn = p.ui_settings) != null && Qn.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(tr = p.ui_settings) != null && tr.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Rr = p.ui_settings) != null && Rr.invert_view_y ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label for="pano-ui-quality">Render Quality</label>
          <div class="pano-picker pano-ui-picker" data-ui-picker="quality">
            <button class="pano-picker-trigger" type="button">
              <span class="pano-picker-label"></span>
              <span class="pano-picker-caret">▾</span>
            </button>
            <div class="pano-picker-pop" hidden></div>
          </div>
        </div>
        <div class="pano-ui-row">
          <span></span>
          <button class="pano-btn subtle" type="button" data-action="ui-reset-defaults">Reset Defaults</button>
        </div>
      </div>
    `;
      const Rt = yt.querySelector("[data-setting='invert-x']"), ae = yt.querySelector("[data-setting='invert-y']"), Be = yt.querySelector("[data-ui-picker='quality']"), an = yt.querySelector("[data-action='ui-reset-defaults']"), Ke = (xt, zt, Wt, re) => {
        const Re = xt.querySelector(".pano-picker-trigger"), er = xt.querySelector(".pano-picker-label"), yn = xt.querySelector(".pano-picker-pop"), Fr = () => {
          const Fe = String(Wt()), bn = zt.find((qe) => String(qe.value) === Fe) || zt[0];
          er.textContent = bn.label, yn.innerHTML = "", zt.forEach((qe) => {
            const Ye = document.createElement("button");
            Ye.type = "button", Ye.className = `pano-picker-item${String(qe.value) === Fe ? " active" : ""}`, Ye.textContent = qe.label, Ye.onclick = () => {
              re(qe.value), yn.hidden = !0, Fr(), mn(), t.setDirtyCanvas(!0, !0), Q();
            }, yn.appendChild(Ye);
          });
        };
        return Re.onclick = (Fe) => {
          Fe.stopPropagation(), yt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((bn) => {
            bn !== yn && (bn.hidden = !0);
          }), yn.hidden = !yn.hidden;
        }, Fr(), Fr;
      }, on = (xt, zt) => {
        xt.setAttribute("data-selected", zt ? "1" : "0"), xt.querySelectorAll(".pano-segment-btn").forEach((Wt) => {
          Wt.setAttribute("aria-pressed", Wt.getAttribute("data-value") === (zt ? "1" : "0") ? "true" : "false");
        });
      };
      Rt.querySelectorAll(".pano-segment-btn").forEach((xt) => {
        xt.onclick = () => {
          const zt = xt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = zt, on(Rt, zt), mn(), t.setDirtyCanvas(!0, !0), Q();
        };
      }), ae.querySelectorAll(".pano-segment-btn").forEach((xt) => {
        xt.onclick = () => {
          const zt = xt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = zt, on(ae, zt), mn(), t.setDirtyCanvas(!0, !0), Q();
        };
      });
      const We = Ke(
        Be,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(p.ui_settings.preview_quality || "balanced"),
        (xt) => {
          const zt = String(xt || "balanced");
          p.ui_settings.preview_quality = zt === "draft" || zt === "high" ? zt : "balanced";
        }
      );
      an.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", on(Rt, !1), on(ae, !1), We(), mn(), t.setDirtyCanvas(!0, !0), Q();
      }, _.appendChild(yt);
    }
    const V = document.createElement("div");
    V.className = "pano-side-footer", V.innerHTML = `
      <button class="pano-btn" data-action="cancel-close">Cancel</button>
      <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
    `, V.querySelector("[data-action='cancel-close']").onclick = () => Lr(), V.querySelector("[data-action='save-close']").onclick = () => {
      us(), Lr();
    }, K.appendChild(V), Dr(_);
  }
  function hi(n) {
    if (!n) return !1;
    if (String(n.type || "").toLowerCase().startsWith("image/")) return !0;
    const a = String(n.name || "").toLowerCase();
    return a.endsWith(".png") || a.endsWith(".jpg") || a.endsWith(".jpeg") || a.endsWith(".webp") || a.endsWith(".gif") || a.endsWith(".bmp");
  }
  async function ns(n) {
    if (o || e !== "stickers" && e !== "cutout" || !hi(n)) return;
    const r = jr("asset"), a = URL.createObjectURL(n);
    try {
      const s = await new Promise((b, m) => {
        const g = new Image();
        g.onload = () => b(g), g.onerror = () => m(new Error("image load failed")), g.src = a;
      });
      He.set(r, s);
      const u = await xa(n, String(n.name || r));
      p.assets[r] = u;
      const f = jr("st");
      p.stickers.push({
        id: f,
        asset_id: r,
        yaw_deg: l.viewYaw,
        pitch_deg: l.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Pn(30, Number(s.naturalWidth || s.width || 1), Number(s.naturalHeight || s.height || 1)),
        rot_deg: 0,
        z_index: To()
      }), ai(p.stickers[p.stickers.length - 1]), Fa(), Kt(), ne(), $t(), Dt(), Q();
    } catch (s) {
      console.error("[PanoramaSuite] failed to add sticker asset", s), delete p.assets[r], He.delete(r);
    } finally {
      URL.revokeObjectURL(a);
    }
  }
  function rs(n) {
    const r = document.createElement("input");
    r.type = "file", r.accept = "image/*", r.onchange = () => {
      var s;
      const a = (s = r.files) == null ? void 0 : s[0];
      !a || typeof n != "function" || n(a);
    }, r.click();
  }
  function Ra() {
    o || e !== "stickers" && e !== "cutout" || rs((n) => {
      ns(n);
    });
  }
  async function Hl(n) {
    if (o || e !== "stickers" && e !== "cutout") return;
    const r = Jt();
    if (!r || !ue(r) || ie(r) || !hi(n)) return;
    const a = jr("asset"), s = URL.createObjectURL(n);
    try {
      const u = await new Promise((b, m) => {
        const g = new Image();
        g.onload = () => b(g), g.onerror = () => m(new Error("image load failed")), g.src = s;
      });
      He.set(a, u);
      const f = await xa(n, String(n.name || a));
      p.assets[a] = f, r.asset_id = a, r.vFOV_deg = Pn(
        Number(r.hFOV_deg || 30),
        Number(u.naturalWidth || u.width || 1),
        Number(u.naturalHeight || u.height || 1)
      ), r.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Pr(), De(), Kt(), ne(), $t(), Dt(), Q();
    } catch (u) {
      console.error("[PanoramaSuite] failed to replace sticker asset", u), delete p.assets[a], He.delete(a);
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function Ul() {
    if (o) return;
    const n = Jt();
    !n || !ue(n) || ie(n) || rs((r) => {
      Hl(r);
    });
  }
  async function Gl() {
    if (o || e !== "stickers") return;
    const n = p.assets && typeof p.assets == "object" ? p.assets : {}, r = Object.entries(n).filter(([, s]) => {
      const u = String((s == null ? void 0 : s.type) || "").toLowerCase(), f = String((s == null ? void 0 : s.value) || "");
      return u === "dataurl" && f.startsWith("data:image");
    });
    if (!r.length) return;
    let a = !1;
    for (const [s, u] of r)
      try {
        const f = String((u == null ? void 0 : u.value) || "");
        if (!f) continue;
        const b = await fetch(f).then((N) => N.blob()), m = String(b.type || "image/png").split("/")[1] || "png", g = String((u == null ? void 0 : u.name) || `${s}.${m}`), _ = new File([b], g, { type: b.type || "image/png" }), v = await xa(_, g);
        p.assets[s] = {
          ...v,
          w: Number((u == null ? void 0 : u.w) || 0),
          h: Number((u == null ? void 0 : u.h) || 0)
        }, a = !0;
      } catch (f) {
        console.error("[PanoramaSuite] failed to migrate embedded sticker asset", { assetId: s, err: f });
      }
    a && (ne(), Q());
  }
  function is() {
    o || e === "cutout" && (Fa(), p.shots = [{
      id: jr("sh"),
      yaw_deg: l.viewYaw,
      pitch_deg: l.viewPitch,
      hFOV_deg: 64,
      vFOV_deg: 40,
      roll_deg: 0,
      aspect_id: Jc(64, 40)
    }], ai(p.shots[0]), l.cutoutAspectOpen = !1, Kt(), ne(), $t(), Q({ cause: "cutout_frame" }));
  }
  function jl() {
    o || e === "cutout" && (p.shots = [], l.selectedId = null, l.selectedIds = [], l.mode === "frame" && (l.mode = "pano"), l.cutoutAspectOpen = !1, p.active.selected_shot_id = null, Kt(), ne(), $t(), Q());
  }
  function Bl() {
    const n = Array.isArray(p.stickers) ? p.stickers : [], r = [];
    for (const a of n)
      ie(a) && (a.visible = !1, r.push(a));
    return r;
  }
  function as(n, r, a = "Clear") {
    return new Promise((s) => {
      const u = document.createElement("div");
      u.className = "pano-canvas-confirm", u.innerHTML = `
        <div class="pano-canvas-confirm-card" role="dialog" aria-modal="true" aria-label="${n}">
          <div class="pano-canvas-confirm-title">${n}</div>
          <div class="pano-canvas-confirm-text">${r}</div>
          <div class="pano-canvas-confirm-actions">
            <button class="pano-btn" data-action="cancel">Cancel</button>
            <button class="pano-btn pano-btn-primary" data-action="confirm">${a}</button>
          </div>
        </div>
      `;
      const f = (g) => {
        u.remove(), s(!!g);
      };
      u.addEventListener("pointerdown", (g) => {
        g.target === u && f(!1);
      });
      const b = u.querySelector("[data-action='cancel']"), m = u.querySelector("[data-action='confirm']");
      b.onclick = () => f(!1), m.onclick = () => f(!0), R.appendChild(u), m.focus();
    });
  }
  async function os() {
    var a, s;
    if (o || !await as(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    p.painting = Xr(null), Ge();
    const r = Bl();
    e === "stickers" ? (p.stickers = r, p.assets = {}, l.selectedId = ((a = r[0]) == null ? void 0 : a.id) || null, l.selectedIds = l.selectedId ? [l.selectedId] : [], p.active.selected_sticker_id = ((s = r[0]) == null ? void 0 : s.id) || null, Pr()) : (p.stickers = r, p.assets = {}, p.shots = [], l.selectedId = null, l.selectedIds = [], p.active.selected_sticker_id = null, p.active.selected_shot_id = null, l.mode === "frame" && (l.mode = "pano"), l.cutoutAspectOpen = !1, Pr()), Kt(), ne(), $t(), Dt(), Q();
  }
  async function Kl(n) {
    var f, b, m, g;
    if (o) return;
    const r = n === "mask" ? "mask" : "paint", a = r === "mask" ? "Mask" : "Paint", s = Jn(r);
    if (!(!s.length && !(((f = l.interaction) == null ? void 0 : f.kind) === "draw" && ((b = l.interaction) == null ? void 0 : b.layerKind) === r) || !await as(
      `Clear ${a}`,
      `This will remove all ${r} strokes in the current node.`,
      `Clear ${a}`
    ))) {
      if (((m = l.interaction) == null ? void 0 : m.kind) === "draw" && ((g = l.interaction) == null ? void 0 : g.layerKind) === r) {
        const _ = en();
        _ && l.paintEngine.cancelActiveStroke(_), l.interaction = null;
      }
      s.length = 0, p.painting.raster_objects = Ne().filter((_) => String((_ == null ? void 0 : _.layerKind) || "paint") !== r), r === "paint" && (he().length = 0), Ge(), Kt(), ne(), $t(), Dt(), Me(), Q();
    }
  }
  function Wl() {
    if (o) return;
    const n = Jt();
    if (!n || !ue(n) || ie(n)) return;
    const r = JSON.parse(JSON.stringify(n));
    r.id = jr("st"), r.yaw_deg = pe((r.yaw_deg || 0) + 8), r.z_index = To(), p.stickers.push(r), p.active.selected_sticker_id = r.id, l.selectedId = r.id, l.selectedIds = [r.id], De(), Kt(), ne(), Dt(), $t(), Q();
  }
  function ss() {
    var a, s, u, f, b, m, g;
    if (o) return;
    const n = Ue(), r = Jt();
    if (!(!r && n.length === 0)) {
      if (n.length > 1) {
        const _ = new Set(n.filter((C) => oe(C)).map((C) => String(C.actionGroupId || C.id || ""))), v = new Set(n.filter((C) => ye(C)).map((C) => ge(C.rasterObjectId || C.id || ""))), N = new Set(n.filter(ue).map((C) => String(C.id || "")));
        _.size > 0 && (p.painting.paint.strokes = (Array.isArray((s = (a = p.painting) == null ? void 0 : a.paint) == null ? void 0 : s.strokes) ? p.painting.paint.strokes : []).filter((C) => !_.has(String((C == null ? void 0 : C.actionGroupId) || ""))), p.painting.groups = he().filter((C) => !_.has(String((C == null ? void 0 : C.actionGroupId) || (C == null ? void 0 : C.id) || ""))), Ge()), v.size > 0 && (p.painting.raster_objects = Ne().filter((C) => !v.has(String((C == null ? void 0 : C.id) || ""))), Ar()), N.size > 0 && (p.stickers = (Array.isArray(p.stickers) ? p.stickers : []).filter((C) => N.has(String((C == null ? void 0 : C.id) || "")) ? ie(C) ? (Bn(C) || (C.visible = !1), !0) : !1 : !0), Pr(), De()), l.selectedId = null, l.selectedIds = [], Kt(), ne(), $t(), Dt(), Q();
        return;
      }
      if (oe(r)) {
        const _ = String(r.actionGroupId || r.id || "").trim();
        p.painting.paint.strokes = (Array.isArray((f = (u = p.painting) == null ? void 0 : u.paint) == null ? void 0 : f.strokes) ? p.painting.paint.strokes : []).filter((v) => String((v == null ? void 0 : v.actionGroupId) || "").trim() !== _), p.painting.groups = he().filter((v) => String((v == null ? void 0 : v.actionGroupId) || (v == null ? void 0 : v.id) || "").trim() !== _), Ge(), l.selectedId = null, l.selectedIds = [], Kt(), ne(), $t(), Dt(), Q();
        return;
      }
      if (ye(r)) {
        const _ = ge(r.rasterObjectId || r.id || "");
        p.painting.raster_objects = Ne().filter((v) => String((v == null ? void 0 : v.id) || "").trim() !== _), Ar(), l.selectedId = null, l.selectedIds = [], Kt(), ne(), $t(), Dt(), Q();
        return;
      }
      if (e === "stickers" || ue(r)) {
        if (ie(r)) {
          if (Bn(r)) return;
          r.visible = !1, De(), Kt(), ne(), $t(), Dt(), Q();
          return;
        }
        p.stickers = p.stickers.filter((_) => _.id !== r.id), Pr(), De(), l.selectedId = e === "cutout" ? p.active.selected_shot_id || ((b = p.stickers[0]) == null ? void 0 : b.id) || null : ((m = p.stickers[0]) == null ? void 0 : m.id) || null, l.selectedIds = l.selectedId ? [l.selectedId] : [], p.active.selected_sticker_id = ((g = p.stickers[0]) == null ? void 0 : g.id) || null, Kt(), ne(), $t(), Dt(), Q();
        return;
      }
      jl();
    }
  }
  function ql(n, r) {
    if (!n) return;
    const a = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, s = (() => {
      const C = String(n.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(C)) {
        const [H, B] = C.split(":").map((nt) => Number(nt));
        if (Number.isFinite(H) && Number.isFinite(B)) return H >= B;
      }
      const A = Number(n.hFOV_deg || 64), E = Number(n.vFOV_deg || 40);
      return Math.abs(A - E) > 1e-6 ? A >= E : bo(n) >= 1;
    })();
    let [u, f] = a[String(r)] || a["1:1"];
    u >= f !== s && ([u, f] = [f, u]);
    const b = u / f, m = O(Number(n.hFOV_deg || 64), 1, 179), g = O(Number(n.vFOV_deg || 40), 1, 179), _ = Math.sqrt(Math.max(1, m * g)), v = O(_ * Math.sqrt(b), 1, 179), N = O(_ / Math.sqrt(b), 1, 179);
    n.hFOV_deg = v, n.vFOV_deg = N, n.aspect_id = String(r);
  }
  function Yl(n) {
    if (!n) return;
    const r = Math.max(1, Number(n.hFOV_deg || 90)), a = Math.max(1, Number(n.vFOV_deg || 60));
    n.hFOV_deg = a, n.vFOV_deg = r, n.aspect_id = Rn(n);
  }
  function cs() {
    kn().forEach((r, a) => {
      r.type === "sticker" && r.item && (r.item.z_index = a), r.type === "strokeGroup" && r.item && (r.item.z_index = a), r.type === "rasterObject" && r.item && (r.item.z_index = a);
    });
  }
  function Xl() {
    if (o) return;
    const n = Ue();
    if (!Jt() || n.length === 0) return;
    cs();
    const a = kn(), s = new Set(n.map((m) => ue(m) ? `sticker:${String(m.id || "")}` : ye(m) ? `rasterObject:${ge(m.rasterObjectId || m.id || "")}` : `strokeGroup:${String(m.actionGroupId || m.id || "")}`)), u = [], f = [];
    if (a.forEach((m) => {
      var _, v;
      const g = m.type === "sticker" ? `sticker:${String(((_ = m.item) == null ? void 0 : _.id) || "")}` : m.type === "rasterObject" ? `rasterObject:${String(((v = m.item) == null ? void 0 : v.id) || m.id || "")}` : `strokeGroup:${String(m.actionGroupId || "")}`;
      s.has(g) ? u.push(m) : f.push(m);
    }), !u.length || u[u.length - 1] === a[a.length - 1]) return;
    [...f, ...u].forEach((m, g) => {
      m.type === "sticker" && m.item && (m.item.z_index = g), m.type === "strokeGroup" && m.item && (m.item.z_index = g), m.type === "rasterObject" && m.item && (m.item.z_index = g);
    }), De(), Kt(), ne(), Dt(), Q();
  }
  function Zl() {
    if (o) return;
    const n = Ue();
    if (!Jt() || n.length === 0) return;
    cs();
    const a = kn(), s = new Set(n.map((m) => ue(m) ? `sticker:${String(m.id || "")}` : ye(m) ? `rasterObject:${ge(m.rasterObjectId || m.id || "")}` : `strokeGroup:${String(m.actionGroupId || m.id || "")}`)), u = [], f = [];
    if (a.forEach((m) => {
      var _, v;
      const g = m.type === "sticker" ? `sticker:${String(((_ = m.item) == null ? void 0 : _.id) || "")}` : m.type === "rasterObject" ? `rasterObject:${String(((v = m.item) == null ? void 0 : v.id) || m.id || "")}` : `strokeGroup:${String(m.actionGroupId || "")}`;
      s.has(g) ? u.push(m) : f.push(m);
    }), !u.length || u[0] === a[0]) return;
    [...u, ...f].forEach((m, g) => {
      m.type === "sticker" && m.item && (m.item.z_index = g), m.type === "strokeGroup" && m.item && (m.item.z_index = g), m.type === "rasterObject" && m.item && (m.item.z_index = g);
    }), De(), Kt(), ne(), Dt(), Q();
  }
  function us() {
    o || (p.projection_model = "pinhole_rectilinear", p.alpha_mode = "straight", x && (p.output_preset = wc(x.value, Number(p.output_preset || 2048))), w && (p.bg_color = String(w.value || p.bg_color || "#00ff00")), je(), t.setDirtyCanvas(!0, !0));
  }
  function je() {
    var r;
    if (o) return;
    const n = JSON.stringify(p);
    P && (P.value = n, (r = P.callback) == null || r.call(P, n));
  }
  function mn() {
    p.ui_settings = Pp(p.ui_settings), o || je();
  }
  function ne() {
    var n;
    o || (je(), (n = t.setDirtyCanvas) == null || n.call(t, !0, !0));
  }
  function Fa() {
    l.primaryTool !== "cursor" && (l.primaryTool = "cursor", Me(), $t());
  }
  function Zn(n) {
    const r = I.getBoundingClientRect();
    return {
      x: (n.clientX - r.left) / r.width * I.width,
      y: (n.clientY - r.top) / r.height * I.height
    };
  }
  function ls() {
    return l.mode === "pano" || l.mode === "unwrap";
  }
  function Ut() {
    var a;
    if (e !== "cutout") return null;
    const n = Array.isArray(p.shots) ? p.shots : [], r = String(((a = p.active) == null ? void 0 : a.selected_shot_id) || "");
    return n.find((s) => String((s == null ? void 0 : s.id) || "") === r) || n[0] || null;
  }
  function ve(n = Ut()) {
    var C, A, E, H;
    if (!n) return null;
    const r = Math.max(1e-4, Number(((C = fr(n)) == null ? void 0 : C.aspect) || 1)), a = 56, s = Math.max(80, I.width - a * 2), u = Math.max(80, I.height - a * 2);
    let f = s, b = f / r;
    b > u && (b = u, f = b * r);
    const m = Math.max(0.1, Number(((A = l.frameView) == null ? void 0 : A.zoom) || 1)), g = f * m, _ = b * m, v = Number(((E = l.frameView) == null ? void 0 : E.panX) || 0), N = Number(((H = l.frameView) == null ? void 0 : H.panY) || 0);
    return {
      x: (I.width - g) * 0.5 + v,
      y: (I.height - _) * 0.5 + N,
      w: g,
      h: _
    };
  }
  function Oa() {
    return e === "cutout" && l.mode === "frame" && !!Ut();
  }
  function Le(n, r = performance.now()) {
    if (l.mode === "unwrap") {
      const f = dn(), b = (n.x - f.x) / Math.max(1, f.w), m = (n.y - f.y) / Math.max(1, f.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (b % 1 + 1) % 1,
        v: O(m, 0, 1),
        t: Number(r || 0)
      };
    }
    const a = wa(n.x, n.y), { lon: s, lat: u } = ka(a);
    return {
      targetKind: "ERP_GLOBAL",
      u: (s / (2 * Math.PI) + 0.5 + 1) % 1,
      v: O(0.5 - u / Math.PI, 0, 1),
      t: Number(r || 0)
    };
  }
  function Te(n, r, a = performance.now()) {
    const s = ve(r);
    if (!s) return null;
    const u = {
      x: (Number(n.x) - s.x) / Math.max(1, s.w),
      y: (Number(n.y) - s.y) / Math.max(1, s.h)
    }, f = Ea(r, u);
    if (!f) return null;
    const { lon: b, lat: m } = ka(f);
    return {
      targetKind: "ERP_GLOBAL",
      u: (b / (2 * Math.PI) + 0.5 + 1) % 1,
      v: O(0.5 - m / Math.PI, 0, 1),
      t: Number(a || 0)
    };
  }
  function Jl(n, r) {
    var _;
    const a = Ut(), s = ve(a);
    if (!a || !s) return !1;
    const u = Math.max(0.1, Number(((_ = l.frameView) == null ? void 0 : _.zoom) || 1)), f = O(u * Number(r), 0.25, 12);
    if (Math.abs(f - u) < 1e-6) return !1;
    const b = (Number(n.x) - s.x) / Math.max(1e-6, s.w), m = (Number(n.y) - s.y) / Math.max(1e-6, s.h);
    l.frameView.zoom = f;
    const g = ve(a);
    return g ? (l.frameView.panX += Number(n.x) - (g.x + g.w * b), l.frameView.panY += Number(n.y) - (g.y + g.h * m), !0) : !1;
  }
  function Ql(n, r) {
    const a = Number(r || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, a / 2048)
    };
  }
  function gn(n) {
    const r = String(n || "").trim();
    return r === "eraser" ? sn : xe[r] ? r : l.activeBrushPresetId || sn;
  }
  function ds() {
    return (l.primaryTool === "paint" || l.primaryTool === "mask") && (ls() || Oa());
  }
  function fs() {
    var n;
    return ds() && ((n = l.pointerPos) == null ? void 0 : n.inside) === !0;
  }
  function mi(n, r = !0) {
    const a = Number((n == null ? void 0 : n.x) || 0), s = Number((n == null ? void 0 : n.y) || 0), u = r !== !1, f = l.pointerPos || { x: 0, y: 0, inside: !1 }, b = f.inside !== u || Math.abs(f.x - a) > 0.01 || Math.abs(f.y - s) > 0.01;
    return l.pointerPos = { x: a, y: s, inside: u }, b;
  }
  function td() {
    var v, N;
    if (!fs()) return null;
    const n = l.primaryTool === "mask" ? "mask" : "paint", r = n === "mask" ? l.maskTool : l.paintTool, a = gn(r), s = xe[a] || xe[sn], u = Number(l.brushSizes[a] ?? 10), f = Math.max(1, u) * Math.max(0.1, Number(s.sizeScale ?? 1)), b = Math.max(3, f * 0.5), m = n === "mask" ? r === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : r === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : ke(l.paintColor), g = n === "mask" ? r === "lasso_fill" ? 0.18 : 0.2 : r === "eraser" ? 0.06 : O(Math.max(0.16, Number(m.a ?? 1) * 0.3), 0.16, 0.52), _ = n === "mask" ? 0.95 : r === "eraser" ? 0.75 : O(Math.max(0.46, Number(m.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: n,
      toolKind: r,
      preset: s,
      radius: b,
      fillStyle: ze(m, g),
      strokeStyle: ze(m, _),
      x: Number(((v = l.pointerPos) == null ? void 0 : v.x) || 0),
      y: Number(((N = l.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: b,
      hotspotY: b
    };
  }
  function ed() {
    var C, A, E;
    const n = td();
    if (!T) return;
    if (!n) {
      T.style.display = "none";
      return;
    }
    let r = n.radius * 2, a = n.radius * 2, s = "999px", u = 0, f = n.fillStyle, b = "1px solid rgba(222, 222, 222, 0.72)", m = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const g = "rgba(222, 222, 222, 0.72)", _ = "rgba(52, 52, 52, 0.72)";
    let v = Number(n.hotspotX ?? r * 0.5), N = Number(n.hotspotY ?? a * 0.5);
    if (n.toolKind === "lasso_fill")
      r = oa, a = oa, s = "0", b = "0", m = "none", v = mp, N = gp, f = wp(n.fillStyle, _, g);
    else if (n.layerKind === "mask")
      f = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (n.toolKind === "marker") {
      const H = Math.max(1, Number(((C = n.preset) == null ? void 0 : C.aspect) ?? 1));
      r = Math.max(10, n.radius * 2 * H), a = Math.max(6, n.radius * 2), s = `${Math.min(6, a * 0.42)}px`, u = Number(((E = (A = n.preset) == null ? void 0 : A.angle) == null ? void 0 : E.value) || 0) * Tn;
    } else n.toolKind === "brush" ? f = `radial-gradient(circle at 50% 50%, ${n.strokeStyle} 0%, ${n.fillStyle} 45%, rgba(0,0,0,0) 100%)` : n.toolKind === "eraser" && (f = "rgba(255,255,255,0.14)");
    T.style.display = "block", T.style.width = `${Math.round(r)}px`, T.style.height = `${Math.round(a)}px`, T.style.borderRadius = s, T.style.border = b, T.style.boxShadow = m, T.style.background = f, T.style.backgroundRepeat = "no-repeat", T.style.backgroundPosition = "center", T.style.backgroundSize = "contain", T.style.transform = `translate(${Math.round(n.x - v)}px, ${Math.round(n.y - N)}px) rotate(${u}deg)`;
  }
  function nd() {
    var dt;
    if (!F || !U) return;
    const n = l.primaryTool === "mask" ? "mask" : "paint", r = n === "mask" ? l.maskTool : l.paintTool;
    if (r === "lasso_fill") return;
    const a = gn(r), s = xe[a] || xe[sn], u = Number(l.brushSizes[a] ?? 10), f = Math.max(1, u) * Math.max(0.1, Number(s.sizeScale ?? 1)), b = Math.max(6, f * 0.5), m = r === "eraser", g = n === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : m ? { r: 1, g: 1, b: 1, a: 0.22 } : ke(l.paintColor), _ = n === "mask" ? ze(g, 0.22) : m ? "rgba(255,255,255,0.14)" : ze(g, O(Math.max(0.18, Number(g.a ?? 1) * 0.34), 0.18, 0.56)), v = n === "mask" ? ze(g, 0.96) : m ? "rgba(255,255,255,0.72)" : ze(g, O(Math.max(0.56, Number(g.a ?? 1) * 0.96), 0.56, 1));
    let N = b * 2, C = b * 2, A = "999px", E = 0, H = _;
    const B = "rgba(222, 222, 222, 0.72)", nt = "rgba(52, 52, 52, 0.72)";
    if (n === "mask")
      H = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (r === "marker") {
      const tt = Math.max(1, Number((s == null ? void 0 : s.aspect) ?? 1));
      N = Math.max(16, b * 2 * tt), C = Math.max(10, b * 2), A = `${Math.min(8, C * 0.42)}px`, E = Number(((dt = s == null ? void 0 : s.angle) == null ? void 0 : dt.value) || 0) * Tn;
    } else r === "brush" ? H = `radial-gradient(circle at 50% 50%, ${v} 0%, ${_} 48%, rgba(0,0,0,0) 100%)` : r === "lasso_fill" ? (N = Math.max(18, b * 1.8), C = N, H = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${v} 43%, ${v} 58%, rgba(0,0,0,0) 59%)`) : m && (H = "rgba(255,255,255,0.12)");
    U.style.width = `${Math.round(N)}px`, U.style.height = `${Math.round(C)}px`, U.style.borderRadius = A, U.style.background = H, U.style.border = `1px solid ${B}`, U.style.boxShadow = `0 0 0 1px ${nt}`, U.style.transform = `rotate(${E}deg)`, Lt && (clearTimeout(Lt), Lt = 0), F.classList.remove("fade-out"), F.classList.add("show");
  }
  function gi() {
    !F || !F.classList.contains("show") || (F.classList.add("fade-out"), Lt && clearTimeout(Lt), Lt = window.setTimeout(() => {
      F.classList.remove("show", "fade-out"), Lt = 0;
    }, 180));
  }
  function rd(n, r, a, s) {
    const u = gn(r), f = xe[u] || xe[sn], b = l.brushSizes[u] ?? 10, m = Math.max(1, b) * Math.max(0.1, f.sizeScale ?? 1), g = Ql(s, m), _ = a.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), v = {
      id: or(n),
      actionGroupId: or("ag"),
      targetSpace: s && typeof s == "object" ? { ...s } : { kind: "ERP_GLOBAL" },
      layerKind: n,
      toolKind: r,
      size: m,
      createdAt: Date.now(),
      color: n === "paint" ? { ...l.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: g.radiusModel,
      radiusValue: g.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: _.map((N) => ({ ...N })),
        points: _.map((N) => ({ ...N }))
      }
    };
    return gc(v, f), v;
  }
  function id(n, r, a, s) {
    const u = a.map((g) => ({
      ...g,
      t: Number((g == null ? void 0 : g.t) || 0),
      widthScale: Number.isFinite(Number(g == null ? void 0 : g.widthScale)) ? Math.max(0, Number(g.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(g == null ? void 0 : g.pressureLike)) ? Math.max(0, Number(g.pressureLike)) : 1
    })), f = gn(r), b = xe[f] || xe[sn], m = {
      id: or(n),
      actionGroupId: or("ag"),
      targetSpace: s && typeof s == "object" ? { ...s } : { kind: "ERP_GLOBAL" },
      layerKind: n,
      toolKind: r,
      size: 10,
      createdAt: Date.now(),
      color: n === "paint" ? { ...l.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: u.map((g) => ({ ...g }))
      }
    };
    return gc(m, b), m;
  }
  function Jn(n) {
    const r = p.painting || (p.painting = Xr(null)), a = r[n] || (r[n] = { strokes: [] });
    return Array.isArray(a.strokes) || (a.strokes = []), a.strokes;
  }
  function ad(n, r, a = performance.now()) {
    let s;
    if (l.mode === "frame") {
      const _ = Ut();
      if (!_) return !1;
      s = Te(r, _, a);
    } else
      s = Le(r, a);
    const u = n.stroke.geometry.rawPoints || n.stroke.geometry.points, f = n.stroke.geometry.points, b = u[u.length - 1];
    if (b) {
      const _ = Math.abs(Number(s.u ?? s.x ?? 0) - Number(b.u ?? b.x ?? 0)), v = Math.abs(Number(s.v ?? s.y ?? 0) - Number(b.v ?? b.y ?? 0));
      if (_ < 15e-4 && v < 15e-4) return !1;
    }
    const m = {
      ...s,
      t: Number((s == null ? void 0 : s.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    u.push({ ...m }), f.push({ ...m });
    const g = en();
    if (g) {
      const _ = l.paintEngine.ensureTarget(g);
      l.paintEngine.appendStrokePoint(_, Number(m.u ?? 0), Number(m.v ?? 0), n.stroke);
    }
    return !0;
  }
  function od(n, r, a = performance.now()) {
    var b, m;
    let s;
    if (l.mode === "frame") {
      const g = Ut();
      if (!g) return !1;
      s = Te(r, g, a);
    } else
      s = Le(r, a);
    const u = (m = (b = n == null ? void 0 : n.stroke) == null ? void 0 : b.geometry) == null ? void 0 : m.points;
    if (!s || !Array.isArray(u)) return !1;
    const f = u[u.length - 1];
    if (f) {
      const g = Math.abs(Number(s.u ?? s.x ?? 0) - Number(f.u ?? f.x ?? 0)), _ = Math.abs(Number(s.v ?? s.y ?? 0) - Number(f.v ?? f.y ?? 0));
      if (g < 15e-4 && _ < 15e-4) return !1;
    }
    return u.push({
      ...s,
      t: Number((s == null ? void 0 : s.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function sd(n) {
    var tt, it, et, st, J;
    const r = (n == null ? void 0 : n.stroke) || null;
    if (!r || (n == null ? void 0 : n.layerKind) !== "paint" || String((r == null ? void 0 : r.toolKind) || "") !== "eraser") return !1;
    Yn();
    const a = en(), s = Cn(a.width, a.height);
    if (!Qo(s, r, { w: a.width, h: a.height })) return !1;
    const u = ((it = (tt = s.ctx) == null ? void 0 : tt.getImageData(0, 0, a.width, a.height)) == null ? void 0 : it.data) || null;
    if (!u) return !1;
    const f = new Map(he().map((V) => [String((V == null ? void 0 : V.actionGroupId) || (V == null ? void 0 : V.id) || "").trim(), V ? { ...V } : null])), b = [], m = [], g = [...Ne().filter((V) => String((V == null ? void 0 : V.layerKind) || "paint") !== "paint")];
    let _ = !1, v = kn().reduce((V, Y) => Math.max(V, Number((Y == null ? void 0 : Y.z_index) || 0)), -1) + 1;
    function N(V, Y, bt, _t = 8) {
      let vt = Y, wt = bt, Nt = -1, kt = -1;
      for (let At = 0; At < bt; At += 1)
        for (let qt = 0; qt < Y; qt += 1)
          V[(At * Y + qt) * 4 + 3] <= _t || (qt < vt && (vt = qt), At < wt && (wt = At), qt > Nt && (Nt = qt), At > kt && (kt = At));
      return Nt < vt || kt < wt ? null : { minX: vt, minY: wt, maxX: Nt, maxY: kt };
    }
    const C = N(u, a.width, a.height, 8);
    if (!C) return !1;
    function A(V, Y) {
      return !V || !Y ? !1 : !(V.maxX < Y.minX || Y.maxX < V.minX || V.maxY < Y.minY || Y.maxY < V.minY);
    }
    function E(V, Y) {
      const bt = Mn((V == null ? void 0 : V.actionGroupId) || (V == null ? void 0 : V.id) || "", "paint", Y);
      if (!bt) return null;
      const _t = bt.centerUv.u - bt.halfW, vt = bt.centerUv.u + bt.halfW, wt = bt.centerUv.v - bt.halfH, Nt = bt.centerUv.v + bt.halfH, kt = a.width, At = a.height;
      return {
        minX: Math.floor((_t % 1 + 1) % 1 * kt),
        maxX: Math.ceil((vt % 1 + 1) % 1 * kt),
        minY: Math.floor(O(wt, 0, 1) * At),
        maxY: Math.ceil(O(Nt, 0, 1) * At),
        wraps: vt - _t >= 1 || _t < 0 || vt > 1
      };
    }
    function H(V) {
      const Y = (V == null ? void 0 : V.bbox) || null;
      if (!Y) return null;
      const bt = (V == null ? void 0 : V.transform) || {}, _t = a.width, vt = a.height, wt = Number(Y.u0 || 0) + Number(bt.du || 0), Nt = Number(Y.u1 || 0) + Number(bt.du || 0), kt = Number(Y.v0 || 0) + Number(bt.dv || 0), At = Number(Y.v1 || 0) + Number(bt.dv || 0);
      return {
        minX: Math.floor((wt % 1 + 1) % 1 * _t),
        maxX: Math.ceil((Nt % 1 + 1) % 1 * _t),
        minY: Math.floor(O(kt, 0, 1) * vt),
        maxY: Math.ceil(O(At, 0, 1) * vt),
        wraps: Nt - wt >= 1 || wt < 0 || Nt > 1
      };
    }
    function B(V) {
      return V ? V.wraps ? A(C, { minX: 0, maxX: V.maxX, minY: V.minY, maxY: V.maxY }) || A(C, { minX: V.minX, maxX: a.width - 1, minY: V.minY, maxY: V.maxY }) : A(C, V) : !0;
    }
    function nt(V) {
      if (!V) return { touched: !1, canvas: null };
      const Y = Cn(a.width, a.height);
      Y.ctx.drawImage(V, 0, 0);
      const bt = Y.ctx.getImageData(0, 0, a.width, a.height);
      Y.ctx.save(), Y.ctx.globalCompositeOperation = "destination-out", Y.ctx.drawImage(s.canvas, 0, 0), Y.ctx.restore();
      const _t = Y.ctx.getImageData(0, 0, a.width, a.height);
      for (let vt = 0; vt < a.width * a.height; vt += 1) {
        if (u[vt * 4 + 3] <= 8) continue;
        const Nt = bt.data[vt * 4 + 3], kt = _t.data[vt * 4 + 3];
        if (Nt > kt)
          return { touched: !0, canvas: Y.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function dt(V, Y, bt) {
      const _t = Number(bt == null ? void 0 : bt.z_index), vt = Al(V, Y, bt).map((wt, Nt) => ({
        ...wt,
        z_index: Number.isFinite(_t) ? _t + Nt * 1e-3 : v + Nt * 1e-3
      }));
      return vt.length && (v = Math.max(v, ...vt.map((wt) => Number((wt == null ? void 0 : wt.z_index) || 0))) + 1), vt;
    }
    for (const V of he()) {
      const Y = String((V == null ? void 0 : V.actionGroupId) || (V == null ? void 0 : V.id) || "").trim();
      if (!Y) continue;
      const bt = Ee(Y, "paint");
      if (!B(E(V, bt))) {
        m.push(V), b.push(...bt);
        continue;
      }
      const _t = ((st = (et = l.paintEngine) == null ? void 0 : et.getGroupTarget) == null ? void 0 : st.call(et, Y)) || null, vt = ((J = _t == null ? void 0 : _t.committedPaint) == null ? void 0 : J.canvas) || null;
      if (!vt) {
        m.push(V), b.push(...bt);
        continue;
      }
      const wt = nt(vt);
      if (!wt.touched || !wt.canvas) {
        m.push(V), b.push(...bt);
        continue;
      }
      _ = !0;
      const Nt = dt(wt.canvas, "paint", f.get(Y) || V || {});
      g.push(...Nt);
    }
    for (const V of Ne().filter((Y) => String((Y == null ? void 0 : Y.layerKind) || "paint") === "paint")) {
      if (!B(H(V))) {
        g.push(V);
        continue;
      }
      const Y = ci(V, null);
      if (!Y) {
        g.push(V);
        continue;
      }
      const bt = nt(Y);
      if (!bt.touched || !bt.canvas) {
        g.push(V);
        continue;
      }
      _ = !0;
      const _t = dt(bt.canvas, "paint", V);
      g.push(..._t);
    }
    return _ ? (p.painting.paint.strokes = b, p.painting.groups = m.sort((V, Y) => Number((V == null ? void 0 : V.z_index) || 0) - Number((Y == null ? void 0 : Y.z_index) || 0)), p.painting.raster_objects = g.sort((V, Y) => Number((V == null ? void 0 : V.z_index) || 0) - Number((Y == null ? void 0 : Y.z_index) || 0)), Kn({ preservePanelValues: !1 }), !0) : !1;
  }
  function cd(n) {
    var f, b, m, g;
    const r = ((f = n == null ? void 0 : n.stroke) == null ? void 0 : f.geometry) || null;
    if (!r) return !1;
    const a = String(((b = n == null ? void 0 : n.stroke) == null ? void 0 : b.toolKind) || "pen");
    if (n.layerKind === "paint" && a === "eraser")
      return r.geometryKind !== "lasso_fill" && (r.processedPoints = Da(r.rawPoints || r.points || [], n.stroke.targetSpace, !0)), sd(n);
    const s = n.layerKind === "paint" && a !== "eraser";
    if (r.geometryKind === "lasso_fill")
      return (Array.isArray(r.points) ? r.points : []).length < 3 ? !1 : (s && ko((m = n.stroke) == null ? void 0 : m.actionGroupId), Jn(n.layerKind).push(n.stroke), !0);
    const u = r.rawPoints || r.points || [];
    return u.length < 1 ? !1 : (r.processedPoints = Da(u, n.stroke.targetSpace, !0), s && ko((g = n.stroke) == null ? void 0 : g.actionGroupId), Jn(n.layerKind).push(n.stroke), !0);
  }
  function ps(n) {
    var a;
    if (e === "cutout" && l.mode === "frame") {
      const s = Ut(), u = ve(s);
      if (!s || !u || !(Number((n == null ? void 0 : n.x) || 0) >= Number(u.x || 0) && Number((n == null ? void 0 : n.x) || 0) <= Number(u.x || 0) + Number(u.w || 0) && Number((n == null ? void 0 : n.y) || 0) >= Number(u.y || 0) && Number((n == null ? void 0 : n.y) || 0) <= Number(u.y || 0) + Number(u.h || 0))) return null;
      const b = Te(n, s, performance.now()), m = b ? Cr(b) : null;
      if (m)
        for (const _ of Ca()) {
          if (!ue(_)) continue;
          const v = Ir(_, m);
          if (v && Number(v.x) >= 0 && Number(v.x) <= 1 && Number(v.y) >= 0 && Number(v.y) <= 1) {
            const N = le(_);
            if (N != null && N.visible) return { item: _, geom: N };
          }
        }
      const g = ma(!1).slice().sort((_, v) => Number((v == null ? void 0 : v.z_index) || 0) - Number((_ == null ? void 0 : _.z_index) || 0));
      for (const _ of g) {
        if (_.type === "strokeGroup") {
          const C = jn(vr("paint", _.actionGroupId || _.id || ""));
          if (!C) continue;
          const A = le(C);
          if (!(A != null && A.visible)) continue;
          const E = Array.isArray(A.strokePaths) ? A.strokePaths : [];
          for (const H of E) {
            const B = Array.isArray(H == null ? void 0 : H.points) ? H.points : [];
            if (!B.length) continue;
            if (H.closed && B.length >= 3 && cn(n, B)) return { item: C, geom: A };
            const nt = Math.max(8, Number((H == null ? void 0 : H.lineWidth) || 0) * 0.5 + 6);
            for (let dt = 0; dt < B.length - 1; dt += 1)
              if (no(n, B[dt], B[dt + 1]) <= nt * nt) return { item: C, geom: A };
            if (B.length === 1 && Ln(n, B[0]) <= nt * nt) return { item: C, geom: A };
          }
          continue;
        }
        if (_.type === "rasterObject") {
          const C = Gn(_r(((a = _.item) == null ? void 0 : a.id) || _.id || ""));
          if (!C) continue;
          const A = le(C);
          if (Ho(C, A, n, b)) return { item: C, geom: A };
          continue;
        }
        const v = _.item;
        if (!v || !ue(v) || !m) continue;
        const N = Ir(v, m);
        if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
          const C = le(v);
          if (C != null && C.visible) return { item: v, geom: C };
        }
      }
      return null;
    }
    const r = [
      ...ma(!1).slice().sort((s, u) => Number((u == null ? void 0 : u.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((s) => {
        var u;
        return s.type === "strokeGroup" ? jn(vr("paint", s.actionGroupId || s.id || "")) : s.type === "rasterObject" ? Gn(_r(((u = s.item) == null ? void 0 : u.id) || s.id || "")) : s.item;
      }).filter(Boolean),
      ...e === "cutout" ? Ca().filter((s) => Ie(s)) : []
    ];
    for (const s of r) {
      if (oe(s)) {
        const f = le(s);
        if (!(f != null && f.visible)) continue;
        const b = Array.isArray(f.strokePaths) ? f.strokePaths : [];
        for (const m of b) {
          const g = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
          if (!g.length) continue;
          if (m.closed && g.length >= 3 && cn(n, g)) return { item: s, geom: f };
          const _ = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
          for (let v = 0; v < g.length - 1; v += 1)
            if (no(n, g[v], g[v + 1]) <= _ * _) return { item: s, geom: f };
          if (g.length === 1 && Ln(n, g[0]) <= _ * _) return { item: s, geom: f };
        }
        continue;
      }
      if (ye(s)) {
        const f = le(s);
        if (!(f != null && f.visible)) continue;
        if (Ho(s, f, n)) return { item: s, geom: f };
        continue;
      }
      const u = le(s);
      if (u.visible && cn(n, u.corners))
        return { item: s, geom: u };
    }
    return null;
  }
  function $a(n, r) {
    if (!n || !n.visible) return { kind: "none", cursor: l.mode === "pano" ? "grab" : "default" };
    if (n.kind === "strokeGroup") {
      const s = n.corners.findIndex((f) => Ln(f, r) <= 121);
      if (s >= 0) {
        const f = n.corners[s], b = f.x - n.center.x, m = f.y - n.center.y, g = b * m >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: s, cursor: g };
      }
      const u = Array.isArray(n.strokePaths) ? n.strokePaths : [];
      for (const f of u) {
        const b = Array.isArray(f == null ? void 0 : f.points) ? f.points : [];
        if (f.closed && b.length >= 3 && cn(r, b)) return { kind: "move", cursor: "default" };
        const m = Math.max(8, Number((f == null ? void 0 : f.lineWidth) || 0) * 0.5 + 6);
        for (let g = 0; g < b.length - 1; g += 1)
          if (no(r, b[g], b[g + 1]) <= m * m) return { kind: "move", cursor: "default" };
      }
      return cn(r, n.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: l.mode === "pano" ? "grab" : "default" };
    }
    if (n.kind === "rasterObject")
      return cn(r, n.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: l.mode === "pano" ? "grab" : "default" };
    if (e === "cutout" && Array.isArray(n.edgeMidpoints)) {
      const s = n.edgeMidpoints.find((u) => Ln(u, r) <= 169);
      if (s) {
        const u = s.edge === "left" || s.edge === "right";
        return { kind: u ? "scale_x" : "scale_y", cursor: u ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
      }
    }
    const a = n.corners.findIndex((s) => Ln(s, r) <= 121);
    if (a >= 0) {
      const s = n.corners[a], u = s.x - n.center.x, f = s.y - n.center.y, b = u * f >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: a, cursor: b };
    }
    return Ln(n.rotateHandle, r) <= 144 ? { kind: "rotate", cursor: "grab" } : cn(r, n.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: l.mode === "pano" ? "grab" : "default" };
  }
  function hs(n, r) {
    return {
      x0: Math.min(Number((n == null ? void 0 : n.x) || 0), Number((r == null ? void 0 : r.x) || 0)),
      y0: Math.min(Number((n == null ? void 0 : n.y) || 0), Number((r == null ? void 0 : r.y) || 0)),
      x1: Math.max(Number((n == null ? void 0 : n.x) || 0), Number((r == null ? void 0 : r.x) || 0)),
      y1: Math.max(Number((n == null ? void 0 : n.y) || 0), Number((r == null ? void 0 : r.y) || 0))
    };
  }
  function ud(n, r) {
    return !!n && !!r && Number(r.x) >= Number(n.x0) && Number(r.x) <= Number(n.x1) && Number(r.y) >= Number(n.y0) && Number(r.y) <= Number(n.y1);
  }
  function ld(n, r) {
    if (!n || !(r != null && r.visible) || !Array.isArray(r.corners)) return !1;
    if (r.corners.some((u) => ud(n, u))) return !0;
    const a = (Number(n.x0) + Number(n.x1)) * 0.5, s = (Number(n.y0) + Number(n.y1)) * 0.5;
    return !!cn({ x: a, y: s }, r.corners);
  }
  function Qt(n) {
    if (ed(), l.interaction) {
      l.interaction.kind === "paint_stroke" || l.interaction.kind === "paint_lasso_fill" ? I.style.cursor = "none" : l.interaction.kind === "view" || l.interaction.kind === "pan_frame" ? I.style.cursor = "grabbing" : l.interaction.kind === "move" || l.interaction.kind === "move_multi" || l.interaction.kind === "move_stroke_group" || l.interaction.kind === "move_raster_object" ? I.style.cursor = "move" : l.interaction.kind === "scale" || l.interaction.kind === "scale_x" || l.interaction.kind === "scale_y" ? I.style.cursor = l.interaction.cursor || "nwse-resize" : l.interaction.kind === "rotate" ? I.style.cursor = "grabbing" : I.style.cursor = "default";
      return;
    }
    if (fs()) {
      I.style.cursor = "none";
      return;
    }
    if (l.mode === "frame" && l.primaryTool !== "cursor") {
      I.style.cursor = "default";
      return;
    }
    if (l.primaryTool === "cursor" && l.marqueeModifier) {
      I.style.cursor = "default";
      return;
    }
    const r = Jt(), a = r ? le(r) : null, s = r ? ln(r) : !1, u = s ? { kind: "none", cursor: "default" } : $a(a, n);
    if (!s && u.kind !== "none") {
      I.style.cursor = u.cursor;
      return;
    }
    if (l.primaryTool === "cursor" && ps(n)) {
      I.style.cursor = "default";
      return;
    }
    I.style.cursor = l.mode === "pano" ? "grab" : "default";
  }
  function Dt() {
    if (!G) return;
    const n = Jt(), r = Ue();
    if (!n && r.length === 0 || l.interaction) {
      G.style.display = "none";
      return;
    }
    if (r.length > 1) {
      const J = "multi", V = ba(r);
      if (l.menuMode !== J)
        G.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${at.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${at.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${V ? "Unlock" : "Lock"}" data-tip="${V ? "Unlock" : "Lock"}">${V ? at.lock_open : at.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${at.delete}</button>
        `, l.menuMode = J, l.menuSize.measured = !1, Dr(G);
      else {
        const yt = G.querySelector("[data-action='toggle-lock']");
        yt && (yt.innerHTML = V ? at.lock_open : at.lock_closed, yt.setAttribute("aria-label", V ? "Unlock" : "Lock"), yt.setAttribute("data-tip", V ? "Unlock" : "Lock"));
      }
      const Y = ya(r);
      if (!(Y != null && Y.visible)) {
        G.style.display = "none";
        return;
      }
      const bt = Y.corners.map((yt) => yt.x), _t = Y.corners.map((yt) => yt.y), vt = Math.min(...bt), wt = Math.max(...bt), Nt = Math.max(..._t), kt = G.style.display, At = G.style.visibility;
      G.style.display = "flex", G.style.visibility = "hidden";
      const qt = G.getBoundingClientRect(), nn = Math.round(Number((qt == null ? void 0 : qt.width) || 0)) || G.offsetWidth || l.menuSize.w || 220, rn = Math.round(Number((qt == null ? void 0 : qt.height) || 0)) || G.offsetHeight || l.menuSize.h || 40;
      l.menuSize.w = Number.isFinite(nn) && nn > 0 ? nn : 220, l.menuSize.h = Number.isFinite(rn) && rn > 0 ? rn : 40, G.style.display = kt, G.style.visibility = At, l.menuSize.measured = !0;
      const Tr = l.menuSize.w, Si = l.menuSize.h, Qn = 14;
      G.style.display = "flex";
      let tr = (vt + wt) * 0.5 - Tr * 0.5, Rr = Nt + 18;
      if (tr = O(tr, Qn, I.width - Tr - Qn), Rr + Si > I.height - Qn) {
        G.style.display = "none";
        return;
      }
      G.style.left = `${tr}px`, G.style.top = `${Rr}px`;
      return;
    }
    const a = Do(), s = ln(n), u = a === "stroke" ? "stroke:paint" : e === "stickers" || a === "image" ? `stickers:${ie(n) ? "external" : "normal"}` : `cutout:${l.cutoutAspectOpen ? "open" : "closed"}`;
    if (l.menuMode !== u) {
      if (a === "stroke")
        G.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${at.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${at.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${s ? "Unlock" : "Lock"}" data-tip="${s ? "Unlock" : "Lock"}">${s ? at.lock_open : at.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${at.delete}</button>
        `;
      else if (e === "stickers" || a === "image")
        G.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${at.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${at.send_back}</button>
          ${ie(n) ? "" : `<button class="pano-btn pano-btn-icon" data-action="duplicate" aria-label="Duplicate" data-tip="Duplicate">${at.duplicate}</button><button class="pano-btn pano-btn-icon" data-action="replace-image" aria-label="Replace Image" data-tip="Replace image">${at.replace_image}</button>`}
          ${ie(n) ? `<button class="pano-btn pano-btn-icon" data-action="back-initial" aria-label="Back to Initial" data-tip="Back to initial position">${at.back_initial}</button>` : ""}
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${s ? "Unlock" : "Lock"}" data-tip="${s ? "Unlock" : "Lock"}">${s ? at.lock_open : at.lock_closed}</button>
          ${ie(n) ? `<button class="pano-btn pano-btn-icon" data-action="toggle-visible" aria-label="Hide" data-tip="Hide input image">${at.eye_dashed}</button>` : `<button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${at.delete}</button>`}
        `;
      else {
        const J = ar(n);
        G.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${at.aspect}</button>
            <div class="pano-aspect-popover${l.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
              <button class="pano-btn pano-aspect-choice${J === "1:1" ? " active" : ""}" data-action="aspect-set" data-aspect="1:1">1:1</button>
              <button class="pano-btn pano-aspect-choice${J === "4:3" ? " active" : ""}" data-action="aspect-set" data-aspect="4:3">4:3</button>
              <button class="pano-btn pano-aspect-choice${J === "3:2" ? " active" : ""}" data-action="aspect-set" data-aspect="3:2">3:2</button>
              <button class="pano-btn pano-aspect-choice${J === "16:9" ? " active" : ""}" data-action="aspect-set" data-aspect="16:9">16:9</button>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon" data-action="rotate-90" aria-label="Rotate 90°" data-tip="Rotate 90°">${at.rotate_90}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${s ? "Unlock" : "Lock"}" data-tip="${s ? "Unlock" : "Lock"}">${s ? at.lock_open : at.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${at.delete}</button>
        `;
      }
      l.menuMode = u, l.menuSize.measured = !1, Dr(G);
    }
    if ((e === "stickers" || a === "image") && ie(n)) {
      const J = G.querySelector("[data-action='back-initial']");
      if (J) {
        const Y = Au();
        J.disabled = !Y, J.setAttribute("aria-disabled", Y ? "false" : "true"), J.setAttribute("data-tip", Y ? "Back to initial position" : "Already at initial position");
      }
      const V = G.querySelector("[data-action='toggle-visible']");
      if (V) {
        const Y = Bn(n);
        V.innerHTML = Y ? at.eye : at.eye_dashed, V.setAttribute("aria-label", Y ? "Show" : "Hide"), V.setAttribute("data-tip", Y ? "Show input image" : "Hide input image");
      }
    }
    const f = G.querySelector("[data-action='toggle-lock']");
    f && (f.innerHTML = s ? at.lock_open : at.lock_closed, f.setAttribute("aria-label", s ? "Unlock" : "Lock"), f.setAttribute("data-tip", s ? "Unlock" : "Lock"));
    const b = le(n);
    if (!(b != null && b.visible)) {
      G.style.display = "none";
      return;
    }
    const m = b.corners, g = m.map((J) => J.x), _ = m.map((J) => J.y), v = Math.min(...g), N = Math.max(...g), C = Math.max(..._), A = G.style.display, E = G.style.visibility;
    G.style.display = "flex", G.style.visibility = "hidden";
    const H = G.getBoundingClientRect(), B = Math.round(Number((H == null ? void 0 : H.width) || 0)) || G.offsetWidth || l.menuSize.w || 220, nt = Math.round(Number((H == null ? void 0 : H.height) || 0)) || G.offsetHeight || l.menuSize.h || 40;
    l.menuSize.w = Number.isFinite(B) && B > 0 ? B : 220, l.menuSize.h = Number.isFinite(nt) && nt > 0 ? nt : 40, G.style.display = A, G.style.visibility = E, l.menuSize.measured = !0;
    const dt = l.menuSize.w, tt = l.menuSize.h, it = 14;
    G.style.display = "flex";
    let et = (v + N) * 0.5 - dt * 0.5, st = C + 18;
    if (!Number.isFinite(et) || !Number.isFinite(st)) {
      G.style.display = "none";
      return;
    }
    if (et = O(et, it, I.width - dt - it), st + tt > I.height - it) {
      G.style.display = "none";
      return;
    }
    G.style.left = `${et}px`, G.style.top = `${st}px`;
  }
  function yi() {
    j && (Ce.timer && (clearTimeout(Ce.timer), Ce.timer = 0), Ce.target = null, j.classList.remove("show", "pano-tooltip-footer", "pano-tooltip-tool-rail"));
  }
  function dd(n) {
    if (!j || !n || !n.isConnected) return;
    const r = String(n.getAttribute("data-tip") || "").trim();
    if (!r) return;
    j.textContent = r;
    const a = R.getBoundingClientRect(), s = n.getBoundingClientRect(), u = 8, f = j.offsetWidth || 100, b = j.offsetHeight || 24, m = !!n.closest(".pano-floating-left"), g = !!n.closest(".pano-paint-footer") || !!n.closest(".pano-paint-color-float");
    j.classList.remove("pano-tooltip-footer", "pano-tooltip-tool-rail");
    let _ = s.left - a.left + s.width * 0.5 - f * 0.5, v = s.top - a.top - b - 8;
    if (m)
      j.classList.add("pano-tooltip-tool-rail"), _ = s.right - a.left + 10, v = s.top - a.top + s.height * 0.5 - b * 0.5, _ = O(_, u, Math.max(u, a.width - f - u)), v = O(v, u, Math.max(u, a.height - b - u));
    else if (g) {
      j.classList.add("pano-tooltip-footer");
      const N = n.closest(".pano-paint-footer"), C = N ? N.getBoundingClientRect() : s;
      _ = C.left - a.left + C.width * 0.5 - f * 0.5, v = C.bottom - a.top + 5, _ = O(_, u, Math.max(u, a.width - f - u)), v = Math.max(u, v);
    }
    _ = O(_, u, Math.max(u, a.width - f - u)), v = Math.max(u, v), j.style.left = `${_}px`, j.style.top = `${v}px`, j.classList.add("show");
  }
  function Dr(n) {
    n.querySelectorAll("[data-tip]").forEach((r) => {
      r.__panoTipBound || (r.__panoTipBound = !0, r.addEventListener("pointerenter", () => {
        Ce.target = r, Ce.timer && clearTimeout(Ce.timer), Ce.timer = window.setTimeout(() => {
          Ce.target === r && dd(r);
        }, 220);
      }), r.addEventListener("pointerleave", () => {
        Ce.target === r && (Ce.target = null), yi();
      }), r.addEventListener("pointerdown", yi));
    });
  }
  const de = ca({
    getView: () => ({ yaw: l.viewYaw, pitch: l.viewPitch, fov: l.viewFov }),
    setView: (n) => {
      l.viewYaw = pe(Number(n.yaw || 0)), l.viewPitch = O(Number(n.pitch || 0), -89.9, 89.9), l.viewFov = O(Number(n.fov || l.viewFov || 100), 35, 140);
    },
    getInvert: () => {
      var n, r;
      return {
        x: (n = p.ui_settings) != null && n.invert_view_x ? -1 : 1,
        y: (r = p.ui_settings) != null && r.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: dn,
    onInteraction: () => {
      Ot.dirty = !0;
    }
  });
  I.onpointerdown = (n) => {
    const r = Zn(n);
    if (mi(r, !0), l.viewTween = null, de.state.inertia.active = !1, de.state.inertia.vx = 0, de.state.inertia.vy = 0, n.button === 1) {
      n.preventDefault(), l.mode !== "frame" && (l.interaction = { kind: "view", last: r, lastTs: performance.now() }, de.startDrag(r.x, r.y, n.pointerId, performance.now())), Qt(r), I.setPointerCapture(n.pointerId);
      return;
    }
    if (n.button !== 0) return;
    if (o) {
      l.mode === "pano" && (l.interaction = { kind: "view", last: r, lastTs: performance.now() }, de.startDrag(r.x, r.y, n.pointerId, performance.now()), Qt(r), I.setPointerCapture(n.pointerId));
      return;
    }
    if (ft && !ft.hidden)
      return;
    if ((l.primaryTool === "paint" || l.primaryTool === "mask") && (ls() || Oa())) {
      const m = l.primaryTool === "mask" ? "mask" : "paint", g = l.primaryTool === "mask" ? l.maskTool : l.paintTool, _ = Oa() ? Ut() : null, v = { kind: "ERP_GLOBAL" }, N = _ ? Te(r, _, performance.now()) : Le(r, performance.now());
      l.interaction = {
        kind: g === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: m,
        _livePreviewToken: or("live"),
        stroke: g === "lasso_fill" ? id(m, g, [N], v) : rd(m, g, [N], v)
      }, kr();
      const C = en();
      if (C)
        if (l.paintEngine.beginStroke(l.interaction.stroke, C), l.interaction.kind === "paint_stroke") {
          const A = l.paintEngine.ensureTarget(C), E = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), H = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          l.paintEngine.appendStrokePoint(A, E, H, l.interaction.stroke);
        } else
          l.paintEngine.updateActiveStroke(l.interaction.stroke, C);
      Qt(r), I.setPointerCapture(n.pointerId), Q();
      return;
    }
    const a = Ue(), s = Jt(), u = a.length > 1 ? ya(a) : s ? le(s) : null;
    if (l.primaryTool === "cursor" && (n.ctrlKey || n.metaKey)) {
      l.interaction = { kind: "marquee_select", start: r, current: r }, Qt(r), I.setPointerCapture(n.pointerId), Q({ localOnly: !0 });
      return;
    }
    if (a.length > 1 && (u != null && u.visible)) {
      if ((a.some((g) => ln(g)) ? { kind: "none" } : $a(u, r)).kind === "move") {
        l.interaction = {
          kind: "move_multi",
          items: a.map((g) => g),
          offset: { x: r.x - u.center.x, y: r.y - u.center.y },
          startCenter: { x: u.center.x, y: u.center.y },
          stickerSnapshots: a.filter((g) => ue(g)).map((g) => ({
            id: String(g.id || ""),
            yaw_deg: Number(g.yaw_deg || 0),
            pitch_deg: Number(g.pitch_deg || 0),
            center: (() => {
              var v, N;
              const _ = le(g);
              return _ != null && _.visible ? { x: Number(((v = _.center) == null ? void 0 : v.x) || 0), y: Number(((N = _.center) == null ? void 0 : N.y) || 0) } : { x: r.x, y: r.y };
            })()
          })),
          strokeSnapshots: a.filter((g) => oe(g)).map((g) => ({
            id: String(g.actionGroupId || g.id || ""),
            layerKind: String(g.layerKind || "paint"),
            snapshot: Se(Ee(g.actionGroupId, g.layerKind)),
            frameSnapshot: Se(Mn(g.actionGroupId, g.layerKind)),
            center: (() => {
              var v, N;
              const _ = le(g);
              return _ != null && _.visible ? { x: Number(((v = _.center) == null ? void 0 : v.x) || 0), y: Number(((N = _.center) == null ? void 0 : N.y) || 0) } : { x: r.x, y: r.y };
            })(),
            centerUv: Co(g.actionGroupId, g.layerKind)
          })),
          rasterSnapshots: a.filter((g) => ye(g)).map((g) => ({
            id: ge(g.rasterObjectId || g.id || ""),
            snapshot: Se(Ne().find((_) => String((_ == null ? void 0 : _.id) || "") === ge(g.rasterObjectId || g.id || ""))),
            center: (() => {
              var v, N;
              const _ = le(g);
              return _ != null && _.visible ? { x: Number(((v = _.center) == null ? void 0 : v.x) || 0), y: Number(((N = _.center) == null ? void 0 : N.y) || 0) } : { x: r.x, y: r.y };
            })(),
            centerUv: Xu(g)
          }))
        }, Qt(r), I.setPointerCapture(n.pointerId);
        return;
      }
    } else if (s && (u != null && u.visible)) {
      const m = ln(s) ? { kind: "none" } : $a(u, r);
      if (m.kind === "scale") {
        l.interaction = oe(s) ? {
          kind: "scale_stroke_group",
          item: s,
          center: u.center,
          startDist: Math.max(1, Math.hypot(r.x - u.center.x, r.y - u.center.y)),
          snapshot: Se(Ee(s.actionGroupId, s.layerKind)),
          frameSnapshot: Se(Mn(s.actionGroupId, s.layerKind)),
          cursor: m.cursor
        } : {
          kind: "scale",
          item: s,
          center: u.center,
          startDist: Math.max(1, Math.hypot(r.x - u.center.x, r.y - u.center.y)),
          startHFOV: Number(s.hFOV_deg || 20),
          startVFOV: Number(s.vFOV_deg || 20),
          cursor: m.cursor
        }, Qt(r), I.setPointerCapture(n.pointerId);
        return;
      }
      if (m.kind === "scale_x" || m.kind === "scale_y") {
        l.interaction = {
          kind: m.kind,
          item: s,
          center: u.center,
          startDist: Math.max(1, Math.hypot(r.x - u.center.x, r.y - u.center.y)),
          startHFOV: Number(s.hFOV_deg || 20),
          startVFOV: Number(s.vFOV_deg || 20),
          cursor: m.cursor,
          edge: m.edge
        }, Qt(r), I.setPointerCapture(n.pointerId);
        return;
      }
      if (m.kind === "rotate") {
        l.interaction = oe(s) ? {
          kind: "rotate_stroke_group",
          item: s,
          center: u.center,
          startAng: Math.atan2(r.y - u.center.y, r.x - u.center.x),
          snapshot: Se(Ee(s.actionGroupId, s.layerKind)),
          frameSnapshot: Se(Mn(s.actionGroupId, s.layerKind))
        } : {
          kind: "rotate",
          item: s,
          center: u.center,
          startRot: Number(s.rot_deg || s.roll_deg || 0),
          startAng: Math.atan2(r.y - u.center.y, r.x - u.center.x)
        }, Qt(r), I.setPointerCapture(n.pointerId);
        return;
      }
      if (m.kind === "move") {
        if (oe(s)) {
          const g = l.mode === "frame" ? (() => {
            const _ = Ut();
            return _ ? Te(r, _, performance.now()) : null;
          })() : Le(r, performance.now());
          l.interaction = {
            kind: "move_stroke_group",
            item: s,
            startUv: g,
            snapshot: Se(Ee(s.actionGroupId, s.layerKind)),
            frameSnapshot: Se(Mn(s.actionGroupId, s.layerKind))
          }, Qt(r), I.setPointerCapture(n.pointerId);
          return;
        }
        if (ye(s)) {
          const g = l.mode === "frame" ? (() => {
            const _ = Ut();
            return _ ? Te(r, _, performance.now()) : null;
          })() : Le(r, performance.now());
          l.interaction = {
            kind: "move_raster_object",
            item: s,
            startUv: g,
            snapshot: Se(Ne().find((_) => String((_ == null ? void 0 : _.id) || "") === ge(s.rasterObjectId || s.id || "")))
          }, Qt(r), I.setPointerCapture(n.pointerId);
          return;
        }
        l.interaction = {
          kind: "move",
          item: s,
          offset: { x: r.x - u.center.x, y: r.y - u.center.y }
        }, Qt(r), I.setPointerCapture(n.pointerId);
        return;
      }
    }
    const f = ps(r);
    if (f) {
      const m = l.selectedId !== f.item.id;
      if (m && l.selectedId && (Kt(), je()), ai(f.item), e === "cutout" && m && (l.cutoutAspectOpen = !1), m && $t(), Dt(), Q(), m) {
        Qt(r);
        return;
      }
      if (ln(f.item)) {
        Qt(r);
        return;
      }
      l.interaction = {
        kind: oe(f.item) ? "move_stroke_group" : ye(f.item) ? "move_raster_object" : "move",
        item: f.item,
        offset: { x: r.x - f.geom.center.x, y: r.y - f.geom.center.y },
        startUv: oe(f.item) || ye(f.item) ? l.mode === "frame" ? (() => {
          const g = Ut();
          return g ? Te(r, g, performance.now()) : null;
        })() : Le(r, performance.now()) : null,
        snapshot: oe(f.item) ? Se(Ee(f.item.actionGroupId, f.item.layerKind)) : ye(f.item) ? Se(Ne().find((g) => String((g == null ? void 0 : g.id) || "") === ge(f.item.rasterObjectId || f.item.id || ""))) : null,
        frameSnapshot: oe(f.item) ? Se(Mn(f.item.actionGroupId, f.item.layerKind)) : null
      }, Qt(r), I.setPointerCapture(n.pointerId);
      return;
    }
    const b = !!l.selectedId;
    b && (Kt(), je()), Kn(), b && $t(), Dt(), Q(), l.mode === "pano" && (l.interaction = { kind: "view", last: r, lastTs: performance.now() }, de.startDrag(r.x, r.y, n.pointerId, performance.now()), Qt(r), I.setPointerCapture(n.pointerId));
  }, I.onpointermove = (n) => {
    var s, u, f, b, m, g, _, v, N, C, A, E, H, B, nt, dt, tt, it;
    const r = Zn(n);
    if (mi(r, !0), !l.interaction) {
      Qt(r);
      return;
    }
    Qt(r);
    const a = l.interaction;
    if (a.kind === "paint_stroke") {
      const et = typeof n.getCoalescedEvents == "function" ? n.getCoalescedEvents() : [n];
      let st = !1;
      et.forEach((J) => {
        const V = Zn(J);
        ad(a, V, performance.now()) && (st = !0);
      }), st && Q({ localOnly: !0 });
      return;
    }
    if (a.kind === "paint_lasso_fill") {
      const et = typeof n.getCoalescedEvents == "function" ? n.getCoalescedEvents() : [n];
      let st = !1;
      if (et.forEach((J) => {
        const V = Zn(J);
        od(a, V, performance.now()) && (st = !0);
      }), st) {
        const J = en();
        J && l.paintEngine.updateActiveStroke(a.stroke, J), Q({ localOnly: !0 });
      }
      return;
    }
    if (a.kind === "view") {
      const et = performance.now();
      de.moveDrag(r.x, r.y, l.mode === "unwrap" ? "unwrap" : "pano", et), a.lastTs = et, a.last = r, Q({ localOnly: !0 });
      return;
    }
    if (a.kind === "pan_frame") {
      l.frameView.panX += r.x - a.last.x, l.frameView.panY += r.y - a.last.y, a.last = r, Q({ localOnly: !0 });
      return;
    }
    if (a.kind === "move") {
      const et = r.x - a.offset.x, st = r.y - a.offset.y;
      if (l.mode === "frame" && e === "cutout") {
        const J = Ut(), V = ve(J);
        if (!J || !V) return;
        const Y = {
          x: O((et - V.x) / Math.max(1, V.w), 0, 1),
          y: O((st - V.y) / Math.max(1, V.h), 0, 1)
        }, bt = Ea(J, Y);
        if (!bt) return;
        const _t = Oi(bt);
        a.item.yaw_deg = _t.yaw, a.item.pitch_deg = _t.pitch;
      } else if (l.mode === "unwrap") {
        const J = dn(), V = O((et - J.x) / Math.max(J.w, 1), 0, 1), Y = O((st - J.y) / Math.max(J.h, 1), 0, 1);
        a.item.yaw_deg = pe(V * 360 - 180), a.item.pitch_deg = O(90 - Y * 180, -90, 90);
      } else {
        const J = wa(et, st), V = Oi(J);
        a.item.yaw_deg = V.yaw, a.item.pitch_deg = V.pitch;
      }
      Q({ localOnly: !0 });
      return;
    }
    if (a.kind === "move_stroke_group") {
      const et = l.mode === "frame" ? (() => {
        const V = Ut();
        return V ? Te(r, V, performance.now()) : null;
      })() : Le(r, performance.now());
      if (!et || !a.startUv) return;
      const st = Number(et.u || 0) - Number(a.startUv.u || 0), J = Number(et.v || 0) - Number(a.startUv.v || 0);
      Ao((s = a.item) == null ? void 0 : s.actionGroupId, st, J, a.snapshot, (u = a.item) == null ? void 0 : u.layerKind, a.frameSnapshot) && (Ge({ rebuildPaintEngine: !0 }), Q({ localOnly: !0 }));
      return;
    }
    if (a.kind === "move_raster_object") {
      const et = l.mode === "frame" ? (() => {
        const V = Ut();
        return V ? Te(r, V, performance.now()) : null;
      })() : Le(r, performance.now());
      if (!et || !a.startUv) return;
      const st = Number(et.u || 0) - Number(a.startUv.u || 0), J = Number(et.v || 0) - Number(a.startUv.v || 0);
      Eo(((f = a.item) == null ? void 0 : f.rasterObjectId) || ((b = a.item) == null ? void 0 : b.id) || "", st, J, a.snapshot) && (Ar(), Q({ localOnly: !0 }));
      return;
    }
    if (a.kind === "move_multi") {
      const et = r.x - Number(((m = a.offset) == null ? void 0 : m.x) || 0), st = r.y - Number(((g = a.offset) == null ? void 0 : g.y) || 0);
      let J = !1, V = !1, Y = !1;
      const bt = et - Number(((_ = a.startCenter) == null ? void 0 : _.x) || et), _t = st - Number(((v = a.startCenter) == null ? void 0 : v.y) || st);
      for (const vt of Array.isArray(a.stickerSnapshots) ? a.stickerSnapshots : []) {
        const wt = (e === "cutout" ? ga() : un()).find((kt) => String((kt == null ? void 0 : kt.id) || "") === String(vt.id || ""));
        if (!wt || !ue(wt)) continue;
        const Nt = {
          x: Number(((N = vt.center) == null ? void 0 : N.x) || 0) + bt,
          y: Number(((C = vt.center) == null ? void 0 : C.y) || 0) + _t
        };
        if (l.mode === "frame" && e === "cutout") {
          const kt = Ut(), At = ve(kt);
          if (!kt || !At) continue;
          const qt = {
            x: O((Nt.x - At.x) / Math.max(1, At.w), 0, 1),
            y: O((Nt.y - At.y) / Math.max(1, At.h), 0, 1)
          }, nn = Ea(kt, qt);
          if (!nn) continue;
          const rn = Oi(nn);
          wt.yaw_deg = rn.yaw, wt.pitch_deg = rn.pitch;
        } else if (l.mode === "unwrap") {
          const kt = dn(), At = O((Nt.x - kt.x) / Math.max(kt.w, 1), 0, 1), qt = O((Nt.y - kt.y) / Math.max(kt.h, 1), 0, 1);
          wt.yaw_deg = pe(At * 360 - 180), wt.pitch_deg = O(90 - qt * 180, -90, 90);
        } else {
          const kt = wa(Nt.x, Nt.y), At = Oi(kt);
          wt.yaw_deg = At.yaw, wt.pitch_deg = At.pitch;
        }
        J = !0;
      }
      for (const vt of Array.isArray(a.strokeSnapshots) ? a.strokeSnapshots : []) {
        const wt = {
          x: Number(((A = vt.center) == null ? void 0 : A.x) || 0) + bt,
          y: Number(((E = vt.center) == null ? void 0 : E.y) || 0) + _t
        }, Nt = l.mode === "frame" ? (() => {
          const At = Ut();
          return At ? Te(wt, At, performance.now()) : null;
        })() : Le(wt, performance.now()), kt = vt.centerUv || null;
        if (Nt && kt) {
          const At = Number(Nt.u || 0) - Number(kt.u || 0), qt = Number(Nt.v || 0) - Number(kt.v || 0);
          Ao(vt.id, At, qt, vt.snapshot, vt.layerKind, vt.frameSnapshot) && (J = !0, V = !0);
        }
      }
      for (const vt of Array.isArray(a.rasterSnapshots) ? a.rasterSnapshots : []) {
        const wt = {
          x: Number(((H = vt.center) == null ? void 0 : H.x) || 0) + bt,
          y: Number(((B = vt.center) == null ? void 0 : B.y) || 0) + _t
        }, Nt = l.mode === "frame" ? (() => {
          const At = Ut();
          return At ? Te(wt, At, performance.now()) : null;
        })() : Le(wt, performance.now()), kt = vt.centerUv || null;
        if (Nt && kt) {
          const At = Number(Nt.u || 0) - Number(kt.u || 0), qt = Number(Nt.v || 0) - Number(kt.v || 0);
          Eo(vt.id, At, qt, vt.snapshot) && (J = !0, Y = !0);
        }
      }
      J && (V ? Ge({ rebuildPaintEngine: !0 }) : Y ? Ar() : De(), Q({ localOnly: !0 }));
      return;
    }
    if (a.kind === "scale_stroke_group") {
      const st = Math.max(1, Math.hypot(r.x - a.center.x, r.y - a.center.y)) / Math.max(1, Number(a.startDist || 1));
      Io((nt = a.item) == null ? void 0 : nt.actionGroupId, st, 0, a.snapshot, (dt = a.item) == null ? void 0 : dt.layerKind, a.frameSnapshot) && (Ge({ rebuildPaintEngine: !0 }), Q({ localOnly: !0 }));
      return;
    }
    if (a.kind === "rotate_stroke_group") {
      let et = (Math.atan2(r.y - a.center.y, r.x - a.center.x) - Number(a.startAng || 0)) * Tn;
      n.shiftKey && (et = Math.round(et / 45) * 45), Io((tt = a.item) == null ? void 0 : tt.actionGroupId, 1, et, a.snapshot, (it = a.item) == null ? void 0 : it.layerKind, a.frameSnapshot) && (Ge({ rebuildPaintEngine: !0 }), Q({ localOnly: !0 }));
      return;
    }
    if (a.kind === "marquee_select") {
      a.current = r, Q({ localOnly: !0 });
      return;
    }
    if (a.kind === "scale") {
      const st = Math.max(1, Math.hypot(r.x - a.center.x, r.y - a.center.y)) / a.startDist;
      a.item.hFOV_deg = O(a.startHFOV * st, 1, 179), a.item.vFOV_deg = O(a.startVFOV * st, 1, 179), a.item.aspect_id = Rn(a.item), Q({ localOnly: !0 });
      return;
    }
    if (a.kind === "scale_x") {
      const st = Math.max(1, Math.hypot(r.x - a.center.x, r.y - a.center.y)) / a.startDist;
      a.item.hFOV_deg = O(a.startHFOV * st, 1, 179), a.item.aspect_id = Rn(a.item), Q({ localOnly: !0 });
      return;
    }
    if (a.kind === "scale_y") {
      const st = Math.max(1, Math.hypot(r.x - a.center.x, r.y - a.center.y)) / a.startDist;
      a.item.vFOV_deg = O(a.startVFOV * st, 1, 179), a.item.aspect_id = Rn(a.item), Q({ localOnly: !0 });
      return;
    }
    if (a.kind === "rotate") {
      let st = (Math.atan2(r.y - a.center.y, r.x - a.center.x) - a.startAng) * Tn, J = a.startRot - st;
      n.shiftKey && (J = Math.round(J / 45) * 45);
      const V = ue(a.item) ? "rot_deg" : "roll_deg";
      a.item[V] = J, Q({ localOnly: !0 });
    }
  }, I.onpointerup = () => {
    var r, a, s, u, f, b;
    const n = l.interaction;
    if (((r = l.interaction) == null ? void 0 : r.kind) === "paint_stroke" || ((a = l.interaction) == null ? void 0 : a.kind) === "paint_lasso_fill")
      if (kr(), cd(l.interaction)) {
        Ge();
        const m = String(((s = l.interaction.stroke) == null ? void 0 : s.actionGroupId) || "").trim();
        if (m) {
          const _ = he().find((v) => String((v == null ? void 0 : v.actionGroupId) || "") === m);
          _ && (_.frame = null);
        }
        const g = en();
        g && (String(((u = l.interaction.stroke) == null ? void 0 : u.toolKind) || "") === "eraser" ? (l.paintEngine.cancelActiveStroke(g), Zo()) : l.paintEngine.commitActiveStroke(l.interaction.stroke, g)), Kt(), je(), $t(), Dt(), t.setDirtyCanvas(!0, !0), Q();
      } else {
        const m = en();
        m && l.paintEngine.cancelActiveStroke(m);
      }
    else if (((f = l.interaction) == null ? void 0 : f.kind) === "marquee_select") {
      const m = hs(l.interaction.start, l.interaction.current), _ = [
        ...e === "cutout" ? Ca().filter((v) => !Ie(v)) : [...un()],
        ...pu(),
        ...hu()
      ].filter((v) => ld(m, le(v)));
      _u(_, ((b = _[_.length - 1]) == null ? void 0 : b.id) || null), e === "cutout" && _.length && (l.cutoutAspectOpen = !1), $t(), Dt(), Q();
    } else if (l.interaction && l.interaction.kind !== "view" && l.interaction.kind !== "pan_frame") {
      let m = !1;
      (l.interaction.kind === "move_stroke_group" || l.interaction.kind === "scale_stroke_group" || l.interaction.kind === "rotate_stroke_group") && (m = !0), l.interaction.kind === "move_raster_object" && (m = !0), l.interaction.kind === "move_multi" && Array.isArray(l.interaction.strokeSnapshots) && l.interaction.strokeSnapshots.length && (m = !0), l.interaction.kind === "move_multi" && Array.isArray(l.interaction.rasterSnapshots) && l.interaction.rasterSnapshots.length && (m = !0), m && Ar(), Kt(), je(), t.setDirtyCanvas(!0, !0), Ta(), l.hqFrames = 1, Dt(), Q();
    }
    l.interaction = null, kr(), n && n.kind === "view" && de.endDrag(performance.now()), si(), Dt(), Qt(l.pointerPos), Q();
  }, I.onpointercancel = () => {
    var n, r, a;
    if (((n = l.interaction) == null ? void 0 : n.kind) === "view" && de.endDrag(performance.now()), ((r = l.interaction) == null ? void 0 : r.kind) === "paint_stroke" || ((a = l.interaction) == null ? void 0 : a.kind) === "paint_lasso_fill") {
      kr();
      const s = en();
      s && l.paintEngine.cancelActiveStroke(s);
    }
    l.interaction = null, kr(), si(), Qt(l.pointerPos), Q({ localOnly: !0 });
  }, I.onauxclick = (n) => {
    n.button === 1 && n.preventDefault();
  }, I.onmousemove = (n) => {
    const r = Zn(n);
    mi(r, !0), !l.interaction && Qt(r);
  }, I.onmouseleave = () => {
    mi(l.pointerPos, !1), Qt(l.pointerPos);
  }, I.onwheel = (n) => {
    if (l.mode === "frame") {
      const r = Zn(n), a = n.deltaY < 0 ? 1.1 : 1 / 1.1;
      Jl(r, a) && Q({ localOnly: !0 }), n.preventDefault();
      return;
    }
    l.mode === "pano" && (de.applyWheelEvent(n) && Q({ localOnly: !0 }), n.preventDefault());
  }, I.ondragover = (n) => {
    e !== "stickers" && e !== "cutout" || o || (n.preventDefault(), Nn(!0));
  }, I.ondrop = (n) => {
    var s;
    if (e !== "stickers" && e !== "cutout" || o) return;
    n.preventDefault(), n.stopPropagation(), Ae.depth = 0, Nn(!1);
    const a = Array.from(((s = n.dataTransfer) == null ? void 0 : s.files) || []).find((u) => hi(u));
    a && ns(a);
  };
  const ms = (n) => {
    e !== "stickers" && e !== "cutout" || o || fa(n) && (Ae.depth += 1, Nn(!0), n.preventDefault());
  }, gs = (n) => {
    e !== "stickers" && e !== "cutout" || o || (!Ae.active && fa(n) && Nn(!0), Ae.active && n.preventDefault());
  }, ys = (n) => {
    if (e !== "stickers" && e !== "cutout" || o || !Ae.active) return;
    Ae.depth = Math.max(0, Ae.depth - 1);
    const r = Number(n.clientX) <= 0 && Number(n.clientY) <= 0;
    (Ae.depth === 0 || r) && Nn(!1);
  }, bs = (n) => {
    e !== "stickers" && e !== "cutout" || o || (Ae.depth = 0, Nn(!1), fa(n) && n.preventDefault());
  };
  window.addEventListener("dragenter", ms, !0), window.addEventListener("dragover", gs, !0), window.addEventListener("dragleave", ys, !0), window.addEventListener("drop", bs, !0), q.forEach((n) => {
    n.onclick = () => {
      n.disabled || (l.mode = n.dataset.view, e === "cutout" && l.mode === "frame" && Jt() && Ie(Jt()) && (Kn({ preservePanelValues: !0 }), $t(), Dt()), Fa(), si(), Q());
    };
  });
  function za() {
    const { canUndo: n, canRedo: r } = es();
    k.querySelectorAll("[data-action='undo'], [data-tool-ui-action='undo']").forEach((a) => {
      a.disabled = !n;
    }), k.querySelectorAll("[data-action='redo'], [data-tool-ui-action='redo']").forEach((a) => {
      a.disabled = !r;
    });
  }
  const Va = k.querySelector("[data-action='undo']");
  Va && (Va.onclick = () => {
    o || Va.disabled || Er(-1);
  });
  const Ha = k.querySelector("[data-action='redo']");
  Ha && (Ha.onclick = () => {
    o || Ha.disabled || Er(1);
  });
  const vs = k.querySelector("[data-action='add']");
  vs && (vs.onclick = () => {
    o || (e === "stickers" ? Ra() : is());
  });
  const _s = k.querySelector("[data-action='clear']");
  _s && (_s.onclick = () => {
    o || os();
  });
  const ws = k.querySelector("[data-action='save']");
  ws && (ws.onclick = () => {
    o || us();
  }), k.querySelector("[data-action='reset-view']").onclick = () => {
    pa(0, 0, 100, 180, 680);
  };
  const In = k.querySelector("[data-action='toggle-grid']"), Ua = () => {
    if (!In) return;
    const n = !!l.showGrid;
    In.innerHTML = n ? at.eye : at.eye_dashed, In.setAttribute("aria-pressed", n ? "true" : "false"), In.setAttribute("aria-label", n ? "Hide Grid" : "Show Grid"), In.setAttribute("data-tip", n ? "Hide grid" : "Show grid");
  };
  if (In && (Ua(), In.onclick = () => {
    l.showGrid = !l.showGrid, Ap(t == null ? void 0 : t.id, l.showGrid), Ua(), Q();
  }), z && (z.querySelectorAll("[data-tool-mode]").forEach((n) => {
    n.onclick = () => {
      if (o) return;
      const r = String(n.getAttribute("data-tool-mode") || "cursor");
      l.primaryTool = r, (r === "paint" || r === "mask") && Kn({ preservePanelValues: !0 }), Me(), $t(), Dt(), Q();
    };
  }), z.querySelectorAll("[data-tool-ui-action]").forEach((n) => {
    n.onclick = () => {
      if (o) return;
      const r = String(n.getAttribute("data-tool-ui-action") || "");
      if (!((r === "undo" || r === "redo") && n.disabled)) {
        if (r === "undo") Er(-1);
        else if (r === "redo") Er(1);
        else if (r === "clear") os();
        else if (r === "add") Ra();
        else if (r === "add-image") Ra();
        else if (r === "add-or-look") {
          const a = Ut();
          if ((p.shots || []).length === 0)
            is();
          else {
            const s = a;
            if (!s) return;
            l.selectedId = s.id || null, l.selectedIds = l.selectedId ? [l.selectedId] : [], p.active.selected_shot_id = l.selectedId;
            const u = pe(Number(s.yaw_deg || 0)), f = O(Number(s.pitch_deg || 0), -89.9, 89.9);
            pa(u, f, l.viewFov), $t(), Dt(), Q();
          }
        }
      }
    };
  })), k.querySelectorAll("[data-paint-tool]").forEach((n) => {
    n.onclick = () => {
      l.primaryTool = "paint";
      const r = String(n.getAttribute("data-paint-tool") || "pen");
      l.paintTool = r, Kn({ preservePanelValues: !0 }), xe[r] && (l.activeBrushPresetId = r), Me(), $t(), Dt(), Q();
    };
  }), k.querySelectorAll("[data-mask-tool]").forEach((n) => {
    n.onclick = () => {
      l.primaryTool = "mask", l.maskTool = String(n.getAttribute("data-mask-tool") || "pen"), Kn({ preservePanelValues: !0 }), Me(), $t(), Dt(), Q();
    };
  }), Ct.forEach((n) => {
    n.onclick = () => {
      const r = String(n.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
      Kl(r);
    };
  }), Bt.forEach((n) => {
    n.oninput = () => {
      if (n.disabled) return;
      const r = Math.max(1, Math.min(120, Math.round(Number(n.value)))), a = gn(l.primaryTool === "paint" ? l.paintTool : l.maskTool);
      l.brushSizes[a] = r;
      const s = (r - 1) / 119 * 100;
      Bt.forEach((u) => {
        u.value = String(r), u.style.setProperty("--v", `${O(s, 0, 100)}%`);
      }), Vt.forEach((u) => {
        u.textContent = String(r);
      }), nd();
    }, n.onchange = () => gi(), n.addEventListener("pointerup", gi), n.addEventListener("pointercancel", gi), n.addEventListener("blur", gi);
  }), ht) {
    ht.querySelectorAll("[data-paint-color-swatch]").forEach((r) => {
      r.onclick = () => {
        const a = Ki.find((s) => s.id === r.getAttribute("data-paint-color-swatch"));
        a && (l.paintColor = ke(a.color), la(!0), Me());
      };
    });
    const n = ht.querySelector("[data-paint-color-custom]");
    n && (n.onclick = (r) => {
      r.preventDefault(), r.stopPropagation(), ft && !ft.hidden ? la(!0) : ou(), Me();
    });
  }
  const fd = (n, r) => {
    var m;
    if (!W) return;
    const a = W.getBoundingClientRect(), s = O((n - a.left) / Math.max(1, a.width), 0, 1), u = 1 - O((r - a.top) / Math.max(1, a.height), 0, 1), f = Ur(l.customPaintColor), b = { ...ro(f.h, s, u), a: Number(((m = l.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    l.customPaintColor = ke(b), l.paintColor = ke(b), Me();
  }, pd = (n) => {
    var f;
    if (!Et) return;
    const r = Et.getBoundingClientRect(), a = O((n - r.left) / Math.max(1, r.width), 0, 1), s = Ur(l.customPaintColor), u = { ...ro(a, s.s, s.v), a: Number(((f = l.customPaintColor) == null ? void 0 : f.a) ?? 1) };
    l.customPaintColor = ke(u), l.paintColor = ke(u), Me();
  }, xs = (n, r) => {
    const a = n.pointerId;
    r(n);
    const s = (f) => {
      f.pointerId === a && r(f);
    }, u = (f) => {
      f.pointerId === a && (window.removeEventListener("pointermove", s), window.removeEventListener("pointerup", u), window.removeEventListener("pointercancel", u));
    };
    window.addEventListener("pointermove", s), window.addEventListener("pointerup", u), window.addEventListener("pointercancel", u);
  };
  W && (W.onpointerdown = (n) => {
    n.preventDefault(), n.stopPropagation(), xs(n, (r) => fd(r.clientX, r.clientY));
  }), Et && (Et.onpointerdown = (n) => {
    n.preventDefault(), n.stopPropagation(), xs(n, (r) => pd(r.clientX));
  }), $ && ($.oninput = () => {
    const n = { ...l.customPaintColor, a: O(Number($.value) / 100, 0, 1) };
    l.customPaintColor = ke(n), l.paintColor = ke(n), Me();
  });
  const Ss = () => {
    if (!rt) return;
    const n = !!l.fullscreen;
    rt.innerHTML = n ? at.fullscreen_close : at.fullscreen, rt.setAttribute("aria-label", n ? "Exit Fullscreen" : "Fullscreen"), rt.setAttribute("data-tip", n ? "Exit fullscreen" : "Fullscreen");
  }, bi = (n) => {
    const r = !!n;
    l.fullscreen !== r && (l.fullscreen = r, k.classList.toggle("pano-modal-fullscreen", r), r ? (l.fullscreenPrevShowGrid = !!l.showGrid, l.showGrid = !1) : l.fullscreenPrevShowGrid !== null && (l.showGrid = !!l.fullscreenPrevShowGrid, l.fullscreenPrevShowGrid = null), Ua(), Ss(), Q());
  }, Ns = () => document.fullscreenElement === M, hd = async () => {
    var n, r;
    try {
      if (!document.fullscreenEnabled) {
        bi(!l.fullscreen);
        return;
      }
      Ns() ? await ((r = document.exitFullscreen) == null ? void 0 : r.call(document)) : await ((n = M.requestFullscreen) == null ? void 0 : n.call(M));
    } catch {
      bi(!l.fullscreen);
    }
  }, Ms = () => {
    document.fullscreenEnabled && bi(Ns());
  };
  document.addEventListener("fullscreenchange", Ms), rt && (Ss(), rt.onclick = (n) => {
    n.preventDefault(), n.stopPropagation(), hd();
  });
  const ks = () => {
    if (!D) return;
    const n = !!l.outputPreviewExpanded;
    D.innerHTML = n ? at.fullscreen_close : at.fullscreen, D.setAttribute("aria-label", n ? "Reduce Preview" : "Expand Preview"), D.setAttribute("data-tip", n ? "Reduce preview" : "Expand preview");
  };
  D && (ks(), D.onclick = (n) => {
    n.preventDefault(), n.stopPropagation();
    const r = !l.outputPreviewExpanded;
    l.outputPreviewExpanded = r, l.outputPreviewAnimFrom = l.outputPreviewAnim, l.outputPreviewAnimTo = r ? 1 : 0, l.outputPreviewAnimStartTs = performance.now(), ks(), Q();
  }), G.addEventListener("click", (n) => {
    const r = n.target.closest("[data-action]");
    if (!r) return;
    const a = r.getAttribute("data-action");
    if (!o) {
      if (a === "aspect") {
        l.cutoutAspectOpen = !l.cutoutAspectOpen, l.menuSize.measured = !1, Dt(), Q();
        return;
      }
      if (a === "aspect-set") {
        const s = Jt();
        if (!s) return;
        const u = String(r.getAttribute("data-aspect") || "1:1");
        ql(s, u), l.cutoutAspectOpen = !1, l.menuSize.measured = !1, Ta(), Kt(), ne(), Dt(), Q();
        return;
      }
      if (a === "rotate-90") {
        const s = Jt();
        if (!s) return;
        Yl(s), l.cutoutAspectOpen = !1, l.menuSize.measured = !1, Ta(), Kt(), ne(), Dt(), Q();
        return;
      }
      if (a === "bring-front") {
        Xl();
        return;
      }
      if (a === "send-back") {
        Zl();
        return;
      }
      if (a === "duplicate") {
        Wl();
        return;
      }
      if (a === "replace-image") {
        Ul();
        return;
      }
      if (a === "toggle-lock") {
        vu();
        return;
      }
      if (a === "back-initial") {
        Pu();
        return;
      }
      if (a === "toggle-visible") {
        ku();
        return;
      }
      if (a === "delete") {
        ss();
        return;
      }
      Q();
    }
  });
  const Ga = t.onExecuted, ja = t.onConnectionsChange;
  let Ba = null, Ka = null, Wa = null;
  !o && e === "stickers" && (Wa = (n = "sync") => {
    zo(n);
  }, t.__panoExternalStickerSync = Wa, Ba = function(...r) {
    var a;
    typeof Ga == "function" && Ga.apply(this, r), (a = this.__panoExternalStickerSync) == null || a.call(this, "executed");
  }, t.onExecuted = Ba, Ka = function(...r) {
    var a;
    typeof ja == "function" && ja.apply(this, r), (a = this.__panoExternalStickerSync) == null || a.call(this, "connections");
  }, t.onConnectionsChange = Ka), o || (yo.set(String(t.id ?? "0"), () => Ma()), Yu() && Ma());
  const Lr = () => {
    var n, r, a, s, u, f, b, m;
    l.cutoutPreviewSurfaceRaf && (cancelAnimationFrame(l.cutoutPreviewSurfaceRaf), l.cutoutPreviewSurfaceRaf = 0), l.cutoutPreviewSurfaceTimer && (clearTimeout(l.cutoutPreviewSurfaceTimer), l.cutoutPreviewSurfaceTimer = 0), yo.delete(String(t.id ?? "0")), o || Ma(), document.fullscreenElement === M && ((n = document.exitFullscreen) == null || n.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Ms), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (a = (r = t.__panoDomPreview) == null ? void 0 : r.requestDraw) == null || a.call(r), (u = (s = t.graph) == null ? void 0 : s.setDirtyCanvas) == null || u.call(s, !0, !0), (m = (b = (f = Pe) == null ? void 0 : f.canvas) == null ? void 0 : b.setDirty) == null || m.call(b, !0, !0), yi(), Vl(), Nn(!1), window.removeEventListener("keydown", Ps, !0), window.removeEventListener("keydown", Cs, !0), window.removeEventListener("keydown", vi, !0), window.removeEventListener("keyup", vi, !0), window.removeEventListener("keydown", As, !0), window.removeEventListener("dragenter", ms, !0), window.removeEventListener("dragover", gs, !0), window.removeEventListener("dragleave", ys, !0), window.removeEventListener("drop", bs, !0), !o && e === "stickers" && (t.onExecuted === Ba && (t.onExecuted = Ga), t.onConnectionsChange === Ka && (t.onConnectionsChange = ja), t.__panoExternalStickerSync === Wa && (t.__panoExternalStickerSync = null)), M.remove();
  }, Ps = (n) => {
    var r;
    if (n.key === "Escape") {
      if (l.fullscreen && document.fullscreenElement === M) {
        (r = document.exitFullscreen) == null || r.call(document).catch(() => {
        });
        return;
      }
      if (l.fullscreen) {
        bi(!1);
        return;
      }
      Lr();
    }
  }, Cs = (n) => {
    const r = String(n.key || ""), a = String(n.code || ""), s = Number(n.keyCode || 0);
    if (!(r === "Delete" || a === "Delete" || s === 46) && !(r === "Backspace" || a === "Backspace" || s === 8)) return;
    const b = n.target, m = ((b == null ? void 0 : b.tagName) || "").toUpperCase();
    m === "INPUT" || m === "TEXTAREA" || b != null && b.isContentEditable || !Jt() || (ss(), n.preventDefault(), n.stopPropagation());
  }, vi = (n) => {
    const r = !!(n.ctrlKey || n.metaKey);
    l.marqueeModifier !== r && (l.marqueeModifier = r, Qt(l.pointerPos));
  }, As = (n) => {
    if (o || !n.ctrlKey && !n.metaKey) return;
    const r = String(n.key || "").toLowerCase(), a = String(n.code || "");
    if (r !== "z" && a !== "KeyZ") return;
    const s = n.target, u = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    if (u === "INPUT" || u === "TEXTAREA" || s != null && s.isContentEditable) return;
    const { canUndo: f, canRedo: b } = es();
    n.shiftKey && !b || !n.shiftKey && !f || (Er(n.shiftKey ? 1 : -1), n.preventDefault(), n.stopPropagation());
  };
  window.addEventListener("keydown", Ps, !0), window.addEventListener("keydown", Cs, !0), window.addEventListener("keydown", vi, !0), window.addEventListener("keyup", vi, !0), window.addEventListener("keydown", As, !0), M.addEventListener("pointerdown", (n) => {
    n.target === M && Lr();
  }), Dr(k), Fu(), !o && e === "stickers" && zo("open"), Gl(), Kt(), za(), Me(), ut && requestAnimationFrame(() => {
    ut.classList.add("is-ready");
  }), $t(), oi(), ts(), Qt(l.pointerPos), Q(), Ot.rafId = requestAnimationFrame(La);
}
function Sc(t, e, i, o) {
  if (!(t != null && t.prototype)) return;
  const c = (w) => {
    var P, p;
    try {
      (P = w.__panoDomRestore) == null || P.call(w);
    } catch {
    }
    try {
      (p = w.__panoLegacyRestore) == null || p.call(w);
    } catch {
    }
    w.__panoDomPreview = null, w.__panoLegacyPreviewHooked = !1, w.__panoPreviewHooked = !1, w.__panoPreviewAttached = !1, w.__panoPreviewMountKey = null;
  };
  function d(w) {
    var L;
    const P = `editor_btn|${i}`;
    if (w.__panoPreviewAttached === !0 && w.__panoPreviewMountKey === P) return;
    c(w), Fp(w, go);
    const M = pr(w, go);
    if (M && !M.__panoPreviewPatchedCb) {
      M.__panoPreviewPatchedCb = !0;
      const I = M.callback;
      M.callback = (R) => {
        var F;
        const T = I ? I(R) : void 0;
        return (F = w.setDirtyCanvas) == null || F.call(w, !0, !1), T;
      };
    }
    const k = pr(w, "bg_color");
    if (k && (k.value == null || String(k.value).trim() === "" || String(k.value).toLowerCase() === "#000000") && (k.value = "#00ff00", (L = k.callback) == null || L.call(k, "#00ff00")), i === "PanoramaStickers") {
      vo(w, o, () => Qr(w, "stickers"));
      {
        w.__panoPreviewAttached = !0, w.__panoPreviewMountKey = P;
        return;
      }
    }
    vo(w, o, () => Qr(w, "cutout")), np(w, {
      buttonText: o,
      onOpen: () => Qr(w, "cutout")
    }), (!Array.isArray(w.size) || w.size[0] < 10 || w.size[1] < 10) && (w.size = [360, 260]), w.__panoPreviewAttached = !0, w.__panoPreviewMountKey = P;
  }
  const h = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const w = h ? h.apply(this, arguments) : void 0;
    return d(this), w;
  };
  const y = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const w = y ? y.apply(this, arguments) : void 0;
    return this.widgets && d(this), w;
  };
  const x = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const w = x ? x.apply(this, arguments) : void 0;
    return this.widgets && d(this), w;
  };
}
function qp(t) {
  if (!(t != null && t.prototype)) return;
  const e = function() {
    (!Array.isArray(this.size) || this.size[0] < 100 || this.size[1] < 100) && (this.size = [360, 260]);
  }, i = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const c = i ? i.apply(this, arguments) : void 0;
    return e.call(this), c;
  };
  const o = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const c = o ? o.apply(this, arguments) : void 0;
    return e.call(this), c;
  };
}
function Yp(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const o = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), c = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = c, !o && c < 40) {
      requestAnimationFrame(e);
      return;
    }
    vo(t, "Open Preview", () => Qr(t, "stickers", { readOnly: !0, hideSidebar: !1 })), ep(t, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (d) => Qr(d, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), t.__panoStandaloneInstallDone = !0, t.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(e);
}
Pe.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  async beforeQueuePrompt() {
    const t = [...yo.values()].map((i) => {
      try {
        return typeof i == "function" ? i() : null;
      } catch {
        return null;
      }
    }).filter(Boolean);
    t.length > 0 && await Promise.allSettled(t);
    const e = [...Wr.values()];
    e.length > 0 && await Promise.allSettled(e);
  },
  beforeRegisterNodeDef(t, e) {
    const i = String((e == null ? void 0 : e.name) || "");
    (i === "PanoramaStickers" || i === "Panorama Stickers") && Sc(t, e, "PanoramaStickers", "Open Stickers Editor"), (i === "PanoramaCutout" || i === "Panorama Cutout") && Sc(t, e, "PanoramaCutout", "Open Cutout Editor"), so(i) && qp(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    so(e) && Yp(t);
  }
});
