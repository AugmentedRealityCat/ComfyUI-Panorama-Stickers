import * as So from "../../scripts/app.js";
import { app as pn } from "../../scripts/app.js";
import { api as en } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function qc(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const oe = {}, Mi = [], Xn = () => {
}, id = () => !1, rs = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), is = (t) => t.startsWith("onUpdate:"), We = Object.assign, Yc = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, i0 = Object.prototype.hasOwnProperty, Yt = (t, e) => i0.call(t, e), Lt = Array.isArray, ki = (t) => Oa(t) === "[object Map]", ad = (t) => Oa(t) === "[object Set]", Fu = (t) => Oa(t) === "[object Date]", Ht = (t) => typeof t == "function", Pe = (t) => typeof t == "string", Zn = (t) => typeof t == "symbol", ee = (t) => t !== null && typeof t == "object", od = (t) => (ee(t) || Ht(t)) && Ht(t.then) && Ht(t.catch), sd = Object.prototype.toString, Oa = (t) => sd.call(t), a0 = (t) => Oa(t).slice(8, -1), cd = (t) => Oa(t) === "[object Object]", Xc = (t) => Pe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, ma = /* @__PURE__ */ qc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), as = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, o0 = /-\w/g, rn = as(
  (t) => t.replace(o0, (e) => e.slice(1).toUpperCase())
), s0 = /\B([A-Z])/g, Xr = as(
  (t) => t.replace(s0, "-$1").toLowerCase()
), os = as((t) => t.charAt(0).toUpperCase() + t.slice(1)), tc = as(
  (t) => t ? `on${os(t)}` : ""
), Kn = (t, e) => !Object.is(t, e), ec = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, ld = (t, e, n, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, c0 = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Vu;
const ss = () => Vu || (Vu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function cs(t) {
  if (Lt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], a = Pe(r) ? d0(r) : cs(r);
      if (a)
        for (const s in a)
          e[s] = a[s];
    }
    return e;
  } else if (Pe(t) || ee(t))
    return t;
}
const l0 = /;(?![^(]*\))/g, u0 = /:([^]+)/, f0 = /\/\*[^]*?\*\//g;
function d0(t) {
  const e = {};
  return t.replace(f0, "").split(l0).forEach((n) => {
    if (n) {
      const r = n.split(u0);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function ls(t) {
  let e = "";
  if (Pe(t))
    e = t;
  else if (Lt(t))
    for (let n = 0; n < t.length; n++) {
      const r = ls(t[n]);
      r && (e += r + " ");
    }
  else if (ee(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const h0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", p0 = /* @__PURE__ */ qc(h0);
function ud(t) {
  return !!t || t === "";
}
function g0(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = Zc(t[r], e[r]);
  return n;
}
function Zc(t, e) {
  if (t === e) return !0;
  let n = Fu(t), r = Fu(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Zn(t), r = Zn(e), n || r)
    return t === e;
  if (n = Lt(t), r = Lt(e), n || r)
    return n && r ? g0(t, e) : !1;
  if (n = ee(t), r = ee(e), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(t).length, s = Object.keys(e).length;
    if (a !== s)
      return !1;
    for (const u in t) {
      const f = t.hasOwnProperty(u), g = e.hasOwnProperty(u);
      if (f && !g || !f && g || !Zc(t[u], e[u]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const fd = (t) => !!(t && t.__v_isRef === !0), dd = (t) => Pe(t) ? t : t == null ? "" : Lt(t) || ee(t) && (t.toString === sd || !Ht(t.toString)) ? fd(t) ? dd(t.value) : JSON.stringify(t, hd, 2) : String(t), hd = (t, e) => fd(e) ? hd(t, e.value) : ki(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, a], s) => (n[nc(r, s) + " =>"] = a, n),
    {}
  )
} : ad(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => nc(n))
} : Zn(e) ? nc(e) : ee(e) && !Lt(e) && !cd(e) ? String(e) : e, nc = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Zn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let un;
class m0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = un, !e && un && (this.index = (un.scopes || (un.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, n;
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++)
          this.scopes[e].pause();
      for (e = 0, n = this.effects.length; e < n; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, n;
      if (this.scopes)
        for (e = 0, n = this.scopes.length; e < n; e++)
          this.scopes[e].resume();
      for (e = 0, n = this.effects.length; e < n; e++)
        this.effects[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const n = un;
      try {
        return un = this, e();
      } finally {
        un = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = un, un = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (un = this.prevScope, this.prevScope = void 0);
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const a = this.parent.scopes.pop();
        a && a !== this && (this.parent.scopes[this.index] = a, a.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function y0() {
  return un;
}
let ae;
const rc = /* @__PURE__ */ new WeakSet();
class pd {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, un && un.active && un.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, rc.has(this) && (rc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || md(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Hu(this), yd(this);
    const e = ae, n = Cn;
    ae = this, Cn = !0;
    try {
      return this.fn();
    } finally {
      vd(this), ae = e, Cn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        tl(e);
      this.deps = this.depsTail = void 0, Hu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? rc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Mc(this) && this.run();
  }
  get dirty() {
    return Mc(this);
  }
}
let gd = 0, ya, va;
function md(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = va, va = t;
    return;
  }
  t.next = ya, ya = t;
}
function Jc() {
  gd++;
}
function Qc() {
  if (--gd > 0)
    return;
  if (va) {
    let e = va;
    for (va = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; ya; ) {
    let e = ya;
    for (ya = void 0; e; ) {
      const n = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (r) {
          t || (t = r);
        }
      e = n;
    }
  }
  if (t) throw t;
}
function yd(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function vd(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), tl(r), v0(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  t.deps = e, t.depsTail = n;
}
function Mc(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (bd(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function bd(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Ca) || (t.globalVersion = Ca, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Mc(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = ae, r = Cn;
  ae = t, Cn = !0;
  try {
    yd(t);
    const a = t.fn(t._value);
    (e.version === 0 || Kn(a, t._value)) && (t.flags |= 128, t._value = a, e.version++);
  } catch (a) {
    throw e.version++, a;
  } finally {
    ae = n, Cn = r, vd(t), t.flags &= -3;
  }
}
function tl(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: a } = t;
  if (r && (r.nextSub = a, t.prevSub = void 0), a && (a.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      tl(s, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function v0(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let Cn = !0;
const _d = [];
function ur() {
  _d.push(Cn), Cn = !1;
}
function fr() {
  const t = _d.pop();
  Cn = t === void 0 ? !0 : t;
}
function Hu(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const n = ae;
    ae = void 0;
    try {
      e();
    } finally {
      ae = n;
    }
  }
}
let Ca = 0;
class b0 {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class el {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!ae || !Cn || ae === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ae)
      n = this.activeLink = new b0(ae, this), ae.deps ? (n.prevDep = ae.depsTail, ae.depsTail.nextDep = n, ae.depsTail = n) : ae.deps = ae.depsTail = n, wd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ae.depsTail, n.nextDep = void 0, ae.depsTail.nextDep = n, ae.depsTail = n, ae.deps === n && (ae.deps = r);
    }
    return n;
  }
  trigger(e) {
    this.version++, Ca++, this.notify(e);
  }
  notify(e) {
    Jc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Qc();
    }
  }
}
function wd(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        wd(r);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
  }
}
const kc = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ Symbol(
  ""
), Pc = /* @__PURE__ */ Symbol(
  ""
), Ia = /* @__PURE__ */ Symbol(
  ""
);
function je(t, e, n) {
  if (Cn && ae) {
    let r = kc.get(t);
    r || kc.set(t, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new el()), a.map = r, a.key = n), a.track();
  }
}
function lr(t, e, n, r, a, s) {
  const u = kc.get(t);
  if (!u) {
    Ca++;
    return;
  }
  const f = (g) => {
    g && g.trigger();
  };
  if (Jc(), e === "clear")
    u.forEach(f);
  else {
    const g = Lt(t), y = g && Xc(n);
    if (g && n === "length") {
      const _ = Number(r);
      u.forEach((d, M) => {
        (M === "length" || M === Ia || !Zn(M) && M >= _) && f(d);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), y && f(u.get(Ia)), e) {
        case "add":
          g ? y && f(u.get("length")) : (f(u.get(Ur)), ki(t) && f(u.get(Pc)));
          break;
        case "delete":
          g || (f(u.get(Ur)), ki(t) && f(u.get(Pc)));
          break;
        case "set":
          ki(t) && f(u.get(Ur));
          break;
      }
  }
  Qc();
}
function hi(t) {
  const e = /* @__PURE__ */ qt(t);
  return e === t ? e : (je(e, "iterate", Ia), /* @__PURE__ */ vn(t) ? e : e.map(In));
}
function us(t) {
  return je(t = /* @__PURE__ */ qt(t), "iterate", Ia), t;
}
function Gn(t, e) {
  return /* @__PURE__ */ dr(t) ? Di(/* @__PURE__ */ Br(t) ? In(e) : e) : In(e);
}
const _0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return ic(this, Symbol.iterator, (t) => Gn(this, t));
  },
  concat(...t) {
    return hi(this).concat(
      ...t.map((e) => Lt(e) ? hi(e) : e)
    );
  },
  entries() {
    return ic(this, "entries", (t) => (t[1] = Gn(this, t[1]), t));
  },
  every(t, e) {
    return ir(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return ir(
      this,
      "filter",
      t,
      e,
      (n) => n.map((r) => Gn(this, r)),
      arguments
    );
  },
  find(t, e) {
    return ir(
      this,
      "find",
      t,
      e,
      (n) => Gn(this, n),
      arguments
    );
  },
  findIndex(t, e) {
    return ir(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return ir(
      this,
      "findLast",
      t,
      e,
      (n) => Gn(this, n),
      arguments
    );
  },
  findLastIndex(t, e) {
    return ir(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return ir(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return ac(this, "includes", t);
  },
  indexOf(...t) {
    return ac(this, "indexOf", t);
  },
  join(t) {
    return hi(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return ac(this, "lastIndexOf", t);
  },
  map(t, e) {
    return ir(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return na(this, "pop");
  },
  push(...t) {
    return na(this, "push", t);
  },
  reduce(t, ...e) {
    return $u(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return $u(this, "reduceRight", t, e);
  },
  shift() {
    return na(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return ir(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return na(this, "splice", t);
  },
  toReversed() {
    return hi(this).toReversed();
  },
  toSorted(t) {
    return hi(this).toSorted(t);
  },
  toSpliced(...t) {
    return hi(this).toSpliced(...t);
  },
  unshift(...t) {
    return na(this, "unshift", t);
  },
  values() {
    return ic(this, "values", (t) => Gn(this, t));
  }
};
function ic(t, e, n) {
  const r = us(t), a = r[e]();
  return r !== t && !/* @__PURE__ */ vn(t) && (a._next = a.next, a.next = () => {
    const s = a._next();
    return s.done || (s.value = n(s.value)), s;
  }), a;
}
const w0 = Array.prototype;
function ir(t, e, n, r, a, s) {
  const u = us(t), f = u !== t && !/* @__PURE__ */ vn(t), g = u[e];
  if (g !== w0[e]) {
    const d = g.apply(t, s);
    return f ? In(d) : d;
  }
  let y = n;
  u !== t && (f ? y = function(d, M) {
    return n.call(this, Gn(t, d), M, t);
  } : n.length > 2 && (y = function(d, M) {
    return n.call(this, d, M, t);
  }));
  const _ = g.call(u, y, r);
  return f && a ? a(_) : _;
}
function $u(t, e, n, r) {
  const a = us(t), s = a !== t && !/* @__PURE__ */ vn(t);
  let u = n, f = !1;
  a !== t && (s ? (f = r.length === 0, u = function(y, _, d) {
    return f && (f = !1, y = Gn(t, y)), n.call(this, y, Gn(t, _), d, t);
  }) : n.length > 3 && (u = function(y, _, d) {
    return n.call(this, y, _, d, t);
  }));
  const g = a[e](u, ...r);
  return f ? Gn(t, g) : g;
}
function ac(t, e, n) {
  const r = /* @__PURE__ */ qt(t);
  je(r, "iterate", Ia);
  const a = r[e](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ al(n[0]) ? (n[0] = /* @__PURE__ */ qt(n[0]), r[e](...n)) : a;
}
function na(t, e, n = []) {
  ur(), Jc();
  const r = (/* @__PURE__ */ qt(t))[e].apply(t, n);
  return Qc(), fr(), r;
}
const x0 = /* @__PURE__ */ qc("__proto__,__v_isRef,__isVue"), xd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Zn)
);
function S0(t) {
  Zn(t) || (t = String(t));
  const e = /* @__PURE__ */ qt(this);
  return je(e, "has", t), e.hasOwnProperty(t);
}
class Sd {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, r) {
    if (n === "__v_skip") return e.__v_skip;
    const a = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return r === (a ? s ? D0 : Pd : s ? kd : Md).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const u = Lt(e);
    if (!a) {
      let g;
      if (u && (g = _0[n]))
        return g;
      if (n === "hasOwnProperty")
        return S0;
    }
    const f = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ge(e) ? e : r
    );
    if ((Zn(n) ? xd.has(n) : x0(n)) || (a || je(e, "get", n), s))
      return f;
    if (/* @__PURE__ */ Ge(f)) {
      const g = u && Xc(n) ? f : f.value;
      return a && ee(g) ? /* @__PURE__ */ Cc(g) : g;
    }
    return ee(f) ? a ? /* @__PURE__ */ Cc(f) : /* @__PURE__ */ rl(f) : f;
  }
}
class Nd extends Sd {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, a) {
    let s = e[n];
    const u = Lt(e) && Xc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ dr(s);
      if (!/* @__PURE__ */ vn(r) && !/* @__PURE__ */ dr(r) && (s = /* @__PURE__ */ qt(s), r = /* @__PURE__ */ qt(r)), !u && /* @__PURE__ */ Ge(s) && !/* @__PURE__ */ Ge(r))
        return y || (s.value = r), !0;
    }
    const f = u ? Number(n) < e.length : Yt(e, n), g = Reflect.set(
      e,
      n,
      r,
      /* @__PURE__ */ Ge(e) ? e : a
    );
    return e === /* @__PURE__ */ qt(a) && (f ? Kn(r, s) && lr(e, "set", n, r) : lr(e, "add", n, r)), g;
  }
  deleteProperty(e, n) {
    const r = Yt(e, n);
    e[n];
    const a = Reflect.deleteProperty(e, n);
    return a && r && lr(e, "delete", n, void 0), a;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Zn(n) || !xd.has(n)) && je(e, "has", n), r;
  }
  ownKeys(e) {
    return je(
      e,
      "iterate",
      Lt(e) ? "length" : Ur
    ), Reflect.ownKeys(e);
  }
}
class N0 extends Sd {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, n) {
    return !0;
  }
  deleteProperty(e, n) {
    return !0;
  }
}
const M0 = /* @__PURE__ */ new Nd(), k0 = /* @__PURE__ */ new N0(), P0 = /* @__PURE__ */ new Nd(!0);
const Ac = (t) => t, ro = (t) => Reflect.getPrototypeOf(t);
function A0(t, e, n) {
  return function(...r) {
    const a = this.__v_raw, s = /* @__PURE__ */ qt(a), u = ki(s), f = t === "entries" || t === Symbol.iterator && u, g = t === "keys" && u, y = a[t](...r), _ = n ? Ac : e ? Di : In;
    return !e && je(
      s,
      "iterate",
      g ? Pc : Ur
    ), We(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: d, done: M } = y.next();
          return M ? { value: d, done: M } : {
            value: f ? [_(d[0]), _(d[1])] : _(d),
            done: M
          };
        }
      }
    );
  };
}
function io(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function C0(t, e) {
  const n = {
    get(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ qt(s), f = /* @__PURE__ */ qt(a);
      t || (Kn(a, f) && je(u, "get", a), je(u, "get", f));
      const { has: g } = ro(u), y = e ? Ac : t ? Di : In;
      if (g.call(u, a))
        return y(s.get(a));
      if (g.call(u, f))
        return y(s.get(f));
      s !== u && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !t && je(/* @__PURE__ */ qt(a), "iterate", Ur), a.size;
    },
    has(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ qt(s), f = /* @__PURE__ */ qt(a);
      return t || (Kn(a, f) && je(u, "has", a), je(u, "has", f)), a === f ? s.has(a) : s.has(a) || s.has(f);
    },
    forEach(a, s) {
      const u = this, f = u.__v_raw, g = /* @__PURE__ */ qt(f), y = e ? Ac : t ? Di : In;
      return !t && je(g, "iterate", Ur), f.forEach((_, d) => a.call(s, y(_), y(d), u));
    }
  };
  return We(
    n,
    t ? {
      add: io("add"),
      set: io("set"),
      delete: io("delete"),
      clear: io("clear")
    } : {
      add(a) {
        const s = /* @__PURE__ */ qt(this), u = ro(s), f = /* @__PURE__ */ qt(a), g = !e && !/* @__PURE__ */ vn(a) && !/* @__PURE__ */ dr(a) ? f : a;
        return u.has.call(s, g) || Kn(a, g) && u.has.call(s, a) || Kn(f, g) && u.has.call(s, f) || (s.add(g), lr(s, "add", g, g)), this;
      },
      set(a, s) {
        !e && !/* @__PURE__ */ vn(s) && !/* @__PURE__ */ dr(s) && (s = /* @__PURE__ */ qt(s));
        const u = /* @__PURE__ */ qt(this), { has: f, get: g } = ro(u);
        let y = f.call(u, a);
        y || (a = /* @__PURE__ */ qt(a), y = f.call(u, a));
        const _ = g.call(u, a);
        return u.set(a, s), y ? Kn(s, _) && lr(u, "set", a, s) : lr(u, "add", a, s), this;
      },
      delete(a) {
        const s = /* @__PURE__ */ qt(this), { has: u, get: f } = ro(s);
        let g = u.call(s, a);
        g || (a = /* @__PURE__ */ qt(a), g = u.call(s, a)), f && f.call(s, a);
        const y = s.delete(a);
        return g && lr(s, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ qt(this), s = a.size !== 0, u = a.clear();
        return s && lr(
          a,
          "clear",
          void 0,
          void 0
        ), u;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    n[a] = A0(a, t, e);
  }), n;
}
function nl(t, e) {
  const n = C0(t, e);
  return (r, a, s) => a === "__v_isReactive" ? !t : a === "__v_isReadonly" ? t : a === "__v_raw" ? r : Reflect.get(
    Yt(n, a) && a in r ? n : r,
    a,
    s
  );
}
const I0 = {
  get: /* @__PURE__ */ nl(!1, !1)
}, E0 = {
  get: /* @__PURE__ */ nl(!1, !0)
}, T0 = {
  get: /* @__PURE__ */ nl(!0, !1)
};
const Md = /* @__PURE__ */ new WeakMap(), kd = /* @__PURE__ */ new WeakMap(), Pd = /* @__PURE__ */ new WeakMap(), D0 = /* @__PURE__ */ new WeakMap();
function R0(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function L0(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : R0(a0(t));
}
// @__NO_SIDE_EFFECTS__
function rl(t) {
  return /* @__PURE__ */ dr(t) ? t : il(
    t,
    !1,
    M0,
    I0,
    Md
  );
}
// @__NO_SIDE_EFFECTS__
function O0(t) {
  return il(
    t,
    !1,
    P0,
    E0,
    kd
  );
}
// @__NO_SIDE_EFFECTS__
function Cc(t) {
  return il(
    t,
    !0,
    k0,
    T0,
    Pd
  );
}
function il(t, e, n, r, a) {
  if (!ee(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = L0(t);
  if (s === 0)
    return t;
  const u = a.get(t);
  if (u)
    return u;
  const f = new Proxy(
    t,
    s === 2 ? r : n
  );
  return a.set(t, f), f;
}
// @__NO_SIDE_EFFECTS__
function Br(t) {
  return /* @__PURE__ */ dr(t) ? /* @__PURE__ */ Br(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function dr(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function vn(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function al(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function qt(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ qt(e) : t;
}
function F0(t) {
  return !Yt(t, "__v_skip") && Object.isExtensible(t) && ld(t, "__v_skip", !0), t;
}
const In = (t) => ee(t) ? /* @__PURE__ */ rl(t) : t, Di = (t) => ee(t) ? /* @__PURE__ */ Cc(t) : t;
// @__NO_SIDE_EFFECTS__
function Ge(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function V0(t) {
  return H0(t, !1);
}
function H0(t, e) {
  return /* @__PURE__ */ Ge(t) ? t : new $0(t, e);
}
class $0 {
  constructor(e, n) {
    this.dep = new el(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ qt(e), this._value = n ? e : In(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ vn(e) || /* @__PURE__ */ dr(e);
    e = r ? e : /* @__PURE__ */ qt(e), Kn(e, n) && (this._rawValue = e, this._value = r ? e : In(e), this.dep.trigger());
  }
}
function ol(t) {
  return /* @__PURE__ */ Ge(t) ? t.value : t;
}
const z0 = {
  get: (t, e, n) => e === "__v_raw" ? t : ol(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const a = t[e];
    return /* @__PURE__ */ Ge(a) && !/* @__PURE__ */ Ge(n) ? (a.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function Ad(t) {
  return /* @__PURE__ */ Br(t) ? t : new Proxy(t, z0);
}
class j0 {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new el(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ca - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ae !== this)
      return md(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return bd(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function U0(t, e, n = !1) {
  let r, a;
  return Ht(t) ? r = t : (r = t.get, a = t.set), new j0(r, a, n);
}
const ao = {}, Fo = /* @__PURE__ */ new WeakMap();
let Vr;
function B0(t, e = !1, n = Vr) {
  if (n) {
    let r = Fo.get(n);
    r || Fo.set(n, r = []), r.push(t);
  }
}
function G0(t, e, n = oe) {
  const { immediate: r, deep: a, once: s, scheduler: u, augmentJob: f, call: g } = n, y = (O) => a ? O : /* @__PURE__ */ vn(O) || a === !1 || a === 0 ? Ar(O, 1) : Ar(O);
  let _, d, M, I, R = !1, D = !1;
  if (/* @__PURE__ */ Ge(t) ? (d = () => t.value, R = /* @__PURE__ */ vn(t)) : /* @__PURE__ */ Br(t) ? (d = () => y(t), R = !0) : Lt(t) ? (D = !0, R = t.some((O) => /* @__PURE__ */ Br(O) || /* @__PURE__ */ vn(O)), d = () => t.map((O) => {
    if (/* @__PURE__ */ Ge(O))
      return O.value;
    if (/* @__PURE__ */ Br(O))
      return y(O);
    if (Ht(O))
      return g ? g(O, 2) : O();
  })) : Ht(t) ? e ? d = g ? () => g(t, 2) : t : d = () => {
    if (M) {
      ur();
      try {
        M();
      } finally {
        fr();
      }
    }
    const O = Vr;
    Vr = _;
    try {
      return g ? g(t, 3, [I]) : t(I);
    } finally {
      Vr = O;
    }
  } : d = Xn, e && a) {
    const O = d, B = a === !0 ? 1 / 0 : a;
    d = () => Ar(O(), B);
  }
  const A = y0(), F = () => {
    _.stop(), A && A.active && Yc(A.effects, _);
  };
  if (s && e) {
    const O = e;
    e = (...B) => {
      O(...B), F();
    };
  }
  let P = D ? new Array(t.length).fill(ao) : ao;
  const H = (O) => {
    if (!(!(_.flags & 1) || !_.dirty && !O))
      if (e) {
        const B = _.run();
        if (a || R || (D ? B.some((C, ct) => Kn(C, P[ct])) : Kn(B, P))) {
          M && M();
          const C = Vr;
          Vr = _;
          try {
            const ct = [
              B,
              // pass undefined as the old value when it's changed for the first time
              P === ao ? void 0 : D && P[0] === ao ? [] : P,
              I
            ];
            P = B, g ? g(e, 3, ct) : (
              // @ts-expect-error
              e(...ct)
            );
          } finally {
            Vr = C;
          }
        }
      } else
        _.run();
  };
  return f && f(H), _ = new pd(d), _.scheduler = u ? () => u(H, !1) : H, I = (O) => B0(O, !1, _), M = _.onStop = () => {
    const O = Fo.get(_);
    if (O) {
      if (g)
        g(O, 4);
      else
        for (const B of O) B();
      Fo.delete(_);
    }
  }, e ? r ? H(!0) : P = _.run() : u ? u(H.bind(null, !0), !0) : _.run(), F.pause = _.pause.bind(_), F.resume = _.resume.bind(_), F.stop = F, F;
}
function Ar(t, e = 1 / 0, n) {
  if (e <= 0 || !ee(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ Ge(t))
    Ar(t.value, e, n);
  else if (Lt(t))
    for (let r = 0; r < t.length; r++)
      Ar(t[r], e, n);
  else if (ad(t) || ki(t))
    t.forEach((r) => {
      Ar(r, e, n);
    });
  else if (cd(t)) {
    for (const r in t)
      Ar(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && Ar(t[r], e, n);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Fa(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (a) {
    fs(a, e, n);
  }
}
function Jn(t, e, n, r) {
  if (Ht(t)) {
    const a = Fa(t, e, n, r);
    return a && od(a) && a.catch((s) => {
      fs(s, e, n);
    }), a;
  }
  if (Lt(t)) {
    const a = [];
    for (let s = 0; s < t.length; s++)
      a.push(Jn(t[s], e, n, r));
    return a;
  }
}
function fs(t, e, n, r = !0) {
  const a = e ? e.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: u } = e && e.appContext.config || oe;
  if (e) {
    let f = e.parent;
    const g = e.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const _ = f.ec;
      if (_) {
        for (let d = 0; d < _.length; d++)
          if (_[d](t, g, y) === !1)
            return;
      }
      f = f.parent;
    }
    if (s) {
      ur(), Fa(s, null, 10, [
        t,
        g,
        y
      ]), fr();
      return;
    }
  }
  W0(t, n, a, r, u);
}
function W0(t, e, n, r = !0, a = !1) {
  if (a)
    throw t;
  console.error(t);
}
const tn = [];
let Un = -1;
const Pi = [];
let Pr = null, bi = 0;
const Cd = /* @__PURE__ */ Promise.resolve();
let Vo = null;
function Id(t) {
  const e = Vo || Cd;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function K0(t) {
  let e = Un + 1, n = tn.length;
  for (; e < n; ) {
    const r = e + n >>> 1, a = tn[r], s = Ea(a);
    s < t || s === t && a.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function sl(t) {
  if (!(t.flags & 1)) {
    const e = Ea(t), n = tn[tn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Ea(n) ? tn.push(t) : tn.splice(K0(e), 0, t), t.flags |= 1, Ed();
  }
}
function Ed() {
  Vo || (Vo = Cd.then(Dd));
}
function q0(t) {
  Lt(t) ? Pi.push(...t) : Pr && t.id === -1 ? Pr.splice(bi + 1, 0, t) : t.flags & 1 || (Pi.push(t), t.flags |= 1), Ed();
}
function zu(t, e, n = Un + 1) {
  for (; n < tn.length; n++) {
    const r = tn[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid)
        continue;
      tn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Td(t) {
  if (Pi.length) {
    const e = [...new Set(Pi)].sort(
      (n, r) => Ea(n) - Ea(r)
    );
    if (Pi.length = 0, Pr) {
      Pr.push(...e);
      return;
    }
    for (Pr = e, bi = 0; bi < Pr.length; bi++) {
      const n = Pr[bi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pr = null, bi = 0;
  }
}
const Ea = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Dd(t) {
  try {
    for (Un = 0; Un < tn.length; Un++) {
      const e = tn[Un];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Fa(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Un < tn.length; Un++) {
      const e = tn[Un];
      e && (e.flags &= -2);
    }
    Un = -1, tn.length = 0, Td(), Vo = null, (tn.length || Pi.length) && Dd();
  }
}
let An = null, Rd = null;
function Ho(t) {
  const e = An;
  return An = t, Rd = t && t.type.__scopeId || null, e;
}
function Y0(t, e = An, n) {
  if (!e || t._n)
    return t;
  const r = (...a) => {
    r._d && Qu(-1);
    const s = Ho(e);
    let u;
    try {
      u = t(...a);
    } finally {
      Ho(s), r._d && Qu(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Lr(t, e, n, r) {
  const a = t.dirs, s = e && e.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    s && (f.oldValue = s[u].value);
    let g = f.dir[r];
    g && (ur(), Jn(g, n, 8, [
      t.el,
      f,
      t,
      e
    ]), fr());
  }
}
function X0(t, e) {
  if (Be) {
    let n = Be.provides;
    const r = Be.parent && Be.parent.provides;
    r === n && (n = Be.provides = Object.create(r)), n[t] = e;
  }
}
function No(t, e, n = !1) {
  const r = Ym();
  if (r || Ci) {
    let a = Ci ? Ci._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && t in a)
      return a[t];
    if (arguments.length > 1)
      return n && Ht(e) ? e.call(r && r.proxy) : e;
  }
}
const Z0 = /* @__PURE__ */ Symbol.for("v-scx"), J0 = () => No(Z0);
function Mo(t, e, n) {
  return Ld(t, e, n);
}
function Ld(t, e, n = oe) {
  const { immediate: r, deep: a, flush: s, once: u } = n, f = We({}, n), g = e && r || !e && s !== "post";
  let y;
  if (Da) {
    if (s === "sync") {
      const I = J0();
      y = I.__watcherHandles || (I.__watcherHandles = []);
    } else if (!g) {
      const I = () => {
      };
      return I.stop = Xn, I.resume = Xn, I.pause = Xn, I;
    }
  }
  const _ = Be;
  f.call = (I, R, D) => Jn(I, _, R, D);
  let d = !1;
  s === "post" ? f.scheduler = (I) => {
    ln(I, _ && _.suspense);
  } : s !== "sync" && (d = !0, f.scheduler = (I, R) => {
    R ? I() : sl(I);
  }), f.augmentJob = (I) => {
    e && (I.flags |= 4), d && (I.flags |= 2, _ && (I.id = _.uid, I.i = _));
  };
  const M = G0(t, e, f);
  return Da && (y ? y.push(M) : g && M()), M;
}
function Q0(t, e, n) {
  const r = this.proxy, a = Pe(t) ? t.includes(".") ? Od(r, t) : () => r[t] : t.bind(r, r);
  let s;
  Ht(e) ? s = e : (s = e.handler, n = e);
  const u = Va(this), f = Ld(a, s.bind(r), n);
  return u(), f;
}
function Od(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const tm = /* @__PURE__ */ Symbol("_vte"), em = (t) => t.__isTeleport, nm = /* @__PURE__ */ Symbol("_leaveCb");
function cl(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, cl(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Fd(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function ju(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const $o = /* @__PURE__ */ new WeakMap();
function ba(t, e, n, r, a = !1) {
  if (Lt(t)) {
    t.forEach(
      (D, A) => ba(
        D,
        e && (Lt(e) ? e[A] : e),
        n,
        r,
        a
      )
    );
    return;
  }
  if (_a(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ba(t, e, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? dl(r.component) : r.el, u = a ? null : s, { i: f, r: g } = t, y = e && e.r, _ = f.refs === oe ? f.refs = {} : f.refs, d = f.setupState, M = /* @__PURE__ */ qt(d), I = d === oe ? id : (D) => ju(_, D) ? !1 : Yt(M, D), R = (D, A) => !(A && ju(_, A));
  if (y != null && y !== g) {
    if (Uu(e), Pe(y))
      _[y] = null, I(y) && (d[y] = null);
    else if (/* @__PURE__ */ Ge(y)) {
      const D = e;
      R(y, D.k) && (y.value = null), D.k && (_[D.k] = null);
    }
  }
  if (Ht(g))
    Fa(g, f, 12, [u, _]);
  else {
    const D = Pe(g), A = /* @__PURE__ */ Ge(g);
    if (D || A) {
      const F = () => {
        if (t.f) {
          const P = D ? I(g) ? d[g] : _[g] : R() || !t.k ? g.value : _[t.k];
          if (a)
            Lt(P) && Yc(P, s);
          else if (Lt(P))
            P.includes(s) || P.push(s);
          else if (D)
            _[g] = [s], I(g) && (d[g] = _[g]);
          else {
            const H = [s];
            R(g, t.k) && (g.value = H), t.k && (_[t.k] = H);
          }
        } else D ? (_[g] = u, I(g) && (d[g] = u)) : A && (R(g, t.k) && (g.value = u), t.k && (_[t.k] = u));
      };
      if (u) {
        const P = () => {
          F(), $o.delete(t);
        };
        P.id = -1, $o.set(t, P), ln(P, n);
      } else
        Uu(t), F();
    }
  }
}
function Uu(t) {
  const e = $o.get(t);
  e && (e.flags |= 8, $o.delete(t));
}
ss().requestIdleCallback;
ss().cancelIdleCallback;
const _a = (t) => !!t.type.__asyncLoader, Vd = (t) => t.type.__isKeepAlive;
function rm(t, e) {
  Hd(t, "a", e);
}
function im(t, e) {
  Hd(t, "da", e);
}
function Hd(t, e, n = Be) {
  const r = t.__wdc || (t.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return t();
  });
  if (ds(e, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Vd(a.parent.vnode) && am(r, e, n, a), a = a.parent;
  }
}
function am(t, e, n, r) {
  const a = ds(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  jd(() => {
    Yc(r[e], a);
  }, n);
}
function ds(t, e, n = Be, r = !1) {
  if (n) {
    const a = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...u) => {
      ur();
      const f = Va(n), g = Jn(e, n, t, u);
      return f(), fr(), g;
    });
    return r ? a.unshift(s) : a.push(s), s;
  }
}
const hr = (t) => (e, n = Be) => {
  (!Da || t === "sp") && ds(t, (...r) => e(...r), n);
}, om = hr("bm"), $d = hr("m"), sm = hr(
  "bu"
), cm = hr("u"), zd = hr(
  "bum"
), jd = hr("um"), lm = hr(
  "sp"
), um = hr("rtg"), fm = hr("rtc");
function dm(t, e = Be) {
  ds("ec", t, e);
}
const hm = "components", Ud = /* @__PURE__ */ Symbol.for("v-ndc");
function pm(t) {
  return Pe(t) ? gm(hm, t, !1) || t : t || Ud;
}
function gm(t, e, n = !0, r = !1) {
  const a = An || Be;
  if (a) {
    const s = a.type;
    {
      const f = t1(
        s,
        !1
      );
      if (f && (f === e || f === rn(e) || f === os(rn(e))))
        return s;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Bu(a[t] || s[t], e) || // global registration
      Bu(a.appContext[t], e)
    );
    return !u && r ? s : u;
  }
}
function Bu(t, e) {
  return t && (t[e] || t[rn(e)] || t[os(rn(e))]);
}
function Ai(t, e, n, r) {
  let a;
  const s = n, u = Lt(t);
  if (u || Pe(t)) {
    const f = u && /* @__PURE__ */ Br(t);
    let g = !1, y = !1;
    f && (g = !/* @__PURE__ */ vn(t), y = /* @__PURE__ */ dr(t), t = us(t)), a = new Array(t.length);
    for (let _ = 0, d = t.length; _ < d; _++)
      a[_] = e(
        g ? y ? Di(In(t[_])) : In(t[_]) : t[_],
        _,
        void 0,
        s
      );
  } else if (typeof t == "number") {
    a = new Array(t);
    for (let f = 0; f < t; f++)
      a[f] = e(f + 1, f, void 0, s);
  } else if (ee(t))
    if (t[Symbol.iterator])
      a = Array.from(
        t,
        (f, g) => e(f, g, void 0, s)
      );
    else {
      const f = Object.keys(t);
      a = new Array(f.length);
      for (let g = 0, y = f.length; g < y; g++) {
        const _ = f[g];
        a[g] = e(t[_], _, g, s);
      }
    }
  else
    a = [];
  return a;
}
const Ic = (t) => t ? dh(t) ? dl(t) : Ic(t.parent) : null, wa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ We(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Ic(t.parent),
    $root: (t) => Ic(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Gd(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      sl(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Id.bind(t.proxy)),
    $watch: (t) => Q0.bind(t)
  })
), oc = (t, e) => t !== oe && !t.__isScriptSetup && Yt(t, e), mm = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: a, props: s, accessCache: u, type: f, appContext: g } = t;
    if (e[0] !== "$") {
      const M = u[e];
      if (M !== void 0)
        switch (M) {
          case 1:
            return r[e];
          case 2:
            return a[e];
          case 4:
            return n[e];
          case 3:
            return s[e];
        }
      else {
        if (oc(r, e))
          return u[e] = 1, r[e];
        if (a !== oe && Yt(a, e))
          return u[e] = 2, a[e];
        if (Yt(s, e))
          return u[e] = 3, s[e];
        if (n !== oe && Yt(n, e))
          return u[e] = 4, n[e];
        Ec && (u[e] = 0);
      }
    }
    const y = wa[e];
    let _, d;
    if (y)
      return e === "$attrs" && je(t.attrs, "get", ""), y(t);
    if (
      // css module (injected by vue-loader)
      (_ = f.__cssModules) && (_ = _[e])
    )
      return _;
    if (n !== oe && Yt(n, e))
      return u[e] = 4, n[e];
    if (
      // global properties
      d = g.config.globalProperties, Yt(d, e)
    )
      return d[e];
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: a, ctx: s } = t;
    return oc(a, e) ? (a[e] = n, !0) : r !== oe && Yt(r, e) ? (r[e] = n, !0) : Yt(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: a, props: s, type: u }
  }, f) {
    let g;
    return !!(n[f] || t !== oe && f[0] !== "$" && Yt(t, f) || oc(e, f) || Yt(s, f) || Yt(r, f) || Yt(wa, f) || Yt(a.config.globalProperties, f) || (g = u.__cssModules) && g[f]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : Yt(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Gu(t) {
  return Lt(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Ec = !0;
function ym(t) {
  const e = Gd(t), n = t.proxy, r = t.ctx;
  Ec = !1, e.beforeCreate && Wu(e.beforeCreate, t, "bc");
  const {
    // state
    data: a,
    computed: s,
    methods: u,
    watch: f,
    provide: g,
    inject: y,
    // lifecycle
    created: _,
    beforeMount: d,
    mounted: M,
    beforeUpdate: I,
    updated: R,
    activated: D,
    deactivated: A,
    beforeDestroy: F,
    beforeUnmount: P,
    destroyed: H,
    unmounted: O,
    render: B,
    renderTracked: C,
    renderTriggered: ct,
    errorCaptured: Q,
    serverPrefetch: St,
    // public API
    expose: z,
    inheritAttrs: ut,
    // assets
    components: Nt,
    directives: Y,
    filters: it
  } = e;
  if (y && vm(y, r, null), u)
    for (const ot in u) {
      const yt = u[ot];
      Ht(yt) && (r[ot] = yt.bind(n));
    }
  if (a) {
    const ot = a.call(n, n);
    ee(ot) && (t.data = /* @__PURE__ */ rl(ot));
  }
  if (Ec = !0, s)
    for (const ot in s) {
      const yt = s[ot], Mt = Ht(yt) ? yt.bind(n, n) : Ht(yt.get) ? yt.get.bind(n, n) : Xn, Et = !Ht(yt) && Ht(yt.set) ? yt.set.bind(n) : Xn, et = Ii({
        get: Mt,
        set: Et
      });
      Object.defineProperty(r, ot, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (vt) => et.value = vt
      });
    }
  if (f)
    for (const ot in f)
      Bd(f[ot], r, n, ot);
  if (g) {
    const ot = Ht(g) ? g.call(n) : g;
    Reflect.ownKeys(ot).forEach((yt) => {
      X0(yt, ot[yt]);
    });
  }
  _ && Wu(_, t, "c");
  function ft(ot, yt) {
    Lt(yt) ? yt.forEach((Mt) => ot(Mt.bind(n))) : yt && ot(yt.bind(n));
  }
  if (ft(om, d), ft($d, M), ft(sm, I), ft(cm, R), ft(rm, D), ft(im, A), ft(dm, Q), ft(fm, C), ft(um, ct), ft(zd, P), ft(jd, O), ft(lm, St), Lt(z))
    if (z.length) {
      const ot = t.exposed || (t.exposed = {});
      z.forEach((yt) => {
        Object.defineProperty(ot, yt, {
          get: () => n[yt],
          set: (Mt) => n[yt] = Mt,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  B && t.render === Xn && (t.render = B), ut != null && (t.inheritAttrs = ut), Nt && (t.components = Nt), Y && (t.directives = Y), St && Fd(t);
}
function vm(t, e, n = Xn) {
  Lt(t) && (t = Tc(t));
  for (const r in t) {
    const a = t[r];
    let s;
    ee(a) ? "default" in a ? s = No(
      a.from || r,
      a.default,
      !0
    ) : s = No(a.from || r) : s = No(a), /* @__PURE__ */ Ge(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (u) => s.value = u
    }) : e[r] = s;
  }
}
function Wu(t, e, n) {
  Jn(
    Lt(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Bd(t, e, n, r) {
  let a = r.includes(".") ? Od(n, r) : () => n[r];
  if (Pe(t)) {
    const s = e[t];
    Ht(s) && Mo(a, s);
  } else if (Ht(t))
    Mo(a, t.bind(n));
  else if (ee(t))
    if (Lt(t))
      t.forEach((s) => Bd(s, e, n, r));
    else {
      const s = Ht(t.handler) ? t.handler.bind(n) : e[t.handler];
      Ht(s) && Mo(a, s, t);
    }
}
function Gd(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: a,
    optionsCache: s,
    config: { optionMergeStrategies: u }
  } = t.appContext, f = s.get(e);
  let g;
  return f ? g = f : !a.length && !n && !r ? g = e : (g = {}, a.length && a.forEach(
    (y) => zo(g, y, u, !0)
  ), zo(g, e, u)), ee(e) && s.set(e, g), g;
}
function zo(t, e, n, r = !1) {
  const { mixins: a, extends: s } = e;
  s && zo(t, s, n, !0), a && a.forEach(
    (u) => zo(t, u, n, !0)
  );
  for (const u in e)
    if (!(r && u === "expose")) {
      const f = bm[u] || n && n[u];
      t[u] = f ? f(t[u], e[u]) : e[u];
    }
  return t;
}
const bm = {
  data: Ku,
  props: qu,
  emits: qu,
  // objects
  methods: fa,
  computed: fa,
  // lifecycle
  beforeCreate: Qe,
  created: Qe,
  beforeMount: Qe,
  mounted: Qe,
  beforeUpdate: Qe,
  updated: Qe,
  beforeDestroy: Qe,
  beforeUnmount: Qe,
  destroyed: Qe,
  unmounted: Qe,
  activated: Qe,
  deactivated: Qe,
  errorCaptured: Qe,
  serverPrefetch: Qe,
  // assets
  components: fa,
  directives: fa,
  // watch
  watch: wm,
  // provide / inject
  provide: Ku,
  inject: _m
};
function Ku(t, e) {
  return e ? t ? function() {
    return We(
      Ht(t) ? t.call(this, this) : t,
      Ht(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function _m(t, e) {
  return fa(Tc(t), Tc(e));
}
function Tc(t) {
  if (Lt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Qe(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function fa(t, e) {
  return t ? We(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function qu(t, e) {
  return t ? Lt(t) && Lt(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : We(
    /* @__PURE__ */ Object.create(null),
    Gu(t),
    Gu(e ?? {})
  ) : e;
}
function wm(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = We(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = Qe(t[r], e[r]);
  return n;
}
function Wd() {
  return {
    app: null,
    config: {
      isNativeTag: id,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let xm = 0;
function Sm(t, e) {
  return function(r, a = null) {
    Ht(r) || (r = We({}, r)), a != null && !ee(a) && (a = null);
    const s = Wd(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let g = !1;
    const y = s.app = {
      _uid: xm++,
      _component: r,
      _props: a,
      _container: null,
      _context: s,
      _instance: null,
      version: n1,
      get config() {
        return s.config;
      },
      set config(_) {
      },
      use(_, ...d) {
        return u.has(_) || (_ && Ht(_.install) ? (u.add(_), _.install(y, ...d)) : Ht(_) && (u.add(_), _(y, ...d))), y;
      },
      mixin(_) {
        return s.mixins.includes(_) || s.mixins.push(_), y;
      },
      component(_, d) {
        return d ? (s.components[_] = d, y) : s.components[_];
      },
      directive(_, d) {
        return d ? (s.directives[_] = d, y) : s.directives[_];
      },
      mount(_, d, M) {
        if (!g) {
          const I = y._ceVNode || nn(r, a);
          return I.appContext = s, M === !0 ? M = "svg" : M === !1 && (M = void 0), t(I, _, M), g = !0, y._container = _, _.__vue_app__ = y, dl(I.component);
        }
      },
      onUnmount(_) {
        f.push(_);
      },
      unmount() {
        g && (Jn(
          f,
          y._instance,
          16
        ), t(null, y._container), delete y._container.__vue_app__);
      },
      provide(_, d) {
        return s.provides[_] = d, y;
      },
      runWithContext(_) {
        const d = Ci;
        Ci = y;
        try {
          return _();
        } finally {
          Ci = d;
        }
      }
    };
    return y;
  };
}
let Ci = null;
const Nm = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${rn(e)}Modifiers`] || t[`${Xr(e)}Modifiers`];
function Mm(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || oe;
  let a = n;
  const s = e.startsWith("update:"), u = s && Nm(r, e.slice(7));
  u && (u.trim && (a = n.map((_) => Pe(_) ? _.trim() : _)), u.number && (a = n.map(c0)));
  let f, g = r[f = tc(e)] || // also try camelCase event handler (#2249)
  r[f = tc(rn(e))];
  !g && s && (g = r[f = tc(Xr(e))]), g && Jn(
    g,
    t,
    6,
    a
  );
  const y = r[f + "Once"];
  if (y) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[f])
      return;
    t.emitted[f] = !0, Jn(
      y,
      t,
      6,
      a
    );
  }
}
const km = /* @__PURE__ */ new WeakMap();
function Kd(t, e, n = !1) {
  const r = n ? km : e.emitsCache, a = r.get(t);
  if (a !== void 0)
    return a;
  const s = t.emits;
  let u = {}, f = !1;
  if (!Ht(t)) {
    const g = (y) => {
      const _ = Kd(y, e, !0);
      _ && (f = !0, We(u, _));
    };
    !n && e.mixins.length && e.mixins.forEach(g), t.extends && g(t.extends), t.mixins && t.mixins.forEach(g);
  }
  return !s && !f ? (ee(t) && r.set(t, null), null) : (Lt(s) ? s.forEach((g) => u[g] = null) : We(u, s), ee(t) && r.set(t, u), u);
}
function hs(t, e) {
  return !t || !rs(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Yt(t, e[0].toLowerCase() + e.slice(1)) || Yt(t, Xr(e)) || Yt(t, e));
}
function Yu(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: a,
    propsOptions: [s],
    slots: u,
    attrs: f,
    emit: g,
    render: y,
    renderCache: _,
    props: d,
    data: M,
    setupState: I,
    ctx: R,
    inheritAttrs: D
  } = t, A = Ho(t);
  let F, P;
  try {
    if (n.shapeFlag & 4) {
      const O = a || r, B = O;
      F = Wn(
        y.call(
          B,
          O,
          _,
          d,
          I,
          M,
          R
        )
      ), P = f;
    } else {
      const O = e;
      F = Wn(
        O.length > 1 ? O(
          d,
          { attrs: f, slots: u, emit: g }
        ) : O(
          d,
          null
        )
      ), P = e.props ? f : Pm(f);
    }
  } catch (O) {
    xa.length = 0, fs(O, t, 1), F = nn(Cr);
  }
  let H = F;
  if (P && D !== !1) {
    const O = Object.keys(P), { shapeFlag: B } = H;
    O.length && B & 7 && (s && O.some(is) && (P = Am(
      P,
      s
    )), H = Ri(H, P, !1, !0));
  }
  return n.dirs && (H = Ri(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && cl(H, n.transition), F = H, Ho(A), F;
}
const Pm = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || rs(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Am = (t, e) => {
  const n = {};
  for (const r in t)
    (!is(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function Cm(t, e, n) {
  const { props: r, children: a, component: s } = t, { props: u, children: f, patchFlag: g } = e, y = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return r ? Xu(r, u, y) : !!u;
    if (g & 8) {
      const _ = e.dynamicProps;
      for (let d = 0; d < _.length; d++) {
        const M = _[d];
        if (qd(u, r, M) && !hs(y, M))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? Xu(r, u, y) : !0 : !!u;
  return !1;
}
function Xu(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (qd(e, t, s) && !hs(n, s))
      return !0;
  }
  return !1;
}
function qd(t, e, n) {
  const r = t[n], a = e[n];
  return n === "style" && ee(r) && ee(a) ? !Zc(r, a) : r !== a;
}
function Im({ vnode: t, parent: e, suspense: n }, r) {
  for (; e; ) {
    const a = e.subTree;
    if (a.suspense && a.suspense.activeBranch === t && (a.suspense.vnode.el = a.el = r, t = a), a === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = r);
}
const Yd = {}, Xd = () => Object.create(Yd), Zd = (t) => Object.getPrototypeOf(t) === Yd;
function Em(t, e, n, r = !1) {
  const a = {}, s = Xd();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Jd(t, e, a, s);
  for (const u in t.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? t.props = r ? a : /* @__PURE__ */ O0(a) : t.type.props ? t.props = a : t.props = s, t.attrs = s;
}
function Tm(t, e, n, r) {
  const {
    props: a,
    attrs: s,
    vnode: { patchFlag: u }
  } = t, f = /* @__PURE__ */ qt(a), [g] = t.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const _ = t.vnode.dynamicProps;
      for (let d = 0; d < _.length; d++) {
        let M = _[d];
        if (hs(t.emitsOptions, M))
          continue;
        const I = e[M];
        if (g)
          if (Yt(s, M))
            I !== s[M] && (s[M] = I, y = !0);
          else {
            const R = rn(M);
            a[R] = Dc(
              g,
              f,
              R,
              I,
              t,
              !1
            );
          }
        else
          I !== s[M] && (s[M] = I, y = !0);
      }
    }
  } else {
    Jd(t, e, a, s) && (y = !0);
    let _;
    for (const d in f)
      (!e || // for camelCase
      !Yt(e, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((_ = Xr(d)) === d || !Yt(e, _))) && (g ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[_] !== void 0) && (a[d] = Dc(
        g,
        f,
        d,
        void 0,
        t,
        !0
      )) : delete a[d]);
    if (s !== f)
      for (const d in s)
        (!e || !Yt(e, d)) && (delete s[d], y = !0);
  }
  y && lr(t.attrs, "set", "");
}
function Jd(t, e, n, r) {
  const [a, s] = t.propsOptions;
  let u = !1, f;
  if (e)
    for (let g in e) {
      if (ma(g))
        continue;
      const y = e[g];
      let _;
      a && Yt(a, _ = rn(g)) ? !s || !s.includes(_) ? n[_] = y : (f || (f = {}))[_] = y : hs(t.emitsOptions, g) || (!(g in r) || y !== r[g]) && (r[g] = y, u = !0);
    }
  if (s) {
    const g = /* @__PURE__ */ qt(n), y = f || oe;
    for (let _ = 0; _ < s.length; _++) {
      const d = s[_];
      n[d] = Dc(
        a,
        g,
        d,
        y[d],
        t,
        !Yt(y, d)
      );
    }
  }
  return u;
}
function Dc(t, e, n, r, a, s) {
  const u = t[n];
  if (u != null) {
    const f = Yt(u, "default");
    if (f && r === void 0) {
      const g = u.default;
      if (u.type !== Function && !u.skipFactory && Ht(g)) {
        const { propsDefaults: y } = a;
        if (n in y)
          r = y[n];
        else {
          const _ = Va(a);
          r = y[n] = g.call(
            null,
            e
          ), _();
        }
      } else
        r = g;
      a.ce && a.ce._setProp(n, r);
    }
    u[
      0
      /* shouldCast */
    ] && (s && !f ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Xr(n)) && (r = !0));
  }
  return r;
}
const Dm = /* @__PURE__ */ new WeakMap();
function Qd(t, e, n = !1) {
  const r = n ? Dm : e.propsCache, a = r.get(t);
  if (a)
    return a;
  const s = t.props, u = {}, f = [];
  let g = !1;
  if (!Ht(t)) {
    const _ = (d) => {
      g = !0;
      const [M, I] = Qd(d, e, !0);
      We(u, M), I && f.push(...I);
    };
    !n && e.mixins.length && e.mixins.forEach(_), t.extends && _(t.extends), t.mixins && t.mixins.forEach(_);
  }
  if (!s && !g)
    return ee(t) && r.set(t, Mi), Mi;
  if (Lt(s))
    for (let _ = 0; _ < s.length; _++) {
      const d = rn(s[_]);
      Zu(d) && (u[d] = oe);
    }
  else if (s)
    for (const _ in s) {
      const d = rn(_);
      if (Zu(d)) {
        const M = s[_], I = u[d] = Lt(M) || Ht(M) ? { type: M } : We({}, M), R = I.type;
        let D = !1, A = !0;
        if (Lt(R))
          for (let F = 0; F < R.length; ++F) {
            const P = R[F], H = Ht(P) && P.name;
            if (H === "Boolean") {
              D = !0;
              break;
            } else H === "String" && (A = !1);
          }
        else
          D = Ht(R) && R.name === "Boolean";
        I[
          0
          /* shouldCast */
        ] = D, I[
          1
          /* shouldCastTrue */
        ] = A, (D || Yt(I, "default")) && f.push(d);
      }
    }
  const y = [u, f];
  return ee(t) && r.set(t, y), y;
}
function Zu(t) {
  return t[0] !== "$" && !ma(t);
}
const ll = (t) => t === "_" || t === "_ctx" || t === "$stable", ul = (t) => Lt(t) ? t.map(Wn) : [Wn(t)], Rm = (t, e, n) => {
  if (e._n)
    return e;
  const r = Y0((...a) => ul(e(...a)), n);
  return r._c = !1, r;
}, th = (t, e, n) => {
  const r = t._ctx;
  for (const a in t) {
    if (ll(a)) continue;
    const s = t[a];
    if (Ht(s))
      e[a] = Rm(a, s, r);
    else if (s != null) {
      const u = ul(s);
      e[a] = () => u;
    }
  }
}, eh = (t, e) => {
  const n = ul(e);
  t.slots.default = () => n;
}, nh = (t, e, n) => {
  for (const r in e)
    (n || !ll(r)) && (t[r] = e[r]);
}, Lm = (t, e, n) => {
  const r = t.slots = Xd();
  if (t.vnode.shapeFlag & 32) {
    const a = e._;
    a ? (nh(r, e, n), n && ld(r, "_", a, !0)) : th(e, r);
  } else e && eh(t, e);
}, Om = (t, e, n) => {
  const { vnode: r, slots: a } = t;
  let s = !0, u = oe;
  if (r.shapeFlag & 32) {
    const f = e._;
    f ? n && f === 1 ? s = !1 : nh(a, e, n) : (s = !e.$stable, th(e, a)), u = e;
  } else e && (eh(t, e), u = { default: 1 });
  if (s)
    for (const f in a)
      !ll(f) && u[f] == null && delete a[f];
}, ln = zm;
function Fm(t) {
  return Vm(t);
}
function Vm(t, e) {
  const n = ss();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: s,
    createElement: u,
    createText: f,
    createComment: g,
    setText: y,
    setElementText: _,
    parentNode: d,
    nextSibling: M,
    setScopeId: I = Xn,
    insertStaticContent: R
  } = t, D = (x, E, V, q = null, G = null, W = null, J = void 0, nt = null, tt = !!E.dynamicChildren) => {
    if (x === E)
      return;
    x && !ra(x, E) && (q = Ae(x), vt(x, G, W, !0), x = null), E.patchFlag === -2 && (tt = !1, E.dynamicChildren = null);
    const { type: X, ref: mt, shapeFlag: rt } = E;
    switch (X) {
      case ps:
        A(x, E, V, q);
        break;
      case Cr:
        F(x, E, V, q);
        break;
      case ko:
        x == null && P(E, V, q, J);
        break;
      case Ue:
        Nt(
          x,
          E,
          V,
          q,
          G,
          W,
          J,
          nt,
          tt
        );
        break;
      default:
        rt & 1 ? B(
          x,
          E,
          V,
          q,
          G,
          W,
          J,
          nt,
          tt
        ) : rt & 6 ? Y(
          x,
          E,
          V,
          q,
          G,
          W,
          J,
          nt,
          tt
        ) : (rt & 64 || rt & 128) && X.process(
          x,
          E,
          V,
          q,
          G,
          W,
          J,
          nt,
          tt,
          an
        );
    }
    mt != null && G ? ba(mt, x && x.ref, W, E || x, !E) : mt == null && x && x.ref != null && ba(x.ref, null, W, x, !0);
  }, A = (x, E, V, q) => {
    if (x == null)
      r(
        E.el = f(E.children),
        V,
        q
      );
    else {
      const G = E.el = x.el;
      E.children !== x.children && y(G, E.children);
    }
  }, F = (x, E, V, q) => {
    x == null ? r(
      E.el = g(E.children || ""),
      V,
      q
    ) : E.el = x.el;
  }, P = (x, E, V, q) => {
    [x.el, x.anchor] = R(
      x.children,
      E,
      V,
      q,
      x.el,
      x.anchor
    );
  }, H = ({ el: x, anchor: E }, V, q) => {
    let G;
    for (; x && x !== E; )
      G = M(x), r(x, V, q), x = G;
    r(E, V, q);
  }, O = ({ el: x, anchor: E }) => {
    let V;
    for (; x && x !== E; )
      V = M(x), a(x), x = V;
    a(E);
  }, B = (x, E, V, q, G, W, J, nt, tt) => {
    if (E.type === "svg" ? J = "svg" : E.type === "math" && (J = "mathml"), x == null)
      C(
        E,
        V,
        q,
        G,
        W,
        J,
        nt,
        tt
      );
    else {
      const X = x.el && x.el._isVueCE ? x.el : null;
      try {
        X && X._beginPatch(), St(
          x,
          E,
          G,
          W,
          J,
          nt,
          tt
        );
      } finally {
        X && X._endPatch();
      }
    }
  }, C = (x, E, V, q, G, W, J, nt) => {
    let tt, X;
    const { props: mt, shapeFlag: rt, transition: wt, dirs: Tt } = x;
    if (tt = x.el = u(
      x.type,
      W,
      mt && mt.is,
      mt
    ), rt & 8 ? _(tt, x.children) : rt & 16 && Q(
      x.children,
      tt,
      null,
      q,
      G,
      sc(x, W),
      J,
      nt
    ), Tt && Lr(x, null, q, "created"), ct(tt, x, x.scopeId, J, q), mt) {
      for (const jt in mt)
        jt !== "value" && !ma(jt) && s(tt, jt, null, mt[jt], W, q);
      "value" in mt && s(tt, "value", null, mt.value, W), (X = mt.onVnodeBeforeMount) && $n(X, q, x);
    }
    Tt && Lr(x, null, q, "beforeMount");
    const p = Hm(G, wt);
    p && wt.beforeEnter(tt), r(tt, E, V), ((X = mt && mt.onVnodeMounted) || p || Tt) && ln(() => {
      try {
        X && $n(X, q, x), p && wt.enter(tt), Tt && Lr(x, null, q, "mounted");
      } finally {
      }
    }, G);
  }, ct = (x, E, V, q, G) => {
    if (V && I(x, V), q)
      for (let W = 0; W < q.length; W++)
        I(x, q[W]);
    if (G) {
      let W = G.subTree;
      if (E === W || oh(W.type) && (W.ssContent === E || W.ssFallback === E)) {
        const J = G.vnode;
        ct(
          x,
          J,
          J.scopeId,
          J.slotScopeIds,
          G.parent
        );
      }
    }
  }, Q = (x, E, V, q, G, W, J, nt, tt = 0) => {
    for (let X = tt; X < x.length; X++) {
      const mt = x[X] = nt ? cr(x[X]) : Wn(x[X]);
      D(
        null,
        mt,
        E,
        V,
        q,
        G,
        W,
        J,
        nt
      );
    }
  }, St = (x, E, V, q, G, W, J) => {
    const nt = E.el = x.el;
    let { patchFlag: tt, dynamicChildren: X, dirs: mt } = E;
    tt |= x.patchFlag & 16;
    const rt = x.props || oe, wt = E.props || oe;
    let Tt;
    if (V && Or(V, !1), (Tt = wt.onVnodeBeforeUpdate) && $n(Tt, V, E, x), mt && Lr(E, x, V, "beforeUpdate"), V && Or(V, !0), (rt.innerHTML && wt.innerHTML == null || rt.textContent && wt.textContent == null) && _(nt, ""), X ? z(
      x.dynamicChildren,
      X,
      nt,
      V,
      q,
      sc(E, G),
      W
    ) : J || yt(
      x,
      E,
      nt,
      null,
      V,
      q,
      sc(E, G),
      W,
      !1
    ), tt > 0) {
      if (tt & 16)
        ut(nt, rt, wt, V, G);
      else if (tt & 2 && rt.class !== wt.class && s(nt, "class", null, wt.class, G), tt & 4 && s(nt, "style", rt.style, wt.style, G), tt & 8) {
        const p = E.dynamicProps;
        for (let jt = 0; jt < p.length; jt++) {
          const Xt = p[jt], he = rt[Xt], xe = wt[Xt];
          (xe !== he || Xt === "value") && s(nt, Xt, he, xe, G, V);
        }
      }
      tt & 1 && x.children !== E.children && _(nt, E.children);
    } else !J && X == null && ut(nt, rt, wt, V, G);
    ((Tt = wt.onVnodeUpdated) || mt) && ln(() => {
      Tt && $n(Tt, V, E, x), mt && Lr(E, x, V, "updated");
    }, q);
  }, z = (x, E, V, q, G, W, J) => {
    for (let nt = 0; nt < E.length; nt++) {
      const tt = x[nt], X = E[nt], mt = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        tt.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (tt.type === Ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ra(tt, X) || // - In the case of a component, it could contain anything.
        tt.shapeFlag & 198) ? d(tt.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          V
        )
      );
      D(
        tt,
        X,
        mt,
        null,
        q,
        G,
        W,
        J,
        !0
      );
    }
  }, ut = (x, E, V, q, G) => {
    if (E !== V) {
      if (E !== oe)
        for (const W in E)
          !ma(W) && !(W in V) && s(
            x,
            W,
            E[W],
            null,
            G,
            q
          );
      for (const W in V) {
        if (ma(W)) continue;
        const J = V[W], nt = E[W];
        J !== nt && W !== "value" && s(x, W, nt, J, G, q);
      }
      "value" in V && s(x, "value", E.value, V.value, G);
    }
  }, Nt = (x, E, V, q, G, W, J, nt, tt) => {
    const X = E.el = x ? x.el : f(""), mt = E.anchor = x ? x.anchor : f("");
    let { patchFlag: rt, dynamicChildren: wt, slotScopeIds: Tt } = E;
    Tt && (nt = nt ? nt.concat(Tt) : Tt), x == null ? (r(X, V, q), r(mt, V, q), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      E.children || [],
      V,
      mt,
      G,
      W,
      J,
      nt,
      tt
    )) : rt > 0 && rt & 64 && wt && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    x.dynamicChildren && x.dynamicChildren.length === wt.length ? (z(
      x.dynamicChildren,
      wt,
      V,
      G,
      W,
      J,
      nt
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (E.key != null || G && E === G.subTree) && rh(
      x,
      E,
      !0
      /* shallow */
    )) : yt(
      x,
      E,
      V,
      mt,
      G,
      W,
      J,
      nt,
      tt
    );
  }, Y = (x, E, V, q, G, W, J, nt, tt) => {
    E.slotScopeIds = nt, x == null ? E.shapeFlag & 512 ? G.ctx.activate(
      E,
      V,
      q,
      J,
      tt
    ) : it(
      E,
      V,
      q,
      G,
      W,
      J,
      tt
    ) : Z(x, E, tt);
  }, it = (x, E, V, q, G, W, J) => {
    const nt = x.component = qm(
      x,
      q,
      G
    );
    if (Vd(x) && (nt.ctx.renderer = an), Xm(nt, !1, J), nt.asyncDep) {
      if (G && G.registerDep(nt, ft, J), !x.el) {
        const tt = nt.subTree = nn(Cr);
        F(null, tt, E, V), x.placeholder = tt.el;
      }
    } else
      ft(
        nt,
        x,
        E,
        V,
        G,
        W,
        J
      );
  }, Z = (x, E, V) => {
    const q = E.component = x.component;
    if (Cm(x, E, V))
      if (q.asyncDep && !q.asyncResolved) {
        ot(q, E, V);
        return;
      } else
        q.next = E, q.update();
    else
      E.el = x.el, q.vnode = E;
  }, ft = (x, E, V, q, G, W, J) => {
    const nt = () => {
      if (x.isMounted) {
        let { next: rt, bu: wt, u: Tt, parent: p, vnode: jt } = x;
        {
          const Se = ih(x);
          if (Se) {
            rt && (rt.el = jt.el, ot(x, rt, J)), Se.asyncDep.then(() => {
              ln(() => {
                x.isUnmounted || X();
              }, G);
            });
            return;
          }
        }
        let Xt = rt, he;
        Or(x, !1), rt ? (rt.el = jt.el, ot(x, rt, J)) : rt = jt, wt && ec(wt), (he = rt.props && rt.props.onVnodeBeforeUpdate) && $n(he, p, rt, jt), Or(x, !0);
        const xe = Yu(x), It = x.subTree;
        x.subTree = xe, D(
          It,
          xe,
          // parent may have changed if it's in a teleport
          d(It.el),
          // anchor may have changed if it's in a fragment
          Ae(It),
          x,
          G,
          W
        ), rt.el = xe.el, Xt === null && Im(x, xe.el), Tt && ln(Tt, G), (he = rt.props && rt.props.onVnodeUpdated) && ln(
          () => $n(he, p, rt, jt),
          G
        );
      } else {
        let rt;
        const { el: wt, props: Tt } = E, { bm: p, m: jt, parent: Xt, root: he, type: xe } = x, It = _a(E);
        Or(x, !1), p && ec(p), !It && (rt = Tt && Tt.onVnodeBeforeMount) && $n(rt, Xt, E), Or(x, !0);
        {
          he.ce && he.ce._hasShadowRoot() && he.ce._injectChildStyle(
            xe,
            x.parent ? x.parent.type : void 0
          );
          const Se = x.subTree = Yu(x);
          D(
            null,
            Se,
            V,
            q,
            x,
            G,
            W
          ), E.el = Se.el;
        }
        if (jt && ln(jt, G), !It && (rt = Tt && Tt.onVnodeMounted)) {
          const Se = E;
          ln(
            () => $n(rt, Xt, Se),
            G
          );
        }
        (E.shapeFlag & 256 || Xt && _a(Xt.vnode) && Xt.vnode.shapeFlag & 256) && x.a && ln(x.a, G), x.isMounted = !0, E = V = q = null;
      }
    };
    x.scope.on();
    const tt = x.effect = new pd(nt);
    x.scope.off();
    const X = x.update = tt.run.bind(tt), mt = x.job = tt.runIfDirty.bind(tt);
    mt.i = x, mt.id = x.uid, tt.scheduler = () => sl(mt), Or(x, !0), X();
  }, ot = (x, E, V) => {
    E.component = x;
    const q = x.vnode.props;
    x.vnode = E, x.next = null, Tm(x, E.props, q, V), Om(x, E.children, V), ur(), zu(x), fr();
  }, yt = (x, E, V, q, G, W, J, nt, tt = !1) => {
    const X = x && x.children, mt = x ? x.shapeFlag : 0, rt = E.children, { patchFlag: wt, shapeFlag: Tt } = E;
    if (wt > 0) {
      if (wt & 128) {
        Et(
          X,
          rt,
          V,
          q,
          G,
          W,
          J,
          nt,
          tt
        );
        return;
      } else if (wt & 256) {
        Mt(
          X,
          rt,
          V,
          q,
          G,
          W,
          J,
          nt,
          tt
        );
        return;
      }
    }
    Tt & 8 ? (mt & 16 && ye(X, G, W), rt !== X && _(V, rt)) : mt & 16 ? Tt & 16 ? Et(
      X,
      rt,
      V,
      q,
      G,
      W,
      J,
      nt,
      tt
    ) : ye(X, G, W, !0) : (mt & 8 && _(V, ""), Tt & 16 && Q(
      rt,
      V,
      q,
      G,
      W,
      J,
      nt,
      tt
    ));
  }, Mt = (x, E, V, q, G, W, J, nt, tt) => {
    x = x || Mi, E = E || Mi;
    const X = x.length, mt = E.length, rt = Math.min(X, mt);
    let wt;
    for (wt = 0; wt < rt; wt++) {
      const Tt = E[wt] = tt ? cr(E[wt]) : Wn(E[wt]);
      D(
        x[wt],
        Tt,
        V,
        null,
        G,
        W,
        J,
        nt,
        tt
      );
    }
    X > mt ? ye(
      x,
      G,
      W,
      !0,
      !1,
      rt
    ) : Q(
      E,
      V,
      q,
      G,
      W,
      J,
      nt,
      tt,
      rt
    );
  }, Et = (x, E, V, q, G, W, J, nt, tt) => {
    let X = 0;
    const mt = E.length;
    let rt = x.length - 1, wt = mt - 1;
    for (; X <= rt && X <= wt; ) {
      const Tt = x[X], p = E[X] = tt ? cr(E[X]) : Wn(E[X]);
      if (ra(Tt, p))
        D(
          Tt,
          p,
          V,
          null,
          G,
          W,
          J,
          nt,
          tt
        );
      else
        break;
      X++;
    }
    for (; X <= rt && X <= wt; ) {
      const Tt = x[rt], p = E[wt] = tt ? cr(E[wt]) : Wn(E[wt]);
      if (ra(Tt, p))
        D(
          Tt,
          p,
          V,
          null,
          G,
          W,
          J,
          nt,
          tt
        );
      else
        break;
      rt--, wt--;
    }
    if (X > rt) {
      if (X <= wt) {
        const Tt = wt + 1, p = Tt < mt ? E[Tt].el : q;
        for (; X <= wt; )
          D(
            null,
            E[X] = tt ? cr(E[X]) : Wn(E[X]),
            V,
            p,
            G,
            W,
            J,
            nt,
            tt
          ), X++;
      }
    } else if (X > wt)
      for (; X <= rt; )
        vt(x[X], G, W, !0), X++;
    else {
      const Tt = X, p = X, jt = /* @__PURE__ */ new Map();
      for (X = p; X <= wt; X++) {
        const Ne = E[X] = tt ? cr(E[X]) : Wn(E[X]);
        Ne.key != null && jt.set(Ne.key, X);
      }
      let Xt, he = 0;
      const xe = wt - p + 1;
      let It = !1, Se = 0;
      const Te = new Array(xe);
      for (X = 0; X < xe; X++) Te[X] = 0;
      for (X = Tt; X <= rt; X++) {
        const Ne = x[X];
        if (he >= xe) {
          vt(Ne, G, W, !0);
          continue;
        }
        let on;
        if (Ne.key != null)
          on = jt.get(Ne.key);
        else
          for (Xt = p; Xt <= wt; Xt++)
            if (Te[Xt - p] === 0 && ra(Ne, E[Xt])) {
              on = Xt;
              break;
            }
        on === void 0 ? vt(Ne, G, W, !0) : (Te[on - p] = X + 1, on >= Se ? Se = on : It = !0, D(
          Ne,
          E[on],
          V,
          null,
          G,
          W,
          J,
          nt,
          tt
        ), he++);
      }
      const Zr = It ? $m(Te) : Mi;
      for (Xt = Zr.length - 1, X = xe - 1; X >= 0; X--) {
        const Ne = p + X, on = E[Ne], bn = E[Ne + 1], Ie = Ne + 1 < mt ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          bn.el || ah(bn)
        ) : q;
        Te[X] === 0 ? D(
          null,
          on,
          V,
          Ie,
          G,
          W,
          J,
          nt,
          tt
        ) : It && (Xt < 0 || X !== Zr[Xt] ? et(on, V, Ie, 2) : Xt--);
      }
    }
  }, et = (x, E, V, q, G = null) => {
    const { el: W, type: J, transition: nt, children: tt, shapeFlag: X } = x;
    if (X & 6) {
      et(x.component.subTree, E, V, q);
      return;
    }
    if (X & 128) {
      x.suspense.move(E, V, q);
      return;
    }
    if (X & 64) {
      J.move(x, E, V, an);
      return;
    }
    if (J === Ue) {
      r(W, E, V);
      for (let rt = 0; rt < tt.length; rt++)
        et(tt[rt], E, V, q);
      r(x.anchor, E, V);
      return;
    }
    if (J === ko) {
      H(x, E, V);
      return;
    }
    if (q !== 2 && X & 1 && nt)
      if (q === 0)
        nt.beforeEnter(W), r(W, E, V), ln(() => nt.enter(W), G);
      else {
        const { leave: rt, delayLeave: wt, afterLeave: Tt } = nt, p = () => {
          x.ctx.isUnmounted ? a(W) : r(W, E, V);
        }, jt = () => {
          W._isLeaving && W[nm](
            !0
            /* cancelled */
          ), rt(W, () => {
            p(), Tt && Tt();
          });
        };
        wt ? wt(W, p, jt) : jt();
      }
    else
      r(W, E, V);
  }, vt = (x, E, V, q = !1, G = !1) => {
    const {
      type: W,
      props: J,
      ref: nt,
      children: tt,
      dynamicChildren: X,
      shapeFlag: mt,
      patchFlag: rt,
      dirs: wt,
      cacheIndex: Tt,
      memo: p
    } = x;
    if (rt === -2 && (G = !1), nt != null && (ur(), ba(nt, null, V, x, !0), fr()), Tt != null && (E.renderCache[Tt] = void 0), mt & 256) {
      E.ctx.deactivate(x);
      return;
    }
    const jt = mt & 1 && wt, Xt = !_a(x);
    let he;
    if (Xt && (he = J && J.onVnodeBeforeUnmount) && $n(he, E, x), mt & 6)
      se(x.component, V, q);
    else {
      if (mt & 128) {
        x.suspense.unmount(V, q);
        return;
      }
      jt && Lr(x, null, E, "beforeUnmount"), mt & 64 ? x.type.remove(
        x,
        E,
        V,
        an,
        q
      ) : X && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !X.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (W !== Ue || rt > 0 && rt & 64) ? ye(
        X,
        E,
        V,
        !1,
        !0
      ) : (W === Ue && rt & 384 || !G && mt & 16) && ye(tt, E, V), q && Ct(x);
    }
    const xe = p != null && Tt == null;
    (Xt && (he = J && J.onVnodeUnmounted) || jt || xe) && ln(() => {
      he && $n(he, E, x), jt && Lr(x, null, E, "unmounted"), xe && (x.el = null);
    }, V);
  }, Ct = (x) => {
    const { type: E, el: V, anchor: q, transition: G } = x;
    if (E === Ue) {
      de(V, q);
      return;
    }
    if (E === ko) {
      O(x);
      return;
    }
    const W = () => {
      a(V), G && !G.persisted && G.afterLeave && G.afterLeave();
    };
    if (x.shapeFlag & 1 && G && !G.persisted) {
      const { leave: J, delayLeave: nt } = G, tt = () => J(V, W);
      nt ? nt(x.el, W, tt) : tt();
    } else
      W();
  }, de = (x, E) => {
    let V;
    for (; x !== E; )
      V = M(x), a(x), x = V;
    a(E);
  }, se = (x, E, V) => {
    const { bum: q, scope: G, job: W, subTree: J, um: nt, m: tt, a: X } = x;
    Ju(tt), Ju(X), q && ec(q), G.stop(), W && (W.flags |= 8, vt(J, x, E, V)), nt && ln(nt, E), ln(() => {
      x.isUnmounted = !0;
    }, E);
  }, ye = (x, E, V, q = !1, G = !1, W = 0) => {
    for (let J = W; J < x.length; J++)
      vt(x[J], E, V, q, G);
  }, Ae = (x) => {
    if (x.shapeFlag & 6)
      return Ae(x.component.subTree);
    if (x.shapeFlag & 128)
      return x.suspense.next();
    const E = M(x.anchor || x.el), V = E && E[tm];
    return V ? M(V) : E;
  };
  let Ke = !1;
  const Ve = (x, E, V) => {
    let q;
    x == null ? E._vnode && (vt(E._vnode, null, null, !0), q = E._vnode.component) : D(
      E._vnode || null,
      x,
      E,
      null,
      null,
      null,
      V
    ), E._vnode = x, Ke || (Ke = !0, zu(q), Td(), Ke = !1);
  }, an = {
    p: D,
    um: vt,
    m: et,
    r: Ct,
    mt: it,
    mc: Q,
    pc: yt,
    pbc: z,
    n: Ae,
    o: t
  };
  return {
    render: Ve,
    hydrate: void 0,
    createApp: Sm(Ve)
  };
}
function sc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Or({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Hm(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function rh(t, e, n = !1) {
  const r = t.children, a = e.children;
  if (Lt(r) && Lt(a))
    for (let s = 0; s < r.length; s++) {
      const u = r[s];
      let f = a[s];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[s] = cr(a[s]), f.el = u.el), !n && f.patchFlag !== -2 && rh(u, f)), f.type === ps && (f.patchFlag === -1 && (f = a[s] = cr(f)), f.el = u.el), f.type === Cr && !f.el && (f.el = u.el);
    }
}
function $m(t) {
  const e = t.slice(), n = [0];
  let r, a, s, u, f;
  const g = t.length;
  for (r = 0; r < g; r++) {
    const y = t[r];
    if (y !== 0) {
      if (a = n[n.length - 1], t[a] < y) {
        e[r] = a, n.push(r);
        continue;
      }
      for (s = 0, u = n.length - 1; s < u; )
        f = s + u >> 1, t[n[f]] < y ? s = f + 1 : u = f;
      y < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, u = n[s - 1]; s-- > 0; )
    n[s] = u, u = e[u];
  return n;
}
function ih(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : ih(e);
}
function Ju(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function ah(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? ah(e.subTree) : null;
}
const oh = (t) => t.__isSuspense;
function zm(t, e) {
  e && e.pendingBranch ? Lt(t) ? e.effects.push(...t) : e.effects.push(t) : q0(t);
}
const Ue = /* @__PURE__ */ Symbol.for("v-fgt"), ps = /* @__PURE__ */ Symbol.for("v-txt"), Cr = /* @__PURE__ */ Symbol.for("v-cmt"), ko = /* @__PURE__ */ Symbol.for("v-stc"), xa = [];
let gn = null;
function we(t = !1) {
  xa.push(gn = t ? null : []);
}
function jm() {
  xa.pop(), gn = xa[xa.length - 1] || null;
}
let Ta = 1;
function Qu(t, e = !1) {
  Ta += t, t < 0 && gn && e && (gn.hasOnce = !0);
}
function sh(t) {
  return t.dynamicChildren = Ta > 0 ? gn || Mi : null, jm(), Ta > 0 && gn && gn.push(t), t;
}
function Fe(t, e, n, r, a, s) {
  return sh(
    ke(
      t,
      e,
      n,
      r,
      a,
      s,
      !0
    )
  );
}
function Fi(t, e, n, r, a) {
  return sh(
    nn(
      t,
      e,
      n,
      r,
      a,
      !0
    )
  );
}
function ch(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function ra(t, e) {
  return t.type === e.type && t.key === e.key;
}
const lh = ({ key: t }) => t ?? null, Po = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Pe(t) || /* @__PURE__ */ Ge(t) || Ht(t) ? { i: An, r: t, k: e, f: !!n } : t : null);
function ke(t, e = null, n = null, r = 0, a = null, s = t === Ue ? 0 : 1, u = !1, f = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && lh(e),
    ref: e && Po(e),
    scopeId: Rd,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: An
  };
  return f ? (fl(g, n), s & 128 && t.normalize(g)) : n && (g.shapeFlag |= Pe(n) ? 8 : 16), Ta > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  gn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && gn.push(g), g;
}
const nn = Um;
function Um(t, e = null, n = null, r = 0, a = null, s = !1) {
  if ((!t || t === Ud) && (t = Cr), ch(t)) {
    const f = Ri(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && fl(f, n), Ta > 0 && !s && gn && (f.shapeFlag & 6 ? gn[gn.indexOf(t)] = f : gn.push(f)), f.patchFlag = -2, f;
  }
  if (e1(t) && (t = t.__vccOpts), e) {
    e = Bm(e);
    let { class: f, style: g } = e;
    f && !Pe(f) && (e.class = ls(f)), ee(g) && (/* @__PURE__ */ al(g) && !Lt(g) && (g = We({}, g)), e.style = cs(g));
  }
  const u = Pe(t) ? 1 : oh(t) ? 128 : em(t) ? 64 : ee(t) ? 4 : Ht(t) ? 2 : 0;
  return ke(
    t,
    e,
    n,
    r,
    a,
    u,
    s,
    !0
  );
}
function Bm(t) {
  return t ? /* @__PURE__ */ al(t) || Zd(t) ? We({}, t) : t : null;
}
function Ri(t, e, n = !1, r = !1) {
  const { props: a, ref: s, patchFlag: u, children: f, transition: g } = t, y = e ? fh(a || {}, e) : a, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: y,
    key: y && lh(y),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Lt(s) ? s.concat(Po(e)) : [s, Po(e)] : Po(e)
    ) : s,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: f,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Ue ? u === -1 ? 16 : u | 16 : u,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: g,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Ri(t.ssContent),
    ssFallback: t.ssFallback && Ri(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return g && r && cl(
    _,
    g.clone(_)
  ), _;
}
function Gm(t = " ", e = 0) {
  return nn(ps, null, t, e);
}
function uh(t, e) {
  const n = nn(ko, null, t);
  return n.staticCount = e, n;
}
function Ao(t = "", e = !1) {
  return e ? (we(), Fi(Cr, null, t)) : nn(Cr, null, t);
}
function Wn(t) {
  return t == null || typeof t == "boolean" ? nn(Cr) : Lt(t) ? nn(
    Ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : ch(t) ? cr(t) : nn(ps, null, String(t));
}
function cr(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Ri(t);
}
function fl(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Lt(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const a = e.default;
      a && (a._c && (a._d = !1), fl(t, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = e._;
      !a && !Zd(e) ? e._ctx = An : a === 3 && An && (An.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else Ht(e) ? (e = { default: e, _ctx: An }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [Gm(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function fh(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const a in r)
      if (a === "class")
        e.class !== r.class && (e.class = ls([e.class, r.class]));
      else if (a === "style")
        e.style = cs([e.style, r.style]);
      else if (rs(a)) {
        const s = e[a], u = r[a];
        u && s !== u && !(Lt(s) && s.includes(u)) ? e[a] = s ? [].concat(s, u) : u : u == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !is(a) && (e[a] = u);
      } else a !== "" && (e[a] = r[a]);
  }
  return e;
}
function $n(t, e, n, r = null) {
  Jn(t, e, 7, [
    n,
    r
  ]);
}
const Wm = Wd();
let Km = 0;
function qm(t, e, n) {
  const r = t.type, a = (e ? e.appContext : t.appContext) || Wm, s = {
    uid: Km++,
    vnode: t,
    type: r,
    parent: e,
    appContext: a,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new m0(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(a.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Qd(r, a),
    emitsOptions: Kd(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: oe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: oe,
    data: oe,
    props: oe,
    attrs: oe,
    slots: oe,
    refs: oe,
    setupState: oe,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = Mm.bind(null, s), t.ce && t.ce(s), s;
}
let Be = null;
const Ym = () => Be || An;
let jo, Rc;
{
  const t = ss(), e = (n, r) => {
    let a;
    return (a = t[n]) || (a = t[n] = []), a.push(r), (s) => {
      a.length > 1 ? a.forEach((u) => u(s)) : a[0](s);
    };
  };
  jo = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Be = n
  ), Rc = e(
    "__VUE_SSR_SETTERS__",
    (n) => Da = n
  );
}
const Va = (t) => {
  const e = Be;
  return jo(t), t.scope.on(), () => {
    t.scope.off(), jo(e);
  };
}, tf = () => {
  Be && Be.scope.off(), jo(null);
};
function dh(t) {
  return t.vnode.shapeFlag & 4;
}
let Da = !1;
function Xm(t, e = !1, n = !1) {
  e && Rc(e);
  const { props: r, children: a } = t.vnode, s = dh(t);
  Em(t, r, s, e), Lm(t, a, n || e);
  const u = s ? Zm(t, e) : void 0;
  return e && Rc(!1), u;
}
function Zm(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, mm);
  const { setup: r } = n;
  if (r) {
    ur();
    const a = t.setupContext = r.length > 1 ? Qm(t) : null, s = Va(t), u = Fa(
      r,
      t,
      0,
      [
        t.props,
        a
      ]
    ), f = od(u);
    if (fr(), s(), (f || t.sp) && !_a(t) && Fd(t), f) {
      if (u.then(tf, tf), e)
        return u.then((g) => {
          ef(t, g);
        }).catch((g) => {
          fs(g, t, 0);
        });
      t.asyncDep = u;
    } else
      ef(t, u);
  } else
    hh(t);
}
function ef(t, e, n) {
  Ht(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : ee(e) && (t.setupState = Ad(e)), hh(t);
}
function hh(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || Xn);
  {
    const a = Va(t);
    ur();
    try {
      ym(t);
    } finally {
      fr(), a();
    }
  }
}
const Jm = {
  get(t, e) {
    return je(t, "get", ""), t[e];
  }
};
function Qm(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, Jm),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function dl(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Ad(F0(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in wa)
        return wa[n](t);
    },
    has(e, n) {
      return n in e || n in wa;
    }
  })) : t.proxy;
}
function t1(t, e = !0) {
  return Ht(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function e1(t) {
  return Ht(t) && "__vccOpts" in t;
}
const Ii = (t, e) => /* @__PURE__ */ U0(t, e, Da), n1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Lc;
const nf = typeof window < "u" && window.trustedTypes;
if (nf)
  try {
    Lc = /* @__PURE__ */ nf.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const ph = Lc ? (t) => Lc.createHTML(t) : (t) => t, r1 = "http://www.w3.org/2000/svg", i1 = "http://www.w3.org/1998/Math/MathML", sr = typeof document < "u" ? document : null, rf = sr && /* @__PURE__ */ sr.createElement("template"), a1 = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const a = e === "svg" ? sr.createElementNS(r1, t) : e === "mathml" ? sr.createElementNS(i1, t) : n ? sr.createElement(t, { is: n }) : sr.createElement(t);
    return t === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (t) => sr.createTextNode(t),
  createComment: (t) => sr.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => sr.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, r, a, s) {
    const u = n ? n.previousSibling : e.lastChild;
    if (a && (a === s || a.nextSibling))
      for (; e.insertBefore(a.cloneNode(!0), n), !(a === s || !(a = a.nextSibling)); )
        ;
    else {
      rf.innerHTML = ph(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const f = rf.content;
      if (r === "svg" || r === "mathml") {
        const g = f.firstChild;
        for (; g.firstChild; )
          f.appendChild(g.firstChild);
        f.removeChild(g);
      }
      e.insertBefore(f, n);
    }
    return [
      // first
      u ? u.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
}, o1 = /* @__PURE__ */ Symbol("_vtc");
function s1(t, e, n) {
  const r = t[o1];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const af = /* @__PURE__ */ Symbol("_vod"), c1 = /* @__PURE__ */ Symbol("_vsh"), l1 = /* @__PURE__ */ Symbol(""), u1 = /(?:^|;)\s*display\s*:/;
function f1(t, e, n) {
  const r = t.style, a = Pe(n);
  let s = !1;
  if (n && !a) {
    if (e)
      if (Pe(e))
        for (const u of e.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && Co(r, f, "");
        }
      else
        for (const u in e)
          n[u] == null && Co(r, u, "");
    for (const u in n)
      u === "display" && (s = !0), Co(r, u, n[u]);
  } else if (a) {
    if (e !== n) {
      const u = r[l1];
      u && (n += ";" + u), r.cssText = n, s = u1.test(n);
    }
  } else e && t.removeAttribute("style");
  af in t && (t[af] = s ? r.display : "", t[c1] && (r.display = "none"));
}
const of = /\s*!important$/;
function Co(t, e, n) {
  if (Lt(n))
    n.forEach((r) => Co(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = d1(t, e);
    of.test(n) ? t.setProperty(
      Xr(r),
      n.replace(of, ""),
      "important"
    ) : t[r] = n;
  }
}
const sf = ["Webkit", "Moz", "ms"], cc = {};
function d1(t, e) {
  const n = cc[e];
  if (n)
    return n;
  let r = rn(e);
  if (r !== "filter" && r in t)
    return cc[e] = r;
  r = os(r);
  for (let a = 0; a < sf.length; a++) {
    const s = sf[a] + r;
    if (s in t)
      return cc[e] = s;
  }
  return e;
}
const cf = "http://www.w3.org/1999/xlink";
function lf(t, e, n, r, a, s = p0(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(cf, e.slice(6, e.length)) : t.setAttributeNS(cf, e, n) : n == null || s && !ud(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    s ? "" : Zn(n) ? String(n) : n
  );
}
function uf(t, e, n, r, a) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? ph(n) : n);
    return;
  }
  const s = t.tagName;
  if (e === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const f = s === "OPTION" ? t.getAttribute("value") || "" : t.value, g = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== g || !("_value" in t)) && (t.value = g), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const f = typeof t[e];
    f === "boolean" ? n = ud(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(a || e);
}
function h1(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function p1(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const ff = /* @__PURE__ */ Symbol("_vei");
function g1(t, e, n, r, a = null) {
  const s = t[ff] || (t[ff] = {}), u = s[e];
  if (r && u)
    u.value = r;
  else {
    const [f, g] = m1(e);
    if (r) {
      const y = s[e] = b1(
        r,
        a
      );
      h1(t, f, y, g);
    } else u && (p1(t, f, u, g), s[e] = void 0);
  }
}
const df = /(?:Once|Passive|Capture)$/;
function m1(t) {
  let e;
  if (df.test(t)) {
    e = {};
    let r;
    for (; r = t.match(df); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Xr(t.slice(2)), e];
}
let lc = 0;
const y1 = /* @__PURE__ */ Promise.resolve(), v1 = () => lc || (y1.then(() => lc = 0), lc = Date.now());
function b1(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Jn(
      _1(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = v1(), n;
}
function _1(t, e) {
  if (Lt(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map(
      (r) => (a) => !a._stopped && r && r(a)
    );
  } else
    return e;
}
const hf = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, w1 = (t, e, n, r, a, s) => {
  const u = a === "svg";
  e === "class" ? s1(t, r, u) : e === "style" ? f1(t, n, r) : rs(e) ? is(e) || g1(t, e, n, r, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : x1(t, e, r, u)) ? (uf(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && lf(t, e, r, u, s, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (S1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !Pe(r))) ? uf(t, rn(e), r, s, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), lf(t, e, r, u));
};
function x1(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && hf(e) && Ht(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const a = t.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return hf(e) && Pe(n) ? !1 : e in t;
}
function S1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const r = rn(e);
  return Array.isArray(n) ? n.some((a) => rn(a) === r) : Object.keys(n).some((a) => rn(a) === r);
}
const N1 = ["ctrl", "shift", "alt", "meta"], M1 = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => N1.some((n) => t[`${n}Key`] && !e.includes(n))
}, k1 = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = ((a, ...s) => {
    for (let u = 0; u < e.length; u++) {
      const f = M1[e[u]];
      if (f && f(a, e)) return;
    }
    return t(a, ...s);
  }));
}, P1 = /* @__PURE__ */ We({ patchProp: w1 }, a1);
let pf;
function A1() {
  return pf || (pf = Fm(P1));
}
const C1 = ((...t) => {
  const e = A1().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const a = E1(r);
    if (!a) return;
    const s = e._component;
    !Ht(s) && !s.render && !s.template && (s.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, I1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, e;
});
function I1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function E1(t) {
  return Pe(t) ? document.querySelector(t) : t;
}
const _e = Math.PI / 180, gh = Math.PI * 2, T1 = 2048;
function D1() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_GL_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoGlDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function R1(t) {
  var n;
  return t ? {
    kind: String(((n = t == null ? void 0 : t.constructor) == null ? void 0 : n.name) || typeof t),
    width: Number((t == null ? void 0 : t.width) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.naturalWidth) || 0),
    height: Number((t == null ? void 0 : t.height) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.naturalHeight) || 0),
    naturalWidth: Number((t == null ? void 0 : t.naturalWidth) || 0),
    naturalHeight: Number((t == null ? void 0 : t.naturalHeight) || 0),
    videoWidth: Number((t == null ? void 0 : t.videoWidth) || 0),
    videoHeight: Number((t == null ? void 0 : t.videoHeight) || 0),
    complete: (t == null ? void 0 : t.complete) ?? null,
    isConnected: (t == null ? void 0 : t.isConnected) ?? null,
    src: String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || "")
  } : { kind: "null" };
}
function uc(t, e, n, r = {}) {
  D1() && console.warn(`[PANO_GL][${t}] ${e}`, {
    ...r,
    source: R1(n)
  });
}
function re(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Ir(t, e, n) {
  return { x: t, y: e, z: n };
}
function Uo(t, e) {
  return Ir(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Ni(t, e) {
  return Ir(t.x * e, t.y * e, t.z * e);
}
function Io(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function gf(t, e) {
  return Ir(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function da(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Ir(t.x / e, t.y / e, t.z / e);
}
function L1(t, e) {
  const n = Number(t || 0) * _e, r = Number(e || 0) * _e, a = Math.cos(r);
  return Ir(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Eo(t, e, n = 0) {
  const r = L1(t, e);
  let a = Ir(0, 1, 0);
  Math.abs(Io(r, a)) > 0.999 && (a = Ir(0, 0, 1));
  let s = da(gf(a, r)), u = da(gf(r, s));
  const f = Number(n || 0) * _e, g = Math.cos(f), y = Math.sin(f), _ = Uo(Ni(s, g), Ni(u, y)), d = Uo(Ni(s, -y), Ni(u, g));
  return s = da(_), u = da(d), { fwd: r, right: s, up: u };
}
function O1(t, e) {
  const n = (Number(t || 0) - 0.5) * gh, r = (0.5 - Number(e || 0)) * Math.PI, a = Math.cos(r);
  return Ir(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function mf(t, e, n = 1) {
  const r = Math.max(1, Math.round(Number(t || 1))), a = Math.max(1, Math.round(Number(e || 1))), s = Math.max(1, Number(n || 1)), u = Math.max(512, T1), f = Math.min(1, u / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: s,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function yf(t, e, n) {
  const r = t.createShader(e);
  if (t.shaderSource(r, n), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const a = t.getShaderInfoLog(r) || "shader compile failed";
    throw t.deleteShader(r), new Error(a);
  }
  return r;
}
function fc(t, e, n) {
  const r = yf(t, t.VERTEX_SHADER, e);
  let a;
  try {
    a = yf(t, t.FRAGMENT_SHADER, n);
  } catch (u) {
    throw t.deleteShader(r), u;
  }
  const s = t.createProgram();
  if (t.attachShader(s, r), t.attachShader(s, a), t.linkProgram(s), t.deleteShader(r), t.deleteShader(a), !t.getProgramParameter(s, t.LINK_STATUS)) {
    const u = t.getProgramInfoLog(s) || "program link failed";
    throw t.deleteProgram(s), new Error(u);
  }
  return s;
}
const dc = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, F1 = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_background;
uniform int u_mode;
uniform float u_yaw;
uniform float u_pitch;
uniform float u_roll;
uniform float u_hfov;
uniform float u_vfov;
uniform vec2 u_viewport;
uniform float u_opacity;
uniform int u_coverage;

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
  if (u_coverage == 180) {
    if (abs(lon) > PI * 0.5) return vec2(-1.0, -1.0);
    float localU = clamp(lon / PI + 0.5, 0.0, 1.0);
    return vec2(localU, clamp(0.5 - lat / PI, 0.0, 1.0));
  }
  return vec2(lon / TWO_PI + 0.5, clamp(0.5 - lat / PI, 0.0, 1.0));
}

void main() {
  vec2 sampleUv = unwrapUv();
  bool bgVisible = true;
  if (u_mode == 1 || u_mode == 2) {
    sampleUv = projectCameraUv(u_yaw, u_pitch, u_roll, u_hfov, u_vfov);
  }
  if (sampleUv.x < 0.0 || sampleUv.y < 0.0) {
    bgVisible = false;
    sampleUv = vec2(0.5, 0.5);
  }
  vec4 bg = bgVisible ? texture(u_background, sampleUv) : vec4(0.0);

  float bgAlpha = clamp(bg.a * u_opacity, 0.0, 1.0);
  vec3 premul = bg.rgb * u_opacity;
  float alpha = bgAlpha;
  outColor = vec4(premul, alpha);
}`, V1 = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 outColor;

uniform sampler2D u_paint;
uniform sampler2D u_mask;
uniform int u_mode;
uniform float u_yaw;
uniform float u_pitch;
uniform float u_roll;
uniform float u_hfov;
uniform float u_vfov;
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

vec2 projectLayerUv(float yaw, float pitch, float roll, float hfov, float vfov) {
  mat3 basis = cameraBasis(yaw, pitch, roll);
  float nx = (v_uv.x * 2.0 - 1.0) * tan(hfov * 0.5);
  float ny = (1.0 - v_uv.y * 2.0) * tan(vfov * 0.5);
  vec3 dir = normalize(basis[2] + basis[0] * nx + basis[1] * ny);
  float lon = atan(dir.x, dir.z);
  float lat = asin(clamp(dir.y, -1.0, 1.0));
  return vec2(lon / TWO_PI + 0.5, clamp(0.5 - lat / PI, 0.0, 1.0));
}

void main() {
  vec2 layerUv = unwrapUv();
  if (u_mode == 1 || u_mode == 2) {
    layerUv = projectLayerUv(u_yaw, u_pitch, u_roll, u_hfov, u_vfov);
  }
  vec4 paint = u_hasPaint == 1 ? texture(u_paint, layerUv) : vec4(0.0);
  vec4 mask = u_hasMask == 1 ? texture(u_mask, layerUv) : vec4(0.0);
  vec3 premul = vec3(0.0);
  float alpha = 0.0;
  if (u_hasPaint == 1) {
    float paintAlpha = clamp(paint.a * u_paintOpacity, 0.0, 1.0);
    premul = paint.rgb * u_paintOpacity + premul * (1.0 - paintAlpha);
    alpha = paintAlpha + alpha * (1.0 - paintAlpha);
  }
  if (u_hasMask == 1 && u_showMaskTint == 1) {
    float maskAlpha = clamp(mask.a * u_maskOpacity, 0.0, 1.0);
    premul = u_maskTint * maskAlpha + premul * (1.0 - maskAlpha);
    alpha = maskAlpha + alpha * (1.0 - maskAlpha);
  }
  outColor = vec4(premul, alpha);
}`, H1 = `#version 300 es
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
function ia(t, e, n) {
  if (!t || t.mode === "unwrap") return null;
  const r = Number(t.mode === "cutout" ? t.hFovDeg || 90 : t.fovDeg || 100), a = Number(t.mode === "cutout" ? t.vFovDeg || 60 : 2 * Math.atan(Math.tan(re(r, 1, 179) * _e * 0.5) * (n / Math.max(e, 1))) / _e);
  return {
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.mode === "cutout" && t.rollDeg || 0),
    hFovDeg: re(r, 1, 179),
    vFovDeg: re(a, 0.1, 179)
  };
}
function $1(t) {
  const e = Eo(
    Number(t.yawDeg || 0),
    Number(t.pitchDeg || 0),
    Number(t.rollDeg || 0)
  );
  return {
    right: e.right,
    up: e.up,
    fwd: e.fwd,
    tanX: Math.tan(re(Number(t.hFovDeg || 30), 0.1, 179) * 0.5 * _e),
    tanY: Math.tan(re(Number(t.vFovDeg || 30), 0.1, 179) * 0.5 * _e),
    crop: t.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: re(Number(t.opacity ?? 1), 0, 1)
  };
}
function z1(t = {}) {
  const e = (t == null ? void 0 : t.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, _ = null, d = null, M = null, I = !1, R = mf(1, 1, 1), D = null, A = null, F = null, P = null, H = null;
  const O = /* @__PURE__ */ new Map();
  let B = {
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, C = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  };
  function ct(x = null, E = null) {
    const V = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, V), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, x ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, E ?? n.CLAMP_TO_EDGE), V;
  }
  function Q() {
    if (I) return !0;
    try {
      return n = e.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (r = fc(n, dc, F1), a = fc(n, dc, V1), s = fc(n, dc, H1), D = {
        mode: n.getUniformLocation(r, "u_mode"),
        yaw: n.getUniformLocation(r, "u_yaw"),
        pitch: n.getUniformLocation(r, "u_pitch"),
        roll: n.getUniformLocation(r, "u_roll"),
        hFov: n.getUniformLocation(r, "u_hfov"),
        vFov: n.getUniformLocation(r, "u_vfov"),
        viewport: n.getUniformLocation(r, "u_viewport"),
        opacity: n.getUniformLocation(r, "u_opacity"),
        coverage: n.getUniformLocation(r, "u_coverage"),
        background: n.getUniformLocation(r, "u_background")
      }, A = {
        mode: n.getUniformLocation(a, "u_mode"),
        yaw: n.getUniformLocation(a, "u_yaw"),
        pitch: n.getUniformLocation(a, "u_pitch"),
        roll: n.getUniformLocation(a, "u_roll"),
        hFov: n.getUniformLocation(a, "u_hfov"),
        vFov: n.getUniformLocation(a, "u_vfov"),
        paintOpacity: n.getUniformLocation(a, "u_paintOpacity"),
        maskOpacity: n.getUniformLocation(a, "u_maskOpacity"),
        hasPaint: n.getUniformLocation(a, "u_hasPaint"),
        hasMask: n.getUniformLocation(a, "u_hasMask"),
        showMaskTint: n.getUniformLocation(a, "u_showMaskTint"),
        maskTint: n.getUniformLocation(a, "u_maskTint"),
        paint: n.getUniformLocation(a, "u_paint"),
        mask: n.getUniformLocation(a, "u_mask")
      }, F = {
        texture: n.getUniformLocation(s, "u_texture"),
        mode: n.getUniformLocation(s, "u_mode"),
        viewRight: n.getUniformLocation(s, "u_viewRight"),
        viewUp: n.getUniformLocation(s, "u_viewUp"),
        viewFwd: n.getUniformLocation(s, "u_viewFwd"),
        viewHfov: n.getUniformLocation(s, "u_viewHfov"),
        viewVfov: n.getUniformLocation(s, "u_viewVfov"),
        stickerRight: n.getUniformLocation(s, "u_stickerRight"),
        stickerUp: n.getUniformLocation(s, "u_stickerUp"),
        stickerFwd: n.getUniformLocation(s, "u_stickerFwd"),
        stickerTanX: n.getUniformLocation(s, "u_stickerTanX"),
        stickerTanY: n.getUniformLocation(s, "u_stickerTanY"),
        crop: n.getUniformLocation(s, "u_crop"),
        opacity: n.getUniformLocation(s, "u_opacity")
      }, u = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, u), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
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
      ]), n.STATIC_DRAW), f = ct(n.REPEAT, n.CLAMP_TO_EDGE), g = ct(n.REPEAT, n.CLAMP_TO_EDGE), y = ct(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), I = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function St() {
    var x;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), g && n.deleteTexture(g), y && n.deleteTexture(y), O.forEach((E) => {
          ot(E);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), s && n.deleteProgram(s), (x = n.getExtension("WEBGL_lose_context")) == null || x.loseContext();
      } catch {
      }
      n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, O.clear(), _ = null, d = null, M = null, C = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, P = null, H = null, I = !1;
    }
  }
  function z(x, E, V = 1) {
    R = mf(x, E, V), (e.width !== R.width || e.height !== R.height) && (e.width = R.width, e.height = R.height);
  }
  function ut(x) {
    x === "background" ? _ = null : x === "paint" ? d = null : M = null, C[x] && (C[x].width = 0, C[x].height = 0);
  }
  function Nt(x, E, V = [], q = { width: 0, height: 0 }, G = !1) {
    if (!n || !x || !E) return !1;
    const W = Number(E.width || E.videoWidth || E.naturalWidth || 0), J = Number(E.height || E.videoHeight || E.naturalHeight || 0);
    if (!(W > 1) || !(J > 1)) return !1;
    const nt = Array.isArray(V) ? V.filter((tt) => tt && tt.w > 0 && tt.h > 0) : [];
    if (!nt.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, x), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G ? 1 : 0), q.width !== W || q.height !== J)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, E), q.width = W, q.height = J, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (P || (P = document.createElement("canvas"), H = P.getContext("2d")), !H)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, E), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const tt of nt) {
      const X = Math.max(0, Math.floor(Number(tt.x || 0))), mt = Math.max(0, Math.floor(Number(tt.y || 0))), rt = Math.min(W - X, Math.ceil(Number(tt.w || 0))), wt = Math.min(J - mt, Math.ceil(Number(tt.h || 0)));
      if (!(rt <= 0 || wt <= 0)) {
        if (P.width !== rt || P.height !== wt) {
          if (P.width = rt, P.height = wt, H = P.getContext("2d"), !H)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, E), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          H.clearRect(0, 0, rt, wt);
        H.drawImage(E, X, mt, rt, wt, 0, 0, rt, wt), n.texSubImage2D(n.TEXTURE_2D, 0, X, mt, n.RGBA, n.UNSIGNED_BYTE, P);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function Y(x, E, V, q, G = null, W = !1) {
    if (!Q()) return !1;
    if (!V)
      return ut(x), !1;
    const J = String(q ?? ""), nt = x === "background" ? _ : x === "paint" ? d : M, tt = C[x], X = Number(V.width || V.videoWidth || V.naturalWidth || 0), mt = Number(V.height || V.videoHeight || V.naturalHeight || 0), rt = tt.width !== X || tt.height !== mt;
    if (nt === J && !rt && !(Array.isArray(G) && G.length)) return !0;
    if (!(X > 0) || !(mt > 0))
      return uc(x, "skip-invalid-size", V, { revision: J, sourceWidth: X, sourceHeight: mt }), ut(x), !1;
    if (n.bindTexture(n.TEXTURE_2D, E), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, W ? 1 : 0), !(Array.isArray(G) && G.length ? Nt(E, V, G, tt, W) : !1)) {
      n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, V);
      const Tt = n.getError();
      if (Tt !== n.NO_ERROR)
        return uc(x, "texImage2D-error", V, {
          revision: J,
          sourceWidth: X,
          sourceHeight: mt,
          glError: Tt
        }), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ut(x), !1;
      tt.width = X, tt.height = mt;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), x === "background" ? _ = J : x === "paint" ? d = J : M = J, !0;
  }
  function it(x, E) {
    return Y("background", f, x, E, null, !0);
  }
  function Z(x, E, V = null) {
    return Y("paint", g, x, E, V, !0);
  }
  function ft(x, E, V = null) {
    return Y("mask", y, x, E, V, !0);
  }
  function ot(x) {
    x != null && x.texture && n && n.deleteTexture(x.texture);
  }
  function yt(x) {
    if (!n || !(x != null && x.assetId) || !(x != null && x.source)) return null;
    const E = String(x.assetId), V = String(x.revision ?? ""), q = x.source, G = Number(q.width || q.naturalWidth || q.videoWidth || 0), W = Number(q.height || q.naturalHeight || q.videoHeight || 0);
    if (G <= 0 || W <= 0) return null;
    let J = O.get(E);
    if (J || (J = {
      texture: ct(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, O.set(E, J)), J.revision !== V || J.width !== G || J.height !== W) {
      n.bindTexture(n.TEXTURE_2D, J.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, q);
      const nt = n.getError();
      if (nt !== n.NO_ERROR)
        return uc(`sticker:${E}`, "texImage2D-error", q, {
          revision: V,
          width: G,
          height: W,
          glError: nt
        }), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), J.revision = V, J.width = G, J.height = W;
    }
    return J.texture;
  }
  function Mt(x = []) {
    if (!Q()) return !1;
    const E = /* @__PURE__ */ new Set();
    return x.forEach((V) => {
      !(V != null && V.assetId) || !(V != null && V.source) || (E.add(String(V.assetId)), yt(V));
    }), O.forEach((V, q) => {
      E.has(q) || (ot(V), O.delete(q));
    }), !0;
  }
  function Et() {
    return Q() ? (n.viewport(0, 0, e.width, e.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function et(x) {
    n.useProgram(x), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function vt(x, E = {}) {
    if (!_) return null;
    n.disable(n.BLEND), et(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(D.background, 0), n.uniform2f(D.viewport, Math.max(1, R.width), Math.max(1, R.height)), n.uniform1i(D.mode, (x == null ? void 0 : x.mode) === "unwrap" ? 0 : (x == null ? void 0 : x.mode) === "cutout" ? 2 : 1);
    const V = ia(x, R.width, R.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(D.yaw, Number(V.yawDeg || 0) * _e), n.uniform1f(D.pitch, Number(V.pitchDeg || 0) * _e), n.uniform1f(D.roll, Number(V.rollDeg || 0) * _e), n.uniform1f(D.hFov, re(Number(V.hFovDeg || 90), 0.1, 179) * _e), n.uniform1f(D.vFov, re(Number(V.vFovDeg || 60), 0.1, 179) * _e), n.uniform1f(D.opacity, re(Number(E.backgroundOpacity ?? 1), 0, 1));
    const q = Number((x == null ? void 0 : x.coverageDeg) || (E == null ? void 0 : E.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(D.coverage, q), n.drawArrays(n.TRIANGLES, 0, 6), e;
  }
  function Ct(x, E = {}) {
    if (d == null && M == null) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), et(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i(A.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(A.mask, 1), n.uniform1i(A.mode, (x == null ? void 0 : x.mode) === "unwrap" ? 0 : (x == null ? void 0 : x.mode) === "cutout" ? 2 : 1);
    const V = ia(x, R.width, R.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(A.yaw, Number(V.yawDeg || 0) * _e), n.uniform1f(A.pitch, Number(V.pitchDeg || 0) * _e), n.uniform1f(A.roll, Number(V.rollDeg || 0) * _e), n.uniform1f(A.hFov, re(Number(V.hFovDeg || 90), 0.1, 179) * _e), n.uniform1f(A.vFov, re(Number(V.vFovDeg || 60), 0.1, 179) * _e), n.uniform1f(A.paintOpacity, re(Number(E.paintOpacity ?? 1), 0, 1)), n.uniform1f(A.maskOpacity, re(Number(E.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(A.hasPaint, d != null ? 1 : 0), n.uniform1i(A.hasMask, M != null ? 1 : 0), n.uniform1i(A.showMaskTint, E.showMaskTint === !1 ? 0 : 1), n.uniform3f(A.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), e;
  }
  function de(x, E, V) {
    var tt;
    if (!((tt = x == null ? void 0 : x.stickers) != null && tt.length) || !(E != null && E.length)) return;
    const q = (V == null ? void 0 : V.mode) === "unwrap" ? 0 : (V == null ? void 0 : V.mode) === "cutout" ? 2 : 1, G = ia(V, R.width, R.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, W = Eo(G.yawDeg, G.pitchDeg, G.rollDeg), J = /* @__PURE__ */ new Map();
    E.forEach((X) => {
      const mt = yt(X);
      mt && J.set(String(X.assetId || ""), mt);
    }), n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), et(s), n.uniform1i(F.texture, 0), n.uniform1i(F.mode, q), n.uniform3f(F.viewRight, W.right.x, W.right.y, W.right.z), n.uniform3f(F.viewUp, W.up.x, W.up.y, W.up.z), n.uniform3f(F.viewFwd, W.fwd.x, W.fwd.y, W.fwd.z), n.uniform1f(F.viewHfov, re(Number(G.hFovDeg || 90), 0.1, 179) * _e), n.uniform1f(F.viewVfov, re(Number(G.vFovDeg || 60), 0.1, 179) * _e), [...x.stickers].sort((X, mt) => Number((X == null ? void 0 : X.zIndex) || 0) - Number((mt == null ? void 0 : mt.zIndex) || 0)).forEach((X) => {
      const mt = J.get(String((X == null ? void 0 : X.assetId) || ""));
      if (!mt) return;
      const rt = $1(X), wt = rt.crop;
      n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, mt), n.uniform3f(F.stickerRight, rt.right.x, rt.right.y, rt.right.z), n.uniform3f(F.stickerUp, rt.up.x, rt.up.y, rt.up.z), n.uniform3f(F.stickerFwd, rt.fwd.x, rt.fwd.y, rt.fwd.z), n.uniform1f(F.stickerTanX, Math.max(1e-6, rt.tanX)), n.uniform1f(F.stickerTanY, Math.max(1e-6, rt.tanY)), n.uniform4f(
        F.crop,
        re(Number(wt.x0 ?? 0), 0, 1),
        re(Number(wt.y0 ?? 0), 0, 1),
        re(Number(wt.x1 ?? 1), 0, 1),
        re(Number(wt.y1 ?? 1), 0, 1)
      ), n.uniform1f(F.opacity, rt.opacity), n.drawArrays(n.TRIANGLES, 0, 6);
    }), n.disable(n.BLEND);
  }
  function se(x) {
    return !Et() || !_ ? null : (vt({
      mode: "panorama",
      yawDeg: (x == null ? void 0 : x.yawDeg) || 0,
      pitchDeg: (x == null ? void 0 : x.pitchDeg) || 0,
      fovDeg: (x == null ? void 0 : x.fovDeg) || 100
    }, x), e);
  }
  function ye(x) {
    return !Et() || !_ ? null : (vt({ mode: "unwrap" }, x), e);
  }
  function Ae(x) {
    return !Et() || !_ ? null : (vt({
      mode: "cutout",
      yawDeg: (x == null ? void 0 : x.yawDeg) || 0,
      pitchDeg: (x == null ? void 0 : x.pitchDeg) || 0,
      rollDeg: (x == null ? void 0 : x.rollDeg) || 0,
      hFovDeg: (x == null ? void 0 : x.hFovDeg) || 90,
      vFovDeg: (x == null ? void 0 : x.vFovDeg) || 60
    }, x), e);
  }
  function Ke(x = {}) {
    if (!Q() || (z(x.width, x.height, x.dpr || 1), !Et())) return null;
    const E = Object.prototype.hasOwnProperty.call(x, "backgroundSource"), V = Object.prototype.hasOwnProperty.call(x, "paintSource"), q = Object.prototype.hasOwnProperty.call(x, "maskSource"), G = Object.prototype.hasOwnProperty.call(x, "textures"), W = Object.prototype.hasOwnProperty.call(x, "scene");
    return E && it(x.backgroundSource, x.backgroundRevision ?? ""), V && Z(x.paintSource, x.paintRevision ?? ""), q && ft(x.maskSource, x.maskRevision ?? ""), G && (Mt(x.textures || []), B.textures = x.textures || []), W && (B.scene = x.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(x, "backgroundOpacity") && (B.backgroundOpacity = Number(x.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(x, "showMaskTint") && (B.showMaskTint = x.showMaskTint === !0), Object.prototype.hasOwnProperty.call(x, "coverageDeg") && (B.coverageDeg = Number(x.coverageDeg || 360) === 180 ? 180 : 360), _ && vt(x.view, {
      ...x,
      backgroundOpacity: Number(x.backgroundOpacity ?? B.backgroundOpacity ?? 1),
      coverageDeg: Number(x.coverageDeg || B.coverageDeg || 360) === 180 ? 180 : 360
    }), Ct(x.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }, {
      ...B,
      ...x,
      showMaskTint: x.showMaskTint ?? B.showMaskTint ?? !1
    }), de(
      B.scene || { stickers: [] },
      B.textures || [],
      x.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), e;
  }
  function Ve(x = {}) {
    return Q() ? !!Ke({
      ...x,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(x.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(e.width || 1),
      height: Number(e.height || 1),
      dpr: 1
    }) : !1;
  }
  function an(x, E, V) {
    const q = Math.max(1, Number((x == null ? void 0 : x.viewportWidth) || R.sourceWidth || R.width || 1)), G = Math.max(1, Number((x == null ? void 0 : x.viewportHeight) || R.sourceHeight || R.height || 1)), W = Number(E), J = Number(V);
    if (!Number.isFinite(W) || !Number.isFinite(J)) return null;
    if ((x == null ? void 0 : x.mode) === "unwrap")
      return { u: (W / q % 1 + 1) % 1, v: re(J / G, 0, 1) };
    const nt = ia(x, q, G);
    if (!nt) return null;
    const tt = Eo(nt.yawDeg, nt.pitchDeg, nt.rollDeg), X = (W - q * 0.5) / (q * 0.5) * Math.tan(re(nt.hFovDeg, 1, 179) * _e * 0.5), mt = (G * 0.5 - J) / (G * 0.5) * Math.tan(re(nt.vFovDeg, 0.1, 179) * _e * 0.5), rt = da(Uo(Uo(Ni(tt.right, X), Ni(tt.up, mt)), tt.fwd));
    return {
      u: (Math.atan2(rt.x, rt.z) / gh + 0.5 + 1) % 1,
      v: re(0.5 - Math.asin(re(rt.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function Qn(x, E, V) {
    const q = Math.max(1, Number((x == null ? void 0 : x.viewportWidth) || R.sourceWidth || R.width || 1)), G = Math.max(1, Number((x == null ? void 0 : x.viewportHeight) || R.sourceHeight || R.height || 1));
    if ((x == null ? void 0 : x.mode) === "unwrap")
      return {
        x: (Number(E || 0) % 1 + 1) % 1 * q,
        y: re(Number(V || 0), 0, 1) * G,
        visible: !0
      };
    const W = ia(x, q, G);
    if (!W)
      return { x: q * 0.5, y: G * 0.5, visible: !1 };
    const J = Eo(W.yawDeg, W.pitchDeg, W.rollDeg), nt = O1(E, V), tt = Io(nt, J.right), X = Io(nt, J.up), mt = Io(nt, J.fwd);
    if (mt <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const rt = q * 0.5 + tt / mt * (q * 0.5 / Math.tan(re(W.hFovDeg, 1, 179) * _e * 0.5)), wt = G * 0.5 - X / mt * (G * 0.5 / Math.tan(re(W.vFovDeg, 0.1, 179) * _e * 0.5));
    return { x: rt, y: wt, visible: rt >= 0 && rt <= q && wt >= 0 && wt <= G };
  }
  return {
    init: Q,
    dispose: St,
    setViewport: z,
    setBackgroundErp: it,
    setPaintErp: Z,
    setMaskErp: ft,
    renderPanorama: se,
    renderUnwrap: ye,
    renderCutout: Ae,
    renderScene: Ke,
    syncState: Ve,
    screenToErpUv: an,
    erpUvToScreen: Qn,
    getCanvas() {
      return e;
    },
    isSupported() {
      return Q();
    },
    getViewport() {
      return { ...R };
    }
  };
}
function vf(t, e = 1) {
  const n = Math.round(Number(t || e));
  return Math.max(1, n);
}
function j1() {
  const t = /* @__PURE__ */ new Map();
  function e(s, u, f) {
    const g = String(s || "default");
    let y = t.get(g) || null;
    if (!y) {
      const M = document.createElement("canvas"), I = M.getContext("2d");
      if (!I) return null;
      y = {
        id: g,
        canvas: M,
        ctx: I,
        width: 0,
        height: 0
      }, t.set(g, y);
    }
    const _ = vf(u), d = vf(f);
    return y.width !== _ && (y.canvas.width = _, y.width = _), y.height !== d && (y.canvas.height = d, y.height = d), y;
  }
  function n(s) {
    return t.get(String(s || "default")) || null;
  }
  function r(s) {
    const u = n(s);
    u && u.ctx.clearRect(0, 0, u.canvas.width, u.canvas.height);
  }
  function a() {
    t.clear();
  }
  return {
    ensureTarget: e,
    getTarget: n,
    clearTarget: r,
    dispose: a
  };
}
const U1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), B1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function mh(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function G1(t, e) {
  return t === "paint" || t === "mask" || t === "raster" ? !1 : e !== !1;
}
function W1(t = {}) {
  return {
    type: B1.has(String((t == null ? void 0 : t.type) || "")) ? String(t.type) : "erp_image",
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    coverageDeg: Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: mh(Number((t == null ? void 0 : t.opacity) ?? 1), 0, 1),
    visible: (t == null ? void 0 : t.visible) !== !1
  };
}
function K1(t = {}) {
  const e = String((t == null ? void 0 : t.type) || "");
  return U1.has(e) ? {
    id: String((t == null ? void 0 : t.id) || ""),
    type: e,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    visible: (t == null ? void 0 : t.visible) !== !1,
    opacity: mh(Number((t == null ? void 0 : t.opacity) ?? 1), 0, 1),
    zIndex: Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0),
    coverageAware: G1(e, t == null ? void 0 : t.coverageAware),
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  } : null;
}
function q1(t = {}) {
  return {
    objects: (Array.isArray(t == null ? void 0 : t.objects) ? t.objects : []).map((r) => K1(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const s = Number((r == null ? void 0 : r.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return s !== u ? s - u : String((r == null ? void 0 : r.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (t == null ? void 0 : t.selectedId) ?? null,
    hoveredId: (t == null ? void 0 : t.hoveredId) ?? null
  };
}
function hl(t = {}) {
  return {
    background: W1((t == null ? void 0 : t.background) || {}),
    objectPass: q1((t == null ? void 0 : t.objectPass) || {}),
    overlay: t != null && t.overlay && typeof t.overlay == "object" ? { ...t.overlay } : {}
  };
}
function Y1(t = {}) {
  var a, s, u, f, g, y, _, d;
  if (t != null && t.background || t != null && t.objectPass || t != null && t.overlay) {
    const M = hl(t), I = Array.isArray((a = M.objectPass) == null ? void 0 : a.objects) ? M.objectPass.objects : [], R = {
      stickers: I.filter((P) => P.type === "sticker").map((P) => {
        var H, O, B, C, ct, Q, St, z, ut, Nt, Y, it, Z;
        return {
          id: P.id,
          assetId: String(((H = P == null ? void 0 : P.params) == null ? void 0 : H.assetId) || ((O = P == null ? void 0 : P.params) == null ? void 0 : O.asset_id) || ""),
          yawDeg: Number(((B = P == null ? void 0 : P.transform) == null ? void 0 : B.yawDeg) ?? ((C = P == null ? void 0 : P.params) == null ? void 0 : C.yawDeg) ?? 0),
          pitchDeg: Number(((ct = P == null ? void 0 : P.transform) == null ? void 0 : ct.pitchDeg) ?? ((Q = P == null ? void 0 : P.params) == null ? void 0 : Q.pitchDeg) ?? 0),
          rollDeg: Number(((St = P == null ? void 0 : P.transform) == null ? void 0 : St.rollDeg) ?? ((z = P == null ? void 0 : P.params) == null ? void 0 : z.rollDeg) ?? 0),
          hFovDeg: Number(((ut = P == null ? void 0 : P.transform) == null ? void 0 : ut.hFovDeg) ?? ((Nt = P == null ? void 0 : P.params) == null ? void 0 : Nt.hFovDeg) ?? 30),
          vFovDeg: Number(((Y = P == null ? void 0 : P.transform) == null ? void 0 : Y.vFovDeg) ?? ((it = P == null ? void 0 : P.params) == null ? void 0 : it.vFovDeg) ?? 30),
          crop: ((Z = P == null ? void 0 : P.params) == null ? void 0 : Z.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((P == null ? void 0 : P.opacity) ?? 1),
          visible: (P == null ? void 0 : P.visible) !== !1,
          zIndex: Number((P == null ? void 0 : P.zIndex) ?? 0)
        };
      }),
      selectedId: ((s = M.objectPass) == null ? void 0 : s.selectedId) ?? null,
      hoveredId: ((u = M.objectPass) == null ? void 0 : u.hoveredId) ?? null
    }, D = I.filter((P) => P.type === "sticker").map((P) => {
      var H, O;
      return {
        assetId: String(((H = P == null ? void 0 : P.params) == null ? void 0 : H.assetId) || ((O = P == null ? void 0 : P.params) == null ? void 0 : O.asset_id) || (P == null ? void 0 : P.id) || ""),
        source: P.source || null,
        revision: String((P == null ? void 0 : P.revision) || "")
      };
    }).filter((P) => P.assetId && P.source), A = I.find((P) => P.type === "paint") || null, F = I.find((P) => P.type === "mask") || null;
    return {
      stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
      backgroundSource: ((f = M.background) == null ? void 0 : f.source) || null,
      backgroundRevision: String(((g = M.background) == null ? void 0 : g.revision) || ""),
      coverageDeg: Number(((y = M.background) == null ? void 0 : y.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (A == null ? void 0 : A.source) || null,
      paintRevision: String((A == null ? void 0 : A.revision) || ""),
      maskSource: (F == null ? void 0 : F.source) || null,
      maskRevision: String((F == null ? void 0 : F.revision) || ""),
      textures: D,
      scene: R,
      backgroundOpacity: Number(((_ = M.background) == null ? void 0 : _.opacity) ?? 1),
      showMaskTint: ((d = t == null ? void 0 : t.overlay) == null ? void 0 : d.showMaskTint) === !0
    };
  }
  const e = t.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t.textures) ? t.textures : [], r = t.layers || {};
  return {
    stateRevision: String(t.stateRevision || ""),
    backgroundSource: t.backgroundSource || null,
    backgroundRevision: String(t.backgroundRevision || ""),
    coverageDeg: Number(t.coverageDeg || 360) === 180 ? 180 : 360,
    paintSource: r.paintSource || null,
    paintRevision: String(r.paintRevision || ""),
    maskSource: r.maskSource || null,
    maskRevision: String(r.maskRevision || ""),
    textures: n,
    scene: e,
    backgroundOpacity: Number(t.backgroundOpacity ?? 1),
    showMaskTint: t.showMaskTint === !0
  };
}
function X1(t) {
  let e = null;
  function n(s = {}) {
    const u = Y1(s);
    return t.syncState({
      stateRevision: u.stateRevision,
      backgroundSource: u.backgroundSource,
      backgroundRevision: u.backgroundRevision,
      coverageDeg: u.coverageDeg,
      paintSource: u.paintSource,
      paintRevision: u.paintRevision,
      maskSource: u.maskSource,
      maskRevision: u.maskRevision,
      textures: u.textures,
      scene: u.scene,
      backgroundOpacity: u.backgroundOpacity,
      showMaskTint: u.showMaskTint
    }) ? (e = u, !0) : !1;
  }
  function r() {
    return e;
  }
  function a() {
    e = null;
  }
  return {
    sync: n,
    snapshot: r,
    clear: a
  };
}
function Li(t = {}) {
  const e = typeof (t == null ? void 0 : t.rendererFactory) == "function" ? t.rendererFactory : (A) => z1(A), n = typeof (t == null ? void 0 : t.targetPoolFactory) == "function" ? t.targetPoolFactory : () => j1(), r = typeof (t == null ? void 0 : t.stateControllerFactory) == "function" ? t.stateControllerFactory : (A) => X1(A), a = e(t), s = (t == null ? void 0 : t.targetCanvas) || null, u = n();
  let f = null;
  const g = r({
    syncState(A = {}) {
      return f = { ...A }, typeof a.syncState == "function" ? a.syncState(f) : !0;
    }
  });
  function y(A = {}) {
    return g.sync(A);
  }
  function _(A = {}, F = {}) {
    return f ? a.renderScene({
      ...f,
      view: A,
      width: F.width,
      height: F.height,
      dpr: F.dpr,
      backgroundOpacity: F.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: F.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function d(A, F, P = {}, H = {}) {
    if (!F) return !1;
    const O = _(P, {
      ...H,
      width: F.w,
      height: F.h
    });
    return O ? A ? (A.canvas && O === A.canvas || A.drawImage(O, F.x, F.y, F.w, F.h), !0) : !!s && O === s : !1;
  }
  function M(A, F = {}, P = {}) {
    const H = Number(P.width || 0), O = Number(P.height || 0);
    if (!(H > 0) || !(O > 0)) return null;
    const B = u.ensureTarget(A, H, O);
    if (!B) return null;
    const C = _(F, {
      ...P,
      width: H,
      height: O
    });
    return C ? (B.ctx.clearRect(0, 0, B.canvas.width, B.canvas.height), B.ctx.drawImage(C, 0, 0, B.canvas.width, B.canvas.height), B.canvas) : null;
  }
  function I(A) {
    u.clearTarget(A);
  }
  function R() {
    var A;
    u.dispose(), (A = a.dispose) == null || A.call(a), f = null;
  }
  function D() {
    f = null, g.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: y,
    renderView: _,
    renderToContext: d,
    renderToTarget: M,
    clearTarget: I,
    snapshotState: g.snapshot,
    clearState: D,
    dispose: R
  };
}
function Z1(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function pl(t = {}, e = "paint") {
  const n = String((t == null ? void 0 : t.type) || e);
  return {
    id: String((t == null ? void 0 : t.id) || `${n}_layer`),
    type: n,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    zIndex: Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0),
    opacity: Z1(Number((t == null ? void 0 : t.opacity) ?? 1), 0, 1),
    visible: (t == null ? void 0 : t.visible) !== !1,
    coverageAware: !1,
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  };
}
function J1(t, e, n = {}) {
  return t ? pl({
    id: String((n == null ? void 0 : n.id) || "paint_layer"),
    type: "paint",
    source: t,
    revision: e,
    zIndex: Number((n == null ? void 0 : n.zIndex) ?? 100),
    opacity: Number((n == null ? void 0 : n.opacity) ?? 1),
    visible: (n == null ? void 0 : n.visible) !== !1,
    params: (n == null ? void 0 : n.params) || {}
  }, "paint") : null;
}
function Q1(t, e, n = {}) {
  return t ? pl({
    id: String((n == null ? void 0 : n.id) || "mask_layer"),
    type: "mask",
    source: t,
    revision: e,
    zIndex: Number((n == null ? void 0 : n.zIndex) ?? 110),
    opacity: Number((n == null ? void 0 : n.opacity) ?? 1),
    visible: (n == null ? void 0 : n.visible) !== !1,
    params: (n == null ? void 0 : n.params) || {}
  }, "mask") : null;
}
function ty(t, e, n = {}) {
  return t ? pl({
    id: String((n == null ? void 0 : n.id) || "raster_layer"),
    type: "raster",
    source: t,
    revision: e,
    zIndex: Number((n == null ? void 0 : n.zIndex) ?? 90),
    opacity: Number((n == null ? void 0 : n.opacity) ?? 1),
    visible: (n == null ? void 0 : n.visible) !== !1,
    transform: (n == null ? void 0 : n.transform) || null,
    params: (n == null ? void 0 : n.params) || {}
  }, "raster") : null;
}
function ey(t = {}) {
  const e = [], n = J1(t == null ? void 0 : t.paintSource, t == null ? void 0 : t.paintRevision, t == null ? void 0 : t.paintOptions), r = Q1(t == null ? void 0 : t.maskSource, t == null ? void 0 : t.maskRevision, t == null ? void 0 : t.maskOptions), a = Array.isArray(t == null ? void 0 : t.rasterEntries) ? t.rasterEntries : [];
  return n && e.push(n), r && e.push(r), a.forEach((s, u) => {
    const f = ty(
      (s == null ? void 0 : s.source) || null,
      (s == null ? void 0 : s.revision) || "",
      {
        id: String((s == null ? void 0 : s.id) || `raster_layer_${u}`),
        zIndex: Number((s == null ? void 0 : s.zIndex) ?? (s == null ? void 0 : s.z_index) ?? 90),
        opacity: Number((s == null ? void 0 : s.opacity) ?? 1),
        visible: (s == null ? void 0 : s.visible) !== !1,
        transform: (s == null ? void 0 : s.transform) || null,
        params: (s == null ? void 0 : s.params) || {}
      }
    );
    f && e.push(f);
  }), e.sort((s, u) => {
    const f = Number((s == null ? void 0 : s.zIndex) || 0), g = Number((u == null ? void 0 : u.zIndex) || 0);
    return f !== g ? f - g : String((s == null ? void 0 : s.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function yh(t, e) {
  const n = new Map(
    (Array.isArray(e) ? e : []).map((r) => [String((r == null ? void 0 : r.assetId) || ""), r]).filter(([r, a]) => r && (a == null ? void 0 : a.source))
  );
  return Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers.map((r) => {
    const a = n.get(String((r == null ? void 0 : r.assetId) || ""));
    return a ? {
      id: String((r == null ? void 0 : r.id) || ""),
      type: "sticker",
      source: a.source,
      revision: a.revision,
      zIndex: Number((r == null ? void 0 : r.zIndex) || 0),
      opacity: Number((r == null ? void 0 : r.opacity) ?? 1),
      transform: {
        yawDeg: Number((r == null ? void 0 : r.yawDeg) || 0),
        pitchDeg: Number((r == null ? void 0 : r.pitchDeg) || 0),
        rollDeg: Number((r == null ? void 0 : r.rollDeg) || 0),
        hFovDeg: Number((r == null ? void 0 : r.hFovDeg) || 30),
        vFovDeg: Number((r == null ? void 0 : r.vFovDeg) || 30)
      },
      params: {
        assetId: String((r == null ? void 0 : r.assetId) || ""),
        crop: (r == null ? void 0 : r.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
      }
    } : null;
  }).filter(Boolean) : [];
}
function gs(t = {}) {
  const e = (t == null ? void 0 : t.backgroundSource) || null, n = Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360;
  String((t == null ? void 0 : t.stateRevision) || "");
  const r = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, a = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], s = String((t == null ? void 0 : t.backgroundRevision) || [
    String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
    Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
    Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
  ].join("|"));
  return hl({
    background: {
      type: "erp_image",
      source: e,
      revision: s,
      coverageDeg: n,
      opacity: Number((t == null ? void 0 : t.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (r == null ? void 0 : r.selectedId) ?? null,
      hoveredId: (r == null ? void 0 : r.hoveredId) ?? null,
      objects: yh(r, a)
    },
    overlay: {
      showMaskTint: (t == null ? void 0 : t.showMaskTint) === !0
    }
  });
}
function hc(t = {}) {
  const e = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], r = yh(e, n), a = ey({
    paintSource: (t == null ? void 0 : t.paintSource) || null,
    paintRevision: (t == null ? void 0 : t.paintRevision) || "",
    paintOptions: (t == null ? void 0 : t.paintOptions) || null,
    maskSource: (t == null ? void 0 : t.maskSource) || null,
    maskRevision: (t == null ? void 0 : t.maskRevision) || "",
    maskOptions: (t == null ? void 0 : t.maskOptions) || null,
    rasterEntries: (t == null ? void 0 : t.rasterEntries) || []
  });
  return hl({
    stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
    background: {
      type: "erp_image",
      source: (t == null ? void 0 : t.backgroundSource) || null,
      revision: String((t == null ? void 0 : t.backgroundRevision) || ""),
      coverageDeg: Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360,
      opacity: Number((t == null ? void 0 : t.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (e == null ? void 0 : e.selectedId) ?? null,
      hoveredId: (e == null ? void 0 : e.hoveredId) ?? null,
      objects: [...r, ...a]
    },
    overlay: {
      showMaskTint: (t == null ? void 0 : t.showMaskTint) === !0
    }
  });
}
function _i(t, e) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(t)), n.height = Math.max(1, Math.round(e));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function vh() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ny(t, e) {
  vh() && console.warn(`[PANO_PAINT][${t}]`, e);
}
function bf(t, e = 8) {
  var _;
  const n = (_ = t == null ? void 0 : t.getContext) == null ? void 0 : _.call(t, "2d"), r = Number((t == null ? void 0 : t.width) || 0), a = Number((t == null ? void 0 : t.height) || 0);
  if (!n || r < 1 || a < 1) return null;
  const s = n.getImageData(0, 0, r, a).data;
  let u = r, f = a, g = -1, y = -1;
  for (let d = 0; d < a; d += 1)
    for (let M = 0; M < r; M += 1)
      s[(d * r + M) * 4 + 3] <= e || (M < u && (u = M), d < f && (f = d), M > g && (g = M), d > y && (y = d));
  return g < u || y < f ? null : {
    minX: u,
    minY: f,
    maxX: g,
    maxY: y,
    width: g - u + 1,
    height: y - f + 1,
    aspect: Number(((g - u + 1) / Math.max(1, y - f + 1)).toFixed(4))
  };
}
function gl(t, e) {
  const n = Math.max(1, Math.ceil(t)), r = Math.max(1, Math.ceil(e));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const a = document.createElement("canvas");
  return a.width = n, a.height = r, a;
}
function Bn(t, e, n) {
  if (!t) return _i(e, n);
  const r = Math.max(1, Math.round(e)), a = Math.max(1, Math.round(n));
  return (t.canvas.width !== r || t.canvas.height !== a) && (t.canvas.width = r, t.canvas.height = a, t.ctx.imageSmoothingEnabled = !0), t;
}
function ue(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let pc = null, gc = null, _f = null, wf = null, Qt = null, aa = null, Je = null, Nr = null;
function ry() {
  if (gc) return gc;
  const t = 6, e = 17, n = document.createElement("canvas");
  n.width = e, n.height = e;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e, e), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = t, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(e, e), r.moveTo(-e / 2, e / 2), r.lineTo(e / 2, e + e / 2), r.moveTo(e / 2, -e / 2), r.lineTo(e + e / 2, e / 2), r.stroke(), gc = n, n;
}
function pi(t, e) {
  if (!t || !e) return;
  const n = e.width, r = e.height;
  pc = Bn(pc, n, r);
  const a = pc;
  ue(a), a.ctx.drawImage(e, 0, 0), a.ctx.globalCompositeOperation = "source-in", wf !== a.ctx && (_f = a.ctx.createPattern(ry(), "repeat"), wf = a.ctx), a.ctx.fillStyle = _f, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(a.canvas, 0, 0), t.restore();
}
function iy(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function ay(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function oy(t, e) {
  const n = Number(t == null ? void 0 : t.radiusValue), r = String((t == null ? void 0 : t.radiusModel) || "").trim(), a = (e == null ? void 0 : e.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function sy(t, e) {
  const n = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * e * 2);
  const r = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * e * 2);
}
const me = /* @__PURE__ */ new Map(), ml = 128;
function cy(t, e, n, r, a, s) {
  const u = Math.max(1, Math.round(t)), f = Math.max(0, Math.min(1, e)), g = `${u}:${f.toFixed(2)}:${n}:${r}:${a}:${s.toFixed(3)}`;
  if (me.has(g)) {
    const P = me.get(g);
    return me.delete(g), me.set(g, P), P;
  }
  me.size >= ml && me.delete(me.keys().next().value);
  const y = u * 2 + 2, _ = u + 1, d = gl(y, y), M = d.getContext("2d"), I = f * u, R = u + 1, D = `rgba(${n},${r},${a},${s})`, A = `rgba(${n},${r},${a},0)`, F = M.createRadialGradient(_, _, I, _, _, R);
  return F.addColorStop(0, D), F.addColorStop(1, A), M.fillStyle = F, M.fillRect(0, 0, y, y), me.set(g, d), d;
}
function ly(t, e, n, r, a, s, u) {
  const { r: f, g, b: y, a: _ } = r, d = Math.max(2, Math.ceil(t) * 2), M = Math.max(2, Math.ceil(e) * 2), I = Math.max(0, a), R = Math.max(0, Math.min(0.99, s)), D = Math.max(0, Math.min(1, u ?? 0)), A = `chisel:${d}:${M}:${n.toFixed(2)}:${f}:${g}:${y}:${_.toFixed(3)}:${I.toFixed(2)}:${R.toFixed(2)}:${D.toFixed(2)}`;
  if (me.has(A)) {
    const Q = me.get(A);
    return me.delete(A), me.set(A, Q), Q;
  }
  me.size >= ml && me.delete(me.keys().next().value);
  const F = gl(d, M), P = F.getContext("2d"), H = P.createImageData(d, M), O = H.data, B = Math.max(0, t - e), C = Math.max(0, Math.min(1, n)), ct = 1 + I;
  for (let Q = 0; Q < M; Q++)
    for (let St = 0; St < d; St++) {
      const z = St + 0.5 - t, ut = Q + 0.5 - e, Nt = Math.max(Math.abs(z) - B, 0), it = Math.hypot(Nt, ut) / e;
      if (it >= 1) continue;
      const Z = it <= C ? 1 : Math.max(0, (1 - it) / Math.max(1e-4, 1 - C)), ft = 1 - it, ot = 1 + I * (1 - ft) * (1 - ft), yt = 1 - R * ft * ft, Mt = ot * yt / ct;
      let Et = 1;
      if (D > 0) {
        const Ct = Math.floor((ut + e) / 1.5), de = Math.floor((z + t) / 8), se = Gr(Ei(Ct * 41 + 500, de * 19 + 300));
        Et = 1 - D * 0.42 * se;
      }
      const et = Math.round(255 * Math.min(1, _ * Z * Mt * Et));
      if (et <= 0) continue;
      const vt = (Q * d + St) * 4;
      O[vt] = f, O[vt + 1] = g, O[vt + 2] = y, O[vt + 3] = et;
    }
  return P.putImageData(H, 0, 0), me.set(A, F), F;
}
function Ei(t, e) {
  const n = Math.trunc(Math.round(t * 4)), r = Math.trunc(Math.round(e * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a >>> 0;
}
function Gr(t) {
  let e = t + 1831565813 >>> 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function uy(t, e, n, r, a, s, u) {
  const f = t + 0.5 - n, g = e + 0.5 - r, y = Math.max(0, n - r), _ = Math.max(Math.abs(f) - y, 0), d = Math.hypot(_, g) / r;
  if (d >= 1) return 0;
  const M = Gr(Ei(t * 17 + 3, e * 13 + 7)), I = d + s * 0.22 * (M - 0.5);
  if (I >= 1) return 0;
  const R = I <= a ? 1 : Math.max(0, (1 - I) / Math.max(1e-4, 1 - a)), D = fy(t, e, f, g, n, r), A = s * 0.55;
  if (D < A) return 0;
  const P = 0.45 + 0.55 * ((D - A) / Math.max(1e-4, 1 - A));
  return Math.round(255 * Math.min(1, u * R * P));
}
function fy(t, e, n, r, a, s) {
  const u = Math.floor((n + a) / 3), f = Math.floor((r + s) / 2), g = Gr(Ei(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + a) / 1.5), _ = Math.floor((r + s) / 1.5), d = Gr(Ei(y * 23 + 800, _ * 29 + 500)), M = Gr(Ei(t * 3 + 100, e * 5 + 200));
  return g * 0.55 + d * 0.3 + M * 0.15;
}
function dy(t, e, n, r, a) {
  const { r: s, g: u, b: f, a: g } = r, y = Math.max(2, Math.ceil(t) * 2), _ = Math.max(2, Math.ceil(e) * 2), d = Math.max(0, Math.min(1, a)), M = `crayon:${y}:${_}:${n.toFixed(2)}:${s}:${u}:${f}:${g.toFixed(3)}:${d.toFixed(2)}`;
  if (me.has(M)) {
    const P = me.get(M);
    return me.delete(M), me.set(M, P), P;
  }
  me.size >= ml && me.delete(me.keys().next().value);
  const I = gl(y, _), R = I.getContext("2d"), D = R.createImageData(y, _), A = D.data, F = Math.max(0, Math.min(1, n));
  for (let P = 0; P < _; P++)
    for (let H = 0; H < y; H++) {
      const O = uy(H, P, t, e, F, d, g);
      if (O <= 0) continue;
      const B = (P * y + H) * 4;
      A[B] = s, A[B + 1] = u, A[B + 2] = f, A[B + 3] = O;
    }
  return R.putImageData(D, 0, 0), me.set(M, I), I;
}
function bh(t, e, n) {
  var D, A;
  const r = String((e == null ? void 0 : e.stampKind) || "round"), a = oy(e, n), s = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), u = hy(e), f = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), g = Number(((D = e == null ? void 0 : e.angle) == null ? void 0 : D.value) ?? 0), y = sy(e, a), _ = String(((A = e == null ? void 0 : e.targetSpace) == null ? void 0 : A.viewMode) || ""), d = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && _ !== "unwrap", M = e == null ? void 0 : e.scatter, I = M ? { radius: Number(M.radius ?? 1.5), count: Math.max(1, Math.round(M.count ?? 6)) } : null;
  let R;
  if (r === "chisel") {
    const F = a * f, P = a, H = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), O = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), B = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    R = ly(F, P, s, u, H, O, B);
  } else if (r === "crayon") {
    const F = a * f, P = a, H = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    R = dy(F, P, s, u, H);
  } else
    R = cy(a, s, u.r, u.g, u.b, u.a);
  return { ctx: t, stampTex: R, radiusPx: a, spacingPx: y, desc: n, aspect: f, angle: g, stampKind: r, scatter: I, latitudeCorrection: d };
}
function hy(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const r = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.flow) ?? 1))), s = Math.max(0, Math.min(1, Number(r.a ?? 1))) * a;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(r.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(r.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(r.b || 0))) * 255),
    a: s
  };
}
function py(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const r = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${a})`;
}
function xf(t, e, n, r, a) {
  const s = t.angle, u = t.desc.width;
  function f(y, _) {
    s === 0 ? t.ctx.drawImage(t.stampTex, y - a, _ - r, a * 2, r * 2) : (t.ctx.save(), t.ctx.translate(y, _), t.ctx.rotate(s), t.ctx.drawImage(t.stampTex, -a, -r, a * 2, r * 2), t.ctx.restore());
  }
  f(e, n);
  const g = s === 0 ? a : a * Math.abs(Math.cos(s)) + r * Math.abs(Math.sin(s));
  e - g < 0 && f(e + u, n), e + g > u && f(e - u, n);
}
function yl(t, e, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (t.scatter) {
    const { radius: y, count: _ } = t.scatter, d = y * t.radiusPx * a, M = Ei(e, n);
    for (let I = 0; I < _; I++) {
      const R = Gr(M + I * 2) * Math.PI * 2, D = Math.sqrt(Gr(M + I * 2 + 1)) * d, A = e + Math.cos(R) * D, F = n + Math.sin(R) * D, P = Math.max(0.5, t.radiusPx * a * 0.48), H = (0.5 - F / Math.max(1, t.desc.height)) * Math.PI, O = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(H)) : 1, B = P * t.aspect * O;
      xf(t, A, F, P, B);
    }
    return;
  }
  const s = Math.max(0.5, t.radiusPx * a), u = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, f = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, g = s * t.aspect * f;
  xf(t, e, n, s, g);
}
function Sf(t, e, n) {
  const r = ay(e);
  if (!t || r.length === 0) return;
  const a = n.width, s = n.height, u = bh(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const f = [];
  for (let M = 0; M < r.length; M++) {
    let I = Number(r[M].u || 0) * a;
    const R = Number(r[M].v || 0) * s;
    M > 0 && Math.abs(I - f[M - 1].x) > a * 0.5 && (I += I < f[M - 1].x ? a : -a), f.push({ x: I, y: R });
  }
  if (yl(u, f[0].x, f[0].y, 1), f.length === 1) {
    t.restore();
    return;
  }
  let g = f[0], y = f[0], _ = f[0], d = 0;
  for (let M = 1; M < f.length; M++) {
    const I = f[M], R = { x: (y.x + I.x) * 0.5, y: (y.y + I.y) * 0.5 };
    M === 1 ? d = Ra(u, _.x, _.y, R.x, R.y, d) : d = Bo(u, g, _, R, I, d), g = y, y = I, _ = R;
  }
  f.length === 2 ? Ra(u, _.x, _.y, y.x, y.y, d) : Bo(u, g, _, y, y, d), t.restore();
}
function To(t, e, n) {
  var d;
  const r = Array.isArray((d = e == null ? void 0 : e.geometry) == null ? void 0 : d.points) ? e.geometry.points : [];
  if (!t || r.length < 3) return;
  const a = n.width, s = n.height, u = py(e), f = [];
  let g = 1 / 0, y = -1 / 0;
  for (let M = 0; M < r.length; M++) {
    const I = iy(r[M]);
    let R = Number(I.x || 0) * a;
    M > 0 && Math.abs(R - f[M - 1].x) > a * 0.5 && (R += R < f[M - 1].x ? a : -a), f.push({ x: R, y: Number(I.y || 0) * s }), R < g && (g = R), R > y && (y = R);
  }
  function _(M) {
    t.beginPath(), t.moveTo(f[0].x + M, f[0].y);
    for (let I = 1; I < f.length; I++) t.lineTo(f[I].x + M, f[I].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = u, _(0), g < 0 && _(a), y > a && _(-a), t.restore();
}
function oo(t, e, n) {
  var u;
  if (String(((u = e == null ? void 0 : e.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    To(t, e, n);
    return;
  }
  const s = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  s >= 0.999 ? Sf(t, e, n) : (aa = Bn(aa, n.width, n.height), ue(aa), Sf(aa.ctx, e, n), t.save(), t.globalAlpha = s, t.drawImage(aa.canvas, 0, 0), t.restore());
}
function Mr(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function Ra(t, e, n, r, a, s) {
  const u = r - e, f = a - n, g = Math.hypot(u, f);
  if (g < 1e-9) return s;
  let y = t.spacingPx - s;
  for (; y <= g; ) {
    const _ = y / g;
    yl(t, e + u * _, n + f * _, 1), y += t.spacingPx;
  }
  return g - y + t.spacingPx;
}
function Bo(t, e, n, r, a, s) {
  const f = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, g = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, _ = 0, d = f, M = d + g, I = M + y, R = M - d, D = 16;
  let A = s, F = n.x, P = n.y;
  for (let H = 1; H <= D; H++) {
    const O = d + R * H / D, B = ((d - O) * e.x + (O - _) * n.x) / (d - _), C = ((d - O) * e.y + (O - _) * n.y) / (d - _), ct = ((M - O) * n.x + (O - d) * r.x) / (M - d), Q = ((M - O) * n.y + (O - d) * r.y) / (M - d), St = ((I - O) * r.x + (O - M) * a.x) / (I - M), z = ((I - O) * r.y + (O - M) * a.y) / (I - M), ut = ((M - O) * B + (O - _) * ct) / (M - _), Nt = ((M - O) * C + (O - _) * Q) / (M - _), Y = ((I - O) * ct + (O - d) * St) / (I - d), it = ((I - O) * Q + (O - d) * z) / (I - d), Z = ((M - O) * ut + (O - d) * Y) / (M - d), ft = ((M - O) * Nt + (O - d) * it) / (M - d);
    A = Ra(t, F, P, Z, ft, A), F = Z, P = ft;
  }
  return A;
}
function gy(t, e, n, r) {
  const a = t.currentStroke.ctx;
  if (!a) return;
  const s = t.descriptor, u = s.width, f = n * s.height, g = t.activeStroke;
  let y = e * u;
  if (g && Math.abs(y - g.prev.x) > u * 0.5 && (y += y < g.prev.x ? u : -u), !g) {
    const I = bh(a, r, s), R = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), D = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), A = String((r == null ? void 0 : r.toolKind) || "") === "eraser", F = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", yl(I, y, f, 1), t.activeStroke = {
      pprev: { x: y, y: f },
      prev: { x: y, y: f },
      lastMidX: y,
      lastMidY: f,
      stampTex: I.stampTex,
      radiusPx: I.radiusPx,
      spacingPx: I.spacingPx,
      aspect: I.aspect,
      angle: I.angle,
      stampKind: I.stampKind,
      scatter: I.scatter,
      latitudeCorrection: I.latitudeCorrection,
      strokeOpacity: R,
      velocityWidthFactor: D,
      distSinceStamp: 0,
      isEraser: A,
      layerKind: F,
      pointCount: 1
    }, t.displayDirty = !0;
    return;
  }
  const _ = (g.prev.x + y) * 0.5, d = (g.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const M = {
    ctx: a,
    stampTex: g.stampTex,
    radiusPx: g.radiusPx,
    spacingPx: g.spacingPx,
    desc: s,
    aspect: g.aspect,
    angle: g.angle,
    stampKind: g.stampKind,
    scatter: g.scatter,
    latitudeCorrection: g.latitudeCorrection
  };
  g.pointCount === 1 ? g.distSinceStamp = Ra(M, g.lastMidX, g.lastMidY, _, d, g.distSinceStamp) : g.distSinceStamp = Bo(
    M,
    g.pprev,
    { x: g.lastMidX, y: g.lastMidY },
    { x: _, y: d },
    { x: y, y: f },
    g.distSinceStamp
  ), g.pprev = g.prev, g.prev = { x: y, y: f }, g.lastMidX = _, g.lastMidY = d, g.pointCount++, t.displayDirty = !0;
}
function Oc(t = {}) {
  const e = Math.max(1, Math.round(Number((t == null ? void 0 : t.width) || 2048))), n = Math.max(1, Math.round(Number((t == null ? void 0 : t.height) || 1024))), r = { kind: "ERP_GLOBAL", width: e, height: n }, a = /* @__PURE__ */ new Map(), s = _i(e, n), u = {
    descriptor: r,
    committedMask: _i(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: _i(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, g = _i(e, n);
  let y = null, _ = "", d = null;
  function M(z) {
    return {
      actionGroupId: z,
      descriptor: r,
      committedPaint: _i(e, n),
      currentStroke: s,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function I(z) {
    let ut = a.get(z);
    return ut || (ut = M(z), a.set(z, ut)), ut;
  }
  function R(z) {
    return _ === "mask" ? u : y ? I(y) : f;
  }
  function D(z) {
    var yt;
    const ut = !d || d.length !== z.length || z.some((Mt, Et) => Mt !== d[Et]);
    let Nt = u.displayDirty || f.displayDirty || ut;
    for (const Mt of z) {
      const Et = a.get(Mt);
      if (Et != null && Et.displayDirty) {
        Nt = !0;
        break;
      }
    }
    if (!Nt) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const Mt of z) {
      const Et = a.get(Mt);
      Et && (Et.displayDirty = !1);
    }
    d = [...z];
    const Y = g.ctx;
    ue(g);
    const it = _ === "paint" && ((yt = y ? a.get(y) : f) == null ? void 0 : yt.activeStroke) || null, Z = !!(it != null && it.isEraser);
    for (const Mt of z) {
      const Et = a.get(Mt);
      if (!Et) continue;
      const vt = y === Et.actionGroupId && _ === "paint" ? Et.activeStroke : null;
      if (Z)
        Qt = Bn(Qt, e, n), ue(Qt), Qt.ctx.drawImage(Et.committedPaint.canvas, 0, 0), Mr(Qt.ctx, s.canvas), Y.drawImage(Qt.canvas, 0, 0);
      else if (Y.drawImage(Et.committedPaint.canvas, 0, 0), vt) {
        const Ct = Et.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, vt.strokeOpacity ?? 1));
        Y.save(), Y.globalAlpha = Ct, Y.drawImage(s.canvas, 0, 0), Y.restore();
      }
    }
    const ft = _ === "mask", ot = u.activeStroke;
    ft && (ot != null && ot.isEraser) ? (Qt = Bn(Qt, e, n), ue(Qt), Qt.ctx.drawImage(u.committedMask.canvas, 0, 0), Mr(Qt.ctx, s.canvas), pi(Y, Qt.canvas)) : (pi(Y, u.committedMask.canvas), ft && ot && pi(Y, s.canvas));
  }
  function A(z) {
    var Nt, Y, it, Z, ft;
    for (const ot of a.values())
      ue(ot.committedPaint), ue(ot.currentStroke), ot.activeStroke = null, ot.displayDirty = !0;
    ue(u.committedMask), ue(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, d = null;
    const ut = [
      ...Array.isArray((Y = (Nt = z == null ? void 0 : z.painting) == null ? void 0 : Nt.paint) == null ? void 0 : Y.strokes) ? z.painting.paint.strokes : [],
      ...Array.isArray((Z = (it = z == null ? void 0 : z.painting) == null ? void 0 : it.mask) == null ? void 0 : Z.strokes) ? z.painting.mask.strokes : []
    ];
    for (const ot of ut) {
      if (((ft = ot == null ? void 0 : ot.targetSpace) == null ? void 0 : ft.kind) !== "ERP_GLOBAL") continue;
      const yt = String((ot == null ? void 0 : ot.layerKind) || "paint"), Et = String((ot == null ? void 0 : ot.toolKind) || "pen") === "eraser";
      if (yt === "mask") {
        const et = u.descriptor;
        Et ? (Qt = Bn(Qt, et.width, et.height), ue(Qt), oo(Qt.ctx, ot, et), Mr(u.committedMask.ctx, Qt.canvas)) : oo(u.committedMask.ctx, ot, et);
        continue;
      }
      if (Et) {
        Qt = Bn(Qt, r.width, r.height), ue(Qt), oo(Qt.ctx, ot, r);
        for (const et of a.values())
          Mr(et.committedPaint.ctx, Qt.canvas), et.displayDirty = !0;
      } else {
        const et = String((ot == null ? void 0 : ot.actionGroupId) || "__default__"), vt = I(et), Ct = vt.descriptor;
        oo(vt.committedPaint.ctx, ot, Ct), vt.displayDirty = !0;
      }
    }
    D([...a.keys()]);
  }
  function F(z, ut) {
    _ = String((z == null ? void 0 : z.layerKind) || "");
    const Nt = String((z == null ? void 0 : z.toolKind) || "") === "eraser";
    if (_ === "mask")
      y = null, ue(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const Y = Nt ? f : I(String((z == null ? void 0 : z.actionGroupId) || "__default__"));
      y = Nt ? "" : String((z == null ? void 0 : z.actionGroupId) || "__default__"), ue(Y.currentStroke), Y.activeStroke = null, Y.displayDirty = !0;
    }
  }
  function P(z, ut) {
    var yt;
    const Nt = String((z == null ? void 0 : z.layerKind) || "paint"), Y = String((z == null ? void 0 : z.toolKind) || "") === "eraser", it = Nt === "mask" ? u : Y ? f : I(String((z == null ? void 0 : z.actionGroupId) || y || "__default__")), Z = it.activeStroke, ft = it.descriptor;
    if (Z && Z.pointCount > 1) {
      const Mt = it.currentStroke.ctx;
      Mt.globalCompositeOperation = "source-over";
      const Et = {
        ctx: Mt,
        stampTex: Z.stampTex,
        radiusPx: Z.radiusPx,
        spacingPx: Z.spacingPx,
        desc: ft,
        aspect: Z.aspect,
        angle: Z.angle,
        stampKind: Z.stampKind,
        scatter: Z.scatter,
        latitudeCorrection: Z.latitudeCorrection
      };
      Z.pointCount === 2 ? Ra(Et, Z.lastMidX, Z.lastMidY, Z.prev.x, Z.prev.y, Z.distSinceStamp) : Bo(Et, Z.pprev, { x: Z.lastMidX, y: Z.lastMidY }, Z.prev, Z.prev, Z.distSinceStamp);
    }
    it.lassoPreviewActive && (ue(it.currentStroke), To(it.currentStroke.ctx, z, ft), it.lassoPreviewActive = !1);
    const ot = Nt === "mask" ? u.committedMask : it.committedPaint;
    if (Y && Nt === "paint")
      for (const Mt of a.values())
        Mr(Mt.committedPaint.ctx, it.currentStroke.canvas), Mt.displayDirty = !0;
    else if (Y)
      Mr(ot.ctx, it.currentStroke.canvas);
    else {
      const Mt = Math.max(0, Math.min(1, (Z == null ? void 0 : Z.strokeOpacity) ?? 1));
      ot.ctx.save(), ot.ctx.globalAlpha = Mt, ot.ctx.drawImage(it.currentStroke.canvas, 0, 0), ot.ctx.restore();
    }
    vh() && ny("commit-bounds", {
      layerKind: Nt,
      toolKind: String((z == null ? void 0 : z.toolKind) || ""),
      targetKind: String((ft == null ? void 0 : ft.kind) || ""),
      targetWidth: Number((ft == null ? void 0 : ft.width) || 0),
      targetHeight: Number((ft == null ? void 0 : ft.height) || 0),
      targetViewMode: String(((yt = z == null ? void 0 : z.targetSpace) == null ? void 0 : yt.viewMode) || ""),
      strokeAspect: Number((z == null ? void 0 : z.aspect) ?? 1),
      activeBounds: bf(it.currentStroke.canvas),
      surfaceBounds: bf(ot.canvas)
    }), ue(it.currentStroke), it.activeStroke = null, it.displayDirty = !0, y = null, _ = "", D([...a.keys()]);
  }
  function H(z) {
    if (_ === "mask")
      ue(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (_ === "paint" && !y)
      ue(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const ut = a.get(y);
      ut && (ue(ut.currentStroke), ut.activeStroke = null, ut.lassoPreviewActive = !1, ut.displayDirty = !0);
    }
    y = null, _ = "", D([...a.keys()]);
  }
  function O(z, ut) {
    var Y;
    if (_ = String((z == null ? void 0 : z.layerKind) || ""), String(((Y = z == null ? void 0 : z.geometry) == null ? void 0 : Y.geometryKind) || "") === "lasso_fill") {
      if (_ === "mask")
        ue(u.currentStroke), To(u.currentStroke.ctx, z, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const it = String((z == null ? void 0 : z.toolKind) || "") === "eraser", Z = it ? f : I(String((z == null ? void 0 : z.actionGroupId) || y || "__default__"));
        y = it ? "" : String((z == null ? void 0 : z.actionGroupId) || y || "__default__"), ue(Z.currentStroke), To(Z.currentStroke.ctx, z, Z.descriptor), Z.lassoPreviewActive = !0, Z.displayDirty = !0;
      }
      D([...a.keys()]);
    }
  }
  function B(z) {
    return D(z ?? [...a.keys()]), {
      displayPaint: g,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function C(z) {
    return a.get(String(z)) ?? null;
  }
  function ct() {
    return [...a.keys()];
  }
  function Q(z) {
    var ft;
    const ut = a.get(String(z));
    if (!ut) return null;
    const Nt = _ === "paint" && y === ut.actionGroupId, Y = _ === "paint" && ((ft = y ? a.get(y) : f) == null ? void 0 : ft.activeStroke) || null;
    if (Y != null && Y.isEraser)
      return Je = Bn(Je, e, n), ue(Je), Je.ctx.drawImage(ut.committedPaint.canvas, 0, 0), Mr(Je.ctx, s.canvas), Je.canvas;
    const it = Nt ? ut.activeStroke : null;
    if (!it) return ut.committedPaint.canvas;
    Je = Bn(Je, e, n), ue(Je), Je.ctx.drawImage(ut.committedPaint.canvas, 0, 0);
    const Z = ut.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, it.strokeOpacity ?? 1));
    return Je.ctx.save(), Je.ctx.globalAlpha = Z, Je.ctx.drawImage(s.canvas, 0, 0), Je.ctx.restore(), Je.canvas;
  }
  function St() {
    return Nr = Bn(Nr, e, n), ue(Nr), pi(Nr.ctx, u.committedMask.canvas), _ === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Qt = Bn(Qt, e, n), ue(Qt), Qt.ctx.drawImage(u.committedMask.canvas, 0, 0), Mr(Qt.ctx, s.canvas), ue(Nr), pi(Nr.ctx, Qt.canvas)) : pi(Nr.ctx, s.canvas)), Nr.canvas;
  }
  return {
    rebuildCommitted: A,
    beginStroke: F,
    appendStrokePoint: gy,
    updateActiveStroke: O,
    commitActiveStroke: P,
    cancelActiveStroke: H,
    getErpTarget: B,
    ensureTarget: R,
    getGroupTarget: C,
    getGroupDisplayCanvas: Q,
    getMaskDisplayCanvas: St,
    getAllGroupIds: ct
  };
}
function U(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function mc(t, e, n) {
  const r = Number(t);
  return Number.isFinite(r) ? Math.max(Number(e), Math.min(Number(n), r)) : Number(e);
}
function Oe(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function my(t, e) {
  let n = Oe(e) - Oe(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Nf = Math.PI / 180, Mf = 0.12, yy = 3, vy = 35, by = 140, ha = 100, _y = 20, kf = 0.8;
function wy(t, e, n) {
  const r = Math.max(1, Number(e || 1)), a = Math.max(1, Number(n || 1)), s = U(Number(t || ha), 1, 179) * Nf;
  return 2 * Math.atan(Math.tan(s * 0.5) * (a / r)) / Nf;
}
function xy(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function ms(t = {}) {
  const e = typeof t.getView == "function" ? t.getView : (() => ({ yaw: 0, pitch: 0, fov: ha })), n = typeof t.setView == "function" ? t.setView : (() => {
  }), r = typeof t.getInvert == "function" ? t.getInvert : (() => ({ x: 1, y: 1 })), a = typeof t.getUnwrapRect == "function" ? t.getUnwrapRect : (() => ({ w: 1, h: 1 })), s = typeof t.getViewportSize == "function" ? t.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof t.onInteraction == "function" ? t.onInteraction : (() => {
  }), f = typeof t.onDebug == "function" ? t.onDebug : null, g = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(F, P = null) {
    f && f(F, P);
  }
  function _(F, P, H = null, O = performance.now()) {
    return g.drag.active = !0, g.drag.lastX = Number(F || 0), g.drag.lastY = Number(P || 0), g.drag.lastTs = Number(O || performance.now()), g.drag.pointerId = H, g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.lastTs = g.drag.lastTs, g.velHistory = [], y("drag", { phase: "start", x: g.drag.lastX, y: g.drag.lastY, pointerId: H }), !0;
  }
  function d(F, P, H = "pano", O = performance.now()) {
    if (!g.drag.active) return !1;
    const B = Number(O || performance.now()), C = Number(F), ct = Number(P), Q = C - g.drag.lastX, St = ct - g.drag.lastY;
    g.drag.lastX = C, g.drag.lastY = ct, g.drag.lastTs = B;
    const z = r() || { x: 1, y: 1 }, ut = Number(z.x || 1), Nt = Number(z.y || 1), Y = { ...e() };
    let it = 0, Z = 0;
    if (H === "unwrap") {
      const ot = a() || { w: 1, h: 1 }, yt = Math.max(1, Number(ot.w || 1)), Mt = Math.max(1, Number(ot.h || 1)), Et = Q / yt, et = St / Mt;
      it = -Et * 360 * ut, Z = et * 180 * Nt;
    } else {
      const ot = s() || { w: 0, h: 0 }, yt = Math.max(1, Number(ot.w || 0)), Mt = Math.max(1, Number(ot.h || 0));
      if (yt > 1 && Mt > 1) {
        const Et = U(Number(Y.fov || ha), 1, 179), et = U(wy(Et, yt, Mt), 0.1, 179);
        it = -(Q / yt) * Et * ut, Z = St / Mt * et * Nt;
      } else
        it = -Q * Mf * ut, Z = St * Mf * Nt;
    }
    Y.yaw = Oe(Number(Y.yaw || 0) + it), Y.pitch = U(Number(Y.pitch || 0) + Z, -89.9, 89.9), n(Y), g.velHistory.push({ ts: B, yaw: Y.yaw, pitch: Y.pitch });
    let ft = 0;
    for (; ft < g.velHistory.length - 1 && g.velHistory[ft].ts < B - 100; ) ft++;
    return ft > 0 && g.velHistory.splice(0, ft), g.inertia.active = !1, g.inertia.lastTs = B, u(), y("drag", { phase: "move", dx: Q, dy: St, dYaw: it, dPitch: Z }), !0;
  }
  function M(F = performance.now()) {
    if (!g.drag.active) return !1;
    g.drag.active = !1;
    const P = Number(F || performance.now());
    g.drag.lastTs = P;
    const H = g.velHistory.filter((B) => P - B.ts <= 80);
    if (H.length >= 2) {
      const B = H[0], C = H.at(-1), ct = Math.max(1e-3, (C.ts - B.ts) / 1e3);
      let Q = C.yaw - B.yaw;
      Q > 180 && (Q -= 360), Q < -180 && (Q += 360), g.inertia.vx = Q / ct, g.inertia.vy = (C.pitch - B.pitch) / ct;
    } else
      g.inertia.vx = 0, g.inertia.vy = 0;
    g.velHistory = [];
    const O = Math.hypot(g.inertia.vx, g.inertia.vy);
    return g.inertia.active = O > _y, g.inertia.lastTs = P, y("drag", { phase: "end", speed: O, inertiaActive: g.inertia.active }), !0;
  }
  function I(F = performance.now()) {
    if (!g.inertia.active) return !1;
    const P = Number(F || performance.now()), H = Math.max(1e-3, (P - (g.inertia.lastTs || P)) / 1e3);
    g.inertia.lastTs = P;
    const O = { ...e() };
    O.yaw = Oe(Number(O.yaw || 0) + g.inertia.vx * H), O.pitch = U(Number(O.pitch || 0) + g.inertia.vy * H, -89.9, 89.9);
    const B = Math.exp(-5.5 * H);
    return g.inertia.vx *= B, g.inertia.vy *= B, Math.abs(g.inertia.vx) < kf && Math.abs(g.inertia.vy) < kf && (g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.active = !1), n(O), u(), g.inertia.active;
  }
  function R(F) {
    const P = Math.sign(Number(F || 0));
    if (!P) return !1;
    const H = { ...e() }, O = Number(H.fov || ha);
    return H.fov = U(O + P * yy, vy, by), n(H), u(), y("wheel", { deltaSign: P, fovBefore: O, fovAfter: H.fov }), !0;
  }
  function D(F) {
    return R(Math.sign(xy(F)));
  }
  function A() {
    n({ yaw: 0, pitch: 0, fov: ha }), g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, u();
  }
  return {
    state: g,
    startDrag: _,
    moveDrag: d,
    endDrag: M,
    stepInertia: I,
    applyWheel: R,
    applyWheelEvent: D,
    resetView: A
  };
}
function Fc(t) {
  const e = String(t || "").trim();
  return e ? e === "PanoramaPreview" || e === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(e) : !1;
}
const Pf = Math.PI / 180;
function oa(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) ? n : Number(e);
}
function Sy(t) {
  const e = t || {}, n = oa(e.yaw_deg, 0), r = oa(e.pitch_deg, 0), a = oa(e.roll_deg ?? e.rot_deg, 0), s = mc(oa(e.hFOV_deg, 90), 1, 179), u = mc(oa(e.vFOV_deg, 60), 1, 179), f = Math.tan(s * Pf * 0.5) / Math.max(1e-6, Math.tan(u * Pf * 0.5)), g = mc(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: a,
    hfov: s,
    vfov: u,
    aspect: g
  };
}
const _h = 0.28;
function Ny(t) {
  const e = t && typeof t == "object" ? t : {}, n = U(Number(e.x0 ?? 0), 0, 1), r = U(Number(e.y0 ?? 0), 0, 1), a = U(Number(e.x1 ?? 1), 0, 1), s = U(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(r, s),
    x1: Math.max(n, a),
    y1: Math.max(r, s)
  };
}
function My(t, e = {}) {
  if (!t || typeof t != "object") return null;
  const n = String(t.asset_id || t.assetId || "").trim(), r = t.type === "external_image" || t.source_kind === "external_image", a = n || (r ? String(t.id || "").trim() : ""), s = e.includeHidden === !0, u = t.visible === !1, f = s && r && u;
  return {
    id: String(t.id || ""),
    assetId: a,
    zIndex: Number(t.z_index || t.zIndex || 0),
    yawDeg: Number(t.yaw_deg || t.yawDeg || 0),
    pitchDeg: Number(t.pitch_deg || t.pitchDeg || 0),
    rollDeg: Number(t.rot_deg ?? t.roll_deg ?? t.rollDeg ?? 0),
    hFovDeg: U(Number(t.hFOV_deg || t.hFovDeg || 30), 1, 179),
    vFovDeg: U(Number(t.vFOV_deg || t.vFovDeg || 30), 1, 179),
    crop: Ny(t.crop),
    opacity: f ? _h : U(Number(t.opacity ?? 1), 0, 1),
    visible: f ? !0 : t.visible !== !1,
    external: r
  };
}
function ys(t, e = {}) {
  var s;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], r = e.includeHidden === !0;
  return {
    stickers: n.map((u) => My(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: e.selectedId ?? ((s = t == null ? void 0 : t.active) == null ? void 0 : s.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function wh(t, e, n = {}) {
  if (typeof e != "function") return [];
  const r = n.scene || ys(t, n), a = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, s = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var R;
    const g = String((f == null ? void 0 : f.assetId) || "").trim(), y = g || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const _ = g ? a[g] : null, d = e(y, _, f);
    if (d instanceof HTMLImageElement && !d.complete) return;
    const M = Number((d == null ? void 0 : d.naturalWidth) || (d == null ? void 0 : d.videoWidth) || (d == null ? void 0 : d.width) || 0), I = Number((d == null ? void 0 : d.naturalHeight) || (d == null ? void 0 : d.videoHeight) || (d == null ? void 0 : d.height) || 0);
    !d || M <= 0 || I <= 0 || (u.add(y), s.push({
      assetId: y,
      source: d,
      revision: String(((R = n.revisionFor) == null ? void 0 : R.call(n, y, _, d)) ?? [
        y,
        Number(d.naturalWidth || d.videoWidth || d.width || 0),
        Number(d.naturalHeight || d.videoHeight || d.height || 0),
        String(d.currentSrc || d.src || "")
      ].join("|"))
    }));
  }), s;
}
function vl(t, e = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((t == null ? void 0 : t.yaw) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch) || 0),
    fovDeg: U(Number((t == null ? void 0 : t.fov) || 100), 1, 179),
    coverageDeg: Number(e || 360) === 180 ? 180 : 360
  };
}
function ky(t, e = 360) {
  return vl(t, e);
}
function wi(t) {
  const e = Sy(t || {});
  return {
    mode: "cutout",
    yawDeg: Number((t == null ? void 0 : t.yaw_deg) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch_deg) || 0),
    rollDeg: Number((e == null ? void 0 : e.roll) ?? (t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0),
    hFovDeg: U(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179),
    vFovDeg: U(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1)
  };
}
const { app: fe } = So;
function Vc() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (So == null ? void 0 : So.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Kr = Math.PI / 180, Go = {}, Py = { Nu: 24, Nv: 14 }, Ay = 10, Cy = 120;
function xh() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Wt(t, e, n = null) {
  if (!xh()) return;
  const r = (t == null ? void 0 : t.id) ?? "?";
  if (n == null) {
    console.info(`[PANO_PREVIEW][${e}] node=${r}`);
    return;
  }
  console.info(`[PANO_PREVIEW][${e}] node=${r}`, n);
}
function sa(t) {
  var n, r, a, s, u;
  if (!t) return null;
  const e = (n = t.getBoundingClientRect) == null ? void 0 : n.call(t);
  return {
    tag: String(t.tagName || "").toLowerCase(),
    className: String(t.className || ""),
    clientW: Number(t.clientWidth || 0),
    clientH: Number(t.clientHeight || 0),
    offsetW: Number(t.offsetWidth || 0),
    offsetH: Number(t.offsetHeight || 0),
    rectW: Number((e == null ? void 0 : e.width) || 0),
    rectH: Number((e == null ? void 0 : e.height) || 0),
    styleHeight: String(((r = t.style) == null ? void 0 : r.height) || ""),
    styleWidth: String(((a = t.style) == null ? void 0 : a.width) || ""),
    stylePos: String(((s = t.style) == null ? void 0 : s.position) || ""),
    styleTransform: String(((u = t.style) == null ? void 0 : u.transform) || "")
  };
}
function Iy() {
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
function Er(t) {
  const e = t == null ? void 0 : t.size;
  if (e == null) return null;
  const n = (r, a) => {
    const s = Number(r), u = Number(a);
    return !Number.isFinite(s) || !Number.isFinite(u) ? null : [s, u];
  };
  if (typeof e == "object" || typeof e == "function") {
    if (e[0] !== void 0 || e[1] !== void 0) {
      const r = n(e[0], e[1]);
      if (r) return r;
    }
    if (e.width !== void 0 || e.height !== void 0) {
      const r = n(e.width, e.height);
      if (r) return r;
    }
    if (e.w !== void 0 || e.h !== void 0) {
      const r = n(e.w, e.h);
      if (r) return r;
    }
  }
  return null;
}
function Ey(t) {
  const e = Er(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function Sh(t, e, n) {
  Ey(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function Hc(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function Nh(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function Ty(t) {
  return Fc(Nh(t));
}
function Wr(t = null) {
  var s, u;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (s = fe == null ? void 0 : fe.canvas) == null ? void 0 : s.constructor) == null ? void 0 : u.name) || "");
  return [e, r, n, a].join("|");
}
function Mh(t, e = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Wr(e)
  } : String(t) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Wr(e)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Wr(e)
  };
}
const Sa = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(t) {
    !t || String(t.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(t), this.lastSignature || (this.lastSignature = Wr(t)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(t) {
    t && this.nodes.delete(t), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const t = this.nodes.values().next().value || null, e = Wr(t);
    e !== this.lastSignature && (this.lastSignature = e, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((r) => {
        if (!(!r || String(r.__panoPreviewMode || "") !== "stickers"))
          try {
            r.__panoRebindGeneration = this.generation, Wt(r, "path.switch", {
              from: String(r.__panoStickersPath || "unknown"),
              to: "rebind",
              reason: "frontend_signature_changed",
              signature: e,
              generation: this.generation
            }), kh(r).rebind(r.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            Wt(r, "path.switch.error", { message: String((a == null ? void 0 : a.message) || a || "unknown") });
          }
      });
    }, 300));
  }
};
function kh(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = r === "cutout" ? "dom" : Mh(r, t).chosenPath, s = Hc(t);
      this.activeBackend = s;
      const u = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = t.__panoPreviewNoPreview === !0, g = n.noPreview === !0;
      if (s === a && s !== "none" && u === r && f === g) {
        t.__panoAttachOptions = { ...n, mode: r }, t.__panoPreviewMode = r, t.__panoPreviewNoPreview = g, t.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      s !== "none" && Ti(t, { keepMonitor: r === "stickers" }), bv(t, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = Hc(t);
    },
    rebind(n = {}) {
      const r = String(n.mode || (t == null ? void 0 : t.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Ti(t, { keepMonitor: r === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Ti(t), this.activeBackend = "none";
    }
  };
  return t.__panoPreviewController = e, e;
}
function Dy(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function Ti(t, e = {}) {
  var f, g, y, _, d;
  if (!t) return;
  Ko.unregister(t), Dy(t);
  const n = !!t.__panoDomPreview, r = !!t.__panoLegacyPreviewHooked, a = typeof t.__panoDomRestore == "function", s = typeof t.__panoLegacyRestore == "function";
  try {
    (f = t.__panoDomRestore) == null || f.call(t);
  } catch {
  }
  t.__panoDomRestore = null;
  try {
    (g = t.__panoLegacyRestore) == null || g.call(t);
  } catch {
  }
  t.__panoLegacyRestore = null;
  const u = t.__panoDomPreview;
  if (u) {
    try {
      (y = u.state) != null && y.raf && cancelAnimationFrame(u.state.raf);
    } catch {
    }
    try {
      (d = (_ = u.root) == null ? void 0 : _.remove) == null || d.call(_);
    } catch {
    }
  }
  try {
    Array.isArray(t.widgets) && (t.widgets = t.widgets.filter((M) => {
      if (M === (u == null ? void 0 : u.widget)) return !1;
      const I = String((M == null ? void 0 : M.name) || ""), R = String((M == null ? void 0 : M.type) || ""), D = Vc();
      return !(I === D || R === D || I === "pano_preview" || R === "pano_preview" || I === "preview" && R === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", Wt(t, "teardown.done", {
    reason: String(e.reason || ""),
    removedDom: n || a,
    removedLegacy: r || s,
    keepMonitor: !!e.keepMonitor
  }), e.keepMonitor || Sa.unregister(t);
}
function qr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Af(t, e) {
  return qr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function so(t, e) {
  return qr(t.x * e, t.y * e, t.z * e);
}
function yc(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Cf(t, e) {
  return qr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function co(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return qr(t.x / e, t.y / e, t.z / e);
}
function Hr(t, e) {
  const n = t * Kr, r = e * Kr, a = Math.cos(r);
  return qr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function bl(t, e, n = 0) {
  const r = Hr(t, e), a = qr(0, 1, 0);
  let s = Cf(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = qr(1, 0, 0)), s = co(s);
  let u = co(Cf(r, s));
  const f = n * Kr, g = Math.cos(f), y = Math.sin(f), _ = Af(so(s, g), so(u, y)), d = Af(so(s, -y), so(u, g));
  return { fwd: r, right: co(_), up: co(d) };
}
function Ry(t, e = "#00ff00") {
  const n = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: 360,
    bg_color: e,
    output_preset: 2048,
    assets: {},
    stickers: [],
    shots: [],
    active: { selected_sticker_id: null }
  };
  let r = null;
  if (t && typeof t == "object")
    r = t;
  else if (typeof t == "string") {
    const a = t.trim();
    if (!a) return n;
    try {
      r = JSON.parse(a);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const a = r;
    return !a || typeof a != "object" || Array.isArray(a) ? n : {
      ...n,
      ...a,
      coverage: Number(a.coverage) === 180 ? 180 : 360,
      assets: a.assets && typeof a.assets == "object" ? a.assets : {},
      stickers: Array.isArray(a.stickers) ? a.stickers : [],
      shots: Array.isArray(a.shots) ? a.shots : [],
      active: a.active && typeof a.active == "object" ? a.active : n.active
    };
  } catch {
    return n;
  }
}
function Ly(t) {
  var n;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = La(t, "state_json")) == null ? void 0 : n.value) || "");
}
function _l(t) {
  var u, f;
  const e = Ly(t), n = String(((u = La(t, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), r = Number(((f = La(t, "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, a = t.__panoStateCache;
  if (a && a.source === e && a.bg === n && a.coverage === r)
    return a.parsed;
  const s = Ry(e, n);
  return s.coverage = r, t.__panoStateCache = { source: e, bg: n, coverage: r, parsed: s }, s;
}
function La(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function If(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function Ph(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Oy(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Ah(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Ch(t, e, n = null) {
  var a, s;
  let r = null;
  try {
    r = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const u = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, f = u ? (s = r.resolveSubgraphOutputLink) == null ? void 0 : s.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = Oy(t == null ? void 0 : t.graph, n)), r;
}
function Fy(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function wl(t, e = []) {
  const n = Fy(t), r = [];
  return e.forEach((a) => {
    n.includes(String(a)) && r.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !r.includes(a) && r.push(a);
  }), r.length ? r : e;
}
function Ef(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: e, tail: n.length ? n[n.length - 1] : e };
}
function Wo(t, e) {
  const n = Ef(t), r = Ef(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Vy(t, e = ["erp_image", "bg_erp"]) {
  var g;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return [];
  const a = wl(t, e).map((y) => n.findIndex((_) => String((_ == null ? void 0 : _.name) || "") === String(y))).filter((y) => y >= 0), s = n.map((y, _) => ({ input: y, idx: _ })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...a, ...s])], f = [];
  for (const y of u) {
    const _ = Ch(t, y);
    if ((_ == null ? void 0 : _.id) != null) {
      f.push(String(_.id));
      continue;
    }
    const d = (g = n[y]) == null ? void 0 : g.link;
    if (d == null) continue;
    const M = Ph(t == null ? void 0 : t.graph, d), { originId: I } = Ah(M);
    I != null && f.push(String(I));
  }
  return [...new Set(f)];
}
const Ko = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = en) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((s) => {
        var _, d, M, I, R;
        if (!s) return;
        const u = Wo(r, s == null ? void 0 : s.id), g = Vy(s, ["erp_image", "bg_erp"]).some((D) => Wo(r, D)), y = u ? "self" : g ? "upstream" : "global_executed";
        Wt(s, "exec-refresh", { executedId: r, reason: y }), zc(s), Wt(s, "invalidate", { cachesCleared: !0 }), (d = (_ = s.__panoDomPreview) == null ? void 0 : _.requestDraw) == null || d.call(_), (M = s.setDirtyCanvas) == null || M.call(s, !0, !0), (R = (I = s.graph) == null ? void 0 : I.setDirtyCanvas) == null || R.call(I, !0, !0), Wt(s, "draw-request", {
          route: String(s.__panoPreviewMode || ""),
          mode: String(s.__panoPreviewMode || ""),
          reason: y
        });
      });
    }, en.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var t;
    !this.bound || !this.listener || !((t = en) != null && t.removeEventListener) || (en.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(t) {
    t && (this.nodes.add(t), this.ensureBound());
  },
  unregister(t) {
    t && this.nodes.delete(t), this.nodes.size || this.ensureUnbound();
  }
};
function qo(t) {
  var s;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e);
  const r = String(
    t.storage || (String(t.type || "").trim().toLowerCase() === "comfy_image" ? "output" : t.type) || "output"
  );
  n.set("type", r), t.subfolder && n.set("subfolder", String(t.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((s = en) == null ? void 0 : s.apiURL) == "function" ? en.apiURL(a) : a;
}
function Hy(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function $y(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function zy(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function Ih(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Hy(e)) return [e];
  const { filename: n, subfolder: r } = $y(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => qo({
    filename: n,
    subfolder: r,
    type: s
  }));
  return zy([...a, e]);
}
function jy(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? qo({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function $c(t) {
  const e = fe == null ? void 0 : fe.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  const a = n;
  if (e instanceof Map) {
    for (const s of e.keys())
      if (Wo(s, a)) return e.get(s);
  } else {
    const s = Object.keys(e);
    for (const u of s)
      if (Wo(u, a)) return e[u];
  }
  return null;
}
function qn(t) {
  if (!t) return "";
  if (typeof t == "string")
    return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return qn(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return qo({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = qn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : qo(t);
}
function Eh(t, e) {
  var r;
  const n = String(t || "").trim();
  if (!n) return "";
  try {
    const a = typeof window < "u" && ((r = window == null ? void 0 : window.location) != null && r.href) ? window.location.href : "http://127.0.0.1/", s = new URL(n, a);
    return e > 0 && s.searchParams.set("pano_rev", String(e)), s.toString();
  } catch {
    const a = n.includes("?") ? "&" : "?";
    return e > 0 ? `${n}${a}pano_rev=${e}` : n;
  }
}
function Uy(t) {
  const e = [], n = /* @__PURE__ */ new Set(), r = (s) => {
    Array.isArray(s) && s.forEach((u) => e.push(u));
  }, a = (s, u = 0) => {
    !s || u > 3 || n.has(s) || typeof s == "object" && (n.add(s), r(s.images), a(s.output, u + 1), a(s.ui, u + 1), a(s.data, u + 1), a(s.result, u + 1));
  };
  return a(t, 0), e;
}
function By(t, e) {
  try {
    const n = Uy(e);
    let r = "";
    for (const a of n)
      if (r = qn(a), r) break;
    r ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(r || ""), Wt(t, "cutout.output-sync", {
      hasOutputImage: !0,
      src: Eh(t.__panoOwnOutputSrc, t.__panoOwnOutputRev),
      rev: t.__panoOwnOutputRev
    })) : Wt(t, "cutout.output-sync", { hasOutputImage: !1, keys: Object.keys(e || {}) });
  } catch {
    Wt(t, "cutout.output-sync", { hasOutputImage: !1 });
  }
}
function Gy(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const r = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), a = $c(n), s = Array.isArray(a == null ? void 0 : a.images) ? a.images : [], u = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], f = r ? [r, ...s, ...u] : [...s, ...u];
  let g = "";
  for (const F of f)
    if (g = qn(F), g) break;
  if (!g) return null;
  const y = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), d = Ih(g).map((F) => Eh(F, y));
  if (!d.length) return null;
  const M = `${g}|rev:${y}`;
  t.__panoOwnOutputImageCache || (t.__panoOwnOutputImageCache = {
    src: "",
    img: null,
    pendingSrc: "",
    pendingImg: null
  });
  const I = t.__panoOwnOutputImageCache;
  if (I.img && I.src === M) return I.img;
  if (I.pendingImg && I.pendingSrc === M)
    return I.img && (I.img.complete || I.img.naturalWidth || I.img.width) ? I.img : I.pendingImg;
  const R = new Image();
  let D = -1;
  const A = () => {
    if (D += 1, D >= d.length) {
      t.__panoOwnOutputImageCache === I && (I.pendingSrc = "", I.pendingImg = null);
      return;
    }
    R.src = d[D];
  };
  return R.onload = () => {
    var F;
    t.__panoOwnOutputImageCache === I && I.pendingImg === R && I.pendingSrc === M && (I.src = M, I.img = R, I.pendingSrc = "", I.pendingImg = null), e == null || e(), (F = t.setDirtyCanvas) == null || F.call(t, !0, !0);
  }, R.onerror = () => {
    if (D + 1 >= d.length) {
      t.__panoOwnOutputImageCache === I && I.pendingImg === R && (I.pendingSrc = "", I.pendingImg = null);
      return;
    }
    A();
  }, I.pendingSrc = M, I.pendingImg = R, A(), I.img && (I.img.complete || I.img.naturalWidth || I.img.width) ? I.img : R;
}
function Wy(t, e = []) {
  var y, _;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const r = wl(t, e), a = r.map((d) => n.findIndex((M) => String((M == null ? void 0 : M.name) || "") === String(d))).filter((d) => d >= 0), s = n.map((d, M) => ({ input: d, idx: M })).filter(({ input: d }) => String((d == null ? void 0 : d.type) || "").toUpperCase() === "IMAGE").map(({ idx: d }) => d), u = [.../* @__PURE__ */ new Set([...a, ...s])];
  Wt(t, "image-resolve", {
    inputCandidates: r,
    resolvedIndices: u,
    stage: "start"
  });
  for (const d of u) {
    const M = n[d], I = M == null ? void 0 : M.link;
    if (I == null) continue;
    const R = Ph(t.graph, I), { originId: D, originSlot: A } = Ah(R);
    if (D == null) continue;
    const F = Ch(t, d, D);
    if (!F) continue;
    const P = Number(A || 0), H = $c((F == null ? void 0 : F.id) ?? D), O = Array.isArray(H == null ? void 0 : H.images) ? H.images : [];
    if (O.length) {
      const Q = [];
      P >= 0 && P < O.length && Q.push(O[P]), Q.push(...O);
      for (const St of Q) {
        const z = qn(St);
        if (z)
          return Wt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "nodeOutputs",
            stage: "hit"
          }), { src: z, sourceType: "nodeOutputs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    let B = [];
    try {
      B = typeof (fe == null ? void 0 : fe.getNodeImageUrls) == "function" ? fe.getNodeImageUrls(F) || [] : [];
    } catch {
      B = [];
    }
    if (Array.isArray(B) && B.length) {
      const Q = [];
      P >= 0 && P < B.length && Q.push(B[P]), Q.push(...B);
      for (const St of Q) {
        const z = qn(St);
        if (z)
          return Wt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "appNodeImageUrls",
            stage: "hit"
          }), { src: z, sourceType: "appNodeImageUrls", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const C = Array.isArray(F == null ? void 0 : F.imgs) ? F.imgs : [];
    if (C.length) {
      const Q = [];
      P >= 0 && P < C.length && Q.push(C[P]), Q.push(...C);
      for (const St of Q) {
        const z = qn(St);
        if (z)
          return Wt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "nodeImgs",
            stage: "hit"
          }), { src: z, sourceType: "nodeImgs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const ct = (y = F == null ? void 0 : F.widgets) == null ? void 0 : y.find((Q) => String((Q == null ? void 0 : Q.name) || "").toLowerCase() === "image");
    if (ct) {
      let Q = qn(ct.value);
      if (Q && !Q.includes("/") && !Q.includes(":") && (F.comfyClass === "LoadImage" || F.type === "LoadImage") && (Q = en.apiURL(`/view?filename=${encodeURIComponent(Q)}&type=input&subfolder=`)), Q)
        return Wt(t, "image-resolve", {
          inputName: String((M == null ? void 0 : M.name) || ""),
          sourceType: "widget",
          stage: "hit"
        }), { src: Q, sourceType: "widget", inputName: String((M == null ? void 0 : M.name) || "") };
    }
  }
  const f = $c(t == null ? void 0 : t.id), g = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && g.push(...f.pano_input_images), Array.isArray((_ = f == null ? void 0 : f.ui) == null ? void 0 : _.pano_input_images) && g.push(...f.ui.pano_input_images), g.length > 0)
    for (const d of g) {
      const M = qn(d);
      if (M)
        return Wt(t, "image-resolve", { sourceType: "selfOutput", src: M, stage: "hit" }), { src: M, sourceType: "selfOutput", inputName: "fallback" };
    }
  return Wt(t, "image-resolve", { stage: "miss" }), { src: "", sourceType: "", inputName: "" };
}
function Ky(t, e = []) {
  const n = Wy(t, e), r = String((n == null ? void 0 : n.src) || "").trim();
  if (!r) return null;
  const a = Ih(r);
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = e.join("|") || "image", u = t.__panoLinkedInputImageCache.get(s);
  if (u && u.srcRaw === r && u.img) return u.img;
  const f = new Image(), g = { srcRaw: r, resolvedSrc: "", img: f };
  t.__panoLinkedInputImageCache.set(s, g);
  let y = -1;
  const _ = () => {
    var M, I;
    if (y += 1, y >= a.length) {
      try {
        (I = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || I.call(M, s);
      } catch {
      }
      Wt(t, "image-load", {
        ok: !1,
        src: r,
        preferredInputNames: e,
        sourceType: String((n == null ? void 0 : n.sourceType) || ""),
        attemptCount: a.length,
        errorType: "all_candidates_failed"
      });
      return;
    }
    const d = a[y];
    g.resolvedSrc = d, f.src = d;
  };
  return f.onload = () => {
    var d;
    Wt(t, "image-load", {
      ok: !0,
      src: r,
      resolvedSrc: String(g.resolvedSrc || f.src || ""),
      preferredInputNames: e,
      sourceType: String((n == null ? void 0 : n.sourceType) || ""),
      attemptCount: y + 1
    }), (d = t.setDirtyCanvas) == null || d.call(t, !0, !0);
  }, f.onerror = (d) => {
    var M, I;
    if (y + 1 < a.length) {
      _();
      return;
    }
    try {
      (I = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || I.call(M, s);
    } catch {
    }
    Wt(t, "image-load", {
      ok: !1,
      src: r,
      resolvedSrc: String(g.resolvedSrc || ""),
      preferredInputNames: e,
      sourceType: String((n == null ? void 0 : n.sourceType) || ""),
      attemptCount: y + 1,
      errorType: String((d == null ? void 0 : d.type) || "error")
    });
  }, _(), f;
}
function Yo(t, e = [], n = null) {
  const r = Ky(t, e);
  return r ? (typeof n == "function" && (r.complete && (r.naturalWidth || r.width) || r.addEventListener("load", () => n(), { once: !0 })), r) : null;
}
function zc(t) {
  var e, n;
  if (t) {
    try {
      (n = (e = t.__panoLinkedInputImageCache) == null ? void 0 : e.clear) == null || n.call(e);
    } catch {
    }
    t.__panoOwnOutputImageCache = null, t.__panoWrappedErpCache = null;
  }
}
function Th(t, e) {
  t.__panoRenderCache || (t.__panoRenderCache = {
    mode: String(e || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = t.__panoRenderCache, r = String(e || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function kr(t, e, n = "") {
  const r = Th(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), a = performance.now();
  return e ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a, Wt(t, "loading", { phase: "enter", src: String(n || "") })), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < Cy ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, Wt(t, "loading", { phase: "exit", src: String(n || "") }), !1) : !1;
}
function jc(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), r = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), a = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), s = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || r)), u = n / a, f = r / s, g = Math.min(u, f);
  return Number.isFinite(g) && g > 0 ? g : 1;
}
function Tf(t, e, n = 1) {
  const r = Number((e == null ? void 0 : e.x) || 0), a = Number((e == null ? void 0 : e.y) || 0), s = Number((e == null ? void 0 : e.w) || 0), u = Number((e == null ? void 0 : e.h) || 0);
  if (s <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), g = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), s * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), _ = r + (s - g) * 0.5, d = a + (u - y) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(_, d, g, y, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", _ + g * 0.5, d + y * 0.5 + 0.5), t.restore();
}
function ca(t, e, n = "Open editor and add frame") {
  var a;
  const r = (a = t == null ? void 0 : t.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  r && (r.textContent = String(n || "Open editor and add frame"), r.style.display = e ? "flex" : "none");
}
function qy(t) {
  var r;
  const e = Array.isArray(t == null ? void 0 : t.shots) ? t.shots : [];
  if (!e.length) return null;
  const n = String(((r = t == null ? void 0 : t.active) == null ? void 0 : r.selected_shot_id) || "");
  if (n) {
    const a = e.find((s) => String((s == null ? void 0 : s.id) || "") === n);
    if (a) return a;
  }
  return e[0] || null;
}
function Dh(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), r = Number((t == null ? void 0 : t.y) || 0), a = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), s = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), u = Number(e) > 0 ? Number(e) : 1;
  let f = a, g = a / u;
  return g > s && (g = s, f = s * u), {
    x: n + (a - f) * 0.5,
    y: r + (s - g) * 0.5,
    w: f,
    h: g
  };
}
function Yy(t, e, n, r = 0) {
  if (!t || !e || !n) return !1;
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (a <= 1 || s <= 1) return !1;
  const u = Dh(n, a / s);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(r) || 0));
  return f > 0 && (t.fillStyle = `rgba(0,0,0,${f})`, t.fillRect(u.x, u.y, u.w, u.h)), t.restore(), !0;
}
function Xy(t, e = null) {
  const r = Array.isArray(t.widgets) ? t.widgets : [];
  let a = 32;
  return r.forEach((s) => {
    var f;
    if (s === e || !s || s.hidden || s.type === "hidden") return;
    let u = 22;
    try {
      const g = typeof s.computeSize == "function" ? s.computeSize(((f = Er(t)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(g) && Number.isFinite(Number(g[1])) && (u = Number(g[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function Do(t) {
  const n = Xy(t) + 2, r = 8, a = Er(t), s = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || s < 80 ? null : { x: r, y: n, w: s, h: u };
}
function Rh(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const r = String(e || "");
  if (!r) return null;
  const a = jy(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const s = window.__panoSharedImageCache.get(a);
  if (s != null && s.img)
    return t.__panoPreviewImageCache.set(r, { src: a, img: s.img }), s.img;
  const u = t.__panoPreviewImageCache.get(r);
  if (u && u.src === a) return u.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var g;
    return (g = t.setDirtyCanvas) == null ? void 0 : g.call(t, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), t.__panoPreviewImageCache.set(r, { src: a, img: f }), f;
}
function Zy(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.__panoStickerSortCache;
  if ((r == null ? void 0 : r.source) === n && Array.isArray(r.sorted)) return r.sorted;
  const a = [...n].sort((s, u) => Number((s == null ? void 0 : s.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function Lh(t, e) {
  return ys(e, {
    selectedId: null,
    hoveredId: null
  });
}
function Oh(t, e, n) {
  return wh(e, (r, a) => Rh(t, r, a), { scene: n });
}
function Jy(t, e, n, r = 0.45) {
  const a = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3, u = (f) => {
    const g = f.x - a, y = f.y - s, _ = Math.hypot(g, y) || 1;
    return { x: f.x + g / _ * r, y: f.y + y / _ * r };
  };
  return [u(t), u(e), u(n)];
}
function Df(t, e, n, r, a, s, u, f) {
  const g = n.x * (r.y - a.y) + r.x * (a.y - n.y) + a.x * (n.y - r.y);
  if (Math.abs(g) < 1e-6) return;
  const [y, _, d] = Jy(s, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(_.x, _.y), t.lineTo(d.x, d.y), t.closePath(), t.clip();
  const M = (s.x * (r.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - r.y)) / g, I = (s.x * (a.x - r.x) + u.x * (n.x - a.x) + f.x * (r.x - n.x)) / g, R = (s.x * (r.x * a.y - a.x * r.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * r.y - r.x * n.y)) / g, D = (s.y * (r.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - r.y)) / g, A = (s.y * (a.x - r.x) + u.y * (n.x - a.x) + f.y * (r.x - n.x)) / g, F = (s.y * (r.x * a.y - a.x * r.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * r.y - r.x * n.y)) / g;
  t.transform(M, D, I, A, R, F), t.drawImage(e, 0, 0), t.restore();
}
function Fh(t, e, n, r) {
  const a = yc(t, e.right), s = yc(t, e.up), u = yc(t, e.fwd);
  if (u <= 1e-4) return null;
  const f = s / u / r, g = a / u / r;
  return { x: n.x + n.w * 0.5 + g * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Vh(t, e, n, r, a, s, u, f = 12, g = 9) {
  var it;
  const y = U(Number(u.hFOV_deg || 30), 1, 179) * Kr, _ = U(Number(u.vFOV_deg || 30), 1, 179) * Kr, d = Math.tan(y * 0.5), M = Math.tan(_ * 0.5), I = u.crop || {}, R = U(Number(I.x0 ?? 0), 0, 1), D = U(Number(I.y0 ?? 0), 0, 1), A = U(Number(I.x1 ?? 1), 0, 1), F = U(Number(I.y1 ?? 1), 0, 1), P = Math.max(1e-4, A - R), H = Math.max(1e-4, F - D), O = bl(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), B = [], C = [], ct = [], Q = [];
  for (let Z = 0; Z <= g; Z++) {
    const ft = Z / g, yt = (1 - (D + ft * H) * 2) * M;
    for (let Mt = 0; Mt <= f; Mt++) {
      const Et = Mt / f, vt = ((R + Et * P) * 2 - 1) * d, Ct = O.fwd.x + O.right.x * vt + O.up.x * yt, de = O.fwd.y + O.right.y * vt + O.up.y * yt, se = O.fwd.z + O.right.z * vt + O.up.z * yt, ye = Math.hypot(Ct, de, se) || 1e-8, Ae = Ct / ye, Ke = de / ye, Ve = se / ye, an = Ae * r.right.x + Ke * r.right.y + Ve * r.right.z, Qn = Ae * r.up.x + Ke * r.up.y + Ve * r.up.z, x = Ae * r.fwd.x + Ke * r.fwd.y + Ve * r.fwd.z;
      if (x <= 1e-4)
        B[Z] || (B[Z] = []), C[Z] || (C[Z] = []), B[Z][Mt] = null, C[Z][Mt] = null;
      else {
        const E = Qn / x / a, V = an / x / a;
        B[Z] || (B[Z] = []), C[Z] || (C[Z] = []), B[Z][Mt] = n.x + n.w * 0.5 + V * n.h * 0.5, C[Z][Mt] = n.y + n.h * 0.5 - E * n.h * 0.5;
      }
      ct[Z] || (ct[Z] = []), Q[Z] || (Q[Z] = []), ct[Z][Mt] = Et, Q[Z][Mt] = ft;
    }
  }
  const St = (it = s.assets) == null ? void 0 : it[u.asset_id], z = Rh(e, u.asset_id, St);
  if (!z || !z.complete || !z.naturalWidth) return;
  const ut = Number(z.naturalWidth || z.width || 1), Nt = Number(z.naturalHeight || z.height || 1), Y = f < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = Y;
  for (let Z = 0; Z < g; Z++)
    for (let ft = 0; ft < f; ft++) {
      const ot = B[Z][ft], yt = C[Z][ft], Mt = B[Z][ft + 1], Et = C[Z][ft + 1], et = B[Z + 1][ft], vt = C[Z + 1][ft], Ct = B[Z + 1][ft + 1], de = C[Z + 1][ft + 1];
      if (ot === null || Mt === null || et === null || Ct === null) continue;
      const se = ct[Z][ft] * ut, ye = Q[Z][ft] * Nt, Ae = ct[Z][ft + 1] * ut, Ke = Q[Z][ft + 1] * Nt, Ve = ct[Z + 1][ft] * ut, an = Q[Z + 1][ft] * Nt, Qn = ct[Z + 1][ft + 1] * ut, x = Q[Z + 1][ft + 1] * Nt;
      Df(t, z, { x: se, y: ye }, { x: Ae, y: Ke }, { x: Qn, y: x }, { x: ot, y: yt }, { x: Mt, y: Et }, { x: Ct, y: de }), Df(t, z, { x: se, y: ye }, { x: Qn, y: x }, { x: Ve, y: an }, { x: ot, y: yt }, { x: Ct, y: de }, { x: et, y: vt });
    }
}
function Qy(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const r = _l(t), a = Do(t);
  if (!a) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const s = bl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(t.__panoPreviewView.fov || 100) * Kr * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(a.x, a.y, a.w, a.h, 8), e.fill(), e.stroke(), e.clip();
  const f = Yo(
    t,
    wl(t, ["erp_image", "bg_erp"]),
    () => {
      var O;
      return (O = t.setDirtyCanvas) == null ? void 0 : O.call(t, !0, !1);
    }
  ), g = !!(f && f.complete && (f.naturalWidth || f.width)), y = zh(t), _ = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, d = y || _, M = Go, I = Lh(t, r), R = Oh(t, r, I), D = vl(t.__panoPreviewView, r == null ? void 0 : r.coverage);
  let A = !1;
  if (t.__panoRuntimeCore || (t.__panoRuntimeCore = Li()), g) {
    const O = gs({
      stateRevision: [
        "runtime_panorama_scene",
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0),
        Number((r == null ? void 0 : r.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(R) ? R.map((ct) => `${String((ct == null ? void 0 : ct.assetId) || "")}:${String((ct == null ? void 0 : ct.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: f,
      backgroundRevision: [
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0)
      ].join("|"),
      coverageDeg: Number((r == null ? void 0 : r.coverage) || 360) === 180 ? 180 : 360,
      scene: I,
      textures: R,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), C = t.__panoRuntimeCore.syncState(O) ? t.__panoRuntimeCore.renderToTarget("runtime_preview", D, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    A = !!C, C && e.drawImage(C, a.x, a.y, a.w, a.h);
  }
  const F = d ? 8 : 12, P = d ? 6 : 9, H = Zy(t, r);
  if (!g || H.length === 0) {
    const O = jc(e == null ? void 0 : e.canvas, a);
    Hh(e, a, s, u, O);
  }
  !A && g && Xo(t, e, a, s, u, f, M), !A && H.length > 0 && H.forEach((O) => Vh(e, t, a, s, u, r, O, F, P)), e.restore();
}
function tv(t, e, n, r, a = "preview_scene") {
  return gs({
    stateRevision: [
      a,
      String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
      Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
      Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0),
      Number((e == null ? void 0 : e.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(r) ? r.map((s) => `${String((s == null ? void 0 : s.assetId) || "")}:${String((s == null ? void 0 : s.revision) || "")}`).join(",") : ""
    ].join("|"),
    backgroundSource: t,
    backgroundRevision: [
      String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
      Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
      Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
    ].join("|"),
    coverageDeg: Number((e == null ? void 0 : e.coverage) || 360) === 180 ? 180 : 360,
    scene: n,
    textures: r,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
}
function Ro(t, e, n, r) {
  var s, u, f, g, y, _;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((s = t == null ? void 0 : t.pos) == null ? void 0 : s[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((u = t == null ? void 0 : t.pos) == null ? void 0 : u[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && e)
    try {
      const d = r.convertEventToCanvasOffset(e);
      if (Array.isArray(d) && d.length >= 2)
        return {
          x: Number(d[0]) - Number(((f = t == null ? void 0 : t.pos) == null ? void 0 : f[0]) || 0),
          y: Number(d[1]) - Number(((g = t == null ? void 0 : t.pos) == null ? void 0 : g[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(e == null ? void 0 : e.canvasX)) && Number.isFinite(Number(e == null ? void 0 : e.canvasY)))
    return {
      x: Number(e.canvasX) - Number(((y = t == null ? void 0 : t.pos) == null ? void 0 : y[0]) || 0),
      y: Number(e.canvasY) - Number(((_ = t == null ? void 0 : t.pos) == null ? void 0 : _[1]) || 0)
    };
  const a = nv(t, e, r);
  return a || null;
}
function ev(t, e) {
  var d, M;
  const n = Number(t == null ? void 0 : t.clientX), r = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, s = (d = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : d.call(a), u = (e == null ? void 0 : e.ds) || ((M = fe == null ? void 0 : fe.canvas) == null ? void 0 : M.ds);
  if (!s || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const g = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(s.left || 0)) / f - Number(g[0] || 0), _ = (r - Number(s.top || 0)) / f - Number(g[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(_) ? null : { x: y, y: _ };
}
function nv(t, e, n) {
  var a, s;
  const r = ev(e, n || (fe == null ? void 0 : fe.canvas));
  return r ? {
    x: r.x - Number(((a = t == null ? void 0 : t.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((s = t == null ? void 0 : t.pos) == null ? void 0 : s[1]) || 0)
  } : null;
}
function lo(t) {
  if (t.__panoLegacyPreviewHooked) return;
  Wt(t, "legacy.attach", {
    mode: t.__panoPreviewMode,
    nodeType: String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""),
    nodeSize: Er(t)
  }), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", Sh(t, 320, 180), xi(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var M, I;
    const d = e ? e.apply(this, arguments) : void 0;
    try {
      const R = arguments[0];
      R && !((M = this.flags) != null && M.collapsed) && (r.stepInertia(performance.now()) && ((I = this.setDirtyCanvas) == null || I.call(this, !0, !1)), Qy(this, R, r));
    } catch {
    }
    return d;
  }, t.onResize = function() {
    var M;
    const d = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Zo(this, 150), (M = this.setDirtyCanvas) == null || M.call(this, !0, !0), jh(this, 220, null), d;
  };
  const r = ms({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (d) => {
      t.__panoPreviewView = d;
    },
    getViewportSize: () => {
      const d = Do(t);
      return {
        w: Math.max(1, Number((d == null ? void 0 : d.w) || 0)),
        h: Math.max(1, Number((d == null ? void 0 : d.h) || 0))
      };
    },
    onInteraction: () => {
      var d;
      $h(t), (d = t.setDirtyCanvas) == null || d.call(t, !0, !1);
    }
  }), a = t.onMouseDown;
  t.onMouseDown = function(d, M, I) {
    var R;
    try {
      if (!((R = this.flags) != null && R.collapsed)) {
        const D = Ro(this, d, M, I) || { x: 0, y: 0 }, A = Er(this), F = Number((A == null ? void 0 : A[0]) || 0), P = Number((A == null ? void 0 : A[1]) || 0);
        if (D.x >= F - 20 && D.y >= P - 20)
          return a ? a.apply(this, arguments) : void 0;
        const O = Do(this);
        if (If(D.x, D.y, O))
          return (d == null ? void 0 : d.button) === 0 && r.startDrag(D.x, D.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const s = t.onMouseMove;
  t.onMouseMove = function(d, M, I) {
    try {
      const R = Ro(this, d, M, I);
      if (r.state.drag.active) {
        if (typeof (d == null ? void 0 : d.buttons) == "number" && (d.buttons & 1) === 0)
          return r.endDrag(), !0;
        const D = R || r.state.drag;
        return r.moveDrag(D.x, D.y, "pano"), !0;
      }
    } catch {
    }
    return s ? s.apply(this, arguments) : void 0;
  };
  const u = t.onMouseUp;
  t.onMouseUp = function() {
    return r.state.drag.active ? (r.endDrag(), !0) : u ? u.apply(this, arguments) : void 0;
  };
  const f = t.onMouseLeave;
  t.onMouseLeave = function() {
    const d = f ? f.apply(this, arguments) : void 0;
    return r.state.drag.active && r.endDrag(), d;
  };
  const g = t.onMouseWheel;
  t.onMouseWheel = function(d, M, I) {
    var R, D;
    try {
      if ((R = this.flags) != null && R.collapsed) return g ? g.apply(this, arguments) : void 0;
      const A = Ro(this, d, M, I), F = Do(this);
      if (!A || !If(A.x, A.y, F)) return g ? g.apply(this, arguments) : void 0;
      const P = Number((d == null ? void 0 : d.deltaY) ?? (d == null ? void 0 : d.wheelDeltaY) ?? (typeof M == "number" ? M : 0));
      return r.applyWheel(Math.sign(P)) && ((D = this.setDirtyCanvas) == null || D.call(this, !0, !1)), typeof (d == null ? void 0 : d.preventDefault) == "function" && d.preventDefault(), typeof (d == null ? void 0 : d.stopPropagation) == "function" && d.stopPropagation(), !0;
    } catch {
      return g ? g.apply(this, arguments) : void 0;
    }
  };
  const y = t.onRemoved, _ = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = n, t.onDrawForeground = e, t.onMouseDown = a, t.onMouseMove = s, t.onMouseUp = u, t.onMouseLeave = f, t.onMouseWheel = g, t.onRemoved = y, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = _, t.onRemoved = function() {
    return _(), Sa.unregister(this), Ko.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function rv(t, e) {
  const n = Yo(
    t,
    ["erp_image", "bg_erp"],
    () => {
      var u, f;
      return (f = (u = t.__panoDomPreview) == null ? void 0 : u.requestDraw) == null ? void 0 : f.call(u);
    }
  ), r = Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0), a = Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0);
  if (r > 1 && a > 1)
    return {
      kind: "ERP_GLOBAL",
      width: Math.max(1, Math.round(r)),
      height: Math.max(1, Math.round(a))
    };
  const s = Math.max(1, Number((e == null ? void 0 : e.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: s,
    height: Math.max(1, Math.round(s * 0.5))
  };
}
function iv(t, e) {
  var y, _, d, M, I, R, D, A, F, P, H, O;
  const n = (_ = (y = e == null ? void 0 : e.painting) == null ? void 0 : y.paint) == null ? void 0 : _.strokes, r = (M = (d = e == null ? void 0 : e.painting) == null ? void 0 : d.mask) == null ? void 0 : M.strokes, a = Array.isArray(n) && n.length > 0, s = Array.isArray(r) && r.length > 0;
  if (!a && !s) return null;
  const u = rv(t, e), f = `${u.width}x${u.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== f) && (t.__panoPreviewPaintEngine = Oc(u), t.__panoPreviewPaintDescriptorKey = f, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const g = {
    paint: n || null,
    mask: r || null,
    groups: ((I = e == null ? void 0 : e.painting) == null ? void 0 : I.groups) || null,
    rasterObjects: ((R = e == null ? void 0 : e.painting) == null ? void 0 : R.raster_objects) || null
  };
  return (((D = t.__panoPreviewPaintRevision) == null ? void 0 : D.paint) !== g.paint || ((A = t.__panoPreviewPaintRevision) == null ? void 0 : A.mask) !== g.mask || ((F = t.__panoPreviewPaintRevision) == null ? void 0 : F.groups) !== g.groups || ((P = t.__panoPreviewPaintRevision) == null ? void 0 : P.rasterObjects) !== g.rasterObjects) && (t.__panoPreviewPaintRevision = g, t.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    s ? "m1" : "m0",
    String(Array.isArray((H = e == null ? void 0 : e.painting) == null ? void 0 : H.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((O = e == null ? void 0 : e.painting) == null ? void 0 : O.raster_objects) ? e.painting.raster_objects.length : 0)
  ].join(":"), t.__panoPreviewPaintEngine.rebuildCommitted(e)), t.__panoPreviewPaintEngine;
}
function av(t) {
  var n;
  return (Array.isArray((n = t == null ? void 0 : t.painting) == null ? void 0 : n.groups) ? t.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function ov(t, e) {
  const n = iv(t, e);
  if (!n) return null;
  const r = av(e);
  return n.getErpTarget(r).displayPaint.canvas;
}
function sv(t, e, n = null) {
  var f;
  const r = (f = e == null ? void 0 : e.painting_layer) == null ? void 0 : f.paint, a = qn(r);
  if (!a) return null;
  t.__panoPaintingLayerImageCache || (t.__panoPaintingLayerImageCache = { src: "", img: null });
  const s = t.__panoPaintingLayerImageCache;
  if (s.img && s.src === a) return s.img;
  const u = new Image();
  return u.onload = () => {
    var g;
    n == null || n(), (g = t.setDirtyCanvas) == null || g.call(t, !0, !0);
  }, u.onerror = () => {
    var g;
    ((g = t.__panoPaintingLayerImageCache) == null ? void 0 : g.img) === u && (t.__panoPaintingLayerImageCache = { src: "", img: null });
  }, u.src = a, t.__panoPaintingLayerImageCache = { src: a, img: u }, u;
}
function Rf(t, e) {
  var s, u;
  const n = t == null ? void 0 : t.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((s = e == null ? void 0 : e.painting) == null ? void 0 : s.raster_objects) && e.painting.raster_objects.length > 0) {
    const f = sv(t, e, () => {
      var g, y;
      return (y = (g = t.__panoDomPreview) == null ? void 0 : g.requestDraw) == null ? void 0 : y.call(g);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = e == null ? void 0 : e.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = ov(t, e);
  return a ? {
    source: a,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function cv(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function lv(t, e, n, r) {
  let a = (t == null ? void 0 : t[e]) || null;
  return (!a || a.width !== n || a.height !== r) && (a = document.createElement("canvas"), a.width = n, a.height = r, t[e] = a), a;
}
function uv(t, e, n, r, a, s) {
  if (!e || !n || !(r > 0) || !(a > 0)) return;
  const u = cv(n);
  if (u.width === r && u.height === a) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  const g = lv(t, s, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!g) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  try {
    g.clearRect(0, 0, u.width, u.height), g.drawImage(n, 0, 0, u.width, u.height);
    const y = g.getImageData(0, 0, u.width, u.height).data, _ = e.getImageData(0, 0, r, a), d = _.data, M = Math.max(0, u.width - 1), I = Math.max(0, u.height - 1);
    for (let R = 0; R < a; R += 1) {
      const D = (R + 0.5) * u.height / a - 0.5, A = U(Math.floor(D), 0, I), F = U(A + 1, 0, I), P = U(D - A, 0, 1);
      for (let H = 0; H < r; H += 1) {
        const O = (H + 0.5) * u.width / r - 0.5, B = U(Math.floor(O), 0, M), C = U(B + 1, 0, M), ct = U(O - B, 0, 1);
        let Q = 0, St = 0, z = 0, ut = 0;
        const Nt = (Z, ft, ot) => {
          const yt = (ft * u.width + Z) * 4, Mt = (y[yt + 3] || 0) / 255;
          Q += Mt * ot, St += (y[yt] || 0) / 255 * Mt * ot, z += (y[yt + 1] || 0) / 255 * Mt * ot, ut += (y[yt + 2] || 0) / 255 * Mt * ot;
        };
        if (Nt(B, A, (1 - ct) * (1 - P)), Nt(C, A, ct * (1 - P)), Nt(B, F, (1 - ct) * P), Nt(C, F, ct * P), Q <= 1e-6) continue;
        const Y = (R * r + H) * 4, it = 1 - Q;
        d[Y] = Math.round(U((St + d[Y] / 255 * it) * 255, 0, 255)), d[Y + 1] = Math.round(U((z + d[Y + 1] / 255 * it) * 255, 0, 255)), d[Y + 2] = Math.round(U((ut + d[Y + 2] / 255 * it) * 255, 0, 255)), d[Y + 3] = 255;
      }
    }
    e.putImageData(_, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, r, a);
  }
}
function Lf(t, e, n, r) {
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0)), f = `${String(e.currentSrc || e.src || "")}|${a}x${s}|${r}`;
  let g = t.__panoPreviewBgPaint;
  if (!g || g.__revKey !== f || g.width !== a || g.height !== s) {
    (!g || g.width !== a || g.height !== s) && (g = document.createElement("canvas"), g.width = a, g.height = s, t.__panoPreviewBgPaint = g);
    const y = g.getContext("2d");
    y.clearRect(0, 0, a, s), y.drawImage(e, 0, 0, a, s), uv(t, y, n, a, s, "__panoPreviewOverlayScratch"), g.__revKey = f;
  }
  return g;
}
function fv(t, e, n, r = null) {
  const a = String(t.__panoPreviewMode || "stickers");
  Th(t, a);
  const s = _l(t), u = a === "cutout" ? Gy(t, () => {
    var D, A;
    return (A = (D = t.__panoDomPreview) == null ? void 0 : D.requestDraw) == null ? void 0 : A.call(D);
  }) : null, f = !!(u && u.complete && (u.naturalWidth || u.width)), g = e.parentElement, y = 1, _ = Math.max(1, Number((g == null ? void 0 : g.clientWidth) || e.clientWidth || 0)), d = Math.max(1, Number((g == null ? void 0 : g.clientHeight) || e.clientHeight || 0)), M = Math.max(64, Math.round(_ * y)), I = Math.max(64, Math.round(d * y)), R = e.getContext("2d");
  if (R)
    if (a === "cutout") {
      const D = qy(s), A = Yo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var it, Z;
          return (Z = (it = t.__panoDomPreview) == null ? void 0 : it.requestDraw) == null ? void 0 : Z.call(it);
        }
      ), F = !!(A && A.complete && (A.naturalWidth || A.width));
      (e.width !== M || e.height !== I) && (e.width = M, e.height = I);
      const P = { x: 0, y: 0, w: M, h: I }, H = f ? U(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : F ? U(Number((A.naturalWidth || A.width) / Math.max(1, Number(A.naturalHeight || A.height || 1))), 0.05, 20) : 1, O = D ? wi(D) : null, B = U(Number((O == null ? void 0 : O.aspect) || H || 1), 0.05, 20), C = Dh(P, B), ct = jc(e, P);
      R.setTransform(1, 0, 0, 1, 0, 0), R.fillStyle = "#070707", R.fillRect(0, 0, M, I);
      const Q = t == null ? void 0 : t.__panoCutoutPreviewSurface, St = (Q == null ? void 0 : Q.source) || null;
      if (!!(St && Number(St.width || 0) > 1 && Number(St.height || 0) > 1)) {
        R.drawImage(St, C.x, C.y, C.w, C.h), ca(t, !1), kr(t, !1, "");
        return;
      }
      let ut = "none", Nt = "Open editor and add frame", Y = "";
      if (f)
        R.drawImage(u, C.x, C.y, C.w, C.h);
      else if (Y = String((A == null ? void 0 : A.src) || ""), D)
        A && !F ? ut = "loading" : F ? (ut = "empty", Nt = "Open editor or run node") : (ut = "empty", Nt = "Connect ERP image");
      else {
        if (F) {
          const it = Rf(t, s), Z = it != null && it.source ? Lf(t, A, it.source, it.revision || "") : A;
          Yy(R, Z, P, 0.44);
        }
        ut = "empty", Nt = "Open editor and add frame";
      }
      ut === "loading" ? (Tf(R, C, ct), ca(t, !1), kr(t, !0, Y)) : ut === "empty" ? (ca(t, !0, Nt), kr(t, !1, "")) : (ca(t, !1), kr(t, !1, ""));
    } else {
      ca(t, !1), (e.width !== M || e.height !== I) && (e.width = M, e.height = I);
      const D = { x: 0, y: 0, w: M, h: I }, A = jc(e, D);
      R.setTransform(1, 0, 0, 1, 0, 0), R.clearRect(0, 0, M, I), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const F = bl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), P = Math.tan(Number(t.__panoPreviewView.fov || 100) * Kr * 0.5), H = Yo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var Y, it;
          return (it = (Y = t.__panoDomPreview) == null ? void 0 : Y.requestDraw) == null ? void 0 : it.call(Y);
        }
      ), O = !!(H && H.complete && (H.naturalWidth || H.width));
      R.fillStyle = "#1a1a1e", R.fillRect(0, 0, M, I);
      const B = Lh(t, s), C = Oh(t, s, B), ct = vl(t.__panoPreviewView, s == null ? void 0 : s.coverage), Q = Rf(t, s), St = (Q == null ? void 0 : Q.source) || null, z = O && St ? Lf(t, H, St, (Q == null ? void 0 : Q.revision) || "") : H;
      z !== H ? String(z.__revKey || "") : H && [
        String(H.currentSrc || H.src || ""),
        Number(H.naturalWidth || H.width || 0),
        Number(H.naturalHeight || H.height || 0)
      ].join("|"), t.__panoDomRuntimeCore || (t.__panoDomRuntimeCore = Li());
      let ut = !1;
      if (O) {
        const it = t.__panoDomRuntimeCore.syncState(
          tv(z, s, B, C, "runtime_dom_scene")
        ) ? t.__panoDomRuntimeCore.renderToTarget("runtime_preview", ct, {
          width: D.w,
          height: D.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        it && (R.drawImage(it, D.x, D.y, D.w, D.h), ut = !0);
      }
      const Nt = B.stickers;
      if (O && ut)
        kr(t, !1, "");
      else if (O)
        Xo(t, R, D, F, P, z, Go), kr(t, !1, "");
      else if (St)
        Xo(t, R, D, F, P, St, Go), kr(t, !!H && !O, String((H == null ? void 0 : H.src) || ""));
      else {
        const Y = !!H && !O;
        kr(t, Y, String((H == null ? void 0 : H.src) || "")), Y && Tf(R, D, A);
      }
      if ((!O || Nt.length === 0) && Hh(R, D, F, P, A), !ut && Nt.length > 0) {
        const Y = zh(t), it = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, Z = Y || it, ft = Z ? 8 : 12, ot = Z ? 6 : 9;
        Nt.forEach((yt) => Vh(R, t, D, F, P, s, yt, ft, ot));
      } else if (!H || !O) {
        const Y = Math.max(14, Math.round(16 * A));
        R.fillStyle = "rgba(212,212,216,0.85)", R.font = `600 ${Y}px Plus Jakarta Sans, Geist, sans-serif`, R.textAlign = "center", R.fillText("Open editor to add stickers", M * 0.5, I * 0.5 + 24 * A);
      }
    }
}
function Xo(t, e, n, r, a, s, u = Py) {
  const f = _l(t), g = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  t.__panoBackgroundCore || (t.__panoBackgroundCore = Li());
  const y = gs({
    stateRevision: [
      "runtime_bg_only",
      String((s == null ? void 0 : s.currentSrc) || (s == null ? void 0 : s.src) || ""),
      Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 0),
      Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 0),
      Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: s,
    backgroundRevision: [
      String((s == null ? void 0 : s.currentSrc) || (s == null ? void 0 : s.src) || ""),
      Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 0),
      Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 0)
    ].join("|"),
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!t.__panoBackgroundCore.syncState(y)) return;
  const d = t.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(g.yaw || 0),
    pitchDeg: Number(g.pitch || 0),
    fovDeg: Number(g.fov || 100),
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
  }, {
    width: n.w,
    height: n.h,
    dpr: window.devicePixelRatio || 1,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  d && e.drawImage(d, n.x, n.y, n.w, n.h);
}
function Of(t, e, n, r, a, s, u = 1) {
  let f = !1;
  t.strokeStyle = s, t.lineWidth = u, t.beginPath();
  for (const g of e) {
    const y = Fh(g, n, r, a);
    if (!y) {
      f = !1;
      continue;
    }
    f ? t.lineTo(y.x, y.y) : (t.moveTo(y.x, y.y), f = !0);
  }
  t.stroke();
}
function Hh(t, e, n, r, a = 1) {
  t.save();
  const s = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const _ = [];
    for (let d = -180; d <= 180; d += 15) _.push(Hr(d, y));
    Of(t, _, n, e, r, y === 0 ? u : s, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const _ = [];
    for (let d = -89; d <= 89; d += 15) _.push(Hr(y, d));
    Of(t, _, n, e, r, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : s, y % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: Hr(0, 0) },
    { name: "Right", dir: Hr(90, 0) },
    { name: "Back", dir: Hr(180, 0) },
    { name: "Left", dir: Hr(-90, 0) }
  ];
  t.fillStyle = "rgba(250, 250, 250, 0.32)";
  const g = Math.max(9, Math.round(11 * a));
  t.font = `500 ${g}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", f.forEach((y) => {
    const _ = Fh(y.dir, n, e, r);
    _ && t.fillText(y.name, _.x, _.y + 20 * a);
  }), t.restore();
}
function dv(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function $h(t) {
  const e = dv(t);
  e.dragging = !1, e.hqFrames = Ay;
}
function Zo(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function zh(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function hv(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function pv(t, e, n = 20) {
  var u;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const r = (u = e.getBoundingClientRect) == null ? void 0 : u.call(e);
  if (!r) return !1;
  const a = Number(t.clientX) - Number(r.left || 0), s = Number(t.clientY) - Number(r.top || 0);
  return a >= r.width - n && s >= r.height - n;
}
function gi(t, e) {
  return pv(t, e) ? !1 : (hv(t), !0);
}
function gv() {
  var n;
  const t = (n = fe == null ? void 0 : fe.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function mv(t) {
  var n;
  if (!t) return;
  const e = (n = fe == null ? void 0 : fe.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function yv(t, e = 360, n = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const r = Er(t), a = Number((r == null ? void 0 : r[0]) || 0), s = Number((r == null ? void 0 : r[1]) || 0);
  if (!Number.isFinite(a) || !Number.isFinite(s) || a >= e && s >= n) return;
  const u = [Math.max(e, a), Math.max(n, s)];
  try {
    typeof t.setSize == "function" ? t.setSize(u) : t.size = u, t.__panoStandaloneBootSized = !0, Wt(t, "size.bootstrap", { from: [a, s], to: u });
  } catch (f) {
    Wt(t, "size.bootstrap.error", { message: String((f == null ? void 0 : f.message) || f || "unknown") });
  }
}
function vv(t, e = 0, n = null, r = 1200) {
  const a = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = a > 0, !(a <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var s, u;
    t.__panoBootMinHeightTimer = null, (s = t == null ? void 0 : t.__panoDomPreview) != null && s.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, n == null || n(), (u = t.setDirtyCanvas) == null || u.call(t, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Ff(t, e = null, n = 0) {
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return t != null && t.__panoBootMinHeightActive ? Math.max(0, Number(n || 0)) : 0;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return t != null && t.__panoBootMinHeightActive ? Math.max(0, Number(n || 0)) : "auto";
    },
    afterResize() {
      t.__panoUserResized = !0, Zo(t, 150), e == null || e(), jh(t, 180, e);
    }
  };
}
function jh(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    t.__panoResizeSettleTimer = null, n == null || n(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function xi(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function bv(t, e = {}) {
  var Et;
  const n = e.__allowStandalone === !0, r = Ty(t);
  if (r && !n) {
    Wt(t, "attach.skip", { reason: "standalone_preview_node", route: "blocked_legacy_path", nodeType: Nh(t) });
    return;
  }
  r && yv(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", Ko.register(t);
  const a = t.__panoPreviewMode === "stickers", s = e.__noLegacyFallback === !0, u = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null;
  const f = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
  a || Sa.unregister(t);
  const g = String(e.__panoForcedPath || "").trim(), y = a ? Mh(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Wr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (g === "dom" || g === "legacy_draw") && (y.chosenPath = g, y.reason = "controller_target_backend");
  const _ = a ? y.chosenPath : "dom", d = y.signature || Wr(t), M = Number(t.__panoRebindGeneration || 0), I = Hc(t);
  if (Wt(t, "attach.begin", {
    nodeId: (t == null ? void 0 : t.id) ?? null,
    nodeType: f,
    mode: t.__panoPreviewMode,
    legacyFrontend: _ === "legacy_draw",
    activeBackend: I,
    targetBackend: _,
    chosenPath: _,
    pathReason: y.reason,
    signature: d,
    generation: M,
    frontendVersionRaw: y.frontendVersionRaw,
    hasDomWidget: typeof t.addDOMWidget == "function",
    size: Er(t)
  }), t.__panoFrontendSig = d, t.__panoStickersPath = _, a && Sa.register(t), a && _ === "legacy_draw") {
    if (s) return;
    Ti(t, { keepMonitor: !0 }), lo(t);
    return;
  }
  if ((Et = t.__panoDomPreview) != null && Et.widget) return;
  if (t.__panoLegacyPreviewHooked && Ti(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    a && !s && lo(t);
    return;
  }
  const R = e.noPreview === !0, D = a || R ? 0 : 56, A = document.createElement("div");
  if (Iy(), A.className = "pano-node-preview-dom", A.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), R && A.classList.add("pano-node-preview--no-preview"), A.setAttribute("data-capture-wheel", "true"), A.setAttribute("tabindex", "-1"), A.style.cssText = [
    "width:100%",
    R ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), R) {
    const et = t.addDOMWidget(Vc(), "preview", A, Ff(t, null));
    xi(t), t.__panoDomPreview = { widget: et, root: A, requestDraw: () => {
    } }, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom";
    return;
  }
  const F = document.createElement("div");
  F.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const P = document.createElement("canvas");
  P.style.cssText = [
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
  const H = document.createElement("div");
  H.style.cssText = [
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
  ].join(";"), H.textContent = "Open editor and add frame", F.appendChild(P), F.appendChild(H), A.appendChild(F), Sh(t, 120, 120), xi(t);
  let O = null;
  try {
    vv(t, D, () => {
      var et, vt;
      return (vt = (et = t.__panoDomPreview) == null ? void 0 : et.requestDraw) == null ? void 0 : vt.call(et);
    }), O = t.addDOMWidget(
      Vc(),
      "preview",
      A,
      Ff(t, () => {
        var et, vt;
        return (vt = (et = t.__panoDomPreview) == null ? void 0 : et.requestDraw) == null ? void 0 : vt.call(et);
      }, D)
    );
  } catch {
    a && lo(t);
    return;
  }
  const B = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, C = () => {
    B.needsDraw = !0, B.raf || (B.raf = requestAnimationFrame(St));
  }, ct = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Zo(t, 150), C();
  }) : null;
  ct == null || ct.observe(F);
  const Q = () => {
    if (!a || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const et = 3, vt = (Ct) => {
      requestAnimationFrame(() => {
        var se;
        const de = !!(A != null && A.isConnected && (F != null && F.isConnected) && (P != null && P.isConnected) && Number(F.clientHeight || 0) > 0 && Number(P.clientHeight || 0) > 0);
        if (!de && Ct < et) {
          vt(Ct + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, Wt(t, "probe.result", {
          mode: t.__panoPreviewMode,
          result: de ? "dom_ok" : "dom_fail",
          wrapH: Number((F == null ? void 0 : F.clientHeight) || 0),
          canvasH: Number((P == null ? void 0 : P.clientHeight) || 0),
          attempt: Ct
        }), !de) {
          if (s) {
            Wt(t, "path.keep", {
              route: "dom",
              reason: "probe_dom_not_ready",
              mode: t.__panoPreviewMode,
              wrapH: Number((F == null ? void 0 : F.clientHeight) || 0),
              canvasH: Number((P == null ? void 0 : P.clientHeight) || 0)
            });
            return;
          }
          Wt(t, "path.switch", {
            from: "dom",
            to: "legacy_draw",
            reason: "probe_dom_fail_fallback_legacy"
          }), Ti(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", lo(t), (se = t.setDirtyCanvas) == null || se.call(t, !0, !0);
        }
      });
    };
    vt(1);
  }, St = (et) => {
    var Ct, de, se;
    B.raf = 0;
    const vt = z.stepInertia(et);
    (B.needsDraw || vt) && (B.needsDraw = !1, (Ct = t.flags) != null && Ct.collapsed || fv(t, P, null, z), (de = t.setDirtyCanvas) == null || de.call(t, !0, !1)), (vt || B.needsDraw) && (B.raf = requestAnimationFrame(St)), xh() && (!t.__panoDebugLastTs || et - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = et, Wt(t, "dom.snapshot", {
      mode: t.__panoPreviewMode,
      nodeSize: Er(t),
      root: sa(A),
      wrap: sa(F),
      canvas: sa(P),
      rootParent: sa(A.parentElement),
      rootGrandParent: sa((se = A.parentElement) == null ? void 0 : se.parentElement),
      canvasIntrinsic: { width: Number(P.width || 0), height: Number(P.height || 0) }
    }));
  }, z = ms({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (et) => {
      t.__panoPreviewView = et;
    },
    onInteraction: () => {
      C();
    }
  });
  P.addEventListener("pointerdown", (et) => {
    var vt, Ct;
    gi(et, F) && u && et.button === 0 && ((vt = A.focus) == null || vt.call(A), (Ct = P.setPointerCapture) == null || Ct.call(P, et.pointerId), P.style.cursor = "grabbing", z.startDrag(et.clientX, et.clientY, et.pointerId));
  }), P.addEventListener("pointermove", (et) => {
    !u || !z.state.drag.active || (gi(et, F), z.moveDrag(et.clientX, et.clientY, "pano"));
  });
  const ut = (et) => {
    var vt;
    !u || !z.state.drag.active || (gi(et, F), (vt = P.releasePointerCapture) == null || vt.call(P, et.pointerId), P.style.cursor = "grab", z.endDrag(), $h(t), C());
  };
  P.addEventListener("pointerup", ut), P.addEventListener("pointercancel", ut), P.addEventListener("pointerleave", (et) => {
    z.state.drag.active && ut(et);
  });
  const Nt = (et) => {
    var Ct, de, se;
    if (Wt(t, "event", { kind: "wheel", via: "stickers", interactiveView: u }), !gi(et, F) || !u) return;
    const vt = gv();
    z.applyWheelEvent(et) && C(), (Ct = et.preventDefault) == null || Ct.call(et), (de = et.stopPropagation) == null || de.call(et), (se = et.stopImmediatePropagation) == null || se.call(et), requestAnimationFrame(() => {
      var ye, Ae;
      mv(vt), (Ae = (ye = fe == null ? void 0 : fe.canvas) == null ? void 0 : ye.setDirty) == null || Ae.call(ye, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((et) => {
    F.addEventListener(et, Nt, { passive: !1, capture: !0 }), P.addEventListener(et, Nt, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((et) => {
    P.addEventListener(et, (vt) => gi(vt, F)), F.addEventListener(et, (vt) => gi(vt, F));
  });
  const Y = La(t, "state_json");
  if (Y && !Y.__panoPreviewPatchedCb) {
    Y.__panoPreviewPatchedCb = !0;
    const et = Y.callback;
    Y.callback = (vt) => {
      const Ct = et ? et(vt) : void 0;
      return C(), Ct;
    };
  }
  const it = La(t, "bg_color");
  if (it && !it.__panoPreviewPatchedCb) {
    it.__panoPreviewPatchedCb = !0;
    const et = it.callback;
    it.callback = (vt) => {
      const Ct = et ? et(vt) : void 0;
      return C(), Ct;
    };
  }
  const Z = t.onRemoved, ft = t.onResize, ot = t.onExecuted;
  t.onExecuted = function(et) {
    By(t, et), zc(t), xi(t), C();
    const vt = ot ? ot.apply(this, arguments) : void 0;
    return xi(t), vt;
  };
  const yt = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return zc(t), xi(t), C(), yt ? yt.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var vt;
    const et = ft ? ft.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Zo(this, 150), C(), (vt = this.setDirtyCanvas) == null || vt.call(this, !0, !1), et;
  }, t.onRemoved = function() {
    return Mt(), Sa.unregister(this), Ko.unregister(this), Z ? Z.apply(this, arguments) : void 0;
  };
  const Mt = () => {
    var et;
    B.raf && cancelAnimationFrame(B.raf), (et = ct == null ? void 0 : ct.disconnect) == null || et.call(ct), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = ft, t.onExecuted = ot, t.onConnectionsChange = yt, t.onRemoved = Z;
  };
  t.__panoDomRestore = Mt, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: O, root: A, canvas: P, requestDraw: C, state: B, emptyHintEl: H }, Q(), C();
}
function Vf(t, e = {}) {
  kh(t).attach({
    ...e,
    mode: "cutout"
  });
}
const Jo = Math.PI / 180;
function Yr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Hf(t, e) {
  return Yr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function uo(t, e) {
  return Yr(t.x * e, t.y * e, t.z * e);
}
function $f(t, e) {
  return Yr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function fo(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Yr(t.x / e, t.y / e, t.z / e);
}
function _v(t, e) {
  const n = t * Jo, r = e * Jo, a = Math.cos(r);
  return Yr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function wv(t, e, n = 0) {
  const r = _v(t, e), a = Yr(0, 1, 0);
  let s = $f(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Yr(1, 0, 0)), s = fo(s);
  const u = fo($f(r, s)), f = n * Jo, g = Math.cos(f), y = Math.sin(f), _ = Hf(uo(s, g), uo(u, y)), d = Hf(uo(s, -y), uo(u, g));
  return { fwd: r, right: fo(_), up: fo(d) };
}
const ho = 140, xv = 180, zf = 40, vc = 10;
function jf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":");
  return { full: e, tail: String(n[n.length - 1] || "").trim() };
}
function Uf(t, e) {
  const n = jf(t), r = jf(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Bf(t) {
  var s;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "").trim();
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e);
  const r = String(
    t.storage || (String(t.type || "").trim().toLowerCase() === "comfy_image" ? "output" : t.type) || "output"
  );
  n.set("type", r), t.subfolder && n.set("subfolder", String(t.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((s = en) == null ? void 0 : s.apiURL) == "function" ? en.apiURL(a) : a;
}
function Na(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Na(t[0]);
    const e = typeof t[0] == "string" ? String(t[0] || "").trim() : "";
    if (e)
      return Bf({
        filename: e,
        subfolder: String(t[1] || "").trim(),
        type: String(t[2] || "output").trim() || "output"
      });
    for (const n of t) {
      const r = Na(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Bf(t);
}
function Gf(t) {
  var a;
  const e = (a = pn) == null ? void 0 : a.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  if (e instanceof Map) {
    for (const s of e.keys())
      if (Uf(s, n)) return e.get(s);
  } else
    for (const s of Object.keys(e))
      if (Uf(s, n)) return e[s];
  return null;
}
function Sv(t, e = "erp_image") {
  var R, D, A, F, P, H, O, B, C, ct, Q, St;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let r = null;
  const a = n.find((z) => String((z == null ? void 0 : z.name) || "") === String(e));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const z = n.find((ut) => String((ut == null ? void 0 : ut.type) || "").toUpperCase() === "IMAGE" && (ut == null ? void 0 : ut.link) != null);
    (z == null ? void 0 : z.link) != null && (r = z.link);
  }
  if (r == null) return "";
  const s = ((D = (R = t == null ? void 0 : t.graph) == null ? void 0 : R.links) == null ? void 0 : D[r]) || ((P = (F = (A = pn) == null ? void 0 : A.graph) == null ? void 0 : F.links) == null ? void 0 : P[r]);
  if (!s) return "";
  const u = Number(s.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (B = (O = (H = pn) == null ? void 0 : H.graph) == null ? void 0 : O.getNodeById) == null ? void 0 : B.call(O, u), g = Gf(u), y = Gf(t == null ? void 0 : t.id), _ = [
    g == null ? void 0 : g.images,
    (C = g == null ? void 0 : g.ui) == null ? void 0 : C.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    (ct = y == null ? void 0 : y.ui) == null ? void 0 : ct.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const z of _)
    if (Array.isArray(z))
      for (const ut of z) {
        const Nt = Na(ut);
        if (Nt) return Nt;
      }
  let d = [];
  try {
    d = typeof ((Q = pn) == null ? void 0 : Q.getNodeImageUrls) == "function" ? pn.getNodeImageUrls(f) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const z of d) {
      const ut = Na(z);
      if (ut) return ut;
    }
  if (f) {
    const z = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const ut of z) {
      const Nt = Na(ut);
      if (Nt) return Nt;
    }
  }
  const M = (St = f == null ? void 0 : f.widgets) == null ? void 0 : St.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image"), I = String((M == null ? void 0 : M.value) || "").trim();
  return I ? en.apiURL(`/view?filename=${encodeURIComponent(I)}&type=input&subfolder=`) : "";
}
function Wf(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function Kf(t, e, n, r, a, s) {
  var d, M, I;
  if (e.clearRect(0, 0, n, r), e.fillStyle = "#070707", e.fillRect(0, 0, n, r), !s || !s.complete || !(s.naturalWidth || s.width) || n <= 1 || r <= 1) {
    Wf(e, n, r);
    return;
  }
  const u = wv(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * Jo * 0.5), g = Number(((I = (M = (d = t == null ? void 0 : t.widgets) == null ? void 0 : d.find) == null ? void 0 : M.call(d, (R) => (R == null ? void 0 : R.name) === "coverage")) == null ? void 0 : I.value) || 360) === 180 ? 180 : 360;
  t.__panoStandaloneCore || (t.__panoStandaloneCore = Li());
  const y = gs({
    stateRevision: [
      "standalone_preview_scene",
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0),
      g
    ].join("|"),
    backgroundSource: s,
    backgroundRevision: [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|"),
    coverageDeg: g,
    scene: ys(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!t.__panoStandaloneCore.syncState(y) && (() => {
    const R = t.__panoStandaloneCore.renderToTarget(
      "preview_node",
      ky(a, g),
      { width: n, height: r, dpr: window.devicePixelRatio || 1 }
    );
    return R ? (e.drawImage(R, 0, 0, n, r), !0) : !1;
  })() || (Xo(t, e, { x: 0, y: 0, w: n, h: r }, u, f, s, Go), Wf(e, n, r));
}
function qf(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class Nv {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = ms({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Oe(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: U(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: U(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, s, u, f;
        const r = (s = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : s.call(a);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((u = this.canvas) == null ? void 0 : u.clientWidth) || 0)),
          h: Math.max(1, Number((r == null ? void 0 : r.height) || ((f = this.canvas) == null ? void 0 : f.clientHeight) || 0))
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
      onRemoved: e.onRemoved,
      coverageWidgetCallback: null
    }, this.legacyDragPointer = !1, this.tick = this.tick.bind(this), this.onResizeDom = this.onResizeDom.bind(this);
  }
  attach() {
    var e;
    typeof ((e = this.node) == null ? void 0 : e.addDOMWidget) == "function" ? this.attachDom() : this.attachLegacy(), this.installCommonHooks(), this.refreshImage(), this.requestDraw();
  }
  installCommonHooks() {
    var r, a, s;
    const e = this;
    this.node.onExecuted = function() {
      const u = e.orig.onExecuted ? e.orig.onExecuted.apply(this, arguments) : void 0;
      return e.refreshImage(), u;
    }, this.node.onConnectionsChange = function() {
      const u = e.orig.onConnectionsChange ? e.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return e.refreshImage(), u;
    }, this.node.onResize = function() {
      const u = e.orig.onResize ? e.orig.onResize.apply(this, arguments) : void 0;
      return e.requestDraw(), u;
    }, this.node.onRemoved = function() {
      const u = e.orig.onRemoved ? e.orig.onRemoved.apply(this, arguments) : void 0;
      return e.teardown(), u;
    };
    const n = ((s = (a = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : a.find) == null ? void 0 : s.call(a, (u) => (u == null ? void 0 : u.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...u) => {
      const f = e.orig.coverageWidgetCallback ? e.orig.coverageWidgetCallback(...u) : void 0;
      return e.requestDraw(), f;
    });
  }
  installErrorForeground() {
    const e = this;
    this.node.onDrawForeground = function(n) {
      var s;
      const r = e.orig.onDrawForeground ? e.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (s = this.flags) != null && s.collapsed || !e.errorText) return r;
      const a = e.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(a.x, a.y, a.w, a.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(e.errorText, a.x + a.w * 0.5, a.y + a.h * 0.5), n.restore(), r;
    };
  }
  attachDom() {
    var e;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--stickers", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${ho}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = document.createElement("canvas"), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return ho;
        },
        getHeight() {
          return ho;
        },
        onRemove: () => this.teardown(),
        afterResize: () => this.requestDraw()
      };
      if (this.widget = this.node.addDOMWidget("preview", "preview", this.root, n), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const s = r ? r(a) || {} : {};
          return {
            ...s,
            minHeight: Math.max(ho, Number(s.minHeight || 0)),
            minWidth: Math.max(xv, Number(s.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (e = this.resizeObserver) == null || e.observe(this.root), this.bindDomInput(this.canvas, this.root), this.onResizeDom(), this.logProbeFrames();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  bindDomInput(e, n) {
    e.addEventListener("pointerdown", (a) => {
      var s, u, f;
      a.button === 0 && ((s = n.focus) == null || s.call(n, { preventScroll: !0 }), (u = e.setPointerCapture) == null || u.call(e, a.pointerId), e.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a));
    }), e.addEventListener("pointermove", (a) => {
      var s;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (s = a.stopImmediatePropagation) == null || s.call(a));
    });
    const r = (a) => {
      var s, u;
      this.controller.state.drag.active && ((s = e.releasePointerCapture) == null || s.call(e, a.pointerId), e.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    };
    e.addEventListener("pointerup", r), e.addEventListener("pointercancel", r), n.addEventListener("wheel", (a) => {
      var s;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (s = a.stopImmediatePropagation) == null || s.call(a);
    }, { passive: !1, capture: !0 });
  }
  attachLegacy() {
    const e = this;
    this.node.onDrawForeground = function(n) {
      const r = e.orig.onDrawForeground ? e.orig.onDrawForeground.apply(this, arguments) : void 0;
      return e.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var u;
      const a = e.localPoint(r);
      if (!a) return e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
      const s = e.getLegacyPreviewRect();
      return qf(a.x, a.y, s) ? (e.legacyDragPointer = !0, e.controller.startDrag(a.x - s.x, a.y - s.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var u;
      if (!e.legacyDragPointer || !e.controller.state.drag.active)
        return e.orig.onMouseMove ? e.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = e.localPoint(r);
      if (!a) return !0;
      const s = e.getLegacyPreviewRect();
      return e.controller.moveDrag(a.x - s.x, a.y - s.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !e.legacyDragPointer && !e.controller.state.drag.active ? e.orig.onMouseUp ? e.orig.onMouseUp.apply(this, arguments) : void 0 : (e.legacyDragPointer = !1, e.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, a) {
      var y, _, d, M, I, R;
      const s = Ro(this, n, r, a), u = e.getLegacyPreviewRect();
      if (!s || !qf(s.x, s.y, u))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof r == "number" ? r : 0));
      Number(((y = e.view) == null ? void 0 : y.fov) || 100);
      const g = e.controller.applyWheel(Math.sign(f));
      return Number(((_ = e.view) == null ? void 0 : _.fov) || 100), g && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (M = n == null ? void 0 : n.preventDefault) == null || M.call(n), (I = n == null ? void 0 : n.stopPropagation) == null || I.call(n), (R = n == null ? void 0 : n.stopImmediatePropagation) == null || R.call(n), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, s, u;
    const e = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - vc * 2), n = Math.max(60, Number(((u = (s = this.node) == null ? void 0 : s.size) == null ? void 0 : u[1]) || 0) - zf - vc);
    return { x: vc, y: zf, w: e, h: n };
  }
  drawLegacy(e) {
    var r, a;
    if (!e || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (e.save(), e.translate(n.x, n.y), Kf(this.node, e, n.w, n.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, n.w, n.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), e.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const e = this.root.getBoundingClientRect(), n = 1, r = Math.max(1, Math.round(e.width * n)), a = Math.max(1, Math.round(e.height * n));
    (this.canvas.width !== r || this.canvas.height !== a) && (this.canvas.width = r, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    const e = Sv(this.node, this.imageInputName);
    if (!e) {
      this.img = null, this.imgSrc = "", this.requestDraw();
      return;
    }
    if (e === this.imgSrc && this.img) return;
    this.imgSrc = e;
    const n = new Image();
    n.onload = () => {
      this.imgSrc === e && (this.img = n, this.requestDraw());
    }, n.onerror = () => {
      this.imgSrc === e && (this.img = null, this.requestDraw());
    }, n.src = e;
  }
  requestDraw() {
    var e, n;
    if (this.needsDraw = !0, this.inTick) {
      this.queuedDuringTick = !0;
      return;
    }
    this.rafId || (this.rafId = requestAnimationFrame(this.tick)), this.canvas || (n = (e = this.node).setDirtyCanvas) == null || n.call(e, !0, !1);
  }
  tick(e = performance.now()) {
    var a, s;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(e);
    this.canvas && this.ctx ? (Kf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (s = (a = this.node).setDirtyCanvas) == null || s.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  logProbeFrames() {
    if (!this.root || !this.canvas) return;
    let e = 0;
    const n = () => {
      !this.root || !this.canvas || e >= 3 || (e += 1, requestAnimationFrame(n));
    };
    requestAnimationFrame(n);
  }
  teardown() {
    var n, r, a, s, u, f, g, y, _;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || a.call(r), this.resizeObserver = null;
    try {
      (u = (s = this.root) == null ? void 0 : s.remove) == null || u.call(s);
    } catch {
    }
    if (Array.isArray((f = this.node) == null ? void 0 : f.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((d) => d !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const e = ((_ = (y = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : y.find) == null ? void 0 : _.call(y, (d) => (d == null ? void 0 : d.name) === "coverage")) || null;
    e && (e.callback = this.orig.coverageWidgetCallback), this.node.__panoPreviewNodeRuntime = null;
  }
}
function Mv(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const n = new Nv(t, e);
  t.__panoPreviewNodeRuntime = n, n.attach();
}
function kv(t, e, n) {
  if (!(t != null && t.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(e)}`;
  if (t[r]) return;
  t[r] = !0;
  const a = `[PanoramaPreview:${String(e)}]`, s = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const g = s ? s.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch (y) {
      try {
        console.warn(a, "onNodeCreated wiring skipped:", y);
      } catch {
      }
    }
    return g;
  };
  const u = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const g = u ? u.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch (y) {
      try {
        console.warn(a, "onConfigure wiring skipped:", y);
      } catch {
      }
    }
    return g;
  };
  const f = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const g = f ? f.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch (y) {
      try {
        console.warn(a, "onAdded wiring skipped:", y);
      } catch {
      }
    }
    return g;
  };
}
function Uh(t) {
  return !!(t != null && t.prototype);
}
function Uc(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function Pv(t, e = {}) {
  Uh(t) || Mv(t, {
    ...e,
    onOpen: Uc(t, e.onOpen)
  });
}
function Av(t, e = {}) {
  if (!Uh(t)) {
    Vf(t, {
      ...e,
      onOpen: Uc(t, e.onOpen)
    });
    return;
  }
  kv(t, "cutout_preview", (n) => {
    Vf(n, {
      ...e,
      onOpen: Uc(n, e.onOpen)
    });
  });
}
const sn = {
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
}, ar = "pen";
function Yf(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function Cv(t = 80, e = null, n = 8) {
  const r = [];
  let a = -1;
  const s = Math.max(1, Number(t || 80)), u = Math.max(1, Number(n || 8));
  function f(y) {
    if (r.splice(0, r.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((d) => {
      r.push(String(d || ""));
    }), !r.length)) return;
    const _ = Number(y.index);
    Number.isInteger(_) ? _ === -1 ? a = -1 : a = Math.max(0, Math.min(r.length - 1, _)) : a = r.length - 1;
  }
  function g(y) {
    r[a] !== y && (r.splice(a + 1), r.push(y), r.length > s && r.shift(), a = r.length - 1);
  }
  return f(e), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(y) {
      g(String(y || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const y = a - 1;
      return y < 0 || y >= r.length ? null : (a = y, r[a]);
    },
    redo() {
      const y = a + 1;
      return y < 0 || y >= r.length ? null : (a = y, r[a]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const y = r.length, _ = Math.max(0, y - u), d = a >= 0 ? Math.min(_, a) : _, M = r.slice(d), I = a < 0 ? -1 : Math.max(-1, Math.min(M.length - 1, a - d));
      return {
        version: 1,
        entries: M,
        index: I
      };
    },
    hydrate: f
  };
}
function te(t, e = null) {
  const n = Number(t);
  return Number.isFinite(n) ? n : e;
}
function Iv() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Ev(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    if (!r || typeof r != "object") continue;
    const a = String(r.actionGroupId || r.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const s = te(r.z_index ?? r.zIndex, e.length);
    e.push({
      id: String(r.id || a),
      type: "strokeGroup",
      actionGroupId: a,
      z_index: Math.max(0, Math.round(s ?? e.length)),
      locked: r.locked === !0
    });
  }
  return e;
}
function Tv(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Dv(t, e) {
  if (!t || typeof t != "object" || !e) return null;
  const n = te(t.t, 0), r = te(t.widthScale, null), a = te(t.pressureLike, null);
  if (e.kind === "ERP_GLOBAL") {
    const s = te(t.u, null), u = te(t.v, null);
    if (s == null || u == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (s % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  if (e.kind === "FRAME_LOCAL") {
    const s = te(t.u, null), u = te(t.v, null);
    if (s == null || u == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: e.frameId,
      u: s,
      v: u,
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  return null;
}
function po(t, e, n = 1) {
  if (!Array.isArray(t)) return null;
  const r = [];
  for (const a of t) {
    const s = Dv(a, e);
    if (!s) return null;
    r.push(s);
  }
  return r.length >= n ? r : null;
}
function Rv(t, e, n, r) {
  if (!t || typeof t != "object") return null;
  const a = String(t.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const g = po(t.points, e, 3);
    return g ? { geometryKind: a, points: g } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const s = po(t.points, e, 1);
  if (!s) return null;
  const u = po(t.rawPoints, e, 1), f = po(t.processedPoints, e, 1);
  return {
    geometryKind: a,
    points: s,
    rawPoints: u || s.map((g) => ({ ...g })),
    processedPoints: f || s.map((g) => ({ ...g }))
  };
}
function Lv(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = Tv(t.targetSpace);
  if (!n) return null;
  const r = String(t.toolKind || "").trim(), a = Rv(t.geometry, n, r, e === "paint");
  if (!a) return null;
  const s = te(t.size, null), u = te(t.opacity, null);
  if (s == null || u == null) return null;
  const f = String(t.id || "").trim(), g = String(t.actionGroupId || "").trim();
  if (!f || !g) return null;
  const y = te(t.radiusValue, null), _ = String(t.radiusModel || "").trim() || null;
  let d = null;
  if (e === "paint") {
    const M = t.color;
    if (!M || typeof M != "object") return null;
    d = {
      r: Math.max(0, Math.min(1, te(M.r, 0))),
      g: Math.max(0, Math.min(1, te(M.g, 0))),
      b: Math.max(0, Math.min(1, te(M.b, 0))),
      a: Math.max(0, Math.min(1, te(M.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: g,
    targetSpace: n,
    layerKind: e,
    toolKind: r,
    brushPresetId: String(t.brushPresetId || "").trim() || null,
    size: Math.max(0, s),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: te(t.hardness, null),
    flow: te(t.flow, null),
    spacing: te(t.spacing, null),
    createdAt: Math.trunc(te(t.createdAt, 0)),
    color: d,
    radiusModel: _,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function Xf(t, e) {
  const n = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return n;
  for (const r of t.strokes) {
    const a = Lv(r, e);
    a && n.strokes.push(a);
  }
  return n;
}
function Ov(t) {
  if (!t || typeof t != "object") return null;
  const e = te(t.u0, null), n = te(t.v0, null), r = te(t.u1, null), a = te(t.v1, null);
  if (e == null || n == null || r == null || a == null) return null;
  const s = (f) => Math.max(0, Math.min(1, f)), u = { u0: s(e), v0: s(n), u1: s(r), v1: s(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function Fv(t) {
  const e = t || {};
  return {
    du: te(e.du, 0) ?? 0,
    dv: te(e.dv, 0) ?? 0,
    rot_deg: te(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, te(e.scale, 1) ?? 1)
  };
}
function Vv(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const n = String(t.id || "").trim();
  if (!n) return null;
  const r = String(t.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const a = String(t.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const s = Ov(t.bbox);
  return s ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, te(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: s,
    rasterDataUrl: a,
    transform: Fv(t.transform)
  } : null;
}
function Hv(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    const a = Vv(r, e.length);
    !a || n.has(a.id) || (n.add(a.id), e.push(a));
  }
  return e;
}
function Ma(t) {
  const e = Iv();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: Ev(t.groups),
    paint: Xf(t.paint, "paint"),
    mask: Xf(t.mask, "mask"),
    raster_objects: Hv(t.raster_objects)
  };
}
const ne = {
  globe: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'/></svg>",
  // View toggle
  pano: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M1.5 8.2c1.9-2.2 4.1-3.3 6.5-3.3s4.6 1.1 6.5 3.3'/><path d='M2.6 10.9c1.5-1.5 3.3-2.3 5.4-2.3s3.9.8 5.4 2.3'/><circle cx='8' cy='12.2' r='1' fill='currentColor' stroke='none'/></svg>",
  unwrap: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='1.75' y='3' width='12.5' height='10' rx='2'/><path d='M5.9 3v10M10.1 3v10'/></svg>",
  camera: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.75 5.25H4.79C5.23 5.25 5.63 4.98 5.79 4.57L6.02 3.98C6.18 3.57 6.58 3.3 7.02 3.3H8.98C9.42 3.3 9.82 3.57 9.98 3.98L10.21 4.57C10.37 4.98 10.77 5.25 11.21 5.25H13.25C13.8 5.25 14.25 5.7 14.25 6.25V11.25C14.25 11.8 13.8 12.25 13.25 12.25H2.75C2.2 12.25 1.75 11.8 1.75 11.25V6.25C1.75 5.7 2.2 5.25 2.75 5.25Z'/><circle cx='8' cy='8.75' r='2.25'/></svg>",
  // Left toolbar
  cursor_tool: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 2.5 12.2 8l-4 1.2 1.8 4.3-1.8.8-1.9-4.3-2.6 2.2z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  palette_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z'/><path d='M7 13.5a2.5 2.5 0 0 0 2.5 2.5H11a2 2 0 0 1 0 4h-1'/><circle cx='7.5' cy='8.5' r='.9' fill='currentColor' stroke='none'/><circle cx='12' cy='6.5' r='.9' fill='currentColor' stroke='none'/><circle cx='16.5' cy='8.5' r='.9' fill='currentColor' stroke='none'/></svg>",
  circle_dashed_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10.1 2.6A9.9 9.9 0 0 1 13.9 2.6'/><path d='M17.8 4.2a9.9 9.9 0 0 1 2 2.8'/><path d='M21.4 10.1a9.9 9.9 0 0 1 0 3.8'/><path d='M19.8 17.8a9.9 9.9 0 0 1-2.8 2'/><path d='M13.9 21.4a9.9 9.9 0 0 1-3.8 0'/><path d='M6.2 19.8a9.9 9.9 0 0 1-2-2.8'/><path d='M2.6 13.9a9.9 9.9 0 0 1 0-3.8'/><path d='M4.2 6.2a9.9 9.9 0 0 1 2.8-2'/></svg>",
  image: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M2.5 2h11A1.5 1.5 0 0 1 15 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2ZM2 9.56l2.77-2.77a1 1 0 0 1 1.41 0l1.32 1.32 2.82-2.82a1 1 0 0 1 1.42 0L14 7.55V3.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v6.06Zm0 1.41V12.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8.97L10.8 5.76 7.85 8.7a.75.75 0 0 1-1.06 0L5.47 7.38 2 10.97ZM5.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z' fill='currentColor'/></svg>",
  plus_circle: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.75 4.25V5V7.25H11H11.75V8.75H11H8.75V11V11.75L7.25 11.75V11V8.75H5H4.25V7.25H5H7.25V5V4.25H8.75Z' fill='currentColor'/></svg>",
  clear: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  undo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M5.5 4.3 2.8 7l2.7 2.7'/><path d='M3.1 7h5.3a3.7 3.7 0 1 1 0 7.4'/></svg>",
  redo: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m10.5 4.3 2.7 2.7-2.7 2.7'/><path d='M12.9 7H7.6a3.7 3.7 0 1 0 0 7.4'/></svg>",
  // Floating right
  reset: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M8 3.2a4.8 4.8 0 1 1-4.8 4.8'/><path d='M3.2 3.2v3.6h3.6'/></svg>",
  eye: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M4.02168 4.76932C6.11619 2.33698 9.88374 2.33698 11.9783 4.76932L14.7602 7.99999L11.9783 11.2307C9.88374 13.663 6.1162 13.663 4.02168 11.2307L1.23971 7.99999L4.02168 4.76932ZM13.1149 3.79054C10.422 0.663244 5.57797 0.663247 2.88503 3.79054L-0.318359 7.5106V8.48938L2.88503 12.2094C5.57797 15.3367 10.422 15.3367 13.1149 12.2094L16.3183 8.48938V7.5106L13.1149 3.79054ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999Z' fill='currentColor'/></svg>",
  fullscreen: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z' fill='currentColor'/></svg>",
  // Paint dock
  pencil_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m3 21 3.8-1 10-10a2.1 2.1 0 0 0-3-3L3.8 17z'/><path d='m14.5 6.5 3 3'/></svg>",
  spray_can_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 6h6'/><path d='M12 3h2a2 2 0 0 1 2 2v1'/><path d='M9 8h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z'/><path d='M5 10h.01'/><path d='M3 14h.01'/><path d='M5 18h.01'/></svg>",
  highlighter_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m14 4 6 6'/><path d='m4 20 4.5-1 9-9-3.5-3.5-9 9z'/><path d='M13 7 17 11'/><path d='M3 21h7'/></svg>",
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  eraser_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m7 13.5 6.8-6.8a2.2 2.2 0 0 1 3.1 0l2.4 2.4a2.2 2.2 0 0 1 0 3.1l-6.8 6.8a2.2 2.2 0 0 1-1.5.6H7.8a2.2 2.2 0 0 1-1.6-.6l-1.5-1.5a2.2 2.2 0 0 1 0-3.1L7 13.5Z'/><path d='M13.5 19.5H21'/></svg>",
  lasso_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M7.2 18.8C4.6 18 3 16.2 3 14c0-3.9 4-7 9-7s9 3.1 9 7-4 7-9 7c-1.1 0-2.2-.1-3.1-.4'/><path d='M7 17c1 0 1.8.8 1.8 1.8S8 20.6 7 20.6s-1.8-.8-1.8-1.8S6 17 7 17Z'/></svg>"
}, Qo = {
  __name: "PanoIconButton",
  props: {
    tag: { type: String, default: "button" },
    type: { type: String, default: "button" },
    icon: { type: String, default: "" },
    label: { type: String, default: "" },
    tip: { type: String, default: "" },
    pressed: { type: [String, Boolean], default: null },
    extraClass: { type: [String, Array, Object], default: "" },
    attrs: { type: Object, default: () => ({}) }
  },
  setup(t) {
    const e = t, n = Ii(() => {
      const r = { ...e.attrs };
      return e.tag === "button" && r.type == null && (r.type = e.type), e.label && (r["aria-label"] = e.label), e.tip && (r["data-tip"] = e.tip), e.pressed != null && (r["aria-pressed"] = e.pressed), r;
    });
    return (r, a) => (we(), Fi(pm(t.tag), fh({
      class: ["pano-btn pano-btn-icon", t.extraClass]
    }, n.value, { innerHTML: t.icon }), null, 16, ["class", "innerHTML"]));
  }
}, $v = { class: "pano-floating-right" }, zv = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (we(), Fe("div", $v, [
      n[0] || (n[0] = ke("span", {
        class: "pano-fov-value",
        "data-fov-value": "",
        "aria-label": "Field of view"
      }, "100°", -1)),
      (we(!0), Fe(Ue, null, Ai(t.buttons, (r) => (we(), Fi(Qo, {
        key: r.action,
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { "data-action": r.action }
      }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, jv = {
  class: "pano-paint-dock is-hidden",
  "data-paint-dock": ""
}, Uv = ["data-paint-pane"], Bv = {
  key: 0,
  class: "pano-paint-color-float",
  "data-paint-color-row": "",
  hidden: ""
}, Gv = ["data-paint-color-swatch", "aria-label"], Wv = ["data-paint-footer"], Kv = ["data-paint-group"], qv = ["hidden"], Yv = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] }
  },
  setup(t) {
    function e(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    return (n, r) => (we(), Fe("div", jv, [
      (we(!0), Fe(Ue, null, Ai(t.panes, (a) => (we(), Fe("div", {
        key: a.key,
        class: "pano-paint-pane",
        "data-paint-pane": a.key
      }, [
        a.showColorFloat ? (we(), Fe("div", Bv, [
          (we(!0), Fe(Ue, null, Ai(t.paintSwatches, (s) => (we(), Fe("button", {
            key: s.id,
            class: "pano-paint-color-dot",
            type: "button",
            "data-paint-color-swatch": s.id,
            "aria-label": s.label,
            style: cs(e(s))
          }, null, 12, Gv))), 128)),
          r[0] || (r[0] = uh('<button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color"></button><div class="pano-paint-color-pop" data-paint-color-pop hidden><div class="pano-paint-color-pop-head"><span class="pano-paint-color-preview" data-paint-color-preview></span><span class="pano-paint-color-pop-label">Custom Color</span></div><div class="pano-paint-color-field"><div class="pano-paint-sv-panel" data-paint-color-sv><div class="pano-paint-sv-cursor" data-paint-color-sv-cursor></div></div><div class="pano-paint-hue-strip" data-paint-hue-strip><div class="pano-paint-hue-handle" data-paint-hue-handle></div></div></div><label class="pano-paint-color-field"><span>Opacity</span><div class="pano-paint-alpha-wrap"><input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider><span data-paint-alpha-value>100%</span></div></label><div class="pano-paint-color-history" data-paint-color-history-wrap><div class="pano-paint-color-history-list" data-paint-color-history></div></div></div>', 2))
        ])) : Ao("", !0),
        ke("div", {
          class: "pano-paint-footer",
          "data-paint-footer": a.footer
        }, [
          ke("div", {
            class: "pano-paint-footer-group",
            "data-paint-group": a.group
          }, [
            (we(!0), Fe(Ue, null, Ai(a.tools, (s) => (we(), Fi(Qo, {
              key: `${a.key}-${s.key}`,
              icon: s.icon,
              label: s.label,
              tip: s.tip,
              attrs: { [s.attr]: s.key }
            }, null, 8, ["icon", "label", "tip", "attrs"]))), 128))
          ], 8, Kv),
          r[1] || (r[1] = ke("div", {
            class: "pano-paint-size-row",
            "data-paint-size-row": "",
            hidden: ""
          }, [
            ke("input", {
              class: "pano-paint-size-slider",
              "data-paint-size-slider": "",
              type: "range",
              min: "1",
              max: "120",
              step: "1",
              value: "10"
            }),
            ke("span", {
              class: "pano-paint-size-value",
              "data-paint-size-value": ""
            }, "10")
          ], -1)),
          ke("div", {
            class: "pano-paint-clear-row",
            "data-paint-clear-row": "",
            hidden: a.clearHidden
          }, [
            nn(Qo, {
              icon: ol(ne).clear,
              label: a.clearLabel,
              tip: a.clearTip,
              "extra-class": "pano-paint-layer-clear",
              attrs: { "data-paint-layer-clear-current": a.clearTarget }
            }, null, 8, ["icon", "label", "tip", "attrs"])
          ], 8, qv)
        ], 8, Wv)
      ], 8, Uv))), 128))
    ]));
  }
}, Xv = {
  class: "pano-side",
  "data-side": ""
}, Zv = { class: "pano-side-head" }, Jv = ["innerHTML"], Qv = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" }
  },
  setup(t) {
    const e = t;
    function n(a) {
      return String(a || "").replace(/[&<>"']/g, (s) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[s]);
    }
    const r = Ii(() => `<span class="pano-side-title-icon" aria-hidden="true">${ne.globe}</span><span>${n(e.nodeTitle)}</span>`);
    return (a, s) => (we(), Fe("div", Xv, [
      ke("div", Zv, [
        ke("div", {
          class: "pano-side-title",
          innerHTML: r.value
        }, null, 8, Jv),
        s[0] || (s[0] = ke("div", { class: "pano-side-actions" }, null, -1))
      ]),
      s[1] || (s[1] = ke("div", { class: "pano-divider" }, null, -1))
    ]));
  }
}, tb = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, eb = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (we(), Fe("div", tb, [
      (we(!0), Fe(Ue, null, Ai(t.buttons, (r) => (we(), Fi(Qo, {
        key: r.key,
        "extra-class": {
          active: r.active,
          "pano-btn-icon-accent": r.accent
        },
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { [r.attr]: r.value }
      }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, nb = { class: "pano-floating-top" }, rb = ["data-view-count"], ib = ["data-view", "aria-pressed", "aria-label"], ab = ["innerHTML"], ob = { class: "label" }, sb = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (we(), Fe("div", nb, [
      ke("div", {
        class: "pano-view-toggle",
        "data-selected": "pano",
        "data-view-count": String(t.buttons.length)
      }, [
        (we(!0), Fe(Ue, null, Ai(t.buttons, (r) => (we(), Fe("button", {
          key: r.key,
          class: ls(["pano-view-btn", r.extraClass]),
          "data-view": r.key,
          "aria-pressed": r.pressed,
          "aria-label": r.label
        }, [
          ke("span", {
            innerHTML: r.icon
          }, null, 8, ab),
          ke("span", ob, dd(r.label), 1)
        ], 10, ib))), 128))
      ], 8, rb)
    ]));
  }
};
function Bh(t = "stickers") {
  const e = String(t || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: ne.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: ne.unwrap, pressed: "false", extraClass: "" },
      ...e ? [{ key: "frame", label: "Frame", icon: ne.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: ne.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: ne.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: ne.circle_dashed_tool, pressed: "false" },
      ...e ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: ne.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: ne.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: ne.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: ne.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: ne.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: ne.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: ne.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: ne.eye }
    ],
    paintPanes: [
      {
        key: "paint",
        footer: "paint",
        group: "paint",
        clearTarget: "paint",
        clearLabel: "Clear paint",
        clearTip: "Clear paint",
        clearHidden: !0,
        showColorFloat: !0,
        tools: [
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: ne.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: ne.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: ne.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: ne.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: ne.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: ne.lasso_tool }
        ]
      },
      {
        key: "mask",
        footer: "mask",
        group: "mask",
        clearTarget: "mask",
        clearLabel: "Clear mask",
        clearTip: "Clear mask",
        clearHidden: !1,
        showColorFloat: !1,
        tools: [
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: ne.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: ne.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: ne.lasso_tool }
        ]
      }
    ]
  };
}
const cb = ["aria-label"], lb = { class: "pano-stage-wrap" }, ub = ["innerHTML"], fb = {
  __name: "PanoModal",
  props: {
    open: { type: Boolean, default: !0 },
    type: { type: String, default: "stickers" },
    readOnly: { type: Boolean, default: !1 },
    hideSidebar: { type: Boolean, default: !1 },
    nodeTitle: { type: String, default: "Panorama Stickers" },
    paintSwatches: { type: Array, default: () => [] },
    shellPreset: { type: Object, default: null }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = t, r = e;
    let a = "", s = !1, u = null;
    const f = /* @__PURE__ */ V0(null), g = Ii(() => n.readOnly === !0), y = Ii(() => n.shellPreset || Bh(n.type)), _ = Ii(() => {
      var H;
      const P = Array.isArray((H = y.value) == null ? void 0 : H.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return g.value && P.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ne.fullscreen
      }), P;
    });
    function d() {
      const P = f.value;
      return P ? Array.from(P.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((H) => H instanceof HTMLElement ? !H.hidden && H.tabIndex >= 0 && H.offsetParent !== null : !1) : [];
    }
    function M() {
      var O;
      const H = d()[0] || f.value;
      (O = H == null ? void 0 : H.focus) == null || O.call(H);
    }
    function I() {
      var P;
      u != null && u.isConnected && ((P = u.focus) == null || P.call(u)), u = null;
    }
    function R(P) {
      var H, O, B, C;
      if (!P.defaultPrevented) {
        if (P.key === "Tab") {
          const ct = d();
          if (!ct.length) {
            P.preventDefault(), (O = (H = f.value) == null ? void 0 : H.focus) == null || O.call(H);
            return;
          }
          const Q = ct[0], St = ct[ct.length - 1], z = document.activeElement;
          if (P.shiftKey) {
            (z === Q || z === f.value || !((B = f.value) != null && B.contains(z))) && (P.preventDefault(), St.focus());
            return;
          }
          (z === St || !((C = f.value) != null && C.contains(z))) && (P.preventDefault(), Q.focus());
          return;
        }
        P.key === "Escape" && r("close");
      }
    }
    function D() {
      s || (a = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function A() {
      s && (document.body.style.overflow = a, s = !1);
    }
    function F(P) {
      document.removeEventListener("keydown", R), P ? (u || (u = document.activeElement), D(), document.addEventListener("keydown", R), Id(() => {
        M();
      })) : (A(), I());
    }
    return $d(() => {
      F(n.open);
    }), zd(() => {
      A(), document.removeEventListener("keydown", R), I();
    }), Mo(() => n.open, (P) => {
      F(P);
    }), (P, H) => t.open ? (we(), Fe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: H[0] || (H[0] = k1((O) => r("close"), ["self"]))
    }, [
      ke("section", {
        ref_key: "modalRef",
        ref: f,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": t.nodeTitle,
        tabindex: "-1"
      }, [
        ke("div", lb, [
          H[1] || (H[1] = uh('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          g.value ? Ao("", !0) : (we(), Fe(Ue, { key: 0 }, [
            nn(eb, {
              buttons: y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            nn(Yv, {
              "paint-swatches": t.paintSwatches,
              panes: y.value.paintPanes || []
            }, null, 8, ["paint-swatches", "panes"])
          ], 64)),
          nn(sb, {
            buttons: y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          nn(zv, { buttons: _.value }, null, 8, ["buttons"]),
          H[2] || (H[2] = ke("div", {
            class: "pano-selection-menu",
            "data-selection-menu": ""
          }, null, -1)),
          ke("button", {
            class: "pano-btn pano-btn-icon pano-output-preview-toggle",
            "data-action": "toggle-output-preview-size",
            "aria-label": "Expand Preview",
            "data-tip": "Expand preview",
            style: { display: "none" },
            innerHTML: ol(ne).fullscreen
          }, null, 8, ub),
          H[3] || (H[3] = ke("div", {
            class: "pano-tooltip",
            "data-tooltip": ""
          }, null, -1))
        ]),
        t.hideSidebar ? Ao("", !0) : (we(), Fi(Qv, {
          key: 0,
          "node-title": t.nodeTitle
        }, null, 8, ["node-title"]))
      ], 8, cb)
    ])) : Ao("", !0);
  }
}, ts = "state_json", Fr = "sticker_image_1", bc = "external_image", _c = "pano_sticker_input_images", Lo = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Le = Math.PI / 180, zr = 180 / Math.PI, es = 24, db = 4, hb = 4, pa = /* @__PURE__ */ new Map(), Bc = /* @__PURE__ */ new Map(), ga = /* @__PURE__ */ new Map(), Dt = {
  // Source: @geist-ui/icons globe.js (v1.0.2)
  globe: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' shape-rendering='geometricPrecision'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z'/></svg>",
  duplicate: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.3' y='5.3' width='7.7' height='7.7' rx='1.4'/><rect x='3' y='3' width='7.7' height='7.7' rx='1.4'/></svg>",
  replace_image: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m17 2 4 4-4 4'/><path d='M3 11v-1a4 4 0 0 1 4-4h14'/><path d='m7 22-4-4 4-4'/><path d='M21 13v1a4 4 0 0 1-4 4H3'/></svg>",
  bring_front: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 12V4'/><path d='m4.4 5.6 1.6-1.6 1.6 1.6'/><path d='M9.5 11h3.1M9.5 8h2.2M9.5 5h1.2'/></svg>",
  send_back: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 4v8'/><path d='m4.4 10.4 1.6 1.6 1.6-1.6'/><path d='M9.5 11h1.2M9.5 8h2.2M9.5 5h3.1'/></svg>",
  aspect: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.866 14.7041C13.9131 14.5727 12.9574 14.4687 12 14.3923V12.8876C12.8347 12.9523 13.6683 13.0373 14.4999 13.1426L14.5 9.00003H16L15.9999 14L15.9999 14.8605L15.1475 14.7429L14.866 14.7041ZM16 7.00003L16 2.49996L16 1.6394L15.1475 1.75699L14.866 1.79581C13.9131 1.92725 12.9574 2.03119 12 2.10765V3.61228C12.8347 3.54757 13.6683 3.46256 14.5 3.35727L14.5 7.00003H16ZM9.99998 2.22729V3.72844C8.66715 3.77999 7.33282 3.77999 5.99998 3.72844V2.22729C7.33279 2.28037 8.66718 2.28037 9.99998 2.22729ZM9.99998 14.2726V12.7715C8.66715 12.7199 7.33282 12.7199 5.99998 12.7715V14.2726C7.33279 14.2195 8.66718 14.2195 9.99998 14.2726ZM3.99998 14.3923C3.04258 14.4687 2.08683 14.5727 1.13391 14.7041L0.85242 14.7429L-0.0000610352 14.8605L-0.0000578761 14L-0.0000396322 9.00003H1.49996L1.49995 13.1426C2.33162 13.0373 3.16521 12.9523 3.99998 12.8876V14.3923ZM1.49997 7.00003L1.49998 3.35727C2.33164 3.46256 3.16522 3.54757 3.99998 3.61228V2.10765C3.0426 2.03119 2.08686 1.92725 1.13395 1.79581L0.852462 1.75699L-0.0000127554 1.6394L-0.0000159144 2.49995L-0.0000323345 7.00003H1.49997Z' fill='currentColor'/></svg>",
  rotate_90: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.21967 4.71967L5.68934 5.25L6.75 6.31066L7.28033 5.78033L9.25 3.81066V13.5C9.25 13.6381 9.13807 13.75 9 13.75H2.75H2V15.25H2.75H9C9.9665 15.25 10.75 14.4665 10.75 13.5V3.81066L12.7197 5.78033L13.25 6.31066L14.3107 5.25L13.7803 4.71967L10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L6.21967 4.71967Z' fill='currentColor'/></svg>",
  back_initial: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 14V2.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M4.5 3.5h6.2l-1.6 2.2 1.6 2.2H4.5z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M12.8 12.2H7.2' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='m8.9 10.6-1.7 1.6 1.7 1.6' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  delete: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
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
  circle_dashed_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10.1 2.6A9.9 9.9 0 0 1 13.9 2.6'/><path d='M17.8 4.2a9.9 9.9 0 0 1 2 2.8'/><path d='M21.4 10.1a9.9 9.9 0 0 1 0 3.8'/><path d='M19.8 17.8a9.9 9.9 0 0 1-2.8 2'/><path d='M13.9 21.4a9.9 9.9 0 0 1-3.8 0'/><path d='M6.2 19.8a9.9 9.9 0 0 1-2-2.8'/><path d='M2.6 13.9a9.9 9.9 0 0 1 0-3.8'/><path d='M4.2 6.2a9.9 9.9 0 0 1 2.8-2'/></svg>",
  // Source: Lucide paintbrush-vertical
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  lock_closed: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z' fill='currentColor'></path></svg>",
  lock_open: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14 6V4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5V6H10.5H12V7.5V12.5C12 13.8807 10.8807 15 9.5 15H2.5C1.11929 15 0 13.8807 0 12.5V7.5V6H1.5H8.5V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V6H14ZM10.5 7.5H10H8.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H9.5C10.0523 13.5 10.5 13.0523 10.5 12.5V7.5Z' fill='currentColor'></path></svg>"
};
function ze(t) {
  return Number(t) === 180 ? 180 : 360;
}
function pb(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function gb(t) {
  return 1 - Math.pow(1 - t, 3);
}
function mb(t) {
  return t * t * t;
}
function Yn(t, e, n) {
  return { x: t, y: e, z: n };
}
function go(t, e) {
  return Yn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function mo(t, e) {
  return Yn(t.x * e, t.y * e, t.z * e);
}
function Mn(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function yo(t, e) {
  return Yn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function mi(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Yn(t.x / e, t.y / e, t.z / e);
}
function zn(t, e) {
  const n = t * Le, r = e * Le, a = Math.cos(r);
  return Yn(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function vo(t) {
  return {
    yaw: Oe(Math.atan2(t.x, t.z) * zr),
    pitch: U(Math.asin(U(t.y, -1, 1)) * zr, -90, 90)
  };
}
function or(t, e) {
  let n = !1;
  for (let r = 0, a = e.length - 1; r < e.length; a = r++) {
    const s = e[r].x, u = e[r].y, f = e[a].x, g = e[a].y;
    u > t.y != g > t.y && t.x < (f - s) * (t.y - u) / (g - u || 1e-6) + s && (n = !n);
  }
  return n;
}
function $r(t, e) {
  const n = t.x - e.x, r = t.y - e.y;
  return n * n + r * r;
}
function wc(t, e, n) {
  const r = Number(n.x || 0) - Number(e.x || 0), a = Number(n.y || 0) - Number(e.y || 0), s = Number(t.x || 0) - Number(e.x || 0), u = Number(t.y || 0) - Number(e.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return $r(t, e);
  const g = U((s * r + u * a) / f, 0, 1), y = Number(e.x || 0) + r * g, _ = Number(e.y || 0) + a * g, d = Number(t.x || 0) - y, M = Number(t.y || 0) - _;
  return d * d + M * M;
}
function kn(t, e, n) {
  return t + (e - t) * n;
}
function Pn(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(U(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(U(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(U(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${U(n, 0, 1)})`;
}
function yb(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let bo = { fillStyle: "", url: "" };
function vb(t, e, n) {
  if (bo.url && bo.fillStyle === String(t || ""))
    return bo.url;
  const r = yb(`
<svg xmlns="http://www.w3.org/2000/svg" width="${es}" height="${es}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return bo = { fillStyle: String(t || ""), url: r }, r;
}
function Oo(t, e, n = 0.015) {
  return !t || !e ? !1 : Math.abs(Number(t.r ?? 0) - Number(e.r ?? 0)) <= n && Math.abs(Number(t.g ?? 0) - Number(e.g ?? 0)) <= n && Math.abs(Number(t.b ?? 0) - Number(e.b ?? 0)) <= n && Math.abs(Number(t.a ?? 1) - Number(e.a ?? 1)) <= n;
}
function hn(t) {
  return {
    r: U(Number((t == null ? void 0 : t.r) ?? 0), 0, 1),
    g: U(Number((t == null ? void 0 : t.g) ?? 0), 0, 1),
    b: U(Number((t == null ? void 0 : t.b) ?? 0), 0, 1),
    a: U(Number((t == null ? void 0 : t.a) ?? 1), 0, 1)
  };
}
function cn(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function bb(t) {
  return Lo.some((e) => Oo(t, e.color));
}
function xc(t, e, n) {
  const r = (Number(t) % 1 + 1) % 1, a = U(Number(e), 0, 1), s = U(Number(n), 0, 1);
  if (a <= 1e-6) return { r: s, g: s, b: s };
  const u = Math.floor(r * 6), f = r * 6 - u, g = s * (1 - a), y = s * (1 - f * a), _ = s * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: s, g: _, b: g };
    case 1:
      return { r: y, g: s, b: g };
    case 2:
      return { r: g, g: s, b: _ };
    case 3:
      return { r: g, g: y, b: s };
    case 4:
      return { r: _, g, b: s };
    default:
      return { r: s, g, b: y };
  }
}
function la(t) {
  const e = U(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), n = U(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), r = U(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), a = Math.max(e, n, r), s = Math.min(e, n, r), u = a - s;
  let f = 0;
  u > 1e-6 && (a === e ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : a === n ? f = ((r - e) / u + 2) / 6 : f = ((e - n) / u + 4) / 6);
  const g = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: g, v: a };
}
function Sc(t) {
  const e = Number(t);
  return Number.isFinite(e) ? Number(e.toFixed(3)).toString() : "0";
}
function Zf(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : Number(e);
}
function Gh(t, e) {
  const n = Zf(t, 1), r = Zf(e, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, s = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(r * a)), f = (d, M) => M ? f(M, d % M) : d, g = f(s, u) || 1, y = Math.max(1, Math.round(s / g)), _ = Math.max(1, Math.round(u / g));
  return `${y}:${_}`;
}
function Gc(t) {
  const e = U(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * Le, n = U(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * Le;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function _b(t) {
  const e = Number(t);
  if (!Number.isFinite(e) || e <= 0) return "1:1";
  const n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ], r = 0.015;
  for (const [a, s] of n)
    if (Math.abs(e - s) <= r) return a;
  return "";
}
function jr(t) {
  const e = Gc(t);
  return _b(e) || Gh(e, 1);
}
function wb(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = jr(e), e;
}
function yi(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : jr(t);
}
let _o = null;
function xb() {
  return _o || (_o = new Promise((t) => {
    const e = document.getElementById("pano-suite-style-link");
    if (e) {
      if (e.dataset.loaded === "true") {
        t();
        return;
      }
      e.addEventListener("load", () => {
        e.dataset.loaded = "true", t();
      }, { once: !0 }), e.addEventListener("error", () => t(), { once: !0 });
      return;
    }
    const n = document.createElement("link");
    n.id = "pano-suite-style-link", n.rel = "stylesheet", n.href = new URL("./pano_editor.css", import.meta.url).toString(), n.addEventListener("load", () => {
      n.dataset.loaded = "true", t();
    }, { once: !0 }), n.addEventListener("error", () => t(), { once: !0 }), document.head.appendChild(n);
  }), _o);
}
const Wh = "pano_suite.ui_settings.v1", Kh = "pano_suite.node_grid_visibility.v1";
let Si = null, jn = null, wo = { text: null, parsed: null };
function ka(t) {
  const e = t && typeof t == "object" ? t : {}, n = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function Sb() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Wh)) || "").trim();
    if (!e) return Si ? ka(Si) : null;
    const n = JSON.parse(e), r = ka(n);
    return Si = r, r;
  } catch {
    return Si ? ka(Si) : null;
  }
}
function Nb(t) {
  var n;
  const e = ka(t);
  Si = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Wh, JSON.stringify(e));
  } catch {
  }
  return e;
}
function qh() {
  var t;
  if (jn && typeof jn == "object")
    return jn;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Kh)) || "").trim();
    if (!e)
      return jn = {}, jn;
    const n = JSON.parse(e);
    return jn = n && typeof n == "object" ? n : {}, jn;
  } catch {
    return jn = {}, jn;
  }
}
function Mb(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const a = qh()[n];
  return typeof a == "boolean" ? a : !!e;
}
function kb(t, e) {
  var a;
  const n = String(t ?? "").trim();
  if (!n) return;
  const r = qh();
  r[n] = !!e, jn = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Kh, JSON.stringify(r));
  } catch {
  }
}
function Pb(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([n, r]) => {
    e[n] = r && typeof r == "object" ? { ...r } : r;
  }), e;
}
function Ab(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const n = { ...e };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Cb(t) {
  var r, a;
  const e = Array.isArray((r = t == null ? void 0 : t.paint) == null ? void 0 : r.strokes) ? t.paint.strokes.length : 0, n = Array.isArray((a = t == null ? void 0 : t.mask) == null ? void 0 : a.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: n };
}
function Jf(t) {
  const { paintCount: e, maskCount: n } = Cb(t), r = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
  let a = 0, s = 0;
  return r.forEach((u) => {
    String((u == null ? void 0 : u.layerKind) || "paint") === "mask" ? s += 1 : a += 1;
  }), {
    paintCount: e,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: s,
    totalPaintCount: e + a,
    totalMaskCount: n + s
  };
}
function vi(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Qf(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function Ib(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : wb(e)) : [];
}
function Eb(t, e = 2048, n = "#00ff00", r = 360) {
  const a = Sb(), s = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: ze(r),
    bg_color: n,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Ma(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(a != null && a.invert_view_x),
      invert_view_y: !!(a != null && a.invert_view_y),
      preview_quality: String((a == null ? void 0 : a.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, u = String(t || "").trim();
  if (!u) return s;
  try {
    let f = null;
    if (wo.text === u ? f = wo.parsed : (f = JSON.parse(u), wo = { text: u, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return s;
    const g = {
      ...s,
      ...f,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Pb(f.assets),
      stickers: Ab(f.stickers),
      shots: Ib(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: Ma(f.painting),
      painting_layer: f.painting_layer && typeof f.painting_layer == "object" ? f.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(f.ui_settings && f.ui_settings.invert_view_x),
        invert_view_y: !!(f.ui_settings && f.ui_settings.invert_view_y),
        preview_quality: (() => {
          var _;
          const y = String(((_ = f.ui_settings) == null ? void 0 : _.preview_quality) || "balanced");
          return y === "draft" || y === "balanced" || y === "high" ? y : "balanced";
        })()
      },
      active: f.active && typeof f.active == "object" ? { ...f.active } : { ...s.active }
    };
    return a && (g.ui_settings = ka({ ...g.ui_settings, ...a })), g.output_preset = Kc(e, Number(g.output_preset || s.output_preset)), g.bg_color = String(n || g.bg_color || s.bg_color), g.coverage = ze(r), delete g.editor_history, g;
  } catch {
    return wo = { text: u, parsed: null }, s;
  }
}
function yn(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function Yh(t) {
  if (!t || t.__panoCoverageWidgetSyncInstalled) return;
  const e = yn(t, "coverage");
  if (!e) return;
  const n = typeof e.callback == "function" ? e.callback.bind(e) : null;
  e.callback = function(...r) {
    var s, u, f, g, y, _, d, M, I, R;
    const a = n ? n(...r) : void 0;
    return t.__panoStateCache = null, t.__panoLiveStateOverride = null, t.__panoWrappedErpCache = null, t.__panoPanoBackgroundCache = null, (u = (s = t.__panoPreviewNodeRuntime) == null ? void 0 : s.requestDraw) == null || u.call(s), (g = (f = t.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (y = t.setDirtyCanvas) == null || y.call(t, !0, !0), (d = (_ = t.graph) == null ? void 0 : _.setDirtyCanvas) == null || d.call(_, !0, !0), (R = (I = (M = pn) == null ? void 0 : M.canvas) == null ? void 0 : I.setDirty) == null || R.call(I, !0, !0), a;
  }, t.__panoCoverageWidgetSyncInstalled = !0;
}
function Tb(t) {
  const e = String(t ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(e) || /^#?[0-9a-fA-F]{3}$/.test(e);
}
function td(t) {
  const e = String(t ?? "").trim();
  return e.startsWith("{") && e.endsWith("}");
}
function Db(t) {
  var I, R, D, A, F;
  if (!t || t.__panoCoverageWidgetOrderMigrated) return;
  const e = yn(t, "coverage"), n = yn(t, "bg_color"), r = yn(t, ts), a = yn(t, "sticker_state");
  if (!e || !n || !r) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const s = String(e.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(s) && Tb(s) && (td(u) || u === ""))) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (td(u))
    try {
      const P = JSON.parse(u);
      y = String(ze(P == null ? void 0 : P.coverage));
    } catch {
      y = "360";
    }
  const _ = s, d = u, M = f;
  e.value = y, (I = e.callback) == null || I.call(e, y), n.value = _, (R = n.callback) == null || R.call(n, _), r.value = d, (D = r.callback) == null || D.call(r, d), a && (a.value = M, (A = a.callback) == null || A.call(a, M)), (F = t.setDirtyCanvas) == null || F.call(t, !0, !0), t.__panoCoverageWidgetOrderMigrated = !0;
}
function xo(t) {
  return String(t ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function Rb(t, e) {
  const n = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "").trim(), r = {
    PanoramaStickers: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return r[n] ? r[n] : n || (e === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Lb(t, e) {
  (Array.isArray(t == null ? void 0 : t.widgets) ? t.widgets : []).forEach((r) => {
    var s, u;
    const a = String((r == null ? void 0 : r.name) || "");
    (a === e || a.trim() === e || a.toLowerCase().includes(String(e).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (s = r.inputEl) != null && s.style && (r.inputEl.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function Wc(t, e, n) {
  var s, u;
  if (!t || typeof t.addWidget != "function") return null;
  let a = (Array.isArray(t.widgets) ? t.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(e));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (s = a.inputEl) != null && s.style && (a.inputEl.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = t == null ? void 0 : t.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), a) : (a = t.addWidget("button", e, null, n), a && (a.serialize = !1), a);
}
function ua(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Kc(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : e;
}
function Ob() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ed(t, e) {
  Ob() && console.warn(`[PANO_PAINT][${t}]`, e);
}
function Xh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Fb(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Zh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Vb(t, e, n = null) {
  var a, s;
  let r = null;
  try {
    r = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const u = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, f = u ? (s = r.resolveSubgraphOutputLink) == null ? void 0 : s.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = Fb(t == null ? void 0 : t.graph, n)), r;
}
function ns(t) {
  var a;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const r = `/view?${n.toString()}`;
  return typeof ((a = en) == null ? void 0 : a.apiURL) == "function" ? en.apiURL(r) : r;
}
function Hb(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function $b(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function zb(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function Jh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Hb(e)) return [e];
  const { filename: n, subfolder: r } = $b(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => ns({
    filename: n,
    subfolder: r,
    type: s
  }));
  return zb([...a, e]);
}
function jb(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? ns({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function Pa(t) {
  var r;
  const e = (r = pn) == null ? void 0 : r.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  return e instanceof Map ? e.get(t) || e.get(n) || e.get(Number(n)) || null : e[t] || e[n] || null;
}
function Oi(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Oi(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return ns({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Oi(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : ns(t);
}
function Ub(t, e = -1) {
  var a;
  const n = [];
  Array.isArray(t == null ? void 0 : t.images) && t.images.length && n.push(t.images), Array.isArray((a = t == null ? void 0 : t.ui) == null ? void 0 : a.images) && t.ui.images.length && n.push(t.ui.images);
  const r = [];
  for (const s of n)
    !Array.isArray(s) || !s.length || (e >= 0 && e < s.length && r.push(s[e]), r.push(...s));
  return r;
}
function Nc(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t || []) {
    const a = Oi(r);
    !a || n.has(a) || (n.add(a), e.push(a));
  }
  return e;
}
function Bb(t, e, n, r = null) {
  var d;
  const a = Pa(t == null ? void 0 : t.id), s = Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d[e]) ? a.ui[e] : Array.isArray(a == null ? void 0 : a[e]) ? a[e] : [], u = Array.isArray(s) && s.length ? s[0] : null, f = Oi(u);
  if (!f) return null;
  const g = `__ui__${e}`, y = n.get(g);
  if (y && y.__panoSrc === f) return y;
  const _ = new Image();
  return _.__panoSrc = f, _.onload = () => {
    typeof r == "function" && r(_);
  }, _.src = f, n.set(g, _), _;
}
function Gb(t, e) {
  var P, H;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], a = r.findIndex((O) => String((O == null ? void 0 : O.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const s = r[a], u = s == null ? void 0 : s.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = Xh(t.graph, u), { originId: g, originSlot: y } = Zh(f);
  if (g == null) return { src: "", sourceType: "", inputName: n };
  const _ = Vb(t, a, g), d = Number(y || 0);
  if (!_) return { src: "", sourceType: "", inputName: n };
  let M = [];
  try {
    M = typeof ((P = pn) == null ? void 0 : P.getNodeImageUrls) == "function" ? pn.getNodeImageUrls(_) || [] : [];
  } catch {
    M = [];
  }
  if (Array.isArray(M) && M.length) {
    const O = [];
    d >= 0 && d < M.length && O.push(M[d]), O.push(...M);
    const B = Nc(O);
    if (B.length) return { src: B[0], srcCandidates: B, sourceType: "appNodeImageUrls", inputName: n };
  }
  const I = Pa((_ == null ? void 0 : _.id) ?? g), R = Ub(I, d), D = Nc(R);
  if (D.length) return { src: D[0], srcCandidates: D, sourceType: "nodeOutputs", inputName: n };
  const A = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
  if (A.length) {
    const O = [];
    d >= 0 && d < A.length && O.push(A[d]), O.push(...A);
    const B = Nc(O);
    if (B.length) return { src: B[0], srcCandidates: B, sourceType: "nodeImgs", inputName: n };
  }
  const F = (H = _ == null ? void 0 : _.widgets) == null ? void 0 : H.find((O) => String((O == null ? void 0 : O.name) || "").toLowerCase() === "image");
  if (F) {
    let O = Oi(F.value);
    if (O && !O.includes("/") && !O.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (O = en.apiURL(`/view?filename=${encodeURIComponent(O)}&type=input&subfolder=`)), O) return { src: O, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function Wb(t, e, n, r = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const s = Jh(a);
  if (!s.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(e || "image"), f = t.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === a && f.img) return f.img;
  const g = new Image(), y = { srcRaw: a, resolvedSrc: "", img: g };
  t.__panoLinkedInputImageCache.set(u, y);
  let _ = -1;
  const d = () => {
    var I, R;
    if (_ += 1, _ >= s.length) {
      try {
        (R = (I = t.__panoLinkedInputImageCache) == null ? void 0 : I.delete) == null || R.call(I, u);
      } catch {
      }
      return;
    }
    const M = s[_];
    y.resolvedSrc = M, g.src = M;
  };
  return g.onload = () => {
    var M;
    r == null || r(), (M = t.setDirtyCanvas) == null || M.call(t, !0, !0);
  }, g.onerror = () => {
    var M, I;
    if (_ + 1 < s.length) {
      d();
      return;
    }
    try {
      (I = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || I.call(M, u);
    } catch {
    }
  }, d(), g;
}
function Kb(t, e, n, r = null) {
  const a = Array.isArray(n) ? n.map((R) => String(R || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = String(e || "image"), u = a.join(`
`), f = t.__panoLinkedInputImageCache.get(s);
  if (f && f.srcRaw === u && f.img) return f.img;
  const g = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((R) => {
    Jh(R).forEach((D) => {
      const A = String(D || "").trim();
      !A || y.has(A) || (y.add(A), g.push(A));
    });
  }), !g.length) return null;
  const _ = new Image(), d = { srcRaw: u, resolvedSrc: "", img: _ };
  t.__panoLinkedInputImageCache.set(s, d);
  let M = -1;
  const I = () => {
    var D, A;
    if (M += 1, M >= g.length) {
      try {
        (A = (D = t.__panoLinkedInputImageCache) == null ? void 0 : D.delete) == null || A.call(D, s);
      } catch {
      }
      return;
    }
    const R = g[M];
    d.resolvedSrc = R, _.src = R;
  };
  return _.onload = () => {
    var R;
    r == null || r(), (R = t.setDirtyCanvas) == null || R.call(t, !0, !0);
  }, _.onerror = () => {
    var R, D;
    if (M + 1 < g.length) {
      I();
      return;
    }
    try {
      (D = (R = t.__panoLinkedInputImageCache) == null ? void 0 : R.delete) == null || D.call(R, s);
    } catch {
    }
  }, I(), _;
}
function Qh(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const r of n) {
    const a = Gb(t, r);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function nd(t, e = [], n = null, r = "") {
  const a = Array.isArray(e) ? e : [e], s = Qh(t, a), u = String(r || a.join("|") || "image_exact"), f = Array.isArray(s == null ? void 0 : s.srcCandidates) ? s.srcCandidates : [];
  if (f.length) return Kb(t, u, f, n);
  const g = String((s == null ? void 0 : s.src) || "").trim();
  return g ? Wb(t, u, g, n) : null;
}
async function Aa(t, e, n = {}) {
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, s = r, u = Rb(t, e);
  await xb();
  const f = yn(t, "output_preset"), g = yn(t, "coverage"), y = yn(t, "bg_color"), _ = yn(t, ts), d = Eb(
    String((_ == null ? void 0 : _.value) || ""),
    Kc(f == null ? void 0 : f.value, 2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    ze(g == null ? void 0 : g.value)
  );
  t.__panoLiveStateOverride = JSON.stringify(d), e === "cutout" && (d.shots = Array.isArray(d.shots) ? d.shots.slice(0, 1) : [], d.shots.length || (d.active.selected_shot_id = null));
  const M = document.createElement("div");
  document.body.appendChild(M);
  const I = C1(fb, {
    open: !0,
    type: e,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: Bh(e),
    paintSwatches: Lo.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Pn(i.color, 1)
    })),
    onClose: () => li()
  });
  try {
    I.mount(M);
  } catch (i) {
    try {
      I.unmount();
    } catch {
    }
    throw M.remove(), i;
  }
  const R = M.querySelector(".pano-modal-overlay"), D = M.querySelector(".pano-modal"), A = D == null ? void 0 : D.querySelector("[data-stage-overlay]"), F = D == null ? void 0 : D.querySelector("[data-stage-background]"), P = D == null ? void 0 : D.querySelector(".pano-stage-wrap");
  if (!R || !D || !A || !F || !P)
    throw I.unmount(), M.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const H = document.createElement("div");
  H.setAttribute("aria-hidden", "true"), H.style.position = "absolute", H.style.left = "0", H.style.top = "0", H.style.pointerEvents = "none", H.style.zIndex = "12", H.style.display = "none", H.style.willChange = "transform,width,height,background,border-radius", P == null || P.appendChild(H);
  const O = document.createElement("div");
  O.className = "pano-paint-size-preview", O.setAttribute("aria-hidden", "true");
  const B = document.createElement("div");
  B.className = "pano-paint-size-preview-sample", O.appendChild(B), P == null || P.appendChild(O);
  const C = A.getContext("2d"), ct = Li(), Q = Li(), St = D.querySelector("[data-side]"), z = D.querySelectorAll("[data-view]"), ut = D.querySelector(".pano-view-toggle"), Nt = D.querySelector("[data-fov-value]"), Y = D.querySelector("[data-selection-menu]"), it = D.querySelector("[data-action='toggle-output-preview-size']"), Z = D.querySelector("[data-tool-ui-action='add-or-look']"), ft = D.querySelector("[data-view='frame']"), ot = D.querySelector("[data-action='toggle-fullscreen']"), yt = D.querySelector("[data-tooltip]"), Mt = D.querySelector("[data-tool-rail]"), Et = D.querySelector("[data-paint-dock]"), et = Array.from(D.querySelectorAll("[data-paint-pane]")), vt = D.querySelector("[data-paint-color-row]"), Ct = D.querySelector("[data-paint-color-pop]"), de = D.querySelector("[data-paint-color-preview]"), se = D.querySelector("[data-paint-color-sv]"), ye = D.querySelector("[data-paint-color-sv-cursor]"), Ae = D.querySelector("[data-paint-hue-strip]"), Ke = D.querySelector("[data-paint-hue-handle]"), Ve = D.querySelector("[data-paint-alpha-slider]"), an = D.querySelector("[data-paint-alpha-value]"), Qn = D.querySelector("[data-paint-color-history-wrap]"), x = D.querySelector("[data-paint-color-history]"), E = Array.from(D.querySelectorAll("[data-paint-size-row]")), V = Array.from(D.querySelectorAll("[data-paint-clear-row]")), q = Array.from(D.querySelectorAll("[data-paint-layer-clear-current]")), G = Array.from(D.querySelectorAll("[data-paint-size-slider]")), W = Array.from(D.querySelectorAll("[data-paint-size-value]"));
  let J = 0, nt = 0;
  P == null || P.removeAttribute("data-stage-ready"), P == null || P.setAttribute("data-stage-loading-kind", "boot"), A.style.opacity = "1", F.style.opacity = "0", a && (St == null || St.remove(), D.classList.add("pano-modal-readonly"));
  function tt(i) {
    Et && Et.classList.toggle("is-hidden", !i);
  }
  const X = () => {
    if (!p.customPaintSessionStart) return;
    if (Oo(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (bb(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      hn(p.customPaintColor),
      ...p.customPaintHistory.filter((o) => !Oo(o, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, mt = (i = !1) => {
    !Ct || Ct.hidden || (i ? X() : p.customPaintSessionStart = null, Ct.hidden = !0);
  }, rt = () => {
    Ct && (Ct.hidden && (p.customPaintSessionStart = hn(p.customPaintColor)), Ct.hidden = !1);
  };
  D.addEventListener("pointerdown", (i) => {
    Qa(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (D.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), mt(!0), e === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, zt(), dt())));
  });
  const wt = e === "stickers" || e === "cutout" ? d.active.selected_sticker_id : d.active.selected_shot_id, Tt = JSON.stringify(Qf(d)), p = {
    mode: "pano",
    selectedId: wt,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: ze(d.coverage),
    historyController: Cv(80, { entries: [Tt], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: ar,
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
    showGrid: Mb(t == null ? void 0 : t.id, !0),
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
    paintEngine: Oc(),
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
  e === "stickers" && (p.selectedId = null, d.active.selected_sticker_id = null), p.selectedIds = p.selectedId ? [p.selectedId] : [];
  const jt = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), It = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: e === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, Se = {
    timer: 0,
    target: null
  }, Te = {
    active: !1,
    depth: 0
  };
  function Zr(i) {
    const o = i == null ? void 0 : i.dataTransfer;
    if (!o) return !1;
    if (o.items && o.items.length) {
      for (const c of o.items) {
        if (!c || c.kind !== "file") continue;
        const l = String(c.type || "").toLowerCase();
        if (!l || l.startsWith("image/")) return !0;
      }
      return !1;
    }
    return o.files && o.files.length ? Array.from(o.files).some((c) => Ya(c)) : !1;
  }
  function Ne(i) {
    const o = !!i;
    Te.active !== o && (Te.active = o, P.classList.toggle("drop-active", o));
  }
  function on(i, o, c = p.viewFov, l = 140, h = 620) {
    const m = my(p.viewYaw, i), w = o - p.viewPitch, v = c - p.viewFov, b = Math.hypot(m, w) + Math.abs(v) * 0.6, N = Math.round(U(l + b * 2.2, l, h));
    p.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: N,
      startYaw: p.viewYaw,
      startPitch: p.viewPitch,
      startFov: p.viewFov,
      targetPitch: o,
      targetFov: c,
      deltaYaw: m
    }, p.viewInertia.active = !1, p.viewInertia.vx = 0, p.viewInertia.vy = 0, dt();
  }
  Ap();
  function bn() {
    return e === "stickers" ? d.stickers : d.shots;
  }
  function Ie() {
    const i = d.painting || (d.painting = Ma(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function tp(i = "paint") {
    var h, m;
    const o = Array.isArray((m = (h = d.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? d.painting[i].strokes : [], c = [], l = /* @__PURE__ */ new Set();
    for (const w of o) {
      const v = String((w == null ? void 0 : w.actionGroupId) || "").trim();
      !v || l.has(v) || (l.add(v), c.push(v));
    }
    return c;
  }
  function ep() {
    return tp("paint");
  }
  function Vi(i, o) {
    const c = String(o || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function Hi(i) {
    const o = String(i || "").trim();
    return o ? `raster:${o}` : "";
  }
  function qe(i) {
    const o = String(i || "").trim();
    if (!o) return "";
    const c = o.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : o).trim();
  }
  function $i(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const l = c.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function vs() {
    var o;
    let i = -1;
    for (const c of Array.isArray(d.stickers) ? d.stickers : [])
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Ie())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Array.isArray((o = d.painting) == null ? void 0 : o.raster_objects) ? d.painting.raster_objects : [])
      String((c == null ? void 0 : c.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0)));
    return i + 1;
  }
  function xl(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return null;
    const l = Ie();
    let h = l.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === c);
    return h ? o != null && (h.z_index = Math.max(0, Number(o || 0))) : (h = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: o == null ? vs() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(h)), h;
  }
  function np() {
    const i = new Set(ep()), c = Ie().filter((l) => i.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return i.forEach((l) => {
      c.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === l) || c.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: vs(),
        locked: !1,
        frame: null
      });
    }), c.sort((l, h) => Number((l == null ? void 0 : l.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), d.painting.groups = c, c;
  }
  function rp(i, o, c) {
    const l = [];
    for (const L of c) {
      const $ = L == null ? void 0 : L.geometry, K = ($ == null ? void 0 : $.geometryKind) === "lasso_fill" ? $ == null ? void 0 : $.points : ($ == null ? void 0 : $.processedPoints) || ($ == null ? void 0 : $.rawPoints) || ($ == null ? void 0 : $.points) || [];
      Array.isArray(K) && l.push(...K);
    }
    if (!l.length) return null;
    let h = 0, m = 0;
    l.forEach((L) => {
      h += Number((L == null ? void 0 : L.u) || 0), m += Number((L == null ? void 0 : L.v) || 0);
    });
    const w = h / l.length;
    let v = 1 / 0, b = -1 / 0, N = 1 / 0, S = -1 / 0;
    l.forEach((L) => {
      const $ = zi(Number((L == null ? void 0 : L.u) || 0), w);
      v = Math.min(v, $), b = Math.max(b, $);
      const K = Number((L == null ? void 0 : L.v) || 0);
      N = Math.min(N, K), S = Math.max(S, K);
    });
    const k = c.reduce((L, $) => {
      const K = wr(String(($ == null ? void 0 : $.toolKind) || "pen")), ht = sn[K] || sn[ar], xt = Math.max(1, Number(($ == null ? void 0 : $.size) || 10)) * Math.max(0.1, Number((ht == null ? void 0 : ht.sizeScale) ?? 1));
      return Math.max(L, xt);
    }, 0), T = Math.max(35e-4, k / 2048);
    return {
      centerUv: { u: ((w + (v + b) * 0.5) % 1 + 1) % 1, v: U((N + S) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (b - v) * 0.5 + T,
      halfH: (S - N) * 0.5 + T,
      uvPad: T
    };
  }
  function Jr(i, o, c) {
    const l = String(i || "").trim();
    if (!l) return null;
    const h = Ie().find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    if (!h) return null;
    if (!h.frame) {
      const m = c || En(l, o);
      h.frame = rp(l, o, m);
    }
    return h.frame;
  }
  function Qr() {
    var l;
    const i = (Array.isArray(d.stickers) ? d.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), o = np().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), c = (Array.isArray((l = d.painting) == null ? void 0 : l.raster_objects) ? d.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...i, ...o, ...c].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function Tr(i = !0) {
    var c, l, h, m, w, v;
    const o = Qr().filter((b) => b.type === "strokeGroup").map((b) => String(b.actionGroupId || "")).filter((b) => !!b);
    if (i) {
      const b = String(((l = (c = p.interaction) == null ? void 0 : c.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), N = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), S = String(((v = (w = p.interaction) == null ? void 0 : w.stroke) == null ? void 0 : v.toolKind) || "").trim();
      b && N === "paint" && S !== "eraser" && !o.includes(b) && o.push(b);
    }
    return o;
  }
  function Sl(i = !0) {
    var v, b, N, S, k, T;
    const o = Qr();
    if (!i) return o;
    const c = String(((b = (v = p.interaction) == null ? void 0 : v.stroke) == null ? void 0 : b.actionGroupId) || "").trim(), l = String(((S = (N = p.interaction) == null ? void 0 : N.stroke) == null ? void 0 : S.layerKind) || "").trim(), h = String(((T = (k = p.interaction) == null ? void 0 : k.stroke) == null ? void 0 : T.toolKind) || "").trim();
    if (!c || l !== "paint" || h === "eraser" || o.some((L) => L.type === "strokeGroup" && String(L.actionGroupId || "") === c))
      return o;
    const m = pe();
    let w = o.reduce((L, $) => Math.max(L, Number(($ == null ? void 0 : $.z_index) || 0)), -1) + 1;
    return m && Ce(m) && String(m.actionGroupId || "") === c && (w = Number(m.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: w,
        item: null
      }
    ].sort((L, $) => Number((L == null ? void 0 : L.z_index) || 0) - Number(($ == null ? void 0 : $.z_index) || 0));
  }
  function ip() {
    return Ie().slice().sort((i, o) => Number((i == null ? void 0 : i.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((i) => ei(Vi("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function ap() {
    var i;
    return (Array.isArray((i = d.painting) == null ? void 0 : i.raster_objects) ? d.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, c) => Number((o == null ? void 0 : o.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((o) => ti(Hi((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function Ha(i = p.interaction) {
    const o = String((i == null ? void 0 : i.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object") return !0;
    if (o === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, l = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || l;
    }
    return !1;
  }
  function Nl(i = p.interaction) {
    if (e !== "cutout") return !1;
    const o = String((i == null ? void 0 : i.kind) || "");
    return Ha(i) || o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function op(i = p.interaction) {
    if (!Nl(i)) return 0;
    const o = String((i == null ? void 0 : i.kind) || "");
    return o === "paint_stroke" || o === "paint_lasso_fill" ? 120 : 33;
  }
  function Ml() {
    var h, m, w, v, b, N, S;
    const i = p.interaction, o = String((i == null ? void 0 : i.kind) || "");
    if (!Ha(i)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const k = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, T = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), L = ((w = k == null ? void 0 : k.rawPoints) == null ? void 0 : w.length) ?? ((v = k == null ? void 0 : k.points) == null ? void 0 : v.length) ?? 0, $ = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${T || "paint"}_${o}_live${$}_${L}_${p.livePaintInteractionRevision}`;
    }
    const c = String(((b = i == null ? void 0 : i.item) == null ? void 0 : b.actionGroupId) || ""), l = String(((N = i == null ? void 0 : i.item) == null ? void 0 : N.rasterObjectId) || ((S = i == null ? void 0 : i.item) == null ? void 0 : S.id) || "");
    return `_${o}_${c || l || "active"}_${p.livePaintInteractionRevision}`;
  }
  function bs() {
    return [
      ...Array.isArray(d.stickers) ? d.stickers : [],
      ...Array.isArray(d.shots) ? d.shots : []
    ];
  }
  function _n(i) {
    return !!i && Array.isArray(d.shots) && d.shots.includes(i);
  }
  function Ee(i) {
    return !!i && Array.isArray(d.stickers) && d.stickers.includes(i);
  }
  function mn() {
    var i;
    return Array.isArray((i = d.painting) == null ? void 0 : i.raster_objects) ? d.painting.raster_objects : [];
  }
  function ti(i) {
    const o = qe(i);
    if (!o) return null;
    const c = mn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: Hi(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Ye(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const o = qe(i.rasterObjectId || i.id || "");
    return !!o && !!ti(Hi(o));
  }
  function ei(i) {
    const o = $i(i), c = String(o.actionGroupId || "").trim();
    if (!c) return null;
    const l = Ie().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === c || String((h == null ? void 0 : h.actionGroupId) || "") === c);
    return l ? {
      ...l,
      id: Vi("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function Ce(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const o = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!o && !!ei(Vi(c, o));
  }
  function En(i, o = null) {
    const c = $i(i, o), l = String(c.actionGroupId || "").trim();
    return l ? ci(c.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === l) : [];
  }
  function sp(i, o = "paint") {
    var m, w, v;
    const c = String(i || "").trim(), h = `${String(o || "paint").trim() || "paint"}:${c}:${p.mode}:${Wi()}`;
    if (p.mode === "frame") {
      const b = Jt(), N = String((b == null ? void 0 : b.id) || ""), S = b ? Ze(b) : null;
      return `${h}:frame:${N}:${Math.round(Number((S == null ? void 0 : S.x) || 0))}:${Math.round(Number((S == null ? void 0 : S.y) || 0))}:${Math.round(Number((S == null ? void 0 : S.w) || 0))}:${Math.round(Number((S == null ? void 0 : S.h) || 0))}:${Math.round(Number(((m = p.frameView) == null ? void 0 : m.zoom) || 1) * 1e3)}:${Math.round(Number(((w = p.frameView) == null ? void 0 : w.panX) || 0))}:${Math.round(Number(((v = p.frameView) == null ? void 0 : v.panY) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function $a(i, o, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: U(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function zi(i, o) {
    let c = Number(i || 0) - Number(o || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function kl(i, o = null, c = null) {
    var N;
    const l = $i(i, o), h = Array.isArray(c) ? c : En(l.actionGroupId, l.layerKind), m = [];
    if (h.forEach((S) => {
      const k = (S == null ? void 0 : S.geometry) || null, T = (k == null ? void 0 : k.geometryKind) === "lasso_fill" ? k == null ? void 0 : k.points : (k == null ? void 0 : k.processedPoints) || (k == null ? void 0 : k.rawPoints) || (k == null ? void 0 : k.points) || [];
      Array.isArray(T) && m.push(...T);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const w = Number(((N = m[0]) == null ? void 0 : N.u) || 0);
    let v = 0, b = 0;
    return m.forEach((S) => {
      v += w + zi(Number((S == null ? void 0 : S.u) || 0), w), b += Number((S == null ? void 0 : S.v) || 0);
    }), {
      u: (v / m.length % 1 + 1) % 1,
      v: U(b / m.length, 0, 1)
    };
  }
  function za(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), w = zi(Number(i.u || 0), h), v = Number(i.v || 0) - m, b = Number(l || 0) * Le, N = Math.cos(b), S = Math.sin(b), k = Math.max(0.02, Number(c || 1)), T = (w * N - v * S) * k, L = (w * S + v * N) * k;
    return {
      ...i,
      u: ((h + T) % 1 + 1) % 1,
      v: U(m + L, 0, 1)
    };
  }
  function Pl(i, o, c, l = null, h = null, m = null) {
    const w = $i(i, h), v = String(w.actionGroupId || "").trim();
    if (!v) return !1;
    const b = ci(w.layerKind), N = Array.isArray(l) ? new Map(l.map((k) => [String((k == null ? void 0 : k.id) || ""), k])) : null;
    let S = !1;
    if (b.forEach((k) => {
      if (String((k == null ? void 0 : k.actionGroupId) || "").trim() !== v) return;
      const T = (N == null ? void 0 : N.get(String((k == null ? void 0 : k.id) || ""))) || k, L = k == null ? void 0 : k.geometry, $ = T == null ? void 0 : T.geometry;
      !L || !$ || (Array.isArray($.points) && (L.points = $.points.map((K) => $a(K, o, c)), S = !0), Array.isArray($.rawPoints) && (L.rawPoints = $.rawPoints.map((K) => $a(K, o, c)), S = !0), Array.isArray($.processedPoints) && (L.processedPoints = $.processedPoints.map((K) => $a(K, o, c)), S = !0));
    }), S && m) {
      const k = Ie().find((T) => String((T == null ? void 0 : T.actionGroupId) || "") === v);
      k && (k.frame = {
        ...m,
        centerUv: {
          u: ((m.centerUv.u + o) % 1 + 1) % 1,
          v: U(m.centerUv.v + c, 0, 1)
        }
      });
    }
    return S;
  }
  function Al(i, o = 1, c = 0, l = null, h = null, m = null) {
    const w = $i(i, h), v = String(w.actionGroupId || "").trim();
    if (!v) return !1;
    const b = ci(w.layerKind), N = Array.isArray(l) ? l : En(v, w.layerKind), S = Array.isArray(N) ? new Map(N.map((L) => [String((L == null ? void 0 : L.id) || ""), L])) : null, k = (m == null ? void 0 : m.centerUv) ?? kl(v, w.layerKind, N);
    let T = !1;
    if (b.forEach((L) => {
      if (String((L == null ? void 0 : L.actionGroupId) || "").trim() !== v) return;
      const $ = (S == null ? void 0 : S.get(String((L == null ? void 0 : L.id) || ""))) || L, K = L == null ? void 0 : L.geometry, ht = $ == null ? void 0 : $.geometry;
      !K || !ht || (Array.isArray(ht.points) && (K.points = ht.points.map((xt) => za(xt, k, o, c)), T = !0), Array.isArray(ht.rawPoints) && (K.rawPoints = ht.rawPoints.map((xt) => za(xt, k, o, c)), T = !0), Array.isArray(ht.processedPoints) && (K.processedPoints = ht.processedPoints.map((xt) => za(xt, k, o, c)), T = !0));
    }), T && m) {
      const L = Number(o || 1), $ = Ie().find((K) => String((K == null ? void 0 : K.actionGroupId) || "") === v);
      $ && ($.frame = {
        centerUv: m.centerUv,
        rot_deg: Number(m.rot_deg || 0) + Number(c || 0),
        halfW: m.halfW * L,
        halfH: m.halfH * L,
        uvPad: m.uvPad
      });
    }
    return T;
  }
  function Cl(i, o, c, l = null) {
    const h = qe(i);
    if (!h) return !1;
    const m = mn().find((S) => String((S == null ? void 0 : S.id) || "").trim() === h);
    if (!m) return !1;
    const w = l && typeof l == "object" ? l : m, v = (w == null ? void 0 : w.transform) || {}, b = Number(v.du || 0) + Number(o || 0), N = U(Number(v.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = b, m.transform.dv = N, !0;
  }
  function pe() {
    const i = String(p.selectedId || "");
    if (!i) return null;
    const o = ei(i);
    if (o) return o;
    const c = ti(i);
    return c || (e === "cutout" ? bs().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null : bn().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null);
  }
  function Tn() {
    const i = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], o = [], c = /* @__PURE__ */ new Set();
    return i.forEach((l) => {
      const h = String(l || "").trim();
      if (!h || c.has(h)) return;
      c.add(h);
      const m = h === String(p.selectedId || "") ? pe() : ei(h) || ti(h) || (e === "cutout" ? bs().find((w) => String((w == null ? void 0 : w.id) || "") === h) : bn().find((w) => String((w == null ? void 0 : w.id) || "") === h));
      m && o.push(m);
    }), o;
  }
  function _s(i = null) {
    const o = Array.isArray(i) ? i : Tn();
    if (!o || o.length < 2) return null;
    const c = o.map((N) => De(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!c.length) return null;
    const l = c.flatMap((N) => N.corners.map((S) => Number((S == null ? void 0 : S.x) || 0))), h = c.flatMap((N) => N.corners.map((S) => Number((S == null ? void 0 : S.y) || 0))), m = Math.min(...l), w = Math.max(...l), v = Math.min(...h), b = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + w) * 0.5, y: (v + b) * 0.5 },
      corners: [
        { x: m, y: v },
        { x: w, y: v },
        { x: w, y: b },
        { x: m, y: b }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + w) * 0.5, y: v, a: { x: m, y: v }, b: { x: w, y: v } },
        { edge: "right", x: w, y: (v + b) * 0.5, a: { x: w, y: v }, b: { x: w, y: b } },
        { edge: "bottom", x: (m + w) * 0.5, y: b, a: { x: w, y: b }, b: { x: m, y: b } },
        { edge: "left", x: m, y: (v + b) * 0.5, a: { x: m, y: b }, b: { x: m, y: v } }
      ],
      rotateStemBase: { x: (m + w) * 0.5, y: v },
      rotateHandle: { x: (m + w) * 0.5, y: v - 30 }
    };
  }
  function cp(i) {
    const o = String((i == null ? void 0 : i.id) || "").trim();
    return !!o && Array.isArray(p.selectedIds) && p.selectedIds.includes(o);
  }
  function Il() {
    const i = pe();
    return i ? Ce(i) || Ye(i) ? "stroke" : _n(i) ? "frame" : "image" : null;
  }
  function pr(i) {
    if (!i || typeof i != "object") return !1;
    if (Ce(i)) {
      const o = String(i.actionGroupId || i.id || "").trim(), c = Ie().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (Ye(i)) {
      const o = qe(i.rasterObjectId || i.id || ""), c = mn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function ws(i = null) {
    const o = Array.isArray(i) ? i : Tn();
    return o.length > 0 && o.every((c) => pr(c));
  }
  function lp(i, o) {
    const c = o === !0;
    if (!i || typeof i != "object") return !1;
    if (Ce(i)) {
      const l = String(i.actionGroupId || i.id || "").trim(), h = Ie().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    if (Ye(i)) {
      const l = qe(i.rasterObjectId || i.id || ""), h = mn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function up() {
    if (r) return;
    const i = Tn();
    if (!i.length) return;
    const o = !ws(i);
    let c = !1;
    i.forEach((l) => {
      lp(l, o) && (c = !0);
    }), c && (ie(), ve(), zt(), dt());
  }
  function ji(i) {
    p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && Ee(i) ? d.active.selected_sticker_id = i.id || null : d.active.selected_sticker_id = null, i && _n(i) ? d.active.selected_shot_id = i.id || null : i ? _n(i) || (d.active.selected_shot_id = d.active.selected_shot_id) : d.active.selected_shot_id = null;
  }
  function fp(i, o = null) {
    const c = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((w) => {
      const v = String((w == null ? void 0 : w.id) || "").trim();
      !v || l.has(v) || (l.add(v), c.push(v));
    }), p.selectedIds = c;
    const h = String(o || "").trim();
    p.selectedId = h && c.includes(h) ? h : c[c.length - 1] || null;
    const m = pe();
    d.active.selected_sticker_id = m && Ee(m) && m.id || null, m && _n(m) ? d.active.selected_shot_id = m.id || null : c.length || (d.active.selected_shot_id = null);
  }
  function dp() {
    const i = (Array.isArray(d.shots) ? d.shots : []).map((c, l) => ({
      kind: "frame",
      item: c,
      label: "Frame"
    })), o = (Array.isArray(d.stickers) ? d.stickers : []).map((c, l) => {
      var m, w;
      const h = Me(c) ? String(c.id || Fr) : String(((w = (m = d.assets) == null ? void 0 : m[c.asset_id]) == null ? void 0 : w.name) || c.asset_id || c.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: c,
        label: h
      };
    });
    return [...i, ...o];
  }
  function hp(i) {
    return i === "frame" ? Dt.camera : i === "stroke" ? Dt.paintbrush_vertical_tool : Dt.image;
  }
  function El(i) {
    return !i || !i.item ? xo(String((i == null ? void 0 : i.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${hp(i.kind)}</span><span>${xo(String(i.label || ""))}</span>`;
  }
  function Tl() {
    return vs();
  }
  function Me(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === Fr || String(i.source_kind || "") === bc;
  }
  function ni(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function pp(i) {
    return Me(i) && ni(i) ? _h : 1;
  }
  function gp() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function mp() {
    return String(gp() || "") === "lasso_fill";
  }
  function yp() {
    if (r) return;
    const i = pe();
    !i || !Me(i) || (i.visible = ni(i), fn(), ie(), ve(), Bt(), zt(), dt());
  }
  function vp() {
    if (r || e !== "stickers") return;
    const i = pe();
    if (!i || !Me(i)) return;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return;
    i.yaw_deg = Number(o.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(o.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(o.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = xs(_c, () => {
      dt();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = Dr(
      Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(o.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(o.rot_deg ?? i.rot_deg ?? 0), ie(), ve(), Bt(), zt(), dt();
  }
  function bp(i) {
    if (!i || !Me(i)) return null;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return null;
    const c = {
      yaw_deg: Number(o.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? i.rot_deg ?? 0)
    }, l = xs(_c, () => {
      dt();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (c.vFOV_deg = Dr(
      c.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), c;
  }
  function _p() {
    const i = pe();
    if (!i || !Me(i)) return !1;
    const o = bp(i);
    if (!o) return !1;
    const c = (l, h) => Math.abs(Number(l || 0) - Number(h || 0)) <= 1e-4;
    return !(c(i.yaw_deg, o.yaw_deg) && c(i.pitch_deg, o.pitch_deg) && c(i.hFOV_deg, o.hFOV_deg) && c(i.vFOV_deg, o.vFOV_deg) && c(i.rot_deg, o.rot_deg));
  }
  function Dl(i) {
    var c;
    const o = Pa(t == null ? void 0 : t.id);
    return Array.isArray((c = o == null ? void 0 : o.ui) == null ? void 0 : c[i]) ? o.ui[i] : Array.isArray(o == null ? void 0 : o[i]) ? o[i] : [];
  }
  function wp(i) {
    const o = Pa(t == null ? void 0 : t.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, i) ? o.ui[i] : o && Object.prototype.hasOwnProperty.call(o, i) ? o[i] : null;
  }
  function xp(i, o = null) {
    var c;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const l = i[0];
      if (l && typeof l == "object" && !Array.isArray(l)) return l;
    }
    if (Array.isArray(o) && o.length > 0) {
      const l = (c = o[0]) == null ? void 0 : c.parsed_state;
      if (l && typeof l == "object" && !Array.isArray(l))
        return {
          yaw_deg: Number(l.yaw_deg || 0),
          pitch_deg: Number(l.pitch_deg || 0),
          hFOV_deg: Number(l.hFOV_deg || 30),
          rot_deg: Number(l.roll_deg || 0)
        };
    }
    return null;
  }
  function xs(i, o = null) {
    const c = Dl(i), l = Array.isArray(c) && c.length ? c[0] : null, h = Oi(l);
    if (!h) return null;
    const m = `__ui__${i}`, w = jt.get(m);
    if (w && w.__panoSrc === h) return w;
    const v = new Image();
    return v.__panoSrc = h, v.onload = () => {
      typeof o == "function" ? o(v) : dt();
    }, v.src = h, jt.set(m, v), v;
  }
  function Rl(i = null) {
    const o = nd(t, ["sticker_image"], i, "sticker_image_exact");
    return o || xs(_c, i);
  }
  function Ll(i) {
    const o = String(i || "");
    let c = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      c ^= o.charCodeAt(l), c = Math.imul(c, 16777619);
    return String(c >>> 0);
  }
  function Dr(i, o, c) {
    const l = Math.max(1, Number(o || 1)), h = Math.max(1, Number(c || 1)), m = U(Number(i || 30), 0.1, 179) * Le, w = 2 * Math.atan(Math.tan(m * 0.5) * (h / l));
    return U(w * zr, 0.1, 179);
  }
  function Sp(i) {
    const o = String(i || "").trim();
    if (!o) return null;
    try {
      const c = JSON.parse(o);
      if (!c || typeof c != "object" || String(c.kind || "") !== "pano_sticker_state") return null;
      const l = c.version;
      let h = null;
      if (typeof l == "number" && Number.isInteger(l) ? h = l : typeof l == "string" && /^\d+$/.test(l) && (h = Number.parseInt(l, 10)), h !== 1) return null;
      const m = c.pose;
      if (!m || typeof m != "object") return null;
      const w = Number(m.yaw_deg), v = Number(m.pitch_deg), b = Number(m.roll_deg), N = Number(m.hFOV_deg);
      if (![w, v, b, N].every((L) => Number.isFinite(L))) return null;
      let S = ((w + 180) % 360 + 360) % 360 - 180;
      Object.is(S, -0) && (S = 0);
      const k = {
        yaw_deg: S,
        pitch_deg: U(v, -89.9, 89.9),
        roll_deg: b,
        hFOV_deg: U(N, 0.1, 179)
      }, T = Number(c.source_aspect);
      return Number.isFinite(T) && T > 0 && (k.source_aspect = T), k;
    } catch {
      return null;
    }
  }
  function Ol(i) {
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Gc(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Oe(Number.isFinite(o) ? o : 0),
        pitch_deg: U(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: U(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function Np(i) {
    var v;
    if (!i || typeof i != "object") return Ol(null);
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let w = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const b = U(h, 0.1, 179) * Le, N = U(m, 0.1, 179) * Le, S = Math.tan(N * 0.5);
      if (Math.abs(S) > 1e-6) {
        const k = Math.tan(b * 0.5) / S;
        Number.isFinite(k) && k > 0 && (w = k);
      }
    }
    if (i != null && i.asset_id && ((v = d == null ? void 0 : d.assets) != null && v[i.asset_id])) {
      const b = d.assets[i.asset_id], N = Number((b == null ? void 0 : b.w) || 0), S = Number((b == null ? void 0 : b.h) || 0);
      N > 0 && S > 0 && (w = N / S);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Oe(Number.isFinite(o) ? o : 0),
        pitch_deg: U(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: U(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: w
    };
  }
  function Mp(i) {
    var l, h, m, w, v;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((b) => String((b == null ? void 0 : b.name) || "") === String(i)) : null, c = o == null ? void 0 : o.link;
    if (c != null) {
      const b = Xh(t.graph, c), { originId: N, originSlot: S } = Zh(b), k = Pa(N), T = [
        k == null ? void 0 : k.output,
        k == null ? void 0 : k.result,
        (l = k == null ? void 0 : k.data) == null ? void 0 : l.output,
        (h = k == null ? void 0 : k.data) == null ? void 0 : h.result,
        (m = k == null ? void 0 : k.ui) == null ? void 0 : m.output,
        (w = k == null ? void 0 : k.ui) == null ? void 0 : w.result
      ];
      for (const L of T) {
        if (!Array.isArray(L)) continue;
        const $ = Number(S || 0), K = L[$];
        if (typeof K == "string" && K.trim()) return K;
      }
    }
    return String(((v = yn(t, i)) == null ? void 0 : v.value) || "");
  }
  function kp(i, o, c) {
    const l = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Sp(o);
    if (l) {
      const w = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || l.source_aspect || 1), v = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Dr(l.hFOV_deg, w, v),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const h = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 1), m = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
    return {
      yaw_deg: Number(p.viewYaw || 0),
      pitch_deg: Number(p.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Dr(30, h, m),
      rot_deg: 0
    };
  }
  function Fl(i = "sync") {
    if (e !== "stickers" || r) return;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((L) => String((L == null ? void 0 : L.name) || "") === "sticker_image") : null, c = (o == null ? void 0 : o.link) ?? null, l = Rl(() => {
      var L;
      (L = t.__panoExternalStickerSync) == null || L.call(t, "image-loaded");
    }), h = xp(wp("pano_sticker_input_pose"), null), m = Mp("sticker_state"), w = Ll(h && typeof h == "object" ? JSON.stringify(h) : m), v = Array.isArray(d.stickers) ? d.stickers : d.stickers = [], b = v.findIndex((L) => String((L == null ? void 0 : L.id) || "") === Fr);
    if (c == null) {
      b >= 0 && (v.splice(b, 1), p.selectedId === Fr && (p.selectedId = null, p.selectedIds = [], d.active.selected_sticker_id = null), ve(), Bt(), zt(), dt());
      return;
    }
    const N = v.reduce((L, $) => Math.max(L, Number(($ == null ? void 0 : $.z_index) || 0)), -1);
    let S = b >= 0 ? v[b] : null;
    const k = !S || Number(S.source_link_id ?? -1) !== Number(c) || String(S.source_state_hash || "") !== w;
    S || (S = {
      id: Fr,
      source_kind: bc
    }, v.push(S)), S.id = Fr, S.source_kind = bc, S.source_link_id = Number(c), S.source_state_hash = w, S.visible = S.visible !== !1;
    let T = !1;
    if (k) {
      const L = kp(h, m, l);
      Object.assign(S, L, {
        initial_pose: { ...L },
        visible: !0,
        z_index: N + 1
      }), T = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const L = Dr(
        Number(S.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(S.vFOV_deg || 0) - L) > 1e-6 && (S.vFOV_deg = L, T = !0);
    }
    T && (ve(), Bt(), zt()), dt();
  }
  function ri(i = {}) {
    const c = i.preservePanelValues !== !1 ? pe() : null;
    c && (p.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: yi(c)
    }), p.selectedId = null, p.selectedIds = [], p.cutoutAspectOpen = !1, d.active.selected_sticker_id = null, d.active.selected_shot_id = null;
  }
  function Pp() {
    var l;
    if (e !== "cutout") return;
    const i = Array.isArray(d.shots) ? d.shots : [];
    if (!Array.isArray(i) || i.length === 0) return;
    const o = String(((l = d.active) == null ? void 0 : l.selected_shot_id) || ""), c = i.find((h) => String((h == null ? void 0 : h.id) || "") === o) || i[0];
    c && (d.active.selected_shot_id = c.id || null, p.viewYaw = Oe(Number(c.yaw_deg || 0)), p.viewPitch = U(Number(c.pitch_deg || 0), -89.9, 89.9));
  }
  function ja() {
    if (!Z) return;
    e === "cutout" && Array.isArray(d.shots) && d.shots.length > 0 ? (Z.innerHTML = Dt.crosshair, Z.setAttribute("aria-label", "Look at frame"), Z.setAttribute("data-tip", "Look at frame")) : (Z.innerHTML = Dt.plus_circle, Z.setAttribute("aria-label", "Add frame"), Z.setAttribute("data-tip", "Add frame"));
  }
  function Ua() {
    const i = e === "cutout" && Array.isArray(d.shots) && d.shots.length > 0;
    p.mode === "frame" && !i && (p.mode = "pano"), ft && (ft.disabled = !i, ft.setAttribute("aria-disabled", i ? "false" : "true")), z.forEach((o) => {
      const c = o.dataset.view === p.mode;
      o.setAttribute("aria-pressed", c ? "true" : "false");
    }), ut && ut.setAttribute("data-selected", p.mode), vu() ? be(p.pointerPos) : A.style.cursor = p.mode === "pano" ? "grab" : "default";
  }
  function Ap() {
    const o = Bl({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function Ss() {
    const i = zn(p.viewYaw, p.viewPitch);
    let o = Yn(0, 1, 0);
    Math.abs(Mn(i, o)) > 0.999 && (o = Yn(0, 0, 1));
    const c = mi(yo(o, i)), l = mi(yo(i, c));
    return { right: c, up: l, fwd: i };
  }
  function Ui(i) {
    const { right: o, up: c, fwd: l } = Ss(), h = Mn(i, o), m = Mn(i, c), w = Mn(i, l);
    if (w <= 1e-5) return null;
    const v = A.width, b = A.height, N = p.viewFov * Le, S = 2 * Math.atan(Math.tan(N / 2) * (b / v)), k = v / 2 / Math.tan(N / 2), T = b / 2 / Math.tan(S / 2);
    return {
      x: v / 2 + h / w * k,
      y: b / 2 - m / w * T,
      z: w
    };
  }
  function Ns(i, o) {
    const { right: c, up: l, fwd: h } = Ss(), m = A.width, w = A.height, v = p.viewFov * Le, b = 2 * Math.atan(Math.tan(v / 2) * (w / m)), N = (i - m / 2) / (m / 2) * Math.tan(v / 2), S = (w / 2 - o) / (w / 2) * Math.tan(b / 2), k = go(go(mo(c, N), mo(l, S)), h);
    return mi(k);
  }
  function gr() {
    const i = A.width, o = A.height, c = 2;
    if (i / Math.max(o, 1) >= c) {
      const v = o, b = v * c;
      return { x: (i - b) * 0.5, y: 0, w: b, h: v };
    }
    const h = i, m = h / c;
    return { x: 0, y: (o - m) * 0.5, w: h, h: m };
  }
  function Vl(i) {
    var w;
    if (i && typeof i == "object" && (Me(i) || i.external === !0))
      return Rl(() => {
        var v;
        (v = t.__panoExternalStickerSync) == null || v.call(t, "image-loaded");
      });
    const o = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!o) return null;
    const c = jt.get(o);
    if (c) return c;
    const l = (w = d.assets) == null ? void 0 : w[o], h = jb(l);
    if (!h) return null;
    const m = new Image();
    return m.onload = () => dt(), m.src = h, jt.set(o, m), m;
  }
  function Hl(i, o = null) {
    const c = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!c) return null;
    const l = Xt.get(c);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const h = new Image();
    return h.onload = () => {
      typeof o == "function" && o();
    }, h.src = c, Xt.set(c, h), h;
  }
  function Cp(i) {
    const o = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!o) return null;
    const c = he.get(o);
    if (c) return c.ready ? c : null;
    const l = Hl(i, () => {
      const S = he.get(o);
      S && (S.ready = !1), dt({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const h = Number(l.naturalWidth || l.width || 0), m = Number(l.naturalHeight || l.height || 0);
    if (h < 1 || m < 1) return null;
    const w = document.createElement("canvas");
    w.width = h, w.height = m;
    const v = w.getContext("2d", { willReadFrequently: !0 });
    if (!v) return null;
    v.clearRect(0, 0, h, m), v.drawImage(l, 0, 0, h, m);
    const b = v.getImageData(0, 0, h, m).data, N = { canvas: w, width: h, height: m, alpha: b, ready: !0 };
    return he.set(o, N), N;
  }
  function Ip(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), w = zi(Number(i.u || 0), h), v = Number(i.v || 0) - m, b = Math.max(0.02, Number(c || 1)), N = Number(l || 0) * Le, S = Math.cos(N), k = Math.sin(N), T = w / b, L = v / b, $ = T * S + L * k, K = -T * k + L * S;
    return {
      ...i,
      u: ((h + $) % 1 + 1) % 1,
      v: m + K
    };
  }
  function Ep(i, o) {
    if (!i || !o) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const l = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, w = Ip(
      m,
      h,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), v = Number(c.u1 || 0) - Number(c.u0 || 0), b = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(v > 1e-6) || !(b > 1e-6)) return null;
    const N = zi(Number(w.u || 0), Number(c.u0 || 0)) / v, S = (Number(w.v || 0) - Number(c.v0 || 0)) / b;
    if (N < 0 || N > 1 || S < 0 || S > 1) return 0;
    const k = Cp(i);
    if (!k) return null;
    const T = U(Math.floor(N * k.width), 0, k.width - 1), L = U(Math.floor(S * k.height), 0, k.height - 1);
    return Number(k.alpha[(L * k.width + T) * 4 + 3] || 0);
  }
  function $l(i, o, c, l = null) {
    if (!(o != null && o.visible) || !or(c, o.corners)) return !1;
    const h = l || wn(c, performance.now()), m = Ep(i, h);
    return m === null ? !0 : m > 8;
  }
  function Tp() {
    var l, h, m, w, v, b, N, S;
    const i = ((h = (l = p.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, Tr(!1))) || null, o = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((v = (w = i == null ? void 0 : i.displayPaint) == null ? void 0 : w.canvas) == null ? void 0 : v.width) || 2048)), c = Math.max(1, Number(((b = i == null ? void 0 : i.descriptor) == null ? void 0 : b.height) || ((S = (N = i == null ? void 0 : i.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : S.height) || 1024));
    return { width: o, height: c };
  }
  function Bi() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function Dp(i, o = null) {
    const c = qe((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.bbox) || null;
    if (!c || !l) return null;
    const h = Hl(i, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: w } = Tp(), v = (i == null ? void 0 : i.transform) || {}, b = [
      c,
      m,
      w,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      v.du,
      v.dv,
      v.rot_deg,
      v.scale,
      Wi()
    ].join(":"), N = xe.get(b);
    if (N) return N;
    xe.size > 64 && xe.clear();
    const S = document.createElement("canvas");
    S.width = m, S.height = w;
    const k = S.getContext("2d");
    if (!k) return null;
    const T = Number(l.u0 || 0) * m, L = Number(l.v0 || 0) * w, $ = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * m), K = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * w), ht = T + $ * 0.5 + Number(v.du || 0) * m, xt = L + K * 0.5 + Number(v.dv || 0) * w, _t = Number(v.rot_deg || 0) * Le, st = Math.max(0.01, Number(v.scale || 1));
    for (const pt of [-m, 0, m])
      k.save(), k.translate(ht + pt, xt), k.rotate(_t), k.scale(st, st), k.drawImage(h, -$ * 0.5, -K * 0.5, $, K), k.restore();
    return xe.set(b, S), S;
  }
  function zl() {
    return ys(d, {
      selectedId: p.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function jl(i) {
    return wh(
      d,
      (o, c, l) => Vl(l || o),
      { scene: i }
    );
  }
  function Ms(i, o, c, l, h = "modal_object_view") {
    var ht, xt, _t, st;
    if (!i || !o || !c) return !1;
    const m = String((c == null ? void 0 : c.mode) || ""), w = !!l && !!l.complete && Number(l.naturalWidth || l.width || 0) > 1 && Number(l.naturalHeight || l.height || 0) > 1;
    if (m === "unwrap") {
      let pt = !1;
      w && p.showPanorama && (i.save(), i.globalAlpha = 1, i.drawImage(l, o.x, o.y, o.w, o.h), i.restore(), pt = !0);
      const gt = Tr(!1), bt = ((xt = (ht = p.paintEngine) == null ? void 0 : ht.getErpTarget) == null ? void 0 : xt.call(ht, gt)) || null, lt = p.showObjects && ((_t = bt == null ? void 0 : bt.displayPaint) == null ? void 0 : _t.canvas) || null, j = p.showMask && ((st = bt == null ? void 0 : bt.committedMask) == null ? void 0 : st.canvas) || null;
      return lt && (i.drawImage(lt, o.x, o.y, o.w, o.h), pt = !0), j && (i.drawImage(j, o.x, o.y, o.w, o.h), pt = !0), pt;
    }
    if (Kl(o, c))
      return jp(
        o,
        c,
        w && p.showPanorama ? l : null,
        `${h}_bg_gl`
      );
    const b = ql(), N = Yl(b), S = p.showObjects ? Xl() : null, k = p.showMask ? Zl() : null, T = hc({
      stateRevision: [
        h,
        w ? String(l.currentSrc || l.src || "") : "no_bg",
        w ? Number(l.naturalWidth || l.width || 0) : 0,
        w ? Number(l.naturalHeight || l.height || 0) : 0,
        Array.isArray(N) ? N.map((pt) => `${String((pt == null ? void 0 : pt.assetId) || "")}:${String((pt == null ? void 0 : pt.revision) || "")}`).join(",") : "none",
        S ? $e() : "paint:none",
        k ? `${$e()}:mask` : "mask:none"
      ].join("|"),
      backgroundSource: w && p.showPanorama ? l : null,
      backgroundRevision: w ? `${h}:bg` : "",
      coverageDeg: ze(d.coverage),
      scene: b,
      textures: N,
      paintSource: S,
      paintRevision: S ? $e() : "",
      maskSource: k,
      maskRevision: k ? `${$e()}:mask` : "",
      rasterEntries: [],
      backgroundOpacity: 1,
      showMaskTint: !1
    }), L = m === "cutout" ? Q : ct;
    if (!L.syncState(T)) return !1;
    const K = L.renderToTarget(`${h}_direct`, c, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return K ? (i.drawImage(K, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function ks(i, o = "sticker.png") {
    const c = new FormData();
    c.append("image", i), c.append("type", "input"), c.append("subfolder", "panorama_stickers");
    const l = await en.fetchApi("/upload/image", { method: "POST", body: c });
    if (!l || l.status !== 200)
      throw new Error(`upload failed (${(l == null ? void 0 : l.status) || "no-response"})`);
    const h = await l.json(), m = String((h == null ? void 0 : h.name) || "").trim();
    if (!m)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: m,
      subfolder: String((h == null ? void 0 : h.subfolder) || "panorama_stickers"),
      storage: String((h == null ? void 0 : h.type) || "input"),
      name: String((i == null ? void 0 : i.name) || o)
    };
  }
  async function Ps(i, o) {
    const c = await new Promise((v) => i.toBlob(v, "image/png")), l = new FormData();
    l.append("image", c, o), l.append("type", "temp"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const h = await en.fetchApi("/upload/image", { method: "POST", body: l });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const m = await h.json(), w = String((m == null ? void 0 : m.name) || "").trim();
    if (!w) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: w,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let As = null, Ba = !1;
  function Rp() {
    const i = Jf(d.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const o = d.painting_layer, c = $e();
    return !o || typeof o != "object" || String(o.revision || "") !== c || i.totalPaintCount > 0 && !o.paint || i.totalMaskCount > 0 && !o.mask;
  }
  function Cs() {
    const i = String(t.id ?? "0"), o = pa.get(i);
    if (Ba && o) return o;
    const c = (async () => {
      var m, w, v, b, N, S, k, T, L, $, K, ht;
      const l = $e(), h = Jf(d.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        d.painting_layer !== null && (d.painting_layer = null, As = l, Rn());
        return;
      }
      if (As !== l && !Ba) {
        Ba = !0;
        try {
          Ka();
          const xt = Tr(!1), _t = ((w = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : w.call(m, xt)) || null, st = ((v = _t == null ? void 0 : _t.displayPaint) == null ? void 0 : v.canvas) || null, pt = ((b = _t == null ? void 0 : _t.committedMask) == null ? void 0 : b.canvas) || null, gt = Math.max(1, Number(((N = _t == null ? void 0 : _t.descriptor) == null ? void 0 : N.width) || (st == null ? void 0 : st.width) || (pt == null ? void 0 : pt.width) || 2048)), bt = Math.max(1, Number(((S = _t == null ? void 0 : _t.descriptor) == null ? void 0 : S.height) || (st == null ? void 0 : st.height) || (pt == null ? void 0 : pt.height) || 1024));
          (!st && h.totalPaintCount > 0 || !pt && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((k = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : k.width) || 0) !== gt || Number(((T = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : T.height) || 0) !== bt) && (p._paintLayerSyncBlankSurface = Vs(gt, bt)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, gt, bt));
          const lt = st || h.totalPaintCount > 0 && ((L = p._paintLayerSyncBlankSurface) == null ? void 0 : L.canvas) || null, j = pt || h.totalMaskCount > 0 && (($ = p._paintLayerSyncBlankSurface) == null ? void 0 : $.canvas) || null;
          if (!lt && !j) return;
          let at = null, Pt = null;
          const Ut = [];
          if (h.totalPaintCount > 0) {
            at = await Ps(lt, `pano_paint_${i}.png`);
            for (const At of xt) {
              const Rt = String(At || "").trim();
              if (!Rt) continue;
              const $t = ((ht = (K = p.paintEngine) == null ? void 0 : K.getGroupDisplayCanvas) == null ? void 0 : ht.call(K, Rt)) || null;
              if (!$t) continue;
              const Ft = Rt.replace(/[^a-zA-Z0-9_-]+/g, "_"), Vt = await Ps($t, `pano_group_${i}_${Ft}.png`);
              Vt && Ut.push({
                id: Rt,
                actionGroupId: Rt,
                image: Vt
              });
            }
          }
          h.totalMaskCount > 0 && (Pt = await Ps(j, `pano_mask_${i}.png`)), l === $e() && (d.painting_layer = {
            paint: at,
            mask: Pt,
            groups: Ut,
            revision: l
          }, As = l, Rn());
        } catch (xt) {
          console.warn("[pano] paint layer upload failed:", xt);
        } finally {
          Ba = !1;
        }
      }
    })();
    return pa.set(i, c), c.finally(() => {
      pa.get(i) === c && pa.delete(i);
    }), c;
  }
  function ii() {
    const i = Bb(t, "pano_input_images", jt, () => dt());
    if (i) return i;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((w) => String((w == null ? void 0 : w.name) || "")) : [], c = o.includes("erp_image"), l = o.includes("bg_erp");
    let h = [];
    return r && (c || l) ? h = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : h = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], nd(t, h, () => dt(), `background:${h.join("|")}`);
  }
  function Ul(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Lp() {
    if (!It.hasPresentedFrame) return "boot";
    let i = !1, o = !1;
    if (p.showPanorama) {
      const c = ii();
      i = !!c && !Ul(c);
    }
    if (p.showObjects) {
      const c = Array.isArray(d.stickers) ? d.stickers : [];
      for (const l of c) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const h = Vl(l);
        if (h && !Ul(h)) {
          o = !0;
          break;
        }
      }
    }
    return i && o ? "mixed" : i ? "background" : o ? "stickers" : "";
  }
  function ai() {
    const i = new Set(
      (d.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(d.assets || {}).forEach((o) => {
      i.has(o) || (delete d.assets[o], jt.delete(o));
    });
  }
  function Is(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(U(i.y, -1, 1))
    };
  }
  function Es(i, o = null) {
    const { lon: c, lat: l } = Is(i), h = gr();
    let m = h.x + (c / (2 * Math.PI) + 0.5) * h.w;
    const w = h.y + (0.5 - l / Math.PI) * h.h;
    if (o !== null) {
      for (; m - o > h.w / 2; ) m -= h.w;
      for (; m - o < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: w, z: 1 };
  }
  function Ga(i) {
    const o = zn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let c = Yn(0, 1, 0);
    Math.abs(Mn(o, c)) > 0.999 && (c = Yn(0, 0, 1));
    const l = mi(yo(c, o)), h = mi(yo(o, l)), m = Math.tan(U(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * Le), w = Math.tan(U(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * Le), v = Number(i.rot_deg || i.roll_deg || 0) * Le, b = Math.cos(v), N = Math.sin(v);
    return {
      centerDir: o,
      right: l,
      up: h,
      tanX: m,
      tanY: w,
      cr: b,
      sr: N
    };
  }
  function mr(i, o, c) {
    const l = o * i.cr - c * i.sr, h = o * i.sr + c * i.cr;
    return mi(go(go(i.centerDir, mo(i.right, l)), mo(i.up, h)));
  }
  function Bl(i) {
    const o = Ga(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: h }) => mr(o, l * o.tanX, h * o.tanY));
  }
  function Gl(i, o, c) {
    const l = Ga(i), h = (o * 2 - 1) * l.tanX, m = (1 - c * 2) * l.tanY;
    return mr(l, h, m);
  }
  function Op(i) {
    const o = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: U((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Fp(i) {
    var b, N, S, k;
    const o = (i == null ? void 0 : i.bbox) || null;
    if (!o) return [];
    const c = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((b = i == null ? void 0 : i.transform) == null ? void 0 : b.scale) || 1)), h = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.rot_deg) || 0), m = Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.du) || 0), w = Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((T) => $a(za(T, c, l, h), m, w));
  }
  function Vp(i) {
    const o = qe((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, l = (i == null ? void 0 : i.bbox) || {}, h = `${o}:${p.mode}:${Wi()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (p.mode === "frame") {
      const m = Jt(), w = m ? Ze(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function Hp(i) {
    const o = String((i == null ? void 0 : i.id) || ""), l = [
      _n(i) ? "frame" : Ee(i) ? "sticker" : "item",
      o,
      p.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      yi(i)
    ].join(":");
    if (p.mode === "frame") {
      const h = Jt(), m = h ? Ze(h) : null;
      return `${l}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function $p() {
    var o;
    const i = String(((o = d.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return i === "draft" ? p.hqFrames && p.hqFrames > 0 ? [28, 20] : p.interaction ? [12, 9] : [20, 14] : i === "high" ? p.hqFrames && p.hqFrames > 0 ? [48, 36] : p.interaction ? [20, 14] : [36, 26] : p.hqFrames && p.hqFrames > 0 ? [40, 30] : p.interaction ? [16, 12] : [28, 20];
  }
  function Wl() {
    var i;
    return !!F && !!((i = ct == null ? void 0 : ct.isSupported) != null && i.call(ct));
  }
  function Kl(i, o) {
    return !Wl() || e !== "stickers" && e !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((A == null ? void 0 : A.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((A == null ? void 0 : A.height) || 0));
  }
  function ql() {
    return p.showObjects ? zl() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Yl(i) {
    return !p.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : jl(i);
  }
  function Xl() {
    var o, c, l, h;
    const i = Tr(!1);
    return ((h = (l = (c = (o = p.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, i)) == null ? void 0 : l.displayPaint) == null ? void 0 : h.canvas) || null;
  }
  function Zl() {
    var o, c, l, h;
    const i = Tr(!1);
    return ((h = (l = (c = (o = p.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, i)) == null ? void 0 : l.committedMask) == null ? void 0 : h.canvas) || null;
  }
  function zp(i, o = "modal_bg_gl") {
    const c = ql(), l = Yl(c), h = !!i && !!i.complete && Number(i.naturalWidth || i.width || 0) > 1 && Number(i.naturalHeight || i.height || 0) > 1, m = h ? [
      String(i.currentSrc || i.src || ""),
      Number(i.naturalWidth || i.width || 0),
      Number(i.naturalHeight || i.height || 0)
    ].join("|") : "none", w = p.showObjects ? Xl() : null, v = p.showMask ? Zl() : null, b = [
      o,
      m,
      Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((N) => String((N == null ? void 0 : N.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((N) => `${String((N == null ? void 0 : N.assetId) || "")}:${String((N == null ? void 0 : N.revision) || "")}`).join(",") : "none",
      w ? $e() : "paint:none",
      v ? `${$e()}:mask` : "mask:none",
      p.showPanorama ? "panorama:1" : "panorama:0",
      p.showObjects ? "objects:1" : "objects:0",
      p.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: hc({
        stateRevision: b,
        backgroundSource: h ? i : null,
        backgroundRevision: h ? `${o}:${m}` : "",
        coverageDeg: ze(d.coverage),
        scene: c,
        textures: l,
        paintSource: w,
        paintRevision: w ? $e() : "",
        maskSource: v,
        maskRevision: v ? `${$e()}:mask` : "",
        rasterEntries: [],
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: h || l.length > 0 || !!w || !!v
    };
  }
  function Ts() {
    if (!F) return;
    const i = F.getContext("webgl2");
    if (i)
      i.viewport(0, 0, F.width, F.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const o = F.getContext("2d");
      o && (o.clearRect(0, 0, F.width, F.height), o.fillStyle = "#070707", o.fillRect(0, 0, F.width, F.height));
    }
    It.backgroundWasVisible = !1, It.backgroundDirty = !1;
  }
  function jp(i, o, c, l = "modal_bg_gl") {
    var N;
    if (!Kl(i, o)) return !1;
    if (!It.backgroundDirty && It.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: m } = zp(c, l);
    if (!m || !ct.syncState(h))
      return Ts(), !1;
    const v = ct.renderToTarget("modal_pano", o, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), b = (N = F == null ? void 0 : F.getContext) == null ? void 0 : N.call(F, "2d");
    return !v || !b ? (Ts(), !1) : (b.clearRect(0, 0, F.width, F.height), b.drawImage(v, 0, 0, F.width, F.height), It.backgroundWasVisible = !0, It.backgroundDirty = !1, !0);
  }
  function Up(i = !1) {
    const o = A.width, c = A.height, l = gr();
    if (C.globalAlpha = 1, C.lineWidth = 1, i || (C.fillStyle = "#070707", C.fillRect(0, 0, o, c), C.fillStyle = "#070707", C.fillRect(l.x, l.y, l.w, l.h)), Ka(), Ms(
      C,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      ii(),
      "modal_unwrap"
    ), p.showGrid && !p.fullscreen) {
      C.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const w = l.x + l.w * m / 16;
        C.beginPath(), C.moveTo(w, l.y), C.lineTo(w, l.y + l.h), C.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const w = l.y + l.h * m / 8;
        C.beginPath(), C.moveTo(l.x, w), C.lineTo(l.x + l.w, w), C.stroke();
      }
      C.strokeStyle = "rgba(250, 250, 250, 0.86)", C.lineWidth = 1.2, C.beginPath(), C.moveTo(l.x, l.y + l.h / 2), C.lineTo(l.x + l.w, l.y + l.h / 2), C.stroke(), C.fillStyle = "rgba(250, 250, 250, 0.42)", C.font = "500 11px Geist, sans-serif", C.textAlign = "center";
      const h = l.y + l.h * 0.57;
      C.fillText("Left", l.x + l.w * 0.25, h), C.fillText("Front", l.x + l.w * 0.5, h), C.fillText("Right", l.x + l.w * 0.75, h), C.fillText("Back", l.x + 38, h), C.fillText("Back", l.x + l.w - 38, h);
    }
  }
  function Jl(i, o, c = 1) {
    let l = !1;
    C.strokeStyle = o, C.lineWidth = c, C.beginPath();
    for (const h of i) {
      const m = Ui(h);
      if (!m) {
        l = !1;
        continue;
      }
      l ? C.lineTo(m.x, m.y) : (C.moveTo(m.x, m.y), l = !0);
    }
    C.stroke();
  }
  function Bp(i = !1) {
    const o = A.width, c = A.height;
    if (i || (Wl() ? C.clearRect(0, 0, o, c) : (C.fillStyle = "#070707", C.fillRect(0, 0, o, c))), Ka(), Ms(
      C,
      { x: 0, y: 0, w: o, h: c },
      {
        mode: "panorama",
        yawDeg: p.viewYaw,
        pitchDeg: p.viewPitch,
        fovDeg: p.viewFov,
        coverageDeg: ze(d.coverage)
      },
      ii(),
      "modal_pano"
    ), p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let w = -89; w <= 89; w += 4) m.push(zn(h, w));
        Jl(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let w = -180; w <= 180; w += 4) m.push(zn(w, h));
        Jl(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: zn(-90, 0) },
        { name: "Front", dir: zn(0, 0) },
        { name: "Right", dir: zn(90, 0) },
        { name: "Back", dir: zn(180, 0) }
      ];
      C.fillStyle = "rgba(250, 250, 250, 0.42)", C.font = "500 11px Geist, sans-serif", C.textAlign = "center", l.forEach((h) => {
        const m = Ui(h.dir);
        m && C.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function Ql(i, o = null, c = null) {
    if (p.mode === "frame") {
      const l = o || Jt();
      if (!l) return [];
      const h = c || Ze(l);
      return Sg(i, l, h);
    }
    return _g(i);
  }
  function Gp(i, o) {
    const c = String(i.actionGroupId || i.id || "").trim(), l = En(c, i.layerKind), h = [], m = [], w = p.mode === "frame" ? Jt() : null, v = w ? Ze(w) : null;
    for (const st of l) {
      const pt = (st == null ? void 0 : st.geometry) || null, gt = (pt == null ? void 0 : pt.geometryKind) === "lasso_fill" ? pt == null ? void 0 : pt.points : (pt == null ? void 0 : pt.processedPoints) || (pt == null ? void 0 : pt.rawPoints) || (pt == null ? void 0 : pt.points) || [], bt = Ql(gt, w, v).filter((at) => Number.isFinite(at == null ? void 0 : at.x) && Number.isFinite(at == null ? void 0 : at.y));
      if (!bt.length) continue;
      m.push(...bt);
      const lt = wr(String((st == null ? void 0 : st.toolKind) || "pen")), j = sn[lt] || sn[ar];
      h.push({
        points: bt,
        closed: String((pt == null ? void 0 : pt.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((st == null ? void 0 : st.size) || 10) * Math.max(0.1, Number((j == null ? void 0 : j.sizeScale) ?? 1)) + 10),
        layerKind: String((st == null ? void 0 : st.layerKind) || i.layerKind || "paint")
      });
    }
    if (!m.length) {
      const st = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(o, st), st;
    }
    let b = 1 / 0, N = 1 / 0, S = -1 / 0, k = -1 / 0;
    for (const st of h)
      for (const gt of Array.isArray(st == null ? void 0 : st.points) ? st.points : []) {
        const bt = Number((gt == null ? void 0 : gt.x) || 0), lt = Number((gt == null ? void 0 : gt.y) || 0);
        b = Math.min(b, bt - 2), N = Math.min(N, lt - 2), S = Math.max(S, bt + 2), k = Math.max(k, lt + 2);
      }
    if (!Number.isFinite(b) || !Number.isFinite(N) || !Number.isFinite(S) || !Number.isFinite(k)) {
      const st = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(o, st), st;
    }
    const T = [
      { x: b, y: N },
      { x: S, y: N },
      { x: S, y: k },
      { x: b, y: k }
    ], L = { x: (b + S) * 0.5, y: (N + k) * 0.5 }, $ = { x: L.x, y: N }, K = { x: S, y: L.y }, ht = { x: L.x, y: k }, xt = { x: b, y: L.y }, _t = {
      kind: "strokeGroup",
      center: L,
      corners: T,
      edgeMidpoints: [
        { edge: "top", x: $.x, y: $.y, a: T[0], b: T[1] },
        { edge: "right", x: K.x, y: K.y, a: T[1], b: T[2] },
        { edge: "bottom", x: ht.x, y: ht.y, a: T[2], b: T[3] },
        { edge: "left", x: xt.x, y: xt.y, a: T[3], b: T[0] }
      ],
      rotateStemBase: $,
      rotateHandle: { x: $.x, y: $.y - 30 },
      strokePaths: h,
      visible: !0
    };
    return p._strokeGeomCache.set(o, _t), _t;
  }
  function Wp(i, o) {
    const c = Fp(i), l = Ql(c);
    if (!Array.isArray(l) || l.length < 4) {
      const v = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(o, v), v;
    }
    const h = l.slice(0, 4).map((v) => ({ x: Number((v == null ? void 0 : v.x) || 0), y: Number((v == null ? void 0 : v.y) || 0) })), w = {
      kind: "rasterObject",
      center: {
        x: h.reduce((v, b) => v + Number(b.x || 0), 0) / h.length,
        y: h.reduce((v, b) => v + Number(b.y || 0), 0) / h.length
      },
      corners: h,
      visible: !0
    };
    return p._strokeGeomCache.set(o, w), w;
  }
  function yr(i, o = null, c = null, l = null) {
    if (p.mode === "frame") {
      const _t = c || Jt(), st = l || Ze(_t), pt = _t ? qi(_t, i) : null;
      return pt ? {
        x: Number(st.x || 0) + Number(pt.x || 0) * Number(st.w || 0),
        y: Number(st.y || 0) + Number(pt.y || 0) * Number(st.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return Es(i, o);
    const { right: h, up: m, fwd: w } = Ss(), v = Mn(i, h), b = Mn(i, m), N = Mn(i, w), S = A.width, k = A.height, T = p.viewFov * Le, L = 2 * Math.atan(Math.tan(T / 2) * (k / Math.max(S, 1))), $ = S / 2 / Math.tan(T / 2), K = k / 2 / Math.tan(L / 2), ht = Math.max(N, 1e-4), xt = Math.max(S, k) * 2;
    return {
      x: U(S / 2 + v / ht * $, -xt, S + xt),
      y: U(k / 2 - b / ht * K, -xt, k + xt),
      z: ht
    };
  }
  function Kp(i) {
    const o = zn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), c = p.mode === "frame" ? Jt() : null, l = c ? Ze(c) : null, h = yr(o, null, c, l);
    if (!h) return { visible: !1 };
    const m = Ga(i), v = Bl(i).map((gt) => yr(gt, h.x, c, l)), b = mr(m, 0, m.tanY), N = mr(m, 0, m.tanY + Math.max(m.tanY * 0.43, 0.053)), S = yr(b, h.x, c, l), k = yr(N, (S == null ? void 0 : S.x) ?? h.x, c, l), T = ((k == null ? void 0 : k.x) ?? S.x) - S.x, L = ((k == null ? void 0 : k.y) ?? S.y) - S.y, $ = Math.hypot(T, L) || 1, K = {
      x: S.x + T / $ * 30,
      y: S.y + L / $ * 30
    }, ht = yr(mr(m, 0, m.tanY), h.x, c, l), xt = yr(mr(m, m.tanX, 0), h.x, c, l), _t = yr(mr(m, 0, -m.tanY), h.x, c, l), st = yr(mr(m, -m.tanX, 0), h.x, c, l), pt = [
      {
        edge: "top",
        x: ht.x,
        y: ht.y,
        a: { x: v[0].x, y: v[0].y },
        b: { x: v[1].x, y: v[1].y }
      },
      {
        edge: "right",
        x: xt.x,
        y: xt.y,
        a: { x: v[1].x, y: v[1].y },
        b: { x: v[2].x, y: v[2].y }
      },
      {
        edge: "bottom",
        x: _t.x,
        y: _t.y,
        a: { x: v[2].x, y: v[2].y },
        b: { x: v[3].x, y: v[3].y }
      },
      {
        edge: "left",
        x: st.x,
        y: st.y,
        a: { x: v[3].x, y: v[3].y },
        b: { x: v[0].x, y: v[0].y }
      }
    ];
    return {
      center: { x: h.x, y: h.y },
      corners: v.map((gt) => ({ x: gt.x, y: gt.y })),
      edgeMidpoints: pt,
      rotateStemBase: { x: S.x, y: S.y },
      rotateHandle: K,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function De(i) {
    if (Ce(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = sp(h, i.layerKind), w = p._strokeGeomCache.get(m);
      return w || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Gp(i, m));
    }
    if (Ye(i)) {
      const h = Vp(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Wp(i, h));
    }
    const o = Hp(i), c = p._strokeGeomCache.get(o);
    if (c) return c;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const l = Kp(i);
    return p._strokeGeomCache.set(o, l), l;
  }
  function Wa(i, o, c, l = null) {
    const h = [];
    for (let m = 0; m <= c; m += 1) {
      const w = m / c;
      let v = 0, b = 0;
      o === 0 ? (v = w, b = 0) : o === 1 ? (v = 1, b = w) : o === 2 ? (v = 1 - w, b = 1) : (v = 0, b = 1 - w);
      const N = Gl(i, v, b), S = p.mode === "unwrap" ? Es(N, l) : Ui(N);
      S && h.push(S);
    }
    return h;
  }
  function qp(i, o) {
    const c = zn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = p.mode === "unwrap" ? Es(c) : null, h = l ? l.x : null, m = p.mode === "pano" ? 28 : 20, w = [
      Wa(i, 0, m, h),
      Wa(i, 1, m, h),
      Wa(i, 2, m, h),
      Wa(i, 3, m, h)
    ];
    C.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", C.lineWidth = o ? 2 : 1, C.beginPath();
    let v = !1;
    for (const b of w)
      for (const N of b)
        v ? C.lineTo(N.x, N.y) : (C.moveTo(N.x, N.y), v = !0);
    C.closePath(), C.stroke();
  }
  function Yp() {
    const i = [...Array.isArray(d.stickers) ? d.stickers : []].sort((c, l) => Number(c.z_index || 0) - Number(l.z_index || 0));
    if (p.mode === "frame") return i;
    const o = Array.isArray(d.shots) ? d.shots : [];
    return [...i, ...o];
  }
  function Ds() {
    const i = [...Array.isArray(d.stickers) ? d.stickers : []].sort((c, l) => Number(l.z_index || 0) - Number(c.z_index || 0));
    if (p.mode === "frame") return i;
    const o = Array.isArray(d.shots) ? d.shots : [];
    return [...i, ...o];
  }
  function Rs(i, o = []) {
    if (!(!i || !Array.isArray(o) || o.length < 4)) {
      i.beginPath(), i.moveTo(o[0].x, o[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(o[c].x, o[c].y);
      i.closePath();
    }
  }
  function Xp(i, o, c, l) {
    if (Ee(i)) {
      const h = C.globalAlpha;
      C.globalAlpha = pp(i), p.mode === "frame" ? (C.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", C.lineWidth = c ? 2 : 1, Rs(C, o.corners), C.stroke()) : qp(i, c), C.globalAlpha = h;
      return;
    }
    C.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Rs(C, o.corners), C.fill(), C.strokeStyle = c ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", C.lineWidth = c ? 2.8 : 1.9, Rs(C, o.corners), C.stroke();
  }
  function Zp(i, o, c) {
    C.fillStyle = c, o.corners.forEach((l) => {
      C.beginPath(), C.arc(l.x, l.y, 6.5, 0, Math.PI * 2), C.fill();
    }), _n(i) && (C.strokeStyle = c, C.lineCap = "round", C.lineWidth = 4, o.edgeMidpoints.forEach((l) => {
      var S, k, T, L;
      const h = (((S = l.b) == null ? void 0 : S.x) ?? l.x) - (((k = l.a) == null ? void 0 : k.x) ?? l.x), m = (((T = l.b) == null ? void 0 : T.y) ?? l.y) - (((L = l.a) == null ? void 0 : L.y) ?? l.y), w = Math.hypot(h, m) || 1, v = h / w, b = m / w, N = 10;
      C.beginPath(), C.moveTo(l.x - v * N, l.y - b * N), C.lineTo(l.x + v * N, l.y + b * N), C.stroke();
    }), C.lineCap = "butt"), Ce(i) || (C.strokeStyle = "rgba(250, 250, 250, 0.9)", C.lineWidth = 1.8, C.beginPath(), C.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), C.lineTo(o.rotateHandle.x, o.rotateHandle.y), C.stroke(), C.fillStyle = c, C.beginPath(), C.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), C.fill());
  }
  function Jp() {
    var v;
    const [i, o] = $p(), c = Tn(), l = c.length > 1, h = e === "cutout" ? Yp() : bn(), m = h.map((b) => `${String((b == null ? void 0 : b.id) || "")}:${_n(b) ? "frame" : Number((b == null ? void 0 : b.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== h || p._sortedItemsCache.orderKey !== m) && (p._sortedItemsCache = {
      src: h,
      orderKey: m,
      sorted: [...h]
    });
    const w = p._sortedItemsCache.sorted;
    for (const b of w) {
      const N = !l && cp(b);
      if (p.mode === "frame" && !N || !p.showObjects && !_n(b)) continue;
      const S = De(b);
      if (e !== "stickers" && !S.visible)
        continue;
      const k = Ee(b), T = pr(b);
      if (Xp(b, S, N, T), N && S.visible) {
        const L = T ? "#ff4d4f" : k && Me(b) ? "#f59e0b" : "#0070f3";
        Zp(b, S, L);
      }
    }
    if (l) {
      const b = _s(c);
      if (b != null && b.visible) {
        const N = ws(c) ? "#ff4d4f" : "#0070f3";
        C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.95)", C.lineWidth = 2, C.setLineDash([6, 4]), C.beginPath(), C.moveTo(b.corners[0].x, b.corners[0].y);
        for (let S = 1; S < b.corners.length; S += 1) C.lineTo(b.corners[S].x, b.corners[S].y);
        C.closePath(), C.stroke(), C.setLineDash([]), C.fillStyle = N, b.corners.forEach((S) => {
          C.beginPath(), C.arc(S.x, S.y, 6.5, 0, Math.PI * 2), C.fill();
        }), C.restore();
      }
    } else
      c.forEach((b) => {
        if (!Ce(b) && !Ye(b)) return;
        const N = De(b);
        if (!(N != null && N.visible)) return;
        const S = pr(b) ? "#ff4d4f" : "#0070f3";
        C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.95)", C.lineWidth = 2, C.setLineDash([6, 4]), C.beginPath(), C.moveTo(N.corners[0].x, N.corners[0].y);
        for (let k = 1; k < N.corners.length; k += 1) C.lineTo(N.corners[k].x, N.corners[k].y);
        C.closePath(), C.stroke(), C.setLineDash([]), Ce(b) && (C.fillStyle = S, N.corners.forEach((k) => {
          C.beginPath(), C.arc(k.x, k.y, 6.5, 0, Math.PI * 2), C.fill();
        })), C.restore();
      });
    if (((v = p.interaction) == null ? void 0 : v.kind) === "marquee_select") {
      const b = wu(p.interaction.start, p.interaction.current);
      C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.9)", C.fillStyle = "rgba(255, 255, 255, 0.08)", C.lineWidth = 1, C.setLineDash([5, 4]), C.beginPath(), C.rect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0), C.fill(), C.stroke(), C.restore();
    }
    p.hqFrames && i >= 40 && o >= 30 && (p.hqFrames -= 1, p.hqFrames > 0 && dt());
  }
  function tu(i) {
    const o = wi(i), c = U(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), l = 320;
    return c >= 1 ? { width: l, height: Math.max(1, Math.round(l / c)) } : { width: Math.max(1, Math.round(l * c)), height: l };
  }
  function Qp() {
    var c;
    const i = Array.isArray(d.stickers) ? d.stickers : [], o = Array.isArray((c = d.painting) == null ? void 0 : c.raster_objects) ? d.painting.raster_objects : [];
    return JSON.stringify({
      stickers: i.map((l) => ({
        id: String((l == null ? void 0 : l.id) || ""),
        asset_id: String((l == null ? void 0 : l.asset_id) || (l == null ? void 0 : l.assetId) || ""),
        source_kind: String((l == null ? void 0 : l.source_kind) || ""),
        source_link_id: Number((l == null ? void 0 : l.source_link_id) ?? -1),
        source_state_hash: String((l == null ? void 0 : l.source_state_hash) || ""),
        visible: (l == null ? void 0 : l.visible) !== !1,
        z_index: Number((l == null ? void 0 : l.z_index) || 0),
        yaw_deg: Number((l == null ? void 0 : l.yaw_deg) || 0),
        pitch_deg: Number((l == null ? void 0 : l.pitch_deg) || 0),
        hFOV_deg: Number((l == null ? void 0 : l.hFOV_deg) || 0),
        vFOV_deg: Number((l == null ? void 0 : l.vFOV_deg) || 0),
        rot_deg: Number((l == null ? void 0 : l.rot_deg) || 0),
        roll_deg: Number((l == null ? void 0 : l.roll_deg) || 0),
        crop: (l == null ? void 0 : l.crop) || null
      })),
      rasters: o.filter((l) => String((l == null ? void 0 : l.layerKind) || "paint") === "paint").map((l) => ({
        id: String((l == null ? void 0 : l.id) || ""),
        visible: (l == null ? void 0 : l.visible) !== !1,
        z_index: Number((l == null ? void 0 : l.z_index) || 0),
        transform: (l == null ? void 0 : l.transform) || null,
        bbox: (l == null ? void 0 : l.bbox) || null
      }))
    });
  }
  function eu(i, o = {}) {
    if (!i) return "";
    const c = ii(), l = c && (c.complete || c.naturalWidth || c.width) ? [
      String(c.currentSrc || c.src || ""),
      Number(c.naturalWidth || c.width || 0),
      Number(c.naturalHeight || c.height || 0)
    ].join("|") : "no_bg", h = tu(i);
    return [
      String((i == null ? void 0 : i.id) || ""),
      $e(),
      Qp(),
      Ml(),
      l,
      p.showPanorama ? "panorama:1" : "panorama:0",
      p.showObjects ? "objects:1" : "objects:0",
      p.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function Ls(i = {}) {
    var m;
    if (e !== "cutout") return null;
    const o = i.shot || Jt();
    if (!o)
      return t.__panoCutoutPreviewSurface = null, null;
    const c = tu(o), l = eu(o, i);
    if (!i.forceRedraw && ((m = t.__panoCutoutPreviewSurface) == null ? void 0 : m.revision) === l)
      return t.__panoCutoutPreviewSurface;
    const h = eg(o, c, {
      cachePrefix: "shared_cutout_preview_surface",
      quality: String(i.quality || "balanced")
    });
    return h ? (t.__panoCutoutPreviewSurface = {
      source: h,
      revision: l
    }, t.__panoCutoutPreviewSurface) : t.__panoCutoutPreviewSurface || null;
  }
  function tg() {
    if (e !== "cutout") return;
    const i = Jt();
    if (!i) {
      p.outputPreviewRect = null, it && (it.style.display = "none");
      return;
    }
    const o = 14, c = U(Number(p.outputPreviewAnim ?? (p.outputPreviewExpanded ? 1 : 0)), 0, 1), l = Math.max(120, Math.min(250, A.width * 0.28)), h = Math.max(260, Math.min(560, A.width * 0.62)), m = Math.max(76, Math.min(150, A.height * 0.22)), w = Math.max(160, Math.min(340, A.height * 0.48)), v = kn(l, h, c), b = kn(m, w, c), N = wi(i), S = Number((N == null ? void 0 : N.aspect) || 1);
    let k = v, T = k / S;
    T > b && (T = b, k = T * S);
    const L = A.width - o - k, $ = o, K = 12;
    p.outputPreviewRect = { x: L, y: $, w: k, h: T };
    const ht = () => {
      if (!it) return;
      const lt = `${Math.round(L + k - 8 - 24)}px`, j = `${Math.round($ + 8)}px`;
      it.style.display = "inline-flex", it.style.left !== lt && (it.style.left = lt), it.style.top !== j && (it.style.top = j);
    }, xt = (lt, j, at, Pt, Ut) => {
      const At = Math.max(0, Math.min(Ut, Math.min(at, Pt) * 0.5));
      C.beginPath(), typeof C.roundRect == "function" ? C.roundRect(lt, j, at, Pt, At) : (C.moveTo(lt + At, j), C.arcTo(lt + at, j, lt + at, j + Pt, At), C.arcTo(lt + at, j + Pt, lt, j + Pt, At), C.arcTo(lt, j + Pt, lt, j, At), C.arcTo(lt, j, lt + at, j, At)), C.closePath();
    };
    C.save(), C.shadowColor = "rgba(0, 0, 0, 0.45)", C.shadowBlur = 22, C.shadowOffsetX = 0, C.shadowOffsetY = 8, C.fillStyle = "rgba(10, 10, 10, 0.72)", xt(L, $, k, T, K), C.fill(), C.restore(), C.save(), xt(L, $, k, T, K), C.clip();
    const _t = eu(i, { quality: "balanced" });
    let st = t.__panoCutoutPreviewSurface;
    const pt = au();
    pt && (st = Ls({
      shot: i,
      quality: "balanced",
      forceRedraw: !0
    })), (!st || st.revision !== _t) && !pt && !p.interaction && !p.cutoutPreviewSurfaceRaf && !p.cutoutPreviewSurfaceTimer && (st = Ls({ shot: i, quality: "balanced" }));
    const gt = (st == null ? void 0 : st.source) || null, bt = !!(gt && Number(gt.width || 0) > 1 && Number(gt.height || 0) > 1);
    if ((st == null ? void 0 : st.revision) !== _t && Os(), !bt) {
      C.fillStyle = "rgba(255, 255, 255, 0.06)", C.fillRect(L, $, k, T), C.strokeStyle = "rgba(255, 255, 255, 0.12)", C.lineWidth = 1, C.strokeRect(L + 0.5, $ + 0.5, k - 1, T - 1), Os(), C.restore(), ht();
      return;
    }
    C.drawImage(gt, L, $, k, T), C.restore(), ht();
  }
  function eg(i, o, c = {}) {
    var k, T, L, $;
    const l = ii();
    if (!i || !l || !(Number((o == null ? void 0 : o.width) || 0) > 0) || !(Number((o == null ? void 0 : o.height) || 0) > 0)) return null;
    const h = zl(), m = jl(h), w = Tr(!1), v = ((T = (k = p.paintEngine) == null ? void 0 : k.getErpTarget) == null ? void 0 : T.call(k, w)) || null, b = hc({
      stateRevision: [
        "cutout_preview_target",
        String((l == null ? void 0 : l.currentSrc) || (l == null ? void 0 : l.src) || ""),
        Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
        Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0),
        Array.isArray(m) ? m.map((K) => `${String((K == null ? void 0 : K.assetId) || "")}:${String((K == null ? void 0 : K.revision) || "")}`).join(",") : "",
        $e()
      ].join("|"),
      backgroundSource: l,
      backgroundRevision: String(c.cachePrefix || "modal_cutout_output_preview"),
      coverageDeg: ze(d.coverage),
      scene: h,
      textures: m,
      paintSource: ((L = v == null ? void 0 : v.displayPaint) == null ? void 0 : L.canvas) || null,
      paintRevision: $e(),
      maskSource: (($ = v == null ? void 0 : v.committedMask) == null ? void 0 : $.canvas) || null,
      maskRevision: $e(),
      backgroundOpacity: 1,
      showMaskTint: !1
    }), N = wi(i);
    return Q.syncState(b) ? Q.renderToTarget(
      "cutout_preview",
      N,
      {
        width: o.width,
        height: o.height,
        dpr: window.devicePixelRatio || 1,
        backgroundOpacity: 1,
        showMaskTint: !1
      }
    ) : null;
  }
  function ng() {
    Ls();
  }
  function Os() {
    if (e !== "cutout") return;
    const i = performance.now(), o = op(), c = i - Number(p.cutoutPreviewSurfaceLastTs || 0);
    if (p.cutoutPreviewSurfaceRaf || p.cutoutPreviewSurfaceTimer) return;
    const l = () => {
      p.cutoutPreviewSurfaceRaf = requestAnimationFrame(() => {
        var h, m, w, v, b, N, S, k;
        p.cutoutPreviewSurfaceRaf = 0, p.cutoutPreviewSurfaceLastTs = performance.now(), ng(), It.dirty = !0, (m = (h = t.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || m.call(h), (w = t.setDirtyCanvas) == null || w.call(t, !0, !1), (b = (v = t.graph) == null ? void 0 : v.setDirtyCanvas) == null || b.call(v, !0, !0), (k = (S = (N = pn) == null ? void 0 : N.canvas) == null ? void 0 : S.setDirty) == null || k.call(S, !0, !0);
      });
    };
    if (c >= o) {
      l();
      return;
    }
    p.cutoutPreviewSurfaceTimer = window.setTimeout(() => {
      p.cutoutPreviewSurfaceTimer = 0, p.cutoutPreviewSurfaceRaf || l();
    }, Math.max(0, Math.ceil(o - c)));
  }
  function Fs(i, o) {
    if (!i || !o) return null;
    const c = Number(o.x || 0), l = Number(o.y || 0);
    return Gl(i, c, l);
  }
  function Gi(i) {
    if (!i) return null;
    const o = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, l = Math.cos(c);
    return Yn(l * Math.sin(o), Math.sin(c), l * Math.cos(o));
  }
  function Xe(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function vr(i, o, c, l = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: He(i, "widthScale", 1),
      pressureLike: He(i, "pressureLike", 1)
    }, ...l, u: o, v: c };
  }
  function rg(i, o, c) {
    const l = Xe(i), h = Xe(o);
    return vr(i, kn(l.x, h.x, c), kn(l.y, h.y, c), {
      t: kn(Number((i == null ? void 0 : i.t) || 0), Number((o == null ? void 0 : o.t) || 0), c),
      widthScale: kn(He(i, "widthScale", 1), He(o, "widthScale", 1), c),
      pressureLike: kn(He(i, "pressureLike", 1), He(o, "pressureLike", 1), c)
    });
  }
  function ig(i, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function nu(i, o, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    if (i.length === 1) return [vr(i[0], Xe(i[0]).x, Xe(i[0]).y)];
    const l = ig(o, c), h = (S, k) => {
      const T = [0];
      for (let pt = 1; pt < S.length; pt += 1) {
        const gt = Xe(S[pt - 1]), bt = Xe(S[pt]);
        T.push(T[pt - 1] + Math.hypot(bt.x - gt.x, bt.y - gt.y));
      }
      const L = T[T.length - 1] || 0;
      if (L <= 1e-8) {
        const pt = S[0], gt = Xe(pt);
        return [vr(pt, gt.x, gt.y)];
      }
      const $ = [];
      let K = 0;
      for (let pt = 0; pt <= L + 1e-9; pt += k) {
        for (; K < T.length - 2 && T[K + 1] < pt; ) K += 1;
        const gt = T[K], bt = T[K + 1], lt = Math.max(1e-8, bt - gt);
        $.push(rg(S[K], S[K + 1], U((pt - gt) / lt, 0, 1)));
      }
      const ht = S[S.length - 1], xt = Xe(ht), _t = $[$.length - 1], st = _t ? Xe(_t) : null;
      return (!st || Math.hypot(st.x - xt.x, st.y - xt.y) > k * 0.35) && $.push(vr(ht, xt.x, xt.y)), $;
    }, m = (S) => {
      if (!Array.isArray(S) || S.length < 3) return S ? S.slice() : [];
      const k = [vr(S[0], Xe(S[0]).x, Xe(S[0]).y)];
      for (let T = 0; T < S.length - 1; T += 1) {
        const L = S[T], $ = S[T + 1], K = Xe(L), ht = Xe($), xt = vr(
          L,
          K.x * 0.75 + ht.x * 0.25,
          K.y * 0.75 + ht.y * 0.25,
          {
            t: Number(L.t || 0) * 0.75 + Number($.t || 0) * 0.25,
            widthScale: He(L, "widthScale", 1) * 0.75 + He($, "widthScale", 1) * 0.25,
            pressureLike: He(L, "pressureLike", 1) * 0.75 + He($, "pressureLike", 1) * 0.25
          }
        ), _t = vr(
          L,
          K.x * 0.25 + ht.x * 0.75,
          K.y * 0.25 + ht.y * 0.75,
          {
            t: Number(L.t || 0) * 0.25 + Number($.t || 0) * 0.75,
            widthScale: He(L, "widthScale", 1) * 0.25 + He($, "widthScale", 1) * 0.75,
            pressureLike: He(L, "pressureLike", 1) * 0.25 + He($, "pressureLike", 1) * 0.75
          }
        );
        k.push(xt, _t);
      }
      return k.push(vr(S[S.length - 1], Xe(S[S.length - 1]).x, Xe(S[S.length - 1]).y)), k;
    }, w = h(i, l);
    if (w.length < 3) return w;
    const v = c ? 2 : 1;
    let b = w.slice();
    for (let S = 0; S < v; S += 1) b = m(b);
    return h(b, Math.max(l * 0.75, 55e-5));
  }
  function He(i, o, c = 1) {
    const l = Number(i == null ? void 0 : i[o]);
    return Number.isFinite(l) ? Math.max(0, l) : c;
  }
  function ag(i) {
    const o = Number(i == null ? void 0 : i.radiusValue);
    if (Number.isFinite(o) && o > 0) {
      const c = String((i == null ? void 0 : i.radiusModel) || "").trim() || "erp_uv_norm";
      return c === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
      } : {
        model: c,
        value: o
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
    };
  }
  function Vs(i, o) {
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(i)), c.height = Math.max(1, Math.round(o));
    const l = c.getContext("2d");
    return l && (l.clearRect(0, 0, c.width, c.height), l.imageSmoothingEnabled = !0), { canvas: c, ctx: l };
  }
  function Wi() {
    const i = qa();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function $e() {
    const i = qa();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function og() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function sg() {
    p.paintCompositeRevision += 1;
  }
  function cg() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function ru() {
    var i, o;
    p.paintEngineRevisionKey = null, (o = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || o.call(i, d), p.paintEngineRevisionKey = Wi();
  }
  function fn() {
    p.objectVisualRevision = Number(p.objectVisualRevision || 0) + 1, cg(), It.backgroundDirty = !0, It.dirty = !0;
  }
  function Dn({ rebuildPaintEngine: i = !1 } = {}) {
    og(), fn(), i && ru();
  }
  function Ki() {
    sg(), fn();
  }
  function Ka() {
    var l;
    const i = qa(), o = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== o && (p.paintEngine = Oc(i), p.paintEngineDescriptorKey = o, p.paintEngineRevisionKey = "");
    const c = Wi();
    p.paintEngineRevisionKey !== c && (p.paintEngineRevisionKey = c, (l = p.paintEngine) == null || l.rebuildCommitted(d));
  }
  function qa() {
    const i = Math.max(1, Number((d == null ? void 0 : d.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function br() {
    return qa();
  }
  function lg(i, o, c, l, h = null) {
    const m = ag(i), w = He(o, "widthScale", 1) * He(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * w) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Le) * c * w) : Math.max(0.5, m.value / (2 * Math.PI) * c * w) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * w);
  }
  function ug(i, o, c = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), m = c.preview === !0, w = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * w : 1, l === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const v = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, b = m ? Math.max(0.28, Number(v.a ?? 1) * 0.88) : Math.max(0.12, Number(v.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(v.r || 0) * 255)}, ${Math.round(Number(v.g || 0) * 255)}, ${Math.round(Number(v.b || 0) * 255)}, ${b})`;
  }
  function fg(i, o, c) {
    const l = Math.max(0.5, Math.min(c, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (i.beginPath(), i.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), i.fill());
  }
  function dg(i, o, c, l, h = {}) {
    if (!i || !Array.isArray(o) || !o.length) return;
    const m = Math.max(l.w, l.h) * 0.25;
    i.save(), ug(i, c, h);
    const w = (v) => fg(i, v, m);
    if (o.length === 1) {
      w(o[0]), i.restore();
      return;
    }
    for (let v = 0; v < o.length - 1; v += 1) {
      const b = o[v], N = o[v + 1];
      if (!b || !N) continue;
      const S = Number(b.x || 0), k = Number(b.y || 0), T = Number(N.x || 0), L = Number(N.y || 0), $ = Math.max(0.5, Math.min(m, Number(b.radiusPx || 0.5))), K = Math.max(0.5, Math.min(m, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(S) || !Number.isFinite(k) || !Number.isFinite(T) || !Number.isFinite(L) || !Number.isFinite($) || !Number.isFinite(K)) continue;
      const ht = T - S, xt = L - k, _t = Math.hypot(ht, xt);
      if (!Number.isFinite(_t) || _t < 1e-6) {
        w(b);
        continue;
      }
      if (_t > Math.max(l.w, l.h) * 0.5) continue;
      const st = Math.max(0.5, Math.min($, K)), pt = Math.max(0.35, Math.min(st * 0.4, 2.25)), gt = Math.max(1, Math.ceil(_t / pt));
      for (let bt = 0; bt <= gt; bt += 1) {
        const lt = bt / gt;
        w({
          x: kn(S, T, lt),
          y: kn(k, L, lt),
          radiusPx: kn($, K, lt)
        });
      }
    }
    w(o[o.length - 1]), i.restore();
  }
  function hg(i, o, c, l) {
    dg(i, o, c, l, { preview: !1 });
  }
  function pg(i, o, c, l, h) {
    var v, b, N, S;
    if (!i || !Array.isArray(o) || o.length < 3) return;
    const m = "u", w = "v";
    if (i.save(), String((c == null ? void 0 : c.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((c == null ? void 0 : c.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const k = (c == null ? void 0 : c.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(k.r || 0) * 255)}, ${Math.round(Number(k.g || 0) * 255)}, ${Math.round(Number(k.b || 0) * 255)}, ${Number(k.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((v = o[0]) == null ? void 0 : v[m]) || 0) * l.w, Number(((b = o[0]) == null ? void 0 : b[w]) || 0) * l.h);
    for (let k = 1; k < o.length; k += 1)
      i.lineTo(Number(((N = o[k]) == null ? void 0 : N[m]) || 0) * l.w, Number(((S = o[k]) == null ? void 0 : S[w]) || 0) * l.h);
    i.closePath(), i.fill(), i.restore();
  }
  function iu(i) {
    const o = (i == null ? void 0 : i.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function gg(i, o) {
    const c = iu(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: lg(i, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function mg(i, o, c = null) {
    var v, b, N, S;
    if (!(i != null && i.ctx) || !o) return !1;
    const l = c || { w: Number(((v = i.canvas) == null ? void 0 : v.width) || 0), h: Number(((b = i.canvas) == null ? void 0 : b.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((N = o == null ? void 0 : o.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((S = o == null ? void 0 : o.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill")
      return pg(i.ctx, iu(h), h, l), !0;
    const w = gg(h, l);
    return w.length ? (hg(i.ctx, w, h, l), !0) : !1;
  }
  function yg(i, o, c, l = 8) {
    const h = new Uint8Array(o * c), m = [], w = new Int32Array(o * c), v = new Int32Array(o * c);
    for (let b = 0; b < c; b += 1)
      for (let N = 0; N < o; N += 1) {
        const S = b * o + N;
        if (h[S] || i[S] <= l) continue;
        let k = 0, T = 0;
        w[T] = N, v[T] = b, T += 1, h[S] = 1;
        const L = [];
        let $ = N, K = b, ht = N, xt = b;
        for (; k < T; ) {
          const _t = w[k], st = v[k];
          k += 1, L.push({ x: _t, y: st }), _t < $ && ($ = _t), st < K && (K = st), _t > ht && (ht = _t), st > xt && (xt = st);
          const pt = [
            [_t - 1, st],
            [_t + 1, st],
            [_t, st - 1],
            [_t, st + 1]
          ];
          for (const [gt, bt] of pt) {
            if (gt < 0 || bt < 0 || gt >= o || bt >= c) continue;
            const lt = bt * o + gt;
            h[lt] || i[lt] <= l || (h[lt] = 1, w[T] = gt, v[T] = bt, T += 1);
          }
        }
        m.push({ pixels: L, minX: $, minY: K, maxX: ht, maxY: xt });
      }
    return m;
  }
  function vg(i, o, c = {}) {
    var N;
    const l = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (N = i == null ? void 0 : i.getContext) == null ? void 0 : N.call(i, "2d");
    if (!m || l < 1 || h < 1) return [];
    const w = m.getImageData(0, 0, l, h), v = new Uint8Array(l * h);
    for (let S = 0; S < v.length; S += 1) v[S] = w.data[S * 4 + 3];
    return yg(v, l, h, 8).map((S, k) => {
      const T = S.maxX - S.minX + 1, L = S.maxY - S.minY + 1, $ = document.createElement("canvas");
      $.width = T, $.height = L;
      const K = $.getContext("2d");
      if (!K) return null;
      const ht = K.createImageData(T, L);
      return S.pixels.forEach(({ x: xt, y: _t }) => {
        const st = (_t * l + xt) * 4, pt = ((_t - S.minY) * T + (xt - S.minX)) * 4;
        ht.data[pt + 0] = w.data[st + 0], ht.data[pt + 1] = w.data[st + 1], ht.data[pt + 2] = w.data[st + 2], ht.data[pt + 3] = w.data[st + 3];
      }), K.putImageData(ht, 0, 0), {
        id: vi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + k * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: S.minX / l,
          v0: S.minY / h,
          u1: (S.maxX + 1) / l,
          v1: (S.maxY + 1) / h
        },
        rasterDataUrl: $.toDataURL("image/png"),
        transform: {
          du: 0,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function qi(i, o) {
    if (!i || !o) return null;
    const c = Ga(i), l = Mn(o, c.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const h = Mn(o, c.right) / l, m = Mn(o, c.up) / l, w = h * c.cr + m * c.sr, v = -h * c.sr + m * c.cr;
    return {
      x: (w / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - v / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function bg(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const c = gr();
      return i.map((l) => ({
        x: c.x + Number(l.u || 0) * c.w,
        y: c.y + Number(l.v || 0) * c.h
      }));
    }
    const o = i.map((c) => Ui(Gi(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function _g(i) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const c = gr();
      return i.map((l) => ({
        x: c.x + Number(l.u || 0) * c.w,
        y: c.y + Number(l.v || 0) * c.h
      }));
    }
    const o = i.map((c) => Ui(Gi(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function wg(i, o = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let c = 0; c < i.length; c += 1) {
      const l = i[c], h = i[(c + 1) % i.length];
      if (!l || !h || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(l.x), Number(h.y) - Number(l.y)) > o) return !1;
    }
    return !0;
  }
  function xg(i, o, c) {
    if (!Array.isArray(i) || i.length < 3 || !o || !c) return [];
    const l = [];
    for (const h of i) {
      const m = Gi(h), w = qi(o, m);
      if (!w) return [];
      l.push({
        x: Number(c.x || 0) + Number(w.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(w.y || 0) * Number(c.h || 0)
      });
    }
    return wg(l, Math.max(80, Math.max(c.w, c.h) * 0.75)) ? l : [];
  }
  function Sg(i, o, c) {
    if (!Array.isArray(i) || i.length < 1 || !o || !c) return [];
    const l = [];
    for (const h of i) {
      const m = Gi(h), w = qi(o, m);
      w && l.push({
        x: Number(c.x || 0) + Number(w.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(w.y || 0) * Number(c.h || 0)
      });
    }
    return l;
  }
  function Ng() {
    var l;
    const i = Jt(), o = Ze(i), c = ii();
    if (!i || !o) return !1;
    if (C.save(), C.fillStyle = "#050505", C.fillRect(0, 0, A.width, A.height), C.shadowColor = "rgba(0, 0, 0, 0.45)", C.shadowBlur = 24, C.shadowOffsetX = 0, C.shadowOffsetY = 10, C.fillStyle = "rgba(14, 14, 14, 1)", C.fillRect(o.x, o.y, o.w, o.h), C.restore(), C.save(), C.beginPath(), C.rect(o.x, o.y, o.w, o.h), C.clip(), c && (c.complete || c.naturalWidth || c.width) && Number(c.naturalWidth || c.width || 0) > 1 && Number(c.naturalHeight || c.height || 0) > 1) {
      const h = wi(i);
      Ms(C, o, h, c, `modal_frame_${String(i.id || "")}`) || drawCutoutProjectionPreview(
        C,
        t,
        c,
        o,
        i,
        String(((l = d.ui_settings) == null ? void 0 : l.preview_quality) || "balanced")
      );
    } else
      C.fillStyle = "rgba(255, 255, 255, 0.03)", C.fillRect(o.x, o.y, o.w, o.h);
    return C.restore(), C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.12)", C.lineWidth = 1, C.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1), C.restore(), !0;
  }
  function Mg() {
    var b, N;
    if (((b = p.interaction) == null ? void 0 : b.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, o = (N = i == null ? void 0 : i.geometry) == null ? void 0 : N.points;
    let c;
    if (p.mode === "frame") {
      const S = Jt(), k = Ze(S);
      c = xg(o, S, k);
    } else
      c = bg(o);
    if (!Array.isArray(c) || c.length < 3) return;
    const l = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), w = Math.round(Number(h.g || 0) * 255), v = Math.round(Number(h.b || 0) * 255);
    C.save(), C.beginPath(), C.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let S = 1; S < c.length; S++) C.lineTo(Number(c[S].x || 0), Number(c[S].y || 0));
    C.closePath(), l ? (C.lineWidth = 2, C.setLineDash([6, 6]), C.lineDashOffset = 0, C.strokeStyle = "rgba(0,0,0,0.96)", C.stroke(), C.lineDashOffset = -6, C.strokeStyle = "rgba(255,255,255,0.96)", C.stroke(), C.setLineDash([]), C.lineDashOffset = 0) : (C.lineWidth = 1.5, C.setLineDash([6, 4]), C.strokeStyle = `rgba(${m},${w},${v},1)`, C.stroke(), C.setLineDash([])), C.restore();
  }
  function kg() {
    p.mode === "frame" ? Ng() : p.mode === "unwrap" ? Up(!1) : Bp(!1), Jp(), p.mode !== "frame" && tg(), Mg(), Nt && (Nt.textContent = `${Math.round(p.viewFov)}°`), zt(), It.hasPresentedFrame || (It.hasPresentedFrame = !0, F.style.opacity = "1");
    const i = Lp();
    i ? (P == null || P.removeAttribute("data-stage-ready"), P == null || P.setAttribute("data-stage-loading-kind", i)) : (P == null || P.setAttribute("data-stage-ready", ""), P == null || P.removeAttribute("data-stage-loading-kind"));
  }
  function au() {
    var o;
    if (e !== "cutout") return !1;
    const i = String(((o = p.interaction) == null ? void 0 : o.kind) || "");
    return i === "move" || i === "scale" || i === "scale_x" || i === "scale_y" || i === "rotate";
  }
  function Pg(i = p.interaction) {
    if (e !== "stickers" || p.mode !== "pano") return !1;
    const o = String((i == null ? void 0 : i.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Ag(i = {}) {
    var l, h, m, w;
    const o = i.updateCutoutPreview !== !1;
    if (t.__panoLiveStateOverride = d, e === "cutout") {
      t.__panoLivePaintSurface = null, o && Os();
      return;
    }
    let c = null;
    try {
      const v = Tr(!1), b = Ha(), S = ((w = (m = (h = (l = p.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, v)) == null ? void 0 : m.displayPaint) == null ? void 0 : w.canvas) || null;
      S && (c = {
        source: S,
        revision: `${$e()}:${Ml()}`
      });
    } catch {
      c = null;
    }
    t.__panoLivePaintSurface = c;
  }
  function dt(i = {}) {
    var b, N, S, k, T, L, $, K, ht, xt;
    const o = !!i.localOnly, c = i.externalSync === !0, l = String(i.cause || ""), h = String(((b = p.interaction) == null ? void 0 : b.kind) || "");
    (!o || h === "view" || h === "pan_frame" || Pg() || !!((N = p.viewTween) != null && N.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (It.backgroundDirty = !0), o && Ha() && (p.livePaintInteractionRevision += 1), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (ja(), Ua());
    const v = e === "cutout" && (!o || l === "paint" || l === "cutout_frame" || l === "frame_transform" || l === "frame_view" || Nl() || au());
    Ag({ updateCutoutPreview: v }), c && (v || !o || e !== "cutout") && ((k = (S = t.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || k.call(S), (T = t.setDirtyCanvas) == null || T.call(t, !0, !1)), c && !o && (($ = (L = t.graph) == null ? void 0 : L.setDirtyCanvas) == null || $.call(L, !0, !0), (xt = (ht = (K = pn) == null ? void 0 : K.canvas) == null ? void 0 : ht.setDirty) == null || xt.call(ht, !0, !0)), It.dirty = !0;
  }
  function ou() {
    const i = A.getBoundingClientRect(), o = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return A.width !== o || A.height !== c || F.width !== o || F.height !== c ? (A.width = o, A.height = c, F.width = o, F.height = c, It.backgroundDirty = !0, It.dirty = !0, e === "cutout" && (It.pendingStableLayoutFrames = Math.max(Number(It.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Hs(i = performance.now()) {
    var o;
    if (It.running) {
      if (It.lastTickTs = i, p.outputPreviewAnim !== p.outputPreviewAnimTo) {
        const c = Math.max(1, Number(p.outputPreviewAnimDurationMs)), l = U((i - Number(p.outputPreviewAnimStartTs || 0)) / c, 0, 1), m = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? gb(l) : mb(l);
        p.outputPreviewAnim = kn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, m), It.dirty = !0, l >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
      }
      if ((o = p.viewTween) != null && o.active) {
        const c = p.viewTween, l = U((i - c.startTs) / c.durationMs, 0, 1), h = pb(l);
        p.viewYaw = Oe(c.startYaw + c.deltaYaw * h), p.viewPitch = c.startPitch + (c.targetPitch - c.startPitch) * h, p.viewFov = c.startFov + (c.targetFov - c.startFov) * h, It.backgroundDirty = !0, It.dirty = !0, l >= 1 && (p.viewTween = null);
      }
      if (p.viewInertia.vx = Number(Re.state.inertia.vx || 0), p.viewInertia.vy = Number(Re.state.inertia.vy || 0), p.viewInertia.active = !!Re.state.inertia.active, Re.stepInertia(i) && (p.viewInertia.vx = Number(Re.state.inertia.vx || 0), p.viewInertia.vy = Number(Re.state.inertia.vy || 0), p.viewInertia.active = !!Re.state.inertia.active, It.backgroundDirty = !0, It.dirty = !0), (It.dirty || i - It.lastSizeCheckTs >= 220) && (ou(), It.lastSizeCheckTs = i), It.pendingStableLayoutFrames > 0 && (It.pendingStableLayoutFrames -= 1, It.dirty = !0), It.dirty) {
        if (It.pendingStableLayoutFrames > 0) {
          It.rafId = requestAnimationFrame(Hs);
          return;
        }
        It.dirty = !1, kg();
      }
      It.rafId = requestAnimationFrame(Hs);
    }
  }
  function Cg() {
    It.running = !1, It.rafId && cancelAnimationFrame(It.rafId), It.rafId = 0;
  }
  function ie() {
    r || (p.historyController.commitActionGroup(JSON.stringify(Qf(d))), Gs());
  }
  function Yi(i) {
    if (r) return;
    const o = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (Gs(), !o) return;
    const c = JSON.parse(o);
    Object.keys(d).forEach((l) => delete d[l]), Object.assign(d, c), p.selectedId = e === "stickers" || e === "cutout" ? d.active.selected_sticker_id : d.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], Dn(), dn(), Bt(), Rn(), dt({ cause: "cutout_frame" });
  }
  function su() {
    var c, l;
    const i = Array.isArray((c = p.historyController) == null ? void 0 : c.entries) ? p.historyController.entries : [], o = Number((l = p.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !r && i.length > 1 && o > 0,
      canRedo: !r && i.length > 1 && o >= 0 && o < i.length - 1
    };
  }
  function dn() {
    var w, v, b;
    Mt == null || Mt.querySelectorAll("[data-tool-mode]").forEach((N) => {
      const S = N.getAttribute("data-tool-mode") === p.primaryTool;
      N.classList.toggle("active", S), N.setAttribute("aria-pressed", S ? "true" : "false");
    });
    const i = p.primaryTool === "paint" || p.primaryTool === "mask";
    if (Et && tt(i), !i) {
      et.forEach((N) => {
        N.classList.remove("is-active");
      }), Ct && (Ct.hidden = !0);
      return;
    }
    const o = p.primaryTool, c = et.find((N) => String(N.getAttribute("data-paint-pane") || "") === o) || null;
    if (et.forEach((N) => {
      N.classList.toggle("is-active", N === c);
    }), E.forEach((N) => {
      N.hidden = !1;
    }), V.forEach((N) => {
      N.hidden = !1;
    }), nt && (clearTimeout(nt), nt = 0), D.querySelectorAll("[data-paint-tool]").forEach((N) => {
      N.classList.toggle("active", N.getAttribute("data-paint-tool") === p.paintTool);
    }), D.querySelectorAll("[data-mask-tool]").forEach((N) => {
      N.classList.toggle("active", N.getAttribute("data-mask-tool") === p.maskTool);
    }), vt) {
      const N = p.paintTool !== "eraser";
      vt.hidden = !1, vt.classList.toggle("disabled", !N), !N && Ct && !Ct.hidden && (nt = window.setTimeout(() => {
        Ct.hidden = !0, nt = 0;
      }, 170));
      const S = ((w = Lo.find((T) => Oo(p.paintColor, T.color))) == null ? void 0 : w.id) || "";
      vt.querySelectorAll("[data-paint-color-swatch]").forEach((T) => {
        const L = T.getAttribute("data-paint-color-swatch") === S;
        T.classList.toggle("active", L), T.setAttribute("aria-pressed", L ? "true" : "false"), T.disabled = !N;
      });
      const k = vt.querySelector("[data-paint-color-custom]");
      if (k) {
        const T = !S;
        k.classList.toggle("active", T), k.style.setProperty("--custom-color", Pn(p.customPaintColor, 1)), k.setAttribute("aria-pressed", T ? "true" : "false"), k.disabled = !N;
      }
      if (Ve && (Ve.value = String(Math.round(U(Number(((v = p.customPaintColor) == null ? void 0 : v.a) ?? 1), 0, 1) * 100))), an && (an.textContent = `${Math.round(U(Number(((b = p.customPaintColor) == null ? void 0 : b.a) ?? 1), 0, 1) * 100)}%`), de && (de.style.background = Pn(p.customPaintColor)), Ct) {
        const T = la(p.customPaintColor);
        Ct.style.setProperty("--picker-hue-color", Pn({ ...xc(T.h, 1, 1), a: 1 }, 1)), Ct.style.setProperty("--picker-sat", `${U(T.s, 0, 1) * 100}%`), Ct.style.setProperty("--picker-val", `${(1 - U(T.v, 0, 1)) * 100}%`), Ct.style.setProperty("--picker-hue", `${U(T.h, 0, 1) * 100}%`);
      }
      if (ye) {
        const T = la(p.customPaintColor);
        ye.style.left = `${U(T.s, 0, 1) * 100}%`, ye.style.top = `${(1 - U(T.v, 0, 1)) * 100}%`;
      }
      if (Ke) {
        const T = la(p.customPaintColor);
        Ke.style.left = `${U(T.h, 0, 1) * 100}%`;
      }
      if (Qn && x) {
        const T = Array.from({ length: 8 }, (L, $) => p.customPaintHistory[$] || null);
        x.innerHTML = T.map((L, $) => `
          <button class="pano-paint-color-history-dot${L ? "" : " empty"}" type="button" data-paint-history-index="${$}" ${L ? `style="--swatch:${Pn(L, 1)}"` : ""} aria-label="Recent color ${$ + 1}" ${L ? "" : "disabled"}></button>
        `).join(""), x.querySelectorAll("[data-paint-history-index]").forEach((L) => {
          L.onclick = () => {
            const $ = Number(L.getAttribute("data-paint-history-index")), K = p.customPaintHistory[$];
            K && (p.customPaintColor = hn(K), p.paintColor = hn(K), dn());
          };
        });
      }
    }
    const l = wr(p.primaryTool === "paint" ? p.paintTool : p.maskTool), h = p.brushSizes[l] ?? 10, m = mp();
    E.forEach((N) => {
      N.classList.toggle("disabled", m);
    }), G.forEach((N) => {
      N.value = String(h);
      const S = (h - 1) / 119 * 100;
      N.style.setProperty("--v", `${U(S, 0, 100)}%`), N.disabled = m;
    }), W.forEach((N) => {
      N.textContent = String(h);
    });
  }
  function oi(i, o, c, l, h, m, w, v = !0) {
    const b = document.createElement("div");
    b.dataset.key = c, b.dataset.min = String(h), b.dataset.max = String(m), b.className = "pano-field", b.innerHTML = `<label>${l}</label><input type='range' min='${h}' max='${m}' step='${w}' value='${Number(o[c] || 0)}'><input type='number' min='${h}' max='${m}' step='${w}' value='${Sc(o[c] || 0)}'>`;
    const [N, S] = b.querySelectorAll("input"), k = () => {
      const L = Number(h), $ = Number(m), ht = (Number(N.value) - L) / Math.max(1e-6, $ - L) * 100;
      N.style.setProperty("--v", `${U(ht, 0, 100)}%`);
    };
    N.disabled = !v, S.disabled = !v;
    const T = (L) => {
      if (!v) return;
      let $ = Number(L);
      Number.isNaN($) && ($ = 0), $ = U($, h, m), c === "yaw_deg" && ($ = Oe($)), o[c] = $, e === "cutout" && (c === "hFOV_deg" || c === "vFOV_deg") && (o.aspect_id = jr(o)), N.value = String($), S.value = Sc($), k(), dt();
    };
    N.oninput = () => T(N.value), S.oninput = () => T(S.value), N.onchange = () => ie(), S.onchange = () => ie(), k(), i.appendChild(b);
  }
  function $s() {
    const i = pe();
    if (!i) return;
    p.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: yi(i)
    }, St.querySelectorAll(".pano-field[data-key]").forEach((m) => {
      const w = m.dataset.key;
      if (!w || !(w in i)) return;
      const v = m.querySelector("input[type='range']"), b = m.querySelector("input[type='number']");
      if (!v || !b) return;
      const N = Number(m.dataset.min ?? v.min ?? 0), S = Number(m.dataset.max ?? v.max ?? 0);
      let k = Number(i[w] || 0);
      Number.isNaN(k) && (k = 0), k = U(k, N, S);
      const T = String(k);
      v.value !== T && (v.value = T);
      const L = Sc(k);
      b.value !== L && (b.value = L);
      const $ = (k - N) / Math.max(1e-6, S - N) * 100;
      v.style.setProperty("--v", `${U($, 0, 100)}%`);
    });
    const c = yi(i), l = St.querySelector(".pano-cutout-aspect-label span");
    l && (l.textContent = c), St.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]").forEach((m) => {
      m.classList.toggle("active", String(m.getAttribute("data-aspect")) === c);
    });
  }
  function cu({ disabled: i = !1, onChange: o }) {
    const c = ze(d.coverage), l = document.createElement("div");
    l.innerHTML = `
      <div class="pano-section-title">
        <span>Scene</span>
      </div>
      <div class="pano-ui-row pano-coverage-row">
        <label>Coverage</label>
        <div class="pano-segment" data-setting="coverage" data-selected="${c === 180 ? "1" : "0"}">
          <button class="pano-segment-btn" type="button" data-value="360" aria-pressed="${c === 360 ? "true" : "false"}">360</button>
          <button class="pano-segment-btn" type="button" data-value="180" aria-pressed="${c === 180 ? "true" : "false"}">180</button>
        </div>
      </div>
    `;
    const h = l.querySelector("[data-setting='coverage']"), m = (w) => {
      const v = ze(w);
      h.setAttribute("data-selected", v === 180 ? "1" : "0"), h.querySelectorAll(".pano-segment-btn").forEach((b) => {
        b.setAttribute("aria-pressed", ze(b.getAttribute("data-value")) === v ? "true" : "false"), b.disabled = !!i;
      });
    };
    return h.querySelectorAll(".pano-segment-btn").forEach((w) => {
      w.onclick = () => {
        if (i) return;
        const v = ze(w.getAttribute("data-value"));
        v !== ze(d.coverage) && (o == null || o(v), m(v));
      };
    }), m(c), l;
  }
  function Bt() {
    var at, Pt, Ut, At, Rt, $t, Ft, Vt, ce, tr, er, Zi, no, ui, fi, Ji;
    if (a) return;
    const i = [...St.children].slice(0, 2);
    St.innerHTML = "", i.forEach((kt) => St.appendChild(kt));
    const o = St.querySelector(".pano-side-actions");
    if (o && (o.innerHTML = ""), s) {
      const kt = document.createElement("div");
      kt.className = "pano-inspector", kt.appendChild(cu({
        onChange: (Kt) => {
          var le;
          d.coverage = Kt, p.coverage = Kt, g && (g.value = String(Kt), (le = g.callback) == null || le.call(g, g.value)), It.backgroundDirty = !0, dt(), Bt();
        }
      }));
      const Gt = document.createElement("details");
      Gt.className = "pano-ui-settings", Gt.open = !1, Gt.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Dt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(at = d.ui_settings) != null && at.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Pt = d.ui_settings) != null && Pt.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Ut = d.ui_settings) != null && Ut.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(At = d.ui_settings) != null && At.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Rt = d.ui_settings) != null && Rt.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${($t = d.ui_settings) != null && $t.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const ge = Gt.querySelector("[data-setting='invert-x']"), Ln = Gt.querySelector("[data-setting='invert-y']"), nr = Gt.querySelector("[data-ui-picker='quality']"), On = Gt.querySelector("[data-action='ui-reset-defaults']"), rr = (Kt, le, Sn, di) => {
        const xr = Kt.querySelector(".pano-picker-trigger"), Qi = Kt.querySelector(".pano-picker-label"), Nn = Kt.querySelector(".pano-picker-pop"), Sr = () => {
          const Vn = String(Sn()), Hn = le.find((ta) => String(ta.value) === Vn) || le[0];
          Qi.textContent = Hn.label, Nn.innerHTML = "", le.forEach((ta) => {
            const ea = document.createElement("button");
            ea.type = "button", ea.className = `pano-picker-item${String(ta.value) === Vn ? " active" : ""}`, ea.textContent = ta.label, ea.onclick = () => {
              di(ta.value), Nn.hidden = !0, Sr(), _r(), dt();
            }, Nn.appendChild(ea);
          });
        };
        return xr.onclick = (Vn) => {
          Vn.stopPropagation(), Gt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((Hn) => {
            Hn !== Nn && (Hn.hidden = !0);
          }), Nn.hidden = !Nn.hidden;
        }, Sr(), Sr;
      }, Fn = (Kt, le) => {
        Kt.setAttribute("data-selected", le ? "1" : "0"), Kt.querySelectorAll(".pano-segment-btn").forEach((Sn) => {
          Sn.setAttribute("aria-pressed", Sn.getAttribute("data-value") === (le ? "1" : "0") ? "true" : "false");
        });
      };
      ge.querySelectorAll(".pano-segment-btn").forEach((Kt) => {
        Kt.onclick = () => {
          const le = Kt.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_x = le, Fn(ge, le), _r(), dt();
        };
      }), Ln.querySelectorAll(".pano-segment-btn").forEach((Kt) => {
        Kt.onclick = () => {
          const le = Kt.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_y = le, Fn(Ln, le), _r(), dt();
        };
      });
      const Ot = rr(
        nr,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(d.ui_settings.preview_quality || "balanced"),
        (Kt) => {
          const le = String(Kt || "balanced");
          d.ui_settings.preview_quality = le === "draft" || le === "high" ? le : "balanced";
        }
      );
      On.onclick = () => {
        d.ui_settings.invert_view_x = !1, d.ui_settings.invert_view_y = !1, d.ui_settings.preview_quality = "balanced", Fn(ge, !1), Fn(Ln, !1), Ot(), _r(), dt();
      }, kt.appendChild(Gt), St.appendChild(kt);
      const Zt = document.createElement("div");
      Zt.className = "pano-side-footer", Zt.innerHTML = '<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>', Zt.querySelector("[data-action='close-preview']").onclick = () => li(), St.appendChild(Zt), Xi(kt);
      return;
    }
    const c = pe(), l = Tn(), h = Il();
    l.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), c && h !== "stroke" && (p.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (h === "image" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (h === "image" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: yi(c)
    });
    const m = p.panelLastValues || (e === "stickers" || h === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), w = h === "stroke" ? null : c, v = w || m, b = !!w, N = document.createElement("div");
    N.className = "pano-inspector", N.appendChild(cu({
      disabled: r,
      onChange: (kt) => {
        var Gt, ge;
        d.coverage = kt, p.coverage = kt, g && (g.value = String(kt), (Gt = g.callback) == null || Gt.call(g, g.value)), ve(), (ge = t.setDirtyCanvas) == null || ge.call(t, !0, !0), Bt(), zt(), dt();
      }
    }));
    const S = document.createElement("div");
    for (S.innerHTML = `
      <div class="pano-section-title">
        <span>Transform</span>
      </div>
    `; S.firstChild; ) N.appendChild(S.firstChild);
    if (St.appendChild(N), e === "stickers" || e === "cutout") {
      const kt = document.createElement("div");
      kt.className = "pano-field-wide pano-target-row";
      const Gt = "Selection";
      kt.innerHTML = `
        <label>${Gt}</label>
        <div class="pano-picker">
          <button class="pano-picker-trigger" type="button">
            <span class="pano-picker-label"></span>
            <span class="pano-picker-caret">▾</span>
          </button>
          <div class="pano-picker-pop" hidden></div>
        </div>
      `;
      const ge = kt.querySelector(".pano-picker-trigger"), Ln = kt.querySelector(".pano-picker-label"), nr = kt.querySelector(".pano-picker-pop"), On = [{ id: "", label: e === "stickers" ? "No image" : "Nothing selected", item: null }];
      e === "stickers" ? bn().forEach((Ot, Zt) => {
        var Sn, di;
        const Kt = Me(Ot) ? String(Ot.id || Fr) : String(((di = (Sn = d.assets) == null ? void 0 : Sn[Ot.asset_id]) == null ? void 0 : di.name) || Ot.asset_id || Ot.id), le = `${Zt + 1}. ${Kt}${Me(Ot) && ni(Ot) ? " (hidden)" : ""}`;
        On.push({ id: Ot.id, label: le, item: Ot, kind: "image" });
      }) : dp().forEach((Ot) => {
        On.push({ id: Ot.item.id, label: Ot.label, item: Ot.item, kind: Ot.kind });
      });
      const rr = (w == null ? void 0 : w.id) || "", Fn = On.find((Ot) => Ot.id === rr) || On[0];
      Ln.innerHTML = Fn.item ? El(Fn) : xo(String(Fn.label || "")), nr.innerHTML = "", On.forEach((Ot) => {
        const Zt = document.createElement("button");
        Zt.type = "button", Zt.className = `pano-picker-item${Ot.id === rr ? " active" : ""}`, Zt.innerHTML = Ot.item ? El(Ot) : xo(String(Ot.label || "")), Zt.onclick = () => {
          nr.hidden = !0, ji(Ot.item || null);
          const Kt = Ot.item || null;
          if (Kt && !Ce(Kt)) {
            const le = Oe(Number(Kt.yaw_deg || 0)), Sn = U(Number(Kt.pitch_deg || 0), -89.9, 89.9);
            on(le, Sn, p.viewFov);
          }
          Bt(), zt(), dt();
        }, nr.appendChild(Zt);
      }), ge.disabled = On.length <= 1, ge.onclick = (Ot) => {
        Ot.stopPropagation(), !ge.disabled && (nr.hidden = !nr.hidden);
      }, N.appendChild(kt);
    }
    const k = document.createElement("div");
    k.className = "pano-state-actions", k.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${Dt.copy}<span>Copy State</span></button>`;
    const T = k.querySelector("[data-action='copy-state-inline']");
    T.disabled = !b || h === "stroke" || l.length > 1, T.onclick = async () => {
      if (!b || h === "stroke" || l.length > 1) return;
      const kt = JSON.stringify(e === "cutout" && h !== "image" ? Ol(v) : Np(c));
      try {
        await navigator.clipboard.writeText(kt);
        const Gt = T.querySelector("span");
        Gt && (Gt.textContent = "Copied", window.setTimeout(() => {
          Gt.textContent = "Copy State";
        }, 900));
      } catch {
      }
    }, N.appendChild(k);
    const L = document.createElement("div");
    L.className = `pano-params${p.panelWasEnabled ? "" : " disabled"}`, N.appendChild(L), l.length > 1 ? (L.innerHTML = `
        <div class="pano-param-note">Selected objects: ${l.length}</div>
        <div class="pano-param-note">Multi-selection supports z-order and delete.</div>
      `, L.classList.toggle("disabled", !b), p.panelWasEnabled = b, ja()) : (oi(L, v, "yaw_deg", "Yaw", -180, 180, 0.1, b && !r), oi(L, v, "pitch_deg", "Pitch", -90, 90, 0.1, b && !r), oi(L, v, "hFOV_deg", "H FOV", 1, 179, 0.1, b && !r), oi(L, v, "vFOV_deg", "V FOV", 1, 179, 0.1, b && !r), e === "stickers" || h === "image" ? oi(L, v, "rot_deg", "Rotation", -180, 180, 0.1, b && !r) : oi(L, v, "roll_deg", "Roll", -180, 180, 0.1, b && !r), b !== p.panelWasEnabled ? requestAnimationFrame(() => {
      L.classList.toggle("disabled", !b);
    }) : L.classList.toggle("disabled", !b), p.panelWasEnabled = b, ja());
    const $ = document.createElement("div");
    $.className = "pano-visibility-section", $.innerHTML = `
      <div class="pano-section-title">
        <span>Layers</span>
      </div>
      <div class="pano-visibility-stack">
        <div class="pano-visibility-row" data-visibility-row="mask">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${Dt.circle_dashed_tool}</span><span>Mask</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="mask" aria-label="Toggle mask"></button>
        </div>
        <div class="pano-visibility-row" data-visibility-row="objects">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${Dt.image}</span><span>Paint / Images</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="objects" aria-label="Toggle paint and images"></button>
        </div>
        <div class="pano-visibility-row" data-visibility-row="panorama">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${Dt.globe}</span><span>Panorama</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="panorama" aria-label="Toggle panorama"></button>
        </div>
      </div>
    `;
    const K = Array.isArray((Vt = (Ft = d == null ? void 0 : d.painting) == null ? void 0 : Ft.paint) == null ? void 0 : Vt.strokes) ? d.painting.paint.strokes.length : 0, ht = Array.isArray((tr = (ce = d == null ? void 0 : d.painting) == null ? void 0 : ce.mask) == null ? void 0 : tr.strokes) ? d.painting.mask.strokes.length : 0, xt = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((kt) => String((kt == null ? void 0 : kt.name) || "")) : [], _t = Qh(
      t,
      xt.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), st = !!String((_t == null ? void 0 : _t.src) || "").trim() || Dl("pano_input_images").length > 0, pt = Array.isArray(bn()) && bn().length > 0 || K > 0, gt = ht > 0, bt = (kt) => kt === "panorama" ? st : kt === "objects" ? pt : gt, lt = (kt, Gt) => {
      const ge = kt.closest("[data-visibility-row]"), Ln = bt(String(kt.getAttribute("data-visibility") || ""));
      kt.innerHTML = Gt ? Dt.eye : Dt.eye_dashed, kt.setAttribute("aria-pressed", Gt ? "true" : "false"), kt.setAttribute("data-tip", Gt ? "Hide" : "Show"), kt.disabled = !Ln, kt.classList.toggle("active", !!Gt), ge == null || ge.classList.toggle("is-hidden", !Gt), ge == null || ge.classList.toggle("is-disabled", !Ln);
    };
    if ($.querySelectorAll("[data-visibility]").forEach((kt) => {
      const Gt = String(kt.getAttribute("data-visibility") || ""), ge = () => Gt === "panorama" ? !!p.showPanorama : Gt === "objects" ? !!p.showObjects : !!p.showMask;
      lt(kt, ge()), kt.onclick = () => {
        bt(Gt) && (Gt === "panorama" ? p.showPanorama = !p.showPanorama : Gt === "objects" ? p.showObjects = !p.showObjects : p.showMask = !p.showMask, lt(kt, ge()), dt());
      };
    }), N.appendChild(Object.assign(document.createElement("div"), { className: "pano-divider" })), N.appendChild($), !r) {
      const kt = document.createElement("details");
      kt.className = "pano-ui-settings", kt.open = !1, kt.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Dt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(er = d.ui_settings) != null && er.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Zi = d.ui_settings) != null && Zi.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(no = d.ui_settings) != null && no.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(ui = d.ui_settings) != null && ui.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(fi = d.ui_settings) != null && fi.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Ji = d.ui_settings) != null && Ji.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const Gt = kt.querySelector("[data-setting='invert-x']"), ge = kt.querySelector("[data-setting='invert-y']"), Ln = kt.querySelector("[data-ui-picker='quality']"), nr = kt.querySelector("[data-action='ui-reset-defaults']"), On = (Ot, Zt, Kt, le) => {
        const Sn = Ot.querySelector(".pano-picker-trigger"), di = Ot.querySelector(".pano-picker-label"), xr = Ot.querySelector(".pano-picker-pop"), Qi = () => {
          const Nn = String(Kt()), Sr = Zt.find((Vn) => String(Vn.value) === Nn) || Zt[0];
          di.textContent = Sr.label, xr.innerHTML = "", Zt.forEach((Vn) => {
            const Hn = document.createElement("button");
            Hn.type = "button", Hn.className = `pano-picker-item${String(Vn.value) === Nn ? " active" : ""}`, Hn.textContent = Vn.label, Hn.onclick = () => {
              le(Vn.value), xr.hidden = !0, Qi(), _r(), t.setDirtyCanvas(!0, !0), dt();
            }, xr.appendChild(Hn);
          });
        };
        return Sn.onclick = (Nn) => {
          Nn.stopPropagation(), kt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((Sr) => {
            Sr !== xr && (Sr.hidden = !0);
          }), xr.hidden = !xr.hidden;
        }, Qi(), Qi;
      }, rr = (Ot, Zt) => {
        Ot.setAttribute("data-selected", Zt ? "1" : "0"), Ot.querySelectorAll(".pano-segment-btn").forEach((Kt) => {
          Kt.setAttribute("aria-pressed", Kt.getAttribute("data-value") === (Zt ? "1" : "0") ? "true" : "false");
        });
      };
      Gt.querySelectorAll(".pano-segment-btn").forEach((Ot) => {
        Ot.onclick = () => {
          const Zt = Ot.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_x = Zt, rr(Gt, Zt), _r(), t.setDirtyCanvas(!0, !0), dt();
        };
      }), ge.querySelectorAll(".pano-segment-btn").forEach((Ot) => {
        Ot.onclick = () => {
          const Zt = Ot.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_y = Zt, rr(ge, Zt), _r(), t.setDirtyCanvas(!0, !0), dt();
        };
      });
      const Fn = On(
        Ln,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(d.ui_settings.preview_quality || "balanced"),
        (Ot) => {
          const Zt = String(Ot || "balanced");
          d.ui_settings.preview_quality = Zt === "draft" || Zt === "high" ? Zt : "balanced";
        }
      );
      nr.onclick = () => {
        d.ui_settings.invert_view_x = !1, d.ui_settings.invert_view_y = !1, d.ui_settings.preview_quality = "balanced", rr(Gt, !1), rr(ge, !1), Fn(), _r(), t.setDirtyCanvas(!0, !0), dt();
      }, N.appendChild(kt);
    }
    const j = document.createElement("div");
    j.className = "pano-side-footer", j.innerHTML = `
      <button class="pano-btn" data-action="cancel-close">Cancel</button>
      <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
    `, j.querySelector("[data-action='cancel-close']").onclick = () => li(), j.querySelector("[data-action='save-close']").onclick = () => {
      mu(), li();
    }, St.appendChild(j), Xi(N);
  }
  function Ya(i) {
    if (!i) return !1;
    if (String(i.type || "").toLowerCase().startsWith("image/")) return !0;
    const c = String(i.name || "").toLowerCase();
    return c.endsWith(".png") || c.endsWith(".jpg") || c.endsWith(".jpeg") || c.endsWith(".webp") || c.endsWith(".gif") || c.endsWith(".bmp");
  }
  async function lu(i) {
    if (r || e !== "stickers" && e !== "cutout" || !Ya(i)) return;
    const o = ua("asset"), c = URL.createObjectURL(i);
    try {
      const l = await new Promise((w, v) => {
        const b = new Image();
        b.onload = () => w(b), b.onerror = () => v(new Error("image load failed")), b.src = c;
      });
      jt.set(o, l);
      const h = ua("st");
      d.stickers.push({
        id: h,
        asset_id: o,
        yaw_deg: p.viewYaw,
        pitch_deg: p.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Dr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: Tl()
      }), ji(d.stickers[d.stickers.length - 1]), js(), ie(), Bt(), zt(), dt();
      const m = (async () => {
        const w = await ks(i, String(i.name || o));
        (Array.isArray(d.stickers) ? d.stickers : []).filter((N) => String((N == null ? void 0 : N.asset_id) || "") === o).length && (d.assets[o] = w, ai(), ve(), Bt(), zt(), dt());
      })();
      ga.set(o, m);
      try {
        await m;
      } finally {
        ga.delete(o);
      }
    } catch (l) {
      console.error("[PanoramaSuite] failed to add sticker asset", l), delete d.assets[o], jt.delete(o);
      const h = Array.isArray(d.stickers) ? d.stickers : [], m = h.filter((w) => String((w == null ? void 0 : w.asset_id) || "") === o);
      m.length && (d.stickers = h.filter((w) => String((w == null ? void 0 : w.asset_id) || "") !== o), m.some((w) => {
        var v;
        return String((w == null ? void 0 : w.id) || "") === String(((v = p.selection) == null ? void 0 : v.id) || "");
      }) && ji(null), Bt(), zt(), dt());
    } finally {
      URL.revokeObjectURL(c);
    }
  }
  function uu(i) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const c = (l = o.files) == null ? void 0 : l[0];
      !c || typeof i != "function" || i(c);
    }, o.click();
  }
  function zs() {
    r || e !== "stickers" && e !== "cutout" || uu((i) => {
      lu(i);
    });
  }
  async function Ig(i) {
    var N;
    if (r || e !== "stickers" && e !== "cutout") return;
    const o = pe();
    if (!o || !Ee(o) || Me(o) || !Ya(i)) return;
    const c = String(o.id || ""), l = String(o.asset_id || ""), h = l ? cn(((N = d.assets) == null ? void 0 : N[l]) || null) : null, m = Number(o.vFOV_deg || 0), w = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, v = ua("asset"), b = URL.createObjectURL(i);
    try {
      const S = await new Promise((T, L) => {
        const $ = new Image();
        $.onload = () => T($), $.onerror = () => L(new Error("image load failed")), $.src = b;
      });
      jt.set(v, S), o.asset_id = v, o.vFOV_deg = Dr(
        Number(o.hFOV_deg || 30),
        Number(S.naturalWidth || S.width || 1),
        Number(S.naturalHeight || S.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, fn(), ie(), Bt(), zt(), dt();
      const k = (async () => {
        const T = await ks(i, String(i.name || v));
        (Array.isArray(d.stickers) ? d.stickers : []).some((K) => String((K == null ? void 0 : K.id) || "") === c && String((K == null ? void 0 : K.asset_id) || "") === v) && (d.assets[v] = T, ai(), ve(), Bt(), zt(), dt());
      })();
      ga.set(v, k);
      try {
        await k;
      } finally {
        ga.delete(v);
      }
    } catch (S) {
      console.error("[PanoramaSuite] failed to replace sticker asset", S), delete d.assets[v], jt.delete(v);
      const k = (Array.isArray(d.stickers) ? d.stickers : []).find((T) => String((T == null ? void 0 : T.id) || "") === c) || null;
      k && String(k.asset_id || "") === v && (l && h && (d.assets[l] = h), k.asset_id = l, k.vFOV_deg = m, k.crop = w ? { ...w } : null), fn(), Bt(), zt(), dt();
    } finally {
      URL.revokeObjectURL(b);
    }
  }
  function Eg() {
    if (r) return;
    const i = pe();
    !i || !Ee(i) || Me(i) || uu((o) => {
      Ig(o);
    });
  }
  async function Tg() {
    if (r || e !== "stickers") return;
    const i = d.assets && typeof d.assets == "object" ? d.assets : {}, o = Object.entries(i).filter(([, l]) => {
      const h = String((l == null ? void 0 : l.type) || "").toLowerCase(), m = String((l == null ? void 0 : l.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!o.length) return;
    let c = !1;
    for (const [l, h] of o)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const w = await fetch(m).then((k) => k.blob()), v = String(w.type || "image/png").split("/")[1] || "png", b = String((h == null ? void 0 : h.name) || `${l}.${v}`), N = new File([w], b, { type: w.type || "image/png" }), S = await ks(N, b);
        d.assets[l] = {
          ...S,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, c = !0;
      } catch (m) {
        console.error("[PanoramaSuite] failed to migrate embedded sticker asset", { assetId: l, err: m });
      }
    c && (ve(), dt());
  }
  function fu() {
    r || e === "cutout" && (js(), d.shots = [{
      id: ua("sh"),
      yaw_deg: p.viewYaw,
      pitch_deg: p.viewPitch,
      hFOV_deg: 64,
      vFOV_deg: 40,
      roll_deg: 0,
      aspect_id: Gh(64, 40)
    }], ji(d.shots[0]), p.cutoutAspectOpen = !1, ie(), ve(), Bt(), dt({ cause: "cutout_frame" }));
  }
  function Dg() {
    r || e === "cutout" && (d.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, d.active.selected_shot_id = null, ie(), ve(), Bt(), dt());
  }
  function Rg() {
    const i = Array.isArray(d.stickers) ? d.stickers : [], o = [];
    for (const c of i)
      Me(c) && (c.visible = !1, o.push(c));
    return o;
  }
  function du(i, o, c = "Clear") {
    return new Promise((l) => {
      const h = document.createElement("div");
      h.className = "pano-canvas-confirm", h.innerHTML = `
        <div class="pano-canvas-confirm-card" role="dialog" aria-modal="true" aria-label="${i}">
          <div class="pano-canvas-confirm-title">${i}</div>
          <div class="pano-canvas-confirm-text">${o}</div>
          <div class="pano-canvas-confirm-actions">
            <button class="pano-btn" data-action="cancel">Cancel</button>
            <button class="pano-btn pano-btn-primary" data-action="confirm">${c}</button>
          </div>
        </div>
      `;
      const m = (b) => {
        h.remove(), l(!!b);
      };
      h.addEventListener("pointerdown", (b) => {
        b.target === h && m(!1);
      });
      const w = h.querySelector("[data-action='cancel']"), v = h.querySelector("[data-action='confirm']");
      w.onclick = () => m(!1), v.onclick = () => m(!0), P.appendChild(h), v.focus();
    });
  }
  async function hu() {
    var c, l;
    if (r || !await du(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    d.painting = Ma(null), Dn();
    const o = Rg();
    e === "stickers" ? (d.stickers = o, d.assets = {}, p.selectedId = ((c = o[0]) == null ? void 0 : c.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], d.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, ai()) : (d.stickers = o, d.assets = {}, d.shots = [], p.selectedId = null, p.selectedIds = [], d.active.selected_sticker_id = null, d.active.selected_shot_id = null, p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, ai()), ie(), ve(), Bt(), zt(), dt();
  }
  async function Lg(i) {
    var m, w, v, b;
    if (r) return;
    const o = i === "mask" ? "mask" : "paint", c = o === "mask" ? "Mask" : "Paint", l = ci(o);
    if (!(!l.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((w = p.interaction) == null ? void 0 : w.layerKind) === o) || !await du(
      `Clear ${c}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((v = p.interaction) == null ? void 0 : v.kind) === "draw" && ((b = p.interaction) == null ? void 0 : b.layerKind) === o) {
        const N = br();
        N && p.paintEngine.cancelActiveStroke(N), p.interaction = null;
      }
      l.length = 0, d.painting.raster_objects = mn().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== o), o === "paint" && (Ie().length = 0), Dn(), ie(), ve(), Bt(), zt(), dn(), dt();
    }
  }
  function Og() {
    if (r) return;
    const i = pe();
    if (!i || !Ee(i) || Me(i)) return;
    const o = JSON.parse(JSON.stringify(i));
    o.id = ua("st"), o.yaw_deg = Oe((o.yaw_deg || 0) + 8), o.z_index = Tl(), d.stickers.push(o), d.active.selected_sticker_id = o.id, p.selectedId = o.id, p.selectedIds = [o.id], fn(), ie(), ve(), zt(), Bt(), dt();
  }
  function pu() {
    var c, l, h, m, w, v, b;
    if (r) return;
    const i = Tn(), o = pe();
    if (!(!o && i.length === 0)) {
      if (i.length > 1) {
        const N = new Set(i.filter((T) => Ce(T)).map((T) => String(T.actionGroupId || T.id || ""))), S = new Set(i.filter((T) => Ye(T)).map((T) => qe(T.rasterObjectId || T.id || ""))), k = new Set(i.filter(Ee).map((T) => String(T.id || "")));
        N.size > 0 && (d.painting.paint.strokes = (Array.isArray((l = (c = d.painting) == null ? void 0 : c.paint) == null ? void 0 : l.strokes) ? d.painting.paint.strokes : []).filter((T) => !N.has(String((T == null ? void 0 : T.actionGroupId) || ""))), d.painting.groups = Ie().filter((T) => !N.has(String((T == null ? void 0 : T.actionGroupId) || (T == null ? void 0 : T.id) || ""))), Dn()), S.size > 0 && (d.painting.raster_objects = mn().filter((T) => !S.has(String((T == null ? void 0 : T.id) || ""))), Ki()), k.size > 0 && (d.stickers = (Array.isArray(d.stickers) ? d.stickers : []).filter((T) => k.has(String((T == null ? void 0 : T.id) || "")) ? Me(T) ? (ni(T) || (T.visible = !1), !0) : !1 : !0), ai(), fn()), p.selectedId = null, p.selectedIds = [], ie(), ve(), Bt(), zt(), dt();
        return;
      }
      if (Ce(o)) {
        const N = String(o.actionGroupId || o.id || "").trim();
        d.painting.paint.strokes = (Array.isArray((m = (h = d.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? d.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== N), d.painting.groups = Ie().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== N), Dn(), p.selectedId = null, p.selectedIds = [], ie(), ve(), Bt(), zt(), dt();
        return;
      }
      if (Ye(o)) {
        const N = qe(o.rasterObjectId || o.id || "");
        d.painting.raster_objects = mn().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== N), Ki(), p.selectedId = null, p.selectedIds = [], ie(), ve(), Bt(), zt(), dt();
        return;
      }
      if (e === "stickers" || Ee(o)) {
        if (Me(o)) {
          if (ni(o)) return;
          o.visible = !1, fn(), ie(), ve(), Bt(), zt(), dt();
          return;
        }
        d.stickers = d.stickers.filter((N) => N.id !== o.id), ai(), fn(), p.selectedId = e === "cutout" ? d.active.selected_shot_id || ((w = d.stickers[0]) == null ? void 0 : w.id) || null : ((v = d.stickers[0]) == null ? void 0 : v.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], d.active.selected_sticker_id = ((b = d.stickers[0]) == null ? void 0 : b.id) || null, ie(), ve(), Bt(), zt(), dt();
        return;
      }
      Dg();
    }
  }
  function Fg(i, o) {
    if (!i) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const T = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(T)) {
        const [K, ht] = T.split(":").map((xt) => Number(xt));
        if (Number.isFinite(K) && Number.isFinite(ht)) return K >= ht;
      }
      const L = Number(i.hFOV_deg || 64), $ = Number(i.vFOV_deg || 40);
      return Math.abs(L - $) > 1e-6 ? L >= $ : Gc(i) >= 1;
    })();
    let [h, m] = c[String(o)] || c["1:1"];
    h >= m !== l && ([h, m] = [m, h]);
    const w = h / m, v = U(Number(i.hFOV_deg || 64), 1, 179), b = U(Number(i.vFOV_deg || 40), 1, 179), N = Math.sqrt(Math.max(1, v * b)), S = U(N * Math.sqrt(w), 1, 179), k = U(N / Math.sqrt(w), 1, 179);
    i.hFOV_deg = S, i.vFOV_deg = k, i.aspect_id = String(o);
  }
  function Vg(i) {
    if (!i) return;
    const o = Math.max(1, Number(i.hFOV_deg || 90)), c = Math.max(1, Number(i.vFOV_deg || 60));
    i.hFOV_deg = c, i.vFOV_deg = o, i.aspect_id = jr(i);
  }
  function gu() {
    Qr().forEach((o, c) => {
      o.type === "sticker" && o.item && (o.item.z_index = c), o.type === "strokeGroup" && o.item && (o.item.z_index = c), o.type === "rasterObject" && o.item && (o.item.z_index = c);
    });
  }
  function Hg() {
    if (r) return;
    const i = Tn();
    if (!pe() || i.length === 0) return;
    gu();
    const c = Qr(), l = new Set(i.map((v) => Ee(v) ? `sticker:${String(v.id || "")}` : Ye(v) ? `rasterObject:${qe(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), h = [], m = [];
    if (c.forEach((v) => {
      var N, S;
      const b = v.type === "sticker" ? `sticker:${String(((N = v.item) == null ? void 0 : N.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((S = v.item) == null ? void 0 : S.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      l.has(b) ? h.push(v) : m.push(v);
    }), !h.length || h[h.length - 1] === c[c.length - 1]) return;
    [...m, ...h].forEach((v, b) => {
      v.type === "sticker" && v.item && (v.item.z_index = b), v.type === "strokeGroup" && v.item && (v.item.z_index = b), v.type === "rasterObject" && v.item && (v.item.z_index = b);
    }), fn(), ie(), ve(), zt(), dt();
  }
  function $g() {
    if (r) return;
    const i = Tn();
    if (!pe() || i.length === 0) return;
    gu();
    const c = Qr(), l = new Set(i.map((v) => Ee(v) ? `sticker:${String(v.id || "")}` : Ye(v) ? `rasterObject:${qe(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), h = [], m = [];
    if (c.forEach((v) => {
      var N, S;
      const b = v.type === "sticker" ? `sticker:${String(((N = v.item) == null ? void 0 : N.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((S = v.item) == null ? void 0 : S.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      l.has(b) ? h.push(v) : m.push(v);
    }), !h.length || h[0] === c[0]) return;
    [...h, ...m].forEach((v, b) => {
      v.type === "sticker" && v.item && (v.item.z_index = b), v.type === "strokeGroup" && v.item && (v.item.z_index = b), v.type === "rasterObject" && v.item && (v.item.z_index = b);
    }), fn(), ie(), ve(), zt(), dt();
  }
  function mu() {
    r || (d.projection_model = "pinhole_rectilinear", d.alpha_mode = "straight", f && (d.output_preset = Kc(f.value, Number(d.output_preset || 2048))), g && (d.coverage = ze(g.value)), y && (d.bg_color = String(y.value || d.bg_color || "#00ff00")), Rn(), t.setDirtyCanvas(!0, !0));
  }
  function Rn() {
    var o;
    if (r) return;
    d.coverage = ze(d.coverage);
    const i = JSON.stringify(d);
    _ && (_.value = i, (o = _.callback) == null || o.call(_, i));
  }
  function _r() {
    d.ui_settings = Nb(d.ui_settings), r || Rn();
  }
  function ve() {
    var i;
    r || (Rn(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0));
  }
  function js() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", dn(), Bt());
  }
  function si(i) {
    const o = A.getBoundingClientRect();
    return {
      x: (i.clientX - o.left) / o.width * A.width,
      y: (i.clientY - o.top) / o.height * A.height
    };
  }
  function Xa(i) {
    const o = A.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(o.left || 0),
      y: Number(i.clientY) - Number(o.top || 0)
    };
  }
  function yu() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function Jt() {
    var c;
    if (e !== "cutout") return null;
    const i = Array.isArray(d.shots) ? d.shots : [], o = String(((c = d.active) == null ? void 0 : c.selected_shot_id) || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === o) || i[0] || null;
  }
  function Ze(i = Jt()) {
    var T, L, $, K;
    if (!i) return null;
    const o = Math.max(1e-4, Number(((T = wi(i)) == null ? void 0 : T.aspect) || 1)), c = 56, l = Math.max(80, A.width - c * 2), h = Math.max(80, A.height - c * 2);
    let m = l, w = m / o;
    w > h && (w = h, m = w * o);
    const v = Math.max(0.1, Number(((L = p.frameView) == null ? void 0 : L.zoom) || 1)), b = m * v, N = w * v, S = Number((($ = p.frameView) == null ? void 0 : $.panX) || 0), k = Number(((K = p.frameView) == null ? void 0 : K.panY) || 0);
    return {
      x: (A.width - b) * 0.5 + S,
      y: (A.height - N) * 0.5 + k,
      w: b,
      h: N
    };
  }
  function Us() {
    return e === "cutout" && p.mode === "frame" && !!Jt();
  }
  function wn(i, o = performance.now()) {
    if (p.mode === "unwrap") {
      const m = gr(), w = (i.x - m.x) / Math.max(1, m.w), v = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (w % 1 + 1) % 1,
        v: U(v, 0, 1),
        t: Number(o || 0)
      };
    }
    const c = Ns(i.x, i.y), { lon: l, lat: h } = Is(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: U(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function xn(i, o, c = performance.now()) {
    const l = Ze(o);
    if (!l) return null;
    const h = {
      x: (Number(i.x) - l.x) / Math.max(1, l.w),
      y: (Number(i.y) - l.y) / Math.max(1, l.h)
    }, m = Fs(o, h);
    if (!m) return null;
    const { lon: w, lat: v } = Is(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (w / (2 * Math.PI) + 0.5 + 1) % 1,
      v: U(0.5 - v / Math.PI, 0, 1),
      t: Number(c || 0)
    };
  }
  function zg(i, o) {
    var N;
    const c = Jt(), l = Ze(c);
    if (!c || !l) return !1;
    const h = Math.max(0.1, Number(((N = p.frameView) == null ? void 0 : N.zoom) || 1)), m = U(h * Number(o), 0.25, 12);
    if (Math.abs(m - h) < 1e-6) return !1;
    const w = (Number(i.x) - l.x) / Math.max(1e-6, l.w), v = (Number(i.y) - l.y) / Math.max(1e-6, l.h);
    p.frameView.zoom = m;
    const b = Ze(c);
    return b ? (p.frameView.panX += Number(i.x) - (b.x + b.w * w), p.frameView.panY += Number(i.y) - (b.y + b.h * v), !0) : !1;
  }
  function jg(i, o) {
    const c = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function wr(i) {
    const o = String(i || "").trim();
    return o === "eraser" ? ar : sn[o] ? o : p.activeBrushPresetId || ar;
  }
  function vu() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (yu() || Us());
  }
  function bu() {
    var i;
    return vu() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Za(i, o = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), l = Number((i == null ? void 0 : i.y) || 0), h = o !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, w = m.inside !== h || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - l) > 0.01;
    return p.pointerPos = { x: c, y: l, inside: h }, w;
  }
  function Ug() {
    var S, k;
    if (!bu()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? p.maskTool : p.paintTool, c = wr(o), l = sn[c] || sn[ar], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), w = Math.max(3, m * 0.5), v = i === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : hn(p.paintColor), b = i === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : U(Math.max(0.16, Number(v.a ?? 1) * 0.3), 0.16, 0.52), N = i === "mask" ? 0.95 : o === "eraser" ? 0.75 : U(Math.max(0.46, Number(v.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: o,
      preset: l,
      radius: w,
      fillStyle: Pn(v, b),
      strokeStyle: Pn(v, N),
      x: Number(((S = p.pointerPos) == null ? void 0 : S.x) || 0),
      y: Number(((k = p.pointerPos) == null ? void 0 : k.y) || 0),
      hotspotX: w,
      hotspotY: w
    };
  }
  function Bg() {
    var T, L, $;
    const i = Ug();
    if (!H) return;
    if (!i) {
      H.style.display = "none";
      return;
    }
    let o = i.radius * 2, c = i.radius * 2, l = "999px", h = 0, m = i.fillStyle, w = "1px solid rgba(222, 222, 222, 0.72)", v = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const b = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let S = Number(i.hotspotX ?? o * 0.5), k = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      o = es, c = es, l = "0", w = "0", v = "none", S = db, k = hb, m = vb(i.fillStyle, N, b);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const K = Math.max(1, Number(((T = i.preset) == null ? void 0 : T.aspect) ?? 1));
      o = Math.max(10, i.radius * 2 * K), c = Math.max(6, i.radius * 2), l = `${Math.min(6, c * 0.42)}px`, h = Number((($ = (L = i.preset) == null ? void 0 : L.angle) == null ? void 0 : $.value) || 0) * zr;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    H.style.display = "block", H.style.width = `${Math.round(o)}px`, H.style.height = `${Math.round(c)}px`, H.style.borderRadius = l, H.style.border = w, H.style.boxShadow = v, H.style.background = m, H.style.backgroundRepeat = "no-repeat", H.style.backgroundPosition = "center", H.style.backgroundSize = "contain", H.style.transform = `translate(${Math.round(i.x - S)}px, ${Math.round(i.y - k)}px) rotate(${h}deg)`;
  }
  function Gg() {
    var _t;
    if (!O || !B) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? p.maskTool : p.paintTool;
    if (o === "lasso_fill") return;
    const c = wr(o), l = sn[c] || sn[ar], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), w = Math.max(6, m * 0.5), v = o === "eraser", b = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : v ? { r: 1, g: 1, b: 1, a: 0.22 } : hn(p.paintColor), N = i === "mask" ? Pn(b, 0.22) : v ? "rgba(255,255,255,0.14)" : Pn(b, U(Math.max(0.18, Number(b.a ?? 1) * 0.34), 0.18, 0.56)), S = i === "mask" ? Pn(b, 0.96) : v ? "rgba(255,255,255,0.72)" : Pn(b, U(Math.max(0.56, Number(b.a ?? 1) * 0.96), 0.56, 1));
    let k = w * 2, T = w * 2, L = "999px", $ = 0, K = N;
    const ht = "rgba(222, 222, 222, 0.72)", xt = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      K = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const st = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      k = Math.max(16, w * 2 * st), T = Math.max(10, w * 2), L = `${Math.min(8, T * 0.42)}px`, $ = Number(((_t = l == null ? void 0 : l.angle) == null ? void 0 : _t.value) || 0) * zr;
    } else o === "brush" ? K = `radial-gradient(circle at 50% 50%, ${S} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (k = Math.max(18, w * 1.8), T = k, K = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${S} 43%, ${S} 58%, rgba(0,0,0,0) 59%)`) : v && (K = "rgba(255,255,255,0.12)");
    B.style.width = `${Math.round(k)}px`, B.style.height = `${Math.round(T)}px`, B.style.borderRadius = L, B.style.background = K, B.style.border = `1px solid ${ht}`, B.style.boxShadow = `0 0 0 1px ${xt}`, B.style.transform = `rotate(${$}deg)`, J && (clearTimeout(J), J = 0), O.classList.remove("fade-out"), O.classList.add("show");
  }
  function Ja() {
    !O || !O.classList.contains("show") || (O.classList.add("fade-out"), J && clearTimeout(J), J = window.setTimeout(() => {
      O.classList.remove("show", "fade-out"), J = 0;
    }, 180));
  }
  function Wg(i, o, c, l) {
    const h = wr(o), m = sn[h] || sn[ar], w = p.brushSizes[h] ?? 10, v = Math.max(1, w) * Math.max(0.1, m.sizeScale ?? 1), b = jg(l, v), N = c.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), S = {
      id: vi(i),
      actionGroupId: vi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: o,
      size: v,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: b.radiusModel,
      radiusValue: b.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((k) => ({ ...k })),
        points: N.map((k) => ({ ...k }))
      }
    };
    return Yf(S, m), ed("stroke-created", {
      mode: p.mode,
      layerKind: i,
      toolKind: o,
      presetId: h,
      presetAspect: Number(m.aspect ?? 1),
      strokeAspect: Number(S.aspect ?? 1),
      stampKind: String(S.stampKind || ""),
      size: Number(S.size || 0),
      radiusModel: String(S.radiusModel || ""),
      radiusValue: Number(S.radiusValue || 0),
      targetSpace: { ...S.targetSpace }
    }), S;
  }
  function Kg(i, o, c, l) {
    const h = c.map((b) => ({
      ...b,
      t: Number((b == null ? void 0 : b.t) || 0),
      widthScale: Number.isFinite(Number(b == null ? void 0 : b.widthScale)) ? Math.max(0, Number(b.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(b == null ? void 0 : b.pressureLike)) ? Math.max(0, Number(b.pressureLike)) : 1
    })), m = wr(o), w = sn[m] || sn[ar], v = {
      id: vi(i),
      actionGroupId: vi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((b) => ({ ...b }))
      }
    };
    return Yf(v, w), ed("lasso-created", {
      mode: p.mode,
      layerKind: i,
      toolKind: o,
      presetId: m,
      presetAspect: Number(w.aspect ?? 1),
      strokeAspect: Number(v.aspect ?? 1),
      stampKind: String(v.stampKind || ""),
      targetSpace: { ...v.targetSpace }
    }), v;
  }
  function ci(i) {
    const o = d.painting || (d.painting = Ma(null)), c = o[i] || (o[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function qg(i, o, c = performance.now()) {
    let l;
    if (p.mode === "frame") {
      const N = Jt();
      if (!N) return !1;
      l = xn(o, N, c);
    } else
      l = wn(o, c);
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, w = h[h.length - 1];
    if (w) {
      const N = Math.abs(Number(l.u ?? l.x ?? 0) - Number(w.u ?? w.x ?? 0)), S = Math.abs(Number(l.v ?? l.y ?? 0) - Number(w.v ?? w.y ?? 0));
      if (N < 15e-4 && S < 15e-4) return !1;
    }
    const v = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...v }), m.push({ ...v });
    const b = br();
    if (b) {
      const N = p.paintEngine.ensureTarget(b);
      p.paintEngine.appendStrokePoint(N, Number(v.u ?? 0), Number(v.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Yg(i, o, c = performance.now()) {
    var w, v;
    let l;
    if (p.mode === "frame") {
      const b = Jt();
      if (!b) return !1;
      l = xn(o, b, c);
    } else
      l = wn(o, c);
    const h = (v = (w = i == null ? void 0 : i.stroke) == null ? void 0 : w.geometry) == null ? void 0 : v.points;
    if (!l || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const b = Math.abs(Number(l.u ?? l.x ?? 0) - Number(m.u ?? m.x ?? 0)), N = Math.abs(Number(l.v ?? l.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (b < 15e-4 && N < 15e-4) return !1;
    }
    return h.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Xg(i) {
    var st, pt, gt, bt, lt;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || (i == null ? void 0 : i.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    Ka();
    const c = br(), l = Vs(c.width, c.height);
    if (!mg(l, o, { w: c.width, h: c.height })) return !1;
    const h = ((pt = (st = l.ctx) == null ? void 0 : st.getImageData(0, 0, c.width, c.height)) == null ? void 0 : pt.data) || null;
    if (!h) return !1;
    const m = new Map(Ie().map((j) => [String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "").trim(), j ? { ...j } : null])), w = [], v = [], b = [...mn().filter((j) => String((j == null ? void 0 : j.layerKind) || "paint") !== "paint")];
    let N = !1, S = Qr().reduce((j, at) => Math.max(j, Number((at == null ? void 0 : at.z_index) || 0)), -1) + 1;
    function k(j, at, Pt, Ut = 8) {
      let At = at, Rt = Pt, $t = -1, Ft = -1;
      for (let Vt = 0; Vt < Pt; Vt += 1)
        for (let ce = 0; ce < at; ce += 1)
          j[(Vt * at + ce) * 4 + 3] <= Ut || (ce < At && (At = ce), Vt < Rt && (Rt = Vt), ce > $t && ($t = ce), Vt > Ft && (Ft = Vt));
      return $t < At || Ft < Rt ? null : { minX: At, minY: Rt, maxX: $t, maxY: Ft };
    }
    const T = k(h, c.width, c.height, 8);
    if (!T) return !1;
    function L(j, at) {
      return !j || !at ? !1 : !(j.maxX < at.minX || at.maxX < j.minX || j.maxY < at.minY || at.maxY < j.minY);
    }
    function $(j, at) {
      const Pt = Jr((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "", "paint", at);
      if (!Pt) return null;
      const Ut = Pt.centerUv.u - Pt.halfW, At = Pt.centerUv.u + Pt.halfW, Rt = Pt.centerUv.v - Pt.halfH, $t = Pt.centerUv.v + Pt.halfH, Ft = c.width, Vt = c.height;
      return {
        minX: Math.floor((Ut % 1 + 1) % 1 * Ft),
        maxX: Math.ceil((At % 1 + 1) % 1 * Ft),
        minY: Math.floor(U(Rt, 0, 1) * Vt),
        maxY: Math.ceil(U($t, 0, 1) * Vt),
        wraps: At - Ut >= 1 || Ut < 0 || At > 1
      };
    }
    function K(j) {
      const at = (j == null ? void 0 : j.bbox) || null;
      if (!at) return null;
      const Pt = (j == null ? void 0 : j.transform) || {}, Ut = c.width, At = c.height, Rt = Number(at.u0 || 0) + Number(Pt.du || 0), $t = Number(at.u1 || 0) + Number(Pt.du || 0), Ft = Number(at.v0 || 0) + Number(Pt.dv || 0), Vt = Number(at.v1 || 0) + Number(Pt.dv || 0);
      return {
        minX: Math.floor((Rt % 1 + 1) % 1 * Ut),
        maxX: Math.ceil(($t % 1 + 1) % 1 * Ut),
        minY: Math.floor(U(Ft, 0, 1) * At),
        maxY: Math.ceil(U(Vt, 0, 1) * At),
        wraps: $t - Rt >= 1 || Rt < 0 || $t > 1
      };
    }
    function ht(j) {
      return j ? j.wraps ? L(T, { minX: 0, maxX: j.maxX, minY: j.minY, maxY: j.maxY }) || L(T, { minX: j.minX, maxX: c.width - 1, minY: j.minY, maxY: j.maxY }) : L(T, j) : !0;
    }
    function xt(j) {
      if (!j) return { touched: !1, canvas: null };
      const at = Vs(c.width, c.height);
      at.ctx.drawImage(j, 0, 0);
      const Pt = at.ctx.getImageData(0, 0, c.width, c.height);
      at.ctx.save(), at.ctx.globalCompositeOperation = "destination-out", at.ctx.drawImage(l.canvas, 0, 0), at.ctx.restore();
      const Ut = at.ctx.getImageData(0, 0, c.width, c.height);
      for (let At = 0; At < c.width * c.height; At += 1) {
        if (h[At * 4 + 3] <= 8) continue;
        const $t = Pt.data[At * 4 + 3], Ft = Ut.data[At * 4 + 3];
        if ($t > Ft)
          return { touched: !0, canvas: at.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function _t(j, at, Pt) {
      const Ut = Number(Pt == null ? void 0 : Pt.z_index), At = vg(j, at, Pt).map((Rt, $t) => ({
        ...Rt,
        z_index: Number.isFinite(Ut) ? Ut + $t * 1e-3 : S + $t * 1e-3
      }));
      return At.length && (S = Math.max(S, ...At.map((Rt) => Number((Rt == null ? void 0 : Rt.z_index) || 0))) + 1), At;
    }
    for (const j of Ie()) {
      const at = String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "").trim();
      if (!at) continue;
      const Pt = En(at, "paint");
      if (!ht($(j, Pt))) {
        v.push(j), w.push(...Pt);
        continue;
      }
      const Ut = ((bt = (gt = p.paintEngine) == null ? void 0 : gt.getGroupTarget) == null ? void 0 : bt.call(gt, at)) || null, At = ((lt = Ut == null ? void 0 : Ut.committedPaint) == null ? void 0 : lt.canvas) || null;
      if (!At) {
        v.push(j), w.push(...Pt);
        continue;
      }
      const Rt = xt(At);
      if (!Rt.touched || !Rt.canvas) {
        v.push(j), w.push(...Pt);
        continue;
      }
      N = !0;
      const $t = _t(Rt.canvas, "paint", m.get(at) || j || {});
      b.push(...$t);
    }
    for (const j of mn().filter((at) => String((at == null ? void 0 : at.layerKind) || "paint") === "paint")) {
      if (!ht(K(j))) {
        b.push(j);
        continue;
      }
      const at = Dp(j, null);
      if (!at) {
        b.push(j);
        continue;
      }
      const Pt = xt(at);
      if (!Pt.touched || !Pt.canvas) {
        b.push(j);
        continue;
      }
      N = !0;
      const Ut = _t(Pt.canvas, "paint", j);
      b.push(...Ut);
    }
    return N ? (d.painting.paint.strokes = w, d.painting.groups = v.sort((j, at) => Number((j == null ? void 0 : j.z_index) || 0) - Number((at == null ? void 0 : at.z_index) || 0)), d.painting.raster_objects = b.sort((j, at) => Number((j == null ? void 0 : j.z_index) || 0) - Number((at == null ? void 0 : at.z_index) || 0)), ri({ preservePanelValues: !1 }), !0) : !1;
  }
  function Zg(i) {
    var m, w, v, b;
    const o = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const c = String(((w = i == null ? void 0 : i.stroke) == null ? void 0 : w.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = nu(o.rawPoints || o.points || [], i.stroke.targetSpace, !0)), Xg(i);
    const l = i.layerKind === "paint" && c !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && xl((v = i.stroke) == null ? void 0 : v.actionGroupId), ci(i.layerKind).push(i.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = nu(h, i.stroke.targetSpace, !0), l && xl((b = i.stroke) == null ? void 0 : b.actionGroupId), ci(i.layerKind).push(i.stroke), !0);
  }
  function _u(i) {
    var c;
    if (e === "cutout" && p.mode === "frame") {
      const l = Jt(), h = Ze(l);
      if (!l || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const w = xn(i, l, performance.now()), v = w ? Gi(w) : null;
      if (v)
        for (const N of Ds()) {
          if (!Ee(N)) continue;
          const S = qi(N, v);
          if (S && Number(S.x) >= 0 && Number(S.x) <= 1 && Number(S.y) >= 0 && Number(S.y) <= 1) {
            const k = De(N);
            if (k != null && k.visible) return { item: N, geom: k };
          }
        }
      const b = Sl(!1).slice().sort((N, S) => Number((S == null ? void 0 : S.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of b) {
        if (N.type === "strokeGroup") {
          const T = ei(Vi("paint", N.actionGroupId || N.id || ""));
          if (!T) continue;
          const L = De(T);
          if (!(L != null && L.visible)) continue;
          const $ = Array.isArray(L.strokePaths) ? L.strokePaths : [];
          for (const K of $) {
            const ht = Array.isArray(K == null ? void 0 : K.points) ? K.points : [];
            if (!ht.length) continue;
            if (K.closed && ht.length >= 3 && or(i, ht)) return { item: T, geom: L };
            const xt = Math.max(8, Number((K == null ? void 0 : K.lineWidth) || 0) * 0.5 + 6);
            for (let _t = 0; _t < ht.length - 1; _t += 1)
              if (wc(i, ht[_t], ht[_t + 1]) <= xt * xt) return { item: T, geom: L };
            if (ht.length === 1 && $r(i, ht[0]) <= xt * xt) return { item: T, geom: L };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const T = ti(Hi(((c = N.item) == null ? void 0 : c.id) || N.id || ""));
          if (!T) continue;
          const L = De(T);
          if ($l(T, L, i, w)) return { item: T, geom: L };
          continue;
        }
        const S = N.item;
        if (!S || !Ee(S) || !v) continue;
        const k = qi(S, v);
        if (k && Number(k.x) >= 0 && Number(k.x) <= 1 && Number(k.y) >= 0 && Number(k.y) <= 1) {
          const T = De(S);
          if (T != null && T.visible) return { item: S, geom: T };
        }
      }
      return null;
    }
    const o = [
      ...Sl(!1).slice().sort((l, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var h;
        return l.type === "strokeGroup" ? ei(Vi("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? ti(Hi(((h = l.item) == null ? void 0 : h.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...e === "cutout" ? Ds().filter((l) => _n(l)) : []
    ];
    for (const l of o) {
      if (Ce(l)) {
        const m = De(l);
        if (!(m != null && m.visible)) continue;
        const w = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const v of w) {
          const b = Array.isArray(v == null ? void 0 : v.points) ? v.points : [];
          if (!b.length) continue;
          if (v.closed && b.length >= 3 && or(i, b)) return { item: l, geom: m };
          const N = Math.max(8, Number((v == null ? void 0 : v.lineWidth) || 0) * 0.5 + 6);
          for (let S = 0; S < b.length - 1; S += 1)
            if (wc(i, b[S], b[S + 1]) <= N * N) return { item: l, geom: m };
          if (b.length === 1 && $r(i, b[0]) <= N * N) return { item: l, geom: m };
        }
        continue;
      }
      if (Ye(l)) {
        const m = De(l);
        if (!(m != null && m.visible)) continue;
        if ($l(l, m, i)) return { item: l, geom: m };
        continue;
      }
      const h = De(l);
      if (h.visible && or(i, h.corners))
        return { item: l, geom: h };
    }
    return null;
  }
  function Bs(i, o) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (i.kind === "strokeGroup") {
      const l = i.corners.findIndex((m) => $r(m, o) <= 121);
      if (l >= 0) {
        const m = i.corners[l], w = m.x - i.center.x, v = m.y - i.center.y, b = w * v >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: b };
      }
      const h = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const m of h) {
        const w = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && w.length >= 3 && or(o, w)) return { kind: "move", cursor: "default" };
        const v = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let b = 0; b < w.length - 1; b += 1)
          if (wc(o, w[b], w[b + 1]) <= v * v) return { kind: "move", cursor: "default" };
      }
      return or(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject")
      return or(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (e === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const l = i.edgeMidpoints.find((h) => $r(h, o) <= 169);
      if (l) {
        const h = l.edge === "left" || l.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const c = i.corners.findIndex((l) => $r(l, o) <= 121);
    if (c >= 0) {
      const l = i.corners[c], h = l.x - i.center.x, m = l.y - i.center.y, w = h * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: w };
    }
    return $r(i.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : or(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function wu(i, o) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function Jg(i, o) {
    return !!i && !!o && Number(o.x) >= Number(i.x0) && Number(o.x) <= Number(i.x1) && Number(o.y) >= Number(i.y0) && Number(o.y) <= Number(i.y1);
  }
  function Qg(i, o) {
    if (!i || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((h) => Jg(i, h))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, l = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!or({ x: c, y: l }, o.corners);
  }
  function be(i) {
    if (Bg(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? A.style.cursor = "none" : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" ? A.style.cursor = "grabbing" : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? A.style.cursor = "move" : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" ? A.style.cursor = p.interaction.cursor || "nwse-resize" : p.interaction.kind === "rotate" ? A.style.cursor = "grabbing" : A.style.cursor = "default";
      return;
    }
    if (bu()) {
      A.style.cursor = "none";
      return;
    }
    if (p.mode === "frame" && p.primaryTool !== "cursor") {
      A.style.cursor = "default";
      return;
    }
    if (p.primaryTool === "cursor" && p.marqueeModifier) {
      A.style.cursor = "default";
      return;
    }
    const o = pe(), c = o ? De(o) : null, l = o ? pr(o) : !1, h = l ? { kind: "none", cursor: "default" } : Bs(c, i);
    if (!l && h.kind !== "none") {
      A.style.cursor = h.cursor;
      return;
    }
    if (p.primaryTool === "cursor" && _u(i)) {
      A.style.cursor = "default";
      return;
    }
    A.style.cursor = p.mode === "pano" ? "grab" : "default";
  }
  function zt() {
    if (!Y) return;
    const i = pe(), o = Tn();
    if (!i && o.length === 0 || p.interaction) {
      Y.style.display = "none";
      return;
    }
    if (o.length > 1) {
      const lt = "multi", j = ws(o);
      if (p.menuMode !== lt)
        Y.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${j ? "Unlock" : "Lock"}" data-tip="${j ? "Unlock" : "Lock"}">${j ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `, p.menuMode = lt, p.menuSize.measured = !1, Xi(Y);
      else {
        const kt = Y.querySelector("[data-action='toggle-lock']");
        kt && (kt.innerHTML = j ? Dt.lock_open : Dt.lock_closed, kt.setAttribute("aria-label", j ? "Unlock" : "Lock"), kt.setAttribute("data-tip", j ? "Unlock" : "Lock"));
      }
      const at = _s(o);
      if (!(at != null && at.visible)) {
        Y.style.display = "none";
        return;
      }
      const Pt = at.corners.map((kt) => kt.x), Ut = at.corners.map((kt) => kt.y), At = Math.min(...Pt), Rt = Math.max(...Pt), $t = Math.max(...Ut), Ft = Y.style.display, Vt = Y.style.visibility;
      Y.style.display = "flex", Y.style.visibility = "hidden";
      const ce = Y.getBoundingClientRect(), tr = Math.round(Number((ce == null ? void 0 : ce.width) || 0)) || Y.offsetWidth || p.menuSize.w || 220, er = Math.round(Number((ce == null ? void 0 : ce.height) || 0)) || Y.offsetHeight || p.menuSize.h || 40;
      p.menuSize.w = Number.isFinite(tr) && tr > 0 ? tr : 220, p.menuSize.h = Number.isFinite(er) && er > 0 ? er : 40, Y.style.display = Ft, Y.style.visibility = Vt, p.menuSize.measured = !0;
      const Zi = p.menuSize.w, no = p.menuSize.h, ui = 14;
      Y.style.display = "flex";
      let fi = (At + Rt) * 0.5 - Zi * 0.5, Ji = $t + 18;
      if (fi = U(fi, ui, A.width - Zi - ui), Ji + no > A.height - ui) {
        Y.style.display = "none";
        return;
      }
      Y.style.left = `${fi}px`, Y.style.top = `${Ji}px`;
      return;
    }
    const c = Il(), l = pr(i), h = c === "stroke" ? "stroke:paint" : e === "stickers" || c === "image" ? `stickers:${Me(i) ? "external" : "normal"}` : `cutout:${p.cutoutAspectOpen ? "open" : "closed"}`;
    if (p.menuMode !== h) {
      if (c === "stroke")
        Y.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `;
      else if (e === "stickers" || c === "image")
        Y.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          ${Me(i) ? "" : `<button class="pano-btn pano-btn-icon" data-action="duplicate" aria-label="Duplicate" data-tip="Duplicate">${Dt.duplicate}</button><button class="pano-btn pano-btn-icon" data-action="replace-image" aria-label="Replace Image" data-tip="Replace image">${Dt.replace_image}</button>`}
          ${Me(i) ? `<button class="pano-btn pano-btn-icon" data-action="back-initial" aria-label="Back to Initial" data-tip="Back to initial position">${Dt.back_initial}</button>` : ""}
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          ${Me(i) ? `<button class="pano-btn pano-btn-icon" data-action="toggle-visible" aria-label="Hide" data-tip="Hide input image">${Dt.eye_dashed}</button>` : `<button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>`}
        `;
      else {
        const lt = yi(i);
        Y.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${Dt.aspect}</button>
            <div class="pano-aspect-popover${p.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
              <button class="pano-btn pano-aspect-choice${lt === "1:1" ? " active" : ""}" data-action="aspect-set" data-aspect="1:1">1:1</button>
              <button class="pano-btn pano-aspect-choice${lt === "4:3" ? " active" : ""}" data-action="aspect-set" data-aspect="4:3">4:3</button>
              <button class="pano-btn pano-aspect-choice${lt === "3:2" ? " active" : ""}" data-action="aspect-set" data-aspect="3:2">3:2</button>
              <button class="pano-btn pano-aspect-choice${lt === "16:9" ? " active" : ""}" data-action="aspect-set" data-aspect="16:9">16:9</button>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon" data-action="rotate-90" aria-label="Rotate 90°" data-tip="Rotate 90°">${Dt.rotate_90}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `;
      }
      p.menuMode = h, p.menuSize.measured = !1, Xi(Y);
    }
    if ((e === "stickers" || c === "image") && Me(i)) {
      const lt = Y.querySelector("[data-action='back-initial']");
      if (lt) {
        const at = _p();
        lt.disabled = !at, lt.setAttribute("aria-disabled", at ? "false" : "true"), lt.setAttribute("data-tip", at ? "Back to initial position" : "Already at initial position");
      }
      const j = Y.querySelector("[data-action='toggle-visible']");
      if (j) {
        const at = ni(i);
        j.innerHTML = at ? Dt.eye : Dt.eye_dashed, j.setAttribute("aria-label", at ? "Show" : "Hide"), j.setAttribute("data-tip", at ? "Show input image" : "Hide input image");
      }
    }
    const m = Y.querySelector("[data-action='toggle-lock']");
    m && (m.innerHTML = l ? Dt.lock_open : Dt.lock_closed, m.setAttribute("aria-label", l ? "Unlock" : "Lock"), m.setAttribute("data-tip", l ? "Unlock" : "Lock"));
    const w = De(i);
    if (!(w != null && w.visible)) {
      Y.style.display = "none";
      return;
    }
    const v = w.corners, b = v.map((lt) => lt.x), N = v.map((lt) => lt.y), S = Math.min(...b), k = Math.max(...b), T = Math.max(...N), L = Y.style.display, $ = Y.style.visibility;
    Y.style.display = "flex", Y.style.visibility = "hidden";
    const K = Y.getBoundingClientRect(), ht = Math.round(Number((K == null ? void 0 : K.width) || 0)) || Y.offsetWidth || p.menuSize.w || 220, xt = Math.round(Number((K == null ? void 0 : K.height) || 0)) || Y.offsetHeight || p.menuSize.h || 40;
    p.menuSize.w = Number.isFinite(ht) && ht > 0 ? ht : 220, p.menuSize.h = Number.isFinite(xt) && xt > 0 ? xt : 40, Y.style.display = L, Y.style.visibility = $, p.menuSize.measured = !0;
    const _t = p.menuSize.w, st = p.menuSize.h, pt = 14;
    Y.style.display = "flex";
    let gt = (S + k) * 0.5 - _t * 0.5, bt = T + 18;
    if (!Number.isFinite(gt) || !Number.isFinite(bt)) {
      Y.style.display = "none";
      return;
    }
    if (gt = U(gt, pt, A.width - _t - pt), bt + st > A.height - pt) {
      Y.style.display = "none";
      return;
    }
    Y.style.left = `${gt}px`, Y.style.top = `${bt}px`;
  }
  function Qa() {
    yt && (Se.timer && (clearTimeout(Se.timer), Se.timer = 0), Se.target = null, yt.classList.remove("show", "pano-tooltip-footer", "pano-tooltip-tool-rail"));
  }
  function t0(i) {
    if (!yt || !i || !i.isConnected) return;
    const o = String(i.getAttribute("data-tip") || "").trim();
    if (!o) return;
    yt.textContent = o;
    const c = P.getBoundingClientRect(), l = i.getBoundingClientRect(), h = 8, m = yt.offsetWidth || 100, w = yt.offsetHeight || 24, v = !!i.closest(".pano-floating-left"), b = !!i.closest(".pano-paint-footer") || !!i.closest(".pano-paint-color-float");
    yt.classList.remove("pano-tooltip-footer", "pano-tooltip-tool-rail");
    let N = l.left - c.left + l.width * 0.5 - m * 0.5, S = l.top - c.top - w - 8;
    if (v)
      yt.classList.add("pano-tooltip-tool-rail"), N = l.right - c.left + 10, S = l.top - c.top + l.height * 0.5 - w * 0.5, N = U(N, h, Math.max(h, c.width - m - h)), S = U(S, h, Math.max(h, c.height - w - h));
    else if (b) {
      yt.classList.add("pano-tooltip-footer");
      const k = i.closest(".pano-paint-footer"), T = k ? k.getBoundingClientRect() : l;
      N = T.left - c.left + T.width * 0.5 - m * 0.5, S = T.bottom - c.top + 5, N = U(N, h, Math.max(h, c.width - m - h)), S = Math.max(h, S);
    }
    N = U(N, h, Math.max(h, c.width - m - h)), S = Math.max(h, S), yt.style.left = `${N}px`, yt.style.top = `${S}px`, yt.classList.add("show");
  }
  function Xi(i) {
    i.querySelectorAll("[data-tip]").forEach((o) => {
      o.__panoTipBound || (o.__panoTipBound = !0, o.addEventListener("pointerenter", () => {
        Se.target = o, Se.timer && clearTimeout(Se.timer), Se.timer = window.setTimeout(() => {
          Se.target === o && t0(o);
        }, 220);
      }), o.addEventListener("pointerleave", () => {
        Se.target === o && (Se.target = null), Qa();
      }), o.addEventListener("pointerdown", Qa));
    });
  }
  const Re = ms({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (i) => {
      p.viewYaw = Oe(Number(i.yaw || 0)), p.viewPitch = U(Number(i.pitch || 0), -89.9, 89.9), p.viewFov = U(Number(i.fov || p.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = A.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || A.clientWidth || 0)),
        h: Math.max(1, Number(i.height || A.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, o;
      return {
        x: (i = d.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (o = d.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: gr,
    onInteraction: () => {
      It.backgroundDirty = !0, It.dirty = !0;
    }
  });
  A.onpointerdown = (i) => {
    const o = si(i);
    if (Za(o, !0), p.viewTween = null, Re.state.inertia.active = !1, Re.state.inertia.vx = 0, Re.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), p.mode !== "frame") {
        const v = p.mode === "unwrap" ? o : Xa(i);
        p.interaction = { kind: "view", last: v, lastTs: performance.now() }, Re.startDrag(v.x, v.y, i.pointerId, performance.now());
      }
      be(o), A.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (r) {
      if (p.mode === "pano") {
        const v = Xa(i);
        p.interaction = { kind: "view", last: v, lastTs: performance.now() }, Re.startDrag(v.x, v.y, i.pointerId, performance.now()), be(o), A.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (Ct && !Ct.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (yu() || Us())) {
      const v = p.primaryTool === "mask" ? "mask" : "paint", b = p.primaryTool === "mask" ? p.maskTool : p.paintTool, N = Us() ? Jt() : null, S = { kind: "ERP_GLOBAL" }, k = N ? xn(o, N, performance.now()) : wn(o, performance.now());
      p.interaction = {
        kind: b === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: v,
        _livePreviewToken: vi("live"),
        stroke: b === "lasso_fill" ? Kg(v, b, [k], S) : Wg(v, b, [k], S)
      }, Bi();
      const T = br();
      if (T)
        if (p.paintEngine.beginStroke(p.interaction.stroke, T), p.interaction.kind === "paint_stroke") {
          const L = p.paintEngine.ensureTarget(T), $ = Number((k == null ? void 0 : k.u) ?? (k == null ? void 0 : k.x) ?? 0), K = Number((k == null ? void 0 : k.v) ?? (k == null ? void 0 : k.y) ?? 0);
          p.paintEngine.appendStrokePoint(L, $, K, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, T);
      be(o), A.setPointerCapture(i.pointerId), dt();
      return;
    }
    const c = Tn(), l = pe(), h = c.length > 1 ? _s(c) : l ? De(l) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: o, current: o }, be(o), A.setPointerCapture(i.pointerId), dt({ localOnly: !0 });
      return;
    }
    if (c.length > 1 && (h != null && h.visible)) {
      if ((c.some((b) => pr(b)) ? { kind: "none" } : Bs(h, o)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: c.map((b) => b),
          offset: { x: o.x - h.center.x, y: o.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: c.filter((b) => Ee(b)).map((b) => ({
            id: String(b.id || ""),
            yaw_deg: Number(b.yaw_deg || 0),
            pitch_deg: Number(b.pitch_deg || 0),
            center: (() => {
              var S, k;
              const N = De(b);
              return N != null && N.visible ? { x: Number(((S = N.center) == null ? void 0 : S.x) || 0), y: Number(((k = N.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: c.filter((b) => Ce(b)).map((b) => ({
            id: String(b.actionGroupId || b.id || ""),
            layerKind: String(b.layerKind || "paint"),
            snapshot: cn(En(b.actionGroupId, b.layerKind)),
            frameSnapshot: cn(Jr(b.actionGroupId, b.layerKind)),
            center: (() => {
              var S, k;
              const N = De(b);
              return N != null && N.visible ? { x: Number(((S = N.center) == null ? void 0 : S.x) || 0), y: Number(((k = N.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: kl(b.actionGroupId, b.layerKind)
          })),
          rasterSnapshots: c.filter((b) => Ye(b)).map((b) => ({
            id: qe(b.rasterObjectId || b.id || ""),
            snapshot: cn(mn().find((N) => String((N == null ? void 0 : N.id) || "") === qe(b.rasterObjectId || b.id || ""))),
            center: (() => {
              var S, k;
              const N = De(b);
              return N != null && N.visible ? { x: Number(((S = N.center) == null ? void 0 : S.x) || 0), y: Number(((k = N.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Op(b)
          }))
        }, be(o), A.setPointerCapture(i.pointerId);
        return;
      }
    } else if (l && (h != null && h.visible)) {
      const v = pr(l) ? { kind: "none" } : Bs(h, o);
      if (v.kind === "scale") {
        p.interaction = Ce(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: cn(En(l.actionGroupId, l.layerKind)),
          frameSnapshot: cn(Jr(l.actionGroupId, l.layerKind)),
          cursor: v.cursor
        } : {
          kind: "scale",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: v.cursor
        }, be(o), A.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "scale_x" || v.kind === "scale_y") {
        p.interaction = {
          kind: v.kind,
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: v.cursor,
          edge: v.edge
        }, be(o), A.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "rotate") {
        p.interaction = Ce(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: cn(En(l.actionGroupId, l.layerKind)),
          frameSnapshot: cn(Jr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: h.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x)
        }, be(o), A.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "move") {
        if (Ce(l)) {
          const b = p.mode === "frame" ? (() => {
            const N = Jt();
            return N ? xn(o, N, performance.now()) : null;
          })() : wn(o, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: b,
            snapshot: cn(En(l.actionGroupId, l.layerKind)),
            frameSnapshot: cn(Jr(l.actionGroupId, l.layerKind))
          }, be(o), A.setPointerCapture(i.pointerId);
          return;
        }
        if (Ye(l)) {
          const b = p.mode === "frame" ? (() => {
            const N = Jt();
            return N ? xn(o, N, performance.now()) : null;
          })() : wn(o, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: b,
            snapshot: cn(mn().find((N) => String((N == null ? void 0 : N.id) || "") === qe(l.rasterObjectId || l.id || "")))
          }, be(o), A.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - h.center.x, y: o.y - h.center.y }
        }, be(o), A.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = _u(o);
    if (m) {
      const v = p.selectedId !== m.item.id;
      if (v && p.selectedId && (ie(), Rn()), ji(m.item), e === "cutout" && v && (p.cutoutAspectOpen = !1), v && Bt(), zt(), dt(), pr(m.item)) {
        be(o);
        return;
      }
      p.interaction = {
        kind: Ce(m.item) ? "move_stroke_group" : Ye(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: Ce(m.item) || Ye(m.item) ? p.mode === "frame" ? (() => {
          const b = Jt();
          return b ? xn(o, b, performance.now()) : null;
        })() : wn(o, performance.now()) : null,
        snapshot: Ce(m.item) ? cn(En(m.item.actionGroupId, m.item.layerKind)) : Ye(m.item) ? cn(mn().find((b) => String((b == null ? void 0 : b.id) || "") === qe(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Ce(m.item) ? cn(Jr(m.item.actionGroupId, m.item.layerKind)) : null
      }, be(o), A.setPointerCapture(i.pointerId);
      return;
    }
    const w = !!p.selectedId;
    if (w && (ie(), Rn()), ri(), w && Bt(), zt(), dt(), p.mode === "pano") {
      const v = Xa(i);
      p.interaction = { kind: "view", last: v, lastTs: performance.now() }, Re.startDrag(v.x, v.y, i.pointerId, performance.now()), be(o), A.setPointerCapture(i.pointerId);
    }
  }, A.onpointermove = (i) => {
    var l, h, m, w, v, b, N, S, k, T, L, $, K, ht, xt, _t, st, pt;
    const o = si(i);
    if (Za(o, !0), !p.interaction) {
      be(o);
      return;
    }
    be(o);
    const c = p.interaction;
    if (c.kind === "paint_stroke") {
      const gt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let bt = !1;
      gt.forEach((lt) => {
        const j = si(lt);
        qg(c, j, performance.now()) && (bt = !0);
      }), bt && dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "paint_lasso_fill") {
      const gt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let bt = !1;
      if (gt.forEach((lt) => {
        const j = si(lt);
        Yg(c, j, performance.now()) && (bt = !0);
      }), bt) {
        const lt = br();
        lt && p.paintEngine.updateActiveStroke(c.stroke, lt), dt({ localOnly: !0 });
      }
      return;
    }
    if (c.kind === "view") {
      const gt = performance.now(), bt = p.mode === "unwrap" ? o : Xa(i);
      Re.moveDrag(bt.x, bt.y, p.mode === "unwrap" ? "unwrap" : "pano", gt), c.lastTs = gt, c.last = bt, dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "pan_frame") {
      p.frameView.panX += o.x - c.last.x, p.frameView.panY += o.y - c.last.y, c.last = o, dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "move") {
      const gt = o.x - c.offset.x, bt = o.y - c.offset.y;
      if (p.mode === "frame" && e === "cutout") {
        const lt = Jt(), j = Ze(lt);
        if (!lt || !j) return;
        const at = {
          x: U((gt - j.x) / Math.max(1, j.w), 0, 1),
          y: U((bt - j.y) / Math.max(1, j.h), 0, 1)
        }, Pt = Fs(lt, at);
        if (!Pt) return;
        const Ut = vo(Pt);
        c.item.yaw_deg = Ut.yaw, c.item.pitch_deg = Ut.pitch;
      } else if (p.mode === "unwrap") {
        const lt = gr(), j = U((gt - lt.x) / Math.max(lt.w, 1), 0, 1), at = U((bt - lt.y) / Math.max(lt.h, 1), 0, 1);
        c.item.yaw_deg = Oe(j * 360 - 180), c.item.pitch_deg = U(90 - at * 180, -90, 90);
      } else {
        const lt = Ns(gt, bt), j = vo(lt);
        c.item.yaw_deg = j.yaw, c.item.pitch_deg = j.pitch;
      }
      Ee(c.item) && fn(), dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "move_stroke_group") {
      const gt = p.mode === "frame" ? (() => {
        const j = Jt();
        return j ? xn(o, j, performance.now()) : null;
      })() : wn(o, performance.now());
      if (!gt || !c.startUv) return;
      const bt = Number(gt.u || 0) - Number(c.startUv.u || 0), lt = Number(gt.v || 0) - Number(c.startUv.v || 0);
      Pl((l = c.item) == null ? void 0 : l.actionGroupId, bt, lt, c.snapshot, (h = c.item) == null ? void 0 : h.layerKind, c.frameSnapshot) && (Dn({ rebuildPaintEngine: !0 }), dt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_raster_object") {
      const gt = p.mode === "frame" ? (() => {
        const j = Jt();
        return j ? xn(o, j, performance.now()) : null;
      })() : wn(o, performance.now());
      if (!gt || !c.startUv) return;
      const bt = Number(gt.u || 0) - Number(c.startUv.u || 0), lt = Number(gt.v || 0) - Number(c.startUv.v || 0);
      Cl(((m = c.item) == null ? void 0 : m.rasterObjectId) || ((w = c.item) == null ? void 0 : w.id) || "", bt, lt, c.snapshot) && (Ki(), dt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_multi") {
      const gt = o.x - Number(((v = c.offset) == null ? void 0 : v.x) || 0), bt = o.y - Number(((b = c.offset) == null ? void 0 : b.y) || 0);
      let lt = !1, j = !1, at = !1;
      const Pt = gt - Number(((N = c.startCenter) == null ? void 0 : N.x) || gt), Ut = bt - Number(((S = c.startCenter) == null ? void 0 : S.y) || bt);
      for (const At of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
        const Rt = (e === "cutout" ? bs() : bn()).find((Ft) => String((Ft == null ? void 0 : Ft.id) || "") === String(At.id || ""));
        if (!Rt || !Ee(Rt)) continue;
        const $t = {
          x: Number(((k = At.center) == null ? void 0 : k.x) || 0) + Pt,
          y: Number(((T = At.center) == null ? void 0 : T.y) || 0) + Ut
        };
        if (p.mode === "frame" && e === "cutout") {
          const Ft = Jt(), Vt = Ze(Ft);
          if (!Ft || !Vt) continue;
          const ce = {
            x: U(($t.x - Vt.x) / Math.max(1, Vt.w), 0, 1),
            y: U(($t.y - Vt.y) / Math.max(1, Vt.h), 0, 1)
          }, tr = Fs(Ft, ce);
          if (!tr) continue;
          const er = vo(tr);
          Rt.yaw_deg = er.yaw, Rt.pitch_deg = er.pitch;
        } else if (p.mode === "unwrap") {
          const Ft = gr(), Vt = U(($t.x - Ft.x) / Math.max(Ft.w, 1), 0, 1), ce = U(($t.y - Ft.y) / Math.max(Ft.h, 1), 0, 1);
          Rt.yaw_deg = Oe(Vt * 360 - 180), Rt.pitch_deg = U(90 - ce * 180, -90, 90);
        } else {
          const Ft = Ns($t.x, $t.y), Vt = vo(Ft);
          Rt.yaw_deg = Vt.yaw, Rt.pitch_deg = Vt.pitch;
        }
        lt = !0;
      }
      for (const At of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
        const Rt = {
          x: Number(((L = At.center) == null ? void 0 : L.x) || 0) + Pt,
          y: Number((($ = At.center) == null ? void 0 : $.y) || 0) + Ut
        }, $t = p.mode === "frame" ? (() => {
          const Vt = Jt();
          return Vt ? xn(Rt, Vt, performance.now()) : null;
        })() : wn(Rt, performance.now()), Ft = At.centerUv || null;
        if ($t && Ft) {
          const Vt = Number($t.u || 0) - Number(Ft.u || 0), ce = Number($t.v || 0) - Number(Ft.v || 0);
          Pl(At.id, Vt, ce, At.snapshot, At.layerKind, At.frameSnapshot) && (lt = !0, j = !0);
        }
      }
      for (const At of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
        const Rt = {
          x: Number(((K = At.center) == null ? void 0 : K.x) || 0) + Pt,
          y: Number(((ht = At.center) == null ? void 0 : ht.y) || 0) + Ut
        }, $t = p.mode === "frame" ? (() => {
          const Vt = Jt();
          return Vt ? xn(Rt, Vt, performance.now()) : null;
        })() : wn(Rt, performance.now()), Ft = At.centerUv || null;
        if ($t && Ft) {
          const Vt = Number($t.u || 0) - Number(Ft.u || 0), ce = Number($t.v || 0) - Number(Ft.v || 0);
          Cl(At.id, Vt, ce, At.snapshot) && (lt = !0, at = !0);
        }
      }
      lt && (j ? Dn({ rebuildPaintEngine: !0 }) : at ? Ki() : fn(), dt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_stroke_group") {
      const bt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      Al((xt = c.item) == null ? void 0 : xt.actionGroupId, bt, 0, c.snapshot, (_t = c.item) == null ? void 0 : _t.layerKind, c.frameSnapshot) && (Dn({ rebuildPaintEngine: !0 }), dt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "rotate_stroke_group") {
      let gt = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - Number(c.startAng || 0)) * zr;
      i.shiftKey && (gt = Math.round(gt / 45) * 45), Al((st = c.item) == null ? void 0 : st.actionGroupId, 1, gt, c.snapshot, (pt = c.item) == null ? void 0 : pt.layerKind, c.frameSnapshot) && (Dn({ rebuildPaintEngine: !0 }), dt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "marquee_select") {
      c.current = o, dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale") {
      const bt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = U(c.startHFOV * bt, 1, 179), c.item.vFOV_deg = U(c.startVFOV * bt, 1, 179), c.item.aspect_id = jr(c.item), dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_x") {
      const bt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = U(c.startHFOV * bt, 1, 179), c.item.aspect_id = jr(c.item), dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_y") {
      const bt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.vFOV_deg = U(c.startVFOV * bt, 1, 179), c.item.aspect_id = jr(c.item), dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "rotate") {
      let bt = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - c.startAng) * zr, lt = c.startRot - bt;
      i.shiftKey && (lt = Math.round(lt / 45) * 45);
      const j = Ee(c.item) ? "rot_deg" : "roll_deg";
      c.item[j] = lt, dt({ localOnly: !0 });
    }
  }, A.onpointerup = () => {
    var o, c, l, h, m, w;
    const i = p.interaction;
    if (((o = p.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = p.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill")
      if (Bi(), Zg(p.interaction)) {
        Dn();
        const v = String(((l = p.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (v) {
          const N = Ie().find((S) => String((S == null ? void 0 : S.actionGroupId) || "") === v);
          N && (N.frame = null);
        }
        const b = br();
        b && (String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(b), ru()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, b)), ie(), Rn(), Bt(), zt(), t.setDirtyCanvas(!0, !0), dt();
      } else {
        const v = br();
        v && p.paintEngine.cancelActiveStroke(v);
      }
    else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const v = wu(p.interaction.start, p.interaction.current), N = [
        ...e === "cutout" ? Ds().filter((S) => !_n(S)) : [...bn()],
        ...ip(),
        ...ap()
      ].filter((S) => Qg(v, De(S)));
      fp(N, ((w = N[N.length - 1]) == null ? void 0 : w.id) || null), e === "cutout" && N.length && (p.cutoutAspectOpen = !1), Bt(), zt(), dt();
    } else if (p.interaction && p.interaction.kind !== "view" && p.interaction.kind !== "pan_frame") {
      let v = !1;
      (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (v = !0), p.interaction.kind === "move_raster_object" && (v = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (v = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (v = !0), v && Ki(), ie(), Rn(), t.setDirtyCanvas(!0, !0), $s(), p.hqFrames = 1, zt(), dt();
    }
    p.interaction = null, Bi(), i && i.kind === "view" && Re.endDrag(performance.now()), Ua(), zt(), be(p.pointerPos), dt();
  }, A.onpointercancel = () => {
    var i, o, c;
    if (((i = p.interaction) == null ? void 0 : i.kind) === "view" && Re.endDrag(performance.now()), ((o = p.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = p.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
      Bi();
      const l = br();
      l && p.paintEngine.cancelActiveStroke(l);
    }
    p.interaction = null, Bi(), Ua(), be(p.pointerPos), dt({ localOnly: !0 });
  }, A.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, A.onmousemove = (i) => {
    const o = si(i);
    Za(o, !0), !p.interaction && be(o);
  }, A.onmouseleave = () => {
    Za(p.pointerPos, !1), be(p.pointerPos);
  }, A.onwheel = (i) => {
    if (p.mode === "frame") {
      const o = si(i), c = i.deltaY < 0 ? 1.1 : 1 / 1.1;
      zg(o, c) && dt({ localOnly: !0 }), i.preventDefault();
      return;
    }
    p.mode === "pano" && (Re.applyWheelEvent(i) && dt({ localOnly: !0 }), i.preventDefault());
  }, A.ondragover = (i) => {
    e !== "stickers" && e !== "cutout" || r || (i.preventDefault(), Ne(!0));
  }, A.ondrop = (i) => {
    var l;
    if (e !== "stickers" && e !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Te.depth = 0, Ne(!1);
    const c = Array.from(((l = i.dataTransfer) == null ? void 0 : l.files) || []).find((h) => Ya(h));
    c && lu(c);
  };
  const xu = (i) => {
    e !== "stickers" && e !== "cutout" || r || Zr(i) && (Te.depth += 1, Ne(!0), i.preventDefault());
  }, Su = (i) => {
    e !== "stickers" && e !== "cutout" || r || (!Te.active && Zr(i) && Ne(!0), Te.active && i.preventDefault());
  }, Nu = (i) => {
    if (e !== "stickers" && e !== "cutout" || r || !Te.active) return;
    Te.depth = Math.max(0, Te.depth - 1);
    const o = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Te.depth === 0 || o) && Ne(!1);
  }, Mu = (i) => {
    e !== "stickers" && e !== "cutout" || r || (Te.depth = 0, Ne(!1), Zr(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", xu, !0), window.addEventListener("dragover", Su, !0), window.addEventListener("dragleave", Nu, !0), window.addEventListener("drop", Mu, !0), z.forEach((i) => {
    i.onclick = () => {
      i.disabled || (p.mode = i.dataset.view, e === "cutout" && p.mode === "frame" && pe() && _n(pe()) && (ri({ preservePanelValues: !0 }), Bt(), zt()), js(), Ua(), dt());
    };
  });
  function Gs() {
    const { canUndo: i, canRedo: o } = su();
    D.querySelectorAll("[data-action='undo'], [data-tool-ui-action='undo']").forEach((c) => {
      c.disabled = !i;
    }), D.querySelectorAll("[data-action='redo'], [data-tool-ui-action='redo']").forEach((c) => {
      c.disabled = !o;
    });
  }
  const Ws = D.querySelector("[data-action='undo']");
  Ws && (Ws.onclick = () => {
    r || Ws.disabled || Yi(-1);
  });
  const Ks = D.querySelector("[data-action='redo']");
  Ks && (Ks.onclick = () => {
    r || Ks.disabled || Yi(1);
  });
  const ku = D.querySelector("[data-action='add']");
  ku && (ku.onclick = () => {
    r || (e === "stickers" ? zs() : fu());
  });
  const Pu = D.querySelector("[data-action='clear']");
  Pu && (Pu.onclick = () => {
    r || hu();
  });
  const Au = D.querySelector("[data-action='save']");
  Au && (Au.onclick = () => {
    r || mu();
  }), D.querySelector("[data-action='reset-view']").onclick = () => {
    on(0, 0, 100, 180, 680);
  };
  const Rr = D.querySelector("[data-action='toggle-grid']"), qs = () => {
    if (!Rr) return;
    const i = !!p.showGrid;
    Rr.innerHTML = i ? Dt.eye : Dt.eye_dashed, Rr.setAttribute("aria-pressed", i ? "true" : "false"), Rr.setAttribute("aria-label", i ? "Hide Grid" : "Show Grid"), Rr.setAttribute("data-tip", i ? "Hide grid" : "Show grid");
  };
  if (Rr && (qs(), Rr.onclick = () => {
    p.showGrid = !p.showGrid, kb(t == null ? void 0 : t.id, p.showGrid), qs(), dt();
  }), Mt && (Mt.querySelectorAll("[data-tool-mode]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const o = String(i.getAttribute("data-tool-mode") || "cursor");
      p.primaryTool = o, (o === "paint" || o === "mask") && ri({ preservePanelValues: !0 }), dn(), Bt(), zt(), dt();
    };
  }), Mt.querySelectorAll("[data-tool-ui-action]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const o = String(i.getAttribute("data-tool-ui-action") || "");
      if (!((o === "undo" || o === "redo") && i.disabled)) {
        if (o === "undo") Yi(-1);
        else if (o === "redo") Yi(1);
        else if (o === "clear") hu();
        else if (o === "add") zs();
        else if (o === "add-image") zs();
        else if (o === "add-or-look") {
          const c = Jt();
          if ((d.shots || []).length === 0)
            fu();
          else {
            const l = c;
            if (!l) return;
            p.selectedId = l.id || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], d.active.selected_shot_id = p.selectedId;
            const h = Oe(Number(l.yaw_deg || 0)), m = U(Number(l.pitch_deg || 0), -89.9, 89.9);
            on(h, m, p.viewFov), Bt(), zt(), dt();
          }
        }
      }
    };
  })), D.querySelectorAll("[data-paint-tool]").forEach((i) => {
    i.onclick = () => {
      p.primaryTool = "paint";
      const o = String(i.getAttribute("data-paint-tool") || "pen");
      p.paintTool = o, ri({ preservePanelValues: !0 }), sn[o] && (p.activeBrushPresetId = o), dn(), Bt(), zt(), dt();
    };
  }), D.querySelectorAll("[data-mask-tool]").forEach((i) => {
    i.onclick = () => {
      p.primaryTool = "mask", p.maskTool = String(i.getAttribute("data-mask-tool") || "pen"), ri({ preservePanelValues: !0 }), dn(), Bt(), zt(), dt();
    };
  }), q.forEach((i) => {
    i.onclick = () => {
      const o = String(i.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
      Lg(o);
    };
  }), G.forEach((i) => {
    i.oninput = () => {
      if (i.disabled) return;
      const o = Math.max(1, Math.min(120, Math.round(Number(i.value)))), c = wr(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[c] = o;
      const l = (o - 1) / 119 * 100;
      G.forEach((h) => {
        h.value = String(o), h.style.setProperty("--v", `${U(l, 0, 100)}%`);
      }), W.forEach((h) => {
        h.textContent = String(o);
      }), Gg();
    }, i.onchange = () => Ja(), i.addEventListener("pointerup", Ja), i.addEventListener("pointercancel", Ja), i.addEventListener("blur", Ja);
  }), vt) {
    vt.querySelectorAll("[data-paint-color-swatch]").forEach((o) => {
      o.onclick = () => {
        const c = Lo.find((l) => l.id === o.getAttribute("data-paint-color-swatch"));
        c && (p.paintColor = hn(c.color), mt(!0), dn());
      };
    });
    const i = vt.querySelector("[data-paint-color-custom]");
    i && (i.onclick = (o) => {
      o.preventDefault(), o.stopPropagation(), Ct && !Ct.hidden ? mt(!0) : rt(), dn();
    });
  }
  const e0 = (i, o) => {
    var v;
    if (!se) return;
    const c = se.getBoundingClientRect(), l = U((i - c.left) / Math.max(1, c.width), 0, 1), h = 1 - U((o - c.top) / Math.max(1, c.height), 0, 1), m = la(p.customPaintColor), w = { ...xc(m.h, l, h), a: Number(((v = p.customPaintColor) == null ? void 0 : v.a) ?? 1) };
    p.customPaintColor = hn(w), p.paintColor = hn(w), dn();
  }, n0 = (i) => {
    var m;
    if (!Ae) return;
    const o = Ae.getBoundingClientRect(), c = U((i - o.left) / Math.max(1, o.width), 0, 1), l = la(p.customPaintColor), h = { ...xc(c, l.s, l.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = hn(h), p.paintColor = hn(h), dn();
  }, Cu = (i, o) => {
    const c = i.pointerId;
    o(i);
    const l = (m) => {
      m.pointerId === c && o(m);
    }, h = (m) => {
      m.pointerId === c && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  se && (se.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Cu(i, (o) => e0(o.clientX, o.clientY));
  }), Ae && (Ae.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Cu(i, (o) => n0(o.clientX));
  }), Ve && (Ve.oninput = () => {
    const i = { ...p.customPaintColor, a: U(Number(Ve.value) / 100, 0, 1) };
    p.customPaintColor = hn(i), p.paintColor = hn(i), dn();
  });
  const Iu = () => {
    if (!ot) return;
    const i = !!p.fullscreen;
    ot.innerHTML = i ? Dt.fullscreen_close : Dt.fullscreen, ot.setAttribute("aria-label", i ? "Exit Fullscreen" : "Fullscreen"), ot.setAttribute("data-tip", i ? "Exit fullscreen" : "Fullscreen");
  }, to = (i) => {
    const o = !!i;
    p.fullscreen !== o && (p.fullscreen = o, D.classList.toggle("pano-modal-fullscreen", o), o ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), qs(), Iu(), dt());
  }, Eu = () => document.fullscreenElement === R, r0 = async () => {
    var i, o;
    try {
      if (!document.fullscreenEnabled) {
        to(!p.fullscreen);
        return;
      }
      Eu() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((i = R.requestFullscreen) == null ? void 0 : i.call(R));
    } catch {
      to(!p.fullscreen);
    }
  }, Tu = () => {
    document.fullscreenEnabled && to(Eu());
  };
  document.addEventListener("fullscreenchange", Tu), ot && (Iu(), ot.onclick = (i) => {
    i.preventDefault(), i.stopPropagation(), r0();
  });
  const Du = () => {
    if (!it) return;
    const i = !!p.outputPreviewExpanded;
    it.innerHTML = i ? Dt.fullscreen_close : Dt.fullscreen, it.setAttribute("aria-label", i ? "Reduce Preview" : "Expand Preview"), it.setAttribute("data-tip", i ? "Reduce preview" : "Expand preview");
  };
  it && (Du(), it.onclick = (i) => {
    i.preventDefault(), i.stopPropagation();
    const o = !p.outputPreviewExpanded;
    p.outputPreviewExpanded = o, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = o ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), Du(), dt();
  }), Y.addEventListener("click", (i) => {
    const o = i.target.closest("[data-action]");
    if (!o) return;
    const c = o.getAttribute("data-action");
    if (!r) {
      if (c === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, zt(), dt();
        return;
      }
      if (c === "aspect-set") {
        const l = pe();
        if (!l) return;
        const h = String(o.getAttribute("data-aspect") || "1:1");
        Fg(l, h), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, $s(), ie(), ve(), zt(), dt();
        return;
      }
      if (c === "rotate-90") {
        const l = pe();
        if (!l) return;
        Vg(l), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, $s(), ie(), ve(), zt(), dt();
        return;
      }
      if (c === "bring-front") {
        Hg();
        return;
      }
      if (c === "send-back") {
        $g();
        return;
      }
      if (c === "duplicate") {
        Og();
        return;
      }
      if (c === "replace-image") {
        Eg();
        return;
      }
      if (c === "toggle-lock") {
        up();
        return;
      }
      if (c === "back-initial") {
        vp();
        return;
      }
      if (c === "toggle-visible") {
        yp();
        return;
      }
      if (c === "delete") {
        pu();
        return;
      }
      dt();
    }
  });
  const Ys = t.onExecuted, Xs = t.onConnectionsChange;
  let Zs = null, Js = null, Qs = null;
  !r && e === "stickers" && (Qs = (i = "sync") => {
    Fl(i);
  }, t.__panoExternalStickerSync = Qs, Zs = function(...o) {
    var c;
    typeof Ys == "function" && Ys.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "executed");
  }, t.onExecuted = Zs, Js = function(...o) {
    var c;
    typeof Xs == "function" && Xs.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "connections");
  }, t.onConnectionsChange = Js), r || (Bc.set(String(t.id ?? "0"), () => Cs()), Rp() && Cs());
  const li = () => {
    var i, o, c, l, h, m, w, v, b, N;
    p.cutoutPreviewSurfaceRaf && (cancelAnimationFrame(p.cutoutPreviewSurfaceRaf), p.cutoutPreviewSurfaceRaf = 0), p.cutoutPreviewSurfaceTimer && (clearTimeout(p.cutoutPreviewSurfaceTimer), p.cutoutPreviewSurfaceTimer = 0), Bc.delete(String(t.id ?? "0")), r || Cs(), document.fullscreenElement === R && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Tu), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (c = (o = t.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || c.call(o), (h = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || h.call(l, !0, !0), (v = (w = (m = pn) == null ? void 0 : m.canvas) == null ? void 0 : w.setDirty) == null || v.call(w, !0, !0), Qa(), Cg(), (b = ct == null ? void 0 : ct.dispose) == null || b.call(ct), (N = Q == null ? void 0 : Q.dispose) == null || N.call(Q), Ne(!1), window.removeEventListener("keydown", Ru, !0), window.removeEventListener("keydown", Lu, !0), window.removeEventListener("keydown", eo, !0), window.removeEventListener("keyup", eo, !0), window.removeEventListener("keydown", Ou, !0), window.removeEventListener("dragenter", xu, !0), window.removeEventListener("dragover", Su, !0), window.removeEventListener("dragleave", Nu, !0), window.removeEventListener("drop", Mu, !0), !r && e === "stickers" && (t.onExecuted === Zs && (t.onExecuted = Ys), t.onConnectionsChange === Js && (t.onConnectionsChange = Xs), t.__panoExternalStickerSync === Qs && (t.__panoExternalStickerSync = null)), I.unmount(), M.remove();
  }, Ru = (i) => {
    var o, c, l, h;
    if (i.key === "Escape") {
      if (p.fullscreen && document.fullscreenElement === R) {
        i.preventDefault(), i.stopPropagation(), (o = i.stopImmediatePropagation) == null || o.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), to(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), li();
    }
  }, Lu = (i) => {
    const o = String(i.key || ""), c = String(i.code || ""), l = Number(i.keyCode || 0);
    if (!(o === "Delete" || c === "Delete" || l === 46) && !(o === "Backspace" || c === "Backspace" || l === 8)) return;
    const w = i.target, v = ((w == null ? void 0 : w.tagName) || "").toUpperCase();
    v === "INPUT" || v === "TEXTAREA" || w != null && w.isContentEditable || !pe() || (pu(), i.preventDefault(), i.stopPropagation());
  }, eo = (i) => {
    const o = !!(i.ctrlKey || i.metaKey);
    p.marqueeModifier !== o && (p.marqueeModifier = o, be(p.pointerPos));
  }, Ou = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const o = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (o !== "z" && c !== "KeyZ") return;
    const l = i.target, h = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: m, canRedo: w } = su();
    i.shiftKey && !w || !i.shiftKey && !m || (Yi(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Ru, !0), window.addEventListener("keydown", Lu, !0), window.addEventListener("keydown", eo, !0), window.addEventListener("keyup", eo, !0), window.addEventListener("keydown", Ou, !0), R.addEventListener("pointerdown", (i) => {
    i.target === R && li();
  }), Xi(D), Pp(), !r && e === "stickers" && Fl("open"), Tg(), ie(), Gs(), dn(), Et && requestAnimationFrame(() => {
    Et.classList.add("is-ready");
  }), Bt(), ja(), ou(), be(p.pointerPos), dt(), It.rafId = requestAnimationFrame(Hs);
}
function rd(t, e, n, r) {
  if (!(t != null && t.prototype)) return;
  const a = (y) => {
    var _, d;
    try {
      (_ = y.__panoDomRestore) == null || _.call(y);
    } catch {
    }
    try {
      (d = y.__panoLegacyRestore) == null || d.call(y);
    } catch {
    }
    y.__panoDomPreview = null, y.__panoLegacyPreviewHooked = !1, y.__panoPreviewHooked = !1, y.__panoPreviewAttached = !1, y.__panoPreviewMountKey = null;
  };
  function s(y) {
    var R;
    const _ = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === _) return;
    a(y), n === "PanoramaStickers" && Db(y), Lb(y, ts);
    const M = yn(y, ts);
    if (M && !M.__panoPreviewPatchedCb) {
      M.__panoPreviewPatchedCb = !0;
      const D = M.callback;
      M.callback = (A) => {
        var P;
        const F = D ? D(A) : void 0;
        return (P = y.setDirtyCanvas) == null || P.call(y, !0, !1), F;
      };
    }
    const I = yn(y, "bg_color");
    if (I && (I.value == null || String(I.value).trim() === "" || String(I.value).toLowerCase() === "#000000") && (I.value = "#00ff00", (R = I.callback) == null || R.call(I, "#00ff00")), n === "PanoramaStickers") {
      Wc(y, r, () => Aa(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
        return;
      }
    }
    Wc(y, r, () => Aa(y, "cutout")), Av(y, {
      buttonText: r,
      onOpen: () => Aa(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
  }
  const u = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const y = u ? u.apply(this, arguments) : void 0;
    return s(this), y;
  };
  const f = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const y = f ? f.apply(this, arguments) : void 0;
    return this.widgets && s(this), y;
  };
  const g = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const y = g ? g.apply(this, arguments) : void 0;
    return this.widgets && s(this), y;
  };
}
function qb(t) {
  if (!(t != null && t.prototype)) return;
  const e = function() {
    (!Array.isArray(this.size) || this.size[0] < 100 || this.size[1] < 100) && (this.size = [360, 260]);
  }, n = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const a = n ? n.apply(this, arguments) : void 0;
    return e.call(this), a;
  };
  const r = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const a = r ? r.apply(this, arguments) : void 0;
    return e.call(this), a;
  };
}
function Yb(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const r = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), a = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = a, !r && a < 40) {
      requestAnimationFrame(e);
      return;
    }
    Yh(t), Wc(t, "Open Preview", () => Aa(t, "stickers", { readOnly: !0, hideSidebar: !1 })), Pv(t, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (s) => Aa(s, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), t.__panoStandaloneInstallDone = !0, t.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(e);
}
pn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  async beforeQueuePrompt() {
    const t = [...Bc.values()].map((r) => {
      try {
        return typeof r == "function" ? r() : null;
      } catch {
        return null;
      }
    }).filter(Boolean);
    t.length > 0 && await Promise.allSettled(t);
    const e = [...pa.values()];
    e.length > 0 && await Promise.allSettled(e);
    const n = [...ga.values()];
    n.length > 0 && await Promise.allSettled(n);
  },
  beforeRegisterNodeDef(t, e) {
    const n = String((e == null ? void 0 : e.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && rd(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && rd(t, e, "PanoramaCutout", "Open Cutout Editor"), Fc(n) && qb(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    Yh(t), Fc(e) && Yb(t);
  }
});
