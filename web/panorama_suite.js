import * as No from "../../scripts/app.js";
import { app as hn } from "../../scripts/app.js";
import { api as tn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Xc(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const oe = {}, ki = [], Xn = () => {
}, ad = () => !1, is = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), as = (t) => t.startsWith("onUpdate:"), Ge = Object.assign, Zc = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, a0 = Object.prototype.hasOwnProperty, Yt = (t, e) => a0.call(t, e), Lt = Array.isArray, Pi = (t) => Fa(t) === "[object Map]", od = (t) => Fa(t) === "[object Set]", Vu = (t) => Fa(t) === "[object Date]", Ht = (t) => typeof t == "function", Pe = (t) => typeof t == "string", Zn = (t) => typeof t == "symbol", ee = (t) => t !== null && typeof t == "object", sd = (t) => (ee(t) || Ht(t)) && Ht(t.then) && Ht(t.catch), cd = Object.prototype.toString, Fa = (t) => cd.call(t), o0 = (t) => Fa(t).slice(8, -1), ld = (t) => Fa(t) === "[object Object]", Jc = (t) => Pe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, ya = /* @__PURE__ */ Xc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), os = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, s0 = /-\w/g, nn = os(
  (t) => t.replace(s0, (e) => e.slice(1).toUpperCase())
), c0 = /\B([A-Z])/g, Zr = os(
  (t) => t.replace(c0, "-$1").toLowerCase()
), ss = os((t) => t.charAt(0).toUpperCase() + t.slice(1)), nc = os(
  (t) => t ? `on${ss(t)}` : ""
), Wn = (t, e) => !Object.is(t, e), rc = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, ud = (t, e, n, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, l0 = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Hu;
const cs = () => Hu || (Hu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ls(t) {
  if (Lt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], a = Pe(r) ? h0(r) : ls(r);
      if (a)
        for (const s in a)
          e[s] = a[s];
    }
    return e;
  } else if (Pe(t) || ee(t))
    return t;
}
const u0 = /;(?![^(]*\))/g, f0 = /:([^]+)/, d0 = /\/\*[^]*?\*\//g;
function h0(t) {
  const e = {};
  return t.replace(d0, "").split(u0).forEach((n) => {
    if (n) {
      const r = n.split(f0);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function us(t) {
  let e = "";
  if (Pe(t))
    e = t;
  else if (Lt(t))
    for (let n = 0; n < t.length; n++) {
      const r = us(t[n]);
      r && (e += r + " ");
    }
  else if (ee(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const p0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", g0 = /* @__PURE__ */ Xc(p0);
function fd(t) {
  return !!t || t === "";
}
function m0(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = Qc(t[r], e[r]);
  return n;
}
function Qc(t, e) {
  if (t === e) return !0;
  let n = Vu(t), r = Vu(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Zn(t), r = Zn(e), n || r)
    return t === e;
  if (n = Lt(t), r = Lt(e), n || r)
    return n && r ? m0(t, e) : !1;
  if (n = ee(t), r = ee(e), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(t).length, s = Object.keys(e).length;
    if (a !== s)
      return !1;
    for (const u in t) {
      const f = t.hasOwnProperty(u), g = e.hasOwnProperty(u);
      if (f && !g || !f && g || !Qc(t[u], e[u]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const dd = (t) => !!(t && t.__v_isRef === !0), hd = (t) => Pe(t) ? t : t == null ? "" : Lt(t) || ee(t) && (t.toString === cd || !Ht(t.toString)) ? dd(t) ? hd(t.value) : JSON.stringify(t, pd, 2) : String(t), pd = (t, e) => dd(e) ? pd(t, e.value) : Pi(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, a], s) => (n[ic(r, s) + " =>"] = a, n),
    {}
  )
} : od(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => ic(n))
} : Zn(e) ? ic(e) : ee(e) && !Lt(e) && !ld(e) ? String(e) : e, ic = (t, e = "") => {
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
let ln;
class y0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = ln, !e && ln && (this.index = (ln.scopes || (ln.scopes = [])).push(
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
      const n = ln;
      try {
        return ln = this, e();
      } finally {
        ln = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ln, ln = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ln = this.prevScope, this.prevScope = void 0);
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
function b0() {
  return ln;
}
let ae;
const ac = /* @__PURE__ */ new WeakSet();
class gd {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ln && ln.active && ln.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || yd(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, $u(this), bd(this);
    const e = ae, n = An;
    ae = this, An = !0;
    try {
      return this.fn();
    } finally {
      vd(this), ae = e, An = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        nl(e);
      this.deps = this.depsTail = void 0, $u(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ac.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Pc(this) && this.run();
  }
  get dirty() {
    return Pc(this);
  }
}
let md = 0, ba, va;
function yd(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = va, va = t;
    return;
  }
  t.next = ba, ba = t;
}
function tl() {
  md++;
}
function el() {
  if (--md > 0)
    return;
  if (va) {
    let e = va;
    for (va = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; ba; ) {
    let e = ba;
    for (ba = void 0; e; ) {
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
function bd(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function vd(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), nl(r), v0(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  t.deps = e, t.depsTail = n;
}
function Pc(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (_d(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function _d(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Ia) || (t.globalVersion = Ia, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Pc(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = ae, r = An;
  ae = t, An = !0;
  try {
    bd(t);
    const a = t.fn(t._value);
    (e.version === 0 || Wn(a, t._value)) && (t.flags |= 128, t._value = a, e.version++);
  } catch (a) {
    throw e.version++, a;
  } finally {
    ae = n, An = r, vd(t), t.flags &= -3;
  }
}
function nl(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: a } = t;
  if (r && (r.nextSub = a, t.prevSub = void 0), a && (a.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      nl(s, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function v0(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let An = !0;
const wd = [];
function ur() {
  wd.push(An), An = !1;
}
function fr() {
  const t = wd.pop();
  An = t === void 0 ? !0 : t;
}
function $u(t) {
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
let Ia = 0;
class _0 {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class rl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!ae || !An || ae === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ae)
      n = this.activeLink = new _0(ae, this), ae.deps ? (n.prevDep = ae.depsTail, ae.depsTail.nextDep = n, ae.depsTail = n) : ae.deps = ae.depsTail = n, xd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ae.depsTail, n.nextDep = void 0, ae.depsTail.nextDep = n, ae.depsTail = n, ae.deps === n && (ae.deps = r);
    }
    return n;
  }
  trigger(e) {
    this.version++, Ia++, this.notify(e);
  }
  notify(e) {
    tl();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      el();
    }
  }
}
function xd(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        xd(r);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
  }
}
const Ac = /* @__PURE__ */ new WeakMap(), Br = /* @__PURE__ */ Symbol(
  ""
), Cc = /* @__PURE__ */ Symbol(
  ""
), Ea = /* @__PURE__ */ Symbol(
  ""
);
function ze(t, e, n) {
  if (An && ae) {
    let r = Ac.get(t);
    r || Ac.set(t, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new rl()), a.map = r, a.key = n), a.track();
  }
}
function lr(t, e, n, r, a, s) {
  const u = Ac.get(t);
  if (!u) {
    Ia++;
    return;
  }
  const f = (g) => {
    g && g.trigger();
  };
  if (tl(), e === "clear")
    u.forEach(f);
  else {
    const g = Lt(t), y = g && Jc(n);
    if (g && n === "length") {
      const v = Number(r);
      u.forEach((d, M) => {
        (M === "length" || M === Ea || !Zn(M) && M >= v) && f(d);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), y && f(u.get(Ea)), e) {
        case "add":
          g ? y && f(u.get("length")) : (f(u.get(Br)), Pi(t) && f(u.get(Cc)));
          break;
        case "delete":
          g || (f(u.get(Br)), Pi(t) && f(u.get(Cc)));
          break;
        case "set":
          Pi(t) && f(u.get(Br));
          break;
      }
  }
  el();
}
function pi(t) {
  const e = /* @__PURE__ */ qt(t);
  return e === t ? e : (ze(e, "iterate", Ea), /* @__PURE__ */ yn(t) ? e : e.map(Cn));
}
function fs(t) {
  return ze(t = /* @__PURE__ */ qt(t), "iterate", Ea), t;
}
function Gn(t, e) {
  return /* @__PURE__ */ dr(t) ? Ri(/* @__PURE__ */ Gr(t) ? Cn(e) : e) : Cn(e);
}
const w0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return oc(this, Symbol.iterator, (t) => Gn(this, t));
  },
  concat(...t) {
    return pi(this).concat(
      ...t.map((e) => Lt(e) ? pi(e) : e)
    );
  },
  entries() {
    return oc(this, "entries", (t) => (t[1] = Gn(this, t[1]), t));
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
    return sc(this, "includes", t);
  },
  indexOf(...t) {
    return sc(this, "indexOf", t);
  },
  join(t) {
    return pi(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return sc(this, "lastIndexOf", t);
  },
  map(t, e) {
    return ir(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return ra(this, "pop");
  },
  push(...t) {
    return ra(this, "push", t);
  },
  reduce(t, ...e) {
    return zu(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return zu(this, "reduceRight", t, e);
  },
  shift() {
    return ra(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return ir(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return ra(this, "splice", t);
  },
  toReversed() {
    return pi(this).toReversed();
  },
  toSorted(t) {
    return pi(this).toSorted(t);
  },
  toSpliced(...t) {
    return pi(this).toSpliced(...t);
  },
  unshift(...t) {
    return ra(this, "unshift", t);
  },
  values() {
    return oc(this, "values", (t) => Gn(this, t));
  }
};
function oc(t, e, n) {
  const r = fs(t), a = r[e]();
  return r !== t && !/* @__PURE__ */ yn(t) && (a._next = a.next, a.next = () => {
    const s = a._next();
    return s.done || (s.value = n(s.value)), s;
  }), a;
}
const x0 = Array.prototype;
function ir(t, e, n, r, a, s) {
  const u = fs(t), f = u !== t && !/* @__PURE__ */ yn(t), g = u[e];
  if (g !== x0[e]) {
    const d = g.apply(t, s);
    return f ? Cn(d) : d;
  }
  let y = n;
  u !== t && (f ? y = function(d, M) {
    return n.call(this, Gn(t, d), M, t);
  } : n.length > 2 && (y = function(d, M) {
    return n.call(this, d, M, t);
  }));
  const v = g.call(u, y, r);
  return f && a ? a(v) : v;
}
function zu(t, e, n, r) {
  const a = fs(t), s = a !== t && !/* @__PURE__ */ yn(t);
  let u = n, f = !1;
  a !== t && (s ? (f = r.length === 0, u = function(y, v, d) {
    return f && (f = !1, y = Gn(t, y)), n.call(this, y, Gn(t, v), d, t);
  }) : n.length > 3 && (u = function(y, v, d) {
    return n.call(this, y, v, d, t);
  }));
  const g = a[e](u, ...r);
  return f ? Gn(t, g) : g;
}
function sc(t, e, n) {
  const r = /* @__PURE__ */ qt(t);
  ze(r, "iterate", Ea);
  const a = r[e](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ sl(n[0]) ? (n[0] = /* @__PURE__ */ qt(n[0]), r[e](...n)) : a;
}
function ra(t, e, n = []) {
  ur(), tl();
  const r = (/* @__PURE__ */ qt(t))[e].apply(t, n);
  return el(), fr(), r;
}
const S0 = /* @__PURE__ */ Xc("__proto__,__v_isRef,__isVue"), Sd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Zn)
);
function N0(t) {
  Zn(t) || (t = String(t));
  const e = /* @__PURE__ */ qt(this);
  return ze(e, "has", t), e.hasOwnProperty(t);
}
class Nd {
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
      return r === (a ? s ? R0 : Ad : s ? Pd : kd).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const u = Lt(e);
    if (!a) {
      let g;
      if (u && (g = w0[n]))
        return g;
      if (n === "hasOwnProperty")
        return N0;
    }
    const f = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Be(e) ? e : r
    );
    if ((Zn(n) ? Sd.has(n) : S0(n)) || (a || ze(e, "get", n), s))
      return f;
    if (/* @__PURE__ */ Be(f)) {
      const g = u && Jc(n) ? f : f.value;
      return a && ee(g) ? /* @__PURE__ */ Ec(g) : g;
    }
    return ee(f) ? a ? /* @__PURE__ */ Ec(f) : /* @__PURE__ */ al(f) : f;
  }
}
class Md extends Nd {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, a) {
    let s = e[n];
    const u = Lt(e) && Jc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ dr(s);
      if (!/* @__PURE__ */ yn(r) && !/* @__PURE__ */ dr(r) && (s = /* @__PURE__ */ qt(s), r = /* @__PURE__ */ qt(r)), !u && /* @__PURE__ */ Be(s) && !/* @__PURE__ */ Be(r))
        return y || (s.value = r), !0;
    }
    const f = u ? Number(n) < e.length : Yt(e, n), g = Reflect.set(
      e,
      n,
      r,
      /* @__PURE__ */ Be(e) ? e : a
    );
    return e === /* @__PURE__ */ qt(a) && (f ? Wn(r, s) && lr(e, "set", n, r) : lr(e, "add", n, r)), g;
  }
  deleteProperty(e, n) {
    const r = Yt(e, n);
    e[n];
    const a = Reflect.deleteProperty(e, n);
    return a && r && lr(e, "delete", n, void 0), a;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Zn(n) || !Sd.has(n)) && ze(e, "has", n), r;
  }
  ownKeys(e) {
    return ze(
      e,
      "iterate",
      Lt(e) ? "length" : Br
    ), Reflect.ownKeys(e);
  }
}
class M0 extends Nd {
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
const k0 = /* @__PURE__ */ new Md(), P0 = /* @__PURE__ */ new M0(), A0 = /* @__PURE__ */ new Md(!0);
const Ic = (t) => t, io = (t) => Reflect.getPrototypeOf(t);
function C0(t, e, n) {
  return function(...r) {
    const a = this.__v_raw, s = /* @__PURE__ */ qt(a), u = Pi(s), f = t === "entries" || t === Symbol.iterator && u, g = t === "keys" && u, y = a[t](...r), v = n ? Ic : e ? Ri : Cn;
    return !e && ze(
      s,
      "iterate",
      g ? Cc : Br
    ), Ge(
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
function I0(t, e) {
  const n = {
    get(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ qt(s), f = /* @__PURE__ */ qt(a);
      t || (Wn(a, f) && ze(u, "get", a), ze(u, "get", f));
      const { has: g } = io(u), y = e ? Ic : t ? Ri : Cn;
      if (g.call(u, a))
        return y(s.get(a));
      if (g.call(u, f))
        return y(s.get(f));
      s !== u && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !t && ze(/* @__PURE__ */ qt(a), "iterate", Br), a.size;
    },
    has(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ qt(s), f = /* @__PURE__ */ qt(a);
      return t || (Wn(a, f) && ze(u, "has", a), ze(u, "has", f)), a === f ? s.has(a) : s.has(a) || s.has(f);
    },
    forEach(a, s) {
      const u = this, f = u.__v_raw, g = /* @__PURE__ */ qt(f), y = e ? Ic : t ? Ri : Cn;
      return !t && ze(g, "iterate", Br), f.forEach((v, d) => a.call(s, y(v), y(d), u));
    }
  };
  return Ge(
    n,
    t ? {
      add: ao("add"),
      set: ao("set"),
      delete: ao("delete"),
      clear: ao("clear")
    } : {
      add(a) {
        const s = /* @__PURE__ */ qt(this), u = io(s), f = /* @__PURE__ */ qt(a), g = !e && !/* @__PURE__ */ yn(a) && !/* @__PURE__ */ dr(a) ? f : a;
        return u.has.call(s, g) || Wn(a, g) && u.has.call(s, a) || Wn(f, g) && u.has.call(s, f) || (s.add(g), lr(s, "add", g, g)), this;
      },
      set(a, s) {
        !e && !/* @__PURE__ */ yn(s) && !/* @__PURE__ */ dr(s) && (s = /* @__PURE__ */ qt(s));
        const u = /* @__PURE__ */ qt(this), { has: f, get: g } = io(u);
        let y = f.call(u, a);
        y || (a = /* @__PURE__ */ qt(a), y = f.call(u, a));
        const v = g.call(u, a);
        return u.set(a, s), y ? Wn(s, v) && lr(u, "set", a, s) : lr(u, "add", a, s), this;
      },
      delete(a) {
        const s = /* @__PURE__ */ qt(this), { has: u, get: f } = io(s);
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
    n[a] = C0(a, t, e);
  }), n;
}
function il(t, e) {
  const n = I0(t, e);
  return (r, a, s) => a === "__v_isReactive" ? !t : a === "__v_isReadonly" ? t : a === "__v_raw" ? r : Reflect.get(
    Yt(n, a) && a in r ? n : r,
    a,
    s
  );
}
const E0 = {
  get: /* @__PURE__ */ il(!1, !1)
}, T0 = {
  get: /* @__PURE__ */ il(!1, !0)
}, D0 = {
  get: /* @__PURE__ */ il(!0, !1)
};
const kd = /* @__PURE__ */ new WeakMap(), Pd = /* @__PURE__ */ new WeakMap(), Ad = /* @__PURE__ */ new WeakMap(), R0 = /* @__PURE__ */ new WeakMap();
function L0(t) {
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
function O0(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : L0(o0(t));
}
// @__NO_SIDE_EFFECTS__
function al(t) {
  return /* @__PURE__ */ dr(t) ? t : ol(
    t,
    !1,
    k0,
    E0,
    kd
  );
}
// @__NO_SIDE_EFFECTS__
function F0(t) {
  return ol(
    t,
    !1,
    A0,
    T0,
    Pd
  );
}
// @__NO_SIDE_EFFECTS__
function Ec(t) {
  return ol(
    t,
    !0,
    P0,
    D0,
    Ad
  );
}
function ol(t, e, n, r, a) {
  if (!ee(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = O0(t);
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
function Gr(t) {
  return /* @__PURE__ */ dr(t) ? /* @__PURE__ */ Gr(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function dr(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yn(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function sl(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function qt(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ qt(e) : t;
}
function V0(t) {
  return !Yt(t, "__v_skip") && Object.isExtensible(t) && ud(t, "__v_skip", !0), t;
}
const Cn = (t) => ee(t) ? /* @__PURE__ */ al(t) : t, Ri = (t) => ee(t) ? /* @__PURE__ */ Ec(t) : t;
// @__NO_SIDE_EFFECTS__
function Be(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function H0(t) {
  return $0(t, !1);
}
function $0(t, e) {
  return /* @__PURE__ */ Be(t) ? t : new z0(t, e);
}
class z0 {
  constructor(e, n) {
    this.dep = new rl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ qt(e), this._value = n ? e : Cn(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ yn(e) || /* @__PURE__ */ dr(e);
    e = r ? e : /* @__PURE__ */ qt(e), Wn(e, n) && (this._rawValue = e, this._value = r ? e : Cn(e), this.dep.trigger());
  }
}
function cl(t) {
  return /* @__PURE__ */ Be(t) ? t.value : t;
}
const j0 = {
  get: (t, e, n) => e === "__v_raw" ? t : cl(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const a = t[e];
    return /* @__PURE__ */ Be(a) && !/* @__PURE__ */ Be(n) ? (a.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function Cd(t) {
  return /* @__PURE__ */ Gr(t) ? t : new Proxy(t, j0);
}
class U0 {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new rl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ia - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ae !== this)
      return yd(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return _d(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function B0(t, e, n = !1) {
  let r, a;
  return Ht(t) ? r = t : (r = t.get, a = t.set), new U0(r, a, n);
}
const oo = {}, Vo = /* @__PURE__ */ new WeakMap();
let Hr;
function G0(t, e = !1, n = Hr) {
  if (n) {
    let r = Vo.get(n);
    r || Vo.set(n, r = []), r.push(t);
  }
}
function K0(t, e, n = oe) {
  const { immediate: r, deep: a, once: s, scheduler: u, augmentJob: f, call: g } = n, y = (F) => a ? F : /* @__PURE__ */ yn(F) || a === !1 || a === 0 ? Ar(F, 1) : Ar(F);
  let v, d, M, I, R = !1, D = !1;
  if (/* @__PURE__ */ Be(t) ? (d = () => t.value, R = /* @__PURE__ */ yn(t)) : /* @__PURE__ */ Gr(t) ? (d = () => y(t), R = !0) : Lt(t) ? (D = !0, R = t.some((F) => /* @__PURE__ */ Gr(F) || /* @__PURE__ */ yn(F)), d = () => t.map((F) => {
    if (/* @__PURE__ */ Be(F))
      return F.value;
    if (/* @__PURE__ */ Gr(F))
      return y(F);
    if (Ht(F))
      return g ? g(F, 2) : F();
  })) : Ht(t) ? e ? d = g ? () => g(t, 2) : t : d = () => {
    if (M) {
      ur();
      try {
        M();
      } finally {
        fr();
      }
    }
    const F = Hr;
    Hr = v;
    try {
      return g ? g(t, 3, [I]) : t(I);
    } finally {
      Hr = F;
    }
  } : d = Xn, e && a) {
    const F = d, B = a === !0 ? 1 / 0 : a;
    d = () => Ar(F(), B);
  }
  const A = b0(), L = () => {
    v.stop(), A && A.active && Zc(A.effects, v);
  };
  if (s && e) {
    const F = e;
    e = (...B) => {
      F(...B), L();
    };
  }
  let P = D ? new Array(t.length).fill(oo) : oo;
  const H = (F) => {
    if (!(!(v.flags & 1) || !v.dirty && !F))
      if (e) {
        const B = v.run();
        if (a || R || (D ? B.some((C, ct) => Wn(C, P[ct])) : Wn(B, P))) {
          M && M();
          const C = Hr;
          Hr = v;
          try {
            const ct = [
              B,
              // pass undefined as the old value when it's changed for the first time
              P === oo ? void 0 : D && P[0] === oo ? [] : P,
              I
            ];
            P = B, g ? g(e, 3, ct) : (
              // @ts-expect-error
              e(...ct)
            );
          } finally {
            Hr = C;
          }
        }
      } else
        v.run();
  };
  return f && f(H), v = new gd(d), v.scheduler = u ? () => u(H, !1) : H, I = (F) => G0(F, !1, v), M = v.onStop = () => {
    const F = Vo.get(v);
    if (F) {
      if (g)
        g(F, 4);
      else
        for (const B of F) B();
      Vo.delete(v);
    }
  }, e ? r ? H(!0) : P = v.run() : u ? u(H.bind(null, !0), !0) : v.run(), L.pause = v.pause.bind(v), L.resume = v.resume.bind(v), L.stop = L, L;
}
function Ar(t, e = 1 / 0, n) {
  if (e <= 0 || !ee(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ Be(t))
    Ar(t.value, e, n);
  else if (Lt(t))
    for (let r = 0; r < t.length; r++)
      Ar(t[r], e, n);
  else if (od(t) || Pi(t))
    t.forEach((r) => {
      Ar(r, e, n);
    });
  else if (ld(t)) {
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
function Va(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (a) {
    ds(a, e, n);
  }
}
function Jn(t, e, n, r) {
  if (Ht(t)) {
    const a = Va(t, e, n, r);
    return a && sd(a) && a.catch((s) => {
      ds(s, e, n);
    }), a;
  }
  if (Lt(t)) {
    const a = [];
    for (let s = 0; s < t.length; s++)
      a.push(Jn(t[s], e, n, r));
    return a;
  }
}
function ds(t, e, n, r = !0) {
  const a = e ? e.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: u } = e && e.appContext.config || oe;
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
      ur(), Va(s, null, 10, [
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
const Qe = [];
let Un = -1;
const Ai = [];
let Pr = null, _i = 0;
const Id = /* @__PURE__ */ Promise.resolve();
let Ho = null;
function Ed(t) {
  const e = Ho || Id;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function q0(t) {
  let e = Un + 1, n = Qe.length;
  for (; e < n; ) {
    const r = e + n >>> 1, a = Qe[r], s = Ta(a);
    s < t || s === t && a.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function ll(t) {
  if (!(t.flags & 1)) {
    const e = Ta(t), n = Qe[Qe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Ta(n) ? Qe.push(t) : Qe.splice(q0(e), 0, t), t.flags |= 1, Td();
  }
}
function Td() {
  Ho || (Ho = Id.then(Rd));
}
function Y0(t) {
  Lt(t) ? Ai.push(...t) : Pr && t.id === -1 ? Pr.splice(_i + 1, 0, t) : t.flags & 1 || (Ai.push(t), t.flags |= 1), Td();
}
function ju(t, e, n = Un + 1) {
  for (; n < Qe.length; n++) {
    const r = Qe[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid)
        continue;
      Qe.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Dd(t) {
  if (Ai.length) {
    const e = [...new Set(Ai)].sort(
      (n, r) => Ta(n) - Ta(r)
    );
    if (Ai.length = 0, Pr) {
      Pr.push(...e);
      return;
    }
    for (Pr = e, _i = 0; _i < Pr.length; _i++) {
      const n = Pr[_i];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Pr = null, _i = 0;
  }
}
const Ta = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Rd(t) {
  try {
    for (Un = 0; Un < Qe.length; Un++) {
      const e = Qe[Un];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Va(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Un < Qe.length; Un++) {
      const e = Qe[Un];
      e && (e.flags &= -2);
    }
    Un = -1, Qe.length = 0, Dd(), Ho = null, (Qe.length || Ai.length) && Rd();
  }
}
let Pn = null, Ld = null;
function $o(t) {
  const e = Pn;
  return Pn = t, Ld = t && t.type.__scopeId || null, e;
}
function X0(t, e = Pn, n) {
  if (!e || t._n)
    return t;
  const r = (...a) => {
    r._d && tf(-1);
    const s = $o(e);
    let u;
    try {
      u = t(...a);
    } finally {
      $o(s), r._d && tf(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Or(t, e, n, r) {
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
function Z0(t, e) {
  if (Ue) {
    let n = Ue.provides;
    const r = Ue.parent && Ue.parent.provides;
    r === n && (n = Ue.provides = Object.create(r)), n[t] = e;
  }
}
function Mo(t, e, n = !1) {
  const r = Xm();
  if (r || Ii) {
    let a = Ii ? Ii._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && t in a)
      return a[t];
    if (arguments.length > 1)
      return n && Ht(e) ? e.call(r && r.proxy) : e;
  }
}
const J0 = /* @__PURE__ */ Symbol.for("v-scx"), Q0 = () => Mo(J0);
function ko(t, e, n) {
  return Od(t, e, n);
}
function Od(t, e, n = oe) {
  const { immediate: r, deep: a, flush: s, once: u } = n, f = Ge({}, n), g = e && r || !e && s !== "post";
  let y;
  if (Ra) {
    if (s === "sync") {
      const I = Q0();
      y = I.__watcherHandles || (I.__watcherHandles = []);
    } else if (!g) {
      const I = () => {
      };
      return I.stop = Xn, I.resume = Xn, I.pause = Xn, I;
    }
  }
  const v = Ue;
  f.call = (I, R, D) => Jn(I, v, R, D);
  let d = !1;
  s === "post" ? f.scheduler = (I) => {
    cn(I, v && v.suspense);
  } : s !== "sync" && (d = !0, f.scheduler = (I, R) => {
    R ? I() : ll(I);
  }), f.augmentJob = (I) => {
    e && (I.flags |= 4), d && (I.flags |= 2, v && (I.id = v.uid, I.i = v));
  };
  const M = K0(t, e, f);
  return Ra && (y ? y.push(M) : g && M()), M;
}
function tm(t, e, n) {
  const r = this.proxy, a = Pe(t) ? t.includes(".") ? Fd(r, t) : () => r[t] : t.bind(r, r);
  let s;
  Ht(e) ? s = e : (s = e.handler, n = e);
  const u = Ha(this), f = Od(a, s.bind(r), n);
  return u(), f;
}
function Fd(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const em = /* @__PURE__ */ Symbol("_vte"), nm = (t) => t.__isTeleport, rm = /* @__PURE__ */ Symbol("_leaveCb");
function ul(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, ul(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Vd(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Uu(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const zo = /* @__PURE__ */ new WeakMap();
function _a(t, e, n, r, a = !1) {
  if (Lt(t)) {
    t.forEach(
      (D, A) => _a(
        D,
        e && (Lt(e) ? e[A] : e),
        n,
        r,
        a
      )
    );
    return;
  }
  if (wa(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && _a(t, e, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? pl(r.component) : r.el, u = a ? null : s, { i: f, r: g } = t, y = e && e.r, v = f.refs === oe ? f.refs = {} : f.refs, d = f.setupState, M = /* @__PURE__ */ qt(d), I = d === oe ? ad : (D) => Uu(v, D) ? !1 : Yt(M, D), R = (D, A) => !(A && Uu(v, A));
  if (y != null && y !== g) {
    if (Bu(e), Pe(y))
      v[y] = null, I(y) && (d[y] = null);
    else if (/* @__PURE__ */ Be(y)) {
      const D = e;
      R(y, D.k) && (y.value = null), D.k && (v[D.k] = null);
    }
  }
  if (Ht(g))
    Va(g, f, 12, [u, v]);
  else {
    const D = Pe(g), A = /* @__PURE__ */ Be(g);
    if (D || A) {
      const L = () => {
        if (t.f) {
          const P = D ? I(g) ? d[g] : v[g] : R() || !t.k ? g.value : v[t.k];
          if (a)
            Lt(P) && Zc(P, s);
          else if (Lt(P))
            P.includes(s) || P.push(s);
          else if (D)
            v[g] = [s], I(g) && (d[g] = v[g]);
          else {
            const H = [s];
            R(g, t.k) && (g.value = H), t.k && (v[t.k] = H);
          }
        } else D ? (v[g] = u, I(g) && (d[g] = u)) : A && (R(g, t.k) && (g.value = u), t.k && (v[t.k] = u));
      };
      if (u) {
        const P = () => {
          L(), zo.delete(t);
        };
        P.id = -1, zo.set(t, P), cn(P, n);
      } else
        Bu(t), L();
    }
  }
}
function Bu(t) {
  const e = zo.get(t);
  e && (e.flags |= 8, zo.delete(t));
}
cs().requestIdleCallback;
cs().cancelIdleCallback;
const wa = (t) => !!t.type.__asyncLoader, Hd = (t) => t.type.__isKeepAlive;
function im(t, e) {
  $d(t, "a", e);
}
function am(t, e) {
  $d(t, "da", e);
}
function $d(t, e, n = Ue) {
  const r = t.__wdc || (t.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return t();
  });
  if (hs(e, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Hd(a.parent.vnode) && om(r, e, n, a), a = a.parent;
  }
}
function om(t, e, n, r) {
  const a = hs(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Ud(() => {
    Zc(r[e], a);
  }, n);
}
function hs(t, e, n = Ue, r = !1) {
  if (n) {
    const a = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...u) => {
      ur();
      const f = Ha(n), g = Jn(e, n, t, u);
      return f(), fr(), g;
    });
    return r ? a.unshift(s) : a.push(s), s;
  }
}
const hr = (t) => (e, n = Ue) => {
  (!Ra || t === "sp") && hs(t, (...r) => e(...r), n);
}, sm = hr("bm"), zd = hr("m"), cm = hr(
  "bu"
), lm = hr("u"), jd = hr(
  "bum"
), Ud = hr("um"), um = hr(
  "sp"
), fm = hr("rtg"), dm = hr("rtc");
function hm(t, e = Ue) {
  hs("ec", t, e);
}
const pm = "components", Bd = /* @__PURE__ */ Symbol.for("v-ndc");
function gm(t) {
  return Pe(t) ? mm(pm, t, !1) || t : t || Bd;
}
function mm(t, e, n = !0, r = !1) {
  const a = Pn || Ue;
  if (a) {
    const s = a.type;
    {
      const f = e1(
        s,
        !1
      );
      if (f && (f === e || f === nn(e) || f === ss(nn(e))))
        return s;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Gu(a[t] || s[t], e) || // global registration
      Gu(a.appContext[t], e)
    );
    return !u && r ? s : u;
  }
}
function Gu(t, e) {
  return t && (t[e] || t[nn(e)] || t[ss(nn(e))]);
}
function Ci(t, e, n, r) {
  let a;
  const s = n, u = Lt(t);
  if (u || Pe(t)) {
    const f = u && /* @__PURE__ */ Gr(t);
    let g = !1, y = !1;
    f && (g = !/* @__PURE__ */ yn(t), y = /* @__PURE__ */ dr(t), t = fs(t)), a = new Array(t.length);
    for (let v = 0, d = t.length; v < d; v++)
      a[v] = e(
        g ? y ? Ri(Cn(t[v])) : Cn(t[v]) : t[v],
        v,
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
        const v = f[g];
        a[g] = e(t[v], v, g, s);
      }
    }
  else
    a = [];
  return a;
}
const Tc = (t) => t ? hh(t) ? pl(t) : Tc(t.parent) : null, xa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ge(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Tc(t.parent),
    $root: (t) => Tc(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Kd(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      ll(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Ed.bind(t.proxy)),
    $watch: (t) => tm.bind(t)
  })
), cc = (t, e) => t !== oe && !t.__isScriptSetup && Yt(t, e), ym = {
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
        if (a !== oe && Yt(a, e))
          return u[e] = 2, a[e];
        if (Yt(s, e))
          return u[e] = 3, s[e];
        if (n !== oe && Yt(n, e))
          return u[e] = 4, n[e];
        Dc && (u[e] = 0);
      }
    }
    const y = xa[e];
    let v, d;
    if (y)
      return e === "$attrs" && ze(t.attrs, "get", ""), y(t);
    if (
      // css module (injected by vue-loader)
      (v = f.__cssModules) && (v = v[e])
    )
      return v;
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
    return cc(a, e) ? (a[e] = n, !0) : r !== oe && Yt(r, e) ? (r[e] = n, !0) : Yt(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: a, props: s, type: u }
  }, f) {
    let g;
    return !!(n[f] || t !== oe && f[0] !== "$" && Yt(t, f) || cc(e, f) || Yt(s, f) || Yt(r, f) || Yt(xa, f) || Yt(a.config.globalProperties, f) || (g = u.__cssModules) && g[f]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : Yt(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Ku(t) {
  return Lt(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Dc = !0;
function bm(t) {
  const e = Kd(t), n = t.proxy, r = t.ctx;
  Dc = !1, e.beforeCreate && Wu(e.beforeCreate, t, "bc");
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
    beforeUpdate: I,
    updated: R,
    activated: D,
    deactivated: A,
    beforeDestroy: L,
    beforeUnmount: P,
    destroyed: H,
    unmounted: F,
    render: B,
    renderTracked: C,
    renderTriggered: ct,
    errorCaptured: Q,
    serverPrefetch: St,
    // public API
    expose: z,
    inheritAttrs: pt,
    // assets
    components: Nt,
    directives: J,
    filters: et
  } = e;
  if (y && vm(y, r, null), u)
    for (const lt in u) {
      const yt = u[lt];
      Ht(yt) && (r[lt] = yt.bind(n));
    }
  if (a) {
    const lt = a.call(n, n);
    ee(lt) && (t.data = /* @__PURE__ */ al(lt));
  }
  if (Dc = !0, s)
    for (const lt in s) {
      const yt = s[lt], Mt = Ht(yt) ? yt.bind(n, n) : Ht(yt.get) ? yt.get.bind(n, n) : Xn, Et = !Ht(yt) && Ht(yt.set) ? yt.set.bind(n) : Xn, nt = Ei({
        get: Mt,
        set: Et
      });
      Object.defineProperty(r, lt, {
        enumerable: !0,
        configurable: !0,
        get: () => nt.value,
        set: (bt) => nt.value = bt
      });
    }
  if (f)
    for (const lt in f)
      Gd(f[lt], r, n, lt);
  if (g) {
    const lt = Ht(g) ? g.call(n) : g;
    Reflect.ownKeys(lt).forEach((yt) => {
      Z0(yt, lt[yt]);
    });
  }
  v && Wu(v, t, "c");
  function at(lt, yt) {
    Lt(yt) ? yt.forEach((Mt) => lt(Mt.bind(n))) : yt && lt(yt.bind(n));
  }
  if (at(sm, d), at(zd, M), at(cm, I), at(lm, R), at(im, D), at(am, A), at(hm, Q), at(dm, C), at(fm, ct), at(jd, P), at(Ud, F), at(um, St), Lt(z))
    if (z.length) {
      const lt = t.exposed || (t.exposed = {});
      z.forEach((yt) => {
        Object.defineProperty(lt, yt, {
          get: () => n[yt],
          set: (Mt) => n[yt] = Mt,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  B && t.render === Xn && (t.render = B), pt != null && (t.inheritAttrs = pt), Nt && (t.components = Nt), J && (t.directives = J), St && Vd(t);
}
function vm(t, e, n = Xn) {
  Lt(t) && (t = Rc(t));
  for (const r in t) {
    const a = t[r];
    let s;
    ee(a) ? "default" in a ? s = Mo(
      a.from || r,
      a.default,
      !0
    ) : s = Mo(a.from || r) : s = Mo(a), /* @__PURE__ */ Be(s) ? Object.defineProperty(e, r, {
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
function Gd(t, e, n, r) {
  let a = r.includes(".") ? Fd(n, r) : () => n[r];
  if (Pe(t)) {
    const s = e[t];
    Ht(s) && ko(a, s);
  } else if (Ht(t))
    ko(a, t.bind(n));
  else if (ee(t))
    if (Lt(t))
      t.forEach((s) => Gd(s, e, n, r));
    else {
      const s = Ht(t.handler) ? t.handler.bind(n) : e[t.handler];
      Ht(s) && ko(a, s, t);
    }
}
function Kd(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: a,
    optionsCache: s,
    config: { optionMergeStrategies: u }
  } = t.appContext, f = s.get(e);
  let g;
  return f ? g = f : !a.length && !n && !r ? g = e : (g = {}, a.length && a.forEach(
    (y) => jo(g, y, u, !0)
  ), jo(g, e, u)), ee(e) && s.set(e, g), g;
}
function jo(t, e, n, r = !1) {
  const { mixins: a, extends: s } = e;
  s && jo(t, s, n, !0), a && a.forEach(
    (u) => jo(t, u, n, !0)
  );
  for (const u in e)
    if (!(r && u === "expose")) {
      const f = _m[u] || n && n[u];
      t[u] = f ? f(t[u], e[u]) : e[u];
    }
  return t;
}
const _m = {
  data: qu,
  props: Yu,
  emits: Yu,
  // objects
  methods: da,
  computed: da,
  // lifecycle
  beforeCreate: Je,
  created: Je,
  beforeMount: Je,
  mounted: Je,
  beforeUpdate: Je,
  updated: Je,
  beforeDestroy: Je,
  beforeUnmount: Je,
  destroyed: Je,
  unmounted: Je,
  activated: Je,
  deactivated: Je,
  errorCaptured: Je,
  serverPrefetch: Je,
  // assets
  components: da,
  directives: da,
  // watch
  watch: xm,
  // provide / inject
  provide: qu,
  inject: wm
};
function qu(t, e) {
  return e ? t ? function() {
    return Ge(
      Ht(t) ? t.call(this, this) : t,
      Ht(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function wm(t, e) {
  return da(Rc(t), Rc(e));
}
function Rc(t) {
  if (Lt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Je(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function da(t, e) {
  return t ? Ge(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Yu(t, e) {
  return t ? Lt(t) && Lt(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Ge(
    /* @__PURE__ */ Object.create(null),
    Ku(t),
    Ku(e ?? {})
  ) : e;
}
function xm(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Ge(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = Je(t[r], e[r]);
  return n;
}
function Wd() {
  return {
    app: null,
    config: {
      isNativeTag: ad,
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
let Sm = 0;
function Nm(t, e) {
  return function(r, a = null) {
    Ht(r) || (r = Ge({}, r)), a != null && !ee(a) && (a = null);
    const s = Wd(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let g = !1;
    const y = s.app = {
      _uid: Sm++,
      _component: r,
      _props: a,
      _container: null,
      _context: s,
      _instance: null,
      version: r1,
      get config() {
        return s.config;
      },
      set config(v) {
      },
      use(v, ...d) {
        return u.has(v) || (v && Ht(v.install) ? (u.add(v), v.install(y, ...d)) : Ht(v) && (u.add(v), v(y, ...d))), y;
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
          const I = y._ceVNode || en(r, a);
          return I.appContext = s, M === !0 ? M = "svg" : M === !1 && (M = void 0), t(I, v, M), g = !0, y._container = v, v.__vue_app__ = y, pl(I.component);
        }
      },
      onUnmount(v) {
        f.push(v);
      },
      unmount() {
        g && (Jn(
          f,
          y._instance,
          16
        ), t(null, y._container), delete y._container.__vue_app__);
      },
      provide(v, d) {
        return s.provides[v] = d, y;
      },
      runWithContext(v) {
        const d = Ii;
        Ii = y;
        try {
          return v();
        } finally {
          Ii = d;
        }
      }
    };
    return y;
  };
}
let Ii = null;
const Mm = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${nn(e)}Modifiers`] || t[`${Zr(e)}Modifiers`];
function km(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || oe;
  let a = n;
  const s = e.startsWith("update:"), u = s && Mm(r, e.slice(7));
  u && (u.trim && (a = n.map((v) => Pe(v) ? v.trim() : v)), u.number && (a = n.map(l0)));
  let f, g = r[f = nc(e)] || // also try camelCase event handler (#2249)
  r[f = nc(nn(e))];
  !g && s && (g = r[f = nc(Zr(e))]), g && Jn(
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
const Pm = /* @__PURE__ */ new WeakMap();
function qd(t, e, n = !1) {
  const r = n ? Pm : e.emitsCache, a = r.get(t);
  if (a !== void 0)
    return a;
  const s = t.emits;
  let u = {}, f = !1;
  if (!Ht(t)) {
    const g = (y) => {
      const v = qd(y, e, !0);
      v && (f = !0, Ge(u, v));
    };
    !n && e.mixins.length && e.mixins.forEach(g), t.extends && g(t.extends), t.mixins && t.mixins.forEach(g);
  }
  return !s && !f ? (ee(t) && r.set(t, null), null) : (Lt(s) ? s.forEach((g) => u[g] = null) : Ge(u, s), ee(t) && r.set(t, u), u);
}
function ps(t, e) {
  return !t || !is(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Yt(t, e[0].toLowerCase() + e.slice(1)) || Yt(t, Zr(e)) || Yt(t, e));
}
function Xu(t) {
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
    setupState: I,
    ctx: R,
    inheritAttrs: D
  } = t, A = $o(t);
  let L, P;
  try {
    if (n.shapeFlag & 4) {
      const F = a || r, B = F;
      L = Kn(
        y.call(
          B,
          F,
          v,
          d,
          I,
          M,
          R
        )
      ), P = f;
    } else {
      const F = e;
      L = Kn(
        F.length > 1 ? F(
          d,
          { attrs: f, slots: u, emit: g }
        ) : F(
          d,
          null
        )
      ), P = e.props ? f : Am(f);
    }
  } catch (F) {
    Sa.length = 0, ds(F, t, 1), L = en(Cr);
  }
  let H = L;
  if (P && D !== !1) {
    const F = Object.keys(P), { shapeFlag: B } = H;
    F.length && B & 7 && (s && F.some(as) && (P = Cm(
      P,
      s
    )), H = Li(H, P, !1, !0));
  }
  return n.dirs && (H = Li(H, null, !1, !0), H.dirs = H.dirs ? H.dirs.concat(n.dirs) : n.dirs), n.transition && ul(H, n.transition), L = H, $o(A), L;
}
const Am = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || is(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, Cm = (t, e) => {
  const n = {};
  for (const r in t)
    (!as(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function Im(t, e, n) {
  const { props: r, children: a, component: s } = t, { props: u, children: f, patchFlag: g } = e, y = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return r ? Zu(r, u, y) : !!u;
    if (g & 8) {
      const v = e.dynamicProps;
      for (let d = 0; d < v.length; d++) {
        const M = v[d];
        if (Yd(u, r, M) && !ps(y, M))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? Zu(r, u, y) : !0 : !!u;
  return !1;
}
function Zu(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (Yd(e, t, s) && !ps(n, s))
      return !0;
  }
  return !1;
}
function Yd(t, e, n) {
  const r = t[n], a = e[n];
  return n === "style" && ee(r) && ee(a) ? !Qc(r, a) : r !== a;
}
function Em({ vnode: t, parent: e, suspense: n }, r) {
  for (; e; ) {
    const a = e.subTree;
    if (a.suspense && a.suspense.activeBranch === t && (a.suspense.vnode.el = a.el = r, t = a), a === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = r);
}
const Xd = {}, Zd = () => Object.create(Xd), Jd = (t) => Object.getPrototypeOf(t) === Xd;
function Tm(t, e, n, r = !1) {
  const a = {}, s = Zd();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Qd(t, e, a, s);
  for (const u in t.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? t.props = r ? a : /* @__PURE__ */ F0(a) : t.type.props ? t.props = a : t.props = s, t.attrs = s;
}
function Dm(t, e, n, r) {
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
      const v = t.vnode.dynamicProps;
      for (let d = 0; d < v.length; d++) {
        let M = v[d];
        if (ps(t.emitsOptions, M))
          continue;
        const I = e[M];
        if (g)
          if (Yt(s, M))
            I !== s[M] && (s[M] = I, y = !0);
          else {
            const R = nn(M);
            a[R] = Lc(
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
    Qd(t, e, a, s) && (y = !0);
    let v;
    for (const d in f)
      (!e || // for camelCase
      !Yt(e, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = Zr(d)) === d || !Yt(e, v))) && (g ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[v] !== void 0) && (a[d] = Lc(
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
function Qd(t, e, n, r) {
  const [a, s] = t.propsOptions;
  let u = !1, f;
  if (e)
    for (let g in e) {
      if (ya(g))
        continue;
      const y = e[g];
      let v;
      a && Yt(a, v = nn(g)) ? !s || !s.includes(v) ? n[v] = y : (f || (f = {}))[v] = y : ps(t.emitsOptions, g) || (!(g in r) || y !== r[g]) && (r[g] = y, u = !0);
    }
  if (s) {
    const g = /* @__PURE__ */ qt(n), y = f || oe;
    for (let v = 0; v < s.length; v++) {
      const d = s[v];
      n[d] = Lc(
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
function Lc(t, e, n, r, a, s) {
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
          const v = Ha(a);
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
    ] && (r === "" || r === Zr(n)) && (r = !0));
  }
  return r;
}
const Rm = /* @__PURE__ */ new WeakMap();
function th(t, e, n = !1) {
  const r = n ? Rm : e.propsCache, a = r.get(t);
  if (a)
    return a;
  const s = t.props, u = {}, f = [];
  let g = !1;
  if (!Ht(t)) {
    const v = (d) => {
      g = !0;
      const [M, I] = th(d, e, !0);
      Ge(u, M), I && f.push(...I);
    };
    !n && e.mixins.length && e.mixins.forEach(v), t.extends && v(t.extends), t.mixins && t.mixins.forEach(v);
  }
  if (!s && !g)
    return ee(t) && r.set(t, ki), ki;
  if (Lt(s))
    for (let v = 0; v < s.length; v++) {
      const d = nn(s[v]);
      Ju(d) && (u[d] = oe);
    }
  else if (s)
    for (const v in s) {
      const d = nn(v);
      if (Ju(d)) {
        const M = s[v], I = u[d] = Lt(M) || Ht(M) ? { type: M } : Ge({}, M), R = I.type;
        let D = !1, A = !0;
        if (Lt(R))
          for (let L = 0; L < R.length; ++L) {
            const P = R[L], H = Ht(P) && P.name;
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
function Ju(t) {
  return t[0] !== "$" && !ya(t);
}
const fl = (t) => t === "_" || t === "_ctx" || t === "$stable", dl = (t) => Lt(t) ? t.map(Kn) : [Kn(t)], Lm = (t, e, n) => {
  if (e._n)
    return e;
  const r = X0((...a) => dl(e(...a)), n);
  return r._c = !1, r;
}, eh = (t, e, n) => {
  const r = t._ctx;
  for (const a in t) {
    if (fl(a)) continue;
    const s = t[a];
    if (Ht(s))
      e[a] = Lm(a, s, r);
    else if (s != null) {
      const u = dl(s);
      e[a] = () => u;
    }
  }
}, nh = (t, e) => {
  const n = dl(e);
  t.slots.default = () => n;
}, rh = (t, e, n) => {
  for (const r in e)
    (n || !fl(r)) && (t[r] = e[r]);
}, Om = (t, e, n) => {
  const r = t.slots = Zd();
  if (t.vnode.shapeFlag & 32) {
    const a = e._;
    a ? (rh(r, e, n), n && ud(r, "_", a, !0)) : eh(e, r);
  } else e && nh(t, e);
}, Fm = (t, e, n) => {
  const { vnode: r, slots: a } = t;
  let s = !0, u = oe;
  if (r.shapeFlag & 32) {
    const f = e._;
    f ? n && f === 1 ? s = !1 : rh(a, e, n) : (s = !e.$stable, eh(e, a)), u = e;
  } else e && (nh(t, e), u = { default: 1 });
  if (s)
    for (const f in a)
      !fl(f) && u[f] == null && delete a[f];
}, cn = jm;
function Vm(t) {
  return Hm(t);
}
function Hm(t, e) {
  const n = cs();
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
    setScopeId: I = Xn,
    insertStaticContent: R
  } = t, D = (x, E, V, q = null, G = null, K = null, Z = void 0, rt = null, tt = !!E.dynamicChildren) => {
    if (x === E)
      return;
    x && !ia(x, E) && (q = Ae(x), bt(x, G, K, !0), x = null), E.patchFlag === -2 && (tt = !1, E.dynamicChildren = null);
    const { type: X, ref: mt, shapeFlag: it } = E;
    switch (X) {
      case gs:
        A(x, E, V, q);
        break;
      case Cr:
        L(x, E, V, q);
        break;
      case Po:
        x == null && P(E, V, q, Z);
        break;
      case je:
        Nt(
          x,
          E,
          V,
          q,
          G,
          K,
          Z,
          rt,
          tt
        );
        break;
      default:
        it & 1 ? B(
          x,
          E,
          V,
          q,
          G,
          K,
          Z,
          rt,
          tt
        ) : it & 6 ? J(
          x,
          E,
          V,
          q,
          G,
          K,
          Z,
          rt,
          tt
        ) : (it & 64 || it & 128) && X.process(
          x,
          E,
          V,
          q,
          G,
          K,
          Z,
          rt,
          tt,
          rn
        );
    }
    mt != null && G ? _a(mt, x && x.ref, K, E || x, !E) : mt == null && x && x.ref != null && _a(x.ref, null, K, x, !0);
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
  }, L = (x, E, V, q) => {
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
  }, F = ({ el: x, anchor: E }) => {
    let V;
    for (; x && x !== E; )
      V = M(x), a(x), x = V;
    a(E);
  }, B = (x, E, V, q, G, K, Z, rt, tt) => {
    if (E.type === "svg" ? Z = "svg" : E.type === "math" && (Z = "mathml"), x == null)
      C(
        E,
        V,
        q,
        G,
        K,
        Z,
        rt,
        tt
      );
    else {
      const X = x.el && x.el._isVueCE ? x.el : null;
      try {
        X && X._beginPatch(), St(
          x,
          E,
          G,
          K,
          Z,
          rt,
          tt
        );
      } finally {
        X && X._endPatch();
      }
    }
  }, C = (x, E, V, q, G, K, Z, rt) => {
    let tt, X;
    const { props: mt, shapeFlag: it, transition: wt, dirs: Tt } = x;
    if (tt = x.el = u(
      x.type,
      K,
      mt && mt.is,
      mt
    ), it & 8 ? v(tt, x.children) : it & 16 && Q(
      x.children,
      tt,
      null,
      q,
      G,
      lc(x, K),
      Z,
      rt
    ), Tt && Or(x, null, q, "created"), ct(tt, x, x.scopeId, Z, q), mt) {
      for (const jt in mt)
        jt !== "value" && !ya(jt) && s(tt, jt, null, mt[jt], K, q);
      "value" in mt && s(tt, "value", null, mt.value, K), (X = mt.onVnodeBeforeMount) && $n(X, q, x);
    }
    Tt && Or(x, null, q, "beforeMount");
    const p = $m(G, wt);
    p && wt.beforeEnter(tt), r(tt, E, V), ((X = mt && mt.onVnodeMounted) || p || Tt) && cn(() => {
      try {
        X && $n(X, q, x), p && wt.enter(tt), Tt && Or(x, null, q, "mounted");
      } finally {
      }
    }, G);
  }, ct = (x, E, V, q, G) => {
    if (V && I(x, V), q)
      for (let K = 0; K < q.length; K++)
        I(x, q[K]);
    if (G) {
      let K = G.subTree;
      if (E === K || sh(K.type) && (K.ssContent === E || K.ssFallback === E)) {
        const Z = G.vnode;
        ct(
          x,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          G.parent
        );
      }
    }
  }, Q = (x, E, V, q, G, K, Z, rt, tt = 0) => {
    for (let X = tt; X < x.length; X++) {
      const mt = x[X] = rt ? cr(x[X]) : Kn(x[X]);
      D(
        null,
        mt,
        E,
        V,
        q,
        G,
        K,
        Z,
        rt
      );
    }
  }, St = (x, E, V, q, G, K, Z) => {
    const rt = E.el = x.el;
    let { patchFlag: tt, dynamicChildren: X, dirs: mt } = E;
    tt |= x.patchFlag & 16;
    const it = x.props || oe, wt = E.props || oe;
    let Tt;
    if (V && Fr(V, !1), (Tt = wt.onVnodeBeforeUpdate) && $n(Tt, V, E, x), mt && Or(E, x, V, "beforeUpdate"), V && Fr(V, !0), (it.innerHTML && wt.innerHTML == null || it.textContent && wt.textContent == null) && v(rt, ""), X ? z(
      x.dynamicChildren,
      X,
      rt,
      V,
      q,
      lc(E, G),
      K
    ) : Z || yt(
      x,
      E,
      rt,
      null,
      V,
      q,
      lc(E, G),
      K,
      !1
    ), tt > 0) {
      if (tt & 16)
        pt(rt, it, wt, V, G);
      else if (tt & 2 && it.class !== wt.class && s(rt, "class", null, wt.class, G), tt & 4 && s(rt, "style", it.style, wt.style, G), tt & 8) {
        const p = E.dynamicProps;
        for (let jt = 0; jt < p.length; jt++) {
          const Xt = p[jt], he = it[Xt], xe = wt[Xt];
          (xe !== he || Xt === "value") && s(rt, Xt, he, xe, G, V);
        }
      }
      tt & 1 && x.children !== E.children && v(rt, E.children);
    } else !Z && X == null && pt(rt, it, wt, V, G);
    ((Tt = wt.onVnodeUpdated) || mt) && cn(() => {
      Tt && $n(Tt, V, E, x), mt && Or(E, x, V, "updated");
    }, q);
  }, z = (x, E, V, q, G, K, Z) => {
    for (let rt = 0; rt < E.length; rt++) {
      const tt = x[rt], X = E[rt], mt = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        tt.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (tt.type === je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ia(tt, X) || // - In the case of a component, it could contain anything.
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
        K,
        Z,
        !0
      );
    }
  }, pt = (x, E, V, q, G) => {
    if (E !== V) {
      if (E !== oe)
        for (const K in E)
          !ya(K) && !(K in V) && s(
            x,
            K,
            E[K],
            null,
            G,
            q
          );
      for (const K in V) {
        if (ya(K)) continue;
        const Z = V[K], rt = E[K];
        Z !== rt && K !== "value" && s(x, K, rt, Z, G, q);
      }
      "value" in V && s(x, "value", E.value, V.value, G);
    }
  }, Nt = (x, E, V, q, G, K, Z, rt, tt) => {
    const X = E.el = x ? x.el : f(""), mt = E.anchor = x ? x.anchor : f("");
    let { patchFlag: it, dynamicChildren: wt, slotScopeIds: Tt } = E;
    Tt && (rt = rt ? rt.concat(Tt) : Tt), x == null ? (r(X, V, q), r(mt, V, q), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      E.children || [],
      V,
      mt,
      G,
      K,
      Z,
      rt,
      tt
    )) : it > 0 && it & 64 && wt && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    x.dynamicChildren && x.dynamicChildren.length === wt.length ? (z(
      x.dynamicChildren,
      wt,
      V,
      G,
      K,
      Z,
      rt
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (E.key != null || G && E === G.subTree) && ih(
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
      K,
      Z,
      rt,
      tt
    );
  }, J = (x, E, V, q, G, K, Z, rt, tt) => {
    E.slotScopeIds = rt, x == null ? E.shapeFlag & 512 ? G.ctx.activate(
      E,
      V,
      q,
      Z,
      tt
    ) : et(
      E,
      V,
      q,
      G,
      K,
      Z,
      tt
    ) : Y(x, E, tt);
  }, et = (x, E, V, q, G, K, Z) => {
    const rt = x.component = Ym(
      x,
      q,
      G
    );
    if (Hd(x) && (rt.ctx.renderer = rn), Zm(rt, !1, Z), rt.asyncDep) {
      if (G && G.registerDep(rt, at, Z), !x.el) {
        const tt = rt.subTree = en(Cr);
        L(null, tt, E, V), x.placeholder = tt.el;
      }
    } else
      at(
        rt,
        x,
        E,
        V,
        G,
        K,
        Z
      );
  }, Y = (x, E, V) => {
    const q = E.component = x.component;
    if (Im(x, E, V))
      if (q.asyncDep && !q.asyncResolved) {
        lt(q, E, V);
        return;
      } else
        q.next = E, q.update();
    else
      E.el = x.el, q.vnode = E;
  }, at = (x, E, V, q, G, K, Z) => {
    const rt = () => {
      if (x.isMounted) {
        let { next: it, bu: wt, u: Tt, parent: p, vnode: jt } = x;
        {
          const Se = ah(x);
          if (Se) {
            it && (it.el = jt.el, lt(x, it, Z)), Se.asyncDep.then(() => {
              cn(() => {
                x.isUnmounted || X();
              }, G);
            });
            return;
          }
        }
        let Xt = it, he;
        Fr(x, !1), it ? (it.el = jt.el, lt(x, it, Z)) : it = jt, wt && rc(wt), (he = it.props && it.props.onVnodeBeforeUpdate) && $n(he, p, it, jt), Fr(x, !0);
        const xe = Xu(x), Pt = x.subTree;
        x.subTree = xe, D(
          Pt,
          xe,
          // parent may have changed if it's in a teleport
          d(Pt.el),
          // anchor may have changed if it's in a fragment
          Ae(Pt),
          x,
          G,
          K
        ), it.el = xe.el, Xt === null && Em(x, xe.el), Tt && cn(Tt, G), (he = it.props && it.props.onVnodeUpdated) && cn(
          () => $n(he, p, it, jt),
          G
        );
      } else {
        let it;
        const { el: wt, props: Tt } = E, { bm: p, m: jt, parent: Xt, root: he, type: xe } = x, Pt = wa(E);
        Fr(x, !1), p && rc(p), !Pt && (it = Tt && Tt.onVnodeBeforeMount) && $n(it, Xt, E), Fr(x, !0);
        {
          he.ce && he.ce._hasShadowRoot() && he.ce._injectChildStyle(
            xe,
            x.parent ? x.parent.type : void 0
          );
          const Se = x.subTree = Xu(x);
          D(
            null,
            Se,
            V,
            q,
            x,
            G,
            K
          ), E.el = Se.el;
        }
        if (jt && cn(jt, G), !Pt && (it = Tt && Tt.onVnodeMounted)) {
          const Se = E;
          cn(
            () => $n(it, Xt, Se),
            G
          );
        }
        (E.shapeFlag & 256 || Xt && wa(Xt.vnode) && Xt.vnode.shapeFlag & 256) && x.a && cn(x.a, G), x.isMounted = !0, E = V = q = null;
      }
    };
    x.scope.on();
    const tt = x.effect = new gd(rt);
    x.scope.off();
    const X = x.update = tt.run.bind(tt), mt = x.job = tt.runIfDirty.bind(tt);
    mt.i = x, mt.id = x.uid, tt.scheduler = () => ll(mt), Fr(x, !0), X();
  }, lt = (x, E, V) => {
    E.component = x;
    const q = x.vnode.props;
    x.vnode = E, x.next = null, Dm(x, E.props, q, V), Fm(x, E.children, V), ur(), ju(x), fr();
  }, yt = (x, E, V, q, G, K, Z, rt, tt = !1) => {
    const X = x && x.children, mt = x ? x.shapeFlag : 0, it = E.children, { patchFlag: wt, shapeFlag: Tt } = E;
    if (wt > 0) {
      if (wt & 128) {
        Et(
          X,
          it,
          V,
          q,
          G,
          K,
          Z,
          rt,
          tt
        );
        return;
      } else if (wt & 256) {
        Mt(
          X,
          it,
          V,
          q,
          G,
          K,
          Z,
          rt,
          tt
        );
        return;
      }
    }
    Tt & 8 ? (mt & 16 && ye(X, G, K), it !== X && v(V, it)) : mt & 16 ? Tt & 16 ? Et(
      X,
      it,
      V,
      q,
      G,
      K,
      Z,
      rt,
      tt
    ) : ye(X, G, K, !0) : (mt & 8 && v(V, ""), Tt & 16 && Q(
      it,
      V,
      q,
      G,
      K,
      Z,
      rt,
      tt
    ));
  }, Mt = (x, E, V, q, G, K, Z, rt, tt) => {
    x = x || ki, E = E || ki;
    const X = x.length, mt = E.length, it = Math.min(X, mt);
    let wt;
    for (wt = 0; wt < it; wt++) {
      const Tt = E[wt] = tt ? cr(E[wt]) : Kn(E[wt]);
      D(
        x[wt],
        Tt,
        V,
        null,
        G,
        K,
        Z,
        rt,
        tt
      );
    }
    X > mt ? ye(
      x,
      G,
      K,
      !0,
      !1,
      it
    ) : Q(
      E,
      V,
      q,
      G,
      K,
      Z,
      rt,
      tt,
      it
    );
  }, Et = (x, E, V, q, G, K, Z, rt, tt) => {
    let X = 0;
    const mt = E.length;
    let it = x.length - 1, wt = mt - 1;
    for (; X <= it && X <= wt; ) {
      const Tt = x[X], p = E[X] = tt ? cr(E[X]) : Kn(E[X]);
      if (ia(Tt, p))
        D(
          Tt,
          p,
          V,
          null,
          G,
          K,
          Z,
          rt,
          tt
        );
      else
        break;
      X++;
    }
    for (; X <= it && X <= wt; ) {
      const Tt = x[it], p = E[wt] = tt ? cr(E[wt]) : Kn(E[wt]);
      if (ia(Tt, p))
        D(
          Tt,
          p,
          V,
          null,
          G,
          K,
          Z,
          rt,
          tt
        );
      else
        break;
      it--, wt--;
    }
    if (X > it) {
      if (X <= wt) {
        const Tt = wt + 1, p = Tt < mt ? E[Tt].el : q;
        for (; X <= wt; )
          D(
            null,
            E[X] = tt ? cr(E[X]) : Kn(E[X]),
            V,
            p,
            G,
            K,
            Z,
            rt,
            tt
          ), X++;
      }
    } else if (X > wt)
      for (; X <= it; )
        bt(x[X], G, K, !0), X++;
    else {
      const Tt = X, p = X, jt = /* @__PURE__ */ new Map();
      for (X = p; X <= wt; X++) {
        const Ne = E[X] = tt ? cr(E[X]) : Kn(E[X]);
        Ne.key != null && jt.set(Ne.key, X);
      }
      let Xt, he = 0;
      const xe = wt - p + 1;
      let Pt = !1, Se = 0;
      const Te = new Array(xe);
      for (X = 0; X < xe; X++) Te[X] = 0;
      for (X = Tt; X <= it; X++) {
        const Ne = x[X];
        if (he >= xe) {
          bt(Ne, G, K, !0);
          continue;
        }
        let an;
        if (Ne.key != null)
          an = jt.get(Ne.key);
        else
          for (Xt = p; Xt <= wt; Xt++)
            if (Te[Xt - p] === 0 && ia(Ne, E[Xt])) {
              an = Xt;
              break;
            }
        an === void 0 ? bt(Ne, G, K, !0) : (Te[an - p] = X + 1, an >= Se ? Se = an : Pt = !0, D(
          Ne,
          E[an],
          V,
          null,
          G,
          K,
          Z,
          rt,
          tt
        ), he++);
      }
      const Jr = Pt ? zm(Te) : ki;
      for (Xt = Jr.length - 1, X = xe - 1; X >= 0; X--) {
        const Ne = p + X, an = E[Ne], bn = E[Ne + 1], Ie = Ne + 1 < mt ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          bn.el || oh(bn)
        ) : q;
        Te[X] === 0 ? D(
          null,
          an,
          V,
          Ie,
          G,
          K,
          Z,
          rt,
          tt
        ) : Pt && (Xt < 0 || X !== Jr[Xt] ? nt(an, V, Ie, 2) : Xt--);
      }
    }
  }, nt = (x, E, V, q, G = null) => {
    const { el: K, type: Z, transition: rt, children: tt, shapeFlag: X } = x;
    if (X & 6) {
      nt(x.component.subTree, E, V, q);
      return;
    }
    if (X & 128) {
      x.suspense.move(E, V, q);
      return;
    }
    if (X & 64) {
      Z.move(x, E, V, rn);
      return;
    }
    if (Z === je) {
      r(K, E, V);
      for (let it = 0; it < tt.length; it++)
        nt(tt[it], E, V, q);
      r(x.anchor, E, V);
      return;
    }
    if (Z === Po) {
      H(x, E, V);
      return;
    }
    if (q !== 2 && X & 1 && rt)
      if (q === 0)
        rt.beforeEnter(K), r(K, E, V), cn(() => rt.enter(K), G);
      else {
        const { leave: it, delayLeave: wt, afterLeave: Tt } = rt, p = () => {
          x.ctx.isUnmounted ? a(K) : r(K, E, V);
        }, jt = () => {
          K._isLeaving && K[rm](
            !0
            /* cancelled */
          ), it(K, () => {
            p(), Tt && Tt();
          });
        };
        wt ? wt(K, p, jt) : jt();
      }
    else
      r(K, E, V);
  }, bt = (x, E, V, q = !1, G = !1) => {
    const {
      type: K,
      props: Z,
      ref: rt,
      children: tt,
      dynamicChildren: X,
      shapeFlag: mt,
      patchFlag: it,
      dirs: wt,
      cacheIndex: Tt,
      memo: p
    } = x;
    if (it === -2 && (G = !1), rt != null && (ur(), _a(rt, null, V, x, !0), fr()), Tt != null && (E.renderCache[Tt] = void 0), mt & 256) {
      E.ctx.deactivate(x);
      return;
    }
    const jt = mt & 1 && wt, Xt = !wa(x);
    let he;
    if (Xt && (he = Z && Z.onVnodeBeforeUnmount) && $n(he, E, x), mt & 6)
      se(x.component, V, q);
    else {
      if (mt & 128) {
        x.suspense.unmount(V, q);
        return;
      }
      jt && Or(x, null, E, "beforeUnmount"), mt & 64 ? x.type.remove(
        x,
        E,
        V,
        rn,
        q
      ) : X && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !X.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (K !== je || it > 0 && it & 64) ? ye(
        X,
        E,
        V,
        !1,
        !0
      ) : (K === je && it & 384 || !G && mt & 16) && ye(tt, E, V), q && It(x);
    }
    const xe = p != null && Tt == null;
    (Xt && (he = Z && Z.onVnodeUnmounted) || jt || xe) && cn(() => {
      he && $n(he, E, x), jt && Or(x, null, E, "unmounted"), xe && (x.el = null);
    }, V);
  }, It = (x) => {
    const { type: E, el: V, anchor: q, transition: G } = x;
    if (E === je) {
      de(V, q);
      return;
    }
    if (E === Po) {
      F(x);
      return;
    }
    const K = () => {
      a(V), G && !G.persisted && G.afterLeave && G.afterLeave();
    };
    if (x.shapeFlag & 1 && G && !G.persisted) {
      const { leave: Z, delayLeave: rt } = G, tt = () => Z(V, K);
      rt ? rt(x.el, K, tt) : tt();
    } else
      K();
  }, de = (x, E) => {
    let V;
    for (; x !== E; )
      V = M(x), a(x), x = V;
    a(E);
  }, se = (x, E, V) => {
    const { bum: q, scope: G, job: K, subTree: Z, um: rt, m: tt, a: X } = x;
    Qu(tt), Qu(X), q && rc(q), G.stop(), K && (K.flags |= 8, bt(Z, x, E, V)), rt && cn(rt, E), cn(() => {
      x.isUnmounted = !0;
    }, E);
  }, ye = (x, E, V, q = !1, G = !1, K = 0) => {
    for (let Z = K; Z < x.length; Z++)
      bt(x[Z], E, V, q, G);
  }, Ae = (x) => {
    if (x.shapeFlag & 6)
      return Ae(x.component.subTree);
    if (x.shapeFlag & 128)
      return x.suspense.next();
    const E = M(x.anchor || x.el), V = E && E[em];
    return V ? M(V) : E;
  };
  let Ke = !1;
  const Ve = (x, E, V) => {
    let q;
    x == null ? E._vnode && (bt(E._vnode, null, null, !0), q = E._vnode.component) : D(
      E._vnode || null,
      x,
      E,
      null,
      null,
      null,
      V
    ), E._vnode = x, Ke || (Ke = !0, ju(q), Dd(), Ke = !1);
  }, rn = {
    p: D,
    um: bt,
    m: nt,
    r: It,
    mt: et,
    mc: Q,
    pc: yt,
    pbc: z,
    n: Ae,
    o: t
  };
  return {
    render: Ve,
    hydrate: void 0,
    createApp: Nm(Ve)
  };
}
function lc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Fr({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function $m(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function ih(t, e, n = !1) {
  const r = t.children, a = e.children;
  if (Lt(r) && Lt(a))
    for (let s = 0; s < r.length; s++) {
      const u = r[s];
      let f = a[s];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[s] = cr(a[s]), f.el = u.el), !n && f.patchFlag !== -2 && ih(u, f)), f.type === gs && (f.patchFlag === -1 && (f = a[s] = cr(f)), f.el = u.el), f.type === Cr && !f.el && (f.el = u.el);
    }
}
function zm(t) {
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
function ah(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : ah(e);
}
function Qu(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function oh(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? oh(e.subTree) : null;
}
const sh = (t) => t.__isSuspense;
function jm(t, e) {
  e && e.pendingBranch ? Lt(t) ? e.effects.push(...t) : e.effects.push(t) : Y0(t);
}
const je = /* @__PURE__ */ Symbol.for("v-fgt"), gs = /* @__PURE__ */ Symbol.for("v-txt"), Cr = /* @__PURE__ */ Symbol.for("v-cmt"), Po = /* @__PURE__ */ Symbol.for("v-stc"), Sa = [];
let pn = null;
function we(t = !1) {
  Sa.push(pn = t ? null : []);
}
function Um() {
  Sa.pop(), pn = Sa[Sa.length - 1] || null;
}
let Da = 1;
function tf(t, e = !1) {
  Da += t, t < 0 && pn && e && (pn.hasOnce = !0);
}
function ch(t) {
  return t.dynamicChildren = Da > 0 ? pn || ki : null, Um(), Da > 0 && pn && pn.push(t), t;
}
function Fe(t, e, n, r, a, s) {
  return ch(
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
function Vi(t, e, n, r, a) {
  return ch(
    en(
      t,
      e,
      n,
      r,
      a,
      !0
    )
  );
}
function lh(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function ia(t, e) {
  return t.type === e.type && t.key === e.key;
}
const uh = ({ key: t }) => t ?? null, Ao = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Pe(t) || /* @__PURE__ */ Be(t) || Ht(t) ? { i: Pn, r: t, k: e, f: !!n } : t : null);
function ke(t, e = null, n = null, r = 0, a = null, s = t === je ? 0 : 1, u = !1, f = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && uh(e),
    ref: e && Ao(e),
    scopeId: Ld,
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
    ctx: Pn
  };
  return f ? (hl(g, n), s & 128 && t.normalize(g)) : n && (g.shapeFlag |= Pe(n) ? 8 : 16), Da > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  pn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && pn.push(g), g;
}
const en = Bm;
function Bm(t, e = null, n = null, r = 0, a = null, s = !1) {
  if ((!t || t === Bd) && (t = Cr), lh(t)) {
    const f = Li(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && hl(f, n), Da > 0 && !s && pn && (f.shapeFlag & 6 ? pn[pn.indexOf(t)] = f : pn.push(f)), f.patchFlag = -2, f;
  }
  if (n1(t) && (t = t.__vccOpts), e) {
    e = Gm(e);
    let { class: f, style: g } = e;
    f && !Pe(f) && (e.class = us(f)), ee(g) && (/* @__PURE__ */ sl(g) && !Lt(g) && (g = Ge({}, g)), e.style = ls(g));
  }
  const u = Pe(t) ? 1 : sh(t) ? 128 : nm(t) ? 64 : ee(t) ? 4 : Ht(t) ? 2 : 0;
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
function Gm(t) {
  return t ? /* @__PURE__ */ sl(t) || Jd(t) ? Ge({}, t) : t : null;
}
function Li(t, e, n = !1, r = !1) {
  const { props: a, ref: s, patchFlag: u, children: f, transition: g } = t, y = e ? dh(a || {}, e) : a, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: y,
    key: y && uh(y),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Lt(s) ? s.concat(Ao(e)) : [s, Ao(e)] : Ao(e)
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
    patchFlag: e && t.type !== je ? u === -1 ? 16 : u | 16 : u,
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
  return g && r && ul(
    v,
    g.clone(v)
  ), v;
}
function Km(t = " ", e = 0) {
  return en(gs, null, t, e);
}
function fh(t, e) {
  const n = en(Po, null, t);
  return n.staticCount = e, n;
}
function Co(t = "", e = !1) {
  return e ? (we(), Vi(Cr, null, t)) : en(Cr, null, t);
}
function Kn(t) {
  return t == null || typeof t == "boolean" ? en(Cr) : Lt(t) ? en(
    je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : lh(t) ? cr(t) : en(gs, null, String(t));
}
function cr(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Li(t);
}
function hl(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Lt(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const a = e.default;
      a && (a._c && (a._d = !1), hl(t, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = e._;
      !a && !Jd(e) ? e._ctx = Pn : a === 3 && Pn && (Pn.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else Ht(e) ? (e = { default: e, _ctx: Pn }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [Km(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function dh(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const a in r)
      if (a === "class")
        e.class !== r.class && (e.class = us([e.class, r.class]));
      else if (a === "style")
        e.style = ls([e.style, r.style]);
      else if (is(a)) {
        const s = e[a], u = r[a];
        u && s !== u && !(Lt(s) && s.includes(u)) ? e[a] = s ? [].concat(s, u) : u : u == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !as(a) && (e[a] = u);
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
let qm = 0;
function Ym(t, e, n) {
  const r = t.type, a = (e ? e.appContext : t.appContext) || Wm, s = {
    uid: qm++,
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
    scope: new y0(
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
    propsOptions: th(r, a),
    emitsOptions: qd(r, a),
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
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = km.bind(null, s), t.ce && t.ce(s), s;
}
let Ue = null;
const Xm = () => Ue || Pn;
let Uo, Oc;
{
  const t = cs(), e = (n, r) => {
    let a;
    return (a = t[n]) || (a = t[n] = []), a.push(r), (s) => {
      a.length > 1 ? a.forEach((u) => u(s)) : a[0](s);
    };
  };
  Uo = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ue = n
  ), Oc = e(
    "__VUE_SSR_SETTERS__",
    (n) => Ra = n
  );
}
const Ha = (t) => {
  const e = Ue;
  return Uo(t), t.scope.on(), () => {
    t.scope.off(), Uo(e);
  };
}, ef = () => {
  Ue && Ue.scope.off(), Uo(null);
};
function hh(t) {
  return t.vnode.shapeFlag & 4;
}
let Ra = !1;
function Zm(t, e = !1, n = !1) {
  e && Oc(e);
  const { props: r, children: a } = t.vnode, s = hh(t);
  Tm(t, r, s, e), Om(t, a, n || e);
  const u = s ? Jm(t, e) : void 0;
  return e && Oc(!1), u;
}
function Jm(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, ym);
  const { setup: r } = n;
  if (r) {
    ur();
    const a = t.setupContext = r.length > 1 ? t1(t) : null, s = Ha(t), u = Va(
      r,
      t,
      0,
      [
        t.props,
        a
      ]
    ), f = sd(u);
    if (fr(), s(), (f || t.sp) && !wa(t) && Vd(t), f) {
      if (u.then(ef, ef), e)
        return u.then((g) => {
          nf(t, g);
        }).catch((g) => {
          ds(g, t, 0);
        });
      t.asyncDep = u;
    } else
      nf(t, u);
  } else
    ph(t);
}
function nf(t, e, n) {
  Ht(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : ee(e) && (t.setupState = Cd(e)), ph(t);
}
function ph(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || Xn);
  {
    const a = Ha(t);
    ur();
    try {
      bm(t);
    } finally {
      fr(), a();
    }
  }
}
const Qm = {
  get(t, e) {
    return ze(t, "get", ""), t[e];
  }
};
function t1(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, Qm),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function pl(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Cd(V0(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in xa)
        return xa[n](t);
    },
    has(e, n) {
      return n in e || n in xa;
    }
  })) : t.proxy;
}
function e1(t, e = !0) {
  return Ht(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function n1(t) {
  return Ht(t) && "__vccOpts" in t;
}
const Ei = (t, e) => /* @__PURE__ */ B0(t, e, Ra), r1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fc;
const rf = typeof window < "u" && window.trustedTypes;
if (rf)
  try {
    Fc = /* @__PURE__ */ rf.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const gh = Fc ? (t) => Fc.createHTML(t) : (t) => t, i1 = "http://www.w3.org/2000/svg", a1 = "http://www.w3.org/1998/Math/MathML", sr = typeof document < "u" ? document : null, af = sr && /* @__PURE__ */ sr.createElement("template"), o1 = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const a = e === "svg" ? sr.createElementNS(i1, t) : e === "mathml" ? sr.createElementNS(a1, t) : n ? sr.createElement(t, { is: n }) : sr.createElement(t);
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
      af.innerHTML = gh(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const f = af.content;
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
}, s1 = /* @__PURE__ */ Symbol("_vtc");
function c1(t, e, n) {
  const r = t[s1];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const of = /* @__PURE__ */ Symbol("_vod"), l1 = /* @__PURE__ */ Symbol("_vsh"), u1 = /* @__PURE__ */ Symbol(""), f1 = /(?:^|;)\s*display\s*:/;
function d1(t, e, n) {
  const r = t.style, a = Pe(n);
  let s = !1;
  if (n && !a) {
    if (e)
      if (Pe(e))
        for (const u of e.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && Io(r, f, "");
        }
      else
        for (const u in e)
          n[u] == null && Io(r, u, "");
    for (const u in n)
      u === "display" && (s = !0), Io(r, u, n[u]);
  } else if (a) {
    if (e !== n) {
      const u = r[u1];
      u && (n += ";" + u), r.cssText = n, s = f1.test(n);
    }
  } else e && t.removeAttribute("style");
  of in t && (t[of] = s ? r.display : "", t[l1] && (r.display = "none"));
}
const sf = /\s*!important$/;
function Io(t, e, n) {
  if (Lt(n))
    n.forEach((r) => Io(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = h1(t, e);
    sf.test(n) ? t.setProperty(
      Zr(r),
      n.replace(sf, ""),
      "important"
    ) : t[r] = n;
  }
}
const cf = ["Webkit", "Moz", "ms"], uc = {};
function h1(t, e) {
  const n = uc[e];
  if (n)
    return n;
  let r = nn(e);
  if (r !== "filter" && r in t)
    return uc[e] = r;
  r = ss(r);
  for (let a = 0; a < cf.length; a++) {
    const s = cf[a] + r;
    if (s in t)
      return uc[e] = s;
  }
  return e;
}
const lf = "http://www.w3.org/1999/xlink";
function uf(t, e, n, r, a, s = g0(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(lf, e.slice(6, e.length)) : t.setAttributeNS(lf, e, n) : n == null || s && !fd(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    s ? "" : Zn(n) ? String(n) : n
  );
}
function ff(t, e, n, r, a) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? gh(n) : n);
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
    f === "boolean" ? n = fd(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(a || e);
}
function p1(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function g1(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const df = /* @__PURE__ */ Symbol("_vei");
function m1(t, e, n, r, a = null) {
  const s = t[df] || (t[df] = {}), u = s[e];
  if (r && u)
    u.value = r;
  else {
    const [f, g] = y1(e);
    if (r) {
      const y = s[e] = _1(
        r,
        a
      );
      p1(t, f, y, g);
    } else u && (g1(t, f, u, g), s[e] = void 0);
  }
}
const hf = /(?:Once|Passive|Capture)$/;
function y1(t) {
  let e;
  if (hf.test(t)) {
    e = {};
    let r;
    for (; r = t.match(hf); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Zr(t.slice(2)), e];
}
let fc = 0;
const b1 = /* @__PURE__ */ Promise.resolve(), v1 = () => fc || (b1.then(() => fc = 0), fc = Date.now());
function _1(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Jn(
      w1(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = v1(), n;
}
function w1(t, e) {
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
const pf = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, x1 = (t, e, n, r, a, s) => {
  const u = a === "svg";
  e === "class" ? c1(t, r, u) : e === "style" ? d1(t, n, r) : is(e) ? as(e) || m1(t, e, n, r, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : S1(t, e, r, u)) ? (ff(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && uf(t, e, r, u, s, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (N1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !Pe(r))) ? ff(t, nn(e), r, s, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), uf(t, e, r, u));
};
function S1(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && pf(e) && Ht(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const a = t.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return pf(e) && Pe(n) ? !1 : e in t;
}
function N1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const r = nn(e);
  return Array.isArray(n) ? n.some((a) => nn(a) === r) : Object.keys(n).some((a) => nn(a) === r);
}
const M1 = ["ctrl", "shift", "alt", "meta"], k1 = {
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
  exact: (t, e) => M1.some((n) => t[`${n}Key`] && !e.includes(n))
}, P1 = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = ((a, ...s) => {
    for (let u = 0; u < e.length; u++) {
      const f = k1[e[u]];
      if (f && f(a, e)) return;
    }
    return t(a, ...s);
  }));
}, A1 = /* @__PURE__ */ Ge({ patchProp: x1 }, o1);
let gf;
function C1() {
  return gf || (gf = Vm(A1));
}
const I1 = ((...t) => {
  const e = C1().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const a = T1(r);
    if (!a) return;
    const s = e._component;
    !Ht(s) && !s.render && !s.template && (s.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, E1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, e;
});
function E1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function T1(t) {
  return Pe(t) ? document.querySelector(t) : t;
}
const _e = Math.PI / 180, mh = Math.PI * 2, D1 = 2048;
function R1() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_GL_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoGlDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function L1(t) {
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
function dc(t, e, n, r = {}) {
  R1() && console.warn(`[PANO_GL][${t}] ${e}`, {
    ...r,
    source: L1(n)
  });
}
function re(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Ir(t, e, n) {
  return { x: t, y: e, z: n };
}
function Bo(t, e) {
  return Ir(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Mi(t, e) {
  return Ir(t.x * e, t.y * e, t.z * e);
}
function Eo(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function mf(t, e) {
  return Ir(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function ha(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Ir(t.x / e, t.y / e, t.z / e);
}
function O1(t, e) {
  const n = Number(t || 0) * _e, r = Number(e || 0) * _e, a = Math.cos(r);
  return Ir(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function To(t, e, n = 0) {
  const r = O1(t, e);
  let a = Ir(0, 1, 0);
  Math.abs(Eo(r, a)) > 0.999 && (a = Ir(0, 0, 1));
  let s = ha(mf(a, r)), u = ha(mf(r, s));
  const f = Number(n || 0) * _e, g = Math.cos(f), y = Math.sin(f), v = Bo(Mi(s, g), Mi(u, y)), d = Bo(Mi(s, -y), Mi(u, g));
  return s = ha(v), u = ha(d), { fwd: r, right: s, up: u };
}
function F1(t, e) {
  const n = (Number(t || 0) - 0.5) * mh, r = (0.5 - Number(e || 0)) * Math.PI, a = Math.cos(r);
  return Ir(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function yf(t, e, n = 1) {
  const r = Math.max(1, Math.round(Number(t || 1))), a = Math.max(1, Math.round(Number(e || 1))), s = Math.max(1, Number(n || 1)), u = Math.max(512, D1), f = Math.min(1, u / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: s,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function bf(t, e, n) {
  const r = t.createShader(e);
  if (t.shaderSource(r, n), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const a = t.getShaderInfoLog(r) || "shader compile failed";
    throw t.deleteShader(r), new Error(a);
  }
  return r;
}
function hc(t, e, n) {
  const r = bf(t, t.VERTEX_SHADER, e);
  let a;
  try {
    a = bf(t, t.FRAGMENT_SHADER, n);
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
const pc = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, V1 = `#version 300 es
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
}`, H1 = `#version 300 es
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
}`, $1 = `#version 300 es
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
function aa(t, e, n) {
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
function z1(t) {
  const e = To(
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
function j1(t = {}) {
  const e = (t == null ? void 0 : t.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, v = null, d = null, M = null, I = !1, R = yf(1, 1, 1), D = null, A = null, L = null, P = null, H = null;
  const F = /* @__PURE__ */ new Map();
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
      }), n ? (r = hc(n, pc, V1), a = hc(n, pc, H1), s = hc(n, pc, $1), D = {
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
      }, L = {
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
        u && n.deleteBuffer(u), f && n.deleteTexture(f), g && n.deleteTexture(g), y && n.deleteTexture(y), F.forEach((E) => {
          lt(E);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), s && n.deleteProgram(s), (x = n.getExtension("WEBGL_lose_context")) == null || x.loseContext();
      } catch {
      }
      n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, F.clear(), v = null, d = null, M = null, C = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, P = null, H = null, I = !1;
    }
  }
  function z(x, E, V = 1) {
    R = yf(x, E, V), (e.width !== R.width || e.height !== R.height) && (e.width = R.width, e.height = R.height);
  }
  function pt(x) {
    x === "background" ? v = null : x === "paint" ? d = null : M = null, C[x] && (C[x].width = 0, C[x].height = 0);
  }
  function Nt(x, E, V = [], q = { width: 0, height: 0 }, G = !1) {
    if (!n || !x || !E) return !1;
    const K = Number(E.width || E.videoWidth || E.naturalWidth || 0), Z = Number(E.height || E.videoHeight || E.naturalHeight || 0);
    if (!(K > 1) || !(Z > 1)) return !1;
    const rt = Array.isArray(V) ? V.filter((tt) => tt && tt.w > 0 && tt.h > 0) : [];
    if (!rt.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, x), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G ? 1 : 0), q.width !== K || q.height !== Z)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, E), q.width = K, q.height = Z, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (P || (P = document.createElement("canvas"), H = P.getContext("2d")), !H)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, E), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const tt of rt) {
      const X = Math.max(0, Math.floor(Number(tt.x || 0))), mt = Math.max(0, Math.floor(Number(tt.y || 0))), it = Math.min(K - X, Math.ceil(Number(tt.w || 0))), wt = Math.min(Z - mt, Math.ceil(Number(tt.h || 0)));
      if (!(it <= 0 || wt <= 0)) {
        if (P.width !== it || P.height !== wt) {
          if (P.width = it, P.height = wt, H = P.getContext("2d"), !H)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, E), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          H.clearRect(0, 0, it, wt);
        H.drawImage(E, X, mt, it, wt, 0, 0, it, wt), n.texSubImage2D(n.TEXTURE_2D, 0, X, mt, n.RGBA, n.UNSIGNED_BYTE, P);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function J(x, E, V, q, G = null, K = !1) {
    if (!Q()) return !1;
    if (!V)
      return pt(x), !1;
    const Z = String(q ?? ""), rt = x === "background" ? v : x === "paint" ? d : M, tt = C[x], X = Number(V.width || V.videoWidth || V.naturalWidth || 0), mt = Number(V.height || V.videoHeight || V.naturalHeight || 0), it = tt.width !== X || tt.height !== mt;
    if (rt === Z && !it && !(Array.isArray(G) && G.length)) return !0;
    if (!(X > 0) || !(mt > 0))
      return dc(x, "skip-invalid-size", V, { revision: Z, sourceWidth: X, sourceHeight: mt }), pt(x), !1;
    if (n.bindTexture(n.TEXTURE_2D, E), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, K ? 1 : 0), !(Array.isArray(G) && G.length ? Nt(E, V, G, tt, K) : !1)) {
      n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, V);
      const Tt = n.getError();
      if (Tt !== n.NO_ERROR)
        return dc(x, "texImage2D-error", V, {
          revision: Z,
          sourceWidth: X,
          sourceHeight: mt,
          glError: Tt
        }), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), pt(x), !1;
      tt.width = X, tt.height = mt;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), x === "background" ? v = Z : x === "paint" ? d = Z : M = Z, !0;
  }
  function et(x, E) {
    return J("background", f, x, E, null, !0);
  }
  function Y(x, E, V = null) {
    return J("paint", g, x, E, V, !0);
  }
  function at(x, E, V = null) {
    return J("mask", y, x, E, V, !0);
  }
  function lt(x) {
    x != null && x.texture && n && n.deleteTexture(x.texture);
  }
  function yt(x) {
    if (!n || !(x != null && x.assetId) || !(x != null && x.source)) return null;
    const E = String(x.assetId), V = String(x.revision ?? ""), q = x.source, G = Number(q.width || q.naturalWidth || q.videoWidth || 0), K = Number(q.height || q.naturalHeight || q.videoHeight || 0);
    if (G <= 0 || K <= 0) return null;
    let Z = F.get(E);
    if (Z || (Z = {
      texture: ct(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, F.set(E, Z)), Z.revision !== V || Z.width !== G || Z.height !== K) {
      n.bindTexture(n.TEXTURE_2D, Z.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, q);
      const rt = n.getError();
      if (rt !== n.NO_ERROR)
        return dc(`sticker:${E}`, "texImage2D-error", q, {
          revision: V,
          width: G,
          height: K,
          glError: rt
        }), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Z.revision = V, Z.width = G, Z.height = K;
    }
    return Z.texture;
  }
  function Mt(x = []) {
    if (!Q()) return !1;
    const E = /* @__PURE__ */ new Set();
    return x.forEach((V) => {
      !(V != null && V.assetId) || !(V != null && V.source) || (E.add(String(V.assetId)), yt(V));
    }), F.forEach((V, q) => {
      E.has(q) || (lt(V), F.delete(q));
    }), !0;
  }
  function Et() {
    return Q() ? (n.viewport(0, 0, e.width, e.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function nt(x) {
    n.useProgram(x), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function bt(x, E = {}) {
    if (!v) return null;
    n.disable(n.BLEND), nt(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(D.background, 0), n.uniform2f(D.viewport, Math.max(1, R.width), Math.max(1, R.height)), n.uniform1i(D.mode, (x == null ? void 0 : x.mode) === "unwrap" ? 0 : (x == null ? void 0 : x.mode) === "cutout" ? 2 : 1);
    const V = aa(x, R.width, R.height) || {
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
  function It(x, E = {}) {
    if (d == null && M == null) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), nt(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i(A.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(A.mask, 1), n.uniform1i(A.mode, (x == null ? void 0 : x.mode) === "unwrap" ? 0 : (x == null ? void 0 : x.mode) === "cutout" ? 2 : 1);
    const V = aa(x, R.width, R.height) || {
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
    const q = (V == null ? void 0 : V.mode) === "unwrap" ? 0 : (V == null ? void 0 : V.mode) === "cutout" ? 2 : 1, G = aa(V, R.width, R.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, K = To(G.yawDeg, G.pitchDeg, G.rollDeg), Z = /* @__PURE__ */ new Map();
    E.forEach((X) => {
      const mt = yt(X);
      mt && Z.set(String(X.assetId || ""), mt);
    }), n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), nt(s), n.uniform1i(L.texture, 0), n.uniform1i(L.mode, q), n.uniform3f(L.viewRight, K.right.x, K.right.y, K.right.z), n.uniform3f(L.viewUp, K.up.x, K.up.y, K.up.z), n.uniform3f(L.viewFwd, K.fwd.x, K.fwd.y, K.fwd.z), n.uniform1f(L.viewHfov, re(Number(G.hFovDeg || 90), 0.1, 179) * _e), n.uniform1f(L.viewVfov, re(Number(G.vFovDeg || 60), 0.1, 179) * _e), [...x.stickers].sort((X, mt) => Number((X == null ? void 0 : X.zIndex) || 0) - Number((mt == null ? void 0 : mt.zIndex) || 0)).forEach((X) => {
      const mt = Z.get(String((X == null ? void 0 : X.assetId) || ""));
      if (!mt) return;
      const it = z1(X), wt = it.crop;
      n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, mt), n.uniform3f(L.stickerRight, it.right.x, it.right.y, it.right.z), n.uniform3f(L.stickerUp, it.up.x, it.up.y, it.up.z), n.uniform3f(L.stickerFwd, it.fwd.x, it.fwd.y, it.fwd.z), n.uniform1f(L.stickerTanX, Math.max(1e-6, it.tanX)), n.uniform1f(L.stickerTanY, Math.max(1e-6, it.tanY)), n.uniform4f(
        L.crop,
        re(Number(wt.x0 ?? 0), 0, 1),
        re(Number(wt.y0 ?? 0), 0, 1),
        re(Number(wt.x1 ?? 1), 0, 1),
        re(Number(wt.y1 ?? 1), 0, 1)
      ), n.uniform1f(L.opacity, it.opacity), n.drawArrays(n.TRIANGLES, 0, 6);
    }), n.disable(n.BLEND);
  }
  function se(x) {
    return !Et() || !v ? null : (bt({
      mode: "panorama",
      yawDeg: (x == null ? void 0 : x.yawDeg) || 0,
      pitchDeg: (x == null ? void 0 : x.pitchDeg) || 0,
      fovDeg: (x == null ? void 0 : x.fovDeg) || 100
    }, x), e);
  }
  function ye(x) {
    return !Et() || !v ? null : (bt({ mode: "unwrap" }, x), e);
  }
  function Ae(x) {
    return !Et() || !v ? null : (bt({
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
    const E = Object.prototype.hasOwnProperty.call(x, "backgroundSource"), V = Object.prototype.hasOwnProperty.call(x, "paintSource"), q = Object.prototype.hasOwnProperty.call(x, "maskSource"), G = Object.prototype.hasOwnProperty.call(x, "textures"), K = Object.prototype.hasOwnProperty.call(x, "scene");
    return E && et(x.backgroundSource, x.backgroundRevision ?? ""), V && Y(x.paintSource, x.paintRevision ?? ""), q && at(x.maskSource, x.maskRevision ?? ""), G && (Mt(x.textures || []), B.textures = x.textures || []), K && (B.scene = x.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(x, "backgroundOpacity") && (B.backgroundOpacity = Number(x.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(x, "showMaskTint") && (B.showMaskTint = x.showMaskTint === !0), Object.prototype.hasOwnProperty.call(x, "coverageDeg") && (B.coverageDeg = Number(x.coverageDeg || 360) === 180 ? 180 : 360), v && bt(x.view, {
      ...x,
      backgroundOpacity: Number(x.backgroundOpacity ?? B.backgroundOpacity ?? 1),
      coverageDeg: Number(x.coverageDeg || B.coverageDeg || 360) === 180 ? 180 : 360
    }), It(x.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }, {
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
  function rn(x, E, V) {
    const q = Math.max(1, Number((x == null ? void 0 : x.viewportWidth) || R.sourceWidth || R.width || 1)), G = Math.max(1, Number((x == null ? void 0 : x.viewportHeight) || R.sourceHeight || R.height || 1)), K = Number(E), Z = Number(V);
    if (!Number.isFinite(K) || !Number.isFinite(Z)) return null;
    if ((x == null ? void 0 : x.mode) === "unwrap")
      return { u: (K / q % 1 + 1) % 1, v: re(Z / G, 0, 1) };
    const rt = aa(x, q, G);
    if (!rt) return null;
    const tt = To(rt.yawDeg, rt.pitchDeg, rt.rollDeg), X = (K - q * 0.5) / (q * 0.5) * Math.tan(re(rt.hFovDeg, 1, 179) * _e * 0.5), mt = (G * 0.5 - Z) / (G * 0.5) * Math.tan(re(rt.vFovDeg, 0.1, 179) * _e * 0.5), it = ha(Bo(Bo(Mi(tt.right, X), Mi(tt.up, mt)), tt.fwd));
    return {
      u: (Math.atan2(it.x, it.z) / mh + 0.5 + 1) % 1,
      v: re(0.5 - Math.asin(re(it.y, -1, 1)) / Math.PI, 0, 1)
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
    const K = aa(x, q, G);
    if (!K)
      return { x: q * 0.5, y: G * 0.5, visible: !1 };
    const Z = To(K.yawDeg, K.pitchDeg, K.rollDeg), rt = F1(E, V), tt = Eo(rt, Z.right), X = Eo(rt, Z.up), mt = Eo(rt, Z.fwd);
    if (mt <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const it = q * 0.5 + tt / mt * (q * 0.5 / Math.tan(re(K.hFovDeg, 1, 179) * _e * 0.5)), wt = G * 0.5 - X / mt * (G * 0.5 / Math.tan(re(K.vFovDeg, 0.1, 179) * _e * 0.5));
    return { x: it, y: wt, visible: it >= 0 && it <= q && wt >= 0 && wt <= G };
  }
  return {
    init: Q,
    dispose: St,
    setViewport: z,
    setBackgroundErp: et,
    setPaintErp: Y,
    setMaskErp: at,
    renderPanorama: se,
    renderUnwrap: ye,
    renderCutout: Ae,
    renderScene: Ke,
    syncState: Ve,
    screenToErpUv: rn,
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
function U1() {
  const t = /* @__PURE__ */ new Map();
  function e(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, g) {
    const y = e(u);
    let v = t.get(y) || null;
    if (!v) {
      const I = document.createElement("canvas"), R = I.getContext("2d");
      if (!R) return null;
      v = {
        id: y,
        canvas: I,
        ctx: R,
        width: 0,
        height: 0
      }, t.set(y, v);
    }
    const d = vf(f), M = vf(g);
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
const B1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), G1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function yh(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function K1(t, e) {
  return t === "paint" || t === "mask" || t === "raster" ? !1 : e !== !1;
}
function W1(t = {}) {
  return {
    type: G1.has(String((t == null ? void 0 : t.type) || "")) ? String(t.type) : "erp_image",
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    coverageDeg: Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: yh(Number((t == null ? void 0 : t.opacity) ?? 1), 0, 1),
    visible: (t == null ? void 0 : t.visible) !== !1
  };
}
function q1(t = {}) {
  const e = String((t == null ? void 0 : t.type) || "");
  return B1.has(e) ? {
    id: String((t == null ? void 0 : t.id) || ""),
    type: e,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    visible: (t == null ? void 0 : t.visible) !== !1,
    opacity: yh(Number((t == null ? void 0 : t.opacity) ?? 1), 0, 1),
    zIndex: Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0),
    coverageAware: K1(e, t == null ? void 0 : t.coverageAware),
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  } : null;
}
function Y1(t = {}) {
  return {
    objects: (Array.isArray(t == null ? void 0 : t.objects) ? t.objects : []).map((r) => q1(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const s = Number((r == null ? void 0 : r.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return s !== u ? s - u : String((r == null ? void 0 : r.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (t == null ? void 0 : t.selectedId) ?? null,
    hoveredId: (t == null ? void 0 : t.hoveredId) ?? null
  };
}
function gl(t = {}) {
  return {
    stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
    background: W1((t == null ? void 0 : t.background) || {}),
    objectPass: Y1((t == null ? void 0 : t.objectPass) || {}),
    overlay: t != null && t.overlay && typeof t.overlay == "object" ? { ...t.overlay } : {}
  };
}
function X1(t = {}) {
  var a, s, u, f, g, y, v, d;
  if (t != null && t.background || t != null && t.objectPass || t != null && t.overlay) {
    const M = gl(t), I = Array.isArray((a = M.objectPass) == null ? void 0 : a.objects) ? M.objectPass.objects : [], R = {
      stickers: I.filter((P) => P.type === "sticker").map((P) => {
        var H, F, B, C, ct, Q, St, z, pt, Nt, J, et, Y;
        return {
          id: P.id,
          assetId: String(((H = P == null ? void 0 : P.params) == null ? void 0 : H.assetId) || ((F = P == null ? void 0 : P.params) == null ? void 0 : F.asset_id) || (P == null ? void 0 : P.id) || ""),
          yawDeg: Number(((B = P == null ? void 0 : P.transform) == null ? void 0 : B.yawDeg) ?? ((C = P == null ? void 0 : P.params) == null ? void 0 : C.yawDeg) ?? 0),
          pitchDeg: Number(((ct = P == null ? void 0 : P.transform) == null ? void 0 : ct.pitchDeg) ?? ((Q = P == null ? void 0 : P.params) == null ? void 0 : Q.pitchDeg) ?? 0),
          rollDeg: Number(((St = P == null ? void 0 : P.transform) == null ? void 0 : St.rollDeg) ?? ((z = P == null ? void 0 : P.params) == null ? void 0 : z.rollDeg) ?? 0),
          hFovDeg: Number(((pt = P == null ? void 0 : P.transform) == null ? void 0 : pt.hFovDeg) ?? ((Nt = P == null ? void 0 : P.params) == null ? void 0 : Nt.hFovDeg) ?? 30),
          vFovDeg: Number(((J = P == null ? void 0 : P.transform) == null ? void 0 : J.vFovDeg) ?? ((et = P == null ? void 0 : P.params) == null ? void 0 : et.vFovDeg) ?? 30),
          crop: ((Y = P == null ? void 0 : P.params) == null ? void 0 : Y.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((P == null ? void 0 : P.opacity) ?? 1),
          visible: (P == null ? void 0 : P.visible) !== !1,
          zIndex: Number((P == null ? void 0 : P.zIndex) ?? 0)
        };
      }),
      selectedId: ((s = M.objectPass) == null ? void 0 : s.selectedId) ?? null,
      hoveredId: ((u = M.objectPass) == null ? void 0 : u.hoveredId) ?? null
    }, D = I.filter((P) => P.type === "sticker").map((P) => {
      var H, F;
      return {
        assetId: String(((H = P == null ? void 0 : P.params) == null ? void 0 : H.assetId) || ((F = P == null ? void 0 : P.params) == null ? void 0 : F.asset_id) || (P == null ? void 0 : P.id) || ""),
        source: P.source || null,
        revision: String((P == null ? void 0 : P.revision) || "")
      };
    }).filter((P) => P.assetId && P.source), A = I.find((P) => P.type === "paint") || null, L = I.find((P) => P.type === "mask") || null;
    return {
      stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
      backgroundSource: ((f = M.background) == null ? void 0 : f.source) || null,
      backgroundRevision: String(((g = M.background) == null ? void 0 : g.revision) || ""),
      coverageDeg: Number(((y = M.background) == null ? void 0 : y.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (A == null ? void 0 : A.source) || null,
      paintRevision: String((A == null ? void 0 : A.revision) || ""),
      maskSource: (L == null ? void 0 : L.source) || null,
      maskRevision: String((L == null ? void 0 : L.revision) || ""),
      textures: D,
      scene: R,
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
function Z1(t) {
  let e = null;
  function n(s = {}) {
    const u = X1(s);
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
function Oi(t = {}) {
  const e = typeof (t == null ? void 0 : t.rendererFactory) == "function" ? t.rendererFactory : (A) => j1(A), n = typeof (t == null ? void 0 : t.targetPoolFactory) == "function" ? t.targetPoolFactory : () => U1(), r = typeof (t == null ? void 0 : t.stateControllerFactory) == "function" ? t.stateControllerFactory : (A) => Z1(A), a = e(t), s = (t == null ? void 0 : t.targetCanvas) || null, u = n();
  let f = null;
  const g = r({
    syncState(A = {}) {
      if (typeof a.syncState == "function") {
        const L = { ...A }, P = a.syncState(L);
        return P && (f = L, P);
      }
      return f = { ...A }, !0;
    }
  });
  function y(A = {}) {
    return g.sync(A);
  }
  function v(A = {}, L = {}) {
    return f ? a.renderScene({
      ...f,
      view: A,
      width: L.width,
      height: L.height,
      dpr: L.dpr,
      backgroundOpacity: L.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: L.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function d(A, L, P = {}, H = {}) {
    if (!L) return !1;
    const F = v(P, {
      ...H,
      width: L.w,
      height: L.h
    });
    return F ? A ? (A.canvas && F === A.canvas || A.drawImage(F, L.x, L.y, L.w, L.h), !0) : !!s && F === s : !1;
  }
  function M(A, L = {}, P = {}) {
    const H = Number(P.width || 0), F = Number(P.height || 0);
    if (!(H > 0) || !(F > 0)) return null;
    const B = u.ensureTarget(A, H, F);
    if (!B) return null;
    const C = v(L, {
      ...P,
      width: H,
      height: F
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
    renderView: v,
    renderToContext: d,
    renderToTarget: M,
    clearTarget: I,
    snapshotState: g.snapshot,
    clearState: D,
    dispose: R
  };
}
function J1(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function ml(t = {}, e = "paint") {
  const n = String((t == null ? void 0 : t.type) || e), r = Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0), a = Number((t == null ? void 0 : t.opacity) ?? 1);
  return {
    id: String((t == null ? void 0 : t.id) || `${n}_layer`),
    type: n,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    zIndex: Number.isFinite(r) ? r : 0,
    opacity: Number.isFinite(a) ? J1(a, 0, 1) : 1,
    visible: (t == null ? void 0 : t.visible) !== !1,
    coverageAware: !1,
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  };
}
function Q1(t, e, n = {}) {
  return t ? ml({
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
function ty(t, e, n = {}) {
  return t ? ml({
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
function ey(t, e, n = {}) {
  return t ? ml({
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
function ny(t = {}) {
  const e = [], n = Q1(t == null ? void 0 : t.paintSource, t == null ? void 0 : t.paintRevision, t == null ? void 0 : t.paintOptions), r = ty(t == null ? void 0 : t.maskSource, t == null ? void 0 : t.maskRevision, t == null ? void 0 : t.maskOptions), a = Array.isArray(t == null ? void 0 : t.rasterEntries) ? t.rasterEntries : [];
  return n && e.push(n), r && e.push(r), a.forEach((s, u) => {
    const f = ey(
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
function bh(t, e) {
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
function ms(t = {}) {
  const e = (t == null ? void 0 : t.backgroundSource) || null, n = Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360, r = String((t == null ? void 0 : t.stateRevision) || ""), a = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, s = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], u = String((t == null ? void 0 : t.backgroundRevision) || [
    String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
    Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
    Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
  ].join("|"));
  return gl({
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
      objects: bh(a, s)
    },
    overlay: {
      showMaskTint: (t == null ? void 0 : t.showMaskTint) === !0
    }
  });
}
function gc(t = {}) {
  const e = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], r = bh(e, n), a = ny({
    paintSource: (t == null ? void 0 : t.paintSource) || null,
    paintRevision: (t == null ? void 0 : t.paintRevision) || "",
    paintOptions: (t == null ? void 0 : t.paintOptions) || null,
    maskSource: (t == null ? void 0 : t.maskSource) || null,
    maskRevision: (t == null ? void 0 : t.maskRevision) || "",
    maskOptions: (t == null ? void 0 : t.maskOptions) || null,
    rasterEntries: (t == null ? void 0 : t.rasterEntries) || []
  });
  return gl({
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
function wi(t, e) {
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
function ry(t, e) {
  vh() && console.warn(`[PANO_PAINT][${t}]`, e);
}
function _f(t, e = 8) {
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
function yl(t, e) {
  const n = Math.max(1, Math.ceil(t)), r = Math.max(1, Math.ceil(e));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const a = document.createElement("canvas");
  return a.width = n, a.height = r, a;
}
function Bn(t, e, n) {
  if (!t) return wi(e, n);
  const r = Math.max(1, Math.round(e)), a = Math.max(1, Math.round(n));
  return (t.canvas.width !== r || t.canvas.height !== a) && (t.canvas.width = r, t.canvas.height = a, t.ctx.imageSmoothingEnabled = !0), t;
}
function ue(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let mc = null, yc = null, wf = null, xf = null, Qt = null, oa = null, Ze = null, Nr = null;
function iy() {
  if (yc) return yc;
  const t = 6, e = 17, n = document.createElement("canvas");
  n.width = e, n.height = e;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e, e), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = t, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(e, e), r.moveTo(-e / 2, e / 2), r.lineTo(e / 2, e + e / 2), r.moveTo(e / 2, -e / 2), r.lineTo(e + e / 2, e / 2), r.stroke(), yc = n, n;
}
function gi(t, e) {
  if (!t || !e) return;
  const n = e.width, r = e.height;
  mc = Bn(mc, n, r);
  const a = mc;
  ue(a), a.ctx.drawImage(e, 0, 0), a.ctx.globalCompositeOperation = "source-in", xf !== a.ctx && (wf = a.ctx.createPattern(iy(), "repeat"), xf = a.ctx), a.ctx.fillStyle = wf, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(a.canvas, 0, 0), t.restore();
}
function ay(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function oy(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function sy(t, e) {
  const n = Number(t == null ? void 0 : t.radiusValue), r = String((t == null ? void 0 : t.radiusModel) || "").trim(), a = (e == null ? void 0 : e.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function cy(t, e) {
  const n = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * e * 2);
  const r = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * e * 2);
}
const me = /* @__PURE__ */ new Map(), bl = 128;
function ly(t, e, n, r, a, s) {
  const u = Math.max(1, Math.round(t)), f = Math.max(0, Math.min(1, e)), g = `${u}:${f.toFixed(2)}:${n}:${r}:${a}:${s.toFixed(3)}`;
  if (me.has(g)) {
    const P = me.get(g);
    return me.delete(g), me.set(g, P), P;
  }
  me.size >= bl && me.delete(me.keys().next().value);
  const y = u * 2 + 2, v = u + 1, d = yl(y, y), M = d.getContext("2d"), I = f * u, R = u + 1, D = `rgba(${n},${r},${a},${s})`, A = `rgba(${n},${r},${a},0)`, L = M.createRadialGradient(v, v, I, v, v, R);
  return L.addColorStop(0, D), L.addColorStop(1, A), M.fillStyle = L, M.fillRect(0, 0, y, y), me.set(g, d), d;
}
function uy(t, e, n, r, a, s, u) {
  const { r: f, g, b: y, a: v } = r, d = Math.max(2, Math.ceil(t) * 2), M = Math.max(2, Math.ceil(e) * 2), I = Math.max(0, a), R = Math.max(0, Math.min(0.99, s)), D = Math.max(0, Math.min(1, u ?? 0)), A = `chisel:${d}:${M}:${n.toFixed(2)}:${f}:${g}:${y}:${v.toFixed(3)}:${I.toFixed(2)}:${R.toFixed(2)}:${D.toFixed(2)}`;
  if (me.has(A)) {
    const Q = me.get(A);
    return me.delete(A), me.set(A, Q), Q;
  }
  me.size >= bl && me.delete(me.keys().next().value);
  const L = yl(d, M), P = L.getContext("2d"), H = P.createImageData(d, M), F = H.data, B = Math.max(0, t - e), C = Math.max(0, Math.min(1, n)), ct = 1 + I;
  for (let Q = 0; Q < M; Q++)
    for (let St = 0; St < d; St++) {
      const z = St + 0.5 - t, pt = Q + 0.5 - e, Nt = Math.max(Math.abs(z) - B, 0), et = Math.hypot(Nt, pt) / e;
      if (et >= 1) continue;
      const Y = et <= C ? 1 : Math.max(0, (1 - et) / Math.max(1e-4, 1 - C)), at = 1 - et, lt = 1 + I * (1 - at) * (1 - at), yt = 1 - R * at * at, Mt = lt * yt / ct;
      let Et = 1;
      if (D > 0) {
        const It = Math.floor((pt + e) / 1.5), de = Math.floor((z + t) / 8), se = Kr(Ti(It * 41 + 500, de * 19 + 300));
        Et = 1 - D * 0.42 * se;
      }
      const nt = Math.round(255 * Math.min(1, v * Y * Mt * Et));
      if (nt <= 0) continue;
      const bt = (Q * d + St) * 4;
      F[bt] = f, F[bt + 1] = g, F[bt + 2] = y, F[bt + 3] = nt;
    }
  return P.putImageData(H, 0, 0), me.set(A, L), L;
}
function Ti(t, e) {
  const n = Math.trunc(Math.round(t * 4)), r = Math.trunc(Math.round(e * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a >>> 0;
}
function Kr(t) {
  let e = t + 1831565813 >>> 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function fy(t, e, n, r, a, s, u) {
  const f = t + 0.5 - n, g = e + 0.5 - r, y = Math.max(0, n - r), v = Math.max(Math.abs(f) - y, 0), d = Math.hypot(v, g) / r;
  if (d >= 1) return 0;
  const M = Kr(Ti(t * 17 + 3, e * 13 + 7)), I = d + s * 0.22 * (M - 0.5);
  if (I >= 1) return 0;
  const R = I <= a ? 1 : Math.max(0, (1 - I) / Math.max(1e-4, 1 - a)), D = dy(t, e, f, g, n, r), A = s * 0.55;
  if (D < A) return 0;
  const P = 0.45 + 0.55 * ((D - A) / Math.max(1e-4, 1 - A));
  return Math.round(255 * Math.min(1, u * R * P));
}
function dy(t, e, n, r, a, s) {
  const u = Math.floor((n + a) / 3), f = Math.floor((r + s) / 2), g = Kr(Ti(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + a) / 1.5), v = Math.floor((r + s) / 1.5), d = Kr(Ti(y * 23 + 800, v * 29 + 500)), M = Kr(Ti(t * 3 + 100, e * 5 + 200));
  return g * 0.55 + d * 0.3 + M * 0.15;
}
function hy(t, e, n, r, a) {
  const { r: s, g: u, b: f, a: g } = r, y = Math.max(2, Math.ceil(t) * 2), v = Math.max(2, Math.ceil(e) * 2), d = Math.max(0, Math.min(1, a)), M = `crayon:${y}:${v}:${n.toFixed(2)}:${s}:${u}:${f}:${g.toFixed(3)}:${d.toFixed(2)}`;
  if (me.has(M)) {
    const P = me.get(M);
    return me.delete(M), me.set(M, P), P;
  }
  me.size >= bl && me.delete(me.keys().next().value);
  const I = yl(y, v), R = I.getContext("2d"), D = R.createImageData(y, v), A = D.data, L = Math.max(0, Math.min(1, n));
  for (let P = 0; P < v; P++)
    for (let H = 0; H < y; H++) {
      const F = fy(H, P, t, e, L, d, g);
      if (F <= 0) continue;
      const B = (P * y + H) * 4;
      A[B] = s, A[B + 1] = u, A[B + 2] = f, A[B + 3] = F;
    }
  return R.putImageData(D, 0, 0), me.set(M, I), I;
}
function _h(t, e, n) {
  var D, A;
  const r = String((e == null ? void 0 : e.stampKind) || "round"), a = sy(e, n), s = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), u = py(e), f = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), g = Number(((D = e == null ? void 0 : e.angle) == null ? void 0 : D.value) ?? 0), y = cy(e, a), v = String(((A = e == null ? void 0 : e.targetSpace) == null ? void 0 : A.viewMode) || ""), d = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && v !== "unwrap", M = e == null ? void 0 : e.scatter, I = M ? { radius: Number(M.radius ?? 1.5), count: Math.max(1, Math.round(M.count ?? 6)) } : null;
  let R;
  if (r === "chisel") {
    const L = a * f, P = a, H = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), F = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), B = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    R = uy(L, P, s, u, H, F, B);
  } else if (r === "crayon") {
    const L = a * f, P = a, H = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    R = hy(L, P, s, u, H);
  } else
    R = ly(a, s, u.r, u.g, u.b, u.a);
  return { ctx: t, stampTex: R, radiusPx: a, spacingPx: y, desc: n, aspect: f, angle: g, stampKind: r, scatter: I, latitudeCorrection: d };
}
function py(t) {
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
function gy(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const r = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${a})`;
}
function Sf(t, e, n, r, a) {
  const s = t.angle, u = t.desc.width;
  function f(y, v) {
    s === 0 ? t.ctx.drawImage(t.stampTex, y - a, v - r, a * 2, r * 2) : (t.ctx.save(), t.ctx.translate(y, v), t.ctx.rotate(s), t.ctx.drawImage(t.stampTex, -a, -r, a * 2, r * 2), t.ctx.restore());
  }
  f(e, n);
  const g = s === 0 ? a : a * Math.abs(Math.cos(s)) + r * Math.abs(Math.sin(s));
  e - g < 0 && f(e + u, n), e + g > u && f(e - u, n);
}
function vl(t, e, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (t.scatter) {
    const { radius: y, count: v } = t.scatter, d = y * t.radiusPx * a, M = Ti(e, n);
    for (let I = 0; I < v; I++) {
      const R = Kr(M + I * 2) * Math.PI * 2, D = Math.sqrt(Kr(M + I * 2 + 1)) * d, A = e + Math.cos(R) * D, L = n + Math.sin(R) * D, P = Math.max(0.5, t.radiusPx * a * 0.48), H = (0.5 - L / Math.max(1, t.desc.height)) * Math.PI, F = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(H)) : 1, B = P * t.aspect * F;
      Sf(t, A, L, P, B);
    }
    return;
  }
  const s = Math.max(0.5, t.radiusPx * a), u = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, f = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, g = s * t.aspect * f;
  Sf(t, e, n, s, g);
}
function Nf(t, e, n) {
  const r = oy(e);
  if (!t || r.length === 0) return;
  const a = n.width, s = n.height, u = _h(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const f = [];
  for (let M = 0; M < r.length; M++) {
    let I = Number(r[M].u || 0) * a;
    const R = Number(r[M].v || 0) * s;
    M > 0 && Math.abs(I - f[M - 1].x) > a * 0.5 && (I += I < f[M - 1].x ? a : -a), f.push({ x: I, y: R });
  }
  if (vl(u, f[0].x, f[0].y, 1), f.length === 1) {
    t.restore();
    return;
  }
  let g = f[0], y = f[0], v = f[0], d = 0;
  for (let M = 1; M < f.length; M++) {
    const I = f[M], R = { x: (y.x + I.x) * 0.5, y: (y.y + I.y) * 0.5 };
    M === 1 ? d = La(u, v.x, v.y, R.x, R.y, d) : d = Go(u, g, v, R, I, d), g = y, y = I, v = R;
  }
  f.length === 2 ? La(u, v.x, v.y, y.x, y.y, d) : Go(u, g, v, y, y, d), t.restore();
}
function Do(t, e, n) {
  var d;
  const r = Array.isArray((d = e == null ? void 0 : e.geometry) == null ? void 0 : d.points) ? e.geometry.points : [];
  if (!t || r.length < 3) return;
  const a = n.width, s = n.height, u = gy(e), f = [];
  let g = 1 / 0, y = -1 / 0;
  for (let M = 0; M < r.length; M++) {
    const I = ay(r[M]);
    let R = Number(I.x || 0) * a;
    M > 0 && Math.abs(R - f[M - 1].x) > a * 0.5 && (R += R < f[M - 1].x ? a : -a), f.push({ x: R, y: Number(I.y || 0) * s }), R < g && (g = R), R > y && (y = R);
  }
  function v(M) {
    t.beginPath(), t.moveTo(f[0].x + M, f[0].y);
    for (let I = 1; I < f.length; I++) t.lineTo(f[I].x + M, f[I].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = u, v(0), g < 0 && v(a), y > a && v(-a), t.restore();
}
function so(t, e, n) {
  var u;
  if (String(((u = e == null ? void 0 : e.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Do(t, e, n);
    return;
  }
  const s = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  s >= 0.999 ? Nf(t, e, n) : (oa = Bn(oa, n.width, n.height), ue(oa), Nf(oa.ctx, e, n), t.save(), t.globalAlpha = s, t.drawImage(oa.canvas, 0, 0), t.restore());
}
function Mr(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function La(t, e, n, r, a, s) {
  const u = r - e, f = a - n, g = Math.hypot(u, f);
  if (g < 1e-9) return s;
  let y = t.spacingPx - s;
  for (; y <= g; ) {
    const v = y / g;
    vl(t, e + u * v, n + f * v, 1), y += t.spacingPx;
  }
  return g - y + t.spacingPx;
}
function Go(t, e, n, r, a, s) {
  const f = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, g = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, v = 0, d = f, M = d + g, I = M + y, R = M - d, D = 16;
  let A = s, L = n.x, P = n.y;
  for (let H = 1; H <= D; H++) {
    const F = d + R * H / D, B = ((d - F) * e.x + (F - v) * n.x) / (d - v), C = ((d - F) * e.y + (F - v) * n.y) / (d - v), ct = ((M - F) * n.x + (F - d) * r.x) / (M - d), Q = ((M - F) * n.y + (F - d) * r.y) / (M - d), St = ((I - F) * r.x + (F - M) * a.x) / (I - M), z = ((I - F) * r.y + (F - M) * a.y) / (I - M), pt = ((M - F) * B + (F - v) * ct) / (M - v), Nt = ((M - F) * C + (F - v) * Q) / (M - v), J = ((I - F) * ct + (F - d) * St) / (I - d), et = ((I - F) * Q + (F - d) * z) / (I - d), Y = ((M - F) * pt + (F - d) * J) / (M - d), at = ((M - F) * Nt + (F - d) * et) / (M - d);
    A = La(t, L, P, Y, at, A), L = Y, P = at;
  }
  return A;
}
function my(t, e, n, r) {
  const a = t.currentStroke.ctx;
  if (!a) return;
  const s = t.descriptor, u = s.width, f = n * s.height, g = t.activeStroke;
  let y = e * u;
  if (g && Math.abs(y - g.prev.x) > u * 0.5 && (y += y < g.prev.x ? u : -u), !g) {
    const I = _h(a, r, s), R = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), D = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), A = String((r == null ? void 0 : r.toolKind) || "") === "eraser", L = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", vl(I, y, f, 1), t.activeStroke = {
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
      layerKind: L,
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
  g.pointCount === 1 ? g.distSinceStamp = La(M, g.lastMidX, g.lastMidY, v, d, g.distSinceStamp) : g.distSinceStamp = Go(
    M,
    g.pprev,
    { x: g.lastMidX, y: g.lastMidY },
    { x: v, y: d },
    { x: y, y: f },
    g.distSinceStamp
  ), g.pprev = g.prev, g.prev = { x: y, y: f }, g.lastMidX = v, g.lastMidY = d, g.pointCount++, t.displayDirty = !0;
}
function Vc(t = {}) {
  const e = Math.max(1, Math.round(Number((t == null ? void 0 : t.width) || 2048))), n = Math.max(1, Math.round(Number((t == null ? void 0 : t.height) || 1024))), r = { kind: "ERP_GLOBAL", width: e, height: n }, a = /* @__PURE__ */ new Map(), s = wi(e, n), u = {
    descriptor: r,
    committedMask: wi(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: wi(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, g = wi(e, n);
  let y = null, v = "", d = null;
  function M(z) {
    return {
      actionGroupId: z,
      descriptor: r,
      committedPaint: wi(e, n),
      currentStroke: s,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function I(z) {
    let pt = a.get(z);
    return pt || (pt = M(z), a.set(z, pt)), pt;
  }
  function R(z) {
    return v === "mask" ? u : y ? I(y) : f;
  }
  function D(z) {
    var yt;
    const pt = !d || d.length !== z.length || z.some((Mt, Et) => Mt !== d[Et]), Nt = v === "paint" && ((yt = y ? a.get(y) : f) == null ? void 0 : yt.activeStroke) || null, J = v === "mask", et = u.activeStroke;
    let Y = u.displayDirty || f.displayDirty || pt;
    for (const Mt of z) {
      const Et = a.get(Mt);
      if (Et != null && Et.displayDirty) {
        Y = !0;
        break;
      }
    }
    if ((Nt || J && et) && (Y = !0), !Y) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const Mt of z) {
      const Et = a.get(Mt);
      Et && (Et.displayDirty = !1);
    }
    d = [...z];
    const at = g.ctx;
    ue(g);
    const lt = !!(Nt != null && Nt.isEraser);
    for (const Mt of z) {
      const Et = a.get(Mt);
      if (!Et) continue;
      const bt = y === Et.actionGroupId && v === "paint" ? Et.activeStroke : null;
      if (lt)
        Qt = Bn(Qt, e, n), ue(Qt), Qt.ctx.drawImage(Et.committedPaint.canvas, 0, 0), Mr(Qt.ctx, s.canvas), at.drawImage(Qt.canvas, 0, 0);
      else if (at.drawImage(Et.committedPaint.canvas, 0, 0), bt) {
        const It = Et.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, bt.strokeOpacity ?? 1));
        at.save(), at.globalAlpha = It, at.drawImage(s.canvas, 0, 0), at.restore();
      }
    }
    J && (et != null && et.isEraser) ? (Qt = Bn(Qt, e, n), ue(Qt), Qt.ctx.drawImage(u.committedMask.canvas, 0, 0), Mr(Qt.ctx, s.canvas), gi(at, Qt.canvas)) : (gi(at, u.committedMask.canvas), J && et && gi(at, s.canvas));
  }
  function A(z) {
    var Nt, J, et, Y, at;
    for (const lt of a.values())
      ue(lt.committedPaint), ue(lt.currentStroke), lt.activeStroke = null, lt.displayDirty = !0;
    ue(u.committedMask), ue(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, d = null;
    const pt = [
      ...Array.isArray((J = (Nt = z == null ? void 0 : z.painting) == null ? void 0 : Nt.paint) == null ? void 0 : J.strokes) ? z.painting.paint.strokes : [],
      ...Array.isArray((Y = (et = z == null ? void 0 : z.painting) == null ? void 0 : et.mask) == null ? void 0 : Y.strokes) ? z.painting.mask.strokes : []
    ];
    for (const lt of pt) {
      if (((at = lt == null ? void 0 : lt.targetSpace) == null ? void 0 : at.kind) !== "ERP_GLOBAL") continue;
      const yt = String((lt == null ? void 0 : lt.layerKind) || "paint"), Et = String((lt == null ? void 0 : lt.toolKind) || "pen") === "eraser";
      if (yt === "mask") {
        const nt = u.descriptor;
        Et ? (Qt = Bn(Qt, nt.width, nt.height), ue(Qt), so(Qt.ctx, lt, nt), Mr(u.committedMask.ctx, Qt.canvas)) : so(u.committedMask.ctx, lt, nt);
        continue;
      }
      if (Et) {
        Qt = Bn(Qt, r.width, r.height), ue(Qt), so(Qt.ctx, lt, r);
        for (const nt of a.values())
          Mr(nt.committedPaint.ctx, Qt.canvas), nt.displayDirty = !0;
      } else {
        const nt = String((lt == null ? void 0 : lt.actionGroupId) || "__default__"), bt = I(nt), It = bt.descriptor;
        so(bt.committedPaint.ctx, lt, It), bt.displayDirty = !0;
      }
    }
    D([...a.keys()]);
  }
  function L(z, pt) {
    v = String((z == null ? void 0 : z.layerKind) || "");
    const Nt = String((z == null ? void 0 : z.toolKind) || "") === "eraser";
    if (v === "mask")
      y = null, ue(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const J = Nt ? f : I(String((z == null ? void 0 : z.actionGroupId) || "__default__"));
      y = Nt ? "" : String((z == null ? void 0 : z.actionGroupId) || "__default__"), ue(J.currentStroke), J.activeStroke = null, J.displayDirty = !0;
    }
  }
  function P(z, pt) {
    var yt;
    const Nt = String((z == null ? void 0 : z.layerKind) || "paint"), J = String((z == null ? void 0 : z.toolKind) || "") === "eraser", et = Nt === "mask" ? u : J ? f : I(String((z == null ? void 0 : z.actionGroupId) || y || "__default__")), Y = et.activeStroke, at = et.descriptor;
    if (Y && Y.pointCount > 1) {
      const Mt = et.currentStroke.ctx;
      Mt.globalCompositeOperation = "source-over";
      const Et = {
        ctx: Mt,
        stampTex: Y.stampTex,
        radiusPx: Y.radiusPx,
        spacingPx: Y.spacingPx,
        desc: at,
        aspect: Y.aspect,
        angle: Y.angle,
        stampKind: Y.stampKind,
        scatter: Y.scatter,
        latitudeCorrection: Y.latitudeCorrection
      };
      Y.pointCount === 2 ? La(Et, Y.lastMidX, Y.lastMidY, Y.prev.x, Y.prev.y, Y.distSinceStamp) : Go(Et, Y.pprev, { x: Y.lastMidX, y: Y.lastMidY }, Y.prev, Y.prev, Y.distSinceStamp);
    }
    et.lassoPreviewActive && (ue(et.currentStroke), Do(et.currentStroke.ctx, z, at), et.lassoPreviewActive = !1);
    const lt = Nt === "mask" ? u.committedMask : et.committedPaint;
    if (J && Nt === "paint")
      for (const Mt of a.values())
        Mr(Mt.committedPaint.ctx, et.currentStroke.canvas), Mt.displayDirty = !0;
    else if (J)
      Mr(lt.ctx, et.currentStroke.canvas);
    else {
      const Mt = Math.max(0, Math.min(1, (Y == null ? void 0 : Y.strokeOpacity) ?? 1));
      lt.ctx.save(), lt.ctx.globalAlpha = Mt, lt.ctx.drawImage(et.currentStroke.canvas, 0, 0), lt.ctx.restore();
    }
    vh() && ry("commit-bounds", {
      layerKind: Nt,
      toolKind: String((z == null ? void 0 : z.toolKind) || ""),
      targetKind: String((at == null ? void 0 : at.kind) || ""),
      targetWidth: Number((at == null ? void 0 : at.width) || 0),
      targetHeight: Number((at == null ? void 0 : at.height) || 0),
      targetViewMode: String(((yt = z == null ? void 0 : z.targetSpace) == null ? void 0 : yt.viewMode) || ""),
      strokeAspect: Number((z == null ? void 0 : z.aspect) ?? 1),
      activeBounds: _f(et.currentStroke.canvas),
      surfaceBounds: _f(lt.canvas)
    }), ue(et.currentStroke), et.activeStroke = null, et.displayDirty = !0, y = null, v = "", D([...a.keys()]);
  }
  function H(z) {
    if (v === "mask")
      ue(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (v === "paint" && !y)
      ue(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const pt = a.get(y);
      pt && (ue(pt.currentStroke), pt.activeStroke = null, pt.lassoPreviewActive = !1, pt.displayDirty = !0);
    }
    y = null, v = "", D([...a.keys()]);
  }
  function F(z, pt) {
    var J;
    if (v = String((z == null ? void 0 : z.layerKind) || ""), String(((J = z == null ? void 0 : z.geometry) == null ? void 0 : J.geometryKind) || "") === "lasso_fill") {
      if (v === "mask")
        ue(u.currentStroke), Do(u.currentStroke.ctx, z, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const et = String((z == null ? void 0 : z.toolKind) || "") === "eraser", Y = et ? f : I(String((z == null ? void 0 : z.actionGroupId) || y || "__default__"));
        y = et ? "" : String((z == null ? void 0 : z.actionGroupId) || y || "__default__"), ue(Y.currentStroke), Do(Y.currentStroke.ctx, z, Y.descriptor), Y.lassoPreviewActive = !0, Y.displayDirty = !0;
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
    var at;
    const pt = a.get(String(z));
    if (!pt) return null;
    const Nt = v === "paint" && y === pt.actionGroupId, J = v === "paint" && ((at = y ? a.get(y) : f) == null ? void 0 : at.activeStroke) || null;
    if (J != null && J.isEraser)
      return Ze = Bn(Ze, e, n), ue(Ze), Ze.ctx.drawImage(pt.committedPaint.canvas, 0, 0), Mr(Ze.ctx, s.canvas), Ze.canvas;
    const et = Nt ? pt.activeStroke : null;
    if (!et) return pt.committedPaint.canvas;
    Ze = Bn(Ze, e, n), ue(Ze), Ze.ctx.drawImage(pt.committedPaint.canvas, 0, 0);
    const Y = pt.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, et.strokeOpacity ?? 1));
    return Ze.ctx.save(), Ze.ctx.globalAlpha = Y, Ze.ctx.drawImage(s.canvas, 0, 0), Ze.ctx.restore(), Ze.canvas;
  }
  function St() {
    return Nr = Bn(Nr, e, n), ue(Nr), gi(Nr.ctx, u.committedMask.canvas), v === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Qt = Bn(Qt, e, n), ue(Qt), Qt.ctx.drawImage(u.committedMask.canvas, 0, 0), Mr(Qt.ctx, s.canvas), ue(Nr), gi(Nr.ctx, Qt.canvas)) : gi(Nr.ctx, s.canvas)), Nr.canvas;
  }
  return {
    rebuildCommitted: A,
    beginStroke: L,
    appendStrokePoint: my,
    updateActiveStroke: F,
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
function bc(t, e, n) {
  const r = Number(t);
  return Number.isFinite(r) ? Math.max(Number(e), Math.min(Number(n), r)) : Number(e);
}
function Oe(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function yy(t, e) {
  let n = Oe(e) - Oe(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Mf = Math.PI / 180, kf = 0.12, by = 3, vy = 35, _y = 140, pa = 100, wy = 20, Pf = 0.8;
function xy(t, e, n) {
  const r = Math.max(1, Number(e || 1)), a = Math.max(1, Number(n || 1)), s = U(Number(t || pa), 1, 179) * Mf;
  return 2 * Math.atan(Math.tan(s * 0.5) * (a / r)) / Mf;
}
function Sy(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function ys(t = {}) {
  const e = typeof t.getView == "function" ? t.getView : (() => ({ yaw: 0, pitch: 0, fov: pa })), n = typeof t.setView == "function" ? t.setView : (() => {
  }), r = typeof t.getInvert == "function" ? t.getInvert : (() => ({ x: 1, y: 1 })), a = typeof t.getUnwrapRect == "function" ? t.getUnwrapRect : (() => ({ w: 1, h: 1 })), s = typeof t.getViewportSize == "function" ? t.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof t.onInteraction == "function" ? t.onInteraction : (() => {
  }), f = typeof t.onDebug == "function" ? t.onDebug : null, g = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(L, P = null) {
    f && f(L, P);
  }
  function v(L, P, H = null, F = performance.now()) {
    return g.drag.active = !0, g.drag.lastX = Number(L || 0), g.drag.lastY = Number(P || 0), g.drag.lastTs = Number(F || performance.now()), g.drag.pointerId = H, g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.lastTs = g.drag.lastTs, g.velHistory = [], y("drag", { phase: "start", x: g.drag.lastX, y: g.drag.lastY, pointerId: H }), !0;
  }
  function d(L, P, H = "pano", F = performance.now()) {
    if (!g.drag.active) return !1;
    const B = Number(F || performance.now()), C = Number(L), ct = Number(P), Q = C - g.drag.lastX, St = ct - g.drag.lastY;
    g.drag.lastX = C, g.drag.lastY = ct, g.drag.lastTs = B;
    const z = r() || { x: 1, y: 1 }, pt = Number(z.x || 1), Nt = Number(z.y || 1), J = { ...e() };
    let et = 0, Y = 0;
    if (H === "unwrap") {
      const lt = a() || { w: 1, h: 1 }, yt = Math.max(1, Number(lt.w || 1)), Mt = Math.max(1, Number(lt.h || 1)), Et = Q / yt, nt = St / Mt;
      et = -Et * 360 * pt, Y = nt * 180 * Nt;
    } else {
      const lt = s() || { w: 0, h: 0 }, yt = Math.max(1, Number(lt.w || 0)), Mt = Math.max(1, Number(lt.h || 0));
      if (yt > 1 && Mt > 1) {
        const Et = U(Number(J.fov || pa), 1, 179), nt = U(xy(Et, yt, Mt), 0.1, 179);
        et = -(Q / yt) * Et * pt, Y = St / Mt * nt * Nt;
      } else
        et = -Q * kf * pt, Y = St * kf * Nt;
    }
    J.yaw = Oe(Number(J.yaw || 0) + et), J.pitch = U(Number(J.pitch || 0) + Y, -89.9, 89.9), n(J), g.velHistory.push({ ts: B, yaw: J.yaw, pitch: J.pitch });
    let at = 0;
    for (; at < g.velHistory.length - 1 && g.velHistory[at].ts < B - 100; ) at++;
    return at > 0 && g.velHistory.splice(0, at), g.inertia.active = !1, g.inertia.lastTs = B, u(), y("drag", { phase: "move", dx: Q, dy: St, dYaw: et, dPitch: Y }), !0;
  }
  function M(L = performance.now()) {
    if (!g.drag.active) return !1;
    g.drag.active = !1;
    const P = Number(L || performance.now());
    g.drag.lastTs = P;
    const H = g.velHistory.filter((B) => P - B.ts <= 80);
    if (H.length >= 2) {
      const B = H[0], C = H.at(-1), ct = Math.max(1e-3, (C.ts - B.ts) / 1e3);
      let Q = C.yaw - B.yaw;
      Q > 180 && (Q -= 360), Q < -180 && (Q += 360), g.inertia.vx = Q / ct, g.inertia.vy = (C.pitch - B.pitch) / ct;
    } else
      g.inertia.vx = 0, g.inertia.vy = 0;
    g.velHistory = [];
    const F = Math.hypot(g.inertia.vx, g.inertia.vy);
    return g.inertia.active = F > wy, g.inertia.lastTs = P, y("drag", { phase: "end", speed: F, inertiaActive: g.inertia.active }), !0;
  }
  function I(L = performance.now()) {
    if (!g.inertia.active) return !1;
    const P = Number(L || performance.now()), H = Math.max(1e-3, (P - (g.inertia.lastTs || P)) / 1e3);
    g.inertia.lastTs = P;
    const F = { ...e() };
    F.yaw = Oe(Number(F.yaw || 0) + g.inertia.vx * H), F.pitch = U(Number(F.pitch || 0) + g.inertia.vy * H, -89.9, 89.9);
    const B = Math.exp(-5.5 * H);
    return g.inertia.vx *= B, g.inertia.vy *= B, Math.abs(g.inertia.vx) < Pf && Math.abs(g.inertia.vy) < Pf && (g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.active = !1), n(F), u(), g.inertia.active;
  }
  function R(L) {
    const P = Math.sign(Number(L || 0));
    if (!P) return !1;
    const H = { ...e() }, F = Number(H.fov || pa);
    return H.fov = U(F + P * by, vy, _y), n(H), u(), y("wheel", { deltaSign: P, fovBefore: F, fovAfter: H.fov }), !0;
  }
  function D(L) {
    return R(Math.sign(Sy(L)));
  }
  function A() {
    n({ yaw: 0, pitch: 0, fov: pa }), g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, u();
  }
  return {
    state: g,
    startDrag: v,
    moveDrag: d,
    endDrag: M,
    stepInertia: I,
    applyWheel: R,
    applyWheelEvent: D,
    resetView: A
  };
}
function Hc(t) {
  const e = String(t || "").trim();
  return e ? e === "PanoramaPreview" || e === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(e) : !1;
}
const Af = Math.PI / 180;
function sa(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) ? n : Number(e);
}
function Ny(t) {
  const e = t || {}, n = sa(e.yaw_deg, 0), r = sa(e.pitch_deg, 0), a = sa(e.roll_deg ?? e.rot_deg, 0), s = bc(sa(e.hFOV_deg, 90), 1, 179), u = bc(sa(e.vFOV_deg, 60), 1, 179), f = Math.tan(s * Af * 0.5) / Math.max(1e-6, Math.tan(u * Af * 0.5)), g = bc(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: a,
    hfov: s,
    vfov: u,
    aspect: g
  };
}
const wh = 0.28;
function My(t) {
  const e = t && typeof t == "object" ? t : {}, n = U(Number(e.x0 ?? 0), 0, 1), r = U(Number(e.y0 ?? 0), 0, 1), a = U(Number(e.x1 ?? 1), 0, 1), s = U(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(r, s),
    x1: Math.max(n, a),
    y1: Math.max(r, s)
  };
}
function ky(t, e = {}) {
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
    crop: My(t.crop),
    opacity: f ? wh : U(Number(t.opacity ?? 1), 0, 1),
    visible: f ? !0 : t.visible !== !1,
    external: r
  };
}
function bs(t, e = {}) {
  var s;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], r = e.includeHidden === !0;
  return {
    stickers: n.map((u) => ky(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: e.selectedId ?? ((s = t == null ? void 0 : t.active) == null ? void 0 : s.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function xh(t, e, n = {}) {
  if (typeof e != "function") return [];
  const r = n.scene || bs(t, n), a = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, s = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var R;
    const g = String((f == null ? void 0 : f.assetId) || "").trim(), y = g || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const v = g ? a[g] : null, d = e(y, v, f);
    if (d instanceof HTMLImageElement && !d.complete) return;
    const M = Number((d == null ? void 0 : d.naturalWidth) || (d == null ? void 0 : d.videoWidth) || (d == null ? void 0 : d.width) || 0), I = Number((d == null ? void 0 : d.naturalHeight) || (d == null ? void 0 : d.videoHeight) || (d == null ? void 0 : d.height) || 0);
    !d || M <= 0 || I <= 0 || (u.add(y), s.push({
      assetId: y,
      source: d,
      revision: String(((R = n.revisionFor) == null ? void 0 : R.call(n, y, v, d)) ?? [
        y,
        Number(d.naturalWidth || d.videoWidth || d.width || 0),
        Number(d.naturalHeight || d.videoHeight || d.height || 0),
        String(d.currentSrc || d.src || "")
      ].join("|"))
    }));
  }), s;
}
function _l(t, e = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((t == null ? void 0 : t.yaw) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch) || 0),
    fovDeg: U(Number((t == null ? void 0 : t.fov) || 100), 1, 179),
    coverageDeg: Number(e || 360) === 180 ? 180 : 360
  };
}
function Py(t, e = 360) {
  return _l(t, e);
}
function xi(t) {
  const e = Ny(t || {});
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
const { app: fe } = No;
function $c() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (No == null ? void 0 : No.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const qr = Math.PI / 180, Ko = {}, Ay = { Nu: 24, Nv: 14 }, Cy = 10, Iy = 120;
function Sh() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Kt(t, e, n = null) {
  if (!Sh()) return;
  const r = (t == null ? void 0 : t.id) ?? "?";
  if (n == null) {
    console.info(`[PANO_PREVIEW][${e}] node=${r}`);
    return;
  }
  console.info(`[PANO_PREVIEW][${e}] node=${r}`, n);
}
function ca(t) {
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
function Ey() {
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
function Ty(t) {
  const e = Er(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function Nh(t, e, n) {
  Ty(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function zc(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function Mh(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function Dy(t) {
  return Hc(Mh(t));
}
function Wr(t = null) {
  var s, u;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (s = fe == null ? void 0 : fe.canvas) == null ? void 0 : s.constructor) == null ? void 0 : u.name) || "");
  return [e, r, n, a].join("|");
}
function kh(t, e = null) {
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
const Na = {
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
            r.__panoRebindGeneration = this.generation, Kt(r, "path.switch", {
              from: String(r.__panoStickersPath || "unknown"),
              to: "rebind",
              reason: "frontend_signature_changed",
              signature: e,
              generation: this.generation
            }), Ph(r).rebind(r.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            Kt(r, "path.switch.error", { message: String((a == null ? void 0 : a.message) || a || "unknown") });
          }
      });
    }, 300));
  }
};
function Ph(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = r === "cutout" ? "dom" : kh(r, t).chosenPath, s = zc(t);
      this.activeBackend = s;
      const u = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = t.__panoPreviewNoPreview === !0, g = n.noPreview === !0;
      if (s === a && s !== "none" && u === r && f === g) {
        t.__panoAttachOptions = { ...n, mode: r }, t.__panoPreviewMode = r, t.__panoPreviewNoPreview = g, t.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      s !== "none" && Di(t, { keepMonitor: r === "stickers" }), _b(t, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = zc(t);
    },
    rebind(n = {}) {
      const r = String(n.mode || (t == null ? void 0 : t.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Di(t, { keepMonitor: r === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Di(t), this.activeBackend = "none";
    }
  };
  return t.__panoPreviewController = e, e;
}
function Ry(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function Di(t, e = {}) {
  var f, g, y, v, d;
  if (!t) return;
  qo.unregister(t), Ry(t);
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
      (d = (v = u.root) == null ? void 0 : v.remove) == null || d.call(v);
    } catch {
    }
  }
  try {
    Array.isArray(t.widgets) && (t.widgets = t.widgets.filter((M) => {
      if (M === (u == null ? void 0 : u.widget)) return !1;
      const I = String((M == null ? void 0 : M.name) || ""), R = String((M == null ? void 0 : M.type) || ""), D = $c();
      return !(I === D || R === D || I === "pano_preview" || R === "pano_preview" || I === "preview" && R === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", Kt(t, "teardown.done", {
    reason: String(e.reason || ""),
    removedDom: n || a,
    removedLegacy: r || s,
    keepMonitor: !!e.keepMonitor
  }), e.keepMonitor || Na.unregister(t);
}
function Yr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Cf(t, e) {
  return Yr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function co(t, e) {
  return Yr(t.x * e, t.y * e, t.z * e);
}
function vc(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function If(t, e) {
  return Yr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function lo(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Yr(t.x / e, t.y / e, t.z / e);
}
function $r(t, e) {
  const n = t * qr, r = e * qr, a = Math.cos(r);
  return Yr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function wl(t, e, n = 0) {
  const r = $r(t, e), a = Yr(0, 1, 0);
  let s = If(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Yr(1, 0, 0)), s = lo(s);
  let u = lo(If(r, s));
  const f = n * qr, g = Math.cos(f), y = Math.sin(f), v = Cf(co(s, g), co(u, y)), d = Cf(co(s, -y), co(u, g));
  return { fwd: r, right: lo(v), up: lo(d) };
}
function Ly(t, e = "#00ff00") {
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
function Oy(t) {
  var n;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = Oa(t, "state_json")) == null ? void 0 : n.value) || "");
}
function xl(t) {
  var u, f;
  const e = Oy(t), n = String(((u = Oa(t, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), r = Number(((f = Oa(t, "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, a = t.__panoStateCache;
  if (a && a.source === e && a.bg === n && a.coverage === r)
    return a.parsed;
  const s = Ly(e, n);
  return s.coverage = r, t.__panoStateCache = { source: e, bg: n, coverage: r, parsed: s }, s;
}
function Oa(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function Ef(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function Ah(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Fy(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Ch(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Ih(t, e, n = null) {
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
  return !r && n != null && (r = Fy(t == null ? void 0 : t.graph, n)), r;
}
function Vy(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Sl(t, e = []) {
  const n = Vy(t), r = [];
  return e.forEach((a) => {
    n.includes(String(a)) && r.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !r.includes(a) && r.push(a);
  }), r.length ? r : e;
}
function Tf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: e, tail: n.length ? n[n.length - 1] : e };
}
function Wo(t, e) {
  const n = Tf(t), r = Tf(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Hy(t, e = ["erp_image", "bg_erp"]) {
  var g;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return [];
  const a = Sl(t, e).map((y) => n.findIndex((v) => String((v == null ? void 0 : v.name) || "") === String(y))).filter((y) => y >= 0), s = n.map((y, v) => ({ input: y, idx: v })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...a, ...s])], f = [];
  for (const y of u) {
    const v = Ih(t, y);
    if ((v == null ? void 0 : v.id) != null) {
      f.push(String(v.id));
      continue;
    }
    const d = (g = n[y]) == null ? void 0 : g.link;
    if (d == null) continue;
    const M = Ah(t == null ? void 0 : t.graph, d), { originId: I } = Ch(M);
    I != null && f.push(String(I));
  }
  return [...new Set(f)];
}
const qo = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = tn) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((s) => {
        var v, d, M, I, R;
        if (!s) return;
        const u = Wo(r, s == null ? void 0 : s.id), g = Hy(s, ["erp_image", "bg_erp"]).some((D) => Wo(r, D)), y = u ? "self" : g ? "upstream" : "global_executed";
        Kt(s, "exec-refresh", { executedId: r, reason: y }), Uc(s), Kt(s, "invalidate", { cachesCleared: !0 }), (d = (v = s.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || d.call(v), (M = s.setDirtyCanvas) == null || M.call(s, !0, !0), (R = (I = s.graph) == null ? void 0 : I.setDirtyCanvas) == null || R.call(I, !0, !0), Kt(s, "draw-request", {
          route: String(s.__panoPreviewMode || ""),
          mode: String(s.__panoPreviewMode || ""),
          reason: y
        });
      });
    }, tn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var t;
    !this.bound || !this.listener || !((t = tn) != null && t.removeEventListener) || (tn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(t) {
    t && (this.nodes.add(t), this.ensureBound());
  },
  unregister(t) {
    t && this.nodes.delete(t), this.nodes.size || this.ensureUnbound();
  }
};
function Yo(t) {
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
  return typeof ((s = tn) == null ? void 0 : s.apiURL) == "function" ? tn.apiURL(a) : a;
}
function $y(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function zy(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function jy(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function Eh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if ($y(e)) return [e];
  const { filename: n, subfolder: r } = zy(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => Yo({
    filename: n,
    subfolder: r,
    type: s
  }));
  return jy([...a, e]);
}
function Uy(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? Yo({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function jc(t) {
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
      return Yo({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = qn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Yo(t);
}
function Th(t, e) {
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
function By(t) {
  const e = [], n = /* @__PURE__ */ new Set(), r = (s) => {
    Array.isArray(s) && s.forEach((u) => e.push(u));
  }, a = (s, u = 0) => {
    !s || u > 3 || n.has(s) || typeof s == "object" && (n.add(s), r(s.images), a(s.output, u + 1), a(s.ui, u + 1), a(s.data, u + 1), a(s.result, u + 1));
  };
  return a(t, 0), e;
}
function Gy(t, e) {
  try {
    const n = By(e);
    let r = "";
    for (const a of n)
      if (r = qn(a), r) break;
    r ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(r || ""), Kt(t, "cutout.output-sync", {
      hasOutputImage: !0,
      src: Th(t.__panoOwnOutputSrc, t.__panoOwnOutputRev),
      rev: t.__panoOwnOutputRev
    })) : Kt(t, "cutout.output-sync", { hasOutputImage: !1, keys: Object.keys(e || {}) });
  } catch {
    Kt(t, "cutout.output-sync", { hasOutputImage: !1 });
  }
}
function Ky(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const r = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), a = jc(n), s = Array.isArray(a == null ? void 0 : a.images) ? a.images : [], u = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], f = r ? [r, ...s, ...u] : [...s, ...u];
  let g = "";
  for (const L of f)
    if (g = qn(L), g) break;
  if (!g) return null;
  const y = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), d = Eh(g).map((L) => Th(L, y));
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
    var L;
    t.__panoOwnOutputImageCache === I && I.pendingImg === R && I.pendingSrc === M && (I.src = M, I.img = R, I.pendingSrc = "", I.pendingImg = null), e == null || e(), (L = t.setDirtyCanvas) == null || L.call(t, !0, !0);
  }, R.onerror = () => {
    if (D + 1 >= d.length) {
      t.__panoOwnOutputImageCache === I && I.pendingImg === R && (I.pendingSrc = "", I.pendingImg = null);
      return;
    }
    A();
  }, I.pendingSrc = M, I.pendingImg = R, A(), I.img && (I.img.complete || I.img.naturalWidth || I.img.width) ? I.img : R;
}
function Wy(t, e = []) {
  var y, v;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const r = Sl(t, e), a = r.map((d) => n.findIndex((M) => String((M == null ? void 0 : M.name) || "") === String(d))).filter((d) => d >= 0), s = n.map((d, M) => ({ input: d, idx: M })).filter(({ input: d }) => String((d == null ? void 0 : d.type) || "").toUpperCase() === "IMAGE").map(({ idx: d }) => d), u = [.../* @__PURE__ */ new Set([...a, ...s])];
  Kt(t, "image-resolve", {
    inputCandidates: r,
    resolvedIndices: u,
    stage: "start"
  });
  for (const d of u) {
    const M = n[d], I = M == null ? void 0 : M.link;
    if (I == null) continue;
    const R = Ah(t.graph, I), { originId: D, originSlot: A } = Ch(R);
    if (D == null) continue;
    const L = Ih(t, d, D);
    if (!L) continue;
    const P = Number(A || 0), H = jc((L == null ? void 0 : L.id) ?? D), F = Array.isArray(H == null ? void 0 : H.images) ? H.images : [];
    if (F.length) {
      const Q = [];
      P >= 0 && P < F.length && Q.push(F[P]), Q.push(...F);
      for (const St of Q) {
        const z = qn(St);
        if (z)
          return Kt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "nodeOutputs",
            stage: "hit"
          }), { src: z, sourceType: "nodeOutputs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    let B = [];
    try {
      B = typeof (fe == null ? void 0 : fe.getNodeImageUrls) == "function" ? fe.getNodeImageUrls(L) || [] : [];
    } catch {
      B = [];
    }
    if (Array.isArray(B) && B.length) {
      const Q = [];
      P >= 0 && P < B.length && Q.push(B[P]), Q.push(...B);
      for (const St of Q) {
        const z = qn(St);
        if (z)
          return Kt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "appNodeImageUrls",
            stage: "hit"
          }), { src: z, sourceType: "appNodeImageUrls", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const C = Array.isArray(L == null ? void 0 : L.imgs) ? L.imgs : [];
    if (C.length) {
      const Q = [];
      P >= 0 && P < C.length && Q.push(C[P]), Q.push(...C);
      for (const St of Q) {
        const z = qn(St);
        if (z)
          return Kt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "nodeImgs",
            stage: "hit"
          }), { src: z, sourceType: "nodeImgs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const ct = (y = L == null ? void 0 : L.widgets) == null ? void 0 : y.find((Q) => String((Q == null ? void 0 : Q.name) || "").toLowerCase() === "image");
    if (ct) {
      let Q = qn(ct.value);
      if (Q && !Q.includes("/") && !Q.includes(":") && (L.comfyClass === "LoadImage" || L.type === "LoadImage") && (Q = tn.apiURL(`/view?filename=${encodeURIComponent(Q)}&type=input&subfolder=`)), Q)
        return Kt(t, "image-resolve", {
          inputName: String((M == null ? void 0 : M.name) || ""),
          sourceType: "widget",
          stage: "hit"
        }), { src: Q, sourceType: "widget", inputName: String((M == null ? void 0 : M.name) || "") };
    }
  }
  const f = jc(t == null ? void 0 : t.id), g = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && g.push(...f.pano_input_images), Array.isArray((v = f == null ? void 0 : f.ui) == null ? void 0 : v.pano_input_images) && g.push(...f.ui.pano_input_images), g.length > 0)
    for (const d of g) {
      const M = qn(d);
      if (M)
        return Kt(t, "image-resolve", { sourceType: "selfOutput", src: M, stage: "hit" }), { src: M, sourceType: "selfOutput", inputName: "fallback" };
    }
  return Kt(t, "image-resolve", { stage: "miss" }), { src: "", sourceType: "", inputName: "" };
}
function qy(t, e = []) {
  const n = Wy(t, e), r = String((n == null ? void 0 : n.src) || "").trim();
  if (!r) return null;
  const a = Eh(r);
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = e.join("|") || "image", u = t.__panoLinkedInputImageCache.get(s);
  if (u && u.srcRaw === r && u.img) return u.img;
  const f = new Image(), g = { srcRaw: r, resolvedSrc: "", img: f };
  t.__panoLinkedInputImageCache.set(s, g);
  let y = -1;
  const v = () => {
    var M, I;
    if (y += 1, y >= a.length) {
      try {
        (I = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || I.call(M, s);
      } catch {
      }
      Kt(t, "image-load", {
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
    Kt(t, "image-load", {
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
      v();
      return;
    }
    try {
      (I = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || I.call(M, s);
    } catch {
    }
    Kt(t, "image-load", {
      ok: !1,
      src: r,
      resolvedSrc: String(g.resolvedSrc || ""),
      preferredInputNames: e,
      sourceType: String((n == null ? void 0 : n.sourceType) || ""),
      attemptCount: y + 1,
      errorType: String((d == null ? void 0 : d.type) || "error")
    });
  }, v(), f;
}
function Xo(t, e = [], n = null) {
  const r = qy(t, e);
  return r ? (typeof n == "function" && (r.complete && (r.naturalWidth || r.width) || r.addEventListener("load", () => n(), { once: !0 })), r) : null;
}
function Uc(t) {
  var e, n;
  if (t) {
    try {
      (n = (e = t.__panoLinkedInputImageCache) == null ? void 0 : e.clear) == null || n.call(e);
    } catch {
    }
    t.__panoOwnOutputImageCache = null, t.__panoWrappedErpCache = null;
  }
}
function Dh(t, e) {
  t.__panoRenderCache || (t.__panoRenderCache = {
    mode: String(e || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = t.__panoRenderCache, r = String(e || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function kr(t, e, n = "") {
  const r = Dh(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), a = performance.now();
  return e ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a, Kt(t, "loading", { phase: "enter", src: String(n || "") })), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < Iy ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, Kt(t, "loading", { phase: "exit", src: String(n || "") }), !1) : !1;
}
function Bc(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), r = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), a = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), s = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || r)), u = n / a, f = r / s, g = Math.min(u, f);
  return Number.isFinite(g) && g > 0 ? g : 1;
}
function Df(t, e, n = 1) {
  const r = Number((e == null ? void 0 : e.x) || 0), a = Number((e == null ? void 0 : e.y) || 0), s = Number((e == null ? void 0 : e.w) || 0), u = Number((e == null ? void 0 : e.h) || 0);
  if (s <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), g = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), s * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), v = r + (s - g) * 0.5, d = a + (u - y) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(v, d, g, y, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", v + g * 0.5, d + y * 0.5 + 0.5), t.restore();
}
function la(t, e, n = "Open editor and add frame") {
  var a;
  const r = (a = t == null ? void 0 : t.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  r && (r.textContent = String(n || "Open editor and add frame"), r.style.display = e ? "flex" : "none");
}
function Yy(t) {
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
function Rh(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), r = Number((t == null ? void 0 : t.y) || 0), a = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), s = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), u = Number(e) > 0 ? Number(e) : 1;
  let f = a, g = a / u;
  return g > s && (g = s, f = s * u), {
    x: n + (a - f) * 0.5,
    y: r + (s - g) * 0.5,
    w: f,
    h: g
  };
}
function Xy(t, e, n, r = 0) {
  if (!t || !e || !n) return !1;
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (a <= 1 || s <= 1) return !1;
  const u = Rh(n, a / s);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(r) || 0));
  return f > 0 && (t.fillStyle = `rgba(0,0,0,${f})`, t.fillRect(u.x, u.y, u.w, u.h)), t.restore(), !0;
}
function Zy(t, e = null) {
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
function Ro(t) {
  const n = Zy(t) + 2, r = 8, a = Er(t), s = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || s < 80 ? null : { x: r, y: n, w: s, h: u };
}
function Lh(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const r = String(e || "");
  if (!r) return null;
  const a = Uy(n);
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
function Jy(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.__panoStickerSortCache;
  if ((r == null ? void 0 : r.source) === n && Array.isArray(r.sorted)) return r.sorted;
  const a = [...n].sort((s, u) => Number((s == null ? void 0 : s.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function Oh(t, e) {
  return bs(e, {
    selectedId: null,
    hoveredId: null
  });
}
function Fh(t, e, n) {
  return xh(e, (r, a) => Lh(t, r, a), { scene: n });
}
function Qy(t, e, n, r = 0.45) {
  const a = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3, u = (f) => {
    const g = f.x - a, y = f.y - s, v = Math.hypot(g, y) || 1;
    return { x: f.x + g / v * r, y: f.y + y / v * r };
  };
  return [u(t), u(e), u(n)];
}
function Rf(t, e, n, r, a, s, u, f) {
  const g = n.x * (r.y - a.y) + r.x * (a.y - n.y) + a.x * (n.y - r.y);
  if (Math.abs(g) < 1e-6) return;
  const [y, v, d] = Qy(s, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(v.x, v.y), t.lineTo(d.x, d.y), t.closePath(), t.clip();
  const M = (s.x * (r.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - r.y)) / g, I = (s.x * (a.x - r.x) + u.x * (n.x - a.x) + f.x * (r.x - n.x)) / g, R = (s.x * (r.x * a.y - a.x * r.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * r.y - r.x * n.y)) / g, D = (s.y * (r.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - r.y)) / g, A = (s.y * (a.x - r.x) + u.y * (n.x - a.x) + f.y * (r.x - n.x)) / g, L = (s.y * (r.x * a.y - a.x * r.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * r.y - r.x * n.y)) / g;
  t.transform(M, D, I, A, R, L), t.drawImage(e, 0, 0), t.restore();
}
function Vh(t, e, n, r) {
  const a = vc(t, e.right), s = vc(t, e.up), u = vc(t, e.fwd);
  if (u <= 1e-4) return null;
  const f = s / u / r, g = a / u / r;
  return { x: n.x + n.w * 0.5 + g * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Hh(t, e, n, r, a, s, u, f = 12, g = 9) {
  var et;
  const y = U(Number(u.hFOV_deg || 30), 1, 179) * qr, v = U(Number(u.vFOV_deg || 30), 1, 179) * qr, d = Math.tan(y * 0.5), M = Math.tan(v * 0.5), I = u.crop || {}, R = U(Number(I.x0 ?? 0), 0, 1), D = U(Number(I.y0 ?? 0), 0, 1), A = U(Number(I.x1 ?? 1), 0, 1), L = U(Number(I.y1 ?? 1), 0, 1), P = Math.max(1e-4, A - R), H = Math.max(1e-4, L - D), F = wl(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), B = [], C = [], ct = [], Q = [];
  for (let Y = 0; Y <= g; Y++) {
    const at = Y / g, yt = (1 - (D + at * H) * 2) * M;
    for (let Mt = 0; Mt <= f; Mt++) {
      const Et = Mt / f, bt = ((R + Et * P) * 2 - 1) * d, It = F.fwd.x + F.right.x * bt + F.up.x * yt, de = F.fwd.y + F.right.y * bt + F.up.y * yt, se = F.fwd.z + F.right.z * bt + F.up.z * yt, ye = Math.hypot(It, de, se) || 1e-8, Ae = It / ye, Ke = de / ye, Ve = se / ye, rn = Ae * r.right.x + Ke * r.right.y + Ve * r.right.z, Qn = Ae * r.up.x + Ke * r.up.y + Ve * r.up.z, x = Ae * r.fwd.x + Ke * r.fwd.y + Ve * r.fwd.z;
      if (x <= 1e-4)
        B[Y] || (B[Y] = []), C[Y] || (C[Y] = []), B[Y][Mt] = null, C[Y][Mt] = null;
      else {
        const E = Qn / x / a, V = rn / x / a;
        B[Y] || (B[Y] = []), C[Y] || (C[Y] = []), B[Y][Mt] = n.x + n.w * 0.5 + V * n.h * 0.5, C[Y][Mt] = n.y + n.h * 0.5 - E * n.h * 0.5;
      }
      ct[Y] || (ct[Y] = []), Q[Y] || (Q[Y] = []), ct[Y][Mt] = Et, Q[Y][Mt] = at;
    }
  }
  const St = (et = s.assets) == null ? void 0 : et[u.asset_id], z = Lh(e, u.asset_id, St);
  if (!z || !z.complete || !z.naturalWidth) return;
  const pt = Number(z.naturalWidth || z.width || 1), Nt = Number(z.naturalHeight || z.height || 1), J = f < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = J;
  for (let Y = 0; Y < g; Y++)
    for (let at = 0; at < f; at++) {
      const lt = B[Y][at], yt = C[Y][at], Mt = B[Y][at + 1], Et = C[Y][at + 1], nt = B[Y + 1][at], bt = C[Y + 1][at], It = B[Y + 1][at + 1], de = C[Y + 1][at + 1];
      if (lt === null || Mt === null || nt === null || It === null) continue;
      const se = ct[Y][at] * pt, ye = Q[Y][at] * Nt, Ae = ct[Y][at + 1] * pt, Ke = Q[Y][at + 1] * Nt, Ve = ct[Y + 1][at] * pt, rn = Q[Y + 1][at] * Nt, Qn = ct[Y + 1][at + 1] * pt, x = Q[Y + 1][at + 1] * Nt;
      Rf(t, z, { x: se, y: ye }, { x: Ae, y: Ke }, { x: Qn, y: x }, { x: lt, y: yt }, { x: Mt, y: Et }, { x: It, y: de }), Rf(t, z, { x: se, y: ye }, { x: Qn, y: x }, { x: Ve, y: rn }, { x: lt, y: yt }, { x: It, y: de }, { x: nt, y: bt });
    }
}
function tb(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const r = xl(t), a = Ro(t);
  if (!a) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const s = wl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(t.__panoPreviewView.fov || 100) * qr * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(a.x, a.y, a.w, a.h, 8), e.fill(), e.stroke(), e.clip();
  const f = Xo(
    t,
    Sl(t, ["erp_image", "bg_erp"]),
    () => {
      var F;
      return (F = t.setDirtyCanvas) == null ? void 0 : F.call(t, !0, !1);
    }
  ), g = !!(f && f.complete && (f.naturalWidth || f.width)), y = jh(t), v = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, d = y || v, M = Ko, I = Oh(t, r), R = Fh(t, r, I), D = _l(t.__panoPreviewView, r == null ? void 0 : r.coverage);
  let A = !1;
  if (t.__panoRuntimeCore || (t.__panoRuntimeCore = Oi()), g) {
    const F = ms({
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
    }), C = t.__panoRuntimeCore.syncState(F) ? t.__panoRuntimeCore.renderToTarget("runtime_preview", D, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    A = !!C, C && e.drawImage(C, a.x, a.y, a.w, a.h);
  }
  const L = d ? 8 : 12, P = d ? 6 : 9, H = Jy(t, r);
  if (!g || H.length === 0) {
    const F = Bc(e == null ? void 0 : e.canvas, a);
    $h(e, a, s, u, F);
  }
  !A && g && Zo(t, e, a, s, u, f, M), !A && H.length > 0 && H.forEach((F) => Hh(e, t, a, s, u, r, F, L, P)), e.restore();
}
function eb(t, e, n, r, a = "preview_scene", s = "") {
  const u = String(
    s || [
      String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
      Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
      Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
    ].join("|")
  );
  return ms({
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
function Lo(t, e, n, r) {
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
  const a = rb(t, e, r);
  return a || null;
}
function nb(t, e) {
  var d, M;
  const n = Number(t == null ? void 0 : t.clientX), r = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, s = (d = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : d.call(a), u = (e == null ? void 0 : e.ds) || ((M = fe == null ? void 0 : fe.canvas) == null ? void 0 : M.ds);
  if (!s || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const g = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(s.left || 0)) / f - Number(g[0] || 0), v = (r - Number(s.top || 0)) / f - Number(g[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(v) ? null : { x: y, y: v };
}
function rb(t, e, n) {
  var a, s;
  const r = nb(e, n || (fe == null ? void 0 : fe.canvas));
  return r ? {
    x: r.x - Number(((a = t == null ? void 0 : t.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((s = t == null ? void 0 : t.pos) == null ? void 0 : s[1]) || 0)
  } : null;
}
function uo(t) {
  if (t.__panoLegacyPreviewHooked) return;
  Kt(t, "legacy.attach", {
    mode: t.__panoPreviewMode,
    nodeType: String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""),
    nodeSize: Er(t)
  }), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", Nh(t, 320, 180), Si(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var M, I;
    const d = e ? e.apply(this, arguments) : void 0;
    try {
      const R = arguments[0];
      R && !((M = this.flags) != null && M.collapsed) && (r.stepInertia(performance.now()) && ((I = this.setDirtyCanvas) == null || I.call(this, !0, !1)), tb(this, R, r));
    } catch {
    }
    return d;
  }, t.onResize = function() {
    var M;
    const d = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Jo(this, 150), (M = this.setDirtyCanvas) == null || M.call(this, !0, !0), Uh(this, 220, null), d;
  };
  const r = ys({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (d) => {
      t.__panoPreviewView = d;
    },
    getViewportSize: () => {
      const d = Ro(t);
      return {
        w: Math.max(1, Number((d == null ? void 0 : d.w) || 0)),
        h: Math.max(1, Number((d == null ? void 0 : d.h) || 0))
      };
    },
    onInteraction: () => {
      var d;
      zh(t), (d = t.setDirtyCanvas) == null || d.call(t, !0, !1);
    }
  }), a = t.onMouseDown;
  t.onMouseDown = function(d, M, I) {
    var R;
    try {
      if (!((R = this.flags) != null && R.collapsed)) {
        const D = Lo(this, d, M, I) || { x: 0, y: 0 }, A = Er(this), L = Number((A == null ? void 0 : A[0]) || 0), P = Number((A == null ? void 0 : A[1]) || 0);
        if (D.x >= L - 20 && D.y >= P - 20)
          return a ? a.apply(this, arguments) : void 0;
        const F = Ro(this);
        if (Ef(D.x, D.y, F))
          return (d == null ? void 0 : d.button) === 0 && r.startDrag(D.x, D.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const s = t.onMouseMove;
  t.onMouseMove = function(d, M, I) {
    try {
      const R = Lo(this, d, M, I);
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
      const A = Lo(this, d, M, I), L = Ro(this);
      if (!A || !Ef(A.x, A.y, L)) return g ? g.apply(this, arguments) : void 0;
      const P = Number((d == null ? void 0 : d.deltaY) ?? (d == null ? void 0 : d.wheelDeltaY) ?? (typeof M == "number" ? M : 0));
      return r.applyWheel(Math.sign(P)) && ((D = this.setDirtyCanvas) == null || D.call(this, !0, !1)), typeof (d == null ? void 0 : d.preventDefault) == "function" && d.preventDefault(), typeof (d == null ? void 0 : d.stopPropagation) == "function" && d.stopPropagation(), !0;
    } catch {
      return g ? g.apply(this, arguments) : void 0;
    }
  };
  const y = t.onRemoved, v = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = n, t.onDrawForeground = e, t.onMouseDown = a, t.onMouseMove = s, t.onMouseUp = u, t.onMouseLeave = f, t.onMouseWheel = g, t.onRemoved = y, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = v, t.onRemoved = function() {
    return v(), Na.unregister(this), qo.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function ib(t, e) {
  const n = Xo(
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
function ab(t, e) {
  var y, v, d, M, I, R, D, A, L, P, H, F;
  const n = (v = (y = e == null ? void 0 : e.painting) == null ? void 0 : y.paint) == null ? void 0 : v.strokes, r = (M = (d = e == null ? void 0 : e.painting) == null ? void 0 : d.mask) == null ? void 0 : M.strokes, a = Array.isArray(n) && n.length > 0, s = Array.isArray(r) && r.length > 0;
  if (!a && !s) return null;
  const u = ib(t, e), f = `${u.width}x${u.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== f) && (t.__panoPreviewPaintEngine = Vc(u), t.__panoPreviewPaintDescriptorKey = f, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const g = {
    paint: n || null,
    mask: r || null,
    groups: ((I = e == null ? void 0 : e.painting) == null ? void 0 : I.groups) || null,
    rasterObjects: ((R = e == null ? void 0 : e.painting) == null ? void 0 : R.raster_objects) || null
  };
  return (((D = t.__panoPreviewPaintRevision) == null ? void 0 : D.paint) !== g.paint || ((A = t.__panoPreviewPaintRevision) == null ? void 0 : A.mask) !== g.mask || ((L = t.__panoPreviewPaintRevision) == null ? void 0 : L.groups) !== g.groups || ((P = t.__panoPreviewPaintRevision) == null ? void 0 : P.rasterObjects) !== g.rasterObjects) && (t.__panoPreviewPaintRevision = g, t.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    s ? "m1" : "m0",
    String(Array.isArray((H = e == null ? void 0 : e.painting) == null ? void 0 : H.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((F = e == null ? void 0 : e.painting) == null ? void 0 : F.raster_objects) ? e.painting.raster_objects.length : 0)
  ].join(":"), t.__panoPreviewPaintEngine.rebuildCommitted(e)), t.__panoPreviewPaintEngine;
}
function ob(t) {
  var n;
  return (Array.isArray((n = t == null ? void 0 : t.painting) == null ? void 0 : n.groups) ? t.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function sb(t, e) {
  const n = ab(t, e);
  if (!n) return null;
  const r = ob(e);
  return n.getErpTarget(r).displayPaint.canvas;
}
function cb(t, e, n = null) {
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
function Lf(t, e) {
  var s, u;
  const n = t == null ? void 0 : t.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((s = e == null ? void 0 : e.painting) == null ? void 0 : s.raster_objects) && e.painting.raster_objects.length > 0) {
    const f = cb(t, e, () => {
      var g, y;
      return (y = (g = t.__panoDomPreview) == null ? void 0 : g.requestDraw) == null ? void 0 : y.call(g);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = e == null ? void 0 : e.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = sb(t, e);
  return a ? {
    source: a,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function lb(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function ub(t, e, n, r) {
  let a = (t == null ? void 0 : t[e]) || null;
  return (!a || a.width !== n || a.height !== r) && (a = document.createElement("canvas"), a.width = n, a.height = r, t[e] = a), a;
}
function fb(t, e, n, r, a, s) {
  if (!e || !n || !(r > 0) || !(a > 0)) return;
  const u = lb(n);
  if (u.width === r && u.height === a) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  const g = ub(t, s, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!g) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  try {
    g.clearRect(0, 0, u.width, u.height), g.drawImage(n, 0, 0, u.width, u.height);
    const y = g.getImageData(0, 0, u.width, u.height).data, v = e.getImageData(0, 0, r, a), d = v.data, M = Math.max(0, u.width - 1), I = Math.max(0, u.height - 1);
    for (let R = 0; R < a; R += 1) {
      const D = (R + 0.5) * u.height / a - 0.5, A = U(Math.floor(D), 0, I), L = U(A + 1, 0, I), P = U(D - A, 0, 1);
      for (let H = 0; H < r; H += 1) {
        const F = (H + 0.5) * u.width / r - 0.5, B = U(Math.floor(F), 0, M), C = U(B + 1, 0, M), ct = U(F - B, 0, 1);
        let Q = 0, St = 0, z = 0, pt = 0;
        const Nt = (Y, at, lt) => {
          const yt = (at * u.width + Y) * 4, Mt = (y[yt + 3] || 0) / 255;
          Q += Mt * lt, St += (y[yt] || 0) / 255 * Mt * lt, z += (y[yt + 1] || 0) / 255 * Mt * lt, pt += (y[yt + 2] || 0) / 255 * Mt * lt;
        };
        if (Nt(B, A, (1 - ct) * (1 - P)), Nt(C, A, ct * (1 - P)), Nt(B, L, (1 - ct) * P), Nt(C, L, ct * P), Q <= 1e-6) continue;
        const J = (R * r + H) * 4, et = 1 - Q;
        d[J] = Math.round(U((St + d[J] / 255 * et) * 255, 0, 255)), d[J + 1] = Math.round(U((z + d[J + 1] / 255 * et) * 255, 0, 255)), d[J + 2] = Math.round(U((pt + d[J + 2] / 255 * et) * 255, 0, 255)), d[J + 3] = 255;
      }
    }
    e.putImageData(v, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, r, a);
  }
}
function Of(t, e, n, r) {
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0)), f = `${String(e.currentSrc || e.src || "")}|${a}x${s}|${r}`;
  let g = t.__panoPreviewBgPaint;
  if (!g || g.__revKey !== f || g.width !== a || g.height !== s) {
    (!g || g.width !== a || g.height !== s) && (g = document.createElement("canvas"), g.width = a, g.height = s, t.__panoPreviewBgPaint = g);
    const y = g.getContext("2d");
    y.clearRect(0, 0, a, s), y.drawImage(e, 0, 0, a, s), fb(t, y, n, a, s, "__panoPreviewOverlayScratch"), g.__revKey = f;
  }
  return g;
}
function db(t, e, n, r = null) {
  const a = String(t.__panoPreviewMode || "stickers");
  Dh(t, a);
  const s = xl(t), u = a === "cutout" ? Ky(t, () => {
    var D, A;
    return (A = (D = t.__panoDomPreview) == null ? void 0 : D.requestDraw) == null ? void 0 : A.call(D);
  }) : null, f = !!(u && u.complete && (u.naturalWidth || u.width)), g = e.parentElement, y = 1, v = Math.max(1, Number((g == null ? void 0 : g.clientWidth) || e.clientWidth || 0)), d = Math.max(1, Number((g == null ? void 0 : g.clientHeight) || e.clientHeight || 0)), M = Math.max(64, Math.round(v * y)), I = Math.max(64, Math.round(d * y)), R = e.getContext("2d");
  if (R)
    if (a === "cutout") {
      const D = Yy(s), A = Xo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var et, Y;
          return (Y = (et = t.__panoDomPreview) == null ? void 0 : et.requestDraw) == null ? void 0 : Y.call(et);
        }
      ), L = !!(A && A.complete && (A.naturalWidth || A.width));
      (e.width !== M || e.height !== I) && (e.width = M, e.height = I);
      const P = { x: 0, y: 0, w: M, h: I }, H = f ? U(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : L ? U(Number((A.naturalWidth || A.width) / Math.max(1, Number(A.naturalHeight || A.height || 1))), 0.05, 20) : 1, F = D ? xi(D) : null, B = U(Number((F == null ? void 0 : F.aspect) || H || 1), 0.05, 20), C = Rh(P, B), ct = Bc(e, P);
      R.setTransform(1, 0, 0, 1, 0, 0), R.fillStyle = "#070707", R.fillRect(0, 0, M, I);
      const Q = t == null ? void 0 : t.__panoCutoutPreviewSurface, St = (Q == null ? void 0 : Q.source) || null;
      if (!!(St && Number(St.width || 0) > 1 && Number(St.height || 0) > 1)) {
        R.drawImage(St, C.x, C.y, C.w, C.h), la(t, !1), kr(t, !1, "");
        return;
      }
      let pt = "none", Nt = "Open editor and add frame", J = "";
      if (f)
        R.drawImage(u, C.x, C.y, C.w, C.h);
      else if (J = String((A == null ? void 0 : A.src) || ""), D)
        A && !L ? pt = "loading" : L ? (pt = "empty", Nt = "Open editor or run node") : (pt = "empty", Nt = "Connect ERP image");
      else {
        if (L) {
          const et = Lf(t, s), Y = et != null && et.source ? Of(t, A, et.source, et.revision || "") : A;
          Xy(R, Y, P, 0.44);
        }
        pt = "empty", Nt = "Open editor and add frame";
      }
      pt === "loading" ? (Df(R, C, ct), la(t, !1), kr(t, !0, J)) : pt === "empty" ? (la(t, !0, Nt), kr(t, !1, "")) : (la(t, !1), kr(t, !1, ""));
    } else {
      la(t, !1), (e.width !== M || e.height !== I) && (e.width = M, e.height = I);
      const D = { x: 0, y: 0, w: M, h: I }, A = Bc(e, D);
      R.setTransform(1, 0, 0, 1, 0, 0), R.clearRect(0, 0, M, I), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const L = wl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), P = Math.tan(Number(t.__panoPreviewView.fov || 100) * qr * 0.5), H = Xo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var et, Y;
          return (Y = (et = t.__panoDomPreview) == null ? void 0 : et.requestDraw) == null ? void 0 : Y.call(et);
        }
      ), F = !!(H && H.complete && (H.naturalWidth || H.width));
      R.fillStyle = "#1a1a1e", R.fillRect(0, 0, M, I);
      const B = Oh(t, s), C = Fh(t, s, B), ct = _l(t.__panoPreviewView, s == null ? void 0 : s.coverage), Q = Lf(t, s), St = (Q == null ? void 0 : Q.source) || null, z = F && St ? Of(t, H, St, (Q == null ? void 0 : Q.revision) || "") : H, pt = z !== H ? String(z.__revKey || "") : H ? [
        String(H.currentSrc || H.src || ""),
        Number(H.naturalWidth || H.width || 0),
        Number(H.naturalHeight || H.height || 0)
      ].join("|") : "";
      t.__panoDomRuntimeCore || (t.__panoDomRuntimeCore = Oi());
      let Nt = !1;
      if (F) {
        const Y = t.__panoDomRuntimeCore.syncState(
          eb(z, s, B, C, "runtime_dom_scene", pt)
        ) ? t.__panoDomRuntimeCore.renderToTarget("runtime_preview", ct, {
          width: D.w,
          height: D.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        Y && (R.drawImage(Y, D.x, D.y, D.w, D.h), Nt = !0);
      }
      const J = B.stickers;
      if (F && Nt)
        kr(t, !1, "");
      else if (F)
        Zo(t, R, D, L, P, z, Ko), kr(t, !1, "");
      else if (St)
        Zo(t, R, D, L, P, St, Ko), kr(t, !!H && !F, String((H == null ? void 0 : H.src) || ""));
      else {
        const et = !!H && !F;
        kr(t, et, String((H == null ? void 0 : H.src) || "")), et && Df(R, D, A);
      }
      if ((!F || J.length === 0) && $h(R, D, L, P, A), !Nt && J.length > 0) {
        const et = jh(t), Y = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, at = et || Y, lt = at ? 8 : 12, yt = at ? 6 : 9;
        J.forEach((Mt) => Hh(R, t, D, L, P, s, Mt, lt, yt));
      } else if (!H || !F) {
        const et = Math.max(14, Math.round(16 * A));
        R.fillStyle = "rgba(212,212,216,0.85)", R.font = `600 ${et}px Plus Jakarta Sans, Geist, sans-serif`, R.textAlign = "center", R.fillText("Open editor to add stickers", M * 0.5, I * 0.5 + 24 * A);
      }
    }
}
function Zo(t, e, n, r, a, s, u = Ay) {
  const f = xl(t), g = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  t.__panoBackgroundCore || (t.__panoBackgroundCore = Oi());
  const y = ms({
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
function Ff(t, e, n, r, a, s, u = 1) {
  let f = !1;
  t.strokeStyle = s, t.lineWidth = u, t.beginPath();
  for (const g of e) {
    const y = Vh(g, n, r, a);
    if (!y) {
      f = !1;
      continue;
    }
    f ? t.lineTo(y.x, y.y) : (t.moveTo(y.x, y.y), f = !0);
  }
  t.stroke();
}
function $h(t, e, n, r, a = 1) {
  t.save();
  const s = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const v = [];
    for (let d = -180; d <= 180; d += 15) v.push($r(d, y));
    Ff(t, v, n, e, r, y === 0 ? u : s, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const v = [];
    for (let d = -89; d <= 89; d += 15) v.push($r(y, d));
    Ff(t, v, n, e, r, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : s, y % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: $r(0, 0) },
    { name: "Right", dir: $r(90, 0) },
    { name: "Back", dir: $r(180, 0) },
    { name: "Left", dir: $r(-90, 0) }
  ];
  t.fillStyle = "rgba(250, 250, 250, 0.32)";
  const g = Math.max(9, Math.round(11 * a));
  t.font = `500 ${g}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", f.forEach((y) => {
    const v = Vh(y.dir, n, e, r);
    v && t.fillText(y.name, v.x, v.y + 20 * a);
  }), t.restore();
}
function hb(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function zh(t) {
  const e = hb(t);
  e.dragging = !1, e.hqFrames = Cy;
}
function Jo(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function jh(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function pb(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function gb(t, e, n = 20) {
  var u;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const r = (u = e.getBoundingClientRect) == null ? void 0 : u.call(e);
  if (!r) return !1;
  const a = Number(t.clientX) - Number(r.left || 0), s = Number(t.clientY) - Number(r.top || 0);
  return a >= r.width - n && s >= r.height - n;
}
function mi(t, e) {
  return gb(t, e) ? !1 : (pb(t), !0);
}
function mb() {
  var n;
  const t = (n = fe == null ? void 0 : fe.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function yb(t) {
  var n;
  if (!t) return;
  const e = (n = fe == null ? void 0 : fe.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function bb(t, e = 360, n = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const r = Er(t), a = Number((r == null ? void 0 : r[0]) || 0), s = Number((r == null ? void 0 : r[1]) || 0);
  if (!Number.isFinite(a) || !Number.isFinite(s) || a >= e && s >= n) return;
  const u = [Math.max(e, a), Math.max(n, s)];
  try {
    typeof t.setSize == "function" ? t.setSize(u) : t.size = u, t.__panoStandaloneBootSized = !0, Kt(t, "size.bootstrap", { from: [a, s], to: u });
  } catch (f) {
    Kt(t, "size.bootstrap.error", { message: String((f == null ? void 0 : f.message) || f || "unknown") });
  }
}
function vb(t, e = 0, n = null, r = 1200) {
  const a = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = a > 0, !(a <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var s, u;
    t.__panoBootMinHeightTimer = null, (s = t == null ? void 0 : t.__panoDomPreview) != null && s.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, n == null || n(), (u = t.setDirtyCanvas) == null || u.call(t, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Vf(t, e = null, n = 0) {
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
      t.__panoUserResized = !0, Jo(t, 150), e == null || e(), Uh(t, 180, e);
    }
  };
}
function Uh(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    t.__panoResizeSettleTimer = null, n == null || n(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function Si(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function _b(t, e = {}) {
  var Et;
  const n = e.__allowStandalone === !0, r = Dy(t);
  if (r && !n) {
    Kt(t, "attach.skip", { reason: "standalone_preview_node", route: "blocked_legacy_path", nodeType: Mh(t) });
    return;
  }
  r && bb(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", qo.register(t);
  const a = t.__panoPreviewMode === "stickers", s = e.__noLegacyFallback === !0, u = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null;
  const f = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
  a || Na.unregister(t);
  const g = String(e.__panoForcedPath || "").trim(), y = a ? kh(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Wr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (g === "dom" || g === "legacy_draw") && (y.chosenPath = g, y.reason = "controller_target_backend");
  const v = a ? y.chosenPath : "dom", d = y.signature || Wr(t), M = Number(t.__panoRebindGeneration || 0), I = zc(t);
  if (Kt(t, "attach.begin", {
    nodeId: (t == null ? void 0 : t.id) ?? null,
    nodeType: f,
    mode: t.__panoPreviewMode,
    legacyFrontend: v === "legacy_draw",
    activeBackend: I,
    targetBackend: v,
    chosenPath: v,
    pathReason: y.reason,
    signature: d,
    generation: M,
    frontendVersionRaw: y.frontendVersionRaw,
    hasDomWidget: typeof t.addDOMWidget == "function",
    size: Er(t)
  }), t.__panoFrontendSig = d, t.__panoStickersPath = v, a && Na.register(t), a && v === "legacy_draw") {
    if (s) return;
    Di(t, { keepMonitor: !0 }), uo(t);
    return;
  }
  if ((Et = t.__panoDomPreview) != null && Et.widget) return;
  if (t.__panoLegacyPreviewHooked && Di(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    a && !s && uo(t);
    return;
  }
  const R = e.noPreview === !0, D = a || R ? 0 : 56, A = document.createElement("div");
  if (Ey(), A.className = "pano-node-preview-dom", A.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), R && A.classList.add("pano-node-preview--no-preview"), A.setAttribute("data-capture-wheel", "true"), A.setAttribute("tabindex", "-1"), A.style.cssText = [
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
    const nt = t.addDOMWidget($c(), "preview", A, Vf(t, null));
    Si(t), t.__panoDomPreview = { widget: nt, root: A, requestDraw: () => {
    } }, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom";
    return;
  }
  const L = document.createElement("div");
  L.style.cssText = [
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
  ].join(";"), H.textContent = "Open editor and add frame", L.appendChild(P), L.appendChild(H), A.appendChild(L), Nh(t, 120, 120), Si(t);
  let F = null;
  try {
    vb(t, D, () => {
      var nt, bt;
      return (bt = (nt = t.__panoDomPreview) == null ? void 0 : nt.requestDraw) == null ? void 0 : bt.call(nt);
    }), F = t.addDOMWidget(
      $c(),
      "preview",
      A,
      Vf(t, () => {
        var nt, bt;
        return (bt = (nt = t.__panoDomPreview) == null ? void 0 : nt.requestDraw) == null ? void 0 : bt.call(nt);
      }, D)
    );
  } catch {
    a && uo(t);
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
    Jo(t, 150), C();
  }) : null;
  ct == null || ct.observe(L);
  const Q = () => {
    if (!a || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const nt = 3, bt = (It) => {
      requestAnimationFrame(() => {
        var se;
        const de = !!(A != null && A.isConnected && (L != null && L.isConnected) && (P != null && P.isConnected) && Number(L.clientHeight || 0) > 0 && Number(P.clientHeight || 0) > 0);
        if (!de && It < nt) {
          bt(It + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, Kt(t, "probe.result", {
          mode: t.__panoPreviewMode,
          result: de ? "dom_ok" : "dom_fail",
          wrapH: Number((L == null ? void 0 : L.clientHeight) || 0),
          canvasH: Number((P == null ? void 0 : P.clientHeight) || 0),
          attempt: It
        }), !de) {
          if (s) {
            Kt(t, "path.keep", {
              route: "dom",
              reason: "probe_dom_not_ready",
              mode: t.__panoPreviewMode,
              wrapH: Number((L == null ? void 0 : L.clientHeight) || 0),
              canvasH: Number((P == null ? void 0 : P.clientHeight) || 0)
            });
            return;
          }
          Kt(t, "path.switch", {
            from: "dom",
            to: "legacy_draw",
            reason: "probe_dom_fail_fallback_legacy"
          }), Di(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", uo(t), (se = t.setDirtyCanvas) == null || se.call(t, !0, !0);
        }
      });
    };
    bt(1);
  }, St = (nt) => {
    var It, de, se;
    B.raf = 0;
    const bt = z.stepInertia(nt);
    (B.needsDraw || bt) && (B.needsDraw = !1, (It = t.flags) != null && It.collapsed || db(t, P, null, z), (de = t.setDirtyCanvas) == null || de.call(t, !0, !1)), (bt || B.needsDraw) && (B.raf = requestAnimationFrame(St)), Sh() && (!t.__panoDebugLastTs || nt - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = nt, Kt(t, "dom.snapshot", {
      mode: t.__panoPreviewMode,
      nodeSize: Er(t),
      root: ca(A),
      wrap: ca(L),
      canvas: ca(P),
      rootParent: ca(A.parentElement),
      rootGrandParent: ca((se = A.parentElement) == null ? void 0 : se.parentElement),
      canvasIntrinsic: { width: Number(P.width || 0), height: Number(P.height || 0) }
    }));
  }, z = ys({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (nt) => {
      t.__panoPreviewView = nt;
    },
    onInteraction: () => {
      C();
    }
  });
  P.addEventListener("pointerdown", (nt) => {
    var bt, It;
    mi(nt, L) && u && nt.button === 0 && ((bt = A.focus) == null || bt.call(A), (It = P.setPointerCapture) == null || It.call(P, nt.pointerId), P.style.cursor = "grabbing", z.startDrag(nt.clientX, nt.clientY, nt.pointerId));
  }), P.addEventListener("pointermove", (nt) => {
    !u || !z.state.drag.active || (mi(nt, L), z.moveDrag(nt.clientX, nt.clientY, "pano"));
  });
  const pt = (nt) => {
    var bt;
    !u || !z.state.drag.active || (mi(nt, L), (bt = P.releasePointerCapture) == null || bt.call(P, nt.pointerId), P.style.cursor = "grab", z.endDrag(), zh(t), C());
  };
  P.addEventListener("pointerup", pt), P.addEventListener("pointercancel", pt), P.addEventListener("pointerleave", (nt) => {
    z.state.drag.active && pt(nt);
  });
  const Nt = (nt) => {
    var It, de, se;
    if (Kt(t, "event", { kind: "wheel", via: "stickers", interactiveView: u }), !mi(nt, L) || !u) return;
    const bt = mb();
    z.applyWheelEvent(nt) && C(), (It = nt.preventDefault) == null || It.call(nt), (de = nt.stopPropagation) == null || de.call(nt), (se = nt.stopImmediatePropagation) == null || se.call(nt), requestAnimationFrame(() => {
      var ye, Ae;
      yb(bt), (Ae = (ye = fe == null ? void 0 : fe.canvas) == null ? void 0 : ye.setDirty) == null || Ae.call(ye, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((nt) => {
    L.addEventListener(nt, Nt, { passive: !1, capture: !0 }), P.addEventListener(nt, Nt, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((nt) => {
    P.addEventListener(nt, (bt) => mi(bt, L)), L.addEventListener(nt, (bt) => mi(bt, L));
  });
  const J = Oa(t, "state_json");
  if (J && !J.__panoPreviewPatchedCb) {
    J.__panoPreviewPatchedCb = !0;
    const nt = J.callback;
    J.callback = (bt) => {
      const It = nt ? nt(bt) : void 0;
      return C(), It;
    };
  }
  const et = Oa(t, "bg_color");
  if (et && !et.__panoPreviewPatchedCb) {
    et.__panoPreviewPatchedCb = !0;
    const nt = et.callback;
    et.callback = (bt) => {
      const It = nt ? nt(bt) : void 0;
      return C(), It;
    };
  }
  const Y = t.onRemoved, at = t.onResize, lt = t.onExecuted;
  t.onExecuted = function(nt) {
    Gy(t, nt), Uc(t), Si(t), C();
    const bt = lt ? lt.apply(this, arguments) : void 0;
    return Si(t), bt;
  };
  const yt = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return Uc(t), Si(t), C(), yt ? yt.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var bt;
    const nt = at ? at.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Jo(this, 150), C(), (bt = this.setDirtyCanvas) == null || bt.call(this, !0, !1), nt;
  }, t.onRemoved = function() {
    return Mt(), Na.unregister(this), qo.unregister(this), Y ? Y.apply(this, arguments) : void 0;
  };
  const Mt = () => {
    var nt;
    B.raf && cancelAnimationFrame(B.raf), (nt = ct == null ? void 0 : ct.disconnect) == null || nt.call(ct), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = at, t.onExecuted = lt, t.onConnectionsChange = yt, t.onRemoved = Y;
  };
  t.__panoDomRestore = Mt, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: F, root: A, canvas: P, requestDraw: C, state: B, emptyHintEl: H }, Q(), C();
}
function Hf(t, e = {}) {
  Ph(t).attach({
    ...e,
    mode: "cutout"
  });
}
const Qo = Math.PI / 180;
function Xr(t, e, n) {
  return { x: t, y: e, z: n };
}
function $f(t, e) {
  return Xr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function fo(t, e) {
  return Xr(t.x * e, t.y * e, t.z * e);
}
function zf(t, e) {
  return Xr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function ho(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Xr(t.x / e, t.y / e, t.z / e);
}
function wb(t, e) {
  const n = t * Qo, r = e * Qo, a = Math.cos(r);
  return Xr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function xb(t, e, n = 0) {
  const r = wb(t, e), a = Xr(0, 1, 0);
  let s = zf(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Xr(1, 0, 0)), s = ho(s);
  const u = ho(zf(r, s)), f = n * Qo, g = Math.cos(f), y = Math.sin(f), v = $f(fo(s, g), fo(u, y)), d = $f(fo(s, -y), fo(u, g));
  return { fwd: r, right: ho(v), up: ho(d) };
}
const po = 140, Sb = 180, jf = 40, _c = 10;
function Uf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":");
  return { full: e, tail: String(n[n.length - 1] || "").trim() };
}
function Bf(t, e) {
  const n = Uf(t), r = Uf(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Gf(t) {
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
  return typeof ((s = tn) == null ? void 0 : s.apiURL) == "function" ? tn.apiURL(a) : a;
}
function Ma(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Ma(t[0]);
    const e = typeof t[0] == "string" ? String(t[0] || "").trim() : "";
    if (e)
      return Gf({
        filename: e,
        subfolder: String(t[1] || "").trim(),
        type: String(t[2] || "output").trim() || "output"
      });
    for (const n of t) {
      const r = Ma(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Gf(t);
}
function Kf(t) {
  var a;
  const e = (a = hn) == null ? void 0 : a.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  if (e instanceof Map) {
    for (const s of e.keys())
      if (Bf(s, n)) return e.get(s);
  } else
    for (const s of Object.keys(e))
      if (Bf(s, n)) return e[s];
  return null;
}
function Nb(t, e = "erp_image") {
  var R, D, A, L, P, H, F, B, C, ct, Q, St;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let r = null;
  const a = n.find((z) => String((z == null ? void 0 : z.name) || "") === String(e));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const z = n.find((pt) => String((pt == null ? void 0 : pt.type) || "").toUpperCase() === "IMAGE" && (pt == null ? void 0 : pt.link) != null);
    (z == null ? void 0 : z.link) != null && (r = z.link);
  }
  if (r == null) return "";
  const s = ((D = (R = t == null ? void 0 : t.graph) == null ? void 0 : R.links) == null ? void 0 : D[r]) || ((P = (L = (A = hn) == null ? void 0 : A.graph) == null ? void 0 : L.links) == null ? void 0 : P[r]);
  if (!s) return "";
  const u = Number(s.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (B = (F = (H = hn) == null ? void 0 : H.graph) == null ? void 0 : F.getNodeById) == null ? void 0 : B.call(F, u), g = Kf(u), y = Kf(t == null ? void 0 : t.id), v = [
    g == null ? void 0 : g.images,
    (C = g == null ? void 0 : g.ui) == null ? void 0 : C.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    (ct = y == null ? void 0 : y.ui) == null ? void 0 : ct.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const z of v)
    if (Array.isArray(z))
      for (const pt of z) {
        const Nt = Ma(pt);
        if (Nt) return Nt;
      }
  let d = [];
  try {
    d = typeof ((Q = hn) == null ? void 0 : Q.getNodeImageUrls) == "function" ? hn.getNodeImageUrls(f) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const z of d) {
      const pt = Ma(z);
      if (pt) return pt;
    }
  if (f) {
    const z = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const pt of z) {
      const Nt = Ma(pt);
      if (Nt) return Nt;
    }
  }
  const M = (St = f == null ? void 0 : f.widgets) == null ? void 0 : St.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image"), I = String((M == null ? void 0 : M.value) || "").trim();
  return I ? tn.apiURL(`/view?filename=${encodeURIComponent(I)}&type=input&subfolder=`) : "";
}
function Wf(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function qf(t, e, n, r, a, s) {
  var d, M, I;
  if (e.clearRect(0, 0, n, r), e.fillStyle = "#070707", e.fillRect(0, 0, n, r), !s || !s.complete || !(s.naturalWidth || s.width) || n <= 1 || r <= 1) {
    Wf(e, n, r);
    return;
  }
  const u = xb(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * Qo * 0.5), g = Number(((I = (M = (d = t == null ? void 0 : t.widgets) == null ? void 0 : d.find) == null ? void 0 : M.call(d, (R) => (R == null ? void 0 : R.name) === "coverage")) == null ? void 0 : I.value) || 360) === 180 ? 180 : 360;
  t.__panoStandaloneCore || (t.__panoStandaloneCore = Oi());
  const y = ms({
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
    scene: bs(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!t.__panoStandaloneCore.syncState(y) && (() => {
    const R = t.__panoStandaloneCore.renderToTarget(
      "preview_node",
      Py(a, g),
      { width: n, height: r, dpr: window.devicePixelRatio || 1 }
    );
    return R ? (e.drawImage(R, 0, 0, n, r), !0) : !1;
  })() || (Zo(t, e, { x: 0, y: 0, w: n, h: r }, u, f, s, Ko), Wf(e, n, r));
}
function Yf(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class Mb {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = ys({
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
        `min-height:${po}px`,
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
          return po;
        },
        getHeight() {
          return po;
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
            minHeight: Math.max(po, Number(s.minHeight || 0)),
            minWidth: Math.max(Sb, Number(s.minWidth || 0))
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
      return Yf(a.x, a.y, s) ? (e.legacyDragPointer = !0, e.controller.startDrag(a.x - s.x, a.y - s.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var y, v, d, M, I, R;
      const s = Lo(this, n, r, a), u = e.getLegacyPreviewRect();
      if (!s || !Yf(s.x, s.y, u))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof r == "number" ? r : 0));
      Number(((y = e.view) == null ? void 0 : y.fov) || 100);
      const g = e.controller.applyWheel(Math.sign(f));
      return Number(((v = e.view) == null ? void 0 : v.fov) || 100), g && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (M = n == null ? void 0 : n.preventDefault) == null || M.call(n), (I = n == null ? void 0 : n.stopPropagation) == null || I.call(n), (R = n == null ? void 0 : n.stopImmediatePropagation) == null || R.call(n), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, s, u;
    const e = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - _c * 2), n = Math.max(60, Number(((u = (s = this.node) == null ? void 0 : s.size) == null ? void 0 : u[1]) || 0) - jf - _c);
    return { x: _c, y: jf, w: e, h: n };
  }
  drawLegacy(e) {
    var r, a;
    if (!e || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (e.save(), e.translate(n.x, n.y), qf(this.node, e, n.w, n.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, n.w, n.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), e.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const e = this.root.getBoundingClientRect(), n = 1, r = Math.max(1, Math.round(e.width * n)), a = Math.max(1, Math.round(e.height * n));
    (this.canvas.width !== r || this.canvas.height !== a) && (this.canvas.width = r, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    const e = Nb(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (qf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (s = (a = this.node).setDirtyCanvas) == null || s.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var n, r, a, s, u, f, g, y, v;
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
    const e = ((v = (y = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : y.find) == null ? void 0 : v.call(y, (d) => (d == null ? void 0 : d.name) === "coverage")) || null;
    e && (e.callback = this.orig.coverageWidgetCallback), this.node.__panoPreviewNodeRuntime = null;
  }
}
function kb(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const n = new Mb(t, e);
  t.__panoPreviewNodeRuntime = n, n.attach();
}
function Pb(t, e, n) {
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
function Bh(t) {
  return !!(t != null && t.prototype);
}
function Gc(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function Ab(t, e = {}) {
  Bh(t) || kb(t, {
    ...e,
    onOpen: Gc(t, e.onOpen)
  });
}
function Cb(t, e = {}) {
  if (!Bh(t)) {
    Hf(t, {
      ...e,
      onOpen: Gc(t, e.onOpen)
    });
    return;
  }
  Pb(t, "cutout_preview", (n) => {
    Hf(n, {
      ...e,
      onOpen: Gc(n, e.onOpen)
    });
  });
}
const on = {
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
function Xf(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function Ib(t = 80, e = null, n = 8) {
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
      const y = r.length, v = Math.max(0, y - u), d = a >= 0 ? Math.min(v, a) : v, M = r.slice(d), I = a < 0 ? -1 : Math.max(-1, Math.min(M.length - 1, a - d));
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
function Eb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Tb(t) {
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
function Db(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Rb(t, e) {
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
function go(t, e, n = 1) {
  if (!Array.isArray(t)) return null;
  const r = [];
  for (const a of t) {
    const s = Rb(a, e);
    if (!s) return null;
    r.push(s);
  }
  return r.length >= n ? r : null;
}
function Lb(t, e, n, r) {
  if (!t || typeof t != "object") return null;
  const a = String(t.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const g = go(t.points, e, 3);
    return g ? { geometryKind: a, points: g } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const s = go(t.points, e, 1);
  if (!s) return null;
  const u = go(t.rawPoints, e, 1), f = go(t.processedPoints, e, 1);
  return {
    geometryKind: a,
    points: s,
    rawPoints: u || s.map((g) => ({ ...g })),
    processedPoints: f || s.map((g) => ({ ...g }))
  };
}
function Ob(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = Db(t.targetSpace);
  if (!n) return null;
  const r = String(t.toolKind || "").trim(), a = Lb(t.geometry, n, r, e === "paint");
  if (!a) return null;
  const s = te(t.size, null), u = te(t.opacity, null);
  if (s == null || u == null) return null;
  const f = String(t.id || "").trim(), g = String(t.actionGroupId || "").trim();
  if (!f || !g) return null;
  const y = te(t.radiusValue, null), v = String(t.radiusModel || "").trim() || null;
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
    radiusModel: v,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function Zf(t, e) {
  const n = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return n;
  for (const r of t.strokes) {
    const a = Ob(r, e);
    a && n.strokes.push(a);
  }
  return n;
}
function Fb(t) {
  if (!t || typeof t != "object") return null;
  const e = te(t.u0, null), n = te(t.v0, null), r = te(t.u1, null), a = te(t.v1, null);
  if (e == null || n == null || r == null || a == null) return null;
  const s = (f) => Math.max(0, Math.min(1, f)), u = { u0: s(e), v0: s(n), u1: s(r), v1: s(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function Vb(t) {
  const e = t || {};
  return {
    du: te(e.du, 0) ?? 0,
    dv: te(e.dv, 0) ?? 0,
    rot_deg: te(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, te(e.scale, 1) ?? 1)
  };
}
function Hb(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const n = String(t.id || "").trim();
  if (!n) return null;
  const r = String(t.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const a = String(t.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const s = Fb(t.bbox);
  return s ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, te(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: s,
    rasterDataUrl: a,
    transform: Vb(t.transform)
  } : null;
}
function $b(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    const a = Hb(r, e.length);
    !a || n.has(a.id) || (n.add(a.id), e.push(a));
  }
  return e;
}
function ka(t) {
  const e = Eb();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: Tb(t.groups),
    paint: Zf(t.paint, "paint"),
    mask: Zf(t.mask, "mask"),
    raster_objects: $b(t.raster_objects)
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
}, ts = {
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
    const e = t, n = Ei(() => {
      const r = { ...e.attrs };
      return e.tag === "button" && r.type == null && (r.type = e.type), e.label && (r["aria-label"] = e.label), e.tip && (r["data-tip"] = e.tip), e.pressed != null && (r["aria-pressed"] = e.pressed), r;
    });
    return (r, a) => (we(), Vi(gm(t.tag), dh({
      class: ["pano-btn pano-btn-icon", t.extraClass]
    }, n.value, { innerHTML: t.icon }), null, 16, ["class", "innerHTML"]));
  }
}, zb = { class: "pano-floating-right" }, jb = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (we(), Fe("div", zb, [
      n[0] || (n[0] = ke("span", {
        class: "pano-fov-value",
        "data-fov-value": "",
        "aria-label": "Field of view"
      }, "100°", -1)),
      (we(!0), Fe(je, null, Ci(t.buttons, (r) => (we(), Vi(ts, {
        key: r.action,
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { "data-action": r.action }
      }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, Ub = {
  class: "pano-paint-dock is-hidden",
  "data-paint-dock": ""
}, Bb = ["data-paint-pane"], Gb = {
  key: 0,
  class: "pano-paint-color-float",
  "data-paint-color-row": "",
  hidden: ""
}, Kb = ["data-paint-color-swatch", "aria-label"], Wb = ["data-paint-footer"], qb = ["data-paint-group"], Yb = ["hidden"], Xb = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] }
  },
  setup(t) {
    function e(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    return (n, r) => (we(), Fe("div", Ub, [
      (we(!0), Fe(je, null, Ci(t.panes, (a) => (we(), Fe("div", {
        key: a.key,
        class: "pano-paint-pane",
        "data-paint-pane": a.key
      }, [
        a.showColorFloat ? (we(), Fe("div", Gb, [
          (we(!0), Fe(je, null, Ci(t.paintSwatches, (s) => (we(), Fe("button", {
            key: s.id,
            class: "pano-paint-color-dot",
            type: "button",
            "data-paint-color-swatch": s.id,
            "aria-label": s.label,
            style: ls(e(s))
          }, null, 12, Kb))), 128)),
          r[0] || (r[0] = fh('<button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color"></button><div class="pano-paint-color-pop" data-paint-color-pop hidden><div class="pano-paint-color-pop-head"><span class="pano-paint-color-preview" data-paint-color-preview></span><span class="pano-paint-color-pop-label">Custom Color</span></div><div class="pano-paint-color-field"><div class="pano-paint-sv-panel" data-paint-color-sv><div class="pano-paint-sv-cursor" data-paint-color-sv-cursor></div></div><div class="pano-paint-hue-strip" data-paint-hue-strip><div class="pano-paint-hue-handle" data-paint-hue-handle></div></div></div><label class="pano-paint-color-field"><span>Opacity</span><div class="pano-paint-alpha-wrap"><input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider><span data-paint-alpha-value>100%</span></div></label><div class="pano-paint-color-history" data-paint-color-history-wrap><div class="pano-paint-color-history-list" data-paint-color-history></div></div></div>', 2))
        ])) : Co("", !0),
        ke("div", {
          class: "pano-paint-footer",
          "data-paint-footer": a.footer
        }, [
          ke("div", {
            class: "pano-paint-footer-group",
            "data-paint-group": a.group
          }, [
            (we(!0), Fe(je, null, Ci(a.tools, (s) => (we(), Vi(ts, {
              key: `${a.key}-${s.key}`,
              icon: s.icon,
              label: s.label,
              tip: s.tip,
              attrs: { [s.attr]: s.key }
            }, null, 8, ["icon", "label", "tip", "attrs"]))), 128))
          ], 8, qb),
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
            en(ts, {
              icon: cl(ne).clear,
              label: a.clearLabel,
              tip: a.clearTip,
              "extra-class": "pano-paint-layer-clear",
              attrs: { "data-paint-layer-clear-current": a.clearTarget }
            }, null, 8, ["icon", "label", "tip", "attrs"])
          ], 8, Yb)
        ], 8, Wb)
      ], 8, Bb))), 128))
    ]));
  }
}, Zb = {
  class: "pano-side",
  "data-side": ""
}, Jb = { class: "pano-side-head" }, Qb = ["innerHTML"], tv = {
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
    const r = Ei(() => `<span class="pano-side-title-icon" aria-hidden="true">${ne.globe}</span><span>${n(e.nodeTitle)}</span>`);
    return (a, s) => (we(), Fe("div", Zb, [
      ke("div", Jb, [
        ke("div", {
          class: "pano-side-title",
          innerHTML: r.value
        }, null, 8, Qb),
        s[0] || (s[0] = ke("div", { class: "pano-side-actions" }, null, -1))
      ]),
      s[1] || (s[1] = ke("div", { class: "pano-divider" }, null, -1))
    ]));
  }
}, ev = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, nv = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (we(), Fe("div", ev, [
      (we(!0), Fe(je, null, Ci(t.buttons, (r) => (we(), Vi(ts, {
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
}, rv = { class: "pano-floating-top" }, iv = ["data-view-count"], av = ["data-view", "aria-pressed", "aria-label"], ov = ["innerHTML"], sv = { class: "label" }, cv = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (we(), Fe("div", rv, [
      ke("div", {
        class: "pano-view-toggle",
        "data-selected": "pano",
        "data-view-count": String(t.buttons.length)
      }, [
        (we(!0), Fe(je, null, Ci(t.buttons, (r) => (we(), Fe("button", {
          key: r.key,
          class: us(["pano-view-btn", r.extraClass]),
          "data-view": r.key,
          "aria-pressed": r.pressed,
          "aria-label": r.label
        }, [
          ke("span", {
            innerHTML: r.icon
          }, null, 8, ov),
          ke("span", sv, hd(r.label), 1)
        ], 10, av))), 128))
      ], 8, iv)
    ]));
  }
};
function Gh(t = "stickers") {
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
const lv = ["aria-label"], uv = { class: "pano-stage-wrap" }, fv = ["innerHTML"], dv = {
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
    const f = /* @__PURE__ */ H0(null), g = Ei(() => n.readOnly === !0), y = Ei(() => n.shellPreset || Gh(n.type)), v = Ei(() => {
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
      var F;
      const H = d()[0] || f.value;
      (F = H == null ? void 0 : H.focus) == null || F.call(H);
    }
    function I() {
      var P;
      u != null && u.isConnected && ((P = u.focus) == null || P.call(u)), u = null;
    }
    function R(P) {
      var H, F, B, C;
      if (!P.defaultPrevented) {
        if (P.key === "Tab") {
          const ct = d();
          if (!ct.length) {
            P.preventDefault(), (F = (H = f.value) == null ? void 0 : H.focus) == null || F.call(H);
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
    function L(P) {
      document.removeEventListener("keydown", R), P ? (u || (u = document.activeElement), D(), document.addEventListener("keydown", R), Ed(() => {
        M();
      })) : (A(), I());
    }
    return zd(() => {
      L(n.open);
    }), jd(() => {
      A(), document.removeEventListener("keydown", R), I();
    }), ko(() => n.open, (P) => {
      L(P);
    }), (P, H) => t.open ? (we(), Fe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: H[0] || (H[0] = P1((F) => r("close"), ["self"]))
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
        ke("div", uv, [
          H[1] || (H[1] = fh('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          g.value ? Co("", !0) : (we(), Fe(je, { key: 0 }, [
            en(nv, {
              buttons: y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            en(Xb, {
              "paint-swatches": t.paintSwatches,
              panes: y.value.paintPanes || []
            }, null, 8, ["paint-swatches", "panes"])
          ], 64)),
          en(cv, {
            buttons: y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          en(jb, { buttons: v.value }, null, 8, ["buttons"]),
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
            innerHTML: cl(ne).fullscreen
          }, null, 8, fv),
          H[3] || (H[3] = ke("div", {
            class: "pano-tooltip",
            "data-tooltip": ""
          }, null, -1))
        ]),
        t.hideSidebar ? Co("", !0) : (we(), Vi(tv, {
          key: 0,
          "node-title": t.nodeTitle
        }, null, 8, ["node-title"]))
      ], 8, lv)
    ])) : Co("", !0);
  }
}, es = "state_json", Vr = "sticker_image_1", wc = "external_image", xc = "pano_sticker_input_images", Oo = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Le = Math.PI / 180, jr = 180 / Math.PI, ns = 24, hv = 4, pv = 4, ga = /* @__PURE__ */ new Map(), Kc = /* @__PURE__ */ new Map(), ma = /* @__PURE__ */ new Map(), Dt = {
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
function $e(t) {
  return Number(t) === 180 ? 180 : 360;
}
function gv(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function mv(t) {
  return 1 - Math.pow(1 - t, 3);
}
function yv(t) {
  return t * t * t;
}
function Yn(t, e, n) {
  return { x: t, y: e, z: n };
}
function mo(t, e) {
  return Yn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function yo(t, e) {
  return Yn(t.x * e, t.y * e, t.z * e);
}
function Nn(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function bo(t, e) {
  return Yn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function yi(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Yn(t.x / e, t.y / e, t.z / e);
}
function zn(t, e) {
  const n = t * Le, r = e * Le, a = Math.cos(r);
  return Yn(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function vo(t) {
  return {
    yaw: Oe(Math.atan2(t.x, t.z) * jr),
    pitch: U(Math.asin(U(t.y, -1, 1)) * jr, -90, 90)
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
function zr(t, e) {
  const n = t.x - e.x, r = t.y - e.y;
  return n * n + r * r;
}
function Sc(t, e, n) {
  const r = Number(n.x || 0) - Number(e.x || 0), a = Number(n.y || 0) - Number(e.y || 0), s = Number(t.x || 0) - Number(e.x || 0), u = Number(t.y || 0) - Number(e.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return zr(t, e);
  const g = U((s * r + u * a) / f, 0, 1), y = Number(e.x || 0) + r * g, v = Number(e.y || 0) + a * g, d = Number(t.x || 0) - y, M = Number(t.y || 0) - v;
  return d * d + M * M;
}
function Mn(t, e, n) {
  return t + (e - t) * n;
}
function kn(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(U(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(U(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(U(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${U(n, 0, 1)})`;
}
function bv(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let _o = { fillStyle: "", url: "" };
function vv(t, e, n) {
  if (_o.url && _o.fillStyle === String(t || ""))
    return _o.url;
  const r = bv(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ns}" height="${ns}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return _o = { fillStyle: String(t || ""), url: r }, r;
}
function Fo(t, e, n = 0.015) {
  return !t || !e ? !1 : Math.abs(Number(t.r ?? 0) - Number(e.r ?? 0)) <= n && Math.abs(Number(t.g ?? 0) - Number(e.g ?? 0)) <= n && Math.abs(Number(t.b ?? 0) - Number(e.b ?? 0)) <= n && Math.abs(Number(t.a ?? 1) - Number(e.a ?? 1)) <= n;
}
function dn(t) {
  return {
    r: U(Number((t == null ? void 0 : t.r) ?? 0), 0, 1),
    g: U(Number((t == null ? void 0 : t.g) ?? 0), 0, 1),
    b: U(Number((t == null ? void 0 : t.b) ?? 0), 0, 1),
    a: U(Number((t == null ? void 0 : t.a) ?? 1), 0, 1)
  };
}
function sn(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function _v(t) {
  return Oo.some((e) => Fo(t, e.color));
}
function Nc(t, e, n) {
  const r = (Number(t) % 1 + 1) % 1, a = U(Number(e), 0, 1), s = U(Number(n), 0, 1);
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
function ua(t) {
  const e = U(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), n = U(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), r = U(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), a = Math.max(e, n, r), s = Math.min(e, n, r), u = a - s;
  let f = 0;
  u > 1e-6 && (a === e ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : a === n ? f = ((r - e) / u + 2) / 6 : f = ((e - n) / u + 4) / 6);
  const g = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: g, v: a };
}
function Mc(t) {
  const e = Number(t);
  return Number.isFinite(e) ? Number(e.toFixed(3)).toString() : "0";
}
function Jf(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : Number(e);
}
function Kh(t, e) {
  const n = Jf(t, 1), r = Jf(e, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, s = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(r * a)), f = (d, M) => M ? f(M, d % M) : d, g = f(s, u) || 1, y = Math.max(1, Math.round(s / g)), v = Math.max(1, Math.round(u / g));
  return `${y}:${v}`;
}
function Wc(t) {
  const e = U(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * Le, n = U(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * Le;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function wv(t) {
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
function Ur(t) {
  const e = Wc(t);
  return wv(e) || Kh(e, 1);
}
function xv(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = Ur(e), e;
}
function bi(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : Ur(t);
}
let wo = null;
function Sv() {
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
const Wh = "pano_suite.ui_settings.v1", qh = "pano_suite.node_grid_visibility.v1";
let Ni = null, jn = null, xo = { text: null, parsed: null };
function Pa(t) {
  const e = t && typeof t == "object" ? t : {}, n = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function Nv() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Wh)) || "").trim();
    if (!e) return Ni ? Pa(Ni) : null;
    const n = JSON.parse(e), r = Pa(n);
    return Ni = r, r;
  } catch {
    return Ni ? Pa(Ni) : null;
  }
}
function Mv(t) {
  var n;
  const e = Pa(t);
  Ni = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Wh, JSON.stringify(e));
  } catch {
  }
  return e;
}
function Yh() {
  var t;
  if (jn && typeof jn == "object")
    return jn;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(qh)) || "").trim();
    if (!e)
      return jn = {}, jn;
    const n = JSON.parse(e);
    return jn = n && typeof n == "object" ? n : {}, jn;
  } catch {
    return jn = {}, jn;
  }
}
function kv(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const a = Yh()[n];
  return typeof a == "boolean" ? a : !!e;
}
function Pv(t, e) {
  var a;
  const n = String(t ?? "").trim();
  if (!n) return;
  const r = Yh();
  r[n] = !!e, jn = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(qh, JSON.stringify(r));
  } catch {
  }
}
function Av(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([n, r]) => {
    e[n] = r && typeof r == "object" ? { ...r } : r;
  }), e;
}
function Cv(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const n = { ...e };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Iv(t) {
  var r, a;
  const e = Array.isArray((r = t == null ? void 0 : t.paint) == null ? void 0 : r.strokes) ? t.paint.strokes.length : 0, n = Array.isArray((a = t == null ? void 0 : t.mask) == null ? void 0 : a.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: n };
}
function Qf(t) {
  const { paintCount: e, maskCount: n } = Iv(t), r = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
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
function td(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function Ev(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : xv(e)) : [];
}
function Tv(t, e = 2048, n = "#00ff00", r = 360) {
  const a = Nv(), s = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: $e(r),
    bg_color: n,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ka(null),
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
    if (xo.text === u ? f = xo.parsed : (f = JSON.parse(u), xo = { text: u, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return s;
    const g = {
      ...s,
      ...f,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Av(f.assets),
      stickers: Cv(f.stickers),
      shots: Ev(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: ka(f.painting),
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
    return a && (g.ui_settings = Pa({ ...g.ui_settings, ...a })), g.output_preset = Yc(e, Number(g.output_preset || s.output_preset)), g.bg_color = String(n || g.bg_color || s.bg_color), g.coverage = $e(r), delete g.editor_history, g;
  } catch {
    return xo = { text: u, parsed: null }, s;
  }
}
function mn(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function Xh(t) {
  if (!t || t.__panoCoverageWidgetSyncInstalled) return;
  const e = mn(t, "coverage");
  if (!e) return;
  const n = typeof e.callback == "function" ? e.callback.bind(e) : null;
  e.callback = function(...r) {
    var s, u, f, g, y, v, d, M, I, R;
    const a = n ? n(...r) : void 0;
    return t.__panoStateCache = null, t.__panoLiveStateOverride = null, t.__panoWrappedErpCache = null, t.__panoPanoBackgroundCache = null, (u = (s = t.__panoPreviewNodeRuntime) == null ? void 0 : s.requestDraw) == null || u.call(s), (g = (f = t.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (y = t.setDirtyCanvas) == null || y.call(t, !0, !0), (d = (v = t.graph) == null ? void 0 : v.setDirtyCanvas) == null || d.call(v, !0, !0), (R = (I = (M = hn) == null ? void 0 : M.canvas) == null ? void 0 : I.setDirty) == null || R.call(I, !0, !0), a;
  }, t.__panoCoverageWidgetSyncInstalled = !0;
}
function Dv(t) {
  const e = String(t ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(e) || /^#?[0-9a-fA-F]{3}$/.test(e);
}
function ed(t) {
  const e = String(t ?? "").trim();
  return e.startsWith("{") && e.endsWith("}");
}
function Rv(t) {
  var I, R, D, A, L;
  if (!t || t.__panoCoverageWidgetOrderMigrated) return;
  const e = mn(t, "coverage"), n = mn(t, "bg_color"), r = mn(t, es), a = mn(t, "sticker_state");
  if (!e || !n || !r) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const s = String(e.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(s) && Dv(s) && (ed(u) || u === ""))) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (ed(u))
    try {
      const P = JSON.parse(u);
      y = String($e(P == null ? void 0 : P.coverage));
    } catch {
      y = "360";
    }
  const v = s, d = u, M = f;
  e.value = y, (I = e.callback) == null || I.call(e, y), n.value = v, (R = n.callback) == null || R.call(n, v), r.value = d, (D = r.callback) == null || D.call(r, d), a && (a.value = M, (A = a.callback) == null || A.call(a, M)), (L = t.setDirtyCanvas) == null || L.call(t, !0, !0), t.__panoCoverageWidgetOrderMigrated = !0;
}
function So(t) {
  return String(t ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function Lv(t, e) {
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
function Ov(t, e) {
  (Array.isArray(t == null ? void 0 : t.widgets) ? t.widgets : []).forEach((r) => {
    var s, u;
    const a = String((r == null ? void 0 : r.name) || "");
    (a === e || a.trim() === e || a.toLowerCase().includes(String(e).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (s = r.inputEl) != null && s.style && (r.inputEl.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function qc(t, e, n) {
  var s, u;
  if (!t || typeof t.addWidget != "function") return null;
  let a = (Array.isArray(t.widgets) ? t.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(e));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (s = a.inputEl) != null && s.style && (a.inputEl.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = t == null ? void 0 : t.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), a) : (a = t.addWidget("button", e, null, n), a && (a.serialize = !1), a);
}
function fa(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Yc(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : e;
}
function Fv() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function nd(t, e) {
  Fv() && console.warn(`[PANO_PAINT][${t}]`, e);
}
function Zh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Vv(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Jh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Hv(t, e, n = null) {
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
  return !r && n != null && (r = Vv(t == null ? void 0 : t.graph, n)), r;
}
function rs(t) {
  var a;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const r = `/view?${n.toString()}`;
  return typeof ((a = tn) == null ? void 0 : a.apiURL) == "function" ? tn.apiURL(r) : r;
}
function $v(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function zv(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function jv(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function Qh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if ($v(e)) return [e];
  const { filename: n, subfolder: r } = zv(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => rs({
    filename: n,
    subfolder: r,
    type: s
  }));
  return jv([...a, e]);
}
function Uv(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? rs({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function Aa(t) {
  var r;
  const e = (r = hn) == null ? void 0 : r.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  return e instanceof Map ? e.get(t) || e.get(n) || e.get(Number(n)) || null : e[t] || e[n] || null;
}
function Fi(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Fi(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return rs({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Fi(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : rs(t);
}
function Bv(t, e = -1) {
  var a;
  const n = [];
  Array.isArray(t == null ? void 0 : t.images) && t.images.length && n.push(t.images), Array.isArray((a = t == null ? void 0 : t.ui) == null ? void 0 : a.images) && t.ui.images.length && n.push(t.ui.images);
  const r = [];
  for (const s of n)
    !Array.isArray(s) || !s.length || (e >= 0 && e < s.length && r.push(s[e]), r.push(...s));
  return r;
}
function kc(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t || []) {
    const a = Fi(r);
    !a || n.has(a) || (n.add(a), e.push(a));
  }
  return e;
}
function Gv(t, e, n, r = null) {
  var d;
  const a = Aa(t == null ? void 0 : t.id), s = Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d[e]) ? a.ui[e] : Array.isArray(a == null ? void 0 : a[e]) ? a[e] : [], u = Array.isArray(s) && s.length ? s[0] : null, f = Fi(u);
  if (!f) return null;
  const g = `__ui__${e}`, y = n.get(g);
  if (y && y.__panoSrc === f) return y;
  const v = new Image();
  return v.__panoSrc = f, v.onload = () => {
    typeof r == "function" && r(v);
  }, v.src = f, n.set(g, v), v;
}
function Kv(t, e) {
  var P, H;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], a = r.findIndex((F) => String((F == null ? void 0 : F.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const s = r[a], u = s == null ? void 0 : s.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = Zh(t.graph, u), { originId: g, originSlot: y } = Jh(f);
  if (g == null) return { src: "", sourceType: "", inputName: n };
  const v = Hv(t, a, g), d = Number(y || 0);
  if (!v) return { src: "", sourceType: "", inputName: n };
  let M = [];
  try {
    M = typeof ((P = hn) == null ? void 0 : P.getNodeImageUrls) == "function" ? hn.getNodeImageUrls(v) || [] : [];
  } catch {
    M = [];
  }
  if (Array.isArray(M) && M.length) {
    const F = [];
    d >= 0 && d < M.length && F.push(M[d]), F.push(...M);
    const B = kc(F);
    if (B.length) return { src: B[0], srcCandidates: B, sourceType: "appNodeImageUrls", inputName: n };
  }
  const I = Aa((v == null ? void 0 : v.id) ?? g), R = Bv(I, d), D = kc(R);
  if (D.length) return { src: D[0], srcCandidates: D, sourceType: "nodeOutputs", inputName: n };
  const A = Array.isArray(v == null ? void 0 : v.imgs) ? v.imgs : [];
  if (A.length) {
    const F = [];
    d >= 0 && d < A.length && F.push(A[d]), F.push(...A);
    const B = kc(F);
    if (B.length) return { src: B[0], srcCandidates: B, sourceType: "nodeImgs", inputName: n };
  }
  const L = (H = v == null ? void 0 : v.widgets) == null ? void 0 : H.find((F) => String((F == null ? void 0 : F.name) || "").toLowerCase() === "image");
  if (L) {
    let F = Fi(L.value);
    if (F && !F.includes("/") && !F.includes(":") && (v.comfyClass === "LoadImage" || v.type === "LoadImage") && (F = tn.apiURL(`/view?filename=${encodeURIComponent(F)}&type=input&subfolder=`)), F) return { src: F, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function Wv(t, e, n, r = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const s = Qh(a);
  if (!s.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(e || "image"), f = t.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === a && f.img) return f.img;
  const g = new Image(), y = { srcRaw: a, resolvedSrc: "", img: g };
  t.__panoLinkedInputImageCache.set(u, y);
  let v = -1;
  const d = () => {
    var I, R;
    if (v += 1, v >= s.length) {
      try {
        (R = (I = t.__panoLinkedInputImageCache) == null ? void 0 : I.delete) == null || R.call(I, u);
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
    var M, I;
    if (v + 1 < s.length) {
      d();
      return;
    }
    try {
      (I = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || I.call(M, u);
    } catch {
    }
  }, d(), g;
}
function qv(t, e, n, r = null) {
  const a = Array.isArray(n) ? n.map((R) => String(R || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = String(e || "image"), u = a.join(`
`), f = t.__panoLinkedInputImageCache.get(s);
  if (f && f.srcRaw === u && f.img) return f.img;
  const g = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((R) => {
    Qh(R).forEach((D) => {
      const A = String(D || "").trim();
      !A || y.has(A) || (y.add(A), g.push(A));
    });
  }), !g.length) return null;
  const v = new Image(), d = { srcRaw: u, resolvedSrc: "", img: v };
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
    d.resolvedSrc = R, v.src = R;
  };
  return v.onload = () => {
    var R;
    r == null || r(), (R = t.setDirtyCanvas) == null || R.call(t, !0, !0);
  }, v.onerror = () => {
    var R, D;
    if (M + 1 < g.length) {
      I();
      return;
    }
    try {
      (D = (R = t.__panoLinkedInputImageCache) == null ? void 0 : R.delete) == null || D.call(R, s);
    } catch {
    }
  }, I(), v;
}
function tp(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const r of n) {
    const a = Kv(t, r);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function rd(t, e = [], n = null, r = "") {
  const a = Array.isArray(e) ? e : [e], s = tp(t, a), u = String(r || a.join("|") || "image_exact"), f = Array.isArray(s == null ? void 0 : s.srcCandidates) ? s.srcCandidates : [];
  if (f.length) return qv(t, u, f, n);
  const g = String((s == null ? void 0 : s.src) || "").trim();
  return g ? Wv(t, u, g, n) : null;
}
async function Ca(t, e, n = {}) {
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, s = r, u = Lv(t, e);
  await Sv();
  const f = mn(t, "output_preset"), g = mn(t, "coverage"), y = mn(t, "bg_color"), v = mn(t, es), d = Tv(
    String((v == null ? void 0 : v.value) || ""),
    Yc(f == null ? void 0 : f.value, 2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    $e(g == null ? void 0 : g.value)
  );
  t.__panoLiveStateOverride = JSON.stringify(d), e === "cutout" && (d.shots = Array.isArray(d.shots) ? d.shots.slice(0, 1) : [], d.shots.length || (d.active.selected_shot_id = null));
  const M = document.createElement("div");
  document.body.appendChild(M);
  const I = I1(dv, {
    open: !0,
    type: e,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: Gh(e),
    paintSwatches: Oo.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: kn(i.color, 1)
    })),
    onClose: () => ui()
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
  const R = M.querySelector(".pano-modal-overlay"), D = M.querySelector(".pano-modal"), A = D == null ? void 0 : D.querySelector("[data-stage-overlay]"), L = D == null ? void 0 : D.querySelector("[data-stage-background]"), P = D == null ? void 0 : D.querySelector(".pano-stage-wrap");
  if (!R || !D || !A || !L || !P)
    throw I.unmount(), M.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const H = document.createElement("div");
  H.setAttribute("aria-hidden", "true"), H.style.position = "absolute", H.style.left = "0", H.style.top = "0", H.style.pointerEvents = "none", H.style.zIndex = "12", H.style.display = "none", H.style.willChange = "transform,width,height,background,border-radius", P == null || P.appendChild(H);
  const F = document.createElement("div");
  F.className = "pano-paint-size-preview", F.setAttribute("aria-hidden", "true");
  const B = document.createElement("div");
  B.className = "pano-paint-size-preview-sample", F.appendChild(B), P == null || P.appendChild(F);
  const C = A.getContext("2d"), ct = Oi(), Q = Oi(), St = D.querySelector("[data-side]"), z = D.querySelectorAll("[data-view]"), pt = D.querySelector(".pano-view-toggle"), Nt = D.querySelector("[data-fov-value]"), J = D.querySelector("[data-selection-menu]"), et = D.querySelector("[data-action='toggle-output-preview-size']"), Y = D.querySelector("[data-tool-ui-action='add-or-look']"), at = D.querySelector("[data-view='frame']"), lt = D.querySelector("[data-action='toggle-fullscreen']"), yt = D.querySelector("[data-tooltip]"), Mt = D.querySelector("[data-tool-rail]"), Et = D.querySelector("[data-paint-dock]"), nt = Array.from(D.querySelectorAll("[data-paint-pane]")), bt = D.querySelector("[data-paint-color-row]"), It = D.querySelector("[data-paint-color-pop]"), de = D.querySelector("[data-paint-color-preview]"), se = D.querySelector("[data-paint-color-sv]"), ye = D.querySelector("[data-paint-color-sv-cursor]"), Ae = D.querySelector("[data-paint-hue-strip]"), Ke = D.querySelector("[data-paint-hue-handle]"), Ve = D.querySelector("[data-paint-alpha-slider]"), rn = D.querySelector("[data-paint-alpha-value]"), Qn = D.querySelector("[data-paint-color-history-wrap]"), x = D.querySelector("[data-paint-color-history]"), E = Array.from(D.querySelectorAll("[data-paint-size-row]")), V = Array.from(D.querySelectorAll("[data-paint-clear-row]")), q = Array.from(D.querySelectorAll("[data-paint-layer-clear-current]")), G = Array.from(D.querySelectorAll("[data-paint-size-slider]")), K = Array.from(D.querySelectorAll("[data-paint-size-value]"));
  let Z = 0, rt = 0;
  P == null || P.removeAttribute("data-stage-ready"), P == null || P.setAttribute("data-stage-loading-kind", "boot"), A.style.opacity = "1", L.style.opacity = "0", a && (St == null || St.remove(), D.classList.add("pano-modal-readonly"));
  function tt(i) {
    Et && Et.classList.toggle("is-hidden", !i);
  }
  const X = () => {
    if (!p.customPaintSessionStart) return;
    if (Fo(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (_v(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      dn(p.customPaintColor),
      ...p.customPaintHistory.filter((o) => !Fo(o, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, mt = (i = !1) => {
    !It || It.hidden || (i ? X() : p.customPaintSessionStart = null, It.hidden = !0);
  }, it = () => {
    It && (It.hidden && (p.customPaintSessionStart = dn(p.customPaintColor)), It.hidden = !1);
  };
  D.addEventListener("pointerdown", (i) => {
    to(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (D.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), mt(!0), e === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, zt(), ft())));
  });
  const wt = e === "stickers" || e === "cutout" ? d.active.selected_sticker_id : d.active.selected_shot_id, Tt = JSON.stringify(td(d)), p = {
    mode: "pano",
    selectedId: wt,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: $e(d.coverage),
    historyController: Ib(80, { entries: [Tt], index: 0 }),
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
    showGrid: kv(t == null ? void 0 : t.id, !0),
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
    paintEngine: Vc(),
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
  const jt = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), Pt = {
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
  function Jr(i) {
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
  function Ne(i) {
    const o = !!i;
    Te.active !== o && (Te.active = o, P.classList.toggle("drop-active", o));
  }
  function an(i, o, c = p.viewFov, l = 140, h = 620) {
    const m = yy(p.viewYaw, i), w = o - p.viewPitch, b = c - p.viewFov, _ = Math.hypot(m, w) + Math.abs(b) * 0.6, N = Math.round(U(l + _ * 2.2, l, h));
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
    }, p.viewInertia.active = !1, p.viewInertia.vx = 0, p.viewInertia.vy = 0, ft();
  }
  Cp();
  function bn() {
    return e === "stickers" ? d.stickers : d.shots;
  }
  function Ie() {
    const i = d.painting || (d.painting = ka(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function ep(i = "paint") {
    var h, m;
    const o = Array.isArray((m = (h = d.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? d.painting[i].strokes : [], c = [], l = /* @__PURE__ */ new Set();
    for (const w of o) {
      const b = String((w == null ? void 0 : w.actionGroupId) || "").trim();
      !b || l.has(b) || (l.add(b), c.push(b));
    }
    return c;
  }
  function np() {
    return ep("paint");
  }
  function Hi(i, o) {
    const c = String(o || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function $i(i) {
    const o = String(i || "").trim();
    return o ? `raster:${o}` : "";
  }
  function We(i) {
    const o = String(i || "").trim();
    if (!o) return "";
    const c = o.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : o).trim();
  }
  function zi(i, o = null) {
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
  function Nl(i, o = null) {
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
  function rp() {
    const i = new Set(np()), c = Ie().filter((l) => i.has(String((l == null ? void 0 : l.actionGroupId) || "")));
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
  function ip(i, o, c) {
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
    let b = 1 / 0, _ = -1 / 0, N = 1 / 0, S = -1 / 0;
    l.forEach((O) => {
      const $ = ji(Number((O == null ? void 0 : O.u) || 0), w);
      b = Math.min(b, $), _ = Math.max(_, $);
      const W = Number((O == null ? void 0 : O.v) || 0);
      N = Math.min(N, W), S = Math.max(S, W);
    });
    const k = c.reduce((O, $) => {
      const W = wr(String(($ == null ? void 0 : $.toolKind) || "pen")), dt = on[W] || on[ar], xt = Math.max(1, Number(($ == null ? void 0 : $.size) || 10)) * Math.max(0.1, Number((dt == null ? void 0 : dt.sizeScale) ?? 1));
      return Math.max(O, xt);
    }, 0), T = Math.max(35e-4, k / 2048);
    return {
      centerUv: { u: ((w + (b + _) * 0.5) % 1 + 1) % 1, v: U((N + S) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (_ - b) * 0.5 + T,
      halfH: (S - N) * 0.5 + T,
      uvPad: T
    };
  }
  function Qr(i, o, c) {
    const l = String(i || "").trim();
    if (!l) return null;
    const h = Ie().find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    if (!h) return null;
    if (!h.frame) {
      const m = c || In(l, o);
      h.frame = ip(l, o, m);
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
    })), o = rp().map((h) => ({
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
    var c, l, h, m, w, b;
    const o = ti().filter((_) => _.type === "strokeGroup").map((_) => String(_.actionGroupId || "")).filter((_) => !!_);
    if (i) {
      const _ = String(((l = (c = p.interaction) == null ? void 0 : c.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), N = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), S = String(((b = (w = p.interaction) == null ? void 0 : w.stroke) == null ? void 0 : b.toolKind) || "").trim();
      _ && N === "paint" && S !== "eraser" && !o.includes(_) && o.push(_);
    }
    return o;
  }
  function Ml(i = !0) {
    var b, _, N, S, k, T;
    const o = ti();
    if (!i) return o;
    const c = String(((_ = (b = p.interaction) == null ? void 0 : b.stroke) == null ? void 0 : _.actionGroupId) || "").trim(), l = String(((S = (N = p.interaction) == null ? void 0 : N.stroke) == null ? void 0 : S.layerKind) || "").trim(), h = String(((T = (k = p.interaction) == null ? void 0 : k.stroke) == null ? void 0 : T.toolKind) || "").trim();
    if (!c || l !== "paint" || h === "eraser" || o.some((O) => O.type === "strokeGroup" && String(O.actionGroupId || "") === c))
      return o;
    const m = pe();
    let w = o.reduce((O, $) => Math.max(O, Number(($ == null ? void 0 : $.z_index) || 0)), -1) + 1;
    return m && Ce(m) && String(m.actionGroupId || "") === c && (w = Number(m.z_index || 0)), [
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
  function ap() {
    return Ie().slice().sort((i, o) => Number((i == null ? void 0 : i.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((i) => ni(Hi("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function op() {
    var i;
    return (Array.isArray((i = d.painting) == null ? void 0 : i.raster_objects) ? d.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, c) => Number((o == null ? void 0 : o.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((o) => ei($i((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function $a(i = p.interaction) {
    const o = String((i == null ? void 0 : i.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object") return !0;
    if (o === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, l = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || l;
    }
    return !1;
  }
  function kl(i = p.interaction) {
    if (e !== "cutout") return !1;
    const o = String((i == null ? void 0 : i.kind) || "");
    return $a(i) || o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function sp(i = p.interaction) {
    if (!kl(i)) return 0;
    const o = String((i == null ? void 0 : i.kind) || "");
    return o === "paint_stroke" || o === "paint_lasso_fill" ? 120 : 33;
  }
  function _s() {
    var h, m, w, b, _, N, S;
    const i = p.interaction, o = String((i == null ? void 0 : i.kind) || "");
    if (!$a(i)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const k = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, T = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), O = ((w = k == null ? void 0 : k.rawPoints) == null ? void 0 : w.length) ?? ((b = k == null ? void 0 : k.points) == null ? void 0 : b.length) ?? 0, $ = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${T || "paint"}_${o}_live${$}_${O}_${p.livePaintInteractionRevision}`;
    }
    const c = String(((_ = i == null ? void 0 : i.item) == null ? void 0 : _.actionGroupId) || ""), l = String(((N = i == null ? void 0 : i.item) == null ? void 0 : N.rasterObjectId) || ((S = i == null ? void 0 : i.item) == null ? void 0 : S.id) || "");
    return `_${o}_${c || l || "active"}_${p.livePaintInteractionRevision}`;
  }
  function ws() {
    return [
      ...Array.isArray(d.stickers) ? d.stickers : [],
      ...Array.isArray(d.shots) ? d.shots : []
    ];
  }
  function vn(i) {
    return !!i && Array.isArray(d.shots) && d.shots.includes(i);
  }
  function Ee(i) {
    return !!i && Array.isArray(d.stickers) && d.stickers.includes(i);
  }
  function gn() {
    var i;
    return Array.isArray((i = d.painting) == null ? void 0 : i.raster_objects) ? d.painting.raster_objects : [];
  }
  function ei(i) {
    const o = We(i);
    if (!o) return null;
    const c = gn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: $i(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function qe(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const o = We(i.rasterObjectId || i.id || "");
    return !!o && !!ei($i(o));
  }
  function ni(i) {
    const o = zi(i), c = String(o.actionGroupId || "").trim();
    if (!c) return null;
    const l = Ie().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === c || String((h == null ? void 0 : h.actionGroupId) || "") === c);
    return l ? {
      ...l,
      id: Hi("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function Ce(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const o = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!o && !!ni(Hi(c, o));
  }
  function In(i, o = null) {
    const c = zi(i, o), l = String(c.actionGroupId || "").trim();
    return l ? li(c.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === l) : [];
  }
  function cp(i, o = "paint") {
    var m, w, b;
    const c = String(i || "").trim(), h = `${String(o || "paint").trim() || "paint"}:${c}:${p.mode}:${Wi()}`;
    if (p.mode === "frame") {
      const _ = Jt(), N = String((_ == null ? void 0 : _.id) || ""), S = _ ? Xe(_) : null;
      return `${h}:frame:${N}:${Math.round(Number((S == null ? void 0 : S.x) || 0))}:${Math.round(Number((S == null ? void 0 : S.y) || 0))}:${Math.round(Number((S == null ? void 0 : S.w) || 0))}:${Math.round(Number((S == null ? void 0 : S.h) || 0))}:${Math.round(Number(((m = p.frameView) == null ? void 0 : m.zoom) || 1) * 1e3)}:${Math.round(Number(((w = p.frameView) == null ? void 0 : w.panX) || 0))}:${Math.round(Number(((b = p.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function za(i, o, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: U(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function ji(i, o) {
    let c = Number(i || 0) - Number(o || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function Pl(i, o = null, c = null) {
    var N;
    const l = zi(i, o), h = Array.isArray(c) ? c : In(l.actionGroupId, l.layerKind), m = [];
    if (h.forEach((S) => {
      const k = (S == null ? void 0 : S.geometry) || null, T = (k == null ? void 0 : k.geometryKind) === "lasso_fill" ? k == null ? void 0 : k.points : (k == null ? void 0 : k.processedPoints) || (k == null ? void 0 : k.rawPoints) || (k == null ? void 0 : k.points) || [];
      Array.isArray(T) && m.push(...T);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const w = Number(((N = m[0]) == null ? void 0 : N.u) || 0);
    let b = 0, _ = 0;
    return m.forEach((S) => {
      b += w + ji(Number((S == null ? void 0 : S.u) || 0), w), _ += Number((S == null ? void 0 : S.v) || 0);
    }), {
      u: (b / m.length % 1 + 1) % 1,
      v: U(_ / m.length, 0, 1)
    };
  }
  function ja(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), w = ji(Number(i.u || 0), h), b = Number(i.v || 0) - m, _ = Number(l || 0) * Le, N = Math.cos(_), S = Math.sin(_), k = Math.max(0.02, Number(c || 1)), T = (w * N - b * S) * k, O = (w * S + b * N) * k;
    return {
      ...i,
      u: ((h + T) % 1 + 1) % 1,
      v: U(m + O, 0, 1)
    };
  }
  function Al(i, o, c, l = null, h = null, m = null) {
    const w = zi(i, h), b = String(w.actionGroupId || "").trim();
    if (!b) return !1;
    const _ = li(w.layerKind), N = Array.isArray(l) ? new Map(l.map((k) => [String((k == null ? void 0 : k.id) || ""), k])) : null;
    let S = !1;
    if (_.forEach((k) => {
      if (String((k == null ? void 0 : k.actionGroupId) || "").trim() !== b) return;
      const T = (N == null ? void 0 : N.get(String((k == null ? void 0 : k.id) || ""))) || k, O = k == null ? void 0 : k.geometry, $ = T == null ? void 0 : T.geometry;
      !O || !$ || (Array.isArray($.points) && (O.points = $.points.map((W) => za(W, o, c)), S = !0), Array.isArray($.rawPoints) && (O.rawPoints = $.rawPoints.map((W) => za(W, o, c)), S = !0), Array.isArray($.processedPoints) && (O.processedPoints = $.processedPoints.map((W) => za(W, o, c)), S = !0));
    }), S && m) {
      const k = Ie().find((T) => String((T == null ? void 0 : T.actionGroupId) || "") === b);
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
  function Cl(i, o = 1, c = 0, l = null, h = null, m = null) {
    const w = zi(i, h), b = String(w.actionGroupId || "").trim();
    if (!b) return !1;
    const _ = li(w.layerKind), N = Array.isArray(l) ? l : In(b, w.layerKind), S = Array.isArray(N) ? new Map(N.map((O) => [String((O == null ? void 0 : O.id) || ""), O])) : null, k = (m == null ? void 0 : m.centerUv) ?? Pl(b, w.layerKind, N);
    let T = !1;
    if (_.forEach((O) => {
      if (String((O == null ? void 0 : O.actionGroupId) || "").trim() !== b) return;
      const $ = (S == null ? void 0 : S.get(String((O == null ? void 0 : O.id) || ""))) || O, W = O == null ? void 0 : O.geometry, dt = $ == null ? void 0 : $.geometry;
      !W || !dt || (Array.isArray(dt.points) && (W.points = dt.points.map((xt) => ja(xt, k, o, c)), T = !0), Array.isArray(dt.rawPoints) && (W.rawPoints = dt.rawPoints.map((xt) => ja(xt, k, o, c)), T = !0), Array.isArray(dt.processedPoints) && (W.processedPoints = dt.processedPoints.map((xt) => ja(xt, k, o, c)), T = !0));
    }), T && m) {
      const O = Number(o || 1), $ = Ie().find((W) => String((W == null ? void 0 : W.actionGroupId) || "") === b);
      $ && ($.frame = {
        centerUv: m.centerUv,
        rot_deg: Number(m.rot_deg || 0) + Number(c || 0),
        halfW: m.halfW * O,
        halfH: m.halfH * O,
        uvPad: m.uvPad
      });
    }
    return T;
  }
  function Il(i, o, c, l = null) {
    const h = We(i);
    if (!h) return !1;
    const m = gn().find((S) => String((S == null ? void 0 : S.id) || "").trim() === h);
    if (!m) return !1;
    const w = l && typeof l == "object" ? l : m, b = (w == null ? void 0 : w.transform) || {}, _ = Number(b.du || 0) + Number(o || 0), N = U(Number(b.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = _, m.transform.dv = N, !0;
  }
  function pe() {
    const i = String(p.selectedId || "");
    if (!i) return null;
    const o = ni(i);
    if (o) return o;
    const c = ei(i);
    return c || (e === "cutout" ? ws().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null : bn().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null);
  }
  function En() {
    const i = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], o = [], c = /* @__PURE__ */ new Set();
    return i.forEach((l) => {
      const h = String(l || "").trim();
      if (!h || c.has(h)) return;
      c.add(h);
      const m = h === String(p.selectedId || "") ? pe() : ni(h) || ei(h) || (e === "cutout" ? ws().find((w) => String((w == null ? void 0 : w.id) || "") === h) : bn().find((w) => String((w == null ? void 0 : w.id) || "") === h));
      m && o.push(m);
    }), o;
  }
  function xs(i = null) {
    const o = Array.isArray(i) ? i : En();
    if (!o || o.length < 2) return null;
    const c = o.map((N) => De(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!c.length) return null;
    const l = c.flatMap((N) => N.corners.map((S) => Number((S == null ? void 0 : S.x) || 0))), h = c.flatMap((N) => N.corners.map((S) => Number((S == null ? void 0 : S.y) || 0))), m = Math.min(...l), w = Math.max(...l), b = Math.min(...h), _ = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + w) * 0.5, y: (b + _) * 0.5 },
      corners: [
        { x: m, y: b },
        { x: w, y: b },
        { x: w, y: _ },
        { x: m, y: _ }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + w) * 0.5, y: b, a: { x: m, y: b }, b: { x: w, y: b } },
        { edge: "right", x: w, y: (b + _) * 0.5, a: { x: w, y: b }, b: { x: w, y: _ } },
        { edge: "bottom", x: (m + w) * 0.5, y: _, a: { x: w, y: _ }, b: { x: m, y: _ } },
        { edge: "left", x: m, y: (b + _) * 0.5, a: { x: m, y: _ }, b: { x: m, y: b } }
      ],
      rotateStemBase: { x: (m + w) * 0.5, y: b },
      rotateHandle: { x: (m + w) * 0.5, y: b - 30 }
    };
  }
  function lp(i) {
    const o = String((i == null ? void 0 : i.id) || "").trim();
    return !!o && Array.isArray(p.selectedIds) && p.selectedIds.includes(o);
  }
  function El() {
    const i = pe();
    return i ? Ce(i) || qe(i) ? "stroke" : vn(i) ? "frame" : "image" : null;
  }
  function pr(i) {
    if (!i || typeof i != "object") return !1;
    if (Ce(i)) {
      const o = String(i.actionGroupId || i.id || "").trim(), c = Ie().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (qe(i)) {
      const o = We(i.rasterObjectId || i.id || ""), c = gn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function Ss(i = null) {
    const o = Array.isArray(i) ? i : En();
    return o.length > 0 && o.every((c) => pr(c));
  }
  function up(i, o) {
    const c = o === !0;
    if (!i || typeof i != "object") return !1;
    if (Ce(i)) {
      const l = String(i.actionGroupId || i.id || "").trim(), h = Ie().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    if (qe(i)) {
      const l = We(i.rasterObjectId || i.id || ""), h = gn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === c ? !1 : (h.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function fp() {
    if (r) return;
    const i = En();
    if (!i.length) return;
    const o = !Ss(i);
    let c = !1;
    i.forEach((l) => {
      up(l, o) && (c = !0);
    }), c && (ie(), be(), zt(), ft());
  }
  function Ui(i) {
    p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && Ee(i) ? d.active.selected_sticker_id = i.id || null : d.active.selected_sticker_id = null, i && vn(i) ? d.active.selected_shot_id = i.id || null : i ? vn(i) || (d.active.selected_shot_id = d.active.selected_shot_id) : d.active.selected_shot_id = null;
  }
  function dp(i, o = null) {
    const c = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((w) => {
      const b = String((w == null ? void 0 : w.id) || "").trim();
      !b || l.has(b) || (l.add(b), c.push(b));
    }), p.selectedIds = c;
    const h = String(o || "").trim();
    p.selectedId = h && c.includes(h) ? h : c[c.length - 1] || null;
    const m = pe();
    d.active.selected_sticker_id = m && Ee(m) && m.id || null, m && vn(m) ? d.active.selected_shot_id = m.id || null : c.length || (d.active.selected_shot_id = null);
  }
  function hp() {
    const i = (Array.isArray(d.shots) ? d.shots : []).map((c, l) => ({
      kind: "frame",
      item: c,
      label: "Frame"
    })), o = (Array.isArray(d.stickers) ? d.stickers : []).map((c, l) => {
      var m, w;
      const h = Me(c) ? String(c.id || Vr) : String(((w = (m = d.assets) == null ? void 0 : m[c.asset_id]) == null ? void 0 : w.name) || c.asset_id || c.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: c,
        label: h
      };
    });
    return [...i, ...o];
  }
  function pp(i) {
    return i === "frame" ? Dt.camera : i === "stroke" ? Dt.paintbrush_vertical_tool : Dt.image;
  }
  function Tl(i) {
    return !i || !i.item ? So(String((i == null ? void 0 : i.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${pp(i.kind)}</span><span>${So(String(i.label || ""))}</span>`;
  }
  function Dl() {
    return vs();
  }
  function Me(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === Vr || String(i.source_kind || "") === wc;
  }
  function ri(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function gp(i) {
    return Me(i) && ri(i) ? wh : 1;
  }
  function mp() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function yp() {
    return String(mp() || "") === "lasso_fill";
  }
  function bp() {
    if (r) return;
    const i = pe();
    !i || !Me(i) || (i.visible = ri(i), un(), ie(), be(), Bt(), zt(), ft());
  }
  function vp() {
    if (r || e !== "stickers") return;
    const i = pe();
    if (!i || !Me(i)) return;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return;
    i.yaw_deg = Number(o.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(o.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(o.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = Ns(xc, () => {
      ft();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = Dr(
      Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(o.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(o.rot_deg ?? i.rot_deg ?? 0), ie(), be(), Bt(), zt(), ft();
  }
  function _p(i) {
    if (!i || !Me(i)) return null;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return null;
    const c = {
      yaw_deg: Number(o.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? i.rot_deg ?? 0)
    }, l = Ns(xc, () => {
      ft();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (c.vFOV_deg = Dr(
      c.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), c;
  }
  function wp() {
    const i = pe();
    if (!i || !Me(i)) return !1;
    const o = _p(i);
    if (!o) return !1;
    const c = (l, h) => Math.abs(Number(l || 0) - Number(h || 0)) <= 1e-4;
    return !(c(i.yaw_deg, o.yaw_deg) && c(i.pitch_deg, o.pitch_deg) && c(i.hFOV_deg, o.hFOV_deg) && c(i.vFOV_deg, o.vFOV_deg) && c(i.rot_deg, o.rot_deg));
  }
  function Rl(i) {
    var c;
    const o = Aa(t == null ? void 0 : t.id);
    return Array.isArray((c = o == null ? void 0 : o.ui) == null ? void 0 : c[i]) ? o.ui[i] : Array.isArray(o == null ? void 0 : o[i]) ? o[i] : [];
  }
  function xp(i) {
    const o = Aa(t == null ? void 0 : t.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, i) ? o.ui[i] : o && Object.prototype.hasOwnProperty.call(o, i) ? o[i] : null;
  }
  function Sp(i, o = null) {
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
  function Ns(i, o = null) {
    const c = Rl(i), l = Array.isArray(c) && c.length ? c[0] : null, h = Fi(l);
    if (!h) return null;
    const m = `__ui__${i}`, w = jt.get(m);
    if (w && w.__panoSrc === h) return w;
    const b = new Image();
    return b.__panoSrc = h, b.onload = () => {
      typeof o == "function" ? o(b) : ft();
    }, b.src = h, jt.set(m, b), b;
  }
  function Ll(i = null) {
    const o = rd(t, ["sticker_image"], i, "sticker_image_exact");
    return o || Ns(xc, i);
  }
  function Ol(i) {
    const o = String(i || "");
    let c = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      c ^= o.charCodeAt(l), c = Math.imul(c, 16777619);
    return String(c >>> 0);
  }
  function Dr(i, o, c) {
    const l = Math.max(1, Number(o || 1)), h = Math.max(1, Number(c || 1)), m = U(Number(i || 30), 0.1, 179) * Le, w = 2 * Math.atan(Math.tan(m * 0.5) * (h / l));
    return U(w * jr, 0.1, 179);
  }
  function Np(i) {
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
      const w = Number(m.yaw_deg), b = Number(m.pitch_deg), _ = Number(m.roll_deg), N = Number(m.hFOV_deg);
      if (![w, b, _, N].every((O) => Number.isFinite(O))) return null;
      let S = ((w + 180) % 360 + 360) % 360 - 180;
      Object.is(S, -0) && (S = 0);
      const k = {
        yaw_deg: S,
        pitch_deg: U(b, -89.9, 89.9),
        roll_deg: _,
        hFOV_deg: U(N, 0.1, 179)
      }, T = Number(c.source_aspect);
      return Number.isFinite(T) && T > 0 && (k.source_aspect = T), k;
    } catch {
      return null;
    }
  }
  function Fl(i) {
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Wc(i);
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
  function Mp(i) {
    var b;
    if (!i || typeof i != "object") return Fl(null);
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let w = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const _ = U(h, 0.1, 179) * Le, N = U(m, 0.1, 179) * Le, S = Math.tan(N * 0.5);
      if (Math.abs(S) > 1e-6) {
        const k = Math.tan(_ * 0.5) / S;
        Number.isFinite(k) && k > 0 && (w = k);
      }
    }
    if (i != null && i.asset_id && ((b = d == null ? void 0 : d.assets) != null && b[i.asset_id])) {
      const _ = d.assets[i.asset_id], N = Number((_ == null ? void 0 : _.w) || 0), S = Number((_ == null ? void 0 : _.h) || 0);
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
  function kp(i) {
    var l, h, m, w, b;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((_) => String((_ == null ? void 0 : _.name) || "") === String(i)) : null, c = o == null ? void 0 : o.link;
    if (c != null) {
      const _ = Zh(t.graph, c), { originId: N, originSlot: S } = Jh(_), k = Aa(N), T = [
        k == null ? void 0 : k.output,
        k == null ? void 0 : k.result,
        (l = k == null ? void 0 : k.data) == null ? void 0 : l.output,
        (h = k == null ? void 0 : k.data) == null ? void 0 : h.result,
        (m = k == null ? void 0 : k.ui) == null ? void 0 : m.output,
        (w = k == null ? void 0 : k.ui) == null ? void 0 : w.result
      ];
      for (const O of T) {
        if (!Array.isArray(O)) continue;
        const $ = Number(S || 0), W = O[$];
        if (typeof W == "string" && W.trim()) return W;
      }
    }
    return String(((b = mn(t, i)) == null ? void 0 : b.value) || "");
  }
  function Pp(i, o, c) {
    const l = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Np(o);
    if (l) {
      const w = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || l.source_aspect || 1), b = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Dr(l.hFOV_deg, w, b),
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
  function Vl(i = "sync") {
    if (e !== "stickers" || r) return;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((O) => String((O == null ? void 0 : O.name) || "") === "sticker_image") : null, c = (o == null ? void 0 : o.link) ?? null, l = Ll(() => {
      var O;
      (O = t.__panoExternalStickerSync) == null || O.call(t, "image-loaded");
    }), h = Sp(xp("pano_sticker_input_pose"), null), m = kp("sticker_state"), w = Ol(h && typeof h == "object" ? JSON.stringify(h) : m), b = Array.isArray(d.stickers) ? d.stickers : d.stickers = [], _ = b.findIndex((O) => String((O == null ? void 0 : O.id) || "") === Vr);
    if (c == null) {
      _ >= 0 && (b.splice(_, 1), p.selectedId === Vr && (p.selectedId = null, p.selectedIds = [], d.active.selected_sticker_id = null), be(), Bt(), zt(), ft());
      return;
    }
    const N = b.reduce((O, $) => Math.max(O, Number(($ == null ? void 0 : $.z_index) || 0)), -1);
    let S = _ >= 0 ? b[_] : null;
    const k = !S || Number(S.source_link_id ?? -1) !== Number(c) || String(S.source_state_hash || "") !== w;
    S || (S = {
      id: Vr,
      source_kind: wc
    }, b.push(S)), S.id = Vr, S.source_kind = wc, S.source_link_id = Number(c), S.source_state_hash = w, S.visible = S.visible !== !1;
    let T = !1;
    if (k) {
      const O = Pp(h, m, l);
      Object.assign(S, O, {
        initial_pose: { ...O },
        visible: !0,
        z_index: N + 1
      }), T = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const O = Dr(
        Number(S.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(S.vFOV_deg || 0) - O) > 1e-6 && (S.vFOV_deg = O, T = !0);
    }
    T && (be(), Bt(), zt()), ft();
  }
  function ii(i = {}) {
    const c = i.preservePanelValues !== !1 ? pe() : null;
    c && (p.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: bi(c)
    }), p.selectedId = null, p.selectedIds = [], p.cutoutAspectOpen = !1, d.active.selected_sticker_id = null, d.active.selected_shot_id = null;
  }
  function Ap() {
    var l;
    if (e !== "cutout") return;
    const i = Array.isArray(d.shots) ? d.shots : [];
    if (!Array.isArray(i) || i.length === 0) return;
    const o = String(((l = d.active) == null ? void 0 : l.selected_shot_id) || ""), c = i.find((h) => String((h == null ? void 0 : h.id) || "") === o) || i[0];
    c && (d.active.selected_shot_id = c.id || null, p.viewYaw = Oe(Number(c.yaw_deg || 0)), p.viewPitch = U(Number(c.pitch_deg || 0), -89.9, 89.9));
  }
  function Ua() {
    if (!Y) return;
    e === "cutout" && Array.isArray(d.shots) && d.shots.length > 0 ? (Y.innerHTML = Dt.crosshair, Y.setAttribute("aria-label", "Look at frame"), Y.setAttribute("data-tip", "Look at frame")) : (Y.innerHTML = Dt.plus_circle, Y.setAttribute("aria-label", "Add frame"), Y.setAttribute("data-tip", "Add frame"));
  }
  function Ba() {
    const i = e === "cutout" && Array.isArray(d.shots) && d.shots.length > 0;
    p.mode === "frame" && !i && (p.mode = "pano"), at && (at.disabled = !i, at.setAttribute("aria-disabled", i ? "false" : "true")), z.forEach((o) => {
      const c = o.dataset.view === p.mode;
      o.setAttribute("aria-pressed", c ? "true" : "false");
    }), pt && pt.setAttribute("data-selected", p.mode), vu() ? ve(p.pointerPos) : A.style.cursor = p.mode === "pano" ? "grab" : "default";
  }
  function Cp() {
    const o = Gl({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function Ms() {
    const i = zn(p.viewYaw, p.viewPitch);
    let o = Yn(0, 1, 0);
    Math.abs(Nn(i, o)) > 0.999 && (o = Yn(0, 0, 1));
    const c = yi(bo(o, i)), l = yi(bo(i, c));
    return { right: c, up: l, fwd: i };
  }
  function Bi(i) {
    const { right: o, up: c, fwd: l } = Ms(), h = Nn(i, o), m = Nn(i, c), w = Nn(i, l);
    if (w <= 1e-5) return null;
    const b = A.width, _ = A.height, N = p.viewFov * Le, S = 2 * Math.atan(Math.tan(N / 2) * (_ / b)), k = b / 2 / Math.tan(N / 2), T = _ / 2 / Math.tan(S / 2);
    return {
      x: b / 2 + h / w * k,
      y: _ / 2 - m / w * T,
      z: w
    };
  }
  function ks(i, o) {
    const { right: c, up: l, fwd: h } = Ms(), m = A.width, w = A.height, b = p.viewFov * Le, _ = 2 * Math.atan(Math.tan(b / 2) * (w / m)), N = (i - m / 2) / (m / 2) * Math.tan(b / 2), S = (w / 2 - o) / (w / 2) * Math.tan(_ / 2), k = mo(mo(yo(c, N), yo(l, S)), h);
    return yi(k);
  }
  function gr() {
    const i = A.width, o = A.height, c = 2;
    if (i / Math.max(o, 1) >= c) {
      const b = o, _ = b * c;
      return { x: (i - _) * 0.5, y: 0, w: _, h: b };
    }
    const h = i, m = h / c;
    return { x: 0, y: (o - m) * 0.5, w: h, h: m };
  }
  function Hl(i) {
    var w;
    if (i && typeof i == "object" && (Me(i) || i.external === !0))
      return Ll(() => {
        var b;
        (b = t.__panoExternalStickerSync) == null || b.call(t, "image-loaded");
      });
    const o = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!o) return null;
    const c = jt.get(o);
    if (c) return c;
    const l = (w = d.assets) == null ? void 0 : w[o], h = Uv(l);
    if (!h) return null;
    const m = new Image();
    return m.onload = () => ft(), m.src = h, jt.set(o, m), m;
  }
  function $l(i, o = null) {
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
  function Ip(i) {
    const o = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!o) return null;
    const c = he.get(o);
    if (c) return c.ready ? c : null;
    const l = $l(i, () => {
      const S = he.get(o);
      S && (S.ready = !1), ft({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const h = Number(l.naturalWidth || l.width || 0), m = Number(l.naturalHeight || l.height || 0);
    if (h < 1 || m < 1) return null;
    const w = document.createElement("canvas");
    w.width = h, w.height = m;
    const b = w.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, h, m), b.drawImage(l, 0, 0, h, m);
    const _ = b.getImageData(0, 0, h, m).data, N = { canvas: w, width: h, height: m, alpha: _, ready: !0 };
    return he.set(o, N), N;
  }
  function Ep(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), w = ji(Number(i.u || 0), h), b = Number(i.v || 0) - m, _ = Math.max(0.02, Number(c || 1)), N = Number(l || 0) * Le, S = Math.cos(N), k = Math.sin(N), T = w / _, O = b / _, $ = T * S + O * k, W = -T * k + O * S;
    return {
      ...i,
      u: ((h + $) % 1 + 1) % 1,
      v: m + W
    };
  }
  function Tp(i, o) {
    if (!i || !o) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const l = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, w = Ep(
      m,
      h,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), b = Number(c.u1 || 0) - Number(c.u0 || 0), _ = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(b > 1e-6) || !(_ > 1e-6)) return null;
    const N = ji(Number(w.u || 0), Number(c.u0 || 0)) / b, S = (Number(w.v || 0) - Number(c.v0 || 0)) / _;
    if (N < 0 || N > 1 || S < 0 || S > 1) return 0;
    const k = Ip(i);
    if (!k) return null;
    const T = U(Math.floor(N * k.width), 0, k.width - 1), O = U(Math.floor(S * k.height), 0, k.height - 1);
    return Number(k.alpha[(O * k.width + T) * 4 + 3] || 0);
  }
  function zl(i, o, c, l = null) {
    if (!(o != null && o.visible) || !or(c, o.corners)) return !1;
    const h = l || _n(c, performance.now()), m = Tp(i, h);
    return m === null ? !0 : m > 8;
  }
  function Dp() {
    var l, h, m, w, b, _, N, S;
    const i = ((h = (l = p.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, Tr(!1))) || null, o = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((b = (w = i == null ? void 0 : i.displayPaint) == null ? void 0 : w.canvas) == null ? void 0 : b.width) || 2048)), c = Math.max(1, Number(((_ = i == null ? void 0 : i.descriptor) == null ? void 0 : _.height) || ((S = (N = i == null ? void 0 : i.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : S.height) || 1024));
    return { width: o, height: c };
  }
  function Gi() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function Rp(i, o = null) {
    const c = We((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.bbox) || null;
    if (!c || !l) return null;
    const h = $l(i, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: w } = Dp(), b = (i == null ? void 0 : i.transform) || {}, _ = [
      c,
      m,
      w,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      Wi()
    ].join(":"), N = xe.get(_);
    if (N) return N;
    xe.size > 64 && xe.clear();
    const S = document.createElement("canvas");
    S.width = m, S.height = w;
    const k = S.getContext("2d");
    if (!k) return null;
    const T = Number(l.u0 || 0) * m, O = Number(l.v0 || 0) * w, $ = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * m), W = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * w), dt = T + $ * 0.5 + Number(b.du || 0) * m, xt = O + W * 0.5 + Number(b.dv || 0) * w, _t = Number(b.rot_deg || 0) * Le, st = Math.max(0.01, Number(b.scale || 1));
    for (const ht of [-m, 0, m])
      k.save(), k.translate(dt + ht, xt), k.rotate(_t), k.scale(st, st), k.drawImage(h, -$ * 0.5, -W * 0.5, $, W), k.restore();
    return xe.set(_, S), S;
  }
  function jl() {
    return bs(d, {
      selectedId: p.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Ul(i) {
    return xh(
      d,
      (o, c, l) => Hl(l || o),
      { scene: i }
    );
  }
  function Ps(i, o, c, l, h = "modal_object_view") {
    var dt, xt, _t, st;
    if (!i || !o || !c) return !1;
    const m = String((c == null ? void 0 : c.mode) || ""), w = !!l && !!l.complete && Number(l.naturalWidth || l.width || 0) > 1 && Number(l.naturalHeight || l.height || 0) > 1;
    if (m === "unwrap") {
      let ht = !1;
      w && p.showPanorama && (i.save(), i.globalAlpha = 1, i.drawImage(l, o.x, o.y, o.w, o.h), i.restore(), ht = !0);
      const gt = Tr(), vt = ((xt = (dt = p.paintEngine) == null ? void 0 : dt.getErpTarget) == null ? void 0 : xt.call(dt, gt)) || null, ut = p.showObjects && ((_t = vt == null ? void 0 : vt.displayPaint) == null ? void 0 : _t.canvas) || null, j = p.showMask && ((st = vt == null ? void 0 : vt.committedMask) == null ? void 0 : st.canvas) || null;
      return ut && (i.drawImage(ut, o.x, o.y, o.w, o.h), ht = !0), j && (i.drawImage(j, o.x, o.y, o.w, o.h), ht = !0), ht;
    }
    if (ql(o, c))
      return Up(
        o,
        c,
        w && p.showPanorama ? l : null,
        `${h}_bg_gl`
      );
    const _ = Yl(), N = Xl(_), S = p.showObjects ? Zl() : null, k = p.showMask ? Jl() : null, T = gc({
      stateRevision: [
        h,
        w ? String(l.currentSrc || l.src || "") : "no_bg",
        w ? Number(l.naturalWidth || l.width || 0) : 0,
        w ? Number(l.naturalHeight || l.height || 0) : 0,
        Array.isArray(N) ? N.map((ht) => `${String((ht == null ? void 0 : ht.assetId) || "")}:${String((ht == null ? void 0 : ht.revision) || "")}`).join(",") : "none",
        S ? Rr() : "paint:none",
        k ? `${Tn()}:mask` : "mask:none"
      ].join("|"),
      backgroundSource: w && p.showPanorama ? l : null,
      backgroundRevision: w ? `${h}:bg` : "",
      coverageDeg: $e(d.coverage),
      scene: _,
      textures: N,
      paintSource: S,
      paintRevision: S ? Rr() : "",
      maskSource: k,
      maskRevision: k ? `${Tn()}:mask` : "",
      rasterEntries: [],
      backgroundOpacity: 1,
      showMaskTint: !1
    }), O = m === "cutout" ? Q : ct;
    if (!O.syncState(T)) return !1;
    const W = O.renderToTarget(`${h}_direct`, c, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return W ? (i.drawImage(W, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function As(i, o = "sticker.png") {
    const c = new FormData();
    c.append("image", i), c.append("type", "input"), c.append("subfolder", "panorama_stickers");
    const l = await tn.fetchApi("/upload/image", { method: "POST", body: c });
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
  async function Cs(i, o) {
    const c = await new Promise((b) => i.toBlob(b, "image/png")), l = new FormData();
    l.append("image", c, o), l.append("type", "temp"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const h = await tn.fetchApi("/upload/image", { method: "POST", body: l });
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
  let Is = null, Ga = !1;
  function Lp() {
    const i = Qf(d.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const o = d.painting_layer, c = Tn();
    return !o || typeof o != "object" || String(o.revision || "") !== c || i.totalPaintCount > 0 && !o.paint || i.totalMaskCount > 0 && !o.mask;
  }
  function Es() {
    const i = String(t.id ?? "0"), o = ga.get(i);
    if (Ga && o) return o;
    const c = (async () => {
      var m, w, b, _, N, S, k, T, O, $, W, dt;
      const l = Tn(), h = Qf(d.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        d.painting_layer !== null && (d.painting_layer = null, Is = l, Rn());
        return;
      }
      if (Is !== l && !Ga) {
        Ga = !0;
        try {
          qa();
          const xt = Tr(!1), _t = ((w = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : w.call(m, xt)) || null, st = ((b = _t == null ? void 0 : _t.displayPaint) == null ? void 0 : b.canvas) || null, ht = ((_ = _t == null ? void 0 : _t.committedMask) == null ? void 0 : _.canvas) || null, gt = Math.max(1, Number(((N = _t == null ? void 0 : _t.descriptor) == null ? void 0 : N.width) || (st == null ? void 0 : st.width) || (ht == null ? void 0 : ht.width) || 2048)), vt = Math.max(1, Number(((S = _t == null ? void 0 : _t.descriptor) == null ? void 0 : S.height) || (st == null ? void 0 : st.height) || (ht == null ? void 0 : ht.height) || 1024));
          (!st && h.totalPaintCount > 0 || !ht && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((k = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : k.width) || 0) !== gt || Number(((T = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : T.height) || 0) !== vt) && (p._paintLayerSyncBlankSurface = $s(gt, vt)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, gt, vt));
          const ut = st || h.totalPaintCount > 0 && ((O = p._paintLayerSyncBlankSurface) == null ? void 0 : O.canvas) || null, j = ht || h.totalMaskCount > 0 && (($ = p._paintLayerSyncBlankSurface) == null ? void 0 : $.canvas) || null;
          if (!ut && !j) return;
          let ot = null, At = null;
          const Ut = [];
          if (h.totalPaintCount > 0) {
            ot = await Cs(ut, `pano_paint_${i}.png`);
            for (const Ct of xt) {
              const Rt = String(Ct || "").trim();
              if (!Rt) continue;
              const $t = ((dt = (W = p.paintEngine) == null ? void 0 : W.getGroupDisplayCanvas) == null ? void 0 : dt.call(W, Rt)) || null;
              if (!$t) continue;
              const Ft = Rt.replace(/[^a-zA-Z0-9_-]+/g, "_"), Vt = await Cs($t, `pano_group_${i}_${Ft}.png`);
              Vt && Ut.push({
                id: Rt,
                actionGroupId: Rt,
                image: Vt
              });
            }
          }
          h.totalMaskCount > 0 && (At = await Cs(j, `pano_mask_${i}.png`)), l === Tn() && (d.painting_layer = {
            paint: ot,
            mask: At,
            groups: Ut,
            revision: l
          }, Is = l, Rn());
        } catch (xt) {
          console.warn("[pano] paint layer upload failed:", xt);
        } finally {
          Ga = !1;
        }
      }
    })();
    return ga.set(i, c), c.finally(() => {
      ga.get(i) === c && ga.delete(i);
    }), c;
  }
  function ai() {
    const i = Gv(t, "pano_input_images", jt, () => ft());
    if (i) return i;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((w) => String((w == null ? void 0 : w.name) || "")) : [], c = o.includes("erp_image"), l = o.includes("bg_erp");
    let h = [];
    return r && (c || l) ? h = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : h = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], rd(t, h, () => ft(), `background:${h.join("|")}`);
  }
  function Bl(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Op() {
    if (!Pt.hasPresentedFrame) return "boot";
    let i = !1, o = !1;
    if (p.showPanorama) {
      const c = ai();
      i = !!c && !Bl(c);
    }
    if (p.showObjects) {
      const c = Array.isArray(d.stickers) ? d.stickers : [];
      for (const l of c) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const h = Hl(l);
        if (h && !Bl(h)) {
          o = !0;
          break;
        }
      }
    }
    return i && o ? "mixed" : i ? "background" : o ? "stickers" : "";
  }
  function oi() {
    const i = new Set(
      (d.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(d.assets || {}).forEach((o) => {
      i.has(o) || (delete d.assets[o], jt.delete(o));
    });
  }
  function Ts(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(U(i.y, -1, 1))
    };
  }
  function Ds(i, o = null) {
    const { lon: c, lat: l } = Ts(i), h = gr();
    let m = h.x + (c / (2 * Math.PI) + 0.5) * h.w;
    const w = h.y + (0.5 - l / Math.PI) * h.h;
    if (o !== null) {
      for (; m - o > h.w / 2; ) m -= h.w;
      for (; m - o < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: w, z: 1 };
  }
  function Ka(i) {
    const o = zn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let c = Yn(0, 1, 0);
    Math.abs(Nn(o, c)) > 0.999 && (c = Yn(0, 0, 1));
    const l = yi(bo(c, o)), h = yi(bo(o, l)), m = Math.tan(U(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * Le), w = Math.tan(U(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * Le), b = Number(i.rot_deg || i.roll_deg || 0) * Le, _ = Math.cos(b), N = Math.sin(b);
    return {
      centerDir: o,
      right: l,
      up: h,
      tanX: m,
      tanY: w,
      cr: _,
      sr: N
    };
  }
  function mr(i, o, c) {
    const l = o * i.cr - c * i.sr, h = o * i.sr + c * i.cr;
    return yi(mo(mo(i.centerDir, yo(i.right, l)), yo(i.up, h)));
  }
  function Gl(i) {
    const o = Ka(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: h }) => mr(o, l * o.tanX, h * o.tanY));
  }
  function Kl(i, o, c) {
    const l = Ka(i), h = (o * 2 - 1) * l.tanX, m = (1 - c * 2) * l.tanY;
    return mr(l, h, m);
  }
  function Fp(i) {
    const o = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: U((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Vp(i) {
    var _, N, S, k;
    const o = (i == null ? void 0 : i.bbox) || null;
    if (!o) return [];
    const c = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((_ = i == null ? void 0 : i.transform) == null ? void 0 : _.scale) || 1)), h = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.rot_deg) || 0), m = Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.du) || 0), w = Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((T) => za(ja(T, c, l, h), m, w));
  }
  function Hp(i) {
    const o = We((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, l = (i == null ? void 0 : i.bbox) || {}, h = `${o}:${p.mode}:${Wi()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (p.mode === "frame") {
      const m = Jt(), w = m ? Xe(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function $p(i) {
    const o = String((i == null ? void 0 : i.id) || ""), l = [
      vn(i) ? "frame" : Ee(i) ? "sticker" : "item",
      o,
      p.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      bi(i)
    ].join(":");
    if (p.mode === "frame") {
      const h = Jt(), m = h ? Xe(h) : null;
      return `${l}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function zp() {
    var o;
    const i = String(((o = d.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return i === "draft" ? p.hqFrames && p.hqFrames > 0 ? [28, 20] : p.interaction ? [12, 9] : [20, 14] : i === "high" ? p.hqFrames && p.hqFrames > 0 ? [48, 36] : p.interaction ? [20, 14] : [36, 26] : p.hqFrames && p.hqFrames > 0 ? [40, 30] : p.interaction ? [16, 12] : [28, 20];
  }
  function Wl() {
    var i;
    return !!L && !!((i = ct == null ? void 0 : ct.isSupported) != null && i.call(ct));
  }
  function ql(i, o) {
    return !Wl() || e !== "stickers" && e !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((A == null ? void 0 : A.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((A == null ? void 0 : A.height) || 0));
  }
  function Yl() {
    return p.showObjects ? jl() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Xl(i) {
    return !p.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : Ul(i);
  }
  function Zl() {
    var o, c, l, h;
    const i = Tr();
    return ((h = (l = (c = (o = p.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, i)) == null ? void 0 : l.displayPaint) == null ? void 0 : h.canvas) || null;
  }
  function Jl() {
    var o, c, l, h;
    const i = Tr();
    return ((h = (l = (c = (o = p.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, i)) == null ? void 0 : l.committedMask) == null ? void 0 : h.canvas) || null;
  }
  function jp(i, o = "modal_bg_gl") {
    const c = Yl(), l = Xl(c), h = !!i && !!i.complete && Number(i.naturalWidth || i.width || 0) > 1 && Number(i.naturalHeight || i.height || 0) > 1, m = h ? [
      String(i.currentSrc || i.src || ""),
      Number(i.naturalWidth || i.width || 0),
      Number(i.naturalHeight || i.height || 0)
    ].join("|") : "none", w = p.showObjects ? Zl() : null, b = p.showMask ? Jl() : null, _ = [
      o,
      m,
      Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((N) => String((N == null ? void 0 : N.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((N) => `${String((N == null ? void 0 : N.assetId) || "")}:${String((N == null ? void 0 : N.revision) || "")}`).join(",") : "none",
      w ? Rr() : "paint:none",
      b ? `${Tn()}:mask` : "mask:none",
      p.showPanorama ? "panorama:1" : "panorama:0",
      p.showObjects ? "objects:1" : "objects:0",
      p.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: gc({
        stateRevision: _,
        backgroundSource: h ? i : null,
        backgroundRevision: h ? `${o}:${m}` : "",
        coverageDeg: $e(d.coverage),
        scene: c,
        textures: l,
        paintSource: w,
        paintRevision: w ? Rr() : "",
        maskSource: b,
        maskRevision: b ? `${Tn()}:mask` : "",
        rasterEntries: [],
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: h || l.length > 0 || !!w || !!b
    };
  }
  function Rs() {
    if (!L) return;
    const i = L.getContext("webgl2");
    if (i)
      i.viewport(0, 0, L.width, L.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const o = L.getContext("2d");
      o && (o.clearRect(0, 0, L.width, L.height), o.fillStyle = "#070707", o.fillRect(0, 0, L.width, L.height));
    }
    Pt.backgroundWasVisible = !1, Pt.backgroundDirty = !1;
  }
  function Up(i, o, c, l = "modal_bg_gl") {
    var N;
    if (!ql(i, o)) return !1;
    if (!Pt.backgroundDirty && Pt.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: m } = jp(c, l);
    if (!m || !ct.syncState(h))
      return Rs(), !1;
    const b = ct.renderToTarget("modal_pano", o, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), _ = (N = L == null ? void 0 : L.getContext) == null ? void 0 : N.call(L, "2d");
    return !b || !_ ? (Rs(), !1) : (_.clearRect(0, 0, L.width, L.height), _.drawImage(b, 0, 0, L.width, L.height), Pt.backgroundWasVisible = !0, Pt.backgroundDirty = !1, !0);
  }
  function Bp(i = !1) {
    const o = A.width, c = A.height, l = gr();
    if (C.globalAlpha = 1, C.lineWidth = 1, i || (C.fillStyle = "#070707", C.fillRect(0, 0, o, c), C.fillStyle = "#070707", C.fillRect(l.x, l.y, l.w, l.h)), qa(), Ps(
      C,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      ai(),
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
  function Ql(i, o, c = 1) {
    let l = !1;
    C.strokeStyle = o, C.lineWidth = c, C.beginPath();
    for (const h of i) {
      const m = Bi(h);
      if (!m) {
        l = !1;
        continue;
      }
      l ? C.lineTo(m.x, m.y) : (C.moveTo(m.x, m.y), l = !0);
    }
    C.stroke();
  }
  function Gp(i = !1) {
    const o = A.width, c = A.height;
    if (i || (Wl() ? C.clearRect(0, 0, o, c) : (C.fillStyle = "#070707", C.fillRect(0, 0, o, c))), qa(), Ps(
      C,
      { x: 0, y: 0, w: o, h: c },
      {
        mode: "panorama",
        yawDeg: p.viewYaw,
        pitchDeg: p.viewPitch,
        fovDeg: p.viewFov,
        coverageDeg: $e(d.coverage)
      },
      ai(),
      "modal_pano"
    ), p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let w = -89; w <= 89; w += 4) m.push(zn(h, w));
        Ql(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let w = -180; w <= 180; w += 4) m.push(zn(w, h));
        Ql(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: zn(-90, 0) },
        { name: "Front", dir: zn(0, 0) },
        { name: "Right", dir: zn(90, 0) },
        { name: "Back", dir: zn(180, 0) }
      ];
      C.fillStyle = "rgba(250, 250, 250, 0.42)", C.font = "500 11px Geist, sans-serif", C.textAlign = "center", l.forEach((h) => {
        const m = Bi(h.dir);
        m && C.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function tu(i, o = null, c = null) {
    if (p.mode === "frame") {
      const l = o || Jt();
      if (!l) return [];
      const h = c || Xe(l);
      return Ng(i, l, h);
    }
    return wg(i);
  }
  function Kp(i, o) {
    const c = String(i.actionGroupId || i.id || "").trim(), l = In(c, i.layerKind), h = [], m = [], w = p.mode === "frame" ? Jt() : null, b = w ? Xe(w) : null;
    for (const st of l) {
      const ht = (st == null ? void 0 : st.geometry) || null, gt = (ht == null ? void 0 : ht.geometryKind) === "lasso_fill" ? ht == null ? void 0 : ht.points : (ht == null ? void 0 : ht.processedPoints) || (ht == null ? void 0 : ht.rawPoints) || (ht == null ? void 0 : ht.points) || [], vt = tu(gt, w, b).filter((ot) => Number.isFinite(ot == null ? void 0 : ot.x) && Number.isFinite(ot == null ? void 0 : ot.y));
      if (!vt.length) continue;
      m.push(...vt);
      const ut = wr(String((st == null ? void 0 : st.toolKind) || "pen")), j = on[ut] || on[ar];
      h.push({
        points: vt,
        closed: String((ht == null ? void 0 : ht.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((st == null ? void 0 : st.size) || 10) * Math.max(0.1, Number((j == null ? void 0 : j.sizeScale) ?? 1)) + 10),
        layerKind: String((st == null ? void 0 : st.layerKind) || i.layerKind || "paint")
      });
    }
    if (!m.length) {
      const st = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(o, st), st;
    }
    let _ = 1 / 0, N = 1 / 0, S = -1 / 0, k = -1 / 0;
    for (const st of h)
      for (const gt of Array.isArray(st == null ? void 0 : st.points) ? st.points : []) {
        const vt = Number((gt == null ? void 0 : gt.x) || 0), ut = Number((gt == null ? void 0 : gt.y) || 0);
        _ = Math.min(_, vt - 2), N = Math.min(N, ut - 2), S = Math.max(S, vt + 2), k = Math.max(k, ut + 2);
      }
    if (!Number.isFinite(_) || !Number.isFinite(N) || !Number.isFinite(S) || !Number.isFinite(k)) {
      const st = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(o, st), st;
    }
    const T = [
      { x: _, y: N },
      { x: S, y: N },
      { x: S, y: k },
      { x: _, y: k }
    ], O = { x: (_ + S) * 0.5, y: (N + k) * 0.5 }, $ = { x: O.x, y: N }, W = { x: S, y: O.y }, dt = { x: O.x, y: k }, xt = { x: _, y: O.y }, _t = {
      kind: "strokeGroup",
      center: O,
      corners: T,
      edgeMidpoints: [
        { edge: "top", x: $.x, y: $.y, a: T[0], b: T[1] },
        { edge: "right", x: W.x, y: W.y, a: T[1], b: T[2] },
        { edge: "bottom", x: dt.x, y: dt.y, a: T[2], b: T[3] },
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
    const c = Vp(i), l = tu(c);
    if (!Array.isArray(l) || l.length < 4) {
      const b = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(o, b), b;
    }
    const h = l.slice(0, 4).map((b) => ({ x: Number((b == null ? void 0 : b.x) || 0), y: Number((b == null ? void 0 : b.y) || 0) })), w = {
      kind: "rasterObject",
      center: {
        x: h.reduce((b, _) => b + Number(_.x || 0), 0) / h.length,
        y: h.reduce((b, _) => b + Number(_.y || 0), 0) / h.length
      },
      corners: h,
      visible: !0
    };
    return p._strokeGeomCache.set(o, w), w;
  }
  function yr(i, o = null, c = null, l = null) {
    if (p.mode === "frame") {
      const _t = c || Jt(), st = l || Xe(_t), ht = _t ? Yi(_t, i) : null;
      return ht ? {
        x: Number(st.x || 0) + Number(ht.x || 0) * Number(st.w || 0),
        y: Number(st.y || 0) + Number(ht.y || 0) * Number(st.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return Ds(i, o);
    const { right: h, up: m, fwd: w } = Ms(), b = Nn(i, h), _ = Nn(i, m), N = Nn(i, w), S = A.width, k = A.height, T = p.viewFov * Le, O = 2 * Math.atan(Math.tan(T / 2) * (k / Math.max(S, 1))), $ = S / 2 / Math.tan(T / 2), W = k / 2 / Math.tan(O / 2), dt = Math.max(N, 1e-4), xt = Math.max(S, k) * 2;
    return {
      x: U(S / 2 + b / dt * $, -xt, S + xt),
      y: U(k / 2 - _ / dt * W, -xt, k + xt),
      z: dt
    };
  }
  function qp(i) {
    const o = zn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), c = p.mode === "frame" ? Jt() : null, l = c ? Xe(c) : null, h = yr(o, null, c, l);
    if (!h) return { visible: !1 };
    const m = Ka(i), b = Gl(i).map((gt) => yr(gt, h.x, c, l)), _ = mr(m, 0, m.tanY), N = mr(m, 0, m.tanY + Math.max(m.tanY * 0.43, 0.053)), S = yr(_, h.x, c, l), k = yr(N, (S == null ? void 0 : S.x) ?? h.x, c, l), T = ((k == null ? void 0 : k.x) ?? S.x) - S.x, O = ((k == null ? void 0 : k.y) ?? S.y) - S.y, $ = Math.hypot(T, O) || 1, W = {
      x: S.x + T / $ * 30,
      y: S.y + O / $ * 30
    }, dt = yr(mr(m, 0, m.tanY), h.x, c, l), xt = yr(mr(m, m.tanX, 0), h.x, c, l), _t = yr(mr(m, 0, -m.tanY), h.x, c, l), st = yr(mr(m, -m.tanX, 0), h.x, c, l), ht = [
      {
        edge: "top",
        x: dt.x,
        y: dt.y,
        a: { x: b[0].x, y: b[0].y },
        b: { x: b[1].x, y: b[1].y }
      },
      {
        edge: "right",
        x: xt.x,
        y: xt.y,
        a: { x: b[1].x, y: b[1].y },
        b: { x: b[2].x, y: b[2].y }
      },
      {
        edge: "bottom",
        x: _t.x,
        y: _t.y,
        a: { x: b[2].x, y: b[2].y },
        b: { x: b[3].x, y: b[3].y }
      },
      {
        edge: "left",
        x: st.x,
        y: st.y,
        a: { x: b[3].x, y: b[3].y },
        b: { x: b[0].x, y: b[0].y }
      }
    ];
    return {
      center: { x: h.x, y: h.y },
      corners: b.map((gt) => ({ x: gt.x, y: gt.y })),
      edgeMidpoints: ht,
      rotateStemBase: { x: S.x, y: S.y },
      rotateHandle: W,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function De(i) {
    if (Ce(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = cp(h, i.layerKind), w = p._strokeGeomCache.get(m);
      return w || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Kp(i, m));
    }
    if (qe(i)) {
      const h = Hp(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Wp(i, h));
    }
    const o = $p(i), c = p._strokeGeomCache.get(o);
    if (c) return c;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const l = qp(i);
    return p._strokeGeomCache.set(o, l), l;
  }
  function Wa(i, o, c, l = null) {
    const h = [];
    for (let m = 0; m <= c; m += 1) {
      const w = m / c;
      let b = 0, _ = 0;
      o === 0 ? (b = w, _ = 0) : o === 1 ? (b = 1, _ = w) : o === 2 ? (b = 1 - w, _ = 1) : (b = 0, _ = 1 - w);
      const N = Kl(i, b, _), S = p.mode === "unwrap" ? Ds(N, l) : Bi(N);
      S && h.push(S);
    }
    return h;
  }
  function Yp(i, o) {
    const c = zn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = p.mode === "unwrap" ? Ds(c) : null, h = l ? l.x : null, m = p.mode === "pano" ? 28 : 20, w = [
      Wa(i, 0, m, h),
      Wa(i, 1, m, h),
      Wa(i, 2, m, h),
      Wa(i, 3, m, h)
    ];
    C.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", C.lineWidth = o ? 2 : 1, C.beginPath();
    let b = !1;
    for (const _ of w)
      for (const N of _)
        b ? C.lineTo(N.x, N.y) : (C.moveTo(N.x, N.y), b = !0);
    C.closePath(), C.stroke();
  }
  function Xp() {
    const i = [...Array.isArray(d.stickers) ? d.stickers : []].sort((c, l) => Number(c.z_index || 0) - Number(l.z_index || 0));
    if (p.mode === "frame") return i;
    const o = Array.isArray(d.shots) ? d.shots : [];
    return [...i, ...o];
  }
  function Ls() {
    const i = [...Array.isArray(d.stickers) ? d.stickers : []].sort((c, l) => Number(l.z_index || 0) - Number(c.z_index || 0));
    if (p.mode === "frame") return i;
    const o = Array.isArray(d.shots) ? d.shots : [];
    return [...i, ...o];
  }
  function Os(i, o = []) {
    if (!(!i || !Array.isArray(o) || o.length < 4)) {
      i.beginPath(), i.moveTo(o[0].x, o[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(o[c].x, o[c].y);
      i.closePath();
    }
  }
  function Zp(i, o, c, l) {
    if (Ee(i)) {
      const h = C.globalAlpha;
      C.globalAlpha = gp(i), p.mode === "frame" ? (C.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", C.lineWidth = c ? 2 : 1, Os(C, o.corners), C.stroke()) : Yp(i, c), C.globalAlpha = h;
      return;
    }
    C.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Os(C, o.corners), C.fill(), C.strokeStyle = c ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", C.lineWidth = c ? 2.8 : 1.9, Os(C, o.corners), C.stroke();
  }
  function Jp(i, o, c) {
    C.fillStyle = c, o.corners.forEach((l) => {
      C.beginPath(), C.arc(l.x, l.y, 6.5, 0, Math.PI * 2), C.fill();
    }), vn(i) && (C.strokeStyle = c, C.lineCap = "round", C.lineWidth = 4, o.edgeMidpoints.forEach((l) => {
      var S, k, T, O;
      const h = (((S = l.b) == null ? void 0 : S.x) ?? l.x) - (((k = l.a) == null ? void 0 : k.x) ?? l.x), m = (((T = l.b) == null ? void 0 : T.y) ?? l.y) - (((O = l.a) == null ? void 0 : O.y) ?? l.y), w = Math.hypot(h, m) || 1, b = h / w, _ = m / w, N = 10;
      C.beginPath(), C.moveTo(l.x - b * N, l.y - _ * N), C.lineTo(l.x + b * N, l.y + _ * N), C.stroke();
    }), C.lineCap = "butt"), Ce(i) || (C.strokeStyle = "rgba(250, 250, 250, 0.9)", C.lineWidth = 1.8, C.beginPath(), C.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), C.lineTo(o.rotateHandle.x, o.rotateHandle.y), C.stroke(), C.fillStyle = c, C.beginPath(), C.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), C.fill());
  }
  function Qp() {
    var b;
    const [i, o] = zp(), c = En(), l = c.length > 1, h = e === "cutout" ? Xp() : bn(), m = h.map((_) => `${String((_ == null ? void 0 : _.id) || "")}:${vn(_) ? "frame" : Number((_ == null ? void 0 : _.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== h || p._sortedItemsCache.orderKey !== m) && (p._sortedItemsCache = {
      src: h,
      orderKey: m,
      sorted: [...h]
    });
    const w = p._sortedItemsCache.sorted;
    for (const _ of w) {
      const N = !l && lp(_);
      if (p.mode === "frame" && !N || !p.showObjects && !vn(_)) continue;
      const S = De(_);
      if (e !== "stickers" && !S.visible)
        continue;
      const k = Ee(_), T = pr(_);
      if (Zp(_, S, N, T), N && S.visible) {
        const O = T ? "#ff4d4f" : k && Me(_) ? "#f59e0b" : "#0070f3";
        Jp(_, S, O);
      }
    }
    if (l) {
      const _ = xs(c);
      if (_ != null && _.visible) {
        const N = Ss(c) ? "#ff4d4f" : "#0070f3";
        C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.95)", C.lineWidth = 2, C.setLineDash([6, 4]), C.beginPath(), C.moveTo(_.corners[0].x, _.corners[0].y);
        for (let S = 1; S < _.corners.length; S += 1) C.lineTo(_.corners[S].x, _.corners[S].y);
        C.closePath(), C.stroke(), C.setLineDash([]), C.fillStyle = N, _.corners.forEach((S) => {
          C.beginPath(), C.arc(S.x, S.y, 6.5, 0, Math.PI * 2), C.fill();
        }), C.restore();
      }
    } else
      c.forEach((_) => {
        if (!Ce(_) && !qe(_)) return;
        const N = De(_);
        if (!(N != null && N.visible)) return;
        const S = pr(_) ? "#ff4d4f" : "#0070f3";
        C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.95)", C.lineWidth = 2, C.setLineDash([6, 4]), C.beginPath(), C.moveTo(N.corners[0].x, N.corners[0].y);
        for (let k = 1; k < N.corners.length; k += 1) C.lineTo(N.corners[k].x, N.corners[k].y);
        C.closePath(), C.stroke(), C.setLineDash([]), Ce(_) && (C.fillStyle = S, N.corners.forEach((k) => {
          C.beginPath(), C.arc(k.x, k.y, 6.5, 0, Math.PI * 2), C.fill();
        })), C.restore();
      });
    if (((b = p.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const _ = xu(p.interaction.start, p.interaction.current);
      C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.9)", C.fillStyle = "rgba(255, 255, 255, 0.08)", C.lineWidth = 1, C.setLineDash([5, 4]), C.beginPath(), C.rect(_.x0, _.y0, _.x1 - _.x0, _.y1 - _.y0), C.fill(), C.stroke(), C.restore();
    }
    p.hqFrames && i >= 40 && o >= 30 && (p.hqFrames -= 1, p.hqFrames > 0 && ft());
  }
  function eu(i) {
    const o = xi(i), c = U(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), l = 320;
    return c >= 1 ? { width: l, height: Math.max(1, Math.round(l / c)) } : { width: Math.max(1, Math.round(l * c)), height: l };
  }
  function tg() {
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
  function nu(i, o = {}) {
    if (!i) return "";
    const c = ai(), l = c && (c.complete || c.naturalWidth || c.width) ? [
      String(c.currentSrc || c.src || ""),
      Number(c.naturalWidth || c.width || 0),
      Number(c.naturalHeight || c.height || 0)
    ].join("|") : "no_bg", h = eu(i);
    return [
      String((i == null ? void 0 : i.id) || ""),
      Rr(),
      tg(),
      _s(),
      l,
      p.showPanorama ? "panorama:1" : "panorama:0",
      p.showObjects ? "objects:1" : "objects:0",
      p.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function Fs(i = {}) {
    var m;
    if (e !== "cutout") return null;
    const o = i.shot || Jt();
    if (!o)
      return t.__panoCutoutPreviewSurface = null, null;
    const c = eu(o), l = nu(o, i);
    if (!i.forceRedraw && ((m = t.__panoCutoutPreviewSurface) == null ? void 0 : m.revision) === l)
      return t.__panoCutoutPreviewSurface;
    const h = ng(o, c, {
      cachePrefix: "shared_cutout_preview_surface",
      quality: String(i.quality || "balanced")
    });
    return h ? (t.__panoCutoutPreviewSurface = {
      source: h,
      revision: l
    }, t.__panoCutoutPreviewSurface) : t.__panoCutoutPreviewSurface || null;
  }
  function eg() {
    if (e !== "cutout") return;
    const i = Jt();
    if (!i) {
      p.outputPreviewRect = null, et && (et.style.display = "none");
      return;
    }
    const o = 14, c = U(Number(p.outputPreviewAnim ?? (p.outputPreviewExpanded ? 1 : 0)), 0, 1), l = Math.max(120, Math.min(250, A.width * 0.28)), h = Math.max(260, Math.min(560, A.width * 0.62)), m = Math.max(76, Math.min(150, A.height * 0.22)), w = Math.max(160, Math.min(340, A.height * 0.48)), b = Mn(l, h, c), _ = Mn(m, w, c), N = xi(i), S = Number((N == null ? void 0 : N.aspect) || 1);
    let k = b, T = k / S;
    T > _ && (T = _, k = T * S);
    const O = A.width - o - k, $ = o, W = 12;
    p.outputPreviewRect = { x: O, y: $, w: k, h: T };
    const dt = () => {
      if (!et) return;
      const ut = `${Math.round(O + k - 8 - 24)}px`, j = `${Math.round($ + 8)}px`;
      et.style.display = "inline-flex", et.style.left !== ut && (et.style.left = ut), et.style.top !== j && (et.style.top = j);
    }, xt = (ut, j, ot, At, Ut) => {
      const Ct = Math.max(0, Math.min(Ut, Math.min(ot, At) * 0.5));
      C.beginPath(), typeof C.roundRect == "function" ? C.roundRect(ut, j, ot, At, Ct) : (C.moveTo(ut + Ct, j), C.arcTo(ut + ot, j, ut + ot, j + At, Ct), C.arcTo(ut + ot, j + At, ut, j + At, Ct), C.arcTo(ut, j + At, ut, j, Ct), C.arcTo(ut, j, ut + ot, j, Ct)), C.closePath();
    };
    C.save(), C.shadowColor = "rgba(0, 0, 0, 0.45)", C.shadowBlur = 22, C.shadowOffsetX = 0, C.shadowOffsetY = 8, C.fillStyle = "rgba(10, 10, 10, 0.72)", xt(O, $, k, T, W), C.fill(), C.restore(), C.save(), xt(O, $, k, T, W), C.clip();
    const _t = nu(i, { quality: "balanced" });
    let st = t.__panoCutoutPreviewSurface;
    const ht = ou();
    ht && (st = Fs({
      shot: i,
      quality: "balanced",
      forceRedraw: !0
    })), (!st || st.revision !== _t) && !ht && !p.interaction && !p.cutoutPreviewSurfaceRaf && !p.cutoutPreviewSurfaceTimer && (st = Fs({ shot: i, quality: "balanced" }));
    const gt = (st == null ? void 0 : st.source) || null, vt = !!(gt && Number(gt.width || 0) > 1 && Number(gt.height || 0) > 1);
    if ((st == null ? void 0 : st.revision) !== _t && Vs(), !vt) {
      C.fillStyle = "rgba(255, 255, 255, 0.06)", C.fillRect(O, $, k, T), C.strokeStyle = "rgba(255, 255, 255, 0.12)", C.lineWidth = 1, C.strokeRect(O + 0.5, $ + 0.5, k - 1, T - 1), Vs(), C.restore(), dt();
      return;
    }
    C.drawImage(gt, O, $, k, T), C.restore(), dt();
  }
  function ng(i, o, c = {}) {
    var k, T, O, $;
    const l = ai();
    if (!i || !l || !(Number((o == null ? void 0 : o.width) || 0) > 0) || !(Number((o == null ? void 0 : o.height) || 0) > 0)) return null;
    const h = jl(), m = Ul(h), w = Tr(), b = ((T = (k = p.paintEngine) == null ? void 0 : k.getErpTarget) == null ? void 0 : T.call(k, w)) || null, _ = gc({
      stateRevision: [
        "cutout_preview_target",
        String((l == null ? void 0 : l.currentSrc) || (l == null ? void 0 : l.src) || ""),
        Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
        Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0),
        Array.isArray(m) ? m.map((W) => `${String((W == null ? void 0 : W.assetId) || "")}:${String((W == null ? void 0 : W.revision) || "")}`).join(",") : "",
        Rr()
      ].join("|"),
      backgroundSource: l,
      backgroundRevision: String(c.cachePrefix || "modal_cutout_output_preview"),
      coverageDeg: $e(d.coverage),
      scene: h,
      textures: m,
      paintSource: ((O = b == null ? void 0 : b.displayPaint) == null ? void 0 : O.canvas) || null,
      paintRevision: Rr(),
      maskSource: (($ = b == null ? void 0 : b.committedMask) == null ? void 0 : $.canvas) || null,
      maskRevision: Tn(),
      backgroundOpacity: 1,
      showMaskTint: !1
    }), N = xi(i);
    return Q.syncState(_) ? Q.renderToTarget(
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
  function rg() {
    Fs();
  }
  function Vs() {
    if (e !== "cutout") return;
    const i = performance.now(), o = sp(), c = i - Number(p.cutoutPreviewSurfaceLastTs || 0);
    if (p.cutoutPreviewSurfaceRaf || p.cutoutPreviewSurfaceTimer) return;
    const l = () => {
      p.cutoutPreviewSurfaceRaf = requestAnimationFrame(() => {
        var h, m, w, b, _, N, S, k;
        p.cutoutPreviewSurfaceRaf = 0, p.cutoutPreviewSurfaceLastTs = performance.now(), rg(), Pt.dirty = !0, (m = (h = t.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || m.call(h), (w = t.setDirtyCanvas) == null || w.call(t, !0, !1), (_ = (b = t.graph) == null ? void 0 : b.setDirtyCanvas) == null || _.call(b, !0, !0), (k = (S = (N = hn) == null ? void 0 : N.canvas) == null ? void 0 : S.setDirty) == null || k.call(S, !0, !0);
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
  function Hs(i, o) {
    if (!i || !o) return null;
    const c = Number(o.x || 0), l = Number(o.y || 0);
    return Kl(i, c, l);
  }
  function Ki(i) {
    if (!i) return null;
    const o = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, l = Math.cos(c);
    return Yn(l * Math.sin(o), Math.sin(c), l * Math.cos(o));
  }
  function Ye(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function br(i, o, c, l = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: He(i, "widthScale", 1),
      pressureLike: He(i, "pressureLike", 1)
    }, ...l, u: o, v: c };
  }
  function ig(i, o, c) {
    const l = Ye(i), h = Ye(o);
    return br(i, Mn(l.x, h.x, c), Mn(l.y, h.y, c), {
      t: Mn(Number((i == null ? void 0 : i.t) || 0), Number((o == null ? void 0 : o.t) || 0), c),
      widthScale: Mn(He(i, "widthScale", 1), He(o, "widthScale", 1), c),
      pressureLike: Mn(He(i, "pressureLike", 1), He(o, "pressureLike", 1), c)
    });
  }
  function ag(i, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function ru(i, o, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    if (i.length === 1) return [br(i[0], Ye(i[0]).x, Ye(i[0]).y)];
    const l = ag(o, c), h = (S, k) => {
      const T = [0];
      for (let ht = 1; ht < S.length; ht += 1) {
        const gt = Ye(S[ht - 1]), vt = Ye(S[ht]);
        T.push(T[ht - 1] + Math.hypot(vt.x - gt.x, vt.y - gt.y));
      }
      const O = T[T.length - 1] || 0;
      if (O <= 1e-8) {
        const ht = S[0], gt = Ye(ht);
        return [br(ht, gt.x, gt.y)];
      }
      const $ = [];
      let W = 0;
      for (let ht = 0; ht <= O + 1e-9; ht += k) {
        for (; W < T.length - 2 && T[W + 1] < ht; ) W += 1;
        const gt = T[W], vt = T[W + 1], ut = Math.max(1e-8, vt - gt);
        $.push(ig(S[W], S[W + 1], U((ht - gt) / ut, 0, 1)));
      }
      const dt = S[S.length - 1], xt = Ye(dt), _t = $[$.length - 1], st = _t ? Ye(_t) : null;
      return (!st || Math.hypot(st.x - xt.x, st.y - xt.y) > k * 0.35) && $.push(br(dt, xt.x, xt.y)), $;
    }, m = (S) => {
      if (!Array.isArray(S) || S.length < 3) return S ? S.slice() : [];
      const k = [br(S[0], Ye(S[0]).x, Ye(S[0]).y)];
      for (let T = 0; T < S.length - 1; T += 1) {
        const O = S[T], $ = S[T + 1], W = Ye(O), dt = Ye($), xt = br(
          O,
          W.x * 0.75 + dt.x * 0.25,
          W.y * 0.75 + dt.y * 0.25,
          {
            t: Number(O.t || 0) * 0.75 + Number($.t || 0) * 0.25,
            widthScale: He(O, "widthScale", 1) * 0.75 + He($, "widthScale", 1) * 0.25,
            pressureLike: He(O, "pressureLike", 1) * 0.75 + He($, "pressureLike", 1) * 0.25
          }
        ), _t = br(
          O,
          W.x * 0.25 + dt.x * 0.75,
          W.y * 0.25 + dt.y * 0.75,
          {
            t: Number(O.t || 0) * 0.25 + Number($.t || 0) * 0.75,
            widthScale: He(O, "widthScale", 1) * 0.25 + He($, "widthScale", 1) * 0.75,
            pressureLike: He(O, "pressureLike", 1) * 0.25 + He($, "pressureLike", 1) * 0.75
          }
        );
        k.push(xt, _t);
      }
      return k.push(br(S[S.length - 1], Ye(S[S.length - 1]).x, Ye(S[S.length - 1]).y)), k;
    }, w = h(i, l);
    if (w.length < 3) return w;
    const b = c ? 2 : 1;
    let _ = w.slice();
    for (let S = 0; S < b; S += 1) _ = m(_);
    return h(_, Math.max(l * 0.75, 55e-5));
  }
  function He(i, o, c = 1) {
    const l = Number(i == null ? void 0 : i[o]);
    return Number.isFinite(l) ? Math.max(0, l) : c;
  }
  function og(i) {
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
  function Wi() {
    const i = Ya();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Tn() {
    const i = Ya();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Rr() {
    const i = _s(), o = Tn();
    return i ? `${o}:${i}` : o;
  }
  function sg() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function cg() {
    p.paintCompositeRevision += 1;
  }
  function lg() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function iu() {
    var i, o;
    p.paintEngineRevisionKey = null, (o = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || o.call(i, d), p.paintEngineRevisionKey = Wi();
  }
  function un() {
    p.objectVisualRevision = Number(p.objectVisualRevision || 0) + 1, lg(), Pt.backgroundDirty = !0, Pt.dirty = !0;
  }
  function Dn({ rebuildPaintEngine: i = !1 } = {}) {
    sg(), un(), i && iu();
  }
  function qi() {
    cg(), un();
  }
  function qa() {
    var l;
    const i = Ya(), o = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== o && (p.paintEngine = Vc(i), p.paintEngineDescriptorKey = o, p.paintEngineRevisionKey = "");
    const c = Wi();
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
  function ug(i, o, c, l, h = null) {
    const m = og(i), w = He(o, "widthScale", 1) * He(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * w) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Le) * c * w) : Math.max(0.5, m.value / (2 * Math.PI) * c * w) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * w);
  }
  function fg(i, o, c = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), m = c.preview === !0, w = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * w : 1, l === "mask") {
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
  function dg(i, o, c) {
    const l = Math.max(0.5, Math.min(c, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (i.beginPath(), i.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), i.fill());
  }
  function hg(i, o, c, l, h = {}) {
    if (!i || !Array.isArray(o) || !o.length) return;
    const m = Math.max(l.w, l.h) * 0.25;
    i.save(), fg(i, c, h);
    const w = (b) => dg(i, b, m);
    if (o.length === 1) {
      w(o[0]), i.restore();
      return;
    }
    for (let b = 0; b < o.length - 1; b += 1) {
      const _ = o[b], N = o[b + 1];
      if (!_ || !N) continue;
      const S = Number(_.x || 0), k = Number(_.y || 0), T = Number(N.x || 0), O = Number(N.y || 0), $ = Math.max(0.5, Math.min(m, Number(_.radiusPx || 0.5))), W = Math.max(0.5, Math.min(m, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(S) || !Number.isFinite(k) || !Number.isFinite(T) || !Number.isFinite(O) || !Number.isFinite($) || !Number.isFinite(W)) continue;
      const dt = T - S, xt = O - k, _t = Math.hypot(dt, xt);
      if (!Number.isFinite(_t) || _t < 1e-6) {
        w(_);
        continue;
      }
      if (_t > Math.max(l.w, l.h) * 0.5) continue;
      const st = Math.max(0.5, Math.min($, W)), ht = Math.max(0.35, Math.min(st * 0.4, 2.25)), gt = Math.max(1, Math.ceil(_t / ht));
      for (let vt = 0; vt <= gt; vt += 1) {
        const ut = vt / gt;
        w({
          x: Mn(S, T, ut),
          y: Mn(k, O, ut),
          radiusPx: Mn($, W, ut)
        });
      }
    }
    w(o[o.length - 1]), i.restore();
  }
  function pg(i, o, c, l) {
    hg(i, o, c, l, { preview: !1 });
  }
  function gg(i, o, c, l, h) {
    var b, _, N, S;
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
    i.beginPath(), i.moveTo(Number(((b = o[0]) == null ? void 0 : b[m]) || 0) * l.w, Number(((_ = o[0]) == null ? void 0 : _[w]) || 0) * l.h);
    for (let k = 1; k < o.length; k += 1)
      i.lineTo(Number(((N = o[k]) == null ? void 0 : N[m]) || 0) * l.w, Number(((S = o[k]) == null ? void 0 : S[w]) || 0) * l.h);
    i.closePath(), i.fill(), i.restore();
  }
  function au(i) {
    const o = (i == null ? void 0 : i.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function mg(i, o) {
    const c = au(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: ug(i, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function yg(i, o, c = null) {
    var b, _, N, S;
    if (!(i != null && i.ctx) || !o) return !1;
    const l = c || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((_ = i.canvas) == null ? void 0 : _.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((N = o == null ? void 0 : o.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((S = o == null ? void 0 : o.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill")
      return gg(i.ctx, au(h), h, l), !0;
    const w = mg(h, l);
    return w.length ? (pg(i.ctx, w, h, l), !0) : !1;
  }
  function bg(i, o, c, l = 8) {
    const h = new Uint8Array(o * c), m = [], w = new Int32Array(o * c), b = new Int32Array(o * c);
    for (let _ = 0; _ < c; _ += 1)
      for (let N = 0; N < o; N += 1) {
        const S = _ * o + N;
        if (h[S] || i[S] <= l) continue;
        let k = 0, T = 0;
        w[T] = N, b[T] = _, T += 1, h[S] = 1;
        const O = [];
        let $ = N, W = _, dt = N, xt = _;
        for (; k < T; ) {
          const _t = w[k], st = b[k];
          k += 1, O.push({ x: _t, y: st }), _t < $ && ($ = _t), st < W && (W = st), _t > dt && (dt = _t), st > xt && (xt = st);
          const ht = [
            [_t - 1, st],
            [_t + 1, st],
            [_t, st - 1],
            [_t, st + 1]
          ];
          for (const [gt, vt] of ht) {
            if (gt < 0 || vt < 0 || gt >= o || vt >= c) continue;
            const ut = vt * o + gt;
            h[ut] || i[ut] <= l || (h[ut] = 1, w[T] = gt, b[T] = vt, T += 1);
          }
        }
        m.push({ pixels: O, minX: $, minY: W, maxX: dt, maxY: xt });
      }
    return m;
  }
  function vg(i, o, c = {}) {
    var N;
    const l = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (N = i == null ? void 0 : i.getContext) == null ? void 0 : N.call(i, "2d");
    if (!m || l < 1 || h < 1) return [];
    const w = m.getImageData(0, 0, l, h), b = new Uint8Array(l * h);
    for (let S = 0; S < b.length; S += 1) b[S] = w.data[S * 4 + 3];
    return bg(b, l, h, 8).map((S, k) => {
      const T = S.maxX - S.minX + 1, O = S.maxY - S.minY + 1, $ = document.createElement("canvas");
      $.width = T, $.height = O;
      const W = $.getContext("2d");
      if (!W) return null;
      const dt = W.createImageData(T, O);
      return S.pixels.forEach(({ x: xt, y: _t }) => {
        const st = (_t * l + xt) * 4, ht = ((_t - S.minY) * T + (xt - S.minX)) * 4;
        dt.data[ht + 0] = w.data[st + 0], dt.data[ht + 1] = w.data[st + 1], dt.data[ht + 2] = w.data[st + 2], dt.data[ht + 3] = w.data[st + 3];
      }), W.putImageData(dt, 0, 0), {
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
  function Yi(i, o) {
    if (!i || !o) return null;
    const c = Ka(i), l = Nn(o, c.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const h = Nn(o, c.right) / l, m = Nn(o, c.up) / l, w = h * c.cr + m * c.sr, b = -h * c.sr + m * c.cr;
    return {
      x: (w / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function _g(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const c = gr();
      return i.map((l) => ({
        x: c.x + Number(l.u || 0) * c.w,
        y: c.y + Number(l.v || 0) * c.h
      }));
    }
    const o = i.map((c) => Bi(Ki(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function wg(i) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const c = gr();
      return i.map((l) => ({
        x: c.x + Number(l.u || 0) * c.w,
        y: c.y + Number(l.v || 0) * c.h
      }));
    }
    const o = i.map((c) => Bi(Ki(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function xg(i, o = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let c = 0; c < i.length; c += 1) {
      const l = i[c], h = i[(c + 1) % i.length];
      if (!l || !h || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(l.x), Number(h.y) - Number(l.y)) > o) return !1;
    }
    return !0;
  }
  function Sg(i, o, c) {
    if (!Array.isArray(i) || i.length < 3 || !o || !c) return [];
    const l = [];
    for (const h of i) {
      const m = Ki(h), w = Yi(o, m);
      if (!w) return [];
      l.push({
        x: Number(c.x || 0) + Number(w.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(w.y || 0) * Number(c.h || 0)
      });
    }
    return xg(l, Math.max(80, Math.max(c.w, c.h) * 0.75)) ? l : [];
  }
  function Ng(i, o, c) {
    if (!Array.isArray(i) || i.length < 1 || !o || !c) return [];
    const l = [];
    for (const h of i) {
      const m = Ki(h), w = Yi(o, m);
      w && l.push({
        x: Number(c.x || 0) + Number(w.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(w.y || 0) * Number(c.h || 0)
      });
    }
    return l;
  }
  function Mg() {
    var l;
    const i = Jt(), o = Xe(i), c = ai();
    if (!i || !o) return !1;
    if (C.save(), C.fillStyle = "#050505", C.fillRect(0, 0, A.width, A.height), C.shadowColor = "rgba(0, 0, 0, 0.45)", C.shadowBlur = 24, C.shadowOffsetX = 0, C.shadowOffsetY = 10, C.fillStyle = "rgba(14, 14, 14, 1)", C.fillRect(o.x, o.y, o.w, o.h), C.restore(), C.save(), C.beginPath(), C.rect(o.x, o.y, o.w, o.h), C.clip(), c && (c.complete || c.naturalWidth || c.width) && Number(c.naturalWidth || c.width || 0) > 1 && Number(c.naturalHeight || c.height || 0) > 1) {
      const h = xi(i);
      Ps(C, o, h, c, `modal_frame_${String(i.id || "")}`) || drawCutoutProjectionPreview(
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
  function kg() {
    var _, N;
    if (((_ = p.interaction) == null ? void 0 : _.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, o = (N = i == null ? void 0 : i.geometry) == null ? void 0 : N.points;
    let c;
    if (p.mode === "frame") {
      const S = Jt(), k = Xe(S);
      c = Sg(o, S, k);
    } else
      c = _g(o);
    if (!Array.isArray(c) || c.length < 3) return;
    const l = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), w = Math.round(Number(h.g || 0) * 255), b = Math.round(Number(h.b || 0) * 255);
    C.save(), C.beginPath(), C.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let S = 1; S < c.length; S++) C.lineTo(Number(c[S].x || 0), Number(c[S].y || 0));
    C.closePath(), l ? (C.lineWidth = 2, C.setLineDash([6, 6]), C.lineDashOffset = 0, C.strokeStyle = "rgba(0,0,0,0.96)", C.stroke(), C.lineDashOffset = -6, C.strokeStyle = "rgba(255,255,255,0.96)", C.stroke(), C.setLineDash([]), C.lineDashOffset = 0) : (C.lineWidth = 1.5, C.setLineDash([6, 4]), C.strokeStyle = `rgba(${m},${w},${b},1)`, C.stroke(), C.setLineDash([])), C.restore();
  }
  function Pg() {
    p.mode === "frame" ? Mg() : p.mode === "unwrap" ? Bp(!1) : Gp(!1), Qp(), p.mode !== "frame" && eg(), kg(), Nt && (Nt.textContent = `${Math.round(p.viewFov)}°`), zt(), Pt.hasPresentedFrame || (Pt.hasPresentedFrame = !0, L.style.opacity = "1");
    const i = Op();
    i ? (P == null || P.removeAttribute("data-stage-ready"), P == null || P.setAttribute("data-stage-loading-kind", i)) : (P == null || P.setAttribute("data-stage-ready", ""), P == null || P.removeAttribute("data-stage-loading-kind"));
  }
  function ou() {
    var o;
    if (e !== "cutout") return !1;
    const i = String(((o = p.interaction) == null ? void 0 : o.kind) || "");
    return i === "move" || i === "scale" || i === "scale_x" || i === "scale_y" || i === "rotate";
  }
  function Ag(i = p.interaction) {
    if (e !== "stickers" || p.mode !== "pano") return !1;
    const o = String((i == null ? void 0 : i.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Cg(i = {}) {
    var l, h, m, w;
    const o = i.updateCutoutPreview !== !1;
    if (t.__panoLiveStateOverride = d, e === "cutout") {
      t.__panoLivePaintSurface = null, o && Vs();
      return;
    }
    let c = null;
    try {
      const b = Tr(), _ = $a(), S = ((w = (m = (h = (l = p.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, b)) == null ? void 0 : m.displayPaint) == null ? void 0 : w.canvas) || null;
      S && (c = {
        source: S,
        revision: `${Tn()}:${_s()}`
      });
    } catch {
      c = null;
    }
    t.__panoLivePaintSurface = c;
  }
  function ft(i = {}) {
    var _, N, S, k, T, O, $, W, dt, xt;
    const o = !!i.localOnly, c = i.externalSync === !0, l = String(i.cause || ""), h = String(((_ = p.interaction) == null ? void 0 : _.kind) || "");
    (!o || h === "view" || h === "pan_frame" || Ag() || !!((N = p.viewTween) != null && N.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (Pt.backgroundDirty = !0), o && $a() && (p.livePaintInteractionRevision += 1, Pt.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (Ua(), Ba());
    const b = e === "cutout" && (!o || l === "paint" || l === "cutout_frame" || l === "frame_transform" || l === "frame_view" || kl() || ou());
    Cg({ updateCutoutPreview: b }), c && (b || !o || e !== "cutout") && ((k = (S = t.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || k.call(S), (T = t.setDirtyCanvas) == null || T.call(t, !0, !1)), c && !o && (($ = (O = t.graph) == null ? void 0 : O.setDirtyCanvas) == null || $.call(O, !0, !0), (xt = (dt = (W = hn) == null ? void 0 : W.canvas) == null ? void 0 : dt.setDirty) == null || xt.call(dt, !0, !0)), Pt.dirty = !0;
  }
  function su() {
    const i = A.getBoundingClientRect(), o = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return A.width !== o || A.height !== c || L.width !== o || L.height !== c ? (A.width = o, A.height = c, L.width = o, L.height = c, Pt.backgroundDirty = !0, Pt.dirty = !0, e === "cutout" && (Pt.pendingStableLayoutFrames = Math.max(Number(Pt.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function zs(i = performance.now()) {
    var o;
    if (Pt.running) {
      if (Pt.lastTickTs = i, p.outputPreviewAnim !== p.outputPreviewAnimTo) {
        const c = Math.max(1, Number(p.outputPreviewAnimDurationMs)), l = U((i - Number(p.outputPreviewAnimStartTs || 0)) / c, 0, 1), m = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? mv(l) : yv(l);
        p.outputPreviewAnim = Mn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, m), Pt.dirty = !0, l >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
      }
      if ((o = p.viewTween) != null && o.active) {
        const c = p.viewTween, l = U((i - c.startTs) / c.durationMs, 0, 1), h = gv(l);
        p.viewYaw = Oe(c.startYaw + c.deltaYaw * h), p.viewPitch = c.startPitch + (c.targetPitch - c.startPitch) * h, p.viewFov = c.startFov + (c.targetFov - c.startFov) * h, Pt.backgroundDirty = !0, Pt.dirty = !0, l >= 1 && (p.viewTween = null);
      }
      if (p.viewInertia.vx = Number(Re.state.inertia.vx || 0), p.viewInertia.vy = Number(Re.state.inertia.vy || 0), p.viewInertia.active = !!Re.state.inertia.active, Re.stepInertia(i) && (p.viewInertia.vx = Number(Re.state.inertia.vx || 0), p.viewInertia.vy = Number(Re.state.inertia.vy || 0), p.viewInertia.active = !!Re.state.inertia.active, Pt.backgroundDirty = !0, Pt.dirty = !0), (Pt.dirty || i - Pt.lastSizeCheckTs >= 220) && (su(), Pt.lastSizeCheckTs = i), Pt.pendingStableLayoutFrames > 0 && (Pt.pendingStableLayoutFrames -= 1, Pt.dirty = !0), Pt.dirty) {
        if (Pt.pendingStableLayoutFrames > 0) {
          Pt.rafId = requestAnimationFrame(zs);
          return;
        }
        Pt.dirty = !1, Pg();
      }
      Pt.rafId = requestAnimationFrame(zs);
    }
  }
  function Ig() {
    Pt.running = !1, Pt.rafId && cancelAnimationFrame(Pt.rafId), Pt.rafId = 0;
  }
  function ie() {
    r || (p.historyController.commitActionGroup(JSON.stringify(td(d))), Ws());
  }
  function Xi(i) {
    if (r) return;
    const o = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (Ws(), !o) return;
    const c = JSON.parse(o);
    Object.keys(d).forEach((l) => delete d[l]), Object.assign(d, c), p.selectedId = e === "stickers" || e === "cutout" ? d.active.selected_sticker_id : d.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], Dn(), fn(), Bt(), Rn(), ft({ cause: "cutout_frame" });
  }
  function cu() {
    var c, l;
    const i = Array.isArray((c = p.historyController) == null ? void 0 : c.entries) ? p.historyController.entries : [], o = Number((l = p.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !r && i.length > 1 && o > 0,
      canRedo: !r && i.length > 1 && o >= 0 && o < i.length - 1
    };
  }
  function fn() {
    var w, b, _;
    Mt == null || Mt.querySelectorAll("[data-tool-mode]").forEach((N) => {
      const S = N.getAttribute("data-tool-mode") === p.primaryTool;
      N.classList.toggle("active", S), N.setAttribute("aria-pressed", S ? "true" : "false");
    });
    const i = p.primaryTool === "paint" || p.primaryTool === "mask";
    if (Et && tt(i), !i) {
      nt.forEach((N) => {
        N.classList.remove("is-active");
      }), It && (It.hidden = !0);
      return;
    }
    const o = p.primaryTool, c = nt.find((N) => String(N.getAttribute("data-paint-pane") || "") === o) || null;
    if (nt.forEach((N) => {
      N.classList.toggle("is-active", N === c);
    }), E.forEach((N) => {
      N.hidden = !1;
    }), V.forEach((N) => {
      N.hidden = !1;
    }), rt && (clearTimeout(rt), rt = 0), D.querySelectorAll("[data-paint-tool]").forEach((N) => {
      N.classList.toggle("active", N.getAttribute("data-paint-tool") === p.paintTool);
    }), D.querySelectorAll("[data-mask-tool]").forEach((N) => {
      N.classList.toggle("active", N.getAttribute("data-mask-tool") === p.maskTool);
    }), bt) {
      const N = p.paintTool !== "eraser";
      bt.hidden = !1, bt.classList.toggle("disabled", !N), !N && It && !It.hidden && (rt = window.setTimeout(() => {
        It.hidden = !0, rt = 0;
      }, 170));
      const S = ((w = Oo.find((T) => Fo(p.paintColor, T.color))) == null ? void 0 : w.id) || "";
      bt.querySelectorAll("[data-paint-color-swatch]").forEach((T) => {
        const O = T.getAttribute("data-paint-color-swatch") === S;
        T.classList.toggle("active", O), T.setAttribute("aria-pressed", O ? "true" : "false"), T.disabled = !N;
      });
      const k = bt.querySelector("[data-paint-color-custom]");
      if (k) {
        const T = !S;
        k.classList.toggle("active", T), k.style.setProperty("--custom-color", kn(p.customPaintColor, 1)), k.setAttribute("aria-pressed", T ? "true" : "false"), k.disabled = !N;
      }
      if (Ve && (Ve.value = String(Math.round(U(Number(((b = p.customPaintColor) == null ? void 0 : b.a) ?? 1), 0, 1) * 100))), rn && (rn.textContent = `${Math.round(U(Number(((_ = p.customPaintColor) == null ? void 0 : _.a) ?? 1), 0, 1) * 100)}%`), de && (de.style.background = kn(p.customPaintColor)), It) {
        const T = ua(p.customPaintColor);
        It.style.setProperty("--picker-hue-color", kn({ ...Nc(T.h, 1, 1), a: 1 }, 1)), It.style.setProperty("--picker-sat", `${U(T.s, 0, 1) * 100}%`), It.style.setProperty("--picker-val", `${(1 - U(T.v, 0, 1)) * 100}%`), It.style.setProperty("--picker-hue", `${U(T.h, 0, 1) * 100}%`);
      }
      if (ye) {
        const T = ua(p.customPaintColor);
        ye.style.left = `${U(T.s, 0, 1) * 100}%`, ye.style.top = `${(1 - U(T.v, 0, 1)) * 100}%`;
      }
      if (Ke) {
        const T = ua(p.customPaintColor);
        Ke.style.left = `${U(T.h, 0, 1) * 100}%`;
      }
      if (Qn && x) {
        const T = Array.from({ length: 8 }, (O, $) => p.customPaintHistory[$] || null);
        x.innerHTML = T.map((O, $) => `
          <button class="pano-paint-color-history-dot${O ? "" : " empty"}" type="button" data-paint-history-index="${$}" ${O ? `style="--swatch:${kn(O, 1)}"` : ""} aria-label="Recent color ${$ + 1}" ${O ? "" : "disabled"}></button>
        `).join(""), x.querySelectorAll("[data-paint-history-index]").forEach((O) => {
          O.onclick = () => {
            const $ = Number(O.getAttribute("data-paint-history-index")), W = p.customPaintHistory[$];
            W && (p.customPaintColor = dn(W), p.paintColor = dn(W), fn());
          };
        });
      }
    }
    const l = wr(p.primaryTool === "paint" ? p.paintTool : p.maskTool), h = p.brushSizes[l] ?? 10, m = yp();
    E.forEach((N) => {
      N.classList.toggle("disabled", m);
    }), G.forEach((N) => {
      N.value = String(h);
      const S = (h - 1) / 119 * 100;
      N.style.setProperty("--v", `${U(S, 0, 100)}%`), N.disabled = m;
    }), K.forEach((N) => {
      N.textContent = String(h);
    });
  }
  function si(i, o, c, l, h, m, w, b = !0) {
    const _ = document.createElement("div");
    _.dataset.key = c, _.dataset.min = String(h), _.dataset.max = String(m), _.className = "pano-field", _.innerHTML = `<label>${l}</label><input type='range' min='${h}' max='${m}' step='${w}' value='${Number(o[c] || 0)}'><input type='number' min='${h}' max='${m}' step='${w}' value='${Mc(o[c] || 0)}'>`;
    const [N, S] = _.querySelectorAll("input"), k = () => {
      const O = Number(h), $ = Number(m), dt = (Number(N.value) - O) / Math.max(1e-6, $ - O) * 100;
      N.style.setProperty("--v", `${U(dt, 0, 100)}%`);
    };
    N.disabled = !b, S.disabled = !b;
    const T = (O) => {
      if (!b) return;
      let $ = Number(O);
      Number.isNaN($) && ($ = 0), $ = U($, h, m), c === "yaw_deg" && ($ = Oe($)), o[c] = $, e === "cutout" && (c === "hFOV_deg" || c === "vFOV_deg") && (o.aspect_id = Ur(o)), N.value = String($), S.value = Mc($), k(), ft();
    };
    N.oninput = () => T(N.value), S.oninput = () => T(S.value), N.onchange = () => ie(), S.onchange = () => ie(), k(), i.appendChild(_);
  }
  function js() {
    const i = pe();
    if (!i) return;
    p.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: bi(i)
    }, St.querySelectorAll(".pano-field[data-key]").forEach((m) => {
      const w = m.dataset.key;
      if (!w || !(w in i)) return;
      const b = m.querySelector("input[type='range']"), _ = m.querySelector("input[type='number']");
      if (!b || !_) return;
      const N = Number(m.dataset.min ?? b.min ?? 0), S = Number(m.dataset.max ?? b.max ?? 0);
      let k = Number(i[w] || 0);
      Number.isNaN(k) && (k = 0), k = U(k, N, S);
      const T = String(k);
      b.value !== T && (b.value = T);
      const O = Mc(k);
      _.value !== O && (_.value = O);
      const $ = (k - N) / Math.max(1e-6, S - N) * 100;
      b.style.setProperty("--v", `${U($, 0, 100)}%`);
    });
    const c = bi(i), l = St.querySelector(".pano-cutout-aspect-label span");
    l && (l.textContent = c), St.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]").forEach((m) => {
      m.classList.toggle("active", String(m.getAttribute("data-aspect")) === c);
    });
  }
  function lu({ disabled: i = !1, onChange: o }) {
    const c = $e(d.coverage), l = document.createElement("div");
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
      const b = $e(w);
      h.setAttribute("data-selected", b === 180 ? "1" : "0"), h.querySelectorAll(".pano-segment-btn").forEach((_) => {
        _.setAttribute("aria-pressed", $e(_.getAttribute("data-value")) === b ? "true" : "false"), _.disabled = !!i;
      });
    };
    return h.querySelectorAll(".pano-segment-btn").forEach((w) => {
      w.onclick = () => {
        if (i) return;
        const b = $e(w.getAttribute("data-value"));
        b !== $e(d.coverage) && (o == null || o(b), m(b));
      };
    }), m(c), l;
  }
  function Bt() {
    var ot, At, Ut, Ct, Rt, $t, Ft, Vt, ce, tr, er, Ji, ro, fi, di, Qi;
    if (a) return;
    const i = [...St.children].slice(0, 2);
    St.innerHTML = "", i.forEach((kt) => St.appendChild(kt));
    const o = St.querySelector(".pano-side-actions");
    if (o && (o.innerHTML = ""), s) {
      const kt = document.createElement("div");
      kt.className = "pano-inspector", kt.appendChild(lu({
        onChange: (Wt) => {
          var le;
          d.coverage = Wt, p.coverage = Wt, g && (g.value = String(Wt), (le = g.callback) == null || le.call(g, g.value)), Pt.backgroundDirty = !0, ft(), Bt();
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
          <div class="pano-segment" data-setting="invert-x" data-selected="${(ot = d.ui_settings) != null && ot.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(At = d.ui_settings) != null && At.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Ut = d.ui_settings) != null && Ut.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(Ct = d.ui_settings) != null && Ct.invert_view_y ? "1" : "0"}">
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
      const ge = Gt.querySelector("[data-setting='invert-x']"), Ln = Gt.querySelector("[data-setting='invert-y']"), nr = Gt.querySelector("[data-ui-picker='quality']"), On = Gt.querySelector("[data-action='ui-reset-defaults']"), rr = (Wt, le, xn, hi) => {
        const xr = Wt.querySelector(".pano-picker-trigger"), ta = Wt.querySelector(".pano-picker-label"), Sn = Wt.querySelector(".pano-picker-pop"), Sr = () => {
          const Vn = String(xn()), Hn = le.find((ea) => String(ea.value) === Vn) || le[0];
          ta.textContent = Hn.label, Sn.innerHTML = "", le.forEach((ea) => {
            const na = document.createElement("button");
            na.type = "button", na.className = `pano-picker-item${String(ea.value) === Vn ? " active" : ""}`, na.textContent = ea.label, na.onclick = () => {
              hi(ea.value), Sn.hidden = !0, Sr(), _r(), ft();
            }, Sn.appendChild(na);
          });
        };
        return xr.onclick = (Vn) => {
          Vn.stopPropagation(), Gt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((Hn) => {
            Hn !== Sn && (Hn.hidden = !0);
          }), Sn.hidden = !Sn.hidden;
        }, Sr(), Sr;
      }, Fn = (Wt, le) => {
        Wt.setAttribute("data-selected", le ? "1" : "0"), Wt.querySelectorAll(".pano-segment-btn").forEach((xn) => {
          xn.setAttribute("aria-pressed", xn.getAttribute("data-value") === (le ? "1" : "0") ? "true" : "false");
        });
      };
      ge.querySelectorAll(".pano-segment-btn").forEach((Wt) => {
        Wt.onclick = () => {
          const le = Wt.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_x = le, Fn(ge, le), _r(), ft();
        };
      }), Ln.querySelectorAll(".pano-segment-btn").forEach((Wt) => {
        Wt.onclick = () => {
          const le = Wt.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_y = le, Fn(Ln, le), _r(), ft();
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
        (Wt) => {
          const le = String(Wt || "balanced");
          d.ui_settings.preview_quality = le === "draft" || le === "high" ? le : "balanced";
        }
      );
      On.onclick = () => {
        d.ui_settings.invert_view_x = !1, d.ui_settings.invert_view_y = !1, d.ui_settings.preview_quality = "balanced", Fn(ge, !1), Fn(Ln, !1), Ot(), _r(), ft();
      }, kt.appendChild(Gt), St.appendChild(kt);
      const Zt = document.createElement("div");
      Zt.className = "pano-side-footer", Zt.innerHTML = '<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>', Zt.querySelector("[data-action='close-preview']").onclick = () => ui(), St.appendChild(Zt), Zi(kt);
      return;
    }
    const c = pe(), l = En(), h = El();
    l.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), c && h !== "stroke" && (p.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (h === "image" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (h === "image" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: bi(c)
    });
    const m = p.panelLastValues || (e === "stickers" || h === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), w = h === "stroke" ? null : c, b = w || m, _ = !!w, N = document.createElement("div");
    N.className = "pano-inspector", N.appendChild(lu({
      disabled: r,
      onChange: (kt) => {
        var Gt, ge;
        d.coverage = kt, p.coverage = kt, g && (g.value = String(kt), (Gt = g.callback) == null || Gt.call(g, g.value)), be(), (ge = t.setDirtyCanvas) == null || ge.call(t, !0, !0), Bt(), zt(), ft();
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
        var xn, hi;
        const Wt = Me(Ot) ? String(Ot.id || Vr) : String(((hi = (xn = d.assets) == null ? void 0 : xn[Ot.asset_id]) == null ? void 0 : hi.name) || Ot.asset_id || Ot.id), le = `${Zt + 1}. ${Wt}${Me(Ot) && ri(Ot) ? " (hidden)" : ""}`;
        On.push({ id: Ot.id, label: le, item: Ot, kind: "image" });
      }) : hp().forEach((Ot) => {
        On.push({ id: Ot.item.id, label: Ot.label, item: Ot.item, kind: Ot.kind });
      });
      const rr = (w == null ? void 0 : w.id) || "", Fn = On.find((Ot) => Ot.id === rr) || On[0];
      Ln.innerHTML = Fn.item ? Tl(Fn) : So(String(Fn.label || "")), nr.innerHTML = "", On.forEach((Ot) => {
        const Zt = document.createElement("button");
        Zt.type = "button", Zt.className = `pano-picker-item${Ot.id === rr ? " active" : ""}`, Zt.innerHTML = Ot.item ? Tl(Ot) : So(String(Ot.label || "")), Zt.onclick = () => {
          nr.hidden = !0, Ui(Ot.item || null);
          const Wt = Ot.item || null;
          if (Wt && !Ce(Wt)) {
            const le = Oe(Number(Wt.yaw_deg || 0)), xn = U(Number(Wt.pitch_deg || 0), -89.9, 89.9);
            an(le, xn, p.viewFov);
          }
          Bt(), zt(), ft();
        }, nr.appendChild(Zt);
      }), ge.disabled = On.length <= 1, ge.onclick = (Ot) => {
        Ot.stopPropagation(), !ge.disabled && (nr.hidden = !nr.hidden);
      }, N.appendChild(kt);
    }
    const k = document.createElement("div");
    k.className = "pano-state-actions", k.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${Dt.copy}<span>Copy State</span></button>`;
    const T = k.querySelector("[data-action='copy-state-inline']");
    T.disabled = !_ || h === "stroke" || l.length > 1, T.onclick = async () => {
      if (!_ || h === "stroke" || l.length > 1) return;
      const kt = JSON.stringify(e === "cutout" && h !== "image" ? Fl(b) : Mp(c));
      try {
        await navigator.clipboard.writeText(kt);
        const Gt = T.querySelector("span");
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
      `, O.classList.toggle("disabled", !_), p.panelWasEnabled = _, Ua()) : (si(O, b, "yaw_deg", "Yaw", -180, 180, 0.1, _ && !r), si(O, b, "pitch_deg", "Pitch", -90, 90, 0.1, _ && !r), si(O, b, "hFOV_deg", "H FOV", 1, 179, 0.1, _ && !r), si(O, b, "vFOV_deg", "V FOV", 1, 179, 0.1, _ && !r), e === "stickers" || h === "image" ? si(O, b, "rot_deg", "Rotation", -180, 180, 0.1, _ && !r) : si(O, b, "roll_deg", "Roll", -180, 180, 0.1, _ && !r), _ !== p.panelWasEnabled ? requestAnimationFrame(() => {
      O.classList.toggle("disabled", !_);
    }) : O.classList.toggle("disabled", !_), p.panelWasEnabled = _, Ua());
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
    const W = Array.isArray((Vt = (Ft = d == null ? void 0 : d.painting) == null ? void 0 : Ft.paint) == null ? void 0 : Vt.strokes) ? d.painting.paint.strokes.length : 0, dt = Array.isArray((tr = (ce = d == null ? void 0 : d.painting) == null ? void 0 : ce.mask) == null ? void 0 : tr.strokes) ? d.painting.mask.strokes.length : 0, xt = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((kt) => String((kt == null ? void 0 : kt.name) || "")) : [], _t = tp(
      t,
      xt.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), st = !!String((_t == null ? void 0 : _t.src) || "").trim() || Rl("pano_input_images").length > 0, ht = Array.isArray(bn()) && bn().length > 0 || W > 0, gt = dt > 0, vt = (kt) => kt === "panorama" ? st : kt === "objects" ? ht : gt, ut = (kt, Gt) => {
      const ge = kt.closest("[data-visibility-row]"), Ln = vt(String(kt.getAttribute("data-visibility") || ""));
      kt.innerHTML = Gt ? Dt.eye : Dt.eye_dashed, kt.setAttribute("aria-pressed", Gt ? "true" : "false"), kt.setAttribute("data-tip", Gt ? "Hide" : "Show"), kt.disabled = !Ln, kt.classList.toggle("active", !!Gt), ge == null || ge.classList.toggle("is-hidden", !Gt), ge == null || ge.classList.toggle("is-disabled", !Ln);
    };
    if ($.querySelectorAll("[data-visibility]").forEach((kt) => {
      const Gt = String(kt.getAttribute("data-visibility") || ""), ge = () => Gt === "panorama" ? !!p.showPanorama : Gt === "objects" ? !!p.showObjects : !!p.showMask;
      ut(kt, ge()), kt.onclick = () => {
        vt(Gt) && (Gt === "panorama" ? p.showPanorama = !p.showPanorama : Gt === "objects" ? p.showObjects = !p.showObjects : p.showMask = !p.showMask, ut(kt, ge()), ft());
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
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Ji = d.ui_settings) != null && Ji.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(ro = d.ui_settings) != null && ro.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(fi = d.ui_settings) != null && fi.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(di = d.ui_settings) != null && di.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Qi = d.ui_settings) != null && Qi.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const Gt = kt.querySelector("[data-setting='invert-x']"), ge = kt.querySelector("[data-setting='invert-y']"), Ln = kt.querySelector("[data-ui-picker='quality']"), nr = kt.querySelector("[data-action='ui-reset-defaults']"), On = (Ot, Zt, Wt, le) => {
        const xn = Ot.querySelector(".pano-picker-trigger"), hi = Ot.querySelector(".pano-picker-label"), xr = Ot.querySelector(".pano-picker-pop"), ta = () => {
          const Sn = String(Wt()), Sr = Zt.find((Vn) => String(Vn.value) === Sn) || Zt[0];
          hi.textContent = Sr.label, xr.innerHTML = "", Zt.forEach((Vn) => {
            const Hn = document.createElement("button");
            Hn.type = "button", Hn.className = `pano-picker-item${String(Vn.value) === Sn ? " active" : ""}`, Hn.textContent = Vn.label, Hn.onclick = () => {
              le(Vn.value), xr.hidden = !0, ta(), _r(), t.setDirtyCanvas(!0, !0), ft();
            }, xr.appendChild(Hn);
          });
        };
        return xn.onclick = (Sn) => {
          Sn.stopPropagation(), kt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((Sr) => {
            Sr !== xr && (Sr.hidden = !0);
          }), xr.hidden = !xr.hidden;
        }, ta(), ta;
      }, rr = (Ot, Zt) => {
        Ot.setAttribute("data-selected", Zt ? "1" : "0"), Ot.querySelectorAll(".pano-segment-btn").forEach((Wt) => {
          Wt.setAttribute("aria-pressed", Wt.getAttribute("data-value") === (Zt ? "1" : "0") ? "true" : "false");
        });
      };
      Gt.querySelectorAll(".pano-segment-btn").forEach((Ot) => {
        Ot.onclick = () => {
          const Zt = Ot.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_x = Zt, rr(Gt, Zt), _r(), t.setDirtyCanvas(!0, !0), ft();
        };
      }), ge.querySelectorAll(".pano-segment-btn").forEach((Ot) => {
        Ot.onclick = () => {
          const Zt = Ot.getAttribute("data-value") === "1";
          d.ui_settings.invert_view_y = Zt, rr(ge, Zt), _r(), t.setDirtyCanvas(!0, !0), ft();
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
        d.ui_settings.invert_view_x = !1, d.ui_settings.invert_view_y = !1, d.ui_settings.preview_quality = "balanced", rr(Gt, !1), rr(ge, !1), Fn(), _r(), t.setDirtyCanvas(!0, !0), ft();
      }, N.appendChild(kt);
    }
    const j = document.createElement("div");
    j.className = "pano-side-footer", j.innerHTML = `
      <button class="pano-btn" data-action="cancel-close">Cancel</button>
      <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
    `, j.querySelector("[data-action='cancel-close']").onclick = () => ui(), j.querySelector("[data-action='save-close']").onclick = () => {
      yu(), ui();
    }, St.appendChild(j), Zi(N);
  }
  function Xa(i) {
    if (!i) return !1;
    if (String(i.type || "").toLowerCase().startsWith("image/")) return !0;
    const c = String(i.name || "").toLowerCase();
    return c.endsWith(".png") || c.endsWith(".jpg") || c.endsWith(".jpeg") || c.endsWith(".webp") || c.endsWith(".gif") || c.endsWith(".bmp");
  }
  async function uu(i) {
    if (r || e !== "stickers" && e !== "cutout" || !Xa(i)) return;
    const o = fa("asset"), c = URL.createObjectURL(i);
    try {
      const l = await new Promise((w, b) => {
        const _ = new Image();
        _.onload = () => w(_), _.onerror = () => b(new Error("image load failed")), _.src = c;
      });
      jt.set(o, l);
      const h = fa("st");
      d.stickers.push({
        id: h,
        asset_id: o,
        yaw_deg: p.viewYaw,
        pitch_deg: p.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Dr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: Dl()
      }), Ui(d.stickers[d.stickers.length - 1]), Bs(), ie(), Bt(), zt(), ft();
      const m = (async () => {
        const w = await As(i, String(i.name || o));
        (Array.isArray(d.stickers) ? d.stickers : []).filter((N) => String((N == null ? void 0 : N.asset_id) || "") === o).length && (d.assets[o] = w, oi(), be(), Bt(), zt(), ft());
      })();
      ma.set(o, m);
      try {
        await m;
      } finally {
        ma.delete(o);
      }
    } catch (l) {
      console.error("[PanoramaSuite] failed to add sticker asset", l), delete d.assets[o], jt.delete(o);
      const h = Array.isArray(d.stickers) ? d.stickers : [], m = h.filter((w) => String((w == null ? void 0 : w.asset_id) || "") === o);
      m.length && (d.stickers = h.filter((w) => String((w == null ? void 0 : w.asset_id) || "") !== o), m.some((w) => {
        var b;
        return String((w == null ? void 0 : w.id) || "") === String(((b = p.selection) == null ? void 0 : b.id) || "");
      }) && Ui(null), Bt(), zt(), ft());
    } finally {
      URL.revokeObjectURL(c);
    }
  }
  function fu(i) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const c = (l = o.files) == null ? void 0 : l[0];
      !c || typeof i != "function" || i(c);
    }, o.click();
  }
  function Us() {
    r || e !== "stickers" && e !== "cutout" || fu((i) => {
      uu(i);
    });
  }
  async function Eg(i) {
    var N;
    if (r || e !== "stickers" && e !== "cutout") return;
    const o = pe();
    if (!o || !Ee(o) || Me(o) || !Xa(i)) return;
    const c = String(o.id || ""), l = String(o.asset_id || ""), h = l ? sn(((N = d.assets) == null ? void 0 : N[l]) || null) : null, m = Number(o.vFOV_deg || 0), w = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, b = fa("asset"), _ = URL.createObjectURL(i);
    try {
      const S = await new Promise((T, O) => {
        const $ = new Image();
        $.onload = () => T($), $.onerror = () => O(new Error("image load failed")), $.src = _;
      });
      jt.set(b, S), o.asset_id = b, o.vFOV_deg = Dr(
        Number(o.hFOV_deg || 30),
        Number(S.naturalWidth || S.width || 1),
        Number(S.naturalHeight || S.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, un(), ie(), Bt(), zt(), ft();
      const k = (async () => {
        const T = await As(i, String(i.name || b));
        (Array.isArray(d.stickers) ? d.stickers : []).some((W) => String((W == null ? void 0 : W.id) || "") === c && String((W == null ? void 0 : W.asset_id) || "") === b) && (d.assets[b] = T, oi(), be(), Bt(), zt(), ft());
      })();
      ma.set(b, k);
      try {
        await k;
      } finally {
        ma.delete(b);
      }
    } catch (S) {
      console.error("[PanoramaSuite] failed to replace sticker asset", S), delete d.assets[b], jt.delete(b);
      const k = (Array.isArray(d.stickers) ? d.stickers : []).find((T) => String((T == null ? void 0 : T.id) || "") === c) || null;
      k && String(k.asset_id || "") === b && (l && h && (d.assets[l] = h), k.asset_id = l, k.vFOV_deg = m, k.crop = w ? { ...w } : null), un(), Bt(), zt(), ft();
    } finally {
      URL.revokeObjectURL(_);
    }
  }
  function Tg() {
    if (r) return;
    const i = pe();
    !i || !Ee(i) || Me(i) || fu((o) => {
      Eg(o);
    });
  }
  async function Dg() {
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
        const w = await fetch(m).then((k) => k.blob()), b = String(w.type || "image/png").split("/")[1] || "png", _ = String((h == null ? void 0 : h.name) || `${l}.${b}`), N = new File([w], _, { type: w.type || "image/png" }), S = await As(N, _);
        d.assets[l] = {
          ...S,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, c = !0;
      } catch (m) {
        console.error("[PanoramaSuite] failed to migrate embedded sticker asset", { assetId: l, err: m });
      }
    c && (be(), ft());
  }
  function du() {
    r || e === "cutout" && (Bs(), d.shots = [{
      id: fa("sh"),
      yaw_deg: p.viewYaw,
      pitch_deg: p.viewPitch,
      hFOV_deg: 64,
      vFOV_deg: 40,
      roll_deg: 0,
      aspect_id: Kh(64, 40)
    }], Ui(d.shots[0]), p.cutoutAspectOpen = !1, ie(), be(), Bt(), ft({ cause: "cutout_frame" }));
  }
  function Rg() {
    r || e === "cutout" && (d.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, d.active.selected_shot_id = null, ie(), be(), Bt(), ft());
  }
  function Lg() {
    const i = Array.isArray(d.stickers) ? d.stickers : [], o = [];
    for (const c of i)
      Me(c) && (c.visible = !1, o.push(c));
    return o;
  }
  function hu(i, o, c = "Clear") {
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
      const w = h.querySelector("[data-action='cancel']"), b = h.querySelector("[data-action='confirm']");
      w.onclick = () => m(!1), b.onclick = () => m(!0), P.appendChild(h), b.focus();
    });
  }
  async function pu() {
    var c, l;
    if (r || !await hu(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    d.painting = ka(null), Dn();
    const o = Lg();
    e === "stickers" ? (d.stickers = o, d.assets = {}, p.selectedId = ((c = o[0]) == null ? void 0 : c.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], d.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, oi()) : (d.stickers = o, d.assets = {}, d.shots = [], p.selectedId = null, p.selectedIds = [], d.active.selected_sticker_id = null, d.active.selected_shot_id = null, p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, oi()), ie(), be(), Bt(), zt(), ft();
  }
  async function Og(i) {
    var m, w, b, _;
    if (r) return;
    const o = i === "mask" ? "mask" : "paint", c = o === "mask" ? "Mask" : "Paint", l = li(o);
    if (!(!l.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((w = p.interaction) == null ? void 0 : w.layerKind) === o) || !await hu(
      `Clear ${c}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((b = p.interaction) == null ? void 0 : b.kind) === "draw" && ((_ = p.interaction) == null ? void 0 : _.layerKind) === o) {
        const N = vr();
        N && p.paintEngine.cancelActiveStroke(N), p.interaction = null;
      }
      l.length = 0, d.painting.raster_objects = gn().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== o), o === "paint" && (Ie().length = 0), Dn(), ie(), be(), Bt(), zt(), fn(), ft();
    }
  }
  function Fg() {
    if (r) return;
    const i = pe();
    if (!i || !Ee(i) || Me(i)) return;
    const o = JSON.parse(JSON.stringify(i));
    o.id = fa("st"), o.yaw_deg = Oe((o.yaw_deg || 0) + 8), o.z_index = Dl(), d.stickers.push(o), d.active.selected_sticker_id = o.id, p.selectedId = o.id, p.selectedIds = [o.id], un(), ie(), be(), zt(), Bt(), ft();
  }
  function gu() {
    var c, l, h, m, w, b, _;
    if (r) return;
    const i = En(), o = pe();
    if (!(!o && i.length === 0)) {
      if (i.length > 1) {
        const N = new Set(i.filter((T) => Ce(T)).map((T) => String(T.actionGroupId || T.id || ""))), S = new Set(i.filter((T) => qe(T)).map((T) => We(T.rasterObjectId || T.id || ""))), k = new Set(i.filter(Ee).map((T) => String(T.id || "")));
        N.size > 0 && (d.painting.paint.strokes = (Array.isArray((l = (c = d.painting) == null ? void 0 : c.paint) == null ? void 0 : l.strokes) ? d.painting.paint.strokes : []).filter((T) => !N.has(String((T == null ? void 0 : T.actionGroupId) || ""))), d.painting.groups = Ie().filter((T) => !N.has(String((T == null ? void 0 : T.actionGroupId) || (T == null ? void 0 : T.id) || ""))), Dn()), S.size > 0 && (d.painting.raster_objects = gn().filter((T) => !S.has(String((T == null ? void 0 : T.id) || ""))), qi()), k.size > 0 && (d.stickers = (Array.isArray(d.stickers) ? d.stickers : []).filter((T) => k.has(String((T == null ? void 0 : T.id) || "")) ? Me(T) ? (ri(T) || (T.visible = !1), !0) : !1 : !0), oi(), un()), p.selectedId = null, p.selectedIds = [], ie(), be(), Bt(), zt(), ft();
        return;
      }
      if (Ce(o)) {
        const N = String(o.actionGroupId || o.id || "").trim();
        d.painting.paint.strokes = (Array.isArray((m = (h = d.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? d.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== N), d.painting.groups = Ie().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== N), Dn(), p.selectedId = null, p.selectedIds = [], ie(), be(), Bt(), zt(), ft();
        return;
      }
      if (qe(o)) {
        const N = We(o.rasterObjectId || o.id || "");
        d.painting.raster_objects = gn().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== N), qi(), p.selectedId = null, p.selectedIds = [], ie(), be(), Bt(), zt(), ft();
        return;
      }
      if (e === "stickers" || Ee(o)) {
        if (Me(o)) {
          if (ri(o)) return;
          o.visible = !1, un(), ie(), be(), Bt(), zt(), ft();
          return;
        }
        d.stickers = d.stickers.filter((N) => N.id !== o.id), oi(), un(), p.selectedId = e === "cutout" ? d.active.selected_shot_id || ((w = d.stickers[0]) == null ? void 0 : w.id) || null : ((b = d.stickers[0]) == null ? void 0 : b.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], d.active.selected_sticker_id = ((_ = d.stickers[0]) == null ? void 0 : _.id) || null, ie(), be(), Bt(), zt(), ft();
        return;
      }
      Rg();
    }
  }
  function Vg(i, o) {
    if (!i) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const T = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(T)) {
        const [W, dt] = T.split(":").map((xt) => Number(xt));
        if (Number.isFinite(W) && Number.isFinite(dt)) return W >= dt;
      }
      const O = Number(i.hFOV_deg || 64), $ = Number(i.vFOV_deg || 40);
      return Math.abs(O - $) > 1e-6 ? O >= $ : Wc(i) >= 1;
    })();
    let [h, m] = c[String(o)] || c["1:1"];
    h >= m !== l && ([h, m] = [m, h]);
    const w = h / m, b = U(Number(i.hFOV_deg || 64), 1, 179), _ = U(Number(i.vFOV_deg || 40), 1, 179), N = Math.sqrt(Math.max(1, b * _)), S = U(N * Math.sqrt(w), 1, 179), k = U(N / Math.sqrt(w), 1, 179);
    i.hFOV_deg = S, i.vFOV_deg = k, i.aspect_id = String(o);
  }
  function Hg(i) {
    if (!i) return;
    const o = Math.max(1, Number(i.hFOV_deg || 90)), c = Math.max(1, Number(i.vFOV_deg || 60));
    i.hFOV_deg = c, i.vFOV_deg = o, i.aspect_id = Ur(i);
  }
  function mu() {
    ti().forEach((o, c) => {
      o.type === "sticker" && o.item && (o.item.z_index = c), o.type === "strokeGroup" && o.item && (o.item.z_index = c), o.type === "rasterObject" && o.item && (o.item.z_index = c);
    });
  }
  function $g() {
    if (r) return;
    const i = En();
    if (!pe() || i.length === 0) return;
    mu();
    const c = ti(), l = new Set(i.map((b) => Ee(b) ? `sticker:${String(b.id || "")}` : qe(b) ? `rasterObject:${We(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (c.forEach((b) => {
      var N, S;
      const _ = b.type === "sticker" ? `sticker:${String(((N = b.item) == null ? void 0 : N.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((S = b.item) == null ? void 0 : S.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(_) ? h.push(b) : m.push(b);
    }), !h.length || h[h.length - 1] === c[c.length - 1]) return;
    [...m, ...h].forEach((b, _) => {
      b.type === "sticker" && b.item && (b.item.z_index = _), b.type === "strokeGroup" && b.item && (b.item.z_index = _), b.type === "rasterObject" && b.item && (b.item.z_index = _);
    }), un(), ie(), be(), zt(), ft();
  }
  function zg() {
    if (r) return;
    const i = En();
    if (!pe() || i.length === 0) return;
    mu();
    const c = ti(), l = new Set(i.map((b) => Ee(b) ? `sticker:${String(b.id || "")}` : qe(b) ? `rasterObject:${We(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (c.forEach((b) => {
      var N, S;
      const _ = b.type === "sticker" ? `sticker:${String(((N = b.item) == null ? void 0 : N.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((S = b.item) == null ? void 0 : S.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(_) ? h.push(b) : m.push(b);
    }), !h.length || h[0] === c[0]) return;
    [...h, ...m].forEach((b, _) => {
      b.type === "sticker" && b.item && (b.item.z_index = _), b.type === "strokeGroup" && b.item && (b.item.z_index = _), b.type === "rasterObject" && b.item && (b.item.z_index = _);
    }), un(), ie(), be(), zt(), ft();
  }
  function yu() {
    r || (d.projection_model = "pinhole_rectilinear", d.alpha_mode = "straight", f && (d.output_preset = Yc(f.value, Number(d.output_preset || 2048))), g && (d.coverage = $e(g.value)), y && (d.bg_color = String(y.value || d.bg_color || "#00ff00")), Rn(), t.setDirtyCanvas(!0, !0));
  }
  function Rn() {
    var o;
    if (r) return;
    d.coverage = $e(d.coverage);
    const i = JSON.stringify(d);
    v && (v.value = i, (o = v.callback) == null || o.call(v, i));
  }
  function _r() {
    d.ui_settings = Mv(d.ui_settings), r || Rn();
  }
  function be() {
    var i;
    r || (Rn(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0));
  }
  function Bs() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", fn(), Bt());
  }
  function ci(i) {
    const o = A.getBoundingClientRect();
    return {
      x: (i.clientX - o.left) / o.width * A.width,
      y: (i.clientY - o.top) / o.height * A.height
    };
  }
  function Za(i) {
    const o = A.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(o.left || 0),
      y: Number(i.clientY) - Number(o.top || 0)
    };
  }
  function bu() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function Jt() {
    var c;
    if (e !== "cutout") return null;
    const i = Array.isArray(d.shots) ? d.shots : [], o = String(((c = d.active) == null ? void 0 : c.selected_shot_id) || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === o) || i[0] || null;
  }
  function Xe(i = Jt()) {
    var T, O, $, W;
    if (!i) return null;
    const o = Math.max(1e-4, Number(((T = xi(i)) == null ? void 0 : T.aspect) || 1)), c = 56, l = Math.max(80, A.width - c * 2), h = Math.max(80, A.height - c * 2);
    let m = l, w = m / o;
    w > h && (w = h, m = w * o);
    const b = Math.max(0.1, Number(((O = p.frameView) == null ? void 0 : O.zoom) || 1)), _ = m * b, N = w * b, S = Number((($ = p.frameView) == null ? void 0 : $.panX) || 0), k = Number(((W = p.frameView) == null ? void 0 : W.panY) || 0);
    return {
      x: (A.width - _) * 0.5 + S,
      y: (A.height - N) * 0.5 + k,
      w: _,
      h: N
    };
  }
  function Gs() {
    return e === "cutout" && p.mode === "frame" && !!Jt();
  }
  function _n(i, o = performance.now()) {
    if (p.mode === "unwrap") {
      const m = gr(), w = (i.x - m.x) / Math.max(1, m.w), b = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (w % 1 + 1) % 1,
        v: U(b, 0, 1),
        t: Number(o || 0)
      };
    }
    const c = ks(i.x, i.y), { lon: l, lat: h } = Ts(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: U(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function wn(i, o, c = performance.now()) {
    const l = Xe(o);
    if (!l) return null;
    const h = {
      x: (Number(i.x) - l.x) / Math.max(1, l.w),
      y: (Number(i.y) - l.y) / Math.max(1, l.h)
    }, m = Hs(o, h);
    if (!m) return null;
    const { lon: w, lat: b } = Ts(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (w / (2 * Math.PI) + 0.5 + 1) % 1,
      v: U(0.5 - b / Math.PI, 0, 1),
      t: Number(c || 0)
    };
  }
  function jg(i, o) {
    var N;
    const c = Jt(), l = Xe(c);
    if (!c || !l) return !1;
    const h = Math.max(0.1, Number(((N = p.frameView) == null ? void 0 : N.zoom) || 1)), m = U(h * Number(o), 0.25, 12);
    if (Math.abs(m - h) < 1e-6) return !1;
    const w = (Number(i.x) - l.x) / Math.max(1e-6, l.w), b = (Number(i.y) - l.y) / Math.max(1e-6, l.h);
    p.frameView.zoom = m;
    const _ = Xe(c);
    return _ ? (p.frameView.panX += Number(i.x) - (_.x + _.w * w), p.frameView.panY += Number(i.y) - (_.y + _.h * b), !0) : !1;
  }
  function Ug(i, o) {
    const c = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function wr(i) {
    const o = String(i || "").trim();
    return o === "eraser" ? ar : on[o] ? o : p.activeBrushPresetId || ar;
  }
  function vu() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (bu() || Gs());
  }
  function _u() {
    var i;
    return vu() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Ja(i, o = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), l = Number((i == null ? void 0 : i.y) || 0), h = o !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, w = m.inside !== h || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - l) > 0.01;
    return p.pointerPos = { x: c, y: l, inside: h }, w;
  }
  function Bg() {
    var S, k;
    if (!_u()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? p.maskTool : p.paintTool, c = wr(o), l = on[c] || on[ar], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), w = Math.max(3, m * 0.5), b = i === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : dn(p.paintColor), _ = i === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : U(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), N = i === "mask" ? 0.95 : o === "eraser" ? 0.75 : U(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: o,
      preset: l,
      radius: w,
      fillStyle: kn(b, _),
      strokeStyle: kn(b, N),
      x: Number(((S = p.pointerPos) == null ? void 0 : S.x) || 0),
      y: Number(((k = p.pointerPos) == null ? void 0 : k.y) || 0),
      hotspotX: w,
      hotspotY: w
    };
  }
  function Gg() {
    var T, O, $;
    const i = Bg();
    if (!H) return;
    if (!i) {
      H.style.display = "none";
      return;
    }
    let o = i.radius * 2, c = i.radius * 2, l = "999px", h = 0, m = i.fillStyle, w = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const _ = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let S = Number(i.hotspotX ?? o * 0.5), k = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      o = ns, c = ns, l = "0", w = "0", b = "none", S = hv, k = pv, m = vv(i.fillStyle, N, _);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const W = Math.max(1, Number(((T = i.preset) == null ? void 0 : T.aspect) ?? 1));
      o = Math.max(10, i.radius * 2 * W), c = Math.max(6, i.radius * 2), l = `${Math.min(6, c * 0.42)}px`, h = Number((($ = (O = i.preset) == null ? void 0 : O.angle) == null ? void 0 : $.value) || 0) * jr;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    H.style.display = "block", H.style.width = `${Math.round(o)}px`, H.style.height = `${Math.round(c)}px`, H.style.borderRadius = l, H.style.border = w, H.style.boxShadow = b, H.style.background = m, H.style.backgroundRepeat = "no-repeat", H.style.backgroundPosition = "center", H.style.backgroundSize = "contain", H.style.transform = `translate(${Math.round(i.x - S)}px, ${Math.round(i.y - k)}px) rotate(${h}deg)`;
  }
  function Kg() {
    var _t;
    if (!F || !B) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? p.maskTool : p.paintTool;
    if (o === "lasso_fill") return;
    const c = wr(o), l = on[c] || on[ar], h = Number(p.brushSizes[c] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), w = Math.max(6, m * 0.5), b = o === "eraser", _ = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : dn(p.paintColor), N = i === "mask" ? kn(_, 0.22) : b ? "rgba(255,255,255,0.14)" : kn(_, U(Math.max(0.18, Number(_.a ?? 1) * 0.34), 0.18, 0.56)), S = i === "mask" ? kn(_, 0.96) : b ? "rgba(255,255,255,0.72)" : kn(_, U(Math.max(0.56, Number(_.a ?? 1) * 0.96), 0.56, 1));
    let k = w * 2, T = w * 2, O = "999px", $ = 0, W = N;
    const dt = "rgba(222, 222, 222, 0.72)", xt = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      W = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const st = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      k = Math.max(16, w * 2 * st), T = Math.max(10, w * 2), O = `${Math.min(8, T * 0.42)}px`, $ = Number(((_t = l == null ? void 0 : l.angle) == null ? void 0 : _t.value) || 0) * jr;
    } else o === "brush" ? W = `radial-gradient(circle at 50% 50%, ${S} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (k = Math.max(18, w * 1.8), T = k, W = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${S} 43%, ${S} 58%, rgba(0,0,0,0) 59%)`) : b && (W = "rgba(255,255,255,0.12)");
    B.style.width = `${Math.round(k)}px`, B.style.height = `${Math.round(T)}px`, B.style.borderRadius = O, B.style.background = W, B.style.border = `1px solid ${dt}`, B.style.boxShadow = `0 0 0 1px ${xt}`, B.style.transform = `rotate(${$}deg)`, Z && (clearTimeout(Z), Z = 0), F.classList.remove("fade-out"), F.classList.add("show");
  }
  function Qa() {
    !F || !F.classList.contains("show") || (F.classList.add("fade-out"), Z && clearTimeout(Z), Z = window.setTimeout(() => {
      F.classList.remove("show", "fade-out"), Z = 0;
    }, 180));
  }
  function Wg(i, o, c, l) {
    const h = wr(o), m = on[h] || on[ar], w = p.brushSizes[h] ?? 10, b = Math.max(1, w) * Math.max(0.1, m.sizeScale ?? 1), _ = Ug(l, b), N = c.map((k) => ({
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
      size: b,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: _.radiusModel,
      radiusValue: _.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((k) => ({ ...k })),
        points: N.map((k) => ({ ...k }))
      }
    };
    return Xf(S, m), nd("stroke-created", {
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
  function qg(i, o, c, l) {
    const h = c.map((_) => ({
      ..._,
      t: Number((_ == null ? void 0 : _.t) || 0),
      widthScale: Number.isFinite(Number(_ == null ? void 0 : _.widthScale)) ? Math.max(0, Number(_.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(_ == null ? void 0 : _.pressureLike)) ? Math.max(0, Number(_.pressureLike)) : 1
    })), m = wr(o), w = on[m] || on[ar], b = {
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
        points: h.map((_) => ({ ..._ }))
      }
    };
    return Xf(b, w), nd("lasso-created", {
      mode: p.mode,
      layerKind: i,
      toolKind: o,
      presetId: m,
      presetAspect: Number(w.aspect ?? 1),
      strokeAspect: Number(b.aspect ?? 1),
      stampKind: String(b.stampKind || ""),
      targetSpace: { ...b.targetSpace }
    }), b;
  }
  function li(i) {
    const o = d.painting || (d.painting = ka(null)), c = o[i] || (o[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function Yg(i, o, c = performance.now()) {
    let l;
    if (p.mode === "frame") {
      const N = Jt();
      if (!N) return !1;
      l = wn(o, N, c);
    } else
      l = _n(o, c);
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, w = h[h.length - 1];
    if (w) {
      const N = Math.abs(Number(l.u ?? l.x ?? 0) - Number(w.u ?? w.x ?? 0)), S = Math.abs(Number(l.v ?? l.y ?? 0) - Number(w.v ?? w.y ?? 0));
      if (N < 15e-4 && S < 15e-4) return !1;
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
      const N = p.paintEngine.ensureTarget(_);
      p.paintEngine.appendStrokePoint(N, Number(b.u ?? 0), Number(b.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Xg(i, o, c = performance.now()) {
    var w, b;
    let l;
    if (p.mode === "frame") {
      const _ = Jt();
      if (!_) return !1;
      l = wn(o, _, c);
    } else
      l = _n(o, c);
    const h = (b = (w = i == null ? void 0 : i.stroke) == null ? void 0 : w.geometry) == null ? void 0 : b.points;
    if (!l || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const _ = Math.abs(Number(l.u ?? l.x ?? 0) - Number(m.u ?? m.x ?? 0)), N = Math.abs(Number(l.v ?? l.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (_ < 15e-4 && N < 15e-4) return !1;
    }
    return h.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Zg(i) {
    var st, ht, gt, vt, ut;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || (i == null ? void 0 : i.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    qa();
    const c = vr(), l = $s(c.width, c.height);
    if (!yg(l, o, { w: c.width, h: c.height })) return !1;
    const h = ((ht = (st = l.ctx) == null ? void 0 : st.getImageData(0, 0, c.width, c.height)) == null ? void 0 : ht.data) || null;
    if (!h) return !1;
    const m = new Map(Ie().map((j) => [String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "").trim(), j ? { ...j } : null])), w = [], b = [], _ = [...gn().filter((j) => String((j == null ? void 0 : j.layerKind) || "paint") !== "paint")];
    let N = !1, S = ti().reduce((j, ot) => Math.max(j, Number((ot == null ? void 0 : ot.z_index) || 0)), -1) + 1;
    function k(j, ot, At, Ut = 8) {
      let Ct = ot, Rt = At, $t = -1, Ft = -1;
      for (let Vt = 0; Vt < At; Vt += 1)
        for (let ce = 0; ce < ot; ce += 1)
          j[(Vt * ot + ce) * 4 + 3] <= Ut || (ce < Ct && (Ct = ce), Vt < Rt && (Rt = Vt), ce > $t && ($t = ce), Vt > Ft && (Ft = Vt));
      return $t < Ct || Ft < Rt ? null : { minX: Ct, minY: Rt, maxX: $t, maxY: Ft };
    }
    const T = k(h, c.width, c.height, 8);
    if (!T) return !1;
    function O(j, ot) {
      return !j || !ot ? !1 : !(j.maxX < ot.minX || ot.maxX < j.minX || j.maxY < ot.minY || ot.maxY < j.minY);
    }
    function $(j, ot) {
      const At = Qr((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "", "paint", ot);
      if (!At) return null;
      const Ut = At.centerUv.u - At.halfW, Ct = At.centerUv.u + At.halfW, Rt = At.centerUv.v - At.halfH, $t = At.centerUv.v + At.halfH, Ft = c.width, Vt = c.height;
      return {
        minX: Math.floor((Ut % 1 + 1) % 1 * Ft),
        maxX: Math.ceil((Ct % 1 + 1) % 1 * Ft),
        minY: Math.floor(U(Rt, 0, 1) * Vt),
        maxY: Math.ceil(U($t, 0, 1) * Vt),
        wraps: Ct - Ut >= 1 || Ut < 0 || Ct > 1
      };
    }
    function W(j) {
      const ot = (j == null ? void 0 : j.bbox) || null;
      if (!ot) return null;
      const At = (j == null ? void 0 : j.transform) || {}, Ut = c.width, Ct = c.height, Rt = Number(ot.u0 || 0) + Number(At.du || 0), $t = Number(ot.u1 || 0) + Number(At.du || 0), Ft = Number(ot.v0 || 0) + Number(At.dv || 0), Vt = Number(ot.v1 || 0) + Number(At.dv || 0);
      return {
        minX: Math.floor((Rt % 1 + 1) % 1 * Ut),
        maxX: Math.ceil(($t % 1 + 1) % 1 * Ut),
        minY: Math.floor(U(Ft, 0, 1) * Ct),
        maxY: Math.ceil(U(Vt, 0, 1) * Ct),
        wraps: $t - Rt >= 1 || Rt < 0 || $t > 1
      };
    }
    function dt(j) {
      return j ? j.wraps ? O(T, { minX: 0, maxX: j.maxX, minY: j.minY, maxY: j.maxY }) || O(T, { minX: j.minX, maxX: c.width - 1, minY: j.minY, maxY: j.maxY }) : O(T, j) : !0;
    }
    function xt(j) {
      if (!j) return { touched: !1, canvas: null };
      const ot = $s(c.width, c.height);
      ot.ctx.drawImage(j, 0, 0);
      const At = ot.ctx.getImageData(0, 0, c.width, c.height);
      ot.ctx.save(), ot.ctx.globalCompositeOperation = "destination-out", ot.ctx.drawImage(l.canvas, 0, 0), ot.ctx.restore();
      const Ut = ot.ctx.getImageData(0, 0, c.width, c.height);
      for (let Ct = 0; Ct < c.width * c.height; Ct += 1) {
        if (h[Ct * 4 + 3] <= 8) continue;
        const $t = At.data[Ct * 4 + 3], Ft = Ut.data[Ct * 4 + 3];
        if ($t > Ft)
          return { touched: !0, canvas: ot.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function _t(j, ot, At) {
      const Ut = Number(At == null ? void 0 : At.z_index), Ct = vg(j, ot, At).map((Rt, $t) => ({
        ...Rt,
        z_index: Number.isFinite(Ut) ? Ut + $t * 1e-3 : S + $t * 1e-3
      }));
      return Ct.length && (S = Math.max(S, ...Ct.map((Rt) => Number((Rt == null ? void 0 : Rt.z_index) || 0))) + 1), Ct;
    }
    for (const j of Ie()) {
      const ot = String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "").trim();
      if (!ot) continue;
      const At = In(ot, "paint");
      if (!dt($(j, At))) {
        b.push(j), w.push(...At);
        continue;
      }
      const Ut = ((vt = (gt = p.paintEngine) == null ? void 0 : gt.getGroupTarget) == null ? void 0 : vt.call(gt, ot)) || null, Ct = ((ut = Ut == null ? void 0 : Ut.committedPaint) == null ? void 0 : ut.canvas) || null;
      if (!Ct) {
        b.push(j), w.push(...At);
        continue;
      }
      const Rt = xt(Ct);
      if (!Rt.touched || !Rt.canvas) {
        b.push(j), w.push(...At);
        continue;
      }
      N = !0;
      const $t = _t(Rt.canvas, "paint", m.get(ot) || j || {});
      _.push(...$t);
    }
    for (const j of gn().filter((ot) => String((ot == null ? void 0 : ot.layerKind) || "paint") === "paint")) {
      if (!dt(W(j))) {
        _.push(j);
        continue;
      }
      const ot = Rp(j, null);
      if (!ot) {
        _.push(j);
        continue;
      }
      const At = xt(ot);
      if (!At.touched || !At.canvas) {
        _.push(j);
        continue;
      }
      N = !0;
      const Ut = _t(At.canvas, "paint", j);
      _.push(...Ut);
    }
    return N ? (d.painting.paint.strokes = w, d.painting.groups = b.sort((j, ot) => Number((j == null ? void 0 : j.z_index) || 0) - Number((ot == null ? void 0 : ot.z_index) || 0)), d.painting.raster_objects = _.sort((j, ot) => Number((j == null ? void 0 : j.z_index) || 0) - Number((ot == null ? void 0 : ot.z_index) || 0)), ii({ preservePanelValues: !1 }), !0) : !1;
  }
  function Jg(i) {
    var m, w, b, _;
    const o = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const c = String(((w = i == null ? void 0 : i.stroke) == null ? void 0 : w.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = ru(o.rawPoints || o.points || [], i.stroke.targetSpace, !0)), Zg(i);
    const l = i.layerKind === "paint" && c !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && Nl((b = i.stroke) == null ? void 0 : b.actionGroupId), li(i.layerKind).push(i.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = ru(h, i.stroke.targetSpace, !0), l && Nl((_ = i.stroke) == null ? void 0 : _.actionGroupId), li(i.layerKind).push(i.stroke), !0);
  }
  function wu(i) {
    var c;
    if (e === "cutout" && p.mode === "frame") {
      const l = Jt(), h = Xe(l);
      if (!l || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const w = wn(i, l, performance.now()), b = w ? Ki(w) : null;
      if (b)
        for (const N of Ls()) {
          if (!Ee(N)) continue;
          const S = Yi(N, b);
          if (S && Number(S.x) >= 0 && Number(S.x) <= 1 && Number(S.y) >= 0 && Number(S.y) <= 1) {
            const k = De(N);
            if (k != null && k.visible) return { item: N, geom: k };
          }
        }
      const _ = Ml(!1).slice().sort((N, S) => Number((S == null ? void 0 : S.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of _) {
        if (N.type === "strokeGroup") {
          const T = ni(Hi("paint", N.actionGroupId || N.id || ""));
          if (!T) continue;
          const O = De(T);
          if (!(O != null && O.visible)) continue;
          const $ = Array.isArray(O.strokePaths) ? O.strokePaths : [];
          for (const W of $) {
            const dt = Array.isArray(W == null ? void 0 : W.points) ? W.points : [];
            if (!dt.length) continue;
            if (W.closed && dt.length >= 3 && or(i, dt)) return { item: T, geom: O };
            const xt = Math.max(8, Number((W == null ? void 0 : W.lineWidth) || 0) * 0.5 + 6);
            for (let _t = 0; _t < dt.length - 1; _t += 1)
              if (Sc(i, dt[_t], dt[_t + 1]) <= xt * xt) return { item: T, geom: O };
            if (dt.length === 1 && zr(i, dt[0]) <= xt * xt) return { item: T, geom: O };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const T = ei($i(((c = N.item) == null ? void 0 : c.id) || N.id || ""));
          if (!T) continue;
          const O = De(T);
          if (zl(T, O, i, w)) return { item: T, geom: O };
          continue;
        }
        const S = N.item;
        if (!S || !Ee(S) || !b) continue;
        const k = Yi(S, b);
        if (k && Number(k.x) >= 0 && Number(k.x) <= 1 && Number(k.y) >= 0 && Number(k.y) <= 1) {
          const T = De(S);
          if (T != null && T.visible) return { item: S, geom: T };
        }
      }
      return null;
    }
    const o = [
      ...Ml(!1).slice().sort((l, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var h;
        return l.type === "strokeGroup" ? ni(Hi("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? ei($i(((h = l.item) == null ? void 0 : h.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...e === "cutout" ? Ls().filter((l) => vn(l)) : []
    ];
    for (const l of o) {
      if (Ce(l)) {
        const m = De(l);
        if (!(m != null && m.visible)) continue;
        const w = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const b of w) {
          const _ = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!_.length) continue;
          if (b.closed && _.length >= 3 && or(i, _)) return { item: l, geom: m };
          const N = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let S = 0; S < _.length - 1; S += 1)
            if (Sc(i, _[S], _[S + 1]) <= N * N) return { item: l, geom: m };
          if (_.length === 1 && zr(i, _[0]) <= N * N) return { item: l, geom: m };
        }
        continue;
      }
      if (qe(l)) {
        const m = De(l);
        if (!(m != null && m.visible)) continue;
        if (zl(l, m, i)) return { item: l, geom: m };
        continue;
      }
      const h = De(l);
      if (h.visible && or(i, h.corners))
        return { item: l, geom: h };
    }
    return null;
  }
  function Ks(i, o) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (i.kind === "strokeGroup") {
      const l = i.corners.findIndex((m) => zr(m, o) <= 121);
      if (l >= 0) {
        const m = i.corners[l], w = m.x - i.center.x, b = m.y - i.center.y, _ = w * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: _ };
      }
      const h = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const m of h) {
        const w = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && w.length >= 3 && or(o, w)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let _ = 0; _ < w.length - 1; _ += 1)
          if (Sc(o, w[_], w[_ + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return or(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject")
      return or(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (e === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const l = i.edgeMidpoints.find((h) => zr(h, o) <= 169);
      if (l) {
        const h = l.edge === "left" || l.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const c = i.corners.findIndex((l) => zr(l, o) <= 121);
    if (c >= 0) {
      const l = i.corners[c], h = l.x - i.center.x, m = l.y - i.center.y, w = h * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: w };
    }
    return zr(i.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : or(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function xu(i, o) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function Qg(i, o) {
    return !!i && !!o && Number(o.x) >= Number(i.x0) && Number(o.x) <= Number(i.x1) && Number(o.y) >= Number(i.y0) && Number(o.y) <= Number(i.y1);
  }
  function t0(i, o) {
    if (!i || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((h) => Qg(i, h))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, l = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!or({ x: c, y: l }, o.corners);
  }
  function ve(i) {
    if (Gg(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? A.style.cursor = "none" : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" ? A.style.cursor = "grabbing" : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? A.style.cursor = "move" : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" ? A.style.cursor = p.interaction.cursor || "nwse-resize" : p.interaction.kind === "rotate" ? A.style.cursor = "grabbing" : A.style.cursor = "default";
      return;
    }
    if (_u()) {
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
    const o = pe(), c = o ? De(o) : null, l = o ? pr(o) : !1, h = l ? { kind: "none", cursor: "default" } : Ks(c, i);
    if (!l && h.kind !== "none") {
      A.style.cursor = h.cursor;
      return;
    }
    if (p.primaryTool === "cursor" && wu(i)) {
      A.style.cursor = "default";
      return;
    }
    A.style.cursor = p.mode === "pano" ? "grab" : "default";
  }
  function zt() {
    if (!J) return;
    const i = pe(), o = En();
    if (!i && o.length === 0 || p.interaction) {
      J.style.display = "none";
      return;
    }
    if (o.length > 1) {
      const ut = "multi", j = Ss(o);
      if (p.menuMode !== ut)
        J.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${j ? "Unlock" : "Lock"}" data-tip="${j ? "Unlock" : "Lock"}">${j ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `, p.menuMode = ut, p.menuSize.measured = !1, Zi(J);
      else {
        const kt = J.querySelector("[data-action='toggle-lock']");
        kt && (kt.innerHTML = j ? Dt.lock_open : Dt.lock_closed, kt.setAttribute("aria-label", j ? "Unlock" : "Lock"), kt.setAttribute("data-tip", j ? "Unlock" : "Lock"));
      }
      const ot = xs(o);
      if (!(ot != null && ot.visible)) {
        J.style.display = "none";
        return;
      }
      const At = ot.corners.map((kt) => kt.x), Ut = ot.corners.map((kt) => kt.y), Ct = Math.min(...At), Rt = Math.max(...At), $t = Math.max(...Ut), Ft = J.style.display, Vt = J.style.visibility;
      J.style.display = "flex", J.style.visibility = "hidden";
      const ce = J.getBoundingClientRect(), tr = Math.round(Number((ce == null ? void 0 : ce.width) || 0)) || J.offsetWidth || p.menuSize.w || 220, er = Math.round(Number((ce == null ? void 0 : ce.height) || 0)) || J.offsetHeight || p.menuSize.h || 40;
      p.menuSize.w = Number.isFinite(tr) && tr > 0 ? tr : 220, p.menuSize.h = Number.isFinite(er) && er > 0 ? er : 40, J.style.display = Ft, J.style.visibility = Vt, p.menuSize.measured = !0;
      const Ji = p.menuSize.w, ro = p.menuSize.h, fi = 14;
      J.style.display = "flex";
      let di = (Ct + Rt) * 0.5 - Ji * 0.5, Qi = $t + 18;
      if (di = U(di, fi, A.width - Ji - fi), Qi + ro > A.height - fi) {
        J.style.display = "none";
        return;
      }
      J.style.left = `${di}px`, J.style.top = `${Qi}px`;
      return;
    }
    const c = El(), l = pr(i), h = c === "stroke" ? "stroke:paint" : e === "stickers" || c === "image" ? `stickers:${Me(i) ? "external" : "normal"}` : `cutout:${p.cutoutAspectOpen ? "open" : "closed"}`;
    if (p.menuMode !== h) {
      if (c === "stroke")
        J.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `;
      else if (e === "stickers" || c === "image")
        J.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          ${Me(i) ? "" : `<button class="pano-btn pano-btn-icon" data-action="duplicate" aria-label="Duplicate" data-tip="Duplicate">${Dt.duplicate}</button><button class="pano-btn pano-btn-icon" data-action="replace-image" aria-label="Replace Image" data-tip="Replace image">${Dt.replace_image}</button>`}
          ${Me(i) ? `<button class="pano-btn pano-btn-icon" data-action="back-initial" aria-label="Back to Initial" data-tip="Back to initial position">${Dt.back_initial}</button>` : ""}
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          ${Me(i) ? `<button class="pano-btn pano-btn-icon" data-action="toggle-visible" aria-label="Hide" data-tip="Hide input image">${Dt.eye_dashed}</button>` : `<button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>`}
        `;
      else {
        const ut = bi(i);
        J.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${Dt.aspect}</button>
            <div class="pano-aspect-popover${p.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
              <button class="pano-btn pano-aspect-choice${ut === "1:1" ? " active" : ""}" data-action="aspect-set" data-aspect="1:1">1:1</button>
              <button class="pano-btn pano-aspect-choice${ut === "4:3" ? " active" : ""}" data-action="aspect-set" data-aspect="4:3">4:3</button>
              <button class="pano-btn pano-aspect-choice${ut === "3:2" ? " active" : ""}" data-action="aspect-set" data-aspect="3:2">3:2</button>
              <button class="pano-btn pano-aspect-choice${ut === "16:9" ? " active" : ""}" data-action="aspect-set" data-aspect="16:9">16:9</button>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon" data-action="rotate-90" aria-label="Rotate 90°" data-tip="Rotate 90°">${Dt.rotate_90}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `;
      }
      p.menuMode = h, p.menuSize.measured = !1, Zi(J);
    }
    if ((e === "stickers" || c === "image") && Me(i)) {
      const ut = J.querySelector("[data-action='back-initial']");
      if (ut) {
        const ot = wp();
        ut.disabled = !ot, ut.setAttribute("aria-disabled", ot ? "false" : "true"), ut.setAttribute("data-tip", ot ? "Back to initial position" : "Already at initial position");
      }
      const j = J.querySelector("[data-action='toggle-visible']");
      if (j) {
        const ot = ri(i);
        j.innerHTML = ot ? Dt.eye : Dt.eye_dashed, j.setAttribute("aria-label", ot ? "Show" : "Hide"), j.setAttribute("data-tip", ot ? "Show input image" : "Hide input image");
      }
    }
    const m = J.querySelector("[data-action='toggle-lock']");
    m && (m.innerHTML = l ? Dt.lock_open : Dt.lock_closed, m.setAttribute("aria-label", l ? "Unlock" : "Lock"), m.setAttribute("data-tip", l ? "Unlock" : "Lock"));
    const w = De(i);
    if (!(w != null && w.visible)) {
      J.style.display = "none";
      return;
    }
    const b = w.corners, _ = b.map((ut) => ut.x), N = b.map((ut) => ut.y), S = Math.min(..._), k = Math.max(..._), T = Math.max(...N), O = J.style.display, $ = J.style.visibility;
    J.style.display = "flex", J.style.visibility = "hidden";
    const W = J.getBoundingClientRect(), dt = Math.round(Number((W == null ? void 0 : W.width) || 0)) || J.offsetWidth || p.menuSize.w || 220, xt = Math.round(Number((W == null ? void 0 : W.height) || 0)) || J.offsetHeight || p.menuSize.h || 40;
    p.menuSize.w = Number.isFinite(dt) && dt > 0 ? dt : 220, p.menuSize.h = Number.isFinite(xt) && xt > 0 ? xt : 40, J.style.display = O, J.style.visibility = $, p.menuSize.measured = !0;
    const _t = p.menuSize.w, st = p.menuSize.h, ht = 14;
    J.style.display = "flex";
    let gt = (S + k) * 0.5 - _t * 0.5, vt = T + 18;
    if (!Number.isFinite(gt) || !Number.isFinite(vt)) {
      J.style.display = "none";
      return;
    }
    if (gt = U(gt, ht, A.width - _t - ht), vt + st > A.height - ht) {
      J.style.display = "none";
      return;
    }
    J.style.left = `${gt}px`, J.style.top = `${vt}px`;
  }
  function to() {
    yt && (Se.timer && (clearTimeout(Se.timer), Se.timer = 0), Se.target = null, yt.classList.remove("show", "pano-tooltip-footer", "pano-tooltip-tool-rail"));
  }
  function e0(i) {
    if (!yt || !i || !i.isConnected) return;
    const o = String(i.getAttribute("data-tip") || "").trim();
    if (!o) return;
    yt.textContent = o;
    const c = P.getBoundingClientRect(), l = i.getBoundingClientRect(), h = 8, m = yt.offsetWidth || 100, w = yt.offsetHeight || 24, b = !!i.closest(".pano-floating-left"), _ = !!i.closest(".pano-paint-footer") || !!i.closest(".pano-paint-color-float");
    yt.classList.remove("pano-tooltip-footer", "pano-tooltip-tool-rail");
    let N = l.left - c.left + l.width * 0.5 - m * 0.5, S = l.top - c.top - w - 8;
    if (b)
      yt.classList.add("pano-tooltip-tool-rail"), N = l.right - c.left + 10, S = l.top - c.top + l.height * 0.5 - w * 0.5, N = U(N, h, Math.max(h, c.width - m - h)), S = U(S, h, Math.max(h, c.height - w - h));
    else if (_) {
      yt.classList.add("pano-tooltip-footer");
      const k = i.closest(".pano-paint-footer"), T = k ? k.getBoundingClientRect() : l;
      N = T.left - c.left + T.width * 0.5 - m * 0.5, S = T.bottom - c.top + 5, N = U(N, h, Math.max(h, c.width - m - h)), S = Math.max(h, S);
    }
    N = U(N, h, Math.max(h, c.width - m - h)), S = Math.max(h, S), yt.style.left = `${N}px`, yt.style.top = `${S}px`, yt.classList.add("show");
  }
  function Zi(i) {
    i.querySelectorAll("[data-tip]").forEach((o) => {
      o.__panoTipBound || (o.__panoTipBound = !0, o.addEventListener("pointerenter", () => {
        Se.target = o, Se.timer && clearTimeout(Se.timer), Se.timer = window.setTimeout(() => {
          Se.target === o && e0(o);
        }, 220);
      }), o.addEventListener("pointerleave", () => {
        Se.target === o && (Se.target = null), to();
      }), o.addEventListener("pointerdown", to));
    });
  }
  const Re = ys({
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
      Pt.backgroundDirty = !0, Pt.dirty = !0;
    }
  });
  A.onpointerdown = (i) => {
    const o = ci(i);
    if (Ja(o, !0), p.viewTween = null, Re.state.inertia.active = !1, Re.state.inertia.vx = 0, Re.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), p.mode !== "frame") {
        const b = p.mode === "unwrap" ? o : Za(i);
        p.interaction = { kind: "view", last: b, lastTs: performance.now() }, Re.startDrag(b.x, b.y, i.pointerId, performance.now());
      }
      ve(o), A.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (r) {
      if (p.mode === "pano") {
        const b = Za(i);
        p.interaction = { kind: "view", last: b, lastTs: performance.now() }, Re.startDrag(b.x, b.y, i.pointerId, performance.now()), ve(o), A.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (It && !It.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (bu() || Gs())) {
      const b = p.primaryTool === "mask" ? "mask" : "paint", _ = p.primaryTool === "mask" ? p.maskTool : p.paintTool, N = Gs() ? Jt() : null, S = { kind: "ERP_GLOBAL" }, k = N ? wn(o, N, performance.now()) : _n(o, performance.now());
      p.interaction = {
        kind: _ === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: vi("live"),
        stroke: _ === "lasso_fill" ? qg(b, _, [k], S) : Wg(b, _, [k], S)
      }, Gi();
      const T = vr();
      if (T)
        if (p.paintEngine.beginStroke(p.interaction.stroke, T), p.interaction.kind === "paint_stroke") {
          const O = p.paintEngine.ensureTarget(T), $ = Number((k == null ? void 0 : k.u) ?? (k == null ? void 0 : k.x) ?? 0), W = Number((k == null ? void 0 : k.v) ?? (k == null ? void 0 : k.y) ?? 0);
          p.paintEngine.appendStrokePoint(O, $, W, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, T);
      ve(o), A.setPointerCapture(i.pointerId), ft();
      return;
    }
    const c = En(), l = pe(), h = c.length > 1 ? xs(c) : l ? De(l) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: o, current: o }, ve(o), A.setPointerCapture(i.pointerId), ft({ localOnly: !0 });
      return;
    }
    if (c.length > 1 && (h != null && h.visible)) {
      if ((c.some((_) => pr(_)) ? { kind: "none" } : Ks(h, o)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: c.map((_) => _),
          offset: { x: o.x - h.center.x, y: o.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: c.filter((_) => Ee(_)).map((_) => ({
            id: String(_.id || ""),
            yaw_deg: Number(_.yaw_deg || 0),
            pitch_deg: Number(_.pitch_deg || 0),
            center: (() => {
              var S, k;
              const N = De(_);
              return N != null && N.visible ? { x: Number(((S = N.center) == null ? void 0 : S.x) || 0), y: Number(((k = N.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: c.filter((_) => Ce(_)).map((_) => ({
            id: String(_.actionGroupId || _.id || ""),
            layerKind: String(_.layerKind || "paint"),
            snapshot: sn(In(_.actionGroupId, _.layerKind)),
            frameSnapshot: sn(Qr(_.actionGroupId, _.layerKind)),
            center: (() => {
              var S, k;
              const N = De(_);
              return N != null && N.visible ? { x: Number(((S = N.center) == null ? void 0 : S.x) || 0), y: Number(((k = N.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Pl(_.actionGroupId, _.layerKind)
          })),
          rasterSnapshots: c.filter((_) => qe(_)).map((_) => ({
            id: We(_.rasterObjectId || _.id || ""),
            snapshot: sn(gn().find((N) => String((N == null ? void 0 : N.id) || "") === We(_.rasterObjectId || _.id || ""))),
            center: (() => {
              var S, k;
              const N = De(_);
              return N != null && N.visible ? { x: Number(((S = N.center) == null ? void 0 : S.x) || 0), y: Number(((k = N.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Fp(_)
          }))
        }, ve(o), A.setPointerCapture(i.pointerId);
        return;
      }
    } else if (l && (h != null && h.visible)) {
      const b = pr(l) ? { kind: "none" } : Ks(h, o);
      if (b.kind === "scale") {
        p.interaction = Ce(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: sn(In(l.actionGroupId, l.layerKind)),
          frameSnapshot: sn(Qr(l.actionGroupId, l.layerKind)),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor
        }, ve(o), A.setPointerCapture(i.pointerId);
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
        }, ve(o), A.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        p.interaction = Ce(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: sn(In(l.actionGroupId, l.layerKind)),
          frameSnapshot: sn(Qr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: h.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x)
        }, ve(o), A.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Ce(l)) {
          const _ = p.mode === "frame" ? (() => {
            const N = Jt();
            return N ? wn(o, N, performance.now()) : null;
          })() : _n(o, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: _,
            snapshot: sn(In(l.actionGroupId, l.layerKind)),
            frameSnapshot: sn(Qr(l.actionGroupId, l.layerKind))
          }, ve(o), A.setPointerCapture(i.pointerId);
          return;
        }
        if (qe(l)) {
          const _ = p.mode === "frame" ? (() => {
            const N = Jt();
            return N ? wn(o, N, performance.now()) : null;
          })() : _n(o, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: _,
            snapshot: sn(gn().find((N) => String((N == null ? void 0 : N.id) || "") === We(l.rasterObjectId || l.id || "")))
          }, ve(o), A.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - h.center.x, y: o.y - h.center.y }
        }, ve(o), A.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = wu(o);
    if (m) {
      const b = p.selectedId !== m.item.id;
      if (b && p.selectedId && (ie(), Rn()), Ui(m.item), e === "cutout" && b && (p.cutoutAspectOpen = !1), b && Bt(), zt(), ft(), pr(m.item)) {
        ve(o);
        return;
      }
      p.interaction = {
        kind: Ce(m.item) ? "move_stroke_group" : qe(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: Ce(m.item) || qe(m.item) ? p.mode === "frame" ? (() => {
          const _ = Jt();
          return _ ? wn(o, _, performance.now()) : null;
        })() : _n(o, performance.now()) : null,
        snapshot: Ce(m.item) ? sn(In(m.item.actionGroupId, m.item.layerKind)) : qe(m.item) ? sn(gn().find((_) => String((_ == null ? void 0 : _.id) || "") === We(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Ce(m.item) ? sn(Qr(m.item.actionGroupId, m.item.layerKind)) : null
      }, ve(o), A.setPointerCapture(i.pointerId);
      return;
    }
    const w = !!p.selectedId;
    if (w && (ie(), Rn()), ii(), w && Bt(), zt(), ft(), p.mode === "pano") {
      const b = Za(i);
      p.interaction = { kind: "view", last: b, lastTs: performance.now() }, Re.startDrag(b.x, b.y, i.pointerId, performance.now()), ve(o), A.setPointerCapture(i.pointerId);
    }
  }, A.onpointermove = (i) => {
    var l, h, m, w, b, _, N, S, k, T, O, $, W, dt, xt, _t, st, ht;
    const o = ci(i);
    if (Ja(o, !0), !p.interaction) {
      ve(o);
      return;
    }
    ve(o);
    const c = p.interaction;
    if (c.kind === "paint_stroke") {
      const gt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let vt = !1;
      gt.forEach((ut) => {
        const j = ci(ut);
        Yg(c, j, performance.now()) && (vt = !0);
      }), vt && ft({ localOnly: !0 });
      return;
    }
    if (c.kind === "paint_lasso_fill") {
      const gt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let vt = !1;
      if (gt.forEach((ut) => {
        const j = ci(ut);
        Xg(c, j, performance.now()) && (vt = !0);
      }), vt) {
        const ut = vr();
        ut && p.paintEngine.updateActiveStroke(c.stroke, ut), ft({ localOnly: !0 });
      }
      return;
    }
    if (c.kind === "view") {
      const gt = performance.now(), vt = p.mode === "unwrap" ? o : Za(i);
      Re.moveDrag(vt.x, vt.y, p.mode === "unwrap" ? "unwrap" : "pano", gt), c.lastTs = gt, c.last = vt, ft({ localOnly: !0 });
      return;
    }
    if (c.kind === "pan_frame") {
      p.frameView.panX += o.x - c.last.x, p.frameView.panY += o.y - c.last.y, c.last = o, ft({ localOnly: !0 });
      return;
    }
    if (c.kind === "move") {
      const gt = o.x - c.offset.x, vt = o.y - c.offset.y;
      if (p.mode === "frame" && e === "cutout") {
        const ut = Jt(), j = Xe(ut);
        if (!ut || !j) return;
        const ot = {
          x: U((gt - j.x) / Math.max(1, j.w), 0, 1),
          y: U((vt - j.y) / Math.max(1, j.h), 0, 1)
        }, At = Hs(ut, ot);
        if (!At) return;
        const Ut = vo(At);
        c.item.yaw_deg = Ut.yaw, c.item.pitch_deg = Ut.pitch;
      } else if (p.mode === "unwrap") {
        const ut = gr(), j = U((gt - ut.x) / Math.max(ut.w, 1), 0, 1), ot = U((vt - ut.y) / Math.max(ut.h, 1), 0, 1);
        c.item.yaw_deg = Oe(j * 360 - 180), c.item.pitch_deg = U(90 - ot * 180, -90, 90);
      } else {
        const ut = ks(gt, vt), j = vo(ut);
        c.item.yaw_deg = j.yaw, c.item.pitch_deg = j.pitch;
      }
      Ee(c.item) && un(), ft({ localOnly: !0 });
      return;
    }
    if (c.kind === "move_stroke_group") {
      const gt = p.mode === "frame" ? (() => {
        const j = Jt();
        return j ? wn(o, j, performance.now()) : null;
      })() : _n(o, performance.now());
      if (!gt || !c.startUv) return;
      const vt = Number(gt.u || 0) - Number(c.startUv.u || 0), ut = Number(gt.v || 0) - Number(c.startUv.v || 0);
      Al((l = c.item) == null ? void 0 : l.actionGroupId, vt, ut, c.snapshot, (h = c.item) == null ? void 0 : h.layerKind, c.frameSnapshot) && (Dn({ rebuildPaintEngine: !0 }), ft({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_raster_object") {
      const gt = p.mode === "frame" ? (() => {
        const j = Jt();
        return j ? wn(o, j, performance.now()) : null;
      })() : _n(o, performance.now());
      if (!gt || !c.startUv) return;
      const vt = Number(gt.u || 0) - Number(c.startUv.u || 0), ut = Number(gt.v || 0) - Number(c.startUv.v || 0);
      Il(((m = c.item) == null ? void 0 : m.rasterObjectId) || ((w = c.item) == null ? void 0 : w.id) || "", vt, ut, c.snapshot) && (qi(), ft({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_multi") {
      const gt = o.x - Number(((b = c.offset) == null ? void 0 : b.x) || 0), vt = o.y - Number(((_ = c.offset) == null ? void 0 : _.y) || 0);
      let ut = !1, j = !1, ot = !1;
      const At = gt - Number(((N = c.startCenter) == null ? void 0 : N.x) || gt), Ut = vt - Number(((S = c.startCenter) == null ? void 0 : S.y) || vt);
      for (const Ct of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
        const Rt = (e === "cutout" ? ws() : bn()).find((Ft) => String((Ft == null ? void 0 : Ft.id) || "") === String(Ct.id || ""));
        if (!Rt || !Ee(Rt)) continue;
        const $t = {
          x: Number(((k = Ct.center) == null ? void 0 : k.x) || 0) + At,
          y: Number(((T = Ct.center) == null ? void 0 : T.y) || 0) + Ut
        };
        if (p.mode === "frame" && e === "cutout") {
          const Ft = Jt(), Vt = Xe(Ft);
          if (!Ft || !Vt) continue;
          const ce = {
            x: U(($t.x - Vt.x) / Math.max(1, Vt.w), 0, 1),
            y: U(($t.y - Vt.y) / Math.max(1, Vt.h), 0, 1)
          }, tr = Hs(Ft, ce);
          if (!tr) continue;
          const er = vo(tr);
          Rt.yaw_deg = er.yaw, Rt.pitch_deg = er.pitch;
        } else if (p.mode === "unwrap") {
          const Ft = gr(), Vt = U(($t.x - Ft.x) / Math.max(Ft.w, 1), 0, 1), ce = U(($t.y - Ft.y) / Math.max(Ft.h, 1), 0, 1);
          Rt.yaw_deg = Oe(Vt * 360 - 180), Rt.pitch_deg = U(90 - ce * 180, -90, 90);
        } else {
          const Ft = ks($t.x, $t.y), Vt = vo(Ft);
          Rt.yaw_deg = Vt.yaw, Rt.pitch_deg = Vt.pitch;
        }
        ut = !0;
      }
      for (const Ct of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
        const Rt = {
          x: Number(((O = Ct.center) == null ? void 0 : O.x) || 0) + At,
          y: Number((($ = Ct.center) == null ? void 0 : $.y) || 0) + Ut
        }, $t = p.mode === "frame" ? (() => {
          const Vt = Jt();
          return Vt ? wn(Rt, Vt, performance.now()) : null;
        })() : _n(Rt, performance.now()), Ft = Ct.centerUv || null;
        if ($t && Ft) {
          const Vt = Number($t.u || 0) - Number(Ft.u || 0), ce = Number($t.v || 0) - Number(Ft.v || 0);
          Al(Ct.id, Vt, ce, Ct.snapshot, Ct.layerKind, Ct.frameSnapshot) && (ut = !0, j = !0);
        }
      }
      for (const Ct of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
        const Rt = {
          x: Number(((W = Ct.center) == null ? void 0 : W.x) || 0) + At,
          y: Number(((dt = Ct.center) == null ? void 0 : dt.y) || 0) + Ut
        }, $t = p.mode === "frame" ? (() => {
          const Vt = Jt();
          return Vt ? wn(Rt, Vt, performance.now()) : null;
        })() : _n(Rt, performance.now()), Ft = Ct.centerUv || null;
        if ($t && Ft) {
          const Vt = Number($t.u || 0) - Number(Ft.u || 0), ce = Number($t.v || 0) - Number(Ft.v || 0);
          Il(Ct.id, Vt, ce, Ct.snapshot) && (ut = !0, ot = !0);
        }
      }
      ut && (j ? Dn({ rebuildPaintEngine: !0 }) : ot ? qi() : un(), ft({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_stroke_group") {
      const vt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      Cl((xt = c.item) == null ? void 0 : xt.actionGroupId, vt, 0, c.snapshot, (_t = c.item) == null ? void 0 : _t.layerKind, c.frameSnapshot) && (Dn({ rebuildPaintEngine: !0 }), ft({ localOnly: !0 }));
      return;
    }
    if (c.kind === "rotate_stroke_group") {
      let gt = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - Number(c.startAng || 0)) * jr;
      i.shiftKey && (gt = Math.round(gt / 45) * 45), Cl((st = c.item) == null ? void 0 : st.actionGroupId, 1, gt, c.snapshot, (ht = c.item) == null ? void 0 : ht.layerKind, c.frameSnapshot) && (Dn({ rebuildPaintEngine: !0 }), ft({ localOnly: !0 }));
      return;
    }
    if (c.kind === "marquee_select") {
      c.current = o, ft({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale") {
      const vt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = U(c.startHFOV * vt, 1, 179), c.item.vFOV_deg = U(c.startVFOV * vt, 1, 179), c.item.aspect_id = Ur(c.item), ft({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_x") {
      const vt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = U(c.startHFOV * vt, 1, 179), c.item.aspect_id = Ur(c.item), ft({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_y") {
      const vt = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.vFOV_deg = U(c.startVFOV * vt, 1, 179), c.item.aspect_id = Ur(c.item), ft({ localOnly: !0 });
      return;
    }
    if (c.kind === "rotate") {
      let vt = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - c.startAng) * jr, ut = c.startRot - vt;
      i.shiftKey && (ut = Math.round(ut / 45) * 45);
      const j = Ee(c.item) ? "rot_deg" : "roll_deg";
      c.item[j] = ut, ft({ localOnly: !0 });
    }
  }, A.onpointerup = () => {
    var o, c, l, h, m, w;
    const i = p.interaction;
    if (((o = p.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = p.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill")
      if (Gi(), Jg(p.interaction)) {
        Dn();
        const b = String(((l = p.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (b) {
          const N = Ie().find((S) => String((S == null ? void 0 : S.actionGroupId) || "") === b);
          N && (N.frame = null);
        }
        const _ = vr();
        _ && (String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(_), iu()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, _)), ie(), Rn(), Bt(), zt(), t.setDirtyCanvas(!0, !0), ft();
      } else {
        const b = vr();
        b && p.paintEngine.cancelActiveStroke(b);
      }
    else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const b = xu(p.interaction.start, p.interaction.current), N = [
        ...e === "cutout" ? Ls().filter((S) => !vn(S)) : [...bn()],
        ...ap(),
        ...op()
      ].filter((S) => t0(b, De(S)));
      dp(N, ((w = N[N.length - 1]) == null ? void 0 : w.id) || null), e === "cutout" && N.length && (p.cutoutAspectOpen = !1), Bt(), zt(), ft();
    } else if (p.interaction && p.interaction.kind !== "view" && p.interaction.kind !== "pan_frame") {
      let b = !1;
      (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (b = !0), p.interaction.kind === "move_raster_object" && (b = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (b = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (b = !0), b && qi(), ie(), Rn(), t.setDirtyCanvas(!0, !0), js(), p.hqFrames = 1, zt(), ft();
    }
    p.interaction = null, Gi(), i && i.kind === "view" && Re.endDrag(performance.now()), Ba(), zt(), ve(p.pointerPos), ft();
  }, A.onpointercancel = () => {
    var i, o, c;
    if (((i = p.interaction) == null ? void 0 : i.kind) === "view" && Re.endDrag(performance.now()), ((o = p.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = p.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
      Gi();
      const l = vr();
      l && p.paintEngine.cancelActiveStroke(l);
    }
    p.interaction = null, Gi(), Ba(), ve(p.pointerPos), ft({ localOnly: !0 });
  }, A.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, A.onmousemove = (i) => {
    const o = ci(i);
    Ja(o, !0), !p.interaction && ve(o);
  }, A.onmouseleave = () => {
    Ja(p.pointerPos, !1), ve(p.pointerPos);
  }, A.onwheel = (i) => {
    if (p.mode === "frame") {
      const o = ci(i), c = i.deltaY < 0 ? 1.1 : 1 / 1.1;
      jg(o, c) && ft({ localOnly: !0 }), i.preventDefault();
      return;
    }
    p.mode === "pano" && (Re.applyWheelEvent(i) && ft({ localOnly: !0 }), i.preventDefault());
  }, A.ondragover = (i) => {
    e !== "stickers" && e !== "cutout" || r || (i.preventDefault(), Ne(!0));
  }, A.ondrop = (i) => {
    var l;
    if (e !== "stickers" && e !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Te.depth = 0, Ne(!1);
    const c = Array.from(((l = i.dataTransfer) == null ? void 0 : l.files) || []).find((h) => Xa(h));
    c && uu(c);
  };
  const Su = (i) => {
    e !== "stickers" && e !== "cutout" || r || Jr(i) && (Te.depth += 1, Ne(!0), i.preventDefault());
  }, Nu = (i) => {
    e !== "stickers" && e !== "cutout" || r || (!Te.active && Jr(i) && Ne(!0), Te.active && i.preventDefault());
  }, Mu = (i) => {
    if (e !== "stickers" && e !== "cutout" || r || !Te.active) return;
    Te.depth = Math.max(0, Te.depth - 1);
    const o = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Te.depth === 0 || o) && Ne(!1);
  }, ku = (i) => {
    e !== "stickers" && e !== "cutout" || r || (Te.depth = 0, Ne(!1), Jr(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Su, !0), window.addEventListener("dragover", Nu, !0), window.addEventListener("dragleave", Mu, !0), window.addEventListener("drop", ku, !0), z.forEach((i) => {
    i.onclick = () => {
      i.disabled || (p.mode = i.dataset.view, e === "cutout" && p.mode === "frame" && pe() && vn(pe()) && (ii({ preservePanelValues: !0 }), Bt(), zt()), Bs(), Ba(), ft());
    };
  });
  function Ws() {
    const { canUndo: i, canRedo: o } = cu();
    D.querySelectorAll("[data-action='undo'], [data-tool-ui-action='undo']").forEach((c) => {
      c.disabled = !i;
    }), D.querySelectorAll("[data-action='redo'], [data-tool-ui-action='redo']").forEach((c) => {
      c.disabled = !o;
    });
  }
  const qs = D.querySelector("[data-action='undo']");
  qs && (qs.onclick = () => {
    r || qs.disabled || Xi(-1);
  });
  const Ys = D.querySelector("[data-action='redo']");
  Ys && (Ys.onclick = () => {
    r || Ys.disabled || Xi(1);
  });
  const Pu = D.querySelector("[data-action='add']");
  Pu && (Pu.onclick = () => {
    r || (e === "stickers" ? Us() : du());
  });
  const Au = D.querySelector("[data-action='clear']");
  Au && (Au.onclick = () => {
    r || pu();
  });
  const Cu = D.querySelector("[data-action='save']");
  Cu && (Cu.onclick = () => {
    r || yu();
  }), D.querySelector("[data-action='reset-view']").onclick = () => {
    an(0, 0, 100, 180, 680);
  };
  const Lr = D.querySelector("[data-action='toggle-grid']"), Xs = () => {
    if (!Lr) return;
    const i = !!p.showGrid;
    Lr.innerHTML = i ? Dt.eye : Dt.eye_dashed, Lr.setAttribute("aria-pressed", i ? "true" : "false"), Lr.setAttribute("aria-label", i ? "Hide Grid" : "Show Grid"), Lr.setAttribute("data-tip", i ? "Hide grid" : "Show grid");
  };
  if (Lr && (Xs(), Lr.onclick = () => {
    p.showGrid = !p.showGrid, Pv(t == null ? void 0 : t.id, p.showGrid), Xs(), ft();
  }), Mt && (Mt.querySelectorAll("[data-tool-mode]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const o = String(i.getAttribute("data-tool-mode") || "cursor");
      p.primaryTool = o, (o === "paint" || o === "mask") && ii({ preservePanelValues: !0 }), fn(), Bt(), zt(), ft();
    };
  }), Mt.querySelectorAll("[data-tool-ui-action]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const o = String(i.getAttribute("data-tool-ui-action") || "");
      if (!((o === "undo" || o === "redo") && i.disabled)) {
        if (o === "undo") Xi(-1);
        else if (o === "redo") Xi(1);
        else if (o === "clear") pu();
        else if (o === "add") Us();
        else if (o === "add-image") Us();
        else if (o === "add-or-look") {
          const c = Jt();
          if ((d.shots || []).length === 0)
            du();
          else {
            const l = c;
            if (!l) return;
            p.selectedId = l.id || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], d.active.selected_shot_id = p.selectedId;
            const h = Oe(Number(l.yaw_deg || 0)), m = U(Number(l.pitch_deg || 0), -89.9, 89.9);
            an(h, m, p.viewFov), Bt(), zt(), ft();
          }
        }
      }
    };
  })), D.querySelectorAll("[data-paint-tool]").forEach((i) => {
    i.onclick = () => {
      p.primaryTool = "paint";
      const o = String(i.getAttribute("data-paint-tool") || "pen");
      p.paintTool = o, ii({ preservePanelValues: !0 }), on[o] && (p.activeBrushPresetId = o), fn(), Bt(), zt(), ft();
    };
  }), D.querySelectorAll("[data-mask-tool]").forEach((i) => {
    i.onclick = () => {
      p.primaryTool = "mask", p.maskTool = String(i.getAttribute("data-mask-tool") || "pen"), ii({ preservePanelValues: !0 }), fn(), Bt(), zt(), ft();
    };
  }), q.forEach((i) => {
    i.onclick = () => {
      const o = String(i.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
      Og(o);
    };
  }), G.forEach((i) => {
    i.oninput = () => {
      if (i.disabled) return;
      const o = Math.max(1, Math.min(120, Math.round(Number(i.value)))), c = wr(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[c] = o;
      const l = (o - 1) / 119 * 100;
      G.forEach((h) => {
        h.value = String(o), h.style.setProperty("--v", `${U(l, 0, 100)}%`);
      }), K.forEach((h) => {
        h.textContent = String(o);
      }), Kg();
    }, i.onchange = () => Qa(), i.addEventListener("pointerup", Qa), i.addEventListener("pointercancel", Qa), i.addEventListener("blur", Qa);
  }), bt) {
    bt.querySelectorAll("[data-paint-color-swatch]").forEach((o) => {
      o.onclick = () => {
        const c = Oo.find((l) => l.id === o.getAttribute("data-paint-color-swatch"));
        c && (p.paintColor = dn(c.color), mt(!0), fn());
      };
    });
    const i = bt.querySelector("[data-paint-color-custom]");
    i && (i.onclick = (o) => {
      o.preventDefault(), o.stopPropagation(), It && !It.hidden ? mt(!0) : it(), fn();
    });
  }
  const n0 = (i, o) => {
    var b;
    if (!se) return;
    const c = se.getBoundingClientRect(), l = U((i - c.left) / Math.max(1, c.width), 0, 1), h = 1 - U((o - c.top) / Math.max(1, c.height), 0, 1), m = ua(p.customPaintColor), w = { ...Nc(m.h, l, h), a: Number(((b = p.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    p.customPaintColor = dn(w), p.paintColor = dn(w), fn();
  }, r0 = (i) => {
    var m;
    if (!Ae) return;
    const o = Ae.getBoundingClientRect(), c = U((i - o.left) / Math.max(1, o.width), 0, 1), l = ua(p.customPaintColor), h = { ...Nc(c, l.s, l.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = dn(h), p.paintColor = dn(h), fn();
  }, Iu = (i, o) => {
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
    i.preventDefault(), i.stopPropagation(), Iu(i, (o) => n0(o.clientX, o.clientY));
  }), Ae && (Ae.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Iu(i, (o) => r0(o.clientX));
  }), Ve && (Ve.oninput = () => {
    const i = { ...p.customPaintColor, a: U(Number(Ve.value) / 100, 0, 1) };
    p.customPaintColor = dn(i), p.paintColor = dn(i), fn();
  });
  const Eu = () => {
    if (!lt) return;
    const i = !!p.fullscreen;
    lt.innerHTML = i ? Dt.fullscreen_close : Dt.fullscreen, lt.setAttribute("aria-label", i ? "Exit Fullscreen" : "Fullscreen"), lt.setAttribute("data-tip", i ? "Exit fullscreen" : "Fullscreen");
  }, eo = (i) => {
    const o = !!i;
    p.fullscreen !== o && (p.fullscreen = o, D.classList.toggle("pano-modal-fullscreen", o), o ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), Xs(), Eu(), ft());
  }, Tu = () => document.fullscreenElement === R, i0 = async () => {
    var i, o;
    try {
      if (!document.fullscreenEnabled) {
        eo(!p.fullscreen);
        return;
      }
      Tu() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((i = R.requestFullscreen) == null ? void 0 : i.call(R));
    } catch {
      eo(!p.fullscreen);
    }
  }, Du = () => {
    document.fullscreenEnabled && eo(Tu());
  };
  document.addEventListener("fullscreenchange", Du), lt && (Eu(), lt.onclick = (i) => {
    i.preventDefault(), i.stopPropagation(), i0();
  });
  const Ru = () => {
    if (!et) return;
    const i = !!p.outputPreviewExpanded;
    et.innerHTML = i ? Dt.fullscreen_close : Dt.fullscreen, et.setAttribute("aria-label", i ? "Reduce Preview" : "Expand Preview"), et.setAttribute("data-tip", i ? "Reduce preview" : "Expand preview");
  };
  et && (Ru(), et.onclick = (i) => {
    i.preventDefault(), i.stopPropagation();
    const o = !p.outputPreviewExpanded;
    p.outputPreviewExpanded = o, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = o ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), Ru(), ft();
  }), J.addEventListener("click", (i) => {
    const o = i.target.closest("[data-action]");
    if (!o) return;
    const c = o.getAttribute("data-action");
    if (!r) {
      if (c === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, zt(), ft();
        return;
      }
      if (c === "aspect-set") {
        const l = pe();
        if (!l) return;
        const h = String(o.getAttribute("data-aspect") || "1:1");
        Vg(l, h), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, js(), ie(), be(), zt(), ft();
        return;
      }
      if (c === "rotate-90") {
        const l = pe();
        if (!l) return;
        Hg(l), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, js(), ie(), be(), zt(), ft();
        return;
      }
      if (c === "bring-front") {
        $g();
        return;
      }
      if (c === "send-back") {
        zg();
        return;
      }
      if (c === "duplicate") {
        Fg();
        return;
      }
      if (c === "replace-image") {
        Tg();
        return;
      }
      if (c === "toggle-lock") {
        fp();
        return;
      }
      if (c === "back-initial") {
        vp();
        return;
      }
      if (c === "toggle-visible") {
        bp();
        return;
      }
      if (c === "delete") {
        gu();
        return;
      }
      ft();
    }
  });
  const Zs = t.onExecuted, Js = t.onConnectionsChange;
  let Qs = null, tc = null, ec = null;
  !r && e === "stickers" && (ec = (i = "sync") => {
    Vl(i);
  }, t.__panoExternalStickerSync = ec, Qs = function(...o) {
    var c;
    typeof Zs == "function" && Zs.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "executed");
  }, t.onExecuted = Qs, tc = function(...o) {
    var c;
    typeof Js == "function" && Js.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "connections");
  }, t.onConnectionsChange = tc), r || (Kc.set(String(t.id ?? "0"), () => Es()), Lp() && Es());
  const ui = () => {
    var i, o, c, l, h, m, w, b, _, N;
    p.cutoutPreviewSurfaceRaf && (cancelAnimationFrame(p.cutoutPreviewSurfaceRaf), p.cutoutPreviewSurfaceRaf = 0), p.cutoutPreviewSurfaceTimer && (clearTimeout(p.cutoutPreviewSurfaceTimer), p.cutoutPreviewSurfaceTimer = 0), Kc.delete(String(t.id ?? "0")), r || Es(), document.fullscreenElement === R && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Du), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (c = (o = t.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || c.call(o), (h = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || h.call(l, !0, !0), (b = (w = (m = hn) == null ? void 0 : m.canvas) == null ? void 0 : w.setDirty) == null || b.call(w, !0, !0), to(), Ig(), (_ = ct == null ? void 0 : ct.dispose) == null || _.call(ct), (N = Q == null ? void 0 : Q.dispose) == null || N.call(Q), Ne(!1), window.removeEventListener("keydown", Lu, !0), window.removeEventListener("keydown", Ou, !0), window.removeEventListener("keydown", no, !0), window.removeEventListener("keyup", no, !0), window.removeEventListener("keydown", Fu, !0), window.removeEventListener("dragenter", Su, !0), window.removeEventListener("dragover", Nu, !0), window.removeEventListener("dragleave", Mu, !0), window.removeEventListener("drop", ku, !0), !r && e === "stickers" && (t.onExecuted === Qs && (t.onExecuted = Zs), t.onConnectionsChange === tc && (t.onConnectionsChange = Js), t.__panoExternalStickerSync === ec && (t.__panoExternalStickerSync = null)), I.unmount(), M.remove();
  }, Lu = (i) => {
    var o, c, l, h;
    if (i.key === "Escape") {
      if (p.fullscreen && document.fullscreenElement === R) {
        i.preventDefault(), i.stopPropagation(), (o = i.stopImmediatePropagation) == null || o.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), eo(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), ui();
    }
  }, Ou = (i) => {
    const o = String(i.key || ""), c = String(i.code || ""), l = Number(i.keyCode || 0);
    if (!(o === "Delete" || c === "Delete" || l === 46) && !(o === "Backspace" || c === "Backspace" || l === 8)) return;
    const w = i.target, b = ((w == null ? void 0 : w.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || w != null && w.isContentEditable || !pe() || (gu(), i.preventDefault(), i.stopPropagation());
  }, no = (i) => {
    const o = !!(i.ctrlKey || i.metaKey);
    p.marqueeModifier !== o && (p.marqueeModifier = o, ve(p.pointerPos));
  }, Fu = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const o = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (o !== "z" && c !== "KeyZ") return;
    const l = i.target, h = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: m, canRedo: w } = cu();
    i.shiftKey && !w || !i.shiftKey && !m || (Xi(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Lu, !0), window.addEventListener("keydown", Ou, !0), window.addEventListener("keydown", no, !0), window.addEventListener("keyup", no, !0), window.addEventListener("keydown", Fu, !0), R.addEventListener("pointerdown", (i) => {
    i.target === R && ui();
  }), Zi(D), Ap(), !r && e === "stickers" && Vl("open"), Dg(), ie(), Ws(), fn(), Et && requestAnimationFrame(() => {
    Et.classList.add("is-ready");
  }), Bt(), Ua(), su(), ve(p.pointerPos), ft(), Pt.rafId = requestAnimationFrame(zs);
}
function id(t, e, n, r) {
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
    var R;
    const v = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === v) return;
    a(y), n === "PanoramaStickers" && Rv(y), Ov(y, es);
    const M = mn(y, es);
    if (M && !M.__panoPreviewPatchedCb) {
      M.__panoPreviewPatchedCb = !0;
      const D = M.callback;
      M.callback = (A) => {
        var P;
        const L = D ? D(A) : void 0;
        return (P = y.setDirtyCanvas) == null || P.call(y, !0, !1), L;
      };
    }
    const I = mn(y, "bg_color");
    if (I && (I.value == null || String(I.value).trim() === "" || String(I.value).toLowerCase() === "#000000") && (I.value = "#00ff00", (R = I.callback) == null || R.call(I, "#00ff00")), n === "PanoramaStickers") {
      qc(y, r, () => Ca(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = v;
        return;
      }
    }
    qc(y, r, () => Ca(y, "cutout")), Cb(y, {
      buttonText: r,
      onOpen: () => Ca(y, "cutout")
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
function Yv(t) {
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
function Xv(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const r = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), a = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = a, !r && a < 40) {
      requestAnimationFrame(e);
      return;
    }
    Xh(t), qc(t, "Open Preview", () => Ca(t, "stickers", { readOnly: !0, hideSidebar: !1 })), Ab(t, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (s) => Ca(s, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), t.__panoStandaloneInstallDone = !0, t.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(e);
}
hn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  async beforeQueuePrompt() {
    const t = [...Kc.values()].map((r) => {
      try {
        return typeof r == "function" ? r() : null;
      } catch {
        return null;
      }
    }).filter(Boolean);
    t.length > 0 && await Promise.allSettled(t);
    const e = [...ga.values()];
    e.length > 0 && await Promise.allSettled(e);
    const n = [...ma.values()];
    n.length > 0 && await Promise.allSettled(n);
  },
  beforeRegisterNodeDef(t, e) {
    const n = String((e == null ? void 0 : e.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && id(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && id(t, e, "PanoramaCutout", "Open Cutout Editor"), Hc(n) && Yv(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    Xh(t), Hc(e) && Xv(t);
  }
});
