import * as Fa from "../../scripts/app.js";
import { app as dn } from "../../scripts/app.js";
import { api as Ge } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ec(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const Qt = {}, Br = [], Tn = () => {
}, ef = () => !1, bo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), _o = (t) => t.startsWith("onUpdate:"), Oe = Object.assign, nc = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Zp = Object.prototype.hasOwnProperty, Wt = (t, e) => Zp.call(t, e), Ot = Array.isArray, Gr = (t) => Ki(t) === "[object Map]", nf = (t) => Ki(t) === "[object Set]", Ll = (t) => Ki(t) === "[object Date]", Ft = (t) => typeof t == "function", pe = (t) => typeof t == "string", Ln = (t) => typeof t == "symbol", Zt = (t) => t !== null && typeof t == "object", rf = (t) => (Zt(t) || Ft(t)) && Ft(t.then) && Ft(t.catch), af = Object.prototype.toString, Ki = (t) => af.call(t), Jp = (t) => Ki(t).slice(8, -1), of = (t) => Ki(t) === "[object Object]", rc = (t) => pe(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ni = /* @__PURE__ */ ec(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), xo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, Qp = /-\w/g, Ke = xo(
  (t) => t.replace(Qp, (e) => e.slice(1).toUpperCase())
), tg = /\B([A-Z])/g, Nr = xo(
  (t) => t.replace(tg, "-$1").toLowerCase()
), wo = xo((t) => t.charAt(0).toUpperCase() + t.slice(1)), ls = xo(
  (t) => t ? `on${wo(t)}` : ""
), In = (t, e) => !Object.is(t, e), us = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, sf = (t, e, n, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, eg = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Ol;
const So = () => Ol || (Ol = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function je(t) {
  if (Ot(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], a = pe(r) ? ag(r) : je(r);
      if (a)
        for (const s in a)
          e[s] = a[s];
    }
    return e;
  } else if (pe(t) || Zt(t))
    return t;
}
const ng = /;(?![^(]*\))/g, rg = /:([^]+)/, ig = /\/\*[^]*?\*\//g;
function ag(t) {
  const e = {};
  return t.replace(ig, "").split(ng).forEach((n) => {
    if (n) {
      const r = n.split(rg);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function ge(t) {
  let e = "";
  if (pe(t))
    e = t;
  else if (Ot(t))
    for (let n = 0; n < t.length; n++) {
      const r = ge(t[n]);
      r && (e += r + " ");
    }
  else if (Zt(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const og = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", sg = /* @__PURE__ */ ec(og);
function cf(t) {
  return !!t || t === "";
}
function cg(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = ic(t[r], e[r]);
  return n;
}
function ic(t, e) {
  if (t === e) return !0;
  let n = Ll(t), r = Ll(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Ln(t), r = Ln(e), n || r)
    return t === e;
  if (n = Ot(t), r = Ot(e), n || r)
    return n && r ? cg(t, e) : !1;
  if (n = Zt(t), r = Zt(e), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(t).length, s = Object.keys(e).length;
    if (a !== s)
      return !1;
    for (const l in t) {
      const f = t.hasOwnProperty(l), h = e.hasOwnProperty(l);
      if (f && !h || !f && h || !ic(t[l], e[l]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const lf = (t) => !!(t && t.__v_isRef === !0), _e = (t) => pe(t) ? t : t == null ? "" : Ot(t) || Zt(t) && (t.toString === af || !Ft(t.toString)) ? lf(t) ? _e(t.value) : JSON.stringify(t, uf, 2) : String(t), uf = (t, e) => lf(e) ? uf(t, e.value) : Gr(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, a], s) => (n[fs(r, s) + " =>"] = a, n),
    {}
  )
} : nf(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => fs(n))
} : Ln(e) ? fs(e) : Zt(e) && !Ot(e) && !of(e) ? String(e) : e, fs = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ln(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let tn;
class lg {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = tn, !e && tn && (this.index = (tn.scopes || (tn.scopes = [])).push(
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
      const n = tn;
      try {
        return tn = this, e();
      } finally {
        tn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = tn, tn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (tn = this.prevScope, this.prevScope = void 0);
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
function ug() {
  return tn;
}
let re;
const ds = /* @__PURE__ */ new WeakSet();
class ff {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, tn && tn.active && tn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ds.has(this) && (ds.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || hf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Rl(this), pf(this);
    const e = re, n = bn;
    re = this, bn = !0;
    try {
      return this.fn();
    } finally {
      gf(this), re = e, bn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        sc(e);
      this.deps = this.depsTail = void 0, Rl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ds.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ds(this) && this.run();
  }
  get dirty() {
    return Ds(this);
  }
}
let df = 0, Pi, Ci;
function hf(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Ci, Ci = t;
    return;
  }
  t.next = Pi, Pi = t;
}
function ac() {
  df++;
}
function oc() {
  if (--df > 0)
    return;
  if (Ci) {
    let e = Ci;
    for (Ci = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; Pi; ) {
    let e = Pi;
    for (Pi = void 0; e; ) {
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
function pf(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function gf(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), sc(r), fg(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  t.deps = e, t.depsTail = n;
}
function Ds(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (mf(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function mf(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Hi) || (t.globalVersion = Hi, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Ds(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = re, r = bn;
  re = t, bn = !0;
  try {
    pf(t);
    const a = t.fn(t._value);
    (e.version === 0 || In(a, t._value)) && (t.flags |= 128, t._value = a, e.version++);
  } catch (a) {
    throw e.version++, a;
  } finally {
    re = n, bn = r, gf(t), t.flags &= -3;
  }
}
function sc(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: a } = t;
  if (r && (r.nextSub = a, t.prevSub = void 0), a && (a.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      sc(s, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function fg(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let bn = !0;
const yf = [];
function Wn() {
  yf.push(bn), bn = !1;
}
function Yn() {
  const t = yf.pop();
  bn = t === void 0 ? !0 : t;
}
function Rl(t) {
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
let Hi = 0;
class dg {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class cc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!re || !bn || re === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== re)
      n = this.activeLink = new dg(re, this), re.deps ? (n.prevDep = re.depsTail, re.depsTail.nextDep = n, re.depsTail = n) : re.deps = re.depsTail = n, vf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = re.depsTail, n.nextDep = void 0, re.depsTail.nextDep = n, re.depsTail = n, re.deps === n && (re.deps = r);
    }
    return n;
  }
  trigger(e) {
    this.version++, Hi++, this.notify(e);
  }
  notify(e) {
    ac();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      oc();
    }
  }
}
function vf(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        vf(r);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
  }
}
const Ts = /* @__PURE__ */ new WeakMap(), br = /* @__PURE__ */ Symbol(
  ""
), Ls = /* @__PURE__ */ Symbol(
  ""
), zi = /* @__PURE__ */ Symbol(
  ""
);
function De(t, e, n) {
  if (bn && re) {
    let r = Ts.get(t);
    r || Ts.set(t, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new cc()), a.map = r, a.key = n), a.track();
  }
}
function Gn(t, e, n, r, a, s) {
  const l = Ts.get(t);
  if (!l) {
    Hi++;
    return;
  }
  const f = (h) => {
    h && h.trigger();
  };
  if (ac(), e === "clear")
    l.forEach(f);
  else {
    const h = Ot(t), y = h && rc(n);
    if (h && n === "length") {
      const b = Number(r);
      l.forEach((p, w) => {
        (w === "length" || w === zi || !Ln(w) && w >= b) && f(p);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && f(l.get(n)), y && f(l.get(zi)), e) {
        case "add":
          h ? y && f(l.get("length")) : (f(l.get(br)), Gr(t) && f(l.get(Ls)));
          break;
        case "delete":
          h || (f(l.get(br)), Gr(t) && f(l.get(Ls)));
          break;
        case "set":
          Gr(t) && f(l.get(br));
          break;
      }
  }
  oc();
}
function Lr(t) {
  const e = /* @__PURE__ */ Kt(t);
  return e === t ? e : (De(e, "iterate", zi), /* @__PURE__ */ hn(t) ? e : e.map(_n));
}
function Mo(t) {
  return De(t = /* @__PURE__ */ Kt(t), "iterate", zi), t;
}
function Cn(t, e) {
  return /* @__PURE__ */ qn(t) ? Zr(/* @__PURE__ */ _r(t) ? _n(e) : e) : _n(e);
}
const hg = {
  __proto__: null,
  [Symbol.iterator]() {
    return hs(this, Symbol.iterator, (t) => Cn(this, t));
  },
  concat(...t) {
    return Lr(this).concat(
      ...t.map((e) => Ot(e) ? Lr(e) : e)
    );
  },
  entries() {
    return hs(this, "entries", (t) => (t[1] = Cn(this, t[1]), t));
  },
  every(t, e) {
    return zn(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return zn(
      this,
      "filter",
      t,
      e,
      (n) => n.map((r) => Cn(this, r)),
      arguments
    );
  },
  find(t, e) {
    return zn(
      this,
      "find",
      t,
      e,
      (n) => Cn(this, n),
      arguments
    );
  },
  findIndex(t, e) {
    return zn(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return zn(
      this,
      "findLast",
      t,
      e,
      (n) => Cn(this, n),
      arguments
    );
  },
  findLastIndex(t, e) {
    return zn(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return zn(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return ps(this, "includes", t);
  },
  indexOf(...t) {
    return ps(this, "indexOf", t);
  },
  join(t) {
    return Lr(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return ps(this, "lastIndexOf", t);
  },
  map(t, e) {
    return zn(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return di(this, "pop");
  },
  push(...t) {
    return di(this, "push", t);
  },
  reduce(t, ...e) {
    return Fl(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Fl(this, "reduceRight", t, e);
  },
  shift() {
    return di(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return zn(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return di(this, "splice", t);
  },
  toReversed() {
    return Lr(this).toReversed();
  },
  toSorted(t) {
    return Lr(this).toSorted(t);
  },
  toSpliced(...t) {
    return Lr(this).toSpliced(...t);
  },
  unshift(...t) {
    return di(this, "unshift", t);
  },
  values() {
    return hs(this, "values", (t) => Cn(this, t));
  }
};
function hs(t, e, n) {
  const r = Mo(t), a = r[e]();
  return r !== t && !/* @__PURE__ */ hn(t) && (a._next = a.next, a.next = () => {
    const s = a._next();
    return s.done || (s.value = n(s.value)), s;
  }), a;
}
const pg = Array.prototype;
function zn(t, e, n, r, a, s) {
  const l = Mo(t), f = l !== t && !/* @__PURE__ */ hn(t), h = l[e];
  if (h !== pg[e]) {
    const p = h.apply(t, s);
    return f ? _n(p) : p;
  }
  let y = n;
  l !== t && (f ? y = function(p, w) {
    return n.call(this, Cn(t, p), w, t);
  } : n.length > 2 && (y = function(p, w) {
    return n.call(this, p, w, t);
  }));
  const b = h.call(l, y, r);
  return f && a ? a(b) : b;
}
function Fl(t, e, n, r) {
  const a = Mo(t), s = a !== t && !/* @__PURE__ */ hn(t);
  let l = n, f = !1;
  a !== t && (s ? (f = r.length === 0, l = function(y, b, p) {
    return f && (f = !1, y = Cn(t, y)), n.call(this, y, Cn(t, b), p, t);
  }) : n.length > 3 && (l = function(y, b, p) {
    return n.call(this, y, b, p, t);
  }));
  const h = a[e](l, ...r);
  return f ? Cn(t, h) : h;
}
function ps(t, e, n) {
  const r = /* @__PURE__ */ Kt(t);
  De(r, "iterate", zi);
  const a = r[e](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ fc(n[0]) ? (n[0] = /* @__PURE__ */ Kt(n[0]), r[e](...n)) : a;
}
function di(t, e, n = []) {
  Wn(), ac();
  const r = (/* @__PURE__ */ Kt(t))[e].apply(t, n);
  return oc(), Yn(), r;
}
const gg = /* @__PURE__ */ ec("__proto__,__v_isRef,__isVue"), bf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Ln)
);
function mg(t) {
  Ln(t) || (t = String(t));
  const e = /* @__PURE__ */ Kt(this);
  return De(e, "has", t), e.hasOwnProperty(t);
}
class _f {
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
      return r === (a ? s ? Ng : Mf : s ? Sf : wf).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const l = Ot(e);
    if (!a) {
      let h;
      if (l && (h = hg[n]))
        return h;
      if (n === "hasOwnProperty")
        return mg;
    }
    const f = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Le(e) ? e : r
    );
    if ((Ln(n) ? bf.has(n) : gg(n)) || (a || De(e, "get", n), s))
      return f;
    if (/* @__PURE__ */ Le(f)) {
      const h = l && rc(n) ? f : f.value;
      return a && Zt(h) ? /* @__PURE__ */ Rs(h) : h;
    }
    return Zt(f) ? a ? /* @__PURE__ */ Rs(f) : /* @__PURE__ */ ko(f) : f;
  }
}
class xf extends _f {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, a) {
    let s = e[n];
    const l = Ot(e) && rc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ qn(s);
      if (!/* @__PURE__ */ hn(r) && !/* @__PURE__ */ qn(r) && (s = /* @__PURE__ */ Kt(s), r = /* @__PURE__ */ Kt(r)), !l && /* @__PURE__ */ Le(s) && !/* @__PURE__ */ Le(r))
        return y || (s.value = r), !0;
    }
    const f = l ? Number(n) < e.length : Wt(e, n), h = Reflect.set(
      e,
      n,
      r,
      /* @__PURE__ */ Le(e) ? e : a
    );
    return e === /* @__PURE__ */ Kt(a) && (f ? In(r, s) && Gn(e, "set", n, r) : Gn(e, "add", n, r)), h;
  }
  deleteProperty(e, n) {
    const r = Wt(e, n);
    e[n];
    const a = Reflect.deleteProperty(e, n);
    return a && r && Gn(e, "delete", n, void 0), a;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Ln(n) || !bf.has(n)) && De(e, "has", n), r;
  }
  ownKeys(e) {
    return De(
      e,
      "iterate",
      Ot(e) ? "length" : br
    ), Reflect.ownKeys(e);
  }
}
class yg extends _f {
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
const vg = /* @__PURE__ */ new xf(), bg = /* @__PURE__ */ new yg(), _g = /* @__PURE__ */ new xf(!0);
const Os = (t) => t, va = (t) => Reflect.getPrototypeOf(t);
function xg(t, e, n) {
  return function(...r) {
    const a = this.__v_raw, s = /* @__PURE__ */ Kt(a), l = Gr(s), f = t === "entries" || t === Symbol.iterator && l, h = t === "keys" && l, y = a[t](...r), b = n ? Os : e ? Zr : _n;
    return !e && De(
      s,
      "iterate",
      h ? Ls : br
    ), Oe(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: p, done: w } = y.next();
          return w ? { value: p, done: w } : {
            value: f ? [b(p[0]), b(p[1])] : b(p),
            done: w
          };
        }
      }
    );
  };
}
function ba(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function wg(t, e) {
  const n = {
    get(a) {
      const s = this.__v_raw, l = /* @__PURE__ */ Kt(s), f = /* @__PURE__ */ Kt(a);
      t || (In(a, f) && De(l, "get", a), De(l, "get", f));
      const { has: h } = va(l), y = e ? Os : t ? Zr : _n;
      if (h.call(l, a))
        return y(s.get(a));
      if (h.call(l, f))
        return y(s.get(f));
      s !== l && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !t && De(/* @__PURE__ */ Kt(a), "iterate", br), a.size;
    },
    has(a) {
      const s = this.__v_raw, l = /* @__PURE__ */ Kt(s), f = /* @__PURE__ */ Kt(a);
      return t || (In(a, f) && De(l, "has", a), De(l, "has", f)), a === f ? s.has(a) : s.has(a) || s.has(f);
    },
    forEach(a, s) {
      const l = this, f = l.__v_raw, h = /* @__PURE__ */ Kt(f), y = e ? Os : t ? Zr : _n;
      return !t && De(h, "iterate", br), f.forEach((b, p) => a.call(s, y(b), y(p), l));
    }
  };
  return Oe(
    n,
    t ? {
      add: ba("add"),
      set: ba("set"),
      delete: ba("delete"),
      clear: ba("clear")
    } : {
      add(a) {
        const s = /* @__PURE__ */ Kt(this), l = va(s), f = /* @__PURE__ */ Kt(a), h = !e && !/* @__PURE__ */ hn(a) && !/* @__PURE__ */ qn(a) ? f : a;
        return l.has.call(s, h) || In(a, h) && l.has.call(s, a) || In(f, h) && l.has.call(s, f) || (s.add(h), Gn(s, "add", h, h)), this;
      },
      set(a, s) {
        !e && !/* @__PURE__ */ hn(s) && !/* @__PURE__ */ qn(s) && (s = /* @__PURE__ */ Kt(s));
        const l = /* @__PURE__ */ Kt(this), { has: f, get: h } = va(l);
        let y = f.call(l, a);
        y || (a = /* @__PURE__ */ Kt(a), y = f.call(l, a));
        const b = h.call(l, a);
        return l.set(a, s), y ? In(s, b) && Gn(l, "set", a, s) : Gn(l, "add", a, s), this;
      },
      delete(a) {
        const s = /* @__PURE__ */ Kt(this), { has: l, get: f } = va(s);
        let h = l.call(s, a);
        h || (a = /* @__PURE__ */ Kt(a), h = l.call(s, a)), f && f.call(s, a);
        const y = s.delete(a);
        return h && Gn(s, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ Kt(this), s = a.size !== 0, l = a.clear();
        return s && Gn(
          a,
          "clear",
          void 0,
          void 0
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    n[a] = xg(a, t, e);
  }), n;
}
function lc(t, e) {
  const n = wg(t, e);
  return (r, a, s) => a === "__v_isReactive" ? !t : a === "__v_isReadonly" ? t : a === "__v_raw" ? r : Reflect.get(
    Wt(n, a) && a in r ? n : r,
    a,
    s
  );
}
const Sg = {
  get: /* @__PURE__ */ lc(!1, !1)
}, Mg = {
  get: /* @__PURE__ */ lc(!1, !0)
}, kg = {
  get: /* @__PURE__ */ lc(!0, !1)
};
const wf = /* @__PURE__ */ new WeakMap(), Sf = /* @__PURE__ */ new WeakMap(), Mf = /* @__PURE__ */ new WeakMap(), Ng = /* @__PURE__ */ new WeakMap();
function Pg(t) {
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
function Cg(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Pg(Jp(t));
}
// @__NO_SIDE_EFFECTS__
function ko(t) {
  return /* @__PURE__ */ qn(t) ? t : uc(
    t,
    !1,
    vg,
    Sg,
    wf
  );
}
// @__NO_SIDE_EFFECTS__
function Ag(t) {
  return uc(
    t,
    !1,
    _g,
    Mg,
    Sf
  );
}
// @__NO_SIDE_EFFECTS__
function Rs(t) {
  return uc(
    t,
    !0,
    bg,
    kg,
    Mf
  );
}
function uc(t, e, n, r, a) {
  if (!Zt(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = Cg(t);
  if (s === 0)
    return t;
  const l = a.get(t);
  if (l)
    return l;
  const f = new Proxy(
    t,
    s === 2 ? r : n
  );
  return a.set(t, f), f;
}
// @__NO_SIDE_EFFECTS__
function _r(t) {
  return /* @__PURE__ */ qn(t) ? /* @__PURE__ */ _r(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function qn(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function hn(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function fc(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Kt(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ Kt(e) : t;
}
function Ig(t) {
  return !Wt(t, "__v_skip") && Object.isExtensible(t) && sf(t, "__v_skip", !0), t;
}
const _n = (t) => Zt(t) ? /* @__PURE__ */ ko(t) : t, Zr = (t) => Zt(t) ? /* @__PURE__ */ Rs(t) : t;
// @__NO_SIDE_EFFECTS__
function Le(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Eg(t) {
  return Dg(t, !1);
}
function Dg(t, e) {
  return /* @__PURE__ */ Le(t) ? t : new Tg(t, e);
}
class Tg {
  constructor(e, n) {
    this.dep = new cc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ Kt(e), this._value = n ? e : _n(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ hn(e) || /* @__PURE__ */ qn(e);
    e = r ? e : /* @__PURE__ */ Kt(e), In(e, n) && (this._rawValue = e, this._value = r ? e : _n(e), this.dep.trigger());
  }
}
function vr(t) {
  return /* @__PURE__ */ Le(t) ? t.value : t;
}
const Lg = {
  get: (t, e, n) => e === "__v_raw" ? t : vr(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const a = t[e];
    return /* @__PURE__ */ Le(a) && !/* @__PURE__ */ Le(n) ? (a.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function kf(t) {
  return /* @__PURE__ */ _r(t) ? t : new Proxy(t, Lg);
}
class Og {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new cc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Hi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    re !== this)
      return hf(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return mf(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function Rg(t, e, n = !1) {
  let r, a;
  return Ft(t) ? r = t : (r = t.get, a = t.set), new Og(r, a, n);
}
const _a = {}, Xa = /* @__PURE__ */ new WeakMap();
let hr;
function Fg(t, e = !1, n = hr) {
  if (n) {
    let r = Xa.get(n);
    r || Xa.set(n, r = []), r.push(t);
  }
}
function Vg(t, e, n = Qt) {
  const { immediate: r, deep: a, once: s, scheduler: l, augmentJob: f, call: h } = n, y = (D) => a ? D : /* @__PURE__ */ hn(D) || a === !1 || a === 0 ? Kn(D, 1) : Kn(D);
  let b, p, w, M, E = !1, L = !1;
  if (/* @__PURE__ */ Le(t) ? (p = () => t.value, E = /* @__PURE__ */ hn(t)) : /* @__PURE__ */ _r(t) ? (p = () => y(t), E = !0) : Ot(t) ? (L = !0, E = t.some((D) => /* @__PURE__ */ _r(D) || /* @__PURE__ */ hn(D)), p = () => t.map((D) => {
    if (/* @__PURE__ */ Le(D))
      return D.value;
    if (/* @__PURE__ */ _r(D))
      return y(D);
    if (Ft(D))
      return h ? h(D, 2) : D();
  })) : Ft(t) ? e ? p = h ? () => h(t, 2) : t : p = () => {
    if (w) {
      Wn();
      try {
        w();
      } finally {
        Yn();
      }
    }
    const D = hr;
    hr = b;
    try {
      return h ? h(t, 3, [M]) : t(M);
    } finally {
      hr = D;
    }
  } : p = Tn, e && a) {
    const D = p, $ = a === !0 ? 1 / 0 : a;
    p = () => Kn(D(), $);
  }
  const R = ug(), O = () => {
    b.stop(), R && R.active && nc(R.effects, b);
  };
  if (s && e) {
    const D = e;
    e = (...$) => {
      D(...$), O();
    };
  }
  let C = L ? new Array(t.length).fill(_a) : _a;
  const A = (D) => {
    if (!(!(b.flags & 1) || !b.dirty && !D))
      if (e) {
        const $ = b.run();
        if (a || E || (L ? $.some((ot, dt) => In(ot, C[dt])) : In($, C))) {
          w && w();
          const ot = hr;
          hr = b;
          try {
            const dt = [
              $,
              // pass undefined as the old value when it's changed for the first time
              C === _a ? void 0 : L && C[0] === _a ? [] : C,
              M
            ];
            C = $, h ? h(e, 3, dt) : (
              // @ts-expect-error
              e(...dt)
            );
          } finally {
            hr = ot;
          }
        }
      } else
        b.run();
  };
  return f && f(A), b = new ff(p), b.scheduler = l ? () => l(A, !1) : A, M = (D) => Fg(D, !1, b), w = b.onStop = () => {
    const D = Xa.get(b);
    if (D) {
      if (h)
        h(D, 4);
      else
        for (const $ of D) $();
      Xa.delete(b);
    }
  }, e ? r ? A(!0) : C = b.run() : l ? l(A.bind(null, !0), !0) : b.run(), O.pause = b.pause.bind(b), O.resume = b.resume.bind(b), O.stop = O, O;
}
function Kn(t, e = 1 / 0, n) {
  if (e <= 0 || !Zt(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ Le(t))
    Kn(t.value, e, n);
  else if (Ot(t))
    for (let r = 0; r < t.length; r++)
      Kn(t[r], e, n);
  else if (nf(t) || Gr(t))
    t.forEach((r) => {
      Kn(r, e, n);
    });
  else if (of(t)) {
    for (const r in t)
      Kn(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && Kn(t[r], e, n);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Wi(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (a) {
    No(a, e, n);
  }
}
function On(t, e, n, r) {
  if (Ft(t)) {
    const a = Wi(t, e, n, r);
    return a && rf(a) && a.catch((s) => {
      No(s, e, n);
    }), a;
  }
  if (Ot(t)) {
    const a = [];
    for (let s = 0; s < t.length; s++)
      a.push(On(t[s], e, n, r));
    return a;
  }
}
function No(t, e, n, r = !0) {
  const a = e ? e.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: l } = e && e.appContext.config || Qt;
  if (e) {
    let f = e.parent;
    const h = e.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const b = f.ec;
      if (b) {
        for (let p = 0; p < b.length; p++)
          if (b[p](t, h, y) === !1)
            return;
      }
      f = f.parent;
    }
    if (s) {
      Wn(), Wi(s, null, 10, [
        t,
        h,
        y
      ]), Yn();
      return;
    }
  }
  Hg(t, n, a, r, l);
}
function Hg(t, e, n, r = !0, a = !1) {
  if (a)
    throw t;
  console.error(t);
}
const Ue = [];
let Nn = -1;
const Kr = [];
let ir = null, Hr = 0;
const Nf = /* @__PURE__ */ Promise.resolve();
let Za = null;
function Pf(t) {
  const e = Za || Nf;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function zg(t) {
  let e = Nn + 1, n = Ue.length;
  for (; e < n; ) {
    const r = e + n >>> 1, a = Ue[r], s = $i(a);
    s < t || s === t && a.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function dc(t) {
  if (!(t.flags & 1)) {
    const e = $i(t), n = Ue[Ue.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= $i(n) ? Ue.push(t) : Ue.splice(zg(e), 0, t), t.flags |= 1, Cf();
  }
}
function Cf() {
  Za || (Za = Nf.then(If));
}
function $g(t) {
  Ot(t) ? Kr.push(...t) : ir && t.id === -1 ? ir.splice(Hr + 1, 0, t) : t.flags & 1 || (Kr.push(t), t.flags |= 1), Cf();
}
function Vl(t, e, n = Nn + 1) {
  for (; n < Ue.length; n++) {
    const r = Ue[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid)
        continue;
      Ue.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Af(t) {
  if (Kr.length) {
    const e = [...new Set(Kr)].sort(
      (n, r) => $i(n) - $i(r)
    );
    if (Kr.length = 0, ir) {
      ir.push(...e);
      return;
    }
    for (ir = e, Hr = 0; Hr < ir.length; Hr++) {
      const n = ir[Hr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ir = null, Hr = 0;
  }
}
const $i = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function If(t) {
  try {
    for (Nn = 0; Nn < Ue.length; Nn++) {
      const e = Ue[Nn];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Wi(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Nn < Ue.length; Nn++) {
      const e = Ue[Nn];
      e && (e.flags &= -2);
    }
    Nn = -1, Ue.length = 0, Af(), Za = null, (Ue.length || Kr.length) && If();
  }
}
let on = null, Ef = null;
function Ja(t) {
  const e = on;
  return on = t, Ef = t && t.type.__scopeId || null, e;
}
function jg(t, e = on, n) {
  if (!e || t._n)
    return t;
  const r = (...a) => {
    r._d && Xl(-1);
    const s = Ja(e);
    let l;
    try {
      l = t(...a);
    } finally {
      Ja(s), r._d && Xl(1);
    }
    return l;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Df(t, e) {
  if (on === null)
    return t;
  const n = Io(on), r = t.dirs || (t.dirs = []);
  for (let a = 0; a < e.length; a++) {
    let [s, l, f, h = Qt] = e[a];
    s && (Ft(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Kn(l), r.push({
      dir: s,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: f,
      modifiers: h
    }));
  }
  return t;
}
function lr(t, e, n, r) {
  const a = t.dirs, s = e && e.dirs;
  for (let l = 0; l < a.length; l++) {
    const f = a[l];
    s && (f.oldValue = s[l].value);
    let h = f.dir[r];
    h && (Wn(), On(h, n, 8, [
      t.el,
      f,
      t,
      e
    ]), Yn());
  }
}
function Ug(t, e) {
  if (Te) {
    let n = Te.provides;
    const r = Te.parent && Te.parent.provides;
    r === n && (n = Te.provides = Object.create(r)), n[t] = e;
  }
}
function Va(t, e, n = !1) {
  const r = U0();
  if (r || Wr) {
    let a = Wr ? Wr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && t in a)
      return a[t];
    if (arguments.length > 1)
      return n && Ft(e) ? e.call(r && r.proxy) : e;
  }
}
const Bg = /* @__PURE__ */ Symbol.for("v-scx"), Gg = () => Va(Bg);
function Ha(t, e, n) {
  return Tf(t, e, n);
}
function Tf(t, e, n = Qt) {
  const { immediate: r, deep: a, flush: s, once: l } = n, f = Oe({}, n), h = e && r || !e && s !== "post";
  let y;
  if (Ui) {
    if (s === "sync") {
      const M = Gg();
      y = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!h) {
      const M = () => {
      };
      return M.stop = Tn, M.resume = Tn, M.pause = Tn, M;
    }
  }
  const b = Te;
  f.call = (M, E, L) => On(M, b, E, L);
  let p = !1;
  s === "post" ? f.scheduler = (M) => {
    Je(M, b && b.suspense);
  } : s !== "sync" && (p = !0, f.scheduler = (M, E) => {
    E ? M() : dc(M);
  }), f.augmentJob = (M) => {
    e && (M.flags |= 4), p && (M.flags |= 2, b && (M.id = b.uid, M.i = b));
  };
  const w = Vg(t, e, f);
  return Ui && (y ? y.push(w) : h && w()), w;
}
function Kg(t, e, n) {
  const r = this.proxy, a = pe(t) ? t.includes(".") ? Lf(r, t) : () => r[t] : t.bind(r, r);
  let s;
  Ft(e) ? s = e : (s = e.handler, n = e);
  const l = Yi(this), f = Tf(a, s.bind(r), n);
  return l(), f;
}
function Lf(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const Wg = /* @__PURE__ */ Symbol("_vte"), Yg = (t) => t.__isTeleport, qg = /* @__PURE__ */ Symbol("_leaveCb");
function hc(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, hc(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Of(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Hl(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const Qa = /* @__PURE__ */ new WeakMap();
function Ai(t, e, n, r, a = !1) {
  if (Ot(t)) {
    t.forEach(
      (L, R) => Ai(
        L,
        e && (Ot(e) ? e[R] : e),
        n,
        r,
        a
      )
    );
    return;
  }
  if (Ii(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ai(t, e, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Io(r.component) : r.el, l = a ? null : s, { i: f, r: h } = t, y = e && e.r, b = f.refs === Qt ? f.refs = {} : f.refs, p = f.setupState, w = /* @__PURE__ */ Kt(p), M = p === Qt ? ef : (L) => Hl(b, L) ? !1 : Wt(w, L), E = (L, R) => !(R && Hl(b, R));
  if (y != null && y !== h) {
    if (zl(e), pe(y))
      b[y] = null, M(y) && (p[y] = null);
    else if (/* @__PURE__ */ Le(y)) {
      const L = e;
      E(y, L.k) && (y.value = null), L.k && (b[L.k] = null);
    }
  }
  if (Ft(h))
    Wi(h, f, 12, [l, b]);
  else {
    const L = pe(h), R = /* @__PURE__ */ Le(h);
    if (L || R) {
      const O = () => {
        if (t.f) {
          const C = L ? M(h) ? p[h] : b[h] : E() || !t.k ? h.value : b[t.k];
          if (a)
            Ot(C) && nc(C, s);
          else if (Ot(C))
            C.includes(s) || C.push(s);
          else if (L)
            b[h] = [s], M(h) && (p[h] = b[h]);
          else {
            const A = [s];
            E(h, t.k) && (h.value = A), t.k && (b[t.k] = A);
          }
        } else L ? (b[h] = l, M(h) && (p[h] = l)) : R && (E(h, t.k) && (h.value = l), t.k && (b[t.k] = l));
      };
      if (l) {
        const C = () => {
          O(), Qa.delete(t);
        };
        C.id = -1, Qa.set(t, C), Je(C, n);
      } else
        zl(t), O();
    }
  }
}
function zl(t) {
  const e = Qa.get(t);
  e && (e.flags |= 8, Qa.delete(t));
}
So().requestIdleCallback;
So().cancelIdleCallback;
const Ii = (t) => !!t.type.__asyncLoader, Rf = (t) => t.type.__isKeepAlive;
function Xg(t, e) {
  Ff(t, "a", e);
}
function Zg(t, e) {
  Ff(t, "da", e);
}
function Ff(t, e, n = Te) {
  const r = t.__wdc || (t.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return t();
  });
  if (Po(e, r, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Rf(a.parent.vnode) && Jg(r, e, n, a), a = a.parent;
  }
}
function Jg(t, e, n, r) {
  const a = Po(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  zf(() => {
    nc(r[e], a);
  }, n);
}
function Po(t, e, n = Te, r = !1) {
  if (n) {
    const a = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...l) => {
      Wn();
      const f = Yi(n), h = On(e, n, t, l);
      return f(), Yn(), h;
    });
    return r ? a.unshift(s) : a.push(s), s;
  }
}
const Xn = (t) => (e, n = Te) => {
  (!Ui || t === "sp") && Po(t, (...r) => e(...r), n);
}, Qg = Xn("bm"), Vf = Xn("m"), t0 = Xn(
  "bu"
), e0 = Xn("u"), Hf = Xn(
  "bum"
), zf = Xn("um"), n0 = Xn(
  "sp"
), r0 = Xn("rtg"), i0 = Xn("rtc");
function a0(t, e = Te) {
  Po("ec", t, e);
}
const o0 = "components", $f = /* @__PURE__ */ Symbol.for("v-ndc");
function s0(t) {
  return pe(t) ? c0(o0, t, !1) || t : t || $f;
}
function c0(t, e, n = !0, r = !1) {
  const a = on || Te;
  if (a) {
    const s = a.type;
    {
      const f = Y0(
        s,
        !1
      );
      if (f && (f === e || f === Ke(e) || f === wo(Ke(e))))
        return s;
    }
    const l = (
      // local registration
      // check instance[type] first which is resolved for options API
      $l(a[t] || s[t], e) || // global registration
      $l(a.appContext[t], e)
    );
    return !l && r ? s : l;
  }
}
function $l(t, e) {
  return t && (t[e] || t[Ke(e)] || t[wo(Ke(e))]);
}
function Be(t, e, n, r) {
  let a;
  const s = n, l = Ot(t);
  if (l || pe(t)) {
    const f = l && /* @__PURE__ */ _r(t);
    let h = !1, y = !1;
    f && (h = !/* @__PURE__ */ hn(t), y = /* @__PURE__ */ qn(t), t = Mo(t)), a = new Array(t.length);
    for (let b = 0, p = t.length; b < p; b++)
      a[b] = e(
        h ? y ? Zr(_n(t[b])) : _n(t[b]) : t[b],
        b,
        void 0,
        s
      );
  } else if (typeof t == "number") {
    a = new Array(t);
    for (let f = 0; f < t; f++)
      a[f] = e(f + 1, f, void 0, s);
  } else if (Zt(t))
    if (t[Symbol.iterator])
      a = Array.from(
        t,
        (f, h) => e(f, h, void 0, s)
      );
    else {
      const f = Object.keys(t);
      a = new Array(f.length);
      for (let h = 0, y = f.length; h < y; h++) {
        const b = f[h];
        a[h] = e(t[b], b, h, s);
      }
    }
  else
    a = [];
  return a;
}
const Fs = (t) => t ? ld(t) ? Io(t) : Fs(t.parent) : null, Ei = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Oe(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => Fs(t.parent),
    $root: (t) => Fs(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Uf(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      dc(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Pf.bind(t.proxy)),
    $watch: (t) => Kg.bind(t)
  })
), gs = (t, e) => t !== Qt && !t.__isScriptSetup && Wt(t, e), l0 = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: a, props: s, accessCache: l, type: f, appContext: h } = t;
    if (e[0] !== "$") {
      const w = l[e];
      if (w !== void 0)
        switch (w) {
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
        if (gs(r, e))
          return l[e] = 1, r[e];
        if (a !== Qt && Wt(a, e))
          return l[e] = 2, a[e];
        if (Wt(s, e))
          return l[e] = 3, s[e];
        if (n !== Qt && Wt(n, e))
          return l[e] = 4, n[e];
        Vs && (l[e] = 0);
      }
    }
    const y = Ei[e];
    let b, p;
    if (y)
      return e === "$attrs" && De(t.attrs, "get", ""), y(t);
    if (
      // css module (injected by vue-loader)
      (b = f.__cssModules) && (b = b[e])
    )
      return b;
    if (n !== Qt && Wt(n, e))
      return l[e] = 4, n[e];
    if (
      // global properties
      p = h.config.globalProperties, Wt(p, e)
    )
      return p[e];
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: a, ctx: s } = t;
    return gs(a, e) ? (a[e] = n, !0) : r !== Qt && Wt(r, e) ? (r[e] = n, !0) : Wt(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: a, props: s, type: l }
  }, f) {
    let h;
    return !!(n[f] || t !== Qt && f[0] !== "$" && Wt(t, f) || gs(e, f) || Wt(s, f) || Wt(r, f) || Wt(Ei, f) || Wt(a.config.globalProperties, f) || (h = l.__cssModules) && h[f]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : Wt(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function jl(t) {
  return Ot(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Vs = !0;
function u0(t) {
  const e = Uf(t), n = t.proxy, r = t.ctx;
  Vs = !1, e.beforeCreate && Ul(e.beforeCreate, t, "bc");
  const {
    // state
    data: a,
    computed: s,
    methods: l,
    watch: f,
    provide: h,
    inject: y,
    // lifecycle
    created: b,
    beforeMount: p,
    mounted: w,
    beforeUpdate: M,
    updated: E,
    activated: L,
    deactivated: R,
    beforeDestroy: O,
    beforeUnmount: C,
    destroyed: A,
    unmounted: D,
    render: $,
    renderTracked: ot,
    renderTriggered: dt,
    errorCaptured: T,
    serverPrefetch: wt,
    // public API
    expose: V,
    inheritAttrs: lt,
    // assets
    components: xt,
    directives: Mt,
    filters: at
  } = e;
  if (y && f0(y, r, null), l)
    for (const pt in l) {
      const Y = l[pt];
      Ft(Y) && (r[pt] = Y.bind(n));
    }
  if (a) {
    const pt = a.call(n, n);
    Zt(pt) && (t.data = /* @__PURE__ */ ko(pt));
  }
  if (Vs = !0, s)
    for (const pt in s) {
      const Y = s[pt], ut = Ft(Y) ? Y.bind(n, n) : Ft(Y.get) ? Y.get.bind(n, n) : Tn, St = !Ft(Y) && Ft(Y.set) ? Y.set.bind(n) : Tn, Lt = Yr({
        get: ut,
        set: St
      });
      Object.defineProperty(r, pt, {
        enumerable: !0,
        configurable: !0,
        get: () => Lt.value,
        set: (Dt) => Lt.value = Dt
      });
    }
  if (f)
    for (const pt in f)
      jf(f[pt], r, n, pt);
  if (h) {
    const pt = Ft(h) ? h.call(n) : h;
    Reflect.ownKeys(pt).forEach((Y) => {
      Ug(Y, pt[Y]);
    });
  }
  b && Ul(b, t, "c");
  function st(pt, Y) {
    Ot(Y) ? Y.forEach((ut) => pt(ut.bind(n))) : Y && pt(Y.bind(n));
  }
  if (st(Qg, p), st(Vf, w), st(t0, M), st(e0, E), st(Xg, L), st(Zg, R), st(a0, T), st(i0, ot), st(r0, dt), st(Hf, C), st(zf, D), st(n0, wt), Ot(V))
    if (V.length) {
      const pt = t.exposed || (t.exposed = {});
      V.forEach((Y) => {
        Object.defineProperty(pt, Y, {
          get: () => n[Y],
          set: (ut) => n[Y] = ut,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  $ && t.render === Tn && (t.render = $), lt != null && (t.inheritAttrs = lt), xt && (t.components = xt), Mt && (t.directives = Mt), wt && Of(t);
}
function f0(t, e, n = Tn) {
  Ot(t) && (t = Hs(t));
  for (const r in t) {
    const a = t[r];
    let s;
    Zt(a) ? "default" in a ? s = Va(
      a.from || r,
      a.default,
      !0
    ) : s = Va(a.from || r) : s = Va(a), /* @__PURE__ */ Le(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (l) => s.value = l
    }) : e[r] = s;
  }
}
function Ul(t, e, n) {
  On(
    Ot(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function jf(t, e, n, r) {
  let a = r.includes(".") ? Lf(n, r) : () => n[r];
  if (pe(t)) {
    const s = e[t];
    Ft(s) && Ha(a, s);
  } else if (Ft(t))
    Ha(a, t.bind(n));
  else if (Zt(t))
    if (Ot(t))
      t.forEach((s) => jf(s, e, n, r));
    else {
      const s = Ft(t.handler) ? t.handler.bind(n) : e[t.handler];
      Ft(s) && Ha(a, s, t);
    }
}
function Uf(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: a,
    optionsCache: s,
    config: { optionMergeStrategies: l }
  } = t.appContext, f = s.get(e);
  let h;
  return f ? h = f : !a.length && !n && !r ? h = e : (h = {}, a.length && a.forEach(
    (y) => to(h, y, l, !0)
  ), to(h, e, l)), Zt(e) && s.set(e, h), h;
}
function to(t, e, n, r = !1) {
  const { mixins: a, extends: s } = e;
  s && to(t, s, n, !0), a && a.forEach(
    (l) => to(t, l, n, !0)
  );
  for (const l in e)
    if (!(r && l === "expose")) {
      const f = d0[l] || n && n[l];
      t[l] = f ? f(t[l], e[l]) : e[l];
    }
  return t;
}
const d0 = {
  data: Bl,
  props: Gl,
  emits: Gl,
  // objects
  methods: xi,
  computed: xi,
  // lifecycle
  beforeCreate: ze,
  created: ze,
  beforeMount: ze,
  mounted: ze,
  beforeUpdate: ze,
  updated: ze,
  beforeDestroy: ze,
  beforeUnmount: ze,
  destroyed: ze,
  unmounted: ze,
  activated: ze,
  deactivated: ze,
  errorCaptured: ze,
  serverPrefetch: ze,
  // assets
  components: xi,
  directives: xi,
  // watch
  watch: p0,
  // provide / inject
  provide: Bl,
  inject: h0
};
function Bl(t, e) {
  return e ? t ? function() {
    return Oe(
      Ft(t) ? t.call(this, this) : t,
      Ft(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function h0(t, e) {
  return xi(Hs(t), Hs(e));
}
function Hs(t) {
  if (Ot(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function ze(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function xi(t, e) {
  return t ? Oe(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Gl(t, e) {
  return t ? Ot(t) && Ot(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Oe(
    /* @__PURE__ */ Object.create(null),
    jl(t),
    jl(e ?? {})
  ) : e;
}
function p0(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Oe(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = ze(t[r], e[r]);
  return n;
}
function Bf() {
  return {
    app: null,
    config: {
      isNativeTag: ef,
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
let g0 = 0;
function m0(t, e) {
  return function(r, a = null) {
    Ft(r) || (r = Oe({}, r)), a != null && !Zt(a) && (a = null);
    const s = Bf(), l = /* @__PURE__ */ new WeakSet(), f = [];
    let h = !1;
    const y = s.app = {
      _uid: g0++,
      _component: r,
      _props: a,
      _container: null,
      _context: s,
      _instance: null,
      version: X0,
      get config() {
        return s.config;
      },
      set config(b) {
      },
      use(b, ...p) {
        return l.has(b) || (b && Ft(b.install) ? (l.add(b), b.install(y, ...p)) : Ft(b) && (l.add(b), b(y, ...p))), y;
      },
      mixin(b) {
        return s.mixins.includes(b) || s.mixins.push(b), y;
      },
      component(b, p) {
        return p ? (s.components[b] = p, y) : s.components[b];
      },
      directive(b, p) {
        return p ? (s.directives[b] = p, y) : s.directives[b];
      },
      mount(b, p, w) {
        if (!h) {
          const M = y._ceVNode || xe(r, a);
          return M.appContext = s, w === !0 ? w = "svg" : w === !1 && (w = void 0), t(M, b, w), h = !0, y._container = b, b.__vue_app__ = y, Io(M.component);
        }
      },
      onUnmount(b) {
        f.push(b);
      },
      unmount() {
        h && (On(
          f,
          y._instance,
          16
        ), t(null, y._container), delete y._container.__vue_app__);
      },
      provide(b, p) {
        return s.provides[b] = p, y;
      },
      runWithContext(b) {
        const p = Wr;
        Wr = y;
        try {
          return b();
        } finally {
          Wr = p;
        }
      }
    };
    return y;
  };
}
let Wr = null;
const y0 = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${Ke(e)}Modifiers`] || t[`${Nr(e)}Modifiers`];
function v0(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || Qt;
  let a = n;
  const s = e.startsWith("update:"), l = s && y0(r, e.slice(7));
  l && (l.trim && (a = n.map((b) => pe(b) ? b.trim() : b)), l.number && (a = n.map(eg)));
  let f, h = r[f = ls(e)] || // also try camelCase event handler (#2249)
  r[f = ls(Ke(e))];
  !h && s && (h = r[f = ls(Nr(e))]), h && On(
    h,
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
    t.emitted[f] = !0, On(
      y,
      t,
      6,
      a
    );
  }
}
const b0 = /* @__PURE__ */ new WeakMap();
function Gf(t, e, n = !1) {
  const r = n ? b0 : e.emitsCache, a = r.get(t);
  if (a !== void 0)
    return a;
  const s = t.emits;
  let l = {}, f = !1;
  if (!Ft(t)) {
    const h = (y) => {
      const b = Gf(y, e, !0);
      b && (f = !0, Oe(l, b));
    };
    !n && e.mixins.length && e.mixins.forEach(h), t.extends && h(t.extends), t.mixins && t.mixins.forEach(h);
  }
  return !s && !f ? (Zt(t) && r.set(t, null), null) : (Ot(s) ? s.forEach((h) => l[h] = null) : Oe(l, s), Zt(t) && r.set(t, l), l);
}
function Co(t, e) {
  return !t || !bo(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Wt(t, e[0].toLowerCase() + e.slice(1)) || Wt(t, Nr(e)) || Wt(t, e));
}
function Kl(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: a,
    propsOptions: [s],
    slots: l,
    attrs: f,
    emit: h,
    render: y,
    renderCache: b,
    props: p,
    data: w,
    setupState: M,
    ctx: E,
    inheritAttrs: L
  } = t, R = Ja(t);
  let O, C;
  try {
    if (n.shapeFlag & 4) {
      const D = a || r, $ = D;
      O = An(
        y.call(
          $,
          D,
          b,
          p,
          M,
          w,
          E
        )
      ), C = f;
    } else {
      const D = e;
      O = An(
        D.length > 1 ? D(
          p,
          { attrs: f, slots: l, emit: h }
        ) : D(
          p,
          null
        )
      ), C = e.props ? f : _0(f);
    }
  } catch (D) {
    Di.length = 0, No(D, t, 1), O = xe(ar);
  }
  let A = O;
  if (C && L !== !1) {
    const D = Object.keys(C), { shapeFlag: $ } = A;
    D.length && $ & 7 && (s && D.some(_o) && (C = x0(
      C,
      s
    )), A = Jr(A, C, !1, !0));
  }
  return n.dirs && (A = Jr(A, null, !1, !0), A.dirs = A.dirs ? A.dirs.concat(n.dirs) : n.dirs), n.transition && hc(A, n.transition), O = A, Ja(R), O;
}
const _0 = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || bo(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, x0 = (t, e) => {
  const n = {};
  for (const r in t)
    (!_o(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function w0(t, e, n) {
  const { props: r, children: a, component: s } = t, { props: l, children: f, patchFlag: h } = e, y = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && h >= 0) {
    if (h & 1024)
      return !0;
    if (h & 16)
      return r ? Wl(r, l, y) : !!l;
    if (h & 8) {
      const b = e.dynamicProps;
      for (let p = 0; p < b.length; p++) {
        const w = b[p];
        if (Kf(l, r, w) && !Co(y, w))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === l ? !1 : r ? l ? Wl(r, l, y) : !0 : !!l;
  return !1;
}
function Wl(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (Kf(e, t, s) && !Co(n, s))
      return !0;
  }
  return !1;
}
function Kf(t, e, n) {
  const r = t[n], a = e[n];
  return n === "style" && Zt(r) && Zt(a) ? !ic(r, a) : r !== a;
}
function S0({ vnode: t, parent: e, suspense: n }, r) {
  for (; e; ) {
    const a = e.subTree;
    if (a.suspense && a.suspense.activeBranch === t && (a.suspense.vnode.el = a.el = r, t = a), a === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = r);
}
const Wf = {}, Yf = () => Object.create(Wf), qf = (t) => Object.getPrototypeOf(t) === Wf;
function M0(t, e, n, r = !1) {
  const a = {}, s = Yf();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Xf(t, e, a, s);
  for (const l in t.propsOptions[0])
    l in a || (a[l] = void 0);
  n ? t.props = r ? a : /* @__PURE__ */ Ag(a) : t.type.props ? t.props = a : t.props = s, t.attrs = s;
}
function k0(t, e, n, r) {
  const {
    props: a,
    attrs: s,
    vnode: { patchFlag: l }
  } = t, f = /* @__PURE__ */ Kt(a), [h] = t.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const b = t.vnode.dynamicProps;
      for (let p = 0; p < b.length; p++) {
        let w = b[p];
        if (Co(t.emitsOptions, w))
          continue;
        const M = e[w];
        if (h)
          if (Wt(s, w))
            M !== s[w] && (s[w] = M, y = !0);
          else {
            const E = Ke(w);
            a[E] = zs(
              h,
              f,
              E,
              M,
              t,
              !1
            );
          }
        else
          M !== s[w] && (s[w] = M, y = !0);
      }
    }
  } else {
    Xf(t, e, a, s) && (y = !0);
    let b;
    for (const p in f)
      (!e || // for camelCase
      !Wt(e, p) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((b = Nr(p)) === p || !Wt(e, b))) && (h ? n && // for camelCase
      (n[p] !== void 0 || // for kebab-case
      n[b] !== void 0) && (a[p] = zs(
        h,
        f,
        p,
        void 0,
        t,
        !0
      )) : delete a[p]);
    if (s !== f)
      for (const p in s)
        (!e || !Wt(e, p)) && (delete s[p], y = !0);
  }
  y && Gn(t.attrs, "set", "");
}
function Xf(t, e, n, r) {
  const [a, s] = t.propsOptions;
  let l = !1, f;
  if (e)
    for (let h in e) {
      if (Ni(h))
        continue;
      const y = e[h];
      let b;
      a && Wt(a, b = Ke(h)) ? !s || !s.includes(b) ? n[b] = y : (f || (f = {}))[b] = y : Co(t.emitsOptions, h) || (!(h in r) || y !== r[h]) && (r[h] = y, l = !0);
    }
  if (s) {
    const h = /* @__PURE__ */ Kt(n), y = f || Qt;
    for (let b = 0; b < s.length; b++) {
      const p = s[b];
      n[p] = zs(
        a,
        h,
        p,
        y[p],
        t,
        !Wt(y, p)
      );
    }
  }
  return l;
}
function zs(t, e, n, r, a, s) {
  const l = t[n];
  if (l != null) {
    const f = Wt(l, "default");
    if (f && r === void 0) {
      const h = l.default;
      if (l.type !== Function && !l.skipFactory && Ft(h)) {
        const { propsDefaults: y } = a;
        if (n in y)
          r = y[n];
        else {
          const b = Yi(a);
          r = y[n] = h.call(
            null,
            e
          ), b();
        }
      } else
        r = h;
      a.ce && a.ce._setProp(n, r);
    }
    l[
      0
      /* shouldCast */
    ] && (s && !f ? r = !1 : l[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Nr(n)) && (r = !0));
  }
  return r;
}
const N0 = /* @__PURE__ */ new WeakMap();
function Zf(t, e, n = !1) {
  const r = n ? N0 : e.propsCache, a = r.get(t);
  if (a)
    return a;
  const s = t.props, l = {}, f = [];
  let h = !1;
  if (!Ft(t)) {
    const b = (p) => {
      h = !0;
      const [w, M] = Zf(p, e, !0);
      Oe(l, w), M && f.push(...M);
    };
    !n && e.mixins.length && e.mixins.forEach(b), t.extends && b(t.extends), t.mixins && t.mixins.forEach(b);
  }
  if (!s && !h)
    return Zt(t) && r.set(t, Br), Br;
  if (Ot(s))
    for (let b = 0; b < s.length; b++) {
      const p = Ke(s[b]);
      Yl(p) && (l[p] = Qt);
    }
  else if (s)
    for (const b in s) {
      const p = Ke(b);
      if (Yl(p)) {
        const w = s[b], M = l[p] = Ot(w) || Ft(w) ? { type: w } : Oe({}, w), E = M.type;
        let L = !1, R = !0;
        if (Ot(E))
          for (let O = 0; O < E.length; ++O) {
            const C = E[O], A = Ft(C) && C.name;
            if (A === "Boolean") {
              L = !0;
              break;
            } else A === "String" && (R = !1);
          }
        else
          L = Ft(E) && E.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = L, M[
          1
          /* shouldCastTrue */
        ] = R, (L || Wt(M, "default")) && f.push(p);
      }
    }
  const y = [l, f];
  return Zt(t) && r.set(t, y), y;
}
function Yl(t) {
  return t[0] !== "$" && !Ni(t);
}
const pc = (t) => t === "_" || t === "_ctx" || t === "$stable", gc = (t) => Ot(t) ? t.map(An) : [An(t)], P0 = (t, e, n) => {
  if (e._n)
    return e;
  const r = jg((...a) => gc(e(...a)), n);
  return r._c = !1, r;
}, Jf = (t, e, n) => {
  const r = t._ctx;
  for (const a in t) {
    if (pc(a)) continue;
    const s = t[a];
    if (Ft(s))
      e[a] = P0(a, s, r);
    else if (s != null) {
      const l = gc(s);
      e[a] = () => l;
    }
  }
}, Qf = (t, e) => {
  const n = gc(e);
  t.slots.default = () => n;
}, td = (t, e, n) => {
  for (const r in e)
    (n || !pc(r)) && (t[r] = e[r]);
}, C0 = (t, e, n) => {
  const r = t.slots = Yf();
  if (t.vnode.shapeFlag & 32) {
    const a = e._;
    a ? (td(r, e, n), n && sf(r, "_", a, !0)) : Jf(e, r);
  } else e && Qf(t, e);
}, A0 = (t, e, n) => {
  const { vnode: r, slots: a } = t;
  let s = !0, l = Qt;
  if (r.shapeFlag & 32) {
    const f = e._;
    f ? n && f === 1 ? s = !1 : td(a, e, n) : (s = !e.$stable, Jf(e, a)), l = e;
  } else e && (Qf(t, e), l = { default: 1 });
  if (s)
    for (const f in a)
      !pc(f) && l[f] == null && delete a[f];
}, Je = L0;
function I0(t) {
  return E0(t);
}
function E0(t, e) {
  const n = So();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: s,
    createElement: l,
    createText: f,
    createComment: h,
    setText: y,
    setElementText: b,
    parentNode: p,
    nextSibling: w,
    setScopeId: M = Tn,
    insertStaticContent: E
  } = t, L = (S, I, F, K = null, B = null, G = null, J = void 0, tt = null, it = !!I.dynamicChildren) => {
    if (S === I)
      return;
    S && !hi(S, I) && (K = le(S), Dt(S, B, G, !0), S = null), I.patchFlag === -2 && (it = !1, I.dynamicChildren = null);
    const { type: Q, ref: _t, shapeFlag: ft } = I;
    switch (Q) {
      case Ao:
        R(S, I, F, K);
        break;
      case ar:
        O(S, I, F, K);
        break;
      case za:
        S == null && C(I, F, K, J);
        break;
      case te:
        xt(
          S,
          I,
          F,
          K,
          B,
          G,
          J,
          tt,
          it
        );
        break;
      default:
        ft & 1 ? $(
          S,
          I,
          F,
          K,
          B,
          G,
          J,
          tt,
          it
        ) : ft & 6 ? Mt(
          S,
          I,
          F,
          K,
          B,
          G,
          J,
          tt,
          it
        ) : (ft & 64 || ft & 128) && Q.process(
          S,
          I,
          F,
          K,
          B,
          G,
          J,
          tt,
          it,
          Pe
        );
    }
    _t != null && B ? Ai(_t, S && S.ref, G, I || S, !I) : _t == null && S && S.ref != null && Ai(S.ref, null, G, S, !0);
  }, R = (S, I, F, K) => {
    if (S == null)
      r(
        I.el = f(I.children),
        F,
        K
      );
    else {
      const B = I.el = S.el;
      I.children !== S.children && y(B, I.children);
    }
  }, O = (S, I, F, K) => {
    S == null ? r(
      I.el = h(I.children || ""),
      F,
      K
    ) : I.el = S.el;
  }, C = (S, I, F, K) => {
    [S.el, S.anchor] = E(
      S.children,
      I,
      F,
      K,
      S.el,
      S.anchor
    );
  }, A = ({ el: S, anchor: I }, F, K) => {
    let B;
    for (; S && S !== I; )
      B = w(S), r(S, F, K), S = B;
    r(I, F, K);
  }, D = ({ el: S, anchor: I }) => {
    let F;
    for (; S && S !== I; )
      F = w(S), a(S), S = F;
    a(I);
  }, $ = (S, I, F, K, B, G, J, tt, it) => {
    if (I.type === "svg" ? J = "svg" : I.type === "math" && (J = "mathml"), S == null)
      ot(
        I,
        F,
        K,
        B,
        G,
        J,
        tt,
        it
      );
    else {
      const Q = S.el && S.el._isVueCE ? S.el : null;
      try {
        Q && Q._beginPatch(), wt(
          S,
          I,
          B,
          G,
          J,
          tt,
          it
        );
      } finally {
        Q && Q._endPatch();
      }
    }
  }, ot = (S, I, F, K, B, G, J, tt) => {
    let it, Q;
    const { props: _t, shapeFlag: ft, transition: ht, dirs: Pt } = S;
    if (it = S.el = l(
      S.type,
      G,
      _t && _t.is,
      _t
    ), ft & 8 ? b(it, S.children) : ft & 16 && T(
      S.children,
      it,
      null,
      K,
      B,
      ms(S, G),
      J,
      tt
    ), Pt && lr(S, null, K, "created"), dt(it, S, S.scopeId, J, K), _t) {
      for (const jt in _t)
        jt !== "value" && !Ni(jt) && s(it, jt, null, _t[jt], G, K);
      "value" in _t && s(it, "value", null, _t.value, G), (Q = _t.onVnodeBeforeMount) && wn(Q, K, S);
    }
    Pt && lr(S, null, K, "beforeMount");
    const mt = D0(B, ht);
    mt && ht.beforeEnter(it), r(it, I, F), ((Q = _t && _t.onVnodeMounted) || mt || Pt) && Je(() => {
      try {
        Q && wn(Q, K, S), mt && ht.enter(it), Pt && lr(S, null, K, "mounted");
      } finally {
      }
    }, B);
  }, dt = (S, I, F, K, B) => {
    if (F && M(S, F), K)
      for (let G = 0; G < K.length; G++)
        M(S, K[G]);
    if (B) {
      let G = B.subTree;
      if (I === G || id(G.type) && (G.ssContent === I || G.ssFallback === I)) {
        const J = B.vnode;
        dt(
          S,
          J,
          J.scopeId,
          J.slotScopeIds,
          B.parent
        );
      }
    }
  }, T = (S, I, F, K, B, G, J, tt, it = 0) => {
    for (let Q = it; Q < S.length; Q++) {
      const _t = S[Q] = tt ? Bn(S[Q]) : An(S[Q]);
      L(
        null,
        _t,
        I,
        F,
        K,
        B,
        G,
        J,
        tt
      );
    }
  }, wt = (S, I, F, K, B, G, J) => {
    const tt = I.el = S.el;
    let { patchFlag: it, dynamicChildren: Q, dirs: _t } = I;
    it |= S.patchFlag & 16;
    const ft = S.props || Qt, ht = I.props || Qt;
    let Pt;
    if (F && ur(F, !1), (Pt = ht.onVnodeBeforeUpdate) && wn(Pt, F, I, S), _t && lr(I, S, F, "beforeUpdate"), F && ur(F, !0), (ft.innerHTML && ht.innerHTML == null || ft.textContent && ht.textContent == null) && b(tt, ""), Q ? V(
      S.dynamicChildren,
      Q,
      tt,
      F,
      K,
      ms(I, B),
      G
    ) : J || Y(
      S,
      I,
      tt,
      null,
      F,
      K,
      ms(I, B),
      G,
      !1
    ), it > 0) {
      if (it & 16)
        lt(tt, ft, ht, F, B);
      else if (it & 2 && ft.class !== ht.class && s(tt, "class", null, ht.class, B), it & 4 && s(tt, "style", ft.style, ht.style, B), it & 8) {
        const mt = I.dynamicProps;
        for (let jt = 0; jt < mt.length; jt++) {
          const Tt = mt[jt], de = ft[Tt], me = ht[Tt];
          (me !== de || Tt === "value") && s(tt, Tt, de, me, B, F);
        }
      }
      it & 1 && S.children !== I.children && b(tt, I.children);
    } else !J && Q == null && lt(tt, ft, ht, F, B);
    ((Pt = ht.onVnodeUpdated) || _t) && Je(() => {
      Pt && wn(Pt, F, I, S), _t && lr(I, S, F, "updated");
    }, K);
  }, V = (S, I, F, K, B, G, J) => {
    for (let tt = 0; tt < I.length; tt++) {
      const it = S[tt], Q = I[tt], _t = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        it.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (it.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !hi(it, Q) || // - In the case of a component, it could contain anything.
        it.shapeFlag & 198) ? p(it.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      L(
        it,
        Q,
        _t,
        null,
        K,
        B,
        G,
        J,
        !0
      );
    }
  }, lt = (S, I, F, K, B) => {
    if (I !== F) {
      if (I !== Qt)
        for (const G in I)
          !Ni(G) && !(G in F) && s(
            S,
            G,
            I[G],
            null,
            B,
            K
          );
      for (const G in F) {
        if (Ni(G)) continue;
        const J = F[G], tt = I[G];
        J !== tt && G !== "value" && s(S, G, tt, J, B, K);
      }
      "value" in F && s(S, "value", I.value, F.value, B);
    }
  }, xt = (S, I, F, K, B, G, J, tt, it) => {
    const Q = I.el = S ? S.el : f(""), _t = I.anchor = S ? S.anchor : f("");
    let { patchFlag: ft, dynamicChildren: ht, slotScopeIds: Pt } = I;
    Pt && (tt = tt ? tt.concat(Pt) : Pt), S == null ? (r(Q, F, K), r(_t, F, K), T(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      I.children || [],
      F,
      _t,
      B,
      G,
      J,
      tt,
      it
    )) : ft > 0 && ft & 64 && ht && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    S.dynamicChildren && S.dynamicChildren.length === ht.length ? (V(
      S.dynamicChildren,
      ht,
      F,
      B,
      G,
      J,
      tt
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (I.key != null || B && I === B.subTree) && ed(
      S,
      I,
      !0
      /* shallow */
    )) : Y(
      S,
      I,
      F,
      _t,
      B,
      G,
      J,
      tt,
      it
    );
  }, Mt = (S, I, F, K, B, G, J, tt, it) => {
    I.slotScopeIds = tt, S == null ? I.shapeFlag & 512 ? B.ctx.activate(
      I,
      F,
      K,
      J,
      it
    ) : at(
      I,
      F,
      K,
      B,
      G,
      J,
      it
    ) : Z(S, I, it);
  }, at = (S, I, F, K, B, G, J) => {
    const tt = S.component = j0(
      S,
      K,
      B
    );
    if (Rf(S) && (tt.ctx.renderer = Pe), B0(tt, !1, J), tt.asyncDep) {
      if (B && B.registerDep(tt, st, J), !S.el) {
        const it = tt.subTree = xe(ar);
        O(null, it, I, F), S.placeholder = it.el;
      }
    } else
      st(
        tt,
        S,
        I,
        F,
        B,
        G,
        J
      );
  }, Z = (S, I, F) => {
    const K = I.component = S.component;
    if (w0(S, I, F))
      if (K.asyncDep && !K.asyncResolved) {
        pt(K, I, F);
        return;
      } else
        K.next = I, K.update();
    else
      I.el = S.el, K.vnode = I;
  }, st = (S, I, F, K, B, G, J) => {
    const tt = () => {
      if (S.isMounted) {
        let { next: ft, bu: ht, u: Pt, parent: mt, vnode: jt } = S;
        {
          const we = nd(S);
          if (we) {
            ft && (ft.el = jt.el, pt(S, ft, J)), we.asyncDep.then(() => {
              Je(() => {
                S.isUnmounted || Q();
              }, B);
            });
            return;
          }
        }
        let Tt = ft, de;
        ur(S, !1), ft ? (ft.el = jt.el, pt(S, ft, J)) : ft = jt, ht && us(ht), (de = ft.props && ft.props.onVnodeBeforeUpdate) && wn(de, mt, ft, jt), ur(S, !0);
        const me = Kl(S), ye = S.subTree;
        S.subTree = me, L(
          ye,
          me,
          // parent may have changed if it's in a teleport
          p(ye.el),
          // anchor may have changed if it's in a fragment
          le(ye),
          S,
          B,
          G
        ), ft.el = me.el, Tt === null && S0(S, me.el), Pt && Je(Pt, B), (de = ft.props && ft.props.onVnodeUpdated) && Je(
          () => wn(de, mt, ft, jt),
          B
        );
      } else {
        let ft;
        const { el: ht, props: Pt } = I, { bm: mt, m: jt, parent: Tt, root: de, type: me } = S, ye = Ii(I);
        ur(S, !1), mt && us(mt), !ye && (ft = Pt && Pt.onVnodeBeforeMount) && wn(ft, Tt, I), ur(S, !0);
        {
          de.ce && de.ce._hasShadowRoot() && de.ce._injectChildStyle(
            me,
            S.parent ? S.parent.type : void 0
          );
          const we = S.subTree = Kl(S);
          L(
            null,
            we,
            F,
            K,
            S,
            B,
            G
          ), I.el = we.el;
        }
        if (jt && Je(jt, B), !ye && (ft = Pt && Pt.onVnodeMounted)) {
          const we = I;
          Je(
            () => wn(ft, Tt, we),
            B
          );
        }
        (I.shapeFlag & 256 || Tt && Ii(Tt.vnode) && Tt.vnode.shapeFlag & 256) && S.a && Je(S.a, B), S.isMounted = !0, I = F = K = null;
      }
    };
    S.scope.on();
    const it = S.effect = new ff(tt);
    S.scope.off();
    const Q = S.update = it.run.bind(it), _t = S.job = it.runIfDirty.bind(it);
    _t.i = S, _t.id = S.uid, it.scheduler = () => dc(_t), ur(S, !0), Q();
  }, pt = (S, I, F) => {
    I.component = S;
    const K = S.vnode.props;
    S.vnode = I, S.next = null, k0(S, I.props, K, F), A0(S, I.children, F), Wn(), Vl(S), Yn();
  }, Y = (S, I, F, K, B, G, J, tt, it = !1) => {
    const Q = S && S.children, _t = S ? S.shapeFlag : 0, ft = I.children, { patchFlag: ht, shapeFlag: Pt } = I;
    if (ht > 0) {
      if (ht & 128) {
        St(
          Q,
          ft,
          F,
          K,
          B,
          G,
          J,
          tt,
          it
        );
        return;
      } else if (ht & 256) {
        ut(
          Q,
          ft,
          F,
          K,
          B,
          G,
          J,
          tt,
          it
        );
        return;
      }
    }
    Pt & 8 ? (_t & 16 && g(Q, B, G), ft !== Q && b(F, ft)) : _t & 16 ? Pt & 16 ? St(
      Q,
      ft,
      F,
      K,
      B,
      G,
      J,
      tt,
      it
    ) : g(Q, B, G, !0) : (_t & 8 && b(F, ""), Pt & 16 && T(
      ft,
      F,
      K,
      B,
      G,
      J,
      tt,
      it
    ));
  }, ut = (S, I, F, K, B, G, J, tt, it) => {
    S = S || Br, I = I || Br;
    const Q = S.length, _t = I.length, ft = Math.min(Q, _t);
    let ht;
    for (ht = 0; ht < ft; ht++) {
      const Pt = I[ht] = it ? Bn(I[ht]) : An(I[ht]);
      L(
        S[ht],
        Pt,
        F,
        null,
        B,
        G,
        J,
        tt,
        it
      );
    }
    Q > _t ? g(
      S,
      B,
      G,
      !0,
      !1,
      ft
    ) : T(
      I,
      F,
      K,
      B,
      G,
      J,
      tt,
      it,
      ft
    );
  }, St = (S, I, F, K, B, G, J, tt, it) => {
    let Q = 0;
    const _t = I.length;
    let ft = S.length - 1, ht = _t - 1;
    for (; Q <= ft && Q <= ht; ) {
      const Pt = S[Q], mt = I[Q] = it ? Bn(I[Q]) : An(I[Q]);
      if (hi(Pt, mt))
        L(
          Pt,
          mt,
          F,
          null,
          B,
          G,
          J,
          tt,
          it
        );
      else
        break;
      Q++;
    }
    for (; Q <= ft && Q <= ht; ) {
      const Pt = S[ft], mt = I[ht] = it ? Bn(I[ht]) : An(I[ht]);
      if (hi(Pt, mt))
        L(
          Pt,
          mt,
          F,
          null,
          B,
          G,
          J,
          tt,
          it
        );
      else
        break;
      ft--, ht--;
    }
    if (Q > ft) {
      if (Q <= ht) {
        const Pt = ht + 1, mt = Pt < _t ? I[Pt].el : K;
        for (; Q <= ht; )
          L(
            null,
            I[Q] = it ? Bn(I[Q]) : An(I[Q]),
            F,
            mt,
            B,
            G,
            J,
            tt,
            it
          ), Q++;
      }
    } else if (Q > ht)
      for (; Q <= ft; )
        Dt(S[Q], B, G, !0), Q++;
    else {
      const Pt = Q, mt = Q, jt = /* @__PURE__ */ new Map();
      for (Q = mt; Q <= ht; Q++) {
        const Fe = I[Q] = it ? Bn(I[Q]) : An(I[Q]);
        Fe.key != null && jt.set(Fe.key, Q);
      }
      let Tt, de = 0;
      const me = ht - mt + 1;
      let ye = !1, we = 0;
      const Rn = new Array(me);
      for (Q = 0; Q < me; Q++) Rn[Q] = 0;
      for (Q = Pt; Q <= ft; Q++) {
        const Fe = S[Q];
        if (de >= me) {
          Dt(Fe, B, G, !0);
          continue;
        }
        let cn;
        if (Fe.key != null)
          cn = jt.get(Fe.key);
        else
          for (Tt = mt; Tt <= ht; Tt++)
            if (Rn[Tt - mt] === 0 && hi(Fe, I[Tt])) {
              cn = Tt;
              break;
            }
        cn === void 0 ? Dt(Fe, B, G, !0) : (Rn[cn - mt] = Q + 1, cn >= we ? we = cn : ye = !0, L(
          Fe,
          I[cn],
          F,
          null,
          B,
          G,
          J,
          tt,
          it
        ), de++);
      }
      const ei = ye ? T0(Rn) : Br;
      for (Tt = ei.length - 1, Q = me - 1; Q >= 0; Q--) {
        const Fe = mt + Q, cn = I[Fe], ni = I[Fe + 1], Xi = Fe + 1 < _t ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ni.el || rd(ni)
        ) : K;
        Rn[Q] === 0 ? L(
          null,
          cn,
          F,
          Xi,
          B,
          G,
          J,
          tt,
          it
        ) : ye && (Tt < 0 || Q !== ei[Tt] ? Lt(cn, F, Xi, 2) : Tt--);
      }
    }
  }, Lt = (S, I, F, K, B = null) => {
    const { el: G, type: J, transition: tt, children: it, shapeFlag: Q } = S;
    if (Q & 6) {
      Lt(S.component.subTree, I, F, K);
      return;
    }
    if (Q & 128) {
      S.suspense.move(I, F, K);
      return;
    }
    if (Q & 64) {
      J.move(S, I, F, Pe);
      return;
    }
    if (J === te) {
      r(G, I, F);
      for (let ft = 0; ft < it.length; ft++)
        Lt(it[ft], I, F, K);
      r(S.anchor, I, F);
      return;
    }
    if (J === za) {
      A(S, I, F);
      return;
    }
    if (K !== 2 && Q & 1 && tt)
      if (K === 0)
        tt.beforeEnter(G), r(G, I, F), Je(() => tt.enter(G), B);
      else {
        const { leave: ft, delayLeave: ht, afterLeave: Pt } = tt, mt = () => {
          S.ctx.isUnmounted ? a(G) : r(G, I, F);
        }, jt = () => {
          G._isLeaving && G[qg](
            !0
            /* cancelled */
          ), ft(G, () => {
            mt(), Pt && Pt();
          });
        };
        ht ? ht(G, mt, jt) : jt();
      }
    else
      r(G, I, F);
  }, Dt = (S, I, F, K = !1, B = !1) => {
    const {
      type: G,
      props: J,
      ref: tt,
      children: it,
      dynamicChildren: Q,
      shapeFlag: _t,
      patchFlag: ft,
      dirs: ht,
      cacheIndex: Pt,
      memo: mt
    } = S;
    if (ft === -2 && (B = !1), tt != null && (Wn(), Ai(tt, null, F, S, !0), Yn()), Pt != null && (I.renderCache[Pt] = void 0), _t & 256) {
      I.ctx.deactivate(S);
      return;
    }
    const jt = _t & 1 && ht, Tt = !Ii(S);
    let de;
    if (Tt && (de = J && J.onVnodeBeforeUnmount) && wn(de, I, S), _t & 6)
      en(S.component, F, K);
    else {
      if (_t & 128) {
        S.suspense.unmount(F, K);
        return;
      }
      jt && lr(S, null, I, "beforeUnmount"), _t & 64 ? S.type.remove(
        S,
        I,
        F,
        Pe,
        K
      ) : Q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (G !== te || ft > 0 && ft & 64) ? g(
        Q,
        I,
        F,
        !1,
        !0
      ) : (G === te && ft & 384 || !B && _t & 16) && g(it, I, F), K && ie(S);
    }
    const me = mt != null && Pt == null;
    (Tt && (de = J && J.onVnodeUnmounted) || jt || me) && Je(() => {
      de && wn(de, I, S), jt && lr(S, null, I, "unmounted"), me && (S.el = null);
    }, F);
  }, ie = (S) => {
    const { type: I, el: F, anchor: K, transition: B } = S;
    if (I === te) {
      Ne(F, K);
      return;
    }
    if (I === za) {
      D(S);
      return;
    }
    const G = () => {
      a(F), B && !B.persisted && B.afterLeave && B.afterLeave();
    };
    if (S.shapeFlag & 1 && B && !B.persisted) {
      const { leave: J, delayLeave: tt } = B, it = () => J(F, G);
      tt ? tt(S.el, G, it) : it();
    } else
      G();
  }, Ne = (S, I) => {
    let F;
    for (; S !== I; )
      F = w(S), a(S), S = F;
    a(I);
  }, en = (S, I, F) => {
    const { bum: K, scope: B, job: G, subTree: J, um: tt, m: it, a: Q } = S;
    ql(it), ql(Q), K && us(K), B.stop(), G && (G.flags |= 8, Dt(J, S, I, F)), tt && Je(tt, I), Je(() => {
      S.isUnmounted = !0;
    }, I);
  }, g = (S, I, F, K = !1, B = !1, G = 0) => {
    for (let J = G; J < S.length; J++)
      Dt(S[J], I, F, K, B);
  }, le = (S) => {
    if (S.shapeFlag & 6)
      return le(S.component.subTree);
    if (S.shapeFlag & 128)
      return S.suspense.next();
    const I = w(S.anchor || S.el), F = I && I[Wg];
    return F ? w(F) : I;
  };
  let Re = !1;
  const We = (S, I, F) => {
    let K;
    S == null ? I._vnode && (Dt(I._vnode, null, null, !0), K = I._vnode.component) : L(
      I._vnode || null,
      S,
      I,
      null,
      null,
      null,
      F
    ), I._vnode = S, Re || (Re = !0, Vl(K), Af(), Re = !1);
  }, Pe = {
    p: L,
    um: Dt,
    m: Lt,
    r: ie,
    mt: at,
    mc: T,
    pc: Y,
    pbc: V,
    n: le,
    o: t
  };
  return {
    render: We,
    hydrate: void 0,
    createApp: m0(We)
  };
}
function ms({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function ur({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function D0(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function ed(t, e, n = !1) {
  const r = t.children, a = e.children;
  if (Ot(r) && Ot(a))
    for (let s = 0; s < r.length; s++) {
      const l = r[s];
      let f = a[s];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[s] = Bn(a[s]), f.el = l.el), !n && f.patchFlag !== -2 && ed(l, f)), f.type === Ao && (f.patchFlag === -1 && (f = a[s] = Bn(f)), f.el = l.el), f.type === ar && !f.el && (f.el = l.el);
    }
}
function T0(t) {
  const e = t.slice(), n = [0];
  let r, a, s, l, f;
  const h = t.length;
  for (r = 0; r < h; r++) {
    const y = t[r];
    if (y !== 0) {
      if (a = n[n.length - 1], t[a] < y) {
        e[r] = a, n.push(r);
        continue;
      }
      for (s = 0, l = n.length - 1; s < l; )
        f = s + l >> 1, t[n[f]] < y ? s = f + 1 : l = f;
      y < t[n[s]] && (s > 0 && (e[r] = n[s - 1]), n[s] = r);
    }
  }
  for (s = n.length, l = n[s - 1]; s-- > 0; )
    n[s] = l, l = e[l];
  return n;
}
function nd(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : nd(e);
}
function ql(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function rd(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? rd(e.subTree) : null;
}
const id = (t) => t.__isSuspense;
function L0(t, e) {
  e && e.pendingBranch ? Ot(t) ? e.effects.push(...t) : e.effects.push(t) : $g(t);
}
const te = /* @__PURE__ */ Symbol.for("v-fgt"), Ao = /* @__PURE__ */ Symbol.for("v-txt"), ar = /* @__PURE__ */ Symbol.for("v-cmt"), za = /* @__PURE__ */ Symbol.for("v-stc"), Di = [];
let sn = null;
function Ct(t = !1) {
  Di.push(sn = t ? null : []);
}
function O0() {
  Di.pop(), sn = Di[Di.length - 1] || null;
}
let ji = 1;
function Xl(t, e = !1) {
  ji += t, t < 0 && sn && e && (sn.hasOnce = !0);
}
function ad(t) {
  return t.dynamicChildren = ji > 0 ? sn || Br : null, O0(), ji > 0 && sn && sn.push(t), t;
}
function Et(t, e, n, r, a, s) {
  return ad(
    ct(
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
function ti(t, e, n, r, a) {
  return ad(
    xe(
      t,
      e,
      n,
      r,
      a,
      !0
    )
  );
}
function od(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function hi(t, e) {
  return t.type === e.type && t.key === e.key;
}
const sd = ({ key: t }) => t ?? null, $a = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? pe(t) || /* @__PURE__ */ Le(t) || Ft(t) ? { i: on, r: t, k: e, f: !!n } : t : null);
function ct(t, e = null, n = null, r = 0, a = null, s = t === te ? 0 : 1, l = !1, f = !1) {
  const h = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && sd(e),
    ref: e && $a(e),
    scopeId: Ef,
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
    ctx: on
  };
  return f ? (mc(h, n), s & 128 && t.normalize(h)) : n && (h.shapeFlag |= pe(n) ? 8 : 16), ji > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  sn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (h.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  h.patchFlag !== 32 && sn.push(h), h;
}
const xe = R0;
function R0(t, e = null, n = null, r = 0, a = null, s = !1) {
  if ((!t || t === $f) && (t = ar), od(t)) {
    const f = Jr(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && mc(f, n), ji > 0 && !s && sn && (f.shapeFlag & 6 ? sn[sn.indexOf(t)] = f : sn.push(f)), f.patchFlag = -2, f;
  }
  if (q0(t) && (t = t.__vccOpts), e) {
    e = F0(e);
    let { class: f, style: h } = e;
    f && !pe(f) && (e.class = ge(f)), Zt(h) && (/* @__PURE__ */ fc(h) && !Ot(h) && (h = Oe({}, h)), e.style = je(h));
  }
  const l = pe(t) ? 1 : id(t) ? 128 : Yg(t) ? 64 : Zt(t) ? 4 : Ft(t) ? 2 : 0;
  return ct(
    t,
    e,
    n,
    r,
    a,
    l,
    s,
    !0
  );
}
function F0(t) {
  return t ? /* @__PURE__ */ fc(t) || qf(t) ? Oe({}, t) : t : null;
}
function Jr(t, e, n = !1, r = !1) {
  const { props: a, ref: s, patchFlag: l, children: f, transition: h } = t, y = e ? cd(a || {}, e) : a, b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: y,
    key: y && sd(y),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? Ot(s) ? s.concat($a(e)) : [s, $a(e)] : $a(e)
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
    patchFlag: e && t.type !== te ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: h,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Jr(t.ssContent),
    ssFallback: t.ssFallback && Jr(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return h && r && hc(
    b,
    h.clone(b)
  ), b;
}
function V0(t = " ", e = 0) {
  return xe(Ao, null, t, e);
}
function H0(t, e) {
  const n = xe(za, null, t);
  return n.staticCount = e, n;
}
function un(t = "", e = !1) {
  return e ? (Ct(), ti(ar, null, t)) : xe(ar, null, t);
}
function An(t) {
  return t == null || typeof t == "boolean" ? xe(ar) : Ot(t) ? xe(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : od(t) ? Bn(t) : xe(Ao, null, String(t));
}
function Bn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Jr(t);
}
function mc(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Ot(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const a = e.default;
      a && (a._c && (a._d = !1), mc(t, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = e._;
      !a && !qf(e) ? e._ctx = on : a === 3 && on && (on.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else Ft(e) ? (e = { default: e, _ctx: on }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [V0(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function cd(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const a in r)
      if (a === "class")
        e.class !== r.class && (e.class = ge([e.class, r.class]));
      else if (a === "style")
        e.style = je([e.style, r.style]);
      else if (bo(a)) {
        const s = e[a], l = r[a];
        l && s !== l && !(Ot(s) && s.includes(l)) ? e[a] = s ? [].concat(s, l) : l : l == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !_o(a) && (e[a] = l);
      } else a !== "" && (e[a] = r[a]);
  }
  return e;
}
function wn(t, e, n, r = null) {
  On(t, e, 7, [
    n,
    r
  ]);
}
const z0 = Bf();
let $0 = 0;
function j0(t, e, n) {
  const r = t.type, a = (e ? e.appContext : t.appContext) || z0, s = {
    uid: $0++,
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
    scope: new lg(
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
    propsOptions: Zf(r, a),
    emitsOptions: Gf(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Qt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Qt,
    data: Qt,
    props: Qt,
    attrs: Qt,
    slots: Qt,
    refs: Qt,
    setupState: Qt,
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
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = v0.bind(null, s), t.ce && t.ce(s), s;
}
let Te = null;
const U0 = () => Te || on;
let eo, $s;
{
  const t = So(), e = (n, r) => {
    let a;
    return (a = t[n]) || (a = t[n] = []), a.push(r), (s) => {
      a.length > 1 ? a.forEach((l) => l(s)) : a[0](s);
    };
  };
  eo = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Te = n
  ), $s = e(
    "__VUE_SSR_SETTERS__",
    (n) => Ui = n
  );
}
const Yi = (t) => {
  const e = Te;
  return eo(t), t.scope.on(), () => {
    t.scope.off(), eo(e);
  };
}, Zl = () => {
  Te && Te.scope.off(), eo(null);
};
function ld(t) {
  return t.vnode.shapeFlag & 4;
}
let Ui = !1;
function B0(t, e = !1, n = !1) {
  e && $s(e);
  const { props: r, children: a } = t.vnode, s = ld(t);
  M0(t, r, s, e), C0(t, a, n || e);
  const l = s ? G0(t, e) : void 0;
  return e && $s(!1), l;
}
function G0(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, l0);
  const { setup: r } = n;
  if (r) {
    Wn();
    const a = t.setupContext = r.length > 1 ? W0(t) : null, s = Yi(t), l = Wi(
      r,
      t,
      0,
      [
        t.props,
        a
      ]
    ), f = rf(l);
    if (Yn(), s(), (f || t.sp) && !Ii(t) && Of(t), f) {
      if (l.then(Zl, Zl), e)
        return l.then((h) => {
          Jl(t, h);
        }).catch((h) => {
          No(h, t, 0);
        });
      t.asyncDep = l;
    } else
      Jl(t, l);
  } else
    ud(t);
}
function Jl(t, e, n) {
  Ft(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Zt(e) && (t.setupState = kf(e)), ud(t);
}
function ud(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || Tn);
  {
    const a = Yi(t);
    Wn();
    try {
      u0(t);
    } finally {
      Yn(), a();
    }
  }
}
const K0 = {
  get(t, e) {
    return De(t, "get", ""), t[e];
  }
};
function W0(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, K0),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Io(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(kf(Ig(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in Ei)
        return Ei[n](t);
    },
    has(e, n) {
      return n in e || n in Ei;
    }
  })) : t.proxy;
}
function Y0(t, e = !0) {
  return Ft(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function q0(t) {
  return Ft(t) && "__vccOpts" in t;
}
const Yr = (t, e) => /* @__PURE__ */ Rg(t, e, Ui), X0 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let js;
const Ql = typeof window < "u" && window.trustedTypes;
if (Ql)
  try {
    js = /* @__PURE__ */ Ql.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const fd = js ? (t) => js.createHTML(t) : (t) => t, Z0 = "http://www.w3.org/2000/svg", J0 = "http://www.w3.org/1998/Math/MathML", Un = typeof document < "u" ? document : null, tu = Un && /* @__PURE__ */ Un.createElement("template"), Q0 = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const a = e === "svg" ? Un.createElementNS(Z0, t) : e === "mathml" ? Un.createElementNS(J0, t) : n ? Un.createElement(t, { is: n }) : Un.createElement(t);
    return t === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (t) => Un.createTextNode(t),
  createComment: (t) => Un.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Un.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, e, n, r, a, s) {
    const l = n ? n.previousSibling : e.lastChild;
    if (a && (a === s || a.nextSibling))
      for (; e.insertBefore(a.cloneNode(!0), n), !(a === s || !(a = a.nextSibling)); )
        ;
    else {
      tu.innerHTML = fd(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const f = tu.content;
      if (r === "svg" || r === "mathml") {
        const h = f.firstChild;
        for (; h.firstChild; )
          f.appendChild(h.firstChild);
        f.removeChild(h);
      }
      e.insertBefore(f, n);
    }
    return [
      // first
      l ? l.nextSibling : e.firstChild,
      // last
      n ? n.previousSibling : e.lastChild
    ];
  }
}, t1 = /* @__PURE__ */ Symbol("_vtc");
function e1(t, e, n) {
  const r = t[t1];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const no = /* @__PURE__ */ Symbol("_vod"), dd = /* @__PURE__ */ Symbol("_vsh"), hd = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(t, { value: e }, { transition: n }) {
    t[no] = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : pi(t, e);
  },
  mounted(t, { value: e }, { transition: n }) {
    n && e && n.enter(t);
  },
  updated(t, { value: e, oldValue: n }, { transition: r }) {
    !e != !n && (r ? e ? (r.beforeEnter(t), pi(t, !0), r.enter(t)) : r.leave(t, () => {
      pi(t, !1);
    }) : pi(t, e));
  },
  beforeUnmount(t, { value: e }) {
    pi(t, e);
  }
};
function pi(t, e) {
  t.style.display = e ? t[no] : "none", t[dd] = !e;
}
const n1 = /* @__PURE__ */ Symbol(""), r1 = /(?:^|;)\s*display\s*:/;
function i1(t, e, n) {
  const r = t.style, a = pe(n);
  let s = !1;
  if (n && !a) {
    if (e)
      if (pe(e))
        for (const l of e.split(";")) {
          const f = l.slice(0, l.indexOf(":")).trim();
          n[f] == null && ja(r, f, "");
        }
      else
        for (const l in e)
          n[l] == null && ja(r, l, "");
    for (const l in n)
      l === "display" && (s = !0), ja(r, l, n[l]);
  } else if (a) {
    if (e !== n) {
      const l = r[n1];
      l && (n += ";" + l), r.cssText = n, s = r1.test(n);
    }
  } else e && t.removeAttribute("style");
  no in t && (t[no] = s ? r.display : "", t[dd] && (r.display = "none"));
}
const eu = /\s*!important$/;
function ja(t, e, n) {
  if (Ot(n))
    n.forEach((r) => ja(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = a1(t, e);
    eu.test(n) ? t.setProperty(
      Nr(r),
      n.replace(eu, ""),
      "important"
    ) : t[r] = n;
  }
}
const nu = ["Webkit", "Moz", "ms"], ys = {};
function a1(t, e) {
  const n = ys[e];
  if (n)
    return n;
  let r = Ke(e);
  if (r !== "filter" && r in t)
    return ys[e] = r;
  r = wo(r);
  for (let a = 0; a < nu.length; a++) {
    const s = nu[a] + r;
    if (s in t)
      return ys[e] = s;
  }
  return e;
}
const ru = "http://www.w3.org/1999/xlink";
function iu(t, e, n, r, a, s = sg(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(ru, e.slice(6, e.length)) : t.setAttributeNS(ru, e, n) : n == null || s && !cf(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    s ? "" : Ln(n) ? String(n) : n
  );
}
function au(t, e, n, r, a) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? fd(n) : n);
    return;
  }
  const s = t.tagName;
  if (e === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const f = s === "OPTION" ? t.getAttribute("value") || "" : t.value, h = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== h || !("_value" in t)) && (t.value = h), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const f = typeof t[e];
    f === "boolean" ? n = cf(n) : n == null && f === "string" ? (n = "", l = !0) : f === "number" && (n = 0, l = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  l && t.removeAttribute(a || e);
}
function o1(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function s1(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const ou = /* @__PURE__ */ Symbol("_vei");
function c1(t, e, n, r, a = null) {
  const s = t[ou] || (t[ou] = {}), l = s[e];
  if (r && l)
    l.value = r;
  else {
    const [f, h] = l1(e);
    if (r) {
      const y = s[e] = d1(
        r,
        a
      );
      o1(t, f, y, h);
    } else l && (s1(t, f, l, h), s[e] = void 0);
  }
}
const su = /(?:Once|Passive|Capture)$/;
function l1(t) {
  let e;
  if (su.test(t)) {
    e = {};
    let r;
    for (; r = t.match(su); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Nr(t.slice(2)), e];
}
let vs = 0;
const u1 = /* @__PURE__ */ Promise.resolve(), f1 = () => vs || (u1.then(() => vs = 0), vs = Date.now());
function d1(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    On(
      h1(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = f1(), n;
}
function h1(t, e) {
  if (Ot(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map(
      (r) => (a) => !a._stopped && r && r(a)
    );
  } else
    return e;
}
const cu = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, p1 = (t, e, n, r, a, s) => {
  const l = a === "svg";
  e === "class" ? e1(t, r, l) : e === "style" ? i1(t, n, r) : bo(e) ? _o(e) || c1(t, e, n, r, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : g1(t, e, r, l)) ? (au(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && iu(t, e, r, l, s, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (m1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !pe(r))) ? au(t, Ke(e), r, s, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), iu(t, e, r, l));
};
function g1(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && cu(e) && Ft(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const a = t.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return cu(e) && pe(n) ? !1 : e in t;
}
function m1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const r = Ke(e);
  return Array.isArray(n) ? n.some((a) => Ke(a) === r) : Object.keys(n).some((a) => Ke(a) === r);
}
const y1 = ["ctrl", "shift", "alt", "meta"], v1 = {
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
  exact: (t, e) => y1.some((n) => t[`${n}Key`] && !e.includes(n))
}, b1 = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = ((a, ...s) => {
    for (let l = 0; l < e.length; l++) {
      const f = v1[e[l]];
      if (f && f(a, e)) return;
    }
    return t(a, ...s);
  }));
}, _1 = /* @__PURE__ */ Oe({ patchProp: p1 }, Q0);
let lu;
function x1() {
  return lu || (lu = I0(_1));
}
const w1 = ((...t) => {
  const e = x1().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const a = M1(r);
    if (!a) return;
    const s = e._component;
    !Ft(s) && !s.render && !s.template && (s.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const l = n(a, !1, S1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), l;
  }, e;
});
function S1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function M1(t) {
  return pe(t) ? document.querySelector(t) : t;
}
const fe = Math.PI / 180, pd = Math.PI * 2, k1 = 2048;
function Jt(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function or(t, e, n) {
  return { x: t, y: e, z: n };
}
function ro(t, e) {
  return or(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Ur(t, e) {
  return or(t.x * e, t.y * e, t.z * e);
}
function Ua(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function uu(t, e) {
  return or(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function wi(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return or(t.x / e, t.y / e, t.z / e);
}
function N1(t, e) {
  const n = Number(t || 0) * fe, r = Number(e || 0) * fe, a = Math.cos(r);
  return or(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Ba(t, e, n = 0) {
  const r = N1(t, e);
  let a = or(0, 1, 0);
  Math.abs(Ua(r, a)) > 0.999 && (a = or(0, 0, 1));
  let s = wi(uu(a, r)), l = wi(uu(r, s));
  const f = Number(n || 0) * fe, h = Math.cos(f), y = Math.sin(f), b = ro(Ur(s, h), Ur(l, y)), p = ro(Ur(s, -y), Ur(l, h));
  return s = wi(b), l = wi(p), { fwd: r, right: s, up: l };
}
function P1(t, e) {
  const n = (Number(t || 0) - 0.5) * pd, r = (0.5 - Number(e || 0)) * Math.PI, a = Math.cos(r);
  return or(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function fu(t, e, n = 1) {
  const r = Math.max(1, Math.round(Number(t || 1))), a = Math.max(1, Math.round(Number(e || 1))), s = Math.max(1, Number(n || 1)), l = Math.max(512, k1), f = Math.min(1, l / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: s,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function du(t, e, n) {
  const r = t.createShader(e);
  if (t.shaderSource(r, n), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const a = t.getShaderInfoLog(r) || "shader compile failed";
    throw t.deleteShader(r), new Error(a);
  }
  return r;
}
function bs(t, e, n) {
  const r = du(t, t.VERTEX_SHADER, e);
  let a;
  try {
    a = du(t, t.FRAGMENT_SHADER, n);
  } catch (l) {
    throw t.deleteShader(r), l;
  }
  const s = t.createProgram();
  if (t.attachShader(s, r), t.attachShader(s, a), t.linkProgram(s), t.deleteShader(r), t.deleteShader(a), !t.getProgramParameter(s, t.LINK_STATUS)) {
    const l = t.getProgramInfoLog(s) || "program link failed";
    throw t.deleteProgram(s), new Error(l);
  }
  return s;
}
const _s = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, C1 = `#version 300 es
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
}`, A1 = `#version 300 es
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
}`, I1 = `#version 300 es
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
function gi(t, e, n) {
  if (!t || t.mode === "unwrap") return null;
  const r = Number(t.mode === "cutout" ? t.hFovDeg || 90 : t.fovDeg || 100), a = Number(t.mode === "cutout" ? t.vFovDeg || 60 : 2 * Math.atan(Math.tan(Jt(r, 1, 179) * fe * 0.5) * (n / Math.max(e, 1))) / fe);
  return {
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.mode === "cutout" && t.rollDeg || 0),
    hFovDeg: Jt(r, 1, 179),
    vFovDeg: Jt(a, 0.1, 179)
  };
}
function E1(t) {
  const e = Ba(
    Number(t.yawDeg || 0),
    Number(t.pitchDeg || 0),
    Number(t.rollDeg || 0)
  );
  return {
    right: e.right,
    up: e.up,
    fwd: e.fwd,
    tanX: Math.tan(Jt(Number(t.hFovDeg), 0.1, 179) * 0.5 * fe),
    tanY: Math.tan(Jt(Number(t.vFovDeg), 0.1, 179) * 0.5 * fe),
    crop: t.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: Jt(Number(t.opacity ?? 1), 0, 1)
  };
}
function D1(t = {}) {
  const e = (t == null ? void 0 : t.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, s = null, l = null, f = null, h = null, y = null, b = null, p = null, w = null, M = !1, E = fu(1, 1, 1), L = null, R = null, O = null, C = null, A = null;
  const D = /* @__PURE__ */ new Map();
  let $ = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, ot = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  };
  function dt(S = null, I = null) {
    const F = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, F), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, S ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, I ?? n.CLAMP_TO_EDGE), F;
  }
  function T() {
    if (M) return !0;
    try {
      return n = e.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (r = bs(n, _s, C1), a = bs(n, _s, A1), s = bs(n, _s, I1), L = {
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
      }, R = {
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
      }, l = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, l), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
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
      ]), n.STATIC_DRAW), f = dt(n.REPEAT, n.CLAMP_TO_EDGE), h = dt(n.REPEAT, n.CLAMP_TO_EDGE), y = dt(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), M = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function wt() {
    var S;
    if (n) {
      try {
        l && n.deleteBuffer(l), f && n.deleteTexture(f), h && n.deleteTexture(h), y && n.deleteTexture(y), D.forEach((I) => {
          pt(I);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), s && n.deleteProgram(s), (S = n.getExtension("WEBGL_lose_context")) == null || S.loseContext();
      } catch {
      }
      n = null, r = null, a = null, s = null, l = null, f = null, h = null, y = null, D.clear(), b = null, p = null, w = null, ot = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, C = null, A = null, M = !1;
    }
  }
  function V(S, I, F = 1) {
    E = fu(S, I, F), (e.width !== E.width || e.height !== E.height) && (e.width = E.width, e.height = E.height);
  }
  function lt(S) {
    S === "background" ? b = null : S === "paint" ? p = null : w = null, ot[S] && (ot[S].width = 0, ot[S].height = 0);
  }
  function xt(S, I, F = [], K = { width: 0, height: 0 }, B = !1) {
    if (!n || !S || !I) return !1;
    const G = Number(I.width || I.videoWidth || I.naturalWidth || 0), J = Number(I.height || I.videoHeight || I.naturalHeight || 0);
    if (!(G > 1) || !(J > 1)) return !1;
    const tt = Array.isArray(F) ? F.filter((it) => it && it.w > 0 && it.h > 0) : [];
    if (!tt.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, S), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B ? 1 : 0), K.width !== G || K.height !== J)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, I), K.width = G, K.height = J, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (C || (C = document.createElement("canvas"), A = C.getContext("2d")), !A)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, I), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const it of tt) {
      const Q = Math.max(0, Math.floor(Number(it.x || 0))), _t = Math.max(0, Math.floor(Number(it.y || 0))), ft = Math.min(G - Q, Math.ceil(Number(it.w || 0))), ht = Math.min(J - _t, Math.ceil(Number(it.h || 0)));
      if (!(ft <= 0 || ht <= 0)) {
        if (C.width !== ft || C.height !== ht) {
          if (C.width = ft, C.height = ht, A = C.getContext("2d"), !A)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, I), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          A.clearRect(0, 0, ft, ht);
        A.drawImage(I, Q, _t, ft, ht, 0, 0, ft, ht), n.texSubImage2D(n.TEXTURE_2D, 0, Q, _t, n.RGBA, n.UNSIGNED_BYTE, C);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function Mt(S, I, F, K, B = null, G = !1) {
    if (!T()) return !1;
    if (!F)
      return lt(S), !1;
    const J = String(K ?? ""), tt = S === "background" ? b : S === "paint" ? p : w, it = ot[S], Q = Number(F.width || F.videoWidth || F.naturalWidth || 0), _t = Number(F.height || F.videoHeight || F.naturalHeight || 0), ft = it.width !== Q || it.height !== _t;
    if (tt === J && !ft && !(Array.isArray(B) && B.length)) return !0;
    if (!(Q > 0) || !(_t > 0))
      return lt(S), !1;
    if (n.bindTexture(n.TEXTURE_2D, I), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G ? 1 : 0), !(Array.isArray(B) && B.length ? xt(I, F, B, it, G) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, F), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), lt(S), !1;
      it.width = Q, it.height = _t;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), S === "background" ? b = J : S === "paint" ? p = J : w = J, !0;
  }
  function at(S, I) {
    return Mt("background", f, S, I, null, !0);
  }
  function Z(S, I, F = null) {
    return Mt("paint", h, S, I, F, !0);
  }
  function st(S, I, F = null) {
    return Mt("mask", y, S, I, F, !0);
  }
  function pt(S) {
    S != null && S.texture && n && n.deleteTexture(S.texture);
  }
  function Y(S) {
    if (!n || !(S != null && S.assetId) || !(S != null && S.source)) return null;
    const I = String(S.assetId), F = String(S.revision ?? ""), K = S.source, B = Number(K.width || K.naturalWidth || K.videoWidth || 0), G = Number(K.height || K.naturalHeight || K.videoHeight || 0);
    if (B <= 0 || G <= 0) return null;
    let J = D.get(I);
    if (J || (J = {
      texture: dt(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, D.set(I, J)), J.revision !== F || J.width !== B || J.height !== G) {
      if (n.bindTexture(n.TEXTURE_2D, J.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, K), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), J.revision = F, J.width = B, J.height = G;
    }
    return J.texture;
  }
  function ut(S = []) {
    if (!T()) return !1;
    const I = /* @__PURE__ */ new Set();
    return S.forEach((F) => {
      !(F != null && F.assetId) || !(F != null && F.source) || (I.add(String(F.assetId)), Y(F));
    }), D.forEach((F, K) => {
      I.has(K) || (pt(F), D.delete(K));
    }), !0;
  }
  function St() {
    return T() ? (n.viewport(0, 0, e.width, e.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Lt(S) {
    n.useProgram(S), n.bindBuffer(n.ARRAY_BUFFER, l), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function Dt(S, I = {}) {
    if (!b) return null;
    n.disable(n.BLEND), Lt(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(L.background, 0), n.uniform2f(L.viewport, Math.max(1, E.width), Math.max(1, E.height)), n.uniform1i(L.mode, (S == null ? void 0 : S.mode) === "unwrap" ? 0 : (S == null ? void 0 : S.mode) === "cutout" ? 2 : 1);
    const F = gi(S, E.width, E.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(L.yaw, Number(F.yawDeg || 0) * fe), n.uniform1f(L.pitch, Number(F.pitchDeg || 0) * fe), n.uniform1f(L.roll, Number(F.rollDeg || 0) * fe), n.uniform1f(L.hFov, Jt(Number(F.hFovDeg || 90), 0.1, 179) * fe), n.uniform1f(L.vFov, Jt(Number(F.vFovDeg || 60), 0.1, 179) * fe), n.uniform1f(L.opacity, Jt(Number(I.backgroundOpacity ?? 1), 0, 1));
    const K = Number((S == null ? void 0 : S.coverageDeg) || (I == null ? void 0 : I.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(L.coverage, K), n.drawArrays(n.TRIANGLES, 0, 6), e;
  }
  function ie(S, I = {}) {
    if (p == null && w == null) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Lt(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, h), n.uniform1i(R.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(R.mask, 1), n.uniform1i(R.mode, (S == null ? void 0 : S.mode) === "unwrap" ? 0 : (S == null ? void 0 : S.mode) === "cutout" ? 2 : 1);
    const F = gi(S, E.width, E.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(R.yaw, Number(F.yawDeg || 0) * fe), n.uniform1f(R.pitch, Number(F.pitchDeg || 0) * fe), n.uniform1f(R.roll, Number(F.rollDeg || 0) * fe), n.uniform1f(R.hFov, Jt(Number(F.hFovDeg || 90), 0.1, 179) * fe), n.uniform1f(R.vFov, Jt(Number(F.vFovDeg || 60), 0.1, 179) * fe), n.uniform1f(R.paintOpacity, Jt(Number(I.paintOpacity ?? 1), 0, 1)), n.uniform1f(R.maskOpacity, Jt(Number(I.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(R.hasPaint, p != null ? 1 : 0), n.uniform1i(R.hasMask, w != null ? 1 : 0), n.uniform1i(R.showMaskTint, I.showMaskTint === !1 ? 0 : 1), n.uniform3f(R.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), e;
  }
  function Ne(S, I) {
    var tt, it, Q, _t, ft, ht, Pt;
    const F = Array.isArray(S == null ? void 0 : S.objects) ? S.objects : [];
    if (!F.length) return;
    const K = (I == null ? void 0 : I.mode) === "unwrap" ? 0 : (I == null ? void 0 : I.mode) === "cutout" ? 2 : 1, B = gi(I, E.width, E.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, G = Ba(B.yawDeg, B.pitchDeg, B.rollDeg), J = F.slice().sort((mt, jt) => Number((mt == null ? void 0 : mt.zIndex) || 0) - Number((jt == null ? void 0 : jt.zIndex) || 0));
    for (const mt of J)
      if (!(!mt || mt.visible === !1)) {
        if (mt.type === "sticker") {
          const jt = Y({
            assetId: String(((tt = mt == null ? void 0 : mt.params) == null ? void 0 : tt.assetId) || (mt == null ? void 0 : mt.id) || ""),
            source: mt.source,
            revision: mt.revision
          });
          if (!jt) continue;
          const Tt = E1({
            yawDeg: ((it = mt == null ? void 0 : mt.transform) == null ? void 0 : it.yawDeg) || 0,
            pitchDeg: ((Q = mt == null ? void 0 : mt.transform) == null ? void 0 : Q.pitchDeg) || 0,
            rollDeg: ((_t = mt == null ? void 0 : mt.transform) == null ? void 0 : _t.rollDeg) || 0,
            hFovDeg: ((ft = mt == null ? void 0 : mt.transform) == null ? void 0 : ft.hFovDeg) || 30,
            vFovDeg: ((ht = mt == null ? void 0 : mt.transform) == null ? void 0 : ht.vFovDeg) || 30,
            crop: ((Pt = mt == null ? void 0 : mt.params) == null ? void 0 : Pt.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (mt == null ? void 0 : mt.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Lt(s), n.uniform1i(O.texture, 0), n.uniform1i(O.mode, K), n.uniform3f(O.viewRight, G.right.x, G.right.y, G.right.z), n.uniform3f(O.viewUp, G.up.x, G.up.y, G.up.z), n.uniform3f(O.viewFwd, G.fwd.x, G.fwd.y, G.fwd.z), n.uniform1f(O.viewHfov, Jt(Number(B.hFovDeg || 90), 0.1, 179) * fe), n.uniform1f(O.viewVfov, Jt(Number(B.vFovDeg || 60), 0.1, 179) * fe), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, jt), n.uniform3f(O.stickerRight, Tt.right.x, Tt.right.y, Tt.right.z), n.uniform3f(O.stickerUp, Tt.up.x, Tt.up.y, Tt.up.z), n.uniform3f(O.stickerFwd, Tt.fwd.x, Tt.fwd.y, Tt.fwd.z), n.uniform1f(O.stickerTanX, Math.max(1e-6, Tt.tanX)), n.uniform1f(O.stickerTanY, Math.max(1e-6, Tt.tanY)), n.uniform4f(
            O.crop,
            Jt(Number(Tt.crop.x0 ?? 0), 0, 1),
            Jt(Number(Tt.crop.y0 ?? 0), 0, 1),
            Jt(Number(Tt.crop.x1 ?? 1), 0, 1),
            Jt(Number(Tt.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(O.opacity, Tt.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (mt.type === "paint" || mt.type === "raster") {
          if (!Z(mt.source, mt.revision ?? "")) continue;
          lt("mask"), ie(I, {
            paintOpacity: Number(mt.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (mt.type === "mask") {
          if (!st(mt.source, mt.revision ?? "")) continue;
          lt("paint"), ie(I, {
            paintOpacity: 0,
            maskOpacity: Number(mt.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    lt("paint"), lt("mask");
  }
  function en(S) {
    return !St() || !b ? null : (Dt({
      mode: "panorama",
      yawDeg: (S == null ? void 0 : S.yawDeg) || 0,
      pitchDeg: (S == null ? void 0 : S.pitchDeg) || 0,
      fovDeg: (S == null ? void 0 : S.fovDeg) || 100
    }, S), e);
  }
  function g(S) {
    return !St() || !b ? null : (Dt({ mode: "unwrap" }, S), e);
  }
  function le(S) {
    return !St() || !b ? null : (Dt({
      mode: "cutout",
      yawDeg: (S == null ? void 0 : S.yawDeg) || 0,
      pitchDeg: (S == null ? void 0 : S.pitchDeg) || 0,
      rollDeg: (S == null ? void 0 : S.rollDeg) || 0,
      hFovDeg: (S == null ? void 0 : S.hFovDeg) || 90,
      vFovDeg: (S == null ? void 0 : S.vFovDeg) || 60
    }, S), e);
  }
  function Re(S = {}) {
    if (!T() || (V(S.width, S.height, S.dpr || 1), !St())) return null;
    const I = Object.prototype.hasOwnProperty.call(S, "backgroundSource"), F = Object.prototype.hasOwnProperty.call(S, "paintSource"), K = Object.prototype.hasOwnProperty.call(S, "maskSource"), B = Object.prototype.hasOwnProperty.call(S, "textures"), G = Object.prototype.hasOwnProperty.call(S, "scene");
    return I && at(S.backgroundSource, S.backgroundRevision ?? ""), F && Z(S.paintSource, S.paintRevision ?? ""), K && st(S.maskSource, S.maskRevision ?? ""), B && (ut(S.textures || []), $.textures = S.textures || []), G && ($.scene = S.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(S, "objectPass") && ($.objectPass = S.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(S, "backgroundOpacity") && ($.backgroundOpacity = Number(S.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(S, "showMaskTint") && ($.showMaskTint = S.showMaskTint === !0), Object.prototype.hasOwnProperty.call(S, "coverageDeg") && ($.coverageDeg = Number(S.coverageDeg || 360) === 180 ? 180 : 360), b && Dt(S.view, {
      ...S,
      backgroundOpacity: Number(S.backgroundOpacity ?? $.backgroundOpacity ?? 1),
      coverageDeg: Number(S.coverageDeg || $.coverageDeg || 360) === 180 ? 180 : 360
    }), Ne(
      $.objectPass || { objects: [] },
      S.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), e;
  }
  function We(S = {}) {
    return T() ? !!Re({
      ...S,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(S.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(e.width || 1),
      height: Number(e.height || 1),
      dpr: 1
    }) : !1;
  }
  function Pe(S, I, F) {
    const K = Math.max(1, Number((S == null ? void 0 : S.viewportWidth) || E.sourceWidth || E.width || 1)), B = Math.max(1, Number((S == null ? void 0 : S.viewportHeight) || E.sourceHeight || E.height || 1)), G = Number(I), J = Number(F);
    if (!Number.isFinite(G) || !Number.isFinite(J)) return null;
    if ((S == null ? void 0 : S.mode) === "unwrap")
      return { u: (G / K % 1 + 1) % 1, v: Jt(J / B, 0, 1) };
    const tt = gi(S, K, B);
    if (!tt) return null;
    const it = Ba(tt.yawDeg, tt.pitchDeg, tt.rollDeg), Q = (G - K * 0.5) / (K * 0.5) * Math.tan(Jt(tt.hFovDeg, 1, 179) * fe * 0.5), _t = (B * 0.5 - J) / (B * 0.5) * Math.tan(Jt(tt.vFovDeg, 0.1, 179) * fe * 0.5), ft = wi(ro(ro(Ur(it.right, Q), Ur(it.up, _t)), it.fwd));
    return {
      u: (Math.atan2(ft.x, ft.z) / pd + 0.5 + 1) % 1,
      v: Jt(0.5 - Math.asin(Jt(ft.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function At(S, I, F) {
    const K = Math.max(1, Number((S == null ? void 0 : S.viewportWidth) || E.sourceWidth || E.width || 1)), B = Math.max(1, Number((S == null ? void 0 : S.viewportHeight) || E.sourceHeight || E.height || 1));
    if ((S == null ? void 0 : S.mode) === "unwrap")
      return {
        x: (Number(I || 0) % 1 + 1) % 1 * K,
        y: Jt(Number(F || 0), 0, 1) * B,
        visible: !0
      };
    const G = gi(S, K, B);
    if (!G)
      return { x: K * 0.5, y: B * 0.5, visible: !1 };
    const J = Ba(G.yawDeg, G.pitchDeg, G.rollDeg), tt = P1(I, F), it = Ua(tt, J.right), Q = Ua(tt, J.up), _t = Ua(tt, J.fwd);
    if (_t <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const ft = K * 0.5 + it / _t * (K * 0.5 / Math.tan(Jt(G.hFovDeg, 1, 179) * fe * 0.5)), ht = B * 0.5 - Q / _t * (B * 0.5 / Math.tan(Jt(G.vFovDeg, 0.1, 179) * fe * 0.5));
    return { x: ft, y: ht, visible: ft >= 0 && ft <= K && ht >= 0 && ht <= B };
  }
  return {
    init: T,
    dispose: wt,
    setViewport: V,
    setBackgroundErp: at,
    setPaintErp: Z,
    setMaskErp: st,
    renderPanorama: en,
    renderUnwrap: g,
    renderCutout: le,
    renderScene: Re,
    syncState: We,
    screenToErpUv: Pe,
    erpUvToScreen: At,
    getCanvas() {
      return e;
    },
    isSupported() {
      return T();
    },
    getViewport() {
      return { ...E };
    }
  };
}
function hu(t, e = 1, n = 16384) {
  const r = Math.round(Number(t || e));
  return Math.min(n, Math.max(1, Number.isFinite(r) ? r : 1));
}
function T1() {
  const t = /* @__PURE__ */ new Map();
  function e(l) {
    return l != null ? String(l) : "default";
  }
  function n(l, f, h) {
    const y = e(l);
    let b = t.get(y) || null;
    if (!b) {
      const M = document.createElement("canvas"), E = M.getContext("2d");
      if (!E) return null;
      b = {
        id: y,
        canvas: M,
        ctx: E,
        width: 0,
        height: 0
      }, t.set(y, b);
    }
    const p = hu(f), w = hu(h);
    return b.width !== p && (b.canvas.width = p, b.width = p), b.height !== w && (b.canvas.height = w, b.height = w), b;
  }
  function r(l) {
    return t.get(e(l)) || null;
  }
  function a(l) {
    const f = r(l);
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
const L1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), O1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function gd(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function R1(t, e) {
  return t === "paint" || t === "mask" || t === "raster" ? !1 : e !== !1;
}
function F1(t = {}) {
  const e = O1.has(String((t == null ? void 0 : t.type) || "")) ? String(t.type) : "erp_image", n = Number((t == null ? void 0 : t.opacity) ?? 1);
  return {
    type: e,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    coverageDeg: Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? gd(n, 0, 1) : 1,
    visible: (t == null ? void 0 : t.visible) !== !1
  };
}
function V1(t = {}) {
  const e = String((t == null ? void 0 : t.type) || "");
  if (!L1.has(e)) return null;
  const n = Number((t == null ? void 0 : t.opacity) ?? 1), r = Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0);
  return {
    id: String((t == null ? void 0 : t.id) || ""),
    type: e,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    visible: (t == null ? void 0 : t.visible) !== !1,
    opacity: Number.isFinite(n) ? gd(n, 0, 1) : 1,
    zIndex: Number.isFinite(r) ? r : 0,
    coverageAware: R1(e, t == null ? void 0 : t.coverageAware),
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  };
}
function H1(t = {}) {
  return {
    objects: (Array.isArray(t == null ? void 0 : t.objects) ? t.objects : []).map((r) => V1(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const s = Number((r == null ? void 0 : r.zIndex) || 0), l = Number((a == null ? void 0 : a.zIndex) || 0);
      return s !== l ? s - l : String((r == null ? void 0 : r.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (t == null ? void 0 : t.selectedId) ?? null,
    hoveredId: (t == null ? void 0 : t.hoveredId) ?? null
  };
}
function io(t = {}) {
  return {
    stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
    background: F1((t == null ? void 0 : t.background) || {}),
    objectPass: H1((t == null ? void 0 : t.objectPass) || {}),
    overlay: t != null && t.overlay && typeof t.overlay == "object" ? { ...t.overlay } : {}
  };
}
function z1(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function yc(t = {}, e = "paint") {
  const n = String((t == null ? void 0 : t.type) || e), r = Number((t == null ? void 0 : t.zIndex) ?? (t == null ? void 0 : t.z_index) ?? 0), a = Number((t == null ? void 0 : t.opacity) ?? 1);
  return {
    id: String((t == null ? void 0 : t.id) || `${n}_layer`),
    type: n,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    zIndex: Number.isFinite(r) ? r : 0,
    opacity: Number.isFinite(a) ? z1(a, 0, 1) : 1,
    visible: (t == null ? void 0 : t.visible) !== !1,
    coverageAware: !1,
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  };
}
function $1(t, e, n = {}) {
  return t ? yc({
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
function j1(t, e, n = {}) {
  return t ? yc({
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
function U1(t, e, n = {}) {
  return t ? yc({
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
function md(t = {}) {
  const e = [], n = $1(t == null ? void 0 : t.paintSource, t == null ? void 0 : t.paintRevision, t == null ? void 0 : t.paintOptions), r = j1(t == null ? void 0 : t.maskSource, t == null ? void 0 : t.maskRevision, t == null ? void 0 : t.maskOptions), a = Array.isArray(t == null ? void 0 : t.rasterEntries) ? t.rasterEntries : [];
  return n && e.push(n), r && e.push(r), a.forEach((s, l) => {
    const f = U1(
      (s == null ? void 0 : s.source) || null,
      (s == null ? void 0 : s.revision) || "",
      {
        id: String((s == null ? void 0 : s.id) || `raster_layer_${l}`),
        zIndex: Number((s == null ? void 0 : s.zIndex) ?? (s == null ? void 0 : s.z_index) ?? 90),
        opacity: Number((s == null ? void 0 : s.opacity) ?? 1),
        visible: (s == null ? void 0 : s.visible) !== !1,
        transform: (s == null ? void 0 : s.transform) || null,
        params: (s == null ? void 0 : s.params) || {}
      }
    );
    f && e.push(f);
  }), e.sort((s, l) => {
    const f = Number((s == null ? void 0 : s.zIndex) || 0), h = Number((l == null ? void 0 : l.zIndex) || 0);
    return f !== h ? f - h : String((s == null ? void 0 : s.id) || "").localeCompare(String((l == null ? void 0 : l.id) || ""));
  });
}
function vc(t, e) {
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
function Eo(t = {}) {
  const e = (t == null ? void 0 : t.backgroundSource) || null, n = Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360, r = String((t == null ? void 0 : t.stateRevision) || ""), a = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, s = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], l = String((t == null ? void 0 : t.backgroundRevision) || [
    String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
    Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
    Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
  ].join("|"));
  return io({
    stateRevision: r,
    background: {
      type: "erp_image",
      source: e,
      revision: l,
      coverageDeg: n,
      opacity: Number((t == null ? void 0 : t.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (a == null ? void 0 : a.selectedId) ?? null,
      hoveredId: (a == null ? void 0 : a.hoveredId) ?? null,
      objects: vc(a, s)
    },
    overlay: {
      showMaskTint: (t == null ? void 0 : t.showMaskTint) === !0
    }
  });
}
function pu(t = {}) {
  const e = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], r = vc(e, n), a = md({
    paintSource: (t == null ? void 0 : t.paintSource) || null,
    paintRevision: (t == null ? void 0 : t.paintRevision) || "",
    paintOptions: (t == null ? void 0 : t.paintOptions) || null,
    maskSource: (t == null ? void 0 : t.maskSource) || null,
    maskRevision: (t == null ? void 0 : t.maskRevision) || "",
    maskOptions: (t == null ? void 0 : t.maskOptions) || null,
    rasterEntries: (t == null ? void 0 : t.rasterEntries) || []
  });
  return io({
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
function B1(t = {}) {
  var s, l, f, h, y, b, p, w;
  if (t != null && t.background || t != null && t.objectPass || t != null && t.overlay) {
    const M = io(t), E = Array.isArray((s = M.objectPass) == null ? void 0 : s.objects) ? M.objectPass.objects : [], L = {
      stickers: E.filter((A) => A.type === "sticker").map((A) => {
        var D, $, ot, dt, T, wt, V, lt, xt, Mt, at, Z, st;
        return {
          id: A.id,
          assetId: String(((D = A == null ? void 0 : A.params) == null ? void 0 : D.assetId) || (($ = A == null ? void 0 : A.params) == null ? void 0 : $.asset_id) || (A == null ? void 0 : A.id) || ""),
          yawDeg: Number(((ot = A == null ? void 0 : A.transform) == null ? void 0 : ot.yawDeg) ?? ((dt = A == null ? void 0 : A.params) == null ? void 0 : dt.yawDeg) ?? 0),
          pitchDeg: Number(((T = A == null ? void 0 : A.transform) == null ? void 0 : T.pitchDeg) ?? ((wt = A == null ? void 0 : A.params) == null ? void 0 : wt.pitchDeg) ?? 0),
          rollDeg: Number(((V = A == null ? void 0 : A.transform) == null ? void 0 : V.rollDeg) ?? ((lt = A == null ? void 0 : A.params) == null ? void 0 : lt.rollDeg) ?? 0),
          hFovDeg: Number(((xt = A == null ? void 0 : A.transform) == null ? void 0 : xt.hFovDeg) ?? ((Mt = A == null ? void 0 : A.params) == null ? void 0 : Mt.hFovDeg) ?? 30),
          vFovDeg: Number(((at = A == null ? void 0 : A.transform) == null ? void 0 : at.vFovDeg) ?? ((Z = A == null ? void 0 : A.params) == null ? void 0 : Z.vFovDeg) ?? 30),
          crop: ((st = A == null ? void 0 : A.params) == null ? void 0 : st.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((A == null ? void 0 : A.opacity) ?? 1),
          visible: (A == null ? void 0 : A.visible) !== !1,
          zIndex: Number((A == null ? void 0 : A.zIndex) ?? 0)
        };
      }),
      selectedId: ((l = M.objectPass) == null ? void 0 : l.selectedId) ?? null,
      hoveredId: ((f = M.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, R = E.filter((A) => A.type === "sticker").map((A) => {
      var D, $;
      return {
        assetId: String(((D = A == null ? void 0 : A.params) == null ? void 0 : D.assetId) || (($ = A == null ? void 0 : A.params) == null ? void 0 : $.asset_id) || (A == null ? void 0 : A.id) || ""),
        source: A.source || null,
        revision: String((A == null ? void 0 : A.revision) || "")
      };
    }).filter((A) => A.assetId && A.source), O = E.find((A) => A.type === "paint") || null, C = E.find((A) => A.type === "mask") || null;
    return {
      stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
      backgroundSource: ((h = M.background) == null ? void 0 : h.source) || null,
      backgroundRevision: String(((y = M.background) == null ? void 0 : y.revision) || ""),
      coverageDeg: Number(((b = M.background) == null ? void 0 : b.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (O == null ? void 0 : O.source) || null,
      paintRevision: String((O == null ? void 0 : O.revision) || ""),
      maskSource: (C == null ? void 0 : C.source) || null,
      maskRevision: String((C == null ? void 0 : C.revision) || ""),
      textures: R,
      scene: L,
      objectPass: M.objectPass,
      backgroundOpacity: Number(((p = M.background) == null ? void 0 : p.opacity) ?? 1),
      showMaskTint: ((w = t == null ? void 0 : t.overlay) == null ? void 0 : w.showMaskTint) === !0
    };
  }
  const e = t.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t.textures) ? t.textures : [], r = t.layers || {}, a = io({
    objectPass: {
      selectedId: (e == null ? void 0 : e.selectedId) ?? null,
      hoveredId: (e == null ? void 0 : e.hoveredId) ?? null,
      objects: [
        ...vc(e, n),
        ...md({
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
function G1(t) {
  let e = null;
  function n(s = {}) {
    const l = B1(s);
    return t.syncState({
      stateRevision: l.stateRevision,
      backgroundSource: l.backgroundSource,
      backgroundRevision: l.backgroundRevision,
      coverageDeg: l.coverageDeg,
      paintSource: l.paintSource,
      paintRevision: l.paintRevision,
      maskSource: l.maskSource,
      maskRevision: l.maskRevision,
      textures: l.textures,
      scene: l.scene,
      objectPass: l.objectPass,
      backgroundOpacity: l.backgroundOpacity,
      showMaskTint: l.showMaskTint
    }) ? (e = l, !0) : !1;
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
function qi(t = {}) {
  const e = typeof (t == null ? void 0 : t.rendererFactory) == "function" ? t.rendererFactory : (R) => D1(R), n = typeof (t == null ? void 0 : t.targetPoolFactory) == "function" ? t.targetPoolFactory : () => T1(), r = typeof (t == null ? void 0 : t.stateControllerFactory) == "function" ? t.stateControllerFactory : (R) => G1(R), a = e(t), s = (t == null ? void 0 : t.targetCanvas) || null, l = n();
  let f = null;
  const h = r({
    syncState(R = {}) {
      if (typeof a.syncState == "function") {
        const O = { ...R }, C = a.syncState(O);
        return C && (f = O, C);
      }
      return f = { ...R }, !0;
    }
  });
  function y(R = {}) {
    return h.sync(R);
  }
  function b(R = {}, O = {}) {
    return f ? a.renderScene({
      ...f,
      view: R,
      width: O.width,
      height: O.height,
      dpr: O.dpr,
      backgroundOpacity: O.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: O.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function p(R, O, C = {}, A = {}) {
    if (!O) return !1;
    const D = b(C, {
      ...A,
      width: O.w,
      height: O.h
    });
    return D ? R ? (R.canvas && D === R.canvas || R.drawImage(D, O.x, O.y, O.w, O.h), !0) : !!s && D === s : !1;
  }
  function w(R, O = {}, C = {}) {
    const A = Number(C.width || 0), D = Number(C.height || 0);
    if (!(A > 0) || !(D > 0)) return null;
    const $ = l.ensureTarget(R, A, D);
    if (!$) return null;
    const ot = b(O, {
      ...C,
      width: A,
      height: D
    });
    return ot ? ($.ctx.clearRect(0, 0, $.canvas.width, $.canvas.height), $.ctx.drawImage(ot, 0, 0, $.canvas.width, $.canvas.height), $.canvas) : null;
  }
  function M(R) {
    l.clearTarget(R);
  }
  function E() {
    var R;
    l.dispose(), (R = a.dispose) == null || R.call(a), f = null;
  }
  function L() {
    f = null, h.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: y,
    renderView: b,
    renderToContext: p,
    renderToTarget: w,
    clearTarget: M,
    snapshotState: h.snapshot,
    clearState: L,
    dispose: E
  };
}
function zr(t, e) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(t)), n.height = Math.max(1, Math.round(e));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function K1() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function gu(t, e = 8) {
  var b;
  const n = (b = t == null ? void 0 : t.getContext) == null ? void 0 : b.call(t, "2d"), r = Number((t == null ? void 0 : t.width) || 0), a = Number((t == null ? void 0 : t.height) || 0);
  if (!n || r < 1 || a < 1) return null;
  const s = n.getImageData(0, 0, r, a).data;
  let l = r, f = a, h = -1, y = -1;
  for (let p = 0; p < a; p += 1)
    for (let w = 0; w < r; w += 1)
      s[(p * r + w) * 4 + 3] <= e || (w < l && (l = w), p < f && (f = p), w > h && (h = w), p > y && (y = p));
  return h < l || y < f ? null : {
    minX: l,
    minY: f,
    maxX: h,
    maxY: y,
    width: h - l + 1,
    height: y - f + 1,
    aspect: Number(((h - l + 1) / Math.max(1, y - f + 1)).toFixed(4))
  };
}
function bc(t, e) {
  const n = Math.max(1, Math.ceil(t)), r = Math.max(1, Math.ceil(e));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const a = document.createElement("canvas");
  return a.width = n, a.height = r, a;
}
function Pn(t, e, n) {
  if (!t) return zr(e, n);
  const r = Math.max(1, Math.round(e)), a = Math.max(1, Math.round(n));
  return (t.canvas.width !== r || t.canvas.height !== a) && (t.canvas.width = r, t.canvas.height = a, t.ctx.imageSmoothingEnabled = !0), t;
}
function ae(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let xs = null, ws = null, mu = null, yu = null, qt = null, mi = null, Ve = null, er = null;
function W1() {
  if (ws) return ws;
  const t = 6, e = 17, n = document.createElement("canvas");
  n.width = e, n.height = e;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e, e), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = t, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(e, e), r.moveTo(-e / 2, e / 2), r.lineTo(e / 2, e + e / 2), r.moveTo(e / 2, -e / 2), r.lineTo(e + e / 2, e / 2), r.stroke(), ws = n, n;
}
function Or(t, e) {
  if (!t || !e) return;
  const n = e.width, r = e.height;
  xs = Pn(xs, n, r);
  const a = xs;
  ae(a), a.ctx.drawImage(e, 0, 0), a.ctx.globalCompositeOperation = "source-in", yu !== a.ctx && (mu = a.ctx.createPattern(W1(), "repeat"), yu = a.ctx), a.ctx.fillStyle = mu, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(a.canvas, 0, 0), t.restore();
}
function Y1(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function q1(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function X1(t, e) {
  const n = Number(t == null ? void 0 : t.radiusValue), r = String((t == null ? void 0 : t.radiusModel) || "").trim(), a = (e == null ? void 0 : e.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function Z1(t, e) {
  const n = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * e * 2);
  const r = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * e * 2);
}
const ce = /* @__PURE__ */ new Map(), _c = 128;
function J1(t, e, n, r, a, s) {
  const l = Math.max(1, Math.round(t)), f = Math.max(0, Math.min(1, e)), h = `${l}:${f.toFixed(2)}:${n}:${r}:${a}:${s.toFixed(3)}`;
  if (ce.has(h)) {
    const C = ce.get(h);
    return ce.delete(h), ce.set(h, C), C;
  }
  ce.size >= _c && ce.delete(ce.keys().next().value);
  const y = l * 2 + 2, b = l + 1, p = bc(y, y), w = p.getContext("2d"), M = f * l, E = l + 1, L = `rgba(${n},${r},${a},${s})`, R = `rgba(${n},${r},${a},0)`, O = w.createRadialGradient(b, b, M, b, b, E);
  return O.addColorStop(0, L), O.addColorStop(1, R), w.fillStyle = O, w.fillRect(0, 0, y, y), ce.set(h, p), p;
}
function Q1(t, e, n, r, a, s, l) {
  const { r: f, g: h, b: y, a: b } = r, p = Math.max(2, Math.ceil(t) * 2), w = Math.max(2, Math.ceil(e) * 2), M = Math.max(0, a), E = Math.max(0, Math.min(0.99, s)), L = Math.max(0, Math.min(1, l ?? 0)), R = `chisel:${p}:${w}:${n.toFixed(2)}:${f}:${h}:${y}:${b.toFixed(3)}:${M.toFixed(2)}:${E.toFixed(2)}:${L.toFixed(2)}`;
  if (ce.has(R)) {
    const T = ce.get(R);
    return ce.delete(R), ce.set(R, T), T;
  }
  ce.size >= _c && ce.delete(ce.keys().next().value);
  const O = bc(p, w), C = O.getContext("2d"), A = C.createImageData(p, w), D = A.data, $ = Math.max(0, t - e), ot = Math.max(0, Math.min(1, n)), dt = 1 + M;
  for (let T = 0; T < w; T++)
    for (let wt = 0; wt < p; wt++) {
      const V = wt + 0.5 - t, lt = T + 0.5 - e, xt = Math.max(Math.abs(V) - $, 0), at = Math.hypot(xt, lt) / e;
      if (at >= 1) continue;
      const Z = at <= ot ? 1 : Math.max(0, (1 - at) / Math.max(1e-4, 1 - ot)), st = 1 - at, pt = 1 + M * (1 - st) * (1 - st), Y = 1 - E * st * st, ut = pt * Y / dt;
      let St = 1;
      if (L > 0) {
        const ie = Math.floor((lt + e) / 1.5), Ne = Math.floor((V + t) / 8), en = xr(qr(ie * 41 + 500, Ne * 19 + 300));
        St = 1 - L * 0.42 * en;
      }
      const Lt = Math.round(255 * Math.min(1, b * Z * ut * St));
      if (Lt <= 0) continue;
      const Dt = (T * p + wt) * 4;
      D[Dt] = f, D[Dt + 1] = h, D[Dt + 2] = y, D[Dt + 3] = Lt;
    }
  return C.putImageData(A, 0, 0), ce.set(R, O), O;
}
function qr(t, e) {
  const n = Math.trunc(Math.round(t * 4)), r = Math.trunc(Math.round(e * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a >>> 0;
}
function xr(t) {
  let e = t + 1831565813 >>> 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function tm(t, e, n, r, a, s, l) {
  const f = t + 0.5 - n, h = e + 0.5 - r, y = Math.max(0, n - r), b = Math.max(Math.abs(f) - y, 0), p = Math.hypot(b, h) / r;
  if (p >= 1) return 0;
  const w = xr(qr(t * 17 + 3, e * 13 + 7)), M = p + s * 0.22 * (w - 0.5);
  if (M >= 1) return 0;
  const E = M <= a ? 1 : Math.max(0, (1 - M) / Math.max(1e-4, 1 - a)), L = em(t, e, f, h, n, r), R = s * 0.55;
  if (L < R) return 0;
  const C = 0.45 + 0.55 * ((L - R) / Math.max(1e-4, 1 - R));
  return Math.round(255 * Math.min(1, l * E * C));
}
function em(t, e, n, r, a, s) {
  const l = Math.floor((n + a) / 3), f = Math.floor((r + s) / 2), h = xr(qr(l * 13 + 700, f * 17 + 400)), y = Math.floor((n + a) / 1.5), b = Math.floor((r + s) / 1.5), p = xr(qr(y * 23 + 800, b * 29 + 500)), w = xr(qr(t * 3 + 100, e * 5 + 200));
  return h * 0.55 + p * 0.3 + w * 0.15;
}
function nm(t, e, n, r, a) {
  const { r: s, g: l, b: f, a: h } = r, y = Math.max(2, Math.ceil(t) * 2), b = Math.max(2, Math.ceil(e) * 2), p = Math.max(0, Math.min(1, a)), w = `crayon:${y}:${b}:${n.toFixed(2)}:${s}:${l}:${f}:${h.toFixed(3)}:${p.toFixed(2)}`;
  if (ce.has(w)) {
    const C = ce.get(w);
    return ce.delete(w), ce.set(w, C), C;
  }
  ce.size >= _c && ce.delete(ce.keys().next().value);
  const M = bc(y, b), E = M.getContext("2d"), L = E.createImageData(y, b), R = L.data, O = Math.max(0, Math.min(1, n));
  for (let C = 0; C < b; C++)
    for (let A = 0; A < y; A++) {
      const D = tm(A, C, t, e, O, p, h);
      if (D <= 0) continue;
      const $ = (C * y + A) * 4;
      R[$] = s, R[$ + 1] = l, R[$ + 2] = f, R[$ + 3] = D;
    }
  return E.putImageData(L, 0, 0), ce.set(w, M), M;
}
function yd(t, e, n) {
  var L, R;
  const r = String((e == null ? void 0 : e.stampKind) || "round"), a = X1(e, n), s = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), l = rm(e), f = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), h = Number(((L = e == null ? void 0 : e.angle) == null ? void 0 : L.value) ?? 0), y = Z1(e, a), b = String(((R = e == null ? void 0 : e.targetSpace) == null ? void 0 : R.viewMode) || ""), p = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && b !== "unwrap", w = e == null ? void 0 : e.scatter, M = w ? { radius: Number(w.radius ?? 1.5), count: Math.max(1, Math.round(w.count ?? 6)) } : null;
  let E;
  if (r === "chisel") {
    const O = a * f, C = a, A = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), D = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), $ = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    E = Q1(O, C, s, l, A, D, $);
  } else if (r === "crayon") {
    const O = a * f, C = a, A = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    E = nm(O, C, s, l, A);
  } else
    E = J1(a, s, l.r, l.g, l.b, l.a);
  return { ctx: t, stampTex: E, radiusPx: a, spacingPx: y, desc: n, aspect: f, angle: h, stampKind: r, scatter: M, latitudeCorrection: p };
}
function rm(t) {
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
function im(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const r = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${a})`;
}
function vu(t, e, n, r, a) {
  const s = t.angle, l = t.desc.width;
  function f(y, b) {
    s === 0 ? t.ctx.drawImage(t.stampTex, y - a, b - r, a * 2, r * 2) : (t.ctx.save(), t.ctx.translate(y, b), t.ctx.rotate(s), t.ctx.drawImage(t.stampTex, -a, -r, a * 2, r * 2), t.ctx.restore());
  }
  f(e, n);
  const h = s === 0 ? a : a * Math.abs(Math.cos(s)) + r * Math.abs(Math.sin(s));
  e - h < 0 && f(e + l, n), e + h > l && f(e - l, n);
}
function xc(t, e, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (t.scatter) {
    const { radius: y, count: b } = t.scatter, p = y * t.radiusPx * a, w = qr(e, n);
    for (let M = 0; M < b; M++) {
      const E = xr(w + M * 2) * Math.PI * 2, L = Math.sqrt(xr(w + M * 2 + 1)) * p, R = e + Math.cos(E) * L, O = n + Math.sin(E) * L, C = Math.max(0.5, t.radiusPx * a * 0.48), A = (0.5 - O / Math.max(1, t.desc.height)) * Math.PI, D = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(A)) : 1, $ = C * t.aspect * D;
      vu(t, R, O, C, $);
    }
    return;
  }
  const s = Math.max(0.5, t.radiusPx * a), l = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, f = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(l)) : 1, h = s * t.aspect * f;
  vu(t, e, n, s, h);
}
function bu(t, e, n) {
  const r = q1(e);
  if (!t || r.length === 0) return;
  const a = n.width, s = n.height, l = yd(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const f = [];
  for (let w = 0; w < r.length; w++) {
    let M = Number(r[w].u || 0) * a;
    const E = Number(r[w].v || 0) * s;
    w > 0 && Math.abs(M - f[w - 1].x) > a * 0.5 && (M += M < f[w - 1].x ? a : -a), f.push({ x: M, y: E });
  }
  if (xc(l, f[0].x, f[0].y, 1), f.length === 1) {
    t.restore();
    return;
  }
  let h = f[0], y = f[0], b = f[0], p = 0;
  for (let w = 1; w < f.length; w++) {
    const M = f[w], E = { x: (y.x + M.x) * 0.5, y: (y.y + M.y) * 0.5 };
    w === 1 ? p = Bi(l, b.x, b.y, E.x, E.y, p) : p = ao(l, h, b, E, M, p), h = y, y = M, b = E;
  }
  f.length === 2 ? Bi(l, b.x, b.y, y.x, y.y, p) : ao(l, h, b, y, y, p), t.restore();
}
function Ga(t, e, n) {
  var p;
  const r = Array.isArray((p = e == null ? void 0 : e.geometry) == null ? void 0 : p.points) ? e.geometry.points : [];
  if (!t || r.length < 3) return;
  const a = n.width, s = n.height, l = im(e), f = [];
  let h = 1 / 0, y = -1 / 0;
  for (let w = 0; w < r.length; w++) {
    const M = Y1(r[w]);
    let E = Number(M.x || 0) * a;
    w > 0 && Math.abs(E - f[w - 1].x) > a * 0.5 && (E += E < f[w - 1].x ? a : -a), f.push({ x: E, y: Number(M.y || 0) * s }), E < h && (h = E), E > y && (y = E);
  }
  function b(w) {
    t.beginPath(), t.moveTo(f[0].x + w, f[0].y);
    for (let M = 1; M < f.length; M++) t.lineTo(f[M].x + w, f[M].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = l, b(0), h < 0 && b(a), y > a && b(-a), t.restore();
}
function xa(t, e, n) {
  var l;
  if (String(((l = e == null ? void 0 : e.geometry) == null ? void 0 : l.geometryKind) || "") === "lasso_fill") {
    Ga(t, e, n);
    return;
  }
  const s = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  s >= 0.999 ? bu(t, e, n) : (mi = Pn(mi, n.width, n.height), ae(mi), bu(mi.ctx, e, n), t.save(), t.globalAlpha = s, t.drawImage(mi.canvas, 0, 0), t.restore());
}
function nr(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function Bi(t, e, n, r, a, s) {
  const l = r - e, f = a - n, h = Math.hypot(l, f);
  if (h < 1e-9) return s;
  let y = t.spacingPx - s;
  for (; y <= h; ) {
    const b = y / h;
    xc(t, e + l * b, n + f * b, 1), y += t.spacingPx;
  }
  return h - y + t.spacingPx;
}
function ao(t, e, n, r, a, s) {
  const f = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, h = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, b = 0, p = f, w = p + h, M = w + y, E = w - p, L = 16;
  let R = s, O = n.x, C = n.y;
  for (let A = 1; A <= L; A++) {
    const D = p + E * A / L, $ = ((p - D) * e.x + (D - b) * n.x) / (p - b), ot = ((p - D) * e.y + (D - b) * n.y) / (p - b), dt = ((w - D) * n.x + (D - p) * r.x) / (w - p), T = ((w - D) * n.y + (D - p) * r.y) / (w - p), wt = ((M - D) * r.x + (D - w) * a.x) / (M - w), V = ((M - D) * r.y + (D - w) * a.y) / (M - w), lt = ((w - D) * $ + (D - b) * dt) / (w - b), xt = ((w - D) * ot + (D - b) * T) / (w - b), Mt = ((M - D) * dt + (D - p) * wt) / (M - p), at = ((M - D) * T + (D - p) * V) / (M - p), Z = ((w - D) * lt + (D - p) * Mt) / (w - p), st = ((w - D) * xt + (D - p) * at) / (w - p);
    R = Bi(t, O, C, Z, st, R), O = Z, C = st;
  }
  return R;
}
function am(t, e, n, r) {
  const a = t.currentStroke.ctx;
  if (!a) return;
  const s = t.descriptor, l = s.width, f = n * s.height, h = t.activeStroke;
  let y = e * l;
  if (h && Math.abs(y - h.prev.x) > l * 0.5 && (y += y < h.prev.x ? l : -l), !h) {
    const M = yd(a, r, s), E = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), L = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), R = String((r == null ? void 0 : r.toolKind) || "") === "eraser", O = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", xc(M, y, f, 1), t.activeStroke = {
      pprev: { x: y, y: f },
      prev: { x: y, y: f },
      lastMidX: y,
      lastMidY: f,
      stampTex: M.stampTex,
      radiusPx: M.radiusPx,
      spacingPx: M.spacingPx,
      aspect: M.aspect,
      angle: M.angle,
      stampKind: M.stampKind,
      scatter: M.scatter,
      latitudeCorrection: M.latitudeCorrection,
      strokeOpacity: E,
      velocityWidthFactor: L,
      distSinceStamp: 0,
      isEraser: R,
      layerKind: O,
      pointCount: 1
    }, t.displayDirty = !0;
    return;
  }
  const b = (h.prev.x + y) * 0.5, p = (h.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const w = {
    ctx: a,
    stampTex: h.stampTex,
    radiusPx: h.radiusPx,
    spacingPx: h.spacingPx,
    desc: s,
    aspect: h.aspect,
    angle: h.angle,
    stampKind: h.stampKind,
    scatter: h.scatter,
    latitudeCorrection: h.latitudeCorrection
  };
  h.pointCount === 1 ? h.distSinceStamp = Bi(w, h.lastMidX, h.lastMidY, b, p, h.distSinceStamp) : h.distSinceStamp = ao(
    w,
    h.pprev,
    { x: h.lastMidX, y: h.lastMidY },
    { x: b, y: p },
    { x: y, y: f },
    h.distSinceStamp
  ), h.pprev = h.prev, h.prev = { x: y, y: f }, h.lastMidX = b, h.lastMidY = p, h.pointCount++, t.displayDirty = !0;
}
function Us(t = {}) {
  const e = Math.max(1, Math.round(Number((t == null ? void 0 : t.width) || 2048))), n = Math.max(1, Math.round(Number((t == null ? void 0 : t.height) || 1024))), r = { kind: "ERP_GLOBAL", width: e, height: n }, a = /* @__PURE__ */ new Map(), s = zr(e, n), l = {
    descriptor: r,
    committedMask: zr(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: zr(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, h = zr(e, n);
  let y = null, b = "", p = null;
  function w(V) {
    return {
      actionGroupId: V,
      descriptor: r,
      committedPaint: zr(e, n),
      currentStroke: s,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function M(V) {
    let lt = a.get(V);
    return lt || (lt = w(V), a.set(V, lt)), lt;
  }
  function E(V) {
    return b === "mask" ? l : y ? M(y) : f;
  }
  function L(V) {
    var Y;
    const lt = !p || p.length !== V.length || V.some((ut, St) => ut !== p[St]), xt = b === "paint" && ((Y = y ? a.get(y) : f) == null ? void 0 : Y.activeStroke) || null, Mt = b === "mask", at = l.activeStroke;
    let Z = l.displayDirty || f.displayDirty || lt;
    for (const ut of V) {
      const St = a.get(ut);
      if (St != null && St.displayDirty) {
        Z = !0;
        break;
      }
    }
    if ((xt || Mt && at) && (Z = !0), !Z) return;
    l.displayDirty = !1, f.displayDirty = !1;
    for (const ut of V) {
      const St = a.get(ut);
      St && (St.displayDirty = !1);
    }
    p = [...V];
    const st = h.ctx;
    ae(h);
    const pt = !!(xt != null && xt.isEraser);
    for (const ut of V) {
      const St = a.get(ut);
      if (!St) continue;
      const Dt = y === St.actionGroupId && b === "paint" ? St.activeStroke : null;
      if (pt)
        qt = Pn(qt, e, n), ae(qt), qt.ctx.drawImage(St.committedPaint.canvas, 0, 0), nr(qt.ctx, s.canvas), st.drawImage(qt.canvas, 0, 0);
      else if (st.drawImage(St.committedPaint.canvas, 0, 0), Dt) {
        const ie = St.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Dt.strokeOpacity ?? 1));
        st.save(), st.globalAlpha = ie, st.drawImage(s.canvas, 0, 0), st.restore();
      }
    }
    Mt && (at != null && at.isEraser) ? (qt = Pn(qt, e, n), ae(qt), qt.ctx.drawImage(l.committedMask.canvas, 0, 0), nr(qt.ctx, s.canvas), Or(st, qt.canvas)) : (Or(st, l.committedMask.canvas), Mt && at && Or(st, s.canvas));
  }
  function R(V) {
    var xt, Mt, at, Z, st;
    for (const pt of a.values())
      ae(pt.committedPaint), ae(pt.currentStroke), pt.activeStroke = null, pt.displayDirty = !0;
    ae(l.committedMask), ae(l.currentStroke), l.activeStroke = null, l.displayDirty = !0, f.displayDirty = !0, p = null;
    const lt = [
      ...Array.isArray((Mt = (xt = V == null ? void 0 : V.painting) == null ? void 0 : xt.paint) == null ? void 0 : Mt.strokes) ? V.painting.paint.strokes : [],
      ...Array.isArray((Z = (at = V == null ? void 0 : V.painting) == null ? void 0 : at.mask) == null ? void 0 : Z.strokes) ? V.painting.mask.strokes : []
    ];
    for (const pt of lt) {
      if (((st = pt == null ? void 0 : pt.targetSpace) == null ? void 0 : st.kind) !== "ERP_GLOBAL") continue;
      const Y = String((pt == null ? void 0 : pt.layerKind) || "paint"), St = String((pt == null ? void 0 : pt.toolKind) || "pen") === "eraser";
      if (Y === "mask") {
        const Lt = l.descriptor;
        St ? (qt = Pn(qt, Lt.width, Lt.height), ae(qt), xa(qt.ctx, pt, Lt), nr(l.committedMask.ctx, qt.canvas)) : xa(l.committedMask.ctx, pt, Lt);
        continue;
      }
      if (St) {
        qt = Pn(qt, r.width, r.height), ae(qt), xa(qt.ctx, pt, r);
        for (const Lt of a.values())
          nr(Lt.committedPaint.ctx, qt.canvas), Lt.displayDirty = !0;
      } else {
        const Lt = String((pt == null ? void 0 : pt.actionGroupId) || "__default__"), Dt = M(Lt), ie = Dt.descriptor;
        xa(Dt.committedPaint.ctx, pt, ie), Dt.displayDirty = !0;
      }
    }
    L([...a.keys()]);
  }
  function O(V, lt) {
    b = String((V == null ? void 0 : V.layerKind) || "");
    const xt = String((V == null ? void 0 : V.toolKind) || "") === "eraser";
    if (b === "mask")
      y = null, ae(l.currentStroke), l.activeStroke = null, l.displayDirty = !0;
    else {
      const Mt = xt ? f : M(String((V == null ? void 0 : V.actionGroupId) || "__default__"));
      y = xt ? "" : String((V == null ? void 0 : V.actionGroupId) || "__default__"), ae(Mt.currentStroke), Mt.activeStroke = null, Mt.displayDirty = !0;
    }
  }
  function C(V, lt) {
    var Y;
    const xt = String((V == null ? void 0 : V.layerKind) || "paint"), Mt = String((V == null ? void 0 : V.toolKind) || "") === "eraser", at = xt === "mask" ? l : Mt ? f : M(String((V == null ? void 0 : V.actionGroupId) || y || "__default__")), Z = at.activeStroke, st = at.descriptor;
    if (Z && Z.pointCount > 1) {
      const ut = at.currentStroke.ctx;
      ut.globalCompositeOperation = "source-over";
      const St = {
        ctx: ut,
        stampTex: Z.stampTex,
        radiusPx: Z.radiusPx,
        spacingPx: Z.spacingPx,
        desc: st,
        aspect: Z.aspect,
        angle: Z.angle,
        stampKind: Z.stampKind,
        scatter: Z.scatter,
        latitudeCorrection: Z.latitudeCorrection
      };
      Z.pointCount === 2 ? Bi(St, Z.lastMidX, Z.lastMidY, Z.prev.x, Z.prev.y, Z.distSinceStamp) : ao(St, Z.pprev, { x: Z.lastMidX, y: Z.lastMidY }, Z.prev, Z.prev, Z.distSinceStamp);
    }
    at.lassoPreviewActive && (ae(at.currentStroke), Ga(at.currentStroke.ctx, V, st), at.lassoPreviewActive = !1);
    const pt = xt === "mask" ? l.committedMask : at.committedPaint;
    if (Mt && xt === "paint")
      for (const ut of a.values())
        nr(ut.committedPaint.ctx, at.currentStroke.canvas), ut.displayDirty = !0;
    else if (Mt)
      nr(pt.ctx, at.currentStroke.canvas);
    else {
      const ut = Math.max(0, Math.min(1, (Z == null ? void 0 : Z.strokeOpacity) ?? 1));
      pt.ctx.save(), pt.ctx.globalAlpha = ut, pt.ctx.drawImage(at.currentStroke.canvas, 0, 0), pt.ctx.restore();
    }
    K1() && (String((V == null ? void 0 : V.toolKind) || ""), String((st == null ? void 0 : st.kind) || ""), Number((st == null ? void 0 : st.width) || 0), Number((st == null ? void 0 : st.height) || 0), String(((Y = V == null ? void 0 : V.targetSpace) == null ? void 0 : Y.viewMode) || ""), Number((V == null ? void 0 : V.aspect) ?? 1), gu(at.currentStroke.canvas), gu(pt.canvas), void 0), ae(at.currentStroke), at.activeStroke = null, at.displayDirty = !0, y = null, b = "", L([...a.keys()]);
  }
  function A(V) {
    if (b === "mask")
      ae(l.currentStroke), l.activeStroke = null, l.lassoPreviewActive = !1, l.displayDirty = !0;
    else if (b === "paint" && !y)
      ae(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const lt = a.get(y);
      lt && (ae(lt.currentStroke), lt.activeStroke = null, lt.lassoPreviewActive = !1, lt.displayDirty = !0);
    }
    y = null, b = "", L([...a.keys()]);
  }
  function D(V, lt) {
    var Mt;
    if (b = String((V == null ? void 0 : V.layerKind) || ""), String(((Mt = V == null ? void 0 : V.geometry) == null ? void 0 : Mt.geometryKind) || "") === "lasso_fill") {
      if (b === "mask")
        ae(l.currentStroke), Ga(l.currentStroke.ctx, V, l.descriptor), l.lassoPreviewActive = !0, l.displayDirty = !0;
      else {
        const at = String((V == null ? void 0 : V.toolKind) || "") === "eraser", Z = at ? f : M(String((V == null ? void 0 : V.actionGroupId) || y || "__default__"));
        y = at ? "" : String((V == null ? void 0 : V.actionGroupId) || y || "__default__"), ae(Z.currentStroke), Ga(Z.currentStroke.ctx, V, Z.descriptor), Z.lassoPreviewActive = !0, Z.displayDirty = !0;
      }
      L([...a.keys()]);
    }
  }
  function $(V) {
    return L(V ?? [...a.keys()]), {
      displayPaint: h,
      committedMask: l.committedMask,
      descriptor: r
    };
  }
  function ot(V) {
    return a.get(String(V)) ?? null;
  }
  function dt() {
    return [...a.keys()];
  }
  function T(V) {
    var st;
    const lt = a.get(String(V));
    if (!lt) return null;
    const xt = b === "paint" && y === lt.actionGroupId, Mt = b === "paint" && ((st = y ? a.get(y) : f) == null ? void 0 : st.activeStroke) || null;
    if (Mt != null && Mt.isEraser)
      return Ve = Pn(Ve, e, n), ae(Ve), Ve.ctx.drawImage(lt.committedPaint.canvas, 0, 0), nr(Ve.ctx, s.canvas), Ve.canvas;
    const at = xt ? lt.activeStroke : null;
    if (!at) return lt.committedPaint.canvas;
    Ve = Pn(Ve, e, n), ae(Ve), Ve.ctx.drawImage(lt.committedPaint.canvas, 0, 0);
    const Z = lt.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, at.strokeOpacity ?? 1));
    return Ve.ctx.save(), Ve.ctx.globalAlpha = Z, Ve.ctx.drawImage(s.canvas, 0, 0), Ve.ctx.restore(), Ve.canvas;
  }
  function wt() {
    return er = Pn(er, e, n), ae(er), Or(er.ctx, l.committedMask.canvas), b === "mask" && l.activeStroke && (l.activeStroke.isEraser ? (qt = Pn(qt, e, n), ae(qt), qt.ctx.drawImage(l.committedMask.canvas, 0, 0), nr(qt.ctx, s.canvas), ae(er), Or(er.ctx, qt.canvas)) : Or(er.ctx, s.canvas)), er.canvas;
  }
  return {
    rebuildCommitted: R,
    beginStroke: O,
    appendStrokePoint: am,
    updateActiveStroke: D,
    commitActiveStroke: C,
    cancelActiveStroke: A,
    getErpTarget: $,
    ensureTarget: E,
    getGroupTarget: ot,
    getGroupDisplayCanvas: T,
    getMaskDisplayCanvas: wt,
    getAllGroupIds: dt
  };
}
function W(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Ss(t, e, n) {
  const r = Number(t);
  return Number.isFinite(r) ? Math.max(Number(e), Math.min(Number(n), r)) : Number(e);
}
function $e(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function om(t, e) {
  let n = $e(e) - $e(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const _u = Math.PI / 180, xu = 0.12, sm = 3, cm = 35, lm = 140, Si = 100, um = 20, wu = 0.8;
function fm(t, e, n) {
  const r = Math.max(1, Number(e || 1)), a = Math.max(1, Number(n || 1)), s = W(Number(t || Si), 1, 179) * _u;
  return 2 * Math.atan(Math.tan(s * 0.5) * (a / r)) / _u;
}
function dm(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function Do(t = {}) {
  const e = typeof t.getView == "function" ? t.getView : (() => ({ yaw: 0, pitch: 0, fov: Si })), n = typeof t.setView == "function" ? t.setView : (() => {
  }), r = typeof t.getInvert == "function" ? t.getInvert : (() => ({ x: 1, y: 1 })), a = typeof t.getUnwrapRect == "function" ? t.getUnwrapRect : (() => ({ w: 1, h: 1 })), s = typeof t.getViewportSize == "function" ? t.getViewportSize : (() => ({ w: 0, h: 0 })), l = typeof t.onInteraction == "function" ? t.onInteraction : (() => {
  }), f = typeof t.onDebug == "function" ? t.onDebug : null, h = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(O, C = null) {
    f && f(O, C);
  }
  function b(O, C, A = null, D = performance.now()) {
    return h.drag.active = !0, h.drag.lastX = Number(O || 0), h.drag.lastY = Number(C || 0), h.drag.lastTs = Number(D || performance.now()), h.drag.pointerId = A, h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.lastTs = h.drag.lastTs, h.velHistory = [], y("drag", { phase: "start", x: h.drag.lastX, y: h.drag.lastY, pointerId: A }), !0;
  }
  function p(O, C, A = "pano", D = performance.now()) {
    if (!h.drag.active) return !1;
    const $ = Number(D || performance.now()), ot = Number(O), dt = Number(C), T = ot - h.drag.lastX, wt = dt - h.drag.lastY;
    h.drag.lastX = ot, h.drag.lastY = dt, h.drag.lastTs = $;
    const V = r() || { x: 1, y: 1 }, lt = Number(V.x || 1), xt = Number(V.y || 1), Mt = { ...e() };
    let at = 0, Z = 0;
    if (A === "unwrap") {
      const pt = a() || { w: 1, h: 1 }, Y = Math.max(1, Number(pt.w || 1)), ut = Math.max(1, Number(pt.h || 1)), St = T / Y, Lt = wt / ut;
      at = -St * 360 * lt, Z = Lt * 180 * xt;
    } else {
      const pt = s() || { w: 0, h: 0 }, Y = Math.max(1, Number(pt.w || 0)), ut = Math.max(1, Number(pt.h || 0));
      if (Y > 1 && ut > 1) {
        const St = W(Number(Mt.fov || Si), 1, 179), Lt = W(fm(St, Y, ut), 0.1, 179);
        at = -(T / Y) * St * lt, Z = wt / ut * Lt * xt;
      } else
        at = -T * xu * lt, Z = wt * xu * xt;
    }
    Mt.yaw = $e(Number(Mt.yaw || 0) + at), Mt.pitch = W(Number(Mt.pitch || 0) + Z, -89.9, 89.9), n(Mt), h.velHistory.push({ ts: $, yaw: Mt.yaw, pitch: Mt.pitch });
    let st = 0;
    for (; st < h.velHistory.length - 1 && h.velHistory[st].ts < $ - 100; ) st++;
    return st > 0 && h.velHistory.splice(0, st), h.inertia.active = !1, h.inertia.lastTs = $, l(), y("drag", { phase: "move", dx: T, dy: wt, dYaw: at, dPitch: Z }), !0;
  }
  function w(O = performance.now()) {
    if (!h.drag.active) return !1;
    h.drag.active = !1;
    const C = Number(O || performance.now());
    h.drag.lastTs = C;
    const A = h.velHistory.filter(($) => C - $.ts <= 80);
    if (A.length >= 2) {
      const $ = A[0], ot = A.at(-1), dt = Math.max(1e-3, (ot.ts - $.ts) / 1e3);
      let T = ot.yaw - $.yaw;
      T > 180 && (T -= 360), T < -180 && (T += 360), h.inertia.vx = T / dt, h.inertia.vy = (ot.pitch - $.pitch) / dt;
    } else
      h.inertia.vx = 0, h.inertia.vy = 0;
    h.velHistory = [];
    const D = Math.hypot(h.inertia.vx, h.inertia.vy);
    return h.inertia.active = D > um, h.inertia.lastTs = C, y("drag", { phase: "end", speed: D, inertiaActive: h.inertia.active }), !0;
  }
  function M(O = performance.now()) {
    if (!h.inertia.active) return !1;
    const C = Number(O || performance.now()), A = Math.max(1e-3, (C - (h.inertia.lastTs || C)) / 1e3);
    h.inertia.lastTs = C;
    const D = { ...e() };
    D.yaw = $e(Number(D.yaw || 0) + h.inertia.vx * A), D.pitch = W(Number(D.pitch || 0) + h.inertia.vy * A, -89.9, 89.9);
    const $ = Math.exp(-5.5 * A);
    return h.inertia.vx *= $, h.inertia.vy *= $, Math.abs(h.inertia.vx) < wu && Math.abs(h.inertia.vy) < wu && (h.inertia.vx = 0, h.inertia.vy = 0, h.inertia.active = !1), n(D), l(), h.inertia.active;
  }
  function E(O) {
    const C = Math.sign(Number(O || 0));
    if (!C) return !1;
    const A = { ...e() }, D = Number(A.fov || Si);
    return A.fov = W(D + C * sm, cm, lm), n(A), l(), y("wheel", { deltaSign: C, fovBefore: D, fovAfter: A.fov }), !0;
  }
  function L(O) {
    return E(Math.sign(dm(O)));
  }
  function R() {
    n({ yaw: 0, pitch: 0, fov: Si }), h.inertia.active = !1, h.inertia.vx = 0, h.inertia.vy = 0, l();
  }
  return {
    state: h,
    startDrag: b,
    moveDrag: p,
    endDrag: w,
    stepInertia: M,
    applyWheel: E,
    applyWheelEvent: L,
    resetView: R
  };
}
function Bs(t) {
  const e = String(t || "").trim();
  return e ? e === "PanoramaPreview" || e === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(e) : !1;
}
const Su = Math.PI / 180;
function yi(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) ? n : Number(e);
}
function hm(t) {
  const e = t || {}, n = yi(e.yaw_deg, 0), r = yi(e.pitch_deg, 0), a = yi(e.roll_deg ?? e.rot_deg, 0), s = Ss(yi(e.hFOV_deg, 90), 1, 179), l = Ss(yi(e.vFOV_deg, 60), 1, 179), f = Math.tan(s * Su * 0.5) / Math.max(1e-6, Math.tan(l * Su * 0.5)), h = Ss(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: a,
    hfov: s,
    vfov: l,
    aspect: h
  };
}
const vd = 0.28;
function pm(t) {
  const e = t && typeof t == "object" ? t : {}, n = W(Number(e.x0 ?? 0), 0, 1), r = W(Number(e.y0 ?? 0), 0, 1), a = W(Number(e.x1 ?? 1), 0, 1), s = W(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(r, s),
    x1: Math.max(n, a),
    y1: Math.max(r, s)
  };
}
function gm(t, e = {}) {
  if (!t || typeof t != "object") return null;
  const n = String(t.asset_id || t.assetId || "").trim(), r = t.type === "external_image" || t.source_kind === "external_image", a = n || (r ? String(t.id || "").trim() : ""), s = e.includeHidden === !0, l = t.visible === !1, f = s && r && l;
  return {
    id: String(t.id || ""),
    assetId: a,
    zIndex: Number(t.z_index || t.zIndex || 0),
    yawDeg: Number(t.yaw_deg || t.yawDeg || 0),
    pitchDeg: Number(t.pitch_deg || t.pitchDeg || 0),
    rollDeg: Number(t.rot_deg ?? t.roll_deg ?? t.rollDeg ?? 0),
    hFovDeg: W(Number(t.hFOV_deg || t.hFovDeg || 30), 1, 179),
    vFovDeg: W(Number(t.vFOV_deg || t.vFovDeg || 30), 1, 179),
    crop: pm(t.crop),
    opacity: f ? vd : W(Number(t.opacity ?? 1), 0, 1),
    visible: f ? !0 : t.visible !== !1,
    external: r
  };
}
function To(t, e = {}) {
  var s;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], r = e.includeHidden === !0;
  return {
    stickers: n.map((l) => gm(l, { includeHidden: r })).filter((l) => l && (r || l.visible !== !1)).sort((l, f) => Number(l.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: e.selectedId ?? ((s = t == null ? void 0 : t.active) == null ? void 0 : s.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function bd(t, e, n = {}) {
  if (typeof e != "function") return [];
  const r = n.scene || To(t, n), a = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, s = [], l = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var E;
    const h = String((f == null ? void 0 : f.assetId) || "").trim(), y = h || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || l.has(y)) return;
    const b = h ? a[h] : null, p = e(y, b, f);
    if (p instanceof HTMLImageElement && !p.complete) return;
    const w = Number((p == null ? void 0 : p.naturalWidth) || (p == null ? void 0 : p.videoWidth) || (p == null ? void 0 : p.width) || 0), M = Number((p == null ? void 0 : p.naturalHeight) || (p == null ? void 0 : p.videoHeight) || (p == null ? void 0 : p.height) || 0);
    !p || w <= 0 || M <= 0 || (l.add(y), s.push({
      assetId: y,
      source: p,
      revision: String(((E = n.revisionFor) == null ? void 0 : E.call(n, y, b, p)) ?? [
        y,
        Number(p.naturalWidth || p.videoWidth || p.width || 0),
        Number(p.naturalHeight || p.videoHeight || p.height || 0),
        String(p.currentSrc || p.src || "")
      ].join("|"))
    }));
  }), s;
}
function wc(t, e = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((t == null ? void 0 : t.yaw) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch) || 0),
    fovDeg: W(Number((t == null ? void 0 : t.fov) || 100), 1, 179),
    coverageDeg: Number(e || 360) === 180 ? 180 : 360
  };
}
function mm(t, e = 360) {
  return wc(t, e);
}
function ym(t) {
  const e = hm(t || {});
  return {
    mode: "cutout",
    yawDeg: Number((t == null ? void 0 : t.yaw_deg) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch_deg) || 0),
    rollDeg: Number((e == null ? void 0 : e.roll) ?? (t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0),
    hFovDeg: W(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179),
    vFovDeg: W(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1)
  };
}
const { app: oe } = Fa;
function Gs() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (Fa == null ? void 0 : Fa.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Sr = Math.PI / 180, oo = {}, vm = { Nu: 24, Nv: 14 }, bm = 10, _m = 120;
function xm() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function vi(t) {
  var n, r, a, s, l;
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
    styleTransform: String(((l = t.style) == null ? void 0 : l.transform) || "")
  };
}
function wm() {
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
function sr(t) {
  const e = t == null ? void 0 : t.size;
  if (e == null) return null;
  const n = (r, a) => {
    const s = Number(r), l = Number(a);
    return !Number.isFinite(s) || !Number.isFinite(l) ? null : [s, l];
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
function Sm(t) {
  const e = sr(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function _d(t, e, n) {
  Sm(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function Ks(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function xd(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function Mm(t) {
  return Bs(xd(t));
}
function wr(t = null) {
  var s, l;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((l = (s = oe == null ? void 0 : oe.canvas) == null ? void 0 : s.constructor) == null ? void 0 : l.name) || "");
  return [e, r, n, a].join("|");
}
function wd(t, e = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: wr(e)
  } : String(t) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: wr(e)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: wr(e)
  };
}
const Ti = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(t) {
    !t || String(t.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(t), this.lastSignature || (this.lastSignature = wr(t)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(t) {
    t && this.nodes.delete(t), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const t = this.nodes.values().next().value || null, e = wr(t);
    e !== this.lastSignature && (this.lastSignature = e, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((r) => {
        if (!(!r || String(r.__panoPreviewMode || "") !== "stickers"))
          try {
            r.__panoRebindGeneration = this.generation, String(r.__panoStickersPath || "unknown"), this.generation, Sd(r).rebind(r.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function Sd(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = r === "cutout" ? "dom" : wd(r, t).chosenPath, s = Ks(t);
      this.activeBackend = s;
      const l = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = t.__panoPreviewNoPreview === !0, h = n.noPreview === !0;
      if (s === a && s !== "none" && l === r && f === h) {
        t.__panoAttachOptions = { ...n, mode: r }, t.__panoPreviewMode = r, t.__panoPreviewNoPreview = h, t.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      s !== "none" && Xr(t, { keepMonitor: r === "stickers" }), fy(t, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = Ks(t);
    },
    rebind(n = {}) {
      const r = String(n.mode || (t == null ? void 0 : t.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Xr(t, { keepMonitor: r === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Xr(t), this.activeBackend = "none";
    }
  };
  return t.__panoPreviewController = e, e;
}
function km(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function Xr(t, e = {}) {
  var r, a, s, l, f;
  if (!t) return;
  co.unregister(t), km(t), t.__panoDomPreview, t.__panoLegacyPreviewHooked, t.__panoDomRestore, t.__panoLegacyRestore;
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
      (f = (l = n.root) == null ? void 0 : l.remove) == null || f.call(l);
    } catch {
    }
  }
  try {
    Array.isArray(t.widgets) && (t.widgets = t.widgets.filter((h) => {
      if (h === (n == null ? void 0 : n.widget)) return !1;
      const y = String((h == null ? void 0 : h.name) || ""), b = String((h == null ? void 0 : h.type) || ""), p = Gs();
      return !(y === p || b === p || y === "pano_preview" || b === "pano_preview" || y === "preview" && b === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", String(e.reason || ""), e.keepMonitor, e.keepMonitor || Ti.unregister(t);
}
function Mr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Mu(t, e) {
  return Mr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function wa(t, e) {
  return Mr(t.x * e, t.y * e, t.z * e);
}
function Ms(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function ku(t, e) {
  return Mr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Sa(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Mr(t.x / e, t.y / e, t.z / e);
}
function pr(t, e) {
  const n = t * Sr, r = e * Sr, a = Math.cos(r);
  return Mr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Sc(t, e, n = 0) {
  const r = pr(t, e), a = Mr(0, 1, 0);
  let s = ku(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Mr(1, 0, 0)), s = Sa(s);
  let l = Sa(ku(r, s));
  const f = n * Sr, h = Math.cos(f), y = Math.sin(f), b = Mu(wa(s, h), wa(l, y)), p = Mu(wa(s, -y), wa(l, h));
  return { fwd: r, right: Sa(b), up: Sa(p) };
}
function Nm(t, e = "#00ff00") {
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
function Pm(t) {
  var n;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = Gi(t, "state_json")) == null ? void 0 : n.value) || "");
}
function Mc(t) {
  var l, f;
  const e = Pm(t), n = String(((l = Gi(t, "bg_color")) == null ? void 0 : l.value) || "#1a1a1e"), r = Number(((f = Gi(t, "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, a = t.__panoStateCache;
  if (a && a.source === e && a.bg === n && a.coverage === r)
    return a.parsed;
  const s = Nm(e, n);
  return s.coverage = r, t.__panoStateCache = { source: e, bg: n, coverage: r, parsed: s }, s;
}
function Gi(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function Nu(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function Md(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Cm(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function kd(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Nd(t, e, n = null) {
  var a, s;
  let r = null;
  try {
    r = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const l = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, f = l ? (s = r.resolveSubgraphOutputLink) == null ? void 0 : s.call(r, Number(l.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = Cm(t == null ? void 0 : t.graph, n)), r;
}
function Am(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function kc(t, e = []) {
  const n = Am(t), r = [];
  return e.forEach((a) => {
    n.includes(String(a)) && r.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !r.includes(a) && r.push(a);
  }), r.length ? r : e;
}
function Pu(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: e, tail: n.length ? n[n.length - 1] : e };
}
function so(t, e) {
  const n = Pu(t), r = Pu(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Im(t, e = ["erp_image", "bg_erp"]) {
  var h;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return [];
  const a = kc(t, e).map((y) => n.findIndex((b) => String((b == null ? void 0 : b.name) || "") === String(y))).filter((y) => y >= 0), s = n.map((y, b) => ({ input: y, idx: b })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), l = [.../* @__PURE__ */ new Set([...a, ...s])], f = [];
  for (const y of l) {
    const b = Nd(t, y);
    if ((b == null ? void 0 : b.id) != null) {
      f.push(String(b.id));
      continue;
    }
    const p = (h = n[y]) == null ? void 0 : h.link;
    if (p == null) continue;
    const w = Md(t == null ? void 0 : t.graph, p), { originId: M } = kd(w);
    M != null && f.push(String(M));
  }
  return [...new Set(f)];
}
const co = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = Ge) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((s) => {
        var f, h, y, b, p;
        if (!s) return;
        so(r, s == null ? void 0 : s.id), Im(s, ["erp_image", "bg_erp"]).some((w) => so(r, w)), Ys(s), (h = (f = s.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || h.call(f), (y = s.setDirtyCanvas) == null || y.call(s, !0, !0), (p = (b = s.graph) == null ? void 0 : b.setDirtyCanvas) == null || p.call(b, !0, !0), String(s.__panoPreviewMode || ""), String(s.__panoPreviewMode || "");
      });
    }, Ge.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var t;
    !this.bound || !this.listener || !((t = Ge) != null && t.removeEventListener) || (Ge.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(t) {
    t && (this.nodes.add(t), this.ensureBound());
  },
  unregister(t) {
    t && this.nodes.delete(t), this.nodes.size || this.ensureUnbound();
  }
};
function lo(t) {
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
  return typeof ((s = Ge) == null ? void 0 : s.apiURL) == "function" ? Ge.apiURL(a) : a;
}
function Em(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Dm(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function Tm(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function Pd(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Em(e)) return [e];
  const { filename: n, subfolder: r } = Dm(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => lo({
    filename: n,
    subfolder: r,
    type: s
  }));
  return Tm([...a, e]);
}
function Lm(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? lo({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function Ws(t) {
  const e = oe == null ? void 0 : oe.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  const a = n;
  if (e instanceof Map) {
    for (const s of e.keys())
      if (so(s, a)) return e.get(s);
  } else {
    const s = Object.keys(e);
    for (const l of s)
      if (so(l, a)) return e[l];
  }
  return null;
}
function En(t) {
  if (!t) return "";
  if (typeof t == "string")
    return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return En(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return lo({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = En(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : lo(t);
}
function Cd(t, e) {
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
function Om(t) {
  const e = [], n = /* @__PURE__ */ new Set(), r = (s) => {
    Array.isArray(s) && s.forEach((l) => e.push(l));
  }, a = (s, l = 0) => {
    !s || l > 3 || n.has(s) || typeof s == "object" && (n.add(s), r(s.images), a(s.output, l + 1), a(s.ui, l + 1), a(s.data, l + 1), a(s.result, l + 1));
  };
  return a(t, 0), e;
}
function Rm(t, e) {
  try {
    const n = Om(e);
    let r = "";
    for (const a of n)
      if (r = En(a), r) break;
    r ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(r || ""), Cd(t.__panoOwnOutputSrc, t.__panoOwnOutputRev), t.__panoOwnOutputRev, void 0) : (Object.keys(e || {}), void 0);
  } catch {
  }
}
function Fm(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const r = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), a = Ws(n), s = Array.isArray(a == null ? void 0 : a.images) ? a.images : [], l = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], f = r ? [r, ...s, ...l] : [...s, ...l];
  let h = "";
  for (const O of f)
    if (h = En(O), h) break;
  if (!h) return null;
  const y = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), p = Pd(h).map((O) => Cd(O, y));
  if (!p.length) return null;
  const w = `${h}|rev:${y}`;
  t.__panoOwnOutputImageCache || (t.__panoOwnOutputImageCache = {
    src: "",
    img: null,
    pendingSrc: "",
    pendingImg: null
  });
  const M = t.__panoOwnOutputImageCache;
  if (M.img && M.src === w) return M.img;
  if (M.pendingImg && M.pendingSrc === w)
    return M.img && (M.img.complete || M.img.naturalWidth || M.img.width) ? M.img : M.pendingImg;
  const E = new Image();
  let L = -1;
  const R = () => {
    if (L += 1, L >= p.length) {
      t.__panoOwnOutputImageCache === M && (M.pendingSrc = "", M.pendingImg = null);
      return;
    }
    E.src = p[L];
  };
  return E.onload = () => {
    var O;
    t.__panoOwnOutputImageCache === M && M.pendingImg === E && M.pendingSrc === w && (M.src = w, M.img = E, M.pendingSrc = "", M.pendingImg = null), e == null || e(), (O = t.setDirtyCanvas) == null || O.call(t, !0, !0);
  }, E.onerror = () => {
    if (L + 1 >= p.length) {
      t.__panoOwnOutputImageCache === M && M.pendingImg === E && (M.pendingSrc = "", M.pendingImg = null);
      return;
    }
    R();
  }, M.pendingSrc = w, M.pendingImg = E, R(), M.img && (M.img.complete || M.img.naturalWidth || M.img.width) ? M.img : E;
}
function Vm(t, e = []) {
  var y, b;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = kc(t, e).map((p) => n.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(p))).filter((p) => p >= 0), s = n.map((p, w) => ({ input: p, idx: w })).filter(({ input: p }) => String((p == null ? void 0 : p.type) || "").toUpperCase() === "IMAGE").map(({ idx: p }) => p), l = [.../* @__PURE__ */ new Set([...a, ...s])];
  for (const p of l) {
    const w = n[p], M = w == null ? void 0 : w.link;
    if (M == null) continue;
    const E = Md(t.graph, M), { originId: L, originSlot: R } = kd(E);
    if (L == null) continue;
    const O = Nd(t, p, L);
    if (!O) continue;
    const C = Number(R || 0), A = Ws((O == null ? void 0 : O.id) ?? L), D = Array.isArray(A == null ? void 0 : A.images) ? A.images : [];
    if (D.length) {
      const T = [];
      C >= 0 && C < D.length && T.push(D[C]), T.push(...D);
      for (const wt of T) {
        const V = En(wt);
        if (V)
          return String((w == null ? void 0 : w.name) || ""), { src: V, sourceType: "nodeOutputs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    let $ = [];
    try {
      $ = typeof (oe == null ? void 0 : oe.getNodeImageUrls) == "function" ? oe.getNodeImageUrls(O) || [] : [];
    } catch {
      $ = [];
    }
    if (Array.isArray($) && $.length) {
      const T = [];
      C >= 0 && C < $.length && T.push($[C]), T.push(...$);
      for (const wt of T) {
        const V = En(wt);
        if (V)
          return String((w == null ? void 0 : w.name) || ""), { src: V, sourceType: "appNodeImageUrls", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const ot = Array.isArray(O == null ? void 0 : O.imgs) ? O.imgs : [];
    if (ot.length) {
      const T = [];
      C >= 0 && C < ot.length && T.push(ot[C]), T.push(...ot);
      for (const wt of T) {
        const V = En(wt);
        if (V)
          return String((w == null ? void 0 : w.name) || ""), { src: V, sourceType: "nodeImgs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const dt = (y = O == null ? void 0 : O.widgets) == null ? void 0 : y.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image");
    if (dt) {
      let T = En(dt.value);
      if (T && !T.includes("/") && !T.includes(":") && (O.comfyClass === "LoadImage" || O.type === "LoadImage") && (T = Ge.apiURL(`/view?filename=${encodeURIComponent(T)}&type=input&subfolder=`)), T)
        return String((w == null ? void 0 : w.name) || ""), { src: T, sourceType: "widget", inputName: String((w == null ? void 0 : w.name) || "") };
    }
  }
  const f = Ws(t == null ? void 0 : t.id), h = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && h.push(...f.pano_input_images), Array.isArray((b = f == null ? void 0 : f.ui) == null ? void 0 : b.pano_input_images) && h.push(...f.ui.pano_input_images), h.length > 0)
    for (const p of h) {
      const w = En(p);
      if (w)
        return { src: w, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Hm(t, e = []) {
  const n = Vm(t, e), r = String((n == null ? void 0 : n.src) || "").trim();
  if (!r) return null;
  const a = Pd(r);
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = e.join("|") || "image", l = t.__panoLinkedInputImageCache.get(s);
  if (l && l.srcRaw === r && l.img) return l.img;
  const f = new Image(), h = { srcRaw: r, resolvedSrc: "", img: f };
  t.__panoLinkedInputImageCache.set(s, h);
  let y = -1;
  const b = () => {
    var w, M;
    if (y += 1, y >= a.length) {
      try {
        (M = (w = t.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || M.call(w, s);
      } catch {
      }
      String((n == null ? void 0 : n.sourceType) || ""), a.length;
      return;
    }
    const p = a[y];
    h.resolvedSrc = p, f.src = p;
  };
  return f.onload = () => {
    var p;
    String(h.resolvedSrc || f.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (p = t.setDirtyCanvas) == null || p.call(t, !0, !0);
  }, f.onerror = (p) => {
    var w, M;
    if (y + 1 < a.length) {
      b();
      return;
    }
    try {
      (M = (w = t.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || M.call(w, s);
    } catch {
    }
    String(h.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((p == null ? void 0 : p.type) || "error");
  }, b(), f;
}
function uo(t, e = [], n = null) {
  const r = Hm(t, e);
  return r ? (typeof n == "function" && (r.complete && (r.naturalWidth || r.width) || r.addEventListener("load", () => n(), { once: !0 })), r) : null;
}
function Ys(t) {
  var e, n;
  if (t) {
    try {
      (n = (e = t.__panoLinkedInputImageCache) == null ? void 0 : e.clear) == null || n.call(e);
    } catch {
    }
    t.__panoOwnOutputImageCache = null, t.__panoWrappedErpCache = null;
  }
}
function Ad(t, e) {
  t.__panoRenderCache || (t.__panoRenderCache = {
    mode: String(e || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = t.__panoRenderCache, r = String(e || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function fr(t, e, n = "") {
  const r = Ad(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), a = performance.now();
  return e ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < _m ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function qs(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), r = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), a = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), s = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || r)), l = n / a, f = r / s, h = Math.min(l, f);
  return Number.isFinite(h) && h > 0 ? h : 1;
}
function Cu(t, e, n = 1) {
  const r = Number((e == null ? void 0 : e.x) || 0), a = Number((e == null ? void 0 : e.y) || 0), s = Number((e == null ? void 0 : e.w) || 0), l = Number((e == null ? void 0 : e.h) || 0);
  if (s <= 0 || l <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), h = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), s * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), b = r + (s - h) * 0.5, p = a + (l - y) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(b, p, h, y, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", b + h * 0.5, p + y * 0.5 + 0.5), t.restore();
}
function Ma(t, e, n = "Open editor and add frame") {
  var a;
  const r = (a = t == null ? void 0 : t.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  r && (r.textContent = String(n || "Open editor and add frame"), r.style.display = e ? "flex" : "none");
}
function zm(t) {
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
function Id(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), r = Number((t == null ? void 0 : t.y) || 0), a = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), s = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), l = Number(e) > 0 ? Number(e) : 1;
  let f = a, h = a / l;
  return h > s && (h = s, f = s * l), {
    x: n + (a - f) * 0.5,
    y: r + (s - h) * 0.5,
    w: f,
    h
  };
}
function $m(t, e, n, r = 0) {
  if (!t || !e || !n) return !1;
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (a <= 1 || s <= 1) return !1;
  const l = Id(n, a / s);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, l.x, l.y, l.w, l.h);
  const f = Math.max(0, Math.min(1, Number(r) || 0));
  return f > 0 && (t.fillStyle = `rgba(0,0,0,${f})`, t.fillRect(l.x, l.y, l.w, l.h)), t.restore(), !0;
}
function jm(t, e = null) {
  const r = Array.isArray(t.widgets) ? t.widgets : [];
  let a = 32;
  return r.forEach((s) => {
    var f;
    if (s === e || !s || s.hidden || s.type === "hidden") return;
    let l = 22;
    try {
      const h = typeof s.computeSize == "function" ? s.computeSize(((f = sr(t)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(h) && Number.isFinite(Number(h[1])) && (l = Number(h[1]));
    } catch {
      l = 22;
    }
    a += l;
  }), a;
}
function Ka(t) {
  const n = jm(t) + 2, r = 8, a = sr(t), s = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), l = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return l < 40 || s < 80 ? null : { x: r, y: n, w: s, h: l };
}
function Ed(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const r = String(e || "");
  if (!r) return null;
  const a = Lm(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const s = window.__panoSharedImageCache.get(a);
  if (s != null && s.img)
    return t.__panoPreviewImageCache.set(r, { src: a, img: s.img }), s.img;
  const l = t.__panoPreviewImageCache.get(r);
  if (l && l.src === a) return l.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var h, y, b;
    (y = (h = t.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || y.call(h), (b = t.setDirtyCanvas) == null || b.call(t, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), t.__panoPreviewImageCache.set(r, { src: a, img: f }), f;
}
function Um(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.__panoStickerSortCache;
  if ((r == null ? void 0 : r.source) === n && Array.isArray(r.sorted)) return r.sorted;
  const a = [...n].sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function Dd(t, e) {
  return To(e, {
    selectedId: null,
    hoveredId: null
  });
}
function Td(t, e, n) {
  return bd(e, (r, a) => Ed(t, r, a), { scene: n });
}
function Bm(t, e, n, r = 0.45) {
  const a = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3, l = (f) => {
    const h = f.x - a, y = f.y - s, b = Math.hypot(h, y) || 1;
    return { x: f.x + h / b * r, y: f.y + y / b * r };
  };
  return [l(t), l(e), l(n)];
}
function Au(t, e, n, r, a, s, l, f) {
  const h = n.x * (r.y - a.y) + r.x * (a.y - n.y) + a.x * (n.y - r.y);
  if (Math.abs(h) < 1e-6) return;
  const [y, b, p] = Bm(s, l, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(b.x, b.y), t.lineTo(p.x, p.y), t.closePath(), t.clip();
  const w = (s.x * (r.y - a.y) + l.x * (a.y - n.y) + f.x * (n.y - r.y)) / h, M = (s.x * (a.x - r.x) + l.x * (n.x - a.x) + f.x * (r.x - n.x)) / h, E = (s.x * (r.x * a.y - a.x * r.y) + l.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * r.y - r.x * n.y)) / h, L = (s.y * (r.y - a.y) + l.y * (a.y - n.y) + f.y * (n.y - r.y)) / h, R = (s.y * (a.x - r.x) + l.y * (n.x - a.x) + f.y * (r.x - n.x)) / h, O = (s.y * (r.x * a.y - a.x * r.y) + l.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * r.y - r.x * n.y)) / h;
  t.transform(w, L, M, R, E, O), t.drawImage(e, 0, 0), t.restore();
}
function Ld(t, e, n, r) {
  const a = Ms(t, e.right), s = Ms(t, e.up), l = Ms(t, e.fwd);
  if (l <= 1e-4) return null;
  const f = s / l / r, h = a / l / r;
  return { x: n.x + n.w * 0.5 + h * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Od(t, e, n, r, a, s, l, f = 12, h = 9) {
  var at;
  const y = W(Number(l.hFOV_deg || 30), 1, 179) * Sr, b = W(Number(l.vFOV_deg || 30), 1, 179) * Sr, p = Math.tan(y * 0.5), w = Math.tan(b * 0.5), M = l.crop || {}, E = W(Number(M.x0 ?? 0), 0, 1), L = W(Number(M.y0 ?? 0), 0, 1), R = W(Number(M.x1 ?? 1), 0, 1), O = W(Number(M.y1 ?? 1), 0, 1), C = Math.max(1e-4, R - E), A = Math.max(1e-4, O - L), D = Sc(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0), Number(l.rot_deg || l.roll_deg || 0)), $ = [], ot = [], dt = [], T = [];
  for (let Z = 0; Z <= h; Z++) {
    const st = Z / h, Y = (1 - (L + st * A) * 2) * w;
    for (let ut = 0; ut <= f; ut++) {
      const St = ut / f, Dt = ((E + St * C) * 2 - 1) * p, ie = D.fwd.x + D.right.x * Dt + D.up.x * Y, Ne = D.fwd.y + D.right.y * Dt + D.up.y * Y, en = D.fwd.z + D.right.z * Dt + D.up.z * Y, g = Math.hypot(ie, Ne, en) || 1e-8, le = ie / g, Re = Ne / g, We = en / g, Pe = le * r.right.x + Re * r.right.y + We * r.right.z, At = le * r.up.x + Re * r.up.y + We * r.up.z, S = le * r.fwd.x + Re * r.fwd.y + We * r.fwd.z;
      if (S <= 1e-4)
        $[Z] || ($[Z] = []), ot[Z] || (ot[Z] = []), $[Z][ut] = null, ot[Z][ut] = null;
      else {
        const I = At / S / a, F = Pe / S / a;
        $[Z] || ($[Z] = []), ot[Z] || (ot[Z] = []), $[Z][ut] = n.x + n.w * 0.5 + F * n.h * 0.5, ot[Z][ut] = n.y + n.h * 0.5 - I * n.h * 0.5;
      }
      dt[Z] || (dt[Z] = []), T[Z] || (T[Z] = []), dt[Z][ut] = St, T[Z][ut] = st;
    }
  }
  const wt = (at = s.assets) == null ? void 0 : at[l.asset_id], V = Ed(e, l.asset_id, wt);
  if (!V || !V.complete || !V.naturalWidth) return;
  const lt = Number(V.naturalWidth || V.width || 1), xt = Number(V.naturalHeight || V.height || 1), Mt = f < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = Mt;
  for (let Z = 0; Z < h; Z++)
    for (let st = 0; st < f; st++) {
      const pt = $[Z][st], Y = ot[Z][st], ut = $[Z][st + 1], St = ot[Z][st + 1], Lt = $[Z + 1][st], Dt = ot[Z + 1][st], ie = $[Z + 1][st + 1], Ne = ot[Z + 1][st + 1];
      if (pt === null || ut === null || Lt === null || ie === null) continue;
      const en = dt[Z][st] * lt, g = T[Z][st] * xt, le = dt[Z][st + 1] * lt, Re = T[Z][st + 1] * xt, We = dt[Z + 1][st] * lt, Pe = T[Z + 1][st] * xt, At = dt[Z + 1][st + 1] * lt, S = T[Z + 1][st + 1] * xt;
      Au(t, V, { x: en, y: g }, { x: le, y: Re }, { x: At, y: S }, { x: pt, y: Y }, { x: ut, y: St }, { x: ie, y: Ne }), Au(t, V, { x: en, y: g }, { x: At, y: S }, { x: We, y: Pe }, { x: pt, y: Y }, { x: ie, y: Ne }, { x: Lt, y: Dt });
    }
}
function Gm(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const r = Mc(t), a = Ka(t);
  if (!a) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const s = Sc(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), l = Math.tan(Number(t.__panoPreviewView.fov || 100) * Sr * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(a.x, a.y, a.w, a.h, 8), e.fill(), e.stroke(), e.clip();
  const f = uo(
    t,
    kc(t, ["erp_image", "bg_erp"]),
    () => {
      var D, $, ot;
      ($ = (D = t.__panoDomPreview) == null ? void 0 : D.requestDraw) == null || $.call(D), (ot = t.setDirtyCanvas) == null || ot.call(t, !0, !1);
    }
  ), h = !!(f && f.complete && (f.naturalWidth || f.width)), y = Vd(t), b = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, p = y || b, w = oo, M = Dd(t, r), E = Td(t, r, M), L = wc(t.__panoPreviewView, r == null ? void 0 : r.coverage);
  let R = !1;
  if (t.__panoRuntimeCore || (t.__panoRuntimeCore = qi()), h) {
    const D = Eo({
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
      scene: M,
      textures: E,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), ot = t.__panoRuntimeCore.syncState(D) ? t.__panoRuntimeCore.renderToTarget("runtime_preview", L, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    R = !!ot, ot && e.drawImage(ot, a.x, a.y, a.w, a.h);
  }
  const O = p ? 8 : 12, C = p ? 6 : 9, A = Um(t, r);
  if (!h || A.length === 0) {
    const D = qs(e == null ? void 0 : e.canvas, a);
    Rd(e, a, s, l, D);
  }
  !R && h && fo(t, e, a, s, l, f, w), !R && A.length > 0 && A.forEach((D) => Od(e, t, a, s, l, r, D, O, C)), e.restore();
}
function Km(t, e, n, r, a = "preview_scene", s = "") {
  const l = String(
    s || [
      String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
      Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
      Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
    ].join("|")
  );
  return Eo({
    stateRevision: [
      a,
      l,
      Number((e == null ? void 0 : e.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(r) ? r.map((f) => `${String((f == null ? void 0 : f.assetId) || "")}:${String((f == null ? void 0 : f.revision) || "")}`).join(",") : ""
    ].join("|"),
    backgroundSource: t,
    backgroundRevision: l,
    coverageDeg: Number((e == null ? void 0 : e.coverage) || 360) === 180 ? 180 : 360,
    scene: n,
    textures: r,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
}
function Wa(t, e, n, r) {
  var s, l, f, h, y, b;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((s = t == null ? void 0 : t.pos) == null ? void 0 : s[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((l = t == null ? void 0 : t.pos) == null ? void 0 : l[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && e)
    try {
      const p = r.convertEventToCanvasOffset(e);
      if (Array.isArray(p) && p.length >= 2)
        return {
          x: Number(p[0]) - Number(((f = t == null ? void 0 : t.pos) == null ? void 0 : f[0]) || 0),
          y: Number(p[1]) - Number(((h = t == null ? void 0 : t.pos) == null ? void 0 : h[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(e == null ? void 0 : e.canvasX)) && Number.isFinite(Number(e == null ? void 0 : e.canvasY)))
    return {
      x: Number(e.canvasX) - Number(((y = t == null ? void 0 : t.pos) == null ? void 0 : y[0]) || 0),
      y: Number(e.canvasY) - Number(((b = t == null ? void 0 : t.pos) == null ? void 0 : b[1]) || 0)
    };
  const a = Ym(t, e, r);
  return a || null;
}
function Wm(t, e) {
  var p, w;
  const n = Number(t == null ? void 0 : t.clientX), r = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, s = (p = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : p.call(a), l = (e == null ? void 0 : e.ds) || ((w = oe == null ? void 0 : oe.canvas) == null ? void 0 : w.ds);
  if (!s || !l) return null;
  const f = Number(l.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const h = Array.isArray(l.offset) ? l.offset : [0, 0], y = (n - Number(s.left || 0)) / f - Number(h[0] || 0), b = (r - Number(s.top || 0)) / f - Number(h[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(b) ? null : { x: y, y: b };
}
function Ym(t, e, n) {
  var a, s;
  const r = Wm(e, n || (oe == null ? void 0 : oe.canvas));
  return r ? {
    x: r.x - Number(((a = t == null ? void 0 : t.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((s = t == null ? void 0 : t.pos) == null ? void 0 : s[1]) || 0)
  } : null;
}
function ka(t) {
  if (t.__panoLegacyPreviewHooked) return;
  t.__panoPreviewMode, String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""), sr(t), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", _d(t, 320, 180), $r(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var w, M;
    const p = e ? e.apply(this, arguments) : void 0;
    try {
      const E = arguments[0];
      E && !((w = this.flags) != null && w.collapsed) && (r.stepInertia(performance.now()) && ((M = this.setDirtyCanvas) == null || M.call(this, !0, !1)), Gm(this, E, r));
    } catch {
    }
    return p;
  }, t.onResize = function() {
    var w;
    const p = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ho(this, 150), (w = this.setDirtyCanvas) == null || w.call(this, !0, !0), Hd(this, 220, null), p;
  };
  const r = Do({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (p) => {
      t.__panoPreviewView = p;
    },
    getViewportSize: () => {
      const p = Ka(t);
      return {
        w: Math.max(1, Number((p == null ? void 0 : p.w) || 0)),
        h: Math.max(1, Number((p == null ? void 0 : p.h) || 0))
      };
    },
    onInteraction: () => {
      var p;
      Fd(t), (p = t.setDirtyCanvas) == null || p.call(t, !0, !1);
    }
  }), a = t.onMouseDown;
  t.onMouseDown = function(p, w, M) {
    var E;
    try {
      if (!((E = this.flags) != null && E.collapsed)) {
        const L = Wa(this, p, w, M) || { x: 0, y: 0 }, R = sr(this), O = Number((R == null ? void 0 : R[0]) || 0), C = Number((R == null ? void 0 : R[1]) || 0);
        if (L.x >= O - 20 && L.y >= C - 20)
          return a ? a.apply(this, arguments) : void 0;
        const D = Ka(this);
        if (Nu(L.x, L.y, D))
          return (p == null ? void 0 : p.button) === 0 && r.startDrag(L.x, L.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const s = t.onMouseMove;
  t.onMouseMove = function(p, w, M) {
    try {
      const E = Wa(this, p, w, M);
      if (r.state.drag.active) {
        if (typeof (p == null ? void 0 : p.buttons) == "number" && (p.buttons & 1) === 0)
          return r.endDrag(), !0;
        const L = E || r.state.drag;
        return r.moveDrag(L.x, L.y, "pano"), !0;
      }
    } catch {
    }
    return s ? s.apply(this, arguments) : void 0;
  };
  const l = t.onMouseUp;
  t.onMouseUp = function() {
    return r.state.drag.active ? (r.endDrag(), !0) : l ? l.apply(this, arguments) : void 0;
  };
  const f = t.onMouseLeave;
  t.onMouseLeave = function() {
    const p = f ? f.apply(this, arguments) : void 0;
    return r.state.drag.active && r.endDrag(), p;
  };
  const h = t.onMouseWheel;
  t.onMouseWheel = function(p, w, M) {
    var E, L;
    try {
      if ((E = this.flags) != null && E.collapsed) return h ? h.apply(this, arguments) : void 0;
      const R = Wa(this, p, w, M), O = Ka(this);
      if (!R || !Nu(R.x, R.y, O)) return h ? h.apply(this, arguments) : void 0;
      const C = Number((p == null ? void 0 : p.deltaY) ?? (p == null ? void 0 : p.wheelDeltaY) ?? (typeof w == "number" ? w : 0));
      return r.applyWheel(Math.sign(C)) && ((L = this.setDirtyCanvas) == null || L.call(this, !0, !1)), typeof (p == null ? void 0 : p.preventDefault) == "function" && p.preventDefault(), typeof (p == null ? void 0 : p.stopPropagation) == "function" && p.stopPropagation(), !0;
    } catch {
      return h ? h.apply(this, arguments) : void 0;
    }
  };
  const y = t.onRemoved, b = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = n, t.onDrawForeground = e, t.onMouseDown = a, t.onMouseMove = s, t.onMouseUp = l, t.onMouseLeave = f, t.onMouseWheel = h, t.onRemoved = y, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = b, t.onRemoved = function() {
    return b(), Ti.unregister(this), co.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function qm(t, e) {
  const n = uo(
    t,
    ["erp_image", "bg_erp"],
    () => {
      var l, f;
      return (f = (l = t.__panoDomPreview) == null ? void 0 : l.requestDraw) == null ? void 0 : f.call(l);
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
function Xm(t, e) {
  var y, b, p, w, M, E, L, R, O, C, A, D;
  const n = (b = (y = e == null ? void 0 : e.painting) == null ? void 0 : y.paint) == null ? void 0 : b.strokes, r = (w = (p = e == null ? void 0 : e.painting) == null ? void 0 : p.mask) == null ? void 0 : w.strokes, a = Array.isArray(n) && n.length > 0, s = Array.isArray(r) && r.length > 0;
  if (!a && !s) return null;
  const l = qm(t, e), f = `${l.width}x${l.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== f) && (t.__panoPreviewPaintEngine = Us(l), t.__panoPreviewPaintDescriptorKey = f, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const h = {
    paint: n || null,
    mask: r || null,
    groups: ((M = e == null ? void 0 : e.painting) == null ? void 0 : M.groups) || null,
    rasterObjects: ((E = e == null ? void 0 : e.painting) == null ? void 0 : E.raster_objects) || null
  };
  return (((L = t.__panoPreviewPaintRevision) == null ? void 0 : L.paint) !== h.paint || ((R = t.__panoPreviewPaintRevision) == null ? void 0 : R.mask) !== h.mask || ((O = t.__panoPreviewPaintRevision) == null ? void 0 : O.groups) !== h.groups || ((C = t.__panoPreviewPaintRevision) == null ? void 0 : C.rasterObjects) !== h.rasterObjects) && (t.__panoPreviewPaintRevision = h, t.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    s ? "m1" : "m0",
    String(Array.isArray((A = e == null ? void 0 : e.painting) == null ? void 0 : A.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((D = e == null ? void 0 : e.painting) == null ? void 0 : D.raster_objects) ? e.painting.raster_objects.length : 0)
  ].join(":"), t.__panoPreviewPaintEngine.rebuildCommitted(e)), t.__panoPreviewPaintEngine;
}
function Zm(t) {
  var n;
  return (Array.isArray((n = t == null ? void 0 : t.painting) == null ? void 0 : n.groups) ? t.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, a) => Number((r == null ? void 0 : r.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function Jm(t, e) {
  const n = Xm(t, e);
  if (!n) return null;
  const r = Zm(e);
  return n.getErpTarget(r).displayPaint.canvas;
}
function Qm(t, e, n = null) {
  var f;
  const r = (f = e == null ? void 0 : e.painting_layer) == null ? void 0 : f.paint, a = En(r);
  if (!a) return null;
  t.__panoPaintingLayerImageCache || (t.__panoPaintingLayerImageCache = { src: "", img: null });
  const s = t.__panoPaintingLayerImageCache;
  if (s.img && s.src === a) return s.img;
  const l = new Image();
  return l.onload = () => {
    var h;
    n == null || n(), (h = t.setDirtyCanvas) == null || h.call(t, !0, !0);
  }, l.onerror = () => {
    var h;
    ((h = t.__panoPaintingLayerImageCache) == null ? void 0 : h.img) === l && (t.__panoPaintingLayerImageCache = { src: "", img: null });
  }, l.src = a, t.__panoPaintingLayerImageCache = { src: a, img: l }, l;
}
function Iu(t, e) {
  var s, l;
  const n = t == null ? void 0 : t.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((s = e == null ? void 0 : e.painting) == null ? void 0 : s.raster_objects) && e.painting.raster_objects.length > 0) {
    const f = Qm(t, e, () => {
      var h, y;
      return (y = (h = t.__panoDomPreview) == null ? void 0 : h.requestDraw) == null ? void 0 : y.call(h);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((l = e == null ? void 0 : e.painting_layer) == null ? void 0 : l.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = Jm(t, e);
  return a ? {
    source: a,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function ty(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function ey(t, e, n, r) {
  let a = (t == null ? void 0 : t[e]) || null;
  return (!a || a.width !== n || a.height !== r) && (a = document.createElement("canvas"), a.width = n, a.height = r, t[e] = a), a;
}
function ny(t, e, n, r, a, s) {
  if (!e || !n || !(r > 0) || !(a > 0)) return;
  const l = ty(n);
  if (l.width === r && l.height === a) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  const h = ey(t, s, l.width, l.height).getContext("2d", { willReadFrequently: !0 });
  if (!h) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  try {
    h.clearRect(0, 0, l.width, l.height), h.drawImage(n, 0, 0, l.width, l.height);
    const y = h.getImageData(0, 0, l.width, l.height).data, b = e.getImageData(0, 0, r, a), p = b.data, w = Math.max(0, l.width - 1), M = Math.max(0, l.height - 1);
    for (let E = 0; E < a; E += 1) {
      const L = (E + 0.5) * l.height / a - 0.5, R = W(Math.floor(L), 0, M), O = W(R + 1, 0, M), C = W(L - R, 0, 1);
      for (let A = 0; A < r; A += 1) {
        const D = (A + 0.5) * l.width / r - 0.5, $ = W(Math.floor(D), 0, w), ot = W($ + 1, 0, w), dt = W(D - $, 0, 1);
        let T = 0, wt = 0, V = 0, lt = 0;
        const xt = (Z, st, pt) => {
          const Y = (st * l.width + Z) * 4, ut = (y[Y + 3] || 0) / 255;
          T += ut * pt, wt += (y[Y] || 0) / 255 * ut * pt, V += (y[Y + 1] || 0) / 255 * ut * pt, lt += (y[Y + 2] || 0) / 255 * ut * pt;
        };
        if (xt($, R, (1 - dt) * (1 - C)), xt(ot, R, dt * (1 - C)), xt($, O, (1 - dt) * C), xt(ot, O, dt * C), T <= 1e-6) continue;
        const Mt = (E * r + A) * 4, at = 1 - T;
        p[Mt] = Math.round(W((wt + p[Mt] / 255 * at) * 255, 0, 255)), p[Mt + 1] = Math.round(W((V + p[Mt + 1] / 255 * at) * 255, 0, 255)), p[Mt + 2] = Math.round(W((lt + p[Mt + 2] / 255 * at) * 255, 0, 255)), p[Mt + 3] = 255;
      }
    }
    e.putImageData(b, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, r, a);
  }
}
function Eu(t, e, n, r) {
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0)), f = `${String(e.currentSrc || e.src || "")}|${a}x${s}|${r}`;
  let h = t.__panoPreviewBgPaint;
  if (!h || h.__revKey !== f || h.width !== a || h.height !== s) {
    (!h || h.width !== a || h.height !== s) && (h = document.createElement("canvas"), h.width = a, h.height = s, t.__panoPreviewBgPaint = h);
    const y = h.getContext("2d");
    y.clearRect(0, 0, a, s), y.drawImage(e, 0, 0, a, s), ny(t, y, n, a, s, "__panoPreviewOverlayScratch"), h.__revKey = f;
  }
  return h;
}
function ry(t, e, n, r = null) {
  const a = String(t.__panoPreviewMode || "stickers");
  Ad(t, a);
  const s = Mc(t), l = a === "cutout" ? Fm(t, () => {
    var L, R;
    return (R = (L = t.__panoDomPreview) == null ? void 0 : L.requestDraw) == null ? void 0 : R.call(L);
  }) : null, f = !!(l && l.complete && (l.naturalWidth || l.width)), h = e.parentElement, y = 1, b = Math.max(1, Number((h == null ? void 0 : h.clientWidth) || e.clientWidth || 0)), p = Math.max(1, Number((h == null ? void 0 : h.clientHeight) || e.clientHeight || 0)), w = Math.max(64, Math.round(b * y)), M = Math.max(64, Math.round(p * y)), E = e.getContext("2d");
  if (E)
    if (a === "cutout") {
      const L = zm(s), R = uo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var lt, xt;
          return (xt = (lt = t.__panoDomPreview) == null ? void 0 : lt.requestDraw) == null ? void 0 : xt.call(lt);
        }
      ), O = !!(R && R.complete && (R.naturalWidth || R.width));
      (e.width !== w || e.height !== M) && (e.width = w, e.height = M);
      const C = { x: 0, y: 0, w, h: M }, A = f ? W(Number((l.naturalWidth || l.width) / Math.max(1, Number(l.naturalHeight || l.height || 1))), 0.05, 20) : O ? W(Number((R.naturalWidth || R.width) / Math.max(1, Number(R.naturalHeight || R.height || 1))), 0.05, 20) : 1, D = L ? ym(L) : null, $ = W(Number((D == null ? void 0 : D.aspect) || A || 1), 0.05, 20), ot = Id(C, $), dt = qs(e, C);
      E.setTransform(1, 0, 0, 1, 0, 0), E.fillStyle = "#070707", E.fillRect(0, 0, w, M);
      let T = "none", wt = "Open editor and add frame", V = "";
      if (f)
        E.drawImage(l, ot.x, ot.y, ot.w, ot.h);
      else if (V = String((R == null ? void 0 : R.src) || ""), L)
        R && !O ? T = "loading" : O ? (T = "empty", wt = "Open editor or run node") : (T = "empty", wt = "Connect ERP image");
      else {
        if (O) {
          const lt = Iu(t, s), xt = lt != null && lt.source ? Eu(t, R, lt.source, lt.revision || "") : R;
          $m(E, xt, C, 0.44);
        }
        T = "empty", wt = "Open editor and add frame";
      }
      T === "loading" ? (Cu(E, ot, dt), Ma(t, !1), fr(t, !0, V)) : T === "empty" ? (Ma(t, !0, wt), fr(t, !1, "")) : (Ma(t, !1), fr(t, !1, ""));
    } else {
      Ma(t, !1), (e.width !== w || e.height !== M) && (e.width = w, e.height = M);
      const L = { x: 0, y: 0, w, h: M }, R = qs(e, L);
      E.setTransform(1, 0, 0, 1, 0, 0), E.clearRect(0, 0, w, M), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const O = Sc(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), C = Math.tan(Number(t.__panoPreviewView.fov || 100) * Sr * 0.5), A = uo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var at, Z;
          return (Z = (at = t.__panoDomPreview) == null ? void 0 : at.requestDraw) == null ? void 0 : Z.call(at);
        }
      ), D = !!(A && A.complete && (A.naturalWidth || A.width));
      E.fillStyle = "#1a1a1e", E.fillRect(0, 0, w, M);
      const $ = Dd(t, s), ot = Td(t, s, $), dt = wc(t.__panoPreviewView, s == null ? void 0 : s.coverage), T = Iu(t, s), wt = (T == null ? void 0 : T.source) || null, V = D && wt ? Eu(t, A, wt, (T == null ? void 0 : T.revision) || "") : A, lt = V !== A ? String(V.__revKey || "") : A ? [
        String(A.currentSrc || A.src || ""),
        Number(A.naturalWidth || A.width || 0),
        Number(A.naturalHeight || A.height || 0)
      ].join("|") : "";
      t.__panoDomRuntimeCore || (t.__panoDomRuntimeCore = qi());
      let xt = !1;
      if (D) {
        const Z = t.__panoDomRuntimeCore.syncState(
          Km(V, s, $, ot, "runtime_dom_scene", lt)
        ) ? t.__panoDomRuntimeCore.renderToTarget("runtime_preview", dt, {
          width: L.w,
          height: L.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        Z && (E.drawImage(Z, L.x, L.y, L.w, L.h), xt = !0);
      }
      const Mt = $.stickers;
      if (D && xt)
        fr(t, !1, "");
      else if (D)
        fo(t, E, L, O, C, V, oo), fr(t, !1, "");
      else if (wt)
        fo(t, E, L, O, C, wt, oo), fr(t, !!A && !D, String((A == null ? void 0 : A.src) || ""));
      else {
        const at = !!A && !D;
        fr(t, at, String((A == null ? void 0 : A.src) || "")), at && Cu(E, L, R);
      }
      if ((!D || Mt.length === 0) && Rd(E, L, O, C, R), !xt && Mt.length > 0) {
        const at = Vd(t), Z = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, st = at || Z, pt = st ? 8 : 12, Y = st ? 6 : 9;
        Mt.forEach((ut) => Od(E, t, L, O, C, s, ut, pt, Y));
      } else if (!A || !D) {
        const at = Math.max(14, Math.round(16 * R));
        E.fillStyle = "rgba(212,212,216,0.85)", E.font = `600 ${at}px Plus Jakarta Sans, Geist, sans-serif`, E.textAlign = "center", E.fillText("Open editor to add stickers", w * 0.5, M * 0.5 + 24 * R);
      }
    }
}
function fo(t, e, n, r, a, s, l = vm) {
  const f = Mc(t), h = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  t.__panoBackgroundCore || (t.__panoBackgroundCore = qi());
  const y = Eo({
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
    yawDeg: Number(h.yaw || 0),
    pitchDeg: Number(h.pitch || 0),
    fovDeg: Number(h.fov || 100),
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
function Du(t, e, n, r, a, s, l = 1) {
  let f = !1;
  t.strokeStyle = s, t.lineWidth = l, t.beginPath();
  for (const h of e) {
    const y = Ld(h, n, r, a);
    if (!y) {
      f = !1;
      continue;
    }
    f ? t.lineTo(y.x, y.y) : (t.moveTo(y.x, y.y), f = !0);
  }
  t.stroke();
}
function Rd(t, e, n, r, a = 1) {
  t.save();
  const s = "rgba(63, 63, 70, 0.5)", l = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const b = [];
    for (let p = -180; p <= 180; p += 15) b.push(pr(p, y));
    Du(t, b, n, e, r, y === 0 ? l : s, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const b = [];
    for (let p = -89; p <= 89; p += 15) b.push(pr(y, p));
    Du(t, b, n, e, r, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : s, y % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: pr(0, 0) },
    { name: "Right", dir: pr(90, 0) },
    { name: "Back", dir: pr(180, 0) },
    { name: "Left", dir: pr(-90, 0) }
  ];
  t.fillStyle = "rgba(250, 250, 250, 0.32)";
  const h = Math.max(9, Math.round(11 * a));
  t.font = `500 ${h}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", f.forEach((y) => {
    const b = Ld(y.dir, n, e, r);
    b && t.fillText(y.name, b.x, b.y + 20 * a);
  }), t.restore();
}
function iy(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function Fd(t) {
  const e = iy(t);
  e.dragging = !1, e.hqFrames = bm;
}
function ho(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function Vd(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function ay(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function oy(t, e, n = 20) {
  var l;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const r = (l = e.getBoundingClientRect) == null ? void 0 : l.call(e);
  if (!r) return !1;
  const a = Number(t.clientX) - Number(r.left || 0), s = Number(t.clientY) - Number(r.top || 0);
  return a >= r.width - n && s >= r.height - n;
}
function Rr(t, e) {
  return oy(t, e) ? !1 : (ay(t), !0);
}
function sy() {
  var n;
  const t = (n = oe == null ? void 0 : oe.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function cy(t) {
  var n;
  if (!t) return;
  const e = (n = oe == null ? void 0 : oe.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function ly(t, e = 360, n = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const r = sr(t), a = Number((r == null ? void 0 : r[0]) || 0), s = Number((r == null ? void 0 : r[1]) || 0);
  if (!Number.isFinite(a) || !Number.isFinite(s) || a >= e && s >= n) return;
  const l = [Math.max(e, a), Math.max(n, s)];
  try {
    typeof t.setSize == "function" ? t.setSize(l) : t.size = l, t.__panoStandaloneBootSized = !0;
  } catch (f) {
    String((f == null ? void 0 : f.message) || f || "unknown");
  }
}
function uy(t, e = 0, n = null, r = 1200) {
  const a = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = a > 0, !(a <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var s, l;
    t.__panoBootMinHeightTimer = null, (s = t == null ? void 0 : t.__panoDomPreview) != null && s.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, n == null || n(), (l = t.setDirtyCanvas) == null || l.call(t, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Tu(t, e = null, n = 0) {
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
      t.__panoUserResized = !0, ho(t, 150), e == null || e(), Hd(t, 180, e);
    }
  };
}
function Hd(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    t.__panoResizeSettleTimer = null, n == null || n(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function $r(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function fy(t, e = {}) {
  var pt;
  const n = e.__allowStandalone === !0, r = Mm(t);
  if (r && !n) {
    xd(t);
    return;
  }
  r && ly(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", co.register(t);
  const a = t.__panoPreviewMode === "stickers", s = e.__noLegacyFallback === !0, l = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null, String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""), a || Ti.unregister(t);
  const f = String(e.__panoForcedPath || "").trim(), h = a ? wd(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: wr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (h.chosenPath = f, h.reason = "controller_target_backend");
  const y = a ? h.chosenPath : "dom", b = h.signature || wr(t);
  if (Number(t.__panoRebindGeneration || 0), Ks(t), t == null || t.id, t.__panoPreviewMode, h.reason, h.frontendVersionRaw, t.addDOMWidget, sr(t), t.__panoFrontendSig = b, t.__panoStickersPath = y, a && Ti.register(t), a && y === "legacy_draw") {
    if (s) return;
    Xr(t, { keepMonitor: !0 }), ka(t);
    return;
  }
  if ((pt = t.__panoDomPreview) != null && pt.widget) return;
  if (t.__panoLegacyPreviewHooked && Xr(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    a && !s && ka(t);
    return;
  }
  const p = e.noPreview === !0, w = a || p ? 0 : 56, M = document.createElement("div");
  if (wm(), M.className = "pano-node-preview-dom", M.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), p && M.classList.add("pano-node-preview--no-preview"), M.setAttribute("data-capture-wheel", "true"), M.setAttribute("tabindex", "-1"), M.style.cssText = [
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
    const Y = t.addDOMWidget(Gs(), "preview", M, Tu(t, null));
    $r(t), t.__panoDomPreview = { widget: Y, root: M, requestDraw: () => {
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
  const L = document.createElement("canvas");
  L.style.cssText = [
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
  const R = document.createElement("div");
  R.style.cssText = [
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
  ].join(";"), R.textContent = "Open editor and add frame", E.appendChild(L), E.appendChild(R), M.appendChild(E), _d(t, 120, 120), $r(t);
  let O = null;
  try {
    uy(t, w, () => {
      var Y, ut;
      return (ut = (Y = t.__panoDomPreview) == null ? void 0 : Y.requestDraw) == null ? void 0 : ut.call(Y);
    }), O = t.addDOMWidget(
      Gs(),
      "preview",
      M,
      Tu(t, () => {
        var Y, ut;
        return (ut = (Y = t.__panoDomPreview) == null ? void 0 : Y.requestDraw) == null ? void 0 : ut.call(Y);
      }, w)
    );
  } catch {
    a && ka(t);
    return;
  }
  const C = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, A = () => {
    C.needsDraw = !0, C.raf || (C.raf = requestAnimationFrame(ot));
  }, D = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    ho(t, 150), A();
  }) : null;
  D == null || D.observe(E);
  const $ = () => {
    if (!a || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const Y = 3, ut = (St) => {
      requestAnimationFrame(() => {
        var Dt;
        const Lt = !!(M != null && M.isConnected && (E != null && E.isConnected) && (L != null && L.isConnected) && Number(E.clientHeight || 0) > 0 && Number(L.clientHeight || 0) > 0);
        if (!Lt && St < Y) {
          ut(St + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, t.__panoPreviewMode, Number((E == null ? void 0 : E.clientHeight) || 0), Number((L == null ? void 0 : L.clientHeight) || 0), !Lt) {
          if (s) {
            t.__panoPreviewMode, Number((E == null ? void 0 : E.clientHeight) || 0), Number((L == null ? void 0 : L.clientHeight) || 0);
            return;
          }
          Xr(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", ka(t), (Dt = t.setDirtyCanvas) == null || Dt.call(t, !0, !0);
        }
      });
    };
    ut(1);
  }, ot = (Y) => {
    var St, Lt, Dt;
    C.raf = 0;
    const ut = dt.stepInertia(Y);
    (C.needsDraw || ut) && (C.needsDraw = !1, (St = t.flags) != null && St.collapsed || ry(t, L, null, dt), (Lt = t.setDirtyCanvas) == null || Lt.call(t, !0, !1)), (ut || C.needsDraw) && (C.raf = requestAnimationFrame(ot)), xm() && (!t.__panoDebugLastTs || Y - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = Y, t.__panoPreviewMode, sr(t), vi(M), vi(E), vi(L), vi(M.parentElement), vi((Dt = M.parentElement) == null ? void 0 : Dt.parentElement), Number(L.width || 0), Number(L.height || 0), void 0);
  }, dt = Do({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (Y) => {
      t.__panoPreviewView = Y;
    },
    onInteraction: () => {
      A();
    }
  });
  L.addEventListener("pointerdown", (Y) => {
    var ut, St;
    Rr(Y, E) && l && Y.button === 0 && ((ut = M.focus) == null || ut.call(M), (St = L.setPointerCapture) == null || St.call(L, Y.pointerId), L.style.cursor = "grabbing", dt.startDrag(Y.clientX, Y.clientY, Y.pointerId));
  }), L.addEventListener("pointermove", (Y) => {
    !l || !dt.state.drag.active || (Rr(Y, E), dt.moveDrag(Y.clientX, Y.clientY, "pano"));
  });
  const T = (Y) => {
    var ut;
    !l || !dt.state.drag.active || (Rr(Y, E), (ut = L.releasePointerCapture) == null || ut.call(L, Y.pointerId), L.style.cursor = "grab", dt.endDrag(), Fd(t), A());
  };
  L.addEventListener("pointerup", T), L.addEventListener("pointercancel", T), L.addEventListener("pointerleave", (Y) => {
    dt.state.drag.active && T(Y);
  });
  const wt = (Y) => {
    var St, Lt, Dt;
    if (!Rr(Y, E) || !l) return;
    const ut = sy();
    dt.applyWheelEvent(Y) && A(), (St = Y.preventDefault) == null || St.call(Y), (Lt = Y.stopPropagation) == null || Lt.call(Y), (Dt = Y.stopImmediatePropagation) == null || Dt.call(Y), requestAnimationFrame(() => {
      var ie, Ne;
      cy(ut), (Ne = (ie = oe == null ? void 0 : oe.canvas) == null ? void 0 : ie.setDirty) == null || Ne.call(ie, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((Y) => {
    E.addEventListener(Y, wt, { passive: !1, capture: !0 }), L.addEventListener(Y, wt, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((Y) => {
    L.addEventListener(Y, (ut) => Rr(ut, E)), E.addEventListener(Y, (ut) => Rr(ut, E));
  });
  const V = Gi(t, "state_json");
  if (V && !V.__panoPreviewPatchedCb) {
    V.__panoPreviewPatchedCb = !0;
    const Y = V.callback;
    V.callback = (ut) => {
      const St = Y ? Y(ut) : void 0;
      return A(), St;
    };
  }
  const lt = Gi(t, "bg_color");
  if (lt && !lt.__panoPreviewPatchedCb) {
    lt.__panoPreviewPatchedCb = !0;
    const Y = lt.callback;
    lt.callback = (ut) => {
      const St = Y ? Y(ut) : void 0;
      return A(), St;
    };
  }
  const xt = t.onRemoved, Mt = t.onResize, at = t.onExecuted;
  t.onExecuted = function(Y) {
    Rm(t, Y), Ys(t), $r(t), A();
    const ut = at ? at.apply(this, arguments) : void 0;
    return $r(t), ut;
  };
  const Z = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return Ys(t), $r(t), A(), Z ? Z.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var ut;
    const Y = Mt ? Mt.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ho(this, 150), A(), (ut = this.setDirtyCanvas) == null || ut.call(this, !0, !1), Y;
  }, t.onRemoved = function() {
    return st(), Ti.unregister(this), co.unregister(this), xt ? xt.apply(this, arguments) : void 0;
  };
  const st = () => {
    var Y;
    C.raf && cancelAnimationFrame(C.raf), (Y = D == null ? void 0 : D.disconnect) == null || Y.call(D), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = Mt, t.onExecuted = at, t.onConnectionsChange = Z, t.onRemoved = xt;
  };
  t.__panoDomRestore = st, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: O, root: M, canvas: L, requestDraw: A, state: C, emptyHintEl: R }, $(), A();
}
function Lu(t, e = {}) {
  Sd(t).attach({
    ...e,
    mode: "cutout"
  });
}
const po = Math.PI / 180;
function kr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Ou(t, e) {
  return kr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Na(t, e) {
  return kr(t.x * e, t.y * e, t.z * e);
}
function Ru(t, e) {
  return kr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Pa(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return kr(t.x / e, t.y / e, t.z / e);
}
function dy(t, e) {
  const n = t * po, r = e * po, a = Math.cos(r);
  return kr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function hy(t, e, n = 0) {
  const r = dy(t, e), a = kr(0, 1, 0);
  let s = Ru(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = kr(1, 0, 0)), s = Pa(s);
  const l = Pa(Ru(r, s)), f = n * po, h = Math.cos(f), y = Math.sin(f), b = Ou(Na(s, h), Na(l, y)), p = Ou(Na(s, -y), Na(l, h));
  return { fwd: r, right: Pa(b), up: Pa(p) };
}
const Ca = 140, py = 180, Fu = 40, ks = 10;
function Vu(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":");
  return { full: e, tail: String(n[n.length - 1] || "").trim() };
}
function Hu(t, e) {
  const n = Vu(t), r = Vu(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function zu(t) {
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
  return typeof ((s = Ge) == null ? void 0 : s.apiURL) == "function" ? Ge.apiURL(a) : a;
}
function Li(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Li(t[0]);
    const e = typeof t[0] == "string" ? String(t[0] || "").trim() : "";
    if (e)
      return zu({
        filename: e,
        subfolder: String(t[1] || "").trim(),
        type: String(t[2] || "output").trim() || "output"
      });
    for (const n of t) {
      const r = Li(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : zu(t);
}
function $u(t) {
  var a;
  const e = (a = dn) == null ? void 0 : a.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  if (e instanceof Map) {
    for (const s of e.keys())
      if (Hu(s, n)) return e.get(s);
  } else
    for (const s of Object.keys(e))
      if (Hu(s, n)) return e[s];
  return null;
}
function gy(t, e = "erp_image") {
  var E, L, R, O, C, A, D, $, ot, dt, T, wt;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let r = null;
  const a = n.find((V) => String((V == null ? void 0 : V.name) || "") === String(e));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const V = n.find((lt) => String((lt == null ? void 0 : lt.type) || "").toUpperCase() === "IMAGE" && (lt == null ? void 0 : lt.link) != null);
    (V == null ? void 0 : V.link) != null && (r = V.link);
  }
  if (r == null) return "";
  const s = ((L = (E = t == null ? void 0 : t.graph) == null ? void 0 : E.links) == null ? void 0 : L[r]) || ((C = (O = (R = dn) == null ? void 0 : R.graph) == null ? void 0 : O.links) == null ? void 0 : C[r]);
  if (!s) return "";
  const l = Number(s.origin_id);
  if (!Number.isFinite(l)) return "";
  const f = ($ = (D = (A = dn) == null ? void 0 : A.graph) == null ? void 0 : D.getNodeById) == null ? void 0 : $.call(D, l), h = $u(l), y = $u(t == null ? void 0 : t.id), b = [
    h == null ? void 0 : h.images,
    (ot = h == null ? void 0 : h.ui) == null ? void 0 : ot.pano_input_images,
    h == null ? void 0 : h.pano_input_images,
    (dt = y == null ? void 0 : y.ui) == null ? void 0 : dt.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const V of b)
    if (Array.isArray(V))
      for (const lt of V) {
        const xt = Li(lt);
        if (xt) return xt;
      }
  let p = [];
  try {
    p = typeof ((T = dn) == null ? void 0 : T.getNodeImageUrls) == "function" ? dn.getNodeImageUrls(f) || [] : [];
  } catch {
    p = [];
  }
  if (Array.isArray(p) && p.length > 0)
    for (const V of p) {
      const lt = Li(V);
      if (lt) return lt;
    }
  if (f) {
    const V = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const lt of V) {
      const xt = Li(lt);
      if (xt) return xt;
    }
  }
  const w = (wt = f == null ? void 0 : f.widgets) == null ? void 0 : wt.find((V) => String((V == null ? void 0 : V.name) || "").toLowerCase() === "image"), M = String((w == null ? void 0 : w.value) || "").trim();
  return M ? Ge.apiURL(`/view?filename=${encodeURIComponent(M)}&type=input&subfolder=`) : "";
}
function ju(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function Uu(t, e, n, r, a, s) {
  var p, w, M;
  if (e.clearRect(0, 0, n, r), e.fillStyle = "#070707", e.fillRect(0, 0, n, r), !s || !s.complete || !(s.naturalWidth || s.width) || n <= 1 || r <= 1) {
    ju(e, n, r);
    return;
  }
  const l = hy(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * po * 0.5), h = Number(((M = (w = (p = t == null ? void 0 : t.widgets) == null ? void 0 : p.find) == null ? void 0 : w.call(p, (E) => (E == null ? void 0 : E.name) === "coverage")) == null ? void 0 : M.value) || 360) === 180 ? 180 : 360;
  t.__panoStandaloneCore || (t.__panoStandaloneCore = qi());
  const y = Eo({
    stateRevision: [
      "standalone_preview_scene",
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0),
      h
    ].join("|"),
    backgroundSource: s,
    backgroundRevision: [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|"),
    coverageDeg: h,
    scene: To(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!t.__panoStandaloneCore.syncState(y) && (() => {
    const E = t.__panoStandaloneCore.renderToTarget(
      "preview_node",
      mm(a, h),
      { width: n, height: r, dpr: window.devicePixelRatio || 1 }
    );
    return E ? (e.drawImage(E, 0, 0, n, r), !0) : !1;
  })() || (fo(t, e, { x: 0, y: 0, w: n, h: r }, l, f, s, oo), ju(e, n, r));
}
function Bu(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class my {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Do({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: $e(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: W(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: W(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, s, l, f;
        const r = (s = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : s.call(a);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((l = this.canvas) == null ? void 0 : l.clientWidth) || 0)),
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
      const l = e.orig.onExecuted ? e.orig.onExecuted.apply(this, arguments) : void 0;
      return e.refreshImage(), l;
    }, this.node.onConnectionsChange = function() {
      const l = e.orig.onConnectionsChange ? e.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return e.refreshImage(), l;
    }, this.node.onResize = function() {
      const l = e.orig.onResize ? e.orig.onResize.apply(this, arguments) : void 0;
      return e.requestDraw(), l;
    }, this.node.onRemoved = function() {
      const l = e.orig.onRemoved ? e.orig.onRemoved.apply(this, arguments) : void 0;
      return e.teardown(), l;
    };
    const n = ((s = (a = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : a.find) == null ? void 0 : s.call(a, (l) => (l == null ? void 0 : l.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...l) => {
      const f = e.orig.coverageWidgetCallback ? e.orig.coverageWidgetCallback(...l) : void 0;
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
        `min-height:${Ca}px`,
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
          return Ca;
        },
        getHeight() {
          return Ca;
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
            minHeight: Math.max(Ca, Number(s.minHeight || 0)),
            minWidth: Math.max(py, Number(s.minWidth || 0))
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
      var s, l, f;
      a.button === 0 && ((s = n.focus) == null || s.call(n, { preventScroll: !0 }), (l = e.setPointerCapture) == null || l.call(e, a.pointerId), e.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a));
    }), e.addEventListener("pointermove", (a) => {
      var s;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (s = a.stopImmediatePropagation) == null || s.call(a));
    });
    const r = (a) => {
      var s, l;
      this.controller.state.drag.active && ((s = e.releasePointerCapture) == null || s.call(e, a.pointerId), e.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
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
      var l;
      const a = e.localPoint(r);
      if (!a) return e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
      const s = e.getLegacyPreviewRect();
      return Bu(a.x, a.y, s) ? (e.legacyDragPointer = !0, e.controller.startDrag(a.x - s.x, a.y - s.y), (l = this.setDirtyCanvas) == null || l.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var l;
      if (!e.legacyDragPointer || !e.controller.state.drag.active)
        return e.orig.onMouseMove ? e.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = e.localPoint(r);
      if (!a) return !0;
      const s = e.getLegacyPreviewRect();
      return e.controller.moveDrag(a.x - s.x, a.y - s.y, "pano"), (l = this.setDirtyCanvas) == null || l.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !e.legacyDragPointer && !e.controller.state.drag.active ? e.orig.onMouseUp ? e.orig.onMouseUp.apply(this, arguments) : void 0 : (e.legacyDragPointer = !1, e.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, a) {
      var y, b, p, w, M, E;
      const s = Wa(this, n, r, a), l = e.getLegacyPreviewRect();
      if (!s || !Bu(s.x, s.y, l))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof r == "number" ? r : 0));
      Number(((y = e.view) == null ? void 0 : y.fov) || 100);
      const h = e.controller.applyWheel(Math.sign(f));
      return Number(((b = e.view) == null ? void 0 : b.fov) || 100), h && ((p = this.setDirtyCanvas) == null || p.call(this, !0, !1)), (w = n == null ? void 0 : n.preventDefault) == null || w.call(n), (M = n == null ? void 0 : n.stopPropagation) == null || M.call(n), (E = n == null ? void 0 : n.stopImmediatePropagation) == null || E.call(n), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, s, l;
    const e = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - ks * 2), n = Math.max(60, Number(((l = (s = this.node) == null ? void 0 : s.size) == null ? void 0 : l[1]) || 0) - Fu - ks);
    return { x: ks, y: Fu, w: e, h: n };
  }
  drawLegacy(e) {
    var r, a;
    if (!e || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (e.save(), e.translate(n.x, n.y), Uu(this.node, e, n.w, n.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, n.w, n.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), e.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const e = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, r = Math.max(1, Math.round(e.width * n)), a = Math.max(1, Math.round(e.height * n));
    (this.canvas.width !== r || this.canvas.height !== a) && (this.canvas.width = r, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    const e = gy(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (Uu(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (s = (a = this.node).setDirtyCanvas) == null || s.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var n, r, a, s, l, f, h, y, b, p, w;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || a.call(r), this.resizeObserver = null;
    try {
      (l = (s = this.root) == null ? void 0 : s.remove) == null || l.call(s);
    } catch {
    }
    if (Array.isArray((f = this.node) == null ? void 0 : f.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((M) => M !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const e = ((b = (y = (h = this.node) == null ? void 0 : h.widgets) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (M) => (M == null ? void 0 : M.name) === "coverage")) || null;
    e && (e.callback = this.orig.coverageWidgetCallback), (w = (p = this.node.__panoStandaloneCore) == null ? void 0 : p.dispose) == null || w.call(p), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function yy(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const n = new my(t, e);
  t.__panoPreviewNodeRuntime = n, n.attach();
}
function vy(t, e, n) {
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
  const l = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const f = l ? l.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
}
function zd(t) {
  return !!(t != null && t.prototype);
}
function Xs(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function by(t, e = {}) {
  zd(t) || yy(t, {
    ...e,
    onOpen: Xs(t, e.onOpen)
  });
}
function _y(t, e = {}) {
  if (!zd(t)) {
    Lu(t, {
      ...e,
      onOpen: Xs(t, e.onOpen)
    });
    return;
  }
  vy(t, "cutout_preview", (n) => {
    Lu(n, {
      ...e,
      onOpen: Xs(n, e.onOpen)
    });
  });
}
const Ze = {
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
}, $n = "pen";
function Gu(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function xy(t = 80, e = null, n = 8) {
  const r = [];
  let a = -1;
  const s = Math.max(1, Number(t || 80)), l = Math.max(1, Number(n || 8));
  function f(y) {
    if (r.splice(0, r.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((p) => {
      r.push(String(p || ""));
    }), !r.length)) return;
    const b = Number(y.index);
    Number.isInteger(b) ? b === -1 ? a = -1 : a = Math.max(0, Math.min(r.length - 1, b)) : a = r.length - 1;
  }
  function h(y) {
    r[a] !== y && (r.splice(a + 1), r.push(y), r.length > s && r.shift(), a = r.length - 1);
  }
  return f(e), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(y) {
      h(String(y || ""));
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
      const y = r.length, b = Math.max(0, y - l), p = a >= 0 ? Math.max(0, Math.min(a, b)) : b, w = r.slice(p, p + l), M = a < 0 ? -1 : Math.max(-1, Math.min(w.length - 1, a - p));
      return {
        version: 1,
        entries: w,
        index: M
      };
    },
    hydrate: f
  };
}
function Xt(t, e = null) {
  const n = Number(t);
  return Number.isFinite(n) ? n : e;
}
function wy() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Sy(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    if (!r || typeof r != "object") continue;
    const a = String(r.actionGroupId || r.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const s = Xt(r.z_index ?? r.zIndex, e.length);
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
function My(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function ky(t, e) {
  if (!t || typeof t != "object" || !e) return null;
  const n = Xt(t.t, 0), r = Xt(t.widthScale, null), a = Xt(t.pressureLike, null);
  if (e.kind === "ERP_GLOBAL") {
    const s = Xt(t.u, null), l = Xt(t.v, null);
    if (s == null || l == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (s % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, l)),
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  if (e.kind === "FRAME_LOCAL") {
    const s = Xt(t.u, null), l = Xt(t.v, null);
    if (s == null || l == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: e.frameId,
      u: s,
      v: l,
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  return null;
}
function Aa(t, e, n = 1) {
  if (!Array.isArray(t)) return null;
  const r = [];
  for (const a of t) {
    const s = ky(a, e);
    if (!s) return null;
    r.push(s);
  }
  return r.length >= n ? r : null;
}
function Ny(t, e, n, r) {
  if (!t || typeof t != "object") return null;
  const a = String(t.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const h = Aa(t.points, e, 3);
    return h ? { geometryKind: a, points: h } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const s = Aa(t.points, e, 1);
  if (!s) return null;
  const l = Aa(t.rawPoints, e, 1), f = Aa(t.processedPoints, e, 1);
  return {
    geometryKind: a,
    points: s,
    rawPoints: l || s.map((h) => ({ ...h })),
    processedPoints: f || s.map((h) => ({ ...h }))
  };
}
function Py(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = My(t.targetSpace);
  if (!n) return null;
  const r = String(t.toolKind || "").trim(), a = Ny(t.geometry, n, r, e === "paint");
  if (!a) return null;
  const s = Xt(t.size, null), l = Xt(t.opacity, null);
  if (s == null || l == null) return null;
  const f = String(t.id || "").trim(), h = String(t.actionGroupId || "").trim();
  if (!f || !h) return null;
  const y = Xt(t.radiusValue, null), b = String(t.radiusModel || "").trim() || null;
  let p = null;
  if (e === "paint") {
    const w = t.color;
    if (!w || typeof w != "object") return null;
    p = {
      r: Math.max(0, Math.min(1, Xt(w.r, 0))),
      g: Math.max(0, Math.min(1, Xt(w.g, 0))),
      b: Math.max(0, Math.min(1, Xt(w.b, 0))),
      a: Math.max(0, Math.min(1, Xt(w.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: h,
    targetSpace: n,
    layerKind: e,
    toolKind: r,
    brushPresetId: String(t.brushPresetId || "").trim() || null,
    size: Math.max(0, s),
    opacity: Math.max(0, Math.min(1, l)),
    hardness: Xt(t.hardness, null),
    flow: Xt(t.flow, null),
    spacing: Xt(t.spacing, null),
    createdAt: Math.trunc(Xt(t.createdAt, 0)),
    color: p,
    radiusModel: b,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function Ku(t, e) {
  const n = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return n;
  for (const r of t.strokes) {
    const a = Py(r, e);
    a && n.strokes.push(a);
  }
  return n;
}
function Cy(t) {
  if (!t || typeof t != "object") return null;
  const e = Xt(t.u0, null), n = Xt(t.v0, null), r = Xt(t.u1, null), a = Xt(t.v1, null);
  if (e == null || n == null || r == null || a == null) return null;
  const s = (f) => Math.max(0, Math.min(1, f)), l = { u0: s(e), v0: s(n), u1: s(r), v1: s(a) };
  return l.u1 <= l.u0 || l.v1 <= l.v0 ? null : l;
}
function Ay(t) {
  const e = t || {};
  return {
    du: Xt(e.du, 0) ?? 0,
    dv: Xt(e.dv, 0) ?? 0,
    rot_deg: Xt(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Xt(e.scale, 1) ?? 1)
  };
}
function Iy(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const n = String(t.id || "").trim();
  if (!n) return null;
  const r = String(t.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const a = String(t.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const s = Cy(t.bbox);
  return s ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, Xt(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: s,
    rasterDataUrl: a,
    transform: Ay(t.transform)
  } : null;
}
function Ey(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    const a = Iy(r, e.length);
    !a || n.has(a.id) || (n.add(a.id), e.push(a));
  }
  return e;
}
function Oi(t) {
  const e = wy();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: Sy(t.groups),
    paint: Ku(t.paint, "paint"),
    mask: Ku(t.mask, "mask"),
    raster_objects: Ey(t.raster_objects)
  };
}
function bi(t, e, n, r) {
  const a = Array.isArray(t) ? t.find((s) => String((s == null ? void 0 : s[e]) || "") === String(n || "")) : null;
  a && Object.assign(a, r);
}
function Dy(t = {}) {
  const e = String(t.preview_quality || "balanced"), n = [
    { value: "draft", label: "Draft" },
    { value: "balanced", label: "Balanced" },
    { value: "high", label: "High" }
  ];
  return {
    open: !1,
    invertX: !!t.invert_view_x,
    invertY: !!t.invert_view_y,
    qualityOpen: !1,
    qualityLabel: (n.find((r) => r.value === e) || n[1]).label,
    qualityOptions: n.map((r) => ({ ...r, active: r.value === e }))
  };
}
function Ty({
  editor: t,
  swatches: e,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: s,
  hsv01ToRgb: l,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: h
}) {
  var A, D;
  const y = t.primaryTool === "paint" || t.primaryTool === "mask", b = {
    visible: y,
    activePane: y ? t.primaryTool : "",
    showColorRow: !0,
    colorEnabled: t.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(t.customPaintColor, 1),
    colorPopOpen: y ? !!n : !1,
    pickerHueColor: r({ r: 1, g: 0, b: 0, a: 1 }, 1),
    pickerSat: "100%",
    pickerVal: "0%",
    pickerHue: "0%",
    pickerSvLeft: "100%",
    pickerSvTop: "0%",
    pickerHueLeft: "0%",
    alphaValue: 100,
    alphaText: "100%",
    historyVisible: !0,
    historyEntries: Array.from({ length: 8 }, ($, ot) => ({ index: ot, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: t.paintTool, mask: t.maskTool }
  };
  if (!y) return b;
  const p = ((A = e.find(($) => a(t.paintColor, $.color))) == null ? void 0 : A.id) || "", w = !p, M = s(t.customPaintColor), E = Math.round(Math.max(0, Math.min(1, Number(((D = t.customPaintColor) == null ? void 0 : D.a) ?? 1))) * 100), L = f(t.primaryTool === "paint" ? t.paintTool : t.maskTool), R = t.brushSizes[L] ?? 10, O = h(), C = Array.from({ length: 8 }, ($, ot) => t.customPaintHistory[ot] || null);
  return {
    ...b,
    colorEnabled: t.paintTool !== "eraser",
    activeSwatchId: p,
    customColorActive: w,
    customColorCss: r(t.customPaintColor, 1),
    pickerHueColor: r({ ...l(M.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    alphaValue: E,
    alphaText: `${E}%`,
    historyEntries: C.map(($, ot) => ({
      index: ot,
      color: $ ? { cssColor: r($, 1) } : null
    })),
    sizeValue: R,
    sizeText: String(R),
    sizeFill: `${Math.max(0, Math.min(100, (R - 1) / 119 * 100))}%`,
    sizeDisabled: O,
    activeTools: { paint: t.paintTool, mask: t.maskTool }
  };
}
function Ly({ coverage: t, uiSettings: e, normalizeCoverageValue: n }) {
  return {
    coverage: { value: n(t), disabled: !1 },
    transformTitle: !1,
    notes: [],
    params: [],
    paramsDisabled: !0,
    visibilityRows: [],
    uiSettings: e,
    footerButtons: [{ action: "close-preview", label: "Close", primary: !0 }]
  };
}
function Oy({
  coverage: t,
  readOnly: e,
  selectionPicker: n,
  enabled: r,
  selectedKind: a,
  selectedItems: s,
  params: l,
  notes: f,
  visibilityRows: h,
  uiSettings: y,
  normalizeCoverageValue: b
}) {
  return {
    coverage: { value: b(t), disabled: !!e },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || a === "stroke" || s.length > 1,
      label: "Copy State"
    },
    params: l,
    notes: f,
    paramsDisabled: !r,
    visibilityRows: h,
    uiSettings: e ? null : y,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function Ry({
  type: t,
  selected: e,
  selectedItems: n,
  selectedKind: r,
  geom: a,
  allLocked: s,
  selectedLocked: l,
  activeAspect: f,
  cutoutAspectOpen: h,
  isExternalSticker: y,
  isStickerHidden: b,
  canRestoreSelectedToInitial: p,
  iconSet: w
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let M = [];
  if (n.length > 1)
    M = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (r === "stroke")
    M = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  else if (t === "stickers" || r === "image") {
    if (M = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: w.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: w.send_back }
    ], y(e) || (M.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: w.duplicate }), M.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: w.replace_image })), y(e)) {
      const A = p(), D = b(e);
      M.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: A ? "Back to initial position" : "Already at initial position",
        icon: w.back_initial,
        disabled: !A
      }), M.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: D ? "Show" : "Hide",
        tip: D ? "Show input image" : "Hide input image",
        icon: D ? w.eye : w.eye_dashed
      });
    }
    M.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? w.lock_open : w.lock_closed }), y(e) || M.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete });
  } else
    M = [
      {
        key: "aspect",
        kind: "aspect",
        icon: w.aspect,
        open: !!h,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((A) => ({ value: A, label: A, active: f === A }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Rotate 90°", tip: "Rotate 90°", icon: w.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? w.lock_open : w.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: w.delete }
    ];
  const E = a.corners.map((A) => A.x), L = a.corners.map((A) => A.y), R = Math.min(...E), O = Math.max(...E), C = Math.max(...L);
  return {
    visible: !0,
    left: (R + O) * 0.5,
    top: C + 18,
    items: M,
    anchor: { minX: R, maxX: O, maxY: C }
  };
}
const Gt = {
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
  eye_dashed: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.51404 3.15793C7.48217 2.87411 8.51776 2.87411 9.48589 3.15793L9.90787 1.71851C8.66422 1.35392 7.33571 1.35392 6.09206 1.71851L6.51404 3.15793ZM10.848 3.78166C11.2578 4.04682 11.6393 4.37568 11.9783 4.76932L13.046 6.00934L14.1827 5.03056L13.1149 3.79054C12.6818 3.28761 12.1918 2.86449 11.6628 2.52224L10.848 3.78166ZM4.02168 4.76932C4.36065 4.37568 4.74209 4.04682 5.15195 3.78166L4.33717 2.52225C3.80815 2.86449 3.3181 3.28761 2.88503 3.79054L1.81723 5.03056L2.95389 6.00934L4.02168 4.76932ZM14.1138 7.24936L14.7602 7.99999L14.1138 8.75062L15.2505 9.72941L16.3183 8.48938V7.5106L15.2505 6.27058L14.1138 7.24936ZM1.88609 7.24936L1.23971 7.99999L1.88609 8.75062L0.749437 9.72941L-0.318359 8.48938V7.5106L0.749436 6.27058L1.88609 7.24936ZM13.0461 9.99064L11.9783 11.2307C11.6393 11.6243 11.2578 11.9532 10.848 12.2183L11.6628 13.4777C12.1918 13.1355 12.6818 12.7124 13.1149 12.2094L14.1827 10.9694L13.0461 9.99064ZM4.02168 11.2307L2.95389 9.99064L1.81723 10.9694L2.88503 12.2094C3.3181 12.7124 3.80815 13.1355 4.33717 13.4777L5.15195 12.2183C4.7421 11.9532 4.36065 11.6243 4.02168 11.2307ZM9.90787 14.2815L9.48589 12.8421C8.51776 13.1259 7.48217 13.1259 6.51405 12.8421L6.09206 14.2815C7.33572 14.6461 8.66422 14.6461 9.90787 14.2815ZM6.49997 7.99999C6.49997 7.17157 7.17154 6.49999 7.99997 6.49999C8.82839 6.49999 9.49997 7.17157 9.49997 7.99999C9.49997 8.82842 8.82839 9.49999 7.99997 9.49999C7.17154 9.49999 6.49997 8.82842 6.49997 7.99999ZM7.99997 4.99999C6.34311 4.99999 4.99997 6.34314 4.99997 7.99999C4.99997 9.65685 6.34311 11 7.99997 11C9.65682 11 11 9.65685 11 7.99999C11 6.34314 9.65682 4.99999 7.99997 4.99999Z' fill='currentColor'/></svg>",
  fullscreen: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M1 5.25V6H2.5V5.25V2.5H5.25H6V1H5.25H2C1.44772 1 1 1.44772 1 2V5.25ZM5.25 14.9994H6V13.4994H5.25H2.5V10.7494V9.99939H1V10.7494V13.9994C1 14.5517 1.44772 14.9994 2 14.9994H5.25ZM15 10V10.75V14C15 14.5523 14.5523 15 14 15H10.75H10V13.5H10.75H13.5V10.75V10H15ZM10.75 1H10V2.5H10.75H13.5V5.25V6H15V5.25V2C15 1.44772 14.5523 1 14 1H10.75Z' fill='currentColor'/></svg>",
  fullscreen_close: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6 1V1.75V5C6 5.55229 5.55228 6 5 6H1.75H1V4.5H1.75H4.5V1.75V1H6ZM14.25 6H15V4.5H14.25H11.5V1.75V1H10V1.75V5C10 5.55228 10.4477 6 11 6H14.25ZM10 14.25V15H11.5V14.25V11.5H14.29H15.04V10H14.29H11C10.4477 10 10 10.4477 10 11V14.25ZM1.75 10H1V11.5H1.75H4.5V14.25V15H6V14.25V11C6 10.4477 5.55229 10 5 10H1.75Z' fill='currentColor'/></svg>",
  chevron: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='m4.5 6.5 3.5 3.5 3.5-3.5'/></svg>",
  copy: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.2' y='5.2' width='7.8' height='7.8' rx='1.4'/><rect x='3' y='3' width='7.8' height='7.8' rx='1.4'/></svg>",
  bring_front: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 12V4'/><path d='m4.4 5.6 1.6-1.6 1.6 1.6'/><path d='M9.5 11h3.1M9.5 8h2.2M9.5 5h1.2'/></svg>",
  send_back: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M6 4v8'/><path d='m4.4 10.4 1.6 1.6 1.6-1.6'/><path d='M9.5 11h1.2M9.5 8h2.2M9.5 5h3.1'/></svg>",
  duplicate: "<svg viewBox='0 0 16 16' aria-hidden='true'><rect x='5.3' y='5.3' width='7.7' height='7.7' rx='1.4'/><rect x='3' y='3' width='7.7' height='7.7' rx='1.4'/></svg>",
  replace_image: "<svg viewBox='0 0 24 24' aria-hidden='true'><path d='m17 2 4 4-4 4'/><path d='M3 11v-1a4 4 0 0 1 4-4h14'/><path d='m7 22-4-4 4-4'/><path d='M21 13v1a4 4 0 0 1-4 4H3'/></svg>",
  back_initial: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M3 14V2.5' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M4.5 3.5h6.2l-1.6 2.2 1.6 2.2H4.5z' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='M12.8 12.2H7.2' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/><path d='m8.9 10.6-1.7 1.6 1.7 1.6' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/></svg>",
  delete: "<svg viewBox='0 0 16 16' aria-hidden='true'><path d='M2.8 4.4h10.4'/><path d='m5.8 4.4.6-1.4h3.2l.6 1.4'/><path d='M4.5 4.4v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-8'/><path d='M6.7 6.5v4.7M9.3 6.5v4.7'/></svg>",
  lock_closed: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z' fill='currentColor'></path></svg>",
  lock_open: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14 6V4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5V6H10.5H12V7.5V12.5C12 13.8807 10.8807 15 9.5 15H2.5C1.11929 15 0 13.8807 0 12.5V7.5V6H1.5H8.5V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V6H14ZM10.5 7.5H10H8.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H9.5C10.0523 13.5 10.5 13.0523 10.5 12.5V7.5Z' fill='currentColor'></path></svg>",
  aspect: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14.866 14.7041C13.9131 14.5727 12.9574 14.4687 12 14.3923V12.8876C12.8347 12.9523 13.6683 13.0373 14.4999 13.1426L14.5 9.00003H16L15.9999 14L15.9999 14.8605L15.1475 14.7429L14.866 14.7041ZM16 7.00003L16 2.49996L16 1.6394L15.1475 1.75699L14.866 1.79581C13.9131 1.92725 12.9574 2.03119 12 2.10765V3.61228C12.8347 3.54757 13.6683 3.46256 14.5 3.35727L14.5 7.00003H16ZM9.99998 2.22729V3.72844C8.66715 3.77999 7.33282 3.77999 5.99998 3.72844V2.22729C7.33279 2.28037 8.66718 2.28037 9.99998 2.22729ZM9.99998 14.2726V12.7715C8.66715 12.7199 7.33282 12.7199 5.99998 12.7715V14.2726C7.33279 14.2195 8.66718 14.2195 9.99998 14.2726ZM3.99998 14.3923C3.04258 14.4687 2.08683 14.5727 1.13391 14.7041L0.85242 14.7429L-0.0000610352 14.8605L-0.0000578761 14L-0.0000396322 9.00003H1.49996L1.49995 13.1426C2.33162 13.0373 3.16521 12.9523 3.99998 12.8876V14.3923ZM1.49997 7.00003L1.49998 3.35727C2.33164 3.46256 3.16522 3.54757 3.99998 3.61228V2.10765C3.0426 2.03119 2.08686 1.92725 1.13395 1.79581L0.852462 1.75699L-0.0000127554 1.6394L-0.0000159144 2.49995L-0.0000323345 7.00003H1.49997Z' fill='currentColor'/></svg>",
  rotate_90: "<svg viewBox='0 0 16 16' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M6.21967 4.71967L5.68934 5.25L6.75 6.31066L7.28033 5.78033L9.25 3.81066V13.5C9.25 13.6381 9.13807 13.75 9 13.75H2.75H2V15.25H2.75H9C9.9665 15.25 10.75 14.4665 10.75 13.5V3.81066L12.7197 5.78033L13.25 6.31066L14.3107 5.25L13.7803 4.71967L10.5303 1.46967C10.2374 1.17678 9.76256 1.17678 9.46967 1.46967L6.21967 4.71967Z' fill='currentColor'/></svg>",
  // Paint dock
  pencil_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m3 21 3.8-1 10-10a2.1 2.1 0 0 0-3-3L3.8 17z'/><path d='m14.5 6.5 3 3'/></svg>",
  spray_can_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 6h6'/><path d='M12 3h2a2 2 0 0 1 2 2v1'/><path d='M9 8h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Z'/><path d='M5 10h.01'/><path d='M3 14h.01'/><path d='M5 18h.01'/></svg>",
  highlighter_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m14 4 6 6'/><path d='m4 20 4.5-1 9-9-3.5-3.5-9 9z'/><path d='M13 7 17 11'/><path d='M3 21h7'/></svg>",
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  eraser_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='m7 13.5 6.8-6.8a2.2 2.2 0 0 1 3.1 0l2.4 2.4a2.2 2.2 0 0 1 0 3.1l-6.8 6.8a2.2 2.2 0 0 1-1.5.6H7.8a2.2 2.2 0 0 1-1.6-.6l-1.5-1.5a2.2 2.2 0 0 1 0-3.1L7 13.5Z'/><path d='M13.5 19.5H21'/></svg>",
  lasso_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M7.2 18.8C4.6 18 3 16.2 3 14c0-3.9 4-7 9-7s9 3.1 9 7-4 7-9 7c-1.1 0-2.2-.1-3.1-.4'/><path d='M7 17c1 0 1.8.8 1.8 1.8S8 20.6 7 20.6s-1.8-.8-1.8-1.8S6 17 7 17Z'/></svg>"
}, go = {
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
    const e = t, n = Yr(() => {
      const r = { ...e.attrs };
      return e.tag === "button" && r.type == null && (r.type = e.type), e.label && (r["aria-label"] = e.label), e.tip && (r["data-tip"] = e.tip), e.pressed != null && (r["aria-pressed"] = e.pressed), r;
    });
    return (r, a) => (Ct(), ti(s0(t.tag), cd({
      class: ["pano-btn pano-btn-icon", t.extraClass]
    }, n.value, { innerHTML: t.icon }), null, 16, ["class", "innerHTML"]));
  }
}, Fy = { class: "pano-floating-right" }, Vy = {
  class: "pano-fov-value",
  "data-fov-value": "",
  "aria-label": "Field of view"
}, Hy = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    fovValue: { type: String, default: "100°" }
  },
  setup(t) {
    return (e, n) => (Ct(), Et("div", Fy, [
      ct("span", Vy, _e(t.fovValue), 1),
      (Ct(!0), Et(te, null, Be(t.buttons, (r) => (Ct(), ti(go, {
        key: r.action,
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { "data-action": r.action, disabled: r.disabled === !0 }
      }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, zy = {
  key: 0,
  class: "pano-canvas-confirm",
  "data-confirm-overlay": "",
  role: "presentation"
}, $y = ["aria-label"], jy = { class: "pano-canvas-confirm-title" }, Uy = { class: "pano-canvas-confirm-text" }, By = { class: "pano-canvas-confirm-actions" }, Gy = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Ky = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(t) {
    return (e, n) => t.model.visible === !0 ? (Ct(), Et("div", zy, [
      ct("div", {
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": t.model.title || "Confirm"
      }, [
        ct("div", jy, _e(t.model.title), 1),
        ct("div", Uy, _e(t.model.text), 1),
        ct("div", By, [
          n[0] || (n[0] = ct("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ct("button", Gy, _e(t.model.confirmLabel || "Confirm"), 1)
        ])
      ], 8, $y)
    ])) : un("", !0);
  }
}, Wy = ["data-paint-pane"], Yy = ["hidden"], qy = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Xy = ["aria-pressed", "disabled"], Zy = ["hidden"], Jy = { class: "pano-paint-color-pop-head" }, Qy = { class: "pano-paint-color-field" }, tv = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, ev = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, nv = { class: "pano-paint-color-field" }, rv = { class: "pano-paint-alpha-wrap" }, iv = ["value"], av = { "data-paint-alpha-value": "" }, ov = ["hidden"], sv = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, cv = ["data-paint-history-index", "aria-label", "disabled"], lv = ["data-paint-footer"], uv = ["data-paint-group"], fv = ["hidden"], dv = ["value", "disabled"], hv = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, pv = ["hidden"], gv = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] },
    state: { type: Object, default: () => ({}) }
  },
  setup(t) {
    function e(r) {
      return { "--swatch": String((r == null ? void 0 : r.cssColor) || "") };
    }
    function n(r) {
      return r ? { "--swatch": String(r.cssColor || "") } : {};
    }
    return (r, a) => (Ct(), Et("div", {
      class: ge(["pano-paint-dock", { "is-hidden": t.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Ct(!0), Et(te, null, Be(t.panes, (s) => {
        var l;
        return Ct(), Et("div", {
          key: s.key,
          class: ge(["pano-paint-pane", { "is-active": t.state.activePane === s.key }]),
          "data-paint-pane": s.key
        }, [
          s.showColorFloat ? (Ct(), Et("div", {
            key: 0,
            class: ge(["pano-paint-color-float", { disabled: t.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: t.state.showColorRow === !1
          }, [
            (Ct(!0), Et(te, null, Be(t.paintSwatches, (f) => (Ct(), Et("button", {
              key: f.id,
              class: ge(["pano-paint-color-dot", { active: t.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: je(e(f)),
              "aria-pressed": t.state.activeSwatchId === f.id ? "true" : "false",
              disabled: t.state.colorEnabled === !1
            }, null, 14, qy))), 128)),
            ct("button", {
              class: ge(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: t.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": t.state.customColorActive === !0 ? "true" : "false",
              disabled: t.state.colorEnabled === !1,
              style: je({ "--custom-color": String(t.state.customColorCss || "") })
            }, null, 14, Xy),
            ct("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: t.state.colorPopOpen !== !0,
              style: je({
                "--picker-hue-color": String(t.state.pickerHueColor || ""),
                "--picker-sat": String(t.state.pickerSat || "0%"),
                "--picker-val": String(t.state.pickerVal || "0%"),
                "--picker-hue": String(t.state.pickerHue || "0%")
              })
            }, [
              ct("div", Jy, [
                ct("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: je({ background: String(t.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ct("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ct("div", Qy, [
                ct("div", tv, [
                  ct("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: je({ left: String(t.state.pickerSvLeft || "0%"), top: String(t.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ct("div", ev, [
                  ct("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: je({ left: String(t.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ct("label", nv, [
                a[1] || (a[1] = ct("span", null, "Opacity", -1)),
                ct("div", rv, [
                  ct("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: t.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, iv),
                  ct("span", av, _e(t.state.alphaText || "100%"), 1)
                ])
              ]),
              ct("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: t.state.historyVisible === !1
              }, [
                ct("div", sv, [
                  (Ct(!0), Et(te, null, Be(t.state.historyEntries || [], (f) => (Ct(), Et("button", {
                    key: f.index,
                    class: ge(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: je(n(f.color))
                  }, null, 14, cv))), 128))
                ])
              ], 8, ov)
            ], 12, Zy)
          ], 10, Yy)) : un("", !0),
          ct("div", {
            class: "pano-paint-footer",
            "data-paint-footer": s.footer
          }, [
            ct("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": s.group
            }, [
              (Ct(!0), Et(te, null, Be(s.tools, (f) => {
                var h;
                return Ct(), ti(go, {
                  key: `${s.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((h = t.state.activeTools) == null ? void 0 : h[s.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, uv),
            ct("div", {
              class: ge(["pano-paint-size-row", { disabled: t.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: t.state.showSizeRow === !1
            }, [
              ct("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: t.state.sizeValue ?? 10,
                disabled: t.state.sizeDisabled === !0,
                style: je({ "--v": String(t.state.sizeFill || "0%") })
              }, null, 12, dv),
              ct("span", hv, _e(t.state.sizeText || "10"), 1)
            ], 10, fv),
            ct("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((l = t.state.clearVisible) == null ? void 0 : l[s.key]) ?? !s.clearHidden)
            }, [
              xe(go, {
                icon: vr(Gt).clear,
                label: s.clearLabel,
                tip: s.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": s.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, pv)
          ], 8, lv)
        ], 10, Wy);
      }), 128))
    ], 2));
  }
}, mv = {
  key: 0,
  class: "pano-cutout-menu"
}, yv = ["innerHTML"], vv = ["data-aspect"], bv = ["data-action", "aria-label", "data-tip", "disabled", "innerHTML"], _v = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(t) {
    return (e, n) => (Ct(), Et("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: je({ display: t.model.visible === !0 ? "flex" : "none", left: `${t.model.left || 0}px`, top: `${t.model.top || 0}px` })
    }, [
      (Ct(!0), Et(te, null, Be(t.model.items || [], (r) => (Ct(), Et(te, {
        key: r.key
      }, [
        r.kind === "aspect" ? (Ct(), Et("div", mv, [
          ct("button", {
            class: "pano-btn pano-btn-icon",
            type: "button",
            "data-action": "aspect",
            "aria-label": "Aspect Ratio",
            "data-tip": "Aspect ratio",
            innerHTML: r.icon
          }, null, 8, yv),
          ct("div", {
            class: ge(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Ct(!0), Et(te, null, Be(r.choices || [], (a) => (Ct(), Et("button", {
              key: a.value,
              class: ge(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, _e(a.label), 11, vv))), 128))
          ], 2)
        ])) : (Ct(), Et("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0,
          innerHTML: r.icon
        }, null, 8, bv))
      ], 64))), 128))
    ], 4));
  }
}, xv = {
  class: "pano-side",
  "data-side": ""
}, wv = { class: "pano-side-head" }, Sv = ["innerHTML"], Mv = {
  key: 0,
  class: "pano-inspector"
}, kv = { class: "pano-ui-row pano-coverage-row" }, Nv = ["data-selected"], Pv = ["aria-pressed", "disabled"], Cv = ["aria-pressed", "disabled"], Av = {
  key: 0,
  class: "pano-section-title"
}, Iv = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Ev = {
  class: "pano-picker",
  "data-picker": "selection"
}, Dv = ["disabled"], Tv = ["innerHTML"], Lv = ["hidden"], Ov = ["data-selection-id", "innerHTML"], Rv = {
  key: 2,
  class: "pano-state-actions"
}, Fv = ["disabled"], Vv = ["innerHTML"], Hv = ["data-key"], zv = ["min", "max", "step", "value", "disabled", "data-param-key"], $v = ["min", "max", "step", "value", "disabled", "data-param-key"], jv = { class: "pano-visibility-section" }, Uv = { class: "pano-visibility-stack" }, Bv = ["data-visibility-row"], Gv = { class: "pano-visibility-name" }, Kv = ["innerHTML"], Wv = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled", "innerHTML"], Yv = ["open"], qv = ["innerHTML"], Xv = { class: "pano-ui-settings-body" }, Zv = { class: "pano-ui-row" }, Jv = ["data-selected"], Qv = ["aria-pressed"], tb = ["aria-pressed"], eb = { class: "pano-ui-row" }, nb = ["data-selected"], rb = ["aria-pressed"], ib = ["aria-pressed"], ab = { class: "pano-ui-row" }, ob = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, sb = {
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, cb = { class: "pano-picker-label" }, lb = ["hidden"], ub = ["data-quality"], fb = {
  key: 5,
  class: "pano-side-footer"
}, db = ["data-action"], hb = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(t) {
    const e = t;
    function n(s) {
      return String(s || "").replace(/[&<>"']/g, (l) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[l]);
    }
    const r = Yr(() => `<span class="pano-side-title-icon" aria-hidden="true">${Gt.globe}</span><span>${n(e.nodeTitle)}</span>`);
    function a(s) {
      return { "--v": `${Number((s == null ? void 0 : s.fillPct) || 0)}%` };
    }
    return (s, l) => {
      var f, h, y, b, p;
      return Ct(), Et("div", xv, [
        ct("div", wv, [
          ct("div", {
            class: "pano-side-title",
            innerHTML: r.value
          }, null, 8, Sv),
          l[0] || (l[0] = ct("div", { class: "pano-side-actions" }, null, -1))
        ]),
        l[13] || (l[13] = ct("div", { class: "pano-divider" }, null, -1)),
        t.model ? (Ct(), Et("div", Mv, [
          l[12] || (l[12] = ct("div", { class: "pano-section-title" }, [
            ct("span", null, "Scene")
          ], -1)),
          ct("div", kv, [
            l[1] || (l[1] = ct("label", null, "Coverage", -1)),
            ct("div", {
              class: "pano-segment",
              "data-setting": "coverage",
              "data-selected": ((f = t.model.coverage) == null ? void 0 : f.value) === 180 ? "1" : "0"
            }, [
              ct("button", {
                class: "pano-segment-btn",
                type: "button",
                "data-action": "coverage-set",
                "data-coverage": "360",
                "aria-pressed": ((h = t.model.coverage) == null ? void 0 : h.value) === 360 ? "true" : "false",
                disabled: ((y = t.model.coverage) == null ? void 0 : y.disabled) === !0
              }, "360", 8, Pv),
              ct("button", {
                class: "pano-segment-btn",
                type: "button",
                "data-action": "coverage-set",
                "data-coverage": "180",
                "aria-pressed": ((b = t.model.coverage) == null ? void 0 : b.value) === 180 ? "true" : "false",
                disabled: ((p = t.model.coverage) == null ? void 0 : p.disabled) === !0
              }, "180", 8, Cv)
            ], 8, Nv)
          ]),
          t.model.transformTitle !== !1 ? (Ct(), Et("div", Av, [...l[2] || (l[2] = [
            ct("span", null, "Transform", -1)
          ])])) : un("", !0),
          t.model.selectionPicker ? (Ct(), Et("div", Iv, [
            ct("label", null, _e(t.model.selectionPicker.label), 1),
            ct("div", Ev, [
              ct("button", {
                class: "pano-picker-trigger",
                type: "button",
                "data-action": "toggle-selection-picker",
                disabled: t.model.selectionPicker.disabled === !0
              }, [
                ct("span", {
                  class: "pano-picker-label",
                  innerHTML: t.model.selectionPicker.currentLabelHtml
                }, null, 8, Tv),
                l[3] || (l[3] = ct("span", { class: "pano-picker-caret" }, "▾", -1))
              ], 8, Dv),
              ct("div", {
                class: "pano-picker-pop",
                hidden: t.model.selectionPicker.open !== !0
              }, [
                (Ct(!0), Et(te, null, Be(t.model.selectionPicker.items || [], (w) => (Ct(), Et("button", {
                  key: w.id,
                  type: "button",
                  class: ge(["pano-picker-item", { active: w.active === !0 }]),
                  "data-action": "select-picker-item",
                  "data-selection-id": w.id,
                  innerHTML: w.labelHtml
                }, null, 10, Ov))), 128))
              ], 8, Lv)
            ])
          ])) : un("", !0),
          t.model.copyStateButton ? (Ct(), Et("div", Rv, [
            ct("button", {
              class: "pano-btn subtle pano-btn-tight pano-btn-copy",
              type: "button",
              "data-action": "copy-state-inline",
              disabled: t.model.copyStateButton.disabled === !0
            }, [
              ct("span", {
                innerHTML: vr(Gt).copy
              }, null, 8, Vv),
              ct("span", null, _e(t.model.copyStateButton.label), 1)
            ], 8, Fv)
          ])) : un("", !0),
          ct("div", {
            class: ge(["pano-params", { disabled: t.model.paramsDisabled === !0 }])
          }, [
            (t.model.notes || []).length ? (Ct(!0), Et(te, { key: 0 }, Be(t.model.notes, (w) => (Ct(), Et("div", {
              key: w,
              class: "pano-param-note"
            }, _e(w), 1))), 128)) : (Ct(!0), Et(te, { key: 1 }, Be(t.model.params || [], (w) => (Ct(), Et("div", {
              key: w.key,
              class: "pano-field",
              "data-key": w.key
            }, [
              ct("label", null, _e(w.label), 1),
              ct("input", {
                type: "range",
                min: w.min,
                max: w.max,
                step: w.step,
                value: w.value,
                disabled: w.enabled === !1,
                style: je(a(w)),
                "data-action": "param-input",
                "data-input-kind": "range",
                "data-param-key": w.key
              }, null, 12, zv),
              ct("input", {
                type: "number",
                min: w.min,
                max: w.max,
                step: w.step,
                value: w.displayValue,
                disabled: w.enabled === !1,
                "data-action": "param-input",
                "data-input-kind": "number",
                "data-param-key": w.key
              }, null, 8, $v)
            ], 8, Hv))), 128))
          ], 2),
          (t.model.visibilityRows || []).length ? (Ct(), Et(te, { key: 3 }, [
            l[5] || (l[5] = ct("div", { class: "pano-divider" }, null, -1)),
            ct("div", jv, [
              l[4] || (l[4] = ct("div", { class: "pano-section-title" }, [
                ct("span", null, "Layers")
              ], -1)),
              ct("div", Uv, [
                (Ct(!0), Et(te, null, Be(t.model.visibilityRows, (w) => (Ct(), Et("div", {
                  key: w.key,
                  class: ge(["pano-visibility-row", { "is-hidden": w.visible === !1, "is-disabled": w.enabled === !1 }]),
                  "data-visibility-row": w.key
                }, [
                  ct("span", Gv, [
                    ct("span", {
                      class: "pano-visibility-name-icon",
                      "aria-hidden": "true",
                      innerHTML: w.icon
                    }, null, 8, Kv),
                    ct("span", null, _e(w.label), 1)
                  ]),
                  ct("button", {
                    class: ge(["pano-visibility-toggle", { active: w.visible === !0 }]),
                    type: "button",
                    "data-action": "toggle-visibility",
                    "data-visibility": w.key,
                    "aria-label": w.ariaLabel,
                    "aria-pressed": w.visible === !0 ? "true" : "false",
                    "data-tip": w.tip,
                    disabled: w.enabled === !1,
                    innerHTML: w.visible === !0 ? vr(Gt).eye : vr(Gt).eye_dashed
                  }, null, 10, Wv)
                ], 10, Bv))), 128))
              ])
            ])
          ], 64)) : un("", !0),
          t.model.uiSettings ? (Ct(), Et("details", {
            key: 4,
            class: "pano-ui-settings",
            open: t.model.uiSettings.open === !0
          }, [
            ct("summary", null, [
              l[6] || (l[6] = ct("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
              ct("span", {
                class: "pano-ui-caret",
                "aria-hidden": "true",
                innerHTML: vr(Gt).chevron
              }, null, 8, qv)
            ]),
            ct("div", Xv, [
              ct("div", Zv, [
                l[7] || (l[7] = ct("label", null, "Drag X", -1)),
                ct("div", {
                  class: "pano-segment",
                  "data-setting": "invert-x",
                  "data-selected": t.model.uiSettings.invertX ? "1" : "0"
                }, [
                  ct("button", {
                    class: "pano-segment-btn",
                    type: "button",
                    "data-action": "set-invert-x",
                    "data-value": "0",
                    "aria-pressed": t.model.uiSettings.invertX ? "false" : "true"
                  }, "Normal", 8, Qv),
                  ct("button", {
                    class: "pano-segment-btn",
                    type: "button",
                    "data-action": "set-invert-x",
                    "data-value": "1",
                    "aria-pressed": t.model.uiSettings.invertX ? "true" : "false"
                  }, "Inverted", 8, tb)
                ], 8, Jv)
              ]),
              ct("div", eb, [
                l[8] || (l[8] = ct("label", null, "Drag Y", -1)),
                ct("div", {
                  class: "pano-segment",
                  "data-setting": "invert-y",
                  "data-selected": t.model.uiSettings.invertY ? "1" : "0"
                }, [
                  ct("button", {
                    class: "pano-segment-btn",
                    type: "button",
                    "data-action": "set-invert-y",
                    "data-value": "0",
                    "aria-pressed": t.model.uiSettings.invertY ? "false" : "true"
                  }, "Normal", 8, rb),
                  ct("button", {
                    class: "pano-segment-btn",
                    type: "button",
                    "data-action": "set-invert-y",
                    "data-value": "1",
                    "aria-pressed": t.model.uiSettings.invertY ? "true" : "false"
                  }, "Inverted", 8, ib)
                ], 8, nb)
              ]),
              ct("div", ab, [
                l[10] || (l[10] = ct("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                ct("div", ob, [
                  ct("button", sb, [
                    ct("span", cb, _e(t.model.uiSettings.qualityLabel), 1),
                    l[9] || (l[9] = ct("span", { class: "pano-picker-caret" }, "▾", -1))
                  ]),
                  ct("div", {
                    class: "pano-picker-pop",
                    hidden: t.model.uiSettings.qualityOpen !== !0
                  }, [
                    (Ct(!0), Et(te, null, Be(t.model.uiSettings.qualityOptions || [], (w) => (Ct(), Et("button", {
                      key: w.value,
                      type: "button",
                      class: ge(["pano-picker-item", { active: w.active === !0 }]),
                      "data-action": "set-quality",
                      "data-quality": w.value
                    }, _e(w.label), 11, ub))), 128))
                  ], 8, lb)
                ])
              ]),
              l[11] || (l[11] = ct("div", { class: "pano-ui-row" }, [
                ct("span"),
                ct("button", {
                  class: "pano-btn subtle",
                  type: "button",
                  "data-action": "ui-reset-defaults"
                }, "Reset Defaults")
              ], -1))
            ])
          ], 8, Yv)) : un("", !0),
          (t.model.footerButtons || []).length ? (Ct(), Et("div", fb, [
            (Ct(!0), Et(te, null, Be(t.model.footerButtons, (w) => (Ct(), Et("button", {
              key: w.action,
              class: ge(["pano-btn", { "pano-btn-primary": w.primary === !0 }]),
              type: "button",
              "data-action": w.action
            }, _e(w.label), 11, db))), 128))
          ])) : un("", !0)
        ])) : un("", !0)
      ]);
    };
  }
}, pb = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(t) {
    return (e, n) => (Ct(), Et("div", {
      class: ge(["pano-tooltip", {
        show: t.model.visible === !0,
        "pano-tooltip-footer": t.model.variant === "footer",
        "pano-tooltip-tool-rail": t.model.variant === "tool-rail"
      }]),
      "data-tooltip": "",
      style: je({ left: `${t.model.left || 0}px`, top: `${t.model.top || 0}px` })
    }, _e(t.model.text || ""), 7));
  }
}, gb = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, mb = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (Ct(), Et("div", gb, [
      (Ct(!0), Et(te, null, Be(t.buttons, (r) => Df((Ct(), ti(go, {
        key: r.key,
        "extra-class": {
          active: r.active,
          "pano-btn-icon-accent": r.accent
        },
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { [r.attr]: r.value, disabled: r.disabled === !0 }
      }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"])), [
        [hd, r.visible !== !1]
      ])), 128))
    ]));
  }
}, yb = { class: "pano-floating-top" }, vb = ["data-selected", "data-view-count"], bb = ["data-view", "aria-pressed", "aria-label", "disabled"], _b = ["innerHTML"], xb = { class: "label" }, wb = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => {
      var r;
      return Ct(), Et("div", yb, [
        ct("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = t.buttons.find((a) => a.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(t.buttons.length)
        }, [
          (Ct(!0), Et(te, null, Be(t.buttons, (a) => Df((Ct(), Et("button", {
            key: a.key,
            class: ge(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            ct("span", {
              innerHTML: a.icon
            }, null, 8, _b),
            ct("span", xb, _e(a.label), 1)
          ], 10, bb)), [
            [hd, a.visible !== !1]
          ])), 128))
        ], 8, vb)
      ]);
    };
  }
};
function $d(t = "stickers") {
  const e = String(t || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Gt.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Gt.unwrap, pressed: "false", extraClass: "" },
      ...e ? [{ key: "frame", label: "Frame", icon: Gt.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Gt.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Gt.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Gt.circle_dashed_tool, pressed: "false" },
      ...e ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Gt.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Gt.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Gt.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Gt.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Gt.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Gt.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Gt.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Gt.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Gt.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Gt.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Gt.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Gt.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Gt.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Gt.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Gt.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Gt.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Gt.lasso_tool }
        ]
      }
    ]
  };
}
const Sb = ["aria-label"], Mb = { class: "pano-stage-wrap" }, kb = ["aria-label", "data-tip", "innerHTML"], Nb = {
  __name: "PanoModal",
  props: {
    open: { type: Boolean, default: !0 },
    type: { type: String, default: "stickers" },
    readOnly: { type: Boolean, default: !1 },
    hideSidebar: { type: Boolean, default: !1 },
    nodeTitle: { type: String, default: "Panorama Stickers" },
    paintSwatches: { type: Array, default: () => [] },
    shellPreset: { type: Object, default: null },
    uiState: { type: Object, default: () => ({}) }
  },
  emits: ["close"],
  setup(t, { emit: e }) {
    const n = t, r = e;
    let a = "", s = !1, l = null;
    const f = /* @__PURE__ */ Eg(null), h = Yr(() => n.readOnly === !0), y = Yr(() => n.shellPreset || $d(n.type)), b = Yr(() => {
      var A;
      const C = Array.isArray((A = y.value) == null ? void 0 : A.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return h.value && C.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Gt.fullscreen
      }), C;
    });
    function p() {
      const C = f.value;
      return C ? Array.from(C.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((A) => A instanceof HTMLElement ? !A.hidden && A.tabIndex >= 0 && A.offsetParent !== null : !1) : [];
    }
    function w() {
      var D;
      const A = p()[0] || f.value;
      (D = A == null ? void 0 : A.focus) == null || D.call(A);
    }
    function M() {
      var C;
      l != null && l.isConnected && ((C = l.focus) == null || C.call(l)), l = null;
    }
    function E(C) {
      var A, D, $, ot;
      if (!C.defaultPrevented) {
        if (C.key === "Tab") {
          const dt = p();
          if (!dt.length) {
            C.preventDefault(), (D = (A = f.value) == null ? void 0 : A.focus) == null || D.call(A);
            return;
          }
          const T = dt[0], wt = dt[dt.length - 1], V = document.activeElement;
          if (C.shiftKey) {
            (V === T || V === f.value || !(($ = f.value) != null && $.contains(V))) && (C.preventDefault(), wt.focus());
            return;
          }
          (V === wt || !((ot = f.value) != null && ot.contains(V))) && (C.preventDefault(), T.focus());
          return;
        }
        C.key === "Escape" && r("close");
      }
    }
    function L() {
      s || (a = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function R() {
      s && (document.body.style.overflow = a, s = !1);
    }
    function O(C) {
      document.removeEventListener("keydown", E), C ? (l || (l = document.activeElement), L(), document.addEventListener("keydown", E), Pf(() => {
        w();
      })) : (R(), M());
    }
    return Vf(() => {
      O(n.open);
    }), Hf(() => {
      R(), document.removeEventListener("keydown", E), M();
    }), Ha(() => n.open, (C) => {
      O(C);
    }), (C, A) => {
      var D, $, ot, dt;
      return t.open ? (Ct(), Et("div", {
        key: 0,
        class: "pano-modal-overlay",
        onClick: A[0] || (A[0] = b1((T) => r("close"), ["self"]))
      }, [
        ct("section", {
          ref_key: "modalRef",
          ref: f,
          class: "pano-modal",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": t.nodeTitle,
          tabindex: "-1"
        }, [
          ct("div", Mb, [
            A[1] || (A[1] = H0('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
            h.value ? un("", !0) : (Ct(), Et(te, { key: 0 }, [
              xe(mb, {
                buttons: t.uiState.toolButtons || y.value.toolButtons || []
              }, null, 8, ["buttons"]),
              xe(gv, {
                "paint-swatches": t.paintSwatches,
                panes: y.value.paintPanes || [],
                state: t.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            xe(wb, {
              buttons: t.uiState.viewButtons || y.value.viewButtons || []
            }, null, 8, ["buttons"]),
            xe(Hy, {
              buttons: t.uiState.floatingButtons || b.value,
              "fov-value": t.uiState.fovValue || "100°"
            }, null, 8, ["buttons", "fov-value"]),
            xe(_v, {
              model: t.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            ct("button", {
              class: "pano-btn pano-btn-icon pano-output-preview-toggle",
              "data-action": "toggle-output-preview-size",
              "aria-label": ((D = t.uiState.outputPreviewToggle) == null ? void 0 : D.label) || "Expand Preview",
              "data-tip": (($ = t.uiState.outputPreviewToggle) == null ? void 0 : $.tip) || "Expand preview",
              style: je({ display: (ot = t.uiState.outputPreviewToggle) != null && ot.visible ? "" : "none" }),
              innerHTML: ((dt = t.uiState.outputPreviewToggle) == null ? void 0 : dt.icon) || vr(Gt).fullscreen
            }, null, 12, kb),
            xe(pb, {
              model: t.uiState.tooltip || {}
            }, null, 8, ["model"]),
            xe(Ky, {
              model: t.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          t.hideSidebar ? un("", !0) : (Ct(), ti(hb, {
            key: 0,
            "node-title": t.nodeTitle,
            model: t.uiState.sidePanel || {}
          }, null, 8, ["node-title", "model"]))
        ], 8, Sb)
      ])) : un("", !0);
    };
  }
}, mo = "state_json", dr = "sticker_image_1", Ns = "external_image", Ps = "pano_sticker_input_images", Ya = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], ke = Math.PI / 180, mr = 180 / Math.PI, yo = 24, Pb = 4, Cb = 4, Mi = /* @__PURE__ */ new Map(), Zs = /* @__PURE__ */ new Map(), ki = /* @__PURE__ */ new Map(), He = {
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
  circle_dashed_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10.1 2.6A9.9 9.9 0 0 1 13.9 2.6'/><path d='M17.8 4.2a9.9 9.9 0 0 1 2 2.8'/><path d='M21.4 10.1a9.9 9.9 0 0 1 0 3.8'/><path d='M19.8 17.8a9.9 9.9 0 0 1-2.8 2'/><path d='M13.9 21.4a9.9 9.9 0 0 1-3.8 0'/><path d='M6.2 19.8a9.9 9.9 0 0 1-2-2.8'/><path d='M2.6 13.9a9.9 9.9 0 0 1 0-3.8'/><path d='M4.2 6.2a9.9 9.9 0 0 1 2.8-2'/></svg>",
  // Source: Lucide paintbrush-vertical
  paintbrush_vertical_tool: "<svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'><path d='M10 2v2'/><path d='M14 2v4'/><path d='M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z'/><path d='M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1'/></svg>",
  lock_closed: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M10 4.5V6H6V4.5C6 3.39543 6.89543 2.5 8 2.5C9.10457 2.5 10 3.39543 10 4.5ZM4.5 6V4.5C4.5 2.567 6.067 1 8 1C9.933 1 11.5 2.567 11.5 4.5V6H12.5H14V7.5V12.5C14 13.8807 12.8807 15 11.5 15H4.5C3.11929 15 2 13.8807 2 12.5V7.5V6H3.5H4.5ZM11.5 7.5H10H6H4.5H3.5V12.5C3.5 13.0523 3.94772 13.5 4.5 13.5H11.5C12.0523 13.5 12.5 13.0523 12.5 12.5V7.5H11.5Z' fill='currentColor'></path></svg>",
  lock_open: "<svg data-testid='geist-icon' height='16' stroke-linejoin='round' viewBox='0 0 16 16' width='16' style='color: currentcolor;' aria-hidden='true'><path fill-rule='evenodd' clip-rule='evenodd' d='M14 6V4.5C14 3.39543 13.1046 2.5 12 2.5C10.8954 2.5 10 3.39543 10 4.5V6H10.5H12V7.5V12.5C12 13.8807 10.8807 15 9.5 15H2.5C1.11929 15 0 13.8807 0 12.5V7.5V6H1.5H8.5V4.5C8.5 2.567 10.067 1 12 1C13.933 1 15.5 2.567 15.5 4.5V6H14ZM10.5 7.5H10H8.5H1.5V12.5C1.5 13.0523 1.94772 13.5 2.5 13.5H9.5C10.0523 13.5 10.5 13.0523 10.5 12.5V7.5Z' fill='currentColor'></path></svg>"
};
function Qe(t) {
  return Number(t) === 180 ? 180 : 360;
}
function Ab(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function Ib(t) {
  return 1 - Math.pow(1 - t, 3);
}
function Eb(t) {
  return t * t * t;
}
function Dn(t, e, n) {
  return { x: t, y: e, z: n };
}
function Ia(t, e) {
  return Dn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Ea(t, e) {
  return Dn(t.x * e, t.y * e, t.z * e);
}
function vn(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Da(t, e) {
  return Dn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Fr(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Dn(t.x / e, t.y / e, t.z / e);
}
function Sn(t, e) {
  const n = t * ke, r = e * ke, a = Math.cos(r);
  return Dn(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Wu(t) {
  return {
    yaw: $e(Math.atan2(t.x, t.z) * mr),
    pitch: W(Math.asin(W(t.y, -1, 1)) * mr, -90, 90)
  };
}
function rr(t, e) {
  let n = !1;
  for (let r = 0, a = e.length - 1; r < e.length; a = r++) {
    const s = e[r].x, l = e[r].y, f = e[a].x, h = e[a].y;
    l > t.y != h > t.y && t.x < (f - s) * (t.y - l) / (h - l || 1e-6) + s && (n = !n);
  }
  return n;
}
function gr(t, e) {
  const n = t.x - e.x, r = t.y - e.y;
  return n * n + r * r;
}
function Yu(t, e, n) {
  const r = Number(n.x || 0) - Number(e.x || 0), a = Number(n.y || 0) - Number(e.y || 0), s = Number(t.x || 0) - Number(e.x || 0), l = Number(t.y || 0) - Number(e.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return gr(t, e);
  const h = W((s * r + l * a) / f, 0, 1), y = Number(e.x || 0) + r * h, b = Number(e.y || 0) + a * h, p = Number(t.x || 0) - y, w = Number(t.y || 0) - b;
  return p * p + w * w;
}
function jn(t, e, n) {
  return t + (e - t) * n;
}
function Mn(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(W(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${W(n, 0, 1)})`;
}
function Db(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let Ta = { fillStyle: "", url: "" };
function Tb(t, e, n) {
  if (Ta.url && Ta.fillStyle === String(t || ""))
    return Ta.url;
  const r = Db(`
<svg xmlns="http://www.w3.org/2000/svg" width="${yo}" height="${yo}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ta = { fillStyle: String(t || ""), url: r }, r;
}
function qa(t, e, n = 0.015) {
  return !t || !e ? !1 : Math.abs(Number(t.r ?? 0) - Number(e.r ?? 0)) <= n && Math.abs(Number(t.g ?? 0) - Number(e.g ?? 0)) <= n && Math.abs(Number(t.b ?? 0) - Number(e.b ?? 0)) <= n && Math.abs(Number(t.a ?? 1) - Number(e.a ?? 1)) <= n;
}
function an(t) {
  return {
    r: W(Number((t == null ? void 0 : t.r) ?? 0), 0, 1),
    g: W(Number((t == null ? void 0 : t.g) ?? 0), 0, 1),
    b: W(Number((t == null ? void 0 : t.b) ?? 0), 0, 1),
    a: W(Number((t == null ? void 0 : t.a) ?? 1), 0, 1)
  };
}
function Ee(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function Lb(t) {
  return Ya.some((e) => qa(t, e.color));
}
function Cs(t, e, n) {
  const r = (Number(t) % 1 + 1) % 1, a = W(Number(e), 0, 1), s = W(Number(n), 0, 1);
  if (a <= 1e-6) return { r: s, g: s, b: s };
  const l = Math.floor(r * 6), f = r * 6 - l, h = s * (1 - a), y = s * (1 - f * a), b = s * (1 - (1 - f) * a);
  switch (l % 6) {
    case 0:
      return { r: s, g: b, b: h };
    case 1:
      return { r: y, g: s, b: h };
    case 2:
      return { r: h, g: s, b };
    case 3:
      return { r: h, g: y, b: s };
    case 4:
      return { r: b, g: h, b: s };
    default:
      return { r: s, g: h, b: y };
  }
}
function As(t) {
  const e = W(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), n = W(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), r = W(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), a = Math.max(e, n, r), s = Math.min(e, n, r), l = a - s;
  let f = 0;
  l > 1e-6 && (a === e ? f = ((n - r) / l + (n < r ? 6 : 0)) / 6 : a === n ? f = ((r - e) / l + 2) / 6 : f = ((e - n) / l + 4) / 6);
  const h = a <= 1e-6 ? 0 : l / a;
  return { h: f, s: h, v: a };
}
function Ob(t) {
  const e = Number(t);
  return Number.isFinite(e) ? Number(e.toFixed(3)).toString() : "0";
}
function qu(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : Number(e);
}
function Rb(t, e) {
  const n = qu(t, 1), r = qu(e, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, s = Math.max(1, Math.round(n * a)), l = Math.max(1, Math.round(r * a)), f = (p, w) => w ? f(w, p % w) : p, h = f(s, l) || 1, y = Math.max(1, Math.round(s / h)), b = Math.max(1, Math.round(l / h));
  return `${y}:${b}`;
}
function Js(t) {
  const e = W(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * ke, n = W(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * ke;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Fb(t) {
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
function yr(t) {
  const e = Js(t);
  return Fb(e) || Rb(e, 1);
}
function Vb(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = yr(e), e;
}
function _i(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : yr(t);
}
let La = null;
function Hb() {
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
const jd = "pano_suite.ui_settings.v1", Ud = "pano_suite.node_grid_visibility.v1";
let jr = null, kn = null, Oa = { text: null, parsed: null };
function Ri(t) {
  const e = t && typeof t == "object" ? t : {}, n = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function zb() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(jd)) || "").trim();
    if (!e) return jr ? Ri(jr) : null;
    const n = JSON.parse(e), r = Ri(n);
    return jr = r, r;
  } catch {
    return jr ? Ri(jr) : null;
  }
}
function $b(t) {
  var n;
  const e = Ri(t);
  jr = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(jd, JSON.stringify(e));
  } catch {
  }
  return e;
}
function Bd() {
  var t;
  if (kn && typeof kn == "object")
    return kn;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Ud)) || "").trim();
    if (!e)
      return kn = {}, kn;
    const n = JSON.parse(e);
    return kn = n && typeof n == "object" ? n : {}, kn;
  } catch {
    return kn = {}, kn;
  }
}
function jb(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const a = Bd()[n];
  return typeof a == "boolean" ? a : !!e;
}
function Ub(t, e) {
  var a;
  const n = String(t ?? "").trim();
  if (!n) return;
  const r = Bd();
  r[n] = !!e, kn = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Ud, JSON.stringify(r));
  } catch {
  }
}
function Bb(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([n, r]) => {
    e[n] = r && typeof r == "object" ? { ...r } : r;
  }), e;
}
function Gb(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const n = { ...e };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Kb(t) {
  var r, a;
  const e = Array.isArray((r = t == null ? void 0 : t.paint) == null ? void 0 : r.strokes) ? t.paint.strokes.length : 0, n = Array.isArray((a = t == null ? void 0 : t.mask) == null ? void 0 : a.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: n };
}
function Xu(t) {
  const { paintCount: e, maskCount: n } = Kb(t), r = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
  let a = 0, s = 0;
  return r.forEach((l) => {
    String((l == null ? void 0 : l.layerKind) || "paint") === "mask" ? s += 1 : a += 1;
  }), {
    paintCount: e,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: s,
    totalPaintCount: e + a,
    totalMaskCount: n + s
  };
}
function Vr(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Zu(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function Wb(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : Vb(e)) : [];
}
function Yb(t, e = 2048, n = "#00ff00", r = 360) {
  const a = zb(), s = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Qe(r),
    bg_color: n,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Oi(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(a != null && a.invert_view_x),
      invert_view_y: !!(a != null && a.invert_view_y),
      preview_quality: String((a == null ? void 0 : a.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, l = String(t || "").trim();
  if (!l) return s;
  try {
    let f = null;
    if (Oa.text === l ? f = Oa.parsed : (f = JSON.parse(l), Oa = { text: l, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return s;
    const h = {
      ...s,
      ...f,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Bb(f.assets),
      stickers: Gb(f.stickers),
      shots: Wb(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: Oi(f.painting),
      painting_layer: f.painting_layer && typeof f.painting_layer == "object" ? f.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(f.ui_settings && f.ui_settings.invert_view_x),
        invert_view_y: !!(f.ui_settings && f.ui_settings.invert_view_y),
        preview_quality: (() => {
          var b;
          const y = String(((b = f.ui_settings) == null ? void 0 : b.preview_quality) || "balanced");
          return y === "draft" || y === "balanced" || y === "high" ? y : "balanced";
        })()
      },
      active: f.active && typeof f.active == "object" ? { ...f.active } : { ...s.active }
    };
    return a && (h.ui_settings = Ri({ ...h.ui_settings, ...a })), h.output_preset = tc(e, Number(h.output_preset || s.output_preset)), h.bg_color = String(n || h.bg_color || s.bg_color), h.coverage = Qe(r), delete h.editor_history, h;
  } catch {
    return Oa = { text: l, parsed: null }, s;
  }
}
function fn(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function Nc(t) {
  if (!t || t.__panoCoverageWidgetSyncInstalled) return;
  const e = fn(t, "coverage");
  if (!e) return;
  const n = typeof e.callback == "function" ? e.callback.bind(e) : null;
  e.callback = function(...r) {
    var s, l, f, h, y, b, p, w, M, E;
    const a = n ? n(...r) : void 0;
    return t.__panoStateCache = null, t.__panoLiveStateOverride = null, t.__panoWrappedErpCache = null, t.__panoPanoBackgroundCache = null, (l = (s = t.__panoPreviewNodeRuntime) == null ? void 0 : s.requestDraw) == null || l.call(s), (h = (f = t.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || h.call(f), (y = t.setDirtyCanvas) == null || y.call(t, !0, !0), (p = (b = t.graph) == null ? void 0 : b.setDirtyCanvas) == null || p.call(b, !0, !0), (E = (M = (w = dn) == null ? void 0 : w.canvas) == null ? void 0 : M.setDirty) == null || E.call(M, !0, !0), a;
  }, t.__panoCoverageWidgetSyncInstalled = !0;
}
function qb(t) {
  const e = String(t ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(e) || /^#?[0-9a-fA-F]{3}$/.test(e);
}
function Ju(t) {
  const e = String(t ?? "").trim();
  return e.startsWith("{") && e.endsWith("}");
}
function Xb(t) {
  var M, E, L, R, O;
  if (!t || t.__panoCoverageWidgetOrderMigrated) return;
  const e = fn(t, "coverage"), n = fn(t, "bg_color"), r = fn(t, mo), a = fn(t, "sticker_state");
  if (!e || !n || !r) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const s = String(e.value ?? "").trim(), l = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(s) && qb(s) && (Ju(l) || l === ""))) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (Ju(l))
    try {
      const C = JSON.parse(l);
      y = String(Qe(C == null ? void 0 : C.coverage));
    } catch {
      y = "360";
    }
  const b = s, p = l, w = f;
  e.value = y, (M = e.callback) == null || M.call(e, y), n.value = b, (E = n.callback) == null || E.call(n, b), r.value = p, (L = r.callback) == null || L.call(r, p), a && (a.value = w, (R = a.callback) == null || R.call(a, w)), (O = t.setDirtyCanvas) == null || O.call(t, !0, !0), t.__panoCoverageWidgetOrderMigrated = !0;
}
function Is(t) {
  return String(t ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function Zb(t, e) {
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
function Jb(t, e) {
  (Array.isArray(t == null ? void 0 : t.widgets) ? t.widgets : []).forEach((r) => {
    var s, l;
    const a = String((r == null ? void 0 : r.name) || "");
    (a === e || a.trim() === e || a.toLowerCase().includes(String(e).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (s = r.inputEl) != null && s.style && (r.inputEl.style.display = "none"), (l = r.parentEl) != null && l.style && (r.parentEl.style.display = "none")));
  });
}
function Qs(t, e, n) {
  var s, l;
  if (!t || typeof t.addWidget != "function") return null;
  let a = (Array.isArray(t.widgets) ? t.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(e));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (s = a.inputEl) != null && s.style && (a.inputEl.style.display = ""), (l = a.parentEl) != null && l.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = t == null ? void 0 : t.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), a) : (a = t.addWidget("button", e, null, n), a && (a.serialize = !1), a);
}
function Ra(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function tc(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : e;
}
function Gd(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Qb(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Kd(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function t_(t, e, n = null) {
  var a, s;
  let r = null;
  try {
    r = typeof (t == null ? void 0 : t.getInputNode) == "function" ? t.getInputNode(e) : null;
  } catch {
    r = null;
  }
  if ((a = r == null ? void 0 : r.isSubgraphNode) != null && a.call(r))
    try {
      const l = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, f = l ? (s = r.resolveSubgraphOutputLink) == null ? void 0 : s.call(r, Number(l.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = Qb(t == null ? void 0 : t.graph, n)), r;
}
function vo(t) {
  var a;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const r = `/view?${n.toString()}`;
  return typeof ((a = Ge) == null ? void 0 : a.apiURL) == "function" ? Ge.apiURL(r) : r;
}
function e_(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function n_(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const a = String(r.pop() || "").trim(), s = r.join("/");
  return { filename: a, subfolder: s };
}
function r_(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const a = String(r || "").trim();
    !a || n.has(a) || (n.add(a), e.push(a));
  }), e;
}
function Wd(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (e_(e)) return [e];
  const { filename: n, subfolder: r } = n_(e);
  if (!n) return [e];
  const a = ["temp", "output", "input"].map((s) => vo({
    filename: n,
    subfolder: r,
    type: s
  }));
  return r_([...a, e]);
}
function i_(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? vo({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function Fi(t) {
  var r;
  const e = (r = dn) == null ? void 0 : r.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  return e instanceof Map ? e.get(t) || e.get(n) || e.get(Number(n)) || null : e[t] || e[n] || null;
}
function Qr(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Qr(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return vo({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Qr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : vo(t);
}
function a_(t, e = -1) {
  var a;
  const n = [];
  Array.isArray(t == null ? void 0 : t.images) && t.images.length && n.push(t.images), Array.isArray((a = t == null ? void 0 : t.ui) == null ? void 0 : a.images) && t.ui.images.length && n.push(t.ui.images);
  const r = [];
  for (const s of n)
    !Array.isArray(s) || !s.length || (e >= 0 && e < s.length && r.push(s[e]), r.push(...s));
  return r;
}
function Es(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t || []) {
    const a = Qr(r);
    !a || n.has(a) || (n.add(a), e.push(a));
  }
  return e;
}
function o_(t, e, n, r = null) {
  var p;
  const a = Fi(t == null ? void 0 : t.id), s = Array.isArray((p = a == null ? void 0 : a.ui) == null ? void 0 : p[e]) ? a.ui[e] : Array.isArray(a == null ? void 0 : a[e]) ? a[e] : [], l = Array.isArray(s) && s.length ? s[0] : null, f = Qr(l);
  if (!f) return null;
  const h = `__ui__${e}`, y = n.get(h);
  if (y && y.__panoSrc === f) return y;
  const b = new Image();
  return b.__panoSrc = f, b.onload = () => {
    typeof r == "function" && r(b);
  }, b.src = f, n.set(h, b), b;
}
function s_(t, e) {
  var C, A;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], a = r.findIndex((D) => String((D == null ? void 0 : D.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const s = r[a], l = s == null ? void 0 : s.link;
  if (l == null) return { src: "", sourceType: "", inputName: n };
  const f = Gd(t.graph, l), { originId: h, originSlot: y } = Kd(f);
  if (h == null) return { src: "", sourceType: "", inputName: n };
  const b = t_(t, a, h), p = Number(y || 0);
  if (!b) return { src: "", sourceType: "", inputName: n };
  let w = [];
  try {
    w = typeof ((C = dn) == null ? void 0 : C.getNodeImageUrls) == "function" ? dn.getNodeImageUrls(b) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length) {
    const D = [];
    p >= 0 && p < w.length && D.push(w[p]), D.push(...w);
    const $ = Es(D);
    if ($.length) return { src: $[0], srcCandidates: $, sourceType: "appNodeImageUrls", inputName: n };
  }
  const M = Fi((b == null ? void 0 : b.id) ?? h), E = a_(M, p), L = Es(E);
  if (L.length) return { src: L[0], srcCandidates: L, sourceType: "nodeOutputs", inputName: n };
  const R = Array.isArray(b == null ? void 0 : b.imgs) ? b.imgs : [];
  if (R.length) {
    const D = [];
    p >= 0 && p < R.length && D.push(R[p]), D.push(...R);
    const $ = Es(D);
    if ($.length) return { src: $[0], srcCandidates: $, sourceType: "nodeImgs", inputName: n };
  }
  const O = (A = b == null ? void 0 : b.widgets) == null ? void 0 : A.find((D) => String((D == null ? void 0 : D.name) || "").toLowerCase() === "image");
  if (O) {
    let D = Qr(O.value);
    if (D && !D.includes("/") && !D.includes(":") && (b.comfyClass === "LoadImage" || b.type === "LoadImage") && (D = Ge.apiURL(`/view?filename=${encodeURIComponent(D)}&type=input&subfolder=`)), D) return { src: D, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function c_(t, e, n, r = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const s = Wd(a);
  if (!s.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const l = String(e || "image"), f = t.__panoLinkedInputImageCache.get(l);
  if (f && f.srcRaw === a && f.img) return f.img;
  const h = new Image(), y = { srcRaw: a, resolvedSrc: "", img: h };
  t.__panoLinkedInputImageCache.set(l, y);
  let b = -1;
  const p = () => {
    var M, E;
    if (b += 1, b >= s.length) {
      try {
        (E = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || E.call(M, l);
      } catch {
      }
      return;
    }
    const w = s[b];
    y.resolvedSrc = w, h.src = w;
  };
  return h.onload = () => {
    var w;
    r == null || r(), (w = t.setDirtyCanvas) == null || w.call(t, !0, !0);
  }, h.onerror = () => {
    var w, M;
    if (b + 1 < s.length) {
      p();
      return;
    }
    try {
      (M = (w = t.__panoLinkedInputImageCache) == null ? void 0 : w.delete) == null || M.call(w, l);
    } catch {
    }
  }, p(), h;
}
function l_(t, e, n, r = null) {
  const a = Array.isArray(n) ? n.map((E) => String(E || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = String(e || "image"), l = a.join(`
`), f = t.__panoLinkedInputImageCache.get(s);
  if (f && f.srcRaw === l && f.img) return f.img;
  const h = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((E) => {
    Wd(E).forEach((L) => {
      const R = String(L || "").trim();
      !R || y.has(R) || (y.add(R), h.push(R));
    });
  }), !h.length) return null;
  const b = new Image(), p = { srcRaw: l, resolvedSrc: "", img: b };
  t.__panoLinkedInputImageCache.set(s, p);
  let w = -1;
  const M = () => {
    var L, R;
    if (w += 1, w >= h.length) {
      try {
        (R = (L = t.__panoLinkedInputImageCache) == null ? void 0 : L.delete) == null || R.call(L, s);
      } catch {
      }
      return;
    }
    const E = h[w];
    p.resolvedSrc = E, b.src = E;
  };
  return b.onload = () => {
    var E;
    r == null || r(), (E = t.setDirtyCanvas) == null || E.call(t, !0, !0);
  }, b.onerror = () => {
    var E, L;
    if (w + 1 < h.length) {
      M();
      return;
    }
    try {
      (L = (E = t.__panoLinkedInputImageCache) == null ? void 0 : E.delete) == null || L.call(E, s);
    } catch {
    }
  }, M(), b;
}
function Yd(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const r of n) {
    const a = s_(t, r);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Qu(t, e = [], n = null, r = "") {
  const a = Array.isArray(e) ? e : [e], s = Yd(t, a), l = String(r || a.join("|") || "image_exact"), f = Array.isArray(s == null ? void 0 : s.srcCandidates) ? s.srcCandidates : [];
  if (f.length) return l_(t, l, f, n);
  const h = String((s == null ? void 0 : s.src) || "").trim();
  return h ? c_(t, l, h, n) : null;
}
async function Vi(t, e, n = {}) {
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, s = r, l = Zb(t, e);
  await Hb();
  const f = fn(t, "output_preset"), h = fn(t, "coverage"), y = fn(t, "bg_color"), b = fn(t, mo), p = Yb(
    String((b == null ? void 0 : b.value) || ""),
    tc(f == null ? void 0 : f.value, 2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    Qe(h == null ? void 0 : h.value)
  );
  t.__panoLiveStateOverride = JSON.stringify(p), e === "cutout" && (p.shots = Array.isArray(p.shots) ? p.shots.slice(0, 1) : [], p.shots.length || (p.active.selected_shot_id = null));
  const w = $d(e), M = /* @__PURE__ */ ko({
    viewButtons: (w.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (w.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(w.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...s ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: He.fullscreen, disabled: !1 }] : []
    ],
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: He.fullscreen,
      label: "Expand Preview",
      tip: "Expand preview"
    },
    paintDock: {
      visible: !1,
      activePane: "",
      showColorRow: !0,
      colorEnabled: !0,
      activeSwatchId: "green",
      customColorActive: !1,
      customColorCss: Mn({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Mn({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (i, o) => ({ index: o, color: null })),
      sizeValue: 10,
      sizeText: "10",
      sizeFill: "7.56%",
      sizeDisabled: !1,
      showSizeRow: !0,
      clearVisible: { paint: !0, mask: !0 },
      activeTools: { paint: "pen", mask: "pen" }
    },
    sidePanel: {},
    selectionMenu: { visible: !1, left: 0, top: 0, items: [] },
    tooltip: { visible: !1, text: "", left: 0, top: 0, variant: "" },
    confirmDialog: { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }
  }), E = document.createElement("div");
  document.body.appendChild(E);
  const L = w1(Nb, {
    open: !0,
    type: e,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: l,
    shellPreset: w,
    paintSwatches: Ya.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Mn(i.color, 1)
    })),
    uiState: M,
    onClose: () => Tr()
  });
  try {
    L.mount(E);
  } catch (i) {
    try {
      L.unmount();
    } catch {
    }
    throw E.remove(), i;
  }
  const R = E.querySelector(".pano-modal-overlay"), O = E.querySelector(".pano-modal"), C = O == null ? void 0 : O.querySelector("[data-stage-overlay]"), A = O == null ? void 0 : O.querySelector("[data-stage-background]"), D = O == null ? void 0 : O.querySelector(".pano-stage-wrap");
  if (!R || !O || !C || !A || !D)
    throw L.unmount(), E.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const $ = document.createElement("div");
  $.setAttribute("aria-hidden", "true"), $.style.position = "absolute", $.style.left = "0", $.style.top = "0", $.style.pointerEvents = "none", $.style.zIndex = "12", $.style.display = "none", $.style.willChange = "transform,width,height,background,border-radius", D == null || D.appendChild($);
  const ot = document.createElement("div");
  ot.className = "pano-paint-size-preview", ot.setAttribute("aria-hidden", "true");
  const dt = document.createElement("div");
  dt.className = "pano-paint-size-preview-sample", ot.appendChild(dt), D == null || D.appendChild(ot);
  const T = C.getContext("2d"), wt = qi(), V = O.querySelector("[data-side]"), lt = O.querySelector("[data-selection-menu]"), xt = O.querySelector("[data-tooltip]"), Mt = O.querySelector("[data-paint-color-row]"), at = O.querySelector("[data-paint-color-pop]"), Z = O.querySelector("[data-paint-color-sv]"), st = O.querySelector("[data-paint-color-sv-cursor]"), pt = O.querySelector("[data-paint-hue-strip]"), Y = O.querySelector("[data-paint-hue-handle]");
  let ut = 0, St = 0;
  D == null || D.removeAttribute("data-stage-ready"), D == null || D.setAttribute("data-stage-loading-kind", "boot"), C.style.opacity = "1", A.style.opacity = "0", a && (V == null || V.remove(), O.classList.add("pano-modal-readonly"));
  const Lt = () => {
    if (!g.customPaintSessionStart) return;
    if (qa(g.customPaintSessionStart, g.customPaintColor)) {
      g.customPaintSessionStart = null;
      return;
    }
    if (Lb(g.customPaintColor)) {
      g.customPaintSessionStart = null;
      return;
    }
    const i = [
      an(g.customPaintColor),
      ...g.customPaintHistory.filter((o) => !qa(o, g.customPaintColor))
    ];
    g.customPaintHistory = i.slice(0, 8), g.customPaintSessionStart = null;
  }, Dt = (i = !1) => {
    !at || at.hidden || (i ? Lt() : g.customPaintSessionStart = null, at.hidden = !0, M.paintDock.colorPopOpen = !1);
  }, ie = () => {
    at && (at.hidden && (g.customPaintSessionStart = an(g.customPaintColor)), at.hidden = !1, M.paintDock.colorPopOpen = !0);
  };
  O.addEventListener("pointerdown", (i) => {
    ga(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (O.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), Dt(!0), e === "cutout" && g.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (g.cutoutAspectOpen = !1, g.menuMode = "", g.menuSize.measured = !1, Ut(), yt())));
  });
  const Ne = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, en = JSON.stringify(Zu(p)), g = {
    mode: "pano",
    selectedId: Ne,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Qe(p.coverage),
    historyController: xy(80, { entries: [en], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: $n,
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
    showGrid: jb(t == null ? void 0 : t.id, !0),
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
    paintEngine: Us(),
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
  e === "stickers" && (g.selectedId = null, p.active.selected_sticker_id = null), g.selectedIds = g.selectedId ? [g.selectedId] : [];
  const le = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), We = /* @__PURE__ */ new Map(), Pe = /* @__PURE__ */ new Map(), At = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: e === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, S = {
    timer: 0,
    target: null
  }, I = {
    active: !1,
    depth: 0
  };
  function F() {
    M.toolButtons.forEach((i) => {
      const o = i.attr === "data-tool-mode", c = i.attr === "data-paint-tool", u = i.attr === "data-mask-tool";
      i.active = o ? i.value === g.primaryTool : c ? i.key === g.paintTool : u ? i.key === g.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function K(i) {
    const o = i == null ? void 0 : i.dataTransfer;
    if (!o) return !1;
    if (o.items && o.items.length) {
      for (const c of o.items) {
        if (!c || c.kind !== "file") continue;
        const u = String(c.type || "").toLowerCase();
        if (!u || u.startsWith("image/")) return !0;
      }
      return !1;
    }
    return o.files && o.files.length ? Array.from(o.files).some((c) => ua(c)) : !1;
  }
  function B(i) {
    const o = !!i;
    I.active !== o && (I.active = o, D.classList.toggle("drop-active", o));
  }
  function G(i, o, c = g.viewFov, u = 140, d = 620) {
    const m = om(g.viewYaw, i), _ = o - g.viewPitch, v = c - g.viewFov, x = Math.hypot(m, _) + Math.abs(v) * 0.6, k = Math.round(W(u + x * 2.2, u, d));
    g.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: k,
      startYaw: g.viewYaw,
      startPitch: g.viewPitch,
      startFov: g.viewFov,
      targetPitch: o,
      targetFov: c,
      deltaYaw: m
    }, g.viewInertia.active = !1, g.viewInertia.vx = 0, g.viewInertia.vy = 0, yt();
  }
  gh();
  function J() {
    return e === "stickers" ? p.stickers : p.shots;
  }
  function tt() {
    const i = p.painting || (p.painting = Oi(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function it(i = "paint") {
    var d, m;
    const o = Array.isArray((m = (d = p.painting) == null ? void 0 : d[i]) == null ? void 0 : m.strokes) ? p.painting[i].strokes : [], c = [], u = /* @__PURE__ */ new Set();
    for (const _ of o) {
      const v = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !v || u.has(v) || (u.add(v), c.push(v));
    }
    return c;
  }
  function Q() {
    return it("paint");
  }
  function _t(i, o) {
    const c = String(o || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function ft(i) {
    const o = String(i || "").trim();
    return o ? `raster:${o}` : "";
  }
  function ht(i) {
    const o = String(i || "").trim();
    if (!o) return "";
    const c = o.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : o).trim();
  }
  function Pt(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const u = c.match(/^(paint|mask):(.*)$/);
    return u ? { layerKind: u[1] === "mask" ? "mask" : "paint", actionGroupId: String(u[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function mt() {
    var o;
    let i = -1;
    for (const c of Array.isArray(p.stickers) ? p.stickers : [])
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of tt())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Array.isArray((o = p.painting) == null ? void 0 : o.raster_objects) ? p.painting.raster_objects : [])
      String((c == null ? void 0 : c.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0)));
    return i + 1;
  }
  function jt(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return null;
    const u = tt();
    let d = u.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === c);
    return d ? o != null && (d.z_index = Math.max(0, Number(o || 0))) : (d = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: o == null ? mt() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, u.push(d)), d;
  }
  function Tt(i) {
    if (!(i != null && i.centerUv)) return [];
    const o = Number(i.centerUv.u || 0), c = Number(i.centerUv.v || 0), u = Number(i.halfW || 0), d = Number(i.halfH || 0);
    return [
      {
        u: ((o - u) % 1 + 1) % 1,
        v: W(c - d, 0, 1)
      },
      {
        u: ((o + u) % 1 + 1) % 1,
        v: W(c - d, 0, 1)
      },
      {
        u: ((o + u) % 1 + 1) % 1,
        v: W(c + d, 0, 1)
      },
      {
        u: ((o - u) % 1 + 1) % 1,
        v: W(c + d, 0, 1)
      }
    ];
  }
  function de() {
    const i = new Set(Q()), c = tt().filter((u) => i.has(String((u == null ? void 0 : u.actionGroupId) || "")));
    return i.forEach((u) => {
      c.some((d) => String((d == null ? void 0 : d.actionGroupId) || "") === u) || c.push({
        id: u,
        type: "strokeGroup",
        actionGroupId: u,
        z_index: mt(),
        locked: !1,
        frame: null
      });
    }), c.sort((u, d) => Number((u == null ? void 0 : u.z_index) || 0) - Number((d == null ? void 0 : d.z_index) || 0)), p.painting.groups = c, c;
  }
  function me(i, o, c) {
    var z;
    const u = (q) => (Number(q || 0) % 1 + 1) % 1, d = [];
    for (const q of c) {
      const nt = q == null ? void 0 : q.geometry, vt = (nt == null ? void 0 : nt.geometryKind) === "lasso_fill" ? nt == null ? void 0 : nt.points : (nt == null ? void 0 : nt.processedPoints) || (nt == null ? void 0 : nt.rawPoints) || (nt == null ? void 0 : nt.points) || [];
      Array.isArray(vt) && d.push(...vt);
    }
    if (!d.length) return null;
    const m = u(((z = d[0]) == null ? void 0 : z.u) || 0);
    let _ = 0, v = 0;
    d.forEach((q) => {
      const nt = u((q == null ? void 0 : q.u) || 0);
      _ += m + ln(nt, m), v += Number((q == null ? void 0 : q.v) || 0);
    });
    const x = (_ / d.length % 1 + 1) % 1;
    let k = 1 / 0, P = -1 / 0, N = 1 / 0, H = -1 / 0;
    d.forEach((q) => {
      const nt = u((q == null ? void 0 : q.u) || 0), vt = ln(nt, x);
      k = Math.min(k, vt), P = Math.max(P, vt);
      const rt = Number((q == null ? void 0 : q.v) || 0);
      N = Math.min(N, rt), H = Math.max(H, rt);
    });
    const U = c.reduce((q, nt) => {
      const vt = tr(String((nt == null ? void 0 : nt.toolKind) || "pen")), rt = Ze[vt] || Ze[$n], gt = Math.max(1, Number((nt == null ? void 0 : nt.size) || 10)) * Math.max(0.1, Number((rt == null ? void 0 : rt.sizeScale) ?? 1));
      return Math.max(q, gt);
    }, 0), X = Math.max(35e-4, U / 2048);
    return {
      centerUv: { u: ((x + (k + P) * 0.5) % 1 + 1) % 1, v: W((N + H) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (P - k) * 0.5 + X,
      halfH: (H - N) * 0.5 + X,
      uvPad: X
    };
  }
  function ye(i, o, c) {
    const u = String(i || "").trim();
    if (!u) return null;
    const d = tt().find((_) => String((_ == null ? void 0 : _.actionGroupId) || "") === u);
    if (!d) return null;
    const m = c || pn(u, o);
    return d.frame = me(u, o, m), d.frame;
  }
  function we() {
    var u;
    const i = (Array.isArray(p.stickers) ? p.stickers : []).map((d) => ({
      type: "sticker",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), o = de().map((d) => ({
      type: "strokeGroup",
      id: String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || ""),
      actionGroupId: String((d == null ? void 0 : d.actionGroupId) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), c = (Array.isArray((u = p.painting) == null ? void 0 : u.raster_objects) ? p.painting.raster_objects : []).filter((d) => String((d == null ? void 0 : d.layerKind) || "paint") === "paint").map((d) => ({
      type: "rasterObject",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    }));
    return [...i, ...o, ...c].sort((d, m) => Number(d.z_index || 0) - Number(m.z_index || 0));
  }
  function Rn(i = !0) {
    var c, u, d, m, _, v;
    const o = we().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (i) {
      const x = String(((u = (c = g.interaction) == null ? void 0 : c.stroke) == null ? void 0 : u.actionGroupId) || "").trim(), k = String(((m = (d = g.interaction) == null ? void 0 : d.stroke) == null ? void 0 : m.layerKind) || "").trim(), P = String(((v = (_ = g.interaction) == null ? void 0 : _.stroke) == null ? void 0 : v.toolKind) || "").trim();
      x && k === "paint" && P !== "eraser" && !o.includes(x) && o.push(x);
    }
    return o;
  }
  function ei(i = !0) {
    var v, x, k, P, N, H;
    const o = we();
    if (!i) return o;
    const c = String(((x = (v = g.interaction) == null ? void 0 : v.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), u = String(((P = (k = g.interaction) == null ? void 0 : k.stroke) == null ? void 0 : P.layerKind) || "").trim(), d = String(((H = (N = g.interaction) == null ? void 0 : N.stroke) == null ? void 0 : H.toolKind) || "").trim();
    if (!c || u !== "paint" || d === "eraser" || o.some((U) => U.type === "strokeGroup" && String(U.actionGroupId || "") === c))
      return o;
    const m = ee();
    let _ = o.reduce((U, X) => Math.max(U, Number((X == null ? void 0 : X.z_index) || 0)), -1) + 1;
    return m && ve(m) && String(m.actionGroupId || "") === c && (_ = Number(m.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: _,
        item: null
      }
    ].sort((U, X) => Number((U == null ? void 0 : U.z_index) || 0) - Number((X == null ? void 0 : X.z_index) || 0));
  }
  function Fe() {
    return tt().slice().sort((i, o) => Number((i == null ? void 0 : i.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((i) => ii(_t("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function cn() {
    var i;
    return (Array.isArray((i = p.painting) == null ? void 0 : i.raster_objects) ? p.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, c) => Number((o == null ? void 0 : o.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((o) => ri(ft((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function ni(i = g.interaction) {
    const o = String((i == null ? void 0 : i.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, u = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || u;
    }
    return !1;
  }
  function Xi() {
    var o, c, u, d;
    let i = null;
    try {
      const m = Rn(), _ = ((d = (u = (c = (o = g.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, m)) == null ? void 0 : u.displayPaint) == null ? void 0 : d.canvas) || null;
      _ && (i = {
        source: _,
        revision: `${Ar()}:${Lo()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function Lo() {
    var d, m, _, v, x, k, P;
    const i = g.interaction, o = String((i == null ? void 0 : i.kind) || "");
    if (!ni(i)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const N = ((d = i == null ? void 0 : i.stroke) == null ? void 0 : d.geometry) || null, H = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), U = ((_ = N == null ? void 0 : N.rawPoints) == null ? void 0 : _.length) ?? ((v = N == null ? void 0 : N.points) == null ? void 0 : v.length) ?? 0, X = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${H || "paint"}_${o}_live${X}_${U}_${g.livePaintInteractionRevision}`;
    }
    const c = String(((x = i == null ? void 0 : i.item) == null ? void 0 : x.actionGroupId) || ""), u = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.rasterObjectId) || ((P = i == null ? void 0 : i.item) == null ? void 0 : P.id) || "");
    return `_${o}_${c || u || "active"}_${g.livePaintInteractionRevision}`;
  }
  function Oo() {
    return [...Array.isArray(p.stickers) ? p.stickers : []];
  }
  function Pc(i) {
    return !1;
  }
  function Ce(i) {
    return !!i && Array.isArray(p.stickers) && p.stickers.includes(i);
  }
  function Ye() {
    var i;
    return Array.isArray((i = p.painting) == null ? void 0 : i.raster_objects) ? p.painting.raster_objects : [];
  }
  function ri(i) {
    const o = ht(i);
    if (!o) return null;
    const c = Ye().find((u) => String((u == null ? void 0 : u.id) || "").trim() === o);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: ft(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Ae(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const o = ht(i.rasterObjectId || i.id || "");
    return !!o && !!ri(ft(o));
  }
  function ii(i) {
    const o = Pt(i), c = String(o.actionGroupId || "").trim();
    if (!c) return null;
    const u = tt().find((d) => String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || "") === c || String((d == null ? void 0 : d.actionGroupId) || "") === c);
    return u ? {
      ...u,
      id: _t("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function ve(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const o = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!o && !!ii(_t(c, o));
  }
  function pn(i, o = null) {
    const c = Pt(i, o), u = String(c.actionGroupId || "").trim();
    return u ? Dr(c.layerKind).filter((d) => String((d == null ? void 0 : d.actionGroupId) || "").trim() === u) : [];
  }
  function qd(i, o = "paint") {
    var m, _, v;
    const c = String(i || "").trim(), d = `geomv5:${String(o || "paint").trim() || "paint"}:${c}:${g.mode}:${li()}`;
    if (g.mode === "frame") {
      const x = be(), k = String((x == null ? void 0 : x.id) || "");
      return `${d}:frame:${k}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(Number((m = g.frameView) == null ? void 0 : m.zoom) * 1e3)}:${Math.round(Number(((_ = g.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((v = g.frameView) == null ? void 0 : v.panY) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(g.viewYaw || 0) * 100)}:${Math.round(Number(g.viewPitch || 0) * 100)}:${Math.round(Number(g.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Zi(i, o, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: W(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function ln(i, o) {
    let c = Number(i || 0) - Number(o || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function Ro(i, o = null, c = null) {
    var k;
    const u = Pt(i, o), d = Array.isArray(c) ? c : pn(u.actionGroupId, u.layerKind), m = [];
    if (d.forEach((P) => {
      const N = (P == null ? void 0 : P.geometry) || null, H = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
      Array.isArray(H) && m.push(...H);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((k = m[0]) == null ? void 0 : k.u) || 0);
    let v = 0, x = 0;
    return m.forEach((P) => {
      v += _ + ln(Number((P == null ? void 0 : P.u) || 0), _), x += Number((P == null ? void 0 : P.v) || 0);
    }), {
      u: (v / m.length % 1 + 1) % 1,
      v: W(x / m.length, 0, 1)
    };
  }
  function Ji(i, o, c = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const d = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), _ = ln(Number(i.u || 0), d), v = Number(i.v || 0) - m, x = Number(u || 0) * ke, k = Math.cos(x), P = Math.sin(x), N = Math.max(0.02, Number(c || 1)), H = (_ * k - v * P) * N, U = (_ * P + v * k) * N;
    return {
      ...i,
      u: ((d + H) % 1 + 1) % 1,
      v: W(m + U, 0, 1)
    };
  }
  function Cc(i, o, c, u = null, d = null, m = null) {
    const _ = Pt(i, d), v = String(_.actionGroupId || "").trim();
    if (!v) return !1;
    const x = Dr(_.layerKind), k = Array.isArray(u) ? new Map(u.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let P = !1;
    if (x.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== v) return;
      const H = (k == null ? void 0 : k.get(String((N == null ? void 0 : N.id) || ""))) || N, U = N == null ? void 0 : N.geometry, X = H == null ? void 0 : H.geometry;
      !U || !X || (Array.isArray(X.points) && (U.points = X.points.map((z) => Zi(z, o, c)), P = !0), Array.isArray(X.rawPoints) && (U.rawPoints = X.rawPoints.map((z) => Zi(z, o, c)), P = !0), Array.isArray(X.processedPoints) && (U.processedPoints = X.processedPoints.map((z) => Zi(z, o, c)), P = !0));
    }), P && m) {
      const N = tt().find((H) => String((H == null ? void 0 : H.actionGroupId) || "") === v);
      N && (N.frame = null);
    }
    return P;
  }
  function Ac(i, o = 1, c = 0, u = null, d = null, m = null) {
    const _ = Pt(i, d), v = String(_.actionGroupId || "").trim();
    if (!v) return !1;
    const x = Dr(_.layerKind), k = Array.isArray(u) ? u : pn(v, _.layerKind), P = Array.isArray(k) ? new Map(k.map((U) => [String((U == null ? void 0 : U.id) || ""), U])) : null, N = (m == null ? void 0 : m.centerUv) ?? Ro(v, _.layerKind, k);
    let H = !1;
    if (x.forEach((U) => {
      if (String((U == null ? void 0 : U.actionGroupId) || "").trim() !== v) return;
      const X = (P == null ? void 0 : P.get(String((U == null ? void 0 : U.id) || ""))) || U, z = U == null ? void 0 : U.geometry, q = X == null ? void 0 : X.geometry;
      !z || !q || (Array.isArray(q.points) && (z.points = q.points.map((nt) => Ji(nt, N, o, c)), H = !0), Array.isArray(q.rawPoints) && (z.rawPoints = q.rawPoints.map((nt) => Ji(nt, N, o, c)), H = !0), Array.isArray(q.processedPoints) && (z.processedPoints = q.processedPoints.map((nt) => Ji(nt, N, o, c)), H = !0));
    }), H && m) {
      const U = tt().find((X) => String((X == null ? void 0 : X.actionGroupId) || "") === v);
      U && (U.frame = null);
    }
    return H;
  }
  function Ic(i, o, c, u = null) {
    const d = ht(i);
    if (!d) return !1;
    const m = Ye().find((P) => String((P == null ? void 0 : P.id) || "").trim() === d);
    if (!m) return !1;
    const _ = u && typeof u == "object" ? u : m, v = (_ == null ? void 0 : _.transform) || {}, x = Number(v.du || 0) + Number(o || 0), k = W(Number(v.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = x, m.transform.dv = k, !0;
  }
  function Xd(i, o = 1, c = null) {
    const u = ht(i);
    if (!u) return !1;
    const d = Ye().find((k) => String((k == null ? void 0 : k.id) || "").trim() === u);
    if (!d) return !1;
    const m = c && typeof c == "object" ? c : d, _ = (m == null ? void 0 : m.transform) || {}, v = Math.max(0.01, Number(_.scale || 1)), x = W(v * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return d.transform || (d.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), d.transform.scale = x, !0;
  }
  function ee() {
    const i = String(g.selectedId || "");
    if (!i) return null;
    const o = ii(i);
    if (o) return o;
    const c = ri(i);
    return c || (e === "cutout" ? Oo().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null : J().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null);
  }
  function gn() {
    const i = Array.isArray(g.selectedIds) && g.selectedIds.length ? g.selectedIds : g.selectedId ? [g.selectedId] : [], o = [], c = /* @__PURE__ */ new Set();
    return i.forEach((u) => {
      const d = String(u || "").trim();
      if (!d || c.has(d)) return;
      c.add(d);
      const m = d === String(g.selectedId || "") ? ee() : ii(d) || ri(d) || (e === "cutout" ? Oo().find((_) => String((_ == null ? void 0 : _.id) || "") === d) : J().find((_) => String((_ == null ? void 0 : _.id) || "") === d));
      m && o.push(m);
    }), o;
  }
  function Fo(i = null) {
    const o = Array.isArray(i) ? i : gn();
    if (!o || o.length < 2) return null;
    const c = o.map((k) => nn(k)).filter((k) => (k == null ? void 0 : k.visible) && Array.isArray(k.corners) && k.corners.length);
    if (!c.length) return null;
    const u = c.flatMap((k) => k.corners.map((P) => Number((P == null ? void 0 : P.x) || 0))), d = c.flatMap((k) => k.corners.map((P) => Number((P == null ? void 0 : P.y) || 0))), m = Math.min(...u), _ = Math.max(...u), v = Math.min(...d), x = Math.max(...d);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + _) * 0.5, y: (v + x) * 0.5 },
      corners: [
        { x: m, y: v },
        { x: _, y: v },
        { x: _, y: x },
        { x: m, y: x }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + _) * 0.5, y: v, a: { x: m, y: v }, b: { x: _, y: v } },
        { edge: "right", x: _, y: (v + x) * 0.5, a: { x: _, y: v }, b: { x: _, y: x } },
        { edge: "bottom", x: (m + _) * 0.5, y: x, a: { x: _, y: x }, b: { x: m, y: x } },
        { edge: "left", x: m, y: (v + x) * 0.5, a: { x: m, y: x }, b: { x: m, y: v } }
      ],
      rotateStemBase: { x: (m + _) * 0.5, y: v },
      rotateHandle: { x: (m + _) * 0.5, y: v - 30 }
    };
  }
  function Zd(i) {
    const o = String((i == null ? void 0 : i.id) || "").trim();
    return !!o && Array.isArray(g.selectedIds) && g.selectedIds.includes(o);
  }
  function Qi() {
    const i = ee();
    return i ? ve(i) || Ae(i) ? "stroke" : "image" : null;
  }
  function Zn(i) {
    if (!i || typeof i != "object") return !1;
    if (ve(i)) {
      const o = String(i.actionGroupId || i.id || "").trim(), c = tt().find((u) => String((u == null ? void 0 : u.actionGroupId) || (u == null ? void 0 : u.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (Ae(i)) {
      const o = ht(i.rasterObjectId || i.id || ""), c = Ye().find((u) => String((u == null ? void 0 : u.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function Vo(i = null) {
    const o = Array.isArray(i) ? i : gn();
    return o.length > 0 && o.every((c) => Zn(c));
  }
  function Jd(i, o) {
    const c = o === !0;
    if (!i || typeof i != "object") return !1;
    if (ve(i)) {
      const u = String(i.actionGroupId || i.id || "").trim(), d = tt().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === u);
      return !d || d.locked === c ? !1 : (d.locked = c, !0);
    }
    if (Ae(i)) {
      const u = ht(i.rasterObjectId || i.id || ""), d = Ye().find((m) => String((m == null ? void 0 : m.id) || "").trim() === u);
      return !d || d.locked === c ? !1 : (d.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function Qd() {
    if (r) return;
    const i = gn();
    if (!i.length) return;
    const o = !Vo(i);
    let c = !1;
    i.forEach((u) => {
      Jd(u, o) && (c = !0);
    }), c && (se(), he(), Ut(), yt());
  }
  function ta(i) {
    g.selectedId = (i == null ? void 0 : i.id) || null, g.selectedIds = i != null && i.id ? [i.id] : [], i && Ce(i) ? p.active.selected_sticker_id = i.id || null : p.active.selected_sticker_id = null, i ? p.active.selected_shot_id = p.active.selected_shot_id : p.active.selected_shot_id = null;
  }
  function th(i, o = null) {
    const c = [], u = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((_) => {
      const v = String((_ == null ? void 0 : _.id) || "").trim();
      !v || u.has(v) || (u.add(v), c.push(v));
    }), g.selectedIds = c;
    const d = String(o || "").trim();
    g.selectedId = d && c.includes(d) ? d : c[c.length - 1] || null;
    const m = ee();
    p.active.selected_sticker_id = m && Ce(m) && m.id || null, c.length || (p.active.selected_shot_id = null);
  }
  function Ec() {
    return (Array.isArray(p.stickers) ? p.stickers : []).map((o, c) => {
      var d, m;
      const u = Se(o) ? String(o.id || dr) : String(((m = (d = p.assets) == null ? void 0 : d[o.asset_id]) == null ? void 0 : m.name) || o.asset_id || o.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: o,
        label: u
      };
    });
  }
  function eh(i) {
    return i === "frame" ? He.camera : i === "stroke" ? He.paintbrush_vertical_tool : He.image;
  }
  function Dc(i) {
    return !i || !i.item ? Is(String((i == null ? void 0 : i.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${eh(i.kind)}</span><span>${Is(String(i.label || ""))}</span>`;
  }
  function Tc() {
    return mt();
  }
  function Se(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === dr || String(i.source_kind || "") === Ns;
  }
  function Pr(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function nh(i) {
    return Se(i) && Pr(i) ? vd : 1;
  }
  function rh() {
    return g.primaryTool === "mask" ? g.maskTool : g.paintTool;
  }
  function ih() {
    return String(rh() || "") === "lasso_fill";
  }
  function ah() {
    if (r) return;
    const i = ee();
    !i || !Se(i) || (i.visible = Pr(i), rn(), se(), he(), zt(), Ut(), yt());
  }
  function oh() {
    if (r || e !== "stickers") return;
    const i = ee();
    if (!i || !Se(i)) return;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return;
    i.yaw_deg = Number(o.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(o.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(o.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = Ho(Ps, () => {
      yt();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = cr(
      Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(o.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(o.rot_deg ?? i.rot_deg ?? 0), se(), he(), zt(), Ut(), yt();
  }
  function sh(i) {
    if (!i || !Se(i)) return null;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return null;
    const c = {
      yaw_deg: Number(o.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? i.rot_deg ?? 0)
    }, u = Ho(Ps, () => {
      yt();
    });
    return u && (u.complete || u.naturalWidth || u.width) && (c.vFOV_deg = cr(
      c.hFOV_deg,
      Number(u.naturalWidth || u.width || 1),
      Number(u.naturalHeight || u.height || 1)
    )), c;
  }
  function ch() {
    const i = ee();
    if (!i || !Se(i)) return !1;
    const o = sh(i);
    if (!o) return !1;
    const c = (u, d) => Math.abs(Number(u || 0) - Number(d || 0)) <= 1e-4;
    return !(c(i.yaw_deg, o.yaw_deg) && c(i.pitch_deg, o.pitch_deg) && c(i.hFOV_deg, o.hFOV_deg) && c(i.vFOV_deg, o.vFOV_deg) && c(i.rot_deg, o.rot_deg));
  }
  function Lc(i) {
    var c;
    const o = Fi(t == null ? void 0 : t.id);
    return Array.isArray((c = o == null ? void 0 : o.ui) == null ? void 0 : c[i]) ? o.ui[i] : Array.isArray(o == null ? void 0 : o[i]) ? o[i] : [];
  }
  function lh(i) {
    const o = Fi(t == null ? void 0 : t.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, i) ? o.ui[i] : o && Object.prototype.hasOwnProperty.call(o, i) ? o[i] : null;
  }
  function uh(i, o = null) {
    var c;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const u = i[0];
      if (u && typeof u == "object" && !Array.isArray(u)) return u;
    }
    if (Array.isArray(o) && o.length > 0) {
      const u = (c = o[0]) == null ? void 0 : c.parsed_state;
      if (u && typeof u == "object" && !Array.isArray(u))
        return {
          yaw_deg: Number(u.yaw_deg || 0),
          pitch_deg: Number(u.pitch_deg || 0),
          hFOV_deg: Number(u.hFOV_deg || 30),
          rot_deg: Number(u.roll_deg || 0)
        };
    }
    return null;
  }
  function Ho(i, o = null) {
    const c = Lc(i), u = Array.isArray(c) && c.length ? c[0] : null, d = Qr(u);
    if (!d) return null;
    const m = `__ui__${i}`, _ = le.get(m);
    if (_ && _.__panoSrc === d) return _;
    const v = new Image();
    return v.__panoSrc = d, v.onload = () => {
      typeof o == "function" ? o(v) : yt();
    }, v.src = d, le.set(m, v), v;
  }
  function Oc(i = null) {
    const o = Qu(t, ["sticker_image"], i, "sticker_image_exact");
    return o || Ho(Ps, i);
  }
  function Rc(i) {
    const o = String(i || "");
    let c = 2166136261;
    for (let u = 0; u < o.length; u += 1)
      c ^= o.charCodeAt(u), c = Math.imul(c, 16777619);
    return String(c >>> 0);
  }
  function cr(i, o, c) {
    const u = Math.max(1, Number(o || 1)), d = Math.max(1, Number(c || 1)), m = W(Number(i || 30), 0.1, 179) * ke, _ = 2 * Math.atan(Math.tan(m * 0.5) * (d / u));
    return W(_ * mr, 0.1, 179);
  }
  function fh(i) {
    const o = String(i || "").trim();
    if (!o) return null;
    try {
      const c = JSON.parse(o);
      if (!c || typeof c != "object" || String(c.kind || "") !== "pano_sticker_state") return null;
      const u = c.version;
      let d = null;
      if (typeof u == "number" && Number.isInteger(u) ? d = u : typeof u == "string" && /^\d+$/.test(u) && (d = Number.parseInt(u, 10)), d !== 1) return null;
      const m = c.pose;
      if (!m || typeof m != "object") return null;
      const _ = Number(m.yaw_deg), v = Number(m.pitch_deg), x = Number(m.roll_deg), k = Number(m.hFOV_deg);
      if (![_, v, x, k].every((U) => Number.isFinite(U))) return null;
      let P = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(P, -0) && (P = 0);
      const N = {
        yaw_deg: P,
        pitch_deg: W(v, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: W(k, 0.1, 179)
      }, H = Number(c.source_aspect);
      return Number.isFinite(H) && H > 0 && (N.source_aspect = H), N;
    } catch {
      return null;
    }
  }
  function Fc(i) {
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), d = Number(i == null ? void 0 : i.hFOV_deg), m = Js(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $e(Number.isFinite(o) ? o : 0),
        pitch_deg: W(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: W(Number.isFinite(d) ? d : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function dh(i) {
    var v;
    if (!i || typeof i != "object") return Fc(null);
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), d = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(d) && Number.isFinite(m)) {
      const x = W(d, 0.1, 179) * ke, k = W(m, 0.1, 179) * ke, P = Math.tan(k * 0.5);
      if (Math.abs(P) > 1e-6) {
        const N = Math.tan(x * 0.5) / P;
        Number.isFinite(N) && N > 0 && (_ = N);
      }
    }
    if (i != null && i.asset_id && ((v = p == null ? void 0 : p.assets) != null && v[i.asset_id])) {
      const x = p.assets[i.asset_id], k = Number((x == null ? void 0 : x.w) || 0), P = Number((x == null ? void 0 : x.h) || 0);
      k > 0 && P > 0 && (_ = k / P);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $e(Number.isFinite(o) ? o : 0),
        pitch_deg: W(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: W(Number.isFinite(d) ? d : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function hh(i) {
    var u, d, m, _, v;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((x) => String((x == null ? void 0 : x.name) || "") === String(i)) : null, c = o == null ? void 0 : o.link;
    if (c != null) {
      const x = Gd(t.graph, c), { originId: k, originSlot: P } = Kd(x), N = Fi(k), H = [
        N == null ? void 0 : N.output,
        N == null ? void 0 : N.result,
        (u = N == null ? void 0 : N.data) == null ? void 0 : u.output,
        (d = N == null ? void 0 : N.data) == null ? void 0 : d.result,
        (m = N == null ? void 0 : N.ui) == null ? void 0 : m.output,
        (_ = N == null ? void 0 : N.ui) == null ? void 0 : _.result
      ];
      for (const U of H) {
        if (!Array.isArray(U)) continue;
        const X = Number(P || 0), z = U[X];
        if (typeof z == "string" && z.trim()) return z;
      }
    }
    return String(((v = fn(t, i)) == null ? void 0 : v.value) || "");
  }
  function ph(i, o, c) {
    const u = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : fh(o);
    if (u) {
      const _ = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || u.source_aspect || 1), v = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(u.yaw_deg || 0),
        pitch_deg: Number(u.pitch_deg || 0),
        hFOV_deg: Number(u.hFOV_deg || 30),
        vFOV_deg: cr(u.hFOV_deg, _, v),
        rot_deg: Number(u.roll_deg || 0)
      };
    }
    const d = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 1), m = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
    return {
      yaw_deg: Number(g.viewYaw || 0),
      pitch_deg: Number(g.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: cr(30, d, m),
      rot_deg: 0
    };
  }
  function Vc(i = "sync") {
    if (e !== "stickers" || r) return;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((U) => String((U == null ? void 0 : U.name) || "") === "sticker_image") : null, c = (o == null ? void 0 : o.link) ?? null, u = Oc(() => {
      var U;
      (U = t.__panoExternalStickerSync) == null || U.call(t, "image-loaded");
    }), d = uh(lh("pano_sticker_input_pose"), null), m = hh("sticker_state"), _ = Rc(d && typeof d == "object" ? JSON.stringify(d) : m), v = Array.isArray(p.stickers) ? p.stickers : p.stickers = [], x = v.findIndex((U) => String((U == null ? void 0 : U.id) || "") === dr);
    if (c == null) {
      x >= 0 && (v.splice(x, 1), g.selectedId === dr && (g.selectedId = null, g.selectedIds = [], p.active.selected_sticker_id = null), he(), zt(), Ut(), yt());
      return;
    }
    const k = v.reduce((U, X) => Math.max(U, Number((X == null ? void 0 : X.z_index) || 0)), -1);
    let P = x >= 0 ? v[x] : null;
    const N = !P || Number(P.source_link_id ?? -1) !== Number(c) || String(P.source_state_hash || "") !== _;
    P || (P = {
      id: dr,
      source_kind: Ns
    }, v.push(P)), P.id = dr, P.source_kind = Ns, P.source_link_id = Number(c), P.source_state_hash = _, P.visible = P.visible !== !1;
    let H = !1;
    if (N) {
      const U = ph(d, m, u);
      Object.assign(P, U, {
        initial_pose: { ...U },
        visible: !0,
        z_index: k + 1
      }), H = !0;
    } else if (u && (u.complete || u.naturalWidth || u.width)) {
      const U = cr(
        Number(P.hFOV_deg || 30),
        Number(u.naturalWidth || u.width || 1),
        Number(u.naturalHeight || u.height || 1)
      );
      Math.abs(Number(P.vFOV_deg || 0) - U) > 1e-6 && (P.vFOV_deg = U, H = !0);
    }
    H && (he(), zt(), Ut()), yt();
  }
  function ai(i = {}) {
    const c = i.preservePanelValues !== !1 ? ee() : null;
    c && (g.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: _i(c)
    }), g.selectedId = null, g.selectedIds = [], g.cutoutAspectOpen = !1, p.active.selected_sticker_id = null, p.active.selected_shot_id = null;
  }
  function zo() {
    bi(M.toolButtons, "value", "add-or-look", { visible: !1 });
  }
  function ea() {
    g.mode === "frame" && (g.mode = "pano"), g.outputPreviewRect = null, M.viewButtons.forEach((i) => {
      const o = i.key === g.mode;
      i.pressed = o ? "true" : "false", i.visible = i.key !== "frame", i.disabled = i.key === "frame";
    }), M.outputPreviewToggle.visible = !1, yl() ? ue(g.pointerPos) : C.style.cursor = g.mode === "pano" ? "grab" : "default";
  }
  function gh() {
    const o = Gc({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function $o() {
    const i = Sn(g.viewYaw, g.viewPitch);
    let o = Dn(0, 1, 0);
    Math.abs(vn(i, o)) > 0.999 && (o = Dn(0, 0, 1));
    const c = Fr(Da(o, i)), u = Fr(Da(i, c));
    return { right: c, up: u, fwd: i };
  }
  function oi(i) {
    const { right: o, up: c, fwd: u } = $o(), d = vn(i, o), m = vn(i, c), _ = vn(i, u);
    if (_ <= 1e-5) return null;
    const v = C.width, x = C.height, k = g.viewFov * ke, P = 2 * Math.atan(Math.tan(k / 2) * (x / v)), N = v / 2 / Math.tan(k / 2), H = x / 2 / Math.tan(P / 2);
    return {
      x: v / 2 + d / _ * N,
      y: x / 2 - m / _ * H,
      z: _
    };
  }
  function jo(i, o) {
    const { right: c, up: u, fwd: d } = $o(), m = C.width, _ = C.height, v = g.viewFov * ke, x = 2 * Math.atan(Math.tan(v / 2) * (_ / m)), k = (i - m / 2) / (m / 2) * Math.tan(v / 2), P = (_ / 2 - o) / (_ / 2) * Math.tan(x / 2), N = Ia(Ia(Ea(c, k), Ea(u, P)), d);
    return Fr(N);
  }
  function Jn() {
    const i = C.width, o = C.height, c = 2;
    if (i / Math.max(o, 1) >= c) {
      const v = o, x = v * c;
      return { x: (i - x) * 0.5, y: 0, w: x, h: v };
    }
    const d = i, m = d / c;
    return { x: 0, y: (o - m) * 0.5, w: d, h: m };
  }
  function Hc(i) {
    var _;
    if (i && typeof i == "object" && (Se(i) || i.external === !0))
      return Oc(() => {
        var v;
        (v = t.__panoExternalStickerSync) == null || v.call(t, "image-loaded");
      });
    const o = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!o) return null;
    const c = le.get(o);
    if (c) return c;
    const u = (_ = p.assets) == null ? void 0 : _[o], d = i_(u);
    if (!d) return null;
    const m = new Image();
    return m.onload = () => yt(), m.src = d, le.set(o, m), m;
  }
  function zc(i, o = null) {
    const c = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!c) return null;
    const u = Re.get(c);
    if (u)
      return u.complete || u.width || u.naturalWidth, u;
    const d = new Image();
    return d.onload = () => {
      typeof o == "function" && o();
    }, d.src = c, Re.set(c, d), d;
  }
  function mh(i) {
    const o = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!o) return null;
    const c = We.get(o);
    if (c) return c.ready ? c : null;
    const u = zc(i, () => {
      const P = We.get(o);
      P && (P.ready = !1), yt({ localOnly: !0 });
    });
    if (!u || !(u.complete || u.width || u.naturalWidth)) return null;
    const d = Number(u.naturalWidth || u.width || 0), m = Number(u.naturalHeight || u.height || 0);
    if (d < 1 || m < 1) return null;
    const _ = document.createElement("canvas");
    _.width = d, _.height = m;
    const v = _.getContext("2d", { willReadFrequently: !0 });
    if (!v) return null;
    v.clearRect(0, 0, d, m), v.drawImage(u, 0, 0, d, m);
    const x = v.getImageData(0, 0, d, m).data, k = { canvas: _, width: d, height: m, alpha: x, ready: !0 };
    return We.set(o, k), k;
  }
  function yh(i, o, c = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const d = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), _ = ln(Number(i.u || 0), d), v = Number(i.v || 0) - m, x = Math.max(0.02, Number(c || 1)), k = Number(u || 0) * ke, P = Math.cos(k), N = Math.sin(k), H = _ / x, U = v / x, X = H * P + U * N, z = -H * N + U * P;
    return {
      ...i,
      u: ((d + X) % 1 + 1) % 1,
      v: m + z
    };
  }
  function vh(i, o) {
    if (!i || !o) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const u = (i == null ? void 0 : i.transform) || {}, d = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(u.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(u.dv || 0)
    }, _ = yh(
      m,
      d,
      Number(u.scale || 1),
      Number(u.rot_deg || 0)
    ), v = Number(c.u1 || 0) - Number(c.u0 || 0), x = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(v > 1e-6) || !(x > 1e-6)) return null;
    const k = ln(Number(_.u || 0), Number(c.u0 || 0)) / v, P = (Number(_.v || 0) - Number(c.v0 || 0)) / x;
    if (k < 0 || k > 1 || P < 0 || P > 1) return 0;
    const N = mh(i);
    if (!N) return null;
    const H = W(Math.floor(k * N.width), 0, N.width - 1), U = W(Math.floor(P * N.height), 0, N.height - 1);
    return Number(N.alpha[(U * N.width + H) * 4 + 3] || 0);
  }
  function bh(i, o, c, u = null) {
    if (!(o != null && o.visible) || !rr(c, o.corners)) return !1;
    const d = u || yn(c, performance.now()), m = vh(i, d);
    return m === null ? !0 : m > 8;
  }
  function _h() {
    var u, d, m, _, v, x, k, P;
    const i = ((d = (u = g.paintEngine) == null ? void 0 : u.getErpTarget) == null ? void 0 : d.call(u, Rn(!1))) || null, o = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((v = (_ = i == null ? void 0 : i.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : v.width) || 2048)), c = Math.max(1, Number(((x = i == null ? void 0 : i.descriptor) == null ? void 0 : x.height) || ((P = (k = i == null ? void 0 : i.displayPaint) == null ? void 0 : k.canvas) == null ? void 0 : P.height) || 1024));
    return { width: o, height: c };
  }
  function xh() {
    var U, X, z;
    const i = g.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const c = Vn(), u = `${Lo()}:${c.width}:${c.height}`;
    if (((U = g._activePaintEraserPreviewInfo) == null ? void 0 : U.cacheKey) === u)
      return g._activePaintEraserPreviewInfo.value || null;
    const d = Ee(o), m = (d == null ? void 0 : d.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const q = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Zo(q, d.targetSpace, !0);
    }
    const _ = ci(c.width, c.height, { readback: !0 });
    if (!il(_, d, { w: c.width, h: c.height })) return null;
    const v = ((z = (X = _.ctx) == null ? void 0 : X.getImageData(0, 0, c.width, c.height)) == null ? void 0 : z.data) || null;
    if (!v) return null;
    let x = c.width, k = c.height, P = -1, N = -1;
    for (let q = 0; q < c.height; q += 1)
      for (let nt = 0; nt < c.width; nt += 1)
        v[(q * c.width + nt) * 4 + 3] <= 8 || (nt < x && (x = nt), q < k && (k = q), nt > P && (P = nt), q > N && (N = q));
    if (P < x || N < k)
      return g._activePaintEraserPreviewInfo = { cacheKey: u, value: null }, null;
    const H = {
      surface: _,
      bounds: { minX: x, minY: k, maxX: P, maxY: N },
      key: `${u}:${x}:${k}:${P}:${N}`
    };
    return g._activePaintEraserPreviewInfo = { cacheKey: u, value: H }, g._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), H;
  }
  function si() {
    g._activePaintEraserPreviewInfo = null, g._liveEraserPreviewCanvasCache = null;
  }
  function wh(i, o, c) {
    var u, d;
    if (!i) return null;
    if (i.type === "rasterObject" && ((u = i.item) != null && u.bbox)) {
      const m = i.item.bbox, _ = ((d = i.item) == null ? void 0 : d.transform) || {}, v = Number(m.u0 || 0) + Number(_.du || 0), x = Number(m.u1 || 0) + Number(_.du || 0), k = Number(m.v0 || 0) + Number(_.dv || 0), P = Number(m.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((v % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(W(k, 0, 1) * c),
        maxY: Math.ceil(W(P, 0, 1) * c),
        wraps: x - v >= 1 || v < 0 || x > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = pn(i.actionGroupId, "paint"), _ = ye(i.actionGroupId, "paint", m);
      if (!_) return null;
      const v = _.centerUv.u - _.halfW, x = _.centerUv.u + _.halfW, k = _.centerUv.v - _.halfH, P = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((v % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(W(k, 0, 1) * c),
        maxY: Math.ceil(W(P, 0, 1) * c),
        wraps: x - v >= 1 || v < 0 || x > 1
      };
    }
    return null;
  }
  function Sh(i, o, c) {
    if (!i || !o) return !1;
    const u = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: c - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], d = u(i), m = u(o);
    return d.some((_) => m.some((v) => !(_.maxX < v.minX || v.maxX < _.minX || _.maxY < v.minY || v.maxY < _.minY)));
  }
  function Mh(i, o, c) {
    var gt, It, Rt, kt, j, et, bt;
    if (!i || !o || !((gt = c == null ? void 0 : c.surface) != null && gt.canvas) || o.type !== "rasterObject") return i;
    const u = Number(i.width || c.surface.canvas.width || 0), d = Number(i.height || c.surface.canvas.height || 0);
    if (u < 1 || d < 1) return i;
    const m = wh(o, u, d);
    if (m && !Sh(m, c.bounds, u)) return i;
    const _ = String(((It = o.item) == null ? void 0 : It.id) || o.id || ""), v = ((Rt = o.item) == null ? void 0 : Rt.transform) || {}, x = `${c.key}:${_}:${u}:${d}:${Number(v.du || 0).toFixed(6)}:${Number(v.dv || 0).toFixed(6)}:${Number(v.rot_deg || 0).toFixed(3)}:${Number(v.scale || 1).toFixed(4)}`, k = g._liveEraserPreviewCanvasCache instanceof Map ? g._liveEraserPreviewCanvasCache : g._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (k.has(x)) return k.get(x);
    const P = W(Math.floor(Number(((kt = c.bounds) == null ? void 0 : kt.minX) || 0)), 0, Math.max(0, u - 1)), N = W(Math.floor(Number(((j = c.bounds) == null ? void 0 : j.minY) || 0)), 0, Math.max(0, d - 1)), H = W(Math.ceil(Number(((et = c.bounds) == null ? void 0 : et.maxX) || 0)), P, Math.max(0, u - 1)), U = W(Math.ceil(Number(((bt = c.bounds) == null ? void 0 : bt.maxY) || 0)), N, Math.max(0, d - 1)), X = Math.max(1, H - P + 1), z = Math.max(1, U - N + 1), q = ci(u, d, { readback: !0 });
    q.ctx.clearRect(0, 0, u, d), q.ctx.drawImage(i, 0, 0);
    const nt = q.ctx.getImageData(P, N, X, z);
    q.ctx.save(), q.ctx.globalCompositeOperation = "destination-out", q.ctx.drawImage(c.surface.canvas, 0, 0), q.ctx.restore();
    const vt = q.ctx.getImageData(P, N, X, z);
    let rt = !1;
    for (let Nt = 0; Nt < X * z; Nt += 1) {
      const $t = nt.data[Nt * 4 + 3], Ht = vt.data[Nt * 4 + 3];
      if ($t > Ht) {
        rt = !0;
        break;
      }
    }
    return rt ? (k.size > 64 && k.clear(), k.set(x, q.canvas), q.canvas) : (k.set(x, i), i);
  }
  function $c(i, o = null) {
    const c = ht((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), u = (i == null ? void 0 : i.bbox) || null;
    if (!c || !u) return null;
    const d = zc(i, o);
    if (!d || !(d.complete || d.width || d.naturalWidth)) return null;
    const { width: m, height: _ } = _h(), v = (i == null ? void 0 : i.transform) || {}, x = [
      c,
      m,
      _,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
      v.du,
      v.dv,
      v.rot_deg,
      v.scale,
      li()
    ].join(":"), k = Pe.get(x);
    if (k) return k;
    Pe.size > 64 && Pe.clear();
    const P = document.createElement("canvas");
    P.width = m, P.height = _;
    const N = P.getContext("2d");
    if (!N) return null;
    const H = Number(u.u0 || 0) * m, U = Number(u.v0 || 0) * _, X = Math.max(1, (Number(u.u1 || 0) - Number(u.u0 || 0)) * m), z = Math.max(1, (Number(u.v1 || 0) - Number(u.v0 || 0)) * _), q = H + X * 0.5 + Number(v.du || 0) * m, nt = U + z * 0.5 + Number(v.dv || 0) * _, vt = Number(v.rot_deg || 0) * ke, rt = Math.max(0.01, Number(v.scale || 1));
    for (const gt of [-m, 0, m])
      N.save(), N.translate(q + gt, nt), N.rotate(vt), N.scale(rt, rt), N.drawImage(d, -X * 0.5, -z * 0.5, X, z), N.restore();
    return Pe.set(x, P), P;
  }
  function kh() {
    return To(p, {
      selectedId: g.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Nh(i) {
    return bd(
      p,
      (o, c, u) => Hc(u || o),
      { scene: i }
    );
  }
  function jc(i, o, c, u, d = "modal_object_view") {
    if (!i || !o || !c) return !1;
    String((c == null ? void 0 : c.mode) || "");
    const m = !!u && !!u.complete && Number(u.naturalWidth || u.width || 0) > 1 && Number(u.naturalHeight || u.height || 0) > 1;
    if (Yc(o, c))
      return Rh(
        o,
        c,
        m && g.showPanorama ? u : null,
        `${d}_bg_gl`
      );
    const v = qc(), x = Xc(v), k = g.showObjects ? Jc() : Yo([]), N = pu({
      stateRevision: [
        d,
        m ? String(u.currentSrc || u.src || "") : "no_bg",
        m ? Number(u.naturalWidth || u.width || 0) : 0,
        m ? Number(u.naturalHeight || u.height || 0) : 0,
        Array.isArray(x) ? x.map((z) => `${String((z == null ? void 0 : z.assetId) || "")}:${String((z == null ? void 0 : z.revision) || "")}`).join(",") : "none",
        k.length ? k.map((z) => `${String((z == null ? void 0 : z.id) || "")}:${String((z == null ? void 0 : z.revision) || "")}:${Number((z == null ? void 0 : z.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && g.showPanorama ? u : null,
      backgroundRevision: m ? `${d}:bg` : "",
      coverageDeg: Qe(p.coverage),
      scene: v,
      textures: x,
      paintSource: null,
      paintRevision: "",
      rasterEntries: k,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), H = wt;
    if (!H.syncState(N)) return !1;
    const X = H.renderToTarget(`${d}_direct`, c, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return X ? (i.drawImage(X, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function Uo(i, o = "sticker.png") {
    const c = new FormData();
    c.append("image", i), c.append("type", "input"), c.append("subfolder", "panorama_stickers");
    const u = await Ge.fetchApi("/upload/image", { method: "POST", body: c });
    if (!u || u.status !== 200)
      throw new Error(`upload failed (${(u == null ? void 0 : u.status) || "no-response"})`);
    const d = await u.json(), m = String((d == null ? void 0 : d.name) || "").trim();
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
  async function Bo(i, o) {
    const c = await new Promise((v) => i.toBlob(v, "image/png")), u = new FormData();
    u.append("image", c, o), u.append("type", "temp"), u.append("subfolder", "panorama_stickers"), u.append("overwrite", "1");
    const d = await Ge.fetchApi("/upload/image", { method: "POST", body: u });
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
  let Go = null, na = !1;
  function Ph() {
    const i = Xu(p.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const o = p.painting_layer, c = Ar();
    return !o || typeof o != "object" || String(o.revision || "") !== c || i.totalPaintCount > 0 && !o.paint || i.totalMaskCount > 0 && !o.mask;
  }
  function Ko() {
    const i = String(t.id ?? "0"), o = Mi.get(i);
    if (na && o) return o;
    const c = (async () => {
      var m, _, v, x, k, P, N, H, U, X, z, q;
      const u = Ar(), d = Xu(p.painting);
      if (d.totalPaintCount <= 0 && d.totalMaskCount <= 0) {
        p.painting_layer !== null && (p.painting_layer = null, Go = u, xn());
        return;
      }
      if (Go !== u && !na) {
        na = !0;
        try {
          ca();
          const nt = Rn(!1), vt = ((_ = (m = g.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : _.call(m, nt)) || null, rt = ((v = vt == null ? void 0 : vt.displayPaint) == null ? void 0 : v.canvas) || null, gt = ((x = vt == null ? void 0 : vt.committedMask) == null ? void 0 : x.canvas) || null, It = Math.max(1, Number(((k = vt == null ? void 0 : vt.descriptor) == null ? void 0 : k.width) || (rt == null ? void 0 : rt.width) || (gt == null ? void 0 : gt.width) || 2048)), Rt = Math.max(1, Number(((P = vt == null ? void 0 : vt.descriptor) == null ? void 0 : P.height) || (rt == null ? void 0 : rt.height) || (gt == null ? void 0 : gt.height) || 1024));
          (!rt && d.totalPaintCount > 0 || !gt && d.totalMaskCount > 0) && ((!g._paintLayerSyncBlankSurface || Number(((N = g._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== It || Number(((H = g._paintLayerSyncBlankSurface.canvas) == null ? void 0 : H.height) || 0) !== Rt) && (g._paintLayerSyncBlankSurface = ci(It, Rt)), g._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, It, Rt));
          const kt = rt || d.totalPaintCount > 0 && ((U = g._paintLayerSyncBlankSurface) == null ? void 0 : U.canvas) || null, j = gt || d.totalMaskCount > 0 && ((X = g._paintLayerSyncBlankSurface) == null ? void 0 : X.canvas) || null;
          if (!kt && !j) return;
          let et = null, bt = null;
          const Nt = [];
          if (d.totalPaintCount > 0) {
            et = await Bo(kt, `pano_paint_${i}.png`);
            for (const $t of nt) {
              const Ht = String($t || "").trim();
              if (!Ht) continue;
              const Vt = ((q = (z = g.paintEngine) == null ? void 0 : z.getGroupDisplayCanvas) == null ? void 0 : q.call(z, Ht)) || null;
              if (!Vt) continue;
              const Yt = Ht.replace(/[^a-zA-Z0-9_-]+/g, "_"), Bt = await Bo(Vt, `pano_group_${i}_${Yt}.png`);
              Bt && Nt.push({
                id: Ht,
                actionGroupId: Ht,
                image: Bt
              });
            }
          }
          d.totalMaskCount > 0 && (bt = await Bo(j, `pano_mask_${i}.png`)), u === Ar() && (p.painting_layer = {
            paint: et,
            mask: bt,
            groups: Nt,
            revision: u
          }, Go = u, xn());
        } catch (nt) {
          throw nt;
        } finally {
          na = !1;
        }
      }
    })();
    return Mi.set(i, c), c.finally(() => {
      Mi.get(i) === c && Mi.delete(i);
    }), c;
  }
  function ra() {
    const i = o_(t, "pano_input_images", le, () => yt());
    if (i) return i;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((_) => String((_ == null ? void 0 : _.name) || "")) : [], c = o.includes("erp_image"), u = o.includes("bg_erp");
    let d = [];
    return r && (c || u) ? d = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : d = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Qu(t, d, () => yt(), `background:${d.join("|")}`);
  }
  function Uc(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Ch() {
    if (!At.hasPresentedFrame) return "boot";
    let i = !1, o = !1;
    if (g.showPanorama) {
      const c = ra();
      i = !!c && !Uc(c);
    }
    if (g.showObjects) {
      const c = Array.isArray(p.stickers) ? p.stickers : [];
      for (const u of c) {
        if ((u == null ? void 0 : u.visible) === !1) continue;
        const d = Hc(u);
        if (d && !Uc(d)) {
          o = !0;
          break;
        }
      }
    }
    return i && o ? "mixed" : i ? "background" : o ? "stickers" : "";
  }
  function Cr() {
    const i = new Set(
      (p.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(p.assets || {}).forEach((o) => {
      i.has(o) || (delete p.assets[o], le.delete(o));
    });
  }
  function Bc(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(W(i.y, -1, 1))
    };
  }
  function Wo(i, o = null) {
    const { lon: c, lat: u } = Bc(i), d = Jn();
    let m = d.x + (c / (2 * Math.PI) + 0.5) * d.w;
    const _ = d.y + (0.5 - u / Math.PI) * d.h;
    if (o !== null) {
      for (; m - o > d.w / 2; ) m -= d.w;
      for (; m - o < -d.w / 2; ) m += d.w;
    }
    return { x: m, y: _, z: 1 };
  }
  function ia(i) {
    const o = Sn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let c = Dn(0, 1, 0);
    Math.abs(vn(o, c)) > 0.999 && (c = Dn(0, 0, 1));
    const u = Fr(Da(c, o)), d = Fr(Da(o, u)), m = Math.tan(W(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * ke), _ = Math.tan(W(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * ke), v = Number(i.rot_deg || i.roll_deg || 0) * ke, x = Math.cos(v), k = Math.sin(v);
    return {
      centerDir: o,
      right: u,
      up: d,
      tanX: m,
      tanY: _,
      cr: x,
      sr: k
    };
  }
  function Qn(i, o, c) {
    const u = o * i.cr - c * i.sr, d = o * i.sr + c * i.cr;
    return Fr(Ia(Ia(i.centerDir, Ea(i.right, u)), Ea(i.up, d)));
  }
  function Gc(i) {
    const o = ia(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u, v: d }) => Qn(o, u * o.tanX, d * o.tanY));
  }
  function Ah(i, o, c) {
    const u = ia(i), d = (o * 2 - 1) * u.tanX, m = (1 - c * 2) * u.tanY;
    return Qn(u, d, m);
  }
  function Kc(i) {
    const o = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: W((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Ih(i) {
    var x, k, P, N;
    const o = (i == null ? void 0 : i.bbox) || null;
    if (!o) return [];
    const c = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, u = Math.max(0.01, Number(((x = i == null ? void 0 : i.transform) == null ? void 0 : x.scale) || 1)), d = Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.rot_deg) || 0), m = Number(((P = i == null ? void 0 : i.transform) == null ? void 0 : P.du) || 0), _ = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((H) => Zi(Ji(H, c, u, d), m, _));
  }
  function Eh(i) {
    const o = ht((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, u = (i == null ? void 0 : i.bbox) || {}, d = `${o}:${g.mode}:${li()}:${u.u0}:${u.v0}:${u.u1}:${u.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (g.mode === "frame") {
      const m = be();
      return `${d}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}`;
    }
    return `${d}:view:${Math.round(Number(g.viewYaw || 0) * 100)}:${Math.round(Number(g.viewPitch || 0) * 100)}:${Math.round(Number(g.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Dh(i) {
    const o = String((i == null ? void 0 : i.id) || ""), u = [
      Ce(i) ? "sticker" : "item",
      o,
      g.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      _i(i)
    ].join(":");
    if (g.mode === "frame") {
      const d = be();
      return `${u}:frame:${String((d == null ? void 0 : d.id) || "")}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}`;
    }
    return `${u}:view:${Math.round(Number(g.viewYaw || 0) * 100)}:${Math.round(Number(g.viewPitch || 0) * 100)}:${Math.round(Number(g.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Th() {
    var o;
    const i = String(((o = p.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return i === "draft" ? g.hqFrames && g.hqFrames > 0 ? [28, 20] : g.interaction ? [12, 9] : [20, 14] : i === "high" ? g.hqFrames && g.hqFrames > 0 ? [48, 36] : g.interaction ? [20, 14] : [36, 26] : g.hqFrames && g.hqFrames > 0 ? [40, 30] : g.interaction ? [16, 12] : [28, 20];
  }
  function Wc() {
    var i;
    return !!A && !!((i = wt == null ? void 0 : wt.isSupported) != null && i.call(wt));
  }
  function Yc(i, o) {
    return !Wc() || e !== "stickers" && e !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((C == null ? void 0 : C.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((C == null ? void 0 : C.height) || 0));
  }
  function qc() {
    return g.showObjects ? kh() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Xc(i) {
    return !g.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : Nh(i);
  }
  function Zc() {
    var i, o;
    return ((o = (i = g.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : o.call(i)) || null;
  }
  function Lh() {
    return Zc() ? `${el()}:mask_display` : "";
  }
  function Yo(i) {
    if (!g.showMask) return i;
    const o = Zc();
    if (!o) return i;
    const c = Lh(), u = i.reduce((d, m) => Math.max(d, Number((m == null ? void 0 : m.zIndex) || 0)), -1);
    return i.push({
      id: "mask_display",
      source: o,
      revision: c,
      zIndex: u + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function Jc() {
    var u, d;
    const i = ei(!0), o = xh(), c = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const _ = String(m.actionGroupId || m.id || "");
        if (!_) continue;
        const v = ((d = (u = g.paintEngine) == null ? void 0 : u.getGroupDisplayCanvas) == null ? void 0 : d.call(u, _)) || null;
        if (!v) continue;
        c.push({
          id: `paint_group:${_}`,
          source: v,
          revision: `${el()}:${_}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const _ = m.item || null, v = ht((_ == null ? void 0 : _.id) || m.id || "");
        if (!v) continue;
        const x = $c(_, () => yt());
        if (!x) continue;
        const k = Mh(x, m, o), P = (_ == null ? void 0 : _.transform) || {};
        c.push({
          id: `raster:${v}`,
          source: k,
          revision: [
            Ar(),
            (o == null ? void 0 : o.key) || "",
            v,
            Number(P.du || 0).toFixed(6),
            Number(P.dv || 0).toFixed(6),
            Number(P.rot_deg || 0).toFixed(3),
            Number(P.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (_ == null ? void 0 : _.visible) !== !1
        });
      }
    }
    return Yo(c);
  }
  function Oh(i, o = "modal_bg_gl") {
    const c = qc(), u = Xc(c), d = !!i && !!i.complete && Number(i.naturalWidth || i.width || 0) > 1 && Number(i.naturalHeight || i.height || 0) > 1, m = d ? [
      String(i.currentSrc || i.src || ""),
      Number(i.naturalWidth || i.width || 0),
      Number(i.naturalHeight || i.height || 0)
    ].join("|") : "none", _ = g.showObjects ? Jc() : Yo([]), v = null, x = [
      o,
      m,
      Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((k) => String((k == null ? void 0 : k.id) || "")).join(",") : "none",
      Array.isArray(u) ? u.map((k) => `${String((k == null ? void 0 : k.assetId) || "")}:${String((k == null ? void 0 : k.revision) || "")}`).join(",") : "none",
      _.length ? _.map((k) => `${String((k == null ? void 0 : k.id) || "")}:${String((k == null ? void 0 : k.revision) || "")}:${Number((k == null ? void 0 : k.zIndex) || 0)}`).join(",") : "paint:none",
      g.showPanorama ? "panorama:1" : "panorama:0",
      g.showObjects ? "objects:1" : "objects:0",
      g.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: pu({
        stateRevision: x,
        backgroundSource: d ? i : null,
        backgroundRevision: d ? `${o}:${m}` : "",
        coverageDeg: Qe(p.coverage),
        scene: c,
        textures: u,
        paintSource: v,
        paintRevision: "",
        rasterEntries: _,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: d || u.length > 0 || _.length > 0
    };
  }
  function qo() {
    if (!A) return;
    const i = A.getContext("webgl2");
    if (i)
      i.viewport(0, 0, A.width, A.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const o = A.getContext("2d");
      o && (o.clearRect(0, 0, A.width, A.height), o.fillStyle = "#070707", o.fillRect(0, 0, A.width, A.height));
    }
    At.backgroundWasVisible = !1, At.backgroundDirty = !1;
  }
  function Rh(i, o, c, u = "modal_bg_gl") {
    var k;
    if (!Yc(i, o)) return !1;
    if (!At.backgroundDirty && At.backgroundWasVisible) return !0;
    const { descriptor: d, hasContent: m } = Oh(c, u);
    if (!m || !wt.syncState(d))
      return qo(), !1;
    const v = wt.renderToTarget("modal_pano", o, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), x = (k = A == null ? void 0 : A.getContext) == null ? void 0 : k.call(A, "2d");
    return !v || !x ? (qo(), !1) : (x.clearRect(0, 0, A.width, A.height), x.drawImage(v, 0, 0, A.width, A.height), At.backgroundWasVisible = !0, At.backgroundDirty = !1, !0);
  }
  function Fh(i = !1) {
    const o = C.width, c = C.height, u = Jn();
    if (T.globalAlpha = 1, T.lineWidth = 1, i || (T.fillStyle = "#070707", T.fillRect(0, 0, o, c), T.fillStyle = "#070707", T.fillRect(u.x, u.y, u.w, u.h)), ca(), jc(
      T,
      { x: u.x, y: u.y, w: u.w, h: u.h },
      { mode: "unwrap" },
      ra(),
      "modal_unwrap"
    ), g.showGrid && !g.fullscreen) {
      T.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const _ = u.x + u.w * m / 16;
        T.beginPath(), T.moveTo(_, u.y), T.lineTo(_, u.y + u.h), T.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const _ = u.y + u.h * m / 8;
        T.beginPath(), T.moveTo(u.x, _), T.lineTo(u.x + u.w, _), T.stroke();
      }
      T.strokeStyle = "rgba(250, 250, 250, 0.86)", T.lineWidth = 1.2, T.beginPath(), T.moveTo(u.x, u.y + u.h / 2), T.lineTo(u.x + u.w, u.y + u.h / 2), T.stroke(), T.fillStyle = "rgba(250, 250, 250, 0.42)", T.font = "500 11px Geist, sans-serif", T.textAlign = "center";
      const d = u.y + u.h * 0.57;
      T.fillText("Left", u.x + u.w * 0.25, d), T.fillText("Front", u.x + u.w * 0.5, d), T.fillText("Right", u.x + u.w * 0.75, d), T.fillText("Back", u.x + 38, d), T.fillText("Back", u.x + u.w - 38, d);
    }
  }
  function Qc(i, o, c = 1) {
    let u = !1;
    T.strokeStyle = o, T.lineWidth = c, T.beginPath();
    for (const d of i) {
      const m = oi(d);
      if (!m) {
        u = !1;
        continue;
      }
      u ? T.lineTo(m.x, m.y) : (T.moveTo(m.x, m.y), u = !0);
    }
    T.stroke();
  }
  function Vh(i = !1) {
    const o = C.width, c = C.height;
    if (i || (Wc() ? T.clearRect(0, 0, o, c) : (T.fillStyle = "#070707", T.fillRect(0, 0, o, c))), ca(), jc(
      T,
      { x: 0, y: 0, w: o, h: c },
      {
        mode: "panorama",
        yawDeg: g.viewYaw,
        pitchDeg: g.viewPitch,
        fovDeg: g.viewFov,
        coverageDeg: Qe(p.coverage)
      },
      ra(),
      "modal_pano"
    ), g.showGrid && !g.fullscreen) {
      for (let d = -180; d <= 180; d += 15) {
        const m = [];
        for (let _ = -89; _ <= 89; _ += 4) m.push(Sn(d, _));
        Qc(m, "#3f3f46", d % 90 === 0 ? 1.3 : 1);
      }
      for (let d = -75; d <= 75; d += 15) {
        const m = [];
        for (let _ = -180; _ <= 180; _ += 4) m.push(Sn(_, d));
        Qc(m, d === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", d === 0 ? 1.5 : 1);
      }
      const u = [
        { name: "Left", dir: Sn(-90, 0) },
        { name: "Front", dir: Sn(0, 0) },
        { name: "Right", dir: Sn(90, 0) },
        { name: "Back", dir: Sn(180, 0) }
      ];
      T.fillStyle = "rgba(250, 250, 250, 0.42)", T.font = "500 11px Geist, sans-serif", T.textAlign = "center", u.forEach((d) => {
        const m = oi(d.dir);
        m && T.fillText(d.name, m.x, m.y + 24);
      });
    }
  }
  function Hh(i, o = null, c = null, u = null) {
    if (g.mode === "frame") {
      const d = o || be();
      if (!d) return [];
      const m = c || ui(d);
      return hp(i, d, m);
    }
    return ol(i, u);
  }
  function aa(i, o = null, c = null, u = null, d = null) {
    if (!i) return null;
    if (g.mode === "unwrap") {
      const _ = ol([i], d);
      return _[0] ? { x: _[0].x, y: _[0].y, z: 1 } : null;
    }
    const m = sa(i);
    return m ? Fn(m, o, c, u) : null;
  }
  function zh(i, o) {
    const c = String(i.actionGroupId || i.id || "").trim(), u = pn(c, i.layerKind), d = ye(c, i.layerKind, u), m = (d == null ? void 0 : d.centerUv) || Ro(c, i.layerKind, u), _ = g.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, v = [], x = g.mode === "frame" ? be() : null, k = x ? ui(x) : null;
    for (const rt of u) {
      const gt = (rt == null ? void 0 : rt.geometry) || null, It = (gt == null ? void 0 : gt.geometryKind) === "lasso_fill" ? gt == null ? void 0 : gt.points : (gt == null ? void 0 : gt.processedPoints) || (gt == null ? void 0 : gt.rawPoints) || (gt == null ? void 0 : gt.points) || [], Rt = Hh(It, x, k, _).filter((et) => Number.isFinite(et == null ? void 0 : et.x) && Number.isFinite(et == null ? void 0 : et.y));
      if (!Rt.length) continue;
      const kt = tr(String((rt == null ? void 0 : rt.toolKind) || "pen")), j = Ze[kt] || Ze[$n];
      v.push({
        points: Rt,
        closed: String((gt == null ? void 0 : gt.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((rt == null ? void 0 : rt.size) || 10) * Math.max(0.1, Number((j == null ? void 0 : j.sizeScale) ?? 1)) + 10),
        layerKind: String((rt == null ? void 0 : rt.layerKind) || i.layerKind || "paint")
      });
    }
    const P = aa(m, null, x, k, _);
    if (!P) {
      const rt = { visible: !1, kind: "strokeGroup" };
      return g._strokeGeomCache.set(o, rt), rt;
    }
    const H = Tt(d).map((rt) => aa(rt, P.x, x, k, _)).filter((rt) => Number.isFinite(rt == null ? void 0 : rt.x) && Number.isFinite(rt == null ? void 0 : rt.y)).map((rt) => ({ x: Number(rt.x || 0), y: Number(rt.y || 0) }));
    if (H.length < 4) {
      const rt = { visible: !1, kind: "strokeGroup" };
      return g._strokeGeomCache.set(o, rt), rt;
    }
    const U = (rt, gt) => ({
      x: (Number((rt == null ? void 0 : rt.x) || 0) + Number((gt == null ? void 0 : gt.x) || 0)) * 0.5,
      y: (Number((rt == null ? void 0 : rt.y) || 0) + Number((gt == null ? void 0 : gt.y) || 0)) * 0.5,
      a: rt,
      b: gt
    }), X = U(H[0], H[1]), z = U(H[1], H[2]), q = U(H[2], H[3]), nt = U(H[3], H[0]), vt = {
      kind: "strokeGroup",
      center: { x: Number(P.x || 0), y: Number(P.y || 0) },
      corners: H,
      edgeMidpoints: [
        { edge: "top", ...X },
        { edge: "right", ...z },
        { edge: "bottom", ...q },
        { edge: "left", ...nt }
      ],
      rotateStemBase: { x: X.x, y: X.y },
      rotateHandle: { x: X.x, y: X.y - 30 },
      strokePaths: v,
      visible: !0
    };
    return g._strokeGeomCache.set(o, vt), vt;
  }
  function $h(i, o) {
    const c = g.mode === "frame" ? be() : null, u = c ? ui(c) : null, d = Kc(i), m = g.mode === "unwrap" ? Number((d == null ? void 0 : d.u) || 0) : null, _ = aa(d, null, c, u, m), x = Ih(i).map((H) => aa(H, (_ == null ? void 0 : _.x) ?? null, c, u, m)).filter((H) => Number.isFinite(H == null ? void 0 : H.x) && Number.isFinite(H == null ? void 0 : H.y));
    if (!Array.isArray(x) || x.length < 4) {
      const H = { visible: !1, kind: "rasterObject" };
      return g._strokeGeomCache.set(o, H), H;
    }
    const k = x.slice(0, 4).map((H) => ({ x: Number((H == null ? void 0 : H.x) || 0), y: Number((H == null ? void 0 : H.y) || 0) })), N = {
      kind: "rasterObject",
      center: {
        x: k.reduce((H, U) => H + Number(U.x || 0), 0) / k.length,
        y: k.reduce((H, U) => H + Number(U.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return g._strokeGeomCache.set(o, N), N;
  }
  function Fn(i, o = null, c = null, u = null) {
    if (g.mode === "frame") {
      const vt = c || be(), rt = u || ui(vt), gt = vt ? al(vt, i) : null;
      return gt ? {
        x: Number(rt.x || 0) + Number(gt.x || 0) * Number(rt.w || 0),
        y: Number(rt.y || 0) + Number(gt.y || 0) * Number(rt.h || 0),
        z: 1
      } : null;
    }
    if (g.mode === "unwrap") return Wo(i, o);
    const { right: d, up: m, fwd: _ } = $o(), v = vn(i, d), x = vn(i, m), k = vn(i, _), P = C.width, N = C.height, H = g.viewFov * ke, U = 2 * Math.atan(Math.tan(H / 2) * (N / Math.max(P, 1))), X = P / 2 / Math.tan(H / 2), z = N / 2 / Math.tan(U / 2), q = Math.max(k, 1e-4), nt = Math.max(P, N) * 2;
    return {
      x: W(P / 2 + v / q * X, -nt, P + nt),
      y: W(N / 2 - x / q * z, -nt, N + nt),
      z: q
    };
  }
  function jh(i) {
    const o = Sn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), c = g.mode === "frame" ? be() : null, u = c ? ui(c) : null, d = Fn(o, null, c, u);
    if (!d) return { visible: !1 };
    const m = ia(i), v = Gc(i).map((It) => Fn(It, d.x, c, u)), x = Qn(m, 0, m.tanY), k = Qn(m, 0, m.tanY + Math.max(m.tanY * 0.43, 0.053)), P = Fn(x, d.x, c, u), N = Fn(k, (P == null ? void 0 : P.x) ?? d.x, c, u), H = ((N == null ? void 0 : N.x) ?? P.x) - P.x, U = ((N == null ? void 0 : N.y) ?? P.y) - P.y, X = Math.hypot(H, U) || 1, z = {
      x: P.x + H / X * 30,
      y: P.y + U / X * 30
    }, q = Fn(Qn(m, 0, m.tanY), d.x, c, u), nt = Fn(Qn(m, m.tanX, 0), d.x, c, u), vt = Fn(Qn(m, 0, -m.tanY), d.x, c, u), rt = Fn(Qn(m, -m.tanX, 0), d.x, c, u), gt = [
      {
        edge: "top",
        x: q.x,
        y: q.y,
        a: { x: v[0].x, y: v[0].y },
        b: { x: v[1].x, y: v[1].y }
      },
      {
        edge: "right",
        x: nt.x,
        y: nt.y,
        a: { x: v[1].x, y: v[1].y },
        b: { x: v[2].x, y: v[2].y }
      },
      {
        edge: "bottom",
        x: vt.x,
        y: vt.y,
        a: { x: v[2].x, y: v[2].y },
        b: { x: v[3].x, y: v[3].y }
      },
      {
        edge: "left",
        x: rt.x,
        y: rt.y,
        a: { x: v[3].x, y: v[3].y },
        b: { x: v[0].x, y: v[0].y }
      }
    ];
    return {
      center: { x: d.x, y: d.y },
      corners: v.map((It) => ({ x: It.x, y: It.y })),
      edgeMidpoints: gt,
      rotateStemBase: { x: P.x, y: P.y },
      rotateHandle: z,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function nn(i) {
    if (ve(i)) {
      const d = String(i.actionGroupId || i.id || "").trim(), m = qd(d, i.layerKind), _ = g._strokeGeomCache.get(m);
      return _ || (g._strokeGeomCache.size > 256 && g._strokeGeomCache.clear(), zh(i, m));
    }
    if (Ae(i)) {
      const d = Eh(i), m = g._strokeGeomCache.get(d);
      return m || (g._strokeGeomCache.size > 256 && g._strokeGeomCache.clear(), $h(i, d));
    }
    const o = Dh(i), c = g._strokeGeomCache.get(o);
    if (c) return c;
    g._strokeGeomCache.size > 256 && g._strokeGeomCache.clear();
    const u = jh(i);
    return g._strokeGeomCache.set(o, u), u;
  }
  function oa(i, o, c, u = null) {
    const d = [];
    for (let m = 0; m <= c; m += 1) {
      const _ = m / c;
      let v = 0, x = 0;
      o === 0 ? (v = _, x = 0) : o === 1 ? (v = 1, x = _) : o === 2 ? (v = 1 - _, x = 1) : (v = 0, x = 1 - _);
      const k = Ah(i, v, x), P = g.mode === "unwrap" ? Wo(k, u) : oi(k);
      P && d.push(P);
    }
    return d;
  }
  function Uh(i, o) {
    const c = Sn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), u = g.mode === "unwrap" ? Wo(c) : null, d = u ? u.x : null, m = g.mode === "pano" ? 28 : 20, _ = [
      oa(i, 0, m, d),
      oa(i, 1, m, d),
      oa(i, 2, m, d),
      oa(i, 3, m, d)
    ];
    T.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", T.lineWidth = o ? 2 : 1, T.beginPath();
    let v = !1;
    for (const x of _)
      for (const k of x)
        v ? T.lineTo(k.x, k.y) : (T.moveTo(k.x, k.y), v = !0);
    T.closePath(), T.stroke();
  }
  function Bh() {
    return [...Array.isArray(p.stickers) ? p.stickers : []].sort((o, c) => Number(o.z_index || 0) - Number(c.z_index || 0));
  }
  function tl() {
    return [...Array.isArray(p.stickers) ? p.stickers : []].sort((o, c) => Number(c.z_index || 0) - Number(o.z_index || 0));
  }
  function Xo(i, o = []) {
    if (!(!i || !Array.isArray(o) || o.length < 4)) {
      i.beginPath(), i.moveTo(o[0].x, o[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(o[c].x, o[c].y);
      i.closePath();
    }
  }
  function Gh(i, o, c, u) {
    if (Ce(i)) {
      const d = T.globalAlpha;
      T.globalAlpha = nh(i), g.mode === "frame" ? (T.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : u ? "rgba(255, 89, 89, 0.72)" : "#71717a", T.lineWidth = c ? 2 : 1, Xo(T, o.corners), T.stroke()) : Uh(i, c), T.globalAlpha = d;
      return;
    }
    T.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : u ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Xo(T, o.corners), T.fill(), T.strokeStyle = c ? "rgba(255, 255, 255, 1)" : u ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", T.lineWidth = c ? 2.8 : 1.9, Xo(T, o.corners), T.stroke();
  }
  function Kh(i, o, c) {
    T.fillStyle = c, o.corners.forEach((u) => {
      T.beginPath(), T.arc(u.x, u.y, 6.5, 0, Math.PI * 2), T.fill();
    }), ve(i) || (T.strokeStyle = "rgba(250, 250, 250, 0.9)", T.lineWidth = 1.8, T.beginPath(), T.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), T.lineTo(o.rotateHandle.x, o.rotateHandle.y), T.stroke(), T.fillStyle = c, T.beginPath(), T.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), T.fill());
  }
  function Wh() {
    var v;
    const [i, o] = Th(), c = gn(), u = c.length > 1, d = e === "cutout" ? Bh() : J(), m = d.map((x) => `${String((x == null ? void 0 : x.id) || "")}:${Number((x == null ? void 0 : x.z_index) || 0)}`).join("|");
    (!g._sortedItemsCache || g._sortedItemsCache.src !== d || g._sortedItemsCache.orderKey !== m) && (g._sortedItemsCache = {
      src: d,
      orderKey: m,
      sorted: [...d]
    });
    const _ = g._sortedItemsCache.sorted;
    for (const x of _) {
      const k = !u && Zd(x);
      if (g.mode === "frame" && !k || !g.showObjects) continue;
      const P = Ce(x), N = Zn(x);
      if (!P)
        continue;
      const H = nn(x);
      if (!(e !== "stickers" && !H.visible) && (Gh(x, H, k, N), k && H.visible)) {
        const U = N ? "#ff4d4f" : P && Se(x) ? "#f59e0b" : "#0070f3";
        Kh(x, H, U);
      }
    }
    if (u) {
      const x = Fo(c);
      if (x != null && x.visible) {
        const k = Vo(c) ? "#ff4d4f" : "#0070f3";
        T.save(), T.strokeStyle = "rgba(255, 255, 255, 0.95)", T.lineWidth = 2, T.setLineDash([6, 4]), T.beginPath(), T.moveTo(x.corners[0].x, x.corners[0].y);
        for (let P = 1; P < x.corners.length; P += 1) T.lineTo(x.corners[P].x, x.corners[P].y);
        T.closePath(), T.stroke(), T.setLineDash([]), T.fillStyle = k, x.corners.forEach((P) => {
          T.beginPath(), T.arc(P.x, P.y, 6.5, 0, Math.PI * 2), T.fill();
        }), T.restore();
      }
    } else
      c.forEach((x) => {
        if (!ve(x) && !Ae(x)) return;
        const k = nn(x);
        if (!(k != null && k.visible)) return;
        const P = Zn(x) ? "#ff4d4f" : "#0070f3";
        T.save(), T.strokeStyle = "rgba(255, 255, 255, 0.95)", T.lineWidth = 2, T.setLineDash([6, 4]), T.beginPath(), T.moveTo(k.corners[0].x, k.corners[0].y);
        for (let N = 1; N < k.corners.length; N += 1) T.lineTo(k.corners[N].x, k.corners[N].y);
        T.closePath(), T.stroke(), T.setLineDash([]), T.fillStyle = P, k.corners.forEach((N) => {
          T.beginPath(), T.arc(N.x, N.y, 6.5, 0, Math.PI * 2), T.fill();
        }), T.restore();
      });
    if (((v = g.interaction) == null ? void 0 : v.kind) === "marquee_select") {
      const x = _l(g.interaction.start, g.interaction.current);
      T.save(), T.strokeStyle = "rgba(255, 255, 255, 0.9)", T.fillStyle = "rgba(255, 255, 255, 0.08)", T.lineWidth = 1, T.setLineDash([5, 4]), T.beginPath(), T.rect(x.x0, x.y0, x.x1 - x.x0, x.y1 - x.y0), T.fill(), T.stroke(), T.restore();
    }
    g.hqFrames && i >= 40 && o >= 30 && (g.hqFrames -= 1, g.hqFrames > 0 && yt());
  }
  function sa(i) {
    if (!i) return null;
    const o = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, u = Math.cos(c);
    return Dn(u * Math.sin(o), Math.sin(c), u * Math.cos(o));
  }
  function Yh(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function qh(i, o, c, u = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Ie(i, "widthScale", 1),
      pressureLike: Ie(i, "pressureLike", 1)
    }, ...u, u: o, v: c };
  }
  function Xh(i, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function Zo(i, o, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const u = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", d = /* @__PURE__ */ new WeakMap();
    if (u) {
      let z = null;
      i.forEach((q) => {
        const nt = Number((q == null ? void 0 : q.u) || 0), vt = Number((q == null ? void 0 : q.v) || 0), rt = (nt % 1 + 1) % 1, gt = z == null ? rt : z + ln(rt, (z % 1 + 1) % 1);
        d.set(q, { x: gt, y: vt }), z = gt;
      });
    }
    const m = (z) => !z || typeof z != "object" ? { x: 0, y: 0 } : d.get(z) || Yh(z), _ = (z, q, nt, vt = {}) => {
      const rt = u ? (Number(q) % 1 + 1) % 1 : Number(q), gt = qh(z, rt, nt, vt);
      return d.set(gt, { x: Number(q), y: Number(nt) }), gt;
    }, v = (z, q, nt) => {
      const vt = m(z), rt = m(q);
      return _(z, jn(vt.x, rt.x, nt), jn(vt.y, rt.y, nt), {
        t: jn(Number((z == null ? void 0 : z.t) || 0), Number((q == null ? void 0 : q.t) || 0), nt),
        widthScale: jn(Ie(z, "widthScale", 1), Ie(q, "widthScale", 1), nt),
        pressureLike: jn(Ie(z, "pressureLike", 1), Ie(q, "pressureLike", 1), nt)
      });
    };
    if (i.length === 1) {
      const z = m(i[0]);
      return [_(i[0], z.x, z.y)];
    }
    const x = Xh(o, c), k = (z, q) => {
      const nt = [0];
      for (let et = 1; et < z.length; et += 1) {
        const bt = m(z[et - 1]), Nt = m(z[et]);
        nt.push(nt[et - 1] + Math.hypot(Nt.x - bt.x, Nt.y - bt.y));
      }
      const vt = nt[nt.length - 1] || 0;
      if (vt <= 1e-8) {
        const et = z[0], bt = m(et);
        return [_(et, bt.x, bt.y)];
      }
      const rt = [];
      let gt = 0;
      for (let et = 0; et <= vt + 1e-9; et += q) {
        for (; gt < nt.length - 2 && nt[gt + 1] < et; ) gt += 1;
        const bt = nt[gt], Nt = nt[gt + 1], $t = Math.max(1e-8, Nt - bt);
        rt.push(v(z[gt], z[gt + 1], W((et - bt) / $t, 0, 1)));
      }
      const It = z[z.length - 1], Rt = m(It), kt = rt[rt.length - 1], j = kt ? m(kt) : null;
      return (!j || Math.hypot(j.x - Rt.x, j.y - Rt.y) > q * 0.35) && rt.push(_(It, Rt.x, Rt.y)), rt;
    }, P = (z) => {
      if (!Array.isArray(z) || z.length < 3) return z ? z.slice() : [];
      const q = m(z[0]), nt = [_(z[0], q.x, q.y)];
      for (let gt = 0; gt < z.length - 1; gt += 1) {
        const It = z[gt], Rt = z[gt + 1], kt = m(It), j = m(Rt), et = _(
          It,
          kt.x * 0.75 + j.x * 0.25,
          kt.y * 0.75 + j.y * 0.25,
          {
            t: Number(It.t || 0) * 0.75 + Number(Rt.t || 0) * 0.25,
            widthScale: Ie(It, "widthScale", 1) * 0.75 + Ie(Rt, "widthScale", 1) * 0.25,
            pressureLike: Ie(It, "pressureLike", 1) * 0.75 + Ie(Rt, "pressureLike", 1) * 0.25
          }
        ), bt = _(
          It,
          kt.x * 0.25 + j.x * 0.75,
          kt.y * 0.25 + j.y * 0.75,
          {
            t: Number(It.t || 0) * 0.25 + Number(Rt.t || 0) * 0.75,
            widthScale: Ie(It, "widthScale", 1) * 0.25 + Ie(Rt, "widthScale", 1) * 0.75,
            pressureLike: Ie(It, "pressureLike", 1) * 0.25 + Ie(Rt, "pressureLike", 1) * 0.75
          }
        );
        nt.push(et, bt);
      }
      const vt = z[z.length - 1], rt = m(vt);
      return nt.push(_(vt, rt.x, rt.y)), nt;
    }, N = k(i, x);
    if (N.length < 3) return N;
    const H = c ? 2 : 1;
    let U = N.slice();
    for (let z = 0; z < H; z += 1) U = P(U);
    return k(U, Math.max(x * 0.75, 55e-5));
  }
  function Ie(i, o, c = 1) {
    const u = Number(i == null ? void 0 : i[o]);
    return Number.isFinite(u) ? Math.max(0, u) : c;
  }
  function Zh(i) {
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
  function ci(i, o, c = {}) {
    const u = document.createElement("canvas");
    u.width = Math.max(1, Math.round(i)), u.height = Math.max(1, Math.round(o));
    const d = u.getContext("2d", c.readback ? { willReadFrequently: !0 } : void 0);
    return d && (d.clearRect(0, 0, u.width, u.height), d.imageSmoothingEnabled = !0), { canvas: u, ctx: d };
  }
  function li() {
    const i = la();
    return `${String(g.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Ar() {
    const i = la();
    return `${String(g.paintStrokeRevision)}:${String(g.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function el() {
    const i = Lo(), o = Ar();
    return i ? `${o}:${i}` : o;
  }
  function Jh() {
    g.paintStrokeRevision += 1, g.paintCompositeRevision += 1;
  }
  function Qh() {
    g.paintCompositeRevision += 1;
  }
  function tp() {
    g._sortedItemsCache = null, g._strokeGeomCache.clear();
  }
  function nl() {
    var i, o;
    g.paintEngineRevisionKey = null, (o = (i = g.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || o.call(i, p), g.paintEngineRevisionKey = li();
  }
  function rn() {
    g.objectVisualRevision = Number(g.objectVisualRevision || 0) + 1, tp(), At.backgroundDirty = !0, At.dirty = !0;
  }
  function mn({ rebuildPaintEngine: i = !1 } = {}) {
    Jh(), rn(), i && nl();
  }
  function Ir() {
    Qh(), rn();
  }
  function ca() {
    var u;
    const i = la(), o = `${i.width}x${i.height}`;
    g.paintEngineDescriptorKey !== o && (g.paintEngine = Us(i), g.paintEngineDescriptorKey = o, g.paintEngineRevisionKey = "");
    const c = li();
    g.paintEngineRevisionKey !== c && (g.paintEngineRevisionKey = c, (u = g.paintEngine) == null || u.rebuildCommitted(p));
  }
  function la() {
    const i = Math.max(1, Number((p == null ? void 0 : p.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function Vn() {
    return la();
  }
  function ep(i, o, c, u, d = null) {
    const m = Zh(i), _ = Ie(o, "widthScale", 1) * Ie(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * _) : m.model === "world_angle" ? d ? Math.max(0.5, m.value / Math.max(1e-6, Number(d.hFOV_deg || 90) * ke) * c * _) : Math.max(0.5, m.value / (2 * Math.PI) * c * _) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * _);
  }
  function np(i, o, c = {}) {
    const u = String((o == null ? void 0 : o.layerKind) || "paint"), d = String((o == null ? void 0 : o.toolKind) || "pen"), m = c.preview === !0, _ = m ? 0.78 : 1;
    if (i.globalAlpha = d === "marker" ? 0.7 * _ : 1, u === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (d === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const v = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = m ? Math.max(0.28, Number(v.a ?? 1) * 0.88) : Math.max(0.12, Number(v.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(v.r || 0) * 255)}, ${Math.round(Number(v.g || 0) * 255)}, ${Math.round(Number(v.b || 0) * 255)}, ${x})`;
  }
  function rp(i, o, c) {
    const u = Math.max(0.5, Math.min(c, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(u) || (i.beginPath(), i.arc(Number(o.x || 0), Number(o.y || 0), u, 0, Math.PI * 2), i.fill());
  }
  function ip(i, o, c, u, d = {}) {
    if (!i || !Array.isArray(o) || !o.length) return;
    const m = Math.max(u.w, u.h) * 0.25;
    i.save(), np(i, c, d);
    const _ = (v) => rp(i, v, m);
    if (o.length === 1) {
      _(o[0]), i.restore();
      return;
    }
    for (let v = 0; v < o.length - 1; v += 1) {
      const x = o[v], k = o[v + 1];
      if (!x || !k) continue;
      const P = Number(x.x || 0), N = Number(x.y || 0), H = Number(k.x || 0), U = Number(k.y || 0), X = Math.max(0.5, Math.min(m, Number(x.radiusPx || 0.5))), z = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5)));
      if (!Number.isFinite(P) || !Number.isFinite(N) || !Number.isFinite(H) || !Number.isFinite(U) || !Number.isFinite(X) || !Number.isFinite(z)) continue;
      const q = H - P, nt = U - N, vt = Math.hypot(q, nt);
      if (!Number.isFinite(vt) || vt < 1e-6) {
        _(x);
        continue;
      }
      if (vt > Math.max(u.w, u.h) * 0.5) continue;
      const rt = Math.max(0.5, Math.min(X, z)), gt = Math.max(0.35, Math.min(rt * 0.4, 2.25)), It = Math.max(1, Math.ceil(vt / gt));
      for (let Rt = 0; Rt <= It; Rt += 1) {
        const kt = Rt / It;
        _({
          x: jn(P, H, kt),
          y: jn(N, U, kt),
          radiusPx: jn(X, z, kt)
        });
      }
    }
    _(o[o.length - 1]), i.restore();
  }
  function ap(i, o, c, u) {
    ip(i, o, c, u, { preview: !1 });
  }
  function op(i, o, c, u, d) {
    var v, x, k, P;
    if (!i || !Array.isArray(o) || o.length < 3) return;
    const m = "u", _ = "v";
    if (i.save(), String((c == null ? void 0 : c.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((c == null ? void 0 : c.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const N = (c == null ? void 0 : c.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(N.r || 0) * 255)}, ${Math.round(Number(N.g || 0) * 255)}, ${Math.round(Number(N.b || 0) * 255)}, ${Number(N.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((v = o[0]) == null ? void 0 : v[m]) || 0) * u.w, Number(((x = o[0]) == null ? void 0 : x[_]) || 0) * u.h);
    for (let N = 1; N < o.length; N += 1)
      i.lineTo(Number(((k = o[N]) == null ? void 0 : k[m]) || 0) * u.w, Number(((P = o[N]) == null ? void 0 : P[_]) || 0) * u.h);
    i.closePath(), i.fill(), i.restore();
  }
  function rl(i) {
    const o = (i == null ? void 0 : i.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function sp(i, o) {
    const c = rl(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((u) => ({
      x: Number((u == null ? void 0 : u.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((u == null ? void 0 : u.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: ep(i, u, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function il(i, o, c = null) {
    var v, x, k, P;
    if (!(i != null && i.ctx) || !o) return !1;
    const u = c || { w: Number(((v = i.canvas) == null ? void 0 : v.width) || 0), h: Number(((x = i.canvas) == null ? void 0 : x.height) || 0) }, d = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((k = o == null ? void 0 : o.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((P = o == null ? void 0 : o.geometry) == null ? void 0 : P.geometryKind) || "") === "lasso_fill")
      return op(i.ctx, rl(d), d, u), !0;
    const _ = sp(d, u);
    return _.length ? (ap(i.ctx, _, d, u), !0) : !1;
  }
  function cp(i, o, c, u = 8) {
    const d = new Uint8Array(o * c), m = [], _ = new Int32Array(o * c), v = new Int32Array(o * c);
    for (let x = 0; x < c; x += 1)
      for (let k = 0; k < o; k += 1) {
        const P = x * o + k;
        if (d[P] || i[P] <= u) continue;
        let N = 0, H = 0;
        _[H] = k, v[H] = x, H += 1, d[P] = 1;
        const U = [];
        let X = k, z = x, q = k, nt = x;
        for (; N < H; ) {
          const vt = _[N], rt = v[N];
          N += 1, U.push({ x: vt, y: rt }), vt < X && (X = vt), rt < z && (z = rt), vt > q && (q = vt), rt > nt && (nt = rt);
          const gt = [
            [(vt - 1 + o) % o, rt],
            [(vt + 1) % o, rt],
            [vt, rt - 1],
            [vt, rt + 1]
          ];
          for (const [It, Rt] of gt) {
            if (Rt < 0 || Rt >= c) continue;
            const kt = Rt * o + It;
            d[kt] || i[kt] <= u || (d[kt] = 1, _[H] = It, v[H] = Rt, H += 1);
          }
        }
        m.push({ pixels: U, minX: X, minY: z, maxX: q, maxY: nt });
      }
    return m;
  }
  function lp(i, o) {
    const c = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, k) => x - k);
    if (!c.length) return null;
    if (c.length === 1)
      return { startX: c[0], widthPx: 1 };
    let u = -1, d = 0;
    for (let x = 0; x < c.length; x += 1) {
      const k = c[x], N = (x === c.length - 1 ? c[0] + o : c[x + 1]) - k - 1;
      N > u && (u = N, d = x);
    }
    const m = (c[(d + 1) % c.length] + o) % o;
    let _ = 1 / 0, v = -1 / 0;
    for (const x of c) {
      const k = (x - m + o) % o;
      _ = Math.min(_, k), v = Math.max(v, k);
    }
    return {
      startX: m,
      widthPx: Math.max(1, v - _ + 1)
    };
  }
  function up(i, o, c = {}) {
    var k;
    const u = Number((i == null ? void 0 : i.width) || 0), d = Number((i == null ? void 0 : i.height) || 0), m = (k = i == null ? void 0 : i.getContext) == null ? void 0 : k.call(i, "2d");
    if (!m || u < 1 || d < 1) return [];
    const _ = m.getImageData(0, 0, u, d), v = new Uint8Array(u * d);
    for (let P = 0; P < v.length; P += 1) v[P] = _.data[P * 4 + 3];
    return cp(v, u, d, 8).map((P, N) => {
      const H = lp(P, u);
      if (!H) return null;
      const U = Number(H.widthPx || 0), X = P.maxY - P.minY + 1, z = Number(H.startX || 0), q = document.createElement("canvas");
      q.width = U, q.height = X;
      const nt = q.getContext("2d");
      if (!nt) return null;
      const vt = nt.createImageData(U, X);
      return P.pixels.forEach(({ x: rt, y: gt }) => {
        const It = (gt * u + rt) * 4, Rt = (Number(rt || 0) - z + u) % u, kt = ((gt - P.minY) * U + Rt) * 4;
        vt.data[kt + 0] = _.data[It + 0], vt.data[kt + 1] = _.data[It + 1], vt.data[kt + 2] = _.data[It + 2], vt.data[kt + 3] = _.data[It + 3];
      }), nt.putImageData(vt, 0, 0), {
        id: Vr("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + N * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: 0,
          v0: P.minY / d,
          u1: U / u,
          v1: (P.maxY + 1) / d
        },
        rasterDataUrl: q.toDataURL("image/png"),
        transform: {
          du: z / u,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function al(i, o) {
    if (!i || !o) return null;
    const c = ia(i), u = vn(o, c.centerDir);
    if (!Number.isFinite(u) || u <= 1e-6) return null;
    const d = vn(o, c.right) / u, m = vn(o, c.up) / u, _ = d * c.cr + m * c.sr, v = -d * c.sr + m * c.cr;
    return {
      x: (_ / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - v / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function fp(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (g.mode === "unwrap") {
      const c = Jn();
      return i.map((u) => ({
        x: c.x + Number(u.u || 0) * c.w,
        y: c.y + Number(u.v || 0) * c.h
      }));
    }
    const o = i.map((c) => oi(sa(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function ol(i, o = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (g.mode === "unwrap") {
      const u = Jn();
      return i.map((d) => {
        const m = (Number(d.u || 0) % 1 + 1) % 1, _ = o == null ? m : Number(o || 0) + ln(m, o);
        return {
          x: u.x + _ * u.w,
          y: u.y + Number(d.v || 0) * u.h
        };
      });
    }
    const c = i.map((u) => oi(sa(u))).filter(Boolean);
    return c.every((u) => Number(u.z || 0) > 0) ? c.map((u) => ({ x: Number(u.x || 0), y: Number(u.y || 0) })) : [];
  }
  function dp(i, o, c) {
    return !Array.isArray(i) || i.length < 3, [];
  }
  function hp(i, o, c) {
    if (!Array.isArray(i) || i.length < 1 || !o || !c) return [];
    const u = [];
    for (const d of i) {
      const m = sa(d), _ = al(o, m);
      _ && u.push({
        x: Number(c.x || 0) + Number(_.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(_.y || 0) * Number(c.h || 0)
      });
    }
    return u;
  }
  function pp() {
    return ra(), !1;
  }
  function gp() {
    var x, k;
    if (((x = g.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const i = g.interaction.stroke, o = (k = i == null ? void 0 : i.geometry) == null ? void 0 : k.points;
    let c;
    if (g.mode === "frame") {
      const P = be();
      c = dp(o, P);
    } else
      c = fp(o);
    if (!Array.isArray(c) || c.length < 3) return;
    const u = String((i == null ? void 0 : i.layerKind) || "") === "mask", d = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(d.r || 0) * 255), _ = Math.round(Number(d.g || 0) * 255), v = Math.round(Number(d.b || 0) * 255);
    T.save(), T.beginPath(), T.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let P = 1; P < c.length; P++) T.lineTo(Number(c[P].x || 0), Number(c[P].y || 0));
    T.closePath(), u ? (T.lineWidth = 2, T.setLineDash([6, 6]), T.lineDashOffset = 0, T.strokeStyle = "rgba(0,0,0,0.96)", T.stroke(), T.lineDashOffset = -6, T.strokeStyle = "rgba(255,255,255,0.96)", T.stroke(), T.setLineDash([]), T.lineDashOffset = 0) : (T.lineWidth = 1.5, T.setLineDash([6, 4]), T.strokeStyle = `rgba(${m},${_},${v},1)`, T.stroke(), T.setLineDash([])), T.restore();
  }
  function mp() {
    g.mode === "frame" ? pp() : g.mode === "unwrap" ? Fh(!1) : Vh(!1), Wh(), gp(), M.fovValue = `${Math.round(g.viewFov)}°`, Ut(), At.hasPresentedFrame || (At.hasPresentedFrame = !0, A.style.opacity = "1");
    const i = Ch();
    i ? (D == null || D.removeAttribute("data-stage-ready"), D == null || D.setAttribute("data-stage-loading-kind", i)) : (D == null || D.setAttribute("data-stage-ready", ""), D == null || D.removeAttribute("data-stage-loading-kind"));
  }
  function yp(i = g.interaction) {
    if (e !== "stickers" || g.mode !== "pano") return !1;
    const o = String((i == null ? void 0 : i.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function vp() {
    t.__panoLiveStateOverride = p, t.__panoLivePaintSurface = Xi();
  }
  function yt(i = {}) {
    var v, x, k, P, N, H, U, X, z, q;
    const o = !!i.localOnly, c = i.externalSync === !0, u = String(i.cause || ""), d = String(((v = g.interaction) == null ? void 0 : v.kind) || "");
    (!o || d === "view" || d === "pan_frame" || yp() || !!((x = g.viewTween) != null && x.active) || u === "mode" || u === "frame_view" || u === "cutout_frame") && (At.backgroundDirty = !0), o && ni() && (g.livePaintInteractionRevision += 1, At.backgroundDirty = !0), (!o || u === "selection" || u === "mode" || u === "cutout_frame") && (zo(), ea()), vp(), c && ((P = (k = t.__panoDomPreview) == null ? void 0 : k.requestDraw) == null || P.call(k), (N = t.setDirtyCanvas) == null || N.call(t, !0, !1)), c && !o && ((U = (H = t.graph) == null ? void 0 : H.setDirtyCanvas) == null || U.call(H, !0, !0), (q = (z = (X = dn) == null ? void 0 : X.canvas) == null ? void 0 : z.setDirty) == null || q.call(z, !0, !0)), At.dirty = !0;
  }
  function sl() {
    const i = C.getBoundingClientRect(), o = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return C.width !== o || C.height !== c || A.width !== o || A.height !== c ? (C.width = o, C.height = c, A.width = o, A.height = c, At.backgroundDirty = !0, At.dirty = !0, e === "cutout" && (At.pendingStableLayoutFrames = Math.max(Number(At.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Jo(i = performance.now()) {
    var o;
    if (At.running) {
      if (At.lastTickTs = i, g.outputPreviewAnim !== g.outputPreviewAnimTo) {
        const c = Math.max(1, Number(g.outputPreviewAnimDurationMs)), u = W((i - Number(g.outputPreviewAnimStartTs || 0)) / c, 0, 1), m = g.outputPreviewAnimTo > g.outputPreviewAnimFrom ? Ib(u) : Eb(u);
        g.outputPreviewAnim = jn(g.outputPreviewAnimFrom, g.outputPreviewAnimTo, m), At.dirty = !0, u >= 1 && (g.outputPreviewAnim = g.outputPreviewAnimTo);
      }
      if ((o = g.viewTween) != null && o.active) {
        const c = g.viewTween, u = W((i - c.startTs) / c.durationMs, 0, 1), d = Ab(u);
        g.viewYaw = $e(c.startYaw + c.deltaYaw * d), g.viewPitch = c.startPitch + (c.targetPitch - c.startPitch) * d, g.viewFov = c.startFov + (c.targetFov - c.startFov) * d, At.backgroundDirty = !0, At.dirty = !0, u >= 1 && (g.viewTween = null);
      }
      if (g.viewInertia.vx = Number(Me.state.inertia.vx || 0), g.viewInertia.vy = Number(Me.state.inertia.vy || 0), g.viewInertia.active = !!Me.state.inertia.active, Me.stepInertia(i) && (g.viewInertia.vx = Number(Me.state.inertia.vx || 0), g.viewInertia.vy = Number(Me.state.inertia.vy || 0), g.viewInertia.active = !!Me.state.inertia.active, At.backgroundDirty = !0, At.dirty = !0), (At.dirty || i - At.lastSizeCheckTs >= 220) && (sl(), At.lastSizeCheckTs = i), At.pendingStableLayoutFrames > 0 && (At.pendingStableLayoutFrames -= 1, At.dirty = !0), At.dirty) {
        if (At.pendingStableLayoutFrames > 0) {
          At.rafId = requestAnimationFrame(Jo);
          return;
        }
        At.dirty = !1, mp();
      }
      At.rafId = requestAnimationFrame(Jo);
    }
  }
  function bp() {
    At.running = !1, At.rafId && cancelAnimationFrame(At.rafId), At.rafId = 0;
  }
  function se() {
    r || (g.historyController.commitActionGroup(JSON.stringify(Zu(p))), ns());
  }
  function Qo(i) {
    if (r) return;
    const o = i < 0 ? g.historyController.undo() : g.historyController.redo();
    if (ns(), !o) return;
    const c = JSON.parse(o);
    Object.keys(p).forEach((u) => delete p[u]), Object.assign(p, c), g.selectedId = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, g.selectedIds = g.selectedId ? [g.selectedId] : [], mn(), qe(), zt(), xn(), yt({ cause: "cutout_frame" });
  }
  function cl() {
    var c, u;
    const i = Array.isArray((c = g.historyController) == null ? void 0 : c.entries) ? g.historyController.entries : [], o = Number((u = g.historyController) == null ? void 0 : u.index);
    return {
      canUndo: !r && i.length > 1 && o > 0,
      canRedo: !r && i.length > 1 && o >= 0 && o < i.length - 1
    };
  }
  function qe() {
    F();
    const i = Ty({
      editor: g,
      swatches: Ya,
      paintColorPopOpen: at ? !at.hidden : !1,
      colorToCss: Mn,
      colorsApproximatelyEqual: qa,
      rgb01ToHsv: As,
      hsv01ToRgb: Cs,
      getBrushPresetIdForTool: tr,
      isActiveLassoTool: ih
    });
    if (Object.assign(M.paintDock, i), !i.visible) {
      at && (at.hidden = !0);
      return;
    }
    St && (clearTimeout(St), St = 0), Mt && (!i.colorEnabled && at && !at.hidden && (St = window.setTimeout(() => {
      at.hidden = !0, M.paintDock.colorPopOpen = !1, St = 0;
    }, 170)), at && (at.style.setProperty("--picker-hue-color", i.pickerHueColor), at.style.setProperty("--picker-sat", i.pickerSat), at.style.setProperty("--picker-val", i.pickerVal), at.style.setProperty("--picker-hue", i.pickerHue)), st && (st.style.left = i.pickerSvLeft, st.style.top = i.pickerSvTop), Y && (Y.style.left = i.pickerHueLeft));
  }
  function ts() {
    const i = ee();
    i && (g.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: _i(i)
    }, zt());
  }
  function zt() {
    var gt, It, Rt, kt;
    if (a) return;
    p.ui_settings = p.ui_settings || {};
    const i = Dy(p.ui_settings);
    if (s) {
      M.sidePanel = Ly({
        coverage: p.coverage,
        uiSettings: i,
        normalizeCoverageValue: Qe
      });
      return;
    }
    const o = ee(), c = gn(), u = Qi();
    c.length > 1 && (g.panelLastValues = g.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), o && u !== "stroke" && (g.panelLastValues = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: Number(o.hFOV_deg || (u === "image" ? 30 : 90)),
      vFOV_deg: Number(o.vFOV_deg || (u === "image" ? 30 : 60)),
      rot_deg: Number(o.rot_deg || 0),
      roll_deg: Number(o.roll_deg || 0),
      aspect_id: _i(o)
    });
    const d = g.panelLastValues || (e === "stickers" || u === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), m = u === "stroke" ? null : o, _ = m || d, v = !!m;
    g.panelWasEnabled = v, zo();
    let x = null;
    if (e === "stickers" || e === "cutout") {
      const j = [{ id: "", labelHtml: Is(e === "stickers" ? "No image" : "Nothing selected"), item: null }];
      e === "stickers" ? J().forEach((Nt, $t) => {
        var Yt, Bt;
        const Ht = Se(Nt) ? String(Nt.id || dr) : String(((Bt = (Yt = p.assets) == null ? void 0 : Yt[Nt.asset_id]) == null ? void 0 : Bt.name) || Nt.asset_id || Nt.id), Vt = `${$t + 1}. ${Ht}${Se(Nt) && Pr(Nt) ? " (hidden)" : ""}`;
        j.push({ id: Nt.id, labelHtml: Dc({ item: Nt, label: Vt, kind: "image" }), item: Nt, kind: "image" });
      }) : Ec().forEach((Nt) => {
        j.push({ id: Nt.item.id, labelHtml: Dc(Nt), item: Nt.item, kind: Nt.kind });
      });
      const et = (m == null ? void 0 : m.id) || "", bt = j.find((Nt) => Nt.id === et) || j[0];
      x = {
        label: "Selection",
        open: !1,
        disabled: j.length <= 1,
        currentLabelHtml: bt.labelHtml,
        items: j.map((Nt) => ({ id: Nt.id, labelHtml: Nt.labelHtml, active: Nt.id === et }))
      };
    }
    const k = [], P = (j, et, bt, Nt, $t) => {
      const Ht = W(Number(_[j] || 0), bt, Nt);
      k.push({
        key: j,
        label: et,
        min: bt,
        max: Nt,
        step: $t,
        value: Ht,
        displayValue: Ob(Ht),
        fillPct: W((Ht - bt) / Math.max(1e-6, Nt - bt) * 100, 0, 100),
        enabled: v && !r
      });
    }, N = [];
    c.length > 1 ? (N.push(`Selected objects: ${c.length}`), N.push("Multi-selection supports z-order and delete.")) : (P("yaw_deg", "Yaw", -180, 180, 0.1), P("pitch_deg", "Pitch", -90, 90, 0.1), P("hFOV_deg", "H FOV", 1, 179, 0.1), P("vFOV_deg", "V FOV", 1, 179, 0.1), e === "stickers" || u === "image" ? P("rot_deg", "Rotation", -180, 180, 0.1) : P("roll_deg", "Roll", -180, 180, 0.1));
    const H = Array.isArray((It = (gt = p == null ? void 0 : p.painting) == null ? void 0 : gt.paint) == null ? void 0 : It.strokes) ? p.painting.paint.strokes.length : 0, U = Array.isArray((kt = (Rt = p == null ? void 0 : p.painting) == null ? void 0 : Rt.mask) == null ? void 0 : kt.strokes) ? p.painting.mask.strokes.length : 0, X = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((j) => String((j == null ? void 0 : j.name) || "")) : [], z = Yd(
      t,
      X.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), q = !!String((z == null ? void 0 : z.src) || "").trim() || Lc("pano_input_images").length > 0, nt = Array.isArray(J()) && J().length > 0 || H > 0, vt = U > 0, rt = [
      { key: "mask", label: "Mask", icon: He.circle_dashed_tool, visible: !!g.showMask, enabled: vt },
      { key: "objects", label: "Paint / Images", icon: He.image, visible: !!g.showObjects, enabled: nt },
      { key: "panorama", label: "Panorama", icon: He.globe, visible: !!g.showPanorama, enabled: q }
    ].map((j) => ({
      ...j,
      ariaLabel: `Toggle ${j.label.toLowerCase()}`,
      tip: j.visible ? "Hide" : "Show"
    }));
    M.sidePanel = Oy({
      coverage: p.coverage,
      readOnly: r,
      selectionPicker: x,
      enabled: v,
      selectedKind: u,
      selectedItems: c,
      params: k,
      notes: N,
      visibilityRows: rt,
      uiSettings: i,
      normalizeCoverageValue: Qe
    });
  }
  function ua(i) {
    if (!i) return !1;
    if (String(i.type || "").toLowerCase().startsWith("image/")) return !0;
    const c = String(i.name || "").toLowerCase();
    return c.endsWith(".png") || c.endsWith(".jpg") || c.endsWith(".jpeg") || c.endsWith(".webp") || c.endsWith(".gif") || c.endsWith(".bmp");
  }
  async function ll(i) {
    if (r || e !== "stickers" && e !== "cutout" || !ua(i)) return;
    const o = Ra("asset"), c = URL.createObjectURL(i);
    try {
      const u = await new Promise((_, v) => {
        const x = new Image();
        x.onload = () => _(x), x.onerror = () => v(new Error("image load failed")), x.src = c;
      });
      le.set(o, u);
      const d = Ra("st");
      p.stickers.push({
        id: d,
        asset_id: o,
        yaw_deg: g.viewYaw,
        pitch_deg: g.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: cr(30, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1)),
        rot_deg: 0,
        z_index: Tc()
      }), ta(p.stickers[p.stickers.length - 1]), pl(), se(), zt(), Ut(), yt();
      const m = (async () => {
        const _ = await Uo(i, String(i.name || o));
        (Array.isArray(p.stickers) ? p.stickers : []).filter((k) => String((k == null ? void 0 : k.asset_id) || "") === o).length && (p.assets[o] = _, Cr(), he(), zt(), Ut(), yt());
      })();
      ki.set(o, m);
      try {
        await m;
      } finally {
        ki.delete(o);
      }
    } catch {
      delete p.assets[o], le.delete(o);
      const u = Array.isArray(p.stickers) ? p.stickers : [], d = u.filter((m) => String((m == null ? void 0 : m.asset_id) || "") === o);
      d.length && (p.stickers = u.filter((m) => String((m == null ? void 0 : m.asset_id) || "") !== o), d.some((m) => {
        var _;
        return String((m == null ? void 0 : m.id) || "") === String(((_ = g.selection) == null ? void 0 : _.id) || "");
      }) && ta(null), zt(), Ut(), yt());
    } finally {
      URL.revokeObjectURL(c);
    }
  }
  function ul(i) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var u;
      const c = (u = o.files) == null ? void 0 : u[0];
      !c || typeof i != "function" || i(c);
    }, o.click();
  }
  function _p() {
    r || e !== "stickers" && e !== "cutout" || ul((i) => {
      ll(i);
    });
  }
  async function xp(i) {
    var k;
    if (r || e !== "stickers" && e !== "cutout") return;
    const o = ee();
    if (!o || !Ce(o) || Se(o) || !ua(i)) return;
    const c = String(o.id || ""), u = String(o.asset_id || ""), d = u ? Ee(((k = p.assets) == null ? void 0 : k[u]) || null) : null, m = Number(o.vFOV_deg || 0), _ = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, v = Ra("asset"), x = URL.createObjectURL(i);
    try {
      const P = await new Promise((H, U) => {
        const X = new Image();
        X.onload = () => H(X), X.onerror = () => U(new Error("image load failed")), X.src = x;
      });
      le.set(v, P), o.asset_id = v, o.vFOV_deg = cr(
        Number(o.hFOV_deg || 30),
        Number(P.naturalWidth || P.width || 1),
        Number(P.naturalHeight || P.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, rn(), se(), zt(), Ut(), yt();
      const N = (async () => {
        const H = await Uo(i, String(i.name || v));
        (Array.isArray(p.stickers) ? p.stickers : []).some((z) => String((z == null ? void 0 : z.id) || "") === c && String((z == null ? void 0 : z.asset_id) || "") === v) && (p.assets[v] = H, Cr(), he(), zt(), Ut(), yt());
      })();
      ki.set(v, N);
      try {
        await N;
      } finally {
        ki.delete(v);
      }
    } catch {
      delete p.assets[v], le.delete(v);
      const P = (Array.isArray(p.stickers) ? p.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === c) || null;
      P && String(P.asset_id || "") === v && (u && d && (p.assets[u] = d), P.asset_id = u, P.vFOV_deg = m, P.crop = _ ? { ..._ } : null), rn(), zt(), Ut(), yt();
    } finally {
      URL.revokeObjectURL(x);
    }
  }
  function wp() {
    if (r) return;
    const i = ee();
    !i || !Ce(i) || Se(i) || ul((o) => {
      xp(o);
    });
  }
  async function Sp() {
    if (r || e !== "stickers") return;
    const i = p.assets && typeof p.assets == "object" ? p.assets : {}, o = Object.entries(i).filter(([, u]) => {
      const d = String((u == null ? void 0 : u.type) || "").toLowerCase(), m = String((u == null ? void 0 : u.value) || "");
      return d === "dataurl" && m.startsWith("data:image");
    });
    if (!o.length) return;
    let c = !1;
    for (const [u, d] of o)
      try {
        const m = String((d == null ? void 0 : d.value) || "");
        if (!m) continue;
        const _ = await fetch(m).then((N) => N.blob()), v = String(_.type || "image/png").split("/")[1] || "png", x = String((d == null ? void 0 : d.name) || `${u}.${v}`), k = new File([_], x, { type: _.type || "image/png" }), P = await Uo(k, x);
        p.assets[u] = {
          ...P,
          w: Number((d == null ? void 0 : d.w) || 0),
          h: Number((d == null ? void 0 : d.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (he(), yt());
  }
  function Mp() {
    r || e === "cutout" && (p.shots = [], g.selectedId = null, g.selectedIds = [], g.mode === "frame" && (g.mode = "pano"), g.cutoutAspectOpen = !1, p.active.selected_shot_id = null, se(), he(), zt(), yt());
  }
  function kp() {
    const i = Array.isArray(p.stickers) ? p.stickers : [], o = [];
    for (const c of i)
      Se(c) && (c.visible = !1, o.push(c));
    return o;
  }
  function fl(i, o, c = "Clear") {
    return new Promise((u) => {
      M.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(o || ""),
        confirmLabel: String(c || "Confirm"),
        resolve: u
      };
    });
  }
  async function Np() {
    var c, u;
    if (r || !await fl(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    p.painting = Oi(null), mn();
    const o = kp();
    e === "stickers" ? (p.stickers = o, p.assets = {}, g.selectedId = ((c = o[0]) == null ? void 0 : c.id) || null, g.selectedIds = g.selectedId ? [g.selectedId] : [], p.active.selected_sticker_id = ((u = o[0]) == null ? void 0 : u.id) || null, Cr()) : (p.stickers = o, p.assets = {}, p.shots = [], g.selectedId = null, g.selectedIds = [], p.active.selected_sticker_id = null, p.active.selected_shot_id = null, g.mode === "frame" && (g.mode = "pano"), g.cutoutAspectOpen = !1, Cr()), se(), he(), zt(), Ut(), yt();
  }
  async function Pp(i) {
    var m, _, v, x;
    if (r) return;
    const o = i === "mask" ? "mask" : "paint", c = o === "mask" ? "Mask" : "Paint", u = Dr(o);
    if (!(!u.length && !(((m = g.interaction) == null ? void 0 : m.kind) === "draw" && ((_ = g.interaction) == null ? void 0 : _.layerKind) === o) || !await fl(
      `Clear ${c}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((v = g.interaction) == null ? void 0 : v.kind) === "draw" && ((x = g.interaction) == null ? void 0 : x.layerKind) === o) {
        const k = Vn();
        k && g.paintEngine.cancelActiveStroke(k), g.interaction = null;
      }
      u.length = 0, p.painting.raster_objects = Ye().filter((k) => String((k == null ? void 0 : k.layerKind) || "paint") !== o), o === "paint" && (tt().length = 0), mn(), se(), he(), zt(), Ut(), qe(), yt();
    }
  }
  function Cp() {
    if (r) return;
    const i = ee();
    if (!i || !Ce(i) || Se(i)) return;
    const o = JSON.parse(JSON.stringify(i));
    o.id = Ra("st"), o.yaw_deg = $e((o.yaw_deg || 0) + 8), o.z_index = Tc(), p.stickers.push(o), p.active.selected_sticker_id = o.id, g.selectedId = o.id, g.selectedIds = [o.id], rn(), se(), he(), Ut(), zt(), yt();
  }
  function dl() {
    var c, u, d, m, _, v;
    if (r) return;
    const i = gn(), o = ee();
    if (!(!o && i.length === 0)) {
      if (i.length > 1) {
        const x = new Set(i.filter((N) => ve(N)).map((N) => String(N.actionGroupId || N.id || ""))), k = new Set(i.filter((N) => Ae(N)).map((N) => ht(N.rasterObjectId || N.id || ""))), P = new Set(i.filter(Ce).map((N) => String(N.id || "")));
        x.size > 0 && (p.painting.paint.strokes = (Array.isArray((u = (c = p.painting) == null ? void 0 : c.paint) == null ? void 0 : u.strokes) ? p.painting.paint.strokes : []).filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || ""))), p.painting.groups = tt().filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), mn()), k.size > 0 && (p.painting.raster_objects = Ye().filter((N) => !k.has(String((N == null ? void 0 : N.id) || ""))), Ir()), P.size > 0 && (p.stickers = (Array.isArray(p.stickers) ? p.stickers : []).filter((N) => P.has(String((N == null ? void 0 : N.id) || "")) ? Se(N) ? (Pr(N) || (N.visible = !1), !0) : !1 : !0), Cr(), rn()), g.selectedId = null, g.selectedIds = [], se(), he(), zt(), Ut(), yt();
        return;
      }
      if (ve(o)) {
        const x = String(o.actionGroupId || o.id || "").trim();
        p.painting.paint.strokes = (Array.isArray((m = (d = p.painting) == null ? void 0 : d.paint) == null ? void 0 : m.strokes) ? p.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== x), p.painting.groups = tt().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== x), mn(), g.selectedId = null, g.selectedIds = [], se(), he(), zt(), Ut(), yt();
        return;
      }
      if (Ae(o)) {
        const x = ht(o.rasterObjectId || o.id || "");
        p.painting.raster_objects = Ye().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== x), Ir(), g.selectedId = null, g.selectedIds = [], se(), he(), zt(), Ut(), yt();
        return;
      }
      if (e === "stickers" || Ce(o)) {
        if (Se(o)) {
          if (Pr(o)) return;
          o.visible = !1, rn(), se(), he(), zt(), Ut(), yt();
          return;
        }
        p.stickers = p.stickers.filter((x) => x.id !== o.id), Cr(), rn(), g.selectedId = ((_ = p.stickers[0]) == null ? void 0 : _.id) || null, g.selectedIds = g.selectedId ? [g.selectedId] : [], p.active.selected_sticker_id = ((v = p.stickers[0]) == null ? void 0 : v.id) || null, se(), he(), zt(), Ut(), yt();
        return;
      }
      Mp();
    }
  }
  function Ap(i, o) {
    if (!i) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, u = (() => {
      const H = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(H)) {
        const [z, q] = H.split(":").map((nt) => Number(nt));
        if (Number.isFinite(z) && Number.isFinite(q)) return z >= q;
      }
      const U = Number(i.hFOV_deg || 64), X = Number(i.vFOV_deg || 40);
      return Math.abs(U - X) > 1e-6 ? U >= X : Js(i) >= 1;
    })();
    let [d, m] = c[String(o)] || c["1:1"];
    d >= m !== u && ([d, m] = [m, d]);
    const _ = d / m, v = W(Number(i.hFOV_deg || 64), 1, 179), x = W(Number(i.vFOV_deg || 40), 1, 179), k = Math.sqrt(Math.max(1, v * x)), P = W(k * Math.sqrt(_), 1, 179), N = W(k / Math.sqrt(_), 1, 179);
    i.hFOV_deg = P, i.vFOV_deg = N, i.aspect_id = String(o);
  }
  function Ip(i) {
    if (!i) return;
    const o = Math.max(1, Number(i.hFOV_deg || 90)), c = Math.max(1, Number(i.vFOV_deg || 60));
    i.hFOV_deg = c, i.vFOV_deg = o, i.aspect_id = yr(i);
  }
  function hl() {
    we().forEach((o, c) => {
      o.type === "sticker" && o.item && (o.item.z_index = c), o.type === "strokeGroup" && o.item && (o.item.z_index = c), o.type === "rasterObject" && o.item && (o.item.z_index = c);
    });
  }
  function Ep() {
    if (r) return;
    const i = gn();
    if (!ee() || i.length === 0) return;
    hl();
    const c = we(), u = new Set(i.map((v) => Ce(v) ? `sticker:${String(v.id || "")}` : Ae(v) ? `rasterObject:${ht(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), d = [], m = [];
    if (c.forEach((v) => {
      var k, P;
      const x = v.type === "sticker" ? `sticker:${String(((k = v.item) == null ? void 0 : k.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((P = v.item) == null ? void 0 : P.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      u.has(x) ? d.push(v) : m.push(v);
    }), !d.length || d[d.length - 1] === c[c.length - 1]) return;
    [...m, ...d].forEach((v, x) => {
      v.type === "sticker" && v.item && (v.item.z_index = x), v.type === "strokeGroup" && v.item && (v.item.z_index = x), v.type === "rasterObject" && v.item && (v.item.z_index = x);
    }), rn(), se(), he(), Ut(), yt();
  }
  function Dp() {
    if (r) return;
    const i = gn();
    if (!ee() || i.length === 0) return;
    hl();
    const c = we(), u = new Set(i.map((v) => Ce(v) ? `sticker:${String(v.id || "")}` : Ae(v) ? `rasterObject:${ht(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), d = [], m = [];
    if (c.forEach((v) => {
      var k, P;
      const x = v.type === "sticker" ? `sticker:${String(((k = v.item) == null ? void 0 : k.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((P = v.item) == null ? void 0 : P.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      u.has(x) ? d.push(v) : m.push(v);
    }), !d.length || d[0] === c[0]) return;
    [...d, ...m].forEach((v, x) => {
      v.type === "sticker" && v.item && (v.item.z_index = x), v.type === "strokeGroup" && v.item && (v.item.z_index = x), v.type === "rasterObject" && v.item && (v.item.z_index = x);
    }), rn(), se(), he(), Ut(), yt();
  }
  function Tp() {
    r || (p.projection_model = "pinhole_rectilinear", p.alpha_mode = "straight", f && (p.output_preset = tc(f.value, Number(p.output_preset || 2048))), h && (p.coverage = Qe(h.value)), y && (p.bg_color = String(y.value || p.bg_color || "#00ff00")), xn(), t.setDirtyCanvas(!0, !0));
  }
  function xn() {
    var o;
    if (r) return;
    p.coverage = Qe(p.coverage);
    const i = JSON.stringify(p);
    b && (b.value = i, (o = b.callback) == null || o.call(b, i));
  }
  function fa() {
    p.ui_settings = $b(p.ui_settings), r || xn();
  }
  function he() {
    var i;
    r || (xn(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0));
  }
  function pl() {
    g.primaryTool !== "cursor" && (g.primaryTool = "cursor", qe(), zt());
  }
  function Er(i) {
    const o = C.getBoundingClientRect();
    return {
      x: (i.clientX - o.left) / o.width * C.width,
      y: (i.clientY - o.top) / o.height * C.height
    };
  }
  function da(i) {
    const o = C.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(o.left || 0),
      y: Number(i.clientY) - Number(o.top || 0)
    };
  }
  function gl() {
    return g.mode === "pano" || g.mode === "unwrap";
  }
  function be() {
    return null;
  }
  function ui(i = be()) {
    return null;
  }
  function ml() {
    return !1;
  }
  function yn(i, o = performance.now()) {
    if (g.mode === "unwrap") {
      const m = Jn(), _ = (i.x - m.x) / Math.max(1, m.w), v = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: W(v, 0, 1),
        t: Number(o || 0)
      };
    }
    const c = jo(i.x, i.y), { lon: u, lat: d } = Bc(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (u / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - d / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function Hn(i, o, c = performance.now()) {
    return null;
  }
  function Lp(i, o) {
    return !1;
  }
  function Op(i, o) {
    const c = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function tr(i) {
    const o = String(i || "").trim();
    return o === "eraser" ? $n : Ze[o] ? o : g.activeBrushPresetId || $n;
  }
  function yl() {
    return (g.primaryTool === "paint" || g.primaryTool === "mask") && (gl() || ml());
  }
  function vl() {
    var i;
    return yl() && ((i = g.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function ha(i, o = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), u = Number((i == null ? void 0 : i.y) || 0), d = o !== !1, m = g.pointerPos || { x: 0, y: 0, inside: !1 }, _ = m.inside !== d || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - u) > 0.01;
    return g.pointerPos = { x: c, y: u, inside: d }, _;
  }
  function Rp() {
    var P, N;
    if (!vl()) return null;
    const i = g.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? g.maskTool : g.paintTool, c = tr(o), u = Ze[c] || Ze[$n], d = Number(g.brushSizes[c] ?? 10), m = Math.max(1, d) * Math.max(0.1, Number(u.sizeScale ?? 1)), _ = Math.max(3, m * 0.5), v = i === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : an(g.paintColor), x = i === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : W(Math.max(0.16, Number(v.a ?? 1) * 0.3), 0.16, 0.52), k = i === "mask" ? 0.95 : o === "eraser" ? 0.75 : W(Math.max(0.46, Number(v.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: o,
      preset: u,
      radius: _,
      fillStyle: Mn(v, x),
      strokeStyle: Mn(v, k),
      x: Number(((P = g.pointerPos) == null ? void 0 : P.x) || 0),
      y: Number(((N = g.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function Fp() {
    var H, U, X;
    const i = Rp();
    if (!$) return;
    if (!i) {
      $.style.display = "none";
      return;
    }
    let o = i.radius * 2, c = i.radius * 2, u = "999px", d = 0, m = i.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", v = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", k = "rgba(52, 52, 52, 0.72)";
    let P = Number(i.hotspotX ?? o * 0.5), N = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      o = yo, c = yo, u = "0", _ = "0", v = "none", P = Pb, N = Cb, m = Tb(i.fillStyle, k, x);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const z = Math.max(1, Number(((H = i.preset) == null ? void 0 : H.aspect) ?? 1));
      o = Math.max(10, i.radius * 2 * z), c = Math.max(6, i.radius * 2), u = `${Math.min(6, c * 0.42)}px`, d = Number(((X = (U = i.preset) == null ? void 0 : U.angle) == null ? void 0 : X.value) || 0) * mr;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    $.style.display = "block", $.style.width = `${Math.round(o)}px`, $.style.height = `${Math.round(c)}px`, $.style.borderRadius = u, $.style.border = _, $.style.boxShadow = v, $.style.background = m, $.style.backgroundRepeat = "no-repeat", $.style.backgroundPosition = "center", $.style.backgroundSize = "contain", $.style.transform = `translate(${Math.round(i.x - P)}px, ${Math.round(i.y - N)}px) rotate(${d}deg)`;
  }
  function Vp() {
    var vt;
    if (!ot || !dt) return;
    const i = g.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? g.maskTool : g.paintTool;
    if (o === "lasso_fill") return;
    const c = tr(o), u = Ze[c] || Ze[$n], d = Number(g.brushSizes[c] ?? 10), m = Math.max(1, d) * Math.max(0.1, Number(u.sizeScale ?? 1)), _ = Math.max(6, m * 0.5), v = o === "eraser", x = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : v ? { r: 1, g: 1, b: 1, a: 0.22 } : an(g.paintColor), k = i === "mask" ? Mn(x, 0.22) : v ? "rgba(255,255,255,0.14)" : Mn(x, W(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), P = i === "mask" ? Mn(x, 0.96) : v ? "rgba(255,255,255,0.72)" : Mn(x, W(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let N = _ * 2, H = _ * 2, U = "999px", X = 0, z = k;
    const q = "rgba(222, 222, 222, 0.72)", nt = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const rt = Math.max(1, Number((u == null ? void 0 : u.aspect) ?? 1));
      N = Math.max(16, _ * 2 * rt), H = Math.max(10, _ * 2), U = `${Math.min(8, H * 0.42)}px`, X = Number(((vt = u == null ? void 0 : u.angle) == null ? void 0 : vt.value) || 0) * mr;
    } else o === "brush" ? z = `radial-gradient(circle at 50% 50%, ${P} 0%, ${k} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (N = Math.max(18, _ * 1.8), H = N, z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${P} 43%, ${P} 58%, rgba(0,0,0,0) 59%)`) : v && (z = "rgba(255,255,255,0.12)");
    dt.style.width = `${Math.round(N)}px`, dt.style.height = `${Math.round(H)}px`, dt.style.borderRadius = U, dt.style.background = z, dt.style.border = `1px solid ${q}`, dt.style.boxShadow = `0 0 0 1px ${nt}`, dt.style.transform = `rotate(${X}deg)`, ut && (clearTimeout(ut), ut = 0), ot.classList.remove("fade-out"), ot.classList.add("show");
  }
  function pa() {
    !ot || !ot.classList.contains("show") || (ot.classList.add("fade-out"), ut && clearTimeout(ut), ut = window.setTimeout(() => {
      ot.classList.remove("show", "fade-out"), ut = 0;
    }, 180));
  }
  function Hp(i, o, c, u) {
    const d = tr(o), m = Ze[d] || Ze[$n], _ = g.brushSizes[d] ?? 10, v = Math.max(1, _) * Math.max(0.1, m.sizeScale ?? 1), x = Op(u, v), k = c.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), P = {
      id: Vr(i),
      actionGroupId: Vr("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(g.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(g.mode || "pano") },
      layerKind: i,
      toolKind: o,
      size: v,
      createdAt: Date.now(),
      color: i === "paint" ? { ...g.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: x.radiusModel,
      radiusValue: x.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: k.map((N) => ({ ...N })),
        points: k.map((N) => ({ ...N }))
      }
    };
    return Gu(P, m), Number(m.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), Number(P.size || 0), String(P.radiusModel || ""), Number(P.radiusValue || 0), { ...P.targetSpace }, P;
  }
  function zp(i, o, c, u) {
    const d = c.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), m = tr(o), _ = Ze[m] || Ze[$n], v = {
      id: Vr(i),
      actionGroupId: Vr("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(g.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(g.mode || "pano") },
      layerKind: i,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...g.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: d.map((x) => ({ ...x }))
      }
    };
    return Gu(v, _), Number(_.aspect ?? 1), Number(v.aspect ?? 1), String(v.stampKind || ""), { ...v.targetSpace }, v;
  }
  function Dr(i) {
    const o = p.painting || (p.painting = Oi(null)), c = o[i] || (o[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function $p(i, o, c = performance.now()) {
    let u;
    if (g.mode === "frame") {
      const k = be();
      if (!k) return !1;
      u = Hn(o, k, c);
    } else
      u = yn(o, c);
    const d = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, _ = d[d.length - 1];
    if (_) {
      const k = Math.abs(Number(u.u ?? u.x ?? 0) - Number(_.u ?? _.x ?? 0)), P = Math.abs(Number(u.v ?? u.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (k < 15e-4 && P < 15e-4) return !1;
    }
    const v = {
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    d.push({ ...v }), m.push({ ...v });
    const x = Vn();
    if (x) {
      const k = g.paintEngine.ensureTarget(x);
      g.paintEngine.appendStrokePoint(k, Number(v.u ?? 0), Number(v.v ?? 0), i.stroke);
    }
    return !0;
  }
  function jp(i, o, c = performance.now()) {
    var _, v;
    let u;
    if (g.mode === "frame") {
      const x = be();
      if (!x) return !1;
      u = Hn(o, x, c);
    } else
      u = yn(o, c);
    const d = (v = (_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : v.points;
    if (!u || !Array.isArray(d)) return !1;
    const m = d[d.length - 1];
    if (m) {
      const x = Math.abs(Number(u.u ?? u.x ?? 0) - Number(m.u ?? m.x ?? 0)), k = Math.abs(Number(u.v ?? u.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (x < 15e-4 && k < 15e-4) return !1;
    }
    return d.push({
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Up(i) {
    var rt, gt, It, Rt, kt;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || (i == null ? void 0 : i.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    ca();
    const c = Vn(), u = ci(c.width, c.height);
    if (!il(u, o, { w: c.width, h: c.height })) return !1;
    const d = ((gt = (rt = u.ctx) == null ? void 0 : rt.getImageData(0, 0, c.width, c.height)) == null ? void 0 : gt.data) || null;
    if (!d) return !1;
    const m = new Map(tt().map((j) => [String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "").trim(), j ? { ...j } : null])), _ = [], v = [], x = [...Ye().filter((j) => String((j == null ? void 0 : j.layerKind) || "paint") !== "paint")];
    let k = !1, P = we().reduce((j, et) => Math.max(j, Number((et == null ? void 0 : et.z_index) || 0)), -1) + 1;
    function N(j, et, bt, Nt = 8) {
      let $t = et, Ht = bt, Vt = -1, Yt = -1;
      for (let Bt = 0; Bt < bt; Bt += 1)
        for (let ne = 0; ne < et; ne += 1)
          j[(Bt * et + ne) * 4 + 3] <= Nt || (ne < $t && ($t = ne), Bt < Ht && (Ht = Bt), ne > Vt && (Vt = ne), Bt > Yt && (Yt = Bt));
      return Vt < $t || Yt < Ht ? null : { minX: $t, minY: Ht, maxX: Vt, maxY: Yt };
    }
    const H = N(d, c.width, c.height, 8);
    if (!H) return !1;
    function U(j, et) {
      return !j || !et ? !1 : !(j.maxX < et.minX || et.maxX < j.minX || j.maxY < et.minY || et.maxY < j.minY);
    }
    function X(j, et) {
      const bt = ye((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "", "paint", et);
      if (!bt) return null;
      const Nt = bt.centerUv.u - bt.halfW, $t = bt.centerUv.u + bt.halfW, Ht = bt.centerUv.v - bt.halfH, Vt = bt.centerUv.v + bt.halfH, Yt = c.width, Bt = c.height;
      return {
        minX: Math.floor((Nt % 1 + 1) % 1 * Yt),
        maxX: Math.ceil(($t % 1 + 1) % 1 * Yt),
        minY: Math.floor(W(Ht, 0, 1) * Bt),
        maxY: Math.ceil(W(Vt, 0, 1) * Bt),
        wraps: $t - Nt >= 1 || Nt < 0 || $t > 1
      };
    }
    function z(j) {
      const et = (j == null ? void 0 : j.bbox) || null;
      if (!et) return null;
      const bt = (j == null ? void 0 : j.transform) || {}, Nt = c.width, $t = c.height, Ht = Number(et.u0 || 0) + Number(bt.du || 0), Vt = Number(et.u1 || 0) + Number(bt.du || 0), Yt = Number(et.v0 || 0) + Number(bt.dv || 0), Bt = Number(et.v1 || 0) + Number(bt.dv || 0);
      return {
        minX: Math.floor((Ht % 1 + 1) % 1 * Nt),
        maxX: Math.ceil((Vt % 1 + 1) % 1 * Nt),
        minY: Math.floor(W(Yt, 0, 1) * $t),
        maxY: Math.ceil(W(Bt, 0, 1) * $t),
        wraps: Vt - Ht >= 1 || Ht < 0 || Vt > 1
      };
    }
    function q(j) {
      return j ? j.wraps ? U(H, { minX: 0, maxX: j.maxX, minY: j.minY, maxY: j.maxY }) || U(H, { minX: j.minX, maxX: c.width - 1, minY: j.minY, maxY: j.maxY }) : U(H, j) : !0;
    }
    function nt(j) {
      if (!j) return { touched: !1, canvas: null };
      const et = ci(c.width, c.height, { readback: !0 });
      et.ctx.drawImage(j, 0, 0);
      const bt = et.ctx.getImageData(0, 0, c.width, c.height);
      et.ctx.save(), et.ctx.globalCompositeOperation = "destination-out", et.ctx.drawImage(u.canvas, 0, 0), et.ctx.restore();
      const Nt = et.ctx.getImageData(0, 0, c.width, c.height);
      for (let $t = 0; $t < c.width * c.height; $t += 1) {
        if (d[$t * 4 + 3] <= 8) continue;
        const Vt = bt.data[$t * 4 + 3], Yt = Nt.data[$t * 4 + 3];
        if (Vt > Yt)
          return { touched: !0, canvas: et.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function vt(j, et, bt) {
      const Nt = Number(bt == null ? void 0 : bt.z_index), $t = up(j, et, bt).map((Ht, Vt) => ({
        ...Ht,
        z_index: Number.isFinite(Nt) ? Nt + Vt * 1e-3 : P + Vt * 1e-3
      }));
      return $t.length && (P = Math.max(P, ...$t.map((Ht) => Number((Ht == null ? void 0 : Ht.z_index) || 0))) + 1), $t;
    }
    for (const j of tt()) {
      const et = String((j == null ? void 0 : j.actionGroupId) || (j == null ? void 0 : j.id) || "").trim();
      if (!et) continue;
      const bt = pn(et, "paint");
      if (!q(X(j, bt))) {
        v.push(j), _.push(...bt);
        continue;
      }
      const Nt = ((Rt = (It = g.paintEngine) == null ? void 0 : It.getGroupTarget) == null ? void 0 : Rt.call(It, et)) || null, $t = ((kt = Nt == null ? void 0 : Nt.committedPaint) == null ? void 0 : kt.canvas) || null;
      if (!$t) {
        v.push(j), _.push(...bt);
        continue;
      }
      const Ht = nt($t);
      if (!Ht.touched || !Ht.canvas) {
        v.push(j), _.push(...bt);
        continue;
      }
      k = !0;
      const Vt = vt(Ht.canvas, "paint", m.get(et) || j || {});
      x.push(...Vt);
    }
    for (const j of Ye().filter((et) => String((et == null ? void 0 : et.layerKind) || "paint") === "paint")) {
      if (!q(z(j))) {
        x.push(j);
        continue;
      }
      const et = $c(j, null);
      if (!et) {
        x.push(j);
        continue;
      }
      const bt = nt(et);
      if (!bt.touched || !bt.canvas) {
        x.push(j);
        continue;
      }
      k = !0;
      const Nt = vt(bt.canvas, "paint", j);
      x.push(...Nt);
    }
    return k ? (p.painting.paint.strokes = _, p.painting.groups = v.sort((j, et) => Number((j == null ? void 0 : j.z_index) || 0) - Number((et == null ? void 0 : et.z_index) || 0)), p.painting.raster_objects = x.sort((j, et) => Number((j == null ? void 0 : j.z_index) || 0) - Number((et == null ? void 0 : et.z_index) || 0)), ai({ preservePanelValues: !1 }), !0) : !1;
  }
  function Bp(i) {
    var m, _, v, x;
    const o = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const c = String(((_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = Zo(o.rawPoints || o.points || [], i.stroke.targetSpace, !0)), Up(i);
    const u = i.layerKind === "paint" && c !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (u && jt((v = i.stroke) == null ? void 0 : v.actionGroupId), Dr(i.layerKind).push(i.stroke), !0);
    const d = o.rawPoints || o.points || [];
    return d.length < 1 ? !1 : (o.processedPoints = Zo(d, i.stroke.targetSpace, !0), u && jt((x = i.stroke) == null ? void 0 : x.actionGroupId), Dr(i.layerKind).push(i.stroke), !0);
  }
  function bl(i) {
    if (e === "cutout" && g.mode === "frame")
      return null;
    const o = [
      ...ei(!1).slice().sort((c, u) => Number((u == null ? void 0 : u.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var u;
        return c.type === "strokeGroup" ? ii(_t("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? ri(ft(((u = c.item) == null ? void 0 : u.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...e === "cutout" ? tl().filter((c) => Pc()) : []
    ];
    for (const c of o) {
      if (ve(c)) {
        const d = nn(c);
        if (!(d != null && d.visible)) continue;
        const m = Array.isArray(d.strokePaths) ? d.strokePaths : [];
        for (const _ of m) {
          const v = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
          if (!v.length) continue;
          if (_.closed && v.length >= 3 && rr(i, v)) return { item: c, geom: d };
          const x = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
          for (let k = 0; k < v.length - 1; k += 1)
            if (Yu(i, v[k], v[k + 1]) <= x * x) return { item: c, geom: d };
          if (v.length === 1 && gr(i, v[0]) <= x * x) return { item: c, geom: d };
        }
        continue;
      }
      if (Ae(c)) {
        const d = nn(c);
        if (!(d != null && d.visible)) continue;
        if (bh(c, d, i)) return { item: c, geom: d };
        continue;
      }
      const u = nn(c);
      if (u.visible && rr(i, u.corners))
        return { item: c, geom: u };
    }
    return null;
  }
  function es(i, o) {
    if (!i || !i.visible) return { kind: "none", cursor: g.mode === "pano" ? "grab" : "default" };
    if (i.kind === "strokeGroup") {
      const u = i.corners.findIndex((m) => gr(m, o) <= 121);
      if (u >= 0) {
        const m = i.corners[u], _ = m.x - i.center.x, v = m.y - i.center.y, x = _ * v >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: u, cursor: x };
      }
      const d = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const m of d) {
        const _ = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && _.length >= 3 && rr(o, _)) return { kind: "move", cursor: "default" };
        const v = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let x = 0; x < _.length - 1; x += 1)
          if (Yu(o, _[x], _[x + 1]) <= v * v) return { kind: "move", cursor: "default" };
      }
      return rr(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: g.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const u = i.corners.findIndex((d) => gr(d, o) <= 121);
      if (u >= 0) {
        const d = i.corners[u], m = d.x - i.center.x, _ = d.y - i.center.y, v = m * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: u, cursor: v };
      }
      return rr(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: g.mode === "pano" ? "grab" : "default" };
    }
    if (e === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const u = i.edgeMidpoints.find((d) => gr(d, o) <= 169);
      if (u) {
        const d = u.edge === "left" || u.edge === "right";
        return { kind: d ? "scale_x" : "scale_y", cursor: d ? "ew-resize" : "ns-resize", edge: u.edge, mid: u };
      }
    }
    const c = i.corners.findIndex((u) => gr(u, o) <= 121);
    if (c >= 0) {
      const u = i.corners[c], d = u.x - i.center.x, m = u.y - i.center.y, _ = d * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: _ };
    }
    return gr(i.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : rr(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: g.mode === "pano" ? "grab" : "default" };
  }
  function _l(i, o) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function Gp(i, o) {
    return !!i && !!o && Number(o.x) >= Number(i.x0) && Number(o.x) <= Number(i.x1) && Number(o.y) >= Number(i.y0) && Number(o.y) <= Number(i.y1);
  }
  function Kp(i, o) {
    if (!i || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((d) => Gp(i, d))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, u = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!rr({ x: c, y: u }, o.corners);
  }
  function ue(i) {
    if (Fp(), g.interaction) {
      g.interaction.kind === "paint_stroke" || g.interaction.kind === "paint_lasso_fill" ? C.style.cursor = "none" : g.interaction.kind === "view" || g.interaction.kind === "pan_frame" ? C.style.cursor = "grabbing" : g.interaction.kind === "move" || g.interaction.kind === "move_multi" || g.interaction.kind === "move_stroke_group" || g.interaction.kind === "move_raster_object" ? C.style.cursor = "move" : g.interaction.kind === "scale" || g.interaction.kind === "scale_x" || g.interaction.kind === "scale_y" || g.interaction.kind === "scale_raster_object" ? C.style.cursor = g.interaction.cursor || "nwse-resize" : g.interaction.kind === "rotate" ? C.style.cursor = "grabbing" : C.style.cursor = "default";
      return;
    }
    if (vl()) {
      C.style.cursor = "none";
      return;
    }
    if (g.mode === "frame" && g.primaryTool !== "cursor") {
      C.style.cursor = "default";
      return;
    }
    if (g.primaryTool === "cursor" && g.marqueeModifier) {
      C.style.cursor = "default";
      return;
    }
    const o = ee(), c = o ? nn(o) : null, u = o ? Zn(o) : !1, d = u ? { kind: "none", cursor: "default" } : es(c, i);
    if (!u && d.kind !== "none") {
      C.style.cursor = d.cursor;
      return;
    }
    if (g.primaryTool === "cursor" && bl(i)) {
      C.style.cursor = "default";
      return;
    }
    C.style.cursor = g.mode === "pano" ? "grab" : "default";
  }
  function Ut() {
    if (!lt) return;
    const i = ee(), o = gn();
    if (!i && o.length === 0 || g.interaction) {
      M.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const c = Qi(), u = Ry({
      type: e,
      selected: i,
      selectedItems: o,
      selectedKind: c,
      geom: o.length > 1 ? Fo(o) : nn(i),
      allLocked: Vo(o),
      selectedLocked: Zn(i),
      activeAspect: _i(i),
      cutoutAspectOpen: g.cutoutAspectOpen,
      isExternalSticker: Se,
      isStickerHidden: Pr,
      canRestoreSelectedToInitial: ch,
      iconSet: He
    });
    if (!u.visible) {
      M.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    M.selectionMenu = {
      visible: !0,
      left: u.left,
      top: u.top,
      items: u.items
    }, requestAnimationFrame(() => {
      var P, N, H;
      if (!lt || M.selectionMenu.visible !== !0) return;
      const d = lt.getBoundingClientRect(), m = Math.round(Number((d == null ? void 0 : d.width) || 0)) || 220, _ = Math.round(Number((d == null ? void 0 : d.height) || 0)) || 40, v = 14;
      let x = W((Number(((P = u.anchor) == null ? void 0 : P.minX) || 0) + Number(((N = u.anchor) == null ? void 0 : N.maxX) || 0)) * 0.5 - m * 0.5, v, C.width - m - v), k = Number(((H = u.anchor) == null ? void 0 : H.maxY) || 0) + 18;
      if (!Number.isFinite(x) || !Number.isFinite(k) || k + _ > C.height - v) {
        M.selectionMenu.visible = !1;
        return;
      }
      M.selectionMenu.left = x, M.selectionMenu.top = k;
    });
  }
  function ga() {
    S.timer && (clearTimeout(S.timer), S.timer = 0), S.target = null, M.tooltip.visible = !1, M.tooltip.text = "", M.tooltip.variant = "";
  }
  function Wp(i) {
    if (!xt || !i || !i.isConnected) return;
    const o = String(i.getAttribute("data-tip") || "").trim();
    if (!o) return;
    M.tooltip.text = o;
    const c = D.getBoundingClientRect(), u = i.getBoundingClientRect(), d = 8, m = xt.offsetWidth || 100, _ = xt.offsetHeight || 24, v = !!i.closest(".pano-floating-left"), x = !!i.closest(".pano-paint-footer") || !!i.closest(".pano-paint-color-float");
    let k = "", P = u.left - c.left + u.width * 0.5 - m * 0.5, N = u.top - c.top - _ - 8;
    if (v)
      k = "tool-rail", P = u.right - c.left + 10, N = u.top - c.top + u.height * 0.5 - _ * 0.5, P = W(P, d, Math.max(d, c.width - m - d)), N = W(N, d, Math.max(d, c.height - _ - d));
    else if (x) {
      k = "footer";
      const H = i.closest(".pano-paint-footer"), U = H ? H.getBoundingClientRect() : u;
      P = U.left - c.left + U.width * 0.5 - m * 0.5, N = U.bottom - c.top + 5, P = W(P, d, Math.max(d, c.width - m - d)), N = Math.max(d, N);
    }
    P = W(P, d, Math.max(d, c.width - m - d)), N = Math.max(d, N), M.tooltip.left = P, M.tooltip.top = N, M.tooltip.variant = k, M.tooltip.visible = !0;
  }
  const Me = Do({
    getView: () => ({ yaw: g.viewYaw, pitch: g.viewPitch, fov: g.viewFov }),
    setView: (i) => {
      g.viewYaw = $e(Number(i.yaw || 0)), g.viewPitch = W(Number(i.pitch || 0), -89.9, 89.9), g.viewFov = W(Number(i.fov || g.viewFov || 100), 35, 140);
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
        x: (i = p.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (o = p.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Jn,
    onInteraction: () => {
      At.backgroundDirty = !0, At.dirty = !0;
    }
  });
  C.onpointerdown = (i) => {
    const o = Er(i);
    if (ha(o, !0), g.viewTween = null, Me.state.inertia.active = !1, Me.state.inertia.vx = 0, Me.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), g.mode !== "frame") {
        const v = g.mode === "unwrap" ? o : da(i);
        g.interaction = { kind: "view", last: v, lastTs: performance.now() }, Me.startDrag(v.x, v.y, i.pointerId, performance.now());
      }
      ue(o), C.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (r) {
      if (g.mode === "pano") {
        const v = da(i);
        g.interaction = { kind: "view", last: v, lastTs: performance.now() }, Me.startDrag(v.x, v.y, i.pointerId, performance.now()), ue(o), C.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (at && !at.hidden)
      return;
    if ((g.primaryTool === "paint" || g.primaryTool === "mask") && (gl() || ml())) {
      const v = g.primaryTool === "mask" ? "mask" : "paint", x = g.primaryTool === "mask" ? g.maskTool : g.paintTool, k = { kind: "ERP_GLOBAL" }, P = yn(o, performance.now());
      g.interaction = {
        kind: x === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: v,
        _livePreviewToken: Vr("live"),
        stroke: x === "lasso_fill" ? zp(v, x, [P], k) : Hp(v, x, [P], k)
      }, si();
      const N = Vn();
      if (N)
        if (g.paintEngine.beginStroke(g.interaction.stroke, N), g.interaction.kind === "paint_stroke") {
          const H = g.paintEngine.ensureTarget(N), U = Number((P == null ? void 0 : P.u) ?? (P == null ? void 0 : P.x) ?? 0), X = Number((P == null ? void 0 : P.v) ?? (P == null ? void 0 : P.y) ?? 0);
          g.paintEngine.appendStrokePoint(H, U, X, g.interaction.stroke);
        } else
          g.paintEngine.updateActiveStroke(g.interaction.stroke, N);
      ue(o), C.setPointerCapture(i.pointerId), yt();
      return;
    }
    const c = gn(), u = ee(), d = c.length > 1 ? Fo(c) : u ? nn(u) : null;
    if (g.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      g.interaction = { kind: "marquee_select", start: o, current: o }, ue(o), C.setPointerCapture(i.pointerId), yt({ localOnly: !0 });
      return;
    }
    if (c.length > 1 && (d != null && d.visible)) {
      if ((c.some((x) => Zn(x)) ? { kind: "none" } : es(d, o)).kind === "move") {
        g.interaction = {
          kind: "move_multi",
          items: c.map((x) => x),
          offset: { x: o.x - d.center.x, y: o.y - d.center.y },
          startCenter: { x: d.center.x, y: d.center.y },
          stickerSnapshots: c.filter((x) => Ce(x)).map((x) => ({
            id: String(x.id || ""),
            yaw_deg: Number(x.yaw_deg || 0),
            pitch_deg: Number(x.pitch_deg || 0),
            center: (() => {
              var P, N;
              const k = nn(x);
              return k != null && k.visible ? { x: Number(((P = k.center) == null ? void 0 : P.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: c.filter((x) => ve(x)).map((x) => ({
            id: String(x.actionGroupId || x.id || ""),
            layerKind: String(x.layerKind || "paint"),
            snapshot: Ee(pn(x.actionGroupId, x.layerKind)),
            frameSnapshot: Ee(ye(x.actionGroupId, x.layerKind)),
            center: (() => {
              var P, N;
              const k = nn(x);
              return k != null && k.visible ? { x: Number(((P = k.center) == null ? void 0 : P.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Ro(x.actionGroupId, x.layerKind)
          })),
          rasterSnapshots: c.filter((x) => Ae(x)).map((x) => ({
            id: ht(x.rasterObjectId || x.id || ""),
            snapshot: Ee(Ye().find((k) => String((k == null ? void 0 : k.id) || "") === ht(x.rasterObjectId || x.id || ""))),
            center: (() => {
              var P, N;
              const k = nn(x);
              return k != null && k.visible ? { x: Number(((P = k.center) == null ? void 0 : P.x) || 0), y: Number(((N = k.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Kc(x)
          }))
        }, ue(o), C.setPointerCapture(i.pointerId);
        return;
      }
    } else if (u && (d != null && d.visible)) {
      const v = Zn(u) ? { kind: "none" } : es(d, o);
      if (v.kind === "scale") {
        g.interaction = ve(u) ? {
          kind: "scale_stroke_group",
          item: u,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          snapshot: Ee(pn(u.actionGroupId, u.layerKind)),
          frameSnapshot: Ee(ye(u.actionGroupId, u.layerKind)),
          cursor: v.cursor
        } : Ae(u) ? {
          kind: "scale_raster_object",
          item: u,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          snapshot: Ee(Ye().find((x) => String((x == null ? void 0 : x.id) || "") === ht(u.rasterObjectId || u.id || ""))),
          cursor: v.cursor
        } : {
          kind: "scale",
          item: u,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          startHFOV: Number(u.hFOV_deg || 20),
          startVFOV: Number(u.vFOV_deg || 20),
          cursor: v.cursor
        }, ue(o), C.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "scale_x" || v.kind === "scale_y") {
        g.interaction = {
          kind: v.kind,
          item: u,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          startHFOV: Number(u.hFOV_deg || 20),
          startVFOV: Number(u.vFOV_deg || 20),
          cursor: v.cursor,
          edge: v.edge
        }, ue(o), C.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "rotate") {
        g.interaction = ve(u) ? {
          kind: "rotate_stroke_group",
          item: u,
          center: d.center,
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x),
          snapshot: Ee(pn(u.actionGroupId, u.layerKind)),
          frameSnapshot: Ee(ye(u.actionGroupId, u.layerKind))
        } : {
          kind: "rotate",
          item: u,
          center: d.center,
          startRot: Number(u.rot_deg || u.roll_deg || 0),
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x)
        }, ue(o), C.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "move") {
        if (ve(u)) {
          const x = g.mode === "frame" ? (() => {
            const k = be();
            return k ? Hn(o, k, performance.now()) : null;
          })() : yn(o, performance.now());
          g.interaction = {
            kind: "move_stroke_group",
            item: u,
            startUv: x,
            snapshot: Ee(pn(u.actionGroupId, u.layerKind)),
            frameSnapshot: Ee(ye(u.actionGroupId, u.layerKind))
          }, ue(o), C.setPointerCapture(i.pointerId);
          return;
        }
        if (Ae(u)) {
          const x = g.mode === "frame" ? (() => {
            const k = be();
            return k ? Hn(o, k, performance.now()) : null;
          })() : yn(o, performance.now());
          g.interaction = {
            kind: "move_raster_object",
            item: u,
            startUv: x,
            snapshot: Ee(Ye().find((k) => String((k == null ? void 0 : k.id) || "") === ht(u.rasterObjectId || u.id || "")))
          }, ue(o), C.setPointerCapture(i.pointerId);
          return;
        }
        g.interaction = {
          kind: "move",
          item: u,
          offset: { x: o.x - d.center.x, y: o.y - d.center.y }
        }, ue(o), C.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = bl(o);
    if (m) {
      const v = g.selectedId !== m.item.id;
      if (v && g.selectedId && (se(), xn()), ta(m.item), e === "cutout" && v && (g.cutoutAspectOpen = !1), v && zt(), Ut(), yt(), Zn(m.item)) {
        ue(o);
        return;
      }
      g.interaction = {
        kind: ve(m.item) ? "move_stroke_group" : Ae(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: ve(m.item) || Ae(m.item) ? g.mode === "frame" ? (() => {
          const x = be();
          return x ? Hn(o, x, performance.now()) : null;
        })() : yn(o, performance.now()) : null,
        snapshot: ve(m.item) ? Ee(pn(m.item.actionGroupId, m.item.layerKind)) : Ae(m.item) ? Ee(Ye().find((x) => String((x == null ? void 0 : x.id) || "") === ht(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: ve(m.item) ? Ee(ye(m.item.actionGroupId, m.item.layerKind)) : null
      }, ue(o), C.setPointerCapture(i.pointerId);
      return;
    }
    const _ = !!g.selectedId;
    if (_ && (se(), xn()), ai(), _ && zt(), Ut(), yt(), g.mode === "pano") {
      const v = da(i);
      g.interaction = { kind: "view", last: v, lastTs: performance.now() }, Me.startDrag(v.x, v.y, i.pointerId, performance.now()), ue(o), C.setPointerCapture(i.pointerId);
    }
  }, C.onpointermove = (i) => {
    var u, d, m, _, v, x, k, P, N, H, U, X, z, q, nt, vt, rt, gt, It, Rt;
    const o = Er(i);
    if (ha(o, !0), !g.interaction) {
      ue(o);
      return;
    }
    ue(o);
    const c = g.interaction;
    if (c.kind === "paint_stroke") {
      const kt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let j = !1;
      kt.forEach((et) => {
        const bt = Er(et);
        $p(c, bt, performance.now()) && (j = !0);
      }), j && yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "paint_lasso_fill") {
      const kt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let j = !1;
      if (kt.forEach((et) => {
        const bt = Er(et);
        jp(c, bt, performance.now()) && (j = !0);
      }), j) {
        const et = Vn();
        et && g.paintEngine.updateActiveStroke(c.stroke, et), yt({ localOnly: !0 });
      }
      return;
    }
    if (c.kind === "view") {
      const kt = performance.now(), j = g.mode === "unwrap" ? o : da(i);
      Me.moveDrag(j.x, j.y, g.mode === "unwrap" ? "unwrap" : "pano", kt), c.lastTs = kt, c.last = j, yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "pan_frame") {
      g.frameView.panX += o.x - c.last.x, g.frameView.panY += o.y - c.last.y, c.last = o, yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "move") {
      const kt = o.x - c.offset.x, j = o.y - c.offset.y;
      if (g.mode === "frame" && e === "cutout")
        return;
      if (g.mode === "unwrap") {
        const et = Jn(), bt = W((kt - et.x) / Math.max(et.w, 1), 0, 1), Nt = W((j - et.y) / Math.max(et.h, 1), 0, 1);
        c.item.yaw_deg = $e(bt * 360 - 180), c.item.pitch_deg = W(90 - Nt * 180, -90, 90);
      } else {
        const et = jo(kt, j), bt = Wu(et);
        c.item.yaw_deg = bt.yaw, c.item.pitch_deg = bt.pitch;
      }
      Ce(c.item) && rn(), yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "move_stroke_group") {
      const kt = g.mode === "frame" ? (() => {
        const bt = be();
        return bt ? Hn(o, bt, performance.now()) : null;
      })() : yn(o, performance.now());
      if (!kt || !c.startUv) return;
      const j = ln(Number(kt.u || 0), Number(c.startUv.u || 0)), et = Number(kt.v || 0) - Number(c.startUv.v || 0);
      Cc((u = c.item) == null ? void 0 : u.actionGroupId, j, et, c.snapshot, (d = c.item) == null ? void 0 : d.layerKind, c.frameSnapshot) && (mn({ rebuildPaintEngine: !1 }), yt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_raster_object") {
      const kt = g.mode === "frame" ? (() => {
        const bt = be();
        return bt ? Hn(o, bt, performance.now()) : null;
      })() : yn(o, performance.now());
      if (!kt || !c.startUv) return;
      const j = ln(Number(kt.u || 0), Number(c.startUv.u || 0)), et = Number(kt.v || 0) - Number(c.startUv.v || 0);
      Ic(((m = c.item) == null ? void 0 : m.rasterObjectId) || ((_ = c.item) == null ? void 0 : _.id) || "", j, et, c.snapshot) && (Ir(), yt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_raster_object") {
      const j = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      Xd(((v = c.item) == null ? void 0 : v.rasterObjectId) || ((x = c.item) == null ? void 0 : x.id) || "", j, c.snapshot) && (Ir(), yt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_multi") {
      const kt = o.x - Number(((k = c.offset) == null ? void 0 : k.x) || 0), j = o.y - Number(((P = c.offset) == null ? void 0 : P.y) || 0);
      let et = !1, bt = !1, Nt = !1;
      const $t = kt - Number(((N = c.startCenter) == null ? void 0 : N.x) || kt), Ht = j - Number(((H = c.startCenter) == null ? void 0 : H.y) || j);
      for (const Vt of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
        const Yt = (e === "cutout" ? Oo() : J()).find((ne) => String((ne == null ? void 0 : ne.id) || "") === String(Vt.id || ""));
        if (!Yt || !Ce(Yt)) continue;
        const Bt = {
          x: Number(((U = Vt.center) == null ? void 0 : U.x) || 0) + $t,
          y: Number(((X = Vt.center) == null ? void 0 : X.y) || 0) + Ht
        };
        if (!(g.mode === "frame" && e === "cutout")) {
          if (g.mode === "unwrap") {
            const ne = Jn(), Xe = W((Bt.x - ne.x) / Math.max(ne.w, 1), 0, 1), fi = W((Bt.y - ne.y) / Math.max(ne.h, 1), 0, 1);
            Yt.yaw_deg = $e(Xe * 360 - 180), Yt.pitch_deg = W(90 - fi * 180, -90, 90);
          } else {
            const ne = jo(Bt.x, Bt.y), Xe = Wu(ne);
            Yt.yaw_deg = Xe.yaw, Yt.pitch_deg = Xe.pitch;
          }
          et = !0;
        }
      }
      for (const Vt of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
        const Yt = {
          x: Number(((z = Vt.center) == null ? void 0 : z.x) || 0) + $t,
          y: Number(((q = Vt.center) == null ? void 0 : q.y) || 0) + Ht
        }, Bt = g.mode === "frame" ? (() => {
          const Xe = be();
          return Xe ? Hn(Yt, Xe, performance.now()) : null;
        })() : yn(Yt, performance.now()), ne = Vt.centerUv || null;
        if (Bt && ne) {
          const Xe = ln(Number(Bt.u || 0), Number(ne.u || 0)), fi = Number(Bt.v || 0) - Number(ne.v || 0);
          Cc(Vt.id, Xe, fi, Vt.snapshot, Vt.layerKind, Vt.frameSnapshot) && (et = !0, bt = !0);
        }
      }
      for (const Vt of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
        const Yt = {
          x: Number(((nt = Vt.center) == null ? void 0 : nt.x) || 0) + $t,
          y: Number(((vt = Vt.center) == null ? void 0 : vt.y) || 0) + Ht
        }, Bt = g.mode === "frame" ? (() => {
          const Xe = be();
          return Xe ? Hn(Yt, Xe, performance.now()) : null;
        })() : yn(Yt, performance.now()), ne = Vt.centerUv || null;
        if (Bt && ne) {
          const Xe = ln(Number(Bt.u || 0), Number(ne.u || 0)), fi = Number(Bt.v || 0) - Number(ne.v || 0);
          Ic(Vt.id, Xe, fi, Vt.snapshot) && (et = !0, Nt = !0);
        }
      }
      et && (bt ? mn({ rebuildPaintEngine: !1 }) : Nt ? Ir() : rn(), yt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_stroke_group") {
      const j = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      Ac((rt = c.item) == null ? void 0 : rt.actionGroupId, j, 0, c.snapshot, (gt = c.item) == null ? void 0 : gt.layerKind, c.frameSnapshot) && (mn({ rebuildPaintEngine: !1 }), yt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "rotate_stroke_group") {
      let kt = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - Number(c.startAng || 0)) * mr;
      i.shiftKey && (kt = Math.round(kt / 45) * 45), Ac((It = c.item) == null ? void 0 : It.actionGroupId, 1, kt, c.snapshot, (Rt = c.item) == null ? void 0 : Rt.layerKind, c.frameSnapshot) && (mn({ rebuildPaintEngine: !1 }), yt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "marquee_select") {
      c.current = o, yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale") {
      const j = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = W(c.startHFOV * j, 1, 179), c.item.vFOV_deg = W(c.startVFOV * j, 1, 179), c.item.aspect_id = yr(c.item), yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_x") {
      const j = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = W(c.startHFOV * j, 1, 179), c.item.aspect_id = yr(c.item), yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_y") {
      const j = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.vFOV_deg = W(c.startVFOV * j, 1, 179), c.item.aspect_id = yr(c.item), yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "rotate") {
      let j = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - c.startAng) * mr, et = c.startRot - j;
      i.shiftKey && (et = Math.round(et / 45) * 45);
      const bt = Ce(c.item) ? "rot_deg" : "roll_deg";
      c.item[bt] = et, yt({ localOnly: !0 });
    }
  }, C.onpointerup = () => {
    var o, c, u, d, m, _;
    const i = g.interaction;
    if (((o = g.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = g.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill")
      if (si(), Bp(g.interaction)) {
        mn();
        const v = String(((u = g.interaction.stroke) == null ? void 0 : u.actionGroupId) || "").trim();
        if (v) {
          const k = tt().find((P) => String((P == null ? void 0 : P.actionGroupId) || "") === v);
          k && (k.frame = null);
        }
        const x = Vn();
        x && (String(((d = g.interaction.stroke) == null ? void 0 : d.toolKind) || "") === "eraser" ? (g.paintEngine.cancelActiveStroke(x), nl()) : g.paintEngine.commitActiveStroke(g.interaction.stroke, x)), se(), xn(), zt(), Ut(), t.setDirtyCanvas(!0, !0), yt();
      } else {
        const v = Vn();
        v && g.paintEngine.cancelActiveStroke(v);
      }
    else if (((m = g.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const v = _l(g.interaction.start, g.interaction.current), k = [
        ...e === "cutout" ? tl().filter((P) => !0) : [...J()],
        ...Fe(),
        ...cn()
      ].filter((P) => Kp(v, nn(P)));
      th(k, ((_ = k[k.length - 1]) == null ? void 0 : _.id) || null), e === "cutout" && k.length && (g.cutoutAspectOpen = !1), zt(), Ut(), yt();
    } else if (g.interaction && g.interaction.kind !== "view" && g.interaction.kind !== "pan_frame") {
      let v = !1;
      (g.interaction.kind === "move_stroke_group" || g.interaction.kind === "scale_stroke_group" || g.interaction.kind === "rotate_stroke_group") && (v = !0), (g.interaction.kind === "move_raster_object" || g.interaction.kind === "scale_raster_object") && (v = !0), g.interaction.kind === "move_multi" && Array.isArray(g.interaction.strokeSnapshots) && g.interaction.strokeSnapshots.length && (v = !0), g.interaction.kind === "move_multi" && Array.isArray(g.interaction.rasterSnapshots) && g.interaction.rasterSnapshots.length && (v = !0), v && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(g.interaction.kind) || g.interaction.kind === "move_multi" && Array.isArray(g.interaction.strokeSnapshots) && g.interaction.strokeSnapshots.length ? mn({ rebuildPaintEngine: !0 }) : Ir()), se(), xn(), t.setDirtyCanvas(!0, !0), ts(), g.hqFrames = 1, Ut(), yt();
    }
    g.interaction = null, si(), i && i.kind === "view" && Me.endDrag(performance.now()), ea(), Ut(), ue(g.pointerPos), yt();
  }, C.onpointercancel = () => {
    var i, o, c;
    if (((i = g.interaction) == null ? void 0 : i.kind) === "view" && Me.endDrag(performance.now()), ((o = g.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = g.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
      si();
      const u = Vn();
      u && g.paintEngine.cancelActiveStroke(u);
    }
    g.interaction = null, si(), ea(), ue(g.pointerPos), yt({ localOnly: !0 });
  }, C.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, C.onmousemove = (i) => {
    const o = Er(i);
    ha(o, !0), !g.interaction && ue(o);
  }, C.onmouseleave = () => {
    ha(g.pointerPos, !1), ue(g.pointerPos);
  }, C.onwheel = (i) => {
    if (g.mode === "frame") {
      Er(i), i.deltaY < 0 || 1 / 1.1, Lp() && yt({ localOnly: !0 }), i.preventDefault();
      return;
    }
    g.mode === "pano" && (Me.applyWheelEvent(i) && yt({ localOnly: !0 }), i.preventDefault());
  }, C.ondragover = (i) => {
    e !== "stickers" && e !== "cutout" || r || (i.preventDefault(), B(!0));
  }, C.ondrop = (i) => {
    var u;
    if (e !== "stickers" && e !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), I.depth = 0, B(!1);
    const c = Array.from(((u = i.dataTransfer) == null ? void 0 : u.files) || []).find((d) => ua(d));
    c && ll(c);
  };
  const xl = (i) => {
    e !== "stickers" && e !== "cutout" || r || K(i) && (I.depth += 1, B(!0), i.preventDefault());
  }, wl = (i) => {
    e !== "stickers" && e !== "cutout" || r || (!I.active && K(i) && B(!0), I.active && i.preventDefault());
  }, Sl = (i) => {
    if (e !== "stickers" && e !== "cutout" || r || !I.active) return;
    I.depth = Math.max(0, I.depth - 1);
    const o = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (I.depth === 0 || o) && B(!1);
  }, Ml = (i) => {
    e !== "stickers" && e !== "cutout" || r || (I.depth = 0, B(!1), K(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", xl, !0), window.addEventListener("dragover", wl, !0), window.addEventListener("dragleave", Sl, !0), window.addEventListener("drop", Ml, !0);
  function ns() {
    const { canUndo: i, canRedo: o } = cl();
    bi(M.toolButtons, "value", "undo", { disabled: !i }), bi(M.toolButtons, "value", "redo", { disabled: !o });
  }
  const kl = (i, o, c = !1) => {
    var v;
    const u = ee(), d = Qi();
    if (!u || d === "stroke") return;
    const m = (((v = M.sidePanel) == null ? void 0 : v.params) || []).find((x) => x.key === i);
    if (!m || m.enabled === !1) return;
    let _ = Number(o);
    Number.isNaN(_) && (_ = 0), _ = W(_, Number(m.min), Number(m.max)), i === "yaw_deg" && (_ = $e(_)), u[i] = _, e === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (u.aspect_id = yr(u)), zt(), yt(), c && se();
  };
  V == null || V.addEventListener("click", async (i) => {
    var u, d, m, _, v, x, k, P, N, H, U;
    const o = i.target.closest("[data-action]");
    if (!o) return;
    const c = String(o.getAttribute("data-action") || "");
    if (c === "coverage-set") {
      const X = Qe(o.getAttribute("data-coverage"));
      if (X === Qe(p.coverage)) return;
      p.coverage = X, g.coverage = X, h && (h.value = String(X), (u = h.callback) == null || u.call(h, h.value)), s ? At.backgroundDirty = !0 : (he(), (d = t.setDirtyCanvas) == null || d.call(t, !0, !0)), zt(), Ut(), yt();
      return;
    }
    if (c === "toggle-selection-picker") {
      if ((_ = (m = M.sidePanel) == null ? void 0 : m.selectionPicker) != null && _.disabled) return;
      M.sidePanel.selectionPicker.open = !M.sidePanel.selectionPicker.open;
      return;
    }
    if (c === "select-picker-item") {
      M.sidePanel.selectionPicker.open = !1;
      const X = String(o.getAttribute("data-selection-id") || "");
      let z = null;
      X && (e === "stickers" ? z = J().find((q) => String((q == null ? void 0 : q.id) || "") === X) || null : z = ((v = Ec().find((q) => {
        var nt;
        return String(((nt = q == null ? void 0 : q.item) == null ? void 0 : nt.id) || "") === X;
      })) == null ? void 0 : v.item) || null), ta(z || null), z && !ve(z) && G(
        $e(Number(z.yaw_deg || 0)),
        W(Number(z.pitch_deg || 0), -89.9, 89.9),
        g.viewFov
      ), zt(), Ut(), yt();
      return;
    }
    if (c === "copy-state-inline") {
      const X = ee(), z = Qi();
      if (!X || z === "stroke" || gn().length > 1) return;
      const q = JSON.stringify(e === "cutout" && z !== "image" ? Fc(X) : dh(X));
      try {
        await navigator.clipboard.writeText(q), (x = M.sidePanel) != null && x.copyStateButton && (M.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var nt;
          (nt = M.sidePanel) != null && nt.copyStateButton && (M.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (c === "toggle-visibility") {
      const X = String(o.getAttribute("data-visibility") || "");
      X === "panorama" ? g.showPanorama = !g.showPanorama : X === "objects" ? g.showObjects = !g.showObjects : X === "mask" && (g.showMask = !g.showMask), zt(), yt();
      return;
    }
    if (c === "set-invert-x") {
      p.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", fa(), zt(), (k = t.setDirtyCanvas) == null || k.call(t, !0, !0), yt();
      return;
    }
    if (c === "set-invert-y") {
      p.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", fa(), zt(), (P = t.setDirtyCanvas) == null || P.call(t, !0, !0), yt();
      return;
    }
    if (c === "toggle-quality-picker") {
      (N = M.sidePanel) != null && N.uiSettings && (M.sidePanel.uiSettings.qualityOpen = !M.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (c === "set-quality") {
      const X = String(o.getAttribute("data-quality") || "balanced");
      p.ui_settings.preview_quality = X === "draft" || X === "high" ? X : "balanced", fa(), zt(), (H = t.setDirtyCanvas) == null || H.call(t, !0, !0), yt();
      return;
    }
    if (c === "ui-reset-defaults") {
      p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", fa(), zt(), (U = t.setDirtyCanvas) == null || U.call(t, !0, !0), yt();
      return;
    }
    if (c === "close-preview") {
      Tr();
      return;
    }
    if (c === "cancel-close") {
      Tr();
      return;
    }
    c === "save-close" && (Tp(), Tr());
  }), V == null || V.addEventListener("input", (i) => {
    const o = i.target.closest("[data-action='param-input']");
    o && kl(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), V == null || V.addEventListener("change", (i) => {
    const o = i.target.closest("[data-action='param-input']");
    o && kl(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const rs = () => {
    const i = !!g.showGrid;
    bi(M.floatingButtons, "action", "toggle-grid", {
      icon: i ? He.eye : He.eye_dashed,
      pressed: i ? "true" : "false",
      label: i ? "Hide Grid" : "Show Grid",
      tip: i ? "Hide grid" : "Show grid"
    });
  };
  rs(), O.addEventListener("click", (i) => {
    var v, x, k, P;
    if ((x = (v = i.target) == null ? void 0 : v.matches) != null && x.call(v, "[data-confirm-overlay]")) {
      const N = (k = M.confirmDialog) == null ? void 0 : k.resolve;
      M.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, N == null || N(!1);
      return;
    }
    const o = i.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      g.mode = String(o.getAttribute("data-view") || "pano"), e === "cutout" && g.mode === "frame" && ee() && Pc(ee()), pl(), ea(), yt();
      return;
    }
    const c = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (c && !r) {
      if (c.matches("[data-tool-mode]")) {
        const N = String(c.getAttribute("data-tool-mode") || "cursor");
        g.primaryTool = N, (N === "paint" || N === "mask") && ai({ preservePanelValues: !0 }), qe(), zt(), Ut(), yt();
        return;
      }
      if (c.matches("[data-tool-ui-action]")) {
        const N = String(c.getAttribute("data-tool-ui-action") || "");
        if ((N === "undo" || N === "redo") && c.disabled) return;
        N === "undo" ? Qo(-1) : N === "redo" ? Qo(1) : N === "clear" ? Np() : (N === "add" || N === "add-image") && _p();
        return;
      }
      if (c.matches("[data-paint-tool]")) {
        g.primaryTool = "paint";
        const N = String(c.getAttribute("data-paint-tool") || "pen");
        g.paintTool = N, ai({ preservePanelValues: !0 }), Ze[N] && (g.activeBrushPresetId = N), qe(), zt(), Ut(), yt();
        return;
      }
      if (c.matches("[data-mask-tool]")) {
        g.primaryTool = "mask", g.maskTool = String(c.getAttribute("data-mask-tool") || "pen"), ai({ preservePanelValues: !0 }), qe(), zt(), Ut(), yt();
        return;
      }
      if (c.matches("[data-paint-layer-clear-current]")) {
        const N = String(c.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Pp(N);
        return;
      }
      if (c.matches("[data-paint-color-swatch]")) {
        const N = Ya.find((H) => H.id === c.getAttribute("data-paint-color-swatch"));
        if (!N) return;
        g.paintColor = an(N.color), Dt(!0), qe();
        return;
      }
      if (c.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), at && !at.hidden ? Dt(!0) : ie(), qe();
        return;
      }
    }
    const u = String(((P = c == null ? void 0 : c.getAttribute) == null ? void 0 : P.call(c, "data-action")) || "");
    if (!r) {
      if (u === "aspect") {
        g.cutoutAspectOpen = !g.cutoutAspectOpen, g.menuSize.measured = !1, Ut(), yt();
        return;
      }
      if (u === "aspect-set") {
        const N = ee();
        if (!N) return;
        const H = String(c.getAttribute("data-aspect") || "1:1");
        Ap(N, H), g.cutoutAspectOpen = !1, g.menuSize.measured = !1, ts(), se(), he(), Ut(), yt();
        return;
      }
      if (u === "rotate-90") {
        const N = ee();
        if (!N) return;
        Ip(N), g.cutoutAspectOpen = !1, g.menuSize.measured = !1, ts(), se(), he(), Ut(), yt();
        return;
      }
      if (u === "bring-front") {
        Ep();
        return;
      }
      if (u === "send-back") {
        Dp();
        return;
      }
      if (u === "duplicate") {
        Cp();
        return;
      }
      if (u === "replace-image") {
        wp();
        return;
      }
      if (u === "toggle-lock") {
        Qd();
        return;
      }
      if (u === "back-initial") {
        oh();
        return;
      }
      if (u === "toggle-visible") {
        ah();
        return;
      }
      if (u === "delete") {
        dl();
        return;
      }
    }
    if (u === "reset-view") {
      G(0, 0, 100, 180, 680);
      return;
    }
    if (u === "toggle-grid") {
      g.showGrid = !g.showGrid, Ub(t == null ? void 0 : t.id, g.showGrid), rs(), yt();
      return;
    }
    if (u === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), Xp();
      return;
    }
    if (u === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const N = !g.outputPreviewExpanded;
      g.outputPreviewExpanded = N, g.outputPreviewAnimFrom = g.outputPreviewAnim, g.outputPreviewAnimTo = N ? 1 : 0, g.outputPreviewAnimStartTs = performance.now(), Il(), yt();
      return;
    }
    const d = i.target.closest("[data-paint-history-index]");
    if (!d) return;
    const m = Number(d.getAttribute("data-paint-history-index")), _ = g.customPaintHistory[m];
    _ && (g.customPaintColor = an(_), g.paintColor = an(_), qe());
  }), O.addEventListener("input", (i) => {
    const o = i.target.closest("[data-paint-size-slider]");
    if (o) {
      if (o.disabled) return;
      const u = Math.max(1, Math.min(120, Math.round(Number(o.value)))), d = tr(g.primaryTool === "paint" ? g.paintTool : g.maskTool);
      g.brushSizes[d] = u, qe(), Vp();
      return;
    }
    const c = i.target.closest("[data-paint-alpha-slider]");
    if (c) {
      const u = { ...g.customPaintColor, a: W(Number(c.value) / 100, 0, 1) };
      g.customPaintColor = an(u), g.paintColor = an(u), qe();
    }
  }), O.addEventListener("change", (i) => {
    i.target.closest("[data-paint-size-slider]") && pa();
  }), O.addEventListener("pointerup", (i) => {
    i.target.closest("[data-paint-size-slider]") && pa();
  }), O.addEventListener("pointercancel", (i) => {
    i.target.closest("[data-paint-size-slider]") && pa();
  }), O.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && pa();
  }), O.addEventListener("pointerover", (i) => {
    const o = i.target.closest("[data-tip]");
    !o || !O.contains(o) || S.target !== o && (S.target = o, S.timer && clearTimeout(S.timer), S.timer = window.setTimeout(() => {
      S.target === o && Wp(o);
    }, 220));
  }), O.addEventListener("pointerout", (i) => {
    var u, d;
    const o = i.target.closest("[data-tip]");
    !o || S.target !== o || (i.relatedTarget instanceof Element ? (d = (u = i.relatedTarget).closest) == null ? void 0 : d.call(u, "[data-tip]") : null) === o || ga();
  }), O.addEventListener("pointerdown", () => {
    ga();
  });
  const Yp = (i, o) => {
    var v;
    if (!Z) return;
    const c = Z.getBoundingClientRect(), u = W((i - c.left) / Math.max(1, c.width), 0, 1), d = 1 - W((o - c.top) / Math.max(1, c.height), 0, 1), m = As(g.customPaintColor), _ = { ...Cs(m.h, u, d), a: Number(((v = g.customPaintColor) == null ? void 0 : v.a) ?? 1) };
    g.customPaintColor = an(_), g.paintColor = an(_), qe();
  }, qp = (i) => {
    var m;
    if (!pt) return;
    const o = pt.getBoundingClientRect(), c = W((i - o.left) / Math.max(1, o.width), 0, 1), u = As(g.customPaintColor), d = { ...Cs(c, u.s, u.v), a: Number(((m = g.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    g.customPaintColor = an(d), g.paintColor = an(d), qe();
  }, Nl = (i, o) => {
    const c = i.pointerId;
    o(i);
    const u = (m) => {
      m.pointerId === c && o(m);
    }, d = (m) => {
      m.pointerId === c && (window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d));
    };
    window.addEventListener("pointermove", u), window.addEventListener("pointerup", d), window.addEventListener("pointercancel", d);
  };
  Z && (Z.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Nl(i, (o) => Yp(o.clientX, o.clientY));
  }), pt && (pt.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Nl(i, (o) => qp(o.clientX));
  }), O.addEventListener("click", (i) => {
    var d;
    const o = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const c = o.getAttribute("data-action") === "confirm-accept", u = (d = M.confirmDialog) == null ? void 0 : d.resolve;
    M.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, u == null || u(c);
  });
  const Pl = () => {
    const i = !!g.fullscreen;
    bi(M.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? He.fullscreen_close : He.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, ma = (i) => {
    const o = !!i;
    g.fullscreen !== o && (g.fullscreen = o, O.classList.toggle("pano-modal-fullscreen", o), o ? (g.fullscreenPrevShowGrid = !!g.showGrid, g.showGrid = !1) : g.fullscreenPrevShowGrid !== null && (g.showGrid = !!g.fullscreenPrevShowGrid, g.fullscreenPrevShowGrid = null), rs(), Pl(), yt());
  }, Cl = () => document.fullscreenElement === R, Xp = async () => {
    var i, o;
    try {
      if (!document.fullscreenEnabled) {
        ma(!g.fullscreen);
        return;
      }
      Cl() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((i = R.requestFullscreen) == null ? void 0 : i.call(R));
    } catch {
      ma(!g.fullscreen);
    }
  }, Al = () => {
    document.fullscreenEnabled && ma(Cl());
  };
  document.addEventListener("fullscreenchange", Al), Pl();
  const Il = () => {
    const i = !!g.outputPreviewExpanded;
    M.outputPreviewToggle.icon = i ? He.fullscreen_close : He.fullscreen, M.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", M.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Il();
  const is = t.onExecuted, as = t.onConnectionsChange;
  let os = null, ss = null, cs = null;
  !r && e === "stickers" && (cs = (i = "sync") => {
    Vc(i);
  }, t.__panoExternalStickerSync = cs, os = function(...o) {
    var c;
    typeof is == "function" && is.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "executed");
  }, t.onExecuted = os, ss = function(...o) {
    var c;
    typeof as == "function" && as.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "connections");
  }, t.onConnectionsChange = ss), r || (Zs.set(String(t.id ?? "0"), () => Ko()), Ph() && Ko());
  const Tr = () => {
    var i, o, c, u, d, m, _, v, x;
    Zs.delete(String(t.id ?? "0")), r || Ko(), document.fullscreenElement === R && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Al), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (c = (o = t.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || c.call(o), (d = (u = t.graph) == null ? void 0 : u.setDirtyCanvas) == null || d.call(u, !0, !0), (v = (_ = (m = dn) == null ? void 0 : m.canvas) == null ? void 0 : _.setDirty) == null || v.call(_, !0, !0), ga(), bp(), (x = wt == null ? void 0 : wt.dispose) == null || x.call(wt), B(!1), window.removeEventListener("keydown", El, !0), window.removeEventListener("keydown", Dl, !0), window.removeEventListener("keydown", ya, !0), window.removeEventListener("keyup", ya, !0), window.removeEventListener("keydown", Tl, !0), window.removeEventListener("dragenter", xl, !0), window.removeEventListener("dragover", wl, !0), window.removeEventListener("dragleave", Sl, !0), window.removeEventListener("drop", Ml, !0), !r && e === "stickers" && (t.onExecuted === os && (t.onExecuted = is), t.onConnectionsChange === ss && (t.onConnectionsChange = as), t.__panoExternalStickerSync === cs && (t.__panoExternalStickerSync = null)), L.unmount(), E.remove();
  }, El = (i) => {
    var o, c, u, d;
    if (i.key === "Escape") {
      if (g.fullscreen && document.fullscreenElement === R) {
        i.preventDefault(), i.stopPropagation(), (o = i.stopImmediatePropagation) == null || o.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (g.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (u = i.stopImmediatePropagation) == null || u.call(i), ma(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (d = i.stopImmediatePropagation) == null || d.call(i), Tr();
    }
  }, Dl = (i) => {
    const o = String(i.key || ""), c = String(i.code || ""), u = Number(i.keyCode || 0);
    if (!(o === "Delete" || c === "Delete" || u === 46) && !(o === "Backspace" || c === "Backspace" || u === 8)) return;
    const _ = i.target, v = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    v === "INPUT" || v === "TEXTAREA" || _ != null && _.isContentEditable || !ee() || (dl(), i.preventDefault(), i.stopPropagation());
  }, ya = (i) => {
    const o = !!(i.ctrlKey || i.metaKey);
    g.marqueeModifier !== o && (g.marqueeModifier = o, ue(g.pointerPos));
  }, Tl = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const o = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (o !== "z" && c !== "KeyZ") return;
    const u = i.target, d = ((u == null ? void 0 : u.tagName) || "").toUpperCase();
    if (d === "INPUT" || d === "TEXTAREA" || u != null && u.isContentEditable) return;
    const { canUndo: m, canRedo: _ } = cl();
    i.shiftKey && !_ || !i.shiftKey && !m || (Qo(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", El, !0), window.addEventListener("keydown", Dl, !0), window.addEventListener("keydown", ya, !0), window.addEventListener("keyup", ya, !0), window.addEventListener("keydown", Tl, !0), R.addEventListener("pointerdown", (i) => {
    i.target === R && Tr();
  }), !r && e === "stickers" && Vc("open"), Sp(), se(), ns(), qe(), zt(), zo(), sl(), ue(g.pointerPos), yt(), At.rafId = requestAnimationFrame(Jo);
}
function tf(t, e, n, r) {
  if (!(t != null && t.prototype)) return;
  const a = (y) => {
    var b, p;
    try {
      (b = y.__panoDomRestore) == null || b.call(y);
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
    const b = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === b) return;
    a(y), n === "PanoramaStickers" && Xb(y), Nc(y), Jb(y, mo);
    const w = fn(y, mo);
    if (w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const L = w.callback;
      w.callback = (R) => {
        var C;
        const O = L ? L(R) : void 0;
        return (C = y.setDirtyCanvas) == null || C.call(y, !0, !1), O;
      };
    }
    const M = fn(y, "bg_color");
    if (M && (M.value == null || String(M.value).trim() === "" || String(M.value).toLowerCase() === "#000000") && (M.value = "#00ff00", (E = M.callback) == null || E.call(M, "#00ff00")), n === "PanoramaStickers") {
      Qs(y, r, () => Vi(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = b;
        return;
      }
    }
    Qs(y, r, () => Vi(y, "cutout")), _y(y, {
      buttonText: r,
      onOpen: () => Vi(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = b;
  }
  const l = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const y = l ? l.apply(this, arguments) : void 0;
    return s(this), y;
  };
  const f = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const y = f ? f.apply(this, arguments) : void 0;
    return this.widgets && s(this), y;
  };
  const h = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const y = h ? h.apply(this, arguments) : void 0;
    return this.widgets && s(this), y;
  };
}
function u_(t) {
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
function f_(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const r = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), a = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = a, !r && a < 40) {
      requestAnimationFrame(e);
      return;
    }
    Nc(t), Qs(t, "Open Preview", () => Vi(t, "stickers", { readOnly: !0, hideSidebar: !1 })), by(t, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (s) => Vi(s, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), t.__panoStandaloneInstallDone = !0, t.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(e);
}
dn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  async beforeQueuePrompt() {
    const t = [...Zs.values()].map((r) => {
      try {
        return typeof r == "function" ? r() : null;
      } catch {
        return null;
      }
    }).filter(Boolean);
    t.length > 0 && await Promise.allSettled(t);
    const e = [...Mi.values()];
    e.length > 0 && await Promise.allSettled(e);
    const n = [...ki.values()];
    n.length > 0 && await Promise.allSettled(n);
  },
  beforeRegisterNodeDef(t, e) {
    const n = String((e == null ? void 0 : e.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && tf(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && tf(t, e, "PanoramaCutout", "Open Cutout Editor"), Bs(n) && u_(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    Nc(t), Bs(e) && f_(t);
  }
});
