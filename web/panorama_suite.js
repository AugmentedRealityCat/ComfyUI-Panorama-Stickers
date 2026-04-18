import * as mo from "../../scripts/app.js";
import { app as gn } from "../../scripts/app.js";
import { api as Ze } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Oc(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const ie = {}, gi = [], Kn = () => {
}, qf = () => !1, Zo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Jo = (t) => t.startsWith("onUpdate:"), Ue = Object.assign, Fc = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Wg = Object.prototype.hasOwnProperty, Yt = (t, e) => Wg.call(t, e), Tt = Array.isArray, mi = (t) => wa(t) === "[object Map]", Yf = (t) => wa(t) === "[object Set]", Mu = (t) => wa(t) === "[object Date]", Ft = (t) => typeof t == "function", xe = (t) => typeof t == "string", Wn = (t) => typeof t == "symbol", Qt = (t) => t !== null && typeof t == "object", Xf = (t) => (Qt(t) || Ft(t)) && Ft(t.then) && Ft(t.catch), Zf = Object.prototype.toString, wa = (t) => Zf.call(t), qg = (t) => wa(t).slice(8, -1), Jf = (t) => wa(t) === "[object Object]", $c = (t) => xe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, ea = /* @__PURE__ */ Oc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Qo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, Yg = /-\w/g, Qe = Qo(
  (t) => t.replace(Yg, (e) => e.slice(1).toUpperCase())
), Xg = /\B([A-Z])/g, Gr = Qo(
  (t) => t.replace(Xg, "-$1").toLowerCase()
), ts = Qo((t) => t.charAt(0).toUpperCase() + t.slice(1)), Gs = Qo(
  (t) => t ? `on${ts(t)}` : ""
), Un = (t, e) => !Object.is(t, e), Ks = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, Qf = (t, e, n, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Zg = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let ku;
const es = () => ku || (ku = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ns(t) {
  if (Tt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], a = xe(r) ? e0(r) : ns(r);
      if (a)
        for (const s in a)
          e[s] = a[s];
    }
    return e;
  } else if (xe(t) || Qt(t))
    return t;
}
const Jg = /;(?![^(]*\))/g, Qg = /:([^]+)/, t0 = /\/\*[^]*?\*\//g;
function e0(t) {
  const e = {};
  return t.replace(t0, "").split(Jg).forEach((n) => {
    if (n) {
      const r = n.split(Qg);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function rs(t) {
  let e = "";
  if (xe(t))
    e = t;
  else if (Tt(t))
    for (let n = 0; n < t.length; n++) {
      const r = rs(t[n]);
      r && (e += r + " ");
    }
  else if (Qt(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const n0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", r0 = /* @__PURE__ */ Oc(n0);
function td(t) {
  return !!t || t === "";
}
function i0(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = Vc(t[r], e[r]);
  return n;
}
function Vc(t, e) {
  if (t === e) return !0;
  let n = Mu(t), r = Mu(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Wn(t), r = Wn(e), n || r)
    return t === e;
  if (n = Tt(t), r = Tt(e), n || r)
    return n && r ? i0(t, e) : !1;
  if (n = Qt(t), r = Qt(e), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(t).length, s = Object.keys(e).length;
    if (a !== s)
      return !1;
    for (const u in t) {
      const f = t.hasOwnProperty(u), g = e.hasOwnProperty(u);
      if (f && !g || !f && g || !Vc(t[u], e[u]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const ed = (t) => !!(t && t.__v_isRef === !0), nd = (t) => xe(t) ? t : t == null ? "" : Tt(t) || Qt(t) && (t.toString === Zf || !Ft(t.toString)) ? ed(t) ? nd(t.value) : JSON.stringify(t, rd, 2) : String(t), rd = (t, e) => ed(e) ? rd(t, e.value) : mi(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, a], s) => (n[Ws(r, s) + " =>"] = a, n),
    {}
  )
} : Yf(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => Ws(n))
} : Wn(e) ? Ws(e) : Qt(e) && !Tt(e) && !Jf(e) ? String(e) : e, Ws = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Wn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let rn;
class a0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = rn, !e && rn && (this.index = (rn.scopes || (rn.scopes = [])).push(
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
      const n = rn;
      try {
        return rn = this, e();
      } finally {
        rn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = rn, rn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (rn = this.prevScope, this.prevScope = void 0);
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
function o0() {
  return rn;
}
let re;
const qs = /* @__PURE__ */ new WeakSet();
class id {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, rn && rn.active && rn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, qs.has(this) && (qs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || od(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Pu(this), sd(this);
    const e = re, n = kn;
    re = this, kn = !0;
    try {
      return this.fn();
    } finally {
      cd(this), re = e, kn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        jc(e);
      this.deps = this.depsTail = void 0, Pu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? qs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    hc(this) && this.run();
  }
  get dirty() {
    return hc(this);
  }
}
let ad = 0, na, ra;
function od(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = ra, ra = t;
    return;
  }
  t.next = na, na = t;
}
function zc() {
  ad++;
}
function Hc() {
  if (--ad > 0)
    return;
  if (ra) {
    let e = ra;
    for (ra = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; na; ) {
    let e = na;
    for (na = void 0; e; ) {
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
function sd(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function cd(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), jc(r), s0(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  t.deps = e, t.depsTail = n;
}
function hc(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (ld(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function ld(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === pa) || (t.globalVersion = pa, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !hc(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = re, r = kn;
  re = t, kn = !0;
  try {
    sd(t);
    const a = t.fn(t._value);
    (e.version === 0 || Un(a, t._value)) && (t.flags |= 128, t._value = a, e.version++);
  } catch (a) {
    throw e.version++, a;
  } finally {
    re = n, kn = r, cd(t), t.flags &= -3;
  }
}
function jc(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: a } = t;
  if (r && (r.nextSub = a, t.prevSub = void 0), a && (a.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      jc(s, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function s0(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let kn = !0;
const ud = [];
function sr() {
  ud.push(kn), kn = !1;
}
function cr() {
  const t = ud.pop();
  kn = t === void 0 ? !0 : t;
}
function Pu(t) {
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
let pa = 0;
class c0 {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Uc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!re || !kn || re === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== re)
      n = this.activeLink = new c0(re, this), re.deps ? (n.prevDep = re.depsTail, re.depsTail.nextDep = n, re.depsTail = n) : re.deps = re.depsTail = n, fd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = re.depsTail, n.nextDep = void 0, re.depsTail.nextDep = n, re.depsTail = n, re.deps === n && (re.deps = r);
    }
    return n;
  }
  trigger(e) {
    this.version++, pa++, this.notify(e);
  }
  notify(e) {
    zc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Hc();
    }
  }
}
function fd(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        fd(r);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
  }
}
const pc = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ Symbol(
  ""
), gc = /* @__PURE__ */ Symbol(
  ""
), ga = /* @__PURE__ */ Symbol(
  ""
);
function Ve(t, e, n) {
  if (kn && re) {
    let r = pc.get(t);
    r || pc.set(t, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new Uc()), a.map = r, a.key = n), a.track();
  }
}
function or(t, e, n, r, a, s) {
  const u = pc.get(t);
  if (!u) {
    pa++;
    return;
  }
  const f = (g) => {
    g && g.trigger();
  };
  if (zc(), e === "clear")
    u.forEach(f);
  else {
    const g = Tt(t), y = g && $c(n);
    if (g && n === "length") {
      const w = Number(r);
      u.forEach((p, N) => {
        (N === "length" || N === ga || !Wn(N) && N >= w) && f(p);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), y && f(u.get(ga)), e) {
        case "add":
          g ? y && f(u.get("length")) : (f(u.get($r)), mi(t) && f(u.get(gc)));
          break;
        case "delete":
          g || (f(u.get($r)), mi(t) && f(u.get(gc)));
          break;
        case "set":
          mi(t) && f(u.get($r));
          break;
      }
  }
  Hc();
}
function ii(t) {
  const e = /* @__PURE__ */ qt(t);
  return e === t ? e : (Ve(e, "iterate", ga), /* @__PURE__ */ mn(t) ? e : e.map(Pn));
}
function is(t) {
  return Ve(t = /* @__PURE__ */ qt(t), "iterate", ga), t;
}
function Hn(t, e) {
  return /* @__PURE__ */ lr(t) ? Si(/* @__PURE__ */ Vr(t) ? Pn(e) : e) : Pn(e);
}
const l0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ys(this, Symbol.iterator, (t) => Hn(this, t));
  },
  concat(...t) {
    return ii(this).concat(
      ...t.map((e) => Tt(e) ? ii(e) : e)
    );
  },
  entries() {
    return Ys(this, "entries", (t) => (t[1] = Hn(this, t[1]), t));
  },
  every(t, e) {
    return er(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return er(
      this,
      "filter",
      t,
      e,
      (n) => n.map((r) => Hn(this, r)),
      arguments
    );
  },
  find(t, e) {
    return er(
      this,
      "find",
      t,
      e,
      (n) => Hn(this, n),
      arguments
    );
  },
  findIndex(t, e) {
    return er(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return er(
      this,
      "findLast",
      t,
      e,
      (n) => Hn(this, n),
      arguments
    );
  },
  findLastIndex(t, e) {
    return er(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return er(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return Xs(this, "includes", t);
  },
  indexOf(...t) {
    return Xs(this, "indexOf", t);
  },
  join(t) {
    return ii(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return Xs(this, "lastIndexOf", t);
  },
  map(t, e) {
    return er(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return Ui(this, "pop");
  },
  push(...t) {
    return Ui(this, "push", t);
  },
  reduce(t, ...e) {
    return Au(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Au(this, "reduceRight", t, e);
  },
  shift() {
    return Ui(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return er(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return Ui(this, "splice", t);
  },
  toReversed() {
    return ii(this).toReversed();
  },
  toSorted(t) {
    return ii(this).toSorted(t);
  },
  toSpliced(...t) {
    return ii(this).toSpliced(...t);
  },
  unshift(...t) {
    return Ui(this, "unshift", t);
  },
  values() {
    return Ys(this, "values", (t) => Hn(this, t));
  }
};
function Ys(t, e, n) {
  const r = is(t), a = r[e]();
  return r !== t && !/* @__PURE__ */ mn(t) && (a._next = a.next, a.next = () => {
    const s = a._next();
    return s.done || (s.value = n(s.value)), s;
  }), a;
}
const u0 = Array.prototype;
function er(t, e, n, r, a, s) {
  const u = is(t), f = u !== t && !/* @__PURE__ */ mn(t), g = u[e];
  if (g !== u0[e]) {
    const p = g.apply(t, s);
    return f ? Pn(p) : p;
  }
  let y = n;
  u !== t && (f ? y = function(p, N) {
    return n.call(this, Hn(t, p), N, t);
  } : n.length > 2 && (y = function(p, N) {
    return n.call(this, p, N, t);
  }));
  const w = g.call(u, y, r);
  return f && a ? a(w) : w;
}
function Au(t, e, n, r) {
  const a = is(t), s = a !== t && !/* @__PURE__ */ mn(t);
  let u = n, f = !1;
  a !== t && (s ? (f = r.length === 0, u = function(y, w, p) {
    return f && (f = !1, y = Hn(t, y)), n.call(this, y, Hn(t, w), p, t);
  }) : n.length > 3 && (u = function(y, w, p) {
    return n.call(this, y, w, p, t);
  }));
  const g = a[e](u, ...r);
  return f ? Hn(t, g) : g;
}
function Xs(t, e, n) {
  const r = /* @__PURE__ */ qt(t);
  Ve(r, "iterate", ga);
  const a = r[e](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Wc(n[0]) ? (n[0] = /* @__PURE__ */ qt(n[0]), r[e](...n)) : a;
}
function Ui(t, e, n = []) {
  sr(), zc();
  const r = (/* @__PURE__ */ qt(t))[e].apply(t, n);
  return Hc(), cr(), r;
}
const f0 = /* @__PURE__ */ Oc("__proto__,__v_isRef,__isVue"), dd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Wn)
);
function d0(t) {
  Wn(t) || (t = String(t));
  const e = /* @__PURE__ */ qt(this);
  return Ve(e, "has", t), e.hasOwnProperty(t);
}
class hd {
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
      return r === (a ? s ? x0 : yd : s ? md : gd).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const u = Tt(e);
    if (!a) {
      let g;
      if (u && (g = l0[n]))
        return g;
      if (n === "hasOwnProperty")
        return d0;
    }
    const f = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ je(e) ? e : r
    );
    if ((Wn(n) ? dd.has(n) : f0(n)) || (a || Ve(e, "get", n), s))
      return f;
    if (/* @__PURE__ */ je(f)) {
      const g = u && $c(n) ? f : f.value;
      return a && Qt(g) ? /* @__PURE__ */ yc(g) : g;
    }
    return Qt(f) ? a ? /* @__PURE__ */ yc(f) : /* @__PURE__ */ Gc(f) : f;
  }
}
class pd extends hd {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, a) {
    let s = e[n];
    const u = Tt(e) && $c(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ lr(s);
      if (!/* @__PURE__ */ mn(r) && !/* @__PURE__ */ lr(r) && (s = /* @__PURE__ */ qt(s), r = /* @__PURE__ */ qt(r)), !u && /* @__PURE__ */ je(s) && !/* @__PURE__ */ je(r))
        return y || (s.value = r), !0;
    }
    const f = u ? Number(n) < e.length : Yt(e, n), g = Reflect.set(
      e,
      n,
      r,
      /* @__PURE__ */ je(e) ? e : a
    );
    return e === /* @__PURE__ */ qt(a) && (f ? Un(r, s) && or(e, "set", n, r) : or(e, "add", n, r)), g;
  }
  deleteProperty(e, n) {
    const r = Yt(e, n);
    e[n];
    const a = Reflect.deleteProperty(e, n);
    return a && r && or(e, "delete", n, void 0), a;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Wn(n) || !dd.has(n)) && Ve(e, "has", n), r;
  }
  ownKeys(e) {
    return Ve(
      e,
      "iterate",
      Tt(e) ? "length" : $r
    ), Reflect.ownKeys(e);
  }
}
class h0 extends hd {
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
const p0 = /* @__PURE__ */ new pd(), g0 = /* @__PURE__ */ new h0(), m0 = /* @__PURE__ */ new pd(!0);
const mc = (t) => t, Ya = (t) => Reflect.getPrototypeOf(t);
function y0(t, e, n) {
  return function(...r) {
    const a = this.__v_raw, s = /* @__PURE__ */ qt(a), u = mi(s), f = t === "entries" || t === Symbol.iterator && u, g = t === "keys" && u, y = a[t](...r), w = n ? mc : e ? Si : Pn;
    return !e && Ve(
      s,
      "iterate",
      g ? gc : $r
    ), Ue(
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
function Xa(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function b0(t, e) {
  const n = {
    get(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ qt(s), f = /* @__PURE__ */ qt(a);
      t || (Un(a, f) && Ve(u, "get", a), Ve(u, "get", f));
      const { has: g } = Ya(u), y = e ? mc : t ? Si : Pn;
      if (g.call(u, a))
        return y(s.get(a));
      if (g.call(u, f))
        return y(s.get(f));
      s !== u && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !t && Ve(/* @__PURE__ */ qt(a), "iterate", $r), a.size;
    },
    has(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ qt(s), f = /* @__PURE__ */ qt(a);
      return t || (Un(a, f) && Ve(u, "has", a), Ve(u, "has", f)), a === f ? s.has(a) : s.has(a) || s.has(f);
    },
    forEach(a, s) {
      const u = this, f = u.__v_raw, g = /* @__PURE__ */ qt(f), y = e ? mc : t ? Si : Pn;
      return !t && Ve(g, "iterate", $r), f.forEach((w, p) => a.call(s, y(w), y(p), u));
    }
  };
  return Ue(
    n,
    t ? {
      add: Xa("add"),
      set: Xa("set"),
      delete: Xa("delete"),
      clear: Xa("clear")
    } : {
      add(a) {
        const s = /* @__PURE__ */ qt(this), u = Ya(s), f = /* @__PURE__ */ qt(a), g = !e && !/* @__PURE__ */ mn(a) && !/* @__PURE__ */ lr(a) ? f : a;
        return u.has.call(s, g) || Un(a, g) && u.has.call(s, a) || Un(f, g) && u.has.call(s, f) || (s.add(g), or(s, "add", g, g)), this;
      },
      set(a, s) {
        !e && !/* @__PURE__ */ mn(s) && !/* @__PURE__ */ lr(s) && (s = /* @__PURE__ */ qt(s));
        const u = /* @__PURE__ */ qt(this), { has: f, get: g } = Ya(u);
        let y = f.call(u, a);
        y || (a = /* @__PURE__ */ qt(a), y = f.call(u, a));
        const w = g.call(u, a);
        return u.set(a, s), y ? Un(s, w) && or(u, "set", a, s) : or(u, "add", a, s), this;
      },
      delete(a) {
        const s = /* @__PURE__ */ qt(this), { has: u, get: f } = Ya(s);
        let g = u.call(s, a);
        g || (a = /* @__PURE__ */ qt(a), g = u.call(s, a)), f && f.call(s, a);
        const y = s.delete(a);
        return g && or(s, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ qt(this), s = a.size !== 0, u = a.clear();
        return s && or(
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
    n[a] = y0(a, t, e);
  }), n;
}
function Bc(t, e) {
  const n = b0(t, e);
  return (r, a, s) => a === "__v_isReactive" ? !t : a === "__v_isReadonly" ? t : a === "__v_raw" ? r : Reflect.get(
    Yt(n, a) && a in r ? n : r,
    a,
    s
  );
}
const v0 = {
  get: /* @__PURE__ */ Bc(!1, !1)
}, _0 = {
  get: /* @__PURE__ */ Bc(!1, !0)
}, w0 = {
  get: /* @__PURE__ */ Bc(!0, !1)
};
const gd = /* @__PURE__ */ new WeakMap(), md = /* @__PURE__ */ new WeakMap(), yd = /* @__PURE__ */ new WeakMap(), x0 = /* @__PURE__ */ new WeakMap();
function S0(t) {
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
function N0(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : S0(qg(t));
}
// @__NO_SIDE_EFFECTS__
function Gc(t) {
  return /* @__PURE__ */ lr(t) ? t : Kc(
    t,
    !1,
    p0,
    v0,
    gd
  );
}
// @__NO_SIDE_EFFECTS__
function M0(t) {
  return Kc(
    t,
    !1,
    m0,
    _0,
    md
  );
}
// @__NO_SIDE_EFFECTS__
function yc(t) {
  return Kc(
    t,
    !0,
    g0,
    w0,
    yd
  );
}
function Kc(t, e, n, r, a) {
  if (!Qt(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = N0(t);
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
function Vr(t) {
  return /* @__PURE__ */ lr(t) ? /* @__PURE__ */ Vr(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function lr(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function mn(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Wc(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function qt(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ qt(e) : t;
}
function k0(t) {
  return !Yt(t, "__v_skip") && Object.isExtensible(t) && Qf(t, "__v_skip", !0), t;
}
const Pn = (t) => Qt(t) ? /* @__PURE__ */ Gc(t) : t, Si = (t) => Qt(t) ? /* @__PURE__ */ yc(t) : t;
// @__NO_SIDE_EFFECTS__
function je(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function P0(t) {
  return A0(t, !1);
}
function A0(t, e) {
  return /* @__PURE__ */ je(t) ? t : new C0(t, e);
}
class C0 {
  constructor(e, n) {
    this.dep = new Uc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ qt(e), this._value = n ? e : Pn(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ mn(e) || /* @__PURE__ */ lr(e);
    e = r ? e : /* @__PURE__ */ qt(e), Un(e, n) && (this._rawValue = e, this._value = r ? e : Pn(e), this.dep.trigger());
  }
}
function qc(t) {
  return /* @__PURE__ */ je(t) ? t.value : t;
}
const I0 = {
  get: (t, e, n) => e === "__v_raw" ? t : qc(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const a = t[e];
    return /* @__PURE__ */ je(a) && !/* @__PURE__ */ je(n) ? (a.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function bd(t) {
  return /* @__PURE__ */ Vr(t) ? t : new Proxy(t, I0);
}
class E0 {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new Uc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = pa - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    re !== this)
      return od(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return ld(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function D0(t, e, n = !1) {
  let r, a;
  return Ft(t) ? r = t : (r = t.get, a = t.set), new E0(r, a, n);
}
const Za = {}, Io = /* @__PURE__ */ new WeakMap();
let Tr;
function T0(t, e = !1, n = Tr) {
  if (n) {
    let r = Io.get(n);
    r || Io.set(n, r = []), r.push(t);
  }
}
function R0(t, e, n = ie) {
  const { immediate: r, deep: a, once: s, scheduler: u, augmentJob: f, call: g } = n, y = (T) => a ? T : /* @__PURE__ */ mn(T) || a === !1 || a === 0 ? Sr(T, 1) : Sr(T);
  let w, p, N, P, E = !1, I = !1;
  if (/* @__PURE__ */ je(t) ? (p = () => t.value, E = /* @__PURE__ */ mn(t)) : /* @__PURE__ */ Vr(t) ? (p = () => y(t), E = !0) : Tt(t) ? (I = !0, E = t.some((T) => /* @__PURE__ */ Vr(T) || /* @__PURE__ */ mn(T)), p = () => t.map((T) => {
    if (/* @__PURE__ */ je(T))
      return T.value;
    if (/* @__PURE__ */ Vr(T))
      return y(T);
    if (Ft(T))
      return g ? g(T, 2) : T();
  })) : Ft(t) ? e ? p = g ? () => g(t, 2) : t : p = () => {
    if (N) {
      sr();
      try {
        N();
      } finally {
        cr();
      }
    }
    const T = Tr;
    Tr = w;
    try {
      return g ? g(t, 3, [P]) : t(P);
    } finally {
      Tr = T;
    }
  } : p = Kn, e && a) {
    const T = p, W = a === !0 ? 1 / 0 : a;
    p = () => Sr(T(), W);
  }
  const A = o0(), O = () => {
    w.stop(), A && A.active && Fc(A.effects, w);
  };
  if (s && e) {
    const T = e;
    e = (...W) => {
      T(...W), O();
    };
  }
  let R = I ? new Array(t.length).fill(Za) : Za;
  const C = (T) => {
    if (!(!(w.flags & 1) || !w.dirty && !T))
      if (e) {
        const W = w.run();
        if (a || E || (I ? W.some((L, dt) => Un(L, R[dt])) : Un(W, R))) {
          N && N();
          const L = Tr;
          Tr = w;
          try {
            const dt = [
              W,
              // pass undefined as the old value when it's changed for the first time
              R === Za ? void 0 : I && R[0] === Za ? [] : R,
              P
            ];
            R = W, g ? g(e, 3, dt) : (
              // @ts-expect-error
              e(...dt)
            );
          } finally {
            Tr = L;
          }
        }
      } else
        w.run();
  };
  return f && f(C), w = new id(p), w.scheduler = u ? () => u(C, !1) : C, P = (T) => T0(T, !1, w), N = w.onStop = () => {
    const T = Io.get(w);
    if (T) {
      if (g)
        g(T, 4);
      else
        for (const W of T) W();
      Io.delete(w);
    }
  }, e ? r ? C(!0) : R = w.run() : u ? u(C.bind(null, !0), !0) : w.run(), O.pause = w.pause.bind(w), O.resume = w.resume.bind(w), O.stop = O, O;
}
function Sr(t, e = 1 / 0, n) {
  if (e <= 0 || !Qt(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ je(t))
    Sr(t.value, e, n);
  else if (Tt(t))
    for (let r = 0; r < t.length; r++)
      Sr(t[r], e, n);
  else if (Yf(t) || mi(t))
    t.forEach((r) => {
      Sr(r, e, n);
    });
  else if (Jf(t)) {
    for (const r in t)
      Sr(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && Sr(t[r], e, n);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xa(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (a) {
    as(a, e, n);
  }
}
function qn(t, e, n, r) {
  if (Ft(t)) {
    const a = xa(t, e, n, r);
    return a && Xf(a) && a.catch((s) => {
      as(s, e, n);
    }), a;
  }
  if (Tt(t)) {
    const a = [];
    for (let s = 0; s < t.length; s++)
      a.push(qn(t[s], e, n, r));
    return a;
  }
}
function as(t, e, n, r = !0) {
  const a = e ? e.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: u } = e && e.appContext.config || ie;
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
    if (s) {
      sr(), xa(s, null, 10, [
        t,
        g,
        y
      ]), cr();
      return;
    }
  }
  L0(t, n, a, r, u);
}
function L0(t, e, n, r = !0, a = !1) {
  if (a)
    throw t;
  console.error(t);
}
const Xe = [];
let Vn = -1;
const yi = [];
let xr = null, ui = 0;
const vd = /* @__PURE__ */ Promise.resolve();
let Eo = null;
function _d(t) {
  const e = Eo || vd;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function O0(t) {
  let e = Vn + 1, n = Xe.length;
  for (; e < n; ) {
    const r = e + n >>> 1, a = Xe[r], s = ma(a);
    s < t || s === t && a.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function Yc(t) {
  if (!(t.flags & 1)) {
    const e = ma(t), n = Xe[Xe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= ma(n) ? Xe.push(t) : Xe.splice(O0(e), 0, t), t.flags |= 1, wd();
  }
}
function wd() {
  Eo || (Eo = vd.then(Sd));
}
function F0(t) {
  Tt(t) ? yi.push(...t) : xr && t.id === -1 ? xr.splice(ui + 1, 0, t) : t.flags & 1 || (yi.push(t), t.flags |= 1), wd();
}
function Cu(t, e, n = Vn + 1) {
  for (; n < Xe.length; n++) {
    const r = Xe[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid)
        continue;
      Xe.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function xd(t) {
  if (yi.length) {
    const e = [...new Set(yi)].sort(
      (n, r) => ma(n) - ma(r)
    );
    if (yi.length = 0, xr) {
      xr.push(...e);
      return;
    }
    for (xr = e, ui = 0; ui < xr.length; ui++) {
      const n = xr[ui];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    xr = null, ui = 0;
  }
}
const ma = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Sd(t) {
  try {
    for (Vn = 0; Vn < Xe.length; Vn++) {
      const e = Xe[Vn];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), xa(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Vn < Xe.length; Vn++) {
      const e = Xe[Vn];
      e && (e.flags &= -2);
    }
    Vn = -1, Xe.length = 0, xd(), Eo = null, (Xe.length || yi.length) && Sd();
  }
}
let Mn = null, Nd = null;
function Do(t) {
  const e = Mn;
  return Mn = t, Nd = t && t.type.__scopeId || null, e;
}
function $0(t, e = Mn, n) {
  if (!e || t._n)
    return t;
  const r = (...a) => {
    r._d && Hu(-1);
    const s = Do(e);
    let u;
    try {
      u = t(...a);
    } finally {
      Do(s), r._d && Hu(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Cr(t, e, n, r) {
  const a = t.dirs, s = e && e.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    s && (f.oldValue = s[u].value);
    let g = f.dir[r];
    g && (sr(), qn(g, n, 8, [
      t.el,
      f,
      t,
      e
    ]), cr());
  }
}
function V0(t, e) {
  if (He) {
    let n = He.provides;
    const r = He.parent && He.parent.provides;
    r === n && (n = He.provides = Object.create(r)), n[t] = e;
  }
}
function yo(t, e, n = !1) {
  const r = $m();
  if (r || vi) {
    let a = vi ? vi._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && t in a)
      return a[t];
    if (arguments.length > 1)
      return n && Ft(e) ? e.call(r && r.proxy) : e;
  }
}
const z0 = /* @__PURE__ */ Symbol.for("v-scx"), H0 = () => yo(z0);
function bo(t, e, n) {
  return Md(t, e, n);
}
function Md(t, e, n = ie) {
  const { immediate: r, deep: a, flush: s, once: u } = n, f = Ue({}, n), g = e && r || !e && s !== "post";
  let y;
  if (ba) {
    if (s === "sync") {
      const P = H0();
      y = P.__watcherHandles || (P.__watcherHandles = []);
    } else if (!g) {
      const P = () => {
      };
      return P.stop = Kn, P.resume = Kn, P.pause = Kn, P;
    }
  }
  const w = He;
  f.call = (P, E, I) => qn(P, w, E, I);
  let p = !1;
  s === "post" ? f.scheduler = (P) => {
    nn(P, w && w.suspense);
  } : s !== "sync" && (p = !0, f.scheduler = (P, E) => {
    E ? P() : Yc(P);
  }), f.augmentJob = (P) => {
    e && (P.flags |= 4), p && (P.flags |= 2, w && (P.id = w.uid, P.i = w));
  };
  const N = R0(t, e, f);
  return ba && (y ? y.push(N) : g && N()), N;
}
function j0(t, e, n) {
  const r = this.proxy, a = xe(t) ? t.includes(".") ? kd(r, t) : () => r[t] : t.bind(r, r);
  let s;
  Ft(e) ? s = e : (s = e.handler, n = e);
  const u = Sa(this), f = Md(a, s.bind(r), n);
  return u(), f;
}
function kd(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const U0 = /* @__PURE__ */ Symbol("_vte"), B0 = (t) => t.__isTeleport, G0 = /* @__PURE__ */ Symbol("_leaveCb");
function Xc(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, Xc(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Pd(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Iu(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const To = /* @__PURE__ */ new WeakMap();
function ia(t, e, n, r, a = !1) {
  if (Tt(t)) {
    t.forEach(
      (I, A) => ia(
        I,
        e && (Tt(e) ? e[A] : e),
        n,
        r,
        a
      )
    );
    return;
  }
  if (aa(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ia(t, e, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? tl(r.component) : r.el, u = a ? null : s, { i: f, r: g } = t, y = e && e.r, w = f.refs === ie ? f.refs = {} : f.refs, p = f.setupState, N = /* @__PURE__ */ qt(p), P = p === ie ? qf : (I) => Iu(w, I) ? !1 : Yt(N, I), E = (I, A) => !(A && Iu(w, A));
  if (y != null && y !== g) {
    if (Eu(e), xe(y))
      w[y] = null, P(y) && (p[y] = null);
    else if (/* @__PURE__ */ je(y)) {
      const I = e;
      E(y, I.k) && (y.value = null), I.k && (w[I.k] = null);
    }
  }
  if (Ft(g))
    xa(g, f, 12, [u, w]);
  else {
    const I = xe(g), A = /* @__PURE__ */ je(g);
    if (I || A) {
      const O = () => {
        if (t.f) {
          const R = I ? P(g) ? p[g] : w[g] : E() || !t.k ? g.value : w[t.k];
          if (a)
            Tt(R) && Fc(R, s);
          else if (Tt(R))
            R.includes(s) || R.push(s);
          else if (I)
            w[g] = [s], P(g) && (p[g] = w[g]);
          else {
            const C = [s];
            E(g, t.k) && (g.value = C), t.k && (w[t.k] = C);
          }
        } else I ? (w[g] = u, P(g) && (p[g] = u)) : A && (E(g, t.k) && (g.value = u), t.k && (w[t.k] = u));
      };
      if (u) {
        const R = () => {
          O(), To.delete(t);
        };
        R.id = -1, To.set(t, R), nn(R, n);
      } else
        Eu(t), O();
    }
  }
}
function Eu(t) {
  const e = To.get(t);
  e && (e.flags |= 8, To.delete(t));
}
es().requestIdleCallback;
es().cancelIdleCallback;
const aa = (t) => !!t.type.__asyncLoader, Ad = (t) => t.type.__isKeepAlive;
function K0(t, e) {
  Cd(t, "a", e);
}
function W0(t, e) {
  Cd(t, "da", e);
}
function Cd(t, e, n = He) {
  const r = t.__wdc || (t.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return t();
  });
  if (os(e, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Ad(a.parent.vnode) && q0(r, e, n, a), a = a.parent;
  }
}
function q0(t, e, n, r) {
  const a = os(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Dd(() => {
    Fc(r[e], a);
  }, n);
}
function os(t, e, n = He, r = !1) {
  if (n) {
    const a = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...u) => {
      sr();
      const f = Sa(n), g = qn(e, n, t, u);
      return f(), cr(), g;
    });
    return r ? a.unshift(s) : a.push(s), s;
  }
}
const ur = (t) => (e, n = He) => {
  (!ba || t === "sp") && os(t, (...r) => e(...r), n);
}, Y0 = ur("bm"), Id = ur("m"), X0 = ur(
  "bu"
), Z0 = ur("u"), Ed = ur(
  "bum"
), Dd = ur("um"), J0 = ur(
  "sp"
), Q0 = ur("rtg"), tm = ur("rtc");
function em(t, e = He) {
  os("ec", t, e);
}
const nm = "components", Td = /* @__PURE__ */ Symbol.for("v-ndc");
function rm(t) {
  return xe(t) ? im(nm, t, !1) || t : t || Td;
}
function im(t, e, n = !0, r = !1) {
  const a = Mn || He;
  if (a) {
    const s = a.type;
    {
      const f = Um(
        s,
        !1
      );
      if (f && (f === e || f === Qe(e) || f === ts(Qe(e))))
        return s;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Du(a[t] || s[t], e) || // global registration
      Du(a.appContext[t], e)
    );
    return !u && r ? s : u;
  }
}
function Du(t, e) {
  return t && (t[e] || t[Qe(e)] || t[ts(Qe(e))]);
}
function bi(t, e, n, r) {
  let a;
  const s = n, u = Tt(t);
  if (u || xe(t)) {
    const f = u && /* @__PURE__ */ Vr(t);
    let g = !1, y = !1;
    f && (g = !/* @__PURE__ */ mn(t), y = /* @__PURE__ */ lr(t), t = is(t)), a = new Array(t.length);
    for (let w = 0, p = t.length; w < p; w++)
      a[w] = e(
        g ? y ? Si(Pn(t[w])) : Pn(t[w]) : t[w],
        w,
        void 0,
        s
      );
  } else if (typeof t == "number") {
    a = new Array(t);
    for (let f = 0; f < t; f++)
      a[f] = e(f + 1, f, void 0, s);
  } else if (Qt(t))
    if (t[Symbol.iterator])
      a = Array.from(
        t,
        (f, g) => e(f, g, void 0, s)
      );
    else {
      const f = Object.keys(t);
      a = new Array(f.length);
      for (let g = 0, y = f.length; g < y; g++) {
        const w = f[g];
        a[g] = e(t[w], w, g, s);
      }
    }
  else
    a = [];
  return a;
}
const bc = (t) => t ? nh(t) ? tl(t) : bc(t.parent) : null, oa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ue(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => bc(t.parent),
    $root: (t) => bc(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Ld(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      Yc(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = _d.bind(t.proxy)),
    $watch: (t) => j0.bind(t)
  })
), Zs = (t, e) => t !== ie && !t.__isScriptSetup && Yt(t, e), am = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: a, props: s, accessCache: u, type: f, appContext: g } = t;
    if (e[0] !== "$") {
      const N = u[e];
      if (N !== void 0)
        switch (N) {
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
        if (Zs(r, e))
          return u[e] = 1, r[e];
        if (a !== ie && Yt(a, e))
          return u[e] = 2, a[e];
        if (Yt(s, e))
          return u[e] = 3, s[e];
        if (n !== ie && Yt(n, e))
          return u[e] = 4, n[e];
        vc && (u[e] = 0);
      }
    }
    const y = oa[e];
    let w, p;
    if (y)
      return e === "$attrs" && Ve(t.attrs, "get", ""), y(t);
    if (
      // css module (injected by vue-loader)
      (w = f.__cssModules) && (w = w[e])
    )
      return w;
    if (n !== ie && Yt(n, e))
      return u[e] = 4, n[e];
    if (
      // global properties
      p = g.config.globalProperties, Yt(p, e)
    )
      return p[e];
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: a, ctx: s } = t;
    return Zs(a, e) ? (a[e] = n, !0) : r !== ie && Yt(r, e) ? (r[e] = n, !0) : Yt(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: a, props: s, type: u }
  }, f) {
    let g;
    return !!(n[f] || t !== ie && f[0] !== "$" && Yt(t, f) || Zs(e, f) || Yt(s, f) || Yt(r, f) || Yt(oa, f) || Yt(a.config.globalProperties, f) || (g = u.__cssModules) && g[f]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : Yt(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Tu(t) {
  return Tt(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let vc = !0;
function om(t) {
  const e = Ld(t), n = t.proxy, r = t.ctx;
  vc = !1, e.beforeCreate && Ru(e.beforeCreate, t, "bc");
  const {
    // state
    data: a,
    computed: s,
    methods: u,
    watch: f,
    provide: g,
    inject: y,
    // lifecycle
    created: w,
    beforeMount: p,
    mounted: N,
    beforeUpdate: P,
    updated: E,
    activated: I,
    deactivated: A,
    beforeDestroy: O,
    beforeUnmount: R,
    destroyed: C,
    unmounted: T,
    render: W,
    renderTracked: L,
    renderTriggered: dt,
    errorCaptured: Q,
    serverPrefetch: Pt,
    // public API
    expose: z,
    inheritAttrs: ct,
    // assets
    components: it,
    directives: _t,
    filters: bt
  } = e;
  if (y && sm(y, r, null), u)
    for (const lt in u) {
      const q = u[lt];
      Ft(q) && (r[lt] = q.bind(n));
    }
  if (a) {
    const lt = a.call(n, n);
    Qt(lt) && (t.data = /* @__PURE__ */ Gc(lt));
  }
  if (vc = !0, s)
    for (const lt in s) {
      const q = s[lt], ut = Ft(q) ? q.bind(n, n) : Ft(q.get) ? q.get.bind(n, n) : Kn, St = !Ft(q) && Ft(q.set) ? q.set.bind(n) : Kn, Ct = _i({
        get: ut,
        set: St
      });
      Object.defineProperty(r, lt, {
        enumerable: !0,
        configurable: !0,
        get: () => Ct.value,
        set: (Nt) => Ct.value = Nt
      });
    }
  if (f)
    for (const lt in f)
      Rd(f[lt], r, n, lt);
  if (g) {
    const lt = Ft(g) ? g.call(n) : g;
    Reflect.ownKeys(lt).forEach((q) => {
      V0(q, lt[q]);
    });
  }
  w && Ru(w, t, "c");
  function ot(lt, q) {
    Tt(q) ? q.forEach((ut) => lt(ut.bind(n))) : q && lt(q.bind(n));
  }
  if (ot(Y0, p), ot(Id, N), ot(X0, P), ot(Z0, E), ot(K0, I), ot(W0, A), ot(em, Q), ot(tm, L), ot(Q0, dt), ot(Ed, R), ot(Dd, T), ot(J0, Pt), Tt(z))
    if (z.length) {
      const lt = t.exposed || (t.exposed = {});
      z.forEach((q) => {
        Object.defineProperty(lt, q, {
          get: () => n[q],
          set: (ut) => n[q] = ut,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  W && t.render === Kn && (t.render = W), ct != null && (t.inheritAttrs = ct), it && (t.components = it), _t && (t.directives = _t), Pt && Pd(t);
}
function sm(t, e, n = Kn) {
  Tt(t) && (t = _c(t));
  for (const r in t) {
    const a = t[r];
    let s;
    Qt(a) ? "default" in a ? s = yo(
      a.from || r,
      a.default,
      !0
    ) : s = yo(a.from || r) : s = yo(a), /* @__PURE__ */ je(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (u) => s.value = u
    }) : e[r] = s;
  }
}
function Ru(t, e, n) {
  qn(
    Tt(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Rd(t, e, n, r) {
  let a = r.includes(".") ? kd(n, r) : () => n[r];
  if (xe(t)) {
    const s = e[t];
    Ft(s) && bo(a, s);
  } else if (Ft(t))
    bo(a, t.bind(n));
  else if (Qt(t))
    if (Tt(t))
      t.forEach((s) => Rd(s, e, n, r));
    else {
      const s = Ft(t.handler) ? t.handler.bind(n) : e[t.handler];
      Ft(s) && bo(a, s, t);
    }
}
function Ld(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: a,
    optionsCache: s,
    config: { optionMergeStrategies: u }
  } = t.appContext, f = s.get(e);
  let g;
  return f ? g = f : !a.length && !n && !r ? g = e : (g = {}, a.length && a.forEach(
    (y) => Ro(g, y, u, !0)
  ), Ro(g, e, u)), Qt(e) && s.set(e, g), g;
}
function Ro(t, e, n, r = !1) {
  const { mixins: a, extends: s } = e;
  s && Ro(t, s, n, !0), a && a.forEach(
    (u) => Ro(t, u, n, !0)
  );
  for (const u in e)
    if (!(r && u === "expose")) {
      const f = cm[u] || n && n[u];
      t[u] = f ? f(t[u], e[u]) : e[u];
    }
  return t;
}
const cm = {
  data: Lu,
  props: Ou,
  emits: Ou,
  // objects
  methods: Xi,
  computed: Xi,
  // lifecycle
  beforeCreate: We,
  created: We,
  beforeMount: We,
  mounted: We,
  beforeUpdate: We,
  updated: We,
  beforeDestroy: We,
  beforeUnmount: We,
  destroyed: We,
  unmounted: We,
  activated: We,
  deactivated: We,
  errorCaptured: We,
  serverPrefetch: We,
  // assets
  components: Xi,
  directives: Xi,
  // watch
  watch: um,
  // provide / inject
  provide: Lu,
  inject: lm
};
function Lu(t, e) {
  return e ? t ? function() {
    return Ue(
      Ft(t) ? t.call(this, this) : t,
      Ft(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function lm(t, e) {
  return Xi(_c(t), _c(e));
}
function _c(t) {
  if (Tt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function We(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Xi(t, e) {
  return t ? Ue(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Ou(t, e) {
  return t ? Tt(t) && Tt(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Ue(
    /* @__PURE__ */ Object.create(null),
    Tu(t),
    Tu(e ?? {})
  ) : e;
}
function um(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Ue(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = We(t[r], e[r]);
  return n;
}
function Od() {
  return {
    app: null,
    config: {
      isNativeTag: qf,
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
let fm = 0;
function dm(t, e) {
  return function(r, a = null) {
    Ft(r) || (r = Ue({}, r)), a != null && !Qt(a) && (a = null);
    const s = Od(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let g = !1;
    const y = s.app = {
      _uid: fm++,
      _component: r,
      _props: a,
      _container: null,
      _context: s,
      _instance: null,
      version: Gm,
      get config() {
        return s.config;
      },
      set config(w) {
      },
      use(w, ...p) {
        return u.has(w) || (w && Ft(w.install) ? (u.add(w), w.install(y, ...p)) : Ft(w) && (u.add(w), w(y, ...p))), y;
      },
      mixin(w) {
        return s.mixins.includes(w) || s.mixins.push(w), y;
      },
      component(w, p) {
        return p ? (s.components[w] = p, y) : s.components[w];
      },
      directive(w, p) {
        return p ? (s.directives[w] = p, y) : s.directives[w];
      },
      mount(w, p, N) {
        if (!g) {
          const P = y._ceVNode || Je(r, a);
          return P.appContext = s, N === !0 ? N = "svg" : N === !1 && (N = void 0), t(P, w, N), g = !0, y._container = w, w.__vue_app__ = y, tl(P.component);
        }
      },
      onUnmount(w) {
        f.push(w);
      },
      unmount() {
        g && (qn(
          f,
          y._instance,
          16
        ), t(null, y._container), delete y._container.__vue_app__);
      },
      provide(w, p) {
        return s.provides[w] = p, y;
      },
      runWithContext(w) {
        const p = vi;
        vi = y;
        try {
          return w();
        } finally {
          vi = p;
        }
      }
    };
    return y;
  };
}
let vi = null;
const hm = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Qe(e)}Modifiers`] || t[`${Gr(e)}Modifiers`];
function pm(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || ie;
  let a = n;
  const s = e.startsWith("update:"), u = s && hm(r, e.slice(7));
  u && (u.trim && (a = n.map((w) => xe(w) ? w.trim() : w)), u.number && (a = n.map(Zg)));
  let f, g = r[f = Gs(e)] || // also try camelCase event handler (#2249)
  r[f = Gs(Qe(e))];
  !g && s && (g = r[f = Gs(Gr(e))]), g && qn(
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
    t.emitted[f] = !0, qn(
      y,
      t,
      6,
      a
    );
  }
}
const gm = /* @__PURE__ */ new WeakMap();
function Fd(t, e, n = !1) {
  const r = n ? gm : e.emitsCache, a = r.get(t);
  if (a !== void 0)
    return a;
  const s = t.emits;
  let u = {}, f = !1;
  if (!Ft(t)) {
    const g = (y) => {
      const w = Fd(y, e, !0);
      w && (f = !0, Ue(u, w));
    };
    !n && e.mixins.length && e.mixins.forEach(g), t.extends && g(t.extends), t.mixins && t.mixins.forEach(g);
  }
  return !s && !f ? (Qt(t) && r.set(t, null), null) : (Tt(s) ? s.forEach((g) => u[g] = null) : Ue(u, s), Qt(t) && r.set(t, u), u);
}
function ss(t, e) {
  return !t || !Zo(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Yt(t, e[0].toLowerCase() + e.slice(1)) || Yt(t, Gr(e)) || Yt(t, e));
}
function Fu(t) {
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
    renderCache: w,
    props: p,
    data: N,
    setupState: P,
    ctx: E,
    inheritAttrs: I
  } = t, A = Do(t);
  let O, R;
  try {
    if (n.shapeFlag & 4) {
      const T = a || r, W = T;
      O = jn(
        y.call(
          W,
          T,
          w,
          p,
          P,
          N,
          E
        )
      ), R = f;
    } else {
      const T = e;
      O = jn(
        T.length > 1 ? T(
          p,
          { attrs: f, slots: u, emit: g }
        ) : T(
          p,
          null
        )
      ), R = e.props ? f : mm(f);
    }
  } catch (T) {
    sa.length = 0, as(T, t, 1), O = Je(Nr);
  }
  let C = O;
  if (R && I !== !1) {
    const T = Object.keys(R), { shapeFlag: W } = C;
    T.length && W & 7 && (s && T.some(Jo) && (R = ym(
      R,
      s
    )), C = Ni(C, R, !1, !0));
  }
  return n.dirs && (C = Ni(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && Xc(C, n.transition), O = C, Do(A), O;
}
const mm = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || Zo(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, ym = (t, e) => {
  const n = {};
  for (const r in t)
    (!Jo(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function bm(t, e, n) {
  const { props: r, children: a, component: s } = t, { props: u, children: f, patchFlag: g } = e, y = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return r ? $u(r, u, y) : !!u;
    if (g & 8) {
      const w = e.dynamicProps;
      for (let p = 0; p < w.length; p++) {
        const N = w[p];
        if ($d(u, r, N) && !ss(y, N))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? $u(r, u, y) : !0 : !!u;
  return !1;
}
function $u(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if ($d(e, t, s) && !ss(n, s))
      return !0;
  }
  return !1;
}
function $d(t, e, n) {
  const r = t[n], a = e[n];
  return n === "style" && Qt(r) && Qt(a) ? !Vc(r, a) : r !== a;
}
function vm({ vnode: t, parent: e, suspense: n }, r) {
  for (; e; ) {
    const a = e.subTree;
    if (a.suspense && a.suspense.activeBranch === t && (a.suspense.vnode.el = a.el = r, t = a), a === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = r);
}
const Vd = {}, zd = () => Object.create(Vd), Hd = (t) => Object.getPrototypeOf(t) === Vd;
function _m(t, e, n, r = !1) {
  const a = {}, s = zd();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), jd(t, e, a, s);
  for (const u in t.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? t.props = r ? a : /* @__PURE__ */ M0(a) : t.type.props ? t.props = a : t.props = s, t.attrs = s;
}
function wm(t, e, n, r) {
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
      const w = t.vnode.dynamicProps;
      for (let p = 0; p < w.length; p++) {
        let N = w[p];
        if (ss(t.emitsOptions, N))
          continue;
        const P = e[N];
        if (g)
          if (Yt(s, N))
            P !== s[N] && (s[N] = P, y = !0);
          else {
            const E = Qe(N);
            a[E] = wc(
              g,
              f,
              E,
              P,
              t,
              !1
            );
          }
        else
          P !== s[N] && (s[N] = P, y = !0);
      }
    }
  } else {
    jd(t, e, a, s) && (y = !0);
    let w;
    for (const p in f)
      (!e || // for camelCase
      !Yt(e, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((w = Gr(p)) === p || !Yt(e, w))) && (g ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[w] !== void 0) && (a[p] = wc(
        g,
        f,
        p,
        void 0,
        t,
        !0
      )) : delete a[p]);
    if (s !== f)
      for (const p in s)
        (!e || !Yt(e, p)) && (delete s[p], y = !0);
  }
  y && or(t.attrs, "set", "");
}
function jd(t, e, n, r) {
  const [a, s] = t.propsOptions;
  let u = !1, f;
  if (e)
    for (let g in e) {
      if (ea(g))
        continue;
      const y = e[g];
      let w;
      a && Yt(a, w = Qe(g)) ? !s || !s.includes(w) ? n[w] = y : (f || (f = {}))[w] = y : ss(t.emitsOptions, g) || (!(g in r) || y !== r[g]) && (r[g] = y, u = !0);
    }
  if (s) {
    const g = /* @__PURE__ */ qt(n), y = f || ie;
    for (let w = 0; w < s.length; w++) {
      const p = s[w];
      n[p] = wc(
        a,
        g,
        p,
        y[p],
        t,
        !Yt(y, p)
      );
    }
  }
  return u;
}
function wc(t, e, n, r, a, s) {
  const u = t[n];
  if (u != null) {
    const f = Yt(u, "default");
    if (f && r === void 0) {
      const g = u.default;
      if (u.type !== Function && !u.skipFactory && Ft(g)) {
        const { propsDefaults: y } = a;
        if (n in y)
          r = y[n];
        else {
          const w = Sa(a);
          r = y[n] = g.call(
            null,
            e
          ), w();
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
    ] && (r === "" || r === Gr(n)) && (r = !0));
  }
  return r;
}
const xm = /* @__PURE__ */ new WeakMap();
function Ud(t, e, n = !1) {
  const r = n ? xm : e.propsCache, a = r.get(t);
  if (a)
    return a;
  const s = t.props, u = {}, f = [];
  let g = !1;
  if (!Ft(t)) {
    const w = (p) => {
      g = !0;
      const [N, P] = Ud(p, e, !0);
      Ue(u, N), P && f.push(...P);
    };
    !n && e.mixins.length && e.mixins.forEach(w), t.extends && w(t.extends), t.mixins && t.mixins.forEach(w);
  }
  if (!s && !g)
    return Qt(t) && r.set(t, gi), gi;
  if (Tt(s))
    for (let w = 0; w < s.length; w++) {
      const p = Qe(s[w]);
      Vu(p) && (u[p] = ie);
    }
  else if (s)
    for (const w in s) {
      const p = Qe(w);
      if (Vu(p)) {
        const N = s[w], P = u[p] = Tt(N) || Ft(N) ? { type: N } : Ue({}, N), E = P.type;
        let I = !1, A = !0;
        if (Tt(E))
          for (let O = 0; O < E.length; ++O) {
            const R = E[O], C = Ft(R) && R.name;
            if (C === "Boolean") {
              I = !0;
              break;
            } else C === "String" && (A = !1);
          }
        else
          I = Ft(E) && E.name === "Boolean";
        P[
          0
          /* shouldCast */
        ] = I, P[
          1
          /* shouldCastTrue */
        ] = A, (I || Yt(P, "default")) && f.push(p);
      }
    }
  const y = [u, f];
  return Qt(t) && r.set(t, y), y;
}
function Vu(t) {
  return t[0] !== "$" && !ea(t);
}
const Zc = (t) => t === "_" || t === "_ctx" || t === "$stable", Jc = (t) => Tt(t) ? t.map(jn) : [jn(t)], Sm = (t, e, n) => {
  if (e._n)
    return e;
  const r = $0((...a) => Jc(e(...a)), n);
  return r._c = !1, r;
}, Bd = (t, e, n) => {
  const r = t._ctx;
  for (const a in t) {
    if (Zc(a)) continue;
    const s = t[a];
    if (Ft(s))
      e[a] = Sm(a, s, r);
    else if (s != null) {
      const u = Jc(s);
      e[a] = () => u;
    }
  }
}, Gd = (t, e) => {
  const n = Jc(e);
  t.slots.default = () => n;
}, Kd = (t, e, n) => {
  for (const r in e)
    (n || !Zc(r)) && (t[r] = e[r]);
}, Nm = (t, e, n) => {
  const r = t.slots = zd();
  if (t.vnode.shapeFlag & 32) {
    const a = e._;
    a ? (Kd(r, e, n), n && Qf(r, "_", a, !0)) : Bd(e, r);
  } else e && Gd(t, e);
}, Mm = (t, e, n) => {
  const { vnode: r, slots: a } = t;
  let s = !0, u = ie;
  if (r.shapeFlag & 32) {
    const f = e._;
    f ? n && f === 1 ? s = !1 : Kd(a, e, n) : (s = !e.$stable, Bd(e, a)), u = e;
  } else e && (Gd(t, e), u = { default: 1 });
  if (s)
    for (const f in a)
      !Zc(f) && u[f] == null && delete a[f];
}, nn = Im;
function km(t) {
  return Pm(t);
}
function Pm(t, e) {
  const n = es();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: s,
    createElement: u,
    createText: f,
    createComment: g,
    setText: y,
    setElementText: w,
    parentNode: p,
    nextSibling: N,
    setScopeId: P = Kn,
    insertStaticContent: E
  } = t, I = (S, D, $, G = null, K = null, B = null, nt = void 0, st = null, at = !!D.dynamicChildren) => {
    if (S === D)
      return;
    S && !Bi(S, D) && (G = Ge(S), Nt(S, K, B, !0), S = null), D.patchFlag === -2 && (at = !1, D.dynamicChildren = null);
    const { type: tt, ref: xt, shapeFlag: ft } = D;
    switch (tt) {
      case cs:
        A(S, D, $, G);
        break;
      case Nr:
        O(S, D, $, G);
        break;
      case vo:
        S == null && R(D, $, G, nt);
        break;
      case ze:
        it(
          S,
          D,
          $,
          G,
          K,
          B,
          nt,
          st,
          at
        );
        break;
      default:
        ft & 1 ? W(
          S,
          D,
          $,
          G,
          K,
          B,
          nt,
          st,
          at
        ) : ft & 6 ? _t(
          S,
          D,
          $,
          G,
          K,
          B,
          nt,
          st,
          at
        ) : (ft & 64 || ft & 128) && tt.process(
          S,
          D,
          $,
          G,
          K,
          B,
          nt,
          st,
          at,
          on
        );
    }
    xt != null && K ? ia(xt, S && S.ref, B, D || S, !D) : xt == null && S && S.ref != null && ia(S.ref, null, B, S, !0);
  }, A = (S, D, $, G) => {
    if (S == null)
      r(
        D.el = f(D.children),
        $,
        G
      );
    else {
      const K = D.el = S.el;
      D.children !== S.children && y(K, D.children);
    }
  }, O = (S, D, $, G) => {
    S == null ? r(
      D.el = g(D.children || ""),
      $,
      G
    ) : D.el = S.el;
  }, R = (S, D, $, G) => {
    [S.el, S.anchor] = E(
      S.children,
      D,
      $,
      G,
      S.el,
      S.anchor
    );
  }, C = ({ el: S, anchor: D }, $, G) => {
    let K;
    for (; S && S !== D; )
      K = N(S), r(S, $, G), S = K;
    r(D, $, G);
  }, T = ({ el: S, anchor: D }) => {
    let $;
    for (; S && S !== D; )
      $ = N(S), a(S), S = $;
    a(D);
  }, W = (S, D, $, G, K, B, nt, st, at) => {
    if (D.type === "svg" ? nt = "svg" : D.type === "math" && (nt = "mathml"), S == null)
      L(
        D,
        $,
        G,
        K,
        B,
        nt,
        st,
        at
      );
    else {
      const tt = S.el && S.el._isVueCE ? S.el : null;
      try {
        tt && tt._beginPatch(), Pt(
          S,
          D,
          K,
          B,
          nt,
          st,
          at
        );
      } finally {
        tt && tt._endPatch();
      }
    }
  }, L = (S, D, $, G, K, B, nt, st) => {
    let at, tt;
    const { props: xt, shapeFlag: ft, transition: wt, dirs: h } = S;
    if (at = S.el = u(
      S.type,
      B,
      xt && xt.is,
      xt
    ), ft & 8 ? w(at, S.children) : ft & 16 && Q(
      S.children,
      at,
      null,
      G,
      K,
      Js(S, B),
      nt,
      st
    ), h && Cr(S, null, G, "created"), dt(at, S, S.scopeId, nt, G), xt) {
      for (const zt in xt)
        zt !== "value" && !ea(zt) && s(at, zt, null, xt[zt], B, G);
      "value" in xt && s(at, "value", null, xt.value, B), (tt = xt.onVnodeBeforeMount) && On(tt, G, S);
    }
    h && Cr(S, null, G, "beforeMount");
    const ht = Am(K, wt);
    ht && wt.beforeEnter(at), r(at, D, $), ((tt = xt && xt.onVnodeMounted) || ht || h) && nn(() => {
      try {
        tt && On(tt, G, S), ht && wt.enter(at), h && Cr(S, null, G, "mounted");
      } finally {
      }
    }, K);
  }, dt = (S, D, $, G, K) => {
    if ($ && P(S, $), G)
      for (let B = 0; B < G.length; B++)
        P(S, G[B]);
    if (K) {
      let B = K.subTree;
      if (D === B || Xd(B.type) && (B.ssContent === D || B.ssFallback === D)) {
        const nt = K.vnode;
        dt(
          S,
          nt,
          nt.scopeId,
          nt.slotScopeIds,
          K.parent
        );
      }
    }
  }, Q = (S, D, $, G, K, B, nt, st, at = 0) => {
    for (let tt = at; tt < S.length; tt++) {
      const xt = S[tt] = st ? ar(S[tt]) : jn(S[tt]);
      I(
        null,
        xt,
        D,
        $,
        G,
        K,
        B,
        nt,
        st
      );
    }
  }, Pt = (S, D, $, G, K, B, nt) => {
    const st = D.el = S.el;
    let { patchFlag: at, dynamicChildren: tt, dirs: xt } = D;
    at |= S.patchFlag & 16;
    const ft = S.props || ie, wt = D.props || ie;
    let h;
    if ($ && Ir($, !1), (h = wt.onVnodeBeforeUpdate) && On(h, $, D, S), xt && Cr(D, S, $, "beforeUpdate"), $ && Ir($, !0), (ft.innerHTML && wt.innerHTML == null || ft.textContent && wt.textContent == null) && w(st, ""), tt ? z(
      S.dynamicChildren,
      tt,
      st,
      $,
      G,
      Js(D, K),
      B
    ) : nt || q(
      S,
      D,
      st,
      null,
      $,
      G,
      Js(D, K),
      B,
      !1
    ), at > 0) {
      if (at & 16)
        ct(st, ft, wt, $, K);
      else if (at & 2 && ft.class !== wt.class && s(st, "class", null, wt.class, K), at & 4 && s(st, "style", ft.style, wt.style, K), at & 8) {
        const ht = D.dynamicProps;
        for (let zt = 0; zt < ht.length; zt++) {
          const It = ht[zt], ae = ft[It], Mt = wt[It];
          (Mt !== ae || It === "value") && s(st, It, ae, Mt, K, $);
        }
      }
      at & 1 && S.children !== D.children && w(st, D.children);
    } else !nt && tt == null && ct(st, ft, wt, $, K);
    ((h = wt.onVnodeUpdated) || xt) && nn(() => {
      h && On(h, $, D, S), xt && Cr(D, S, $, "updated");
    }, G);
  }, z = (S, D, $, G, K, B, nt) => {
    for (let st = 0; st < D.length; st++) {
      const at = S[st], tt = D[st], xt = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        at.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (at.type === ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bi(at, tt) || // - In the case of a component, it could contain anything.
        at.shapeFlag & 198) ? p(at.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          $
        )
      );
      I(
        at,
        tt,
        xt,
        null,
        G,
        K,
        B,
        nt,
        !0
      );
    }
  }, ct = (S, D, $, G, K) => {
    if (D !== $) {
      if (D !== ie)
        for (const B in D)
          !ea(B) && !(B in $) && s(
            S,
            B,
            D[B],
            null,
            K,
            G
          );
      for (const B in $) {
        if (ea(B)) continue;
        const nt = $[B], st = D[B];
        nt !== st && B !== "value" && s(S, B, st, nt, K, G);
      }
      "value" in $ && s(S, "value", D.value, $.value, K);
    }
  }, it = (S, D, $, G, K, B, nt, st, at) => {
    const tt = D.el = S ? S.el : f(""), xt = D.anchor = S ? S.anchor : f("");
    let { patchFlag: ft, dynamicChildren: wt, slotScopeIds: h } = D;
    h && (st = st ? st.concat(h) : h), S == null ? (r(tt, $, G), r(xt, $, G), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      D.children || [],
      $,
      xt,
      K,
      B,
      nt,
      st,
      at
    )) : ft > 0 && ft & 64 && wt && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    S.dynamicChildren && S.dynamicChildren.length === wt.length ? (z(
      S.dynamicChildren,
      wt,
      $,
      K,
      B,
      nt,
      st
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (D.key != null || K && D === K.subTree) && Wd(
      S,
      D,
      !0
      /* shallow */
    )) : q(
      S,
      D,
      $,
      xt,
      K,
      B,
      nt,
      st,
      at
    );
  }, _t = (S, D, $, G, K, B, nt, st, at) => {
    D.slotScopeIds = st, S == null ? D.shapeFlag & 512 ? K.ctx.activate(
      D,
      $,
      G,
      nt,
      at
    ) : bt(
      D,
      $,
      G,
      K,
      B,
      nt,
      at
    ) : J(S, D, at);
  }, bt = (S, D, $, G, K, B, nt) => {
    const st = S.component = Fm(
      S,
      G,
      K
    );
    if (Ad(S) && (st.ctx.renderer = on), Vm(st, !1, nt), st.asyncDep) {
      if (K && K.registerDep(st, ot, nt), !S.el) {
        const at = st.subTree = Je(Nr);
        O(null, at, D, $), S.placeholder = at.el;
      }
    } else
      ot(
        st,
        S,
        D,
        $,
        K,
        B,
        nt
      );
  }, J = (S, D, $) => {
    const G = D.component = S.component;
    if (bm(S, D, $))
      if (G.asyncDep && !G.asyncResolved) {
        lt(G, D, $);
        return;
      } else
        G.next = D, G.update();
    else
      D.el = S.el, G.vnode = D;
  }, ot = (S, D, $, G, K, B, nt) => {
    const st = () => {
      if (S.isMounted) {
        let { next: ft, bu: wt, u: h, parent: ht, vnode: zt } = S;
        {
          const ye = qd(S);
          if (ye) {
            ft && (ft.el = zt.el, lt(S, ft, nt)), ye.asyncDep.then(() => {
              nn(() => {
                S.isUnmounted || tt();
              }, K);
            });
            return;
          }
        }
        let It = ft, ae;
        Ir(S, !1), ft ? (ft.el = zt.el, lt(S, ft, nt)) : ft = zt, wt && Ks(wt), (ae = ft.props && ft.props.onVnodeBeforeUpdate) && On(ae, ht, ft, zt), Ir(S, !0);
        const Mt = Fu(S), me = S.subTree;
        S.subTree = Mt, I(
          me,
          Mt,
          // parent may have changed if it's in a teleport
          p(me.el),
          // anchor may have changed if it's in a fragment
          Ge(me),
          S,
          K,
          B
        ), ft.el = Mt.el, It === null && vm(S, Mt.el), h && nn(h, K), (ae = ft.props && ft.props.onVnodeUpdated) && nn(
          () => On(ae, ht, ft, zt),
          K
        );
      } else {
        let ft;
        const { el: wt, props: h } = D, { bm: ht, m: zt, parent: It, root: ae, type: Mt } = S, me = aa(D);
        Ir(S, !1), ht && Ks(ht), !me && (ft = h && h.onVnodeBeforeMount) && On(ft, It, D), Ir(S, !0);
        {
          ae.ce && ae.ce._hasShadowRoot() && ae.ce._injectChildStyle(
            Mt,
            S.parent ? S.parent.type : void 0
          );
          const ye = S.subTree = Fu(S);
          I(
            null,
            ye,
            $,
            G,
            S,
            K,
            B
          ), D.el = ye.el;
        }
        if (zt && nn(zt, K), !me && (ft = h && h.onVnodeMounted)) {
          const ye = D;
          nn(
            () => On(ft, It, ye),
            K
          );
        }
        (D.shapeFlag & 256 || It && aa(It.vnode) && It.vnode.shapeFlag & 256) && S.a && nn(S.a, K), S.isMounted = !0, D = $ = G = null;
      }
    };
    S.scope.on();
    const at = S.effect = new id(st);
    S.scope.off();
    const tt = S.update = at.run.bind(at), xt = S.job = at.runIfDirty.bind(at);
    xt.i = S, xt.id = S.uid, at.scheduler = () => Yc(xt), Ir(S, !0), tt();
  }, lt = (S, D, $) => {
    D.component = S;
    const G = S.vnode.props;
    S.vnode = D, S.next = null, wm(S, D.props, G, $), Mm(S, D.children, $), sr(), Cu(S), cr();
  }, q = (S, D, $, G, K, B, nt, st, at = !1) => {
    const tt = S && S.children, xt = S ? S.shapeFlag : 0, ft = D.children, { patchFlag: wt, shapeFlag: h } = D;
    if (wt > 0) {
      if (wt & 128) {
        St(
          tt,
          ft,
          $,
          G,
          K,
          B,
          nt,
          st,
          at
        );
        return;
      } else if (wt & 256) {
        ut(
          tt,
          ft,
          $,
          G,
          K,
          B,
          nt,
          st,
          at
        );
        return;
      }
    }
    h & 8 ? (xt & 16 && Ne(tt, K, B), ft !== tt && w($, ft)) : xt & 16 ? h & 16 ? St(
      tt,
      ft,
      $,
      G,
      K,
      B,
      nt,
      st,
      at
    ) : Ne(tt, K, B, !0) : (xt & 8 && w($, ""), h & 16 && Q(
      ft,
      $,
      G,
      K,
      B,
      nt,
      st,
      at
    ));
  }, ut = (S, D, $, G, K, B, nt, st, at) => {
    S = S || gi, D = D || gi;
    const tt = S.length, xt = D.length, ft = Math.min(tt, xt);
    let wt;
    for (wt = 0; wt < ft; wt++) {
      const h = D[wt] = at ? ar(D[wt]) : jn(D[wt]);
      I(
        S[wt],
        h,
        $,
        null,
        K,
        B,
        nt,
        st,
        at
      );
    }
    tt > xt ? Ne(
      S,
      K,
      B,
      !0,
      !1,
      ft
    ) : Q(
      D,
      $,
      G,
      K,
      B,
      nt,
      st,
      at,
      ft
    );
  }, St = (S, D, $, G, K, B, nt, st, at) => {
    let tt = 0;
    const xt = D.length;
    let ft = S.length - 1, wt = xt - 1;
    for (; tt <= ft && tt <= wt; ) {
      const h = S[tt], ht = D[tt] = at ? ar(D[tt]) : jn(D[tt]);
      if (Bi(h, ht))
        I(
          h,
          ht,
          $,
          null,
          K,
          B,
          nt,
          st,
          at
        );
      else
        break;
      tt++;
    }
    for (; tt <= ft && tt <= wt; ) {
      const h = S[ft], ht = D[wt] = at ? ar(D[wt]) : jn(D[wt]);
      if (Bi(h, ht))
        I(
          h,
          ht,
          $,
          null,
          K,
          B,
          nt,
          st,
          at
        );
      else
        break;
      ft--, wt--;
    }
    if (tt > ft) {
      if (tt <= wt) {
        const h = wt + 1, ht = h < xt ? D[h].el : G;
        for (; tt <= wt; )
          I(
            null,
            D[tt] = at ? ar(D[tt]) : jn(D[tt]),
            $,
            ht,
            K,
            B,
            nt,
            st,
            at
          ), tt++;
      }
    } else if (tt > wt)
      for (; tt <= ft; )
        Nt(S[tt], K, B, !0), tt++;
    else {
      const h = tt, ht = tt, zt = /* @__PURE__ */ new Map();
      for (tt = ht; tt <= wt; tt++) {
        const Re = D[tt] = at ? ar(D[tt]) : jn(D[tt]);
        Re.key != null && zt.set(Re.key, tt);
      }
      let It, ae = 0;
      const Mt = wt - ht + 1;
      let me = !1, ye = 0;
      const Yn = new Array(Mt);
      for (tt = 0; tt < Mt; tt++) Yn[tt] = 0;
      for (tt = h; tt <= ft; tt++) {
        const Re = S[tt];
        if (ae >= Mt) {
          Nt(Re, K, B, !0);
          continue;
        }
        let Me;
        if (Re.key != null)
          Me = zt.get(Re.key);
        else
          for (It = ht; It <= wt; It++)
            if (Yn[It - ht] === 0 && Bi(Re, D[It])) {
              Me = It;
              break;
            }
        Me === void 0 ? Nt(Re, K, B, !0) : (Yn[Me - ht] = tt + 1, Me >= ye ? ye = Me : me = !0, I(
          Re,
          D[Me],
          $,
          null,
          K,
          B,
          nt,
          st,
          at
        ), ae++);
      }
      const An = me ? Cm(Yn) : gi;
      for (It = An.length - 1, tt = Mt - 1; tt >= 0; tt--) {
        const Re = ht + tt, Me = D[Re], ke = D[Re + 1], Ma = Re + 1 < xt ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ke.el || Yd(ke)
        ) : G;
        Yn[tt] === 0 ? I(
          null,
          Me,
          $,
          Ma,
          K,
          B,
          nt,
          st,
          at
        ) : me && (It < 0 || tt !== An[It] ? Ct(Me, $, Ma, 2) : It--);
      }
    }
  }, Ct = (S, D, $, G, K = null) => {
    const { el: B, type: nt, transition: st, children: at, shapeFlag: tt } = S;
    if (tt & 6) {
      Ct(S.component.subTree, D, $, G);
      return;
    }
    if (tt & 128) {
      S.suspense.move(D, $, G);
      return;
    }
    if (tt & 64) {
      nt.move(S, D, $, on);
      return;
    }
    if (nt === ze) {
      r(B, D, $);
      for (let ft = 0; ft < at.length; ft++)
        Ct(at[ft], D, $, G);
      r(S.anchor, D, $);
      return;
    }
    if (nt === vo) {
      C(S, D, $);
      return;
    }
    if (G !== 2 && tt & 1 && st)
      if (G === 0)
        st.beforeEnter(B), r(B, D, $), nn(() => st.enter(B), K);
      else {
        const { leave: ft, delayLeave: wt, afterLeave: h } = st, ht = () => {
          S.ctx.isUnmounted ? a(B) : r(B, D, $);
        }, zt = () => {
          B._isLeaving && B[G0](
            !0
            /* cancelled */
          ), ft(B, () => {
            ht(), h && h();
          });
        };
        wt ? wt(B, ht, zt) : zt();
      }
    else
      r(B, D, $);
  }, Nt = (S, D, $, G = !1, K = !1) => {
    const {
      type: B,
      props: nt,
      ref: st,
      children: at,
      dynamicChildren: tt,
      shapeFlag: xt,
      patchFlag: ft,
      dirs: wt,
      cacheIndex: h,
      memo: ht
    } = S;
    if (ft === -2 && (K = !1), st != null && (sr(), ia(st, null, $, S, !0), cr()), h != null && (D.renderCache[h] = void 0), xt & 256) {
      D.ctx.deactivate(S);
      return;
    }
    const zt = xt & 1 && wt, It = !aa(S);
    let ae;
    if (It && (ae = nt && nt.onVnodeBeforeUnmount) && On(ae, D, S), xt & 6)
      Be(S.component, $, G);
    else {
      if (xt & 128) {
        S.suspense.unmount($, G);
        return;
      }
      zt && Cr(S, null, D, "beforeUnmount"), xt & 64 ? S.type.remove(
        S,
        D,
        $,
        on,
        G
      ) : tt && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !tt.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (B !== ze || ft > 0 && ft & 64) ? Ne(
        tt,
        D,
        $,
        !1,
        !0
      ) : (B === ze && ft & 384 || !K && xt & 16) && Ne(at, D, $), G && ne(S);
    }
    const Mt = ht != null && h == null;
    (It && (ae = nt && nt.onVnodeUnmounted) || zt || Mt) && nn(() => {
      ae && On(ae, D, S), zt && Cr(S, null, D, "unmounted"), Mt && (S.el = null);
    }, $);
  }, ne = (S) => {
    const { type: D, el: $, anchor: G, transition: K } = S;
    if (D === ze) {
      Se($, G);
      return;
    }
    if (D === vo) {
      T(S);
      return;
    }
    const B = () => {
      a($), K && !K.persisted && K.afterLeave && K.afterLeave();
    };
    if (S.shapeFlag & 1 && K && !K.persisted) {
      const { leave: nt, delayLeave: st } = K, at = () => nt($, B);
      st ? st(S.el, B, at) : at();
    } else
      B();
  }, Se = (S, D) => {
    let $;
    for (; S !== D; )
      $ = N(S), a(S), S = $;
    a(D);
  }, Be = (S, D, $) => {
    const { bum: G, scope: K, job: B, subTree: nt, um: st, m: at, a: tt } = S;
    zu(at), zu(tt), G && Ks(G), K.stop(), B && (B.flags |= 8, Nt(nt, S, D, $)), st && nn(st, D), nn(() => {
      S.isUnmounted = !0;
    }, D);
  }, Ne = (S, D, $, G = !1, K = !1, B = 0) => {
    for (let nt = B; nt < S.length; nt++)
      Nt(S[nt], D, $, G, K);
  }, Ge = (S) => {
    if (S.shapeFlag & 6)
      return Ge(S.component.subTree);
    if (S.shapeFlag & 128)
      return S.suspense.next();
    const D = N(S.anchor || S.el), $ = D && D[U0];
    return $ ? N($) : D;
  };
  let Ce = !1;
  const an = (S, D, $) => {
    let G;
    S == null ? D._vnode && (Nt(D._vnode, null, null, !0), G = D._vnode.component) : I(
      D._vnode || null,
      S,
      D,
      null,
      null,
      null,
      $
    ), D._vnode = S, Ce || (Ce = !0, Cu(G), xd(), Ce = !1);
  }, on = {
    p: I,
    um: Nt,
    m: Ct,
    r: ne,
    mt: bt,
    mc: Q,
    pc: q,
    pbc: z,
    n: Ge,
    o: t
  };
  return {
    render: an,
    hydrate: void 0,
    createApp: dm(an)
  };
}
function Js({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Ir({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function Am(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function Wd(t, e, n = !1) {
  const r = t.children, a = e.children;
  if (Tt(r) && Tt(a))
    for (let s = 0; s < r.length; s++) {
      const u = r[s];
      let f = a[s];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[s] = ar(a[s]), f.el = u.el), !n && f.patchFlag !== -2 && Wd(u, f)), f.type === cs && (f.patchFlag === -1 && (f = a[s] = ar(f)), f.el = u.el), f.type === Nr && !f.el && (f.el = u.el);
    }
}
function Cm(t) {
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
function qd(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : qd(e);
}
function zu(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function Yd(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? Yd(e.subTree) : null;
}
const Xd = (t) => t.__isSuspense;
function Im(t, e) {
  e && e.pendingBranch ? Tt(t) ? e.effects.push(...t) : e.effects.push(t) : F0(t);
}
const ze = /* @__PURE__ */ Symbol.for("v-fgt"), cs = /* @__PURE__ */ Symbol.for("v-txt"), Nr = /* @__PURE__ */ Symbol.for("v-cmt"), vo = /* @__PURE__ */ Symbol.for("v-stc"), sa = [];
let fn = null;
function ge(t = !1) {
  sa.push(fn = t ? null : []);
}
function Em() {
  sa.pop(), fn = sa[sa.length - 1] || null;
}
let ya = 1;
function Hu(t, e = !1) {
  ya += t, t < 0 && fn && e && (fn.hasOnce = !0);
}
function Zd(t) {
  return t.dynamicChildren = ya > 0 ? fn || gi : null, Em(), ya > 0 && fn && fn.push(t), t;
}
function Te(t, e, n, r, a, s) {
  return Zd(
    we(
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
function ki(t, e, n, r, a) {
  return Zd(
    Je(
      t,
      e,
      n,
      r,
      a,
      !0
    )
  );
}
function Jd(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Bi(t, e) {
  return t.type === e.type && t.key === e.key;
}
const Qd = ({ key: t }) => t ?? null, _o = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? xe(t) || /* @__PURE__ */ je(t) || Ft(t) ? { i: Mn, r: t, k: e, f: !!n } : t : null);
function we(t, e = null, n = null, r = 0, a = null, s = t === ze ? 0 : 1, u = !1, f = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && Qd(e),
    ref: e && _o(e),
    scopeId: Nd,
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
    ctx: Mn
  };
  return f ? (Qc(g, n), s & 128 && t.normalize(g)) : n && (g.shapeFlag |= xe(n) ? 8 : 16), ya > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  fn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && fn.push(g), g;
}
const Je = Dm;
function Dm(t, e = null, n = null, r = 0, a = null, s = !1) {
  if ((!t || t === Td) && (t = Nr), Jd(t)) {
    const f = Ni(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && Qc(f, n), ya > 0 && !s && fn && (f.shapeFlag & 6 ? fn[fn.indexOf(t)] = f : fn.push(f)), f.patchFlag = -2, f;
  }
  if (Bm(t) && (t = t.__vccOpts), e) {
    e = Tm(e);
    let { class: f, style: g } = e;
    f && !xe(f) && (e.class = rs(f)), Qt(g) && (/* @__PURE__ */ Wc(g) && !Tt(g) && (g = Ue({}, g)), e.style = ns(g));
  }
  const u = xe(t) ? 1 : Xd(t) ? 128 : B0(t) ? 64 : Qt(t) ? 4 : Ft(t) ? 2 : 0;
  return we(
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
function Tm(t) {
  return t ? /* @__PURE__ */ Wc(t) || Hd(t) ? Ue({}, t) : t : null;
}
function Ni(t, e, n = !1, r = !1) {
  const { props: a, ref: s, patchFlag: u, children: f, transition: g } = t, y = e ? eh(a || {}, e) : a, w = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: y,
    key: y && Qd(y),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Tt(s) ? s.concat(_o(e)) : [s, _o(e)] : _o(e)
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
    ssContent: t.ssContent && Ni(t.ssContent),
    ssFallback: t.ssFallback && Ni(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return g && r && Xc(
    w,
    g.clone(w)
  ), w;
}
function Rm(t = " ", e = 0) {
  return Je(cs, null, t, e);
}
function th(t, e) {
  const n = Je(vo, null, t);
  return n.staticCount = e, n;
}
function wo(t = "", e = !1) {
  return e ? (ge(), ki(Nr, null, t)) : Je(Nr, null, t);
}
function jn(t) {
  return t == null || typeof t == "boolean" ? Je(Nr) : Tt(t) ? Je(
    ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : Jd(t) ? ar(t) : Je(cs, null, String(t));
}
function ar(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Ni(t);
}
function Qc(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Tt(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const a = e.default;
      a && (a._c && (a._d = !1), Qc(t, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = e._;
      !a && !Hd(e) ? e._ctx = Mn : a === 3 && Mn && (Mn.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else Ft(e) ? (e = { default: e, _ctx: Mn }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [Rm(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function eh(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const a in r)
      if (a === "class")
        e.class !== r.class && (e.class = rs([e.class, r.class]));
      else if (a === "style")
        e.style = ns([e.style, r.style]);
      else if (Zo(a)) {
        const s = e[a], u = r[a];
        u && s !== u && !(Tt(s) && s.includes(u)) ? e[a] = s ? [].concat(s, u) : u : u == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Jo(a) && (e[a] = u);
      } else a !== "" && (e[a] = r[a]);
  }
  return e;
}
function On(t, e, n, r = null) {
  qn(t, e, 7, [
    n,
    r
  ]);
}
const Lm = Od();
let Om = 0;
function Fm(t, e, n) {
  const r = t.type, a = (e ? e.appContext : t.appContext) || Lm, s = {
    uid: Om++,
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
    scope: new a0(
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
    propsOptions: Ud(r, a),
    emitsOptions: Fd(r, a),
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
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = pm.bind(null, s), t.ce && t.ce(s), s;
}
let He = null;
const $m = () => He || Mn;
let Lo, xc;
{
  const t = es(), e = (n, r) => {
    let a;
    return (a = t[n]) || (a = t[n] = []), a.push(r), (s) => {
      a.length > 1 ? a.forEach((u) => u(s)) : a[0](s);
    };
  };
  Lo = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => He = n
  ), xc = e(
    "__VUE_SSR_SETTERS__",
    (n) => ba = n
  );
}
const Sa = (t) => {
  const e = He;
  return Lo(t), t.scope.on(), () => {
    t.scope.off(), Lo(e);
  };
}, ju = () => {
  He && He.scope.off(), Lo(null);
};
function nh(t) {
  return t.vnode.shapeFlag & 4;
}
let ba = !1;
function Vm(t, e = !1, n = !1) {
  e && xc(e);
  const { props: r, children: a } = t.vnode, s = nh(t);
  _m(t, r, s, e), Nm(t, a, n || e);
  const u = s ? zm(t, e) : void 0;
  return e && xc(!1), u;
}
function zm(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, am);
  const { setup: r } = n;
  if (r) {
    sr();
    const a = t.setupContext = r.length > 1 ? jm(t) : null, s = Sa(t), u = xa(
      r,
      t,
      0,
      [
        t.props,
        a
      ]
    ), f = Xf(u);
    if (cr(), s(), (f || t.sp) && !aa(t) && Pd(t), f) {
      if (u.then(ju, ju), e)
        return u.then((g) => {
          Uu(t, g);
        }).catch((g) => {
          as(g, t, 0);
        });
      t.asyncDep = u;
    } else
      Uu(t, u);
  } else
    rh(t);
}
function Uu(t, e, n) {
  Ft(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Qt(e) && (t.setupState = bd(e)), rh(t);
}
function rh(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || Kn);
  {
    const a = Sa(t);
    sr();
    try {
      om(t);
    } finally {
      cr(), a();
    }
  }
}
const Hm = {
  get(t, e) {
    return Ve(t, "get", ""), t[e];
  }
};
function jm(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, Hm),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function tl(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(bd(k0(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in oa)
        return oa[n](t);
    },
    has(e, n) {
      return n in e || n in oa;
    }
  })) : t.proxy;
}
function Um(t, e = !0) {
  return Ft(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Bm(t) {
  return Ft(t) && "__vccOpts" in t;
}
const _i = (t, e) => /* @__PURE__ */ D0(t, e, ba), Gm = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Sc;
const Bu = typeof window < "u" && window.trustedTypes;
if (Bu)
  try {
    Sc = /* @__PURE__ */ Bu.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const ih = Sc ? (t) => Sc.createHTML(t) : (t) => t, Km = "http://www.w3.org/2000/svg", Wm = "http://www.w3.org/1998/Math/MathML", ir = typeof document < "u" ? document : null, Gu = ir && /* @__PURE__ */ ir.createElement("template"), qm = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const a = e === "svg" ? ir.createElementNS(Km, t) : e === "mathml" ? ir.createElementNS(Wm, t) : n ? ir.createElement(t, { is: n }) : ir.createElement(t);
    return t === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (t) => ir.createTextNode(t),
  createComment: (t) => ir.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => ir.querySelector(t),
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
      Gu.innerHTML = ih(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const f = Gu.content;
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
}, Ym = /* @__PURE__ */ Symbol("_vtc");
function Xm(t, e, n) {
  const r = t[Ym];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const Ku = /* @__PURE__ */ Symbol("_vod"), Zm = /* @__PURE__ */ Symbol("_vsh"), Jm = /* @__PURE__ */ Symbol(""), Qm = /(?:^|;)\s*display\s*:/;
function t1(t, e, n) {
  const r = t.style, a = xe(n);
  let s = !1;
  if (n && !a) {
    if (e)
      if (xe(e))
        for (const u of e.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && xo(r, f, "");
        }
      else
        for (const u in e)
          n[u] == null && xo(r, u, "");
    for (const u in n)
      u === "display" && (s = !0), xo(r, u, n[u]);
  } else if (a) {
    if (e !== n) {
      const u = r[Jm];
      u && (n += ";" + u), r.cssText = n, s = Qm.test(n);
    }
  } else e && t.removeAttribute("style");
  Ku in t && (t[Ku] = s ? r.display : "", t[Zm] && (r.display = "none"));
}
const Wu = /\s*!important$/;
function xo(t, e, n) {
  if (Tt(n))
    n.forEach((r) => xo(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = e1(t, e);
    Wu.test(n) ? t.setProperty(
      Gr(r),
      n.replace(Wu, ""),
      "important"
    ) : t[r] = n;
  }
}
const qu = ["Webkit", "Moz", "ms"], Qs = {};
function e1(t, e) {
  const n = Qs[e];
  if (n)
    return n;
  let r = Qe(e);
  if (r !== "filter" && r in t)
    return Qs[e] = r;
  r = ts(r);
  for (let a = 0; a < qu.length; a++) {
    const s = qu[a] + r;
    if (s in t)
      return Qs[e] = s;
  }
  return e;
}
const Yu = "http://www.w3.org/1999/xlink";
function Xu(t, e, n, r, a, s = r0(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(Yu, e.slice(6, e.length)) : t.setAttributeNS(Yu, e, n) : n == null || s && !td(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    s ? "" : Wn(n) ? String(n) : n
  );
}
function Zu(t, e, n, r, a) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? ih(n) : n);
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
    f === "boolean" ? n = td(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(a || e);
}
function n1(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function r1(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const Ju = /* @__PURE__ */ Symbol("_vei");
function i1(t, e, n, r, a = null) {
  const s = t[Ju] || (t[Ju] = {}), u = s[e];
  if (r && u)
    u.value = r;
  else {
    const [f, g] = a1(e);
    if (r) {
      const y = s[e] = c1(
        r,
        a
      );
      n1(t, f, y, g);
    } else u && (r1(t, f, u, g), s[e] = void 0);
  }
}
const Qu = /(?:Once|Passive|Capture)$/;
function a1(t) {
  let e;
  if (Qu.test(t)) {
    e = {};
    let r;
    for (; r = t.match(Qu); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Gr(t.slice(2)), e];
}
let tc = 0;
const o1 = /* @__PURE__ */ Promise.resolve(), s1 = () => tc || (o1.then(() => tc = 0), tc = Date.now());
function c1(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    qn(
      l1(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = s1(), n;
}
function l1(t, e) {
  if (Tt(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map(
      (r) => (a) => !a._stopped && r && r(a)
    );
  } else
    return e;
}
const tf = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, u1 = (t, e, n, r, a, s) => {
  const u = a === "svg";
  e === "class" ? Xm(t, r, u) : e === "style" ? t1(t, n, r) : Zo(e) ? Jo(e) || i1(t, e, n, r, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : f1(t, e, r, u)) ? (Zu(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Xu(t, e, r, u, s, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (d1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !xe(r))) ? Zu(t, Qe(e), r, s, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), Xu(t, e, r, u));
};
function f1(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && tf(e) && Ft(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const a = t.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return tf(e) && xe(n) ? !1 : e in t;
}
function d1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const r = Qe(e);
  return Array.isArray(n) ? n.some((a) => Qe(a) === r) : Object.keys(n).some((a) => Qe(a) === r);
}
const h1 = ["ctrl", "shift", "alt", "meta"], p1 = {
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
  exact: (t, e) => h1.some((n) => t[`${n}Key`] && !e.includes(n))
}, g1 = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = ((a, ...s) => {
    for (let u = 0; u < e.length; u++) {
      const f = p1[e[u]];
      if (f && f(a, e)) return;
    }
    return t(a, ...s);
  }));
}, m1 = /* @__PURE__ */ Ue({ patchProp: u1 }, qm);
let ef;
function y1() {
  return ef || (ef = km(m1));
}
const b1 = ((...t) => {
  const e = y1().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const a = _1(r);
    if (!a) return;
    const s = e._component;
    !Ft(s) && !s.render && !s.template && (s.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, v1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, e;
});
function v1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function _1(t) {
  return xe(t) ? document.querySelector(t) : t;
}
const pe = Math.PI / 180, ah = Math.PI * 2, w1 = 2048;
function ee(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Mr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Oo(t, e) {
  return Mr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function pi(t, e) {
  return Mr(t.x * e, t.y * e, t.z * e);
}
function So(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function nf(t, e) {
  return Mr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Zi(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Mr(t.x / e, t.y / e, t.z / e);
}
function x1(t, e) {
  const n = Number(t || 0) * pe, r = Number(e || 0) * pe, a = Math.cos(r);
  return Mr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function No(t, e, n = 0) {
  const r = x1(t, e);
  let a = Mr(0, 1, 0);
  Math.abs(So(r, a)) > 0.999 && (a = Mr(0, 0, 1));
  let s = Zi(nf(a, r)), u = Zi(nf(r, s));
  const f = Number(n || 0) * pe, g = Math.cos(f), y = Math.sin(f), w = Oo(pi(s, g), pi(u, y)), p = Oo(pi(s, -y), pi(u, g));
  return s = Zi(w), u = Zi(p), { fwd: r, right: s, up: u };
}
function S1(t, e) {
  const n = (Number(t || 0) - 0.5) * ah, r = (0.5 - Number(e || 0)) * Math.PI, a = Math.cos(r);
  return Mr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function rf(t, e, n = 1) {
  const r = Math.max(1, Math.round(Number(t || 1))), a = Math.max(1, Math.round(Number(e || 1))), s = Math.max(1, Number(n || 1)), u = Math.max(512, w1), f = Math.min(1, u / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: s,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function af(t, e, n) {
  const r = t.createShader(e);
  if (t.shaderSource(r, n), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const a = t.getShaderInfoLog(r) || "shader compile failed";
    throw t.deleteShader(r), new Error(a);
  }
  return r;
}
function ec(t, e, n) {
  const r = af(t, t.VERTEX_SHADER, e);
  let a;
  try {
    a = af(t, t.FRAGMENT_SHADER, n);
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
const nc = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, N1 = `#version 300 es
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
}`, M1 = `#version 300 es
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
}`, k1 = `#version 300 es
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
function Gi(t, e, n) {
  if (!t || t.mode === "unwrap") return null;
  const r = Number(t.mode === "cutout" ? t.hFovDeg || 90 : t.fovDeg || 100), a = Number(t.mode === "cutout" ? t.vFovDeg || 60 : 2 * Math.atan(Math.tan(ee(r, 1, 179) * pe * 0.5) * (n / Math.max(e, 1))) / pe);
  return {
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.mode === "cutout" && t.rollDeg || 0),
    hFovDeg: ee(r, 1, 179),
    vFovDeg: ee(a, 0.1, 179)
  };
}
function P1(t) {
  const e = No(
    Number(t.yawDeg || 0),
    Number(t.pitchDeg || 0),
    Number(t.rollDeg || 0)
  );
  return {
    right: e.right,
    up: e.up,
    fwd: e.fwd,
    tanX: Math.tan(ee(Number(t.hFovDeg), 0.1, 179) * 0.5 * pe),
    tanY: Math.tan(ee(Number(t.vFovDeg), 0.1, 179) * 0.5 * pe),
    crop: t.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: ee(Number(t.opacity ?? 1), 0, 1)
  };
}
function A1(t = {}) {
  const e = (t == null ? void 0 : t.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, w = null, p = null, N = null, P = !1, E = rf(1, 1, 1), I = null, A = null, O = null, R = null, C = null;
  const T = /* @__PURE__ */ new Map();
  let W = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, L = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  };
  function dt(S = null, D = null) {
    const $ = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, $), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, S ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, D ?? n.CLAMP_TO_EDGE), $;
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
      }), n ? (r = ec(n, nc, N1), a = ec(n, nc, M1), s = ec(n, nc, k1), I = {
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
      }, O = {
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
      ]), n.STATIC_DRAW), f = dt(n.REPEAT, n.CLAMP_TO_EDGE), g = dt(n.REPEAT, n.CLAMP_TO_EDGE), y = dt(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), P = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function Pt() {
    var S;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), g && n.deleteTexture(g), y && n.deleteTexture(y), T.forEach((D) => {
          lt(D);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), s && n.deleteProgram(s), (S = n.getExtension("WEBGL_lose_context")) == null || S.loseContext();
      } catch {
      }
      n = null, r = null, a = null, s = null, u = null, f = null, g = null, y = null, T.clear(), w = null, p = null, N = null, L = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, R = null, C = null, P = !1;
    }
  }
  function z(S, D, $ = 1) {
    E = rf(S, D, $), (e.width !== E.width || e.height !== E.height) && (e.width = E.width, e.height = E.height);
  }
  function ct(S) {
    S === "background" ? w = null : S === "paint" ? p = null : N = null, L[S] && (L[S].width = 0, L[S].height = 0);
  }
  function it(S, D, $ = [], G = { width: 0, height: 0 }, K = !1) {
    if (!n || !S || !D) return !1;
    const B = Number(D.width || D.videoWidth || D.naturalWidth || 0), nt = Number(D.height || D.videoHeight || D.naturalHeight || 0);
    if (!(B > 1) || !(nt > 1)) return !1;
    const st = Array.isArray($) ? $.filter((at) => at && at.w > 0 && at.h > 0) : [];
    if (!st.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, S), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, K ? 1 : 0), G.width !== B || G.height !== nt)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, D), G.width = B, G.height = nt, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (R || (R = document.createElement("canvas"), C = R.getContext("2d")), !C)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const at of st) {
      const tt = Math.max(0, Math.floor(Number(at.x || 0))), xt = Math.max(0, Math.floor(Number(at.y || 0))), ft = Math.min(B - tt, Math.ceil(Number(at.w || 0))), wt = Math.min(nt - xt, Math.ceil(Number(at.h || 0)));
      if (!(ft <= 0 || wt <= 0)) {
        if (R.width !== ft || R.height !== wt) {
          if (R.width = ft, R.height = wt, C = R.getContext("2d"), !C)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          C.clearRect(0, 0, ft, wt);
        C.drawImage(D, tt, xt, ft, wt, 0, 0, ft, wt), n.texSubImage2D(n.TEXTURE_2D, 0, tt, xt, n.RGBA, n.UNSIGNED_BYTE, R);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function _t(S, D, $, G, K = null, B = !1) {
    if (!Q()) return !1;
    if (!$)
      return ct(S), !1;
    const nt = String(G ?? ""), st = S === "background" ? w : S === "paint" ? p : N, at = L[S], tt = Number($.width || $.videoWidth || $.naturalWidth || 0), xt = Number($.height || $.videoHeight || $.naturalHeight || 0), ft = at.width !== tt || at.height !== xt;
    if (st === nt && !ft && !(Array.isArray(K) && K.length)) return !0;
    if (!(tt > 0) || !(xt > 0))
      return ct(S), !1;
    if (n.bindTexture(n.TEXTURE_2D, D), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B ? 1 : 0), !(Array.isArray(K) && K.length ? it(D, $, K, at, B) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, $), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ct(S), !1;
      at.width = tt, at.height = xt;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), S === "background" ? w = nt : S === "paint" ? p = nt : N = nt, !0;
  }
  function bt(S, D) {
    return _t("background", f, S, D, null, !0);
  }
  function J(S, D, $ = null) {
    return _t("paint", g, S, D, $, !0);
  }
  function ot(S, D, $ = null) {
    return _t("mask", y, S, D, $, !0);
  }
  function lt(S) {
    S != null && S.texture && n && n.deleteTexture(S.texture);
  }
  function q(S) {
    if (!n || !(S != null && S.assetId) || !(S != null && S.source)) return null;
    const D = String(S.assetId), $ = String(S.revision ?? ""), G = S.source, K = Number(G.width || G.naturalWidth || G.videoWidth || 0), B = Number(G.height || G.naturalHeight || G.videoHeight || 0);
    if (K <= 0 || B <= 0) return null;
    let nt = T.get(D);
    if (nt || (nt = {
      texture: dt(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, T.set(D, nt)), nt.revision !== $ || nt.width !== K || nt.height !== B) {
      if (n.bindTexture(n.TEXTURE_2D, nt.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), nt.revision = $, nt.width = K, nt.height = B;
    }
    return nt.texture;
  }
  function ut(S = []) {
    if (!Q()) return !1;
    const D = /* @__PURE__ */ new Set();
    return S.forEach(($) => {
      !($ != null && $.assetId) || !($ != null && $.source) || (D.add(String($.assetId)), q($));
    }), T.forEach(($, G) => {
      D.has(G) || (lt($), T.delete(G));
    }), !0;
  }
  function St() {
    return Q() ? (n.viewport(0, 0, e.width, e.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Ct(S) {
    n.useProgram(S), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function Nt(S, D = {}) {
    if (!w) return null;
    n.disable(n.BLEND), Ct(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(I.background, 0), n.uniform2f(I.viewport, Math.max(1, E.width), Math.max(1, E.height)), n.uniform1i(I.mode, (S == null ? void 0 : S.mode) === "unwrap" ? 0 : (S == null ? void 0 : S.mode) === "cutout" ? 2 : 1);
    const $ = Gi(S, E.width, E.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(I.yaw, Number($.yawDeg || 0) * pe), n.uniform1f(I.pitch, Number($.pitchDeg || 0) * pe), n.uniform1f(I.roll, Number($.rollDeg || 0) * pe), n.uniform1f(I.hFov, ee(Number($.hFovDeg || 90), 0.1, 179) * pe), n.uniform1f(I.vFov, ee(Number($.vFovDeg || 60), 0.1, 179) * pe), n.uniform1f(I.opacity, ee(Number(D.backgroundOpacity ?? 1), 0, 1));
    const G = Number((S == null ? void 0 : S.coverageDeg) || (D == null ? void 0 : D.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(I.coverage, G), n.drawArrays(n.TRIANGLES, 0, 6), e;
  }
  function ne(S, D = {}) {
    if (p == null && N == null) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Ct(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, g), n.uniform1i(A.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(A.mask, 1), n.uniform1i(A.mode, (S == null ? void 0 : S.mode) === "unwrap" ? 0 : (S == null ? void 0 : S.mode) === "cutout" ? 2 : 1);
    const $ = Gi(S, E.width, E.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(A.yaw, Number($.yawDeg || 0) * pe), n.uniform1f(A.pitch, Number($.pitchDeg || 0) * pe), n.uniform1f(A.roll, Number($.rollDeg || 0) * pe), n.uniform1f(A.hFov, ee(Number($.hFovDeg || 90), 0.1, 179) * pe), n.uniform1f(A.vFov, ee(Number($.vFovDeg || 60), 0.1, 179) * pe), n.uniform1f(A.paintOpacity, ee(Number(D.paintOpacity ?? 1), 0, 1)), n.uniform1f(A.maskOpacity, ee(Number(D.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(A.hasPaint, p != null ? 1 : 0), n.uniform1i(A.hasMask, N != null ? 1 : 0), n.uniform1i(A.showMaskTint, D.showMaskTint === !1 ? 0 : 1), n.uniform3f(A.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), e;
  }
  function Se(S, D) {
    var st, at, tt, xt, ft, wt, h;
    const $ = Array.isArray(S == null ? void 0 : S.objects) ? S.objects : [];
    if (!$.length) return;
    const G = (D == null ? void 0 : D.mode) === "unwrap" ? 0 : (D == null ? void 0 : D.mode) === "cutout" ? 2 : 1, K = Gi(D, E.width, E.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, B = No(K.yawDeg, K.pitchDeg, K.rollDeg), nt = $.slice().sort((ht, zt) => Number((ht == null ? void 0 : ht.zIndex) || 0) - Number((zt == null ? void 0 : zt.zIndex) || 0));
    for (const ht of nt)
      if (!(!ht || ht.visible === !1)) {
        if (ht.type === "sticker") {
          const zt = q({
            assetId: String(((st = ht == null ? void 0 : ht.params) == null ? void 0 : st.assetId) || (ht == null ? void 0 : ht.id) || ""),
            source: ht.source,
            revision: ht.revision
          });
          if (!zt) continue;
          const It = P1({
            yawDeg: ((at = ht == null ? void 0 : ht.transform) == null ? void 0 : at.yawDeg) || 0,
            pitchDeg: ((tt = ht == null ? void 0 : ht.transform) == null ? void 0 : tt.pitchDeg) || 0,
            rollDeg: ((xt = ht == null ? void 0 : ht.transform) == null ? void 0 : xt.rollDeg) || 0,
            hFovDeg: ((ft = ht == null ? void 0 : ht.transform) == null ? void 0 : ft.hFovDeg) || 30,
            vFovDeg: ((wt = ht == null ? void 0 : ht.transform) == null ? void 0 : wt.vFovDeg) || 30,
            crop: ((h = ht == null ? void 0 : ht.params) == null ? void 0 : h.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (ht == null ? void 0 : ht.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Ct(s), n.uniform1i(O.texture, 0), n.uniform1i(O.mode, G), n.uniform3f(O.viewRight, B.right.x, B.right.y, B.right.z), n.uniform3f(O.viewUp, B.up.x, B.up.y, B.up.z), n.uniform3f(O.viewFwd, B.fwd.x, B.fwd.y, B.fwd.z), n.uniform1f(O.viewHfov, ee(Number(K.hFovDeg || 90), 0.1, 179) * pe), n.uniform1f(O.viewVfov, ee(Number(K.vFovDeg || 60), 0.1, 179) * pe), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, zt), n.uniform3f(O.stickerRight, It.right.x, It.right.y, It.right.z), n.uniform3f(O.stickerUp, It.up.x, It.up.y, It.up.z), n.uniform3f(O.stickerFwd, It.fwd.x, It.fwd.y, It.fwd.z), n.uniform1f(O.stickerTanX, Math.max(1e-6, It.tanX)), n.uniform1f(O.stickerTanY, Math.max(1e-6, It.tanY)), n.uniform4f(
            O.crop,
            ee(Number(It.crop.x0 ?? 0), 0, 1),
            ee(Number(It.crop.y0 ?? 0), 0, 1),
            ee(Number(It.crop.x1 ?? 1), 0, 1),
            ee(Number(It.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(O.opacity, It.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (ht.type === "paint" || ht.type === "raster") {
          if (!J(ht.source, ht.revision ?? "")) continue;
          ct("mask"), ne(D, {
            paintOpacity: Number(ht.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (ht.type === "mask") {
          if (!ot(ht.source, ht.revision ?? "")) continue;
          ct("paint"), ne(D, {
            paintOpacity: 0,
            maskOpacity: Number(ht.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    ct("paint"), ct("mask");
  }
  function Be(S) {
    return !St() || !w ? null : (Nt({
      mode: "panorama",
      yawDeg: (S == null ? void 0 : S.yawDeg) || 0,
      pitchDeg: (S == null ? void 0 : S.pitchDeg) || 0,
      fovDeg: (S == null ? void 0 : S.fovDeg) || 100
    }, S), e);
  }
  function Ne(S) {
    return !St() || !w ? null : (Nt({ mode: "unwrap" }, S), e);
  }
  function Ge(S) {
    return !St() || !w ? null : (Nt({
      mode: "cutout",
      yawDeg: (S == null ? void 0 : S.yawDeg) || 0,
      pitchDeg: (S == null ? void 0 : S.pitchDeg) || 0,
      rollDeg: (S == null ? void 0 : S.rollDeg) || 0,
      hFovDeg: (S == null ? void 0 : S.hFovDeg) || 90,
      vFovDeg: (S == null ? void 0 : S.vFovDeg) || 60
    }, S), e);
  }
  function Ce(S = {}) {
    if (!Q() || (z(S.width, S.height, S.dpr || 1), !St())) return null;
    const D = Object.prototype.hasOwnProperty.call(S, "backgroundSource"), $ = Object.prototype.hasOwnProperty.call(S, "paintSource"), G = Object.prototype.hasOwnProperty.call(S, "maskSource"), K = Object.prototype.hasOwnProperty.call(S, "textures"), B = Object.prototype.hasOwnProperty.call(S, "scene");
    return D && bt(S.backgroundSource, S.backgroundRevision ?? ""), $ && J(S.paintSource, S.paintRevision ?? ""), G && ot(S.maskSource, S.maskRevision ?? ""), K && (ut(S.textures || []), W.textures = S.textures || []), B && (W.scene = S.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(S, "objectPass") && (W.objectPass = S.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(S, "backgroundOpacity") && (W.backgroundOpacity = Number(S.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(S, "showMaskTint") && (W.showMaskTint = S.showMaskTint === !0), Object.prototype.hasOwnProperty.call(S, "coverageDeg") && (W.coverageDeg = Number(S.coverageDeg || 360) === 180 ? 180 : 360), w && Nt(S.view, {
      ...S,
      backgroundOpacity: Number(S.backgroundOpacity ?? W.backgroundOpacity ?? 1),
      coverageDeg: Number(S.coverageDeg || W.coverageDeg || 360) === 180 ? 180 : 360
    }), Se(
      W.objectPass || { objects: [] },
      S.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), e;
  }
  function an(S = {}) {
    return Q() ? !!Ce({
      ...S,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(S.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(e.width || 1),
      height: Number(e.height || 1),
      dpr: 1
    }) : !1;
  }
  function on(S, D, $) {
    const G = Math.max(1, Number((S == null ? void 0 : S.viewportWidth) || E.sourceWidth || E.width || 1)), K = Math.max(1, Number((S == null ? void 0 : S.viewportHeight) || E.sourceHeight || E.height || 1)), B = Number(D), nt = Number($);
    if (!Number.isFinite(B) || !Number.isFinite(nt)) return null;
    if ((S == null ? void 0 : S.mode) === "unwrap")
      return { u: (B / G % 1 + 1) % 1, v: ee(nt / K, 0, 1) };
    const st = Gi(S, G, K);
    if (!st) return null;
    const at = No(st.yawDeg, st.pitchDeg, st.rollDeg), tt = (B - G * 0.5) / (G * 0.5) * Math.tan(ee(st.hFovDeg, 1, 179) * pe * 0.5), xt = (K * 0.5 - nt) / (K * 0.5) * Math.tan(ee(st.vFovDeg, 0.1, 179) * pe * 0.5), ft = Zi(Oo(Oo(pi(at.right, tt), pi(at.up, xt)), at.fwd));
    return {
      u: (Math.atan2(ft.x, ft.z) / ah + 0.5 + 1) % 1,
      v: ee(0.5 - Math.asin(ee(ft.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function yn(S, D, $) {
    const G = Math.max(1, Number((S == null ? void 0 : S.viewportWidth) || E.sourceWidth || E.width || 1)), K = Math.max(1, Number((S == null ? void 0 : S.viewportHeight) || E.sourceHeight || E.height || 1));
    if ((S == null ? void 0 : S.mode) === "unwrap")
      return {
        x: (Number(D || 0) % 1 + 1) % 1 * G,
        y: ee(Number($ || 0), 0, 1) * K,
        visible: !0
      };
    const B = Gi(S, G, K);
    if (!B)
      return { x: G * 0.5, y: K * 0.5, visible: !1 };
    const nt = No(B.yawDeg, B.pitchDeg, B.rollDeg), st = S1(D, $), at = So(st, nt.right), tt = So(st, nt.up), xt = So(st, nt.fwd);
    if (xt <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const ft = G * 0.5 + at / xt * (G * 0.5 / Math.tan(ee(B.hFovDeg, 1, 179) * pe * 0.5)), wt = K * 0.5 - tt / xt * (K * 0.5 / Math.tan(ee(B.vFovDeg, 0.1, 179) * pe * 0.5));
    return { x: ft, y: wt, visible: ft >= 0 && ft <= G && wt >= 0 && wt <= K };
  }
  return {
    init: Q,
    dispose: Pt,
    setViewport: z,
    setBackgroundErp: bt,
    setPaintErp: J,
    setMaskErp: ot,
    renderPanorama: Be,
    renderUnwrap: Ne,
    renderCutout: Ge,
    renderScene: Ce,
    syncState: an,
    screenToErpUv: on,
    erpUvToScreen: yn,
    getCanvas() {
      return e;
    },
    isSupported() {
      return Q();
    },
    getViewport() {
      return { ...E };
    }
  };
}
function of(t, e = 1, n = 16384) {
  const r = Math.round(Number(t || e));
  return Math.min(n, Math.max(1, Number.isFinite(r) ? r : 1));
}
function C1() {
  const t = /* @__PURE__ */ new Map();
  function e(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, g) {
    const y = e(u);
    let w = t.get(y) || null;
    if (!w) {
      const P = document.createElement("canvas"), E = P.getContext("2d");
      if (!E) return null;
      w = {
        id: y,
        canvas: P,
        ctx: E,
        width: 0,
        height: 0
      }, t.set(y, w);
    }
    const p = of(f), N = of(g);
    return w.width !== p && (w.canvas.width = p, w.width = p), w.height !== N && (w.canvas.height = N, w.height = N), w;
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
const I1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), E1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function oh(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function D1(t, e) {
  return t === "paint" || t === "mask" || t === "raster" ? !1 : e !== !1;
}
function T1(t = {}) {
  const e = E1.has(String((t == null ? void 0 : t.type) || "")) ? String(t.type) : "erp_image", n = Number((t == null ? void 0 : t.opacity) ?? 1);
  return {
    type: e,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    coverageDeg: Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? oh(n, 0, 1) : 1,
    visible: (t == null ? void 0 : t.visible) !== !1
  };
}
function R1(t = {}) {
  const e = String((t == null ? void 0 : t.type) || "");
  if (!I1.has(e)) return null;
  const n = Number((t == null ? void 0 : t.opacity) ?? 1), r = Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0);
  return {
    id: String((t == null ? void 0 : t.id) || ""),
    type: e,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    visible: (t == null ? void 0 : t.visible) !== !1,
    opacity: Number.isFinite(n) ? oh(n, 0, 1) : 1,
    zIndex: Number.isFinite(r) ? r : 0,
    coverageAware: D1(e, t == null ? void 0 : t.coverageAware),
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  };
}
function L1(t = {}) {
  return {
    objects: (Array.isArray(t == null ? void 0 : t.objects) ? t.objects : []).map((r) => R1(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const s = Number((r == null ? void 0 : r.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return s !== u ? s - u : String((r == null ? void 0 : r.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (t == null ? void 0 : t.selectedId) ?? null,
    hoveredId: (t == null ? void 0 : t.hoveredId) ?? null
  };
}
function Fo(t = {}) {
  return {
    stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
    background: T1((t == null ? void 0 : t.background) || {}),
    objectPass: L1((t == null ? void 0 : t.objectPass) || {}),
    overlay: t != null && t.overlay && typeof t.overlay == "object" ? { ...t.overlay } : {}
  };
}
function O1(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function el(t = {}, e = "paint") {
  const n = String((t == null ? void 0 : t.type) || e), r = Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0), a = Number((t == null ? void 0 : t.opacity) ?? 1);
  return {
    id: String((t == null ? void 0 : t.id) || `${n}_layer`),
    type: n,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    zIndex: Number.isFinite(r) ? r : 0,
    opacity: Number.isFinite(a) ? O1(a, 0, 1) : 1,
    visible: (t == null ? void 0 : t.visible) !== !1,
    coverageAware: !1,
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  };
}
function F1(t, e, n = {}) {
  return t ? el({
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
function $1(t, e, n = {}) {
  return t ? el({
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
function V1(t, e, n = {}) {
  return t ? el({
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
function sh(t = {}) {
  const e = [], n = F1(t == null ? void 0 : t.paintSource, t == null ? void 0 : t.paintRevision, t == null ? void 0 : t.paintOptions), r = $1(t == null ? void 0 : t.maskSource, t == null ? void 0 : t.maskRevision, t == null ? void 0 : t.maskOptions), a = Array.isArray(t == null ? void 0 : t.rasterEntries) ? t.rasterEntries : [];
  return n && e.push(n), r && e.push(r), a.forEach((s, u) => {
    const f = V1(
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
function nl(t, e) {
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
function ls(t = {}) {
  const e = (t == null ? void 0 : t.backgroundSource) || null, n = Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360, r = String((t == null ? void 0 : t.stateRevision) || ""), a = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, s = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], u = String((t == null ? void 0 : t.backgroundRevision) || [
    String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
    Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
    Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
  ].join("|"));
  return Fo({
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
      objects: nl(a, s)
    },
    overlay: {
      showMaskTint: (t == null ? void 0 : t.showMaskTint) === !0
    }
  });
}
function sf(t = {}) {
  const e = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], r = nl(e, n), a = sh({
    paintSource: (t == null ? void 0 : t.paintSource) || null,
    paintRevision: (t == null ? void 0 : t.paintRevision) || "",
    paintOptions: (t == null ? void 0 : t.paintOptions) || null,
    maskSource: (t == null ? void 0 : t.maskSource) || null,
    maskRevision: (t == null ? void 0 : t.maskRevision) || "",
    maskOptions: (t == null ? void 0 : t.maskOptions) || null,
    rasterEntries: (t == null ? void 0 : t.rasterEntries) || []
  });
  return Fo({
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
function z1(t = {}) {
  var s, u, f, g, y, w, p, N;
  if (t != null && t.background || t != null && t.objectPass || t != null && t.overlay) {
    const P = Fo(t), E = Array.isArray((s = P.objectPass) == null ? void 0 : s.objects) ? P.objectPass.objects : [], I = {
      stickers: E.filter((C) => C.type === "sticker").map((C) => {
        var T, W, L, dt, Q, Pt, z, ct, it, _t, bt, J, ot;
        return {
          id: C.id,
          assetId: String(((T = C == null ? void 0 : C.params) == null ? void 0 : T.assetId) || ((W = C == null ? void 0 : C.params) == null ? void 0 : W.asset_id) || (C == null ? void 0 : C.id) || ""),
          yawDeg: Number(((L = C == null ? void 0 : C.transform) == null ? void 0 : L.yawDeg) ?? ((dt = C == null ? void 0 : C.params) == null ? void 0 : dt.yawDeg) ?? 0),
          pitchDeg: Number(((Q = C == null ? void 0 : C.transform) == null ? void 0 : Q.pitchDeg) ?? ((Pt = C == null ? void 0 : C.params) == null ? void 0 : Pt.pitchDeg) ?? 0),
          rollDeg: Number(((z = C == null ? void 0 : C.transform) == null ? void 0 : z.rollDeg) ?? ((ct = C == null ? void 0 : C.params) == null ? void 0 : ct.rollDeg) ?? 0),
          hFovDeg: Number(((it = C == null ? void 0 : C.transform) == null ? void 0 : it.hFovDeg) ?? ((_t = C == null ? void 0 : C.params) == null ? void 0 : _t.hFovDeg) ?? 30),
          vFovDeg: Number(((bt = C == null ? void 0 : C.transform) == null ? void 0 : bt.vFovDeg) ?? ((J = C == null ? void 0 : C.params) == null ? void 0 : J.vFovDeg) ?? 30),
          crop: ((ot = C == null ? void 0 : C.params) == null ? void 0 : ot.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((C == null ? void 0 : C.opacity) ?? 1),
          visible: (C == null ? void 0 : C.visible) !== !1,
          zIndex: Number((C == null ? void 0 : C.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = P.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((f = P.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, A = E.filter((C) => C.type === "sticker").map((C) => {
      var T, W;
      return {
        assetId: String(((T = C == null ? void 0 : C.params) == null ? void 0 : T.assetId) || ((W = C == null ? void 0 : C.params) == null ? void 0 : W.asset_id) || (C == null ? void 0 : C.id) || ""),
        source: C.source || null,
        revision: String((C == null ? void 0 : C.revision) || "")
      };
    }).filter((C) => C.assetId && C.source), O = E.find((C) => C.type === "paint") || null, R = E.find((C) => C.type === "mask") || null;
    return {
      stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
      backgroundSource: ((g = P.background) == null ? void 0 : g.source) || null,
      backgroundRevision: String(((y = P.background) == null ? void 0 : y.revision) || ""),
      coverageDeg: Number(((w = P.background) == null ? void 0 : w.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (O == null ? void 0 : O.source) || null,
      paintRevision: String((O == null ? void 0 : O.revision) || ""),
      maskSource: (R == null ? void 0 : R.source) || null,
      maskRevision: String((R == null ? void 0 : R.revision) || ""),
      textures: A,
      scene: I,
      objectPass: P.objectPass,
      backgroundOpacity: Number(((p = P.background) == null ? void 0 : p.opacity) ?? 1),
      showMaskTint: ((N = t == null ? void 0 : t.overlay) == null ? void 0 : N.showMaskTint) === !0
    };
  }
  const e = t.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t.textures) ? t.textures : [], r = t.layers || {}, a = Fo({
    objectPass: {
      selectedId: (e == null ? void 0 : e.selectedId) ?? null,
      hoveredId: (e == null ? void 0 : e.hoveredId) ?? null,
      objects: [
        ...nl(e, n),
        ...sh({
          paintSource: t.paintSource || r.paintSource || null,
          paintRevision: t.paintRevision || r.paintRevision || "",
          paintOptions: t.paintOptions || null,
          maskSource: t.maskSource || r.maskSource || null,
          maskRevision: t.maskRevision || r.maskRevision || "",
          maskOptions: t.maskOptions || null,
          rasterEntries: t.rasterEntries || []
        })
      ]
    }
  }).objectPass;
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
    objectPass: a,
    backgroundOpacity: Number(t.backgroundOpacity ?? 1),
    showMaskTint: t.showMaskTint === !0
  };
}
function H1(t) {
  let e = null;
  function n(s = {}) {
    const u = z1(s);
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
      objectPass: u.objectPass,
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
function Na(t = {}) {
  const e = typeof (t == null ? void 0 : t.rendererFactory) == "function" ? t.rendererFactory : (A) => A1(A), n = typeof (t == null ? void 0 : t.targetPoolFactory) == "function" ? t.targetPoolFactory : () => C1(), r = typeof (t == null ? void 0 : t.stateControllerFactory) == "function" ? t.stateControllerFactory : (A) => H1(A), a = e(t), s = (t == null ? void 0 : t.targetCanvas) || null, u = n();
  let f = null;
  const g = r({
    syncState(A = {}) {
      if (typeof a.syncState == "function") {
        const O = { ...A }, R = a.syncState(O);
        return R && (f = O, R);
      }
      return f = { ...A }, !0;
    }
  });
  function y(A = {}) {
    return g.sync(A);
  }
  function w(A = {}, O = {}) {
    return f ? a.renderScene({
      ...f,
      view: A,
      width: O.width,
      height: O.height,
      dpr: O.dpr,
      backgroundOpacity: O.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: O.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function p(A, O, R = {}, C = {}) {
    if (!O) return !1;
    const T = w(R, {
      ...C,
      width: O.w,
      height: O.h
    });
    return T ? A ? (A.canvas && T === A.canvas || A.drawImage(T, O.x, O.y, O.w, O.h), !0) : !!s && T === s : !1;
  }
  function N(A, O = {}, R = {}) {
    const C = Number(R.width || 0), T = Number(R.height || 0);
    if (!(C > 0) || !(T > 0)) return null;
    const W = u.ensureTarget(A, C, T);
    if (!W) return null;
    const L = w(O, {
      ...R,
      width: C,
      height: T
    });
    return L ? (W.ctx.clearRect(0, 0, W.canvas.width, W.canvas.height), W.ctx.drawImage(L, 0, 0, W.canvas.width, W.canvas.height), W.canvas) : null;
  }
  function P(A) {
    u.clearTarget(A);
  }
  function E() {
    var A;
    u.dispose(), (A = a.dispose) == null || A.call(a), f = null;
  }
  function I() {
    f = null, g.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: y,
    renderView: w,
    renderToContext: p,
    renderToTarget: N,
    clearTarget: P,
    snapshotState: g.snapshot,
    clearState: I,
    dispose: E
  };
}
function fi(t, e) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(t)), n.height = Math.max(1, Math.round(e));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function j1() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function cf(t, e = 8) {
  var w;
  const n = (w = t == null ? void 0 : t.getContext) == null ? void 0 : w.call(t, "2d"), r = Number((t == null ? void 0 : t.width) || 0), a = Number((t == null ? void 0 : t.height) || 0);
  if (!n || r < 1 || a < 1) return null;
  const s = n.getImageData(0, 0, r, a).data;
  let u = r, f = a, g = -1, y = -1;
  for (let p = 0; p < a; p += 1)
    for (let N = 0; N < r; N += 1)
      s[(p * r + N) * 4 + 3] <= e || (N < u && (u = N), p < f && (f = p), N > g && (g = N), p > y && (y = p));
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
function rl(t, e) {
  const n = Math.max(1, Math.ceil(t)), r = Math.max(1, Math.ceil(e));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const a = document.createElement("canvas");
  return a.width = n, a.height = r, a;
}
function zn(t, e, n) {
  if (!t) return fi(e, n);
  const r = Math.max(1, Math.round(e)), a = Math.max(1, Math.round(n));
  return (t.canvas.width !== r || t.canvas.height !== a) && (t.canvas.width = r, t.canvas.height = a, t.ctx.imageSmoothingEnabled = !0), t;
}
function ce(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let rc = null, ic = null, lf = null, uf = null, Zt = null, Ki = null, Ke = null, vr = null;
function U1() {
  if (ic) return ic;
  const t = 6, e = 17, n = document.createElement("canvas");
  n.width = e, n.height = e;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e, e), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = t, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(e, e), r.moveTo(-e / 2, e / 2), r.lineTo(e / 2, e + e / 2), r.moveTo(e / 2, -e / 2), r.lineTo(e + e / 2, e / 2), r.stroke(), ic = n, n;
}
function ai(t, e) {
  if (!t || !e) return;
  const n = e.width, r = e.height;
  rc = zn(rc, n, r);
  const a = rc;
  ce(a), a.ctx.drawImage(e, 0, 0), a.ctx.globalCompositeOperation = "source-in", uf !== a.ctx && (lf = a.ctx.createPattern(U1(), "repeat"), uf = a.ctx), a.ctx.fillStyle = lf, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(a.canvas, 0, 0), t.restore();
}
function B1(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function G1(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function K1(t, e) {
  const n = Number(t == null ? void 0 : t.radiusValue), r = String((t == null ? void 0 : t.radiusModel) || "").trim(), a = (e == null ? void 0 : e.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function W1(t, e) {
  const n = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * e * 2);
  const r = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * e * 2);
}
const de = /* @__PURE__ */ new Map(), il = 128;
function q1(t, e, n, r, a, s) {
  const u = Math.max(1, Math.round(t)), f = Math.max(0, Math.min(1, e)), g = `${u}:${f.toFixed(2)}:${n}:${r}:${a}:${s.toFixed(3)}`;
  if (de.has(g)) {
    const R = de.get(g);
    return de.delete(g), de.set(g, R), R;
  }
  de.size >= il && de.delete(de.keys().next().value);
  const y = u * 2 + 2, w = u + 1, p = rl(y, y), N = p.getContext("2d"), P = f * u, E = u + 1, I = `rgba(${n},${r},${a},${s})`, A = `rgba(${n},${r},${a},0)`, O = N.createRadialGradient(w, w, P, w, w, E);
  return O.addColorStop(0, I), O.addColorStop(1, A), N.fillStyle = O, N.fillRect(0, 0, y, y), de.set(g, p), p;
}
function Y1(t, e, n, r, a, s, u) {
  const { r: f, g, b: y, a: w } = r, p = Math.max(2, Math.ceil(t) * 2), N = Math.max(2, Math.ceil(e) * 2), P = Math.max(0, a), E = Math.max(0, Math.min(0.99, s)), I = Math.max(0, Math.min(1, u ?? 0)), A = `chisel:${p}:${N}:${n.toFixed(2)}:${f}:${g}:${y}:${w.toFixed(3)}:${P.toFixed(2)}:${E.toFixed(2)}:${I.toFixed(2)}`;
  if (de.has(A)) {
    const Q = de.get(A);
    return de.delete(A), de.set(A, Q), Q;
  }
  de.size >= il && de.delete(de.keys().next().value);
  const O = rl(p, N), R = O.getContext("2d"), C = R.createImageData(p, N), T = C.data, W = Math.max(0, t - e), L = Math.max(0, Math.min(1, n)), dt = 1 + P;
  for (let Q = 0; Q < N; Q++)
    for (let Pt = 0; Pt < p; Pt++) {
      const z = Pt + 0.5 - t, ct = Q + 0.5 - e, it = Math.max(Math.abs(z) - W, 0), bt = Math.hypot(it, ct) / e;
      if (bt >= 1) continue;
      const J = bt <= L ? 1 : Math.max(0, (1 - bt) / Math.max(1e-4, 1 - L)), ot = 1 - bt, lt = 1 + P * (1 - ot) * (1 - ot), q = 1 - E * ot * ot, ut = lt * q / dt;
      let St = 1;
      if (I > 0) {
        const ne = Math.floor((ct + e) / 1.5), Se = Math.floor((z + t) / 8), Be = zr(wi(ne * 41 + 500, Se * 19 + 300));
        St = 1 - I * 0.42 * Be;
      }
      const Ct = Math.round(255 * Math.min(1, w * J * ut * St));
      if (Ct <= 0) continue;
      const Nt = (Q * p + Pt) * 4;
      T[Nt] = f, T[Nt + 1] = g, T[Nt + 2] = y, T[Nt + 3] = Ct;
    }
  return R.putImageData(C, 0, 0), de.set(A, O), O;
}
function wi(t, e) {
  const n = Math.trunc(Math.round(t * 4)), r = Math.trunc(Math.round(e * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a >>> 0;
}
function zr(t) {
  let e = t + 1831565813 >>> 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function X1(t, e, n, r, a, s, u) {
  const f = t + 0.5 - n, g = e + 0.5 - r, y = Math.max(0, n - r), w = Math.max(Math.abs(f) - y, 0), p = Math.hypot(w, g) / r;
  if (p >= 1) return 0;
  const N = zr(wi(t * 17 + 3, e * 13 + 7)), P = p + s * 0.22 * (N - 0.5);
  if (P >= 1) return 0;
  const E = P <= a ? 1 : Math.max(0, (1 - P) / Math.max(1e-4, 1 - a)), I = Z1(t, e, f, g, n, r), A = s * 0.55;
  if (I < A) return 0;
  const R = 0.45 + 0.55 * ((I - A) / Math.max(1e-4, 1 - A));
  return Math.round(255 * Math.min(1, u * E * R));
}
function Z1(t, e, n, r, a, s) {
  const u = Math.floor((n + a) / 3), f = Math.floor((r + s) / 2), g = zr(wi(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + a) / 1.5), w = Math.floor((r + s) / 1.5), p = zr(wi(y * 23 + 800, w * 29 + 500)), N = zr(wi(t * 3 + 100, e * 5 + 200));
  return g * 0.55 + p * 0.3 + N * 0.15;
}
function J1(t, e, n, r, a) {
  const { r: s, g: u, b: f, a: g } = r, y = Math.max(2, Math.ceil(t) * 2), w = Math.max(2, Math.ceil(e) * 2), p = Math.max(0, Math.min(1, a)), N = `crayon:${y}:${w}:${n.toFixed(2)}:${s}:${u}:${f}:${g.toFixed(3)}:${p.toFixed(2)}`;
  if (de.has(N)) {
    const R = de.get(N);
    return de.delete(N), de.set(N, R), R;
  }
  de.size >= il && de.delete(de.keys().next().value);
  const P = rl(y, w), E = P.getContext("2d"), I = E.createImageData(y, w), A = I.data, O = Math.max(0, Math.min(1, n));
  for (let R = 0; R < w; R++)
    for (let C = 0; C < y; C++) {
      const T = X1(C, R, t, e, O, p, g);
      if (T <= 0) continue;
      const W = (R * y + C) * 4;
      A[W] = s, A[W + 1] = u, A[W + 2] = f, A[W + 3] = T;
    }
  return E.putImageData(I, 0, 0), de.set(N, P), P;
}
function ch(t, e, n) {
  var I, A;
  const r = String((e == null ? void 0 : e.stampKind) || "round"), a = K1(e, n), s = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), u = Q1(e), f = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), g = Number(((I = e == null ? void 0 : e.angle) == null ? void 0 : I.value) ?? 0), y = W1(e, a), w = String(((A = e == null ? void 0 : e.targetSpace) == null ? void 0 : A.viewMode) || ""), p = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && w !== "unwrap", N = e == null ? void 0 : e.scatter, P = N ? { radius: Number(N.radius ?? 1.5), count: Math.max(1, Math.round(N.count ?? 6)) } : null;
  let E;
  if (r === "chisel") {
    const O = a * f, R = a, C = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), T = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), W = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    E = Y1(O, R, s, u, C, T, W);
  } else if (r === "crayon") {
    const O = a * f, R = a, C = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    E = J1(O, R, s, u, C);
  } else
    E = q1(a, s, u.r, u.g, u.b, u.a);
  return { ctx: t, stampTex: E, radiusPx: a, spacingPx: y, desc: n, aspect: f, angle: g, stampKind: r, scatter: P, latitudeCorrection: p };
}
function Q1(t) {
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
function ty(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const r = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${a})`;
}
function ff(t, e, n, r, a) {
  const s = t.angle, u = t.desc.width;
  function f(y, w) {
    s === 0 ? t.ctx.drawImage(t.stampTex, y - a, w - r, a * 2, r * 2) : (t.ctx.save(), t.ctx.translate(y, w), t.ctx.rotate(s), t.ctx.drawImage(t.stampTex, -a, -r, a * 2, r * 2), t.ctx.restore());
  }
  f(e, n);
  const g = s === 0 ? a : a * Math.abs(Math.cos(s)) + r * Math.abs(Math.sin(s));
  e - g < 0 && f(e + u, n), e + g > u && f(e - u, n);
}
function al(t, e, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (t.scatter) {
    const { radius: y, count: w } = t.scatter, p = y * t.radiusPx * a, N = wi(e, n);
    for (let P = 0; P < w; P++) {
      const E = zr(N + P * 2) * Math.PI * 2, I = Math.sqrt(zr(N + P * 2 + 1)) * p, A = e + Math.cos(E) * I, O = n + Math.sin(E) * I, R = Math.max(0.5, t.radiusPx * a * 0.48), C = (0.5 - O / Math.max(1, t.desc.height)) * Math.PI, T = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(C)) : 1, W = R * t.aspect * T;
      ff(t, A, O, R, W);
    }
    return;
  }
  const s = Math.max(0.5, t.radiusPx * a), u = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, f = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, g = s * t.aspect * f;
  ff(t, e, n, s, g);
}
function df(t, e, n) {
  const r = G1(e);
  if (!t || r.length === 0) return;
  const a = n.width, s = n.height, u = ch(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const f = [];
  for (let N = 0; N < r.length; N++) {
    let P = Number(r[N].u || 0) * a;
    const E = Number(r[N].v || 0) * s;
    N > 0 && Math.abs(P - f[N - 1].x) > a * 0.5 && (P += P < f[N - 1].x ? a : -a), f.push({ x: P, y: E });
  }
  if (al(u, f[0].x, f[0].y, 1), f.length === 1) {
    t.restore();
    return;
  }
  let g = f[0], y = f[0], w = f[0], p = 0;
  for (let N = 1; N < f.length; N++) {
    const P = f[N], E = { x: (y.x + P.x) * 0.5, y: (y.y + P.y) * 0.5 };
    N === 1 ? p = va(u, w.x, w.y, E.x, E.y, p) : p = $o(u, g, w, E, P, p), g = y, y = P, w = E;
  }
  f.length === 2 ? va(u, w.x, w.y, y.x, y.y, p) : $o(u, g, w, y, y, p), t.restore();
}
function Mo(t, e, n) {
  var p;
  const r = Array.isArray((p = e == null ? void 0 : e.geometry) == null ? void 0 : p.points) ? e.geometry.points : [];
  if (!t || r.length < 3) return;
  const a = n.width, s = n.height, u = ty(e), f = [];
  let g = 1 / 0, y = -1 / 0;
  for (let N = 0; N < r.length; N++) {
    const P = B1(r[N]);
    let E = Number(P.x || 0) * a;
    N > 0 && Math.abs(E - f[N - 1].x) > a * 0.5 && (E += E < f[N - 1].x ? a : -a), f.push({ x: E, y: Number(P.y || 0) * s }), E < g && (g = E), E > y && (y = E);
  }
  function w(N) {
    t.beginPath(), t.moveTo(f[0].x + N, f[0].y);
    for (let P = 1; P < f.length; P++) t.lineTo(f[P].x + N, f[P].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = u, w(0), g < 0 && w(a), y > a && w(-a), t.restore();
}
function Ja(t, e, n) {
  var u;
  if (String(((u = e == null ? void 0 : e.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Mo(t, e, n);
    return;
  }
  const s = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  s >= 0.999 ? df(t, e, n) : (Ki = zn(Ki, n.width, n.height), ce(Ki), df(Ki.ctx, e, n), t.save(), t.globalAlpha = s, t.drawImage(Ki.canvas, 0, 0), t.restore());
}
function _r(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function va(t, e, n, r, a, s) {
  const u = r - e, f = a - n, g = Math.hypot(u, f);
  if (g < 1e-9) return s;
  let y = t.spacingPx - s;
  for (; y <= g; ) {
    const w = y / g;
    al(t, e + u * w, n + f * w, 1), y += t.spacingPx;
  }
  return g - y + t.spacingPx;
}
function $o(t, e, n, r, a, s) {
  const f = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, g = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, w = 0, p = f, N = p + g, P = N + y, E = N - p, I = 16;
  let A = s, O = n.x, R = n.y;
  for (let C = 1; C <= I; C++) {
    const T = p + E * C / I, W = ((p - T) * e.x + (T - w) * n.x) / (p - w), L = ((p - T) * e.y + (T - w) * n.y) / (p - w), dt = ((N - T) * n.x + (T - p) * r.x) / (N - p), Q = ((N - T) * n.y + (T - p) * r.y) / (N - p), Pt = ((P - T) * r.x + (T - N) * a.x) / (P - N), z = ((P - T) * r.y + (T - N) * a.y) / (P - N), ct = ((N - T) * W + (T - w) * dt) / (N - w), it = ((N - T) * L + (T - w) * Q) / (N - w), _t = ((P - T) * dt + (T - p) * Pt) / (P - p), bt = ((P - T) * Q + (T - p) * z) / (P - p), J = ((N - T) * ct + (T - p) * _t) / (N - p), ot = ((N - T) * it + (T - p) * bt) / (N - p);
    A = va(t, O, R, J, ot, A), O = J, R = ot;
  }
  return A;
}
function ey(t, e, n, r) {
  const a = t.currentStroke.ctx;
  if (!a) return;
  const s = t.descriptor, u = s.width, f = n * s.height, g = t.activeStroke;
  let y = e * u;
  if (g && Math.abs(y - g.prev.x) > u * 0.5 && (y += y < g.prev.x ? u : -u), !g) {
    const P = ch(a, r, s), E = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), I = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), A = String((r == null ? void 0 : r.toolKind) || "") === "eraser", O = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", al(P, y, f, 1), t.activeStroke = {
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
      strokeOpacity: E,
      velocityWidthFactor: I,
      distSinceStamp: 0,
      isEraser: A,
      layerKind: O,
      pointCount: 1
    }, t.displayDirty = !0;
    return;
  }
  const w = (g.prev.x + y) * 0.5, p = (g.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const N = {
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
  g.pointCount === 1 ? g.distSinceStamp = va(N, g.lastMidX, g.lastMidY, w, p, g.distSinceStamp) : g.distSinceStamp = $o(
    N,
    g.pprev,
    { x: g.lastMidX, y: g.lastMidY },
    { x: w, y: p },
    { x: y, y: f },
    g.distSinceStamp
  ), g.pprev = g.prev, g.prev = { x: y, y: f }, g.lastMidX = w, g.lastMidY = p, g.pointCount++, t.displayDirty = !0;
}
function Nc(t = {}) {
  const e = Math.max(1, Math.round(Number((t == null ? void 0 : t.width) || 2048))), n = Math.max(1, Math.round(Number((t == null ? void 0 : t.height) || 1024))), r = { kind: "ERP_GLOBAL", width: e, height: n }, a = /* @__PURE__ */ new Map(), s = fi(e, n), u = {
    descriptor: r,
    committedMask: fi(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: fi(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, g = fi(e, n);
  let y = null, w = "", p = null;
  function N(z) {
    return {
      actionGroupId: z,
      descriptor: r,
      committedPaint: fi(e, n),
      currentStroke: s,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function P(z) {
    let ct = a.get(z);
    return ct || (ct = N(z), a.set(z, ct)), ct;
  }
  function E(z) {
    return w === "mask" ? u : y ? P(y) : f;
  }
  function I(z) {
    var q;
    const ct = !p || p.length !== z.length || z.some((ut, St) => ut !== p[St]), it = w === "paint" && ((q = y ? a.get(y) : f) == null ? void 0 : q.activeStroke) || null, _t = w === "mask", bt = u.activeStroke;
    let J = u.displayDirty || f.displayDirty || ct;
    for (const ut of z) {
      const St = a.get(ut);
      if (St != null && St.displayDirty) {
        J = !0;
        break;
      }
    }
    if ((it || _t && bt) && (J = !0), !J) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const ut of z) {
      const St = a.get(ut);
      St && (St.displayDirty = !1);
    }
    p = [...z];
    const ot = g.ctx;
    ce(g);
    const lt = !!(it != null && it.isEraser);
    for (const ut of z) {
      const St = a.get(ut);
      if (!St) continue;
      const Nt = y === St.actionGroupId && w === "paint" ? St.activeStroke : null;
      if (lt)
        Zt = zn(Zt, e, n), ce(Zt), Zt.ctx.drawImage(St.committedPaint.canvas, 0, 0), _r(Zt.ctx, s.canvas), ot.drawImage(Zt.canvas, 0, 0);
      else if (ot.drawImage(St.committedPaint.canvas, 0, 0), Nt) {
        const ne = St.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Nt.strokeOpacity ?? 1));
        ot.save(), ot.globalAlpha = ne, ot.drawImage(s.canvas, 0, 0), ot.restore();
      }
    }
    _t && (bt != null && bt.isEraser) ? (Zt = zn(Zt, e, n), ce(Zt), Zt.ctx.drawImage(u.committedMask.canvas, 0, 0), _r(Zt.ctx, s.canvas), ai(ot, Zt.canvas)) : (ai(ot, u.committedMask.canvas), _t && bt && ai(ot, s.canvas));
  }
  function A(z) {
    var it, _t, bt, J, ot;
    for (const lt of a.values())
      ce(lt.committedPaint), ce(lt.currentStroke), lt.activeStroke = null, lt.displayDirty = !0;
    ce(u.committedMask), ce(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, p = null;
    const ct = [
      ...Array.isArray((_t = (it = z == null ? void 0 : z.painting) == null ? void 0 : it.paint) == null ? void 0 : _t.strokes) ? z.painting.paint.strokes : [],
      ...Array.isArray((J = (bt = z == null ? void 0 : z.painting) == null ? void 0 : bt.mask) == null ? void 0 : J.strokes) ? z.painting.mask.strokes : []
    ];
    for (const lt of ct) {
      if (((ot = lt == null ? void 0 : lt.targetSpace) == null ? void 0 : ot.kind) !== "ERP_GLOBAL") continue;
      const q = String((lt == null ? void 0 : lt.layerKind) || "paint"), St = String((lt == null ? void 0 : lt.toolKind) || "pen") === "eraser";
      if (q === "mask") {
        const Ct = u.descriptor;
        St ? (Zt = zn(Zt, Ct.width, Ct.height), ce(Zt), Ja(Zt.ctx, lt, Ct), _r(u.committedMask.ctx, Zt.canvas)) : Ja(u.committedMask.ctx, lt, Ct);
        continue;
      }
      if (St) {
        Zt = zn(Zt, r.width, r.height), ce(Zt), Ja(Zt.ctx, lt, r);
        for (const Ct of a.values())
          _r(Ct.committedPaint.ctx, Zt.canvas), Ct.displayDirty = !0;
      } else {
        const Ct = String((lt == null ? void 0 : lt.actionGroupId) || "__default__"), Nt = P(Ct), ne = Nt.descriptor;
        Ja(Nt.committedPaint.ctx, lt, ne), Nt.displayDirty = !0;
      }
    }
    I([...a.keys()]);
  }
  function O(z, ct) {
    w = String((z == null ? void 0 : z.layerKind) || "");
    const it = String((z == null ? void 0 : z.toolKind) || "") === "eraser";
    if (w === "mask")
      y = null, ce(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const _t = it ? f : P(String((z == null ? void 0 : z.actionGroupId) || "__default__"));
      y = it ? "" : String((z == null ? void 0 : z.actionGroupId) || "__default__"), ce(_t.currentStroke), _t.activeStroke = null, _t.displayDirty = !0;
    }
  }
  function R(z, ct) {
    var q;
    const it = String((z == null ? void 0 : z.layerKind) || "paint"), _t = String((z == null ? void 0 : z.toolKind) || "") === "eraser", bt = it === "mask" ? u : _t ? f : P(String((z == null ? void 0 : z.actionGroupId) || y || "__default__")), J = bt.activeStroke, ot = bt.descriptor;
    if (J && J.pointCount > 1) {
      const ut = bt.currentStroke.ctx;
      ut.globalCompositeOperation = "source-over";
      const St = {
        ctx: ut,
        stampTex: J.stampTex,
        radiusPx: J.radiusPx,
        spacingPx: J.spacingPx,
        desc: ot,
        aspect: J.aspect,
        angle: J.angle,
        stampKind: J.stampKind,
        scatter: J.scatter,
        latitudeCorrection: J.latitudeCorrection
      };
      J.pointCount === 2 ? va(St, J.lastMidX, J.lastMidY, J.prev.x, J.prev.y, J.distSinceStamp) : $o(St, J.pprev, { x: J.lastMidX, y: J.lastMidY }, J.prev, J.prev, J.distSinceStamp);
    }
    bt.lassoPreviewActive && (ce(bt.currentStroke), Mo(bt.currentStroke.ctx, z, ot), bt.lassoPreviewActive = !1);
    const lt = it === "mask" ? u.committedMask : bt.committedPaint;
    if (_t && it === "paint")
      for (const ut of a.values())
        _r(ut.committedPaint.ctx, bt.currentStroke.canvas), ut.displayDirty = !0;
    else if (_t)
      _r(lt.ctx, bt.currentStroke.canvas);
    else {
      const ut = Math.max(0, Math.min(1, (J == null ? void 0 : J.strokeOpacity) ?? 1));
      lt.ctx.save(), lt.ctx.globalAlpha = ut, lt.ctx.drawImage(bt.currentStroke.canvas, 0, 0), lt.ctx.restore();
    }
    j1() && (String((z == null ? void 0 : z.toolKind) || ""), String((ot == null ? void 0 : ot.kind) || ""), Number((ot == null ? void 0 : ot.width) || 0), Number((ot == null ? void 0 : ot.height) || 0), String(((q = z == null ? void 0 : z.targetSpace) == null ? void 0 : q.viewMode) || ""), Number((z == null ? void 0 : z.aspect) ?? 1), cf(bt.currentStroke.canvas), cf(lt.canvas), void 0), ce(bt.currentStroke), bt.activeStroke = null, bt.displayDirty = !0, y = null, w = "", I([...a.keys()]);
  }
  function C(z) {
    if (w === "mask")
      ce(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (w === "paint" && !y)
      ce(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const ct = a.get(y);
      ct && (ce(ct.currentStroke), ct.activeStroke = null, ct.lassoPreviewActive = !1, ct.displayDirty = !0);
    }
    y = null, w = "", I([...a.keys()]);
  }
  function T(z, ct) {
    var _t;
    if (w = String((z == null ? void 0 : z.layerKind) || ""), String(((_t = z == null ? void 0 : z.geometry) == null ? void 0 : _t.geometryKind) || "") === "lasso_fill") {
      if (w === "mask")
        ce(u.currentStroke), Mo(u.currentStroke.ctx, z, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const bt = String((z == null ? void 0 : z.toolKind) || "") === "eraser", J = bt ? f : P(String((z == null ? void 0 : z.actionGroupId) || y || "__default__"));
        y = bt ? "" : String((z == null ? void 0 : z.actionGroupId) || y || "__default__"), ce(J.currentStroke), Mo(J.currentStroke.ctx, z, J.descriptor), J.lassoPreviewActive = !0, J.displayDirty = !0;
      }
      I([...a.keys()]);
    }
  }
  function W(z) {
    return I(z ?? [...a.keys()]), {
      displayPaint: g,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function L(z) {
    return a.get(String(z)) ?? null;
  }
  function dt() {
    return [...a.keys()];
  }
  function Q(z) {
    var ot;
    const ct = a.get(String(z));
    if (!ct) return null;
    const it = w === "paint" && y === ct.actionGroupId, _t = w === "paint" && ((ot = y ? a.get(y) : f) == null ? void 0 : ot.activeStroke) || null;
    if (_t != null && _t.isEraser)
      return Ke = zn(Ke, e, n), ce(Ke), Ke.ctx.drawImage(ct.committedPaint.canvas, 0, 0), _r(Ke.ctx, s.canvas), Ke.canvas;
    const bt = it ? ct.activeStroke : null;
    if (!bt) return ct.committedPaint.canvas;
    Ke = zn(Ke, e, n), ce(Ke), Ke.ctx.drawImage(ct.committedPaint.canvas, 0, 0);
    const J = ct.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, bt.strokeOpacity ?? 1));
    return Ke.ctx.save(), Ke.ctx.globalAlpha = J, Ke.ctx.drawImage(s.canvas, 0, 0), Ke.ctx.restore(), Ke.canvas;
  }
  function Pt() {
    return vr = zn(vr, e, n), ce(vr), ai(vr.ctx, u.committedMask.canvas), w === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Zt = zn(Zt, e, n), ce(Zt), Zt.ctx.drawImage(u.committedMask.canvas, 0, 0), _r(Zt.ctx, s.canvas), ce(vr), ai(vr.ctx, Zt.canvas)) : ai(vr.ctx, s.canvas)), vr.canvas;
  }
  return {
    rebuildCommitted: A,
    beginStroke: O,
    appendStrokePoint: ey,
    updateActiveStroke: T,
    commitActiveStroke: R,
    cancelActiveStroke: C,
    getErpTarget: W,
    ensureTarget: E,
    getGroupTarget: L,
    getGroupDisplayCanvas: Q,
    getMaskDisplayCanvas: Pt,
    getAllGroupIds: dt
  };
}
function U(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function ac(t, e, n) {
  const r = Number(t);
  return Number.isFinite(r) ? Math.max(Number(e), Math.min(Number(n), r)) : Number(e);
}
function Ye(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function ny(t, e) {
  let n = Ye(e) - Ye(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const hf = Math.PI / 180, pf = 0.12, ry = 3, iy = 35, ay = 140, Ji = 100, oy = 20, gf = 0.8;
function sy(t, e, n) {
  const r = Math.max(1, Number(e || 1)), a = Math.max(1, Number(n || 1)), s = U(Number(t || Ji), 1, 179) * hf;
  return 2 * Math.atan(Math.tan(s * 0.5) * (a / r)) / hf;
}
function cy(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function us(t = {}) {
  const e = typeof t.getView == "function" ? t.getView : (() => ({ yaw: 0, pitch: 0, fov: Ji })), n = typeof t.setView == "function" ? t.setView : (() => {
  }), r = typeof t.getInvert == "function" ? t.getInvert : (() => ({ x: 1, y: 1 })), a = typeof t.getUnwrapRect == "function" ? t.getUnwrapRect : (() => ({ w: 1, h: 1 })), s = typeof t.getViewportSize == "function" ? t.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof t.onInteraction == "function" ? t.onInteraction : (() => {
  }), f = typeof t.onDebug == "function" ? t.onDebug : null, g = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(O, R = null) {
    f && f(O, R);
  }
  function w(O, R, C = null, T = performance.now()) {
    return g.drag.active = !0, g.drag.lastX = Number(O || 0), g.drag.lastY = Number(R || 0), g.drag.lastTs = Number(T || performance.now()), g.drag.pointerId = C, g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.lastTs = g.drag.lastTs, g.velHistory = [], y("drag", { phase: "start", x: g.drag.lastX, y: g.drag.lastY, pointerId: C }), !0;
  }
  function p(O, R, C = "pano", T = performance.now()) {
    if (!g.drag.active) return !1;
    const W = Number(T || performance.now()), L = Number(O), dt = Number(R), Q = L - g.drag.lastX, Pt = dt - g.drag.lastY;
    g.drag.lastX = L, g.drag.lastY = dt, g.drag.lastTs = W;
    const z = r() || { x: 1, y: 1 }, ct = Number(z.x || 1), it = Number(z.y || 1), _t = { ...e() };
    let bt = 0, J = 0;
    if (C === "unwrap") {
      const lt = a() || { w: 1, h: 1 }, q = Math.max(1, Number(lt.w || 1)), ut = Math.max(1, Number(lt.h || 1)), St = Q / q, Ct = Pt / ut;
      bt = -St * 360 * ct, J = Ct * 180 * it;
    } else {
      const lt = s() || { w: 0, h: 0 }, q = Math.max(1, Number(lt.w || 0)), ut = Math.max(1, Number(lt.h || 0));
      if (q > 1 && ut > 1) {
        const St = U(Number(_t.fov || Ji), 1, 179), Ct = U(sy(St, q, ut), 0.1, 179);
        bt = -(Q / q) * St * ct, J = Pt / ut * Ct * it;
      } else
        bt = -Q * pf * ct, J = Pt * pf * it;
    }
    _t.yaw = Ye(Number(_t.yaw || 0) + bt), _t.pitch = U(Number(_t.pitch || 0) + J, -89.9, 89.9), n(_t), g.velHistory.push({ ts: W, yaw: _t.yaw, pitch: _t.pitch });
    let ot = 0;
    for (; ot < g.velHistory.length - 1 && g.velHistory[ot].ts < W - 100; ) ot++;
    return ot > 0 && g.velHistory.splice(0, ot), g.inertia.active = !1, g.inertia.lastTs = W, u(), y("drag", { phase: "move", dx: Q, dy: Pt, dYaw: bt, dPitch: J }), !0;
  }
  function N(O = performance.now()) {
    if (!g.drag.active) return !1;
    g.drag.active = !1;
    const R = Number(O || performance.now());
    g.drag.lastTs = R;
    const C = g.velHistory.filter((W) => R - W.ts <= 80);
    if (C.length >= 2) {
      const W = C[0], L = C.at(-1), dt = Math.max(1e-3, (L.ts - W.ts) / 1e3);
      let Q = L.yaw - W.yaw;
      Q > 180 && (Q -= 360), Q < -180 && (Q += 360), g.inertia.vx = Q / dt, g.inertia.vy = (L.pitch - W.pitch) / dt;
    } else
      g.inertia.vx = 0, g.inertia.vy = 0;
    g.velHistory = [];
    const T = Math.hypot(g.inertia.vx, g.inertia.vy);
    return g.inertia.active = T > oy, g.inertia.lastTs = R, y("drag", { phase: "end", speed: T, inertiaActive: g.inertia.active }), !0;
  }
  function P(O = performance.now()) {
    if (!g.inertia.active) return !1;
    const R = Number(O || performance.now()), C = Math.max(1e-3, (R - (g.inertia.lastTs || R)) / 1e3);
    g.inertia.lastTs = R;
    const T = { ...e() };
    T.yaw = Ye(Number(T.yaw || 0) + g.inertia.vx * C), T.pitch = U(Number(T.pitch || 0) + g.inertia.vy * C, -89.9, 89.9);
    const W = Math.exp(-5.5 * C);
    return g.inertia.vx *= W, g.inertia.vy *= W, Math.abs(g.inertia.vx) < gf && Math.abs(g.inertia.vy) < gf && (g.inertia.vx = 0, g.inertia.vy = 0, g.inertia.active = !1), n(T), u(), g.inertia.active;
  }
  function E(O) {
    const R = Math.sign(Number(O || 0));
    if (!R) return !1;
    const C = { ...e() }, T = Number(C.fov || Ji);
    return C.fov = U(T + R * ry, iy, ay), n(C), u(), y("wheel", { deltaSign: R, fovBefore: T, fovAfter: C.fov }), !0;
  }
  function I(O) {
    return E(Math.sign(cy(O)));
  }
  function A() {
    n({ yaw: 0, pitch: 0, fov: Ji }), g.inertia.active = !1, g.inertia.vx = 0, g.inertia.vy = 0, u();
  }
  return {
    state: g,
    startDrag: w,
    moveDrag: p,
    endDrag: N,
    stepInertia: P,
    applyWheel: E,
    applyWheelEvent: I,
    resetView: A
  };
}
function Mc(t) {
  const e = String(t || "").trim();
  return e ? e === "PanoramaPreview" || e === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(e) : !1;
}
const mf = Math.PI / 180;
function Wi(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) ? n : Number(e);
}
function ly(t) {
  const e = t || {}, n = Wi(e.yaw_deg, 0), r = Wi(e.pitch_deg, 0), a = Wi(e.roll_deg ?? e.rot_deg, 0), s = ac(Wi(e.hFOV_deg, 90), 1, 179), u = ac(Wi(e.vFOV_deg, 60), 1, 179), f = Math.tan(s * mf * 0.5) / Math.max(1e-6, Math.tan(u * mf * 0.5)), g = ac(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: a,
    hfov: s,
    vfov: u,
    aspect: g
  };
}
const lh = 0.28;
function uy(t) {
  const e = t && typeof t == "object" ? t : {}, n = U(Number(e.x0 ?? 0), 0, 1), r = U(Number(e.y0 ?? 0), 0, 1), a = U(Number(e.x1 ?? 1), 0, 1), s = U(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(r, s),
    x1: Math.max(n, a),
    y1: Math.max(r, s)
  };
}
function fy(t, e = {}) {
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
    crop: uy(t.crop),
    opacity: f ? lh : U(Number(t.opacity ?? 1), 0, 1),
    visible: f ? !0 : t.visible !== !1,
    external: r
  };
}
function fs(t, e = {}) {
  var s;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], r = e.includeHidden === !0;
  return {
    stickers: n.map((u) => fy(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: e.selectedId ?? ((s = t == null ? void 0 : t.active) == null ? void 0 : s.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function uh(t, e, n = {}) {
  if (typeof e != "function") return [];
  const r = n.scene || fs(t, n), a = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, s = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var E;
    const g = String((f == null ? void 0 : f.assetId) || "").trim(), y = g || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const w = g ? a[g] : null, p = e(y, w, f);
    if (p instanceof HTMLImageElement && !p.complete) return;
    const N = Number((p == null ? void 0 : p.naturalWidth) || (p == null ? void 0 : p.videoWidth) || (p == null ? void 0 : p.width) || 0), P = Number((p == null ? void 0 : p.naturalHeight) || (p == null ? void 0 : p.videoHeight) || (p == null ? void 0 : p.height) || 0);
    !p || N <= 0 || P <= 0 || (u.add(y), s.push({
      assetId: y,
      source: p,
      revision: String(((E = n.revisionFor) == null ? void 0 : E.call(n, y, w, p)) ?? [
        y,
        Number(p.naturalWidth || p.videoWidth || p.width || 0),
        Number(p.naturalHeight || p.videoHeight || p.height || 0),
        String(p.currentSrc || p.src || "")
      ].join("|"))
    }));
  }), s;
}
function ol(t, e = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((t == null ? void 0 : t.yaw) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch) || 0),
    fovDeg: U(Number((t == null ? void 0 : t.fov) || 100), 1, 179),
    coverageDeg: Number(e || 360) === 180 ? 180 : 360
  };
}
function dy(t, e = 360) {
  return ol(t, e);
}
function hy(t) {
  const e = ly(t || {});
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
const { app: le } = mo;
function kc() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (mo == null ? void 0 : mo.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const jr = Math.PI / 180, Vo = {}, py = { Nu: 24, Nv: 14 }, gy = 10, my = 120;
function yy() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function qi(t) {
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
function by() {
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
function kr(t) {
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
function vy(t) {
  const e = kr(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function fh(t, e, n) {
  vy(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function Pc(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function dh(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function _y(t) {
  return Mc(dh(t));
}
function Hr(t = null) {
  var s, u;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (s = le == null ? void 0 : le.canvas) == null ? void 0 : s.constructor) == null ? void 0 : u.name) || "");
  return [e, r, n, a].join("|");
}
function hh(t, e = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Hr(e)
  } : String(t) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Hr(e)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Hr(e)
  };
}
const ca = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(t) {
    !t || String(t.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(t), this.lastSignature || (this.lastSignature = Hr(t)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(t) {
    t && this.nodes.delete(t), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const t = this.nodes.values().next().value || null, e = Hr(t);
    e !== this.lastSignature && (this.lastSignature = e, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((r) => {
        if (!(!r || String(r.__panoPreviewMode || "") !== "stickers"))
          try {
            r.__panoRebindGeneration = this.generation, String(r.__panoStickersPath || "unknown"), this.generation, ph(r).rebind(r.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function ph(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = r === "cutout" ? "dom" : hh(r, t).chosenPath, s = Pc(t);
      this.activeBackend = s;
      const u = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = t.__panoPreviewNoPreview === !0, g = n.noPreview === !0;
      if (s === a && s !== "none" && u === r && f === g) {
        t.__panoAttachOptions = { ...n, mode: r }, t.__panoPreviewMode = r, t.__panoPreviewNoPreview = g, t.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      s !== "none" && xi(t, { keepMonitor: r === "stickers" }), sb(t, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = Pc(t);
    },
    rebind(n = {}) {
      const r = String(n.mode || (t == null ? void 0 : t.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      xi(t, { keepMonitor: r === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      xi(t), this.activeBackend = "none";
    }
  };
  return t.__panoPreviewController = e, e;
}
function wy(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function xi(t, e = {}) {
  var r, a, s, u, f;
  if (!t) return;
  Ho.unregister(t), wy(t), t.__panoDomPreview, t.__panoLegacyPreviewHooked, t.__panoDomRestore, t.__panoLegacyRestore;
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
      const y = String((g == null ? void 0 : g.name) || ""), w = String((g == null ? void 0 : g.type) || ""), p = kc();
      return !(y === p || w === p || y === "pano_preview" || w === "pano_preview" || y === "preview" && w === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", String(e.reason || ""), e.keepMonitor, e.keepMonitor || ca.unregister(t);
}
function Ur(t, e, n) {
  return { x: t, y: e, z: n };
}
function yf(t, e) {
  return Ur(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Qa(t, e) {
  return Ur(t.x * e, t.y * e, t.z * e);
}
function oc(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function bf(t, e) {
  return Ur(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function to(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Ur(t.x / e, t.y / e, t.z / e);
}
function Rr(t, e) {
  const n = t * jr, r = e * jr, a = Math.cos(r);
  return Ur(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function sl(t, e, n = 0) {
  const r = Rr(t, e), a = Ur(0, 1, 0);
  let s = bf(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Ur(1, 0, 0)), s = to(s);
  let u = to(bf(r, s));
  const f = n * jr, g = Math.cos(f), y = Math.sin(f), w = yf(Qa(s, g), Qa(u, y)), p = yf(Qa(s, -y), Qa(u, g));
  return { fwd: r, right: to(w), up: to(p) };
}
function xy(t, e = "#00ff00") {
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
function Sy(t) {
  var n;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = _a(t, "state_json")) == null ? void 0 : n.value) || "");
}
function cl(t) {
  var u, f;
  const e = Sy(t), n = String(((u = _a(t, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), r = Number(((f = _a(t, "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, a = t.__panoStateCache;
  if (a && a.source === e && a.bg === n && a.coverage === r)
    return a.parsed;
  const s = xy(e, n);
  return s.coverage = r, t.__panoStateCache = { source: e, bg: n, coverage: r, parsed: s }, s;
}
function _a(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function vf(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function gh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Ny(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function mh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function yh(t, e, n = null) {
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
  return !r && n != null && (r = Ny(t == null ? void 0 : t.graph, n)), r;
}
function My(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function ll(t, e = []) {
  const n = My(t), r = [];
  return e.forEach((a) => {
    n.includes(String(a)) && r.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !r.includes(a) && r.push(a);
  }), r.length ? r : e;
}
function _f(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: e, tail: n.length ? n[n.length - 1] : e };
}
function zo(t, e) {
  const n = _f(t), r = _f(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function ky(t, e = ["erp_image", "bg_erp"]) {
  var g;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return [];
  const a = ll(t, e).map((y) => n.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(y))).filter((y) => y >= 0), s = n.map((y, w) => ({ input: y, idx: w })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...a, ...s])], f = [];
  for (const y of u) {
    const w = yh(t, y);
    if ((w == null ? void 0 : w.id) != null) {
      f.push(String(w.id));
      continue;
    }
    const p = (g = n[y]) == null ? void 0 : g.link;
    if (p == null) continue;
    const N = gh(t == null ? void 0 : t.graph, p), { originId: P } = mh(N);
    P != null && f.push(String(P));
  }
  return [...new Set(f)];
}
const Ho = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = Ze) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((s) => {
        var f, g, y, w, p;
        if (!s) return;
        zo(r, s == null ? void 0 : s.id), ky(s, ["erp_image", "bg_erp"]).some((N) => zo(r, N)), Cc(s), (g = (f = s.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (y = s.setDirtyCanvas) == null || y.call(s, !0, !0), (p = (w = s.graph) == null ? void 0 : w.setDirtyCanvas) == null || p.call(w, !0, !0), String(s.__panoPreviewMode || ""), String(s.__panoPreviewMode || "");
      });
    }, Ze.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var t;
    !this.bound || !this.listener || !((t = Ze) != null && t.removeEventListener) || (Ze.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(t) {
    t && (this.nodes.add(t), this.ensureBound());
  },
  unregister(t) {
    t && this.nodes.delete(t), this.nodes.size || this.ensureUnbound();
  }
};
function jo(t) {
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
  return typeof ((s = Ze) == null ? void 0 : s.apiURL) == "function" ? Ze.apiURL(a) : a;
}
function Py(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Ay(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function Cy(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function bh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Py(e)) return [e];
  const { filename: n, subfolder: r } = Ay(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => jo({
    filename: n,
    subfolder: r,
    type: s
  }));
  return Cy([...a, e]);
}
function Iy(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? jo({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function Ac(t) {
  const e = le == null ? void 0 : le.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  const a = n;
  if (e instanceof Map) {
    for (const s of e.keys())
      if (zo(s, a)) return e.get(s);
  } else {
    const s = Object.keys(e);
    for (const u of s)
      if (zo(u, a)) return e[u];
  }
  return null;
}
function Bn(t) {
  if (!t) return "";
  if (typeof t == "string")
    return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Bn(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return jo({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Bn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : jo(t);
}
function vh(t, e) {
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
function Ey(t) {
  const e = [], n = /* @__PURE__ */ new Set(), r = (s) => {
    Array.isArray(s) && s.forEach((u) => e.push(u));
  }, a = (s, u = 0) => {
    !s || u > 3 || n.has(s) || typeof s == "object" && (n.add(s), r(s.images), a(s.output, u + 1), a(s.ui, u + 1), a(s.data, u + 1), a(s.result, u + 1));
  };
  return a(t, 0), e;
}
function Dy(t, e) {
  try {
    const n = Ey(e);
    let r = "";
    for (const a of n)
      if (r = Bn(a), r) break;
    r ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(r || ""), vh(t.__panoOwnOutputSrc, t.__panoOwnOutputRev), t.__panoOwnOutputRev, void 0) : (Object.keys(e || {}), void 0);
  } catch {
  }
}
function Ty(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const r = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), a = Ac(n), s = Array.isArray(a == null ? void 0 : a.images) ? a.images : [], u = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], f = r ? [r, ...s, ...u] : [...s, ...u];
  let g = "";
  for (const O of f)
    if (g = Bn(O), g) break;
  if (!g) return null;
  const y = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), p = bh(g).map((O) => vh(O, y));
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
  const E = new Image();
  let I = -1;
  const A = () => {
    if (I += 1, I >= p.length) {
      t.__panoOwnOutputImageCache === P && (P.pendingSrc = "", P.pendingImg = null);
      return;
    }
    E.src = p[I];
  };
  return E.onload = () => {
    var O;
    t.__panoOwnOutputImageCache === P && P.pendingImg === E && P.pendingSrc === N && (P.src = N, P.img = E, P.pendingSrc = "", P.pendingImg = null), e == null || e(), (O = t.setDirtyCanvas) == null || O.call(t, !0, !0);
  }, E.onerror = () => {
    if (I + 1 >= p.length) {
      t.__panoOwnOutputImageCache === P && P.pendingImg === E && (P.pendingSrc = "", P.pendingImg = null);
      return;
    }
    A();
  }, P.pendingSrc = N, P.pendingImg = E, A(), P.img && (P.img.complete || P.img.naturalWidth || P.img.width) ? P.img : E;
}
function Ry(t, e = []) {
  var y, w;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = ll(t, e).map((p) => n.findIndex((N) => String((N == null ? void 0 : N.name) || "") === String(p))).filter((p) => p >= 0), s = n.map((p, N) => ({ input: p, idx: N })).filter(({ input: p }) => String((p == null ? void 0 : p.type) || "").toUpperCase() === "IMAGE").map(({ idx: p }) => p), u = [.../* @__PURE__ */ new Set([...a, ...s])];
  for (const p of u) {
    const N = n[p], P = N == null ? void 0 : N.link;
    if (P == null) continue;
    const E = gh(t.graph, P), { originId: I, originSlot: A } = mh(E);
    if (I == null) continue;
    const O = yh(t, p, I);
    if (!O) continue;
    const R = Number(A || 0), C = Ac((O == null ? void 0 : O.id) ?? I), T = Array.isArray(C == null ? void 0 : C.images) ? C.images : [];
    if (T.length) {
      const Q = [];
      R >= 0 && R < T.length && Q.push(T[R]), Q.push(...T);
      for (const Pt of Q) {
        const z = Bn(Pt);
        if (z)
          return String((N == null ? void 0 : N.name) || ""), { src: z, sourceType: "nodeOutputs", inputName: String((N == null ? void 0 : N.name) || "") };
      }
    }
    let W = [];
    try {
      W = typeof (le == null ? void 0 : le.getNodeImageUrls) == "function" ? le.getNodeImageUrls(O) || [] : [];
    } catch {
      W = [];
    }
    if (Array.isArray(W) && W.length) {
      const Q = [];
      R >= 0 && R < W.length && Q.push(W[R]), Q.push(...W);
      for (const Pt of Q) {
        const z = Bn(Pt);
        if (z)
          return String((N == null ? void 0 : N.name) || ""), { src: z, sourceType: "appNodeImageUrls", inputName: String((N == null ? void 0 : N.name) || "") };
      }
    }
    const L = Array.isArray(O == null ? void 0 : O.imgs) ? O.imgs : [];
    if (L.length) {
      const Q = [];
      R >= 0 && R < L.length && Q.push(L[R]), Q.push(...L);
      for (const Pt of Q) {
        const z = Bn(Pt);
        if (z)
          return String((N == null ? void 0 : N.name) || ""), { src: z, sourceType: "nodeImgs", inputName: String((N == null ? void 0 : N.name) || "") };
      }
    }
    const dt = (y = O == null ? void 0 : O.widgets) == null ? void 0 : y.find((Q) => String((Q == null ? void 0 : Q.name) || "").toLowerCase() === "image");
    if (dt) {
      let Q = Bn(dt.value);
      if (Q && !Q.includes("/") && !Q.includes(":") && (O.comfyClass === "LoadImage" || O.type === "LoadImage") && (Q = Ze.apiURL(`/view?filename=${encodeURIComponent(Q)}&type=input&subfolder=`)), Q)
        return String((N == null ? void 0 : N.name) || ""), { src: Q, sourceType: "widget", inputName: String((N == null ? void 0 : N.name) || "") };
    }
  }
  const f = Ac(t == null ? void 0 : t.id), g = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && g.push(...f.pano_input_images), Array.isArray((w = f == null ? void 0 : f.ui) == null ? void 0 : w.pano_input_images) && g.push(...f.ui.pano_input_images), g.length > 0)
    for (const p of g) {
      const N = Bn(p);
      if (N)
        return { src: N, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Ly(t, e = []) {
  const n = Ry(t, e), r = String((n == null ? void 0 : n.src) || "").trim();
  if (!r) return null;
  const a = bh(r);
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = e.join("|") || "image", u = t.__panoLinkedInputImageCache.get(s);
  if (u && u.srcRaw === r && u.img) return u.img;
  const f = new Image(), g = { srcRaw: r, resolvedSrc: "", img: f };
  t.__panoLinkedInputImageCache.set(s, g);
  let y = -1;
  const w = () => {
    var N, P;
    if (y += 1, y >= a.length) {
      try {
        (P = (N = t.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || P.call(N, s);
      } catch {
      }
      String((n == null ? void 0 : n.sourceType) || ""), a.length;
      return;
    }
    const p = a[y];
    g.resolvedSrc = p, f.src = p;
  };
  return f.onload = () => {
    var p;
    String(g.resolvedSrc || f.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (p = t.setDirtyCanvas) == null || p.call(t, !0, !0);
  }, f.onerror = (p) => {
    var N, P;
    if (y + 1 < a.length) {
      w();
      return;
    }
    try {
      (P = (N = t.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || P.call(N, s);
    } catch {
    }
    String(g.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((p == null ? void 0 : p.type) || "error");
  }, w(), f;
}
function Uo(t, e = [], n = null) {
  const r = Ly(t, e);
  return r ? (typeof n == "function" && (r.complete && (r.naturalWidth || r.width) || r.addEventListener("load", () => n(), { once: !0 })), r) : null;
}
function Cc(t) {
  var e, n;
  if (t) {
    try {
      (n = (e = t.__panoLinkedInputImageCache) == null ? void 0 : e.clear) == null || n.call(e);
    } catch {
    }
    t.__panoOwnOutputImageCache = null, t.__panoWrappedErpCache = null;
  }
}
function _h(t, e) {
  t.__panoRenderCache || (t.__panoRenderCache = {
    mode: String(e || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = t.__panoRenderCache, r = String(e || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Er(t, e, n = "") {
  const r = _h(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), a = performance.now();
  return e ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < my ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Ic(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), r = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), a = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), s = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || r)), u = n / a, f = r / s, g = Math.min(u, f);
  return Number.isFinite(g) && g > 0 ? g : 1;
}
function wf(t, e, n = 1) {
  const r = Number((e == null ? void 0 : e.x) || 0), a = Number((e == null ? void 0 : e.y) || 0), s = Number((e == null ? void 0 : e.w) || 0), u = Number((e == null ? void 0 : e.h) || 0);
  if (s <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), g = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), s * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), w = r + (s - g) * 0.5, p = a + (u - y) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(w, p, g, y, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", w + g * 0.5, p + y * 0.5 + 0.5), t.restore();
}
function eo(t, e, n = "Open editor and add frame") {
  var a;
  const r = (a = t == null ? void 0 : t.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  r && (r.textContent = String(n || "Open editor and add frame"), r.style.display = e ? "flex" : "none");
}
function Oy(t) {
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
function wh(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), r = Number((t == null ? void 0 : t.y) || 0), a = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), s = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), u = Number(e) > 0 ? Number(e) : 1;
  let f = a, g = a / u;
  return g > s && (g = s, f = s * u), {
    x: n + (a - f) * 0.5,
    y: r + (s - g) * 0.5,
    w: f,
    h: g
  };
}
function Fy(t, e, n, r = 0) {
  if (!t || !e || !n) return !1;
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (a <= 1 || s <= 1) return !1;
  const u = wh(n, a / s);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(r) || 0));
  return f > 0 && (t.fillStyle = `rgba(0,0,0,${f})`, t.fillRect(u.x, u.y, u.w, u.h)), t.restore(), !0;
}
function $y(t, e = null) {
  const r = Array.isArray(t.widgets) ? t.widgets : [];
  let a = 32;
  return r.forEach((s) => {
    var f;
    if (s === e || !s || s.hidden || s.type === "hidden") return;
    let u = 22;
    try {
      const g = typeof s.computeSize == "function" ? s.computeSize(((f = kr(t)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(g) && Number.isFinite(Number(g[1])) && (u = Number(g[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function ko(t) {
  const n = $y(t) + 2, r = 8, a = kr(t), s = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || s < 80 ? null : { x: r, y: n, w: s, h: u };
}
function xh(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const r = String(e || "");
  if (!r) return null;
  const a = Iy(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const s = window.__panoSharedImageCache.get(a);
  if (s != null && s.img)
    return t.__panoPreviewImageCache.set(r, { src: a, img: s.img }), s.img;
  const u = t.__panoPreviewImageCache.get(r);
  if (u && u.src === a) return u.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var g, y, w;
    (y = (g = t.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || y.call(g), (w = t.setDirtyCanvas) == null || w.call(t, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), t.__panoPreviewImageCache.set(r, { src: a, img: f }), f;
}
function Vy(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.__panoStickerSortCache;
  if ((r == null ? void 0 : r.source) === n && Array.isArray(r.sorted)) return r.sorted;
  const a = [...n].sort((s, u) => Number((s == null ? void 0 : s.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function Sh(t, e) {
  return fs(e, {
    selectedId: null,
    hoveredId: null
  });
}
function Nh(t, e, n) {
  return uh(e, (r, a) => xh(t, r, a), { scene: n });
}
function zy(t, e, n, r = 0.45) {
  const a = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3, u = (f) => {
    const g = f.x - a, y = f.y - s, w = Math.hypot(g, y) || 1;
    return { x: f.x + g / w * r, y: f.y + y / w * r };
  };
  return [u(t), u(e), u(n)];
}
function xf(t, e, n, r, a, s, u, f) {
  const g = n.x * (r.y - a.y) + r.x * (a.y - n.y) + a.x * (n.y - r.y);
  if (Math.abs(g) < 1e-6) return;
  const [y, w, p] = zy(s, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(w.x, w.y), t.lineTo(p.x, p.y), t.closePath(), t.clip();
  const N = (s.x * (r.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - r.y)) / g, P = (s.x * (a.x - r.x) + u.x * (n.x - a.x) + f.x * (r.x - n.x)) / g, E = (s.x * (r.x * a.y - a.x * r.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * r.y - r.x * n.y)) / g, I = (s.y * (r.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - r.y)) / g, A = (s.y * (a.x - r.x) + u.y * (n.x - a.x) + f.y * (r.x - n.x)) / g, O = (s.y * (r.x * a.y - a.x * r.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * r.y - r.x * n.y)) / g;
  t.transform(N, I, P, A, E, O), t.drawImage(e, 0, 0), t.restore();
}
function Mh(t, e, n, r) {
  const a = oc(t, e.right), s = oc(t, e.up), u = oc(t, e.fwd);
  if (u <= 1e-4) return null;
  const f = s / u / r, g = a / u / r;
  return { x: n.x + n.w * 0.5 + g * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function kh(t, e, n, r, a, s, u, f = 12, g = 9) {
  var bt;
  const y = U(Number(u.hFOV_deg || 30), 1, 179) * jr, w = U(Number(u.vFOV_deg || 30), 1, 179) * jr, p = Math.tan(y * 0.5), N = Math.tan(w * 0.5), P = u.crop || {}, E = U(Number(P.x0 ?? 0), 0, 1), I = U(Number(P.y0 ?? 0), 0, 1), A = U(Number(P.x1 ?? 1), 0, 1), O = U(Number(P.y1 ?? 1), 0, 1), R = Math.max(1e-4, A - E), C = Math.max(1e-4, O - I), T = sl(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), W = [], L = [], dt = [], Q = [];
  for (let J = 0; J <= g; J++) {
    const ot = J / g, q = (1 - (I + ot * C) * 2) * N;
    for (let ut = 0; ut <= f; ut++) {
      const St = ut / f, Nt = ((E + St * R) * 2 - 1) * p, ne = T.fwd.x + T.right.x * Nt + T.up.x * q, Se = T.fwd.y + T.right.y * Nt + T.up.y * q, Be = T.fwd.z + T.right.z * Nt + T.up.z * q, Ne = Math.hypot(ne, Se, Be) || 1e-8, Ge = ne / Ne, Ce = Se / Ne, an = Be / Ne, on = Ge * r.right.x + Ce * r.right.y + an * r.right.z, yn = Ge * r.up.x + Ce * r.up.y + an * r.up.z, S = Ge * r.fwd.x + Ce * r.fwd.y + an * r.fwd.z;
      if (S <= 1e-4)
        W[J] || (W[J] = []), L[J] || (L[J] = []), W[J][ut] = null, L[J][ut] = null;
      else {
        const D = yn / S / a, $ = on / S / a;
        W[J] || (W[J] = []), L[J] || (L[J] = []), W[J][ut] = n.x + n.w * 0.5 + $ * n.h * 0.5, L[J][ut] = n.y + n.h * 0.5 - D * n.h * 0.5;
      }
      dt[J] || (dt[J] = []), Q[J] || (Q[J] = []), dt[J][ut] = St, Q[J][ut] = ot;
    }
  }
  const Pt = (bt = s.assets) == null ? void 0 : bt[u.asset_id], z = xh(e, u.asset_id, Pt);
  if (!z || !z.complete || !z.naturalWidth) return;
  const ct = Number(z.naturalWidth || z.width || 1), it = Number(z.naturalHeight || z.height || 1), _t = f < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = _t;
  for (let J = 0; J < g; J++)
    for (let ot = 0; ot < f; ot++) {
      const lt = W[J][ot], q = L[J][ot], ut = W[J][ot + 1], St = L[J][ot + 1], Ct = W[J + 1][ot], Nt = L[J + 1][ot], ne = W[J + 1][ot + 1], Se = L[J + 1][ot + 1];
      if (lt === null || ut === null || Ct === null || ne === null) continue;
      const Be = dt[J][ot] * ct, Ne = Q[J][ot] * it, Ge = dt[J][ot + 1] * ct, Ce = Q[J][ot + 1] * it, an = dt[J + 1][ot] * ct, on = Q[J + 1][ot] * it, yn = dt[J + 1][ot + 1] * ct, S = Q[J + 1][ot + 1] * it;
      xf(t, z, { x: Be, y: Ne }, { x: Ge, y: Ce }, { x: yn, y: S }, { x: lt, y: q }, { x: ut, y: St }, { x: ne, y: Se }), xf(t, z, { x: Be, y: Ne }, { x: yn, y: S }, { x: an, y: on }, { x: lt, y: q }, { x: ne, y: Se }, { x: Ct, y: Nt });
    }
}
function Hy(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const r = cl(t), a = ko(t);
  if (!a) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const s = sl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(t.__panoPreviewView.fov || 100) * jr * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(a.x, a.y, a.w, a.h, 8), e.fill(), e.stroke(), e.clip();
  const f = Uo(
    t,
    ll(t, ["erp_image", "bg_erp"]),
    () => {
      var T, W, L;
      (W = (T = t.__panoDomPreview) == null ? void 0 : T.requestDraw) == null || W.call(T), (L = t.setDirtyCanvas) == null || L.call(t, !0, !1);
    }
  ), g = !!(f && f.complete && (f.naturalWidth || f.width)), y = Ch(t), w = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, p = y || w, N = Vo, P = Sh(t, r), E = Nh(t, r, P), I = ol(t.__panoPreviewView, r == null ? void 0 : r.coverage);
  let A = !1;
  if (t.__panoRuntimeCore || (t.__panoRuntimeCore = Na()), g) {
    const T = ls({
      stateRevision: [
        "runtime_panorama_scene",
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0),
        Number((r == null ? void 0 : r.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(E) ? E.map((dt) => `${String((dt == null ? void 0 : dt.assetId) || "")}:${String((dt == null ? void 0 : dt.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: f,
      backgroundRevision: [
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0)
      ].join("|"),
      coverageDeg: Number((r == null ? void 0 : r.coverage) || 360) === 180 ? 180 : 360,
      scene: P,
      textures: E,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), L = t.__panoRuntimeCore.syncState(T) ? t.__panoRuntimeCore.renderToTarget("runtime_preview", I, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    A = !!L, L && e.drawImage(L, a.x, a.y, a.w, a.h);
  }
  const O = p ? 8 : 12, R = p ? 6 : 9, C = Vy(t, r);
  if (!g || C.length === 0) {
    const T = Ic(e == null ? void 0 : e.canvas, a);
    Ph(e, a, s, u, T);
  }
  !A && g && Bo(t, e, a, s, u, f, N), !A && C.length > 0 && C.forEach((T) => kh(e, t, a, s, u, r, T, O, R)), e.restore();
}
function jy(t, e, n, r, a = "preview_scene", s = "") {
  const u = String(
    s || [
      String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
      Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
      Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
    ].join("|")
  );
  return ls({
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
function Po(t, e, n, r) {
  var s, u, f, g, y, w;
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
  const a = By(t, e, r);
  return a || null;
}
function Uy(t, e) {
  var p, N;
  const n = Number(t == null ? void 0 : t.clientX), r = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, s = (p = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : p.call(a), u = (e == null ? void 0 : e.ds) || ((N = le == null ? void 0 : le.canvas) == null ? void 0 : N.ds);
  if (!s || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const g = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(s.left || 0)) / f - Number(g[0] || 0), w = (r - Number(s.top || 0)) / f - Number(g[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(w) ? null : { x: y, y: w };
}
function By(t, e, n) {
  var a, s;
  const r = Uy(e, n || (le == null ? void 0 : le.canvas));
  return r ? {
    x: r.x - Number(((a = t == null ? void 0 : t.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((s = t == null ? void 0 : t.pos) == null ? void 0 : s[1]) || 0)
  } : null;
}
function no(t) {
  if (t.__panoLegacyPreviewHooked) return;
  t.__panoPreviewMode, String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""), kr(t), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", fh(t, 320, 180), di(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var N, P;
    const p = e ? e.apply(this, arguments) : void 0;
    try {
      const E = arguments[0];
      E && !((N = this.flags) != null && N.collapsed) && (r.stepInertia(performance.now()) && ((P = this.setDirtyCanvas) == null || P.call(this, !0, !1)), Hy(this, E, r));
    } catch {
    }
    return p;
  }, t.onResize = function() {
    var N;
    const p = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Go(this, 150), (N = this.setDirtyCanvas) == null || N.call(this, !0, !0), Ih(this, 220, null), p;
  };
  const r = us({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (p) => {
      t.__panoPreviewView = p;
    },
    getViewportSize: () => {
      const p = ko(t);
      return {
        w: Math.max(1, Number((p == null ? void 0 : p.w) || 0)),
        h: Math.max(1, Number((p == null ? void 0 : p.h) || 0))
      };
    },
    onInteraction: () => {
      var p;
      Ah(t), (p = t.setDirtyCanvas) == null || p.call(t, !0, !1);
    }
  }), a = t.onMouseDown;
  t.onMouseDown = function(p, N, P) {
    var E;
    try {
      if (!((E = this.flags) != null && E.collapsed)) {
        const I = Po(this, p, N, P) || { x: 0, y: 0 }, A = kr(this), O = Number((A == null ? void 0 : A[0]) || 0), R = Number((A == null ? void 0 : A[1]) || 0);
        if (I.x >= O - 20 && I.y >= R - 20)
          return a ? a.apply(this, arguments) : void 0;
        const T = ko(this);
        if (vf(I.x, I.y, T))
          return (p == null ? void 0 : p.button) === 0 && r.startDrag(I.x, I.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const s = t.onMouseMove;
  t.onMouseMove = function(p, N, P) {
    try {
      const E = Po(this, p, N, P);
      if (r.state.drag.active) {
        if (typeof (p == null ? void 0 : p.buttons) == "number" && (p.buttons & 1) === 0)
          return r.endDrag(), !0;
        const I = E || r.state.drag;
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
    const p = f ? f.apply(this, arguments) : void 0;
    return r.state.drag.active && r.endDrag(), p;
  };
  const g = t.onMouseWheel;
  t.onMouseWheel = function(p, N, P) {
    var E, I;
    try {
      if ((E = this.flags) != null && E.collapsed) return g ? g.apply(this, arguments) : void 0;
      const A = Po(this, p, N, P), O = ko(this);
      if (!A || !vf(A.x, A.y, O)) return g ? g.apply(this, arguments) : void 0;
      const R = Number((p == null ? void 0 : p.deltaY) ?? (p == null ? void 0 : p.wheelDeltaY) ?? (typeof N == "number" ? N : 0));
      return r.applyWheel(Math.sign(R)) && ((I = this.setDirtyCanvas) == null || I.call(this, !0, !1)), typeof (p == null ? void 0 : p.preventDefault) == "function" && p.preventDefault(), typeof (p == null ? void 0 : p.stopPropagation) == "function" && p.stopPropagation(), !0;
    } catch {
      return g ? g.apply(this, arguments) : void 0;
    }
  };
  const y = t.onRemoved, w = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = n, t.onDrawForeground = e, t.onMouseDown = a, t.onMouseMove = s, t.onMouseUp = u, t.onMouseLeave = f, t.onMouseWheel = g, t.onRemoved = y, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = w, t.onRemoved = function() {
    return w(), ca.unregister(this), Ho.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function Gy(t, e) {
  const n = Uo(
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
function Ky(t, e) {
  var y, w, p, N, P, E, I, A, O, R, C, T;
  const n = (w = (y = e == null ? void 0 : e.painting) == null ? void 0 : y.paint) == null ? void 0 : w.strokes, r = (N = (p = e == null ? void 0 : e.painting) == null ? void 0 : p.mask) == null ? void 0 : N.strokes, a = Array.isArray(n) && n.length > 0, s = Array.isArray(r) && r.length > 0;
  if (!a && !s) return null;
  const u = Gy(t, e), f = `${u.width}x${u.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== f) && (t.__panoPreviewPaintEngine = Nc(u), t.__panoPreviewPaintDescriptorKey = f, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const g = {
    paint: n || null,
    mask: r || null,
    groups: ((P = e == null ? void 0 : e.painting) == null ? void 0 : P.groups) || null,
    rasterObjects: ((E = e == null ? void 0 : e.painting) == null ? void 0 : E.raster_objects) || null
  };
  return (((I = t.__panoPreviewPaintRevision) == null ? void 0 : I.paint) !== g.paint || ((A = t.__panoPreviewPaintRevision) == null ? void 0 : A.mask) !== g.mask || ((O = t.__panoPreviewPaintRevision) == null ? void 0 : O.groups) !== g.groups || ((R = t.__panoPreviewPaintRevision) == null ? void 0 : R.rasterObjects) !== g.rasterObjects) && (t.__panoPreviewPaintRevision = g, t.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    s ? "m1" : "m0",
    String(Array.isArray((C = e == null ? void 0 : e.painting) == null ? void 0 : C.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((T = e == null ? void 0 : e.painting) == null ? void 0 : T.raster_objects) ? e.painting.raster_objects.length : 0)
  ].join(":"), t.__panoPreviewPaintEngine.rebuildCommitted(e)), t.__panoPreviewPaintEngine;
}
function Wy(t) {
  var n;
  return (Array.isArray((n = t == null ? void 0 : t.painting) == null ? void 0 : n.groups) ? t.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function qy(t, e) {
  const n = Ky(t, e);
  if (!n) return null;
  const r = Wy(e);
  return n.getErpTarget(r).displayPaint.canvas;
}
function Yy(t, e, n = null) {
  var f;
  const r = (f = e == null ? void 0 : e.painting_layer) == null ? void 0 : f.paint, a = Bn(r);
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
function Sf(t, e) {
  var s, u;
  const n = t == null ? void 0 : t.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((s = e == null ? void 0 : e.painting) == null ? void 0 : s.raster_objects) && e.painting.raster_objects.length > 0) {
    const f = Yy(t, e, () => {
      var g, y;
      return (y = (g = t.__panoDomPreview) == null ? void 0 : g.requestDraw) == null ? void 0 : y.call(g);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = e == null ? void 0 : e.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = qy(t, e);
  return a ? {
    source: a,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function Xy(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function Zy(t, e, n, r) {
  let a = (t == null ? void 0 : t[e]) || null;
  return (!a || a.width !== n || a.height !== r) && (a = document.createElement("canvas"), a.width = n, a.height = r, t[e] = a), a;
}
function Jy(t, e, n, r, a, s) {
  if (!e || !n || !(r > 0) || !(a > 0)) return;
  const u = Xy(n);
  if (u.width === r && u.height === a) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  const g = Zy(t, s, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!g) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  try {
    g.clearRect(0, 0, u.width, u.height), g.drawImage(n, 0, 0, u.width, u.height);
    const y = g.getImageData(0, 0, u.width, u.height).data, w = e.getImageData(0, 0, r, a), p = w.data, N = Math.max(0, u.width - 1), P = Math.max(0, u.height - 1);
    for (let E = 0; E < a; E += 1) {
      const I = (E + 0.5) * u.height / a - 0.5, A = U(Math.floor(I), 0, P), O = U(A + 1, 0, P), R = U(I - A, 0, 1);
      for (let C = 0; C < r; C += 1) {
        const T = (C + 0.5) * u.width / r - 0.5, W = U(Math.floor(T), 0, N), L = U(W + 1, 0, N), dt = U(T - W, 0, 1);
        let Q = 0, Pt = 0, z = 0, ct = 0;
        const it = (J, ot, lt) => {
          const q = (ot * u.width + J) * 4, ut = (y[q + 3] || 0) / 255;
          Q += ut * lt, Pt += (y[q] || 0) / 255 * ut * lt, z += (y[q + 1] || 0) / 255 * ut * lt, ct += (y[q + 2] || 0) / 255 * ut * lt;
        };
        if (it(W, A, (1 - dt) * (1 - R)), it(L, A, dt * (1 - R)), it(W, O, (1 - dt) * R), it(L, O, dt * R), Q <= 1e-6) continue;
        const _t = (E * r + C) * 4, bt = 1 - Q;
        p[_t] = Math.round(U((Pt + p[_t] / 255 * bt) * 255, 0, 255)), p[_t + 1] = Math.round(U((z + p[_t + 1] / 255 * bt) * 255, 0, 255)), p[_t + 2] = Math.round(U((ct + p[_t + 2] / 255 * bt) * 255, 0, 255)), p[_t + 3] = 255;
      }
    }
    e.putImageData(w, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, r, a);
  }
}
function Nf(t, e, n, r) {
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0)), f = `${String(e.currentSrc || e.src || "")}|${a}x${s}|${r}`;
  let g = t.__panoPreviewBgPaint;
  if (!g || g.__revKey !== f || g.width !== a || g.height !== s) {
    (!g || g.width !== a || g.height !== s) && (g = document.createElement("canvas"), g.width = a, g.height = s, t.__panoPreviewBgPaint = g);
    const y = g.getContext("2d");
    y.clearRect(0, 0, a, s), y.drawImage(e, 0, 0, a, s), Jy(t, y, n, a, s, "__panoPreviewOverlayScratch"), g.__revKey = f;
  }
  return g;
}
function Qy(t, e, n, r = null) {
  const a = String(t.__panoPreviewMode || "stickers");
  _h(t, a);
  const s = cl(t), u = a === "cutout" ? Ty(t, () => {
    var I, A;
    return (A = (I = t.__panoDomPreview) == null ? void 0 : I.requestDraw) == null ? void 0 : A.call(I);
  }) : null, f = !!(u && u.complete && (u.naturalWidth || u.width)), g = e.parentElement, y = 1, w = Math.max(1, Number((g == null ? void 0 : g.clientWidth) || e.clientWidth || 0)), p = Math.max(1, Number((g == null ? void 0 : g.clientHeight) || e.clientHeight || 0)), N = Math.max(64, Math.round(w * y)), P = Math.max(64, Math.round(p * y)), E = e.getContext("2d");
  if (E)
    if (a === "cutout") {
      const I = Oy(s), A = Uo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var ct, it;
          return (it = (ct = t.__panoDomPreview) == null ? void 0 : ct.requestDraw) == null ? void 0 : it.call(ct);
        }
      ), O = !!(A && A.complete && (A.naturalWidth || A.width));
      (e.width !== N || e.height !== P) && (e.width = N, e.height = P);
      const R = { x: 0, y: 0, w: N, h: P }, C = f ? U(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : O ? U(Number((A.naturalWidth || A.width) / Math.max(1, Number(A.naturalHeight || A.height || 1))), 0.05, 20) : 1, T = I ? hy(I) : null, W = U(Number((T == null ? void 0 : T.aspect) || C || 1), 0.05, 20), L = wh(R, W), dt = Ic(e, R);
      E.setTransform(1, 0, 0, 1, 0, 0), E.fillStyle = "#070707", E.fillRect(0, 0, N, P);
      let Q = "none", Pt = "Open editor and add frame", z = "";
      if (f)
        E.drawImage(u, L.x, L.y, L.w, L.h);
      else if (z = String((A == null ? void 0 : A.src) || ""), I)
        A && !O ? Q = "loading" : O ? (Q = "empty", Pt = "Open editor or run node") : (Q = "empty", Pt = "Connect ERP image");
      else {
        if (O) {
          const ct = Sf(t, s), it = ct != null && ct.source ? Nf(t, A, ct.source, ct.revision || "") : A;
          Fy(E, it, R, 0.44);
        }
        Q = "empty", Pt = "Open editor and add frame";
      }
      Q === "loading" ? (wf(E, L, dt), eo(t, !1), Er(t, !0, z)) : Q === "empty" ? (eo(t, !0, Pt), Er(t, !1, "")) : (eo(t, !1), Er(t, !1, ""));
    } else {
      eo(t, !1), (e.width !== N || e.height !== P) && (e.width = N, e.height = P);
      const I = { x: 0, y: 0, w: N, h: P }, A = Ic(e, I);
      E.setTransform(1, 0, 0, 1, 0, 0), E.clearRect(0, 0, N, P), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const O = sl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), R = Math.tan(Number(t.__panoPreviewView.fov || 100) * jr * 0.5), C = Uo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var bt, J;
          return (J = (bt = t.__panoDomPreview) == null ? void 0 : bt.requestDraw) == null ? void 0 : J.call(bt);
        }
      ), T = !!(C && C.complete && (C.naturalWidth || C.width));
      E.fillStyle = "#1a1a1e", E.fillRect(0, 0, N, P);
      const W = Sh(t, s), L = Nh(t, s, W), dt = ol(t.__panoPreviewView, s == null ? void 0 : s.coverage), Q = Sf(t, s), Pt = (Q == null ? void 0 : Q.source) || null, z = T && Pt ? Nf(t, C, Pt, (Q == null ? void 0 : Q.revision) || "") : C, ct = z !== C ? String(z.__revKey || "") : C ? [
        String(C.currentSrc || C.src || ""),
        Number(C.naturalWidth || C.width || 0),
        Number(C.naturalHeight || C.height || 0)
      ].join("|") : "";
      t.__panoDomRuntimeCore || (t.__panoDomRuntimeCore = Na());
      let it = !1;
      if (T) {
        const J = t.__panoDomRuntimeCore.syncState(
          jy(z, s, W, L, "runtime_dom_scene", ct)
        ) ? t.__panoDomRuntimeCore.renderToTarget("runtime_preview", dt, {
          width: I.w,
          height: I.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        J && (E.drawImage(J, I.x, I.y, I.w, I.h), it = !0);
      }
      const _t = W.stickers;
      if (T && it)
        Er(t, !1, "");
      else if (T)
        Bo(t, E, I, O, R, z, Vo), Er(t, !1, "");
      else if (Pt)
        Bo(t, E, I, O, R, Pt, Vo), Er(t, !!C && !T, String((C == null ? void 0 : C.src) || ""));
      else {
        const bt = !!C && !T;
        Er(t, bt, String((C == null ? void 0 : C.src) || "")), bt && wf(E, I, A);
      }
      if ((!T || _t.length === 0) && Ph(E, I, O, R, A), !it && _t.length > 0) {
        const bt = Ch(t), J = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, ot = bt || J, lt = ot ? 8 : 12, q = ot ? 6 : 9;
        _t.forEach((ut) => kh(E, t, I, O, R, s, ut, lt, q));
      } else if (!C || !T) {
        const bt = Math.max(14, Math.round(16 * A));
        E.fillStyle = "rgba(212,212,216,0.85)", E.font = `600 ${bt}px Plus Jakarta Sans, Geist, sans-serif`, E.textAlign = "center", E.fillText("Open editor to add stickers", N * 0.5, P * 0.5 + 24 * A);
      }
    }
}
function Bo(t, e, n, r, a, s, u = py) {
  const f = cl(t), g = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  t.__panoBackgroundCore || (t.__panoBackgroundCore = Na());
  const y = ls({
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
  const p = t.__panoBackgroundCore.renderToTarget("runtime_preview", {
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
  p && e.drawImage(p, n.x, n.y, n.w, n.h);
}
function Mf(t, e, n, r, a, s, u = 1) {
  let f = !1;
  t.strokeStyle = s, t.lineWidth = u, t.beginPath();
  for (const g of e) {
    const y = Mh(g, n, r, a);
    if (!y) {
      f = !1;
      continue;
    }
    f ? t.lineTo(y.x, y.y) : (t.moveTo(y.x, y.y), f = !0);
  }
  t.stroke();
}
function Ph(t, e, n, r, a = 1) {
  t.save();
  const s = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const w = [];
    for (let p = -180; p <= 180; p += 15) w.push(Rr(p, y));
    Mf(t, w, n, e, r, y === 0 ? u : s, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const w = [];
    for (let p = -89; p <= 89; p += 15) w.push(Rr(y, p));
    Mf(t, w, n, e, r, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : s, y % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: Rr(0, 0) },
    { name: "Right", dir: Rr(90, 0) },
    { name: "Back", dir: Rr(180, 0) },
    { name: "Left", dir: Rr(-90, 0) }
  ];
  t.fillStyle = "rgba(250, 250, 250, 0.32)";
  const g = Math.max(9, Math.round(11 * a));
  t.font = `500 ${g}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", f.forEach((y) => {
    const w = Mh(y.dir, n, e, r);
    w && t.fillText(y.name, w.x, w.y + 20 * a);
  }), t.restore();
}
function tb(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function Ah(t) {
  const e = tb(t);
  e.dragging = !1, e.hqFrames = gy;
}
function Go(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function Ch(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function eb(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function nb(t, e, n = 20) {
  var u;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const r = (u = e.getBoundingClientRect) == null ? void 0 : u.call(e);
  if (!r) return !1;
  const a = Number(t.clientX) - Number(r.left || 0), s = Number(t.clientY) - Number(r.top || 0);
  return a >= r.width - n && s >= r.height - n;
}
function oi(t, e) {
  return nb(t, e) ? !1 : (eb(t), !0);
}
function rb() {
  var n;
  const t = (n = le == null ? void 0 : le.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function ib(t) {
  var n;
  if (!t) return;
  const e = (n = le == null ? void 0 : le.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function ab(t, e = 360, n = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const r = kr(t), a = Number((r == null ? void 0 : r[0]) || 0), s = Number((r == null ? void 0 : r[1]) || 0);
  if (!Number.isFinite(a) || !Number.isFinite(s) || a >= e && s >= n) return;
  const u = [Math.max(e, a), Math.max(n, s)];
  try {
    typeof t.setSize == "function" ? t.setSize(u) : t.size = u, t.__panoStandaloneBootSized = !0;
  } catch (f) {
    String((f == null ? void 0 : f.message) || f || "unknown");
  }
}
function ob(t, e = 0, n = null, r = 1200) {
  const a = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = a > 0, !(a <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var s, u;
    t.__panoBootMinHeightTimer = null, (s = t == null ? void 0 : t.__panoDomPreview) != null && s.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, n == null || n(), (u = t.setDirtyCanvas) == null || u.call(t, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function kf(t, e = null, n = 0) {
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
      t.__panoUserResized = !0, Go(t, 150), e == null || e(), Ih(t, 180, e);
    }
  };
}
function Ih(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    t.__panoResizeSettleTimer = null, n == null || n(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function di(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function sb(t, e = {}) {
  var lt;
  const n = e.__allowStandalone === !0, r = _y(t);
  if (r && !n) {
    dh(t);
    return;
  }
  r && ab(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", Ho.register(t);
  const a = t.__panoPreviewMode === "stickers", s = e.__noLegacyFallback === !0, u = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null, String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""), a || ca.unregister(t);
  const f = String(e.__panoForcedPath || "").trim(), g = a ? hh(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Hr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (g.chosenPath = f, g.reason = "controller_target_backend");
  const y = a ? g.chosenPath : "dom", w = g.signature || Hr(t);
  if (Number(t.__panoRebindGeneration || 0), Pc(t), t == null || t.id, t.__panoPreviewMode, g.reason, g.frontendVersionRaw, t.addDOMWidget, kr(t), t.__panoFrontendSig = w, t.__panoStickersPath = y, a && ca.register(t), a && y === "legacy_draw") {
    if (s) return;
    xi(t, { keepMonitor: !0 }), no(t);
    return;
  }
  if ((lt = t.__panoDomPreview) != null && lt.widget) return;
  if (t.__panoLegacyPreviewHooked && xi(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    a && !s && no(t);
    return;
  }
  const p = e.noPreview === !0, N = a || p ? 0 : 56, P = document.createElement("div");
  if (by(), P.className = "pano-node-preview-dom", P.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), p && P.classList.add("pano-node-preview--no-preview"), P.setAttribute("data-capture-wheel", "true"), P.setAttribute("tabindex", "-1"), P.style.cssText = [
    "width:100%",
    p ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), p) {
    const q = t.addDOMWidget(kc(), "preview", P, kf(t, null));
    di(t), t.__panoDomPreview = { widget: q, root: P, requestDraw: () => {
    } }, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom";
    return;
  }
  const E = document.createElement("div");
  E.style.cssText = [
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
  const A = document.createElement("div");
  A.style.cssText = [
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
  ].join(";"), A.textContent = "Open editor and add frame", E.appendChild(I), E.appendChild(A), P.appendChild(E), fh(t, 120, 120), di(t);
  let O = null;
  try {
    ob(t, N, () => {
      var q, ut;
      return (ut = (q = t.__panoDomPreview) == null ? void 0 : q.requestDraw) == null ? void 0 : ut.call(q);
    }), O = t.addDOMWidget(
      kc(),
      "preview",
      P,
      kf(t, () => {
        var q, ut;
        return (ut = (q = t.__panoDomPreview) == null ? void 0 : q.requestDraw) == null ? void 0 : ut.call(q);
      }, N)
    );
  } catch {
    a && no(t);
    return;
  }
  const R = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, C = () => {
    R.needsDraw = !0, R.raf || (R.raf = requestAnimationFrame(L));
  }, T = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    Go(t, 150), C();
  }) : null;
  T == null || T.observe(E);
  const W = () => {
    if (!a || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const q = 3, ut = (St) => {
      requestAnimationFrame(() => {
        var Nt;
        const Ct = !!(P != null && P.isConnected && (E != null && E.isConnected) && (I != null && I.isConnected) && Number(E.clientHeight || 0) > 0 && Number(I.clientHeight || 0) > 0);
        if (!Ct && St < q) {
          ut(St + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, t.__panoPreviewMode, Number((E == null ? void 0 : E.clientHeight) || 0), Number((I == null ? void 0 : I.clientHeight) || 0), !Ct) {
          if (s) {
            t.__panoPreviewMode, Number((E == null ? void 0 : E.clientHeight) || 0), Number((I == null ? void 0 : I.clientHeight) || 0);
            return;
          }
          xi(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", no(t), (Nt = t.setDirtyCanvas) == null || Nt.call(t, !0, !0);
        }
      });
    };
    ut(1);
  }, L = (q) => {
    var St, Ct, Nt;
    R.raf = 0;
    const ut = dt.stepInertia(q);
    (R.needsDraw || ut) && (R.needsDraw = !1, (St = t.flags) != null && St.collapsed || Qy(t, I, null, dt), (Ct = t.setDirtyCanvas) == null || Ct.call(t, !0, !1)), (ut || R.needsDraw) && (R.raf = requestAnimationFrame(L)), yy() && (!t.__panoDebugLastTs || q - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = q, t.__panoPreviewMode, kr(t), qi(P), qi(E), qi(I), qi(P.parentElement), qi((Nt = P.parentElement) == null ? void 0 : Nt.parentElement), Number(I.width || 0), Number(I.height || 0), void 0);
  }, dt = us({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (q) => {
      t.__panoPreviewView = q;
    },
    onInteraction: () => {
      C();
    }
  });
  I.addEventListener("pointerdown", (q) => {
    var ut, St;
    oi(q, E) && u && q.button === 0 && ((ut = P.focus) == null || ut.call(P), (St = I.setPointerCapture) == null || St.call(I, q.pointerId), I.style.cursor = "grabbing", dt.startDrag(q.clientX, q.clientY, q.pointerId));
  }), I.addEventListener("pointermove", (q) => {
    !u || !dt.state.drag.active || (oi(q, E), dt.moveDrag(q.clientX, q.clientY, "pano"));
  });
  const Q = (q) => {
    var ut;
    !u || !dt.state.drag.active || (oi(q, E), (ut = I.releasePointerCapture) == null || ut.call(I, q.pointerId), I.style.cursor = "grab", dt.endDrag(), Ah(t), C());
  };
  I.addEventListener("pointerup", Q), I.addEventListener("pointercancel", Q), I.addEventListener("pointerleave", (q) => {
    dt.state.drag.active && Q(q);
  });
  const Pt = (q) => {
    var St, Ct, Nt;
    if (!oi(q, E) || !u) return;
    const ut = rb();
    dt.applyWheelEvent(q) && C(), (St = q.preventDefault) == null || St.call(q), (Ct = q.stopPropagation) == null || Ct.call(q), (Nt = q.stopImmediatePropagation) == null || Nt.call(q), requestAnimationFrame(() => {
      var ne, Se;
      ib(ut), (Se = (ne = le == null ? void 0 : le.canvas) == null ? void 0 : ne.setDirty) == null || Se.call(ne, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((q) => {
    E.addEventListener(q, Pt, { passive: !1, capture: !0 }), I.addEventListener(q, Pt, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((q) => {
    I.addEventListener(q, (ut) => oi(ut, E)), E.addEventListener(q, (ut) => oi(ut, E));
  });
  const z = _a(t, "state_json");
  if (z && !z.__panoPreviewPatchedCb) {
    z.__panoPreviewPatchedCb = !0;
    const q = z.callback;
    z.callback = (ut) => {
      const St = q ? q(ut) : void 0;
      return C(), St;
    };
  }
  const ct = _a(t, "bg_color");
  if (ct && !ct.__panoPreviewPatchedCb) {
    ct.__panoPreviewPatchedCb = !0;
    const q = ct.callback;
    ct.callback = (ut) => {
      const St = q ? q(ut) : void 0;
      return C(), St;
    };
  }
  const it = t.onRemoved, _t = t.onResize, bt = t.onExecuted;
  t.onExecuted = function(q) {
    Dy(t, q), Cc(t), di(t), C();
    const ut = bt ? bt.apply(this, arguments) : void 0;
    return di(t), ut;
  };
  const J = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return Cc(t), di(t), C(), J ? J.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var ut;
    const q = _t ? _t.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, Go(this, 150), C(), (ut = this.setDirtyCanvas) == null || ut.call(this, !0, !1), q;
  }, t.onRemoved = function() {
    return ot(), ca.unregister(this), Ho.unregister(this), it ? it.apply(this, arguments) : void 0;
  };
  const ot = () => {
    var q;
    R.raf && cancelAnimationFrame(R.raf), (q = T == null ? void 0 : T.disconnect) == null || q.call(T), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = _t, t.onExecuted = bt, t.onConnectionsChange = J, t.onRemoved = it;
  };
  t.__panoDomRestore = ot, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: O, root: P, canvas: I, requestDraw: C, state: R, emptyHintEl: A }, W(), C();
}
function Pf(t, e = {}) {
  ph(t).attach({
    ...e,
    mode: "cutout"
  });
}
const Ko = Math.PI / 180;
function Br(t, e, n) {
  return { x: t, y: e, z: n };
}
function Af(t, e) {
  return Br(t.x + e.x, t.y + e.y, t.z + e.z);
}
function ro(t, e) {
  return Br(t.x * e, t.y * e, t.z * e);
}
function Cf(t, e) {
  return Br(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function io(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Br(t.x / e, t.y / e, t.z / e);
}
function cb(t, e) {
  const n = t * Ko, r = e * Ko, a = Math.cos(r);
  return Br(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function lb(t, e, n = 0) {
  const r = cb(t, e), a = Br(0, 1, 0);
  let s = Cf(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Br(1, 0, 0)), s = io(s);
  const u = io(Cf(r, s)), f = n * Ko, g = Math.cos(f), y = Math.sin(f), w = Af(ro(s, g), ro(u, y)), p = Af(ro(s, -y), ro(u, g));
  return { fwd: r, right: io(w), up: io(p) };
}
const ao = 140, ub = 180, If = 40, sc = 10;
function Ef(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":");
  return { full: e, tail: String(n[n.length - 1] || "").trim() };
}
function Df(t, e) {
  const n = Ef(t), r = Ef(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Tf(t) {
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
  return typeof ((s = Ze) == null ? void 0 : s.apiURL) == "function" ? Ze.apiURL(a) : a;
}
function la(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return la(t[0]);
    const e = typeof t[0] == "string" ? String(t[0] || "").trim() : "";
    if (e)
      return Tf({
        filename: e,
        subfolder: String(t[1] || "").trim(),
        type: String(t[2] || "output").trim() || "output"
      });
    for (const n of t) {
      const r = la(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Tf(t);
}
function Rf(t) {
  var a;
  const e = (a = gn) == null ? void 0 : a.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  if (e instanceof Map) {
    for (const s of e.keys())
      if (Df(s, n)) return e.get(s);
  } else
    for (const s of Object.keys(e))
      if (Df(s, n)) return e[s];
  return null;
}
function fb(t, e = "erp_image") {
  var E, I, A, O, R, C, T, W, L, dt, Q, Pt;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let r = null;
  const a = n.find((z) => String((z == null ? void 0 : z.name) || "") === String(e));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const z = n.find((ct) => String((ct == null ? void 0 : ct.type) || "").toUpperCase() === "IMAGE" && (ct == null ? void 0 : ct.link) != null);
    (z == null ? void 0 : z.link) != null && (r = z.link);
  }
  if (r == null) return "";
  const s = ((I = (E = t == null ? void 0 : t.graph) == null ? void 0 : E.links) == null ? void 0 : I[r]) || ((R = (O = (A = gn) == null ? void 0 : A.graph) == null ? void 0 : O.links) == null ? void 0 : R[r]);
  if (!s) return "";
  const u = Number(s.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (W = (T = (C = gn) == null ? void 0 : C.graph) == null ? void 0 : T.getNodeById) == null ? void 0 : W.call(T, u), g = Rf(u), y = Rf(t == null ? void 0 : t.id), w = [
    g == null ? void 0 : g.images,
    (L = g == null ? void 0 : g.ui) == null ? void 0 : L.pano_input_images,
    g == null ? void 0 : g.pano_input_images,
    (dt = y == null ? void 0 : y.ui) == null ? void 0 : dt.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const z of w)
    if (Array.isArray(z))
      for (const ct of z) {
        const it = la(ct);
        if (it) return it;
      }
  let p = [];
  try {
    p = typeof ((Q = gn) == null ? void 0 : Q.getNodeImageUrls) == "function" ? gn.getNodeImageUrls(f) || [] : [];
  } catch {
    p = [];
  }
  if (Array.isArray(p) && p.length > 0)
    for (const z of p) {
      const ct = la(z);
      if (ct) return ct;
    }
  if (f) {
    const z = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const ct of z) {
      const it = la(ct);
      if (it) return it;
    }
  }
  const N = (Pt = f == null ? void 0 : f.widgets) == null ? void 0 : Pt.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image"), P = String((N == null ? void 0 : N.value) || "").trim();
  return P ? Ze.apiURL(`/view?filename=${encodeURIComponent(P)}&type=input&subfolder=`) : "";
}
function Lf(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function Of(t, e, n, r, a, s) {
  var p, N, P;
  if (e.clearRect(0, 0, n, r), e.fillStyle = "#070707", e.fillRect(0, 0, n, r), !s || !s.complete || !(s.naturalWidth || s.width) || n <= 1 || r <= 1) {
    Lf(e, n, r);
    return;
  }
  const u = lb(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * Ko * 0.5), g = Number(((P = (N = (p = t == null ? void 0 : t.widgets) == null ? void 0 : p.find) == null ? void 0 : N.call(p, (E) => (E == null ? void 0 : E.name) === "coverage")) == null ? void 0 : P.value) || 360) === 180 ? 180 : 360;
  t.__panoStandaloneCore || (t.__panoStandaloneCore = Na());
  const y = ls({
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
    scene: fs(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!t.__panoStandaloneCore.syncState(y) && (() => {
    const E = t.__panoStandaloneCore.renderToTarget(
      "preview_node",
      dy(a, g),
      { width: n, height: r, dpr: window.devicePixelRatio || 1 }
    );
    return E ? (e.drawImage(E, 0, 0, n, r), !0) : !1;
  })() || (Bo(t, e, { x: 0, y: 0, w: n, h: r }, u, f, s, Vo), Lf(e, n, r));
}
function Ff(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class db {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = us({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Ye(Number((r == null ? void 0 : r.yaw) || 0)),
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
        `min-height:${ao}px`,
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
          return ao;
        },
        getHeight() {
          return ao;
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
            minHeight: Math.max(ao, Number(s.minHeight || 0)),
            minWidth: Math.max(ub, Number(s.minWidth || 0))
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
      return Ff(a.x, a.y, s) ? (e.legacyDragPointer = !0, e.controller.startDrag(a.x - s.x, a.y - s.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var y, w, p, N, P, E;
      const s = Po(this, n, r, a), u = e.getLegacyPreviewRect();
      if (!s || !Ff(s.x, s.y, u))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof r == "number" ? r : 0));
      Number(((y = e.view) == null ? void 0 : y.fov) || 100);
      const g = e.controller.applyWheel(Math.sign(f));
      return Number(((w = e.view) == null ? void 0 : w.fov) || 100), g && ((p = this.setDirtyCanvas) == null || p.call(this, !0, !1)), (N = n == null ? void 0 : n.preventDefault) == null || N.call(n), (P = n == null ? void 0 : n.stopPropagation) == null || P.call(n), (E = n == null ? void 0 : n.stopImmediatePropagation) == null || E.call(n), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, s, u;
    const e = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - sc * 2), n = Math.max(60, Number(((u = (s = this.node) == null ? void 0 : s.size) == null ? void 0 : u[1]) || 0) - If - sc);
    return { x: sc, y: If, w: e, h: n };
  }
  drawLegacy(e) {
    var r, a;
    if (!e || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (e.save(), e.translate(n.x, n.y), Of(this.node, e, n.w, n.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, n.w, n.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), e.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const e = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, r = Math.max(1, Math.round(e.width * n)), a = Math.max(1, Math.round(e.height * n));
    (this.canvas.width !== r || this.canvas.height !== a) && (this.canvas.width = r, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    const e = fb(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (Of(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (s = (a = this.node).setDirtyCanvas) == null || s.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var n, r, a, s, u, f, g, y, w, p, N;
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
    const e = ((w = (y = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : y.find) == null ? void 0 : w.call(y, (P) => (P == null ? void 0 : P.name) === "coverage")) || null;
    e && (e.callback = this.orig.coverageWidgetCallback), (N = (p = this.node.__panoStandaloneCore) == null ? void 0 : p.dispose) == null || N.call(p), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function hb(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const n = new db(t, e);
  t.__panoPreviewNodeRuntime = n, n.attach();
}
function pb(t, e, n) {
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
function Eh(t) {
  return !!(t != null && t.prototype);
}
function Ec(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function gb(t, e = {}) {
  Eh(t) || hb(t, {
    ...e,
    onOpen: Ec(t, e.onOpen)
  });
}
function mb(t, e = {}) {
  if (!Eh(t)) {
    Pf(t, {
      ...e,
      onOpen: Ec(t, e.onOpen)
    });
    return;
  }
  pb(t, "cutout_preview", (n) => {
    Pf(n, {
      ...e,
      onOpen: Ec(n, e.onOpen)
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
}, nr = "pen";
function $f(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function yb(t = 80, e = null, n = 8) {
  const r = [];
  let a = -1;
  const s = Math.max(1, Number(t || 80)), u = Math.max(1, Number(n || 8));
  function f(y) {
    if (r.splice(0, r.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((p) => {
      r.push(String(p || ""));
    }), !r.length)) return;
    const w = Number(y.index);
    Number.isInteger(w) ? w === -1 ? a = -1 : a = Math.max(0, Math.min(r.length - 1, w)) : a = r.length - 1;
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
      const y = r.length, w = Math.max(0, y - u), p = a >= 0 ? Math.max(0, Math.min(a, w)) : w, N = r.slice(p, p + u), P = a < 0 ? -1 : Math.max(-1, Math.min(N.length - 1, a - p));
      return {
        version: 1,
        entries: N,
        index: P
      };
    },
    hydrate: f
  };
}
function Jt(t, e = null) {
  const n = Number(t);
  return Number.isFinite(n) ? n : e;
}
function bb() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function vb(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    if (!r || typeof r != "object") continue;
    const a = String(r.actionGroupId || r.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const s = Jt(r.z_index ?? r.zIndex, e.length);
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
function _b(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function wb(t, e) {
  if (!t || typeof t != "object" || !e) return null;
  const n = Jt(t.t, 0), r = Jt(t.widthScale, null), a = Jt(t.pressureLike, null);
  if (e.kind === "ERP_GLOBAL") {
    const s = Jt(t.u, null), u = Jt(t.v, null);
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
    const s = Jt(t.u, null), u = Jt(t.v, null);
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
function oo(t, e, n = 1) {
  if (!Array.isArray(t)) return null;
  const r = [];
  for (const a of t) {
    const s = wb(a, e);
    if (!s) return null;
    r.push(s);
  }
  return r.length >= n ? r : null;
}
function xb(t, e, n, r) {
  if (!t || typeof t != "object") return null;
  const a = String(t.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const g = oo(t.points, e, 3);
    return g ? { geometryKind: a, points: g } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const s = oo(t.points, e, 1);
  if (!s) return null;
  const u = oo(t.rawPoints, e, 1), f = oo(t.processedPoints, e, 1);
  return {
    geometryKind: a,
    points: s,
    rawPoints: u || s.map((g) => ({ ...g })),
    processedPoints: f || s.map((g) => ({ ...g }))
  };
}
function Sb(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = _b(t.targetSpace);
  if (!n) return null;
  const r = String(t.toolKind || "").trim(), a = xb(t.geometry, n, r, e === "paint");
  if (!a) return null;
  const s = Jt(t.size, null), u = Jt(t.opacity, null);
  if (s == null || u == null) return null;
  const f = String(t.id || "").trim(), g = String(t.actionGroupId || "").trim();
  if (!f || !g) return null;
  const y = Jt(t.radiusValue, null), w = String(t.radiusModel || "").trim() || null;
  let p = null;
  if (e === "paint") {
    const N = t.color;
    if (!N || typeof N != "object") return null;
    p = {
      r: Math.max(0, Math.min(1, Jt(N.r, 0))),
      g: Math.max(0, Math.min(1, Jt(N.g, 0))),
      b: Math.max(0, Math.min(1, Jt(N.b, 0))),
      a: Math.max(0, Math.min(1, Jt(N.a, 1)))
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
    hardness: Jt(t.hardness, null),
    flow: Jt(t.flow, null),
    spacing: Jt(t.spacing, null),
    createdAt: Math.trunc(Jt(t.createdAt, 0)),
    color: p,
    radiusModel: w,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function Vf(t, e) {
  const n = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return n;
  for (const r of t.strokes) {
    const a = Sb(r, e);
    a && n.strokes.push(a);
  }
  return n;
}
function Nb(t) {
  if (!t || typeof t != "object") return null;
  const e = Jt(t.u0, null), n = Jt(t.v0, null), r = Jt(t.u1, null), a = Jt(t.v1, null);
  if (e == null || n == null || r == null || a == null) return null;
  const s = (f) => Math.max(0, Math.min(1, f)), u = { u0: s(e), v0: s(n), u1: s(r), v1: s(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function Mb(t) {
  const e = t || {};
  return {
    du: Jt(e.du, 0) ?? 0,
    dv: Jt(e.dv, 0) ?? 0,
    rot_deg: Jt(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Jt(e.scale, 1) ?? 1)
  };
}
function kb(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const n = String(t.id || "").trim();
  if (!n) return null;
  const r = String(t.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const a = String(t.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const s = Nb(t.bbox);
  return s ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, Jt(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: s,
    rasterDataUrl: a,
    transform: Mb(t.transform)
  } : null;
}
function Pb(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    const a = kb(r, e.length);
    !a || n.has(a.id) || (n.add(a.id), e.push(a));
  }
  return e;
}
function ua(t) {
  const e = bb();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: vb(t.groups),
    paint: Vf(t.paint, "paint"),
    mask: Vf(t.mask, "mask"),
    raster_objects: Pb(t.raster_objects)
  };
}
const te = {
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
}, Wo = {
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
    const e = t, n = _i(() => {
      const r = { ...e.attrs };
      return e.tag === "button" && r.type == null && (r.type = e.type), e.label && (r["aria-label"] = e.label), e.tip && (r["data-tip"] = e.tip), e.pressed != null && (r["aria-pressed"] = e.pressed), r;
    });
    return (r, a) => (ge(), ki(rm(t.tag), eh({
      class: ["pano-btn pano-btn-icon", t.extraClass]
    }, n.value, { innerHTML: t.icon }), null, 16, ["class", "innerHTML"]));
  }
}, Ab = { class: "pano-floating-right" }, Cb = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (ge(), Te("div", Ab, [
      n[0] || (n[0] = we("span", {
        class: "pano-fov-value",
        "data-fov-value": "",
        "aria-label": "Field of view"
      }, "100°", -1)),
      (ge(!0), Te(ze, null, bi(t.buttons, (r) => (ge(), ki(Wo, {
        key: r.action,
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { "data-action": r.action }
      }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, Ib = {
  class: "pano-paint-dock is-hidden",
  "data-paint-dock": ""
}, Eb = ["data-paint-pane"], Db = {
  key: 0,
  class: "pano-paint-color-float",
  "data-paint-color-row": "",
  hidden: ""
}, Tb = ["data-paint-color-swatch", "aria-label"], Rb = ["data-paint-footer"], Lb = ["data-paint-group"], Ob = ["hidden"], Fb = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] }
  },
  setup(t) {
    function e(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    return (n, r) => (ge(), Te("div", Ib, [
      (ge(!0), Te(ze, null, bi(t.panes, (a) => (ge(), Te("div", {
        key: a.key,
        class: "pano-paint-pane",
        "data-paint-pane": a.key
      }, [
        a.showColorFloat ? (ge(), Te("div", Db, [
          (ge(!0), Te(ze, null, bi(t.paintSwatches, (s) => (ge(), Te("button", {
            key: s.id,
            class: "pano-paint-color-dot",
            type: "button",
            "data-paint-color-swatch": s.id,
            "aria-label": s.label,
            style: ns(e(s))
          }, null, 12, Tb))), 128)),
          r[0] || (r[0] = th('<button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color"></button><div class="pano-paint-color-pop" data-paint-color-pop hidden><div class="pano-paint-color-pop-head"><span class="pano-paint-color-preview" data-paint-color-preview></span><span class="pano-paint-color-pop-label">Custom Color</span></div><div class="pano-paint-color-field"><div class="pano-paint-sv-panel" data-paint-color-sv><div class="pano-paint-sv-cursor" data-paint-color-sv-cursor></div></div><div class="pano-paint-hue-strip" data-paint-hue-strip><div class="pano-paint-hue-handle" data-paint-hue-handle></div></div></div><label class="pano-paint-color-field"><span>Opacity</span><div class="pano-paint-alpha-wrap"><input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider><span data-paint-alpha-value>100%</span></div></label><div class="pano-paint-color-history" data-paint-color-history-wrap><div class="pano-paint-color-history-list" data-paint-color-history></div></div></div>', 2))
        ])) : wo("", !0),
        we("div", {
          class: "pano-paint-footer",
          "data-paint-footer": a.footer
        }, [
          we("div", {
            class: "pano-paint-footer-group",
            "data-paint-group": a.group
          }, [
            (ge(!0), Te(ze, null, bi(a.tools, (s) => (ge(), ki(Wo, {
              key: `${a.key}-${s.key}`,
              icon: s.icon,
              label: s.label,
              tip: s.tip,
              attrs: { [s.attr]: s.key }
            }, null, 8, ["icon", "label", "tip", "attrs"]))), 128))
          ], 8, Lb),
          r[1] || (r[1] = we("div", {
            class: "pano-paint-size-row",
            "data-paint-size-row": "",
            hidden: ""
          }, [
            we("input", {
              class: "pano-paint-size-slider",
              "data-paint-size-slider": "",
              type: "range",
              min: "1",
              max: "120",
              step: "1",
              value: "10"
            }),
            we("span", {
              class: "pano-paint-size-value",
              "data-paint-size-value": ""
            }, "10")
          ], -1)),
          we("div", {
            class: "pano-paint-clear-row",
            "data-paint-clear-row": "",
            hidden: a.clearHidden
          }, [
            Je(Wo, {
              icon: qc(te).clear,
              label: a.clearLabel,
              tip: a.clearTip,
              "extra-class": "pano-paint-layer-clear",
              attrs: { "data-paint-layer-clear-current": a.clearTarget }
            }, null, 8, ["icon", "label", "tip", "attrs"])
          ], 8, Ob)
        ], 8, Rb)
      ], 8, Eb))), 128))
    ]));
  }
}, $b = {
  class: "pano-side",
  "data-side": ""
}, Vb = { class: "pano-side-head" }, zb = ["innerHTML"], Hb = {
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
    const r = _i(() => `<span class="pano-side-title-icon" aria-hidden="true">${te.globe}</span><span>${n(e.nodeTitle)}</span>`);
    return (a, s) => (ge(), Te("div", $b, [
      we("div", Vb, [
        we("div", {
          class: "pano-side-title",
          innerHTML: r.value
        }, null, 8, zb),
        s[0] || (s[0] = we("div", { class: "pano-side-actions" }, null, -1))
      ]),
      s[1] || (s[1] = we("div", { class: "pano-divider" }, null, -1))
    ]));
  }
}, jb = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, Ub = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (ge(), Te("div", jb, [
      (ge(!0), Te(ze, null, bi(t.buttons, (r) => (ge(), ki(Wo, {
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
}, Bb = { class: "pano-floating-top" }, Gb = ["data-view-count"], Kb = ["data-view", "aria-pressed", "aria-label"], Wb = ["innerHTML"], qb = { class: "label" }, Yb = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (ge(), Te("div", Bb, [
      we("div", {
        class: "pano-view-toggle",
        "data-selected": "pano",
        "data-view-count": String(t.buttons.length)
      }, [
        (ge(!0), Te(ze, null, bi(t.buttons, (r) => (ge(), Te("button", {
          key: r.key,
          class: rs(["pano-view-btn", r.extraClass]),
          "data-view": r.key,
          "aria-pressed": r.pressed,
          "aria-label": r.label
        }, [
          we("span", {
            innerHTML: r.icon
          }, null, 8, Wb),
          we("span", qb, nd(r.label), 1)
        ], 10, Kb))), 128))
      ], 8, Gb)
    ]));
  }
};
function Dh(t = "stickers") {
  const e = String(t || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: te.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: te.unwrap, pressed: "false", extraClass: "" },
      ...e ? [{ key: "frame", label: "Frame", icon: te.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: te.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: te.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: te.circle_dashed_tool, pressed: "false" },
      ...e ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: te.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: te.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: te.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: te.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: te.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: te.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: te.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: te.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: te.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: te.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: te.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: te.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: te.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: te.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: te.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: te.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: te.lasso_tool }
        ]
      }
    ]
  };
}
const Xb = ["aria-label"], Zb = { class: "pano-stage-wrap" }, Jb = ["innerHTML"], Qb = {
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
    const f = /* @__PURE__ */ P0(null), g = _i(() => n.readOnly === !0), y = _i(() => n.shellPreset || Dh(n.type)), w = _i(() => {
      var C;
      const R = Array.isArray((C = y.value) == null ? void 0 : C.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return g.value && R.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: te.fullscreen
      }), R;
    });
    function p() {
      const R = f.value;
      return R ? Array.from(R.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((C) => C instanceof HTMLElement ? !C.hidden && C.tabIndex >= 0 && C.offsetParent !== null : !1) : [];
    }
    function N() {
      var T;
      const C = p()[0] || f.value;
      (T = C == null ? void 0 : C.focus) == null || T.call(C);
    }
    function P() {
      var R;
      u != null && u.isConnected && ((R = u.focus) == null || R.call(u)), u = null;
    }
    function E(R) {
      var C, T, W, L;
      if (!R.defaultPrevented) {
        if (R.key === "Tab") {
          const dt = p();
          if (!dt.length) {
            R.preventDefault(), (T = (C = f.value) == null ? void 0 : C.focus) == null || T.call(C);
            return;
          }
          const Q = dt[0], Pt = dt[dt.length - 1], z = document.activeElement;
          if (R.shiftKey) {
            (z === Q || z === f.value || !((W = f.value) != null && W.contains(z))) && (R.preventDefault(), Pt.focus());
            return;
          }
          (z === Pt || !((L = f.value) != null && L.contains(z))) && (R.preventDefault(), Q.focus());
          return;
        }
        R.key === "Escape" && r("close");
      }
    }
    function I() {
      s || (a = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function A() {
      s && (document.body.style.overflow = a, s = !1);
    }
    function O(R) {
      document.removeEventListener("keydown", E), R ? (u || (u = document.activeElement), I(), document.addEventListener("keydown", E), _d(() => {
        N();
      })) : (A(), P());
    }
    return Id(() => {
      O(n.open);
    }), Ed(() => {
      A(), document.removeEventListener("keydown", E), P();
    }), bo(() => n.open, (R) => {
      O(R);
    }), (R, C) => t.open ? (ge(), Te("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: C[0] || (C[0] = g1((T) => r("close"), ["self"]))
    }, [
      we("section", {
        ref_key: "modalRef",
        ref: f,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": t.nodeTitle,
        tabindex: "-1"
      }, [
        we("div", Zb, [
          C[1] || (C[1] = th('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
          g.value ? wo("", !0) : (ge(), Te(ze, { key: 0 }, [
            Je(Ub, {
              buttons: y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Je(Fb, {
              "paint-swatches": t.paintSwatches,
              panes: y.value.paintPanes || []
            }, null, 8, ["paint-swatches", "panes"])
          ], 64)),
          Je(Yb, {
            buttons: y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Je(Cb, { buttons: w.value }, null, 8, ["buttons"]),
          C[2] || (C[2] = we("div", {
            class: "pano-selection-menu",
            "data-selection-menu": ""
          }, null, -1)),
          we("button", {
            class: "pano-btn pano-btn-icon pano-output-preview-toggle",
            "data-action": "toggle-output-preview-size",
            "aria-label": "Expand Preview",
            "data-tip": "Expand preview",
            style: { display: "none" },
            innerHTML: qc(te).fullscreen
          }, null, 8, Jb),
          C[3] || (C[3] = we("div", {
            class: "pano-tooltip",
            "data-tooltip": ""
          }, null, -1))
        ]),
        t.hideSidebar ? wo("", !0) : (ge(), ki(Hb, {
          key: 0,
          "node-title": t.nodeTitle
        }, null, 8, ["node-title"]))
      ], 8, Xb)
    ])) : wo("", !0);
  }
}, qo = "state_json", Dr = "sticker_image_1", cc = "external_image", lc = "pano_sticker_input_images", Ao = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], De = Math.PI / 180, Or = 180 / Math.PI, Yo = 24, tv = 4, ev = 4, Qi = /* @__PURE__ */ new Map(), Dc = /* @__PURE__ */ new Map(), ta = /* @__PURE__ */ new Map(), Et = {
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
  image: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M2.5 2h11A1.5 1.5 0 0 1 15 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9A1.5 1.5 0 0 1 2.5 2ZM2 9.56l2.77-2.77a1 1 0 0 1 1.41 0l1.32 1.32 2.82-2.82a1 1 0 0 1 1.42 0L14 7.55V3.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v6.06Zm0 1.41V12.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V8.97L10.8 5.76 7.85 8.7a.75.75 0 0 1-1.06 0L5.47 7.38 2 10.97ZM5.5 4.75a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5Z' fill='currentColor'/></svg>",
  fullscreen_close: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6 1V1.75V5C6 5.55229 5.55228 6 5 6H1.75H1V4.5H1.75H4.5V1.75V1H6ZM14.25 6H15V4.5H14.25H11.5V1.75V1H10V1.75V5C10 5.55228 10.4477 6 11 6H14.25ZM10 14.25V15H11.5V14.25V11.5H14.29H15.04V10H14.29H11C10.4477 10 10 10.4477 10 11V14.25ZM1.75 10H1V11.5H1.75H4.5V14.25V15H6V14.25V11C6 10.4477 5.55229 10 5 10H1.75Z' fill='currentColor'/></svg>",
  copy: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.2' y='5.2' width='7.8' height='7.8' rx='1.4'/><rect x='3' y='3' width='7.8' height='7.8' rx='1.4'/></svg>",
  chevron: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m4.5 6.5 3.5 3.5 3.5-3.5'/></svg>",
  circle_dashed_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10.1 2.6A9.9 9.9 0 0 1 13.9 2.6'/><path d='M17.8 4.2a9.9 9.9 0 0 1 2 2.8'/><path d='M21.4 10.1a9.9 9.9 0 0 1 0 3.8'/><path d='M19.8 17.8a9.9 9.9 0 0 1-2.8 2'/><path d='M13.9 21.4a9.9 9.9 0 0 1-3.8 0'/><path d='M6.2 19.8a9.9 9.9 0 0 1-2-2.8'/><path d='M2.6 13.9a9.9 9.9 0 0 1 0-3.8'/><path d='M4.2 6.2a9.9 9.9 0 0 1 2.8-2'/></svg>",
  // Source: Lucide paintbrush-vertical
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  lock_closed: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z' fill='currentColor'></path></svg>",
  lock_open: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14 6V4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5V6H10.5H12V7.5V12.5C12 13.8807 10.8807 15 9.5 15H2.5C1.11929 15 0 13.8807 0 12.5V7.5V6H1.5H8.5V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V6H14ZM10.5 7.5H10H8.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H9.5C10.0523 13.5 10.5 13.0523 10.5 12.5V7.5Z' fill='currentColor'></path></svg>"
};
function qe(t) {
  return Number(t) === 180 ? 180 : 360;
}
function nv(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function rv(t) {
  return 1 - Math.pow(1 - t, 3);
}
function iv(t) {
  return t * t * t;
}
function Gn(t, e, n) {
  return { x: t, y: e, z: n };
}
function so(t, e) {
  return Gn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function co(t, e) {
  return Gn(t.x * e, t.y * e, t.z * e);
}
function Sn(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function lo(t, e) {
  return Gn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function si(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Gn(t.x / e, t.y / e, t.z / e);
}
function Fn(t, e) {
  const n = t * De, r = e * De, a = Math.cos(r);
  return Gn(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function zf(t) {
  return {
    yaw: Ye(Math.atan2(t.x, t.z) * Or),
    pitch: U(Math.asin(U(t.y, -1, 1)) * Or, -90, 90)
  };
}
function wr(t, e) {
  let n = !1;
  for (let r = 0, a = e.length - 1; r < e.length; a = r++) {
    const s = e[r].x, u = e[r].y, f = e[a].x, g = e[a].y;
    u > t.y != g > t.y && t.x < (f - s) * (t.y - u) / (g - u || 1e-6) + s && (n = !n);
  }
  return n;
}
function Lr(t, e) {
  const n = t.x - e.x, r = t.y - e.y;
  return n * n + r * r;
}
function Hf(t, e, n) {
  const r = Number(n.x || 0) - Number(e.x || 0), a = Number(n.y || 0) - Number(e.y || 0), s = Number(t.x || 0) - Number(e.x || 0), u = Number(t.y || 0) - Number(e.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return Lr(t, e);
  const g = U((s * r + u * a) / f, 0, 1), y = Number(e.x || 0) + r * g, w = Number(e.y || 0) + a * g, p = Number(t.x || 0) - y, N = Number(t.y || 0) - w;
  return p * p + N * N;
}
function rr(t, e, n) {
  return t + (e - t) * n;
}
function Nn(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(U(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(U(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(U(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${U(n, 0, 1)})`;
}
function av(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let uo = { fillStyle: "", url: "" };
function ov(t, e, n) {
  if (uo.url && uo.fillStyle === String(t || ""))
    return uo.url;
  const r = av(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Yo}" height="${Yo}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return uo = { fillStyle: String(t || ""), url: r }, r;
}
function Co(t, e, n = 0.015) {
  return !t || !e ? !1 : Math.abs(Number(t.r ?? 0) - Number(e.r ?? 0)) <= n && Math.abs(Number(t.g ?? 0) - Number(e.g ?? 0)) <= n && Math.abs(Number(t.b ?? 0) - Number(e.b ?? 0)) <= n && Math.abs(Number(t.a ?? 1) - Number(e.a ?? 1)) <= n;
}
function un(t) {
  return {
    r: U(Number((t == null ? void 0 : t.r) ?? 0), 0, 1),
    g: U(Number((t == null ? void 0 : t.g) ?? 0), 0, 1),
    b: U(Number((t == null ? void 0 : t.b) ?? 0), 0, 1),
    a: U(Number((t == null ? void 0 : t.a) ?? 1), 0, 1)
  };
}
function $e(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function sv(t) {
  return Ao.some((e) => Co(t, e.color));
}
function uc(t, e, n) {
  const r = (Number(t) % 1 + 1) % 1, a = U(Number(e), 0, 1), s = U(Number(n), 0, 1);
  if (a <= 1e-6) return { r: s, g: s, b: s };
  const u = Math.floor(r * 6), f = r * 6 - u, g = s * (1 - a), y = s * (1 - f * a), w = s * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: s, g: w, b: g };
    case 1:
      return { r: y, g: s, b: g };
    case 2:
      return { r: g, g: s, b: w };
    case 3:
      return { r: g, g: y, b: s };
    case 4:
      return { r: w, g, b: s };
    default:
      return { r: s, g, b: y };
  }
}
function Yi(t) {
  const e = U(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), n = U(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), r = U(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), a = Math.max(e, n, r), s = Math.min(e, n, r), u = a - s;
  let f = 0;
  u > 1e-6 && (a === e ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : a === n ? f = ((r - e) / u + 2) / 6 : f = ((e - n) / u + 4) / 6);
  const g = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: g, v: a };
}
function fc(t) {
  const e = Number(t);
  return Number.isFinite(e) ? Number(e.toFixed(3)).toString() : "0";
}
function jf(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : Number(e);
}
function cv(t, e) {
  const n = jf(t, 1), r = jf(e, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, s = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(r * a)), f = (p, N) => N ? f(N, p % N) : p, g = f(s, u) || 1, y = Math.max(1, Math.round(s / g)), w = Math.max(1, Math.round(u / g));
  return `${y}:${w}`;
}
function Tc(t) {
  const e = U(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * De, n = U(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * De;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function lv(t) {
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
function Fr(t) {
  const e = Tc(t);
  return lv(e) || cv(e, 1);
}
function uv(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = Fr(e), e;
}
function ci(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : Fr(t);
}
let fo = null;
function fv() {
  return fo || (fo = new Promise((t) => {
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
  }), fo);
}
const Th = "pano_suite.ui_settings.v1", Rh = "pano_suite.node_grid_visibility.v1";
let hi = null, $n = null, ho = { text: null, parsed: null };
function fa(t) {
  const e = t && typeof t == "object" ? t : {}, n = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function dv() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Th)) || "").trim();
    if (!e) return hi ? fa(hi) : null;
    const n = JSON.parse(e), r = fa(n);
    return hi = r, r;
  } catch {
    return hi ? fa(hi) : null;
  }
}
function hv(t) {
  var n;
  const e = fa(t);
  hi = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Th, JSON.stringify(e));
  } catch {
  }
  return e;
}
function Lh() {
  var t;
  if ($n && typeof $n == "object")
    return $n;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Rh)) || "").trim();
    if (!e)
      return $n = {}, $n;
    const n = JSON.parse(e);
    return $n = n && typeof n == "object" ? n : {}, $n;
  } catch {
    return $n = {}, $n;
  }
}
function pv(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const a = Lh()[n];
  return typeof a == "boolean" ? a : !!e;
}
function gv(t, e) {
  var a;
  const n = String(t ?? "").trim();
  if (!n) return;
  const r = Lh();
  r[n] = !!e, $n = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Rh, JSON.stringify(r));
  } catch {
  }
}
function mv(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([n, r]) => {
    e[n] = r && typeof r == "object" ? { ...r } : r;
  }), e;
}
function yv(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const n = { ...e };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function bv(t) {
  var r, a;
  const e = Array.isArray((r = t == null ? void 0 : t.paint) == null ? void 0 : r.strokes) ? t.paint.strokes.length : 0, n = Array.isArray((a = t == null ? void 0 : t.mask) == null ? void 0 : a.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: n };
}
function Uf(t) {
  const { paintCount: e, maskCount: n } = bv(t), r = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
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
function li(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Bf(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function vv(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : uv(e)) : [];
}
function _v(t, e = 2048, n = "#00ff00", r = 360) {
  const a = dv(), s = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: qe(r),
    bg_color: n,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ua(null),
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
    if (ho.text === u ? f = ho.parsed : (f = JSON.parse(u), ho = { text: u, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return s;
    const g = {
      ...s,
      ...f,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: mv(f.assets),
      stickers: yv(f.stickers),
      shots: vv(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: ua(f.painting),
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
      active: f.active && typeof f.active == "object" ? { ...f.active } : { ...s.active }
    };
    return a && (g.ui_settings = fa({ ...g.ui_settings, ...a })), g.output_preset = Lc(e, Number(g.output_preset || s.output_preset)), g.bg_color = String(n || g.bg_color || s.bg_color), g.coverage = qe(r), delete g.editor_history, g;
  } catch {
    return ho = { text: u, parsed: null }, s;
  }
}
function pn(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function ul(t) {
  if (!t || t.__panoCoverageWidgetSyncInstalled) return;
  const e = pn(t, "coverage");
  if (!e) return;
  const n = typeof e.callback == "function" ? e.callback.bind(e) : null;
  e.callback = function(...r) {
    var s, u, f, g, y, w, p, N, P, E;
    const a = n ? n(...r) : void 0;
    return t.__panoStateCache = null, t.__panoLiveStateOverride = null, t.__panoWrappedErpCache = null, t.__panoPanoBackgroundCache = null, (u = (s = t.__panoPreviewNodeRuntime) == null ? void 0 : s.requestDraw) == null || u.call(s), (g = (f = t.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || g.call(f), (y = t.setDirtyCanvas) == null || y.call(t, !0, !0), (p = (w = t.graph) == null ? void 0 : w.setDirtyCanvas) == null || p.call(w, !0, !0), (E = (P = (N = gn) == null ? void 0 : N.canvas) == null ? void 0 : P.setDirty) == null || E.call(P, !0, !0), a;
  }, t.__panoCoverageWidgetSyncInstalled = !0;
}
function wv(t) {
  const e = String(t ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(e) || /^#?[0-9a-fA-F]{3}$/.test(e);
}
function Gf(t) {
  const e = String(t ?? "").trim();
  return e.startsWith("{") && e.endsWith("}");
}
function xv(t) {
  var P, E, I, A, O;
  if (!t || t.__panoCoverageWidgetOrderMigrated) return;
  const e = pn(t, "coverage"), n = pn(t, "bg_color"), r = pn(t, qo), a = pn(t, "sticker_state");
  if (!e || !n || !r) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const s = String(e.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(s) && wv(s) && (Gf(u) || u === ""))) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (Gf(u))
    try {
      const R = JSON.parse(u);
      y = String(qe(R == null ? void 0 : R.coverage));
    } catch {
      y = "360";
    }
  const w = s, p = u, N = f;
  e.value = y, (P = e.callback) == null || P.call(e, y), n.value = w, (E = n.callback) == null || E.call(n, w), r.value = p, (I = r.callback) == null || I.call(r, p), a && (a.value = N, (A = a.callback) == null || A.call(a, N)), (O = t.setDirtyCanvas) == null || O.call(t, !0, !0), t.__panoCoverageWidgetOrderMigrated = !0;
}
function po(t) {
  return String(t ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function Sv(t, e) {
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
function Nv(t, e) {
  (Array.isArray(t == null ? void 0 : t.widgets) ? t.widgets : []).forEach((r) => {
    var s, u;
    const a = String((r == null ? void 0 : r.name) || "");
    (a === e || a.trim() === e || a.toLowerCase().includes(String(e).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (s = r.inputEl) != null && s.style && (r.inputEl.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function Rc(t, e, n) {
  var s, u;
  if (!t || typeof t.addWidget != "function") return null;
  let a = (Array.isArray(t.widgets) ? t.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(e));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (s = a.inputEl) != null && s.style && (a.inputEl.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = t == null ? void 0 : t.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), a) : (a = t.addWidget("button", e, null, n), a && (a.serialize = !1), a);
}
function go(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Lc(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : e;
}
function Oh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Mv(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Fh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function kv(t, e, n = null) {
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
  return !r && n != null && (r = Mv(t == null ? void 0 : t.graph, n)), r;
}
function Xo(t) {
  var a;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const r = `/view?${n.toString()}`;
  return typeof ((a = Ze) == null ? void 0 : a.apiURL) == "function" ? Ze.apiURL(r) : r;
}
function Pv(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Av(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function Cv(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function $h(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Pv(e)) return [e];
  const { filename: n, subfolder: r } = Av(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => Xo({
    filename: n,
    subfolder: r,
    type: s
  }));
  return Cv([...a, e]);
}
function Iv(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? Xo({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function da(t) {
  var r;
  const e = (r = gn) == null ? void 0 : r.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  return e instanceof Map ? e.get(t) || e.get(n) || e.get(Number(n)) || null : e[t] || e[n] || null;
}
function Mi(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Mi(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return Xo({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Mi(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Xo(t);
}
function Ev(t, e = -1) {
  var a;
  const n = [];
  Array.isArray(t == null ? void 0 : t.images) && t.images.length && n.push(t.images), Array.isArray((a = t == null ? void 0 : t.ui) == null ? void 0 : a.images) && t.ui.images.length && n.push(t.ui.images);
  const r = [];
  for (const s of n)
    !Array.isArray(s) || !s.length || (e >= 0 && e < s.length && r.push(s[e]), r.push(...s));
  return r;
}
function dc(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t || []) {
    const a = Mi(r);
    !a || n.has(a) || (n.add(a), e.push(a));
  }
  return e;
}
function Dv(t, e, n, r = null) {
  var p;
  const a = da(t == null ? void 0 : t.id), s = Array.isArray((p = a == null ? void 0 : a.ui) == null ? void 0 : p[e]) ? a.ui[e] : Array.isArray(a == null ? void 0 : a[e]) ? a[e] : [], u = Array.isArray(s) && s.length ? s[0] : null, f = Mi(u);
  if (!f) return null;
  const g = `__ui__${e}`, y = n.get(g);
  if (y && y.__panoSrc === f) return y;
  const w = new Image();
  return w.__panoSrc = f, w.onload = () => {
    typeof r == "function" && r(w);
  }, w.src = f, n.set(g, w), w;
}
function Tv(t, e) {
  var R, C;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], a = r.findIndex((T) => String((T == null ? void 0 : T.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const s = r[a], u = s == null ? void 0 : s.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = Oh(t.graph, u), { originId: g, originSlot: y } = Fh(f);
  if (g == null) return { src: "", sourceType: "", inputName: n };
  const w = kv(t, a, g), p = Number(y || 0);
  if (!w) return { src: "", sourceType: "", inputName: n };
  let N = [];
  try {
    N = typeof ((R = gn) == null ? void 0 : R.getNodeImageUrls) == "function" ? gn.getNodeImageUrls(w) || [] : [];
  } catch {
    N = [];
  }
  if (Array.isArray(N) && N.length) {
    const T = [];
    p >= 0 && p < N.length && T.push(N[p]), T.push(...N);
    const W = dc(T);
    if (W.length) return { src: W[0], srcCandidates: W, sourceType: "appNodeImageUrls", inputName: n };
  }
  const P = da((w == null ? void 0 : w.id) ?? g), E = Ev(P, p), I = dc(E);
  if (I.length) return { src: I[0], srcCandidates: I, sourceType: "nodeOutputs", inputName: n };
  const A = Array.isArray(w == null ? void 0 : w.imgs) ? w.imgs : [];
  if (A.length) {
    const T = [];
    p >= 0 && p < A.length && T.push(A[p]), T.push(...A);
    const W = dc(T);
    if (W.length) return { src: W[0], srcCandidates: W, sourceType: "nodeImgs", inputName: n };
  }
  const O = (C = w == null ? void 0 : w.widgets) == null ? void 0 : C.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image");
  if (O) {
    let T = Mi(O.value);
    if (T && !T.includes("/") && !T.includes(":") && (w.comfyClass === "LoadImage" || w.type === "LoadImage") && (T = Ze.apiURL(`/view?filename=${encodeURIComponent(T)}&type=input&subfolder=`)), T) return { src: T, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function Rv(t, e, n, r = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const s = $h(a);
  if (!s.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(e || "image"), f = t.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === a && f.img) return f.img;
  const g = new Image(), y = { srcRaw: a, resolvedSrc: "", img: g };
  t.__panoLinkedInputImageCache.set(u, y);
  let w = -1;
  const p = () => {
    var P, E;
    if (w += 1, w >= s.length) {
      try {
        (E = (P = t.__panoLinkedInputImageCache) == null ? void 0 : P.delete) == null || E.call(P, u);
      } catch {
      }
      return;
    }
    const N = s[w];
    y.resolvedSrc = N, g.src = N;
  };
  return g.onload = () => {
    var N;
    r == null || r(), (N = t.setDirtyCanvas) == null || N.call(t, !0, !0);
  }, g.onerror = () => {
    var N, P;
    if (w + 1 < s.length) {
      p();
      return;
    }
    try {
      (P = (N = t.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || P.call(N, u);
    } catch {
    }
  }, p(), g;
}
function Lv(t, e, n, r = null) {
  const a = Array.isArray(n) ? n.map((E) => String(E || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = String(e || "image"), u = a.join(`
`), f = t.__panoLinkedInputImageCache.get(s);
  if (f && f.srcRaw === u && f.img) return f.img;
  const g = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((E) => {
    $h(E).forEach((I) => {
      const A = String(I || "").trim();
      !A || y.has(A) || (y.add(A), g.push(A));
    });
  }), !g.length) return null;
  const w = new Image(), p = { srcRaw: u, resolvedSrc: "", img: w };
  t.__panoLinkedInputImageCache.set(s, p);
  let N = -1;
  const P = () => {
    var I, A;
    if (N += 1, N >= g.length) {
      try {
        (A = (I = t.__panoLinkedInputImageCache) == null ? void 0 : I.delete) == null || A.call(I, s);
      } catch {
      }
      return;
    }
    const E = g[N];
    p.resolvedSrc = E, w.src = E;
  };
  return w.onload = () => {
    var E;
    r == null || r(), (E = t.setDirtyCanvas) == null || E.call(t, !0, !0);
  }, w.onerror = () => {
    var E, I;
    if (N + 1 < g.length) {
      P();
      return;
    }
    try {
      (I = (E = t.__panoLinkedInputImageCache) == null ? void 0 : E.delete) == null || I.call(E, s);
    } catch {
    }
  }, P(), w;
}
function Vh(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const r of n) {
    const a = Tv(t, r);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Kf(t, e = [], n = null, r = "") {
  const a = Array.isArray(e) ? e : [e], s = Vh(t, a), u = String(r || a.join("|") || "image_exact"), f = Array.isArray(s == null ? void 0 : s.srcCandidates) ? s.srcCandidates : [];
  if (f.length) return Lv(t, u, f, n);
  const g = String((s == null ? void 0 : s.src) || "").trim();
  return g ? Rv(t, u, g, n) : null;
}
async function ha(t, e, n = {}) {
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, s = r, u = Sv(t, e);
  await fv();
  const f = pn(t, "output_preset"), g = pn(t, "coverage"), y = pn(t, "bg_color"), w = pn(t, qo), p = _v(
    String((w == null ? void 0 : w.value) || ""),
    Lc(f == null ? void 0 : f.value, 2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    qe(g == null ? void 0 : g.value)
  );
  t.__panoLiveStateOverride = JSON.stringify(p), e === "cutout" && (p.shots = Array.isArray(p.shots) ? p.shots.slice(0, 1) : [], p.shots.length || (p.active.selected_shot_id = null));
  const N = document.createElement("div");
  document.body.appendChild(N);
  const P = b1(Qb, {
    open: !0,
    type: e,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: Dh(e),
    paintSwatches: Ao.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Nn(i.color, 1)
    })),
    onClose: () => ti()
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
  const E = N.querySelector(".pano-modal-overlay"), I = N.querySelector(".pano-modal"), A = I == null ? void 0 : I.querySelector("[data-stage-overlay]"), O = I == null ? void 0 : I.querySelector("[data-stage-background]"), R = I == null ? void 0 : I.querySelector(".pano-stage-wrap");
  if (!E || !I || !A || !O || !R)
    throw P.unmount(), N.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const C = document.createElement("div");
  C.setAttribute("aria-hidden", "true"), C.style.position = "absolute", C.style.left = "0", C.style.top = "0", C.style.pointerEvents = "none", C.style.zIndex = "12", C.style.display = "none", C.style.willChange = "transform,width,height,background,border-radius", R == null || R.appendChild(C);
  const T = document.createElement("div");
  T.className = "pano-paint-size-preview", T.setAttribute("aria-hidden", "true");
  const W = document.createElement("div");
  W.className = "pano-paint-size-preview-sample", T.appendChild(W), R == null || R.appendChild(T);
  const L = A.getContext("2d"), dt = Na(), Q = I.querySelector("[data-side]"), Pt = I.querySelectorAll("[data-view]"), z = I.querySelector(".pano-view-toggle"), ct = I.querySelector("[data-fov-value]"), it = I.querySelector("[data-selection-menu]"), _t = I.querySelector("[data-action='toggle-output-preview-size']"), bt = I.querySelector("[data-tool-ui-action='add-or-look']"), J = I.querySelector("[data-view='frame']"), ot = I.querySelector("[data-action='toggle-fullscreen']"), lt = I.querySelector("[data-tooltip]"), q = I.querySelector("[data-tool-rail]"), ut = I.querySelector("[data-paint-dock]"), St = Array.from(I.querySelectorAll("[data-paint-pane]")), Ct = I.querySelector("[data-paint-color-row]"), Nt = I.querySelector("[data-paint-color-pop]"), ne = I.querySelector("[data-paint-color-preview]"), Se = I.querySelector("[data-paint-color-sv]"), Be = I.querySelector("[data-paint-color-sv-cursor]"), Ne = I.querySelector("[data-paint-hue-strip]"), Ge = I.querySelector("[data-paint-hue-handle]"), Ce = I.querySelector("[data-paint-alpha-slider]"), an = I.querySelector("[data-paint-alpha-value]"), on = I.querySelector("[data-paint-color-history-wrap]"), yn = I.querySelector("[data-paint-color-history]"), S = Array.from(I.querySelectorAll("[data-paint-size-row]")), D = Array.from(I.querySelectorAll("[data-paint-clear-row]")), $ = Array.from(I.querySelectorAll("[data-paint-layer-clear-current]")), G = Array.from(I.querySelectorAll("[data-paint-size-slider]")), K = Array.from(I.querySelectorAll("[data-paint-size-value]"));
  let B = 0, nt = 0;
  R == null || R.removeAttribute("data-stage-ready"), R == null || R.setAttribute("data-stage-loading-kind", "boot"), A.style.opacity = "1", O.style.opacity = "0", a && (Q == null || Q.remove(), I.classList.add("pano-modal-readonly"));
  function st(i) {
    ut && ut.classList.toggle("is-hidden", !i);
  }
  const at = () => {
    if (!h.customPaintSessionStart) return;
    if (Co(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (sv(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      un(h.customPaintColor),
      ...h.customPaintHistory.filter((o) => !Co(o, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, tt = (i = !1) => {
    !Nt || Nt.hidden || (i ? at() : h.customPaintSessionStart = null, Nt.hidden = !0);
  }, xt = () => {
    Nt && (Nt.hidden && (h.customPaintSessionStart = un(h.customPaintColor)), Nt.hidden = !1);
  };
  I.addEventListener("pointerdown", (i) => {
    Ga(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (I.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), tt(!0), e === "cutout" && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, Ht(), pt())));
  });
  const ft = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, wt = JSON.stringify(Bf(p)), h = {
    mode: "pano",
    selectedId: ft,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: qe(p.coverage),
    historyController: yb(80, { entries: [wt], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: nr,
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
    showGrid: pv(t == null ? void 0 : t.id, !0),
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
    paintEngine: Nc(),
    paintEngineDescriptorKey: "",
    paintEngineRevisionKey: "",
    paintStrokeRevision: 0,
    paintCompositeRevision: 0,
    objectVisualRevision: 0,
    livePaintInteractionRevision: 0,
    selectedIds: [],
    _sortedItemsCache: null,
    _strokeGeomCache: /* @__PURE__ */ new Map(),
    marqueeModifier: !1,
    panelLastValues: null,
    panelWasEnabled: !1,
    viewTween: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null
  };
  e === "stickers" && (h.selectedId = null, p.active.selected_sticker_id = null), h.selectedIds = h.selectedId ? [h.selectedId] : [];
  const ht = /* @__PURE__ */ new Map(), zt = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), Mt = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: e === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, me = {
    timer: 0,
    target: null
  }, ye = {
    active: !1,
    depth: 0
  };
  function Yn(i) {
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
    return o.files && o.files.length ? Array.from(o.files).some((c) => Ha(c)) : !1;
  }
  function An(i) {
    const o = !!i;
    ye.active !== o && (ye.active = o, R.classList.toggle("drop-active", o));
  }
  function Re(i, o, c = h.viewFov, l = 140, d = 620) {
    const m = ny(h.viewYaw, i), _ = o - h.viewPitch, b = c - h.viewFov, v = Math.hypot(m, _) + Math.abs(b) * 0.6, x = Math.round(U(l + v * 2.2, l, d));
    h.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: x,
      startYaw: h.viewYaw,
      startPitch: h.viewPitch,
      startFov: h.viewFov,
      targetPitch: o,
      targetFov: c,
      deltaYaw: m
    }, h.viewInertia.active = !1, h.viewInertia.vx = 0, h.viewInertia.vy = 0, pt();
  }
  pp();
  function Me() {
    return e === "stickers" ? p.stickers : p.shots;
  }
  function ke() {
    const i = p.painting || (p.painting = ua(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Ma(i = "paint") {
    var d, m;
    const o = Array.isArray((m = (d = p.painting) == null ? void 0 : d[i]) == null ? void 0 : m.strokes) ? p.painting[i].strokes : [], c = [], l = /* @__PURE__ */ new Set();
    for (const _ of o) {
      const b = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !b || l.has(b) || (l.add(b), c.push(b));
    }
    return c;
  }
  function zh() {
    return Ma("paint");
  }
  function ka(i, o) {
    const c = String(o || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function Pa(i) {
    const o = String(i || "").trim();
    return o ? `raster:${o}` : "";
  }
  function Ie(i) {
    const o = String(i || "").trim();
    if (!o) return "";
    const c = o.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : o).trim();
  }
  function Pi(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const l = c.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function ds() {
    var o;
    let i = -1;
    for (const c of Array.isArray(p.stickers) ? p.stickers : [])
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of ke())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Array.isArray((o = p.painting) == null ? void 0 : o.raster_objects) ? p.painting.raster_objects : [])
      String((c == null ? void 0 : c.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0)));
    return i + 1;
  }
  function fl(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return null;
    const l = ke();
    let d = l.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === c);
    return d ? o != null && (d.z_index = Math.max(0, Number(o || 0))) : (d = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: o == null ? ds() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(d)), d;
  }
  function Hh(i) {
    if (!(i != null && i.centerUv)) return [];
    const o = Number(i.centerUv.u || 0), c = Number(i.centerUv.v || 0), l = Number(i.halfW || 0), d = Number(i.halfH || 0);
    return [
      {
        u: ((o - l) % 1 + 1) % 1,
        v: U(c - d, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: U(c - d, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: U(c + d, 0, 1)
      },
      {
        u: ((o - l) % 1 + 1) % 1,
        v: U(c + d, 0, 1)
      }
    ];
  }
  function jh() {
    const i = new Set(zh()), c = ke().filter((l) => i.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return i.forEach((l) => {
      c.some((d) => String((d == null ? void 0 : d.actionGroupId) || "") === l) || c.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: ds(),
        locked: !1,
        frame: null
      });
    }), c.sort((l, d) => Number((l == null ? void 0 : l.z_index) || 0) - Number((d == null ? void 0 : d.z_index) || 0)), p.painting.groups = c, c;
  }
  function Uh(i, o, c) {
    var H;
    const l = (Z) => (Number(Z || 0) % 1 + 1) % 1, d = [];
    for (const Z of c) {
      const rt = Z == null ? void 0 : Z.geometry, mt = (rt == null ? void 0 : rt.geometryKind) === "lasso_fill" ? rt == null ? void 0 : rt.points : (rt == null ? void 0 : rt.processedPoints) || (rt == null ? void 0 : rt.rawPoints) || (rt == null ? void 0 : rt.points) || [];
      Array.isArray(mt) && d.push(...mt);
    }
    if (!d.length) return null;
    const m = l(((H = d[0]) == null ? void 0 : H.u) || 0);
    let _ = 0, b = 0;
    d.forEach((Z) => {
      const rt = l((Z == null ? void 0 : Z.u) || 0);
      _ += m + dn(rt, m), b += Number((Z == null ? void 0 : Z.v) || 0);
    });
    const v = (_ / d.length % 1 + 1) % 1;
    let x = 1 / 0, M = -1 / 0, k = 1 / 0, F = -1 / 0;
    d.forEach((Z) => {
      const rt = l((Z == null ? void 0 : Z.u) || 0), mt = dn(rt, v);
      x = Math.min(x, mt), M = Math.max(M, mt);
      const et = Number((Z == null ? void 0 : Z.v) || 0);
      k = Math.min(k, et), F = Math.max(F, et);
    });
    const V = c.reduce((Z, rt) => {
      const mt = mr(String((rt == null ? void 0 : rt.toolKind) || "pen")), et = en[mt] || en[nr], gt = Math.max(1, Number((rt == null ? void 0 : rt.size) || 10)) * Math.max(0.1, Number((et == null ? void 0 : et.sizeScale) ?? 1));
      return Math.max(Z, gt);
    }, 0), Y = Math.max(35e-4, V / 2048);
    return {
      centerUv: { u: ((v + (x + M) * 0.5) % 1 + 1) % 1, v: U((k + F) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (M - x) * 0.5 + Y,
      halfH: (F - k) * 0.5 + Y,
      uvPad: Y
    };
  }
  function fr(i, o, c) {
    const l = String(i || "").trim();
    if (!l) return null;
    const d = ke().find((_) => String((_ == null ? void 0 : _.actionGroupId) || "") === l);
    if (!d) return null;
    const m = c || bn(l, o);
    return d.frame = Uh(l, o, m), d.frame;
  }
  function Kr() {
    var l;
    const i = (Array.isArray(p.stickers) ? p.stickers : []).map((d) => ({
      type: "sticker",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), o = jh().map((d) => ({
      type: "strokeGroup",
      id: String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || ""),
      actionGroupId: String((d == null ? void 0 : d.actionGroupId) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), c = (Array.isArray((l = p.painting) == null ? void 0 : l.raster_objects) ? p.painting.raster_objects : []).filter((d) => String((d == null ? void 0 : d.layerKind) || "paint") === "paint").map((d) => ({
      type: "rasterObject",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    }));
    return [...i, ...o, ...c].sort((d, m) => Number(d.z_index || 0) - Number(m.z_index || 0));
  }
  function hs(i = !0) {
    var c, l, d, m, _, b;
    const o = Kr().filter((v) => v.type === "strokeGroup").map((v) => String(v.actionGroupId || "")).filter((v) => !!v);
    if (i) {
      const v = String(((l = (c = h.interaction) == null ? void 0 : c.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), x = String(((m = (d = h.interaction) == null ? void 0 : d.stroke) == null ? void 0 : m.layerKind) || "").trim(), M = String(((b = (_ = h.interaction) == null ? void 0 : _.stroke) == null ? void 0 : b.toolKind) || "").trim();
      v && x === "paint" && M !== "eraser" && !o.includes(v) && o.push(v);
    }
    return o;
  }
  function dl(i = !0) {
    var b, v, x, M, k, F;
    const o = Kr();
    if (!i) return o;
    const c = String(((v = (b = h.interaction) == null ? void 0 : b.stroke) == null ? void 0 : v.actionGroupId) || "").trim(), l = String(((M = (x = h.interaction) == null ? void 0 : x.stroke) == null ? void 0 : M.layerKind) || "").trim(), d = String(((F = (k = h.interaction) == null ? void 0 : k.stroke) == null ? void 0 : F.toolKind) || "").trim();
    if (!c || l !== "paint" || d === "eraser" || o.some((V) => V.type === "strokeGroup" && String(V.actionGroupId || "") === c))
      return o;
    const m = ue();
    let _ = o.reduce((V, Y) => Math.max(V, Number((Y == null ? void 0 : Y.z_index) || 0)), -1) + 1;
    return m && Pe(m) && String(m.actionGroupId || "") === c && (_ = Number(m.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: _,
        item: null
      }
    ].sort((V, Y) => Number((V == null ? void 0 : V.z_index) || 0) - Number((Y == null ? void 0 : Y.z_index) || 0));
  }
  function Bh() {
    return ke().slice().sort((i, o) => Number((i == null ? void 0 : i.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((i) => Ci(ka("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function Gh() {
    var i;
    return (Array.isArray((i = p.painting) == null ? void 0 : i.raster_objects) ? p.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, c) => Number((o == null ? void 0 : o.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((o) => Ai(Pa((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function hl(i = h.interaction) {
    const o = String((i == null ? void 0 : i.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, l = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || l;
    }
    return !1;
  }
  function Kh() {
    var o, c, l, d;
    let i = null;
    try {
      const m = hs(), _ = ((d = (l = (c = (o = h.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, m)) == null ? void 0 : l.displayPaint) == null ? void 0 : d.canvas) || null;
      _ && (i = {
        source: _,
        revision: `${Yr()}:${ps()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function ps() {
    var d, m, _, b, v, x, M;
    const i = h.interaction, o = String((i == null ? void 0 : i.kind) || "");
    if (!hl(i)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const k = ((d = i == null ? void 0 : i.stroke) == null ? void 0 : d.geometry) || null, F = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), V = ((_ = k == null ? void 0 : k.rawPoints) == null ? void 0 : _.length) ?? ((b = k == null ? void 0 : k.points) == null ? void 0 : b.length) ?? 0, Y = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${F || "paint"}_${o}_live${Y}_${V}_${h.livePaintInteractionRevision}`;
    }
    const c = String(((v = i == null ? void 0 : i.item) == null ? void 0 : v.actionGroupId) || ""), l = String(((x = i == null ? void 0 : i.item) == null ? void 0 : x.rasterObjectId) || ((M = i == null ? void 0 : i.item) == null ? void 0 : M.id) || "");
    return `_${o}_${c || l || "active"}_${h.livePaintInteractionRevision}`;
  }
  function gs() {
    return [...Array.isArray(p.stickers) ? p.stickers : []];
  }
  function ms(i) {
    return !1;
  }
  function Le(i) {
    return !!i && Array.isArray(p.stickers) && p.stickers.includes(i);
  }
  function tn() {
    var i;
    return Array.isArray((i = p.painting) == null ? void 0 : i.raster_objects) ? p.painting.raster_objects : [];
  }
  function Ai(i) {
    const o = Ie(i);
    if (!o) return null;
    const c = tn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: Pa(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Oe(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const o = Ie(i.rasterObjectId || i.id || "");
    return !!o && !!Ai(Pa(o));
  }
  function Ci(i) {
    const o = Pi(i), c = String(o.actionGroupId || "").trim();
    if (!c) return null;
    const l = ke().find((d) => String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || "") === c || String((d == null ? void 0 : d.actionGroupId) || "") === c);
    return l ? {
      ...l,
      id: ka("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function Pe(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const o = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!o && !!Ci(ka(c, o));
  }
  function bn(i, o = null) {
    const c = Pi(i, o), l = String(c.actionGroupId || "").trim();
    return l ? Qr(c.layerKind).filter((d) => String((d == null ? void 0 : d.actionGroupId) || "").trim() === l) : [];
  }
  function Wh(i, o = "paint") {
    var m, _, b;
    const c = String(i || "").trim(), d = `geomv5:${String(o || "paint").trim() || "paint"}:${c}:${h.mode}:${Ri()}`;
    if (h.mode === "frame") {
      const v = Ae(), x = String((v == null ? void 0 : v.id) || "");
      return `${d}:frame:${x}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(Number((m = h.frameView) == null ? void 0 : m.zoom) * 1e3)}:${Math.round(Number(((_ = h.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((b = h.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function Aa(i, o, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: U(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function dn(i, o) {
    let c = Number(i || 0) - Number(o || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function ys(i, o = null, c = null) {
    var x;
    const l = Pi(i, o), d = Array.isArray(c) ? c : bn(l.actionGroupId, l.layerKind), m = [];
    if (d.forEach((M) => {
      const k = (M == null ? void 0 : M.geometry) || null, F = (k == null ? void 0 : k.geometryKind) === "lasso_fill" ? k == null ? void 0 : k.points : (k == null ? void 0 : k.processedPoints) || (k == null ? void 0 : k.rawPoints) || (k == null ? void 0 : k.points) || [];
      Array.isArray(F) && m.push(...F);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((x = m[0]) == null ? void 0 : x.u) || 0);
    let b = 0, v = 0;
    return m.forEach((M) => {
      b += _ + dn(Number((M == null ? void 0 : M.u) || 0), _), v += Number((M == null ? void 0 : M.v) || 0);
    }), {
      u: (b / m.length % 1 + 1) % 1,
      v: U(v / m.length, 0, 1)
    };
  }
  function Ca(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const d = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), _ = dn(Number(i.u || 0), d), b = Number(i.v || 0) - m, v = Number(l || 0) * De, x = Math.cos(v), M = Math.sin(v), k = Math.max(0.02, Number(c || 1)), F = (_ * x - b * M) * k, V = (_ * M + b * x) * k;
    return {
      ...i,
      u: ((d + F) % 1 + 1) % 1,
      v: U(m + V, 0, 1)
    };
  }
  function pl(i, o, c, l = null, d = null, m = null) {
    const _ = Pi(i, d), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const v = Qr(_.layerKind), x = Array.isArray(l) ? new Map(l.map((k) => [String((k == null ? void 0 : k.id) || ""), k])) : null;
    let M = !1;
    if (v.forEach((k) => {
      if (String((k == null ? void 0 : k.actionGroupId) || "").trim() !== b) return;
      const F = (x == null ? void 0 : x.get(String((k == null ? void 0 : k.id) || ""))) || k, V = k == null ? void 0 : k.geometry, Y = F == null ? void 0 : F.geometry;
      !V || !Y || (Array.isArray(Y.points) && (V.points = Y.points.map((H) => Aa(H, o, c)), M = !0), Array.isArray(Y.rawPoints) && (V.rawPoints = Y.rawPoints.map((H) => Aa(H, o, c)), M = !0), Array.isArray(Y.processedPoints) && (V.processedPoints = Y.processedPoints.map((H) => Aa(H, o, c)), M = !0));
    }), M && m) {
      const k = ke().find((F) => String((F == null ? void 0 : F.actionGroupId) || "") === b);
      k && (k.frame = null);
    }
    return M;
  }
  function gl(i, o = 1, c = 0, l = null, d = null, m = null) {
    const _ = Pi(i, d), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const v = Qr(_.layerKind), x = Array.isArray(l) ? l : bn(b, _.layerKind), M = Array.isArray(x) ? new Map(x.map((V) => [String((V == null ? void 0 : V.id) || ""), V])) : null, k = (m == null ? void 0 : m.centerUv) ?? ys(b, _.layerKind, x);
    let F = !1;
    if (v.forEach((V) => {
      if (String((V == null ? void 0 : V.actionGroupId) || "").trim() !== b) return;
      const Y = (M == null ? void 0 : M.get(String((V == null ? void 0 : V.id) || ""))) || V, H = V == null ? void 0 : V.geometry, Z = Y == null ? void 0 : Y.geometry;
      !H || !Z || (Array.isArray(Z.points) && (H.points = Z.points.map((rt) => Ca(rt, k, o, c)), F = !0), Array.isArray(Z.rawPoints) && (H.rawPoints = Z.rawPoints.map((rt) => Ca(rt, k, o, c)), F = !0), Array.isArray(Z.processedPoints) && (H.processedPoints = Z.processedPoints.map((rt) => Ca(rt, k, o, c)), F = !0));
    }), F && m) {
      const V = ke().find((Y) => String((Y == null ? void 0 : Y.actionGroupId) || "") === b);
      V && (V.frame = null);
    }
    return F;
  }
  function ml(i, o, c, l = null) {
    const d = Ie(i);
    if (!d) return !1;
    const m = tn().find((M) => String((M == null ? void 0 : M.id) || "").trim() === d);
    if (!m) return !1;
    const _ = l && typeof l == "object" ? l : m, b = (_ == null ? void 0 : _.transform) || {}, v = Number(b.du || 0) + Number(o || 0), x = U(Number(b.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = v, m.transform.dv = x, !0;
  }
  function qh(i, o = 1, c = null) {
    const l = Ie(i);
    if (!l) return !1;
    const d = tn().find((x) => String((x == null ? void 0 : x.id) || "").trim() === l);
    if (!d) return !1;
    const m = c && typeof c == "object" ? c : d, _ = (m == null ? void 0 : m.transform) || {}, b = Math.max(0.01, Number(_.scale || 1)), v = U(b * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return d.transform || (d.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), d.transform.scale = v, !0;
  }
  function ue() {
    const i = String(h.selectedId || "");
    if (!i) return null;
    const o = Ci(i);
    if (o) return o;
    const c = Ai(i);
    return c || (e === "cutout" ? gs().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null : Me().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null);
  }
  function Cn() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], o = [], c = /* @__PURE__ */ new Set();
    return i.forEach((l) => {
      const d = String(l || "").trim();
      if (!d || c.has(d)) return;
      c.add(d);
      const m = d === String(h.selectedId || "") ? ue() : Ci(d) || Ai(d) || (e === "cutout" ? gs().find((_) => String((_ == null ? void 0 : _.id) || "") === d) : Me().find((_) => String((_ == null ? void 0 : _.id) || "") === d));
      m && o.push(m);
    }), o;
  }
  function bs(i = null) {
    const o = Array.isArray(i) ? i : Cn();
    if (!o || o.length < 2) return null;
    const c = o.map((x) => sn(x)).filter((x) => (x == null ? void 0 : x.visible) && Array.isArray(x.corners) && x.corners.length);
    if (!c.length) return null;
    const l = c.flatMap((x) => x.corners.map((M) => Number((M == null ? void 0 : M.x) || 0))), d = c.flatMap((x) => x.corners.map((M) => Number((M == null ? void 0 : M.y) || 0))), m = Math.min(...l), _ = Math.max(...l), b = Math.min(...d), v = Math.max(...d);
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
  function Yh(i) {
    const o = String((i == null ? void 0 : i.id) || "").trim();
    return !!o && Array.isArray(h.selectedIds) && h.selectedIds.includes(o);
  }
  function yl() {
    const i = ue();
    return i ? Pe(i) || Oe(i) ? "stroke" : "image" : null;
  }
  function dr(i) {
    if (!i || typeof i != "object") return !1;
    if (Pe(i)) {
      const o = String(i.actionGroupId || i.id || "").trim(), c = ke().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (Oe(i)) {
      const o = Ie(i.rasterObjectId || i.id || ""), c = tn().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function vs(i = null) {
    const o = Array.isArray(i) ? i : Cn();
    return o.length > 0 && o.every((c) => dr(c));
  }
  function Xh(i, o) {
    const c = o === !0;
    if (!i || typeof i != "object") return !1;
    if (Pe(i)) {
      const l = String(i.actionGroupId || i.id || "").trim(), d = ke().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === l);
      return !d || d.locked === c ? !1 : (d.locked = c, !0);
    }
    if (Oe(i)) {
      const l = Ie(i.rasterObjectId || i.id || ""), d = tn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === l);
      return !d || d.locked === c ? !1 : (d.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function Zh() {
    if (r) return;
    const i = Cn();
    if (!i.length) return;
    const o = !vs(i);
    let c = !1;
    i.forEach((l) => {
      Xh(l, o) && (c = !0);
    }), c && (oe(), be(), Ht(), pt());
  }
  function Ia(i) {
    h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && Le(i) ? p.active.selected_sticker_id = i.id || null : p.active.selected_sticker_id = null, i && ms() ? p.active.selected_shot_id = i.id || null : i ? p.active.selected_shot_id = p.active.selected_shot_id : p.active.selected_shot_id = null;
  }
  function Jh(i, o = null) {
    const c = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((_) => {
      const b = String((_ == null ? void 0 : _.id) || "").trim();
      !b || l.has(b) || (l.add(b), c.push(b));
    }), h.selectedIds = c;
    const d = String(o || "").trim();
    h.selectedId = d && c.includes(d) ? d : c[c.length - 1] || null;
    const m = ue();
    p.active.selected_sticker_id = m && Le(m) && m.id || null, c.length || (p.active.selected_shot_id = null);
  }
  function Qh() {
    return (Array.isArray(p.stickers) ? p.stickers : []).map((o, c) => {
      var d, m;
      const l = ve(o) ? String(o.id || Dr) : String(((m = (d = p.assets) == null ? void 0 : d[o.asset_id]) == null ? void 0 : m.name) || o.asset_id || o.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: o,
        label: l
      };
    });
  }
  function tp(i) {
    return i === "frame" ? Et.camera : i === "stroke" ? Et.paintbrush_vertical_tool : Et.image;
  }
  function bl(i) {
    return !i || !i.item ? po(String((i == null ? void 0 : i.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${tp(i.kind)}</span><span>${po(String(i.label || ""))}</span>`;
  }
  function vl() {
    return ds();
  }
  function ve(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === Dr || String(i.source_kind || "") === cc;
  }
  function Wr(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function ep(i) {
    return ve(i) && Wr(i) ? lh : 1;
  }
  function np() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function rp() {
    return String(np() || "") === "lasso_fill";
  }
  function ip() {
    if (r) return;
    const i = ue();
    !i || !ve(i) || (i.visible = Wr(i), cn(), oe(), be(), Gt(), Ht(), pt());
  }
  function ap() {
    if (r || e !== "stickers") return;
    const i = ue();
    if (!i || !ve(i)) return;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return;
    i.yaw_deg = Number(o.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(o.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(o.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = _s(lc, () => {
      pt();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = Pr(
      Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(o.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(o.rot_deg ?? i.rot_deg ?? 0), oe(), be(), Gt(), Ht(), pt();
  }
  function op(i) {
    if (!i || !ve(i)) return null;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return null;
    const c = {
      yaw_deg: Number(o.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? i.rot_deg ?? 0)
    }, l = _s(lc, () => {
      pt();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (c.vFOV_deg = Pr(
      c.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), c;
  }
  function sp() {
    const i = ue();
    if (!i || !ve(i)) return !1;
    const o = op(i);
    if (!o) return !1;
    const c = (l, d) => Math.abs(Number(l || 0) - Number(d || 0)) <= 1e-4;
    return !(c(i.yaw_deg, o.yaw_deg) && c(i.pitch_deg, o.pitch_deg) && c(i.hFOV_deg, o.hFOV_deg) && c(i.vFOV_deg, o.vFOV_deg) && c(i.rot_deg, o.rot_deg));
  }
  function _l(i) {
    var c;
    const o = da(t == null ? void 0 : t.id);
    return Array.isArray((c = o == null ? void 0 : o.ui) == null ? void 0 : c[i]) ? o.ui[i] : Array.isArray(o == null ? void 0 : o[i]) ? o[i] : [];
  }
  function cp(i) {
    const o = da(t == null ? void 0 : t.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, i) ? o.ui[i] : o && Object.prototype.hasOwnProperty.call(o, i) ? o[i] : null;
  }
  function lp(i, o = null) {
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
  function _s(i, o = null) {
    const c = _l(i), l = Array.isArray(c) && c.length ? c[0] : null, d = Mi(l);
    if (!d) return null;
    const m = `__ui__${i}`, _ = ht.get(m);
    if (_ && _.__panoSrc === d) return _;
    const b = new Image();
    return b.__panoSrc = d, b.onload = () => {
      typeof o == "function" ? o(b) : pt();
    }, b.src = d, ht.set(m, b), b;
  }
  function wl(i = null) {
    const o = Kf(t, ["sticker_image"], i, "sticker_image_exact");
    return o || _s(lc, i);
  }
  function xl(i) {
    const o = String(i || "");
    let c = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      c ^= o.charCodeAt(l), c = Math.imul(c, 16777619);
    return String(c >>> 0);
  }
  function Pr(i, o, c) {
    const l = Math.max(1, Number(o || 1)), d = Math.max(1, Number(c || 1)), m = U(Number(i || 30), 0.1, 179) * De, _ = 2 * Math.atan(Math.tan(m * 0.5) * (d / l));
    return U(_ * Or, 0.1, 179);
  }
  function up(i) {
    const o = String(i || "").trim();
    if (!o) return null;
    try {
      const c = JSON.parse(o);
      if (!c || typeof c != "object" || String(c.kind || "") !== "pano_sticker_state") return null;
      const l = c.version;
      let d = null;
      if (typeof l == "number" && Number.isInteger(l) ? d = l : typeof l == "string" && /^\d+$/.test(l) && (d = Number.parseInt(l, 10)), d !== 1) return null;
      const m = c.pose;
      if (!m || typeof m != "object") return null;
      const _ = Number(m.yaw_deg), b = Number(m.pitch_deg), v = Number(m.roll_deg), x = Number(m.hFOV_deg);
      if (![_, b, v, x].every((V) => Number.isFinite(V))) return null;
      let M = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(M, -0) && (M = 0);
      const k = {
        yaw_deg: M,
        pitch_deg: U(b, -89.9, 89.9),
        roll_deg: v,
        hFOV_deg: U(x, 0.1, 179)
      }, F = Number(c.source_aspect);
      return Number.isFinite(F) && F > 0 && (k.source_aspect = F), k;
    } catch {
      return null;
    }
  }
  function Sl(i) {
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), d = Number(i == null ? void 0 : i.hFOV_deg), m = Tc(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ye(Number.isFinite(o) ? o : 0),
        pitch_deg: U(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: U(Number.isFinite(d) ? d : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function fp(i) {
    var b;
    if (!i || typeof i != "object") return Sl(null);
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), d = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(d) && Number.isFinite(m)) {
      const v = U(d, 0.1, 179) * De, x = U(m, 0.1, 179) * De, M = Math.tan(x * 0.5);
      if (Math.abs(M) > 1e-6) {
        const k = Math.tan(v * 0.5) / M;
        Number.isFinite(k) && k > 0 && (_ = k);
      }
    }
    if (i != null && i.asset_id && ((b = p == null ? void 0 : p.assets) != null && b[i.asset_id])) {
      const v = p.assets[i.asset_id], x = Number((v == null ? void 0 : v.w) || 0), M = Number((v == null ? void 0 : v.h) || 0);
      x > 0 && M > 0 && (_ = x / M);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ye(Number.isFinite(o) ? o : 0),
        pitch_deg: U(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: U(Number.isFinite(d) ? d : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function dp(i) {
    var l, d, m, _, b;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((v) => String((v == null ? void 0 : v.name) || "") === String(i)) : null, c = o == null ? void 0 : o.link;
    if (c != null) {
      const v = Oh(t.graph, c), { originId: x, originSlot: M } = Fh(v), k = da(x), F = [
        k == null ? void 0 : k.output,
        k == null ? void 0 : k.result,
        (l = k == null ? void 0 : k.data) == null ? void 0 : l.output,
        (d = k == null ? void 0 : k.data) == null ? void 0 : d.result,
        (m = k == null ? void 0 : k.ui) == null ? void 0 : m.output,
        (_ = k == null ? void 0 : k.ui) == null ? void 0 : _.result
      ];
      for (const V of F) {
        if (!Array.isArray(V)) continue;
        const Y = Number(M || 0), H = V[Y];
        if (typeof H == "string" && H.trim()) return H;
      }
    }
    return String(((b = pn(t, i)) == null ? void 0 : b.value) || "");
  }
  function hp(i, o, c) {
    const l = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : up(o);
    if (l) {
      const _ = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || l.source_aspect || 1), b = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Pr(l.hFOV_deg, _, b),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const d = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 1), m = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Pr(30, d, m),
      rot_deg: 0
    };
  }
  function Nl(i = "sync") {
    if (e !== "stickers" || r) return;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((V) => String((V == null ? void 0 : V.name) || "") === "sticker_image") : null, c = (o == null ? void 0 : o.link) ?? null, l = wl(() => {
      var V;
      (V = t.__panoExternalStickerSync) == null || V.call(t, "image-loaded");
    }), d = lp(cp("pano_sticker_input_pose"), null), m = dp("sticker_state"), _ = xl(d && typeof d == "object" ? JSON.stringify(d) : m), b = Array.isArray(p.stickers) ? p.stickers : p.stickers = [], v = b.findIndex((V) => String((V == null ? void 0 : V.id) || "") === Dr);
    if (c == null) {
      v >= 0 && (b.splice(v, 1), h.selectedId === Dr && (h.selectedId = null, h.selectedIds = [], p.active.selected_sticker_id = null), be(), Gt(), Ht(), pt());
      return;
    }
    const x = b.reduce((V, Y) => Math.max(V, Number((Y == null ? void 0 : Y.z_index) || 0)), -1);
    let M = v >= 0 ? b[v] : null;
    const k = !M || Number(M.source_link_id ?? -1) !== Number(c) || String(M.source_state_hash || "") !== _;
    M || (M = {
      id: Dr,
      source_kind: cc
    }, b.push(M)), M.id = Dr, M.source_kind = cc, M.source_link_id = Number(c), M.source_state_hash = _, M.visible = M.visible !== !1;
    let F = !1;
    if (k) {
      const V = hp(d, m, l);
      Object.assign(M, V, {
        initial_pose: { ...V },
        visible: !0,
        z_index: x + 1
      }), F = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const V = Pr(
        Number(M.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(M.vFOV_deg || 0) - V) > 1e-6 && (M.vFOV_deg = V, F = !0);
    }
    F && (be(), Gt(), Ht()), pt();
  }
  function Ii(i = {}) {
    const c = i.preservePanelValues !== !1 ? ue() : null;
    c && (h.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: ci(c)
    }), h.selectedId = null, h.selectedIds = [], h.cutoutAspectOpen = !1, p.active.selected_sticker_id = null, p.active.selected_shot_id = null;
  }
  function Ea() {
    bt && (bt.style.display = "none");
  }
  function Da() {
    h.mode === "frame" && (h.mode = "pano"), h.outputPreviewRect = null, J && (J.disabled = !0, J.setAttribute("aria-disabled", "true"), J.style.display = "none"), _t && (_t.style.display = "none"), Pt.forEach((i) => {
      const o = i.dataset.view === h.mode;
      i.setAttribute("aria-pressed", o ? "true" : "false");
    }), z && z.setAttribute("data-selected", h.mode), ou() ? he(h.pointerPos) : A.style.cursor = h.mode === "pano" ? "grab" : "default";
  }
  function pp() {
    const o = El({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function ws() {
    const i = Fn(h.viewYaw, h.viewPitch);
    let o = Gn(0, 1, 0);
    Math.abs(Sn(i, o)) > 0.999 && (o = Gn(0, 0, 1));
    const c = si(lo(o, i)), l = si(lo(i, c));
    return { right: c, up: l, fwd: i };
  }
  function Ei(i) {
    const { right: o, up: c, fwd: l } = ws(), d = Sn(i, o), m = Sn(i, c), _ = Sn(i, l);
    if (_ <= 1e-5) return null;
    const b = A.width, v = A.height, x = h.viewFov * De, M = 2 * Math.atan(Math.tan(x / 2) * (v / b)), k = b / 2 / Math.tan(x / 2), F = v / 2 / Math.tan(M / 2);
    return {
      x: b / 2 + d / _ * k,
      y: v / 2 - m / _ * F,
      z: _
    };
  }
  function xs(i, o) {
    const { right: c, up: l, fwd: d } = ws(), m = A.width, _ = A.height, b = h.viewFov * De, v = 2 * Math.atan(Math.tan(b / 2) * (_ / m)), x = (i - m / 2) / (m / 2) * Math.tan(b / 2), M = (_ / 2 - o) / (_ / 2) * Math.tan(v / 2), k = so(so(co(c, x), co(l, M)), d);
    return si(k);
  }
  function hr() {
    const i = A.width, o = A.height, c = 2;
    if (i / Math.max(o, 1) >= c) {
      const b = o, v = b * c;
      return { x: (i - v) * 0.5, y: 0, w: v, h: b };
    }
    const d = i, m = d / c;
    return { x: 0, y: (o - m) * 0.5, w: d, h: m };
  }
  function Ml(i) {
    var _;
    if (i && typeof i == "object" && (ve(i) || i.external === !0))
      return wl(() => {
        var b;
        (b = t.__panoExternalStickerSync) == null || b.call(t, "image-loaded");
      });
    const o = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!o) return null;
    const c = ht.get(o);
    if (c) return c;
    const l = (_ = p.assets) == null ? void 0 : _[o], d = Iv(l);
    if (!d) return null;
    const m = new Image();
    return m.onload = () => pt(), m.src = d, ht.set(o, m), m;
  }
  function kl(i, o = null) {
    const c = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!c) return null;
    const l = zt.get(c);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const d = new Image();
    return d.onload = () => {
      typeof o == "function" && o();
    }, d.src = c, zt.set(c, d), d;
  }
  function gp(i) {
    const o = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!o) return null;
    const c = It.get(o);
    if (c) return c.ready ? c : null;
    const l = kl(i, () => {
      const M = It.get(o);
      M && (M.ready = !1), pt({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const d = Number(l.naturalWidth || l.width || 0), m = Number(l.naturalHeight || l.height || 0);
    if (d < 1 || m < 1) return null;
    const _ = document.createElement("canvas");
    _.width = d, _.height = m;
    const b = _.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, d, m), b.drawImage(l, 0, 0, d, m);
    const v = b.getImageData(0, 0, d, m).data, x = { canvas: _, width: d, height: m, alpha: v, ready: !0 };
    return It.set(o, x), x;
  }
  function mp(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const d = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), _ = dn(Number(i.u || 0), d), b = Number(i.v || 0) - m, v = Math.max(0.02, Number(c || 1)), x = Number(l || 0) * De, M = Math.cos(x), k = Math.sin(x), F = _ / v, V = b / v, Y = F * M + V * k, H = -F * k + V * M;
    return {
      ...i,
      u: ((d + Y) % 1 + 1) % 1,
      v: m + H
    };
  }
  function yp(i, o) {
    if (!i || !o) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const l = (i == null ? void 0 : i.transform) || {}, d = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, _ = mp(
      m,
      d,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), b = Number(c.u1 || 0) - Number(c.u0 || 0), v = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(b > 1e-6) || !(v > 1e-6)) return null;
    const x = dn(Number(_.u || 0), Number(c.u0 || 0)) / b, M = (Number(_.v || 0) - Number(c.v0 || 0)) / v;
    if (x < 0 || x > 1 || M < 0 || M > 1) return 0;
    const k = gp(i);
    if (!k) return null;
    const F = U(Math.floor(x * k.width), 0, k.width - 1), V = U(Math.floor(M * k.height), 0, k.height - 1);
    return Number(k.alpha[(V * k.width + F) * 4 + 3] || 0);
  }
  function bp(i, o, c, l = null) {
    if (!(o != null && o.visible) || !wr(c, o.corners)) return !1;
    const d = l || _n(c, performance.now()), m = yp(i, d);
    return m === null ? !0 : m > 8;
  }
  function vp() {
    var l, d, m, _, b, v, x, M;
    const i = ((d = (l = h.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : d.call(l, hs(!1))) || null, o = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((b = (_ = i == null ? void 0 : i.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : b.width) || 2048)), c = Math.max(1, Number(((v = i == null ? void 0 : i.descriptor) == null ? void 0 : v.height) || ((M = (x = i == null ? void 0 : i.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : M.height) || 1024));
    return { width: o, height: c };
  }
  function _p() {
    var V, Y, H;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const c = Zn(), l = `${ps()}:${c.width}:${c.height}`;
    if (((V = h._activePaintEraserPreviewInfo) == null ? void 0 : V.cacheKey) === l)
      return h._activePaintEraserPreviewInfo.value || null;
    const d = $e(o), m = (d == null ? void 0 : d.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const Z = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Es(Z, d.targetSpace, !0);
    }
    const _ = Ti(c.width, c.height, { readback: !0 });
    if (!Bl(_, d, { w: c.width, h: c.height })) return null;
    const b = ((H = (Y = _.ctx) == null ? void 0 : Y.getImageData(0, 0, c.width, c.height)) == null ? void 0 : H.data) || null;
    if (!b) return null;
    let v = c.width, x = c.height, M = -1, k = -1;
    for (let Z = 0; Z < c.height; Z += 1)
      for (let rt = 0; rt < c.width; rt += 1)
        b[(Z * c.width + rt) * 4 + 3] <= 8 || (rt < v && (v = rt), Z < x && (x = Z), rt > M && (M = rt), Z > k && (k = Z));
    if (M < v || k < x)
      return h._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const F = {
      surface: _,
      bounds: { minX: v, minY: x, maxX: M, maxY: k },
      key: `${l}:${v}:${x}:${M}:${k}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: l, value: F }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), F;
  }
  function Di() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function wp(i, o, c) {
    var l, d;
    if (!i) return null;
    if (i.type === "rasterObject" && ((l = i.item) != null && l.bbox)) {
      const m = i.item.bbox, _ = ((d = i.item) == null ? void 0 : d.transform) || {}, b = Number(m.u0 || 0) + Number(_.du || 0), v = Number(m.u1 || 0) + Number(_.du || 0), x = Number(m.v0 || 0) + Number(_.dv || 0), M = Number(m.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((v % 1 + 1) % 1 * o),
        minY: Math.floor(U(x, 0, 1) * c),
        maxY: Math.ceil(U(M, 0, 1) * c),
        wraps: v - b >= 1 || b < 0 || v > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = bn(i.actionGroupId, "paint"), _ = fr(i.actionGroupId, "paint", m);
      if (!_) return null;
      const b = _.centerUv.u - _.halfW, v = _.centerUv.u + _.halfW, x = _.centerUv.v - _.halfH, M = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * o),
        maxX: Math.ceil((v % 1 + 1) % 1 * o),
        minY: Math.floor(U(x, 0, 1) * c),
        maxY: Math.ceil(U(M, 0, 1) * c),
        wraps: v - b >= 1 || b < 0 || v > 1
      };
    }
    return null;
  }
  function xp(i, o, c) {
    if (!i || !o) return !1;
    const l = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: c - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], d = l(i), m = l(o);
    return d.some((_) => m.some((b) => !(_.maxX < b.minX || b.maxX < _.minX || _.maxY < b.minY || b.maxY < _.minY)));
  }
  function Sp(i, o, c) {
    var gt, At, Dt, yt, j, X, vt;
    if (!i || !o || !((gt = c == null ? void 0 : c.surface) != null && gt.canvas) || o.type !== "rasterObject") return i;
    const l = Number(i.width || c.surface.canvas.width || 0), d = Number(i.height || c.surface.canvas.height || 0);
    if (l < 1 || d < 1) return i;
    const m = wp(o, l, d);
    if (m && !xp(m, c.bounds, l)) return i;
    const _ = String(((At = o.item) == null ? void 0 : At.id) || o.id || ""), b = ((Dt = o.item) == null ? void 0 : Dt.transform) || {}, v = `${c.key}:${_}:${l}:${d}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, x = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (x.has(v)) return x.get(v);
    const M = U(Math.floor(Number(((yt = c.bounds) == null ? void 0 : yt.minX) || 0)), 0, Math.max(0, l - 1)), k = U(Math.floor(Number(((j = c.bounds) == null ? void 0 : j.minY) || 0)), 0, Math.max(0, d - 1)), F = U(Math.ceil(Number(((X = c.bounds) == null ? void 0 : X.maxX) || 0)), M, Math.max(0, l - 1)), V = U(Math.ceil(Number(((vt = c.bounds) == null ? void 0 : vt.maxY) || 0)), k, Math.max(0, d - 1)), Y = Math.max(1, F - M + 1), H = Math.max(1, V - k + 1), Z = Ti(l, d, { readback: !0 });
    Z.ctx.clearRect(0, 0, l, d), Z.ctx.drawImage(i, 0, 0);
    const rt = Z.ctx.getImageData(M, k, Y, H);
    Z.ctx.save(), Z.ctx.globalCompositeOperation = "destination-out", Z.ctx.drawImage(c.surface.canvas, 0, 0), Z.ctx.restore();
    const mt = Z.ctx.getImageData(M, k, Y, H);
    let et = !1;
    for (let Lt = 0; Lt < Y * H; Lt += 1) {
      const $t = rt.data[Lt * 4 + 3], Vt = mt.data[Lt * 4 + 3];
      if ($t > Vt) {
        et = !0;
        break;
      }
    }
    return et ? (x.size > 64 && x.clear(), x.set(v, Z.canvas), Z.canvas) : (x.set(v, i), i);
  }
  function Pl(i, o = null) {
    const c = Ie((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.bbox) || null;
    if (!c || !l) return null;
    const d = kl(i, o);
    if (!d || !(d.complete || d.width || d.naturalWidth)) return null;
    const { width: m, height: _ } = vp(), b = (i == null ? void 0 : i.transform) || {}, v = [
      c,
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
      Ri()
    ].join(":"), x = ae.get(v);
    if (x) return x;
    ae.size > 64 && ae.clear();
    const M = document.createElement("canvas");
    M.width = m, M.height = _;
    const k = M.getContext("2d");
    if (!k) return null;
    const F = Number(l.u0 || 0) * m, V = Number(l.v0 || 0) * _, Y = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * m), H = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * _), Z = F + Y * 0.5 + Number(b.du || 0) * m, rt = V + H * 0.5 + Number(b.dv || 0) * _, mt = Number(b.rot_deg || 0) * De, et = Math.max(0.01, Number(b.scale || 1));
    for (const gt of [-m, 0, m])
      k.save(), k.translate(Z + gt, rt), k.rotate(mt), k.scale(et, et), k.drawImage(d, -Y * 0.5, -H * 0.5, Y, H), k.restore();
    return ae.set(v, M), M;
  }
  function Np() {
    return fs(p, {
      selectedId: h.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Mp(i) {
    return uh(
      p,
      (o, c, l) => Ml(l || o),
      { scene: i }
    );
  }
  function Al(i, o, c, l, d = "modal_object_view") {
    if (!i || !o || !c) return !1;
    String((c == null ? void 0 : c.mode) || "");
    const m = !!l && !!l.complete && Number(l.naturalWidth || l.width || 0) > 1 && Number(l.naturalHeight || l.height || 0) > 1;
    if (Rl(o, c))
      return Lp(
        o,
        c,
        m && h.showPanorama ? l : null,
        `${d}_bg_gl`
      );
    const b = Ll(), v = Ol(b), x = h.showObjects ? $l() : As([]), k = sf({
      stateRevision: [
        d,
        m ? String(l.currentSrc || l.src || "") : "no_bg",
        m ? Number(l.naturalWidth || l.width || 0) : 0,
        m ? Number(l.naturalHeight || l.height || 0) : 0,
        Array.isArray(v) ? v.map((H) => `${String((H == null ? void 0 : H.assetId) || "")}:${String((H == null ? void 0 : H.revision) || "")}`).join(",") : "none",
        x.length ? x.map((H) => `${String((H == null ? void 0 : H.id) || "")}:${String((H == null ? void 0 : H.revision) || "")}:${Number((H == null ? void 0 : H.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && h.showPanorama ? l : null,
      backgroundRevision: m ? `${d}:bg` : "",
      coverageDeg: qe(p.coverage),
      scene: b,
      textures: v,
      paintSource: null,
      paintRevision: "",
      rasterEntries: x,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), F = dt;
    if (!F.syncState(k)) return !1;
    const Y = F.renderToTarget(`${d}_direct`, c, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return Y ? (i.drawImage(Y, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function Ss(i, o = "sticker.png") {
    const c = new FormData();
    c.append("image", i), c.append("type", "input"), c.append("subfolder", "panorama_stickers");
    const l = await Ze.fetchApi("/upload/image", { method: "POST", body: c });
    if (!l || l.status !== 200)
      throw new Error(`upload failed (${(l == null ? void 0 : l.status) || "no-response"})`);
    const d = await l.json(), m = String((d == null ? void 0 : d.name) || "").trim();
    if (!m)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: m,
      subfolder: String((d == null ? void 0 : d.subfolder) || "panorama_stickers"),
      storage: String((d == null ? void 0 : d.type) || "input"),
      name: String((i == null ? void 0 : i.name) || o)
    };
  }
  async function Ns(i, o) {
    const c = await new Promise((b) => i.toBlob(b, "image/png")), l = new FormData();
    l.append("image", c, o), l.append("type", "temp"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const d = await Ze.fetchApi("/upload/image", { method: "POST", body: l });
    if (!d || d.status !== 200) throw new Error(`upload failed (${d == null ? void 0 : d.status})`);
    const m = await d.json(), _ = String((m == null ? void 0 : m.name) || "").trim();
    if (!_) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: _,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let Ms = null, Ta = !1;
  function kp() {
    const i = Uf(p.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const o = p.painting_layer, c = Yr();
    return !o || typeof o != "object" || String(o.revision || "") !== c || i.totalPaintCount > 0 && !o.paint || i.totalMaskCount > 0 && !o.mask;
  }
  function ks() {
    const i = String(t.id ?? "0"), o = Qi.get(i);
    if (Ta && o) return o;
    const c = (async () => {
      var m, _, b, v, x, M, k, F, V, Y, H, Z;
      const l = Yr(), d = Uf(p.painting);
      if (d.totalPaintCount <= 0 && d.totalMaskCount <= 0) {
        p.painting_layer !== null && (p.painting_layer = null, Ms = l, In());
        return;
      }
      if (Ms !== l && !Ta) {
        Ta = !0;
        try {
          Va();
          const rt = hs(!1), mt = ((_ = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : _.call(m, rt)) || null, et = ((b = mt == null ? void 0 : mt.displayPaint) == null ? void 0 : b.canvas) || null, gt = ((v = mt == null ? void 0 : mt.committedMask) == null ? void 0 : v.canvas) || null, At = Math.max(1, Number(((x = mt == null ? void 0 : mt.descriptor) == null ? void 0 : x.width) || (et == null ? void 0 : et.width) || (gt == null ? void 0 : gt.width) || 2048)), Dt = Math.max(1, Number(((M = mt == null ? void 0 : mt.descriptor) == null ? void 0 : M.height) || (et == null ? void 0 : et.height) || (gt == null ? void 0 : gt.height) || 1024));
          (!et && d.totalPaintCount > 0 || !gt && d.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((k = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : k.width) || 0) !== At || Number(((F = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : F.height) || 0) !== Dt) && (h._paintLayerSyncBlankSurface = Ti(At, Dt)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, At, Dt));
          const yt = et || d.totalPaintCount > 0 && ((V = h._paintLayerSyncBlankSurface) == null ? void 0 : V.canvas) || null, j = gt || d.totalMaskCount > 0 && ((Y = h._paintLayerSyncBlankSurface) == null ? void 0 : Y.canvas) || null;
          if (!yt && !j) return;
          let X = null, vt = null;
          const Lt = [];
          if (d.totalPaintCount > 0) {
            X = await Ns(yt, `pano_paint_${i}.png`);
            for (const $t of rt) {
              const Vt = String($t || "").trim();
              if (!Vt) continue;
              const Rt = ((Z = (H = h.paintEngine) == null ? void 0 : H.getGroupDisplayCanvas) == null ? void 0 : Z.call(H, Vt)) || null;
              if (!Rt) continue;
              const Kt = Vt.replace(/[^a-zA-Z0-9_-]+/g, "_"), Bt = await Ns(Rt, `pano_group_${i}_${Kt}.png`);
              Bt && Lt.push({
                id: Vt,
                actionGroupId: Vt,
                image: Bt
              });
            }
          }
          d.totalMaskCount > 0 && (vt = await Ns(j, `pano_mask_${i}.png`)), l === Yr() && (p.painting_layer = {
            paint: X,
            mask: vt,
            groups: Lt,
            revision: l
          }, Ms = l, In());
        } catch (rt) {
          throw rt;
        } finally {
          Ta = !1;
        }
      }
    })();
    return Qi.set(i, c), c.finally(() => {
      Qi.get(i) === c && Qi.delete(i);
    }), c;
  }
  function Ra() {
    const i = Dv(t, "pano_input_images", ht, () => pt());
    if (i) return i;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((_) => String((_ == null ? void 0 : _.name) || "")) : [], c = o.includes("erp_image"), l = o.includes("bg_erp");
    let d = [];
    return r && (c || l) ? d = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : d = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Kf(t, d, () => pt(), `background:${d.join("|")}`);
  }
  function Cl(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Pp() {
    if (!Mt.hasPresentedFrame) return "boot";
    let i = !1, o = !1;
    if (h.showPanorama) {
      const c = Ra();
      i = !!c && !Cl(c);
    }
    if (h.showObjects) {
      const c = Array.isArray(p.stickers) ? p.stickers : [];
      for (const l of c) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const d = Ml(l);
        if (d && !Cl(d)) {
          o = !0;
          break;
        }
      }
    }
    return i && o ? "mixed" : i ? "background" : o ? "stickers" : "";
  }
  function qr() {
    const i = new Set(
      (p.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(p.assets || {}).forEach((o) => {
      i.has(o) || (delete p.assets[o], ht.delete(o));
    });
  }
  function Il(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(U(i.y, -1, 1))
    };
  }
  function Ps(i, o = null) {
    const { lon: c, lat: l } = Il(i), d = hr();
    let m = d.x + (c / (2 * Math.PI) + 0.5) * d.w;
    const _ = d.y + (0.5 - l / Math.PI) * d.h;
    if (o !== null) {
      for (; m - o > d.w / 2; ) m -= d.w;
      for (; m - o < -d.w / 2; ) m += d.w;
    }
    return { x: m, y: _, z: 1 };
  }
  function La(i) {
    const o = Fn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let c = Gn(0, 1, 0);
    Math.abs(Sn(o, c)) > 0.999 && (c = Gn(0, 0, 1));
    const l = si(lo(c, o)), d = si(lo(o, l)), m = Math.tan(U(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * De), _ = Math.tan(U(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * De), b = Number(i.rot_deg || i.roll_deg || 0) * De, v = Math.cos(b), x = Math.sin(b);
    return {
      centerDir: o,
      right: l,
      up: d,
      tanX: m,
      tanY: _,
      cr: v,
      sr: x
    };
  }
  function pr(i, o, c) {
    const l = o * i.cr - c * i.sr, d = o * i.sr + c * i.cr;
    return si(so(so(i.centerDir, co(i.right, l)), co(i.up, d)));
  }
  function El(i) {
    const o = La(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: d }) => pr(o, l * o.tanX, d * o.tanY));
  }
  function Ap(i, o, c) {
    const l = La(i), d = (o * 2 - 1) * l.tanX, m = (1 - c * 2) * l.tanY;
    return pr(l, d, m);
  }
  function Dl(i) {
    const o = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: U((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Cp(i) {
    var v, x, M, k;
    const o = (i == null ? void 0 : i.bbox) || null;
    if (!o) return [];
    const c = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((v = i == null ? void 0 : i.transform) == null ? void 0 : v.scale) || 1)), d = Number(((x = i == null ? void 0 : i.transform) == null ? void 0 : x.rot_deg) || 0), m = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.du) || 0), _ = Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((F) => Aa(Ca(F, c, l, d), m, _));
  }
  function Ip(i) {
    const o = Ie((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, l = (i == null ? void 0 : i.bbox) || {}, d = `${o}:${h.mode}:${Ri()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (h.mode === "frame") {
      const m = Ae();
      return `${d}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}`;
    }
    return `${d}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function Ep(i) {
    const o = String((i == null ? void 0 : i.id) || ""), l = [
      Le(i) ? "sticker" : "item",
      o,
      h.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      ci(i)
    ].join(":");
    if (h.mode === "frame") {
      const d = Ae();
      return `${l}:frame:${String((d == null ? void 0 : d.id) || "")}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}`;
    }
    return `${l}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((A == null ? void 0 : A.width) || 0))}:${Math.round(Number((A == null ? void 0 : A.height) || 0))}`;
  }
  function Dp() {
    var o;
    const i = String(((o = p.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return i === "draft" ? h.hqFrames && h.hqFrames > 0 ? [28, 20] : h.interaction ? [12, 9] : [20, 14] : i === "high" ? h.hqFrames && h.hqFrames > 0 ? [48, 36] : h.interaction ? [20, 14] : [36, 26] : h.hqFrames && h.hqFrames > 0 ? [40, 30] : h.interaction ? [16, 12] : [28, 20];
  }
  function Tl() {
    var i;
    return !!O && !!((i = dt == null ? void 0 : dt.isSupported) != null && i.call(dt));
  }
  function Rl(i, o) {
    return !Tl() || e !== "stickers" && e !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((A == null ? void 0 : A.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((A == null ? void 0 : A.height) || 0));
  }
  function Ll() {
    return h.showObjects ? Np() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Ol(i) {
    return !h.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : Mp(i);
  }
  function Fl() {
    var i, o;
    return ((o = (i = h.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : o.call(i)) || null;
  }
  function Tp() {
    return Fl() ? `${Hl()}:mask_display` : "";
  }
  function As(i) {
    if (!h.showMask) return i;
    const o = Fl();
    if (!o) return i;
    const c = Tp(), l = i.reduce((d, m) => Math.max(d, Number((m == null ? void 0 : m.zIndex) || 0)), -1);
    return i.push({
      id: "mask_display",
      source: o,
      revision: c,
      zIndex: l + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function $l() {
    var l, d;
    const i = dl(!0), o = _p(), c = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const _ = String(m.actionGroupId || m.id || "");
        if (!_) continue;
        const b = ((d = (l = h.paintEngine) == null ? void 0 : l.getGroupDisplayCanvas) == null ? void 0 : d.call(l, _)) || null;
        if (!b) continue;
        c.push({
          id: `paint_group:${_}`,
          source: b,
          revision: `${Hl()}:${_}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const _ = m.item || null, b = Ie((_ == null ? void 0 : _.id) || m.id || "");
        if (!b) continue;
        const v = Pl(_, () => pt());
        if (!v) continue;
        const x = Sp(v, m, o), M = (_ == null ? void 0 : _.transform) || {};
        c.push({
          id: `raster:${b}`,
          source: x,
          revision: [
            Yr(),
            (o == null ? void 0 : o.key) || "",
            b,
            Number(M.du || 0).toFixed(6),
            Number(M.dv || 0).toFixed(6),
            Number(M.rot_deg || 0).toFixed(3),
            Number(M.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (_ == null ? void 0 : _.visible) !== !1
        });
      }
    }
    return As(c);
  }
  function Rp(i, o = "modal_bg_gl") {
    const c = Ll(), l = Ol(c), d = !!i && !!i.complete && Number(i.naturalWidth || i.width || 0) > 1 && Number(i.naturalHeight || i.height || 0) > 1, m = d ? [
      String(i.currentSrc || i.src || ""),
      Number(i.naturalWidth || i.width || 0),
      Number(i.naturalHeight || i.height || 0)
    ].join("|") : "none", _ = h.showObjects ? $l() : As([]), b = null, v = [
      o,
      m,
      Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((x) => String((x == null ? void 0 : x.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((x) => `${String((x == null ? void 0 : x.assetId) || "")}:${String((x == null ? void 0 : x.revision) || "")}`).join(",") : "none",
      _.length ? _.map((x) => `${String((x == null ? void 0 : x.id) || "")}:${String((x == null ? void 0 : x.revision) || "")}:${Number((x == null ? void 0 : x.zIndex) || 0)}`).join(",") : "paint:none",
      h.showPanorama ? "panorama:1" : "panorama:0",
      h.showObjects ? "objects:1" : "objects:0",
      h.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: sf({
        stateRevision: v,
        backgroundSource: d ? i : null,
        backgroundRevision: d ? `${o}:${m}` : "",
        coverageDeg: qe(p.coverage),
        scene: c,
        textures: l,
        paintSource: b,
        paintRevision: "",
        rasterEntries: _,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: d || l.length > 0 || _.length > 0
    };
  }
  function Cs() {
    if (!O) return;
    const i = O.getContext("webgl2");
    if (i)
      i.viewport(0, 0, O.width, O.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const o = O.getContext("2d");
      o && (o.clearRect(0, 0, O.width, O.height), o.fillStyle = "#070707", o.fillRect(0, 0, O.width, O.height));
    }
    Mt.backgroundWasVisible = !1, Mt.backgroundDirty = !1;
  }
  function Lp(i, o, c, l = "modal_bg_gl") {
    var x;
    if (!Rl(i, o)) return !1;
    if (!Mt.backgroundDirty && Mt.backgroundWasVisible) return !0;
    const { descriptor: d, hasContent: m } = Rp(c, l);
    if (!m || !dt.syncState(d))
      return Cs(), !1;
    const b = dt.renderToTarget("modal_pano", o, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), v = (x = O == null ? void 0 : O.getContext) == null ? void 0 : x.call(O, "2d");
    return !b || !v ? (Cs(), !1) : (v.clearRect(0, 0, O.width, O.height), v.drawImage(b, 0, 0, O.width, O.height), Mt.backgroundWasVisible = !0, Mt.backgroundDirty = !1, !0);
  }
  function Op(i = !1) {
    const o = A.width, c = A.height, l = hr();
    if (L.globalAlpha = 1, L.lineWidth = 1, i || (L.fillStyle = "#070707", L.fillRect(0, 0, o, c), L.fillStyle = "#070707", L.fillRect(l.x, l.y, l.w, l.h)), Va(), Al(
      L,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      Ra(),
      "modal_unwrap"
    ), h.showGrid && !h.fullscreen) {
      L.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const _ = l.x + l.w * m / 16;
        L.beginPath(), L.moveTo(_, l.y), L.lineTo(_, l.y + l.h), L.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const _ = l.y + l.h * m / 8;
        L.beginPath(), L.moveTo(l.x, _), L.lineTo(l.x + l.w, _), L.stroke();
      }
      L.strokeStyle = "rgba(250, 250, 250, 0.86)", L.lineWidth = 1.2, L.beginPath(), L.moveTo(l.x, l.y + l.h / 2), L.lineTo(l.x + l.w, l.y + l.h / 2), L.stroke(), L.fillStyle = "rgba(250, 250, 250, 0.42)", L.font = "500 11px Geist, sans-serif", L.textAlign = "center";
      const d = l.y + l.h * 0.57;
      L.fillText("Left", l.x + l.w * 0.25, d), L.fillText("Front", l.x + l.w * 0.5, d), L.fillText("Right", l.x + l.w * 0.75, d), L.fillText("Back", l.x + 38, d), L.fillText("Back", l.x + l.w - 38, d);
    }
  }
  function Vl(i, o, c = 1) {
    let l = !1;
    L.strokeStyle = o, L.lineWidth = c, L.beginPath();
    for (const d of i) {
      const m = Ei(d);
      if (!m) {
        l = !1;
        continue;
      }
      l ? L.lineTo(m.x, m.y) : (L.moveTo(m.x, m.y), l = !0);
    }
    L.stroke();
  }
  function Fp(i = !1) {
    const o = A.width, c = A.height;
    if (i || (Tl() ? L.clearRect(0, 0, o, c) : (L.fillStyle = "#070707", L.fillRect(0, 0, o, c))), Va(), Al(
      L,
      { x: 0, y: 0, w: o, h: c },
      {
        mode: "panorama",
        yawDeg: h.viewYaw,
        pitchDeg: h.viewPitch,
        fovDeg: h.viewFov,
        coverageDeg: qe(p.coverage)
      },
      Ra(),
      "modal_pano"
    ), h.showGrid && !h.fullscreen) {
      for (let d = -180; d <= 180; d += 15) {
        const m = [];
        for (let _ = -89; _ <= 89; _ += 4) m.push(Fn(d, _));
        Vl(m, "#3f3f46", d % 90 === 0 ? 1.3 : 1);
      }
      for (let d = -75; d <= 75; d += 15) {
        const m = [];
        for (let _ = -180; _ <= 180; _ += 4) m.push(Fn(_, d));
        Vl(m, d === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", d === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: Fn(-90, 0) },
        { name: "Front", dir: Fn(0, 0) },
        { name: "Right", dir: Fn(90, 0) },
        { name: "Back", dir: Fn(180, 0) }
      ];
      L.fillStyle = "rgba(250, 250, 250, 0.42)", L.font = "500 11px Geist, sans-serif", L.textAlign = "center", l.forEach((d) => {
        const m = Ei(d.dir);
        m && L.fillText(d.name, m.x, m.y + 24);
      });
    }
  }
  function $p(i, o = null, c = null, l = null) {
    if (h.mode === "frame") {
      const d = o || Ae();
      if (!d) return [];
      const m = c || Oi(d);
      return dg(i, d, m);
    }
    return Kl(i, l);
  }
  function Oa(i, o = null, c = null, l = null, d = null) {
    if (!i) return null;
    if (h.mode === "unwrap") {
      const _ = Kl([i], d);
      return _[0] ? { x: _[0].x, y: _[0].y, z: 1 } : null;
    }
    const m = $a(i);
    return m ? Xn(m, o, c, l) : null;
  }
  function Vp(i, o) {
    const c = String(i.actionGroupId || i.id || "").trim(), l = bn(c, i.layerKind), d = fr(c, i.layerKind, l), m = (d == null ? void 0 : d.centerUv) || ys(c, i.layerKind, l), _ = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, b = [], v = h.mode === "frame" ? Ae() : null, x = v ? Oi(v) : null;
    for (const et of l) {
      const gt = (et == null ? void 0 : et.geometry) || null, At = (gt == null ? void 0 : gt.geometryKind) === "lasso_fill" ? gt == null ? void 0 : gt.points : (gt == null ? void 0 : gt.processedPoints) || (gt == null ? void 0 : gt.rawPoints) || (gt == null ? void 0 : gt.points) || [], Dt = $p(At, v, x, _).filter((X) => Number.isFinite(X == null ? void 0 : X.x) && Number.isFinite(X == null ? void 0 : X.y));
      if (!Dt.length) continue;
      const yt = mr(String((et == null ? void 0 : et.toolKind) || "pen")), j = en[yt] || en[nr];
      b.push({
        points: Dt,
        closed: String((gt == null ? void 0 : gt.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((et == null ? void 0 : et.size) || 10) * Math.max(0.1, Number((j == null ? void 0 : j.sizeScale) ?? 1)) + 10),
        layerKind: String((et == null ? void 0 : et.layerKind) || i.layerKind || "paint")
      });
    }
    const M = Oa(m, null, v, x, _);
    if (!M) {
      const et = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(o, et), et;
    }
    const F = Hh(d).map((et) => Oa(et, M.x, v, x, _)).filter((et) => Number.isFinite(et == null ? void 0 : et.x) && Number.isFinite(et == null ? void 0 : et.y)).map((et) => ({ x: Number(et.x || 0), y: Number(et.y || 0) }));
    if (F.length < 4) {
      const et = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(o, et), et;
    }
    const V = (et, gt) => ({
      x: (Number((et == null ? void 0 : et.x) || 0) + Number((gt == null ? void 0 : gt.x) || 0)) * 0.5,
      y: (Number((et == null ? void 0 : et.y) || 0) + Number((gt == null ? void 0 : gt.y) || 0)) * 0.5,
      a: et,
      b: gt
    }), Y = V(F[0], F[1]), H = V(F[1], F[2]), Z = V(F[2], F[3]), rt = V(F[3], F[0]), mt = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: F,
      edgeMidpoints: [
        { edge: "top", ...Y },
        { edge: "right", ...H },
        { edge: "bottom", ...Z },
        { edge: "left", ...rt }
      ],
      rotateStemBase: { x: Y.x, y: Y.y },
      rotateHandle: { x: Y.x, y: Y.y - 30 },
      strokePaths: b,
      visible: !0
    };
    return h._strokeGeomCache.set(o, mt), mt;
  }
  function zp(i, o) {
    const c = h.mode === "frame" ? Ae() : null, l = c ? Oi(c) : null, d = Dl(i), m = h.mode === "unwrap" ? Number((d == null ? void 0 : d.u) || 0) : null, _ = Oa(d, null, c, l, m), v = Cp(i).map((F) => Oa(F, (_ == null ? void 0 : _.x) ?? null, c, l, m)).filter((F) => Number.isFinite(F == null ? void 0 : F.x) && Number.isFinite(F == null ? void 0 : F.y));
    if (!Array.isArray(v) || v.length < 4) {
      const F = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(o, F), F;
    }
    const x = v.slice(0, 4).map((F) => ({ x: Number((F == null ? void 0 : F.x) || 0), y: Number((F == null ? void 0 : F.y) || 0) })), k = {
      kind: "rasterObject",
      center: {
        x: x.reduce((F, V) => F + Number(V.x || 0), 0) / x.length,
        y: x.reduce((F, V) => F + Number(V.y || 0), 0) / x.length
      },
      corners: x,
      visible: !0
    };
    return h._strokeGeomCache.set(o, k), k;
  }
  function Xn(i, o = null, c = null, l = null) {
    if (h.mode === "frame") {
      const mt = c || Ae(), et = l || Oi(mt), gt = mt ? Gl(mt, i) : null;
      return gt ? {
        x: Number(et.x || 0) + Number(gt.x || 0) * Number(et.w || 0),
        y: Number(et.y || 0) + Number(gt.y || 0) * Number(et.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return Ps(i, o);
    const { right: d, up: m, fwd: _ } = ws(), b = Sn(i, d), v = Sn(i, m), x = Sn(i, _), M = A.width, k = A.height, F = h.viewFov * De, V = 2 * Math.atan(Math.tan(F / 2) * (k / Math.max(M, 1))), Y = M / 2 / Math.tan(F / 2), H = k / 2 / Math.tan(V / 2), Z = Math.max(x, 1e-4), rt = Math.max(M, k) * 2;
    return {
      x: U(M / 2 + b / Z * Y, -rt, M + rt),
      y: U(k / 2 - v / Z * H, -rt, k + rt),
      z: Z
    };
  }
  function Hp(i) {
    const o = Fn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), c = h.mode === "frame" ? Ae() : null, l = c ? Oi(c) : null, d = Xn(o, null, c, l);
    if (!d) return { visible: !1 };
    const m = La(i), b = El(i).map((At) => Xn(At, d.x, c, l)), v = pr(m, 0, m.tanY), x = pr(m, 0, m.tanY + Math.max(m.tanY * 0.43, 0.053)), M = Xn(v, d.x, c, l), k = Xn(x, (M == null ? void 0 : M.x) ?? d.x, c, l), F = ((k == null ? void 0 : k.x) ?? M.x) - M.x, V = ((k == null ? void 0 : k.y) ?? M.y) - M.y, Y = Math.hypot(F, V) || 1, H = {
      x: M.x + F / Y * 30,
      y: M.y + V / Y * 30
    }, Z = Xn(pr(m, 0, m.tanY), d.x, c, l), rt = Xn(pr(m, m.tanX, 0), d.x, c, l), mt = Xn(pr(m, 0, -m.tanY), d.x, c, l), et = Xn(pr(m, -m.tanX, 0), d.x, c, l), gt = [
      {
        edge: "top",
        x: Z.x,
        y: Z.y,
        a: { x: b[0].x, y: b[0].y },
        b: { x: b[1].x, y: b[1].y }
      },
      {
        edge: "right",
        x: rt.x,
        y: rt.y,
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
        x: et.x,
        y: et.y,
        a: { x: b[3].x, y: b[3].y },
        b: { x: b[0].x, y: b[0].y }
      }
    ];
    return {
      center: { x: d.x, y: d.y },
      corners: b.map((At) => ({ x: At.x, y: At.y })),
      edgeMidpoints: gt,
      rotateStemBase: { x: M.x, y: M.y },
      rotateHandle: H,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function sn(i) {
    if (Pe(i)) {
      const d = String(i.actionGroupId || i.id || "").trim(), m = Wh(d, i.layerKind), _ = h._strokeGeomCache.get(m);
      return _ || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Vp(i, m));
    }
    if (Oe(i)) {
      const d = Ip(i), m = h._strokeGeomCache.get(d);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), zp(i, d));
    }
    const o = Ep(i), c = h._strokeGeomCache.get(o);
    if (c) return c;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const l = Hp(i);
    return h._strokeGeomCache.set(o, l), l;
  }
  function Fa(i, o, c, l = null) {
    const d = [];
    for (let m = 0; m <= c; m += 1) {
      const _ = m / c;
      let b = 0, v = 0;
      o === 0 ? (b = _, v = 0) : o === 1 ? (b = 1, v = _) : o === 2 ? (b = 1 - _, v = 1) : (b = 0, v = 1 - _);
      const x = Ap(i, b, v), M = h.mode === "unwrap" ? Ps(x, l) : Ei(x);
      M && d.push(M);
    }
    return d;
  }
  function jp(i, o) {
    const c = Fn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = h.mode === "unwrap" ? Ps(c) : null, d = l ? l.x : null, m = h.mode === "pano" ? 28 : 20, _ = [
      Fa(i, 0, m, d),
      Fa(i, 1, m, d),
      Fa(i, 2, m, d),
      Fa(i, 3, m, d)
    ];
    L.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", L.lineWidth = o ? 2 : 1, L.beginPath();
    let b = !1;
    for (const v of _)
      for (const x of v)
        b ? L.lineTo(x.x, x.y) : (L.moveTo(x.x, x.y), b = !0);
    L.closePath(), L.stroke();
  }
  function Up() {
    return [...Array.isArray(p.stickers) ? p.stickers : []].sort((o, c) => Number(o.z_index || 0) - Number(c.z_index || 0));
  }
  function zl() {
    return [...Array.isArray(p.stickers) ? p.stickers : []].sort((o, c) => Number(c.z_index || 0) - Number(o.z_index || 0));
  }
  function Is(i, o = []) {
    if (!(!i || !Array.isArray(o) || o.length < 4)) {
      i.beginPath(), i.moveTo(o[0].x, o[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(o[c].x, o[c].y);
      i.closePath();
    }
  }
  function Bp(i, o, c, l) {
    if (Le(i)) {
      const d = L.globalAlpha;
      L.globalAlpha = ep(i), h.mode === "frame" ? (L.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", L.lineWidth = c ? 2 : 1, Is(L, o.corners), L.stroke()) : jp(i, c), L.globalAlpha = d;
      return;
    }
    L.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Is(L, o.corners), L.fill(), L.strokeStyle = c ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", L.lineWidth = c ? 2.8 : 1.9, Is(L, o.corners), L.stroke();
  }
  function Gp(i, o, c) {
    L.fillStyle = c, o.corners.forEach((l) => {
      L.beginPath(), L.arc(l.x, l.y, 6.5, 0, Math.PI * 2), L.fill();
    }), Pe(i) || (L.strokeStyle = "rgba(250, 250, 250, 0.9)", L.lineWidth = 1.8, L.beginPath(), L.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), L.lineTo(o.rotateHandle.x, o.rotateHandle.y), L.stroke(), L.fillStyle = c, L.beginPath(), L.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), L.fill());
  }
  function Kp() {
    var b;
    const [i, o] = Dp(), c = Cn(), l = c.length > 1, d = e === "cutout" ? Up() : Me(), m = d.map((v) => `${String((v == null ? void 0 : v.id) || "")}:${Number((v == null ? void 0 : v.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== d || h._sortedItemsCache.orderKey !== m) && (h._sortedItemsCache = {
      src: d,
      orderKey: m,
      sorted: [...d]
    });
    const _ = h._sortedItemsCache.sorted;
    for (const v of _) {
      const x = !l && Yh(v);
      if (h.mode === "frame" && !x || !h.showObjects) continue;
      const M = Le(v), k = dr(v);
      if (!M)
        continue;
      const F = sn(v);
      if (!(e !== "stickers" && !F.visible) && (Bp(v, F, x, k), x && F.visible)) {
        const V = k ? "#ff4d4f" : M && ve(v) ? "#f59e0b" : "#0070f3";
        Gp(v, F, V);
      }
    }
    if (l) {
      const v = bs(c);
      if (v != null && v.visible) {
        const x = vs(c) ? "#ff4d4f" : "#0070f3";
        L.save(), L.strokeStyle = "rgba(255, 255, 255, 0.95)", L.lineWidth = 2, L.setLineDash([6, 4]), L.beginPath(), L.moveTo(v.corners[0].x, v.corners[0].y);
        for (let M = 1; M < v.corners.length; M += 1) L.lineTo(v.corners[M].x, v.corners[M].y);
        L.closePath(), L.stroke(), L.setLineDash([]), L.fillStyle = x, v.corners.forEach((M) => {
          L.beginPath(), L.arc(M.x, M.y, 6.5, 0, Math.PI * 2), L.fill();
        }), L.restore();
      }
    } else
      c.forEach((v) => {
        if (!Pe(v) && !Oe(v)) return;
        const x = sn(v);
        if (!(x != null && x.visible)) return;
        const M = dr(v) ? "#ff4d4f" : "#0070f3";
        L.save(), L.strokeStyle = "rgba(255, 255, 255, 0.95)", L.lineWidth = 2, L.setLineDash([6, 4]), L.beginPath(), L.moveTo(x.corners[0].x, x.corners[0].y);
        for (let k = 1; k < x.corners.length; k += 1) L.lineTo(x.corners[k].x, x.corners[k].y);
        L.closePath(), L.stroke(), L.setLineDash([]), L.fillStyle = M, x.corners.forEach((k) => {
          L.beginPath(), L.arc(k.x, k.y, 6.5, 0, Math.PI * 2), L.fill();
        }), L.restore();
      });
    if (((b = h.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const v = lu(h.interaction.start, h.interaction.current);
      L.save(), L.strokeStyle = "rgba(255, 255, 255, 0.9)", L.fillStyle = "rgba(255, 255, 255, 0.08)", L.lineWidth = 1, L.setLineDash([5, 4]), L.beginPath(), L.rect(v.x0, v.y0, v.x1 - v.x0, v.y1 - v.y0), L.fill(), L.stroke(), L.restore();
    }
    h.hqFrames && i >= 40 && o >= 30 && (h.hqFrames -= 1, h.hqFrames > 0 && pt());
  }
  function $a(i) {
    if (!i) return null;
    const o = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, l = Math.cos(c);
    return Gn(l * Math.sin(o), Math.sin(c), l * Math.cos(o));
  }
  function Wp(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function qp(i, o, c, l = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Fe(i, "widthScale", 1),
      pressureLike: Fe(i, "pressureLike", 1)
    }, ...l, u: o, v: c };
  }
  function Yp(i, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function Es(i, o, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const l = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", d = /* @__PURE__ */ new WeakMap();
    if (l) {
      let H = null;
      i.forEach((Z) => {
        const rt = Number((Z == null ? void 0 : Z.u) || 0), mt = Number((Z == null ? void 0 : Z.v) || 0), et = (rt % 1 + 1) % 1, gt = H == null ? et : H + dn(et, (H % 1 + 1) % 1);
        d.set(Z, { x: gt, y: mt }), H = gt;
      });
    }
    const m = (H) => !H || typeof H != "object" ? { x: 0, y: 0 } : d.get(H) || Wp(H), _ = (H, Z, rt, mt = {}) => {
      const et = l ? (Number(Z) % 1 + 1) % 1 : Number(Z), gt = qp(H, et, rt, mt);
      return d.set(gt, { x: Number(Z), y: Number(rt) }), gt;
    }, b = (H, Z, rt) => {
      const mt = m(H), et = m(Z);
      return _(H, rr(mt.x, et.x, rt), rr(mt.y, et.y, rt), {
        t: rr(Number((H == null ? void 0 : H.t) || 0), Number((Z == null ? void 0 : Z.t) || 0), rt),
        widthScale: rr(Fe(H, "widthScale", 1), Fe(Z, "widthScale", 1), rt),
        pressureLike: rr(Fe(H, "pressureLike", 1), Fe(Z, "pressureLike", 1), rt)
      });
    };
    if (i.length === 1) {
      const H = m(i[0]);
      return [_(i[0], H.x, H.y)];
    }
    const v = Yp(o, c), x = (H, Z) => {
      const rt = [0];
      for (let X = 1; X < H.length; X += 1) {
        const vt = m(H[X - 1]), Lt = m(H[X]);
        rt.push(rt[X - 1] + Math.hypot(Lt.x - vt.x, Lt.y - vt.y));
      }
      const mt = rt[rt.length - 1] || 0;
      if (mt <= 1e-8) {
        const X = H[0], vt = m(X);
        return [_(X, vt.x, vt.y)];
      }
      const et = [];
      let gt = 0;
      for (let X = 0; X <= mt + 1e-9; X += Z) {
        for (; gt < rt.length - 2 && rt[gt + 1] < X; ) gt += 1;
        const vt = rt[gt], Lt = rt[gt + 1], $t = Math.max(1e-8, Lt - vt);
        et.push(b(H[gt], H[gt + 1], U((X - vt) / $t, 0, 1)));
      }
      const At = H[H.length - 1], Dt = m(At), yt = et[et.length - 1], j = yt ? m(yt) : null;
      return (!j || Math.hypot(j.x - Dt.x, j.y - Dt.y) > Z * 0.35) && et.push(_(At, Dt.x, Dt.y)), et;
    }, M = (H) => {
      if (!Array.isArray(H) || H.length < 3) return H ? H.slice() : [];
      const Z = m(H[0]), rt = [_(H[0], Z.x, Z.y)];
      for (let gt = 0; gt < H.length - 1; gt += 1) {
        const At = H[gt], Dt = H[gt + 1], yt = m(At), j = m(Dt), X = _(
          At,
          yt.x * 0.75 + j.x * 0.25,
          yt.y * 0.75 + j.y * 0.25,
          {
            t: Number(At.t || 0) * 0.75 + Number(Dt.t || 0) * 0.25,
            widthScale: Fe(At, "widthScale", 1) * 0.75 + Fe(Dt, "widthScale", 1) * 0.25,
            pressureLike: Fe(At, "pressureLike", 1) * 0.75 + Fe(Dt, "pressureLike", 1) * 0.25
          }
        ), vt = _(
          At,
          yt.x * 0.25 + j.x * 0.75,
          yt.y * 0.25 + j.y * 0.75,
          {
            t: Number(At.t || 0) * 0.25 + Number(Dt.t || 0) * 0.75,
            widthScale: Fe(At, "widthScale", 1) * 0.25 + Fe(Dt, "widthScale", 1) * 0.75,
            pressureLike: Fe(At, "pressureLike", 1) * 0.25 + Fe(Dt, "pressureLike", 1) * 0.75
          }
        );
        rt.push(X, vt);
      }
      const mt = H[H.length - 1], et = m(mt);
      return rt.push(_(mt, et.x, et.y)), rt;
    }, k = x(i, v);
    if (k.length < 3) return k;
    const F = c ? 2 : 1;
    let V = k.slice();
    for (let H = 0; H < F; H += 1) V = M(V);
    return x(V, Math.max(v * 0.75, 55e-5));
  }
  function Fe(i, o, c = 1) {
    const l = Number(i == null ? void 0 : i[o]);
    return Number.isFinite(l) ? Math.max(0, l) : c;
  }
  function Xp(i) {
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
  function Ti(i, o, c = {}) {
    const l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(i)), l.height = Math.max(1, Math.round(o));
    const d = l.getContext("2d", c.readback ? { willReadFrequently: !0 } : void 0);
    return d && (d.clearRect(0, 0, l.width, l.height), d.imageSmoothingEnabled = !0), { canvas: l, ctx: d };
  }
  function Ri() {
    const i = za();
    return `${String(h.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Yr() {
    const i = za();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Hl() {
    const i = ps(), o = Yr();
    return i ? `${o}:${i}` : o;
  }
  function Zp() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function Jp() {
    h.paintCompositeRevision += 1;
  }
  function Qp() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function jl() {
    var i, o;
    h.paintEngineRevisionKey = null, (o = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || o.call(i, p), h.paintEngineRevisionKey = Ri();
  }
  function cn() {
    h.objectVisualRevision = Number(h.objectVisualRevision || 0) + 1, Qp(), Mt.backgroundDirty = !0, Mt.dirty = !0;
  }
  function vn({ rebuildPaintEngine: i = !1 } = {}) {
    Zp(), cn(), i && jl();
  }
  function Xr() {
    Jp(), cn();
  }
  function Va() {
    var l;
    const i = za(), o = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== o && (h.paintEngine = Nc(i), h.paintEngineDescriptorKey = o, h.paintEngineRevisionKey = "");
    const c = Ri();
    h.paintEngineRevisionKey !== c && (h.paintEngineRevisionKey = c, (l = h.paintEngine) == null || l.rebuildCommitted(p));
  }
  function za() {
    const i = Math.max(1, Number((p == null ? void 0 : p.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function Zn() {
    return za();
  }
  function tg(i, o, c, l, d = null) {
    const m = Xp(i), _ = Fe(o, "widthScale", 1) * Fe(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * _) : m.model === "world_angle" ? d ? Math.max(0.5, m.value / Math.max(1e-6, Number(d.hFOV_deg || 90) * De) * c * _) : Math.max(0.5, m.value / (2 * Math.PI) * c * _) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * _);
  }
  function eg(i, o, c = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), d = String((o == null ? void 0 : o.toolKind) || "pen"), m = c.preview === !0, _ = m ? 0.78 : 1;
    if (i.globalAlpha = d === "marker" ? 0.7 * _ : 1, l === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (d === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, v = m ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${v})`;
  }
  function ng(i, o, c) {
    const l = Math.max(0.5, Math.min(c, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (i.beginPath(), i.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), i.fill());
  }
  function rg(i, o, c, l, d = {}) {
    if (!i || !Array.isArray(o) || !o.length) return;
    const m = Math.max(l.w, l.h) * 0.25;
    i.save(), eg(i, c, d);
    const _ = (b) => ng(i, b, m);
    if (o.length === 1) {
      _(o[0]), i.restore();
      return;
    }
    for (let b = 0; b < o.length - 1; b += 1) {
      const v = o[b], x = o[b + 1];
      if (!v || !x) continue;
      const M = Number(v.x || 0), k = Number(v.y || 0), F = Number(x.x || 0), V = Number(x.y || 0), Y = Math.max(0.5, Math.min(m, Number(v.radiusPx || 0.5))), H = Math.max(0.5, Math.min(m, Number(x.radiusPx || 0.5)));
      if (!Number.isFinite(M) || !Number.isFinite(k) || !Number.isFinite(F) || !Number.isFinite(V) || !Number.isFinite(Y) || !Number.isFinite(H)) continue;
      const Z = F - M, rt = V - k, mt = Math.hypot(Z, rt);
      if (!Number.isFinite(mt) || mt < 1e-6) {
        _(v);
        continue;
      }
      if (mt > Math.max(l.w, l.h) * 0.5) continue;
      const et = Math.max(0.5, Math.min(Y, H)), gt = Math.max(0.35, Math.min(et * 0.4, 2.25)), At = Math.max(1, Math.ceil(mt / gt));
      for (let Dt = 0; Dt <= At; Dt += 1) {
        const yt = Dt / At;
        _({
          x: rr(M, F, yt),
          y: rr(k, V, yt),
          radiusPx: rr(Y, H, yt)
        });
      }
    }
    _(o[o.length - 1]), i.restore();
  }
  function ig(i, o, c, l) {
    rg(i, o, c, l, { preview: !1 });
  }
  function ag(i, o, c, l, d) {
    var b, v, x, M;
    if (!i || !Array.isArray(o) || o.length < 3) return;
    const m = "u", _ = "v";
    if (i.save(), String((c == null ? void 0 : c.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((c == null ? void 0 : c.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const k = (c == null ? void 0 : c.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(k.r || 0) * 255)}, ${Math.round(Number(k.g || 0) * 255)}, ${Math.round(Number(k.b || 0) * 255)}, ${Number(k.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((b = o[0]) == null ? void 0 : b[m]) || 0) * l.w, Number(((v = o[0]) == null ? void 0 : v[_]) || 0) * l.h);
    for (let k = 1; k < o.length; k += 1)
      i.lineTo(Number(((x = o[k]) == null ? void 0 : x[m]) || 0) * l.w, Number(((M = o[k]) == null ? void 0 : M[_]) || 0) * l.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Ul(i) {
    const o = (i == null ? void 0 : i.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function og(i, o) {
    const c = Ul(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: tg(i, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function Bl(i, o, c = null) {
    var b, v, x, M;
    if (!(i != null && i.ctx) || !o) return !1;
    const l = c || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((v = i.canvas) == null ? void 0 : v.height) || 0) }, d = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((x = o == null ? void 0 : o.geometry) == null ? void 0 : x.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((M = o == null ? void 0 : o.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill")
      return ag(i.ctx, Ul(d), d, l), !0;
    const _ = og(d, l);
    return _.length ? (ig(i.ctx, _, d, l), !0) : !1;
  }
  function sg(i, o, c, l = 8) {
    const d = new Uint8Array(o * c), m = [], _ = new Int32Array(o * c), b = new Int32Array(o * c);
    for (let v = 0; v < c; v += 1)
      for (let x = 0; x < o; x += 1) {
        const M = v * o + x;
        if (d[M] || i[M] <= l) continue;
        let k = 0, F = 0;
        _[F] = x, b[F] = v, F += 1, d[M] = 1;
        const V = [];
        let Y = x, H = v, Z = x, rt = v;
        for (; k < F; ) {
          const mt = _[k], et = b[k];
          k += 1, V.push({ x: mt, y: et }), mt < Y && (Y = mt), et < H && (H = et), mt > Z && (Z = mt), et > rt && (rt = et);
          const gt = [
            [(mt - 1 + o) % o, et],
            [(mt + 1) % o, et],
            [mt, et - 1],
            [mt, et + 1]
          ];
          for (const [At, Dt] of gt) {
            if (Dt < 0 || Dt >= c) continue;
            const yt = Dt * o + At;
            d[yt] || i[yt] <= l || (d[yt] = 1, _[F] = At, b[F] = Dt, F += 1);
          }
        }
        m.push({ pixels: V, minX: Y, minY: H, maxX: Z, maxY: rt });
      }
    return m;
  }
  function cg(i, o) {
    const c = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((v) => Number((v == null ? void 0 : v.x) || 0)).filter((v) => Number.isFinite(v)))].sort((v, x) => v - x);
    if (!c.length) return null;
    if (c.length === 1)
      return { startX: c[0], widthPx: 1 };
    let l = -1, d = 0;
    for (let v = 0; v < c.length; v += 1) {
      const x = c[v], k = (v === c.length - 1 ? c[0] + o : c[v + 1]) - x - 1;
      k > l && (l = k, d = v);
    }
    const m = (c[(d + 1) % c.length] + o) % o;
    let _ = 1 / 0, b = -1 / 0;
    for (const v of c) {
      const x = (v - m + o) % o;
      _ = Math.min(_, x), b = Math.max(b, x);
    }
    return {
      startX: m,
      widthPx: Math.max(1, b - _ + 1)
    };
  }
  function lg(i, o, c = {}) {
    var x;
    const l = Number((i == null ? void 0 : i.width) || 0), d = Number((i == null ? void 0 : i.height) || 0), m = (x = i == null ? void 0 : i.getContext) == null ? void 0 : x.call(i, "2d");
    if (!m || l < 1 || d < 1) return [];
    const _ = m.getImageData(0, 0, l, d), b = new Uint8Array(l * d);
    for (let M = 0; M < b.length; M += 1) b[M] = _.data[M * 4 + 3];
    return sg(b, l, d, 8).map((M, k) => {
      const F = cg(M, l);
      if (!F) return null;
      const V = Number(F.widthPx || 0), Y = M.maxY - M.minY + 1, H = Number(F.startX || 0), Z = document.createElement("canvas");
      Z.width = V, Z.height = Y;
      const rt = Z.getContext("2d");
      if (!rt) return null;
      const mt = rt.createImageData(V, Y);
      return M.pixels.forEach(({ x: et, y: gt }) => {
        const At = (gt * l + et) * 4, Dt = (Number(et || 0) - H + l) % l, yt = ((gt - M.minY) * V + Dt) * 4;
        mt.data[yt + 0] = _.data[At + 0], mt.data[yt + 1] = _.data[At + 1], mt.data[yt + 2] = _.data[At + 2], mt.data[yt + 3] = _.data[At + 3];
      }), rt.putImageData(mt, 0, 0), {
        id: li("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + k * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: 0,
          v0: M.minY / d,
          u1: V / l,
          v1: (M.maxY + 1) / d
        },
        rasterDataUrl: Z.toDataURL("image/png"),
        transform: {
          du: H / l,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Gl(i, o) {
    if (!i || !o) return null;
    const c = La(i), l = Sn(o, c.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const d = Sn(o, c.right) / l, m = Sn(o, c.up) / l, _ = d * c.cr + m * c.sr, b = -d * c.sr + m * c.cr;
    return {
      x: (_ / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function ug(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const c = hr();
      return i.map((l) => ({
        x: c.x + Number(l.u || 0) * c.w,
        y: c.y + Number(l.v || 0) * c.h
      }));
    }
    const o = i.map((c) => Ei($a(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function Kl(i, o = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (h.mode === "unwrap") {
      const l = hr();
      return i.map((d) => {
        const m = (Number(d.u || 0) % 1 + 1) % 1, _ = o == null ? m : Number(o || 0) + dn(m, o);
        return {
          x: l.x + _ * l.w,
          y: l.y + Number(d.v || 0) * l.h
        };
      });
    }
    const c = i.map((l) => Ei($a(l))).filter(Boolean);
    return c.every((l) => Number(l.z || 0) > 0) ? c.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function fg(i, o, c) {
    return !Array.isArray(i) || i.length < 3, [];
  }
  function dg(i, o, c) {
    if (!Array.isArray(i) || i.length < 1 || !o || !c) return [];
    const l = [];
    for (const d of i) {
      const m = $a(d), _ = Gl(o, m);
      _ && l.push({
        x: Number(c.x || 0) + Number(_.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(_.y || 0) * Number(c.h || 0)
      });
    }
    return l;
  }
  function hg() {
    return Ra(), !1;
  }
  function pg() {
    var v, x;
    if (((v = h.interaction) == null ? void 0 : v.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, o = (x = i == null ? void 0 : i.geometry) == null ? void 0 : x.points;
    let c;
    if (h.mode === "frame") {
      const M = Ae();
      c = fg(o, M);
    } else
      c = ug(o);
    if (!Array.isArray(c) || c.length < 3) return;
    const l = String((i == null ? void 0 : i.layerKind) || "") === "mask", d = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(d.r || 0) * 255), _ = Math.round(Number(d.g || 0) * 255), b = Math.round(Number(d.b || 0) * 255);
    L.save(), L.beginPath(), L.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let M = 1; M < c.length; M++) L.lineTo(Number(c[M].x || 0), Number(c[M].y || 0));
    L.closePath(), l ? (L.lineWidth = 2, L.setLineDash([6, 6]), L.lineDashOffset = 0, L.strokeStyle = "rgba(0,0,0,0.96)", L.stroke(), L.lineDashOffset = -6, L.strokeStyle = "rgba(255,255,255,0.96)", L.stroke(), L.setLineDash([]), L.lineDashOffset = 0) : (L.lineWidth = 1.5, L.setLineDash([6, 4]), L.strokeStyle = `rgba(${m},${_},${b},1)`, L.stroke(), L.setLineDash([])), L.restore();
  }
  function gg() {
    h.mode === "frame" ? hg() : h.mode === "unwrap" ? Op(!1) : Fp(!1), Kp(), pg(), ct && (ct.textContent = `${Math.round(h.viewFov)}°`), Ht(), Mt.hasPresentedFrame || (Mt.hasPresentedFrame = !0, O.style.opacity = "1");
    const i = Pp();
    i ? (R == null || R.removeAttribute("data-stage-ready"), R == null || R.setAttribute("data-stage-loading-kind", i)) : (R == null || R.setAttribute("data-stage-ready", ""), R == null || R.removeAttribute("data-stage-loading-kind"));
  }
  function mg(i = h.interaction) {
    if (e !== "stickers" || h.mode !== "pano") return !1;
    const o = String((i == null ? void 0 : i.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function yg() {
    t.__panoLiveStateOverride = p, t.__panoLivePaintSurface = Kh();
  }
  function pt(i = {}) {
    var b, v, x, M, k, F, V, Y, H, Z;
    const o = !!i.localOnly, c = i.externalSync === !0, l = String(i.cause || ""), d = String(((b = h.interaction) == null ? void 0 : b.kind) || "");
    (!o || d === "view" || d === "pan_frame" || mg() || !!((v = h.viewTween) != null && v.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (Mt.backgroundDirty = !0), o && hl() && (h.livePaintInteractionRevision += 1, Mt.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (Ea(), Da()), yg(), c && ((M = (x = t.__panoDomPreview) == null ? void 0 : x.requestDraw) == null || M.call(x), (k = t.setDirtyCanvas) == null || k.call(t, !0, !1)), c && !o && ((V = (F = t.graph) == null ? void 0 : F.setDirtyCanvas) == null || V.call(F, !0, !0), (Z = (H = (Y = gn) == null ? void 0 : Y.canvas) == null ? void 0 : H.setDirty) == null || Z.call(H, !0, !0)), Mt.dirty = !0;
  }
  function Wl() {
    const i = A.getBoundingClientRect(), o = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return A.width !== o || A.height !== c || O.width !== o || O.height !== c ? (A.width = o, A.height = c, O.width = o, O.height = c, Mt.backgroundDirty = !0, Mt.dirty = !0, e === "cutout" && (Mt.pendingStableLayoutFrames = Math.max(Number(Mt.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Ds(i = performance.now()) {
    var o;
    if (Mt.running) {
      if (Mt.lastTickTs = i, h.outputPreviewAnim !== h.outputPreviewAnimTo) {
        const c = Math.max(1, Number(h.outputPreviewAnimDurationMs)), l = U((i - Number(h.outputPreviewAnimStartTs || 0)) / c, 0, 1), m = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? rv(l) : iv(l);
        h.outputPreviewAnim = rr(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, m), Mt.dirty = !0, l >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
      }
      if ((o = h.viewTween) != null && o.active) {
        const c = h.viewTween, l = U((i - c.startTs) / c.durationMs, 0, 1), d = nv(l);
        h.viewYaw = Ye(c.startYaw + c.deltaYaw * d), h.viewPitch = c.startPitch + (c.targetPitch - c.startPitch) * d, h.viewFov = c.startFov + (c.targetFov - c.startFov) * d, Mt.backgroundDirty = !0, Mt.dirty = !0, l >= 1 && (h.viewTween = null);
      }
      if (h.viewInertia.vx = Number(Ee.state.inertia.vx || 0), h.viewInertia.vy = Number(Ee.state.inertia.vy || 0), h.viewInertia.active = !!Ee.state.inertia.active, Ee.stepInertia(i) && (h.viewInertia.vx = Number(Ee.state.inertia.vx || 0), h.viewInertia.vy = Number(Ee.state.inertia.vy || 0), h.viewInertia.active = !!Ee.state.inertia.active, Mt.backgroundDirty = !0, Mt.dirty = !0), (Mt.dirty || i - Mt.lastSizeCheckTs >= 220) && (Wl(), Mt.lastSizeCheckTs = i), Mt.pendingStableLayoutFrames > 0 && (Mt.pendingStableLayoutFrames -= 1, Mt.dirty = !0), Mt.dirty) {
        if (Mt.pendingStableLayoutFrames > 0) {
          Mt.rafId = requestAnimationFrame(Ds);
          return;
        }
        Mt.dirty = !1, gg();
      }
      Mt.rafId = requestAnimationFrame(Ds);
    }
  }
  function bg() {
    Mt.running = !1, Mt.rafId && cancelAnimationFrame(Mt.rafId), Mt.rafId = 0;
  }
  function oe() {
    r || (h.historyController.commitActionGroup(JSON.stringify(Bf(p))), Os());
  }
  function Li(i) {
    if (r) return;
    const o = i < 0 ? h.historyController.undo() : h.historyController.redo();
    if (Os(), !o) return;
    const c = JSON.parse(o);
    Object.keys(p).forEach((l) => delete p[l]), Object.assign(p, c), h.selectedId = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, h.selectedIds = h.selectedId ? [h.selectedId] : [], vn(), ln(), Gt(), In(), pt({ cause: "cutout_frame" });
  }
  function ql() {
    var c, l;
    const i = Array.isArray((c = h.historyController) == null ? void 0 : c.entries) ? h.historyController.entries : [], o = Number((l = h.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !r && i.length > 1 && o > 0,
      canRedo: !r && i.length > 1 && o >= 0 && o < i.length - 1
    };
  }
  function ln() {
    var _, b, v;
    q == null || q.querySelectorAll("[data-tool-mode]").forEach((x) => {
      const M = x.getAttribute("data-tool-mode") === h.primaryTool;
      x.classList.toggle("active", M), x.setAttribute("aria-pressed", M ? "true" : "false");
    });
    const i = h.primaryTool === "paint" || h.primaryTool === "mask";
    if (ut && st(i), !i) {
      St.forEach((x) => {
        x.classList.remove("is-active");
      }), Nt && (Nt.hidden = !0);
      return;
    }
    const o = h.primaryTool, c = St.find((x) => String(x.getAttribute("data-paint-pane") || "") === o) || null;
    if (St.forEach((x) => {
      x.classList.toggle("is-active", x === c);
    }), S.forEach((x) => {
      x.hidden = !1;
    }), D.forEach((x) => {
      x.hidden = !1;
    }), nt && (clearTimeout(nt), nt = 0), I.querySelectorAll("[data-paint-tool]").forEach((x) => {
      x.classList.toggle("active", x.getAttribute("data-paint-tool") === h.paintTool);
    }), I.querySelectorAll("[data-mask-tool]").forEach((x) => {
      x.classList.toggle("active", x.getAttribute("data-mask-tool") === h.maskTool);
    }), Ct) {
      const x = h.paintTool !== "eraser";
      Ct.hidden = !1, Ct.classList.toggle("disabled", !x), !x && Nt && !Nt.hidden && (nt = window.setTimeout(() => {
        Nt.hidden = !0, nt = 0;
      }, 170));
      const M = ((_ = Ao.find((F) => Co(h.paintColor, F.color))) == null ? void 0 : _.id) || "";
      Ct.querySelectorAll("[data-paint-color-swatch]").forEach((F) => {
        const V = F.getAttribute("data-paint-color-swatch") === M;
        F.classList.toggle("active", V), F.setAttribute("aria-pressed", V ? "true" : "false"), F.disabled = !x;
      });
      const k = Ct.querySelector("[data-paint-color-custom]");
      if (k) {
        const F = !M;
        k.classList.toggle("active", F), k.style.setProperty("--custom-color", Nn(h.customPaintColor, 1)), k.setAttribute("aria-pressed", F ? "true" : "false"), k.disabled = !x;
      }
      if (Ce && (Ce.value = String(Math.round(U(Number(((b = h.customPaintColor) == null ? void 0 : b.a) ?? 1), 0, 1) * 100))), an && (an.textContent = `${Math.round(U(Number(((v = h.customPaintColor) == null ? void 0 : v.a) ?? 1), 0, 1) * 100)}%`), ne && (ne.style.background = Nn(h.customPaintColor)), Nt) {
        const F = Yi(h.customPaintColor);
        Nt.style.setProperty("--picker-hue-color", Nn({ ...uc(F.h, 1, 1), a: 1 }, 1)), Nt.style.setProperty("--picker-sat", `${U(F.s, 0, 1) * 100}%`), Nt.style.setProperty("--picker-val", `${(1 - U(F.v, 0, 1)) * 100}%`), Nt.style.setProperty("--picker-hue", `${U(F.h, 0, 1) * 100}%`);
      }
      if (Be) {
        const F = Yi(h.customPaintColor);
        Be.style.left = `${U(F.s, 0, 1) * 100}%`, Be.style.top = `${(1 - U(F.v, 0, 1)) * 100}%`;
      }
      if (Ge) {
        const F = Yi(h.customPaintColor);
        Ge.style.left = `${U(F.h, 0, 1) * 100}%`;
      }
      if (on && yn) {
        const F = Array.from({ length: 8 }, (V, Y) => h.customPaintHistory[Y] || null);
        yn.innerHTML = F.map((V, Y) => `
          <button class="pano-paint-color-history-dot${V ? "" : " empty"}" type="button" data-paint-history-index="${Y}" ${V ? `style="--swatch:${Nn(V, 1)}"` : ""} aria-label="Recent color ${Y + 1}" ${V ? "" : "disabled"}></button>
        `).join(""), yn.querySelectorAll("[data-paint-history-index]").forEach((V) => {
          V.onclick = () => {
            const Y = Number(V.getAttribute("data-paint-history-index")), H = h.customPaintHistory[Y];
            H && (h.customPaintColor = un(H), h.paintColor = un(H), ln());
          };
        });
      }
    }
    const l = mr(h.primaryTool === "paint" ? h.paintTool : h.maskTool), d = h.brushSizes[l] ?? 10, m = rp();
    S.forEach((x) => {
      x.classList.toggle("disabled", m);
    }), G.forEach((x) => {
      x.value = String(d);
      const M = (d - 1) / 119 * 100;
      x.style.setProperty("--v", `${U(M, 0, 100)}%`), x.disabled = m;
    }), K.forEach((x) => {
      x.textContent = String(d);
    });
  }
  function Zr(i, o, c, l, d, m, _, b = !0) {
    const v = document.createElement("div");
    v.dataset.key = c, v.dataset.min = String(d), v.dataset.max = String(m), v.className = "pano-field", v.innerHTML = `<label>${l}</label><input type='range' min='${d}' max='${m}' step='${_}' value='${Number(o[c] || 0)}'><input type='number' min='${d}' max='${m}' step='${_}' value='${fc(o[c] || 0)}'>`;
    const [x, M] = v.querySelectorAll("input"), k = () => {
      const V = Number(d), Y = Number(m), Z = (Number(x.value) - V) / Math.max(1e-6, Y - V) * 100;
      x.style.setProperty("--v", `${U(Z, 0, 100)}%`);
    };
    x.disabled = !b, M.disabled = !b;
    const F = (V) => {
      if (!b) return;
      let Y = Number(V);
      Number.isNaN(Y) && (Y = 0), Y = U(Y, d, m), c === "yaw_deg" && (Y = Ye(Y)), o[c] = Y, e === "cutout" && (c === "hFOV_deg" || c === "vFOV_deg") && (o.aspect_id = Fr(o)), x.value = String(Y), M.value = fc(Y), k(), pt();
    };
    x.oninput = () => F(x.value), M.oninput = () => F(M.value), x.onchange = () => oe(), M.onchange = () => oe(), k(), i.appendChild(v);
  }
  function Ts() {
    const i = ue();
    if (!i) return;
    h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: ci(i)
    }, Q.querySelectorAll(".pano-field[data-key]").forEach((m) => {
      const _ = m.dataset.key;
      if (!_ || !(_ in i)) return;
      const b = m.querySelector("input[type='range']"), v = m.querySelector("input[type='number']");
      if (!b || !v) return;
      const x = Number(m.dataset.min ?? b.min ?? 0), M = Number(m.dataset.max ?? b.max ?? 0);
      let k = Number(i[_] || 0);
      Number.isNaN(k) && (k = 0), k = U(k, x, M);
      const F = String(k);
      b.value !== F && (b.value = F);
      const V = fc(k);
      v.value !== V && (v.value = V);
      const Y = (k - x) / Math.max(1e-6, M - x) * 100;
      b.style.setProperty("--v", `${U(Y, 0, 100)}%`);
    });
    const c = ci(i), l = Q.querySelector(".pano-cutout-aspect-label span");
    l && (l.textContent = c), Q.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]").forEach((m) => {
      m.classList.toggle("active", String(m.getAttribute("data-aspect")) === c);
    });
  }
  function Yl({ disabled: i = !1, onChange: o }) {
    const c = qe(p.coverage), l = document.createElement("div");
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
    const d = l.querySelector("[data-setting='coverage']"), m = (_) => {
      const b = qe(_);
      d.setAttribute("data-selected", b === 180 ? "1" : "0"), d.querySelectorAll(".pano-segment-btn").forEach((v) => {
        v.setAttribute("aria-pressed", qe(v.getAttribute("data-value")) === b ? "true" : "false"), v.disabled = !!i;
      });
    };
    return d.querySelectorAll(".pano-segment-btn").forEach((_) => {
      _.onclick = () => {
        if (i) return;
        const b = qe(_.getAttribute("data-value"));
        b !== qe(p.coverage) && (o == null || o(b), m(b));
      };
    }), m(c), l;
  }
  function Gt() {
    var X, vt, Lt, $t, Vt, Rt, Kt, Bt, jt, _e, hn, $i, qa, ei, ni, Vi;
    if (a) return;
    const i = [...Q.children].slice(0, 2);
    Q.innerHTML = "", i.forEach((kt) => Q.appendChild(kt));
    const o = Q.querySelector(".pano-side-actions");
    if (o && (o.innerHTML = ""), s) {
      const kt = document.createElement("div");
      kt.className = "pano-inspector", kt.appendChild(Yl({
        onChange: (Wt) => {
          var se;
          p.coverage = Wt, h.coverage = Wt, g && (g.value = String(Wt), (se = g.callback) == null || se.call(g, g.value)), Mt.backgroundDirty = !0, pt(), Gt();
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
          <div class="pano-segment" data-setting="invert-x" data-selected="${(X = p.ui_settings) != null && X.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(vt = p.ui_settings) != null && vt.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Lt = p.ui_settings) != null && Lt.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${($t = p.ui_settings) != null && $t.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Vt = p.ui_settings) != null && Vt.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Rt = p.ui_settings) != null && Rt.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const fe = Ut.querySelector("[data-setting='invert-x']"), En = Ut.querySelector("[data-setting='invert-y']"), Qn = Ut.querySelector("[data-ui-picker='quality']"), Dn = Ut.querySelector("[data-action='ui-reset-defaults']"), tr = (Wt, se, wn, ri) => {
        const yr = Wt.querySelector(".pano-picker-trigger"), zi = Wt.querySelector(".pano-picker-label"), xn = Wt.querySelector(".pano-picker-pop"), br = () => {
          const Rn = String(wn()), Ln = se.find((Hi) => String(Hi.value) === Rn) || se[0];
          zi.textContent = Ln.label, xn.innerHTML = "", se.forEach((Hi) => {
            const ji = document.createElement("button");
            ji.type = "button", ji.className = `pano-picker-item${String(Hi.value) === Rn ? " active" : ""}`, ji.textContent = Hi.label, ji.onclick = () => {
              ri(Hi.value), xn.hidden = !0, br(), gr(), pt();
            }, xn.appendChild(ji);
          });
        };
        return yr.onclick = (Rn) => {
          Rn.stopPropagation(), Ut.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((Ln) => {
            Ln !== xn && (Ln.hidden = !0);
          }), xn.hidden = !xn.hidden;
        }, br(), br;
      }, Tn = (Wt, se) => {
        Wt.setAttribute("data-selected", se ? "1" : "0"), Wt.querySelectorAll(".pano-segment-btn").forEach((wn) => {
          wn.setAttribute("aria-pressed", wn.getAttribute("data-value") === (se ? "1" : "0") ? "true" : "false");
        });
      };
      fe.querySelectorAll(".pano-segment-btn").forEach((Wt) => {
        Wt.onclick = () => {
          const se = Wt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = se, Tn(fe, se), gr(), pt();
        };
      }), En.querySelectorAll(".pano-segment-btn").forEach((Wt) => {
        Wt.onclick = () => {
          const se = Wt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = se, Tn(En, se), gr(), pt();
        };
      });
      const Ot = tr(
        Qn,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(p.ui_settings.preview_quality || "balanced"),
        (Wt) => {
          const se = String(Wt || "balanced");
          p.ui_settings.preview_quality = se === "draft" || se === "high" ? se : "balanced";
        }
      );
      Dn.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", Tn(fe, !1), Tn(En, !1), Ot(), gr(), pt();
      }, kt.appendChild(Ut), Q.appendChild(kt);
      const Xt = document.createElement("div");
      Xt.className = "pano-side-footer", Xt.innerHTML = '<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>', Xt.querySelector("[data-action='close-preview']").onclick = () => ti(), Q.appendChild(Xt), Fi(kt);
      return;
    }
    const c = ue(), l = Cn(), d = yl();
    l.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), c && d !== "stroke" && (h.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (d === "image" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (d === "image" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: ci(c)
    });
    const m = h.panelLastValues || (e === "stickers" || d === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = d === "stroke" ? null : c, b = _ || m, v = !!_, x = document.createElement("div");
    x.className = "pano-inspector", x.appendChild(Yl({
      disabled: r,
      onChange: (kt) => {
        var Ut, fe;
        p.coverage = kt, h.coverage = kt, g && (g.value = String(kt), (Ut = g.callback) == null || Ut.call(g, g.value)), be(), (fe = t.setDirtyCanvas) == null || fe.call(t, !0, !0), Gt(), Ht(), pt();
      }
    }));
    const M = document.createElement("div");
    for (M.innerHTML = `
      <div class="pano-section-title">
        <span>Transform</span>
      </div>
    `; M.firstChild; ) x.appendChild(M.firstChild);
    if (Q.appendChild(x), e === "stickers" || e === "cutout") {
      const kt = document.createElement("div");
      kt.className = "pano-field-wide pano-target-row";
      const Ut = "Selection";
      kt.innerHTML = `
        <label>${Ut}</label>
        <div class="pano-picker">
          <button class="pano-picker-trigger" type="button">
            <span class="pano-picker-label"></span>
            <span class="pano-picker-caret">▾</span>
          </button>
          <div class="pano-picker-pop" hidden></div>
        </div>
      `;
      const fe = kt.querySelector(".pano-picker-trigger"), En = kt.querySelector(".pano-picker-label"), Qn = kt.querySelector(".pano-picker-pop"), Dn = [{ id: "", label: e === "stickers" ? "No image" : "Nothing selected", item: null }];
      e === "stickers" ? Me().forEach((Ot, Xt) => {
        var wn, ri;
        const Wt = ve(Ot) ? String(Ot.id || Dr) : String(((ri = (wn = p.assets) == null ? void 0 : wn[Ot.asset_id]) == null ? void 0 : ri.name) || Ot.asset_id || Ot.id), se = `${Xt + 1}. ${Wt}${ve(Ot) && Wr(Ot) ? " (hidden)" : ""}`;
        Dn.push({ id: Ot.id, label: se, item: Ot, kind: "image" });
      }) : Qh().forEach((Ot) => {
        Dn.push({ id: Ot.item.id, label: Ot.label, item: Ot.item, kind: Ot.kind });
      });
      const tr = (_ == null ? void 0 : _.id) || "", Tn = Dn.find((Ot) => Ot.id === tr) || Dn[0];
      En.innerHTML = Tn.item ? bl(Tn) : po(String(Tn.label || "")), Qn.innerHTML = "", Dn.forEach((Ot) => {
        const Xt = document.createElement("button");
        Xt.type = "button", Xt.className = `pano-picker-item${Ot.id === tr ? " active" : ""}`, Xt.innerHTML = Ot.item ? bl(Ot) : po(String(Ot.label || "")), Xt.onclick = () => {
          Qn.hidden = !0, Ia(Ot.item || null);
          const Wt = Ot.item || null;
          if (Wt && !Pe(Wt)) {
            const se = Ye(Number(Wt.yaw_deg || 0)), wn = U(Number(Wt.pitch_deg || 0), -89.9, 89.9);
            Re(se, wn, h.viewFov);
          }
          Gt(), Ht(), pt();
        }, Qn.appendChild(Xt);
      }), fe.disabled = Dn.length <= 1, fe.onclick = (Ot) => {
        Ot.stopPropagation(), !fe.disabled && (Qn.hidden = !Qn.hidden);
      }, x.appendChild(kt);
    }
    const k = document.createElement("div");
    k.className = "pano-state-actions", k.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${Et.copy}<span>Copy State</span></button>`;
    const F = k.querySelector("[data-action='copy-state-inline']");
    F.disabled = !v || d === "stroke" || l.length > 1, F.onclick = async () => {
      if (!v || d === "stroke" || l.length > 1) return;
      const kt = JSON.stringify(e === "cutout" && d !== "image" ? Sl(b) : fp(c));
      try {
        await navigator.clipboard.writeText(kt);
        const Ut = F.querySelector("span");
        Ut && (Ut.textContent = "Copied", window.setTimeout(() => {
          Ut.textContent = "Copy State";
        }, 900));
      } catch {
      }
    }, x.appendChild(k);
    const V = document.createElement("div");
    V.className = `pano-params${h.panelWasEnabled ? "" : " disabled"}`, x.appendChild(V), l.length > 1 ? (V.innerHTML = `
        <div class="pano-param-note">Selected objects: ${l.length}</div>
        <div class="pano-param-note">Multi-selection supports z-order and delete.</div>
      `, V.classList.toggle("disabled", !v), h.panelWasEnabled = v, Ea()) : (Zr(V, b, "yaw_deg", "Yaw", -180, 180, 0.1, v && !r), Zr(V, b, "pitch_deg", "Pitch", -90, 90, 0.1, v && !r), Zr(V, b, "hFOV_deg", "H FOV", 1, 179, 0.1, v && !r), Zr(V, b, "vFOV_deg", "V FOV", 1, 179, 0.1, v && !r), e === "stickers" || d === "image" ? Zr(V, b, "rot_deg", "Rotation", -180, 180, 0.1, v && !r) : Zr(V, b, "roll_deg", "Roll", -180, 180, 0.1, v && !r), v !== h.panelWasEnabled ? requestAnimationFrame(() => {
      V.classList.toggle("disabled", !v);
    }) : V.classList.toggle("disabled", !v), h.panelWasEnabled = v, Ea());
    const Y = document.createElement("div");
    Y.className = "pano-visibility-section", Y.innerHTML = `
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
    const H = Array.isArray((Bt = (Kt = p == null ? void 0 : p.painting) == null ? void 0 : Kt.paint) == null ? void 0 : Bt.strokes) ? p.painting.paint.strokes.length : 0, Z = Array.isArray((_e = (jt = p == null ? void 0 : p.painting) == null ? void 0 : jt.mask) == null ? void 0 : _e.strokes) ? p.painting.mask.strokes.length : 0, rt = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((kt) => String((kt == null ? void 0 : kt.name) || "")) : [], mt = Vh(
      t,
      rt.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), et = !!String((mt == null ? void 0 : mt.src) || "").trim() || _l("pano_input_images").length > 0, gt = Array.isArray(Me()) && Me().length > 0 || H > 0, At = Z > 0, Dt = (kt) => kt === "panorama" ? et : kt === "objects" ? gt : At, yt = (kt, Ut) => {
      const fe = kt.closest("[data-visibility-row]"), En = Dt(String(kt.getAttribute("data-visibility") || ""));
      kt.innerHTML = Ut ? Et.eye : Et.eye_dashed, kt.setAttribute("aria-pressed", Ut ? "true" : "false"), kt.setAttribute("data-tip", Ut ? "Hide" : "Show"), kt.disabled = !En, kt.classList.toggle("active", !!Ut), fe == null || fe.classList.toggle("is-hidden", !Ut), fe == null || fe.classList.toggle("is-disabled", !En);
    };
    if (Y.querySelectorAll("[data-visibility]").forEach((kt) => {
      const Ut = String(kt.getAttribute("data-visibility") || ""), fe = () => Ut === "panorama" ? !!h.showPanorama : Ut === "objects" ? !!h.showObjects : !!h.showMask;
      yt(kt, fe()), kt.onclick = () => {
        Dt(Ut) && (Ut === "panorama" ? h.showPanorama = !h.showPanorama : Ut === "objects" ? h.showObjects = !h.showObjects : h.showMask = !h.showMask, yt(kt, fe()), pt());
      };
    }), x.appendChild(Object.assign(document.createElement("div"), { className: "pano-divider" })), x.appendChild(Y), !r) {
      const kt = document.createElement("details");
      kt.className = "pano-ui-settings", kt.open = !1, kt.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Et.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(hn = p.ui_settings) != null && hn.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${($i = p.ui_settings) != null && $i.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(qa = p.ui_settings) != null && qa.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(ei = p.ui_settings) != null && ei.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(ni = p.ui_settings) != null && ni.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Vi = p.ui_settings) != null && Vi.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const Ut = kt.querySelector("[data-setting='invert-x']"), fe = kt.querySelector("[data-setting='invert-y']"), En = kt.querySelector("[data-ui-picker='quality']"), Qn = kt.querySelector("[data-action='ui-reset-defaults']"), Dn = (Ot, Xt, Wt, se) => {
        const wn = Ot.querySelector(".pano-picker-trigger"), ri = Ot.querySelector(".pano-picker-label"), yr = Ot.querySelector(".pano-picker-pop"), zi = () => {
          const xn = String(Wt()), br = Xt.find((Rn) => String(Rn.value) === xn) || Xt[0];
          ri.textContent = br.label, yr.innerHTML = "", Xt.forEach((Rn) => {
            const Ln = document.createElement("button");
            Ln.type = "button", Ln.className = `pano-picker-item${String(Rn.value) === xn ? " active" : ""}`, Ln.textContent = Rn.label, Ln.onclick = () => {
              se(Rn.value), yr.hidden = !0, zi(), gr(), t.setDirtyCanvas(!0, !0), pt();
            }, yr.appendChild(Ln);
          });
        };
        return wn.onclick = (xn) => {
          xn.stopPropagation(), kt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((br) => {
            br !== yr && (br.hidden = !0);
          }), yr.hidden = !yr.hidden;
        }, zi(), zi;
      }, tr = (Ot, Xt) => {
        Ot.setAttribute("data-selected", Xt ? "1" : "0"), Ot.querySelectorAll(".pano-segment-btn").forEach((Wt) => {
          Wt.setAttribute("aria-pressed", Wt.getAttribute("data-value") === (Xt ? "1" : "0") ? "true" : "false");
        });
      };
      Ut.querySelectorAll(".pano-segment-btn").forEach((Ot) => {
        Ot.onclick = () => {
          const Xt = Ot.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = Xt, tr(Ut, Xt), gr(), t.setDirtyCanvas(!0, !0), pt();
        };
      }), fe.querySelectorAll(".pano-segment-btn").forEach((Ot) => {
        Ot.onclick = () => {
          const Xt = Ot.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = Xt, tr(fe, Xt), gr(), t.setDirtyCanvas(!0, !0), pt();
        };
      });
      const Tn = Dn(
        En,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(p.ui_settings.preview_quality || "balanced"),
        (Ot) => {
          const Xt = String(Ot || "balanced");
          p.ui_settings.preview_quality = Xt === "draft" || Xt === "high" ? Xt : "balanced";
        }
      );
      Qn.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", tr(Ut, !1), tr(fe, !1), Tn(), gr(), t.setDirtyCanvas(!0, !0), pt();
      }, x.appendChild(kt);
    }
    const j = document.createElement("div");
    j.className = "pano-side-footer", j.innerHTML = `
      <button class="pano-btn" data-action="cancel-close">Cancel</button>
      <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
    `, j.querySelector("[data-action='cancel-close']").onclick = () => ti(), j.querySelector("[data-action='save-close']").onclick = () => {
      nu(), ti();
    }, Q.appendChild(j), Fi(x);
  }
  function Ha(i) {
    if (!i) return !1;
    if (String(i.type || "").toLowerCase().startsWith("image/")) return !0;
    const c = String(i.name || "").toLowerCase();
    return c.endsWith(".png") || c.endsWith(".jpg") || c.endsWith(".jpeg") || c.endsWith(".webp") || c.endsWith(".gif") || c.endsWith(".bmp");
  }
  async function Xl(i) {
    if (r || e !== "stickers" && e !== "cutout" || !Ha(i)) return;
    const o = go("asset"), c = URL.createObjectURL(i);
    try {
      const l = await new Promise((_, b) => {
        const v = new Image();
        v.onload = () => _(v), v.onerror = () => b(new Error("image load failed")), v.src = c;
      });
      ht.set(o, l);
      const d = go("st");
      p.stickers.push({
        id: d,
        asset_id: o,
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Pr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: vl()
      }), Ia(p.stickers[p.stickers.length - 1]), ru(), oe(), Gt(), Ht(), pt();
      const m = (async () => {
        const _ = await Ss(i, String(i.name || o));
        (Array.isArray(p.stickers) ? p.stickers : []).filter((x) => String((x == null ? void 0 : x.asset_id) || "") === o).length && (p.assets[o] = _, qr(), be(), Gt(), Ht(), pt());
      })();
      ta.set(o, m);
      try {
        await m;
      } finally {
        ta.delete(o);
      }
    } catch {
      delete p.assets[o], ht.delete(o);
      const l = Array.isArray(p.stickers) ? p.stickers : [], d = l.filter((m) => String((m == null ? void 0 : m.asset_id) || "") === o);
      d.length && (p.stickers = l.filter((m) => String((m == null ? void 0 : m.asset_id) || "") !== o), d.some((m) => {
        var _;
        return String((m == null ? void 0 : m.id) || "") === String(((_ = h.selection) == null ? void 0 : _.id) || "");
      }) && Ia(null), Gt(), Ht(), pt());
    } finally {
      URL.revokeObjectURL(c);
    }
  }
  function Zl(i) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const c = (l = o.files) == null ? void 0 : l[0];
      !c || typeof i != "function" || i(c);
    }, o.click();
  }
  function Rs() {
    r || e !== "stickers" && e !== "cutout" || Zl((i) => {
      Xl(i);
    });
  }
  async function vg(i) {
    var x;
    if (r || e !== "stickers" && e !== "cutout") return;
    const o = ue();
    if (!o || !Le(o) || ve(o) || !Ha(i)) return;
    const c = String(o.id || ""), l = String(o.asset_id || ""), d = l ? $e(((x = p.assets) == null ? void 0 : x[l]) || null) : null, m = Number(o.vFOV_deg || 0), _ = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, b = go("asset"), v = URL.createObjectURL(i);
    try {
      const M = await new Promise((F, V) => {
        const Y = new Image();
        Y.onload = () => F(Y), Y.onerror = () => V(new Error("image load failed")), Y.src = v;
      });
      ht.set(b, M), o.asset_id = b, o.vFOV_deg = Pr(
        Number(o.hFOV_deg || 30),
        Number(M.naturalWidth || M.width || 1),
        Number(M.naturalHeight || M.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, cn(), oe(), Gt(), Ht(), pt();
      const k = (async () => {
        const F = await Ss(i, String(i.name || b));
        (Array.isArray(p.stickers) ? p.stickers : []).some((H) => String((H == null ? void 0 : H.id) || "") === c && String((H == null ? void 0 : H.asset_id) || "") === b) && (p.assets[b] = F, qr(), be(), Gt(), Ht(), pt());
      })();
      ta.set(b, k);
      try {
        await k;
      } finally {
        ta.delete(b);
      }
    } catch {
      delete p.assets[b], ht.delete(b);
      const M = (Array.isArray(p.stickers) ? p.stickers : []).find((k) => String((k == null ? void 0 : k.id) || "") === c) || null;
      M && String(M.asset_id || "") === b && (l && d && (p.assets[l] = d), M.asset_id = l, M.vFOV_deg = m, M.crop = _ ? { ..._ } : null), cn(), Gt(), Ht(), pt();
    } finally {
      URL.revokeObjectURL(v);
    }
  }
  function _g() {
    if (r) return;
    const i = ue();
    !i || !Le(i) || ve(i) || Zl((o) => {
      vg(o);
    });
  }
  async function wg() {
    if (r || e !== "stickers") return;
    const i = p.assets && typeof p.assets == "object" ? p.assets : {}, o = Object.entries(i).filter(([, l]) => {
      const d = String((l == null ? void 0 : l.type) || "").toLowerCase(), m = String((l == null ? void 0 : l.value) || "");
      return d === "dataurl" && m.startsWith("data:image");
    });
    if (!o.length) return;
    let c = !1;
    for (const [l, d] of o)
      try {
        const m = String((d == null ? void 0 : d.value) || "");
        if (!m) continue;
        const _ = await fetch(m).then((k) => k.blob()), b = String(_.type || "image/png").split("/")[1] || "png", v = String((d == null ? void 0 : d.name) || `${l}.${b}`), x = new File([_], v, { type: _.type || "image/png" }), M = await Ss(x, v);
        p.assets[l] = {
          ...M,
          w: Number((d == null ? void 0 : d.w) || 0),
          h: Number((d == null ? void 0 : d.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (be(), pt());
  }
  function $v() {
  }
  function xg() {
    r || e === "cutout" && (p.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, p.active.selected_shot_id = null, oe(), be(), Gt(), pt());
  }
  function Sg() {
    const i = Array.isArray(p.stickers) ? p.stickers : [], o = [];
    for (const c of i)
      ve(c) && (c.visible = !1, o.push(c));
    return o;
  }
  function Jl(i, o, c = "Clear") {
    return new Promise((l) => {
      const d = document.createElement("div");
      d.className = "pano-canvas-confirm", d.innerHTML = `
        <div class="pano-canvas-confirm-card" role="dialog" aria-modal="true" aria-label="${i}">
          <div class="pano-canvas-confirm-title">${i}</div>
          <div class="pano-canvas-confirm-text">${o}</div>
          <div class="pano-canvas-confirm-actions">
            <button class="pano-btn" data-action="cancel">Cancel</button>
            <button class="pano-btn pano-btn-primary" data-action="confirm">${c}</button>
          </div>
        </div>
      `;
      const m = (v) => {
        d.remove(), l(!!v);
      };
      d.addEventListener("pointerdown", (v) => {
        v.target === d && m(!1);
      });
      const _ = d.querySelector("[data-action='cancel']"), b = d.querySelector("[data-action='confirm']");
      _.onclick = () => m(!1), b.onclick = () => m(!0), R.appendChild(d), b.focus();
    });
  }
  async function Ql() {
    var c, l;
    if (r || !await Jl(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    p.painting = ua(null), vn();
    const o = Sg();
    e === "stickers" ? (p.stickers = o, p.assets = {}, h.selectedId = ((c = o[0]) == null ? void 0 : c.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], p.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, qr()) : (p.stickers = o, p.assets = {}, p.shots = [], h.selectedId = null, h.selectedIds = [], p.active.selected_sticker_id = null, p.active.selected_shot_id = null, h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, qr()), oe(), be(), Gt(), Ht(), pt();
  }
  async function Ng(i) {
    var m, _, b, v;
    if (r) return;
    const o = i === "mask" ? "mask" : "paint", c = o === "mask" ? "Mask" : "Paint", l = Qr(o);
    if (!(!l.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((_ = h.interaction) == null ? void 0 : _.layerKind) === o) || !await Jl(
      `Clear ${c}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((b = h.interaction) == null ? void 0 : b.kind) === "draw" && ((v = h.interaction) == null ? void 0 : v.layerKind) === o) {
        const x = Zn();
        x && h.paintEngine.cancelActiveStroke(x), h.interaction = null;
      }
      l.length = 0, p.painting.raster_objects = tn().filter((x) => String((x == null ? void 0 : x.layerKind) || "paint") !== o), o === "paint" && (ke().length = 0), vn(), oe(), be(), Gt(), Ht(), ln(), pt();
    }
  }
  function Mg() {
    if (r) return;
    const i = ue();
    if (!i || !Le(i) || ve(i)) return;
    const o = JSON.parse(JSON.stringify(i));
    o.id = go("st"), o.yaw_deg = Ye((o.yaw_deg || 0) + 8), o.z_index = vl(), p.stickers.push(o), p.active.selected_sticker_id = o.id, h.selectedId = o.id, h.selectedIds = [o.id], cn(), oe(), be(), Ht(), Gt(), pt();
  }
  function tu() {
    var c, l, d, m, _, b;
    if (r) return;
    const i = Cn(), o = ue();
    if (!(!o && i.length === 0)) {
      if (i.length > 1) {
        const v = new Set(i.filter((k) => Pe(k)).map((k) => String(k.actionGroupId || k.id || ""))), x = new Set(i.filter((k) => Oe(k)).map((k) => Ie(k.rasterObjectId || k.id || ""))), M = new Set(i.filter(Le).map((k) => String(k.id || "")));
        v.size > 0 && (p.painting.paint.strokes = (Array.isArray((l = (c = p.painting) == null ? void 0 : c.paint) == null ? void 0 : l.strokes) ? p.painting.paint.strokes : []).filter((k) => !v.has(String((k == null ? void 0 : k.actionGroupId) || ""))), p.painting.groups = ke().filter((k) => !v.has(String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || ""))), vn()), x.size > 0 && (p.painting.raster_objects = tn().filter((k) => !x.has(String((k == null ? void 0 : k.id) || ""))), Xr()), M.size > 0 && (p.stickers = (Array.isArray(p.stickers) ? p.stickers : []).filter((k) => M.has(String((k == null ? void 0 : k.id) || "")) ? ve(k) ? (Wr(k) || (k.visible = !1), !0) : !1 : !0), qr(), cn()), h.selectedId = null, h.selectedIds = [], oe(), be(), Gt(), Ht(), pt();
        return;
      }
      if (Pe(o)) {
        const v = String(o.actionGroupId || o.id || "").trim();
        p.painting.paint.strokes = (Array.isArray((m = (d = p.painting) == null ? void 0 : d.paint) == null ? void 0 : m.strokes) ? p.painting.paint.strokes : []).filter((x) => String((x == null ? void 0 : x.actionGroupId) || "").trim() !== v), p.painting.groups = ke().filter((x) => String((x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || "").trim() !== v), vn(), h.selectedId = null, h.selectedIds = [], oe(), be(), Gt(), Ht(), pt();
        return;
      }
      if (Oe(o)) {
        const v = Ie(o.rasterObjectId || o.id || "");
        p.painting.raster_objects = tn().filter((x) => String((x == null ? void 0 : x.id) || "").trim() !== v), Xr(), h.selectedId = null, h.selectedIds = [], oe(), be(), Gt(), Ht(), pt();
        return;
      }
      if (e === "stickers" || Le(o)) {
        if (ve(o)) {
          if (Wr(o)) return;
          o.visible = !1, cn(), oe(), be(), Gt(), Ht(), pt();
          return;
        }
        p.stickers = p.stickers.filter((v) => v.id !== o.id), qr(), cn(), h.selectedId = ((_ = p.stickers[0]) == null ? void 0 : _.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], p.active.selected_sticker_id = ((b = p.stickers[0]) == null ? void 0 : b.id) || null, oe(), be(), Gt(), Ht(), pt();
        return;
      }
      xg();
    }
  }
  function kg(i, o) {
    if (!i) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const F = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(F)) {
        const [H, Z] = F.split(":").map((rt) => Number(rt));
        if (Number.isFinite(H) && Number.isFinite(Z)) return H >= Z;
      }
      const V = Number(i.hFOV_deg || 64), Y = Number(i.vFOV_deg || 40);
      return Math.abs(V - Y) > 1e-6 ? V >= Y : Tc(i) >= 1;
    })();
    let [d, m] = c[String(o)] || c["1:1"];
    d >= m !== l && ([d, m] = [m, d]);
    const _ = d / m, b = U(Number(i.hFOV_deg || 64), 1, 179), v = U(Number(i.vFOV_deg || 40), 1, 179), x = Math.sqrt(Math.max(1, b * v)), M = U(x * Math.sqrt(_), 1, 179), k = U(x / Math.sqrt(_), 1, 179);
    i.hFOV_deg = M, i.vFOV_deg = k, i.aspect_id = String(o);
  }
  function Pg(i) {
    if (!i) return;
    const o = Math.max(1, Number(i.hFOV_deg || 90)), c = Math.max(1, Number(i.vFOV_deg || 60));
    i.hFOV_deg = c, i.vFOV_deg = o, i.aspect_id = Fr(i);
  }
  function eu() {
    Kr().forEach((o, c) => {
      o.type === "sticker" && o.item && (o.item.z_index = c), o.type === "strokeGroup" && o.item && (o.item.z_index = c), o.type === "rasterObject" && o.item && (o.item.z_index = c);
    });
  }
  function Ag() {
    if (r) return;
    const i = Cn();
    if (!ue() || i.length === 0) return;
    eu();
    const c = Kr(), l = new Set(i.map((b) => Le(b) ? `sticker:${String(b.id || "")}` : Oe(b) ? `rasterObject:${Ie(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), d = [], m = [];
    if (c.forEach((b) => {
      var x, M;
      const v = b.type === "sticker" ? `sticker:${String(((x = b.item) == null ? void 0 : x.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((M = b.item) == null ? void 0 : M.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(v) ? d.push(b) : m.push(b);
    }), !d.length || d[d.length - 1] === c[c.length - 1]) return;
    [...m, ...d].forEach((b, v) => {
      b.type === "sticker" && b.item && (b.item.z_index = v), b.type === "strokeGroup" && b.item && (b.item.z_index = v), b.type === "rasterObject" && b.item && (b.item.z_index = v);
    }), cn(), oe(), be(), Ht(), pt();
  }
  function Cg() {
    if (r) return;
    const i = Cn();
    if (!ue() || i.length === 0) return;
    eu();
    const c = Kr(), l = new Set(i.map((b) => Le(b) ? `sticker:${String(b.id || "")}` : Oe(b) ? `rasterObject:${Ie(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), d = [], m = [];
    if (c.forEach((b) => {
      var x, M;
      const v = b.type === "sticker" ? `sticker:${String(((x = b.item) == null ? void 0 : x.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((M = b.item) == null ? void 0 : M.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(v) ? d.push(b) : m.push(b);
    }), !d.length || d[0] === c[0]) return;
    [...d, ...m].forEach((b, v) => {
      b.type === "sticker" && b.item && (b.item.z_index = v), b.type === "strokeGroup" && b.item && (b.item.z_index = v), b.type === "rasterObject" && b.item && (b.item.z_index = v);
    }), cn(), oe(), be(), Ht(), pt();
  }
  function nu() {
    r || (p.projection_model = "pinhole_rectilinear", p.alpha_mode = "straight", f && (p.output_preset = Lc(f.value, Number(p.output_preset || 2048))), g && (p.coverage = qe(g.value)), y && (p.bg_color = String(y.value || p.bg_color || "#00ff00")), In(), t.setDirtyCanvas(!0, !0));
  }
  function In() {
    var o;
    if (r) return;
    p.coverage = qe(p.coverage);
    const i = JSON.stringify(p);
    w && (w.value = i, (o = w.callback) == null || o.call(w, i));
  }
  function gr() {
    p.ui_settings = hv(p.ui_settings), r || In();
  }
  function be() {
    var i;
    r || (In(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0));
  }
  function ru() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", ln(), Gt());
  }
  function Jr(i) {
    const o = A.getBoundingClientRect();
    return {
      x: (i.clientX - o.left) / o.width * A.width,
      y: (i.clientY - o.top) / o.height * A.height
    };
  }
  function ja(i) {
    const o = A.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(o.left || 0),
      y: Number(i.clientY) - Number(o.top || 0)
    };
  }
  function iu() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function Ae() {
    return null;
  }
  function Oi(i = Ae()) {
    return null;
  }
  function au() {
    return !1;
  }
  function _n(i, o = performance.now()) {
    if (h.mode === "unwrap") {
      const m = hr(), _ = (i.x - m.x) / Math.max(1, m.w), b = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: U(b, 0, 1),
        t: Number(o || 0)
      };
    }
    const c = xs(i.x, i.y), { lon: l, lat: d } = Il(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: U(0.5 - d / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Jn(i, o, c = performance.now()) {
    return null;
  }
  function Ig(i, o) {
    return !1;
  }
  function Eg(i, o) {
    const c = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function mr(i) {
    const o = String(i || "").trim();
    return o === "eraser" ? nr : en[o] ? o : h.activeBrushPresetId || nr;
  }
  function ou() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (iu() || au());
  }
  function su() {
    var i;
    return ou() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Ua(i, o = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), l = Number((i == null ? void 0 : i.y) || 0), d = o !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, _ = m.inside !== d || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - l) > 0.01;
    return h.pointerPos = { x: c, y: l, inside: d }, _;
  }
  function Dg() {
    var M, k;
    if (!su()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? h.maskTool : h.paintTool, c = mr(o), l = en[c] || en[nr], d = Number(h.brushSizes[c] ?? 10), m = Math.max(1, d) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(3, m * 0.5), b = i === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : un(h.paintColor), v = i === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : U(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), x = i === "mask" ? 0.95 : o === "eraser" ? 0.75 : U(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: o,
      preset: l,
      radius: _,
      fillStyle: Nn(b, v),
      strokeStyle: Nn(b, x),
      x: Number(((M = h.pointerPos) == null ? void 0 : M.x) || 0),
      y: Number(((k = h.pointerPos) == null ? void 0 : k.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function Tg() {
    var F, V, Y;
    const i = Dg();
    if (!C) return;
    if (!i) {
      C.style.display = "none";
      return;
    }
    let o = i.radius * 2, c = i.radius * 2, l = "999px", d = 0, m = i.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const v = "rgba(222, 222, 222, 0.72)", x = "rgba(52, 52, 52, 0.72)";
    let M = Number(i.hotspotX ?? o * 0.5), k = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      o = Yo, c = Yo, l = "0", _ = "0", b = "none", M = tv, k = ev, m = ov(i.fillStyle, x, v);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const H = Math.max(1, Number(((F = i.preset) == null ? void 0 : F.aspect) ?? 1));
      o = Math.max(10, i.radius * 2 * H), c = Math.max(6, i.radius * 2), l = `${Math.min(6, c * 0.42)}px`, d = Number(((Y = (V = i.preset) == null ? void 0 : V.angle) == null ? void 0 : Y.value) || 0) * Or;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    C.style.display = "block", C.style.width = `${Math.round(o)}px`, C.style.height = `${Math.round(c)}px`, C.style.borderRadius = l, C.style.border = _, C.style.boxShadow = b, C.style.background = m, C.style.backgroundRepeat = "no-repeat", C.style.backgroundPosition = "center", C.style.backgroundSize = "contain", C.style.transform = `translate(${Math.round(i.x - M)}px, ${Math.round(i.y - k)}px) rotate(${d}deg)`;
  }
  function Rg() {
    var mt;
    if (!T || !W) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? h.maskTool : h.paintTool;
    if (o === "lasso_fill") return;
    const c = mr(o), l = en[c] || en[nr], d = Number(h.brushSizes[c] ?? 10), m = Math.max(1, d) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(6, m * 0.5), b = o === "eraser", v = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : un(h.paintColor), x = i === "mask" ? Nn(v, 0.22) : b ? "rgba(255,255,255,0.14)" : Nn(v, U(Math.max(0.18, Number(v.a ?? 1) * 0.34), 0.18, 0.56)), M = i === "mask" ? Nn(v, 0.96) : b ? "rgba(255,255,255,0.72)" : Nn(v, U(Math.max(0.56, Number(v.a ?? 1) * 0.96), 0.56, 1));
    let k = _ * 2, F = _ * 2, V = "999px", Y = 0, H = x;
    const Z = "rgba(222, 222, 222, 0.72)", rt = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      H = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const et = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      k = Math.max(16, _ * 2 * et), F = Math.max(10, _ * 2), V = `${Math.min(8, F * 0.42)}px`, Y = Number(((mt = l == null ? void 0 : l.angle) == null ? void 0 : mt.value) || 0) * Or;
    } else o === "brush" ? H = `radial-gradient(circle at 50% 50%, ${M} 0%, ${x} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (k = Math.max(18, _ * 1.8), F = k, H = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : b && (H = "rgba(255,255,255,0.12)");
    W.style.width = `${Math.round(k)}px`, W.style.height = `${Math.round(F)}px`, W.style.borderRadius = V, W.style.background = H, W.style.border = `1px solid ${Z}`, W.style.boxShadow = `0 0 0 1px ${rt}`, W.style.transform = `rotate(${Y}deg)`, B && (clearTimeout(B), B = 0), T.classList.remove("fade-out"), T.classList.add("show");
  }
  function Ba() {
    !T || !T.classList.contains("show") || (T.classList.add("fade-out"), B && clearTimeout(B), B = window.setTimeout(() => {
      T.classList.remove("show", "fade-out"), B = 0;
    }, 180));
  }
  function Lg(i, o, c, l) {
    const d = mr(o), m = en[d] || en[nr], _ = h.brushSizes[d] ?? 10, b = Math.max(1, _) * Math.max(0.1, m.sizeScale ?? 1), v = Eg(l, b), x = c.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), M = {
      id: li(i),
      actionGroupId: li("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: i,
      toolKind: o,
      size: b,
      createdAt: Date.now(),
      color: i === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: v.radiusModel,
      radiusValue: v.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: x.map((k) => ({ ...k })),
        points: x.map((k) => ({ ...k }))
      }
    };
    return $f(M, m), Number(m.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), Number(M.size || 0), String(M.radiusModel || ""), Number(M.radiusValue || 0), { ...M.targetSpace }, M;
  }
  function Og(i, o, c, l) {
    const d = c.map((v) => ({
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: Number.isFinite(Number(v == null ? void 0 : v.widthScale)) ? Math.max(0, Number(v.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(v == null ? void 0 : v.pressureLike)) ? Math.max(0, Number(v.pressureLike)) : 1
    })), m = mr(o), _ = en[m] || en[nr], b = {
      id: li(i),
      actionGroupId: li("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: i,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: d.map((v) => ({ ...v }))
      }
    };
    return $f(b, _), Number(_.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function Qr(i) {
    const o = p.painting || (p.painting = ua(null)), c = o[i] || (o[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function Fg(i, o, c = performance.now()) {
    let l;
    if (h.mode === "frame") {
      const x = Ae();
      if (!x) return !1;
      l = Jn(o, x, c);
    } else
      l = _n(o, c);
    const d = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, _ = d[d.length - 1];
    if (_) {
      const x = Math.abs(Number(l.u ?? l.x ?? 0) - Number(_.u ?? _.x ?? 0)), M = Math.abs(Number(l.v ?? l.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (x < 15e-4 && M < 15e-4) return !1;
    }
    const b = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    d.push({ ...b }), m.push({ ...b });
    const v = Zn();
    if (v) {
      const x = h.paintEngine.ensureTarget(v);
      h.paintEngine.appendStrokePoint(x, Number(b.u ?? 0), Number(b.v ?? 0), i.stroke);
    }
    return !0;
  }
  function $g(i, o, c = performance.now()) {
    var _, b;
    let l;
    if (h.mode === "frame") {
      const v = Ae();
      if (!v) return !1;
      l = Jn(o, v, c);
    } else
      l = _n(o, c);
    const d = (b = (_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.points;
    if (!l || !Array.isArray(d)) return !1;
    const m = d[d.length - 1];
    if (m) {
      const v = Math.abs(Number(l.u ?? l.x ?? 0) - Number(m.u ?? m.x ?? 0)), x = Math.abs(Number(l.v ?? l.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (v < 15e-4 && x < 15e-4) return !1;
    }
    return d.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Vg(i) {
    var et, gt, At, Dt, yt;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || (i == null ? void 0 : i.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    Va();
    const c = Zn(), l = Ti(c.width, c.height);
    if (!Bl(l, o, { w: c.width, h: c.height })) return !1;
    const d = ((gt = (et = l.ctx) == null ? void 0 : et.getImageData(0, 0, c.width, c.height)) == null ? void 0 : gt.data) || null;
    if (!d) return !1;
    const m = new Map(ke().map((j) => [String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "").trim(), j ? { ...j } : null])), _ = [], b = [], v = [...tn().filter((j) => String((j == null ? void 0 : j.layerKind) || "paint") !== "paint")];
    let x = !1, M = Kr().reduce((j, X) => Math.max(j, Number((X == null ? void 0 : X.z_index) || 0)), -1) + 1;
    function k(j, X, vt, Lt = 8) {
      let $t = X, Vt = vt, Rt = -1, Kt = -1;
      for (let Bt = 0; Bt < vt; Bt += 1)
        for (let jt = 0; jt < X; jt += 1)
          j[(Bt * X + jt) * 4 + 3] <= Lt || (jt < $t && ($t = jt), Bt < Vt && (Vt = Bt), jt > Rt && (Rt = jt), Bt > Kt && (Kt = Bt));
      return Rt < $t || Kt < Vt ? null : { minX: $t, minY: Vt, maxX: Rt, maxY: Kt };
    }
    const F = k(d, c.width, c.height, 8);
    if (!F) return !1;
    function V(j, X) {
      return !j || !X ? !1 : !(j.maxX < X.minX || X.maxX < j.minX || j.maxY < X.minY || X.maxY < j.minY);
    }
    function Y(j, X) {
      const vt = fr((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "", "paint", X);
      if (!vt) return null;
      const Lt = vt.centerUv.u - vt.halfW, $t = vt.centerUv.u + vt.halfW, Vt = vt.centerUv.v - vt.halfH, Rt = vt.centerUv.v + vt.halfH, Kt = c.width, Bt = c.height;
      return {
        minX: Math.floor((Lt % 1 + 1) % 1 * Kt),
        maxX: Math.ceil(($t % 1 + 1) % 1 * Kt),
        minY: Math.floor(U(Vt, 0, 1) * Bt),
        maxY: Math.ceil(U(Rt, 0, 1) * Bt),
        wraps: $t - Lt >= 1 || Lt < 0 || $t > 1
      };
    }
    function H(j) {
      const X = (j == null ? void 0 : j.bbox) || null;
      if (!X) return null;
      const vt = (j == null ? void 0 : j.transform) || {}, Lt = c.width, $t = c.height, Vt = Number(X.u0 || 0) + Number(vt.du || 0), Rt = Number(X.u1 || 0) + Number(vt.du || 0), Kt = Number(X.v0 || 0) + Number(vt.dv || 0), Bt = Number(X.v1 || 0) + Number(vt.dv || 0);
      return {
        minX: Math.floor((Vt % 1 + 1) % 1 * Lt),
        maxX: Math.ceil((Rt % 1 + 1) % 1 * Lt),
        minY: Math.floor(U(Kt, 0, 1) * $t),
        maxY: Math.ceil(U(Bt, 0, 1) * $t),
        wraps: Rt - Vt >= 1 || Vt < 0 || Rt > 1
      };
    }
    function Z(j) {
      return j ? j.wraps ? V(F, { minX: 0, maxX: j.maxX, minY: j.minY, maxY: j.maxY }) || V(F, { minX: j.minX, maxX: c.width - 1, minY: j.minY, maxY: j.maxY }) : V(F, j) : !0;
    }
    function rt(j) {
      if (!j) return { touched: !1, canvas: null };
      const X = Ti(c.width, c.height, { readback: !0 });
      X.ctx.drawImage(j, 0, 0);
      const vt = X.ctx.getImageData(0, 0, c.width, c.height);
      X.ctx.save(), X.ctx.globalCompositeOperation = "destination-out", X.ctx.drawImage(l.canvas, 0, 0), X.ctx.restore();
      const Lt = X.ctx.getImageData(0, 0, c.width, c.height);
      for (let $t = 0; $t < c.width * c.height; $t += 1) {
        if (d[$t * 4 + 3] <= 8) continue;
        const Rt = vt.data[$t * 4 + 3], Kt = Lt.data[$t * 4 + 3];
        if (Rt > Kt)
          return { touched: !0, canvas: X.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function mt(j, X, vt) {
      const Lt = Number(vt == null ? void 0 : vt.z_index), $t = lg(j, X, vt).map((Vt, Rt) => ({
        ...Vt,
        z_index: Number.isFinite(Lt) ? Lt + Rt * 1e-3 : M + Rt * 1e-3
      }));
      return $t.length && (M = Math.max(M, ...$t.map((Vt) => Number((Vt == null ? void 0 : Vt.z_index) || 0))) + 1), $t;
    }
    for (const j of ke()) {
      const X = String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "").trim();
      if (!X) continue;
      const vt = bn(X, "paint");
      if (!Z(Y(j, vt))) {
        b.push(j), _.push(...vt);
        continue;
      }
      const Lt = ((Dt = (At = h.paintEngine) == null ? void 0 : At.getGroupTarget) == null ? void 0 : Dt.call(At, X)) || null, $t = ((yt = Lt == null ? void 0 : Lt.committedPaint) == null ? void 0 : yt.canvas) || null;
      if (!$t) {
        b.push(j), _.push(...vt);
        continue;
      }
      const Vt = rt($t);
      if (!Vt.touched || !Vt.canvas) {
        b.push(j), _.push(...vt);
        continue;
      }
      x = !0;
      const Rt = mt(Vt.canvas, "paint", m.get(X) || j || {});
      v.push(...Rt);
    }
    for (const j of tn().filter((X) => String((X == null ? void 0 : X.layerKind) || "paint") === "paint")) {
      if (!Z(H(j))) {
        v.push(j);
        continue;
      }
      const X = Pl(j, null);
      if (!X) {
        v.push(j);
        continue;
      }
      const vt = rt(X);
      if (!vt.touched || !vt.canvas) {
        v.push(j);
        continue;
      }
      x = !0;
      const Lt = mt(vt.canvas, "paint", j);
      v.push(...Lt);
    }
    return x ? (p.painting.paint.strokes = _, p.painting.groups = b.sort((j, X) => Number((j == null ? void 0 : j.z_index) || 0) - Number((X == null ? void 0 : X.z_index) || 0)), p.painting.raster_objects = v.sort((j, X) => Number((j == null ? void 0 : j.z_index) || 0) - Number((X == null ? void 0 : X.z_index) || 0)), Ii({ preservePanelValues: !1 }), !0) : !1;
  }
  function zg(i) {
    var m, _, b, v;
    const o = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const c = String(((_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = Es(o.rawPoints || o.points || [], i.stroke.targetSpace, !0)), Vg(i);
    const l = i.layerKind === "paint" && c !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && fl((b = i.stroke) == null ? void 0 : b.actionGroupId), Qr(i.layerKind).push(i.stroke), !0);
    const d = o.rawPoints || o.points || [];
    return d.length < 1 ? !1 : (o.processedPoints = Es(d, i.stroke.targetSpace, !0), l && fl((v = i.stroke) == null ? void 0 : v.actionGroupId), Qr(i.layerKind).push(i.stroke), !0);
  }
  function cu(i) {
    if (e === "cutout" && h.mode === "frame")
      return null;
    const o = [
      ...dl(!1).slice().sort((c, l) => Number((l == null ? void 0 : l.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var l;
        return c.type === "strokeGroup" ? Ci(ka("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? Ai(Pa(((l = c.item) == null ? void 0 : l.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...e === "cutout" ? zl().filter((c) => ms()) : []
    ];
    for (const c of o) {
      if (Pe(c)) {
        const d = sn(c);
        if (!(d != null && d.visible)) continue;
        const m = Array.isArray(d.strokePaths) ? d.strokePaths : [];
        for (const _ of m) {
          const b = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
          if (!b.length) continue;
          if (_.closed && b.length >= 3 && wr(i, b)) return { item: c, geom: d };
          const v = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
          for (let x = 0; x < b.length - 1; x += 1)
            if (Hf(i, b[x], b[x + 1]) <= v * v) return { item: c, geom: d };
          if (b.length === 1 && Lr(i, b[0]) <= v * v) return { item: c, geom: d };
        }
        continue;
      }
      if (Oe(c)) {
        const d = sn(c);
        if (!(d != null && d.visible)) continue;
        if (bp(c, d, i)) return { item: c, geom: d };
        continue;
      }
      const l = sn(c);
      if (l.visible && wr(i, l.corners))
        return { item: c, geom: l };
    }
    return null;
  }
  function Ls(i, o) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (i.kind === "strokeGroup") {
      const l = i.corners.findIndex((m) => Lr(m, o) <= 121);
      if (l >= 0) {
        const m = i.corners[l], _ = m.x - i.center.x, b = m.y - i.center.y, v = _ * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: v };
      }
      const d = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const m of d) {
        const _ = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && _.length >= 3 && wr(o, _)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let v = 0; v < _.length - 1; v += 1)
          if (Hf(o, _[v], _[v + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return wr(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const l = i.corners.findIndex((d) => Lr(d, o) <= 121);
      if (l >= 0) {
        const d = i.corners[l], m = d.x - i.center.x, _ = d.y - i.center.y, b = m * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: b };
      }
      return wr(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (e === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const l = i.edgeMidpoints.find((d) => Lr(d, o) <= 169);
      if (l) {
        const d = l.edge === "left" || l.edge === "right";
        return { kind: d ? "scale_x" : "scale_y", cursor: d ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const c = i.corners.findIndex((l) => Lr(l, o) <= 121);
    if (c >= 0) {
      const l = i.corners[c], d = l.x - i.center.x, m = l.y - i.center.y, _ = d * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: _ };
    }
    return Lr(i.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : wr(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
  }
  function lu(i, o) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function Hg(i, o) {
    return !!i && !!o && Number(o.x) >= Number(i.x0) && Number(o.x) <= Number(i.x1) && Number(o.y) >= Number(i.y0) && Number(o.y) <= Number(i.y1);
  }
  function jg(i, o) {
    if (!i || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((d) => Hg(i, d))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, l = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!wr({ x: c, y: l }, o.corners);
  }
  function he(i) {
    if (Tg(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? A.style.cursor = "none" : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? A.style.cursor = "grabbing" : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? A.style.cursor = "move" : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? A.style.cursor = h.interaction.cursor || "nwse-resize" : h.interaction.kind === "rotate" ? A.style.cursor = "grabbing" : A.style.cursor = "default";
      return;
    }
    if (su()) {
      A.style.cursor = "none";
      return;
    }
    if (h.mode === "frame" && h.primaryTool !== "cursor") {
      A.style.cursor = "default";
      return;
    }
    if (h.primaryTool === "cursor" && h.marqueeModifier) {
      A.style.cursor = "default";
      return;
    }
    const o = ue(), c = o ? sn(o) : null, l = o ? dr(o) : !1, d = l ? { kind: "none", cursor: "default" } : Ls(c, i);
    if (!l && d.kind !== "none") {
      A.style.cursor = d.cursor;
      return;
    }
    if (h.primaryTool === "cursor" && cu(i)) {
      A.style.cursor = "default";
      return;
    }
    A.style.cursor = h.mode === "pano" ? "grab" : "default";
  }
  function Ht() {
    if (!it) return;
    const i = ue(), o = Cn();
    if (!i && o.length === 0 || h.interaction) {
      it.style.display = "none";
      return;
    }
    if (o.length > 1) {
      const yt = "multi", j = vs(o);
      if (h.menuMode !== yt)
        it.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Et.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Et.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${j ? "Unlock" : "Lock"}" data-tip="${j ? "Unlock" : "Lock"}">${j ? Et.lock_open : Et.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Et.delete}</button>
        `, h.menuMode = yt, h.menuSize.measured = !1, Fi(it);
      else {
        const kt = it.querySelector("[data-action='toggle-lock']");
        kt && (kt.innerHTML = j ? Et.lock_open : Et.lock_closed, kt.setAttribute("aria-label", j ? "Unlock" : "Lock"), kt.setAttribute("data-tip", j ? "Unlock" : "Lock"));
      }
      const X = bs(o);
      if (!(X != null && X.visible)) {
        it.style.display = "none";
        return;
      }
      const vt = X.corners.map((kt) => kt.x), Lt = X.corners.map((kt) => kt.y), $t = Math.min(...vt), Vt = Math.max(...vt), Rt = Math.max(...Lt), Kt = it.style.display, Bt = it.style.visibility;
      it.style.display = "flex", it.style.visibility = "hidden";
      const jt = it.getBoundingClientRect(), _e = Math.round(Number((jt == null ? void 0 : jt.width) || 0)) || it.offsetWidth || h.menuSize.w || 220, hn = Math.round(Number((jt == null ? void 0 : jt.height) || 0)) || it.offsetHeight || h.menuSize.h || 40;
      h.menuSize.w = Number.isFinite(_e) && _e > 0 ? _e : 220, h.menuSize.h = Number.isFinite(hn) && hn > 0 ? hn : 40, it.style.display = Kt, it.style.visibility = Bt, h.menuSize.measured = !0;
      const $i = h.menuSize.w, qa = h.menuSize.h, ei = 14;
      it.style.display = "flex";
      let ni = ($t + Vt) * 0.5 - $i * 0.5, Vi = Rt + 18;
      if (ni = U(ni, ei, A.width - $i - ei), Vi + qa > A.height - ei) {
        it.style.display = "none";
        return;
      }
      it.style.left = `${ni}px`, it.style.top = `${Vi}px`;
      return;
    }
    const c = yl(), l = dr(i), d = c === "stroke" ? "stroke:paint" : e === "stickers" || c === "image" ? `stickers:${ve(i) ? "external" : "normal"}` : `cutout:${h.cutoutAspectOpen ? "open" : "closed"}`;
    if (h.menuMode !== d) {
      if (c === "stroke")
        it.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Et.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Et.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Et.lock_open : Et.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Et.delete}</button>
        `;
      else if (e === "stickers" || c === "image")
        it.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Et.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Et.send_back}</button>
          ${ve(i) ? "" : `<button class="pano-btn pano-btn-icon" data-action="duplicate" aria-label="Duplicate" data-tip="Duplicate">${Et.duplicate}</button><button class="pano-btn pano-btn-icon" data-action="replace-image" aria-label="Replace Image" data-tip="Replace image">${Et.replace_image}</button>`}
          ${ve(i) ? `<button class="pano-btn pano-btn-icon" data-action="back-initial" aria-label="Back to Initial" data-tip="Back to initial position">${Et.back_initial}</button>` : ""}
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Et.lock_open : Et.lock_closed}</button>
          ${ve(i) ? `<button class="pano-btn pano-btn-icon" data-action="toggle-visible" aria-label="Hide" data-tip="Hide input image">${Et.eye_dashed}</button>` : `<button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Et.delete}</button>`}
        `;
      else {
        const yt = ci(i);
        it.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${Et.aspect}</button>
            <div class="pano-aspect-popover${h.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
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
      h.menuMode = d, h.menuSize.measured = !1, Fi(it);
    }
    if ((e === "stickers" || c === "image") && ve(i)) {
      const yt = it.querySelector("[data-action='back-initial']");
      if (yt) {
        const X = sp();
        yt.disabled = !X, yt.setAttribute("aria-disabled", X ? "false" : "true"), yt.setAttribute("data-tip", X ? "Back to initial position" : "Already at initial position");
      }
      const j = it.querySelector("[data-action='toggle-visible']");
      if (j) {
        const X = Wr(i);
        j.innerHTML = X ? Et.eye : Et.eye_dashed, j.setAttribute("aria-label", X ? "Show" : "Hide"), j.setAttribute("data-tip", X ? "Show input image" : "Hide input image");
      }
    }
    const m = it.querySelector("[data-action='toggle-lock']");
    m && (m.innerHTML = l ? Et.lock_open : Et.lock_closed, m.setAttribute("aria-label", l ? "Unlock" : "Lock"), m.setAttribute("data-tip", l ? "Unlock" : "Lock"));
    const _ = sn(i);
    if (!(_ != null && _.visible)) {
      it.style.display = "none";
      return;
    }
    const b = _.corners, v = b.map((yt) => yt.x), x = b.map((yt) => yt.y), M = Math.min(...v), k = Math.max(...v), F = Math.max(...x), V = it.style.display, Y = it.style.visibility;
    it.style.display = "flex", it.style.visibility = "hidden";
    const H = it.getBoundingClientRect(), Z = Math.round(Number((H == null ? void 0 : H.width) || 0)) || it.offsetWidth || h.menuSize.w || 220, rt = Math.round(Number((H == null ? void 0 : H.height) || 0)) || it.offsetHeight || h.menuSize.h || 40;
    h.menuSize.w = Number.isFinite(Z) && Z > 0 ? Z : 220, h.menuSize.h = Number.isFinite(rt) && rt > 0 ? rt : 40, it.style.display = V, it.style.visibility = Y, h.menuSize.measured = !0;
    const mt = h.menuSize.w, et = h.menuSize.h, gt = 14;
    it.style.display = "flex";
    let At = (M + k) * 0.5 - mt * 0.5, Dt = F + 18;
    if (!Number.isFinite(At) || !Number.isFinite(Dt)) {
      it.style.display = "none";
      return;
    }
    if (At = U(At, gt, A.width - mt - gt), Dt + et > A.height - gt) {
      it.style.display = "none";
      return;
    }
    it.style.left = `${At}px`, it.style.top = `${Dt}px`;
  }
  function Ga() {
    lt && (me.timer && (clearTimeout(me.timer), me.timer = 0), me.target = null, lt.classList.remove("show", "pano-tooltip-footer", "pano-tooltip-tool-rail"));
  }
  function Ug(i) {
    if (!lt || !i || !i.isConnected) return;
    const o = String(i.getAttribute("data-tip") || "").trim();
    if (!o) return;
    lt.textContent = o;
    const c = R.getBoundingClientRect(), l = i.getBoundingClientRect(), d = 8, m = lt.offsetWidth || 100, _ = lt.offsetHeight || 24, b = !!i.closest(".pano-floating-left"), v = !!i.closest(".pano-paint-footer") || !!i.closest(".pano-paint-color-float");
    lt.classList.remove("pano-tooltip-footer", "pano-tooltip-tool-rail");
    let x = l.left - c.left + l.width * 0.5 - m * 0.5, M = l.top - c.top - _ - 8;
    if (b)
      lt.classList.add("pano-tooltip-tool-rail"), x = l.right - c.left + 10, M = l.top - c.top + l.height * 0.5 - _ * 0.5, x = U(x, d, Math.max(d, c.width - m - d)), M = U(M, d, Math.max(d, c.height - _ - d));
    else if (v) {
      lt.classList.add("pano-tooltip-footer");
      const k = i.closest(".pano-paint-footer"), F = k ? k.getBoundingClientRect() : l;
      x = F.left - c.left + F.width * 0.5 - m * 0.5, M = F.bottom - c.top + 5, x = U(x, d, Math.max(d, c.width - m - d)), M = Math.max(d, M);
    }
    x = U(x, d, Math.max(d, c.width - m - d)), M = Math.max(d, M), lt.style.left = `${x}px`, lt.style.top = `${M}px`, lt.classList.add("show");
  }
  function Fi(i) {
    i.querySelectorAll("[data-tip]").forEach((o) => {
      o.__panoTipBound || (o.__panoTipBound = !0, o.addEventListener("pointerenter", () => {
        me.target = o, me.timer && clearTimeout(me.timer), me.timer = window.setTimeout(() => {
          me.target === o && Ug(o);
        }, 220);
      }), o.addEventListener("pointerleave", () => {
        me.target === o && (me.target = null), Ga();
      }), o.addEventListener("pointerdown", Ga));
    });
  }
  const Ee = us({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (i) => {
      h.viewYaw = Ye(Number(i.yaw || 0)), h.viewPitch = U(Number(i.pitch || 0), -89.9, 89.9), h.viewFov = U(Number(i.fov || h.viewFov || 100), 35, 140);
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
        x: (i = p.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (o = p.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: hr,
    onInteraction: () => {
      Mt.backgroundDirty = !0, Mt.dirty = !0;
    }
  });
  A.onpointerdown = (i) => {
    const o = Jr(i);
    if (Ua(o, !0), h.viewTween = null, Ee.state.inertia.active = !1, Ee.state.inertia.vx = 0, Ee.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), h.mode !== "frame") {
        const b = h.mode === "unwrap" ? o : ja(i);
        h.interaction = { kind: "view", last: b, lastTs: performance.now() }, Ee.startDrag(b.x, b.y, i.pointerId, performance.now());
      }
      he(o), A.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (r) {
      if (h.mode === "pano") {
        const b = ja(i);
        h.interaction = { kind: "view", last: b, lastTs: performance.now() }, Ee.startDrag(b.x, b.y, i.pointerId, performance.now()), he(o), A.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (Nt && !Nt.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (iu() || au())) {
      const b = h.primaryTool === "mask" ? "mask" : "paint", v = h.primaryTool === "mask" ? h.maskTool : h.paintTool, x = { kind: "ERP_GLOBAL" }, M = _n(o, performance.now());
      h.interaction = {
        kind: v === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: li("live"),
        stroke: v === "lasso_fill" ? Og(b, v, [M], x) : Lg(b, v, [M], x)
      }, Di();
      const k = Zn();
      if (k)
        if (h.paintEngine.beginStroke(h.interaction.stroke, k), h.interaction.kind === "paint_stroke") {
          const F = h.paintEngine.ensureTarget(k), V = Number((M == null ? void 0 : M.u) ?? (M == null ? void 0 : M.x) ?? 0), Y = Number((M == null ? void 0 : M.v) ?? (M == null ? void 0 : M.y) ?? 0);
          h.paintEngine.appendStrokePoint(F, V, Y, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, k);
      he(o), A.setPointerCapture(i.pointerId), pt();
      return;
    }
    const c = Cn(), l = ue(), d = c.length > 1 ? bs(c) : l ? sn(l) : null;
    if (h.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      h.interaction = { kind: "marquee_select", start: o, current: o }, he(o), A.setPointerCapture(i.pointerId), pt({ localOnly: !0 });
      return;
    }
    if (c.length > 1 && (d != null && d.visible)) {
      if ((c.some((v) => dr(v)) ? { kind: "none" } : Ls(d, o)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: c.map((v) => v),
          offset: { x: o.x - d.center.x, y: o.y - d.center.y },
          startCenter: { x: d.center.x, y: d.center.y },
          stickerSnapshots: c.filter((v) => Le(v)).map((v) => ({
            id: String(v.id || ""),
            yaw_deg: Number(v.yaw_deg || 0),
            pitch_deg: Number(v.pitch_deg || 0),
            center: (() => {
              var M, k;
              const x = sn(v);
              return x != null && x.visible ? { x: Number(((M = x.center) == null ? void 0 : M.x) || 0), y: Number(((k = x.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: c.filter((v) => Pe(v)).map((v) => ({
            id: String(v.actionGroupId || v.id || ""),
            layerKind: String(v.layerKind || "paint"),
            snapshot: $e(bn(v.actionGroupId, v.layerKind)),
            frameSnapshot: $e(fr(v.actionGroupId, v.layerKind)),
            center: (() => {
              var M, k;
              const x = sn(v);
              return x != null && x.visible ? { x: Number(((M = x.center) == null ? void 0 : M.x) || 0), y: Number(((k = x.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: ys(v.actionGroupId, v.layerKind)
          })),
          rasterSnapshots: c.filter((v) => Oe(v)).map((v) => ({
            id: Ie(v.rasterObjectId || v.id || ""),
            snapshot: $e(tn().find((x) => String((x == null ? void 0 : x.id) || "") === Ie(v.rasterObjectId || v.id || ""))),
            center: (() => {
              var M, k;
              const x = sn(v);
              return x != null && x.visible ? { x: Number(((M = x.center) == null ? void 0 : M.x) || 0), y: Number(((k = x.center) == null ? void 0 : k.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Dl(v)
          }))
        }, he(o), A.setPointerCapture(i.pointerId);
        return;
      }
    } else if (l && (d != null && d.visible)) {
      const b = dr(l) ? { kind: "none" } : Ls(d, o);
      if (b.kind === "scale") {
        h.interaction = Pe(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          snapshot: $e(bn(l.actionGroupId, l.layerKind)),
          frameSnapshot: $e(fr(l.actionGroupId, l.layerKind)),
          cursor: b.cursor
        } : Oe(l) ? {
          kind: "scale_raster_object",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          snapshot: $e(tn().find((v) => String((v == null ? void 0 : v.id) || "") === Ie(l.rasterObjectId || l.id || ""))),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor
        }, he(o), A.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        h.interaction = {
          kind: b.kind,
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, he(o), A.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        h.interaction = Pe(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: d.center,
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x),
          snapshot: $e(bn(l.actionGroupId, l.layerKind)),
          frameSnapshot: $e(fr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: d.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x)
        }, he(o), A.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Pe(l)) {
          const v = h.mode === "frame" ? (() => {
            const x = Ae();
            return x ? Jn(o, x, performance.now()) : null;
          })() : _n(o, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: v,
            snapshot: $e(bn(l.actionGroupId, l.layerKind)),
            frameSnapshot: $e(fr(l.actionGroupId, l.layerKind))
          }, he(o), A.setPointerCapture(i.pointerId);
          return;
        }
        if (Oe(l)) {
          const v = h.mode === "frame" ? (() => {
            const x = Ae();
            return x ? Jn(o, x, performance.now()) : null;
          })() : _n(o, performance.now());
          h.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: v,
            snapshot: $e(tn().find((x) => String((x == null ? void 0 : x.id) || "") === Ie(l.rasterObjectId || l.id || "")))
          }, he(o), A.setPointerCapture(i.pointerId);
          return;
        }
        h.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - d.center.x, y: o.y - d.center.y }
        }, he(o), A.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = cu(o);
    if (m) {
      const b = h.selectedId !== m.item.id;
      if (b && h.selectedId && (oe(), In()), Ia(m.item), e === "cutout" && b && (h.cutoutAspectOpen = !1), b && Gt(), Ht(), pt(), dr(m.item)) {
        he(o);
        return;
      }
      h.interaction = {
        kind: Pe(m.item) ? "move_stroke_group" : Oe(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: Pe(m.item) || Oe(m.item) ? h.mode === "frame" ? (() => {
          const v = Ae();
          return v ? Jn(o, v, performance.now()) : null;
        })() : _n(o, performance.now()) : null,
        snapshot: Pe(m.item) ? $e(bn(m.item.actionGroupId, m.item.layerKind)) : Oe(m.item) ? $e(tn().find((v) => String((v == null ? void 0 : v.id) || "") === Ie(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Pe(m.item) ? $e(fr(m.item.actionGroupId, m.item.layerKind)) : null
      }, he(o), A.setPointerCapture(i.pointerId);
      return;
    }
    const _ = !!h.selectedId;
    if (_ && (oe(), In()), Ii(), _ && Gt(), Ht(), pt(), h.mode === "pano") {
      const b = ja(i);
      h.interaction = { kind: "view", last: b, lastTs: performance.now() }, Ee.startDrag(b.x, b.y, i.pointerId, performance.now()), he(o), A.setPointerCapture(i.pointerId);
    }
  }, A.onpointermove = (i) => {
    var l, d, m, _, b, v, x, M, k, F, V, Y, H, Z, rt, mt, et, gt, At, Dt;
    const o = Jr(i);
    if (Ua(o, !0), !h.interaction) {
      he(o);
      return;
    }
    he(o);
    const c = h.interaction;
    if (c.kind === "paint_stroke") {
      const yt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let j = !1;
      yt.forEach((X) => {
        const vt = Jr(X);
        Fg(c, vt, performance.now()) && (j = !0);
      }), j && pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "paint_lasso_fill") {
      const yt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let j = !1;
      if (yt.forEach((X) => {
        const vt = Jr(X);
        $g(c, vt, performance.now()) && (j = !0);
      }), j) {
        const X = Zn();
        X && h.paintEngine.updateActiveStroke(c.stroke, X), pt({ localOnly: !0 });
      }
      return;
    }
    if (c.kind === "view") {
      const yt = performance.now(), j = h.mode === "unwrap" ? o : ja(i);
      Ee.moveDrag(j.x, j.y, h.mode === "unwrap" ? "unwrap" : "pano", yt), c.lastTs = yt, c.last = j, pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "pan_frame") {
      h.frameView.panX += o.x - c.last.x, h.frameView.panY += o.y - c.last.y, c.last = o, pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "move") {
      const yt = o.x - c.offset.x, j = o.y - c.offset.y;
      if (h.mode === "frame" && e === "cutout")
        return;
      if (h.mode === "unwrap") {
        const X = hr(), vt = U((yt - X.x) / Math.max(X.w, 1), 0, 1), Lt = U((j - X.y) / Math.max(X.h, 1), 0, 1);
        c.item.yaw_deg = Ye(vt * 360 - 180), c.item.pitch_deg = U(90 - Lt * 180, -90, 90);
      } else {
        const X = xs(yt, j), vt = zf(X);
        c.item.yaw_deg = vt.yaw, c.item.pitch_deg = vt.pitch;
      }
      Le(c.item) && cn(), pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "move_stroke_group") {
      const yt = h.mode === "frame" ? (() => {
        const vt = Ae();
        return vt ? Jn(o, vt, performance.now()) : null;
      })() : _n(o, performance.now());
      if (!yt || !c.startUv) return;
      const j = dn(Number(yt.u || 0), Number(c.startUv.u || 0)), X = Number(yt.v || 0) - Number(c.startUv.v || 0);
      pl((l = c.item) == null ? void 0 : l.actionGroupId, j, X, c.snapshot, (d = c.item) == null ? void 0 : d.layerKind, c.frameSnapshot) && (vn({ rebuildPaintEngine: !1 }), pt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_raster_object") {
      const yt = h.mode === "frame" ? (() => {
        const vt = Ae();
        return vt ? Jn(o, vt, performance.now()) : null;
      })() : _n(o, performance.now());
      if (!yt || !c.startUv) return;
      const j = dn(Number(yt.u || 0), Number(c.startUv.u || 0)), X = Number(yt.v || 0) - Number(c.startUv.v || 0);
      ml(((m = c.item) == null ? void 0 : m.rasterObjectId) || ((_ = c.item) == null ? void 0 : _.id) || "", j, X, c.snapshot) && (Xr(), pt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_raster_object") {
      const j = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      qh(((b = c.item) == null ? void 0 : b.rasterObjectId) || ((v = c.item) == null ? void 0 : v.id) || "", j, c.snapshot) && (Xr(), pt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_multi") {
      const yt = o.x - Number(((x = c.offset) == null ? void 0 : x.x) || 0), j = o.y - Number(((M = c.offset) == null ? void 0 : M.y) || 0);
      let X = !1, vt = !1, Lt = !1;
      const $t = yt - Number(((k = c.startCenter) == null ? void 0 : k.x) || yt), Vt = j - Number(((F = c.startCenter) == null ? void 0 : F.y) || j);
      for (const Rt of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
        const Kt = (e === "cutout" ? gs() : Me()).find((jt) => String((jt == null ? void 0 : jt.id) || "") === String(Rt.id || ""));
        if (!Kt || !Le(Kt)) continue;
        const Bt = {
          x: Number(((V = Rt.center) == null ? void 0 : V.x) || 0) + $t,
          y: Number(((Y = Rt.center) == null ? void 0 : Y.y) || 0) + Vt
        };
        if (!(h.mode === "frame" && e === "cutout")) {
          if (h.mode === "unwrap") {
            const jt = hr(), _e = U((Bt.x - jt.x) / Math.max(jt.w, 1), 0, 1), hn = U((Bt.y - jt.y) / Math.max(jt.h, 1), 0, 1);
            Kt.yaw_deg = Ye(_e * 360 - 180), Kt.pitch_deg = U(90 - hn * 180, -90, 90);
          } else {
            const jt = xs(Bt.x, Bt.y), _e = zf(jt);
            Kt.yaw_deg = _e.yaw, Kt.pitch_deg = _e.pitch;
          }
          X = !0;
        }
      }
      for (const Rt of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
        const Kt = {
          x: Number(((H = Rt.center) == null ? void 0 : H.x) || 0) + $t,
          y: Number(((Z = Rt.center) == null ? void 0 : Z.y) || 0) + Vt
        }, Bt = h.mode === "frame" ? (() => {
          const _e = Ae();
          return _e ? Jn(Kt, _e, performance.now()) : null;
        })() : _n(Kt, performance.now()), jt = Rt.centerUv || null;
        if (Bt && jt) {
          const _e = dn(Number(Bt.u || 0), Number(jt.u || 0)), hn = Number(Bt.v || 0) - Number(jt.v || 0);
          pl(Rt.id, _e, hn, Rt.snapshot, Rt.layerKind, Rt.frameSnapshot) && (X = !0, vt = !0);
        }
      }
      for (const Rt of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
        const Kt = {
          x: Number(((rt = Rt.center) == null ? void 0 : rt.x) || 0) + $t,
          y: Number(((mt = Rt.center) == null ? void 0 : mt.y) || 0) + Vt
        }, Bt = h.mode === "frame" ? (() => {
          const _e = Ae();
          return _e ? Jn(Kt, _e, performance.now()) : null;
        })() : _n(Kt, performance.now()), jt = Rt.centerUv || null;
        if (Bt && jt) {
          const _e = dn(Number(Bt.u || 0), Number(jt.u || 0)), hn = Number(Bt.v || 0) - Number(jt.v || 0);
          ml(Rt.id, _e, hn, Rt.snapshot) && (X = !0, Lt = !0);
        }
      }
      X && (vt ? vn({ rebuildPaintEngine: !1 }) : Lt ? Xr() : cn(), pt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_stroke_group") {
      const j = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      gl((et = c.item) == null ? void 0 : et.actionGroupId, j, 0, c.snapshot, (gt = c.item) == null ? void 0 : gt.layerKind, c.frameSnapshot) && (vn({ rebuildPaintEngine: !1 }), pt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "rotate_stroke_group") {
      let yt = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - Number(c.startAng || 0)) * Or;
      i.shiftKey && (yt = Math.round(yt / 45) * 45), gl((At = c.item) == null ? void 0 : At.actionGroupId, 1, yt, c.snapshot, (Dt = c.item) == null ? void 0 : Dt.layerKind, c.frameSnapshot) && (vn({ rebuildPaintEngine: !1 }), pt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "marquee_select") {
      c.current = o, pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale") {
      const j = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = U(c.startHFOV * j, 1, 179), c.item.vFOV_deg = U(c.startVFOV * j, 1, 179), c.item.aspect_id = Fr(c.item), pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_x") {
      const j = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = U(c.startHFOV * j, 1, 179), c.item.aspect_id = Fr(c.item), pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_y") {
      const j = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.vFOV_deg = U(c.startVFOV * j, 1, 179), c.item.aspect_id = Fr(c.item), pt({ localOnly: !0 });
      return;
    }
    if (c.kind === "rotate") {
      let j = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - c.startAng) * Or, X = c.startRot - j;
      i.shiftKey && (X = Math.round(X / 45) * 45);
      const vt = Le(c.item) ? "rot_deg" : "roll_deg";
      c.item[vt] = X, pt({ localOnly: !0 });
    }
  }, A.onpointerup = () => {
    var o, c, l, d, m, _;
    const i = h.interaction;
    if (((o = h.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = h.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill")
      if (Di(), zg(h.interaction)) {
        vn();
        const b = String(((l = h.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (b) {
          const x = ke().find((M) => String((M == null ? void 0 : M.actionGroupId) || "") === b);
          x && (x.frame = null);
        }
        const v = Zn();
        v && (String(((d = h.interaction.stroke) == null ? void 0 : d.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(v), jl()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, v)), oe(), In(), Gt(), Ht(), t.setDirtyCanvas(!0, !0), pt();
      } else {
        const b = Zn();
        b && h.paintEngine.cancelActiveStroke(b);
      }
    else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const b = lu(h.interaction.start, h.interaction.current), x = [
        ...e === "cutout" ? zl().filter((M) => !0) : [...Me()],
        ...Bh(),
        ...Gh()
      ].filter((M) => jg(b, sn(M)));
      Jh(x, ((_ = x[x.length - 1]) == null ? void 0 : _.id) || null), e === "cutout" && x.length && (h.cutoutAspectOpen = !1), Gt(), Ht(), pt();
    } else if (h.interaction && h.interaction.kind !== "view" && h.interaction.kind !== "pan_frame") {
      let b = !1;
      (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (b = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (b = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (b = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (b = !0), b && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? vn({ rebuildPaintEngine: !0 }) : Xr()), oe(), In(), t.setDirtyCanvas(!0, !0), Ts(), h.hqFrames = 1, Ht(), pt();
    }
    h.interaction = null, Di(), i && i.kind === "view" && Ee.endDrag(performance.now()), Da(), Ht(), he(h.pointerPos), pt();
  }, A.onpointercancel = () => {
    var i, o, c;
    if (((i = h.interaction) == null ? void 0 : i.kind) === "view" && Ee.endDrag(performance.now()), ((o = h.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = h.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
      Di();
      const l = Zn();
      l && h.paintEngine.cancelActiveStroke(l);
    }
    h.interaction = null, Di(), Da(), he(h.pointerPos), pt({ localOnly: !0 });
  }, A.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, A.onmousemove = (i) => {
    const o = Jr(i);
    Ua(o, !0), !h.interaction && he(o);
  }, A.onmouseleave = () => {
    Ua(h.pointerPos, !1), he(h.pointerPos);
  }, A.onwheel = (i) => {
    if (h.mode === "frame") {
      Jr(i), i.deltaY < 0 || 1 / 1.1, Ig() && pt({ localOnly: !0 }), i.preventDefault();
      return;
    }
    h.mode === "pano" && (Ee.applyWheelEvent(i) && pt({ localOnly: !0 }), i.preventDefault());
  }, A.ondragover = (i) => {
    e !== "stickers" && e !== "cutout" || r || (i.preventDefault(), An(!0));
  }, A.ondrop = (i) => {
    var l;
    if (e !== "stickers" && e !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), ye.depth = 0, An(!1);
    const c = Array.from(((l = i.dataTransfer) == null ? void 0 : l.files) || []).find((d) => Ha(d));
    c && Xl(c);
  };
  const uu = (i) => {
    e !== "stickers" && e !== "cutout" || r || Yn(i) && (ye.depth += 1, An(!0), i.preventDefault());
  }, fu = (i) => {
    e !== "stickers" && e !== "cutout" || r || (!ye.active && Yn(i) && An(!0), ye.active && i.preventDefault());
  }, du = (i) => {
    if (e !== "stickers" && e !== "cutout" || r || !ye.active) return;
    ye.depth = Math.max(0, ye.depth - 1);
    const o = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (ye.depth === 0 || o) && An(!1);
  }, hu = (i) => {
    e !== "stickers" && e !== "cutout" || r || (ye.depth = 0, An(!1), Yn(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", uu, !0), window.addEventListener("dragover", fu, !0), window.addEventListener("dragleave", du, !0), window.addEventListener("drop", hu, !0), Pt.forEach((i) => {
    i.onclick = () => {
      i.disabled || (h.mode = i.dataset.view, e === "cutout" && h.mode === "frame" && ue() && ms(ue()), ru(), Da(), pt());
    };
  });
  function Os() {
    const { canUndo: i, canRedo: o } = ql();
    I.querySelectorAll("[data-action='undo'], [data-tool-ui-action='undo']").forEach((c) => {
      c.disabled = !i;
    }), I.querySelectorAll("[data-action='redo'], [data-tool-ui-action='redo']").forEach((c) => {
      c.disabled = !o;
    });
  }
  const Fs = I.querySelector("[data-action='undo']");
  Fs && (Fs.onclick = () => {
    r || Fs.disabled || Li(-1);
  });
  const $s = I.querySelector("[data-action='redo']");
  $s && ($s.onclick = () => {
    r || $s.disabled || Li(1);
  });
  const pu = I.querySelector("[data-action='add']");
  pu && (pu.onclick = () => {
    r || (e === "stickers" || e === "cutout" ? Rs() : void 0);
  });
  const gu = I.querySelector("[data-action='clear']");
  gu && (gu.onclick = () => {
    r || Ql();
  });
  const mu = I.querySelector("[data-action='save']");
  mu && (mu.onclick = () => {
    r || nu();
  }), I.querySelector("[data-action='reset-view']").onclick = () => {
    Re(0, 0, 100, 180, 680);
  };
  const Ar = I.querySelector("[data-action='toggle-grid']"), Vs = () => {
    if (!Ar) return;
    const i = !!h.showGrid;
    Ar.innerHTML = i ? Et.eye : Et.eye_dashed, Ar.setAttribute("aria-pressed", i ? "true" : "false"), Ar.setAttribute("aria-label", i ? "Hide Grid" : "Show Grid"), Ar.setAttribute("data-tip", i ? "Hide grid" : "Show grid");
  };
  if (Ar && (Vs(), Ar.onclick = () => {
    h.showGrid = !h.showGrid, gv(t == null ? void 0 : t.id, h.showGrid), Vs(), pt();
  }), q && (q.querySelectorAll("[data-tool-mode]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const o = String(i.getAttribute("data-tool-mode") || "cursor");
      h.primaryTool = o, (o === "paint" || o === "mask") && Ii({ preservePanelValues: !0 }), ln(), Gt(), Ht(), pt();
    };
  }), q.querySelectorAll("[data-tool-ui-action]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const o = String(i.getAttribute("data-tool-ui-action") || "");
      if (!((o === "undo" || o === "redo") && i.disabled)) {
        if (o === "undo") Li(-1);
        else if (o === "redo") Li(1);
        else if (o === "clear") Ql();
        else if (o === "add") Rs();
        else if (o === "add-image") Rs();
        else if (o === "add-or-look") return;
      }
    };
  })), I.querySelectorAll("[data-paint-tool]").forEach((i) => {
    i.onclick = () => {
      h.primaryTool = "paint";
      const o = String(i.getAttribute("data-paint-tool") || "pen");
      h.paintTool = o, Ii({ preservePanelValues: !0 }), en[o] && (h.activeBrushPresetId = o), ln(), Gt(), Ht(), pt();
    };
  }), I.querySelectorAll("[data-mask-tool]").forEach((i) => {
    i.onclick = () => {
      h.primaryTool = "mask", h.maskTool = String(i.getAttribute("data-mask-tool") || "pen"), Ii({ preservePanelValues: !0 }), ln(), Gt(), Ht(), pt();
    };
  }), $.forEach((i) => {
    i.onclick = () => {
      const o = String(i.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
      Ng(o);
    };
  }), G.forEach((i) => {
    i.oninput = () => {
      if (i.disabled) return;
      const o = Math.max(1, Math.min(120, Math.round(Number(i.value)))), c = mr(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[c] = o;
      const l = (o - 1) / 119 * 100;
      G.forEach((d) => {
        d.value = String(o), d.style.setProperty("--v", `${U(l, 0, 100)}%`);
      }), K.forEach((d) => {
        d.textContent = String(o);
      }), Rg();
    }, i.onchange = () => Ba(), i.addEventListener("pointerup", Ba), i.addEventListener("pointercancel", Ba), i.addEventListener("blur", Ba);
  }), Ct) {
    Ct.querySelectorAll("[data-paint-color-swatch]").forEach((o) => {
      o.onclick = () => {
        const c = Ao.find((l) => l.id === o.getAttribute("data-paint-color-swatch"));
        c && (h.paintColor = un(c.color), tt(!0), ln());
      };
    });
    const i = Ct.querySelector("[data-paint-color-custom]");
    i && (i.onclick = (o) => {
      o.preventDefault(), o.stopPropagation(), Nt && !Nt.hidden ? tt(!0) : xt(), ln();
    });
  }
  const Bg = (i, o) => {
    var b;
    if (!Se) return;
    const c = Se.getBoundingClientRect(), l = U((i - c.left) / Math.max(1, c.width), 0, 1), d = 1 - U((o - c.top) / Math.max(1, c.height), 0, 1), m = Yi(h.customPaintColor), _ = { ...uc(m.h, l, d), a: Number(((b = h.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    h.customPaintColor = un(_), h.paintColor = un(_), ln();
  }, Gg = (i) => {
    var m;
    if (!Ne) return;
    const o = Ne.getBoundingClientRect(), c = U((i - o.left) / Math.max(1, o.width), 0, 1), l = Yi(h.customPaintColor), d = { ...uc(c, l.s, l.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = un(d), h.paintColor = un(d), ln();
  }, yu = (i, o) => {
    const c = i.pointerId;
    o(i);
    const l = (m) => {
      m.pointerId === c && o(m);
    }, d = (m) => {
      m.pointerId === c && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", d), window.addEventListener("pointercancel", d);
  };
  Se && (Se.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), yu(i, (o) => Bg(o.clientX, o.clientY));
  }), Ne && (Ne.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), yu(i, (o) => Gg(o.clientX));
  }), Ce && (Ce.oninput = () => {
    const i = { ...h.customPaintColor, a: U(Number(Ce.value) / 100, 0, 1) };
    h.customPaintColor = un(i), h.paintColor = un(i), ln();
  });
  const bu = () => {
    if (!ot) return;
    const i = !!h.fullscreen;
    ot.innerHTML = i ? Et.fullscreen_close : Et.fullscreen, ot.setAttribute("aria-label", i ? "Exit Fullscreen" : "Fullscreen"), ot.setAttribute("data-tip", i ? "Exit fullscreen" : "Fullscreen");
  }, Ka = (i) => {
    const o = !!i;
    h.fullscreen !== o && (h.fullscreen = o, I.classList.toggle("pano-modal-fullscreen", o), o ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), Vs(), bu(), pt());
  }, vu = () => document.fullscreenElement === E, Kg = async () => {
    var i, o;
    try {
      if (!document.fullscreenEnabled) {
        Ka(!h.fullscreen);
        return;
      }
      vu() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((i = E.requestFullscreen) == null ? void 0 : i.call(E));
    } catch {
      Ka(!h.fullscreen);
    }
  }, _u = () => {
    document.fullscreenEnabled && Ka(vu());
  };
  document.addEventListener("fullscreenchange", _u), ot && (bu(), ot.onclick = (i) => {
    i.preventDefault(), i.stopPropagation(), Kg();
  });
  const wu = () => {
    if (!_t) return;
    const i = !!h.outputPreviewExpanded;
    _t.innerHTML = i ? Et.fullscreen_close : Et.fullscreen, _t.setAttribute("aria-label", i ? "Reduce Preview" : "Expand Preview"), _t.setAttribute("data-tip", i ? "Reduce preview" : "Expand preview");
  };
  _t && (wu(), _t.onclick = (i) => {
    i.preventDefault(), i.stopPropagation();
    const o = !h.outputPreviewExpanded;
    h.outputPreviewExpanded = o, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = o ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), wu(), pt();
  }), it.addEventListener("click", (i) => {
    const o = i.target.closest("[data-action]");
    if (!o) return;
    const c = o.getAttribute("data-action");
    if (!r) {
      if (c === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, Ht(), pt();
        return;
      }
      if (c === "aspect-set") {
        const l = ue();
        if (!l) return;
        const d = String(o.getAttribute("data-aspect") || "1:1");
        kg(l, d), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Ts(), oe(), be(), Ht(), pt();
        return;
      }
      if (c === "rotate-90") {
        const l = ue();
        if (!l) return;
        Pg(l), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Ts(), oe(), be(), Ht(), pt();
        return;
      }
      if (c === "bring-front") {
        Ag();
        return;
      }
      if (c === "send-back") {
        Cg();
        return;
      }
      if (c === "duplicate") {
        Mg();
        return;
      }
      if (c === "replace-image") {
        _g();
        return;
      }
      if (c === "toggle-lock") {
        Zh();
        return;
      }
      if (c === "back-initial") {
        ap();
        return;
      }
      if (c === "toggle-visible") {
        ip();
        return;
      }
      if (c === "delete") {
        tu();
        return;
      }
      pt();
    }
  });
  const zs = t.onExecuted, Hs = t.onConnectionsChange;
  let js = null, Us = null, Bs = null;
  !r && e === "stickers" && (Bs = (i = "sync") => {
    Nl(i);
  }, t.__panoExternalStickerSync = Bs, js = function(...o) {
    var c;
    typeof zs == "function" && zs.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "executed");
  }, t.onExecuted = js, Us = function(...o) {
    var c;
    typeof Hs == "function" && Hs.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "connections");
  }, t.onConnectionsChange = Us), r || (Dc.set(String(t.id ?? "0"), () => ks()), kp() && ks());
  const ti = () => {
    var i, o, c, l, d, m, _, b, v;
    Dc.delete(String(t.id ?? "0")), r || ks(), document.fullscreenElement === E && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", _u), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (c = (o = t.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || c.call(o), (d = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || d.call(l, !0, !0), (b = (_ = (m = gn) == null ? void 0 : m.canvas) == null ? void 0 : _.setDirty) == null || b.call(_, !0, !0), Ga(), bg(), (v = dt == null ? void 0 : dt.dispose) == null || v.call(dt), An(!1), window.removeEventListener("keydown", xu, !0), window.removeEventListener("keydown", Su, !0), window.removeEventListener("keydown", Wa, !0), window.removeEventListener("keyup", Wa, !0), window.removeEventListener("keydown", Nu, !0), window.removeEventListener("dragenter", uu, !0), window.removeEventListener("dragover", fu, !0), window.removeEventListener("dragleave", du, !0), window.removeEventListener("drop", hu, !0), !r && e === "stickers" && (t.onExecuted === js && (t.onExecuted = zs), t.onConnectionsChange === Us && (t.onConnectionsChange = Hs), t.__panoExternalStickerSync === Bs && (t.__panoExternalStickerSync = null)), P.unmount(), N.remove();
  }, xu = (i) => {
    var o, c, l, d;
    if (i.key === "Escape") {
      if (h.fullscreen && document.fullscreenElement === E) {
        i.preventDefault(), i.stopPropagation(), (o = i.stopImmediatePropagation) == null || o.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), Ka(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (d = i.stopImmediatePropagation) == null || d.call(i), ti();
    }
  }, Su = (i) => {
    const o = String(i.key || ""), c = String(i.code || ""), l = Number(i.keyCode || 0);
    if (!(o === "Delete" || c === "Delete" || l === 46) && !(o === "Backspace" || c === "Backspace" || l === 8)) return;
    const _ = i.target, b = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || _ != null && _.isContentEditable || !ue() || (tu(), i.preventDefault(), i.stopPropagation());
  }, Wa = (i) => {
    const o = !!(i.ctrlKey || i.metaKey);
    h.marqueeModifier !== o && (h.marqueeModifier = o, he(h.pointerPos));
  }, Nu = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const o = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (o !== "z" && c !== "KeyZ") return;
    const l = i.target, d = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (d === "INPUT" || d === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: m, canRedo: _ } = ql();
    i.shiftKey && !_ || !i.shiftKey && !m || (Li(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", xu, !0), window.addEventListener("keydown", Su, !0), window.addEventListener("keydown", Wa, !0), window.addEventListener("keyup", Wa, !0), window.addEventListener("keydown", Nu, !0), E.addEventListener("pointerdown", (i) => {
    i.target === E && ti();
  }), Fi(I), !r && e === "stickers" && Nl("open"), wg(), oe(), Os(), ln(), ut && requestAnimationFrame(() => {
    ut.classList.add("is-ready");
  }), Gt(), Ea(), Wl(), he(h.pointerPos), pt(), Mt.rafId = requestAnimationFrame(Ds);
}
function Wf(t, e, n, r) {
  if (!(t != null && t.prototype)) return;
  const a = (y) => {
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
  function s(y) {
    var E;
    const w = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === w) return;
    a(y), n === "PanoramaStickers" && xv(y), ul(y), Nv(y, qo);
    const N = pn(y, qo);
    if (N && !N.__panoPreviewPatchedCb) {
      N.__panoPreviewPatchedCb = !0;
      const I = N.callback;
      N.callback = (A) => {
        var R;
        const O = I ? I(A) : void 0;
        return (R = y.setDirtyCanvas) == null || R.call(y, !0, !1), O;
      };
    }
    const P = pn(y, "bg_color");
    if (P && (P.value == null || String(P.value).trim() === "" || String(P.value).toLowerCase() === "#000000") && (P.value = "#00ff00", (E = P.callback) == null || E.call(P, "#00ff00")), n === "PanoramaStickers") {
      Rc(y, r, () => ha(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = w;
        return;
      }
    }
    Rc(y, r, () => ha(y, "cutout")), mb(y, {
      buttonText: r,
      onOpen: () => ha(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = w;
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
function Ov(t) {
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
function Fv(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const r = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), a = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = a, !r && a < 40) {
      requestAnimationFrame(e);
      return;
    }
    ul(t), Rc(t, "Open Preview", () => ha(t, "stickers", { readOnly: !0, hideSidebar: !1 })), gb(t, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (s) => ha(s, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), t.__panoStandaloneInstallDone = !0, t.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(e);
}
gn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  async beforeQueuePrompt() {
    const t = [...Dc.values()].map((r) => {
      try {
        return typeof r == "function" ? r() : null;
      } catch {
        return null;
      }
    }).filter(Boolean);
    t.length > 0 && await Promise.allSettled(t);
    const e = [...Qi.values()];
    e.length > 0 && await Promise.allSettled(e);
    const n = [...ta.values()];
    n.length > 0 && await Promise.allSettled(n);
  },
  beforeRegisterNodeDef(t, e) {
    const n = String((e == null ? void 0 : e.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && Wf(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && Wf(t, e, "PanoramaCutout", "Open Cutout Editor"), Mc(n) && Ov(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    ul(t), Mc(e) && Fv(t);
  }
});
