import * as Mo from "../../scripts/app.js";
import { app as pn } from "../../scripts/app.js";
import { api as Je } from "../../scripts/api.js";
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
const ie = {}, Mi = [], qn = () => {
}, rd = () => !1, ss = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), cs = (t) => t.startsWith("onUpdate:"), ze = Object.assign, Yc = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Qg = Object.prototype.hasOwnProperty, qt = (t, e) => Qg.call(t, e), Dt = Array.isArray, ki = (t) => La(t) === "[object Map]", id = (t) => La(t) === "[object Set]", Ru = (t) => La(t) === "[object Date]", Vt = (t) => typeof t == "function", we = (t) => typeof t == "string", Yn = (t) => typeof t == "symbol", Jt = (t) => t !== null && typeof t == "object", ad = (t) => (Jt(t) || Vt(t)) && Vt(t.then) && Vt(t.catch), od = Object.prototype.toString, La = (t) => od.call(t), t0 = (t) => La(t).slice(8, -1), sd = (t) => La(t) === "[object Object]", Xc = (t) => we(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, pa = /* @__PURE__ */ qc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ls = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, e0 = /-\w/g, tn = ls(
  (t) => t.replace(e0, (e) => e.slice(1).toUpperCase())
), n0 = /\B([A-Z])/g, Jr = ls(
  (t) => t.replace(n0, "-$1").toLowerCase()
), us = ls((t) => t.charAt(0).toUpperCase() + t.slice(1)), nc = ls(
  (t) => t ? `on${us(t)}` : ""
), Gn = (t, e) => !Object.is(t, e), rc = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, cd = (t, e, n, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, r0 = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Ou;
const fs = () => Ou || (Ou = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ds(t) {
  if (Dt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], a = we(r) ? s0(r) : ds(r);
      if (a)
        for (const s in a)
          e[s] = a[s];
    }
    return e;
  } else if (we(t) || Jt(t))
    return t;
}
const i0 = /;(?![^(]*\))/g, a0 = /:([^]+)/, o0 = /\/\*[^]*?\*\//g;
function s0(t) {
  const e = {};
  return t.replace(o0, "").split(i0).forEach((n) => {
    if (n) {
      const r = n.split(a0);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function hs(t) {
  let e = "";
  if (we(t))
    e = t;
  else if (Dt(t))
    for (let n = 0; n < t.length; n++) {
      const r = hs(t[n]);
      r && (e += r + " ");
    }
  else if (Jt(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const c0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", l0 = /* @__PURE__ */ qc(c0);
function ld(t) {
  return !!t || t === "";
}
function u0(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = Zc(t[r], e[r]);
  return n;
}
function Zc(t, e) {
  if (t === e) return !0;
  let n = Ru(t), r = Ru(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Yn(t), r = Yn(e), n || r)
    return t === e;
  if (n = Dt(t), r = Dt(e), n || r)
    return n && r ? u0(t, e) : !1;
  if (n = Jt(t), r = Jt(e), n || r) {
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
const ud = (t) => !!(t && t.__v_isRef === !0), fd = (t) => we(t) ? t : t == null ? "" : Dt(t) || Jt(t) && (t.toString === od || !Vt(t.toString)) ? ud(t) ? fd(t.value) : JSON.stringify(t, dd, 2) : String(t), dd = (t, e) => ud(e) ? dd(t, e.value) : ki(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, a], s) => (n[ic(r, s) + " =>"] = a, n),
    {}
  )
} : id(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => ic(n))
} : Yn(e) ? ic(e) : Jt(e) && !Dt(e) && !sd(e) ? String(e) : e, ic = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Yn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let an;
class f0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = an, !e && an && (this.index = (an.scopes || (an.scopes = [])).push(
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
      const n = an;
      try {
        return an = this, e();
      } finally {
        an = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = an, an = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (an = this.prevScope, this.prevScope = void 0);
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
function d0() {
  return an;
}
let re;
const ac = /* @__PURE__ */ new WeakSet();
class hd {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, an && an.active && an.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ac.has(this) && (ac.delete(this), this.trigger()));
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
    this.flags |= 2, Fu(this), md(this);
    const e = re, n = Pn;
    re = this, Pn = !0;
    try {
      return this.fn();
    } finally {
      yd(this), re = e, Pn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        tl(e);
      this.deps = this.depsTail = void 0, Fu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ac.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
let pd = 0, ga, ma;
function gd(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = ma, ma = t;
    return;
  }
  t.next = ga, ga = t;
}
function Jc() {
  pd++;
}
function Qc() {
  if (--pd > 0)
    return;
  if (ma) {
    let e = ma;
    for (ma = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; ga; ) {
    let e = ga;
    for (ga = void 0; e; ) {
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
function md(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function yd(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), tl(r), h0(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
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
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Pa) || (t.globalVersion = Pa, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Mc(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = re, r = Pn;
  re = t, Pn = !0;
  try {
    md(t);
    const a = t.fn(t._value);
    (e.version === 0 || Gn(a, t._value)) && (t.flags |= 128, t._value = a, e.version++);
  } catch (a) {
    throw e.version++, a;
  } finally {
    re = n, Pn = r, yd(t), t.flags &= -3;
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
function h0(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let Pn = !0;
const vd = [];
function ur() {
  vd.push(Pn), Pn = !1;
}
function fr() {
  const t = vd.pop();
  Pn = t === void 0 ? !0 : t;
}
function Fu(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const n = re;
    re = void 0;
    try {
      e();
    } finally {
      re = n;
    }
  }
}
let Pa = 0;
class p0 {
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
    if (!re || !Pn || re === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== re)
      n = this.activeLink = new p0(re, this), re.deps ? (n.prevDep = re.depsTail, re.depsTail.nextDep = n, re.depsTail = n) : re.deps = re.depsTail = n, _d(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = re.depsTail, n.nextDep = void 0, re.depsTail.nextDep = n, re.depsTail = n, re.deps === n && (re.deps = r);
    }
    return n;
  }
  trigger(e) {
    this.version++, Pa++, this.notify(e);
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
      for (let r = e.deps; r; r = r.nextDep)
        _d(r);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
  }
}
const kc = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ Symbol(
  ""
), Pc = /* @__PURE__ */ Symbol(
  ""
), Aa = /* @__PURE__ */ Symbol(
  ""
);
function Fe(t, e, n) {
  if (Pn && re) {
    let r = kc.get(t);
    r || kc.set(t, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new el()), a.map = r, a.key = n), a.track();
  }
}
function lr(t, e, n, r, a, s) {
  const u = kc.get(t);
  if (!u) {
    Pa++;
    return;
  }
  const f = (g) => {
    g && g.trigger();
  };
  if (Jc(), e === "clear")
    u.forEach(f);
  else {
    const g = Dt(t), y = g && Xc(n);
    if (g && n === "length") {
      const v = Number(r);
      u.forEach((d, M) => {
        (M === "length" || M === Aa || !Yn(M) && M >= v) && f(d);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), y && f(u.get(Aa)), e) {
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
  const e = /* @__PURE__ */ Wt(t);
  return e === t ? e : (Fe(e, "iterate", Aa), /* @__PURE__ */ gn(t) ? e : e.map(An));
}
function ps(t) {
  return Fe(t = /* @__PURE__ */ Wt(t), "iterate", Aa), t;
}
function Un(t, e) {
  return /* @__PURE__ */ dr(t) ? Di(/* @__PURE__ */ Br(t) ? An(e) : e) : An(e);
}
const g0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return oc(this, Symbol.iterator, (t) => Un(this, t));
  },
  concat(...t) {
    return hi(this).concat(
      ...t.map((e) => Dt(e) ? hi(e) : e)
    );
  },
  entries() {
    return oc(this, "entries", (t) => (t[1] = Un(this, t[1]), t));
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
      (n) => n.map((r) => Un(this, r)),
      arguments
    );
  },
  find(t, e) {
    return rr(
      this,
      "find",
      t,
      e,
      (n) => Un(this, n),
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
      (n) => Un(this, n),
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
    return sc(this, "includes", t);
  },
  indexOf(...t) {
    return sc(this, "indexOf", t);
  },
  join(t) {
    return hi(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return sc(this, "lastIndexOf", t);
  },
  map(t, e) {
    return rr(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return ea(this, "pop");
  },
  push(...t) {
    return ea(this, "push", t);
  },
  reduce(t, ...e) {
    return Vu(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Vu(this, "reduceRight", t, e);
  },
  shift() {
    return ea(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return rr(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return ea(this, "splice", t);
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
    return ea(this, "unshift", t);
  },
  values() {
    return oc(this, "values", (t) => Un(this, t));
  }
};
function oc(t, e, n) {
  const r = ps(t), a = r[e]();
  return r !== t && !/* @__PURE__ */ gn(t) && (a._next = a.next, a.next = () => {
    const s = a._next();
    return s.done || (s.value = n(s.value)), s;
  }), a;
}
const m0 = Array.prototype;
function rr(t, e, n, r, a, s) {
  const u = ps(t), f = u !== t && !/* @__PURE__ */ gn(t), g = u[e];
  if (g !== m0[e]) {
    const d = g.apply(t, s);
    return f ? An(d) : d;
  }
  let y = n;
  u !== t && (f ? y = function(d, M) {
    return n.call(this, Un(t, d), M, t);
  } : n.length > 2 && (y = function(d, M) {
    return n.call(this, d, M, t);
  }));
  const v = g.call(u, y, r);
  return f && a ? a(v) : v;
}
function Vu(t, e, n, r) {
  const a = ps(t), s = a !== t && !/* @__PURE__ */ gn(t);
  let u = n, f = !1;
  a !== t && (s ? (f = r.length === 0, u = function(y, v, d) {
    return f && (f = !1, y = Un(t, y)), n.call(this, y, Un(t, v), d, t);
  }) : n.length > 3 && (u = function(y, v, d) {
    return n.call(this, y, v, d, t);
  }));
  const g = a[e](u, ...r);
  return f ? Un(t, g) : g;
}
function sc(t, e, n) {
  const r = /* @__PURE__ */ Wt(t);
  Fe(r, "iterate", Aa);
  const a = r[e](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ al(n[0]) ? (n[0] = /* @__PURE__ */ Wt(n[0]), r[e](...n)) : a;
}
function ea(t, e, n = []) {
  ur(), Jc();
  const r = (/* @__PURE__ */ Wt(t))[e].apply(t, n);
  return Qc(), fr(), r;
}
const y0 = /* @__PURE__ */ qc("__proto__,__v_isRef,__isVue"), xd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Yn)
);
function b0(t) {
  Yn(t) || (t = String(t));
  const e = /* @__PURE__ */ Wt(this);
  return Fe(e, "has", t), e.hasOwnProperty(t);
}
class wd {
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
      return r === (a ? s ? A0 : kd : s ? Md : Nd).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const u = Dt(e);
    if (!a) {
      let g;
      if (u && (g = g0[n]))
        return g;
      if (n === "hasOwnProperty")
        return b0;
    }
    const f = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ $e(e) ? e : r
    );
    if ((Yn(n) ? xd.has(n) : y0(n)) || (a || Fe(e, "get", n), s))
      return f;
    if (/* @__PURE__ */ $e(f)) {
      const g = u && Xc(n) ? f : f.value;
      return a && Jt(g) ? /* @__PURE__ */ Cc(g) : g;
    }
    return Jt(f) ? a ? /* @__PURE__ */ Cc(f) : /* @__PURE__ */ rl(f) : f;
  }
}
class Sd extends wd {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, a) {
    let s = e[n];
    const u = Dt(e) && Xc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ dr(s);
      if (!/* @__PURE__ */ gn(r) && !/* @__PURE__ */ dr(r) && (s = /* @__PURE__ */ Wt(s), r = /* @__PURE__ */ Wt(r)), !u && /* @__PURE__ */ $e(s) && !/* @__PURE__ */ $e(r))
        return y || (s.value = r), !0;
    }
    const f = u ? Number(n) < e.length : qt(e, n), g = Reflect.set(
      e,
      n,
      r,
      /* @__PURE__ */ $e(e) ? e : a
    );
    return e === /* @__PURE__ */ Wt(a) && (f ? Gn(r, s) && lr(e, "set", n, r) : lr(e, "add", n, r)), g;
  }
  deleteProperty(e, n) {
    const r = qt(e, n);
    e[n];
    const a = Reflect.deleteProperty(e, n);
    return a && r && lr(e, "delete", n, void 0), a;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Yn(n) || !xd.has(n)) && Fe(e, "has", n), r;
  }
  ownKeys(e) {
    return Fe(
      e,
      "iterate",
      Dt(e) ? "length" : Ur
    ), Reflect.ownKeys(e);
  }
}
class v0 extends wd {
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
const _0 = /* @__PURE__ */ new Sd(), x0 = /* @__PURE__ */ new v0(), w0 = /* @__PURE__ */ new Sd(!0);
const Ac = (t) => t, io = (t) => Reflect.getPrototypeOf(t);
function S0(t, e, n) {
  return function(...r) {
    const a = this.__v_raw, s = /* @__PURE__ */ Wt(a), u = ki(s), f = t === "entries" || t === Symbol.iterator && u, g = t === "keys" && u, y = a[t](...r), v = n ? Ac : e ? Di : An;
    return !e && Fe(
      s,
      "iterate",
      g ? Pc : Ur
    ), ze(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: d, done: M } = y.next();
          return M ? { value: d, done: M } : {
            value: f ? [v(d[0]), v(d[1])] : v(d),
            done: M
          };
        }
      }
    );
  };
}
function ao(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function N0(t, e) {
  const n = {
    get(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ Wt(s), f = /* @__PURE__ */ Wt(a);
      t || (Gn(a, f) && Fe(u, "get", a), Fe(u, "get", f));
      const { has: g } = io(u), y = e ? Ac : t ? Di : An;
      if (g.call(u, a))
        return y(s.get(a));
      if (g.call(u, f))
        return y(s.get(f));
      s !== u && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !t && Fe(/* @__PURE__ */ Wt(a), "iterate", Ur), a.size;
    },
    has(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ Wt(s), f = /* @__PURE__ */ Wt(a);
      return t || (Gn(a, f) && Fe(u, "has", a), Fe(u, "has", f)), a === f ? s.has(a) : s.has(a) || s.has(f);
    },
    forEach(a, s) {
      const u = this, f = u.__v_raw, g = /* @__PURE__ */ Wt(f), y = e ? Ac : t ? Di : An;
      return !t && Fe(g, "iterate", Ur), f.forEach((v, d) => a.call(s, y(v), y(d), u));
    }
  };
  return ze(
    n,
    t ? {
      add: ao("add"),
      set: ao("set"),
      delete: ao("delete"),
      clear: ao("clear")
    } : {
      add(a) {
        const s = /* @__PURE__ */ Wt(this), u = io(s), f = /* @__PURE__ */ Wt(a), g = !e && !/* @__PURE__ */ gn(a) && !/* @__PURE__ */ dr(a) ? f : a;
        return u.has.call(s, g) || Gn(a, g) && u.has.call(s, a) || Gn(f, g) && u.has.call(s, f) || (s.add(g), lr(s, "add", g, g)), this;
      },
      set(a, s) {
        !e && !/* @__PURE__ */ gn(s) && !/* @__PURE__ */ dr(s) && (s = /* @__PURE__ */ Wt(s));
        const u = /* @__PURE__ */ Wt(this), { has: f, get: g } = io(u);
        let y = f.call(u, a);
        y || (a = /* @__PURE__ */ Wt(a), y = f.call(u, a));
        const v = g.call(u, a);
        return u.set(a, s), y ? Gn(s, v) && lr(u, "set", a, s) : lr(u, "add", a, s), this;
      },
      delete(a) {
        const s = /* @__PURE__ */ Wt(this), { has: u, get: f } = io(s);
        let g = u.call(s, a);
        g || (a = /* @__PURE__ */ Wt(a), g = u.call(s, a)), f && f.call(s, a);
        const y = s.delete(a);
        return g && lr(s, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ Wt(this), s = a.size !== 0, u = a.clear();
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
    n[a] = S0(a, t, e);
  }), n;
}
function nl(t, e) {
  const n = N0(t, e);
  return (r, a, s) => a === "__v_isReactive" ? !t : a === "__v_isReadonly" ? t : a === "__v_raw" ? r : Reflect.get(
    qt(n, a) && a in r ? n : r,
    a,
    s
  );
}
const M0 = {
  get: /* @__PURE__ */ nl(!1, !1)
}, k0 = {
  get: /* @__PURE__ */ nl(!1, !0)
}, P0 = {
  get: /* @__PURE__ */ nl(!0, !1)
};
const Nd = /* @__PURE__ */ new WeakMap(), Md = /* @__PURE__ */ new WeakMap(), kd = /* @__PURE__ */ new WeakMap(), A0 = /* @__PURE__ */ new WeakMap();
function C0(t) {
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
function I0(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : C0(t0(t));
}
// @__NO_SIDE_EFFECTS__
function rl(t) {
  return /* @__PURE__ */ dr(t) ? t : il(
    t,
    !1,
    _0,
    M0,
    Nd
  );
}
// @__NO_SIDE_EFFECTS__
function E0(t) {
  return il(
    t,
    !1,
    w0,
    k0,
    Md
  );
}
// @__NO_SIDE_EFFECTS__
function Cc(t) {
  return il(
    t,
    !0,
    x0,
    P0,
    kd
  );
}
function il(t, e, n, r, a) {
  if (!Jt(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = I0(t);
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
function gn(t) {
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
function T0(t) {
  return !qt(t, "__v_skip") && Object.isExtensible(t) && cd(t, "__v_skip", !0), t;
}
const An = (t) => Jt(t) ? /* @__PURE__ */ rl(t) : t, Di = (t) => Jt(t) ? /* @__PURE__ */ Cc(t) : t;
// @__NO_SIDE_EFFECTS__
function $e(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function D0(t) {
  return L0(t, !1);
}
function L0(t, e) {
  return /* @__PURE__ */ $e(t) ? t : new R0(t, e);
}
class R0 {
  constructor(e, n) {
    this.dep = new el(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ Wt(e), this._value = n ? e : An(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ gn(e) || /* @__PURE__ */ dr(e);
    e = r ? e : /* @__PURE__ */ Wt(e), Gn(e, n) && (this._rawValue = e, this._value = r ? e : An(e), this.dep.trigger());
  }
}
function ol(t) {
  return /* @__PURE__ */ $e(t) ? t.value : t;
}
const O0 = {
  get: (t, e, n) => e === "__v_raw" ? t : ol(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const a = t[e];
    return /* @__PURE__ */ $e(a) && !/* @__PURE__ */ $e(n) ? (a.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function Pd(t) {
  return /* @__PURE__ */ Br(t) ? t : new Proxy(t, O0);
}
class F0 {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new el(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Pa - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    re !== this)
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
function V0(t, e, n = !1) {
  let r, a;
  return Vt(t) ? r = t : (r = t.get, a = t.set), new F0(r, a, n);
}
const oo = {}, $o = /* @__PURE__ */ new WeakMap();
let Vr;
function H0(t, e = !1, n = Vr) {
  if (n) {
    let r = $o.get(n);
    r || $o.set(n, r = []), r.push(t);
  }
}
function $0(t, e, n = ie) {
  const { immediate: r, deep: a, once: s, scheduler: u, augmentJob: f, call: g } = n, y = (R) => a ? R : /* @__PURE__ */ gn(R) || a === !1 || a === 0 ? Pr(R, 1) : Pr(R);
  let v, d, M, P, T = !1, I = !1;
  if (/* @__PURE__ */ $e(t) ? (d = () => t.value, T = /* @__PURE__ */ gn(t)) : /* @__PURE__ */ Br(t) ? (d = () => y(t), T = !0) : Dt(t) ? (I = !0, T = t.some((R) => /* @__PURE__ */ Br(R) || /* @__PURE__ */ gn(R)), d = () => t.map((R) => {
    if (/* @__PURE__ */ $e(R))
      return R.value;
    if (/* @__PURE__ */ Br(R))
      return y(R);
    if (Vt(R))
      return g ? g(R, 2) : R();
  })) : Vt(t) ? e ? d = g ? () => g(t, 2) : t : d = () => {
    if (M) {
      ur();
      try {
        M();
      } finally {
        fr();
      }
    }
    const R = Vr;
    Vr = v;
    try {
      return g ? g(t, 3, [P]) : t(P);
    } finally {
      Vr = R;
    }
  } : d = qn, e && a) {
    const R = d, K = a === !0 ? 1 / 0 : a;
    d = () => Pr(R(), K);
  }
  const C = d0(), F = () => {
    v.stop(), C && C.active && Yc(C.effects, v);
  };
  if (s && e) {
    const R = e;
    e = (...K) => {
      R(...K), F();
    };
  }
  let A = I ? new Array(t.length).fill(oo) : oo;
  const V = (R) => {
    if (!(!(v.flags & 1) || !v.dirty && !R))
      if (e) {
        const K = v.run();
        if (a || T || (I ? K.some((E, ct) => Gn(E, A[ct])) : Gn(K, A))) {
          M && M();
          const E = Vr;
          Vr = v;
          try {
            const ct = [
              K,
              // pass undefined as the old value when it's changed for the first time
              A === oo ? void 0 : I && A[0] === oo ? [] : A,
              P
            ];
            A = K, g ? g(e, 3, ct) : (
              // @ts-expect-error
              e(...ct)
            );
          } finally {
            Vr = E;
          }
        }
      } else
        v.run();
  };
  return f && f(V), v = new hd(d), v.scheduler = u ? () => u(V, !1) : V, P = (R) => H0(R, !1, v), M = v.onStop = () => {
    const R = $o.get(v);
    if (R) {
      if (g)
        g(R, 4);
      else
        for (const K of R) K();
      $o.delete(v);
    }
  }, e ? r ? V(!0) : A = v.run() : u ? u(V.bind(null, !0), !0) : v.run(), F.pause = v.pause.bind(v), F.resume = v.resume.bind(v), F.stop = F, F;
}
function Pr(t, e = 1 / 0, n) {
  if (e <= 0 || !Jt(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ $e(t))
    Pr(t.value, e, n);
  else if (Dt(t))
    for (let r = 0; r < t.length; r++)
      Pr(t[r], e, n);
  else if (id(t) || ki(t))
    t.forEach((r) => {
      Pr(r, e, n);
    });
  else if (sd(t)) {
    for (const r in t)
      Pr(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && Pr(t[r], e, n);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ra(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (a) {
    gs(a, e, n);
  }
}
function Xn(t, e, n, r) {
  if (Vt(t)) {
    const a = Ra(t, e, n, r);
    return a && ad(a) && a.catch((s) => {
      gs(s, e, n);
    }), a;
  }
  if (Dt(t)) {
    const a = [];
    for (let s = 0; s < t.length; s++)
      a.push(Xn(t[s], e, n, r));
    return a;
  }
}
function gs(t, e, n, r = !0) {
  const a = e ? e.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: u } = e && e.appContext.config || ie;
  if (e) {
    let f = e.parent;
    const g = e.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const v = f.ec;
      if (v) {
        for (let d = 0; d < v.length; d++)
          if (v[d](t, g, y) === !1)
            return;
      }
      f = f.parent;
    }
    if (s) {
      ur(), Ra(s, null, 10, [
        t,
        g,
        y
      ]), fr();
      return;
    }
  }
  z0(t, n, a, r, u);
}
function z0(t, e, n, r = !0, a = !1) {
  if (a)
    throw t;
  console.error(t);
}
const Ze = [];
let zn = -1;
const Pi = [];
let kr = null, vi = 0;
const Ad = /* @__PURE__ */ Promise.resolve();
let zo = null;
function Cd(t) {
  const e = zo || Ad;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function j0(t) {
  let e = zn + 1, n = Ze.length;
  for (; e < n; ) {
    const r = e + n >>> 1, a = Ze[r], s = Ca(a);
    s < t || s === t && a.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function sl(t) {
  if (!(t.flags & 1)) {
    const e = Ca(t), n = Ze[Ze.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Ca(n) ? Ze.push(t) : Ze.splice(j0(e), 0, t), t.flags |= 1, Id();
  }
}
function Id() {
  zo || (zo = Ad.then(Td));
}
function U0(t) {
  Dt(t) ? Pi.push(...t) : kr && t.id === -1 ? kr.splice(vi + 1, 0, t) : t.flags & 1 || (Pi.push(t), t.flags |= 1), Id();
}
function Hu(t, e, n = zn + 1) {
  for (; n < Ze.length; n++) {
    const r = Ze[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid)
        continue;
      Ze.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ed(t) {
  if (Pi.length) {
    const e = [...new Set(Pi)].sort(
      (n, r) => Ca(n) - Ca(r)
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
const Ca = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Td(t) {
  try {
    for (zn = 0; zn < Ze.length; zn++) {
      const e = Ze[zn];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Ra(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; zn < Ze.length; zn++) {
      const e = Ze[zn];
      e && (e.flags &= -2);
    }
    zn = -1, Ze.length = 0, Ed(), zo = null, (Ze.length || Pi.length) && Td();
  }
}
let kn = null, Dd = null;
function jo(t) {
  const e = kn;
  return kn = t, Dd = t && t.type.__scopeId || null, e;
}
function B0(t, e = kn, n) {
  if (!e || t._n)
    return t;
  const r = (...a) => {
    r._d && Zu(-1);
    const s = jo(e);
    let u;
    try {
      u = t(...a);
    } finally {
      jo(s), r._d && Zu(1);
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
    g && (ur(), Xn(g, n, 8, [
      t.el,
      f,
      t,
      e
    ]), fr());
  }
}
function G0(t, e) {
  if (He) {
    let n = He.provides;
    const r = He.parent && He.parent.provides;
    r === n && (n = He.provides = Object.create(r)), n[t] = e;
  }
}
function ko(t, e, n = !1) {
  const r = Bm();
  if (r || Ci) {
    let a = Ci ? Ci._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && t in a)
      return a[t];
    if (arguments.length > 1)
      return n && Vt(e) ? e.call(r && r.proxy) : e;
  }
}
const K0 = /* @__PURE__ */ Symbol.for("v-scx"), W0 = () => ko(K0);
function Po(t, e, n) {
  return Ld(t, e, n);
}
function Ld(t, e, n = ie) {
  const { immediate: r, deep: a, flush: s, once: u } = n, f = ze({}, n), g = e && r || !e && s !== "post";
  let y;
  if (Ea) {
    if (s === "sync") {
      const P = W0();
      y = P.__watcherHandles || (P.__watcherHandles = []);
    } else if (!g) {
      const P = () => {
      };
      return P.stop = qn, P.resume = qn, P.pause = qn, P;
    }
  }
  const v = He;
  f.call = (P, T, I) => Xn(P, v, T, I);
  let d = !1;
  s === "post" ? f.scheduler = (P) => {
    rn(P, v && v.suspense);
  } : s !== "sync" && (d = !0, f.scheduler = (P, T) => {
    T ? P() : sl(P);
  }), f.augmentJob = (P) => {
    e && (P.flags |= 4), d && (P.flags |= 2, v && (P.id = v.uid, P.i = v));
  };
  const M = $0(t, e, f);
  return Ea && (y ? y.push(M) : g && M()), M;
}
function q0(t, e, n) {
  const r = this.proxy, a = we(t) ? t.includes(".") ? Rd(r, t) : () => r[t] : t.bind(r, r);
  let s;
  Vt(e) ? s = e : (s = e.handler, n = e);
  const u = Oa(this), f = Ld(a, s.bind(r), n);
  return u(), f;
}
function Rd(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const Y0 = /* @__PURE__ */ Symbol("_vte"), X0 = (t) => t.__isTeleport, Z0 = /* @__PURE__ */ Symbol("_leaveCb");
function cl(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, cl(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Od(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function $u(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const Uo = /* @__PURE__ */ new WeakMap();
function ya(t, e, n, r, a = !1) {
  if (Dt(t)) {
    t.forEach(
      (I, C) => ya(
        I,
        e && (Dt(e) ? e[C] : e),
        n,
        r,
        a
      )
    );
    return;
  }
  if (ba(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ya(t, e, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? dl(r.component) : r.el, u = a ? null : s, { i: f, r: g } = t, y = e && e.r, v = f.refs === ie ? f.refs = {} : f.refs, d = f.setupState, M = /* @__PURE__ */ Wt(d), P = d === ie ? rd : (I) => $u(v, I) ? !1 : qt(M, I), T = (I, C) => !(C && $u(v, C));
  if (y != null && y !== g) {
    if (zu(e), we(y))
      v[y] = null, P(y) && (d[y] = null);
    else if (/* @__PURE__ */ $e(y)) {
      const I = e;
      T(y, I.k) && (y.value = null), I.k && (v[I.k] = null);
    }
  }
  if (Vt(g))
    Ra(g, f, 12, [u, v]);
  else {
    const I = we(g), C = /* @__PURE__ */ $e(g);
    if (I || C) {
      const F = () => {
        if (t.f) {
          const A = I ? P(g) ? d[g] : v[g] : T() || !t.k ? g.value : v[t.k];
          if (a)
            Dt(A) && Yc(A, s);
          else if (Dt(A))
            A.includes(s) || A.push(s);
          else if (I)
            v[g] = [s], P(g) && (d[g] = v[g]);
          else {
            const V = [s];
            T(g, t.k) && (g.value = V), t.k && (v[t.k] = V);
          }
        } else I ? (v[g] = u, P(g) && (d[g] = u)) : C && (T(g, t.k) && (g.value = u), t.k && (v[t.k] = u));
      };
      if (u) {
        const A = () => {
          F(), Uo.delete(t);
        };
        A.id = -1, Uo.set(t, A), rn(A, n);
      } else
        zu(t), F();
    }
  }
}
function zu(t) {
  const e = Uo.get(t);
  e && (e.flags |= 8, Uo.delete(t));
}
fs().requestIdleCallback;
fs().cancelIdleCallback;
const ba = (t) => !!t.type.__asyncLoader, Fd = (t) => t.type.__isKeepAlive;
function J0(t, e) {
  Vd(t, "a", e);
}
function Q0(t, e) {
  Vd(t, "da", e);
}
function Vd(t, e, n = He) {
  const r = t.__wdc || (t.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return t();
  });
  if (ms(e, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Fd(a.parent.vnode) && tm(r, e, n, a), a = a.parent;
  }
}
function tm(t, e, n, r) {
  const a = ms(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  zd(() => {
    Yc(r[e], a);
  }, n);
}
function ms(t, e, n = He, r = !1) {
  if (n) {
    const a = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...u) => {
      ur();
      const f = Oa(n), g = Xn(e, n, t, u);
      return f(), fr(), g;
    });
    return r ? a.unshift(s) : a.push(s), s;
  }
}
const hr = (t) => (e, n = He) => {
  (!Ea || t === "sp") && ms(t, (...r) => e(...r), n);
}, em = hr("bm"), Hd = hr("m"), nm = hr(
  "bu"
), rm = hr("u"), $d = hr(
  "bum"
), zd = hr("um"), im = hr(
  "sp"
), am = hr("rtg"), om = hr("rtc");
function sm(t, e = He) {
  ms("ec", t, e);
}
const cm = "components", jd = /* @__PURE__ */ Symbol.for("v-ndc");
function lm(t) {
  return we(t) ? um(cm, t, !1) || t : t || jd;
}
function um(t, e, n = !0, r = !1) {
  const a = kn || He;
  if (a) {
    const s = a.type;
    {
      const f = Ym(
        s,
        !1
      );
      if (f && (f === e || f === tn(e) || f === us(tn(e))))
        return s;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      ju(a[t] || s[t], e) || // global registration
      ju(a.appContext[t], e)
    );
    return !u && r ? s : u;
  }
}
function ju(t, e) {
  return t && (t[e] || t[tn(e)] || t[us(tn(e))]);
}
function Ai(t, e, n, r) {
  let a;
  const s = n, u = Dt(t);
  if (u || we(t)) {
    const f = u && /* @__PURE__ */ Br(t);
    let g = !1, y = !1;
    f && (g = !/* @__PURE__ */ gn(t), y = /* @__PURE__ */ dr(t), t = ps(t)), a = new Array(t.length);
    for (let v = 0, d = t.length; v < d; v++)
      a[v] = e(
        g ? y ? Di(An(t[v])) : An(t[v]) : t[v],
        v,
        void 0,
        s
      );
  } else if (typeof t == "number") {
    a = new Array(t);
    for (let f = 0; f < t; f++)
      a[f] = e(f + 1, f, void 0, s);
  } else if (Jt(t))
    if (t[Symbol.iterator])
      a = Array.from(
        t,
        (f, g) => e(f, g, void 0, s)
      );
    else {
      const f = Object.keys(t);
      a = new Array(f.length);
      for (let g = 0, y = f.length; g < y; g++) {
        const v = f[g];
        a[g] = e(t[v], v, g, s);
      }
    }
  else
    a = [];
  return a;
}
const Ic = (t) => t ? fh(t) ? dl(t) : Ic(t.parent) : null, va = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ze(/* @__PURE__ */ Object.create(null), {
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
    $watch: (t) => q0.bind(t)
  })
), cc = (t, e) => t !== ie && !t.__isScriptSetup && qt(t, e), fm = {
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
        if (cc(r, e))
          return u[e] = 1, r[e];
        if (a !== ie && qt(a, e))
          return u[e] = 2, a[e];
        if (qt(s, e))
          return u[e] = 3, s[e];
        if (n !== ie && qt(n, e))
          return u[e] = 4, n[e];
        Ec && (u[e] = 0);
      }
    }
    const y = va[e];
    let v, d;
    if (y)
      return e === "$attrs" && Fe(t.attrs, "get", ""), y(t);
    if (
      // css module (injected by vue-loader)
      (v = f.__cssModules) && (v = v[e])
    )
      return v;
    if (n !== ie && qt(n, e))
      return u[e] = 4, n[e];
    if (
      // global properties
      d = g.config.globalProperties, qt(d, e)
    )
      return d[e];
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: a, ctx: s } = t;
    return cc(a, e) ? (a[e] = n, !0) : r !== ie && qt(r, e) ? (r[e] = n, !0) : qt(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: a, props: s, type: u }
  }, f) {
    let g;
    return !!(n[f] || t !== ie && f[0] !== "$" && qt(t, f) || cc(e, f) || qt(s, f) || qt(r, f) || qt(va, f) || qt(a.config.globalProperties, f) || (g = u.__cssModules) && g[f]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : qt(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Uu(t) {
  return Dt(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Ec = !0;
function dm(t) {
  const e = Bd(t), n = t.proxy, r = t.ctx;
  Ec = !1, e.beforeCreate && Bu(e.beforeCreate, t, "bc");
  const {
    // state
    data: a,
    computed: s,
    methods: u,
    watch: f,
    provide: g,
    inject: y,
    // lifecycle
    created: v,
    beforeMount: d,
    mounted: M,
    beforeUpdate: P,
    updated: T,
    activated: I,
    deactivated: C,
    beforeDestroy: F,
    beforeUnmount: A,
    destroyed: V,
    unmounted: R,
    render: K,
    renderTracked: E,
    renderTriggered: ct,
    errorCaptured: J,
    serverPrefetch: xt,
    // public API
    expose: $,
    inheritAttrs: at,
    // assets
    components: Q,
    directives: wt,
    filters: lt
  } = e;
  if (y && hm(y, r, null), u)
    for (const it in u) {
      const j = u[it];
      Vt(j) && (r[it] = j.bind(n));
    }
  if (a) {
    const it = a.call(n, n);
    Jt(it) && (t.data = /* @__PURE__ */ rl(it));
  }
  if (Ec = !0, s)
    for (const it in s) {
      const j = s[it], ot = Vt(j) ? j.bind(n, n) : Vt(j.get) ? j.get.bind(n, n) : qn, Nt = !Vt(j) && Vt(j.set) ? j.set.bind(n) : qn, At = Ii({
        get: ot,
        set: Nt
      });
      Object.defineProperty(r, it, {
        enumerable: !0,
        configurable: !0,
        get: () => At.value,
        set: (Mt) => At.value = Mt
      });
    }
  if (f)
    for (const it in f)
      Ud(f[it], r, n, it);
  if (g) {
    const it = Vt(g) ? g.call(n) : g;
    Reflect.ownKeys(it).forEach((j) => {
      G0(j, it[j]);
    });
  }
  v && Bu(v, t, "c");
  function nt(it, j) {
    Dt(j) ? j.forEach((ot) => it(ot.bind(n))) : j && it(j.bind(n));
  }
  if (nt(em, d), nt(Hd, M), nt(nm, P), nt(rm, T), nt(J0, I), nt(Q0, C), nt(sm, J), nt(om, E), nt(am, ct), nt($d, A), nt(zd, R), nt(im, xt), Dt($))
    if ($.length) {
      const it = t.exposed || (t.exposed = {});
      $.forEach((j) => {
        Object.defineProperty(it, j, {
          get: () => n[j],
          set: (ot) => n[j] = ot,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  K && t.render === qn && (t.render = K), at != null && (t.inheritAttrs = at), Q && (t.components = Q), wt && (t.directives = wt), xt && Od(t);
}
function hm(t, e, n = qn) {
  Dt(t) && (t = Tc(t));
  for (const r in t) {
    const a = t[r];
    let s;
    Jt(a) ? "default" in a ? s = ko(
      a.from || r,
      a.default,
      !0
    ) : s = ko(a.from || r) : s = ko(a), /* @__PURE__ */ $e(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (u) => s.value = u
    }) : e[r] = s;
  }
}
function Bu(t, e, n) {
  Xn(
    Dt(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Ud(t, e, n, r) {
  let a = r.includes(".") ? Rd(n, r) : () => n[r];
  if (we(t)) {
    const s = e[t];
    Vt(s) && Po(a, s);
  } else if (Vt(t))
    Po(a, t.bind(n));
  else if (Jt(t))
    if (Dt(t))
      t.forEach((s) => Ud(s, e, n, r));
    else {
      const s = Vt(t.handler) ? t.handler.bind(n) : e[t.handler];
      Vt(s) && Po(a, s, t);
    }
}
function Bd(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: a,
    optionsCache: s,
    config: { optionMergeStrategies: u }
  } = t.appContext, f = s.get(e);
  let g;
  return f ? g = f : !a.length && !n && !r ? g = e : (g = {}, a.length && a.forEach(
    (y) => Bo(g, y, u, !0)
  ), Bo(g, e, u)), Jt(e) && s.set(e, g), g;
}
function Bo(t, e, n, r = !1) {
  const { mixins: a, extends: s } = e;
  s && Bo(t, s, n, !0), a && a.forEach(
    (u) => Bo(t, u, n, !0)
  );
  for (const u in e)
    if (!(r && u === "expose")) {
      const f = pm[u] || n && n[u];
      t[u] = f ? f(t[u], e[u]) : e[u];
    }
  return t;
}
const pm = {
  data: Gu,
  props: Ku,
  emits: Ku,
  // objects
  methods: ca,
  computed: ca,
  // lifecycle
  beforeCreate: Ye,
  created: Ye,
  beforeMount: Ye,
  mounted: Ye,
  beforeUpdate: Ye,
  updated: Ye,
  beforeDestroy: Ye,
  beforeUnmount: Ye,
  destroyed: Ye,
  unmounted: Ye,
  activated: Ye,
  deactivated: Ye,
  errorCaptured: Ye,
  serverPrefetch: Ye,
  // assets
  components: ca,
  directives: ca,
  // watch
  watch: mm,
  // provide / inject
  provide: Gu,
  inject: gm
};
function Gu(t, e) {
  return e ? t ? function() {
    return ze(
      Vt(t) ? t.call(this, this) : t,
      Vt(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function gm(t, e) {
  return ca(Tc(t), Tc(e));
}
function Tc(t) {
  if (Dt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Ye(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function ca(t, e) {
  return t ? ze(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Ku(t, e) {
  return t ? Dt(t) && Dt(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : ze(
    /* @__PURE__ */ Object.create(null),
    Uu(t),
    Uu(e ?? {})
  ) : e;
}
function mm(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = ze(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = Ye(t[r], e[r]);
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
let ym = 0;
function bm(t, e) {
  return function(r, a = null) {
    Vt(r) || (r = ze({}, r)), a != null && !Jt(a) && (a = null);
    const s = Gd(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let g = !1;
    const y = s.app = {
      _uid: ym++,
      _component: r,
      _props: a,
      _container: null,
      _context: s,
      _instance: null,
      version: Zm,
      get config() {
        return s.config;
      },
      set config(v) {
      },
      use(v, ...d) {
        return u.has(v) || (v && Vt(v.install) ? (u.add(v), v.install(y, ...d)) : Vt(v) && (u.add(v), v(y, ...d))), y;
      },
      mixin(v) {
        return s.mixins.includes(v) || s.mixins.push(v), y;
      },
      component(v, d) {
        return d ? (s.components[v] = d, y) : s.components[v];
      },
      directive(v, d) {
        return d ? (s.directives[v] = d, y) : s.directives[v];
      },
      mount(v, d, M) {
        if (!g) {
          const P = y._ceVNode || Qe(r, a);
          return P.appContext = s, M === !0 ? M = "svg" : M === !1 && (M = void 0), t(P, v, M), g = !0, y._container = v, v.__vue_app__ = y, dl(P.component);
        }
      },
      onUnmount(v) {
        f.push(v);
      },
      unmount() {
        g && (Xn(
          f,
          y._instance,
          16
        ), t(null, y._container), delete y._container.__vue_app__);
      },
      provide(v, d) {
        return s.provides[v] = d, y;
      },
      runWithContext(v) {
        const d = Ci;
        Ci = y;
        try {
          return v();
        } finally {
          Ci = d;
        }
      }
    };
    return y;
  };
}
let Ci = null;
const vm = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${tn(e)}Modifiers`] || t[`${Jr(e)}Modifiers`];
function _m(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || ie;
  let a = n;
  const s = e.startsWith("update:"), u = s && vm(r, e.slice(7));
  u && (u.trim && (a = n.map((v) => we(v) ? v.trim() : v)), u.number && (a = n.map(r0)));
  let f, g = r[f = nc(e)] || // also try camelCase event handler (#2249)
  r[f = nc(tn(e))];
  !g && s && (g = r[f = nc(Jr(e))]), g && Xn(
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
    t.emitted[f] = !0, Xn(
      y,
      t,
      6,
      a
    );
  }
}
const xm = /* @__PURE__ */ new WeakMap();
function Kd(t, e, n = !1) {
  const r = n ? xm : e.emitsCache, a = r.get(t);
  if (a !== void 0)
    return a;
  const s = t.emits;
  let u = {}, f = !1;
  if (!Vt(t)) {
    const g = (y) => {
      const v = Kd(y, e, !0);
      v && (f = !0, ze(u, v));
    };
    !n && e.mixins.length && e.mixins.forEach(g), t.extends && g(t.extends), t.mixins && t.mixins.forEach(g);
  }
  return !s && !f ? (Jt(t) && r.set(t, null), null) : (Dt(s) ? s.forEach((g) => u[g] = null) : ze(u, s), Jt(t) && r.set(t, u), u);
}
function ys(t, e) {
  return !t || !ss(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), qt(t, e[0].toLowerCase() + e.slice(1)) || qt(t, Jr(e)) || qt(t, e));
}
function Wu(t) {
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
    renderCache: v,
    props: d,
    data: M,
    setupState: P,
    ctx: T,
    inheritAttrs: I
  } = t, C = jo(t);
  let F, A;
  try {
    if (n.shapeFlag & 4) {
      const R = a || r, K = R;
      F = Bn(
        y.call(
          K,
          R,
          v,
          d,
          P,
          M,
          T
        )
      ), A = f;
    } else {
      const R = e;
      F = Bn(
        R.length > 1 ? R(
          d,
          { attrs: f, slots: u, emit: g }
        ) : R(
          d,
          null
        )
      ), A = e.props ? f : wm(f);
    }
  } catch (R) {
    _a.length = 0, gs(R, t, 1), F = Qe(Ar);
  }
  let V = F;
  if (A && I !== !1) {
    const R = Object.keys(A), { shapeFlag: K } = V;
    R.length && K & 7 && (s && R.some(cs) && (A = Sm(
      A,
      s
    )), V = Li(V, A, !1, !0));
  }
  return n.dirs && (V = Li(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && cl(V, n.transition), F = V, jo(C), F;
}
const wm = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || ss(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Sm = (t, e) => {
  const n = {};
  for (const r in t)
    (!cs(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function Nm(t, e, n) {
  const { props: r, children: a, component: s } = t, { props: u, children: f, patchFlag: g } = e, y = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return r ? qu(r, u, y) : !!u;
    if (g & 8) {
      const v = e.dynamicProps;
      for (let d = 0; d < v.length; d++) {
        const M = v[d];
        if (Wd(u, r, M) && !ys(y, M))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? qu(r, u, y) : !0 : !!u;
  return !1;
}
function qu(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (Wd(e, t, s) && !ys(n, s))
      return !0;
  }
  return !1;
}
function Wd(t, e, n) {
  const r = t[n], a = e[n];
  return n === "style" && Jt(r) && Jt(a) ? !Zc(r, a) : r !== a;
}
function Mm({ vnode: t, parent: e, suspense: n }, r) {
  for (; e; ) {
    const a = e.subTree;
    if (a.suspense && a.suspense.activeBranch === t && (a.suspense.vnode.el = a.el = r, t = a), a === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = r);
}
const qd = {}, Yd = () => Object.create(qd), Xd = (t) => Object.getPrototypeOf(t) === qd;
function km(t, e, n, r = !1) {
  const a = {}, s = Yd();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Zd(t, e, a, s);
  for (const u in t.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? t.props = r ? a : /* @__PURE__ */ E0(a) : t.type.props ? t.props = a : t.props = s, t.attrs = s;
}
function Pm(t, e, n, r) {
  const {
    props: a,
    attrs: s,
    vnode: { patchFlag: u }
  } = t, f = /* @__PURE__ */ Wt(a), [g] = t.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const v = t.vnode.dynamicProps;
      for (let d = 0; d < v.length; d++) {
        let M = v[d];
        if (ys(t.emitsOptions, M))
          continue;
        const P = e[M];
        if (g)
          if (qt(s, M))
            P !== s[M] && (s[M] = P, y = !0);
          else {
            const T = tn(M);
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
          P !== s[M] && (s[M] = P, y = !0);
      }
    }
  } else {
    Zd(t, e, a, s) && (y = !0);
    let v;
    for (const d in f)
      (!e || // for camelCase
      !qt(e, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Jr(d)) === d || !qt(e, v))) && (g ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[v] !== void 0) && (a[d] = Dc(
        g,
        f,
        d,
        void 0,
        t,
        !0
      )) : delete a[d]);
    if (s !== f)
      for (const d in s)
        (!e || !qt(e, d)) && (delete s[d], y = !0);
  }
  y && lr(t.attrs, "set", "");
}
function Zd(t, e, n, r) {
  const [a, s] = t.propsOptions;
  let u = !1, f;
  if (e)
    for (let g in e) {
      if (pa(g))
        continue;
      const y = e[g];
      let v;
      a && qt(a, v = tn(g)) ? !s || !s.includes(v) ? n[v] = y : (f || (f = {}))[v] = y : ys(t.emitsOptions, g) || (!(g in r) || y !== r[g]) && (r[g] = y, u = !0);
    }
  if (s) {
    const g = /* @__PURE__ */ Wt(n), y = f || ie;
    for (let v = 0; v < s.length; v++) {
      const d = s[v];
      n[d] = Dc(
        a,
        g,
        d,
        y[d],
        t,
        !qt(y, d)
      );
    }
  }
  return u;
}
function Dc(t, e, n, r, a, s) {
  const u = t[n];
  if (u != null) {
    const f = qt(u, "default");
    if (f && r === void 0) {
      const g = u.default;
      if (u.type !== Function && !u.skipFactory && Vt(g)) {
        const { propsDefaults: y } = a;
        if (n in y)
          r = y[n];
        else {
          const v = Oa(a);
          r = y[n] = g.call(
            null,
            e
          ), v();
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
    ] && (r === "" || r === Jr(n)) && (r = !0));
  }
  return r;
}
const Am = /* @__PURE__ */ new WeakMap();
function Jd(t, e, n = !1) {
  const r = n ? Am : e.propsCache, a = r.get(t);
  if (a)
    return a;
  const s = t.props, u = {}, f = [];
  let g = !1;
  if (!Vt(t)) {
    const v = (d) => {
      g = !0;
      const [M, P] = Jd(d, e, !0);
      ze(u, M), P && f.push(...P);
    };
    !n && e.mixins.length && e.mixins.forEach(v), t.extends && v(t.extends), t.mixins && t.mixins.forEach(v);
  }
  if (!s && !g)
    return Jt(t) && r.set(t, Mi), Mi;
  if (Dt(s))
    for (let v = 0; v < s.length; v++) {
      const d = tn(s[v]);
      Yu(d) && (u[d] = ie);
    }
  else if (s)
    for (const v in s) {
      const d = tn(v);
      if (Yu(d)) {
        const M = s[v], P = u[d] = Dt(M) || Vt(M) ? { type: M } : ze({}, M), T = P.type;
        let I = !1, C = !0;
        if (Dt(T))
          for (let F = 0; F < T.length; ++F) {
            const A = T[F], V = Vt(A) && A.name;
            if (V === "Boolean") {
              I = !0;
              break;
            } else V === "String" && (C = !1);
          }
        else
          I = Vt(T) && T.name === "Boolean";
        P[
          0
          /* shouldCast */
        ] = I, P[
          1
          /* shouldCastTrue */
        ] = C, (I || qt(P, "default")) && f.push(d);
      }
    }
  const y = [u, f];
  return Jt(t) && r.set(t, y), y;
}
function Yu(t) {
  return t[0] !== "$" && !pa(t);
}
const ll = (t) => t === "_" || t === "_ctx" || t === "$stable", ul = (t) => Dt(t) ? t.map(Bn) : [Bn(t)], Cm = (t, e, n) => {
  if (e._n)
    return e;
  const r = B0((...a) => ul(e(...a)), n);
  return r._c = !1, r;
}, Qd = (t, e, n) => {
  const r = t._ctx;
  for (const a in t) {
    if (ll(a)) continue;
    const s = t[a];
    if (Vt(s))
      e[a] = Cm(a, s, r);
    else if (s != null) {
      const u = ul(s);
      e[a] = () => u;
    }
  }
}, th = (t, e) => {
  const n = ul(e);
  t.slots.default = () => n;
}, eh = (t, e, n) => {
  for (const r in e)
    (n || !ll(r)) && (t[r] = e[r]);
}, Im = (t, e, n) => {
  const r = t.slots = Yd();
  if (t.vnode.shapeFlag & 32) {
    const a = e._;
    a ? (eh(r, e, n), n && cd(r, "_", a, !0)) : Qd(e, r);
  } else e && th(t, e);
}, Em = (t, e, n) => {
  const { vnode: r, slots: a } = t;
  let s = !0, u = ie;
  if (r.shapeFlag & 32) {
    const f = e._;
    f ? n && f === 1 ? s = !1 : eh(a, e, n) : (s = !e.$stable, Qd(e, a)), u = e;
  } else e && (th(t, e), u = { default: 1 });
  if (s)
    for (const f in a)
      !ll(f) && u[f] == null && delete a[f];
}, rn = Om;
function Tm(t) {
  return Dm(t);
}
function Dm(t, e) {
  const n = fs();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: s,
    createElement: u,
    createText: f,
    createComment: g,
    setText: y,
    setElementText: v,
    parentNode: d,
    nextSibling: M,
    setScopeId: P = qn,
    insertStaticContent: T
  } = t, I = (w, D, H, q = null, Y = null, G = null, tt = void 0, st = null, et = !!D.dynamicChildren) => {
    if (w === D)
      return;
    w && !na(w, D) && (q = Ue(w), Mt(w, Y, G, !0), w = null), D.patchFlag === -2 && (et = !1, D.dynamicChildren = null);
    const { type: Z, ref: vt, shapeFlag: rt } = D;
    switch (Z) {
      case bs:
        C(w, D, H, q);
        break;
      case Ar:
        F(w, D, H, q);
        break;
      case Ao:
        w == null && A(D, H, q, tt);
        break;
      case Ve:
        Q(
          w,
          D,
          H,
          q,
          Y,
          G,
          tt,
          st,
          et
        );
        break;
      default:
        rt & 1 ? K(
          w,
          D,
          H,
          q,
          Y,
          G,
          tt,
          st,
          et
        ) : rt & 6 ? wt(
          w,
          D,
          H,
          q,
          Y,
          G,
          tt,
          st,
          et
        ) : (rt & 64 || rt & 128) && Z.process(
          w,
          D,
          H,
          q,
          Y,
          G,
          tt,
          st,
          et,
          sn
        );
    }
    vt != null && Y ? ya(vt, w && w.ref, G, D || w, !D) : vt == null && w && w.ref != null && ya(w.ref, null, G, w, !0);
  }, C = (w, D, H, q) => {
    if (w == null)
      r(
        D.el = f(D.children),
        H,
        q
      );
    else {
      const Y = D.el = w.el;
      D.children !== w.children && y(Y, D.children);
    }
  }, F = (w, D, H, q) => {
    w == null ? r(
      D.el = g(D.children || ""),
      H,
      q
    ) : D.el = w.el;
  }, A = (w, D, H, q) => {
    [w.el, w.anchor] = T(
      w.children,
      D,
      H,
      q,
      w.el,
      w.anchor
    );
  }, V = ({ el: w, anchor: D }, H, q) => {
    let Y;
    for (; w && w !== D; )
      Y = M(w), r(w, H, q), w = Y;
    r(D, H, q);
  }, R = ({ el: w, anchor: D }) => {
    let H;
    for (; w && w !== D; )
      H = M(w), a(w), w = H;
    a(D);
  }, K = (w, D, H, q, Y, G, tt, st, et) => {
    if (D.type === "svg" ? tt = "svg" : D.type === "math" && (tt = "mathml"), w == null)
      E(
        D,
        H,
        q,
        Y,
        G,
        tt,
        st,
        et
      );
    else {
      const Z = w.el && w.el._isVueCE ? w.el : null;
      try {
        Z && Z._beginPatch(), xt(
          w,
          D,
          Y,
          G,
          tt,
          st,
          et
        );
      } finally {
        Z && Z._endPatch();
      }
    }
  }, E = (w, D, H, q, Y, G, tt, st) => {
    let et, Z;
    const { props: vt, shapeFlag: rt, transition: St, dirs: p } = w;
    if (et = w.el = u(
      w.type,
      G,
      vt && vt.is,
      vt
    ), rt & 8 ? v(et, w.children) : rt & 16 && J(
      w.children,
      et,
      null,
      q,
      Y,
      lc(w, G),
      tt,
      st
    ), p && Lr(w, null, q, "created"), ct(et, w, w.scopeId, tt, q), vt) {
      for (const Bt in vt)
        Bt !== "value" && !pa(Bt) && s(et, Bt, null, vt[Bt], G, q);
      "value" in vt && s(et, "value", null, vt.value, G), (Z = vt.onVnodeBeforeMount) && Vn(Z, q, w);
    }
    p && Lr(w, null, q, "beforeMount");
    const Lt = Lm(Y, St);
    Lt && St.beforeEnter(et), r(et, D, H), ((Z = vt && vt.onVnodeMounted) || Lt || p) && rn(() => {
      try {
        Z && Vn(Z, q, w), Lt && St.enter(et), p && Lr(w, null, q, "mounted");
      } finally {
      }
    }, Y);
  }, ct = (w, D, H, q, Y) => {
    if (H && P(w, H), q)
      for (let G = 0; G < q.length; G++)
        P(w, q[G]);
    if (Y) {
      let G = Y.subTree;
      if (D === G || ah(G.type) && (G.ssContent === D || G.ssFallback === D)) {
        const tt = Y.vnode;
        ct(
          w,
          tt,
          tt.scopeId,
          tt.slotScopeIds,
          Y.parent
        );
      }
    }
  }, J = (w, D, H, q, Y, G, tt, st, et = 0) => {
    for (let Z = et; Z < w.length; Z++) {
      const vt = w[Z] = st ? cr(w[Z]) : Bn(w[Z]);
      I(
        null,
        vt,
        D,
        H,
        q,
        Y,
        G,
        tt,
        st
      );
    }
  }, xt = (w, D, H, q, Y, G, tt) => {
    const st = D.el = w.el;
    let { patchFlag: et, dynamicChildren: Z, dirs: vt } = D;
    et |= w.patchFlag & 16;
    const rt = w.props || ie, St = D.props || ie;
    let p;
    if (H && Rr(H, !1), (p = St.onVnodeBeforeUpdate) && Vn(p, H, D, w), vt && Lr(D, w, H, "beforeUpdate"), H && Rr(H, !0), (rt.innerHTML && St.innerHTML == null || rt.textContent && St.textContent == null) && v(st, ""), Z ? $(
      w.dynamicChildren,
      Z,
      st,
      H,
      q,
      lc(D, Y),
      G
    ) : tt || j(
      w,
      D,
      st,
      null,
      H,
      q,
      lc(D, Y),
      G,
      !1
    ), et > 0) {
      if (et & 16)
        at(st, rt, St, H, Y);
      else if (et & 2 && rt.class !== St.class && s(st, "class", null, St.class, Y), et & 4 && s(st, "style", rt.style, St.style, Y), et & 8) {
        const Lt = D.dynamicProps;
        for (let Bt = 0; Bt < Lt.length; Bt++) {
          const Gt = Lt[Bt], oe = rt[Gt], kt = St[Gt];
          (kt !== oe || Gt === "value") && s(st, Gt, oe, kt, Y, H);
        }
      }
      et & 1 && w.children !== D.children && v(st, D.children);
    } else !tt && Z == null && at(st, rt, St, H, Y);
    ((p = St.onVnodeUpdated) || vt) && rn(() => {
      p && Vn(p, H, D, w), vt && Lr(D, w, H, "updated");
    }, q);
  }, $ = (w, D, H, q, Y, G, tt) => {
    for (let st = 0; st < D.length; st++) {
      const et = w[st], Z = D[st], vt = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        et.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (et.type === Ve || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !na(et, Z) || // - In the case of a component, it could contain anything.
        et.shapeFlag & 198) ? d(et.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          H
        )
      );
      I(
        et,
        Z,
        vt,
        null,
        q,
        Y,
        G,
        tt,
        !0
      );
    }
  }, at = (w, D, H, q, Y) => {
    if (D !== H) {
      if (D !== ie)
        for (const G in D)
          !pa(G) && !(G in H) && s(
            w,
            G,
            D[G],
            null,
            Y,
            q
          );
      for (const G in H) {
        if (pa(G)) continue;
        const tt = H[G], st = D[G];
        tt !== st && G !== "value" && s(w, G, st, tt, Y, q);
      }
      "value" in H && s(w, "value", D.value, H.value, Y);
    }
  }, Q = (w, D, H, q, Y, G, tt, st, et) => {
    const Z = D.el = w ? w.el : f(""), vt = D.anchor = w ? w.anchor : f("");
    let { patchFlag: rt, dynamicChildren: St, slotScopeIds: p } = D;
    p && (st = st ? st.concat(p) : p), w == null ? (r(Z, H, q), r(vt, H, q), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      D.children || [],
      H,
      vt,
      Y,
      G,
      tt,
      st,
      et
    )) : rt > 0 && rt & 64 && St && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    w.dynamicChildren && w.dynamicChildren.length === St.length ? ($(
      w.dynamicChildren,
      St,
      H,
      Y,
      G,
      tt,
      st
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (D.key != null || Y && D === Y.subTree) && nh(
      w,
      D,
      !0
      /* shallow */
    )) : j(
      w,
      D,
      H,
      vt,
      Y,
      G,
      tt,
      st,
      et
    );
  }, wt = (w, D, H, q, Y, G, tt, st, et) => {
    D.slotScopeIds = st, w == null ? D.shapeFlag & 512 ? Y.ctx.activate(
      D,
      H,
      q,
      tt,
      et
    ) : lt(
      D,
      H,
      q,
      Y,
      G,
      tt,
      et
    ) : X(w, D, et);
  }, lt = (w, D, H, q, Y, G, tt) => {
    const st = w.component = Um(
      w,
      q,
      Y
    );
    if (Fd(w) && (st.ctx.renderer = sn), Gm(st, !1, tt), st.asyncDep) {
      if (Y && Y.registerDep(st, nt, tt), !w.el) {
        const et = st.subTree = Qe(Ar);
        F(null, et, D, H), w.placeholder = et.el;
      }
    } else
      nt(
        st,
        w,
        D,
        H,
        Y,
        G,
        tt
      );
  }, X = (w, D, H) => {
    const q = D.component = w.component;
    if (Nm(w, D, H))
      if (q.asyncDep && !q.asyncResolved) {
        it(q, D, H);
        return;
      } else
        q.next = D, q.update();
    else
      D.el = w.el, q.vnode = D;
  }, nt = (w, D, H, q, Y, G, tt) => {
    const st = () => {
      if (w.isMounted) {
        let { next: rt, bu: St, u: p, parent: Lt, vnode: Bt } = w;
        {
          const ve = rh(w);
          if (ve) {
            rt && (rt.el = Bt.el, it(w, rt, tt)), ve.asyncDep.then(() => {
              rn(() => {
                w.isUnmounted || Z();
              }, Y);
            });
            return;
          }
        }
        let Gt = rt, oe;
        Rr(w, !1), rt ? (rt.el = Bt.el, it(w, rt, tt)) : rt = Bt, St && rc(St), (oe = rt.props && rt.props.onVnodeBeforeUpdate) && Vn(oe, Lt, rt, Bt), Rr(w, !0);
        const kt = Wu(w), be = w.subTree;
        w.subTree = kt, I(
          be,
          kt,
          // parent may have changed if it's in a teleport
          d(be.el),
          // anchor may have changed if it's in a fragment
          Ue(be),
          w,
          Y,
          G
        ), rt.el = kt.el, Gt === null && Mm(w, kt.el), p && rn(p, Y), (oe = rt.props && rt.props.onVnodeUpdated) && rn(
          () => Vn(oe, Lt, rt, Bt),
          Y
        );
      } else {
        let rt;
        const { el: St, props: p } = D, { bm: Lt, m: Bt, parent: Gt, root: oe, type: kt } = w, be = ba(D);
        Rr(w, !1), Lt && rc(Lt), !be && (rt = p && p.onVnodeBeforeMount) && Vn(rt, Gt, D), Rr(w, !0);
        {
          oe.ce && oe.ce._hasShadowRoot() && oe.ce._injectChildStyle(
            kt,
            w.parent ? w.parent.type : void 0
          );
          const ve = w.subTree = Wu(w);
          I(
            null,
            ve,
            H,
            q,
            w,
            Y,
            G
          ), D.el = ve.el;
        }
        if (Bt && rn(Bt, Y), !be && (rt = p && p.onVnodeMounted)) {
          const ve = D;
          rn(
            () => Vn(rt, Gt, ve),
            Y
          );
        }
        (D.shapeFlag & 256 || Gt && ba(Gt.vnode) && Gt.vnode.shapeFlag & 256) && w.a && rn(w.a, Y), w.isMounted = !0, D = H = q = null;
      }
    };
    w.scope.on();
    const et = w.effect = new hd(st);
    w.scope.off();
    const Z = w.update = et.run.bind(et), vt = w.job = et.runIfDirty.bind(et);
    vt.i = w, vt.id = w.uid, et.scheduler = () => sl(vt), Rr(w, !0), Z();
  }, it = (w, D, H) => {
    D.component = w;
    const q = w.vnode.props;
    w.vnode = D, w.next = null, Pm(w, D.props, q, H), Em(w, D.children, H), ur(), Hu(w), fr();
  }, j = (w, D, H, q, Y, G, tt, st, et = !1) => {
    const Z = w && w.children, vt = w ? w.shapeFlag : 0, rt = D.children, { patchFlag: St, shapeFlag: p } = D;
    if (St > 0) {
      if (St & 128) {
        Nt(
          Z,
          rt,
          H,
          q,
          Y,
          G,
          tt,
          st,
          et
        );
        return;
      } else if (St & 256) {
        ot(
          Z,
          rt,
          H,
          q,
          Y,
          G,
          tt,
          st,
          et
        );
        return;
      }
    }
    p & 8 ? (vt & 16 && Me(Z, Y, G), rt !== Z && v(H, rt)) : vt & 16 ? p & 16 ? Nt(
      Z,
      rt,
      H,
      q,
      Y,
      G,
      tt,
      st,
      et
    ) : Me(Z, Y, G, !0) : (vt & 8 && v(H, ""), p & 16 && J(
      rt,
      H,
      q,
      Y,
      G,
      tt,
      st,
      et
    ));
  }, ot = (w, D, H, q, Y, G, tt, st, et) => {
    w = w || Mi, D = D || Mi;
    const Z = w.length, vt = D.length, rt = Math.min(Z, vt);
    let St;
    for (St = 0; St < rt; St++) {
      const p = D[St] = et ? cr(D[St]) : Bn(D[St]);
      I(
        w[St],
        p,
        H,
        null,
        Y,
        G,
        tt,
        st,
        et
      );
    }
    Z > vt ? Me(
      w,
      Y,
      G,
      !0,
      !1,
      rt
    ) : J(
      D,
      H,
      q,
      Y,
      G,
      tt,
      st,
      et,
      rt
    );
  }, Nt = (w, D, H, q, Y, G, tt, st, et) => {
    let Z = 0;
    const vt = D.length;
    let rt = w.length - 1, St = vt - 1;
    for (; Z <= rt && Z <= St; ) {
      const p = w[Z], Lt = D[Z] = et ? cr(D[Z]) : Bn(D[Z]);
      if (na(p, Lt))
        I(
          p,
          Lt,
          H,
          null,
          Y,
          G,
          tt,
          st,
          et
        );
      else
        break;
      Z++;
    }
    for (; Z <= rt && Z <= St; ) {
      const p = w[rt], Lt = D[St] = et ? cr(D[St]) : Bn(D[St]);
      if (na(p, Lt))
        I(
          p,
          Lt,
          H,
          null,
          Y,
          G,
          tt,
          st,
          et
        );
      else
        break;
      rt--, St--;
    }
    if (Z > rt) {
      if (Z <= St) {
        const p = St + 1, Lt = p < vt ? D[p].el : q;
        for (; Z <= St; )
          I(
            null,
            D[Z] = et ? cr(D[Z]) : Bn(D[Z]),
            H,
            Lt,
            Y,
            G,
            tt,
            st,
            et
          ), Z++;
      }
    } else if (Z > St)
      for (; Z <= rt; )
        Mt(w[Z], Y, G, !0), Z++;
    else {
      const p = Z, Lt = Z, Bt = /* @__PURE__ */ new Map();
      for (Z = Lt; Z <= St; Z++) {
        const Ee = D[Z] = et ? cr(D[Z]) : Bn(D[Z]);
        Ee.key != null && Bt.set(Ee.key, Z);
      }
      let Gt, oe = 0;
      const kt = St - Lt + 1;
      let be = !1, ve = 0;
      const Zn = new Array(kt);
      for (Z = 0; Z < kt; Z++) Zn[Z] = 0;
      for (Z = p; Z <= rt; Z++) {
        const Ee = w[Z];
        if (oe >= kt) {
          Mt(Ee, Y, G, !0);
          continue;
        }
        let ke;
        if (Ee.key != null)
          ke = Bt.get(Ee.key);
        else
          for (Gt = Lt; Gt <= St; Gt++)
            if (Zn[Gt - Lt] === 0 && na(Ee, D[Gt])) {
              ke = Gt;
              break;
            }
        ke === void 0 ? Mt(Ee, Y, G, !0) : (Zn[ke - Lt] = Z + 1, ke >= ve ? ve = ke : be = !0, I(
          Ee,
          D[ke],
          H,
          null,
          Y,
          G,
          tt,
          st,
          et
        ), oe++);
      }
      const Cn = be ? Rm(Zn) : Mi;
      for (Gt = Cn.length - 1, Z = kt - 1; Z >= 0; Z--) {
        const Ee = Lt + Z, ke = D[Ee], Pe = D[Ee + 1], Va = Ee + 1 < vt ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Pe.el || ih(Pe)
        ) : q;
        Zn[Z] === 0 ? I(
          null,
          ke,
          H,
          Va,
          Y,
          G,
          tt,
          st,
          et
        ) : be && (Gt < 0 || Z !== Cn[Gt] ? At(ke, H, Va, 2) : Gt--);
      }
    }
  }, At = (w, D, H, q, Y = null) => {
    const { el: G, type: tt, transition: st, children: et, shapeFlag: Z } = w;
    if (Z & 6) {
      At(w.component.subTree, D, H, q);
      return;
    }
    if (Z & 128) {
      w.suspense.move(D, H, q);
      return;
    }
    if (Z & 64) {
      tt.move(w, D, H, sn);
      return;
    }
    if (tt === Ve) {
      r(G, D, H);
      for (let rt = 0; rt < et.length; rt++)
        At(et[rt], D, H, q);
      r(w.anchor, D, H);
      return;
    }
    if (tt === Ao) {
      V(w, D, H);
      return;
    }
    if (q !== 2 && Z & 1 && st)
      if (q === 0)
        st.beforeEnter(G), r(G, D, H), rn(() => st.enter(G), Y);
      else {
        const { leave: rt, delayLeave: St, afterLeave: p } = st, Lt = () => {
          w.ctx.isUnmounted ? a(G) : r(G, D, H);
        }, Bt = () => {
          G._isLeaving && G[Z0](
            !0
            /* cancelled */
          ), rt(G, () => {
            Lt(), p && p();
          });
        };
        St ? St(G, Lt, Bt) : Bt();
      }
    else
      r(G, D, H);
  }, Mt = (w, D, H, q = !1, Y = !1) => {
    const {
      type: G,
      props: tt,
      ref: st,
      children: et,
      dynamicChildren: Z,
      shapeFlag: vt,
      patchFlag: rt,
      dirs: St,
      cacheIndex: p,
      memo: Lt
    } = w;
    if (rt === -2 && (Y = !1), st != null && (ur(), ya(st, null, H, w, !0), fr()), p != null && (D.renderCache[p] = void 0), vt & 256) {
      D.ctx.deactivate(w);
      return;
    }
    const Bt = vt & 1 && St, Gt = !ba(w);
    let oe;
    if (Gt && (oe = tt && tt.onVnodeBeforeUnmount) && Vn(oe, D, w), vt & 6)
      je(w.component, H, q);
    else {
      if (vt & 128) {
        w.suspense.unmount(H, q);
        return;
      }
      Bt && Lr(w, null, D, "beforeUnmount"), vt & 64 ? w.type.remove(
        w,
        D,
        H,
        sn,
        q
      ) : Z && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Z.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (G !== Ve || rt > 0 && rt & 64) ? Me(
        Z,
        D,
        H,
        !1,
        !0
      ) : (G === Ve && rt & 384 || !Y && vt & 16) && Me(et, D, H), q && ae(w);
    }
    const kt = Lt != null && p == null;
    (Gt && (oe = tt && tt.onVnodeUnmounted) || Bt || kt) && rn(() => {
      oe && Vn(oe, D, w), Bt && Lr(w, null, D, "unmounted"), kt && (w.el = null);
    }, H);
  }, ae = (w) => {
    const { type: D, el: H, anchor: q, transition: Y } = w;
    if (D === Ve) {
      Ne(H, q);
      return;
    }
    if (D === Ao) {
      R(w);
      return;
    }
    const G = () => {
      a(H), Y && !Y.persisted && Y.afterLeave && Y.afterLeave();
    };
    if (w.shapeFlag & 1 && Y && !Y.persisted) {
      const { leave: tt, delayLeave: st } = Y, et = () => tt(H, G);
      st ? st(w.el, G, et) : et();
    } else
      G();
  }, Ne = (w, D) => {
    let H;
    for (; w !== D; )
      H = M(w), a(w), w = H;
    a(D);
  }, je = (w, D, H) => {
    const { bum: q, scope: Y, job: G, subTree: tt, um: st, m: et, a: Z } = w;
    Xu(et), Xu(Z), q && rc(q), Y.stop(), G && (G.flags |= 8, Mt(tt, w, D, H)), st && rn(st, D), rn(() => {
      w.isUnmounted = !0;
    }, D);
  }, Me = (w, D, H, q = !1, Y = !1, G = 0) => {
    for (let tt = G; tt < w.length; tt++)
      Mt(w[tt], D, H, q, Y);
  }, Ue = (w) => {
    if (w.shapeFlag & 6)
      return Ue(w.component.subTree);
    if (w.shapeFlag & 128)
      return w.suspense.next();
    const D = M(w.anchor || w.el), H = D && D[Y0];
    return H ? M(H) : D;
  };
  let Ae = !1;
  const on = (w, D, H) => {
    let q;
    w == null ? D._vnode && (Mt(D._vnode, null, null, !0), q = D._vnode.component) : I(
      D._vnode || null,
      w,
      D,
      null,
      null,
      null,
      H
    ), D._vnode = w, Ae || (Ae = !0, Hu(q), Ed(), Ae = !1);
  }, sn = {
    p: I,
    um: Mt,
    m: At,
    r: ae,
    mt: lt,
    mc: J,
    pc: j,
    pbc: $,
    n: Ue,
    o: t
  };
  return {
    render: on,
    hydrate: void 0,
    createApp: bm(on)
  };
}
function lc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Rr({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Lm(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function nh(t, e, n = !1) {
  const r = t.children, a = e.children;
  if (Dt(r) && Dt(a))
    for (let s = 0; s < r.length; s++) {
      const u = r[s];
      let f = a[s];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[s] = cr(a[s]), f.el = u.el), !n && f.patchFlag !== -2 && nh(u, f)), f.type === bs && (f.patchFlag === -1 && (f = a[s] = cr(f)), f.el = u.el), f.type === Ar && !f.el && (f.el = u.el);
    }
}
function Rm(t) {
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
function rh(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : rh(e);
}
function Xu(t) {
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
function Om(t, e) {
  e && e.pendingBranch ? Dt(t) ? e.effects.push(...t) : e.effects.push(t) : U0(t);
}
const Ve = /* @__PURE__ */ Symbol.for("v-fgt"), bs = /* @__PURE__ */ Symbol.for("v-txt"), Ar = /* @__PURE__ */ Symbol.for("v-cmt"), Ao = /* @__PURE__ */ Symbol.for("v-stc"), _a = [];
let fn = null;
function ye(t = !1) {
  _a.push(fn = t ? null : []);
}
function Fm() {
  _a.pop(), fn = _a[_a.length - 1] || null;
}
let Ia = 1;
function Zu(t, e = !1) {
  Ia += t, t < 0 && fn && e && (fn.hasOnce = !0);
}
function oh(t) {
  return t.dynamicChildren = Ia > 0 ? fn || Mi : null, Fm(), Ia > 0 && fn && fn.push(t), t;
}
function Re(t, e, n, r, a, s) {
  return oh(
    xe(
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
function Oi(t, e, n, r, a) {
  return oh(
    Qe(
      t,
      e,
      n,
      r,
      a,
      !0
    )
  );
}
function sh(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function na(t, e) {
  return t.type === e.type && t.key === e.key;
}
const ch = ({ key: t }) => t ?? null, Co = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? we(t) || /* @__PURE__ */ $e(t) || Vt(t) ? { i: kn, r: t, k: e, f: !!n } : t : null);
function xe(t, e = null, n = null, r = 0, a = null, s = t === Ve ? 0 : 1, u = !1, f = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && ch(e),
    ref: e && Co(e),
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
    patchFlag: r,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: kn
  };
  return f ? (fl(g, n), s & 128 && t.normalize(g)) : n && (g.shapeFlag |= we(n) ? 8 : 16), Ia > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  fn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && fn.push(g), g;
}
const Qe = Vm;
function Vm(t, e = null, n = null, r = 0, a = null, s = !1) {
  if ((!t || t === jd) && (t = Ar), sh(t)) {
    const f = Li(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && fl(f, n), Ia > 0 && !s && fn && (f.shapeFlag & 6 ? fn[fn.indexOf(t)] = f : fn.push(f)), f.patchFlag = -2, f;
  }
  if (Xm(t) && (t = t.__vccOpts), e) {
    e = Hm(e);
    let { class: f, style: g } = e;
    f && !we(f) && (e.class = hs(f)), Jt(g) && (/* @__PURE__ */ al(g) && !Dt(g) && (g = ze({}, g)), e.style = ds(g));
  }
  const u = we(t) ? 1 : ah(t) ? 128 : X0(t) ? 64 : Jt(t) ? 4 : Vt(t) ? 2 : 0;
  return xe(
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
function Hm(t) {
  return t ? /* @__PURE__ */ al(t) || Xd(t) ? ze({}, t) : t : null;
}
function Li(t, e, n = !1, r = !1) {
  const { props: a, ref: s, patchFlag: u, children: f, transition: g } = t, y = e ? uh(a || {}, e) : a, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: y,
    key: y && ch(y),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Dt(s) ? s.concat(Co(e)) : [s, Co(e)] : Co(e)
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
    patchFlag: e && t.type !== Ve ? u === -1 ? 16 : u | 16 : u,
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
    ssContent: t.ssContent && Li(t.ssContent),
    ssFallback: t.ssFallback && Li(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return g && r && cl(
    v,
    g.clone(v)
  ), v;
}
function $m(t = " ", e = 0) {
  return Qe(bs, null, t, e);
}
function lh(t, e) {
  const n = Qe(Ao, null, t);
  return n.staticCount = e, n;
}
function Io(t = "", e = !1) {
  return e ? (ye(), Oi(Ar, null, t)) : Qe(Ar, null, t);
}
function Bn(t) {
  return t == null || typeof t == "boolean" ? Qe(Ar) : Dt(t) ? Qe(
    Ve,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : sh(t) ? cr(t) : Qe(bs, null, String(t));
}
function cr(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Li(t);
}
function fl(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Dt(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const a = e.default;
      a && (a._c && (a._d = !1), fl(t, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = e._;
      !a && !Xd(e) ? e._ctx = kn : a === 3 && kn && (kn.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else Vt(e) ? (e = { default: e, _ctx: kn }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [$m(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function uh(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const a in r)
      if (a === "class")
        e.class !== r.class && (e.class = hs([e.class, r.class]));
      else if (a === "style")
        e.style = ds([e.style, r.style]);
      else if (ss(a)) {
        const s = e[a], u = r[a];
        u && s !== u && !(Dt(s) && s.includes(u)) ? e[a] = s ? [].concat(s, u) : u : u == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !cs(a) && (e[a] = u);
      } else a !== "" && (e[a] = r[a]);
  }
  return e;
}
function Vn(t, e, n, r = null) {
  Xn(t, e, 7, [
    n,
    r
  ]);
}
const zm = Gd();
let jm = 0;
function Um(t, e, n) {
  const r = t.type, a = (e ? e.appContext : t.appContext) || zm, s = {
    uid: jm++,
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
    scope: new f0(
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
    propsOptions: Jd(r, a),
    emitsOptions: Kd(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ie,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: ie,
    data: ie,
    props: ie,
    attrs: ie,
    slots: ie,
    refs: ie,
    setupState: ie,
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
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = _m.bind(null, s), t.ce && t.ce(s), s;
}
let He = null;
const Bm = () => He || kn;
let Go, Lc;
{
  const t = fs(), e = (n, r) => {
    let a;
    return (a = t[n]) || (a = t[n] = []), a.push(r), (s) => {
      a.length > 1 ? a.forEach((u) => u(s)) : a[0](s);
    };
  };
  Go = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => He = n
  ), Lc = e(
    "__VUE_SSR_SETTERS__",
    (n) => Ea = n
  );
}
const Oa = (t) => {
  const e = He;
  return Go(t), t.scope.on(), () => {
    t.scope.off(), Go(e);
  };
}, Ju = () => {
  He && He.scope.off(), Go(null);
};
function fh(t) {
  return t.vnode.shapeFlag & 4;
}
let Ea = !1;
function Gm(t, e = !1, n = !1) {
  e && Lc(e);
  const { props: r, children: a } = t.vnode, s = fh(t);
  km(t, r, s, e), Im(t, a, n || e);
  const u = s ? Km(t, e) : void 0;
  return e && Lc(!1), u;
}
function Km(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, fm);
  const { setup: r } = n;
  if (r) {
    ur();
    const a = t.setupContext = r.length > 1 ? qm(t) : null, s = Oa(t), u = Ra(
      r,
      t,
      0,
      [
        t.props,
        a
      ]
    ), f = ad(u);
    if (fr(), s(), (f || t.sp) && !ba(t) && Od(t), f) {
      if (u.then(Ju, Ju), e)
        return u.then((g) => {
          Qu(t, g);
        }).catch((g) => {
          gs(g, t, 0);
        });
      t.asyncDep = u;
    } else
      Qu(t, u);
  } else
    dh(t);
}
function Qu(t, e, n) {
  Vt(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Jt(e) && (t.setupState = Pd(e)), dh(t);
}
function dh(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || qn);
  {
    const a = Oa(t);
    ur();
    try {
      dm(t);
    } finally {
      fr(), a();
    }
  }
}
const Wm = {
  get(t, e) {
    return Fe(t, "get", ""), t[e];
  }
};
function qm(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, Wm),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function dl(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Pd(T0(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in va)
        return va[n](t);
    },
    has(e, n) {
      return n in e || n in va;
    }
  })) : t.proxy;
}
function Ym(t, e = !0) {
  return Vt(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Xm(t) {
  return Vt(t) && "__vccOpts" in t;
}
const Ii = (t, e) => /* @__PURE__ */ V0(t, e, Ea), Zm = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Rc;
const tf = typeof window < "u" && window.trustedTypes;
if (tf)
  try {
    Rc = /* @__PURE__ */ tf.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const hh = Rc ? (t) => Rc.createHTML(t) : (t) => t, Jm = "http://www.w3.org/2000/svg", Qm = "http://www.w3.org/1998/Math/MathML", sr = typeof document < "u" ? document : null, ef = sr && /* @__PURE__ */ sr.createElement("template"), t1 = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const a = e === "svg" ? sr.createElementNS(Jm, t) : e === "mathml" ? sr.createElementNS(Qm, t) : n ? sr.createElement(t, { is: n }) : sr.createElement(t);
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
      ef.innerHTML = hh(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const f = ef.content;
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
}, e1 = /* @__PURE__ */ Symbol("_vtc");
function n1(t, e, n) {
  const r = t[e1];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const nf = /* @__PURE__ */ Symbol("_vod"), r1 = /* @__PURE__ */ Symbol("_vsh"), i1 = /* @__PURE__ */ Symbol(""), a1 = /(?:^|;)\s*display\s*:/;
function o1(t, e, n) {
  const r = t.style, a = we(n);
  let s = !1;
  if (n && !a) {
    if (e)
      if (we(e))
        for (const u of e.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && Eo(r, f, "");
        }
      else
        for (const u in e)
          n[u] == null && Eo(r, u, "");
    for (const u in n)
      u === "display" && (s = !0), Eo(r, u, n[u]);
  } else if (a) {
    if (e !== n) {
      const u = r[i1];
      u && (n += ";" + u), r.cssText = n, s = a1.test(n);
    }
  } else e && t.removeAttribute("style");
  nf in t && (t[nf] = s ? r.display : "", t[r1] && (r.display = "none"));
}
const rf = /\s*!important$/;
function Eo(t, e, n) {
  if (Dt(n))
    n.forEach((r) => Eo(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = s1(t, e);
    rf.test(n) ? t.setProperty(
      Jr(r),
      n.replace(rf, ""),
      "important"
    ) : t[r] = n;
  }
}
const af = ["Webkit", "Moz", "ms"], uc = {};
function s1(t, e) {
  const n = uc[e];
  if (n)
    return n;
  let r = tn(e);
  if (r !== "filter" && r in t)
    return uc[e] = r;
  r = us(r);
  for (let a = 0; a < af.length; a++) {
    const s = af[a] + r;
    if (s in t)
      return uc[e] = s;
  }
  return e;
}
const of = "http://www.w3.org/1999/xlink";
function sf(t, e, n, r, a, s = l0(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(of, e.slice(6, e.length)) : t.setAttributeNS(of, e, n) : n == null || s && !ld(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    s ? "" : Yn(n) ? String(n) : n
  );
}
function cf(t, e, n, r, a) {
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
function c1(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function l1(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const lf = /* @__PURE__ */ Symbol("_vei");
function u1(t, e, n, r, a = null) {
  const s = t[lf] || (t[lf] = {}), u = s[e];
  if (r && u)
    u.value = r;
  else {
    const [f, g] = f1(e);
    if (r) {
      const y = s[e] = p1(
        r,
        a
      );
      c1(t, f, y, g);
    } else u && (l1(t, f, u, g), s[e] = void 0);
  }
}
const uf = /(?:Once|Passive|Capture)$/;
function f1(t) {
  let e;
  if (uf.test(t)) {
    e = {};
    let r;
    for (; r = t.match(uf); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Jr(t.slice(2)), e];
}
let fc = 0;
const d1 = /* @__PURE__ */ Promise.resolve(), h1 = () => fc || (d1.then(() => fc = 0), fc = Date.now());
function p1(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Xn(
      g1(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = h1(), n;
}
function g1(t, e) {
  if (Dt(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map(
      (r) => (a) => !a._stopped && r && r(a)
    );
  } else
    return e;
}
const ff = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, m1 = (t, e, n, r, a, s) => {
  const u = a === "svg";
  e === "class" ? n1(t, r, u) : e === "style" ? o1(t, n, r) : ss(e) ? cs(e) || u1(t, e, n, r, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : y1(t, e, r, u)) ? (cf(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && sf(t, e, r, u, s, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (b1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !we(r))) ? cf(t, tn(e), r, s, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), sf(t, e, r, u));
};
function y1(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && ff(e) && Vt(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const a = t.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return ff(e) && we(n) ? !1 : e in t;
}
function b1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const r = tn(e);
  return Array.isArray(n) ? n.some((a) => tn(a) === r) : Object.keys(n).some((a) => tn(a) === r);
}
const v1 = ["ctrl", "shift", "alt", "meta"], _1 = {
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
  exact: (t, e) => v1.some((n) => t[`${n}Key`] && !e.includes(n))
}, x1 = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = ((a, ...s) => {
    for (let u = 0; u < e.length; u++) {
      const f = _1[e[u]];
      if (f && f(a, e)) return;
    }
    return t(a, ...s);
  }));
}, w1 = /* @__PURE__ */ ze({ patchProp: m1 }, t1);
let df;
function S1() {
  return df || (df = Tm(w1));
}
const N1 = ((...t) => {
  const e = S1().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const a = k1(r);
    if (!a) return;
    const s = e._component;
    !Vt(s) && !s.render && !s.template && (s.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, M1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, e;
});
function M1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function k1(t) {
  return we(t) ? document.querySelector(t) : t;
}
const me = Math.PI / 180, ph = Math.PI * 2, P1 = 2048;
function te(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Cr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Ko(t, e) {
  return Cr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Si(t, e) {
  return Cr(t.x * e, t.y * e, t.z * e);
}
function To(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function hf(t, e) {
  return Cr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function la(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Cr(t.x / e, t.y / e, t.z / e);
}
function A1(t, e) {
  const n = Number(t || 0) * me, r = Number(e || 0) * me, a = Math.cos(r);
  return Cr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Do(t, e, n = 0) {
  const r = A1(t, e);
  let a = Cr(0, 1, 0);
  Math.abs(To(r, a)) > 0.999 && (a = Cr(0, 0, 1));
  let s = la(hf(a, r)), u = la(hf(r, s));
  const f = Number(n || 0) * me, g = Math.cos(f), y = Math.sin(f), v = Ko(Si(s, g), Si(u, y)), d = Ko(Si(s, -y), Si(u, g));
  return s = la(v), u = la(d), { fwd: r, right: s, up: u };
}
function C1(t, e) {
  const n = (Number(t || 0) - 0.5) * ph, r = (0.5 - Number(e || 0)) * Math.PI, a = Math.cos(r);
  return Cr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function pf(t, e, n = 1) {
  const r = Math.max(1, Math.round(Number(t || 1))), a = Math.max(1, Math.round(Number(e || 1))), s = Math.max(1, Number(n || 1)), u = Math.max(512, P1), f = Math.min(1, u / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: s,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function gf(t, e, n) {
  const r = t.createShader(e);
  if (t.shaderSource(r, n), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const a = t.getShaderInfoLog(r) || "shader compile failed";
    throw t.deleteShader(r), new Error(a);
  }
  return r;
}
function dc(t, e, n) {
  const r = gf(t, t.VERTEX_SHADER, e);
  let a;
  try {
    a = gf(t, t.FRAGMENT_SHADER, n);
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
const hc = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, I1 = `#version 300 es
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
}`, E1 = `#version 300 es
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
}`, T1 = `#version 300 es
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
function ra(t, e, n) {
  if (!t || t.mode === "unwrap") return null;
  const r = Number(t.mode === "cutout" ? t.hFovDeg || 90 : t.fovDeg || 100), a = Number(t.mode === "cutout" ? t.vFovDeg || 60 : 2 * Math.atan(Math.tan(te(r, 1, 179) * me * 0.5) * (n / Math.max(e, 1))) / me);
  return {
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.mode === "cutout" && t.rollDeg || 0),
    hFovDeg: te(r, 1, 179),
    vFovDeg: te(a, 0.1, 179)
  };
}
function D1(t) {
  const e = Do(
    Number(t.yawDeg || 0),
    Number(t.pitchDeg || 0),
    Number(t.rollDeg || 0)
  );
  return {
    right: e.right,
    up: e.up,
    fwd: e.fwd,
    tanX: Math.tan(te(Number(t.hFovDeg || 30), 0.1, 179) * 0.5 * me),
    tanY: Math.tan(te(Number(t.vFovDeg || 30), 0.1, 179) * 0.5 * me),
    crop: t.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: te(Number(t.opacity ?? 1), 0, 1)
  };
}
function L1(t = {}) {
  const e = (t == null ? void 0 : t.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, v = null, d = null, M = null, P = !1, T = pf(1, 1, 1), I = null, C = null, F = null, A = null, V = null;
  const R = /* @__PURE__ */ new Map();
  let K = {
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, E = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  };
  function ct(w = null, D = null) {
    const H = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, H), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, w ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, D ?? n.CLAMP_TO_EDGE), H;
  }
  function J() {
    if (P) return !0;
    try {
      return n = e.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (r = dc(n, hc, I1), a = dc(n, hc, E1), s = dc(n, hc, T1), I = {
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
      ]), n.STATIC_DRAW), f = ct(n.REPEAT, n.CLAMP_TO_EDGE), g = ct(n.REPEAT, n.CLAMP_TO_EDGE), y = ct(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), P = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function xt() {
    var w;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), g && n.deleteTexture(g), y && n.deleteTexture(y), R.forEach((D) => {
          it(D);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), s && n.deleteProgram(s), (w = n.getExtension("WEBGL_lose_context")) == null || w.loseContext();
      } catch {
      }
      n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, R.clear(), v = null, d = null, M = null, E = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, A = null, V = null, P = !1;
    }
  }
  function $(w, D, H = 1) {
    T = pf(w, D, H), (e.width !== T.width || e.height !== T.height) && (e.width = T.width, e.height = T.height);
  }
  function at(w) {
    w === "background" ? v = null : w === "paint" ? d = null : M = null, E[w] && (E[w].width = 0, E[w].height = 0);
  }
  function Q(w, D, H = [], q = { width: 0, height: 0 }, Y = !1) {
    if (!n || !w || !D) return !1;
    const G = Number(D.width || D.videoWidth || D.naturalWidth || 0), tt = Number(D.height || D.videoHeight || D.naturalHeight || 0);
    if (!(G > 1) || !(tt > 1)) return !1;
    const st = Array.isArray(H) ? H.filter((et) => et && et.w > 0 && et.h > 0) : [];
    if (!st.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, w), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Y ? 1 : 0), q.width !== G || q.height !== tt)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, D), q.width = G, q.height = tt, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (A || (A = document.createElement("canvas"), V = A.getContext("2d")), !V)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const et of st) {
      const Z = Math.max(0, Math.floor(Number(et.x || 0))), vt = Math.max(0, Math.floor(Number(et.y || 0))), rt = Math.min(G - Z, Math.ceil(Number(et.w || 0))), St = Math.min(tt - vt, Math.ceil(Number(et.h || 0)));
      if (!(rt <= 0 || St <= 0)) {
        if (A.width !== rt || A.height !== St) {
          if (A.width = rt, A.height = St, V = A.getContext("2d"), !V)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          V.clearRect(0, 0, rt, St);
        V.drawImage(D, Z, vt, rt, St, 0, 0, rt, St), n.texSubImage2D(n.TEXTURE_2D, 0, Z, vt, n.RGBA, n.UNSIGNED_BYTE, A);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function wt(w, D, H, q, Y = null, G = !1) {
    if (!J()) return !1;
    if (!H)
      return at(w), !1;
    const tt = String(q ?? ""), st = w === "background" ? v : w === "paint" ? d : M, et = E[w], Z = Number(H.width || H.videoWidth || H.naturalWidth || 0), vt = Number(H.height || H.videoHeight || H.naturalHeight || 0), rt = et.width !== Z || et.height !== vt;
    if (st === tt && !rt && !(Array.isArray(Y) && Y.length)) return !0;
    if (!(Z > 0) || !(vt > 0))
      return at(w), !1;
    if (n.bindTexture(n.TEXTURE_2D, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G ? 1 : 0), !(Array.isArray(Y) && Y.length ? Q(D, H, Y, et, G) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, H), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), at(w), !1;
      et.width = Z, et.height = vt;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), w === "background" ? v = tt : w === "paint" ? d = tt : M = tt, !0;
  }
  function lt(w, D) {
    return wt("background", f, w, D, null, !0);
  }
  function X(w, D, H = null) {
    return wt("paint", g, w, D, H, !0);
  }
  function nt(w, D, H = null) {
    return wt("mask", y, w, D, H, !0);
  }
  function it(w) {
    w != null && w.texture && n && n.deleteTexture(w.texture);
  }
  function j(w) {
    if (!n || !(w != null && w.assetId) || !(w != null && w.source)) return null;
    const D = String(w.assetId), H = String(w.revision ?? ""), q = w.source, Y = Number(q.width || q.naturalWidth || q.videoWidth || 0), G = Number(q.height || q.naturalHeight || q.videoHeight || 0);
    if (Y <= 0 || G <= 0) return null;
    let tt = R.get(D);
    if (tt || (tt = {
      texture: ct(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, R.set(D, tt)), tt.revision !== H || tt.width !== Y || tt.height !== G) {
      if (n.bindTexture(n.TEXTURE_2D, tt.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, q), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), tt.revision = H, tt.width = Y, tt.height = G;
    }
    return tt.texture;
  }
  function ot(w = []) {
    if (!J()) return !1;
    const D = /* @__PURE__ */ new Set();
    return w.forEach((H) => {
      !(H != null && H.assetId) || !(H != null && H.source) || (D.add(String(H.assetId)), j(H));
    }), R.forEach((H, q) => {
      D.has(q) || (it(H), R.delete(q));
    }), !0;
  }
  function Nt() {
    return J() ? (n.viewport(0, 0, e.width, e.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function At(w) {
    n.useProgram(w), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function Mt(w, D = {}) {
    if (!v) return null;
    n.disable(n.BLEND), At(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(I.background, 0), n.uniform2f(I.viewport, Math.max(1, T.width), Math.max(1, T.height)), n.uniform1i(I.mode, (w == null ? void 0 : w.mode) === "unwrap" ? 0 : (w == null ? void 0 : w.mode) === "cutout" ? 2 : 1);
    const H = ra(w, T.width, T.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(I.yaw, Number(H.yawDeg || 0) * me), n.uniform1f(I.pitch, Number(H.pitchDeg || 0) * me), n.uniform1f(I.roll, Number(H.rollDeg || 0) * me), n.uniform1f(I.hFov, te(Number(H.hFovDeg || 90), 0.1, 179) * me), n.uniform1f(I.vFov, te(Number(H.vFovDeg || 60), 0.1, 179) * me), n.uniform1f(I.opacity, te(Number(D.backgroundOpacity ?? 1), 0, 1));
    const q = Number((w == null ? void 0 : w.coverageDeg) || (D == null ? void 0 : D.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(I.coverage, q), n.drawArrays(n.TRIANGLES, 0, 6), e;
  }
  function ae(w, D = {}) {
    if (d == null && M == null) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), At(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i(C.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(C.mask, 1), n.uniform1i(C.mode, (w == null ? void 0 : w.mode) === "unwrap" ? 0 : (w == null ? void 0 : w.mode) === "cutout" ? 2 : 1);
    const H = ra(w, T.width, T.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(C.yaw, Number(H.yawDeg || 0) * me), n.uniform1f(C.pitch, Number(H.pitchDeg || 0) * me), n.uniform1f(C.roll, Number(H.rollDeg || 0) * me), n.uniform1f(C.hFov, te(Number(H.hFovDeg || 90), 0.1, 179) * me), n.uniform1f(C.vFov, te(Number(H.vFovDeg || 60), 0.1, 179) * me), n.uniform1f(C.paintOpacity, te(Number(D.paintOpacity ?? 1), 0, 1)), n.uniform1f(C.maskOpacity, te(Number(D.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(C.hasPaint, d != null ? 1 : 0), n.uniform1i(C.hasMask, M != null ? 1 : 0), n.uniform1i(C.showMaskTint, D.showMaskTint === !1 ? 0 : 1), n.uniform3f(C.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), e;
  }
  function Ne(w, D, H) {
    var et;
    if (!((et = w == null ? void 0 : w.stickers) != null && et.length) || !(D != null && D.length)) return;
    const q = (H == null ? void 0 : H.mode) === "unwrap" ? 0 : (H == null ? void 0 : H.mode) === "cutout" ? 2 : 1, Y = ra(H, T.width, T.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, G = Do(Y.yawDeg, Y.pitchDeg, Y.rollDeg), tt = /* @__PURE__ */ new Map();
    D.forEach((Z) => {
      const vt = j(Z);
      vt && tt.set(String(Z.assetId || ""), vt);
    }), n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), At(s), n.uniform1i(F.texture, 0), n.uniform1i(F.mode, q), n.uniform3f(F.viewRight, G.right.x, G.right.y, G.right.z), n.uniform3f(F.viewUp, G.up.x, G.up.y, G.up.z), n.uniform3f(F.viewFwd, G.fwd.x, G.fwd.y, G.fwd.z), n.uniform1f(F.viewHfov, te(Number(Y.hFovDeg || 90), 0.1, 179) * me), n.uniform1f(F.viewVfov, te(Number(Y.vFovDeg || 60), 0.1, 179) * me), [...w.stickers].sort((Z, vt) => Number((Z == null ? void 0 : Z.zIndex) || 0) - Number((vt == null ? void 0 : vt.zIndex) || 0)).forEach((Z) => {
      const vt = tt.get(String((Z == null ? void 0 : Z.assetId) || ""));
      if (!vt) return;
      const rt = D1(Z), St = rt.crop;
      n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, vt), n.uniform3f(F.stickerRight, rt.right.x, rt.right.y, rt.right.z), n.uniform3f(F.stickerUp, rt.up.x, rt.up.y, rt.up.z), n.uniform3f(F.stickerFwd, rt.fwd.x, rt.fwd.y, rt.fwd.z), n.uniform1f(F.stickerTanX, Math.max(1e-6, rt.tanX)), n.uniform1f(F.stickerTanY, Math.max(1e-6, rt.tanY)), n.uniform4f(
        F.crop,
        te(Number(St.x0 ?? 0), 0, 1),
        te(Number(St.y0 ?? 0), 0, 1),
        te(Number(St.x1 ?? 1), 0, 1),
        te(Number(St.y1 ?? 1), 0, 1)
      ), n.uniform1f(F.opacity, rt.opacity), n.drawArrays(n.TRIANGLES, 0, 6);
    }), n.disable(n.BLEND);
  }
  function je(w) {
    return !Nt() || !v ? null : (Mt({
      mode: "panorama",
      yawDeg: (w == null ? void 0 : w.yawDeg) || 0,
      pitchDeg: (w == null ? void 0 : w.pitchDeg) || 0,
      fovDeg: (w == null ? void 0 : w.fovDeg) || 100
    }, w), e);
  }
  function Me(w) {
    return !Nt() || !v ? null : (Mt({ mode: "unwrap" }, w), e);
  }
  function Ue(w) {
    return !Nt() || !v ? null : (Mt({
      mode: "cutout",
      yawDeg: (w == null ? void 0 : w.yawDeg) || 0,
      pitchDeg: (w == null ? void 0 : w.pitchDeg) || 0,
      rollDeg: (w == null ? void 0 : w.rollDeg) || 0,
      hFovDeg: (w == null ? void 0 : w.hFovDeg) || 90,
      vFovDeg: (w == null ? void 0 : w.vFovDeg) || 60
    }, w), e);
  }
  function Ae(w = {}) {
    if (!J() || ($(w.width, w.height, w.dpr || 1), !Nt())) return null;
    const D = Object.prototype.hasOwnProperty.call(w, "backgroundSource"), H = Object.prototype.hasOwnProperty.call(w, "paintSource"), q = Object.prototype.hasOwnProperty.call(w, "maskSource"), Y = Object.prototype.hasOwnProperty.call(w, "textures"), G = Object.prototype.hasOwnProperty.call(w, "scene");
    return D && lt(w.backgroundSource, w.backgroundRevision ?? ""), H && X(w.paintSource, w.paintRevision ?? ""), q && nt(w.maskSource, w.maskRevision ?? ""), Y && (ot(w.textures || []), K.textures = w.textures || []), G && (K.scene = w.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(w, "backgroundOpacity") && (K.backgroundOpacity = Number(w.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(w, "showMaskTint") && (K.showMaskTint = w.showMaskTint === !0), Object.prototype.hasOwnProperty.call(w, "coverageDeg") && (K.coverageDeg = Number(w.coverageDeg || 360) === 180 ? 180 : 360), v && Mt(w.view, {
      ...w,
      backgroundOpacity: Number(w.backgroundOpacity ?? K.backgroundOpacity ?? 1),
      coverageDeg: Number(w.coverageDeg || K.coverageDeg || 360) === 180 ? 180 : 360
    }), ae(w.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }, {
      ...K,
      ...w,
      showMaskTint: w.showMaskTint ?? K.showMaskTint ?? !1
    }), Ne(
      K.scene || { stickers: [] },
      K.textures || [],
      w.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), e;
  }
  function on(w = {}) {
    return J() ? !!Ae({
      ...w,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(w.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(e.width || 1),
      height: Number(e.height || 1),
      dpr: 1
    }) : !1;
  }
  function sn(w, D, H) {
    const q = Math.max(1, Number((w == null ? void 0 : w.viewportWidth) || T.sourceWidth || T.width || 1)), Y = Math.max(1, Number((w == null ? void 0 : w.viewportHeight) || T.sourceHeight || T.height || 1)), G = Number(D), tt = Number(H);
    if (!Number.isFinite(G) || !Number.isFinite(tt)) return null;
    if ((w == null ? void 0 : w.mode) === "unwrap")
      return { u: (G / q % 1 + 1) % 1, v: te(tt / Y, 0, 1) };
    const st = ra(w, q, Y);
    if (!st) return null;
    const et = Do(st.yawDeg, st.pitchDeg, st.rollDeg), Z = (G - q * 0.5) / (q * 0.5) * Math.tan(te(st.hFovDeg, 1, 179) * me * 0.5), vt = (Y * 0.5 - tt) / (Y * 0.5) * Math.tan(te(st.vFovDeg, 0.1, 179) * me * 0.5), rt = la(Ko(Ko(Si(et.right, Z), Si(et.up, vt)), et.fwd));
    return {
      u: (Math.atan2(rt.x, rt.z) / ph + 0.5 + 1) % 1,
      v: te(0.5 - Math.asin(te(rt.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function mn(w, D, H) {
    const q = Math.max(1, Number((w == null ? void 0 : w.viewportWidth) || T.sourceWidth || T.width || 1)), Y = Math.max(1, Number((w == null ? void 0 : w.viewportHeight) || T.sourceHeight || T.height || 1));
    if ((w == null ? void 0 : w.mode) === "unwrap")
      return {
        x: (Number(D || 0) % 1 + 1) % 1 * q,
        y: te(Number(H || 0), 0, 1) * Y,
        visible: !0
      };
    const G = ra(w, q, Y);
    if (!G)
      return { x: q * 0.5, y: Y * 0.5, visible: !1 };
    const tt = Do(G.yawDeg, G.pitchDeg, G.rollDeg), st = C1(D, H), et = To(st, tt.right), Z = To(st, tt.up), vt = To(st, tt.fwd);
    if (vt <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const rt = q * 0.5 + et / vt * (q * 0.5 / Math.tan(te(G.hFovDeg, 1, 179) * me * 0.5)), St = Y * 0.5 - Z / vt * (Y * 0.5 / Math.tan(te(G.vFovDeg, 0.1, 179) * me * 0.5));
    return { x: rt, y: St, visible: rt >= 0 && rt <= q && St >= 0 && St <= Y };
  }
  return {
    init: J,
    dispose: xt,
    setViewport: $,
    setBackgroundErp: lt,
    setPaintErp: X,
    setMaskErp: nt,
    renderPanorama: je,
    renderUnwrap: Me,
    renderCutout: Ue,
    renderScene: Ae,
    syncState: on,
    screenToErpUv: sn,
    erpUvToScreen: mn,
    getCanvas() {
      return e;
    },
    isSupported() {
      return J();
    },
    getViewport() {
      return { ...T };
    }
  };
}
function mf(t, e = 1, n = 16384) {
  const r = Math.round(Number(t || e));
  return Math.min(n, Math.max(1, Number.isFinite(r) ? r : 1));
}
function R1() {
  const t = /* @__PURE__ */ new Map();
  function e(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, g) {
    const y = e(u);
    let v = t.get(y) || null;
    if (!v) {
      const P = document.createElement("canvas"), T = P.getContext("2d");
      if (!T) return null;
      v = {
        id: y,
        canvas: P,
        ctx: T,
        width: 0,
        height: 0
      }, t.set(y, v);
    }
    const d = mf(f), M = mf(g);
    return v.width !== d && (v.canvas.width = d, v.width = d), v.height !== M && (v.canvas.height = M, v.height = M), v;
  }
  function r(u) {
    return t.get(e(u)) || null;
  }
  function a(u) {
    const f = r(u);
    f && f.ctx.clearRect(0, 0, f.canvas.width, f.canvas.height);
  }
  function s() {
    t.clear();
  }
  return {
    ensureTarget: n,
    getTarget: r,
    clearTarget: a,
    dispose: s
  };
}
const O1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), F1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function gh(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function V1(t, e) {
  return t === "paint" || t === "mask" || t === "raster" ? !1 : e !== !1;
}
function H1(t = {}) {
  const e = F1.has(String((t == null ? void 0 : t.type) || "")) ? String(t.type) : "erp_image", n = Number((t == null ? void 0 : t.opacity) ?? 1);
  return {
    type: e,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    coverageDeg: Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? gh(n, 0, 1) : 1,
    visible: (t == null ? void 0 : t.visible) !== !1
  };
}
function $1(t = {}) {
  const e = String((t == null ? void 0 : t.type) || "");
  if (!O1.has(e)) return null;
  const n = Number((t == null ? void 0 : t.opacity) ?? 1), r = Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0);
  return {
    id: String((t == null ? void 0 : t.id) || ""),
    type: e,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    visible: (t == null ? void 0 : t.visible) !== !1,
    opacity: Number.isFinite(n) ? gh(n, 0, 1) : 1,
    zIndex: Number.isFinite(r) ? r : 0,
    coverageAware: V1(e, t == null ? void 0 : t.coverageAware),
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  };
}
function z1(t = {}) {
  return {
    objects: (Array.isArray(t == null ? void 0 : t.objects) ? t.objects : []).map((r) => $1(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const s = Number((r == null ? void 0 : r.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return s !== u ? s - u : String((r == null ? void 0 : r.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (t == null ? void 0 : t.selectedId) ?? null,
    hoveredId: (t == null ? void 0 : t.hoveredId) ?? null
  };
}
function hl(t = {}) {
  return {
    stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
    background: H1((t == null ? void 0 : t.background) || {}),
    objectPass: z1((t == null ? void 0 : t.objectPass) || {}),
    overlay: t != null && t.overlay && typeof t.overlay == "object" ? { ...t.overlay } : {}
  };
}
function j1(t = {}) {
  var a, s, u, f, g, y, v, d;
  if (t != null && t.background || t != null && t.objectPass || t != null && t.overlay) {
    const M = hl(t), P = Array.isArray((a = M.objectPass) == null ? void 0 : a.objects) ? M.objectPass.objects : [], T = {
      stickers: P.filter((A) => A.type === "sticker").map((A) => {
        var V, R, K, E, ct, J, xt, $, at, Q, wt, lt, X;
        return {
          id: A.id,
          assetId: String(((V = A == null ? void 0 : A.params) == null ? void 0 : V.assetId) || ((R = A == null ? void 0 : A.params) == null ? void 0 : R.asset_id) || (A == null ? void 0 : A.id) || ""),
          yawDeg: Number(((K = A == null ? void 0 : A.transform) == null ? void 0 : K.yawDeg) ?? ((E = A == null ? void 0 : A.params) == null ? void 0 : E.yawDeg) ?? 0),
          pitchDeg: Number(((ct = A == null ? void 0 : A.transform) == null ? void 0 : ct.pitchDeg) ?? ((J = A == null ? void 0 : A.params) == null ? void 0 : J.pitchDeg) ?? 0),
          rollDeg: Number(((xt = A == null ? void 0 : A.transform) == null ? void 0 : xt.rollDeg) ?? (($ = A == null ? void 0 : A.params) == null ? void 0 : $.rollDeg) ?? 0),
          hFovDeg: Number(((at = A == null ? void 0 : A.transform) == null ? void 0 : at.hFovDeg) ?? ((Q = A == null ? void 0 : A.params) == null ? void 0 : Q.hFovDeg) ?? 30),
          vFovDeg: Number(((wt = A == null ? void 0 : A.transform) == null ? void 0 : wt.vFovDeg) ?? ((lt = A == null ? void 0 : A.params) == null ? void 0 : lt.vFovDeg) ?? 30),
          crop: ((X = A == null ? void 0 : A.params) == null ? void 0 : X.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((A == null ? void 0 : A.opacity) ?? 1),
          visible: (A == null ? void 0 : A.visible) !== !1,
          zIndex: Number((A == null ? void 0 : A.zIndex) ?? 0)
        };
      }),
      selectedId: ((s = M.objectPass) == null ? void 0 : s.selectedId) ?? null,
      hoveredId: ((u = M.objectPass) == null ? void 0 : u.hoveredId) ?? null
    }, I = P.filter((A) => A.type === "sticker").map((A) => {
      var V, R;
      return {
        assetId: String(((V = A == null ? void 0 : A.params) == null ? void 0 : V.assetId) || ((R = A == null ? void 0 : A.params) == null ? void 0 : R.asset_id) || (A == null ? void 0 : A.id) || ""),
        source: A.source || null,
        revision: String((A == null ? void 0 : A.revision) || "")
      };
    }).filter((A) => A.assetId && A.source), C = P.find((A) => A.type === "paint") || null, F = P.find((A) => A.type === "mask") || null;
    return {
      stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
      backgroundSource: ((f = M.background) == null ? void 0 : f.source) || null,
      backgroundRevision: String(((g = M.background) == null ? void 0 : g.revision) || ""),
      coverageDeg: Number(((y = M.background) == null ? void 0 : y.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (C == null ? void 0 : C.source) || null,
      paintRevision: String((C == null ? void 0 : C.revision) || ""),
      maskSource: (F == null ? void 0 : F.source) || null,
      maskRevision: String((F == null ? void 0 : F.revision) || ""),
      textures: I,
      scene: T,
      backgroundOpacity: Number(((v = M.background) == null ? void 0 : v.opacity) ?? 1),
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
function U1(t) {
  let e = null;
  function n(s = {}) {
    const u = j1(s);
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
function Fa(t = {}) {
  const e = typeof (t == null ? void 0 : t.rendererFactory) == "function" ? t.rendererFactory : (C) => L1(C), n = typeof (t == null ? void 0 : t.targetPoolFactory) == "function" ? t.targetPoolFactory : () => R1(), r = typeof (t == null ? void 0 : t.stateControllerFactory) == "function" ? t.stateControllerFactory : (C) => U1(C), a = e(t), s = (t == null ? void 0 : t.targetCanvas) || null, u = n();
  let f = null;
  const g = r({
    syncState(C = {}) {
      if (typeof a.syncState == "function") {
        const F = { ...C }, A = a.syncState(F);
        return A && (f = F, A);
      }
      return f = { ...C }, !0;
    }
  });
  function y(C = {}) {
    return g.sync(C);
  }
  function v(C = {}, F = {}) {
    return f ? a.renderScene({
      ...f,
      view: C,
      width: F.width,
      height: F.height,
      dpr: F.dpr,
      backgroundOpacity: F.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: F.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function d(C, F, A = {}, V = {}) {
    if (!F) return !1;
    const R = v(A, {
      ...V,
      width: F.w,
      height: F.h
    });
    return R ? C ? (C.canvas && R === C.canvas || C.drawImage(R, F.x, F.y, F.w, F.h), !0) : !!s && R === s : !1;
  }
  function M(C, F = {}, A = {}) {
    const V = Number(A.width || 0), R = Number(A.height || 0);
    if (!(V > 0) || !(R > 0)) return null;
    const K = u.ensureTarget(C, V, R);
    if (!K) return null;
    const E = v(F, {
      ...A,
      width: V,
      height: R
    });
    return E ? (K.ctx.clearRect(0, 0, K.canvas.width, K.canvas.height), K.ctx.drawImage(E, 0, 0, K.canvas.width, K.canvas.height), K.canvas) : null;
  }
  function P(C) {
    u.clearTarget(C);
  }
  function T() {
    var C;
    u.dispose(), (C = a.dispose) == null || C.call(a), f = null;
  }
  function I() {
    f = null, g.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: y,
    renderView: v,
    renderToContext: d,
    renderToTarget: M,
    clearTarget: P,
    snapshotState: g.snapshot,
    clearState: I,
    dispose: T
  };
}
function B1(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function pl(t = {}, e = "paint") {
  const n = String((t == null ? void 0 : t.type) || e), r = Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0), a = Number((t == null ? void 0 : t.opacity) ?? 1);
  return {
    id: String((t == null ? void 0 : t.id) || `${n}_layer`),
    type: n,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    zIndex: Number.isFinite(r) ? r : 0,
    opacity: Number.isFinite(a) ? B1(a, 0, 1) : 1,
    visible: (t == null ? void 0 : t.visible) !== !1,
    coverageAware: !1,
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  };
}
function G1(t, e, n = {}) {
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
function K1(t, e, n = {}) {
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
function W1(t, e, n = {}) {
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
function q1(t = {}) {
  const e = [], n = G1(t == null ? void 0 : t.paintSource, t == null ? void 0 : t.paintRevision, t == null ? void 0 : t.paintOptions), r = K1(t == null ? void 0 : t.maskSource, t == null ? void 0 : t.maskRevision, t == null ? void 0 : t.maskOptions), a = Array.isArray(t == null ? void 0 : t.rasterEntries) ? t.rasterEntries : [];
  return n && e.push(n), r && e.push(r), a.forEach((s, u) => {
    const f = W1(
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
      visible: (r == null ? void 0 : r.visible) !== !1,
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
function vs(t = {}) {
  const e = (t == null ? void 0 : t.backgroundSource) || null, n = Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360, r = String((t == null ? void 0 : t.stateRevision) || ""), a = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, s = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], u = String((t == null ? void 0 : t.backgroundRevision) || [
    String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
    Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
    Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
  ].join("|"));
  return hl({
    stateRevision: r,
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
function yf(t = {}) {
  const e = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], r = mh(e, n), a = q1({
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
function Y1() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function bf(t, e = 8) {
  var v;
  const n = (v = t == null ? void 0 : t.getContext) == null ? void 0 : v.call(t, "2d"), r = Number((t == null ? void 0 : t.width) || 0), a = Number((t == null ? void 0 : t.height) || 0);
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
function jn(t, e, n) {
  if (!t) return _i(e, n);
  const r = Math.max(1, Math.round(e)), a = Math.max(1, Math.round(n));
  return (t.canvas.width !== r || t.canvas.height !== a) && (t.canvas.width = r, t.canvas.height = a, t.ctx.imageSmoothingEnabled = !0), t;
}
function le(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let pc = null, gc = null, vf = null, _f = null, Xt = null, ia = null, qe = null, Nr = null;
function X1() {
  if (gc) return gc;
  const t = 6, e = 17, n = document.createElement("canvas");
  n.width = e, n.height = e;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e, e), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = t, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(e, e), r.moveTo(-e / 2, e / 2), r.lineTo(e / 2, e + e / 2), r.moveTo(e / 2, -e / 2), r.lineTo(e + e / 2, e / 2), r.stroke(), gc = n, n;
}
function pi(t, e) {
  if (!t || !e) return;
  const n = e.width, r = e.height;
  pc = jn(pc, n, r);
  const a = pc;
  le(a), a.ctx.drawImage(e, 0, 0), a.ctx.globalCompositeOperation = "source-in", _f !== a.ctx && (vf = a.ctx.createPattern(X1(), "repeat"), _f = a.ctx), a.ctx.fillStyle = vf, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(a.canvas, 0, 0), t.restore();
}
function Z1(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function J1(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function Q1(t, e) {
  const n = Number(t == null ? void 0 : t.radiusValue), r = String((t == null ? void 0 : t.radiusModel) || "").trim(), a = (e == null ? void 0 : e.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function ty(t, e) {
  const n = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * e * 2);
  const r = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * e * 2);
}
const he = /* @__PURE__ */ new Map(), ml = 128;
function ey(t, e, n, r, a, s) {
  const u = Math.max(1, Math.round(t)), f = Math.max(0, Math.min(1, e)), g = `${u}:${f.toFixed(2)}:${n}:${r}:${a}:${s.toFixed(3)}`;
  if (he.has(g)) {
    const A = he.get(g);
    return he.delete(g), he.set(g, A), A;
  }
  he.size >= ml && he.delete(he.keys().next().value);
  const y = u * 2 + 2, v = u + 1, d = gl(y, y), M = d.getContext("2d"), P = f * u, T = u + 1, I = `rgba(${n},${r},${a},${s})`, C = `rgba(${n},${r},${a},0)`, F = M.createRadialGradient(v, v, P, v, v, T);
  return F.addColorStop(0, I), F.addColorStop(1, C), M.fillStyle = F, M.fillRect(0, 0, y, y), he.set(g, d), d;
}
function ny(t, e, n, r, a, s, u) {
  const { r: f, g, b: y, a: v } = r, d = Math.max(2, Math.ceil(t) * 2), M = Math.max(2, Math.ceil(e) * 2), P = Math.max(0, a), T = Math.max(0, Math.min(0.99, s)), I = Math.max(0, Math.min(1, u ?? 0)), C = `chisel:${d}:${M}:${n.toFixed(2)}:${f}:${g}:${y}:${v.toFixed(3)}:${P.toFixed(2)}:${T.toFixed(2)}:${I.toFixed(2)}`;
  if (he.has(C)) {
    const J = he.get(C);
    return he.delete(C), he.set(C, J), J;
  }
  he.size >= ml && he.delete(he.keys().next().value);
  const F = gl(d, M), A = F.getContext("2d"), V = A.createImageData(d, M), R = V.data, K = Math.max(0, t - e), E = Math.max(0, Math.min(1, n)), ct = 1 + P;
  for (let J = 0; J < M; J++)
    for (let xt = 0; xt < d; xt++) {
      const $ = xt + 0.5 - t, at = J + 0.5 - e, Q = Math.max(Math.abs($) - K, 0), lt = Math.hypot(Q, at) / e;
      if (lt >= 1) continue;
      const X = lt <= E ? 1 : Math.max(0, (1 - lt) / Math.max(1e-4, 1 - E)), nt = 1 - lt, it = 1 + P * (1 - nt) * (1 - nt), j = 1 - T * nt * nt, ot = it * j / ct;
      let Nt = 1;
      if (I > 0) {
        const ae = Math.floor((at + e) / 1.5), Ne = Math.floor(($ + t) / 8), je = Gr(Ei(ae * 41 + 500, Ne * 19 + 300));
        Nt = 1 - I * 0.42 * je;
      }
      const At = Math.round(255 * Math.min(1, v * X * ot * Nt));
      if (At <= 0) continue;
      const Mt = (J * d + xt) * 4;
      R[Mt] = f, R[Mt + 1] = g, R[Mt + 2] = y, R[Mt + 3] = At;
    }
  return A.putImageData(V, 0, 0), he.set(C, F), F;
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
function ry(t, e, n, r, a, s, u) {
  const f = t + 0.5 - n, g = e + 0.5 - r, y = Math.max(0, n - r), v = Math.max(Math.abs(f) - y, 0), d = Math.hypot(v, g) / r;
  if (d >= 1) return 0;
  const M = Gr(Ei(t * 17 + 3, e * 13 + 7)), P = d + s * 0.22 * (M - 0.5);
  if (P >= 1) return 0;
  const T = P <= a ? 1 : Math.max(0, (1 - P) / Math.max(1e-4, 1 - a)), I = iy(t, e, f, g, n, r), C = s * 0.55;
  if (I < C) return 0;
  const A = 0.45 + 0.55 * ((I - C) / Math.max(1e-4, 1 - C));
  return Math.round(255 * Math.min(1, u * T * A));
}
function iy(t, e, n, r, a, s) {
  const u = Math.floor((n + a) / 3), f = Math.floor((r + s) / 2), g = Gr(Ei(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + a) / 1.5), v = Math.floor((r + s) / 1.5), d = Gr(Ei(y * 23 + 800, v * 29 + 500)), M = Gr(Ei(t * 3 + 100, e * 5 + 200));
  return g * 0.55 + d * 0.3 + M * 0.15;
}
function ay(t, e, n, r, a) {
  const { r: s, g: u, b: f, a: g } = r, y = Math.max(2, Math.ceil(t) * 2), v = Math.max(2, Math.ceil(e) * 2), d = Math.max(0, Math.min(1, a)), M = `crayon:${y}:${v}:${n.toFixed(2)}:${s}:${u}:${f}:${g.toFixed(3)}:${d.toFixed(2)}`;
  if (he.has(M)) {
    const A = he.get(M);
    return he.delete(M), he.set(M, A), A;
  }
  he.size >= ml && he.delete(he.keys().next().value);
  const P = gl(y, v), T = P.getContext("2d"), I = T.createImageData(y, v), C = I.data, F = Math.max(0, Math.min(1, n));
  for (let A = 0; A < v; A++)
    for (let V = 0; V < y; V++) {
      const R = ry(V, A, t, e, F, d, g);
      if (R <= 0) continue;
      const K = (A * y + V) * 4;
      C[K] = s, C[K + 1] = u, C[K + 2] = f, C[K + 3] = R;
    }
  return T.putImageData(I, 0, 0), he.set(M, P), P;
}
function yh(t, e, n) {
  var I, C;
  const r = String((e == null ? void 0 : e.stampKind) || "round"), a = Q1(e, n), s = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), u = oy(e), f = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), g = Number(((I = e == null ? void 0 : e.angle) == null ? void 0 : I.value) ?? 0), y = ty(e, a), v = String(((C = e == null ? void 0 : e.targetSpace) == null ? void 0 : C.viewMode) || ""), d = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && v !== "unwrap", M = e == null ? void 0 : e.scatter, P = M ? { radius: Number(M.radius ?? 1.5), count: Math.max(1, Math.round(M.count ?? 6)) } : null;
  let T;
  if (r === "chisel") {
    const F = a * f, A = a, V = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), R = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), K = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    T = ny(F, A, s, u, V, R, K);
  } else if (r === "crayon") {
    const F = a * f, A = a, V = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    T = ay(F, A, s, u, V);
  } else
    T = ey(a, s, u.r, u.g, u.b, u.a);
  return { ctx: t, stampTex: T, radiusPx: a, spacingPx: y, desc: n, aspect: f, angle: g, stampKind: r, scatter: P, latitudeCorrection: d };
}
function oy(t) {
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
function sy(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const r = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${a})`;
}
function xf(t, e, n, r, a) {
  const s = t.angle, u = t.desc.width;
  function f(y, v) {
    s === 0 ? t.ctx.drawImage(t.stampTex, y - a, v - r, a * 2, r * 2) : (t.ctx.save(), t.ctx.translate(y, v), t.ctx.rotate(s), t.ctx.drawImage(t.stampTex, -a, -r, a * 2, r * 2), t.ctx.restore());
  }
  f(e, n);
  const g = s === 0 ? a : a * Math.abs(Math.cos(s)) + r * Math.abs(Math.sin(s));
  e - g < 0 && f(e + u, n), e + g > u && f(e - u, n);
}
function yl(t, e, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (t.scatter) {
    const { radius: y, count: v } = t.scatter, d = y * t.radiusPx * a, M = Ei(e, n);
    for (let P = 0; P < v; P++) {
      const T = Gr(M + P * 2) * Math.PI * 2, I = Math.sqrt(Gr(M + P * 2 + 1)) * d, C = e + Math.cos(T) * I, F = n + Math.sin(T) * I, A = Math.max(0.5, t.radiusPx * a * 0.48), V = (0.5 - F / Math.max(1, t.desc.height)) * Math.PI, R = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(V)) : 1, K = A * t.aspect * R;
      xf(t, C, F, A, K);
    }
    return;
  }
  const s = Math.max(0.5, t.radiusPx * a), u = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, f = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, g = s * t.aspect * f;
  xf(t, e, n, s, g);
}
function wf(t, e, n) {
  const r = J1(e);
  if (!t || r.length === 0) return;
  const a = n.width, s = n.height, u = yh(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const f = [];
  for (let M = 0; M < r.length; M++) {
    let P = Number(r[M].u || 0) * a;
    const T = Number(r[M].v || 0) * s;
    M > 0 && Math.abs(P - f[M - 1].x) > a * 0.5 && (P += P < f[M - 1].x ? a : -a), f.push({ x: P, y: T });
  }
  if (yl(u, f[0].x, f[0].y, 1), f.length === 1) {
    t.restore();
    return;
  }
  let g = f[0], y = f[0], v = f[0], d = 0;
  for (let M = 1; M < f.length; M++) {
    const P = f[M], T = { x: (y.x + P.x) * 0.5, y: (y.y + P.y) * 0.5 };
    M === 1 ? d = Ta(u, v.x, v.y, T.x, T.y, d) : d = Wo(u, g, v, T, P, d), g = y, y = P, v = T;
  }
  f.length === 2 ? Ta(u, v.x, v.y, y.x, y.y, d) : Wo(u, g, v, y, y, d), t.restore();
}
function Lo(t, e, n) {
  var d;
  const r = Array.isArray((d = e == null ? void 0 : e.geometry) == null ? void 0 : d.points) ? e.geometry.points : [];
  if (!t || r.length < 3) return;
  const a = n.width, s = n.height, u = sy(e), f = [];
  let g = 1 / 0, y = -1 / 0;
  for (let M = 0; M < r.length; M++) {
    const P = Z1(r[M]);
    let T = Number(P.x || 0) * a;
    M > 0 && Math.abs(T - f[M - 1].x) > a * 0.5 && (T += T < f[M - 1].x ? a : -a), f.push({ x: T, y: Number(P.y || 0) * s }), T < g && (g = T), T > y && (y = T);
  }
  function v(M) {
    t.beginPath(), t.moveTo(f[0].x + M, f[0].y);
    for (let P = 1; P < f.length; P++) t.lineTo(f[P].x + M, f[P].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = u, v(0), g < 0 && v(a), y > a && v(-a), t.restore();
}
function so(t, e, n) {
  var u;
  if (String(((u = e == null ? void 0 : e.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Lo(t, e, n);
    return;
  }
  const s = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  s >= 0.999 ? wf(t, e, n) : (ia = jn(ia, n.width, n.height), le(ia), wf(ia.ctx, e, n), t.save(), t.globalAlpha = s, t.drawImage(ia.canvas, 0, 0), t.restore());
}
function Mr(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function Ta(t, e, n, r, a, s) {
  const u = r - e, f = a - n, g = Math.hypot(u, f);
  if (g < 1e-9) return s;
  let y = t.spacingPx - s;
  for (; y <= g; ) {
    const v = y / g;
    yl(t, e + u * v, n + f * v, 1), y += t.spacingPx;
  }
  return g - y + t.spacingPx;
}
function Wo(t, e, n, r, a, s) {
  const f = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, g = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, v = 0, d = f, M = d + g, P = M + y, T = M - d, I = 16;
  let C = s, F = n.x, A = n.y;
  for (let V = 1; V <= I; V++) {
    const R = d + T * V / I, K = ((d - R) * e.x + (R - v) * n.x) / (d - v), E = ((d - R) * e.y + (R - v) * n.y) / (d - v), ct = ((M - R) * n.x + (R - d) * r.x) / (M - d), J = ((M - R) * n.y + (R - d) * r.y) / (M - d), xt = ((P - R) * r.x + (R - M) * a.x) / (P - M), $ = ((P - R) * r.y + (R - M) * a.y) / (P - M), at = ((M - R) * K + (R - v) * ct) / (M - v), Q = ((M - R) * E + (R - v) * J) / (M - v), wt = ((P - R) * ct + (R - d) * xt) / (P - d), lt = ((P - R) * J + (R - d) * $) / (P - d), X = ((M - R) * at + (R - d) * wt) / (M - d), nt = ((M - R) * Q + (R - d) * lt) / (M - d);
    C = Ta(t, F, A, X, nt, C), F = X, A = nt;
  }
  return C;
}
function cy(t, e, n, r) {
  const a = t.currentStroke.ctx;
  if (!a) return;
  const s = t.descriptor, u = s.width, f = n * s.height, g = t.activeStroke;
  let y = e * u;
  if (g && Math.abs(y - g.prev.x) > u * 0.5 && (y += y < g.prev.x ? u : -u), !g) {
    const P = yh(a, r, s), T = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), I = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), C = String((r == null ? void 0 : r.toolKind) || "") === "eraser", F = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", yl(P, y, f, 1), t.activeStroke = {
      pprev: { x: y, y: f },
      prev: { x: y, y: f },
      lastMidX: y,
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
      velocityWidthFactor: I,
      distSinceStamp: 0,
      isEraser: C,
      layerKind: F,
      pointCount: 1
    }, t.displayDirty = !0;
    return;
  }
  const v = (g.prev.x + y) * 0.5, d = (g.prev.y + f) * 0.5;
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
  g.pointCount === 1 ? g.distSinceStamp = Ta(M, g.lastMidX, g.lastMidY, v, d, g.distSinceStamp) : g.distSinceStamp = Wo(
    M,
    g.pprev,
    { x: g.lastMidX, y: g.lastMidY },
    { x: v, y: d },
    { x: y, y: f },
    g.distSinceStamp
  ), g.pprev = g.prev, g.prev = { x: y, y: f }, g.lastMidX = v, g.lastMidY = d, g.pointCount++, t.displayDirty = !0;
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
  let y = null, v = "", d = null;
  function M($) {
    return {
      actionGroupId: $,
      descriptor: r,
      committedPaint: _i(e, n),
      currentStroke: s,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function P($) {
    let at = a.get($);
    return at || (at = M($), a.set($, at)), at;
  }
  function T($) {
    return v === "mask" ? u : y ? P(y) : f;
  }
  function I($) {
    var j;
    const at = !d || d.length !== $.length || $.some((ot, Nt) => ot !== d[Nt]), Q = v === "paint" && ((j = y ? a.get(y) : f) == null ? void 0 : j.activeStroke) || null, wt = v === "mask", lt = u.activeStroke;
    let X = u.displayDirty || f.displayDirty || at;
    for (const ot of $) {
      const Nt = a.get(ot);
      if (Nt != null && Nt.displayDirty) {
        X = !0;
        break;
      }
    }
    if ((Q || wt && lt) && (X = !0), !X) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const ot of $) {
      const Nt = a.get(ot);
      Nt && (Nt.displayDirty = !1);
    }
    d = [...$];
    const nt = g.ctx;
    le(g);
    const it = !!(Q != null && Q.isEraser);
    for (const ot of $) {
      const Nt = a.get(ot);
      if (!Nt) continue;
      const Mt = y === Nt.actionGroupId && v === "paint" ? Nt.activeStroke : null;
      if (it)
        Xt = jn(Xt, e, n), le(Xt), Xt.ctx.drawImage(Nt.committedPaint.canvas, 0, 0), Mr(Xt.ctx, s.canvas), nt.drawImage(Xt.canvas, 0, 0);
      else if (nt.drawImage(Nt.committedPaint.canvas, 0, 0), Mt) {
        const ae = Nt.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Mt.strokeOpacity ?? 1));
        nt.save(), nt.globalAlpha = ae, nt.drawImage(s.canvas, 0, 0), nt.restore();
      }
    }
    wt && (lt != null && lt.isEraser) ? (Xt = jn(Xt, e, n), le(Xt), Xt.ctx.drawImage(u.committedMask.canvas, 0, 0), Mr(Xt.ctx, s.canvas), pi(nt, Xt.canvas)) : (pi(nt, u.committedMask.canvas), wt && lt && pi(nt, s.canvas));
  }
  function C($) {
    var Q, wt, lt, X, nt;
    for (const it of a.values())
      le(it.committedPaint), le(it.currentStroke), it.activeStroke = null, it.displayDirty = !0;
    le(u.committedMask), le(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, d = null;
    const at = [
      ...Array.isArray((wt = (Q = $ == null ? void 0 : $.painting) == null ? void 0 : Q.paint) == null ? void 0 : wt.strokes) ? $.painting.paint.strokes : [],
      ...Array.isArray((X = (lt = $ == null ? void 0 : $.painting) == null ? void 0 : lt.mask) == null ? void 0 : X.strokes) ? $.painting.mask.strokes : []
    ];
    for (const it of at) {
      if (((nt = it == null ? void 0 : it.targetSpace) == null ? void 0 : nt.kind) !== "ERP_GLOBAL") continue;
      const j = String((it == null ? void 0 : it.layerKind) || "paint"), Nt = String((it == null ? void 0 : it.toolKind) || "pen") === "eraser";
      if (j === "mask") {
        const At = u.descriptor;
        Nt ? (Xt = jn(Xt, At.width, At.height), le(Xt), so(Xt.ctx, it, At), Mr(u.committedMask.ctx, Xt.canvas)) : so(u.committedMask.ctx, it, At);
        continue;
      }
      if (Nt) {
        Xt = jn(Xt, r.width, r.height), le(Xt), so(Xt.ctx, it, r);
        for (const At of a.values())
          Mr(At.committedPaint.ctx, Xt.canvas), At.displayDirty = !0;
      } else {
        const At = String((it == null ? void 0 : it.actionGroupId) || "__default__"), Mt = P(At), ae = Mt.descriptor;
        so(Mt.committedPaint.ctx, it, ae), Mt.displayDirty = !0;
      }
    }
    I([...a.keys()]);
  }
  function F($, at) {
    v = String(($ == null ? void 0 : $.layerKind) || "");
    const Q = String(($ == null ? void 0 : $.toolKind) || "") === "eraser";
    if (v === "mask")
      y = null, le(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const wt = Q ? f : P(String(($ == null ? void 0 : $.actionGroupId) || "__default__"));
      y = Q ? "" : String(($ == null ? void 0 : $.actionGroupId) || "__default__"), le(wt.currentStroke), wt.activeStroke = null, wt.displayDirty = !0;
    }
  }
  function A($, at) {
    var j;
    const Q = String(($ == null ? void 0 : $.layerKind) || "paint"), wt = String(($ == null ? void 0 : $.toolKind) || "") === "eraser", lt = Q === "mask" ? u : wt ? f : P(String(($ == null ? void 0 : $.actionGroupId) || y || "__default__")), X = lt.activeStroke, nt = lt.descriptor;
    if (X && X.pointCount > 1) {
      const ot = lt.currentStroke.ctx;
      ot.globalCompositeOperation = "source-over";
      const Nt = {
        ctx: ot,
        stampTex: X.stampTex,
        radiusPx: X.radiusPx,
        spacingPx: X.spacingPx,
        desc: nt,
        aspect: X.aspect,
        angle: X.angle,
        stampKind: X.stampKind,
        scatter: X.scatter,
        latitudeCorrection: X.latitudeCorrection
      };
      X.pointCount === 2 ? Ta(Nt, X.lastMidX, X.lastMidY, X.prev.x, X.prev.y, X.distSinceStamp) : Wo(Nt, X.pprev, { x: X.lastMidX, y: X.lastMidY }, X.prev, X.prev, X.distSinceStamp);
    }
    lt.lassoPreviewActive && (le(lt.currentStroke), Lo(lt.currentStroke.ctx, $, nt), lt.lassoPreviewActive = !1);
    const it = Q === "mask" ? u.committedMask : lt.committedPaint;
    if (wt && Q === "paint")
      for (const ot of a.values())
        Mr(ot.committedPaint.ctx, lt.currentStroke.canvas), ot.displayDirty = !0;
    else if (wt)
      Mr(it.ctx, lt.currentStroke.canvas);
    else {
      const ot = Math.max(0, Math.min(1, (X == null ? void 0 : X.strokeOpacity) ?? 1));
      it.ctx.save(), it.ctx.globalAlpha = ot, it.ctx.drawImage(lt.currentStroke.canvas, 0, 0), it.ctx.restore();
    }
    Y1() && (String(($ == null ? void 0 : $.toolKind) || ""), String((nt == null ? void 0 : nt.kind) || ""), Number((nt == null ? void 0 : nt.width) || 0), Number((nt == null ? void 0 : nt.height) || 0), String(((j = $ == null ? void 0 : $.targetSpace) == null ? void 0 : j.viewMode) || ""), Number(($ == null ? void 0 : $.aspect) ?? 1), bf(lt.currentStroke.canvas), bf(it.canvas), void 0), le(lt.currentStroke), lt.activeStroke = null, lt.displayDirty = !0, y = null, v = "", I([...a.keys()]);
  }
  function V($) {
    if (v === "mask")
      le(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (v === "paint" && !y)
      le(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const at = a.get(y);
      at && (le(at.currentStroke), at.activeStroke = null, at.lassoPreviewActive = !1, at.displayDirty = !0);
    }
    y = null, v = "", I([...a.keys()]);
  }
  function R($, at) {
    var wt;
    if (v = String(($ == null ? void 0 : $.layerKind) || ""), String(((wt = $ == null ? void 0 : $.geometry) == null ? void 0 : wt.geometryKind) || "") === "lasso_fill") {
      if (v === "mask")
        le(u.currentStroke), Lo(u.currentStroke.ctx, $, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const lt = String(($ == null ? void 0 : $.toolKind) || "") === "eraser", X = lt ? f : P(String(($ == null ? void 0 : $.actionGroupId) || y || "__default__"));
        y = lt ? "" : String(($ == null ? void 0 : $.actionGroupId) || y || "__default__"), le(X.currentStroke), Lo(X.currentStroke.ctx, $, X.descriptor), X.lassoPreviewActive = !0, X.displayDirty = !0;
      }
      I([...a.keys()]);
    }
  }
  function K($) {
    return I($ ?? [...a.keys()]), {
      displayPaint: g,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function E($) {
    return a.get(String($)) ?? null;
  }
  function ct() {
    return [...a.keys()];
  }
  function J($) {
    var nt;
    const at = a.get(String($));
    if (!at) return null;
    const Q = v === "paint" && y === at.actionGroupId, wt = v === "paint" && ((nt = y ? a.get(y) : f) == null ? void 0 : nt.activeStroke) || null;
    if (wt != null && wt.isEraser)
      return qe = jn(qe, e, n), le(qe), qe.ctx.drawImage(at.committedPaint.canvas, 0, 0), Mr(qe.ctx, s.canvas), qe.canvas;
    const lt = Q ? at.activeStroke : null;
    if (!lt) return at.committedPaint.canvas;
    qe = jn(qe, e, n), le(qe), qe.ctx.drawImage(at.committedPaint.canvas, 0, 0);
    const X = at.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, lt.strokeOpacity ?? 1));
    return qe.ctx.save(), qe.ctx.globalAlpha = X, qe.ctx.drawImage(s.canvas, 0, 0), qe.ctx.restore(), qe.canvas;
  }
  function xt() {
    return Nr = jn(Nr, e, n), le(Nr), pi(Nr.ctx, u.committedMask.canvas), v === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Xt = jn(Xt, e, n), le(Xt), Xt.ctx.drawImage(u.committedMask.canvas, 0, 0), Mr(Xt.ctx, s.canvas), le(Nr), pi(Nr.ctx, Xt.canvas)) : pi(Nr.ctx, s.canvas)), Nr.canvas;
  }
  return {
    rebuildCommitted: C,
    beginStroke: F,
    appendStrokePoint: cy,
    updateActiveStroke: R,
    commitActiveStroke: A,
    cancelActiveStroke: V,
    getErpTarget: K,
    ensureTarget: T,
    getGroupTarget: E,
    getGroupDisplayCanvas: J,
    getMaskDisplayCanvas: xt,
    getAllGroupIds: ct
  };
}
function B(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Ro(t, e, n) {
  const r = Number(t);
  return Number.isFinite(r) ? Math.max(Number(e), Math.min(Number(n), r)) : Number(e);
}
function Le(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function ly(t, e) {
  let n = Le(e) - Le(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Sf = Math.PI / 180, Nf = 0.12, uy = 3, fy = 35, dy = 140, ua = 100, hy = 20, Mf = 0.8;
function py(t, e, n) {
  const r = Math.max(1, Number(e || 1)), a = Math.max(1, Number(n || 1)), s = B(Number(t || ua), 1, 179) * Sf;
  return 2 * Math.atan(Math.tan(s * 0.5) * (a / r)) / Sf;
}
function gy(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function _s(t = {}) {
  const e = typeof t.getView == "function" ? t.getView : (() => ({ yaw: 0, pitch: 0, fov: ua })), n = typeof t.setView == "function" ? t.setView : (() => {
  }), r = typeof t.getInvert == "function" ? t.getInvert : (() => ({ x: 1, y: 1 })), a = typeof t.getUnwrapRect == "function" ? t.getUnwrapRect : (() => ({ w: 1, h: 1 })), s = typeof t.getViewportSize == "function" ? t.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof t.onInteraction == "function" ? t.onInteraction : (() => {
  }), f = typeof t.onDebug == "function" ? t.onDebug : null, g = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(F, A = null) {
    f && f(F, A);
  }
  function v(F, A, V = null, R = performance.now()) {
    return g.drag.active = !0, g.drag.lastX = Number(F || 0), g.drag.lastY = Number(A || 0), g.drag.lastTs = Number(R || performance.now()), g.drag.pointerId = V, g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.lastTs = g.drag.lastTs, g.velHistory = [], y("drag", { phase: "start", x: g.drag.lastX, y: g.drag.lastY, pointerId: V }), !0;
  }
  function d(F, A, V = "pano", R = performance.now()) {
    if (!g.drag.active) return !1;
    const K = Number(R || performance.now()), E = Number(F), ct = Number(A), J = E - g.drag.lastX, xt = ct - g.drag.lastY;
    g.drag.lastX = E, g.drag.lastY = ct, g.drag.lastTs = K;
    const $ = r() || { x: 1, y: 1 }, at = Number($.x || 1), Q = Number($.y || 1), wt = { ...e() };
    let lt = 0, X = 0;
    if (V === "unwrap") {
      const it = a() || { w: 1, h: 1 }, j = Math.max(1, Number(it.w || 1)), ot = Math.max(1, Number(it.h || 1)), Nt = J / j, At = xt / ot;
      lt = -Nt * 360 * at, X = At * 180 * Q;
    } else {
      const it = s() || { w: 0, h: 0 }, j = Math.max(1, Number(it.w || 0)), ot = Math.max(1, Number(it.h || 0));
      if (j > 1 && ot > 1) {
        const Nt = B(Number(wt.fov || ua), 1, 179), At = B(py(Nt, j, ot), 0.1, 179);
        lt = -(J / j) * Nt * at, X = xt / ot * At * Q;
      } else
        lt = -J * Nf * at, X = xt * Nf * Q;
    }
    wt.yaw = Le(Number(wt.yaw || 0) + lt), wt.pitch = B(Number(wt.pitch || 0) + X, -89.9, 89.9), n(wt), g.velHistory.push({ ts: K, yaw: wt.yaw, pitch: wt.pitch });
    let nt = 0;
    for (; nt < g.velHistory.length - 1 && g.velHistory[nt].ts < K - 100; ) nt++;
    return nt > 0 && g.velHistory.splice(0, nt), g.inertia.active = !1, g.inertia.lastTs = K, u(), y("drag", { phase: "move", dx: J, dy: xt, dYaw: lt, dPitch: X }), !0;
  }
  function M(F = performance.now()) {
    if (!g.drag.active) return !1;
    g.drag.active = !1;
    const A = Number(F || performance.now());
    g.drag.lastTs = A;
    const V = g.velHistory.filter((K) => A - K.ts <= 80);
    if (V.length >= 2) {
      const K = V[0], E = V.at(-1), ct = Math.max(1e-3, (E.ts - K.ts) / 1e3);
      let J = E.yaw - K.yaw;
      J > 180 && (J -= 360), J < -180 && (J += 360), g.inertia.vx = J / ct, g.inertia.vy = (E.pitch - K.pitch) / ct;
    } else
      g.inertia.vx = 0, g.inertia.vy = 0;
    g.velHistory = [];
    const R = Math.hypot(g.inertia.vx, g.inertia.vy);
    return g.inertia.active = R > hy, g.inertia.lastTs = A, y("drag", { phase: "end", speed: R, inertiaActive: g.inertia.active }), !0;
  }
  function P(F = performance.now()) {
    if (!g.inertia.active) return !1;
    const A = Number(F || performance.now()), V = Math.max(1e-3, (A - (g.inertia.lastTs || A)) / 1e3);
    g.inertia.lastTs = A;
    const R = { ...e() };
    R.yaw = Le(Number(R.yaw || 0) + g.inertia.vx * V), R.pitch = B(Number(R.pitch || 0) + g.inertia.vy * V, -89.9, 89.9);
    const K = Math.exp(-5.5 * V);
    return g.inertia.vx *= K, g.inertia.vy *= K, Math.abs(g.inertia.vx) < Mf && Math.abs(g.inertia.vy) < Mf && (g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.active = !1), n(R), u(), g.inertia.active;
  }
  function T(F) {
    const A = Math.sign(Number(F || 0));
    if (!A) return !1;
    const V = { ...e() }, R = Number(V.fov || ua);
    return V.fov = B(R + A * uy, fy, dy), n(V), u(), y("wheel", { deltaSign: A, fovBefore: R, fovAfter: V.fov }), !0;
  }
  function I(F) {
    return T(Math.sign(gy(F)));
  }
  function C() {
    n({ yaw: 0, pitch: 0, fov: ua }), g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, u();
  }
  return {
    state: g,
    startDrag: v,
    moveDrag: d,
    endDrag: M,
    stepInertia: P,
    applyWheel: T,
    applyWheelEvent: I,
    resetView: C
  };
}
function Fc(t) {
  const e = String(t || "").trim();
  return e ? e === "PanoramaPreview" || e === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(e) : !1;
}
const Wr = Math.PI / 180;
function Mn(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) ? n : Number(e);
}
function qr(t, e, n) {
  return { x: t, y: e, z: n };
}
function qo(t, e) {
  return qr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Ni(t, e) {
  return qr(t.x * e, t.y * e, t.z * e);
}
function fa(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return qr(t.x / e, t.y / e, t.z / e);
}
function my(t, e) {
  const n = Number(t || 0) * Wr, r = Number(e || 0) * Wr, a = Math.cos(r);
  return qr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function kf(t, e) {
  return qr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function yy(t, e, n = 0) {
  const r = my(t, e), a = qr(0, 1, 0);
  let s = kf(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = qr(1, 0, 0)), s = fa(s);
  let u = fa(kf(r, s));
  const f = Number(n || 0) * Wr, g = Math.cos(f), y = Math.sin(f), v = qo(Ni(s, g), Ni(u, y)), d = qo(Ni(s, -y), Ni(u, g));
  return { fwd: r, right: fa(v), up: fa(d) };
}
function by(t, e, n, r = 0.45) {
  const a = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3, u = (f) => {
    const g = f.x - a, y = f.y - s, v = Math.hypot(g, y) || 1;
    return { x: f.x + g / v * r, y: f.y + y / v * r };
  };
  return [u(t), u(e), u(n)];
}
function Pf(t, e, n, r, a, s, u, f) {
  const g = n.x * (r.y - a.y) + r.x * (a.y - n.y) + a.x * (n.y - r.y);
  if (Math.abs(g) < 1e-6) return !1;
  const [y, v, d] = by(s, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(v.x, v.y), t.lineTo(d.x, d.y), t.closePath(), t.clip();
  const M = (s.x * (r.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - r.y)) / g, P = (s.x * (a.x - r.x) + u.x * (n.x - a.x) + f.x * (r.x - n.x)) / g, T = (s.x * (r.x * a.y - a.x * r.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * r.y - r.x * n.y)) / g, I = (s.y * (r.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - r.y)) / g, C = (s.y * (a.x - r.x) + u.y * (n.x - a.x) + f.y * (r.x - n.x)) / g, F = (s.y * (r.x * a.y - a.x * r.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * r.y - r.x * n.y)) / g;
  return t.transform(M, I, P, C, T, F), t.drawImage(e, 0, 0), t.restore(), !0;
}
function vy(t, e) {
  if (!e || !e.complete || !(e.naturalWidth || e.width)) return null;
  const n = Number(e.naturalWidth || e.width || 0), r = Number(e.naturalHeight || e.height || 0);
  if (n <= 1 || r <= 1) return null;
  t.__panoSharedWrappedErpCache || (t.__panoSharedWrappedErpCache = { src: "", w: 0, h: 0, canvas: null });
  const a = String(e.src || ""), s = t.__panoSharedWrappedErpCache;
  if (s.canvas && s.src === a && s.w === n && s.h === r) return s.canvas;
  const u = document.createElement("canvas");
  u.width = n * 2, u.height = r;
  const f = u.getContext("2d");
  return f ? (f.drawImage(e, 0, 0, n, r), f.drawImage(e, n, 0, n, r), t.__panoSharedWrappedErpCache = { src: a, w: n, h: r, canvas: u }, u) : null;
}
function bh(t) {
  const e = t || {}, n = Mn(e.yaw_deg, 0), r = Mn(e.pitch_deg, 0), a = Mn(e.roll_deg ?? e.rot_deg, 0), s = Ro(Mn(e.hFOV_deg, 90), 1, 179), u = Ro(Mn(e.vFOV_deg, 60), 1, 179), f = Math.tan(s * Wr * 0.5) / Math.max(1e-6, Math.tan(u * Wr * 0.5)), g = Ro(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: a,
    hfov: s,
    vfov: u,
    aspect: g
  };
}
function mc(t, e, n, r, a, s = "balanced") {
  const u = (xt = {}) => {
    e.__panoCutoutProjectionStats = {
      drawnTriCount: 0,
      Nu: 0,
      Nv: 0,
      rectW: Mn(r == null ? void 0 : r.w, 0),
      rectH: Mn(r == null ? void 0 : r.h, 0),
      imageW: Mn((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width), 0),
      imageH: Mn((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height), 0),
      ...xt
    };
  };
  if (!t || !e || !n || !r || !a)
    return e && u({ reason: "invalid_args" }), !1;
  if (!n.complete || !(n.naturalWidth || n.width))
    return u({ reason: "image_not_ready" }), !1;
  const f = Mn(r.w, 0), g = Mn(r.h, 0);
  if (f <= 1 || g <= 1)
    return u({ reason: "invalid_rect", rectW: f, rectH: g }), !1;
  const y = Number(n.naturalWidth || n.width || 0), v = Number(n.naturalHeight || n.height || 0);
  if (y <= 1 || v <= 1)
    return u({ reason: "invalid_image", imageW: y, imageH: v }), !1;
  const d = vy(e, n) || n, { yaw: M, pitch: P, roll: T, hfov: I, vfov: C } = bh(a), F = yy(M, P, T), A = Math.tan(I * Wr * 0.5), V = Math.tan(C * Wr * 0.5), R = s === "high" ? 20 : s === "draft" ? 10 : 14, K = s === "high" ? 14 : s === "draft" ? 7 : 10;
  let E = 0;
  const ct = Array.from({ length: K + 1 }, () => Array(R + 1).fill(null)), J = Array.from({ length: K + 1 }, () => Array(R + 1).fill(null));
  for (let xt = 0; xt <= K; xt += 1)
    for (let $ = 0; $ <= R; $ += 1) {
      const at = $ / R, Q = xt / K, wt = (at * 2 - 1) * A, lt = (1 - Q * 2) * V, X = fa(qo(qo(F.fwd, Ni(F.right, wt)), Ni(F.up, lt))), nt = Math.atan2(X.x, X.z), it = Math.asin(Ro(X.y, -1, 1));
      let j = (nt / (2 * Math.PI) + 0.5) * y;
      for (; j < 0; ) j += y;
      for (; j >= y; ) j -= y;
      const ot = (0.5 - it / Math.PI) * v;
      ct[xt][$] = { x: r.x + at * r.w, y: r.y + Q * r.h }, J[xt][$] = { x: j, y: ot };
    }
  for (let xt = 0; xt < K; xt += 1)
    for (let $ = 0; $ < R; $ += 1) {
      const at = ct[xt][$], Q = ct[xt][$ + 1], wt = ct[xt + 1][$], lt = ct[xt + 1][$ + 1], X = { ...J[xt][$] }, nt = { ...J[xt][$ + 1] }, it = { ...J[xt + 1][$] }, j = { ...J[xt + 1][$ + 1] }, ot = Math.min(X.x, nt.x, it.x, j.x);
      Math.max(X.x, nt.x, it.x, j.x) - ot > y * 0.5 && [X, nt, it, j].forEach((At) => {
        At.x < y * 0.5 && (At.x += y);
      }), Pf(t, d, X, nt, j, at, Q, lt) && (E += 1), Pf(t, d, X, j, it, at, lt, wt) && (E += 1);
    }
  return u({
    drawnTriCount: E,
    Nu: R,
    Nv: K,
    rectW: f,
    rectH: g,
    imageW: y,
    imageH: v,
    reason: "ok"
  }), E > 0;
}
const vh = 0.28;
function _y(t) {
  const e = t && typeof t == "object" ? t : {}, n = B(Number(e.x0 ?? 0), 0, 1), r = B(Number(e.y0 ?? 0), 0, 1), a = B(Number(e.x1 ?? 1), 0, 1), s = B(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(r, s),
    x1: Math.max(n, a),
    y1: Math.max(r, s)
  };
}
function xy(t, e = {}) {
  if (!t || typeof t != "object") return null;
  const n = String(t.asset_id || t.assetId || "").trim(), r = t.type === "external_image" || t.source_kind === "external_image", a = n || (r ? String(t.id || "").trim() : ""), s = e.includeHidden === !0, u = t.visible === !1, f = s && r && u;
  return {
    id: String(t.id || ""),
    assetId: a,
    zIndex: Number(t.z_index || t.zIndex || 0),
    yawDeg: Number(t.yaw_deg || t.yawDeg || 0),
    pitchDeg: Number(t.pitch_deg || t.pitchDeg || 0),
    rollDeg: Number(t.rot_deg ?? t.roll_deg ?? t.rollDeg ?? 0),
    hFovDeg: B(Number(t.hFOV_deg || t.hFovDeg || 30), 1, 179),
    vFovDeg: B(Number(t.vFOV_deg || t.vFovDeg || 30), 1, 179),
    crop: _y(t.crop),
    opacity: f ? vh : B(Number(t.opacity ?? 1), 0, 1),
    visible: f ? !0 : t.visible !== !1,
    external: r
  };
}
function xs(t, e = {}) {
  var s;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], r = e.includeHidden === !0;
  return {
    stickers: n.map((u) => xy(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: e.selectedId ?? ((s = t == null ? void 0 : t.active) == null ? void 0 : s.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function _h(t, e, n = {}) {
  if (typeof e != "function") return [];
  const r = n.scene || xs(t, n), a = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, s = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var T;
    const g = String((f == null ? void 0 : f.assetId) || "").trim(), y = g || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const v = g ? a[g] : null, d = e(y, v, f);
    if (d instanceof HTMLImageElement && !d.complete) return;
    const M = Number((d == null ? void 0 : d.naturalWidth) || (d == null ? void 0 : d.videoWidth) || (d == null ? void 0 : d.width) || 0), P = Number((d == null ? void 0 : d.naturalHeight) || (d == null ? void 0 : d.videoHeight) || (d == null ? void 0 : d.height) || 0);
    !d || M <= 0 || P <= 0 || (u.add(y), s.push({
      assetId: y,
      source: d,
      revision: String(((T = n.revisionFor) == null ? void 0 : T.call(n, y, v, d)) ?? [
        y,
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
    fovDeg: B(Number((t == null ? void 0 : t.fov) || 100), 1, 179),
    coverageDeg: Number(e || 360) === 180 ? 180 : 360
  };
}
function wy(t, e = 360) {
  return bl(t, e);
}
function xh(t) {
  const e = bh(t || {});
  return {
    mode: "cutout",
    yawDeg: Number((t == null ? void 0 : t.yaw_deg) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch_deg) || 0),
    rollDeg: Number((e == null ? void 0 : e.roll) ?? (t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0),
    hFovDeg: B(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179),
    vFovDeg: B(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1)
  };
}
const { app: ue } = Mo;
function Vc() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (Mo == null ? void 0 : Mo.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Yr = Math.PI / 180, Yo = {}, Sy = { Nu: 24, Nv: 14 }, Ny = 10, My = 120;
function ky() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function aa(t) {
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
function Py() {
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
function Ay(t) {
  const e = Ir(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function wh(t, e, n) {
  Ay(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function Hc(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function Sh(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function Cy(t) {
  return Fc(Sh(t));
}
function Kr(t = null) {
  var s, u;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (s = ue == null ? void 0 : ue.canvas) == null ? void 0 : s.constructor) == null ? void 0 : u.name) || "");
  return [e, r, n, a].join("|");
}
function Nh(t, e = null) {
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
const xa = {
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
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((r) => {
        if (!(!r || String(r.__panoPreviewMode || "") !== "stickers"))
          try {
            r.__panoRebindGeneration = this.generation, String(r.__panoStickersPath || "unknown"), this.generation, Mh(r).rebind(r.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function Mh(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = r === "cutout" ? "dom" : Nh(r, t).chosenPath, s = Hc(t);
      this.activeBackend = s;
      const u = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = t.__panoPreviewNoPreview === !0, g = n.noPreview === !0;
      if (s === a && s !== "none" && u === r && f === g) {
        t.__panoAttachOptions = { ...n, mode: r }, t.__panoPreviewMode = r, t.__panoPreviewNoPreview = g, t.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      s !== "none" && Ti(t, { keepMonitor: r === "stickers" }), mb(t, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = Hc(t);
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
function Iy(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function Ti(t, e = {}) {
  var r, a, s, u, f;
  if (!t) return;
  Zo.unregister(t), Iy(t), t.__panoDomPreview, t.__panoLegacyPreviewHooked, t.__panoDomRestore, t.__panoLegacyRestore;
  try {
    (r = t.__panoDomRestore) == null || r.call(t);
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
      const y = String((g == null ? void 0 : g.name) || ""), v = String((g == null ? void 0 : g.type) || ""), d = Vc();
      return !(y === d || v === d || y === "pano_preview" || v === "pano_preview" || y === "preview" && v === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", String(e.reason || ""), e.keepMonitor, e.keepMonitor || xa.unregister(t);
}
function Xr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Af(t, e) {
  return Xr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function co(t, e) {
  return Xr(t.x * e, t.y * e, t.z * e);
}
function yc(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Cf(t, e) {
  return Xr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function lo(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Xr(t.x / e, t.y / e, t.z / e);
}
function Hr(t, e) {
  const n = t * Yr, r = e * Yr, a = Math.cos(r);
  return Xr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function vl(t, e, n = 0) {
  const r = Hr(t, e), a = Xr(0, 1, 0);
  let s = Cf(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Xr(1, 0, 0)), s = lo(s);
  let u = lo(Cf(r, s));
  const f = n * Yr, g = Math.cos(f), y = Math.sin(f), v = Af(co(s, g), co(u, y)), d = Af(co(s, -y), co(u, g));
  return { fwd: r, right: lo(v), up: lo(d) };
}
function Ey(t, e = "#00ff00") {
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
function Ty(t) {
  var n;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = Da(t, "state_json")) == null ? void 0 : n.value) || "");
}
function _l(t) {
  var u, f;
  const e = Ty(t), n = String(((u = Da(t, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), r = Number(((f = Da(t, "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, a = t.__panoStateCache;
  if (a && a.source === e && a.bg === n && a.coverage === r)
    return a.parsed;
  const s = Ey(e, n);
  return s.coverage = r, t.__panoStateCache = { source: e, bg: n, coverage: r, parsed: s }, s;
}
function Da(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function If(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function kh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Dy(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Ph(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Ah(t, e, n = null) {
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
  return !r && n != null && (r = Dy(t == null ? void 0 : t.graph, n)), r;
}
function Ly(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function xl(t, e = []) {
  const n = Ly(t), r = [];
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
function Xo(t, e) {
  const n = Ef(t), r = Ef(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Ry(t, e = ["erp_image", "bg_erp"]) {
  var g;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return [];
  const a = xl(t, e).map((y) => n.findIndex((v) => String((v == null ? void 0 : v.name) || "") === String(y))).filter((y) => y >= 0), s = n.map((y, v) => ({ input: y, idx: v })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...a, ...s])], f = [];
  for (const y of u) {
    const v = Ah(t, y);
    if ((v == null ? void 0 : v.id) != null) {
      f.push(String(v.id));
      continue;
    }
    const d = (g = n[y]) == null ? void 0 : g.link;
    if (d == null) continue;
    const M = kh(t == null ? void 0 : t.graph, d), { originId: P } = Ph(M);
    P != null && f.push(String(P));
  }
  return [...new Set(f)];
}
const Zo = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = Je) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((s) => {
        var f, g, y, v, d;
        if (!s) return;
        Xo(r, s == null ? void 0 : s.id), Ry(s, ["erp_image", "bg_erp"]).some((M) => Xo(r, M)), zc(s), (g = (f = s.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (y = s.setDirtyCanvas) == null || y.call(s, !0, !0), (d = (v = s.graph) == null ? void 0 : v.setDirtyCanvas) == null || d.call(v, !0, !0), String(s.__panoPreviewMode || ""), String(s.__panoPreviewMode || "");
      });
    }, Je.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var t;
    !this.bound || !this.listener || !((t = Je) != null && t.removeEventListener) || (Je.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(t) {
    t && (this.nodes.add(t), this.ensureBound());
  },
  unregister(t) {
    t && this.nodes.delete(t), this.nodes.size || this.ensureUnbound();
  }
};
function Jo(t) {
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
  return typeof ((s = Je) == null ? void 0 : s.apiURL) == "function" ? Je.apiURL(a) : a;
}
function Oy(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Fy(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function Vy(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function Ch(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Oy(e)) return [e];
  const { filename: n, subfolder: r } = Fy(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => Jo({
    filename: n,
    subfolder: r,
    type: s
  }));
  return Vy([...a, e]);
}
function Hy(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? Jo({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function $c(t) {
  const e = ue == null ? void 0 : ue.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  const a = n;
  if (e instanceof Map) {
    for (const s of e.keys())
      if (Xo(s, a)) return e.get(s);
  } else {
    const s = Object.keys(e);
    for (const u of s)
      if (Xo(u, a)) return e[u];
  }
  return null;
}
function Kn(t) {
  if (!t) return "";
  if (typeof t == "string")
    return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Kn(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return Jo({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Kn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Jo(t);
}
function Ih(t, e) {
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
function $y(t) {
  const e = [], n = /* @__PURE__ */ new Set(), r = (s) => {
    Array.isArray(s) && s.forEach((u) => e.push(u));
  }, a = (s, u = 0) => {
    !s || u > 3 || n.has(s) || typeof s == "object" && (n.add(s), r(s.images), a(s.output, u + 1), a(s.ui, u + 1), a(s.data, u + 1), a(s.result, u + 1));
  };
  return a(t, 0), e;
}
function zy(t, e) {
  try {
    const n = $y(e);
    let r = "";
    for (const a of n)
      if (r = Kn(a), r) break;
    r ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(r || ""), Ih(t.__panoOwnOutputSrc, t.__panoOwnOutputRev), t.__panoOwnOutputRev, void 0) : (Object.keys(e || {}), void 0);
  } catch {
  }
}
function jy(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const r = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), a = $c(n), s = Array.isArray(a == null ? void 0 : a.images) ? a.images : [], u = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], f = r ? [r, ...s, ...u] : [...s, ...u];
  let g = "";
  for (const F of f)
    if (g = Kn(F), g) break;
  if (!g) return null;
  const y = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), d = Ch(g).map((F) => Ih(F, y));
  if (!d.length) return null;
  const M = `${g}|rev:${y}`;
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
  let I = -1;
  const C = () => {
    if (I += 1, I >= d.length) {
      t.__panoOwnOutputImageCache === P && (P.pendingSrc = "", P.pendingImg = null);
      return;
    }
    T.src = d[I];
  };
  return T.onload = () => {
    var F;
    t.__panoOwnOutputImageCache === P && P.pendingImg === T && P.pendingSrc === M && (P.src = M, P.img = T, P.pendingSrc = "", P.pendingImg = null), e == null || e(), (F = t.setDirtyCanvas) == null || F.call(t, !0, !0);
  }, T.onerror = () => {
    if (I + 1 >= d.length) {
      t.__panoOwnOutputImageCache === P && P.pendingImg === T && (P.pendingSrc = "", P.pendingImg = null);
      return;
    }
    C();
  }, P.pendingSrc = M, P.pendingImg = T, C(), P.img && (P.img.complete || P.img.naturalWidth || P.img.width) ? P.img : T;
}
function Uy(t, e = []) {
  var y, v;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = xl(t, e).map((d) => n.findIndex((M) => String((M == null ? void 0 : M.name) || "") === String(d))).filter((d) => d >= 0), s = n.map((d, M) => ({ input: d, idx: M })).filter(({ input: d }) => String((d == null ? void 0 : d.type) || "").toUpperCase() === "IMAGE").map(({ idx: d }) => d), u = [.../* @__PURE__ */ new Set([...a, ...s])];
  for (const d of u) {
    const M = n[d], P = M == null ? void 0 : M.link;
    if (P == null) continue;
    const T = kh(t.graph, P), { originId: I, originSlot: C } = Ph(T);
    if (I == null) continue;
    const F = Ah(t, d, I);
    if (!F) continue;
    const A = Number(C || 0), V = $c((F == null ? void 0 : F.id) ?? I), R = Array.isArray(V == null ? void 0 : V.images) ? V.images : [];
    if (R.length) {
      const J = [];
      A >= 0 && A < R.length && J.push(R[A]), J.push(...R);
      for (const xt of J) {
        const $ = Kn(xt);
        if ($)
          return String((M == null ? void 0 : M.name) || ""), { src: $, sourceType: "nodeOutputs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    let K = [];
    try {
      K = typeof (ue == null ? void 0 : ue.getNodeImageUrls) == "function" ? ue.getNodeImageUrls(F) || [] : [];
    } catch {
      K = [];
    }
    if (Array.isArray(K) && K.length) {
      const J = [];
      A >= 0 && A < K.length && J.push(K[A]), J.push(...K);
      for (const xt of J) {
        const $ = Kn(xt);
        if ($)
          return String((M == null ? void 0 : M.name) || ""), { src: $, sourceType: "appNodeImageUrls", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const E = Array.isArray(F == null ? void 0 : F.imgs) ? F.imgs : [];
    if (E.length) {
      const J = [];
      A >= 0 && A < E.length && J.push(E[A]), J.push(...E);
      for (const xt of J) {
        const $ = Kn(xt);
        if ($)
          return String((M == null ? void 0 : M.name) || ""), { src: $, sourceType: "nodeImgs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const ct = (y = F == null ? void 0 : F.widgets) == null ? void 0 : y.find((J) => String((J == null ? void 0 : J.name) || "").toLowerCase() === "image");
    if (ct) {
      let J = Kn(ct.value);
      if (J && !J.includes("/") && !J.includes(":") && (F.comfyClass === "LoadImage" || F.type === "LoadImage") && (J = Je.apiURL(`/view?filename=${encodeURIComponent(J)}&type=input&subfolder=`)), J)
        return String((M == null ? void 0 : M.name) || ""), { src: J, sourceType: "widget", inputName: String((M == null ? void 0 : M.name) || "") };
    }
  }
  const f = $c(t == null ? void 0 : t.id), g = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && g.push(...f.pano_input_images), Array.isArray((v = f == null ? void 0 : f.ui) == null ? void 0 : v.pano_input_images) && g.push(...f.ui.pano_input_images), g.length > 0)
    for (const d of g) {
      const M = Kn(d);
      if (M)
        return { src: M, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function By(t, e = []) {
  const n = Uy(t, e), r = String((n == null ? void 0 : n.src) || "").trim();
  if (!r) return null;
  const a = Ch(r);
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = e.join("|") || "image", u = t.__panoLinkedInputImageCache.get(s);
  if (u && u.srcRaw === r && u.img) return u.img;
  const f = new Image(), g = { srcRaw: r, resolvedSrc: "", img: f };
  t.__panoLinkedInputImageCache.set(s, g);
  let y = -1;
  const v = () => {
    var M, P;
    if (y += 1, y >= a.length) {
      try {
        (P = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || P.call(M, s);
      } catch {
      }
      String((n == null ? void 0 : n.sourceType) || ""), a.length;
      return;
    }
    const d = a[y];
    g.resolvedSrc = d, f.src = d;
  };
  return f.onload = () => {
    var d;
    String(g.resolvedSrc || f.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (d = t.setDirtyCanvas) == null || d.call(t, !0, !0);
  }, f.onerror = (d) => {
    var M, P;
    if (y + 1 < a.length) {
      v();
      return;
    }
    try {
      (P = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || P.call(M, s);
    } catch {
    }
    String(g.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((d == null ? void 0 : d.type) || "error");
  }, v(), f;
}
function Qo(t, e = [], n = null) {
  const r = By(t, e);
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
function Eh(t, e) {
  t.__panoRenderCache || (t.__panoRenderCache = {
    mode: String(e || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = t.__panoRenderCache, r = String(e || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Or(t, e, n = "") {
  const r = Eh(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), a = performance.now();
  return e ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < My ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function jc(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), r = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), a = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), s = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || r)), u = n / a, f = r / s, g = Math.min(u, f);
  return Number.isFinite(g) && g > 0 ? g : 1;
}
function Tf(t, e, n = 1) {
  const r = Number((e == null ? void 0 : e.x) || 0), a = Number((e == null ? void 0 : e.y) || 0), s = Number((e == null ? void 0 : e.w) || 0), u = Number((e == null ? void 0 : e.h) || 0);
  if (s <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), g = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), s * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), v = r + (s - g) * 0.5, d = a + (u - y) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(v, d, g, y, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", v + g * 0.5, d + y * 0.5 + 0.5), t.restore();
}
function uo(t, e, n = "Open editor and add frame") {
  var a;
  const r = (a = t == null ? void 0 : t.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  r && (r.textContent = String(n || "Open editor and add frame"), r.style.display = e ? "flex" : "none");
}
function Gy(t) {
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
function Th(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), r = Number((t == null ? void 0 : t.y) || 0), a = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), s = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), u = Number(e) > 0 ? Number(e) : 1;
  let f = a, g = a / u;
  return g > s && (g = s, f = s * u), {
    x: n + (a - f) * 0.5,
    y: r + (s - g) * 0.5,
    w: f,
    h: g
  };
}
function Ky(t, e, n, r = 0) {
  if (!t || !e || !n) return !1;
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (a <= 1 || s <= 1) return !1;
  const u = Th(n, a / s);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(r) || 0));
  return f > 0 && (t.fillStyle = `rgba(0,0,0,${f})`, t.fillRect(u.x, u.y, u.w, u.h)), t.restore(), !0;
}
function Wy(t, e = null) {
  const r = Array.isArray(t.widgets) ? t.widgets : [];
  let a = 32;
  return r.forEach((s) => {
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
function Oo(t) {
  const n = Wy(t) + 2, r = 8, a = Ir(t), s = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || s < 80 ? null : { x: r, y: n, w: s, h: u };
}
function Dh(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const r = String(e || "");
  if (!r) return null;
  const a = Hy(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const s = window.__panoSharedImageCache.get(a);
  if (s != null && s.img)
    return t.__panoPreviewImageCache.set(r, { src: a, img: s.img }), s.img;
  const u = t.__panoPreviewImageCache.get(r);
  if (u && u.src === a) return u.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var g, y, v;
    (y = (g = t.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || y.call(g), (v = t.setDirtyCanvas) == null || v.call(t, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), t.__panoPreviewImageCache.set(r, { src: a, img: f }), f;
}
function qy(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.__panoStickerSortCache;
  if ((r == null ? void 0 : r.source) === n && Array.isArray(r.sorted)) return r.sorted;
  const a = [...n].sort((s, u) => Number((s == null ? void 0 : s.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function Lh(t, e) {
  return xs(e, {
    selectedId: null,
    hoveredId: null
  });
}
function Rh(t, e, n) {
  return _h(e, (r, a) => Dh(t, r, a), { scene: n });
}
function Yy(t, e, n, r = 0.45) {
  const a = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3, u = (f) => {
    const g = f.x - a, y = f.y - s, v = Math.hypot(g, y) || 1;
    return { x: f.x + g / v * r, y: f.y + y / v * r };
  };
  return [u(t), u(e), u(n)];
}
function Df(t, e, n, r, a, s, u, f) {
  const g = n.x * (r.y - a.y) + r.x * (a.y - n.y) + a.x * (n.y - r.y);
  if (Math.abs(g) < 1e-6) return;
  const [y, v, d] = Yy(s, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(v.x, v.y), t.lineTo(d.x, d.y), t.closePath(), t.clip();
  const M = (s.x * (r.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - r.y)) / g, P = (s.x * (a.x - r.x) + u.x * (n.x - a.x) + f.x * (r.x - n.x)) / g, T = (s.x * (r.x * a.y - a.x * r.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * r.y - r.x * n.y)) / g, I = (s.y * (r.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - r.y)) / g, C = (s.y * (a.x - r.x) + u.y * (n.x - a.x) + f.y * (r.x - n.x)) / g, F = (s.y * (r.x * a.y - a.x * r.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * r.y - r.x * n.y)) / g;
  t.transform(M, I, P, C, T, F), t.drawImage(e, 0, 0), t.restore();
}
function Oh(t, e, n, r) {
  const a = yc(t, e.right), s = yc(t, e.up), u = yc(t, e.fwd);
  if (u <= 1e-4) return null;
  const f = s / u / r, g = a / u / r;
  return { x: n.x + n.w * 0.5 + g * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Fh(t, e, n, r, a, s, u, f = 12, g = 9) {
  var lt;
  const y = B(Number(u.hFOV_deg || 30), 1, 179) * Yr, v = B(Number(u.vFOV_deg || 30), 1, 179) * Yr, d = Math.tan(y * 0.5), M = Math.tan(v * 0.5), P = u.crop || {}, T = B(Number(P.x0 ?? 0), 0, 1), I = B(Number(P.y0 ?? 0), 0, 1), C = B(Number(P.x1 ?? 1), 0, 1), F = B(Number(P.y1 ?? 1), 0, 1), A = Math.max(1e-4, C - T), V = Math.max(1e-4, F - I), R = vl(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), K = [], E = [], ct = [], J = [];
  for (let X = 0; X <= g; X++) {
    const nt = X / g, j = (1 - (I + nt * V) * 2) * M;
    for (let ot = 0; ot <= f; ot++) {
      const Nt = ot / f, Mt = ((T + Nt * A) * 2 - 1) * d, ae = R.fwd.x + R.right.x * Mt + R.up.x * j, Ne = R.fwd.y + R.right.y * Mt + R.up.y * j, je = R.fwd.z + R.right.z * Mt + R.up.z * j, Me = Math.hypot(ae, Ne, je) || 1e-8, Ue = ae / Me, Ae = Ne / Me, on = je / Me, sn = Ue * r.right.x + Ae * r.right.y + on * r.right.z, mn = Ue * r.up.x + Ae * r.up.y + on * r.up.z, w = Ue * r.fwd.x + Ae * r.fwd.y + on * r.fwd.z;
      if (w <= 1e-4)
        K[X] || (K[X] = []), E[X] || (E[X] = []), K[X][ot] = null, E[X][ot] = null;
      else {
        const D = mn / w / a, H = sn / w / a;
        K[X] || (K[X] = []), E[X] || (E[X] = []), K[X][ot] = n.x + n.w * 0.5 + H * n.h * 0.5, E[X][ot] = n.y + n.h * 0.5 - D * n.h * 0.5;
      }
      ct[X] || (ct[X] = []), J[X] || (J[X] = []), ct[X][ot] = Nt, J[X][ot] = nt;
    }
  }
  const xt = (lt = s.assets) == null ? void 0 : lt[u.asset_id], $ = Dh(e, u.asset_id, xt);
  if (!$ || !$.complete || !$.naturalWidth) return;
  const at = Number($.naturalWidth || $.width || 1), Q = Number($.naturalHeight || $.height || 1), wt = f < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = wt;
  for (let X = 0; X < g; X++)
    for (let nt = 0; nt < f; nt++) {
      const it = K[X][nt], j = E[X][nt], ot = K[X][nt + 1], Nt = E[X][nt + 1], At = K[X + 1][nt], Mt = E[X + 1][nt], ae = K[X + 1][nt + 1], Ne = E[X + 1][nt + 1];
      if (it === null || ot === null || At === null || ae === null) continue;
      const je = ct[X][nt] * at, Me = J[X][nt] * Q, Ue = ct[X][nt + 1] * at, Ae = J[X][nt + 1] * Q, on = ct[X + 1][nt] * at, sn = J[X + 1][nt] * Q, mn = ct[X + 1][nt + 1] * at, w = J[X + 1][nt + 1] * Q;
      Df(t, $, { x: je, y: Me }, { x: Ue, y: Ae }, { x: mn, y: w }, { x: it, y: j }, { x: ot, y: Nt }, { x: ae, y: Ne }), Df(t, $, { x: je, y: Me }, { x: mn, y: w }, { x: on, y: sn }, { x: it, y: j }, { x: ae, y: Ne }, { x: At, y: Mt });
    }
}
function Xy(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const r = _l(t), a = Oo(t);
  if (!a) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const s = vl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(t.__panoPreviewView.fov || 100) * Yr * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(a.x, a.y, a.w, a.h, 8), e.fill(), e.stroke(), e.clip();
  const f = Qo(
    t,
    xl(t, ["erp_image", "bg_erp"]),
    () => {
      var R, K, E;
      (K = (R = t.__panoDomPreview) == null ? void 0 : R.requestDraw) == null || K.call(R), (E = t.setDirtyCanvas) == null || E.call(t, !0, !1);
    }
  ), g = !!(f && f.complete && (f.naturalWidth || f.width)), y = $h(t), v = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, d = y || v, M = Yo, P = Lh(t, r), T = Rh(t, r, P), I = bl(t.__panoPreviewView, r == null ? void 0 : r.coverage);
  let C = !1;
  if (t.__panoRuntimeCore || (t.__panoRuntimeCore = Fa()), g) {
    const R = vs({
      stateRevision: [
        "runtime_panorama_scene",
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0),
        Number((r == null ? void 0 : r.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(T) ? T.map((ct) => `${String((ct == null ? void 0 : ct.assetId) || "")}:${String((ct == null ? void 0 : ct.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: f,
      backgroundRevision: [
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0)
      ].join("|"),
      coverageDeg: Number((r == null ? void 0 : r.coverage) || 360) === 180 ? 180 : 360,
      scene: P,
      textures: T,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), E = t.__panoRuntimeCore.syncState(R) ? t.__panoRuntimeCore.renderToTarget("runtime_preview", I, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    C = !!E, E && e.drawImage(E, a.x, a.y, a.w, a.h);
  }
  const F = d ? 8 : 12, A = d ? 6 : 9, V = qy(t, r);
  if (!g || V.length === 0) {
    const R = jc(e == null ? void 0 : e.canvas, a);
    Vh(e, a, s, u, R);
  }
  !C && g && ts(t, e, a, s, u, f, M), !C && V.length > 0 && V.forEach((R) => Fh(e, t, a, s, u, r, R, F, A)), e.restore();
}
function Zy(t, e, n, r, a = "preview_scene", s = "") {
  const u = String(
    s || [
      String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
      Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
      Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
    ].join("|")
  );
  return vs({
    stateRevision: [
      a,
      u,
      Number((e == null ? void 0 : e.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(r) ? r.map((f) => `${String((f == null ? void 0 : f.assetId) || "")}:${String((f == null ? void 0 : f.revision) || "")}`).join(",") : ""
    ].join("|"),
    backgroundSource: t,
    backgroundRevision: u,
    coverageDeg: Number((e == null ? void 0 : e.coverage) || 360) === 180 ? 180 : 360,
    scene: n,
    textures: r,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
}
function Fo(t, e, n, r) {
  var s, u, f, g, y, v;
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
      y: Number(e.canvasY) - Number(((v = t == null ? void 0 : t.pos) == null ? void 0 : v[1]) || 0)
    };
  const a = Qy(t, e, r);
  return a || null;
}
function Jy(t, e) {
  var d, M;
  const n = Number(t == null ? void 0 : t.clientX), r = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, s = (d = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : d.call(a), u = (e == null ? void 0 : e.ds) || ((M = ue == null ? void 0 : ue.canvas) == null ? void 0 : M.ds);
  if (!s || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const g = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(s.left || 0)) / f - Number(g[0] || 0), v = (r - Number(s.top || 0)) / f - Number(g[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(v) ? null : { x: y, y: v };
}
function Qy(t, e, n) {
  var a, s;
  const r = Jy(e, n || (ue == null ? void 0 : ue.canvas));
  return r ? {
    x: r.x - Number(((a = t == null ? void 0 : t.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((s = t == null ? void 0 : t.pos) == null ? void 0 : s[1]) || 0)
  } : null;
}
function fo(t) {
  if (t.__panoLegacyPreviewHooked) return;
  t.__panoPreviewMode, String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""), Ir(t), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", wh(t, 320, 180), xi(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var M, P;
    const d = e ? e.apply(this, arguments) : void 0;
    try {
      const T = arguments[0];
      T && !((M = this.flags) != null && M.collapsed) && (r.stepInertia(performance.now()) && ((P = this.setDirtyCanvas) == null || P.call(this, !0, !1)), Xy(this, T, r));
    } catch {
    }
    return d;
  }, t.onResize = function() {
    var M;
    const d = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, es(this, 150), (M = this.setDirtyCanvas) == null || M.call(this, !0, !0), zh(this, 220, null), d;
  };
  const r = _s({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (d) => {
      t.__panoPreviewView = d;
    },
    getViewportSize: () => {
      const d = Oo(t);
      return {
        w: Math.max(1, Number((d == null ? void 0 : d.w) || 0)),
        h: Math.max(1, Number((d == null ? void 0 : d.h) || 0))
      };
    },
    onInteraction: () => {
      var d;
      Hh(t), (d = t.setDirtyCanvas) == null || d.call(t, !0, !1);
    }
  }), a = t.onMouseDown;
  t.onMouseDown = function(d, M, P) {
    var T;
    try {
      if (!((T = this.flags) != null && T.collapsed)) {
        const I = Fo(this, d, M, P) || { x: 0, y: 0 }, C = Ir(this), F = Number((C == null ? void 0 : C[0]) || 0), A = Number((C == null ? void 0 : C[1]) || 0);
        if (I.x >= F - 20 && I.y >= A - 20)
          return a ? a.apply(this, arguments) : void 0;
        const R = Oo(this);
        if (If(I.x, I.y, R))
          return (d == null ? void 0 : d.button) === 0 && r.startDrag(I.x, I.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const s = t.onMouseMove;
  t.onMouseMove = function(d, M, P) {
    try {
      const T = Fo(this, d, M, P);
      if (r.state.drag.active) {
        if (typeof (d == null ? void 0 : d.buttons) == "number" && (d.buttons & 1) === 0)
          return r.endDrag(), !0;
        const I = T || r.state.drag;
        return r.moveDrag(I.x, I.y, "pano"), !0;
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
  t.onMouseWheel = function(d, M, P) {
    var T, I;
    try {
      if ((T = this.flags) != null && T.collapsed) return g ? g.apply(this, arguments) : void 0;
      const C = Fo(this, d, M, P), F = Oo(this);
      if (!C || !If(C.x, C.y, F)) return g ? g.apply(this, arguments) : void 0;
      const A = Number((d == null ? void 0 : d.deltaY) ?? (d == null ? void 0 : d.wheelDeltaY) ?? (typeof M == "number" ? M : 0));
      return r.applyWheel(Math.sign(A)) && ((I = this.setDirtyCanvas) == null || I.call(this, !0, !1)), typeof (d == null ? void 0 : d.preventDefault) == "function" && d.preventDefault(), typeof (d == null ? void 0 : d.stopPropagation) == "function" && d.stopPropagation(), !0;
    } catch {
      return g ? g.apply(this, arguments) : void 0;
    }
  };
  const y = t.onRemoved, v = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = n, t.onDrawForeground = e, t.onMouseDown = a, t.onMouseMove = s, t.onMouseUp = u, t.onMouseLeave = f, t.onMouseWheel = g, t.onRemoved = y, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = v, t.onRemoved = function() {
    return v(), xa.unregister(this), Zo.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function tb(t, e) {
  const n = Qo(
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
function eb(t, e) {
  var y, v, d, M, P, T, I, C, F, A, V, R;
  const n = (v = (y = e == null ? void 0 : e.painting) == null ? void 0 : y.paint) == null ? void 0 : v.strokes, r = (M = (d = e == null ? void 0 : e.painting) == null ? void 0 : d.mask) == null ? void 0 : M.strokes, a = Array.isArray(n) && n.length > 0, s = Array.isArray(r) && r.length > 0;
  if (!a && !s) return null;
  const u = tb(t, e), f = `${u.width}x${u.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== f) && (t.__panoPreviewPaintEngine = Oc(u), t.__panoPreviewPaintDescriptorKey = f, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const g = {
    paint: n || null,
    mask: r || null,
    groups: ((P = e == null ? void 0 : e.painting) == null ? void 0 : P.groups) || null,
    rasterObjects: ((T = e == null ? void 0 : e.painting) == null ? void 0 : T.raster_objects) || null
  };
  return (((I = t.__panoPreviewPaintRevision) == null ? void 0 : I.paint) !== g.paint || ((C = t.__panoPreviewPaintRevision) == null ? void 0 : C.mask) !== g.mask || ((F = t.__panoPreviewPaintRevision) == null ? void 0 : F.groups) !== g.groups || ((A = t.__panoPreviewPaintRevision) == null ? void 0 : A.rasterObjects) !== g.rasterObjects) && (t.__panoPreviewPaintRevision = g, t.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    s ? "m1" : "m0",
    String(Array.isArray((V = e == null ? void 0 : e.painting) == null ? void 0 : V.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((R = e == null ? void 0 : e.painting) == null ? void 0 : R.raster_objects) ? e.painting.raster_objects.length : 0)
  ].join(":"), t.__panoPreviewPaintEngine.rebuildCommitted(e)), t.__panoPreviewPaintEngine;
}
function nb(t) {
  var n;
  return (Array.isArray((n = t == null ? void 0 : t.painting) == null ? void 0 : n.groups) ? t.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function rb(t, e) {
  const n = eb(t, e);
  if (!n) return null;
  const r = nb(e);
  return n.getErpTarget(r).displayPaint.canvas;
}
function ib(t, e, n = null) {
  var f;
  const r = (f = e == null ? void 0 : e.painting_layer) == null ? void 0 : f.paint, a = Kn(r);
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
function Lf(t, e) {
  var s, u;
  const n = t == null ? void 0 : t.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((s = e == null ? void 0 : e.painting) == null ? void 0 : s.raster_objects) && e.painting.raster_objects.length > 0) {
    const f = ib(t, e, () => {
      var g, y;
      return (y = (g = t.__panoDomPreview) == null ? void 0 : g.requestDraw) == null ? void 0 : y.call(g);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = e == null ? void 0 : e.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = rb(t, e);
  return a ? {
    source: a,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function ab(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function ob(t, e, n, r) {
  let a = (t == null ? void 0 : t[e]) || null;
  return (!a || a.width !== n || a.height !== r) && (a = document.createElement("canvas"), a.width = n, a.height = r, t[e] = a), a;
}
function sb(t, e, n, r, a, s) {
  if (!e || !n || !(r > 0) || !(a > 0)) return;
  const u = ab(n);
  if (u.width === r && u.height === a) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  const g = ob(t, s, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!g) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  try {
    g.clearRect(0, 0, u.width, u.height), g.drawImage(n, 0, 0, u.width, u.height);
    const y = g.getImageData(0, 0, u.width, u.height).data, v = e.getImageData(0, 0, r, a), d = v.data, M = Math.max(0, u.width - 1), P = Math.max(0, u.height - 1);
    for (let T = 0; T < a; T += 1) {
      const I = (T + 0.5) * u.height / a - 0.5, C = B(Math.floor(I), 0, P), F = B(C + 1, 0, P), A = B(I - C, 0, 1);
      for (let V = 0; V < r; V += 1) {
        const R = (V + 0.5) * u.width / r - 0.5, K = B(Math.floor(R), 0, M), E = B(K + 1, 0, M), ct = B(R - K, 0, 1);
        let J = 0, xt = 0, $ = 0, at = 0;
        const Q = (X, nt, it) => {
          const j = (nt * u.width + X) * 4, ot = (y[j + 3] || 0) / 255;
          J += ot * it, xt += (y[j] || 0) / 255 * ot * it, $ += (y[j + 1] || 0) / 255 * ot * it, at += (y[j + 2] || 0) / 255 * ot * it;
        };
        if (Q(K, C, (1 - ct) * (1 - A)), Q(E, C, ct * (1 - A)), Q(K, F, (1 - ct) * A), Q(E, F, ct * A), J <= 1e-6) continue;
        const wt = (T * r + V) * 4, lt = 1 - J;
        d[wt] = Math.round(B((xt + d[wt] / 255 * lt) * 255, 0, 255)), d[wt + 1] = Math.round(B(($ + d[wt + 1] / 255 * lt) * 255, 0, 255)), d[wt + 2] = Math.round(B((at + d[wt + 2] / 255 * lt) * 255, 0, 255)), d[wt + 3] = 255;
      }
    }
    e.putImageData(v, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, r, a);
  }
}
function Rf(t, e, n, r) {
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0)), f = `${String(e.currentSrc || e.src || "")}|${a}x${s}|${r}`;
  let g = t.__panoPreviewBgPaint;
  if (!g || g.__revKey !== f || g.width !== a || g.height !== s) {
    (!g || g.width !== a || g.height !== s) && (g = document.createElement("canvas"), g.width = a, g.height = s, t.__panoPreviewBgPaint = g);
    const y = g.getContext("2d");
    y.clearRect(0, 0, a, s), y.drawImage(e, 0, 0, a, s), sb(t, y, n, a, s, "__panoPreviewOverlayScratch"), g.__revKey = f;
  }
  return g;
}
function cb(t, e, n, r = null) {
  const a = String(t.__panoPreviewMode || "stickers");
  Eh(t, a);
  const s = _l(t), u = a === "cutout" ? jy(t, () => {
    var I, C;
    return (C = (I = t.__panoDomPreview) == null ? void 0 : I.requestDraw) == null ? void 0 : C.call(I);
  }) : null, f = !!(u && u.complete && (u.naturalWidth || u.width)), g = e.parentElement, y = 1, v = Math.max(1, Number((g == null ? void 0 : g.clientWidth) || e.clientWidth || 0)), d = Math.max(1, Number((g == null ? void 0 : g.clientHeight) || e.clientHeight || 0)), M = Math.max(64, Math.round(v * y)), P = Math.max(64, Math.round(d * y)), T = e.getContext("2d");
  if (T)
    if (a === "cutout") {
      const I = Gy(s), C = Qo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var at, Q;
          return (Q = (at = t.__panoDomPreview) == null ? void 0 : at.requestDraw) == null ? void 0 : Q.call(at);
        }
      ), F = !!(C && C.complete && (C.naturalWidth || C.width));
      (e.width !== M || e.height !== P) && (e.width = M, e.height = P);
      const A = { x: 0, y: 0, w: M, h: P }, V = f ? B(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : F ? B(Number((C.naturalWidth || C.width) / Math.max(1, Number(C.naturalHeight || C.height || 1))), 0.05, 20) : 1, R = I ? xh(I) : null, K = B(Number((R == null ? void 0 : R.aspect) || V || 1), 0.05, 20), E = Th(A, K), ct = jc(e, A);
      T.setTransform(1, 0, 0, 1, 0, 0), T.fillStyle = "#070707", T.fillRect(0, 0, M, P);
      let J = "none", xt = "Open editor and add frame", $ = "";
      if (f)
        T.drawImage(u, E.x, E.y, E.w, E.h);
      else if ($ = String((C == null ? void 0 : C.src) || ""), I)
        C && !F ? J = "loading" : F ? (J = "empty", xt = "Open editor or run node") : (J = "empty", xt = "Connect ERP image");
      else {
        if (F) {
          const at = Lf(t, s), Q = at != null && at.source ? Rf(t, C, at.source, at.revision || "") : C;
          Ky(T, Q, A, 0.44);
        }
        J = "empty", xt = "Open editor and add frame";
      }
      J === "loading" ? (Tf(T, E, ct), uo(t, !1), Or(t, !0, $)) : J === "empty" ? (uo(t, !0, xt), Or(t, !1, "")) : (uo(t, !1), Or(t, !1, ""));
    } else {
      uo(t, !1), (e.width !== M || e.height !== P) && (e.width = M, e.height = P);
      const I = { x: 0, y: 0, w: M, h: P }, C = jc(e, I);
      T.setTransform(1, 0, 0, 1, 0, 0), T.clearRect(0, 0, M, P), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const F = vl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), A = Math.tan(Number(t.__panoPreviewView.fov || 100) * Yr * 0.5), V = Qo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var lt, X;
          return (X = (lt = t.__panoDomPreview) == null ? void 0 : lt.requestDraw) == null ? void 0 : X.call(lt);
        }
      ), R = !!(V && V.complete && (V.naturalWidth || V.width));
      T.fillStyle = "#1a1a1e", T.fillRect(0, 0, M, P);
      const K = Lh(t, s), E = Rh(t, s, K), ct = bl(t.__panoPreviewView, s == null ? void 0 : s.coverage), J = Lf(t, s), xt = (J == null ? void 0 : J.source) || null, $ = R && xt ? Rf(t, V, xt, (J == null ? void 0 : J.revision) || "") : V, at = $ !== V ? String($.__revKey || "") : V ? [
        String(V.currentSrc || V.src || ""),
        Number(V.naturalWidth || V.width || 0),
        Number(V.naturalHeight || V.height || 0)
      ].join("|") : "";
      t.__panoDomRuntimeCore || (t.__panoDomRuntimeCore = Fa());
      let Q = !1;
      if (R) {
        const X = t.__panoDomRuntimeCore.syncState(
          Zy($, s, K, E, "runtime_dom_scene", at)
        ) ? t.__panoDomRuntimeCore.renderToTarget("runtime_preview", ct, {
          width: I.w,
          height: I.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        X && (T.drawImage(X, I.x, I.y, I.w, I.h), Q = !0);
      }
      const wt = K.stickers;
      if (R && Q)
        Or(t, !1, "");
      else if (R)
        ts(t, T, I, F, A, $, Yo), Or(t, !1, "");
      else if (xt)
        ts(t, T, I, F, A, xt, Yo), Or(t, !!V && !R, String((V == null ? void 0 : V.src) || ""));
      else {
        const lt = !!V && !R;
        Or(t, lt, String((V == null ? void 0 : V.src) || "")), lt && Tf(T, I, C);
      }
      if ((!R || wt.length === 0) && Vh(T, I, F, A, C), !Q && wt.length > 0) {
        const lt = $h(t), X = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, nt = lt || X, it = nt ? 8 : 12, j = nt ? 6 : 9;
        wt.forEach((ot) => Fh(T, t, I, F, A, s, ot, it, j));
      } else if (!V || !R) {
        const lt = Math.max(14, Math.round(16 * C));
        T.fillStyle = "rgba(212,212,216,0.85)", T.font = `600 ${lt}px Plus Jakarta Sans, Geist, sans-serif`, T.textAlign = "center", T.fillText("Open editor to add stickers", M * 0.5, P * 0.5 + 24 * C);
      }
    }
}
function ts(t, e, n, r, a, s, u = Sy) {
  const f = _l(t), g = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  t.__panoBackgroundCore || (t.__panoBackgroundCore = Fa());
  const y = vs({
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
    const y = Oh(g, n, r, a);
    if (!y) {
      f = !1;
      continue;
    }
    f ? t.lineTo(y.x, y.y) : (t.moveTo(y.x, y.y), f = !0);
  }
  t.stroke();
}
function Vh(t, e, n, r, a = 1) {
  t.save();
  const s = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const v = [];
    for (let d = -180; d <= 180; d += 15) v.push(Hr(d, y));
    Of(t, v, n, e, r, y === 0 ? u : s, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const v = [];
    for (let d = -89; d <= 89; d += 15) v.push(Hr(y, d));
    Of(t, v, n, e, r, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : s, y % 90 === 0 ? 1.2 : 1);
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
    const v = Oh(y.dir, n, e, r);
    v && t.fillText(y.name, v.x, v.y + 20 * a);
  }), t.restore();
}
function lb(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function Hh(t) {
  const e = lb(t);
  e.dragging = !1, e.hqFrames = Ny;
}
function es(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function $h(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function ub(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function fb(t, e, n = 20) {
  var u;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const r = (u = e.getBoundingClientRect) == null ? void 0 : u.call(e);
  if (!r) return !1;
  const a = Number(t.clientX) - Number(r.left || 0), s = Number(t.clientY) - Number(r.top || 0);
  return a >= r.width - n && s >= r.height - n;
}
function gi(t, e) {
  return fb(t, e) ? !1 : (ub(t), !0);
}
function db() {
  var n;
  const t = (n = ue == null ? void 0 : ue.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function hb(t) {
  var n;
  if (!t) return;
  const e = (n = ue == null ? void 0 : ue.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function pb(t, e = 360, n = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const r = Ir(t), a = Number((r == null ? void 0 : r[0]) || 0), s = Number((r == null ? void 0 : r[1]) || 0);
  if (!Number.isFinite(a) || !Number.isFinite(s) || a >= e && s >= n) return;
  const u = [Math.max(e, a), Math.max(n, s)];
  try {
    typeof t.setSize == "function" ? t.setSize(u) : t.size = u, t.__panoStandaloneBootSized = !0;
  } catch (f) {
    String((f == null ? void 0 : f.message) || f || "unknown");
  }
}
function gb(t, e = 0, n = null, r = 1200) {
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
      t.__panoUserResized = !0, es(t, 150), e == null || e(), zh(t, 180, e);
    }
  };
}
function zh(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    t.__panoResizeSettleTimer = null, n == null || n(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function xi(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function mb(t, e = {}) {
  var it;
  const n = e.__allowStandalone === !0, r = Cy(t);
  if (r && !n) {
    Sh(t);
    return;
  }
  r && pb(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", Zo.register(t);
  const a = t.__panoPreviewMode === "stickers", s = e.__noLegacyFallback === !0, u = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null, String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""), a || xa.unregister(t);
  const f = String(e.__panoForcedPath || "").trim(), g = a ? Nh(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Kr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (g.chosenPath = f, g.reason = "controller_target_backend");
  const y = a ? g.chosenPath : "dom", v = g.signature || Kr(t);
  if (Number(t.__panoRebindGeneration || 0), Hc(t), t == null || t.id, t.__panoPreviewMode, g.reason, g.frontendVersionRaw, t.addDOMWidget, Ir(t), t.__panoFrontendSig = v, t.__panoStickersPath = y, a && xa.register(t), a && y === "legacy_draw") {
    if (s) return;
    Ti(t, { keepMonitor: !0 }), fo(t);
    return;
  }
  if ((it = t.__panoDomPreview) != null && it.widget) return;
  if (t.__panoLegacyPreviewHooked && Ti(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    a && !s && fo(t);
    return;
  }
  const d = e.noPreview === !0, M = a || d ? 0 : 56, P = document.createElement("div");
  if (Py(), P.className = "pano-node-preview-dom", P.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), d && P.classList.add("pano-node-preview--no-preview"), P.setAttribute("data-capture-wheel", "true"), P.setAttribute("tabindex", "-1"), P.style.cssText = [
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
    const j = t.addDOMWidget(Vc(), "preview", P, Ff(t, null));
    xi(t), t.__panoDomPreview = { widget: j, root: P, requestDraw: () => {
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
  const I = document.createElement("canvas");
  I.style.cssText = [
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
  ].join(";"), C.textContent = "Open editor and add frame", T.appendChild(I), T.appendChild(C), P.appendChild(T), wh(t, 120, 120), xi(t);
  let F = null;
  try {
    gb(t, M, () => {
      var j, ot;
      return (ot = (j = t.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : ot.call(j);
    }), F = t.addDOMWidget(
      Vc(),
      "preview",
      P,
      Ff(t, () => {
        var j, ot;
        return (ot = (j = t.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : ot.call(j);
      }, M)
    );
  } catch {
    a && fo(t);
    return;
  }
  const A = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, V = () => {
    A.needsDraw = !0, A.raf || (A.raf = requestAnimationFrame(E));
  }, R = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    es(t, 150), V();
  }) : null;
  R == null || R.observe(T);
  const K = () => {
    if (!a || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const j = 3, ot = (Nt) => {
      requestAnimationFrame(() => {
        var Mt;
        const At = !!(P != null && P.isConnected && (T != null && T.isConnected) && (I != null && I.isConnected) && Number(T.clientHeight || 0) > 0 && Number(I.clientHeight || 0) > 0);
        if (!At && Nt < j) {
          ot(Nt + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, t.__panoPreviewMode, Number((T == null ? void 0 : T.clientHeight) || 0), Number((I == null ? void 0 : I.clientHeight) || 0), !At) {
          if (s) {
            t.__panoPreviewMode, Number((T == null ? void 0 : T.clientHeight) || 0), Number((I == null ? void 0 : I.clientHeight) || 0);
            return;
          }
          Ti(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", fo(t), (Mt = t.setDirtyCanvas) == null || Mt.call(t, !0, !0);
        }
      });
    };
    ot(1);
  }, E = (j) => {
    var Nt, At, Mt;
    A.raf = 0;
    const ot = ct.stepInertia(j);
    (A.needsDraw || ot) && (A.needsDraw = !1, (Nt = t.flags) != null && Nt.collapsed || cb(t, I, null, ct), (At = t.setDirtyCanvas) == null || At.call(t, !0, !1)), (ot || A.needsDraw) && (A.raf = requestAnimationFrame(E)), ky() && (!t.__panoDebugLastTs || j - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = j, t.__panoPreviewMode, Ir(t), aa(P), aa(T), aa(I), aa(P.parentElement), aa((Mt = P.parentElement) == null ? void 0 : Mt.parentElement), Number(I.width || 0), Number(I.height || 0), void 0);
  }, ct = _s({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (j) => {
      t.__panoPreviewView = j;
    },
    onInteraction: () => {
      V();
    }
  });
  I.addEventListener("pointerdown", (j) => {
    var ot, Nt;
    gi(j, T) && u && j.button === 0 && ((ot = P.focus) == null || ot.call(P), (Nt = I.setPointerCapture) == null || Nt.call(I, j.pointerId), I.style.cursor = "grabbing", ct.startDrag(j.clientX, j.clientY, j.pointerId));
  }), I.addEventListener("pointermove", (j) => {
    !u || !ct.state.drag.active || (gi(j, T), ct.moveDrag(j.clientX, j.clientY, "pano"));
  });
  const J = (j) => {
    var ot;
    !u || !ct.state.drag.active || (gi(j, T), (ot = I.releasePointerCapture) == null || ot.call(I, j.pointerId), I.style.cursor = "grab", ct.endDrag(), Hh(t), V());
  };
  I.addEventListener("pointerup", J), I.addEventListener("pointercancel", J), I.addEventListener("pointerleave", (j) => {
    ct.state.drag.active && J(j);
  });
  const xt = (j) => {
    var Nt, At, Mt;
    if (!gi(j, T) || !u) return;
    const ot = db();
    ct.applyWheelEvent(j) && V(), (Nt = j.preventDefault) == null || Nt.call(j), (At = j.stopPropagation) == null || At.call(j), (Mt = j.stopImmediatePropagation) == null || Mt.call(j), requestAnimationFrame(() => {
      var ae, Ne;
      hb(ot), (Ne = (ae = ue == null ? void 0 : ue.canvas) == null ? void 0 : ae.setDirty) == null || Ne.call(ae, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((j) => {
    T.addEventListener(j, xt, { passive: !1, capture: !0 }), I.addEventListener(j, xt, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((j) => {
    I.addEventListener(j, (ot) => gi(ot, T)), T.addEventListener(j, (ot) => gi(ot, T));
  });
  const $ = Da(t, "state_json");
  if ($ && !$.__panoPreviewPatchedCb) {
    $.__panoPreviewPatchedCb = !0;
    const j = $.callback;
    $.callback = (ot) => {
      const Nt = j ? j(ot) : void 0;
      return V(), Nt;
    };
  }
  const at = Da(t, "bg_color");
  if (at && !at.__panoPreviewPatchedCb) {
    at.__panoPreviewPatchedCb = !0;
    const j = at.callback;
    at.callback = (ot) => {
      const Nt = j ? j(ot) : void 0;
      return V(), Nt;
    };
  }
  const Q = t.onRemoved, wt = t.onResize, lt = t.onExecuted;
  t.onExecuted = function(j) {
    zy(t, j), zc(t), xi(t), V();
    const ot = lt ? lt.apply(this, arguments) : void 0;
    return xi(t), ot;
  };
  const X = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return zc(t), xi(t), V(), X ? X.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var ot;
    const j = wt ? wt.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, es(this, 150), V(), (ot = this.setDirtyCanvas) == null || ot.call(this, !0, !1), j;
  }, t.onRemoved = function() {
    return nt(), xa.unregister(this), Zo.unregister(this), Q ? Q.apply(this, arguments) : void 0;
  };
  const nt = () => {
    var j;
    A.raf && cancelAnimationFrame(A.raf), (j = R == null ? void 0 : R.disconnect) == null || j.call(R), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = wt, t.onExecuted = lt, t.onConnectionsChange = X, t.onRemoved = Q;
  };
  t.__panoDomRestore = nt, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: F, root: P, canvas: I, requestDraw: V, state: A, emptyHintEl: C }, K(), V();
}
function Vf(t, e = {}) {
  Mh(t).attach({
    ...e,
    mode: "cutout"
  });
}
const ns = Math.PI / 180;
function Zr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Hf(t, e) {
  return Zr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function ho(t, e) {
  return Zr(t.x * e, t.y * e, t.z * e);
}
function $f(t, e) {
  return Zr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function po(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Zr(t.x / e, t.y / e, t.z / e);
}
function yb(t, e) {
  const n = t * ns, r = e * ns, a = Math.cos(r);
  return Zr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function bb(t, e, n = 0) {
  const r = yb(t, e), a = Zr(0, 1, 0);
  let s = $f(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Zr(1, 0, 0)), s = po(s);
  const u = po($f(r, s)), f = n * ns, g = Math.cos(f), y = Math.sin(f), v = Hf(ho(s, g), ho(u, y)), d = Hf(ho(s, -y), ho(u, g));
  return { fwd: r, right: po(v), up: po(d) };
}
const go = 140, vb = 180, zf = 40, bc = 10;
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
  return typeof ((s = Je) == null ? void 0 : s.apiURL) == "function" ? Je.apiURL(a) : a;
}
function wa(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return wa(t[0]);
    const e = typeof t[0] == "string" ? String(t[0] || "").trim() : "";
    if (e)
      return Bf({
        filename: e,
        subfolder: String(t[1] || "").trim(),
        type: String(t[2] || "output").trim() || "output"
      });
    for (const n of t) {
      const r = wa(n);
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
function _b(t, e = "erp_image") {
  var T, I, C, F, A, V, R, K, E, ct, J, xt;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let r = null;
  const a = n.find(($) => String(($ == null ? void 0 : $.name) || "") === String(e));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const $ = n.find((at) => String((at == null ? void 0 : at.type) || "").toUpperCase() === "IMAGE" && (at == null ? void 0 : at.link) != null);
    ($ == null ? void 0 : $.link) != null && (r = $.link);
  }
  if (r == null) return "";
  const s = ((I = (T = t == null ? void 0 : t.graph) == null ? void 0 : T.links) == null ? void 0 : I[r]) || ((A = (F = (C = pn) == null ? void 0 : C.graph) == null ? void 0 : F.links) == null ? void 0 : A[r]);
  if (!s) return "";
  const u = Number(s.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (K = (R = (V = pn) == null ? void 0 : V.graph) == null ? void 0 : R.getNodeById) == null ? void 0 : K.call(R, u), g = Gf(u), y = Gf(t == null ? void 0 : t.id), v = [
    g == null ? void 0 : g.images,
    (E = g == null ? void 0 : g.ui) == null ? void 0 : E.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    (ct = y == null ? void 0 : y.ui) == null ? void 0 : ct.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const $ of v)
    if (Array.isArray($))
      for (const at of $) {
        const Q = wa(at);
        if (Q) return Q;
      }
  let d = [];
  try {
    d = typeof ((J = pn) == null ? void 0 : J.getNodeImageUrls) == "function" ? pn.getNodeImageUrls(f) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const $ of d) {
      const at = wa($);
      if (at) return at;
    }
  if (f) {
    const $ = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const at of $) {
      const Q = wa(at);
      if (Q) return Q;
    }
  }
  const M = (xt = f == null ? void 0 : f.widgets) == null ? void 0 : xt.find(($) => String(($ == null ? void 0 : $.name) || "").toLowerCase() === "image"), P = String((M == null ? void 0 : M.value) || "").trim();
  return P ? Je.apiURL(`/view?filename=${encodeURIComponent(P)}&type=input&subfolder=`) : "";
}
function Kf(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function Wf(t, e, n, r, a, s) {
  var d, M, P;
  if (e.clearRect(0, 0, n, r), e.fillStyle = "#070707", e.fillRect(0, 0, n, r), !s || !s.complete || !(s.naturalWidth || s.width) || n <= 1 || r <= 1) {
    Kf(e, n, r);
    return;
  }
  const u = bb(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * ns * 0.5), g = Number(((P = (M = (d = t == null ? void 0 : t.widgets) == null ? void 0 : d.find) == null ? void 0 : M.call(d, (T) => (T == null ? void 0 : T.name) === "coverage")) == null ? void 0 : P.value) || 360) === 180 ? 180 : 360;
  t.__panoStandaloneCore || (t.__panoStandaloneCore = Fa());
  const y = vs({
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
    scene: xs(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!t.__panoStandaloneCore.syncState(y) && (() => {
    const T = t.__panoStandaloneCore.renderToTarget(
      "preview_node",
      wy(a, g),
      { width: n, height: r, dpr: window.devicePixelRatio || 1 }
    );
    return T ? (e.drawImage(T, 0, 0, n, r), !0) : !1;
  })() || (ts(t, e, { x: 0, y: 0, w: n, h: r }, u, f, s, Yo), Kf(e, n, r));
}
function qf(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class xb {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = _s({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Le(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: B(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: B(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
        `min-height:${go}px`,
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
          return go;
        },
        getHeight() {
          return go;
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
            minHeight: Math.max(go, Number(s.minHeight || 0)),
            minWidth: Math.max(vb, Number(s.minWidth || 0))
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
      var y, v, d, M, P, T;
      const s = Fo(this, n, r, a), u = e.getLegacyPreviewRect();
      if (!s || !qf(s.x, s.y, u))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof r == "number" ? r : 0));
      Number(((y = e.view) == null ? void 0 : y.fov) || 100);
      const g = e.controller.applyWheel(Math.sign(f));
      return Number(((v = e.view) == null ? void 0 : v.fov) || 100), g && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (M = n == null ? void 0 : n.preventDefault) == null || M.call(n), (P = n == null ? void 0 : n.stopPropagation) == null || P.call(n), (T = n == null ? void 0 : n.stopImmediatePropagation) == null || T.call(n), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, s, u;
    const e = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - bc * 2), n = Math.max(60, Number(((u = (s = this.node) == null ? void 0 : s.size) == null ? void 0 : u[1]) || 0) - zf - bc);
    return { x: bc, y: zf, w: e, h: n };
  }
  drawLegacy(e) {
    var r, a;
    if (!e || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (e.save(), e.translate(n.x, n.y), Wf(this.node, e, n.w, n.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, n.w, n.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), e.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const e = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, r = Math.max(1, Math.round(e.width * n)), a = Math.max(1, Math.round(e.height * n));
    (this.canvas.width !== r || this.canvas.height !== a) && (this.canvas.width = r, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    const e = _b(this.node, this.imageInputName);
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
    var n, r, a, s, u, f, g, y, v, d, M;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || a.call(r), this.resizeObserver = null;
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
    const e = ((v = (y = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : y.find) == null ? void 0 : v.call(y, (P) => (P == null ? void 0 : P.name) === "coverage")) || null;
    e && (e.callback = this.orig.coverageWidgetCallback), (M = (d = this.node.__panoStandaloneCore) == null ? void 0 : d.dispose) == null || M.call(d), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function wb(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const n = new xb(t, e);
  t.__panoPreviewNodeRuntime = n, n.attach();
}
function Sb(t, e, n) {
  if (!(t != null && t.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(e)}`;
  if (t[r]) return;
  t[r] = !0;
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
function jh(t) {
  return !!(t != null && t.prototype);
}
function Uc(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function Nb(t, e = {}) {
  jh(t) || wb(t, {
    ...e,
    onOpen: Uc(t, e.onOpen)
  });
}
function Mb(t, e = {}) {
  if (!jh(t)) {
    Vf(t, {
      ...e,
      onOpen: Uc(t, e.onOpen)
    });
    return;
  }
  Sb(t, "cutout_preview", (n) => {
    Vf(n, {
      ...e,
      onOpen: Uc(n, e.onOpen)
    });
  });
}
const en = {
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
function kb(t = 80, e = null, n = 8) {
  const r = [];
  let a = -1;
  const s = Math.max(1, Number(t || 80)), u = Math.max(1, Number(n || 8));
  function f(y) {
    if (r.splice(0, r.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((d) => {
      r.push(String(d || ""));
    }), !r.length)) return;
    const v = Number(y.index);
    Number.isInteger(v) ? v === -1 ? a = -1 : a = Math.max(0, Math.min(r.length - 1, v)) : a = r.length - 1;
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
      const y = r.length, v = Math.max(0, y - u), d = a >= 0 ? Math.max(0, Math.min(a, v)) : v, M = r.slice(d, d + u), P = a < 0 ? -1 : Math.max(-1, Math.min(M.length - 1, a - d));
      return {
        version: 1,
        entries: M,
        index: P
      };
    },
    hydrate: f
  };
}
function Zt(t, e = null) {
  const n = Number(t);
  return Number.isFinite(n) ? n : e;
}
function Pb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Ab(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    if (!r || typeof r != "object") continue;
    const a = String(r.actionGroupId || r.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const s = Zt(r.z_index ?? r.zIndex, e.length);
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
function Cb(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Ib(t, e) {
  if (!t || typeof t != "object" || !e) return null;
  const n = Zt(t.t, 0), r = Zt(t.widthScale, null), a = Zt(t.pressureLike, null);
  if (e.kind === "ERP_GLOBAL") {
    const s = Zt(t.u, null), u = Zt(t.v, null);
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
    const s = Zt(t.u, null), u = Zt(t.v, null);
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
function mo(t, e, n = 1) {
  if (!Array.isArray(t)) return null;
  const r = [];
  for (const a of t) {
    const s = Ib(a, e);
    if (!s) return null;
    r.push(s);
  }
  return r.length >= n ? r : null;
}
function Eb(t, e, n, r) {
  if (!t || typeof t != "object") return null;
  const a = String(t.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const g = mo(t.points, e, 3);
    return g ? { geometryKind: a, points: g } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const s = mo(t.points, e, 1);
  if (!s) return null;
  const u = mo(t.rawPoints, e, 1), f = mo(t.processedPoints, e, 1);
  return {
    geometryKind: a,
    points: s,
    rawPoints: u || s.map((g) => ({ ...g })),
    processedPoints: f || s.map((g) => ({ ...g }))
  };
}
function Tb(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = Cb(t.targetSpace);
  if (!n) return null;
  const r = String(t.toolKind || "").trim(), a = Eb(t.geometry, n, r, e === "paint");
  if (!a) return null;
  const s = Zt(t.size, null), u = Zt(t.opacity, null);
  if (s == null || u == null) return null;
  const f = String(t.id || "").trim(), g = String(t.actionGroupId || "").trim();
  if (!f || !g) return null;
  const y = Zt(t.radiusValue, null), v = String(t.radiusModel || "").trim() || null;
  let d = null;
  if (e === "paint") {
    const M = t.color;
    if (!M || typeof M != "object") return null;
    d = {
      r: Math.max(0, Math.min(1, Zt(M.r, 0))),
      g: Math.max(0, Math.min(1, Zt(M.g, 0))),
      b: Math.max(0, Math.min(1, Zt(M.b, 0))),
      a: Math.max(0, Math.min(1, Zt(M.a, 1)))
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
    hardness: Zt(t.hardness, null),
    flow: Zt(t.flow, null),
    spacing: Zt(t.spacing, null),
    createdAt: Math.trunc(Zt(t.createdAt, 0)),
    color: d,
    radiusModel: v,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function Xf(t, e) {
  const n = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return n;
  for (const r of t.strokes) {
    const a = Tb(r, e);
    a && n.strokes.push(a);
  }
  return n;
}
function Db(t) {
  if (!t || typeof t != "object") return null;
  const e = Zt(t.u0, null), n = Zt(t.v0, null), r = Zt(t.u1, null), a = Zt(t.v1, null);
  if (e == null || n == null || r == null || a == null) return null;
  const s = (f) => Math.max(0, Math.min(1, f)), u = { u0: s(e), v0: s(n), u1: s(r), v1: s(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function Lb(t) {
  const e = t || {};
  return {
    du: Zt(e.du, 0) ?? 0,
    dv: Zt(e.dv, 0) ?? 0,
    rot_deg: Zt(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Zt(e.scale, 1) ?? 1)
  };
}
function Rb(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const n = String(t.id || "").trim();
  if (!n) return null;
  const r = String(t.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const a = String(t.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const s = Db(t.bbox);
  return s ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, Zt(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: s,
    rasterDataUrl: a,
    transform: Lb(t.transform)
  } : null;
}
function Ob(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    const a = Rb(r, e.length);
    !a || n.has(a.id) || (n.add(a.id), e.push(a));
  }
  return e;
}
function Sa(t) {
  const e = Pb();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: Ab(t.groups),
    paint: Xf(t.paint, "paint"),
    mask: Xf(t.mask, "mask"),
    raster_objects: Ob(t.raster_objects)
  };
}
const Qt = {
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
}, rs = {
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
    return (r, a) => (ye(), Oi(lm(t.tag), uh({
      class: ["pano-btn pano-btn-icon", t.extraClass]
    }, n.value, { innerHTML: t.icon }), null, 16, ["class", "innerHTML"]));
  }
}, Fb = { class: "pano-floating-right" }, Vb = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (ye(), Re("div", Fb, [
      n[0] || (n[0] = xe("span", {
        class: "pano-fov-value",
        "data-fov-value": "",
        "aria-label": "Field of view"
      }, "100°", -1)),
      (ye(!0), Re(Ve, null, Ai(t.buttons, (r) => (ye(), Oi(rs, {
        key: r.action,
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { "data-action": r.action }
      }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, Hb = {
  class: "pano-paint-dock is-hidden",
  "data-paint-dock": ""
}, $b = ["data-paint-pane"], zb = {
  key: 0,
  class: "pano-paint-color-float",
  "data-paint-color-row": "",
  hidden: ""
}, jb = ["data-paint-color-swatch", "aria-label"], Ub = ["data-paint-footer"], Bb = ["data-paint-group"], Gb = ["hidden"], Kb = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] }
  },
  setup(t) {
    function e(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    return (n, r) => (ye(), Re("div", Hb, [
      (ye(!0), Re(Ve, null, Ai(t.panes, (a) => (ye(), Re("div", {
        key: a.key,
        class: "pano-paint-pane",
        "data-paint-pane": a.key
      }, [
        a.showColorFloat ? (ye(), Re("div", zb, [
          (ye(!0), Re(Ve, null, Ai(t.paintSwatches, (s) => (ye(), Re("button", {
            key: s.id,
            class: "pano-paint-color-dot",
            type: "button",
            "data-paint-color-swatch": s.id,
            "aria-label": s.label,
            style: ds(e(s))
          }, null, 12, jb))), 128)),
          r[0] || (r[0] = lh('<button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color"></button><div class="pano-paint-color-pop" data-paint-color-pop hidden><div class="pano-paint-color-pop-head"><span class="pano-paint-color-preview" data-paint-color-preview></span><span class="pano-paint-color-pop-label">Custom Color</span></div><div class="pano-paint-color-field"><div class="pano-paint-sv-panel" data-paint-color-sv><div class="pano-paint-sv-cursor" data-paint-color-sv-cursor></div></div><div class="pano-paint-hue-strip" data-paint-hue-strip><div class="pano-paint-hue-handle" data-paint-hue-handle></div></div></div><label class="pano-paint-color-field"><span>Opacity</span><div class="pano-paint-alpha-wrap"><input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider><span data-paint-alpha-value>100%</span></div></label><div class="pano-paint-color-history" data-paint-color-history-wrap><div class="pano-paint-color-history-list" data-paint-color-history></div></div></div>', 2))
        ])) : Io("", !0),
        xe("div", {
          class: "pano-paint-footer",
          "data-paint-footer": a.footer
        }, [
          xe("div", {
            class: "pano-paint-footer-group",
            "data-paint-group": a.group
          }, [
            (ye(!0), Re(Ve, null, Ai(a.tools, (s) => (ye(), Oi(rs, {
              key: `${a.key}-${s.key}`,
              icon: s.icon,
              label: s.label,
              tip: s.tip,
              attrs: { [s.attr]: s.key }
            }, null, 8, ["icon", "label", "tip", "attrs"]))), 128))
          ], 8, Bb),
          r[1] || (r[1] = xe("div", {
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
            Qe(rs, {
              icon: ol(Qt).clear,
              label: a.clearLabel,
              tip: a.clearTip,
              "extra-class": "pano-paint-layer-clear",
              attrs: { "data-paint-layer-clear-current": a.clearTarget }
            }, null, 8, ["icon", "label", "tip", "attrs"])
          ], 8, Gb)
        ], 8, Ub)
      ], 8, $b))), 128))
    ]));
  }
}, Wb = {
  class: "pano-side",
  "data-side": ""
}, qb = { class: "pano-side-head" }, Yb = ["innerHTML"], Xb = {
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
    const r = Ii(() => `<span class="pano-side-title-icon" aria-hidden="true">${Qt.globe}</span><span>${n(e.nodeTitle)}</span>`);
    return (a, s) => (ye(), Re("div", Wb, [
      xe("div", qb, [
        xe("div", {
          class: "pano-side-title",
          innerHTML: r.value
        }, null, 8, Yb),
        s[0] || (s[0] = xe("div", { class: "pano-side-actions" }, null, -1))
      ]),
      s[1] || (s[1] = xe("div", { class: "pano-divider" }, null, -1))
    ]));
  }
}, Zb = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, Jb = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (ye(), Re("div", Zb, [
      (ye(!0), Re(Ve, null, Ai(t.buttons, (r) => (ye(), Oi(rs, {
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
}, Qb = { class: "pano-floating-top" }, tv = ["data-view-count"], ev = ["data-view", "aria-pressed", "aria-label"], nv = ["innerHTML"], rv = { class: "label" }, iv = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (ye(), Re("div", Qb, [
      xe("div", {
        class: "pano-view-toggle",
        "data-selected": "pano",
        "data-view-count": String(t.buttons.length)
      }, [
        (ye(!0), Re(Ve, null, Ai(t.buttons, (r) => (ye(), Re("button", {
          key: r.key,
          class: hs(["pano-view-btn", r.extraClass]),
          "data-view": r.key,
          "aria-pressed": r.pressed,
          "aria-label": r.label
        }, [
          xe("span", {
            innerHTML: r.icon
          }, null, 8, nv),
          xe("span", rv, fd(r.label), 1)
        ], 10, ev))), 128))
      ], 8, tv)
    ]));
  }
};
function Uh(t = "stickers") {
  const e = String(t || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Qt.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Qt.unwrap, pressed: "false", extraClass: "" },
      ...e ? [{ key: "frame", label: "Frame", icon: Qt.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Qt.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Qt.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Qt.circle_dashed_tool, pressed: "false" },
      ...e ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Qt.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Qt.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Qt.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Qt.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Qt.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Qt.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Qt.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Qt.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Qt.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Qt.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Qt.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Qt.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Qt.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Qt.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Qt.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Qt.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Qt.lasso_tool }
        ]
      }
    ]
  };
}
const av = ["aria-label"], ov = { class: "pano-stage-wrap" }, sv = ["innerHTML"], cv = {
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
    const f = /* @__PURE__ */ D0(null), g = Ii(() => n.readOnly === !0), y = Ii(() => n.shellPreset || Uh(n.type)), v = Ii(() => {
      var V;
      const A = Array.isArray((V = y.value) == null ? void 0 : V.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return g.value && A.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Qt.fullscreen
      }), A;
    });
    function d() {
      const A = f.value;
      return A ? Array.from(A.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((V) => V instanceof HTMLElement ? !V.hidden && V.tabIndex >= 0 && V.offsetParent !== null : !1) : [];
    }
    function M() {
      var R;
      const V = d()[0] || f.value;
      (R = V == null ? void 0 : V.focus) == null || R.call(V);
    }
    function P() {
      var A;
      u != null && u.isConnected && ((A = u.focus) == null || A.call(u)), u = null;
    }
    function T(A) {
      var V, R, K, E;
      if (!A.defaultPrevented) {
        if (A.key === "Tab") {
          const ct = d();
          if (!ct.length) {
            A.preventDefault(), (R = (V = f.value) == null ? void 0 : V.focus) == null || R.call(V);
            return;
          }
          const J = ct[0], xt = ct[ct.length - 1], $ = document.activeElement;
          if (A.shiftKey) {
            ($ === J || $ === f.value || !((K = f.value) != null && K.contains($))) && (A.preventDefault(), xt.focus());
            return;
          }
          ($ === xt || !((E = f.value) != null && E.contains($))) && (A.preventDefault(), J.focus());
          return;
        }
        A.key === "Escape" && r("close");
      }
    }
    function I() {
      s || (a = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function C() {
      s && (document.body.style.overflow = a, s = !1);
    }
    function F(A) {
      document.removeEventListener("keydown", T), A ? (u || (u = document.activeElement), I(), document.addEventListener("keydown", T), Cd(() => {
        M();
      })) : (C(), P());
    }
    return Hd(() => {
      F(n.open);
    }), $d(() => {
      C(), document.removeEventListener("keydown", T), P();
    }), Po(() => n.open, (A) => {
      F(A);
    }), (A, V) => t.open ? (ye(), Re("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: V[0] || (V[0] = x1((R) => r("close"), ["self"]))
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
        xe("div", ov, [
          V[1] || (V[1] = lh('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          g.value ? Io("", !0) : (ye(), Re(Ve, { key: 0 }, [
            Qe(Jb, {
              buttons: y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Qe(Kb, {
              "paint-swatches": t.paintSwatches,
              panes: y.value.paintPanes || []
            }, null, 8, ["paint-swatches", "panes"])
          ], 64)),
          Qe(iv, {
            buttons: y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Qe(Vb, { buttons: v.value }, null, 8, ["buttons"]),
          V[2] || (V[2] = xe("div", {
            class: "pano-selection-menu",
            "data-selection-menu": ""
          }, null, -1)),
          xe("button", {
            class: "pano-btn pano-btn-icon pano-output-preview-toggle",
            "data-action": "toggle-output-preview-size",
            "aria-label": "Expand Preview",
            "data-tip": "Expand preview",
            style: { display: "none" },
            innerHTML: ol(Qt).fullscreen
          }, null, 8, sv),
          V[3] || (V[3] = xe("div", {
            class: "pano-tooltip",
            "data-tooltip": ""
          }, null, -1))
        ]),
        t.hideSidebar ? Io("", !0) : (ye(), Oi(Xb, {
          key: 0,
          "node-title": t.nodeTitle
        }, null, 8, ["node-title"]))
      ], 8, av)
    ])) : Io("", !0);
  }
}, is = "state_json", Fr = "sticker_image_1", vc = "external_image", _c = "pano_sticker_input_images", Vo = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], De = Math.PI / 180, zr = 180 / Math.PI, as = 24, lv = 4, uv = 4, da = /* @__PURE__ */ new Map(), Bc = /* @__PURE__ */ new Map(), ha = /* @__PURE__ */ new Map(), Et = {
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
function Xe(t) {
  return Number(t) === 180 ? 180 : 360;
}
function fv(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function dv(t) {
  return 1 - Math.pow(1 - t, 3);
}
function hv(t) {
  return t * t * t;
}
function Wn(t, e, n) {
  return { x: t, y: e, z: n };
}
function yo(t, e) {
  return Wn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function bo(t, e) {
  return Wn(t.x * e, t.y * e, t.z * e);
}
function Sn(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function vo(t, e) {
  return Wn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function mi(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Wn(t.x / e, t.y / e, t.z / e);
}
function Hn(t, e) {
  const n = t * De, r = e * De, a = Math.cos(r);
  return Wn(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function _o(t) {
  return {
    yaw: Le(Math.atan2(t.x, t.z) * zr),
    pitch: B(Math.asin(B(t.y, -1, 1)) * zr, -90, 90)
  };
}
function ar(t, e) {
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
function xc(t, e, n) {
  const r = Number(n.x || 0) - Number(e.x || 0), a = Number(n.y || 0) - Number(e.y || 0), s = Number(t.x || 0) - Number(e.x || 0), u = Number(t.y || 0) - Number(e.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return $r(t, e);
  const g = B((s * r + u * a) / f, 0, 1), y = Number(e.x || 0) + r * g, v = Number(e.y || 0) + a * g, d = Number(t.x || 0) - y, M = Number(t.y || 0) - v;
  return d * d + M * M;
}
function or(t, e, n) {
  return t + (e - t) * n;
}
function Nn(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(B(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(B(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(B(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${B(n, 0, 1)})`;
}
function pv(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let xo = { fillStyle: "", url: "" };
function gv(t, e, n) {
  if (xo.url && xo.fillStyle === String(t || ""))
    return xo.url;
  const r = pv(`
<svg xmlns="http://www.w3.org/2000/svg" width="${as}" height="${as}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return xo = { fillStyle: String(t || ""), url: r }, r;
}
function Ho(t, e, n = 0.015) {
  return !t || !e ? !1 : Math.abs(Number(t.r ?? 0) - Number(e.r ?? 0)) <= n && Math.abs(Number(t.g ?? 0) - Number(e.g ?? 0)) <= n && Math.abs(Number(t.b ?? 0) - Number(e.b ?? 0)) <= n && Math.abs(Number(t.a ?? 1) - Number(e.a ?? 1)) <= n;
}
function un(t) {
  return {
    r: B(Number((t == null ? void 0 : t.r) ?? 0), 0, 1),
    g: B(Number((t == null ? void 0 : t.g) ?? 0), 0, 1),
    b: B(Number((t == null ? void 0 : t.b) ?? 0), 0, 1),
    a: B(Number((t == null ? void 0 : t.a) ?? 1), 0, 1)
  };
}
function nn(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function mv(t) {
  return Vo.some((e) => Ho(t, e.color));
}
function wc(t, e, n) {
  const r = (Number(t) % 1 + 1) % 1, a = B(Number(e), 0, 1), s = B(Number(n), 0, 1);
  if (a <= 1e-6) return { r: s, g: s, b: s };
  const u = Math.floor(r * 6), f = r * 6 - u, g = s * (1 - a), y = s * (1 - f * a), v = s * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: s, g: v, b: g };
    case 1:
      return { r: y, g: s, b: g };
    case 2:
      return { r: g, g: s, b: v };
    case 3:
      return { r: g, g: y, b: s };
    case 4:
      return { r: v, g, b: s };
    default:
      return { r: s, g, b: y };
  }
}
function oa(t) {
  const e = B(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), n = B(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), r = B(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), a = Math.max(e, n, r), s = Math.min(e, n, r), u = a - s;
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
function Bh(t, e) {
  const n = Zf(t, 1), r = Zf(e, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, s = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(r * a)), f = (d, M) => M ? f(M, d % M) : d, g = f(s, u) || 1, y = Math.max(1, Math.round(s / g)), v = Math.max(1, Math.round(u / g));
  return `${y}:${v}`;
}
function Gc(t) {
  const e = B(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * De, n = B(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * De;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function yv(t) {
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
  return yv(e) || Bh(e, 1);
}
function bv(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = jr(e), e;
}
function yi(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : jr(t);
}
function vv(t, e, n, r = 1.1) {
  const a = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3, u = (f) => {
    const g = f.x - a, y = f.y - s, v = Math.hypot(g, y) || 1;
    return { x: f.x + g / v * r, y: f.y + y / v * r };
  };
  return [u(t), u(e), u(n)];
}
let wo = null;
function _v() {
  return wo || (wo = new Promise((t) => {
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
  }), wo);
}
const Gh = "pano_suite.ui_settings.v1", Kh = "pano_suite.node_grid_visibility.v1";
let wi = null, $n = null, So = { text: null, parsed: null };
function Na(t) {
  const e = t && typeof t == "object" ? t : {}, n = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function xv() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Gh)) || "").trim();
    if (!e) return wi ? Na(wi) : null;
    const n = JSON.parse(e), r = Na(n);
    return wi = r, r;
  } catch {
    return wi ? Na(wi) : null;
  }
}
function wv(t) {
  var n;
  const e = Na(t);
  wi = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Gh, JSON.stringify(e));
  } catch {
  }
  return e;
}
function Wh() {
  var t;
  if ($n && typeof $n == "object")
    return $n;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Kh)) || "").trim();
    if (!e)
      return $n = {}, $n;
    const n = JSON.parse(e);
    return $n = n && typeof n == "object" ? n : {}, $n;
  } catch {
    return $n = {}, $n;
  }
}
function Sv(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const a = Wh()[n];
  return typeof a == "boolean" ? a : !!e;
}
function Nv(t, e) {
  var a;
  const n = String(t ?? "").trim();
  if (!n) return;
  const r = Wh();
  r[n] = !!e, $n = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Kh, JSON.stringify(r));
  } catch {
  }
}
function Mv(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([n, r]) => {
    e[n] = r && typeof r == "object" ? { ...r } : r;
  }), e;
}
function kv(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const n = { ...e };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Pv(t) {
  var r, a;
  const e = Array.isArray((r = t == null ? void 0 : t.paint) == null ? void 0 : r.strokes) ? t.paint.strokes.length : 0, n = Array.isArray((a = t == null ? void 0 : t.mask) == null ? void 0 : a.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: n };
}
function Jf(t) {
  const { paintCount: e, maskCount: n } = Pv(t), r = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
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
function bi(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Qf(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function Av(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : bv(e)) : [];
}
function Cv(t, e = 2048, n = "#00ff00", r = 360) {
  const a = xv(), s = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Xe(r),
    bg_color: n,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Sa(null),
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
    if (So.text === u ? f = So.parsed : (f = JSON.parse(u), So = { text: u, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return s;
    const g = {
      ...s,
      ...f,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Mv(f.assets),
      stickers: kv(f.stickers),
      shots: Av(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: Sa(f.painting),
      painting_layer: f.painting_layer && typeof f.painting_layer == "object" ? f.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(f.ui_settings && f.ui_settings.invert_view_x),
        invert_view_y: !!(f.ui_settings && f.ui_settings.invert_view_y),
        preview_quality: (() => {
          var v;
          const y = String(((v = f.ui_settings) == null ? void 0 : v.preview_quality) || "balanced");
          return y === "draft" || y === "balanced" || y === "high" ? y : "balanced";
        })()
      },
      active: f.active && typeof f.active == "object" ? { ...f.active } : { ...s.active }
    };
    return a && (g.ui_settings = Na({ ...g.ui_settings, ...a })), g.output_preset = Wc(e, Number(g.output_preset || s.output_preset)), g.bg_color = String(n || g.bg_color || s.bg_color), g.coverage = Xe(r), delete g.editor_history, g;
  } catch {
    return So = { text: u, parsed: null }, s;
  }
}
function hn(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function wl(t) {
  if (!t || t.__panoCoverageWidgetSyncInstalled) return;
  const e = hn(t, "coverage");
  if (!e) return;
  const n = typeof e.callback == "function" ? e.callback.bind(e) : null;
  e.callback = function(...r) {
    var s, u, f, g, y, v, d, M, P, T;
    const a = n ? n(...r) : void 0;
    return t.__panoStateCache = null, t.__panoLiveStateOverride = null, t.__panoWrappedErpCache = null, t.__panoPanoBackgroundCache = null, (u = (s = t.__panoPreviewNodeRuntime) == null ? void 0 : s.requestDraw) == null || u.call(s), (g = (f = t.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (y = t.setDirtyCanvas) == null || y.call(t, !0, !0), (d = (v = t.graph) == null ? void 0 : v.setDirtyCanvas) == null || d.call(v, !0, !0), (T = (P = (M = pn) == null ? void 0 : M.canvas) == null ? void 0 : P.setDirty) == null || T.call(P, !0, !0), a;
  }, t.__panoCoverageWidgetSyncInstalled = !0;
}
function Iv(t) {
  const e = String(t ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(e) || /^#?[0-9a-fA-F]{3}$/.test(e);
}
function td(t) {
  const e = String(t ?? "").trim();
  return e.startsWith("{") && e.endsWith("}");
}
function Ev(t) {
  var P, T, I, C, F;
  if (!t || t.__panoCoverageWidgetOrderMigrated) return;
  const e = hn(t, "coverage"), n = hn(t, "bg_color"), r = hn(t, is), a = hn(t, "sticker_state");
  if (!e || !n || !r) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const s = String(e.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(s) && Iv(s) && (td(u) || u === ""))) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (td(u))
    try {
      const A = JSON.parse(u);
      y = String(Xe(A == null ? void 0 : A.coverage));
    } catch {
      y = "360";
    }
  const v = s, d = u, M = f;
  e.value = y, (P = e.callback) == null || P.call(e, y), n.value = v, (T = n.callback) == null || T.call(n, v), r.value = d, (I = r.callback) == null || I.call(r, d), a && (a.value = M, (C = a.callback) == null || C.call(a, M)), (F = t.setDirtyCanvas) == null || F.call(t, !0, !0), t.__panoCoverageWidgetOrderMigrated = !0;
}
function No(t) {
  return String(t ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function Tv(t, e) {
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
function Dv(t, e) {
  (Array.isArray(t == null ? void 0 : t.widgets) ? t.widgets : []).forEach((r) => {
    var s, u;
    const a = String((r == null ? void 0 : r.name) || "");
    (a === e || a.trim() === e || a.toLowerCase().includes(String(e).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (s = r.inputEl) != null && s.style && (r.inputEl.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
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
function sa(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Wc(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : e;
}
function qh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Lv(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Yh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Rv(t, e, n = null) {
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
  return !r && n != null && (r = Lv(t == null ? void 0 : t.graph, n)), r;
}
function os(t) {
  var a;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const r = `/view?${n.toString()}`;
  return typeof ((a = Je) == null ? void 0 : a.apiURL) == "function" ? Je.apiURL(r) : r;
}
function Ov(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Fv(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function Vv(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function Xh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Ov(e)) return [e];
  const { filename: n, subfolder: r } = Fv(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => os({
    filename: n,
    subfolder: r,
    type: s
  }));
  return Vv([...a, e]);
}
function Hv(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? os({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function Ma(t) {
  var r;
  const e = (r = pn) == null ? void 0 : r.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  return e instanceof Map ? e.get(t) || e.get(n) || e.get(Number(n)) || null : e[t] || e[n] || null;
}
function Ri(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Ri(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return os({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Ri(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : os(t);
}
function $v(t, e = -1) {
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
    const a = Ri(r);
    !a || n.has(a) || (n.add(a), e.push(a));
  }
  return e;
}
function zv(t, e, n, r = null) {
  var d;
  const a = Ma(t == null ? void 0 : t.id), s = Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d[e]) ? a.ui[e] : Array.isArray(a == null ? void 0 : a[e]) ? a[e] : [], u = Array.isArray(s) && s.length ? s[0] : null, f = Ri(u);
  if (!f) return null;
  const g = `__ui__${e}`, y = n.get(g);
  if (y && y.__panoSrc === f) return y;
  const v = new Image();
  return v.__panoSrc = f, v.onload = () => {
    typeof r == "function" && r(v);
  }, v.src = f, n.set(g, v), v;
}
function jv(t, e) {
  var A, V;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], a = r.findIndex((R) => String((R == null ? void 0 : R.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const s = r[a], u = s == null ? void 0 : s.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = qh(t.graph, u), { originId: g, originSlot: y } = Yh(f);
  if (g == null) return { src: "", sourceType: "", inputName: n };
  const v = Rv(t, a, g), d = Number(y || 0);
  if (!v) return { src: "", sourceType: "", inputName: n };
  let M = [];
  try {
    M = typeof ((A = pn) == null ? void 0 : A.getNodeImageUrls) == "function" ? pn.getNodeImageUrls(v) || [] : [];
  } catch {
    M = [];
  }
  if (Array.isArray(M) && M.length) {
    const R = [];
    d >= 0 && d < M.length && R.push(M[d]), R.push(...M);
    const K = Nc(R);
    if (K.length) return { src: K[0], srcCandidates: K, sourceType: "appNodeImageUrls", inputName: n };
  }
  const P = Ma((v == null ? void 0 : v.id) ?? g), T = $v(P, d), I = Nc(T);
  if (I.length) return { src: I[0], srcCandidates: I, sourceType: "nodeOutputs", inputName: n };
  const C = Array.isArray(v == null ? void 0 : v.imgs) ? v.imgs : [];
  if (C.length) {
    const R = [];
    d >= 0 && d < C.length && R.push(C[d]), R.push(...C);
    const K = Nc(R);
    if (K.length) return { src: K[0], srcCandidates: K, sourceType: "nodeImgs", inputName: n };
  }
  const F = (V = v == null ? void 0 : v.widgets) == null ? void 0 : V.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
  if (F) {
    let R = Ri(F.value);
    if (R && !R.includes("/") && !R.includes(":") && (v.comfyClass === "LoadImage" || v.type === "LoadImage") && (R = Je.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`)), R) return { src: R, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function Uv(t, e, n, r = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const s = Xh(a);
  if (!s.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(e || "image"), f = t.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === a && f.img) return f.img;
  const g = new Image(), y = { srcRaw: a, resolvedSrc: "", img: g };
  t.__panoLinkedInputImageCache.set(u, y);
  let v = -1;
  const d = () => {
    var P, T;
    if (v += 1, v >= s.length) {
      try {
        (T = (P = t.__panoLinkedInputImageCache) == null ? void 0 : P.delete) == null || T.call(P, u);
      } catch {
      }
      return;
    }
    const M = s[v];
    y.resolvedSrc = M, g.src = M;
  };
  return g.onload = () => {
    var M;
    r == null || r(), (M = t.setDirtyCanvas) == null || M.call(t, !0, !0);
  }, g.onerror = () => {
    var M, P;
    if (v + 1 < s.length) {
      d();
      return;
    }
    try {
      (P = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || P.call(M, u);
    } catch {
    }
  }, d(), g;
}
function Bv(t, e, n, r = null) {
  const a = Array.isArray(n) ? n.map((T) => String(T || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = String(e || "image"), u = a.join(`
`), f = t.__panoLinkedInputImageCache.get(s);
  if (f && f.srcRaw === u && f.img) return f.img;
  const g = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((T) => {
    Xh(T).forEach((I) => {
      const C = String(I || "").trim();
      !C || y.has(C) || (y.add(C), g.push(C));
    });
  }), !g.length) return null;
  const v = new Image(), d = { srcRaw: u, resolvedSrc: "", img: v };
  t.__panoLinkedInputImageCache.set(s, d);
  let M = -1;
  const P = () => {
    var I, C;
    if (M += 1, M >= g.length) {
      try {
        (C = (I = t.__panoLinkedInputImageCache) == null ? void 0 : I.delete) == null || C.call(I, s);
      } catch {
      }
      return;
    }
    const T = g[M];
    d.resolvedSrc = T, v.src = T;
  };
  return v.onload = () => {
    var T;
    r == null || r(), (T = t.setDirtyCanvas) == null || T.call(t, !0, !0);
  }, v.onerror = () => {
    var T, I;
    if (M + 1 < g.length) {
      P();
      return;
    }
    try {
      (I = (T = t.__panoLinkedInputImageCache) == null ? void 0 : T.delete) == null || I.call(T, s);
    } catch {
    }
  }, P(), v;
}
function Zh(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const r of n) {
    const a = jv(t, r);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function ed(t, e = [], n = null, r = "") {
  const a = Array.isArray(e) ? e : [e], s = Zh(t, a), u = String(r || a.join("|") || "image_exact"), f = Array.isArray(s == null ? void 0 : s.srcCandidates) ? s.srcCandidates : [];
  if (f.length) return Bv(t, u, f, n);
  const g = String((s == null ? void 0 : s.src) || "").trim();
  return g ? Uv(t, u, g, n) : null;
}
async function ka(t, e, n = {}) {
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, s = r, u = Tv(t, e);
  await _v();
  const f = hn(t, "output_preset"), g = hn(t, "coverage"), y = hn(t, "bg_color"), v = hn(t, is), d = Cv(
    String((v == null ? void 0 : v.value) || ""),
    Wc(f == null ? void 0 : f.value, 2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    Xe(g == null ? void 0 : g.value)
  );
  t.__panoLiveStateOverride = JSON.stringify(d), e === "cutout" && (d.shots = Array.isArray(d.shots) ? d.shots.slice(0, 1) : [], d.shots.length || (d.active.selected_shot_id = null));
  const M = document.createElement("div");
  document.body.appendChild(M);
  const P = N1(cv, {
    open: !0,
    type: e,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: Uh(e),
    paintSwatches: Vo.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Nn(i.color, 1)
    })),
    onClose: () => li()
  });
  try {
    P.mount(M);
  } catch (i) {
    try {
      P.unmount();
    } catch {
    }
    throw M.remove(), i;
  }
  const T = M.querySelector(".pano-modal-overlay"), I = M.querySelector(".pano-modal"), C = I == null ? void 0 : I.querySelector("[data-stage-overlay]"), F = I == null ? void 0 : I.querySelector("[data-stage-background]"), A = I == null ? void 0 : I.querySelector(".pano-stage-wrap");
  if (!T || !I || !C || !F || !A)
    throw P.unmount(), M.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const V = document.createElement("div");
  V.setAttribute("aria-hidden", "true"), V.style.position = "absolute", V.style.left = "0", V.style.top = "0", V.style.pointerEvents = "none", V.style.zIndex = "12", V.style.display = "none", V.style.willChange = "transform,width,height,background,border-radius", A == null || A.appendChild(V);
  const R = document.createElement("div");
  R.className = "pano-paint-size-preview", R.setAttribute("aria-hidden", "true");
  const K = document.createElement("div");
  K.className = "pano-paint-size-preview-sample", R.appendChild(K), A == null || A.appendChild(R);
  const E = C.getContext("2d"), ct = Fa(), J = I.querySelector("[data-side]"), xt = I.querySelectorAll("[data-view]"), $ = I.querySelector(".pano-view-toggle"), at = I.querySelector("[data-fov-value]"), Q = I.querySelector("[data-selection-menu]"), wt = I.querySelector("[data-action='toggle-output-preview-size']"), lt = I.querySelector("[data-tool-ui-action='add-or-look']"), X = I.querySelector("[data-view='frame']"), nt = I.querySelector("[data-action='toggle-fullscreen']"), it = I.querySelector("[data-tooltip]"), j = I.querySelector("[data-tool-rail]"), ot = I.querySelector("[data-paint-dock]"), Nt = Array.from(I.querySelectorAll("[data-paint-pane]")), At = I.querySelector("[data-paint-color-row]"), Mt = I.querySelector("[data-paint-color-pop]"), ae = I.querySelector("[data-paint-color-preview]"), Ne = I.querySelector("[data-paint-color-sv]"), je = I.querySelector("[data-paint-color-sv-cursor]"), Me = I.querySelector("[data-paint-hue-strip]"), Ue = I.querySelector("[data-paint-hue-handle]"), Ae = I.querySelector("[data-paint-alpha-slider]"), on = I.querySelector("[data-paint-alpha-value]"), sn = I.querySelector("[data-paint-color-history-wrap]"), mn = I.querySelector("[data-paint-color-history]"), w = Array.from(I.querySelectorAll("[data-paint-size-row]")), D = Array.from(I.querySelectorAll("[data-paint-clear-row]")), H = Array.from(I.querySelectorAll("[data-paint-layer-clear-current]")), q = Array.from(I.querySelectorAll("[data-paint-size-slider]")), Y = Array.from(I.querySelectorAll("[data-paint-size-value]"));
  let G = 0, tt = 0;
  A == null || A.removeAttribute("data-stage-ready"), A == null || A.setAttribute("data-stage-loading-kind", "boot"), C.style.opacity = "1", F.style.opacity = "0", a && (J == null || J.remove(), I.classList.add("pano-modal-readonly"));
  function st(i) {
    ot && ot.classList.toggle("is-hidden", !i);
  }
  const et = () => {
    if (!p.customPaintSessionStart) return;
    if (Ho(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (mv(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      un(p.customPaintColor),
      ...p.customPaintHistory.filter((o) => !Ho(o, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, Z = (i = !1) => {
    !Mt || Mt.hidden || (i ? et() : p.customPaintSessionStart = null, Mt.hidden = !0);
  }, vt = () => {
    Mt && (Mt.hidden && (p.customPaintSessionStart = un(p.customPaintColor)), Mt.hidden = !1);
  };
  I.addEventListener("pointerdown", (i) => {
    to(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (I.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), Z(!0), e === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, $t(), dt())));
  });
  const rt = e === "stickers" || e === "cutout" ? d.active.selected_sticker_id : d.active.selected_shot_id, St = JSON.stringify(Qf(d)), p = {
    mode: "pano",
    selectedId: rt,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Xe(d.coverage),
    historyController: kb(80, { entries: [St], index: 0 }),
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
    showGrid: Sv(t == null ? void 0 : t.id, !0),
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
  const Lt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), Gt = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Map(), kt = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: e === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, be = {
    timer: 0,
    target: null
  }, ve = {
    active: !1,
    depth: 0
  };
  function Zn(i) {
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
    return o.files && o.files.length ? Array.from(o.files).some((c) => Xa(c)) : !1;
  }
  function Cn(i) {
    const o = !!i;
    ve.active !== o && (ve.active = o, A.classList.toggle("drop-active", o));
  }
  function Ee(i, o, c = p.viewFov, l = 140, h = 620) {
    const m = ly(p.viewYaw, i), x = o - p.viewPitch, b = c - p.viewFov, _ = Math.hypot(m, x) + Math.abs(b) * 0.6, S = Math.round(B(l + _ * 2.2, l, h));
    p.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: S,
      startYaw: p.viewYaw,
      startPitch: p.viewPitch,
      startFov: p.viewFov,
      targetPitch: o,
      targetFov: c,
      deltaYaw: m
    }, p.viewInertia.active = !1, p.viewInertia.vx = 0, p.viewInertia.vy = 0, dt();
  }
  Np();
  function ke() {
    return e === "stickers" ? d.stickers : d.shots;
  }
  function Pe() {
    const i = d.painting || (d.painting = Sa(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Va(i = "paint") {
    var h, m;
    const o = Array.isArray((m = (h = d.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? d.painting[i].strokes : [], c = [], l = /* @__PURE__ */ new Set();
    for (const x of o) {
      const b = String((x == null ? void 0 : x.actionGroupId) || "").trim();
      !b || l.has(b) || (l.add(b), c.push(b));
    }
    return c;
  }
  function Jh() {
    return Va("paint");
  }
  function Fi(i, o) {
    const c = String(o || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function Vi(i) {
    const o = String(i || "").trim();
    return o ? `raster:${o}` : "";
  }
  function Be(i) {
    const o = String(i || "").trim();
    if (!o) return "";
    const c = o.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : o).trim();
  }
  function Hi(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const l = c.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function ws() {
    var o;
    let i = -1;
    for (const c of Array.isArray(d.stickers) ? d.stickers : [])
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Pe())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Array.isArray((o = d.painting) == null ? void 0 : o.raster_objects) ? d.painting.raster_objects : [])
      String((c == null ? void 0 : c.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0)));
    return i + 1;
  }
  function Sl(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return null;
    const l = Pe();
    let h = l.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === c);
    return h ? o != null && (h.z_index = Math.max(0, Number(o || 0))) : (h = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: o == null ? ws() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(h)), h;
  }
  function Qh() {
    const i = new Set(Jh()), c = Pe().filter((l) => i.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return i.forEach((l) => {
      c.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === l) || c.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: ws(),
        locked: !1,
        frame: null
      });
    }), c.sort((l, h) => Number((l == null ? void 0 : l.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), d.painting.groups = c, c;
  }
  function tp(i, o, c) {
    const l = [];
    for (const O of c) {
      const z = O == null ? void 0 : O.geometry, U = (z == null ? void 0 : z.geometryKind) === "lasso_fill" ? z == null ? void 0 : z.points : (z == null ? void 0 : z.processedPoints) || (z == null ? void 0 : z.rawPoints) || (z == null ? void 0 : z.points) || [];
      Array.isArray(U) && l.push(...U);
    }
    if (!l.length) return null;
    let h = 0, m = 0;
    l.forEach((O) => {
      h += Number((O == null ? void 0 : O.u) || 0), m += Number((O == null ? void 0 : O.v) || 0);
    });
    const x = h / l.length;
    let b = 1 / 0, _ = -1 / 0, S = 1 / 0, N = -1 / 0;
    l.forEach((O) => {
      const z = $i(Number((O == null ? void 0 : O.u) || 0), x);
      b = Math.min(b, z), _ = Math.max(_, z);
      const U = Number((O == null ? void 0 : O.v) || 0);
      S = Math.min(S, U), N = Math.max(N, U);
    });
    const k = c.reduce((O, z) => {
      const U = xr(String((z == null ? void 0 : z.toolKind) || "pen")), ut = en[U] || en[ir], _t = Math.max(1, Number((z == null ? void 0 : z.size) || 10)) * Math.max(0.1, Number((ut == null ? void 0 : ut.sizeScale) ?? 1));
      return Math.max(O, _t);
    }, 0), L = Math.max(35e-4, k / 2048);
    return {
      centerUv: { u: ((x + (b + _) * 0.5) % 1 + 1) % 1, v: B((S + N) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (_ - b) * 0.5 + L,
      halfH: (N - S) * 0.5 + L,
      uvPad: L
    };
  }
  function Qr(i, o, c) {
    const l = String(i || "").trim();
    if (!l) return null;
    const h = Pe().find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    if (!h) return null;
    if (!h.frame) {
      const m = c || In(l, o);
      h.frame = tp(l, o, m);
    }
    return h.frame;
  }
  function ti() {
    var l;
    const i = (Array.isArray(d.stickers) ? d.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), o = Qh().map((h) => ({
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
  function Er(i = !0) {
    var c, l, h, m, x, b;
    const o = ti().filter((_) => _.type === "strokeGroup").map((_) => String(_.actionGroupId || "")).filter((_) => !!_);
    if (i) {
      const _ = String(((l = (c = p.interaction) == null ? void 0 : c.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), S = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), N = String(((b = (x = p.interaction) == null ? void 0 : x.stroke) == null ? void 0 : b.toolKind) || "").trim();
      _ && S === "paint" && N !== "eraser" && !o.includes(_) && o.push(_);
    }
    return o;
  }
  function Nl(i = !0) {
    var b, _, S, N, k, L;
    const o = ti();
    if (!i) return o;
    const c = String(((_ = (b = p.interaction) == null ? void 0 : b.stroke) == null ? void 0 : _.actionGroupId) || "").trim(), l = String(((N = (S = p.interaction) == null ? void 0 : S.stroke) == null ? void 0 : N.layerKind) || "").trim(), h = String(((L = (k = p.interaction) == null ? void 0 : k.stroke) == null ? void 0 : L.toolKind) || "").trim();
    if (!c || l !== "paint" || h === "eraser" || o.some((O) => O.type === "strokeGroup" && String(O.actionGroupId || "") === c))
      return o;
    const m = fe();
    let x = o.reduce((O, z) => Math.max(O, Number((z == null ? void 0 : z.z_index) || 0)), -1) + 1;
    return m && Se(m) && String(m.actionGroupId || "") === c && (x = Number(m.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: x,
        item: null
      }
    ].sort((O, z) => Number((O == null ? void 0 : O.z_index) || 0) - Number((z == null ? void 0 : z.z_index) || 0));
  }
  function ep() {
    return Pe().slice().sort((i, o) => Number((i == null ? void 0 : i.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((i) => ni(Fi("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function np() {
    var i;
    return (Array.isArray((i = d.painting) == null ? void 0 : i.raster_objects) ? d.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, c) => Number((o == null ? void 0 : o.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((o) => ei(Vi((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function Ml(i = p.interaction) {
    const o = String((i == null ? void 0 : i.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object") return !0;
    if (o === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, l = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || l;
    }
    return !1;
  }
  function rp() {
    var o, c, l, h;
    let i = null;
    try {
      const m = Er(), x = ((h = (l = (c = (o = p.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, m)) == null ? void 0 : l.displayPaint) == null ? void 0 : h.canvas) || null;
      x && (i = {
        source: x,
        revision: `${Jn()}:${kl()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function kl() {
    var h, m, x, b, _, S, N;
    const i = p.interaction, o = String((i == null ? void 0 : i.kind) || "");
    if (!Ml(i)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const k = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, L = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), O = ((x = k == null ? void 0 : k.rawPoints) == null ? void 0 : x.length) ?? ((b = k == null ? void 0 : k.points) == null ? void 0 : b.length) ?? 0, z = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${L || "paint"}_${o}_live${z}_${O}_${p.livePaintInteractionRevision}`;
    }
    const c = String(((_ = i == null ? void 0 : i.item) == null ? void 0 : _.actionGroupId) || ""), l = String(((S = i == null ? void 0 : i.item) == null ? void 0 : S.rasterObjectId) || ((N = i == null ? void 0 : i.item) == null ? void 0 : N.id) || "");
    return `_${o}_${c || l || "active"}_${p.livePaintInteractionRevision}`;
  }
  function Ss() {
    return [
      ...Array.isArray(d.stickers) ? d.stickers : [],
      ...Array.isArray(d.shots) ? d.shots : []
    ];
  }
  function yn(i) {
    return !!i && Array.isArray(d.shots) && d.shots.includes(i);
  }
  function Ce(i) {
    return !!i && Array.isArray(d.stickers) && d.stickers.includes(i);
  }
  function dn() {
    var i;
    return Array.isArray((i = d.painting) == null ? void 0 : i.raster_objects) ? d.painting.raster_objects : [];
  }
  function ei(i) {
    const o = Be(i);
    if (!o) return null;
    const c = dn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: Vi(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Ge(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const o = Be(i.rasterObjectId || i.id || "");
    return !!o && !!ei(Vi(o));
  }
  function ni(i) {
    const o = Hi(i), c = String(o.actionGroupId || "").trim();
    if (!c) return null;
    const l = Pe().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === c || String((h == null ? void 0 : h.actionGroupId) || "") === c);
    return l ? {
      ...l,
      id: Fi("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function Se(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const o = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!o && !!ni(Fi(c, o));
  }
  function In(i, o = null) {
    const c = Hi(i, o), l = String(c.actionGroupId || "").trim();
    return l ? ci(c.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === l) : [];
  }
  function ip(i, o = "paint") {
    var m, x, b;
    const c = String(i || "").trim(), h = `${String(o || "paint").trim() || "paint"}:${c}:${p.mode}:${Gi()}`;
    if (p.mode === "frame") {
      const _ = ne(), S = String((_ == null ? void 0 : _.id) || ""), N = _ ? We(_) : null;
      return `${h}:frame:${S}:${Math.round(Number((N == null ? void 0 : N.x) || 0))}:${Math.round(Number((N == null ? void 0 : N.y) || 0))}:${Math.round(Number((N == null ? void 0 : N.w) || 0))}:${Math.round(Number((N == null ? void 0 : N.h) || 0))}:${Math.round(Number(((m = p.frameView) == null ? void 0 : m.zoom) || 1) * 1e3)}:${Math.round(Number(((x = p.frameView) == null ? void 0 : x.panX) || 0))}:${Math.round(Number(((b = p.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Ha(i, o, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: B(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function $i(i, o) {
    let c = Number(i || 0) - Number(o || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function Pl(i, o = null, c = null) {
    var S;
    const l = Hi(i, o), h = Array.isArray(c) ? c : In(l.actionGroupId, l.layerKind), m = [];
    if (h.forEach((N) => {
      const k = (N == null ? void 0 : N.geometry) || null, L = (k == null ? void 0 : k.geometryKind) === "lasso_fill" ? k == null ? void 0 : k.points : (k == null ? void 0 : k.processedPoints) || (k == null ? void 0 : k.rawPoints) || (k == null ? void 0 : k.points) || [];
      Array.isArray(L) && m.push(...L);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const x = Number(((S = m[0]) == null ? void 0 : S.u) || 0);
    let b = 0, _ = 0;
    return m.forEach((N) => {
      b += x + $i(Number((N == null ? void 0 : N.u) || 0), x), _ += Number((N == null ? void 0 : N.v) || 0);
    }), {
      u: (b / m.length % 1 + 1) % 1,
      v: B(_ / m.length, 0, 1)
    };
  }
  function $a(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), x = $i(Number(i.u || 0), h), b = Number(i.v || 0) - m, _ = Number(l || 0) * De, S = Math.cos(_), N = Math.sin(_), k = Math.max(0.02, Number(c || 1)), L = (x * S - b * N) * k, O = (x * N + b * S) * k;
    return {
      ...i,
      u: ((h + L) % 1 + 1) % 1,
      v: B(m + O, 0, 1)
    };
  }
  function Al(i, o, c, l = null, h = null, m = null) {
    const x = Hi(i, h), b = String(x.actionGroupId || "").trim();
    if (!b) return !1;
    const _ = ci(x.layerKind), S = Array.isArray(l) ? new Map(l.map((k) => [String((k == null ? void 0 : k.id) || ""), k])) : null;
    let N = !1;
    if (_.forEach((k) => {
      if (String((k == null ? void 0 : k.actionGroupId) || "").trim() !== b) return;
      const L = (S == null ? void 0 : S.get(String((k == null ? void 0 : k.id) || ""))) || k, O = k == null ? void 0 : k.geometry, z = L == null ? void 0 : L.geometry;
      !O || !z || (Array.isArray(z.points) && (O.points = z.points.map((U) => Ha(U, o, c)), N = !0), Array.isArray(z.rawPoints) && (O.rawPoints = z.rawPoints.map((U) => Ha(U, o, c)), N = !0), Array.isArray(z.processedPoints) && (O.processedPoints = z.processedPoints.map((U) => Ha(U, o, c)), N = !0));
    }), N && m) {
      const k = Pe().find((L) => String((L == null ? void 0 : L.actionGroupId) || "") === b);
      k && (k.frame = {
        ...m,
        centerUv: {
          u: ((m.centerUv.u + o) % 1 + 1) % 1,
          v: B(m.centerUv.v + c, 0, 1)
        }
      });
    }
    return N;
  }
  function Cl(i, o = 1, c = 0, l = null, h = null, m = null) {
    const x = Hi(i, h), b = String(x.actionGroupId || "").trim();
    if (!b) return !1;
    const _ = ci(x.layerKind), S = Array.isArray(l) ? l : In(b, x.layerKind), N = Array.isArray(S) ? new Map(S.map((O) => [String((O == null ? void 0 : O.id) || ""), O])) : null, k = (m == null ? void 0 : m.centerUv) ?? Pl(b, x.layerKind, S);
    let L = !1;
    if (_.forEach((O) => {
      if (String((O == null ? void 0 : O.actionGroupId) || "").trim() !== b) return;
      const z = (N == null ? void 0 : N.get(String((O == null ? void 0 : O.id) || ""))) || O, U = O == null ? void 0 : O.geometry, ut = z == null ? void 0 : z.geometry;
      !U || !ut || (Array.isArray(ut.points) && (U.points = ut.points.map((_t) => $a(_t, k, o, c)), L = !0), Array.isArray(ut.rawPoints) && (U.rawPoints = ut.rawPoints.map((_t) => $a(_t, k, o, c)), L = !0), Array.isArray(ut.processedPoints) && (U.processedPoints = ut.processedPoints.map((_t) => $a(_t, k, o, c)), L = !0));
    }), L && m) {
      const O = Number(o || 1), z = Pe().find((U) => String((U == null ? void 0 : U.actionGroupId) || "") === b);
      z && (z.frame = {
        centerUv: m.centerUv,
        rot_deg: Number(m.rot_deg || 0) + Number(c || 0),
        halfW: m.halfW * O,
        halfH: m.halfH * O,
        uvPad: m.uvPad
      });
    }
    return L;
  }
  function Il(i, o, c, l = null) {
    const h = Be(i);
    if (!h) return !1;
    const m = dn().find((N) => String((N == null ? void 0 : N.id) || "").trim() === h);
    if (!m) return !1;
    const x = l && typeof l == "object" ? l : m, b = (x == null ? void 0 : x.transform) || {}, _ = Number(b.du || 0) + Number(o || 0), S = B(Number(b.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = _, m.transform.dv = S, !0;
  }
  function fe() {
    const i = String(p.selectedId || "");
    if (!i) return null;
    const o = ni(i);
    if (o) return o;
    const c = ei(i);
    return c || (e === "cutout" ? Ss().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null : ke().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null);
  }
  function En() {
    const i = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], o = [], c = /* @__PURE__ */ new Set();
    return i.forEach((l) => {
      const h = String(l || "").trim();
      if (!h || c.has(h)) return;
      c.add(h);
      const m = h === String(p.selectedId || "") ? fe() : ni(h) || ei(h) || (e === "cutout" ? Ss().find((x) => String((x == null ? void 0 : x.id) || "") === h) : ke().find((x) => String((x == null ? void 0 : x.id) || "") === h));
      m && o.push(m);
    }), o;
  }
  function Ns(i = null) {
    const o = Array.isArray(i) ? i : En();
    if (!o || o.length < 2) return null;
    const c = o.map((S) => Ie(S)).filter((S) => (S == null ? void 0 : S.visible) && Array.isArray(S.corners) && S.corners.length);
    if (!c.length) return null;
    const l = c.flatMap((S) => S.corners.map((N) => Number((N == null ? void 0 : N.x) || 0))), h = c.flatMap((S) => S.corners.map((N) => Number((N == null ? void 0 : N.y) || 0))), m = Math.min(...l), x = Math.max(...l), b = Math.min(...h), _ = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + x) * 0.5, y: (b + _) * 0.5 },
      corners: [
        { x: m, y: b },
        { x, y: b },
        { x, y: _ },
        { x: m, y: _ }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + x) * 0.5, y: b, a: { x: m, y: b }, b: { x, y: b } },
        { edge: "right", x, y: (b + _) * 0.5, a: { x, y: b }, b: { x, y: _ } },
        { edge: "bottom", x: (m + x) * 0.5, y: _, a: { x, y: _ }, b: { x: m, y: _ } },
        { edge: "left", x: m, y: (b + _) * 0.5, a: { x: m, y: _ }, b: { x: m, y: b } }
      ],
      rotateStemBase: { x: (m + x) * 0.5, y: b },
      rotateHandle: { x: (m + x) * 0.5, y: b - 30 }
    };
  }
  function ap(i) {
    const o = String((i == null ? void 0 : i.id) || "").trim();
    return !!o && Array.isArray(p.selectedIds) && p.selectedIds.includes(o);
  }
  function El() {
    const i = fe();
    return i ? Se(i) || Ge(i) ? "stroke" : yn(i) ? "frame" : "image" : null;
  }
  function pr(i) {
    if (!i || typeof i != "object") return !1;
    if (Se(i)) {
      const o = String(i.actionGroupId || i.id || "").trim(), c = Pe().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (Ge(i)) {
      const o = Be(i.rasterObjectId || i.id || ""), c = dn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function Ms(i = null) {
    const o = Array.isArray(i) ? i : En();
    return o.length > 0 && o.every((c) => pr(c));
  }
  function op(i, o) {
    const c = o === !0;
    if (!i || typeof i != "object") return !1;
    if (Se(i)) {
      const l = String(i.actionGroupId || i.id || "").trim(), h = Pe().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    if (Ge(i)) {
      const l = Be(i.rasterObjectId || i.id || ""), h = dn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function sp() {
    if (r) return;
    const i = En();
    if (!i.length) return;
    const o = !Ms(i);
    let c = !1;
    i.forEach((l) => {
      op(l, o) && (c = !0);
    }), c && (ee(), pe(), $t(), dt());
  }
  function zi(i) {
    p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && Ce(i) ? d.active.selected_sticker_id = i.id || null : d.active.selected_sticker_id = null, i && yn(i) ? d.active.selected_shot_id = i.id || null : i ? yn(i) || (d.active.selected_shot_id = d.active.selected_shot_id) : d.active.selected_shot_id = null;
  }
  function cp(i, o = null) {
    const c = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((x) => {
      const b = String((x == null ? void 0 : x.id) || "").trim();
      !b || l.has(b) || (l.add(b), c.push(b));
    }), p.selectedIds = c;
    const h = String(o || "").trim();
    p.selectedId = h && c.includes(h) ? h : c[c.length - 1] || null;
    const m = fe();
    d.active.selected_sticker_id = m && Ce(m) && m.id || null, m && yn(m) ? d.active.selected_shot_id = m.id || null : c.length || (d.active.selected_shot_id = null);
  }
  function lp() {
    const i = (Array.isArray(d.shots) ? d.shots : []).map((c, l) => ({
      kind: "frame",
      item: c,
      label: "Frame"
    })), o = (Array.isArray(d.stickers) ? d.stickers : []).map((c, l) => {
      var m, x;
      const h = _e(c) ? String(c.id || Fr) : String(((x = (m = d.assets) == null ? void 0 : m[c.asset_id]) == null ? void 0 : x.name) || c.asset_id || c.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: c,
        label: h
      };
    });
    return [...i, ...o];
  }
  function up(i) {
    return i === "frame" ? Et.camera : i === "stroke" ? Et.paintbrush_vertical_tool : Et.image;
  }
  function Tl(i) {
    return !i || !i.item ? No(String((i == null ? void 0 : i.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${up(i.kind)}</span><span>${No(String(i.label || ""))}</span>`;
  }
  function Dl() {
    return ws();
  }
  function _e(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === Fr || String(i.source_kind || "") === vc;
  }
  function ri(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function Ll(i) {
    return _e(i) && ri(i) ? vh : 1;
  }
  function fp() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function dp() {
    return String(fp() || "") === "lasso_fill";
  }
  function hp() {
    if (r) return;
    const i = fe();
    !i || !_e(i) || (i.visible = ri(i), cn(), ee(), pe(), zt(), $t(), dt());
  }
  function pp() {
    if (r || e !== "stickers") return;
    const i = fe();
    if (!i || !_e(i)) return;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return;
    i.yaw_deg = Number(o.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(o.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(o.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = ks(_c, () => {
      dt();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = Tr(
      Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(o.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(o.rot_deg ?? i.rot_deg ?? 0), ee(), pe(), zt(), $t(), dt();
  }
  function gp(i) {
    if (!i || !_e(i)) return null;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return null;
    const c = {
      yaw_deg: Number(o.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? i.rot_deg ?? 0)
    }, l = ks(_c, () => {
      dt();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (c.vFOV_deg = Tr(
      c.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), c;
  }
  function mp() {
    const i = fe();
    if (!i || !_e(i)) return !1;
    const o = gp(i);
    if (!o) return !1;
    const c = (l, h) => Math.abs(Number(l || 0) - Number(h || 0)) <= 1e-4;
    return !(c(i.yaw_deg, o.yaw_deg) && c(i.pitch_deg, o.pitch_deg) && c(i.hFOV_deg, o.hFOV_deg) && c(i.vFOV_deg, o.vFOV_deg) && c(i.rot_deg, o.rot_deg));
  }
  function Rl(i) {
    var c;
    const o = Ma(t == null ? void 0 : t.id);
    return Array.isArray((c = o == null ? void 0 : o.ui) == null ? void 0 : c[i]) ? o.ui[i] : Array.isArray(o == null ? void 0 : o[i]) ? o[i] : [];
  }
  function yp(i) {
    const o = Ma(t == null ? void 0 : t.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, i) ? o.ui[i] : o && Object.prototype.hasOwnProperty.call(o, i) ? o[i] : null;
  }
  function bp(i, o = null) {
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
  function ks(i, o = null) {
    const c = Rl(i), l = Array.isArray(c) && c.length ? c[0] : null, h = Ri(l);
    if (!h) return null;
    const m = `__ui__${i}`, x = Lt.get(m);
    if (x && x.__panoSrc === h) return x;
    const b = new Image();
    return b.__panoSrc = h, b.onload = () => {
      typeof o == "function" ? o(b) : dt();
    }, b.src = h, Lt.set(m, b), b;
  }
  function Ol(i = null) {
    const o = ed(t, ["sticker_image"], i, "sticker_image_exact");
    return o || ks(_c, i);
  }
  function Fl(i) {
    const o = String(i || "");
    let c = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      c ^= o.charCodeAt(l), c = Math.imul(c, 16777619);
    return String(c >>> 0);
  }
  function Tr(i, o, c) {
    const l = Math.max(1, Number(o || 1)), h = Math.max(1, Number(c || 1)), m = B(Number(i || 30), 0.1, 179) * De, x = 2 * Math.atan(Math.tan(m * 0.5) * (h / l));
    return B(x * zr, 0.1, 179);
  }
  function vp(i) {
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
      const x = Number(m.yaw_deg), b = Number(m.pitch_deg), _ = Number(m.roll_deg), S = Number(m.hFOV_deg);
      if (![x, b, _, S].every((O) => Number.isFinite(O))) return null;
      let N = ((x + 180) % 360 + 360) % 360 - 180;
      Object.is(N, -0) && (N = 0);
      const k = {
        yaw_deg: N,
        pitch_deg: B(b, -89.9, 89.9),
        roll_deg: _,
        hFOV_deg: B(S, 0.1, 179)
      }, L = Number(c.source_aspect);
      return Number.isFinite(L) && L > 0 && (k.source_aspect = L), k;
    } catch {
      return null;
    }
  }
  function Vl(i) {
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Gc(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Le(Number.isFinite(o) ? o : 0),
        pitch_deg: B(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: B(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function _p(i) {
    var b;
    if (!i || typeof i != "object") return Vl(null);
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let x = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const _ = B(h, 0.1, 179) * De, S = B(m, 0.1, 179) * De, N = Math.tan(S * 0.5);
      if (Math.abs(N) > 1e-6) {
        const k = Math.tan(_ * 0.5) / N;
        Number.isFinite(k) && k > 0 && (x = k);
      }
    }
    if (i != null && i.asset_id && ((b = d == null ? void 0 : d.assets) != null && b[i.asset_id])) {
      const _ = d.assets[i.asset_id], S = Number((_ == null ? void 0 : _.w) || 0), N = Number((_ == null ? void 0 : _.h) || 0);
      S > 0 && N > 0 && (x = S / N);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Le(Number.isFinite(o) ? o : 0),
        pitch_deg: B(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: B(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: x
    };
  }
  function xp(i) {
    var l, h, m, x, b;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((_) => String((_ == null ? void 0 : _.name) || "") === String(i)) : null, c = o == null ? void 0 : o.link;
    if (c != null) {
      const _ = qh(t.graph, c), { originId: S, originSlot: N } = Yh(_), k = Ma(S), L = [
        k == null ? void 0 : k.output,
        k == null ? void 0 : k.result,
        (l = k == null ? void 0 : k.data) == null ? void 0 : l.output,
        (h = k == null ? void 0 : k.data) == null ? void 0 : h.result,
        (m = k == null ? void 0 : k.ui) == null ? void 0 : m.output,
        (x = k == null ? void 0 : k.ui) == null ? void 0 : x.result
      ];
      for (const O of L) {
        if (!Array.isArray(O)) continue;
        const z = Number(N || 0), U = O[z];
        if (typeof U == "string" && U.trim()) return U;
      }
    }
    return String(((b = hn(t, i)) == null ? void 0 : b.value) || "");
  }
  function wp(i, o, c) {
    const l = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : vp(o);
    if (l) {
      const x = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || l.source_aspect || 1), b = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Tr(l.hFOV_deg, x, b),
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
  function Hl(i = "sync") {
    if (e !== "stickers" || r) return;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((O) => String((O == null ? void 0 : O.name) || "") === "sticker_image") : null, c = (o == null ? void 0 : o.link) ?? null, l = Ol(() => {
      var O;
      (O = t.__panoExternalStickerSync) == null || O.call(t, "image-loaded");
    }), h = bp(yp("pano_sticker_input_pose"), null), m = xp("sticker_state"), x = Fl(h && typeof h == "object" ? JSON.stringify(h) : m), b = Array.isArray(d.stickers) ? d.stickers : d.stickers = [], _ = b.findIndex((O) => String((O == null ? void 0 : O.id) || "") === Fr);
    if (c == null) {
      _ >= 0 && (b.splice(_, 1), p.selectedId === Fr && (p.selectedId = null, p.selectedIds = [], d.active.selected_sticker_id = null), pe(), zt(), $t(), dt());
      return;
    }
    const S = b.reduce((O, z) => Math.max(O, Number((z == null ? void 0 : z.z_index) || 0)), -1);
    let N = _ >= 0 ? b[_] : null;
    const k = !N || Number(N.source_link_id ?? -1) !== Number(c) || String(N.source_state_hash || "") !== x;
    N || (N = {
      id: Fr,
      source_kind: vc
    }, b.push(N)), N.id = Fr, N.source_kind = vc, N.source_link_id = Number(c), N.source_state_hash = x, N.visible = N.visible !== !1;
    let L = !1;
    if (k) {
      const O = wp(h, m, l);
      Object.assign(N, O, {
        initial_pose: { ...O },
        visible: !0,
        z_index: S + 1
      }), L = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const O = Tr(
        Number(N.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(N.vFOV_deg || 0) - O) > 1e-6 && (N.vFOV_deg = O, L = !0);
    }
    L && (pe(), zt(), $t()), dt();
  }
  function ii(i = {}) {
    const c = i.preservePanelValues !== !1 ? fe() : null;
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
    const i = Array.isArray(d.shots) ? d.shots : [];
    if (!Array.isArray(i) || i.length === 0) return;
    const o = String(((l = d.active) == null ? void 0 : l.selected_shot_id) || ""), c = i.find((h) => String((h == null ? void 0 : h.id) || "") === o) || i[0];
    c && (d.active.selected_shot_id = c.id || null, p.viewYaw = Le(Number(c.yaw_deg || 0)), p.viewPitch = B(Number(c.pitch_deg || 0), -89.9, 89.9));
  }
  function za() {
    if (!lt) return;
    e === "cutout" && Array.isArray(d.shots) && d.shots.length > 0 ? (lt.innerHTML = Et.crosshair, lt.setAttribute("aria-label", "Look at frame"), lt.setAttribute("data-tip", "Look at frame")) : (lt.innerHTML = Et.plus_circle, lt.setAttribute("aria-label", "Add frame"), lt.setAttribute("data-tip", "Add frame"));
  }
  function ja() {
    const i = e === "cutout" && Array.isArray(d.shots) && d.shots.length > 0;
    p.mode === "frame" && !i && (p.mode = "pano"), X && (X.disabled = !i, X.setAttribute("aria-disabled", i ? "false" : "true")), xt.forEach((o) => {
      const c = o.dataset.view === p.mode;
      o.setAttribute("aria-pressed", c ? "true" : "false");
    }), $ && $.setAttribute("data-selected", p.mode), mu() ? ge(p.pointerPos) : C.style.cursor = p.mode === "pano" ? "grab" : "default";
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
  function Ps() {
    const i = Hn(p.viewYaw, p.viewPitch);
    let o = Wn(0, 1, 0);
    Math.abs(Sn(i, o)) > 0.999 && (o = Wn(0, 0, 1));
    const c = mi(vo(o, i)), l = mi(vo(i, c));
    return { right: c, up: l, fwd: i };
  }
  function ji(i) {
    const { right: o, up: c, fwd: l } = Ps(), h = Sn(i, o), m = Sn(i, c), x = Sn(i, l);
    if (x <= 1e-5) return null;
    const b = C.width, _ = C.height, S = p.viewFov * De, N = 2 * Math.atan(Math.tan(S / 2) * (_ / b)), k = b / 2 / Math.tan(S / 2), L = _ / 2 / Math.tan(N / 2);
    return {
      x: b / 2 + h / x * k,
      y: _ / 2 - m / x * L,
      z: x
    };
  }
  function As(i, o) {
    const { right: c, up: l, fwd: h } = Ps(), m = C.width, x = C.height, b = p.viewFov * De, _ = 2 * Math.atan(Math.tan(b / 2) * (x / m)), S = (i - m / 2) / (m / 2) * Math.tan(b / 2), N = (x / 2 - o) / (x / 2) * Math.tan(_ / 2), k = yo(yo(bo(c, S), bo(l, N)), h);
    return mi(k);
  }
  function gr() {
    const i = C.width, o = C.height, c = 2;
    if (i / Math.max(o, 1) >= c) {
      const b = o, _ = b * c;
      return { x: (i - _) * 0.5, y: 0, w: _, h: b };
    }
    const h = i, m = h / c;
    return { x: 0, y: (o - m) * 0.5, w: h, h: m };
  }
  function Cs(i) {
    var x;
    if (i && typeof i == "object" && (_e(i) || i.external === !0))
      return Ol(() => {
        var b;
        (b = t.__panoExternalStickerSync) == null || b.call(t, "image-loaded");
      });
    const o = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!o) return null;
    const c = Lt.get(o);
    if (c) return c;
    const l = (x = d.assets) == null ? void 0 : x[o], h = Hv(l);
    if (!h) return null;
    const m = new Image();
    return m.onload = () => dt(), m.src = h, Lt.set(o, m), m;
  }
  function $l(i, o = null) {
    const c = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!c) return null;
    const l = Bt.get(c);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const h = new Image();
    return h.onload = () => {
      typeof o == "function" && o();
    }, h.src = c, Bt.set(c, h), h;
  }
  function Mp(i) {
    const o = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!o) return null;
    const c = Gt.get(o);
    if (c) return c.ready ? c : null;
    const l = $l(i, () => {
      const N = Gt.get(o);
      N && (N.ready = !1), dt({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const h = Number(l.naturalWidth || l.width || 0), m = Number(l.naturalHeight || l.height || 0);
    if (h < 1 || m < 1) return null;
    const x = document.createElement("canvas");
    x.width = h, x.height = m;
    const b = x.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, h, m), b.drawImage(l, 0, 0, h, m);
    const _ = b.getImageData(0, 0, h, m).data, S = { canvas: x, width: h, height: m, alpha: _, ready: !0 };
    return Gt.set(o, S), S;
  }
  function kp(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), x = $i(Number(i.u || 0), h), b = Number(i.v || 0) - m, _ = Math.max(0.02, Number(c || 1)), S = Number(l || 0) * De, N = Math.cos(S), k = Math.sin(S), L = x / _, O = b / _, z = L * N + O * k, U = -L * k + O * N;
    return {
      ...i,
      u: ((h + z) % 1 + 1) % 1,
      v: m + U
    };
  }
  function Pp(i, o) {
    if (!i || !o) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const l = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, x = kp(
      m,
      h,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), b = Number(c.u1 || 0) - Number(c.u0 || 0), _ = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(b > 1e-6) || !(_ > 1e-6)) return null;
    const S = $i(Number(x.u || 0), Number(c.u0 || 0)) / b, N = (Number(x.v || 0) - Number(c.v0 || 0)) / _;
    if (S < 0 || S > 1 || N < 0 || N > 1) return 0;
    const k = Mp(i);
    if (!k) return null;
    const L = B(Math.floor(S * k.width), 0, k.width - 1), O = B(Math.floor(N * k.height), 0, k.height - 1);
    return Number(k.alpha[(O * k.width + L) * 4 + 3] || 0);
  }
  function zl(i, o, c, l = null) {
    if (!(o != null && o.visible) || !ar(c, o.corners)) return !1;
    const h = l || vn(c, performance.now()), m = Pp(i, h);
    return m === null ? !0 : m > 8;
  }
  function Ap() {
    var l, h, m, x, b, _, S, N;
    const i = ((h = (l = p.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, Er(!1))) || null, o = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((b = (x = i == null ? void 0 : i.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : b.width) || 2048)), c = Math.max(1, Number(((_ = i == null ? void 0 : i.descriptor) == null ? void 0 : _.height) || ((N = (S = i == null ? void 0 : i.displayPaint) == null ? void 0 : S.canvas) == null ? void 0 : N.height) || 1024));
    return { width: o, height: c };
  }
  function Ui() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function Cp(i, o = null) {
    const c = Be((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.bbox) || null;
    if (!c || !l) return null;
    const h = $l(i, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: x } = Ap(), b = (i == null ? void 0 : i.transform) || {}, _ = [
      c,
      m,
      x,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      Gi()
    ].join(":"), S = oe.get(_);
    if (S) return S;
    oe.size > 64 && oe.clear();
    const N = document.createElement("canvas");
    N.width = m, N.height = x;
    const k = N.getContext("2d");
    if (!k) return null;
    const L = Number(l.u0 || 0) * m, O = Number(l.v0 || 0) * x, z = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * m), U = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * x), ut = L + z * 0.5 + Number(b.du || 0) * m, _t = O + U * 0.5 + Number(b.dv || 0) * x, mt = Number(b.rot_deg || 0) * De, pt = Math.max(0.01, Number(b.scale || 1));
    for (const ht of [-m, 0, m])
      k.save(), k.translate(ut + ht, _t), k.rotate(mt), k.scale(pt, pt), k.drawImage(h, -z * 0.5, -U * 0.5, z, U), k.restore();
    return oe.set(_, N), N;
  }
  function Ip() {
    return xs(d, {
      selectedId: p.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Ep(i) {
    return _h(
      d,
      (o, c, l) => Cs(l || o),
      { scene: i }
    );
  }
  function jl(i, o, c, l, h = "modal_object_view") {
    var ut, _t, mt, pt;
    if (!i || !o || !c) return !1;
    const m = String((c == null ? void 0 : c.mode) || ""), x = !!l && !!l.complete && Number(l.naturalWidth || l.width || 0) > 1 && Number(l.naturalHeight || l.height || 0) > 1;
    if (m === "unwrap") {
      let ht = !1;
      x && p.showPanorama && (i.save(), i.globalAlpha = 1, i.drawImage(l, o.x, o.y, o.w, o.h), i.restore(), ht = !0);
      const gt = Er(), bt = ((_t = (ut = p.paintEngine) == null ? void 0 : ut.getErpTarget) == null ? void 0 : _t.call(ut, gt)) || null, yt = p.showObjects && ((mt = bt == null ? void 0 : bt.displayPaint) == null ? void 0 : mt.canvas) || null, W = p.showMask && ((pt = bt == null ? void 0 : bt.committedMask) == null ? void 0 : pt.canvas) || null;
      return yt && (i.drawImage(yt, o.x, o.y, o.w, o.h), ht = !0), W && (i.drawImage(W, o.x, o.y, o.w, o.h), ht = !0), ht;
    }
    if (ql(o, c))
      return zp(
        o,
        c,
        x && p.showPanorama ? l : null,
        `${h}_bg_gl`
      );
    const _ = Yl(), S = Xl(_), N = p.showObjects ? Zl() : null, k = p.showMask ? Jl() : null, L = yf({
      stateRevision: [
        h,
        x ? String(l.currentSrc || l.src || "") : "no_bg",
        x ? Number(l.naturalWidth || l.width || 0) : 0,
        x ? Number(l.naturalHeight || l.height || 0) : 0,
        Array.isArray(S) ? S.map((ht) => `${String((ht == null ? void 0 : ht.assetId) || "")}:${String((ht == null ? void 0 : ht.revision) || "")}`).join(",") : "none",
        N ? Wa() : "paint:none",
        k ? `${Jn()}:mask` : "mask:none"
      ].join("|"),
      backgroundSource: x && p.showPanorama ? l : null,
      backgroundRevision: x ? `${h}:bg` : "",
      coverageDeg: Xe(d.coverage),
      scene: _,
      textures: S,
      paintSource: N,
      paintRevision: N ? Wa() : "",
      maskSource: k,
      maskRevision: k ? `${Jn()}:mask` : "",
      rasterEntries: [],
      backgroundOpacity: 1,
      showMaskTint: !1
    }), O = ct;
    if (!O.syncState(L)) return !1;
    const U = O.renderToTarget(`${h}_direct`, c, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return U ? (i.drawImage(U, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function Is(i, o = "sticker.png") {
    const c = new FormData();
    c.append("image", i), c.append("type", "input"), c.append("subfolder", "panorama_stickers");
    const l = await Je.fetchApi("/upload/image", { method: "POST", body: c });
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
  async function Es(i, o) {
    const c = await new Promise((b) => i.toBlob(b, "image/png")), l = new FormData();
    l.append("image", c, o), l.append("type", "temp"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const h = await Je.fetchApi("/upload/image", { method: "POST", body: l });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const m = await h.json(), x = String((m == null ? void 0 : m.name) || "").trim();
    if (!x) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: x,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let Ts = null, Ua = !1;
  function Tp() {
    const i = Jf(d.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const o = d.painting_layer, c = Jn();
    return !o || typeof o != "object" || String(o.revision || "") !== c || i.totalPaintCount > 0 && !o.paint || i.totalMaskCount > 0 && !o.mask;
  }
  function Ds() {
    const i = String(t.id ?? "0"), o = da.get(i);
    if (Ua && o) return o;
    const c = (async () => {
      var m, x, b, _, S, N, k, L, O, z, U, ut;
      const l = Jn(), h = Jf(d.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        d.painting_layer !== null && (d.painting_layer = null, Ts = l, Tn());
        return;
      }
      if (Ts !== l && !Ua) {
        Ua = !0;
        try {
          qa();
          const _t = Er(!1), mt = ((x = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : x.call(m, _t)) || null, pt = ((b = mt == null ? void 0 : mt.displayPaint) == null ? void 0 : b.canvas) || null, ht = ((_ = mt == null ? void 0 : mt.committedMask) == null ? void 0 : _.canvas) || null, gt = Math.max(1, Number(((S = mt == null ? void 0 : mt.descriptor) == null ? void 0 : S.width) || (pt == null ? void 0 : pt.width) || (ht == null ? void 0 : ht.width) || 2048)), bt = Math.max(1, Number(((N = mt == null ? void 0 : mt.descriptor) == null ? void 0 : N.height) || (pt == null ? void 0 : pt.height) || (ht == null ? void 0 : ht.height) || 1024));
          (!pt && h.totalPaintCount > 0 || !ht && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((k = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : k.width) || 0) !== gt || Number(((L = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : L.height) || 0) !== bt) && (p._paintLayerSyncBlankSurface = $s(gt, bt)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, gt, bt));
          const yt = pt || h.totalPaintCount > 0 && ((O = p._paintLayerSyncBlankSurface) == null ? void 0 : O.canvas) || null, W = ht || h.totalMaskCount > 0 && ((z = p._paintLayerSyncBlankSurface) == null ? void 0 : z.canvas) || null;
          if (!yt && !W) return;
          let ft = null, Ct = null;
          const jt = [];
          if (h.totalPaintCount > 0) {
            ft = await Es(yt, `pano_paint_${i}.png`);
            for (const It of _t) {
              const Tt = String(It || "").trim();
              if (!Tt) continue;
              const Ht = ((ut = (U = p.paintEngine) == null ? void 0 : U.getGroupDisplayCanvas) == null ? void 0 : ut.call(U, Tt)) || null;
              if (!Ht) continue;
              const Ot = Tt.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ft = await Es(Ht, `pano_group_${i}_${Ot}.png`);
              Ft && jt.push({
                id: Tt,
                actionGroupId: Tt,
                image: Ft
              });
            }
          }
          h.totalMaskCount > 0 && (Ct = await Es(W, `pano_mask_${i}.png`)), l === Jn() && (d.painting_layer = {
            paint: ft,
            mask: Ct,
            groups: jt,
            revision: l
          }, Ts = l, Tn());
        } catch (_t) {
          throw _t;
        } finally {
          Ua = !1;
        }
      }
    })();
    return da.set(i, c), c.finally(() => {
      da.get(i) === c && da.delete(i);
    }), c;
  }
  function Ba() {
    const i = zv(t, "pano_input_images", Lt, () => dt());
    if (i) return i;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((x) => String((x == null ? void 0 : x.name) || "")) : [], c = o.includes("erp_image"), l = o.includes("bg_erp");
    let h = [];
    return r && (c || l) ? h = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : h = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], ed(t, h, () => dt(), `background:${h.join("|")}`);
  }
  function Ul(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Dp() {
    if (!kt.hasPresentedFrame) return "boot";
    let i = !1, o = !1;
    if (p.showPanorama) {
      const c = Ba();
      i = !!c && !Ul(c);
    }
    if (p.showObjects) {
      const c = Array.isArray(d.stickers) ? d.stickers : [];
      for (const l of c) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const h = Cs(l);
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
      i.has(o) || (delete d.assets[o], Lt.delete(o));
    });
  }
  function Ls(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(B(i.y, -1, 1))
    };
  }
  function Rs(i, o = null) {
    const { lon: c, lat: l } = Ls(i), h = gr();
    let m = h.x + (c / (2 * Math.PI) + 0.5) * h.w;
    const x = h.y + (0.5 - l / Math.PI) * h.h;
    if (o !== null) {
      for (; m - o > h.w / 2; ) m -= h.w;
      for (; m - o < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: x, z: 1 };
  }
  function Ga(i) {
    const o = Hn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let c = Wn(0, 1, 0);
    Math.abs(Sn(o, c)) > 0.999 && (c = Wn(0, 0, 1));
    const l = mi(vo(c, o)), h = mi(vo(o, l)), m = Math.tan(B(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * De), x = Math.tan(B(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * De), b = Number(i.rot_deg || i.roll_deg || 0) * De, _ = Math.cos(b), S = Math.sin(b);
    return {
      centerDir: o,
      right: l,
      up: h,
      tanX: m,
      tanY: x,
      cr: _,
      sr: S
    };
  }
  function mr(i, o, c) {
    const l = o * i.cr - c * i.sr, h = o * i.sr + c * i.cr;
    return mi(yo(yo(i.centerDir, bo(i.right, l)), bo(i.up, h)));
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
  function Lp(i, o, c, l, h, m, x, b) {
    const _ = c.x * (l.y - h.y) + l.x * (h.y - c.y) + h.x * (c.y - l.y);
    if (Math.abs(_) < 1e-6) return;
    const S = (m.x * (l.y - h.y) + x.x * (h.y - c.y) + b.x * (c.y - l.y)) / _, N = (m.x * (h.x - l.x) + x.x * (c.x - h.x) + b.x * (l.x - c.x)) / _, k = (m.x * (l.x * h.y - h.x * l.y) + x.x * (h.x * c.y - c.x * h.y) + b.x * (c.x * l.y - l.x * c.y)) / _, L = (m.y * (l.y - h.y) + x.y * (h.y - c.y) + b.y * (c.y - l.y)) / _, O = (m.y * (h.x - l.x) + x.y * (c.x - h.x) + b.y * (l.x - c.x)) / _, z = (m.y * (l.x * h.y - h.x * l.y) + x.y * (h.x * c.y - c.x * h.y) + b.y * (c.x * l.y - l.x * c.y)) / _, [U, ut, _t] = vv(m, x, b, 0.45);
    i.save(), i.beginPath(), i.moveTo(U.x, U.y), i.lineTo(ut.x, ut.y), i.lineTo(_t.x, _t.y), i.closePath(), i.clip(), i.setTransform(S, L, N, O, k, z), i.drawImage(o, 0, 0), i.restore();
  }
  function Kl(i, o, c, l, h, m, x) {
    Lp(E, i, o, c, l, h, m, x);
  }
  function Rp(i) {
    const o = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: B((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Op(i) {
    var _, S, N, k;
    const o = (i == null ? void 0 : i.bbox) || null;
    if (!o) return [];
    const c = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((_ = i == null ? void 0 : i.transform) == null ? void 0 : _.scale) || 1)), h = Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.rot_deg) || 0), m = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.du) || 0), x = Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((L) => Ha($a(L, c, l, h), m, x));
  }
  function Fp(i) {
    const o = Be((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, l = (i == null ? void 0 : i.bbox) || {}, h = `${o}:${p.mode}:${Gi()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (p.mode === "frame") {
      const m = ne(), x = m ? We(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((x == null ? void 0 : x.x) || 0))}:${Math.round(Number((x == null ? void 0 : x.y) || 0))}:${Math.round(Number((x == null ? void 0 : x.w) || 0))}:${Math.round(Number((x == null ? void 0 : x.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Vp(i) {
    const o = String((i == null ? void 0 : i.id) || ""), l = [
      yn(i) ? "frame" : Ce(i) ? "sticker" : "item",
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
      const h = ne(), m = h ? We(h) : null;
      return `${l}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Hp() {
    var o;
    const i = String(((o = d.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return i === "draft" ? p.hqFrames && p.hqFrames > 0 ? [28, 20] : p.interaction ? [12, 9] : [20, 14] : i === "high" ? p.hqFrames && p.hqFrames > 0 ? [48, 36] : p.interaction ? [20, 14] : [36, 26] : p.hqFrames && p.hqFrames > 0 ? [40, 30] : p.interaction ? [16, 12] : [28, 20];
  }
  function Wl() {
    var i;
    return !!F && !!((i = ct == null ? void 0 : ct.isSupported) != null && i.call(ct));
  }
  function ql(i, o) {
    return !Wl() || e !== "stickers" && e !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((C == null ? void 0 : C.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((C == null ? void 0 : C.height) || 0));
  }
  function Yl() {
    return p.showObjects ? Ip() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Xl(i) {
    return !p.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : Ep(i);
  }
  function Zl() {
    var o, c, l, h;
    const i = Er();
    return ((h = (l = (c = (o = p.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, i)) == null ? void 0 : l.displayPaint) == null ? void 0 : h.canvas) || null;
  }
  function Jl() {
    var o, c, l, h;
    const i = Er();
    return ((h = (l = (c = (o = p.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, i)) == null ? void 0 : l.committedMask) == null ? void 0 : h.canvas) || null;
  }
  function $p(i, o = "modal_bg_gl") {
    const c = Yl(), l = Xl(c), h = !!i && !!i.complete && Number(i.naturalWidth || i.width || 0) > 1 && Number(i.naturalHeight || i.height || 0) > 1, m = h ? [
      String(i.currentSrc || i.src || ""),
      Number(i.naturalWidth || i.width || 0),
      Number(i.naturalHeight || i.height || 0)
    ].join("|") : "none", x = p.showObjects ? Zl() : null, b = p.showMask ? Jl() : null, _ = [
      o,
      m,
      Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((S) => String((S == null ? void 0 : S.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((S) => `${String((S == null ? void 0 : S.assetId) || "")}:${String((S == null ? void 0 : S.revision) || "")}`).join(",") : "none",
      x ? Wa() : "paint:none",
      b ? `${Jn()}:mask` : "mask:none",
      p.showPanorama ? "panorama:1" : "panorama:0",
      p.showObjects ? "objects:1" : "objects:0",
      p.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: yf({
        stateRevision: _,
        backgroundSource: h ? i : null,
        backgroundRevision: h ? `${o}:${m}` : "",
        coverageDeg: Xe(d.coverage),
        scene: c,
        textures: l,
        paintSource: x,
        paintRevision: x ? Wa() : "",
        maskSource: b,
        maskRevision: b ? `${Jn()}:mask` : "",
        rasterEntries: [],
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: h || l.length > 0 || !!x || !!b
    };
  }
  function Os() {
    if (!F) return;
    const i = F.getContext("webgl2");
    if (i)
      i.viewport(0, 0, F.width, F.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const o = F.getContext("2d");
      o && (o.clearRect(0, 0, F.width, F.height), o.fillStyle = "#070707", o.fillRect(0, 0, F.width, F.height));
    }
    kt.backgroundWasVisible = !1, kt.backgroundDirty = !1;
  }
  function zp(i, o, c, l = "modal_bg_gl") {
    var S;
    if (!ql(i, o)) return !1;
    if (!kt.backgroundDirty && kt.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: m } = $p(c, l);
    if (!m || !ct.syncState(h))
      return Os(), !1;
    const b = ct.renderToTarget("modal_pano", o, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), _ = (S = F == null ? void 0 : F.getContext) == null ? void 0 : S.call(F, "2d");
    return !b || !_ ? (Os(), !1) : (_.clearRect(0, 0, F.width, F.height), _.drawImage(b, 0, 0, F.width, F.height), kt.backgroundWasVisible = !0, kt.backgroundDirty = !1, !0);
  }
  function jp(i = !1) {
    const o = C.width, c = C.height, l = gr();
    if (E.globalAlpha = 1, E.lineWidth = 1, i || (E.fillStyle = "#070707", E.fillRect(0, 0, o, c), E.fillStyle = "#070707", E.fillRect(l.x, l.y, l.w, l.h)), qa(), jl(
      E,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      Ba(),
      "modal_unwrap"
    ), p.showGrid && !p.fullscreen) {
      E.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const x = l.x + l.w * m / 16;
        E.beginPath(), E.moveTo(x, l.y), E.lineTo(x, l.y + l.h), E.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const x = l.y + l.h * m / 8;
        E.beginPath(), E.moveTo(l.x, x), E.lineTo(l.x + l.w, x), E.stroke();
      }
      E.strokeStyle = "rgba(250, 250, 250, 0.86)", E.lineWidth = 1.2, E.beginPath(), E.moveTo(l.x, l.y + l.h / 2), E.lineTo(l.x + l.w, l.y + l.h / 2), E.stroke(), E.fillStyle = "rgba(250, 250, 250, 0.42)", E.font = "500 11px Geist, sans-serif", E.textAlign = "center";
      const h = l.y + l.h * 0.57;
      E.fillText("Left", l.x + l.w * 0.25, h), E.fillText("Front", l.x + l.w * 0.5, h), E.fillText("Right", l.x + l.w * 0.75, h), E.fillText("Back", l.x + 38, h), E.fillText("Back", l.x + l.w - 38, h);
    }
  }
  function Ql(i, o, c = 1) {
    let l = !1;
    E.strokeStyle = o, E.lineWidth = c, E.beginPath();
    for (const h of i) {
      const m = ji(h);
      if (!m) {
        l = !1;
        continue;
      }
      l ? E.lineTo(m.x, m.y) : (E.moveTo(m.x, m.y), l = !0);
    }
    E.stroke();
  }
  function Up(i = !1) {
    const o = C.width, c = C.height;
    if (i || (Wl() ? E.clearRect(0, 0, o, c) : (E.fillStyle = "#070707", E.fillRect(0, 0, o, c))), qa(), jl(
      E,
      { x: 0, y: 0, w: o, h: c },
      {
        mode: "panorama",
        yawDeg: p.viewYaw,
        pitchDeg: p.viewPitch,
        fovDeg: p.viewFov,
        coverageDeg: Xe(d.coverage)
      },
      Ba(),
      "modal_pano"
    ), p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let x = -89; x <= 89; x += 4) m.push(Hn(h, x));
        Ql(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let x = -180; x <= 180; x += 4) m.push(Hn(x, h));
        Ql(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: Hn(-90, 0) },
        { name: "Front", dir: Hn(0, 0) },
        { name: "Right", dir: Hn(90, 0) },
        { name: "Back", dir: Hn(180, 0) }
      ];
      E.fillStyle = "rgba(250, 250, 250, 0.42)", E.font = "500 11px Geist, sans-serif", E.textAlign = "center", l.forEach((h) => {
        const m = ji(h.dir);
        m && E.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function tu(i, o = null, c = null) {
    if (p.mode === "frame") {
      const l = o || ne();
      if (!l) return [];
      const h = c || We(l);
      return bg(i, l, h);
    }
    return gg(i);
  }
  function Bp(i, o) {
    const c = String(i.actionGroupId || i.id || "").trim(), l = In(c, i.layerKind), h = [], m = [], x = p.mode === "frame" ? ne() : null, b = x ? We(x) : null;
    for (const pt of l) {
      const ht = (pt == null ? void 0 : pt.geometry) || null, gt = (ht == null ? void 0 : ht.geometryKind) === "lasso_fill" ? ht == null ? void 0 : ht.points : (ht == null ? void 0 : ht.processedPoints) || (ht == null ? void 0 : ht.rawPoints) || (ht == null ? void 0 : ht.points) || [], bt = tu(gt, x, b).filter((ft) => Number.isFinite(ft == null ? void 0 : ft.x) && Number.isFinite(ft == null ? void 0 : ft.y));
      if (!bt.length) continue;
      m.push(...bt);
      const yt = xr(String((pt == null ? void 0 : pt.toolKind) || "pen")), W = en[yt] || en[ir];
      h.push({
        points: bt,
        closed: String((ht == null ? void 0 : ht.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((pt == null ? void 0 : pt.size) || 10) * Math.max(0.1, Number((W == null ? void 0 : W.sizeScale) ?? 1)) + 10),
        layerKind: String((pt == null ? void 0 : pt.layerKind) || i.layerKind || "paint")
      });
    }
    if (!m.length) {
      const pt = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(o, pt), pt;
    }
    let _ = 1 / 0, S = 1 / 0, N = -1 / 0, k = -1 / 0;
    for (const pt of h)
      for (const gt of Array.isArray(pt == null ? void 0 : pt.points) ? pt.points : []) {
        const bt = Number((gt == null ? void 0 : gt.x) || 0), yt = Number((gt == null ? void 0 : gt.y) || 0);
        _ = Math.min(_, bt - 2), S = Math.min(S, yt - 2), N = Math.max(N, bt + 2), k = Math.max(k, yt + 2);
      }
    if (!Number.isFinite(_) || !Number.isFinite(S) || !Number.isFinite(N) || !Number.isFinite(k)) {
      const pt = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(o, pt), pt;
    }
    const L = [
      { x: _, y: S },
      { x: N, y: S },
      { x: N, y: k },
      { x: _, y: k }
    ], O = { x: (_ + N) * 0.5, y: (S + k) * 0.5 }, z = { x: O.x, y: S }, U = { x: N, y: O.y }, ut = { x: O.x, y: k }, _t = { x: _, y: O.y }, mt = {
      kind: "strokeGroup",
      center: O,
      corners: L,
      edgeMidpoints: [
        { edge: "top", x: z.x, y: z.y, a: L[0], b: L[1] },
        { edge: "right", x: U.x, y: U.y, a: L[1], b: L[2] },
        { edge: "bottom", x: ut.x, y: ut.y, a: L[2], b: L[3] },
        { edge: "left", x: _t.x, y: _t.y, a: L[3], b: L[0] }
      ],
      rotateStemBase: z,
      rotateHandle: { x: z.x, y: z.y - 30 },
      strokePaths: h,
      visible: !0
    };
    return p._strokeGeomCache.set(o, mt), mt;
  }
  function Gp(i, o) {
    const c = Op(i), l = tu(c);
    if (!Array.isArray(l) || l.length < 4) {
      const b = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(o, b), b;
    }
    const h = l.slice(0, 4).map((b) => ({ x: Number((b == null ? void 0 : b.x) || 0), y: Number((b == null ? void 0 : b.y) || 0) })), x = {
      kind: "rasterObject",
      center: {
        x: h.reduce((b, _) => b + Number(_.x || 0), 0) / h.length,
        y: h.reduce((b, _) => b + Number(_.y || 0), 0) / h.length
      },
      corners: h,
      visible: !0
    };
    return p._strokeGeomCache.set(o, x), x;
  }
  function yr(i, o = null, c = null, l = null) {
    if (p.mode === "frame") {
      const mt = c || ne(), pt = l || We(mt), ht = mt ? Wi(mt, i) : null;
      return ht ? {
        x: Number(pt.x || 0) + Number(ht.x || 0) * Number(pt.w || 0),
        y: Number(pt.y || 0) + Number(ht.y || 0) * Number(pt.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return Rs(i, o);
    const { right: h, up: m, fwd: x } = Ps(), b = Sn(i, h), _ = Sn(i, m), S = Sn(i, x), N = C.width, k = C.height, L = p.viewFov * De, O = 2 * Math.atan(Math.tan(L / 2) * (k / Math.max(N, 1))), z = N / 2 / Math.tan(L / 2), U = k / 2 / Math.tan(O / 2), ut = Math.max(S, 1e-4), _t = Math.max(N, k) * 2;
    return {
      x: B(N / 2 + b / ut * z, -_t, N + _t),
      y: B(k / 2 - _ / ut * U, -_t, k + _t),
      z: ut
    };
  }
  function Kp(i) {
    const o = Hn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), c = p.mode === "frame" ? ne() : null, l = c ? We(c) : null, h = yr(o, null, c, l);
    if (!h) return { visible: !1 };
    const m = Ga(i), b = Bl(i).map((gt) => yr(gt, h.x, c, l)), _ = mr(m, 0, m.tanY), S = mr(m, 0, m.tanY + Math.max(m.tanY * 0.43, 0.053)), N = yr(_, h.x, c, l), k = yr(S, (N == null ? void 0 : N.x) ?? h.x, c, l), L = ((k == null ? void 0 : k.x) ?? N.x) - N.x, O = ((k == null ? void 0 : k.y) ?? N.y) - N.y, z = Math.hypot(L, O) || 1, U = {
      x: N.x + L / z * 30,
      y: N.y + O / z * 30
    }, ut = yr(mr(m, 0, m.tanY), h.x, c, l), _t = yr(mr(m, m.tanX, 0), h.x, c, l), mt = yr(mr(m, 0, -m.tanY), h.x, c, l), pt = yr(mr(m, -m.tanX, 0), h.x, c, l), ht = [
      {
        edge: "top",
        x: ut.x,
        y: ut.y,
        a: { x: b[0].x, y: b[0].y },
        b: { x: b[1].x, y: b[1].y }
      },
      {
        edge: "right",
        x: _t.x,
        y: _t.y,
        a: { x: b[1].x, y: b[1].y },
        b: { x: b[2].x, y: b[2].y }
      },
      {
        edge: "bottom",
        x: mt.x,
        y: mt.y,
        a: { x: b[2].x, y: b[2].y },
        b: { x: b[3].x, y: b[3].y }
      },
      {
        edge: "left",
        x: pt.x,
        y: pt.y,
        a: { x: b[3].x, y: b[3].y },
        b: { x: b[0].x, y: b[0].y }
      }
    ];
    return {
      center: { x: h.x, y: h.y },
      corners: b.map((gt) => ({ x: gt.x, y: gt.y })),
      edgeMidpoints: ht,
      rotateStemBase: { x: N.x, y: N.y },
      rotateHandle: U,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function Ie(i) {
    if (Se(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = ip(h, i.layerKind), x = p._strokeGeomCache.get(m);
      return x || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Bp(i, m));
    }
    if (Ge(i)) {
      const h = Fp(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Gp(i, h));
    }
    const o = Vp(i), c = p._strokeGeomCache.get(o);
    if (c) return c;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const l = Kp(i);
    return p._strokeGeomCache.set(o, l), l;
  }
  function Ka(i, o, c, l = null) {
    const h = [];
    for (let m = 0; m <= c; m += 1) {
      const x = m / c;
      let b = 0, _ = 0;
      o === 0 ? (b = x, _ = 0) : o === 1 ? (b = 1, _ = x) : o === 2 ? (b = 1 - x, _ = 1) : (b = 0, _ = 1 - x);
      const S = Gl(i, b, _), N = p.mode === "unwrap" ? Rs(S, l) : ji(S);
      N && h.push(N);
    }
    return h;
  }
  function Wp(i, o) {
    const c = Hn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = p.mode === "unwrap" ? Rs(c) : null, h = l ? l.x : null, m = p.mode === "pano" ? 28 : 20, x = [
      Ka(i, 0, m, h),
      Ka(i, 1, m, h),
      Ka(i, 2, m, h),
      Ka(i, 3, m, h)
    ];
    E.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", E.lineWidth = o ? 2 : 1, E.beginPath();
    let b = !1;
    for (const _ of x)
      for (const S of _)
        b ? E.lineTo(S.x, S.y) : (E.moveTo(S.x, S.y), b = !0);
    E.closePath(), E.stroke();
  }
  function qp() {
    const i = [...Array.isArray(d.stickers) ? d.stickers : []].sort((c, l) => Number(c.z_index || 0) - Number(l.z_index || 0));
    if (p.mode === "frame") return i;
    const o = Array.isArray(d.shots) ? d.shots : [];
    return [...i, ...o];
  }
  function Fs() {
    const i = [...Array.isArray(d.stickers) ? d.stickers : []].sort((c, l) => Number(l.z_index || 0) - Number(c.z_index || 0));
    if (p.mode === "frame") return i;
    const o = Array.isArray(d.shots) ? d.shots : [];
    return [...i, ...o];
  }
  function Vs(i, o = []) {
    if (!(!i || !Array.isArray(o) || o.length < 4)) {
      i.beginPath(), i.moveTo(o[0].x, o[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(o[c].x, o[c].y);
      i.closePath();
    }
  }
  function Yp(i, o, c, l) {
    if (Ce(i)) {
      const h = E.globalAlpha;
      E.globalAlpha = Ll(i), p.mode === "frame" ? (E.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", E.lineWidth = c ? 2 : 1, Vs(E, o.corners), E.stroke()) : Wp(i, c), E.globalAlpha = h;
      return;
    }
    E.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Vs(E, o.corners), E.fill(), E.strokeStyle = c ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", E.lineWidth = c ? 2.8 : 1.9, Vs(E, o.corners), E.stroke();
  }
  function Xp(i, o, c) {
    E.fillStyle = c, o.corners.forEach((l) => {
      E.beginPath(), E.arc(l.x, l.y, 6.5, 0, Math.PI * 2), E.fill();
    }), yn(i) && (E.strokeStyle = c, E.lineCap = "round", E.lineWidth = 4, o.edgeMidpoints.forEach((l) => {
      var N, k, L, O;
      const h = (((N = l.b) == null ? void 0 : N.x) ?? l.x) - (((k = l.a) == null ? void 0 : k.x) ?? l.x), m = (((L = l.b) == null ? void 0 : L.y) ?? l.y) - (((O = l.a) == null ? void 0 : O.y) ?? l.y), x = Math.hypot(h, m) || 1, b = h / x, _ = m / x, S = 10;
      E.beginPath(), E.moveTo(l.x - b * S, l.y - _ * S), E.lineTo(l.x + b * S, l.y + _ * S), E.stroke();
    }), E.lineCap = "butt"), Se(i) || (E.strokeStyle = "rgba(250, 250, 250, 0.9)", E.lineWidth = 1.8, E.beginPath(), E.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), E.lineTo(o.rotateHandle.x, o.rotateHandle.y), E.stroke(), E.fillStyle = c, E.beginPath(), E.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), E.fill());
  }
  function Zp() {
    var b;
    const [i, o] = Hp(), c = En(), l = c.length > 1, h = e === "cutout" ? qp() : ke(), m = h.map((_) => `${String((_ == null ? void 0 : _.id) || "")}:${yn(_) ? "frame" : Number((_ == null ? void 0 : _.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== h || p._sortedItemsCache.orderKey !== m) && (p._sortedItemsCache = {
      src: h,
      orderKey: m,
      sorted: [...h]
    });
    const x = p._sortedItemsCache.sorted;
    for (const _ of x) {
      const S = !l && ap(_);
      if (p.mode === "frame" && !S || !p.showObjects && !yn(_)) continue;
      const N = Ie(_);
      if (e !== "stickers" && !N.visible)
        continue;
      const k = Ce(_), L = pr(_);
      if (Yp(_, N, S, L), S && N.visible) {
        const O = L ? "#ff4d4f" : k && _e(_) ? "#f59e0b" : "#0070f3";
        Xp(_, N, O);
      }
    }
    if (l) {
      const _ = Ns(c);
      if (_ != null && _.visible) {
        const S = Ms(c) ? "#ff4d4f" : "#0070f3";
        E.save(), E.strokeStyle = "rgba(255, 255, 255, 0.95)", E.lineWidth = 2, E.setLineDash([6, 4]), E.beginPath(), E.moveTo(_.corners[0].x, _.corners[0].y);
        for (let N = 1; N < _.corners.length; N += 1) E.lineTo(_.corners[N].x, _.corners[N].y);
        E.closePath(), E.stroke(), E.setLineDash([]), E.fillStyle = S, _.corners.forEach((N) => {
          E.beginPath(), E.arc(N.x, N.y, 6.5, 0, Math.PI * 2), E.fill();
        }), E.restore();
      }
    } else
      c.forEach((_) => {
        if (!Se(_) && !Ge(_)) return;
        const S = Ie(_);
        if (!(S != null && S.visible)) return;
        const N = pr(_) ? "#ff4d4f" : "#0070f3";
        E.save(), E.strokeStyle = "rgba(255, 255, 255, 0.95)", E.lineWidth = 2, E.setLineDash([6, 4]), E.beginPath(), E.moveTo(S.corners[0].x, S.corners[0].y);
        for (let k = 1; k < S.corners.length; k += 1) E.lineTo(S.corners[k].x, S.corners[k].y);
        E.closePath(), E.stroke(), E.setLineDash([]), Se(_) && (E.fillStyle = N, S.corners.forEach((k) => {
          E.beginPath(), E.arc(k.x, k.y, 6.5, 0, Math.PI * 2), E.fill();
        })), E.restore();
      });
    if (((b = p.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const _ = vu(p.interaction.start, p.interaction.current);
      E.save(), E.strokeStyle = "rgba(255, 255, 255, 0.9)", E.fillStyle = "rgba(255, 255, 255, 0.08)", E.lineWidth = 1, E.setLineDash([5, 4]), E.beginPath(), E.rect(_.x0, _.y0, _.x1 - _.x0, _.y1 - _.y0), E.fill(), E.stroke(), E.restore();
    }
    p.hqFrames && i >= 40 && o >= 30 && (p.hqFrames -= 1, p.hqFrames > 0 && dt());
  }
  function Hs(i, o) {
    if (!i || !o) return null;
    const c = Number(o.x || 0), l = Number(o.y || 0);
    return Gl(i, c, l);
  }
  function Bi(i) {
    if (!i) return null;
    const o = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, l = Math.cos(c);
    return Wn(l * Math.sin(o), Math.sin(c), l * Math.cos(o));
  }
  function Ke(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function br(i, o, c, l = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Oe(i, "widthScale", 1),
      pressureLike: Oe(i, "pressureLike", 1)
    }, ...l, u: o, v: c };
  }
  function Jp(i, o, c) {
    const l = Ke(i), h = Ke(o);
    return br(i, or(l.x, h.x, c), or(l.y, h.y, c), {
      t: or(Number((i == null ? void 0 : i.t) || 0), Number((o == null ? void 0 : o.t) || 0), c),
      widthScale: or(Oe(i, "widthScale", 1), Oe(o, "widthScale", 1), c),
      pressureLike: or(Oe(i, "pressureLike", 1), Oe(o, "pressureLike", 1), c)
    });
  }
  function Qp(i, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function eu(i, o, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    if (i.length === 1) return [br(i[0], Ke(i[0]).x, Ke(i[0]).y)];
    const l = Qp(o, c), h = (N, k) => {
      const L = [0];
      for (let ht = 1; ht < N.length; ht += 1) {
        const gt = Ke(N[ht - 1]), bt = Ke(N[ht]);
        L.push(L[ht - 1] + Math.hypot(bt.x - gt.x, bt.y - gt.y));
      }
      const O = L[L.length - 1] || 0;
      if (O <= 1e-8) {
        const ht = N[0], gt = Ke(ht);
        return [br(ht, gt.x, gt.y)];
      }
      const z = [];
      let U = 0;
      for (let ht = 0; ht <= O + 1e-9; ht += k) {
        for (; U < L.length - 2 && L[U + 1] < ht; ) U += 1;
        const gt = L[U], bt = L[U + 1], yt = Math.max(1e-8, bt - gt);
        z.push(Jp(N[U], N[U + 1], B((ht - gt) / yt, 0, 1)));
      }
      const ut = N[N.length - 1], _t = Ke(ut), mt = z[z.length - 1], pt = mt ? Ke(mt) : null;
      return (!pt || Math.hypot(pt.x - _t.x, pt.y - _t.y) > k * 0.35) && z.push(br(ut, _t.x, _t.y)), z;
    }, m = (N) => {
      if (!Array.isArray(N) || N.length < 3) return N ? N.slice() : [];
      const k = [br(N[0], Ke(N[0]).x, Ke(N[0]).y)];
      for (let L = 0; L < N.length - 1; L += 1) {
        const O = N[L], z = N[L + 1], U = Ke(O), ut = Ke(z), _t = br(
          O,
          U.x * 0.75 + ut.x * 0.25,
          U.y * 0.75 + ut.y * 0.25,
          {
            t: Number(O.t || 0) * 0.75 + Number(z.t || 0) * 0.25,
            widthScale: Oe(O, "widthScale", 1) * 0.75 + Oe(z, "widthScale", 1) * 0.25,
            pressureLike: Oe(O, "pressureLike", 1) * 0.75 + Oe(z, "pressureLike", 1) * 0.25
          }
        ), mt = br(
          O,
          U.x * 0.25 + ut.x * 0.75,
          U.y * 0.25 + ut.y * 0.75,
          {
            t: Number(O.t || 0) * 0.25 + Number(z.t || 0) * 0.75,
            widthScale: Oe(O, "widthScale", 1) * 0.25 + Oe(z, "widthScale", 1) * 0.75,
            pressureLike: Oe(O, "pressureLike", 1) * 0.25 + Oe(z, "pressureLike", 1) * 0.75
          }
        );
        k.push(_t, mt);
      }
      return k.push(br(N[N.length - 1], Ke(N[N.length - 1]).x, Ke(N[N.length - 1]).y)), k;
    }, x = h(i, l);
    if (x.length < 3) return x;
    const b = c ? 2 : 1;
    let _ = x.slice();
    for (let N = 0; N < b; N += 1) _ = m(_);
    return h(_, Math.max(l * 0.75, 55e-5));
  }
  function Oe(i, o, c = 1) {
    const l = Number(i == null ? void 0 : i[o]);
    return Number.isFinite(l) ? Math.max(0, l) : c;
  }
  function tg(i) {
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
  function $s(i, o) {
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(i)), c.height = Math.max(1, Math.round(o));
    const l = c.getContext("2d");
    return l && (l.clearRect(0, 0, c.width, c.height), l.imageSmoothingEnabled = !0), { canvas: c, ctx: l };
  }
  function Gi() {
    const i = Ya();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Jn() {
    const i = Ya();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Wa() {
    const i = kl(), o = Jn();
    return i ? `${o}:${i}` : o;
  }
  function eg() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function ng() {
    p.paintCompositeRevision += 1;
  }
  function rg() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function nu() {
    var i, o;
    p.paintEngineRevisionKey = null, (o = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || o.call(i, d), p.paintEngineRevisionKey = Gi();
  }
  function cn() {
    p.objectVisualRevision = Number(p.objectVisualRevision || 0) + 1, rg(), kt.backgroundDirty = !0, kt.dirty = !0;
  }
  function bn({ rebuildPaintEngine: i = !1 } = {}) {
    eg(), cn(), i && nu();
  }
  function Ki() {
    ng(), cn();
  }
  function qa() {
    var l;
    const i = Ya(), o = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== o && (p.paintEngine = Oc(i), p.paintEngineDescriptorKey = o, p.paintEngineRevisionKey = "");
    const c = Gi();
    p.paintEngineRevisionKey !== c && (p.paintEngineRevisionKey = c, (l = p.paintEngine) == null || l.rebuildCommitted(d));
  }
  function Ya() {
    const i = Math.max(1, Number((d == null ? void 0 : d.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function vr() {
    return Ya();
  }
  function ig(i, o, c, l, h = null) {
    const m = tg(i), x = Oe(o, "widthScale", 1) * Oe(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * x) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * De) * c * x) : Math.max(0.5, m.value / (2 * Math.PI) * c * x) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * x);
  }
  function ag(i, o, c = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), m = c.preview === !0, x = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * x : 1, l === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, _ = m ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${_})`;
  }
  function og(i, o, c) {
    const l = Math.max(0.5, Math.min(c, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (i.beginPath(), i.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), i.fill());
  }
  function sg(i, o, c, l, h = {}) {
    if (!i || !Array.isArray(o) || !o.length) return;
    const m = Math.max(l.w, l.h) * 0.25;
    i.save(), ag(i, c, h);
    const x = (b) => og(i, b, m);
    if (o.length === 1) {
      x(o[0]), i.restore();
      return;
    }
    for (let b = 0; b < o.length - 1; b += 1) {
      const _ = o[b], S = o[b + 1];
      if (!_ || !S) continue;
      const N = Number(_.x || 0), k = Number(_.y || 0), L = Number(S.x || 0), O = Number(S.y || 0), z = Math.max(0.5, Math.min(m, Number(_.radiusPx || 0.5))), U = Math.max(0.5, Math.min(m, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(N) || !Number.isFinite(k) || !Number.isFinite(L) || !Number.isFinite(O) || !Number.isFinite(z) || !Number.isFinite(U)) continue;
      const ut = L - N, _t = O - k, mt = Math.hypot(ut, _t);
      if (!Number.isFinite(mt) || mt < 1e-6) {
        x(_);
        continue;
      }
      if (mt > Math.max(l.w, l.h) * 0.5) continue;
      const pt = Math.max(0.5, Math.min(z, U)), ht = Math.max(0.35, Math.min(pt * 0.4, 2.25)), gt = Math.max(1, Math.ceil(mt / ht));
      for (let bt = 0; bt <= gt; bt += 1) {
        const yt = bt / gt;
        x({
          x: or(N, L, yt),
          y: or(k, O, yt),
          radiusPx: or(z, U, yt)
        });
      }
    }
    x(o[o.length - 1]), i.restore();
  }
  function cg(i, o, c, l) {
    sg(i, o, c, l, { preview: !1 });
  }
  function lg(i, o, c, l, h) {
    var b, _, S, N;
    if (!i || !Array.isArray(o) || o.length < 3) return;
    const m = "u", x = "v";
    if (i.save(), String((c == null ? void 0 : c.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((c == null ? void 0 : c.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const k = (c == null ? void 0 : c.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(k.r || 0) * 255)}, ${Math.round(Number(k.g || 0) * 255)}, ${Math.round(Number(k.b || 0) * 255)}, ${Number(k.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((b = o[0]) == null ? void 0 : b[m]) || 0) * l.w, Number(((_ = o[0]) == null ? void 0 : _[x]) || 0) * l.h);
    for (let k = 1; k < o.length; k += 1)
      i.lineTo(Number(((S = o[k]) == null ? void 0 : S[m]) || 0) * l.w, Number(((N = o[k]) == null ? void 0 : N[x]) || 0) * l.h);
    i.closePath(), i.fill(), i.restore();
  }
  function ru(i) {
    const o = (i == null ? void 0 : i.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function ug(i, o) {
    const c = ru(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: ig(i, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function fg(i, o, c = null) {
    var b, _, S, N;
    if (!(i != null && i.ctx) || !o) return !1;
    const l = c || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((_ = i.canvas) == null ? void 0 : _.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((S = o == null ? void 0 : o.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((N = o == null ? void 0 : o.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill")
      return lg(i.ctx, ru(h), h, l), !0;
    const x = ug(h, l);
    return x.length ? (cg(i.ctx, x, h, l), !0) : !1;
  }
  function dg(i, o, c, l = 8) {
    const h = new Uint8Array(o * c), m = [], x = new Int32Array(o * c), b = new Int32Array(o * c);
    for (let _ = 0; _ < c; _ += 1)
      for (let S = 0; S < o; S += 1) {
        const N = _ * o + S;
        if (h[N] || i[N] <= l) continue;
        let k = 0, L = 0;
        x[L] = S, b[L] = _, L += 1, h[N] = 1;
        const O = [];
        let z = S, U = _, ut = S, _t = _;
        for (; k < L; ) {
          const mt = x[k], pt = b[k];
          k += 1, O.push({ x: mt, y: pt }), mt < z && (z = mt), pt < U && (U = pt), mt > ut && (ut = mt), pt > _t && (_t = pt);
          const ht = [
            [mt - 1, pt],
            [mt + 1, pt],
            [mt, pt - 1],
            [mt, pt + 1]
          ];
          for (const [gt, bt] of ht) {
            if (gt < 0 || bt < 0 || gt >= o || bt >= c) continue;
            const yt = bt * o + gt;
            h[yt] || i[yt] <= l || (h[yt] = 1, x[L] = gt, b[L] = bt, L += 1);
          }
        }
        m.push({ pixels: O, minX: z, minY: U, maxX: ut, maxY: _t });
      }
    return m;
  }
  function hg(i, o, c = {}) {
    var S;
    const l = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (S = i == null ? void 0 : i.getContext) == null ? void 0 : S.call(i, "2d");
    if (!m || l < 1 || h < 1) return [];
    const x = m.getImageData(0, 0, l, h), b = new Uint8Array(l * h);
    for (let N = 0; N < b.length; N += 1) b[N] = x.data[N * 4 + 3];
    return dg(b, l, h, 8).map((N, k) => {
      const L = N.maxX - N.minX + 1, O = N.maxY - N.minY + 1, z = document.createElement("canvas");
      z.width = L, z.height = O;
      const U = z.getContext("2d");
      if (!U) return null;
      const ut = U.createImageData(L, O);
      return N.pixels.forEach(({ x: _t, y: mt }) => {
        const pt = (mt * l + _t) * 4, ht = ((mt - N.minY) * L + (_t - N.minX)) * 4;
        ut.data[ht + 0] = x.data[pt + 0], ut.data[ht + 1] = x.data[pt + 1], ut.data[ht + 2] = x.data[pt + 2], ut.data[ht + 3] = x.data[pt + 3];
      }), U.putImageData(ut, 0, 0), {
        id: bi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + k * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: N.minX / l,
          v0: N.minY / h,
          u1: (N.maxX + 1) / l,
          v1: (N.maxY + 1) / h
        },
        rasterDataUrl: z.toDataURL("image/png"),
        transform: {
          du: 0,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Wi(i, o) {
    if (!i || !o) return null;
    const c = Ga(i), l = Sn(o, c.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const h = Sn(o, c.right) / l, m = Sn(o, c.up) / l, x = h * c.cr + m * c.sr, b = -h * c.sr + m * c.cr;
    return {
      x: (x / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function pg(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const c = gr();
      return i.map((l) => ({
        x: c.x + Number(l.u || 0) * c.w,
        y: c.y + Number(l.v || 0) * c.h
      }));
    }
    const o = i.map((c) => ji(Bi(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function gg(i) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const c = gr();
      return i.map((l) => ({
        x: c.x + Number(l.u || 0) * c.w,
        y: c.y + Number(l.v || 0) * c.h
      }));
    }
    const o = i.map((c) => ji(Bi(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function mg(i, o = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let c = 0; c < i.length; c += 1) {
      const l = i[c], h = i[(c + 1) % i.length];
      if (!l || !h || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(l.x), Number(h.y) - Number(l.y)) > o) return !1;
    }
    return !0;
  }
  function yg(i, o, c) {
    if (!Array.isArray(i) || i.length < 3 || !o || !c) return [];
    const l = [];
    for (const h of i) {
      const m = Bi(h), x = Wi(o, m);
      if (!x) return [];
      l.push({
        x: Number(c.x || 0) + Number(x.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(x.y || 0) * Number(c.h || 0)
      });
    }
    return mg(l, Math.max(80, Math.max(c.w, c.h) * 0.75)) ? l : [];
  }
  function bg(i, o, c) {
    if (!Array.isArray(i) || i.length < 1 || !o || !c) return [];
    const l = [];
    for (const h of i) {
      const m = Bi(h), x = Wi(o, m);
      x && l.push({
        x: Number(c.x || 0) + Number(x.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(x.y || 0) * Number(c.h || 0)
      });
    }
    return l;
  }
  function vg() {
    var l, h, m, x, b;
    const i = ne(), o = We(i), c = Ba();
    if (!i || !o) return !1;
    if (E.save(), E.fillStyle = "#050505", E.fillRect(0, 0, C.width, C.height), E.shadowColor = "rgba(0, 0, 0, 0.45)", E.shadowBlur = 24, E.shadowOffsetX = 0, E.shadowOffsetY = 10, E.fillStyle = "rgba(14, 14, 14, 1)", E.fillRect(o.x, o.y, o.w, o.h), E.restore(), E.save(), E.beginPath(), E.rect(o.x, o.y, o.w, o.h), E.clip(), c && (c.complete || c.naturalWidth || c.width) && Number(c.naturalWidth || c.width || 0) > 1 && Number(c.naturalHeight || c.height || 0) > 1) {
      const _ = p.interaction ? "draft" : String(((l = d.ui_settings) == null ? void 0 : l.preview_quality) || "balanced");
      let S = !1;
      p.showPanorama && (S = mc(E, t, c, o, i, _) || S);
      const N = Er(), k = ((m = (h = p.paintEngine) == null ? void 0 : h.getErpTarget) == null ? void 0 : m.call(h, N)) || null;
      if (p.showObjects) {
        const L = [...Array.isArray(d.stickers) ? d.stickers : []].filter((z) => (z == null ? void 0 : z.visible) !== !1).sort((z, U) => Number((z == null ? void 0 : z.z_index) || 0) - Number((U == null ? void 0 : U.z_index) || 0));
        for (const z of L) {
          const U = Cs(z);
          if (U && (U.complete || U.width)) {
            const ut = Ie(z), _t = Array.isArray(ut == null ? void 0 : ut.corners) ? ut.corners : [];
            if (_t.length < 4) continue;
            const mt = z != null && z.crop && typeof z.crop == "object" ? z.crop : {}, pt = Number(U.naturalWidth || U.width || 0), ht = Number(U.naturalHeight || U.height || 0);
            if (pt <= 1 || ht <= 1) continue;
            const gt = B(Math.min(Number(mt.x0 ?? 0), Number(mt.x1 ?? 1)), 0, 1) * pt, bt = B(Math.min(Number(mt.y0 ?? 0), Number(mt.y1 ?? 1)), 0, 1) * ht, yt = B(Math.max(Number(mt.x0 ?? 0), Number(mt.x1 ?? 1)), 0, 1) * pt, W = B(Math.max(Number(mt.y0 ?? 0), Number(mt.y1 ?? 1)), 0, 1) * ht, ft = E.globalAlpha;
            E.globalAlpha = Ll(z), Kl(
              U,
              { x: gt, y: bt },
              { x: yt, y: bt },
              { x: yt, y: W },
              _t[0],
              _t[1],
              _t[2]
            ), Kl(
              U,
              { x: gt, y: bt },
              { x: yt, y: W },
              { x: gt, y: W },
              _t[0],
              _t[2],
              _t[3]
            ), E.globalAlpha = ft, S = !0;
          }
        }
        const O = ((x = k == null ? void 0 : k.displayPaint) == null ? void 0 : x.canvas) || null;
        O && (S = mc(E, t, O, o, i, _) || S);
      }
      if (p.showMask) {
        const L = ((b = k == null ? void 0 : k.committedMask) == null ? void 0 : b.canvas) || null;
        L && (S = mc(E, t, L, o, i, _) || S);
      }
      S || (E.fillStyle = "rgba(255, 255, 255, 0.03)", E.fillRect(o.x, o.y, o.w, o.h));
    } else
      E.fillStyle = "rgba(255, 255, 255, 0.03)", E.fillRect(o.x, o.y, o.w, o.h);
    return E.restore(), E.save(), E.strokeStyle = "rgba(255, 255, 255, 0.12)", E.lineWidth = 1, E.strokeRect(o.x + 0.5, o.y + 0.5, o.w - 1, o.h - 1), E.restore(), !0;
  }
  function _g() {
    var _, S;
    if (((_ = p.interaction) == null ? void 0 : _.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, o = (S = i == null ? void 0 : i.geometry) == null ? void 0 : S.points;
    let c;
    if (p.mode === "frame") {
      const N = ne(), k = We(N);
      c = yg(o, N, k);
    } else
      c = pg(o);
    if (!Array.isArray(c) || c.length < 3) return;
    const l = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), x = Math.round(Number(h.g || 0) * 255), b = Math.round(Number(h.b || 0) * 255);
    E.save(), E.beginPath(), E.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let N = 1; N < c.length; N++) E.lineTo(Number(c[N].x || 0), Number(c[N].y || 0));
    E.closePath(), l ? (E.lineWidth = 2, E.setLineDash([6, 6]), E.lineDashOffset = 0, E.strokeStyle = "rgba(0,0,0,0.96)", E.stroke(), E.lineDashOffset = -6, E.strokeStyle = "rgba(255,255,255,0.96)", E.stroke(), E.setLineDash([]), E.lineDashOffset = 0) : (E.lineWidth = 1.5, E.setLineDash([6, 4]), E.strokeStyle = `rgba(${m},${x},${b},1)`, E.stroke(), E.setLineDash([])), E.restore();
  }
  function xg() {
    p.mode === "frame" ? vg() : p.mode === "unwrap" ? jp(!1) : Up(!1), Zp(), _g(), at && (at.textContent = `${Math.round(p.viewFov)}°`), $t(), kt.hasPresentedFrame || (kt.hasPresentedFrame = !0, F.style.opacity = "1");
    const i = Dp();
    i ? (A == null || A.removeAttribute("data-stage-ready"), A == null || A.setAttribute("data-stage-loading-kind", i)) : (A == null || A.setAttribute("data-stage-ready", ""), A == null || A.removeAttribute("data-stage-loading-kind"));
  }
  function wg(i = p.interaction) {
    if (e !== "stickers" || p.mode !== "pano") return !1;
    const o = String((i == null ? void 0 : i.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Sg() {
    t.__panoLiveStateOverride = d, t.__panoLivePaintSurface = rp();
  }
  function dt(i = {}) {
    var b, _, S, N, k, L, O, z, U, ut;
    const o = !!i.localOnly, c = i.externalSync === !0, l = String(i.cause || ""), h = String(((b = p.interaction) == null ? void 0 : b.kind) || "");
    (!o || h === "view" || h === "pan_frame" || wg() || !!((_ = p.viewTween) != null && _.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (kt.backgroundDirty = !0), o && Ml() && (p.livePaintInteractionRevision += 1, kt.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (za(), ja()), Sg(), c && ((N = (S = t.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || N.call(S), (k = t.setDirtyCanvas) == null || k.call(t, !0, !1)), c && !o && ((O = (L = t.graph) == null ? void 0 : L.setDirtyCanvas) == null || O.call(L, !0, !0), (ut = (U = (z = pn) == null ? void 0 : z.canvas) == null ? void 0 : U.setDirty) == null || ut.call(U, !0, !0)), kt.dirty = !0;
  }
  function iu() {
    const i = C.getBoundingClientRect(), o = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return C.width !== o || C.height !== c || F.width !== o || F.height !== c ? (C.width = o, C.height = c, F.width = o, F.height = c, kt.backgroundDirty = !0, kt.dirty = !0, e === "cutout" && (kt.pendingStableLayoutFrames = Math.max(Number(kt.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function zs(i = performance.now()) {
    var o;
    if (kt.running) {
      if (kt.lastTickTs = i, p.outputPreviewAnim !== p.outputPreviewAnimTo) {
        const c = Math.max(1, Number(p.outputPreviewAnimDurationMs)), l = B((i - Number(p.outputPreviewAnimStartTs || 0)) / c, 0, 1), m = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? dv(l) : hv(l);
        p.outputPreviewAnim = or(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, m), kt.dirty = !0, l >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
      }
      if ((o = p.viewTween) != null && o.active) {
        const c = p.viewTween, l = B((i - c.startTs) / c.durationMs, 0, 1), h = fv(l);
        p.viewYaw = Le(c.startYaw + c.deltaYaw * h), p.viewPitch = c.startPitch + (c.targetPitch - c.startPitch) * h, p.viewFov = c.startFov + (c.targetFov - c.startFov) * h, kt.backgroundDirty = !0, kt.dirty = !0, l >= 1 && (p.viewTween = null);
      }
      if (p.viewInertia.vx = Number(Te.state.inertia.vx || 0), p.viewInertia.vy = Number(Te.state.inertia.vy || 0), p.viewInertia.active = !!Te.state.inertia.active, Te.stepInertia(i) && (p.viewInertia.vx = Number(Te.state.inertia.vx || 0), p.viewInertia.vy = Number(Te.state.inertia.vy || 0), p.viewInertia.active = !!Te.state.inertia.active, kt.backgroundDirty = !0, kt.dirty = !0), (kt.dirty || i - kt.lastSizeCheckTs >= 220) && (iu(), kt.lastSizeCheckTs = i), kt.pendingStableLayoutFrames > 0 && (kt.pendingStableLayoutFrames -= 1, kt.dirty = !0), kt.dirty) {
        if (kt.pendingStableLayoutFrames > 0) {
          kt.rafId = requestAnimationFrame(zs);
          return;
        }
        kt.dirty = !1, xg();
      }
      kt.rafId = requestAnimationFrame(zs);
    }
  }
  function Ng() {
    kt.running = !1, kt.rafId && cancelAnimationFrame(kt.rafId), kt.rafId = 0;
  }
  function ee() {
    r || (p.historyController.commitActionGroup(JSON.stringify(Qf(d))), Ws());
  }
  function qi(i) {
    if (r) return;
    const o = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (Ws(), !o) return;
    const c = JSON.parse(o);
    Object.keys(d).forEach((l) => delete d[l]), Object.assign(d, c), p.selectedId = e === "stickers" || e === "cutout" ? d.active.selected_sticker_id : d.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], bn(), ln(), zt(), Tn(), dt({ cause: "cutout_frame" });
  }
  function au() {
    var c, l;
    const i = Array.isArray((c = p.historyController) == null ? void 0 : c.entries) ? p.historyController.entries : [], o = Number((l = p.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !r && i.length > 1 && o > 0,
      canRedo: !r && i.length > 1 && o >= 0 && o < i.length - 1
    };
  }
  function ln() {
    var x, b, _;
    j == null || j.querySelectorAll("[data-tool-mode]").forEach((S) => {
      const N = S.getAttribute("data-tool-mode") === p.primaryTool;
      S.classList.toggle("active", N), S.setAttribute("aria-pressed", N ? "true" : "false");
    });
    const i = p.primaryTool === "paint" || p.primaryTool === "mask";
    if (ot && st(i), !i) {
      Nt.forEach((S) => {
        S.classList.remove("is-active");
      }), Mt && (Mt.hidden = !0);
      return;
    }
    const o = p.primaryTool, c = Nt.find((S) => String(S.getAttribute("data-paint-pane") || "") === o) || null;
    if (Nt.forEach((S) => {
      S.classList.toggle("is-active", S === c);
    }), w.forEach((S) => {
      S.hidden = !1;
    }), D.forEach((S) => {
      S.hidden = !1;
    }), tt && (clearTimeout(tt), tt = 0), I.querySelectorAll("[data-paint-tool]").forEach((S) => {
      S.classList.toggle("active", S.getAttribute("data-paint-tool") === p.paintTool);
    }), I.querySelectorAll("[data-mask-tool]").forEach((S) => {
      S.classList.toggle("active", S.getAttribute("data-mask-tool") === p.maskTool);
    }), At) {
      const S = p.paintTool !== "eraser";
      At.hidden = !1, At.classList.toggle("disabled", !S), !S && Mt && !Mt.hidden && (tt = window.setTimeout(() => {
        Mt.hidden = !0, tt = 0;
      }, 170));
      const N = ((x = Vo.find((L) => Ho(p.paintColor, L.color))) == null ? void 0 : x.id) || "";
      At.querySelectorAll("[data-paint-color-swatch]").forEach((L) => {
        const O = L.getAttribute("data-paint-color-swatch") === N;
        L.classList.toggle("active", O), L.setAttribute("aria-pressed", O ? "true" : "false"), L.disabled = !S;
      });
      const k = At.querySelector("[data-paint-color-custom]");
      if (k) {
        const L = !N;
        k.classList.toggle("active", L), k.style.setProperty("--custom-color", Nn(p.customPaintColor, 1)), k.setAttribute("aria-pressed", L ? "true" : "false"), k.disabled = !S;
      }
      if (Ae && (Ae.value = String(Math.round(B(Number(((b = p.customPaintColor) == null ? void 0 : b.a) ?? 1), 0, 1) * 100))), on && (on.textContent = `${Math.round(B(Number(((_ = p.customPaintColor) == null ? void 0 : _.a) ?? 1), 0, 1) * 100)}%`), ae && (ae.style.background = Nn(p.customPaintColor)), Mt) {
        const L = oa(p.customPaintColor);
        Mt.style.setProperty("--picker-hue-color", Nn({ ...wc(L.h, 1, 1), a: 1 }, 1)), Mt.style.setProperty("--picker-sat", `${B(L.s, 0, 1) * 100}%`), Mt.style.setProperty("--picker-val", `${(1 - B(L.v, 0, 1)) * 100}%`), Mt.style.setProperty("--picker-hue", `${B(L.h, 0, 1) * 100}%`);
      }
      if (je) {
        const L = oa(p.customPaintColor);
        je.style.left = `${B(L.s, 0, 1) * 100}%`, je.style.top = `${(1 - B(L.v, 0, 1)) * 100}%`;
      }
      if (Ue) {
        const L = oa(p.customPaintColor);
        Ue.style.left = `${B(L.h, 0, 1) * 100}%`;
      }
      if (sn && mn) {
        const L = Array.from({ length: 8 }, (O, z) => p.customPaintHistory[z] || null);
        mn.innerHTML = L.map((O, z) => `
          <button class="pano-paint-color-history-dot${O ? "" : " empty"}" type="button" data-paint-history-index="${z}" ${O ? `style="--swatch:${Nn(O, 1)}"` : ""} aria-label="Recent color ${z + 1}" ${O ? "" : "disabled"}></button>
        `).join(""), mn.querySelectorAll("[data-paint-history-index]").forEach((O) => {
          O.onclick = () => {
            const z = Number(O.getAttribute("data-paint-history-index")), U = p.customPaintHistory[z];
            U && (p.customPaintColor = un(U), p.paintColor = un(U), ln());
          };
        });
      }
    }
    const l = xr(p.primaryTool === "paint" ? p.paintTool : p.maskTool), h = p.brushSizes[l] ?? 10, m = dp();
    w.forEach((S) => {
      S.classList.toggle("disabled", m);
    }), q.forEach((S) => {
      S.value = String(h);
      const N = (h - 1) / 119 * 100;
      S.style.setProperty("--v", `${B(N, 0, 100)}%`), S.disabled = m;
    }), Y.forEach((S) => {
      S.textContent = String(h);
    });
  }
  function oi(i, o, c, l, h, m, x, b = !0) {
    const _ = document.createElement("div");
    _.dataset.key = c, _.dataset.min = String(h), _.dataset.max = String(m), _.className = "pano-field", _.innerHTML = `<label>${l}</label><input type='range' min='${h}' max='${m}' step='${x}' value='${Number(o[c] || 0)}'><input type='number' min='${h}' max='${m}' step='${x}' value='${Sc(o[c] || 0)}'>`;
    const [S, N] = _.querySelectorAll("input"), k = () => {
      const O = Number(h), z = Number(m), ut = (Number(S.value) - O) / Math.max(1e-6, z - O) * 100;
      S.style.setProperty("--v", `${B(ut, 0, 100)}%`);
    };
    S.disabled = !b, N.disabled = !b;
    const L = (O) => {
      if (!b) return;
      let z = Number(O);
      Number.isNaN(z) && (z = 0), z = B(z, h, m), c === "yaw_deg" && (z = Le(z)), o[c] = z, e === "cutout" && (c === "hFOV_deg" || c === "vFOV_deg") && (o.aspect_id = jr(o)), S.value = String(z), N.value = Sc(z), k(), dt();
    };
    S.oninput = () => L(S.value), N.oninput = () => L(N.value), S.onchange = () => ee(), N.onchange = () => ee(), k(), i.appendChild(_);
  }
  function js() {
    const i = fe();
    if (!i) return;
    p.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: yi(i)
    }, J.querySelectorAll(".pano-field[data-key]").forEach((m) => {
      const x = m.dataset.key;
      if (!x || !(x in i)) return;
      const b = m.querySelector("input[type='range']"), _ = m.querySelector("input[type='number']");
      if (!b || !_) return;
      const S = Number(m.dataset.min ?? b.min ?? 0), N = Number(m.dataset.max ?? b.max ?? 0);
      let k = Number(i[x] || 0);
      Number.isNaN(k) && (k = 0), k = B(k, S, N);
      const L = String(k);
      b.value !== L && (b.value = L);
      const O = Sc(k);
      _.value !== O && (_.value = O);
      const z = (k - S) / Math.max(1e-6, N - S) * 100;
      b.style.setProperty("--v", `${B(z, 0, 100)}%`);
    });
    const c = yi(i), l = J.querySelector(".pano-cutout-aspect-label span");
    l && (l.textContent = c), J.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]").forEach((m) => {
      m.classList.toggle("active", String(m.getAttribute("data-aspect")) === c);
    });
  }
  function ou({ disabled: i = !1, onChange: o }) {
    const c = Xe(d.coverage), l = document.createElement("div");
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
    const h = l.querySelector("[data-setting='coverage']"), m = (x) => {
      const b = Xe(x);
      h.setAttribute("data-selected", b === 180 ? "1" : "0"), h.querySelectorAll(".pano-segment-btn").forEach((_) => {
        _.setAttribute("aria-pressed", Xe(_.getAttribute("data-value")) === b ? "true" : "false"), _.disabled = !!i;
      });
    };
    return h.querySelectorAll(".pano-segment-btn").forEach((x) => {
      x.onclick = () => {
        if (i) return;
        const b = Xe(x.getAttribute("data-value"));
        b !== Xe(d.coverage) && (o == null || o(b), m(b));
      };
    }), m(c), l;
  }
  function zt() {
    var ft, Ct, jt, It, Tt, Ht, Ot, Ft, se, Qn, tr, Xi, ro, ui, fi, Zi;
    if (a) return;
    const i = [...J.children].slice(0, 2);
    J.innerHTML = "", i.forEach((Pt) => J.appendChild(Pt));
    const o = J.querySelector(".pano-side-actions");
    if (o && (o.innerHTML = ""), s) {
      const Pt = document.createElement("div");
      Pt.className = "pano-inspector", Pt.appendChild(ou({
        onChange: (Kt) => {
          var ce;
          d.coverage = Kt, p.coverage = Kt, g && (g.value = String(Kt), (ce = g.callback) == null || ce.call(g, g.value)), kt.backgroundDirty = !0, dt(), zt();
        }
      }));
      const Ut = document.createElement("details");
      Ut.className = "pano-ui-settings", Ut.open = !1, Ut.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Et.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(ft = d.ui_settings) != null && ft.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Ct = d.ui_settings) != null && Ct.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(jt = d.ui_settings) != null && jt.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(It = d.ui_settings) != null && It.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Tt = d.ui_settings) != null && Tt.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Ht = d.ui_settings) != null && Ht.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const de = Ut.querySelector("[data-setting='invert-x']"), Dn = Ut.querySelector("[data-setting='invert-y']"), er = Ut.querySelector("[data-ui-picker='quality']"), Ln = Ut.querySelector("[data-action='ui-reset-defaults']"), nr = (Kt, ce, xn, di) => {
        const wr = Kt.querySelector(".pano-picker-trigger"), Ji = Kt.querySelector(".pano-picker-label"), wn = Kt.querySelector(".pano-picker-pop"), Sr = () => {
          const On = String(xn()), Fn = ce.find((Qi) => String(Qi.value) === On) || ce[0];
          Ji.textContent = Fn.label, wn.innerHTML = "", ce.forEach((Qi) => {
            const ta = document.createElement("button");
            ta.type = "button", ta.className = `pano-picker-item${String(Qi.value) === On ? " active" : ""}`, ta.textContent = Qi.label, ta.onclick = () => {
              di(Qi.value), wn.hidden = !0, Sr(), _r(), dt();
            }, wn.appendChild(ta);
          });
        };
        return wr.onclick = (On) => {
          On.stopPropagation(), Ut.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((Fn) => {
            Fn !== wn && (Fn.hidden = !0);
          }), wn.hidden = !wn.hidden;
        }, Sr(), Sr;
      }, Rn = (Kt, ce) => {
        Kt.setAttribute("data-selected", ce ? "1" : "0"), Kt.querySelectorAll(".pano-segment-btn").forEach((xn) => {
          xn.setAttribute("aria-pressed", xn.getAttribute("data-value") === (ce ? "1" : "0") ? "true" : "false");
        });
      };
      de.querySelectorAll(".pano-segment-btn").forEach((Kt) => {
        Kt.onclick = () => {
          const ce = Kt.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_x = ce, Rn(de, ce), _r(), dt();
        };
      }), Dn.querySelectorAll(".pano-segment-btn").forEach((Kt) => {
        Kt.onclick = () => {
          const ce = Kt.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_y = ce, Rn(Dn, ce), _r(), dt();
        };
      });
      const Rt = nr(
        er,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(d.ui_settings.preview_quality || "balanced"),
        (Kt) => {
          const ce = String(Kt || "balanced");
          d.ui_settings.preview_quality = ce === "draft" || ce === "high" ? ce : "balanced";
        }
      );
      Ln.onclick = () => {
        d.ui_settings.invert_view_x = !1, d.ui_settings.invert_view_y = !1, d.ui_settings.preview_quality = "balanced", Rn(de, !1), Rn(Dn, !1), Rt(), _r(), dt();
      }, Pt.appendChild(Ut), J.appendChild(Pt);
      const Yt = document.createElement("div");
      Yt.className = "pano-side-footer", Yt.innerHTML = '<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>', Yt.querySelector("[data-action='close-preview']").onclick = () => li(), J.appendChild(Yt), Yi(Pt);
      return;
    }
    const c = fe(), l = En(), h = El();
    l.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), c && h !== "stroke" && (p.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (h === "image" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (h === "image" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: yi(c)
    });
    const m = p.panelLastValues || (e === "stickers" || h === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), x = h === "stroke" ? null : c, b = x || m, _ = !!x, S = document.createElement("div");
    S.className = "pano-inspector", S.appendChild(ou({
      disabled: r,
      onChange: (Pt) => {
        var Ut, de;
        d.coverage = Pt, p.coverage = Pt, g && (g.value = String(Pt), (Ut = g.callback) == null || Ut.call(g, g.value)), pe(), (de = t.setDirtyCanvas) == null || de.call(t, !0, !0), zt(), $t(), dt();
      }
    }));
    const N = document.createElement("div");
    for (N.innerHTML = `
      <div class="pano-section-title">
        <span>Transform</span>
      </div>
    `; N.firstChild; ) S.appendChild(N.firstChild);
    if (J.appendChild(S), e === "stickers" || e === "cutout") {
      const Pt = document.createElement("div");
      Pt.className = "pano-field-wide pano-target-row";
      const Ut = "Selection";
      Pt.innerHTML = `
        <label>${Ut}</label>
        <div class="pano-picker">
          <button class="pano-picker-trigger" type="button">
            <span class="pano-picker-label"></span>
            <span class="pano-picker-caret">▾</span>
          </button>
          <div class="pano-picker-pop" hidden></div>
        </div>
      `;
      const de = Pt.querySelector(".pano-picker-trigger"), Dn = Pt.querySelector(".pano-picker-label"), er = Pt.querySelector(".pano-picker-pop"), Ln = [{ id: "", label: e === "stickers" ? "No image" : "Nothing selected", item: null }];
      e === "stickers" ? ke().forEach((Rt, Yt) => {
        var xn, di;
        const Kt = _e(Rt) ? String(Rt.id || Fr) : String(((di = (xn = d.assets) == null ? void 0 : xn[Rt.asset_id]) == null ? void 0 : di.name) || Rt.asset_id || Rt.id), ce = `${Yt + 1}. ${Kt}${_e(Rt) && ri(Rt) ? " (hidden)" : ""}`;
        Ln.push({ id: Rt.id, label: ce, item: Rt, kind: "image" });
      }) : lp().forEach((Rt) => {
        Ln.push({ id: Rt.item.id, label: Rt.label, item: Rt.item, kind: Rt.kind });
      });
      const nr = (x == null ? void 0 : x.id) || "", Rn = Ln.find((Rt) => Rt.id === nr) || Ln[0];
      Dn.innerHTML = Rn.item ? Tl(Rn) : No(String(Rn.label || "")), er.innerHTML = "", Ln.forEach((Rt) => {
        const Yt = document.createElement("button");
        Yt.type = "button", Yt.className = `pano-picker-item${Rt.id === nr ? " active" : ""}`, Yt.innerHTML = Rt.item ? Tl(Rt) : No(String(Rt.label || "")), Yt.onclick = () => {
          er.hidden = !0, zi(Rt.item || null);
          const Kt = Rt.item || null;
          if (Kt && !Se(Kt)) {
            const ce = Le(Number(Kt.yaw_deg || 0)), xn = B(Number(Kt.pitch_deg || 0), -89.9, 89.9);
            Ee(ce, xn, p.viewFov);
          }
          zt(), $t(), dt();
        }, er.appendChild(Yt);
      }), de.disabled = Ln.length <= 1, de.onclick = (Rt) => {
        Rt.stopPropagation(), !de.disabled && (er.hidden = !er.hidden);
      }, S.appendChild(Pt);
    }
    const k = document.createElement("div");
    k.className = "pano-state-actions", k.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${Et.copy}<span>Copy State</span></button>`;
    const L = k.querySelector("[data-action='copy-state-inline']");
    L.disabled = !_ || h === "stroke" || l.length > 1, L.onclick = async () => {
      if (!_ || h === "stroke" || l.length > 1) return;
      const Pt = JSON.stringify(e === "cutout" && h !== "image" ? Vl(b) : _p(c));
      try {
        await navigator.clipboard.writeText(Pt);
        const Ut = L.querySelector("span");
        Ut && (Ut.textContent = "Copied", window.setTimeout(() => {
          Ut.textContent = "Copy State";
        }, 900));
      } catch {
      }
    }, S.appendChild(k);
    const O = document.createElement("div");
    O.className = `pano-params${p.panelWasEnabled ? "" : " disabled"}`, S.appendChild(O), l.length > 1 ? (O.innerHTML = `
        <div class="pano-param-note">Selected objects: ${l.length}</div>
        <div class="pano-param-note">Multi-selection supports z-order and delete.</div>
      `, O.classList.toggle("disabled", !_), p.panelWasEnabled = _, za()) : (oi(O, b, "yaw_deg", "Yaw", -180, 180, 0.1, _ && !r), oi(O, b, "pitch_deg", "Pitch", -90, 90, 0.1, _ && !r), oi(O, b, "hFOV_deg", "H FOV", 1, 179, 0.1, _ && !r), oi(O, b, "vFOV_deg", "V FOV", 1, 179, 0.1, _ && !r), e === "stickers" || h === "image" ? oi(O, b, "rot_deg", "Rotation", -180, 180, 0.1, _ && !r) : oi(O, b, "roll_deg", "Roll", -180, 180, 0.1, _ && !r), _ !== p.panelWasEnabled ? requestAnimationFrame(() => {
      O.classList.toggle("disabled", !_);
    }) : O.classList.toggle("disabled", !_), p.panelWasEnabled = _, za());
    const z = document.createElement("div");
    z.className = "pano-visibility-section", z.innerHTML = `
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
    const U = Array.isArray((Ft = (Ot = d == null ? void 0 : d.painting) == null ? void 0 : Ot.paint) == null ? void 0 : Ft.strokes) ? d.painting.paint.strokes.length : 0, ut = Array.isArray((Qn = (se = d == null ? void 0 : d.painting) == null ? void 0 : se.mask) == null ? void 0 : Qn.strokes) ? d.painting.mask.strokes.length : 0, _t = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((Pt) => String((Pt == null ? void 0 : Pt.name) || "")) : [], mt = Zh(
      t,
      _t.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), pt = !!String((mt == null ? void 0 : mt.src) || "").trim() || Rl("pano_input_images").length > 0, ht = Array.isArray(ke()) && ke().length > 0 || U > 0, gt = ut > 0, bt = (Pt) => Pt === "panorama" ? pt : Pt === "objects" ? ht : gt, yt = (Pt, Ut) => {
      const de = Pt.closest("[data-visibility-row]"), Dn = bt(String(Pt.getAttribute("data-visibility") || ""));
      Pt.innerHTML = Ut ? Et.eye : Et.eye_dashed, Pt.setAttribute("aria-pressed", Ut ? "true" : "false"), Pt.setAttribute("data-tip", Ut ? "Hide" : "Show"), Pt.disabled = !Dn, Pt.classList.toggle("active", !!Ut), de == null || de.classList.toggle("is-hidden", !Ut), de == null || de.classList.toggle("is-disabled", !Dn);
    };
    if (z.querySelectorAll("[data-visibility]").forEach((Pt) => {
      const Ut = String(Pt.getAttribute("data-visibility") || ""), de = () => Ut === "panorama" ? !!p.showPanorama : Ut === "objects" ? !!p.showObjects : !!p.showMask;
      yt(Pt, de()), Pt.onclick = () => {
        bt(Ut) && (Ut === "panorama" ? p.showPanorama = !p.showPanorama : Ut === "objects" ? p.showObjects = !p.showObjects : p.showMask = !p.showMask, yt(Pt, de()), dt());
      };
    }), S.appendChild(Object.assign(document.createElement("div"), { className: "pano-divider" })), S.appendChild(z), !r) {
      const Pt = document.createElement("details");
      Pt.className = "pano-ui-settings", Pt.open = !1, Pt.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Et.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(tr = d.ui_settings) != null && tr.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Xi = d.ui_settings) != null && Xi.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(ro = d.ui_settings) != null && ro.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(ui = d.ui_settings) != null && ui.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(fi = d.ui_settings) != null && fi.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Zi = d.ui_settings) != null && Zi.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const Ut = Pt.querySelector("[data-setting='invert-x']"), de = Pt.querySelector("[data-setting='invert-y']"), Dn = Pt.querySelector("[data-ui-picker='quality']"), er = Pt.querySelector("[data-action='ui-reset-defaults']"), Ln = (Rt, Yt, Kt, ce) => {
        const xn = Rt.querySelector(".pano-picker-trigger"), di = Rt.querySelector(".pano-picker-label"), wr = Rt.querySelector(".pano-picker-pop"), Ji = () => {
          const wn = String(Kt()), Sr = Yt.find((On) => String(On.value) === wn) || Yt[0];
          di.textContent = Sr.label, wr.innerHTML = "", Yt.forEach((On) => {
            const Fn = document.createElement("button");
            Fn.type = "button", Fn.className = `pano-picker-item${String(On.value) === wn ? " active" : ""}`, Fn.textContent = On.label, Fn.onclick = () => {
              ce(On.value), wr.hidden = !0, Ji(), _r(), t.setDirtyCanvas(!0, !0), dt();
            }, wr.appendChild(Fn);
          });
        };
        return xn.onclick = (wn) => {
          wn.stopPropagation(), Pt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((Sr) => {
            Sr !== wr && (Sr.hidden = !0);
          }), wr.hidden = !wr.hidden;
        }, Ji(), Ji;
      }, nr = (Rt, Yt) => {
        Rt.setAttribute("data-selected", Yt ? "1" : "0"), Rt.querySelectorAll(".pano-segment-btn").forEach((Kt) => {
          Kt.setAttribute("aria-pressed", Kt.getAttribute("data-value") === (Yt ? "1" : "0") ? "true" : "false");
        });
      };
      Ut.querySelectorAll(".pano-segment-btn").forEach((Rt) => {
        Rt.onclick = () => {
          const Yt = Rt.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_x = Yt, nr(Ut, Yt), _r(), t.setDirtyCanvas(!0, !0), dt();
        };
      }), de.querySelectorAll(".pano-segment-btn").forEach((Rt) => {
        Rt.onclick = () => {
          const Yt = Rt.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_y = Yt, nr(de, Yt), _r(), t.setDirtyCanvas(!0, !0), dt();
        };
      });
      const Rn = Ln(
        Dn,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(d.ui_settings.preview_quality || "balanced"),
        (Rt) => {
          const Yt = String(Rt || "balanced");
          d.ui_settings.preview_quality = Yt === "draft" || Yt === "high" ? Yt : "balanced";
        }
      );
      er.onclick = () => {
        d.ui_settings.invert_view_x = !1, d.ui_settings.invert_view_y = !1, d.ui_settings.preview_quality = "balanced", nr(Ut, !1), nr(de, !1), Rn(), _r(), t.setDirtyCanvas(!0, !0), dt();
      }, S.appendChild(Pt);
    }
    const W = document.createElement("div");
    W.className = "pano-side-footer", W.innerHTML = `
      <button class="pano-btn" data-action="cancel-close">Cancel</button>
      <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
    `, W.querySelector("[data-action='cancel-close']").onclick = () => li(), W.querySelector("[data-action='save-close']").onclick = () => {
      pu(), li();
    }, J.appendChild(W), Yi(S);
  }
  function Xa(i) {
    if (!i) return !1;
    if (String(i.type || "").toLowerCase().startsWith("image/")) return !0;
    const c = String(i.name || "").toLowerCase();
    return c.endsWith(".png") || c.endsWith(".jpg") || c.endsWith(".jpeg") || c.endsWith(".webp") || c.endsWith(".gif") || c.endsWith(".bmp");
  }
  async function su(i) {
    if (r || e !== "stickers" && e !== "cutout" || !Xa(i)) return;
    const o = sa("asset"), c = URL.createObjectURL(i);
    try {
      const l = await new Promise((x, b) => {
        const _ = new Image();
        _.onload = () => x(_), _.onerror = () => b(new Error("image load failed")), _.src = c;
      });
      Lt.set(o, l);
      const h = sa("st");
      d.stickers.push({
        id: h,
        asset_id: o,
        yaw_deg: p.viewYaw,
        pitch_deg: p.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Tr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: Dl()
      }), zi(d.stickers[d.stickers.length - 1]), Bs(), ee(), zt(), $t(), dt();
      const m = (async () => {
        const x = await Is(i, String(i.name || o));
        (Array.isArray(d.stickers) ? d.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === o).length && (d.assets[o] = x, ai(), pe(), zt(), $t(), dt());
      })();
      ha.set(o, m);
      try {
        await m;
      } finally {
        ha.delete(o);
      }
    } catch {
      delete d.assets[o], Lt.delete(o);
      const l = Array.isArray(d.stickers) ? d.stickers : [], h = l.filter((m) => String((m == null ? void 0 : m.asset_id) || "") === o);
      h.length && (d.stickers = l.filter((m) => String((m == null ? void 0 : m.asset_id) || "") !== o), h.some((m) => {
        var x;
        return String((m == null ? void 0 : m.id) || "") === String(((x = p.selection) == null ? void 0 : x.id) || "");
      }) && zi(null), zt(), $t(), dt());
    } finally {
      URL.revokeObjectURL(c);
    }
  }
  function cu(i) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const c = (l = o.files) == null ? void 0 : l[0];
      !c || typeof i != "function" || i(c);
    }, o.click();
  }
  function Us() {
    r || e !== "stickers" && e !== "cutout" || cu((i) => {
      su(i);
    });
  }
  async function Mg(i) {
    var S;
    if (r || e !== "stickers" && e !== "cutout") return;
    const o = fe();
    if (!o || !Ce(o) || _e(o) || !Xa(i)) return;
    const c = String(o.id || ""), l = String(o.asset_id || ""), h = l ? nn(((S = d.assets) == null ? void 0 : S[l]) || null) : null, m = Number(o.vFOV_deg || 0), x = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, b = sa("asset"), _ = URL.createObjectURL(i);
    try {
      const N = await new Promise((L, O) => {
        const z = new Image();
        z.onload = () => L(z), z.onerror = () => O(new Error("image load failed")), z.src = _;
      });
      Lt.set(b, N), o.asset_id = b, o.vFOV_deg = Tr(
        Number(o.hFOV_deg || 30),
        Number(N.naturalWidth || N.width || 1),
        Number(N.naturalHeight || N.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, cn(), ee(), zt(), $t(), dt();
      const k = (async () => {
        const L = await Is(i, String(i.name || b));
        (Array.isArray(d.stickers) ? d.stickers : []).some((U) => String((U == null ? void 0 : U.id) || "") === c && String((U == null ? void 0 : U.asset_id) || "") === b) && (d.assets[b] = L, ai(), pe(), zt(), $t(), dt());
      })();
      ha.set(b, k);
      try {
        await k;
      } finally {
        ha.delete(b);
      }
    } catch {
      delete d.assets[b], Lt.delete(b);
      const N = (Array.isArray(d.stickers) ? d.stickers : []).find((k) => String((k == null ? void 0 : k.id) || "") === c) || null;
      N && String(N.asset_id || "") === b && (l && h && (d.assets[l] = h), N.asset_id = l, N.vFOV_deg = m, N.crop = x ? { ...x } : null), cn(), zt(), $t(), dt();
    } finally {
      URL.revokeObjectURL(_);
    }
  }
  function kg() {
    if (r) return;
    const i = fe();
    !i || !Ce(i) || _e(i) || cu((o) => {
      Mg(o);
    });
  }
  async function Pg() {
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
        const x = await fetch(m).then((k) => k.blob()), b = String(x.type || "image/png").split("/")[1] || "png", _ = String((h == null ? void 0 : h.name) || `${l}.${b}`), S = new File([x], _, { type: x.type || "image/png" }), N = await Is(S, _);
        d.assets[l] = {
          ...N,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (pe(), dt());
  }
  function lu() {
    r || e === "cutout" && (Bs(), d.shots = [{
      id: sa("sh"),
      yaw_deg: p.viewYaw,
      pitch_deg: p.viewPitch,
      hFOV_deg: 64,
      vFOV_deg: 40,
      roll_deg: 0,
      aspect_id: Bh(64, 40)
    }], zi(d.shots[0]), p.cutoutAspectOpen = !1, ee(), pe(), zt(), dt({ cause: "cutout_frame" }));
  }
  function Ag() {
    r || e === "cutout" && (d.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, d.active.selected_shot_id = null, ee(), pe(), zt(), dt());
  }
  function Cg() {
    const i = Array.isArray(d.stickers) ? d.stickers : [], o = [];
    for (const c of i)
      _e(c) && (c.visible = !1, o.push(c));
    return o;
  }
  function uu(i, o, c = "Clear") {
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
      const m = (_) => {
        h.remove(), l(!!_);
      };
      h.addEventListener("pointerdown", (_) => {
        _.target === h && m(!1);
      });
      const x = h.querySelector("[data-action='cancel']"), b = h.querySelector("[data-action='confirm']");
      x.onclick = () => m(!1), b.onclick = () => m(!0), A.appendChild(h), b.focus();
    });
  }
  async function fu() {
    var c, l;
    if (r || !await uu(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    d.painting = Sa(null), bn();
    const o = Cg();
    e === "stickers" ? (d.stickers = o, d.assets = {}, p.selectedId = ((c = o[0]) == null ? void 0 : c.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], d.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, ai()) : (d.stickers = o, d.assets = {}, d.shots = [], p.selectedId = null, p.selectedIds = [], d.active.selected_sticker_id = null, d.active.selected_shot_id = null, p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, ai()), ee(), pe(), zt(), $t(), dt();
  }
  async function Ig(i) {
    var m, x, b, _;
    if (r) return;
    const o = i === "mask" ? "mask" : "paint", c = o === "mask" ? "Mask" : "Paint", l = ci(o);
    if (!(!l.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((x = p.interaction) == null ? void 0 : x.layerKind) === o) || !await uu(
      `Clear ${c}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((b = p.interaction) == null ? void 0 : b.kind) === "draw" && ((_ = p.interaction) == null ? void 0 : _.layerKind) === o) {
        const S = vr();
        S && p.paintEngine.cancelActiveStroke(S), p.interaction = null;
      }
      l.length = 0, d.painting.raster_objects = dn().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== o), o === "paint" && (Pe().length = 0), bn(), ee(), pe(), zt(), $t(), ln(), dt();
    }
  }
  function Eg() {
    if (r) return;
    const i = fe();
    if (!i || !Ce(i) || _e(i)) return;
    const o = JSON.parse(JSON.stringify(i));
    o.id = sa("st"), o.yaw_deg = Le((o.yaw_deg || 0) + 8), o.z_index = Dl(), d.stickers.push(o), d.active.selected_sticker_id = o.id, p.selectedId = o.id, p.selectedIds = [o.id], cn(), ee(), pe(), $t(), zt(), dt();
  }
  function du() {
    var c, l, h, m, x, b, _;
    if (r) return;
    const i = En(), o = fe();
    if (!(!o && i.length === 0)) {
      if (i.length > 1) {
        const S = new Set(i.filter((L) => Se(L)).map((L) => String(L.actionGroupId || L.id || ""))), N = new Set(i.filter((L) => Ge(L)).map((L) => Be(L.rasterObjectId || L.id || ""))), k = new Set(i.filter(Ce).map((L) => String(L.id || "")));
        S.size > 0 && (d.painting.paint.strokes = (Array.isArray((l = (c = d.painting) == null ? void 0 : c.paint) == null ? void 0 : l.strokes) ? d.painting.paint.strokes : []).filter((L) => !S.has(String((L == null ? void 0 : L.actionGroupId) || ""))), d.painting.groups = Pe().filter((L) => !S.has(String((L == null ? void 0 : L.actionGroupId) || (L == null ? void 0 : L.id) || ""))), bn()), N.size > 0 && (d.painting.raster_objects = dn().filter((L) => !N.has(String((L == null ? void 0 : L.id) || ""))), Ki()), k.size > 0 && (d.stickers = (Array.isArray(d.stickers) ? d.stickers : []).filter((L) => k.has(String((L == null ? void 0 : L.id) || "")) ? _e(L) ? (ri(L) || (L.visible = !1), !0) : !1 : !0), ai(), cn()), p.selectedId = null, p.selectedIds = [], ee(), pe(), zt(), $t(), dt();
        return;
      }
      if (Se(o)) {
        const S = String(o.actionGroupId || o.id || "").trim();
        d.painting.paint.strokes = (Array.isArray((m = (h = d.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? d.painting.paint.strokes : []).filter((N) => String((N == null ? void 0 : N.actionGroupId) || "").trim() !== S), d.painting.groups = Pe().filter((N) => String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || "").trim() !== S), bn(), p.selectedId = null, p.selectedIds = [], ee(), pe(), zt(), $t(), dt();
        return;
      }
      if (Ge(o)) {
        const S = Be(o.rasterObjectId || o.id || "");
        d.painting.raster_objects = dn().filter((N) => String((N == null ? void 0 : N.id) || "").trim() !== S), Ki(), p.selectedId = null, p.selectedIds = [], ee(), pe(), zt(), $t(), dt();
        return;
      }
      if (e === "stickers" || Ce(o)) {
        if (_e(o)) {
          if (ri(o)) return;
          o.visible = !1, cn(), ee(), pe(), zt(), $t(), dt();
          return;
        }
        d.stickers = d.stickers.filter((S) => S.id !== o.id), ai(), cn(), p.selectedId = e === "cutout" ? d.active.selected_shot_id || ((x = d.stickers[0]) == null ? void 0 : x.id) || null : ((b = d.stickers[0]) == null ? void 0 : b.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], d.active.selected_sticker_id = ((_ = d.stickers[0]) == null ? void 0 : _.id) || null, ee(), pe(), zt(), $t(), dt();
        return;
      }
      Ag();
    }
  }
  function Tg(i, o) {
    if (!i) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const L = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(L)) {
        const [U, ut] = L.split(":").map((_t) => Number(_t));
        if (Number.isFinite(U) && Number.isFinite(ut)) return U >= ut;
      }
      const O = Number(i.hFOV_deg || 64), z = Number(i.vFOV_deg || 40);
      return Math.abs(O - z) > 1e-6 ? O >= z : Gc(i) >= 1;
    })();
    let [h, m] = c[String(o)] || c["1:1"];
    h >= m !== l && ([h, m] = [m, h]);
    const x = h / m, b = B(Number(i.hFOV_deg || 64), 1, 179), _ = B(Number(i.vFOV_deg || 40), 1, 179), S = Math.sqrt(Math.max(1, b * _)), N = B(S * Math.sqrt(x), 1, 179), k = B(S / Math.sqrt(x), 1, 179);
    i.hFOV_deg = N, i.vFOV_deg = k, i.aspect_id = String(o);
  }
  function Dg(i) {
    if (!i) return;
    const o = Math.max(1, Number(i.hFOV_deg || 90)), c = Math.max(1, Number(i.vFOV_deg || 60));
    i.hFOV_deg = c, i.vFOV_deg = o, i.aspect_id = jr(i);
  }
  function hu() {
    ti().forEach((o, c) => {
      o.type === "sticker" && o.item && (o.item.z_index = c), o.type === "strokeGroup" && o.item && (o.item.z_index = c), o.type === "rasterObject" && o.item && (o.item.z_index = c);
    });
  }
  function Lg() {
    if (r) return;
    const i = En();
    if (!fe() || i.length === 0) return;
    hu();
    const c = ti(), l = new Set(i.map((b) => Ce(b) ? `sticker:${String(b.id || "")}` : Ge(b) ? `rasterObject:${Be(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (c.forEach((b) => {
      var S, N;
      const _ = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((N = b.item) == null ? void 0 : N.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(_) ? h.push(b) : m.push(b);
    }), !h.length || h[h.length - 1] === c[c.length - 1]) return;
    [...m, ...h].forEach((b, _) => {
      b.type === "sticker" && b.item && (b.item.z_index = _), b.type === "strokeGroup" && b.item && (b.item.z_index = _), b.type === "rasterObject" && b.item && (b.item.z_index = _);
    }), cn(), ee(), pe(), $t(), dt();
  }
  function Rg() {
    if (r) return;
    const i = En();
    if (!fe() || i.length === 0) return;
    hu();
    const c = ti(), l = new Set(i.map((b) => Ce(b) ? `sticker:${String(b.id || "")}` : Ge(b) ? `rasterObject:${Be(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (c.forEach((b) => {
      var S, N;
      const _ = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((N = b.item) == null ? void 0 : N.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(_) ? h.push(b) : m.push(b);
    }), !h.length || h[0] === c[0]) return;
    [...h, ...m].forEach((b, _) => {
      b.type === "sticker" && b.item && (b.item.z_index = _), b.type === "strokeGroup" && b.item && (b.item.z_index = _), b.type === "rasterObject" && b.item && (b.item.z_index = _);
    }), cn(), ee(), pe(), $t(), dt();
  }
  function pu() {
    r || (d.projection_model = "pinhole_rectilinear", d.alpha_mode = "straight", f && (d.output_preset = Wc(f.value, Number(d.output_preset || 2048))), g && (d.coverage = Xe(g.value)), y && (d.bg_color = String(y.value || d.bg_color || "#00ff00")), Tn(), t.setDirtyCanvas(!0, !0));
  }
  function Tn() {
    var o;
    if (r) return;
    d.coverage = Xe(d.coverage);
    const i = JSON.stringify(d);
    v && (v.value = i, (o = v.callback) == null || o.call(v, i));
  }
  function _r() {
    d.ui_settings = wv(d.ui_settings), r || Tn();
  }
  function pe() {
    var i;
    r || (Tn(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0));
  }
  function Bs() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", ln(), zt());
  }
  function si(i) {
    const o = C.getBoundingClientRect();
    return {
      x: (i.clientX - o.left) / o.width * C.width,
      y: (i.clientY - o.top) / o.height * C.height
    };
  }
  function Za(i) {
    const o = C.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(o.left || 0),
      y: Number(i.clientY) - Number(o.top || 0)
    };
  }
  function gu() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function ne() {
    var c;
    if (e !== "cutout") return null;
    const i = Array.isArray(d.shots) ? d.shots : [], o = String(((c = d.active) == null ? void 0 : c.selected_shot_id) || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === o) || i[0] || null;
  }
  function We(i = ne()) {
    var L, O, z, U;
    if (!i) return null;
    const o = Math.max(1e-4, Number(((L = xh(i)) == null ? void 0 : L.aspect) || 1)), c = 56, l = Math.max(80, C.width - c * 2), h = Math.max(80, C.height - c * 2);
    let m = l, x = m / o;
    x > h && (x = h, m = x * o);
    const b = Math.max(0.1, Number(((O = p.frameView) == null ? void 0 : O.zoom) || 1)), _ = m * b, S = x * b, N = Number(((z = p.frameView) == null ? void 0 : z.panX) || 0), k = Number(((U = p.frameView) == null ? void 0 : U.panY) || 0);
    return {
      x: (C.width - _) * 0.5 + N,
      y: (C.height - S) * 0.5 + k,
      w: _,
      h: S
    };
  }
  function Gs() {
    return e === "cutout" && p.mode === "frame" && !!ne();
  }
  function vn(i, o = performance.now()) {
    if (p.mode === "unwrap") {
      const m = gr(), x = (i.x - m.x) / Math.max(1, m.w), b = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (x % 1 + 1) % 1,
        v: B(b, 0, 1),
        t: Number(o || 0)
      };
    }
    const c = As(i.x, i.y), { lon: l, lat: h } = Ls(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: B(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function _n(i, o, c = performance.now()) {
    const l = We(o);
    if (!l) return null;
    const h = {
      x: (Number(i.x) - l.x) / Math.max(1, l.w),
      y: (Number(i.y) - l.y) / Math.max(1, l.h)
    }, m = Hs(o, h);
    if (!m) return null;
    const { lon: x, lat: b } = Ls(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (x / (2 * Math.PI) + 0.5 + 1) % 1,
      v: B(0.5 - b / Math.PI, 0, 1),
      t: Number(c || 0)
    };
  }
  function Og(i, o) {
    var S;
    const c = ne(), l = We(c);
    if (!c || !l) return !1;
    const h = Math.max(0.1, Number(((S = p.frameView) == null ? void 0 : S.zoom) || 1)), m = B(h * Number(o), 0.25, 12);
    if (Math.abs(m - h) < 1e-6) return !1;
    const x = (Number(i.x) - l.x) / Math.max(1e-6, l.w), b = (Number(i.y) - l.y) / Math.max(1e-6, l.h);
    p.frameView.zoom = m;
    const _ = We(c);
    return _ ? (p.frameView.panX += Number(i.x) - (_.x + _.w * x), p.frameView.panY += Number(i.y) - (_.y + _.h * b), !0) : !1;
  }
  function Fg(i, o) {
    const c = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function xr(i) {
    const o = String(i || "").trim();
    return o === "eraser" ? ir : en[o] ? o : p.activeBrushPresetId || ir;
  }
  function mu() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (gu() || Gs());
  }
  function yu() {
    var i;
    return mu() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Ja(i, o = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), l = Number((i == null ? void 0 : i.y) || 0), h = o !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, x = m.inside !== h || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - l) > 0.01;
    return p.pointerPos = { x: c, y: l, inside: h }, x;
  }
  function Vg() {
    var N, k;
    if (!yu()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? p.maskTool : p.paintTool, c = xr(o), l = en[c] || en[ir], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), x = Math.max(3, m * 0.5), b = i === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : un(p.paintColor), _ = i === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : B(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), S = i === "mask" ? 0.95 : o === "eraser" ? 0.75 : B(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: o,
      preset: l,
      radius: x,
      fillStyle: Nn(b, _),
      strokeStyle: Nn(b, S),
      x: Number(((N = p.pointerPos) == null ? void 0 : N.x) || 0),
      y: Number(((k = p.pointerPos) == null ? void 0 : k.y) || 0),
      hotspotX: x,
      hotspotY: x
    };
  }
  function Hg() {
    var L, O, z;
    const i = Vg();
    if (!V) return;
    if (!i) {
      V.style.display = "none";
      return;
    }
    let o = i.radius * 2, c = i.radius * 2, l = "999px", h = 0, m = i.fillStyle, x = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const _ = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let N = Number(i.hotspotX ?? o * 0.5), k = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      o = as, c = as, l = "0", x = "0", b = "none", N = lv, k = uv, m = gv(i.fillStyle, S, _);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const U = Math.max(1, Number(((L = i.preset) == null ? void 0 : L.aspect) ?? 1));
      o = Math.max(10, i.radius * 2 * U), c = Math.max(6, i.radius * 2), l = `${Math.min(6, c * 0.42)}px`, h = Number(((z = (O = i.preset) == null ? void 0 : O.angle) == null ? void 0 : z.value) || 0) * zr;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    V.style.display = "block", V.style.width = `${Math.round(o)}px`, V.style.height = `${Math.round(c)}px`, V.style.borderRadius = l, V.style.border = x, V.style.boxShadow = b, V.style.background = m, V.style.backgroundRepeat = "no-repeat", V.style.backgroundPosition = "center", V.style.backgroundSize = "contain", V.style.transform = `translate(${Math.round(i.x - N)}px, ${Math.round(i.y - k)}px) rotate(${h}deg)`;
  }
  function $g() {
    var mt;
    if (!R || !K) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? p.maskTool : p.paintTool;
    if (o === "lasso_fill") return;
    const c = xr(o), l = en[c] || en[ir], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), x = Math.max(6, m * 0.5), b = o === "eraser", _ = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : un(p.paintColor), S = i === "mask" ? Nn(_, 0.22) : b ? "rgba(255,255,255,0.14)" : Nn(_, B(Math.max(0.18, Number(_.a ?? 1) * 0.34), 0.18, 0.56)), N = i === "mask" ? Nn(_, 0.96) : b ? "rgba(255,255,255,0.72)" : Nn(_, B(Math.max(0.56, Number(_.a ?? 1) * 0.96), 0.56, 1));
    let k = x * 2, L = x * 2, O = "999px", z = 0, U = S;
    const ut = "rgba(222, 222, 222, 0.72)", _t = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      U = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const pt = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      k = Math.max(16, x * 2 * pt), L = Math.max(10, x * 2), O = `${Math.min(8, L * 0.42)}px`, z = Number(((mt = l == null ? void 0 : l.angle) == null ? void 0 : mt.value) || 0) * zr;
    } else o === "brush" ? U = `radial-gradient(circle at 50% 50%, ${N} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (k = Math.max(18, x * 1.8), L = k, U = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${N} 43%, ${N} 58%, rgba(0,0,0,0) 59%)`) : b && (U = "rgba(255,255,255,0.12)");
    K.style.width = `${Math.round(k)}px`, K.style.height = `${Math.round(L)}px`, K.style.borderRadius = O, K.style.background = U, K.style.border = `1px solid ${ut}`, K.style.boxShadow = `0 0 0 1px ${_t}`, K.style.transform = `rotate(${z}deg)`, G && (clearTimeout(G), G = 0), R.classList.remove("fade-out"), R.classList.add("show");
  }
  function Qa() {
    !R || !R.classList.contains("show") || (R.classList.add("fade-out"), G && clearTimeout(G), G = window.setTimeout(() => {
      R.classList.remove("show", "fade-out"), G = 0;
    }, 180));
  }
  function zg(i, o, c, l) {
    const h = xr(o), m = en[h] || en[ir], x = p.brushSizes[h] ?? 10, b = Math.max(1, x) * Math.max(0.1, m.sizeScale ?? 1), _ = Fg(l, b), S = c.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), N = {
      id: bi(i),
      actionGroupId: bi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: o,
      size: b,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: _.radiusModel,
      radiusValue: _.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: S.map((k) => ({ ...k })),
        points: S.map((k) => ({ ...k }))
      }
    };
    return Yf(N, m), Number(m.aspect ?? 1), Number(N.aspect ?? 1), String(N.stampKind || ""), Number(N.size || 0), String(N.radiusModel || ""), Number(N.radiusValue || 0), { ...N.targetSpace }, N;
  }
  function jg(i, o, c, l) {
    const h = c.map((_) => ({
      ..._,
      t: Number((_ == null ? void 0 : _.t) || 0),
      widthScale: Number.isFinite(Number(_ == null ? void 0 : _.widthScale)) ? Math.max(0, Number(_.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(_ == null ? void 0 : _.pressureLike)) ? Math.max(0, Number(_.pressureLike)) : 1
    })), m = xr(o), x = en[m] || en[ir], b = {
      id: bi(i),
      actionGroupId: bi("ag"),
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
        points: h.map((_) => ({ ..._ }))
      }
    };
    return Yf(b, x), Number(x.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function ci(i) {
    const o = d.painting || (d.painting = Sa(null)), c = o[i] || (o[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function Ug(i, o, c = performance.now()) {
    let l;
    if (p.mode === "frame") {
      const S = ne();
      if (!S) return !1;
      l = _n(o, S, c);
    } else
      l = vn(o, c);
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, x = h[h.length - 1];
    if (x) {
      const S = Math.abs(Number(l.u ?? l.x ?? 0) - Number(x.u ?? x.x ?? 0)), N = Math.abs(Number(l.v ?? l.y ?? 0) - Number(x.v ?? x.y ?? 0));
      if (S < 15e-4 && N < 15e-4) return !1;
    }
    const b = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...b }), m.push({ ...b });
    const _ = vr();
    if (_) {
      const S = p.paintEngine.ensureTarget(_);
      p.paintEngine.appendStrokePoint(S, Number(b.u ?? 0), Number(b.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Bg(i, o, c = performance.now()) {
    var x, b;
    let l;
    if (p.mode === "frame") {
      const _ = ne();
      if (!_) return !1;
      l = _n(o, _, c);
    } else
      l = vn(o, c);
    const h = (b = (x = i == null ? void 0 : i.stroke) == null ? void 0 : x.geometry) == null ? void 0 : b.points;
    if (!l || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const _ = Math.abs(Number(l.u ?? l.x ?? 0) - Number(m.u ?? m.x ?? 0)), S = Math.abs(Number(l.v ?? l.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (_ < 15e-4 && S < 15e-4) return !1;
    }
    return h.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Gg(i) {
    var pt, ht, gt, bt, yt;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || (i == null ? void 0 : i.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    qa();
    const c = vr(), l = $s(c.width, c.height);
    if (!fg(l, o, { w: c.width, h: c.height })) return !1;
    const h = ((ht = (pt = l.ctx) == null ? void 0 : pt.getImageData(0, 0, c.width, c.height)) == null ? void 0 : ht.data) || null;
    if (!h) return !1;
    const m = new Map(Pe().map((W) => [String((W == null ? void 0 : W.actionGroupId) || (W == null ? void 0 : W.id) || "").trim(), W ? { ...W } : null])), x = [], b = [], _ = [...dn().filter((W) => String((W == null ? void 0 : W.layerKind) || "paint") !== "paint")];
    let S = !1, N = ti().reduce((W, ft) => Math.max(W, Number((ft == null ? void 0 : ft.z_index) || 0)), -1) + 1;
    function k(W, ft, Ct, jt = 8) {
      let It = ft, Tt = Ct, Ht = -1, Ot = -1;
      for (let Ft = 0; Ft < Ct; Ft += 1)
        for (let se = 0; se < ft; se += 1)
          W[(Ft * ft + se) * 4 + 3] <= jt || (se < It && (It = se), Ft < Tt && (Tt = Ft), se > Ht && (Ht = se), Ft > Ot && (Ot = Ft));
      return Ht < It || Ot < Tt ? null : { minX: It, minY: Tt, maxX: Ht, maxY: Ot };
    }
    const L = k(h, c.width, c.height, 8);
    if (!L) return !1;
    function O(W, ft) {
      return !W || !ft ? !1 : !(W.maxX < ft.minX || ft.maxX < W.minX || W.maxY < ft.minY || ft.maxY < W.minY);
    }
    function z(W, ft) {
      const Ct = Qr((W == null ? void 0 : W.actionGroupId) || (W == null ? void 0 : W.id) || "", "paint", ft);
      if (!Ct) return null;
      const jt = Ct.centerUv.u - Ct.halfW, It = Ct.centerUv.u + Ct.halfW, Tt = Ct.centerUv.v - Ct.halfH, Ht = Ct.centerUv.v + Ct.halfH, Ot = c.width, Ft = c.height;
      return {
        minX: Math.floor((jt % 1 + 1) % 1 * Ot),
        maxX: Math.ceil((It % 1 + 1) % 1 * Ot),
        minY: Math.floor(B(Tt, 0, 1) * Ft),
        maxY: Math.ceil(B(Ht, 0, 1) * Ft),
        wraps: It - jt >= 1 || jt < 0 || It > 1
      };
    }
    function U(W) {
      const ft = (W == null ? void 0 : W.bbox) || null;
      if (!ft) return null;
      const Ct = (W == null ? void 0 : W.transform) || {}, jt = c.width, It = c.height, Tt = Number(ft.u0 || 0) + Number(Ct.du || 0), Ht = Number(ft.u1 || 0) + Number(Ct.du || 0), Ot = Number(ft.v0 || 0) + Number(Ct.dv || 0), Ft = Number(ft.v1 || 0) + Number(Ct.dv || 0);
      return {
        minX: Math.floor((Tt % 1 + 1) % 1 * jt),
        maxX: Math.ceil((Ht % 1 + 1) % 1 * jt),
        minY: Math.floor(B(Ot, 0, 1) * It),
        maxY: Math.ceil(B(Ft, 0, 1) * It),
        wraps: Ht - Tt >= 1 || Tt < 0 || Ht > 1
      };
    }
    function ut(W) {
      return W ? W.wraps ? O(L, { minX: 0, maxX: W.maxX, minY: W.minY, maxY: W.maxY }) || O(L, { minX: W.minX, maxX: c.width - 1, minY: W.minY, maxY: W.maxY }) : O(L, W) : !0;
    }
    function _t(W) {
      if (!W) return { touched: !1, canvas: null };
      const ft = $s(c.width, c.height);
      ft.ctx.drawImage(W, 0, 0);
      const Ct = ft.ctx.getImageData(0, 0, c.width, c.height);
      ft.ctx.save(), ft.ctx.globalCompositeOperation = "destination-out", ft.ctx.drawImage(l.canvas, 0, 0), ft.ctx.restore();
      const jt = ft.ctx.getImageData(0, 0, c.width, c.height);
      for (let It = 0; It < c.width * c.height; It += 1) {
        if (h[It * 4 + 3] <= 8) continue;
        const Ht = Ct.data[It * 4 + 3], Ot = jt.data[It * 4 + 3];
        if (Ht > Ot)
          return { touched: !0, canvas: ft.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function mt(W, ft, Ct) {
      const jt = Number(Ct == null ? void 0 : Ct.z_index), It = hg(W, ft, Ct).map((Tt, Ht) => ({
        ...Tt,
        z_index: Number.isFinite(jt) ? jt + Ht * 1e-3 : N + Ht * 1e-3
      }));
      return It.length && (N = Math.max(N, ...It.map((Tt) => Number((Tt == null ? void 0 : Tt.z_index) || 0))) + 1), It;
    }
    for (const W of Pe()) {
      const ft = String((W == null ? void 0 : W.actionGroupId) || (W == null ? void 0 : W.id) || "").trim();
      if (!ft) continue;
      const Ct = In(ft, "paint");
      if (!ut(z(W, Ct))) {
        b.push(W), x.push(...Ct);
        continue;
      }
      const jt = ((bt = (gt = p.paintEngine) == null ? void 0 : gt.getGroupTarget) == null ? void 0 : bt.call(gt, ft)) || null, It = ((yt = jt == null ? void 0 : jt.committedPaint) == null ? void 0 : yt.canvas) || null;
      if (!It) {
        b.push(W), x.push(...Ct);
        continue;
      }
      const Tt = _t(It);
      if (!Tt.touched || !Tt.canvas) {
        b.push(W), x.push(...Ct);
        continue;
      }
      S = !0;
      const Ht = mt(Tt.canvas, "paint", m.get(ft) || W || {});
      _.push(...Ht);
    }
    for (const W of dn().filter((ft) => String((ft == null ? void 0 : ft.layerKind) || "paint") === "paint")) {
      if (!ut(U(W))) {
        _.push(W);
        continue;
      }
      const ft = Cp(W, null);
      if (!ft) {
        _.push(W);
        continue;
      }
      const Ct = _t(ft);
      if (!Ct.touched || !Ct.canvas) {
        _.push(W);
        continue;
      }
      S = !0;
      const jt = mt(Ct.canvas, "paint", W);
      _.push(...jt);
    }
    return S ? (d.painting.paint.strokes = x, d.painting.groups = b.sort((W, ft) => Number((W == null ? void 0 : W.z_index) || 0) - Number((ft == null ? void 0 : ft.z_index) || 0)), d.painting.raster_objects = _.sort((W, ft) => Number((W == null ? void 0 : W.z_index) || 0) - Number((ft == null ? void 0 : ft.z_index) || 0)), ii({ preservePanelValues: !1 }), !0) : !1;
  }
  function Kg(i) {
    var m, x, b, _;
    const o = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const c = String(((x = i == null ? void 0 : i.stroke) == null ? void 0 : x.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = eu(o.rawPoints || o.points || [], i.stroke.targetSpace, !0)), Gg(i);
    const l = i.layerKind === "paint" && c !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && Sl((b = i.stroke) == null ? void 0 : b.actionGroupId), ci(i.layerKind).push(i.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = eu(h, i.stroke.targetSpace, !0), l && Sl((_ = i.stroke) == null ? void 0 : _.actionGroupId), ci(i.layerKind).push(i.stroke), !0);
  }
  function bu(i) {
    var c;
    if (e === "cutout" && p.mode === "frame") {
      const l = ne(), h = We(l);
      if (!l || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const x = _n(i, l, performance.now()), b = x ? Bi(x) : null;
      if (b)
        for (const S of Fs()) {
          if (!Ce(S)) continue;
          const N = Wi(S, b);
          if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
            const k = Ie(S);
            if (k != null && k.visible) return { item: S, geom: k };
          }
        }
      const _ = Nl(!1).slice().sort((S, N) => Number((N == null ? void 0 : N.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0));
      for (const S of _) {
        if (S.type === "strokeGroup") {
          const L = ni(Fi("paint", S.actionGroupId || S.id || ""));
          if (!L) continue;
          const O = Ie(L);
          if (!(O != null && O.visible)) continue;
          const z = Array.isArray(O.strokePaths) ? O.strokePaths : [];
          for (const U of z) {
            const ut = Array.isArray(U == null ? void 0 : U.points) ? U.points : [];
            if (!ut.length) continue;
            if (U.closed && ut.length >= 3 && ar(i, ut)) return { item: L, geom: O };
            const _t = Math.max(8, Number((U == null ? void 0 : U.lineWidth) || 0) * 0.5 + 6);
            for (let mt = 0; mt < ut.length - 1; mt += 1)
              if (xc(i, ut[mt], ut[mt + 1]) <= _t * _t) return { item: L, geom: O };
            if (ut.length === 1 && $r(i, ut[0]) <= _t * _t) return { item: L, geom: O };
          }
          continue;
        }
        if (S.type === "rasterObject") {
          const L = ei(Vi(((c = S.item) == null ? void 0 : c.id) || S.id || ""));
          if (!L) continue;
          const O = Ie(L);
          if (zl(L, O, i, x)) return { item: L, geom: O };
          continue;
        }
        const N = S.item;
        if (!N || !Ce(N) || !b) continue;
        const k = Wi(N, b);
        if (k && Number(k.x) >= 0 && Number(k.x) <= 1 && Number(k.y) >= 0 && Number(k.y) <= 1) {
          const L = Ie(N);
          if (L != null && L.visible) return { item: N, geom: L };
        }
      }
      return null;
    }
    const o = [
      ...Nl(!1).slice().sort((l, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var h;
        return l.type === "strokeGroup" ? ni(Fi("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? ei(Vi(((h = l.item) == null ? void 0 : h.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...e === "cutout" ? Fs().filter((l) => yn(l)) : []
    ];
    for (const l of o) {
      if (Se(l)) {
        const m = Ie(l);
        if (!(m != null && m.visible)) continue;
        const x = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const b of x) {
          const _ = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!_.length) continue;
          if (b.closed && _.length >= 3 && ar(i, _)) return { item: l, geom: m };
          const S = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let N = 0; N < _.length - 1; N += 1)
            if (xc(i, _[N], _[N + 1]) <= S * S) return { item: l, geom: m };
          if (_.length === 1 && $r(i, _[0]) <= S * S) return { item: l, geom: m };
        }
        continue;
      }
      if (Ge(l)) {
        const m = Ie(l);
        if (!(m != null && m.visible)) continue;
        if (zl(l, m, i)) return { item: l, geom: m };
        continue;
      }
      const h = Ie(l);
      if (h.visible && ar(i, h.corners))
        return { item: l, geom: h };
    }
    return null;
  }
  function Ks(i, o) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (i.kind === "strokeGroup") {
      const l = i.corners.findIndex((m) => $r(m, o) <= 121);
      if (l >= 0) {
        const m = i.corners[l], x = m.x - i.center.x, b = m.y - i.center.y, _ = x * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: _ };
      }
      const h = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const m of h) {
        const x = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && x.length >= 3 && ar(o, x)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let _ = 0; _ < x.length - 1; _ += 1)
          if (xc(o, x[_], x[_ + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return ar(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject")
      return ar(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (e === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const l = i.edgeMidpoints.find((h) => $r(h, o) <= 169);
      if (l) {
        const h = l.edge === "left" || l.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const c = i.corners.findIndex((l) => $r(l, o) <= 121);
    if (c >= 0) {
      const l = i.corners[c], h = l.x - i.center.x, m = l.y - i.center.y, x = h * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: x };
    }
    return $r(i.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : ar(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function vu(i, o) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function Wg(i, o) {
    return !!i && !!o && Number(o.x) >= Number(i.x0) && Number(o.x) <= Number(i.x1) && Number(o.y) >= Number(i.y0) && Number(o.y) <= Number(i.y1);
  }
  function qg(i, o) {
    if (!i || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((h) => Wg(i, h))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, l = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!ar({ x: c, y: l }, o.corners);
  }
  function ge(i) {
    if (Hg(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? C.style.cursor = "none" : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" ? C.style.cursor = "grabbing" : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? C.style.cursor = "move" : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" ? C.style.cursor = p.interaction.cursor || "nwse-resize" : p.interaction.kind === "rotate" ? C.style.cursor = "grabbing" : C.style.cursor = "default";
      return;
    }
    if (yu()) {
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
    const o = fe(), c = o ? Ie(o) : null, l = o ? pr(o) : !1, h = l ? { kind: "none", cursor: "default" } : Ks(c, i);
    if (!l && h.kind !== "none") {
      C.style.cursor = h.cursor;
      return;
    }
    if (p.primaryTool === "cursor" && bu(i)) {
      C.style.cursor = "default";
      return;
    }
    C.style.cursor = p.mode === "pano" ? "grab" : "default";
  }
  function $t() {
    if (!Q) return;
    const i = fe(), o = En();
    if (!i && o.length === 0 || p.interaction) {
      Q.style.display = "none";
      return;
    }
    if (o.length > 1) {
      const yt = "multi", W = Ms(o);
      if (p.menuMode !== yt)
        Q.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Et.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Et.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${W ? "Unlock" : "Lock"}" data-tip="${W ? "Unlock" : "Lock"}">${W ? Et.lock_open : Et.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Et.delete}</button>
        `, p.menuMode = yt, p.menuSize.measured = !1, Yi(Q);
      else {
        const Pt = Q.querySelector("[data-action='toggle-lock']");
        Pt && (Pt.innerHTML = W ? Et.lock_open : Et.lock_closed, Pt.setAttribute("aria-label", W ? "Unlock" : "Lock"), Pt.setAttribute("data-tip", W ? "Unlock" : "Lock"));
      }
      const ft = Ns(o);
      if (!(ft != null && ft.visible)) {
        Q.style.display = "none";
        return;
      }
      const Ct = ft.corners.map((Pt) => Pt.x), jt = ft.corners.map((Pt) => Pt.y), It = Math.min(...Ct), Tt = Math.max(...Ct), Ht = Math.max(...jt), Ot = Q.style.display, Ft = Q.style.visibility;
      Q.style.display = "flex", Q.style.visibility = "hidden";
      const se = Q.getBoundingClientRect(), Qn = Math.round(Number((se == null ? void 0 : se.width) || 0)) || Q.offsetWidth || p.menuSize.w || 220, tr = Math.round(Number((se == null ? void 0 : se.height) || 0)) || Q.offsetHeight || p.menuSize.h || 40;
      p.menuSize.w = Number.isFinite(Qn) && Qn > 0 ? Qn : 220, p.menuSize.h = Number.isFinite(tr) && tr > 0 ? tr : 40, Q.style.display = Ot, Q.style.visibility = Ft, p.menuSize.measured = !0;
      const Xi = p.menuSize.w, ro = p.menuSize.h, ui = 14;
      Q.style.display = "flex";
      let fi = (It + Tt) * 0.5 - Xi * 0.5, Zi = Ht + 18;
      if (fi = B(fi, ui, C.width - Xi - ui), Zi + ro > C.height - ui) {
        Q.style.display = "none";
        return;
      }
      Q.style.left = `${fi}px`, Q.style.top = `${Zi}px`;
      return;
    }
    const c = El(), l = pr(i), h = c === "stroke" ? "stroke:paint" : e === "stickers" || c === "image" ? `stickers:${_e(i) ? "external" : "normal"}` : `cutout:${p.cutoutAspectOpen ? "open" : "closed"}`;
    if (p.menuMode !== h) {
      if (c === "stroke")
        Q.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Et.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Et.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Et.lock_open : Et.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Et.delete}</button>
        `;
      else if (e === "stickers" || c === "image")
        Q.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Et.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Et.send_back}</button>
          ${_e(i) ? "" : `<button class="pano-btn pano-btn-icon" data-action="duplicate" aria-label="Duplicate" data-tip="Duplicate">${Et.duplicate}</button><button class="pano-btn pano-btn-icon" data-action="replace-image" aria-label="Replace Image" data-tip="Replace image">${Et.replace_image}</button>`}
          ${_e(i) ? `<button class="pano-btn pano-btn-icon" data-action="back-initial" aria-label="Back to Initial" data-tip="Back to initial position">${Et.back_initial}</button>` : ""}
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Et.lock_open : Et.lock_closed}</button>
          ${_e(i) ? `<button class="pano-btn pano-btn-icon" data-action="toggle-visible" aria-label="Hide" data-tip="Hide input image">${Et.eye_dashed}</button>` : `<button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Et.delete}</button>`}
        `;
      else {
        const yt = yi(i);
        Q.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${Et.aspect}</button>
            <div class="pano-aspect-popover${p.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
              <button class="pano-btn pano-aspect-choice${yt === "1:1" ? " active" : ""}" data-action="aspect-set" data-aspect="1:1">1:1</button>
              <button class="pano-btn pano-aspect-choice${yt === "4:3" ? " active" : ""}" data-action="aspect-set" data-aspect="4:3">4:3</button>
              <button class="pano-btn pano-aspect-choice${yt === "3:2" ? " active" : ""}" data-action="aspect-set" data-aspect="3:2">3:2</button>
              <button class="pano-btn pano-aspect-choice${yt === "16:9" ? " active" : ""}" data-action="aspect-set" data-aspect="16:9">16:9</button>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon" data-action="rotate-90" aria-label="Rotate 90°" data-tip="Rotate 90°">${Et.rotate_90}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Et.lock_open : Et.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Et.delete}</button>
        `;
      }
      p.menuMode = h, p.menuSize.measured = !1, Yi(Q);
    }
    if ((e === "stickers" || c === "image") && _e(i)) {
      const yt = Q.querySelector("[data-action='back-initial']");
      if (yt) {
        const ft = mp();
        yt.disabled = !ft, yt.setAttribute("aria-disabled", ft ? "false" : "true"), yt.setAttribute("data-tip", ft ? "Back to initial position" : "Already at initial position");
      }
      const W = Q.querySelector("[data-action='toggle-visible']");
      if (W) {
        const ft = ri(i);
        W.innerHTML = ft ? Et.eye : Et.eye_dashed, W.setAttribute("aria-label", ft ? "Show" : "Hide"), W.setAttribute("data-tip", ft ? "Show input image" : "Hide input image");
      }
    }
    const m = Q.querySelector("[data-action='toggle-lock']");
    m && (m.innerHTML = l ? Et.lock_open : Et.lock_closed, m.setAttribute("aria-label", l ? "Unlock" : "Lock"), m.setAttribute("data-tip", l ? "Unlock" : "Lock"));
    const x = Ie(i);
    if (!(x != null && x.visible)) {
      Q.style.display = "none";
      return;
    }
    const b = x.corners, _ = b.map((yt) => yt.x), S = b.map((yt) => yt.y), N = Math.min(..._), k = Math.max(..._), L = Math.max(...S), O = Q.style.display, z = Q.style.visibility;
    Q.style.display = "flex", Q.style.visibility = "hidden";
    const U = Q.getBoundingClientRect(), ut = Math.round(Number((U == null ? void 0 : U.width) || 0)) || Q.offsetWidth || p.menuSize.w || 220, _t = Math.round(Number((U == null ? void 0 : U.height) || 0)) || Q.offsetHeight || p.menuSize.h || 40;
    p.menuSize.w = Number.isFinite(ut) && ut > 0 ? ut : 220, p.menuSize.h = Number.isFinite(_t) && _t > 0 ? _t : 40, Q.style.display = O, Q.style.visibility = z, p.menuSize.measured = !0;
    const mt = p.menuSize.w, pt = p.menuSize.h, ht = 14;
    Q.style.display = "flex";
    let gt = (N + k) * 0.5 - mt * 0.5, bt = L + 18;
    if (!Number.isFinite(gt) || !Number.isFinite(bt)) {
      Q.style.display = "none";
      return;
    }
    if (gt = B(gt, ht, C.width - mt - ht), bt + pt > C.height - ht) {
      Q.style.display = "none";
      return;
    }
    Q.style.left = `${gt}px`, Q.style.top = `${bt}px`;
  }
  function to() {
    it && (be.timer && (clearTimeout(be.timer), be.timer = 0), be.target = null, it.classList.remove("show", "pano-tooltip-footer", "pano-tooltip-tool-rail"));
  }
  function Yg(i) {
    if (!it || !i || !i.isConnected) return;
    const o = String(i.getAttribute("data-tip") || "").trim();
    if (!o) return;
    it.textContent = o;
    const c = A.getBoundingClientRect(), l = i.getBoundingClientRect(), h = 8, m = it.offsetWidth || 100, x = it.offsetHeight || 24, b = !!i.closest(".pano-floating-left"), _ = !!i.closest(".pano-paint-footer") || !!i.closest(".pano-paint-color-float");
    it.classList.remove("pano-tooltip-footer", "pano-tooltip-tool-rail");
    let S = l.left - c.left + l.width * 0.5 - m * 0.5, N = l.top - c.top - x - 8;
    if (b)
      it.classList.add("pano-tooltip-tool-rail"), S = l.right - c.left + 10, N = l.top - c.top + l.height * 0.5 - x * 0.5, S = B(S, h, Math.max(h, c.width - m - h)), N = B(N, h, Math.max(h, c.height - x - h));
    else if (_) {
      it.classList.add("pano-tooltip-footer");
      const k = i.closest(".pano-paint-footer"), L = k ? k.getBoundingClientRect() : l;
      S = L.left - c.left + L.width * 0.5 - m * 0.5, N = L.bottom - c.top + 5, S = B(S, h, Math.max(h, c.width - m - h)), N = Math.max(h, N);
    }
    S = B(S, h, Math.max(h, c.width - m - h)), N = Math.max(h, N), it.style.left = `${S}px`, it.style.top = `${N}px`, it.classList.add("show");
  }
  function Yi(i) {
    i.querySelectorAll("[data-tip]").forEach((o) => {
      o.__panoTipBound || (o.__panoTipBound = !0, o.addEventListener("pointerenter", () => {
        be.target = o, be.timer && clearTimeout(be.timer), be.timer = window.setTimeout(() => {
          be.target === o && Yg(o);
        }, 220);
      }), o.addEventListener("pointerleave", () => {
        be.target === o && (be.target = null), to();
      }), o.addEventListener("pointerdown", to));
    });
  }
  const Te = _s({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (i) => {
      p.viewYaw = Le(Number(i.yaw || 0)), p.viewPitch = B(Number(i.pitch || 0), -89.9, 89.9), p.viewFov = B(Number(i.fov || p.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = C.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || C.clientWidth || 0)),
        h: Math.max(1, Number(i.height || C.clientHeight || 0))
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
      kt.backgroundDirty = !0, kt.dirty = !0;
    }
  });
  C.onpointerdown = (i) => {
    const o = si(i);
    if (Ja(o, !0), p.viewTween = null, Te.state.inertia.active = !1, Te.state.inertia.vx = 0, Te.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), p.mode !== "frame") {
        const b = p.mode === "unwrap" ? o : Za(i);
        p.interaction = { kind: "view", last: b, lastTs: performance.now() }, Te.startDrag(b.x, b.y, i.pointerId, performance.now());
      }
      ge(o), C.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (r) {
      if (p.mode === "pano") {
        const b = Za(i);
        p.interaction = { kind: "view", last: b, lastTs: performance.now() }, Te.startDrag(b.x, b.y, i.pointerId, performance.now()), ge(o), C.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (Mt && !Mt.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (gu() || Gs())) {
      const b = p.primaryTool === "mask" ? "mask" : "paint", _ = p.primaryTool === "mask" ? p.maskTool : p.paintTool, S = Gs() ? ne() : null, N = { kind: "ERP_GLOBAL" }, k = S ? _n(o, S, performance.now()) : vn(o, performance.now());
      p.interaction = {
        kind: _ === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: bi("live"),
        stroke: _ === "lasso_fill" ? jg(b, _, [k], N) : zg(b, _, [k], N)
      }, Ui();
      const L = vr();
      if (L)
        if (p.paintEngine.beginStroke(p.interaction.stroke, L), p.interaction.kind === "paint_stroke") {
          const O = p.paintEngine.ensureTarget(L), z = Number((k == null ? void 0 : k.u) ?? (k == null ? void 0 : k.x) ?? 0), U = Number((k == null ? void 0 : k.v) ?? (k == null ? void 0 : k.y) ?? 0);
          p.paintEngine.appendStrokePoint(O, z, U, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, L);
      ge(o), C.setPointerCapture(i.pointerId), dt();
      return;
    }
    const c = En(), l = fe(), h = c.length > 1 ? Ns(c) : l ? Ie(l) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: o, current: o }, ge(o), C.setPointerCapture(i.pointerId), dt({ localOnly: !0 });
      return;
    }
    if (c.length > 1 && (h != null && h.visible)) {
      if ((c.some((_) => pr(_)) ? { kind: "none" } : Ks(h, o)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: c.map((_) => _),
          offset: { x: o.x - h.center.x, y: o.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: c.filter((_) => Ce(_)).map((_) => ({
            id: String(_.id || ""),
            yaw_deg: Number(_.yaw_deg || 0),
            pitch_deg: Number(_.pitch_deg || 0),
            center: (() => {
              var N, k;
              const S = Ie(_);
              return S != null && S.visible ? { x: Number(((N = S.center) == null ? void 0 : N.x) || 0), y: Number(((k = S.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: c.filter((_) => Se(_)).map((_) => ({
            id: String(_.actionGroupId || _.id || ""),
            layerKind: String(_.layerKind || "paint"),
            snapshot: nn(In(_.actionGroupId, _.layerKind)),
            frameSnapshot: nn(Qr(_.actionGroupId, _.layerKind)),
            center: (() => {
              var N, k;
              const S = Ie(_);
              return S != null && S.visible ? { x: Number(((N = S.center) == null ? void 0 : N.x) || 0), y: Number(((k = S.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Pl(_.actionGroupId, _.layerKind)
          })),
          rasterSnapshots: c.filter((_) => Ge(_)).map((_) => ({
            id: Be(_.rasterObjectId || _.id || ""),
            snapshot: nn(dn().find((S) => String((S == null ? void 0 : S.id) || "") === Be(_.rasterObjectId || _.id || ""))),
            center: (() => {
              var N, k;
              const S = Ie(_);
              return S != null && S.visible ? { x: Number(((N = S.center) == null ? void 0 : N.x) || 0), y: Number(((k = S.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Rp(_)
          }))
        }, ge(o), C.setPointerCapture(i.pointerId);
        return;
      }
    } else if (l && (h != null && h.visible)) {
      const b = pr(l) ? { kind: "none" } : Ks(h, o);
      if (b.kind === "scale") {
        p.interaction = Se(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: nn(In(l.actionGroupId, l.layerKind)),
          frameSnapshot: nn(Qr(l.actionGroupId, l.layerKind)),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor
        }, ge(o), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        p.interaction = {
          kind: b.kind,
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, ge(o), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        p.interaction = Se(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: nn(In(l.actionGroupId, l.layerKind)),
          frameSnapshot: nn(Qr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: h.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x)
        }, ge(o), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Se(l)) {
          const _ = p.mode === "frame" ? (() => {
            const S = ne();
            return S ? _n(o, S, performance.now()) : null;
          })() : vn(o, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: _,
            snapshot: nn(In(l.actionGroupId, l.layerKind)),
            frameSnapshot: nn(Qr(l.actionGroupId, l.layerKind))
          }, ge(o), C.setPointerCapture(i.pointerId);
          return;
        }
        if (Ge(l)) {
          const _ = p.mode === "frame" ? (() => {
            const S = ne();
            return S ? _n(o, S, performance.now()) : null;
          })() : vn(o, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: _,
            snapshot: nn(dn().find((S) => String((S == null ? void 0 : S.id) || "") === Be(l.rasterObjectId || l.id || "")))
          }, ge(o), C.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - h.center.x, y: o.y - h.center.y }
        }, ge(o), C.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = bu(o);
    if (m) {
      const b = p.selectedId !== m.item.id;
      if (b && p.selectedId && (ee(), Tn()), zi(m.item), e === "cutout" && b && (p.cutoutAspectOpen = !1), b && zt(), $t(), dt(), pr(m.item)) {
        ge(o);
        return;
      }
      p.interaction = {
        kind: Se(m.item) ? "move_stroke_group" : Ge(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: Se(m.item) || Ge(m.item) ? p.mode === "frame" ? (() => {
          const _ = ne();
          return _ ? _n(o, _, performance.now()) : null;
        })() : vn(o, performance.now()) : null,
        snapshot: Se(m.item) ? nn(In(m.item.actionGroupId, m.item.layerKind)) : Ge(m.item) ? nn(dn().find((_) => String((_ == null ? void 0 : _.id) || "") === Be(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Se(m.item) ? nn(Qr(m.item.actionGroupId, m.item.layerKind)) : null
      }, ge(o), C.setPointerCapture(i.pointerId);
      return;
    }
    const x = !!p.selectedId;
    if (x && (ee(), Tn()), ii(), x && zt(), $t(), dt(), p.mode === "pano") {
      const b = Za(i);
      p.interaction = { kind: "view", last: b, lastTs: performance.now() }, Te.startDrag(b.x, b.y, i.pointerId, performance.now()), ge(o), C.setPointerCapture(i.pointerId);
    }
  }, C.onpointermove = (i) => {
    var l, h, m, x, b, _, S, N, k, L, O, z, U, ut, _t, mt, pt, ht;
    const o = si(i);
    if (Ja(o, !0), !p.interaction) {
      ge(o);
      return;
    }
    ge(o);
    const c = p.interaction;
    if (c.kind === "paint_stroke") {
      const gt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let bt = !1;
      gt.forEach((yt) => {
        const W = si(yt);
        Ug(c, W, performance.now()) && (bt = !0);
      }), bt && dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "paint_lasso_fill") {
      const gt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let bt = !1;
      if (gt.forEach((yt) => {
        const W = si(yt);
        Bg(c, W, performance.now()) && (bt = !0);
      }), bt) {
        const yt = vr();
        yt && p.paintEngine.updateActiveStroke(c.stroke, yt), dt({ localOnly: !0 });
      }
      return;
    }
    if (c.kind === "view") {
      const gt = performance.now(), bt = p.mode === "unwrap" ? o : Za(i);
      Te.moveDrag(bt.x, bt.y, p.mode === "unwrap" ? "unwrap" : "pano", gt), c.lastTs = gt, c.last = bt, dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "pan_frame") {
      p.frameView.panX += o.x - c.last.x, p.frameView.panY += o.y - c.last.y, c.last = o, dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "move") {
      const gt = o.x - c.offset.x, bt = o.y - c.offset.y;
      if (p.mode === "frame" && e === "cutout") {
        const yt = ne(), W = We(yt);
        if (!yt || !W) return;
        const ft = {
          x: B((gt - W.x) / Math.max(1, W.w), 0, 1),
          y: B((bt - W.y) / Math.max(1, W.h), 0, 1)
        }, Ct = Hs(yt, ft);
        if (!Ct) return;
        const jt = _o(Ct);
        c.item.yaw_deg = jt.yaw, c.item.pitch_deg = jt.pitch;
      } else if (p.mode === "unwrap") {
        const yt = gr(), W = B((gt - yt.x) / Math.max(yt.w, 1), 0, 1), ft = B((bt - yt.y) / Math.max(yt.h, 1), 0, 1);
        c.item.yaw_deg = Le(W * 360 - 180), c.item.pitch_deg = B(90 - ft * 180, -90, 90);
      } else {
        const yt = As(gt, bt), W = _o(yt);
        c.item.yaw_deg = W.yaw, c.item.pitch_deg = W.pitch;
      }
      Ce(c.item) && cn(), dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "move_stroke_group") {
      const gt = p.mode === "frame" ? (() => {
        const W = ne();
        return W ? _n(o, W, performance.now()) : null;
      })() : vn(o, performance.now());
      if (!gt || !c.startUv) return;
      const bt = Number(gt.u || 0) - Number(c.startUv.u || 0), yt = Number(gt.v || 0) - Number(c.startUv.v || 0);
      Al((l = c.item) == null ? void 0 : l.actionGroupId, bt, yt, c.snapshot, (h = c.item) == null ? void 0 : h.layerKind, c.frameSnapshot) && (bn({ rebuildPaintEngine: !1 }), dt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_raster_object") {
      const gt = p.mode === "frame" ? (() => {
        const W = ne();
        return W ? _n(o, W, performance.now()) : null;
      })() : vn(o, performance.now());
      if (!gt || !c.startUv) return;
      const bt = Number(gt.u || 0) - Number(c.startUv.u || 0), yt = Number(gt.v || 0) - Number(c.startUv.v || 0);
      Il(((m = c.item) == null ? void 0 : m.rasterObjectId) || ((x = c.item) == null ? void 0 : x.id) || "", bt, yt, c.snapshot) && (Ki(), dt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_multi") {
      const gt = o.x - Number(((b = c.offset) == null ? void 0 : b.x) || 0), bt = o.y - Number(((_ = c.offset) == null ? void 0 : _.y) || 0);
      let yt = !1, W = !1, ft = !1;
      const Ct = gt - Number(((S = c.startCenter) == null ? void 0 : S.x) || gt), jt = bt - Number(((N = c.startCenter) == null ? void 0 : N.y) || bt);
      for (const It of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
        const Tt = (e === "cutout" ? Ss() : ke()).find((Ot) => String((Ot == null ? void 0 : Ot.id) || "") === String(It.id || ""));
        if (!Tt || !Ce(Tt)) continue;
        const Ht = {
          x: Number(((k = It.center) == null ? void 0 : k.x) || 0) + Ct,
          y: Number(((L = It.center) == null ? void 0 : L.y) || 0) + jt
        };
        if (p.mode === "frame" && e === "cutout") {
          const Ot = ne(), Ft = We(Ot);
          if (!Ot || !Ft) continue;
          const se = {
            x: B((Ht.x - Ft.x) / Math.max(1, Ft.w), 0, 1),
            y: B((Ht.y - Ft.y) / Math.max(1, Ft.h), 0, 1)
          }, Qn = Hs(Ot, se);
          if (!Qn) continue;
          const tr = _o(Qn);
          Tt.yaw_deg = tr.yaw, Tt.pitch_deg = tr.pitch;
        } else if (p.mode === "unwrap") {
          const Ot = gr(), Ft = B((Ht.x - Ot.x) / Math.max(Ot.w, 1), 0, 1), se = B((Ht.y - Ot.y) / Math.max(Ot.h, 1), 0, 1);
          Tt.yaw_deg = Le(Ft * 360 - 180), Tt.pitch_deg = B(90 - se * 180, -90, 90);
        } else {
          const Ot = As(Ht.x, Ht.y), Ft = _o(Ot);
          Tt.yaw_deg = Ft.yaw, Tt.pitch_deg = Ft.pitch;
        }
        yt = !0;
      }
      for (const It of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
        const Tt = {
          x: Number(((O = It.center) == null ? void 0 : O.x) || 0) + Ct,
          y: Number(((z = It.center) == null ? void 0 : z.y) || 0) + jt
        }, Ht = p.mode === "frame" ? (() => {
          const Ft = ne();
          return Ft ? _n(Tt, Ft, performance.now()) : null;
        })() : vn(Tt, performance.now()), Ot = It.centerUv || null;
        if (Ht && Ot) {
          const Ft = Number(Ht.u || 0) - Number(Ot.u || 0), se = Number(Ht.v || 0) - Number(Ot.v || 0);
          Al(It.id, Ft, se, It.snapshot, It.layerKind, It.frameSnapshot) && (yt = !0, W = !0);
        }
      }
      for (const It of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
        const Tt = {
          x: Number(((U = It.center) == null ? void 0 : U.x) || 0) + Ct,
          y: Number(((ut = It.center) == null ? void 0 : ut.y) || 0) + jt
        }, Ht = p.mode === "frame" ? (() => {
          const Ft = ne();
          return Ft ? _n(Tt, Ft, performance.now()) : null;
        })() : vn(Tt, performance.now()), Ot = It.centerUv || null;
        if (Ht && Ot) {
          const Ft = Number(Ht.u || 0) - Number(Ot.u || 0), se = Number(Ht.v || 0) - Number(Ot.v || 0);
          Il(It.id, Ft, se, It.snapshot) && (yt = !0, ft = !0);
        }
      }
      yt && (W ? bn({ rebuildPaintEngine: !1 }) : ft ? Ki() : cn(), dt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_stroke_group") {
      const bt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      Cl((_t = c.item) == null ? void 0 : _t.actionGroupId, bt, 0, c.snapshot, (mt = c.item) == null ? void 0 : mt.layerKind, c.frameSnapshot) && (bn({ rebuildPaintEngine: !1 }), dt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "rotate_stroke_group") {
      let gt = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - Number(c.startAng || 0)) * zr;
      i.shiftKey && (gt = Math.round(gt / 45) * 45), Cl((pt = c.item) == null ? void 0 : pt.actionGroupId, 1, gt, c.snapshot, (ht = c.item) == null ? void 0 : ht.layerKind, c.frameSnapshot) && (bn({ rebuildPaintEngine: !1 }), dt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "marquee_select") {
      c.current = o, dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale") {
      const bt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = B(c.startHFOV * bt, 1, 179), c.item.vFOV_deg = B(c.startVFOV * bt, 1, 179), c.item.aspect_id = jr(c.item), dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_x") {
      const bt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = B(c.startHFOV * bt, 1, 179), c.item.aspect_id = jr(c.item), dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_y") {
      const bt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.vFOV_deg = B(c.startVFOV * bt, 1, 179), c.item.aspect_id = jr(c.item), dt({ localOnly: !0 });
      return;
    }
    if (c.kind === "rotate") {
      let bt = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - c.startAng) * zr, yt = c.startRot - bt;
      i.shiftKey && (yt = Math.round(yt / 45) * 45);
      const W = Ce(c.item) ? "rot_deg" : "roll_deg";
      c.item[W] = yt, dt({ localOnly: !0 });
    }
  }, C.onpointerup = () => {
    var o, c, l, h, m, x;
    const i = p.interaction;
    if (((o = p.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = p.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill")
      if (Ui(), Kg(p.interaction)) {
        bn();
        const b = String(((l = p.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (b) {
          const S = Pe().find((N) => String((N == null ? void 0 : N.actionGroupId) || "") === b);
          S && (S.frame = null);
        }
        const _ = vr();
        _ && (String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(_), nu()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, _)), ee(), Tn(), zt(), $t(), t.setDirtyCanvas(!0, !0), dt();
      } else {
        const b = vr();
        b && p.paintEngine.cancelActiveStroke(b);
      }
    else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const b = vu(p.interaction.start, p.interaction.current), S = [
        ...e === "cutout" ? Fs().filter((N) => !yn(N)) : [...ke()],
        ...ep(),
        ...np()
      ].filter((N) => qg(b, Ie(N)));
      cp(S, ((x = S[S.length - 1]) == null ? void 0 : x.id) || null), e === "cutout" && S.length && (p.cutoutAspectOpen = !1), zt(), $t(), dt();
    } else if (p.interaction && p.interaction.kind !== "view" && p.interaction.kind !== "pan_frame") {
      let b = !1;
      (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (b = !0), p.interaction.kind === "move_raster_object" && (b = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (b = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (b = !0), b && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(p.interaction.kind) || p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length ? bn({ rebuildPaintEngine: !0 }) : Ki()), ee(), Tn(), t.setDirtyCanvas(!0, !0), js(), p.hqFrames = 1, $t(), dt();
    }
    p.interaction = null, Ui(), i && i.kind === "view" && Te.endDrag(performance.now()), ja(), $t(), ge(p.pointerPos), dt();
  }, C.onpointercancel = () => {
    var i, o, c;
    if (((i = p.interaction) == null ? void 0 : i.kind) === "view" && Te.endDrag(performance.now()), ((o = p.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = p.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
      Ui();
      const l = vr();
      l && p.paintEngine.cancelActiveStroke(l);
    }
    p.interaction = null, Ui(), ja(), ge(p.pointerPos), dt({ localOnly: !0 });
  }, C.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, C.onmousemove = (i) => {
    const o = si(i);
    Ja(o, !0), !p.interaction && ge(o);
  }, C.onmouseleave = () => {
    Ja(p.pointerPos, !1), ge(p.pointerPos);
  }, C.onwheel = (i) => {
    if (p.mode === "frame") {
      const o = si(i), c = i.deltaY < 0 ? 1.1 : 1 / 1.1;
      Og(o, c) && dt({ localOnly: !0 }), i.preventDefault();
      return;
    }
    p.mode === "pano" && (Te.applyWheelEvent(i) && dt({ localOnly: !0 }), i.preventDefault());
  }, C.ondragover = (i) => {
    e !== "stickers" && e !== "cutout" || r || (i.preventDefault(), Cn(!0));
  }, C.ondrop = (i) => {
    var l;
    if (e !== "stickers" && e !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), ve.depth = 0, Cn(!1);
    const c = Array.from(((l = i.dataTransfer) == null ? void 0 : l.files) || []).find((h) => Xa(h));
    c && su(c);
  };
  const _u = (i) => {
    e !== "stickers" && e !== "cutout" || r || Zn(i) && (ve.depth += 1, Cn(!0), i.preventDefault());
  }, xu = (i) => {
    e !== "stickers" && e !== "cutout" || r || (!ve.active && Zn(i) && Cn(!0), ve.active && i.preventDefault());
  }, wu = (i) => {
    if (e !== "stickers" && e !== "cutout" || r || !ve.active) return;
    ve.depth = Math.max(0, ve.depth - 1);
    const o = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (ve.depth === 0 || o) && Cn(!1);
  }, Su = (i) => {
    e !== "stickers" && e !== "cutout" || r || (ve.depth = 0, Cn(!1), Zn(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", _u, !0), window.addEventListener("dragover", xu, !0), window.addEventListener("dragleave", wu, !0), window.addEventListener("drop", Su, !0), xt.forEach((i) => {
    i.onclick = () => {
      i.disabled || (p.mode = i.dataset.view, e === "cutout" && p.mode === "frame" && fe() && yn(fe()) && (ii({ preservePanelValues: !0 }), zt(), $t()), Bs(), ja(), dt());
    };
  });
  function Ws() {
    const { canUndo: i, canRedo: o } = au();
    I.querySelectorAll("[data-action='undo'], [data-tool-ui-action='undo']").forEach((c) => {
      c.disabled = !i;
    }), I.querySelectorAll("[data-action='redo'], [data-tool-ui-action='redo']").forEach((c) => {
      c.disabled = !o;
    });
  }
  const qs = I.querySelector("[data-action='undo']");
  qs && (qs.onclick = () => {
    r || qs.disabled || qi(-1);
  });
  const Ys = I.querySelector("[data-action='redo']");
  Ys && (Ys.onclick = () => {
    r || Ys.disabled || qi(1);
  });
  const Nu = I.querySelector("[data-action='add']");
  Nu && (Nu.onclick = () => {
    r || (e === "stickers" ? Us() : lu());
  });
  const Mu = I.querySelector("[data-action='clear']");
  Mu && (Mu.onclick = () => {
    r || fu();
  });
  const ku = I.querySelector("[data-action='save']");
  ku && (ku.onclick = () => {
    r || pu();
  }), I.querySelector("[data-action='reset-view']").onclick = () => {
    Ee(0, 0, 100, 180, 680);
  };
  const Dr = I.querySelector("[data-action='toggle-grid']"), Xs = () => {
    if (!Dr) return;
    const i = !!p.showGrid;
    Dr.innerHTML = i ? Et.eye : Et.eye_dashed, Dr.setAttribute("aria-pressed", i ? "true" : "false"), Dr.setAttribute("aria-label", i ? "Hide Grid" : "Show Grid"), Dr.setAttribute("data-tip", i ? "Hide grid" : "Show grid");
  };
  if (Dr && (Xs(), Dr.onclick = () => {
    p.showGrid = !p.showGrid, Nv(t == null ? void 0 : t.id, p.showGrid), Xs(), dt();
  }), j && (j.querySelectorAll("[data-tool-mode]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const o = String(i.getAttribute("data-tool-mode") || "cursor");
      p.primaryTool = o, (o === "paint" || o === "mask") && ii({ preservePanelValues: !0 }), ln(), zt(), $t(), dt();
    };
  }), j.querySelectorAll("[data-tool-ui-action]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const o = String(i.getAttribute("data-tool-ui-action") || "");
      if (!((o === "undo" || o === "redo") && i.disabled)) {
        if (o === "undo") qi(-1);
        else if (o === "redo") qi(1);
        else if (o === "clear") fu();
        else if (o === "add") Us();
        else if (o === "add-image") Us();
        else if (o === "add-or-look") {
          const c = ne();
          if ((d.shots || []).length === 0)
            lu();
          else {
            const l = c;
            if (!l) return;
            p.selectedId = l.id || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], d.active.selected_shot_id = p.selectedId;
            const h = Le(Number(l.yaw_deg || 0)), m = B(Number(l.pitch_deg || 0), -89.9, 89.9);
            Ee(h, m, p.viewFov), zt(), $t(), dt();
          }
        }
      }
    };
  })), I.querySelectorAll("[data-paint-tool]").forEach((i) => {
    i.onclick = () => {
      p.primaryTool = "paint";
      const o = String(i.getAttribute("data-paint-tool") || "pen");
      p.paintTool = o, ii({ preservePanelValues: !0 }), en[o] && (p.activeBrushPresetId = o), ln(), zt(), $t(), dt();
    };
  }), I.querySelectorAll("[data-mask-tool]").forEach((i) => {
    i.onclick = () => {
      p.primaryTool = "mask", p.maskTool = String(i.getAttribute("data-mask-tool") || "pen"), ii({ preservePanelValues: !0 }), ln(), zt(), $t(), dt();
    };
  }), H.forEach((i) => {
    i.onclick = () => {
      const o = String(i.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
      Ig(o);
    };
  }), q.forEach((i) => {
    i.oninput = () => {
      if (i.disabled) return;
      const o = Math.max(1, Math.min(120, Math.round(Number(i.value)))), c = xr(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[c] = o;
      const l = (o - 1) / 119 * 100;
      q.forEach((h) => {
        h.value = String(o), h.style.setProperty("--v", `${B(l, 0, 100)}%`);
      }), Y.forEach((h) => {
        h.textContent = String(o);
      }), $g();
    }, i.onchange = () => Qa(), i.addEventListener("pointerup", Qa), i.addEventListener("pointercancel", Qa), i.addEventListener("blur", Qa);
  }), At) {
    At.querySelectorAll("[data-paint-color-swatch]").forEach((o) => {
      o.onclick = () => {
        const c = Vo.find((l) => l.id === o.getAttribute("data-paint-color-swatch"));
        c && (p.paintColor = un(c.color), Z(!0), ln());
      };
    });
    const i = At.querySelector("[data-paint-color-custom]");
    i && (i.onclick = (o) => {
      o.preventDefault(), o.stopPropagation(), Mt && !Mt.hidden ? Z(!0) : vt(), ln();
    });
  }
  const Xg = (i, o) => {
    var b;
    if (!Ne) return;
    const c = Ne.getBoundingClientRect(), l = B((i - c.left) / Math.max(1, c.width), 0, 1), h = 1 - B((o - c.top) / Math.max(1, c.height), 0, 1), m = oa(p.customPaintColor), x = { ...wc(m.h, l, h), a: Number(((b = p.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    p.customPaintColor = un(x), p.paintColor = un(x), ln();
  }, Zg = (i) => {
    var m;
    if (!Me) return;
    const o = Me.getBoundingClientRect(), c = B((i - o.left) / Math.max(1, o.width), 0, 1), l = oa(p.customPaintColor), h = { ...wc(c, l.s, l.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = un(h), p.paintColor = un(h), ln();
  }, Pu = (i, o) => {
    const c = i.pointerId;
    o(i);
    const l = (m) => {
      m.pointerId === c && o(m);
    }, h = (m) => {
      m.pointerId === c && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  Ne && (Ne.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Pu(i, (o) => Xg(o.clientX, o.clientY));
  }), Me && (Me.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Pu(i, (o) => Zg(o.clientX));
  }), Ae && (Ae.oninput = () => {
    const i = { ...p.customPaintColor, a: B(Number(Ae.value) / 100, 0, 1) };
    p.customPaintColor = un(i), p.paintColor = un(i), ln();
  });
  const Au = () => {
    if (!nt) return;
    const i = !!p.fullscreen;
    nt.innerHTML = i ? Et.fullscreen_close : Et.fullscreen, nt.setAttribute("aria-label", i ? "Exit Fullscreen" : "Fullscreen"), nt.setAttribute("data-tip", i ? "Exit fullscreen" : "Fullscreen");
  }, eo = (i) => {
    const o = !!i;
    p.fullscreen !== o && (p.fullscreen = o, I.classList.toggle("pano-modal-fullscreen", o), o ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), Xs(), Au(), dt());
  }, Cu = () => document.fullscreenElement === T, Jg = async () => {
    var i, o;
    try {
      if (!document.fullscreenEnabled) {
        eo(!p.fullscreen);
        return;
      }
      Cu() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((i = T.requestFullscreen) == null ? void 0 : i.call(T));
    } catch {
      eo(!p.fullscreen);
    }
  }, Iu = () => {
    document.fullscreenEnabled && eo(Cu());
  };
  document.addEventListener("fullscreenchange", Iu), nt && (Au(), nt.onclick = (i) => {
    i.preventDefault(), i.stopPropagation(), Jg();
  });
  const Eu = () => {
    if (!wt) return;
    const i = !!p.outputPreviewExpanded;
    wt.innerHTML = i ? Et.fullscreen_close : Et.fullscreen, wt.setAttribute("aria-label", i ? "Reduce Preview" : "Expand Preview"), wt.setAttribute("data-tip", i ? "Reduce preview" : "Expand preview");
  };
  wt && (Eu(), wt.onclick = (i) => {
    i.preventDefault(), i.stopPropagation();
    const o = !p.outputPreviewExpanded;
    p.outputPreviewExpanded = o, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = o ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), Eu(), dt();
  }), Q.addEventListener("click", (i) => {
    const o = i.target.closest("[data-action]");
    if (!o) return;
    const c = o.getAttribute("data-action");
    if (!r) {
      if (c === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, $t(), dt();
        return;
      }
      if (c === "aspect-set") {
        const l = fe();
        if (!l) return;
        const h = String(o.getAttribute("data-aspect") || "1:1");
        Tg(l, h), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, js(), ee(), pe(), $t(), dt();
        return;
      }
      if (c === "rotate-90") {
        const l = fe();
        if (!l) return;
        Dg(l), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, js(), ee(), pe(), $t(), dt();
        return;
      }
      if (c === "bring-front") {
        Lg();
        return;
      }
      if (c === "send-back") {
        Rg();
        return;
      }
      if (c === "duplicate") {
        Eg();
        return;
      }
      if (c === "replace-image") {
        kg();
        return;
      }
      if (c === "toggle-lock") {
        sp();
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
        du();
        return;
      }
      dt();
    }
  });
  const Zs = t.onExecuted, Js = t.onConnectionsChange;
  let Qs = null, tc = null, ec = null;
  !r && e === "stickers" && (ec = (i = "sync") => {
    Hl(i);
  }, t.__panoExternalStickerSync = ec, Qs = function(...o) {
    var c;
    typeof Zs == "function" && Zs.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "executed");
  }, t.onExecuted = Qs, tc = function(...o) {
    var c;
    typeof Js == "function" && Js.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "connections");
  }, t.onConnectionsChange = tc), r || (Bc.set(String(t.id ?? "0"), () => Ds()), Tp() && Ds());
  const li = () => {
    var i, o, c, l, h, m, x, b, _;
    Bc.delete(String(t.id ?? "0")), r || Ds(), document.fullscreenElement === T && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Iu), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (c = (o = t.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || c.call(o), (h = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || h.call(l, !0, !0), (b = (x = (m = pn) == null ? void 0 : m.canvas) == null ? void 0 : x.setDirty) == null || b.call(x, !0, !0), to(), Ng(), (_ = ct == null ? void 0 : ct.dispose) == null || _.call(ct), Cn(!1), window.removeEventListener("keydown", Tu, !0), window.removeEventListener("keydown", Du, !0), window.removeEventListener("keydown", no, !0), window.removeEventListener("keyup", no, !0), window.removeEventListener("keydown", Lu, !0), window.removeEventListener("dragenter", _u, !0), window.removeEventListener("dragover", xu, !0), window.removeEventListener("dragleave", wu, !0), window.removeEventListener("drop", Su, !0), !r && e === "stickers" && (t.onExecuted === Qs && (t.onExecuted = Zs), t.onConnectionsChange === tc && (t.onConnectionsChange = Js), t.__panoExternalStickerSync === ec && (t.__panoExternalStickerSync = null)), P.unmount(), M.remove();
  }, Tu = (i) => {
    var o, c, l, h;
    if (i.key === "Escape") {
      if (p.fullscreen && document.fullscreenElement === T) {
        i.preventDefault(), i.stopPropagation(), (o = i.stopImmediatePropagation) == null || o.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), eo(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), li();
    }
  }, Du = (i) => {
    const o = String(i.key || ""), c = String(i.code || ""), l = Number(i.keyCode || 0);
    if (!(o === "Delete" || c === "Delete" || l === 46) && !(o === "Backspace" || c === "Backspace" || l === 8)) return;
    const x = i.target, b = ((x == null ? void 0 : x.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || x != null && x.isContentEditable || !fe() || (du(), i.preventDefault(), i.stopPropagation());
  }, no = (i) => {
    const o = !!(i.ctrlKey || i.metaKey);
    p.marqueeModifier !== o && (p.marqueeModifier = o, ge(p.pointerPos));
  }, Lu = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const o = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (o !== "z" && c !== "KeyZ") return;
    const l = i.target, h = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: m, canRedo: x } = au();
    i.shiftKey && !x || !i.shiftKey && !m || (qi(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Tu, !0), window.addEventListener("keydown", Du, !0), window.addEventListener("keydown", no, !0), window.addEventListener("keyup", no, !0), window.addEventListener("keydown", Lu, !0), T.addEventListener("pointerdown", (i) => {
    i.target === T && li();
  }), Yi(I), Sp(), !r && e === "stickers" && Hl("open"), Pg(), ee(), Ws(), ln(), ot && requestAnimationFrame(() => {
    ot.classList.add("is-ready");
  }), zt(), za(), iu(), ge(p.pointerPos), dt(), kt.rafId = requestAnimationFrame(zs);
}
function nd(t, e, n, r) {
  if (!(t != null && t.prototype)) return;
  const a = (y) => {
    var v, d;
    try {
      (v = y.__panoDomRestore) == null || v.call(y);
    } catch {
    }
    try {
      (d = y.__panoLegacyRestore) == null || d.call(y);
    } catch {
    }
    y.__panoDomPreview = null, y.__panoLegacyPreviewHooked = !1, y.__panoPreviewHooked = !1, y.__panoPreviewAttached = !1, y.__panoPreviewMountKey = null;
  };
  function s(y) {
    var T;
    const v = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === v) return;
    a(y), n === "PanoramaStickers" && Ev(y), wl(y), Dv(y, is);
    const M = hn(y, is);
    if (M && !M.__panoPreviewPatchedCb) {
      M.__panoPreviewPatchedCb = !0;
      const I = M.callback;
      M.callback = (C) => {
        var A;
        const F = I ? I(C) : void 0;
        return (A = y.setDirtyCanvas) == null || A.call(y, !0, !1), F;
      };
    }
    const P = hn(y, "bg_color");
    if (P && (P.value == null || String(P.value).trim() === "" || String(P.value).toLowerCase() === "#000000") && (P.value = "#00ff00", (T = P.callback) == null || T.call(P, "#00ff00")), n === "PanoramaStickers") {
      Kc(y, r, () => ka(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = v;
        return;
      }
    }
    Kc(y, r, () => ka(y, "cutout")), Mb(y, {
      buttonText: r,
      onOpen: () => ka(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = v;
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
function Gv(t) {
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
function Kv(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const r = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), a = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = a, !r && a < 40) {
      requestAnimationFrame(e);
      return;
    }
    wl(t), Kc(t, "Open Preview", () => ka(t, "stickers", { readOnly: !0, hideSidebar: !1 })), Nb(t, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (s) => ka(s, "stickers", { readOnly: !0, hideSidebar: !1 })
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
    const e = [...da.values()];
    e.length > 0 && await Promise.allSettled(e);
    const n = [...ha.values()];
    n.length > 0 && await Promise.allSettled(n);
  },
  beforeRegisterNodeDef(t, e) {
    const n = String((e == null ? void 0 : e.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && nd(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && nd(t, e, "PanoramaCutout", "Open Cutout Editor"), Fc(n) && Gv(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    wl(t), Fc(e) && Kv(t);
  }
});
