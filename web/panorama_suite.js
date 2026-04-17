import * as Fa from "../../scripts/app.js";
import { app as yn } from "../../scripts/app.js";
import { api as sn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function al(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const fe = {}, Di = [], Jn = () => {
}, md = () => !1, vs = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), _s = (t) => t.startsWith("onUpdate:"), qe = Object.assign, sl = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Nm = Object.prototype.hasOwnProperty, te = (t, e) => Nm.call(t, e), Ft = Array.isArray, Li = (t) => Go(t) === "[object Map]", yd = (t) => Go(t) === "[object Set]", Bu = (t) => Go(t) === "[object Date]", Ut = (t) => typeof t == "function", Ie = (t) => typeof t == "string", Qn = (t) => typeof t == "symbol", oe = (t) => t !== null && typeof t == "object", bd = (t) => (oe(t) || Ut(t)) && Ut(t.then) && Ut(t.catch), vd = Object.prototype.toString, Go = (t) => vd.call(t), Mm = (t) => Go(t).slice(8, -1), _d = (t) => Go(t) === "[object Object]", cl = (t) => Ie(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, No = /* @__PURE__ */ al(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ws = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, Pm = /-\w/g, ln = ws(
  (t) => t.replace(Pm, (e) => e.slice(1).toUpperCase())
), km = /\B([A-Z])/g, ii = ws(
  (t) => t.replace(km, "-$1").toLowerCase()
), xs = ws((t) => t.charAt(0).toUpperCase() + t.slice(1)), gc = ws(
  (t) => t ? `on${xs(t)}` : ""
), Yn = (t, e) => !Object.is(t, e), mc = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, wd = (t, e, n, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Cm = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Gu;
const Ss = () => Gu || (Gu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ns(t) {
  if (Ft(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = Ie(r) ? Tm(r) : Ns(r);
      if (o)
        for (const c in o)
          e[c] = o[c];
    }
    return e;
  } else if (Ie(t) || oe(t))
    return t;
}
const Am = /;(?![^(]*\))/g, Im = /:([^]+)/, Em = /\/\*[^]*?\*\//g;
function Tm(t) {
  const e = {};
  return t.replace(Em, "").split(Am).forEach((n) => {
    if (n) {
      const r = n.split(Im);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function Ms(t) {
  let e = "";
  if (Ie(t))
    e = t;
  else if (Ft(t))
    for (let n = 0; n < t.length; n++) {
      const r = Ms(t[n]);
      r && (e += r + " ");
    }
  else if (oe(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const Dm = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Lm = /* @__PURE__ */ al(Dm);
function xd(t) {
  return !!t || t === "";
}
function Rm(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = ll(t[r], e[r]);
  return n;
}
function ll(t, e) {
  if (t === e) return !0;
  let n = Bu(t), r = Bu(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Qn(t), r = Qn(e), n || r)
    return t === e;
  if (n = Ft(t), r = Ft(e), n || r)
    return n && r ? Rm(t, e) : !1;
  if (n = oe(t), r = oe(e), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(t).length, c = Object.keys(e).length;
    if (o !== c)
      return !1;
    for (const u in t) {
      const f = t.hasOwnProperty(u), g = e.hasOwnProperty(u);
      if (f && !g || !f && g || !ll(t[u], e[u]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const Sd = (t) => !!(t && t.__v_isRef === !0), Nd = (t) => Ie(t) ? t : t == null ? "" : Ft(t) || oe(t) && (t.toString === vd || !Ut(t.toString)) ? Sd(t) ? Nd(t.value) : JSON.stringify(t, Md, 2) : String(t), Md = (t, e) => Sd(e) ? Md(t, e.value) : Li(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, o], c) => (n[yc(r, c) + " =>"] = o, n),
    {}
  )
} : yd(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => yc(n))
} : Qn(e) ? yc(e) : oe(e) && !Ft(e) && !_d(e) ? String(e) : e, yc = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let dn;
class Om {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = dn, !e && dn && (this.index = (dn.scopes || (dn.scopes = [])).push(
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
      const n = dn;
      try {
        return dn = this, e();
      } finally {
        dn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = dn, dn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (dn = this.prevScope, this.prevScope = void 0);
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
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Fm() {
  return dn;
}
let ue;
const bc = /* @__PURE__ */ new WeakSet();
class Pd {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, dn && dn.active && dn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, bc.has(this) && (bc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cd(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ku(this), Ad(this);
    const e = ue, n = Dn;
    ue = this, Dn = !0;
    try {
      return this.fn();
    } finally {
      Id(this), ue = e, Dn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        dl(e);
      this.deps = this.depsTail = void 0, Ku(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? bc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Oc(this) && this.run();
  }
  get dirty() {
    return Oc(this);
  }
}
let kd = 0, Mo, Po;
function Cd(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Po, Po = t;
    return;
  }
  t.next = Mo, Mo = t;
}
function ul() {
  kd++;
}
function fl() {
  if (--kd > 0)
    return;
  if (Po) {
    let e = Po;
    for (Po = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; Mo; ) {
    let e = Mo;
    for (Mo = void 0; e; ) {
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
function Ad(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Id(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), dl(r), $m(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  t.deps = e, t.depsTail = n;
}
function Oc(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Ed(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function Ed(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Fo) || (t.globalVersion = Fo, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Oc(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = ue, r = Dn;
  ue = t, Dn = !0;
  try {
    Ad(t);
    const o = t.fn(t._value);
    (e.version === 0 || Yn(o, t._value)) && (t.flags |= 128, t._value = o, e.version++);
  } catch (o) {
    throw e.version++, o;
  } finally {
    ue = n, Dn = r, Id(t), t.flags &= -3;
  }
}
function dl(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: o } = t;
  if (r && (r.nextSub = o, t.prevSub = void 0), o && (o.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let c = n.computed.deps; c; c = c.nextDep)
      dl(c, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function $m(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let Dn = !0;
const Td = [];
function dr() {
  Td.push(Dn), Dn = !1;
}
function hr() {
  const t = Td.pop();
  Dn = t === void 0 ? !0 : t;
}
function Ku(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const n = ue;
    ue = void 0;
    try {
      e();
    } finally {
      ue = n;
    }
  }
}
let Fo = 0;
class Hm {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class hl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!ue || !Dn || ue === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ue)
      n = this.activeLink = new Hm(ue, this), ue.deps ? (n.prevDep = ue.depsTail, ue.depsTail.nextDep = n, ue.depsTail = n) : ue.deps = ue.depsTail = n, Dd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ue.depsTail, n.nextDep = void 0, ue.depsTail.nextDep = n, ue.depsTail = n, ue.deps === n && (ue.deps = r);
    }
    return n;
  }
  trigger(e) {
    this.version++, Fo++, this.notify(e);
  }
  notify(e) {
    ul();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      fl();
    }
  }
}
function Dd(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        Dd(r);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
  }
}
const Fc = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ Symbol(
  ""
), $c = /* @__PURE__ */ Symbol(
  ""
), $o = /* @__PURE__ */ Symbol(
  ""
);
function Be(t, e, n) {
  if (Dn && ue) {
    let r = Fc.get(t);
    r || Fc.set(t, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new hl()), o.map = r, o.key = n), o.track();
  }
}
function fr(t, e, n, r, o, c) {
  const u = Fc.get(t);
  if (!u) {
    Fo++;
    return;
  }
  const f = (g) => {
    g && g.trigger();
  };
  if (ul(), e === "clear")
    u.forEach(f);
  else {
    const g = Ft(t), y = g && cl(n);
    if (g && n === "length") {
      const w = Number(r);
      u.forEach((p, N) => {
        (N === "length" || N === $o || !Qn(N) && N >= w) && f(p);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), y && f(u.get($o)), e) {
        case "add":
          g ? y && f(u.get("length")) : (f(u.get(Yr)), Li(t) && f(u.get($c)));
          break;
        case "delete":
          g || (f(u.get(Yr)), Li(t) && f(u.get($c)));
          break;
        case "set":
          Li(t) && f(u.get(Yr));
          break;
      }
  }
  fl();
}
function _i(t) {
  const e = /* @__PURE__ */ Qt(t);
  return e === t ? e : (Be(e, "iterate", $o), /* @__PURE__ */ wn(t) ? e : e.map(Ln));
}
function Ps(t) {
  return Be(t = /* @__PURE__ */ Qt(t), "iterate", $o), t;
}
function Wn(t, e) {
  return /* @__PURE__ */ pr(t) ? zi(/* @__PURE__ */ Xr(t) ? Ln(e) : e) : Ln(e);
}
const Vm = {
  __proto__: null,
  [Symbol.iterator]() {
    return vc(this, Symbol.iterator, (t) => Wn(this, t));
  },
  concat(...t) {
    return _i(this).concat(
      ...t.map((e) => Ft(e) ? _i(e) : e)
    );
  },
  entries() {
    return vc(this, "entries", (t) => (t[1] = Wn(this, t[1]), t));
  },
  every(t, e) {
    return ar(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return ar(
      this,
      "filter",
      t,
      e,
      (n) => n.map((r) => Wn(this, r)),
      arguments
    );
  },
  find(t, e) {
    return ar(
      this,
      "find",
      t,
      e,
      (n) => Wn(this, n),
      arguments
    );
  },
  findIndex(t, e) {
    return ar(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return ar(
      this,
      "findLast",
      t,
      e,
      (n) => Wn(this, n),
      arguments
    );
  },
  findLastIndex(t, e) {
    return ar(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return ar(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return _c(this, "includes", t);
  },
  indexOf(...t) {
    return _c(this, "indexOf", t);
  },
  join(t) {
    return _i(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return _c(this, "lastIndexOf", t);
  },
  map(t, e) {
    return ar(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return uo(this, "pop");
  },
  push(...t) {
    return uo(this, "push", t);
  },
  reduce(t, ...e) {
    return Wu(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Wu(this, "reduceRight", t, e);
  },
  shift() {
    return uo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return ar(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return uo(this, "splice", t);
  },
  toReversed() {
    return _i(this).toReversed();
  },
  toSorted(t) {
    return _i(this).toSorted(t);
  },
  toSpliced(...t) {
    return _i(this).toSpliced(...t);
  },
  unshift(...t) {
    return uo(this, "unshift", t);
  },
  values() {
    return vc(this, "values", (t) => Wn(this, t));
  }
};
function vc(t, e, n) {
  const r = Ps(t), o = r[e]();
  return r !== t && !/* @__PURE__ */ wn(t) && (o._next = o.next, o.next = () => {
    const c = o._next();
    return c.done || (c.value = n(c.value)), c;
  }), o;
}
const zm = Array.prototype;
function ar(t, e, n, r, o, c) {
  const u = Ps(t), f = u !== t && !/* @__PURE__ */ wn(t), g = u[e];
  if (g !== zm[e]) {
    const p = g.apply(t, c);
    return f ? Ln(p) : p;
  }
  let y = n;
  u !== t && (f ? y = function(p, N) {
    return n.call(this, Wn(t, p), N, t);
  } : n.length > 2 && (y = function(p, N) {
    return n.call(this, p, N, t);
  }));
  const w = g.call(u, y, r);
  return f && o ? o(w) : w;
}
function Wu(t, e, n, r) {
  const o = Ps(t), c = o !== t && !/* @__PURE__ */ wn(t);
  let u = n, f = !1;
  o !== t && (c ? (f = r.length === 0, u = function(y, w, p) {
    return f && (f = !1, y = Wn(t, y)), n.call(this, y, Wn(t, w), p, t);
  }) : n.length > 3 && (u = function(y, w, p) {
    return n.call(this, y, w, p, t);
  }));
  const g = o[e](u, ...r);
  return f ? Wn(t, g) : g;
}
function _c(t, e, n) {
  const r = /* @__PURE__ */ Qt(t);
  Be(r, "iterate", $o);
  const o = r[e](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ yl(n[0]) ? (n[0] = /* @__PURE__ */ Qt(n[0]), r[e](...n)) : o;
}
function uo(t, e, n = []) {
  dr(), ul();
  const r = (/* @__PURE__ */ Qt(t))[e].apply(t, n);
  return fl(), hr(), r;
}
const Um = /* @__PURE__ */ al("__proto__,__v_isRef,__isVue"), Ld = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Qn)
);
function jm(t) {
  Qn(t) || (t = String(t));
  const e = /* @__PURE__ */ Qt(this);
  return Be(e, "has", t), e.hasOwnProperty(t);
}
class Rd {
  constructor(e = !1, n = !1) {
    this._isReadonly = e, this._isShallow = n;
  }
  get(e, n, r) {
    if (n === "__v_skip") return e.__v_skip;
    const o = this._isReadonly, c = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return c;
    if (n === "__v_raw")
      return r === (o ? c ? Qm : Hd : c ? $d : Fd).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const u = Ft(e);
    if (!o) {
      let g;
      if (u && (g = Vm[n]))
        return g;
      if (n === "hasOwnProperty")
        return jm;
    }
    const f = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ We(e) ? e : r
    );
    if ((Qn(n) ? Ld.has(n) : Um(n)) || (o || Be(e, "get", n), c))
      return f;
    if (/* @__PURE__ */ We(f)) {
      const g = u && cl(n) ? f : f.value;
      return o && oe(g) ? /* @__PURE__ */ Vc(g) : g;
    }
    return oe(f) ? o ? /* @__PURE__ */ Vc(f) : /* @__PURE__ */ gl(f) : f;
  }
}
class Od extends Rd {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, o) {
    let c = e[n];
    const u = Ft(e) && cl(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ pr(c);
      if (!/* @__PURE__ */ wn(r) && !/* @__PURE__ */ pr(r) && (c = /* @__PURE__ */ Qt(c), r = /* @__PURE__ */ Qt(r)), !u && /* @__PURE__ */ We(c) && !/* @__PURE__ */ We(r))
        return y || (c.value = r), !0;
    }
    const f = u ? Number(n) < e.length : te(e, n), g = Reflect.set(
      e,
      n,
      r,
      /* @__PURE__ */ We(e) ? e : o
    );
    return e === /* @__PURE__ */ Qt(o) && (f ? Yn(r, c) && fr(e, "set", n, r) : fr(e, "add", n, r)), g;
  }
  deleteProperty(e, n) {
    const r = te(e, n);
    e[n];
    const o = Reflect.deleteProperty(e, n);
    return o && r && fr(e, "delete", n, void 0), o;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Qn(n) || !Ld.has(n)) && Be(e, "has", n), r;
  }
  ownKeys(e) {
    return Be(
      e,
      "iterate",
      Ft(e) ? "length" : Yr
    ), Reflect.ownKeys(e);
  }
}
class Bm extends Rd {
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
const Gm = /* @__PURE__ */ new Od(), Km = /* @__PURE__ */ new Bm(), Wm = /* @__PURE__ */ new Od(!0);
const Hc = (t) => t, ma = (t) => Reflect.getPrototypeOf(t);
function qm(t, e, n) {
  return function(...r) {
    const o = this.__v_raw, c = /* @__PURE__ */ Qt(o), u = Li(c), f = t === "entries" || t === Symbol.iterator && u, g = t === "keys" && u, y = o[t](...r), w = n ? Hc : e ? zi : Ln;
    return !e && Be(
      c,
      "iterate",
      g ? $c : Yr
    ), qe(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: p, done: N } = y.next();
          return N ? { value: p, done: N } : {
            value: f ? [w(p[0]), w(p[1])] : w(p),
            done: N
          };
        }
      }
    );
  };
}
function ya(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Ym(t, e) {
  const n = {
    get(o) {
      const c = this.__v_raw, u = /* @__PURE__ */ Qt(c), f = /* @__PURE__ */ Qt(o);
      t || (Yn(o, f) && Be(u, "get", o), Be(u, "get", f));
      const { has: g } = ma(u), y = e ? Hc : t ? zi : Ln;
      if (g.call(u, o))
        return y(c.get(o));
      if (g.call(u, f))
        return y(c.get(f));
      c !== u && c.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && Be(/* @__PURE__ */ Qt(o), "iterate", Yr), o.size;
    },
    has(o) {
      const c = this.__v_raw, u = /* @__PURE__ */ Qt(c), f = /* @__PURE__ */ Qt(o);
      return t || (Yn(o, f) && Be(u, "has", o), Be(u, "has", f)), o === f ? c.has(o) : c.has(o) || c.has(f);
    },
    forEach(o, c) {
      const u = this, f = u.__v_raw, g = /* @__PURE__ */ Qt(f), y = e ? Hc : t ? zi : Ln;
      return !t && Be(g, "iterate", Yr), f.forEach((w, p) => o.call(c, y(w), y(p), u));
    }
  };
  return qe(
    n,
    t ? {
      add: ya("add"),
      set: ya("set"),
      delete: ya("delete"),
      clear: ya("clear")
    } : {
      add(o) {
        const c = /* @__PURE__ */ Qt(this), u = ma(c), f = /* @__PURE__ */ Qt(o), g = !e && !/* @__PURE__ */ wn(o) && !/* @__PURE__ */ pr(o) ? f : o;
        return u.has.call(c, g) || Yn(o, g) && u.has.call(c, o) || Yn(f, g) && u.has.call(c, f) || (c.add(g), fr(c, "add", g, g)), this;
      },
      set(o, c) {
        !e && !/* @__PURE__ */ wn(c) && !/* @__PURE__ */ pr(c) && (c = /* @__PURE__ */ Qt(c));
        const u = /* @__PURE__ */ Qt(this), { has: f, get: g } = ma(u);
        let y = f.call(u, o);
        y || (o = /* @__PURE__ */ Qt(o), y = f.call(u, o));
        const w = g.call(u, o);
        return u.set(o, c), y ? Yn(c, w) && fr(u, "set", o, c) : fr(u, "add", o, c), this;
      },
      delete(o) {
        const c = /* @__PURE__ */ Qt(this), { has: u, get: f } = ma(c);
        let g = u.call(c, o);
        g || (o = /* @__PURE__ */ Qt(o), g = u.call(c, o)), f && f.call(c, o);
        const y = c.delete(o);
        return g && fr(c, "delete", o, void 0), y;
      },
      clear() {
        const o = /* @__PURE__ */ Qt(this), c = o.size !== 0, u = o.clear();
        return c && fr(
          o,
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
  ].forEach((o) => {
    n[o] = qm(o, t, e);
  }), n;
}
function pl(t, e) {
  const n = Ym(t, e);
  return (r, o, c) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? r : Reflect.get(
    te(n, o) && o in r ? n : r,
    o,
    c
  );
}
const Xm = {
  get: /* @__PURE__ */ pl(!1, !1)
}, Zm = {
  get: /* @__PURE__ */ pl(!1, !0)
}, Jm = {
  get: /* @__PURE__ */ pl(!0, !1)
};
const Fd = /* @__PURE__ */ new WeakMap(), $d = /* @__PURE__ */ new WeakMap(), Hd = /* @__PURE__ */ new WeakMap(), Qm = /* @__PURE__ */ new WeakMap();
function t0(t) {
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
function e0(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : t0(Mm(t));
}
// @__NO_SIDE_EFFECTS__
function gl(t) {
  return /* @__PURE__ */ pr(t) ? t : ml(
    t,
    !1,
    Gm,
    Xm,
    Fd
  );
}
// @__NO_SIDE_EFFECTS__
function n0(t) {
  return ml(
    t,
    !1,
    Wm,
    Zm,
    $d
  );
}
// @__NO_SIDE_EFFECTS__
function Vc(t) {
  return ml(
    t,
    !0,
    Km,
    Jm,
    Hd
  );
}
function ml(t, e, n, r, o) {
  if (!oe(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const c = e0(t);
  if (c === 0)
    return t;
  const u = o.get(t);
  if (u)
    return u;
  const f = new Proxy(
    t,
    c === 2 ? r : n
  );
  return o.set(t, f), f;
}
// @__NO_SIDE_EFFECTS__
function Xr(t) {
  return /* @__PURE__ */ pr(t) ? /* @__PURE__ */ Xr(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function pr(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function wn(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function yl(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Qt(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ Qt(e) : t;
}
function r0(t) {
  return !te(t, "__v_skip") && Object.isExtensible(t) && wd(t, "__v_skip", !0), t;
}
const Ln = (t) => oe(t) ? /* @__PURE__ */ gl(t) : t, zi = (t) => oe(t) ? /* @__PURE__ */ Vc(t) : t;
// @__NO_SIDE_EFFECTS__
function We(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function i0(t) {
  return o0(t, !1);
}
function o0(t, e) {
  return /* @__PURE__ */ We(t) ? t : new a0(t, e);
}
class a0 {
  constructor(e, n) {
    this.dep = new hl(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ Qt(e), this._value = n ? e : Ln(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ wn(e) || /* @__PURE__ */ pr(e);
    e = r ? e : /* @__PURE__ */ Qt(e), Yn(e, n) && (this._rawValue = e, this._value = r ? e : Ln(e), this.dep.trigger());
  }
}
function bl(t) {
  return /* @__PURE__ */ We(t) ? t.value : t;
}
const s0 = {
  get: (t, e, n) => e === "__v_raw" ? t : bl(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const o = t[e];
    return /* @__PURE__ */ We(o) && !/* @__PURE__ */ We(n) ? (o.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function Vd(t) {
  return /* @__PURE__ */ Xr(t) ? t : new Proxy(t, s0);
}
class c0 {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new hl(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Fo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ue !== this)
      return Cd(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return Ed(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function l0(t, e, n = !1) {
  let r, o;
  return Ut(t) ? r = t : (r = t.get, o = t.set), new c0(r, o, n);
}
const ba = {}, Ja = /* @__PURE__ */ new WeakMap();
let Br;
function u0(t, e = !1, n = Br) {
  if (n) {
    let r = Ja.get(n);
    r || Ja.set(n, r = []), r.push(t);
  }
}
function f0(t, e, n = fe) {
  const { immediate: r, deep: o, once: c, scheduler: u, augmentJob: f, call: g } = n, y = (O) => o ? O : /* @__PURE__ */ wn(O) || o === !1 || o === 0 ? Ir(O, 1) : Ir(O);
  let w, p, N, P, D = !1, E = !1;
  if (/* @__PURE__ */ We(t) ? (p = () => t.value, D = /* @__PURE__ */ wn(t)) : /* @__PURE__ */ Xr(t) ? (p = () => y(t), D = !0) : Ft(t) ? (E = !0, D = t.some((O) => /* @__PURE__ */ Xr(O) || /* @__PURE__ */ wn(O)), p = () => t.map((O) => {
    if (/* @__PURE__ */ We(O))
      return O.value;
    if (/* @__PURE__ */ Xr(O))
      return y(O);
    if (Ut(O))
      return g ? g(O, 2) : O();
  })) : Ut(t) ? e ? p = g ? () => g(t, 2) : t : p = () => {
    if (N) {
      dr();
      try {
        N();
      } finally {
        hr();
      }
    }
    const O = Br;
    Br = w;
    try {
      return g ? g(t, 3, [P]) : t(P);
    } finally {
      Br = O;
    }
  } : p = Jn, e && o) {
    const O = p, G = o === !0 ? 1 / 0 : o;
    p = () => Ir(O(), G);
  }
  const C = Fm(), H = () => {
    w.stop(), C && C.active && sl(C.effects, w);
  };
  if (c && e) {
    const O = e;
    e = (...G) => {
      O(...G), H();
    };
  }
  let T = E ? new Array(t.length).fill(ba) : ba;
  const $ = (O) => {
    if (!(!(w.flags & 1) || !w.dirty && !O))
      if (e) {
        const G = w.run();
        if (o || D || (E ? G.some((k, ot) => Yn(k, T[ot])) : Yn(G, T))) {
          N && N();
          const k = Br;
          Br = w;
          try {
            const ot = [
              G,
              // pass undefined as the old value when it's changed for the first time
              T === ba ? void 0 : E && T[0] === ba ? [] : T,
              P
            ];
            T = G, g ? g(e, 3, ot) : (
              // @ts-expect-error
              e(...ot)
            );
          } finally {
            Br = k;
          }
        }
      } else
        w.run();
  };
  return f && f($), w = new Pd(p), w.scheduler = u ? () => u($, !1) : $, P = (O) => u0(O, !1, w), N = w.onStop = () => {
    const O = Ja.get(w);
    if (O) {
      if (g)
        g(O, 4);
      else
        for (const G of O) G();
      Ja.delete(w);
    }
  }, e ? r ? $(!0) : T = w.run() : u ? u($.bind(null, !0), !0) : w.run(), H.pause = w.pause.bind(w), H.resume = w.resume.bind(w), H.stop = H, H;
}
function Ir(t, e = 1 / 0, n) {
  if (e <= 0 || !oe(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ We(t))
    Ir(t.value, e, n);
  else if (Ft(t))
    for (let r = 0; r < t.length; r++)
      Ir(t[r], e, n);
  else if (yd(t) || Li(t))
    t.forEach((r) => {
      Ir(r, e, n);
    });
  else if (_d(t)) {
    for (const r in t)
      Ir(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && Ir(t[r], e, n);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ko(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (o) {
    ks(o, e, n);
  }
}
function tr(t, e, n, r) {
  if (Ut(t)) {
    const o = Ko(t, e, n, r);
    return o && bd(o) && o.catch((c) => {
      ks(c, e, n);
    }), o;
  }
  if (Ft(t)) {
    const o = [];
    for (let c = 0; c < t.length; c++)
      o.push(tr(t[c], e, n, r));
    return o;
  }
}
function ks(t, e, n, r = !0) {
  const o = e ? e.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: u } = e && e.appContext.config || fe;
  if (e) {
    let f = e.parent;
    const g = e.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const w = f.ec;
      if (w) {
        for (let p = 0; p < w.length; p++)
          if (w[p](t, g, y) === !1)
            return;
      }
      f = f.parent;
    }
    if (c) {
      dr(), Ko(c, null, 10, [
        t,
        g,
        y
      ]), hr();
      return;
    }
  }
  d0(t, n, o, r, u);
}
function d0(t, e, n, r = !0, o = !1) {
  if (o)
    throw t;
  console.error(t);
}
const an = [];
let Gn = -1;
const Ri = [];
let Ar = null, Pi = 0;
const zd = /* @__PURE__ */ Promise.resolve();
let Qa = null;
function Ud(t) {
  const e = Qa || zd;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function h0(t) {
  let e = Gn + 1, n = an.length;
  for (; e < n; ) {
    const r = e + n >>> 1, o = an[r], c = Ho(o);
    c < t || c === t && o.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function vl(t) {
  if (!(t.flags & 1)) {
    const e = Ho(t), n = an[an.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Ho(n) ? an.push(t) : an.splice(h0(e), 0, t), t.flags |= 1, jd();
  }
}
function jd() {
  Qa || (Qa = zd.then(Gd));
}
function p0(t) {
  Ft(t) ? Ri.push(...t) : Ar && t.id === -1 ? Ar.splice(Pi + 1, 0, t) : t.flags & 1 || (Ri.push(t), t.flags |= 1), jd();
}
function qu(t, e, n = Gn + 1) {
  for (; n < an.length; n++) {
    const r = an[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid)
        continue;
      an.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Bd(t) {
  if (Ri.length) {
    const e = [...new Set(Ri)].sort(
      (n, r) => Ho(n) - Ho(r)
    );
    if (Ri.length = 0, Ar) {
      Ar.push(...e);
      return;
    }
    for (Ar = e, Pi = 0; Pi < Ar.length; Pi++) {
      const n = Ar[Pi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ar = null, Pi = 0;
  }
}
const Ho = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Gd(t) {
  try {
    for (Gn = 0; Gn < an.length; Gn++) {
      const e = an[Gn];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Ko(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Gn < an.length; Gn++) {
      const e = an[Gn];
      e && (e.flags &= -2);
    }
    Gn = -1, an.length = 0, Bd(), Qa = null, (an.length || Ri.length) && Gd();
  }
}
let Tn = null, Kd = null;
function ts(t) {
  const e = Tn;
  return Tn = t, Kd = t && t.type.__scopeId || null, e;
}
function g0(t, e = Tn, n) {
  if (!e || t._n)
    return t;
  const r = (...o) => {
    r._d && sf(-1);
    const c = ts(e);
    let u;
    try {
      u = t(...o);
    } finally {
      ts(c), r._d && sf(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function zr(t, e, n, r) {
  const o = t.dirs, c = e && e.dirs;
  for (let u = 0; u < o.length; u++) {
    const f = o[u];
    c && (f.oldValue = c[u].value);
    let g = f.dir[r];
    g && (dr(), tr(g, n, 8, [
      t.el,
      f,
      t,
      e
    ]), hr());
  }
}
function m0(t, e) {
  if (Ke) {
    let n = Ke.provides;
    const r = Ke.parent && Ke.parent.provides;
    r === n && (n = Ke.provides = Object.create(r)), n[t] = e;
  }
}
function $a(t, e, n = !1) {
  const r = g1();
  if (r || Fi) {
    let o = Fi ? Fi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return n && Ut(e) ? e.call(r && r.proxy) : e;
  }
}
const y0 = /* @__PURE__ */ Symbol.for("v-scx"), b0 = () => $a(y0);
function Ha(t, e, n) {
  return Wd(t, e, n);
}
function Wd(t, e, n = fe) {
  const { immediate: r, deep: o, flush: c, once: u } = n, f = qe({}, n), g = e && r || !e && c !== "post";
  let y;
  if (zo) {
    if (c === "sync") {
      const P = b0();
      y = P.__watcherHandles || (P.__watcherHandles = []);
    } else if (!g) {
      const P = () => {
      };
      return P.stop = Jn, P.resume = Jn, P.pause = Jn, P;
    }
  }
  const w = Ke;
  f.call = (P, D, E) => tr(P, w, D, E);
  let p = !1;
  c === "post" ? f.scheduler = (P) => {
    fn(P, w && w.suspense);
  } : c !== "sync" && (p = !0, f.scheduler = (P, D) => {
    D ? P() : vl(P);
  }), f.augmentJob = (P) => {
    e && (P.flags |= 4), p && (P.flags |= 2, w && (P.id = w.uid, P.i = w));
  };
  const N = f0(t, e, f);
  return zo && (y ? y.push(N) : g && N()), N;
}
function v0(t, e, n) {
  const r = this.proxy, o = Ie(t) ? t.includes(".") ? qd(r, t) : () => r[t] : t.bind(r, r);
  let c;
  Ut(e) ? c = e : (c = e.handler, n = e);
  const u = Wo(this), f = Wd(o, c.bind(r), n);
  return u(), f;
}
function qd(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const _0 = /* @__PURE__ */ Symbol("_vte"), w0 = (t) => t.__isTeleport, x0 = /* @__PURE__ */ Symbol("_leaveCb");
function _l(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, _l(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Yd(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Yu(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const es = /* @__PURE__ */ new WeakMap();
function ko(t, e, n, r, o = !1) {
  if (Ft(t)) {
    t.forEach(
      (E, C) => ko(
        E,
        e && (Ft(e) ? e[C] : e),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Co(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ko(t, e, n, r.component.subTree);
    return;
  }
  const c = r.shapeFlag & 4 ? Nl(r.component) : r.el, u = o ? null : c, { i: f, r: g } = t, y = e && e.r, w = f.refs === fe ? f.refs = {} : f.refs, p = f.setupState, N = /* @__PURE__ */ Qt(p), P = p === fe ? md : (E) => Yu(w, E) ? !1 : te(N, E), D = (E, C) => !(C && Yu(w, C));
  if (y != null && y !== g) {
    if (Xu(e), Ie(y))
      w[y] = null, P(y) && (p[y] = null);
    else if (/* @__PURE__ */ We(y)) {
      const E = e;
      D(y, E.k) && (y.value = null), E.k && (w[E.k] = null);
    }
  }
  if (Ut(g))
    Ko(g, f, 12, [u, w]);
  else {
    const E = Ie(g), C = /* @__PURE__ */ We(g);
    if (E || C) {
      const H = () => {
        if (t.f) {
          const T = E ? P(g) ? p[g] : w[g] : D() || !t.k ? g.value : w[t.k];
          if (o)
            Ft(T) && sl(T, c);
          else if (Ft(T))
            T.includes(c) || T.push(c);
          else if (E)
            w[g] = [c], P(g) && (p[g] = w[g]);
          else {
            const $ = [c];
            D(g, t.k) && (g.value = $), t.k && (w[t.k] = $);
          }
        } else E ? (w[g] = u, P(g) && (p[g] = u)) : C && (D(g, t.k) && (g.value = u), t.k && (w[t.k] = u));
      };
      if (u) {
        const T = () => {
          H(), es.delete(t);
        };
        T.id = -1, es.set(t, T), fn(T, n);
      } else
        Xu(t), H();
    }
  }
}
function Xu(t) {
  const e = es.get(t);
  e && (e.flags |= 8, es.delete(t));
}
Ss().requestIdleCallback;
Ss().cancelIdleCallback;
const Co = (t) => !!t.type.__asyncLoader, Xd = (t) => t.type.__isKeepAlive;
function S0(t, e) {
  Zd(t, "a", e);
}
function N0(t, e) {
  Zd(t, "da", e);
}
function Zd(t, e, n = Ke) {
  const r = t.__wdc || (t.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return t();
  });
  if (Cs(e, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Xd(o.parent.vnode) && M0(r, e, n, o), o = o.parent;
  }
}
function M0(t, e, n, r) {
  const o = Cs(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  th(() => {
    sl(r[e], o);
  }, n);
}
function Cs(t, e, n = Ke, r = !1) {
  if (n) {
    const o = n[t] || (n[t] = []), c = e.__weh || (e.__weh = (...u) => {
      dr();
      const f = Wo(n), g = tr(e, n, t, u);
      return f(), hr(), g;
    });
    return r ? o.unshift(c) : o.push(c), c;
  }
}
const gr = (t) => (e, n = Ke) => {
  (!zo || t === "sp") && Cs(t, (...r) => e(...r), n);
}, P0 = gr("bm"), Jd = gr("m"), k0 = gr(
  "bu"
), C0 = gr("u"), Qd = gr(
  "bum"
), th = gr("um"), A0 = gr(
  "sp"
), I0 = gr("rtg"), E0 = gr("rtc");
function T0(t, e = Ke) {
  Cs("ec", t, e);
}
const D0 = "components", eh = /* @__PURE__ */ Symbol.for("v-ndc");
function L0(t) {
  return Ie(t) ? R0(D0, t, !1) || t : t || eh;
}
function R0(t, e, n = !0, r = !1) {
  const o = Tn || Ke;
  if (o) {
    const c = o.type;
    {
      const f = _1(
        c,
        !1
      );
      if (f && (f === e || f === ln(e) || f === xs(ln(e))))
        return c;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Zu(o[t] || c[t], e) || // global registration
      Zu(o.appContext[t], e)
    );
    return !u && r ? c : u;
  }
}
function Zu(t, e) {
  return t && (t[e] || t[ln(e)] || t[xs(ln(e))]);
}
function Oi(t, e, n, r) {
  let o;
  const c = n, u = Ft(t);
  if (u || Ie(t)) {
    const f = u && /* @__PURE__ */ Xr(t);
    let g = !1, y = !1;
    f && (g = !/* @__PURE__ */ wn(t), y = /* @__PURE__ */ pr(t), t = Ps(t)), o = new Array(t.length);
    for (let w = 0, p = t.length; w < p; w++)
      o[w] = e(
        g ? y ? zi(Ln(t[w])) : Ln(t[w]) : t[w],
        w,
        void 0,
        c
      );
  } else if (typeof t == "number") {
    o = new Array(t);
    for (let f = 0; f < t; f++)
      o[f] = e(f + 1, f, void 0, c);
  } else if (oe(t))
    if (t[Symbol.iterator])
      o = Array.from(
        t,
        (f, g) => e(f, g, void 0, c)
      );
    else {
      const f = Object.keys(t);
      o = new Array(f.length);
      for (let g = 0, y = f.length; g < y; g++) {
        const w = f[g];
        o[g] = e(t[w], w, g, c);
      }
    }
  else
    o = [];
  return o;
}
const zc = (t) => t ? Nh(t) ? Nl(t) : zc(t.parent) : null, Ao = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ qe(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => zc(t.parent),
    $root: (t) => zc(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => rh(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      vl(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Ud.bind(t.proxy)),
    $watch: (t) => v0.bind(t)
  })
), wc = (t, e) => t !== fe && !t.__isScriptSetup && te(t, e), O0 = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: c, accessCache: u, type: f, appContext: g } = t;
    if (e[0] !== "$") {
      const N = u[e];
      if (N !== void 0)
        switch (N) {
          case 1:
            return r[e];
          case 2:
            return o[e];
          case 4:
            return n[e];
          case 3:
            return c[e];
        }
      else {
        if (wc(r, e))
          return u[e] = 1, r[e];
        if (o !== fe && te(o, e))
          return u[e] = 2, o[e];
        if (te(c, e))
          return u[e] = 3, c[e];
        if (n !== fe && te(n, e))
          return u[e] = 4, n[e];
        Uc && (u[e] = 0);
      }
    }
    const y = Ao[e];
    let w, p;
    if (y)
      return e === "$attrs" && Be(t.attrs, "get", ""), y(t);
    if (
      // css module (injected by vue-loader)
      (w = f.__cssModules) && (w = w[e])
    )
      return w;
    if (n !== fe && te(n, e))
      return u[e] = 4, n[e];
    if (
      // global properties
      p = g.config.globalProperties, te(p, e)
    )
      return p[e];
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: o, ctx: c } = t;
    return wc(o, e) ? (o[e] = n, !0) : r !== fe && te(r, e) ? (r[e] = n, !0) : te(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (c[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: o, props: c, type: u }
  }, f) {
    let g;
    return !!(n[f] || t !== fe && f[0] !== "$" && te(t, f) || wc(e, f) || te(c, f) || te(r, f) || te(Ao, f) || te(o.config.globalProperties, f) || (g = u.__cssModules) && g[f]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : te(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Ju(t) {
  return Ft(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Uc = !0;
function F0(t) {
  const e = rh(t), n = t.proxy, r = t.ctx;
  Uc = !1, e.beforeCreate && Qu(e.beforeCreate, t, "bc");
  const {
    // state
    data: o,
    computed: c,
    methods: u,
    watch: f,
    provide: g,
    inject: y,
    // lifecycle
    created: w,
    beforeMount: p,
    mounted: N,
    beforeUpdate: P,
    updated: D,
    activated: E,
    deactivated: C,
    beforeDestroy: H,
    beforeUnmount: T,
    destroyed: $,
    unmounted: O,
    render: G,
    renderTracked: k,
    renderTriggered: ot,
    errorCaptured: X,
    serverPrefetch: vt,
    // public API
    expose: F,
    inheritAttrs: ft,
    // assets
    components: Q,
    directives: lt,
    filters: it
  } = e;
  if (y && $0(y, r, null), u)
    for (const et in u) {
      const gt = u[et];
      Ut(gt) && (r[et] = gt.bind(n));
    }
  if (o) {
    const et = o.call(n, n);
    oe(et) && (t.data = /* @__PURE__ */ gl(et));
  }
  if (Uc = !0, c)
    for (const et in c) {
      const gt = c[et], xt = Ut(gt) ? gt.bind(n, n) : Ut(gt.get) ? gt.get.bind(n, n) : Jn, At = !Ut(gt) && Ut(gt.set) ? gt.set.bind(n) : Jn, tt = $i({
        get: xt,
        set: At
      });
      Object.defineProperty(r, et, {
        enumerable: !0,
        configurable: !0,
        get: () => tt.value,
        set: (dt) => tt.value = dt
      });
    }
  if (f)
    for (const et in f)
      nh(f[et], r, n, et);
  if (g) {
    const et = Ut(g) ? g.call(n) : g;
    Reflect.ownKeys(et).forEach((gt) => {
      m0(gt, et[gt]);
    });
  }
  w && Qu(w, t, "c");
  function rt(et, gt) {
    Ft(gt) ? gt.forEach((xt) => et(xt.bind(n))) : gt && et(gt.bind(n));
  }
  if (rt(P0, p), rt(Jd, N), rt(k0, P), rt(C0, D), rt(S0, E), rt(N0, C), rt(T0, X), rt(E0, k), rt(I0, ot), rt(Qd, T), rt(th, O), rt(A0, vt), Ft(F))
    if (F.length) {
      const et = t.exposed || (t.exposed = {});
      F.forEach((gt) => {
        Object.defineProperty(et, gt, {
          get: () => n[gt],
          set: (xt) => n[gt] = xt,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  G && t.render === Jn && (t.render = G), ft != null && (t.inheritAttrs = ft), Q && (t.components = Q), lt && (t.directives = lt), vt && Yd(t);
}
function $0(t, e, n = Jn) {
  Ft(t) && (t = jc(t));
  for (const r in t) {
    const o = t[r];
    let c;
    oe(o) ? "default" in o ? c = $a(
      o.from || r,
      o.default,
      !0
    ) : c = $a(o.from || r) : c = $a(o), /* @__PURE__ */ We(c) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (u) => c.value = u
    }) : e[r] = c;
  }
}
function Qu(t, e, n) {
  tr(
    Ft(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function nh(t, e, n, r) {
  let o = r.includes(".") ? qd(n, r) : () => n[r];
  if (Ie(t)) {
    const c = e[t];
    Ut(c) && Ha(o, c);
  } else if (Ut(t))
    Ha(o, t.bind(n));
  else if (oe(t))
    if (Ft(t))
      t.forEach((c) => nh(c, e, n, r));
    else {
      const c = Ut(t.handler) ? t.handler.bind(n) : e[t.handler];
      Ut(c) && Ha(o, c, t);
    }
}
function rh(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: o,
    optionsCache: c,
    config: { optionMergeStrategies: u }
  } = t.appContext, f = c.get(e);
  let g;
  return f ? g = f : !o.length && !n && !r ? g = e : (g = {}, o.length && o.forEach(
    (y) => ns(g, y, u, !0)
  ), ns(g, e, u)), oe(e) && c.set(e, g), g;
}
function ns(t, e, n, r = !1) {
  const { mixins: o, extends: c } = e;
  c && ns(t, c, n, !0), o && o.forEach(
    (u) => ns(t, u, n, !0)
  );
  for (const u in e)
    if (!(r && u === "expose")) {
      const f = H0[u] || n && n[u];
      t[u] = f ? f(t[u], e[u]) : e[u];
    }
  return t;
}
const H0 = {
  data: tf,
  props: ef,
  emits: ef,
  // objects
  methods: bo,
  computed: bo,
  // lifecycle
  beforeCreate: rn,
  created: rn,
  beforeMount: rn,
  mounted: rn,
  beforeUpdate: rn,
  updated: rn,
  beforeDestroy: rn,
  beforeUnmount: rn,
  destroyed: rn,
  unmounted: rn,
  activated: rn,
  deactivated: rn,
  errorCaptured: rn,
  serverPrefetch: rn,
  // assets
  components: bo,
  directives: bo,
  // watch
  watch: z0,
  // provide / inject
  provide: tf,
  inject: V0
};
function tf(t, e) {
  return e ? t ? function() {
    return qe(
      Ut(t) ? t.call(this, this) : t,
      Ut(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function V0(t, e) {
  return bo(jc(t), jc(e));
}
function jc(t) {
  if (Ft(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function rn(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function bo(t, e) {
  return t ? qe(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function ef(t, e) {
  return t ? Ft(t) && Ft(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : qe(
    /* @__PURE__ */ Object.create(null),
    Ju(t),
    Ju(e ?? {})
  ) : e;
}
function z0(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = qe(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = rn(t[r], e[r]);
  return n;
}
function ih() {
  return {
    app: null,
    config: {
      isNativeTag: md,
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
let U0 = 0;
function j0(t, e) {
  return function(r, o = null) {
    Ut(r) || (r = qe({}, r)), o != null && !oe(o) && (o = null);
    const c = ih(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let g = !1;
    const y = c.app = {
      _uid: U0++,
      _component: r,
      _props: o,
      _container: null,
      _context: c,
      _instance: null,
      version: x1,
      get config() {
        return c.config;
      },
      set config(w) {
      },
      use(w, ...p) {
        return u.has(w) || (w && Ut(w.install) ? (u.add(w), w.install(y, ...p)) : Ut(w) && (u.add(w), w(y, ...p))), y;
      },
      mixin(w) {
        return c.mixins.includes(w) || c.mixins.push(w), y;
      },
      component(w, p) {
        return p ? (c.components[w] = p, y) : c.components[w];
      },
      directive(w, p) {
        return p ? (c.directives[w] = p, y) : c.directives[w];
      },
      mount(w, p, N) {
        if (!g) {
          const P = y._ceVNode || cn(r, o);
          return P.appContext = c, N === !0 ? N = "svg" : N === !1 && (N = void 0), t(P, w, N), g = !0, y._container = w, w.__vue_app__ = y, Nl(P.component);
        }
      },
      onUnmount(w) {
        f.push(w);
      },
      unmount() {
        g && (tr(
          f,
          y._instance,
          16
        ), t(null, y._container), delete y._container.__vue_app__);
      },
      provide(w, p) {
        return c.provides[w] = p, y;
      },
      runWithContext(w) {
        const p = Fi;
        Fi = y;
        try {
          return w();
        } finally {
          Fi = p;
        }
      }
    };
    return y;
  };
}
let Fi = null;
const B0 = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${ln(e)}Modifiers`] || t[`${ii(e)}Modifiers`];
function G0(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || fe;
  let o = n;
  const c = e.startsWith("update:"), u = c && B0(r, e.slice(7));
  u && (u.trim && (o = n.map((w) => Ie(w) ? w.trim() : w)), u.number && (o = n.map(Cm)));
  let f, g = r[f = gc(e)] || // also try camelCase event handler (#2249)
  r[f = gc(ln(e))];
  !g && c && (g = r[f = gc(ii(e))]), g && tr(
    g,
    t,
    6,
    o
  );
  const y = r[f + "Once"];
  if (y) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[f])
      return;
    t.emitted[f] = !0, tr(
      y,
      t,
      6,
      o
    );
  }
}
const K0 = /* @__PURE__ */ new WeakMap();
function oh(t, e, n = !1) {
  const r = n ? K0 : e.emitsCache, o = r.get(t);
  if (o !== void 0)
    return o;
  const c = t.emits;
  let u = {}, f = !1;
  if (!Ut(t)) {
    const g = (y) => {
      const w = oh(y, e, !0);
      w && (f = !0, qe(u, w));
    };
    !n && e.mixins.length && e.mixins.forEach(g), t.extends && g(t.extends), t.mixins && t.mixins.forEach(g);
  }
  return !c && !f ? (oe(t) && r.set(t, null), null) : (Ft(c) ? c.forEach((g) => u[g] = null) : qe(u, c), oe(t) && r.set(t, u), u);
}
function As(t, e) {
  return !t || !vs(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), te(t, e[0].toLowerCase() + e.slice(1)) || te(t, ii(e)) || te(t, e));
}
function nf(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [c],
    slots: u,
    attrs: f,
    emit: g,
    render: y,
    renderCache: w,
    props: p,
    data: N,
    setupState: P,
    ctx: D,
    inheritAttrs: E
  } = t, C = ts(t);
  let H, T;
  try {
    if (n.shapeFlag & 4) {
      const O = o || r, G = O;
      H = qn(
        y.call(
          G,
          O,
          w,
          p,
          P,
          N,
          D
        )
      ), T = f;
    } else {
      const O = e;
      H = qn(
        O.length > 1 ? O(
          p,
          { attrs: f, slots: u, emit: g }
        ) : O(
          p,
          null
        )
      ), T = e.props ? f : W0(f);
    }
  } catch (O) {
    Io.length = 0, ks(O, t, 1), H = cn(Er);
  }
  let $ = H;
  if (T && E !== !1) {
    const O = Object.keys(T), { shapeFlag: G } = $;
    O.length && G & 7 && (c && O.some(_s) && (T = q0(
      T,
      c
    )), $ = Ui($, T, !1, !0));
  }
  return n.dirs && ($ = Ui($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs), n.transition && _l($, n.transition), H = $, ts(C), H;
}
const W0 = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || vs(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, q0 = (t, e) => {
  const n = {};
  for (const r in t)
    (!_s(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function Y0(t, e, n) {
  const { props: r, children: o, component: c } = t, { props: u, children: f, patchFlag: g } = e, y = c.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return r ? rf(r, u, y) : !!u;
    if (g & 8) {
      const w = e.dynamicProps;
      for (let p = 0; p < w.length; p++) {
        const N = w[p];
        if (ah(u, r, N) && !As(y, N))
          return !0;
      }
    }
  } else
    return (o || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? rf(r, u, y) : !0 : !!u;
  return !1;
}
function rf(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const c = r[o];
    if (ah(e, t, c) && !As(n, c))
      return !0;
  }
  return !1;
}
function ah(t, e, n) {
  const r = t[n], o = e[n];
  return n === "style" && oe(r) && oe(o) ? !ll(r, o) : r !== o;
}
function X0({ vnode: t, parent: e, suspense: n }, r) {
  for (; e; ) {
    const o = e.subTree;
    if (o.suspense && o.suspense.activeBranch === t && (o.suspense.vnode.el = o.el = r, t = o), o === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = r);
}
const sh = {}, ch = () => Object.create(sh), lh = (t) => Object.getPrototypeOf(t) === sh;
function Z0(t, e, n, r = !1) {
  const o = {}, c = ch();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), uh(t, e, o, c);
  for (const u in t.propsOptions[0])
    u in o || (o[u] = void 0);
  n ? t.props = r ? o : /* @__PURE__ */ n0(o) : t.type.props ? t.props = o : t.props = c, t.attrs = c;
}
function J0(t, e, n, r) {
  const {
    props: o,
    attrs: c,
    vnode: { patchFlag: u }
  } = t, f = /* @__PURE__ */ Qt(o), [g] = t.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const w = t.vnode.dynamicProps;
      for (let p = 0; p < w.length; p++) {
        let N = w[p];
        if (As(t.emitsOptions, N))
          continue;
        const P = e[N];
        if (g)
          if (te(c, N))
            P !== c[N] && (c[N] = P, y = !0);
          else {
            const D = ln(N);
            o[D] = Bc(
              g,
              f,
              D,
              P,
              t,
              !1
            );
          }
        else
          P !== c[N] && (c[N] = P, y = !0);
      }
    }
  } else {
    uh(t, e, o, c) && (y = !0);
    let w;
    for (const p in f)
      (!e || // for camelCase
      !te(e, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((w = ii(p)) === p || !te(e, w))) && (g ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[w] !== void 0) && (o[p] = Bc(
        g,
        f,
        p,
        void 0,
        t,
        !0
      )) : delete o[p]);
    if (c !== f)
      for (const p in c)
        (!e || !te(e, p)) && (delete c[p], y = !0);
  }
  y && fr(t.attrs, "set", "");
}
function uh(t, e, n, r) {
  const [o, c] = t.propsOptions;
  let u = !1, f;
  if (e)
    for (let g in e) {
      if (No(g))
        continue;
      const y = e[g];
      let w;
      o && te(o, w = ln(g)) ? !c || !c.includes(w) ? n[w] = y : (f || (f = {}))[w] = y : As(t.emitsOptions, g) || (!(g in r) || y !== r[g]) && (r[g] = y, u = !0);
    }
  if (c) {
    const g = /* @__PURE__ */ Qt(n), y = f || fe;
    for (let w = 0; w < c.length; w++) {
      const p = c[w];
      n[p] = Bc(
        o,
        g,
        p,
        y[p],
        t,
        !te(y, p)
      );
    }
  }
  return u;
}
function Bc(t, e, n, r, o, c) {
  const u = t[n];
  if (u != null) {
    const f = te(u, "default");
    if (f && r === void 0) {
      const g = u.default;
      if (u.type !== Function && !u.skipFactory && Ut(g)) {
        const { propsDefaults: y } = o;
        if (n in y)
          r = y[n];
        else {
          const w = Wo(o);
          r = y[n] = g.call(
            null,
            e
          ), w();
        }
      } else
        r = g;
      o.ce && o.ce._setProp(n, r);
    }
    u[
      0
      /* shouldCast */
    ] && (c && !f ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === ii(n)) && (r = !0));
  }
  return r;
}
const Q0 = /* @__PURE__ */ new WeakMap();
function fh(t, e, n = !1) {
  const r = n ? Q0 : e.propsCache, o = r.get(t);
  if (o)
    return o;
  const c = t.props, u = {}, f = [];
  let g = !1;
  if (!Ut(t)) {
    const w = (p) => {
      g = !0;
      const [N, P] = fh(p, e, !0);
      qe(u, N), P && f.push(...P);
    };
    !n && e.mixins.length && e.mixins.forEach(w), t.extends && w(t.extends), t.mixins && t.mixins.forEach(w);
  }
  if (!c && !g)
    return oe(t) && r.set(t, Di), Di;
  if (Ft(c))
    for (let w = 0; w < c.length; w++) {
      const p = ln(c[w]);
      of(p) && (u[p] = fe);
    }
  else if (c)
    for (const w in c) {
      const p = ln(w);
      if (of(p)) {
        const N = c[w], P = u[p] = Ft(N) || Ut(N) ? { type: N } : qe({}, N), D = P.type;
        let E = !1, C = !0;
        if (Ft(D))
          for (let H = 0; H < D.length; ++H) {
            const T = D[H], $ = Ut(T) && T.name;
            if ($ === "Boolean") {
              E = !0;
              break;
            } else $ === "String" && (C = !1);
          }
        else
          E = Ut(D) && D.name === "Boolean";
        P[
          0
          /* shouldCast */
        ] = E, P[
          1
          /* shouldCastTrue */
        ] = C, (E || te(P, "default")) && f.push(p);
      }
    }
  const y = [u, f];
  return oe(t) && r.set(t, y), y;
}
function of(t) {
  return t[0] !== "$" && !No(t);
}
const wl = (t) => t === "_" || t === "_ctx" || t === "$stable", xl = (t) => Ft(t) ? t.map(qn) : [qn(t)], t1 = (t, e, n) => {
  if (e._n)
    return e;
  const r = g0((...o) => xl(e(...o)), n);
  return r._c = !1, r;
}, dh = (t, e, n) => {
  const r = t._ctx;
  for (const o in t) {
    if (wl(o)) continue;
    const c = t[o];
    if (Ut(c))
      e[o] = t1(o, c, r);
    else if (c != null) {
      const u = xl(c);
      e[o] = () => u;
    }
  }
}, hh = (t, e) => {
  const n = xl(e);
  t.slots.default = () => n;
}, ph = (t, e, n) => {
  for (const r in e)
    (n || !wl(r)) && (t[r] = e[r]);
}, e1 = (t, e, n) => {
  const r = t.slots = ch();
  if (t.vnode.shapeFlag & 32) {
    const o = e._;
    o ? (ph(r, e, n), n && wd(r, "_", o, !0)) : dh(e, r);
  } else e && hh(t, e);
}, n1 = (t, e, n) => {
  const { vnode: r, slots: o } = t;
  let c = !0, u = fe;
  if (r.shapeFlag & 32) {
    const f = e._;
    f ? n && f === 1 ? c = !1 : ph(o, e, n) : (c = !e.$stable, dh(e, o)), u = e;
  } else e && (hh(t, e), u = { default: 1 });
  if (c)
    for (const f in o)
      !wl(f) && u[f] == null && delete o[f];
}, fn = s1;
function r1(t) {
  return i1(t);
}
function i1(t, e) {
  const n = Ss();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: c,
    createElement: u,
    createText: f,
    createComment: g,
    setText: y,
    setElementText: w,
    parentNode: p,
    nextSibling: N,
    setScopeId: P = Jn,
    insertStaticContent: D
  } = t, E = (A, R, U, J = null, Y = null, q = null, nt = void 0, ut = null, mt = !!R.dynamicChildren) => {
    if (A === R)
      return;
    A && !fo(A, R) && (J = z(A), dt(A, Y, q, !0), A = null), R.patchFlag === -2 && (mt = !1, R.dynamicChildren = null);
    const { type: at, ref: It, shapeFlag: Nt } = R;
    switch (at) {
      case Is:
        C(A, R, U, J);
        break;
      case Er:
        H(A, R, U, J);
        break;
      case Va:
        A == null && T(R, U, J, nt);
        break;
      case Ge:
        Q(
          A,
          R,
          U,
          J,
          Y,
          q,
          nt,
          ut,
          mt
        );
        break;
      default:
        Nt & 1 ? G(
          A,
          R,
          U,
          J,
          Y,
          q,
          nt,
          ut,
          mt
        ) : Nt & 6 ? lt(
          A,
          R,
          U,
          J,
          Y,
          q,
          nt,
          ut,
          mt
        ) : (Nt & 64 || Nt & 128) && at.process(
          A,
          R,
          U,
          J,
          Y,
          q,
          nt,
          ut,
          mt,
          Rt
        );
    }
    It != null && Y ? ko(It, A && A.ref, q, R || A, !R) : It == null && A && A.ref != null && ko(A.ref, null, q, A, !0);
  }, C = (A, R, U, J) => {
    if (A == null)
      r(
        R.el = f(R.children),
        U,
        J
      );
    else {
      const Y = R.el = A.el;
      R.children !== A.children && y(Y, R.children);
    }
  }, H = (A, R, U, J) => {
    A == null ? r(
      R.el = g(R.children || ""),
      U,
      J
    ) : R.el = A.el;
  }, T = (A, R, U, J) => {
    [A.el, A.anchor] = D(
      A.children,
      R,
      U,
      J,
      A.el,
      A.anchor
    );
  }, $ = ({ el: A, anchor: R }, U, J) => {
    let Y;
    for (; A && A !== R; )
      Y = N(A), r(A, U, J), A = Y;
    r(R, U, J);
  }, O = ({ el: A, anchor: R }) => {
    let U;
    for (; A && A !== R; )
      U = N(A), o(A), A = U;
    o(R);
  }, G = (A, R, U, J, Y, q, nt, ut, mt) => {
    if (R.type === "svg" ? nt = "svg" : R.type === "math" && (nt = "mathml"), A == null)
      k(
        R,
        U,
        J,
        Y,
        q,
        nt,
        ut,
        mt
      );
    else {
      const at = A.el && A.el._isVueCE ? A.el : null;
      try {
        at && at._beginPatch(), vt(
          A,
          R,
          Y,
          q,
          nt,
          ut,
          mt
        );
      } finally {
        at && at._endPatch();
      }
    }
  }, k = (A, R, U, J, Y, q, nt, ut) => {
    let mt, at;
    const { props: It, shapeFlag: Nt, transition: Ct, dirs: d } = A;
    if (mt = A.el = u(
      A.type,
      q,
      It && It.is,
      It
    ), Nt & 8 ? w(mt, A.children) : Nt & 16 && X(
      A.children,
      mt,
      null,
      J,
      Y,
      xc(A, q),
      nt,
      ut
    ), d && zr(A, null, J, "created"), ot(mt, A, A.scopeId, nt, J), It) {
      for (const Zt in It)
        Zt !== "value" && !No(Zt) && c(mt, Zt, null, It[Zt], q, J);
      "value" in It && c(mt, "value", null, It.value, q), (at = It.onVnodeBeforeMount) && Un(at, J, A);
    }
    d && zr(A, null, J, "beforeMount");
    const $t = o1(Y, Ct);
    $t && Ct.beforeEnter(mt), r(mt, R, U), ((at = It && It.onVnodeMounted) || $t || d) && fn(() => {
      try {
        at && Un(at, J, A), $t && Ct.enter(mt), d && zr(A, null, J, "mounted");
      } finally {
      }
    }, Y);
  }, ot = (A, R, U, J, Y) => {
    if (U && P(A, U), J)
      for (let q = 0; q < J.length; q++)
        P(A, J[q]);
    if (Y) {
      let q = Y.subTree;
      if (R === q || bh(q.type) && (q.ssContent === R || q.ssFallback === R)) {
        const nt = Y.vnode;
        ot(
          A,
          nt,
          nt.scopeId,
          nt.slotScopeIds,
          Y.parent
        );
      }
    }
  }, X = (A, R, U, J, Y, q, nt, ut, mt = 0) => {
    for (let at = mt; at < A.length; at++) {
      const It = A[at] = ut ? ur(A[at]) : qn(A[at]);
      E(
        null,
        It,
        R,
        U,
        J,
        Y,
        q,
        nt,
        ut
      );
    }
  }, vt = (A, R, U, J, Y, q, nt) => {
    const ut = R.el = A.el;
    let { patchFlag: mt, dynamicChildren: at, dirs: It } = R;
    mt |= A.patchFlag & 16;
    const Nt = A.props || fe, Ct = R.props || fe;
    let d;
    if (U && Ur(U, !1), (d = Ct.onVnodeBeforeUpdate) && Un(d, U, R, A), It && zr(R, A, U, "beforeUpdate"), U && Ur(U, !0), (Nt.innerHTML && Ct.innerHTML == null || Nt.textContent && Ct.textContent == null) && w(ut, ""), at ? F(
      A.dynamicChildren,
      at,
      ut,
      U,
      J,
      xc(R, Y),
      q
    ) : nt || gt(
      A,
      R,
      ut,
      null,
      U,
      J,
      xc(R, Y),
      q,
      !1
    ), mt > 0) {
      if (mt & 16)
        ft(ut, Nt, Ct, U, Y);
      else if (mt & 2 && Nt.class !== Ct.class && c(ut, "class", null, Ct.class, Y), mt & 4 && c(ut, "style", Nt.style, Ct.style, Y), mt & 8) {
        const $t = R.dynamicProps;
        for (let Zt = 0; Zt < $t.length; Zt++) {
          const Jt = $t[Zt], de = Nt[Jt], kt = Ct[Jt];
          (kt !== de || Jt === "value") && c(ut, Jt, de, kt, Y, U);
        }
      }
      mt & 1 && A.children !== R.children && w(ut, R.children);
    } else !nt && at == null && ft(ut, Nt, Ct, U, Y);
    ((d = Ct.onVnodeUpdated) || It) && fn(() => {
      d && Un(d, U, R, A), It && zr(R, A, U, "updated");
    }, J);
  }, F = (A, R, U, J, Y, q, nt) => {
    for (let ut = 0; ut < R.length; ut++) {
      const mt = A[ut], at = R[ut], It = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        mt.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (mt.type === Ge || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !fo(mt, at) || // - In the case of a component, it could contain anything.
        mt.shapeFlag & 198) ? p(mt.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          U
        )
      );
      E(
        mt,
        at,
        It,
        null,
        J,
        Y,
        q,
        nt,
        !0
      );
    }
  }, ft = (A, R, U, J, Y) => {
    if (R !== U) {
      if (R !== fe)
        for (const q in R)
          !No(q) && !(q in U) && c(
            A,
            q,
            R[q],
            null,
            Y,
            J
          );
      for (const q in U) {
        if (No(q)) continue;
        const nt = U[q], ut = R[q];
        nt !== ut && q !== "value" && c(A, q, ut, nt, Y, J);
      }
      "value" in U && c(A, "value", R.value, U.value, Y);
    }
  }, Q = (A, R, U, J, Y, q, nt, ut, mt) => {
    const at = R.el = A ? A.el : f(""), It = R.anchor = A ? A.anchor : f("");
    let { patchFlag: Nt, dynamicChildren: Ct, slotScopeIds: d } = R;
    d && (ut = ut ? ut.concat(d) : d), A == null ? (r(at, U, J), r(It, U, J), X(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      R.children || [],
      U,
      It,
      Y,
      q,
      nt,
      ut,
      mt
    )) : Nt > 0 && Nt & 64 && Ct && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren && A.dynamicChildren.length === Ct.length ? (F(
      A.dynamicChildren,
      Ct,
      U,
      Y,
      q,
      nt,
      ut
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (R.key != null || Y && R === Y.subTree) && gh(
      A,
      R,
      !0
      /* shallow */
    )) : gt(
      A,
      R,
      U,
      It,
      Y,
      q,
      nt,
      ut,
      mt
    );
  }, lt = (A, R, U, J, Y, q, nt, ut, mt) => {
    R.slotScopeIds = ut, A == null ? R.shapeFlag & 512 ? Y.ctx.activate(
      R,
      U,
      J,
      nt,
      mt
    ) : it(
      R,
      U,
      J,
      Y,
      q,
      nt,
      mt
    ) : K(A, R, mt);
  }, it = (A, R, U, J, Y, q, nt) => {
    const ut = A.component = p1(
      A,
      J,
      Y
    );
    if (Xd(A) && (ut.ctx.renderer = Rt), m1(ut, !1, nt), ut.asyncDep) {
      if (Y && Y.registerDep(ut, rt, nt), !A.el) {
        const mt = ut.subTree = cn(Er);
        H(null, mt, R, U), A.placeholder = mt.el;
      }
    } else
      rt(
        ut,
        A,
        R,
        U,
        Y,
        q,
        nt
      );
  }, K = (A, R, U) => {
    const J = R.component = A.component;
    if (Y0(A, R, U))
      if (J.asyncDep && !J.asyncResolved) {
        et(J, R, U);
        return;
      } else
        J.next = R, J.update();
    else
      R.el = A.el, J.vnode = R;
  }, rt = (A, R, U, J, Y, q, nt) => {
    const ut = () => {
      if (A.isMounted) {
        let { next: Nt, bu: Ct, u: d, parent: $t, vnode: Zt } = A;
        {
          const ke = mh(A);
          if (ke) {
            Nt && (Nt.el = Zt.el, et(A, Nt, nt)), ke.asyncDep.then(() => {
              fn(() => {
                A.isUnmounted || at();
              }, Y);
            });
            return;
          }
        }
        let Jt = Nt, de;
        Ur(A, !1), Nt ? (Nt.el = Zt.el, et(A, Nt, nt)) : Nt = Zt, Ct && mc(Ct), (de = Nt.props && Nt.props.onVnodeBeforeUpdate) && Un(de, $t, Nt, Zt), Ur(A, !0);
        const kt = nf(A), Pe = A.subTree;
        A.subTree = kt, E(
          Pe,
          kt,
          // parent may have changed if it's in a teleport
          p(Pe.el),
          // anchor may have changed if it's in a fragment
          z(Pe),
          A,
          Y,
          q
        ), Nt.el = kt.el, Jt === null && X0(A, kt.el), d && fn(d, Y), (de = Nt.props && Nt.props.onVnodeUpdated) && fn(
          () => Un(de, $t, Nt, Zt),
          Y
        );
      } else {
        let Nt;
        const { el: Ct, props: d } = R, { bm: $t, m: Zt, parent: Jt, root: de, type: kt } = A, Pe = Co(R);
        Ur(A, !1), $t && mc($t), !Pe && (Nt = d && d.onVnodeBeforeMount) && Un(Nt, Jt, R), Ur(A, !0);
        {
          de.ce && de.ce._hasShadowRoot() && de.ce._injectChildStyle(
            kt,
            A.parent ? A.parent.type : void 0
          );
          const ke = A.subTree = nf(A);
          E(
            null,
            ke,
            U,
            J,
            A,
            Y,
            q
          ), R.el = ke.el;
        }
        if (Zt && fn(Zt, Y), !Pe && (Nt = d && d.onVnodeMounted)) {
          const ke = R;
          fn(
            () => Un(Nt, Jt, ke),
            Y
          );
        }
        (R.shapeFlag & 256 || Jt && Co(Jt.vnode) && Jt.vnode.shapeFlag & 256) && A.a && fn(A.a, Y), A.isMounted = !0, R = U = J = null;
      }
    };
    A.scope.on();
    const mt = A.effect = new Pd(ut);
    A.scope.off();
    const at = A.update = mt.run.bind(mt), It = A.job = mt.runIfDirty.bind(mt);
    It.i = A, It.id = A.uid, mt.scheduler = () => vl(It), Ur(A, !0), at();
  }, et = (A, R, U) => {
    R.component = A;
    const J = A.vnode.props;
    A.vnode = R, A.next = null, J0(A, R.props, J, U), n1(A, R.children, U), dr(), qu(A), hr();
  }, gt = (A, R, U, J, Y, q, nt, ut, mt = !1) => {
    const at = A && A.children, It = A ? A.shapeFlag : 0, Nt = R.children, { patchFlag: Ct, shapeFlag: d } = R;
    if (Ct > 0) {
      if (Ct & 128) {
        At(
          at,
          Nt,
          U,
          J,
          Y,
          q,
          nt,
          ut,
          mt
        );
        return;
      } else if (Ct & 256) {
        xt(
          at,
          Nt,
          U,
          J,
          Y,
          q,
          nt,
          ut,
          mt
        );
        return;
      }
    }
    d & 8 ? (It & 16 && ve(at, Y, q), Nt !== at && w(U, Nt)) : It & 16 ? d & 16 ? At(
      at,
      Nt,
      U,
      J,
      Y,
      q,
      nt,
      ut,
      mt
    ) : ve(at, Y, q, !0) : (It & 8 && w(U, ""), d & 16 && X(
      Nt,
      U,
      J,
      Y,
      q,
      nt,
      ut,
      mt
    ));
  }, xt = (A, R, U, J, Y, q, nt, ut, mt) => {
    A = A || Di, R = R || Di;
    const at = A.length, It = R.length, Nt = Math.min(at, It);
    let Ct;
    for (Ct = 0; Ct < Nt; Ct++) {
      const d = R[Ct] = mt ? ur(R[Ct]) : qn(R[Ct]);
      E(
        A[Ct],
        d,
        U,
        null,
        Y,
        q,
        nt,
        ut,
        mt
      );
    }
    at > It ? ve(
      A,
      Y,
      q,
      !0,
      !1,
      Nt
    ) : X(
      R,
      U,
      J,
      Y,
      q,
      nt,
      ut,
      mt,
      Nt
    );
  }, At = (A, R, U, J, Y, q, nt, ut, mt) => {
    let at = 0;
    const It = R.length;
    let Nt = A.length - 1, Ct = It - 1;
    for (; at <= Nt && at <= Ct; ) {
      const d = A[at], $t = R[at] = mt ? ur(R[at]) : qn(R[at]);
      if (fo(d, $t))
        E(
          d,
          $t,
          U,
          null,
          Y,
          q,
          nt,
          ut,
          mt
        );
      else
        break;
      at++;
    }
    for (; at <= Nt && at <= Ct; ) {
      const d = A[Nt], $t = R[Ct] = mt ? ur(R[Ct]) : qn(R[Ct]);
      if (fo(d, $t))
        E(
          d,
          $t,
          U,
          null,
          Y,
          q,
          nt,
          ut,
          mt
        );
      else
        break;
      Nt--, Ct--;
    }
    if (at > Nt) {
      if (at <= Ct) {
        const d = Ct + 1, $t = d < It ? R[d].el : J;
        for (; at <= Ct; )
          E(
            null,
            R[at] = mt ? ur(R[at]) : qn(R[at]),
            U,
            $t,
            Y,
            q,
            nt,
            ut,
            mt
          ), at++;
      }
    } else if (at > Ct)
      for (; at <= Nt; )
        dt(A[at], Y, q, !0), at++;
    else {
      const d = at, $t = at, Zt = /* @__PURE__ */ new Map();
      for (at = $t; at <= Ct; at++) {
        const Re = R[at] = mt ? ur(R[at]) : qn(R[at]);
        Re.key != null && Zt.set(Re.key, at);
      }
      let Jt, de = 0;
      const kt = Ct - $t + 1;
      let Pe = !1, ke = 0;
      const er = new Array(kt);
      for (at = 0; at < kt; at++) er[at] = 0;
      for (at = d; at <= Nt; at++) {
        const Re = A[at];
        if (de >= kt) {
          dt(Re, Y, q, !0);
          continue;
        }
        let Te;
        if (Re.key != null)
          Te = Zt.get(Re.key);
        else
          for (Jt = $t; Jt <= Ct; Jt++)
            if (er[Jt - $t] === 0 && fo(Re, R[Jt])) {
              Te = Jt;
              break;
            }
        Te === void 0 ? dt(Re, Y, q, !0) : (er[Te - $t] = at + 1, Te >= ke ? ke = Te : Pe = !0, E(
          Re,
          R[Te],
          U,
          null,
          Y,
          q,
          nt,
          ut,
          mt
        ), de++);
      }
      const Rn = Pe ? a1(er) : Di;
      for (Jt = Rn.length - 1, at = kt - 1; at >= 0; at--) {
        const Re = $t + at, Te = R[Re], De = R[Re + 1], qo = Re + 1 < It ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          De.el || yh(De)
        ) : J;
        er[at] === 0 ? E(
          null,
          Te,
          U,
          qo,
          Y,
          q,
          nt,
          ut,
          mt
        ) : Pe && (Jt < 0 || at !== Rn[Jt] ? tt(Te, U, qo, 2) : Jt--);
      }
    }
  }, tt = (A, R, U, J, Y = null) => {
    const { el: q, type: nt, transition: ut, children: mt, shapeFlag: at } = A;
    if (at & 6) {
      tt(A.component.subTree, R, U, J);
      return;
    }
    if (at & 128) {
      A.suspense.move(R, U, J);
      return;
    }
    if (at & 64) {
      nt.move(A, R, U, Rt);
      return;
    }
    if (nt === Ge) {
      r(q, R, U);
      for (let Nt = 0; Nt < mt.length; Nt++)
        tt(mt[Nt], R, U, J);
      r(A.anchor, R, U);
      return;
    }
    if (nt === Va) {
      $(A, R, U);
      return;
    }
    if (J !== 2 && at & 1 && ut)
      if (J === 0)
        ut.beforeEnter(q), r(q, R, U), fn(() => ut.enter(q), Y);
      else {
        const { leave: Nt, delayLeave: Ct, afterLeave: d } = ut, $t = () => {
          A.ctx.isUnmounted ? o(q) : r(q, R, U);
        }, Zt = () => {
          q._isLeaving && q[x0](
            !0
            /* cancelled */
          ), Nt(q, () => {
            $t(), d && d();
          });
        };
        Ct ? Ct(q, $t, Zt) : Zt();
      }
    else
      r(q, R, U);
  }, dt = (A, R, U, J = !1, Y = !1) => {
    const {
      type: q,
      props: nt,
      ref: ut,
      children: mt,
      dynamicChildren: at,
      shapeFlag: It,
      patchFlag: Nt,
      dirs: Ct,
      cacheIndex: d,
      memo: $t
    } = A;
    if (Nt === -2 && (Y = !1), ut != null && (dr(), ko(ut, null, U, A, !0), hr()), d != null && (R.renderCache[d] = void 0), It & 256) {
      R.ctx.deactivate(A);
      return;
    }
    const Zt = It & 1 && Ct, Jt = !Co(A);
    let de;
    if (Jt && (de = nt && nt.onVnodeBeforeUnmount) && Un(de, R, A), It & 6)
      be(A.component, U, J);
    else {
      if (It & 128) {
        A.suspense.unmount(U, J);
        return;
      }
      Zt && zr(A, null, R, "beforeUnmount"), It & 64 ? A.type.remove(
        A,
        R,
        U,
        Rt,
        J
      ) : at && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !at.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (q !== Ge || Nt > 0 && Nt & 64) ? ve(
        at,
        R,
        U,
        !1,
        !0
      ) : (q === Ge && Nt & 384 || !Y && It & 16) && ve(mt, R, U), J && Bt(A);
    }
    const kt = $t != null && d == null;
    (Jt && (de = nt && nt.onVnodeUnmounted) || Zt || kt) && fn(() => {
      de && Un(de, R, A), Zt && zr(A, null, R, "unmounted"), kt && (A.el = null);
    }, U);
  }, Bt = (A) => {
    const { type: R, el: U, anchor: J, transition: Y } = A;
    if (R === Ge) {
      ae(U, J);
      return;
    }
    if (R === Va) {
      O(A);
      return;
    }
    const q = () => {
      o(U), Y && !Y.persisted && Y.afterLeave && Y.afterLeave();
    };
    if (A.shapeFlag & 1 && Y && !Y.persisted) {
      const { leave: nt, delayLeave: ut } = Y, mt = () => nt(U, q);
      ut ? ut(A.el, q, mt) : mt();
    } else
      q();
  }, ae = (A, R) => {
    let U;
    for (; A !== R; )
      U = N(A), o(A), A = U;
    o(R);
  }, be = (A, R, U) => {
    const { bum: J, scope: Y, job: q, subTree: nt, um: ut, m: mt, a: at } = A;
    af(mt), af(at), J && mc(J), Y.stop(), q && (q.flags |= 8, dt(nt, A, R, U)), ut && fn(ut, R), fn(() => {
      A.isUnmounted = !0;
    }, R);
  }, ve = (A, R, U, J = !1, Y = !1, q = 0) => {
    for (let nt = q; nt < A.length; nt++)
      dt(A[nt], R, U, J, Y);
  }, z = (A) => {
    if (A.shapeFlag & 6)
      return z(A.component.subTree);
    if (A.shapeFlag & 128)
      return A.suspense.next();
    const R = N(A.anchor || A.el), U = R && R[_0];
    return U ? N(U) : R;
  };
  let Pt = !1;
  const Mt = (A, R, U) => {
    let J;
    A == null ? R._vnode && (dt(R._vnode, null, null, !0), J = R._vnode.component) : E(
      R._vnode || null,
      A,
      R,
      null,
      null,
      null,
      U
    ), R._vnode = A, Pt || (Pt = !0, qu(J), Bd(), Pt = !1);
  }, Rt = {
    p: E,
    um: dt,
    m: tt,
    r: Bt,
    mt: it,
    mc: X,
    pc: gt,
    pbc: F,
    n: z,
    o: t
  };
  return {
    render: Mt,
    hydrate: void 0,
    createApp: j0(Mt)
  };
}
function xc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Ur({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function o1(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function gh(t, e, n = !1) {
  const r = t.children, o = e.children;
  if (Ft(r) && Ft(o))
    for (let c = 0; c < r.length; c++) {
      const u = r[c];
      let f = o[c];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = o[c] = ur(o[c]), f.el = u.el), !n && f.patchFlag !== -2 && gh(u, f)), f.type === Is && (f.patchFlag === -1 && (f = o[c] = ur(f)), f.el = u.el), f.type === Er && !f.el && (f.el = u.el);
    }
}
function a1(t) {
  const e = t.slice(), n = [0];
  let r, o, c, u, f;
  const g = t.length;
  for (r = 0; r < g; r++) {
    const y = t[r];
    if (y !== 0) {
      if (o = n[n.length - 1], t[o] < y) {
        e[r] = o, n.push(r);
        continue;
      }
      for (c = 0, u = n.length - 1; c < u; )
        f = c + u >> 1, t[n[f]] < y ? c = f + 1 : u = f;
      y < t[n[c]] && (c > 0 && (e[r] = n[c - 1]), n[c] = r);
    }
  }
  for (c = n.length, u = n[c - 1]; c-- > 0; )
    n[c] = u, u = e[u];
  return n;
}
function mh(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : mh(e);
}
function af(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function yh(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? yh(e.subTree) : null;
}
const bh = (t) => t.__isSuspense;
function s1(t, e) {
  e && e.pendingBranch ? Ft(t) ? e.effects.push(...t) : e.effects.push(t) : p0(t);
}
const Ge = /* @__PURE__ */ Symbol.for("v-fgt"), Is = /* @__PURE__ */ Symbol.for("v-txt"), Er = /* @__PURE__ */ Symbol.for("v-cmt"), Va = /* @__PURE__ */ Symbol.for("v-stc"), Io = [];
let bn = null;
function Me(t = !1) {
  Io.push(bn = t ? null : []);
}
function c1() {
  Io.pop(), bn = Io[Io.length - 1] || null;
}
let Vo = 1;
function sf(t, e = !1) {
  Vo += t, t < 0 && bn && e && (bn.hasOnce = !0);
}
function vh(t) {
  return t.dynamicChildren = Vo > 0 ? bn || Di : null, c1(), Vo > 0 && bn && bn.push(t), t;
}
function ze(t, e, n, r, o, c) {
  return vh(
    Ae(
      t,
      e,
      n,
      r,
      o,
      c,
      !0
    )
  );
}
function Bi(t, e, n, r, o) {
  return vh(
    cn(
      t,
      e,
      n,
      r,
      o,
      !0
    )
  );
}
function _h(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function fo(t, e) {
  return t.type === e.type && t.key === e.key;
}
const wh = ({ key: t }) => t ?? null, za = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Ie(t) || /* @__PURE__ */ We(t) || Ut(t) ? { i: Tn, r: t, k: e, f: !!n } : t : null);
function Ae(t, e = null, n = null, r = 0, o = null, c = t === Ge ? 0 : 1, u = !1, f = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && wh(e),
    ref: e && za(e),
    scopeId: Kd,
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
    shapeFlag: c,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Tn
  };
  return f ? (Sl(g, n), c & 128 && t.normalize(g)) : n && (g.shapeFlag |= Ie(n) ? 8 : 16), Vo > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  bn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && bn.push(g), g;
}
const cn = l1;
function l1(t, e = null, n = null, r = 0, o = null, c = !1) {
  if ((!t || t === eh) && (t = Er), _h(t)) {
    const f = Ui(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && Sl(f, n), Vo > 0 && !c && bn && (f.shapeFlag & 6 ? bn[bn.indexOf(t)] = f : bn.push(f)), f.patchFlag = -2, f;
  }
  if (w1(t) && (t = t.__vccOpts), e) {
    e = u1(e);
    let { class: f, style: g } = e;
    f && !Ie(f) && (e.class = Ms(f)), oe(g) && (/* @__PURE__ */ yl(g) && !Ft(g) && (g = qe({}, g)), e.style = Ns(g));
  }
  const u = Ie(t) ? 1 : bh(t) ? 128 : w0(t) ? 64 : oe(t) ? 4 : Ut(t) ? 2 : 0;
  return Ae(
    t,
    e,
    n,
    r,
    o,
    u,
    c,
    !0
  );
}
function u1(t) {
  return t ? /* @__PURE__ */ yl(t) || lh(t) ? qe({}, t) : t : null;
}
function Ui(t, e, n = !1, r = !1) {
  const { props: o, ref: c, patchFlag: u, children: f, transition: g } = t, y = e ? Sh(o || {}, e) : o, w = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: y,
    key: y && wh(y),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && c ? Ft(c) ? c.concat(za(e)) : [c, za(e)] : za(e)
    ) : c,
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
    patchFlag: e && t.type !== Ge ? u === -1 ? 16 : u | 16 : u,
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
    ssContent: t.ssContent && Ui(t.ssContent),
    ssFallback: t.ssFallback && Ui(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return g && r && _l(
    w,
    g.clone(w)
  ), w;
}
function f1(t = " ", e = 0) {
  return cn(Is, null, t, e);
}
function xh(t, e) {
  const n = cn(Va, null, t);
  return n.staticCount = e, n;
}
function Ua(t = "", e = !1) {
  return e ? (Me(), Bi(Er, null, t)) : cn(Er, null, t);
}
function qn(t) {
  return t == null || typeof t == "boolean" ? cn(Er) : Ft(t) ? cn(
    Ge,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : _h(t) ? ur(t) : cn(Is, null, String(t));
}
function ur(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Ui(t);
}
function Sl(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Ft(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), Sl(t, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = e._;
      !o && !lh(e) ? e._ctx = Tn : o === 3 && Tn && (Tn.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else Ut(e) ? (e = { default: e, _ctx: Tn }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [f1(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function Sh(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const o in r)
      if (o === "class")
        e.class !== r.class && (e.class = Ms([e.class, r.class]));
      else if (o === "style")
        e.style = Ns([e.style, r.style]);
      else if (vs(o)) {
        const c = e[o], u = r[o];
        u && c !== u && !(Ft(c) && c.includes(u)) ? e[o] = c ? [].concat(c, u) : u : u == null && c == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !_s(o) && (e[o] = u);
      } else o !== "" && (e[o] = r[o]);
  }
  return e;
}
function Un(t, e, n, r = null) {
  tr(t, e, 7, [
    n,
    r
  ]);
}
const d1 = ih();
let h1 = 0;
function p1(t, e, n) {
  const r = t.type, o = (e ? e.appContext : t.appContext) || d1, c = {
    uid: h1++,
    vnode: t,
    type: r,
    parent: e,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Om(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(o.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: fh(r, o),
    emitsOptions: oh(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: fe,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: fe,
    data: fe,
    props: fe,
    attrs: fe,
    slots: fe,
    refs: fe,
    setupState: fe,
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
  return c.ctx = { _: c }, c.root = e ? e.root : c, c.emit = G0.bind(null, c), t.ce && t.ce(c), c;
}
let Ke = null;
const g1 = () => Ke || Tn;
let rs, Gc;
{
  const t = Ss(), e = (n, r) => {
    let o;
    return (o = t[n]) || (o = t[n] = []), o.push(r), (c) => {
      o.length > 1 ? o.forEach((u) => u(c)) : o[0](c);
    };
  };
  rs = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ke = n
  ), Gc = e(
    "__VUE_SSR_SETTERS__",
    (n) => zo = n
  );
}
const Wo = (t) => {
  const e = Ke;
  return rs(t), t.scope.on(), () => {
    t.scope.off(), rs(e);
  };
}, cf = () => {
  Ke && Ke.scope.off(), rs(null);
};
function Nh(t) {
  return t.vnode.shapeFlag & 4;
}
let zo = !1;
function m1(t, e = !1, n = !1) {
  e && Gc(e);
  const { props: r, children: o } = t.vnode, c = Nh(t);
  Z0(t, r, c, e), e1(t, o, n || e);
  const u = c ? y1(t, e) : void 0;
  return e && Gc(!1), u;
}
function y1(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, O0);
  const { setup: r } = n;
  if (r) {
    dr();
    const o = t.setupContext = r.length > 1 ? v1(t) : null, c = Wo(t), u = Ko(
      r,
      t,
      0,
      [
        t.props,
        o
      ]
    ), f = bd(u);
    if (hr(), c(), (f || t.sp) && !Co(t) && Yd(t), f) {
      if (u.then(cf, cf), e)
        return u.then((g) => {
          lf(t, g);
        }).catch((g) => {
          ks(g, t, 0);
        });
      t.asyncDep = u;
    } else
      lf(t, u);
  } else
    Mh(t);
}
function lf(t, e, n) {
  Ut(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : oe(e) && (t.setupState = Vd(e)), Mh(t);
}
function Mh(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || Jn);
  {
    const o = Wo(t);
    dr();
    try {
      F0(t);
    } finally {
      hr(), o();
    }
  }
}
const b1 = {
  get(t, e) {
    return Be(t, "get", ""), t[e];
  }
};
function v1(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, b1),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Nl(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Vd(r0(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in Ao)
        return Ao[n](t);
    },
    has(e, n) {
      return n in e || n in Ao;
    }
  })) : t.proxy;
}
function _1(t, e = !0) {
  return Ut(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function w1(t) {
  return Ut(t) && "__vccOpts" in t;
}
const $i = (t, e) => /* @__PURE__ */ l0(t, e, zo), x1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Kc;
const uf = typeof window < "u" && window.trustedTypes;
if (uf)
  try {
    Kc = /* @__PURE__ */ uf.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const Ph = Kc ? (t) => Kc.createHTML(t) : (t) => t, S1 = "http://www.w3.org/2000/svg", N1 = "http://www.w3.org/1998/Math/MathML", lr = typeof document < "u" ? document : null, ff = lr && /* @__PURE__ */ lr.createElement("template"), M1 = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const o = e === "svg" ? lr.createElementNS(S1, t) : e === "mathml" ? lr.createElementNS(N1, t) : n ? lr.createElement(t, { is: n }) : lr.createElement(t);
    return t === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (t) => lr.createTextNode(t),
  createComment: (t) => lr.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => lr.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, r, o, c) {
    const u = n ? n.previousSibling : e.lastChild;
    if (o && (o === c || o.nextSibling))
      for (; e.insertBefore(o.cloneNode(!0), n), !(o === c || !(o = o.nextSibling)); )
        ;
    else {
      ff.innerHTML = Ph(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const f = ff.content;
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
}, P1 = /* @__PURE__ */ Symbol("_vtc");
function k1(t, e, n) {
  const r = t[P1];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const df = /* @__PURE__ */ Symbol("_vod"), C1 = /* @__PURE__ */ Symbol("_vsh"), A1 = /* @__PURE__ */ Symbol(""), I1 = /(?:^|;)\s*display\s*:/;
function E1(t, e, n) {
  const r = t.style, o = Ie(n);
  let c = !1;
  if (n && !o) {
    if (e)
      if (Ie(e))
        for (const u of e.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && ja(r, f, "");
        }
      else
        for (const u in e)
          n[u] == null && ja(r, u, "");
    for (const u in n)
      u === "display" && (c = !0), ja(r, u, n[u]);
  } else if (o) {
    if (e !== n) {
      const u = r[A1];
      u && (n += ";" + u), r.cssText = n, c = I1.test(n);
    }
  } else e && t.removeAttribute("style");
  df in t && (t[df] = c ? r.display : "", t[C1] && (r.display = "none"));
}
const hf = /\s*!important$/;
function ja(t, e, n) {
  if (Ft(n))
    n.forEach((r) => ja(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = T1(t, e);
    hf.test(n) ? t.setProperty(
      ii(r),
      n.replace(hf, ""),
      "important"
    ) : t[r] = n;
  }
}
const pf = ["Webkit", "Moz", "ms"], Sc = {};
function T1(t, e) {
  const n = Sc[e];
  if (n)
    return n;
  let r = ln(e);
  if (r !== "filter" && r in t)
    return Sc[e] = r;
  r = xs(r);
  for (let o = 0; o < pf.length; o++) {
    const c = pf[o] + r;
    if (c in t)
      return Sc[e] = c;
  }
  return e;
}
const gf = "http://www.w3.org/1999/xlink";
function mf(t, e, n, r, o, c = Lm(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(gf, e.slice(6, e.length)) : t.setAttributeNS(gf, e, n) : n == null || c && !xd(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    c ? "" : Qn(n) ? String(n) : n
  );
}
function yf(t, e, n, r, o) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? Ph(n) : n);
    return;
  }
  const c = t.tagName;
  if (e === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const f = c === "OPTION" ? t.getAttribute("value") || "" : t.value, g = n == null ? (
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
    f === "boolean" ? n = xd(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(o || e);
}
function D1(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function L1(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const bf = /* @__PURE__ */ Symbol("_vei");
function R1(t, e, n, r, o = null) {
  const c = t[bf] || (t[bf] = {}), u = c[e];
  if (r && u)
    u.value = r;
  else {
    const [f, g] = O1(e);
    if (r) {
      const y = c[e] = H1(
        r,
        o
      );
      D1(t, f, y, g);
    } else u && (L1(t, f, u, g), c[e] = void 0);
  }
}
const vf = /(?:Once|Passive|Capture)$/;
function O1(t) {
  let e;
  if (vf.test(t)) {
    e = {};
    let r;
    for (; r = t.match(vf); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : ii(t.slice(2)), e];
}
let Nc = 0;
const F1 = /* @__PURE__ */ Promise.resolve(), $1 = () => Nc || (F1.then(() => Nc = 0), Nc = Date.now());
function H1(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    tr(
      V1(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = $1(), n;
}
function V1(t, e) {
  if (Ft(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return e;
}
const _f = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, z1 = (t, e, n, r, o, c) => {
  const u = o === "svg";
  e === "class" ? k1(t, r, u) : e === "style" ? E1(t, n, r) : vs(e) ? _s(e) || R1(t, e, n, r, c) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : U1(t, e, r, u)) ? (yf(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && mf(t, e, r, u, c, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (j1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !Ie(r))) ? yf(t, ln(e), r, c, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), mf(t, e, r, u));
};
function U1(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && _f(e) && Ut(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const o = t.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return _f(e) && Ie(n) ? !1 : e in t;
}
function j1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const r = ln(e);
  return Array.isArray(n) ? n.some((o) => ln(o) === r) : Object.keys(n).some((o) => ln(o) === r);
}
const B1 = ["ctrl", "shift", "alt", "meta"], G1 = {
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
  exact: (t, e) => B1.some((n) => t[`${n}Key`] && !e.includes(n))
}, K1 = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = ((o, ...c) => {
    for (let u = 0; u < e.length; u++) {
      const f = G1[e[u]];
      if (f && f(o, e)) return;
    }
    return t(o, ...c);
  }));
}, W1 = /* @__PURE__ */ qe({ patchProp: z1 }, M1);
let wf;
function q1() {
  return wf || (wf = r1(W1));
}
const Y1 = ((...t) => {
  const e = q1().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const o = Z1(r);
    if (!o) return;
    const c = e._component;
    !Ut(c) && !c.render && !c.template && (c.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const u = n(o, !1, X1(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), u;
  }, e;
});
function X1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function Z1(t) {
  return Ie(t) ? document.querySelector(t) : t;
}
const Le = Math.PI / 180, kh = Math.PI * 2, J1 = 2048;
function Q1() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_GL_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoGlDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ty(t) {
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
function Mc(t, e, n, r = {}) {
  Q1() && console.warn(`[PANO_GL][${t}] ${e}`, {
    ...r,
    source: ty(n)
  });
}
function me(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Tr(t, e, n) {
  return { x: t, y: e, z: n };
}
function is(t, e) {
  return Tr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Ii(t, e) {
  return Tr(t.x * e, t.y * e, t.z * e);
}
function Ba(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function xf(t, e) {
  return Tr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function vo(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Tr(t.x / e, t.y / e, t.z / e);
}
function ey(t, e) {
  const n = Number(t || 0) * Le, r = Number(e || 0) * Le, o = Math.cos(r);
  return Tr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Ga(t, e, n = 0) {
  const r = ey(t, e);
  let o = Tr(0, 1, 0);
  Math.abs(Ba(r, o)) > 0.999 && (o = Tr(0, 0, 1));
  let c = vo(xf(o, r)), u = vo(xf(r, c));
  const f = Number(n || 0) * Le, g = Math.cos(f), y = Math.sin(f), w = is(Ii(c, g), Ii(u, y)), p = is(Ii(c, -y), Ii(u, g));
  return c = vo(w), u = vo(p), { fwd: r, right: c, up: u };
}
function ny(t, e) {
  const n = (Number(t || 0) - 0.5) * kh, r = (0.5 - Number(e || 0)) * Math.PI, o = Math.cos(r);
  return Tr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Sf(t, e, n = 1) {
  const r = Math.max(1, Math.round(Number(t || 1))), o = Math.max(1, Math.round(Number(e || 1))), c = Math.max(1, Number(n || 1)), u = Math.max(512, J1), f = Math.min(1, u / Math.max(r, o));
  return {
    sourceWidth: r,
    sourceHeight: o,
    sourceDpr: c,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(o * f))
  };
}
function Nf(t, e, n) {
  const r = t.createShader(e);
  if (t.shaderSource(r, n), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(r) || "shader compile failed";
    throw t.deleteShader(r), new Error(o);
  }
  return r;
}
function Mf(t, e, n) {
  const r = Nf(t, t.VERTEX_SHADER, e);
  let o;
  try {
    o = Nf(t, t.FRAGMENT_SHADER, n);
  } catch (u) {
    throw t.deleteShader(r), u;
  }
  const c = t.createProgram();
  if (t.attachShader(c, r), t.attachShader(c, o), t.linkProgram(c), t.deleteShader(r), t.deleteShader(o), !t.getProgramParameter(c, t.LINK_STATUS)) {
    const u = t.getProgramInfoLog(c) || "program link failed";
    throw t.deleteProgram(c), new Error(u);
  }
  return c;
}
const Pf = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, ry = `#version 300 es
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
  if (u_mode == 1 || u_mode == 2) {
    sampleUv = projectCameraUv(u_yaw, u_pitch, u_roll, u_hfov, u_vfov);
  }
  if (sampleUv.x < 0.0 || sampleUv.y < 0.0) discard;
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
}`, iy = `#version 300 es
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
function va(t, e, n) {
  if (!t || t.mode === "unwrap") return null;
  const r = Number(t.mode === "cutout" ? t.hFovDeg || 90 : t.fovDeg || 100), o = Number(t.mode === "cutout" ? t.vFovDeg || 60 : 2 * Math.atan(Math.tan(me(r, 1, 179) * Le * 0.5) * (n / Math.max(e, 1))) / Le);
  return {
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.mode === "cutout" && t.rollDeg || 0),
    hFovDeg: me(r, 1, 179),
    vFovDeg: me(o, 0.1, 179)
  };
}
function oy(t) {
  const e = Ga(
    Number(t.yawDeg || 0),
    Number(t.pitchDeg || 0),
    Number(t.rollDeg || 0)
  );
  return {
    right: e.right,
    up: e.up,
    fwd: e.fwd,
    tanX: Math.tan(me(Number(t.hFovDeg || 30), 0.1, 179) * 0.5 * Le),
    tanY: Math.tan(me(Number(t.vFovDeg || 30), 0.1, 179) * 0.5 * Le),
    crop: t.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: me(Number(t.opacity ?? 1), 0, 1)
  };
}
function Ch(t = {}) {
  const e = (t == null ? void 0 : t.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, o = null, c = null, u = null, f = null, g = null, y = null, w = null, p = null, N = !1, P = Sf(1, 1, 1), D = null, E = null, C = null, H = null;
  const T = /* @__PURE__ */ new Map();
  let $ = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  };
  function O(z = null, Pt = null) {
    const Mt = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, Mt), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, z ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, Pt ?? n.CLAMP_TO_EDGE), Mt;
  }
  function G() {
    if (N) return !0;
    try {
      return n = e.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (r = Mf(n, Pf, ry), o = Mf(n, Pf, iy), D = {
        mode: n.getUniformLocation(r, "u_mode"),
        yaw: n.getUniformLocation(r, "u_yaw"),
        pitch: n.getUniformLocation(r, "u_pitch"),
        roll: n.getUniformLocation(r, "u_roll"),
        hFov: n.getUniformLocation(r, "u_hfov"),
        vFov: n.getUniformLocation(r, "u_vfov"),
        viewport: n.getUniformLocation(r, "u_viewport"),
        opacity: n.getUniformLocation(r, "u_opacity"),
        paintOpacity: n.getUniformLocation(r, "u_paintOpacity"),
        maskOpacity: n.getUniformLocation(r, "u_maskOpacity"),
        hasPaint: n.getUniformLocation(r, "u_hasPaint"),
        hasMask: n.getUniformLocation(r, "u_hasMask"),
        showMaskTint: n.getUniformLocation(r, "u_showMaskTint"),
        maskTint: n.getUniformLocation(r, "u_maskTint"),
        coverage: n.getUniformLocation(r, "u_coverage"),
        background: n.getUniformLocation(r, "u_background"),
        paint: n.getUniformLocation(r, "u_paint"),
        mask: n.getUniformLocation(r, "u_mask")
      }, E = {
        texture: n.getUniformLocation(o, "u_texture"),
        mode: n.getUniformLocation(o, "u_mode"),
        viewRight: n.getUniformLocation(o, "u_viewRight"),
        viewUp: n.getUniformLocation(o, "u_viewUp"),
        viewFwd: n.getUniformLocation(o, "u_viewFwd"),
        viewHfov: n.getUniformLocation(o, "u_viewHfov"),
        viewVfov: n.getUniformLocation(o, "u_viewVfov"),
        stickerRight: n.getUniformLocation(o, "u_stickerRight"),
        stickerUp: n.getUniformLocation(o, "u_stickerUp"),
        stickerFwd: n.getUniformLocation(o, "u_stickerFwd"),
        stickerTanX: n.getUniformLocation(o, "u_stickerTanX"),
        stickerTanY: n.getUniformLocation(o, "u_stickerTanY"),
        crop: n.getUniformLocation(o, "u_crop"),
        opacity: n.getUniformLocation(o, "u_opacity")
      }, c = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, c), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
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
      ]), n.STATIC_DRAW), u = O(n.REPEAT, n.CLAMP_TO_EDGE), f = O(n.REPEAT, n.CLAMP_TO_EDGE), g = O(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), N = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function k() {
    var z;
    if (n) {
      try {
        c && n.deleteBuffer(c), u && n.deleteTexture(u), f && n.deleteTexture(f), g && n.deleteTexture(g), T.forEach((Pt) => {
          it(Pt);
        }), r && n.deleteProgram(r), o && n.deleteProgram(o), (z = n.getExtension("WEBGL_lose_context")) == null || z.loseContext();
      } catch {
      }
      n = null, r = null, o = null, c = null, u = null, f = null, g = null, T.clear(), y = null, w = null, p = null, $ = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, C = null, H = null, N = !1;
    }
  }
  function ot(z, Pt, Mt = 1) {
    P = Sf(z, Pt, Mt), (e.width !== P.width || e.height !== P.height) && (e.width = P.width, e.height = P.height);
  }
  function X(z) {
    z === "background" ? y = null : z === "paint" ? w = null : p = null, $[z] && ($[z].width = 0, $[z].height = 0);
  }
  function vt(z, Pt, Mt = [], Rt = { width: 0, height: 0 }, jt = !1) {
    if (!n || !z || !Pt) return !1;
    const A = Number(Pt.width || Pt.videoWidth || Pt.naturalWidth || 0), R = Number(Pt.height || Pt.videoHeight || Pt.naturalHeight || 0);
    if (!(A > 1) || !(R > 1)) return !1;
    const U = Array.isArray(Mt) ? Mt.filter((J) => J && J.w > 0 && J.h > 0) : [];
    if (!U.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, z), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, jt ? 1 : 0), Rt.width !== A || Rt.height !== R)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Pt), Rt.width = A, Rt.height = R, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (C || (C = document.createElement("canvas"), H = C.getContext("2d")), !H)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Pt), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const J of U) {
      const Y = Math.max(0, Math.floor(Number(J.x || 0))), q = Math.max(0, Math.floor(Number(J.y || 0))), nt = Math.min(A - Y, Math.ceil(Number(J.w || 0))), ut = Math.min(R - q, Math.ceil(Number(J.h || 0)));
      if (!(nt <= 0 || ut <= 0)) {
        if (C.width !== nt || C.height !== ut) {
          if (C.width = nt, C.height = ut, H = C.getContext("2d"), !H)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Pt), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          H.clearRect(0, 0, nt, ut);
        H.drawImage(Pt, Y, q, nt, ut, 0, 0, nt, ut), n.texSubImage2D(n.TEXTURE_2D, 0, Y, q, n.RGBA, n.UNSIGNED_BYTE, C);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function F(z, Pt, Mt, Rt, jt = null, A = !1) {
    if (!G()) return !1;
    if (!Mt)
      return X(z), !1;
    const R = String(Rt ?? ""), U = z === "background" ? y : z === "paint" ? w : p, J = $[z], Y = Number(Mt.width || Mt.videoWidth || Mt.naturalWidth || 0), q = Number(Mt.height || Mt.videoHeight || Mt.naturalHeight || 0), nt = J.width !== Y || J.height !== q;
    if (U === R && !nt && !(Array.isArray(jt) && jt.length)) return !0;
    if (!(Y > 0) || !(q > 0))
      return Mc(z, "skip-invalid-size", Mt, { revision: R, sourceWidth: Y, sourceHeight: q }), X(z), !1;
    if (n.bindTexture(n.TEXTURE_2D, Pt), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, A ? 1 : 0), !(Array.isArray(jt) && jt.length ? vt(Pt, Mt, jt, J, A) : !1)) {
      n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Mt);
      const mt = n.getError();
      if (mt !== n.NO_ERROR)
        return Mc(z, "texImage2D-error", Mt, {
          revision: R,
          sourceWidth: Y,
          sourceHeight: q,
          glError: mt
        }), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), X(z), !1;
      J.width = Y, J.height = q;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), z === "background" ? y = R : z === "paint" ? w = R : p = R, !0;
  }
  function ft(z, Pt) {
    return F("background", u, z, Pt, null, !0);
  }
  function Q(z, Pt, Mt = null) {
    return F("paint", f, z, Pt, Mt, !0);
  }
  function lt(z, Pt, Mt = null) {
    return F("mask", g, z, Pt, Mt, !0);
  }
  function it(z) {
    z != null && z.texture && n && n.deleteTexture(z.texture);
  }
  function K(z) {
    if (!n || !(z != null && z.assetId) || !(z != null && z.source)) return null;
    const Pt = String(z.assetId), Mt = String(z.revision ?? ""), Rt = z.source, jt = Number(Rt.width || Rt.naturalWidth || Rt.videoWidth || 0), A = Number(Rt.height || Rt.naturalHeight || Rt.videoHeight || 0);
    if (jt <= 0 || A <= 0) return null;
    let R = T.get(Pt);
    if (R || (R = {
      texture: O(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, T.set(Pt, R)), R.revision !== Mt || R.width !== jt || R.height !== A) {
      n.bindTexture(n.TEXTURE_2D, R.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Rt);
      const U = n.getError();
      if (U !== n.NO_ERROR)
        return Mc(`sticker:${Pt}`, "texImage2D-error", Rt, {
          revision: Mt,
          width: jt,
          height: A,
          glError: U
        }), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), R.revision = Mt, R.width = jt, R.height = A;
    }
    return R.texture;
  }
  function rt(z = []) {
    if (!G()) return !1;
    const Pt = /* @__PURE__ */ new Set();
    return z.forEach((Mt) => {
      !(Mt != null && Mt.assetId) || !(Mt != null && Mt.source) || (Pt.add(String(Mt.assetId)), K(Mt));
    }), T.forEach((Mt, Rt) => {
      Pt.has(Rt) || (it(Mt), T.delete(Rt));
    }), !0;
  }
  function et() {
    return G() ? (n.viewport(0, 0, e.width, e.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function gt(z) {
    n.useProgram(z), n.bindBuffer(n.ARRAY_BUFFER, c), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function xt(z, Pt = {}) {
    if (!y) return null;
    n.disable(n.BLEND), gt(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, u), n.uniform1i(D.background, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(D.paint, 1), n.activeTexture(n.TEXTURE2), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i(D.mask, 2), n.uniform2f(D.viewport, Math.max(1, P.width), Math.max(1, P.height)), n.uniform1i(D.mode, (z == null ? void 0 : z.mode) === "unwrap" ? 0 : (z == null ? void 0 : z.mode) === "cutout" ? 2 : 1);
    const Mt = va(z, P.width, P.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(D.yaw, Number(Mt.yawDeg || 0) * Le), n.uniform1f(D.pitch, Number(Mt.pitchDeg || 0) * Le), n.uniform1f(D.roll, Number(Mt.rollDeg || 0) * Le), n.uniform1f(D.hFov, me(Number(Mt.hFovDeg || 90), 0.1, 179) * Le), n.uniform1f(D.vFov, me(Number(Mt.vFovDeg || 60), 0.1, 179) * Le), n.uniform1f(D.opacity, me(Number(Pt.backgroundOpacity ?? 1), 0, 1)), n.uniform1f(D.paintOpacity, me(Number(Pt.paintOpacity ?? 1), 0, 1)), n.uniform1f(D.maskOpacity, me(Number(Pt.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(D.hasPaint, w != null ? 1 : 0), n.uniform1i(D.hasMask, p != null ? 1 : 0), n.uniform1i(D.showMaskTint, Pt.showMaskTint === !1 ? 0 : 1), n.uniform3f(D.maskTint, 34 / 255, 197 / 255, 94 / 255);
    const Rt = Number((z == null ? void 0 : z.coverageDeg) || (Pt == null ? void 0 : Pt.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(D.coverage, Rt), n.drawArrays(n.TRIANGLES, 0, 6), e;
  }
  function At(z, Pt, Mt) {
    var J;
    if (!((J = z == null ? void 0 : z.stickers) != null && J.length) || !(Pt != null && Pt.length)) return;
    const Rt = (Mt == null ? void 0 : Mt.mode) === "unwrap" ? 0 : (Mt == null ? void 0 : Mt.mode) === "cutout" ? 2 : 1, jt = va(Mt, P.width, P.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, A = Ga(jt.yawDeg, jt.pitchDeg, jt.rollDeg), R = /* @__PURE__ */ new Map();
    Pt.forEach((Y) => {
      const q = K(Y);
      q && R.set(String(Y.assetId || ""), q);
    }), n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), gt(o), n.uniform1i(E.texture, 0), n.uniform1i(E.mode, Rt), n.uniform3f(E.viewRight, A.right.x, A.right.y, A.right.z), n.uniform3f(E.viewUp, A.up.x, A.up.y, A.up.z), n.uniform3f(E.viewFwd, A.fwd.x, A.fwd.y, A.fwd.z), n.uniform1f(E.viewHfov, me(Number(jt.hFovDeg || 90), 0.1, 179) * Le), n.uniform1f(E.viewVfov, me(Number(jt.vFovDeg || 60), 0.1, 179) * Le), [...z.stickers].sort((Y, q) => Number((Y == null ? void 0 : Y.zIndex) || 0) - Number((q == null ? void 0 : q.zIndex) || 0)).forEach((Y) => {
      const q = R.get(String((Y == null ? void 0 : Y.assetId) || ""));
      if (!q) return;
      const nt = oy(Y), ut = nt.crop;
      n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, q), n.uniform3f(E.stickerRight, nt.right.x, nt.right.y, nt.right.z), n.uniform3f(E.stickerUp, nt.up.x, nt.up.y, nt.up.z), n.uniform3f(E.stickerFwd, nt.fwd.x, nt.fwd.y, nt.fwd.z), n.uniform1f(E.stickerTanX, Math.max(1e-6, nt.tanX)), n.uniform1f(E.stickerTanY, Math.max(1e-6, nt.tanY)), n.uniform4f(
        E.crop,
        me(Number(ut.x0 ?? 0), 0, 1),
        me(Number(ut.y0 ?? 0), 0, 1),
        me(Number(ut.x1 ?? 1), 0, 1),
        me(Number(ut.y1 ?? 1), 0, 1)
      ), n.uniform1f(E.opacity, nt.opacity), n.drawArrays(n.TRIANGLES, 0, 6);
    }), n.disable(n.BLEND);
  }
  function tt(z) {
    return !et() || !y ? null : (xt({
      mode: "panorama",
      yawDeg: (z == null ? void 0 : z.yawDeg) || 0,
      pitchDeg: (z == null ? void 0 : z.pitchDeg) || 0,
      fovDeg: (z == null ? void 0 : z.fovDeg) || 100
    }, z), e);
  }
  function dt(z) {
    return !et() || !y ? null : (xt({ mode: "unwrap" }, z), e);
  }
  function Bt(z) {
    return !et() || !y ? null : (xt({
      mode: "cutout",
      yawDeg: (z == null ? void 0 : z.yawDeg) || 0,
      pitchDeg: (z == null ? void 0 : z.pitchDeg) || 0,
      rollDeg: (z == null ? void 0 : z.rollDeg) || 0,
      hFovDeg: (z == null ? void 0 : z.hFovDeg) || 90,
      vFovDeg: (z == null ? void 0 : z.vFovDeg) || 60
    }, z), e);
  }
  function ae(z = {}) {
    return !G() || (ot(z.width, z.height, z.dpr || 1), !et()) ? null : (z.backgroundSource && (ft(z.backgroundSource, z.backgroundRevision ?? ""), xt(z.view, z)), rt(z.textures || []), At(
      z.scene || { stickers: [] },
      z.textures || [],
      z.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), e);
  }
  function be(z, Pt, Mt) {
    const Rt = Math.max(1, Number((z == null ? void 0 : z.viewportWidth) || P.sourceWidth || P.width || 1)), jt = Math.max(1, Number((z == null ? void 0 : z.viewportHeight) || P.sourceHeight || P.height || 1)), A = Number(Pt), R = Number(Mt);
    if (!Number.isFinite(A) || !Number.isFinite(R)) return null;
    if ((z == null ? void 0 : z.mode) === "unwrap")
      return { u: (A / Rt % 1 + 1) % 1, v: me(R / jt, 0, 1) };
    const U = va(z, Rt, jt);
    if (!U) return null;
    const J = Ga(U.yawDeg, U.pitchDeg, U.rollDeg), Y = (A - Rt * 0.5) / (Rt * 0.5) * Math.tan(me(U.hFovDeg, 1, 179) * Le * 0.5), q = (jt * 0.5 - R) / (jt * 0.5) * Math.tan(me(U.vFovDeg, 0.1, 179) * Le * 0.5), nt = vo(is(is(Ii(J.right, Y), Ii(J.up, q)), J.fwd));
    return {
      u: (Math.atan2(nt.x, nt.z) / kh + 0.5 + 1) % 1,
      v: me(0.5 - Math.asin(me(nt.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function ve(z, Pt, Mt) {
    const Rt = Math.max(1, Number((z == null ? void 0 : z.viewportWidth) || P.sourceWidth || P.width || 1)), jt = Math.max(1, Number((z == null ? void 0 : z.viewportHeight) || P.sourceHeight || P.height || 1));
    if ((z == null ? void 0 : z.mode) === "unwrap")
      return {
        x: (Number(Pt || 0) % 1 + 1) % 1 * Rt,
        y: me(Number(Mt || 0), 0, 1) * jt,
        visible: !0
      };
    const A = va(z, Rt, jt);
    if (!A)
      return { x: Rt * 0.5, y: jt * 0.5, visible: !1 };
    const R = Ga(A.yawDeg, A.pitchDeg, A.rollDeg), U = ny(Pt, Mt), J = Ba(U, R.right), Y = Ba(U, R.up), q = Ba(U, R.fwd);
    if (q <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const nt = Rt * 0.5 + J / q * (Rt * 0.5 / Math.tan(me(A.hFovDeg, 1, 179) * Le * 0.5)), ut = jt * 0.5 - Y / q * (jt * 0.5 / Math.tan(me(A.vFovDeg, 0.1, 179) * Le * 0.5));
    return { x: nt, y: ut, visible: nt >= 0 && nt <= Rt && ut >= 0 && ut <= jt };
  }
  return {
    init: G,
    dispose: k,
    setViewport: ot,
    setBackgroundErp: ft,
    setPaintErp: Q,
    setMaskErp: lt,
    renderPanorama: tt,
    renderUnwrap: dt,
    renderCutout: Bt,
    renderScene: ae,
    screenToErpUv: be,
    erpUvToScreen: ve,
    getCanvas() {
      return e;
    },
    isSupported() {
      return G();
    },
    getViewport() {
      return { ...P };
    }
  };
}
const kf = "__shared_renderer";
function ay(t) {
  return t ? (t.__panoGlViewportCache || (t.__panoGlViewportCache = /* @__PURE__ */ new Map()), t.__panoGlViewportCache) : null;
}
function sy(t, e) {
  var c;
  const n = ay(t);
  if (!n) return null;
  let r = n.get(kf);
  if (!r) {
    const u = Ch();
    if (!((c = u == null ? void 0 : u.isSupported) != null && c.call(u))) return null;
    r = { renderer: u }, n.set(kf, r);
  }
  let o = n.get(e);
  return o || (o = { renderer: r.renderer, lastRenderKey: null, cachedCanvas: null }, n.set(e, o)), o;
}
function cy(t) {
  return t ? [
    String(t.currentSrc || t.src || ""),
    Number(t.naturalWidth || t.videoWidth || t.width || 0),
    Number(t.naturalHeight || t.videoHeight || t.height || 0)
  ].join("|") : "";
}
function ly(t) {
  const e = String((t == null ? void 0 : t.mode) || "panorama");
  return e === "unwrap" ? "unwrap" : e === "cutout" ? `c|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.rollDeg || 0).toFixed(4)}|${Number(t.hFovDeg || 90).toFixed(4)}|${Number(t.vFovDeg || 60).toFixed(4)}` : `p|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.fovDeg || 100).toFixed(4)}|${Number(t.coverageDeg || 360)}`;
}
function uy(t = {}) {
  return t.rect ? t.rect : {
    x: 0,
    y: 0,
    w: Math.max(1, Number(t.width || 1)),
    h: Math.max(1, Number(t.height || 1))
  };
}
function Gi(t = {}) {
  const e = t.owner || null, n = t.ctx || null, r = uy(t);
  if (!e || !n || !(r != null && r.w) || !(r != null && r.h)) return !1;
  const o = String(t.cacheKey || "scene"), c = sy(e, o), u = t.backgroundSource || t.img || null, f = t.scene || { stickers: [], selectedId: null, hoveredId: null }, g = Array.isArray(t.textures) ? t.textures : [], y = t.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 };
  if (!(c != null && c.renderer)) return !1;
  const w = c.renderer, p = Math.max(1, Number(t.dpr || window.devicePixelRatio || 1)), N = t.backgroundRevision != null, P = typeof HTMLVideoElement < "u" && u instanceof HTMLVideoElement || typeof HTMLCanvasElement < "u" && u instanceof HTMLCanvasElement, D = N ? String(t.backgroundRevision) : P ? "" : cy(u), E = Number(t.backgroundOpacity ?? 1), H = f.stickers.length === 0 && g.length === 0 && (!!N || !P), T = `${Math.round(r.w)}x${Math.round(r.h)}|${p}|${ly(y)}|${D}|${E.toFixed(3)}`;
  if (H && c.lastRenderKey === T && c.cachedCanvas)
    return n.drawImage(c.cachedCanvas, r.x, r.y, r.w, r.h), !0;
  const $ = w.renderScene({
    width: r.w,
    height: r.h,
    dpr: p,
    backgroundSource: u,
    backgroundRevision: D,
    textures: g,
    scene: f,
    view: y,
    backgroundOpacity: E
  });
  if (!$) return !1;
  if (H) {
    const O = $.width, G = $.height;
    (!c.cachedCanvas || c.cachedCanvas.width !== O || c.cachedCanvas.height !== G) && (c.cachedCanvas = document.createElement("canvas"), c.cachedCanvas.width = O, c.cachedCanvas.height = G);
    const k = c.cachedCanvas.getContext("2d");
    k ? (k.clearRect(0, 0, O, G), k.drawImage($, 0, 0), c.lastRenderKey = T) : c.lastRenderKey = null;
  } else
    c.lastRenderKey = null;
  return n.drawImage($, r.x, r.y, r.w, r.h), !0;
}
function fy(t = {}) {
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
    fovDeg: Number(t.fovDeg || 100),
    coverageDeg: Number(t.coverageDeg || 360) === 180 ? 180 : 360
  }, Gi({
    ...t,
    cacheKey: t.cacheKey || t.mode || "erp_view",
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    view: e
  });
}
function _a(t = {}) {
  const e = t.view || {
    mode: "cutout",
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.rollDeg || 0),
    hFovDeg: Number(t.hFovDeg || 90),
    vFovDeg: Number(t.vFovDeg || 60)
  };
  return Gi({
    ...t,
    cacheKey: t.cacheKey || "cutout_view",
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    view: e
  });
}
function ki(t, e) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(t)), n.height = Math.max(1, Math.round(e));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function Ah() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function dy(t, e) {
  Ah() && console.warn(`[PANO_PAINT][${t}]`, e);
}
function Cf(t, e = 8) {
  var w;
  const n = (w = t == null ? void 0 : t.getContext) == null ? void 0 : w.call(t, "2d"), r = Number((t == null ? void 0 : t.width) || 0), o = Number((t == null ? void 0 : t.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const c = n.getImageData(0, 0, r, o).data;
  let u = r, f = o, g = -1, y = -1;
  for (let p = 0; p < o; p += 1)
    for (let N = 0; N < r; N += 1)
      c[(p * r + N) * 4 + 3] <= e || (N < u && (u = N), p < f && (f = p), N > g && (g = N), p > y && (y = p));
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
function Ml(t, e) {
  const n = Math.max(1, Math.ceil(t)), r = Math.max(1, Math.ceil(e));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function Kn(t, e, n) {
  if (!t) return ki(e, n);
  const r = Math.max(1, Math.round(e)), o = Math.max(1, Math.round(n));
  return (t.canvas.width !== r || t.canvas.height !== o) && (t.canvas.width = r, t.canvas.height = o, t.ctx.imageSmoothingEnabled = !0), t;
}
function ge(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let Pc = null, kc = null, Af = null, If = null, re = null, ho = null, en = null, Pr = null;
function hy() {
  if (kc) return kc;
  const t = 6, e = 17, n = document.createElement("canvas");
  n.width = e, n.height = e;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e, e), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = t, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(e, e), r.moveTo(-e / 2, e / 2), r.lineTo(e / 2, e + e / 2), r.moveTo(e / 2, -e / 2), r.lineTo(e + e / 2, e / 2), r.stroke(), kc = n, n;
}
function wi(t, e) {
  if (!t || !e) return;
  const n = e.width, r = e.height;
  Pc = Kn(Pc, n, r);
  const o = Pc;
  ge(o), o.ctx.drawImage(e, 0, 0), o.ctx.globalCompositeOperation = "source-in", If !== o.ctx && (Af = o.ctx.createPattern(hy(), "repeat"), If = o.ctx), o.ctx.fillStyle = Af, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(o.canvas, 0, 0), t.restore();
}
function py(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function gy(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function my(t, e) {
  const n = Number(t == null ? void 0 : t.radiusValue), r = String((t == null ? void 0 : t.radiusModel) || "").trim(), o = (e == null ? void 0 : e.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function yy(t, e) {
  const n = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * e * 2);
  const r = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * e * 2);
}
const Se = /* @__PURE__ */ new Map(), Pl = 128;
function by(t, e, n, r, o, c) {
  const u = Math.max(1, Math.round(t)), f = Math.max(0, Math.min(1, e)), g = `${u}:${f.toFixed(2)}:${n}:${r}:${o}:${c.toFixed(3)}`;
  if (Se.has(g)) {
    const T = Se.get(g);
    return Se.delete(g), Se.set(g, T), T;
  }
  Se.size >= Pl && Se.delete(Se.keys().next().value);
  const y = u * 2 + 2, w = u + 1, p = Ml(y, y), N = p.getContext("2d"), P = f * u, D = u + 1, E = `rgba(${n},${r},${o},${c})`, C = `rgba(${n},${r},${o},0)`, H = N.createRadialGradient(w, w, P, w, w, D);
  return H.addColorStop(0, E), H.addColorStop(1, C), N.fillStyle = H, N.fillRect(0, 0, y, y), Se.set(g, p), p;
}
function vy(t, e, n, r, o, c, u) {
  const { r: f, g, b: y, a: w } = r, p = Math.max(2, Math.ceil(t) * 2), N = Math.max(2, Math.ceil(e) * 2), P = Math.max(0, o), D = Math.max(0, Math.min(0.99, c)), E = Math.max(0, Math.min(1, u ?? 0)), C = `chisel:${p}:${N}:${n.toFixed(2)}:${f}:${g}:${y}:${w.toFixed(3)}:${P.toFixed(2)}:${D.toFixed(2)}:${E.toFixed(2)}`;
  if (Se.has(C)) {
    const X = Se.get(C);
    return Se.delete(C), Se.set(C, X), X;
  }
  Se.size >= Pl && Se.delete(Se.keys().next().value);
  const H = Ml(p, N), T = H.getContext("2d"), $ = T.createImageData(p, N), O = $.data, G = Math.max(0, t - e), k = Math.max(0, Math.min(1, n)), ot = 1 + P;
  for (let X = 0; X < N; X++)
    for (let vt = 0; vt < p; vt++) {
      const F = vt + 0.5 - t, ft = X + 0.5 - e, Q = Math.max(Math.abs(F) - G, 0), it = Math.hypot(Q, ft) / e;
      if (it >= 1) continue;
      const K = it <= k ? 1 : Math.max(0, (1 - it) / Math.max(1e-4, 1 - k)), rt = 1 - it, et = 1 + P * (1 - rt) * (1 - rt), gt = 1 - D * rt * rt, xt = et * gt / ot;
      let At = 1;
      if (E > 0) {
        const Bt = Math.floor((ft + e) / 1.5), ae = Math.floor((F + t) / 8), be = Zr(Hi(Bt * 41 + 500, ae * 19 + 300));
        At = 1 - E * 0.42 * be;
      }
      const tt = Math.round(255 * Math.min(1, w * K * xt * At));
      if (tt <= 0) continue;
      const dt = (X * p + vt) * 4;
      O[dt] = f, O[dt + 1] = g, O[dt + 2] = y, O[dt + 3] = tt;
    }
  return T.putImageData($, 0, 0), Se.set(C, H), H;
}
function Hi(t, e) {
  const n = Math.trunc(Math.round(t * 4)), r = Math.trunc(Math.round(e * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function Zr(t) {
  let e = t + 1831565813 >>> 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function _y(t, e, n, r, o, c, u) {
  const f = t + 0.5 - n, g = e + 0.5 - r, y = Math.max(0, n - r), w = Math.max(Math.abs(f) - y, 0), p = Math.hypot(w, g) / r;
  if (p >= 1) return 0;
  const N = Zr(Hi(t * 17 + 3, e * 13 + 7)), P = p + c * 0.22 * (N - 0.5);
  if (P >= 1) return 0;
  const D = P <= o ? 1 : Math.max(0, (1 - P) / Math.max(1e-4, 1 - o)), E = wy(t, e, f, g, n, r), C = c * 0.55;
  if (E < C) return 0;
  const T = 0.45 + 0.55 * ((E - C) / Math.max(1e-4, 1 - C));
  return Math.round(255 * Math.min(1, u * D * T));
}
function wy(t, e, n, r, o, c) {
  const u = Math.floor((n + o) / 3), f = Math.floor((r + c) / 2), g = Zr(Hi(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + o) / 1.5), w = Math.floor((r + c) / 1.5), p = Zr(Hi(y * 23 + 800, w * 29 + 500)), N = Zr(Hi(t * 3 + 100, e * 5 + 200));
  return g * 0.55 + p * 0.3 + N * 0.15;
}
function xy(t, e, n, r, o) {
  const { r: c, g: u, b: f, a: g } = r, y = Math.max(2, Math.ceil(t) * 2), w = Math.max(2, Math.ceil(e) * 2), p = Math.max(0, Math.min(1, o)), N = `crayon:${y}:${w}:${n.toFixed(2)}:${c}:${u}:${f}:${g.toFixed(3)}:${p.toFixed(2)}`;
  if (Se.has(N)) {
    const T = Se.get(N);
    return Se.delete(N), Se.set(N, T), T;
  }
  Se.size >= Pl && Se.delete(Se.keys().next().value);
  const P = Ml(y, w), D = P.getContext("2d"), E = D.createImageData(y, w), C = E.data, H = Math.max(0, Math.min(1, n));
  for (let T = 0; T < w; T++)
    for (let $ = 0; $ < y; $++) {
      const O = _y($, T, t, e, H, p, g);
      if (O <= 0) continue;
      const G = (T * y + $) * 4;
      C[G] = c, C[G + 1] = u, C[G + 2] = f, C[G + 3] = O;
    }
  return D.putImageData(E, 0, 0), Se.set(N, P), P;
}
function Ih(t, e, n) {
  var E, C;
  const r = String((e == null ? void 0 : e.stampKind) || "round"), o = my(e, n), c = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), u = Sy(e), f = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), g = Number(((E = e == null ? void 0 : e.angle) == null ? void 0 : E.value) ?? 0), y = yy(e, o), w = String(((C = e == null ? void 0 : e.targetSpace) == null ? void 0 : C.viewMode) || ""), p = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && w !== "unwrap", N = e == null ? void 0 : e.scatter, P = N ? { radius: Number(N.radius ?? 1.5), count: Math.max(1, Math.round(N.count ?? 6)) } : null;
  let D;
  if (r === "chisel") {
    const H = o * f, T = o, $ = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), O = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), G = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    D = vy(H, T, c, u, $, O, G);
  } else if (r === "crayon") {
    const H = o * f, T = o, $ = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    D = xy(H, T, c, u, $);
  } else
    D = by(o, c, u.r, u.g, u.b, u.a);
  return { ctx: t, stampTex: D, radiusPx: o, spacingPx: y, desc: n, aspect: f, angle: g, stampKind: r, scatter: P, latitudeCorrection: p };
}
function Sy(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const r = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.flow) ?? 1))), c = Math.max(0, Math.min(1, Number(r.a ?? 1))) * o;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(r.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(r.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(r.b || 0))) * 255),
    a: c
  };
}
function Ny(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const r = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function Ef(t, e, n, r, o) {
  const c = t.angle, u = t.desc.width;
  function f(y, w) {
    c === 0 ? t.ctx.drawImage(t.stampTex, y - o, w - r, o * 2, r * 2) : (t.ctx.save(), t.ctx.translate(y, w), t.ctx.rotate(c), t.ctx.drawImage(t.stampTex, -o, -r, o * 2, r * 2), t.ctx.restore());
  }
  f(e, n);
  const g = c === 0 ? o : o * Math.abs(Math.cos(c)) + r * Math.abs(Math.sin(c));
  e - g < 0 && f(e + u, n), e + g > u && f(e - u, n);
}
function kl(t, e, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (t.scatter) {
    const { radius: y, count: w } = t.scatter, p = y * t.radiusPx * o, N = Hi(e, n);
    for (let P = 0; P < w; P++) {
      const D = Zr(N + P * 2) * Math.PI * 2, E = Math.sqrt(Zr(N + P * 2 + 1)) * p, C = e + Math.cos(D) * E, H = n + Math.sin(D) * E, T = Math.max(0.5, t.radiusPx * o * 0.48), $ = (0.5 - H / Math.max(1, t.desc.height)) * Math.PI, O = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos($)) : 1, G = T * t.aspect * O;
      Ef(t, C, H, T, G);
    }
    return;
  }
  const c = Math.max(0.5, t.radiusPx * o), u = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, f = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, g = c * t.aspect * f;
  Ef(t, e, n, c, g);
}
function Tf(t, e, n) {
  const r = gy(e);
  if (!t || r.length === 0) return;
  const o = n.width, c = n.height, u = Ih(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const f = [];
  for (let N = 0; N < r.length; N++) {
    let P = Number(r[N].u || 0) * o;
    const D = Number(r[N].v || 0) * c;
    N > 0 && Math.abs(P - f[N - 1].x) > o * 0.5 && (P += P < f[N - 1].x ? o : -o), f.push({ x: P, y: D });
  }
  if (kl(u, f[0].x, f[0].y, 1), f.length === 1) {
    t.restore();
    return;
  }
  let g = f[0], y = f[0], w = f[0], p = 0;
  for (let N = 1; N < f.length; N++) {
    const P = f[N], D = { x: (y.x + P.x) * 0.5, y: (y.y + P.y) * 0.5 };
    N === 1 ? p = Uo(u, w.x, w.y, D.x, D.y, p) : p = os(u, g, w, D, P, p), g = y, y = P, w = D;
  }
  f.length === 2 ? Uo(u, w.x, w.y, y.x, y.y, p) : os(u, g, w, y, y, p), t.restore();
}
function Ka(t, e, n) {
  var p;
  const r = Array.isArray((p = e == null ? void 0 : e.geometry) == null ? void 0 : p.points) ? e.geometry.points : [];
  if (!t || r.length < 3) return;
  const o = n.width, c = n.height, u = Ny(e), f = [];
  let g = 1 / 0, y = -1 / 0;
  for (let N = 0; N < r.length; N++) {
    const P = py(r[N]);
    let D = Number(P.x || 0) * o;
    N > 0 && Math.abs(D - f[N - 1].x) > o * 0.5 && (D += D < f[N - 1].x ? o : -o), f.push({ x: D, y: Number(P.y || 0) * c }), D < g && (g = D), D > y && (y = D);
  }
  function w(N) {
    t.beginPath(), t.moveTo(f[0].x + N, f[0].y);
    for (let P = 1; P < f.length; P++) t.lineTo(f[P].x + N, f[P].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = u, w(0), g < 0 && w(o), y > o && w(-o), t.restore();
}
function wa(t, e, n) {
  var u;
  if (String(((u = e == null ? void 0 : e.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Ka(t, e, n);
    return;
  }
  const c = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  c >= 0.999 ? Tf(t, e, n) : (ho = Kn(ho, n.width, n.height), ge(ho), Tf(ho.ctx, e, n), t.save(), t.globalAlpha = c, t.drawImage(ho.canvas, 0, 0), t.restore());
}
function kr(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function Uo(t, e, n, r, o, c) {
  const u = r - e, f = o - n, g = Math.hypot(u, f);
  if (g < 1e-9) return c;
  let y = t.spacingPx - c;
  for (; y <= g; ) {
    const w = y / g;
    kl(t, e + u * w, n + f * w, 1), y += t.spacingPx;
  }
  return g - y + t.spacingPx;
}
function os(t, e, n, r, o, c) {
  const f = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, g = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, w = 0, p = f, N = p + g, P = N + y, D = N - p, E = 16;
  let C = c, H = n.x, T = n.y;
  for (let $ = 1; $ <= E; $++) {
    const O = p + D * $ / E, G = ((p - O) * e.x + (O - w) * n.x) / (p - w), k = ((p - O) * e.y + (O - w) * n.y) / (p - w), ot = ((N - O) * n.x + (O - p) * r.x) / (N - p), X = ((N - O) * n.y + (O - p) * r.y) / (N - p), vt = ((P - O) * r.x + (O - N) * o.x) / (P - N), F = ((P - O) * r.y + (O - N) * o.y) / (P - N), ft = ((N - O) * G + (O - w) * ot) / (N - w), Q = ((N - O) * k + (O - w) * X) / (N - w), lt = ((P - O) * ot + (O - p) * vt) / (P - p), it = ((P - O) * X + (O - p) * F) / (P - p), K = ((N - O) * ft + (O - p) * lt) / (N - p), rt = ((N - O) * Q + (O - p) * it) / (N - p);
    C = Uo(t, H, T, K, rt, C), H = K, T = rt;
  }
  return C;
}
function My(t, e, n, r) {
  const o = t.currentStroke.ctx;
  if (!o) return;
  const c = t.descriptor, u = c.width, f = n * c.height, g = t.activeStroke;
  let y = e * u;
  if (g && Math.abs(y - g.prev.x) > u * 0.5 && (y += y < g.prev.x ? u : -u), !g) {
    const P = Ih(o, r, c), D = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), E = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), C = String((r == null ? void 0 : r.toolKind) || "") === "eraser", H = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", kl(P, y, f, 1), t.activeStroke = {
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
      strokeOpacity: D,
      velocityWidthFactor: E,
      distSinceStamp: 0,
      isEraser: C,
      layerKind: H,
      pointCount: 1
    }, t.displayDirty = !0;
    return;
  }
  const w = (g.prev.x + y) * 0.5, p = (g.prev.y + f) * 0.5;
  o.globalCompositeOperation = "source-over";
  const N = {
    ctx: o,
    stampTex: g.stampTex,
    radiusPx: g.radiusPx,
    spacingPx: g.spacingPx,
    desc: c,
    aspect: g.aspect,
    angle: g.angle,
    stampKind: g.stampKind,
    scatter: g.scatter,
    latitudeCorrection: g.latitudeCorrection
  };
  g.pointCount === 1 ? g.distSinceStamp = Uo(N, g.lastMidX, g.lastMidY, w, p, g.distSinceStamp) : g.distSinceStamp = os(
    N,
    g.pprev,
    { x: g.lastMidX, y: g.lastMidY },
    { x: w, y: p },
    { x: y, y: f },
    g.distSinceStamp
  ), g.pprev = g.prev, g.prev = { x: y, y: f }, g.lastMidX = w, g.lastMidY = p, g.pointCount++, t.displayDirty = !0;
}
function Wc(t = {}) {
  const e = Math.max(1, Math.round(Number((t == null ? void 0 : t.width) || 2048))), n = Math.max(1, Math.round(Number((t == null ? void 0 : t.height) || 1024))), r = { kind: "ERP_GLOBAL", width: e, height: n }, o = /* @__PURE__ */ new Map(), c = ki(e, n), u = {
    descriptor: r,
    committedMask: ki(e, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: ki(e, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, g = ki(e, n);
  let y = null, w = "", p = null;
  function N(F) {
    return {
      actionGroupId: F,
      descriptor: r,
      committedPaint: ki(e, n),
      currentStroke: c,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function P(F) {
    let ft = o.get(F);
    return ft || (ft = N(F), o.set(F, ft)), ft;
  }
  function D(F) {
    return w === "mask" ? u : y ? P(y) : f;
  }
  function E(F) {
    var gt;
    const ft = !p || p.length !== F.length || F.some((xt, At) => xt !== p[At]);
    let Q = u.displayDirty || f.displayDirty || ft;
    for (const xt of F) {
      const At = o.get(xt);
      if (At != null && At.displayDirty) {
        Q = !0;
        break;
      }
    }
    if (!Q) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const xt of F) {
      const At = o.get(xt);
      At && (At.displayDirty = !1);
    }
    p = [...F];
    const lt = g.ctx;
    ge(g);
    const it = w === "paint" && ((gt = y ? o.get(y) : f) == null ? void 0 : gt.activeStroke) || null, K = !!(it != null && it.isEraser);
    for (const xt of F) {
      const At = o.get(xt);
      if (!At) continue;
      const dt = y === At.actionGroupId && w === "paint" ? At.activeStroke : null;
      if (K)
        re = Kn(re, e, n), ge(re), re.ctx.drawImage(At.committedPaint.canvas, 0, 0), kr(re.ctx, c.canvas), lt.drawImage(re.canvas, 0, 0);
      else if (lt.drawImage(At.committedPaint.canvas, 0, 0), dt) {
        const Bt = At.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, dt.strokeOpacity ?? 1));
        lt.save(), lt.globalAlpha = Bt, lt.drawImage(c.canvas, 0, 0), lt.restore();
      }
    }
    const rt = w === "mask", et = u.activeStroke;
    rt && (et != null && et.isEraser) ? (re = Kn(re, e, n), ge(re), re.ctx.drawImage(u.committedMask.canvas, 0, 0), kr(re.ctx, c.canvas), wi(lt, re.canvas)) : (wi(lt, u.committedMask.canvas), rt && et && wi(lt, c.canvas));
  }
  function C(F) {
    var Q, lt, it, K, rt;
    for (const et of o.values())
      ge(et.committedPaint), ge(et.currentStroke), et.activeStroke = null, et.displayDirty = !0;
    ge(u.committedMask), ge(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, p = null;
    const ft = [
      ...Array.isArray((lt = (Q = F == null ? void 0 : F.painting) == null ? void 0 : Q.paint) == null ? void 0 : lt.strokes) ? F.painting.paint.strokes : [],
      ...Array.isArray((K = (it = F == null ? void 0 : F.painting) == null ? void 0 : it.mask) == null ? void 0 : K.strokes) ? F.painting.mask.strokes : []
    ];
    for (const et of ft) {
      if (((rt = et == null ? void 0 : et.targetSpace) == null ? void 0 : rt.kind) !== "ERP_GLOBAL") continue;
      const gt = String((et == null ? void 0 : et.layerKind) || "paint"), At = String((et == null ? void 0 : et.toolKind) || "pen") === "eraser";
      if (gt === "mask") {
        const tt = u.descriptor;
        At ? (re = Kn(re, tt.width, tt.height), ge(re), wa(re.ctx, et, tt), kr(u.committedMask.ctx, re.canvas)) : wa(u.committedMask.ctx, et, tt);
        continue;
      }
      if (At) {
        re = Kn(re, r.width, r.height), ge(re), wa(re.ctx, et, r);
        for (const tt of o.values())
          kr(tt.committedPaint.ctx, re.canvas), tt.displayDirty = !0;
      } else {
        const tt = String((et == null ? void 0 : et.actionGroupId) || "__default__"), dt = P(tt), Bt = dt.descriptor;
        wa(dt.committedPaint.ctx, et, Bt), dt.displayDirty = !0;
      }
    }
    E([...o.keys()]);
  }
  function H(F, ft) {
    w = String((F == null ? void 0 : F.layerKind) || "");
    const Q = String((F == null ? void 0 : F.toolKind) || "") === "eraser";
    if (w === "mask")
      y = null, ge(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const lt = Q ? f : P(String((F == null ? void 0 : F.actionGroupId) || "__default__"));
      y = Q ? "" : String((F == null ? void 0 : F.actionGroupId) || "__default__"), ge(lt.currentStroke), lt.activeStroke = null, lt.displayDirty = !0;
    }
  }
  function T(F, ft) {
    var gt;
    const Q = String((F == null ? void 0 : F.layerKind) || "paint"), lt = String((F == null ? void 0 : F.toolKind) || "") === "eraser", it = Q === "mask" ? u : lt ? f : P(String((F == null ? void 0 : F.actionGroupId) || y || "__default__")), K = it.activeStroke, rt = it.descriptor;
    if (K && K.pointCount > 1) {
      const xt = it.currentStroke.ctx;
      xt.globalCompositeOperation = "source-over";
      const At = {
        ctx: xt,
        stampTex: K.stampTex,
        radiusPx: K.radiusPx,
        spacingPx: K.spacingPx,
        desc: rt,
        aspect: K.aspect,
        angle: K.angle,
        stampKind: K.stampKind,
        scatter: K.scatter,
        latitudeCorrection: K.latitudeCorrection
      };
      K.pointCount === 2 ? Uo(At, K.lastMidX, K.lastMidY, K.prev.x, K.prev.y, K.distSinceStamp) : os(At, K.pprev, { x: K.lastMidX, y: K.lastMidY }, K.prev, K.prev, K.distSinceStamp);
    }
    it.lassoPreviewActive && (ge(it.currentStroke), Ka(it.currentStroke.ctx, F, rt), it.lassoPreviewActive = !1);
    const et = Q === "mask" ? u.committedMask : it.committedPaint;
    if (lt && Q === "paint")
      for (const xt of o.values())
        kr(xt.committedPaint.ctx, it.currentStroke.canvas), xt.displayDirty = !0;
    else if (lt)
      kr(et.ctx, it.currentStroke.canvas);
    else {
      const xt = Math.max(0, Math.min(1, (K == null ? void 0 : K.strokeOpacity) ?? 1));
      et.ctx.save(), et.ctx.globalAlpha = xt, et.ctx.drawImage(it.currentStroke.canvas, 0, 0), et.ctx.restore();
    }
    Ah() && dy("commit-bounds", {
      layerKind: Q,
      toolKind: String((F == null ? void 0 : F.toolKind) || ""),
      targetKind: String((rt == null ? void 0 : rt.kind) || ""),
      targetWidth: Number((rt == null ? void 0 : rt.width) || 0),
      targetHeight: Number((rt == null ? void 0 : rt.height) || 0),
      targetViewMode: String(((gt = F == null ? void 0 : F.targetSpace) == null ? void 0 : gt.viewMode) || ""),
      strokeAspect: Number((F == null ? void 0 : F.aspect) ?? 1),
      activeBounds: Cf(it.currentStroke.canvas),
      surfaceBounds: Cf(et.canvas)
    }), ge(it.currentStroke), it.activeStroke = null, it.displayDirty = !0, y = null, w = "", E([...o.keys()]);
  }
  function $(F) {
    if (w === "mask")
      ge(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (w === "paint" && !y)
      ge(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const ft = o.get(y);
      ft && (ge(ft.currentStroke), ft.activeStroke = null, ft.lassoPreviewActive = !1, ft.displayDirty = !0);
    }
    y = null, w = "", E([...o.keys()]);
  }
  function O(F, ft) {
    var lt;
    if (w = String((F == null ? void 0 : F.layerKind) || ""), String(((lt = F == null ? void 0 : F.geometry) == null ? void 0 : lt.geometryKind) || "") === "lasso_fill") {
      if (w === "mask")
        ge(u.currentStroke), Ka(u.currentStroke.ctx, F, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const it = String((F == null ? void 0 : F.toolKind) || "") === "eraser", K = it ? f : P(String((F == null ? void 0 : F.actionGroupId) || y || "__default__"));
        y = it ? "" : String((F == null ? void 0 : F.actionGroupId) || y || "__default__"), ge(K.currentStroke), Ka(K.currentStroke.ctx, F, K.descriptor), K.lassoPreviewActive = !0, K.displayDirty = !0;
      }
      E([...o.keys()]);
    }
  }
  function G(F) {
    return E(F ?? [...o.keys()]), {
      displayPaint: g,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function k(F) {
    return o.get(String(F)) ?? null;
  }
  function ot() {
    return [...o.keys()];
  }
  function X(F) {
    var rt;
    const ft = o.get(String(F));
    if (!ft) return null;
    const Q = w === "paint" && y === ft.actionGroupId, lt = w === "paint" && ((rt = y ? o.get(y) : f) == null ? void 0 : rt.activeStroke) || null;
    if (lt != null && lt.isEraser)
      return en = Kn(en, e, n), ge(en), en.ctx.drawImage(ft.committedPaint.canvas, 0, 0), kr(en.ctx, c.canvas), en.canvas;
    const it = Q ? ft.activeStroke : null;
    if (!it) return ft.committedPaint.canvas;
    en = Kn(en, e, n), ge(en), en.ctx.drawImage(ft.committedPaint.canvas, 0, 0);
    const K = ft.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, it.strokeOpacity ?? 1));
    return en.ctx.save(), en.ctx.globalAlpha = K, en.ctx.drawImage(c.canvas, 0, 0), en.ctx.restore(), en.canvas;
  }
  function vt() {
    return Pr = Kn(Pr, e, n), ge(Pr), wi(Pr.ctx, u.committedMask.canvas), w === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (re = Kn(re, e, n), ge(re), re.ctx.drawImage(u.committedMask.canvas, 0, 0), kr(re.ctx, c.canvas), ge(Pr), wi(Pr.ctx, re.canvas)) : wi(Pr.ctx, c.canvas)), Pr.canvas;
  }
  return {
    rebuildCommitted: C,
    beginStroke: H,
    appendStrokePoint: My,
    updateActiveStroke: O,
    commitActiveStroke: T,
    cancelActiveStroke: $,
    getErpTarget: G,
    ensureTarget: D,
    getGroupTarget: k,
    getGroupDisplayCanvas: X,
    getMaskDisplayCanvas: vt,
    getAllGroupIds: ot
  };
}
function j(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Wa(t, e, n) {
  const r = Number(t);
  return Number.isFinite(r) ? Math.max(Number(e), Math.min(Number(n), r)) : Number(e);
}
function Ve(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function Py(t, e) {
  let n = Ve(e) - Ve(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Df = Math.PI / 180, Lf = 0.12, ky = 3, Cy = 35, Ay = 140, _o = 100, Iy = 20, Rf = 0.8;
function Ey(t, e, n) {
  const r = Math.max(1, Number(e || 1)), o = Math.max(1, Number(n || 1)), c = j(Number(t || _o), 1, 179) * Df;
  return 2 * Math.atan(Math.tan(c * 0.5) * (o / r)) / Df;
}
function Ty(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function Es(t = {}) {
  const e = typeof t.getView == "function" ? t.getView : (() => ({ yaw: 0, pitch: 0, fov: _o })), n = typeof t.setView == "function" ? t.setView : (() => {
  }), r = typeof t.getInvert == "function" ? t.getInvert : (() => ({ x: 1, y: 1 })), o = typeof t.getUnwrapRect == "function" ? t.getUnwrapRect : (() => ({ w: 1, h: 1 })), c = typeof t.getViewportSize == "function" ? t.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof t.onInteraction == "function" ? t.onInteraction : (() => {
  }), f = typeof t.onDebug == "function" ? t.onDebug : null, g = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(H, T = null) {
    f && f(H, T);
  }
  function w(H, T, $ = null, O = performance.now()) {
    return g.drag.active = !0, g.drag.lastX = Number(H || 0), g.drag.lastY = Number(T || 0), g.drag.lastTs = Number(O || performance.now()), g.drag.pointerId = $, g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.lastTs = g.drag.lastTs, g.velHistory = [], y("drag", { phase: "start", x: g.drag.lastX, y: g.drag.lastY, pointerId: $ }), !0;
  }
  function p(H, T, $ = "pano", O = performance.now()) {
    if (!g.drag.active) return !1;
    const G = Number(O || performance.now()), k = Number(H), ot = Number(T), X = k - g.drag.lastX, vt = ot - g.drag.lastY;
    g.drag.lastX = k, g.drag.lastY = ot, g.drag.lastTs = G;
    const F = r() || { x: 1, y: 1 }, ft = Number(F.x || 1), Q = Number(F.y || 1), lt = { ...e() };
    let it = 0, K = 0;
    if ($ === "unwrap") {
      const et = o() || { w: 1, h: 1 }, gt = Math.max(1, Number(et.w || 1)), xt = Math.max(1, Number(et.h || 1)), At = X / gt, tt = vt / xt;
      it = -At * 360 * ft, K = tt * 180 * Q;
    } else {
      const et = c() || { w: 0, h: 0 }, gt = Math.max(1, Number(et.w || 0)), xt = Math.max(1, Number(et.h || 0));
      if (gt > 1 && xt > 1) {
        const At = j(Number(lt.fov || _o), 1, 179), tt = j(Ey(At, gt, xt), 0.1, 179);
        it = -(X / gt) * At * ft, K = vt / xt * tt * Q;
      } else
        it = -X * Lf * ft, K = vt * Lf * Q;
    }
    lt.yaw = Ve(Number(lt.yaw || 0) + it), lt.pitch = j(Number(lt.pitch || 0) + K, -89.9, 89.9), n(lt), g.velHistory.push({ ts: G, yaw: lt.yaw, pitch: lt.pitch });
    let rt = 0;
    for (; rt < g.velHistory.length - 1 && g.velHistory[rt].ts < G - 100; ) rt++;
    return rt > 0 && g.velHistory.splice(0, rt), g.inertia.active = !1, g.inertia.lastTs = G, u(), y("drag", { phase: "move", dx: X, dy: vt, dYaw: it, dPitch: K }), !0;
  }
  function N(H = performance.now()) {
    if (!g.drag.active) return !1;
    g.drag.active = !1;
    const T = Number(H || performance.now());
    g.drag.lastTs = T;
    const $ = g.velHistory.filter((G) => T - G.ts <= 80);
    if ($.length >= 2) {
      const G = $[0], k = $.at(-1), ot = Math.max(1e-3, (k.ts - G.ts) / 1e3);
      let X = k.yaw - G.yaw;
      X > 180 && (X -= 360), X < -180 && (X += 360), g.inertia.vx = X / ot, g.inertia.vy = (k.pitch - G.pitch) / ot;
    } else
      g.inertia.vx = 0, g.inertia.vy = 0;
    g.velHistory = [];
    const O = Math.hypot(g.inertia.vx, g.inertia.vy);
    return g.inertia.active = O > Iy, g.inertia.lastTs = T, y("drag", { phase: "end", speed: O, inertiaActive: g.inertia.active }), !0;
  }
  function P(H = performance.now()) {
    if (!g.inertia.active) return !1;
    const T = Number(H || performance.now()), $ = Math.max(1e-3, (T - (g.inertia.lastTs || T)) / 1e3);
    g.inertia.lastTs = T;
    const O = { ...e() };
    O.yaw = Ve(Number(O.yaw || 0) + g.inertia.vx * $), O.pitch = j(Number(O.pitch || 0) + g.inertia.vy * $, -89.9, 89.9);
    const G = Math.exp(-5.5 * $);
    return g.inertia.vx *= G, g.inertia.vy *= G, Math.abs(g.inertia.vx) < Rf && Math.abs(g.inertia.vy) < Rf && (g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.active = !1), n(O), u(), g.inertia.active;
  }
  function D(H) {
    const T = Math.sign(Number(H || 0));
    if (!T) return !1;
    const $ = { ...e() }, O = Number($.fov || _o);
    return $.fov = j(O + T * ky, Cy, Ay), n($), u(), y("wheel", { deltaSign: T, fovBefore: O, fovAfter: $.fov }), !0;
  }
  function E(H) {
    return D(Math.sign(Ty(H)));
  }
  function C() {
    n({ yaw: 0, pitch: 0, fov: _o }), g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, u();
  }
  return {
    state: g,
    startDrag: w,
    moveDrag: p,
    endDrag: N,
    stepInertia: P,
    applyWheel: D,
    applyWheelEvent: E,
    resetView: C
  };
}
function qc(t) {
  const e = String(t || "").trim();
  return e ? e === "PanoramaPreview" || e === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(e) : !1;
}
const Qr = Math.PI / 180;
function En(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) ? n : Number(e);
}
function ti(t, e, n) {
  return { x: t, y: e, z: n };
}
function as(t, e) {
  return ti(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Ei(t, e) {
  return ti(t.x * e, t.y * e, t.z * e);
}
function wo(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return ti(t.x / e, t.y / e, t.z / e);
}
function Dy(t, e) {
  const n = Number(t || 0) * Qr, r = Number(e || 0) * Qr, o = Math.cos(r);
  return ti(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Of(t, e) {
  return ti(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Ly(t, e, n = 0) {
  const r = Dy(t, e), o = ti(0, 1, 0);
  let c = Of(o, r);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = ti(1, 0, 0)), c = wo(c);
  let u = wo(Of(r, c));
  const f = Number(n || 0) * Qr, g = Math.cos(f), y = Math.sin(f), w = as(Ei(c, g), Ei(u, y)), p = as(Ei(c, -y), Ei(u, g));
  return { fwd: r, right: wo(w), up: wo(p) };
}
function Ry(t, e, n, r = 0.45) {
  const o = (t.x + e.x + n.x) / 3, c = (t.y + e.y + n.y) / 3, u = (f) => {
    const g = f.x - o, y = f.y - c, w = Math.hypot(g, y) || 1;
    return { x: f.x + g / w * r, y: f.y + y / w * r };
  };
  return [u(t), u(e), u(n)];
}
function Ff(t, e, n, r, o, c, u, f) {
  const g = n.x * (r.y - o.y) + r.x * (o.y - n.y) + o.x * (n.y - r.y);
  if (Math.abs(g) < 1e-6) return !1;
  const [y, w, p] = Ry(c, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(w.x, w.y), t.lineTo(p.x, p.y), t.closePath(), t.clip();
  const N = (c.x * (r.y - o.y) + u.x * (o.y - n.y) + f.x * (n.y - r.y)) / g, P = (c.x * (o.x - r.x) + u.x * (n.x - o.x) + f.x * (r.x - n.x)) / g, D = (c.x * (r.x * o.y - o.x * r.y) + u.x * (o.x * n.y - n.x * o.y) + f.x * (n.x * r.y - r.x * n.y)) / g, E = (c.y * (r.y - o.y) + u.y * (o.y - n.y) + f.y * (n.y - r.y)) / g, C = (c.y * (o.x - r.x) + u.y * (n.x - o.x) + f.y * (r.x - n.x)) / g, H = (c.y * (r.x * o.y - o.x * r.y) + u.y * (o.x * n.y - n.x * o.y) + f.y * (n.x * r.y - r.x * n.y)) / g;
  return t.transform(N, E, P, C, D, H), t.drawImage(e, 0, 0), t.restore(), !0;
}
function Oy(t, e) {
  if (!e || !e.complete || !(e.naturalWidth || e.width)) return null;
  const n = Number(e.naturalWidth || e.width || 0), r = Number(e.naturalHeight || e.height || 0);
  if (n <= 1 || r <= 1) return null;
  t.__panoSharedWrappedErpCache || (t.__panoSharedWrappedErpCache = { src: "", w: 0, h: 0, canvas: null });
  const o = String(e.src || ""), c = t.__panoSharedWrappedErpCache;
  if (c.canvas && c.src === o && c.w === n && c.h === r) return c.canvas;
  const u = document.createElement("canvas");
  u.width = n * 2, u.height = r;
  const f = u.getContext("2d");
  return f ? (f.drawImage(e, 0, 0, n, r), f.drawImage(e, n, 0, n, r), t.__panoSharedWrappedErpCache = { src: o, w: n, h: r, canvas: u }, u) : null;
}
function Eh(t) {
  const e = t || {}, n = En(e.yaw_deg, 0), r = En(e.pitch_deg, 0), o = En(e.roll_deg ?? e.rot_deg, 0), c = Wa(En(e.hFOV_deg, 90), 1, 179), u = Wa(En(e.vFOV_deg, 60), 1, 179), f = Math.tan(c * Qr * 0.5) / Math.max(1e-6, Math.tan(u * Qr * 0.5)), g = Wa(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: o,
    hfov: c,
    vfov: u,
    aspect: g
  };
}
function Fy(t, e, n, r, o, c = "balanced") {
  const u = (vt = {}) => {
    e.__panoCutoutProjectionStats = {
      drawnTriCount: 0,
      Nu: 0,
      Nv: 0,
      rectW: En(r == null ? void 0 : r.w, 0),
      rectH: En(r == null ? void 0 : r.h, 0),
      imageW: En((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width), 0),
      imageH: En((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height), 0),
      ...vt
    };
  };
  if (!t || !e || !n || !r || !o)
    return e && u({ reason: "invalid_args" }), !1;
  if (!n.complete || !(n.naturalWidth || n.width))
    return u({ reason: "image_not_ready" }), !1;
  const f = En(r.w, 0), g = En(r.h, 0);
  if (f <= 1 || g <= 1)
    return u({ reason: "invalid_rect", rectW: f, rectH: g }), !1;
  const y = Number(n.naturalWidth || n.width || 0), w = Number(n.naturalHeight || n.height || 0);
  if (y <= 1 || w <= 1)
    return u({ reason: "invalid_image", imageW: y, imageH: w }), !1;
  const p = Oy(e, n) || n, { yaw: N, pitch: P, roll: D, hfov: E, vfov: C } = Eh(o), H = Ly(N, P, D), T = Math.tan(E * Qr * 0.5), $ = Math.tan(C * Qr * 0.5), O = c === "high" ? 20 : c === "draft" ? 10 : 14, G = c === "high" ? 14 : c === "draft" ? 7 : 10;
  let k = 0;
  const ot = Array.from({ length: G + 1 }, () => Array(O + 1).fill(null)), X = Array.from({ length: G + 1 }, () => Array(O + 1).fill(null));
  for (let vt = 0; vt <= G; vt += 1)
    for (let F = 0; F <= O; F += 1) {
      const ft = F / O, Q = vt / G, lt = (ft * 2 - 1) * T, it = (1 - Q * 2) * $, K = wo(as(as(H.fwd, Ei(H.right, lt)), Ei(H.up, it))), rt = Math.atan2(K.x, K.z), et = Math.asin(Wa(K.y, -1, 1));
      let gt = (rt / (2 * Math.PI) + 0.5) * y;
      for (; gt < 0; ) gt += y;
      for (; gt >= y; ) gt -= y;
      const xt = (0.5 - et / Math.PI) * w;
      ot[vt][F] = { x: r.x + ft * r.w, y: r.y + Q * r.h }, X[vt][F] = { x: gt, y: xt };
    }
  for (let vt = 0; vt < G; vt += 1)
    for (let F = 0; F < O; F += 1) {
      const ft = ot[vt][F], Q = ot[vt][F + 1], lt = ot[vt + 1][F], it = ot[vt + 1][F + 1], K = { ...X[vt][F] }, rt = { ...X[vt][F + 1] }, et = { ...X[vt + 1][F] }, gt = { ...X[vt + 1][F + 1] }, xt = Math.min(K.x, rt.x, et.x, gt.x);
      Math.max(K.x, rt.x, et.x, gt.x) - xt > y * 0.5 && [K, rt, et, gt].forEach((tt) => {
        tt.x < y * 0.5 && (tt.x += y);
      }), Ff(t, p, K, rt, gt, ft, Q, it) && (k += 1), Ff(t, p, K, gt, et, ft, it, lt) && (k += 1);
    }
  return u({
    drawnTriCount: k,
    Nu: O,
    Nv: G,
    rectW: f,
    rectH: g,
    imageW: y,
    imageH: w,
    reason: "ok"
  }), k > 0;
}
const ss = Math.PI / 180;
function ei(t, e, n) {
  return { x: t, y: e, z: n };
}
function $f(t, e) {
  return ei(t.x + e.x, t.y + e.y, t.z + e.z);
}
function xa(t, e) {
  return ei(t.x * e, t.y * e, t.z * e);
}
function Hf(t, e) {
  return ei(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Sa(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return ei(t.x / e, t.y / e, t.z / e);
}
function $y(t, e) {
  const n = t * ss, r = e * ss, o = Math.cos(r);
  return ei(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Hy(t, e, n = 0) {
  const r = $y(t, e), o = ei(0, 1, 0);
  let c = Hf(o, r);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = ei(1, 0, 0)), c = Sa(c);
  const u = Sa(Hf(r, c)), f = n * ss, g = Math.cos(f), y = Math.sin(f), w = $f(xa(c, g), xa(u, y)), p = $f(xa(c, -y), xa(u, g));
  return { fwd: r, right: Sa(w), up: Sa(p) };
}
function Vy(t, e, n, r = 0.45) {
  const o = (t.x + e.x + n.x) / 3, c = (t.y + e.y + n.y) / 3, u = (f) => {
    const g = f.x - o, y = f.y - c, w = Math.hypot(g, y) || 1;
    return { x: f.x + g / w * r, y: f.y + y / w * r };
  };
  return [u(t), u(e), u(n)];
}
function Vf(t, e, n, r, o, c, u, f, g = 0.45) {
  const y = n.x * (r.y - o.y) + r.x * (o.y - n.y) + o.x * (n.y - r.y);
  if (Math.abs(y) < 1e-6) return;
  const w = (c.x * (r.y - o.y) + u.x * (o.y - n.y) + f.x * (n.y - r.y)) / y, p = (c.x * (o.x - r.x) + u.x * (n.x - o.x) + f.x * (r.x - n.x)) / y, N = (c.x * (r.x * o.y - o.x * r.y) + u.x * (o.x * n.y - n.x * o.y) + f.x * (n.x * r.y - r.x * n.y)) / y, P = (c.y * (r.y - o.y) + u.y * (o.y - n.y) + f.y * (n.y - r.y)) / y, D = (c.y * (o.x - r.x) + u.y * (n.x - o.x) + f.y * (r.x - n.x)) / y, E = (c.y * (r.x * o.y - o.x * r.y) + u.y * (o.x * n.y - n.x * o.y) + f.y * (n.x * r.y - r.x * n.y)) / y, [C, H, T] = Vy(c, u, f, g);
  t.save(), t.beginPath(), t.moveTo(C.x, C.y), t.lineTo(H.x, H.y), t.lineTo(T.x, T.y), t.closePath(), t.clip(), t.setTransform(w, P, p, D, N, E), t.drawImage(e, 0, 0), t.restore();
}
function zy(t = {}) {
  const e = t.owner || null, n = t.ctx || null, r = t.rect || null, o = t.img || null, c = t.mesh || { Nu: 24, Nv: 14 }, u = Number(t.coverageDeg || 360) === 180 ? 180 : 360, f = t.viewBasis || null, g = Number(t.tanHalfY || 0), y = typeof t.resolveWrappedSource == "function" ? t.resolveWrappedSource : () => null, p = !!o && (typeof HTMLCanvasElement < "u" && o instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && o instanceof OffscreenCanvas || typeof ImageBitmap < "u" && o instanceof ImageBitmap) || !!o && o.complete && (o.naturalWidth || o.width);
  if (!e || !n || !r || !f || !p) return !1;
  if (fy({
    owner: e,
    cacheKey: t.cacheKey || "shared_pano_bg",
    ctx: n,
    rect: r,
    img: o,
    mode: "panorama",
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    fovDeg: Number(t.fovDeg || 100),
    coverageDeg: u,
    backgroundOpacity: Number(t.backgroundOpacity ?? 1)
  })) return !0;
  const N = Number(o.naturalWidth || o.width || 0), P = Number(o.naturalHeight || o.height || 0);
  if (N <= 1 || P <= 1) return !1;
  const D = (u === 180 ? null : y(o)) || o, E = Math.max(4, Number((c == null ? void 0 : c.Nu) || 24)), C = Math.max(4, Number((c == null ? void 0 : c.Nv) || 14)), H = E <= 14 && C <= 9 ? 0.24 : E >= 32 && C >= 20 ? 0.42 : 0.34, T = [], $ = [];
  for (let ot = 0; ot <= C; ot++)
    T[ot] = [], $[ot] = [];
  const O = r.x + r.w * 0.5, G = r.y + r.h * 0.5, k = r.h * 0.5;
  for (let ot = 0; ot <= C; ot++) {
    const X = r.y + r.h * ot / C, vt = (G - X) / k * g;
    for (let F = 0; F <= E; F++) {
      const ft = r.x + r.w * F / E, Q = (ft - O) / k * g, lt = f.fwd.x + f.right.x * Q + f.up.x * vt, it = f.fwd.y + f.right.y * Q + f.up.y * vt, K = f.fwd.z + f.right.z * Q + f.up.z * vt, rt = Math.hypot(lt, it, K) || 1e-8, et = lt / rt, gt = it / rt, xt = K / rt, At = Math.atan2(et, xt), tt = Math.asin(j(gt, -1, 1));
      let dt = 0;
      if (u === 180) {
        if (Math.abs(At) > Math.PI * 0.5) {
          T[ot][F] = null, $[ot][F] = null;
          continue;
        }
        dt = j(At / Math.PI + 0.5, 0, 1) * N;
      } else {
        for (dt = (At / (2 * Math.PI) + 0.5) * N; dt < 0; ) dt += N;
        for (; dt >= N; ) dt -= N;
      }
      const Bt = (0.5 - tt / Math.PI) * P;
      T[ot][F] = { x: ft, y: X }, $[ot][F] = { x: dt, y: Bt };
    }
  }
  n.save(), n.globalAlpha = Number(t.backgroundOpacity ?? 1);
  for (let ot = 0; ot < C; ot += 1)
    for (let X = 0; X < E; X += 1) {
      const vt = T[ot][X], F = T[ot][X + 1], ft = T[ot + 1][X], Q = T[ot + 1][X + 1];
      if (!vt || !F || !ft || !Q) continue;
      const lt = { ...$[ot][X] }, it = { ...$[ot][X + 1] }, K = { ...$[ot + 1][X] }, rt = { ...$[ot + 1][X + 1] }, et = Math.min(lt.x, it.x, K.x, rt.x), gt = Math.max(lt.x, it.x, K.x, rt.x);
      u === 360 && gt - et > N * 0.5 && [lt, it, K, rt].forEach((xt) => {
        xt.x < N * 0.5 && (xt.x += N);
      }), Vf(n, D, lt, it, rt, vt, F, Q, H), Vf(n, D, lt, rt, K, vt, Q, ft, H);
    }
  return n.restore(), !0;
}
const Th = 0.28;
function Uy(t) {
  const e = t && typeof t == "object" ? t : {}, n = j(Number(e.x0 ?? 0), 0, 1), r = j(Number(e.y0 ?? 0), 0, 1), o = j(Number(e.x1 ?? 1), 0, 1), c = j(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, o),
    y0: Math.min(r, c),
    x1: Math.max(n, o),
    y1: Math.max(r, c)
  };
}
function jy(t, e = {}) {
  if (!t || typeof t != "object") return null;
  const n = String(t.asset_id || t.assetId || "").trim(), r = t.type === "external_image" || t.source_kind === "external_image", o = n || (r ? String(t.id || "").trim() : ""), c = e.includeHidden === !0, u = t.visible === !1, f = c && r && u;
  return {
    id: String(t.id || ""),
    assetId: o,
    zIndex: Number(t.z_index || t.zIndex || 0),
    yawDeg: Number(t.yaw_deg || t.yawDeg || 0),
    pitchDeg: Number(t.pitch_deg || t.pitchDeg || 0),
    rollDeg: Number(t.rot_deg ?? t.roll_deg ?? t.rollDeg ?? 0),
    hFovDeg: j(Number(t.hFOV_deg || t.hFovDeg || 30), 1, 179),
    vFovDeg: j(Number(t.vFOV_deg || t.vFovDeg || 30), 1, 179),
    crop: Uy(t.crop),
    opacity: f ? Th : j(Number(t.opacity ?? 1), 0, 1),
    visible: f ? !0 : t.visible !== !1,
    external: r
  };
}
function jo(t, e = {}) {
  var c;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], r = e.includeHidden === !0;
  return {
    stickers: n.map((u) => jy(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: e.selectedId ?? ((c = t == null ? void 0 : t.active) == null ? void 0 : c.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function Yc(t, e, n = {}) {
  if (typeof e != "function") return [];
  const r = n.scene || jo(t, n), o = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, c = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var D;
    const g = String((f == null ? void 0 : f.assetId) || "").trim(), y = g || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const w = g ? o[g] : null, p = e(y, w, f);
    if (p instanceof HTMLImageElement && !p.complete) return;
    const N = Number((p == null ? void 0 : p.naturalWidth) || (p == null ? void 0 : p.videoWidth) || (p == null ? void 0 : p.width) || 0), P = Number((p == null ? void 0 : p.naturalHeight) || (p == null ? void 0 : p.videoHeight) || (p == null ? void 0 : p.height) || 0);
    !p || N <= 0 || P <= 0 || (u.add(y), c.push({
      assetId: y,
      source: p,
      revision: String(((D = n.revisionFor) == null ? void 0 : D.call(n, y, w, p)) ?? [
        y,
        Number(p.naturalWidth || p.videoWidth || p.width || 0),
        Number(p.naturalHeight || p.videoHeight || p.height || 0),
        String(p.currentSrc || p.src || "")
      ].join("|"))
    }));
  }), c;
}
function Cl(t, e = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((t == null ? void 0 : t.yaw) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch) || 0),
    fovDeg: j(Number((t == null ? void 0 : t.fov) || 100), 1, 179),
    coverageDeg: Number(e || 360) === 180 ? 180 : 360
  };
}
function By(t, e = 360) {
  return Cl(t, e);
}
function Ti(t) {
  const e = Eh(t || {});
  return {
    mode: "cutout",
    yawDeg: Number((t == null ? void 0 : t.yaw_deg) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch_deg) || 0),
    rollDeg: Number((e == null ? void 0 : e.roll) ?? (t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0),
    hFovDeg: j(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179),
    vFovDeg: j(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1)
  };
}
const { app: ye } = Fa;
function Xc() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (Fa == null ? void 0 : Fa.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const ni = Math.PI / 180, cs = { Nu: 14, Nv: 9 }, Gy = { Nu: 24, Nv: 14 }, Ky = 10, Wy = 120;
function Dh() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Xt(t, e, n = null) {
  if (!Dh()) return;
  const r = (t == null ? void 0 : t.id) ?? "?";
  if (n == null) {
    console.info(`[PANO_PREVIEW][${e}] node=${r}`);
    return;
  }
  console.info(`[PANO_PREVIEW][${e}] node=${r}`, n);
}
function po(t) {
  var n, r, o, c, u;
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
    styleWidth: String(((o = t.style) == null ? void 0 : o.width) || ""),
    stylePos: String(((c = t.style) == null ? void 0 : c.position) || ""),
    styleTransform: String(((u = t.style) == null ? void 0 : u.transform) || "")
  };
}
function qy() {
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
function Dr(t) {
  const e = t == null ? void 0 : t.size;
  if (e == null) return null;
  const n = (r, o) => {
    const c = Number(r), u = Number(o);
    return !Number.isFinite(c) || !Number.isFinite(u) ? null : [c, u];
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
function Yy(t) {
  const e = Dr(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function Lh(t, e, n) {
  Yy(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function Zc(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function Rh(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function Xy(t) {
  return qc(Rh(t));
}
function Jr(t = null) {
  var c, u;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((u = (c = ye == null ? void 0 : ye.canvas) == null ? void 0 : c.constructor) == null ? void 0 : u.name) || "");
  return [e, r, n, o].join("|");
}
function Oh(t, e = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Jr(e)
  } : String(t) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Jr(e)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Jr(e)
  };
}
const Eo = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(t) {
    !t || String(t.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(t), this.lastSignature || (this.lastSignature = Jr(t)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(t) {
    t && this.nodes.delete(t), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const t = this.nodes.values().next().value || null, e = Jr(t);
    e !== this.lastSignature && (this.lastSignature = e, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((r) => {
        if (!(!r || String(r.__panoPreviewMode || "") !== "stickers"))
          try {
            r.__panoRebindGeneration = this.generation, Xt(r, "path.switch", {
              from: String(r.__panoStickersPath || "unknown"),
              to: "rebind",
              reason: "frontend_signature_changed",
              signature: e,
              generation: this.generation
            }), Fh(r).rebind(r.__panoAttachOptions || { mode: "stickers" });
          } catch (o) {
            Xt(r, "path.switch.error", { message: String((o == null ? void 0 : o.message) || o || "unknown") });
          }
      });
    }, 300));
  }
};
function Fh(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = r === "cutout" ? "dom" : Oh(r, t).chosenPath, c = Zc(t);
      this.activeBackend = c;
      const u = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = t.__panoPreviewNoPreview === !0, g = n.noPreview === !0;
      if (c === o && c !== "none" && u === r && f === g) {
        t.__panoAttachOptions = { ...n, mode: r }, t.__panoPreviewMode = r, t.__panoPreviewNoPreview = g, t.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      c !== "none" && Vi(t, { keepMonitor: r === "stickers" }), Fb(t, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = Zc(t);
    },
    rebind(n = {}) {
      const r = String(n.mode || (t == null ? void 0 : t.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Vi(t, { keepMonitor: r === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Vi(t), this.activeBackend = "none";
    }
  };
  return t.__panoPreviewController = e, e;
}
function Zy(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function Vi(t, e = {}) {
  var f, g, y, w, p;
  if (!t) return;
  us.unregister(t), Zy(t);
  const n = !!t.__panoDomPreview, r = !!t.__panoLegacyPreviewHooked, o = typeof t.__panoDomRestore == "function", c = typeof t.__panoLegacyRestore == "function";
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
      (p = (w = u.root) == null ? void 0 : w.remove) == null || p.call(w);
    } catch {
    }
  }
  try {
    Array.isArray(t.widgets) && (t.widgets = t.widgets.filter((N) => {
      if (N === (u == null ? void 0 : u.widget)) return !1;
      const P = String((N == null ? void 0 : N.name) || ""), D = String((N == null ? void 0 : N.type) || ""), E = Xc();
      return !(P === E || D === E || P === "pano_preview" || D === "pano_preview" || P === "preview" && D === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", Xt(t, "teardown.done", {
    reason: String(e.reason || ""),
    removedDom: n || o,
    removedLegacy: r || c,
    keepMonitor: !!e.keepMonitor
  }), e.keepMonitor || Eo.unregister(t);
}
function ri(t, e, n) {
  return { x: t, y: e, z: n };
}
function zf(t, e) {
  return ri(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Na(t, e) {
  return ri(t.x * e, t.y * e, t.z * e);
}
function Cc(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Uf(t, e) {
  return ri(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Ma(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return ri(t.x / e, t.y / e, t.z / e);
}
function Gr(t, e) {
  const n = t * ni, r = e * ni, o = Math.cos(r);
  return ri(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Al(t, e, n = 0) {
  const r = Gr(t, e), o = ri(0, 1, 0);
  let c = Uf(o, r);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = ri(1, 0, 0)), c = Ma(c);
  let u = Ma(Uf(r, c));
  const f = n * ni, g = Math.cos(f), y = Math.sin(f), w = zf(Na(c, g), Na(u, y)), p = zf(Na(c, -y), Na(u, g));
  return { fwd: r, right: Ma(w), up: Ma(p) };
}
function Jy(t, e = "#00ff00") {
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
    const o = t.trim();
    if (!o) return n;
    try {
      r = JSON.parse(o);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const o = r;
    return !o || typeof o != "object" || Array.isArray(o) ? n : {
      ...n,
      ...o,
      coverage: Number(o.coverage) === 180 ? 180 : 360,
      assets: o.assets && typeof o.assets == "object" ? o.assets : {},
      stickers: Array.isArray(o.stickers) ? o.stickers : [],
      shots: Array.isArray(o.shots) ? o.shots : [],
      active: o.active && typeof o.active == "object" ? o.active : n.active
    };
  } catch {
    return n;
  }
}
function Qy(t) {
  var n;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = Bo(t, "state_json")) == null ? void 0 : n.value) || "");
}
function Ts(t) {
  var u, f;
  const e = Qy(t), n = String(((u = Bo(t, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), r = Number(((f = Bo(t, "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, o = t.__panoStateCache;
  if (o && o.source === e && o.bg === n && o.coverage === r)
    return o.parsed;
  const c = Jy(e, n);
  return c.coverage = r, t.__panoStateCache = { source: e, bg: n, coverage: r, parsed: c }, c;
}
function Bo(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function jf(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function $h(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function tb(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Hh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Vh(t, e, n = null) {
  var o, c;
  let r = null;
  try {
    r = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const u = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, f = u ? (c = r.resolveSubgraphOutputLink) == null ? void 0 : c.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = tb(t == null ? void 0 : t.graph, n)), r;
}
function eb(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Il(t, e = []) {
  const n = eb(t), r = [];
  return e.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    (o === "erp_image" || o === "bg_erp") && !r.includes(o) && r.push(o);
  }), r.length ? r : e;
}
function Bf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: e, tail: n.length ? n[n.length - 1] : e };
}
function ls(t, e) {
  const n = Bf(t), r = Bf(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function nb(t, e = ["erp_image", "bg_erp"]) {
  var g;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return [];
  const o = Il(t, e).map((y) => n.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(y))).filter((y) => y >= 0), c = n.map((y, w) => ({ input: y, idx: w })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...o, ...c])], f = [];
  for (const y of u) {
    const w = Vh(t, y);
    if ((w == null ? void 0 : w.id) != null) {
      f.push(String(w.id));
      continue;
    }
    const p = (g = n[y]) == null ? void 0 : g.link;
    if (p == null) continue;
    const N = $h(t == null ? void 0 : t.graph, p), { originId: P } = Hh(N);
    P != null && f.push(String(P));
  }
  return [...new Set(f)];
}
const us = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = sn) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((c) => {
        var w, p, N, P, D;
        if (!c) return;
        const u = ls(r, c == null ? void 0 : c.id), g = nb(c, ["erp_image", "bg_erp"]).some((E) => ls(r, E)), y = u ? "self" : g ? "upstream" : "global_executed";
        Xt(c, "exec-refresh", { executedId: r, reason: y }), Qc(c), Xt(c, "invalidate", { cachesCleared: !0 }), (p = (w = c.__panoDomPreview) == null ? void 0 : w.requestDraw) == null || p.call(w), (N = c.setDirtyCanvas) == null || N.call(c, !0, !0), (D = (P = c.graph) == null ? void 0 : P.setDirtyCanvas) == null || D.call(P, !0, !0), Xt(c, "draw-request", {
          route: String(c.__panoPreviewMode || ""),
          mode: String(c.__panoPreviewMode || ""),
          reason: y
        });
      });
    }, sn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var t;
    !this.bound || !this.listener || !((t = sn) != null && t.removeEventListener) || (sn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(t) {
    t && (this.nodes.add(t), this.ensureBound());
  },
  unregister(t) {
    t && this.nodes.delete(t), this.nodes.size || this.ensureUnbound();
  }
};
function fs(t) {
  var c;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e);
  const r = String(
    t.storage || (String(t.type || "").trim().toLowerCase() === "comfy_image" ? "output" : t.type) || "output"
  );
  n.set("type", r), t.subfolder && n.set("subfolder", String(t.subfolder));
  const o = `/view?${n.toString()}`;
  return typeof ((c = sn) == null ? void 0 : c.apiURL) == "function" ? sn.apiURL(o) : o;
}
function rb(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function ib(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), c = r.join("/");
  return { filename: o, subfolder: c };
}
function ob(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), e.push(o));
  }), e;
}
function zh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (rb(e)) return [e];
  const { filename: n, subfolder: r } = ib(e);
  if (!n) return [e];
  const o = ["temp", "output", "input"].map((c) => fs({
    filename: n,
    subfolder: r,
    type: c
  }));
  return ob([...o, e]);
}
function ab(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? fs({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function Jc(t) {
  const e = ye == null ? void 0 : ye.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  const o = n;
  if (e instanceof Map) {
    for (const c of e.keys())
      if (ls(c, o)) return e.get(c);
  } else {
    const c = Object.keys(e);
    for (const u of c)
      if (ls(u, o)) return e[u];
  }
  return null;
}
function Xn(t) {
  if (!t) return "";
  if (typeof t == "string")
    return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Xn(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return fs({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Xn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : fs(t);
}
function Uh(t, e) {
  var r;
  const n = String(t || "").trim();
  if (!n) return "";
  try {
    const o = typeof window < "u" && ((r = window == null ? void 0 : window.location) != null && r.href) ? window.location.href : "http://127.0.0.1/", c = new URL(n, o);
    return e > 0 && c.searchParams.set("pano_rev", String(e)), c.toString();
  } catch {
    const o = n.includes("?") ? "&" : "?";
    return e > 0 ? `${n}${o}pano_rev=${e}` : n;
  }
}
function sb(t) {
  const e = [], n = /* @__PURE__ */ new Set(), r = (c) => {
    Array.isArray(c) && c.forEach((u) => e.push(u));
  }, o = (c, u = 0) => {
    !c || u > 3 || n.has(c) || typeof c == "object" && (n.add(c), r(c.images), o(c.output, u + 1), o(c.ui, u + 1), o(c.data, u + 1), o(c.result, u + 1));
  };
  return o(t, 0), e;
}
function cb(t, e) {
  try {
    const n = sb(e);
    let r = "";
    for (const o of n)
      if (r = Xn(o), r) break;
    r ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(r || ""), Xt(t, "cutout.output-sync", {
      hasOutputImage: !0,
      src: Uh(t.__panoOwnOutputSrc, t.__panoOwnOutputRev),
      rev: t.__panoOwnOutputRev
    })) : Xt(t, "cutout.output-sync", { hasOutputImage: !1, keys: Object.keys(e || {}) });
  } catch {
    Xt(t, "cutout.output-sync", { hasOutputImage: !1 });
  }
}
function lb(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const r = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), o = Jc(n), c = Array.isArray(o == null ? void 0 : o.images) ? o.images : [], u = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], f = r ? [r, ...c, ...u] : [...c, ...u];
  let g = "";
  for (const H of f)
    if (g = Xn(H), g) break;
  if (!g) return null;
  const y = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), p = zh(g).map((H) => Uh(H, y));
  if (!p.length) return null;
  const N = `${g}|rev:${y}`;
  t.__panoOwnOutputImageCache || (t.__panoOwnOutputImageCache = {
    src: "",
    img: null,
    pendingSrc: "",
    pendingImg: null
  });
  const P = t.__panoOwnOutputImageCache;
  if (P.img && P.src === N) return P.img;
  if (P.pendingImg && P.pendingSrc === N)
    return P.img && (P.img.complete || P.img.naturalWidth || P.img.width) ? P.img : P.pendingImg;
  const D = new Image();
  let E = -1;
  const C = () => {
    if (E += 1, E >= p.length) {
      t.__panoOwnOutputImageCache === P && (P.pendingSrc = "", P.pendingImg = null);
      return;
    }
    D.src = p[E];
  };
  return D.onload = () => {
    var H;
    t.__panoOwnOutputImageCache === P && P.pendingImg === D && P.pendingSrc === N && (P.src = N, P.img = D, P.pendingSrc = "", P.pendingImg = null), e == null || e(), (H = t.setDirtyCanvas) == null || H.call(t, !0, !0);
  }, D.onerror = () => {
    if (E + 1 >= p.length) {
      t.__panoOwnOutputImageCache === P && P.pendingImg === D && (P.pendingSrc = "", P.pendingImg = null);
      return;
    }
    C();
  }, P.pendingSrc = N, P.pendingImg = D, C(), P.img && (P.img.complete || P.img.naturalWidth || P.img.width) ? P.img : D;
}
function ub(t, e = []) {
  var y, w;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const r = Il(t, e), o = r.map((p) => n.findIndex((N) => String((N == null ? void 0 : N.name) || "") === String(p))).filter((p) => p >= 0), c = n.map((p, N) => ({ input: p, idx: N })).filter(({ input: p }) => String((p == null ? void 0 : p.type) || "").toUpperCase() === "IMAGE").map(({ idx: p }) => p), u = [.../* @__PURE__ */ new Set([...o, ...c])];
  Xt(t, "image-resolve", {
    inputCandidates: r,
    resolvedIndices: u,
    stage: "start"
  });
  for (const p of u) {
    const N = n[p], P = N == null ? void 0 : N.link;
    if (P == null) continue;
    const D = $h(t.graph, P), { originId: E, originSlot: C } = Hh(D);
    if (E == null) continue;
    const H = Vh(t, p, E);
    if (!H) continue;
    const T = Number(C || 0), $ = Jc((H == null ? void 0 : H.id) ?? E), O = Array.isArray($ == null ? void 0 : $.images) ? $.images : [];
    if (O.length) {
      const X = [];
      T >= 0 && T < O.length && X.push(O[T]), X.push(...O);
      for (const vt of X) {
        const F = Xn(vt);
        if (F)
          return Xt(t, "image-resolve", {
            inputName: String((N == null ? void 0 : N.name) || ""),
            sourceType: "nodeOutputs",
            stage: "hit"
          }), { src: F, sourceType: "nodeOutputs", inputName: String((N == null ? void 0 : N.name) || "") };
      }
    }
    let G = [];
    try {
      G = typeof (ye == null ? void 0 : ye.getNodeImageUrls) == "function" ? ye.getNodeImageUrls(H) || [] : [];
    } catch {
      G = [];
    }
    if (Array.isArray(G) && G.length) {
      const X = [];
      T >= 0 && T < G.length && X.push(G[T]), X.push(...G);
      for (const vt of X) {
        const F = Xn(vt);
        if (F)
          return Xt(t, "image-resolve", {
            inputName: String((N == null ? void 0 : N.name) || ""),
            sourceType: "appNodeImageUrls",
            stage: "hit"
          }), { src: F, sourceType: "appNodeImageUrls", inputName: String((N == null ? void 0 : N.name) || "") };
      }
    }
    const k = Array.isArray(H == null ? void 0 : H.imgs) ? H.imgs : [];
    if (k.length) {
      const X = [];
      T >= 0 && T < k.length && X.push(k[T]), X.push(...k);
      for (const vt of X) {
        const F = Xn(vt);
        if (F)
          return Xt(t, "image-resolve", {
            inputName: String((N == null ? void 0 : N.name) || ""),
            sourceType: "nodeImgs",
            stage: "hit"
          }), { src: F, sourceType: "nodeImgs", inputName: String((N == null ? void 0 : N.name) || "") };
      }
    }
    const ot = (y = H == null ? void 0 : H.widgets) == null ? void 0 : y.find((X) => String((X == null ? void 0 : X.name) || "").toLowerCase() === "image");
    if (ot) {
      let X = Xn(ot.value);
      if (X && !X.includes("/") && !X.includes(":") && (H.comfyClass === "LoadImage" || H.type === "LoadImage") && (X = sn.apiURL(`/view?filename=${encodeURIComponent(X)}&type=input&subfolder=`)), X)
        return Xt(t, "image-resolve", {
          inputName: String((N == null ? void 0 : N.name) || ""),
          sourceType: "widget",
          stage: "hit"
        }), { src: X, sourceType: "widget", inputName: String((N == null ? void 0 : N.name) || "") };
    }
  }
  const f = Jc(t == null ? void 0 : t.id), g = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && g.push(...f.pano_input_images), Array.isArray((w = f == null ? void 0 : f.ui) == null ? void 0 : w.pano_input_images) && g.push(...f.ui.pano_input_images), g.length > 0)
    for (const p of g) {
      const N = Xn(p);
      if (N)
        return Xt(t, "image-resolve", { sourceType: "selfOutput", src: N, stage: "hit" }), { src: N, sourceType: "selfOutput", inputName: "fallback" };
    }
  return Xt(t, "image-resolve", { stage: "miss" }), { src: "", sourceType: "", inputName: "" };
}
function fb(t, e = []) {
  const n = ub(t, e), r = String((n == null ? void 0 : n.src) || "").trim();
  if (!r) return null;
  const o = zh(r);
  if (!o.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = e.join("|") || "image", u = t.__panoLinkedInputImageCache.get(c);
  if (u && u.srcRaw === r && u.img) return u.img;
  const f = new Image(), g = { srcRaw: r, resolvedSrc: "", img: f };
  t.__panoLinkedInputImageCache.set(c, g);
  let y = -1;
  const w = () => {
    var N, P;
    if (y += 1, y >= o.length) {
      try {
        (P = (N = t.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || P.call(N, c);
      } catch {
      }
      Xt(t, "image-load", {
        ok: !1,
        src: r,
        preferredInputNames: e,
        sourceType: String((n == null ? void 0 : n.sourceType) || ""),
        attemptCount: o.length,
        errorType: "all_candidates_failed"
      });
      return;
    }
    const p = o[y];
    g.resolvedSrc = p, f.src = p;
  };
  return f.onload = () => {
    var p;
    Xt(t, "image-load", {
      ok: !0,
      src: r,
      resolvedSrc: String(g.resolvedSrc || f.src || ""),
      preferredInputNames: e,
      sourceType: String((n == null ? void 0 : n.sourceType) || ""),
      attemptCount: y + 1
    }), (p = t.setDirtyCanvas) == null || p.call(t, !0, !0);
  }, f.onerror = (p) => {
    var N, P;
    if (y + 1 < o.length) {
      w();
      return;
    }
    try {
      (P = (N = t.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || P.call(N, c);
    } catch {
    }
    Xt(t, "image-load", {
      ok: !1,
      src: r,
      resolvedSrc: String(g.resolvedSrc || ""),
      preferredInputNames: e,
      sourceType: String((n == null ? void 0 : n.sourceType) || ""),
      attemptCount: y + 1,
      errorType: String((p == null ? void 0 : p.type) || "error")
    });
  }, w(), f;
}
function ds(t, e = [], n = null) {
  const r = fb(t, e);
  return r ? (typeof n == "function" && (r.complete && (r.naturalWidth || r.width) || r.addEventListener("load", () => n(), { once: !0 })), r) : null;
}
function Qc(t) {
  var e, n;
  if (t) {
    try {
      (n = (e = t.__panoLinkedInputImageCache) == null ? void 0 : e.clear) == null || n.call(e);
    } catch {
    }
    t.__panoOwnOutputImageCache = null, t.__panoWrappedErpCache = null;
  }
}
function jh(t, e) {
  t.__panoRenderCache || (t.__panoRenderCache = {
    mode: String(e || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = t.__panoRenderCache, r = String(e || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Cr(t, e, n = "") {
  const r = jh(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), o = performance.now();
  return e ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o, Xt(t, "loading", { phase: "enter", src: String(n || "") })), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < Wy ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, Xt(t, "loading", { phase: "exit", src: String(n || "") }), !1) : !1;
}
function tl(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), r = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), o = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), c = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || r)), u = n / o, f = r / c, g = Math.min(u, f);
  return Number.isFinite(g) && g > 0 ? g : 1;
}
function Gf(t, e, n = 1) {
  const r = Number((e == null ? void 0 : e.x) || 0), o = Number((e == null ? void 0 : e.y) || 0), c = Number((e == null ? void 0 : e.w) || 0), u = Number((e == null ? void 0 : e.h) || 0);
  if (c <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), g = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), c * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), w = r + (c - g) * 0.5, p = o + (u - y) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(w, p, g, y, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", w + g * 0.5, p + y * 0.5 + 0.5), t.restore();
}
function go(t, e, n = "Open editor and add frame") {
  var o;
  const r = (o = t == null ? void 0 : t.__panoDomPreview) == null ? void 0 : o.emptyHintEl;
  r && (r.textContent = String(n || "Open editor and add frame"), r.style.display = e ? "flex" : "none");
}
function db(t) {
  var r;
  const e = Array.isArray(t == null ? void 0 : t.shots) ? t.shots : [];
  if (!e.length) return null;
  const n = String(((r = t == null ? void 0 : t.active) == null ? void 0 : r.selected_shot_id) || "");
  if (n) {
    const o = e.find((c) => String((c == null ? void 0 : c.id) || "") === n);
    if (o) return o;
  }
  return e[0] || null;
}
function Bh(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), r = Number((t == null ? void 0 : t.y) || 0), o = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), c = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), u = Number(e) > 0 ? Number(e) : 1;
  let f = o, g = o / u;
  return g > c && (g = c, f = c * u), {
    x: n + (o - f) * 0.5,
    y: r + (c - g) * 0.5,
    w: f,
    h: g
  };
}
function hb(t, e, n, r = 0) {
  if (!t || !e || !n) return !1;
  const o = Math.max(1, Number(e.naturalWidth || e.width || 0)), c = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (o <= 1 || c <= 1) return !1;
  const u = Bh(n, o / c);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(r) || 0));
  return f > 0 && (t.fillStyle = `rgba(0,0,0,${f})`, t.fillRect(u.x, u.y, u.w, u.h)), t.restore(), !0;
}
function pb(t, e) {
  const n = Ts(t);
  if (Number((n == null ? void 0 : n.coverage) || 360) === 180 || !e || !e.complete || !(e.naturalWidth || e.width)) return null;
  const r = Number(e.naturalWidth || e.width || 0), o = Number(e.naturalHeight || e.height || 0);
  if (r <= 1 || o <= 1) return null;
  t.__panoWrappedErpCache || (t.__panoWrappedErpCache = { src: "", w: 0, h: 0, canvas: null });
  const c = String(e.src || ""), u = t.__panoWrappedErpCache;
  if (u.canvas && u.src === c && u.w === r && u.h === o) return u.canvas;
  const f = document.createElement("canvas");
  f.width = r * 2, f.height = o;
  const g = f.getContext("2d");
  return g ? (g.drawImage(e, 0, 0, r, o), g.drawImage(e, r, 0, r, o), t.__panoWrappedErpCache = { src: c, w: r, h: o, canvas: f }, f) : null;
}
function gb(t, e = null) {
  const r = Array.isArray(t.widgets) ? t.widgets : [];
  let o = 32;
  return r.forEach((c) => {
    var f;
    if (c === e || !c || c.hidden || c.type === "hidden") return;
    let u = 22;
    try {
      const g = typeof c.computeSize == "function" ? c.computeSize(((f = Dr(t)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(g) && Number.isFinite(Number(g[1])) && (u = Number(g[1]));
    } catch {
      u = 22;
    }
    o += u;
  }), o;
}
function qa(t) {
  const n = gb(t) + 2, r = 8, o = Dr(t), c = Math.max(120, Number((o == null ? void 0 : o[0]) || 0) - 16), u = Math.max(84, Number((o == null ? void 0 : o[1]) || 0) - n - 8);
  return u < 40 || c < 80 ? null : { x: r, y: n, w: c, h: u };
}
function Gh(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const r = String(e || "");
  if (!r) return null;
  const o = ab(n);
  if (!o) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const c = window.__panoSharedImageCache.get(o);
  if (c != null && c.img)
    return t.__panoPreviewImageCache.set(r, { src: o, img: c.img }), c.img;
  const u = t.__panoPreviewImageCache.get(r);
  if (u && u.src === o) return u.img;
  const f = new Image();
  return f.src = o, f.onload = () => {
    var g;
    return (g = t.setDirtyCanvas) == null ? void 0 : g.call(t, !0, !0);
  }, window.__panoSharedImageCache.set(o, { img: f }), t.__panoPreviewImageCache.set(r, { src: o, img: f }), f;
}
function mb(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.__panoStickerSortCache;
  if ((r == null ? void 0 : r.source) === n && Array.isArray(r.sorted)) return r.sorted;
  const o = [...n].sort((c, u) => Number((c == null ? void 0 : c.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: o }, o;
}
function Kh(t, e) {
  return jo(e, {
    selectedId: null,
    hoveredId: null
  });
}
function Wh(t, e, n) {
  return Yc(e, (r, o) => Gh(t, r, o), { scene: n });
}
function yb(t, e, n, r = 0.45) {
  const o = (t.x + e.x + n.x) / 3, c = (t.y + e.y + n.y) / 3, u = (f) => {
    const g = f.x - o, y = f.y - c, w = Math.hypot(g, y) || 1;
    return { x: f.x + g / w * r, y: f.y + y / w * r };
  };
  return [u(t), u(e), u(n)];
}
function Kf(t, e, n, r, o, c, u, f) {
  const g = n.x * (r.y - o.y) + r.x * (o.y - n.y) + o.x * (n.y - r.y);
  if (Math.abs(g) < 1e-6) return;
  const [y, w, p] = yb(c, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(w.x, w.y), t.lineTo(p.x, p.y), t.closePath(), t.clip();
  const N = (c.x * (r.y - o.y) + u.x * (o.y - n.y) + f.x * (n.y - r.y)) / g, P = (c.x * (o.x - r.x) + u.x * (n.x - o.x) + f.x * (r.x - n.x)) / g, D = (c.x * (r.x * o.y - o.x * r.y) + u.x * (o.x * n.y - n.x * o.y) + f.x * (n.x * r.y - r.x * n.y)) / g, E = (c.y * (r.y - o.y) + u.y * (o.y - n.y) + f.y * (n.y - r.y)) / g, C = (c.y * (o.x - r.x) + u.y * (n.x - o.x) + f.y * (r.x - n.x)) / g, H = (c.y * (r.x * o.y - o.x * r.y) + u.y * (o.x * n.y - n.x * o.y) + f.y * (n.x * r.y - r.x * n.y)) / g;
  t.transform(N, E, P, C, D, H), t.drawImage(e, 0, 0), t.restore();
}
function qh(t, e, n, r) {
  const o = Cc(t, e.right), c = Cc(t, e.up), u = Cc(t, e.fwd);
  if (u <= 1e-4) return null;
  const f = c / u / r, g = o / u / r;
  return { x: n.x + n.w * 0.5 + g * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Yh(t, e, n, r, o, c, u, f = 12, g = 9) {
  var it;
  const y = j(Number(u.hFOV_deg || 30), 1, 179) * ni, w = j(Number(u.vFOV_deg || 30), 1, 179) * ni, p = Math.tan(y * 0.5), N = Math.tan(w * 0.5), P = u.crop || {}, D = j(Number(P.x0 ?? 0), 0, 1), E = j(Number(P.y0 ?? 0), 0, 1), C = j(Number(P.x1 ?? 1), 0, 1), H = j(Number(P.y1 ?? 1), 0, 1), T = Math.max(1e-4, C - D), $ = Math.max(1e-4, H - E), O = Al(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), G = [], k = [], ot = [], X = [];
  for (let K = 0; K <= g; K++) {
    const rt = K / g, gt = (1 - (E + rt * $) * 2) * N;
    for (let xt = 0; xt <= f; xt++) {
      const At = xt / f, dt = ((D + At * T) * 2 - 1) * p, Bt = O.fwd.x + O.right.x * dt + O.up.x * gt, ae = O.fwd.y + O.right.y * dt + O.up.y * gt, be = O.fwd.z + O.right.z * dt + O.up.z * gt, ve = Math.hypot(Bt, ae, be) || 1e-8, z = Bt / ve, Pt = ae / ve, Mt = be / ve, Rt = z * r.right.x + Pt * r.right.y + Mt * r.right.z, jt = z * r.up.x + Pt * r.up.y + Mt * r.up.z, A = z * r.fwd.x + Pt * r.fwd.y + Mt * r.fwd.z;
      if (A <= 1e-4)
        G[K] || (G[K] = []), k[K] || (k[K] = []), G[K][xt] = null, k[K][xt] = null;
      else {
        const R = jt / A / o, U = Rt / A / o;
        G[K] || (G[K] = []), k[K] || (k[K] = []), G[K][xt] = n.x + n.w * 0.5 + U * n.h * 0.5, k[K][xt] = n.y + n.h * 0.5 - R * n.h * 0.5;
      }
      ot[K] || (ot[K] = []), X[K] || (X[K] = []), ot[K][xt] = At, X[K][xt] = rt;
    }
  }
  const vt = (it = c.assets) == null ? void 0 : it[u.asset_id], F = Gh(e, u.asset_id, vt);
  if (!F || !F.complete || !F.naturalWidth) return;
  const ft = Number(F.naturalWidth || F.width || 1), Q = Number(F.naturalHeight || F.height || 1), lt = f < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = lt;
  for (let K = 0; K < g; K++)
    for (let rt = 0; rt < f; rt++) {
      const et = G[K][rt], gt = k[K][rt], xt = G[K][rt + 1], At = k[K][rt + 1], tt = G[K + 1][rt], dt = k[K + 1][rt], Bt = G[K + 1][rt + 1], ae = k[K + 1][rt + 1];
      if (et === null || xt === null || tt === null || Bt === null) continue;
      const be = ot[K][rt] * ft, ve = X[K][rt] * Q, z = ot[K][rt + 1] * ft, Pt = X[K][rt + 1] * Q, Mt = ot[K + 1][rt] * ft, Rt = X[K + 1][rt] * Q, jt = ot[K + 1][rt + 1] * ft, A = X[K + 1][rt + 1] * Q;
      Kf(t, F, { x: be, y: ve }, { x: z, y: Pt }, { x: jt, y: A }, { x: et, y: gt }, { x: xt, y: At }, { x: Bt, y: ae }), Kf(t, F, { x: be, y: ve }, { x: jt, y: A }, { x: Mt, y: Rt }, { x: et, y: gt }, { x: Bt, y: ae }, { x: tt, y: dt });
    }
}
function bb(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const r = Ts(t), o = qa(t);
  if (!o) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const c = Al(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(t.__panoPreviewView.fov || 100) * ni * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(o.x, o.y, o.w, o.h, 8), e.fill(), e.stroke(), e.clip();
  const f = ds(
    t,
    Il(t, ["erp_image", "bg_erp"]),
    () => {
      var O;
      return (O = t.setDirtyCanvas) == null ? void 0 : O.call(t, !0, !1);
    }
  ), g = !!(f && f.complete && (f.naturalWidth || f.width)), y = Jh(t), w = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, p = y || w, N = cs, P = Kh(t, r), D = Wh(t, r, P), E = Cl(t.__panoPreviewView, r == null ? void 0 : r.coverage), C = g ? Gi({
    owner: t,
    cacheKey: "runtime_panorama_scene",
    ctx: e,
    rect: o,
    backgroundSource: f,
    backgroundRevision: [
      String(f.currentSrc || f.src || ""),
      Number(f.naturalWidth || f.width || 0),
      Number(f.naturalHeight || f.height || 0)
    ].join("|"),
    textures: D,
    scene: P,
    view: E
  }) : !1, H = p ? 8 : 12, T = p ? 6 : 9, $ = mb(t, r);
  if (!g || $.length === 0) {
    const O = tl(e == null ? void 0 : e.canvas, o);
    Xh(e, o, c, u, O);
  }
  !C && g && hs(t, e, o, c, u, f, N), !C && $.length > 0 && $.forEach((O) => Yh(e, t, o, c, u, r, O, H, T)), e.restore();
}
function Ya(t, e, n, r) {
  var c, u, f, g, y, w;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((c = t == null ? void 0 : t.pos) == null ? void 0 : c[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((u = t == null ? void 0 : t.pos) == null ? void 0 : u[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && e)
    try {
      const p = r.convertEventToCanvasOffset(e);
      if (Array.isArray(p) && p.length >= 2)
        return {
          x: Number(p[0]) - Number(((f = t == null ? void 0 : t.pos) == null ? void 0 : f[0]) || 0),
          y: Number(p[1]) - Number(((g = t == null ? void 0 : t.pos) == null ? void 0 : g[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(e == null ? void 0 : e.canvasX)) && Number.isFinite(Number(e == null ? void 0 : e.canvasY)))
    return {
      x: Number(e.canvasX) - Number(((y = t == null ? void 0 : t.pos) == null ? void 0 : y[0]) || 0),
      y: Number(e.canvasY) - Number(((w = t == null ? void 0 : t.pos) == null ? void 0 : w[1]) || 0)
    };
  const o = _b(t, e, r);
  return o || null;
}
function vb(t, e) {
  var p, N;
  const n = Number(t == null ? void 0 : t.clientX), r = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, c = (p = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : p.call(o), u = (e == null ? void 0 : e.ds) || ((N = ye == null ? void 0 : ye.canvas) == null ? void 0 : N.ds);
  if (!c || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const g = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(c.left || 0)) / f - Number(g[0] || 0), w = (r - Number(c.top || 0)) / f - Number(g[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(w) ? null : { x: y, y: w };
}
function _b(t, e, n) {
  var o, c;
  const r = vb(e, n || (ye == null ? void 0 : ye.canvas));
  return r ? {
    x: r.x - Number(((o = t == null ? void 0 : t.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((c = t == null ? void 0 : t.pos) == null ? void 0 : c[1]) || 0)
  } : null;
}
function Pa(t) {
  if (t.__panoLegacyPreviewHooked) return;
  Xt(t, "legacy.attach", {
    mode: t.__panoPreviewMode,
    nodeType: String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""),
    nodeSize: Dr(t)
  }), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", Lh(t, 320, 180), Ci(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var N, P;
    const p = e ? e.apply(this, arguments) : void 0;
    try {
      const D = arguments[0];
      D && !((N = this.flags) != null && N.collapsed) && (r.stepInertia(performance.now()) && ((P = this.setDirtyCanvas) == null || P.call(this, !0, !1)), bb(this, D, r));
    } catch {
    }
    return p;
  }, t.onResize = function() {
    var N;
    const p = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ps(this, 150), (N = this.setDirtyCanvas) == null || N.call(this, !0, !0), Qh(this, 220, null), p;
  };
  const r = Es({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (p) => {
      t.__panoPreviewView = p;
    },
    getViewportSize: () => {
      const p = qa(t);
      return {
        w: Math.max(1, Number((p == null ? void 0 : p.w) || 0)),
        h: Math.max(1, Number((p == null ? void 0 : p.h) || 0))
      };
    },
    onInteraction: () => {
      var p;
      Zh(t), (p = t.setDirtyCanvas) == null || p.call(t, !0, !1);
    }
  }), o = t.onMouseDown;
  t.onMouseDown = function(p, N, P) {
    var D;
    try {
      if (!((D = this.flags) != null && D.collapsed)) {
        const E = Ya(this, p, N, P) || { x: 0, y: 0 }, C = Dr(this), H = Number((C == null ? void 0 : C[0]) || 0), T = Number((C == null ? void 0 : C[1]) || 0);
        if (E.x >= H - 20 && E.y >= T - 20)
          return o ? o.apply(this, arguments) : void 0;
        const O = qa(this);
        if (jf(E.x, E.y, O))
          return (p == null ? void 0 : p.button) === 0 && r.startDrag(E.x, E.y), !0;
      }
    } catch {
    }
    return o ? o.apply(this, arguments) : void 0;
  };
  const c = t.onMouseMove;
  t.onMouseMove = function(p, N, P) {
    try {
      const D = Ya(this, p, N, P);
      if (r.state.drag.active) {
        if (typeof (p == null ? void 0 : p.buttons) == "number" && (p.buttons & 1) === 0)
          return r.endDrag(), !0;
        const E = D || r.state.drag;
        return r.moveDrag(E.x, E.y, "pano"), !0;
      }
    } catch {
    }
    return c ? c.apply(this, arguments) : void 0;
  };
  const u = t.onMouseUp;
  t.onMouseUp = function() {
    return r.state.drag.active ? (r.endDrag(), !0) : u ? u.apply(this, arguments) : void 0;
  };
  const f = t.onMouseLeave;
  t.onMouseLeave = function() {
    const p = f ? f.apply(this, arguments) : void 0;
    return r.state.drag.active && r.endDrag(), p;
  };
  const g = t.onMouseWheel;
  t.onMouseWheel = function(p, N, P) {
    var D, E;
    try {
      if ((D = this.flags) != null && D.collapsed) return g ? g.apply(this, arguments) : void 0;
      const C = Ya(this, p, N, P), H = qa(this);
      if (!C || !jf(C.x, C.y, H)) return g ? g.apply(this, arguments) : void 0;
      const T = Number((p == null ? void 0 : p.deltaY) ?? (p == null ? void 0 : p.wheelDeltaY) ?? (typeof N == "number" ? N : 0));
      return r.applyWheel(Math.sign(T)) && ((E = this.setDirtyCanvas) == null || E.call(this, !0, !1)), typeof (p == null ? void 0 : p.preventDefault) == "function" && p.preventDefault(), typeof (p == null ? void 0 : p.stopPropagation) == "function" && p.stopPropagation(), !0;
    } catch {
      return g ? g.apply(this, arguments) : void 0;
    }
  };
  const y = t.onRemoved, w = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = n, t.onDrawForeground = e, t.onMouseDown = o, t.onMouseMove = c, t.onMouseUp = u, t.onMouseLeave = f, t.onMouseWheel = g, t.onRemoved = y, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = w, t.onRemoved = function() {
    return w(), Eo.unregister(this), us.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function wb(t, e) {
  const n = ds(
    t,
    ["erp_image", "bg_erp"],
    () => {
      var u, f;
      return (f = (u = t.__panoDomPreview) == null ? void 0 : u.requestDraw) == null ? void 0 : f.call(u);
    }
  ), r = Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0), o = Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0);
  if (r > 1 && o > 1)
    return {
      kind: "ERP_GLOBAL",
      width: Math.max(1, Math.round(r)),
      height: Math.max(1, Math.round(o))
    };
  const c = Math.max(1, Number((e == null ? void 0 : e.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: c,
    height: Math.max(1, Math.round(c * 0.5))
  };
}
function xb(t, e) {
  var y, w, p, N, P, D, E, C, H, T, $, O;
  const n = (w = (y = e == null ? void 0 : e.painting) == null ? void 0 : y.paint) == null ? void 0 : w.strokes, r = (N = (p = e == null ? void 0 : e.painting) == null ? void 0 : p.mask) == null ? void 0 : N.strokes, o = Array.isArray(n) && n.length > 0, c = Array.isArray(r) && r.length > 0;
  if (!o && !c) return null;
  const u = wb(t, e), f = `${u.width}x${u.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== f) && (t.__panoPreviewPaintEngine = Wc(u), t.__panoPreviewPaintDescriptorKey = f, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const g = {
    paint: n || null,
    mask: r || null,
    groups: ((P = e == null ? void 0 : e.painting) == null ? void 0 : P.groups) || null,
    rasterObjects: ((D = e == null ? void 0 : e.painting) == null ? void 0 : D.raster_objects) || null
  };
  return (((E = t.__panoPreviewPaintRevision) == null ? void 0 : E.paint) !== g.paint || ((C = t.__panoPreviewPaintRevision) == null ? void 0 : C.mask) !== g.mask || ((H = t.__panoPreviewPaintRevision) == null ? void 0 : H.groups) !== g.groups || ((T = t.__panoPreviewPaintRevision) == null ? void 0 : T.rasterObjects) !== g.rasterObjects) && (t.__panoPreviewPaintRevision = g, t.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    c ? "m1" : "m0",
    String(Array.isArray(($ = e == null ? void 0 : e.painting) == null ? void 0 : $.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((O = e == null ? void 0 : e.painting) == null ? void 0 : O.raster_objects) ? e.painting.raster_objects.length : 0)
  ].join(":"), t.__panoPreviewPaintEngine.rebuildCommitted(e)), t.__panoPreviewPaintEngine;
}
function Sb(t) {
  var n;
  return (Array.isArray((n = t == null ? void 0 : t.painting) == null ? void 0 : n.groups) ? t.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function Nb(t, e) {
  const n = xb(t, e);
  if (!n) return null;
  const r = Sb(e);
  return n.getErpTarget(r).displayPaint.canvas;
}
function Mb(t, e, n = null) {
  var f;
  const r = (f = e == null ? void 0 : e.painting_layer) == null ? void 0 : f.paint, o = Xn(r);
  if (!o) return null;
  t.__panoPaintingLayerImageCache || (t.__panoPaintingLayerImageCache = { src: "", img: null });
  const c = t.__panoPaintingLayerImageCache;
  if (c.img && c.src === o) return c.img;
  const u = new Image();
  return u.onload = () => {
    var g;
    n == null || n(), (g = t.setDirtyCanvas) == null || g.call(t, !0, !0);
  }, u.onerror = () => {
    var g;
    ((g = t.__panoPaintingLayerImageCache) == null ? void 0 : g.img) === u && (t.__panoPaintingLayerImageCache = { src: "", img: null });
  }, u.src = o, t.__panoPaintingLayerImageCache = { src: o, img: u }, u;
}
function Wf(t, e) {
  var c, u;
  const n = t == null ? void 0 : t.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((c = e == null ? void 0 : e.painting) == null ? void 0 : c.raster_objects) && e.painting.raster_objects.length > 0) {
    const f = Mb(t, e, () => {
      var g, y;
      return (y = (g = t.__panoDomPreview) == null ? void 0 : g.requestDraw) == null ? void 0 : y.call(g);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = e == null ? void 0 : e.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const o = Nb(t, e);
  return o ? {
    source: o,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function Pb(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function kb(t, e, n, r) {
  let o = (t == null ? void 0 : t[e]) || null;
  return (!o || o.width !== n || o.height !== r) && (o = document.createElement("canvas"), o.width = n, o.height = r, t[e] = o), o;
}
function Cb(t, e, n, r, o, c) {
  if (!e || !n || !(r > 0) || !(o > 0)) return;
  const u = Pb(n);
  if (u.width === r && u.height === o) {
    e.drawImage(n, 0, 0, r, o);
    return;
  }
  const g = kb(t, c, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!g) {
    e.drawImage(n, 0, 0, r, o);
    return;
  }
  try {
    g.clearRect(0, 0, u.width, u.height), g.drawImage(n, 0, 0, u.width, u.height);
    const y = g.getImageData(0, 0, u.width, u.height).data, w = e.getImageData(0, 0, r, o), p = w.data, N = Math.max(0, u.width - 1), P = Math.max(0, u.height - 1);
    for (let D = 0; D < o; D += 1) {
      const E = (D + 0.5) * u.height / o - 0.5, C = j(Math.floor(E), 0, P), H = j(C + 1, 0, P), T = j(E - C, 0, 1);
      for (let $ = 0; $ < r; $ += 1) {
        const O = ($ + 0.5) * u.width / r - 0.5, G = j(Math.floor(O), 0, N), k = j(G + 1, 0, N), ot = j(O - G, 0, 1);
        let X = 0, vt = 0, F = 0, ft = 0;
        const Q = (K, rt, et) => {
          const gt = (rt * u.width + K) * 4, xt = (y[gt + 3] || 0) / 255;
          X += xt * et, vt += (y[gt] || 0) / 255 * xt * et, F += (y[gt + 1] || 0) / 255 * xt * et, ft += (y[gt + 2] || 0) / 255 * xt * et;
        };
        if (Q(G, C, (1 - ot) * (1 - T)), Q(k, C, ot * (1 - T)), Q(G, H, (1 - ot) * T), Q(k, H, ot * T), X <= 1e-6) continue;
        const lt = (D * r + $) * 4, it = 1 - X;
        p[lt] = Math.round(j((vt + p[lt] / 255 * it) * 255, 0, 255)), p[lt + 1] = Math.round(j((F + p[lt + 1] / 255 * it) * 255, 0, 255)), p[lt + 2] = Math.round(j((ft + p[lt + 2] / 255 * it) * 255, 0, 255)), p[lt + 3] = 255;
      }
    }
    e.putImageData(w, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, r, o);
  }
}
function qf(t, e, n, r) {
  const o = Math.max(1, Number(e.naturalWidth || e.width || 0)), c = Math.max(1, Number(e.naturalHeight || e.height || 0)), f = `${String(e.currentSrc || e.src || "")}|${o}x${c}|${r}`;
  let g = t.__panoPreviewBgPaint;
  if (!g || g.__revKey !== f || g.width !== o || g.height !== c) {
    (!g || g.width !== o || g.height !== c) && (g = document.createElement("canvas"), g.width = o, g.height = c, t.__panoPreviewBgPaint = g);
    const y = g.getContext("2d");
    y.clearRect(0, 0, o, c), y.drawImage(e, 0, 0, o, c), Cb(t, y, n, o, c, "__panoPreviewOverlayScratch"), g.__revKey = f;
  }
  return g;
}
function Ab(t, e, n, r = null) {
  const o = String(t.__panoPreviewMode || "stickers");
  jh(t, o);
  const c = Ts(t), u = o === "cutout" ? lb(t, () => {
    var E, C;
    return (C = (E = t.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : C.call(E);
  }) : null, f = !!(u && u.complete && (u.naturalWidth || u.width)), g = e.parentElement, y = 1, w = Math.max(1, Number((g == null ? void 0 : g.clientWidth) || e.clientWidth || 0)), p = Math.max(1, Number((g == null ? void 0 : g.clientHeight) || e.clientHeight || 0)), N = Math.max(64, Math.round(w * y)), P = Math.max(64, Math.round(p * y)), D = e.getContext("2d");
  if (D)
    if (o === "cutout") {
      const E = db(c), C = ds(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var it, K;
          return (K = (it = t.__panoDomPreview) == null ? void 0 : it.requestDraw) == null ? void 0 : K.call(it);
        }
      ), H = !!(C && C.complete && (C.naturalWidth || C.width));
      (e.width !== N || e.height !== P) && (e.width = N, e.height = P);
      const T = { x: 0, y: 0, w: N, h: P }, $ = f ? j(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : H ? j(Number((C.naturalWidth || C.width) / Math.max(1, Number(C.naturalHeight || C.height || 1))), 0.05, 20) : 1, O = E ? Ti(E) : null, G = j(Number((O == null ? void 0 : O.aspect) || $ || 1), 0.05, 20), k = Bh(T, G), ot = tl(e, T);
      D.setTransform(1, 0, 0, 1, 0, 0), D.fillStyle = "#070707", D.fillRect(0, 0, N, P);
      const X = t == null ? void 0 : t.__panoCutoutPreviewSurface, vt = (X == null ? void 0 : X.source) || null;
      if (!!(vt && Number(vt.width || 0) > 1 && Number(vt.height || 0) > 1)) {
        D.drawImage(vt, k.x, k.y, k.w, k.h), go(t, !1), Cr(t, !1, "");
        return;
      }
      let ft = "none", Q = "Open editor and add frame", lt = "";
      if (f)
        D.drawImage(u, k.x, k.y, k.w, k.h);
      else if (lt = String((C == null ? void 0 : C.src) || ""), E)
        C && !H ? ft = "loading" : H ? (ft = "empty", Q = "Open editor or run node") : (ft = "empty", Q = "Connect ERP image");
      else {
        if (H) {
          const it = Wf(t, c), K = it != null && it.source ? qf(t, C, it.source, it.revision || "") : C;
          hb(D, K, T, 0.44);
        }
        ft = "empty", Q = "Open editor and add frame";
      }
      ft === "loading" ? (Gf(D, k, ot), go(t, !1), Cr(t, !0, lt)) : ft === "empty" ? (go(t, !0, Q), Cr(t, !1, "")) : (go(t, !1), Cr(t, !1, ""));
    } else {
      go(t, !1), (e.width !== N || e.height !== P) && (e.width = N, e.height = P);
      const E = { x: 0, y: 0, w: N, h: P }, C = tl(e, E);
      D.setTransform(1, 0, 0, 1, 0, 0), D.clearRect(0, 0, N, P), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const H = Al(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), T = Math.tan(Number(t.__panoPreviewView.fov || 100) * ni * 0.5), $ = ds(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var it, K;
          return (K = (it = t.__panoDomPreview) == null ? void 0 : it.requestDraw) == null ? void 0 : K.call(it);
        }
      ), O = !!($ && $.complete && ($.naturalWidth || $.width));
      D.fillStyle = "#1a1a1e", D.fillRect(0, 0, N, P);
      const G = Kh(t, c), k = Wh(t, c, G), ot = Cl(t.__panoPreviewView, c == null ? void 0 : c.coverage), X = Wf(t, c), vt = (X == null ? void 0 : X.source) || null, F = O && vt ? qf(t, $, vt, (X == null ? void 0 : X.revision) || "") : $, ft = F !== $ ? String(F.__revKey || "") : $ ? [
        String($.currentSrc || $.src || ""),
        Number($.naturalWidth || $.width || 0),
        Number($.naturalHeight || $.height || 0)
      ].join("|") : "", Q = O ? Gi({
        owner: t,
        cacheKey: "runtime_dom_scene",
        ctx: D,
        rect: E,
        backgroundSource: F,
        backgroundRevision: ft,
        textures: k,
        scene: G,
        view: ot
      }) : !1, lt = G.stickers;
      if (O && Q)
        Cr(t, !1, "");
      else if (O)
        hs(t, D, E, H, T, F, cs), Cr(t, !1, "");
      else if (vt)
        hs(t, D, E, H, T, vt, cs), Cr(t, !!$ && !O, String(($ == null ? void 0 : $.src) || ""));
      else {
        const it = !!$ && !O;
        Cr(t, it, String(($ == null ? void 0 : $.src) || "")), it && Gf(D, E, C);
      }
      if ((!O || lt.length === 0) && Xh(D, E, H, T, C), !Q && lt.length > 0) {
        const it = Jh(t), K = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, rt = it || K, et = rt ? 8 : 12, gt = rt ? 6 : 9;
        lt.forEach((xt) => Yh(D, t, E, H, T, c, xt, et, gt));
      } else if (!$ || !O) {
        const it = Math.max(14, Math.round(16 * C));
        D.fillStyle = "rgba(212,212,216,0.85)", D.font = `600 ${it}px Plus Jakarta Sans, Geist, sans-serif`, D.textAlign = "center", D.fillText("Open editor to add stickers", N * 0.5, P * 0.5 + 24 * C);
      }
    }
}
function hs(t, e, n, r, o, c, u = Gy) {
  const f = Ts(t), g = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  zy({
    owner: t,
    cacheKey: "runtime_pano_bg",
    ctx: e,
    rect: n,
    img: c,
    yawDeg: Number(g.yaw || 0),
    pitchDeg: Number(g.pitch || 0),
    fovDeg: Number(g.fov || 100),
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360,
    viewBasis: r,
    tanHalfY: o,
    mesh: u,
    backgroundOpacity: 1,
    resolveWrappedSource: (y) => pb(t, y)
  });
}
function Yf(t, e, n, r, o, c, u = 1) {
  let f = !1;
  t.strokeStyle = c, t.lineWidth = u, t.beginPath();
  for (const g of e) {
    const y = qh(g, n, r, o);
    if (!y) {
      f = !1;
      continue;
    }
    f ? t.lineTo(y.x, y.y) : (t.moveTo(y.x, y.y), f = !0);
  }
  t.stroke();
}
function Xh(t, e, n, r, o = 1) {
  t.save();
  const c = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const w = [];
    for (let p = -180; p <= 180; p += 15) w.push(Gr(p, y));
    Yf(t, w, n, e, r, y === 0 ? u : c, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const w = [];
    for (let p = -89; p <= 89; p += 15) w.push(Gr(y, p));
    Yf(t, w, n, e, r, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : c, y % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: Gr(0, 0) },
    { name: "Right", dir: Gr(90, 0) },
    { name: "Back", dir: Gr(180, 0) },
    { name: "Left", dir: Gr(-90, 0) }
  ];
  t.fillStyle = "rgba(250, 250, 250, 0.32)";
  const g = Math.max(9, Math.round(11 * o));
  t.font = `500 ${g}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", f.forEach((y) => {
    const w = qh(y.dir, n, e, r);
    w && t.fillText(y.name, w.x, w.y + 20 * o);
  }), t.restore();
}
function Ib(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function Zh(t) {
  const e = Ib(t);
  e.dragging = !1, e.hqFrames = Ky;
}
function ps(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function Jh(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function Eb(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function Tb(t, e, n = 20) {
  var u;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const r = (u = e.getBoundingClientRect) == null ? void 0 : u.call(e);
  if (!r) return !1;
  const o = Number(t.clientX) - Number(r.left || 0), c = Number(t.clientY) - Number(r.top || 0);
  return o >= r.width - n && c >= r.height - n;
}
function xi(t, e) {
  return Tb(t, e) ? !1 : (Eb(t), !0);
}
function Db() {
  var n;
  const t = (n = ye == null ? void 0 : ye.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function Lb(t) {
  var n;
  if (!t) return;
  const e = (n = ye == null ? void 0 : ye.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function Rb(t, e = 360, n = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const r = Dr(t), o = Number((r == null ? void 0 : r[0]) || 0), c = Number((r == null ? void 0 : r[1]) || 0);
  if (!Number.isFinite(o) || !Number.isFinite(c) || o >= e && c >= n) return;
  const u = [Math.max(e, o), Math.max(n, c)];
  try {
    typeof t.setSize == "function" ? t.setSize(u) : t.size = u, t.__panoStandaloneBootSized = !0, Xt(t, "size.bootstrap", { from: [o, c], to: u });
  } catch (f) {
    Xt(t, "size.bootstrap.error", { message: String((f == null ? void 0 : f.message) || f || "unknown") });
  }
}
function Ob(t, e = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = o > 0, !(o <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var c, u;
    t.__panoBootMinHeightTimer = null, (c = t == null ? void 0 : t.__panoDomPreview) != null && c.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, n == null || n(), (u = t.setDirtyCanvas) == null || u.call(t, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Xf(t, e = null, n = 0) {
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
      t.__panoUserResized = !0, ps(t, 150), e == null || e(), Qh(t, 180, e);
    }
  };
}
function Qh(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    t.__panoResizeSettleTimer = null, n == null || n(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function Ci(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function Fb(t, e = {}) {
  var At;
  const n = e.__allowStandalone === !0, r = Xy(t);
  if (r && !n) {
    Xt(t, "attach.skip", { reason: "standalone_preview_node", route: "blocked_legacy_path", nodeType: Rh(t) });
    return;
  }
  r && Rb(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", us.register(t);
  const o = t.__panoPreviewMode === "stickers", c = e.__noLegacyFallback === !0, u = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null;
  const f = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
  o || Eo.unregister(t);
  const g = String(e.__panoForcedPath || "").trim(), y = o ? Oh(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Jr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  o && (g === "dom" || g === "legacy_draw") && (y.chosenPath = g, y.reason = "controller_target_backend");
  const w = o ? y.chosenPath : "dom", p = y.signature || Jr(t), N = Number(t.__panoRebindGeneration || 0), P = Zc(t);
  if (Xt(t, "attach.begin", {
    nodeId: (t == null ? void 0 : t.id) ?? null,
    nodeType: f,
    mode: t.__panoPreviewMode,
    legacyFrontend: w === "legacy_draw",
    activeBackend: P,
    targetBackend: w,
    chosenPath: w,
    pathReason: y.reason,
    signature: p,
    generation: N,
    frontendVersionRaw: y.frontendVersionRaw,
    hasDomWidget: typeof t.addDOMWidget == "function",
    size: Dr(t)
  }), t.__panoFrontendSig = p, t.__panoStickersPath = w, o && Eo.register(t), o && w === "legacy_draw") {
    if (c) return;
    Vi(t, { keepMonitor: !0 }), Pa(t);
    return;
  }
  if ((At = t.__panoDomPreview) != null && At.widget) return;
  if (t.__panoLegacyPreviewHooked && Vi(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    o && !c && Pa(t);
    return;
  }
  const D = e.noPreview === !0, E = o || D ? 0 : 56, C = document.createElement("div");
  if (qy(), C.className = "pano-node-preview-dom", C.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), D && C.classList.add("pano-node-preview--no-preview"), C.setAttribute("data-capture-wheel", "true"), C.setAttribute("tabindex", "-1"), C.style.cssText = [
    "width:100%",
    D ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), D) {
    const tt = t.addDOMWidget(Xc(), "preview", C, Xf(t, null));
    Ci(t), t.__panoDomPreview = { widget: tt, root: C, requestDraw: () => {
    } }, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom";
    return;
  }
  const H = document.createElement("div");
  H.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const T = document.createElement("canvas");
  T.style.cssText = [
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
  const $ = document.createElement("div");
  $.style.cssText = [
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
  ].join(";"), $.textContent = "Open editor and add frame", H.appendChild(T), H.appendChild($), C.appendChild(H), Lh(t, 120, 120), Ci(t);
  let O = null;
  try {
    Ob(t, E, () => {
      var tt, dt;
      return (dt = (tt = t.__panoDomPreview) == null ? void 0 : tt.requestDraw) == null ? void 0 : dt.call(tt);
    }), O = t.addDOMWidget(
      Xc(),
      "preview",
      C,
      Xf(t, () => {
        var tt, dt;
        return (dt = (tt = t.__panoDomPreview) == null ? void 0 : tt.requestDraw) == null ? void 0 : dt.call(tt);
      }, E)
    );
  } catch {
    o && Pa(t);
    return;
  }
  const G = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, k = () => {
    G.needsDraw = !0, G.raf || (G.raf = requestAnimationFrame(vt));
  }, ot = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    ps(t, 150), k();
  }) : null;
  ot == null || ot.observe(H);
  const X = () => {
    if (!o || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const tt = 3, dt = (Bt) => {
      requestAnimationFrame(() => {
        var be;
        const ae = !!(C != null && C.isConnected && (H != null && H.isConnected) && (T != null && T.isConnected) && Number(H.clientHeight || 0) > 0 && Number(T.clientHeight || 0) > 0);
        if (!ae && Bt < tt) {
          dt(Bt + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, Xt(t, "probe.result", {
          mode: t.__panoPreviewMode,
          result: ae ? "dom_ok" : "dom_fail",
          wrapH: Number((H == null ? void 0 : H.clientHeight) || 0),
          canvasH: Number((T == null ? void 0 : T.clientHeight) || 0),
          attempt: Bt
        }), !ae) {
          if (c) {
            Xt(t, "path.keep", {
              route: "dom",
              reason: "probe_dom_not_ready",
              mode: t.__panoPreviewMode,
              wrapH: Number((H == null ? void 0 : H.clientHeight) || 0),
              canvasH: Number((T == null ? void 0 : T.clientHeight) || 0)
            });
            return;
          }
          Xt(t, "path.switch", {
            from: "dom",
            to: "legacy_draw",
            reason: "probe_dom_fail_fallback_legacy"
          }), Vi(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", Pa(t), (be = t.setDirtyCanvas) == null || be.call(t, !0, !0);
        }
      });
    };
    dt(1);
  }, vt = (tt) => {
    var Bt, ae, be;
    G.raf = 0;
    const dt = F.stepInertia(tt);
    (G.needsDraw || dt) && (G.needsDraw = !1, (Bt = t.flags) != null && Bt.collapsed || Ab(t, T, null, F), (ae = t.setDirtyCanvas) == null || ae.call(t, !0, !1)), (dt || G.needsDraw) && (G.raf = requestAnimationFrame(vt)), Dh() && (!t.__panoDebugLastTs || tt - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = tt, Xt(t, "dom.snapshot", {
      mode: t.__panoPreviewMode,
      nodeSize: Dr(t),
      root: po(C),
      wrap: po(H),
      canvas: po(T),
      rootParent: po(C.parentElement),
      rootGrandParent: po((be = C.parentElement) == null ? void 0 : be.parentElement),
      canvasIntrinsic: { width: Number(T.width || 0), height: Number(T.height || 0) }
    }));
  }, F = Es({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (tt) => {
      t.__panoPreviewView = tt;
    },
    onInteraction: () => {
      k();
    }
  });
  T.addEventListener("pointerdown", (tt) => {
    var dt, Bt;
    xi(tt, H) && u && tt.button === 0 && ((dt = C.focus) == null || dt.call(C), (Bt = T.setPointerCapture) == null || Bt.call(T, tt.pointerId), T.style.cursor = "grabbing", F.startDrag(tt.clientX, tt.clientY, tt.pointerId));
  }), T.addEventListener("pointermove", (tt) => {
    !u || !F.state.drag.active || (xi(tt, H), F.moveDrag(tt.clientX, tt.clientY, "pano"));
  });
  const ft = (tt) => {
    var dt;
    !u || !F.state.drag.active || (xi(tt, H), (dt = T.releasePointerCapture) == null || dt.call(T, tt.pointerId), T.style.cursor = "grab", F.endDrag(), Zh(t), k());
  };
  T.addEventListener("pointerup", ft), T.addEventListener("pointercancel", ft), T.addEventListener("pointerleave", (tt) => {
    F.state.drag.active && ft(tt);
  });
  const Q = (tt) => {
    var Bt, ae, be;
    if (Xt(t, "event", { kind: "wheel", via: "stickers", interactiveView: u }), !xi(tt, H) || !u) return;
    const dt = Db();
    F.applyWheelEvent(tt) && k(), (Bt = tt.preventDefault) == null || Bt.call(tt), (ae = tt.stopPropagation) == null || ae.call(tt), (be = tt.stopImmediatePropagation) == null || be.call(tt), requestAnimationFrame(() => {
      var ve, z;
      Lb(dt), (z = (ve = ye == null ? void 0 : ye.canvas) == null ? void 0 : ve.setDirty) == null || z.call(ve, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((tt) => {
    H.addEventListener(tt, Q, { passive: !1, capture: !0 }), T.addEventListener(tt, Q, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((tt) => {
    T.addEventListener(tt, (dt) => xi(dt, H)), H.addEventListener(tt, (dt) => xi(dt, H));
  });
  const lt = Bo(t, "state_json");
  if (lt && !lt.__panoPreviewPatchedCb) {
    lt.__panoPreviewPatchedCb = !0;
    const tt = lt.callback;
    lt.callback = (dt) => {
      const Bt = tt ? tt(dt) : void 0;
      return k(), Bt;
    };
  }
  const it = Bo(t, "bg_color");
  if (it && !it.__panoPreviewPatchedCb) {
    it.__panoPreviewPatchedCb = !0;
    const tt = it.callback;
    it.callback = (dt) => {
      const Bt = tt ? tt(dt) : void 0;
      return k(), Bt;
    };
  }
  const K = t.onRemoved, rt = t.onResize, et = t.onExecuted;
  t.onExecuted = function(tt) {
    cb(t, tt), Qc(t), Ci(t), k();
    const dt = et ? et.apply(this, arguments) : void 0;
    return Ci(t), dt;
  };
  const gt = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return Qc(t), Ci(t), k(), gt ? gt.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var dt;
    const tt = rt ? rt.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ps(this, 150), k(), (dt = this.setDirtyCanvas) == null || dt.call(this, !0, !1), tt;
  }, t.onRemoved = function() {
    return xt(), Eo.unregister(this), us.unregister(this), K ? K.apply(this, arguments) : void 0;
  };
  const xt = () => {
    var tt;
    G.raf && cancelAnimationFrame(G.raf), (tt = ot == null ? void 0 : ot.disconnect) == null || tt.call(ot), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = rt, t.onExecuted = et, t.onConnectionsChange = gt, t.onRemoved = K;
  };
  t.__panoDomRestore = xt, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: O, root: C, canvas: T, requestDraw: k, state: G, emptyHintEl: $ }, X(), k();
}
function Zf(t, e = {}) {
  Fh(t).attach({
    ...e,
    mode: "cutout"
  });
}
const ka = 140, $b = 180, Jf = 40, Ac = 10;
function Qf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":");
  return { full: e, tail: String(n[n.length - 1] || "").trim() };
}
function td(t, e) {
  const n = Qf(t), r = Qf(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function ed(t) {
  var c;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "").trim();
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e);
  const r = String(
    t.storage || (String(t.type || "").trim().toLowerCase() === "comfy_image" ? "output" : t.type) || "output"
  );
  n.set("type", r), t.subfolder && n.set("subfolder", String(t.subfolder));
  const o = `/view?${n.toString()}`;
  return typeof ((c = sn) == null ? void 0 : c.apiURL) == "function" ? sn.apiURL(o) : o;
}
function To(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return To(t[0]);
    const e = typeof t[0] == "string" ? String(t[0] || "").trim() : "";
    if (e)
      return ed({
        filename: e,
        subfolder: String(t[1] || "").trim(),
        type: String(t[2] || "output").trim() || "output"
      });
    for (const n of t) {
      const r = To(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : ed(t);
}
function nd(t) {
  var o;
  const e = (o = yn) == null ? void 0 : o.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  if (e instanceof Map) {
    for (const c of e.keys())
      if (td(c, n)) return e.get(c);
  } else
    for (const c of Object.keys(e))
      if (td(c, n)) return e[c];
  return null;
}
function Hb(t, e = "erp_image") {
  var D, E, C, H, T, $, O, G, k, ot, X, vt;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let r = null;
  const o = n.find((F) => String((F == null ? void 0 : F.name) || "") === String(e));
  if ((o == null ? void 0 : o.link) != null && (r = o.link), r == null) {
    const F = n.find((ft) => String((ft == null ? void 0 : ft.type) || "").toUpperCase() === "IMAGE" && (ft == null ? void 0 : ft.link) != null);
    (F == null ? void 0 : F.link) != null && (r = F.link);
  }
  if (r == null) return "";
  const c = ((E = (D = t == null ? void 0 : t.graph) == null ? void 0 : D.links) == null ? void 0 : E[r]) || ((T = (H = (C = yn) == null ? void 0 : C.graph) == null ? void 0 : H.links) == null ? void 0 : T[r]);
  if (!c) return "";
  const u = Number(c.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (G = (O = ($ = yn) == null ? void 0 : $.graph) == null ? void 0 : O.getNodeById) == null ? void 0 : G.call(O, u), g = nd(u), y = nd(t == null ? void 0 : t.id), w = [
    g == null ? void 0 : g.images,
    (k = g == null ? void 0 : g.ui) == null ? void 0 : k.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    (ot = y == null ? void 0 : y.ui) == null ? void 0 : ot.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const F of w)
    if (Array.isArray(F))
      for (const ft of F) {
        const Q = To(ft);
        if (Q) return Q;
      }
  let p = [];
  try {
    p = typeof ((X = yn) == null ? void 0 : X.getNodeImageUrls) == "function" ? yn.getNodeImageUrls(f) || [] : [];
  } catch {
    p = [];
  }
  if (Array.isArray(p) && p.length > 0)
    for (const F of p) {
      const ft = To(F);
      if (ft) return ft;
    }
  if (f) {
    const F = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const ft of F) {
      const Q = To(ft);
      if (Q) return Q;
    }
  }
  const N = (vt = f == null ? void 0 : f.widgets) == null ? void 0 : vt.find((F) => String((F == null ? void 0 : F.name) || "").toLowerCase() === "image"), P = String((N == null ? void 0 : N.value) || "").trim();
  return P ? sn.apiURL(`/view?filename=${encodeURIComponent(P)}&type=input&subfolder=`) : "";
}
function rd(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function id(t, e, n, r, o, c) {
  if (e.clearRect(0, 0, n, r), e.fillStyle = "#070707", e.fillRect(0, 0, n, r), !c || !c.complete || !(c.naturalWidth || c.width) || n <= 1 || r <= 1) {
    rd(e, n, r);
    return;
  }
  const u = Hy(Number(o.yaw || 0), Number(o.pitch || 0), 0), f = Math.tan(Number(o.fov || 100) * ss * 0.5);
  Gi({
    owner: t,
    cacheKey: "standalone_preview_scene",
    ctx: e,
    width: n,
    height: r,
    backgroundSource: c,
    backgroundRevision: [
      String(c.currentSrc || c.src || ""),
      Number(c.naturalWidth || c.width || 0),
      Number(c.naturalHeight || c.height || 0)
    ].join("|"),
    textures: [],
    scene: jo(null, {}),
    view: By(o)
  }) || (hs(t, e, { x: 0, y: 0, w: n, h: r }, u, f, c, cs), rd(e, n, r));
}
function od(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class Vb {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Es({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Ve(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: j(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: j(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var o, c, u, f;
        const r = (c = (o = this.canvas) == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : c.call(o);
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
      const n = e.orig.onExecuted ? e.orig.onExecuted.apply(this, arguments) : void 0;
      return e.refreshImage(), n;
    }, this.node.onConnectionsChange = function() {
      const n = e.orig.onConnectionsChange ? e.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return e.refreshImage(), n;
    }, this.node.onResize = function() {
      const n = e.orig.onResize ? e.orig.onResize.apply(this, arguments) : void 0;
      return e.requestDraw(), n;
    }, this.node.onRemoved = function() {
      const n = e.orig.onRemoved ? e.orig.onRemoved.apply(this, arguments) : void 0;
      return e.teardown(), n;
    };
  }
  installErrorForeground() {
    const e = this;
    this.node.onDrawForeground = function(n) {
      var c;
      const r = e.orig.onDrawForeground ? e.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (c = this.flags) != null && c.collapsed || !e.errorText) return r;
      const o = e.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(o.x, o.y, o.w, o.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(e.errorText, o.x + o.w * 0.5, o.y + o.h * 0.5), n.restore(), r;
    };
  }
  attachDom() {
    var e;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--stickers", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${ka}px`,
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
          return ka;
        },
        getHeight() {
          return ka;
        },
        onRemove: () => this.teardown(),
        afterResize: () => this.requestDraw()
      };
      if (this.widget = this.node.addDOMWidget("preview", "preview", this.root, n), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const c = r ? r(o) || {} : {};
          return {
            ...c,
            minHeight: Math.max(ka, Number(c.minHeight || 0)),
            minWidth: Math.max($b, Number(c.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (e = this.resizeObserver) == null || e.observe(this.root), this.bindDomInput(this.canvas, this.root), this.onResizeDom(), this.logProbeFrames();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  bindDomInput(e, n) {
    e.addEventListener("pointerdown", (o) => {
      var c, u, f;
      o.button === 0 && ((c = n.focus) == null || c.call(n, { preventScroll: !0 }), (u = e.setPointerCapture) == null || u.call(e, o.pointerId), e.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (f = o.stopImmediatePropagation) == null || f.call(o));
    }), e.addEventListener("pointermove", (o) => {
      var c;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (c = o.stopImmediatePropagation) == null || c.call(o));
    });
    const r = (o) => {
      var c, u;
      this.controller.state.drag.active && ((c = e.releasePointerCapture) == null || c.call(e, o.pointerId), e.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (u = o.stopImmediatePropagation) == null || u.call(o));
    };
    e.addEventListener("pointerup", r), e.addEventListener("pointercancel", r), n.addEventListener("wheel", (o) => {
      var c;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (c = o.stopImmediatePropagation) == null || c.call(o);
    }, { passive: !1, capture: !0 });
  }
  attachLegacy() {
    const e = this;
    this.node.onDrawForeground = function(n) {
      const r = e.orig.onDrawForeground ? e.orig.onDrawForeground.apply(this, arguments) : void 0;
      return e.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var u;
      const o = e.localPoint(r);
      if (!o) return e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
      const c = e.getLegacyPreviewRect();
      return od(o.x, o.y, c) ? (e.legacyDragPointer = !0, e.controller.startDrag(o.x - c.x, o.y - c.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var u;
      if (!e.legacyDragPointer || !e.controller.state.drag.active)
        return e.orig.onMouseMove ? e.orig.onMouseMove.apply(this, arguments) : void 0;
      const o = e.localPoint(r);
      if (!o) return !0;
      const c = e.getLegacyPreviewRect();
      return e.controller.moveDrag(o.x - c.x, o.y - c.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !e.legacyDragPointer && !e.controller.state.drag.active ? e.orig.onMouseUp ? e.orig.onMouseUp.apply(this, arguments) : void 0 : (e.legacyDragPointer = !1, e.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, o) {
      var y, w, p, N, P, D;
      const c = Ya(this, n, r, o), u = e.getLegacyPreviewRect();
      if (!c || !od(c.x, c.y, u))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof r == "number" ? r : 0));
      Number(((y = e.view) == null ? void 0 : y.fov) || 100);
      const g = e.controller.applyWheel(Math.sign(f));
      return Number(((w = e.view) == null ? void 0 : w.fov) || 100), g && ((p = this.setDirtyCanvas) == null || p.call(this, !0, !1)), (N = n == null ? void 0 : n.preventDefault) == null || N.call(n), (P = n == null ? void 0 : n.stopPropagation) == null || P.call(n), (D = n == null ? void 0 : n.stopImmediatePropagation) == null || D.call(n), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, c, u;
    const e = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - Ac * 2), n = Math.max(60, Number(((u = (c = this.node) == null ? void 0 : c.size) == null ? void 0 : u[1]) || 0) - Jf - Ac);
    return { x: Ac, y: Jf, w: e, h: n };
  }
  drawLegacy(e) {
    var r, o;
    if (!e || (o = (r = this.node) == null ? void 0 : r.flags) != null && o.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (e.save(), e.translate(n.x, n.y), id(this.node, e, n.w, n.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, n.w, n.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), e.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const e = this.root.getBoundingClientRect(), n = 1, r = Math.max(1, Math.round(e.width * n)), o = Math.max(1, Math.round(e.height * n));
    (this.canvas.width !== r || this.canvas.height !== o) && (this.canvas.width = r, this.canvas.height = o, this.requestDraw());
  }
  refreshImage() {
    const e = Hb(this.node, this.imageInputName);
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
    var o, c;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(e);
    this.canvas && this.ctx ? (id(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (c = (o = this.node).setDirtyCanvas) == null || c.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var e, n, r, o, c, u;
    if (((e = this.node) == null ? void 0 : e.__panoPreviewNodeRuntime) === this) {
      this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (r = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || r.call(n), this.resizeObserver = null;
      try {
        (c = (o = this.root) == null ? void 0 : o.remove) == null || c.call(o);
      } catch {
      }
      if (Array.isArray((u = this.node) == null ? void 0 : u.widgets) && this.widget)
        try {
          this.node.widgets = this.node.widgets.filter((f) => f !== this.widget);
        } catch {
        }
      this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved, this.node.__panoPreviewNodeRuntime = null;
    }
  }
}
function zb(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const n = new Vb(t, e);
  t.__panoPreviewNodeRuntime = n, n.attach();
}
function Ub(t, e, n) {
  if (!(t != null && t.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(e)}`;
  if (t[r]) return;
  t[r] = !0;
  const o = `[PanoramaPreview:${String(e)}]`, c = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const g = c ? c.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch (y) {
      try {
        console.warn(o, "onNodeCreated wiring skipped:", y);
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
        console.warn(o, "onConfigure wiring skipped:", y);
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
        console.warn(o, "onAdded wiring skipped:", y);
      } catch {
      }
    }
    return g;
  };
}
function tp(t) {
  return !!(t != null && t.prototype);
}
function el(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function jb(t, e = {}) {
  tp(t) || zb(t, {
    ...e,
    onOpen: el(t, e.onOpen)
  });
}
function Bb(t, e = {}) {
  if (!tp(t)) {
    Zf(t, {
      ...e,
      onOpen: el(t, e.onOpen)
    });
    return;
  }
  Ub(t, "cutout_preview", (n) => {
    Zf(n, {
      ...e,
      onOpen: el(n, e.onOpen)
    });
  });
}
function Gb(t = {}) {
  const {
    owner: e = null,
    ctx: n = null,
    rect: r = null,
    shot: o = null,
    bgImage: c = null,
    cachePrefix: u = "cutout_preview",
    quality: f = "balanced",
    drawDisplayList: g = null
  } = t;
  if (!n || !r || !o) return !1;
  const y = Ti(o), w = typeof g == "function" ? !!g(n, r, y, c, String(u || "cutout_preview")) : !1, p = !w && !!c && !!Fy(
    n,
    e,
    c,
    r,
    o,
    String(f || "balanced")
  );
  return !!w || !!p;
}
const un = {
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
}, sr = "pen";
function ad(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function Kb(t = 80, e = null, n = 8) {
  const r = [];
  let o = -1;
  const c = Math.max(1, Number(t || 80)), u = Math.max(1, Number(n || 8));
  function f(y) {
    if (r.splice(0, r.length), o = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((p) => {
      r.push(String(p || ""));
    }), !r.length)) return;
    const w = Number(y.index);
    Number.isInteger(w) ? w === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, w)) : o = r.length - 1;
  }
  function g(y) {
    r[o] !== y && (r.splice(o + 1), r.push(y), r.length > c && r.shift(), o = r.length - 1);
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
      const y = o - 1;
      return y < 0 || y >= r.length ? null : (o = y, r[o]);
    },
    redo() {
      const y = o + 1;
      return y < 0 || y >= r.length ? null : (o = y, r[o]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return o;
    },
    serialize() {
      const y = r.length, w = Math.max(0, y - u), p = o >= 0 ? Math.min(w, o) : w, N = r.slice(p), P = o < 0 ? -1 : Math.max(-1, Math.min(N.length - 1, o - p));
      return {
        version: 1,
        entries: N,
        index: P
      };
    },
    hydrate: f
  };
}
function ie(t, e = null) {
  const n = Number(t);
  return Number.isFinite(n) ? n : e;
}
function Wb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function qb(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const c = ie(r.z_index ?? r.zIndex, e.length);
    e.push({
      id: String(r.id || o),
      type: "strokeGroup",
      actionGroupId: o,
      z_index: Math.max(0, Math.round(c ?? e.length)),
      locked: r.locked === !0
    });
  }
  return e;
}
function Yb(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Xb(t, e) {
  if (!t || typeof t != "object" || !e) return null;
  const n = ie(t.t, 0), r = ie(t.widthScale, null), o = ie(t.pressureLike, null);
  if (e.kind === "ERP_GLOBAL") {
    const c = ie(t.u, null), u = ie(t.v, null);
    if (c == null || u == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (c % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), o != null && (f.pressureLike = Math.max(0, o)), f;
  }
  if (e.kind === "FRAME_LOCAL") {
    const c = ie(t.u, null), u = ie(t.v, null);
    if (c == null || u == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: e.frameId,
      u: c,
      v: u,
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), o != null && (f.pressureLike = Math.max(0, o)), f;
  }
  return null;
}
function Ca(t, e, n = 1) {
  if (!Array.isArray(t)) return null;
  const r = [];
  for (const o of t) {
    const c = Xb(o, e);
    if (!c) return null;
    r.push(c);
  }
  return r.length >= n ? r : null;
}
function Zb(t, e, n, r) {
  if (!t || typeof t != "object") return null;
  const o = String(t.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const g = Ca(t.points, e, 3);
    return g ? { geometryKind: o, points: g } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const c = Ca(t.points, e, 1);
  if (!c) return null;
  const u = Ca(t.rawPoints, e, 1), f = Ca(t.processedPoints, e, 1);
  return {
    geometryKind: o,
    points: c,
    rawPoints: u || c.map((g) => ({ ...g })),
    processedPoints: f || c.map((g) => ({ ...g }))
  };
}
function Jb(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = Yb(t.targetSpace);
  if (!n) return null;
  const r = String(t.toolKind || "").trim(), o = Zb(t.geometry, n, r, e === "paint");
  if (!o) return null;
  const c = ie(t.size, null), u = ie(t.opacity, null);
  if (c == null || u == null) return null;
  const f = String(t.id || "").trim(), g = String(t.actionGroupId || "").trim();
  if (!f || !g) return null;
  const y = ie(t.radiusValue, null), w = String(t.radiusModel || "").trim() || null;
  let p = null;
  if (e === "paint") {
    const N = t.color;
    if (!N || typeof N != "object") return null;
    p = {
      r: Math.max(0, Math.min(1, ie(N.r, 0))),
      g: Math.max(0, Math.min(1, ie(N.g, 0))),
      b: Math.max(0, Math.min(1, ie(N.b, 0))),
      a: Math.max(0, Math.min(1, ie(N.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: g,
    targetSpace: n,
    layerKind: e,
    toolKind: r,
    brushPresetId: String(t.brushPresetId || "").trim() || null,
    size: Math.max(0, c),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: ie(t.hardness, null),
    flow: ie(t.flow, null),
    spacing: ie(t.spacing, null),
    createdAt: Math.trunc(ie(t.createdAt, 0)),
    color: p,
    radiusModel: w,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: o
  };
}
function sd(t, e) {
  const n = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return n;
  for (const r of t.strokes) {
    const o = Jb(r, e);
    o && n.strokes.push(o);
  }
  return n;
}
function Qb(t) {
  if (!t || typeof t != "object") return null;
  const e = ie(t.u0, null), n = ie(t.v0, null), r = ie(t.u1, null), o = ie(t.v1, null);
  if (e == null || n == null || r == null || o == null) return null;
  const c = (f) => Math.max(0, Math.min(1, f)), u = { u0: c(e), v0: c(n), u1: c(r), v1: c(o) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function tv(t) {
  const e = t || {};
  return {
    du: ie(e.du, 0) ?? 0,
    dv: ie(e.dv, 0) ?? 0,
    rot_deg: ie(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, ie(e.scale, 1) ?? 1)
  };
}
function ev(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const n = String(t.id || "").trim();
  if (!n) return null;
  const r = String(t.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(t.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const c = Qb(t.bbox);
  return c ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, ie(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: c,
    rasterDataUrl: o,
    transform: tv(t.transform)
  } : null;
}
function nv(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    const o = ev(r, e.length);
    !o || n.has(o.id) || (n.add(o.id), e.push(o));
  }
  return e;
}
function Do(t) {
  const e = Wb();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: qb(t.groups),
    paint: sd(t.paint, "paint"),
    mask: sd(t.mask, "mask"),
    raster_objects: nv(t.raster_objects)
  };
}
const ce = {
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
}, gs = {
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
    const e = t, n = $i(() => {
      const r = { ...e.attrs };
      return e.tag === "button" && r.type == null && (r.type = e.type), e.label && (r["aria-label"] = e.label), e.tip && (r["data-tip"] = e.tip), e.pressed != null && (r["aria-pressed"] = e.pressed), r;
    });
    return (r, o) => (Me(), Bi(L0(t.tag), Sh({
      class: ["pano-btn pano-btn-icon", t.extraClass]
    }, n.value, { innerHTML: t.icon }), null, 16, ["class", "innerHTML"]));
  }
}, rv = { class: "pano-floating-right" }, iv = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (Me(), ze("div", rv, [
      n[0] || (n[0] = Ae("span", {
        class: "pano-fov-value",
        "data-fov-value": "",
        "aria-label": "Field of view"
      }, "100°", -1)),
      (Me(!0), ze(Ge, null, Oi(t.buttons, (r) => (Me(), Bi(gs, {
        key: r.action,
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { "data-action": r.action }
      }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, ov = {
  class: "pano-paint-dock is-hidden",
  "data-paint-dock": ""
}, av = ["data-paint-pane"], sv = {
  key: 0,
  class: "pano-paint-color-float",
  "data-paint-color-row": "",
  hidden: ""
}, cv = ["data-paint-color-swatch", "aria-label"], lv = ["data-paint-footer"], uv = ["data-paint-group"], fv = ["hidden"], dv = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] }
  },
  setup(t) {
    function e(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    return (n, r) => (Me(), ze("div", ov, [
      (Me(!0), ze(Ge, null, Oi(t.panes, (o) => (Me(), ze("div", {
        key: o.key,
        class: "pano-paint-pane",
        "data-paint-pane": o.key
      }, [
        o.showColorFloat ? (Me(), ze("div", sv, [
          (Me(!0), ze(Ge, null, Oi(t.paintSwatches, (c) => (Me(), ze("button", {
            key: c.id,
            class: "pano-paint-color-dot",
            type: "button",
            "data-paint-color-swatch": c.id,
            "aria-label": c.label,
            style: Ns(e(c))
          }, null, 12, cv))), 128)),
          r[0] || (r[0] = xh('<button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color"></button><div class="pano-paint-color-pop" data-paint-color-pop hidden><div class="pano-paint-color-pop-head"><span class="pano-paint-color-preview" data-paint-color-preview></span><span class="pano-paint-color-pop-label">Custom Color</span></div><div class="pano-paint-color-field"><div class="pano-paint-sv-panel" data-paint-color-sv><div class="pano-paint-sv-cursor" data-paint-color-sv-cursor></div></div><div class="pano-paint-hue-strip" data-paint-hue-strip><div class="pano-paint-hue-handle" data-paint-hue-handle></div></div></div><label class="pano-paint-color-field"><span>Opacity</span><div class="pano-paint-alpha-wrap"><input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider><span data-paint-alpha-value>100%</span></div></label><div class="pano-paint-color-history" data-paint-color-history-wrap><div class="pano-paint-color-history-list" data-paint-color-history></div></div></div>', 2))
        ])) : Ua("", !0),
        Ae("div", {
          class: "pano-paint-footer",
          "data-paint-footer": o.footer
        }, [
          Ae("div", {
            class: "pano-paint-footer-group",
            "data-paint-group": o.group
          }, [
            (Me(!0), ze(Ge, null, Oi(o.tools, (c) => (Me(), Bi(gs, {
              key: `${o.key}-${c.key}`,
              icon: c.icon,
              label: c.label,
              tip: c.tip,
              attrs: { [c.attr]: c.key }
            }, null, 8, ["icon", "label", "tip", "attrs"]))), 128))
          ], 8, uv),
          r[1] || (r[1] = Ae("div", {
            class: "pano-paint-size-row",
            "data-paint-size-row": "",
            hidden: ""
          }, [
            Ae("input", {
              class: "pano-paint-size-slider",
              "data-paint-size-slider": "",
              type: "range",
              min: "1",
              max: "120",
              step: "1",
              value: "10"
            }),
            Ae("span", {
              class: "pano-paint-size-value",
              "data-paint-size-value": ""
            }, "10")
          ], -1)),
          Ae("div", {
            class: "pano-paint-clear-row",
            "data-paint-clear-row": "",
            hidden: o.clearHidden
          }, [
            cn(gs, {
              icon: bl(ce).clear,
              label: o.clearLabel,
              tip: o.clearTip,
              "extra-class": "pano-paint-layer-clear",
              attrs: { "data-paint-layer-clear-current": o.clearTarget }
            }, null, 8, ["icon", "label", "tip", "attrs"])
          ], 8, fv)
        ], 8, lv)
      ], 8, av))), 128))
    ]));
  }
}, hv = {
  class: "pano-side",
  "data-side": ""
}, pv = { class: "pano-side-head" }, gv = ["innerHTML"], mv = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" }
  },
  setup(t) {
    const e = t;
    function n(o) {
      return String(o || "").replace(/[&<>"']/g, (c) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[c]);
    }
    const r = $i(() => `<span class="pano-side-title-icon" aria-hidden="true">${ce.globe}</span><span>${n(e.nodeTitle)}</span>`);
    return (o, c) => (Me(), ze("div", hv, [
      Ae("div", pv, [
        Ae("div", {
          class: "pano-side-title",
          innerHTML: r.value
        }, null, 8, gv),
        c[0] || (c[0] = Ae("div", { class: "pano-side-actions" }, null, -1))
      ]),
      c[1] || (c[1] = Ae("div", { class: "pano-divider" }, null, -1))
    ]));
  }
}, yv = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, bv = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (Me(), ze("div", yv, [
      (Me(!0), ze(Ge, null, Oi(t.buttons, (r) => (Me(), Bi(gs, {
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
}, vv = { class: "pano-floating-top" }, _v = ["data-view-count"], wv = ["data-view", "aria-pressed", "aria-label"], xv = ["innerHTML"], Sv = { class: "label" }, Nv = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (Me(), ze("div", vv, [
      Ae("div", {
        class: "pano-view-toggle",
        "data-selected": "pano",
        "data-view-count": String(t.buttons.length)
      }, [
        (Me(!0), ze(Ge, null, Oi(t.buttons, (r) => (Me(), ze("button", {
          key: r.key,
          class: Ms(["pano-view-btn", r.extraClass]),
          "data-view": r.key,
          "aria-pressed": r.pressed,
          "aria-label": r.label
        }, [
          Ae("span", {
            innerHTML: r.icon
          }, null, 8, xv),
          Ae("span", Sv, Nd(r.label), 1)
        ], 10, wv))), 128))
      ], 8, _v)
    ]));
  }
};
function ep(t = "stickers") {
  const e = String(t || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: ce.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: ce.unwrap, pressed: "false", extraClass: "" },
      ...e ? [{ key: "frame", label: "Frame", icon: ce.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: ce.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: ce.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: ce.circle_dashed_tool, pressed: "false" },
      ...e ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: ce.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: ce.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: ce.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: ce.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: ce.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: ce.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: ce.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: ce.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: ce.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: ce.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: ce.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: ce.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: ce.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: ce.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: ce.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: ce.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: ce.lasso_tool }
        ]
      }
    ]
  };
}
const Mv = ["aria-label"], Pv = { class: "pano-stage-wrap" }, kv = ["innerHTML"], Cv = {
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
    let o = "", c = !1, u = null;
    const f = /* @__PURE__ */ i0(null), g = $i(() => n.readOnly === !0), y = $i(() => n.shellPreset || ep(n.type)), w = $i(() => {
      var $;
      const T = Array.isArray(($ = y.value) == null ? void 0 : $.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return g.value && T.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ce.fullscreen
      }), T;
    });
    function p() {
      const T = f.value;
      return T ? Array.from(T.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter(($) => $ instanceof HTMLElement ? !$.hidden && $.tabIndex >= 0 && $.offsetParent !== null : !1) : [];
    }
    function N() {
      var O;
      const $ = p()[0] || f.value;
      (O = $ == null ? void 0 : $.focus) == null || O.call($);
    }
    function P() {
      var T;
      u != null && u.isConnected && ((T = u.focus) == null || T.call(u)), u = null;
    }
    function D(T) {
      var $, O, G, k;
      if (!T.defaultPrevented) {
        if (T.key === "Tab") {
          const ot = p();
          if (!ot.length) {
            T.preventDefault(), (O = ($ = f.value) == null ? void 0 : $.focus) == null || O.call($);
            return;
          }
          const X = ot[0], vt = ot[ot.length - 1], F = document.activeElement;
          if (T.shiftKey) {
            (F === X || F === f.value || !((G = f.value) != null && G.contains(F))) && (T.preventDefault(), vt.focus());
            return;
          }
          (F === vt || !((k = f.value) != null && k.contains(F))) && (T.preventDefault(), X.focus());
          return;
        }
        T.key === "Escape" && r("close");
      }
    }
    function E() {
      c || (o = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function C() {
      c && (document.body.style.overflow = o, c = !1);
    }
    function H(T) {
      document.removeEventListener("keydown", D), T ? (u || (u = document.activeElement), E(), document.addEventListener("keydown", D), Ud(() => {
        N();
      })) : (C(), P());
    }
    return Jd(() => {
      H(n.open);
    }), Qd(() => {
      C(), document.removeEventListener("keydown", D), P();
    }), Ha(() => n.open, (T) => {
      H(T);
    }), (T, $) => t.open ? (Me(), ze("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: $[0] || ($[0] = K1((O) => r("close"), ["self"]))
    }, [
      Ae("section", {
        ref_key: "modalRef",
        ref: f,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": t.nodeTitle,
        tabindex: "-1"
      }, [
        Ae("div", Pv, [
          $[1] || ($[1] = xh('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          g.value ? Ua("", !0) : (Me(), ze(Ge, { key: 0 }, [
            cn(bv, {
              buttons: y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            cn(dv, {
              "paint-swatches": t.paintSwatches,
              panes: y.value.paintPanes || []
            }, null, 8, ["paint-swatches", "panes"])
          ], 64)),
          cn(Nv, {
            buttons: y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          cn(iv, { buttons: w.value }, null, 8, ["buttons"]),
          $[2] || ($[2] = Ae("div", {
            class: "pano-selection-menu",
            "data-selection-menu": ""
          }, null, -1)),
          Ae("button", {
            class: "pano-btn pano-btn-icon pano-output-preview-toggle",
            "data-action": "toggle-output-preview-size",
            "aria-label": "Expand Preview",
            "data-tip": "Expand preview",
            style: { display: "none" },
            innerHTML: bl(ce).fullscreen
          }, null, 8, kv),
          $[3] || ($[3] = Ae("div", {
            class: "pano-tooltip",
            "data-tooltip": ""
          }, null, -1))
        ]),
        t.hideSidebar ? Ua("", !0) : (Me(), Bi(mv, {
          key: 0,
          "node-title": t.nodeTitle
        }, null, 8, ["node-title"]))
      ], 8, Mv)
    ])) : Ua("", !0);
  }
}, ms = "state_json", jr = "sticker_image_1", Ic = "external_image", Ec = "pano_sticker_input_images", Xa = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], He = Math.PI / 180, Wr = 180 / Math.PI, ys = 24, Av = 4, Iv = 4, xo = /* @__PURE__ */ new Map(), nl = /* @__PURE__ */ new Map(), So = /* @__PURE__ */ new Map(), Lt = {
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
function on(t) {
  return Number(t) === 180 ? 180 : 360;
}
function cd(t) {
  return on(t) === 180 ? "180° Front" : "360° Full";
}
function Ev(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function Tv(t) {
  return 1 - Math.pow(1 - t, 3);
}
function Dv(t) {
  return t * t * t;
}
function Zn(t, e, n) {
  return { x: t, y: e, z: n };
}
function Aa(t, e) {
  return Zn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Ia(t, e) {
  return Zn(t.x * e, t.y * e, t.z * e);
}
function Cn(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Ea(t, e) {
  return Zn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Si(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Zn(t.x / e, t.y / e, t.z / e);
}
function jn(t, e) {
  const n = t * He, r = e * He, o = Math.cos(r);
  return Zn(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Ta(t) {
  return {
    yaw: Ve(Math.atan2(t.x, t.z) * Wr),
    pitch: j(Math.asin(j(t.y, -1, 1)) * Wr, -90, 90)
  };
}
function cr(t, e) {
  let n = !1;
  for (let r = 0, o = e.length - 1; r < e.length; o = r++) {
    const c = e[r].x, u = e[r].y, f = e[o].x, g = e[o].y;
    u > t.y != g > t.y && t.x < (f - c) * (t.y - u) / (g - u || 1e-6) + c && (n = !n);
  }
  return n;
}
function Kr(t, e) {
  const n = t.x - e.x, r = t.y - e.y;
  return n * n + r * r;
}
function Tc(t, e, n) {
  const r = Number(n.x || 0) - Number(e.x || 0), o = Number(n.y || 0) - Number(e.y || 0), c = Number(t.x || 0) - Number(e.x || 0), u = Number(t.y || 0) - Number(e.y || 0), f = r * r + o * o;
  if (f <= 1e-6) return Kr(t, e);
  const g = j((c * r + u * o) / f, 0, 1), y = Number(e.x || 0) + r * g, w = Number(e.y || 0) + o * g, p = Number(t.x || 0) - y, N = Number(t.y || 0) - w;
  return p * p + N * N;
}
function An(t, e, n) {
  return t + (e - t) * n;
}
function In(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${j(n, 0, 1)})`;
}
function Lv(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let Da = { fillStyle: "", url: "" };
function Rv(t, e, n) {
  if (Da.url && Da.fillStyle === String(t || ""))
    return Da.url;
  const r = Lv(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ys}" height="${ys}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Da = { fillStyle: String(t || ""), url: r }, r;
}
function Za(t, e, n = 0.015) {
  return !t || !e ? !1 : Math.abs(Number(t.r ?? 0) - Number(e.r ?? 0)) <= n && Math.abs(Number(t.g ?? 0) - Number(e.g ?? 0)) <= n && Math.abs(Number(t.b ?? 0) - Number(e.b ?? 0)) <= n && Math.abs(Number(t.a ?? 1) - Number(e.a ?? 1)) <= n;
}
function mn(t) {
  return {
    r: j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1),
    g: j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1),
    b: j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1),
    a: j(Number((t == null ? void 0 : t.a) ?? 1), 0, 1)
  };
}
function nn(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function Ov(t) {
  return Xa.some((e) => Za(t, e.color));
}
function Dc(t, e, n) {
  const r = (Number(t) % 1 + 1) % 1, o = j(Number(e), 0, 1), c = j(Number(n), 0, 1);
  if (o <= 1e-6) return { r: c, g: c, b: c };
  const u = Math.floor(r * 6), f = r * 6 - u, g = c * (1 - o), y = c * (1 - f * o), w = c * (1 - (1 - f) * o);
  switch (u % 6) {
    case 0:
      return { r: c, g: w, b: g };
    case 1:
      return { r: y, g: c, b: g };
    case 2:
      return { r: g, g: c, b: w };
    case 3:
      return { r: g, g: y, b: c };
    case 4:
      return { r: w, g, b: c };
    default:
      return { r: c, g, b: y };
  }
}
function mo(t) {
  const e = j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), n = j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), r = j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), o = Math.max(e, n, r), c = Math.min(e, n, r), u = o - c;
  let f = 0;
  u > 1e-6 && (o === e ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : o === n ? f = ((r - e) / u + 2) / 6 : f = ((e - n) / u + 4) / 6);
  const g = o <= 1e-6 ? 0 : u / o;
  return { h: f, s: g, v: o };
}
function Lc(t) {
  const e = Number(t);
  return Number.isFinite(e) ? Number(e.toFixed(3)).toString() : "0";
}
function ld(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : Number(e);
}
function np(t, e) {
  const n = ld(t, 1), r = ld(e, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, c = Math.max(1, Math.round(n * o)), u = Math.max(1, Math.round(r * o)), f = (p, N) => N ? f(N, p % N) : p, g = f(c, u) || 1, y = Math.max(1, Math.round(c / g)), w = Math.max(1, Math.round(u / g));
  return `${y}:${w}`;
}
function rl(t) {
  const e = j(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * He, n = j(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * He;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Fv(t) {
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
  for (const [o, c] of n)
    if (Math.abs(e - c) <= r) return o;
  return "";
}
function qr(t) {
  const e = rl(t);
  return Fv(e) || np(e, 1);
}
function $v(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = qr(e), e;
}
function Ni(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : qr(t);
}
let La = null;
function Hv() {
  return La || (La = new Promise((t) => {
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
  }), La);
}
const rp = "pano_suite.ui_settings.v1", ip = "pano_suite.node_grid_visibility.v1";
let Ai = null, Bn = null, Ra = { text: null, parsed: null };
function Lo(t) {
  const e = t && typeof t == "object" ? t : {}, n = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function Vv() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(rp)) || "").trim();
    if (!e) return Ai ? Lo(Ai) : null;
    const n = JSON.parse(e), r = Lo(n);
    return Ai = r, r;
  } catch {
    return Ai ? Lo(Ai) : null;
  }
}
function zv(t) {
  var n;
  const e = Lo(t);
  Ai = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(rp, JSON.stringify(e));
  } catch {
  }
  return e;
}
function op() {
  var t;
  if (Bn && typeof Bn == "object")
    return Bn;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(ip)) || "").trim();
    if (!e)
      return Bn = {}, Bn;
    const n = JSON.parse(e);
    return Bn = n && typeof n == "object" ? n : {}, Bn;
  } catch {
    return Bn = {}, Bn;
  }
}
function Uv(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const o = op()[n];
  return typeof o == "boolean" ? o : !!e;
}
function jv(t, e) {
  var o;
  const n = String(t ?? "").trim();
  if (!n) return;
  const r = op();
  r[n] = !!e, Bn = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(ip, JSON.stringify(r));
  } catch {
  }
}
function Bv(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([n, r]) => {
    e[n] = r && typeof r == "object" ? { ...r } : r;
  }), e;
}
function Gv(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const n = { ...e };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Kv(t) {
  var r, o;
  const e = Array.isArray((r = t == null ? void 0 : t.paint) == null ? void 0 : r.strokes) ? t.paint.strokes.length : 0, n = Array.isArray((o = t == null ? void 0 : t.mask) == null ? void 0 : o.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: n };
}
function ud(t) {
  const { paintCount: e, maskCount: n } = Kv(t), r = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
  let o = 0, c = 0;
  return r.forEach((u) => {
    String((u == null ? void 0 : u.layerKind) || "paint") === "mask" ? c += 1 : o += 1;
  }), {
    paintCount: e,
    maskCount: n,
    paintRasterCount: o,
    maskRasterCount: c,
    totalPaintCount: e + o,
    totalMaskCount: n + c
  };
}
function Mi(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function fd(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function Wv(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : $v(e)) : [];
}
function qv(t, e = 2048, n = "#00ff00", r = 360) {
  const o = Vv(), c = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: on(r),
    bg_color: n,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Do(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(o != null && o.invert_view_x),
      invert_view_y: !!(o != null && o.invert_view_y),
      preview_quality: String((o == null ? void 0 : o.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, u = String(t || "").trim();
  if (!u) return c;
  try {
    let f = null;
    if (Ra.text === u ? f = Ra.parsed : (f = JSON.parse(u), Ra = { text: u, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return c;
    const g = {
      ...c,
      ...f,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Bv(f.assets),
      stickers: Gv(f.stickers),
      shots: Wv(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: Do(f.painting),
      painting_layer: f.painting_layer && typeof f.painting_layer == "object" ? f.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(f.ui_settings && f.ui_settings.invert_view_x),
        invert_view_y: !!(f.ui_settings && f.ui_settings.invert_view_y),
        preview_quality: (() => {
          var w;
          const y = String(((w = f.ui_settings) == null ? void 0 : w.preview_quality) || "balanced");
          return y === "draft" || y === "balanced" || y === "high" ? y : "balanced";
        })()
      },
      active: f.active && typeof f.active == "object" ? { ...f.active } : { ...c.active }
    };
    return o && (g.ui_settings = Lo({ ...g.ui_settings, ...o })), g.output_preset = ol(e, Number(g.output_preset || c.output_preset)), g.bg_color = String(n || g.bg_color || c.bg_color), g.coverage = on(r), delete g.editor_history, g;
  } catch {
    return Ra = { text: u, parsed: null }, c;
  }
}
function _n(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function ap(t) {
  if (!t || t.__panoCoverageWidgetSyncInstalled) return;
  const e = _n(t, "coverage");
  if (!e) return;
  const n = typeof e.callback == "function" ? e.callback.bind(e) : null;
  e.callback = function(...r) {
    var c, u, f, g, y, w, p, N;
    const o = n ? n(...r) : void 0;
    return t.__panoStateCache = null, t.__panoLiveStateOverride = null, t.__panoWrappedErpCache = null, t.__panoPanoBackgroundCache = null, (u = (c = t.__panoDomPreview) == null ? void 0 : c.requestDraw) == null || u.call(c), (f = t.setDirtyCanvas) == null || f.call(t, !0, !0), (y = (g = t.graph) == null ? void 0 : g.setDirtyCanvas) == null || y.call(g, !0, !0), (N = (p = (w = yn) == null ? void 0 : w.canvas) == null ? void 0 : p.setDirty) == null || N.call(p, !0, !0), o;
  }, t.__panoCoverageWidgetSyncInstalled = !0;
}
function Yv(t) {
  const e = String(t ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(e) || /^#?[0-9a-fA-F]{3}$/.test(e);
}
function dd(t) {
  const e = String(t ?? "").trim();
  return e.startsWith("{") && e.endsWith("}");
}
function Xv(t) {
  var P, D, E, C, H;
  if (!t || t.__panoCoverageWidgetOrderMigrated) return;
  const e = _n(t, "coverage"), n = _n(t, "bg_color"), r = _n(t, ms), o = _n(t, "sticker_state");
  if (!e || !n || !r) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const c = String(e.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(c) && Yv(c) && (dd(u) || u === ""))) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (dd(u))
    try {
      const T = JSON.parse(u);
      y = String(on(T == null ? void 0 : T.coverage));
    } catch {
      y = "360";
    }
  const w = c, p = u, N = f;
  e.value = y, (P = e.callback) == null || P.call(e, y), n.value = w, (D = n.callback) == null || D.call(n, w), r.value = p, (E = r.callback) == null || E.call(r, p), o && (o.value = N, (C = o.callback) == null || C.call(o, N)), (H = t.setDirtyCanvas) == null || H.call(t, !0, !0), t.__panoCoverageWidgetOrderMigrated = !0;
}
function Oa(t) {
  return String(t ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function Zv(t, e) {
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
function Jv(t, e) {
  (Array.isArray(t == null ? void 0 : t.widgets) ? t.widgets : []).forEach((r) => {
    var c, u;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === e || o.trim() === e || o.toLowerCase().includes(String(e).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (c = r.inputEl) != null && c.style && (r.inputEl.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function il(t, e, n) {
  var c, u;
  if (!t || typeof t.addWidget != "function") return null;
  let o = (Array.isArray(t.widgets) ? t.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(e));
  return o ? (o.callback = n, o.hidden = !1, o.__panoHidden = !1, o.type = "button", (c = o.inputEl) != null && c.style && (o.inputEl.style.display = ""), (u = o.parentEl) != null && u.style && (o.parentEl.style.display = ""), (typeof o.computeSize != "function" || o.computeSize() == null || o.hidden) && (o.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = t == null ? void 0 : t.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), o) : (o = t.addWidget("button", e, null, n), o && (o.serialize = !1), o);
}
function yo(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function ol(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : e;
}
function Qv() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function hd(t, e) {
  Qv() && console.warn(`[PANO_PAINT][${t}]`, e);
}
function sp(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function t_(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function cp(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function e_(t, e, n = null) {
  var o, c;
  let r = null;
  try {
    r = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const u = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, f = u ? (c = r.resolveSubgraphOutputLink) == null ? void 0 : c.call(r, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = t_(t == null ? void 0 : t.graph, n)), r;
}
function bs(t) {
  var o;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const r = `/view?${n.toString()}`;
  return typeof ((o = sn) == null ? void 0 : o.apiURL) == "function" ? sn.apiURL(r) : r;
}
function n_(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function r_(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), c = r.join("/");
  return { filename: o, subfolder: c };
}
function i_(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), e.push(o));
  }), e;
}
function lp(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (n_(e)) return [e];
  const { filename: n, subfolder: r } = r_(e);
  if (!n) return [e];
  const o = ["temp", "output", "input"].map((c) => bs({
    filename: n,
    subfolder: r,
    type: c
  }));
  return i_([...o, e]);
}
function o_(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? bs({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function Ro(t) {
  var r;
  const e = (r = yn) == null ? void 0 : r.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  return e instanceof Map ? e.get(t) || e.get(n) || e.get(Number(n)) || null : e[t] || e[n] || null;
}
function ji(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return ji(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return bs({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = ji(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : bs(t);
}
function a_(t, e = -1) {
  var o;
  const n = [];
  Array.isArray(t == null ? void 0 : t.images) && t.images.length && n.push(t.images), Array.isArray((o = t == null ? void 0 : t.ui) == null ? void 0 : o.images) && t.ui.images.length && n.push(t.ui.images);
  const r = [];
  for (const c of n)
    !Array.isArray(c) || !c.length || (e >= 0 && e < c.length && r.push(c[e]), r.push(...c));
  return r;
}
function Rc(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t || []) {
    const o = ji(r);
    !o || n.has(o) || (n.add(o), e.push(o));
  }
  return e;
}
function s_(t, e, n, r = null) {
  var p;
  const o = Ro(t == null ? void 0 : t.id), c = Array.isArray((p = o == null ? void 0 : o.ui) == null ? void 0 : p[e]) ? o.ui[e] : Array.isArray(o == null ? void 0 : o[e]) ? o[e] : [], u = Array.isArray(c) && c.length ? c[0] : null, f = ji(u);
  if (!f) return null;
  const g = `__ui__${e}`, y = n.get(g);
  if (y && y.__panoSrc === f) return y;
  const w = new Image();
  return w.__panoSrc = f, w.onload = () => {
    typeof r == "function" && r(w);
  }, w.src = f, n.set(g, w), w;
}
function c_(t, e) {
  var T, $;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], o = r.findIndex((O) => String((O == null ? void 0 : O.name) || "") === n);
  if (o < 0) return { src: "", sourceType: "", inputName: n };
  const c = r[o], u = c == null ? void 0 : c.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = sp(t.graph, u), { originId: g, originSlot: y } = cp(f);
  if (g == null) return { src: "", sourceType: "", inputName: n };
  const w = e_(t, o, g), p = Number(y || 0);
  if (!w) return { src: "", sourceType: "", inputName: n };
  let N = [];
  try {
    N = typeof ((T = yn) == null ? void 0 : T.getNodeImageUrls) == "function" ? yn.getNodeImageUrls(w) || [] : [];
  } catch {
    N = [];
  }
  if (Array.isArray(N) && N.length) {
    const O = [];
    p >= 0 && p < N.length && O.push(N[p]), O.push(...N);
    const G = Rc(O);
    if (G.length) return { src: G[0], srcCandidates: G, sourceType: "appNodeImageUrls", inputName: n };
  }
  const P = Ro((w == null ? void 0 : w.id) ?? g), D = a_(P, p), E = Rc(D);
  if (E.length) return { src: E[0], srcCandidates: E, sourceType: "nodeOutputs", inputName: n };
  const C = Array.isArray(w == null ? void 0 : w.imgs) ? w.imgs : [];
  if (C.length) {
    const O = [];
    p >= 0 && p < C.length && O.push(C[p]), O.push(...C);
    const G = Rc(O);
    if (G.length) return { src: G[0], srcCandidates: G, sourceType: "nodeImgs", inputName: n };
  }
  const H = ($ = w == null ? void 0 : w.widgets) == null ? void 0 : $.find((O) => String((O == null ? void 0 : O.name) || "").toLowerCase() === "image");
  if (H) {
    let O = ji(H.value);
    if (O && !O.includes("/") && !O.includes(":") && (w.comfyClass === "LoadImage" || w.type === "LoadImage") && (O = sn.apiURL(`/view?filename=${encodeURIComponent(O)}&type=input&subfolder=`)), O) return { src: O, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function l_(t, e, n, r = null) {
  const o = String(n || "").trim();
  if (!o) return null;
  const c = lp(o);
  if (!c.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(e || "image"), f = t.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === o && f.img) return f.img;
  const g = new Image(), y = { srcRaw: o, resolvedSrc: "", img: g };
  t.__panoLinkedInputImageCache.set(u, y);
  let w = -1;
  const p = () => {
    var P, D;
    if (w += 1, w >= c.length) {
      try {
        (D = (P = t.__panoLinkedInputImageCache) == null ? void 0 : P.delete) == null || D.call(P, u);
      } catch {
      }
      return;
    }
    const N = c[w];
    y.resolvedSrc = N, g.src = N;
  };
  return g.onload = () => {
    var N;
    r == null || r(), (N = t.setDirtyCanvas) == null || N.call(t, !0, !0);
  }, g.onerror = () => {
    var N, P;
    if (w + 1 < c.length) {
      p();
      return;
    }
    try {
      (P = (N = t.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || P.call(N, u);
    } catch {
    }
  }, p(), g;
}
function u_(t, e, n, r = null) {
  const o = Array.isArray(n) ? n.map((D) => String(D || "").trim()).filter(Boolean) : [];
  if (!o.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = String(e || "image"), u = o.join(`
`), f = t.__panoLinkedInputImageCache.get(c);
  if (f && f.srcRaw === u && f.img) return f.img;
  const g = [], y = /* @__PURE__ */ new Set();
  if (o.forEach((D) => {
    lp(D).forEach((E) => {
      const C = String(E || "").trim();
      !C || y.has(C) || (y.add(C), g.push(C));
    });
  }), !g.length) return null;
  const w = new Image(), p = { srcRaw: u, resolvedSrc: "", img: w };
  t.__panoLinkedInputImageCache.set(c, p);
  let N = -1;
  const P = () => {
    var E, C;
    if (N += 1, N >= g.length) {
      try {
        (C = (E = t.__panoLinkedInputImageCache) == null ? void 0 : E.delete) == null || C.call(E, c);
      } catch {
      }
      return;
    }
    const D = g[N];
    p.resolvedSrc = D, w.src = D;
  };
  return w.onload = () => {
    var D;
    r == null || r(), (D = t.setDirtyCanvas) == null || D.call(t, !0, !0);
  }, w.onerror = () => {
    var D, E;
    if (N + 1 < g.length) {
      P();
      return;
    }
    try {
      (E = (D = t.__panoLinkedInputImageCache) == null ? void 0 : D.delete) == null || E.call(D, c);
    } catch {
    }
  }, P(), w;
}
function up(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const r of n) {
    const o = c_(t, r);
    if (String((o == null ? void 0 : o.src) || "").trim()) return o;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function pd(t, e = [], n = null, r = "") {
  const o = Array.isArray(e) ? e : [e], c = up(t, o), u = String(r || o.join("|") || "image_exact"), f = Array.isArray(c == null ? void 0 : c.srcCandidates) ? c.srcCandidates : [];
  if (f.length) return u_(t, u, f, n);
  const g = String((c == null ? void 0 : c.src) || "").trim();
  return g ? l_(t, u, g, n) : null;
}
async function Oo(t, e, n = {}) {
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, c = r, u = Zv(t, e);
  await Hv();
  const f = _n(t, "output_preset"), g = _n(t, "coverage"), y = _n(t, "bg_color"), w = _n(t, ms), p = qv(
    String((w == null ? void 0 : w.value) || ""),
    ol(f == null ? void 0 : f.value, 2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    on(g == null ? void 0 : g.value)
  );
  t.__panoLiveStateOverride = JSON.stringify(p), e === "cutout" && (p.shots = Array.isArray(p.shots) ? p.shots.slice(0, 1) : [], p.shots.length || (p.active.selected_shot_id = null));
  const N = document.createElement("div");
  document.body.appendChild(N);
  const P = Y1(Cv, {
    open: !0,
    type: e,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: u,
    shellPreset: ep(e),
    paintSwatches: Xa.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: In(i.color, 1)
    })),
    onClose: () => mi()
  });
  try {
    P.mount(N);
  } catch (i) {
    try {
      P.unmount();
    } catch {
    }
    throw N.remove(), i;
  }
  const D = N.querySelector(".pano-modal-overlay"), E = N.querySelector(".pano-modal"), C = E == null ? void 0 : E.querySelector("[data-stage-overlay]"), H = E == null ? void 0 : E.querySelector("[data-stage-background]"), T = E == null ? void 0 : E.querySelector(".pano-stage-wrap");
  if (!D || !E || !C || !H || !T)
    throw P.unmount(), N.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const $ = document.createElement("div");
  $.setAttribute("aria-hidden", "true"), $.style.position = "absolute", $.style.left = "0", $.style.top = "0", $.style.pointerEvents = "none", $.style.zIndex = "12", $.style.display = "none", $.style.willChange = "transform,width,height,background,border-radius", T == null || T.appendChild($);
  const O = document.createElement("div");
  O.className = "pano-paint-size-preview", O.setAttribute("aria-hidden", "true");
  const G = document.createElement("div");
  G.className = "pano-paint-size-preview-sample", O.appendChild(G), T == null || T.appendChild(O);
  const k = C.getContext("2d"), ot = Ch({ targetCanvas: H }), X = E.querySelector("[data-side]"), vt = E.querySelectorAll("[data-view]"), F = E.querySelector(".pano-view-toggle"), ft = E.querySelector("[data-fov-value]"), Q = E.querySelector("[data-selection-menu]"), lt = E.querySelector("[data-action='toggle-output-preview-size']"), it = E.querySelector("[data-tool-ui-action='add-or-look']"), K = E.querySelector("[data-view='frame']"), rt = E.querySelector("[data-action='toggle-fullscreen']"), et = E.querySelector("[data-tooltip]"), gt = E.querySelector("[data-tool-rail]"), xt = E.querySelector("[data-paint-dock]"), At = Array.from(E.querySelectorAll("[data-paint-pane]")), tt = E.querySelector("[data-paint-color-row]"), dt = E.querySelector("[data-paint-color-pop]"), Bt = E.querySelector("[data-paint-color-preview]"), ae = E.querySelector("[data-paint-color-sv]"), be = E.querySelector("[data-paint-color-sv-cursor]"), ve = E.querySelector("[data-paint-hue-strip]"), z = E.querySelector("[data-paint-hue-handle]"), Pt = E.querySelector("[data-paint-alpha-slider]"), Mt = E.querySelector("[data-paint-alpha-value]"), Rt = E.querySelector("[data-paint-color-history-wrap]"), jt = E.querySelector("[data-paint-color-history]"), A = Array.from(E.querySelectorAll("[data-paint-size-row]")), R = Array.from(E.querySelectorAll("[data-paint-clear-row]")), U = Array.from(E.querySelectorAll("[data-paint-layer-clear-current]")), J = Array.from(E.querySelectorAll("[data-paint-size-slider]")), Y = Array.from(E.querySelectorAll("[data-paint-size-value]"));
  let q = 0, nt = 0;
  T == null || T.removeAttribute("data-stage-ready"), T == null || T.setAttribute("data-stage-loading-kind", "boot"), C.style.opacity = "1", H.style.opacity = "0", o && (X == null || X.remove(), E.classList.add("pano-modal-readonly"));
  function ut(i) {
    xt && xt.classList.toggle("is-hidden", !i);
  }
  const mt = () => {
    if (!d.customPaintSessionStart) return;
    if (Za(d.customPaintSessionStart, d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    if (Ov(d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    const i = [
      mn(d.customPaintColor),
      ...d.customPaintHistory.filter((a) => !Za(a, d.customPaintColor))
    ];
    d.customPaintHistory = i.slice(0, 8), d.customPaintSessionStart = null;
  }, at = (i = !1) => {
    !dt || dt.hidden || (i ? mt() : d.customPaintSessionStart = null, dt.hidden = !0);
  }, It = () => {
    dt && (dt.hidden && (d.customPaintSessionStart = mn(d.customPaintColor)), dt.hidden = !1);
  };
  E.addEventListener("pointerdown", (i) => {
    ua(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (E.querySelectorAll(".pano-picker-pop").forEach((a) => {
      a.hidden = !0;
    }), at(!0), e === "cutout" && d.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (d.cutoutAspectOpen = !1, d.menuMode = "", d.menuSize.measured = !1, Gt(), pt())));
  });
  const Nt = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, Ct = JSON.stringify(fd(p)), d = {
    mode: "pano",
    selectedId: Nt,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: on(p.coverage),
    historyController: Kb(80, { entries: [Ct], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: sr,
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
    showGrid: Uv(t == null ? void 0 : t.id, !0),
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
    paintEngine: Wc(),
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
  e === "stickers" && (d.selectedId = null, p.active.selected_sticker_id = null), d.selectedIds = d.selectedId ? [d.selectedId] : [];
  const $t = /* @__PURE__ */ new Map(), Zt = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new Map(), de = /* @__PURE__ */ new Map(), kt = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: e === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, Pe = {
    timer: 0,
    target: null
  }, ke = {
    active: !1,
    depth: 0
  };
  function er(i) {
    const a = i == null ? void 0 : i.dataTransfer;
    if (!a) return !1;
    if (a.items && a.items.length) {
      for (const s of a.items) {
        if (!s || s.kind !== "file") continue;
        const l = String(s.type || "").toLowerCase();
        if (!l || l.startsWith("image/")) return !0;
      }
      return !1;
    }
    return a.files && a.files.length ? Array.from(a.files).some((s) => aa(s)) : !1;
  }
  function Rn(i) {
    const a = !!i;
    ke.active !== a && (ke.active = a, T.classList.toggle("drop-active", a));
  }
  function Re(i, a, s = d.viewFov, l = 140, h = 620) {
    const m = Py(d.viewYaw, i), _ = a - d.viewPitch, b = s - d.viewFov, v = Math.hypot(m, _) + Math.abs(b) * 0.6, S = Math.round(j(l + v * 2.2, l, h));
    d.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: S,
      startYaw: d.viewYaw,
      startPitch: d.viewPitch,
      startFov: d.viewFov,
      targetPitch: a,
      targetFov: s,
      deltaYaw: m
    }, d.viewInertia.active = !1, d.viewInertia.vx = 0, d.viewInertia.vy = 0, pt();
  }
  $p();
  function Te() {
    return e === "stickers" ? p.stickers : p.shots;
  }
  function De() {
    const i = p.painting || (p.painting = Do(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function qo(i = "paint") {
    var h, m;
    const a = Array.isArray((m = (h = p.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? p.painting[i].strokes : [], s = [], l = /* @__PURE__ */ new Set();
    for (const _ of a) {
      const b = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !b || l.has(b) || (l.add(b), s.push(b));
    }
    return s;
  }
  function fp() {
    return qo("paint");
  }
  function Ki(i, a) {
    const s = String(a || "").trim();
    return s ? `${i === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function Wi(i) {
    const a = String(i || "").trim();
    return a ? `raster:${a}` : "";
  }
  function Ye(i) {
    const a = String(i || "").trim();
    if (!a) return "";
    const s = a.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : a).trim();
  }
  function qi(i, a = null) {
    const s = String(i || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const l = s.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: a === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function Ds() {
    var a;
    let i = -1;
    for (const s of Array.isArray(p.stickers) ? p.stickers : [])
      i = Math.max(i, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of De())
      i = Math.max(i, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((a = p.painting) == null ? void 0 : a.raster_objects) ? p.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((s == null ? void 0 : s.z_index) || 0)));
    return i + 1;
  }
  function El(i, a = null) {
    const s = String(i || "").trim();
    if (!s) return null;
    const l = De();
    let h = l.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === s);
    return h ? a != null && (h.z_index = Math.max(0, Number(a || 0))) : (h = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: a == null ? Ds() : Math.max(0, Number(a || 0)),
      locked: !1,
      frame: null
    }, l.push(h)), h;
  }
  function dp() {
    const i = new Set(fp()), s = De().filter((l) => i.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return i.forEach((l) => {
      s.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === l) || s.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: Ds(),
        locked: !1,
        frame: null
      });
    }), s.sort((l, h) => Number((l == null ? void 0 : l.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), p.painting.groups = s, s;
  }
  function hp(i, a, s) {
    const l = [];
    for (const L of s) {
      const V = L == null ? void 0 : L.geometry, B = (V == null ? void 0 : V.geometryKind) === "lasso_fill" ? V == null ? void 0 : V.points : (V == null ? void 0 : V.processedPoints) || (V == null ? void 0 : V.rawPoints) || (V == null ? void 0 : V.points) || [];
      Array.isArray(B) && l.push(...B);
    }
    if (!l.length) return null;
    let h = 0, m = 0;
    l.forEach((L) => {
      h += Number((L == null ? void 0 : L.u) || 0), m += Number((L == null ? void 0 : L.v) || 0);
    });
    const _ = h / l.length;
    let b = 1 / 0, v = -1 / 0, S = 1 / 0, x = -1 / 0;
    l.forEach((L) => {
      const V = Zi(Number((L == null ? void 0 : L.u) || 0), _);
      b = Math.min(b, V), v = Math.max(v, V);
      const B = Number((L == null ? void 0 : L.v) || 0);
      S = Math.min(S, B), x = Math.max(x, B);
    });
    const M = s.reduce((L, V) => {
      const B = xr(String((V == null ? void 0 : V.toolKind) || "pen")), Z = un[B] || un[sr], ct = Math.max(1, Number((V == null ? void 0 : V.size) || 10)) * Math.max(0.1, Number((Z == null ? void 0 : Z.sizeScale) ?? 1));
      return Math.max(L, ct);
    }, 0), I = Math.max(35e-4, M / 2048);
    return {
      centerUv: { u: ((_ + (b + v) * 0.5) % 1 + 1) % 1, v: j((S + x) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (v - b) * 0.5 + I,
      halfH: (x - S) * 0.5 + I,
      uvPad: I
    };
  }
  function Lr(i, a, s) {
    const l = String(i || "").trim();
    if (!l) return null;
    const h = De().find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    if (!h) return null;
    if (!h.frame) {
      const m = s || Sn(l, a);
      h.frame = hp(l, a, m);
    }
    return h.frame;
  }
  function Rr() {
    var l;
    const i = (Array.isArray(p.stickers) ? p.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), a = dp().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = (Array.isArray((l = p.painting) == null ? void 0 : l.raster_objects) ? p.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...i, ...a, ...s].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function Yi(i = !0) {
    var s, l, h, m, _, b;
    const a = Rr().filter((v) => v.type === "strokeGroup").map((v) => String(v.actionGroupId || "")).filter((v) => !!v);
    if (i) {
      const v = String(((l = (s = d.interaction) == null ? void 0 : s.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), S = String(((m = (h = d.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), x = String(((b = (_ = d.interaction) == null ? void 0 : _.stroke) == null ? void 0 : b.toolKind) || "").trim();
      v && S === "paint" && x !== "eraser" && !a.includes(v) && a.push(v);
    }
    return a;
  }
  function Ls(i = !0) {
    var b, v, S, x, M, I;
    const a = Rr();
    if (!i) return a;
    const s = String(((v = (b = d.interaction) == null ? void 0 : b.stroke) == null ? void 0 : v.actionGroupId) || "").trim(), l = String(((x = (S = d.interaction) == null ? void 0 : S.stroke) == null ? void 0 : x.layerKind) || "").trim(), h = String(((I = (M = d.interaction) == null ? void 0 : M.stroke) == null ? void 0 : I.toolKind) || "").trim();
    if (!s || l !== "paint" || h === "eraser" || a.some((L) => L.type === "strokeGroup" && String(L.actionGroupId || "") === s))
      return a;
    const m = _e();
    let _ = a.reduce((L, V) => Math.max(L, Number((V == null ? void 0 : V.z_index) || 0)), -1) + 1;
    return m && Ee(m) && String(m.actionGroupId || "") === s && (_ = Number(m.z_index || 0)), [
      ...a,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: _,
        item: null
      }
    ].sort((L, V) => Number((L == null ? void 0 : L.z_index) || 0) - Number((V == null ? void 0 : V.z_index) || 0));
  }
  function pp() {
    return De().slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => ai(Ki("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function gp() {
    var i;
    return (Array.isArray((i = p.painting) == null ? void 0 : i.raster_objects) ? p.painting.raster_objects : []).filter((a) => String((a == null ? void 0 : a.layerKind) || "paint") === "paint").slice().sort((a, s) => Number((a == null ? void 0 : a.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((a) => oi(Wi((a == null ? void 0 : a.id) || ""))).filter(Boolean);
  }
  function Yo(i = d.interaction) {
    const a = String((i == null ? void 0 : i.kind) || "");
    if (a === "paint_stroke" || a === "paint_lasso_fill" || a === "move_stroke_group" || a === "scale_stroke_group" || a === "rotate_stroke_group" || a === "move_raster_object") return !0;
    if (a === "move_multi") {
      const s = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, l = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return s || l;
    }
    return !1;
  }
  function Tl(i = d.interaction) {
    if (e !== "cutout") return !1;
    const a = String((i == null ? void 0 : i.kind) || "");
    return Yo(i) || a === "move" || a === "scale" || a === "scale_x" || a === "scale_y" || a === "rotate" ? !0 : a === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function mp(i = d.interaction) {
    if (!Tl(i)) return 0;
    const a = String((i == null ? void 0 : i.kind) || "");
    return a === "paint_stroke" || a === "paint_lasso_fill" ? 120 : 33;
  }
  function Xi() {
    var h, m, _, b, v, S, x;
    const i = d.interaction, a = String((i == null ? void 0 : i.kind) || "");
    if (!Yo(i)) return "";
    if (a === "paint_stroke" || a === "paint_lasso_fill") {
      const M = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, I = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), L = ((_ = M == null ? void 0 : M.rawPoints) == null ? void 0 : _.length) ?? ((b = M == null ? void 0 : M.points) == null ? void 0 : b.length) ?? 0, V = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${I || "paint"}_${a}_live${V}_${L}_${d.livePaintInteractionRevision}`;
    }
    const s = String(((v = i == null ? void 0 : i.item) == null ? void 0 : v.actionGroupId) || ""), l = String(((S = i == null ? void 0 : i.item) == null ? void 0 : S.rasterObjectId) || ((x = i == null ? void 0 : i.item) == null ? void 0 : x.id) || "");
    return `_${a}_${s || l || "active"}_${d.livePaintInteractionRevision}`;
  }
  function Rs() {
    return [
      ...Array.isArray(p.stickers) ? p.stickers : [],
      ...Array.isArray(p.shots) ? p.shots : []
    ];
  }
  function xn(i) {
    return !!i && Array.isArray(p.shots) && p.shots.includes(i);
  }
  function Oe(i) {
    return !!i && Array.isArray(p.stickers) && p.stickers.includes(i);
  }
  function hn() {
    var i;
    return Array.isArray((i = p.painting) == null ? void 0 : i.raster_objects) ? p.painting.raster_objects : [];
  }
  function oi(i) {
    const a = Ye(i);
    if (!a) return null;
    const s = hn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === a);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: Wi(a),
      type: "rasterObject",
      rasterObjectId: a
    };
  }
  function Xe(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const a = Ye(i.rasterObjectId || i.id || "");
    return !!a && !!oi(Wi(a));
  }
  function ai(i) {
    const a = qi(i), s = String(a.actionGroupId || "").trim();
    if (!s) return null;
    const l = De().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === s || String((h == null ? void 0 : h.actionGroupId) || "") === s);
    return l ? {
      ...l,
      id: Ki("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Ee(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const a = String(i.actionGroupId || "").trim(), s = String(i.layerKind || "paint").trim() || "paint";
    return !!a && !!ai(Ki(s, a));
  }
  function Sn(i, a = null) {
    const s = qi(i, a), l = String(s.actionGroupId || "").trim();
    return l ? gi(s.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === l) : [];
  }
  function yp(i, a = "paint") {
    var m, _, b;
    const s = String(i || "").trim(), h = `${String(a || "paint").trim() || "paint"}:${s}:${d.mode}:${$r()}`;
    if (d.mode === "frame") {
      const v = ee(), S = String((v == null ? void 0 : v.id) || ""), x = v ? Je(v) : null;
      return `${h}:frame:${S}:${Math.round(Number((x == null ? void 0 : x.x) || 0))}:${Math.round(Number((x == null ? void 0 : x.y) || 0))}:${Math.round(Number((x == null ? void 0 : x.w) || 0))}:${Math.round(Number((x == null ? void 0 : x.h) || 0))}:${Math.round(Number(((m = d.frameView) == null ? void 0 : m.zoom) || 1) * 1e3)}:${Math.round(Number(((_ = d.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((b = d.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Xo(i, a, s) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(a || 0)) % 1 + 1) % 1,
      v: j(Number(i.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function Zi(i, a) {
    let s = Number(i || 0) - Number(a || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function Dl(i, a = null, s = null) {
    var S;
    const l = qi(i, a), h = Array.isArray(s) ? s : Sn(l.actionGroupId, l.layerKind), m = [];
    if (h.forEach((x) => {
      const M = (x == null ? void 0 : x.geometry) || null, I = (M == null ? void 0 : M.geometryKind) === "lasso_fill" ? M == null ? void 0 : M.points : (M == null ? void 0 : M.processedPoints) || (M == null ? void 0 : M.rawPoints) || (M == null ? void 0 : M.points) || [];
      Array.isArray(I) && m.push(...I);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((S = m[0]) == null ? void 0 : S.u) || 0);
    let b = 0, v = 0;
    return m.forEach((x) => {
      b += _ + Zi(Number((x == null ? void 0 : x.u) || 0), _), v += Number((x == null ? void 0 : x.v) || 0);
    }), {
      u: (b / m.length % 1 + 1) % 1,
      v: j(v / m.length, 0, 1)
    };
  }
  function Zo(i, a, s = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((a == null ? void 0 : a.u) || 0), m = Number((a == null ? void 0 : a.v) || 0), _ = Zi(Number(i.u || 0), h), b = Number(i.v || 0) - m, v = Number(l || 0) * He, S = Math.cos(v), x = Math.sin(v), M = Math.max(0.02, Number(s || 1)), I = (_ * S - b * x) * M, L = (_ * x + b * S) * M;
    return {
      ...i,
      u: ((h + I) % 1 + 1) % 1,
      v: j(m + L, 0, 1)
    };
  }
  function Ll(i, a, s, l = null, h = null, m = null) {
    const _ = qi(i, h), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const v = gi(_.layerKind), S = Array.isArray(l) ? new Map(l.map((M) => [String((M == null ? void 0 : M.id) || ""), M])) : null;
    let x = !1;
    if (v.forEach((M) => {
      if (String((M == null ? void 0 : M.actionGroupId) || "").trim() !== b) return;
      const I = (S == null ? void 0 : S.get(String((M == null ? void 0 : M.id) || ""))) || M, L = M == null ? void 0 : M.geometry, V = I == null ? void 0 : I.geometry;
      !L || !V || (Array.isArray(V.points) && (L.points = V.points.map((B) => Xo(B, a, s)), x = !0), Array.isArray(V.rawPoints) && (L.rawPoints = V.rawPoints.map((B) => Xo(B, a, s)), x = !0), Array.isArray(V.processedPoints) && (L.processedPoints = V.processedPoints.map((B) => Xo(B, a, s)), x = !0));
    }), x && m) {
      const M = De().find((I) => String((I == null ? void 0 : I.actionGroupId) || "") === b);
      M && (M.frame = {
        ...m,
        centerUv: {
          u: ((m.centerUv.u + a) % 1 + 1) % 1,
          v: j(m.centerUv.v + s, 0, 1)
        }
      });
    }
    return x;
  }
  function Rl(i, a = 1, s = 0, l = null, h = null, m = null) {
    const _ = qi(i, h), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const v = gi(_.layerKind), S = Array.isArray(l) ? l : Sn(b, _.layerKind), x = Array.isArray(S) ? new Map(S.map((L) => [String((L == null ? void 0 : L.id) || ""), L])) : null, M = (m == null ? void 0 : m.centerUv) ?? Dl(b, _.layerKind, S);
    let I = !1;
    if (v.forEach((L) => {
      if (String((L == null ? void 0 : L.actionGroupId) || "").trim() !== b) return;
      const V = (x == null ? void 0 : x.get(String((L == null ? void 0 : L.id) || ""))) || L, B = L == null ? void 0 : L.geometry, Z = V == null ? void 0 : V.geometry;
      !B || !Z || (Array.isArray(Z.points) && (B.points = Z.points.map((ct) => Zo(ct, M, a, s)), I = !0), Array.isArray(Z.rawPoints) && (B.rawPoints = Z.rawPoints.map((ct) => Zo(ct, M, a, s)), I = !0), Array.isArray(Z.processedPoints) && (B.processedPoints = Z.processedPoints.map((ct) => Zo(ct, M, a, s)), I = !0));
    }), I && m) {
      const L = Number(a || 1), V = De().find((B) => String((B == null ? void 0 : B.actionGroupId) || "") === b);
      V && (V.frame = {
        centerUv: m.centerUv,
        rot_deg: Number(m.rot_deg || 0) + Number(s || 0),
        halfW: m.halfW * L,
        halfH: m.halfH * L,
        uvPad: m.uvPad
      });
    }
    return I;
  }
  function Ol(i, a, s, l = null) {
    const h = Ye(i);
    if (!h) return !1;
    const m = hn().find((x) => String((x == null ? void 0 : x.id) || "").trim() === h);
    if (!m) return !1;
    const _ = l && typeof l == "object" ? l : m, b = (_ == null ? void 0 : _.transform) || {}, v = Number(b.du || 0) + Number(a || 0), S = j(Number(b.dv || 0) + Number(s || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = v, m.transform.dv = S, !0;
  }
  function _e() {
    const i = String(d.selectedId || "");
    if (!i) return null;
    const a = ai(i);
    if (a) return a;
    const s = oi(i);
    return s || (e === "cutout" ? Rs().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null : Te().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null);
  }
  function On() {
    const i = Array.isArray(d.selectedIds) && d.selectedIds.length ? d.selectedIds : d.selectedId ? [d.selectedId] : [], a = [], s = /* @__PURE__ */ new Set();
    return i.forEach((l) => {
      const h = String(l || "").trim();
      if (!h || s.has(h)) return;
      s.add(h);
      const m = h === String(d.selectedId || "") ? _e() : ai(h) || oi(h) || (e === "cutout" ? Rs().find((_) => String((_ == null ? void 0 : _.id) || "") === h) : Te().find((_) => String((_ == null ? void 0 : _.id) || "") === h));
      m && a.push(m);
    }), a;
  }
  function Os(i = null) {
    const a = Array.isArray(i) ? i : On();
    if (!a || a.length < 2) return null;
    const s = a.map((S) => Fe(S)).filter((S) => (S == null ? void 0 : S.visible) && Array.isArray(S.corners) && S.corners.length);
    if (!s.length) return null;
    const l = s.flatMap((S) => S.corners.map((x) => Number((x == null ? void 0 : x.x) || 0))), h = s.flatMap((S) => S.corners.map((x) => Number((x == null ? void 0 : x.y) || 0))), m = Math.min(...l), _ = Math.max(...l), b = Math.min(...h), v = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + _) * 0.5, y: (b + v) * 0.5 },
      corners: [
        { x: m, y: b },
        { x: _, y: b },
        { x: _, y: v },
        { x: m, y: v }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + _) * 0.5, y: b, a: { x: m, y: b }, b: { x: _, y: b } },
        { edge: "right", x: _, y: (b + v) * 0.5, a: { x: _, y: b }, b: { x: _, y: v } },
        { edge: "bottom", x: (m + _) * 0.5, y: v, a: { x: _, y: v }, b: { x: m, y: v } },
        { edge: "left", x: m, y: (b + v) * 0.5, a: { x: m, y: v }, b: { x: m, y: b } }
      ],
      rotateStemBase: { x: (m + _) * 0.5, y: b },
      rotateHandle: { x: (m + _) * 0.5, y: b - 30 }
    };
  }
  function bp(i) {
    const a = String((i == null ? void 0 : i.id) || "").trim();
    return !!a && Array.isArray(d.selectedIds) && d.selectedIds.includes(a);
  }
  function Fl() {
    const i = _e();
    return i ? Ee(i) || Xe(i) ? "stroke" : xn(i) ? "frame" : "image" : null;
  }
  function mr(i) {
    if (!i || typeof i != "object") return !1;
    if (Ee(i)) {
      const a = String(i.actionGroupId || i.id || "").trim(), s = De().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === a);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (Xe(i)) {
      const a = Ye(i.rasterObjectId || i.id || ""), s = hn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === a);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return i.locked === !0;
  }
  function Fs(i = null) {
    const a = Array.isArray(i) ? i : On();
    return a.length > 0 && a.every((s) => mr(s));
  }
  function vp(i, a) {
    const s = a === !0;
    if (!i || typeof i != "object") return !1;
    if (Ee(i)) {
      const l = String(i.actionGroupId || i.id || "").trim(), h = De().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    if (Xe(i)) {
      const l = Ye(i.rasterObjectId || i.id || ""), h = hn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    return i.locked === s ? !1 : (i.locked = s, !0);
  }
  function _p() {
    if (r) return;
    const i = On();
    if (!i.length) return;
    const a = !Fs(i);
    let s = !1;
    i.forEach((l) => {
      vp(l, a) && (s = !0);
    }), s && (le(), Ne(), Gt(), pt());
  }
  function Ji(i) {
    d.selectedId = (i == null ? void 0 : i.id) || null, d.selectedIds = i != null && i.id ? [i.id] : [], i && Oe(i) ? p.active.selected_sticker_id = i.id || null : p.active.selected_sticker_id = null, i && xn(i) ? p.active.selected_shot_id = i.id || null : i ? xn(i) || (p.active.selected_shot_id = p.active.selected_shot_id) : p.active.selected_shot_id = null;
  }
  function wp(i, a = null) {
    const s = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((_) => {
      const b = String((_ == null ? void 0 : _.id) || "").trim();
      !b || l.has(b) || (l.add(b), s.push(b));
    }), d.selectedIds = s;
    const h = String(a || "").trim();
    d.selectedId = h && s.includes(h) ? h : s[s.length - 1] || null;
    const m = _e();
    p.active.selected_sticker_id = m && Oe(m) && m.id || null, m && xn(m) ? p.active.selected_shot_id = m.id || null : s.length || (p.active.selected_shot_id = null);
  }
  function xp() {
    const i = (Array.isArray(p.shots) ? p.shots : []).map((s, l) => ({
      kind: "frame",
      item: s,
      label: "Frame"
    })), a = (Array.isArray(p.stickers) ? p.stickers : []).map((s, l) => {
      var m, _;
      const h = Ce(s) ? String(s.id || jr) : String(((_ = (m = p.assets) == null ? void 0 : m[s.asset_id]) == null ? void 0 : _.name) || s.asset_id || s.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: s,
        label: h
      };
    });
    return [...i, ...a];
  }
  function Sp(i) {
    return i === "frame" ? Lt.camera : i === "stroke" ? Lt.paintbrush_vertical_tool : Lt.image;
  }
  function $l(i) {
    return !i || !i.item ? Oa(String((i == null ? void 0 : i.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${Sp(i.kind)}</span><span>${Oa(String(i.label || ""))}</span>`;
  }
  function Hl() {
    return Ds();
  }
  function Ce(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === jr || String(i.source_kind || "") === Ic;
  }
  function si(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function Np(i) {
    return Ce(i) && si(i) ? Th : 1;
  }
  function Mp() {
    return d.primaryTool === "mask" ? d.maskTool : d.paintTool;
  }
  function Pp() {
    return String(Mp() || "") === "lasso_fill";
  }
  function kp() {
    if (r) return;
    const i = _e();
    !i || !Ce(i) || (i.visible = si(i), vn(), le(), Ne(), qt(), Gt(), pt());
  }
  function Cp() {
    if (r || e !== "stickers") return;
    const i = _e();
    if (!i || !Ce(i)) return;
    const a = i.initial_pose;
    if (!a || typeof a != "object") return;
    i.yaw_deg = Number(a.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(a.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(a.hFOV_deg ?? i.hFOV_deg ?? 30);
    const s = $s(Ec, () => {
      pt();
    });
    s && (s.complete || s.naturalWidth || s.width) ? i.vFOV_deg = Or(
      Number(a.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : i.vFOV_deg = Number(a.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(a.rot_deg ?? i.rot_deg ?? 0), le(), Ne(), qt(), Gt(), pt();
  }
  function Ap(i) {
    if (!i || !Ce(i)) return null;
    const a = i.initial_pose;
    if (!a || typeof a != "object") return null;
    const s = {
      yaw_deg: Number(a.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(a.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(a.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(a.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(a.rot_deg ?? i.rot_deg ?? 0)
    }, l = $s(Ec, () => {
      pt();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (s.vFOV_deg = Or(
      s.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), s;
  }
  function Ip() {
    const i = _e();
    if (!i || !Ce(i)) return !1;
    const a = Ap(i);
    if (!a) return !1;
    const s = (l, h) => Math.abs(Number(l || 0) - Number(h || 0)) <= 1e-4;
    return !(s(i.yaw_deg, a.yaw_deg) && s(i.pitch_deg, a.pitch_deg) && s(i.hFOV_deg, a.hFOV_deg) && s(i.vFOV_deg, a.vFOV_deg) && s(i.rot_deg, a.rot_deg));
  }
  function Vl(i) {
    var s;
    const a = Ro(t == null ? void 0 : t.id);
    return Array.isArray((s = a == null ? void 0 : a.ui) == null ? void 0 : s[i]) ? a.ui[i] : Array.isArray(a == null ? void 0 : a[i]) ? a[i] : [];
  }
  function Ep(i) {
    const a = Ro(t == null ? void 0 : t.id);
    return a != null && a.ui && Object.prototype.hasOwnProperty.call(a.ui, i) ? a.ui[i] : a && Object.prototype.hasOwnProperty.call(a, i) ? a[i] : null;
  }
  function Tp(i, a = null) {
    var s;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const l = i[0];
      if (l && typeof l == "object" && !Array.isArray(l)) return l;
    }
    if (Array.isArray(a) && a.length > 0) {
      const l = (s = a[0]) == null ? void 0 : s.parsed_state;
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
  function $s(i, a = null) {
    const s = Vl(i), l = Array.isArray(s) && s.length ? s[0] : null, h = ji(l);
    if (!h) return null;
    const m = `__ui__${i}`, _ = $t.get(m);
    if (_ && _.__panoSrc === h) return _;
    const b = new Image();
    return b.__panoSrc = h, b.onload = () => {
      typeof a == "function" ? a(b) : pt();
    }, b.src = h, $t.set(m, b), b;
  }
  function zl(i = null) {
    const a = pd(t, ["sticker_image"], i, "sticker_image_exact");
    return a || $s(Ec, i);
  }
  function Ul(i) {
    const a = String(i || "");
    let s = 2166136261;
    for (let l = 0; l < a.length; l += 1)
      s ^= a.charCodeAt(l), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Or(i, a, s) {
    const l = Math.max(1, Number(a || 1)), h = Math.max(1, Number(s || 1)), m = j(Number(i || 30), 0.1, 179) * He, _ = 2 * Math.atan(Math.tan(m * 0.5) * (h / l));
    return j(_ * Wr, 0.1, 179);
  }
  function Dp(i) {
    const a = String(i || "").trim();
    if (!a) return null;
    try {
      const s = JSON.parse(a);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const l = s.version;
      let h = null;
      if (typeof l == "number" && Number.isInteger(l) ? h = l : typeof l == "string" && /^\d+$/.test(l) && (h = Number.parseInt(l, 10)), h !== 1) return null;
      const m = s.pose;
      if (!m || typeof m != "object") return null;
      const _ = Number(m.yaw_deg), b = Number(m.pitch_deg), v = Number(m.roll_deg), S = Number(m.hFOV_deg);
      if (![_, b, v, S].every((L) => Number.isFinite(L))) return null;
      let x = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(x, -0) && (x = 0);
      const M = {
        yaw_deg: x,
        pitch_deg: j(b, -89.9, 89.9),
        roll_deg: v,
        hFOV_deg: j(S, 0.1, 179)
      }, I = Number(s.source_aspect);
      return Number.isFinite(I) && I > 0 && (M.source_aspect = I), M;
    } catch {
      return null;
    }
  }
  function jl(i) {
    const a = Number(i == null ? void 0 : i.yaw_deg), s = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = rl(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ve(Number.isFinite(a) ? a : 0),
        pitch_deg: j(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: j(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function Lp(i) {
    var b;
    if (!i || typeof i != "object") return jl(null);
    const a = Number(i == null ? void 0 : i.yaw_deg), s = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const v = j(h, 0.1, 179) * He, S = j(m, 0.1, 179) * He, x = Math.tan(S * 0.5);
      if (Math.abs(x) > 1e-6) {
        const M = Math.tan(v * 0.5) / x;
        Number.isFinite(M) && M > 0 && (_ = M);
      }
    }
    if (i != null && i.asset_id && ((b = p == null ? void 0 : p.assets) != null && b[i.asset_id])) {
      const v = p.assets[i.asset_id], S = Number((v == null ? void 0 : v.w) || 0), x = Number((v == null ? void 0 : v.h) || 0);
      S > 0 && x > 0 && (_ = S / x);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ve(Number.isFinite(a) ? a : 0),
        pitch_deg: j(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: j(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function Rp(i) {
    var l, h, m, _, b;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((v) => String((v == null ? void 0 : v.name) || "") === String(i)) : null, s = a == null ? void 0 : a.link;
    if (s != null) {
      const v = sp(t.graph, s), { originId: S, originSlot: x } = cp(v), M = Ro(S), I = [
        M == null ? void 0 : M.output,
        M == null ? void 0 : M.result,
        (l = M == null ? void 0 : M.data) == null ? void 0 : l.output,
        (h = M == null ? void 0 : M.data) == null ? void 0 : h.result,
        (m = M == null ? void 0 : M.ui) == null ? void 0 : m.output,
        (_ = M == null ? void 0 : M.ui) == null ? void 0 : _.result
      ];
      for (const L of I) {
        if (!Array.isArray(L)) continue;
        const V = Number(x || 0), B = L[V];
        if (typeof B == "string" && B.trim()) return B;
      }
    }
    return String(((b = _n(t, i)) == null ? void 0 : b.value) || "");
  }
  function Op(i, a, s) {
    const l = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Dp(a);
    if (l) {
      const _ = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || l.source_aspect || 1), b = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Or(l.hFOV_deg, _, b),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const h = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), m = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(d.viewYaw || 0),
      pitch_deg: Number(d.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Or(30, h, m),
      rot_deg: 0
    };
  }
  function Bl(i = "sync") {
    if (e !== "stickers" || r) return;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((L) => String((L == null ? void 0 : L.name) || "") === "sticker_image") : null, s = (a == null ? void 0 : a.link) ?? null, l = zl(() => {
      var L;
      (L = t.__panoExternalStickerSync) == null || L.call(t, "image-loaded");
    }), h = Tp(Ep("pano_sticker_input_pose"), null), m = Rp("sticker_state"), _ = Ul(h && typeof h == "object" ? JSON.stringify(h) : m), b = Array.isArray(p.stickers) ? p.stickers : p.stickers = [], v = b.findIndex((L) => String((L == null ? void 0 : L.id) || "") === jr);
    if (s == null) {
      v >= 0 && (b.splice(v, 1), d.selectedId === jr && (d.selectedId = null, d.selectedIds = [], p.active.selected_sticker_id = null), Ne(), qt(), Gt(), pt());
      return;
    }
    const S = b.reduce((L, V) => Math.max(L, Number((V == null ? void 0 : V.z_index) || 0)), -1);
    let x = v >= 0 ? b[v] : null;
    const M = !x || Number(x.source_link_id ?? -1) !== Number(s) || String(x.source_state_hash || "") !== _;
    x || (x = {
      id: jr,
      source_kind: Ic
    }, b.push(x)), x.id = jr, x.source_kind = Ic, x.source_link_id = Number(s), x.source_state_hash = _, x.visible = x.visible !== !1;
    let I = !1;
    if (M) {
      const L = Op(h, m, l);
      Object.assign(x, L, {
        initial_pose: { ...L },
        visible: !0,
        z_index: S + 1
      }), I = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const L = Or(
        Number(x.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(x.vFOV_deg || 0) - L) > 1e-6 && (x.vFOV_deg = L, I = !0);
    }
    I && (Ne(), qt(), Gt()), pt();
  }
  function ci(i = {}) {
    const s = i.preservePanelValues !== !1 ? _e() : null;
    s && (d.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: Ni(s)
    }), d.selectedId = null, d.selectedIds = [], d.cutoutAspectOpen = !1, p.active.selected_sticker_id = null, p.active.selected_shot_id = null;
  }
  function Fp() {
    var l;
    if (e !== "cutout") return;
    const i = Array.isArray(p.shots) ? p.shots : [];
    if (!Array.isArray(i) || i.length === 0) return;
    const a = String(((l = p.active) == null ? void 0 : l.selected_shot_id) || ""), s = i.find((h) => String((h == null ? void 0 : h.id) || "") === a) || i[0];
    s && (p.active.selected_shot_id = s.id || null, d.viewYaw = Ve(Number(s.yaw_deg || 0)), d.viewPitch = j(Number(s.pitch_deg || 0), -89.9, 89.9));
  }
  function Jo() {
    if (!it) return;
    e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0 ? (it.innerHTML = Lt.crosshair, it.setAttribute("aria-label", "Look at frame"), it.setAttribute("data-tip", "Look at frame")) : (it.innerHTML = Lt.plus_circle, it.setAttribute("aria-label", "Add frame"), it.setAttribute("data-tip", "Add frame"));
  }
  function Qo() {
    const i = e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0;
    d.mode === "frame" && !i && (d.mode = "pano"), K && (K.disabled = !i, K.setAttribute("aria-disabled", i ? "false" : "true")), vt.forEach((a) => {
      const s = a.dataset.view === d.mode;
      a.setAttribute("aria-pressed", s ? "true" : "false");
    }), F && F.setAttribute("data-selected", d.mode), _u() ? we(d.pointerPos) : C.style.cursor = d.mode === "pano" ? "grab" : "default";
  }
  function $p() {
    const a = Xl({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !a || a.length !== 4 ? !1 : a[0].y >= a[3].y;
  }
  function Hs() {
    const i = jn(d.viewYaw, d.viewPitch);
    let a = Zn(0, 1, 0);
    Math.abs(Cn(i, a)) > 0.999 && (a = Zn(0, 0, 1));
    const s = Si(Ea(a, i)), l = Si(Ea(i, s));
    return { right: s, up: l, fwd: i };
  }
  function Qi(i) {
    const { right: a, up: s, fwd: l } = Hs(), h = Cn(i, a), m = Cn(i, s), _ = Cn(i, l);
    if (_ <= 1e-5) return null;
    const b = C.width, v = C.height, S = d.viewFov * He, x = 2 * Math.atan(Math.tan(S / 2) * (v / b)), M = b / 2 / Math.tan(S / 2), I = v / 2 / Math.tan(x / 2);
    return {
      x: b / 2 + h / _ * M,
      y: v / 2 - m / _ * I,
      z: _
    };
  }
  function Vs(i, a) {
    const { right: s, up: l, fwd: h } = Hs(), m = C.width, _ = C.height, b = d.viewFov * He, v = 2 * Math.atan(Math.tan(b / 2) * (_ / m)), S = (i - m / 2) / (m / 2) * Math.tan(b / 2), x = (_ / 2 - a) / (_ / 2) * Math.tan(v / 2), M = Aa(Aa(Ia(s, S), Ia(l, x)), h);
    return Si(M);
  }
  function yr() {
    const i = C.width, a = C.height, s = 2;
    if (i / Math.max(a, 1) >= s) {
      const b = a, v = b * s;
      return { x: (i - v) * 0.5, y: 0, w: v, h: b };
    }
    const h = i, m = h / s;
    return { x: 0, y: (a - m) * 0.5, w: h, h: m };
  }
  function zs(i) {
    var _;
    if (i && typeof i == "object" && (Ce(i) || i.external === !0))
      return zl(() => {
        var b;
        (b = t.__panoExternalStickerSync) == null || b.call(t, "image-loaded");
      });
    const a = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!a) return null;
    const s = $t.get(a);
    if (s) return s;
    const l = (_ = p.assets) == null ? void 0 : _[a], h = o_(l);
    if (!h) return null;
    const m = new Image();
    return m.onload = () => pt(), m.src = h, $t.set(a, m), m;
  }
  function Gl(i, a = null) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Zt.get(s);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const h = new Image();
    return h.onload = () => {
      typeof a == "function" && a();
    }, h.src = s, Zt.set(s, h), h;
  }
  function Hp(i) {
    const a = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!a) return null;
    const s = Jt.get(a);
    if (s) return s.ready ? s : null;
    const l = Gl(i, () => {
      const x = Jt.get(a);
      x && (x.ready = !1), pt({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const h = Number(l.naturalWidth || l.width || 0), m = Number(l.naturalHeight || l.height || 0);
    if (h < 1 || m < 1) return null;
    const _ = document.createElement("canvas");
    _.width = h, _.height = m;
    const b = _.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, h, m), b.drawImage(l, 0, 0, h, m);
    const v = b.getImageData(0, 0, h, m).data, S = { canvas: _, width: h, height: m, alpha: v, ready: !0 };
    return Jt.set(a, S), S;
  }
  function Vp(i, a, s = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((a == null ? void 0 : a.u) || 0), m = Number((a == null ? void 0 : a.v) || 0), _ = Zi(Number(i.u || 0), h), b = Number(i.v || 0) - m, v = Math.max(0.02, Number(s || 1)), S = Number(l || 0) * He, x = Math.cos(S), M = Math.sin(S), I = _ / v, L = b / v, V = I * x + L * M, B = -I * M + L * x;
    return {
      ...i,
      u: ((h + V) % 1 + 1) % 1,
      v: m + B
    };
  }
  function zp(i, a) {
    if (!i || !a) return null;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return null;
    const l = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(a.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(a.v || 0) - Number(l.dv || 0)
    }, _ = Vp(
      m,
      h,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), b = Number(s.u1 || 0) - Number(s.u0 || 0), v = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(b > 1e-6) || !(v > 1e-6)) return null;
    const S = Zi(Number(_.u || 0), Number(s.u0 || 0)) / b, x = (Number(_.v || 0) - Number(s.v0 || 0)) / v;
    if (S < 0 || S > 1 || x < 0 || x > 1) return 0;
    const M = Hp(i);
    if (!M) return null;
    const I = j(Math.floor(S * M.width), 0, M.width - 1), L = j(Math.floor(x * M.height), 0, M.height - 1);
    return Number(M.alpha[(L * M.width + I) * 4 + 3] || 0);
  }
  function Kl(i, a, s, l = null) {
    if (!(a != null && a.visible) || !cr(s, a.corners)) return !1;
    const h = l || Nn(s, performance.now()), m = zp(i, h);
    return m === null ? !0 : m > 8;
  }
  function Up() {
    var l, h, m, _, b, v, S, x;
    const i = ((h = (l = d.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, Yi(!1))) || null, a = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((b = (_ = i == null ? void 0 : i.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : b.width) || 2048)), s = Math.max(1, Number(((v = i == null ? void 0 : i.descriptor) == null ? void 0 : v.height) || ((x = (S = i == null ? void 0 : i.displayPaint) == null ? void 0 : S.canvas) == null ? void 0 : x.height) || 1024));
    return { width: a, height: s };
  }
  function Wl(i = null) {
    var b, v, S, x, M, I, L, V, B, Z, ct, St, st;
    di();
    const a = Array.isArray(i) ? i : Yi(!1), s = ((v = (b = d.paintEngine) == null ? void 0 : b.getErpTarget) == null ? void 0 : v.call(b, a)) || null, l = Math.max(1, Number(((S = s == null ? void 0 : s.descriptor) == null ? void 0 : S.width) || ((M = (x = s == null ? void 0 : s.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : M.width) || 2048)), h = Math.max(1, Number(((I = s == null ? void 0 : s.descriptor) == null ? void 0 : I.height) || ((V = (L = s == null ? void 0 : s.displayPaint) == null ? void 0 : L.canvas) == null ? void 0 : V.height) || 1024));
    (!d._rasterComposeSurface || Number(((B = d._rasterComposeSurface.canvas) == null ? void 0 : B.width) || 0) !== l || Number(((Z = d._rasterComposeSurface.canvas) == null ? void 0 : Z.height) || 0) !== h) && (d._rasterComposeSurface = Fr(l, h));
    const m = d._rasterComposeSurface;
    m.ctx.clearRect(0, 0, l, h);
    let _ = !1;
    for (const _t of Rr()) {
      if (_t.type === "strokeGroup") {
        const yt = ((St = (ct = d.paintEngine) == null ? void 0 : ct.getGroupDisplayCanvas) == null ? void 0 : St.call(ct, _t.actionGroupId)) || null;
        if (!yt) continue;
        m.ctx.drawImage(yt, 0, 0), _ = !0;
        continue;
      }
      if (_t.type === "rasterObject" && String(((st = _t.item) == null ? void 0 : st.layerKind) || "paint") === "paint") {
        const yt = ta(_t.item, () => pt());
        if (!yt) continue;
        m.ctx.drawImage(yt, 0, 0), _ = !0;
      }
    }
    return _ ? m.canvas : null;
  }
  function jp(i = null) {
    var b, v, S, x, M, I, L;
    di();
    const a = i || ((v = (b = d.paintEngine) == null ? void 0 : b.getErpTarget) == null ? void 0 : v.call(b, Yi(!1))) || null, s = ((S = a == null ? void 0 : a.committedMask) == null ? void 0 : S.canvas) || null, l = Math.max(1, Number(((x = a == null ? void 0 : a.descriptor) == null ? void 0 : x.width) || (s == null ? void 0 : s.width) || 2048)), h = Math.max(1, Number(((M = a == null ? void 0 : a.descriptor) == null ? void 0 : M.height) || (s == null ? void 0 : s.height) || 1024)), m = hn().filter((V) => String((V == null ? void 0 : V.layerKind) || "paint") === "mask").slice().sort((V, B) => Number((V == null ? void 0 : V.z_index) || 0) - Number((B == null ? void 0 : B.z_index) || 0));
    if (!s && !m.length) return null;
    (!d._maskComposeSurface || Number(((I = d._maskComposeSurface.canvas) == null ? void 0 : I.width) || 0) !== l || Number(((L = d._maskComposeSurface.canvas) == null ? void 0 : L.height) || 0) !== h) && (d._maskComposeSurface = Fr(l, h));
    const _ = d._maskComposeSurface;
    _.ctx.clearRect(0, 0, l, h), s && _.ctx.drawImage(s, 0, 0);
    for (const V of m) {
      const B = ta(V, () => pt());
      B && _.ctx.drawImage(B, 0, 0);
    }
    return _.canvas;
  }
  function Bp() {
    var L, V, B;
    const i = d.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const a = (i == null ? void 0 : i.stroke) || null;
    if (!a || String((a == null ? void 0 : a.layerKind) || "") !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return null;
    const s = nr(), l = `${Xi()}:${s.width}:${s.height}`;
    if (((L = d._activePaintEraserPreviewInfo) == null ? void 0 : L.cacheKey) === l)
      return d._activePaintEraserPreviewInfo.value || null;
    const h = nn(a), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const Z = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Js(Z, h.targetSpace, !0);
    }
    const _ = Fr(s.width, s.height);
    if (!cu(_, h, { w: s.width, h: s.height })) return null;
    const b = ((B = (V = _.ctx) == null ? void 0 : V.getImageData(0, 0, s.width, s.height)) == null ? void 0 : B.data) || null;
    if (!b) return null;
    let v = s.width, S = s.height, x = -1, M = -1;
    for (let Z = 0; Z < s.height; Z += 1)
      for (let ct = 0; ct < s.width; ct += 1)
        b[(Z * s.width + ct) * 4 + 3] <= 8 || (ct < v && (v = ct), Z < S && (S = Z), ct > x && (x = ct), Z > M && (M = Z));
    if (x < v || M < S)
      return d._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const I = {
      surface: _,
      bounds: { minX: v, minY: S, maxX: x, maxY: M },
      key: `${l}:${v}:${S}:${x}:${M}`
    };
    return d._activePaintEraserPreviewInfo = { cacheKey: l, value: I }, d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), I;
  }
  function to() {
    d._activePaintEraserPreviewInfo = null, d._liveEraserPreviewCanvasCache = null;
  }
  function Gp(i, a, s) {
    var l, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((l = i.item) != null && l.bbox)) {
      const m = i.item.bbox, _ = ((h = i.item) == null ? void 0 : h.transform) || {}, b = Number(m.u0 || 0) + Number(_.du || 0), v = Number(m.u1 || 0) + Number(_.du || 0), S = Number(m.v0 || 0) + Number(_.dv || 0), x = Number(m.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * a),
        maxX: Math.ceil((v % 1 + 1) % 1 * a),
        minY: Math.floor(j(S, 0, 1) * s),
        maxY: Math.ceil(j(x, 0, 1) * s),
        wraps: v - b >= 1 || b < 0 || v > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = Sn(i.actionGroupId, "paint"), _ = Lr(i.actionGroupId, "paint", m);
      if (!_) return null;
      const b = _.centerUv.u - _.halfW, v = _.centerUv.u + _.halfW, S = _.centerUv.v - _.halfH, x = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * a),
        maxX: Math.ceil((v % 1 + 1) % 1 * a),
        minY: Math.floor(j(S, 0, 1) * s),
        maxY: Math.ceil(j(x, 0, 1) * s),
        wraps: v - b >= 1 || b < 0 || v > 1
      };
    }
    return null;
  }
  function Kp(i, a, s) {
    if (!i || !a) return !1;
    const l = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: s - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], h = l(i), m = l(a);
    return h.some((_) => m.some((b) => !(_.maxX < b.minX || b.maxX < _.minX || _.maxY < b.minY || b.maxY < _.minY)));
  }
  function ql(i, a, s) {
    var M, I, L;
    if (!i || !a || !((M = s == null ? void 0 : s.surface) != null && M.canvas) || a.type !== "rasterObject") return i;
    const l = Number(i.width || s.surface.canvas.width || 0), h = Number(i.height || s.surface.canvas.height || 0);
    if (l < 1 || h < 1) return i;
    const m = Gp(a, l, h);
    if (m && !Kp(m, s.bounds, l)) return i;
    const _ = String(((I = a.item) == null ? void 0 : I.id) || a.id || ""), b = ((L = a.item) == null ? void 0 : L.transform) || {}, v = `${s.key}:${_}:${l}:${h}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, S = d._liveEraserPreviewCanvasCache instanceof Map ? d._liveEraserPreviewCanvasCache : d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (S.has(v)) return S.get(v);
    const x = Fr(l, h);
    return x.ctx.clearRect(0, 0, l, h), x.ctx.drawImage(i, 0, 0), x.ctx.save(), x.ctx.globalCompositeOperation = "destination-out", x.ctx.drawImage(s.surface.canvas, 0, 0), x.ctx.restore(), S.size > 64 && S.clear(), S.set(v, x.canvas), x.canvas;
  }
  function ta(i, a = null) {
    const s = Ye((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.bbox) || null;
    if (!s || !l) return null;
    const h = Gl(i, a);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: _ } = Up(), b = (i == null ? void 0 : i.transform) || {}, v = [
      s,
      m,
      _,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      $r()
    ].join(":"), S = de.get(v);
    if (S) return S;
    de.size > 64 && de.clear();
    const x = document.createElement("canvas");
    x.width = m, x.height = _;
    const M = x.getContext("2d");
    if (!M) return null;
    const I = Number(l.u0 || 0) * m, L = Number(l.v0 || 0) * _, V = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * m), B = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * _), Z = I + V * 0.5 + Number(b.du || 0) * m, ct = L + B * 0.5 + Number(b.dv || 0) * _, St = Number(b.rot_deg || 0) * He, st = Math.max(0.01, Number(b.scale || 1));
    for (const _t of [-m, 0, m])
      M.save(), M.translate(Z + _t, ct), M.rotate(St), M.scale(st, st), M.drawImage(h, -V * 0.5, -B * 0.5, V, B), M.restore();
    return de.set(v, x), x;
  }
  function Wp() {
    return jo(p, {
      selectedId: d.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function qp(i) {
    return Yc(
      p,
      (a, s, l) => zs(l || a),
      { scene: i }
    );
  }
  function Yp(i) {
    return jo(p, {
      stickers: i ? [i] : [],
      selectedId: d.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Xp(i, a) {
    return Yc(
      p,
      (s, l, h) => zs(h || s),
      { scene: a, stickers: i ? [i] : [] }
    );
  }
  function ea(i, a, s, l, h = "modal_object_view") {
    var M, I, L, V, B;
    if (!i || !a || !s) return !1;
    let m = !1;
    const _ = Bp(), b = Ql(a, s);
    let v = !1;
    const S = !!l && !!l.complete && Number(l.naturalWidth || l.width || 0) > 1 && Number(l.naturalHeight || l.height || 0) > 1;
    if (b)
      v = ag(
        a,
        s,
        S && d.showPanorama ? l : null,
        `${h}_bg_gl`
      ), m = m || !!v;
    else if (S && d.showPanorama) {
      const Z = _a({
        owner: t,
        cacheKey: `${h}_bg_only`,
        ctx: i,
        rect: a,
        img: l,
        view: s
      });
      m = m || !!Z;
    }
    if (d.showObjects)
      for (const Z of Ls(!0)) {
        if (Z.type === "sticker" && Z.item) {
          if (b && v) continue;
          const ct = Yp(Z.item), St = Xp(Z.item, ct), st = Gi({
            owner: t,
            cacheKey: `${h}_sticker_${String(Z.id || Z.item.id || "")}`,
            ctx: i,
            rect: a,
            backgroundSource: null,
            textures: St,
            scene: ct,
            view: s
          });
          m = m || !!st;
          continue;
        }
        if (Z.type === "rasterObject" && Z.item) {
          let ct = ta(Z.item, () => pt());
          if (!ct) continue;
          const St = _ ? `_${_.key}` : "";
          _ && (ct = ql(ct, Z, _));
          const st = ((M = Z.item) == null ? void 0 : M.transform) || {};
          _a({
            owner: t,
            cacheKey: `${h}_raster_${String(Z.id || Z.item.id || "")}`,
            ctx: i,
            rect: a,
            img: ct,
            view: s,
            backgroundRevision: `${fi()}_raster_${String(Z.id || Z.item.id || "")}_${Number(st.du || 0).toFixed(6)}_${Number(st.dv || 0).toFixed(6)}_${Number(st.rot_deg || 0).toFixed(3)}_${Number(st.scale || 1).toFixed(4)}${St}`,
            backgroundOpacity: 1
          }), m = !0;
          continue;
        }
        if (Z.type === "strokeGroup") {
          let ct = ((L = (I = d.paintEngine) == null ? void 0 : I.getGroupDisplayCanvas) == null ? void 0 : L.call(I, Z.actionGroupId)) || null;
          if (!ct) continue;
          _ && (ct = ql(ct, Z, _)), _a({
            owner: t,
            cacheKey: `${h}_group_${String(Z.actionGroupId || "")}`,
            ctx: i,
            rect: a,
            img: ct,
            view: s,
            backgroundRevision: `${$r()}_${String(Z.actionGroupId || "")}${Xi()}`,
            backgroundOpacity: 1
          }), m = !0;
        }
      }
    const x = d.showMask && ((B = (V = d.paintEngine) == null ? void 0 : V.getMaskDisplayCanvas) == null ? void 0 : B.call(V)) || null;
    return x && (_a({
      owner: t,
      cacheKey: `${h}_mask`,
      ctx: i,
      rect: a,
      img: x,
      view: s,
      backgroundRevision: `${$r()}${Xi()}_mask`,
      backgroundOpacity: 1
    }), m = !0), m;
  }
  async function Us(i, a = "sticker.png") {
    const s = new FormData();
    s.append("image", i), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const l = await sn.fetchApi("/upload/image", { method: "POST", body: s });
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
      name: String((i == null ? void 0 : i.name) || a)
    };
  }
  async function js(i, a) {
    const s = await new Promise((b) => i.toBlob(b, "image/png")), l = new FormData();
    l.append("image", s, a), l.append("type", "temp"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const h = await sn.fetchApi("/upload/image", { method: "POST", body: l });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const m = await h.json(), _ = String((m == null ? void 0 : m.name) || "").trim();
    if (!_) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: _,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let Bs = null, na = !1;
  function Zp() {
    const i = ud(p.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const a = p.painting_layer, s = fi();
    return !a || typeof a != "object" || String(a.revision || "") !== s || i.totalPaintCount > 0 && !a.paint || i.totalMaskCount > 0 && !a.mask;
  }
  function Gs() {
    const i = String(t.id ?? "0"), a = xo.get(i);
    if (na && a) return a;
    const s = (async () => {
      var m, _, b, v, S, x, M, I, L, V;
      const l = fi(), h = ud(p.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        p.painting_layer !== null && (p.painting_layer = null, Bs = l, $n());
        return;
      }
      if (Bs !== l && !na) {
        na = !0;
        try {
          di();
          const B = Yi(!1), Z = ((_ = (m = d.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : _.call(m, B)) || null, ct = Wl(B), St = jp(Z), st = Math.max(1, Number(((b = Z == null ? void 0 : Z.descriptor) == null ? void 0 : b.width) || (ct == null ? void 0 : ct.width) || (St == null ? void 0 : St.width) || 2048)), _t = Math.max(1, Number(((v = Z == null ? void 0 : Z.descriptor) == null ? void 0 : v.height) || (ct == null ? void 0 : ct.height) || (St == null ? void 0 : St.height) || 1024));
          (!ct && h.totalPaintCount > 0 || !St && h.totalMaskCount > 0) && ((!d._paintLayerSyncBlankSurface || Number(((S = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : S.width) || 0) !== st || Number(((x = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : x.height) || 0) !== _t) && (d._paintLayerSyncBlankSurface = Fr(st, _t)), d._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, st, _t));
          const yt = ct || h.totalPaintCount > 0 && ((M = d._paintLayerSyncBlankSurface) == null ? void 0 : M.canvas) || null, wt = St || h.totalMaskCount > 0 && ((I = d._paintLayerSyncBlankSurface) == null ? void 0 : I.canvas) || null;
          if (!yt && !wt) return;
          let bt = null, W = null;
          const ht = [];
          if (h.totalPaintCount > 0) {
            bt = await js(yt, `pano_paint_${i}.png`);
            for (const Dt of B) {
              const Ht = String(Dt || "").trim();
              if (!Ht) continue;
              const Tt = ((V = (L = d.paintEngine) == null ? void 0 : L.getGroupDisplayCanvas) == null ? void 0 : V.call(L, Ht)) || null;
              if (!Tt) continue;
              const Vt = Ht.replace(/[^a-zA-Z0-9_-]+/g, "_"), zt = await js(Tt, `pano_group_${i}_${Vt}.png`);
              zt && ht.push({
                id: Ht,
                actionGroupId: Ht,
                image: zt
              });
            }
          }
          h.totalMaskCount > 0 && (W = await js(wt, `pano_mask_${i}.png`)), l === fi() && (p.painting_layer = {
            paint: bt,
            mask: W,
            groups: ht,
            revision: l
          }, Bs = l, $n());
        } catch (B) {
          console.warn("[pano] paint layer upload failed:", B);
        } finally {
          na = !1;
        }
      }
    })();
    return xo.set(i, s), s.finally(() => {
      xo.get(i) === s && xo.delete(i);
    }), s;
  }
  function li() {
    const i = s_(t, "pano_input_images", $t, () => pt());
    if (i) return i;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((_) => String((_ == null ? void 0 : _.name) || "")) : [], s = a.includes("erp_image"), l = a.includes("bg_erp");
    let h = [];
    return r && (s || l) ? h = s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : h = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], pd(t, h, () => pt(), `background:${h.join("|")}`);
  }
  function Yl(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Jp() {
    if (!kt.hasPresentedFrame) return "boot";
    let i = !1, a = !1;
    if (d.showPanorama) {
      const s = li();
      i = !!s && !Yl(s);
    }
    if (d.showObjects) {
      const s = Array.isArray(p.stickers) ? p.stickers : [];
      for (const l of s) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const h = zs(l);
        if (h && !Yl(h)) {
          a = !0;
          break;
        }
      }
    }
    return i && a ? "mixed" : i ? "background" : a ? "stickers" : "";
  }
  function ui() {
    const i = new Set(
      (p.stickers || []).map((a) => String((a == null ? void 0 : a.asset_id) || "")).filter((a) => !!a)
    );
    Object.keys(p.assets || {}).forEach((a) => {
      i.has(a) || (delete p.assets[a], $t.delete(a));
    });
  }
  function Ks(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(j(i.y, -1, 1))
    };
  }
  function Ws(i, a = null) {
    const { lon: s, lat: l } = Ks(i), h = yr();
    let m = h.x + (s / (2 * Math.PI) + 0.5) * h.w;
    const _ = h.y + (0.5 - l / Math.PI) * h.h;
    if (a !== null) {
      for (; m - a > h.w / 2; ) m -= h.w;
      for (; m - a < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: _, z: 1 };
  }
  function ra(i) {
    const a = jn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let s = Zn(0, 1, 0);
    Math.abs(Cn(a, s)) > 0.999 && (s = Zn(0, 0, 1));
    const l = Si(Ea(s, a)), h = Si(Ea(a, l)), m = Math.tan(j(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * He), _ = Math.tan(j(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * He), b = Number(i.rot_deg || i.roll_deg || 0) * He, v = Math.cos(b), S = Math.sin(b);
    return {
      centerDir: a,
      right: l,
      up: h,
      tanX: m,
      tanY: _,
      cr: v,
      sr: S
    };
  }
  function br(i, a, s) {
    const l = a * i.cr - s * i.sr, h = a * i.sr + s * i.cr;
    return Si(Aa(Aa(i.centerDir, Ia(i.right, l)), Ia(i.up, h)));
  }
  function Xl(i) {
    const a = ra(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: h }) => br(a, l * a.tanX, h * a.tanY));
  }
  function Zl(i, a, s) {
    const l = ra(i), h = (a * 2 - 1) * l.tanX, m = (1 - s * 2) * l.tanY;
    return br(l, h, m);
  }
  function Qp(i) {
    const a = (i == null ? void 0 : i.bbox) || null, s = (i == null ? void 0 : i.transform) || {};
    return a ? {
      u: (((Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: j((Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function tg(i) {
    var v, S, x, M;
    const a = (i == null ? void 0 : i.bbox) || null;
    if (!a) return [];
    const s = {
      u: (Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5,
      v: (Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((v = i == null ? void 0 : i.transform) == null ? void 0 : v.scale) || 1)), h = Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.rot_deg) || 0), m = Number(((x = i == null ? void 0 : i.transform) == null ? void 0 : x.du) || 0), _ = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.dv) || 0);
    return [
      { u: Number(a.u0 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v1 || 0) },
      { u: Number(a.u0 || 0), v: Number(a.v1 || 0) }
    ].map((I) => Xo(Zo(I, s, l, h), m, _));
  }
  function eg(i) {
    const a = Ye((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), s = (i == null ? void 0 : i.transform) || {}, l = (i == null ? void 0 : i.bbox) || {}, h = `${a}:${d.mode}:${$r()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (d.mode === "frame") {
      const m = ee(), _ = m ? Je(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function ng(i) {
    const a = String((i == null ? void 0 : i.id) || ""), l = [
      xn(i) ? "frame" : Oe(i) ? "sticker" : "item",
      a,
      d.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      Ni(i)
    ].join(":");
    if (d.mode === "frame") {
      const h = ee(), m = h ? Je(h) : null;
      return `${l}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function rg() {
    var a;
    const i = String(((a = p.ui_settings) == null ? void 0 : a.preview_quality) || "balanced");
    return i === "draft" ? d.hqFrames && d.hqFrames > 0 ? [28, 20] : d.interaction ? [12, 9] : [20, 14] : i === "high" ? d.hqFrames && d.hqFrames > 0 ? [48, 36] : d.interaction ? [20, 14] : [36, 26] : d.hqFrames && d.hqFrames > 0 ? [40, 30] : d.interaction ? [16, 12] : [28, 20];
  }
  function Jl() {
    var i;
    return !!(H && ((i = ot == null ? void 0 : ot.isSupported) != null && i.call(ot)));
  }
  function Ql(i, a) {
    return !Jl() || e !== "stickers" && e !== "cutout" || String((a == null ? void 0 : a.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((C == null ? void 0 : C.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((C == null ? void 0 : C.height) || 0));
  }
  function ig() {
    return e !== "stickers" || !d.showObjects ? { stickers: [], selectedId: null, hoveredId: null } : Wp();
  }
  function og(i) {
    return e !== "stickers" || !d.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : qp(i);
  }
  function tu() {
    if (!H) return;
    const i = H.getContext("webgl2");
    if (i)
      i.viewport(0, 0, H.width, H.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const a = H.getContext("2d");
      a && (a.clearRect(0, 0, H.width, H.height), a.fillStyle = "#070707", a.fillRect(0, 0, H.width, H.height));
    }
    kt.backgroundWasVisible = !1, kt.backgroundDirty = !1;
  }
  function ag(i, a, s, l = "modal_bg_gl") {
    if (!Ql(i, a)) return !1;
    if (!kt.backgroundDirty && kt.backgroundWasVisible) return !0;
    const h = ig(), m = og(h), _ = !!s && !!s.complete && Number(s.naturalWidth || s.width || 0) > 1 && Number(s.naturalHeight || s.height || 0) > 1;
    if (!_ && m.length === 0)
      return tu(), !1;
    const b = _ ? [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|") : "none";
    return ot.renderScene({
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundSource: _ ? s : null,
      backgroundRevision: _ ? `${l}:${b}` : "",
      textures: m,
      scene: h,
      view: a,
      backgroundOpacity: 1
    }) ? (kt.backgroundWasVisible = !0, kt.backgroundDirty = !1, !0) : (tu(), !1);
  }
  function sg(i = !1) {
    const a = C.width, s = C.height, l = yr();
    if (k.globalAlpha = 1, k.lineWidth = 1, i || (k.fillStyle = "#070707", k.fillRect(0, 0, a, s), k.fillStyle = "#070707", k.fillRect(l.x, l.y, l.w, l.h)), di(), ea(
      k,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      li(),
      "modal_unwrap"
    ), d.showGrid && !d.fullscreen) {
      k.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const _ = l.x + l.w * m / 16;
        k.beginPath(), k.moveTo(_, l.y), k.lineTo(_, l.y + l.h), k.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const _ = l.y + l.h * m / 8;
        k.beginPath(), k.moveTo(l.x, _), k.lineTo(l.x + l.w, _), k.stroke();
      }
      k.strokeStyle = "rgba(250, 250, 250, 0.86)", k.lineWidth = 1.2, k.beginPath(), k.moveTo(l.x, l.y + l.h / 2), k.lineTo(l.x + l.w, l.y + l.h / 2), k.stroke(), k.fillStyle = "rgba(250, 250, 250, 0.42)", k.font = "500 11px Geist, sans-serif", k.textAlign = "center";
      const h = l.y + l.h * 0.57;
      k.fillText("Left", l.x + l.w * 0.25, h), k.fillText("Front", l.x + l.w * 0.5, h), k.fillText("Right", l.x + l.w * 0.75, h), k.fillText("Back", l.x + 38, h), k.fillText("Back", l.x + l.w - 38, h);
    }
  }
  function eu(i, a, s = 1) {
    let l = !1;
    k.strokeStyle = a, k.lineWidth = s, k.beginPath();
    for (const h of i) {
      const m = Qi(h);
      if (!m) {
        l = !1;
        continue;
      }
      l ? k.lineTo(m.x, m.y) : (k.moveTo(m.x, m.y), l = !0);
    }
    k.stroke();
  }
  function cg(i = !1) {
    const a = C.width, s = C.height;
    if (i || (Jl() ? k.clearRect(0, 0, a, s) : (k.fillStyle = "#070707", k.fillRect(0, 0, a, s))), di(), ea(
      k,
      { x: 0, y: 0, w: a, h: s },
      {
        mode: "panorama",
        yawDeg: d.viewYaw,
        pitchDeg: d.viewPitch,
        fovDeg: d.viewFov,
        coverageDeg: on(p.coverage)
      },
      li(),
      "modal_pano"
    ), d.showGrid && !d.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let _ = -89; _ <= 89; _ += 4) m.push(jn(h, _));
        eu(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let _ = -180; _ <= 180; _ += 4) m.push(jn(_, h));
        eu(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: jn(-90, 0) },
        { name: "Front", dir: jn(0, 0) },
        { name: "Right", dir: jn(90, 0) },
        { name: "Back", dir: jn(180, 0) }
      ];
      k.fillStyle = "rgba(250, 250, 250, 0.42)", k.font = "500 11px Geist, sans-serif", k.textAlign = "center", l.forEach((h) => {
        const m = Qi(h.dir);
        m && k.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function nu(i, a = null, s = null) {
    if (d.mode === "frame") {
      const l = a || ee();
      if (!l) return [];
      const h = s || Je(l);
      return Vg(i, l, h);
    }
    return Fg(i);
  }
  function lg(i, a) {
    const s = String(i.actionGroupId || i.id || "").trim(), l = Sn(s, i.layerKind), h = [], m = [], _ = d.mode === "frame" ? ee() : null, b = _ ? Je(_) : null;
    for (const st of l) {
      const _t = (st == null ? void 0 : st.geometry) || null, yt = (_t == null ? void 0 : _t.geometryKind) === "lasso_fill" ? _t == null ? void 0 : _t.points : (_t == null ? void 0 : _t.processedPoints) || (_t == null ? void 0 : _t.rawPoints) || (_t == null ? void 0 : _t.points) || [], wt = nu(yt, _, b).filter((ht) => Number.isFinite(ht == null ? void 0 : ht.x) && Number.isFinite(ht == null ? void 0 : ht.y));
      if (!wt.length) continue;
      m.push(...wt);
      const bt = xr(String((st == null ? void 0 : st.toolKind) || "pen")), W = un[bt] || un[sr];
      h.push({
        points: wt,
        closed: String((_t == null ? void 0 : _t.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((st == null ? void 0 : st.size) || 10) * Math.max(0.1, Number((W == null ? void 0 : W.sizeScale) ?? 1)) + 10),
        layerKind: String((st == null ? void 0 : st.layerKind) || i.layerKind || "paint")
      });
    }
    if (!m.length) {
      const st = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(a, st), st;
    }
    let v = 1 / 0, S = 1 / 0, x = -1 / 0, M = -1 / 0;
    for (const st of h)
      for (const yt of Array.isArray(st == null ? void 0 : st.points) ? st.points : []) {
        const wt = Number((yt == null ? void 0 : yt.x) || 0), bt = Number((yt == null ? void 0 : yt.y) || 0);
        v = Math.min(v, wt - 2), S = Math.min(S, bt - 2), x = Math.max(x, wt + 2), M = Math.max(M, bt + 2);
      }
    if (!Number.isFinite(v) || !Number.isFinite(S) || !Number.isFinite(x) || !Number.isFinite(M)) {
      const st = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(a, st), st;
    }
    const I = [
      { x: v, y: S },
      { x, y: S },
      { x, y: M },
      { x: v, y: M }
    ], L = { x: (v + x) * 0.5, y: (S + M) * 0.5 }, V = { x: L.x, y: S }, B = { x, y: L.y }, Z = { x: L.x, y: M }, ct = { x: v, y: L.y }, St = {
      kind: "strokeGroup",
      center: L,
      corners: I,
      edgeMidpoints: [
        { edge: "top", x: V.x, y: V.y, a: I[0], b: I[1] },
        { edge: "right", x: B.x, y: B.y, a: I[1], b: I[2] },
        { edge: "bottom", x: Z.x, y: Z.y, a: I[2], b: I[3] },
        { edge: "left", x: ct.x, y: ct.y, a: I[3], b: I[0] }
      ],
      rotateStemBase: V,
      rotateHandle: { x: V.x, y: V.y - 30 },
      strokePaths: h,
      visible: !0
    };
    return d._strokeGeomCache.set(a, St), St;
  }
  function ug(i, a) {
    const s = tg(i), l = nu(s);
    if (!Array.isArray(l) || l.length < 4) {
      const b = { visible: !1, kind: "rasterObject" };
      return d._strokeGeomCache.set(a, b), b;
    }
    const h = l.slice(0, 4).map((b) => ({ x: Number((b == null ? void 0 : b.x) || 0), y: Number((b == null ? void 0 : b.y) || 0) })), _ = {
      kind: "rasterObject",
      center: {
        x: h.reduce((b, v) => b + Number(v.x || 0), 0) / h.length,
        y: h.reduce((b, v) => b + Number(v.y || 0), 0) / h.length
      },
      corners: h,
      visible: !0
    };
    return d._strokeGeomCache.set(a, _), _;
  }
  function vr(i, a = null, s = null, l = null) {
    if (d.mode === "frame") {
      const St = s || ee(), st = l || Je(St), _t = St ? ro(St, i) : null;
      return _t ? {
        x: Number(st.x || 0) + Number(_t.x || 0) * Number(st.w || 0),
        y: Number(st.y || 0) + Number(_t.y || 0) * Number(st.h || 0),
        z: 1
      } : null;
    }
    if (d.mode === "unwrap") return Ws(i, a);
    const { right: h, up: m, fwd: _ } = Hs(), b = Cn(i, h), v = Cn(i, m), S = Cn(i, _), x = C.width, M = C.height, I = d.viewFov * He, L = 2 * Math.atan(Math.tan(I / 2) * (M / Math.max(x, 1))), V = x / 2 / Math.tan(I / 2), B = M / 2 / Math.tan(L / 2), Z = Math.max(S, 1e-4), ct = Math.max(x, M) * 2;
    return {
      x: j(x / 2 + b / Z * V, -ct, x + ct),
      y: j(M / 2 - v / Z * B, -ct, M + ct),
      z: Z
    };
  }
  function fg(i) {
    const a = jn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), s = d.mode === "frame" ? ee() : null, l = s ? Je(s) : null, h = vr(a, null, s, l);
    if (!h) return { visible: !1 };
    const m = ra(i), b = Xl(i).map((yt) => vr(yt, h.x, s, l)), v = br(m, 0, m.tanY), S = br(m, 0, m.tanY + Math.max(m.tanY * 0.43, 0.053)), x = vr(v, h.x, s, l), M = vr(S, (x == null ? void 0 : x.x) ?? h.x, s, l), I = ((M == null ? void 0 : M.x) ?? x.x) - x.x, L = ((M == null ? void 0 : M.y) ?? x.y) - x.y, V = Math.hypot(I, L) || 1, B = {
      x: x.x + I / V * 30,
      y: x.y + L / V * 30
    }, Z = vr(br(m, 0, m.tanY), h.x, s, l), ct = vr(br(m, m.tanX, 0), h.x, s, l), St = vr(br(m, 0, -m.tanY), h.x, s, l), st = vr(br(m, -m.tanX, 0), h.x, s, l), _t = [
      {
        edge: "top",
        x: Z.x,
        y: Z.y,
        a: { x: b[0].x, y: b[0].y },
        b: { x: b[1].x, y: b[1].y }
      },
      {
        edge: "right",
        x: ct.x,
        y: ct.y,
        a: { x: b[1].x, y: b[1].y },
        b: { x: b[2].x, y: b[2].y }
      },
      {
        edge: "bottom",
        x: St.x,
        y: St.y,
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
      corners: b.map((yt) => ({ x: yt.x, y: yt.y })),
      edgeMidpoints: _t,
      rotateStemBase: { x: x.x, y: x.y },
      rotateHandle: B,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function Fe(i) {
    if (Ee(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = yp(h, i.layerKind), _ = d._strokeGeomCache.get(m);
      return _ || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), lg(i, m));
    }
    if (Xe(i)) {
      const h = eg(i), m = d._strokeGeomCache.get(h);
      return m || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), ug(i, h));
    }
    const a = ng(i), s = d._strokeGeomCache.get(a);
    if (s) return s;
    d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear();
    const l = fg(i);
    return d._strokeGeomCache.set(a, l), l;
  }
  function ia(i, a, s, l = null) {
    const h = [];
    for (let m = 0; m <= s; m += 1) {
      const _ = m / s;
      let b = 0, v = 0;
      a === 0 ? (b = _, v = 0) : a === 1 ? (b = 1, v = _) : a === 2 ? (b = 1 - _, v = 1) : (b = 0, v = 1 - _);
      const S = Zl(i, b, v), x = d.mode === "unwrap" ? Ws(S, l) : Qi(S);
      x && h.push(x);
    }
    return h;
  }
  function dg(i, a) {
    const s = jn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = d.mode === "unwrap" ? Ws(s) : null, h = l ? l.x : null, m = d.mode === "pano" ? 28 : 20, _ = [
      ia(i, 0, m, h),
      ia(i, 1, m, h),
      ia(i, 2, m, h),
      ia(i, 3, m, h)
    ];
    k.strokeStyle = a ? "rgba(250, 250, 250, 0.9)" : "#71717a", k.lineWidth = a ? 2 : 1, k.beginPath();
    let b = !1;
    for (const v of _)
      for (const S of v)
        b ? k.lineTo(S.x, S.y) : (k.moveTo(S.x, S.y), b = !0);
    k.closePath(), k.stroke();
  }
  function hg() {
    const i = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(s.z_index || 0) - Number(l.z_index || 0));
    if (d.mode === "frame") return i;
    const a = Array.isArray(p.shots) ? p.shots : [];
    return [...i, ...a];
  }
  function qs() {
    const i = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(l.z_index || 0) - Number(s.z_index || 0));
    if (d.mode === "frame") return i;
    const a = Array.isArray(p.shots) ? p.shots : [];
    return [...i, ...a];
  }
  function Ys(i, a = []) {
    if (!(!i || !Array.isArray(a) || a.length < 4)) {
      i.beginPath(), i.moveTo(a[0].x, a[0].y);
      for (let s = 1; s < 4; s += 1) i.lineTo(a[s].x, a[s].y);
      i.closePath();
    }
  }
  function pg(i, a, s, l) {
    if (Oe(i)) {
      const h = k.globalAlpha;
      k.globalAlpha = Np(i), d.mode === "frame" ? (k.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", k.lineWidth = s ? 2 : 1, Ys(k, a.corners), k.stroke()) : dg(i, s), k.globalAlpha = h;
      return;
    }
    k.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Ys(k, a.corners), k.fill(), k.strokeStyle = s ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", k.lineWidth = s ? 2.8 : 1.9, Ys(k, a.corners), k.stroke();
  }
  function gg(i, a, s) {
    k.fillStyle = s, a.corners.forEach((l) => {
      k.beginPath(), k.arc(l.x, l.y, 6.5, 0, Math.PI * 2), k.fill();
    }), xn(i) && (k.strokeStyle = s, k.lineCap = "round", k.lineWidth = 4, a.edgeMidpoints.forEach((l) => {
      var x, M, I, L;
      const h = (((x = l.b) == null ? void 0 : x.x) ?? l.x) - (((M = l.a) == null ? void 0 : M.x) ?? l.x), m = (((I = l.b) == null ? void 0 : I.y) ?? l.y) - (((L = l.a) == null ? void 0 : L.y) ?? l.y), _ = Math.hypot(h, m) || 1, b = h / _, v = m / _, S = 10;
      k.beginPath(), k.moveTo(l.x - b * S, l.y - v * S), k.lineTo(l.x + b * S, l.y + v * S), k.stroke();
    }), k.lineCap = "butt"), Ee(i) || (k.strokeStyle = "rgba(250, 250, 250, 0.9)", k.lineWidth = 1.8, k.beginPath(), k.moveTo(a.rotateStemBase.x, a.rotateStemBase.y), k.lineTo(a.rotateHandle.x, a.rotateHandle.y), k.stroke(), k.fillStyle = s, k.beginPath(), k.arc(a.rotateHandle.x, a.rotateHandle.y, 10, 0, Math.PI * 2), k.fill());
  }
  function mg() {
    var b;
    const [i, a] = rg(), s = On(), l = s.length > 1, h = e === "cutout" ? hg() : Te(), m = h.map((v) => `${String((v == null ? void 0 : v.id) || "")}:${xn(v) ? "frame" : Number((v == null ? void 0 : v.z_index) || 0)}`).join("|");
    (!d._sortedItemsCache || d._sortedItemsCache.src !== h || d._sortedItemsCache.orderKey !== m) && (d._sortedItemsCache = {
      src: h,
      orderKey: m,
      sorted: [...h]
    });
    const _ = d._sortedItemsCache.sorted;
    for (const v of _) {
      const S = !l && bp(v);
      if (d.mode === "frame" && !S || !d.showObjects && !xn(v)) continue;
      const x = Fe(v);
      if (e !== "stickers" && !x.visible)
        continue;
      const M = Oe(v), I = mr(v);
      if (pg(v, x, S, I), S && x.visible) {
        const L = I ? "#ff4d4f" : M && Ce(v) ? "#f59e0b" : "#0070f3";
        gg(v, x, L);
      }
    }
    if (l) {
      const v = Os(s);
      if (v != null && v.visible) {
        const S = Fs(s) ? "#ff4d4f" : "#0070f3";
        k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.95)", k.lineWidth = 2, k.setLineDash([6, 4]), k.beginPath(), k.moveTo(v.corners[0].x, v.corners[0].y);
        for (let x = 1; x < v.corners.length; x += 1) k.lineTo(v.corners[x].x, v.corners[x].y);
        k.closePath(), k.stroke(), k.setLineDash([]), k.fillStyle = S, v.corners.forEach((x) => {
          k.beginPath(), k.arc(x.x, x.y, 6.5, 0, Math.PI * 2), k.fill();
        }), k.restore();
      }
    } else
      s.forEach((v) => {
        if (!Ee(v) && !Xe(v)) return;
        const S = Fe(v);
        if (!(S != null && S.visible)) return;
        const x = mr(v) ? "#ff4d4f" : "#0070f3";
        k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.95)", k.lineWidth = 2, k.setLineDash([6, 4]), k.beginPath(), k.moveTo(S.corners[0].x, S.corners[0].y);
        for (let M = 1; M < S.corners.length; M += 1) k.lineTo(S.corners[M].x, S.corners[M].y);
        k.closePath(), k.stroke(), k.setLineDash([]), Ee(v) && (k.fillStyle = x, S.corners.forEach((M) => {
          k.beginPath(), k.arc(M.x, M.y, 6.5, 0, Math.PI * 2), k.fill();
        })), k.restore();
      });
    if (((b = d.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const v = Su(d.interaction.start, d.interaction.current);
      k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.9)", k.fillStyle = "rgba(255, 255, 255, 0.08)", k.lineWidth = 1, k.setLineDash([5, 4]), k.beginPath(), k.rect(v.x0, v.y0, v.x1 - v.x0, v.y1 - v.y0), k.fill(), k.stroke(), k.restore();
    }
    d.hqFrames && i >= 40 && a >= 30 && (d.hqFrames -= 1, d.hqFrames > 0 && pt());
  }
  function ru(i) {
    const a = Ti(i), s = j(Number((a == null ? void 0 : a.aspect) || 1), 0.05, 20), l = 320;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function yg() {
    var s;
    const i = Array.isArray(p.stickers) ? p.stickers : [], a = Array.isArray((s = p.painting) == null ? void 0 : s.raster_objects) ? p.painting.raster_objects : [];
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
      rasters: a.filter((l) => String((l == null ? void 0 : l.layerKind) || "paint") === "paint").map((l) => ({
        id: String((l == null ? void 0 : l.id) || ""),
        visible: (l == null ? void 0 : l.visible) !== !1,
        z_index: Number((l == null ? void 0 : l.z_index) || 0),
        transform: (l == null ? void 0 : l.transform) || null,
        bbox: (l == null ? void 0 : l.bbox) || null
      }))
    });
  }
  function iu(i, a = {}) {
    if (!i) return "";
    const s = li(), l = s && (s.complete || s.naturalWidth || s.width) ? [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|") : "no_bg", h = ru(i);
    return [
      String((i == null ? void 0 : i.id) || ""),
      JSON.stringify(i || null),
      fi(),
      yg(),
      Xi(),
      l,
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(a.quality || "balanced")
    ].join("|");
  }
  function ou(i = {}) {
    var b, v;
    if (e !== "cutout") return null;
    const a = i.shot || ee();
    if (!a)
      return t.__panoCutoutPreviewSurface = null, null;
    const s = ru(a);
    (!t.__panoCutoutPreviewCanvas || Number(t.__panoCutoutPreviewCanvas.width || 0) !== s.width || Number(t.__panoCutoutPreviewCanvas.height || 0) !== s.height) && (t.__panoCutoutPreviewCanvas = document.createElement("canvas"), t.__panoCutoutPreviewCanvas.width = s.width, t.__panoCutoutPreviewCanvas.height = s.height);
    const l = iu(a, i);
    if (((b = t.__panoCutoutPreviewSurface) == null ? void 0 : b.source) === t.__panoCutoutPreviewCanvas && ((v = t.__panoCutoutPreviewSurface) == null ? void 0 : v.revision) === l)
      return t.__panoCutoutPreviewSurface;
    const h = t.__panoCutoutPreviewCanvas, m = h.getContext("2d");
    return m ? vg(
      m,
      { x: 0, y: 0, w: s.width, h: s.height },
      a,
      {
        cachePrefix: "shared_cutout_preview_surface",
        quality: String(i.quality || "balanced")
      }
    ) ? (t.__panoCutoutPreviewSurface = {
      source: h,
      revision: l
    }, t.__panoCutoutPreviewSurface) : t.__panoCutoutPreviewSurface || null : (t.__panoCutoutPreviewSurface = null, null);
  }
  function bg() {
    if (e !== "cutout") return;
    const i = ee();
    if (!i) {
      d.outputPreviewRect = null, lt && (lt.style.display = "none");
      return;
    }
    const a = 14, s = j(Number(d.outputPreviewAnim ?? (d.outputPreviewExpanded ? 1 : 0)), 0, 1), l = Math.max(120, Math.min(250, C.width * 0.28)), h = Math.max(260, Math.min(560, C.width * 0.62)), m = Math.max(76, Math.min(150, C.height * 0.22)), _ = Math.max(160, Math.min(340, C.height * 0.48)), b = An(l, h, s), v = An(m, _, s), S = Ti(i), x = Number((S == null ? void 0 : S.aspect) || 1);
    let M = b, I = M / x;
    I > v && (I = v, M = I * x);
    const L = C.width - a - M, V = a, B = 12;
    d.outputPreviewRect = { x: L, y: V, w: M, h: I };
    const Z = () => {
      if (!lt) return;
      const wt = `${Math.round(L + M - 8 - 24)}px`, bt = `${Math.round(V + 8)}px`;
      lt.style.display = "inline-flex", lt.style.left !== wt && (lt.style.left = wt), lt.style.top !== bt && (lt.style.top = bt);
    }, ct = (wt, bt, W, ht, Dt) => {
      const Ht = Math.max(0, Math.min(Dt, Math.min(W, ht) * 0.5));
      k.beginPath(), typeof k.roundRect == "function" ? k.roundRect(wt, bt, W, ht, Ht) : (k.moveTo(wt + Ht, bt), k.arcTo(wt + W, bt, wt + W, bt + ht, Ht), k.arcTo(wt + W, bt + ht, wt, bt + ht, Ht), k.arcTo(wt, bt + ht, wt, bt, Ht), k.arcTo(wt, bt, wt + W, bt, Ht)), k.closePath();
    };
    k.save(), k.shadowColor = "rgba(0, 0, 0, 0.45)", k.shadowBlur = 22, k.shadowOffsetX = 0, k.shadowOffsetY = 8, k.fillStyle = "rgba(10, 10, 10, 0.72)", ct(L, V, M, I, B), k.fill(), k.restore(), k.save(), ct(L, V, M, I, B), k.clip();
    const St = iu(i, { quality: "balanced" });
    let st = t.__panoCutoutPreviewSurface;
    (!st || st.revision !== St) && !d.interaction && !d.cutoutPreviewSurfaceRaf && !d.cutoutPreviewSurfaceTimer && (st = ou({ shot: i, quality: "balanced" }));
    const _t = (st == null ? void 0 : st.source) || null, yt = !!(_t && Number(_t.width || 0) > 1 && Number(_t.height || 0) > 1);
    if ((st == null ? void 0 : st.revision) !== St && Xs(), !yt) {
      k.fillStyle = "rgba(255, 255, 255, 0.06)", k.fillRect(L, V, M, I), k.strokeStyle = "rgba(255, 255, 255, 0.12)", k.lineWidth = 1, k.strokeRect(L + 0.5, V + 0.5, M - 1, I - 1), Xs(), k.restore(), Z();
      return;
    }
    k.drawImage(_t, L, V, M, I), k.restore(), Z();
  }
  function vg(i, a, s, l = {}) {
    const h = li();
    return Gb({
      owner: t,
      ctx: i,
      rect: a,
      shot: s,
      bgImage: h,
      cachePrefix: String(l.cachePrefix || "modal_cutout_output_preview"),
      quality: String(l.quality || "balanced"),
      drawDisplayList: ea
    });
  }
  function _g() {
    ou();
  }
  function Xs() {
    if (e !== "cutout") return;
    const i = performance.now(), a = mp(), s = i - Number(d.cutoutPreviewSurfaceLastTs || 0);
    if (d.cutoutPreviewSurfaceRaf || d.cutoutPreviewSurfaceTimer) return;
    const l = () => {
      d.cutoutPreviewSurfaceRaf = requestAnimationFrame(() => {
        var h, m, _, b, v, S, x, M;
        d.cutoutPreviewSurfaceRaf = 0, d.cutoutPreviewSurfaceLastTs = performance.now(), _g(), kt.dirty = !0, (m = (h = t.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || m.call(h), (_ = t.setDirtyCanvas) == null || _.call(t, !0, !1), (v = (b = t.graph) == null ? void 0 : b.setDirtyCanvas) == null || v.call(b, !0, !0), (M = (x = (S = yn) == null ? void 0 : S.canvas) == null ? void 0 : x.setDirty) == null || M.call(x, !0, !0);
      });
    };
    if (s >= a) {
      l();
      return;
    }
    d.cutoutPreviewSurfaceTimer = window.setTimeout(() => {
      d.cutoutPreviewSurfaceTimer = 0, d.cutoutPreviewSurfaceRaf || l();
    }, Math.max(0, Math.ceil(a - s)));
  }
  function Zs(i, a) {
    if (!i || !a) return null;
    const s = Number(a.x || 0), l = Number(a.y || 0);
    return Zl(i, s, l);
  }
  function eo(i) {
    if (!i) return null;
    const a = (Number(i.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(i.v || 0)) * Math.PI, l = Math.cos(s);
    return Zn(l * Math.sin(a), Math.sin(s), l * Math.cos(a));
  }
  function Ze(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function _r(i, a, s, l = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Ue(i, "widthScale", 1),
      pressureLike: Ue(i, "pressureLike", 1)
    }, ...l, u: a, v: s };
  }
  function wg(i, a, s) {
    const l = Ze(i), h = Ze(a);
    return _r(i, An(l.x, h.x, s), An(l.y, h.y, s), {
      t: An(Number((i == null ? void 0 : i.t) || 0), Number((a == null ? void 0 : a.t) || 0), s),
      widthScale: An(Ue(i, "widthScale", 1), Ue(a, "widthScale", 1), s),
      pressureLike: An(Ue(i, "pressureLike", 1), Ue(a, "pressureLike", 1), s)
    });
  }
  function xg(i, a = !1) {
    return a ? 12e-4 : 18e-4;
  }
  function Js(i, a, s = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    if (i.length === 1) return [_r(i[0], Ze(i[0]).x, Ze(i[0]).y)];
    const l = xg(a, s), h = (x, M) => {
      const I = [0];
      for (let _t = 1; _t < x.length; _t += 1) {
        const yt = Ze(x[_t - 1]), wt = Ze(x[_t]);
        I.push(I[_t - 1] + Math.hypot(wt.x - yt.x, wt.y - yt.y));
      }
      const L = I[I.length - 1] || 0;
      if (L <= 1e-8) {
        const _t = x[0], yt = Ze(_t);
        return [_r(_t, yt.x, yt.y)];
      }
      const V = [];
      let B = 0;
      for (let _t = 0; _t <= L + 1e-9; _t += M) {
        for (; B < I.length - 2 && I[B + 1] < _t; ) B += 1;
        const yt = I[B], wt = I[B + 1], bt = Math.max(1e-8, wt - yt);
        V.push(wg(x[B], x[B + 1], j((_t - yt) / bt, 0, 1)));
      }
      const Z = x[x.length - 1], ct = Ze(Z), St = V[V.length - 1], st = St ? Ze(St) : null;
      return (!st || Math.hypot(st.x - ct.x, st.y - ct.y) > M * 0.35) && V.push(_r(Z, ct.x, ct.y)), V;
    }, m = (x) => {
      if (!Array.isArray(x) || x.length < 3) return x ? x.slice() : [];
      const M = [_r(x[0], Ze(x[0]).x, Ze(x[0]).y)];
      for (let I = 0; I < x.length - 1; I += 1) {
        const L = x[I], V = x[I + 1], B = Ze(L), Z = Ze(V), ct = _r(
          L,
          B.x * 0.75 + Z.x * 0.25,
          B.y * 0.75 + Z.y * 0.25,
          {
            t: Number(L.t || 0) * 0.75 + Number(V.t || 0) * 0.25,
            widthScale: Ue(L, "widthScale", 1) * 0.75 + Ue(V, "widthScale", 1) * 0.25,
            pressureLike: Ue(L, "pressureLike", 1) * 0.75 + Ue(V, "pressureLike", 1) * 0.25
          }
        ), St = _r(
          L,
          B.x * 0.25 + Z.x * 0.75,
          B.y * 0.25 + Z.y * 0.75,
          {
            t: Number(L.t || 0) * 0.25 + Number(V.t || 0) * 0.75,
            widthScale: Ue(L, "widthScale", 1) * 0.25 + Ue(V, "widthScale", 1) * 0.75,
            pressureLike: Ue(L, "pressureLike", 1) * 0.25 + Ue(V, "pressureLike", 1) * 0.75
          }
        );
        M.push(ct, St);
      }
      return M.push(_r(x[x.length - 1], Ze(x[x.length - 1]).x, Ze(x[x.length - 1]).y)), M;
    }, _ = h(i, l);
    if (_.length < 3) return _;
    const b = s ? 2 : 1;
    let v = _.slice();
    for (let x = 0; x < b; x += 1) v = m(v);
    return h(v, Math.max(l * 0.75, 55e-5));
  }
  function Ue(i, a, s = 1) {
    const l = Number(i == null ? void 0 : i[a]);
    return Number.isFinite(l) ? Math.max(0, l) : s;
  }
  function Sg(i) {
    const a = Number(i == null ? void 0 : i.radiusValue);
    if (Number.isFinite(a) && a > 0) {
      const s = String((i == null ? void 0 : i.radiusModel) || "").trim() || "erp_uv_norm";
      return s === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
      } : {
        model: s,
        value: a
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
    };
  }
  function Fr(i, a) {
    const s = document.createElement("canvas");
    s.width = Math.max(1, Math.round(i)), s.height = Math.max(1, Math.round(a));
    const l = s.getContext("2d");
    return l && (l.clearRect(0, 0, s.width, s.height), l.imageSmoothingEnabled = !0), { canvas: s, ctx: l };
  }
  function $r() {
    const i = oa();
    return `${String(d.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function fi() {
    const i = oa();
    return `${String(d.paintStrokeRevision)}:${String(d.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Ng() {
    d.paintStrokeRevision += 1, d.paintCompositeRevision += 1;
  }
  function Mg() {
    d.paintCompositeRevision += 1;
  }
  function Pg() {
    d._sortedItemsCache = null, d._strokeGeomCache.clear();
  }
  function au() {
    var i, a;
    d.paintEngineRevisionKey = null, (a = (i = d.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || a.call(i, p), d.paintEngineRevisionKey = $r();
  }
  function vn() {
    d.objectVisualRevision = Number(d.objectVisualRevision || 0) + 1, Pg();
  }
  function Fn({ rebuildPaintEngine: i = !1 } = {}) {
    Ng(), vn(), i && au();
  }
  function no() {
    Mg(), vn();
  }
  function di() {
    var l;
    const i = oa(), a = `${i.width}x${i.height}`;
    d.paintEngineDescriptorKey !== a && (d.paintEngine = Wc(i), d.paintEngineDescriptorKey = a, d.paintEngineRevisionKey = "");
    const s = $r();
    d.paintEngineRevisionKey !== s && (d.paintEngineRevisionKey = s, (l = d.paintEngine) == null || l.rebuildCommitted(p));
  }
  function oa() {
    const i = Math.max(1, Number((p == null ? void 0 : p.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function nr() {
    return oa();
  }
  function kg(i, a, s, l, h = null) {
    const m = Sg(i), _ = Ue(a, "widthScale", 1) * Ue(a, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * s * _) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * He) * s * _) : Math.max(0.5, m.value / (2 * Math.PI) * s * _) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * _);
  }
  function Cg(i, a, s = {}) {
    const l = String((a == null ? void 0 : a.layerKind) || "paint"), h = String((a == null ? void 0 : a.toolKind) || "pen"), m = s.preview === !0, _ = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * _ : 1, l === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((a == null ? void 0 : a.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (a == null ? void 0 : a.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, v = m ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${v})`;
  }
  function Ag(i, a, s) {
    const l = Math.max(0.5, Math.min(s, Number((a == null ? void 0 : a.radiusPx) || 0.5)));
    !Number.isFinite(a == null ? void 0 : a.x) || !Number.isFinite(a == null ? void 0 : a.y) || !Number.isFinite(l) || (i.beginPath(), i.arc(Number(a.x || 0), Number(a.y || 0), l, 0, Math.PI * 2), i.fill());
  }
  function Ig(i, a, s, l, h = {}) {
    if (!i || !Array.isArray(a) || !a.length) return;
    const m = Math.max(l.w, l.h) * 0.25;
    i.save(), Cg(i, s, h);
    const _ = (b) => Ag(i, b, m);
    if (a.length === 1) {
      _(a[0]), i.restore();
      return;
    }
    for (let b = 0; b < a.length - 1; b += 1) {
      const v = a[b], S = a[b + 1];
      if (!v || !S) continue;
      const x = Number(v.x || 0), M = Number(v.y || 0), I = Number(S.x || 0), L = Number(S.y || 0), V = Math.max(0.5, Math.min(m, Number(v.radiusPx || 0.5))), B = Math.max(0.5, Math.min(m, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(x) || !Number.isFinite(M) || !Number.isFinite(I) || !Number.isFinite(L) || !Number.isFinite(V) || !Number.isFinite(B)) continue;
      const Z = I - x, ct = L - M, St = Math.hypot(Z, ct);
      if (!Number.isFinite(St) || St < 1e-6) {
        _(v);
        continue;
      }
      if (St > Math.max(l.w, l.h) * 0.5) continue;
      const st = Math.max(0.5, Math.min(V, B)), _t = Math.max(0.35, Math.min(st * 0.4, 2.25)), yt = Math.max(1, Math.ceil(St / _t));
      for (let wt = 0; wt <= yt; wt += 1) {
        const bt = wt / yt;
        _({
          x: An(x, I, bt),
          y: An(M, L, bt),
          radiusPx: An(V, B, bt)
        });
      }
    }
    _(a[a.length - 1]), i.restore();
  }
  function Eg(i, a, s, l) {
    Ig(i, a, s, l, { preview: !1 });
  }
  function Tg(i, a, s, l, h) {
    var b, v, S, x;
    if (!i || !Array.isArray(a) || a.length < 3) return;
    const m = "u", _ = "v";
    if (i.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const M = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(M.r || 0) * 255)}, ${Math.round(Number(M.g || 0) * 255)}, ${Math.round(Number(M.b || 0) * 255)}, ${Number(M.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((b = a[0]) == null ? void 0 : b[m]) || 0) * l.w, Number(((v = a[0]) == null ? void 0 : v[_]) || 0) * l.h);
    for (let M = 1; M < a.length; M += 1)
      i.lineTo(Number(((S = a[M]) == null ? void 0 : S[m]) || 0) * l.w, Number(((x = a[M]) == null ? void 0 : x[_]) || 0) * l.h);
    i.closePath(), i.fill(), i.restore();
  }
  function su(i) {
    const a = (i == null ? void 0 : i.geometry) || null;
    return a ? String(a.geometryKind || "") === "lasso_fill" ? Array.isArray(a.points) ? a.points : [] : Array.isArray(a.processedPoints) && a.processedPoints.length ? a.processedPoints : Array.isArray(a.rawPoints) && a.rawPoints.length ? a.rawPoints : Array.isArray(a.points) ? a.points : [] : [];
  }
  function Dg(i, a) {
    const s = su(i);
    return !Array.isArray(s) || !s.length ? [] : s.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((a == null ? void 0 : a.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((a == null ? void 0 : a.h) || 1),
      radiusPx: kg(i, l, Number((a == null ? void 0 : a.w) || 1), Number((a == null ? void 0 : a.h) || 1))
    }));
  }
  function cu(i, a, s = null) {
    var b, v, S, x;
    if (!(i != null && i.ctx) || !a) return !1;
    const l = s || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((v = i.canvas) == null ? void 0 : v.height) || 0) }, h = String((a == null ? void 0 : a.toolKind) || "") === "eraser" ? {
      ...a,
      layerKind: "mask",
      toolKind: String(((S = a == null ? void 0 : a.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : a;
    if (String(((x = a == null ? void 0 : a.geometry) == null ? void 0 : x.geometryKind) || "") === "lasso_fill")
      return Tg(i.ctx, su(h), h, l), !0;
    const _ = Dg(h, l);
    return _.length ? (Eg(i.ctx, _, h, l), !0) : !1;
  }
  function Lg(i, a, s, l = 8) {
    const h = new Uint8Array(a * s), m = [], _ = new Int32Array(a * s), b = new Int32Array(a * s);
    for (let v = 0; v < s; v += 1)
      for (let S = 0; S < a; S += 1) {
        const x = v * a + S;
        if (h[x] || i[x] <= l) continue;
        let M = 0, I = 0;
        _[I] = S, b[I] = v, I += 1, h[x] = 1;
        const L = [];
        let V = S, B = v, Z = S, ct = v;
        for (; M < I; ) {
          const St = _[M], st = b[M];
          M += 1, L.push({ x: St, y: st }), St < V && (V = St), st < B && (B = st), St > Z && (Z = St), st > ct && (ct = st);
          const _t = [
            [St - 1, st],
            [St + 1, st],
            [St, st - 1],
            [St, st + 1]
          ];
          for (const [yt, wt] of _t) {
            if (yt < 0 || wt < 0 || yt >= a || wt >= s) continue;
            const bt = wt * a + yt;
            h[bt] || i[bt] <= l || (h[bt] = 1, _[I] = yt, b[I] = wt, I += 1);
          }
        }
        m.push({ pixels: L, minX: V, minY: B, maxX: Z, maxY: ct });
      }
    return m;
  }
  function Rg(i, a, s = {}) {
    var S;
    const l = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (S = i == null ? void 0 : i.getContext) == null ? void 0 : S.call(i, "2d");
    if (!m || l < 1 || h < 1) return [];
    const _ = m.getImageData(0, 0, l, h), b = new Uint8Array(l * h);
    for (let x = 0; x < b.length; x += 1) b[x] = _.data[x * 4 + 3];
    return Lg(b, l, h, 8).map((x, M) => {
      const I = x.maxX - x.minX + 1, L = x.maxY - x.minY + 1, V = document.createElement("canvas");
      V.width = I, V.height = L;
      const B = V.getContext("2d");
      if (!B) return null;
      const Z = B.createImageData(I, L);
      return x.pixels.forEach(({ x: ct, y: St }) => {
        const st = (St * l + ct) * 4, _t = ((St - x.minY) * I + (ct - x.minX)) * 4;
        Z.data[_t + 0] = _.data[st + 0], Z.data[_t + 1] = _.data[st + 1], Z.data[_t + 2] = _.data[st + 2], Z.data[_t + 3] = _.data[st + 3];
      }), B.putImageData(Z, 0, 0), {
        id: Mi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + M * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: x.minX / l,
          v0: x.minY / h,
          u1: (x.maxX + 1) / l,
          v1: (x.maxY + 1) / h
        },
        rasterDataUrl: V.toDataURL("image/png"),
        transform: {
          du: 0,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function ro(i, a) {
    if (!i || !a) return null;
    const s = ra(i), l = Cn(a, s.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const h = Cn(a, s.right) / l, m = Cn(a, s.up) / l, _ = h * s.cr + m * s.sr, b = -h * s.sr + m * s.cr;
    return {
      x: (_ / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function Og(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (d.mode === "unwrap") {
      const s = yr();
      return i.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const a = i.map((s) => Qi(eo(s))).filter(Boolean);
    return a.every((s) => Number(s.z || 0) > 0) ? a.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function Fg(i) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (d.mode === "unwrap") {
      const s = yr();
      return i.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const a = i.map((s) => Qi(eo(s))).filter(Boolean);
    return a.every((s) => Number(s.z || 0) > 0) ? a.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function $g(i, a = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let s = 0; s < i.length; s += 1) {
      const l = i[s], h = i[(s + 1) % i.length];
      if (!l || !h || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(l.x), Number(h.y) - Number(l.y)) > a) return !1;
    }
    return !0;
  }
  function Hg(i, a, s) {
    if (!Array.isArray(i) || i.length < 3 || !a || !s) return [];
    const l = [];
    for (const h of i) {
      const m = eo(h), _ = ro(a, m);
      if (!_) return [];
      l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return $g(l, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? l : [];
  }
  function Vg(i, a, s) {
    if (!Array.isArray(i) || i.length < 1 || !a || !s) return [];
    const l = [];
    for (const h of i) {
      const m = eo(h), _ = ro(a, m);
      _ && l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return l;
  }
  function zg() {
    var l;
    const i = ee(), a = Je(i), s = li();
    if (!i || !a) return !1;
    if (k.save(), k.fillStyle = "#050505", k.fillRect(0, 0, C.width, C.height), k.shadowColor = "rgba(0, 0, 0, 0.45)", k.shadowBlur = 24, k.shadowOffsetX = 0, k.shadowOffsetY = 10, k.fillStyle = "rgba(14, 14, 14, 1)", k.fillRect(a.x, a.y, a.w, a.h), k.restore(), k.save(), k.beginPath(), k.rect(a.x, a.y, a.w, a.h), k.clip(), s && (s.complete || s.naturalWidth || s.width) && Number(s.naturalWidth || s.width || 0) > 1 && Number(s.naturalHeight || s.height || 0) > 1) {
      const h = Ti(i);
      ea(k, a, h, s, `modal_frame_${String(i.id || "")}`) || drawCutoutProjectionPreview(
        k,
        t,
        s,
        a,
        i,
        String(((l = p.ui_settings) == null ? void 0 : l.preview_quality) || "balanced")
      );
    } else
      k.fillStyle = "rgba(255, 255, 255, 0.03)", k.fillRect(a.x, a.y, a.w, a.h);
    return k.restore(), k.save(), k.strokeStyle = "rgba(255, 255, 255, 0.12)", k.lineWidth = 1, k.strokeRect(a.x + 0.5, a.y + 0.5, a.w - 1, a.h - 1), k.restore(), !0;
  }
  function Ug() {
    var v, S;
    if (((v = d.interaction) == null ? void 0 : v.kind) !== "paint_lasso_fill") return;
    const i = d.interaction.stroke, a = (S = i == null ? void 0 : i.geometry) == null ? void 0 : S.points;
    let s;
    if (d.mode === "frame") {
      const x = ee(), M = Je(x);
      s = Hg(a, x, M);
    } else
      s = Og(a);
    if (!Array.isArray(s) || s.length < 3) return;
    const l = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), _ = Math.round(Number(h.g || 0) * 255), b = Math.round(Number(h.b || 0) * 255);
    k.save(), k.beginPath(), k.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let x = 1; x < s.length; x++) k.lineTo(Number(s[x].x || 0), Number(s[x].y || 0));
    k.closePath(), l ? (k.lineWidth = 2, k.setLineDash([6, 6]), k.lineDashOffset = 0, k.strokeStyle = "rgba(0,0,0,0.96)", k.stroke(), k.lineDashOffset = -6, k.strokeStyle = "rgba(255,255,255,0.96)", k.stroke(), k.setLineDash([]), k.lineDashOffset = 0) : (k.lineWidth = 1.5, k.setLineDash([6, 4]), k.strokeStyle = `rgba(${m},${_},${b},1)`, k.stroke(), k.setLineDash([])), k.restore();
  }
  function jg() {
    d.mode === "frame" ? zg() : d.mode === "unwrap" ? sg(!1) : cg(!1), mg(), d.mode !== "frame" && bg(), Ug(), ft && (ft.textContent = `${Math.round(d.viewFov)}°`), Gt(), kt.hasPresentedFrame || (kt.hasPresentedFrame = !0, H.style.opacity = "1");
    const i = Jp();
    i ? (T == null || T.removeAttribute("data-stage-ready"), T == null || T.setAttribute("data-stage-loading-kind", i)) : (T == null || T.setAttribute("data-stage-ready", ""), T == null || T.removeAttribute("data-stage-loading-kind"));
  }
  function Bg() {
    var a;
    if (e !== "cutout") return !1;
    const i = String(((a = d.interaction) == null ? void 0 : a.kind) || "");
    return i === "move" || i === "scale" || i === "scale_x" || i === "scale_y" || i === "rotate";
  }
  function Gg(i = d.interaction) {
    if (e !== "stickers" || d.mode !== "pano") return !1;
    const a = String((i == null ? void 0 : i.kind) || "");
    return a === "move" || a === "scale" || a === "scale_x" || a === "scale_y" || a === "rotate" ? !0 : a === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Kg(i = {}) {
    var l, h, m, _;
    const a = i.updateCutoutPreview !== !1;
    if (t.__panoLiveStateOverride = p, e === "cutout") {
      t.__panoLivePaintSurface = null, a && Xs();
      return;
    }
    let s = null;
    try {
      const b = Yi(!1), v = Yo(), S = ((_ = (m = (h = (l = d.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, b)) == null ? void 0 : m.displayPaint) == null ? void 0 : _.canvas) || null, x = v ? null : Wl(b), M = v ? S || x : x || S;
      M && (s = {
        source: M,
        revision: `${fi()}:${Xi()}`
      });
    } catch {
      s = null;
    }
    t.__panoLivePaintSurface = s;
  }
  function pt(i = {}) {
    var v, S, x, M, I, L, V, B, Z, ct;
    const a = !!i.localOnly, s = i.externalSync === !0, l = String(i.cause || ""), h = String(((v = d.interaction) == null ? void 0 : v.kind) || "");
    (!a || h === "view" || h === "pan_frame" || Gg() || !!((S = d.viewTween) != null && S.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (kt.backgroundDirty = !0), a && Yo() && (d.livePaintInteractionRevision += 1), (!a || l === "selection" || l === "mode" || l === "cutout_frame") && (Jo(), Qo());
    const b = e === "cutout" && (!a || l === "paint" || l === "cutout_frame" || l === "frame_transform" || l === "frame_view" || Tl() || Bg());
    Kg({ updateCutoutPreview: b }), s && (b || !a || e !== "cutout") && ((M = (x = t.__panoDomPreview) == null ? void 0 : x.requestDraw) == null || M.call(x), (I = t.setDirtyCanvas) == null || I.call(t, !0, !1)), s && !a && ((V = (L = t.graph) == null ? void 0 : L.setDirtyCanvas) == null || V.call(L, !0, !0), (ct = (Z = (B = yn) == null ? void 0 : B.canvas) == null ? void 0 : Z.setDirty) == null || ct.call(Z, !0, !0)), kt.dirty = !0;
  }
  function lu() {
    const i = C.getBoundingClientRect(), a = Math.max(2, Math.round(i.width)), s = Math.max(2, Math.round(i.height));
    return C.width !== a || C.height !== s ? (C.width = a, C.height = s, kt.backgroundDirty = !0, kt.dirty = !0, e === "cutout" && (kt.pendingStableLayoutFrames = Math.max(Number(kt.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Qs(i = performance.now()) {
    var a;
    if (kt.running) {
      if (kt.lastTickTs = i, d.outputPreviewAnim !== d.outputPreviewAnimTo) {
        const s = Math.max(1, Number(d.outputPreviewAnimDurationMs)), l = j((i - Number(d.outputPreviewAnimStartTs || 0)) / s, 0, 1), m = d.outputPreviewAnimTo > d.outputPreviewAnimFrom ? Tv(l) : Dv(l);
        d.outputPreviewAnim = An(d.outputPreviewAnimFrom, d.outputPreviewAnimTo, m), kt.dirty = !0, l >= 1 && (d.outputPreviewAnim = d.outputPreviewAnimTo);
      }
      if ((a = d.viewTween) != null && a.active) {
        const s = d.viewTween, l = j((i - s.startTs) / s.durationMs, 0, 1), h = Ev(l);
        d.viewYaw = Ve(s.startYaw + s.deltaYaw * h), d.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * h, d.viewFov = s.startFov + (s.targetFov - s.startFov) * h, kt.backgroundDirty = !0, kt.dirty = !0, l >= 1 && (d.viewTween = null);
      }
      if (d.viewInertia.vx = Number($e.state.inertia.vx || 0), d.viewInertia.vy = Number($e.state.inertia.vy || 0), d.viewInertia.active = !!$e.state.inertia.active, $e.stepInertia(i) && (d.viewInertia.vx = Number($e.state.inertia.vx || 0), d.viewInertia.vy = Number($e.state.inertia.vy || 0), d.viewInertia.active = !!$e.state.inertia.active, kt.backgroundDirty = !0, kt.dirty = !0), (kt.dirty || i - kt.lastSizeCheckTs >= 220) && (lu(), kt.lastSizeCheckTs = i), kt.pendingStableLayoutFrames > 0 && (kt.pendingStableLayoutFrames -= 1, kt.dirty = !0), kt.dirty) {
        if (kt.pendingStableLayoutFrames > 0) {
          kt.rafId = requestAnimationFrame(Qs);
          return;
        }
        kt.dirty = !1, jg();
      }
      kt.rafId = requestAnimationFrame(Qs);
    }
  }
  function Wg() {
    kt.running = !1, kt.rafId && cancelAnimationFrame(kt.rafId), kt.rafId = 0;
  }
  function le() {
    r || (d.historyController.commitActionGroup(JSON.stringify(fd(p))), oc());
  }
  function io(i) {
    if (r) return;
    const a = i < 0 ? d.historyController.undo() : d.historyController.redo();
    if (oc(), !a) return;
    const s = JSON.parse(a);
    Object.keys(p).forEach((l) => delete p[l]), Object.assign(p, s), d.selectedId = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, d.selectedIds = d.selectedId ? [d.selectedId] : [], Fn(), pn(), qt(), $n(), pt({ cause: "cutout_frame" });
  }
  function uu() {
    var s, l;
    const i = Array.isArray((s = d.historyController) == null ? void 0 : s.entries) ? d.historyController.entries : [], a = Number((l = d.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !r && i.length > 1 && a > 0,
      canRedo: !r && i.length > 1 && a >= 0 && a < i.length - 1
    };
  }
  function pn() {
    var _, b, v;
    gt == null || gt.querySelectorAll("[data-tool-mode]").forEach((S) => {
      const x = S.getAttribute("data-tool-mode") === d.primaryTool;
      S.classList.toggle("active", x), S.setAttribute("aria-pressed", x ? "true" : "false");
    });
    const i = d.primaryTool === "paint" || d.primaryTool === "mask";
    if (xt && ut(i), !i) {
      At.forEach((S) => {
        S.classList.remove("is-active");
      }), dt && (dt.hidden = !0);
      return;
    }
    const a = d.primaryTool, s = At.find((S) => String(S.getAttribute("data-paint-pane") || "") === a) || null;
    if (At.forEach((S) => {
      S.classList.toggle("is-active", S === s);
    }), A.forEach((S) => {
      S.hidden = !1;
    }), R.forEach((S) => {
      S.hidden = !1;
    }), nt && (clearTimeout(nt), nt = 0), E.querySelectorAll("[data-paint-tool]").forEach((S) => {
      S.classList.toggle("active", S.getAttribute("data-paint-tool") === d.paintTool);
    }), E.querySelectorAll("[data-mask-tool]").forEach((S) => {
      S.classList.toggle("active", S.getAttribute("data-mask-tool") === d.maskTool);
    }), tt) {
      const S = d.paintTool !== "eraser";
      tt.hidden = !1, tt.classList.toggle("disabled", !S), !S && dt && !dt.hidden && (nt = window.setTimeout(() => {
        dt.hidden = !0, nt = 0;
      }, 170));
      const x = ((_ = Xa.find((I) => Za(d.paintColor, I.color))) == null ? void 0 : _.id) || "";
      tt.querySelectorAll("[data-paint-color-swatch]").forEach((I) => {
        const L = I.getAttribute("data-paint-color-swatch") === x;
        I.classList.toggle("active", L), I.setAttribute("aria-pressed", L ? "true" : "false"), I.disabled = !S;
      });
      const M = tt.querySelector("[data-paint-color-custom]");
      if (M) {
        const I = !x;
        M.classList.toggle("active", I), M.style.setProperty("--custom-color", In(d.customPaintColor, 1)), M.setAttribute("aria-pressed", I ? "true" : "false"), M.disabled = !S;
      }
      if (Pt && (Pt.value = String(Math.round(j(Number(((b = d.customPaintColor) == null ? void 0 : b.a) ?? 1), 0, 1) * 100))), Mt && (Mt.textContent = `${Math.round(j(Number(((v = d.customPaintColor) == null ? void 0 : v.a) ?? 1), 0, 1) * 100)}%`), Bt && (Bt.style.background = In(d.customPaintColor)), dt) {
        const I = mo(d.customPaintColor);
        dt.style.setProperty("--picker-hue-color", In({ ...Dc(I.h, 1, 1), a: 1 }, 1)), dt.style.setProperty("--picker-sat", `${j(I.s, 0, 1) * 100}%`), dt.style.setProperty("--picker-val", `${(1 - j(I.v, 0, 1)) * 100}%`), dt.style.setProperty("--picker-hue", `${j(I.h, 0, 1) * 100}%`);
      }
      if (be) {
        const I = mo(d.customPaintColor);
        be.style.left = `${j(I.s, 0, 1) * 100}%`, be.style.top = `${(1 - j(I.v, 0, 1)) * 100}%`;
      }
      if (z) {
        const I = mo(d.customPaintColor);
        z.style.left = `${j(I.h, 0, 1) * 100}%`;
      }
      if (Rt && jt) {
        const I = Array.from({ length: 8 }, (L, V) => d.customPaintHistory[V] || null);
        jt.innerHTML = I.map((L, V) => `
          <button class="pano-paint-color-history-dot${L ? "" : " empty"}" type="button" data-paint-history-index="${V}" ${L ? `style="--swatch:${In(L, 1)}"` : ""} aria-label="Recent color ${V + 1}" ${L ? "" : "disabled"}></button>
        `).join(""), jt.querySelectorAll("[data-paint-history-index]").forEach((L) => {
          L.onclick = () => {
            const V = Number(L.getAttribute("data-paint-history-index")), B = d.customPaintHistory[V];
            B && (d.customPaintColor = mn(B), d.paintColor = mn(B), pn());
          };
        });
      }
    }
    const l = xr(d.primaryTool === "paint" ? d.paintTool : d.maskTool), h = d.brushSizes[l] ?? 10, m = Pp();
    A.forEach((S) => {
      S.classList.toggle("disabled", m);
    }), J.forEach((S) => {
      S.value = String(h);
      const x = (h - 1) / 119 * 100;
      S.style.setProperty("--v", `${j(x, 0, 100)}%`), S.disabled = m;
    }), Y.forEach((S) => {
      S.textContent = String(h);
    });
  }
  function hi(i, a, s, l, h, m, _, b = !0) {
    const v = document.createElement("div");
    v.dataset.key = s, v.dataset.min = String(h), v.dataset.max = String(m), v.className = "pano-field", v.innerHTML = `<label>${l}</label><input type='range' min='${h}' max='${m}' step='${_}' value='${Number(a[s] || 0)}'><input type='number' min='${h}' max='${m}' step='${_}' value='${Lc(a[s] || 0)}'>`;
    const [S, x] = v.querySelectorAll("input"), M = () => {
      const L = Number(h), V = Number(m), Z = (Number(S.value) - L) / Math.max(1e-6, V - L) * 100;
      S.style.setProperty("--v", `${j(Z, 0, 100)}%`);
    };
    S.disabled = !b, x.disabled = !b;
    const I = (L) => {
      if (!b) return;
      let V = Number(L);
      Number.isNaN(V) && (V = 0), V = j(V, h, m), s === "yaw_deg" && (V = Ve(V)), a[s] = V, e === "cutout" && (s === "hFOV_deg" || s === "vFOV_deg") && (a.aspect_id = qr(a)), S.value = String(V), x.value = Lc(V), M(), pt();
    };
    S.oninput = () => I(S.value), x.oninput = () => I(x.value), S.onchange = () => le(), x.onchange = () => le(), M(), i.appendChild(v);
  }
  function tc() {
    const i = _e();
    if (!i) return;
    d.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: Ni(i)
    }, X.querySelectorAll(".pano-field[data-key]").forEach((m) => {
      const _ = m.dataset.key;
      if (!_ || !(_ in i)) return;
      const b = m.querySelector("input[type='range']"), v = m.querySelector("input[type='number']");
      if (!b || !v) return;
      const S = Number(m.dataset.min ?? b.min ?? 0), x = Number(m.dataset.max ?? b.max ?? 0);
      let M = Number(i[_] || 0);
      Number.isNaN(M) && (M = 0), M = j(M, S, x);
      const I = String(M);
      b.value !== I && (b.value = I);
      const L = Lc(M);
      v.value !== L && (v.value = L);
      const V = (M - S) / Math.max(1e-6, x - S) * 100;
      b.style.setProperty("--v", `${j(V, 0, 100)}%`);
    });
    const s = Ni(i), l = X.querySelector(".pano-cutout-aspect-label span");
    l && (l.textContent = s), X.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]").forEach((m) => {
      m.classList.toggle("active", String(m.getAttribute("data-aspect")) === s);
    });
  }
  function qt() {
    var Kt, Wt, he, rr, ir, ao, ha, yi, bi, so, Pn, Hu, Vu, zu, Uu, ju;
    if (o) return;
    const i = [...X.children].slice(0, 2);
    X.innerHTML = "", i.forEach((Et) => X.appendChild(Et));
    const a = X.querySelector(".pano-side-actions");
    if (a && (a.innerHTML = ""), c) {
      const Et = document.createElement("div");
      Et.className = "pano-inspector";
      const Yt = document.createElement("div");
      Yt.className = "pano-field-wide pano-target-row", Yt.innerHTML = `
      <label>Coverage</label>
      <div class="pano-picker">
        <button class="pano-picker-trigger" type="button">
          <span class="pano-picker-label"></span>
          <span class="pano-picker-caret">▾</span>
        </button>
        <div class="pano-picker-pop" hidden></div>
      </div>
    `;
      const xe = Yt.querySelector(".pano-picker-trigger"), kn = Yt.querySelector(".pano-picker-label"), je = Yt.querySelector(".pano-picker-pop"), Hn = [
        { value: 360, label: "360° Full" },
        { value: 180, label: "180° Front" }
      ], Vn = on(p.coverage);
      kn.textContent = cd(Vn), je.innerHTML = "", Hn.forEach((pe) => {
        const se = document.createElement("button");
        se.type = "button", se.className = `pano-picker-item${pe.value === Vn ? " active" : ""}`, se.textContent = pe.label, se.onclick = () => {
          var zn;
          je.hidden = !0;
          const tn = on(pe.value);
          tn !== on(p.coverage) && (p.coverage = tn, d.coverage = tn, g && (g.value = String(tn), (zn = g.callback) == null || zn.call(g, g.value)), kt.backgroundDirty = !0, pt(), qt());
        }, je.appendChild(se);
      }), xe.onclick = (pe) => {
        pe.stopPropagation(), je.hidden = !je.hidden;
      }, Et.appendChild(Yt);
      const Qe = document.createElement("details");
      Qe.className = "pano-ui-settings", Qe.open = !1, Qe.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Lt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(Kt = p.ui_settings) != null && Kt.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Wt = p.ui_settings) != null && Wt.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(he = p.ui_settings) != null && he.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(rr = p.ui_settings) != null && rr.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(ir = p.ui_settings) != null && ir.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(ao = p.ui_settings) != null && ao.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const Ot = Qe.querySelector("[data-setting='invert-x']"), ne = Qe.querySelector("[data-setting='invert-y']"), gn = Qe.querySelector("[data-ui-picker='quality']"), Vr = Qe.querySelector("[data-action='ui-reset-defaults']"), Sr = (pe, se, tn, zn) => {
        const xm = pe.querySelector(".pano-picker-trigger"), Sm = pe.querySelector(".pano-picker-label"), vi = pe.querySelector(".pano-picker-pop"), pc = () => {
          const pa = String(tn()), ga = se.find((co) => String(co.value) === pa) || se[0];
          Sm.textContent = ga.label, vi.innerHTML = "", se.forEach((co) => {
            const lo = document.createElement("button");
            lo.type = "button", lo.className = `pano-picker-item${String(co.value) === pa ? " active" : ""}`, lo.textContent = co.label, lo.onclick = () => {
              zn(co.value), vi.hidden = !0, pc(), wr(), pt();
            }, vi.appendChild(lo);
          });
        };
        return xm.onclick = (pa) => {
          pa.stopPropagation(), Qe.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((ga) => {
            ga !== vi && (ga.hidden = !0);
          }), vi.hidden = !vi.hidden;
        }, pc(), pc;
      }, or = (pe, se) => {
        pe.setAttribute("data-selected", se ? "1" : "0"), pe.querySelectorAll(".pano-segment-btn").forEach((tn) => {
          tn.setAttribute("aria-pressed", tn.getAttribute("data-value") === (se ? "1" : "0") ? "true" : "false");
        });
      };
      Ot.querySelectorAll(".pano-segment-btn").forEach((pe) => {
        pe.onclick = () => {
          const se = pe.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = se, or(Ot, se), wr(), pt();
        };
      }), ne.querySelectorAll(".pano-segment-btn").forEach((pe) => {
        pe.onclick = () => {
          const se = pe.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = se, or(ne, se), wr(), pt();
        };
      });
      const Nr = Sr(
        gn,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(p.ui_settings.preview_quality || "balanced"),
        (pe) => {
          const se = String(pe || "balanced");
          p.ui_settings.preview_quality = se === "draft" || se === "high" ? se : "balanced";
        }
      );
      Vr.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", or(Ot, !1), or(ne, !1), Nr(), wr(), pt();
      }, Et.appendChild(Qe), X.appendChild(Et);
      const Mr = document.createElement("div");
      Mr.className = "pano-side-footer", Mr.innerHTML = '<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>', Mr.querySelector("[data-action='close-preview']").onclick = () => mi(), X.appendChild(Mr), oo(Et);
      return;
    }
    const s = _e(), l = On(), h = Fl();
    l.length > 1 && (d.panelLastValues = d.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), s && h !== "stroke" && (d.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (h === "image" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (h === "image" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: Ni(s)
    });
    const m = d.panelLastValues || (e === "stickers" || h === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = h === "stroke" ? null : s, b = _ || m, v = !!_, S = document.createElement("div");
    S.className = "pano-inspector";
    const x = document.createElement("div");
    x.className = "pano-field-wide pano-target-row", x.innerHTML = `
      <label>Coverage</label>
      <div class="pano-picker">
        <button class="pano-picker-trigger" type="button">
          <span class="pano-picker-label"></span>
          <span class="pano-picker-caret">▾</span>
        </button>
        <div class="pano-picker-pop" hidden></div>
      </div>
    `;
    const M = x.querySelector(".pano-picker-trigger"), I = x.querySelector(".pano-picker-label"), L = x.querySelector(".pano-picker-pop"), V = [
      { value: 360, label: "360° Full" },
      { value: 180, label: "180° Front" }
    ], B = on(p.coverage);
    I.textContent = cd(B), L.innerHTML = "", V.forEach((Et) => {
      const Yt = document.createElement("button");
      Yt.type = "button", Yt.className = `pano-picker-item${Et.value === B ? " active" : ""}`, Yt.textContent = Et.label, Yt.onclick = () => {
        var kn, je;
        L.hidden = !0;
        const xe = on(Et.value);
        xe !== on(p.coverage) && (p.coverage = xe, d.coverage = xe, g && (g.value = String(xe), (kn = g.callback) == null || kn.call(g, g.value)), Ne(), (je = t.setDirtyCanvas) == null || je.call(t, !0, !0), qt(), Gt(), pt());
      }, L.appendChild(Yt);
    }), M.disabled = r, M.onclick = (Et) => {
      Et.stopPropagation(), !M.disabled && (L.hidden = !L.hidden);
    }, S.appendChild(x);
    const Z = document.createElement("div");
    for (Z.innerHTML = `
      <div class="pano-section-title">
        <span>Transform</span>
      </div>
    `; Z.firstChild; ) S.appendChild(Z.firstChild);
    if (X.appendChild(S), e === "stickers" || e === "cutout") {
      const Et = document.createElement("div");
      Et.className = "pano-field-wide pano-target-row";
      const Yt = "Selection";
      Et.innerHTML = `
        <label>${Yt}</label>
        <div class="pano-picker">
          <button class="pano-picker-trigger" type="button">
            <span class="pano-picker-label"></span>
            <span class="pano-picker-caret">▾</span>
          </button>
          <div class="pano-picker-pop" hidden></div>
        </div>
      `;
      const xe = Et.querySelector(".pano-picker-trigger"), kn = Et.querySelector(".pano-picker-label"), je = Et.querySelector(".pano-picker-pop"), Hn = [{ id: "", label: e === "stickers" ? "No image" : "Nothing selected", item: null }];
      e === "stickers" ? Te().forEach((Ot, ne) => {
        var Sr, or;
        const gn = Ce(Ot) ? String(Ot.id || jr) : String(((or = (Sr = p.assets) == null ? void 0 : Sr[Ot.asset_id]) == null ? void 0 : or.name) || Ot.asset_id || Ot.id), Vr = `${ne + 1}. ${gn}${Ce(Ot) && si(Ot) ? " (hidden)" : ""}`;
        Hn.push({ id: Ot.id, label: Vr, item: Ot, kind: "image" });
      }) : xp().forEach((Ot) => {
        Hn.push({ id: Ot.item.id, label: Ot.label, item: Ot.item, kind: Ot.kind });
      });
      const Vn = (_ == null ? void 0 : _.id) || "", Qe = Hn.find((Ot) => Ot.id === Vn) || Hn[0];
      kn.innerHTML = Qe.item ? $l(Qe) : Oa(String(Qe.label || "")), je.innerHTML = "", Hn.forEach((Ot) => {
        const ne = document.createElement("button");
        ne.type = "button", ne.className = `pano-picker-item${Ot.id === Vn ? " active" : ""}`, ne.innerHTML = Ot.item ? $l(Ot) : Oa(String(Ot.label || "")), ne.onclick = () => {
          je.hidden = !0, Ji(Ot.item || null);
          const gn = Ot.item || null;
          if (gn && !Ee(gn)) {
            const Vr = Ve(Number(gn.yaw_deg || 0)), Sr = j(Number(gn.pitch_deg || 0), -89.9, 89.9);
            Re(Vr, Sr, d.viewFov);
          }
          qt(), Gt(), pt();
        }, je.appendChild(ne);
      }), xe.disabled = Hn.length <= 1, xe.onclick = (Ot) => {
        Ot.stopPropagation(), !xe.disabled && (je.hidden = !je.hidden);
      }, S.appendChild(Et);
    }
    const ct = document.createElement("div");
    ct.className = "pano-state-actions", ct.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${Lt.copy}<span>Copy State</span></button>`;
    const St = ct.querySelector("[data-action='copy-state-inline']");
    St.disabled = !v || h === "stroke" || l.length > 1, St.onclick = async () => {
      if (!v || h === "stroke" || l.length > 1) return;
      const Et = JSON.stringify(e === "cutout" && h !== "image" ? jl(b) : Lp(s));
      try {
        await navigator.clipboard.writeText(Et);
        const Yt = St.querySelector("span");
        Yt && (Yt.textContent = "Copied", window.setTimeout(() => {
          Yt.textContent = "Copy State";
        }, 900));
      } catch {
      }
    }, S.appendChild(ct);
    const st = document.createElement("div");
    st.className = `pano-params${d.panelWasEnabled ? "" : " disabled"}`, S.appendChild(st), l.length > 1 ? (st.innerHTML = `
        <div class="pano-param-note">Selected objects: ${l.length}</div>
        <div class="pano-param-note">Multi-selection supports z-order and delete.</div>
      `, st.classList.toggle("disabled", !v), d.panelWasEnabled = v, Jo()) : (hi(st, b, "yaw_deg", "Yaw", -180, 180, 0.1, v && !r), hi(st, b, "pitch_deg", "Pitch", -90, 90, 0.1, v && !r), hi(st, b, "hFOV_deg", "H FOV", 1, 179, 0.1, v && !r), hi(st, b, "vFOV_deg", "V FOV", 1, 179, 0.1, v && !r), e === "stickers" || h === "image" ? hi(st, b, "rot_deg", "Rotation", -180, 180, 0.1, v && !r) : hi(st, b, "roll_deg", "Roll", -180, 180, 0.1, v && !r), v !== d.panelWasEnabled ? requestAnimationFrame(() => {
      st.classList.toggle("disabled", !v);
    }) : st.classList.toggle("disabled", !v), d.panelWasEnabled = v, Jo());
    const _t = document.createElement("div");
    _t.className = "pano-visibility-section", _t.innerHTML = `
      <div class="pano-section-title">
        <span>Layers</span>
      </div>
      <div class="pano-visibility-stack">
        <div class="pano-visibility-row" data-visibility-row="mask">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${Lt.circle_dashed_tool}</span><span>Mask</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="mask" aria-label="Toggle mask"></button>
        </div>
        <div class="pano-visibility-row" data-visibility-row="objects">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${Lt.image}</span><span>Paint / Images</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="objects" aria-label="Toggle paint and images"></button>
        </div>
        <div class="pano-visibility-row" data-visibility-row="panorama">
          <span class="pano-visibility-name"><span class="pano-visibility-name-icon" aria-hidden="true">${Lt.globe}</span><span>Panorama</span></span>
          <button class="pano-visibility-toggle" type="button" data-visibility="panorama" aria-label="Toggle panorama"></button>
        </div>
      </div>
    `;
    const yt = Array.isArray((yi = (ha = p == null ? void 0 : p.painting) == null ? void 0 : ha.paint) == null ? void 0 : yi.strokes) ? p.painting.paint.strokes.length : 0, wt = Array.isArray((so = (bi = p == null ? void 0 : p.painting) == null ? void 0 : bi.mask) == null ? void 0 : so.strokes) ? p.painting.mask.strokes.length : 0, bt = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((Et) => String((Et == null ? void 0 : Et.name) || "")) : [], W = up(
      t,
      bt.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), ht = !!String((W == null ? void 0 : W.src) || "").trim() || Vl("pano_input_images").length > 0, Dt = Array.isArray(Te()) && Te().length > 0 || yt > 0, Ht = wt > 0, Tt = (Et) => Et === "panorama" ? ht : Et === "objects" ? Dt : Ht, Vt = (Et, Yt) => {
      const xe = Et.closest("[data-visibility-row]"), kn = Tt(String(Et.getAttribute("data-visibility") || ""));
      Et.innerHTML = Yt ? Lt.eye : Lt.eye_dashed, Et.setAttribute("aria-pressed", Yt ? "true" : "false"), Et.setAttribute("data-tip", Yt ? "Hide" : "Show"), Et.disabled = !kn, Et.classList.toggle("active", !!Yt), xe == null || xe.classList.toggle("is-hidden", !Yt), xe == null || xe.classList.toggle("is-disabled", !kn);
    };
    if (_t.querySelectorAll("[data-visibility]").forEach((Et) => {
      const Yt = String(Et.getAttribute("data-visibility") || ""), xe = () => Yt === "panorama" ? !!d.showPanorama : Yt === "objects" ? !!d.showObjects : !!d.showMask;
      Vt(Et, xe()), Et.onclick = () => {
        Tt(Yt) && (Yt === "panorama" ? d.showPanorama = !d.showPanorama : Yt === "objects" ? d.showObjects = !d.showObjects : d.showMask = !d.showMask, Vt(Et, xe()), pt());
      };
    }), S.appendChild(Object.assign(document.createElement("div"), { className: "pano-divider" })), S.appendChild(_t), !r) {
      const Et = document.createElement("details");
      Et.className = "pano-ui-settings", Et.open = !1, Et.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Lt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(Pn = p.ui_settings) != null && Pn.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Hu = p.ui_settings) != null && Hu.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Vu = p.ui_settings) != null && Vu.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(zu = p.ui_settings) != null && zu.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Uu = p.ui_settings) != null && Uu.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(ju = p.ui_settings) != null && ju.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const Yt = Et.querySelector("[data-setting='invert-x']"), xe = Et.querySelector("[data-setting='invert-y']"), kn = Et.querySelector("[data-ui-picker='quality']"), je = Et.querySelector("[data-action='ui-reset-defaults']"), Hn = (Ot, ne, gn, Vr) => {
        const Sr = Ot.querySelector(".pano-picker-trigger"), or = Ot.querySelector(".pano-picker-label"), Nr = Ot.querySelector(".pano-picker-pop"), Mr = () => {
          const pe = String(gn()), se = ne.find((tn) => String(tn.value) === pe) || ne[0];
          or.textContent = se.label, Nr.innerHTML = "", ne.forEach((tn) => {
            const zn = document.createElement("button");
            zn.type = "button", zn.className = `pano-picker-item${String(tn.value) === pe ? " active" : ""}`, zn.textContent = tn.label, zn.onclick = () => {
              Vr(tn.value), Nr.hidden = !0, Mr(), wr(), t.setDirtyCanvas(!0, !0), pt();
            }, Nr.appendChild(zn);
          });
        };
        return Sr.onclick = (pe) => {
          pe.stopPropagation(), Et.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((se) => {
            se !== Nr && (se.hidden = !0);
          }), Nr.hidden = !Nr.hidden;
        }, Mr(), Mr;
      }, Vn = (Ot, ne) => {
        Ot.setAttribute("data-selected", ne ? "1" : "0"), Ot.querySelectorAll(".pano-segment-btn").forEach((gn) => {
          gn.setAttribute("aria-pressed", gn.getAttribute("data-value") === (ne ? "1" : "0") ? "true" : "false");
        });
      };
      Yt.querySelectorAll(".pano-segment-btn").forEach((Ot) => {
        Ot.onclick = () => {
          const ne = Ot.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = ne, Vn(Yt, ne), wr(), t.setDirtyCanvas(!0, !0), pt();
        };
      }), xe.querySelectorAll(".pano-segment-btn").forEach((Ot) => {
        Ot.onclick = () => {
          const ne = Ot.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = ne, Vn(xe, ne), wr(), t.setDirtyCanvas(!0, !0), pt();
        };
      });
      const Qe = Hn(
        kn,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(p.ui_settings.preview_quality || "balanced"),
        (Ot) => {
          const ne = String(Ot || "balanced");
          p.ui_settings.preview_quality = ne === "draft" || ne === "high" ? ne : "balanced";
        }
      );
      je.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", Vn(Yt, !1), Vn(xe, !1), Qe(), wr(), t.setDirtyCanvas(!0, !0), pt();
      }, S.appendChild(Et);
    }
    const zt = document.createElement("div");
    zt.className = "pano-side-footer", zt.innerHTML = `
      <button class="pano-btn" data-action="cancel-close">Cancel</button>
      <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
    `, zt.querySelector("[data-action='cancel-close']").onclick = () => mi(), zt.querySelector("[data-action='save-close']").onclick = () => {
      bu(), mi();
    }, X.appendChild(zt), oo(S);
  }
  function aa(i) {
    if (!i) return !1;
    if (String(i.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(i.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function fu(i) {
    if (r || e !== "stickers" && e !== "cutout" || !aa(i)) return;
    const a = yo("asset"), s = URL.createObjectURL(i);
    try {
      const l = await new Promise((_, b) => {
        const v = new Image();
        v.onload = () => _(v), v.onerror = () => b(new Error("image load failed")), v.src = s;
      });
      $t.set(a, l);
      const h = yo("st");
      p.stickers.push({
        id: h,
        asset_id: a,
        yaw_deg: d.viewYaw,
        pitch_deg: d.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Or(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: Hl()
      }), Ji(p.stickers[p.stickers.length - 1]), nc(), le(), qt(), Gt(), pt();
      const m = (async () => {
        const _ = await Us(i, String(i.name || a));
        (Array.isArray(p.stickers) ? p.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === a).length && (p.assets[a] = _, ui(), Ne(), qt(), Gt(), pt());
      })();
      So.set(a, m);
      try {
        await m;
      } finally {
        So.delete(a);
      }
    } catch (l) {
      console.error("[PanoramaSuite] failed to add sticker asset", l), delete p.assets[a], $t.delete(a);
      const h = Array.isArray(p.stickers) ? p.stickers : [], m = h.filter((_) => String((_ == null ? void 0 : _.asset_id) || "") === a);
      m.length && (p.stickers = h.filter((_) => String((_ == null ? void 0 : _.asset_id) || "") !== a), m.some((_) => {
        var b;
        return String((_ == null ? void 0 : _.id) || "") === String(((b = d.selection) == null ? void 0 : b.id) || "");
      }) && Ji(null), qt(), Gt(), pt());
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function du(i) {
    const a = document.createElement("input");
    a.type = "file", a.accept = "image/*", a.onchange = () => {
      var l;
      const s = (l = a.files) == null ? void 0 : l[0];
      !s || typeof i != "function" || i(s);
    }, a.click();
  }
  function ec() {
    r || e !== "stickers" && e !== "cutout" || du((i) => {
      fu(i);
    });
  }
  async function qg(i) {
    var S;
    if (r || e !== "stickers" && e !== "cutout") return;
    const a = _e();
    if (!a || !Oe(a) || Ce(a) || !aa(i)) return;
    const s = String(a.id || ""), l = String(a.asset_id || ""), h = l ? nn(((S = p.assets) == null ? void 0 : S[l]) || null) : null, m = Number(a.vFOV_deg || 0), _ = a.crop && typeof a.crop == "object" ? { ...a.crop } : null, b = yo("asset"), v = URL.createObjectURL(i);
    try {
      const x = await new Promise((I, L) => {
        const V = new Image();
        V.onload = () => I(V), V.onerror = () => L(new Error("image load failed")), V.src = v;
      });
      $t.set(b, x), a.asset_id = b, a.vFOV_deg = Or(
        Number(a.hFOV_deg || 30),
        Number(x.naturalWidth || x.width || 1),
        Number(x.naturalHeight || x.height || 1)
      ), a.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, vn(), le(), qt(), Gt(), pt();
      const M = (async () => {
        const I = await Us(i, String(i.name || b));
        (Array.isArray(p.stickers) ? p.stickers : []).some((B) => String((B == null ? void 0 : B.id) || "") === s && String((B == null ? void 0 : B.asset_id) || "") === b) && (p.assets[b] = I, ui(), Ne(), qt(), Gt(), pt());
      })();
      So.set(b, M);
      try {
        await M;
      } finally {
        So.delete(b);
      }
    } catch (x) {
      console.error("[PanoramaSuite] failed to replace sticker asset", x), delete p.assets[b], $t.delete(b);
      const M = (Array.isArray(p.stickers) ? p.stickers : []).find((I) => String((I == null ? void 0 : I.id) || "") === s) || null;
      M && String(M.asset_id || "") === b && (l && h && (p.assets[l] = h), M.asset_id = l, M.vFOV_deg = m, M.crop = _ ? { ..._ } : null), vn(), qt(), Gt(), pt();
    } finally {
      URL.revokeObjectURL(v);
    }
  }
  function Yg() {
    if (r) return;
    const i = _e();
    !i || !Oe(i) || Ce(i) || du((a) => {
      qg(a);
    });
  }
  async function Xg() {
    if (r || e !== "stickers") return;
    const i = p.assets && typeof p.assets == "object" ? p.assets : {}, a = Object.entries(i).filter(([, l]) => {
      const h = String((l == null ? void 0 : l.type) || "").toLowerCase(), m = String((l == null ? void 0 : l.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!a.length) return;
    let s = !1;
    for (const [l, h] of a)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const _ = await fetch(m).then((M) => M.blob()), b = String(_.type || "image/png").split("/")[1] || "png", v = String((h == null ? void 0 : h.name) || `${l}.${b}`), S = new File([_], v, { type: _.type || "image/png" }), x = await Us(S, v);
        p.assets[l] = {
          ...x,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, s = !0;
      } catch (m) {
        console.error("[PanoramaSuite] failed to migrate embedded sticker asset", { assetId: l, err: m });
      }
    s && (Ne(), pt());
  }
  function hu() {
    r || e === "cutout" && (nc(), p.shots = [{
      id: yo("sh"),
      yaw_deg: d.viewYaw,
      pitch_deg: d.viewPitch,
      hFOV_deg: 64,
      vFOV_deg: 40,
      roll_deg: 0,
      aspect_id: np(64, 40)
    }], Ji(p.shots[0]), d.cutoutAspectOpen = !1, le(), Ne(), qt(), pt({ cause: "cutout_frame" }));
  }
  function Zg() {
    r || e === "cutout" && (p.shots = [], d.selectedId = null, d.selectedIds = [], d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, p.active.selected_shot_id = null, le(), Ne(), qt(), pt());
  }
  function Jg() {
    const i = Array.isArray(p.stickers) ? p.stickers : [], a = [];
    for (const s of i)
      Ce(s) && (s.visible = !1, a.push(s));
    return a;
  }
  function pu(i, a, s = "Clear") {
    return new Promise((l) => {
      const h = document.createElement("div");
      h.className = "pano-canvas-confirm", h.innerHTML = `
        <div class="pano-canvas-confirm-card" role="dialog" aria-modal="true" aria-label="${i}">
          <div class="pano-canvas-confirm-title">${i}</div>
          <div class="pano-canvas-confirm-text">${a}</div>
          <div class="pano-canvas-confirm-actions">
            <button class="pano-btn" data-action="cancel">Cancel</button>
            <button class="pano-btn pano-btn-primary" data-action="confirm">${s}</button>
          </div>
        </div>
      `;
      const m = (v) => {
        h.remove(), l(!!v);
      };
      h.addEventListener("pointerdown", (v) => {
        v.target === h && m(!1);
      });
      const _ = h.querySelector("[data-action='cancel']"), b = h.querySelector("[data-action='confirm']");
      _.onclick = () => m(!1), b.onclick = () => m(!0), T.appendChild(h), b.focus();
    });
  }
  async function gu() {
    var s, l;
    if (r || !await pu(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    p.painting = Do(null), Fn();
    const a = Jg();
    e === "stickers" ? (p.stickers = a, p.assets = {}, d.selectedId = ((s = a[0]) == null ? void 0 : s.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], p.active.selected_sticker_id = ((l = a[0]) == null ? void 0 : l.id) || null, ui()) : (p.stickers = a, p.assets = {}, p.shots = [], d.selectedId = null, d.selectedIds = [], p.active.selected_sticker_id = null, p.active.selected_shot_id = null, d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, ui()), le(), Ne(), qt(), Gt(), pt();
  }
  async function Qg(i) {
    var m, _, b, v;
    if (r) return;
    const a = i === "mask" ? "mask" : "paint", s = a === "mask" ? "Mask" : "Paint", l = gi(a);
    if (!(!l.length && !(((m = d.interaction) == null ? void 0 : m.kind) === "draw" && ((_ = d.interaction) == null ? void 0 : _.layerKind) === a) || !await pu(
      `Clear ${s}`,
      `This will remove all ${a} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((b = d.interaction) == null ? void 0 : b.kind) === "draw" && ((v = d.interaction) == null ? void 0 : v.layerKind) === a) {
        const S = nr();
        S && d.paintEngine.cancelActiveStroke(S), d.interaction = null;
      }
      l.length = 0, p.painting.raster_objects = hn().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== a), a === "paint" && (De().length = 0), Fn(), le(), Ne(), qt(), Gt(), pn(), pt();
    }
  }
  function tm() {
    if (r) return;
    const i = _e();
    if (!i || !Oe(i) || Ce(i)) return;
    const a = JSON.parse(JSON.stringify(i));
    a.id = yo("st"), a.yaw_deg = Ve((a.yaw_deg || 0) + 8), a.z_index = Hl(), p.stickers.push(a), p.active.selected_sticker_id = a.id, d.selectedId = a.id, d.selectedIds = [a.id], vn(), le(), Ne(), Gt(), qt(), pt();
  }
  function mu() {
    var s, l, h, m, _, b, v;
    if (r) return;
    const i = On(), a = _e();
    if (!(!a && i.length === 0)) {
      if (i.length > 1) {
        const S = new Set(i.filter((I) => Ee(I)).map((I) => String(I.actionGroupId || I.id || ""))), x = new Set(i.filter((I) => Xe(I)).map((I) => Ye(I.rasterObjectId || I.id || ""))), M = new Set(i.filter(Oe).map((I) => String(I.id || "")));
        S.size > 0 && (p.painting.paint.strokes = (Array.isArray((l = (s = p.painting) == null ? void 0 : s.paint) == null ? void 0 : l.strokes) ? p.painting.paint.strokes : []).filter((I) => !S.has(String((I == null ? void 0 : I.actionGroupId) || ""))), p.painting.groups = De().filter((I) => !S.has(String((I == null ? void 0 : I.actionGroupId) || (I == null ? void 0 : I.id) || ""))), Fn()), x.size > 0 && (p.painting.raster_objects = hn().filter((I) => !x.has(String((I == null ? void 0 : I.id) || ""))), no()), M.size > 0 && (p.stickers = (Array.isArray(p.stickers) ? p.stickers : []).filter((I) => M.has(String((I == null ? void 0 : I.id) || "")) ? Ce(I) ? (si(I) || (I.visible = !1), !0) : !1 : !0), ui(), vn()), d.selectedId = null, d.selectedIds = [], le(), Ne(), qt(), Gt(), pt();
        return;
      }
      if (Ee(a)) {
        const S = String(a.actionGroupId || a.id || "").trim();
        p.painting.paint.strokes = (Array.isArray((m = (h = p.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? p.painting.paint.strokes : []).filter((x) => String((x == null ? void 0 : x.actionGroupId) || "").trim() !== S), p.painting.groups = De().filter((x) => String((x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || "").trim() !== S), Fn(), d.selectedId = null, d.selectedIds = [], le(), Ne(), qt(), Gt(), pt();
        return;
      }
      if (Xe(a)) {
        const S = Ye(a.rasterObjectId || a.id || "");
        p.painting.raster_objects = hn().filter((x) => String((x == null ? void 0 : x.id) || "").trim() !== S), no(), d.selectedId = null, d.selectedIds = [], le(), Ne(), qt(), Gt(), pt();
        return;
      }
      if (e === "stickers" || Oe(a)) {
        if (Ce(a)) {
          if (si(a)) return;
          a.visible = !1, vn(), le(), Ne(), qt(), Gt(), pt();
          return;
        }
        p.stickers = p.stickers.filter((S) => S.id !== a.id), ui(), vn(), d.selectedId = e === "cutout" ? p.active.selected_shot_id || ((_ = p.stickers[0]) == null ? void 0 : _.id) || null : ((b = p.stickers[0]) == null ? void 0 : b.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], p.active.selected_sticker_id = ((v = p.stickers[0]) == null ? void 0 : v.id) || null, le(), Ne(), qt(), Gt(), pt();
        return;
      }
      Zg();
    }
  }
  function em(i, a) {
    if (!i) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const I = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(I)) {
        const [B, Z] = I.split(":").map((ct) => Number(ct));
        if (Number.isFinite(B) && Number.isFinite(Z)) return B >= Z;
      }
      const L = Number(i.hFOV_deg || 64), V = Number(i.vFOV_deg || 40);
      return Math.abs(L - V) > 1e-6 ? L >= V : rl(i) >= 1;
    })();
    let [h, m] = s[String(a)] || s["1:1"];
    h >= m !== l && ([h, m] = [m, h]);
    const _ = h / m, b = j(Number(i.hFOV_deg || 64), 1, 179), v = j(Number(i.vFOV_deg || 40), 1, 179), S = Math.sqrt(Math.max(1, b * v)), x = j(S * Math.sqrt(_), 1, 179), M = j(S / Math.sqrt(_), 1, 179);
    i.hFOV_deg = x, i.vFOV_deg = M, i.aspect_id = String(a);
  }
  function nm(i) {
    if (!i) return;
    const a = Math.max(1, Number(i.hFOV_deg || 90)), s = Math.max(1, Number(i.vFOV_deg || 60));
    i.hFOV_deg = s, i.vFOV_deg = a, i.aspect_id = qr(i);
  }
  function yu() {
    Rr().forEach((a, s) => {
      a.type === "sticker" && a.item && (a.item.z_index = s), a.type === "strokeGroup" && a.item && (a.item.z_index = s), a.type === "rasterObject" && a.item && (a.item.z_index = s);
    });
  }
  function rm() {
    if (r) return;
    const i = On();
    if (!_e() || i.length === 0) return;
    yu();
    const s = Rr(), l = new Set(i.map((b) => Oe(b) ? `sticker:${String(b.id || "")}` : Xe(b) ? `rasterObject:${Ye(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (s.forEach((b) => {
      var S, x;
      const v = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((x = b.item) == null ? void 0 : x.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(v) ? h.push(b) : m.push(b);
    }), !h.length || h[h.length - 1] === s[s.length - 1]) return;
    [...m, ...h].forEach((b, v) => {
      b.type === "sticker" && b.item && (b.item.z_index = v), b.type === "strokeGroup" && b.item && (b.item.z_index = v), b.type === "rasterObject" && b.item && (b.item.z_index = v);
    }), vn(), le(), Ne(), Gt(), pt();
  }
  function im() {
    if (r) return;
    const i = On();
    if (!_e() || i.length === 0) return;
    yu();
    const s = Rr(), l = new Set(i.map((b) => Oe(b) ? `sticker:${String(b.id || "")}` : Xe(b) ? `rasterObject:${Ye(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (s.forEach((b) => {
      var S, x;
      const v = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((x = b.item) == null ? void 0 : x.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(v) ? h.push(b) : m.push(b);
    }), !h.length || h[0] === s[0]) return;
    [...h, ...m].forEach((b, v) => {
      b.type === "sticker" && b.item && (b.item.z_index = v), b.type === "strokeGroup" && b.item && (b.item.z_index = v), b.type === "rasterObject" && b.item && (b.item.z_index = v);
    }), vn(), le(), Ne(), Gt(), pt();
  }
  function bu() {
    r || (p.projection_model = "pinhole_rectilinear", p.alpha_mode = "straight", f && (p.output_preset = ol(f.value, Number(p.output_preset || 2048))), g && (p.coverage = on(g.value)), y && (p.bg_color = String(y.value || p.bg_color || "#00ff00")), $n(), t.setDirtyCanvas(!0, !0));
  }
  function $n() {
    var a;
    if (r) return;
    p.coverage = on(p.coverage);
    const i = JSON.stringify(p);
    w && (w.value = i, (a = w.callback) == null || a.call(w, i));
  }
  function wr() {
    p.ui_settings = zv(p.ui_settings), r || $n();
  }
  function Ne() {
    var i;
    r || ($n(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0));
  }
  function nc() {
    d.primaryTool !== "cursor" && (d.primaryTool = "cursor", pn(), qt());
  }
  function pi(i) {
    const a = C.getBoundingClientRect();
    return {
      x: (i.clientX - a.left) / a.width * C.width,
      y: (i.clientY - a.top) / a.height * C.height
    };
  }
  function sa(i) {
    const a = C.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(a.left || 0),
      y: Number(i.clientY) - Number(a.top || 0)
    };
  }
  function vu() {
    return d.mode === "pano" || d.mode === "unwrap";
  }
  function ee() {
    var s;
    if (e !== "cutout") return null;
    const i = Array.isArray(p.shots) ? p.shots : [], a = String(((s = p.active) == null ? void 0 : s.selected_shot_id) || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === a) || i[0] || null;
  }
  function Je(i = ee()) {
    var I, L, V, B;
    if (!i) return null;
    const a = Math.max(1e-4, Number(((I = Ti(i)) == null ? void 0 : I.aspect) || 1)), s = 56, l = Math.max(80, C.width - s * 2), h = Math.max(80, C.height - s * 2);
    let m = l, _ = m / a;
    _ > h && (_ = h, m = _ * a);
    const b = Math.max(0.1, Number(((L = d.frameView) == null ? void 0 : L.zoom) || 1)), v = m * b, S = _ * b, x = Number(((V = d.frameView) == null ? void 0 : V.panX) || 0), M = Number(((B = d.frameView) == null ? void 0 : B.panY) || 0);
    return {
      x: (C.width - v) * 0.5 + x,
      y: (C.height - S) * 0.5 + M,
      w: v,
      h: S
    };
  }
  function rc() {
    return e === "cutout" && d.mode === "frame" && !!ee();
  }
  function Nn(i, a = performance.now()) {
    if (d.mode === "unwrap") {
      const m = yr(), _ = (i.x - m.x) / Math.max(1, m.w), b = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: j(b, 0, 1),
        t: Number(a || 0)
      };
    }
    const s = Vs(i.x, i.y), { lon: l, lat: h } = Ks(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: j(0.5 - h / Math.PI, 0, 1),
      t: Number(a || 0)
    };
  }
  function Mn(i, a, s = performance.now()) {
    const l = Je(a);
    if (!l) return null;
    const h = {
      x: (Number(i.x) - l.x) / Math.max(1, l.w),
      y: (Number(i.y) - l.y) / Math.max(1, l.h)
    }, m = Zs(a, h);
    if (!m) return null;
    const { lon: _, lat: b } = Ks(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: j(0.5 - b / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function om(i, a) {
    var S;
    const s = ee(), l = Je(s);
    if (!s || !l) return !1;
    const h = Math.max(0.1, Number(((S = d.frameView) == null ? void 0 : S.zoom) || 1)), m = j(h * Number(a), 0.25, 12);
    if (Math.abs(m - h) < 1e-6) return !1;
    const _ = (Number(i.x) - l.x) / Math.max(1e-6, l.w), b = (Number(i.y) - l.y) / Math.max(1e-6, l.h);
    d.frameView.zoom = m;
    const v = Je(s);
    return v ? (d.frameView.panX += Number(i.x) - (v.x + v.w * _), d.frameView.panY += Number(i.y) - (v.y + v.h * b), !0) : !1;
  }
  function am(i, a) {
    const s = Number(a || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function xr(i) {
    const a = String(i || "").trim();
    return a === "eraser" ? sr : un[a] ? a : d.activeBrushPresetId || sr;
  }
  function _u() {
    return (d.primaryTool === "paint" || d.primaryTool === "mask") && (vu() || rc());
  }
  function wu() {
    var i;
    return _u() && ((i = d.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function ca(i, a = !0) {
    const s = Number((i == null ? void 0 : i.x) || 0), l = Number((i == null ? void 0 : i.y) || 0), h = a !== !1, m = d.pointerPos || { x: 0, y: 0, inside: !1 }, _ = m.inside !== h || Math.abs(m.x - s) > 0.01 || Math.abs(m.y - l) > 0.01;
    return d.pointerPos = { x: s, y: l, inside: h }, _;
  }
  function sm() {
    var x, M;
    if (!wu()) return null;
    const i = d.primaryTool === "mask" ? "mask" : "paint", a = i === "mask" ? d.maskTool : d.paintTool, s = xr(a), l = un[s] || un[sr], h = Number(d.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(3, m * 0.5), b = i === "mask" ? a === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : a === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : mn(d.paintColor), v = i === "mask" ? a === "lasso_fill" ? 0.18 : 0.2 : a === "eraser" ? 0.06 : j(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), S = i === "mask" ? 0.95 : a === "eraser" ? 0.75 : j(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: a,
      preset: l,
      radius: _,
      fillStyle: In(b, v),
      strokeStyle: In(b, S),
      x: Number(((x = d.pointerPos) == null ? void 0 : x.x) || 0),
      y: Number(((M = d.pointerPos) == null ? void 0 : M.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function cm() {
    var I, L, V;
    const i = sm();
    if (!$) return;
    if (!i) {
      $.style.display = "none";
      return;
    }
    let a = i.radius * 2, s = i.radius * 2, l = "999px", h = 0, m = i.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const v = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let x = Number(i.hotspotX ?? a * 0.5), M = Number(i.hotspotY ?? s * 0.5);
    if (i.toolKind === "lasso_fill")
      a = ys, s = ys, l = "0", _ = "0", b = "none", x = Av, M = Iv, m = Rv(i.fillStyle, S, v);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const B = Math.max(1, Number(((I = i.preset) == null ? void 0 : I.aspect) ?? 1));
      a = Math.max(10, i.radius * 2 * B), s = Math.max(6, i.radius * 2), l = `${Math.min(6, s * 0.42)}px`, h = Number(((V = (L = i.preset) == null ? void 0 : L.angle) == null ? void 0 : V.value) || 0) * Wr;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    $.style.display = "block", $.style.width = `${Math.round(a)}px`, $.style.height = `${Math.round(s)}px`, $.style.borderRadius = l, $.style.border = _, $.style.boxShadow = b, $.style.background = m, $.style.backgroundRepeat = "no-repeat", $.style.backgroundPosition = "center", $.style.backgroundSize = "contain", $.style.transform = `translate(${Math.round(i.x - x)}px, ${Math.round(i.y - M)}px) rotate(${h}deg)`;
  }
  function lm() {
    var St;
    if (!O || !G) return;
    const i = d.primaryTool === "mask" ? "mask" : "paint", a = i === "mask" ? d.maskTool : d.paintTool;
    if (a === "lasso_fill") return;
    const s = xr(a), l = un[s] || un[sr], h = Number(d.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(6, m * 0.5), b = a === "eraser", v = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : mn(d.paintColor), S = i === "mask" ? In(v, 0.22) : b ? "rgba(255,255,255,0.14)" : In(v, j(Math.max(0.18, Number(v.a ?? 1) * 0.34), 0.18, 0.56)), x = i === "mask" ? In(v, 0.96) : b ? "rgba(255,255,255,0.72)" : In(v, j(Math.max(0.56, Number(v.a ?? 1) * 0.96), 0.56, 1));
    let M = _ * 2, I = _ * 2, L = "999px", V = 0, B = S;
    const Z = "rgba(222, 222, 222, 0.72)", ct = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      B = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (a === "marker") {
      const st = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      M = Math.max(16, _ * 2 * st), I = Math.max(10, _ * 2), L = `${Math.min(8, I * 0.42)}px`, V = Number(((St = l == null ? void 0 : l.angle) == null ? void 0 : St.value) || 0) * Wr;
    } else a === "brush" ? B = `radial-gradient(circle at 50% 50%, ${x} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : a === "lasso_fill" ? (M = Math.max(18, _ * 1.8), I = M, B = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${x} 43%, ${x} 58%, rgba(0,0,0,0) 59%)`) : b && (B = "rgba(255,255,255,0.12)");
    G.style.width = `${Math.round(M)}px`, G.style.height = `${Math.round(I)}px`, G.style.borderRadius = L, G.style.background = B, G.style.border = `1px solid ${Z}`, G.style.boxShadow = `0 0 0 1px ${ct}`, G.style.transform = `rotate(${V}deg)`, q && (clearTimeout(q), q = 0), O.classList.remove("fade-out"), O.classList.add("show");
  }
  function la() {
    !O || !O.classList.contains("show") || (O.classList.add("fade-out"), q && clearTimeout(q), q = window.setTimeout(() => {
      O.classList.remove("show", "fade-out"), q = 0;
    }, 180));
  }
  function um(i, a, s, l) {
    const h = xr(a), m = un[h] || un[sr], _ = d.brushSizes[h] ?? 10, b = Math.max(1, _) * Math.max(0.1, m.sizeScale ?? 1), v = am(l, b), S = s.map((M) => ({
      ...M,
      t: Number((M == null ? void 0 : M.t) || 0),
      widthScale: Number.isFinite(Number(M == null ? void 0 : M.widthScale)) ? Math.max(0, Number(M.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(M == null ? void 0 : M.pressureLike)) ? Math.max(0, Number(M.pressureLike)) : 1
    })), x = {
      id: Mi(i),
      actionGroupId: Mi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: i,
      toolKind: a,
      size: b,
      createdAt: Date.now(),
      color: i === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: v.radiusModel,
      radiusValue: v.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: S.map((M) => ({ ...M })),
        points: S.map((M) => ({ ...M }))
      }
    };
    return ad(x, m), hd("stroke-created", {
      mode: d.mode,
      layerKind: i,
      toolKind: a,
      presetId: h,
      presetAspect: Number(m.aspect ?? 1),
      strokeAspect: Number(x.aspect ?? 1),
      stampKind: String(x.stampKind || ""),
      size: Number(x.size || 0),
      radiusModel: String(x.radiusModel || ""),
      radiusValue: Number(x.radiusValue || 0),
      targetSpace: { ...x.targetSpace }
    }), x;
  }
  function fm(i, a, s, l) {
    const h = s.map((v) => ({
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: Number.isFinite(Number(v == null ? void 0 : v.widthScale)) ? Math.max(0, Number(v.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(v == null ? void 0 : v.pressureLike)) ? Math.max(0, Number(v.pressureLike)) : 1
    })), m = xr(a), _ = un[m] || un[sr], b = {
      id: Mi(i),
      actionGroupId: Mi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: i,
      toolKind: a,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((v) => ({ ...v }))
      }
    };
    return ad(b, _), hd("lasso-created", {
      mode: d.mode,
      layerKind: i,
      toolKind: a,
      presetId: m,
      presetAspect: Number(_.aspect ?? 1),
      strokeAspect: Number(b.aspect ?? 1),
      stampKind: String(b.stampKind || ""),
      targetSpace: { ...b.targetSpace }
    }), b;
  }
  function gi(i) {
    const a = p.painting || (p.painting = Do(null)), s = a[i] || (a[i] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function dm(i, a, s = performance.now()) {
    let l;
    if (d.mode === "frame") {
      const S = ee();
      if (!S) return !1;
      l = Mn(a, S, s);
    } else
      l = Nn(a, s);
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, _ = h[h.length - 1];
    if (_) {
      const S = Math.abs(Number(l.u ?? l.x ?? 0) - Number(_.u ?? _.x ?? 0)), x = Math.abs(Number(l.v ?? l.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (S < 15e-4 && x < 15e-4) return !1;
    }
    const b = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...b }), m.push({ ...b });
    const v = nr();
    if (v) {
      const S = d.paintEngine.ensureTarget(v);
      d.paintEngine.appendStrokePoint(S, Number(b.u ?? 0), Number(b.v ?? 0), i.stroke);
    }
    return !0;
  }
  function hm(i, a, s = performance.now()) {
    var _, b;
    let l;
    if (d.mode === "frame") {
      const v = ee();
      if (!v) return !1;
      l = Mn(a, v, s);
    } else
      l = Nn(a, s);
    const h = (b = (_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.points;
    if (!l || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const v = Math.abs(Number(l.u ?? l.x ?? 0) - Number(m.u ?? m.x ?? 0)), S = Math.abs(Number(l.v ?? l.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (v < 15e-4 && S < 15e-4) return !1;
    }
    return h.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function pm(i) {
    var st, _t, yt, wt, bt;
    const a = (i == null ? void 0 : i.stroke) || null;
    if (!a || (i == null ? void 0 : i.layerKind) !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return !1;
    di();
    const s = nr(), l = Fr(s.width, s.height);
    if (!cu(l, a, { w: s.width, h: s.height })) return !1;
    const h = ((_t = (st = l.ctx) == null ? void 0 : st.getImageData(0, 0, s.width, s.height)) == null ? void 0 : _t.data) || null;
    if (!h) return !1;
    const m = new Map(De().map((W) => [String((W == null ? void 0 : W.actionGroupId) || (W == null ? void 0 : W.id) || "").trim(), W ? { ...W } : null])), _ = [], b = [], v = [...hn().filter((W) => String((W == null ? void 0 : W.layerKind) || "paint") !== "paint")];
    let S = !1, x = Rr().reduce((W, ht) => Math.max(W, Number((ht == null ? void 0 : ht.z_index) || 0)), -1) + 1;
    function M(W, ht, Dt, Ht = 8) {
      let Tt = ht, Vt = Dt, zt = -1, Kt = -1;
      for (let Wt = 0; Wt < Dt; Wt += 1)
        for (let he = 0; he < ht; he += 1)
          W[(Wt * ht + he) * 4 + 3] <= Ht || (he < Tt && (Tt = he), Wt < Vt && (Vt = Wt), he > zt && (zt = he), Wt > Kt && (Kt = Wt));
      return zt < Tt || Kt < Vt ? null : { minX: Tt, minY: Vt, maxX: zt, maxY: Kt };
    }
    const I = M(h, s.width, s.height, 8);
    if (!I) return !1;
    function L(W, ht) {
      return !W || !ht ? !1 : !(W.maxX < ht.minX || ht.maxX < W.minX || W.maxY < ht.minY || ht.maxY < W.minY);
    }
    function V(W, ht) {
      const Dt = Lr((W == null ? void 0 : W.actionGroupId) || (W == null ? void 0 : W.id) || "", "paint", ht);
      if (!Dt) return null;
      const Ht = Dt.centerUv.u - Dt.halfW, Tt = Dt.centerUv.u + Dt.halfW, Vt = Dt.centerUv.v - Dt.halfH, zt = Dt.centerUv.v + Dt.halfH, Kt = s.width, Wt = s.height;
      return {
        minX: Math.floor((Ht % 1 + 1) % 1 * Kt),
        maxX: Math.ceil((Tt % 1 + 1) % 1 * Kt),
        minY: Math.floor(j(Vt, 0, 1) * Wt),
        maxY: Math.ceil(j(zt, 0, 1) * Wt),
        wraps: Tt - Ht >= 1 || Ht < 0 || Tt > 1
      };
    }
    function B(W) {
      const ht = (W == null ? void 0 : W.bbox) || null;
      if (!ht) return null;
      const Dt = (W == null ? void 0 : W.transform) || {}, Ht = s.width, Tt = s.height, Vt = Number(ht.u0 || 0) + Number(Dt.du || 0), zt = Number(ht.u1 || 0) + Number(Dt.du || 0), Kt = Number(ht.v0 || 0) + Number(Dt.dv || 0), Wt = Number(ht.v1 || 0) + Number(Dt.dv || 0);
      return {
        minX: Math.floor((Vt % 1 + 1) % 1 * Ht),
        maxX: Math.ceil((zt % 1 + 1) % 1 * Ht),
        minY: Math.floor(j(Kt, 0, 1) * Tt),
        maxY: Math.ceil(j(Wt, 0, 1) * Tt),
        wraps: zt - Vt >= 1 || Vt < 0 || zt > 1
      };
    }
    function Z(W) {
      return W ? W.wraps ? L(I, { minX: 0, maxX: W.maxX, minY: W.minY, maxY: W.maxY }) || L(I, { minX: W.minX, maxX: s.width - 1, minY: W.minY, maxY: W.maxY }) : L(I, W) : !0;
    }
    function ct(W) {
      if (!W) return { touched: !1, canvas: null };
      const ht = Fr(s.width, s.height);
      ht.ctx.drawImage(W, 0, 0);
      const Dt = ht.ctx.getImageData(0, 0, s.width, s.height);
      ht.ctx.save(), ht.ctx.globalCompositeOperation = "destination-out", ht.ctx.drawImage(l.canvas, 0, 0), ht.ctx.restore();
      const Ht = ht.ctx.getImageData(0, 0, s.width, s.height);
      for (let Tt = 0; Tt < s.width * s.height; Tt += 1) {
        if (h[Tt * 4 + 3] <= 8) continue;
        const zt = Dt.data[Tt * 4 + 3], Kt = Ht.data[Tt * 4 + 3];
        if (zt > Kt)
          return { touched: !0, canvas: ht.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function St(W, ht, Dt) {
      const Ht = Number(Dt == null ? void 0 : Dt.z_index), Tt = Rg(W, ht, Dt).map((Vt, zt) => ({
        ...Vt,
        z_index: Number.isFinite(Ht) ? Ht + zt * 1e-3 : x + zt * 1e-3
      }));
      return Tt.length && (x = Math.max(x, ...Tt.map((Vt) => Number((Vt == null ? void 0 : Vt.z_index) || 0))) + 1), Tt;
    }
    for (const W of De()) {
      const ht = String((W == null ? void 0 : W.actionGroupId) || (W == null ? void 0 : W.id) || "").trim();
      if (!ht) continue;
      const Dt = Sn(ht, "paint");
      if (!Z(V(W, Dt))) {
        b.push(W), _.push(...Dt);
        continue;
      }
      const Ht = ((wt = (yt = d.paintEngine) == null ? void 0 : yt.getGroupTarget) == null ? void 0 : wt.call(yt, ht)) || null, Tt = ((bt = Ht == null ? void 0 : Ht.committedPaint) == null ? void 0 : bt.canvas) || null;
      if (!Tt) {
        b.push(W), _.push(...Dt);
        continue;
      }
      const Vt = ct(Tt);
      if (!Vt.touched || !Vt.canvas) {
        b.push(W), _.push(...Dt);
        continue;
      }
      S = !0;
      const zt = St(Vt.canvas, "paint", m.get(ht) || W || {});
      v.push(...zt);
    }
    for (const W of hn().filter((ht) => String((ht == null ? void 0 : ht.layerKind) || "paint") === "paint")) {
      if (!Z(B(W))) {
        v.push(W);
        continue;
      }
      const ht = ta(W, null);
      if (!ht) {
        v.push(W);
        continue;
      }
      const Dt = ct(ht);
      if (!Dt.touched || !Dt.canvas) {
        v.push(W);
        continue;
      }
      S = !0;
      const Ht = St(Dt.canvas, "paint", W);
      v.push(...Ht);
    }
    return S ? (p.painting.paint.strokes = _, p.painting.groups = b.sort((W, ht) => Number((W == null ? void 0 : W.z_index) || 0) - Number((ht == null ? void 0 : ht.z_index) || 0)), p.painting.raster_objects = v.sort((W, ht) => Number((W == null ? void 0 : W.z_index) || 0) - Number((ht == null ? void 0 : ht.z_index) || 0)), ci({ preservePanelValues: !1 }), !0) : !1;
  }
  function gm(i) {
    var m, _, b, v;
    const a = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!a) return !1;
    const s = String(((_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (i.layerKind === "paint" && s === "eraser")
      return a.geometryKind !== "lasso_fill" && (a.processedPoints = Js(a.rawPoints || a.points || [], i.stroke.targetSpace, !0)), pm(i);
    const l = i.layerKind === "paint" && s !== "eraser";
    if (a.geometryKind === "lasso_fill")
      return (Array.isArray(a.points) ? a.points : []).length < 3 ? !1 : (l && El((b = i.stroke) == null ? void 0 : b.actionGroupId), gi(i.layerKind).push(i.stroke), !0);
    const h = a.rawPoints || a.points || [];
    return h.length < 1 ? !1 : (a.processedPoints = Js(h, i.stroke.targetSpace, !0), l && El((v = i.stroke) == null ? void 0 : v.actionGroupId), gi(i.layerKind).push(i.stroke), !0);
  }
  function xu(i) {
    var s;
    if (e === "cutout" && d.mode === "frame") {
      const l = ee(), h = Je(l);
      if (!l || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const _ = Mn(i, l, performance.now()), b = _ ? eo(_) : null;
      if (b)
        for (const S of qs()) {
          if (!Oe(S)) continue;
          const x = ro(S, b);
          if (x && Number(x.x) >= 0 && Number(x.x) <= 1 && Number(x.y) >= 0 && Number(x.y) <= 1) {
            const M = Fe(S);
            if (M != null && M.visible) return { item: S, geom: M };
          }
        }
      const v = Ls(!1).slice().sort((S, x) => Number((x == null ? void 0 : x.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0));
      for (const S of v) {
        if (S.type === "strokeGroup") {
          const I = ai(Ki("paint", S.actionGroupId || S.id || ""));
          if (!I) continue;
          const L = Fe(I);
          if (!(L != null && L.visible)) continue;
          const V = Array.isArray(L.strokePaths) ? L.strokePaths : [];
          for (const B of V) {
            const Z = Array.isArray(B == null ? void 0 : B.points) ? B.points : [];
            if (!Z.length) continue;
            if (B.closed && Z.length >= 3 && cr(i, Z)) return { item: I, geom: L };
            const ct = Math.max(8, Number((B == null ? void 0 : B.lineWidth) || 0) * 0.5 + 6);
            for (let St = 0; St < Z.length - 1; St += 1)
              if (Tc(i, Z[St], Z[St + 1]) <= ct * ct) return { item: I, geom: L };
            if (Z.length === 1 && Kr(i, Z[0]) <= ct * ct) return { item: I, geom: L };
          }
          continue;
        }
        if (S.type === "rasterObject") {
          const I = oi(Wi(((s = S.item) == null ? void 0 : s.id) || S.id || ""));
          if (!I) continue;
          const L = Fe(I);
          if (Kl(I, L, i, _)) return { item: I, geom: L };
          continue;
        }
        const x = S.item;
        if (!x || !Oe(x) || !b) continue;
        const M = ro(x, b);
        if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
          const I = Fe(x);
          if (I != null && I.visible) return { item: x, geom: I };
        }
      }
      return null;
    }
    const a = [
      ...Ls(!1).slice().sort((l, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var h;
        return l.type === "strokeGroup" ? ai(Ki("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? oi(Wi(((h = l.item) == null ? void 0 : h.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...e === "cutout" ? qs().filter((l) => xn(l)) : []
    ];
    for (const l of a) {
      if (Ee(l)) {
        const m = Fe(l);
        if (!(m != null && m.visible)) continue;
        const _ = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const b of _) {
          const v = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!v.length) continue;
          if (b.closed && v.length >= 3 && cr(i, v)) return { item: l, geom: m };
          const S = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let x = 0; x < v.length - 1; x += 1)
            if (Tc(i, v[x], v[x + 1]) <= S * S) return { item: l, geom: m };
          if (v.length === 1 && Kr(i, v[0]) <= S * S) return { item: l, geom: m };
        }
        continue;
      }
      if (Xe(l)) {
        const m = Fe(l);
        if (!(m != null && m.visible)) continue;
        if (Kl(l, m, i)) return { item: l, geom: m };
        continue;
      }
      const h = Fe(l);
      if (h.visible && cr(i, h.corners))
        return { item: l, geom: h };
    }
    return null;
  }
  function ic(i, a) {
    if (!i || !i.visible) return { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (i.kind === "strokeGroup") {
      const l = i.corners.findIndex((m) => Kr(m, a) <= 121);
      if (l >= 0) {
        const m = i.corners[l], _ = m.x - i.center.x, b = m.y - i.center.y, v = _ * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: v };
      }
      const h = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const m of h) {
        const _ = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && _.length >= 3 && cr(a, _)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let v = 0; v < _.length - 1; v += 1)
          if (Tc(a, _[v], _[v + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return cr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject")
      return cr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (e === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const l = i.edgeMidpoints.find((h) => Kr(h, a) <= 169);
      if (l) {
        const h = l.edge === "left" || l.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const s = i.corners.findIndex((l) => Kr(l, a) <= 121);
    if (s >= 0) {
      const l = i.corners[s], h = l.x - i.center.x, m = l.y - i.center.y, _ = h * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: _ };
    }
    return Kr(i.rotateHandle, a) <= 144 ? { kind: "rotate", cursor: "grab" } : cr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
  }
  function Su(i, a) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((a == null ? void 0 : a.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((a == null ? void 0 : a.y) || 0))
    };
  }
  function mm(i, a) {
    return !!i && !!a && Number(a.x) >= Number(i.x0) && Number(a.x) <= Number(i.x1) && Number(a.y) >= Number(i.y0) && Number(a.y) <= Number(i.y1);
  }
  function ym(i, a) {
    if (!i || !(a != null && a.visible) || !Array.isArray(a.corners)) return !1;
    if (a.corners.some((h) => mm(i, h))) return !0;
    const s = (Number(i.x0) + Number(i.x1)) * 0.5, l = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!cr({ x: s, y: l }, a.corners);
  }
  function we(i) {
    if (cm(), d.interaction) {
      d.interaction.kind === "paint_stroke" || d.interaction.kind === "paint_lasso_fill" ? C.style.cursor = "none" : d.interaction.kind === "view" || d.interaction.kind === "pan_frame" ? C.style.cursor = "grabbing" : d.interaction.kind === "move" || d.interaction.kind === "move_multi" || d.interaction.kind === "move_stroke_group" || d.interaction.kind === "move_raster_object" ? C.style.cursor = "move" : d.interaction.kind === "scale" || d.interaction.kind === "scale_x" || d.interaction.kind === "scale_y" ? C.style.cursor = d.interaction.cursor || "nwse-resize" : d.interaction.kind === "rotate" ? C.style.cursor = "grabbing" : C.style.cursor = "default";
      return;
    }
    if (wu()) {
      C.style.cursor = "none";
      return;
    }
    if (d.mode === "frame" && d.primaryTool !== "cursor") {
      C.style.cursor = "default";
      return;
    }
    if (d.primaryTool === "cursor" && d.marqueeModifier) {
      C.style.cursor = "default";
      return;
    }
    const a = _e(), s = a ? Fe(a) : null, l = a ? mr(a) : !1, h = l ? { kind: "none", cursor: "default" } : ic(s, i);
    if (!l && h.kind !== "none") {
      C.style.cursor = h.cursor;
      return;
    }
    if (d.primaryTool === "cursor" && xu(i)) {
      C.style.cursor = "default";
      return;
    }
    C.style.cursor = d.mode === "pano" ? "grab" : "default";
  }
  function Gt() {
    if (!Q) return;
    const i = _e(), a = On();
    if (!i && a.length === 0 || d.interaction) {
      Q.style.display = "none";
      return;
    }
    if (a.length > 1) {
      const bt = "multi", W = Fs(a);
      if (d.menuMode !== bt)
        Q.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Lt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Lt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${W ? "Unlock" : "Lock"}" data-tip="${W ? "Unlock" : "Lock"}">${W ? Lt.lock_open : Lt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Lt.delete}</button>
        `, d.menuMode = bt, d.menuSize.measured = !1, oo(Q);
      else {
        const Pn = Q.querySelector("[data-action='toggle-lock']");
        Pn && (Pn.innerHTML = W ? Lt.lock_open : Lt.lock_closed, Pn.setAttribute("aria-label", W ? "Unlock" : "Lock"), Pn.setAttribute("data-tip", W ? "Unlock" : "Lock"));
      }
      const ht = Os(a);
      if (!(ht != null && ht.visible)) {
        Q.style.display = "none";
        return;
      }
      const Dt = ht.corners.map((Pn) => Pn.x), Ht = ht.corners.map((Pn) => Pn.y), Tt = Math.min(...Dt), Vt = Math.max(...Dt), zt = Math.max(...Ht), Kt = Q.style.display, Wt = Q.style.visibility;
      Q.style.display = "flex", Q.style.visibility = "hidden";
      const he = Q.getBoundingClientRect(), rr = Math.round(Number((he == null ? void 0 : he.width) || 0)) || Q.offsetWidth || d.menuSize.w || 220, ir = Math.round(Number((he == null ? void 0 : he.height) || 0)) || Q.offsetHeight || d.menuSize.h || 40;
      d.menuSize.w = Number.isFinite(rr) && rr > 0 ? rr : 220, d.menuSize.h = Number.isFinite(ir) && ir > 0 ? ir : 40, Q.style.display = Kt, Q.style.visibility = Wt, d.menuSize.measured = !0;
      const ao = d.menuSize.w, ha = d.menuSize.h, yi = 14;
      Q.style.display = "flex";
      let bi = (Tt + Vt) * 0.5 - ao * 0.5, so = zt + 18;
      if (bi = j(bi, yi, C.width - ao - yi), so + ha > C.height - yi) {
        Q.style.display = "none";
        return;
      }
      Q.style.left = `${bi}px`, Q.style.top = `${so}px`;
      return;
    }
    const s = Fl(), l = mr(i), h = s === "stroke" ? "stroke:paint" : e === "stickers" || s === "image" ? `stickers:${Ce(i) ? "external" : "normal"}` : `cutout:${d.cutoutAspectOpen ? "open" : "closed"}`;
    if (d.menuMode !== h) {
      if (s === "stroke")
        Q.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Lt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Lt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Lt.lock_open : Lt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Lt.delete}</button>
        `;
      else if (e === "stickers" || s === "image")
        Q.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Lt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Lt.send_back}</button>
          ${Ce(i) ? "" : `<button class="pano-btn pano-btn-icon" data-action="duplicate" aria-label="Duplicate" data-tip="Duplicate">${Lt.duplicate}</button><button class="pano-btn pano-btn-icon" data-action="replace-image" aria-label="Replace Image" data-tip="Replace image">${Lt.replace_image}</button>`}
          ${Ce(i) ? `<button class="pano-btn pano-btn-icon" data-action="back-initial" aria-label="Back to Initial" data-tip="Back to initial position">${Lt.back_initial}</button>` : ""}
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Lt.lock_open : Lt.lock_closed}</button>
          ${Ce(i) ? `<button class="pano-btn pano-btn-icon" data-action="toggle-visible" aria-label="Hide" data-tip="Hide input image">${Lt.eye_dashed}</button>` : `<button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Lt.delete}</button>`}
        `;
      else {
        const bt = Ni(i);
        Q.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${Lt.aspect}</button>
            <div class="pano-aspect-popover${d.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
              <button class="pano-btn pano-aspect-choice${bt === "1:1" ? " active" : ""}" data-action="aspect-set" data-aspect="1:1">1:1</button>
              <button class="pano-btn pano-aspect-choice${bt === "4:3" ? " active" : ""}" data-action="aspect-set" data-aspect="4:3">4:3</button>
              <button class="pano-btn pano-aspect-choice${bt === "3:2" ? " active" : ""}" data-action="aspect-set" data-aspect="3:2">3:2</button>
              <button class="pano-btn pano-aspect-choice${bt === "16:9" ? " active" : ""}" data-action="aspect-set" data-aspect="16:9">16:9</button>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon" data-action="rotate-90" aria-label="Rotate 90°" data-tip="Rotate 90°">${Lt.rotate_90}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Lt.lock_open : Lt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Lt.delete}</button>
        `;
      }
      d.menuMode = h, d.menuSize.measured = !1, oo(Q);
    }
    if ((e === "stickers" || s === "image") && Ce(i)) {
      const bt = Q.querySelector("[data-action='back-initial']");
      if (bt) {
        const ht = Ip();
        bt.disabled = !ht, bt.setAttribute("aria-disabled", ht ? "false" : "true"), bt.setAttribute("data-tip", ht ? "Back to initial position" : "Already at initial position");
      }
      const W = Q.querySelector("[data-action='toggle-visible']");
      if (W) {
        const ht = si(i);
        W.innerHTML = ht ? Lt.eye : Lt.eye_dashed, W.setAttribute("aria-label", ht ? "Show" : "Hide"), W.setAttribute("data-tip", ht ? "Show input image" : "Hide input image");
      }
    }
    const m = Q.querySelector("[data-action='toggle-lock']");
    m && (m.innerHTML = l ? Lt.lock_open : Lt.lock_closed, m.setAttribute("aria-label", l ? "Unlock" : "Lock"), m.setAttribute("data-tip", l ? "Unlock" : "Lock"));
    const _ = Fe(i);
    if (!(_ != null && _.visible)) {
      Q.style.display = "none";
      return;
    }
    const b = _.corners, v = b.map((bt) => bt.x), S = b.map((bt) => bt.y), x = Math.min(...v), M = Math.max(...v), I = Math.max(...S), L = Q.style.display, V = Q.style.visibility;
    Q.style.display = "flex", Q.style.visibility = "hidden";
    const B = Q.getBoundingClientRect(), Z = Math.round(Number((B == null ? void 0 : B.width) || 0)) || Q.offsetWidth || d.menuSize.w || 220, ct = Math.round(Number((B == null ? void 0 : B.height) || 0)) || Q.offsetHeight || d.menuSize.h || 40;
    d.menuSize.w = Number.isFinite(Z) && Z > 0 ? Z : 220, d.menuSize.h = Number.isFinite(ct) && ct > 0 ? ct : 40, Q.style.display = L, Q.style.visibility = V, d.menuSize.measured = !0;
    const St = d.menuSize.w, st = d.menuSize.h, _t = 14;
    Q.style.display = "flex";
    let yt = (x + M) * 0.5 - St * 0.5, wt = I + 18;
    if (!Number.isFinite(yt) || !Number.isFinite(wt)) {
      Q.style.display = "none";
      return;
    }
    if (yt = j(yt, _t, C.width - St - _t), wt + st > C.height - _t) {
      Q.style.display = "none";
      return;
    }
    Q.style.left = `${yt}px`, Q.style.top = `${wt}px`;
  }
  function ua() {
    et && (Pe.timer && (clearTimeout(Pe.timer), Pe.timer = 0), Pe.target = null, et.classList.remove("show", "pano-tooltip-footer", "pano-tooltip-tool-rail"));
  }
  function bm(i) {
    if (!et || !i || !i.isConnected) return;
    const a = String(i.getAttribute("data-tip") || "").trim();
    if (!a) return;
    et.textContent = a;
    const s = T.getBoundingClientRect(), l = i.getBoundingClientRect(), h = 8, m = et.offsetWidth || 100, _ = et.offsetHeight || 24, b = !!i.closest(".pano-floating-left"), v = !!i.closest(".pano-paint-footer") || !!i.closest(".pano-paint-color-float");
    et.classList.remove("pano-tooltip-footer", "pano-tooltip-tool-rail");
    let S = l.left - s.left + l.width * 0.5 - m * 0.5, x = l.top - s.top - _ - 8;
    if (b)
      et.classList.add("pano-tooltip-tool-rail"), S = l.right - s.left + 10, x = l.top - s.top + l.height * 0.5 - _ * 0.5, S = j(S, h, Math.max(h, s.width - m - h)), x = j(x, h, Math.max(h, s.height - _ - h));
    else if (v) {
      et.classList.add("pano-tooltip-footer");
      const M = i.closest(".pano-paint-footer"), I = M ? M.getBoundingClientRect() : l;
      S = I.left - s.left + I.width * 0.5 - m * 0.5, x = I.bottom - s.top + 5, S = j(S, h, Math.max(h, s.width - m - h)), x = Math.max(h, x);
    }
    S = j(S, h, Math.max(h, s.width - m - h)), x = Math.max(h, x), et.style.left = `${S}px`, et.style.top = `${x}px`, et.classList.add("show");
  }
  function oo(i) {
    i.querySelectorAll("[data-tip]").forEach((a) => {
      a.__panoTipBound || (a.__panoTipBound = !0, a.addEventListener("pointerenter", () => {
        Pe.target = a, Pe.timer && clearTimeout(Pe.timer), Pe.timer = window.setTimeout(() => {
          Pe.target === a && bm(a);
        }, 220);
      }), a.addEventListener("pointerleave", () => {
        Pe.target === a && (Pe.target = null), ua();
      }), a.addEventListener("pointerdown", ua));
    });
  }
  const $e = Es({
    getView: () => ({ yaw: d.viewYaw, pitch: d.viewPitch, fov: d.viewFov }),
    setView: (i) => {
      d.viewYaw = Ve(Number(i.yaw || 0)), d.viewPitch = j(Number(i.pitch || 0), -89.9, 89.9), d.viewFov = j(Number(i.fov || d.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = C.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || C.clientWidth || 0)),
        h: Math.max(1, Number(i.height || C.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, a;
      return {
        x: (i = p.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (a = p.ui_settings) != null && a.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: yr,
    onInteraction: () => {
      kt.backgroundDirty = !0, kt.dirty = !0;
    }
  });
  C.onpointerdown = (i) => {
    const a = pi(i);
    if (ca(a, !0), d.viewTween = null, $e.state.inertia.active = !1, $e.state.inertia.vx = 0, $e.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), d.mode !== "frame") {
        const b = d.mode === "unwrap" ? a : sa(i);
        d.interaction = { kind: "view", last: b, lastTs: performance.now() }, $e.startDrag(b.x, b.y, i.pointerId, performance.now());
      }
      we(a), C.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (r) {
      if (d.mode === "pano") {
        const b = sa(i);
        d.interaction = { kind: "view", last: b, lastTs: performance.now() }, $e.startDrag(b.x, b.y, i.pointerId, performance.now()), we(a), C.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (dt && !dt.hidden)
      return;
    if ((d.primaryTool === "paint" || d.primaryTool === "mask") && (vu() || rc())) {
      const b = d.primaryTool === "mask" ? "mask" : "paint", v = d.primaryTool === "mask" ? d.maskTool : d.paintTool, S = rc() ? ee() : null, x = { kind: "ERP_GLOBAL" }, M = S ? Mn(a, S, performance.now()) : Nn(a, performance.now());
      d.interaction = {
        kind: v === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: Mi("live"),
        stroke: v === "lasso_fill" ? fm(b, v, [M], x) : um(b, v, [M], x)
      }, to();
      const I = nr();
      if (I)
        if (d.paintEngine.beginStroke(d.interaction.stroke, I), d.interaction.kind === "paint_stroke") {
          const L = d.paintEngine.ensureTarget(I), V = Number((M == null ? void 0 : M.u) ?? (M == null ? void 0 : M.x) ?? 0), B = Number((M == null ? void 0 : M.v) ?? (M == null ? void 0 : M.y) ?? 0);
          d.paintEngine.appendStrokePoint(L, V, B, d.interaction.stroke);
        } else
          d.paintEngine.updateActiveStroke(d.interaction.stroke, I);
      we(a), C.setPointerCapture(i.pointerId), pt();
      return;
    }
    const s = On(), l = _e(), h = s.length > 1 ? Os(s) : l ? Fe(l) : null;
    if (d.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      d.interaction = { kind: "marquee_select", start: a, current: a }, we(a), C.setPointerCapture(i.pointerId), pt({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (h != null && h.visible)) {
      if ((s.some((v) => mr(v)) ? { kind: "none" } : ic(h, a)).kind === "move") {
        d.interaction = {
          kind: "move_multi",
          items: s.map((v) => v),
          offset: { x: a.x - h.center.x, y: a.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: s.filter((v) => Oe(v)).map((v) => ({
            id: String(v.id || ""),
            yaw_deg: Number(v.yaw_deg || 0),
            pitch_deg: Number(v.pitch_deg || 0),
            center: (() => {
              var x, M;
              const S = Fe(v);
              return S != null && S.visible ? { x: Number(((x = S.center) == null ? void 0 : x.x) || 0), y: Number(((M = S.center) == null ? void 0 : M.y) || 0) } : { x: a.x, y: a.y };
            })()
          })),
          strokeSnapshots: s.filter((v) => Ee(v)).map((v) => ({
            id: String(v.actionGroupId || v.id || ""),
            layerKind: String(v.layerKind || "paint"),
            snapshot: nn(Sn(v.actionGroupId, v.layerKind)),
            frameSnapshot: nn(Lr(v.actionGroupId, v.layerKind)),
            center: (() => {
              var x, M;
              const S = Fe(v);
              return S != null && S.visible ? { x: Number(((x = S.center) == null ? void 0 : x.x) || 0), y: Number(((M = S.center) == null ? void 0 : M.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: Dl(v.actionGroupId, v.layerKind)
          })),
          rasterSnapshots: s.filter((v) => Xe(v)).map((v) => ({
            id: Ye(v.rasterObjectId || v.id || ""),
            snapshot: nn(hn().find((S) => String((S == null ? void 0 : S.id) || "") === Ye(v.rasterObjectId || v.id || ""))),
            center: (() => {
              var x, M;
              const S = Fe(v);
              return S != null && S.visible ? { x: Number(((x = S.center) == null ? void 0 : x.x) || 0), y: Number(((M = S.center) == null ? void 0 : M.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: Qp(v)
          }))
        }, we(a), C.setPointerCapture(i.pointerId);
        return;
      }
    } else if (l && (h != null && h.visible)) {
      const b = mr(l) ? { kind: "none" } : ic(h, a);
      if (b.kind === "scale") {
        d.interaction = Ee(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          snapshot: nn(Sn(l.actionGroupId, l.layerKind)),
          frameSnapshot: nn(Lr(l.actionGroupId, l.layerKind)),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor
        }, we(a), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        d.interaction = {
          kind: b.kind,
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, we(a), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        d.interaction = Ee(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: h.center,
          startAng: Math.atan2(a.y - h.center.y, a.x - h.center.x),
          snapshot: nn(Sn(l.actionGroupId, l.layerKind)),
          frameSnapshot: nn(Lr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: h.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(a.y - h.center.y, a.x - h.center.x)
        }, we(a), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Ee(l)) {
          const v = d.mode === "frame" ? (() => {
            const S = ee();
            return S ? Mn(a, S, performance.now()) : null;
          })() : Nn(a, performance.now());
          d.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: v,
            snapshot: nn(Sn(l.actionGroupId, l.layerKind)),
            frameSnapshot: nn(Lr(l.actionGroupId, l.layerKind))
          }, we(a), C.setPointerCapture(i.pointerId);
          return;
        }
        if (Xe(l)) {
          const v = d.mode === "frame" ? (() => {
            const S = ee();
            return S ? Mn(a, S, performance.now()) : null;
          })() : Nn(a, performance.now());
          d.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: v,
            snapshot: nn(hn().find((S) => String((S == null ? void 0 : S.id) || "") === Ye(l.rasterObjectId || l.id || "")))
          }, we(a), C.setPointerCapture(i.pointerId);
          return;
        }
        d.interaction = {
          kind: "move",
          item: l,
          offset: { x: a.x - h.center.x, y: a.y - h.center.y }
        }, we(a), C.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = xu(a);
    if (m) {
      const b = d.selectedId !== m.item.id;
      if (b && d.selectedId && (le(), $n()), Ji(m.item), e === "cutout" && b && (d.cutoutAspectOpen = !1), b && qt(), Gt(), pt(), b) {
        we(a);
        return;
      }
      if (mr(m.item)) {
        we(a);
        return;
      }
      d.interaction = {
        kind: Ee(m.item) ? "move_stroke_group" : Xe(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: a.x - m.geom.center.x, y: a.y - m.geom.center.y },
        startUv: Ee(m.item) || Xe(m.item) ? d.mode === "frame" ? (() => {
          const v = ee();
          return v ? Mn(a, v, performance.now()) : null;
        })() : Nn(a, performance.now()) : null,
        snapshot: Ee(m.item) ? nn(Sn(m.item.actionGroupId, m.item.layerKind)) : Xe(m.item) ? nn(hn().find((v) => String((v == null ? void 0 : v.id) || "") === Ye(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Ee(m.item) ? nn(Lr(m.item.actionGroupId, m.item.layerKind)) : null
      }, we(a), C.setPointerCapture(i.pointerId);
      return;
    }
    const _ = !!d.selectedId;
    if (_ && (le(), $n()), ci(), _ && qt(), Gt(), pt(), d.mode === "pano") {
      const b = sa(i);
      d.interaction = { kind: "view", last: b, lastTs: performance.now() }, $e.startDrag(b.x, b.y, i.pointerId, performance.now()), we(a), C.setPointerCapture(i.pointerId);
    }
  }, C.onpointermove = (i) => {
    var l, h, m, _, b, v, S, x, M, I, L, V, B, Z, ct, St, st, _t;
    const a = pi(i);
    if (ca(a, !0), !d.interaction) {
      we(a);
      return;
    }
    we(a);
    const s = d.interaction;
    if (s.kind === "paint_stroke") {
      const yt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let wt = !1;
      yt.forEach((bt) => {
        const W = pi(bt);
        dm(s, W, performance.now()) && (wt = !0);
      }), wt && pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const yt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let wt = !1;
      if (yt.forEach((bt) => {
        const W = pi(bt);
        hm(s, W, performance.now()) && (wt = !0);
      }), wt) {
        const bt = nr();
        bt && d.paintEngine.updateActiveStroke(s.stroke, bt), pt({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const yt = performance.now(), wt = d.mode === "unwrap" ? a : sa(i);
      $e.moveDrag(wt.x, wt.y, d.mode === "unwrap" ? "unwrap" : "pano", yt), s.lastTs = yt, s.last = wt, pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      d.frameView.panX += a.x - s.last.x, d.frameView.panY += a.y - s.last.y, s.last = a, pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const yt = a.x - s.offset.x, wt = a.y - s.offset.y;
      if (d.mode === "frame" && e === "cutout") {
        const bt = ee(), W = Je(bt);
        if (!bt || !W) return;
        const ht = {
          x: j((yt - W.x) / Math.max(1, W.w), 0, 1),
          y: j((wt - W.y) / Math.max(1, W.h), 0, 1)
        }, Dt = Zs(bt, ht);
        if (!Dt) return;
        const Ht = Ta(Dt);
        s.item.yaw_deg = Ht.yaw, s.item.pitch_deg = Ht.pitch;
      } else if (d.mode === "unwrap") {
        const bt = yr(), W = j((yt - bt.x) / Math.max(bt.w, 1), 0, 1), ht = j((wt - bt.y) / Math.max(bt.h, 1), 0, 1);
        s.item.yaw_deg = Ve(W * 360 - 180), s.item.pitch_deg = j(90 - ht * 180, -90, 90);
      } else {
        const bt = Vs(yt, wt), W = Ta(bt);
        s.item.yaw_deg = W.yaw, s.item.pitch_deg = W.pitch;
      }
      pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const yt = d.mode === "frame" ? (() => {
        const W = ee();
        return W ? Mn(a, W, performance.now()) : null;
      })() : Nn(a, performance.now());
      if (!yt || !s.startUv) return;
      const wt = Number(yt.u || 0) - Number(s.startUv.u || 0), bt = Number(yt.v || 0) - Number(s.startUv.v || 0);
      Ll((l = s.item) == null ? void 0 : l.actionGroupId, wt, bt, s.snapshot, (h = s.item) == null ? void 0 : h.layerKind, s.frameSnapshot) && (Fn({ rebuildPaintEngine: !0 }), pt({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const yt = d.mode === "frame" ? (() => {
        const W = ee();
        return W ? Mn(a, W, performance.now()) : null;
      })() : Nn(a, performance.now());
      if (!yt || !s.startUv) return;
      const wt = Number(yt.u || 0) - Number(s.startUv.u || 0), bt = Number(yt.v || 0) - Number(s.startUv.v || 0);
      Ol(((m = s.item) == null ? void 0 : m.rasterObjectId) || ((_ = s.item) == null ? void 0 : _.id) || "", wt, bt, s.snapshot) && (no(), pt({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const yt = a.x - Number(((b = s.offset) == null ? void 0 : b.x) || 0), wt = a.y - Number(((v = s.offset) == null ? void 0 : v.y) || 0);
      let bt = !1, W = !1, ht = !1;
      const Dt = yt - Number(((S = s.startCenter) == null ? void 0 : S.x) || yt), Ht = wt - Number(((x = s.startCenter) == null ? void 0 : x.y) || wt);
      for (const Tt of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const Vt = (e === "cutout" ? Rs() : Te()).find((Kt) => String((Kt == null ? void 0 : Kt.id) || "") === String(Tt.id || ""));
        if (!Vt || !Oe(Vt)) continue;
        const zt = {
          x: Number(((M = Tt.center) == null ? void 0 : M.x) || 0) + Dt,
          y: Number(((I = Tt.center) == null ? void 0 : I.y) || 0) + Ht
        };
        if (d.mode === "frame" && e === "cutout") {
          const Kt = ee(), Wt = Je(Kt);
          if (!Kt || !Wt) continue;
          const he = {
            x: j((zt.x - Wt.x) / Math.max(1, Wt.w), 0, 1),
            y: j((zt.y - Wt.y) / Math.max(1, Wt.h), 0, 1)
          }, rr = Zs(Kt, he);
          if (!rr) continue;
          const ir = Ta(rr);
          Vt.yaw_deg = ir.yaw, Vt.pitch_deg = ir.pitch;
        } else if (d.mode === "unwrap") {
          const Kt = yr(), Wt = j((zt.x - Kt.x) / Math.max(Kt.w, 1), 0, 1), he = j((zt.y - Kt.y) / Math.max(Kt.h, 1), 0, 1);
          Vt.yaw_deg = Ve(Wt * 360 - 180), Vt.pitch_deg = j(90 - he * 180, -90, 90);
        } else {
          const Kt = Vs(zt.x, zt.y), Wt = Ta(Kt);
          Vt.yaw_deg = Wt.yaw, Vt.pitch_deg = Wt.pitch;
        }
        bt = !0;
      }
      for (const Tt of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const Vt = {
          x: Number(((L = Tt.center) == null ? void 0 : L.x) || 0) + Dt,
          y: Number(((V = Tt.center) == null ? void 0 : V.y) || 0) + Ht
        }, zt = d.mode === "frame" ? (() => {
          const Wt = ee();
          return Wt ? Mn(Vt, Wt, performance.now()) : null;
        })() : Nn(Vt, performance.now()), Kt = Tt.centerUv || null;
        if (zt && Kt) {
          const Wt = Number(zt.u || 0) - Number(Kt.u || 0), he = Number(zt.v || 0) - Number(Kt.v || 0);
          Ll(Tt.id, Wt, he, Tt.snapshot, Tt.layerKind, Tt.frameSnapshot) && (bt = !0, W = !0);
        }
      }
      for (const Tt of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const Vt = {
          x: Number(((B = Tt.center) == null ? void 0 : B.x) || 0) + Dt,
          y: Number(((Z = Tt.center) == null ? void 0 : Z.y) || 0) + Ht
        }, zt = d.mode === "frame" ? (() => {
          const Wt = ee();
          return Wt ? Mn(Vt, Wt, performance.now()) : null;
        })() : Nn(Vt, performance.now()), Kt = Tt.centerUv || null;
        if (zt && Kt) {
          const Wt = Number(zt.u || 0) - Number(Kt.u || 0), he = Number(zt.v || 0) - Number(Kt.v || 0);
          Ol(Tt.id, Wt, he, Tt.snapshot) && (bt = !0, ht = !0);
        }
      }
      bt && (W ? Fn({ rebuildPaintEngine: !0 }) : ht ? no() : vn(), pt({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const wt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Rl((ct = s.item) == null ? void 0 : ct.actionGroupId, wt, 0, s.snapshot, (St = s.item) == null ? void 0 : St.layerKind, s.frameSnapshot) && (Fn({ rebuildPaintEngine: !0 }), pt({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let yt = (Math.atan2(a.y - s.center.y, a.x - s.center.x) - Number(s.startAng || 0)) * Wr;
      i.shiftKey && (yt = Math.round(yt / 45) * 45), Rl((st = s.item) == null ? void 0 : st.actionGroupId, 1, yt, s.snapshot, (_t = s.item) == null ? void 0 : _t.layerKind, s.frameSnapshot) && (Fn({ rebuildPaintEngine: !0 }), pt({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = a, pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const wt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = j(s.startHFOV * wt, 1, 179), s.item.vFOV_deg = j(s.startVFOV * wt, 1, 179), s.item.aspect_id = qr(s.item), pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const wt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = j(s.startHFOV * wt, 1, 179), s.item.aspect_id = qr(s.item), pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const wt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = j(s.startVFOV * wt, 1, 179), s.item.aspect_id = qr(s.item), pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let wt = (Math.atan2(a.y - s.center.y, a.x - s.center.x) - s.startAng) * Wr, bt = s.startRot - wt;
      i.shiftKey && (bt = Math.round(bt / 45) * 45);
      const W = Oe(s.item) ? "rot_deg" : "roll_deg";
      s.item[W] = bt, pt({ localOnly: !0 });
    }
  }, C.onpointerup = () => {
    var a, s, l, h, m, _;
    const i = d.interaction;
    if (((a = d.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill")
      if (to(), gm(d.interaction)) {
        Fn();
        const b = String(((l = d.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (b) {
          const S = De().find((x) => String((x == null ? void 0 : x.actionGroupId) || "") === b);
          S && (S.frame = null);
        }
        const v = nr();
        v && (String(((h = d.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (d.paintEngine.cancelActiveStroke(v), au()) : d.paintEngine.commitActiveStroke(d.interaction.stroke, v)), le(), $n(), qt(), Gt(), t.setDirtyCanvas(!0, !0), pt();
      } else {
        const b = nr();
        b && d.paintEngine.cancelActiveStroke(b);
      }
    else if (((m = d.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const b = Su(d.interaction.start, d.interaction.current), S = [
        ...e === "cutout" ? qs().filter((x) => !xn(x)) : [...Te()],
        ...pp(),
        ...gp()
      ].filter((x) => ym(b, Fe(x)));
      wp(S, ((_ = S[S.length - 1]) == null ? void 0 : _.id) || null), e === "cutout" && S.length && (d.cutoutAspectOpen = !1), qt(), Gt(), pt();
    } else if (d.interaction && d.interaction.kind !== "view" && d.interaction.kind !== "pan_frame") {
      let b = !1;
      (d.interaction.kind === "move_stroke_group" || d.interaction.kind === "scale_stroke_group" || d.interaction.kind === "rotate_stroke_group") && (b = !0), d.interaction.kind === "move_raster_object" && (b = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length && (b = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.rasterSnapshots) && d.interaction.rasterSnapshots.length && (b = !0), b && no(), le(), $n(), t.setDirtyCanvas(!0, !0), tc(), d.hqFrames = 1, Gt(), pt();
    }
    d.interaction = null, to(), i && i.kind === "view" && $e.endDrag(performance.now()), Qo(), Gt(), we(d.pointerPos), pt();
  }, C.onpointercancel = () => {
    var i, a, s;
    if (((i = d.interaction) == null ? void 0 : i.kind) === "view" && $e.endDrag(performance.now()), ((a = d.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      to();
      const l = nr();
      l && d.paintEngine.cancelActiveStroke(l);
    }
    d.interaction = null, to(), Qo(), we(d.pointerPos), pt({ localOnly: !0 });
  }, C.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, C.onmousemove = (i) => {
    const a = pi(i);
    ca(a, !0), !d.interaction && we(a);
  }, C.onmouseleave = () => {
    ca(d.pointerPos, !1), we(d.pointerPos);
  }, C.onwheel = (i) => {
    if (d.mode === "frame") {
      const a = pi(i), s = i.deltaY < 0 ? 1.1 : 1 / 1.1;
      om(a, s) && pt({ localOnly: !0 }), i.preventDefault();
      return;
    }
    d.mode === "pano" && ($e.applyWheelEvent(i) && pt({ localOnly: !0 }), i.preventDefault());
  }, C.ondragover = (i) => {
    e !== "stickers" && e !== "cutout" || r || (i.preventDefault(), Rn(!0));
  }, C.ondrop = (i) => {
    var l;
    if (e !== "stickers" && e !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), ke.depth = 0, Rn(!1);
    const s = Array.from(((l = i.dataTransfer) == null ? void 0 : l.files) || []).find((h) => aa(h));
    s && fu(s);
  };
  const Nu = (i) => {
    e !== "stickers" && e !== "cutout" || r || er(i) && (ke.depth += 1, Rn(!0), i.preventDefault());
  }, Mu = (i) => {
    e !== "stickers" && e !== "cutout" || r || (!ke.active && er(i) && Rn(!0), ke.active && i.preventDefault());
  }, Pu = (i) => {
    if (e !== "stickers" && e !== "cutout" || r || !ke.active) return;
    ke.depth = Math.max(0, ke.depth - 1);
    const a = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (ke.depth === 0 || a) && Rn(!1);
  }, ku = (i) => {
    e !== "stickers" && e !== "cutout" || r || (ke.depth = 0, Rn(!1), er(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Nu, !0), window.addEventListener("dragover", Mu, !0), window.addEventListener("dragleave", Pu, !0), window.addEventListener("drop", ku, !0), vt.forEach((i) => {
    i.onclick = () => {
      i.disabled || (d.mode = i.dataset.view, e === "cutout" && d.mode === "frame" && _e() && xn(_e()) && (ci({ preservePanelValues: !0 }), qt(), Gt()), nc(), Qo(), pt());
    };
  });
  function oc() {
    const { canUndo: i, canRedo: a } = uu();
    E.querySelectorAll("[data-action='undo'], [data-tool-ui-action='undo']").forEach((s) => {
      s.disabled = !i;
    }), E.querySelectorAll("[data-action='redo'], [data-tool-ui-action='redo']").forEach((s) => {
      s.disabled = !a;
    });
  }
  const ac = E.querySelector("[data-action='undo']");
  ac && (ac.onclick = () => {
    r || ac.disabled || io(-1);
  });
  const sc = E.querySelector("[data-action='redo']");
  sc && (sc.onclick = () => {
    r || sc.disabled || io(1);
  });
  const Cu = E.querySelector("[data-action='add']");
  Cu && (Cu.onclick = () => {
    r || (e === "stickers" ? ec() : hu());
  });
  const Au = E.querySelector("[data-action='clear']");
  Au && (Au.onclick = () => {
    r || gu();
  });
  const Iu = E.querySelector("[data-action='save']");
  Iu && (Iu.onclick = () => {
    r || bu();
  }), E.querySelector("[data-action='reset-view']").onclick = () => {
    Re(0, 0, 100, 180, 680);
  };
  const Hr = E.querySelector("[data-action='toggle-grid']"), cc = () => {
    if (!Hr) return;
    const i = !!d.showGrid;
    Hr.innerHTML = i ? Lt.eye : Lt.eye_dashed, Hr.setAttribute("aria-pressed", i ? "true" : "false"), Hr.setAttribute("aria-label", i ? "Hide Grid" : "Show Grid"), Hr.setAttribute("data-tip", i ? "Hide grid" : "Show grid");
  };
  if (Hr && (cc(), Hr.onclick = () => {
    d.showGrid = !d.showGrid, jv(t == null ? void 0 : t.id, d.showGrid), cc(), pt();
  }), gt && (gt.querySelectorAll("[data-tool-mode]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const a = String(i.getAttribute("data-tool-mode") || "cursor");
      d.primaryTool = a, (a === "paint" || a === "mask") && ci({ preservePanelValues: !0 }), pn(), qt(), Gt(), pt();
    };
  }), gt.querySelectorAll("[data-tool-ui-action]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const a = String(i.getAttribute("data-tool-ui-action") || "");
      if (!((a === "undo" || a === "redo") && i.disabled)) {
        if (a === "undo") io(-1);
        else if (a === "redo") io(1);
        else if (a === "clear") gu();
        else if (a === "add") ec();
        else if (a === "add-image") ec();
        else if (a === "add-or-look") {
          const s = ee();
          if ((p.shots || []).length === 0)
            hu();
          else {
            const l = s;
            if (!l) return;
            d.selectedId = l.id || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], p.active.selected_shot_id = d.selectedId;
            const h = Ve(Number(l.yaw_deg || 0)), m = j(Number(l.pitch_deg || 0), -89.9, 89.9);
            Re(h, m, d.viewFov), qt(), Gt(), pt();
          }
        }
      }
    };
  })), E.querySelectorAll("[data-paint-tool]").forEach((i) => {
    i.onclick = () => {
      d.primaryTool = "paint";
      const a = String(i.getAttribute("data-paint-tool") || "pen");
      d.paintTool = a, ci({ preservePanelValues: !0 }), un[a] && (d.activeBrushPresetId = a), pn(), qt(), Gt(), pt();
    };
  }), E.querySelectorAll("[data-mask-tool]").forEach((i) => {
    i.onclick = () => {
      d.primaryTool = "mask", d.maskTool = String(i.getAttribute("data-mask-tool") || "pen"), ci({ preservePanelValues: !0 }), pn(), qt(), Gt(), pt();
    };
  }), U.forEach((i) => {
    i.onclick = () => {
      const a = String(i.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
      Qg(a);
    };
  }), J.forEach((i) => {
    i.oninput = () => {
      if (i.disabled) return;
      const a = Math.max(1, Math.min(120, Math.round(Number(i.value)))), s = xr(d.primaryTool === "paint" ? d.paintTool : d.maskTool);
      d.brushSizes[s] = a;
      const l = (a - 1) / 119 * 100;
      J.forEach((h) => {
        h.value = String(a), h.style.setProperty("--v", `${j(l, 0, 100)}%`);
      }), Y.forEach((h) => {
        h.textContent = String(a);
      }), lm();
    }, i.onchange = () => la(), i.addEventListener("pointerup", la), i.addEventListener("pointercancel", la), i.addEventListener("blur", la);
  }), tt) {
    tt.querySelectorAll("[data-paint-color-swatch]").forEach((a) => {
      a.onclick = () => {
        const s = Xa.find((l) => l.id === a.getAttribute("data-paint-color-swatch"));
        s && (d.paintColor = mn(s.color), at(!0), pn());
      };
    });
    const i = tt.querySelector("[data-paint-color-custom]");
    i && (i.onclick = (a) => {
      a.preventDefault(), a.stopPropagation(), dt && !dt.hidden ? at(!0) : It(), pn();
    });
  }
  const vm = (i, a) => {
    var b;
    if (!ae) return;
    const s = ae.getBoundingClientRect(), l = j((i - s.left) / Math.max(1, s.width), 0, 1), h = 1 - j((a - s.top) / Math.max(1, s.height), 0, 1), m = mo(d.customPaintColor), _ = { ...Dc(m.h, l, h), a: Number(((b = d.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    d.customPaintColor = mn(_), d.paintColor = mn(_), pn();
  }, _m = (i) => {
    var m;
    if (!ve) return;
    const a = ve.getBoundingClientRect(), s = j((i - a.left) / Math.max(1, a.width), 0, 1), l = mo(d.customPaintColor), h = { ...Dc(s, l.s, l.v), a: Number(((m = d.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    d.customPaintColor = mn(h), d.paintColor = mn(h), pn();
  }, Eu = (i, a) => {
    const s = i.pointerId;
    a(i);
    const l = (m) => {
      m.pointerId === s && a(m);
    }, h = (m) => {
      m.pointerId === s && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  ae && (ae.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Eu(i, (a) => vm(a.clientX, a.clientY));
  }), ve && (ve.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Eu(i, (a) => _m(a.clientX));
  }), Pt && (Pt.oninput = () => {
    const i = { ...d.customPaintColor, a: j(Number(Pt.value) / 100, 0, 1) };
    d.customPaintColor = mn(i), d.paintColor = mn(i), pn();
  });
  const Tu = () => {
    if (!rt) return;
    const i = !!d.fullscreen;
    rt.innerHTML = i ? Lt.fullscreen_close : Lt.fullscreen, rt.setAttribute("aria-label", i ? "Exit Fullscreen" : "Fullscreen"), rt.setAttribute("data-tip", i ? "Exit fullscreen" : "Fullscreen");
  }, fa = (i) => {
    const a = !!i;
    d.fullscreen !== a && (d.fullscreen = a, E.classList.toggle("pano-modal-fullscreen", a), a ? (d.fullscreenPrevShowGrid = !!d.showGrid, d.showGrid = !1) : d.fullscreenPrevShowGrid !== null && (d.showGrid = !!d.fullscreenPrevShowGrid, d.fullscreenPrevShowGrid = null), cc(), Tu(), pt());
  }, Du = () => document.fullscreenElement === D, wm = async () => {
    var i, a;
    try {
      if (!document.fullscreenEnabled) {
        fa(!d.fullscreen);
        return;
      }
      Du() ? await ((a = document.exitFullscreen) == null ? void 0 : a.call(document)) : await ((i = D.requestFullscreen) == null ? void 0 : i.call(D));
    } catch {
      fa(!d.fullscreen);
    }
  }, Lu = () => {
    document.fullscreenEnabled && fa(Du());
  };
  document.addEventListener("fullscreenchange", Lu), rt && (Tu(), rt.onclick = (i) => {
    i.preventDefault(), i.stopPropagation(), wm();
  });
  const Ru = () => {
    if (!lt) return;
    const i = !!d.outputPreviewExpanded;
    lt.innerHTML = i ? Lt.fullscreen_close : Lt.fullscreen, lt.setAttribute("aria-label", i ? "Reduce Preview" : "Expand Preview"), lt.setAttribute("data-tip", i ? "Reduce preview" : "Expand preview");
  };
  lt && (Ru(), lt.onclick = (i) => {
    i.preventDefault(), i.stopPropagation();
    const a = !d.outputPreviewExpanded;
    d.outputPreviewExpanded = a, d.outputPreviewAnimFrom = d.outputPreviewAnim, d.outputPreviewAnimTo = a ? 1 : 0, d.outputPreviewAnimStartTs = performance.now(), Ru(), pt();
  }), Q.addEventListener("click", (i) => {
    const a = i.target.closest("[data-action]");
    if (!a) return;
    const s = a.getAttribute("data-action");
    if (!r) {
      if (s === "aspect") {
        d.cutoutAspectOpen = !d.cutoutAspectOpen, d.menuSize.measured = !1, Gt(), pt();
        return;
      }
      if (s === "aspect-set") {
        const l = _e();
        if (!l) return;
        const h = String(a.getAttribute("data-aspect") || "1:1");
        em(l, h), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, tc(), le(), Ne(), Gt(), pt();
        return;
      }
      if (s === "rotate-90") {
        const l = _e();
        if (!l) return;
        nm(l), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, tc(), le(), Ne(), Gt(), pt();
        return;
      }
      if (s === "bring-front") {
        rm();
        return;
      }
      if (s === "send-back") {
        im();
        return;
      }
      if (s === "duplicate") {
        tm();
        return;
      }
      if (s === "replace-image") {
        Yg();
        return;
      }
      if (s === "toggle-lock") {
        _p();
        return;
      }
      if (s === "back-initial") {
        Cp();
        return;
      }
      if (s === "toggle-visible") {
        kp();
        return;
      }
      if (s === "delete") {
        mu();
        return;
      }
      pt();
    }
  });
  const lc = t.onExecuted, uc = t.onConnectionsChange;
  let fc = null, dc = null, hc = null;
  !r && e === "stickers" && (hc = (i = "sync") => {
    Bl(i);
  }, t.__panoExternalStickerSync = hc, fc = function(...a) {
    var s;
    typeof lc == "function" && lc.apply(this, a), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, t.onExecuted = fc, dc = function(...a) {
    var s;
    typeof uc == "function" && uc.apply(this, a), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, t.onConnectionsChange = dc), r || (nl.set(String(t.id ?? "0"), () => Gs()), Zp() && Gs());
  const mi = () => {
    var i, a, s, l, h, m, _, b, v;
    d.cutoutPreviewSurfaceRaf && (cancelAnimationFrame(d.cutoutPreviewSurfaceRaf), d.cutoutPreviewSurfaceRaf = 0), d.cutoutPreviewSurfaceTimer && (clearTimeout(d.cutoutPreviewSurfaceTimer), d.cutoutPreviewSurfaceTimer = 0), nl.delete(String(t.id ?? "0")), r || Gs(), document.fullscreenElement === D && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Lu), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (s = (a = t.__panoDomPreview) == null ? void 0 : a.requestDraw) == null || s.call(a), (h = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || h.call(l, !0, !0), (b = (_ = (m = yn) == null ? void 0 : m.canvas) == null ? void 0 : _.setDirty) == null || b.call(_, !0, !0), ua(), Wg(), (v = ot == null ? void 0 : ot.dispose) == null || v.call(ot), Rn(!1), window.removeEventListener("keydown", Ou, !0), window.removeEventListener("keydown", Fu, !0), window.removeEventListener("keydown", da, !0), window.removeEventListener("keyup", da, !0), window.removeEventListener("keydown", $u, !0), window.removeEventListener("dragenter", Nu, !0), window.removeEventListener("dragover", Mu, !0), window.removeEventListener("dragleave", Pu, !0), window.removeEventListener("drop", ku, !0), !r && e === "stickers" && (t.onExecuted === fc && (t.onExecuted = lc), t.onConnectionsChange === dc && (t.onConnectionsChange = uc), t.__panoExternalStickerSync === hc && (t.__panoExternalStickerSync = null)), P.unmount(), N.remove();
  }, Ou = (i) => {
    var a, s, l, h;
    if (i.key === "Escape") {
      if (d.fullscreen && document.fullscreenElement === D) {
        i.preventDefault(), i.stopPropagation(), (a = i.stopImmediatePropagation) == null || a.call(i), (s = document.exitFullscreen) == null || s.call(document).catch(() => {
        });
        return;
      }
      if (d.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), fa(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), mi();
    }
  }, Fu = (i) => {
    const a = String(i.key || ""), s = String(i.code || ""), l = Number(i.keyCode || 0);
    if (!(a === "Delete" || s === "Delete" || l === 46) && !(a === "Backspace" || s === "Backspace" || l === 8)) return;
    const _ = i.target, b = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || _ != null && _.isContentEditable || !_e() || (mu(), i.preventDefault(), i.stopPropagation());
  }, da = (i) => {
    const a = !!(i.ctrlKey || i.metaKey);
    d.marqueeModifier !== a && (d.marqueeModifier = a, we(d.pointerPos));
  }, $u = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const a = String(i.key || "").toLowerCase(), s = String(i.code || "");
    if (a !== "z" && s !== "KeyZ") return;
    const l = i.target, h = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: m, canRedo: _ } = uu();
    i.shiftKey && !_ || !i.shiftKey && !m || (io(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Ou, !0), window.addEventListener("keydown", Fu, !0), window.addEventListener("keydown", da, !0), window.addEventListener("keyup", da, !0), window.addEventListener("keydown", $u, !0), D.addEventListener("pointerdown", (i) => {
    i.target === D && mi();
  }), oo(E), Fp(), !r && e === "stickers" && Bl("open"), Xg(), le(), oc(), pn(), xt && requestAnimationFrame(() => {
    xt.classList.add("is-ready");
  }), qt(), Jo(), lu(), we(d.pointerPos), pt(), kt.rafId = requestAnimationFrame(Qs);
}
function gd(t, e, n, r) {
  if (!(t != null && t.prototype)) return;
  const o = (y) => {
    var w, p;
    try {
      (w = y.__panoDomRestore) == null || w.call(y);
    } catch {
    }
    try {
      (p = y.__panoLegacyRestore) == null || p.call(y);
    } catch {
    }
    y.__panoDomPreview = null, y.__panoLegacyPreviewHooked = !1, y.__panoPreviewHooked = !1, y.__panoPreviewAttached = !1, y.__panoPreviewMountKey = null;
  };
  function c(y) {
    var D;
    const w = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === w) return;
    o(y), n === "PanoramaStickers" && Xv(y), Jv(y, ms);
    const N = _n(y, ms);
    if (N && !N.__panoPreviewPatchedCb) {
      N.__panoPreviewPatchedCb = !0;
      const E = N.callback;
      N.callback = (C) => {
        var T;
        const H = E ? E(C) : void 0;
        return (T = y.setDirtyCanvas) == null || T.call(y, !0, !1), H;
      };
    }
    const P = _n(y, "bg_color");
    if (P && (P.value == null || String(P.value).trim() === "" || String(P.value).toLowerCase() === "#000000") && (P.value = "#00ff00", (D = P.callback) == null || D.call(P, "#00ff00")), n === "PanoramaStickers") {
      il(y, r, () => Oo(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = w;
        return;
      }
    }
    il(y, r, () => Oo(y, "cutout")), Bb(y, {
      buttonText: r,
      onOpen: () => Oo(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = w;
  }
  const u = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const y = u ? u.apply(this, arguments) : void 0;
    return c(this), y;
  };
  const f = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const y = f ? f.apply(this, arguments) : void 0;
    return this.widgets && c(this), y;
  };
  const g = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const y = g ? g.apply(this, arguments) : void 0;
    return this.widgets && c(this), y;
  };
}
function f_(t) {
  if (!(t != null && t.prototype)) return;
  const e = function() {
    (!Array.isArray(this.size) || this.size[0] < 100 || this.size[1] < 100) && (this.size = [360, 260]);
  }, n = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const o = n ? n.apply(this, arguments) : void 0;
    return e.call(this), o;
  };
  const r = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const o = r ? r.apply(this, arguments) : void 0;
    return e.call(this), o;
  };
}
function d_(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const r = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), o = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = o, !r && o < 40) {
      requestAnimationFrame(e);
      return;
    }
    ap(t), il(t, "Open Preview", () => Oo(t, "stickers", { readOnly: !0, hideSidebar: !1 })), jb(t, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (c) => Oo(c, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), t.__panoStandaloneInstallDone = !0, t.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(e);
}
yn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  async beforeQueuePrompt() {
    const t = [...nl.values()].map((r) => {
      try {
        return typeof r == "function" ? r() : null;
      } catch {
        return null;
      }
    }).filter(Boolean);
    t.length > 0 && await Promise.allSettled(t);
    const e = [...xo.values()];
    e.length > 0 && await Promise.allSettled(e);
    const n = [...So.values()];
    n.length > 0 && await Promise.allSettled(n);
  },
  beforeRegisterNodeDef(t, e) {
    const n = String((e == null ? void 0 : e.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && gd(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && gd(t, e, "PanoramaCutout", "Open Cutout Editor"), qc(n) && f_(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    ap(t), qc(e) && d_(t);
  }
});
