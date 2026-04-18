import * as So from "../../scripts/app.js";
import { app as dn } from "../../scripts/app.js";
import { api as Qe } from "../../scripts/api.js";
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
const ae = {}, Mi = [], Yn = () => {
}, rd = () => !1, rs = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), is = (t) => t.startsWith("onUpdate:"), Be = Object.assign, Yc = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, t0 = Object.prototype.hasOwnProperty, qt = (t, e) => t0.call(t, e), Rt = Array.isArray, ki = (t) => Oa(t) === "[object Map]", id = (t) => Oa(t) === "[object Set]", Fu = (t) => Oa(t) === "[object Date]", Ht = (t) => typeof t == "function", Se = (t) => typeof t == "string", Xn = (t) => typeof t == "symbol", te = (t) => t !== null && typeof t == "object", ad = (t) => (te(t) || Ht(t)) && Ht(t.then) && Ht(t.catch), od = Object.prototype.toString, Oa = (t) => od.call(t), e0 = (t) => Oa(t).slice(8, -1), sd = (t) => Oa(t) === "[object Object]", Xc = (t) => Se(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, ma = /* @__PURE__ */ qc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), as = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, n0 = /-\w/g, en = as(
  (t) => t.replace(n0, (e) => e.slice(1).toUpperCase())
), r0 = /\B([A-Z])/g, Xr = as(
  (t) => t.replace(r0, "-$1").toLowerCase()
), os = as((t) => t.charAt(0).toUpperCase() + t.slice(1)), ec = as(
  (t) => t ? `on${os(t)}` : ""
), Kn = (t, e) => !Object.is(t, e), nc = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, cd = (t, e, n, i = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, i0 = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Vu;
const ss = () => Vu || (Vu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function cs(t) {
  if (Rt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const i = t[n], a = Se(i) ? c0(i) : cs(i);
      if (a)
        for (const s in a)
          e[s] = a[s];
    }
    return e;
  } else if (Se(t) || te(t))
    return t;
}
const a0 = /;(?![^(]*\))/g, o0 = /:([^]+)/, s0 = /\/\*[^]*?\*\//g;
function c0(t) {
  const e = {};
  return t.replace(s0, "").split(a0).forEach((n) => {
    if (n) {
      const i = n.split(o0);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
}
function ls(t) {
  let e = "";
  if (Se(t))
    e = t;
  else if (Rt(t))
    for (let n = 0; n < t.length; n++) {
      const i = ls(t[n]);
      i && (e += i + " ");
    }
  else if (te(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const l0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", u0 = /* @__PURE__ */ qc(l0);
function ld(t) {
  return !!t || t === "";
}
function f0(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let i = 0; n && i < t.length; i++)
    n = Zc(t[i], e[i]);
  return n;
}
function Zc(t, e) {
  if (t === e) return !0;
  let n = Fu(t), i = Fu(e);
  if (n || i)
    return n && i ? t.getTime() === e.getTime() : !1;
  if (n = Xn(t), i = Xn(e), n || i)
    return t === e;
  if (n = Rt(t), i = Rt(e), n || i)
    return n && i ? f0(t, e) : !1;
  if (n = te(t), i = te(e), n || i) {
    if (!n || !i)
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
const ud = (t) => !!(t && t.__v_isRef === !0), fd = (t) => Se(t) ? t : t == null ? "" : Rt(t) || te(t) && (t.toString === od || !Ht(t.toString)) ? ud(t) ? fd(t.value) : JSON.stringify(t, dd, 2) : String(t), dd = (t, e) => ud(e) ? dd(t, e.value) : ki(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [i, a], s) => (n[rc(i, s) + " =>"] = a, n),
    {}
  )
} : id(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => rc(n))
} : Xn(e) ? rc(e) : te(e) && !Rt(e) && !sd(e) ? String(e) : e, rc = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Xn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let cn;
class d0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = cn, !e && cn && (this.index = (cn.scopes || (cn.scopes = [])).push(
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
      const n = cn;
      try {
        return cn = this, e();
      } finally {
        cn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = cn, cn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (cn = this.prevScope, this.prevScope = void 0);
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, i = this.scopes.length; n < i; n++)
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
function h0() {
  return cn;
}
let ie;
const ic = /* @__PURE__ */ new WeakSet();
class hd {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, cn && cn.active && cn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ic.has(this) && (ic.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || gd(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Hu(this), md(this);
    const e = ie, n = Pn;
    ie = this, Pn = !0;
    try {
      return this.fn();
    } finally {
      yd(this), ie = e, Pn = n, this.flags &= -3;
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
    this.flags & 64 ? ic.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let pd = 0, ya, ba;
function gd(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = ba, ba = t;
    return;
  }
  t.next = ya, ya = t;
}
function Jc() {
  pd++;
}
function Qc() {
  if (--pd > 0)
    return;
  if (ba) {
    let e = ba;
    for (ba = void 0; e; ) {
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
        } catch (i) {
          t || (t = i);
        }
      e = n;
    }
  }
  if (t) throw t;
}
function md(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function yd(t) {
  let e, n = t.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), tl(i), p0(i)) : e = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
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
  const e = t.dep, n = ie, i = Pn;
  ie = t, Pn = !0;
  try {
    md(t);
    const a = t.fn(t._value);
    (e.version === 0 || Kn(a, t._value)) && (t.flags |= 128, t._value = a, e.version++);
  } catch (a) {
    throw e.version++, a;
  } finally {
    ie = n, Pn = i, yd(t), t.flags &= -3;
  }
}
function tl(t, e = !1) {
  const { dep: n, prevSub: i, nextSub: a } = t;
  if (i && (i.nextSub = a, t.prevSub = void 0), a && (a.prevSub = i, t.nextSub = void 0), n.subs === t && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      tl(s, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function p0(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let Pn = !0;
const vd = [];
function lr() {
  vd.push(Pn), Pn = !1;
}
function ur() {
  const t = vd.pop();
  Pn = t === void 0 ? !0 : t;
}
function Hu(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const n = ie;
    ie = void 0;
    try {
      e();
    } finally {
      ie = n;
    }
  }
}
let Ca = 0;
class g0 {
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
    if (!ie || !Pn || ie === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ie)
      n = this.activeLink = new g0(ie, this), ie.deps ? (n.prevDep = ie.depsTail, ie.depsTail.nextDep = n, ie.depsTail = n) : ie.deps = ie.depsTail = n, _d(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ie.depsTail, n.nextDep = void 0, ie.depsTail.nextDep = n, ie.depsTail = n, ie.deps === n && (ie.deps = i);
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
function _d(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let i = e.deps; i; i = i.nextDep)
        _d(i);
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
function $e(t, e, n) {
  if (Pn && ie) {
    let i = kc.get(t);
    i || kc.set(t, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new el()), a.map = i, a.key = n), a.track();
  }
}
function cr(t, e, n, i, a, s) {
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
    const g = Rt(t), b = g && Xc(n);
    if (g && n === "length") {
      const _ = Number(i);
      u.forEach((d, M) => {
        (M === "length" || M === Ia || !Xn(M) && M >= _) && f(d);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), b && f(u.get(Ia)), e) {
        case "add":
          g ? b && f(u.get("length")) : (f(u.get(Ur)), ki(t) && f(u.get(Pc)));
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
  const e = /* @__PURE__ */ Wt(t);
  return e === t ? e : ($e(e, "iterate", Ia), /* @__PURE__ */ mn(t) ? e : e.map(An));
}
function us(t) {
  return $e(t = /* @__PURE__ */ Wt(t), "iterate", Ia), t;
}
function Bn(t, e) {
  return /* @__PURE__ */ fr(t) ? Di(/* @__PURE__ */ Br(t) ? An(e) : e) : An(e);
}
const m0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return ac(this, Symbol.iterator, (t) => Bn(this, t));
  },
  concat(...t) {
    return hi(this).concat(
      ...t.map((e) => Rt(e) ? hi(e) : e)
    );
  },
  entries() {
    return ac(this, "entries", (t) => (t[1] = Bn(this, t[1]), t));
  },
  every(t, e) {
    return rr(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return rr(
      this,
      "filter",
      t,
      e,
      (n) => n.map((i) => Bn(this, i)),
      arguments
    );
  },
  find(t, e) {
    return rr(
      this,
      "find",
      t,
      e,
      (n) => Bn(this, n),
      arguments
    );
  },
  findIndex(t, e) {
    return rr(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return rr(
      this,
      "findLast",
      t,
      e,
      (n) => Bn(this, n),
      arguments
    );
  },
  findLastIndex(t, e) {
    return rr(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return rr(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return oc(this, "includes", t);
  },
  indexOf(...t) {
    return oc(this, "indexOf", t);
  },
  join(t) {
    return hi(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return oc(this, "lastIndexOf", t);
  },
  map(t, e) {
    return rr(this, "map", t, e, void 0, arguments);
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
    return rr(this, "some", t, e, void 0, arguments);
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
    return ac(this, "values", (t) => Bn(this, t));
  }
};
function ac(t, e, n) {
  const i = us(t), a = i[e]();
  return i !== t && !/* @__PURE__ */ mn(t) && (a._next = a.next, a.next = () => {
    const s = a._next();
    return s.done || (s.value = n(s.value)), s;
  }), a;
}
const y0 = Array.prototype;
function rr(t, e, n, i, a, s) {
  const u = us(t), f = u !== t && !/* @__PURE__ */ mn(t), g = u[e];
  if (g !== y0[e]) {
    const d = g.apply(t, s);
    return f ? An(d) : d;
  }
  let b = n;
  u !== t && (f ? b = function(d, M) {
    return n.call(this, Bn(t, d), M, t);
  } : n.length > 2 && (b = function(d, M) {
    return n.call(this, d, M, t);
  }));
  const _ = g.call(u, b, i);
  return f && a ? a(_) : _;
}
function $u(t, e, n, i) {
  const a = us(t), s = a !== t && !/* @__PURE__ */ mn(t);
  let u = n, f = !1;
  a !== t && (s ? (f = i.length === 0, u = function(b, _, d) {
    return f && (f = !1, b = Bn(t, b)), n.call(this, b, Bn(t, _), d, t);
  }) : n.length > 3 && (u = function(b, _, d) {
    return n.call(this, b, _, d, t);
  }));
  const g = a[e](u, ...i);
  return f ? Bn(t, g) : g;
}
function oc(t, e, n) {
  const i = /* @__PURE__ */ Wt(t);
  $e(i, "iterate", Ia);
  const a = i[e](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ al(n[0]) ? (n[0] = /* @__PURE__ */ Wt(n[0]), i[e](...n)) : a;
}
function na(t, e, n = []) {
  lr(), Jc();
  const i = (/* @__PURE__ */ Wt(t))[e].apply(t, n);
  return Qc(), ur(), i;
}
const b0 = /* @__PURE__ */ qc("__proto__,__v_isRef,__isVue"), wd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Xn)
);
function v0(t) {
  Xn(t) || (t = String(t));
  const e = /* @__PURE__ */ Wt(this);
  return $e(e, "has", t), e.hasOwnProperty(t);
}
class xd {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, i) {
    if (n === "__v_skip") return e.__v_skip;
    const a = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return i === (a ? s ? C0 : kd : s ? Md : Nd).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(i) ? e : void 0;
    const u = Rt(e);
    if (!a) {
      let g;
      if (u && (g = m0[n]))
        return g;
      if (n === "hasOwnProperty")
        return v0;
    }
    const f = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ue(e) ? e : i
    );
    if ((Xn(n) ? wd.has(n) : b0(n)) || (a || $e(e, "get", n), s))
      return f;
    if (/* @__PURE__ */ Ue(f)) {
      const g = u && Xc(n) ? f : f.value;
      return a && te(g) ? /* @__PURE__ */ Cc(g) : g;
    }
    return te(f) ? a ? /* @__PURE__ */ Cc(f) : /* @__PURE__ */ rl(f) : f;
  }
}
class Sd extends xd {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, i, a) {
    let s = e[n];
    const u = Rt(e) && Xc(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ fr(s);
      if (!/* @__PURE__ */ mn(i) && !/* @__PURE__ */ fr(i) && (s = /* @__PURE__ */ Wt(s), i = /* @__PURE__ */ Wt(i)), !u && /* @__PURE__ */ Ue(s) && !/* @__PURE__ */ Ue(i))
        return b || (s.value = i), !0;
    }
    const f = u ? Number(n) < e.length : qt(e, n), g = Reflect.set(
      e,
      n,
      i,
      /* @__PURE__ */ Ue(e) ? e : a
    );
    return e === /* @__PURE__ */ Wt(a) && (f ? Kn(i, s) && cr(e, "set", n, i) : cr(e, "add", n, i)), g;
  }
  deleteProperty(e, n) {
    const i = qt(e, n);
    e[n];
    const a = Reflect.deleteProperty(e, n);
    return a && i && cr(e, "delete", n, void 0), a;
  }
  has(e, n) {
    const i = Reflect.has(e, n);
    return (!Xn(n) || !wd.has(n)) && $e(e, "has", n), i;
  }
  ownKeys(e) {
    return $e(
      e,
      "iterate",
      Rt(e) ? "length" : Ur
    ), Reflect.ownKeys(e);
  }
}
class _0 extends xd {
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
const w0 = /* @__PURE__ */ new Sd(), x0 = /* @__PURE__ */ new _0(), S0 = /* @__PURE__ */ new Sd(!0);
const Ac = (t) => t, ro = (t) => Reflect.getPrototypeOf(t);
function N0(t, e, n) {
  return function(...i) {
    const a = this.__v_raw, s = /* @__PURE__ */ Wt(a), u = ki(s), f = t === "entries" || t === Symbol.iterator && u, g = t === "keys" && u, b = a[t](...i), _ = n ? Ac : e ? Di : An;
    return !e && $e(
      s,
      "iterate",
      g ? Pc : Ur
    ), Be(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: d, done: M } = b.next();
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
function M0(t, e) {
  const n = {
    get(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ Wt(s), f = /* @__PURE__ */ Wt(a);
      t || (Kn(a, f) && $e(u, "get", a), $e(u, "get", f));
      const { has: g } = ro(u), b = e ? Ac : t ? Di : An;
      if (g.call(u, a))
        return b(s.get(a));
      if (g.call(u, f))
        return b(s.get(f));
      s !== u && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !t && $e(/* @__PURE__ */ Wt(a), "iterate", Ur), a.size;
    },
    has(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ Wt(s), f = /* @__PURE__ */ Wt(a);
      return t || (Kn(a, f) && $e(u, "has", a), $e(u, "has", f)), a === f ? s.has(a) : s.has(a) || s.has(f);
    },
    forEach(a, s) {
      const u = this, f = u.__v_raw, g = /* @__PURE__ */ Wt(f), b = e ? Ac : t ? Di : An;
      return !t && $e(g, "iterate", Ur), f.forEach((_, d) => a.call(s, b(_), b(d), u));
    }
  };
  return Be(
    n,
    t ? {
      add: io("add"),
      set: io("set"),
      delete: io("delete"),
      clear: io("clear")
    } : {
      add(a) {
        const s = /* @__PURE__ */ Wt(this), u = ro(s), f = /* @__PURE__ */ Wt(a), g = !e && !/* @__PURE__ */ mn(a) && !/* @__PURE__ */ fr(a) ? f : a;
        return u.has.call(s, g) || Kn(a, g) && u.has.call(s, a) || Kn(f, g) && u.has.call(s, f) || (s.add(g), cr(s, "add", g, g)), this;
      },
      set(a, s) {
        !e && !/* @__PURE__ */ mn(s) && !/* @__PURE__ */ fr(s) && (s = /* @__PURE__ */ Wt(s));
        const u = /* @__PURE__ */ Wt(this), { has: f, get: g } = ro(u);
        let b = f.call(u, a);
        b || (a = /* @__PURE__ */ Wt(a), b = f.call(u, a));
        const _ = g.call(u, a);
        return u.set(a, s), b ? Kn(s, _) && cr(u, "set", a, s) : cr(u, "add", a, s), this;
      },
      delete(a) {
        const s = /* @__PURE__ */ Wt(this), { has: u, get: f } = ro(s);
        let g = u.call(s, a);
        g || (a = /* @__PURE__ */ Wt(a), g = u.call(s, a)), f && f.call(s, a);
        const b = s.delete(a);
        return g && cr(s, "delete", a, void 0), b;
      },
      clear() {
        const a = /* @__PURE__ */ Wt(this), s = a.size !== 0, u = a.clear();
        return s && cr(
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
    n[a] = N0(a, t, e);
  }), n;
}
function nl(t, e) {
  const n = M0(t, e);
  return (i, a, s) => a === "__v_isReactive" ? !t : a === "__v_isReadonly" ? t : a === "__v_raw" ? i : Reflect.get(
    qt(n, a) && a in i ? n : i,
    a,
    s
  );
}
const k0 = {
  get: /* @__PURE__ */ nl(!1, !1)
}, P0 = {
  get: /* @__PURE__ */ nl(!1, !0)
}, A0 = {
  get: /* @__PURE__ */ nl(!0, !1)
};
const Nd = /* @__PURE__ */ new WeakMap(), Md = /* @__PURE__ */ new WeakMap(), kd = /* @__PURE__ */ new WeakMap(), C0 = /* @__PURE__ */ new WeakMap();
function I0(t) {
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
function E0(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : I0(e0(t));
}
// @__NO_SIDE_EFFECTS__
function rl(t) {
  return /* @__PURE__ */ fr(t) ? t : il(
    t,
    !1,
    w0,
    k0,
    Nd
  );
}
// @__NO_SIDE_EFFECTS__
function T0(t) {
  return il(
    t,
    !1,
    S0,
    P0,
    Md
  );
}
// @__NO_SIDE_EFFECTS__
function Cc(t) {
  return il(
    t,
    !0,
    x0,
    A0,
    kd
  );
}
function il(t, e, n, i, a) {
  if (!te(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = E0(t);
  if (s === 0)
    return t;
  const u = a.get(t);
  if (u)
    return u;
  const f = new Proxy(
    t,
    s === 2 ? i : n
  );
  return a.set(t, f), f;
}
// @__NO_SIDE_EFFECTS__
function Br(t) {
  return /* @__PURE__ */ fr(t) ? /* @__PURE__ */ Br(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function fr(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function mn(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function al(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Wt(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ Wt(e) : t;
}
function D0(t) {
  return !qt(t, "__v_skip") && Object.isExtensible(t) && cd(t, "__v_skip", !0), t;
}
const An = (t) => te(t) ? /* @__PURE__ */ rl(t) : t, Di = (t) => te(t) ? /* @__PURE__ */ Cc(t) : t;
// @__NO_SIDE_EFFECTS__
function Ue(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function R0(t) {
  return L0(t, !1);
}
function L0(t, e) {
  return /* @__PURE__ */ Ue(t) ? t : new O0(t, e);
}
class O0 {
  constructor(e, n) {
    this.dep = new el(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ Wt(e), this._value = n ? e : An(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ mn(e) || /* @__PURE__ */ fr(e);
    e = i ? e : /* @__PURE__ */ Wt(e), Kn(e, n) && (this._rawValue = e, this._value = i ? e : An(e), this.dep.trigger());
  }
}
function ol(t) {
  return /* @__PURE__ */ Ue(t) ? t.value : t;
}
const F0 = {
  get: (t, e, n) => e === "__v_raw" ? t : ol(Reflect.get(t, e, n)),
  set: (t, e, n, i) => {
    const a = t[e];
    return /* @__PURE__ */ Ue(a) && !/* @__PURE__ */ Ue(n) ? (a.value = n, !0) : Reflect.set(t, e, n, i);
  }
};
function Pd(t) {
  return /* @__PURE__ */ Br(t) ? t : new Proxy(t, F0);
}
class V0 {
  constructor(e, n, i) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new el(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ca - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ie !== this)
      return gd(this, !0), !0;
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
function H0(t, e, n = !1) {
  let i, a;
  return Ht(t) ? i = t : (i = t.get, a = t.set), new V0(i, a, n);
}
const ao = {}, Fo = /* @__PURE__ */ new WeakMap();
let Vr;
function $0(t, e = !1, n = Vr) {
  if (n) {
    let i = Fo.get(n);
    i || Fo.set(n, i = []), i.push(t);
  }
}
function z0(t, e, n = ae) {
  const { immediate: i, deep: a, once: s, scheduler: u, augmentJob: f, call: g } = n, b = (L) => a ? L : /* @__PURE__ */ mn(L) || a === !1 || a === 0 ? Pr(L, 1) : Pr(L);
  let _, d, M, P, T = !1, E = !1;
  if (/* @__PURE__ */ Ue(t) ? (d = () => t.value, T = /* @__PURE__ */ mn(t)) : /* @__PURE__ */ Br(t) ? (d = () => b(t), T = !0) : Rt(t) ? (E = !0, T = t.some((L) => /* @__PURE__ */ Br(L) || /* @__PURE__ */ mn(L)), d = () => t.map((L) => {
    if (/* @__PURE__ */ Ue(L))
      return L.value;
    if (/* @__PURE__ */ Br(L))
      return b(L);
    if (Ht(L))
      return g ? g(L, 2) : L();
  })) : Ht(t) ? e ? d = g ? () => g(t, 2) : t : d = () => {
    if (M) {
      lr();
      try {
        M();
      } finally {
        ur();
      }
    }
    const L = Vr;
    Vr = _;
    try {
      return g ? g(t, 3, [P]) : t(P);
    } finally {
      Vr = L;
    }
  } : d = Yn, e && a) {
    const L = d, Y = a === !0 ? 1 / 0 : a;
    d = () => Pr(L(), Y);
  }
  const C = h0(), V = () => {
    _.stop(), C && C.active && Yc(C.effects, _);
  };
  if (s && e) {
    const L = e;
    e = (...Y) => {
      L(...Y), V();
    };
  }
  let A = E ? new Array(t.length).fill(ao) : ao;
  const F = (L) => {
    if (!(!(_.flags & 1) || !_.dirty && !L))
      if (e) {
        const Y = _.run();
        if (a || T || (E ? Y.some((I, ct) => Kn(I, A[ct])) : Kn(Y, A))) {
          M && M();
          const I = Vr;
          Vr = _;
          try {
            const ct = [
              Y,
              // pass undefined as the old value when it's changed for the first time
              A === ao ? void 0 : E && A[0] === ao ? [] : A,
              P
            ];
            A = Y, g ? g(e, 3, ct) : (
              // @ts-expect-error
              e(...ct)
            );
          } finally {
            Vr = I;
          }
        }
      } else
        _.run();
  };
  return f && f(F), _ = new hd(d), _.scheduler = u ? () => u(F, !1) : F, P = (L) => $0(L, !1, _), M = _.onStop = () => {
    const L = Fo.get(_);
    if (L) {
      if (g)
        g(L, 4);
      else
        for (const Y of L) Y();
      Fo.delete(_);
    }
  }, e ? i ? F(!0) : A = _.run() : u ? u(F.bind(null, !0), !0) : _.run(), V.pause = _.pause.bind(_), V.resume = _.resume.bind(_), V.stop = V, V;
}
function Pr(t, e = 1 / 0, n) {
  if (e <= 0 || !te(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ Ue(t))
    Pr(t.value, e, n);
  else if (Rt(t))
    for (let i = 0; i < t.length; i++)
      Pr(t[i], e, n);
  else if (id(t) || ki(t))
    t.forEach((i) => {
      Pr(i, e, n);
    });
  else if (sd(t)) {
    for (const i in t)
      Pr(t[i], e, n);
    for (const i of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, i) && Pr(t[i], e, n);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Fa(t, e, n, i) {
  try {
    return i ? t(...i) : t();
  } catch (a) {
    fs(a, e, n);
  }
}
function Zn(t, e, n, i) {
  if (Ht(t)) {
    const a = Fa(t, e, n, i);
    return a && ad(a) && a.catch((s) => {
      fs(s, e, n);
    }), a;
  }
  if (Rt(t)) {
    const a = [];
    for (let s = 0; s < t.length; s++)
      a.push(Zn(t[s], e, n, i));
    return a;
  }
}
function fs(t, e, n, i = !0) {
  const a = e ? e.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: u } = e && e.appContext.config || ae;
  if (e) {
    let f = e.parent;
    const g = e.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const _ = f.ec;
      if (_) {
        for (let d = 0; d < _.length; d++)
          if (_[d](t, g, b) === !1)
            return;
      }
      f = f.parent;
    }
    if (s) {
      lr(), Fa(s, null, 10, [
        t,
        g,
        b
      ]), ur();
      return;
    }
  }
  j0(t, n, a, i, u);
}
function j0(t, e, n, i = !0, a = !1) {
  if (a)
    throw t;
  console.error(t);
}
const Je = [];
let jn = -1;
const Pi = [];
let kr = null, vi = 0;
const Ad = /* @__PURE__ */ Promise.resolve();
let Vo = null;
function Cd(t) {
  const e = Vo || Ad;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function U0(t) {
  let e = jn + 1, n = Je.length;
  for (; e < n; ) {
    const i = e + n >>> 1, a = Je[i], s = Ea(a);
    s < t || s === t && a.flags & 2 ? e = i + 1 : n = i;
  }
  return e;
}
function sl(t) {
  if (!(t.flags & 1)) {
    const e = Ea(t), n = Je[Je.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Ea(n) ? Je.push(t) : Je.splice(U0(e), 0, t), t.flags |= 1, Id();
  }
}
function Id() {
  Vo || (Vo = Ad.then(Td));
}
function B0(t) {
  Rt(t) ? Pi.push(...t) : kr && t.id === -1 ? kr.splice(vi + 1, 0, t) : t.flags & 1 || (Pi.push(t), t.flags |= 1), Id();
}
function zu(t, e, n = jn + 1) {
  for (; n < Je.length; n++) {
    const i = Je[n];
    if (i && i.flags & 2) {
      if (t && i.id !== t.uid)
        continue;
      Je.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Ed(t) {
  if (Pi.length) {
    const e = [...new Set(Pi)].sort(
      (n, i) => Ea(n) - Ea(i)
    );
    if (Pi.length = 0, kr) {
      kr.push(...e);
      return;
    }
    for (kr = e, vi = 0; vi < kr.length; vi++) {
      const n = kr[vi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    kr = null, vi = 0;
  }
}
const Ea = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Td(t) {
  try {
    for (jn = 0; jn < Je.length; jn++) {
      const e = Je[jn];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Fa(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; jn < Je.length; jn++) {
      const e = Je[jn];
      e && (e.flags &= -2);
    }
    jn = -1, Je.length = 0, Ed(), Vo = null, (Je.length || Pi.length) && Td();
  }
}
let kn = null, Dd = null;
function Ho(t) {
  const e = kn;
  return kn = t, Dd = t && t.type.__scopeId || null, e;
}
function G0(t, e = kn, n) {
  if (!e || t._n)
    return t;
  const i = (...a) => {
    i._d && Qu(-1);
    const s = Ho(e);
    let u;
    try {
      u = t(...a);
    } finally {
      Ho(s), i._d && Qu(1);
    }
    return u;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Lr(t, e, n, i) {
  const a = t.dirs, s = e && e.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    s && (f.oldValue = s[u].value);
    let g = f.dir[i];
    g && (lr(), Zn(g, n, 8, [
      t.el,
      f,
      t,
      e
    ]), ur());
  }
}
function K0(t, e) {
  if (je) {
    let n = je.provides;
    const i = je.parent && je.parent.provides;
    i === n && (n = je.provides = Object.create(i)), n[t] = e;
  }
}
function No(t, e, n = !1) {
  const i = Gm();
  if (i || Ci) {
    let a = Ci ? Ci._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && t in a)
      return a[t];
    if (arguments.length > 1)
      return n && Ht(e) ? e.call(i && i.proxy) : e;
  }
}
const W0 = /* @__PURE__ */ Symbol.for("v-scx"), q0 = () => No(W0);
function Mo(t, e, n) {
  return Rd(t, e, n);
}
function Rd(t, e, n = ae) {
  const { immediate: i, deep: a, flush: s, once: u } = n, f = Be({}, n), g = e && i || !e && s !== "post";
  let b;
  if (Da) {
    if (s === "sync") {
      const P = q0();
      b = P.__watcherHandles || (P.__watcherHandles = []);
    } else if (!g) {
      const P = () => {
      };
      return P.stop = Yn, P.resume = Yn, P.pause = Yn, P;
    }
  }
  const _ = je;
  f.call = (P, T, E) => Zn(P, _, T, E);
  let d = !1;
  s === "post" ? f.scheduler = (P) => {
    sn(P, _ && _.suspense);
  } : s !== "sync" && (d = !0, f.scheduler = (P, T) => {
    T ? P() : sl(P);
  }), f.augmentJob = (P) => {
    e && (P.flags |= 4), d && (P.flags |= 2, _ && (P.id = _.uid, P.i = _));
  };
  const M = z0(t, e, f);
  return Da && (b ? b.push(M) : g && M()), M;
}
function Y0(t, e, n) {
  const i = this.proxy, a = Se(t) ? t.includes(".") ? Ld(i, t) : () => i[t] : t.bind(i, i);
  let s;
  Ht(e) ? s = e : (s = e.handler, n = e);
  const u = Va(this), f = Rd(a, s.bind(i), n);
  return u(), f;
}
function Ld(t, e) {
  const n = e.split(".");
  return () => {
    let i = t;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const X0 = /* @__PURE__ */ Symbol("_vte"), Z0 = (t) => t.__isTeleport, J0 = /* @__PURE__ */ Symbol("_leaveCb");
function cl(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, cl(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Od(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function ju(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const $o = /* @__PURE__ */ new WeakMap();
function va(t, e, n, i, a = !1) {
  if (Rt(t)) {
    t.forEach(
      (E, C) => va(
        E,
        e && (Rt(e) ? e[C] : e),
        n,
        i,
        a
      )
    );
    return;
  }
  if (_a(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && va(t, e, n, i.component.subTree);
    return;
  }
  const s = i.shapeFlag & 4 ? dl(i.component) : i.el, u = a ? null : s, { i: f, r: g } = t, b = e && e.r, _ = f.refs === ae ? f.refs = {} : f.refs, d = f.setupState, M = /* @__PURE__ */ Wt(d), P = d === ae ? rd : (E) => ju(_, E) ? !1 : qt(M, E), T = (E, C) => !(C && ju(_, C));
  if (b != null && b !== g) {
    if (Uu(e), Se(b))
      _[b] = null, P(b) && (d[b] = null);
    else if (/* @__PURE__ */ Ue(b)) {
      const E = e;
      T(b, E.k) && (b.value = null), E.k && (_[E.k] = null);
    }
  }
  if (Ht(g))
    Fa(g, f, 12, [u, _]);
  else {
    const E = Se(g), C = /* @__PURE__ */ Ue(g);
    if (E || C) {
      const V = () => {
        if (t.f) {
          const A = E ? P(g) ? d[g] : _[g] : T() || !t.k ? g.value : _[t.k];
          if (a)
            Rt(A) && Yc(A, s);
          else if (Rt(A))
            A.includes(s) || A.push(s);
          else if (E)
            _[g] = [s], P(g) && (d[g] = _[g]);
          else {
            const F = [s];
            T(g, t.k) && (g.value = F), t.k && (_[t.k] = F);
          }
        } else E ? (_[g] = u, P(g) && (d[g] = u)) : C && (T(g, t.k) && (g.value = u), t.k && (_[t.k] = u));
      };
      if (u) {
        const A = () => {
          V(), $o.delete(t);
        };
        A.id = -1, $o.set(t, A), sn(A, n);
      } else
        Uu(t), V();
    }
  }
}
function Uu(t) {
  const e = $o.get(t);
  e && (e.flags |= 8, $o.delete(t));
}
ss().requestIdleCallback;
ss().cancelIdleCallback;
const _a = (t) => !!t.type.__asyncLoader, Fd = (t) => t.type.__isKeepAlive;
function Q0(t, e) {
  Vd(t, "a", e);
}
function tm(t, e) {
  Vd(t, "da", e);
}
function Vd(t, e, n = je) {
  const i = t.__wdc || (t.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return t();
  });
  if (ds(e, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Fd(a.parent.vnode) && em(i, e, n, a), a = a.parent;
  }
}
function em(t, e, n, i) {
  const a = ds(
    e,
    t,
    i,
    !0
    /* prepend */
  );
  zd(() => {
    Yc(i[e], a);
  }, n);
}
function ds(t, e, n = je, i = !1) {
  if (n) {
    const a = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...u) => {
      lr();
      const f = Va(n), g = Zn(e, n, t, u);
      return f(), ur(), g;
    });
    return i ? a.unshift(s) : a.push(s), s;
  }
}
const dr = (t) => (e, n = je) => {
  (!Da || t === "sp") && ds(t, (...i) => e(...i), n);
}, nm = dr("bm"), Hd = dr("m"), rm = dr(
  "bu"
), im = dr("u"), $d = dr(
  "bum"
), zd = dr("um"), am = dr(
  "sp"
), om = dr("rtg"), sm = dr("rtc");
function cm(t, e = je) {
  ds("ec", t, e);
}
const lm = "components", jd = /* @__PURE__ */ Symbol.for("v-ndc");
function um(t) {
  return Se(t) ? fm(lm, t, !1) || t : t || jd;
}
function fm(t, e, n = !0, i = !1) {
  const a = kn || je;
  if (a) {
    const s = a.type;
    {
      const f = Xm(
        s,
        !1
      );
      if (f && (f === e || f === en(e) || f === os(en(e))))
        return s;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Bu(a[t] || s[t], e) || // global registration
      Bu(a.appContext[t], e)
    );
    return !u && i ? s : u;
  }
}
function Bu(t, e) {
  return t && (t[e] || t[en(e)] || t[os(en(e))]);
}
function Ai(t, e, n, i) {
  let a;
  const s = n, u = Rt(t);
  if (u || Se(t)) {
    const f = u && /* @__PURE__ */ Br(t);
    let g = !1, b = !1;
    f && (g = !/* @__PURE__ */ mn(t), b = /* @__PURE__ */ fr(t), t = us(t)), a = new Array(t.length);
    for (let _ = 0, d = t.length; _ < d; _++)
      a[_] = e(
        g ? b ? Di(An(t[_])) : An(t[_]) : t[_],
        _,
        void 0,
        s
      );
  } else if (typeof t == "number") {
    a = new Array(t);
    for (let f = 0; f < t; f++)
      a[f] = e(f + 1, f, void 0, s);
  } else if (te(t))
    if (t[Symbol.iterator])
      a = Array.from(
        t,
        (f, g) => e(f, g, void 0, s)
      );
    else {
      const f = Object.keys(t);
      a = new Array(f.length);
      for (let g = 0, b = f.length; g < b; g++) {
        const _ = f[g];
        a[g] = e(t[_], _, g, s);
      }
    }
  else
    a = [];
  return a;
}
const Ic = (t) => t ? fh(t) ? dl(t) : Ic(t.parent) : null, wa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Be(/* @__PURE__ */ Object.create(null), {
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
    $options: (t) => Bd(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      sl(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Cd.bind(t.proxy)),
    $watch: (t) => Y0.bind(t)
  })
), sc = (t, e) => t !== ae && !t.__isScriptSetup && qt(t, e), dm = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: s, accessCache: u, type: f, appContext: g } = t;
    if (e[0] !== "$") {
      const M = u[e];
      if (M !== void 0)
        switch (M) {
          case 1:
            return i[e];
          case 2:
            return a[e];
          case 4:
            return n[e];
          case 3:
            return s[e];
        }
      else {
        if (sc(i, e))
          return u[e] = 1, i[e];
        if (a !== ae && qt(a, e))
          return u[e] = 2, a[e];
        if (qt(s, e))
          return u[e] = 3, s[e];
        if (n !== ae && qt(n, e))
          return u[e] = 4, n[e];
        Ec && (u[e] = 0);
      }
    }
    const b = wa[e];
    let _, d;
    if (b)
      return e === "$attrs" && $e(t.attrs, "get", ""), b(t);
    if (
      // css module (injected by vue-loader)
      (_ = f.__cssModules) && (_ = _[e])
    )
      return _;
    if (n !== ae && qt(n, e))
      return u[e] = 4, n[e];
    if (
      // global properties
      d = g.config.globalProperties, qt(d, e)
    )
      return d[e];
  },
  set({ _: t }, e, n) {
    const { data: i, setupState: a, ctx: s } = t;
    return sc(a, e) ? (a[e] = n, !0) : i !== ae && qt(i, e) ? (i[e] = n, !0) : qt(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: i, appContext: a, props: s, type: u }
  }, f) {
    let g;
    return !!(n[f] || t !== ae && f[0] !== "$" && qt(t, f) || sc(e, f) || qt(s, f) || qt(i, f) || qt(wa, f) || qt(a.config.globalProperties, f) || (g = u.__cssModules) && g[f]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : qt(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Gu(t) {
  return Rt(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Ec = !0;
function hm(t) {
  const e = Bd(t), n = t.proxy, i = t.ctx;
  Ec = !1, e.beforeCreate && Ku(e.beforeCreate, t, "bc");
  const {
    // state
    data: a,
    computed: s,
    methods: u,
    watch: f,
    provide: g,
    inject: b,
    // lifecycle
    created: _,
    beforeMount: d,
    mounted: M,
    beforeUpdate: P,
    updated: T,
    activated: E,
    deactivated: C,
    beforeDestroy: V,
    beforeUnmount: A,
    destroyed: F,
    unmounted: L,
    render: Y,
    renderTracked: I,
    renderTriggered: ct,
    errorCaptured: Q,
    serverPrefetch: xt,
    // public API
    expose: z,
    inheritAttrs: ft,
    // assets
    components: St,
    directives: tt,
    filters: nt
  } = e;
  if (b && pm(b, i, null), u)
    for (const dt in u) {
      const B = u[dt];
      Ht(B) && (i[dt] = B.bind(n));
    }
  if (a) {
    const dt = a.call(n, n);
    te(dt) && (t.data = /* @__PURE__ */ rl(dt));
  }
  if (Ec = !0, s)
    for (const dt in s) {
      const B = s[dt], ot = Ht(B) ? B.bind(n, n) : Ht(B.get) ? B.get.bind(n, n) : Yn, Nt = !Ht(B) && Ht(B.set) ? B.set.bind(n) : Yn, Dt = Ii({
        get: ot,
        set: Nt
      });
      Object.defineProperty(i, dt, {
        enumerable: !0,
        configurable: !0,
        get: () => Dt.value,
        set: (Ct) => Dt.value = Ct
      });
    }
  if (f)
    for (const dt in f)
      Ud(f[dt], i, n, dt);
  if (g) {
    const dt = Ht(g) ? g.call(n) : g;
    Reflect.ownKeys(dt).forEach((B) => {
      K0(B, dt[B]);
    });
  }
  _ && Ku(_, t, "c");
  function at(dt, B) {
    Rt(B) ? B.forEach((ot) => dt(ot.bind(n))) : B && dt(B.bind(n));
  }
  if (at(nm, d), at(Hd, M), at(rm, P), at(im, T), at(Q0, E), at(tm, C), at(cm, Q), at(sm, I), at(om, ct), at($d, A), at(zd, L), at(am, xt), Rt(z))
    if (z.length) {
      const dt = t.exposed || (t.exposed = {});
      z.forEach((B) => {
        Object.defineProperty(dt, B, {
          get: () => n[B],
          set: (ot) => n[B] = ot,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  Y && t.render === Yn && (t.render = Y), ft != null && (t.inheritAttrs = ft), St && (t.components = St), tt && (t.directives = tt), xt && Od(t);
}
function pm(t, e, n = Yn) {
  Rt(t) && (t = Tc(t));
  for (const i in t) {
    const a = t[i];
    let s;
    te(a) ? "default" in a ? s = No(
      a.from || i,
      a.default,
      !0
    ) : s = No(a.from || i) : s = No(a), /* @__PURE__ */ Ue(s) ? Object.defineProperty(e, i, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (u) => s.value = u
    }) : e[i] = s;
  }
}
function Ku(t, e, n) {
  Zn(
    Rt(t) ? t.map((i) => i.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Ud(t, e, n, i) {
  let a = i.includes(".") ? Ld(n, i) : () => n[i];
  if (Se(t)) {
    const s = e[t];
    Ht(s) && Mo(a, s);
  } else if (Ht(t))
    Mo(a, t.bind(n));
  else if (te(t))
    if (Rt(t))
      t.forEach((s) => Ud(s, e, n, i));
    else {
      const s = Ht(t.handler) ? t.handler.bind(n) : e[t.handler];
      Ht(s) && Mo(a, s, t);
    }
}
function Bd(t) {
  const e = t.type, { mixins: n, extends: i } = e, {
    mixins: a,
    optionsCache: s,
    config: { optionMergeStrategies: u }
  } = t.appContext, f = s.get(e);
  let g;
  return f ? g = f : !a.length && !n && !i ? g = e : (g = {}, a.length && a.forEach(
    (b) => zo(g, b, u, !0)
  ), zo(g, e, u)), te(e) && s.set(e, g), g;
}
function zo(t, e, n, i = !1) {
  const { mixins: a, extends: s } = e;
  s && zo(t, s, n, !0), a && a.forEach(
    (u) => zo(t, u, n, !0)
  );
  for (const u in e)
    if (!(i && u === "expose")) {
      const f = gm[u] || n && n[u];
      t[u] = f ? f(t[u], e[u]) : e[u];
    }
  return t;
}
const gm = {
  data: Wu,
  props: qu,
  emits: qu,
  // objects
  methods: fa,
  computed: fa,
  // lifecycle
  beforeCreate: Ze,
  created: Ze,
  beforeMount: Ze,
  mounted: Ze,
  beforeUpdate: Ze,
  updated: Ze,
  beforeDestroy: Ze,
  beforeUnmount: Ze,
  destroyed: Ze,
  unmounted: Ze,
  activated: Ze,
  deactivated: Ze,
  errorCaptured: Ze,
  serverPrefetch: Ze,
  // assets
  components: fa,
  directives: fa,
  // watch
  watch: ym,
  // provide / inject
  provide: Wu,
  inject: mm
};
function Wu(t, e) {
  return e ? t ? function() {
    return Be(
      Ht(t) ? t.call(this, this) : t,
      Ht(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function mm(t, e) {
  return fa(Tc(t), Tc(e));
}
function Tc(t) {
  if (Rt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Ze(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function fa(t, e) {
  return t ? Be(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function qu(t, e) {
  return t ? Rt(t) && Rt(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Be(
    /* @__PURE__ */ Object.create(null),
    Gu(t),
    Gu(e ?? {})
  ) : e;
}
function ym(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Be(/* @__PURE__ */ Object.create(null), t);
  for (const i in e)
    n[i] = Ze(t[i], e[i]);
  return n;
}
function Gd() {
  return {
    app: null,
    config: {
      isNativeTag: rd,
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
let bm = 0;
function vm(t, e) {
  return function(i, a = null) {
    Ht(i) || (i = Be({}, i)), a != null && !te(a) && (a = null);
    const s = Gd(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let g = !1;
    const b = s.app = {
      _uid: bm++,
      _component: i,
      _props: a,
      _container: null,
      _context: s,
      _instance: null,
      version: Jm,
      get config() {
        return s.config;
      },
      set config(_) {
      },
      use(_, ...d) {
        return u.has(_) || (_ && Ht(_.install) ? (u.add(_), _.install(b, ...d)) : Ht(_) && (u.add(_), _(b, ...d))), b;
      },
      mixin(_) {
        return s.mixins.includes(_) || s.mixins.push(_), b;
      },
      component(_, d) {
        return d ? (s.components[_] = d, b) : s.components[_];
      },
      directive(_, d) {
        return d ? (s.directives[_] = d, b) : s.directives[_];
      },
      mount(_, d, M) {
        if (!g) {
          const P = b._ceVNode || tn(i, a);
          return P.appContext = s, M === !0 ? M = "svg" : M === !1 && (M = void 0), t(P, _, M), g = !0, b._container = _, _.__vue_app__ = b, dl(P.component);
        }
      },
      onUnmount(_) {
        f.push(_);
      },
      unmount() {
        g && (Zn(
          f,
          b._instance,
          16
        ), t(null, b._container), delete b._container.__vue_app__);
      },
      provide(_, d) {
        return s.provides[_] = d, b;
      },
      runWithContext(_) {
        const d = Ci;
        Ci = b;
        try {
          return _();
        } finally {
          Ci = d;
        }
      }
    };
    return b;
  };
}
let Ci = null;
const _m = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${en(e)}Modifiers`] || t[`${Xr(e)}Modifiers`];
function wm(t, e, ...n) {
  if (t.isUnmounted) return;
  const i = t.vnode.props || ae;
  let a = n;
  const s = e.startsWith("update:"), u = s && _m(i, e.slice(7));
  u && (u.trim && (a = n.map((_) => Se(_) ? _.trim() : _)), u.number && (a = n.map(i0)));
  let f, g = i[f = ec(e)] || // also try camelCase event handler (#2249)
  i[f = ec(en(e))];
  !g && s && (g = i[f = ec(Xr(e))]), g && Zn(
    g,
    t,
    6,
    a
  );
  const b = i[f + "Once"];
  if (b) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[f])
      return;
    t.emitted[f] = !0, Zn(
      b,
      t,
      6,
      a
    );
  }
}
const xm = /* @__PURE__ */ new WeakMap();
function Kd(t, e, n = !1) {
  const i = n ? xm : e.emitsCache, a = i.get(t);
  if (a !== void 0)
    return a;
  const s = t.emits;
  let u = {}, f = !1;
  if (!Ht(t)) {
    const g = (b) => {
      const _ = Kd(b, e, !0);
      _ && (f = !0, Be(u, _));
    };
    !n && e.mixins.length && e.mixins.forEach(g), t.extends && g(t.extends), t.mixins && t.mixins.forEach(g);
  }
  return !s && !f ? (te(t) && i.set(t, null), null) : (Rt(s) ? s.forEach((g) => u[g] = null) : Be(u, s), te(t) && i.set(t, u), u);
}
function hs(t, e) {
  return !t || !rs(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), qt(t, e[0].toLowerCase() + e.slice(1)) || qt(t, Xr(e)) || qt(t, e));
}
function Yu(t) {
  const {
    type: e,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [s],
    slots: u,
    attrs: f,
    emit: g,
    render: b,
    renderCache: _,
    props: d,
    data: M,
    setupState: P,
    ctx: T,
    inheritAttrs: E
  } = t, C = Ho(t);
  let V, A;
  try {
    if (n.shapeFlag & 4) {
      const L = a || i, Y = L;
      V = Gn(
        b.call(
          Y,
          L,
          _,
          d,
          P,
          M,
          T
        )
      ), A = f;
    } else {
      const L = e;
      V = Gn(
        L.length > 1 ? L(
          d,
          { attrs: f, slots: u, emit: g }
        ) : L(
          d,
          null
        )
      ), A = e.props ? f : Sm(f);
    }
  } catch (L) {
    xa.length = 0, fs(L, t, 1), V = tn(Ar);
  }
  let F = V;
  if (A && E !== !1) {
    const L = Object.keys(A), { shapeFlag: Y } = F;
    L.length && Y & 7 && (s && L.some(is) && (A = Nm(
      A,
      s
    )), F = Ri(F, A, !1, !0));
  }
  return n.dirs && (F = Ri(F, null, !1, !0), F.dirs = F.dirs ? F.dirs.concat(n.dirs) : n.dirs), n.transition && cl(F, n.transition), V = F, Ho(C), V;
}
const Sm = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || rs(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Nm = (t, e) => {
  const n = {};
  for (const i in t)
    (!is(i) || !(i.slice(9) in e)) && (n[i] = t[i]);
  return n;
};
function Mm(t, e, n) {
  const { props: i, children: a, component: s } = t, { props: u, children: f, patchFlag: g } = e, b = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return i ? Xu(i, u, b) : !!u;
    if (g & 8) {
      const _ = e.dynamicProps;
      for (let d = 0; d < _.length; d++) {
        const M = _[d];
        if (Wd(u, i, M) && !hs(b, M))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : i === u ? !1 : i ? u ? Xu(i, u, b) : !0 : !!u;
  return !1;
}
function Xu(t, e, n) {
  const i = Object.keys(e);
  if (i.length !== Object.keys(t).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const s = i[a];
    if (Wd(e, t, s) && !hs(n, s))
      return !0;
  }
  return !1;
}
function Wd(t, e, n) {
  const i = t[n], a = e[n];
  return n === "style" && te(i) && te(a) ? !Zc(i, a) : i !== a;
}
function km({ vnode: t, parent: e, suspense: n }, i) {
  for (; e; ) {
    const a = e.subTree;
    if (a.suspense && a.suspense.activeBranch === t && (a.suspense.vnode.el = a.el = i, t = a), a === t)
      (t = e.vnode).el = i, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = i);
}
const qd = {}, Yd = () => Object.create(qd), Xd = (t) => Object.getPrototypeOf(t) === qd;
function Pm(t, e, n, i = !1) {
  const a = {}, s = Yd();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Zd(t, e, a, s);
  for (const u in t.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? t.props = i ? a : /* @__PURE__ */ T0(a) : t.type.props ? t.props = a : t.props = s, t.attrs = s;
}
function Am(t, e, n, i) {
  const {
    props: a,
    attrs: s,
    vnode: { patchFlag: u }
  } = t, f = /* @__PURE__ */ Wt(a), [g] = t.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const _ = t.vnode.dynamicProps;
      for (let d = 0; d < _.length; d++) {
        let M = _[d];
        if (hs(t.emitsOptions, M))
          continue;
        const P = e[M];
        if (g)
          if (qt(s, M))
            P !== s[M] && (s[M] = P, b = !0);
          else {
            const T = en(M);
            a[T] = Dc(
              g,
              f,
              T,
              P,
              t,
              !1
            );
          }
        else
          P !== s[M] && (s[M] = P, b = !0);
      }
    }
  } else {
    Zd(t, e, a, s) && (b = !0);
    let _;
    for (const d in f)
      (!e || // for camelCase
      !qt(e, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((_ = Xr(d)) === d || !qt(e, _))) && (g ? n && // for camelCase
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
        (!e || !qt(e, d)) && (delete s[d], b = !0);
  }
  b && cr(t.attrs, "set", "");
}
function Zd(t, e, n, i) {
  const [a, s] = t.propsOptions;
  let u = !1, f;
  if (e)
    for (let g in e) {
      if (ma(g))
        continue;
      const b = e[g];
      let _;
      a && qt(a, _ = en(g)) ? !s || !s.includes(_) ? n[_] = b : (f || (f = {}))[_] = b : hs(t.emitsOptions, g) || (!(g in i) || b !== i[g]) && (i[g] = b, u = !0);
    }
  if (s) {
    const g = /* @__PURE__ */ Wt(n), b = f || ae;
    for (let _ = 0; _ < s.length; _++) {
      const d = s[_];
      n[d] = Dc(
        a,
        g,
        d,
        b[d],
        t,
        !qt(b, d)
      );
    }
  }
  return u;
}
function Dc(t, e, n, i, a, s) {
  const u = t[n];
  if (u != null) {
    const f = qt(u, "default");
    if (f && i === void 0) {
      const g = u.default;
      if (u.type !== Function && !u.skipFactory && Ht(g)) {
        const { propsDefaults: b } = a;
        if (n in b)
          i = b[n];
        else {
          const _ = Va(a);
          i = b[n] = g.call(
            null,
            e
          ), _();
        }
      } else
        i = g;
      a.ce && a.ce._setProp(n, i);
    }
    u[
      0
      /* shouldCast */
    ] && (s && !f ? i = !1 : u[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === Xr(n)) && (i = !0));
  }
  return i;
}
const Cm = /* @__PURE__ */ new WeakMap();
function Jd(t, e, n = !1) {
  const i = n ? Cm : e.propsCache, a = i.get(t);
  if (a)
    return a;
  const s = t.props, u = {}, f = [];
  let g = !1;
  if (!Ht(t)) {
    const _ = (d) => {
      g = !0;
      const [M, P] = Jd(d, e, !0);
      Be(u, M), P && f.push(...P);
    };
    !n && e.mixins.length && e.mixins.forEach(_), t.extends && _(t.extends), t.mixins && t.mixins.forEach(_);
  }
  if (!s && !g)
    return te(t) && i.set(t, Mi), Mi;
  if (Rt(s))
    for (let _ = 0; _ < s.length; _++) {
      const d = en(s[_]);
      Zu(d) && (u[d] = ae);
    }
  else if (s)
    for (const _ in s) {
      const d = en(_);
      if (Zu(d)) {
        const M = s[_], P = u[d] = Rt(M) || Ht(M) ? { type: M } : Be({}, M), T = P.type;
        let E = !1, C = !0;
        if (Rt(T))
          for (let V = 0; V < T.length; ++V) {
            const A = T[V], F = Ht(A) && A.name;
            if (F === "Boolean") {
              E = !0;
              break;
            } else F === "String" && (C = !1);
          }
        else
          E = Ht(T) && T.name === "Boolean";
        P[
          0
          /* shouldCast */
        ] = E, P[
          1
          /* shouldCastTrue */
        ] = C, (E || qt(P, "default")) && f.push(d);
      }
    }
  const b = [u, f];
  return te(t) && i.set(t, b), b;
}
function Zu(t) {
  return t[0] !== "$" && !ma(t);
}
const ll = (t) => t === "_" || t === "_ctx" || t === "$stable", ul = (t) => Rt(t) ? t.map(Gn) : [Gn(t)], Im = (t, e, n) => {
  if (e._n)
    return e;
  const i = G0((...a) => ul(e(...a)), n);
  return i._c = !1, i;
}, Qd = (t, e, n) => {
  const i = t._ctx;
  for (const a in t) {
    if (ll(a)) continue;
    const s = t[a];
    if (Ht(s))
      e[a] = Im(a, s, i);
    else if (s != null) {
      const u = ul(s);
      e[a] = () => u;
    }
  }
}, th = (t, e) => {
  const n = ul(e);
  t.slots.default = () => n;
}, eh = (t, e, n) => {
  for (const i in e)
    (n || !ll(i)) && (t[i] = e[i]);
}, Em = (t, e, n) => {
  const i = t.slots = Yd();
  if (t.vnode.shapeFlag & 32) {
    const a = e._;
    a ? (eh(i, e, n), n && cd(i, "_", a, !0)) : Qd(e, i);
  } else e && th(t, e);
}, Tm = (t, e, n) => {
  const { vnode: i, slots: a } = t;
  let s = !0, u = ae;
  if (i.shapeFlag & 32) {
    const f = e._;
    f ? n && f === 1 ? s = !1 : eh(a, e, n) : (s = !e.$stable, Qd(e, a)), u = e;
  } else e && (th(t, e), u = { default: 1 });
  if (s)
    for (const f in a)
      !ll(f) && u[f] == null && delete a[f];
}, sn = Fm;
function Dm(t) {
  return Rm(t);
}
function Rm(t, e) {
  const n = ss();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: s,
    createElement: u,
    createText: f,
    createComment: g,
    setText: b,
    setElementText: _,
    parentNode: d,
    nextSibling: M,
    setScopeId: P = Yn,
    insertStaticContent: T
  } = t, E = (S, D, H, q = null, G = null, K = null, J = void 0, it = null, et = !!D.dynamicChildren) => {
    if (S === D)
      return;
    S && !ra(S, D) && (q = Ce(S), Ct(S, G, K, !0), S = null), D.patchFlag === -2 && (et = !1, D.dynamicChildren = null);
    const { type: Z, ref: yt, shapeFlag: rt } = D;
    switch (Z) {
      case ps:
        C(S, D, H, q);
        break;
      case Ar:
        V(S, D, H, q);
        break;
      case ko:
        S == null && A(D, H, q, J);
        break;
      case ze:
        St(
          S,
          D,
          H,
          q,
          G,
          K,
          J,
          it,
          et
        );
        break;
      default:
        rt & 1 ? Y(
          S,
          D,
          H,
          q,
          G,
          K,
          J,
          it,
          et
        ) : rt & 6 ? tt(
          S,
          D,
          H,
          q,
          G,
          K,
          J,
          it,
          et
        ) : (rt & 64 || rt & 128) && Z.process(
          S,
          D,
          H,
          q,
          G,
          K,
          J,
          it,
          et,
          nn
        );
    }
    yt != null && G ? va(yt, S && S.ref, K, D || S, !D) : yt == null && S && S.ref != null && va(S.ref, null, K, S, !0);
  }, C = (S, D, H, q) => {
    if (S == null)
      i(
        D.el = f(D.children),
        H,
        q
      );
    else {
      const G = D.el = S.el;
      D.children !== S.children && b(G, D.children);
    }
  }, V = (S, D, H, q) => {
    S == null ? i(
      D.el = g(D.children || ""),
      H,
      q
    ) : D.el = S.el;
  }, A = (S, D, H, q) => {
    [S.el, S.anchor] = T(
      S.children,
      D,
      H,
      q,
      S.el,
      S.anchor
    );
  }, F = ({ el: S, anchor: D }, H, q) => {
    let G;
    for (; S && S !== D; )
      G = M(S), i(S, H, q), S = G;
    i(D, H, q);
  }, L = ({ el: S, anchor: D }) => {
    let H;
    for (; S && S !== D; )
      H = M(S), a(S), S = H;
    a(D);
  }, Y = (S, D, H, q, G, K, J, it, et) => {
    if (D.type === "svg" ? J = "svg" : D.type === "math" && (J = "mathml"), S == null)
      I(
        D,
        H,
        q,
        G,
        K,
        J,
        it,
        et
      );
    else {
      const Z = S.el && S.el._isVueCE ? S.el : null;
      try {
        Z && Z._beginPatch(), xt(
          S,
          D,
          G,
          K,
          J,
          it,
          et
        );
      } finally {
        Z && Z._endPatch();
      }
    }
  }, I = (S, D, H, q, G, K, J, it) => {
    let et, Z;
    const { props: yt, shapeFlag: rt, transition: _t, dirs: It } = S;
    if (et = S.el = u(
      S.type,
      K,
      yt && yt.is,
      yt
    ), rt & 8 ? _(et, S.children) : rt & 16 && Q(
      S.children,
      et,
      null,
      q,
      G,
      cc(S, K),
      J,
      it
    ), It && Lr(S, null, q, "created"), ct(et, S, S.scopeId, J, q), yt) {
      for (const jt in yt)
        jt !== "value" && !ma(jt) && s(et, jt, null, yt[jt], K, q);
      "value" in yt && s(et, "value", null, yt.value, K), (Z = yt.onVnodeBeforeMount) && Hn(Z, q, S);
    }
    It && Lr(S, null, q, "beforeMount");
    const p = Lm(G, _t);
    p && _t.beforeEnter(et), i(et, D, H), ((Z = yt && yt.onVnodeMounted) || p || It) && sn(() => {
      try {
        Z && Hn(Z, q, S), p && _t.enter(et), It && Lr(S, null, q, "mounted");
      } finally {
      }
    }, G);
  }, ct = (S, D, H, q, G) => {
    if (H && P(S, H), q)
      for (let K = 0; K < q.length; K++)
        P(S, q[K]);
    if (G) {
      let K = G.subTree;
      if (D === K || ah(K.type) && (K.ssContent === D || K.ssFallback === D)) {
        const J = G.vnode;
        ct(
          S,
          J,
          J.scopeId,
          J.slotScopeIds,
          G.parent
        );
      }
    }
  }, Q = (S, D, H, q, G, K, J, it, et = 0) => {
    for (let Z = et; Z < S.length; Z++) {
      const yt = S[Z] = it ? sr(S[Z]) : Gn(S[Z]);
      E(
        null,
        yt,
        D,
        H,
        q,
        G,
        K,
        J,
        it
      );
    }
  }, xt = (S, D, H, q, G, K, J) => {
    const it = D.el = S.el;
    let { patchFlag: et, dynamicChildren: Z, dirs: yt } = D;
    et |= S.patchFlag & 16;
    const rt = S.props || ae, _t = D.props || ae;
    let It;
    if (H && Or(H, !1), (It = _t.onVnodeBeforeUpdate) && Hn(It, H, D, S), yt && Lr(D, S, H, "beforeUpdate"), H && Or(H, !0), (rt.innerHTML && _t.innerHTML == null || rt.textContent && _t.textContent == null) && _(it, ""), Z ? z(
      S.dynamicChildren,
      Z,
      it,
      H,
      q,
      cc(D, G),
      K
    ) : J || B(
      S,
      D,
      it,
      null,
      H,
      q,
      cc(D, G),
      K,
      !1
    ), et > 0) {
      if (et & 16)
        ft(it, rt, _t, H, G);
      else if (et & 2 && rt.class !== _t.class && s(it, "class", null, _t.class, G), et & 4 && s(it, "style", rt.style, _t.style, G), et & 8) {
        const p = D.dynamicProps;
        for (let jt = 0; jt < p.length; jt++) {
          const Yt = p[jt], ue = rt[Yt], be = _t[Yt];
          (be !== ue || Yt === "value") && s(it, Yt, ue, be, G, H);
        }
      }
      et & 1 && S.children !== D.children && _(it, D.children);
    } else !J && Z == null && ft(it, rt, _t, H, G);
    ((It = _t.onVnodeUpdated) || yt) && sn(() => {
      It && Hn(It, H, D, S), yt && Lr(D, S, H, "updated");
    }, q);
  }, z = (S, D, H, q, G, K, J) => {
    for (let it = 0; it < D.length; it++) {
      const et = S[it], Z = D[it], yt = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        et.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (et.type === ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ra(et, Z) || // - In the case of a component, it could contain anything.
        et.shapeFlag & 198) ? d(et.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          H
        )
      );
      E(
        et,
        Z,
        yt,
        null,
        q,
        G,
        K,
        J,
        !0
      );
    }
  }, ft = (S, D, H, q, G) => {
    if (D !== H) {
      if (D !== ae)
        for (const K in D)
          !ma(K) && !(K in H) && s(
            S,
            K,
            D[K],
            null,
            G,
            q
          );
      for (const K in H) {
        if (ma(K)) continue;
        const J = H[K], it = D[K];
        J !== it && K !== "value" && s(S, K, it, J, G, q);
      }
      "value" in H && s(S, "value", D.value, H.value, G);
    }
  }, St = (S, D, H, q, G, K, J, it, et) => {
    const Z = D.el = S ? S.el : f(""), yt = D.anchor = S ? S.anchor : f("");
    let { patchFlag: rt, dynamicChildren: _t, slotScopeIds: It } = D;
    It && (it = it ? it.concat(It) : It), S == null ? (i(Z, H, q), i(yt, H, q), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      D.children || [],
      H,
      yt,
      G,
      K,
      J,
      it,
      et
    )) : rt > 0 && rt & 64 && _t && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    S.dynamicChildren && S.dynamicChildren.length === _t.length ? (z(
      S.dynamicChildren,
      _t,
      H,
      G,
      K,
      J,
      it
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (D.key != null || G && D === G.subTree) && nh(
      S,
      D,
      !0
      /* shallow */
    )) : B(
      S,
      D,
      H,
      yt,
      G,
      K,
      J,
      it,
      et
    );
  }, tt = (S, D, H, q, G, K, J, it, et) => {
    D.slotScopeIds = it, S == null ? D.shapeFlag & 512 ? G.ctx.activate(
      D,
      H,
      q,
      J,
      et
    ) : nt(
      D,
      H,
      q,
      G,
      K,
      J,
      et
    ) : X(S, D, et);
  }, nt = (S, D, H, q, G, K, J) => {
    const it = S.component = Bm(
      S,
      q,
      G
    );
    if (Fd(S) && (it.ctx.renderer = nn), Km(it, !1, J), it.asyncDep) {
      if (G && G.registerDep(it, at, J), !S.el) {
        const et = it.subTree = tn(Ar);
        V(null, et, D, H), S.placeholder = et.el;
      }
    } else
      at(
        it,
        S,
        D,
        H,
        G,
        K,
        J
      );
  }, X = (S, D, H) => {
    const q = D.component = S.component;
    if (Mm(S, D, H))
      if (q.asyncDep && !q.asyncResolved) {
        dt(q, D, H);
        return;
      } else
        q.next = D, q.update();
    else
      D.el = S.el, q.vnode = D;
  }, at = (S, D, H, q, G, K, J) => {
    const it = () => {
      if (S.isMounted) {
        let { next: rt, bu: _t, u: It, parent: p, vnode: jt } = S;
        {
          const ve = rh(S);
          if (ve) {
            rt && (rt.el = jt.el, dt(S, rt, J)), ve.asyncDep.then(() => {
              sn(() => {
                S.isUnmounted || Z();
              }, G);
            });
            return;
          }
        }
        let Yt = rt, ue;
        Or(S, !1), rt ? (rt.el = jt.el, dt(S, rt, J)) : rt = jt, _t && nc(_t), (ue = rt.props && rt.props.onVnodeBeforeUpdate) && Hn(ue, p, rt, jt), Or(S, !0);
        const be = Yu(S), kt = S.subTree;
        S.subTree = be, E(
          kt,
          be,
          // parent may have changed if it's in a teleport
          d(kt.el),
          // anchor may have changed if it's in a fragment
          Ce(kt),
          S,
          G,
          K
        ), rt.el = be.el, Yt === null && km(S, be.el), It && sn(It, G), (ue = rt.props && rt.props.onVnodeUpdated) && sn(
          () => Hn(ue, p, rt, jt),
          G
        );
      } else {
        let rt;
        const { el: _t, props: It } = D, { bm: p, m: jt, parent: Yt, root: ue, type: be } = S, kt = _a(D);
        Or(S, !1), p && nc(p), !kt && (rt = It && It.onVnodeBeforeMount) && Hn(rt, Yt, D), Or(S, !0);
        {
          ue.ce && ue.ce._hasShadowRoot() && ue.ce._injectChildStyle(
            be,
            S.parent ? S.parent.type : void 0
          );
          const ve = S.subTree = Yu(S);
          E(
            null,
            ve,
            H,
            q,
            S,
            G,
            K
          ), D.el = ve.el;
        }
        if (jt && sn(jt, G), !kt && (rt = It && It.onVnodeMounted)) {
          const ve = D;
          sn(
            () => Hn(rt, Yt, ve),
            G
          );
        }
        (D.shapeFlag & 256 || Yt && _a(Yt.vnode) && Yt.vnode.shapeFlag & 256) && S.a && sn(S.a, G), S.isMounted = !0, D = H = q = null;
      }
    };
    S.scope.on();
    const et = S.effect = new hd(it);
    S.scope.off();
    const Z = S.update = et.run.bind(et), yt = S.job = et.runIfDirty.bind(et);
    yt.i = S, yt.id = S.uid, et.scheduler = () => sl(yt), Or(S, !0), Z();
  }, dt = (S, D, H) => {
    D.component = S;
    const q = S.vnode.props;
    S.vnode = D, S.next = null, Am(S, D.props, q, H), Tm(S, D.children, H), lr(), zu(S), ur();
  }, B = (S, D, H, q, G, K, J, it, et = !1) => {
    const Z = S && S.children, yt = S ? S.shapeFlag : 0, rt = D.children, { patchFlag: _t, shapeFlag: It } = D;
    if (_t > 0) {
      if (_t & 128) {
        Nt(
          Z,
          rt,
          H,
          q,
          G,
          K,
          J,
          it,
          et
        );
        return;
      } else if (_t & 256) {
        ot(
          Z,
          rt,
          H,
          q,
          G,
          K,
          J,
          it,
          et
        );
        return;
      }
    }
    It & 8 ? (yt & 16 && ke(Z, G, K), rt !== Z && _(H, rt)) : yt & 16 ? It & 16 ? Nt(
      Z,
      rt,
      H,
      q,
      G,
      K,
      J,
      it,
      et
    ) : ke(Z, G, K, !0) : (yt & 8 && _(H, ""), It & 16 && Q(
      rt,
      H,
      q,
      G,
      K,
      J,
      it,
      et
    ));
  }, ot = (S, D, H, q, G, K, J, it, et) => {
    S = S || Mi, D = D || Mi;
    const Z = S.length, yt = D.length, rt = Math.min(Z, yt);
    let _t;
    for (_t = 0; _t < rt; _t++) {
      const It = D[_t] = et ? sr(D[_t]) : Gn(D[_t]);
      E(
        S[_t],
        It,
        H,
        null,
        G,
        K,
        J,
        it,
        et
      );
    }
    Z > yt ? ke(
      S,
      G,
      K,
      !0,
      !1,
      rt
    ) : Q(
      D,
      H,
      q,
      G,
      K,
      J,
      it,
      et,
      rt
    );
  }, Nt = (S, D, H, q, G, K, J, it, et) => {
    let Z = 0;
    const yt = D.length;
    let rt = S.length - 1, _t = yt - 1;
    for (; Z <= rt && Z <= _t; ) {
      const It = S[Z], p = D[Z] = et ? sr(D[Z]) : Gn(D[Z]);
      if (ra(It, p))
        E(
          It,
          p,
          H,
          null,
          G,
          K,
          J,
          it,
          et
        );
      else
        break;
      Z++;
    }
    for (; Z <= rt && Z <= _t; ) {
      const It = S[rt], p = D[_t] = et ? sr(D[_t]) : Gn(D[_t]);
      if (ra(It, p))
        E(
          It,
          p,
          H,
          null,
          G,
          K,
          J,
          it,
          et
        );
      else
        break;
      rt--, _t--;
    }
    if (Z > rt) {
      if (Z <= _t) {
        const It = _t + 1, p = It < yt ? D[It].el : q;
        for (; Z <= _t; )
          E(
            null,
            D[Z] = et ? sr(D[Z]) : Gn(D[Z]),
            H,
            p,
            G,
            K,
            J,
            it,
            et
          ), Z++;
      }
    } else if (Z > _t)
      for (; Z <= rt; )
        Ct(S[Z], G, K, !0), Z++;
    else {
      const It = Z, p = Z, jt = /* @__PURE__ */ new Map();
      for (Z = p; Z <= _t; Z++) {
        const _e = D[Z] = et ? sr(D[Z]) : Gn(D[Z]);
        _e.key != null && jt.set(_e.key, Z);
      }
      let Yt, ue = 0;
      const be = _t - p + 1;
      let kt = !1, ve = 0;
      const Ie = new Array(be);
      for (Z = 0; Z < be; Z++) Ie[Z] = 0;
      for (Z = It; Z <= rt; Z++) {
        const _e = S[Z];
        if (ue >= be) {
          Ct(_e, G, K, !0);
          continue;
        }
        let rn;
        if (_e.key != null)
          rn = jt.get(_e.key);
        else
          for (Yt = p; Yt <= _t; Yt++)
            if (Ie[Yt - p] === 0 && ra(_e, D[Yt])) {
              rn = Yt;
              break;
            }
        rn === void 0 ? Ct(_e, G, K, !0) : (Ie[rn - p] = Z + 1, rn >= ve ? ve = rn : kt = !0, E(
          _e,
          D[rn],
          H,
          null,
          G,
          K,
          J,
          it,
          et
        ), ue++);
      }
      const Zr = kt ? Om(Ie) : Mi;
      for (Yt = Zr.length - 1, Z = be - 1; Z >= 0; Z--) {
        const _e = p + Z, rn = D[_e], yn = D[_e + 1], Me = _e + 1 < yt ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          yn.el || ih(yn)
        ) : q;
        Ie[Z] === 0 ? E(
          null,
          rn,
          H,
          Me,
          G,
          K,
          J,
          it,
          et
        ) : kt && (Yt < 0 || Z !== Zr[Yt] ? Dt(rn, H, Me, 2) : Yt--);
      }
    }
  }, Dt = (S, D, H, q, G = null) => {
    const { el: K, type: J, transition: it, children: et, shapeFlag: Z } = S;
    if (Z & 6) {
      Dt(S.component.subTree, D, H, q);
      return;
    }
    if (Z & 128) {
      S.suspense.move(D, H, q);
      return;
    }
    if (Z & 64) {
      J.move(S, D, H, nn);
      return;
    }
    if (J === ze) {
      i(K, D, H);
      for (let rt = 0; rt < et.length; rt++)
        Dt(et[rt], D, H, q);
      i(S.anchor, D, H);
      return;
    }
    if (J === ko) {
      F(S, D, H);
      return;
    }
    if (q !== 2 && Z & 1 && it)
      if (q === 0)
        it.beforeEnter(K), i(K, D, H), sn(() => it.enter(K), G);
      else {
        const { leave: rt, delayLeave: _t, afterLeave: It } = it, p = () => {
          S.ctx.isUnmounted ? a(K) : i(K, D, H);
        }, jt = () => {
          K._isLeaving && K[J0](
            !0
            /* cancelled */
          ), rt(K, () => {
            p(), It && It();
          });
        };
        _t ? _t(K, p, jt) : jt();
      }
    else
      i(K, D, H);
  }, Ct = (S, D, H, q = !1, G = !1) => {
    const {
      type: K,
      props: J,
      ref: it,
      children: et,
      dynamicChildren: Z,
      shapeFlag: yt,
      patchFlag: rt,
      dirs: _t,
      cacheIndex: It,
      memo: p
    } = S;
    if (rt === -2 && (G = !1), it != null && (lr(), va(it, null, H, S, !0), ur()), It != null && (D.renderCache[It] = void 0), yt & 256) {
      D.ctx.deactivate(S);
      return;
    }
    const jt = yt & 1 && _t, Yt = !_a(S);
    let ue;
    if (Yt && (ue = J && J.onVnodeBeforeUnmount) && Hn(ue, D, S), yt & 6)
      Oe(S.component, H, q);
    else {
      if (yt & 128) {
        S.suspense.unmount(H, q);
        return;
      }
      jt && Lr(S, null, D, "beforeUnmount"), yt & 64 ? S.type.remove(
        S,
        D,
        H,
        nn,
        q
      ) : Z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (K !== ze || rt > 0 && rt & 64) ? ke(
        Z,
        D,
        H,
        !1,
        !0
      ) : (K === ze && rt & 384 || !G && yt & 16) && ke(et, D, H), q && Lt(S);
    }
    const be = p != null && It == null;
    (Yt && (ue = J && J.onVnodeUnmounted) || jt || be) && sn(() => {
      ue && Hn(ue, D, S), jt && Lr(S, null, D, "unmounted"), be && (S.el = null);
    }, H);
  }, Lt = (S) => {
    const { type: D, el: H, anchor: q, transition: G } = S;
    if (D === ze) {
      Ae(H, q);
      return;
    }
    if (D === ko) {
      L(S);
      return;
    }
    const K = () => {
      a(H), G && !G.persisted && G.afterLeave && G.afterLeave();
    };
    if (S.shapeFlag & 1 && G && !G.persisted) {
      const { leave: J, delayLeave: it } = G, et = () => J(H, K);
      it ? it(S.el, K, et) : et();
    } else
      K();
  }, Ae = (S, D) => {
    let H;
    for (; S !== D; )
      H = M(S), a(S), S = H;
    a(D);
  }, Oe = (S, D, H) => {
    const { bum: q, scope: G, job: K, subTree: J, um: it, m: et, a: Z } = S;
    Ju(et), Ju(Z), q && nc(q), G.stop(), K && (K.flags |= 8, Ct(J, S, D, H)), it && sn(it, D), sn(() => {
      S.isUnmounted = !0;
    }, D);
  }, ke = (S, D, H, q = !1, G = !1, K = 0) => {
    for (let J = K; J < S.length; J++)
      Ct(S[J], D, H, q, G);
  }, Ce = (S) => {
    if (S.shapeFlag & 6)
      return Ce(S.component.subTree);
    if (S.shapeFlag & 128)
      return S.suspense.next();
    const D = M(S.anchor || S.el), H = D && D[X0];
    return H ? M(H) : D;
  };
  let Ge = !1;
  const Fe = (S, D, H) => {
    let q;
    S == null ? D._vnode && (Ct(D._vnode, null, null, !0), q = D._vnode.component) : E(
      D._vnode || null,
      S,
      D,
      null,
      null,
      null,
      H
    ), D._vnode = S, Ge || (Ge = !0, zu(q), Ed(), Ge = !1);
  }, nn = {
    p: E,
    um: Ct,
    m: Dt,
    r: Lt,
    mt: nt,
    mc: Q,
    pc: B,
    pbc: z,
    n: Ce,
    o: t
  };
  return {
    render: Fe,
    hydrate: void 0,
    createApp: vm(Fe)
  };
}
function cc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Or({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Lm(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function nh(t, e, n = !1) {
  const i = t.children, a = e.children;
  if (Rt(i) && Rt(a))
    for (let s = 0; s < i.length; s++) {
      const u = i[s];
      let f = a[s];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[s] = sr(a[s]), f.el = u.el), !n && f.patchFlag !== -2 && nh(u, f)), f.type === ps && (f.patchFlag === -1 && (f = a[s] = sr(f)), f.el = u.el), f.type === Ar && !f.el && (f.el = u.el);
    }
}
function Om(t) {
  const e = t.slice(), n = [0];
  let i, a, s, u, f;
  const g = t.length;
  for (i = 0; i < g; i++) {
    const b = t[i];
    if (b !== 0) {
      if (a = n[n.length - 1], t[a] < b) {
        e[i] = a, n.push(i);
        continue;
      }
      for (s = 0, u = n.length - 1; s < u; )
        f = s + u >> 1, t[n[f]] < b ? s = f + 1 : u = f;
      b < t[n[s]] && (s > 0 && (e[i] = n[s - 1]), n[s] = i);
    }
  }
  for (s = n.length, u = n[s - 1]; s-- > 0; )
    n[s] = u, u = e[u];
  return n;
}
function rh(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : rh(e);
}
function Ju(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function ih(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? ih(e.subTree) : null;
}
const ah = (t) => t.__isSuspense;
function Fm(t, e) {
  e && e.pendingBranch ? Rt(t) ? e.effects.push(...t) : e.effects.push(t) : B0(t);
}
const ze = /* @__PURE__ */ Symbol.for("v-fgt"), ps = /* @__PURE__ */ Symbol.for("v-txt"), Ar = /* @__PURE__ */ Symbol.for("v-cmt"), ko = /* @__PURE__ */ Symbol.for("v-stc"), xa = [];
let hn = null;
function ye(t = !1) {
  xa.push(hn = t ? null : []);
}
function Vm() {
  xa.pop(), hn = xa[xa.length - 1] || null;
}
let Ta = 1;
function Qu(t, e = !1) {
  Ta += t, t < 0 && hn && e && (hn.hasOnce = !0);
}
function oh(t) {
  return t.dynamicChildren = Ta > 0 ? hn || Mi : null, Vm(), Ta > 0 && hn && hn.push(t), t;
}
function Le(t, e, n, i, a, s) {
  return oh(
    xe(
      t,
      e,
      n,
      i,
      a,
      s,
      !0
    )
  );
}
function Fi(t, e, n, i, a) {
  return oh(
    tn(
      t,
      e,
      n,
      i,
      a,
      !0
    )
  );
}
function sh(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function ra(t, e) {
  return t.type === e.type && t.key === e.key;
}
const ch = ({ key: t }) => t ?? null, Po = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Se(t) || /* @__PURE__ */ Ue(t) || Ht(t) ? { i: kn, r: t, k: e, f: !!n } : t : null);
function xe(t, e = null, n = null, i = 0, a = null, s = t === ze ? 0 : 1, u = !1, f = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && ch(e),
    ref: e && Po(e),
    scopeId: Dd,
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
    patchFlag: i,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: kn
  };
  return f ? (fl(g, n), s & 128 && t.normalize(g)) : n && (g.shapeFlag |= Se(n) ? 8 : 16), Ta > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  hn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && hn.push(g), g;
}
const tn = Hm;
function Hm(t, e = null, n = null, i = 0, a = null, s = !1) {
  if ((!t || t === jd) && (t = Ar), sh(t)) {
    const f = Ri(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && fl(f, n), Ta > 0 && !s && hn && (f.shapeFlag & 6 ? hn[hn.indexOf(t)] = f : hn.push(f)), f.patchFlag = -2, f;
  }
  if (Zm(t) && (t = t.__vccOpts), e) {
    e = $m(e);
    let { class: f, style: g } = e;
    f && !Se(f) && (e.class = ls(f)), te(g) && (/* @__PURE__ */ al(g) && !Rt(g) && (g = Be({}, g)), e.style = cs(g));
  }
  const u = Se(t) ? 1 : ah(t) ? 128 : Z0(t) ? 64 : te(t) ? 4 : Ht(t) ? 2 : 0;
  return xe(
    t,
    e,
    n,
    i,
    a,
    u,
    s,
    !0
  );
}
function $m(t) {
  return t ? /* @__PURE__ */ al(t) || Xd(t) ? Be({}, t) : t : null;
}
function Ri(t, e, n = !1, i = !1) {
  const { props: a, ref: s, patchFlag: u, children: f, transition: g } = t, b = e ? uh(a || {}, e) : a, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: b,
    key: b && ch(b),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Rt(s) ? s.concat(Po(e)) : [s, Po(e)] : Po(e)
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
    patchFlag: e && t.type !== ze ? u === -1 ? 16 : u | 16 : u,
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
  return g && i && cl(
    _,
    g.clone(_)
  ), _;
}
function zm(t = " ", e = 0) {
  return tn(ps, null, t, e);
}
function lh(t, e) {
  const n = tn(ko, null, t);
  return n.staticCount = e, n;
}
function Ao(t = "", e = !1) {
  return e ? (ye(), Fi(Ar, null, t)) : tn(Ar, null, t);
}
function Gn(t) {
  return t == null || typeof t == "boolean" ? tn(Ar) : Rt(t) ? tn(
    ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : sh(t) ? sr(t) : tn(ps, null, String(t));
}
function sr(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Ri(t);
}
function fl(t, e) {
  let n = 0;
  const { shapeFlag: i } = t;
  if (e == null)
    e = null;
  else if (Rt(e))
    n = 16;
  else if (typeof e == "object")
    if (i & 65) {
      const a = e.default;
      a && (a._c && (a._d = !1), fl(t, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = e._;
      !a && !Xd(e) ? e._ctx = kn : a === 3 && kn && (kn.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else Ht(e) ? (e = { default: e, _ctx: kn }, n = 32) : (e = String(e), i & 64 ? (n = 16, e = [zm(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function uh(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = t[n];
    for (const a in i)
      if (a === "class")
        e.class !== i.class && (e.class = ls([e.class, i.class]));
      else if (a === "style")
        e.style = cs([e.style, i.style]);
      else if (rs(a)) {
        const s = e[a], u = i[a];
        u && s !== u && !(Rt(s) && s.includes(u)) ? e[a] = s ? [].concat(s, u) : u : u == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !is(a) && (e[a] = u);
      } else a !== "" && (e[a] = i[a]);
  }
  return e;
}
function Hn(t, e, n, i = null) {
  Zn(t, e, 7, [
    n,
    i
  ]);
}
const jm = Gd();
let Um = 0;
function Bm(t, e, n) {
  const i = t.type, a = (e ? e.appContext : t.appContext) || jm, s = {
    uid: Um++,
    vnode: t,
    type: i,
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
    scope: new d0(
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
    propsOptions: Jd(i, a),
    emitsOptions: Kd(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ae,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: ae,
    data: ae,
    props: ae,
    attrs: ae,
    slots: ae,
    refs: ae,
    setupState: ae,
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
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = wm.bind(null, s), t.ce && t.ce(s), s;
}
let je = null;
const Gm = () => je || kn;
let jo, Rc;
{
  const t = ss(), e = (n, i) => {
    let a;
    return (a = t[n]) || (a = t[n] = []), a.push(i), (s) => {
      a.length > 1 ? a.forEach((u) => u(s)) : a[0](s);
    };
  };
  jo = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => je = n
  ), Rc = e(
    "__VUE_SSR_SETTERS__",
    (n) => Da = n
  );
}
const Va = (t) => {
  const e = je;
  return jo(t), t.scope.on(), () => {
    t.scope.off(), jo(e);
  };
}, tf = () => {
  je && je.scope.off(), jo(null);
};
function fh(t) {
  return t.vnode.shapeFlag & 4;
}
let Da = !1;
function Km(t, e = !1, n = !1) {
  e && Rc(e);
  const { props: i, children: a } = t.vnode, s = fh(t);
  Pm(t, i, s, e), Em(t, a, n || e);
  const u = s ? Wm(t, e) : void 0;
  return e && Rc(!1), u;
}
function Wm(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, dm);
  const { setup: i } = n;
  if (i) {
    lr();
    const a = t.setupContext = i.length > 1 ? Ym(t) : null, s = Va(t), u = Fa(
      i,
      t,
      0,
      [
        t.props,
        a
      ]
    ), f = ad(u);
    if (ur(), s(), (f || t.sp) && !_a(t) && Od(t), f) {
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
    dh(t);
}
function ef(t, e, n) {
  Ht(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : te(e) && (t.setupState = Pd(e)), dh(t);
}
function dh(t, e, n) {
  const i = t.type;
  t.render || (t.render = i.render || Yn);
  {
    const a = Va(t);
    lr();
    try {
      hm(t);
    } finally {
      ur(), a();
    }
  }
}
const qm = {
  get(t, e) {
    return $e(t, "get", ""), t[e];
  }
};
function Ym(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, qm),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function dl(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Pd(D0(t.exposed)), {
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
function Xm(t, e = !0) {
  return Ht(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Zm(t) {
  return Ht(t) && "__vccOpts" in t;
}
const Ii = (t, e) => /* @__PURE__ */ H0(t, e, Da), Jm = "3.5.32";
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
const hh = Lc ? (t) => Lc.createHTML(t) : (t) => t, Qm = "http://www.w3.org/2000/svg", t1 = "http://www.w3.org/1998/Math/MathML", or = typeof document < "u" ? document : null, rf = or && /* @__PURE__ */ or.createElement("template"), e1 = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, i) => {
    const a = e === "svg" ? or.createElementNS(Qm, t) : e === "mathml" ? or.createElementNS(t1, t) : n ? or.createElement(t, { is: n }) : or.createElement(t);
    return t === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (t) => or.createTextNode(t),
  createComment: (t) => or.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => or.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, i, a, s) {
    const u = n ? n.previousSibling : e.lastChild;
    if (a && (a === s || a.nextSibling))
      for (; e.insertBefore(a.cloneNode(!0), n), !(a === s || !(a = a.nextSibling)); )
        ;
    else {
      rf.innerHTML = hh(
        i === "svg" ? `<svg>${t}</svg>` : i === "mathml" ? `<math>${t}</math>` : t
      );
      const f = rf.content;
      if (i === "svg" || i === "mathml") {
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
}, n1 = /* @__PURE__ */ Symbol("_vtc");
function r1(t, e, n) {
  const i = t[n1];
  i && (e = (e ? [e, ...i] : [...i]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const af = /* @__PURE__ */ Symbol("_vod"), i1 = /* @__PURE__ */ Symbol("_vsh"), a1 = /* @__PURE__ */ Symbol(""), o1 = /(?:^|;)\s*display\s*:/;
function s1(t, e, n) {
  const i = t.style, a = Se(n);
  let s = !1;
  if (n && !a) {
    if (e)
      if (Se(e))
        for (const u of e.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && Co(i, f, "");
        }
      else
        for (const u in e)
          n[u] == null && Co(i, u, "");
    for (const u in n)
      u === "display" && (s = !0), Co(i, u, n[u]);
  } else if (a) {
    if (e !== n) {
      const u = i[a1];
      u && (n += ";" + u), i.cssText = n, s = o1.test(n);
    }
  } else e && t.removeAttribute("style");
  af in t && (t[af] = s ? i.display : "", t[i1] && (i.display = "none"));
}
const of = /\s*!important$/;
function Co(t, e, n) {
  if (Rt(n))
    n.forEach((i) => Co(t, e, i));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const i = c1(t, e);
    of.test(n) ? t.setProperty(
      Xr(i),
      n.replace(of, ""),
      "important"
    ) : t[i] = n;
  }
}
const sf = ["Webkit", "Moz", "ms"], lc = {};
function c1(t, e) {
  const n = lc[e];
  if (n)
    return n;
  let i = en(e);
  if (i !== "filter" && i in t)
    return lc[e] = i;
  i = os(i);
  for (let a = 0; a < sf.length; a++) {
    const s = sf[a] + i;
    if (s in t)
      return lc[e] = s;
  }
  return e;
}
const cf = "http://www.w3.org/1999/xlink";
function lf(t, e, n, i, a, s = u0(e)) {
  i && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(cf, e.slice(6, e.length)) : t.setAttributeNS(cf, e, n) : n == null || s && !ld(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    s ? "" : Xn(n) ? String(n) : n
  );
}
function uf(t, e, n, i, a) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? hh(n) : n);
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
    f === "boolean" ? n = ld(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(a || e);
}
function l1(t, e, n, i) {
  t.addEventListener(e, n, i);
}
function u1(t, e, n, i) {
  t.removeEventListener(e, n, i);
}
const ff = /* @__PURE__ */ Symbol("_vei");
function f1(t, e, n, i, a = null) {
  const s = t[ff] || (t[ff] = {}), u = s[e];
  if (i && u)
    u.value = i;
  else {
    const [f, g] = d1(e);
    if (i) {
      const b = s[e] = g1(
        i,
        a
      );
      l1(t, f, b, g);
    } else u && (u1(t, f, u, g), s[e] = void 0);
  }
}
const df = /(?:Once|Passive|Capture)$/;
function d1(t) {
  let e;
  if (df.test(t)) {
    e = {};
    let i;
    for (; i = t.match(df); )
      t = t.slice(0, t.length - i[0].length), e[i[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Xr(t.slice(2)), e];
}
let uc = 0;
const h1 = /* @__PURE__ */ Promise.resolve(), p1 = () => uc || (h1.then(() => uc = 0), uc = Date.now());
function g1(t, e) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Zn(
      m1(i, n.value),
      e,
      5,
      [i]
    );
  };
  return n.value = t, n.attached = p1(), n;
}
function m1(t, e) {
  if (Rt(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map(
      (i) => (a) => !a._stopped && i && i(a)
    );
  } else
    return e;
}
const hf = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, y1 = (t, e, n, i, a, s) => {
  const u = a === "svg";
  e === "class" ? r1(t, i, u) : e === "style" ? s1(t, n, i) : rs(e) ? is(e) || f1(t, e, n, i, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : b1(t, e, i, u)) ? (uf(t, e, i), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && lf(t, e, i, u, s, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (v1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !Se(i))) ? uf(t, en(e), i, s, e) : (e === "true-value" ? t._trueValue = i : e === "false-value" && (t._falseValue = i), lf(t, e, i, u));
};
function b1(t, e, n, i) {
  if (i)
    return !!(e === "innerHTML" || e === "textContent" || e in t && hf(e) && Ht(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const a = t.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return hf(e) && Se(n) ? !1 : e in t;
}
function v1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const i = en(e);
  return Array.isArray(n) ? n.some((a) => en(a) === i) : Object.keys(n).some((a) => en(a) === i);
}
const _1 = ["ctrl", "shift", "alt", "meta"], w1 = {
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
  exact: (t, e) => _1.some((n) => t[`${n}Key`] && !e.includes(n))
}, x1 = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), i = e.join(".");
  return n[i] || (n[i] = ((a, ...s) => {
    for (let u = 0; u < e.length; u++) {
      const f = w1[e[u]];
      if (f && f(a, e)) return;
    }
    return t(a, ...s);
  }));
}, S1 = /* @__PURE__ */ Be({ patchProp: y1 }, e1);
let pf;
function N1() {
  return pf || (pf = Dm(S1));
}
const M1 = ((...t) => {
  const e = N1().createApp(...t), { mount: n } = e;
  return e.mount = (i) => {
    const a = P1(i);
    if (!a) return;
    const s = e._component;
    !Ht(s) && !s.render && !s.template && (s.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, k1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, e;
});
function k1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function P1(t) {
  return Se(t) ? document.querySelector(t) : t;
}
const me = Math.PI / 180, ph = Math.PI * 2, A1 = 2048;
function ne(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Cr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Uo(t, e) {
  return Cr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Ni(t, e) {
  return Cr(t.x * e, t.y * e, t.z * e);
}
function Io(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function gf(t, e) {
  return Cr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function da(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Cr(t.x / e, t.y / e, t.z / e);
}
function C1(t, e) {
  const n = Number(t || 0) * me, i = Number(e || 0) * me, a = Math.cos(i);
  return Cr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Eo(t, e, n = 0) {
  const i = C1(t, e);
  let a = Cr(0, 1, 0);
  Math.abs(Io(i, a)) > 0.999 && (a = Cr(0, 0, 1));
  let s = da(gf(a, i)), u = da(gf(i, s));
  const f = Number(n || 0) * me, g = Math.cos(f), b = Math.sin(f), _ = Uo(Ni(s, g), Ni(u, b)), d = Uo(Ni(s, -b), Ni(u, g));
  return s = da(_), u = da(d), { fwd: i, right: s, up: u };
}
function I1(t, e) {
  const n = (Number(t || 0) - 0.5) * ph, i = (0.5 - Number(e || 0)) * Math.PI, a = Math.cos(i);
  return Cr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function mf(t, e, n = 1) {
  const i = Math.max(1, Math.round(Number(t || 1))), a = Math.max(1, Math.round(Number(e || 1))), s = Math.max(1, Number(n || 1)), u = Math.max(512, A1), f = Math.min(1, u / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: s,
    renderScale: f,
    width: Math.max(1, Math.round(i * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function yf(t, e, n) {
  const i = t.createShader(e);
  if (t.shaderSource(i, n), t.compileShader(i), !t.getShaderParameter(i, t.COMPILE_STATUS)) {
    const a = t.getShaderInfoLog(i) || "shader compile failed";
    throw t.deleteShader(i), new Error(a);
  }
  return i;
}
function fc(t, e, n) {
  const i = yf(t, t.VERTEX_SHADER, e);
  let a;
  try {
    a = yf(t, t.FRAGMENT_SHADER, n);
  } catch (u) {
    throw t.deleteShader(i), u;
  }
  const s = t.createProgram();
  if (t.attachShader(s, i), t.attachShader(s, a), t.linkProgram(s), t.deleteShader(i), t.deleteShader(a), !t.getProgramParameter(s, t.LINK_STATUS)) {
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
}`, E1 = `#version 300 es
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
}`, T1 = `#version 300 es
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
}`, D1 = `#version 300 es
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
  const i = Number(t.mode === "cutout" ? t.hFovDeg || 90 : t.fovDeg || 100), a = Number(t.mode === "cutout" ? t.vFovDeg || 60 : 2 * Math.atan(Math.tan(ne(i, 1, 179) * me * 0.5) * (n / Math.max(e, 1))) / me);
  return {
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.mode === "cutout" && t.rollDeg || 0),
    hFovDeg: ne(i, 1, 179),
    vFovDeg: ne(a, 0.1, 179)
  };
}
function R1(t) {
  const e = Eo(
    Number(t.yawDeg || 0),
    Number(t.pitchDeg || 0),
    Number(t.rollDeg || 0)
  );
  return {
    right: e.right,
    up: e.up,
    fwd: e.fwd,
    tanX: Math.tan(ne(Number(t.hFovDeg || 30), 0.1, 179) * 0.5 * me),
    tanY: Math.tan(ne(Number(t.vFovDeg || 30), 0.1, 179) * 0.5 * me),
    crop: t.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: ne(Number(t.opacity ?? 1), 0, 1)
  };
}
function L1(t = {}) {
  const e = (t == null ? void 0 : t.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, s = null, u = null, f = null, g = null, b = null, _ = null, d = null, M = null, P = !1, T = mf(1, 1, 1), E = null, C = null, V = null, A = null, F = null;
  const L = /* @__PURE__ */ new Map();
  let Y = {
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, I = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  };
  function ct(S = null, D = null) {
    const H = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, H), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, S ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, D ?? n.CLAMP_TO_EDGE), H;
  }
  function Q() {
    if (P) return !0;
    try {
      return n = e.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = fc(n, dc, E1), a = fc(n, dc, T1), s = fc(n, dc, D1), E = {
        mode: n.getUniformLocation(i, "u_mode"),
        yaw: n.getUniformLocation(i, "u_yaw"),
        pitch: n.getUniformLocation(i, "u_pitch"),
        roll: n.getUniformLocation(i, "u_roll"),
        hFov: n.getUniformLocation(i, "u_hfov"),
        vFov: n.getUniformLocation(i, "u_vfov"),
        viewport: n.getUniformLocation(i, "u_viewport"),
        opacity: n.getUniformLocation(i, "u_opacity"),
        coverage: n.getUniformLocation(i, "u_coverage"),
        background: n.getUniformLocation(i, "u_background")
      }, C = {
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
      }, V = {
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
      ]), n.STATIC_DRAW), f = ct(n.REPEAT, n.CLAMP_TO_EDGE), g = ct(n.REPEAT, n.CLAMP_TO_EDGE), b = ct(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), P = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function xt() {
    var S;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), g && n.deleteTexture(g), b && n.deleteTexture(b), L.forEach((D) => {
          dt(D);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), s && n.deleteProgram(s), (S = n.getExtension("WEBGL_lose_context")) == null || S.loseContext();
      } catch {
      }
      n = null, i = null, a = null, s = null, u = null, f = null, g = null, b = null, L.clear(), _ = null, d = null, M = null, I = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, A = null, F = null, P = !1;
    }
  }
  function z(S, D, H = 1) {
    T = mf(S, D, H), (e.width !== T.width || e.height !== T.height) && (e.width = T.width, e.height = T.height);
  }
  function ft(S) {
    S === "background" ? _ = null : S === "paint" ? d = null : M = null, I[S] && (I[S].width = 0, I[S].height = 0);
  }
  function St(S, D, H = [], q = { width: 0, height: 0 }, G = !1) {
    if (!n || !S || !D) return !1;
    const K = Number(D.width || D.videoWidth || D.naturalWidth || 0), J = Number(D.height || D.videoHeight || D.naturalHeight || 0);
    if (!(K > 1) || !(J > 1)) return !1;
    const it = Array.isArray(H) ? H.filter((et) => et && et.w > 0 && et.h > 0) : [];
    if (!it.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, S), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G ? 1 : 0), q.width !== K || q.height !== J)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, D), q.width = K, q.height = J, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (A || (A = document.createElement("canvas"), F = A.getContext("2d")), !F)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const et of it) {
      const Z = Math.max(0, Math.floor(Number(et.x || 0))), yt = Math.max(0, Math.floor(Number(et.y || 0))), rt = Math.min(K - Z, Math.ceil(Number(et.w || 0))), _t = Math.min(J - yt, Math.ceil(Number(et.h || 0)));
      if (!(rt <= 0 || _t <= 0)) {
        if (A.width !== rt || A.height !== _t) {
          if (A.width = rt, A.height = _t, F = A.getContext("2d"), !F)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          F.clearRect(0, 0, rt, _t);
        F.drawImage(D, Z, yt, rt, _t, 0, 0, rt, _t), n.texSubImage2D(n.TEXTURE_2D, 0, Z, yt, n.RGBA, n.UNSIGNED_BYTE, A);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function tt(S, D, H, q, G = null, K = !1) {
    if (!Q()) return !1;
    if (!H)
      return ft(S), !1;
    const J = String(q ?? ""), it = S === "background" ? _ : S === "paint" ? d : M, et = I[S], Z = Number(H.width || H.videoWidth || H.naturalWidth || 0), yt = Number(H.height || H.videoHeight || H.naturalHeight || 0), rt = et.width !== Z || et.height !== yt;
    if (it === J && !rt && !(Array.isArray(G) && G.length)) return !0;
    if (!(Z > 0) || !(yt > 0))
      return ft(S), !1;
    if (n.bindTexture(n.TEXTURE_2D, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, K ? 1 : 0), !(Array.isArray(G) && G.length ? St(D, H, G, et, K) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, H), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ft(S), !1;
      et.width = Z, et.height = yt;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), S === "background" ? _ = J : S === "paint" ? d = J : M = J, !0;
  }
  function nt(S, D) {
    return tt("background", f, S, D, null, !0);
  }
  function X(S, D, H = null) {
    return tt("paint", g, S, D, H, !0);
  }
  function at(S, D, H = null) {
    return tt("mask", b, S, D, H, !0);
  }
  function dt(S) {
    S != null && S.texture && n && n.deleteTexture(S.texture);
  }
  function B(S) {
    if (!n || !(S != null && S.assetId) || !(S != null && S.source)) return null;
    const D = String(S.assetId), H = String(S.revision ?? ""), q = S.source, G = Number(q.width || q.naturalWidth || q.videoWidth || 0), K = Number(q.height || q.naturalHeight || q.videoHeight || 0);
    if (G <= 0 || K <= 0) return null;
    let J = L.get(D);
    if (J || (J = {
      texture: ct(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, L.set(D, J)), J.revision !== H || J.width !== G || J.height !== K) {
      if (n.bindTexture(n.TEXTURE_2D, J.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, q), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), J.revision = H, J.width = G, J.height = K;
    }
    return J.texture;
  }
  function ot(S = []) {
    if (!Q()) return !1;
    const D = /* @__PURE__ */ new Set();
    return S.forEach((H) => {
      !(H != null && H.assetId) || !(H != null && H.source) || (D.add(String(H.assetId)), B(H));
    }), L.forEach((H, q) => {
      D.has(q) || (dt(H), L.delete(q));
    }), !0;
  }
  function Nt() {
    return Q() ? (n.viewport(0, 0, e.width, e.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Dt(S) {
    n.useProgram(S), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function Ct(S, D = {}) {
    if (!_) return null;
    n.disable(n.BLEND), Dt(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(E.background, 0), n.uniform2f(E.viewport, Math.max(1, T.width), Math.max(1, T.height)), n.uniform1i(E.mode, (S == null ? void 0 : S.mode) === "unwrap" ? 0 : (S == null ? void 0 : S.mode) === "cutout" ? 2 : 1);
    const H = ia(S, T.width, T.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(E.yaw, Number(H.yawDeg || 0) * me), n.uniform1f(E.pitch, Number(H.pitchDeg || 0) * me), n.uniform1f(E.roll, Number(H.rollDeg || 0) * me), n.uniform1f(E.hFov, ne(Number(H.hFovDeg || 90), 0.1, 179) * me), n.uniform1f(E.vFov, ne(Number(H.vFovDeg || 60), 0.1, 179) * me), n.uniform1f(E.opacity, ne(Number(D.backgroundOpacity ?? 1), 0, 1));
    const q = Number((S == null ? void 0 : S.coverageDeg) || (D == null ? void 0 : D.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(E.coverage, q), n.drawArrays(n.TRIANGLES, 0, 6), e;
  }
  function Lt(S, D = {}) {
    if (d == null && M == null) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Dt(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i(C.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, b), n.uniform1i(C.mask, 1), n.uniform1i(C.mode, (S == null ? void 0 : S.mode) === "unwrap" ? 0 : (S == null ? void 0 : S.mode) === "cutout" ? 2 : 1);
    const H = ia(S, T.width, T.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(C.yaw, Number(H.yawDeg || 0) * me), n.uniform1f(C.pitch, Number(H.pitchDeg || 0) * me), n.uniform1f(C.roll, Number(H.rollDeg || 0) * me), n.uniform1f(C.hFov, ne(Number(H.hFovDeg || 90), 0.1, 179) * me), n.uniform1f(C.vFov, ne(Number(H.vFovDeg || 60), 0.1, 179) * me), n.uniform1f(C.paintOpacity, ne(Number(D.paintOpacity ?? 1), 0, 1)), n.uniform1f(C.maskOpacity, ne(Number(D.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(C.hasPaint, d != null ? 1 : 0), n.uniform1i(C.hasMask, M != null ? 1 : 0), n.uniform1i(C.showMaskTint, D.showMaskTint === !1 ? 0 : 1), n.uniform3f(C.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), e;
  }
  function Ae(S, D, H) {
    var et;
    if (!((et = S == null ? void 0 : S.stickers) != null && et.length) || !(D != null && D.length)) return;
    const q = (H == null ? void 0 : H.mode) === "unwrap" ? 0 : (H == null ? void 0 : H.mode) === "cutout" ? 2 : 1, G = ia(H, T.width, T.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, K = Eo(G.yawDeg, G.pitchDeg, G.rollDeg), J = /* @__PURE__ */ new Map();
    D.forEach((Z) => {
      const yt = B(Z);
      yt && J.set(String(Z.assetId || ""), yt);
    }), n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Dt(s), n.uniform1i(V.texture, 0), n.uniform1i(V.mode, q), n.uniform3f(V.viewRight, K.right.x, K.right.y, K.right.z), n.uniform3f(V.viewUp, K.up.x, K.up.y, K.up.z), n.uniform3f(V.viewFwd, K.fwd.x, K.fwd.y, K.fwd.z), n.uniform1f(V.viewHfov, ne(Number(G.hFovDeg || 90), 0.1, 179) * me), n.uniform1f(V.viewVfov, ne(Number(G.vFovDeg || 60), 0.1, 179) * me), [...S.stickers].sort((Z, yt) => Number((Z == null ? void 0 : Z.zIndex) || 0) - Number((yt == null ? void 0 : yt.zIndex) || 0)).forEach((Z) => {
      const yt = J.get(String((Z == null ? void 0 : Z.assetId) || ""));
      if (!yt) return;
      const rt = R1(Z), _t = rt.crop;
      n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, yt), n.uniform3f(V.stickerRight, rt.right.x, rt.right.y, rt.right.z), n.uniform3f(V.stickerUp, rt.up.x, rt.up.y, rt.up.z), n.uniform3f(V.stickerFwd, rt.fwd.x, rt.fwd.y, rt.fwd.z), n.uniform1f(V.stickerTanX, Math.max(1e-6, rt.tanX)), n.uniform1f(V.stickerTanY, Math.max(1e-6, rt.tanY)), n.uniform4f(
        V.crop,
        ne(Number(_t.x0 ?? 0), 0, 1),
        ne(Number(_t.y0 ?? 0), 0, 1),
        ne(Number(_t.x1 ?? 1), 0, 1),
        ne(Number(_t.y1 ?? 1), 0, 1)
      ), n.uniform1f(V.opacity, rt.opacity), n.drawArrays(n.TRIANGLES, 0, 6);
    }), n.disable(n.BLEND);
  }
  function Oe(S) {
    return !Nt() || !_ ? null : (Ct({
      mode: "panorama",
      yawDeg: (S == null ? void 0 : S.yawDeg) || 0,
      pitchDeg: (S == null ? void 0 : S.pitchDeg) || 0,
      fovDeg: (S == null ? void 0 : S.fovDeg) || 100
    }, S), e);
  }
  function ke(S) {
    return !Nt() || !_ ? null : (Ct({ mode: "unwrap" }, S), e);
  }
  function Ce(S) {
    return !Nt() || !_ ? null : (Ct({
      mode: "cutout",
      yawDeg: (S == null ? void 0 : S.yawDeg) || 0,
      pitchDeg: (S == null ? void 0 : S.pitchDeg) || 0,
      rollDeg: (S == null ? void 0 : S.rollDeg) || 0,
      hFovDeg: (S == null ? void 0 : S.hFovDeg) || 90,
      vFovDeg: (S == null ? void 0 : S.vFovDeg) || 60
    }, S), e);
  }
  function Ge(S = {}) {
    if (!Q() || (z(S.width, S.height, S.dpr || 1), !Nt())) return null;
    const D = Object.prototype.hasOwnProperty.call(S, "backgroundSource"), H = Object.prototype.hasOwnProperty.call(S, "paintSource"), q = Object.prototype.hasOwnProperty.call(S, "maskSource"), G = Object.prototype.hasOwnProperty.call(S, "textures"), K = Object.prototype.hasOwnProperty.call(S, "scene");
    return D && nt(S.backgroundSource, S.backgroundRevision ?? ""), H && X(S.paintSource, S.paintRevision ?? ""), q && at(S.maskSource, S.maskRevision ?? ""), G && (ot(S.textures || []), Y.textures = S.textures || []), K && (Y.scene = S.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(S, "backgroundOpacity") && (Y.backgroundOpacity = Number(S.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(S, "showMaskTint") && (Y.showMaskTint = S.showMaskTint === !0), Object.prototype.hasOwnProperty.call(S, "coverageDeg") && (Y.coverageDeg = Number(S.coverageDeg || 360) === 180 ? 180 : 360), _ && Ct(S.view, {
      ...S,
      backgroundOpacity: Number(S.backgroundOpacity ?? Y.backgroundOpacity ?? 1),
      coverageDeg: Number(S.coverageDeg || Y.coverageDeg || 360) === 180 ? 180 : 360
    }), Lt(S.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }, {
      ...Y,
      ...S,
      showMaskTint: S.showMaskTint ?? Y.showMaskTint ?? !1
    }), Ae(
      Y.scene || { stickers: [] },
      Y.textures || [],
      S.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), e;
  }
  function Fe(S = {}) {
    return Q() ? !!Ge({
      ...S,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(S.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(e.width || 1),
      height: Number(e.height || 1),
      dpr: 1
    }) : !1;
  }
  function nn(S, D, H) {
    const q = Math.max(1, Number((S == null ? void 0 : S.viewportWidth) || T.sourceWidth || T.width || 1)), G = Math.max(1, Number((S == null ? void 0 : S.viewportHeight) || T.sourceHeight || T.height || 1)), K = Number(D), J = Number(H);
    if (!Number.isFinite(K) || !Number.isFinite(J)) return null;
    if ((S == null ? void 0 : S.mode) === "unwrap")
      return { u: (K / q % 1 + 1) % 1, v: ne(J / G, 0, 1) };
    const it = ia(S, q, G);
    if (!it) return null;
    const et = Eo(it.yawDeg, it.pitchDeg, it.rollDeg), Z = (K - q * 0.5) / (q * 0.5) * Math.tan(ne(it.hFovDeg, 1, 179) * me * 0.5), yt = (G * 0.5 - J) / (G * 0.5) * Math.tan(ne(it.vFovDeg, 0.1, 179) * me * 0.5), rt = da(Uo(Uo(Ni(et.right, Z), Ni(et.up, yt)), et.fwd));
    return {
      u: (Math.atan2(rt.x, rt.z) / ph + 0.5 + 1) % 1,
      v: ne(0.5 - Math.asin(ne(rt.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function Jn(S, D, H) {
    const q = Math.max(1, Number((S == null ? void 0 : S.viewportWidth) || T.sourceWidth || T.width || 1)), G = Math.max(1, Number((S == null ? void 0 : S.viewportHeight) || T.sourceHeight || T.height || 1));
    if ((S == null ? void 0 : S.mode) === "unwrap")
      return {
        x: (Number(D || 0) % 1 + 1) % 1 * q,
        y: ne(Number(H || 0), 0, 1) * G,
        visible: !0
      };
    const K = ia(S, q, G);
    if (!K)
      return { x: q * 0.5, y: G * 0.5, visible: !1 };
    const J = Eo(K.yawDeg, K.pitchDeg, K.rollDeg), it = I1(D, H), et = Io(it, J.right), Z = Io(it, J.up), yt = Io(it, J.fwd);
    if (yt <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const rt = q * 0.5 + et / yt * (q * 0.5 / Math.tan(ne(K.hFovDeg, 1, 179) * me * 0.5)), _t = G * 0.5 - Z / yt * (G * 0.5 / Math.tan(ne(K.vFovDeg, 0.1, 179) * me * 0.5));
    return { x: rt, y: _t, visible: rt >= 0 && rt <= q && _t >= 0 && _t <= G };
  }
  return {
    init: Q,
    dispose: xt,
    setViewport: z,
    setBackgroundErp: nt,
    setPaintErp: X,
    setMaskErp: at,
    renderPanorama: Oe,
    renderUnwrap: ke,
    renderCutout: Ce,
    renderScene: Ge,
    syncState: Fe,
    screenToErpUv: nn,
    erpUvToScreen: Jn,
    getCanvas() {
      return e;
    },
    isSupported() {
      return Q();
    },
    getViewport() {
      return { ...T };
    }
  };
}
function bf(t, e = 1) {
  const n = Math.round(Number(t || e));
  return Math.max(1, n);
}
function O1() {
  const t = /* @__PURE__ */ new Map();
  function e(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, g) {
    const b = e(u);
    let _ = t.get(b) || null;
    if (!_) {
      const P = document.createElement("canvas"), T = P.getContext("2d");
      if (!T) return null;
      _ = {
        id: b,
        canvas: P,
        ctx: T,
        width: 0,
        height: 0
      }, t.set(b, _);
    }
    const d = bf(f), M = bf(g);
    return _.width !== d && (_.canvas.width = d, _.width = d), _.height !== M && (_.canvas.height = M, _.height = M), _;
  }
  function i(u) {
    return t.get(e(u)) || null;
  }
  function a(u) {
    const f = i(u);
    f && f.ctx.clearRect(0, 0, f.canvas.width, f.canvas.height);
  }
  function s() {
    t.clear();
  }
  return {
    ensureTarget: n,
    getTarget: i,
    clearTarget: a,
    dispose: s
  };
}
const F1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), V1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function gh(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function H1(t, e) {
  return t === "paint" || t === "mask" || t === "raster" ? !1 : e !== !1;
}
function $1(t = {}) {
  const e = V1.has(String((t == null ? void 0 : t.type) || "")) ? String(t.type) : "erp_image", n = Number((t == null ? void 0 : t.opacity) ?? 1);
  return {
    type: e,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    coverageDeg: Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? gh(n, 0, 1) : 1,
    visible: (t == null ? void 0 : t.visible) !== !1
  };
}
function z1(t = {}) {
  const e = String((t == null ? void 0 : t.type) || "");
  if (!F1.has(e)) return null;
  const n = Number((t == null ? void 0 : t.opacity) ?? 1), i = Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0);
  return {
    id: String((t == null ? void 0 : t.id) || ""),
    type: e,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    visible: (t == null ? void 0 : t.visible) !== !1,
    opacity: Number.isFinite(n) ? gh(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: H1(e, t == null ? void 0 : t.coverageAware),
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  };
}
function j1(t = {}) {
  return {
    objects: (Array.isArray(t == null ? void 0 : t.objects) ? t.objects : []).map((i) => z1(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const s = Number((i == null ? void 0 : i.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return s !== u ? s - u : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (t == null ? void 0 : t.selectedId) ?? null,
    hoveredId: (t == null ? void 0 : t.hoveredId) ?? null
  };
}
function hl(t = {}) {
  return {
    stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
    background: $1((t == null ? void 0 : t.background) || {}),
    objectPass: j1((t == null ? void 0 : t.objectPass) || {}),
    overlay: t != null && t.overlay && typeof t.overlay == "object" ? { ...t.overlay } : {}
  };
}
function U1(t = {}) {
  var a, s, u, f, g, b, _, d;
  if (t != null && t.background || t != null && t.objectPass || t != null && t.overlay) {
    const M = hl(t), P = Array.isArray((a = M.objectPass) == null ? void 0 : a.objects) ? M.objectPass.objects : [], T = {
      stickers: P.filter((A) => A.type === "sticker").map((A) => {
        var F, L, Y, I, ct, Q, xt, z, ft, St, tt, nt, X;
        return {
          id: A.id,
          assetId: String(((F = A == null ? void 0 : A.params) == null ? void 0 : F.assetId) || ((L = A == null ? void 0 : A.params) == null ? void 0 : L.asset_id) || (A == null ? void 0 : A.id) || ""),
          yawDeg: Number(((Y = A == null ? void 0 : A.transform) == null ? void 0 : Y.yawDeg) ?? ((I = A == null ? void 0 : A.params) == null ? void 0 : I.yawDeg) ?? 0),
          pitchDeg: Number(((ct = A == null ? void 0 : A.transform) == null ? void 0 : ct.pitchDeg) ?? ((Q = A == null ? void 0 : A.params) == null ? void 0 : Q.pitchDeg) ?? 0),
          rollDeg: Number(((xt = A == null ? void 0 : A.transform) == null ? void 0 : xt.rollDeg) ?? ((z = A == null ? void 0 : A.params) == null ? void 0 : z.rollDeg) ?? 0),
          hFovDeg: Number(((ft = A == null ? void 0 : A.transform) == null ? void 0 : ft.hFovDeg) ?? ((St = A == null ? void 0 : A.params) == null ? void 0 : St.hFovDeg) ?? 30),
          vFovDeg: Number(((tt = A == null ? void 0 : A.transform) == null ? void 0 : tt.vFovDeg) ?? ((nt = A == null ? void 0 : A.params) == null ? void 0 : nt.vFovDeg) ?? 30),
          crop: ((X = A == null ? void 0 : A.params) == null ? void 0 : X.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((A == null ? void 0 : A.opacity) ?? 1),
          visible: (A == null ? void 0 : A.visible) !== !1,
          zIndex: Number((A == null ? void 0 : A.zIndex) ?? 0)
        };
      }),
      selectedId: ((s = M.objectPass) == null ? void 0 : s.selectedId) ?? null,
      hoveredId: ((u = M.objectPass) == null ? void 0 : u.hoveredId) ?? null
    }, E = P.filter((A) => A.type === "sticker").map((A) => {
      var F, L;
      return {
        assetId: String(((F = A == null ? void 0 : A.params) == null ? void 0 : F.assetId) || ((L = A == null ? void 0 : A.params) == null ? void 0 : L.asset_id) || (A == null ? void 0 : A.id) || ""),
        source: A.source || null,
        revision: String((A == null ? void 0 : A.revision) || "")
      };
    }).filter((A) => A.assetId && A.source), C = P.find((A) => A.type === "paint") || null, V = P.find((A) => A.type === "mask") || null;
    return {
      stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
      backgroundSource: ((f = M.background) == null ? void 0 : f.source) || null,
      backgroundRevision: String(((g = M.background) == null ? void 0 : g.revision) || ""),
      coverageDeg: Number(((b = M.background) == null ? void 0 : b.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (C == null ? void 0 : C.source) || null,
      paintRevision: String((C == null ? void 0 : C.revision) || ""),
      maskSource: (V == null ? void 0 : V.source) || null,
      maskRevision: String((V == null ? void 0 : V.revision) || ""),
      textures: E,
      scene: T,
      backgroundOpacity: Number(((_ = M.background) == null ? void 0 : _.opacity) ?? 1),
      showMaskTint: ((d = t == null ? void 0 : t.overlay) == null ? void 0 : d.showMaskTint) === !0
    };
  }
  const e = t.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t.textures) ? t.textures : [], i = t.layers || {};
  return {
    stateRevision: String(t.stateRevision || ""),
    backgroundSource: t.backgroundSource || null,
    backgroundRevision: String(t.backgroundRevision || ""),
    coverageDeg: Number(t.coverageDeg || 360) === 180 ? 180 : 360,
    paintSource: i.paintSource || null,
    paintRevision: String(i.paintRevision || ""),
    maskSource: i.maskSource || null,
    maskRevision: String(i.maskRevision || ""),
    textures: n,
    scene: e,
    backgroundOpacity: Number(t.backgroundOpacity ?? 1),
    showMaskTint: t.showMaskTint === !0
  };
}
function B1(t) {
  let e = null;
  function n(s = {}) {
    const u = U1(s);
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
  function i() {
    return e;
  }
  function a() {
    e = null;
  }
  return {
    sync: n,
    snapshot: i,
    clear: a
  };
}
function Li(t = {}) {
  const e = typeof (t == null ? void 0 : t.rendererFactory) == "function" ? t.rendererFactory : (C) => L1(C), n = typeof (t == null ? void 0 : t.targetPoolFactory) == "function" ? t.targetPoolFactory : () => O1(), i = typeof (t == null ? void 0 : t.stateControllerFactory) == "function" ? t.stateControllerFactory : (C) => B1(C), a = e(t), s = (t == null ? void 0 : t.targetCanvas) || null, u = n();
  let f = null;
  const g = i({
    syncState(C = {}) {
      if (typeof a.syncState == "function") {
        const V = { ...C }, A = a.syncState(V);
        return A && (f = V, A);
      }
      return f = { ...C }, !0;
    }
  });
  function b(C = {}) {
    return g.sync(C);
  }
  function _(C = {}, V = {}) {
    return f ? a.renderScene({
      ...f,
      view: C,
      width: V.width,
      height: V.height,
      dpr: V.dpr,
      backgroundOpacity: V.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: V.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function d(C, V, A = {}, F = {}) {
    if (!V) return !1;
    const L = _(A, {
      ...F,
      width: V.w,
      height: V.h
    });
    return L ? C ? (C.canvas && L === C.canvas || C.drawImage(L, V.x, V.y, V.w, V.h), !0) : !!s && L === s : !1;
  }
  function M(C, V = {}, A = {}) {
    const F = Number(A.width || 0), L = Number(A.height || 0);
    if (!(F > 0) || !(L > 0)) return null;
    const Y = u.ensureTarget(C, F, L);
    if (!Y) return null;
    const I = _(V, {
      ...A,
      width: F,
      height: L
    });
    return I ? (Y.ctx.clearRect(0, 0, Y.canvas.width, Y.canvas.height), Y.ctx.drawImage(I, 0, 0, Y.canvas.width, Y.canvas.height), Y.canvas) : null;
  }
  function P(C) {
    u.clearTarget(C);
  }
  function T() {
    var C;
    u.dispose(), (C = a.dispose) == null || C.call(a), f = null;
  }
  function E() {
    f = null, g.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: b,
    renderView: _,
    renderToContext: d,
    renderToTarget: M,
    clearTarget: P,
    snapshotState: g.snapshot,
    clearState: E,
    dispose: T
  };
}
function G1(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function pl(t = {}, e = "paint") {
  const n = String((t == null ? void 0 : t.type) || e), i = Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0), a = Number((t == null ? void 0 : t.opacity) ?? 1);
  return {
    id: String((t == null ? void 0 : t.id) || `${n}_layer`),
    type: n,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? G1(a, 0, 1) : 1,
    visible: (t == null ? void 0 : t.visible) !== !1,
    coverageAware: !1,
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  };
}
function K1(t, e, n = {}) {
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
function W1(t, e, n = {}) {
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
function q1(t, e, n = {}) {
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
function Y1(t = {}) {
  const e = [], n = K1(t == null ? void 0 : t.paintSource, t == null ? void 0 : t.paintRevision, t == null ? void 0 : t.paintOptions), i = W1(t == null ? void 0 : t.maskSource, t == null ? void 0 : t.maskRevision, t == null ? void 0 : t.maskOptions), a = Array.isArray(t == null ? void 0 : t.rasterEntries) ? t.rasterEntries : [];
  return n && e.push(n), i && e.push(i), a.forEach((s, u) => {
    const f = q1(
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
function mh(t, e) {
  const n = new Map(
    (Array.isArray(e) ? e : []).map((i) => [String((i == null ? void 0 : i.assetId) || ""), i]).filter(([i, a]) => i && (a == null ? void 0 : a.source))
  );
  return Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers.map((i) => {
    const a = n.get(String((i == null ? void 0 : i.assetId) || ""));
    return a ? {
      id: String((i == null ? void 0 : i.id) || ""),
      type: "sticker",
      source: a.source,
      revision: a.revision,
      zIndex: Number((i == null ? void 0 : i.zIndex) || 0),
      opacity: Number((i == null ? void 0 : i.opacity) ?? 1),
      visible: (i == null ? void 0 : i.visible) !== !1,
      transform: {
        yawDeg: Number((i == null ? void 0 : i.yawDeg) || 0),
        pitchDeg: Number((i == null ? void 0 : i.pitchDeg) || 0),
        rollDeg: Number((i == null ? void 0 : i.rollDeg) || 0),
        hFovDeg: Number((i == null ? void 0 : i.hFovDeg) || 30),
        vFovDeg: Number((i == null ? void 0 : i.vFovDeg) || 30)
      },
      params: {
        assetId: String((i == null ? void 0 : i.assetId) || ""),
        crop: (i == null ? void 0 : i.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
      }
    } : null;
  }).filter(Boolean) : [];
}
function gs(t = {}) {
  const e = (t == null ? void 0 : t.backgroundSource) || null, n = Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360, i = String((t == null ? void 0 : t.stateRevision) || ""), a = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, s = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], u = String((t == null ? void 0 : t.backgroundRevision) || [
    String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
    Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
    Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
  ].join("|"));
  return hl({
    stateRevision: i,
    background: {
      type: "erp_image",
      source: e,
      revision: u,
      coverageDeg: n,
      opacity: Number((t == null ? void 0 : t.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (a == null ? void 0 : a.selectedId) ?? null,
      hoveredId: (a == null ? void 0 : a.hoveredId) ?? null,
      objects: mh(a, s)
    },
    overlay: {
      showMaskTint: (t == null ? void 0 : t.showMaskTint) === !0
    }
  });
}
function hc(t = {}) {
  const e = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], i = mh(e, n), a = Y1({
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
      objects: [...i, ...a]
    },
    overlay: {
      showMaskTint: (t == null ? void 0 : t.showMaskTint) === !0
    }
  });
}
function _i(t, e) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(t)), n.height = Math.max(1, Math.round(e));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function X1() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function vf(t, e = 8) {
  var _;
  const n = (_ = t == null ? void 0 : t.getContext) == null ? void 0 : _.call(t, "2d"), i = Number((t == null ? void 0 : t.width) || 0), a = Number((t == null ? void 0 : t.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const s = n.getImageData(0, 0, i, a).data;
  let u = i, f = a, g = -1, b = -1;
  for (let d = 0; d < a; d += 1)
    for (let M = 0; M < i; M += 1)
      s[(d * i + M) * 4 + 3] <= e || (M < u && (u = M), d < f && (f = d), M > g && (g = M), d > b && (b = d));
  return g < u || b < f ? null : {
    minX: u,
    minY: f,
    maxX: g,
    maxY: b,
    width: g - u + 1,
    height: b - f + 1,
    aspect: Number(((g - u + 1) / Math.max(1, b - f + 1)).toFixed(4))
  };
}
function gl(t, e) {
  const n = Math.max(1, Math.ceil(t)), i = Math.max(1, Math.ceil(e));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function Un(t, e, n) {
  if (!t) return _i(e, n);
  const i = Math.max(1, Math.round(e)), a = Math.max(1, Math.round(n));
  return (t.canvas.width !== i || t.canvas.height !== a) && (t.canvas.width = i, t.canvas.height = a, t.ctx.imageSmoothingEnabled = !0), t;
}
function ce(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let pc = null, gc = null, _f = null, wf = null, Jt = null, aa = null, Xe = null, Sr = null;
function Z1() {
  if (gc) return gc;
  const t = 6, e = 17, n = document.createElement("canvas");
  n.width = e, n.height = e;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, e, e), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = t, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(e, e), i.moveTo(-e / 2, e / 2), i.lineTo(e / 2, e + e / 2), i.moveTo(e / 2, -e / 2), i.lineTo(e + e / 2, e / 2), i.stroke(), gc = n, n;
}
function pi(t, e) {
  if (!t || !e) return;
  const n = e.width, i = e.height;
  pc = Un(pc, n, i);
  const a = pc;
  ce(a), a.ctx.drawImage(e, 0, 0), a.ctx.globalCompositeOperation = "source-in", wf !== a.ctx && (_f = a.ctx.createPattern(Z1(), "repeat"), wf = a.ctx), a.ctx.fillStyle = _f, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(a.canvas, 0, 0), t.restore();
}
function J1(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function Q1(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function ty(t, e) {
  const n = Number(t == null ? void 0 : t.radiusValue), i = String((t == null ? void 0 : t.radiusModel) || "").trim(), a = (e == null ? void 0 : e.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function ey(t, e) {
  const n = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * e * 2);
  const i = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * e * 2);
}
const he = /* @__PURE__ */ new Map(), ml = 128;
function ny(t, e, n, i, a, s) {
  const u = Math.max(1, Math.round(t)), f = Math.max(0, Math.min(1, e)), g = `${u}:${f.toFixed(2)}:${n}:${i}:${a}:${s.toFixed(3)}`;
  if (he.has(g)) {
    const A = he.get(g);
    return he.delete(g), he.set(g, A), A;
  }
  he.size >= ml && he.delete(he.keys().next().value);
  const b = u * 2 + 2, _ = u + 1, d = gl(b, b), M = d.getContext("2d"), P = f * u, T = u + 1, E = `rgba(${n},${i},${a},${s})`, C = `rgba(${n},${i},${a},0)`, V = M.createRadialGradient(_, _, P, _, _, T);
  return V.addColorStop(0, E), V.addColorStop(1, C), M.fillStyle = V, M.fillRect(0, 0, b, b), he.set(g, d), d;
}
function ry(t, e, n, i, a, s, u) {
  const { r: f, g, b, a: _ } = i, d = Math.max(2, Math.ceil(t) * 2), M = Math.max(2, Math.ceil(e) * 2), P = Math.max(0, a), T = Math.max(0, Math.min(0.99, s)), E = Math.max(0, Math.min(1, u ?? 0)), C = `chisel:${d}:${M}:${n.toFixed(2)}:${f}:${g}:${b}:${_.toFixed(3)}:${P.toFixed(2)}:${T.toFixed(2)}:${E.toFixed(2)}`;
  if (he.has(C)) {
    const Q = he.get(C);
    return he.delete(C), he.set(C, Q), Q;
  }
  he.size >= ml && he.delete(he.keys().next().value);
  const V = gl(d, M), A = V.getContext("2d"), F = A.createImageData(d, M), L = F.data, Y = Math.max(0, t - e), I = Math.max(0, Math.min(1, n)), ct = 1 + P;
  for (let Q = 0; Q < M; Q++)
    for (let xt = 0; xt < d; xt++) {
      const z = xt + 0.5 - t, ft = Q + 0.5 - e, St = Math.max(Math.abs(z) - Y, 0), nt = Math.hypot(St, ft) / e;
      if (nt >= 1) continue;
      const X = nt <= I ? 1 : Math.max(0, (1 - nt) / Math.max(1e-4, 1 - I)), at = 1 - nt, dt = 1 + P * (1 - at) * (1 - at), B = 1 - T * at * at, ot = dt * B / ct;
      let Nt = 1;
      if (E > 0) {
        const Lt = Math.floor((ft + e) / 1.5), Ae = Math.floor((z + t) / 8), Oe = Gr(Ei(Lt * 41 + 500, Ae * 19 + 300));
        Nt = 1 - E * 0.42 * Oe;
      }
      const Dt = Math.round(255 * Math.min(1, _ * X * ot * Nt));
      if (Dt <= 0) continue;
      const Ct = (Q * d + xt) * 4;
      L[Ct] = f, L[Ct + 1] = g, L[Ct + 2] = b, L[Ct + 3] = Dt;
    }
  return A.putImageData(F, 0, 0), he.set(C, V), V;
}
function Ei(t, e) {
  const n = Math.trunc(Math.round(t * 4)), i = Math.trunc(Math.round(e * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function Gr(t) {
  let e = t + 1831565813 >>> 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function iy(t, e, n, i, a, s, u) {
  const f = t + 0.5 - n, g = e + 0.5 - i, b = Math.max(0, n - i), _ = Math.max(Math.abs(f) - b, 0), d = Math.hypot(_, g) / i;
  if (d >= 1) return 0;
  const M = Gr(Ei(t * 17 + 3, e * 13 + 7)), P = d + s * 0.22 * (M - 0.5);
  if (P >= 1) return 0;
  const T = P <= a ? 1 : Math.max(0, (1 - P) / Math.max(1e-4, 1 - a)), E = ay(t, e, f, g, n, i), C = s * 0.55;
  if (E < C) return 0;
  const A = 0.45 + 0.55 * ((E - C) / Math.max(1e-4, 1 - C));
  return Math.round(255 * Math.min(1, u * T * A));
}
function ay(t, e, n, i, a, s) {
  const u = Math.floor((n + a) / 3), f = Math.floor((i + s) / 2), g = Gr(Ei(u * 13 + 700, f * 17 + 400)), b = Math.floor((n + a) / 1.5), _ = Math.floor((i + s) / 1.5), d = Gr(Ei(b * 23 + 800, _ * 29 + 500)), M = Gr(Ei(t * 3 + 100, e * 5 + 200));
  return g * 0.55 + d * 0.3 + M * 0.15;
}
function oy(t, e, n, i, a) {
  const { r: s, g: u, b: f, a: g } = i, b = Math.max(2, Math.ceil(t) * 2), _ = Math.max(2, Math.ceil(e) * 2), d = Math.max(0, Math.min(1, a)), M = `crayon:${b}:${_}:${n.toFixed(2)}:${s}:${u}:${f}:${g.toFixed(3)}:${d.toFixed(2)}`;
  if (he.has(M)) {
    const A = he.get(M);
    return he.delete(M), he.set(M, A), A;
  }
  he.size >= ml && he.delete(he.keys().next().value);
  const P = gl(b, _), T = P.getContext("2d"), E = T.createImageData(b, _), C = E.data, V = Math.max(0, Math.min(1, n));
  for (let A = 0; A < _; A++)
    for (let F = 0; F < b; F++) {
      const L = iy(F, A, t, e, V, d, g);
      if (L <= 0) continue;
      const Y = (A * b + F) * 4;
      C[Y] = s, C[Y + 1] = u, C[Y + 2] = f, C[Y + 3] = L;
    }
  return T.putImageData(E, 0, 0), he.set(M, P), P;
}
function yh(t, e, n) {
  var E, C;
  const i = String((e == null ? void 0 : e.stampKind) || "round"), a = ty(e, n), s = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), u = sy(e), f = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), g = Number(((E = e == null ? void 0 : e.angle) == null ? void 0 : E.value) ?? 0), b = ey(e, a), _ = String(((C = e == null ? void 0 : e.targetSpace) == null ? void 0 : C.viewMode) || ""), d = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && _ !== "unwrap", M = e == null ? void 0 : e.scatter, P = M ? { radius: Number(M.radius ?? 1.5), count: Math.max(1, Math.round(M.count ?? 6)) } : null;
  let T;
  if (i === "chisel") {
    const V = a * f, A = a, F = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), L = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), Y = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    T = ry(V, A, s, u, F, L, Y);
  } else if (i === "crayon") {
    const V = a * f, A = a, F = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    T = oy(V, A, s, u, F);
  } else
    T = ny(a, s, u.r, u.g, u.b, u.a);
  return { ctx: t, stampTex: T, radiusPx: a, spacingPx: b, desc: n, aspect: f, angle: g, stampKind: i, scatter: P, latitudeCorrection: d };
}
function sy(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const i = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.flow) ?? 1))), s = Math.max(0, Math.min(1, Number(i.a ?? 1))) * a;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(i.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(i.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(i.b || 0))) * 255),
    a: s
  };
}
function cy(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const i = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function xf(t, e, n, i, a) {
  const s = t.angle, u = t.desc.width;
  function f(b, _) {
    s === 0 ? t.ctx.drawImage(t.stampTex, b - a, _ - i, a * 2, i * 2) : (t.ctx.save(), t.ctx.translate(b, _), t.ctx.rotate(s), t.ctx.drawImage(t.stampTex, -a, -i, a * 2, i * 2), t.ctx.restore());
  }
  f(e, n);
  const g = s === 0 ? a : a * Math.abs(Math.cos(s)) + i * Math.abs(Math.sin(s));
  e - g < 0 && f(e + u, n), e + g > u && f(e - u, n);
}
function yl(t, e, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (t.scatter) {
    const { radius: b, count: _ } = t.scatter, d = b * t.radiusPx * a, M = Ei(e, n);
    for (let P = 0; P < _; P++) {
      const T = Gr(M + P * 2) * Math.PI * 2, E = Math.sqrt(Gr(M + P * 2 + 1)) * d, C = e + Math.cos(T) * E, V = n + Math.sin(T) * E, A = Math.max(0.5, t.radiusPx * a * 0.48), F = (0.5 - V / Math.max(1, t.desc.height)) * Math.PI, L = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(F)) : 1, Y = A * t.aspect * L;
      xf(t, C, V, A, Y);
    }
    return;
  }
  const s = Math.max(0.5, t.radiusPx * a), u = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, f = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, g = s * t.aspect * f;
  xf(t, e, n, s, g);
}
function Sf(t, e, n) {
  const i = Q1(e);
  if (!t || i.length === 0) return;
  const a = n.width, s = n.height, u = yh(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const f = [];
  for (let M = 0; M < i.length; M++) {
    let P = Number(i[M].u || 0) * a;
    const T = Number(i[M].v || 0) * s;
    M > 0 && Math.abs(P - f[M - 1].x) > a * 0.5 && (P += P < f[M - 1].x ? a : -a), f.push({ x: P, y: T });
  }
  if (yl(u, f[0].x, f[0].y, 1), f.length === 1) {
    t.restore();
    return;
  }
  let g = f[0], b = f[0], _ = f[0], d = 0;
  for (let M = 1; M < f.length; M++) {
    const P = f[M], T = { x: (b.x + P.x) * 0.5, y: (b.y + P.y) * 0.5 };
    M === 1 ? d = Ra(u, _.x, _.y, T.x, T.y, d) : d = Bo(u, g, _, T, P, d), g = b, b = P, _ = T;
  }
  f.length === 2 ? Ra(u, _.x, _.y, b.x, b.y, d) : Bo(u, g, _, b, b, d), t.restore();
}
function To(t, e, n) {
  var d;
  const i = Array.isArray((d = e == null ? void 0 : e.geometry) == null ? void 0 : d.points) ? e.geometry.points : [];
  if (!t || i.length < 3) return;
  const a = n.width, s = n.height, u = cy(e), f = [];
  let g = 1 / 0, b = -1 / 0;
  for (let M = 0; M < i.length; M++) {
    const P = J1(i[M]);
    let T = Number(P.x || 0) * a;
    M > 0 && Math.abs(T - f[M - 1].x) > a * 0.5 && (T += T < f[M - 1].x ? a : -a), f.push({ x: T, y: Number(P.y || 0) * s }), T < g && (g = T), T > b && (b = T);
  }
  function _(M) {
    t.beginPath(), t.moveTo(f[0].x + M, f[0].y);
    for (let P = 1; P < f.length; P++) t.lineTo(f[P].x + M, f[P].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = u, _(0), g < 0 && _(a), b > a && _(-a), t.restore();
}
function oo(t, e, n) {
  var u;
  if (String(((u = e == null ? void 0 : e.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    To(t, e, n);
    return;
  }
  const s = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  s >= 0.999 ? Sf(t, e, n) : (aa = Un(aa, n.width, n.height), ce(aa), Sf(aa.ctx, e, n), t.save(), t.globalAlpha = s, t.drawImage(aa.canvas, 0, 0), t.restore());
}
function Nr(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function Ra(t, e, n, i, a, s) {
  const u = i - e, f = a - n, g = Math.hypot(u, f);
  if (g < 1e-9) return s;
  let b = t.spacingPx - s;
  for (; b <= g; ) {
    const _ = b / g;
    yl(t, e + u * _, n + f * _, 1), b += t.spacingPx;
  }
  return g - b + t.spacingPx;
}
function Bo(t, e, n, i, a, s) {
  const f = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, g = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, _ = 0, d = f, M = d + g, P = M + b, T = M - d, E = 16;
  let C = s, V = n.x, A = n.y;
  for (let F = 1; F <= E; F++) {
    const L = d + T * F / E, Y = ((d - L) * e.x + (L - _) * n.x) / (d - _), I = ((d - L) * e.y + (L - _) * n.y) / (d - _), ct = ((M - L) * n.x + (L - d) * i.x) / (M - d), Q = ((M - L) * n.y + (L - d) * i.y) / (M - d), xt = ((P - L) * i.x + (L - M) * a.x) / (P - M), z = ((P - L) * i.y + (L - M) * a.y) / (P - M), ft = ((M - L) * Y + (L - _) * ct) / (M - _), St = ((M - L) * I + (L - _) * Q) / (M - _), tt = ((P - L) * ct + (L - d) * xt) / (P - d), nt = ((P - L) * Q + (L - d) * z) / (P - d), X = ((M - L) * ft + (L - d) * tt) / (M - d), at = ((M - L) * St + (L - d) * nt) / (M - d);
    C = Ra(t, V, A, X, at, C), V = X, A = at;
  }
  return C;
}
function ly(t, e, n, i) {
  const a = t.currentStroke.ctx;
  if (!a) return;
  const s = t.descriptor, u = s.width, f = n * s.height, g = t.activeStroke;
  let b = e * u;
  if (g && Math.abs(b - g.prev.x) > u * 0.5 && (b += b < g.prev.x ? u : -u), !g) {
    const P = yh(a, i, s), T = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), E = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), C = String((i == null ? void 0 : i.toolKind) || "") === "eraser", V = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", yl(P, b, f, 1), t.activeStroke = {
      pprev: { x: b, y: f },
      prev: { x: b, y: f },
      lastMidX: b,
      lastMidY: f,
      stampTex: P.stampTex,
      radiusPx: P.radiusPx,
      spacingPx: P.spacingPx,
      aspect: P.aspect,
      angle: P.angle,
      stampKind: P.stampKind,
      scatter: P.scatter,
      latitudeCorrection: P.latitudeCorrection,
      strokeOpacity: T,
      velocityWidthFactor: E,
      distSinceStamp: 0,
      isEraser: C,
      layerKind: V,
      pointCount: 1
    }, t.displayDirty = !0;
    return;
  }
  const _ = (g.prev.x + b) * 0.5, d = (g.prev.y + f) * 0.5;
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
    { x: b, y: f },
    g.distSinceStamp
  ), g.pprev = g.prev, g.prev = { x: b, y: f }, g.lastMidX = _, g.lastMidY = d, g.pointCount++, t.displayDirty = !0;
}
function Oc(t = {}) {
  const e = Math.max(1, Math.round(Number((t == null ? void 0 : t.width) || 2048))), n = Math.max(1, Math.round(Number((t == null ? void 0 : t.height) || 1024))), i = { kind: "ERP_GLOBAL", width: e, height: n }, a = /* @__PURE__ */ new Map(), s = _i(e, n), u = {
    descriptor: i,
    committedMask: _i(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: _i(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, g = _i(e, n);
  let b = null, _ = "", d = null;
  function M(z) {
    return {
      actionGroupId: z,
      descriptor: i,
      committedPaint: _i(e, n),
      currentStroke: s,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function P(z) {
    let ft = a.get(z);
    return ft || (ft = M(z), a.set(z, ft)), ft;
  }
  function T(z) {
    return _ === "mask" ? u : b ? P(b) : f;
  }
  function E(z) {
    var B;
    const ft = !d || d.length !== z.length || z.some((ot, Nt) => ot !== d[Nt]), St = _ === "paint" && ((B = b ? a.get(b) : f) == null ? void 0 : B.activeStroke) || null, tt = _ === "mask", nt = u.activeStroke;
    let X = u.displayDirty || f.displayDirty || ft;
    for (const ot of z) {
      const Nt = a.get(ot);
      if (Nt != null && Nt.displayDirty) {
        X = !0;
        break;
      }
    }
    if ((St || tt && nt) && (X = !0), !X) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const ot of z) {
      const Nt = a.get(ot);
      Nt && (Nt.displayDirty = !1);
    }
    d = [...z];
    const at = g.ctx;
    ce(g);
    const dt = !!(St != null && St.isEraser);
    for (const ot of z) {
      const Nt = a.get(ot);
      if (!Nt) continue;
      const Ct = b === Nt.actionGroupId && _ === "paint" ? Nt.activeStroke : null;
      if (dt)
        Jt = Un(Jt, e, n), ce(Jt), Jt.ctx.drawImage(Nt.committedPaint.canvas, 0, 0), Nr(Jt.ctx, s.canvas), at.drawImage(Jt.canvas, 0, 0);
      else if (at.drawImage(Nt.committedPaint.canvas, 0, 0), Ct) {
        const Lt = Nt.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Ct.strokeOpacity ?? 1));
        at.save(), at.globalAlpha = Lt, at.drawImage(s.canvas, 0, 0), at.restore();
      }
    }
    tt && (nt != null && nt.isEraser) ? (Jt = Un(Jt, e, n), ce(Jt), Jt.ctx.drawImage(u.committedMask.canvas, 0, 0), Nr(Jt.ctx, s.canvas), pi(at, Jt.canvas)) : (pi(at, u.committedMask.canvas), tt && nt && pi(at, s.canvas));
  }
  function C(z) {
    var St, tt, nt, X, at;
    for (const dt of a.values())
      ce(dt.committedPaint), ce(dt.currentStroke), dt.activeStroke = null, dt.displayDirty = !0;
    ce(u.committedMask), ce(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, d = null;
    const ft = [
      ...Array.isArray((tt = (St = z == null ? void 0 : z.painting) == null ? void 0 : St.paint) == null ? void 0 : tt.strokes) ? z.painting.paint.strokes : [],
      ...Array.isArray((X = (nt = z == null ? void 0 : z.painting) == null ? void 0 : nt.mask) == null ? void 0 : X.strokes) ? z.painting.mask.strokes : []
    ];
    for (const dt of ft) {
      if (((at = dt == null ? void 0 : dt.targetSpace) == null ? void 0 : at.kind) !== "ERP_GLOBAL") continue;
      const B = String((dt == null ? void 0 : dt.layerKind) || "paint"), Nt = String((dt == null ? void 0 : dt.toolKind) || "pen") === "eraser";
      if (B === "mask") {
        const Dt = u.descriptor;
        Nt ? (Jt = Un(Jt, Dt.width, Dt.height), ce(Jt), oo(Jt.ctx, dt, Dt), Nr(u.committedMask.ctx, Jt.canvas)) : oo(u.committedMask.ctx, dt, Dt);
        continue;
      }
      if (Nt) {
        Jt = Un(Jt, i.width, i.height), ce(Jt), oo(Jt.ctx, dt, i);
        for (const Dt of a.values())
          Nr(Dt.committedPaint.ctx, Jt.canvas), Dt.displayDirty = !0;
      } else {
        const Dt = String((dt == null ? void 0 : dt.actionGroupId) || "__default__"), Ct = P(Dt), Lt = Ct.descriptor;
        oo(Ct.committedPaint.ctx, dt, Lt), Ct.displayDirty = !0;
      }
    }
    E([...a.keys()]);
  }
  function V(z, ft) {
    _ = String((z == null ? void 0 : z.layerKind) || "");
    const St = String((z == null ? void 0 : z.toolKind) || "") === "eraser";
    if (_ === "mask")
      b = null, ce(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const tt = St ? f : P(String((z == null ? void 0 : z.actionGroupId) || "__default__"));
      b = St ? "" : String((z == null ? void 0 : z.actionGroupId) || "__default__"), ce(tt.currentStroke), tt.activeStroke = null, tt.displayDirty = !0;
    }
  }
  function A(z, ft) {
    var B;
    const St = String((z == null ? void 0 : z.layerKind) || "paint"), tt = String((z == null ? void 0 : z.toolKind) || "") === "eraser", nt = St === "mask" ? u : tt ? f : P(String((z == null ? void 0 : z.actionGroupId) || b || "__default__")), X = nt.activeStroke, at = nt.descriptor;
    if (X && X.pointCount > 1) {
      const ot = nt.currentStroke.ctx;
      ot.globalCompositeOperation = "source-over";
      const Nt = {
        ctx: ot,
        stampTex: X.stampTex,
        radiusPx: X.radiusPx,
        spacingPx: X.spacingPx,
        desc: at,
        aspect: X.aspect,
        angle: X.angle,
        stampKind: X.stampKind,
        scatter: X.scatter,
        latitudeCorrection: X.latitudeCorrection
      };
      X.pointCount === 2 ? Ra(Nt, X.lastMidX, X.lastMidY, X.prev.x, X.prev.y, X.distSinceStamp) : Bo(Nt, X.pprev, { x: X.lastMidX, y: X.lastMidY }, X.prev, X.prev, X.distSinceStamp);
    }
    nt.lassoPreviewActive && (ce(nt.currentStroke), To(nt.currentStroke.ctx, z, at), nt.lassoPreviewActive = !1);
    const dt = St === "mask" ? u.committedMask : nt.committedPaint;
    if (tt && St === "paint")
      for (const ot of a.values())
        Nr(ot.committedPaint.ctx, nt.currentStroke.canvas), ot.displayDirty = !0;
    else if (tt)
      Nr(dt.ctx, nt.currentStroke.canvas);
    else {
      const ot = Math.max(0, Math.min(1, (X == null ? void 0 : X.strokeOpacity) ?? 1));
      dt.ctx.save(), dt.ctx.globalAlpha = ot, dt.ctx.drawImage(nt.currentStroke.canvas, 0, 0), dt.ctx.restore();
    }
    X1() && (String((z == null ? void 0 : z.toolKind) || ""), String((at == null ? void 0 : at.kind) || ""), Number((at == null ? void 0 : at.width) || 0), Number((at == null ? void 0 : at.height) || 0), String(((B = z == null ? void 0 : z.targetSpace) == null ? void 0 : B.viewMode) || ""), Number((z == null ? void 0 : z.aspect) ?? 1), vf(nt.currentStroke.canvas), vf(dt.canvas), void 0), ce(nt.currentStroke), nt.activeStroke = null, nt.displayDirty = !0, b = null, _ = "", E([...a.keys()]);
  }
  function F(z) {
    if (_ === "mask")
      ce(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (_ === "paint" && !b)
      ce(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (b) {
      const ft = a.get(b);
      ft && (ce(ft.currentStroke), ft.activeStroke = null, ft.lassoPreviewActive = !1, ft.displayDirty = !0);
    }
    b = null, _ = "", E([...a.keys()]);
  }
  function L(z, ft) {
    var tt;
    if (_ = String((z == null ? void 0 : z.layerKind) || ""), String(((tt = z == null ? void 0 : z.geometry) == null ? void 0 : tt.geometryKind) || "") === "lasso_fill") {
      if (_ === "mask")
        ce(u.currentStroke), To(u.currentStroke.ctx, z, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const nt = String((z == null ? void 0 : z.toolKind) || "") === "eraser", X = nt ? f : P(String((z == null ? void 0 : z.actionGroupId) || b || "__default__"));
        b = nt ? "" : String((z == null ? void 0 : z.actionGroupId) || b || "__default__"), ce(X.currentStroke), To(X.currentStroke.ctx, z, X.descriptor), X.lassoPreviewActive = !0, X.displayDirty = !0;
      }
      E([...a.keys()]);
    }
  }
  function Y(z) {
    return E(z ?? [...a.keys()]), {
      displayPaint: g,
      committedMask: u.committedMask,
      descriptor: i
    };
  }
  function I(z) {
    return a.get(String(z)) ?? null;
  }
  function ct() {
    return [...a.keys()];
  }
  function Q(z) {
    var at;
    const ft = a.get(String(z));
    if (!ft) return null;
    const St = _ === "paint" && b === ft.actionGroupId, tt = _ === "paint" && ((at = b ? a.get(b) : f) == null ? void 0 : at.activeStroke) || null;
    if (tt != null && tt.isEraser)
      return Xe = Un(Xe, e, n), ce(Xe), Xe.ctx.drawImage(ft.committedPaint.canvas, 0, 0), Nr(Xe.ctx, s.canvas), Xe.canvas;
    const nt = St ? ft.activeStroke : null;
    if (!nt) return ft.committedPaint.canvas;
    Xe = Un(Xe, e, n), ce(Xe), Xe.ctx.drawImage(ft.committedPaint.canvas, 0, 0);
    const X = ft.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, nt.strokeOpacity ?? 1));
    return Xe.ctx.save(), Xe.ctx.globalAlpha = X, Xe.ctx.drawImage(s.canvas, 0, 0), Xe.ctx.restore(), Xe.canvas;
  }
  function xt() {
    return Sr = Un(Sr, e, n), ce(Sr), pi(Sr.ctx, u.committedMask.canvas), _ === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Jt = Un(Jt, e, n), ce(Jt), Jt.ctx.drawImage(u.committedMask.canvas, 0, 0), Nr(Jt.ctx, s.canvas), ce(Sr), pi(Sr.ctx, Jt.canvas)) : pi(Sr.ctx, s.canvas)), Sr.canvas;
  }
  return {
    rebuildCommitted: C,
    beginStroke: V,
    appendStrokePoint: ly,
    updateActiveStroke: L,
    commitActiveStroke: A,
    cancelActiveStroke: F,
    getErpTarget: Y,
    ensureTarget: T,
    getGroupTarget: I,
    getGroupDisplayCanvas: Q,
    getMaskDisplayCanvas: xt,
    getAllGroupIds: ct
  };
}
function U(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function mc(t, e, n) {
  const i = Number(t);
  return Number.isFinite(i) ? Math.max(Number(e), Math.min(Number(n), i)) : Number(e);
}
function Re(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function uy(t, e) {
  let n = Re(e) - Re(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Nf = Math.PI / 180, Mf = 0.12, fy = 3, dy = 35, hy = 140, ha = 100, py = 20, kf = 0.8;
function gy(t, e, n) {
  const i = Math.max(1, Number(e || 1)), a = Math.max(1, Number(n || 1)), s = U(Number(t || ha), 1, 179) * Nf;
  return 2 * Math.atan(Math.tan(s * 0.5) * (a / i)) / Nf;
}
function my(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function ms(t = {}) {
  const e = typeof t.getView == "function" ? t.getView : (() => ({ yaw: 0, pitch: 0, fov: ha })), n = typeof t.setView == "function" ? t.setView : (() => {
  }), i = typeof t.getInvert == "function" ? t.getInvert : (() => ({ x: 1, y: 1 })), a = typeof t.getUnwrapRect == "function" ? t.getUnwrapRect : (() => ({ w: 1, h: 1 })), s = typeof t.getViewportSize == "function" ? t.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof t.onInteraction == "function" ? t.onInteraction : (() => {
  }), f = typeof t.onDebug == "function" ? t.onDebug : null, g = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(V, A = null) {
    f && f(V, A);
  }
  function _(V, A, F = null, L = performance.now()) {
    return g.drag.active = !0, g.drag.lastX = Number(V || 0), g.drag.lastY = Number(A || 0), g.drag.lastTs = Number(L || performance.now()), g.drag.pointerId = F, g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.lastTs = g.drag.lastTs, g.velHistory = [], b("drag", { phase: "start", x: g.drag.lastX, y: g.drag.lastY, pointerId: F }), !0;
  }
  function d(V, A, F = "pano", L = performance.now()) {
    if (!g.drag.active) return !1;
    const Y = Number(L || performance.now()), I = Number(V), ct = Number(A), Q = I - g.drag.lastX, xt = ct - g.drag.lastY;
    g.drag.lastX = I, g.drag.lastY = ct, g.drag.lastTs = Y;
    const z = i() || { x: 1, y: 1 }, ft = Number(z.x || 1), St = Number(z.y || 1), tt = { ...e() };
    let nt = 0, X = 0;
    if (F === "unwrap") {
      const dt = a() || { w: 1, h: 1 }, B = Math.max(1, Number(dt.w || 1)), ot = Math.max(1, Number(dt.h || 1)), Nt = Q / B, Dt = xt / ot;
      nt = -Nt * 360 * ft, X = Dt * 180 * St;
    } else {
      const dt = s() || { w: 0, h: 0 }, B = Math.max(1, Number(dt.w || 0)), ot = Math.max(1, Number(dt.h || 0));
      if (B > 1 && ot > 1) {
        const Nt = U(Number(tt.fov || ha), 1, 179), Dt = U(gy(Nt, B, ot), 0.1, 179);
        nt = -(Q / B) * Nt * ft, X = xt / ot * Dt * St;
      } else
        nt = -Q * Mf * ft, X = xt * Mf * St;
    }
    tt.yaw = Re(Number(tt.yaw || 0) + nt), tt.pitch = U(Number(tt.pitch || 0) + X, -89.9, 89.9), n(tt), g.velHistory.push({ ts: Y, yaw: tt.yaw, pitch: tt.pitch });
    let at = 0;
    for (; at < g.velHistory.length - 1 && g.velHistory[at].ts < Y - 100; ) at++;
    return at > 0 && g.velHistory.splice(0, at), g.inertia.active = !1, g.inertia.lastTs = Y, u(), b("drag", { phase: "move", dx: Q, dy: xt, dYaw: nt, dPitch: X }), !0;
  }
  function M(V = performance.now()) {
    if (!g.drag.active) return !1;
    g.drag.active = !1;
    const A = Number(V || performance.now());
    g.drag.lastTs = A;
    const F = g.velHistory.filter((Y) => A - Y.ts <= 80);
    if (F.length >= 2) {
      const Y = F[0], I = F.at(-1), ct = Math.max(1e-3, (I.ts - Y.ts) / 1e3);
      let Q = I.yaw - Y.yaw;
      Q > 180 && (Q -= 360), Q < -180 && (Q += 360), g.inertia.vx = Q / ct, g.inertia.vy = (I.pitch - Y.pitch) / ct;
    } else
      g.inertia.vx = 0, g.inertia.vy = 0;
    g.velHistory = [];
    const L = Math.hypot(g.inertia.vx, g.inertia.vy);
    return g.inertia.active = L > py, g.inertia.lastTs = A, b("drag", { phase: "end", speed: L, inertiaActive: g.inertia.active }), !0;
  }
  function P(V = performance.now()) {
    if (!g.inertia.active) return !1;
    const A = Number(V || performance.now()), F = Math.max(1e-3, (A - (g.inertia.lastTs || A)) / 1e3);
    g.inertia.lastTs = A;
    const L = { ...e() };
    L.yaw = Re(Number(L.yaw || 0) + g.inertia.vx * F), L.pitch = U(Number(L.pitch || 0) + g.inertia.vy * F, -89.9, 89.9);
    const Y = Math.exp(-5.5 * F);
    return g.inertia.vx *= Y, g.inertia.vy *= Y, Math.abs(g.inertia.vx) < kf && Math.abs(g.inertia.vy) < kf && (g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.active = !1), n(L), u(), g.inertia.active;
  }
  function T(V) {
    const A = Math.sign(Number(V || 0));
    if (!A) return !1;
    const F = { ...e() }, L = Number(F.fov || ha);
    return F.fov = U(L + A * fy, dy, hy), n(F), u(), b("wheel", { deltaSign: A, fovBefore: L, fovAfter: F.fov }), !0;
  }
  function E(V) {
    return T(Math.sign(my(V)));
  }
  function C() {
    n({ yaw: 0, pitch: 0, fov: ha }), g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, u();
  }
  return {
    state: g,
    startDrag: _,
    moveDrag: d,
    endDrag: M,
    stepInertia: P,
    applyWheel: T,
    applyWheelEvent: E,
    resetView: C
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
function yy(t) {
  const e = t || {}, n = oa(e.yaw_deg, 0), i = oa(e.pitch_deg, 0), a = oa(e.roll_deg ?? e.rot_deg, 0), s = mc(oa(e.hFOV_deg, 90), 1, 179), u = mc(oa(e.vFOV_deg, 60), 1, 179), f = Math.tan(s * Pf * 0.5) / Math.max(1e-6, Math.tan(u * Pf * 0.5)), g = mc(f, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: s,
    vfov: u,
    aspect: g
  };
}
const bh = 0.28;
function by(t) {
  const e = t && typeof t == "object" ? t : {}, n = U(Number(e.x0 ?? 0), 0, 1), i = U(Number(e.y0 ?? 0), 0, 1), a = U(Number(e.x1 ?? 1), 0, 1), s = U(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, s),
    x1: Math.max(n, a),
    y1: Math.max(i, s)
  };
}
function vy(t, e = {}) {
  if (!t || typeof t != "object") return null;
  const n = String(t.asset_id || t.assetId || "").trim(), i = t.type === "external_image" || t.source_kind === "external_image", a = n || (i ? String(t.id || "").trim() : ""), s = e.includeHidden === !0, u = t.visible === !1, f = s && i && u;
  return {
    id: String(t.id || ""),
    assetId: a,
    zIndex: Number(t.z_index || t.zIndex || 0),
    yawDeg: Number(t.yaw_deg || t.yawDeg || 0),
    pitchDeg: Number(t.pitch_deg || t.pitchDeg || 0),
    rollDeg: Number(t.rot_deg ?? t.roll_deg ?? t.rollDeg ?? 0),
    hFovDeg: U(Number(t.hFOV_deg || t.hFovDeg || 30), 1, 179),
    vFovDeg: U(Number(t.vFOV_deg || t.vFovDeg || 30), 1, 179),
    crop: by(t.crop),
    opacity: f ? bh : U(Number(t.opacity ?? 1), 0, 1),
    visible: f ? !0 : t.visible !== !1,
    external: i
  };
}
function ys(t, e = {}) {
  var s;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.includeHidden === !0;
  return {
    stickers: n.map((u) => vy(u, { includeHidden: i })).filter((u) => u && (i || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: e.selectedId ?? ((s = t == null ? void 0 : t.active) == null ? void 0 : s.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function vh(t, e, n = {}) {
  if (typeof e != "function") return [];
  const i = n.scene || ys(t, n), a = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, s = [], u = /* @__PURE__ */ new Set();
  return i.stickers.forEach((f) => {
    var T;
    const g = String((f == null ? void 0 : f.assetId) || "").trim(), b = g || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!b || u.has(b)) return;
    const _ = g ? a[g] : null, d = e(b, _, f);
    if (d instanceof HTMLImageElement && !d.complete) return;
    const M = Number((d == null ? void 0 : d.naturalWidth) || (d == null ? void 0 : d.videoWidth) || (d == null ? void 0 : d.width) || 0), P = Number((d == null ? void 0 : d.naturalHeight) || (d == null ? void 0 : d.videoHeight) || (d == null ? void 0 : d.height) || 0);
    !d || M <= 0 || P <= 0 || (u.add(b), s.push({
      assetId: b,
      source: d,
      revision: String(((T = n.revisionFor) == null ? void 0 : T.call(n, b, _, d)) ?? [
        b,
        Number(d.naturalWidth || d.videoWidth || d.width || 0),
        Number(d.naturalHeight || d.videoHeight || d.height || 0),
        String(d.currentSrc || d.src || "")
      ].join("|"))
    }));
  }), s;
}
function bl(t, e = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((t == null ? void 0 : t.yaw) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch) || 0),
    fovDeg: U(Number((t == null ? void 0 : t.fov) || 100), 1, 179),
    coverageDeg: Number(e || 360) === 180 ? 180 : 360
  };
}
function _y(t, e = 360) {
  return bl(t, e);
}
function wi(t) {
  const e = yy(t || {});
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
const { app: le } = So;
function Vc() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (So == null ? void 0 : So.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Wr = Math.PI / 180, Go = {}, wy = { Nu: 24, Nv: 14 }, xy = 10, Sy = 120;
function Ny() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function sa(t) {
  var n, i, a, s, u;
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
    styleHeight: String(((i = t.style) == null ? void 0 : i.height) || ""),
    styleWidth: String(((a = t.style) == null ? void 0 : a.width) || ""),
    stylePos: String(((s = t.style) == null ? void 0 : s.position) || ""),
    styleTransform: String(((u = t.style) == null ? void 0 : u.transform) || "")
  };
}
function My() {
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
function Ir(t) {
  const e = t == null ? void 0 : t.size;
  if (e == null) return null;
  const n = (i, a) => {
    const s = Number(i), u = Number(a);
    return !Number.isFinite(s) || !Number.isFinite(u) ? null : [s, u];
  };
  if (typeof e == "object" || typeof e == "function") {
    if (e[0] !== void 0 || e[1] !== void 0) {
      const i = n(e[0], e[1]);
      if (i) return i;
    }
    if (e.width !== void 0 || e.height !== void 0) {
      const i = n(e.width, e.height);
      if (i) return i;
    }
    if (e.w !== void 0 || e.h !== void 0) {
      const i = n(e.w, e.h);
      if (i) return i;
    }
  }
  return null;
}
function ky(t) {
  const e = Ir(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function _h(t, e, n) {
  ky(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function Hc(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function wh(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function Py(t) {
  return Fc(wh(t));
}
function Kr(t = null) {
  var s, u;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (s = le == null ? void 0 : le.canvas) == null ? void 0 : s.constructor) == null ? void 0 : u.name) || "");
  return [e, i, n, a].join("|");
}
function xh(t, e = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Kr(e)
  } : String(t) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Kr(e)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Kr(e)
  };
}
const Sa = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(t) {
    !t || String(t.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(t), this.lastSignature || (this.lastSignature = Kr(t)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(t) {
    t && this.nodes.delete(t), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const t = this.nodes.values().next().value || null, e = Kr(t);
    e !== this.lastSignature && (this.lastSignature = e, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, Sh(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function Sh(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : xh(i, t).chosenPath, s = Hc(t);
      this.activeBackend = s;
      const u = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = t.__panoPreviewNoPreview === !0, g = n.noPreview === !0;
      if (s === a && s !== "none" && u === i && f === g) {
        t.__panoAttachOptions = { ...n, mode: i }, t.__panoPreviewMode = i, t.__panoPreviewNoPreview = g, t.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      s !== "none" && Ti(t, { keepMonitor: i === "stickers" }), pb(t, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = Hc(t);
    },
    rebind(n = {}) {
      const i = String(n.mode || (t == null ? void 0 : t.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Ti(t, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Ti(t), this.activeBackend = "none";
    }
  };
  return t.__panoPreviewController = e, e;
}
function Ay(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function Ti(t, e = {}) {
  var i, a, s, u, f;
  if (!t) return;
  Wo.unregister(t), Ay(t), t.__panoDomPreview, t.__panoLegacyPreviewHooked, t.__panoDomRestore, t.__panoLegacyRestore;
  try {
    (i = t.__panoDomRestore) == null || i.call(t);
  } catch {
  }
  t.__panoDomRestore = null;
  try {
    (a = t.__panoLegacyRestore) == null || a.call(t);
  } catch {
  }
  t.__panoLegacyRestore = null;
  const n = t.__panoDomPreview;
  if (n) {
    try {
      (s = n.state) != null && s.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (f = (u = n.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
  }
  try {
    Array.isArray(t.widgets) && (t.widgets = t.widgets.filter((g) => {
      if (g === (n == null ? void 0 : n.widget)) return !1;
      const b = String((g == null ? void 0 : g.name) || ""), _ = String((g == null ? void 0 : g.type) || ""), d = Vc();
      return !(b === d || _ === d || b === "pano_preview" || _ === "pano_preview" || b === "preview" && _ === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", String(e.reason || ""), e.keepMonitor, e.keepMonitor || Sa.unregister(t);
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
  const n = t * Wr, i = e * Wr, a = Math.cos(i);
  return qr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function vl(t, e, n = 0) {
  const i = Hr(t, e), a = qr(0, 1, 0);
  let s = Cf(a, i);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = qr(1, 0, 0)), s = co(s);
  let u = co(Cf(i, s));
  const f = n * Wr, g = Math.cos(f), b = Math.sin(f), _ = Af(so(s, g), so(u, b)), d = Af(so(s, -b), so(u, g));
  return { fwd: i, right: co(_), up: co(d) };
}
function Cy(t, e = "#00ff00") {
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
  let i = null;
  if (t && typeof t == "object")
    i = t;
  else if (typeof t == "string") {
    const a = t.trim();
    if (!a) return n;
    try {
      i = JSON.parse(a);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const a = i;
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
function Iy(t) {
  var n;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = La(t, "state_json")) == null ? void 0 : n.value) || "");
}
function _l(t) {
  var u, f;
  const e = Iy(t), n = String(((u = La(t, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), i = Number(((f = La(t, "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, a = t.__panoStateCache;
  if (a && a.source === e && a.bg === n && a.coverage === i)
    return a.parsed;
  const s = Cy(e, n);
  return s.coverage = i, t.__panoStateCache = { source: e, bg: n, coverage: i, parsed: s }, s;
}
function La(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((i) => i.name === e)) || null;
}
function If(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function Nh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Ey(t, e) {
  var n, i;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((i = t._nodes_by_id) == null ? void 0 : i[String(e)]) || null;
}
function Mh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function kh(t, e, n = null) {
  var a, s;
  let i = null;
  try {
    i = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, f = u ? (s = i.resolveSubgraphOutputLink) == null ? void 0 : s.call(i, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (i = f.outputNode);
    } catch {
    }
  return !i && n != null && (i = Ey(t == null ? void 0 : t.graph, n)), i;
}
function Ty(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function wl(t, e = []) {
  const n = Ty(t), i = [];
  return e.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : e;
}
function Ef(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: e, tail: n.length ? n[n.length - 1] : e };
}
function Ko(t, e) {
  const n = Ef(t), i = Ef(e);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Dy(t, e = ["erp_image", "bg_erp"]) {
  var g;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return [];
  const a = wl(t, e).map((b) => n.findIndex((_) => String((_ == null ? void 0 : _.name) || "") === String(b))).filter((b) => b >= 0), s = n.map((b, _) => ({ input: b, idx: _ })).filter(({ input: b }) => String((b == null ? void 0 : b.type) || "").toUpperCase() === "IMAGE").map(({ idx: b }) => b), u = [.../* @__PURE__ */ new Set([...a, ...s])], f = [];
  for (const b of u) {
    const _ = kh(t, b);
    if ((_ == null ? void 0 : _.id) != null) {
      f.push(String(_.id));
      continue;
    }
    const d = (g = n[b]) == null ? void 0 : g.link;
    if (d == null) continue;
    const M = Nh(t == null ? void 0 : t.graph, d), { originId: P } = Mh(M);
    P != null && f.push(String(P));
  }
  return [...new Set(f)];
}
const Wo = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = Qe) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((s) => {
        var f, g, b, _, d;
        if (!s) return;
        Ko(i, s == null ? void 0 : s.id), Dy(s, ["erp_image", "bg_erp"]).some((M) => Ko(i, M)), zc(s), (g = (f = s.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (b = s.setDirtyCanvas) == null || b.call(s, !0, !0), (d = (_ = s.graph) == null ? void 0 : _.setDirtyCanvas) == null || d.call(_, !0, !0), String(s.__panoPreviewMode || ""), String(s.__panoPreviewMode || "");
      });
    }, Qe.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var t;
    !this.bound || !this.listener || !((t = Qe) != null && t.removeEventListener) || (Qe.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
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
  const i = String(
    t.storage || (String(t.type || "").trim().toLowerCase() === "comfy_image" ? "output" : t.type) || "output"
  );
  n.set("type", i), t.subfolder && n.set("subfolder", String(t.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((s = Qe) == null ? void 0 : s.apiURL) == "function" ? Qe.apiURL(a) : a;
}
function Ry(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Ly(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), s = i.join("/");
  return { filename: a, subfolder: s };
}
function Oy(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function Ph(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Ry(e)) return [e];
  const { filename: n, subfolder: i } = Ly(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => qo({
    filename: n,
    subfolder: i,
    type: s
  }));
  return Oy([...a, e]);
}
function Fy(t) {
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
  const e = le == null ? void 0 : le.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let i = null;
  if (e instanceof Map ? i = e.get(t) || e.get(n) || e.get(Number(n)) || null : i = e[t] || e[n] || null, i) return i;
  const a = n;
  if (e instanceof Map) {
    for (const s of e.keys())
      if (Ko(s, a)) return e.get(s);
  } else {
    const s = Object.keys(e);
    for (const u of s)
      if (Ko(u, a)) return e[u];
  }
  return null;
}
function Wn(t) {
  if (!t) return "";
  if (typeof t == "string")
    return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Wn(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), i = String(t[2] || "output").trim() || "output";
      return qo({ filename: e, subfolder: n, type: i });
    }
    for (const n of t) {
      const i = Wn(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : qo(t);
}
function Ah(t, e) {
  var i;
  const n = String(t || "").trim();
  if (!n) return "";
  try {
    const a = typeof window < "u" && ((i = window == null ? void 0 : window.location) != null && i.href) ? window.location.href : "http://127.0.0.1/", s = new URL(n, a);
    return e > 0 && s.searchParams.set("pano_rev", String(e)), s.toString();
  } catch {
    const a = n.includes("?") ? "&" : "?";
    return e > 0 ? `${n}${a}pano_rev=${e}` : n;
  }
}
function Vy(t) {
  const e = [], n = /* @__PURE__ */ new Set(), i = (s) => {
    Array.isArray(s) && s.forEach((u) => e.push(u));
  }, a = (s, u = 0) => {
    !s || u > 3 || n.has(s) || typeof s == "object" && (n.add(s), i(s.images), a(s.output, u + 1), a(s.ui, u + 1), a(s.data, u + 1), a(s.result, u + 1));
  };
  return a(t, 0), e;
}
function Hy(t, e) {
  try {
    const n = Vy(e);
    let i = "";
    for (const a of n)
      if (i = Wn(a), i) break;
    i ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(i || ""), Ah(t.__panoOwnOutputSrc, t.__panoOwnOutputRev), t.__panoOwnOutputRev, void 0) : (Object.keys(e || {}), void 0);
  } catch {
  }
}
function $y(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const i = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), a = $c(n), s = Array.isArray(a == null ? void 0 : a.images) ? a.images : [], u = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], f = i ? [i, ...s, ...u] : [...s, ...u];
  let g = "";
  for (const V of f)
    if (g = Wn(V), g) break;
  if (!g) return null;
  const b = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), d = Ph(g).map((V) => Ah(V, b));
  if (!d.length) return null;
  const M = `${g}|rev:${b}`;
  t.__panoOwnOutputImageCache || (t.__panoOwnOutputImageCache = {
    src: "",
    img: null,
    pendingSrc: "",
    pendingImg: null
  });
  const P = t.__panoOwnOutputImageCache;
  if (P.img && P.src === M) return P.img;
  if (P.pendingImg && P.pendingSrc === M)
    return P.img && (P.img.complete || P.img.naturalWidth || P.img.width) ? P.img : P.pendingImg;
  const T = new Image();
  let E = -1;
  const C = () => {
    if (E += 1, E >= d.length) {
      t.__panoOwnOutputImageCache === P && (P.pendingSrc = "", P.pendingImg = null);
      return;
    }
    T.src = d[E];
  };
  return T.onload = () => {
    var V;
    t.__panoOwnOutputImageCache === P && P.pendingImg === T && P.pendingSrc === M && (P.src = M, P.img = T, P.pendingSrc = "", P.pendingImg = null), e == null || e(), (V = t.setDirtyCanvas) == null || V.call(t, !0, !0);
  }, T.onerror = () => {
    if (E + 1 >= d.length) {
      t.__panoOwnOutputImageCache === P && P.pendingImg === T && (P.pendingSrc = "", P.pendingImg = null);
      return;
    }
    C();
  }, P.pendingSrc = M, P.pendingImg = T, C(), P.img && (P.img.complete || P.img.naturalWidth || P.img.width) ? P.img : T;
}
function zy(t, e = []) {
  var b, _;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = wl(t, e).map((d) => n.findIndex((M) => String((M == null ? void 0 : M.name) || "") === String(d))).filter((d) => d >= 0), s = n.map((d, M) => ({ input: d, idx: M })).filter(({ input: d }) => String((d == null ? void 0 : d.type) || "").toUpperCase() === "IMAGE").map(({ idx: d }) => d), u = [.../* @__PURE__ */ new Set([...a, ...s])];
  for (const d of u) {
    const M = n[d], P = M == null ? void 0 : M.link;
    if (P == null) continue;
    const T = Nh(t.graph, P), { originId: E, originSlot: C } = Mh(T);
    if (E == null) continue;
    const V = kh(t, d, E);
    if (!V) continue;
    const A = Number(C || 0), F = $c((V == null ? void 0 : V.id) ?? E), L = Array.isArray(F == null ? void 0 : F.images) ? F.images : [];
    if (L.length) {
      const Q = [];
      A >= 0 && A < L.length && Q.push(L[A]), Q.push(...L);
      for (const xt of Q) {
        const z = Wn(xt);
        if (z)
          return String((M == null ? void 0 : M.name) || ""), { src: z, sourceType: "nodeOutputs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    let Y = [];
    try {
      Y = typeof (le == null ? void 0 : le.getNodeImageUrls) == "function" ? le.getNodeImageUrls(V) || [] : [];
    } catch {
      Y = [];
    }
    if (Array.isArray(Y) && Y.length) {
      const Q = [];
      A >= 0 && A < Y.length && Q.push(Y[A]), Q.push(...Y);
      for (const xt of Q) {
        const z = Wn(xt);
        if (z)
          return String((M == null ? void 0 : M.name) || ""), { src: z, sourceType: "appNodeImageUrls", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const I = Array.isArray(V == null ? void 0 : V.imgs) ? V.imgs : [];
    if (I.length) {
      const Q = [];
      A >= 0 && A < I.length && Q.push(I[A]), Q.push(...I);
      for (const xt of Q) {
        const z = Wn(xt);
        if (z)
          return String((M == null ? void 0 : M.name) || ""), { src: z, sourceType: "nodeImgs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const ct = (b = V == null ? void 0 : V.widgets) == null ? void 0 : b.find((Q) => String((Q == null ? void 0 : Q.name) || "").toLowerCase() === "image");
    if (ct) {
      let Q = Wn(ct.value);
      if (Q && !Q.includes("/") && !Q.includes(":") && (V.comfyClass === "LoadImage" || V.type === "LoadImage") && (Q = Qe.apiURL(`/view?filename=${encodeURIComponent(Q)}&type=input&subfolder=`)), Q)
        return String((M == null ? void 0 : M.name) || ""), { src: Q, sourceType: "widget", inputName: String((M == null ? void 0 : M.name) || "") };
    }
  }
  const f = $c(t == null ? void 0 : t.id), g = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && g.push(...f.pano_input_images), Array.isArray((_ = f == null ? void 0 : f.ui) == null ? void 0 : _.pano_input_images) && g.push(...f.ui.pano_input_images), g.length > 0)
    for (const d of g) {
      const M = Wn(d);
      if (M)
        return { src: M, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function jy(t, e = []) {
  const n = zy(t, e), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const a = Ph(i);
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = e.join("|") || "image", u = t.__panoLinkedInputImageCache.get(s);
  if (u && u.srcRaw === i && u.img) return u.img;
  const f = new Image(), g = { srcRaw: i, resolvedSrc: "", img: f };
  t.__panoLinkedInputImageCache.set(s, g);
  let b = -1;
  const _ = () => {
    var M, P;
    if (b += 1, b >= a.length) {
      try {
        (P = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || P.call(M, s);
      } catch {
      }
      String((n == null ? void 0 : n.sourceType) || ""), a.length;
      return;
    }
    const d = a[b];
    g.resolvedSrc = d, f.src = d;
  };
  return f.onload = () => {
    var d;
    String(g.resolvedSrc || f.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (d = t.setDirtyCanvas) == null || d.call(t, !0, !0);
  }, f.onerror = (d) => {
    var M, P;
    if (b + 1 < a.length) {
      _();
      return;
    }
    try {
      (P = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || P.call(M, s);
    } catch {
    }
    String(g.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((d == null ? void 0 : d.type) || "error");
  }, _(), f;
}
function Yo(t, e = [], n = null) {
  const i = jy(t, e);
  return i ? (typeof n == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => n(), { once: !0 })), i) : null;
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
function Ch(t, e) {
  t.__panoRenderCache || (t.__panoRenderCache = {
    mode: String(e || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = t.__panoRenderCache, i = String(e || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Mr(t, e, n = "") {
  const i = Ch(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), a = performance.now();
  return e ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < Sy ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function jc(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), a = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), s = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || i)), u = n / a, f = i / s, g = Math.min(u, f);
  return Number.isFinite(g) && g > 0 ? g : 1;
}
function Tf(t, e, n = 1) {
  const i = Number((e == null ? void 0 : e.x) || 0), a = Number((e == null ? void 0 : e.y) || 0), s = Number((e == null ? void 0 : e.w) || 0), u = Number((e == null ? void 0 : e.h) || 0);
  if (s <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), g = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), s * 0.44)), b = Math.max(Math.round(34 * n), f + Math.round(14 * n)), _ = i + (s - g) * 0.5, d = a + (u - b) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(_, d, g, b, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", _ + g * 0.5, d + b * 0.5 + 0.5), t.restore();
}
function ca(t, e, n = "Open editor and add frame") {
  var a;
  const i = (a = t == null ? void 0 : t.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = e ? "flex" : "none");
}
function Uy(t) {
  var i;
  const e = Array.isArray(t == null ? void 0 : t.shots) ? t.shots : [];
  if (!e.length) return null;
  const n = String(((i = t == null ? void 0 : t.active) == null ? void 0 : i.selected_shot_id) || "");
  if (n) {
    const a = e.find((s) => String((s == null ? void 0 : s.id) || "") === n);
    if (a) return a;
  }
  return e[0] || null;
}
function Ih(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), a = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), s = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), u = Number(e) > 0 ? Number(e) : 1;
  let f = a, g = a / u;
  return g > s && (g = s, f = s * u), {
    x: n + (a - f) * 0.5,
    y: i + (s - g) * 0.5,
    w: f,
    h: g
  };
}
function By(t, e, n, i = 0) {
  if (!t || !e || !n) return !1;
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (a <= 1 || s <= 1) return !1;
  const u = Ih(n, a / s);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(i) || 0));
  return f > 0 && (t.fillStyle = `rgba(0,0,0,${f})`, t.fillRect(u.x, u.y, u.w, u.h)), t.restore(), !0;
}
function Gy(t, e = null) {
  const i = Array.isArray(t.widgets) ? t.widgets : [];
  let a = 32;
  return i.forEach((s) => {
    var f;
    if (s === e || !s || s.hidden || s.type === "hidden") return;
    let u = 22;
    try {
      const g = typeof s.computeSize == "function" ? s.computeSize(((f = Ir(t)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(g) && Number.isFinite(Number(g[1])) && (u = Number(g[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function Do(t) {
  const n = Gy(t) + 2, i = 8, a = Ir(t), s = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || s < 80 ? null : { x: i, y: n, w: s, h: u };
}
function Eh(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(e || "");
  if (!i) return null;
  const a = Fy(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const s = window.__panoSharedImageCache.get(a);
  if (s != null && s.img)
    return t.__panoPreviewImageCache.set(i, { src: a, img: s.img }), s.img;
  const u = t.__panoPreviewImageCache.get(i);
  if (u && u.src === a) return u.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var g;
    return (g = t.setDirtyCanvas) == null ? void 0 : g.call(t, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), t.__panoPreviewImageCache.set(i, { src: a, img: f }), f;
}
function Ky(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((s, u) => Number((s == null ? void 0 : s.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function Th(t, e) {
  return ys(e, {
    selectedId: null,
    hoveredId: null
  });
}
function Dh(t, e, n) {
  return vh(e, (i, a) => Eh(t, i, a), { scene: n });
}
function Wy(t, e, n, i = 0.45) {
  const a = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3, u = (f) => {
    const g = f.x - a, b = f.y - s, _ = Math.hypot(g, b) || 1;
    return { x: f.x + g / _ * i, y: f.y + b / _ * i };
  };
  return [u(t), u(e), u(n)];
}
function Df(t, e, n, i, a, s, u, f) {
  const g = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(g) < 1e-6) return;
  const [b, _, d] = Wy(s, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(b.x, b.y), t.lineTo(_.x, _.y), t.lineTo(d.x, d.y), t.closePath(), t.clip();
  const M = (s.x * (i.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - i.y)) / g, P = (s.x * (a.x - i.x) + u.x * (n.x - a.x) + f.x * (i.x - n.x)) / g, T = (s.x * (i.x * a.y - a.x * i.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * i.y - i.x * n.y)) / g, E = (s.y * (i.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - i.y)) / g, C = (s.y * (a.x - i.x) + u.y * (n.x - a.x) + f.y * (i.x - n.x)) / g, V = (s.y * (i.x * a.y - a.x * i.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * i.y - i.x * n.y)) / g;
  t.transform(M, E, P, C, T, V), t.drawImage(e, 0, 0), t.restore();
}
function Rh(t, e, n, i) {
  const a = yc(t, e.right), s = yc(t, e.up), u = yc(t, e.fwd);
  if (u <= 1e-4) return null;
  const f = s / u / i, g = a / u / i;
  return { x: n.x + n.w * 0.5 + g * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Lh(t, e, n, i, a, s, u, f = 12, g = 9) {
  var nt;
  const b = U(Number(u.hFOV_deg || 30), 1, 179) * Wr, _ = U(Number(u.vFOV_deg || 30), 1, 179) * Wr, d = Math.tan(b * 0.5), M = Math.tan(_ * 0.5), P = u.crop || {}, T = U(Number(P.x0 ?? 0), 0, 1), E = U(Number(P.y0 ?? 0), 0, 1), C = U(Number(P.x1 ?? 1), 0, 1), V = U(Number(P.y1 ?? 1), 0, 1), A = Math.max(1e-4, C - T), F = Math.max(1e-4, V - E), L = vl(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), Y = [], I = [], ct = [], Q = [];
  for (let X = 0; X <= g; X++) {
    const at = X / g, B = (1 - (E + at * F) * 2) * M;
    for (let ot = 0; ot <= f; ot++) {
      const Nt = ot / f, Ct = ((T + Nt * A) * 2 - 1) * d, Lt = L.fwd.x + L.right.x * Ct + L.up.x * B, Ae = L.fwd.y + L.right.y * Ct + L.up.y * B, Oe = L.fwd.z + L.right.z * Ct + L.up.z * B, ke = Math.hypot(Lt, Ae, Oe) || 1e-8, Ce = Lt / ke, Ge = Ae / ke, Fe = Oe / ke, nn = Ce * i.right.x + Ge * i.right.y + Fe * i.right.z, Jn = Ce * i.up.x + Ge * i.up.y + Fe * i.up.z, S = Ce * i.fwd.x + Ge * i.fwd.y + Fe * i.fwd.z;
      if (S <= 1e-4)
        Y[X] || (Y[X] = []), I[X] || (I[X] = []), Y[X][ot] = null, I[X][ot] = null;
      else {
        const D = Jn / S / a, H = nn / S / a;
        Y[X] || (Y[X] = []), I[X] || (I[X] = []), Y[X][ot] = n.x + n.w * 0.5 + H * n.h * 0.5, I[X][ot] = n.y + n.h * 0.5 - D * n.h * 0.5;
      }
      ct[X] || (ct[X] = []), Q[X] || (Q[X] = []), ct[X][ot] = Nt, Q[X][ot] = at;
    }
  }
  const xt = (nt = s.assets) == null ? void 0 : nt[u.asset_id], z = Eh(e, u.asset_id, xt);
  if (!z || !z.complete || !z.naturalWidth) return;
  const ft = Number(z.naturalWidth || z.width || 1), St = Number(z.naturalHeight || z.height || 1), tt = f < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = tt;
  for (let X = 0; X < g; X++)
    for (let at = 0; at < f; at++) {
      const dt = Y[X][at], B = I[X][at], ot = Y[X][at + 1], Nt = I[X][at + 1], Dt = Y[X + 1][at], Ct = I[X + 1][at], Lt = Y[X + 1][at + 1], Ae = I[X + 1][at + 1];
      if (dt === null || ot === null || Dt === null || Lt === null) continue;
      const Oe = ct[X][at] * ft, ke = Q[X][at] * St, Ce = ct[X][at + 1] * ft, Ge = Q[X][at + 1] * St, Fe = ct[X + 1][at] * ft, nn = Q[X + 1][at] * St, Jn = ct[X + 1][at + 1] * ft, S = Q[X + 1][at + 1] * St;
      Df(t, z, { x: Oe, y: ke }, { x: Ce, y: Ge }, { x: Jn, y: S }, { x: dt, y: B }, { x: ot, y: Nt }, { x: Lt, y: Ae }), Df(t, z, { x: Oe, y: ke }, { x: Jn, y: S }, { x: Fe, y: nn }, { x: dt, y: B }, { x: Lt, y: Ae }, { x: Dt, y: Ct });
    }
}
function qy(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const i = _l(t), a = Do(t);
  if (!a) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const s = vl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(t.__panoPreviewView.fov || 100) * Wr * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(a.x, a.y, a.w, a.h, 8), e.fill(), e.stroke(), e.clip();
  const f = Yo(
    t,
    wl(t, ["erp_image", "bg_erp"]),
    () => {
      var L;
      return (L = t.setDirtyCanvas) == null ? void 0 : L.call(t, !0, !1);
    }
  ), g = !!(f && f.complete && (f.naturalWidth || f.width)), b = Vh(t), _ = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, d = b || _, M = Go, P = Th(t, i), T = Dh(t, i, P), E = bl(t.__panoPreviewView, i == null ? void 0 : i.coverage);
  let C = !1;
  if (t.__panoRuntimeCore || (t.__panoRuntimeCore = Li()), g) {
    const L = gs({
      stateRevision: [
        "runtime_panorama_scene",
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(T) ? T.map((ct) => `${String((ct == null ? void 0 : ct.assetId) || "")}:${String((ct == null ? void 0 : ct.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: f,
      backgroundRevision: [
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: P,
      textures: T,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), I = t.__panoRuntimeCore.syncState(L) ? t.__panoRuntimeCore.renderToTarget("runtime_preview", E, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    C = !!I, I && e.drawImage(I, a.x, a.y, a.w, a.h);
  }
  const V = d ? 8 : 12, A = d ? 6 : 9, F = Ky(t, i);
  if (!g || F.length === 0) {
    const L = jc(e == null ? void 0 : e.canvas, a);
    Oh(e, a, s, u, L);
  }
  !C && g && Xo(t, e, a, s, u, f, M), !C && F.length > 0 && F.forEach((L) => Lh(e, t, a, s, u, i, L, V, A)), e.restore();
}
function Yy(t, e, n, i, a = "preview_scene", s = "") {
  const u = String(
    s || [
      String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
      Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
      Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
    ].join("|")
  );
  return gs({
    stateRevision: [
      a,
      u,
      Number((e == null ? void 0 : e.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(i) ? i.map((f) => `${String((f == null ? void 0 : f.assetId) || "")}:${String((f == null ? void 0 : f.revision) || "")}`).join(",") : ""
    ].join("|"),
    backgroundSource: t,
    backgroundRevision: u,
    coverageDeg: Number((e == null ? void 0 : e.coverage) || 360) === 180 ? 180 : 360,
    scene: n,
    textures: i,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
}
function Ro(t, e, n, i) {
  var s, u, f, g, b, _;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (i && Array.isArray(i.graph_mouse) && i.graph_mouse.length >= 2)
    return {
      x: Number(i.graph_mouse[0]) - Number(((s = t == null ? void 0 : t.pos) == null ? void 0 : s[0]) || 0),
      y: Number(i.graph_mouse[1]) - Number(((u = t == null ? void 0 : t.pos) == null ? void 0 : u[1]) || 0)
    };
  if (i && typeof i.convertEventToCanvasOffset == "function" && e)
    try {
      const d = i.convertEventToCanvasOffset(e);
      if (Array.isArray(d) && d.length >= 2)
        return {
          x: Number(d[0]) - Number(((f = t == null ? void 0 : t.pos) == null ? void 0 : f[0]) || 0),
          y: Number(d[1]) - Number(((g = t == null ? void 0 : t.pos) == null ? void 0 : g[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(e == null ? void 0 : e.canvasX)) && Number.isFinite(Number(e == null ? void 0 : e.canvasY)))
    return {
      x: Number(e.canvasX) - Number(((b = t == null ? void 0 : t.pos) == null ? void 0 : b[0]) || 0),
      y: Number(e.canvasY) - Number(((_ = t == null ? void 0 : t.pos) == null ? void 0 : _[1]) || 0)
    };
  const a = Zy(t, e, i);
  return a || null;
}
function Xy(t, e) {
  var d, M;
  const n = Number(t == null ? void 0 : t.clientX), i = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const a = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, s = (d = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : d.call(a), u = (e == null ? void 0 : e.ds) || ((M = le == null ? void 0 : le.canvas) == null ? void 0 : M.ds);
  if (!s || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const g = Array.isArray(u.offset) ? u.offset : [0, 0], b = (n - Number(s.left || 0)) / f - Number(g[0] || 0), _ = (i - Number(s.top || 0)) / f - Number(g[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(_) ? null : { x: b, y: _ };
}
function Zy(t, e, n) {
  var a, s;
  const i = Xy(e, n || (le == null ? void 0 : le.canvas));
  return i ? {
    x: i.x - Number(((a = t == null ? void 0 : t.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((s = t == null ? void 0 : t.pos) == null ? void 0 : s[1]) || 0)
  } : null;
}
function lo(t) {
  if (t.__panoLegacyPreviewHooked) return;
  t.__panoPreviewMode, String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""), Ir(t), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", _h(t, 320, 180), xi(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var M, P;
    const d = e ? e.apply(this, arguments) : void 0;
    try {
      const T = arguments[0];
      T && !((M = this.flags) != null && M.collapsed) && (i.stepInertia(performance.now()) && ((P = this.setDirtyCanvas) == null || P.call(this, !0, !1)), qy(this, T, i));
    } catch {
    }
    return d;
  }, t.onResize = function() {
    var M;
    const d = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Zo(this, 150), (M = this.setDirtyCanvas) == null || M.call(this, !0, !0), Hh(this, 220, null), d;
  };
  const i = ms({
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
      Fh(t), (d = t.setDirtyCanvas) == null || d.call(t, !0, !1);
    }
  }), a = t.onMouseDown;
  t.onMouseDown = function(d, M, P) {
    var T;
    try {
      if (!((T = this.flags) != null && T.collapsed)) {
        const E = Ro(this, d, M, P) || { x: 0, y: 0 }, C = Ir(this), V = Number((C == null ? void 0 : C[0]) || 0), A = Number((C == null ? void 0 : C[1]) || 0);
        if (E.x >= V - 20 && E.y >= A - 20)
          return a ? a.apply(this, arguments) : void 0;
        const L = Do(this);
        if (If(E.x, E.y, L))
          return (d == null ? void 0 : d.button) === 0 && i.startDrag(E.x, E.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const s = t.onMouseMove;
  t.onMouseMove = function(d, M, P) {
    try {
      const T = Ro(this, d, M, P);
      if (i.state.drag.active) {
        if (typeof (d == null ? void 0 : d.buttons) == "number" && (d.buttons & 1) === 0)
          return i.endDrag(), !0;
        const E = T || i.state.drag;
        return i.moveDrag(E.x, E.y, "pano"), !0;
      }
    } catch {
    }
    return s ? s.apply(this, arguments) : void 0;
  };
  const u = t.onMouseUp;
  t.onMouseUp = function() {
    return i.state.drag.active ? (i.endDrag(), !0) : u ? u.apply(this, arguments) : void 0;
  };
  const f = t.onMouseLeave;
  t.onMouseLeave = function() {
    const d = f ? f.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), d;
  };
  const g = t.onMouseWheel;
  t.onMouseWheel = function(d, M, P) {
    var T, E;
    try {
      if ((T = this.flags) != null && T.collapsed) return g ? g.apply(this, arguments) : void 0;
      const C = Ro(this, d, M, P), V = Do(this);
      if (!C || !If(C.x, C.y, V)) return g ? g.apply(this, arguments) : void 0;
      const A = Number((d == null ? void 0 : d.deltaY) ?? (d == null ? void 0 : d.wheelDeltaY) ?? (typeof M == "number" ? M : 0));
      return i.applyWheel(Math.sign(A)) && ((E = this.setDirtyCanvas) == null || E.call(this, !0, !1)), typeof (d == null ? void 0 : d.preventDefault) == "function" && d.preventDefault(), typeof (d == null ? void 0 : d.stopPropagation) == "function" && d.stopPropagation(), !0;
    } catch {
      return g ? g.apply(this, arguments) : void 0;
    }
  };
  const b = t.onRemoved, _ = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = n, t.onDrawForeground = e, t.onMouseDown = a, t.onMouseMove = s, t.onMouseUp = u, t.onMouseLeave = f, t.onMouseWheel = g, t.onRemoved = b, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = _, t.onRemoved = function() {
    return _(), Sa.unregister(this), Wo.unregister(this), b ? b.apply(this, arguments) : void 0;
  };
}
function Jy(t, e) {
  const n = Yo(
    t,
    ["erp_image", "bg_erp"],
    () => {
      var u, f;
      return (f = (u = t.__panoDomPreview) == null ? void 0 : u.requestDraw) == null ? void 0 : f.call(u);
    }
  ), i = Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0), a = Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0);
  if (i > 1 && a > 1)
    return {
      kind: "ERP_GLOBAL",
      width: Math.max(1, Math.round(i)),
      height: Math.max(1, Math.round(a))
    };
  const s = Math.max(1, Number((e == null ? void 0 : e.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: s,
    height: Math.max(1, Math.round(s * 0.5))
  };
}
function Qy(t, e) {
  var b, _, d, M, P, T, E, C, V, A, F, L;
  const n = (_ = (b = e == null ? void 0 : e.painting) == null ? void 0 : b.paint) == null ? void 0 : _.strokes, i = (M = (d = e == null ? void 0 : e.painting) == null ? void 0 : d.mask) == null ? void 0 : M.strokes, a = Array.isArray(n) && n.length > 0, s = Array.isArray(i) && i.length > 0;
  if (!a && !s) return null;
  const u = Jy(t, e), f = `${u.width}x${u.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== f) && (t.__panoPreviewPaintEngine = Oc(u), t.__panoPreviewPaintDescriptorKey = f, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const g = {
    paint: n || null,
    mask: i || null,
    groups: ((P = e == null ? void 0 : e.painting) == null ? void 0 : P.groups) || null,
    rasterObjects: ((T = e == null ? void 0 : e.painting) == null ? void 0 : T.raster_objects) || null
  };
  return (((E = t.__panoPreviewPaintRevision) == null ? void 0 : E.paint) !== g.paint || ((C = t.__panoPreviewPaintRevision) == null ? void 0 : C.mask) !== g.mask || ((V = t.__panoPreviewPaintRevision) == null ? void 0 : V.groups) !== g.groups || ((A = t.__panoPreviewPaintRevision) == null ? void 0 : A.rasterObjects) !== g.rasterObjects) && (t.__panoPreviewPaintRevision = g, t.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    s ? "m1" : "m0",
    String(Array.isArray((F = e == null ? void 0 : e.painting) == null ? void 0 : F.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((L = e == null ? void 0 : e.painting) == null ? void 0 : L.raster_objects) ? e.painting.raster_objects.length : 0)
  ].join(":"), t.__panoPreviewPaintEngine.rebuildCommitted(e)), t.__panoPreviewPaintEngine;
}
function tb(t) {
  var n;
  return (Array.isArray((n = t == null ? void 0 : t.painting) == null ? void 0 : n.groups) ? t.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function eb(t, e) {
  const n = Qy(t, e);
  if (!n) return null;
  const i = tb(e);
  return n.getErpTarget(i).displayPaint.canvas;
}
function nb(t, e, n = null) {
  var f;
  const i = (f = e == null ? void 0 : e.painting_layer) == null ? void 0 : f.paint, a = Wn(i);
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
    const f = nb(t, e, () => {
      var g, b;
      return (b = (g = t.__panoDomPreview) == null ? void 0 : g.requestDraw) == null ? void 0 : b.call(g);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = e == null ? void 0 : e.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = eb(t, e);
  return a ? {
    source: a,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function rb(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function ib(t, e, n, i) {
  let a = (t == null ? void 0 : t[e]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, t[e] = a), a;
}
function ab(t, e, n, i, a, s) {
  if (!e || !n || !(i > 0) || !(a > 0)) return;
  const u = rb(n);
  if (u.width === i && u.height === a) {
    e.drawImage(n, 0, 0, i, a);
    return;
  }
  const g = ib(t, s, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!g) {
    e.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    g.clearRect(0, 0, u.width, u.height), g.drawImage(n, 0, 0, u.width, u.height);
    const b = g.getImageData(0, 0, u.width, u.height).data, _ = e.getImageData(0, 0, i, a), d = _.data, M = Math.max(0, u.width - 1), P = Math.max(0, u.height - 1);
    for (let T = 0; T < a; T += 1) {
      const E = (T + 0.5) * u.height / a - 0.5, C = U(Math.floor(E), 0, P), V = U(C + 1, 0, P), A = U(E - C, 0, 1);
      for (let F = 0; F < i; F += 1) {
        const L = (F + 0.5) * u.width / i - 0.5, Y = U(Math.floor(L), 0, M), I = U(Y + 1, 0, M), ct = U(L - Y, 0, 1);
        let Q = 0, xt = 0, z = 0, ft = 0;
        const St = (X, at, dt) => {
          const B = (at * u.width + X) * 4, ot = (b[B + 3] || 0) / 255;
          Q += ot * dt, xt += (b[B] || 0) / 255 * ot * dt, z += (b[B + 1] || 0) / 255 * ot * dt, ft += (b[B + 2] || 0) / 255 * ot * dt;
        };
        if (St(Y, C, (1 - ct) * (1 - A)), St(I, C, ct * (1 - A)), St(Y, V, (1 - ct) * A), St(I, V, ct * A), Q <= 1e-6) continue;
        const tt = (T * i + F) * 4, nt = 1 - Q;
        d[tt] = Math.round(U((xt + d[tt] / 255 * nt) * 255, 0, 255)), d[tt + 1] = Math.round(U((z + d[tt + 1] / 255 * nt) * 255, 0, 255)), d[tt + 2] = Math.round(U((ft + d[tt + 2] / 255 * nt) * 255, 0, 255)), d[tt + 3] = 255;
      }
    }
    e.putImageData(_, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, i, a);
  }
}
function Lf(t, e, n, i) {
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0)), f = `${String(e.currentSrc || e.src || "")}|${a}x${s}|${i}`;
  let g = t.__panoPreviewBgPaint;
  if (!g || g.__revKey !== f || g.width !== a || g.height !== s) {
    (!g || g.width !== a || g.height !== s) && (g = document.createElement("canvas"), g.width = a, g.height = s, t.__panoPreviewBgPaint = g);
    const b = g.getContext("2d");
    b.clearRect(0, 0, a, s), b.drawImage(e, 0, 0, a, s), ab(t, b, n, a, s, "__panoPreviewOverlayScratch"), g.__revKey = f;
  }
  return g;
}
function ob(t, e, n, i = null) {
  const a = String(t.__panoPreviewMode || "stickers");
  Ch(t, a);
  const s = _l(t), u = a === "cutout" ? $y(t, () => {
    var E, C;
    return (C = (E = t.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : C.call(E);
  }) : null, f = !!(u && u.complete && (u.naturalWidth || u.width)), g = e.parentElement, b = 1, _ = Math.max(1, Number((g == null ? void 0 : g.clientWidth) || e.clientWidth || 0)), d = Math.max(1, Number((g == null ? void 0 : g.clientHeight) || e.clientHeight || 0)), M = Math.max(64, Math.round(_ * b)), P = Math.max(64, Math.round(d * b)), T = e.getContext("2d");
  if (T)
    if (a === "cutout") {
      const E = Uy(s), C = Yo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var nt, X;
          return (X = (nt = t.__panoDomPreview) == null ? void 0 : nt.requestDraw) == null ? void 0 : X.call(nt);
        }
      ), V = !!(C && C.complete && (C.naturalWidth || C.width));
      (e.width !== M || e.height !== P) && (e.width = M, e.height = P);
      const A = { x: 0, y: 0, w: M, h: P }, F = f ? U(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : V ? U(Number((C.naturalWidth || C.width) / Math.max(1, Number(C.naturalHeight || C.height || 1))), 0.05, 20) : 1, L = E ? wi(E) : null, Y = U(Number((L == null ? void 0 : L.aspect) || F || 1), 0.05, 20), I = Ih(A, Y), ct = jc(e, A);
      T.setTransform(1, 0, 0, 1, 0, 0), T.fillStyle = "#070707", T.fillRect(0, 0, M, P);
      const Q = t == null ? void 0 : t.__panoCutoutPreviewSurface, xt = (Q == null ? void 0 : Q.source) || null;
      if (!!(xt && Number(xt.width || 0) > 1 && Number(xt.height || 0) > 1)) {
        T.drawImage(xt, I.x, I.y, I.w, I.h), ca(t, !1), Mr(t, !1, "");
        return;
      }
      let ft = "none", St = "Open editor and add frame", tt = "";
      if (f)
        T.drawImage(u, I.x, I.y, I.w, I.h);
      else if (tt = String((C == null ? void 0 : C.src) || ""), E)
        C && !V ? ft = "loading" : V ? (ft = "empty", St = "Open editor or run node") : (ft = "empty", St = "Connect ERP image");
      else {
        if (V) {
          const nt = Rf(t, s), X = nt != null && nt.source ? Lf(t, C, nt.source, nt.revision || "") : C;
          By(T, X, A, 0.44);
        }
        ft = "empty", St = "Open editor and add frame";
      }
      ft === "loading" ? (Tf(T, I, ct), ca(t, !1), Mr(t, !0, tt)) : ft === "empty" ? (ca(t, !0, St), Mr(t, !1, "")) : (ca(t, !1), Mr(t, !1, ""));
    } else {
      ca(t, !1), (e.width !== M || e.height !== P) && (e.width = M, e.height = P);
      const E = { x: 0, y: 0, w: M, h: P }, C = jc(e, E);
      T.setTransform(1, 0, 0, 1, 0, 0), T.clearRect(0, 0, M, P), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const V = vl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), A = Math.tan(Number(t.__panoPreviewView.fov || 100) * Wr * 0.5), F = Yo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var nt, X;
          return (X = (nt = t.__panoDomPreview) == null ? void 0 : nt.requestDraw) == null ? void 0 : X.call(nt);
        }
      ), L = !!(F && F.complete && (F.naturalWidth || F.width));
      T.fillStyle = "#1a1a1e", T.fillRect(0, 0, M, P);
      const Y = Th(t, s), I = Dh(t, s, Y), ct = bl(t.__panoPreviewView, s == null ? void 0 : s.coverage), Q = Rf(t, s), xt = (Q == null ? void 0 : Q.source) || null, z = L && xt ? Lf(t, F, xt, (Q == null ? void 0 : Q.revision) || "") : F, ft = z !== F ? String(z.__revKey || "") : F ? [
        String(F.currentSrc || F.src || ""),
        Number(F.naturalWidth || F.width || 0),
        Number(F.naturalHeight || F.height || 0)
      ].join("|") : "";
      t.__panoDomRuntimeCore || (t.__panoDomRuntimeCore = Li());
      let St = !1;
      if (L) {
        const X = t.__panoDomRuntimeCore.syncState(
          Yy(z, s, Y, I, "runtime_dom_scene", ft)
        ) ? t.__panoDomRuntimeCore.renderToTarget("runtime_preview", ct, {
          width: E.w,
          height: E.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        X && (T.drawImage(X, E.x, E.y, E.w, E.h), St = !0);
      }
      const tt = Y.stickers;
      if (L && St)
        Mr(t, !1, "");
      else if (L)
        Xo(t, T, E, V, A, z, Go), Mr(t, !1, "");
      else if (xt)
        Xo(t, T, E, V, A, xt, Go), Mr(t, !!F && !L, String((F == null ? void 0 : F.src) || ""));
      else {
        const nt = !!F && !L;
        Mr(t, nt, String((F == null ? void 0 : F.src) || "")), nt && Tf(T, E, C);
      }
      if ((!L || tt.length === 0) && Oh(T, E, V, A, C), !St && tt.length > 0) {
        const nt = Vh(t), X = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, at = nt || X, dt = at ? 8 : 12, B = at ? 6 : 9;
        tt.forEach((ot) => Lh(T, t, E, V, A, s, ot, dt, B));
      } else if (!F || !L) {
        const nt = Math.max(14, Math.round(16 * C));
        T.fillStyle = "rgba(212,212,216,0.85)", T.font = `600 ${nt}px Plus Jakarta Sans, Geist, sans-serif`, T.textAlign = "center", T.fillText("Open editor to add stickers", M * 0.5, P * 0.5 + 24 * C);
      }
    }
}
function Xo(t, e, n, i, a, s, u = wy) {
  const f = _l(t), g = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  t.__panoBackgroundCore || (t.__panoBackgroundCore = Li());
  const b = gs({
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
  if (!t.__panoBackgroundCore.syncState(b)) return;
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
function Of(t, e, n, i, a, s, u = 1) {
  let f = !1;
  t.strokeStyle = s, t.lineWidth = u, t.beginPath();
  for (const g of e) {
    const b = Rh(g, n, i, a);
    if (!b) {
      f = !1;
      continue;
    }
    f ? t.lineTo(b.x, b.y) : (t.moveTo(b.x, b.y), f = !0);
  }
  t.stroke();
}
function Oh(t, e, n, i, a = 1) {
  t.save();
  const s = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let b = -75; b <= 75; b += 15) {
    const _ = [];
    for (let d = -180; d <= 180; d += 15) _.push(Hr(d, b));
    Of(t, _, n, e, i, b === 0 ? u : s, b === 0 ? 1.5 : 1);
  }
  for (let b = -180; b <= 180; b += 45) {
    const _ = [];
    for (let d = -89; d <= 89; d += 15) _.push(Hr(b, d));
    Of(t, _, n, e, i, b % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : s, b % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: Hr(0, 0) },
    { name: "Right", dir: Hr(90, 0) },
    { name: "Back", dir: Hr(180, 0) },
    { name: "Left", dir: Hr(-90, 0) }
  ];
  t.fillStyle = "rgba(250, 250, 250, 0.32)";
  const g = Math.max(9, Math.round(11 * a));
  t.font = `500 ${g}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", f.forEach((b) => {
    const _ = Rh(b.dir, n, e, i);
    _ && t.fillText(b.name, _.x, _.y + 20 * a);
  }), t.restore();
}
function sb(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function Fh(t) {
  const e = sb(t);
  e.dragging = !1, e.hqFrames = xy;
}
function Zo(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function Vh(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function cb(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function lb(t, e, n = 20) {
  var u;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const i = (u = e.getBoundingClientRect) == null ? void 0 : u.call(e);
  if (!i) return !1;
  const a = Number(t.clientX) - Number(i.left || 0), s = Number(t.clientY) - Number(i.top || 0);
  return a >= i.width - n && s >= i.height - n;
}
function gi(t, e) {
  return lb(t, e) ? !1 : (cb(t), !0);
}
function ub() {
  var n;
  const t = (n = le == null ? void 0 : le.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function fb(t) {
  var n;
  if (!t) return;
  const e = (n = le == null ? void 0 : le.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function db(t, e = 360, n = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const i = Ir(t), a = Number((i == null ? void 0 : i[0]) || 0), s = Number((i == null ? void 0 : i[1]) || 0);
  if (!Number.isFinite(a) || !Number.isFinite(s) || a >= e && s >= n) return;
  const u = [Math.max(e, a), Math.max(n, s)];
  try {
    typeof t.setSize == "function" ? t.setSize(u) : t.size = u, t.__panoStandaloneBootSized = !0;
  } catch (f) {
    String((f == null ? void 0 : f.message) || f || "unknown");
  }
}
function hb(t, e = 0, n = null, i = 1200) {
  const a = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = a > 0, !(a <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var s, u;
    t.__panoBootMinHeightTimer = null, (s = t == null ? void 0 : t.__panoDomPreview) != null && s.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, n == null || n(), (u = t.setDirtyCanvas) == null || u.call(t, !0, !0));
  }, Math.max(0, Number(i || 0))));
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
      t.__panoUserResized = !0, Zo(t, 150), e == null || e(), Hh(t, 180, e);
    }
  };
}
function Hh(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    t.__panoResizeSettleTimer = null, n == null || n(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function xi(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function pb(t, e = {}) {
  var dt;
  const n = e.__allowStandalone === !0, i = Py(t);
  if (i && !n) {
    wh(t);
    return;
  }
  i && db(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", Wo.register(t);
  const a = t.__panoPreviewMode === "stickers", s = e.__noLegacyFallback === !0, u = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null, String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""), a || Sa.unregister(t);
  const f = String(e.__panoForcedPath || "").trim(), g = a ? xh(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Kr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (g.chosenPath = f, g.reason = "controller_target_backend");
  const b = a ? g.chosenPath : "dom", _ = g.signature || Kr(t);
  if (Number(t.__panoRebindGeneration || 0), Hc(t), t == null || t.id, t.__panoPreviewMode, g.reason, g.frontendVersionRaw, t.addDOMWidget, Ir(t), t.__panoFrontendSig = _, t.__panoStickersPath = b, a && Sa.register(t), a && b === "legacy_draw") {
    if (s) return;
    Ti(t, { keepMonitor: !0 }), lo(t);
    return;
  }
  if ((dt = t.__panoDomPreview) != null && dt.widget) return;
  if (t.__panoLegacyPreviewHooked && Ti(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    a && !s && lo(t);
    return;
  }
  const d = e.noPreview === !0, M = a || d ? 0 : 56, P = document.createElement("div");
  if (My(), P.className = "pano-node-preview-dom", P.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), d && P.classList.add("pano-node-preview--no-preview"), P.setAttribute("data-capture-wheel", "true"), P.setAttribute("tabindex", "-1"), P.style.cssText = [
    "width:100%",
    d ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), d) {
    const B = t.addDOMWidget(Vc(), "preview", P, Ff(t, null));
    xi(t), t.__panoDomPreview = { widget: B, root: P, requestDraw: () => {
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
  const E = document.createElement("canvas");
  E.style.cssText = [
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
  const C = document.createElement("div");
  C.style.cssText = [
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
  ].join(";"), C.textContent = "Open editor and add frame", T.appendChild(E), T.appendChild(C), P.appendChild(T), _h(t, 120, 120), xi(t);
  let V = null;
  try {
    hb(t, M, () => {
      var B, ot;
      return (ot = (B = t.__panoDomPreview) == null ? void 0 : B.requestDraw) == null ? void 0 : ot.call(B);
    }), V = t.addDOMWidget(
      Vc(),
      "preview",
      P,
      Ff(t, () => {
        var B, ot;
        return (ot = (B = t.__panoDomPreview) == null ? void 0 : B.requestDraw) == null ? void 0 : ot.call(B);
      }, M)
    );
  } catch {
    a && lo(t);
    return;
  }
  const A = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, F = () => {
    A.needsDraw = !0, A.raf || (A.raf = requestAnimationFrame(I));
  }, L = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Zo(t, 150), F();
  }) : null;
  L == null || L.observe(T);
  const Y = () => {
    if (!a || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const B = 3, ot = (Nt) => {
      requestAnimationFrame(() => {
        var Ct;
        const Dt = !!(P != null && P.isConnected && (T != null && T.isConnected) && (E != null && E.isConnected) && Number(T.clientHeight || 0) > 0 && Number(E.clientHeight || 0) > 0);
        if (!Dt && Nt < B) {
          ot(Nt + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, t.__panoPreviewMode, Number((T == null ? void 0 : T.clientHeight) || 0), Number((E == null ? void 0 : E.clientHeight) || 0), !Dt) {
          if (s) {
            t.__panoPreviewMode, Number((T == null ? void 0 : T.clientHeight) || 0), Number((E == null ? void 0 : E.clientHeight) || 0);
            return;
          }
          Ti(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", lo(t), (Ct = t.setDirtyCanvas) == null || Ct.call(t, !0, !0);
        }
      });
    };
    ot(1);
  }, I = (B) => {
    var Nt, Dt, Ct;
    A.raf = 0;
    const ot = ct.stepInertia(B);
    (A.needsDraw || ot) && (A.needsDraw = !1, (Nt = t.flags) != null && Nt.collapsed || ob(t, E, null, ct), (Dt = t.setDirtyCanvas) == null || Dt.call(t, !0, !1)), (ot || A.needsDraw) && (A.raf = requestAnimationFrame(I)), Ny() && (!t.__panoDebugLastTs || B - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = B, t.__panoPreviewMode, Ir(t), sa(P), sa(T), sa(E), sa(P.parentElement), sa((Ct = P.parentElement) == null ? void 0 : Ct.parentElement), Number(E.width || 0), Number(E.height || 0), void 0);
  }, ct = ms({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (B) => {
      t.__panoPreviewView = B;
    },
    onInteraction: () => {
      F();
    }
  });
  E.addEventListener("pointerdown", (B) => {
    var ot, Nt;
    gi(B, T) && u && B.button === 0 && ((ot = P.focus) == null || ot.call(P), (Nt = E.setPointerCapture) == null || Nt.call(E, B.pointerId), E.style.cursor = "grabbing", ct.startDrag(B.clientX, B.clientY, B.pointerId));
  }), E.addEventListener("pointermove", (B) => {
    !u || !ct.state.drag.active || (gi(B, T), ct.moveDrag(B.clientX, B.clientY, "pano"));
  });
  const Q = (B) => {
    var ot;
    !u || !ct.state.drag.active || (gi(B, T), (ot = E.releasePointerCapture) == null || ot.call(E, B.pointerId), E.style.cursor = "grab", ct.endDrag(), Fh(t), F());
  };
  E.addEventListener("pointerup", Q), E.addEventListener("pointercancel", Q), E.addEventListener("pointerleave", (B) => {
    ct.state.drag.active && Q(B);
  });
  const xt = (B) => {
    var Nt, Dt, Ct;
    if (!gi(B, T) || !u) return;
    const ot = ub();
    ct.applyWheelEvent(B) && F(), (Nt = B.preventDefault) == null || Nt.call(B), (Dt = B.stopPropagation) == null || Dt.call(B), (Ct = B.stopImmediatePropagation) == null || Ct.call(B), requestAnimationFrame(() => {
      var Lt, Ae;
      fb(ot), (Ae = (Lt = le == null ? void 0 : le.canvas) == null ? void 0 : Lt.setDirty) == null || Ae.call(Lt, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((B) => {
    T.addEventListener(B, xt, { passive: !1, capture: !0 }), E.addEventListener(B, xt, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((B) => {
    E.addEventListener(B, (ot) => gi(ot, T)), T.addEventListener(B, (ot) => gi(ot, T));
  });
  const z = La(t, "state_json");
  if (z && !z.__panoPreviewPatchedCb) {
    z.__panoPreviewPatchedCb = !0;
    const B = z.callback;
    z.callback = (ot) => {
      const Nt = B ? B(ot) : void 0;
      return F(), Nt;
    };
  }
  const ft = La(t, "bg_color");
  if (ft && !ft.__panoPreviewPatchedCb) {
    ft.__panoPreviewPatchedCb = !0;
    const B = ft.callback;
    ft.callback = (ot) => {
      const Nt = B ? B(ot) : void 0;
      return F(), Nt;
    };
  }
  const St = t.onRemoved, tt = t.onResize, nt = t.onExecuted;
  t.onExecuted = function(B) {
    Hy(t, B), zc(t), xi(t), F();
    const ot = nt ? nt.apply(this, arguments) : void 0;
    return xi(t), ot;
  };
  const X = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return zc(t), xi(t), F(), X ? X.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var ot;
    const B = tt ? tt.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Zo(this, 150), F(), (ot = this.setDirtyCanvas) == null || ot.call(this, !0, !1), B;
  }, t.onRemoved = function() {
    return at(), Sa.unregister(this), Wo.unregister(this), St ? St.apply(this, arguments) : void 0;
  };
  const at = () => {
    var B;
    A.raf && cancelAnimationFrame(A.raf), (B = L == null ? void 0 : L.disconnect) == null || B.call(L), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = tt, t.onExecuted = nt, t.onConnectionsChange = X, t.onRemoved = St;
  };
  t.__panoDomRestore = at, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: V, root: P, canvas: E, requestDraw: F, state: A, emptyHintEl: C }, Y(), F();
}
function Vf(t, e = {}) {
  Sh(t).attach({
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
function gb(t, e) {
  const n = t * Jo, i = e * Jo, a = Math.cos(i);
  return Yr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function mb(t, e, n = 0) {
  const i = gb(t, e), a = Yr(0, 1, 0);
  let s = $f(a, i);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Yr(1, 0, 0)), s = fo(s);
  const u = fo($f(i, s)), f = n * Jo, g = Math.cos(f), b = Math.sin(f), _ = Hf(uo(s, g), uo(u, b)), d = Hf(uo(s, -b), uo(u, g));
  return { fwd: i, right: fo(_), up: fo(d) };
}
const ho = 140, yb = 180, zf = 40, bc = 10;
function jf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":");
  return { full: e, tail: String(n[n.length - 1] || "").trim() };
}
function Uf(t, e) {
  const n = jf(t), i = jf(e);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Bf(t) {
  var s;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "").trim();
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e);
  const i = String(
    t.storage || (String(t.type || "").trim().toLowerCase() === "comfy_image" ? "output" : t.type) || "output"
  );
  n.set("type", i), t.subfolder && n.set("subfolder", String(t.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((s = Qe) == null ? void 0 : s.apiURL) == "function" ? Qe.apiURL(a) : a;
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
      const i = Na(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Bf(t);
}
function Gf(t) {
  var a;
  const e = (a = dn) == null ? void 0 : a.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let i = null;
  if (e instanceof Map ? i = e.get(t) || e.get(n) || e.get(Number(n)) || null : i = e[t] || e[n] || null, i) return i;
  if (e instanceof Map) {
    for (const s of e.keys())
      if (Uf(s, n)) return e.get(s);
  } else
    for (const s of Object.keys(e))
      if (Uf(s, n)) return e[s];
  return null;
}
function bb(t, e = "erp_image") {
  var T, E, C, V, A, F, L, Y, I, ct, Q, xt;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let i = null;
  const a = n.find((z) => String((z == null ? void 0 : z.name) || "") === String(e));
  if ((a == null ? void 0 : a.link) != null && (i = a.link), i == null) {
    const z = n.find((ft) => String((ft == null ? void 0 : ft.type) || "").toUpperCase() === "IMAGE" && (ft == null ? void 0 : ft.link) != null);
    (z == null ? void 0 : z.link) != null && (i = z.link);
  }
  if (i == null) return "";
  const s = ((E = (T = t == null ? void 0 : t.graph) == null ? void 0 : T.links) == null ? void 0 : E[i]) || ((A = (V = (C = dn) == null ? void 0 : C.graph) == null ? void 0 : V.links) == null ? void 0 : A[i]);
  if (!s) return "";
  const u = Number(s.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (Y = (L = (F = dn) == null ? void 0 : F.graph) == null ? void 0 : L.getNodeById) == null ? void 0 : Y.call(L, u), g = Gf(u), b = Gf(t == null ? void 0 : t.id), _ = [
    g == null ? void 0 : g.images,
    (I = g == null ? void 0 : g.ui) == null ? void 0 : I.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    (ct = b == null ? void 0 : b.ui) == null ? void 0 : ct.pano_input_images,
    b == null ? void 0 : b.pano_input_images
  ];
  for (const z of _)
    if (Array.isArray(z))
      for (const ft of z) {
        const St = Na(ft);
        if (St) return St;
      }
  let d = [];
  try {
    d = typeof ((Q = dn) == null ? void 0 : Q.getNodeImageUrls) == "function" ? dn.getNodeImageUrls(f) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const z of d) {
      const ft = Na(z);
      if (ft) return ft;
    }
  if (f) {
    const z = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const ft of z) {
      const St = Na(ft);
      if (St) return St;
    }
  }
  const M = (xt = f == null ? void 0 : f.widgets) == null ? void 0 : xt.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image"), P = String((M == null ? void 0 : M.value) || "").trim();
  return P ? Qe.apiURL(`/view?filename=${encodeURIComponent(P)}&type=input&subfolder=`) : "";
}
function Kf(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function Wf(t, e, n, i, a, s) {
  var d, M, P;
  if (e.clearRect(0, 0, n, i), e.fillStyle = "#070707", e.fillRect(0, 0, n, i), !s || !s.complete || !(s.naturalWidth || s.width) || n <= 1 || i <= 1) {
    Kf(e, n, i);
    return;
  }
  const u = mb(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * Jo * 0.5), g = Number(((P = (M = (d = t == null ? void 0 : t.widgets) == null ? void 0 : d.find) == null ? void 0 : M.call(d, (T) => (T == null ? void 0 : T.name) === "coverage")) == null ? void 0 : P.value) || 360) === 180 ? 180 : 360;
  t.__panoStandaloneCore || (t.__panoStandaloneCore = Li());
  const b = gs({
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
  !!t.__panoStandaloneCore.syncState(b) && (() => {
    const T = t.__panoStandaloneCore.renderToTarget(
      "preview_node",
      _y(a, g),
      { width: n, height: i, dpr: window.devicePixelRatio || 1 }
    );
    return T ? (e.drawImage(T, 0, 0, n, i), !0) : !1;
  })() || (Xo(t, e, { x: 0, y: 0, w: n, h: i }, u, f, s, Go), Kf(e, n, i));
}
function qf(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class vb {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = ms({
      getView: () => this.view,
      setView: (i) => {
        this.view = {
          yaw: Re(Number((i == null ? void 0 : i.yaw) || 0)),
          pitch: U(Number((i == null ? void 0 : i.pitch) || 0), -89.9, 89.9),
          fov: U(Number((i == null ? void 0 : i.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, s, u, f;
        const i = (s = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : s.call(a);
        return {
          w: Math.max(1, Number((i == null ? void 0 : i.width) || ((u = this.canvas) == null ? void 0 : u.clientWidth) || 0)),
          h: Math.max(1, Number((i == null ? void 0 : i.height) || ((f = this.canvas) == null ? void 0 : f.clientHeight) || 0))
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
    var i, a, s;
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
    const n = ((s = (a = (i = this.node) == null ? void 0 : i.widgets) == null ? void 0 : a.find) == null ? void 0 : s.call(a, (u) => (u == null ? void 0 : u.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...u) => {
      const f = e.orig.coverageWidgetCallback ? e.orig.coverageWidgetCallback(...u) : void 0;
      return e.requestDraw(), f;
    });
  }
  installErrorForeground() {
    const e = this;
    this.node.onDrawForeground = function(n) {
      var s;
      const i = e.orig.onDrawForeground ? e.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (s = this.flags) != null && s.collapsed || !e.errorText) return i;
      const a = e.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(a.x, a.y, a.w, a.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(e.errorText, a.x + a.w * 0.5, a.y + a.h * 0.5), n.restore(), i;
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
        const i = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const s = i ? i(a) || {} : {};
          return {
            ...s,
            minHeight: Math.max(ho, Number(s.minHeight || 0)),
            minWidth: Math.max(yb, Number(s.minWidth || 0))
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
    const i = (a) => {
      var s, u;
      this.controller.state.drag.active && ((s = e.releasePointerCapture) == null || s.call(e, a.pointerId), e.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    };
    e.addEventListener("pointerup", i), e.addEventListener("pointercancel", i), n.addEventListener("wheel", (a) => {
      var s;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (s = a.stopImmediatePropagation) == null || s.call(a);
    }, { passive: !1, capture: !0 });
  }
  attachLegacy() {
    const e = this;
    this.node.onDrawForeground = function(n) {
      const i = e.orig.onDrawForeground ? e.orig.onDrawForeground.apply(this, arguments) : void 0;
      return e.drawLegacy(n), i;
    }, this.node.onMouseDown = function(n, i) {
      var u;
      const a = e.localPoint(i);
      if (!a) return e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
      const s = e.getLegacyPreviewRect();
      return qf(a.x, a.y, s) ? (e.legacyDragPointer = !0, e.controller.startDrag(a.x - s.x, a.y - s.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, i) {
      var u;
      if (!e.legacyDragPointer || !e.controller.state.drag.active)
        return e.orig.onMouseMove ? e.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = e.localPoint(i);
      if (!a) return !0;
      const s = e.getLegacyPreviewRect();
      return e.controller.moveDrag(a.x - s.x, a.y - s.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !e.legacyDragPointer && !e.controller.state.drag.active ? e.orig.onMouseUp ? e.orig.onMouseUp.apply(this, arguments) : void 0 : (e.legacyDragPointer = !1, e.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, i, a) {
      var b, _, d, M, P, T;
      const s = Ro(this, n, i, a), u = e.getLegacyPreviewRect();
      if (!s || !qf(s.x, s.y, u))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof i == "number" ? i : 0));
      Number(((b = e.view) == null ? void 0 : b.fov) || 100);
      const g = e.controller.applyWheel(Math.sign(f));
      return Number(((_ = e.view) == null ? void 0 : _.fov) || 100), g && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (M = n == null ? void 0 : n.preventDefault) == null || M.call(n), (P = n == null ? void 0 : n.stopPropagation) == null || P.call(n), (T = n == null ? void 0 : n.stopImmediatePropagation) == null || T.call(n), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var i, a, s, u;
    const e = Math.max(80, Number(((a = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : a[0]) || 0) - bc * 2), n = Math.max(60, Number(((u = (s = this.node) == null ? void 0 : s.size) == null ? void 0 : u[1]) || 0) - zf - bc);
    return { x: bc, y: zf, w: e, h: n };
  }
  drawLegacy(e) {
    var i, a;
    if (!e || (a = (i = this.node) == null ? void 0 : i.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (e.save(), e.translate(n.x, n.y), Wf(this.node, e, n.w, n.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, n.w, n.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), e.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const e = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, i = Math.max(1, Math.round(e.width * n)), a = Math.max(1, Math.round(e.height * n));
    (this.canvas.width !== i || this.canvas.height !== a) && (this.canvas.width = i, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    const e = bb(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (Wf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (s = (a = this.node).setDirtyCanvas) == null || s.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var n, i, a, s, u, f, g, b, _, d, M;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (i = this.resizeObserver) == null ? void 0 : i.disconnect) == null || a.call(i), this.resizeObserver = null;
    try {
      (u = (s = this.root) == null ? void 0 : s.remove) == null || u.call(s);
    } catch {
    }
    if (Array.isArray((f = this.node) == null ? void 0 : f.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((P) => P !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const e = ((_ = (b = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : b.find) == null ? void 0 : _.call(b, (P) => (P == null ? void 0 : P.name) === "coverage")) || null;
    e && (e.callback = this.orig.coverageWidgetCallback), (M = (d = this.node.__panoStandaloneCore) == null ? void 0 : d.dispose) == null || M.call(d), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function _b(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const n = new vb(t, e);
  t.__panoPreviewNodeRuntime = n, n.attach();
}
function wb(t, e, n) {
  if (!(t != null && t.prototype) || typeof n != "function") return;
  const i = `__panoLifecyclePatched_${String(e)}`;
  if (t[i]) return;
  t[i] = !0;
  const a = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const f = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const s = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const f = s ? s.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const u = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const f = u ? u.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
}
function $h(t) {
  return !!(t != null && t.prototype);
}
function Uc(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function xb(t, e = {}) {
  $h(t) || _b(t, {
    ...e,
    onOpen: Uc(t, e.onOpen)
  });
}
function Sb(t, e = {}) {
  if (!$h(t)) {
    Vf(t, {
      ...e,
      onOpen: Uc(t, e.onOpen)
    });
    return;
  }
  wb(t, "cutout_preview", (n) => {
    Vf(n, {
      ...e,
      onOpen: Uc(n, e.onOpen)
    });
  });
}
const an = {
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
}, ir = "pen";
function Yf(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function Nb(t = 80, e = null, n = 8) {
  const i = [];
  let a = -1;
  const s = Math.max(1, Number(t || 80)), u = Math.max(1, Number(n || 8));
  function f(b) {
    if (i.splice(0, i.length), a = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((d) => {
      i.push(String(d || ""));
    }), !i.length)) return;
    const _ = Number(b.index);
    Number.isInteger(_) ? _ === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, _)) : a = i.length - 1;
  }
  function g(b) {
    i[a] !== b && (i.splice(a + 1), i.push(b), i.length > s && i.shift(), a = i.length - 1);
  }
  return f(e), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(b) {
      g(String(b || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const b = a - 1;
      return b < 0 || b >= i.length ? null : (a = b, i[a]);
    },
    redo() {
      const b = a + 1;
      return b < 0 || b >= i.length ? null : (a = b, i[a]);
    },
    get entries() {
      return i.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const b = i.length, _ = Math.max(0, b - u), d = a >= 0 ? Math.max(0, Math.min(a, _)) : _, M = i.slice(d, d + u), P = a < 0 ? -1 : Math.max(-1, Math.min(M.length - 1, a - d));
      return {
        version: 1,
        entries: M,
        index: P
      };
    },
    hydrate: f
  };
}
function Qt(t, e = null) {
  const n = Number(t);
  return Number.isFinite(n) ? n : e;
}
function Mb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function kb(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const i of t) {
    if (!i || typeof i != "object") continue;
    const a = String(i.actionGroupId || i.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const s = Qt(i.z_index ?? i.zIndex, e.length);
    e.push({
      id: String(i.id || a),
      type: "strokeGroup",
      actionGroupId: a,
      z_index: Math.max(0, Math.round(s ?? e.length)),
      locked: i.locked === !0
    });
  }
  return e;
}
function Pb(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Ab(t, e) {
  if (!t || typeof t != "object" || !e) return null;
  const n = Qt(t.t, 0), i = Qt(t.widthScale, null), a = Qt(t.pressureLike, null);
  if (e.kind === "ERP_GLOBAL") {
    const s = Qt(t.u, null), u = Qt(t.v, null);
    if (s == null || u == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (s % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return i != null && (f.widthScale = Math.max(0, i)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  if (e.kind === "FRAME_LOCAL") {
    const s = Qt(t.u, null), u = Qt(t.v, null);
    if (s == null || u == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: e.frameId,
      u: s,
      v: u,
      t: n
    };
    return i != null && (f.widthScale = Math.max(0, i)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  return null;
}
function po(t, e, n = 1) {
  if (!Array.isArray(t)) return null;
  const i = [];
  for (const a of t) {
    const s = Ab(a, e);
    if (!s) return null;
    i.push(s);
  }
  return i.length >= n ? i : null;
}
function Cb(t, e, n, i) {
  if (!t || typeof t != "object") return null;
  const a = String(t.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
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
function Ib(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = Pb(t.targetSpace);
  if (!n) return null;
  const i = String(t.toolKind || "").trim(), a = Cb(t.geometry, n, i, e === "paint");
  if (!a) return null;
  const s = Qt(t.size, null), u = Qt(t.opacity, null);
  if (s == null || u == null) return null;
  const f = String(t.id || "").trim(), g = String(t.actionGroupId || "").trim();
  if (!f || !g) return null;
  const b = Qt(t.radiusValue, null), _ = String(t.radiusModel || "").trim() || null;
  let d = null;
  if (e === "paint") {
    const M = t.color;
    if (!M || typeof M != "object") return null;
    d = {
      r: Math.max(0, Math.min(1, Qt(M.r, 0))),
      g: Math.max(0, Math.min(1, Qt(M.g, 0))),
      b: Math.max(0, Math.min(1, Qt(M.b, 0))),
      a: Math.max(0, Math.min(1, Qt(M.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: g,
    targetSpace: n,
    layerKind: e,
    toolKind: i,
    brushPresetId: String(t.brushPresetId || "").trim() || null,
    size: Math.max(0, s),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: Qt(t.hardness, null),
    flow: Qt(t.flow, null),
    spacing: Qt(t.spacing, null),
    createdAt: Math.trunc(Qt(t.createdAt, 0)),
    color: d,
    radiusModel: _,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: a
  };
}
function Xf(t, e) {
  const n = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return n;
  for (const i of t.strokes) {
    const a = Ib(i, e);
    a && n.strokes.push(a);
  }
  return n;
}
function Eb(t) {
  if (!t || typeof t != "object") return null;
  const e = Qt(t.u0, null), n = Qt(t.v0, null), i = Qt(t.u1, null), a = Qt(t.v1, null);
  if (e == null || n == null || i == null || a == null) return null;
  const s = (f) => Math.max(0, Math.min(1, f)), u = { u0: s(e), v0: s(n), u1: s(i), v1: s(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function Tb(t) {
  const e = t || {};
  return {
    du: Qt(e.du, 0) ?? 0,
    dv: Qt(e.dv, 0) ?? 0,
    rot_deg: Qt(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Qt(e.scale, 1) ?? 1)
  };
}
function Db(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const n = String(t.id || "").trim();
  if (!n) return null;
  const i = String(t.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(t.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const s = Eb(t.bbox);
  return s ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, Qt(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: s,
    rasterDataUrl: a,
    transform: Tb(t.transform)
  } : null;
}
function Rb(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const i of t) {
    const a = Db(i, e.length);
    !a || n.has(a.id) || (n.add(a.id), e.push(a));
  }
  return e;
}
function Ma(t) {
  const e = Mb();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: kb(t.groups),
    paint: Xf(t.paint, "paint"),
    mask: Xf(t.mask, "mask"),
    raster_objects: Rb(t.raster_objects)
  };
}
const ee = {
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
      const i = { ...e.attrs };
      return e.tag === "button" && i.type == null && (i.type = e.type), e.label && (i["aria-label"] = e.label), e.tip && (i["data-tip"] = e.tip), e.pressed != null && (i["aria-pressed"] = e.pressed), i;
    });
    return (i, a) => (ye(), Fi(um(t.tag), uh({
      class: ["pano-btn pano-btn-icon", t.extraClass]
    }, n.value, { innerHTML: t.icon }), null, 16, ["class", "innerHTML"]));
  }
}, Lb = { class: "pano-floating-right" }, Ob = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (ye(), Le("div", Lb, [
      n[0] || (n[0] = xe("span", {
        class: "pano-fov-value",
        "data-fov-value": "",
        "aria-label": "Field of view"
      }, "100°", -1)),
      (ye(!0), Le(ze, null, Ai(t.buttons, (i) => (ye(), Fi(Qo, {
        key: i.action,
        icon: i.icon,
        label: i.label,
        tip: i.tip,
        pressed: i.pressed,
        attrs: { "data-action": i.action }
      }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, Fb = {
  class: "pano-paint-dock is-hidden",
  "data-paint-dock": ""
}, Vb = ["data-paint-pane"], Hb = {
  key: 0,
  class: "pano-paint-color-float",
  "data-paint-color-row": "",
  hidden: ""
}, $b = ["data-paint-color-swatch", "aria-label"], zb = ["data-paint-footer"], jb = ["data-paint-group"], Ub = ["hidden"], Bb = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] }
  },
  setup(t) {
    function e(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    return (n, i) => (ye(), Le("div", Fb, [
      (ye(!0), Le(ze, null, Ai(t.panes, (a) => (ye(), Le("div", {
        key: a.key,
        class: "pano-paint-pane",
        "data-paint-pane": a.key
      }, [
        a.showColorFloat ? (ye(), Le("div", Hb, [
          (ye(!0), Le(ze, null, Ai(t.paintSwatches, (s) => (ye(), Le("button", {
            key: s.id,
            class: "pano-paint-color-dot",
            type: "button",
            "data-paint-color-swatch": s.id,
            "aria-label": s.label,
            style: cs(e(s))
          }, null, 12, $b))), 128)),
          i[0] || (i[0] = lh('<button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color"></button><div class="pano-paint-color-pop" data-paint-color-pop hidden><div class="pano-paint-color-pop-head"><span class="pano-paint-color-preview" data-paint-color-preview></span><span class="pano-paint-color-pop-label">Custom Color</span></div><div class="pano-paint-color-field"><div class="pano-paint-sv-panel" data-paint-color-sv><div class="pano-paint-sv-cursor" data-paint-color-sv-cursor></div></div><div class="pano-paint-hue-strip" data-paint-hue-strip><div class="pano-paint-hue-handle" data-paint-hue-handle></div></div></div><label class="pano-paint-color-field"><span>Opacity</span><div class="pano-paint-alpha-wrap"><input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider><span data-paint-alpha-value>100%</span></div></label><div class="pano-paint-color-history" data-paint-color-history-wrap><div class="pano-paint-color-history-list" data-paint-color-history></div></div></div>', 2))
        ])) : Ao("", !0),
        xe("div", {
          class: "pano-paint-footer",
          "data-paint-footer": a.footer
        }, [
          xe("div", {
            class: "pano-paint-footer-group",
            "data-paint-group": a.group
          }, [
            (ye(!0), Le(ze, null, Ai(a.tools, (s) => (ye(), Fi(Qo, {
              key: `${a.key}-${s.key}`,
              icon: s.icon,
              label: s.label,
              tip: s.tip,
              attrs: { [s.attr]: s.key }
            }, null, 8, ["icon", "label", "tip", "attrs"]))), 128))
          ], 8, jb),
          i[1] || (i[1] = xe("div", {
            class: "pano-paint-size-row",
            "data-paint-size-row": "",
            hidden: ""
          }, [
            xe("input", {
              class: "pano-paint-size-slider",
              "data-paint-size-slider": "",
              type: "range",
              min: "1",
              max: "120",
              step: "1",
              value: "10"
            }),
            xe("span", {
              class: "pano-paint-size-value",
              "data-paint-size-value": ""
            }, "10")
          ], -1)),
          xe("div", {
            class: "pano-paint-clear-row",
            "data-paint-clear-row": "",
            hidden: a.clearHidden
          }, [
            tn(Qo, {
              icon: ol(ee).clear,
              label: a.clearLabel,
              tip: a.clearTip,
              "extra-class": "pano-paint-layer-clear",
              attrs: { "data-paint-layer-clear-current": a.clearTarget }
            }, null, 8, ["icon", "label", "tip", "attrs"])
          ], 8, Ub)
        ], 8, zb)
      ], 8, Vb))), 128))
    ]));
  }
}, Gb = {
  class: "pano-side",
  "data-side": ""
}, Kb = { class: "pano-side-head" }, Wb = ["innerHTML"], qb = {
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
    const i = Ii(() => `<span class="pano-side-title-icon" aria-hidden="true">${ee.globe}</span><span>${n(e.nodeTitle)}</span>`);
    return (a, s) => (ye(), Le("div", Gb, [
      xe("div", Kb, [
        xe("div", {
          class: "pano-side-title",
          innerHTML: i.value
        }, null, 8, Wb),
        s[0] || (s[0] = xe("div", { class: "pano-side-actions" }, null, -1))
      ]),
      s[1] || (s[1] = xe("div", { class: "pano-divider" }, null, -1))
    ]));
  }
}, Yb = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, Xb = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (ye(), Le("div", Yb, [
      (ye(!0), Le(ze, null, Ai(t.buttons, (i) => (ye(), Fi(Qo, {
        key: i.key,
        "extra-class": {
          active: i.active,
          "pano-btn-icon-accent": i.accent
        },
        icon: i.icon,
        label: i.label,
        tip: i.tip,
        pressed: i.pressed,
        attrs: { [i.attr]: i.value }
      }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, Zb = { class: "pano-floating-top" }, Jb = ["data-view-count"], Qb = ["data-view", "aria-pressed", "aria-label"], tv = ["innerHTML"], ev = { class: "label" }, nv = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (ye(), Le("div", Zb, [
      xe("div", {
        class: "pano-view-toggle",
        "data-selected": "pano",
        "data-view-count": String(t.buttons.length)
      }, [
        (ye(!0), Le(ze, null, Ai(t.buttons, (i) => (ye(), Le("button", {
          key: i.key,
          class: ls(["pano-view-btn", i.extraClass]),
          "data-view": i.key,
          "aria-pressed": i.pressed,
          "aria-label": i.label
        }, [
          xe("span", {
            innerHTML: i.icon
          }, null, 8, tv),
          xe("span", ev, fd(i.label), 1)
        ], 10, Qb))), 128))
      ], 8, Jb)
    ]));
  }
};
function zh(t = "stickers") {
  const e = String(t || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: ee.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: ee.unwrap, pressed: "false", extraClass: "" },
      ...e ? [{ key: "frame", label: "Frame", icon: ee.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: ee.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: ee.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: ee.circle_dashed_tool, pressed: "false" },
      ...e ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: ee.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: ee.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: ee.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: ee.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: ee.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: ee.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: ee.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: ee.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: ee.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: ee.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: ee.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: ee.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: ee.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: ee.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: ee.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: ee.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: ee.lasso_tool }
        ]
      }
    ]
  };
}
const rv = ["aria-label"], iv = { class: "pano-stage-wrap" }, av = ["innerHTML"], ov = {
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
    const n = t, i = e;
    let a = "", s = !1, u = null;
    const f = /* @__PURE__ */ R0(null), g = Ii(() => n.readOnly === !0), b = Ii(() => n.shellPreset || zh(n.type)), _ = Ii(() => {
      var F;
      const A = Array.isArray((F = b.value) == null ? void 0 : F.floatingButtons) ? b.value.floatingButtons.slice() : [];
      return g.value && A.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ee.fullscreen
      }), A;
    });
    function d() {
      const A = f.value;
      return A ? Array.from(A.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((F) => F instanceof HTMLElement ? !F.hidden && F.tabIndex >= 0 && F.offsetParent !== null : !1) : [];
    }
    function M() {
      var L;
      const F = d()[0] || f.value;
      (L = F == null ? void 0 : F.focus) == null || L.call(F);
    }
    function P() {
      var A;
      u != null && u.isConnected && ((A = u.focus) == null || A.call(u)), u = null;
    }
    function T(A) {
      var F, L, Y, I;
      if (!A.defaultPrevented) {
        if (A.key === "Tab") {
          const ct = d();
          if (!ct.length) {
            A.preventDefault(), (L = (F = f.value) == null ? void 0 : F.focus) == null || L.call(F);
            return;
          }
          const Q = ct[0], xt = ct[ct.length - 1], z = document.activeElement;
          if (A.shiftKey) {
            (z === Q || z === f.value || !((Y = f.value) != null && Y.contains(z))) && (A.preventDefault(), xt.focus());
            return;
          }
          (z === xt || !((I = f.value) != null && I.contains(z))) && (A.preventDefault(), Q.focus());
          return;
        }
        A.key === "Escape" && i("close");
      }
    }
    function E() {
      s || (a = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function C() {
      s && (document.body.style.overflow = a, s = !1);
    }
    function V(A) {
      document.removeEventListener("keydown", T), A ? (u || (u = document.activeElement), E(), document.addEventListener("keydown", T), Cd(() => {
        M();
      })) : (C(), P());
    }
    return Hd(() => {
      V(n.open);
    }), $d(() => {
      C(), document.removeEventListener("keydown", T), P();
    }), Mo(() => n.open, (A) => {
      V(A);
    }), (A, F) => t.open ? (ye(), Le("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: F[0] || (F[0] = x1((L) => i("close"), ["self"]))
    }, [
      xe("section", {
        ref_key: "modalRef",
        ref: f,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": t.nodeTitle,
        tabindex: "-1"
      }, [
        xe("div", iv, [
          F[1] || (F[1] = lh('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          g.value ? Ao("", !0) : (ye(), Le(ze, { key: 0 }, [
            tn(Xb, {
              buttons: b.value.toolButtons || []
            }, null, 8, ["buttons"]),
            tn(Bb, {
              "paint-swatches": t.paintSwatches,
              panes: b.value.paintPanes || []
            }, null, 8, ["paint-swatches", "panes"])
          ], 64)),
          tn(nv, {
            buttons: b.value.viewButtons || []
          }, null, 8, ["buttons"]),
          tn(Ob, { buttons: _.value }, null, 8, ["buttons"]),
          F[2] || (F[2] = xe("div", {
            class: "pano-selection-menu",
            "data-selection-menu": ""
          }, null, -1)),
          xe("button", {
            class: "pano-btn pano-btn-icon pano-output-preview-toggle",
            "data-action": "toggle-output-preview-size",
            "aria-label": "Expand Preview",
            "data-tip": "Expand preview",
            style: { display: "none" },
            innerHTML: ol(ee).fullscreen
          }, null, 8, av),
          F[3] || (F[3] = xe("div", {
            class: "pano-tooltip",
            "data-tooltip": ""
          }, null, -1))
        ]),
        t.hideSidebar ? Ao("", !0) : (ye(), Fi(qb, {
          key: 0,
          "node-title": t.nodeTitle
        }, null, 8, ["node-title"]))
      ], 8, rv)
    ])) : Ao("", !0);
  }
}, ts = "state_json", Fr = "sticker_image_1", vc = "external_image", _c = "pano_sticker_input_images", Lo = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], De = Math.PI / 180, zr = 180 / Math.PI, es = 24, sv = 4, cv = 4, pa = /* @__PURE__ */ new Map(), Bc = /* @__PURE__ */ new Map(), ga = /* @__PURE__ */ new Map(), Et = {
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
function He(t) {
  return Number(t) === 180 ? 180 : 360;
}
function lv(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function uv(t) {
  return 1 - Math.pow(1 - t, 3);
}
function fv(t) {
  return t * t * t;
}
function qn(t, e, n) {
  return { x: t, y: e, z: n };
}
function go(t, e) {
  return qn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function mo(t, e) {
  return qn(t.x * e, t.y * e, t.z * e);
}
function Sn(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function yo(t, e) {
  return qn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function mi(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return qn(t.x / e, t.y / e, t.z / e);
}
function $n(t, e) {
  const n = t * De, i = e * De, a = Math.cos(i);
  return qn(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function bo(t) {
  return {
    yaw: Re(Math.atan2(t.x, t.z) * zr),
    pitch: U(Math.asin(U(t.y, -1, 1)) * zr, -90, 90)
  };
}
function ar(t, e) {
  let n = !1;
  for (let i = 0, a = e.length - 1; i < e.length; a = i++) {
    const s = e[i].x, u = e[i].y, f = e[a].x, g = e[a].y;
    u > t.y != g > t.y && t.x < (f - s) * (t.y - u) / (g - u || 1e-6) + s && (n = !n);
  }
  return n;
}
function $r(t, e) {
  const n = t.x - e.x, i = t.y - e.y;
  return n * n + i * i;
}
function wc(t, e, n) {
  const i = Number(n.x || 0) - Number(e.x || 0), a = Number(n.y || 0) - Number(e.y || 0), s = Number(t.x || 0) - Number(e.x || 0), u = Number(t.y || 0) - Number(e.y || 0), f = i * i + a * a;
  if (f <= 1e-6) return $r(t, e);
  const g = U((s * i + u * a) / f, 0, 1), b = Number(e.x || 0) + i * g, _ = Number(e.y || 0) + a * g, d = Number(t.x || 0) - b, M = Number(t.y || 0) - _;
  return d * d + M * M;
}
function Nn(t, e, n) {
  return t + (e - t) * n;
}
function Mn(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(U(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(U(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(U(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${U(n, 0, 1)})`;
}
function dv(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let vo = { fillStyle: "", url: "" };
function hv(t, e, n) {
  if (vo.url && vo.fillStyle === String(t || ""))
    return vo.url;
  const i = dv(`
<svg xmlns="http://www.w3.org/2000/svg" width="${es}" height="${es}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return vo = { fillStyle: String(t || ""), url: i }, i;
}
function Oo(t, e, n = 0.015) {
  return !t || !e ? !1 : Math.abs(Number(t.r ?? 0) - Number(e.r ?? 0)) <= n && Math.abs(Number(t.g ?? 0) - Number(e.g ?? 0)) <= n && Math.abs(Number(t.b ?? 0) - Number(e.b ?? 0)) <= n && Math.abs(Number(t.a ?? 1) - Number(e.a ?? 1)) <= n;
}
function fn(t) {
  return {
    r: U(Number((t == null ? void 0 : t.r) ?? 0), 0, 1),
    g: U(Number((t == null ? void 0 : t.g) ?? 0), 0, 1),
    b: U(Number((t == null ? void 0 : t.b) ?? 0), 0, 1),
    a: U(Number((t == null ? void 0 : t.a) ?? 1), 0, 1)
  };
}
function on(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function pv(t) {
  return Lo.some((e) => Oo(t, e.color));
}
function xc(t, e, n) {
  const i = (Number(t) % 1 + 1) % 1, a = U(Number(e), 0, 1), s = U(Number(n), 0, 1);
  if (a <= 1e-6) return { r: s, g: s, b: s };
  const u = Math.floor(i * 6), f = i * 6 - u, g = s * (1 - a), b = s * (1 - f * a), _ = s * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: s, g: _, b: g };
    case 1:
      return { r: b, g: s, b: g };
    case 2:
      return { r: g, g: s, b: _ };
    case 3:
      return { r: g, g: b, b: s };
    case 4:
      return { r: _, g, b: s };
    default:
      return { r: s, g, b };
  }
}
function la(t) {
  const e = U(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), n = U(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), i = U(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), a = Math.max(e, n, i), s = Math.min(e, n, i), u = a - s;
  let f = 0;
  u > 1e-6 && (a === e ? f = ((n - i) / u + (n < i ? 6 : 0)) / 6 : a === n ? f = ((i - e) / u + 2) / 6 : f = ((e - n) / u + 4) / 6);
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
function jh(t, e) {
  const n = Zf(t, 1), i = Zf(e, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, s = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(i * a)), f = (d, M) => M ? f(M, d % M) : d, g = f(s, u) || 1, b = Math.max(1, Math.round(s / g)), _ = Math.max(1, Math.round(u / g));
  return `${b}:${_}`;
}
function Gc(t) {
  const e = U(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * De, n = U(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * De;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function gv(t) {
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
  ], i = 0.015;
  for (const [a, s] of n)
    if (Math.abs(e - s) <= i) return a;
  return "";
}
function jr(t) {
  const e = Gc(t);
  return gv(e) || jh(e, 1);
}
function mv(t) {
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
function yv() {
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
const Uh = "pano_suite.ui_settings.v1", Bh = "pano_suite.node_grid_visibility.v1";
let Si = null, zn = null, wo = { text: null, parsed: null };
function ka(t) {
  const e = t && typeof t == "object" ? t : {}, n = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function bv() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Uh)) || "").trim();
    if (!e) return Si ? ka(Si) : null;
    const n = JSON.parse(e), i = ka(n);
    return Si = i, i;
  } catch {
    return Si ? ka(Si) : null;
  }
}
function vv(t) {
  var n;
  const e = ka(t);
  Si = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Uh, JSON.stringify(e));
  } catch {
  }
  return e;
}
function Gh() {
  var t;
  if (zn && typeof zn == "object")
    return zn;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Bh)) || "").trim();
    if (!e)
      return zn = {}, zn;
    const n = JSON.parse(e);
    return zn = n && typeof n == "object" ? n : {}, zn;
  } catch {
    return zn = {}, zn;
  }
}
function _v(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const a = Gh()[n];
  return typeof a == "boolean" ? a : !!e;
}
function wv(t, e) {
  var a;
  const n = String(t ?? "").trim();
  if (!n) return;
  const i = Gh();
  i[n] = !!e, zn = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Bh, JSON.stringify(i));
  } catch {
  }
}
function xv(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([n, i]) => {
    e[n] = i && typeof i == "object" ? { ...i } : i;
  }), e;
}
function Sv(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const n = { ...e };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Nv(t) {
  var i, a;
  const e = Array.isArray((i = t == null ? void 0 : t.paint) == null ? void 0 : i.strokes) ? t.paint.strokes.length : 0, n = Array.isArray((a = t == null ? void 0 : t.mask) == null ? void 0 : a.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: n };
}
function Jf(t) {
  const { paintCount: e, maskCount: n } = Nv(t), i = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
  let a = 0, s = 0;
  return i.forEach((u) => {
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
function bi(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Qf(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function Mv(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : mv(e)) : [];
}
function kv(t, e = 2048, n = "#00ff00", i = 360) {
  const a = bv(), s = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: He(i),
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
      assets: xv(f.assets),
      stickers: Sv(f.stickers),
      shots: Mv(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: Ma(f.painting),
      painting_layer: f.painting_layer && typeof f.painting_layer == "object" ? f.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(f.ui_settings && f.ui_settings.invert_view_x),
        invert_view_y: !!(f.ui_settings && f.ui_settings.invert_view_y),
        preview_quality: (() => {
          var _;
          const b = String(((_ = f.ui_settings) == null ? void 0 : _.preview_quality) || "balanced");
          return b === "draft" || b === "balanced" || b === "high" ? b : "balanced";
        })()
      },
      active: f.active && typeof f.active == "object" ? { ...f.active } : { ...s.active }
    };
    return a && (g.ui_settings = ka({ ...g.ui_settings, ...a })), g.output_preset = Wc(e, Number(g.output_preset || s.output_preset)), g.bg_color = String(n || g.bg_color || s.bg_color), g.coverage = He(i), delete g.editor_history, g;
  } catch {
    return wo = { text: u, parsed: null }, s;
  }
}
function gn(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((i) => i.name === e)) || null;
}
function xl(t) {
  if (!t || t.__panoCoverageWidgetSyncInstalled) return;
  const e = gn(t, "coverage");
  if (!e) return;
  const n = typeof e.callback == "function" ? e.callback.bind(e) : null;
  e.callback = function(...i) {
    var s, u, f, g, b, _, d, M, P, T;
    const a = n ? n(...i) : void 0;
    return t.__panoStateCache = null, t.__panoLiveStateOverride = null, t.__panoWrappedErpCache = null, t.__panoPanoBackgroundCache = null, (u = (s = t.__panoPreviewNodeRuntime) == null ? void 0 : s.requestDraw) == null || u.call(s), (g = (f = t.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (b = t.setDirtyCanvas) == null || b.call(t, !0, !0), (d = (_ = t.graph) == null ? void 0 : _.setDirtyCanvas) == null || d.call(_, !0, !0), (T = (P = (M = dn) == null ? void 0 : M.canvas) == null ? void 0 : P.setDirty) == null || T.call(P, !0, !0), a;
  }, t.__panoCoverageWidgetSyncInstalled = !0;
}
function Pv(t) {
  const e = String(t ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(e) || /^#?[0-9a-fA-F]{3}$/.test(e);
}
function td(t) {
  const e = String(t ?? "").trim();
  return e.startsWith("{") && e.endsWith("}");
}
function Av(t) {
  var P, T, E, C, V;
  if (!t || t.__panoCoverageWidgetOrderMigrated) return;
  const e = gn(t, "coverage"), n = gn(t, "bg_color"), i = gn(t, ts), a = gn(t, "sticker_state");
  if (!e || !n || !i) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const s = String(e.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(s) && Pv(s) && (td(u) || u === ""))) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let b = "360";
  if (td(u))
    try {
      const A = JSON.parse(u);
      b = String(He(A == null ? void 0 : A.coverage));
    } catch {
      b = "360";
    }
  const _ = s, d = u, M = f;
  e.value = b, (P = e.callback) == null || P.call(e, b), n.value = _, (T = n.callback) == null || T.call(n, _), i.value = d, (E = i.callback) == null || E.call(i, d), a && (a.value = M, (C = a.callback) == null || C.call(a, M)), (V = t.setDirtyCanvas) == null || V.call(t, !0, !0), t.__panoCoverageWidgetOrderMigrated = !0;
}
function xo(t) {
  return String(t ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function Cv(t, e) {
  const n = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "").trim(), i = {
    PanoramaStickers: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return i[n] ? i[n] : n || (e === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Iv(t, e) {
  (Array.isArray(t == null ? void 0 : t.widgets) ? t.widgets : []).forEach((i) => {
    var s, u;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === e || a.trim() === e || a.toLowerCase().includes(String(e).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (s = i.inputEl) != null && s.style && (i.inputEl.style.display = "none"), (u = i.parentEl) != null && u.style && (i.parentEl.style.display = "none")));
  });
}
function Kc(t, e, n) {
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
function Wc(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : e;
}
function Kh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Ev(t, e) {
  var n, i;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((i = t._nodes_by_id) == null ? void 0 : i[String(e)]) || null;
}
function Wh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Tv(t, e, n = null) {
  var a, s;
  let i = null;
  try {
    i = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, f = u ? (s = i.resolveSubgraphOutputLink) == null ? void 0 : s.call(i, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (i = f.outputNode);
    } catch {
    }
  return !i && n != null && (i = Ev(t == null ? void 0 : t.graph, n)), i;
}
function ns(t) {
  var a;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((a = Qe) == null ? void 0 : a.apiURL) == "function" ? Qe.apiURL(i) : i;
}
function Dv(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Rv(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), s = i.join("/");
  return { filename: a, subfolder: s };
}
function Lv(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function qh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Dv(e)) return [e];
  const { filename: n, subfolder: i } = Rv(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => ns({
    filename: n,
    subfolder: i,
    type: s
  }));
  return Lv([...a, e]);
}
function Ov(t) {
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
  var i;
  const e = (i = dn) == null ? void 0 : i.nodeOutputs;
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
      const n = String(t[1] || "").trim(), i = String(t[2] || "output").trim() || "output";
      return ns({ filename: e, subfolder: n, type: i });
    }
    for (const n of t) {
      const i = Oi(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : ns(t);
}
function Fv(t, e = -1) {
  var a;
  const n = [];
  Array.isArray(t == null ? void 0 : t.images) && t.images.length && n.push(t.images), Array.isArray((a = t == null ? void 0 : t.ui) == null ? void 0 : a.images) && t.ui.images.length && n.push(t.ui.images);
  const i = [];
  for (const s of n)
    !Array.isArray(s) || !s.length || (e >= 0 && e < s.length && i.push(s[e]), i.push(...s));
  return i;
}
function Nc(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const i of t || []) {
    const a = Oi(i);
    !a || n.has(a) || (n.add(a), e.push(a));
  }
  return e;
}
function Vv(t, e, n, i = null) {
  var d;
  const a = Pa(t == null ? void 0 : t.id), s = Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d[e]) ? a.ui[e] : Array.isArray(a == null ? void 0 : a[e]) ? a[e] : [], u = Array.isArray(s) && s.length ? s[0] : null, f = Oi(u);
  if (!f) return null;
  const g = `__ui__${e}`, b = n.get(g);
  if (b && b.__panoSrc === f) return b;
  const _ = new Image();
  return _.__panoSrc = f, _.onload = () => {
    typeof i == "function" && i(_);
  }, _.src = f, n.set(g, _), _;
}
function Hv(t, e) {
  var A, F;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], a = i.findIndex((L) => String((L == null ? void 0 : L.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const s = i[a], u = s == null ? void 0 : s.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = Kh(t.graph, u), { originId: g, originSlot: b } = Wh(f);
  if (g == null) return { src: "", sourceType: "", inputName: n };
  const _ = Tv(t, a, g), d = Number(b || 0);
  if (!_) return { src: "", sourceType: "", inputName: n };
  let M = [];
  try {
    M = typeof ((A = dn) == null ? void 0 : A.getNodeImageUrls) == "function" ? dn.getNodeImageUrls(_) || [] : [];
  } catch {
    M = [];
  }
  if (Array.isArray(M) && M.length) {
    const L = [];
    d >= 0 && d < M.length && L.push(M[d]), L.push(...M);
    const Y = Nc(L);
    if (Y.length) return { src: Y[0], srcCandidates: Y, sourceType: "appNodeImageUrls", inputName: n };
  }
  const P = Pa((_ == null ? void 0 : _.id) ?? g), T = Fv(P, d), E = Nc(T);
  if (E.length) return { src: E[0], srcCandidates: E, sourceType: "nodeOutputs", inputName: n };
  const C = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
  if (C.length) {
    const L = [];
    d >= 0 && d < C.length && L.push(C[d]), L.push(...C);
    const Y = Nc(L);
    if (Y.length) return { src: Y[0], srcCandidates: Y, sourceType: "nodeImgs", inputName: n };
  }
  const V = (F = _ == null ? void 0 : _.widgets) == null ? void 0 : F.find((L) => String((L == null ? void 0 : L.name) || "").toLowerCase() === "image");
  if (V) {
    let L = Oi(V.value);
    if (L && !L.includes("/") && !L.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (L = Qe.apiURL(`/view?filename=${encodeURIComponent(L)}&type=input&subfolder=`)), L) return { src: L, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function $v(t, e, n, i = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const s = qh(a);
  if (!s.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(e || "image"), f = t.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === a && f.img) return f.img;
  const g = new Image(), b = { srcRaw: a, resolvedSrc: "", img: g };
  t.__panoLinkedInputImageCache.set(u, b);
  let _ = -1;
  const d = () => {
    var P, T;
    if (_ += 1, _ >= s.length) {
      try {
        (T = (P = t.__panoLinkedInputImageCache) == null ? void 0 : P.delete) == null || T.call(P, u);
      } catch {
      }
      return;
    }
    const M = s[_];
    b.resolvedSrc = M, g.src = M;
  };
  return g.onload = () => {
    var M;
    i == null || i(), (M = t.setDirtyCanvas) == null || M.call(t, !0, !0);
  }, g.onerror = () => {
    var M, P;
    if (_ + 1 < s.length) {
      d();
      return;
    }
    try {
      (P = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || P.call(M, u);
    } catch {
    }
  }, d(), g;
}
function zv(t, e, n, i = null) {
  const a = Array.isArray(n) ? n.map((T) => String(T || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = String(e || "image"), u = a.join(`
`), f = t.__panoLinkedInputImageCache.get(s);
  if (f && f.srcRaw === u && f.img) return f.img;
  const g = [], b = /* @__PURE__ */ new Set();
  if (a.forEach((T) => {
    qh(T).forEach((E) => {
      const C = String(E || "").trim();
      !C || b.has(C) || (b.add(C), g.push(C));
    });
  }), !g.length) return null;
  const _ = new Image(), d = { srcRaw: u, resolvedSrc: "", img: _ };
  t.__panoLinkedInputImageCache.set(s, d);
  let M = -1;
  const P = () => {
    var E, C;
    if (M += 1, M >= g.length) {
      try {
        (C = (E = t.__panoLinkedInputImageCache) == null ? void 0 : E.delete) == null || C.call(E, s);
      } catch {
      }
      return;
    }
    const T = g[M];
    d.resolvedSrc = T, _.src = T;
  };
  return _.onload = () => {
    var T;
    i == null || i(), (T = t.setDirtyCanvas) == null || T.call(t, !0, !0);
  }, _.onerror = () => {
    var T, E;
    if (M + 1 < g.length) {
      P();
      return;
    }
    try {
      (E = (T = t.__panoLinkedInputImageCache) == null ? void 0 : T.delete) == null || E.call(T, s);
    } catch {
    }
  }, P(), _;
}
function Yh(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const i of n) {
    const a = Hv(t, i);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function ed(t, e = [], n = null, i = "") {
  const a = Array.isArray(e) ? e : [e], s = Yh(t, a), u = String(i || a.join("|") || "image_exact"), f = Array.isArray(s == null ? void 0 : s.srcCandidates) ? s.srcCandidates : [];
  if (f.length) return zv(t, u, f, n);
  const g = String((s == null ? void 0 : s.src) || "").trim();
  return g ? $v(t, u, g, n) : null;
}
async function Aa(t, e, n = {}) {
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, s = i, u = Cv(t, e);
  await yv();
  const f = gn(t, "output_preset"), g = gn(t, "coverage"), b = gn(t, "bg_color"), _ = gn(t, ts), d = kv(
    String((_ == null ? void 0 : _.value) || ""),
    Wc(f == null ? void 0 : f.value, 2048),
    String((b == null ? void 0 : b.value) || "#00ff00"),
    He(g == null ? void 0 : g.value)
  );
  t.__panoLiveStateOverride = JSON.stringify(d), e === "cutout" && (d.shots = Array.isArray(d.shots) ? d.shots.slice(0, 1) : [], d.shots.length || (d.active.selected_shot_id = null));
  const M = document.createElement("div");
  document.body.appendChild(M);
  const P = M1(ov, {
    open: !0,
    type: e,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: zh(e),
    paintSwatches: Lo.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: Mn(r.color, 1)
    })),
    onClose: () => li()
  });
  try {
    P.mount(M);
  } catch (r) {
    try {
      P.unmount();
    } catch {
    }
    throw M.remove(), r;
  }
  const T = M.querySelector(".pano-modal-overlay"), E = M.querySelector(".pano-modal"), C = E == null ? void 0 : E.querySelector("[data-stage-overlay]"), V = E == null ? void 0 : E.querySelector("[data-stage-background]"), A = E == null ? void 0 : E.querySelector(".pano-stage-wrap");
  if (!T || !E || !C || !V || !A)
    throw P.unmount(), M.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const F = document.createElement("div");
  F.setAttribute("aria-hidden", "true"), F.style.position = "absolute", F.style.left = "0", F.style.top = "0", F.style.pointerEvents = "none", F.style.zIndex = "12", F.style.display = "none", F.style.willChange = "transform,width,height,background,border-radius", A == null || A.appendChild(F);
  const L = document.createElement("div");
  L.className = "pano-paint-size-preview", L.setAttribute("aria-hidden", "true");
  const Y = document.createElement("div");
  Y.className = "pano-paint-size-preview-sample", L.appendChild(Y), A == null || A.appendChild(L);
  const I = C.getContext("2d"), ct = Li(), Q = Li(), xt = E.querySelector("[data-side]"), z = E.querySelectorAll("[data-view]"), ft = E.querySelector(".pano-view-toggle"), St = E.querySelector("[data-fov-value]"), tt = E.querySelector("[data-selection-menu]"), nt = E.querySelector("[data-action='toggle-output-preview-size']"), X = E.querySelector("[data-tool-ui-action='add-or-look']"), at = E.querySelector("[data-view='frame']"), dt = E.querySelector("[data-action='toggle-fullscreen']"), B = E.querySelector("[data-tooltip]"), ot = E.querySelector("[data-tool-rail]"), Nt = E.querySelector("[data-paint-dock]"), Dt = Array.from(E.querySelectorAll("[data-paint-pane]")), Ct = E.querySelector("[data-paint-color-row]"), Lt = E.querySelector("[data-paint-color-pop]"), Ae = E.querySelector("[data-paint-color-preview]"), Oe = E.querySelector("[data-paint-color-sv]"), ke = E.querySelector("[data-paint-color-sv-cursor]"), Ce = E.querySelector("[data-paint-hue-strip]"), Ge = E.querySelector("[data-paint-hue-handle]"), Fe = E.querySelector("[data-paint-alpha-slider]"), nn = E.querySelector("[data-paint-alpha-value]"), Jn = E.querySelector("[data-paint-color-history-wrap]"), S = E.querySelector("[data-paint-color-history]"), D = Array.from(E.querySelectorAll("[data-paint-size-row]")), H = Array.from(E.querySelectorAll("[data-paint-clear-row]")), q = Array.from(E.querySelectorAll("[data-paint-layer-clear-current]")), G = Array.from(E.querySelectorAll("[data-paint-size-slider]")), K = Array.from(E.querySelectorAll("[data-paint-size-value]"));
  let J = 0, it = 0;
  A == null || A.removeAttribute("data-stage-ready"), A == null || A.setAttribute("data-stage-loading-kind", "boot"), C.style.opacity = "1", V.style.opacity = "0", a && (xt == null || xt.remove(), E.classList.add("pano-modal-readonly"));
  function et(r) {
    Nt && Nt.classList.toggle("is-hidden", !r);
  }
  const Z = () => {
    if (!p.customPaintSessionStart) return;
    if (Oo(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (pv(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const r = [
      fn(p.customPaintColor),
      ...p.customPaintHistory.filter((o) => !Oo(o, p.customPaintColor))
    ];
    p.customPaintHistory = r.slice(0, 8), p.customPaintSessionStart = null;
  }, yt = (r = !1) => {
    !Lt || Lt.hidden || (r ? Z() : p.customPaintSessionStart = null, Lt.hidden = !0);
  }, rt = () => {
    Lt && (Lt.hidden && (p.customPaintSessionStart = fn(p.customPaintColor)), Lt.hidden = !1);
  };
  E.addEventListener("pointerdown", (r) => {
    Qa(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (E.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), yt(!0), e === "cutout" && p.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, zt(), ht())));
  });
  const _t = e === "stickers" || e === "cutout" ? d.active.selected_sticker_id : d.active.selected_shot_id, It = JSON.stringify(Qf(d)), p = {
    mode: "pano",
    selectedId: _t,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: He(d.coverage),
    historyController: Nb(80, { entries: [It], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: ir,
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
    showGrid: _v(t == null ? void 0 : t.id, !0),
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
  const jt = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), be = /* @__PURE__ */ new Map(), kt = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: e === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, ve = {
    timer: 0,
    target: null
  }, Ie = {
    active: !1,
    depth: 0
  };
  function Zr(r) {
    const o = r == null ? void 0 : r.dataTransfer;
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
  function _e(r) {
    const o = !!r;
    Ie.active !== o && (Ie.active = o, A.classList.toggle("drop-active", o));
  }
  function rn(r, o, c = p.viewFov, l = 140, h = 620) {
    const m = uy(p.viewYaw, r), w = o - p.viewPitch, y = c - p.viewFov, v = Math.hypot(m, w) + Math.abs(y) * 0.6, N = Math.round(U(l + v * 2.2, l, h));
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
    }, p.viewInertia.active = !1, p.viewInertia.vx = 0, p.viewInertia.vy = 0, ht();
  }
  Np();
  function yn() {
    return e === "stickers" ? d.stickers : d.shots;
  }
  function Me() {
    const r = d.painting || (d.painting = Ma(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Xh(r = "paint") {
    var h, m;
    const o = Array.isArray((m = (h = d.painting) == null ? void 0 : h[r]) == null ? void 0 : m.strokes) ? d.painting[r].strokes : [], c = [], l = /* @__PURE__ */ new Set();
    for (const w of o) {
      const y = String((w == null ? void 0 : w.actionGroupId) || "").trim();
      !y || l.has(y) || (l.add(y), c.push(y));
    }
    return c;
  }
  function Zh() {
    return Xh("paint");
  }
  function Vi(r, o) {
    const c = String(o || "").trim();
    return c ? `${r === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function Hi(r) {
    const o = String(r || "").trim();
    return o ? `raster:${o}` : "";
  }
  function Ke(r) {
    const o = String(r || "").trim();
    if (!o) return "";
    const c = o.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : o).trim();
  }
  function $i(r, o = null) {
    const c = String(r || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const l = c.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function bs() {
    var o;
    let r = -1;
    for (const c of Array.isArray(d.stickers) ? d.stickers : [])
      r = Math.max(r, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Me())
      r = Math.max(r, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Array.isArray((o = d.painting) == null ? void 0 : o.raster_objects) ? d.painting.raster_objects : [])
      String((c == null ? void 0 : c.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((c == null ? void 0 : c.z_index) || 0)));
    return r + 1;
  }
  function Sl(r, o = null) {
    const c = String(r || "").trim();
    if (!c) return null;
    const l = Me();
    let h = l.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === c);
    return h ? o != null && (h.z_index = Math.max(0, Number(o || 0))) : (h = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: o == null ? bs() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(h)), h;
  }
  function Jh() {
    const r = new Set(Zh()), c = Me().filter((l) => r.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return r.forEach((l) => {
      c.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === l) || c.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: bs(),
        locked: !1,
        frame: null
      });
    }), c.sort((l, h) => Number((l == null ? void 0 : l.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), d.painting.groups = c, c;
  }
  function Qh(r, o, c) {
    const l = [];
    for (const O of c) {
      const $ = O == null ? void 0 : O.geometry, W = ($ == null ? void 0 : $.geometryKind) === "lasso_fill" ? $ == null ? void 0 : $.points : ($ == null ? void 0 : $.processedPoints) || ($ == null ? void 0 : $.rawPoints) || ($ == null ? void 0 : $.points) || [];
      Array.isArray(W) && l.push(...W);
    }
    if (!l.length) return null;
    let h = 0, m = 0;
    l.forEach((O) => {
      h += Number((O == null ? void 0 : O.u) || 0), m += Number((O == null ? void 0 : O.v) || 0);
    });
    const w = h / l.length;
    let y = 1 / 0, v = -1 / 0, N = 1 / 0, x = -1 / 0;
    l.forEach((O) => {
      const $ = zi(Number((O == null ? void 0 : O.u) || 0), w);
      y = Math.min(y, $), v = Math.max(v, $);
      const W = Number((O == null ? void 0 : O.v) || 0);
      N = Math.min(N, W), x = Math.max(x, W);
    });
    const k = c.reduce((O, $) => {
      const W = _r(String(($ == null ? void 0 : $.toolKind) || "pen")), pt = an[W] || an[ir], wt = Math.max(1, Number(($ == null ? void 0 : $.size) || 10)) * Math.max(0.1, Number((pt == null ? void 0 : pt.sizeScale) ?? 1));
      return Math.max(O, wt);
    }, 0), R = Math.max(35e-4, k / 2048);
    return {
      centerUv: { u: ((w + (y + v) * 0.5) % 1 + 1) % 1, v: U((N + x) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (v - y) * 0.5 + R,
      halfH: (x - N) * 0.5 + R,
      uvPad: R
    };
  }
  function Jr(r, o, c) {
    const l = String(r || "").trim();
    if (!l) return null;
    const h = Me().find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    if (!h) return null;
    if (!h.frame) {
      const m = c || Cn(l, o);
      h.frame = Qh(l, o, m);
    }
    return h.frame;
  }
  function Qr() {
    var l;
    const r = (Array.isArray(d.stickers) ? d.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), o = Jh().map((h) => ({
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
    return [...r, ...o, ...c].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function Er(r = !0) {
    var c, l, h, m, w, y;
    const o = Qr().filter((v) => v.type === "strokeGroup").map((v) => String(v.actionGroupId || "")).filter((v) => !!v);
    if (r) {
      const v = String(((l = (c = p.interaction) == null ? void 0 : c.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), N = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), x = String(((y = (w = p.interaction) == null ? void 0 : w.stroke) == null ? void 0 : y.toolKind) || "").trim();
      v && N === "paint" && x !== "eraser" && !o.includes(v) && o.push(v);
    }
    return o;
  }
  function Nl(r = !0) {
    var y, v, N, x, k, R;
    const o = Qr();
    if (!r) return o;
    const c = String(((v = (y = p.interaction) == null ? void 0 : y.stroke) == null ? void 0 : v.actionGroupId) || "").trim(), l = String(((x = (N = p.interaction) == null ? void 0 : N.stroke) == null ? void 0 : x.layerKind) || "").trim(), h = String(((R = (k = p.interaction) == null ? void 0 : k.stroke) == null ? void 0 : R.toolKind) || "").trim();
    if (!c || l !== "paint" || h === "eraser" || o.some((O) => O.type === "strokeGroup" && String(O.actionGroupId || "") === c))
      return o;
    const m = fe();
    let w = o.reduce((O, $) => Math.max(O, Number(($ == null ? void 0 : $.z_index) || 0)), -1) + 1;
    return m && Ne(m) && String(m.actionGroupId || "") === c && (w = Number(m.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: w,
        item: null
      }
    ].sort((O, $) => Number((O == null ? void 0 : O.z_index) || 0) - Number(($ == null ? void 0 : $.z_index) || 0));
  }
  function tp() {
    return Me().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => ei(Vi("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function ep() {
    var r;
    return (Array.isArray((r = d.painting) == null ? void 0 : r.raster_objects) ? d.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, c) => Number((o == null ? void 0 : o.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((o) => ti(Hi((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function Ha(r = p.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object") return !0;
    if (o === "move_multi") {
      const c = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, l = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return c || l;
    }
    return !1;
  }
  function Ml(r = p.interaction) {
    if (e !== "cutout") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return Ha(r) || o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function np(r = p.interaction) {
    if (!Ml(r)) return 0;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "paint_stroke" || o === "paint_lasso_fill" ? 120 : 33;
  }
  function vs() {
    var h, m, w, y, v, N, x;
    const r = p.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!Ha(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const k = ((h = r == null ? void 0 : r.stroke) == null ? void 0 : h.geometry) || null, R = String(((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.layerKind) || ""), O = ((w = k == null ? void 0 : k.rawPoints) == null ? void 0 : w.length) ?? ((y = k == null ? void 0 : k.points) == null ? void 0 : y.length) ?? 0, $ = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${R || "paint"}_${o}_live${$}_${O}_${p.livePaintInteractionRevision}`;
    }
    const c = String(((v = r == null ? void 0 : r.item) == null ? void 0 : v.actionGroupId) || ""), l = String(((N = r == null ? void 0 : r.item) == null ? void 0 : N.rasterObjectId) || ((x = r == null ? void 0 : r.item) == null ? void 0 : x.id) || "");
    return `_${o}_${c || l || "active"}_${p.livePaintInteractionRevision}`;
  }
  function _s() {
    return [
      ...Array.isArray(d.stickers) ? d.stickers : [],
      ...Array.isArray(d.shots) ? d.shots : []
    ];
  }
  function bn(r) {
    return !!r && Array.isArray(d.shots) && d.shots.includes(r);
  }
  function Pe(r) {
    return !!r && Array.isArray(d.stickers) && d.stickers.includes(r);
  }
  function pn() {
    var r;
    return Array.isArray((r = d.painting) == null ? void 0 : r.raster_objects) ? d.painting.raster_objects : [];
  }
  function ti(r) {
    const o = Ke(r);
    if (!o) return null;
    const c = pn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: Hi(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function We(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = Ke(r.rasterObjectId || r.id || "");
    return !!o && !!ti(Hi(o));
  }
  function ei(r) {
    const o = $i(r), c = String(o.actionGroupId || "").trim();
    if (!c) return null;
    const l = Me().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === c || String((h == null ? void 0 : h.actionGroupId) || "") === c);
    return l ? {
      ...l,
      id: Vi("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function Ne(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), c = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!ei(Vi(c, o));
  }
  function Cn(r, o = null) {
    const c = $i(r, o), l = String(c.actionGroupId || "").trim();
    return l ? ci(c.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === l) : [];
  }
  function rp(r, o = "paint") {
    var m, w, y;
    const c = String(r || "").trim(), h = `${String(o || "paint").trim() || "paint"}:${c}:${p.mode}:${Ki()}`;
    if (p.mode === "frame") {
      const v = Zt(), N = String((v == null ? void 0 : v.id) || ""), x = v ? Ye(v) : null;
      return `${h}:frame:${N}:${Math.round(Number((x == null ? void 0 : x.x) || 0))}:${Math.round(Number((x == null ? void 0 : x.y) || 0))}:${Math.round(Number((x == null ? void 0 : x.w) || 0))}:${Math.round(Number((x == null ? void 0 : x.h) || 0))}:${Math.round(Number(((m = p.frameView) == null ? void 0 : m.zoom) || 1) * 1e3)}:${Math.round(Number(((w = p.frameView) == null ? void 0 : w.panX) || 0))}:${Math.round(Number(((y = p.frameView) == null ? void 0 : y.panY) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function $a(r, o, c) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: U(Number(r.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function zi(r, o) {
    let c = Number(r || 0) - Number(o || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function kl(r, o = null, c = null) {
    var N;
    const l = $i(r, o), h = Array.isArray(c) ? c : Cn(l.actionGroupId, l.layerKind), m = [];
    if (h.forEach((x) => {
      const k = (x == null ? void 0 : x.geometry) || null, R = (k == null ? void 0 : k.geometryKind) === "lasso_fill" ? k == null ? void 0 : k.points : (k == null ? void 0 : k.processedPoints) || (k == null ? void 0 : k.rawPoints) || (k == null ? void 0 : k.points) || [];
      Array.isArray(R) && m.push(...R);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const w = Number(((N = m[0]) == null ? void 0 : N.u) || 0);
    let y = 0, v = 0;
    return m.forEach((x) => {
      y += w + zi(Number((x == null ? void 0 : x.u) || 0), w), v += Number((x == null ? void 0 : x.v) || 0);
    }), {
      u: (y / m.length % 1 + 1) % 1,
      v: U(v / m.length, 0, 1)
    };
  }
  function za(r, o, c = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), w = zi(Number(r.u || 0), h), y = Number(r.v || 0) - m, v = Number(l || 0) * De, N = Math.cos(v), x = Math.sin(v), k = Math.max(0.02, Number(c || 1)), R = (w * N - y * x) * k, O = (w * x + y * N) * k;
    return {
      ...r,
      u: ((h + R) % 1 + 1) % 1,
      v: U(m + O, 0, 1)
    };
  }
  function Pl(r, o, c, l = null, h = null, m = null) {
    const w = $i(r, h), y = String(w.actionGroupId || "").trim();
    if (!y) return !1;
    const v = ci(w.layerKind), N = Array.isArray(l) ? new Map(l.map((k) => [String((k == null ? void 0 : k.id) || ""), k])) : null;
    let x = !1;
    if (v.forEach((k) => {
      if (String((k == null ? void 0 : k.actionGroupId) || "").trim() !== y) return;
      const R = (N == null ? void 0 : N.get(String((k == null ? void 0 : k.id) || ""))) || k, O = k == null ? void 0 : k.geometry, $ = R == null ? void 0 : R.geometry;
      !O || !$ || (Array.isArray($.points) && (O.points = $.points.map((W) => $a(W, o, c)), x = !0), Array.isArray($.rawPoints) && (O.rawPoints = $.rawPoints.map((W) => $a(W, o, c)), x = !0), Array.isArray($.processedPoints) && (O.processedPoints = $.processedPoints.map((W) => $a(W, o, c)), x = !0));
    }), x && m) {
      const k = Me().find((R) => String((R == null ? void 0 : R.actionGroupId) || "") === y);
      k && (k.frame = {
        ...m,
        centerUv: {
          u: ((m.centerUv.u + o) % 1 + 1) % 1,
          v: U(m.centerUv.v + c, 0, 1)
        }
      });
    }
    return x;
  }
  function Al(r, o = 1, c = 0, l = null, h = null, m = null) {
    const w = $i(r, h), y = String(w.actionGroupId || "").trim();
    if (!y) return !1;
    const v = ci(w.layerKind), N = Array.isArray(l) ? l : Cn(y, w.layerKind), x = Array.isArray(N) ? new Map(N.map((O) => [String((O == null ? void 0 : O.id) || ""), O])) : null, k = (m == null ? void 0 : m.centerUv) ?? kl(y, w.layerKind, N);
    let R = !1;
    if (v.forEach((O) => {
      if (String((O == null ? void 0 : O.actionGroupId) || "").trim() !== y) return;
      const $ = (x == null ? void 0 : x.get(String((O == null ? void 0 : O.id) || ""))) || O, W = O == null ? void 0 : O.geometry, pt = $ == null ? void 0 : $.geometry;
      !W || !pt || (Array.isArray(pt.points) && (W.points = pt.points.map((wt) => za(wt, k, o, c)), R = !0), Array.isArray(pt.rawPoints) && (W.rawPoints = pt.rawPoints.map((wt) => za(wt, k, o, c)), R = !0), Array.isArray(pt.processedPoints) && (W.processedPoints = pt.processedPoints.map((wt) => za(wt, k, o, c)), R = !0));
    }), R && m) {
      const O = Number(o || 1), $ = Me().find((W) => String((W == null ? void 0 : W.actionGroupId) || "") === y);
      $ && ($.frame = {
        centerUv: m.centerUv,
        rot_deg: Number(m.rot_deg || 0) + Number(c || 0),
        halfW: m.halfW * O,
        halfH: m.halfH * O,
        uvPad: m.uvPad
      });
    }
    return R;
  }
  function Cl(r, o, c, l = null) {
    const h = Ke(r);
    if (!h) return !1;
    const m = pn().find((x) => String((x == null ? void 0 : x.id) || "").trim() === h);
    if (!m) return !1;
    const w = l && typeof l == "object" ? l : m, y = (w == null ? void 0 : w.transform) || {}, v = Number(y.du || 0) + Number(o || 0), N = U(Number(y.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = v, m.transform.dv = N, !0;
  }
  function fe() {
    const r = String(p.selectedId || "");
    if (!r) return null;
    const o = ei(r);
    if (o) return o;
    const c = ti(r);
    return c || (e === "cutout" ? _s().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null : yn().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null);
  }
  function In() {
    const r = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], o = [], c = /* @__PURE__ */ new Set();
    return r.forEach((l) => {
      const h = String(l || "").trim();
      if (!h || c.has(h)) return;
      c.add(h);
      const m = h === String(p.selectedId || "") ? fe() : ei(h) || ti(h) || (e === "cutout" ? _s().find((w) => String((w == null ? void 0 : w.id) || "") === h) : yn().find((w) => String((w == null ? void 0 : w.id) || "") === h));
      m && o.push(m);
    }), o;
  }
  function ws(r = null) {
    const o = Array.isArray(r) ? r : In();
    if (!o || o.length < 2) return null;
    const c = o.map((N) => Ee(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!c.length) return null;
    const l = c.flatMap((N) => N.corners.map((x) => Number((x == null ? void 0 : x.x) || 0))), h = c.flatMap((N) => N.corners.map((x) => Number((x == null ? void 0 : x.y) || 0))), m = Math.min(...l), w = Math.max(...l), y = Math.min(...h), v = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + w) * 0.5, y: (y + v) * 0.5 },
      corners: [
        { x: m, y },
        { x: w, y },
        { x: w, y: v },
        { x: m, y: v }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + w) * 0.5, y, a: { x: m, y }, b: { x: w, y } },
        { edge: "right", x: w, y: (y + v) * 0.5, a: { x: w, y }, b: { x: w, y: v } },
        { edge: "bottom", x: (m + w) * 0.5, y: v, a: { x: w, y: v }, b: { x: m, y: v } },
        { edge: "left", x: m, y: (y + v) * 0.5, a: { x: m, y: v }, b: { x: m, y } }
      ],
      rotateStemBase: { x: (m + w) * 0.5, y },
      rotateHandle: { x: (m + w) * 0.5, y: y - 30 }
    };
  }
  function ip(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(p.selectedIds) && p.selectedIds.includes(o);
  }
  function Il() {
    const r = fe();
    return r ? Ne(r) || We(r) ? "stroke" : bn(r) ? "frame" : "image" : null;
  }
  function hr(r) {
    if (!r || typeof r != "object") return !1;
    if (Ne(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), c = Me().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (We(r)) {
      const o = Ke(r.rasterObjectId || r.id || ""), c = pn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return r.locked === !0;
  }
  function xs(r = null) {
    const o = Array.isArray(r) ? r : In();
    return o.length > 0 && o.every((c) => hr(c));
  }
  function ap(r, o) {
    const c = o === !0;
    if (!r || typeof r != "object") return !1;
    if (Ne(r)) {
      const l = String(r.actionGroupId || r.id || "").trim(), h = Me().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    if (We(r)) {
      const l = Ke(r.rasterObjectId || r.id || ""), h = pn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    return r.locked === c ? !1 : (r.locked = c, !0);
  }
  function op() {
    if (i) return;
    const r = In();
    if (!r.length) return;
    const o = !xs(r);
    let c = !1;
    r.forEach((l) => {
      ap(l, o) && (c = !0);
    }), c && (re(), pe(), zt(), ht());
  }
  function ji(r) {
    p.selectedId = (r == null ? void 0 : r.id) || null, p.selectedIds = r != null && r.id ? [r.id] : [], r && Pe(r) ? d.active.selected_sticker_id = r.id || null : d.active.selected_sticker_id = null, r && bn(r) ? d.active.selected_shot_id = r.id || null : r ? bn(r) || (d.active.selected_shot_id = d.active.selected_shot_id) : d.active.selected_shot_id = null;
  }
  function sp(r, o = null) {
    const c = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((w) => {
      const y = String((w == null ? void 0 : w.id) || "").trim();
      !y || l.has(y) || (l.add(y), c.push(y));
    }), p.selectedIds = c;
    const h = String(o || "").trim();
    p.selectedId = h && c.includes(h) ? h : c[c.length - 1] || null;
    const m = fe();
    d.active.selected_sticker_id = m && Pe(m) && m.id || null, m && bn(m) ? d.active.selected_shot_id = m.id || null : c.length || (d.active.selected_shot_id = null);
  }
  function cp() {
    const r = (Array.isArray(d.shots) ? d.shots : []).map((c, l) => ({
      kind: "frame",
      item: c,
      label: "Frame"
    })), o = (Array.isArray(d.stickers) ? d.stickers : []).map((c, l) => {
      var m, w;
      const h = we(c) ? String(c.id || Fr) : String(((w = (m = d.assets) == null ? void 0 : m[c.asset_id]) == null ? void 0 : w.name) || c.asset_id || c.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: c,
        label: h
      };
    });
    return [...r, ...o];
  }
  function lp(r) {
    return r === "frame" ? Et.camera : r === "stroke" ? Et.paintbrush_vertical_tool : Et.image;
  }
  function El(r) {
    return !r || !r.item ? xo(String((r == null ? void 0 : r.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${lp(r.kind)}</span><span>${xo(String(r.label || ""))}</span>`;
  }
  function Tl() {
    return bs();
  }
  function we(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Fr || String(r.source_kind || "") === vc;
  }
  function ni(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function up(r) {
    return we(r) && ni(r) ? bh : 1;
  }
  function fp() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function dp() {
    return String(fp() || "") === "lasso_fill";
  }
  function hp() {
    if (i) return;
    const r = fe();
    !r || !we(r) || (r.visible = ni(r), ln(), re(), pe(), Bt(), zt(), ht());
  }
  function pp() {
    if (i || e !== "stickers") return;
    const r = fe();
    if (!r || !we(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const c = Ss(_c, () => {
      ht();
    });
    c && (c.complete || c.naturalWidth || c.width) ? r.vFOV_deg = Tr(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), re(), pe(), Bt(), zt(), ht();
  }
  function gp(r) {
    if (!r || !we(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const c = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, l = Ss(_c, () => {
      ht();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (c.vFOV_deg = Tr(
      c.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), c;
  }
  function mp() {
    const r = fe();
    if (!r || !we(r)) return !1;
    const o = gp(r);
    if (!o) return !1;
    const c = (l, h) => Math.abs(Number(l || 0) - Number(h || 0)) <= 1e-4;
    return !(c(r.yaw_deg, o.yaw_deg) && c(r.pitch_deg, o.pitch_deg) && c(r.hFOV_deg, o.hFOV_deg) && c(r.vFOV_deg, o.vFOV_deg) && c(r.rot_deg, o.rot_deg));
  }
  function Dl(r) {
    var c;
    const o = Pa(t == null ? void 0 : t.id);
    return Array.isArray((c = o == null ? void 0 : o.ui) == null ? void 0 : c[r]) ? o.ui[r] : Array.isArray(o == null ? void 0 : o[r]) ? o[r] : [];
  }
  function yp(r) {
    const o = Pa(t == null ? void 0 : t.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, r) ? o.ui[r] : o && Object.prototype.hasOwnProperty.call(o, r) ? o[r] : null;
  }
  function bp(r, o = null) {
    var c;
    if (r && typeof r == "object" && !Array.isArray(r)) return r;
    if (Array.isArray(r) && r.length > 0) {
      const l = r[0];
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
  function Ss(r, o = null) {
    const c = Dl(r), l = Array.isArray(c) && c.length ? c[0] : null, h = Oi(l);
    if (!h) return null;
    const m = `__ui__${r}`, w = jt.get(m);
    if (w && w.__panoSrc === h) return w;
    const y = new Image();
    return y.__panoSrc = h, y.onload = () => {
      typeof o == "function" ? o(y) : ht();
    }, y.src = h, jt.set(m, y), y;
  }
  function Rl(r = null) {
    const o = ed(t, ["sticker_image"], r, "sticker_image_exact");
    return o || Ss(_c, r);
  }
  function Ll(r) {
    const o = String(r || "");
    let c = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      c ^= o.charCodeAt(l), c = Math.imul(c, 16777619);
    return String(c >>> 0);
  }
  function Tr(r, o, c) {
    const l = Math.max(1, Number(o || 1)), h = Math.max(1, Number(c || 1)), m = U(Number(r || 30), 0.1, 179) * De, w = 2 * Math.atan(Math.tan(m * 0.5) * (h / l));
    return U(w * zr, 0.1, 179);
  }
  function vp(r) {
    const o = String(r || "").trim();
    if (!o) return null;
    try {
      const c = JSON.parse(o);
      if (!c || typeof c != "object" || String(c.kind || "") !== "pano_sticker_state") return null;
      const l = c.version;
      let h = null;
      if (typeof l == "number" && Number.isInteger(l) ? h = l : typeof l == "string" && /^\d+$/.test(l) && (h = Number.parseInt(l, 10)), h !== 1) return null;
      const m = c.pose;
      if (!m || typeof m != "object") return null;
      const w = Number(m.yaw_deg), y = Number(m.pitch_deg), v = Number(m.roll_deg), N = Number(m.hFOV_deg);
      if (![w, y, v, N].every((O) => Number.isFinite(O))) return null;
      let x = ((w + 180) % 360 + 360) % 360 - 180;
      Object.is(x, -0) && (x = 0);
      const k = {
        yaw_deg: x,
        pitch_deg: U(y, -89.9, 89.9),
        roll_deg: v,
        hFOV_deg: U(N, 0.1, 179)
      }, R = Number(c.source_aspect);
      return Number.isFinite(R) && R > 0 && (k.source_aspect = R), k;
    } catch {
      return null;
    }
  }
  function Ol(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), c = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = Gc(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Re(Number.isFinite(o) ? o : 0),
        pitch_deg: U(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: U(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function _p(r) {
    var y;
    if (!r || typeof r != "object") return Ol(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), c = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = Number(r == null ? void 0 : r.vFOV_deg);
    let w = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const v = U(h, 0.1, 179) * De, N = U(m, 0.1, 179) * De, x = Math.tan(N * 0.5);
      if (Math.abs(x) > 1e-6) {
        const k = Math.tan(v * 0.5) / x;
        Number.isFinite(k) && k > 0 && (w = k);
      }
    }
    if (r != null && r.asset_id && ((y = d == null ? void 0 : d.assets) != null && y[r.asset_id])) {
      const v = d.assets[r.asset_id], N = Number((v == null ? void 0 : v.w) || 0), x = Number((v == null ? void 0 : v.h) || 0);
      N > 0 && x > 0 && (w = N / x);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Re(Number.isFinite(o) ? o : 0),
        pitch_deg: U(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: U(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: w
    };
  }
  function wp(r) {
    var l, h, m, w, y;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((v) => String((v == null ? void 0 : v.name) || "") === String(r)) : null, c = o == null ? void 0 : o.link;
    if (c != null) {
      const v = Kh(t.graph, c), { originId: N, originSlot: x } = Wh(v), k = Pa(N), R = [
        k == null ? void 0 : k.output,
        k == null ? void 0 : k.result,
        (l = k == null ? void 0 : k.data) == null ? void 0 : l.output,
        (h = k == null ? void 0 : k.data) == null ? void 0 : h.result,
        (m = k == null ? void 0 : k.ui) == null ? void 0 : m.output,
        (w = k == null ? void 0 : k.ui) == null ? void 0 : w.result
      ];
      for (const O of R) {
        if (!Array.isArray(O)) continue;
        const $ = Number(x || 0), W = O[$];
        if (typeof W == "string" && W.trim()) return W;
      }
    }
    return String(((y = gn(t, r)) == null ? void 0 : y.value) || "");
  }
  function xp(r, o, c) {
    const l = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : vp(o);
    if (l) {
      const w = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || l.source_aspect || 1), y = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Tr(l.hFOV_deg, w, y),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const h = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 1), m = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
    return {
      yaw_deg: Number(p.viewYaw || 0),
      pitch_deg: Number(p.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Tr(30, h, m),
      rot_deg: 0
    };
  }
  function Fl(r = "sync") {
    if (e !== "stickers" || i) return;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((O) => String((O == null ? void 0 : O.name) || "") === "sticker_image") : null, c = (o == null ? void 0 : o.link) ?? null, l = Rl(() => {
      var O;
      (O = t.__panoExternalStickerSync) == null || O.call(t, "image-loaded");
    }), h = bp(yp("pano_sticker_input_pose"), null), m = wp("sticker_state"), w = Ll(h && typeof h == "object" ? JSON.stringify(h) : m), y = Array.isArray(d.stickers) ? d.stickers : d.stickers = [], v = y.findIndex((O) => String((O == null ? void 0 : O.id) || "") === Fr);
    if (c == null) {
      v >= 0 && (y.splice(v, 1), p.selectedId === Fr && (p.selectedId = null, p.selectedIds = [], d.active.selected_sticker_id = null), pe(), Bt(), zt(), ht());
      return;
    }
    const N = y.reduce((O, $) => Math.max(O, Number(($ == null ? void 0 : $.z_index) || 0)), -1);
    let x = v >= 0 ? y[v] : null;
    const k = !x || Number(x.source_link_id ?? -1) !== Number(c) || String(x.source_state_hash || "") !== w;
    x || (x = {
      id: Fr,
      source_kind: vc
    }, y.push(x)), x.id = Fr, x.source_kind = vc, x.source_link_id = Number(c), x.source_state_hash = w, x.visible = x.visible !== !1;
    let R = !1;
    if (k) {
      const O = xp(h, m, l);
      Object.assign(x, O, {
        initial_pose: { ...O },
        visible: !0,
        z_index: N + 1
      }), R = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const O = Tr(
        Number(x.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(x.vFOV_deg || 0) - O) > 1e-6 && (x.vFOV_deg = O, R = !0);
    }
    R && (pe(), Bt(), zt()), ht();
  }
  function ri(r = {}) {
    const c = r.preservePanelValues !== !1 ? fe() : null;
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
  function Sp() {
    var l;
    if (e !== "cutout") return;
    const r = Array.isArray(d.shots) ? d.shots : [];
    if (!Array.isArray(r) || r.length === 0) return;
    const o = String(((l = d.active) == null ? void 0 : l.selected_shot_id) || ""), c = r.find((h) => String((h == null ? void 0 : h.id) || "") === o) || r[0];
    c && (d.active.selected_shot_id = c.id || null, p.viewYaw = Re(Number(c.yaw_deg || 0)), p.viewPitch = U(Number(c.pitch_deg || 0), -89.9, 89.9));
  }
  function ja() {
    if (!X) return;
    e === "cutout" && Array.isArray(d.shots) && d.shots.length > 0 ? (X.innerHTML = Et.crosshair, X.setAttribute("aria-label", "Look at frame"), X.setAttribute("data-tip", "Look at frame")) : (X.innerHTML = Et.plus_circle, X.setAttribute("aria-label", "Add frame"), X.setAttribute("data-tip", "Add frame"));
  }
  function Ua() {
    const r = e === "cutout" && Array.isArray(d.shots) && d.shots.length > 0;
    p.mode === "frame" && !r && (p.mode = "pano"), at && (at.disabled = !r, at.setAttribute("aria-disabled", r ? "false" : "true")), z.forEach((o) => {
      const c = o.dataset.view === p.mode;
      o.setAttribute("aria-pressed", c ? "true" : "false");
    }), ft && ft.setAttribute("data-selected", p.mode), bu() ? ge(p.pointerPos) : C.style.cursor = p.mode === "pano" ? "grab" : "default";
  }
  function Np() {
    const o = Bl({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function Ns() {
    const r = $n(p.viewYaw, p.viewPitch);
    let o = qn(0, 1, 0);
    Math.abs(Sn(r, o)) > 0.999 && (o = qn(0, 0, 1));
    const c = mi(yo(o, r)), l = mi(yo(r, c));
    return { right: c, up: l, fwd: r };
  }
  function Ui(r) {
    const { right: o, up: c, fwd: l } = Ns(), h = Sn(r, o), m = Sn(r, c), w = Sn(r, l);
    if (w <= 1e-5) return null;
    const y = C.width, v = C.height, N = p.viewFov * De, x = 2 * Math.atan(Math.tan(N / 2) * (v / y)), k = y / 2 / Math.tan(N / 2), R = v / 2 / Math.tan(x / 2);
    return {
      x: y / 2 + h / w * k,
      y: v / 2 - m / w * R,
      z: w
    };
  }
  function Ms(r, o) {
    const { right: c, up: l, fwd: h } = Ns(), m = C.width, w = C.height, y = p.viewFov * De, v = 2 * Math.atan(Math.tan(y / 2) * (w / m)), N = (r - m / 2) / (m / 2) * Math.tan(y / 2), x = (w / 2 - o) / (w / 2) * Math.tan(v / 2), k = go(go(mo(c, N), mo(l, x)), h);
    return mi(k);
  }
  function pr() {
    const r = C.width, o = C.height, c = 2;
    if (r / Math.max(o, 1) >= c) {
      const y = o, v = y * c;
      return { x: (r - v) * 0.5, y: 0, w: v, h: y };
    }
    const h = r, m = h / c;
    return { x: 0, y: (o - m) * 0.5, w: h, h: m };
  }
  function Vl(r) {
    var w;
    if (r && typeof r == "object" && (we(r) || r.external === !0))
      return Rl(() => {
        var y;
        (y = t.__panoExternalStickerSync) == null || y.call(t, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const c = jt.get(o);
    if (c) return c;
    const l = (w = d.assets) == null ? void 0 : w[o], h = Ov(l);
    if (!h) return null;
    const m = new Image();
    return m.onload = () => ht(), m.src = h, jt.set(o, m), m;
  }
  function Hl(r, o = null) {
    const c = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!c) return null;
    const l = Yt.get(c);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const h = new Image();
    return h.onload = () => {
      typeof o == "function" && o();
    }, h.src = c, Yt.set(c, h), h;
  }
  function Mp(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const c = ue.get(o);
    if (c) return c.ready ? c : null;
    const l = Hl(r, () => {
      const x = ue.get(o);
      x && (x.ready = !1), ht({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const h = Number(l.naturalWidth || l.width || 0), m = Number(l.naturalHeight || l.height || 0);
    if (h < 1 || m < 1) return null;
    const w = document.createElement("canvas");
    w.width = h, w.height = m;
    const y = w.getContext("2d", { willReadFrequently: !0 });
    if (!y) return null;
    y.clearRect(0, 0, h, m), y.drawImage(l, 0, 0, h, m);
    const v = y.getImageData(0, 0, h, m).data, N = { canvas: w, width: h, height: m, alpha: v, ready: !0 };
    return ue.set(o, N), N;
  }
  function kp(r, o, c = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), w = zi(Number(r.u || 0), h), y = Number(r.v || 0) - m, v = Math.max(0.02, Number(c || 1)), N = Number(l || 0) * De, x = Math.cos(N), k = Math.sin(N), R = w / v, O = y / v, $ = R * x + O * k, W = -R * k + O * x;
    return {
      ...r,
      u: ((h + $) % 1 + 1) % 1,
      v: m + W
    };
  }
  function Pp(r, o) {
    if (!r || !o) return null;
    const c = (r == null ? void 0 : r.bbox) || null;
    if (!c) return null;
    const l = (r == null ? void 0 : r.transform) || {}, h = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, w = kp(
      m,
      h,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), y = Number(c.u1 || 0) - Number(c.u0 || 0), v = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(y > 1e-6) || !(v > 1e-6)) return null;
    const N = zi(Number(w.u || 0), Number(c.u0 || 0)) / y, x = (Number(w.v || 0) - Number(c.v0 || 0)) / v;
    if (N < 0 || N > 1 || x < 0 || x > 1) return 0;
    const k = Mp(r);
    if (!k) return null;
    const R = U(Math.floor(N * k.width), 0, k.width - 1), O = U(Math.floor(x * k.height), 0, k.height - 1);
    return Number(k.alpha[(O * k.width + R) * 4 + 3] || 0);
  }
  function $l(r, o, c, l = null) {
    if (!(o != null && o.visible) || !ar(c, o.corners)) return !1;
    const h = l || vn(c, performance.now()), m = Pp(r, h);
    return m === null ? !0 : m > 8;
  }
  function Ap() {
    var l, h, m, w, y, v, N, x;
    const r = ((h = (l = p.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, Er(!1))) || null, o = Math.max(1, Number(((m = r == null ? void 0 : r.descriptor) == null ? void 0 : m.width) || ((y = (w = r == null ? void 0 : r.displayPaint) == null ? void 0 : w.canvas) == null ? void 0 : y.width) || 2048)), c = Math.max(1, Number(((v = r == null ? void 0 : r.descriptor) == null ? void 0 : v.height) || ((x = (N = r == null ? void 0 : r.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : x.height) || 1024));
    return { width: o, height: c };
  }
  function Bi() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function Cp(r, o = null) {
    const c = Ke((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), l = (r == null ? void 0 : r.bbox) || null;
    if (!c || !l) return null;
    const h = Hl(r, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: w } = Ap(), y = (r == null ? void 0 : r.transform) || {}, v = [
      c,
      m,
      w,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      y.du,
      y.dv,
      y.rot_deg,
      y.scale,
      Ki()
    ].join(":"), N = be.get(v);
    if (N) return N;
    be.size > 64 && be.clear();
    const x = document.createElement("canvas");
    x.width = m, x.height = w;
    const k = x.getContext("2d");
    if (!k) return null;
    const R = Number(l.u0 || 0) * m, O = Number(l.v0 || 0) * w, $ = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * m), W = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * w), pt = R + $ * 0.5 + Number(y.du || 0) * m, wt = O + W * 0.5 + Number(y.dv || 0) * w, vt = Number(y.rot_deg || 0) * De, lt = Math.max(0.01, Number(y.scale || 1));
    for (const gt of [-m, 0, m])
      k.save(), k.translate(pt + gt, wt), k.rotate(vt), k.scale(lt, lt), k.drawImage(h, -$ * 0.5, -W * 0.5, $, W), k.restore();
    return be.set(v, x), x;
  }
  function zl() {
    return ys(d, {
      selectedId: p.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function jl(r) {
    return vh(
      d,
      (o, c, l) => Vl(l || o),
      { scene: r }
    );
  }
  function ks(r, o, c, l, h = "modal_object_view") {
    var pt, wt, vt, lt;
    if (!r || !o || !c) return !1;
    const m = String((c == null ? void 0 : c.mode) || ""), w = !!l && !!l.complete && Number(l.naturalWidth || l.width || 0) > 1 && Number(l.naturalHeight || l.height || 0) > 1;
    if (m === "unwrap") {
      let gt = !1;
      w && p.showPanorama && (r.save(), r.globalAlpha = 1, r.drawImage(l, o.x, o.y, o.w, o.h), r.restore(), gt = !0);
      const mt = Er(), bt = ((wt = (pt = p.paintEngine) == null ? void 0 : pt.getErpTarget) == null ? void 0 : wt.call(pt, mt)) || null, ut = p.showObjects && ((vt = bt == null ? void 0 : bt.displayPaint) == null ? void 0 : vt.canvas) || null, j = p.showMask && ((lt = bt == null ? void 0 : bt.committedMask) == null ? void 0 : lt.canvas) || null;
      return ut && (r.drawImage(ut, o.x, o.y, o.w, o.h), gt = !0), j && (r.drawImage(j, o.x, o.y, o.w, o.h), gt = !0), gt;
    }
    if (Wl(o, c))
      return Vp(
        o,
        c,
        w && p.showPanorama ? l : null,
        `${h}_bg_gl`
      );
    const v = ql(), N = Yl(v), x = p.showObjects ? Xl() : null, k = p.showMask ? Zl() : null, R = hc({
      stateRevision: [
        h,
        w ? String(l.currentSrc || l.src || "") : "no_bg",
        w ? Number(l.naturalWidth || l.width || 0) : 0,
        w ? Number(l.naturalHeight || l.height || 0) : 0,
        Array.isArray(N) ? N.map((gt) => `${String((gt == null ? void 0 : gt.assetId) || "")}:${String((gt == null ? void 0 : gt.revision) || "")}`).join(",") : "none",
        x ? Dr() : "paint:none",
        k ? `${En()}:mask` : "mask:none"
      ].join("|"),
      backgroundSource: w && p.showPanorama ? l : null,
      backgroundRevision: w ? `${h}:bg` : "",
      coverageDeg: He(d.coverage),
      scene: v,
      textures: N,
      paintSource: x,
      paintRevision: x ? Dr() : "",
      maskSource: k,
      maskRevision: k ? `${En()}:mask` : "",
      rasterEntries: [],
      backgroundOpacity: 1,
      showMaskTint: !1
    }), O = m === "cutout" ? Q : ct;
    if (!O.syncState(R)) return !1;
    const W = O.renderToTarget(`${h}_direct`, c, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return W ? (r.drawImage(W, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function Ps(r, o = "sticker.png") {
    const c = new FormData();
    c.append("image", r), c.append("type", "input"), c.append("subfolder", "panorama_stickers");
    const l = await Qe.fetchApi("/upload/image", { method: "POST", body: c });
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
      name: String((r == null ? void 0 : r.name) || o)
    };
  }
  async function As(r, o) {
    const c = await new Promise((y) => r.toBlob(y, "image/png")), l = new FormData();
    l.append("image", c, o), l.append("type", "temp"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const h = await Qe.fetchApi("/upload/image", { method: "POST", body: l });
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
  let Cs = null, Ba = !1;
  function Ip() {
    const r = Jf(d.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = d.painting_layer, c = En();
    return !o || typeof o != "object" || String(o.revision || "") !== c || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function Is() {
    const r = String(t.id ?? "0"), o = pa.get(r);
    if (Ba && o) return o;
    const c = (async () => {
      var m, w, y, v, N, x, k, R, O, $, W, pt;
      const l = En(), h = Jf(d.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        d.painting_layer !== null && (d.painting_layer = null, Cs = l, Dn());
        return;
      }
      if (Cs !== l && !Ba) {
        Ba = !0;
        try {
          Wa();
          const wt = Er(!1), vt = ((w = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : w.call(m, wt)) || null, lt = ((y = vt == null ? void 0 : vt.displayPaint) == null ? void 0 : y.canvas) || null, gt = ((v = vt == null ? void 0 : vt.committedMask) == null ? void 0 : v.canvas) || null, mt = Math.max(1, Number(((N = vt == null ? void 0 : vt.descriptor) == null ? void 0 : N.width) || (lt == null ? void 0 : lt.width) || (gt == null ? void 0 : gt.width) || 2048)), bt = Math.max(1, Number(((x = vt == null ? void 0 : vt.descriptor) == null ? void 0 : x.height) || (lt == null ? void 0 : lt.height) || (gt == null ? void 0 : gt.height) || 1024));
          (!lt && h.totalPaintCount > 0 || !gt && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((k = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : k.width) || 0) !== mt || Number(((R = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : R.height) || 0) !== bt) && (p._paintLayerSyncBlankSurface = Hs(mt, bt)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, mt, bt));
          const ut = lt || h.totalPaintCount > 0 && ((O = p._paintLayerSyncBlankSurface) == null ? void 0 : O.canvas) || null, j = gt || h.totalMaskCount > 0 && (($ = p._paintLayerSyncBlankSurface) == null ? void 0 : $.canvas) || null;
          if (!ut && !j) return;
          let st = null, Pt = null;
          const Ut = [];
          if (h.totalPaintCount > 0) {
            st = await As(ut, `pano_paint_${r}.png`);
            for (const At of wt) {
              const Tt = String(At || "").trim();
              if (!Tt) continue;
              const $t = ((pt = (W = p.paintEngine) == null ? void 0 : W.getGroupDisplayCanvas) == null ? void 0 : pt.call(W, Tt)) || null;
              if (!$t) continue;
              const Ft = Tt.replace(/[^a-zA-Z0-9_-]+/g, "_"), Vt = await As($t, `pano_group_${r}_${Ft}.png`);
              Vt && Ut.push({
                id: Tt,
                actionGroupId: Tt,
                image: Vt
              });
            }
          }
          h.totalMaskCount > 0 && (Pt = await As(j, `pano_mask_${r}.png`)), l === En() && (d.painting_layer = {
            paint: st,
            mask: Pt,
            groups: Ut,
            revision: l
          }, Cs = l, Dn());
        } catch (wt) {
          throw wt;
        } finally {
          Ba = !1;
        }
      }
    })();
    return pa.set(r, c), c.finally(() => {
      pa.get(r) === c && pa.delete(r);
    }), c;
  }
  function ii() {
    const r = Vv(t, "pano_input_images", jt, () => ht());
    if (r) return r;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((w) => String((w == null ? void 0 : w.name) || "")) : [], c = o.includes("erp_image"), l = o.includes("bg_erp");
    let h = [];
    return i && (c || l) ? h = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : h = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], ed(t, h, () => ht(), `background:${h.join("|")}`);
  }
  function Ul(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function Ep() {
    if (!kt.hasPresentedFrame) return "boot";
    let r = !1, o = !1;
    if (p.showPanorama) {
      const c = ii();
      r = !!c && !Ul(c);
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
    return r && o ? "mixed" : r ? "background" : o ? "stickers" : "";
  }
  function ai() {
    const r = new Set(
      (d.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(d.assets || {}).forEach((o) => {
      r.has(o) || (delete d.assets[o], jt.delete(o));
    });
  }
  function Es(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(U(r.y, -1, 1))
    };
  }
  function Ts(r, o = null) {
    const { lon: c, lat: l } = Es(r), h = pr();
    let m = h.x + (c / (2 * Math.PI) + 0.5) * h.w;
    const w = h.y + (0.5 - l / Math.PI) * h.h;
    if (o !== null) {
      for (; m - o > h.w / 2; ) m -= h.w;
      for (; m - o < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: w, z: 1 };
  }
  function Ga(r) {
    const o = $n(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let c = qn(0, 1, 0);
    Math.abs(Sn(o, c)) > 0.999 && (c = qn(0, 0, 1));
    const l = mi(yo(c, o)), h = mi(yo(o, l)), m = Math.tan(U(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * De), w = Math.tan(U(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * De), y = Number(r.rot_deg || r.roll_deg || 0) * De, v = Math.cos(y), N = Math.sin(y);
    return {
      centerDir: o,
      right: l,
      up: h,
      tanX: m,
      tanY: w,
      cr: v,
      sr: N
    };
  }
  function gr(r, o, c) {
    const l = o * r.cr - c * r.sr, h = o * r.sr + c * r.cr;
    return mi(go(go(r.centerDir, mo(r.right, l)), mo(r.up, h)));
  }
  function Bl(r) {
    const o = Ga(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: h }) => gr(o, l * o.tanX, h * o.tanY));
  }
  function Gl(r, o, c) {
    const l = Ga(r), h = (o * 2 - 1) * l.tanX, m = (1 - c * 2) * l.tanY;
    return gr(l, h, m);
  }
  function Tp(r) {
    const o = (r == null ? void 0 : r.bbox) || null, c = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: U((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Dp(r) {
    var v, N, x, k;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const c = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((v = r == null ? void 0 : r.transform) == null ? void 0 : v.scale) || 1)), h = Number(((N = r == null ? void 0 : r.transform) == null ? void 0 : N.rot_deg) || 0), m = Number(((x = r == null ? void 0 : r.transform) == null ? void 0 : x.du) || 0), w = Number(((k = r == null ? void 0 : r.transform) == null ? void 0 : k.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((R) => $a(za(R, c, l, h), m, w));
  }
  function Rp(r) {
    const o = Ke((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), c = (r == null ? void 0 : r.transform) || {}, l = (r == null ? void 0 : r.bbox) || {}, h = `${o}:${p.mode}:${Ki()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (p.mode === "frame") {
      const m = Zt(), w = m ? Ye(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Lp(r) {
    const o = String((r == null ? void 0 : r.id) || ""), l = [
      bn(r) ? "frame" : Pe(r) ? "sticker" : "item",
      o,
      p.mode,
      Number((r == null ? void 0 : r.yaw_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.pitch_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.hFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.vFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.rot_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.roll_deg) || 0).toFixed(4),
      yi(r)
    ].join(":");
    if (p.mode === "frame") {
      const h = Zt(), m = h ? Ye(h) : null;
      return `${l}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Op() {
    var o;
    const r = String(((o = d.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? p.hqFrames && p.hqFrames > 0 ? [28, 20] : p.interaction ? [12, 9] : [20, 14] : r === "high" ? p.hqFrames && p.hqFrames > 0 ? [48, 36] : p.interaction ? [20, 14] : [36, 26] : p.hqFrames && p.hqFrames > 0 ? [40, 30] : p.interaction ? [16, 12] : [28, 20];
  }
  function Kl() {
    var r;
    return !!V && !!((r = ct == null ? void 0 : ct.isSupported) != null && r.call(ct));
  }
  function Wl(r, o) {
    return !Kl() || e !== "stickers" && e !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((C == null ? void 0 : C.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((C == null ? void 0 : C.height) || 0));
  }
  function ql() {
    return p.showObjects ? zl() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Yl(r) {
    return !p.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : jl(r);
  }
  function Xl() {
    var o, c, l, h;
    const r = Er();
    return ((h = (l = (c = (o = p.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, r)) == null ? void 0 : l.displayPaint) == null ? void 0 : h.canvas) || null;
  }
  function Zl() {
    var o, c, l, h;
    const r = Er();
    return ((h = (l = (c = (o = p.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, r)) == null ? void 0 : l.committedMask) == null ? void 0 : h.canvas) || null;
  }
  function Fp(r, o = "modal_bg_gl") {
    const c = ql(), l = Yl(c), h = !!r && !!r.complete && Number(r.naturalWidth || r.width || 0) > 1 && Number(r.naturalHeight || r.height || 0) > 1, m = h ? [
      String(r.currentSrc || r.src || ""),
      Number(r.naturalWidth || r.width || 0),
      Number(r.naturalHeight || r.height || 0)
    ].join("|") : "none", w = p.showObjects ? Xl() : null, y = p.showMask ? Zl() : null, v = [
      o,
      m,
      Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((N) => String((N == null ? void 0 : N.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((N) => `${String((N == null ? void 0 : N.assetId) || "")}:${String((N == null ? void 0 : N.revision) || "")}`).join(",") : "none",
      w ? Dr() : "paint:none",
      y ? `${En()}:mask` : "mask:none",
      p.showPanorama ? "panorama:1" : "panorama:0",
      p.showObjects ? "objects:1" : "objects:0",
      p.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: hc({
        stateRevision: v,
        backgroundSource: h ? r : null,
        backgroundRevision: h ? `${o}:${m}` : "",
        coverageDeg: He(d.coverage),
        scene: c,
        textures: l,
        paintSource: w,
        paintRevision: w ? Dr() : "",
        maskSource: y,
        maskRevision: y ? `${En()}:mask` : "",
        rasterEntries: [],
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: h || l.length > 0 || !!w || !!y
    };
  }
  function Ds() {
    if (!V) return;
    const r = V.getContext("webgl2");
    if (r)
      r.viewport(0, 0, V.width, V.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = V.getContext("2d");
      o && (o.clearRect(0, 0, V.width, V.height), o.fillStyle = "#070707", o.fillRect(0, 0, V.width, V.height));
    }
    kt.backgroundWasVisible = !1, kt.backgroundDirty = !1;
  }
  function Vp(r, o, c, l = "modal_bg_gl") {
    var N;
    if (!Wl(r, o)) return !1;
    if (!kt.backgroundDirty && kt.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: m } = Fp(c, l);
    if (!m || !ct.syncState(h))
      return Ds(), !1;
    const y = ct.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), v = (N = V == null ? void 0 : V.getContext) == null ? void 0 : N.call(V, "2d");
    return !y || !v ? (Ds(), !1) : (v.clearRect(0, 0, V.width, V.height), v.drawImage(y, 0, 0, V.width, V.height), kt.backgroundWasVisible = !0, kt.backgroundDirty = !1, !0);
  }
  function Hp(r = !1) {
    const o = C.width, c = C.height, l = pr();
    if (I.globalAlpha = 1, I.lineWidth = 1, r || (I.fillStyle = "#070707", I.fillRect(0, 0, o, c), I.fillStyle = "#070707", I.fillRect(l.x, l.y, l.w, l.h)), Wa(), ks(
      I,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      ii(),
      "modal_unwrap"
    ), p.showGrid && !p.fullscreen) {
      I.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const w = l.x + l.w * m / 16;
        I.beginPath(), I.moveTo(w, l.y), I.lineTo(w, l.y + l.h), I.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const w = l.y + l.h * m / 8;
        I.beginPath(), I.moveTo(l.x, w), I.lineTo(l.x + l.w, w), I.stroke();
      }
      I.strokeStyle = "rgba(250, 250, 250, 0.86)", I.lineWidth = 1.2, I.beginPath(), I.moveTo(l.x, l.y + l.h / 2), I.lineTo(l.x + l.w, l.y + l.h / 2), I.stroke(), I.fillStyle = "rgba(250, 250, 250, 0.42)", I.font = "500 11px Geist, sans-serif", I.textAlign = "center";
      const h = l.y + l.h * 0.57;
      I.fillText("Left", l.x + l.w * 0.25, h), I.fillText("Front", l.x + l.w * 0.5, h), I.fillText("Right", l.x + l.w * 0.75, h), I.fillText("Back", l.x + 38, h), I.fillText("Back", l.x + l.w - 38, h);
    }
  }
  function Jl(r, o, c = 1) {
    let l = !1;
    I.strokeStyle = o, I.lineWidth = c, I.beginPath();
    for (const h of r) {
      const m = Ui(h);
      if (!m) {
        l = !1;
        continue;
      }
      l ? I.lineTo(m.x, m.y) : (I.moveTo(m.x, m.y), l = !0);
    }
    I.stroke();
  }
  function $p(r = !1) {
    const o = C.width, c = C.height;
    if (r || (Kl() ? I.clearRect(0, 0, o, c) : (I.fillStyle = "#070707", I.fillRect(0, 0, o, c))), Wa(), ks(
      I,
      { x: 0, y: 0, w: o, h: c },
      {
        mode: "panorama",
        yawDeg: p.viewYaw,
        pitchDeg: p.viewPitch,
        fovDeg: p.viewFov,
        coverageDeg: He(d.coverage)
      },
      ii(),
      "modal_pano"
    ), p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let w = -89; w <= 89; w += 4) m.push($n(h, w));
        Jl(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let w = -180; w <= 180; w += 4) m.push($n(w, h));
        Jl(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: $n(-90, 0) },
        { name: "Front", dir: $n(0, 0) },
        { name: "Right", dir: $n(90, 0) },
        { name: "Back", dir: $n(180, 0) }
      ];
      I.fillStyle = "rgba(250, 250, 250, 0.42)", I.font = "500 11px Geist, sans-serif", I.textAlign = "center", l.forEach((h) => {
        const m = Ui(h.dir);
        m && I.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function Ql(r, o = null, c = null) {
    if (p.mode === "frame") {
      const l = o || Zt();
      if (!l) return [];
      const h = c || Ye(l);
      return vg(r, l, h);
    }
    return mg(r);
  }
  function zp(r, o) {
    const c = String(r.actionGroupId || r.id || "").trim(), l = Cn(c, r.layerKind), h = [], m = [], w = p.mode === "frame" ? Zt() : null, y = w ? Ye(w) : null;
    for (const lt of l) {
      const gt = (lt == null ? void 0 : lt.geometry) || null, mt = (gt == null ? void 0 : gt.geometryKind) === "lasso_fill" ? gt == null ? void 0 : gt.points : (gt == null ? void 0 : gt.processedPoints) || (gt == null ? void 0 : gt.rawPoints) || (gt == null ? void 0 : gt.points) || [], bt = Ql(mt, w, y).filter((st) => Number.isFinite(st == null ? void 0 : st.x) && Number.isFinite(st == null ? void 0 : st.y));
      if (!bt.length) continue;
      m.push(...bt);
      const ut = _r(String((lt == null ? void 0 : lt.toolKind) || "pen")), j = an[ut] || an[ir];
      h.push({
        points: bt,
        closed: String((gt == null ? void 0 : gt.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((lt == null ? void 0 : lt.size) || 10) * Math.max(0.1, Number((j == null ? void 0 : j.sizeScale) ?? 1)) + 10),
        layerKind: String((lt == null ? void 0 : lt.layerKind) || r.layerKind || "paint")
      });
    }
    if (!m.length) {
      const lt = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(o, lt), lt;
    }
    let v = 1 / 0, N = 1 / 0, x = -1 / 0, k = -1 / 0;
    for (const lt of h)
      for (const mt of Array.isArray(lt == null ? void 0 : lt.points) ? lt.points : []) {
        const bt = Number((mt == null ? void 0 : mt.x) || 0), ut = Number((mt == null ? void 0 : mt.y) || 0);
        v = Math.min(v, bt - 2), N = Math.min(N, ut - 2), x = Math.max(x, bt + 2), k = Math.max(k, ut + 2);
      }
    if (!Number.isFinite(v) || !Number.isFinite(N) || !Number.isFinite(x) || !Number.isFinite(k)) {
      const lt = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(o, lt), lt;
    }
    const R = [
      { x: v, y: N },
      { x, y: N },
      { x, y: k },
      { x: v, y: k }
    ], O = { x: (v + x) * 0.5, y: (N + k) * 0.5 }, $ = { x: O.x, y: N }, W = { x, y: O.y }, pt = { x: O.x, y: k }, wt = { x: v, y: O.y }, vt = {
      kind: "strokeGroup",
      center: O,
      corners: R,
      edgeMidpoints: [
        { edge: "top", x: $.x, y: $.y, a: R[0], b: R[1] },
        { edge: "right", x: W.x, y: W.y, a: R[1], b: R[2] },
        { edge: "bottom", x: pt.x, y: pt.y, a: R[2], b: R[3] },
        { edge: "left", x: wt.x, y: wt.y, a: R[3], b: R[0] }
      ],
      rotateStemBase: $,
      rotateHandle: { x: $.x, y: $.y - 30 },
      strokePaths: h,
      visible: !0
    };
    return p._strokeGeomCache.set(o, vt), vt;
  }
  function jp(r, o) {
    const c = Dp(r), l = Ql(c);
    if (!Array.isArray(l) || l.length < 4) {
      const y = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(o, y), y;
    }
    const h = l.slice(0, 4).map((y) => ({ x: Number((y == null ? void 0 : y.x) || 0), y: Number((y == null ? void 0 : y.y) || 0) })), w = {
      kind: "rasterObject",
      center: {
        x: h.reduce((y, v) => y + Number(v.x || 0), 0) / h.length,
        y: h.reduce((y, v) => y + Number(v.y || 0), 0) / h.length
      },
      corners: h,
      visible: !0
    };
    return p._strokeGeomCache.set(o, w), w;
  }
  function mr(r, o = null, c = null, l = null) {
    if (p.mode === "frame") {
      const vt = c || Zt(), lt = l || Ye(vt), gt = vt ? qi(vt, r) : null;
      return gt ? {
        x: Number(lt.x || 0) + Number(gt.x || 0) * Number(lt.w || 0),
        y: Number(lt.y || 0) + Number(gt.y || 0) * Number(lt.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return Ts(r, o);
    const { right: h, up: m, fwd: w } = Ns(), y = Sn(r, h), v = Sn(r, m), N = Sn(r, w), x = C.width, k = C.height, R = p.viewFov * De, O = 2 * Math.atan(Math.tan(R / 2) * (k / Math.max(x, 1))), $ = x / 2 / Math.tan(R / 2), W = k / 2 / Math.tan(O / 2), pt = Math.max(N, 1e-4), wt = Math.max(x, k) * 2;
    return {
      x: U(x / 2 + y / pt * $, -wt, x + wt),
      y: U(k / 2 - v / pt * W, -wt, k + wt),
      z: pt
    };
  }
  function Up(r) {
    const o = $n(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), c = p.mode === "frame" ? Zt() : null, l = c ? Ye(c) : null, h = mr(o, null, c, l);
    if (!h) return { visible: !1 };
    const m = Ga(r), y = Bl(r).map((mt) => mr(mt, h.x, c, l)), v = gr(m, 0, m.tanY), N = gr(m, 0, m.tanY + Math.max(m.tanY * 0.43, 0.053)), x = mr(v, h.x, c, l), k = mr(N, (x == null ? void 0 : x.x) ?? h.x, c, l), R = ((k == null ? void 0 : k.x) ?? x.x) - x.x, O = ((k == null ? void 0 : k.y) ?? x.y) - x.y, $ = Math.hypot(R, O) || 1, W = {
      x: x.x + R / $ * 30,
      y: x.y + O / $ * 30
    }, pt = mr(gr(m, 0, m.tanY), h.x, c, l), wt = mr(gr(m, m.tanX, 0), h.x, c, l), vt = mr(gr(m, 0, -m.tanY), h.x, c, l), lt = mr(gr(m, -m.tanX, 0), h.x, c, l), gt = [
      {
        edge: "top",
        x: pt.x,
        y: pt.y,
        a: { x: y[0].x, y: y[0].y },
        b: { x: y[1].x, y: y[1].y }
      },
      {
        edge: "right",
        x: wt.x,
        y: wt.y,
        a: { x: y[1].x, y: y[1].y },
        b: { x: y[2].x, y: y[2].y }
      },
      {
        edge: "bottom",
        x: vt.x,
        y: vt.y,
        a: { x: y[2].x, y: y[2].y },
        b: { x: y[3].x, y: y[3].y }
      },
      {
        edge: "left",
        x: lt.x,
        y: lt.y,
        a: { x: y[3].x, y: y[3].y },
        b: { x: y[0].x, y: y[0].y }
      }
    ];
    return {
      center: { x: h.x, y: h.y },
      corners: y.map((mt) => ({ x: mt.x, y: mt.y })),
      edgeMidpoints: gt,
      rotateStemBase: { x: x.x, y: x.y },
      rotateHandle: W,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function Ee(r) {
    if (Ne(r)) {
      const h = String(r.actionGroupId || r.id || "").trim(), m = rp(h, r.layerKind), w = p._strokeGeomCache.get(m);
      return w || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), zp(r, m));
    }
    if (We(r)) {
      const h = Rp(r), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), jp(r, h));
    }
    const o = Lp(r), c = p._strokeGeomCache.get(o);
    if (c) return c;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const l = Up(r);
    return p._strokeGeomCache.set(o, l), l;
  }
  function Ka(r, o, c, l = null) {
    const h = [];
    for (let m = 0; m <= c; m += 1) {
      const w = m / c;
      let y = 0, v = 0;
      o === 0 ? (y = w, v = 0) : o === 1 ? (y = 1, v = w) : o === 2 ? (y = 1 - w, v = 1) : (y = 0, v = 1 - w);
      const N = Gl(r, y, v), x = p.mode === "unwrap" ? Ts(N, l) : Ui(N);
      x && h.push(x);
    }
    return h;
  }
  function Bp(r, o) {
    const c = $n(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), l = p.mode === "unwrap" ? Ts(c) : null, h = l ? l.x : null, m = p.mode === "pano" ? 28 : 20, w = [
      Ka(r, 0, m, h),
      Ka(r, 1, m, h),
      Ka(r, 2, m, h),
      Ka(r, 3, m, h)
    ];
    I.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", I.lineWidth = o ? 2 : 1, I.beginPath();
    let y = !1;
    for (const v of w)
      for (const N of v)
        y ? I.lineTo(N.x, N.y) : (I.moveTo(N.x, N.y), y = !0);
    I.closePath(), I.stroke();
  }
  function Gp() {
    const r = [...Array.isArray(d.stickers) ? d.stickers : []].sort((c, l) => Number(c.z_index || 0) - Number(l.z_index || 0));
    if (p.mode === "frame") return r;
    const o = Array.isArray(d.shots) ? d.shots : [];
    return [...r, ...o];
  }
  function Rs() {
    const r = [...Array.isArray(d.stickers) ? d.stickers : []].sort((c, l) => Number(l.z_index || 0) - Number(c.z_index || 0));
    if (p.mode === "frame") return r;
    const o = Array.isArray(d.shots) ? d.shots : [];
    return [...r, ...o];
  }
  function Ls(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let c = 1; c < 4; c += 1) r.lineTo(o[c].x, o[c].y);
      r.closePath();
    }
  }
  function Kp(r, o, c, l) {
    if (Pe(r)) {
      const h = I.globalAlpha;
      I.globalAlpha = up(r), p.mode === "frame" ? (I.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", I.lineWidth = c ? 2 : 1, Ls(I, o.corners), I.stroke()) : Bp(r, c), I.globalAlpha = h;
      return;
    }
    I.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Ls(I, o.corners), I.fill(), I.strokeStyle = c ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", I.lineWidth = c ? 2.8 : 1.9, Ls(I, o.corners), I.stroke();
  }
  function Wp(r, o, c) {
    I.fillStyle = c, o.corners.forEach((l) => {
      I.beginPath(), I.arc(l.x, l.y, 6.5, 0, Math.PI * 2), I.fill();
    }), bn(r) && (I.strokeStyle = c, I.lineCap = "round", I.lineWidth = 4, o.edgeMidpoints.forEach((l) => {
      var x, k, R, O;
      const h = (((x = l.b) == null ? void 0 : x.x) ?? l.x) - (((k = l.a) == null ? void 0 : k.x) ?? l.x), m = (((R = l.b) == null ? void 0 : R.y) ?? l.y) - (((O = l.a) == null ? void 0 : O.y) ?? l.y), w = Math.hypot(h, m) || 1, y = h / w, v = m / w, N = 10;
      I.beginPath(), I.moveTo(l.x - y * N, l.y - v * N), I.lineTo(l.x + y * N, l.y + v * N), I.stroke();
    }), I.lineCap = "butt"), Ne(r) || (I.strokeStyle = "rgba(250, 250, 250, 0.9)", I.lineWidth = 1.8, I.beginPath(), I.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), I.lineTo(o.rotateHandle.x, o.rotateHandle.y), I.stroke(), I.fillStyle = c, I.beginPath(), I.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), I.fill());
  }
  function qp() {
    var y;
    const [r, o] = Op(), c = In(), l = c.length > 1, h = e === "cutout" ? Gp() : yn(), m = h.map((v) => `${String((v == null ? void 0 : v.id) || "")}:${bn(v) ? "frame" : Number((v == null ? void 0 : v.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== h || p._sortedItemsCache.orderKey !== m) && (p._sortedItemsCache = {
      src: h,
      orderKey: m,
      sorted: [...h]
    });
    const w = p._sortedItemsCache.sorted;
    for (const v of w) {
      const N = !l && ip(v);
      if (p.mode === "frame" && !N || !p.showObjects && !bn(v)) continue;
      const x = Ee(v);
      if (e !== "stickers" && !x.visible)
        continue;
      const k = Pe(v), R = hr(v);
      if (Kp(v, x, N, R), N && x.visible) {
        const O = R ? "#ff4d4f" : k && we(v) ? "#f59e0b" : "#0070f3";
        Wp(v, x, O);
      }
    }
    if (l) {
      const v = ws(c);
      if (v != null && v.visible) {
        const N = xs(c) ? "#ff4d4f" : "#0070f3";
        I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.95)", I.lineWidth = 2, I.setLineDash([6, 4]), I.beginPath(), I.moveTo(v.corners[0].x, v.corners[0].y);
        for (let x = 1; x < v.corners.length; x += 1) I.lineTo(v.corners[x].x, v.corners[x].y);
        I.closePath(), I.stroke(), I.setLineDash([]), I.fillStyle = N, v.corners.forEach((x) => {
          I.beginPath(), I.arc(x.x, x.y, 6.5, 0, Math.PI * 2), I.fill();
        }), I.restore();
      }
    } else
      c.forEach((v) => {
        if (!Ne(v) && !We(v)) return;
        const N = Ee(v);
        if (!(N != null && N.visible)) return;
        const x = hr(v) ? "#ff4d4f" : "#0070f3";
        I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.95)", I.lineWidth = 2, I.setLineDash([6, 4]), I.beginPath(), I.moveTo(N.corners[0].x, N.corners[0].y);
        for (let k = 1; k < N.corners.length; k += 1) I.lineTo(N.corners[k].x, N.corners[k].y);
        I.closePath(), I.stroke(), I.setLineDash([]), Ne(v) && (I.fillStyle = x, N.corners.forEach((k) => {
          I.beginPath(), I.arc(k.x, k.y, 6.5, 0, Math.PI * 2), I.fill();
        })), I.restore();
      });
    if (((y = p.interaction) == null ? void 0 : y.kind) === "marquee_select") {
      const v = wu(p.interaction.start, p.interaction.current);
      I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.9)", I.fillStyle = "rgba(255, 255, 255, 0.08)", I.lineWidth = 1, I.setLineDash([5, 4]), I.beginPath(), I.rect(v.x0, v.y0, v.x1 - v.x0, v.y1 - v.y0), I.fill(), I.stroke(), I.restore();
    }
    p.hqFrames && r >= 40 && o >= 30 && (p.hqFrames -= 1, p.hqFrames > 0 && ht());
  }
  function tu(r) {
    const o = wi(r), c = U(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), l = 320;
    return c >= 1 ? { width: l, height: Math.max(1, Math.round(l / c)) } : { width: Math.max(1, Math.round(l * c)), height: l };
  }
  function Yp() {
    var c;
    const r = Array.isArray(d.stickers) ? d.stickers : [], o = Array.isArray((c = d.painting) == null ? void 0 : c.raster_objects) ? d.painting.raster_objects : [];
    return JSON.stringify({
      stickers: r.map((l) => ({
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
  function eu(r, o = {}) {
    if (!r) return "";
    const c = ii(), l = c && (c.complete || c.naturalWidth || c.width) ? [
      String(c.currentSrc || c.src || ""),
      Number(c.naturalWidth || c.width || 0),
      Number(c.naturalHeight || c.height || 0)
    ].join("|") : "no_bg", h = tu(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      Dr(),
      Yp(),
      vs(),
      l,
      p.showPanorama ? "panorama:1" : "panorama:0",
      p.showObjects ? "objects:1" : "objects:0",
      p.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function Os(r = {}) {
    var m;
    if (e !== "cutout") return null;
    const o = r.shot || Zt();
    if (!o)
      return t.__panoCutoutPreviewSurface = null, null;
    const c = tu(o), l = eu(o, r);
    if (!r.forceRedraw && ((m = t.__panoCutoutPreviewSurface) == null ? void 0 : m.revision) === l)
      return t.__panoCutoutPreviewSurface;
    const h = Zp(o, c, {
      cachePrefix: "shared_cutout_preview_surface",
      quality: String(r.quality || "balanced")
    });
    return h ? (t.__panoCutoutPreviewSurface = {
      source: h,
      revision: l
    }, t.__panoCutoutPreviewSurface) : t.__panoCutoutPreviewSurface || null;
  }
  function Xp() {
    if (e !== "cutout") return;
    const r = Zt();
    if (!r) {
      p.outputPreviewRect = null, nt && (nt.style.display = "none");
      return;
    }
    const o = 14, c = U(Number(p.outputPreviewAnim ?? (p.outputPreviewExpanded ? 1 : 0)), 0, 1), l = Math.max(120, Math.min(250, C.width * 0.28)), h = Math.max(260, Math.min(560, C.width * 0.62)), m = Math.max(76, Math.min(150, C.height * 0.22)), w = Math.max(160, Math.min(340, C.height * 0.48)), y = Nn(l, h, c), v = Nn(m, w, c), N = wi(r), x = Number((N == null ? void 0 : N.aspect) || 1);
    let k = y, R = k / x;
    R > v && (R = v, k = R * x);
    const O = C.width - o - k, $ = o, W = 12;
    p.outputPreviewRect = { x: O, y: $, w: k, h: R };
    const pt = () => {
      if (!nt) return;
      const ut = `${Math.round(O + k - 8 - 24)}px`, j = `${Math.round($ + 8)}px`;
      nt.style.display = "inline-flex", nt.style.left !== ut && (nt.style.left = ut), nt.style.top !== j && (nt.style.top = j);
    }, wt = (ut, j, st, Pt, Ut) => {
      const At = Math.max(0, Math.min(Ut, Math.min(st, Pt) * 0.5));
      I.beginPath(), typeof I.roundRect == "function" ? I.roundRect(ut, j, st, Pt, At) : (I.moveTo(ut + At, j), I.arcTo(ut + st, j, ut + st, j + Pt, At), I.arcTo(ut + st, j + Pt, ut, j + Pt, At), I.arcTo(ut, j + Pt, ut, j, At), I.arcTo(ut, j, ut + st, j, At)), I.closePath();
    };
    I.save(), I.shadowColor = "rgba(0, 0, 0, 0.45)", I.shadowBlur = 22, I.shadowOffsetX = 0, I.shadowOffsetY = 8, I.fillStyle = "rgba(10, 10, 10, 0.72)", wt(O, $, k, R, W), I.fill(), I.restore(), I.save(), wt(O, $, k, R, W), I.clip();
    const vt = eu(r, { quality: "balanced" });
    let lt = t.__panoCutoutPreviewSurface;
    const gt = au();
    gt && (lt = Os({
      shot: r,
      quality: "balanced",
      forceRedraw: !0
    })), (!lt || lt.revision !== vt) && !gt && !p.interaction && !p.cutoutPreviewSurfaceRaf && !p.cutoutPreviewSurfaceTimer && (lt = Os({ shot: r, quality: "balanced" }));
    const mt = (lt == null ? void 0 : lt.source) || null, bt = !!(mt && Number(mt.width || 0) > 1 && Number(mt.height || 0) > 1);
    if ((lt == null ? void 0 : lt.revision) !== vt && Fs(), !bt) {
      I.fillStyle = "rgba(255, 255, 255, 0.06)", I.fillRect(O, $, k, R), I.strokeStyle = "rgba(255, 255, 255, 0.12)", I.lineWidth = 1, I.strokeRect(O + 0.5, $ + 0.5, k - 1, R - 1), Fs(), I.restore(), pt();
      return;
    }
    I.drawImage(mt, O, $, k, R), I.restore(), pt();
  }
  function Zp(r, o, c = {}) {
    var k, R, O, $;
    const l = ii();
    if (!r || !l || !(Number((o == null ? void 0 : o.width) || 0) > 0) || !(Number((o == null ? void 0 : o.height) || 0) > 0)) return null;
    const h = zl(), m = jl(h), w = Er(), y = ((R = (k = p.paintEngine) == null ? void 0 : k.getErpTarget) == null ? void 0 : R.call(k, w)) || null, v = hc({
      stateRevision: [
        "cutout_preview_target",
        String((l == null ? void 0 : l.currentSrc) || (l == null ? void 0 : l.src) || ""),
        Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
        Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0),
        Array.isArray(m) ? m.map((W) => `${String((W == null ? void 0 : W.assetId) || "")}:${String((W == null ? void 0 : W.revision) || "")}`).join(",") : "",
        Dr()
      ].join("|"),
      backgroundSource: l,
      backgroundRevision: String(c.cachePrefix || "modal_cutout_output_preview"),
      coverageDeg: He(d.coverage),
      scene: h,
      textures: m,
      paintSource: ((O = y == null ? void 0 : y.displayPaint) == null ? void 0 : O.canvas) || null,
      paintRevision: Dr(),
      maskSource: (($ = y == null ? void 0 : y.committedMask) == null ? void 0 : $.canvas) || null,
      maskRevision: En(),
      backgroundOpacity: 1,
      showMaskTint: !1
    }), N = wi(r);
    return Q.syncState(v) ? Q.renderToTarget(
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
  function Jp() {
    Os();
  }
  function Fs() {
    if (e !== "cutout") return;
    const r = performance.now(), o = np(), c = r - Number(p.cutoutPreviewSurfaceLastTs || 0);
    if (p.cutoutPreviewSurfaceRaf || p.cutoutPreviewSurfaceTimer) return;
    const l = () => {
      p.cutoutPreviewSurfaceRaf = requestAnimationFrame(() => {
        var h, m, w, y, v, N, x, k;
        p.cutoutPreviewSurfaceRaf = 0, p.cutoutPreviewSurfaceLastTs = performance.now(), Jp(), kt.dirty = !0, (m = (h = t.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || m.call(h), (w = t.setDirtyCanvas) == null || w.call(t, !0, !1), (v = (y = t.graph) == null ? void 0 : y.setDirtyCanvas) == null || v.call(y, !0, !0), (k = (x = (N = dn) == null ? void 0 : N.canvas) == null ? void 0 : x.setDirty) == null || k.call(x, !0, !0);
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
  function Vs(r, o) {
    if (!r || !o) return null;
    const c = Number(o.x || 0), l = Number(o.y || 0);
    return Gl(r, c, l);
  }
  function Gi(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(r.v || 0)) * Math.PI, l = Math.cos(c);
    return qn(l * Math.sin(o), Math.sin(c), l * Math.cos(o));
  }
  function qe(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function yr(r, o, c, l = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: Ve(r, "widthScale", 1),
      pressureLike: Ve(r, "pressureLike", 1)
    }, ...l, u: o, v: c };
  }
  function Qp(r, o, c) {
    const l = qe(r), h = qe(o);
    return yr(r, Nn(l.x, h.x, c), Nn(l.y, h.y, c), {
      t: Nn(Number((r == null ? void 0 : r.t) || 0), Number((o == null ? void 0 : o.t) || 0), c),
      widthScale: Nn(Ve(r, "widthScale", 1), Ve(o, "widthScale", 1), c),
      pressureLike: Nn(Ve(r, "pressureLike", 1), Ve(o, "pressureLike", 1), c)
    });
  }
  function tg(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function nu(r, o, c = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    if (r.length === 1) return [yr(r[0], qe(r[0]).x, qe(r[0]).y)];
    const l = tg(o, c), h = (x, k) => {
      const R = [0];
      for (let gt = 1; gt < x.length; gt += 1) {
        const mt = qe(x[gt - 1]), bt = qe(x[gt]);
        R.push(R[gt - 1] + Math.hypot(bt.x - mt.x, bt.y - mt.y));
      }
      const O = R[R.length - 1] || 0;
      if (O <= 1e-8) {
        const gt = x[0], mt = qe(gt);
        return [yr(gt, mt.x, mt.y)];
      }
      const $ = [];
      let W = 0;
      for (let gt = 0; gt <= O + 1e-9; gt += k) {
        for (; W < R.length - 2 && R[W + 1] < gt; ) W += 1;
        const mt = R[W], bt = R[W + 1], ut = Math.max(1e-8, bt - mt);
        $.push(Qp(x[W], x[W + 1], U((gt - mt) / ut, 0, 1)));
      }
      const pt = x[x.length - 1], wt = qe(pt), vt = $[$.length - 1], lt = vt ? qe(vt) : null;
      return (!lt || Math.hypot(lt.x - wt.x, lt.y - wt.y) > k * 0.35) && $.push(yr(pt, wt.x, wt.y)), $;
    }, m = (x) => {
      if (!Array.isArray(x) || x.length < 3) return x ? x.slice() : [];
      const k = [yr(x[0], qe(x[0]).x, qe(x[0]).y)];
      for (let R = 0; R < x.length - 1; R += 1) {
        const O = x[R], $ = x[R + 1], W = qe(O), pt = qe($), wt = yr(
          O,
          W.x * 0.75 + pt.x * 0.25,
          W.y * 0.75 + pt.y * 0.25,
          {
            t: Number(O.t || 0) * 0.75 + Number($.t || 0) * 0.25,
            widthScale: Ve(O, "widthScale", 1) * 0.75 + Ve($, "widthScale", 1) * 0.25,
            pressureLike: Ve(O, "pressureLike", 1) * 0.75 + Ve($, "pressureLike", 1) * 0.25
          }
        ), vt = yr(
          O,
          W.x * 0.25 + pt.x * 0.75,
          W.y * 0.25 + pt.y * 0.75,
          {
            t: Number(O.t || 0) * 0.25 + Number($.t || 0) * 0.75,
            widthScale: Ve(O, "widthScale", 1) * 0.25 + Ve($, "widthScale", 1) * 0.75,
            pressureLike: Ve(O, "pressureLike", 1) * 0.25 + Ve($, "pressureLike", 1) * 0.75
          }
        );
        k.push(wt, vt);
      }
      return k.push(yr(x[x.length - 1], qe(x[x.length - 1]).x, qe(x[x.length - 1]).y)), k;
    }, w = h(r, l);
    if (w.length < 3) return w;
    const y = c ? 2 : 1;
    let v = w.slice();
    for (let x = 0; x < y; x += 1) v = m(v);
    return h(v, Math.max(l * 0.75, 55e-5));
  }
  function Ve(r, o, c = 1) {
    const l = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(l) ? Math.max(0, l) : c;
  }
  function eg(r) {
    const o = Number(r == null ? void 0 : r.radiusValue);
    if (Number.isFinite(o) && o > 0) {
      const c = String((r == null ? void 0 : r.radiusModel) || "").trim() || "erp_uv_norm";
      return c === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((r == null ? void 0 : r.size) || 10) * 0.5 / 2048)
      } : {
        model: c,
        value: o
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((r == null ? void 0 : r.size) || 10) * 0.5 / 2048)
    };
  }
  function Hs(r, o) {
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(r)), c.height = Math.max(1, Math.round(o));
    const l = c.getContext("2d");
    return l && (l.clearRect(0, 0, c.width, c.height), l.imageSmoothingEnabled = !0), { canvas: c, ctx: l };
  }
  function Ki() {
    const r = qa();
    return `${String(p.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function En() {
    const r = qa();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function Dr() {
    const r = vs(), o = En();
    return r ? `${o}:${r}` : o;
  }
  function ng() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function rg() {
    p.paintCompositeRevision += 1;
  }
  function ig() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function ru() {
    var r, o;
    p.paintEngineRevisionKey = null, (o = (r = p.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, d), p.paintEngineRevisionKey = Ki();
  }
  function ln() {
    p.objectVisualRevision = Number(p.objectVisualRevision || 0) + 1, ig(), kt.backgroundDirty = !0, kt.dirty = !0;
  }
  function Tn({ rebuildPaintEngine: r = !1 } = {}) {
    ng(), ln(), r && ru();
  }
  function Wi() {
    rg(), ln();
  }
  function Wa() {
    var l;
    const r = qa(), o = `${r.width}x${r.height}`;
    p.paintEngineDescriptorKey !== o && (p.paintEngine = Oc(r), p.paintEngineDescriptorKey = o, p.paintEngineRevisionKey = "");
    const c = Ki();
    p.paintEngineRevisionKey !== c && (p.paintEngineRevisionKey = c, (l = p.paintEngine) == null || l.rebuildCommitted(d));
  }
  function qa() {
    const r = Math.max(1, Number((d == null ? void 0 : d.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function br() {
    return qa();
  }
  function ag(r, o, c, l, h = null) {
    const m = eg(r), w = Ve(o, "widthScale", 1) * Ve(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * w) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * De) * c * w) : Math.max(0.5, m.value / (2 * Math.PI) * c * w) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * w);
  }
  function og(r, o, c = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), m = c.preview === !0, w = m ? 0.78 : 1;
    if (r.globalAlpha = h === "marker" ? 0.7 * w : 1, l === "mask") {
      r.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const y = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, v = m ? Math.max(0.28, Number(y.a ?? 1) * 0.88) : Math.max(0.12, Number(y.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(y.r || 0) * 255)}, ${Math.round(Number(y.g || 0) * 255)}, ${Math.round(Number(y.b || 0) * 255)}, ${v})`;
  }
  function sg(r, o, c) {
    const l = Math.max(0.5, Math.min(c, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), r.fill());
  }
  function cg(r, o, c, l, h = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const m = Math.max(l.w, l.h) * 0.25;
    r.save(), og(r, c, h);
    const w = (y) => sg(r, y, m);
    if (o.length === 1) {
      w(o[0]), r.restore();
      return;
    }
    for (let y = 0; y < o.length - 1; y += 1) {
      const v = o[y], N = o[y + 1];
      if (!v || !N) continue;
      const x = Number(v.x || 0), k = Number(v.y || 0), R = Number(N.x || 0), O = Number(N.y || 0), $ = Math.max(0.5, Math.min(m, Number(v.radiusPx || 0.5))), W = Math.max(0.5, Math.min(m, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(x) || !Number.isFinite(k) || !Number.isFinite(R) || !Number.isFinite(O) || !Number.isFinite($) || !Number.isFinite(W)) continue;
      const pt = R - x, wt = O - k, vt = Math.hypot(pt, wt);
      if (!Number.isFinite(vt) || vt < 1e-6) {
        w(v);
        continue;
      }
      if (vt > Math.max(l.w, l.h) * 0.5) continue;
      const lt = Math.max(0.5, Math.min($, W)), gt = Math.max(0.35, Math.min(lt * 0.4, 2.25)), mt = Math.max(1, Math.ceil(vt / gt));
      for (let bt = 0; bt <= mt; bt += 1) {
        const ut = bt / mt;
        w({
          x: Nn(x, R, ut),
          y: Nn(k, O, ut),
          radiusPx: Nn($, W, ut)
        });
      }
    }
    w(o[o.length - 1]), r.restore();
  }
  function lg(r, o, c, l) {
    cg(r, o, c, l, { preview: !1 });
  }
  function ug(r, o, c, l, h) {
    var y, v, N, x;
    if (!r || !Array.isArray(o) || o.length < 3) return;
    const m = "u", w = "v";
    if (r.save(), String((c == null ? void 0 : c.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((c == null ? void 0 : c.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const k = (c == null ? void 0 : c.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(k.r || 0) * 255)}, ${Math.round(Number(k.g || 0) * 255)}, ${Math.round(Number(k.b || 0) * 255)}, ${Number(k.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((y = o[0]) == null ? void 0 : y[m]) || 0) * l.w, Number(((v = o[0]) == null ? void 0 : v[w]) || 0) * l.h);
    for (let k = 1; k < o.length; k += 1)
      r.lineTo(Number(((N = o[k]) == null ? void 0 : N[m]) || 0) * l.w, Number(((x = o[k]) == null ? void 0 : x[w]) || 0) * l.h);
    r.closePath(), r.fill(), r.restore();
  }
  function iu(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function fg(r, o) {
    const c = iu(r);
    return !Array.isArray(c) || !c.length ? [] : c.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: ag(r, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function dg(r, o, c = null) {
    var y, v, N, x;
    if (!(r != null && r.ctx) || !o) return !1;
    const l = c || { w: Number(((y = r.canvas) == null ? void 0 : y.width) || 0), h: Number(((v = r.canvas) == null ? void 0 : v.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((N = o == null ? void 0 : o.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((x = o == null ? void 0 : o.geometry) == null ? void 0 : x.geometryKind) || "") === "lasso_fill")
      return ug(r.ctx, iu(h), h, l), !0;
    const w = fg(h, l);
    return w.length ? (lg(r.ctx, w, h, l), !0) : !1;
  }
  function hg(r, o, c, l = 8) {
    const h = new Uint8Array(o * c), m = [], w = new Int32Array(o * c), y = new Int32Array(o * c);
    for (let v = 0; v < c; v += 1)
      for (let N = 0; N < o; N += 1) {
        const x = v * o + N;
        if (h[x] || r[x] <= l) continue;
        let k = 0, R = 0;
        w[R] = N, y[R] = v, R += 1, h[x] = 1;
        const O = [];
        let $ = N, W = v, pt = N, wt = v;
        for (; k < R; ) {
          const vt = w[k], lt = y[k];
          k += 1, O.push({ x: vt, y: lt }), vt < $ && ($ = vt), lt < W && (W = lt), vt > pt && (pt = vt), lt > wt && (wt = lt);
          const gt = [
            [vt - 1, lt],
            [vt + 1, lt],
            [vt, lt - 1],
            [vt, lt + 1]
          ];
          for (const [mt, bt] of gt) {
            if (mt < 0 || bt < 0 || mt >= o || bt >= c) continue;
            const ut = bt * o + mt;
            h[ut] || r[ut] <= l || (h[ut] = 1, w[R] = mt, y[R] = bt, R += 1);
          }
        }
        m.push({ pixels: O, minX: $, minY: W, maxX: pt, maxY: wt });
      }
    return m;
  }
  function pg(r, o, c = {}) {
    var N;
    const l = Number((r == null ? void 0 : r.width) || 0), h = Number((r == null ? void 0 : r.height) || 0), m = (N = r == null ? void 0 : r.getContext) == null ? void 0 : N.call(r, "2d");
    if (!m || l < 1 || h < 1) return [];
    const w = m.getImageData(0, 0, l, h), y = new Uint8Array(l * h);
    for (let x = 0; x < y.length; x += 1) y[x] = w.data[x * 4 + 3];
    return hg(y, l, h, 8).map((x, k) => {
      const R = x.maxX - x.minX + 1, O = x.maxY - x.minY + 1, $ = document.createElement("canvas");
      $.width = R, $.height = O;
      const W = $.getContext("2d");
      if (!W) return null;
      const pt = W.createImageData(R, O);
      return x.pixels.forEach(({ x: wt, y: vt }) => {
        const lt = (vt * l + wt) * 4, gt = ((vt - x.minY) * R + (wt - x.minX)) * 4;
        pt.data[gt + 0] = w.data[lt + 0], pt.data[gt + 1] = w.data[lt + 1], pt.data[gt + 2] = w.data[lt + 2], pt.data[gt + 3] = w.data[lt + 3];
      }), W.putImageData(pt, 0, 0), {
        id: bi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + k * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: x.minX / l,
          v0: x.minY / h,
          u1: (x.maxX + 1) / l,
          v1: (x.maxY + 1) / h
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
  function qi(r, o) {
    if (!r || !o) return null;
    const c = Ga(r), l = Sn(o, c.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const h = Sn(o, c.right) / l, m = Sn(o, c.up) / l, w = h * c.cr + m * c.sr, y = -h * c.sr + m * c.cr;
    return {
      x: (w / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - y / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function gg(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (p.mode === "unwrap") {
      const c = pr();
      return r.map((l) => ({
        x: c.x + Number(l.u || 0) * c.w,
        y: c.y + Number(l.v || 0) * c.h
      }));
    }
    const o = r.map((c) => Ui(Gi(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function mg(r) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (p.mode === "unwrap") {
      const c = pr();
      return r.map((l) => ({
        x: c.x + Number(l.u || 0) * c.w,
        y: c.y + Number(l.v || 0) * c.h
      }));
    }
    const o = r.map((c) => Ui(Gi(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function yg(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let c = 0; c < r.length; c += 1) {
      const l = r[c], h = r[(c + 1) % r.length];
      if (!l || !h || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(l.x), Number(h.y) - Number(l.y)) > o) return !1;
    }
    return !0;
  }
  function bg(r, o, c) {
    if (!Array.isArray(r) || r.length < 3 || !o || !c) return [];
    const l = [];
    for (const h of r) {
      const m = Gi(h), w = qi(o, m);
      if (!w) return [];
      l.push({
        x: Number(c.x || 0) + Number(w.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(w.y || 0) * Number(c.h || 0)
      });
    }
    return yg(l, Math.max(80, Math.max(c.w, c.h) * 0.75)) ? l : [];
  }
  function vg(r, o, c) {
    if (!Array.isArray(r) || r.length < 1 || !o || !c) return [];
    const l = [];
    for (const h of r) {
      const m = Gi(h), w = qi(o, m);
      w && l.push({
        x: Number(c.x || 0) + Number(w.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(w.y || 0) * Number(c.h || 0)
      });
    }
    return l;
  }
  function _g() {
    var l;
    const r = Zt(), o = Ye(r), c = ii();
    if (!r || !o) return !1;
    if (I.save(), I.fillStyle = "#050505", I.fillRect(0, 0, C.width, C.height), I.shadowColor = "rgba(0, 0, 0, 0.45)", I.shadowBlur = 24, I.shadowOffsetX = 0, I.shadowOffsetY = 10, I.fillStyle = "rgba(14, 14, 14, 1)", I.fillRect(o.x, o.y, o.w, o.h), I.restore(), I.save(), I.beginPath(), I.rect(o.x, o.y, o.w, o.h), I.clip(), c && (c.complete || c.naturalWidth || c.width) && Number(c.naturalWidth || c.width || 0) > 1 && Number(c.naturalHeight || c.height || 0) > 1) {
      const h = wi(r);
      ks(I, o, h, c, `modal_frame_${String(r.id || "")}`) || drawCutoutProjectionPreview(
        I,
        t,
        c,
        o,
        r,
        String(((l = d.ui_settings) == null ? void 0 : l.preview_quality) || "balanced")
      );
    } else
      I.fillStyle = "rgba(255, 255, 255, 0.03)", I.fillRect(o.x, o.y, o.w, o.h);
    return I.restore(), I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.12)", I.lineWidth = 1, I.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1), I.restore(), !0;
  }
  function wg() {
    var v, N;
    if (((v = p.interaction) == null ? void 0 : v.kind) !== "paint_lasso_fill") return;
    const r = p.interaction.stroke, o = (N = r == null ? void 0 : r.geometry) == null ? void 0 : N.points;
    let c;
    if (p.mode === "frame") {
      const x = Zt(), k = Ye(x);
      c = bg(o, x, k);
    } else
      c = gg(o);
    if (!Array.isArray(c) || c.length < 3) return;
    const l = String((r == null ? void 0 : r.layerKind) || "") === "mask", h = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), w = Math.round(Number(h.g || 0) * 255), y = Math.round(Number(h.b || 0) * 255);
    I.save(), I.beginPath(), I.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let x = 1; x < c.length; x++) I.lineTo(Number(c[x].x || 0), Number(c[x].y || 0));
    I.closePath(), l ? (I.lineWidth = 2, I.setLineDash([6, 6]), I.lineDashOffset = 0, I.strokeStyle = "rgba(0,0,0,0.96)", I.stroke(), I.lineDashOffset = -6, I.strokeStyle = "rgba(255,255,255,0.96)", I.stroke(), I.setLineDash([]), I.lineDashOffset = 0) : (I.lineWidth = 1.5, I.setLineDash([6, 4]), I.strokeStyle = `rgba(${m},${w},${y},1)`, I.stroke(), I.setLineDash([])), I.restore();
  }
  function xg() {
    p.mode === "frame" ? _g() : p.mode === "unwrap" ? Hp(!1) : $p(!1), qp(), p.mode !== "frame" && Xp(), wg(), St && (St.textContent = `${Math.round(p.viewFov)}°`), zt(), kt.hasPresentedFrame || (kt.hasPresentedFrame = !0, V.style.opacity = "1");
    const r = Ep();
    r ? (A == null || A.removeAttribute("data-stage-ready"), A == null || A.setAttribute("data-stage-loading-kind", r)) : (A == null || A.setAttribute("data-stage-ready", ""), A == null || A.removeAttribute("data-stage-loading-kind"));
  }
  function au() {
    var o;
    if (e !== "cutout") return !1;
    const r = String(((o = p.interaction) == null ? void 0 : o.kind) || "");
    return r === "move" || r === "scale" || r === "scale_x" || r === "scale_y" || r === "rotate";
  }
  function Sg(r = p.interaction) {
    if (e !== "stickers" || p.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function Ng(r = {}) {
    var l, h, m, w;
    const o = r.updateCutoutPreview !== !1;
    if (t.__panoLiveStateOverride = d, e === "cutout") {
      t.__panoLivePaintSurface = null, o && Fs();
      return;
    }
    let c = null;
    try {
      const y = Er(), v = Ha(), x = ((w = (m = (h = (l = p.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, y)) == null ? void 0 : m.displayPaint) == null ? void 0 : w.canvas) || null;
      x && (c = {
        source: x,
        revision: `${En()}:${vs()}`
      });
    } catch {
      c = null;
    }
    t.__panoLivePaintSurface = c;
  }
  function ht(r = {}) {
    var v, N, x, k, R, O, $, W, pt, wt;
    const o = !!r.localOnly, c = r.externalSync === !0, l = String(r.cause || ""), h = String(((v = p.interaction) == null ? void 0 : v.kind) || "");
    (!o || h === "view" || h === "pan_frame" || Sg() || !!((N = p.viewTween) != null && N.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (kt.backgroundDirty = !0), o && Ha() && (p.livePaintInteractionRevision += 1, kt.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (ja(), Ua());
    const y = e === "cutout" && (!o || l === "paint" || l === "cutout_frame" || l === "frame_transform" || l === "frame_view" || Ml() || au());
    Ng({ updateCutoutPreview: y }), c && (y || !o || e !== "cutout") && ((k = (x = t.__panoDomPreview) == null ? void 0 : x.requestDraw) == null || k.call(x), (R = t.setDirtyCanvas) == null || R.call(t, !0, !1)), c && !o && (($ = (O = t.graph) == null ? void 0 : O.setDirtyCanvas) == null || $.call(O, !0, !0), (wt = (pt = (W = dn) == null ? void 0 : W.canvas) == null ? void 0 : pt.setDirty) == null || wt.call(pt, !0, !0)), kt.dirty = !0;
  }
  function ou() {
    const r = C.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), c = Math.max(2, Math.round(r.height));
    return C.width !== o || C.height !== c || V.width !== o || V.height !== c ? (C.width = o, C.height = c, V.width = o, V.height = c, kt.backgroundDirty = !0, kt.dirty = !0, e === "cutout" && (kt.pendingStableLayoutFrames = Math.max(Number(kt.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function $s(r = performance.now()) {
    var o;
    if (kt.running) {
      if (kt.lastTickTs = r, p.outputPreviewAnim !== p.outputPreviewAnimTo) {
        const c = Math.max(1, Number(p.outputPreviewAnimDurationMs)), l = U((r - Number(p.outputPreviewAnimStartTs || 0)) / c, 0, 1), m = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? uv(l) : fv(l);
        p.outputPreviewAnim = Nn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, m), kt.dirty = !0, l >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
      }
      if ((o = p.viewTween) != null && o.active) {
        const c = p.viewTween, l = U((r - c.startTs) / c.durationMs, 0, 1), h = lv(l);
        p.viewYaw = Re(c.startYaw + c.deltaYaw * h), p.viewPitch = c.startPitch + (c.targetPitch - c.startPitch) * h, p.viewFov = c.startFov + (c.targetFov - c.startFov) * h, kt.backgroundDirty = !0, kt.dirty = !0, l >= 1 && (p.viewTween = null);
      }
      if (p.viewInertia.vx = Number(Te.state.inertia.vx || 0), p.viewInertia.vy = Number(Te.state.inertia.vy || 0), p.viewInertia.active = !!Te.state.inertia.active, Te.stepInertia(r) && (p.viewInertia.vx = Number(Te.state.inertia.vx || 0), p.viewInertia.vy = Number(Te.state.inertia.vy || 0), p.viewInertia.active = !!Te.state.inertia.active, kt.backgroundDirty = !0, kt.dirty = !0), (kt.dirty || r - kt.lastSizeCheckTs >= 220) && (ou(), kt.lastSizeCheckTs = r), kt.pendingStableLayoutFrames > 0 && (kt.pendingStableLayoutFrames -= 1, kt.dirty = !0), kt.dirty) {
        if (kt.pendingStableLayoutFrames > 0) {
          kt.rafId = requestAnimationFrame($s);
          return;
        }
        kt.dirty = !1, xg();
      }
      kt.rafId = requestAnimationFrame($s);
    }
  }
  function Mg() {
    kt.running = !1, kt.rafId && cancelAnimationFrame(kt.rafId), kt.rafId = 0;
  }
  function re() {
    i || (p.historyController.commitActionGroup(JSON.stringify(Qf(d))), Ks());
  }
  function Yi(r) {
    if (i) return;
    const o = r < 0 ? p.historyController.undo() : p.historyController.redo();
    if (Ks(), !o) return;
    const c = JSON.parse(o);
    Object.keys(d).forEach((l) => delete d[l]), Object.assign(d, c), p.selectedId = e === "stickers" || e === "cutout" ? d.active.selected_sticker_id : d.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], Tn(), un(), Bt(), Dn(), ht({ cause: "cutout_frame" });
  }
  function su() {
    var c, l;
    const r = Array.isArray((c = p.historyController) == null ? void 0 : c.entries) ? p.historyController.entries : [], o = Number((l = p.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function un() {
    var w, y, v;
    ot == null || ot.querySelectorAll("[data-tool-mode]").forEach((N) => {
      const x = N.getAttribute("data-tool-mode") === p.primaryTool;
      N.classList.toggle("active", x), N.setAttribute("aria-pressed", x ? "true" : "false");
    });
    const r = p.primaryTool === "paint" || p.primaryTool === "mask";
    if (Nt && et(r), !r) {
      Dt.forEach((N) => {
        N.classList.remove("is-active");
      }), Lt && (Lt.hidden = !0);
      return;
    }
    const o = p.primaryTool, c = Dt.find((N) => String(N.getAttribute("data-paint-pane") || "") === o) || null;
    if (Dt.forEach((N) => {
      N.classList.toggle("is-active", N === c);
    }), D.forEach((N) => {
      N.hidden = !1;
    }), H.forEach((N) => {
      N.hidden = !1;
    }), it && (clearTimeout(it), it = 0), E.querySelectorAll("[data-paint-tool]").forEach((N) => {
      N.classList.toggle("active", N.getAttribute("data-paint-tool") === p.paintTool);
    }), E.querySelectorAll("[data-mask-tool]").forEach((N) => {
      N.classList.toggle("active", N.getAttribute("data-mask-tool") === p.maskTool);
    }), Ct) {
      const N = p.paintTool !== "eraser";
      Ct.hidden = !1, Ct.classList.toggle("disabled", !N), !N && Lt && !Lt.hidden && (it = window.setTimeout(() => {
        Lt.hidden = !0, it = 0;
      }, 170));
      const x = ((w = Lo.find((R) => Oo(p.paintColor, R.color))) == null ? void 0 : w.id) || "";
      Ct.querySelectorAll("[data-paint-color-swatch]").forEach((R) => {
        const O = R.getAttribute("data-paint-color-swatch") === x;
        R.classList.toggle("active", O), R.setAttribute("aria-pressed", O ? "true" : "false"), R.disabled = !N;
      });
      const k = Ct.querySelector("[data-paint-color-custom]");
      if (k) {
        const R = !x;
        k.classList.toggle("active", R), k.style.setProperty("--custom-color", Mn(p.customPaintColor, 1)), k.setAttribute("aria-pressed", R ? "true" : "false"), k.disabled = !N;
      }
      if (Fe && (Fe.value = String(Math.round(U(Number(((y = p.customPaintColor) == null ? void 0 : y.a) ?? 1), 0, 1) * 100))), nn && (nn.textContent = `${Math.round(U(Number(((v = p.customPaintColor) == null ? void 0 : v.a) ?? 1), 0, 1) * 100)}%`), Ae && (Ae.style.background = Mn(p.customPaintColor)), Lt) {
        const R = la(p.customPaintColor);
        Lt.style.setProperty("--picker-hue-color", Mn({ ...xc(R.h, 1, 1), a: 1 }, 1)), Lt.style.setProperty("--picker-sat", `${U(R.s, 0, 1) * 100}%`), Lt.style.setProperty("--picker-val", `${(1 - U(R.v, 0, 1)) * 100}%`), Lt.style.setProperty("--picker-hue", `${U(R.h, 0, 1) * 100}%`);
      }
      if (ke) {
        const R = la(p.customPaintColor);
        ke.style.left = `${U(R.s, 0, 1) * 100}%`, ke.style.top = `${(1 - U(R.v, 0, 1)) * 100}%`;
      }
      if (Ge) {
        const R = la(p.customPaintColor);
        Ge.style.left = `${U(R.h, 0, 1) * 100}%`;
      }
      if (Jn && S) {
        const R = Array.from({ length: 8 }, (O, $) => p.customPaintHistory[$] || null);
        S.innerHTML = R.map((O, $) => `
          <button class="pano-paint-color-history-dot${O ? "" : " empty"}" type="button" data-paint-history-index="${$}" ${O ? `style="--swatch:${Mn(O, 1)}"` : ""} aria-label="Recent color ${$ + 1}" ${O ? "" : "disabled"}></button>
        `).join(""), S.querySelectorAll("[data-paint-history-index]").forEach((O) => {
          O.onclick = () => {
            const $ = Number(O.getAttribute("data-paint-history-index")), W = p.customPaintHistory[$];
            W && (p.customPaintColor = fn(W), p.paintColor = fn(W), un());
          };
        });
      }
    }
    const l = _r(p.primaryTool === "paint" ? p.paintTool : p.maskTool), h = p.brushSizes[l] ?? 10, m = dp();
    D.forEach((N) => {
      N.classList.toggle("disabled", m);
    }), G.forEach((N) => {
      N.value = String(h);
      const x = (h - 1) / 119 * 100;
      N.style.setProperty("--v", `${U(x, 0, 100)}%`), N.disabled = m;
    }), K.forEach((N) => {
      N.textContent = String(h);
    });
  }
  function oi(r, o, c, l, h, m, w, y = !0) {
    const v = document.createElement("div");
    v.dataset.key = c, v.dataset.min = String(h), v.dataset.max = String(m), v.className = "pano-field", v.innerHTML = `<label>${l}</label><input type='range' min='${h}' max='${m}' step='${w}' value='${Number(o[c] || 0)}'><input type='number' min='${h}' max='${m}' step='${w}' value='${Sc(o[c] || 0)}'>`;
    const [N, x] = v.querySelectorAll("input"), k = () => {
      const O = Number(h), $ = Number(m), pt = (Number(N.value) - O) / Math.max(1e-6, $ - O) * 100;
      N.style.setProperty("--v", `${U(pt, 0, 100)}%`);
    };
    N.disabled = !y, x.disabled = !y;
    const R = (O) => {
      if (!y) return;
      let $ = Number(O);
      Number.isNaN($) && ($ = 0), $ = U($, h, m), c === "yaw_deg" && ($ = Re($)), o[c] = $, e === "cutout" && (c === "hFOV_deg" || c === "vFOV_deg") && (o.aspect_id = jr(o)), N.value = String($), x.value = Sc($), k(), ht();
    };
    N.oninput = () => R(N.value), x.oninput = () => R(x.value), N.onchange = () => re(), x.onchange = () => re(), k(), r.appendChild(v);
  }
  function zs() {
    const r = fe();
    if (!r) return;
    p.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: yi(r)
    }, xt.querySelectorAll(".pano-field[data-key]").forEach((m) => {
      const w = m.dataset.key;
      if (!w || !(w in r)) return;
      const y = m.querySelector("input[type='range']"), v = m.querySelector("input[type='number']");
      if (!y || !v) return;
      const N = Number(m.dataset.min ?? y.min ?? 0), x = Number(m.dataset.max ?? y.max ?? 0);
      let k = Number(r[w] || 0);
      Number.isNaN(k) && (k = 0), k = U(k, N, x);
      const R = String(k);
      y.value !== R && (y.value = R);
      const O = Sc(k);
      v.value !== O && (v.value = O);
      const $ = (k - N) / Math.max(1e-6, x - N) * 100;
      y.style.setProperty("--v", `${U($, 0, 100)}%`);
    });
    const c = yi(r), l = xt.querySelector(".pano-cutout-aspect-label span");
    l && (l.textContent = c), xt.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]").forEach((m) => {
      m.classList.toggle("active", String(m.getAttribute("data-aspect")) === c);
    });
  }
  function cu({ disabled: r = !1, onChange: o }) {
    const c = He(d.coverage), l = document.createElement("div");
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
      const y = He(w);
      h.setAttribute("data-selected", y === 180 ? "1" : "0"), h.querySelectorAll(".pano-segment-btn").forEach((v) => {
        v.setAttribute("aria-pressed", He(v.getAttribute("data-value")) === y ? "true" : "false"), v.disabled = !!r;
      });
    };
    return h.querySelectorAll(".pano-segment-btn").forEach((w) => {
      w.onclick = () => {
        if (r) return;
        const y = He(w.getAttribute("data-value"));
        y !== He(d.coverage) && (o == null || o(y), m(y));
      };
    }), m(c), l;
  }
  function Bt() {
    var st, Pt, Ut, At, Tt, $t, Ft, Vt, oe, Qn, tr, Zi, no, ui, fi, Ji;
    if (a) return;
    const r = [...xt.children].slice(0, 2);
    xt.innerHTML = "", r.forEach((Mt) => xt.appendChild(Mt));
    const o = xt.querySelector(".pano-side-actions");
    if (o && (o.innerHTML = ""), s) {
      const Mt = document.createElement("div");
      Mt.className = "pano-inspector", Mt.appendChild(cu({
        onChange: (Kt) => {
          var se;
          d.coverage = Kt, p.coverage = Kt, g && (g.value = String(Kt), (se = g.callback) == null || se.call(g, g.value)), kt.backgroundDirty = !0, ht(), Bt();
        }
      }));
      const Gt = document.createElement("details");
      Gt.className = "pano-ui-settings", Gt.open = !1, Gt.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Et.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(st = d.ui_settings) != null && st.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Pt = d.ui_settings) != null && Pt.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Ut = d.ui_settings) != null && Ut.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(At = d.ui_settings) != null && At.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Tt = d.ui_settings) != null && Tt.invert_view_y ? "false" : "true"}">Normal</button>
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
      const de = Gt.querySelector("[data-setting='invert-x']"), Rn = Gt.querySelector("[data-setting='invert-y']"), er = Gt.querySelector("[data-ui-picker='quality']"), Ln = Gt.querySelector("[data-action='ui-reset-defaults']"), nr = (Kt, se, wn, di) => {
        const wr = Kt.querySelector(".pano-picker-trigger"), Qi = Kt.querySelector(".pano-picker-label"), xn = Kt.querySelector(".pano-picker-pop"), xr = () => {
          const Fn = String(wn()), Vn = se.find((ta) => String(ta.value) === Fn) || se[0];
          Qi.textContent = Vn.label, xn.innerHTML = "", se.forEach((ta) => {
            const ea = document.createElement("button");
            ea.type = "button", ea.className = `pano-picker-item${String(ta.value) === Fn ? " active" : ""}`, ea.textContent = ta.label, ea.onclick = () => {
              di(ta.value), xn.hidden = !0, xr(), vr(), ht();
            }, xn.appendChild(ea);
          });
        };
        return wr.onclick = (Fn) => {
          Fn.stopPropagation(), Gt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((Vn) => {
            Vn !== xn && (Vn.hidden = !0);
          }), xn.hidden = !xn.hidden;
        }, xr(), xr;
      }, On = (Kt, se) => {
        Kt.setAttribute("data-selected", se ? "1" : "0"), Kt.querySelectorAll(".pano-segment-btn").forEach((wn) => {
          wn.setAttribute("aria-pressed", wn.getAttribute("data-value") === (se ? "1" : "0") ? "true" : "false");
        });
      };
      de.querySelectorAll(".pano-segment-btn").forEach((Kt) => {
        Kt.onclick = () => {
          const se = Kt.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_x = se, On(de, se), vr(), ht();
        };
      }), Rn.querySelectorAll(".pano-segment-btn").forEach((Kt) => {
        Kt.onclick = () => {
          const se = Kt.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_y = se, On(Rn, se), vr(), ht();
        };
      });
      const Ot = nr(
        er,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(d.ui_settings.preview_quality || "balanced"),
        (Kt) => {
          const se = String(Kt || "balanced");
          d.ui_settings.preview_quality = se === "draft" || se === "high" ? se : "balanced";
        }
      );
      Ln.onclick = () => {
        d.ui_settings.invert_view_x = !1, d.ui_settings.invert_view_y = !1, d.ui_settings.preview_quality = "balanced", On(de, !1), On(Rn, !1), Ot(), vr(), ht();
      }, Mt.appendChild(Gt), xt.appendChild(Mt);
      const Xt = document.createElement("div");
      Xt.className = "pano-side-footer", Xt.innerHTML = '<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>', Xt.querySelector("[data-action='close-preview']").onclick = () => li(), xt.appendChild(Xt), Xi(Mt);
      return;
    }
    const c = fe(), l = In(), h = Il();
    l.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), c && h !== "stroke" && (p.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (h === "image" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (h === "image" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: yi(c)
    });
    const m = p.panelLastValues || (e === "stickers" || h === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), w = h === "stroke" ? null : c, y = w || m, v = !!w, N = document.createElement("div");
    N.className = "pano-inspector", N.appendChild(cu({
      disabled: i,
      onChange: (Mt) => {
        var Gt, de;
        d.coverage = Mt, p.coverage = Mt, g && (g.value = String(Mt), (Gt = g.callback) == null || Gt.call(g, g.value)), pe(), (de = t.setDirtyCanvas) == null || de.call(t, !0, !0), Bt(), zt(), ht();
      }
    }));
    const x = document.createElement("div");
    for (x.innerHTML = `
      <div class="pano-section-title">
        <span>Transform</span>
      </div>
    `; x.firstChild; ) N.appendChild(x.firstChild);
    if (xt.appendChild(N), e === "stickers" || e === "cutout") {
      const Mt = document.createElement("div");
      Mt.className = "pano-field-wide pano-target-row";
      const Gt = "Selection";
      Mt.innerHTML = `
        <label>${Gt}</label>
        <div class="pano-picker">
          <button class="pano-picker-trigger" type="button">
            <span class="pano-picker-label"></span>
            <span class="pano-picker-caret">▾</span>
          </button>
          <div class="pano-picker-pop" hidden></div>
        </div>
      `;
      const de = Mt.querySelector(".pano-picker-trigger"), Rn = Mt.querySelector(".pano-picker-label"), er = Mt.querySelector(".pano-picker-pop"), Ln = [{ id: "", label: e === "stickers" ? "No image" : "Nothing selected", item: null }];
      e === "stickers" ? yn().forEach((Ot, Xt) => {
        var wn, di;
        const Kt = we(Ot) ? String(Ot.id || Fr) : String(((di = (wn = d.assets) == null ? void 0 : wn[Ot.asset_id]) == null ? void 0 : di.name) || Ot.asset_id || Ot.id), se = `${Xt + 1}. ${Kt}${we(Ot) && ni(Ot) ? " (hidden)" : ""}`;
        Ln.push({ id: Ot.id, label: se, item: Ot, kind: "image" });
      }) : cp().forEach((Ot) => {
        Ln.push({ id: Ot.item.id, label: Ot.label, item: Ot.item, kind: Ot.kind });
      });
      const nr = (w == null ? void 0 : w.id) || "", On = Ln.find((Ot) => Ot.id === nr) || Ln[0];
      Rn.innerHTML = On.item ? El(On) : xo(String(On.label || "")), er.innerHTML = "", Ln.forEach((Ot) => {
        const Xt = document.createElement("button");
        Xt.type = "button", Xt.className = `pano-picker-item${Ot.id === nr ? " active" : ""}`, Xt.innerHTML = Ot.item ? El(Ot) : xo(String(Ot.label || "")), Xt.onclick = () => {
          er.hidden = !0, ji(Ot.item || null);
          const Kt = Ot.item || null;
          if (Kt && !Ne(Kt)) {
            const se = Re(Number(Kt.yaw_deg || 0)), wn = U(Number(Kt.pitch_deg || 0), -89.9, 89.9);
            rn(se, wn, p.viewFov);
          }
          Bt(), zt(), ht();
        }, er.appendChild(Xt);
      }), de.disabled = Ln.length <= 1, de.onclick = (Ot) => {
        Ot.stopPropagation(), !de.disabled && (er.hidden = !er.hidden);
      }, N.appendChild(Mt);
    }
    const k = document.createElement("div");
    k.className = "pano-state-actions", k.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${Et.copy}<span>Copy State</span></button>`;
    const R = k.querySelector("[data-action='copy-state-inline']");
    R.disabled = !v || h === "stroke" || l.length > 1, R.onclick = async () => {
      if (!v || h === "stroke" || l.length > 1) return;
      const Mt = JSON.stringify(e === "cutout" && h !== "image" ? Ol(y) : _p(c));
      try {
        await navigator.clipboard.writeText(Mt);
        const Gt = R.querySelector("span");
        Gt && (Gt.textContent = "Copied", window.setTimeout(() => {
          Gt.textContent = "Copy State";
        }, 900));
      } catch {
      }
    }, N.appendChild(k);
    const O = document.createElement("div");
    O.className = `pano-params${p.panelWasEnabled ? "" : " disabled"}`, N.appendChild(O), l.length > 1 ? (O.innerHTML = `
        <div class="pano-param-note">Selected objects: ${l.length}</div>
        <div class="pano-param-note">Multi-selection supports z-order and delete.</div>
      `, O.classList.toggle("disabled", !v), p.panelWasEnabled = v, ja()) : (oi(O, y, "yaw_deg", "Yaw", -180, 180, 0.1, v && !i), oi(O, y, "pitch_deg", "Pitch", -90, 90, 0.1, v && !i), oi(O, y, "hFOV_deg", "H FOV", 1, 179, 0.1, v && !i), oi(O, y, "vFOV_deg", "V FOV", 1, 179, 0.1, v && !i), e === "stickers" || h === "image" ? oi(O, y, "rot_deg", "Rotation", -180, 180, 0.1, v && !i) : oi(O, y, "roll_deg", "Roll", -180, 180, 0.1, v && !i), v !== p.panelWasEnabled ? requestAnimationFrame(() => {
      O.classList.toggle("disabled", !v);
    }) : O.classList.toggle("disabled", !v), p.panelWasEnabled = v, ja());
    const $ = document.createElement("div");
    $.className = "pano-visibility-section", $.innerHTML = `
      <div class="pano-section-title">
        <span>Layers</span>
      </div>
      <div class="pano-visibility-stack">
        <div class="pano-visibility-row" data-visibility-row="mask">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${Et.circle_dashed_tool}</span><span>Mask</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="mask" aria-label="Toggle mask"></button>
        </div>
        <div class="pano-visibility-row" data-visibility-row="objects">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${Et.image}</span><span>Paint / Images</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="objects" aria-label="Toggle paint and images"></button>
        </div>
        <div class="pano-visibility-row" data-visibility-row="panorama">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${Et.globe}</span><span>Panorama</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="panorama" aria-label="Toggle panorama"></button>
        </div>
      </div>
    `;
    const W = Array.isArray((Vt = (Ft = d == null ? void 0 : d.painting) == null ? void 0 : Ft.paint) == null ? void 0 : Vt.strokes) ? d.painting.paint.strokes.length : 0, pt = Array.isArray((Qn = (oe = d == null ? void 0 : d.painting) == null ? void 0 : oe.mask) == null ? void 0 : Qn.strokes) ? d.painting.mask.strokes.length : 0, wt = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((Mt) => String((Mt == null ? void 0 : Mt.name) || "")) : [], vt = Yh(
      t,
      wt.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), lt = !!String((vt == null ? void 0 : vt.src) || "").trim() || Dl("pano_input_images").length > 0, gt = Array.isArray(yn()) && yn().length > 0 || W > 0, mt = pt > 0, bt = (Mt) => Mt === "panorama" ? lt : Mt === "objects" ? gt : mt, ut = (Mt, Gt) => {
      const de = Mt.closest("[data-visibility-row]"), Rn = bt(String(Mt.getAttribute("data-visibility") || ""));
      Mt.innerHTML = Gt ? Et.eye : Et.eye_dashed, Mt.setAttribute("aria-pressed", Gt ? "true" : "false"), Mt.setAttribute("data-tip", Gt ? "Hide" : "Show"), Mt.disabled = !Rn, Mt.classList.toggle("active", !!Gt), de == null || de.classList.toggle("is-hidden", !Gt), de == null || de.classList.toggle("is-disabled", !Rn);
    };
    if ($.querySelectorAll("[data-visibility]").forEach((Mt) => {
      const Gt = String(Mt.getAttribute("data-visibility") || ""), de = () => Gt === "panorama" ? !!p.showPanorama : Gt === "objects" ? !!p.showObjects : !!p.showMask;
      ut(Mt, de()), Mt.onclick = () => {
        bt(Gt) && (Gt === "panorama" ? p.showPanorama = !p.showPanorama : Gt === "objects" ? p.showObjects = !p.showObjects : p.showMask = !p.showMask, ut(Mt, de()), ht());
      };
    }), N.appendChild(Object.assign(document.createElement("div"), { className: "pano-divider" })), N.appendChild($), !i) {
      const Mt = document.createElement("details");
      Mt.className = "pano-ui-settings", Mt.open = !1, Mt.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Et.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(tr = d.ui_settings) != null && tr.invert_view_x ? "1" : "0"}">
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
      const Gt = Mt.querySelector("[data-setting='invert-x']"), de = Mt.querySelector("[data-setting='invert-y']"), Rn = Mt.querySelector("[data-ui-picker='quality']"), er = Mt.querySelector("[data-action='ui-reset-defaults']"), Ln = (Ot, Xt, Kt, se) => {
        const wn = Ot.querySelector(".pano-picker-trigger"), di = Ot.querySelector(".pano-picker-label"), wr = Ot.querySelector(".pano-picker-pop"), Qi = () => {
          const xn = String(Kt()), xr = Xt.find((Fn) => String(Fn.value) === xn) || Xt[0];
          di.textContent = xr.label, wr.innerHTML = "", Xt.forEach((Fn) => {
            const Vn = document.createElement("button");
            Vn.type = "button", Vn.className = `pano-picker-item${String(Fn.value) === xn ? " active" : ""}`, Vn.textContent = Fn.label, Vn.onclick = () => {
              se(Fn.value), wr.hidden = !0, Qi(), vr(), t.setDirtyCanvas(!0, !0), ht();
            }, wr.appendChild(Vn);
          });
        };
        return wn.onclick = (xn) => {
          xn.stopPropagation(), Mt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((xr) => {
            xr !== wr && (xr.hidden = !0);
          }), wr.hidden = !wr.hidden;
        }, Qi(), Qi;
      }, nr = (Ot, Xt) => {
        Ot.setAttribute("data-selected", Xt ? "1" : "0"), Ot.querySelectorAll(".pano-segment-btn").forEach((Kt) => {
          Kt.setAttribute("aria-pressed", Kt.getAttribute("data-value") === (Xt ? "1" : "0") ? "true" : "false");
        });
      };
      Gt.querySelectorAll(".pano-segment-btn").forEach((Ot) => {
        Ot.onclick = () => {
          const Xt = Ot.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_x = Xt, nr(Gt, Xt), vr(), t.setDirtyCanvas(!0, !0), ht();
        };
      }), de.querySelectorAll(".pano-segment-btn").forEach((Ot) => {
        Ot.onclick = () => {
          const Xt = Ot.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_y = Xt, nr(de, Xt), vr(), t.setDirtyCanvas(!0, !0), ht();
        };
      });
      const On = Ln(
        Rn,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(d.ui_settings.preview_quality || "balanced"),
        (Ot) => {
          const Xt = String(Ot || "balanced");
          d.ui_settings.preview_quality = Xt === "draft" || Xt === "high" ? Xt : "balanced";
        }
      );
      er.onclick = () => {
        d.ui_settings.invert_view_x = !1, d.ui_settings.invert_view_y = !1, d.ui_settings.preview_quality = "balanced", nr(Gt, !1), nr(de, !1), On(), vr(), t.setDirtyCanvas(!0, !0), ht();
      }, N.appendChild(Mt);
    }
    const j = document.createElement("div");
    j.className = "pano-side-footer", j.innerHTML = `
      <button class="pano-btn" data-action="cancel-close">Cancel</button>
      <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
    `, j.querySelector("[data-action='cancel-close']").onclick = () => li(), j.querySelector("[data-action='save-close']").onclick = () => {
      mu(), li();
    }, xt.appendChild(j), Xi(N);
  }
  function Ya(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const c = String(r.name || "").toLowerCase();
    return c.endsWith(".png") || c.endsWith(".jpg") || c.endsWith(".jpeg") || c.endsWith(".webp") || c.endsWith(".gif") || c.endsWith(".bmp");
  }
  async function lu(r) {
    if (i || e !== "stickers" && e !== "cutout" || !Ya(r)) return;
    const o = ua("asset"), c = URL.createObjectURL(r);
    try {
      const l = await new Promise((w, y) => {
        const v = new Image();
        v.onload = () => w(v), v.onerror = () => y(new Error("image load failed")), v.src = c;
      });
      jt.set(o, l);
      const h = ua("st");
      d.stickers.push({
        id: h,
        asset_id: o,
        yaw_deg: p.viewYaw,
        pitch_deg: p.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Tr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: Tl()
      }), ji(d.stickers[d.stickers.length - 1]), Us(), re(), Bt(), zt(), ht();
      const m = (async () => {
        const w = await Ps(r, String(r.name || o));
        (Array.isArray(d.stickers) ? d.stickers : []).filter((N) => String((N == null ? void 0 : N.asset_id) || "") === o).length && (d.assets[o] = w, ai(), pe(), Bt(), zt(), ht());
      })();
      ga.set(o, m);
      try {
        await m;
      } finally {
        ga.delete(o);
      }
    } catch {
      delete d.assets[o], jt.delete(o);
      const l = Array.isArray(d.stickers) ? d.stickers : [], h = l.filter((m) => String((m == null ? void 0 : m.asset_id) || "") === o);
      h.length && (d.stickers = l.filter((m) => String((m == null ? void 0 : m.asset_id) || "") !== o), h.some((m) => {
        var w;
        return String((m == null ? void 0 : m.id) || "") === String(((w = p.selection) == null ? void 0 : w.id) || "");
      }) && ji(null), Bt(), zt(), ht());
    } finally {
      URL.revokeObjectURL(c);
    }
  }
  function uu(r) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const c = (l = o.files) == null ? void 0 : l[0];
      !c || typeof r != "function" || r(c);
    }, o.click();
  }
  function js() {
    i || e !== "stickers" && e !== "cutout" || uu((r) => {
      lu(r);
    });
  }
  async function kg(r) {
    var N;
    if (i || e !== "stickers" && e !== "cutout") return;
    const o = fe();
    if (!o || !Pe(o) || we(o) || !Ya(r)) return;
    const c = String(o.id || ""), l = String(o.asset_id || ""), h = l ? on(((N = d.assets) == null ? void 0 : N[l]) || null) : null, m = Number(o.vFOV_deg || 0), w = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, y = ua("asset"), v = URL.createObjectURL(r);
    try {
      const x = await new Promise((R, O) => {
        const $ = new Image();
        $.onload = () => R($), $.onerror = () => O(new Error("image load failed")), $.src = v;
      });
      jt.set(y, x), o.asset_id = y, o.vFOV_deg = Tr(
        Number(o.hFOV_deg || 30),
        Number(x.naturalWidth || x.width || 1),
        Number(x.naturalHeight || x.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, ln(), re(), Bt(), zt(), ht();
      const k = (async () => {
        const R = await Ps(r, String(r.name || y));
        (Array.isArray(d.stickers) ? d.stickers : []).some((W) => String((W == null ? void 0 : W.id) || "") === c && String((W == null ? void 0 : W.asset_id) || "") === y) && (d.assets[y] = R, ai(), pe(), Bt(), zt(), ht());
      })();
      ga.set(y, k);
      try {
        await k;
      } finally {
        ga.delete(y);
      }
    } catch {
      delete d.assets[y], jt.delete(y);
      const x = (Array.isArray(d.stickers) ? d.stickers : []).find((k) => String((k == null ? void 0 : k.id) || "") === c) || null;
      x && String(x.asset_id || "") === y && (l && h && (d.assets[l] = h), x.asset_id = l, x.vFOV_deg = m, x.crop = w ? { ...w } : null), ln(), Bt(), zt(), ht();
    } finally {
      URL.revokeObjectURL(v);
    }
  }
  function Pg() {
    if (i) return;
    const r = fe();
    !r || !Pe(r) || we(r) || uu((o) => {
      kg(o);
    });
  }
  async function Ag() {
    if (i || e !== "stickers") return;
    const r = d.assets && typeof d.assets == "object" ? d.assets : {}, o = Object.entries(r).filter(([, l]) => {
      const h = String((l == null ? void 0 : l.type) || "").toLowerCase(), m = String((l == null ? void 0 : l.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!o.length) return;
    let c = !1;
    for (const [l, h] of o)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const w = await fetch(m).then((k) => k.blob()), y = String(w.type || "image/png").split("/")[1] || "png", v = String((h == null ? void 0 : h.name) || `${l}.${y}`), N = new File([w], v, { type: w.type || "image/png" }), x = await Ps(N, v);
        d.assets[l] = {
          ...x,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (pe(), ht());
  }
  function fu() {
    i || e === "cutout" && (Us(), d.shots = [{
      id: ua("sh"),
      yaw_deg: p.viewYaw,
      pitch_deg: p.viewPitch,
      hFOV_deg: 64,
      vFOV_deg: 40,
      roll_deg: 0,
      aspect_id: jh(64, 40)
    }], ji(d.shots[0]), p.cutoutAspectOpen = !1, re(), pe(), Bt(), ht({ cause: "cutout_frame" }));
  }
  function Cg() {
    i || e === "cutout" && (d.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, d.active.selected_shot_id = null, re(), pe(), Bt(), ht());
  }
  function Ig() {
    const r = Array.isArray(d.stickers) ? d.stickers : [], o = [];
    for (const c of r)
      we(c) && (c.visible = !1, o.push(c));
    return o;
  }
  function du(r, o, c = "Clear") {
    return new Promise((l) => {
      const h = document.createElement("div");
      h.className = "pano-canvas-confirm", h.innerHTML = `
        <div class="pano-canvas-confirm-card" role="dialog" aria-modal="true" aria-label="${r}">
          <div class="pano-canvas-confirm-title">${r}</div>
          <div class="pano-canvas-confirm-text">${o}</div>
          <div class="pano-canvas-confirm-actions">
            <button class="pano-btn" data-action="cancel">Cancel</button>
            <button class="pano-btn pano-btn-primary" data-action="confirm">${c}</button>
          </div>
        </div>
      `;
      const m = (v) => {
        h.remove(), l(!!v);
      };
      h.addEventListener("pointerdown", (v) => {
        v.target === h && m(!1);
      });
      const w = h.querySelector("[data-action='cancel']"), y = h.querySelector("[data-action='confirm']");
      w.onclick = () => m(!1), y.onclick = () => m(!0), A.appendChild(h), y.focus();
    });
  }
  async function hu() {
    var c, l;
    if (i || !await du(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    d.painting = Ma(null), Tn();
    const o = Ig();
    e === "stickers" ? (d.stickers = o, d.assets = {}, p.selectedId = ((c = o[0]) == null ? void 0 : c.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], d.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, ai()) : (d.stickers = o, d.assets = {}, d.shots = [], p.selectedId = null, p.selectedIds = [], d.active.selected_sticker_id = null, d.active.selected_shot_id = null, p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, ai()), re(), pe(), Bt(), zt(), ht();
  }
  async function Eg(r) {
    var m, w, y, v;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", c = o === "mask" ? "Mask" : "Paint", l = ci(o);
    if (!(!l.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((w = p.interaction) == null ? void 0 : w.layerKind) === o) || !await du(
      `Clear ${c}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((y = p.interaction) == null ? void 0 : y.kind) === "draw" && ((v = p.interaction) == null ? void 0 : v.layerKind) === o) {
        const N = br();
        N && p.paintEngine.cancelActiveStroke(N), p.interaction = null;
      }
      l.length = 0, d.painting.raster_objects = pn().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== o), o === "paint" && (Me().length = 0), Tn(), re(), pe(), Bt(), zt(), un(), ht();
    }
  }
  function Tg() {
    if (i) return;
    const r = fe();
    if (!r || !Pe(r) || we(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = ua("st"), o.yaw_deg = Re((o.yaw_deg || 0) + 8), o.z_index = Tl(), d.stickers.push(o), d.active.selected_sticker_id = o.id, p.selectedId = o.id, p.selectedIds = [o.id], ln(), re(), pe(), zt(), Bt(), ht();
  }
  function pu() {
    var c, l, h, m, w, y, v;
    if (i) return;
    const r = In(), o = fe();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const N = new Set(r.filter((R) => Ne(R)).map((R) => String(R.actionGroupId || R.id || ""))), x = new Set(r.filter((R) => We(R)).map((R) => Ke(R.rasterObjectId || R.id || ""))), k = new Set(r.filter(Pe).map((R) => String(R.id || "")));
        N.size > 0 && (d.painting.paint.strokes = (Array.isArray((l = (c = d.painting) == null ? void 0 : c.paint) == null ? void 0 : l.strokes) ? d.painting.paint.strokes : []).filter((R) => !N.has(String((R == null ? void 0 : R.actionGroupId) || ""))), d.painting.groups = Me().filter((R) => !N.has(String((R == null ? void 0 : R.actionGroupId) || (R == null ? void 0 : R.id) || ""))), Tn()), x.size > 0 && (d.painting.raster_objects = pn().filter((R) => !x.has(String((R == null ? void 0 : R.id) || ""))), Wi()), k.size > 0 && (d.stickers = (Array.isArray(d.stickers) ? d.stickers : []).filter((R) => k.has(String((R == null ? void 0 : R.id) || "")) ? we(R) ? (ni(R) || (R.visible = !1), !0) : !1 : !0), ai(), ln()), p.selectedId = null, p.selectedIds = [], re(), pe(), Bt(), zt(), ht();
        return;
      }
      if (Ne(o)) {
        const N = String(o.actionGroupId || o.id || "").trim();
        d.painting.paint.strokes = (Array.isArray((m = (h = d.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? d.painting.paint.strokes : []).filter((x) => String((x == null ? void 0 : x.actionGroupId) || "").trim() !== N), d.painting.groups = Me().filter((x) => String((x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || "").trim() !== N), Tn(), p.selectedId = null, p.selectedIds = [], re(), pe(), Bt(), zt(), ht();
        return;
      }
      if (We(o)) {
        const N = Ke(o.rasterObjectId || o.id || "");
        d.painting.raster_objects = pn().filter((x) => String((x == null ? void 0 : x.id) || "").trim() !== N), Wi(), p.selectedId = null, p.selectedIds = [], re(), pe(), Bt(), zt(), ht();
        return;
      }
      if (e === "stickers" || Pe(o)) {
        if (we(o)) {
          if (ni(o)) return;
          o.visible = !1, ln(), re(), pe(), Bt(), zt(), ht();
          return;
        }
        d.stickers = d.stickers.filter((N) => N.id !== o.id), ai(), ln(), p.selectedId = e === "cutout" ? d.active.selected_shot_id || ((w = d.stickers[0]) == null ? void 0 : w.id) || null : ((y = d.stickers[0]) == null ? void 0 : y.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], d.active.selected_sticker_id = ((v = d.stickers[0]) == null ? void 0 : v.id) || null, re(), pe(), Bt(), zt(), ht();
        return;
      }
      Cg();
    }
  }
  function Dg(r, o) {
    if (!r) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const R = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(R)) {
        const [W, pt] = R.split(":").map((wt) => Number(wt));
        if (Number.isFinite(W) && Number.isFinite(pt)) return W >= pt;
      }
      const O = Number(r.hFOV_deg || 64), $ = Number(r.vFOV_deg || 40);
      return Math.abs(O - $) > 1e-6 ? O >= $ : Gc(r) >= 1;
    })();
    let [h, m] = c[String(o)] || c["1:1"];
    h >= m !== l && ([h, m] = [m, h]);
    const w = h / m, y = U(Number(r.hFOV_deg || 64), 1, 179), v = U(Number(r.vFOV_deg || 40), 1, 179), N = Math.sqrt(Math.max(1, y * v)), x = U(N * Math.sqrt(w), 1, 179), k = U(N / Math.sqrt(w), 1, 179);
    r.hFOV_deg = x, r.vFOV_deg = k, r.aspect_id = String(o);
  }
  function Rg(r) {
    if (!r) return;
    const o = Math.max(1, Number(r.hFOV_deg || 90)), c = Math.max(1, Number(r.vFOV_deg || 60));
    r.hFOV_deg = c, r.vFOV_deg = o, r.aspect_id = jr(r);
  }
  function gu() {
    Qr().forEach((o, c) => {
      o.type === "sticker" && o.item && (o.item.z_index = c), o.type === "strokeGroup" && o.item && (o.item.z_index = c), o.type === "rasterObject" && o.item && (o.item.z_index = c);
    });
  }
  function Lg() {
    if (i) return;
    const r = In();
    if (!fe() || r.length === 0) return;
    gu();
    const c = Qr(), l = new Set(r.map((y) => Pe(y) ? `sticker:${String(y.id || "")}` : We(y) ? `rasterObject:${Ke(y.rasterObjectId || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || y.id || "")}`)), h = [], m = [];
    if (c.forEach((y) => {
      var N, x;
      const v = y.type === "sticker" ? `sticker:${String(((N = y.item) == null ? void 0 : N.id) || "")}` : y.type === "rasterObject" ? `rasterObject:${String(((x = y.item) == null ? void 0 : x.id) || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || "")}`;
      l.has(v) ? h.push(y) : m.push(y);
    }), !h.length || h[h.length - 1] === c[c.length - 1]) return;
    [...m, ...h].forEach((y, v) => {
      y.type === "sticker" && y.item && (y.item.z_index = v), y.type === "strokeGroup" && y.item && (y.item.z_index = v), y.type === "rasterObject" && y.item && (y.item.z_index = v);
    }), ln(), re(), pe(), zt(), ht();
  }
  function Og() {
    if (i) return;
    const r = In();
    if (!fe() || r.length === 0) return;
    gu();
    const c = Qr(), l = new Set(r.map((y) => Pe(y) ? `sticker:${String(y.id || "")}` : We(y) ? `rasterObject:${Ke(y.rasterObjectId || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || y.id || "")}`)), h = [], m = [];
    if (c.forEach((y) => {
      var N, x;
      const v = y.type === "sticker" ? `sticker:${String(((N = y.item) == null ? void 0 : N.id) || "")}` : y.type === "rasterObject" ? `rasterObject:${String(((x = y.item) == null ? void 0 : x.id) || y.id || "")}` : `strokeGroup:${String(y.actionGroupId || "")}`;
      l.has(v) ? h.push(y) : m.push(y);
    }), !h.length || h[0] === c[0]) return;
    [...h, ...m].forEach((y, v) => {
      y.type === "sticker" && y.item && (y.item.z_index = v), y.type === "strokeGroup" && y.item && (y.item.z_index = v), y.type === "rasterObject" && y.item && (y.item.z_index = v);
    }), ln(), re(), pe(), zt(), ht();
  }
  function mu() {
    i || (d.projection_model = "pinhole_rectilinear", d.alpha_mode = "straight", f && (d.output_preset = Wc(f.value, Number(d.output_preset || 2048))), g && (d.coverage = He(g.value)), b && (d.bg_color = String(b.value || d.bg_color || "#00ff00")), Dn(), t.setDirtyCanvas(!0, !0));
  }
  function Dn() {
    var o;
    if (i) return;
    d.coverage = He(d.coverage);
    const r = JSON.stringify(d);
    _ && (_.value = r, (o = _.callback) == null || o.call(_, r));
  }
  function vr() {
    d.ui_settings = vv(d.ui_settings), i || Dn();
  }
  function pe() {
    var r;
    i || (Dn(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0));
  }
  function Us() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", un(), Bt());
  }
  function si(r) {
    const o = C.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * C.width,
      y: (r.clientY - o.top) / o.height * C.height
    };
  }
  function Xa(r) {
    const o = C.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function yu() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function Zt() {
    var c;
    if (e !== "cutout") return null;
    const r = Array.isArray(d.shots) ? d.shots : [], o = String(((c = d.active) == null ? void 0 : c.selected_shot_id) || "");
    return r.find((l) => String((l == null ? void 0 : l.id) || "") === o) || r[0] || null;
  }
  function Ye(r = Zt()) {
    var R, O, $, W;
    if (!r) return null;
    const o = Math.max(1e-4, Number(((R = wi(r)) == null ? void 0 : R.aspect) || 1)), c = 56, l = Math.max(80, C.width - c * 2), h = Math.max(80, C.height - c * 2);
    let m = l, w = m / o;
    w > h && (w = h, m = w * o);
    const y = Math.max(0.1, Number(((O = p.frameView) == null ? void 0 : O.zoom) || 1)), v = m * y, N = w * y, x = Number((($ = p.frameView) == null ? void 0 : $.panX) || 0), k = Number(((W = p.frameView) == null ? void 0 : W.panY) || 0);
    return {
      x: (C.width - v) * 0.5 + x,
      y: (C.height - N) * 0.5 + k,
      w: v,
      h: N
    };
  }
  function Bs() {
    return e === "cutout" && p.mode === "frame" && !!Zt();
  }
  function vn(r, o = performance.now()) {
    if (p.mode === "unwrap") {
      const m = pr(), w = (r.x - m.x) / Math.max(1, m.w), y = (r.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (w % 1 + 1) % 1,
        v: U(y, 0, 1),
        t: Number(o || 0)
      };
    }
    const c = Ms(r.x, r.y), { lon: l, lat: h } = Es(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: U(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function _n(r, o, c = performance.now()) {
    const l = Ye(o);
    if (!l) return null;
    const h = {
      x: (Number(r.x) - l.x) / Math.max(1, l.w),
      y: (Number(r.y) - l.y) / Math.max(1, l.h)
    }, m = Vs(o, h);
    if (!m) return null;
    const { lon: w, lat: y } = Es(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (w / (2 * Math.PI) + 0.5 + 1) % 1,
      v: U(0.5 - y / Math.PI, 0, 1),
      t: Number(c || 0)
    };
  }
  function Fg(r, o) {
    var N;
    const c = Zt(), l = Ye(c);
    if (!c || !l) return !1;
    const h = Math.max(0.1, Number(((N = p.frameView) == null ? void 0 : N.zoom) || 1)), m = U(h * Number(o), 0.25, 12);
    if (Math.abs(m - h) < 1e-6) return !1;
    const w = (Number(r.x) - l.x) / Math.max(1e-6, l.w), y = (Number(r.y) - l.y) / Math.max(1e-6, l.h);
    p.frameView.zoom = m;
    const v = Ye(c);
    return v ? (p.frameView.panX += Number(r.x) - (v.x + v.w * w), p.frameView.panY += Number(r.y) - (v.y + v.h * y), !0) : !1;
  }
  function Vg(r, o) {
    const c = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function _r(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? ir : an[o] ? o : p.activeBrushPresetId || ir;
  }
  function bu() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (yu() || Bs());
  }
  function vu() {
    var r;
    return bu() && ((r = p.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function Za(r, o = !0) {
    const c = Number((r == null ? void 0 : r.x) || 0), l = Number((r == null ? void 0 : r.y) || 0), h = o !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, w = m.inside !== h || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - l) > 0.01;
    return p.pointerPos = { x: c, y: l, inside: h }, w;
  }
  function Hg() {
    var x, k;
    if (!vu()) return null;
    const r = p.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? p.maskTool : p.paintTool, c = _r(o), l = an[c] || an[ir], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), w = Math.max(3, m * 0.5), y = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : fn(p.paintColor), v = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : U(Math.max(0.16, Number(y.a ?? 1) * 0.3), 0.16, 0.52), N = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : U(Math.max(0.46, Number(y.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: l,
      radius: w,
      fillStyle: Mn(y, v),
      strokeStyle: Mn(y, N),
      x: Number(((x = p.pointerPos) == null ? void 0 : x.x) || 0),
      y: Number(((k = p.pointerPos) == null ? void 0 : k.y) || 0),
      hotspotX: w,
      hotspotY: w
    };
  }
  function $g() {
    var R, O, $;
    const r = Hg();
    if (!F) return;
    if (!r) {
      F.style.display = "none";
      return;
    }
    let o = r.radius * 2, c = r.radius * 2, l = "999px", h = 0, m = r.fillStyle, w = "1px solid rgba(222, 222, 222, 0.72)", y = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const v = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let x = Number(r.hotspotX ?? o * 0.5), k = Number(r.hotspotY ?? c * 0.5);
    if (r.toolKind === "lasso_fill")
      o = es, c = es, l = "0", w = "0", y = "none", x = sv, k = cv, m = hv(r.fillStyle, N, v);
    else if (r.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const W = Math.max(1, Number(((R = r.preset) == null ? void 0 : R.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * W), c = Math.max(6, r.radius * 2), l = `${Math.min(6, c * 0.42)}px`, h = Number((($ = (O = r.preset) == null ? void 0 : O.angle) == null ? void 0 : $.value) || 0) * zr;
    } else r.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    F.style.display = "block", F.style.width = `${Math.round(o)}px`, F.style.height = `${Math.round(c)}px`, F.style.borderRadius = l, F.style.border = w, F.style.boxShadow = y, F.style.background = m, F.style.backgroundRepeat = "no-repeat", F.style.backgroundPosition = "center", F.style.backgroundSize = "contain", F.style.transform = `translate(${Math.round(r.x - x)}px, ${Math.round(r.y - k)}px) rotate(${h}deg)`;
  }
  function zg() {
    var vt;
    if (!L || !Y) return;
    const r = p.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? p.maskTool : p.paintTool;
    if (o === "lasso_fill") return;
    const c = _r(o), l = an[c] || an[ir], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), w = Math.max(6, m * 0.5), y = o === "eraser", v = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : y ? { r: 1, g: 1, b: 1, a: 0.22 } : fn(p.paintColor), N = r === "mask" ? Mn(v, 0.22) : y ? "rgba(255,255,255,0.14)" : Mn(v, U(Math.max(0.18, Number(v.a ?? 1) * 0.34), 0.18, 0.56)), x = r === "mask" ? Mn(v, 0.96) : y ? "rgba(255,255,255,0.72)" : Mn(v, U(Math.max(0.56, Number(v.a ?? 1) * 0.96), 0.56, 1));
    let k = w * 2, R = w * 2, O = "999px", $ = 0, W = N;
    const pt = "rgba(222, 222, 222, 0.72)", wt = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      W = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const lt = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      k = Math.max(16, w * 2 * lt), R = Math.max(10, w * 2), O = `${Math.min(8, R * 0.42)}px`, $ = Number(((vt = l == null ? void 0 : l.angle) == null ? void 0 : vt.value) || 0) * zr;
    } else o === "brush" ? W = `radial-gradient(circle at 50% 50%, ${x} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (k = Math.max(18, w * 1.8), R = k, W = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${x} 43%, ${x} 58%, rgba(0,0,0,0) 59%)`) : y && (W = "rgba(255,255,255,0.12)");
    Y.style.width = `${Math.round(k)}px`, Y.style.height = `${Math.round(R)}px`, Y.style.borderRadius = O, Y.style.background = W, Y.style.border = `1px solid ${pt}`, Y.style.boxShadow = `0 0 0 1px ${wt}`, Y.style.transform = `rotate(${$}deg)`, J && (clearTimeout(J), J = 0), L.classList.remove("fade-out"), L.classList.add("show");
  }
  function Ja() {
    !L || !L.classList.contains("show") || (L.classList.add("fade-out"), J && clearTimeout(J), J = window.setTimeout(() => {
      L.classList.remove("show", "fade-out"), J = 0;
    }, 180));
  }
  function jg(r, o, c, l) {
    const h = _r(o), m = an[h] || an[ir], w = p.brushSizes[h] ?? 10, y = Math.max(1, w) * Math.max(0.1, m.sizeScale ?? 1), v = Vg(l, y), N = c.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), x = {
      id: bi(r),
      actionGroupId: bi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: y,
      createdAt: Date.now(),
      color: r === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: v.radiusModel,
      radiusValue: v.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((k) => ({ ...k })),
        points: N.map((k) => ({ ...k }))
      }
    };
    return Yf(x, m), Number(m.aspect ?? 1), Number(x.aspect ?? 1), String(x.stampKind || ""), Number(x.size || 0), String(x.radiusModel || ""), Number(x.radiusValue || 0), { ...x.targetSpace }, x;
  }
  function Ug(r, o, c, l) {
    const h = c.map((v) => ({
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: Number.isFinite(Number(v == null ? void 0 : v.widthScale)) ? Math.max(0, Number(v.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(v == null ? void 0 : v.pressureLike)) ? Math.max(0, Number(v.pressureLike)) : 1
    })), m = _r(o), w = an[m] || an[ir], y = {
      id: bi(r),
      actionGroupId: bi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: r === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((v) => ({ ...v }))
      }
    };
    return Yf(y, w), Number(w.aspect ?? 1), Number(y.aspect ?? 1), String(y.stampKind || ""), { ...y.targetSpace }, y;
  }
  function ci(r) {
    const o = d.painting || (d.painting = Ma(null)), c = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function Bg(r, o, c = performance.now()) {
    let l;
    if (p.mode === "frame") {
      const N = Zt();
      if (!N) return !1;
      l = _n(o, N, c);
    } else
      l = vn(o, c);
    const h = r.stroke.geometry.rawPoints || r.stroke.geometry.points, m = r.stroke.geometry.points, w = h[h.length - 1];
    if (w) {
      const N = Math.abs(Number(l.u ?? l.x ?? 0) - Number(w.u ?? w.x ?? 0)), x = Math.abs(Number(l.v ?? l.y ?? 0) - Number(w.v ?? w.y ?? 0));
      if (N < 15e-4 && x < 15e-4) return !1;
    }
    const y = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...y }), m.push({ ...y });
    const v = br();
    if (v) {
      const N = p.paintEngine.ensureTarget(v);
      p.paintEngine.appendStrokePoint(N, Number(y.u ?? 0), Number(y.v ?? 0), r.stroke);
    }
    return !0;
  }
  function Gg(r, o, c = performance.now()) {
    var w, y;
    let l;
    if (p.mode === "frame") {
      const v = Zt();
      if (!v) return !1;
      l = _n(o, v, c);
    } else
      l = vn(o, c);
    const h = (y = (w = r == null ? void 0 : r.stroke) == null ? void 0 : w.geometry) == null ? void 0 : y.points;
    if (!l || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const v = Math.abs(Number(l.u ?? l.x ?? 0) - Number(m.u ?? m.x ?? 0)), N = Math.abs(Number(l.v ?? l.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (v < 15e-4 && N < 15e-4) return !1;
    }
    return h.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Kg(r) {
    var lt, gt, mt, bt, ut;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    Wa();
    const c = br(), l = Hs(c.width, c.height);
    if (!dg(l, o, { w: c.width, h: c.height })) return !1;
    const h = ((gt = (lt = l.ctx) == null ? void 0 : lt.getImageData(0, 0, c.width, c.height)) == null ? void 0 : gt.data) || null;
    if (!h) return !1;
    const m = new Map(Me().map((j) => [String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "").trim(), j ? { ...j } : null])), w = [], y = [], v = [...pn().filter((j) => String((j == null ? void 0 : j.layerKind) || "paint") !== "paint")];
    let N = !1, x = Qr().reduce((j, st) => Math.max(j, Number((st == null ? void 0 : st.z_index) || 0)), -1) + 1;
    function k(j, st, Pt, Ut = 8) {
      let At = st, Tt = Pt, $t = -1, Ft = -1;
      for (let Vt = 0; Vt < Pt; Vt += 1)
        for (let oe = 0; oe < st; oe += 1)
          j[(Vt * st + oe) * 4 + 3] <= Ut || (oe < At && (At = oe), Vt < Tt && (Tt = Vt), oe > $t && ($t = oe), Vt > Ft && (Ft = Vt));
      return $t < At || Ft < Tt ? null : { minX: At, minY: Tt, maxX: $t, maxY: Ft };
    }
    const R = k(h, c.width, c.height, 8);
    if (!R) return !1;
    function O(j, st) {
      return !j || !st ? !1 : !(j.maxX < st.minX || st.maxX < j.minX || j.maxY < st.minY || st.maxY < j.minY);
    }
    function $(j, st) {
      const Pt = Jr((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "", "paint", st);
      if (!Pt) return null;
      const Ut = Pt.centerUv.u - Pt.halfW, At = Pt.centerUv.u + Pt.halfW, Tt = Pt.centerUv.v - Pt.halfH, $t = Pt.centerUv.v + Pt.halfH, Ft = c.width, Vt = c.height;
      return {
        minX: Math.floor((Ut % 1 + 1) % 1 * Ft),
        maxX: Math.ceil((At % 1 + 1) % 1 * Ft),
        minY: Math.floor(U(Tt, 0, 1) * Vt),
        maxY: Math.ceil(U($t, 0, 1) * Vt),
        wraps: At - Ut >= 1 || Ut < 0 || At > 1
      };
    }
    function W(j) {
      const st = (j == null ? void 0 : j.bbox) || null;
      if (!st) return null;
      const Pt = (j == null ? void 0 : j.transform) || {}, Ut = c.width, At = c.height, Tt = Number(st.u0 || 0) + Number(Pt.du || 0), $t = Number(st.u1 || 0) + Number(Pt.du || 0), Ft = Number(st.v0 || 0) + Number(Pt.dv || 0), Vt = Number(st.v1 || 0) + Number(Pt.dv || 0);
      return {
        minX: Math.floor((Tt % 1 + 1) % 1 * Ut),
        maxX: Math.ceil(($t % 1 + 1) % 1 * Ut),
        minY: Math.floor(U(Ft, 0, 1) * At),
        maxY: Math.ceil(U(Vt, 0, 1) * At),
        wraps: $t - Tt >= 1 || Tt < 0 || $t > 1
      };
    }
    function pt(j) {
      return j ? j.wraps ? O(R, { minX: 0, maxX: j.maxX, minY: j.minY, maxY: j.maxY }) || O(R, { minX: j.minX, maxX: c.width - 1, minY: j.minY, maxY: j.maxY }) : O(R, j) : !0;
    }
    function wt(j) {
      if (!j) return { touched: !1, canvas: null };
      const st = Hs(c.width, c.height);
      st.ctx.drawImage(j, 0, 0);
      const Pt = st.ctx.getImageData(0, 0, c.width, c.height);
      st.ctx.save(), st.ctx.globalCompositeOperation = "destination-out", st.ctx.drawImage(l.canvas, 0, 0), st.ctx.restore();
      const Ut = st.ctx.getImageData(0, 0, c.width, c.height);
      for (let At = 0; At < c.width * c.height; At += 1) {
        if (h[At * 4 + 3] <= 8) continue;
        const $t = Pt.data[At * 4 + 3], Ft = Ut.data[At * 4 + 3];
        if ($t > Ft)
          return { touched: !0, canvas: st.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function vt(j, st, Pt) {
      const Ut = Number(Pt == null ? void 0 : Pt.z_index), At = pg(j, st, Pt).map((Tt, $t) => ({
        ...Tt,
        z_index: Number.isFinite(Ut) ? Ut + $t * 1e-3 : x + $t * 1e-3
      }));
      return At.length && (x = Math.max(x, ...At.map((Tt) => Number((Tt == null ? void 0 : Tt.z_index) || 0))) + 1), At;
    }
    for (const j of Me()) {
      const st = String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "").trim();
      if (!st) continue;
      const Pt = Cn(st, "paint");
      if (!pt($(j, Pt))) {
        y.push(j), w.push(...Pt);
        continue;
      }
      const Ut = ((bt = (mt = p.paintEngine) == null ? void 0 : mt.getGroupTarget) == null ? void 0 : bt.call(mt, st)) || null, At = ((ut = Ut == null ? void 0 : Ut.committedPaint) == null ? void 0 : ut.canvas) || null;
      if (!At) {
        y.push(j), w.push(...Pt);
        continue;
      }
      const Tt = wt(At);
      if (!Tt.touched || !Tt.canvas) {
        y.push(j), w.push(...Pt);
        continue;
      }
      N = !0;
      const $t = vt(Tt.canvas, "paint", m.get(st) || j || {});
      v.push(...$t);
    }
    for (const j of pn().filter((st) => String((st == null ? void 0 : st.layerKind) || "paint") === "paint")) {
      if (!pt(W(j))) {
        v.push(j);
        continue;
      }
      const st = Cp(j, null);
      if (!st) {
        v.push(j);
        continue;
      }
      const Pt = wt(st);
      if (!Pt.touched || !Pt.canvas) {
        v.push(j);
        continue;
      }
      N = !0;
      const Ut = vt(Pt.canvas, "paint", j);
      v.push(...Ut);
    }
    return N ? (d.painting.paint.strokes = w, d.painting.groups = y.sort((j, st) => Number((j == null ? void 0 : j.z_index) || 0) - Number((st == null ? void 0 : st.z_index) || 0)), d.painting.raster_objects = v.sort((j, st) => Number((j == null ? void 0 : j.z_index) || 0) - Number((st == null ? void 0 : st.z_index) || 0)), ri({ preservePanelValues: !1 }), !0) : !1;
  }
  function Wg(r) {
    var m, w, y, v;
    const o = ((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const c = String(((w = r == null ? void 0 : r.stroke) == null ? void 0 : w.toolKind) || "pen");
    if (r.layerKind === "paint" && c === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = nu(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), Kg(r);
    const l = r.layerKind === "paint" && c !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && Sl((y = r.stroke) == null ? void 0 : y.actionGroupId), ci(r.layerKind).push(r.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = nu(h, r.stroke.targetSpace, !0), l && Sl((v = r.stroke) == null ? void 0 : v.actionGroupId), ci(r.layerKind).push(r.stroke), !0);
  }
  function _u(r) {
    var c;
    if (e === "cutout" && p.mode === "frame") {
      const l = Zt(), h = Ye(l);
      if (!l || !h || !(Number((r == null ? void 0 : r.x) || 0) >= Number(h.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(h.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const w = _n(r, l, performance.now()), y = w ? Gi(w) : null;
      if (y)
        for (const N of Rs()) {
          if (!Pe(N)) continue;
          const x = qi(N, y);
          if (x && Number(x.x) >= 0 && Number(x.x) <= 1 && Number(x.y) >= 0 && Number(x.y) <= 1) {
            const k = Ee(N);
            if (k != null && k.visible) return { item: N, geom: k };
          }
        }
      const v = Nl(!1).slice().sort((N, x) => Number((x == null ? void 0 : x.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of v) {
        if (N.type === "strokeGroup") {
          const R = ei(Vi("paint", N.actionGroupId || N.id || ""));
          if (!R) continue;
          const O = Ee(R);
          if (!(O != null && O.visible)) continue;
          const $ = Array.isArray(O.strokePaths) ? O.strokePaths : [];
          for (const W of $) {
            const pt = Array.isArray(W == null ? void 0 : W.points) ? W.points : [];
            if (!pt.length) continue;
            if (W.closed && pt.length >= 3 && ar(r, pt)) return { item: R, geom: O };
            const wt = Math.max(8, Number((W == null ? void 0 : W.lineWidth) || 0) * 0.5 + 6);
            for (let vt = 0; vt < pt.length - 1; vt += 1)
              if (wc(r, pt[vt], pt[vt + 1]) <= wt * wt) return { item: R, geom: O };
            if (pt.length === 1 && $r(r, pt[0]) <= wt * wt) return { item: R, geom: O };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const R = ti(Hi(((c = N.item) == null ? void 0 : c.id) || N.id || ""));
          if (!R) continue;
          const O = Ee(R);
          if ($l(R, O, r, w)) return { item: R, geom: O };
          continue;
        }
        const x = N.item;
        if (!x || !Pe(x) || !y) continue;
        const k = qi(x, y);
        if (k && Number(k.x) >= 0 && Number(k.x) <= 1 && Number(k.y) >= 0 && Number(k.y) <= 1) {
          const R = Ee(x);
          if (R != null && R.visible) return { item: x, geom: R };
        }
      }
      return null;
    }
    const o = [
      ...Nl(!1).slice().sort((l, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var h;
        return l.type === "strokeGroup" ? ei(Vi("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? ti(Hi(((h = l.item) == null ? void 0 : h.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...e === "cutout" ? Rs().filter((l) => bn(l)) : []
    ];
    for (const l of o) {
      if (Ne(l)) {
        const m = Ee(l);
        if (!(m != null && m.visible)) continue;
        const w = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const y of w) {
          const v = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
          if (!v.length) continue;
          if (y.closed && v.length >= 3 && ar(r, v)) return { item: l, geom: m };
          const N = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
          for (let x = 0; x < v.length - 1; x += 1)
            if (wc(r, v[x], v[x + 1]) <= N * N) return { item: l, geom: m };
          if (v.length === 1 && $r(r, v[0]) <= N * N) return { item: l, geom: m };
        }
        continue;
      }
      if (We(l)) {
        const m = Ee(l);
        if (!(m != null && m.visible)) continue;
        if ($l(l, m, r)) return { item: l, geom: m };
        continue;
      }
      const h = Ee(l);
      if (h.visible && ar(r, h.corners))
        return { item: l, geom: h };
    }
    return null;
  }
  function Gs(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const l = r.corners.findIndex((m) => $r(m, o) <= 121);
      if (l >= 0) {
        const m = r.corners[l], w = m.x - r.center.x, y = m.y - r.center.y, v = w * y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: v };
      }
      const h = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const m of h) {
        const w = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && w.length >= 3 && ar(o, w)) return { kind: "move", cursor: "default" };
        const y = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let v = 0; v < w.length - 1; v += 1)
          if (wc(o, w[v], w[v + 1]) <= y * y) return { kind: "move", cursor: "default" };
      }
      return ar(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject")
      return ar(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (e === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const l = r.edgeMidpoints.find((h) => $r(h, o) <= 169);
      if (l) {
        const h = l.edge === "left" || l.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const c = r.corners.findIndex((l) => $r(l, o) <= 121);
    if (c >= 0) {
      const l = r.corners[c], h = l.x - r.center.x, m = l.y - r.center.y, w = h * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: w };
    }
    return $r(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : ar(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function wu(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function qg(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function Yg(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((h) => qg(r, h))) return !0;
    const c = (Number(r.x0) + Number(r.x1)) * 0.5, l = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!ar({ x: c, y: l }, o.corners);
  }
  function ge(r) {
    if ($g(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? C.style.cursor = "none" : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" ? C.style.cursor = "grabbing" : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? C.style.cursor = "move" : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" ? C.style.cursor = p.interaction.cursor || "nwse-resize" : p.interaction.kind === "rotate" ? C.style.cursor = "grabbing" : C.style.cursor = "default";
      return;
    }
    if (vu()) {
      C.style.cursor = "none";
      return;
    }
    if (p.mode === "frame" && p.primaryTool !== "cursor") {
      C.style.cursor = "default";
      return;
    }
    if (p.primaryTool === "cursor" && p.marqueeModifier) {
      C.style.cursor = "default";
      return;
    }
    const o = fe(), c = o ? Ee(o) : null, l = o ? hr(o) : !1, h = l ? { kind: "none", cursor: "default" } : Gs(c, r);
    if (!l && h.kind !== "none") {
      C.style.cursor = h.cursor;
      return;
    }
    if (p.primaryTool === "cursor" && _u(r)) {
      C.style.cursor = "default";
      return;
    }
    C.style.cursor = p.mode === "pano" ? "grab" : "default";
  }
  function zt() {
    if (!tt) return;
    const r = fe(), o = In();
    if (!r && o.length === 0 || p.interaction) {
      tt.style.display = "none";
      return;
    }
    if (o.length > 1) {
      const ut = "multi", j = xs(o);
      if (p.menuMode !== ut)
        tt.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Et.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Et.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${j ? "Unlock" : "Lock"}" data-tip="${j ? "Unlock" : "Lock"}">${j ? Et.lock_open : Et.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Et.delete}</button>
        `, p.menuMode = ut, p.menuSize.measured = !1, Xi(tt);
      else {
        const Mt = tt.querySelector("[data-action='toggle-lock']");
        Mt && (Mt.innerHTML = j ? Et.lock_open : Et.lock_closed, Mt.setAttribute("aria-label", j ? "Unlock" : "Lock"), Mt.setAttribute("data-tip", j ? "Unlock" : "Lock"));
      }
      const st = ws(o);
      if (!(st != null && st.visible)) {
        tt.style.display = "none";
        return;
      }
      const Pt = st.corners.map((Mt) => Mt.x), Ut = st.corners.map((Mt) => Mt.y), At = Math.min(...Pt), Tt = Math.max(...Pt), $t = Math.max(...Ut), Ft = tt.style.display, Vt = tt.style.visibility;
      tt.style.display = "flex", tt.style.visibility = "hidden";
      const oe = tt.getBoundingClientRect(), Qn = Math.round(Number((oe == null ? void 0 : oe.width) || 0)) || tt.offsetWidth || p.menuSize.w || 220, tr = Math.round(Number((oe == null ? void 0 : oe.height) || 0)) || tt.offsetHeight || p.menuSize.h || 40;
      p.menuSize.w = Number.isFinite(Qn) && Qn > 0 ? Qn : 220, p.menuSize.h = Number.isFinite(tr) && tr > 0 ? tr : 40, tt.style.display = Ft, tt.style.visibility = Vt, p.menuSize.measured = !0;
      const Zi = p.menuSize.w, no = p.menuSize.h, ui = 14;
      tt.style.display = "flex";
      let fi = (At + Tt) * 0.5 - Zi * 0.5, Ji = $t + 18;
      if (fi = U(fi, ui, C.width - Zi - ui), Ji + no > C.height - ui) {
        tt.style.display = "none";
        return;
      }
      tt.style.left = `${fi}px`, tt.style.top = `${Ji}px`;
      return;
    }
    const c = Il(), l = hr(r), h = c === "stroke" ? "stroke:paint" : e === "stickers" || c === "image" ? `stickers:${we(r) ? "external" : "normal"}` : `cutout:${p.cutoutAspectOpen ? "open" : "closed"}`;
    if (p.menuMode !== h) {
      if (c === "stroke")
        tt.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Et.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Et.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Et.lock_open : Et.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Et.delete}</button>
        `;
      else if (e === "stickers" || c === "image")
        tt.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Et.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Et.send_back}</button>
          ${we(r) ? "" : `<button class="pano-btn pano-btn-icon" data-action="duplicate" aria-label="Duplicate" data-tip="Duplicate">${Et.duplicate}</button><button class="pano-btn pano-btn-icon" data-action="replace-image" aria-label="Replace Image" data-tip="Replace image">${Et.replace_image}</button>`}
          ${we(r) ? `<button class="pano-btn pano-btn-icon" data-action="back-initial" aria-label="Back to Initial" data-tip="Back to initial position">${Et.back_initial}</button>` : ""}
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Et.lock_open : Et.lock_closed}</button>
          ${we(r) ? `<button class="pano-btn pano-btn-icon" data-action="toggle-visible" aria-label="Hide" data-tip="Hide input image">${Et.eye_dashed}</button>` : `<button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Et.delete}</button>`}
        `;
      else {
        const ut = yi(r);
        tt.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${Et.aspect}</button>
            <div class="pano-aspect-popover${p.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
              <button class="pano-btn pano-aspect-choice${ut === "1:1" ? " active" : ""}" data-action="aspect-set" data-aspect="1:1">1:1</button>
              <button class="pano-btn pano-aspect-choice${ut === "4:3" ? " active" : ""}" data-action="aspect-set" data-aspect="4:3">4:3</button>
              <button class="pano-btn pano-aspect-choice${ut === "3:2" ? " active" : ""}" data-action="aspect-set" data-aspect="3:2">3:2</button>
              <button class="pano-btn pano-aspect-choice${ut === "16:9" ? " active" : ""}" data-action="aspect-set" data-aspect="16:9">16:9</button>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon" data-action="rotate-90" aria-label="Rotate 90°" data-tip="Rotate 90°">${Et.rotate_90}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Et.lock_open : Et.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Et.delete}</button>
        `;
      }
      p.menuMode = h, p.menuSize.measured = !1, Xi(tt);
    }
    if ((e === "stickers" || c === "image") && we(r)) {
      const ut = tt.querySelector("[data-action='back-initial']");
      if (ut) {
        const st = mp();
        ut.disabled = !st, ut.setAttribute("aria-disabled", st ? "false" : "true"), ut.setAttribute("data-tip", st ? "Back to initial position" : "Already at initial position");
      }
      const j = tt.querySelector("[data-action='toggle-visible']");
      if (j) {
        const st = ni(r);
        j.innerHTML = st ? Et.eye : Et.eye_dashed, j.setAttribute("aria-label", st ? "Show" : "Hide"), j.setAttribute("data-tip", st ? "Show input image" : "Hide input image");
      }
    }
    const m = tt.querySelector("[data-action='toggle-lock']");
    m && (m.innerHTML = l ? Et.lock_open : Et.lock_closed, m.setAttribute("aria-label", l ? "Unlock" : "Lock"), m.setAttribute("data-tip", l ? "Unlock" : "Lock"));
    const w = Ee(r);
    if (!(w != null && w.visible)) {
      tt.style.display = "none";
      return;
    }
    const y = w.corners, v = y.map((ut) => ut.x), N = y.map((ut) => ut.y), x = Math.min(...v), k = Math.max(...v), R = Math.max(...N), O = tt.style.display, $ = tt.style.visibility;
    tt.style.display = "flex", tt.style.visibility = "hidden";
    const W = tt.getBoundingClientRect(), pt = Math.round(Number((W == null ? void 0 : W.width) || 0)) || tt.offsetWidth || p.menuSize.w || 220, wt = Math.round(Number((W == null ? void 0 : W.height) || 0)) || tt.offsetHeight || p.menuSize.h || 40;
    p.menuSize.w = Number.isFinite(pt) && pt > 0 ? pt : 220, p.menuSize.h = Number.isFinite(wt) && wt > 0 ? wt : 40, tt.style.display = O, tt.style.visibility = $, p.menuSize.measured = !0;
    const vt = p.menuSize.w, lt = p.menuSize.h, gt = 14;
    tt.style.display = "flex";
    let mt = (x + k) * 0.5 - vt * 0.5, bt = R + 18;
    if (!Number.isFinite(mt) || !Number.isFinite(bt)) {
      tt.style.display = "none";
      return;
    }
    if (mt = U(mt, gt, C.width - vt - gt), bt + lt > C.height - gt) {
      tt.style.display = "none";
      return;
    }
    tt.style.left = `${mt}px`, tt.style.top = `${bt}px`;
  }
  function Qa() {
    B && (ve.timer && (clearTimeout(ve.timer), ve.timer = 0), ve.target = null, B.classList.remove("show", "pano-tooltip-footer", "pano-tooltip-tool-rail"));
  }
  function Xg(r) {
    if (!B || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    B.textContent = o;
    const c = A.getBoundingClientRect(), l = r.getBoundingClientRect(), h = 8, m = B.offsetWidth || 100, w = B.offsetHeight || 24, y = !!r.closest(".pano-floating-left"), v = !!r.closest(".pano-paint-footer") || !!r.closest(".pano-paint-color-float");
    B.classList.remove("pano-tooltip-footer", "pano-tooltip-tool-rail");
    let N = l.left - c.left + l.width * 0.5 - m * 0.5, x = l.top - c.top - w - 8;
    if (y)
      B.classList.add("pano-tooltip-tool-rail"), N = l.right - c.left + 10, x = l.top - c.top + l.height * 0.5 - w * 0.5, N = U(N, h, Math.max(h, c.width - m - h)), x = U(x, h, Math.max(h, c.height - w - h));
    else if (v) {
      B.classList.add("pano-tooltip-footer");
      const k = r.closest(".pano-paint-footer"), R = k ? k.getBoundingClientRect() : l;
      N = R.left - c.left + R.width * 0.5 - m * 0.5, x = R.bottom - c.top + 5, N = U(N, h, Math.max(h, c.width - m - h)), x = Math.max(h, x);
    }
    N = U(N, h, Math.max(h, c.width - m - h)), x = Math.max(h, x), B.style.left = `${N}px`, B.style.top = `${x}px`, B.classList.add("show");
  }
  function Xi(r) {
    r.querySelectorAll("[data-tip]").forEach((o) => {
      o.__panoTipBound || (o.__panoTipBound = !0, o.addEventListener("pointerenter", () => {
        ve.target = o, ve.timer && clearTimeout(ve.timer), ve.timer = window.setTimeout(() => {
          ve.target === o && Xg(o);
        }, 220);
      }), o.addEventListener("pointerleave", () => {
        ve.target === o && (ve.target = null), Qa();
      }), o.addEventListener("pointerdown", Qa));
    });
  }
  const Te = ms({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (r) => {
      p.viewYaw = Re(Number(r.yaw || 0)), p.viewPitch = U(Number(r.pitch || 0), -89.9, 89.9), p.viewFov = U(Number(r.fov || p.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const r = C.getBoundingClientRect();
      return {
        w: Math.max(1, Number(r.width || C.clientWidth || 0)),
        h: Math.max(1, Number(r.height || C.clientHeight || 0))
      };
    },
    getInvert: () => {
      var r, o;
      return {
        x: (r = d.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (o = d.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: pr,
    onInteraction: () => {
      kt.backgroundDirty = !0, kt.dirty = !0;
    }
  });
  C.onpointerdown = (r) => {
    const o = si(r);
    if (Za(o, !0), p.viewTween = null, Te.state.inertia.active = !1, Te.state.inertia.vx = 0, Te.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), p.mode !== "frame") {
        const y = p.mode === "unwrap" ? o : Xa(r);
        p.interaction = { kind: "view", last: y, lastTs: performance.now() }, Te.startDrag(y.x, y.y, r.pointerId, performance.now());
      }
      ge(o), C.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (i) {
      if (p.mode === "pano") {
        const y = Xa(r);
        p.interaction = { kind: "view", last: y, lastTs: performance.now() }, Te.startDrag(y.x, y.y, r.pointerId, performance.now()), ge(o), C.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (Lt && !Lt.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (yu() || Bs())) {
      const y = p.primaryTool === "mask" ? "mask" : "paint", v = p.primaryTool === "mask" ? p.maskTool : p.paintTool, N = Bs() ? Zt() : null, x = { kind: "ERP_GLOBAL" }, k = N ? _n(o, N, performance.now()) : vn(o, performance.now());
      p.interaction = {
        kind: v === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: y,
        _livePreviewToken: bi("live"),
        stroke: v === "lasso_fill" ? Ug(y, v, [k], x) : jg(y, v, [k], x)
      }, Bi();
      const R = br();
      if (R)
        if (p.paintEngine.beginStroke(p.interaction.stroke, R), p.interaction.kind === "paint_stroke") {
          const O = p.paintEngine.ensureTarget(R), $ = Number((k == null ? void 0 : k.u) ?? (k == null ? void 0 : k.x) ?? 0), W = Number((k == null ? void 0 : k.v) ?? (k == null ? void 0 : k.y) ?? 0);
          p.paintEngine.appendStrokePoint(O, $, W, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, R);
      ge(o), C.setPointerCapture(r.pointerId), ht();
      return;
    }
    const c = In(), l = fe(), h = c.length > 1 ? ws(c) : l ? Ee(l) : null;
    if (p.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      p.interaction = { kind: "marquee_select", start: o, current: o }, ge(o), C.setPointerCapture(r.pointerId), ht({ localOnly: !0 });
      return;
    }
    if (c.length > 1 && (h != null && h.visible)) {
      if ((c.some((v) => hr(v)) ? { kind: "none" } : Gs(h, o)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: c.map((v) => v),
          offset: { x: o.x - h.center.x, y: o.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: c.filter((v) => Pe(v)).map((v) => ({
            id: String(v.id || ""),
            yaw_deg: Number(v.yaw_deg || 0),
            pitch_deg: Number(v.pitch_deg || 0),
            center: (() => {
              var x, k;
              const N = Ee(v);
              return N != null && N.visible ? { x: Number(((x = N.center) == null ? void 0 : x.x) || 0), y: Number(((k = N.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: c.filter((v) => Ne(v)).map((v) => ({
            id: String(v.actionGroupId || v.id || ""),
            layerKind: String(v.layerKind || "paint"),
            snapshot: on(Cn(v.actionGroupId, v.layerKind)),
            frameSnapshot: on(Jr(v.actionGroupId, v.layerKind)),
            center: (() => {
              var x, k;
              const N = Ee(v);
              return N != null && N.visible ? { x: Number(((x = N.center) == null ? void 0 : x.x) || 0), y: Number(((k = N.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: kl(v.actionGroupId, v.layerKind)
          })),
          rasterSnapshots: c.filter((v) => We(v)).map((v) => ({
            id: Ke(v.rasterObjectId || v.id || ""),
            snapshot: on(pn().find((N) => String((N == null ? void 0 : N.id) || "") === Ke(v.rasterObjectId || v.id || ""))),
            center: (() => {
              var x, k;
              const N = Ee(v);
              return N != null && N.visible ? { x: Number(((x = N.center) == null ? void 0 : x.x) || 0), y: Number(((k = N.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Tp(v)
          }))
        }, ge(o), C.setPointerCapture(r.pointerId);
        return;
      }
    } else if (l && (h != null && h.visible)) {
      const y = hr(l) ? { kind: "none" } : Gs(h, o);
      if (y.kind === "scale") {
        p.interaction = Ne(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: on(Cn(l.actionGroupId, l.layerKind)),
          frameSnapshot: on(Jr(l.actionGroupId, l.layerKind)),
          cursor: y.cursor
        } : {
          kind: "scale",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: y.cursor
        }, ge(o), C.setPointerCapture(r.pointerId);
        return;
      }
      if (y.kind === "scale_x" || y.kind === "scale_y") {
        p.interaction = {
          kind: y.kind,
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: y.cursor,
          edge: y.edge
        }, ge(o), C.setPointerCapture(r.pointerId);
        return;
      }
      if (y.kind === "rotate") {
        p.interaction = Ne(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: on(Cn(l.actionGroupId, l.layerKind)),
          frameSnapshot: on(Jr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: h.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x)
        }, ge(o), C.setPointerCapture(r.pointerId);
        return;
      }
      if (y.kind === "move") {
        if (Ne(l)) {
          const v = p.mode === "frame" ? (() => {
            const N = Zt();
            return N ? _n(o, N, performance.now()) : null;
          })() : vn(o, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: v,
            snapshot: on(Cn(l.actionGroupId, l.layerKind)),
            frameSnapshot: on(Jr(l.actionGroupId, l.layerKind))
          }, ge(o), C.setPointerCapture(r.pointerId);
          return;
        }
        if (We(l)) {
          const v = p.mode === "frame" ? (() => {
            const N = Zt();
            return N ? _n(o, N, performance.now()) : null;
          })() : vn(o, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: v,
            snapshot: on(pn().find((N) => String((N == null ? void 0 : N.id) || "") === Ke(l.rasterObjectId || l.id || "")))
          }, ge(o), C.setPointerCapture(r.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - h.center.x, y: o.y - h.center.y }
        }, ge(o), C.setPointerCapture(r.pointerId);
        return;
      }
    }
    const m = _u(o);
    if (m) {
      const y = p.selectedId !== m.item.id;
      if (y && p.selectedId && (re(), Dn()), ji(m.item), e === "cutout" && y && (p.cutoutAspectOpen = !1), y && Bt(), zt(), ht(), hr(m.item)) {
        ge(o);
        return;
      }
      p.interaction = {
        kind: Ne(m.item) ? "move_stroke_group" : We(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: Ne(m.item) || We(m.item) ? p.mode === "frame" ? (() => {
          const v = Zt();
          return v ? _n(o, v, performance.now()) : null;
        })() : vn(o, performance.now()) : null,
        snapshot: Ne(m.item) ? on(Cn(m.item.actionGroupId, m.item.layerKind)) : We(m.item) ? on(pn().find((v) => String((v == null ? void 0 : v.id) || "") === Ke(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Ne(m.item) ? on(Jr(m.item.actionGroupId, m.item.layerKind)) : null
      }, ge(o), C.setPointerCapture(r.pointerId);
      return;
    }
    const w = !!p.selectedId;
    if (w && (re(), Dn()), ri(), w && Bt(), zt(), ht(), p.mode === "pano") {
      const y = Xa(r);
      p.interaction = { kind: "view", last: y, lastTs: performance.now() }, Te.startDrag(y.x, y.y, r.pointerId, performance.now()), ge(o), C.setPointerCapture(r.pointerId);
    }
  }, C.onpointermove = (r) => {
    var l, h, m, w, y, v, N, x, k, R, O, $, W, pt, wt, vt, lt, gt;
    const o = si(r);
    if (Za(o, !0), !p.interaction) {
      ge(o);
      return;
    }
    ge(o);
    const c = p.interaction;
    if (c.kind === "paint_stroke") {
      const mt = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let bt = !1;
      mt.forEach((ut) => {
        const j = si(ut);
        Bg(c, j, performance.now()) && (bt = !0);
      }), bt && ht({ localOnly: !0 });
      return;
    }
    if (c.kind === "paint_lasso_fill") {
      const mt = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let bt = !1;
      if (mt.forEach((ut) => {
        const j = si(ut);
        Gg(c, j, performance.now()) && (bt = !0);
      }), bt) {
        const ut = br();
        ut && p.paintEngine.updateActiveStroke(c.stroke, ut), ht({ localOnly: !0 });
      }
      return;
    }
    if (c.kind === "view") {
      const mt = performance.now(), bt = p.mode === "unwrap" ? o : Xa(r);
      Te.moveDrag(bt.x, bt.y, p.mode === "unwrap" ? "unwrap" : "pano", mt), c.lastTs = mt, c.last = bt, ht({ localOnly: !0 });
      return;
    }
    if (c.kind === "pan_frame") {
      p.frameView.panX += o.x - c.last.x, p.frameView.panY += o.y - c.last.y, c.last = o, ht({ localOnly: !0 });
      return;
    }
    if (c.kind === "move") {
      const mt = o.x - c.offset.x, bt = o.y - c.offset.y;
      if (p.mode === "frame" && e === "cutout") {
        const ut = Zt(), j = Ye(ut);
        if (!ut || !j) return;
        const st = {
          x: U((mt - j.x) / Math.max(1, j.w), 0, 1),
          y: U((bt - j.y) / Math.max(1, j.h), 0, 1)
        }, Pt = Vs(ut, st);
        if (!Pt) return;
        const Ut = bo(Pt);
        c.item.yaw_deg = Ut.yaw, c.item.pitch_deg = Ut.pitch;
      } else if (p.mode === "unwrap") {
        const ut = pr(), j = U((mt - ut.x) / Math.max(ut.w, 1), 0, 1), st = U((bt - ut.y) / Math.max(ut.h, 1), 0, 1);
        c.item.yaw_deg = Re(j * 360 - 180), c.item.pitch_deg = U(90 - st * 180, -90, 90);
      } else {
        const ut = Ms(mt, bt), j = bo(ut);
        c.item.yaw_deg = j.yaw, c.item.pitch_deg = j.pitch;
      }
      Pe(c.item) && ln(), ht({ localOnly: !0 });
      return;
    }
    if (c.kind === "move_stroke_group") {
      const mt = p.mode === "frame" ? (() => {
        const j = Zt();
        return j ? _n(o, j, performance.now()) : null;
      })() : vn(o, performance.now());
      if (!mt || !c.startUv) return;
      const bt = Number(mt.u || 0) - Number(c.startUv.u || 0), ut = Number(mt.v || 0) - Number(c.startUv.v || 0);
      Pl((l = c.item) == null ? void 0 : l.actionGroupId, bt, ut, c.snapshot, (h = c.item) == null ? void 0 : h.layerKind, c.frameSnapshot) && (Tn({ rebuildPaintEngine: !0 }), ht({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_raster_object") {
      const mt = p.mode === "frame" ? (() => {
        const j = Zt();
        return j ? _n(o, j, performance.now()) : null;
      })() : vn(o, performance.now());
      if (!mt || !c.startUv) return;
      const bt = Number(mt.u || 0) - Number(c.startUv.u || 0), ut = Number(mt.v || 0) - Number(c.startUv.v || 0);
      Cl(((m = c.item) == null ? void 0 : m.rasterObjectId) || ((w = c.item) == null ? void 0 : w.id) || "", bt, ut, c.snapshot) && (Wi(), ht({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_multi") {
      const mt = o.x - Number(((y = c.offset) == null ? void 0 : y.x) || 0), bt = o.y - Number(((v = c.offset) == null ? void 0 : v.y) || 0);
      let ut = !1, j = !1, st = !1;
      const Pt = mt - Number(((N = c.startCenter) == null ? void 0 : N.x) || mt), Ut = bt - Number(((x = c.startCenter) == null ? void 0 : x.y) || bt);
      for (const At of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
        const Tt = (e === "cutout" ? _s() : yn()).find((Ft) => String((Ft == null ? void 0 : Ft.id) || "") === String(At.id || ""));
        if (!Tt || !Pe(Tt)) continue;
        const $t = {
          x: Number(((k = At.center) == null ? void 0 : k.x) || 0) + Pt,
          y: Number(((R = At.center) == null ? void 0 : R.y) || 0) + Ut
        };
        if (p.mode === "frame" && e === "cutout") {
          const Ft = Zt(), Vt = Ye(Ft);
          if (!Ft || !Vt) continue;
          const oe = {
            x: U(($t.x - Vt.x) / Math.max(1, Vt.w), 0, 1),
            y: U(($t.y - Vt.y) / Math.max(1, Vt.h), 0, 1)
          }, Qn = Vs(Ft, oe);
          if (!Qn) continue;
          const tr = bo(Qn);
          Tt.yaw_deg = tr.yaw, Tt.pitch_deg = tr.pitch;
        } else if (p.mode === "unwrap") {
          const Ft = pr(), Vt = U(($t.x - Ft.x) / Math.max(Ft.w, 1), 0, 1), oe = U(($t.y - Ft.y) / Math.max(Ft.h, 1), 0, 1);
          Tt.yaw_deg = Re(Vt * 360 - 180), Tt.pitch_deg = U(90 - oe * 180, -90, 90);
        } else {
          const Ft = Ms($t.x, $t.y), Vt = bo(Ft);
          Tt.yaw_deg = Vt.yaw, Tt.pitch_deg = Vt.pitch;
        }
        ut = !0;
      }
      for (const At of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
        const Tt = {
          x: Number(((O = At.center) == null ? void 0 : O.x) || 0) + Pt,
          y: Number((($ = At.center) == null ? void 0 : $.y) || 0) + Ut
        }, $t = p.mode === "frame" ? (() => {
          const Vt = Zt();
          return Vt ? _n(Tt, Vt, performance.now()) : null;
        })() : vn(Tt, performance.now()), Ft = At.centerUv || null;
        if ($t && Ft) {
          const Vt = Number($t.u || 0) - Number(Ft.u || 0), oe = Number($t.v || 0) - Number(Ft.v || 0);
          Pl(At.id, Vt, oe, At.snapshot, At.layerKind, At.frameSnapshot) && (ut = !0, j = !0);
        }
      }
      for (const At of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
        const Tt = {
          x: Number(((W = At.center) == null ? void 0 : W.x) || 0) + Pt,
          y: Number(((pt = At.center) == null ? void 0 : pt.y) || 0) + Ut
        }, $t = p.mode === "frame" ? (() => {
          const Vt = Zt();
          return Vt ? _n(Tt, Vt, performance.now()) : null;
        })() : vn(Tt, performance.now()), Ft = At.centerUv || null;
        if ($t && Ft) {
          const Vt = Number($t.u || 0) - Number(Ft.u || 0), oe = Number($t.v || 0) - Number(Ft.v || 0);
          Cl(At.id, Vt, oe, At.snapshot) && (ut = !0, st = !0);
        }
      }
      ut && (j ? Tn({ rebuildPaintEngine: !0 }) : st ? Wi() : ln(), ht({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_stroke_group") {
      const bt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      Al((wt = c.item) == null ? void 0 : wt.actionGroupId, bt, 0, c.snapshot, (vt = c.item) == null ? void 0 : vt.layerKind, c.frameSnapshot) && (Tn({ rebuildPaintEngine: !0 }), ht({ localOnly: !0 }));
      return;
    }
    if (c.kind === "rotate_stroke_group") {
      let mt = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - Number(c.startAng || 0)) * zr;
      r.shiftKey && (mt = Math.round(mt / 45) * 45), Al((lt = c.item) == null ? void 0 : lt.actionGroupId, 1, mt, c.snapshot, (gt = c.item) == null ? void 0 : gt.layerKind, c.frameSnapshot) && (Tn({ rebuildPaintEngine: !0 }), ht({ localOnly: !0 }));
      return;
    }
    if (c.kind === "marquee_select") {
      c.current = o, ht({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale") {
      const bt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = U(c.startHFOV * bt, 1, 179), c.item.vFOV_deg = U(c.startVFOV * bt, 1, 179), c.item.aspect_id = jr(c.item), ht({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_x") {
      const bt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = U(c.startHFOV * bt, 1, 179), c.item.aspect_id = jr(c.item), ht({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_y") {
      const bt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.vFOV_deg = U(c.startVFOV * bt, 1, 179), c.item.aspect_id = jr(c.item), ht({ localOnly: !0 });
      return;
    }
    if (c.kind === "rotate") {
      let bt = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - c.startAng) * zr, ut = c.startRot - bt;
      r.shiftKey && (ut = Math.round(ut / 45) * 45);
      const j = Pe(c.item) ? "rot_deg" : "roll_deg";
      c.item[j] = ut, ht({ localOnly: !0 });
    }
  }, C.onpointerup = () => {
    var o, c, l, h, m, w;
    const r = p.interaction;
    if (((o = p.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = p.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill")
      if (Bi(), Wg(p.interaction)) {
        Tn();
        const y = String(((l = p.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (y) {
          const N = Me().find((x) => String((x == null ? void 0 : x.actionGroupId) || "") === y);
          N && (N.frame = null);
        }
        const v = br();
        v && (String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(v), ru()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, v)), re(), Dn(), Bt(), zt(), t.setDirtyCanvas(!0, !0), ht();
      } else {
        const y = br();
        y && p.paintEngine.cancelActiveStroke(y);
      }
    else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const y = wu(p.interaction.start, p.interaction.current), N = [
        ...e === "cutout" ? Rs().filter((x) => !bn(x)) : [...yn()],
        ...tp(),
        ...ep()
      ].filter((x) => Yg(y, Ee(x)));
      sp(N, ((w = N[N.length - 1]) == null ? void 0 : w.id) || null), e === "cutout" && N.length && (p.cutoutAspectOpen = !1), Bt(), zt(), ht();
    } else if (p.interaction && p.interaction.kind !== "view" && p.interaction.kind !== "pan_frame") {
      let y = !1;
      (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (y = !0), p.interaction.kind === "move_raster_object" && (y = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (y = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (y = !0), y && Wi(), re(), Dn(), t.setDirtyCanvas(!0, !0), zs(), p.hqFrames = 1, zt(), ht();
    }
    p.interaction = null, Bi(), r && r.kind === "view" && Te.endDrag(performance.now()), Ua(), zt(), ge(p.pointerPos), ht();
  }, C.onpointercancel = () => {
    var r, o, c;
    if (((r = p.interaction) == null ? void 0 : r.kind) === "view" && Te.endDrag(performance.now()), ((o = p.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = p.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
      Bi();
      const l = br();
      l && p.paintEngine.cancelActiveStroke(l);
    }
    p.interaction = null, Bi(), Ua(), ge(p.pointerPos), ht({ localOnly: !0 });
  }, C.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, C.onmousemove = (r) => {
    const o = si(r);
    Za(o, !0), !p.interaction && ge(o);
  }, C.onmouseleave = () => {
    Za(p.pointerPos, !1), ge(p.pointerPos);
  }, C.onwheel = (r) => {
    if (p.mode === "frame") {
      const o = si(r), c = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      Fg(o, c) && ht({ localOnly: !0 }), r.preventDefault();
      return;
    }
    p.mode === "pano" && (Te.applyWheelEvent(r) && ht({ localOnly: !0 }), r.preventDefault());
  }, C.ondragover = (r) => {
    e !== "stickers" && e !== "cutout" || i || (r.preventDefault(), _e(!0));
  }, C.ondrop = (r) => {
    var l;
    if (e !== "stickers" && e !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), Ie.depth = 0, _e(!1);
    const c = Array.from(((l = r.dataTransfer) == null ? void 0 : l.files) || []).find((h) => Ya(h));
    c && lu(c);
  };
  const xu = (r) => {
    e !== "stickers" && e !== "cutout" || i || Zr(r) && (Ie.depth += 1, _e(!0), r.preventDefault());
  }, Su = (r) => {
    e !== "stickers" && e !== "cutout" || i || (!Ie.active && Zr(r) && _e(!0), Ie.active && r.preventDefault());
  }, Nu = (r) => {
    if (e !== "stickers" && e !== "cutout" || i || !Ie.active) return;
    Ie.depth = Math.max(0, Ie.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (Ie.depth === 0 || o) && _e(!1);
  }, Mu = (r) => {
    e !== "stickers" && e !== "cutout" || i || (Ie.depth = 0, _e(!1), Zr(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", xu, !0), window.addEventListener("dragover", Su, !0), window.addEventListener("dragleave", Nu, !0), window.addEventListener("drop", Mu, !0), z.forEach((r) => {
    r.onclick = () => {
      r.disabled || (p.mode = r.dataset.view, e === "cutout" && p.mode === "frame" && fe() && bn(fe()) && (ri({ preservePanelValues: !0 }), Bt(), zt()), Us(), Ua(), ht());
    };
  });
  function Ks() {
    const { canUndo: r, canRedo: o } = su();
    E.querySelectorAll("[data-action='undo'], [data-tool-ui-action='undo']").forEach((c) => {
      c.disabled = !r;
    }), E.querySelectorAll("[data-action='redo'], [data-tool-ui-action='redo']").forEach((c) => {
      c.disabled = !o;
    });
  }
  const Ws = E.querySelector("[data-action='undo']");
  Ws && (Ws.onclick = () => {
    i || Ws.disabled || Yi(-1);
  });
  const qs = E.querySelector("[data-action='redo']");
  qs && (qs.onclick = () => {
    i || qs.disabled || Yi(1);
  });
  const ku = E.querySelector("[data-action='add']");
  ku && (ku.onclick = () => {
    i || (e === "stickers" ? js() : fu());
  });
  const Pu = E.querySelector("[data-action='clear']");
  Pu && (Pu.onclick = () => {
    i || hu();
  });
  const Au = E.querySelector("[data-action='save']");
  Au && (Au.onclick = () => {
    i || mu();
  }), E.querySelector("[data-action='reset-view']").onclick = () => {
    rn(0, 0, 100, 180, 680);
  };
  const Rr = E.querySelector("[data-action='toggle-grid']"), Ys = () => {
    if (!Rr) return;
    const r = !!p.showGrid;
    Rr.innerHTML = r ? Et.eye : Et.eye_dashed, Rr.setAttribute("aria-pressed", r ? "true" : "false"), Rr.setAttribute("aria-label", r ? "Hide Grid" : "Show Grid"), Rr.setAttribute("data-tip", r ? "Hide grid" : "Show grid");
  };
  if (Rr && (Ys(), Rr.onclick = () => {
    p.showGrid = !p.showGrid, wv(t == null ? void 0 : t.id, p.showGrid), Ys(), ht();
  }), ot && (ot.querySelectorAll("[data-tool-mode]").forEach((r) => {
    r.onclick = () => {
      if (i) return;
      const o = String(r.getAttribute("data-tool-mode") || "cursor");
      p.primaryTool = o, (o === "paint" || o === "mask") && ri({ preservePanelValues: !0 }), un(), Bt(), zt(), ht();
    };
  }), ot.querySelectorAll("[data-tool-ui-action]").forEach((r) => {
    r.onclick = () => {
      if (i) return;
      const o = String(r.getAttribute("data-tool-ui-action") || "");
      if (!((o === "undo" || o === "redo") && r.disabled)) {
        if (o === "undo") Yi(-1);
        else if (o === "redo") Yi(1);
        else if (o === "clear") hu();
        else if (o === "add") js();
        else if (o === "add-image") js();
        else if (o === "add-or-look") {
          const c = Zt();
          if ((d.shots || []).length === 0)
            fu();
          else {
            const l = c;
            if (!l) return;
            p.selectedId = l.id || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], d.active.selected_shot_id = p.selectedId;
            const h = Re(Number(l.yaw_deg || 0)), m = U(Number(l.pitch_deg || 0), -89.9, 89.9);
            rn(h, m, p.viewFov), Bt(), zt(), ht();
          }
        }
      }
    };
  })), E.querySelectorAll("[data-paint-tool]").forEach((r) => {
    r.onclick = () => {
      p.primaryTool = "paint";
      const o = String(r.getAttribute("data-paint-tool") || "pen");
      p.paintTool = o, ri({ preservePanelValues: !0 }), an[o] && (p.activeBrushPresetId = o), un(), Bt(), zt(), ht();
    };
  }), E.querySelectorAll("[data-mask-tool]").forEach((r) => {
    r.onclick = () => {
      p.primaryTool = "mask", p.maskTool = String(r.getAttribute("data-mask-tool") || "pen"), ri({ preservePanelValues: !0 }), un(), Bt(), zt(), ht();
    };
  }), q.forEach((r) => {
    r.onclick = () => {
      const o = String(r.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
      Eg(o);
    };
  }), G.forEach((r) => {
    r.oninput = () => {
      if (r.disabled) return;
      const o = Math.max(1, Math.min(120, Math.round(Number(r.value)))), c = _r(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[c] = o;
      const l = (o - 1) / 119 * 100;
      G.forEach((h) => {
        h.value = String(o), h.style.setProperty("--v", `${U(l, 0, 100)}%`);
      }), K.forEach((h) => {
        h.textContent = String(o);
      }), zg();
    }, r.onchange = () => Ja(), r.addEventListener("pointerup", Ja), r.addEventListener("pointercancel", Ja), r.addEventListener("blur", Ja);
  }), Ct) {
    Ct.querySelectorAll("[data-paint-color-swatch]").forEach((o) => {
      o.onclick = () => {
        const c = Lo.find((l) => l.id === o.getAttribute("data-paint-color-swatch"));
        c && (p.paintColor = fn(c.color), yt(!0), un());
      };
    });
    const r = Ct.querySelector("[data-paint-color-custom]");
    r && (r.onclick = (o) => {
      o.preventDefault(), o.stopPropagation(), Lt && !Lt.hidden ? yt(!0) : rt(), un();
    });
  }
  const Zg = (r, o) => {
    var y;
    if (!Oe) return;
    const c = Oe.getBoundingClientRect(), l = U((r - c.left) / Math.max(1, c.width), 0, 1), h = 1 - U((o - c.top) / Math.max(1, c.height), 0, 1), m = la(p.customPaintColor), w = { ...xc(m.h, l, h), a: Number(((y = p.customPaintColor) == null ? void 0 : y.a) ?? 1) };
    p.customPaintColor = fn(w), p.paintColor = fn(w), un();
  }, Jg = (r) => {
    var m;
    if (!Ce) return;
    const o = Ce.getBoundingClientRect(), c = U((r - o.left) / Math.max(1, o.width), 0, 1), l = la(p.customPaintColor), h = { ...xc(c, l.s, l.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = fn(h), p.paintColor = fn(h), un();
  }, Cu = (r, o) => {
    const c = r.pointerId;
    o(r);
    const l = (m) => {
      m.pointerId === c && o(m);
    }, h = (m) => {
      m.pointerId === c && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  Oe && (Oe.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Cu(r, (o) => Zg(o.clientX, o.clientY));
  }), Ce && (Ce.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), Cu(r, (o) => Jg(o.clientX));
  }), Fe && (Fe.oninput = () => {
    const r = { ...p.customPaintColor, a: U(Number(Fe.value) / 100, 0, 1) };
    p.customPaintColor = fn(r), p.paintColor = fn(r), un();
  });
  const Iu = () => {
    if (!dt) return;
    const r = !!p.fullscreen;
    dt.innerHTML = r ? Et.fullscreen_close : Et.fullscreen, dt.setAttribute("aria-label", r ? "Exit Fullscreen" : "Fullscreen"), dt.setAttribute("data-tip", r ? "Exit fullscreen" : "Fullscreen");
  }, to = (r) => {
    const o = !!r;
    p.fullscreen !== o && (p.fullscreen = o, E.classList.toggle("pano-modal-fullscreen", o), o ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), Ys(), Iu(), ht());
  }, Eu = () => document.fullscreenElement === T, Qg = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        to(!p.fullscreen);
        return;
      }
      Eu() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = T.requestFullscreen) == null ? void 0 : r.call(T));
    } catch {
      to(!p.fullscreen);
    }
  }, Tu = () => {
    document.fullscreenEnabled && to(Eu());
  };
  document.addEventListener("fullscreenchange", Tu), dt && (Iu(), dt.onclick = (r) => {
    r.preventDefault(), r.stopPropagation(), Qg();
  });
  const Du = () => {
    if (!nt) return;
    const r = !!p.outputPreviewExpanded;
    nt.innerHTML = r ? Et.fullscreen_close : Et.fullscreen, nt.setAttribute("aria-label", r ? "Reduce Preview" : "Expand Preview"), nt.setAttribute("data-tip", r ? "Reduce preview" : "Expand preview");
  };
  nt && (Du(), nt.onclick = (r) => {
    r.preventDefault(), r.stopPropagation();
    const o = !p.outputPreviewExpanded;
    p.outputPreviewExpanded = o, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = o ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), Du(), ht();
  }), tt.addEventListener("click", (r) => {
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const c = o.getAttribute("data-action");
    if (!i) {
      if (c === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, zt(), ht();
        return;
      }
      if (c === "aspect-set") {
        const l = fe();
        if (!l) return;
        const h = String(o.getAttribute("data-aspect") || "1:1");
        Dg(l, h), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, zs(), re(), pe(), zt(), ht();
        return;
      }
      if (c === "rotate-90") {
        const l = fe();
        if (!l) return;
        Rg(l), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, zs(), re(), pe(), zt(), ht();
        return;
      }
      if (c === "bring-front") {
        Lg();
        return;
      }
      if (c === "send-back") {
        Og();
        return;
      }
      if (c === "duplicate") {
        Tg();
        return;
      }
      if (c === "replace-image") {
        Pg();
        return;
      }
      if (c === "toggle-lock") {
        op();
        return;
      }
      if (c === "back-initial") {
        pp();
        return;
      }
      if (c === "toggle-visible") {
        hp();
        return;
      }
      if (c === "delete") {
        pu();
        return;
      }
      ht();
    }
  });
  const Xs = t.onExecuted, Zs = t.onConnectionsChange;
  let Js = null, Qs = null, tc = null;
  !i && e === "stickers" && (tc = (r = "sync") => {
    Fl(r);
  }, t.__panoExternalStickerSync = tc, Js = function(...o) {
    var c;
    typeof Xs == "function" && Xs.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "executed");
  }, t.onExecuted = Js, Qs = function(...o) {
    var c;
    typeof Zs == "function" && Zs.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "connections");
  }, t.onConnectionsChange = Qs), i || (Bc.set(String(t.id ?? "0"), () => Is()), Ip() && Is());
  const li = () => {
    var r, o, c, l, h, m, w, y, v, N;
    p.cutoutPreviewSurfaceRaf && (cancelAnimationFrame(p.cutoutPreviewSurfaceRaf), p.cutoutPreviewSurfaceRaf = 0), p.cutoutPreviewSurfaceTimer && (clearTimeout(p.cutoutPreviewSurfaceTimer), p.cutoutPreviewSurfaceTimer = 0), Bc.delete(String(t.id ?? "0")), i || Is(), document.fullscreenElement === T && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Tu), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (c = (o = t.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || c.call(o), (h = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || h.call(l, !0, !0), (y = (w = (m = dn) == null ? void 0 : m.canvas) == null ? void 0 : w.setDirty) == null || y.call(w, !0, !0), Qa(), Mg(), (v = ct == null ? void 0 : ct.dispose) == null || v.call(ct), (N = Q == null ? void 0 : Q.dispose) == null || N.call(Q), _e(!1), window.removeEventListener("keydown", Ru, !0), window.removeEventListener("keydown", Lu, !0), window.removeEventListener("keydown", eo, !0), window.removeEventListener("keyup", eo, !0), window.removeEventListener("keydown", Ou, !0), window.removeEventListener("dragenter", xu, !0), window.removeEventListener("dragover", Su, !0), window.removeEventListener("dragleave", Nu, !0), window.removeEventListener("drop", Mu, !0), !i && e === "stickers" && (t.onExecuted === Js && (t.onExecuted = Xs), t.onConnectionsChange === Qs && (t.onConnectionsChange = Zs), t.__panoExternalStickerSync === tc && (t.__panoExternalStickerSync = null)), P.unmount(), M.remove();
  }, Ru = (r) => {
    var o, c, l, h;
    if (r.key === "Escape") {
      if (p.fullscreen && document.fullscreenElement === T) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (l = r.stopImmediatePropagation) == null || l.call(r), to(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (h = r.stopImmediatePropagation) == null || h.call(r), li();
    }
  }, Lu = (r) => {
    const o = String(r.key || ""), c = String(r.code || ""), l = Number(r.keyCode || 0);
    if (!(o === "Delete" || c === "Delete" || l === 46) && !(o === "Backspace" || c === "Backspace" || l === 8)) return;
    const w = r.target, y = ((w == null ? void 0 : w.tagName) || "").toUpperCase();
    y === "INPUT" || y === "TEXTAREA" || w != null && w.isContentEditable || !fe() || (pu(), r.preventDefault(), r.stopPropagation());
  }, eo = (r) => {
    const o = !!(r.ctrlKey || r.metaKey);
    p.marqueeModifier !== o && (p.marqueeModifier = o, ge(p.pointerPos));
  }, Ou = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), c = String(r.code || "");
    if (o !== "z" && c !== "KeyZ") return;
    const l = r.target, h = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: m, canRedo: w } = su();
    r.shiftKey && !w || !r.shiftKey && !m || (Yi(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", Ru, !0), window.addEventListener("keydown", Lu, !0), window.addEventListener("keydown", eo, !0), window.addEventListener("keyup", eo, !0), window.addEventListener("keydown", Ou, !0), T.addEventListener("pointerdown", (r) => {
    r.target === T && li();
  }), Xi(E), Sp(), !i && e === "stickers" && Fl("open"), Ag(), re(), Ks(), un(), Nt && requestAnimationFrame(() => {
    Nt.classList.add("is-ready");
  }), Bt(), ja(), ou(), ge(p.pointerPos), ht(), kt.rafId = requestAnimationFrame($s);
}
function nd(t, e, n, i) {
  if (!(t != null && t.prototype)) return;
  const a = (b) => {
    var _, d;
    try {
      (_ = b.__panoDomRestore) == null || _.call(b);
    } catch {
    }
    try {
      (d = b.__panoLegacyRestore) == null || d.call(b);
    } catch {
    }
    b.__panoDomPreview = null, b.__panoLegacyPreviewHooked = !1, b.__panoPreviewHooked = !1, b.__panoPreviewAttached = !1, b.__panoPreviewMountKey = null;
  };
  function s(b) {
    var T;
    const _ = `editor_btn|${n}`;
    if (b.__panoPreviewAttached === !0 && b.__panoPreviewMountKey === _) return;
    a(b), n === "PanoramaStickers" && Av(b), xl(b), Iv(b, ts);
    const M = gn(b, ts);
    if (M && !M.__panoPreviewPatchedCb) {
      M.__panoPreviewPatchedCb = !0;
      const E = M.callback;
      M.callback = (C) => {
        var A;
        const V = E ? E(C) : void 0;
        return (A = b.setDirtyCanvas) == null || A.call(b, !0, !1), V;
      };
    }
    const P = gn(b, "bg_color");
    if (P && (P.value == null || String(P.value).trim() === "" || String(P.value).toLowerCase() === "#000000") && (P.value = "#00ff00", (T = P.callback) == null || T.call(P, "#00ff00")), n === "PanoramaStickers") {
      Kc(b, i, () => Aa(b, "stickers"));
      {
        b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = _;
        return;
      }
    }
    Kc(b, i, () => Aa(b, "cutout")), Sb(b, {
      buttonText: i,
      onOpen: () => Aa(b, "cutout")
    }), (!Array.isArray(b.size) || b.size[0] < 10 || b.size[1] < 10) && (b.size = [360, 260]), b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = _;
  }
  const u = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const b = u ? u.apply(this, arguments) : void 0;
    return s(this), b;
  };
  const f = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const b = f ? f.apply(this, arguments) : void 0;
    return this.widgets && s(this), b;
  };
  const g = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const b = g ? g.apply(this, arguments) : void 0;
    return this.widgets && s(this), b;
  };
}
function jv(t) {
  if (!(t != null && t.prototype)) return;
  const e = function() {
    (!Array.isArray(this.size) || this.size[0] < 100 || this.size[1] < 100) && (this.size = [360, 260]);
  }, n = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const a = n ? n.apply(this, arguments) : void 0;
    return e.call(this), a;
  };
  const i = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const a = i ? i.apply(this, arguments) : void 0;
    return e.call(this), a;
  };
}
function Uv(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const i = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), a = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = a, !i && a < 40) {
      requestAnimationFrame(e);
      return;
    }
    xl(t), Kc(t, "Open Preview", () => Aa(t, "stickers", { readOnly: !0, hideSidebar: !1 })), xb(t, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (s) => Aa(s, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), t.__panoStandaloneInstallDone = !0, t.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(e);
}
dn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  async beforeQueuePrompt() {
    const t = [...Bc.values()].map((i) => {
      try {
        return typeof i == "function" ? i() : null;
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
    (n === "PanoramaStickers" || n === "Panorama Stickers") && nd(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && nd(t, e, "PanoramaCutout", "Open Cutout Editor"), Fc(n) && jv(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    xl(t), Fc(e) && Uv(t);
  }
});
