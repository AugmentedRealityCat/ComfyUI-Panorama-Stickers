import * as Va from "../../scripts/app.js";
import { app as pn } from "../../scripts/app.js";
import { api as Ke } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function nc(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const te = {}, Gr = [], Rn = () => {
}, af = () => !1, bo = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), _o = (t) => t.startsWith("onUpdate:"), Oe = Object.assign, rc = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Qp = Object.prototype.hasOwnProperty, Yt = (t, e) => Qp.call(t, e), Ot = Array.isArray, Kr = (t) => Wi(t) === "[object Map]", of = (t) => Wi(t) === "[object Set]", Fl = (t) => Wi(t) === "[object Date]", Ht = (t) => typeof t == "function", ve = (t) => typeof t == "string", On = (t) => typeof t == "symbol", Jt = (t) => t !== null && typeof t == "object", sf = (t) => (Jt(t) || Ht(t)) && Ht(t.then) && Ht(t.catch), cf = Object.prototype.toString, Wi = (t) => cf.call(t), tg = (t) => Wi(t).slice(8, -1), lf = (t) => Wi(t) === "[object Object]", ic = (t) => ve(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ni = /* @__PURE__ */ nc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), xo = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, eg = /-\w/g, We = xo(
  (t) => t.replace(eg, (e) => e.slice(1).toUpperCase())
), ng = /\B([A-Z])/g, Pr = xo(
  (t) => t.replace(ng, "-$1").toLowerCase()
), wo = xo((t) => t.charAt(0).toUpperCase() + t.slice(1)), ls = xo(
  (t) => t ? `on${wo(t)}` : ""
), Dn = (t, e) => !Object.is(t, e), us = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, uf = (t, e, n, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, rg = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Vl;
const So = () => Vl || (Vl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ue(t) {
  if (Ot(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], a = ve(r) ? sg(r) : Ue(r);
      if (a)
        for (const s in a)
          e[s] = a[s];
    }
    return e;
  } else if (ve(t) || Jt(t))
    return t;
}
const ig = /;(?![^(]*\))/g, ag = /:([^]+)/, og = /\/\*[^]*?\*\//g;
function sg(t) {
  const e = {};
  return t.replace(og, "").split(ig).forEach((n) => {
    if (n) {
      const r = n.split(ag);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function be(t) {
  let e = "";
  if (ve(t))
    e = t;
  else if (Ot(t))
    for (let n = 0; n < t.length; n++) {
      const r = be(t[n]);
      r && (e += r + " ");
    }
  else if (Jt(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const cg = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", lg = /* @__PURE__ */ nc(cg);
function ff(t) {
  return !!t || t === "";
}
function ug(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = ac(t[r], e[r]);
  return n;
}
function ac(t, e) {
  if (t === e) return !0;
  let n = Fl(t), r = Fl(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = On(t), r = On(e), n || r)
    return t === e;
  if (n = Ot(t), r = Ot(e), n || r)
    return n && r ? ug(t, e) : !1;
  if (n = Jt(t), r = Jt(e), n || r) {
    if (!n || !r)
      return !1;
    const a = Object.keys(t).length, s = Object.keys(e).length;
    if (a !== s)
      return !1;
    for (const u in t) {
      const f = t.hasOwnProperty(u), p = e.hasOwnProperty(u);
      if (f && !p || !f && p || !ac(t[u], e[u]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const df = (t) => !!(t && t.__v_isRef === !0), Se = (t) => ve(t) ? t : t == null ? "" : Ot(t) || Jt(t) && (t.toString === cf || !Ht(t.toString)) ? df(t) ? Se(t.value) : JSON.stringify(t, hf, 2) : String(t), hf = (t, e) => df(e) ? hf(t, e.value) : Kr(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, a], s) => (n[fs(r, s) + " =>"] = a, n),
    {}
  )
} : of(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => fs(n))
} : On(e) ? fs(e) : Jt(e) && !Ot(e) && !lf(e) ? String(e) : e, fs = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    On(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let nn;
class fg {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = nn, !e && nn && (this.index = (nn.scopes || (nn.scopes = [])).push(
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
      const n = nn;
      try {
        return nn = this, e();
      } finally {
        nn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = nn, nn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (nn = this.prevScope, this.prevScope = void 0);
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
function dg() {
  return nn;
}
let ae;
const ds = /* @__PURE__ */ new WeakSet();
class pf {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, nn && nn.active && nn.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || mf(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Hl(this), yf(this);
    const e = ae, n = xn;
    ae = this, xn = !0;
    try {
      return this.fn();
    } finally {
      vf(this), ae = e, xn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        cc(e);
      this.deps = this.depsTail = void 0, Hl(this), this.onStop && this.onStop(), this.flags &= -2;
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
let gf = 0, Pi, Ci;
function mf(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = Ci, Ci = t;
    return;
  }
  t.next = Pi, Pi = t;
}
function oc() {
  gf++;
}
function sc() {
  if (--gf > 0)
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
function yf(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function vf(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const a = r.prevDep;
    r.version === -1 ? (r === n && (n = a), cc(r), hg(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = a;
  }
  t.deps = e, t.depsTail = n;
}
function Ds(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (bf(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function bf(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === zi) || (t.globalVersion = zi, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Ds(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = ae, r = xn;
  ae = t, xn = !0;
  try {
    yf(t);
    const a = t.fn(t._value);
    (e.version === 0 || Dn(a, t._value)) && (t.flags |= 128, t._value = a, e.version++);
  } catch (a) {
    throw e.version++, a;
  } finally {
    ae = n, xn = r, vf(t), t.flags &= -3;
  }
}
function cc(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: a } = t;
  if (r && (r.nextSub = a, t.prevSub = void 0), a && (a.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      cc(s, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function hg(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let xn = !0;
const _f = [];
function Yn() {
  _f.push(xn), xn = !1;
}
function qn() {
  const t = _f.pop();
  xn = t === void 0 ? !0 : t;
}
function Hl(t) {
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
let zi = 0;
class pg {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class lc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!ae || !xn || ae === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ae)
      n = this.activeLink = new pg(ae, this), ae.deps ? (n.prevDep = ae.depsTail, ae.depsTail.nextDep = n, ae.depsTail = n) : ae.deps = ae.depsTail = n, xf(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = ae.depsTail, n.nextDep = void 0, ae.depsTail.nextDep = n, ae.depsTail = n, ae.deps === n && (ae.deps = r);
    }
    return n;
  }
  trigger(e) {
    this.version++, zi++, this.notify(e);
  }
  notify(e) {
    oc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      sc();
    }
  }
}
function xf(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        xf(r);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
  }
}
const Ts = /* @__PURE__ */ new WeakMap(), _r = /* @__PURE__ */ Symbol(
  ""
), Ls = /* @__PURE__ */ Symbol(
  ""
), $i = /* @__PURE__ */ Symbol(
  ""
);
function Te(t, e, n) {
  if (xn && ae) {
    let r = Ts.get(t);
    r || Ts.set(t, r = /* @__PURE__ */ new Map());
    let a = r.get(n);
    a || (r.set(n, a = new lc()), a.map = r, a.key = n), a.track();
  }
}
function Kn(t, e, n, r, a, s) {
  const u = Ts.get(t);
  if (!u) {
    zi++;
    return;
  }
  const f = (p) => {
    p && p.trigger();
  };
  if (oc(), e === "clear")
    u.forEach(f);
  else {
    const p = Ot(t), y = p && ic(n);
    if (p && n === "length") {
      const b = Number(r);
      u.forEach((h, S) => {
        (S === "length" || S === $i || !On(S) && S >= b) && f(h);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), y && f(u.get($i)), e) {
        case "add":
          p ? y && f(u.get("length")) : (f(u.get(_r)), Kr(t) && f(u.get(Ls)));
          break;
        case "delete":
          p || (f(u.get(_r)), Kr(t) && f(u.get(Ls)));
          break;
        case "set":
          Kr(t) && f(u.get(_r));
          break;
      }
  }
  sc();
}
function Rr(t) {
  const e = /* @__PURE__ */ Wt(t);
  return e === t ? e : (Te(e, "iterate", $i), /* @__PURE__ */ gn(t) ? e : e.map(wn));
}
function ko(t) {
  return Te(t = /* @__PURE__ */ Wt(t), "iterate", $i), t;
}
function In(t, e) {
  return /* @__PURE__ */ Xn(t) ? Jr(/* @__PURE__ */ xr(t) ? wn(e) : e) : wn(e);
}
const gg = {
  __proto__: null,
  [Symbol.iterator]() {
    return hs(this, Symbol.iterator, (t) => In(this, t));
  },
  concat(...t) {
    return Rr(this).concat(
      ...t.map((e) => Ot(e) ? Rr(e) : e)
    );
  },
  entries() {
    return hs(this, "entries", (t) => (t[1] = In(this, t[1]), t));
  },
  every(t, e) {
    return $n(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return $n(
      this,
      "filter",
      t,
      e,
      (n) => n.map((r) => In(this, r)),
      arguments
    );
  },
  find(t, e) {
    return $n(
      this,
      "find",
      t,
      e,
      (n) => In(this, n),
      arguments
    );
  },
  findIndex(t, e) {
    return $n(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return $n(
      this,
      "findLast",
      t,
      e,
      (n) => In(this, n),
      arguments
    );
  },
  findLastIndex(t, e) {
    return $n(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return $n(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return ps(this, "includes", t);
  },
  indexOf(...t) {
    return ps(this, "indexOf", t);
  },
  join(t) {
    return Rr(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return ps(this, "lastIndexOf", t);
  },
  map(t, e) {
    return $n(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return di(this, "pop");
  },
  push(...t) {
    return di(this, "push", t);
  },
  reduce(t, ...e) {
    return zl(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return zl(this, "reduceRight", t, e);
  },
  shift() {
    return di(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return $n(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return di(this, "splice", t);
  },
  toReversed() {
    return Rr(this).toReversed();
  },
  toSorted(t) {
    return Rr(this).toSorted(t);
  },
  toSpliced(...t) {
    return Rr(this).toSpliced(...t);
  },
  unshift(...t) {
    return di(this, "unshift", t);
  },
  values() {
    return hs(this, "values", (t) => In(this, t));
  }
};
function hs(t, e, n) {
  const r = ko(t), a = r[e]();
  return r !== t && !/* @__PURE__ */ gn(t) && (a._next = a.next, a.next = () => {
    const s = a._next();
    return s.done || (s.value = n(s.value)), s;
  }), a;
}
const mg = Array.prototype;
function $n(t, e, n, r, a, s) {
  const u = ko(t), f = u !== t && !/* @__PURE__ */ gn(t), p = u[e];
  if (p !== mg[e]) {
    const h = p.apply(t, s);
    return f ? wn(h) : h;
  }
  let y = n;
  u !== t && (f ? y = function(h, S) {
    return n.call(this, In(t, h), S, t);
  } : n.length > 2 && (y = function(h, S) {
    return n.call(this, h, S, t);
  }));
  const b = p.call(u, y, r);
  return f && a ? a(b) : b;
}
function zl(t, e, n, r) {
  const a = ko(t), s = a !== t && !/* @__PURE__ */ gn(t);
  let u = n, f = !1;
  a !== t && (s ? (f = r.length === 0, u = function(y, b, h) {
    return f && (f = !1, y = In(t, y)), n.call(this, y, In(t, b), h, t);
  }) : n.length > 3 && (u = function(y, b, h) {
    return n.call(this, y, b, h, t);
  }));
  const p = a[e](u, ...r);
  return f ? In(t, p) : p;
}
function ps(t, e, n) {
  const r = /* @__PURE__ */ Wt(t);
  Te(r, "iterate", $i);
  const a = r[e](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ dc(n[0]) ? (n[0] = /* @__PURE__ */ Wt(n[0]), r[e](...n)) : a;
}
function di(t, e, n = []) {
  Yn(), oc();
  const r = (/* @__PURE__ */ Wt(t))[e].apply(t, n);
  return sc(), qn(), r;
}
const yg = /* @__PURE__ */ nc("__proto__,__v_isRef,__isVue"), wf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(On)
);
function vg(t) {
  On(t) || (t = String(t));
  const e = /* @__PURE__ */ Wt(this);
  return Te(e, "has", t), e.hasOwnProperty(t);
}
class Sf {
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
      return r === (a ? s ? Cg : Pf : s ? Nf : Mf).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const u = Ot(e);
    if (!a) {
      let p;
      if (u && (p = gg[n]))
        return p;
      if (n === "hasOwnProperty")
        return vg;
    }
    const f = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Re(e) ? e : r
    );
    if ((On(n) ? wf.has(n) : yg(n)) || (a || Te(e, "get", n), s))
      return f;
    if (/* @__PURE__ */ Re(f)) {
      const p = u && ic(n) ? f : f.value;
      return a && Jt(p) ? /* @__PURE__ */ Os(p) : p;
    }
    return Jt(f) ? a ? /* @__PURE__ */ Os(f) : /* @__PURE__ */ Mo(f) : f;
  }
}
class kf extends Sf {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, a) {
    let s = e[n];
    const u = Ot(e) && ic(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ Xn(s);
      if (!/* @__PURE__ */ gn(r) && !/* @__PURE__ */ Xn(r) && (s = /* @__PURE__ */ Wt(s), r = /* @__PURE__ */ Wt(r)), !u && /* @__PURE__ */ Re(s) && !/* @__PURE__ */ Re(r))
        return y || (s.value = r), !0;
    }
    const f = u ? Number(n) < e.length : Yt(e, n), p = Reflect.set(
      e,
      n,
      r,
      /* @__PURE__ */ Re(e) ? e : a
    );
    return e === /* @__PURE__ */ Wt(a) && (f ? Dn(r, s) && Kn(e, "set", n, r) : Kn(e, "add", n, r)), p;
  }
  deleteProperty(e, n) {
    const r = Yt(e, n);
    e[n];
    const a = Reflect.deleteProperty(e, n);
    return a && r && Kn(e, "delete", n, void 0), a;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!On(n) || !wf.has(n)) && Te(e, "has", n), r;
  }
  ownKeys(e) {
    return Te(
      e,
      "iterate",
      Ot(e) ? "length" : _r
    ), Reflect.ownKeys(e);
  }
}
class bg extends Sf {
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
const _g = /* @__PURE__ */ new kf(), xg = /* @__PURE__ */ new bg(), wg = /* @__PURE__ */ new kf(!0);
const Rs = (t) => t, ba = (t) => Reflect.getPrototypeOf(t);
function Sg(t, e, n) {
  return function(...r) {
    const a = this.__v_raw, s = /* @__PURE__ */ Wt(a), u = Kr(s), f = t === "entries" || t === Symbol.iterator && u, p = t === "keys" && u, y = a[t](...r), b = n ? Rs : e ? Jr : wn;
    return !e && Te(
      s,
      "iterate",
      p ? Ls : _r
    ), Oe(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: h, done: S } = y.next();
          return S ? { value: h, done: S } : {
            value: f ? [b(h[0]), b(h[1])] : b(h),
            done: S
          };
        }
      }
    );
  };
}
function _a(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function kg(t, e) {
  const n = {
    get(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ Wt(s), f = /* @__PURE__ */ Wt(a);
      t || (Dn(a, f) && Te(u, "get", a), Te(u, "get", f));
      const { has: p } = ba(u), y = e ? Rs : t ? Jr : wn;
      if (p.call(u, a))
        return y(s.get(a));
      if (p.call(u, f))
        return y(s.get(f));
      s !== u && s.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !t && Te(/* @__PURE__ */ Wt(a), "iterate", _r), a.size;
    },
    has(a) {
      const s = this.__v_raw, u = /* @__PURE__ */ Wt(s), f = /* @__PURE__ */ Wt(a);
      return t || (Dn(a, f) && Te(u, "has", a), Te(u, "has", f)), a === f ? s.has(a) : s.has(a) || s.has(f);
    },
    forEach(a, s) {
      const u = this, f = u.__v_raw, p = /* @__PURE__ */ Wt(f), y = e ? Rs : t ? Jr : wn;
      return !t && Te(p, "iterate", _r), f.forEach((b, h) => a.call(s, y(b), y(h), u));
    }
  };
  return Oe(
    n,
    t ? {
      add: _a("add"),
      set: _a("set"),
      delete: _a("delete"),
      clear: _a("clear")
    } : {
      add(a) {
        const s = /* @__PURE__ */ Wt(this), u = ba(s), f = /* @__PURE__ */ Wt(a), p = !e && !/* @__PURE__ */ gn(a) && !/* @__PURE__ */ Xn(a) ? f : a;
        return u.has.call(s, p) || Dn(a, p) && u.has.call(s, a) || Dn(f, p) && u.has.call(s, f) || (s.add(p), Kn(s, "add", p, p)), this;
      },
      set(a, s) {
        !e && !/* @__PURE__ */ gn(s) && !/* @__PURE__ */ Xn(s) && (s = /* @__PURE__ */ Wt(s));
        const u = /* @__PURE__ */ Wt(this), { has: f, get: p } = ba(u);
        let y = f.call(u, a);
        y || (a = /* @__PURE__ */ Wt(a), y = f.call(u, a));
        const b = p.call(u, a);
        return u.set(a, s), y ? Dn(s, b) && Kn(u, "set", a, s) : Kn(u, "add", a, s), this;
      },
      delete(a) {
        const s = /* @__PURE__ */ Wt(this), { has: u, get: f } = ba(s);
        let p = u.call(s, a);
        p || (a = /* @__PURE__ */ Wt(a), p = u.call(s, a)), f && f.call(s, a);
        const y = s.delete(a);
        return p && Kn(s, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ Wt(this), s = a.size !== 0, u = a.clear();
        return s && Kn(
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
    n[a] = Sg(a, t, e);
  }), n;
}
function uc(t, e) {
  const n = kg(t, e);
  return (r, a, s) => a === "__v_isReactive" ? !t : a === "__v_isReadonly" ? t : a === "__v_raw" ? r : Reflect.get(
    Yt(n, a) && a in r ? n : r,
    a,
    s
  );
}
const Mg = {
  get: /* @__PURE__ */ uc(!1, !1)
}, Ng = {
  get: /* @__PURE__ */ uc(!1, !0)
}, Pg = {
  get: /* @__PURE__ */ uc(!0, !1)
};
const Mf = /* @__PURE__ */ new WeakMap(), Nf = /* @__PURE__ */ new WeakMap(), Pf = /* @__PURE__ */ new WeakMap(), Cg = /* @__PURE__ */ new WeakMap();
function Ag(t) {
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
function Ig(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Ag(tg(t));
}
// @__NO_SIDE_EFFECTS__
function Mo(t) {
  return /* @__PURE__ */ Xn(t) ? t : fc(
    t,
    !1,
    _g,
    Mg,
    Mf
  );
}
// @__NO_SIDE_EFFECTS__
function Eg(t) {
  return fc(
    t,
    !1,
    wg,
    Ng,
    Nf
  );
}
// @__NO_SIDE_EFFECTS__
function Os(t) {
  return fc(
    t,
    !0,
    xg,
    Pg,
    Pf
  );
}
function fc(t, e, n, r, a) {
  if (!Jt(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = Ig(t);
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
function xr(t) {
  return /* @__PURE__ */ Xn(t) ? /* @__PURE__ */ xr(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Xn(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function gn(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function dc(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Wt(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ Wt(e) : t;
}
function Dg(t) {
  return !Yt(t, "__v_skip") && Object.isExtensible(t) && uf(t, "__v_skip", !0), t;
}
const wn = (t) => Jt(t) ? /* @__PURE__ */ Mo(t) : t, Jr = (t) => Jt(t) ? /* @__PURE__ */ Os(t) : t;
// @__NO_SIDE_EFFECTS__
function Re(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Fs(t) {
  return Tg(t, !1);
}
function Tg(t, e) {
  return /* @__PURE__ */ Re(t) ? t : new Lg(t, e);
}
class Lg {
  constructor(e, n) {
    this.dep = new lc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ Wt(e), this._value = n ? e : wn(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ gn(e) || /* @__PURE__ */ Xn(e);
    e = r ? e : /* @__PURE__ */ Wt(e), Dn(e, n) && (this._rawValue = e, this._value = r ? e : wn(e), this.dep.trigger());
  }
}
function br(t) {
  return /* @__PURE__ */ Re(t) ? t.value : t;
}
const Rg = {
  get: (t, e, n) => e === "__v_raw" ? t : br(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const a = t[e];
    return /* @__PURE__ */ Re(a) && !/* @__PURE__ */ Re(n) ? (a.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function Cf(t) {
  return /* @__PURE__ */ xr(t) ? t : new Proxy(t, Rg);
}
class Og {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new lc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = zi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ae !== this)
      return mf(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return bf(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function Fg(t, e, n = !1) {
  let r, a;
  return Ht(t) ? r = t : (r = t.get, a = t.set), new Og(r, a, n);
}
const xa = {}, Xa = /* @__PURE__ */ new WeakMap();
let pr;
function Vg(t, e = !1, n = pr) {
  if (n) {
    let r = Xa.get(n);
    r || Xa.set(n, r = []), r.push(t);
  }
}
function Hg(t, e, n = te) {
  const { immediate: r, deep: a, once: s, scheduler: u, augmentJob: f, call: p } = n, y = (E) => a ? E : /* @__PURE__ */ gn(E) || a === !1 || a === 0 ? Wn(E, 1) : Wn(E);
  let b, h, S, _, I = !1, L = !1;
  if (/* @__PURE__ */ Re(t) ? (h = () => t.value, I = /* @__PURE__ */ gn(t)) : /* @__PURE__ */ xr(t) ? (h = () => y(t), I = !0) : Ot(t) ? (L = !0, I = t.some((E) => /* @__PURE__ */ xr(E) || /* @__PURE__ */ gn(E)), h = () => t.map((E) => {
    if (/* @__PURE__ */ Re(E))
      return E.value;
    if (/* @__PURE__ */ xr(E))
      return y(E);
    if (Ht(E))
      return p ? p(E, 2) : E();
  })) : Ht(t) ? e ? h = p ? () => p(t, 2) : t : h = () => {
    if (S) {
      Yn();
      try {
        S();
      } finally {
        qn();
      }
    }
    const E = pr;
    pr = b;
    try {
      return p ? p(t, 3, [_]) : t(_);
    } finally {
      pr = E;
    }
  } : h = Rn, e && a) {
    const E = h, j = a === !0 ? 1 / 0 : a;
    h = () => Wn(E(), j);
  }
  const O = dg(), R = () => {
    b.stop(), O && O.active && rc(O.effects, b);
  };
  if (s && e) {
    const E = e;
    e = (...j) => {
      E(...j), R();
    };
  }
  let P = L ? new Array(t.length).fill(xa) : xa;
  const C = (E) => {
    if (!(!(b.flags & 1) || !b.dirty && !E))
      if (e) {
        const j = b.run();
        if (a || I || (L ? j.some((st, dt) => Dn(st, P[dt])) : Dn(j, P))) {
          S && S();
          const st = pr;
          pr = b;
          try {
            const dt = [
              j,
              // pass undefined as the old value when it's changed for the first time
              P === xa ? void 0 : L && P[0] === xa ? [] : P,
              _
            ];
            P = j, p ? p(e, 3, dt) : (
              // @ts-expect-error
              e(...dt)
            );
          } finally {
            pr = st;
          }
        }
      } else
        b.run();
  };
  return f && f(C), b = new pf(h), b.scheduler = u ? () => u(C, !1) : C, _ = (E) => Vg(E, !1, b), S = b.onStop = () => {
    const E = Xa.get(b);
    if (E) {
      if (p)
        p(E, 4);
      else
        for (const j of E) j();
      Xa.delete(b);
    }
  }, e ? r ? C(!0) : P = b.run() : u ? u(C.bind(null, !0), !0) : b.run(), R.pause = b.pause.bind(b), R.resume = b.resume.bind(b), R.stop = R, R;
}
function Wn(t, e = 1 / 0, n) {
  if (e <= 0 || !Jt(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ Re(t))
    Wn(t.value, e, n);
  else if (Ot(t))
    for (let r = 0; r < t.length; r++)
      Wn(t[r], e, n);
  else if (of(t) || Kr(t))
    t.forEach((r) => {
      Wn(r, e, n);
    });
  else if (lf(t)) {
    for (const r in t)
      Wn(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && Wn(t[r], e, n);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Yi(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (a) {
    No(a, e, n);
  }
}
function Fn(t, e, n, r) {
  if (Ht(t)) {
    const a = Yi(t, e, n, r);
    return a && sf(a) && a.catch((s) => {
      No(s, e, n);
    }), a;
  }
  if (Ot(t)) {
    const a = [];
    for (let s = 0; s < t.length; s++)
      a.push(Fn(t[s], e, n, r));
    return a;
  }
}
function No(t, e, n, r = !0) {
  const a = e ? e.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: u } = e && e.appContext.config || te;
  if (e) {
    let f = e.parent;
    const p = e.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const b = f.ec;
      if (b) {
        for (let h = 0; h < b.length; h++)
          if (b[h](t, p, y) === !1)
            return;
      }
      f = f.parent;
    }
    if (s) {
      Yn(), Yi(s, null, 10, [
        t,
        p,
        y
      ]), qn();
      return;
    }
  }
  zg(t, n, a, r, u);
}
function zg(t, e, n, r = !0, a = !1) {
  if (a)
    throw t;
  console.error(t);
}
const Be = [];
let Cn = -1;
const Wr = [];
let ar = null, zr = 0;
const Af = /* @__PURE__ */ Promise.resolve();
let Za = null;
function hc(t) {
  const e = Za || Af;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function $g(t) {
  let e = Cn + 1, n = Be.length;
  for (; e < n; ) {
    const r = e + n >>> 1, a = Be[r], s = ji(a);
    s < t || s === t && a.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function pc(t) {
  if (!(t.flags & 1)) {
    const e = ji(t), n = Be[Be.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= ji(n) ? Be.push(t) : Be.splice($g(e), 0, t), t.flags |= 1, If();
  }
}
function If() {
  Za || (Za = Af.then(Df));
}
function jg(t) {
  Ot(t) ? Wr.push(...t) : ar && t.id === -1 ? ar.splice(zr + 1, 0, t) : t.flags & 1 || (Wr.push(t), t.flags |= 1), If();
}
function $l(t, e, n = Cn + 1) {
  for (; n < Be.length; n++) {
    const r = Be[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid)
        continue;
      Be.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ef(t) {
  if (Wr.length) {
    const e = [...new Set(Wr)].sort(
      (n, r) => ji(n) - ji(r)
    );
    if (Wr.length = 0, ar) {
      ar.push(...e);
      return;
    }
    for (ar = e, zr = 0; zr < ar.length; zr++) {
      const n = ar[zr];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    ar = null, zr = 0;
  }
}
const ji = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Df(t) {
  try {
    for (Cn = 0; Cn < Be.length; Cn++) {
      const e = Be[Cn];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), Yi(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Cn < Be.length; Cn++) {
      const e = Be[Cn];
      e && (e.flags &= -2);
    }
    Cn = -1, Be.length = 0, Ef(), Za = null, (Be.length || Wr.length) && Df();
  }
}
let sn = null, Tf = null;
function Ja(t) {
  const e = sn;
  return sn = t, Tf = t && t.type.__scopeId || null, e;
}
function Ug(t, e = sn, n) {
  if (!e || t._n)
    return t;
  const r = (...a) => {
    r._d && Ql(-1);
    const s = Ja(e);
    let u;
    try {
      u = t(...a);
    } finally {
      Ja(s), r._d && Ql(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Lf(t, e) {
  if (sn === null)
    return t;
  const n = Io(sn), r = t.dirs || (t.dirs = []);
  for (let a = 0; a < e.length; a++) {
    let [s, u, f, p = te] = e[a];
    s && (Ht(s) && (s = {
      mounted: s,
      updated: s
    }), s.deep && Wn(u), r.push({
      dir: s,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: f,
      modifiers: p
    }));
  }
  return t;
}
function ur(t, e, n, r) {
  const a = t.dirs, s = e && e.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    s && (f.oldValue = s[u].value);
    let p = f.dir[r];
    p && (Yn(), Fn(p, n, 8, [
      t.el,
      f,
      t,
      e
    ]), qn());
  }
}
function Bg(t, e) {
  if (Le) {
    let n = Le.provides;
    const r = Le.parent && Le.parent.provides;
    r === n && (n = Le.provides = Object.create(r)), n[t] = e;
  }
}
function Ha(t, e, n = !1) {
  const r = B0();
  if (r || Yr) {
    let a = Yr ? Yr._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (a && t in a)
      return a[t];
    if (arguments.length > 1)
      return n && Ht(e) ? e.call(r && r.proxy) : e;
  }
}
const Gg = /* @__PURE__ */ Symbol.for("v-scx"), Kg = () => Ha(Gg);
function Ai(t, e, n) {
  return Rf(t, e, n);
}
function Rf(t, e, n = te) {
  const { immediate: r, deep: a, flush: s, once: u } = n, f = Oe({}, n), p = e && r || !e && s !== "post";
  let y;
  if (Bi) {
    if (s === "sync") {
      const _ = Kg();
      y = _.__watcherHandles || (_.__watcherHandles = []);
    } else if (!p) {
      const _ = () => {
      };
      return _.stop = Rn, _.resume = Rn, _.pause = Rn, _;
    }
  }
  const b = Le;
  f.call = (_, I, L) => Fn(_, b, I, L);
  let h = !1;
  s === "post" ? f.scheduler = (_) => {
    tn(_, b && b.suspense);
  } : s !== "sync" && (h = !0, f.scheduler = (_, I) => {
    I ? _() : pc(_);
  }), f.augmentJob = (_) => {
    e && (_.flags |= 4), h && (_.flags |= 2, b && (_.id = b.uid, _.i = b));
  };
  const S = Hg(t, e, f);
  return Bi && (y ? y.push(S) : p && S()), S;
}
function Wg(t, e, n) {
  const r = this.proxy, a = ve(t) ? t.includes(".") ? Of(r, t) : () => r[t] : t.bind(r, r);
  let s;
  Ht(e) ? s = e : (s = e.handler, n = e);
  const u = qi(this), f = Rf(a, s.bind(r), n);
  return u(), f;
}
function Of(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let a = 0; a < n.length && r; a++)
      r = r[n[a]];
    return r;
  };
}
const Yg = /* @__PURE__ */ Symbol("_vte"), qg = (t) => t.__isTeleport, Xg = /* @__PURE__ */ Symbol("_leaveCb");
function gc(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, gc(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Ff(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function jl(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const Qa = /* @__PURE__ */ new WeakMap();
function Ii(t, e, n, r, a = !1) {
  if (Ot(t)) {
    t.forEach(
      (L, O) => Ii(
        L,
        e && (Ot(e) ? e[O] : e),
        n,
        r,
        a
      )
    );
    return;
  }
  if (Ei(r) && !a) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ii(t, e, n, r.component.subTree);
    return;
  }
  const s = r.shapeFlag & 4 ? Io(r.component) : r.el, u = a ? null : s, { i: f, r: p } = t, y = e && e.r, b = f.refs === te ? f.refs = {} : f.refs, h = f.setupState, S = /* @__PURE__ */ Wt(h), _ = h === te ? af : (L) => jl(b, L) ? !1 : Yt(S, L), I = (L, O) => !(O && jl(b, O));
  if (y != null && y !== p) {
    if (Ul(e), ve(y))
      b[y] = null, _(y) && (h[y] = null);
    else if (/* @__PURE__ */ Re(y)) {
      const L = e;
      I(y, L.k) && (y.value = null), L.k && (b[L.k] = null);
    }
  }
  if (Ht(p))
    Yi(p, f, 12, [u, b]);
  else {
    const L = ve(p), O = /* @__PURE__ */ Re(p);
    if (L || O) {
      const R = () => {
        if (t.f) {
          const P = L ? _(p) ? h[p] : b[p] : I() || !t.k ? p.value : b[t.k];
          if (a)
            Ot(P) && rc(P, s);
          else if (Ot(P))
            P.includes(s) || P.push(s);
          else if (L)
            b[p] = [s], _(p) && (h[p] = b[p]);
          else {
            const C = [s];
            I(p, t.k) && (p.value = C), t.k && (b[t.k] = C);
          }
        } else L ? (b[p] = u, _(p) && (h[p] = u)) : O && (I(p, t.k) && (p.value = u), t.k && (b[t.k] = u));
      };
      if (u) {
        const P = () => {
          R(), Qa.delete(t);
        };
        P.id = -1, Qa.set(t, P), tn(P, n);
      } else
        Ul(t), R();
    }
  }
}
function Ul(t) {
  const e = Qa.get(t);
  e && (e.flags |= 8, Qa.delete(t));
}
So().requestIdleCallback;
So().cancelIdleCallback;
const Ei = (t) => !!t.type.__asyncLoader, Vf = (t) => t.type.__isKeepAlive;
function Zg(t, e) {
  Hf(t, "a", e);
}
function Jg(t, e) {
  Hf(t, "da", e);
}
function Hf(t, e, n = Le) {
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
      Vf(a.parent.vnode) && Qg(r, e, n, a), a = a.parent;
  }
}
function Qg(t, e, n, r) {
  const a = Po(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  $f(() => {
    rc(r[e], a);
  }, n);
}
function Po(t, e, n = Le, r = !1) {
  if (n) {
    const a = n[t] || (n[t] = []), s = e.__weh || (e.__weh = (...u) => {
      Yn();
      const f = qi(n), p = Fn(e, n, t, u);
      return f(), qn(), p;
    });
    return r ? a.unshift(s) : a.push(s), s;
  }
}
const Zn = (t) => (e, n = Le) => {
  (!Bi || t === "sp") && Po(t, (...r) => e(...r), n);
}, t0 = Zn("bm"), zf = Zn("m"), e0 = Zn(
  "bu"
), n0 = Zn("u"), mc = Zn(
  "bum"
), $f = Zn("um"), r0 = Zn(
  "sp"
), i0 = Zn("rtg"), a0 = Zn("rtc");
function o0(t, e = Le) {
  Po("ec", t, e);
}
const s0 = "components", jf = /* @__PURE__ */ Symbol.for("v-ndc");
function c0(t) {
  return ve(t) ? l0(s0, t, !1) || t : t || jf;
}
function l0(t, e, n = !0, r = !1) {
  const a = sn || Le;
  if (a) {
    const s = a.type;
    {
      const f = q0(
        s,
        !1
      );
      if (f && (f === e || f === We(e) || f === wo(We(e))))
        return s;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Bl(a[t] || s[t], e) || // global registration
      Bl(a.appContext[t], e)
    );
    return !u && r ? s : u;
  }
}
function Bl(t, e) {
  return t && (t[e] || t[We(e)] || t[wo(We(e))]);
}
function Ge(t, e, n, r) {
  let a;
  const s = n, u = Ot(t);
  if (u || ve(t)) {
    const f = u && /* @__PURE__ */ xr(t);
    let p = !1, y = !1;
    f && (p = !/* @__PURE__ */ gn(t), y = /* @__PURE__ */ Xn(t), t = ko(t)), a = new Array(t.length);
    for (let b = 0, h = t.length; b < h; b++)
      a[b] = e(
        p ? y ? Jr(wn(t[b])) : wn(t[b]) : t[b],
        b,
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
        (f, p) => e(f, p, void 0, s)
      );
    else {
      const f = Object.keys(t);
      a = new Array(f.length);
      for (let p = 0, y = f.length; p < y; p++) {
        const b = f[p];
        a[p] = e(t[b], b, p, s);
      }
    }
  else
    a = [];
  return a;
}
const Vs = (t) => t ? ud(t) ? Io(t) : Vs(t.parent) : null, Di = (
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
    $parent: (t) => Vs(t.parent),
    $root: (t) => Vs(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Bf(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      pc(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = hc.bind(t.proxy)),
    $watch: (t) => Wg.bind(t)
  })
), gs = (t, e) => t !== te && !t.__isScriptSetup && Yt(t, e), u0 = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: a, props: s, accessCache: u, type: f, appContext: p } = t;
    if (e[0] !== "$") {
      const S = u[e];
      if (S !== void 0)
        switch (S) {
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
          return u[e] = 1, r[e];
        if (a !== te && Yt(a, e))
          return u[e] = 2, a[e];
        if (Yt(s, e))
          return u[e] = 3, s[e];
        if (n !== te && Yt(n, e))
          return u[e] = 4, n[e];
        Hs && (u[e] = 0);
      }
    }
    const y = Di[e];
    let b, h;
    if (y)
      return e === "$attrs" && Te(t.attrs, "get", ""), y(t);
    if (
      // css module (injected by vue-loader)
      (b = f.__cssModules) && (b = b[e])
    )
      return b;
    if (n !== te && Yt(n, e))
      return u[e] = 4, n[e];
    if (
      // global properties
      h = p.config.globalProperties, Yt(h, e)
    )
      return h[e];
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: a, ctx: s } = t;
    return gs(a, e) ? (a[e] = n, !0) : r !== te && Yt(r, e) ? (r[e] = n, !0) : Yt(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (s[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: a, props: s, type: u }
  }, f) {
    let p;
    return !!(n[f] || t !== te && f[0] !== "$" && Yt(t, f) || gs(e, f) || Yt(s, f) || Yt(r, f) || Yt(Di, f) || Yt(a.config.globalProperties, f) || (p = u.__cssModules) && p[f]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : Yt(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Gl(t) {
  return Ot(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Hs = !0;
function f0(t) {
  const e = Bf(t), n = t.proxy, r = t.ctx;
  Hs = !1, e.beforeCreate && Kl(e.beforeCreate, t, "bc");
  const {
    // state
    data: a,
    computed: s,
    methods: u,
    watch: f,
    provide: p,
    inject: y,
    // lifecycle
    created: b,
    beforeMount: h,
    mounted: S,
    beforeUpdate: _,
    updated: I,
    activated: L,
    deactivated: O,
    beforeDestroy: R,
    beforeUnmount: P,
    destroyed: C,
    unmounted: E,
    render: j,
    renderTracked: st,
    renderTriggered: dt,
    errorCaptured: T,
    serverPrefetch: _t,
    // public API
    expose: V,
    inheritAttrs: ht,
    // assets
    components: xt,
    directives: St,
    filters: it
  } = e;
  if (y && d0(y, r, null), u)
    for (const gt in u) {
      const q = u[gt];
      Ht(q) && (r[gt] = q.bind(n));
    }
  if (a) {
    const gt = a.call(n, n);
    Jt(gt) && (t.data = /* @__PURE__ */ Mo(gt));
  }
  if (Hs = !0, s)
    for (const gt in s) {
      const q = s[gt], lt = Ht(q) ? q.bind(n, n) : Ht(q.get) ? q.get.bind(n, n) : Rn, Nt = !Ht(q) && Ht(q.set) ? q.set.bind(n) : Rn, Lt = qr({
        get: lt,
        set: Nt
      });
      Object.defineProperty(r, gt, {
        enumerable: !0,
        configurable: !0,
        get: () => Lt.value,
        set: (Rt) => Lt.value = Rt
      });
    }
  if (f)
    for (const gt in f)
      Uf(f[gt], r, n, gt);
  if (p) {
    const gt = Ht(p) ? p.call(n) : p;
    Reflect.ownKeys(gt).forEach((q) => {
      Bg(q, gt[q]);
    });
  }
  b && Kl(b, t, "c");
  function ct(gt, q) {
    Ot(q) ? q.forEach((lt) => gt(lt.bind(n))) : q && gt(q.bind(n));
  }
  if (ct(t0, h), ct(zf, S), ct(e0, _), ct(n0, I), ct(Zg, L), ct(Jg, O), ct(o0, T), ct(a0, st), ct(i0, dt), ct(mc, P), ct($f, E), ct(r0, _t), Ot(V))
    if (V.length) {
      const gt = t.exposed || (t.exposed = {});
      V.forEach((q) => {
        Object.defineProperty(gt, q, {
          get: () => n[q],
          set: (lt) => n[q] = lt,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  j && t.render === Rn && (t.render = j), ht != null && (t.inheritAttrs = ht), xt && (t.components = xt), St && (t.directives = St), _t && Ff(t);
}
function d0(t, e, n = Rn) {
  Ot(t) && (t = zs(t));
  for (const r in t) {
    const a = t[r];
    let s;
    Jt(a) ? "default" in a ? s = Ha(
      a.from || r,
      a.default,
      !0
    ) : s = Ha(a.from || r) : s = Ha(a), /* @__PURE__ */ Re(s) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (u) => s.value = u
    }) : e[r] = s;
  }
}
function Kl(t, e, n) {
  Fn(
    Ot(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Uf(t, e, n, r) {
  let a = r.includes(".") ? Of(n, r) : () => n[r];
  if (ve(t)) {
    const s = e[t];
    Ht(s) && Ai(a, s);
  } else if (Ht(t))
    Ai(a, t.bind(n));
  else if (Jt(t))
    if (Ot(t))
      t.forEach((s) => Uf(s, e, n, r));
    else {
      const s = Ht(t.handler) ? t.handler.bind(n) : e[t.handler];
      Ht(s) && Ai(a, s, t);
    }
}
function Bf(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: a,
    optionsCache: s,
    config: { optionMergeStrategies: u }
  } = t.appContext, f = s.get(e);
  let p;
  return f ? p = f : !a.length && !n && !r ? p = e : (p = {}, a.length && a.forEach(
    (y) => to(p, y, u, !0)
  ), to(p, e, u)), Jt(e) && s.set(e, p), p;
}
function to(t, e, n, r = !1) {
  const { mixins: a, extends: s } = e;
  s && to(t, s, n, !0), a && a.forEach(
    (u) => to(t, u, n, !0)
  );
  for (const u in e)
    if (!(r && u === "expose")) {
      const f = h0[u] || n && n[u];
      t[u] = f ? f(t[u], e[u]) : e[u];
    }
  return t;
}
const h0 = {
  data: Wl,
  props: Yl,
  emits: Yl,
  // objects
  methods: xi,
  computed: xi,
  // lifecycle
  beforeCreate: $e,
  created: $e,
  beforeMount: $e,
  mounted: $e,
  beforeUpdate: $e,
  updated: $e,
  beforeDestroy: $e,
  beforeUnmount: $e,
  destroyed: $e,
  unmounted: $e,
  activated: $e,
  deactivated: $e,
  errorCaptured: $e,
  serverPrefetch: $e,
  // assets
  components: xi,
  directives: xi,
  // watch
  watch: g0,
  // provide / inject
  provide: Wl,
  inject: p0
};
function Wl(t, e) {
  return e ? t ? function() {
    return Oe(
      Ht(t) ? t.call(this, this) : t,
      Ht(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function p0(t, e) {
  return xi(zs(t), zs(e));
}
function zs(t) {
  if (Ot(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function $e(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function xi(t, e) {
  return t ? Oe(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Yl(t, e) {
  return t ? Ot(t) && Ot(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Oe(
    /* @__PURE__ */ Object.create(null),
    Gl(t),
    Gl(e ?? {})
  ) : e;
}
function g0(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Oe(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = $e(t[r], e[r]);
  return n;
}
function Gf() {
  return {
    app: null,
    config: {
      isNativeTag: af,
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
let m0 = 0;
function y0(t, e) {
  return function(r, a = null) {
    Ht(r) || (r = Oe({}, r)), a != null && !Jt(a) && (a = null);
    const s = Gf(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let p = !1;
    const y = s.app = {
      _uid: m0++,
      _component: r,
      _props: a,
      _container: null,
      _context: s,
      _instance: null,
      version: Z0,
      get config() {
        return s.config;
      },
      set config(b) {
      },
      use(b, ...h) {
        return u.has(b) || (b && Ht(b.install) ? (u.add(b), b.install(y, ...h)) : Ht(b) && (u.add(b), b(y, ...h))), y;
      },
      mixin(b) {
        return s.mixins.includes(b) || s.mixins.push(b), y;
      },
      component(b, h) {
        return h ? (s.components[b] = h, y) : s.components[b];
      },
      directive(b, h) {
        return h ? (s.directives[b] = h, y) : s.directives[b];
      },
      mount(b, h, S) {
        if (!p) {
          const _ = y._ceVNode || ke(r, a);
          return _.appContext = s, S === !0 ? S = "svg" : S === !1 && (S = void 0), t(_, b, S), p = !0, y._container = b, b.__vue_app__ = y, Io(_.component);
        }
      },
      onUnmount(b) {
        f.push(b);
      },
      unmount() {
        p && (Fn(
          f,
          y._instance,
          16
        ), t(null, y._container), delete y._container.__vue_app__);
      },
      provide(b, h) {
        return s.provides[b] = h, y;
      },
      runWithContext(b) {
        const h = Yr;
        Yr = y;
        try {
          return b();
        } finally {
          Yr = h;
        }
      }
    };
    return y;
  };
}
let Yr = null;
const v0 = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${We(e)}Modifiers`] || t[`${Pr(e)}Modifiers`];
function b0(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || te;
  let a = n;
  const s = e.startsWith("update:"), u = s && v0(r, e.slice(7));
  u && (u.trim && (a = n.map((b) => ve(b) ? b.trim() : b)), u.number && (a = n.map(rg)));
  let f, p = r[f = ls(e)] || // also try camelCase event handler (#2249)
  r[f = ls(We(e))];
  !p && s && (p = r[f = ls(Pr(e))]), p && Fn(
    p,
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
    t.emitted[f] = !0, Fn(
      y,
      t,
      6,
      a
    );
  }
}
const _0 = /* @__PURE__ */ new WeakMap();
function Kf(t, e, n = !1) {
  const r = n ? _0 : e.emitsCache, a = r.get(t);
  if (a !== void 0)
    return a;
  const s = t.emits;
  let u = {}, f = !1;
  if (!Ht(t)) {
    const p = (y) => {
      const b = Kf(y, e, !0);
      b && (f = !0, Oe(u, b));
    };
    !n && e.mixins.length && e.mixins.forEach(p), t.extends && p(t.extends), t.mixins && t.mixins.forEach(p);
  }
  return !s && !f ? (Jt(t) && r.set(t, null), null) : (Ot(s) ? s.forEach((p) => u[p] = null) : Oe(u, s), Jt(t) && r.set(t, u), u);
}
function Co(t, e) {
  return !t || !bo(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), Yt(t, e[0].toLowerCase() + e.slice(1)) || Yt(t, Pr(e)) || Yt(t, e));
}
function ql(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: a,
    propsOptions: [s],
    slots: u,
    attrs: f,
    emit: p,
    render: y,
    renderCache: b,
    props: h,
    data: S,
    setupState: _,
    ctx: I,
    inheritAttrs: L
  } = t, O = Ja(t);
  let R, P;
  try {
    if (n.shapeFlag & 4) {
      const E = a || r, j = E;
      R = En(
        y.call(
          j,
          E,
          b,
          h,
          _,
          S,
          I
        )
      ), P = f;
    } else {
      const E = e;
      R = En(
        E.length > 1 ? E(
          h,
          { attrs: f, slots: u, emit: p }
        ) : E(
          h,
          null
        )
      ), P = e.props ? f : x0(f);
    }
  } catch (E) {
    Ti.length = 0, No(E, t, 1), R = ke(or);
  }
  let C = R;
  if (P && L !== !1) {
    const E = Object.keys(P), { shapeFlag: j } = C;
    E.length && j & 7 && (s && E.some(_o) && (P = w0(
      P,
      s
    )), C = Qr(C, P, !1, !0));
  }
  return n.dirs && (C = Qr(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && gc(C, n.transition), R = C, Ja(O), R;
}
const x0 = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || bo(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, w0 = (t, e) => {
  const n = {};
  for (const r in t)
    (!_o(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function S0(t, e, n) {
  const { props: r, children: a, component: s } = t, { props: u, children: f, patchFlag: p } = e, y = s.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return r ? Xl(r, u, y) : !!u;
    if (p & 8) {
      const b = e.dynamicProps;
      for (let h = 0; h < b.length; h++) {
        const S = b[h];
        if (Wf(u, r, S) && !Co(y, S))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? Xl(r, u, y) : !0 : !!u;
  return !1;
}
function Xl(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let a = 0; a < r.length; a++) {
    const s = r[a];
    if (Wf(e, t, s) && !Co(n, s))
      return !0;
  }
  return !1;
}
function Wf(t, e, n) {
  const r = t[n], a = e[n];
  return n === "style" && Jt(r) && Jt(a) ? !ac(r, a) : r !== a;
}
function k0({ vnode: t, parent: e, suspense: n }, r) {
  for (; e; ) {
    const a = e.subTree;
    if (a.suspense && a.suspense.activeBranch === t && (a.suspense.vnode.el = a.el = r, t = a), a === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = r);
}
const Yf = {}, qf = () => Object.create(Yf), Xf = (t) => Object.getPrototypeOf(t) === Yf;
function M0(t, e, n, r = !1) {
  const a = {}, s = qf();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Zf(t, e, a, s);
  for (const u in t.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? t.props = r ? a : /* @__PURE__ */ Eg(a) : t.type.props ? t.props = a : t.props = s, t.attrs = s;
}
function N0(t, e, n, r) {
  const {
    props: a,
    attrs: s,
    vnode: { patchFlag: u }
  } = t, f = /* @__PURE__ */ Wt(a), [p] = t.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const b = t.vnode.dynamicProps;
      for (let h = 0; h < b.length; h++) {
        let S = b[h];
        if (Co(t.emitsOptions, S))
          continue;
        const _ = e[S];
        if (p)
          if (Yt(s, S))
            _ !== s[S] && (s[S] = _, y = !0);
          else {
            const I = We(S);
            a[I] = $s(
              p,
              f,
              I,
              _,
              t,
              !1
            );
          }
        else
          _ !== s[S] && (s[S] = _, y = !0);
      }
    }
  } else {
    Zf(t, e, a, s) && (y = !0);
    let b;
    for (const h in f)
      (!e || // for camelCase
      !Yt(e, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((b = Pr(h)) === h || !Yt(e, b))) && (p ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[b] !== void 0) && (a[h] = $s(
        p,
        f,
        h,
        void 0,
        t,
        !0
      )) : delete a[h]);
    if (s !== f)
      for (const h in s)
        (!e || !Yt(e, h)) && (delete s[h], y = !0);
  }
  y && Kn(t.attrs, "set", "");
}
function Zf(t, e, n, r) {
  const [a, s] = t.propsOptions;
  let u = !1, f;
  if (e)
    for (let p in e) {
      if (Ni(p))
        continue;
      const y = e[p];
      let b;
      a && Yt(a, b = We(p)) ? !s || !s.includes(b) ? n[b] = y : (f || (f = {}))[b] = y : Co(t.emitsOptions, p) || (!(p in r) || y !== r[p]) && (r[p] = y, u = !0);
    }
  if (s) {
    const p = /* @__PURE__ */ Wt(n), y = f || te;
    for (let b = 0; b < s.length; b++) {
      const h = s[b];
      n[h] = $s(
        a,
        p,
        h,
        y[h],
        t,
        !Yt(y, h)
      );
    }
  }
  return u;
}
function $s(t, e, n, r, a, s) {
  const u = t[n];
  if (u != null) {
    const f = Yt(u, "default");
    if (f && r === void 0) {
      const p = u.default;
      if (u.type !== Function && !u.skipFactory && Ht(p)) {
        const { propsDefaults: y } = a;
        if (n in y)
          r = y[n];
        else {
          const b = qi(a);
          r = y[n] = p.call(
            null,
            e
          ), b();
        }
      } else
        r = p;
      a.ce && a.ce._setProp(n, r);
    }
    u[
      0
      /* shouldCast */
    ] && (s && !f ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Pr(n)) && (r = !0));
  }
  return r;
}
const P0 = /* @__PURE__ */ new WeakMap();
function Jf(t, e, n = !1) {
  const r = n ? P0 : e.propsCache, a = r.get(t);
  if (a)
    return a;
  const s = t.props, u = {}, f = [];
  let p = !1;
  if (!Ht(t)) {
    const b = (h) => {
      p = !0;
      const [S, _] = Jf(h, e, !0);
      Oe(u, S), _ && f.push(..._);
    };
    !n && e.mixins.length && e.mixins.forEach(b), t.extends && b(t.extends), t.mixins && t.mixins.forEach(b);
  }
  if (!s && !p)
    return Jt(t) && r.set(t, Gr), Gr;
  if (Ot(s))
    for (let b = 0; b < s.length; b++) {
      const h = We(s[b]);
      Zl(h) && (u[h] = te);
    }
  else if (s)
    for (const b in s) {
      const h = We(b);
      if (Zl(h)) {
        const S = s[b], _ = u[h] = Ot(S) || Ht(S) ? { type: S } : Oe({}, S), I = _.type;
        let L = !1, O = !0;
        if (Ot(I))
          for (let R = 0; R < I.length; ++R) {
            const P = I[R], C = Ht(P) && P.name;
            if (C === "Boolean") {
              L = !0;
              break;
            } else C === "String" && (O = !1);
          }
        else
          L = Ht(I) && I.name === "Boolean";
        _[
          0
          /* shouldCast */
        ] = L, _[
          1
          /* shouldCastTrue */
        ] = O, (L || Yt(_, "default")) && f.push(h);
      }
    }
  const y = [u, f];
  return Jt(t) && r.set(t, y), y;
}
function Zl(t) {
  return t[0] !== "$" && !Ni(t);
}
const yc = (t) => t === "_" || t === "_ctx" || t === "$stable", vc = (t) => Ot(t) ? t.map(En) : [En(t)], C0 = (t, e, n) => {
  if (e._n)
    return e;
  const r = Ug((...a) => vc(e(...a)), n);
  return r._c = !1, r;
}, Qf = (t, e, n) => {
  const r = t._ctx;
  for (const a in t) {
    if (yc(a)) continue;
    const s = t[a];
    if (Ht(s))
      e[a] = C0(a, s, r);
    else if (s != null) {
      const u = vc(s);
      e[a] = () => u;
    }
  }
}, td = (t, e) => {
  const n = vc(e);
  t.slots.default = () => n;
}, ed = (t, e, n) => {
  for (const r in e)
    (n || !yc(r)) && (t[r] = e[r]);
}, A0 = (t, e, n) => {
  const r = t.slots = qf();
  if (t.vnode.shapeFlag & 32) {
    const a = e._;
    a ? (ed(r, e, n), n && uf(r, "_", a, !0)) : Qf(e, r);
  } else e && td(t, e);
}, I0 = (t, e, n) => {
  const { vnode: r, slots: a } = t;
  let s = !0, u = te;
  if (r.shapeFlag & 32) {
    const f = e._;
    f ? n && f === 1 ? s = !1 : ed(a, e, n) : (s = !e.$stable, Qf(e, a)), u = e;
  } else e && (td(t, e), u = { default: 1 });
  if (s)
    for (const f in a)
      !yc(f) && u[f] == null && delete a[f];
}, tn = R0;
function E0(t) {
  return D0(t);
}
function D0(t, e) {
  const n = So();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: a,
    patchProp: s,
    createElement: u,
    createText: f,
    createComment: p,
    setText: y,
    setElementText: b,
    parentNode: h,
    nextSibling: S,
    setScopeId: _ = Rn,
    insertStaticContent: I
  } = t, L = (D, F, Y, at = null, A = null, z = null, G = void 0, X = null, Q = !!F.dynamicChildren) => {
    if (D === F)
      return;
    D && !hi(D, F) && (at = ue(D), Rt(D, A, z, !0), D = null), F.patchFlag === -2 && (Q = !1, F.dynamicChildren = null);
    const { type: K, ref: pt, shapeFlag: ft } = F;
    switch (K) {
      case Ao:
        O(D, F, Y, at);
        break;
      case or:
        R(D, F, Y, at);
        break;
      case za:
        D == null && P(F, Y, at, G);
        break;
      case ee:
        xt(
          D,
          F,
          Y,
          at,
          A,
          z,
          G,
          X,
          Q
        );
        break;
      default:
        ft & 1 ? j(
          D,
          F,
          Y,
          at,
          A,
          z,
          G,
          X,
          Q
        ) : ft & 6 ? St(
          D,
          F,
          Y,
          at,
          A,
          z,
          G,
          X,
          Q
        ) : (ft & 64 || ft & 128) && K.process(
          D,
          F,
          Y,
          at,
          A,
          z,
          G,
          X,
          Q,
          Ce
        );
    }
    pt != null && A ? Ii(pt, D && D.ref, z, F || D, !F) : pt == null && D && D.ref != null && Ii(D.ref, null, z, D, !0);
  }, O = (D, F, Y, at) => {
    if (D == null)
      r(
        F.el = f(F.children),
        Y,
        at
      );
    else {
      const A = F.el = D.el;
      F.children !== D.children && y(A, F.children);
    }
  }, R = (D, F, Y, at) => {
    D == null ? r(
      F.el = p(F.children || ""),
      Y,
      at
    ) : F.el = D.el;
  }, P = (D, F, Y, at) => {
    [D.el, D.anchor] = I(
      D.children,
      F,
      Y,
      at,
      D.el,
      D.anchor
    );
  }, C = ({ el: D, anchor: F }, Y, at) => {
    let A;
    for (; D && D !== F; )
      A = S(D), r(D, Y, at), D = A;
    r(F, Y, at);
  }, E = ({ el: D, anchor: F }) => {
    let Y;
    for (; D && D !== F; )
      Y = S(D), a(D), D = Y;
    a(F);
  }, j = (D, F, Y, at, A, z, G, X, Q) => {
    if (F.type === "svg" ? G = "svg" : F.type === "math" && (G = "mathml"), D == null)
      st(
        F,
        Y,
        at,
        A,
        z,
        G,
        X,
        Q
      );
    else {
      const K = D.el && D.el._isVueCE ? D.el : null;
      try {
        K && K._beginPatch(), _t(
          D,
          F,
          A,
          z,
          G,
          X,
          Q
        );
      } finally {
        K && K._endPatch();
      }
    }
  }, st = (D, F, Y, at, A, z, G, X) => {
    let Q, K;
    const { props: pt, shapeFlag: ft, transition: ut, dirs: wt } = D;
    if (Q = D.el = u(
      D.type,
      z,
      pt && pt.is,
      pt
    ), ft & 8 ? b(Q, D.children) : ft & 16 && T(
      D.children,
      Q,
      null,
      at,
      A,
      ms(D, z),
      G,
      X
    ), wt && ur(D, null, at, "created"), dt(Q, D, D.scopeId, G, at), pt) {
      for (const Et in pt)
        Et !== "value" && !Ni(Et) && s(Q, Et, null, pt[Et], z, at);
      "value" in pt && s(Q, "value", null, pt.value, z), (K = pt.onVnodeBeforeMount) && kn(K, at, D);
    }
    wt && ur(D, null, at, "beforeMount");
    const Ct = T0(A, ut);
    Ct && ut.beforeEnter(Q), r(Q, F, Y), ((K = pt && pt.onVnodeMounted) || Ct || wt) && tn(() => {
      try {
        K && kn(K, at, D), Ct && ut.enter(Q), wt && ur(D, null, at, "mounted");
      } finally {
      }
    }, A);
  }, dt = (D, F, Y, at, A) => {
    if (Y && _(D, Y), at)
      for (let z = 0; z < at.length; z++)
        _(D, at[z]);
    if (A) {
      let z = A.subTree;
      if (F === z || ad(z.type) && (z.ssContent === F || z.ssFallback === F)) {
        const G = A.vnode;
        dt(
          D,
          G,
          G.scopeId,
          G.slotScopeIds,
          A.parent
        );
      }
    }
  }, T = (D, F, Y, at, A, z, G, X, Q = 0) => {
    for (let K = Q; K < D.length; K++) {
      const pt = D[K] = X ? Gn(D[K]) : En(D[K]);
      L(
        null,
        pt,
        F,
        Y,
        at,
        A,
        z,
        G,
        X
      );
    }
  }, _t = (D, F, Y, at, A, z, G) => {
    const X = F.el = D.el;
    let { patchFlag: Q, dynamicChildren: K, dirs: pt } = F;
    Q |= D.patchFlag & 16;
    const ft = D.props || te, ut = F.props || te;
    let wt;
    if (Y && fr(Y, !1), (wt = ut.onVnodeBeforeUpdate) && kn(wt, Y, F, D), pt && ur(F, D, Y, "beforeUpdate"), Y && fr(Y, !0), (ft.innerHTML && ut.innerHTML == null || ft.textContent && ut.textContent == null) && b(X, ""), K ? V(
      D.dynamicChildren,
      K,
      X,
      Y,
      at,
      ms(F, A),
      z
    ) : G || q(
      D,
      F,
      X,
      null,
      Y,
      at,
      ms(F, A),
      z,
      !1
    ), Q > 0) {
      if (Q & 16)
        ht(X, ft, ut, Y, A);
      else if (Q & 2 && ft.class !== ut.class && s(X, "class", null, ut.class, A), Q & 4 && s(X, "style", ft.style, ut.style, A), Q & 8) {
        const Ct = F.dynamicProps;
        for (let Et = 0; Et < Ct.length; Et++) {
          const Ft = Ct[Et], ne = ft[Ft], ge = ut[Ft];
          (ge !== ne || Ft === "value") && s(X, Ft, ne, ge, A, Y);
        }
      }
      Q & 1 && D.children !== F.children && b(X, F.children);
    } else !G && K == null && ht(X, ft, ut, Y, A);
    ((wt = ut.onVnodeUpdated) || pt) && tn(() => {
      wt && kn(wt, Y, F, D), pt && ur(F, D, Y, "updated");
    }, at);
  }, V = (D, F, Y, at, A, z, G) => {
    for (let X = 0; X < F.length; X++) {
      const Q = D[X], K = F[X], pt = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Q.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Q.type === ee || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !hi(Q, K) || // - In the case of a component, it could contain anything.
        Q.shapeFlag & 198) ? h(Q.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Y
        )
      );
      L(
        Q,
        K,
        pt,
        null,
        at,
        A,
        z,
        G,
        !0
      );
    }
  }, ht = (D, F, Y, at, A) => {
    if (F !== Y) {
      if (F !== te)
        for (const z in F)
          !Ni(z) && !(z in Y) && s(
            D,
            z,
            F[z],
            null,
            A,
            at
          );
      for (const z in Y) {
        if (Ni(z)) continue;
        const G = Y[z], X = F[z];
        G !== X && z !== "value" && s(D, z, X, G, A, at);
      }
      "value" in Y && s(D, "value", F.value, Y.value, A);
    }
  }, xt = (D, F, Y, at, A, z, G, X, Q) => {
    const K = F.el = D ? D.el : f(""), pt = F.anchor = D ? D.anchor : f("");
    let { patchFlag: ft, dynamicChildren: ut, slotScopeIds: wt } = F;
    wt && (X = X ? X.concat(wt) : wt), D == null ? (r(K, Y, at), r(pt, Y, at), T(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      F.children || [],
      Y,
      pt,
      A,
      z,
      G,
      X,
      Q
    )) : ft > 0 && ft & 64 && ut && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    D.dynamicChildren && D.dynamicChildren.length === ut.length ? (V(
      D.dynamicChildren,
      ut,
      Y,
      A,
      z,
      G,
      X
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (F.key != null || A && F === A.subTree) && nd(
      D,
      F,
      !0
      /* shallow */
    )) : q(
      D,
      F,
      Y,
      pt,
      A,
      z,
      G,
      X,
      Q
    );
  }, St = (D, F, Y, at, A, z, G, X, Q) => {
    F.slotScopeIds = X, D == null ? F.shapeFlag & 512 ? A.ctx.activate(
      F,
      Y,
      at,
      G,
      Q
    ) : it(
      F,
      Y,
      at,
      A,
      z,
      G,
      Q
    ) : tt(D, F, Q);
  }, it = (D, F, Y, at, A, z, G) => {
    const X = D.component = U0(
      D,
      at,
      A
    );
    if (Vf(D) && (X.ctx.renderer = Ce), G0(X, !1, G), X.asyncDep) {
      if (A && A.registerDep(X, ct, G), !D.el) {
        const Q = X.subTree = ke(or);
        R(null, Q, F, Y), D.placeholder = Q.el;
      }
    } else
      ct(
        X,
        D,
        F,
        Y,
        A,
        z,
        G
      );
  }, tt = (D, F, Y) => {
    const at = F.component = D.component;
    if (S0(D, F, Y))
      if (at.asyncDep && !at.asyncResolved) {
        gt(at, F, Y);
        return;
      } else
        at.next = F, at.update();
    else
      F.el = D.el, at.vnode = F;
  }, ct = (D, F, Y, at, A, z, G) => {
    const X = () => {
      if (D.isMounted) {
        let { next: ft, bu: ut, u: wt, parent: Ct, vnode: Et } = D;
        {
          const oe = rd(D);
          if (oe) {
            ft && (ft.el = Et.el, gt(D, ft, G)), oe.asyncDep.then(() => {
              tn(() => {
                D.isUnmounted || K();
              }, A);
            });
            return;
          }
        }
        let Ft = ft, ne;
        fr(D, !1), ft ? (ft.el = Et.el, gt(D, ft, G)) : ft = Et, ut && us(ut), (ne = ft.props && ft.props.onVnodeBeforeUpdate) && kn(ne, Ct, ft, Et), fr(D, !0);
        const ge = ql(D), kt = D.subTree;
        D.subTree = ge, L(
          kt,
          ge,
          // parent may have changed if it's in a teleport
          h(kt.el),
          // anchor may have changed if it's in a fragment
          ue(kt),
          D,
          A,
          z
        ), ft.el = ge.el, Ft === null && k0(D, ge.el), wt && tn(wt, A), (ne = ft.props && ft.props.onVnodeUpdated) && tn(
          () => kn(ne, Ct, ft, Et),
          A
        );
      } else {
        let ft;
        const { el: ut, props: wt } = F, { bm: Ct, m: Et, parent: Ft, root: ne, type: ge } = D, kt = Ei(F);
        fr(D, !1), Ct && us(Ct), !kt && (ft = wt && wt.onVnodeBeforeMount) && kn(ft, Ft, F), fr(D, !0);
        {
          ne.ce && ne.ce._hasShadowRoot() && ne.ce._injectChildStyle(
            ge,
            D.parent ? D.parent.type : void 0
          );
          const oe = D.subTree = ql(D);
          L(
            null,
            oe,
            Y,
            at,
            D,
            A,
            z
          ), F.el = oe.el;
        }
        if (Et && tn(Et, A), !kt && (ft = wt && wt.onVnodeMounted)) {
          const oe = F;
          tn(
            () => kn(ft, Ft, oe),
            A
          );
        }
        (F.shapeFlag & 256 || Ft && Ei(Ft.vnode) && Ft.vnode.shapeFlag & 256) && D.a && tn(D.a, A), D.isMounted = !0, F = Y = at = null;
      }
    };
    D.scope.on();
    const Q = D.effect = new pf(X);
    D.scope.off();
    const K = D.update = Q.run.bind(Q), pt = D.job = Q.runIfDirty.bind(Q);
    pt.i = D, pt.id = D.uid, Q.scheduler = () => pc(pt), fr(D, !0), K();
  }, gt = (D, F, Y) => {
    F.component = D;
    const at = D.vnode.props;
    D.vnode = F, D.next = null, N0(D, F.props, at, Y), I0(D, F.children, Y), Yn(), $l(D), qn();
  }, q = (D, F, Y, at, A, z, G, X, Q = !1) => {
    const K = D && D.children, pt = D ? D.shapeFlag : 0, ft = F.children, { patchFlag: ut, shapeFlag: wt } = F;
    if (ut > 0) {
      if (ut & 128) {
        Nt(
          K,
          ft,
          Y,
          at,
          A,
          z,
          G,
          X,
          Q
        );
        return;
      } else if (ut & 256) {
        lt(
          K,
          ft,
          Y,
          at,
          A,
          z,
          G,
          X,
          Q
        );
        return;
      }
    }
    wt & 8 ? (pt & 16 && g(K, A, z), ft !== K && b(Y, ft)) : pt & 16 ? wt & 16 ? Nt(
      K,
      ft,
      Y,
      at,
      A,
      z,
      G,
      X,
      Q
    ) : g(K, A, z, !0) : (pt & 8 && b(Y, ""), wt & 16 && T(
      ft,
      Y,
      at,
      A,
      z,
      G,
      X,
      Q
    ));
  }, lt = (D, F, Y, at, A, z, G, X, Q) => {
    D = D || Gr, F = F || Gr;
    const K = D.length, pt = F.length, ft = Math.min(K, pt);
    let ut;
    for (ut = 0; ut < ft; ut++) {
      const wt = F[ut] = Q ? Gn(F[ut]) : En(F[ut]);
      L(
        D[ut],
        wt,
        Y,
        null,
        A,
        z,
        G,
        X,
        Q
      );
    }
    K > pt ? g(
      D,
      A,
      z,
      !0,
      !1,
      ft
    ) : T(
      F,
      Y,
      at,
      A,
      z,
      G,
      X,
      Q,
      ft
    );
  }, Nt = (D, F, Y, at, A, z, G, X, Q) => {
    let K = 0;
    const pt = F.length;
    let ft = D.length - 1, ut = pt - 1;
    for (; K <= ft && K <= ut; ) {
      const wt = D[K], Ct = F[K] = Q ? Gn(F[K]) : En(F[K]);
      if (hi(wt, Ct))
        L(
          wt,
          Ct,
          Y,
          null,
          A,
          z,
          G,
          X,
          Q
        );
      else
        break;
      K++;
    }
    for (; K <= ft && K <= ut; ) {
      const wt = D[ft], Ct = F[ut] = Q ? Gn(F[ut]) : En(F[ut]);
      if (hi(wt, Ct))
        L(
          wt,
          Ct,
          Y,
          null,
          A,
          z,
          G,
          X,
          Q
        );
      else
        break;
      ft--, ut--;
    }
    if (K > ft) {
      if (K <= ut) {
        const wt = ut + 1, Ct = wt < pt ? F[wt].el : at;
        for (; K <= ut; )
          L(
            null,
            F[K] = Q ? Gn(F[K]) : En(F[K]),
            Y,
            Ct,
            A,
            z,
            G,
            X,
            Q
          ), K++;
      }
    } else if (K > ut)
      for (; K <= ft; )
        Rt(D[K], A, z, !0), K++;
    else {
      const wt = K, Ct = K, Et = /* @__PURE__ */ new Map();
      for (K = Ct; K <= ut; K++) {
        const Ve = F[K] = Q ? Gn(F[K]) : En(F[K]);
        Ve.key != null && Et.set(Ve.key, K);
      }
      let Ft, ne = 0;
      const ge = ut - Ct + 1;
      let kt = !1, oe = 0;
      const ln = new Array(ge);
      for (K = 0; K < ge; K++) ln[K] = 0;
      for (K = wt; K <= ft; K++) {
        const Ve = D[K];
        if (ne >= ge) {
          Rt(Ve, A, z, !0);
          continue;
        }
        let un;
        if (Ve.key != null)
          un = Et.get(Ve.key);
        else
          for (Ft = Ct; Ft <= ut; Ft++)
            if (ln[Ft - Ct] === 0 && hi(Ve, F[Ft])) {
              un = Ft;
              break;
            }
        un === void 0 ? Rt(Ve, A, z, !0) : (ln[un - Ct] = K + 1, un >= oe ? oe = un : kt = !0, L(
          Ve,
          F[un],
          Y,
          null,
          A,
          z,
          G,
          X,
          Q
        ), ne++);
      }
      const me = kt ? L0(ln) : Gr;
      for (Ft = me.length - 1, K = ge - 1; K >= 0; K--) {
        const Ve = Ct + K, un = F[Ve], ni = F[Ve + 1], Zi = Ve + 1 < pt ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ni.el || id(ni)
        ) : at;
        ln[K] === 0 ? L(
          null,
          un,
          Y,
          Zi,
          A,
          z,
          G,
          X,
          Q
        ) : kt && (Ft < 0 || K !== me[Ft] ? Lt(un, Y, Zi, 2) : Ft--);
      }
    }
  }, Lt = (D, F, Y, at, A = null) => {
    const { el: z, type: G, transition: X, children: Q, shapeFlag: K } = D;
    if (K & 6) {
      Lt(D.component.subTree, F, Y, at);
      return;
    }
    if (K & 128) {
      D.suspense.move(F, Y, at);
      return;
    }
    if (K & 64) {
      G.move(D, F, Y, Ce);
      return;
    }
    if (G === ee) {
      r(z, F, Y);
      for (let ft = 0; ft < Q.length; ft++)
        Lt(Q[ft], F, Y, at);
      r(D.anchor, F, Y);
      return;
    }
    if (G === za) {
      C(D, F, Y);
      return;
    }
    if (at !== 2 && K & 1 && X)
      if (at === 0)
        X.beforeEnter(z), r(z, F, Y), tn(() => X.enter(z), A);
      else {
        const { leave: ft, delayLeave: ut, afterLeave: wt } = X, Ct = () => {
          D.ctx.isUnmounted ? a(z) : r(z, F, Y);
        }, Et = () => {
          z._isLeaving && z[Xg](
            !0
            /* cancelled */
          ), ft(z, () => {
            Ct(), wt && wt();
          });
        };
        ut ? ut(z, Ct, Et) : Et();
      }
    else
      r(z, F, Y);
  }, Rt = (D, F, Y, at = !1, A = !1) => {
    const {
      type: z,
      props: G,
      ref: X,
      children: Q,
      dynamicChildren: K,
      shapeFlag: pt,
      patchFlag: ft,
      dirs: ut,
      cacheIndex: wt,
      memo: Ct
    } = D;
    if (ft === -2 && (A = !1), X != null && (Yn(), Ii(X, null, Y, D, !0), qn()), wt != null && (F.renderCache[wt] = void 0), pt & 256) {
      F.ctx.deactivate(D);
      return;
    }
    const Et = pt & 1 && ut, Ft = !Ei(D);
    let ne;
    if (Ft && (ne = G && G.onVnodeBeforeUnmount) && kn(ne, F, D), pt & 6)
      Fe(D.component, Y, at);
    else {
      if (pt & 128) {
        D.suspense.unmount(Y, at);
        return;
      }
      Et && ur(D, null, F, "beforeUnmount"), pt & 64 ? D.type.remove(
        D,
        F,
        Y,
        Ce,
        at
      ) : K && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !K.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (z !== ee || ft > 0 && ft & 64) ? g(
        K,
        F,
        Y,
        !1,
        !0
      ) : (z === ee && ft & 384 || !A && pt & 16) && g(Q, F, Y), at && le(D);
    }
    const ge = Ct != null && wt == null;
    (Ft && (ne = G && G.onVnodeUnmounted) || Et || ge) && tn(() => {
      ne && kn(ne, F, D), Et && ur(D, null, F, "unmounted"), ge && (D.el = null);
    }, Y);
  }, le = (D) => {
    const { type: F, el: Y, anchor: at, transition: A } = D;
    if (F === ee) {
      _e(Y, at);
      return;
    }
    if (F === za) {
      E(D);
      return;
    }
    const z = () => {
      a(Y), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (D.shapeFlag & 1 && A && !A.persisted) {
      const { leave: G, delayLeave: X } = A, Q = () => G(Y, z);
      X ? X(D.el, z, Q) : Q();
    } else
      z();
  }, _e = (D, F) => {
    let Y;
    for (; D !== F; )
      Y = S(D), a(D), D = Y;
    a(F);
  }, Fe = (D, F, Y) => {
    const { bum: at, scope: A, job: z, subTree: G, um: X, m: Q, a: K } = D;
    Jl(Q), Jl(K), at && us(at), A.stop(), z && (z.flags |= 8, Rt(G, D, F, Y)), X && tn(X, F), tn(() => {
      D.isUnmounted = !0;
    }, F);
  }, g = (D, F, Y, at = !1, A = !1, z = 0) => {
    for (let G = z; G < D.length; G++)
      Rt(D[G], F, Y, at, A);
  }, ue = (D) => {
    if (D.shapeFlag & 6)
      return ue(D.component.subTree);
    if (D.shapeFlag & 128)
      return D.suspense.next();
    const F = S(D.anchor || D.el), Y = F && F[Yg];
    return Y ? S(Y) : F;
  };
  let Ye = !1;
  const qe = (D, F, Y) => {
    let at;
    D == null ? F._vnode && (Rt(F._vnode, null, null, !0), at = F._vnode.component) : L(
      F._vnode || null,
      D,
      F,
      null,
      null,
      null,
      Y
    ), F._vnode = D, Ye || (Ye = !0, $l(at), Ef(), Ye = !1);
  }, Ce = {
    p: L,
    um: Rt,
    m: Lt,
    r: le,
    mt: it,
    mc: T,
    pc: q,
    pbc: V,
    n: ue,
    o: t
  };
  return {
    render: qe,
    hydrate: void 0,
    createApp: y0(qe)
  };
}
function ms({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function fr({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function T0(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function nd(t, e, n = !1) {
  const r = t.children, a = e.children;
  if (Ot(r) && Ot(a))
    for (let s = 0; s < r.length; s++) {
      const u = r[s];
      let f = a[s];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[s] = Gn(a[s]), f.el = u.el), !n && f.patchFlag !== -2 && nd(u, f)), f.type === Ao && (f.patchFlag === -1 && (f = a[s] = Gn(f)), f.el = u.el), f.type === or && !f.el && (f.el = u.el);
    }
}
function L0(t) {
  const e = t.slice(), n = [0];
  let r, a, s, u, f;
  const p = t.length;
  for (r = 0; r < p; r++) {
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
function rd(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : rd(e);
}
function Jl(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function id(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? id(e.subTree) : null;
}
const ad = (t) => t.__isSuspense;
function R0(t, e) {
  e && e.pendingBranch ? Ot(t) ? e.effects.push(...t) : e.effects.push(t) : jg(t);
}
const ee = /* @__PURE__ */ Symbol.for("v-fgt"), Ao = /* @__PURE__ */ Symbol.for("v-txt"), or = /* @__PURE__ */ Symbol.for("v-cmt"), za = /* @__PURE__ */ Symbol.for("v-stc"), Ti = [];
let cn = null;
function At(t = !1) {
  Ti.push(cn = t ? null : []);
}
function O0() {
  Ti.pop(), cn = Ti[Ti.length - 1] || null;
}
let Ui = 1;
function Ql(t, e = !1) {
  Ui += t, t < 0 && cn && e && (cn.hasOnce = !0);
}
function od(t) {
  return t.dynamicChildren = Ui > 0 ? cn || Gr : null, O0(), Ui > 0 && cn && cn.push(t), t;
}
function Tt(t, e, n, r, a, s) {
  return od(
    ot(
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
function ei(t, e, n, r, a) {
  return od(
    ke(
      t,
      e,
      n,
      r,
      a,
      !0
    )
  );
}
function sd(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function hi(t, e) {
  return t.type === e.type && t.key === e.key;
}
const cd = ({ key: t }) => t ?? null, $a = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? ve(t) || /* @__PURE__ */ Re(t) || Ht(t) ? { i: sn, r: t, k: e, f: !!n } : t : null);
function ot(t, e = null, n = null, r = 0, a = null, s = t === ee ? 0 : 1, u = !1, f = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && cd(e),
    ref: e && $a(e),
    scopeId: Tf,
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
    ctx: sn
  };
  return f ? (bc(p, n), s & 128 && t.normalize(p)) : n && (p.shapeFlag |= ve(n) ? 8 : 16), Ui > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  cn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && cn.push(p), p;
}
const ke = F0;
function F0(t, e = null, n = null, r = 0, a = null, s = !1) {
  if ((!t || t === jf) && (t = or), sd(t)) {
    const f = Qr(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && bc(f, n), Ui > 0 && !s && cn && (f.shapeFlag & 6 ? cn[cn.indexOf(t)] = f : cn.push(f)), f.patchFlag = -2, f;
  }
  if (X0(t) && (t = t.__vccOpts), e) {
    e = V0(e);
    let { class: f, style: p } = e;
    f && !ve(f) && (e.class = be(f)), Jt(p) && (/* @__PURE__ */ dc(p) && !Ot(p) && (p = Oe({}, p)), e.style = Ue(p));
  }
  const u = ve(t) ? 1 : ad(t) ? 128 : qg(t) ? 64 : Jt(t) ? 4 : Ht(t) ? 2 : 0;
  return ot(
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
function V0(t) {
  return t ? /* @__PURE__ */ dc(t) || Xf(t) ? Oe({}, t) : t : null;
}
function Qr(t, e, n = !1, r = !1) {
  const { props: a, ref: s, patchFlag: u, children: f, transition: p } = t, y = e ? ld(a || {}, e) : a, b = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: y,
    key: y && cd(y),
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
    patchFlag: e && t.type !== ee ? u === -1 ? 16 : u | 16 : u,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: p,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Qr(t.ssContent),
    ssFallback: t.ssFallback && Qr(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return p && r && gc(
    b,
    p.clone(b)
  ), b;
}
function H0(t = " ", e = 0) {
  return ke(Ao, null, t, e);
}
function z0(t, e) {
  const n = ke(za, null, t);
  return n.staticCount = e, n;
}
function dn(t = "", e = !1) {
  return e ? (At(), ei(or, null, t)) : ke(or, null, t);
}
function En(t) {
  return t == null || typeof t == "boolean" ? ke(or) : Ot(t) ? ke(
    ee,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : sd(t) ? Gn(t) : ke(Ao, null, String(t));
}
function Gn(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Qr(t);
}
function bc(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Ot(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const a = e.default;
      a && (a._c && (a._d = !1), bc(t, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = e._;
      !a && !Xf(e) ? e._ctx = sn : a === 3 && sn && (sn.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else Ht(e) ? (e = { default: e, _ctx: sn }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [H0(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function ld(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const a in r)
      if (a === "class")
        e.class !== r.class && (e.class = be([e.class, r.class]));
      else if (a === "style")
        e.style = Ue([e.style, r.style]);
      else if (bo(a)) {
        const s = e[a], u = r[a];
        u && s !== u && !(Ot(s) && s.includes(u)) ? e[a] = s ? [].concat(s, u) : u : u == null && s == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !_o(a) && (e[a] = u);
      } else a !== "" && (e[a] = r[a]);
  }
  return e;
}
function kn(t, e, n, r = null) {
  Fn(t, e, 7, [
    n,
    r
  ]);
}
const $0 = Gf();
let j0 = 0;
function U0(t, e, n) {
  const r = t.type, a = (e ? e.appContext : t.appContext) || $0, s = {
    uid: j0++,
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
    scope: new fg(
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
    propsOptions: Jf(r, a),
    emitsOptions: Kf(r, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: te,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: te,
    data: te,
    props: te,
    attrs: te,
    slots: te,
    refs: te,
    setupState: te,
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
  return s.ctx = { _: s }, s.root = e ? e.root : s, s.emit = b0.bind(null, s), t.ce && t.ce(s), s;
}
let Le = null;
const B0 = () => Le || sn;
let eo, js;
{
  const t = So(), e = (n, r) => {
    let a;
    return (a = t[n]) || (a = t[n] = []), a.push(r), (s) => {
      a.length > 1 ? a.forEach((u) => u(s)) : a[0](s);
    };
  };
  eo = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Le = n
  ), js = e(
    "__VUE_SSR_SETTERS__",
    (n) => Bi = n
  );
}
const qi = (t) => {
  const e = Le;
  return eo(t), t.scope.on(), () => {
    t.scope.off(), eo(e);
  };
}, tu = () => {
  Le && Le.scope.off(), eo(null);
};
function ud(t) {
  return t.vnode.shapeFlag & 4;
}
let Bi = !1;
function G0(t, e = !1, n = !1) {
  e && js(e);
  const { props: r, children: a } = t.vnode, s = ud(t);
  M0(t, r, s, e), A0(t, a, n || e);
  const u = s ? K0(t, e) : void 0;
  return e && js(!1), u;
}
function K0(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, u0);
  const { setup: r } = n;
  if (r) {
    Yn();
    const a = t.setupContext = r.length > 1 ? Y0(t) : null, s = qi(t), u = Yi(
      r,
      t,
      0,
      [
        t.props,
        a
      ]
    ), f = sf(u);
    if (qn(), s(), (f || t.sp) && !Ei(t) && Ff(t), f) {
      if (u.then(tu, tu), e)
        return u.then((p) => {
          eu(t, p);
        }).catch((p) => {
          No(p, t, 0);
        });
      t.asyncDep = u;
    } else
      eu(t, u);
  } else
    fd(t);
}
function eu(t, e, n) {
  Ht(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Jt(e) && (t.setupState = Cf(e)), fd(t);
}
function fd(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || Rn);
  {
    const a = qi(t);
    Yn();
    try {
      f0(t);
    } finally {
      qn(), a();
    }
  }
}
const W0 = {
  get(t, e) {
    return Te(t, "get", ""), t[e];
  }
};
function Y0(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, W0),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Io(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Cf(Dg(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in Di)
        return Di[n](t);
    },
    has(e, n) {
      return n in e || n in Di;
    }
  })) : t.proxy;
}
function q0(t, e = !0) {
  return Ht(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function X0(t) {
  return Ht(t) && "__vccOpts" in t;
}
const qr = (t, e) => /* @__PURE__ */ Fg(t, e, Bi), Z0 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Us;
const nu = typeof window < "u" && window.trustedTypes;
if (nu)
  try {
    Us = /* @__PURE__ */ nu.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const dd = Us ? (t) => Us.createHTML(t) : (t) => t, J0 = "http://www.w3.org/2000/svg", Q0 = "http://www.w3.org/1998/Math/MathML", Bn = typeof document < "u" ? document : null, ru = Bn && /* @__PURE__ */ Bn.createElement("template"), t1 = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const a = e === "svg" ? Bn.createElementNS(J0, t) : e === "mathml" ? Bn.createElementNS(Q0, t) : n ? Bn.createElement(t, { is: n }) : Bn.createElement(t);
    return t === "select" && r && r.multiple != null && a.setAttribute("multiple", r.multiple), a;
  },
  createText: (t) => Bn.createTextNode(t),
  createComment: (t) => Bn.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Bn.querySelector(t),
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
      ru.innerHTML = dd(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const f = ru.content;
      if (r === "svg" || r === "mathml") {
        const p = f.firstChild;
        for (; p.firstChild; )
          f.appendChild(p.firstChild);
        f.removeChild(p);
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
const no = /* @__PURE__ */ Symbol("_vod"), hd = /* @__PURE__ */ Symbol("_vsh"), pd = {
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
  t.style.display = e ? t[no] : "none", t[hd] = !e;
}
const r1 = /* @__PURE__ */ Symbol(""), i1 = /(?:^|;)\s*display\s*:/;
function a1(t, e, n) {
  const r = t.style, a = ve(n);
  let s = !1;
  if (n && !a) {
    if (e)
      if (ve(e))
        for (const u of e.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && ja(r, f, "");
        }
      else
        for (const u in e)
          n[u] == null && ja(r, u, "");
    for (const u in n)
      u === "display" && (s = !0), ja(r, u, n[u]);
  } else if (a) {
    if (e !== n) {
      const u = r[r1];
      u && (n += ";" + u), r.cssText = n, s = i1.test(n);
    }
  } else e && t.removeAttribute("style");
  no in t && (t[no] = s ? r.display : "", t[hd] && (r.display = "none"));
}
const iu = /\s*!important$/;
function ja(t, e, n) {
  if (Ot(n))
    n.forEach((r) => ja(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = o1(t, e);
    iu.test(n) ? t.setProperty(
      Pr(r),
      n.replace(iu, ""),
      "important"
    ) : t[r] = n;
  }
}
const au = ["Webkit", "Moz", "ms"], ys = {};
function o1(t, e) {
  const n = ys[e];
  if (n)
    return n;
  let r = We(e);
  if (r !== "filter" && r in t)
    return ys[e] = r;
  r = wo(r);
  for (let a = 0; a < au.length; a++) {
    const s = au[a] + r;
    if (s in t)
      return ys[e] = s;
  }
  return e;
}
const ou = "http://www.w3.org/1999/xlink";
function su(t, e, n, r, a, s = lg(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(ou, e.slice(6, e.length)) : t.setAttributeNS(ou, e, n) : n == null || s && !ff(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    s ? "" : On(n) ? String(n) : n
  );
}
function cu(t, e, n, r, a) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? dd(n) : n);
    return;
  }
  const s = t.tagName;
  if (e === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const f = s === "OPTION" ? t.getAttribute("value") || "" : t.value, p = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== p || !("_value" in t)) && (t.value = p), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const f = typeof t[e];
    f === "boolean" ? n = ff(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(a || e);
}
function s1(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function c1(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const lu = /* @__PURE__ */ Symbol("_vei");
function l1(t, e, n, r, a = null) {
  const s = t[lu] || (t[lu] = {}), u = s[e];
  if (r && u)
    u.value = r;
  else {
    const [f, p] = u1(e);
    if (r) {
      const y = s[e] = h1(
        r,
        a
      );
      s1(t, f, y, p);
    } else u && (c1(t, f, u, p), s[e] = void 0);
  }
}
const uu = /(?:Once|Passive|Capture)$/;
function u1(t) {
  let e;
  if (uu.test(t)) {
    e = {};
    let r;
    for (; r = t.match(uu); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Pr(t.slice(2)), e];
}
let vs = 0;
const f1 = /* @__PURE__ */ Promise.resolve(), d1 = () => vs || (f1.then(() => vs = 0), vs = Date.now());
function h1(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Fn(
      p1(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = d1(), n;
}
function p1(t, e) {
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
const fu = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, g1 = (t, e, n, r, a, s) => {
  const u = a === "svg";
  e === "class" ? n1(t, r, u) : e === "style" ? a1(t, n, r) : bo(e) ? _o(e) || l1(t, e, n, r, s) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : m1(t, e, r, u)) ? (cu(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && su(t, e, r, u, s, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (y1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !ve(r))) ? cu(t, We(e), r, s, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), su(t, e, r, u));
};
function m1(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && fu(e) && Ht(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const a = t.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return fu(e) && ve(n) ? !1 : e in t;
}
function y1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const r = We(e);
  return Array.isArray(n) ? n.some((a) => We(a) === r) : Object.keys(n).some((a) => We(a) === r);
}
const v1 = ["ctrl", "shift", "alt", "meta"], b1 = {
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
}, gd = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = ((a, ...s) => {
    for (let u = 0; u < e.length; u++) {
      const f = b1[e[u]];
      if (f && f(a, e)) return;
    }
    return t(a, ...s);
  }));
}, _1 = /* @__PURE__ */ Oe({ patchProp: g1 }, t1);
let du;
function x1() {
  return du || (du = E0(_1));
}
const w1 = ((...t) => {
  const e = x1().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const a = k1(r);
    if (!a) return;
    const s = e._component;
    !Ht(s) && !s.render && !s.template && (s.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, S1(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, e;
});
function S1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function k1(t) {
  return ve(t) ? document.querySelector(t) : t;
}
const pe = Math.PI / 180, md = Math.PI * 2, M1 = 2048;
function Qt(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function sr(t, e, n) {
  return { x: t, y: e, z: n };
}
function ro(t, e) {
  return sr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Br(t, e) {
  return sr(t.x * e, t.y * e, t.z * e);
}
function Ua(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function hu(t, e) {
  return sr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function wi(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return sr(t.x / e, t.y / e, t.z / e);
}
function N1(t, e) {
  const n = Number(t || 0) * pe, r = Number(e || 0) * pe, a = Math.cos(r);
  return sr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Ba(t, e, n = 0) {
  const r = N1(t, e);
  let a = sr(0, 1, 0);
  Math.abs(Ua(r, a)) > 0.999 && (a = sr(0, 0, 1));
  let s = wi(hu(a, r)), u = wi(hu(r, s));
  const f = Number(n || 0) * pe, p = Math.cos(f), y = Math.sin(f), b = ro(Br(s, p), Br(u, y)), h = ro(Br(s, -y), Br(u, p));
  return s = wi(b), u = wi(h), { fwd: r, right: s, up: u };
}
function P1(t, e) {
  const n = (Number(t || 0) - 0.5) * md, r = (0.5 - Number(e || 0)) * Math.PI, a = Math.cos(r);
  return sr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function pu(t, e, n = 1) {
  const r = Math.max(1, Math.round(Number(t || 1))), a = Math.max(1, Math.round(Number(e || 1))), s = Math.max(1, Number(n || 1)), u = Math.max(512, M1), f = Math.min(1, u / Math.max(r, a));
  return {
    sourceWidth: r,
    sourceHeight: a,
    sourceDpr: s,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function gu(t, e, n) {
  const r = t.createShader(e);
  if (t.shaderSource(r, n), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const a = t.getShaderInfoLog(r) || "shader compile failed";
    throw t.deleteShader(r), new Error(a);
  }
  return r;
}
function bs(t, e, n) {
  const r = gu(t, t.VERTEX_SHADER, e);
  let a;
  try {
    a = gu(t, t.FRAGMENT_SHADER, n);
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
  const r = Number(t.mode === "cutout" ? t.hFovDeg || 90 : t.fovDeg || 100), a = Number(t.mode === "cutout" ? t.vFovDeg || 60 : 2 * Math.atan(Math.tan(Qt(r, 1, 179) * pe * 0.5) * (n / Math.max(e, 1))) / pe);
  return {
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.mode === "cutout" && t.rollDeg || 0),
    hFovDeg: Qt(r, 1, 179),
    vFovDeg: Qt(a, 0.1, 179)
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
    tanX: Math.tan(Qt(Number(t.hFovDeg), 0.1, 179) * 0.5 * pe),
    tanY: Math.tan(Qt(Number(t.vFovDeg), 0.1, 179) * 0.5 * pe),
    crop: t.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: Qt(Number(t.opacity ?? 1), 0, 1)
  };
}
function D1(t = {}) {
  const e = (t == null ? void 0 : t.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, a = null, s = null, u = null, f = null, p = null, y = null, b = null, h = null, S = null, _ = !1, I = pu(1, 1, 1), L = null, O = null, R = null, P = null, C = null;
  const E = /* @__PURE__ */ new Map();
  let j = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, st = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, dt = {
    paint: !1,
    mask: !1
  };
  function T(A = null, z = null) {
    const G = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, G), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, A ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, z ?? n.CLAMP_TO_EDGE), G;
  }
  function _t() {
    if (_) return !0;
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
      }, O = {
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
      }, R = {
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
      ]), n.STATIC_DRAW), f = T(n.REPEAT, n.CLAMP_TO_EDGE), p = T(n.REPEAT, n.CLAMP_TO_EDGE), y = T(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), _ = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function V() {
    var A;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), p && n.deleteTexture(p), y && n.deleteTexture(y), E.forEach((z) => {
          Nt(z);
        }), r && n.deleteProgram(r), a && n.deleteProgram(a), s && n.deleteProgram(s), (A = n.getExtension("WEBGL_lose_context")) == null || A.loseContext();
      } catch {
      }
      n = null, r = null, a = null, s = null, u = null, f = null, p = null, y = null, E.clear(), b = null, h = null, S = null, st = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, dt = {
        paint: !1,
        mask: !1
      }, P = null, C = null, _ = !1;
    }
  }
  function ht(A, z, G = 1) {
    I = pu(A, z, G), (e.width !== I.width || e.height !== I.height) && (e.width = I.width, e.height = I.height);
  }
  function xt(A) {
    A === "background" ? b = null : A === "paint" ? h = null : S = null, st[A] && (st[A].width = 0, st[A].height = 0);
  }
  function St() {
    dt.paint = !1, dt.mask = !1;
  }
  function it(A) {
    St(), A === "paint" ? dt.paint = !0 : A === "mask" && (dt.mask = !0);
  }
  function tt(A, z, G = [], X = { width: 0, height: 0 }, Q = !1) {
    if (!n || !A || !z) return !1;
    const K = Number(z.width || z.videoWidth || z.naturalWidth || 0), pt = Number(z.height || z.videoHeight || z.naturalHeight || 0);
    if (!(K > 1) || !(pt > 1)) return !1;
    const ft = Array.isArray(G) ? G.filter((ut) => ut && ut.w > 0 && ut.h > 0) : [];
    if (!ft.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, A), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Q ? 1 : 0), X.width !== K || X.height !== pt)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, z), X.width = K, X.height = pt, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (P || (P = document.createElement("canvas"), C = P.getContext("2d")), !C)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, z), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const ut of ft) {
      const wt = Math.max(0, Math.floor(Number(ut.x || 0))), Ct = Math.max(0, Math.floor(Number(ut.y || 0))), Et = Math.min(K - wt, Math.ceil(Number(ut.w || 0))), Ft = Math.min(pt - Ct, Math.ceil(Number(ut.h || 0)));
      if (!(Et <= 0 || Ft <= 0)) {
        if (P.width !== Et || P.height !== Ft) {
          if (P.width = Et, P.height = Ft, C = P.getContext("2d"), !C)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, z), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          C.clearRect(0, 0, Et, Ft);
        C.drawImage(z, wt, Ct, Et, Ft, 0, 0, Et, Ft), n.texSubImage2D(n.TEXTURE_2D, 0, wt, Ct, n.RGBA, n.UNSIGNED_BYTE, P);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function ct(A, z, G, X, Q = null, K = !1) {
    if (!_t()) return !1;
    if (!G)
      return xt(A), !1;
    const pt = String(X ?? ""), ft = A === "background" ? b : A === "paint" ? h : S, ut = st[A], wt = Number(G.width || G.videoWidth || G.naturalWidth || 0), Ct = Number(G.height || G.videoHeight || G.naturalHeight || 0), Et = ut.width !== wt || ut.height !== Ct;
    if (ft === pt && !Et && !(Array.isArray(Q) && Q.length)) return !0;
    if (!(wt > 0) || !(Ct > 0))
      return xt(A), !1;
    if (n.bindTexture(n.TEXTURE_2D, z), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, K ? 1 : 0), !(Array.isArray(Q) && Q.length ? tt(z, G, Q, ut, K) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), xt(A), !1;
      ut.width = wt, ut.height = Ct;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), A === "background" ? b = pt : A === "paint" ? h = pt : S = pt, !0;
  }
  function gt(A, z) {
    return ct("background", f, A, z, null, !0);
  }
  function q(A, z, G = null) {
    return ct("paint", p, A, z, G, !0);
  }
  function lt(A, z, G = null) {
    return ct("mask", y, A, z, G, !0);
  }
  function Nt(A) {
    A != null && A.texture && n && n.deleteTexture(A.texture);
  }
  function Lt(A = /* @__PURE__ */ new Set()) {
    E.forEach((z, G) => {
      A.has(G) || (Nt(z), E.delete(G));
    });
  }
  function Rt(A) {
    if (!n || !(A != null && A.assetId) || !(A != null && A.source)) return null;
    const z = String(A.assetId), G = String(A.revision ?? ""), X = A.source, Q = Number(X.width || X.naturalWidth || X.videoWidth || 0), K = Number(X.height || X.naturalHeight || X.videoHeight || 0);
    if (Q <= 0 || K <= 0) return null;
    let pt = E.get(z);
    if (pt || (pt = {
      texture: T(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, E.set(z, pt)), pt.revision !== G || pt.width !== Q || pt.height !== K) {
      if (n.bindTexture(n.TEXTURE_2D, pt.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, X), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), pt.revision = G, pt.width = Q, pt.height = K;
    }
    return pt.texture;
  }
  function le(A = []) {
    if (!_t()) return !1;
    const z = /* @__PURE__ */ new Set();
    return A.forEach((G) => {
      !(G != null && G.assetId) || !(G != null && G.source) || (z.add(String(G.assetId)), Rt(G));
    }), Lt(z), !0;
  }
  function _e() {
    return _t() ? (n.viewport(0, 0, e.width, e.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Fe(A) {
    n.useProgram(A), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function g(A, z = {}) {
    if (!b) return null;
    n.disable(n.BLEND), Fe(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(L.background, 0), n.uniform2f(L.viewport, Math.max(1, I.width), Math.max(1, I.height)), n.uniform1i(L.mode, (A == null ? void 0 : A.mode) === "unwrap" ? 0 : (A == null ? void 0 : A.mode) === "cutout" ? 2 : 1);
    const G = gi(A, I.width, I.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(L.yaw, Number(G.yawDeg || 0) * pe), n.uniform1f(L.pitch, Number(G.pitchDeg || 0) * pe), n.uniform1f(L.roll, Number(G.rollDeg || 0) * pe), n.uniform1f(L.hFov, Qt(Number(G.hFovDeg || 90), 0.1, 179) * pe), n.uniform1f(L.vFov, Qt(Number(G.vFovDeg || 60), 0.1, 179) * pe), n.uniform1f(L.opacity, Qt(Number(z.backgroundOpacity ?? 1), 0, 1));
    const X = Number((A == null ? void 0 : A.coverageDeg) || (z == null ? void 0 : z.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(L.coverage, X), n.drawArrays(n.TRIANGLES, 0, 6), e;
  }
  function ue(A, z = {}) {
    const G = dt.paint && h != null, X = dt.mask && S != null;
    if (!G && !X) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Fe(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, p), n.uniform1i(O.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(O.mask, 1), n.uniform1i(O.mode, (A == null ? void 0 : A.mode) === "unwrap" ? 0 : (A == null ? void 0 : A.mode) === "cutout" ? 2 : 1);
    const Q = gi(A, I.width, I.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(O.yaw, Number(Q.yawDeg || 0) * pe), n.uniform1f(O.pitch, Number(Q.pitchDeg || 0) * pe), n.uniform1f(O.roll, Number(Q.rollDeg || 0) * pe), n.uniform1f(O.hFov, Qt(Number(Q.hFovDeg || 90), 0.1, 179) * pe), n.uniform1f(O.vFov, Qt(Number(Q.vFovDeg || 60), 0.1, 179) * pe), n.uniform1f(O.paintOpacity, Qt(Number(z.paintOpacity ?? 1), 0, 1)), n.uniform1f(O.maskOpacity, Qt(Number(z.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(O.hasPaint, G ? 1 : 0), n.uniform1i(O.hasMask, X ? 1 : 0), n.uniform1i(O.showMaskTint, z.showMaskTint === !1 ? 0 : 1), n.uniform3f(O.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), e;
  }
  function Ye(A, z) {
    var ut, wt, Ct, Et, Ft, ne, ge;
    const G = Array.isArray(A == null ? void 0 : A.objects) ? A.objects : [];
    if (!G.length) {
      St(), Lt(/* @__PURE__ */ new Set());
      return;
    }
    const X = (z == null ? void 0 : z.mode) === "unwrap" ? 0 : (z == null ? void 0 : z.mode) === "cutout" ? 2 : 1, Q = gi(z, I.width, I.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, K = Ba(Q.yawDeg, Q.pitchDeg, Q.rollDeg), pt = G.slice().sort((kt, oe) => Number((kt == null ? void 0 : kt.zIndex) || 0) - Number((oe == null ? void 0 : oe.zIndex) || 0)), ft = /* @__PURE__ */ new Set();
    St();
    for (const kt of pt)
      if (!(!kt || kt.visible === !1)) {
        if (kt.type === "sticker") {
          const oe = String(((ut = kt == null ? void 0 : kt.params) == null ? void 0 : ut.assetId) || (kt == null ? void 0 : kt.id) || "");
          if (!oe) continue;
          ft.add(oe);
          const ln = Rt({
            assetId: oe,
            source: kt.source,
            revision: kt.revision
          });
          if (!ln) continue;
          const me = E1({
            yawDeg: ((wt = kt == null ? void 0 : kt.transform) == null ? void 0 : wt.yawDeg) || 0,
            pitchDeg: ((Ct = kt == null ? void 0 : kt.transform) == null ? void 0 : Ct.pitchDeg) || 0,
            rollDeg: ((Et = kt == null ? void 0 : kt.transform) == null ? void 0 : Et.rollDeg) || 0,
            hFovDeg: ((Ft = kt == null ? void 0 : kt.transform) == null ? void 0 : Ft.hFovDeg) || 30,
            vFovDeg: ((ne = kt == null ? void 0 : kt.transform) == null ? void 0 : ne.vFovDeg) || 30,
            crop: ((ge = kt == null ? void 0 : kt.params) == null ? void 0 : ge.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (kt == null ? void 0 : kt.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Fe(s), n.uniform1i(R.texture, 0), n.uniform1i(R.mode, X), n.uniform3f(R.viewRight, K.right.x, K.right.y, K.right.z), n.uniform3f(R.viewUp, K.up.x, K.up.y, K.up.z), n.uniform3f(R.viewFwd, K.fwd.x, K.fwd.y, K.fwd.z), n.uniform1f(R.viewHfov, Qt(Number(Q.hFovDeg || 90), 0.1, 179) * pe), n.uniform1f(R.viewVfov, Qt(Number(Q.vFovDeg || 60), 0.1, 179) * pe), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, ln), n.uniform3f(R.stickerRight, me.right.x, me.right.y, me.right.z), n.uniform3f(R.stickerUp, me.up.x, me.up.y, me.up.z), n.uniform3f(R.stickerFwd, me.fwd.x, me.fwd.y, me.fwd.z), n.uniform1f(R.stickerTanX, Math.max(1e-6, me.tanX)), n.uniform1f(R.stickerTanY, Math.max(1e-6, me.tanY)), n.uniform4f(
            R.crop,
            Qt(Number(me.crop.x0 ?? 0), 0, 1),
            Qt(Number(me.crop.y0 ?? 0), 0, 1),
            Qt(Number(me.crop.x1 ?? 1), 0, 1),
            Qt(Number(me.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(R.opacity, me.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (kt.type === "paint" || kt.type === "raster") {
          if (!q(kt.source, kt.revision ?? "")) continue;
          it("paint"), ue(z, {
            paintOpacity: Number(kt.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (kt.type === "mask") {
          if (!lt(kt.source, kt.revision ?? "")) continue;
          it("mask"), ue(z, {
            paintOpacity: 0,
            maskOpacity: Number(kt.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    Lt(ft), St();
  }
  function qe(A) {
    return !_e() || !b ? null : (g({
      mode: "panorama",
      yawDeg: (A == null ? void 0 : A.yawDeg) || 0,
      pitchDeg: (A == null ? void 0 : A.pitchDeg) || 0,
      fovDeg: (A == null ? void 0 : A.fovDeg) || 100
    }, A), e);
  }
  function Ce(A) {
    return !_e() || !b ? null : (g({ mode: "unwrap" }, A), e);
  }
  function It(A) {
    return !_e() || !b ? null : (g({
      mode: "cutout",
      yawDeg: (A == null ? void 0 : A.yawDeg) || 0,
      pitchDeg: (A == null ? void 0 : A.pitchDeg) || 0,
      rollDeg: (A == null ? void 0 : A.rollDeg) || 0,
      hFovDeg: (A == null ? void 0 : A.hFovDeg) || 90,
      vFovDeg: (A == null ? void 0 : A.vFovDeg) || 60
    }, A), e);
  }
  function D(A = {}) {
    if (!_t() || (ht(A.width, A.height, A.dpr || 1), !_e())) return null;
    const z = Object.prototype.hasOwnProperty.call(A, "backgroundSource"), G = Object.prototype.hasOwnProperty.call(A, "paintSource"), X = Object.prototype.hasOwnProperty.call(A, "maskSource"), Q = Object.prototype.hasOwnProperty.call(A, "textures"), K = Object.prototype.hasOwnProperty.call(A, "scene");
    return z && gt(A.backgroundSource, A.backgroundRevision ?? ""), G && q(A.paintSource, A.paintRevision ?? ""), X && lt(A.maskSource, A.maskRevision ?? ""), Q && (le(A.textures || []), j.textures = A.textures || []), K && (j.scene = A.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(A, "objectPass") && (j.objectPass = A.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(A, "backgroundOpacity") && (j.backgroundOpacity = Number(A.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(A, "showMaskTint") && (j.showMaskTint = A.showMaskTint === !0), Object.prototype.hasOwnProperty.call(A, "coverageDeg") && (j.coverageDeg = Number(A.coverageDeg || 360) === 180 ? 180 : 360), b && g(A.view, {
      ...A,
      backgroundOpacity: Number(A.backgroundOpacity ?? j.backgroundOpacity ?? 1),
      coverageDeg: Number(A.coverageDeg || j.coverageDeg || 360) === 180 ? 180 : 360
    }), Ye(
      j.objectPass || { objects: [] },
      A.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), e;
  }
  function F(A = {}) {
    return _t() ? !!D({
      ...A,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(A.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(e.width || 1),
      height: Number(e.height || 1),
      dpr: 1
    }) : !1;
  }
  function Y(A, z, G) {
    const X = Math.max(1, Number((A == null ? void 0 : A.viewportWidth) || I.sourceWidth || I.width || 1)), Q = Math.max(1, Number((A == null ? void 0 : A.viewportHeight) || I.sourceHeight || I.height || 1)), K = Number(z), pt = Number(G);
    if (!Number.isFinite(K) || !Number.isFinite(pt)) return null;
    if ((A == null ? void 0 : A.mode) === "unwrap")
      return { u: (K / X % 1 + 1) % 1, v: Qt(pt / Q, 0, 1) };
    const ft = gi(A, X, Q);
    if (!ft) return null;
    const ut = Ba(ft.yawDeg, ft.pitchDeg, ft.rollDeg), wt = (K - X * 0.5) / (X * 0.5) * Math.tan(Qt(ft.hFovDeg, 1, 179) * pe * 0.5), Ct = (Q * 0.5 - pt) / (Q * 0.5) * Math.tan(Qt(ft.vFovDeg, 0.1, 179) * pe * 0.5), Et = wi(ro(ro(Br(ut.right, wt), Br(ut.up, Ct)), ut.fwd));
    return {
      u: (Math.atan2(Et.x, Et.z) / md + 0.5 + 1) % 1,
      v: Qt(0.5 - Math.asin(Qt(Et.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function at(A, z, G) {
    const X = Math.max(1, Number((A == null ? void 0 : A.viewportWidth) || I.sourceWidth || I.width || 1)), Q = Math.max(1, Number((A == null ? void 0 : A.viewportHeight) || I.sourceHeight || I.height || 1));
    if ((A == null ? void 0 : A.mode) === "unwrap")
      return {
        x: (Number(z || 0) % 1 + 1) % 1 * X,
        y: Qt(Number(G || 0), 0, 1) * Q,
        visible: !0
      };
    const K = gi(A, X, Q);
    if (!K)
      return { x: X * 0.5, y: Q * 0.5, visible: !1 };
    const pt = Ba(K.yawDeg, K.pitchDeg, K.rollDeg), ft = P1(z, G), ut = Ua(ft, pt.right), wt = Ua(ft, pt.up), Ct = Ua(ft, pt.fwd);
    if (Ct <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Et = X * 0.5 + ut / Ct * (X * 0.5 / Math.tan(Qt(K.hFovDeg, 1, 179) * pe * 0.5)), Ft = Q * 0.5 - wt / Ct * (Q * 0.5 / Math.tan(Qt(K.vFovDeg, 0.1, 179) * pe * 0.5));
    return { x: Et, y: Ft, visible: Et >= 0 && Et <= X && Ft >= 0 && Ft <= Q };
  }
  return {
    init: _t,
    dispose: V,
    setViewport: ht,
    setBackgroundErp: gt,
    setPaintErp: q,
    setMaskErp: lt,
    renderPanorama: qe,
    renderUnwrap: Ce,
    renderCutout: It,
    renderScene: D,
    syncState: F,
    screenToErpUv: Y,
    erpUvToScreen: at,
    getCanvas() {
      return e;
    },
    isSupported() {
      return _t();
    },
    getViewport() {
      return { ...I };
    }
  };
}
function mu(t, e = 1, n = 16384) {
  const r = Math.round(Number(t || e));
  return Math.min(n, Math.max(1, Number.isFinite(r) ? r : 1));
}
function T1() {
  const t = /* @__PURE__ */ new Map();
  function e(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, p) {
    const y = e(u);
    let b = t.get(y) || null;
    if (!b) {
      const _ = document.createElement("canvas"), I = _.getContext("2d");
      if (!I) return null;
      b = {
        id: y,
        canvas: _,
        ctx: I,
        width: 0,
        height: 0
      }, t.set(y, b);
    }
    const h = mu(f), S = mu(p);
    return b.width !== h && (b.canvas.width = h, b.width = h), b.height !== S && (b.canvas.height = S, b.height = S), b;
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
const L1 = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), R1 = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function yd(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function O1(t, e) {
  return t === "paint" || t === "mask" || t === "raster" ? !1 : e !== !1;
}
function F1(t = {}) {
  const e = R1.has(String((t == null ? void 0 : t.type) || "")) ? String(t.type) : "erp_image", n = Number((t == null ? void 0 : t.opacity) ?? 1);
  return {
    type: e,
    source: (t == null ? void 0 : t.source) || null,
    revision: String((t == null ? void 0 : t.revision) || ""),
    coverageDeg: Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? yd(n, 0, 1) : 1,
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
    opacity: Number.isFinite(n) ? yd(n, 0, 1) : 1,
    zIndex: Number.isFinite(r) ? r : 0,
    coverageAware: O1(e, t == null ? void 0 : t.coverageAware),
    transform: t != null && t.transform && typeof t.transform == "object" ? { ...t.transform } : null,
    params: t != null && t.params && typeof t.params == "object" ? { ...t.params } : {}
  };
}
function H1(t = {}) {
  return {
    objects: (Array.isArray(t == null ? void 0 : t.objects) ? t.objects : []).map((r) => V1(r)).filter((r) => !!r && r.visible !== !1).sort((r, a) => {
      const s = Number((r == null ? void 0 : r.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return s !== u ? s - u : String((r == null ? void 0 : r.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
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
function _c(t = {}, e = "paint") {
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
  return t ? _c({
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
  return t ? _c({
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
  return t ? _c({
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
function vd(t = {}) {
  const e = [], n = $1(t == null ? void 0 : t.paintSource, t == null ? void 0 : t.paintRevision, t == null ? void 0 : t.paintOptions), r = j1(t == null ? void 0 : t.maskSource, t == null ? void 0 : t.maskRevision, t == null ? void 0 : t.maskOptions), a = Array.isArray(t == null ? void 0 : t.rasterEntries) ? t.rasterEntries : [];
  return n && e.push(n), r && e.push(r), a.forEach((s, u) => {
    const f = U1(
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
    const f = Number((s == null ? void 0 : s.zIndex) || 0), p = Number((u == null ? void 0 : u.zIndex) || 0);
    return f !== p ? f - p : String((s == null ? void 0 : s.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function xc(t, e) {
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
  const e = (t == null ? void 0 : t.backgroundSource) || null, n = Number((t == null ? void 0 : t.coverageDeg) || 360) === 180 ? 180 : 360, r = String((t == null ? void 0 : t.stateRevision) || ""), a = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, s = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], u = String((t == null ? void 0 : t.backgroundRevision) || [
    String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
    Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
    Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
  ].join("|"));
  return io({
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
      objects: xc(a, s)
    },
    overlay: {
      showMaskTint: (t == null ? void 0 : t.showMaskTint) === !0
    }
  });
}
function yu(t = {}) {
  const e = (t == null ? void 0 : t.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t == null ? void 0 : t.textures) ? t.textures : [], r = xc(e, n), a = vd({
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
  var s, u, f, p, y, b, h, S;
  if (t != null && t.background || t != null && t.objectPass || t != null && t.overlay) {
    const _ = io(t), I = Array.isArray((s = _.objectPass) == null ? void 0 : s.objects) ? _.objectPass.objects : [], L = {
      stickers: I.filter((C) => C.type === "sticker").map((C) => {
        var E, j, st, dt, T, _t, V, ht, xt, St, it, tt, ct;
        return {
          id: C.id,
          assetId: String(((E = C == null ? void 0 : C.params) == null ? void 0 : E.assetId) || ((j = C == null ? void 0 : C.params) == null ? void 0 : j.asset_id) || (C == null ? void 0 : C.id) || ""),
          yawDeg: Number(((st = C == null ? void 0 : C.transform) == null ? void 0 : st.yawDeg) ?? ((dt = C == null ? void 0 : C.params) == null ? void 0 : dt.yawDeg) ?? 0),
          pitchDeg: Number(((T = C == null ? void 0 : C.transform) == null ? void 0 : T.pitchDeg) ?? ((_t = C == null ? void 0 : C.params) == null ? void 0 : _t.pitchDeg) ?? 0),
          rollDeg: Number(((V = C == null ? void 0 : C.transform) == null ? void 0 : V.rollDeg) ?? ((ht = C == null ? void 0 : C.params) == null ? void 0 : ht.rollDeg) ?? 0),
          hFovDeg: Number(((xt = C == null ? void 0 : C.transform) == null ? void 0 : xt.hFovDeg) ?? ((St = C == null ? void 0 : C.params) == null ? void 0 : St.hFovDeg) ?? 30),
          vFovDeg: Number(((it = C == null ? void 0 : C.transform) == null ? void 0 : it.vFovDeg) ?? ((tt = C == null ? void 0 : C.params) == null ? void 0 : tt.vFovDeg) ?? 30),
          crop: ((ct = C == null ? void 0 : C.params) == null ? void 0 : ct.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((C == null ? void 0 : C.opacity) ?? 1),
          visible: (C == null ? void 0 : C.visible) !== !1,
          zIndex: Number((C == null ? void 0 : C.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = _.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((f = _.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, O = I.filter((C) => C.type === "sticker").map((C) => {
      var E, j;
      return {
        assetId: String(((E = C == null ? void 0 : C.params) == null ? void 0 : E.assetId) || ((j = C == null ? void 0 : C.params) == null ? void 0 : j.asset_id) || (C == null ? void 0 : C.id) || ""),
        source: C.source || null,
        revision: String((C == null ? void 0 : C.revision) || "")
      };
    }).filter((C) => C.assetId && C.source), R = I.find((C) => C.type === "paint") || null, P = I.find((C) => C.type === "mask") || null;
    return {
      stateRevision: String((t == null ? void 0 : t.stateRevision) || ""),
      backgroundSource: ((p = _.background) == null ? void 0 : p.source) || null,
      backgroundRevision: String(((y = _.background) == null ? void 0 : y.revision) || ""),
      coverageDeg: Number(((b = _.background) == null ? void 0 : b.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (R == null ? void 0 : R.source) || null,
      paintRevision: String((R == null ? void 0 : R.revision) || ""),
      maskSource: (P == null ? void 0 : P.source) || null,
      maskRevision: String((P == null ? void 0 : P.revision) || ""),
      textures: O,
      scene: L,
      objectPass: _.objectPass,
      backgroundOpacity: Number(((h = _.background) == null ? void 0 : h.opacity) ?? 1),
      showMaskTint: ((S = t == null ? void 0 : t.overlay) == null ? void 0 : S.showMaskTint) === !0
    };
  }
  const e = t.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(t.textures) ? t.textures : [], r = t.layers || {}, a = io({
    objectPass: {
      selectedId: (e == null ? void 0 : e.selectedId) ?? null,
      hoveredId: (e == null ? void 0 : e.hoveredId) ?? null,
      objects: [
        ...xc(e, n),
        ...vd({
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
    const u = B1(s);
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
function Xi(t = {}) {
  const e = typeof (t == null ? void 0 : t.rendererFactory) == "function" ? t.rendererFactory : (O) => D1(O), n = typeof (t == null ? void 0 : t.targetPoolFactory) == "function" ? t.targetPoolFactory : () => T1(), r = typeof (t == null ? void 0 : t.stateControllerFactory) == "function" ? t.stateControllerFactory : (O) => G1(O), a = e(t), s = (t == null ? void 0 : t.targetCanvas) || null, u = n();
  let f = null;
  const p = r({
    syncState(O = {}) {
      if (typeof a.syncState == "function") {
        const R = { ...O }, P = a.syncState(R);
        return P && (f = R, P);
      }
      return f = { ...O }, !0;
    }
  });
  function y(O = {}) {
    return p.sync(O);
  }
  function b(O = {}, R = {}) {
    return f ? a.renderScene({
      ...f,
      view: O,
      width: R.width,
      height: R.height,
      dpr: R.dpr,
      backgroundOpacity: R.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: R.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function h(O, R, P = {}, C = {}) {
    if (!R) return !1;
    const E = b(P, {
      ...C,
      width: R.w,
      height: R.h
    });
    return E ? O ? (O.canvas && E === O.canvas || O.drawImage(E, R.x, R.y, R.w, R.h), !0) : !!s && E === s : !1;
  }
  function S(O, R = {}, P = {}) {
    const C = Number(P.width || 0), E = Number(P.height || 0);
    if (!(C > 0) || !(E > 0)) return null;
    const j = u.ensureTarget(O, C, E);
    if (!j) return null;
    const st = b(R, {
      ...P,
      width: C,
      height: E
    });
    return st ? (j.ctx.clearRect(0, 0, j.canvas.width, j.canvas.height), j.ctx.drawImage(st, 0, 0, j.canvas.width, j.canvas.height), j.canvas) : null;
  }
  function _(O) {
    u.clearTarget(O);
  }
  function I() {
    var O;
    u.dispose(), (O = a.dispose) == null || O.call(a), f = null;
  }
  function L() {
    f = null, p.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: y,
    renderView: b,
    renderToContext: h,
    renderToTarget: S,
    clearTarget: _,
    snapshotState: p.snapshot,
    clearState: L,
    dispose: I
  };
}
function $r(t, e) {
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
function vu(t, e = 8) {
  var b;
  const n = (b = t == null ? void 0 : t.getContext) == null ? void 0 : b.call(t, "2d"), r = Number((t == null ? void 0 : t.width) || 0), a = Number((t == null ? void 0 : t.height) || 0);
  if (!n || r < 1 || a < 1) return null;
  const s = n.getImageData(0, 0, r, a).data;
  let u = r, f = a, p = -1, y = -1;
  for (let h = 0; h < a; h += 1)
    for (let S = 0; S < r; S += 1)
      s[(h * r + S) * 4 + 3] <= e || (S < u && (u = S), h < f && (f = h), S > p && (p = S), h > y && (y = h));
  return p < u || y < f ? null : {
    minX: u,
    minY: f,
    maxX: p,
    maxY: y,
    width: p - u + 1,
    height: y - f + 1,
    aspect: Number(((p - u + 1) / Math.max(1, y - f + 1)).toFixed(4))
  };
}
function wc(t, e) {
  const n = Math.max(1, Math.ceil(t)), r = Math.max(1, Math.ceil(e));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const a = document.createElement("canvas");
  return a.width = n, a.height = r, a;
}
function An(t, e, n) {
  if (!t) return $r(e, n);
  const r = Math.max(1, Math.round(e)), a = Math.max(1, Math.round(n));
  return (t.canvas.width !== r || t.canvas.height !== a) && (t.canvas.width = r, t.canvas.height = a, t.ctx.imageSmoothingEnabled = !0), t;
}
function se(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let xs = null, ws = null, bu = null, _u = null, Xt = null, mi = null, He = null, nr = null;
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
  xs = An(xs, n, r);
  const a = xs;
  se(a), a.ctx.drawImage(e, 0, 0), a.ctx.globalCompositeOperation = "source-in", _u !== a.ctx && (bu = a.ctx.createPattern(W1(), "repeat"), _u = a.ctx), a.ctx.fillStyle = bu, a.ctx.fillRect(0, 0, n, r), a.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(a.canvas, 0, 0), t.restore();
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
const de = /* @__PURE__ */ new Map(), Sc = 128;
function J1(t, e, n, r, a, s) {
  const u = Math.max(1, Math.round(t)), f = Math.max(0, Math.min(1, e)), p = `${u}:${f.toFixed(2)}:${n}:${r}:${a}:${s.toFixed(3)}`;
  if (de.has(p)) {
    const P = de.get(p);
    return de.delete(p), de.set(p, P), P;
  }
  de.size >= Sc && de.delete(de.keys().next().value);
  const y = u * 2 + 2, b = u + 1, h = wc(y, y), S = h.getContext("2d"), _ = f * u, I = u + 1, L = `rgba(${n},${r},${a},${s})`, O = `rgba(${n},${r},${a},0)`, R = S.createRadialGradient(b, b, _, b, b, I);
  return R.addColorStop(0, L), R.addColorStop(1, O), S.fillStyle = R, S.fillRect(0, 0, y, y), de.set(p, h), h;
}
function Q1(t, e, n, r, a, s, u) {
  const { r: f, g: p, b: y, a: b } = r, h = Math.max(2, Math.ceil(t) * 2), S = Math.max(2, Math.ceil(e) * 2), _ = Math.max(0, a), I = Math.max(0, Math.min(0.99, s)), L = Math.max(0, Math.min(1, u ?? 0)), O = `chisel:${h}:${S}:${n.toFixed(2)}:${f}:${p}:${y}:${b.toFixed(3)}:${_.toFixed(2)}:${I.toFixed(2)}:${L.toFixed(2)}`;
  if (de.has(O)) {
    const T = de.get(O);
    return de.delete(O), de.set(O, T), T;
  }
  de.size >= Sc && de.delete(de.keys().next().value);
  const R = wc(h, S), P = R.getContext("2d"), C = P.createImageData(h, S), E = C.data, j = Math.max(0, t - e), st = Math.max(0, Math.min(1, n)), dt = 1 + _;
  for (let T = 0; T < S; T++)
    for (let _t = 0; _t < h; _t++) {
      const V = _t + 0.5 - t, ht = T + 0.5 - e, xt = Math.max(Math.abs(V) - j, 0), it = Math.hypot(xt, ht) / e;
      if (it >= 1) continue;
      const tt = it <= st ? 1 : Math.max(0, (1 - it) / Math.max(1e-4, 1 - st)), ct = 1 - it, gt = 1 + _ * (1 - ct) * (1 - ct), q = 1 - I * ct * ct, lt = gt * q / dt;
      let Nt = 1;
      if (L > 0) {
        const le = Math.floor((ht + e) / 1.5), _e = Math.floor((V + t) / 8), Fe = wr(Xr(le * 41 + 500, _e * 19 + 300));
        Nt = 1 - L * 0.42 * Fe;
      }
      const Lt = Math.round(255 * Math.min(1, b * tt * lt * Nt));
      if (Lt <= 0) continue;
      const Rt = (T * h + _t) * 4;
      E[Rt] = f, E[Rt + 1] = p, E[Rt + 2] = y, E[Rt + 3] = Lt;
    }
  return P.putImageData(C, 0, 0), de.set(O, R), R;
}
function Xr(t, e) {
  const n = Math.trunc(Math.round(t * 4)), r = Math.trunc(Math.round(e * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ r & 255, 16777619), a = Math.imul(a ^ r >> 8 & 255, 16777619), a >>> 0;
}
function wr(t) {
  let e = t + 1831565813 >>> 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function tm(t, e, n, r, a, s, u) {
  const f = t + 0.5 - n, p = e + 0.5 - r, y = Math.max(0, n - r), b = Math.max(Math.abs(f) - y, 0), h = Math.hypot(b, p) / r;
  if (h >= 1) return 0;
  const S = wr(Xr(t * 17 + 3, e * 13 + 7)), _ = h + s * 0.22 * (S - 0.5);
  if (_ >= 1) return 0;
  const I = _ <= a ? 1 : Math.max(0, (1 - _) / Math.max(1e-4, 1 - a)), L = em(t, e, f, p, n, r), O = s * 0.55;
  if (L < O) return 0;
  const P = 0.45 + 0.55 * ((L - O) / Math.max(1e-4, 1 - O));
  return Math.round(255 * Math.min(1, u * I * P));
}
function em(t, e, n, r, a, s) {
  const u = Math.floor((n + a) / 3), f = Math.floor((r + s) / 2), p = wr(Xr(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + a) / 1.5), b = Math.floor((r + s) / 1.5), h = wr(Xr(y * 23 + 800, b * 29 + 500)), S = wr(Xr(t * 3 + 100, e * 5 + 200));
  return p * 0.55 + h * 0.3 + S * 0.15;
}
function nm(t, e, n, r, a) {
  const { r: s, g: u, b: f, a: p } = r, y = Math.max(2, Math.ceil(t) * 2), b = Math.max(2, Math.ceil(e) * 2), h = Math.max(0, Math.min(1, a)), S = `crayon:${y}:${b}:${n.toFixed(2)}:${s}:${u}:${f}:${p.toFixed(3)}:${h.toFixed(2)}`;
  if (de.has(S)) {
    const P = de.get(S);
    return de.delete(S), de.set(S, P), P;
  }
  de.size >= Sc && de.delete(de.keys().next().value);
  const _ = wc(y, b), I = _.getContext("2d"), L = I.createImageData(y, b), O = L.data, R = Math.max(0, Math.min(1, n));
  for (let P = 0; P < b; P++)
    for (let C = 0; C < y; C++) {
      const E = tm(C, P, t, e, R, h, p);
      if (E <= 0) continue;
      const j = (P * y + C) * 4;
      O[j] = s, O[j + 1] = u, O[j + 2] = f, O[j + 3] = E;
    }
  return I.putImageData(L, 0, 0), de.set(S, _), _;
}
function bd(t, e, n) {
  var L, O;
  const r = String((e == null ? void 0 : e.stampKind) || "round"), a = X1(e, n), s = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), u = rm(e), f = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), p = Number(((L = e == null ? void 0 : e.angle) == null ? void 0 : L.value) ?? 0), y = Z1(e, a), b = String(((O = e == null ? void 0 : e.targetSpace) == null ? void 0 : O.viewMode) || ""), h = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && b !== "unwrap", S = e == null ? void 0 : e.scatter, _ = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let I;
  if (r === "chisel") {
    const R = a * f, P = a, C = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), E = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), j = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    I = Q1(R, P, s, u, C, E, j);
  } else if (r === "crayon") {
    const R = a * f, P = a, C = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    I = nm(R, P, s, u, C);
  } else
    I = J1(a, s, u.r, u.g, u.b, u.a);
  return { ctx: t, stampTex: I, radiusPx: a, spacingPx: y, desc: n, aspect: f, angle: p, stampKind: r, scatter: _, latitudeCorrection: h };
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
function xu(t, e, n, r, a) {
  const s = t.angle, u = t.desc.width;
  function f(y, b) {
    s === 0 ? t.ctx.drawImage(t.stampTex, y - a, b - r, a * 2, r * 2) : (t.ctx.save(), t.ctx.translate(y, b), t.ctx.rotate(s), t.ctx.drawImage(t.stampTex, -a, -r, a * 2, r * 2), t.ctx.restore());
  }
  f(e, n);
  const p = s === 0 ? a : a * Math.abs(Math.cos(s)) + r * Math.abs(Math.sin(s));
  e - p < 0 && f(e + u, n), e + p > u && f(e - u, n);
}
function kc(t, e, n, r) {
  const a = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (t.scatter) {
    const { radius: y, count: b } = t.scatter, h = y * t.radiusPx * a, S = Xr(e, n);
    for (let _ = 0; _ < b; _++) {
      const I = wr(S + _ * 2) * Math.PI * 2, L = Math.sqrt(wr(S + _ * 2 + 1)) * h, O = e + Math.cos(I) * L, R = n + Math.sin(I) * L, P = Math.max(0.5, t.radiusPx * a * 0.48), C = (0.5 - R / Math.max(1, t.desc.height)) * Math.PI, E = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(C)) : 1, j = P * t.aspect * E;
      xu(t, O, R, P, j);
    }
    return;
  }
  const s = Math.max(0.5, t.radiusPx * a), u = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, f = t.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, p = s * t.aspect * f;
  xu(t, e, n, s, p);
}
function wu(t, e, n) {
  const r = q1(e);
  if (!t || r.length === 0) return;
  const a = n.width, s = n.height, u = bd(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const f = [];
  for (let S = 0; S < r.length; S++) {
    let _ = Number(r[S].u || 0) * a;
    const I = Number(r[S].v || 0) * s;
    S > 0 && Math.abs(_ - f[S - 1].x) > a * 0.5 && (_ += _ < f[S - 1].x ? a : -a), f.push({ x: _, y: I });
  }
  if (kc(u, f[0].x, f[0].y, 1), f.length === 1) {
    t.restore();
    return;
  }
  let p = f[0], y = f[0], b = f[0], h = 0;
  for (let S = 1; S < f.length; S++) {
    const _ = f[S], I = { x: (y.x + _.x) * 0.5, y: (y.y + _.y) * 0.5 };
    S === 1 ? h = Gi(u, b.x, b.y, I.x, I.y, h) : h = ao(u, p, b, I, _, h), p = y, y = _, b = I;
  }
  f.length === 2 ? Gi(u, b.x, b.y, y.x, y.y, h) : ao(u, p, b, y, y, h), t.restore();
}
function Ga(t, e, n) {
  var h;
  const r = Array.isArray((h = e == null ? void 0 : e.geometry) == null ? void 0 : h.points) ? e.geometry.points : [];
  if (!t || r.length < 3) return;
  const a = n.width, s = n.height, u = im(e), f = [];
  let p = 1 / 0, y = -1 / 0;
  for (let S = 0; S < r.length; S++) {
    const _ = Y1(r[S]);
    let I = Number(_.x || 0) * a;
    S > 0 && Math.abs(I - f[S - 1].x) > a * 0.5 && (I += I < f[S - 1].x ? a : -a), f.push({ x: I, y: Number(_.y || 0) * s }), I < p && (p = I), I > y && (y = I);
  }
  function b(S) {
    t.beginPath(), t.moveTo(f[0].x + S, f[0].y);
    for (let _ = 1; _ < f.length; _++) t.lineTo(f[_].x + S, f[_].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = u, b(0), p < 0 && b(a), y > a && b(-a), t.restore();
}
function wa(t, e, n) {
  var u;
  if (String(((u = e == null ? void 0 : e.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Ga(t, e, n);
    return;
  }
  const s = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  s >= 0.999 ? wu(t, e, n) : (mi = An(mi, n.width, n.height), se(mi), wu(mi.ctx, e, n), t.save(), t.globalAlpha = s, t.drawImage(mi.canvas, 0, 0), t.restore());
}
function rr(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function Gi(t, e, n, r, a, s) {
  const u = r - e, f = a - n, p = Math.hypot(u, f);
  if (p < 1e-9) return s;
  let y = t.spacingPx - s;
  for (; y <= p; ) {
    const b = y / p;
    kc(t, e + u * b, n + f * b, 1), y += t.spacingPx;
  }
  return p - y + t.spacingPx;
}
function ao(t, e, n, r, a, s) {
  const f = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, p = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - r.x, a.y - r.y)) + 1e-4, b = 0, h = f, S = h + p, _ = S + y, I = S - h, L = 16;
  let O = s, R = n.x, P = n.y;
  for (let C = 1; C <= L; C++) {
    const E = h + I * C / L, j = ((h - E) * e.x + (E - b) * n.x) / (h - b), st = ((h - E) * e.y + (E - b) * n.y) / (h - b), dt = ((S - E) * n.x + (E - h) * r.x) / (S - h), T = ((S - E) * n.y + (E - h) * r.y) / (S - h), _t = ((_ - E) * r.x + (E - S) * a.x) / (_ - S), V = ((_ - E) * r.y + (E - S) * a.y) / (_ - S), ht = ((S - E) * j + (E - b) * dt) / (S - b), xt = ((S - E) * st + (E - b) * T) / (S - b), St = ((_ - E) * dt + (E - h) * _t) / (_ - h), it = ((_ - E) * T + (E - h) * V) / (_ - h), tt = ((S - E) * ht + (E - h) * St) / (S - h), ct = ((S - E) * xt + (E - h) * it) / (S - h);
    O = Gi(t, R, P, tt, ct, O), R = tt, P = ct;
  }
  return O;
}
function am(t, e, n, r) {
  const a = t.currentStroke.ctx;
  if (!a) return;
  const s = t.descriptor, u = s.width, f = n * s.height, p = t.activeStroke;
  let y = e * u;
  if (p && Math.abs(y - p.prev.x) > u * 0.5 && (y += y < p.prev.x ? u : -u), !p) {
    const _ = bd(a, r, s), I = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), L = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), O = String((r == null ? void 0 : r.toolKind) || "") === "eraser", R = String((r == null ? void 0 : r.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", kc(_, y, f, 1), t.activeStroke = {
      pprev: { x: y, y: f },
      prev: { x: y, y: f },
      lastMidX: y,
      lastMidY: f,
      stampTex: _.stampTex,
      radiusPx: _.radiusPx,
      spacingPx: _.spacingPx,
      aspect: _.aspect,
      angle: _.angle,
      stampKind: _.stampKind,
      scatter: _.scatter,
      latitudeCorrection: _.latitudeCorrection,
      strokeOpacity: I,
      velocityWidthFactor: L,
      distSinceStamp: 0,
      isEraser: O,
      layerKind: R,
      pointCount: 1
    }, t.displayDirty = !0;
    return;
  }
  const b = (p.prev.x + y) * 0.5, h = (p.prev.y + f) * 0.5;
  a.globalCompositeOperation = "source-over";
  const S = {
    ctx: a,
    stampTex: p.stampTex,
    radiusPx: p.radiusPx,
    spacingPx: p.spacingPx,
    desc: s,
    aspect: p.aspect,
    angle: p.angle,
    stampKind: p.stampKind,
    scatter: p.scatter,
    latitudeCorrection: p.latitudeCorrection
  };
  p.pointCount === 1 ? p.distSinceStamp = Gi(S, p.lastMidX, p.lastMidY, b, h, p.distSinceStamp) : p.distSinceStamp = ao(
    S,
    p.pprev,
    { x: p.lastMidX, y: p.lastMidY },
    { x: b, y: h },
    { x: y, y: f },
    p.distSinceStamp
  ), p.pprev = p.prev, p.prev = { x: y, y: f }, p.lastMidX = b, p.lastMidY = h, p.pointCount++, t.displayDirty = !0;
}
function Bs(t = {}) {
  const e = Math.max(1, Math.round(Number((t == null ? void 0 : t.width) || 2048))), n = Math.max(1, Math.round(Number((t == null ? void 0 : t.height) || 1024))), r = { kind: "ERP_GLOBAL", width: e, height: n }, a = /* @__PURE__ */ new Map(), s = $r(e, n), u = {
    descriptor: r,
    committedMask: $r(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: $r(e, n),
    currentStroke: s,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, p = $r(e, n);
  let y = null, b = "", h = null;
  function S(V) {
    return {
      actionGroupId: V,
      descriptor: r,
      committedPaint: $r(e, n),
      currentStroke: s,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function _(V) {
    let ht = a.get(V);
    return ht || (ht = S(V), a.set(V, ht)), ht;
  }
  function I(V) {
    return b === "mask" ? u : y ? _(y) : f;
  }
  function L(V) {
    var q;
    const ht = !h || h.length !== V.length || V.some((lt, Nt) => lt !== h[Nt]), xt = b === "paint" && ((q = y ? a.get(y) : f) == null ? void 0 : q.activeStroke) || null, St = b === "mask", it = u.activeStroke;
    let tt = u.displayDirty || f.displayDirty || ht;
    for (const lt of V) {
      const Nt = a.get(lt);
      if (Nt != null && Nt.displayDirty) {
        tt = !0;
        break;
      }
    }
    if ((xt || St && it) && (tt = !0), !tt) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const lt of V) {
      const Nt = a.get(lt);
      Nt && (Nt.displayDirty = !1);
    }
    h = [...V];
    const ct = p.ctx;
    se(p);
    const gt = !!(xt != null && xt.isEraser);
    for (const lt of V) {
      const Nt = a.get(lt);
      if (!Nt) continue;
      const Rt = y === Nt.actionGroupId && b === "paint" ? Nt.activeStroke : null;
      if (gt)
        Xt = An(Xt, e, n), se(Xt), Xt.ctx.drawImage(Nt.committedPaint.canvas, 0, 0), rr(Xt.ctx, s.canvas), ct.drawImage(Xt.canvas, 0, 0);
      else if (ct.drawImage(Nt.committedPaint.canvas, 0, 0), Rt) {
        const le = Nt.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Rt.strokeOpacity ?? 1));
        ct.save(), ct.globalAlpha = le, ct.drawImage(s.canvas, 0, 0), ct.restore();
      }
    }
    St && (it != null && it.isEraser) ? (Xt = An(Xt, e, n), se(Xt), Xt.ctx.drawImage(u.committedMask.canvas, 0, 0), rr(Xt.ctx, s.canvas), Or(ct, Xt.canvas)) : (Or(ct, u.committedMask.canvas), St && it && Or(ct, s.canvas));
  }
  function O(V) {
    var xt, St, it, tt, ct;
    for (const gt of a.values())
      se(gt.committedPaint), se(gt.currentStroke), gt.activeStroke = null, gt.displayDirty = !0;
    se(u.committedMask), se(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, h = null;
    const ht = [
      ...Array.isArray((St = (xt = V == null ? void 0 : V.painting) == null ? void 0 : xt.paint) == null ? void 0 : St.strokes) ? V.painting.paint.strokes : [],
      ...Array.isArray((tt = (it = V == null ? void 0 : V.painting) == null ? void 0 : it.mask) == null ? void 0 : tt.strokes) ? V.painting.mask.strokes : []
    ];
    for (const gt of ht) {
      if (((ct = gt == null ? void 0 : gt.targetSpace) == null ? void 0 : ct.kind) !== "ERP_GLOBAL") continue;
      const q = String((gt == null ? void 0 : gt.layerKind) || "paint"), Nt = String((gt == null ? void 0 : gt.toolKind) || "pen") === "eraser";
      if (q === "mask") {
        const Lt = u.descriptor;
        Nt ? (Xt = An(Xt, Lt.width, Lt.height), se(Xt), wa(Xt.ctx, gt, Lt), rr(u.committedMask.ctx, Xt.canvas)) : wa(u.committedMask.ctx, gt, Lt);
        continue;
      }
      if (Nt) {
        Xt = An(Xt, r.width, r.height), se(Xt), wa(Xt.ctx, gt, r);
        for (const Lt of a.values())
          rr(Lt.committedPaint.ctx, Xt.canvas), Lt.displayDirty = !0;
      } else {
        const Lt = String((gt == null ? void 0 : gt.actionGroupId) || "__default__"), Rt = _(Lt), le = Rt.descriptor;
        wa(Rt.committedPaint.ctx, gt, le), Rt.displayDirty = !0;
      }
    }
    L([...a.keys()]);
  }
  function R(V, ht) {
    b = String((V == null ? void 0 : V.layerKind) || "");
    const xt = String((V == null ? void 0 : V.toolKind) || "") === "eraser";
    if (b === "mask")
      y = null, se(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const St = xt ? f : _(String((V == null ? void 0 : V.actionGroupId) || "__default__"));
      y = xt ? "" : String((V == null ? void 0 : V.actionGroupId) || "__default__"), se(St.currentStroke), St.activeStroke = null, St.displayDirty = !0;
    }
  }
  function P(V, ht) {
    var q;
    const xt = String((V == null ? void 0 : V.layerKind) || "paint"), St = String((V == null ? void 0 : V.toolKind) || "") === "eraser", it = xt === "mask" ? u : St ? f : _(String((V == null ? void 0 : V.actionGroupId) || y || "__default__")), tt = it.activeStroke, ct = it.descriptor;
    if (tt && tt.pointCount > 1) {
      const lt = it.currentStroke.ctx;
      lt.globalCompositeOperation = "source-over";
      const Nt = {
        ctx: lt,
        stampTex: tt.stampTex,
        radiusPx: tt.radiusPx,
        spacingPx: tt.spacingPx,
        desc: ct,
        aspect: tt.aspect,
        angle: tt.angle,
        stampKind: tt.stampKind,
        scatter: tt.scatter,
        latitudeCorrection: tt.latitudeCorrection
      };
      tt.pointCount === 2 ? Gi(Nt, tt.lastMidX, tt.lastMidY, tt.prev.x, tt.prev.y, tt.distSinceStamp) : ao(Nt, tt.pprev, { x: tt.lastMidX, y: tt.lastMidY }, tt.prev, tt.prev, tt.distSinceStamp);
    }
    it.lassoPreviewActive && (se(it.currentStroke), Ga(it.currentStroke.ctx, V, ct), it.lassoPreviewActive = !1);
    const gt = xt === "mask" ? u.committedMask : it.committedPaint;
    if (St && xt === "paint")
      for (const lt of a.values())
        rr(lt.committedPaint.ctx, it.currentStroke.canvas), lt.displayDirty = !0;
    else if (St)
      rr(gt.ctx, it.currentStroke.canvas);
    else {
      const lt = Math.max(0, Math.min(1, (tt == null ? void 0 : tt.strokeOpacity) ?? 1));
      gt.ctx.save(), gt.ctx.globalAlpha = lt, gt.ctx.drawImage(it.currentStroke.canvas, 0, 0), gt.ctx.restore();
    }
    K1() && (String((V == null ? void 0 : V.toolKind) || ""), String((ct == null ? void 0 : ct.kind) || ""), Number((ct == null ? void 0 : ct.width) || 0), Number((ct == null ? void 0 : ct.height) || 0), String(((q = V == null ? void 0 : V.targetSpace) == null ? void 0 : q.viewMode) || ""), Number((V == null ? void 0 : V.aspect) ?? 1), vu(it.currentStroke.canvas), vu(gt.canvas), void 0), se(it.currentStroke), it.activeStroke = null, it.displayDirty = !0, y = null, b = "", L([...a.keys()]);
  }
  function C(V) {
    if (b === "mask")
      se(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (b === "paint" && !y)
      se(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const ht = a.get(y);
      ht && (se(ht.currentStroke), ht.activeStroke = null, ht.lassoPreviewActive = !1, ht.displayDirty = !0);
    }
    y = null, b = "", L([...a.keys()]);
  }
  function E(V, ht) {
    var St;
    if (b = String((V == null ? void 0 : V.layerKind) || ""), String(((St = V == null ? void 0 : V.geometry) == null ? void 0 : St.geometryKind) || "") === "lasso_fill") {
      if (b === "mask")
        se(u.currentStroke), Ga(u.currentStroke.ctx, V, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const it = String((V == null ? void 0 : V.toolKind) || "") === "eraser", tt = it ? f : _(String((V == null ? void 0 : V.actionGroupId) || y || "__default__"));
        y = it ? "" : String((V == null ? void 0 : V.actionGroupId) || y || "__default__"), se(tt.currentStroke), Ga(tt.currentStroke.ctx, V, tt.descriptor), tt.lassoPreviewActive = !0, tt.displayDirty = !0;
      }
      L([...a.keys()]);
    }
  }
  function j(V) {
    return L(V ?? [...a.keys()]), {
      displayPaint: p,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function st(V) {
    return a.get(String(V)) ?? null;
  }
  function dt() {
    return [...a.keys()];
  }
  function T(V) {
    var ct;
    const ht = a.get(String(V));
    if (!ht) return null;
    const xt = b === "paint" && y === ht.actionGroupId, St = b === "paint" && ((ct = y ? a.get(y) : f) == null ? void 0 : ct.activeStroke) || null;
    if (St != null && St.isEraser)
      return He = An(He, e, n), se(He), He.ctx.drawImage(ht.committedPaint.canvas, 0, 0), rr(He.ctx, s.canvas), He.canvas;
    const it = xt ? ht.activeStroke : null;
    if (!it) return ht.committedPaint.canvas;
    He = An(He, e, n), se(He), He.ctx.drawImage(ht.committedPaint.canvas, 0, 0);
    const tt = ht.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, it.strokeOpacity ?? 1));
    return He.ctx.save(), He.ctx.globalAlpha = tt, He.ctx.drawImage(s.canvas, 0, 0), He.ctx.restore(), He.canvas;
  }
  function _t() {
    return nr = An(nr, e, n), se(nr), Or(nr.ctx, u.committedMask.canvas), b === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Xt = An(Xt, e, n), se(Xt), Xt.ctx.drawImage(u.committedMask.canvas, 0, 0), rr(Xt.ctx, s.canvas), se(nr), Or(nr.ctx, Xt.canvas)) : Or(nr.ctx, s.canvas)), nr.canvas;
  }
  return {
    rebuildCommitted: O,
    beginStroke: R,
    appendStrokePoint: am,
    updateActiveStroke: E,
    commitActiveStroke: P,
    cancelActiveStroke: C,
    getErpTarget: j,
    ensureTarget: I,
    getGroupTarget: st,
    getGroupDisplayCanvas: T,
    getMaskDisplayCanvas: _t,
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
function je(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function om(t, e) {
  let n = je(e) - je(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Su = Math.PI / 180, ku = 0.12, sm = 3, cm = 35, lm = 140, Si = 100, um = 20, Mu = 0.8;
function fm(t, e, n) {
  const r = Math.max(1, Number(e || 1)), a = Math.max(1, Number(n || 1)), s = W(Number(t || Si), 1, 179) * Su;
  return 2 * Math.atan(Math.tan(s * 0.5) * (a / r)) / Su;
}
function dm(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function Do(t = {}) {
  const e = typeof t.getView == "function" ? t.getView : (() => ({ yaw: 0, pitch: 0, fov: Si })), n = typeof t.setView == "function" ? t.setView : (() => {
  }), r = typeof t.getInvert == "function" ? t.getInvert : (() => ({ x: 1, y: 1 })), a = typeof t.getUnwrapRect == "function" ? t.getUnwrapRect : (() => ({ w: 1, h: 1 })), s = typeof t.getViewportSize == "function" ? t.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof t.onInteraction == "function" ? t.onInteraction : (() => {
  }), f = typeof t.onDebug == "function" ? t.onDebug : null, p = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(R, P = null) {
    f && f(R, P);
  }
  function b(R, P, C = null, E = performance.now()) {
    return p.drag.active = !0, p.drag.lastX = Number(R || 0), p.drag.lastY = Number(P || 0), p.drag.lastTs = Number(E || performance.now()), p.drag.pointerId = C, p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.lastTs = p.drag.lastTs, p.velHistory = [], y("drag", { phase: "start", x: p.drag.lastX, y: p.drag.lastY, pointerId: C }), !0;
  }
  function h(R, P, C = "pano", E = performance.now()) {
    if (!p.drag.active) return !1;
    const j = Number(E || performance.now()), st = Number(R), dt = Number(P), T = st - p.drag.lastX, _t = dt - p.drag.lastY;
    p.drag.lastX = st, p.drag.lastY = dt, p.drag.lastTs = j;
    const V = r() || { x: 1, y: 1 }, ht = Number(V.x || 1), xt = Number(V.y || 1), St = { ...e() };
    let it = 0, tt = 0;
    if (C === "unwrap") {
      const gt = a() || { w: 1, h: 1 }, q = Math.max(1, Number(gt.w || 1)), lt = Math.max(1, Number(gt.h || 1)), Nt = T / q, Lt = _t / lt;
      it = -Nt * 360 * ht, tt = Lt * 180 * xt;
    } else {
      const gt = s() || { w: 0, h: 0 }, q = Math.max(1, Number(gt.w || 0)), lt = Math.max(1, Number(gt.h || 0));
      if (q > 1 && lt > 1) {
        const Nt = W(Number(St.fov || Si), 1, 179), Lt = W(fm(Nt, q, lt), 0.1, 179);
        it = -(T / q) * Nt * ht, tt = _t / lt * Lt * xt;
      } else
        it = -T * ku * ht, tt = _t * ku * xt;
    }
    St.yaw = je(Number(St.yaw || 0) + it), St.pitch = W(Number(St.pitch || 0) + tt, -89.9, 89.9), n(St), p.velHistory.push({ ts: j, yaw: St.yaw, pitch: St.pitch });
    let ct = 0;
    for (; ct < p.velHistory.length - 1 && p.velHistory[ct].ts < j - 100; ) ct++;
    return ct > 0 && p.velHistory.splice(0, ct), p.inertia.active = !1, p.inertia.lastTs = j, u(), y("drag", { phase: "move", dx: T, dy: _t, dYaw: it, dPitch: tt }), !0;
  }
  function S(R = performance.now()) {
    if (!p.drag.active) return !1;
    p.drag.active = !1;
    const P = Number(R || performance.now());
    p.drag.lastTs = P;
    const C = p.velHistory.filter((j) => P - j.ts <= 80);
    if (C.length >= 2) {
      const j = C[0], st = C.at(-1), dt = Math.max(1e-3, (st.ts - j.ts) / 1e3);
      let T = st.yaw - j.yaw;
      T > 180 && (T -= 360), T < -180 && (T += 360), p.inertia.vx = T / dt, p.inertia.vy = (st.pitch - j.pitch) / dt;
    } else
      p.inertia.vx = 0, p.inertia.vy = 0;
    p.velHistory = [];
    const E = Math.hypot(p.inertia.vx, p.inertia.vy);
    return p.inertia.active = E > um, p.inertia.lastTs = P, y("drag", { phase: "end", speed: E, inertiaActive: p.inertia.active }), !0;
  }
  function _(R = performance.now()) {
    if (!p.inertia.active) return !1;
    const P = Number(R || performance.now()), C = Math.max(1e-3, (P - (p.inertia.lastTs || P)) / 1e3);
    p.inertia.lastTs = P;
    const E = { ...e() };
    E.yaw = je(Number(E.yaw || 0) + p.inertia.vx * C), E.pitch = W(Number(E.pitch || 0) + p.inertia.vy * C, -89.9, 89.9);
    const j = Math.exp(-5.5 * C);
    return p.inertia.vx *= j, p.inertia.vy *= j, Math.abs(p.inertia.vx) < Mu && Math.abs(p.inertia.vy) < Mu && (p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.active = !1), n(E), u(), p.inertia.active;
  }
  function I(R) {
    const P = Math.sign(Number(R || 0));
    if (!P) return !1;
    const C = { ...e() }, E = Number(C.fov || Si);
    return C.fov = W(E + P * sm, cm, lm), n(C), u(), y("wheel", { deltaSign: P, fovBefore: E, fovAfter: C.fov }), !0;
  }
  function L(R) {
    return I(Math.sign(dm(R)));
  }
  function O() {
    n({ yaw: 0, pitch: 0, fov: Si }), p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, u();
  }
  return {
    state: p,
    startDrag: b,
    moveDrag: h,
    endDrag: S,
    stepInertia: _,
    applyWheel: I,
    applyWheelEvent: L,
    resetView: O
  };
}
function Gs(t) {
  const e = String(t || "").trim();
  return e ? e === "PanoramaPreview" || e === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(e) : !1;
}
const Nu = Math.PI / 180;
function yi(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) ? n : Number(e);
}
function hm(t) {
  const e = t || {}, n = yi(e.yaw_deg, 0), r = yi(e.pitch_deg, 0), a = yi(e.roll_deg ?? e.rot_deg, 0), s = Ss(yi(e.hFOV_deg, 90), 1, 179), u = Ss(yi(e.vFOV_deg, 60), 1, 179), f = Math.tan(s * Nu * 0.5) / Math.max(1e-6, Math.tan(u * Nu * 0.5)), p = Ss(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: a,
    hfov: s,
    vfov: u,
    aspect: p
  };
}
const _d = 0.28;
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
  const n = String(t.asset_id || t.assetId || "").trim(), r = t.type === "external_image" || t.source_kind === "external_image", a = n || (r ? String(t.id || "").trim() : ""), s = e.includeHidden === !0, u = t.visible === !1, f = s && r && u;
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
    opacity: f ? _d : W(Number(t.opacity ?? 1), 0, 1),
    visible: f ? !0 : t.visible !== !1,
    external: r
  };
}
function To(t, e = {}) {
  var s;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], r = e.includeHidden === !0;
  return {
    stickers: n.map((u) => gm(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: e.selectedId ?? ((s = t == null ? void 0 : t.active) == null ? void 0 : s.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function xd(t, e, n = {}) {
  if (typeof e != "function") return [];
  const r = n.scene || To(t, n), a = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, s = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var I;
    const p = String((f == null ? void 0 : f.assetId) || "").trim(), y = p || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const b = p ? a[p] : null, h = e(y, b, f);
    if (h instanceof HTMLImageElement && !h.complete) return;
    const S = Number((h == null ? void 0 : h.naturalWidth) || (h == null ? void 0 : h.videoWidth) || (h == null ? void 0 : h.width) || 0), _ = Number((h == null ? void 0 : h.naturalHeight) || (h == null ? void 0 : h.videoHeight) || (h == null ? void 0 : h.height) || 0);
    !h || S <= 0 || _ <= 0 || (u.add(y), s.push({
      assetId: y,
      source: h,
      revision: String(((I = n.revisionFor) == null ? void 0 : I.call(n, y, b, h)) ?? [
        y,
        Number(h.naturalWidth || h.videoWidth || h.width || 0),
        Number(h.naturalHeight || h.videoHeight || h.height || 0),
        String(h.currentSrc || h.src || "")
      ].join("|"))
    }));
  }), s;
}
function Mc(t, e = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((t == null ? void 0 : t.yaw) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch) || 0),
    fovDeg: W(Number((t == null ? void 0 : t.fov) || 100), 1, 179),
    coverageDeg: Number(e || 360) === 180 ? 180 : 360
  };
}
function mm(t, e = 360) {
  return Mc(t, e);
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
const { app: ce } = Va;
function Ks() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (Va == null ? void 0 : Va.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const kr = Math.PI / 180, oo = {}, vm = { Nu: 24, Nv: 14 }, bm = 10, _m = 120;
function xm() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function vi(t) {
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
function cr(t) {
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
function Sm(t) {
  const e = cr(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function wd(t, e, n) {
  Sm(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function Ws(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function Sd(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function km(t) {
  return Gs(Sd(t));
}
function Sr(t = null) {
  var s, u;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (s = ce == null ? void 0 : ce.canvas) == null ? void 0 : s.constructor) == null ? void 0 : u.name) || "");
  return [e, r, n, a].join("|");
}
function kd(t, e = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Sr(e)
  } : String(t) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Sr(e)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Sr(e)
  };
}
const Li = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(t) {
    !t || String(t.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(t), this.lastSignature || (this.lastSignature = Sr(t)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(t) {
    t && this.nodes.delete(t), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const t = this.nodes.values().next().value || null, e = Sr(t);
    e !== this.lastSignature && (this.lastSignature = e, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((r) => {
        if (!(!r || String(r.__panoPreviewMode || "") !== "stickers"))
          try {
            r.__panoRebindGeneration = this.generation, String(r.__panoStickersPath || "unknown"), this.generation, Md(r).rebind(r.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function Md(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = r === "cutout" ? "dom" : kd(r, t).chosenPath, s = Ws(t);
      this.activeBackend = s;
      const u = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = t.__panoPreviewNoPreview === !0, p = n.noPreview === !0;
      if (s === a && s !== "none" && u === r && f === p) {
        t.__panoAttachOptions = { ...n, mode: r }, t.__panoPreviewMode = r, t.__panoPreviewNoPreview = p, t.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      s !== "none" && Zr(t, { keepMonitor: r === "stickers" }), fy(t, { ...n, mode: r, __panoForcedPath: a }), this.activeBackend = Ws(t);
    },
    rebind(n = {}) {
      const r = String(n.mode || (t == null ? void 0 : t.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Zr(t, { keepMonitor: r === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Zr(t), this.activeBackend = "none";
    }
  };
  return t.__panoPreviewController = e, e;
}
function Mm(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function Zr(t, e = {}) {
  var r, a, s, u, f;
  if (!t) return;
  co.unregister(t), Mm(t), t.__panoDomPreview, t.__panoLegacyPreviewHooked, t.__panoDomRestore, t.__panoLegacyRestore;
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
    Array.isArray(t.widgets) && (t.widgets = t.widgets.filter((p) => {
      if (p === (n == null ? void 0 : n.widget)) return !1;
      const y = String((p == null ? void 0 : p.name) || ""), b = String((p == null ? void 0 : p.type) || ""), h = Ks();
      return !(y === h || b === h || y === "pano_preview" || b === "pano_preview" || y === "preview" && b === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", String(e.reason || ""), e.keepMonitor, e.keepMonitor || Li.unregister(t);
}
function Mr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Pu(t, e) {
  return Mr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Sa(t, e) {
  return Mr(t.x * e, t.y * e, t.z * e);
}
function ks(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Cu(t, e) {
  return Mr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function ka(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Mr(t.x / e, t.y / e, t.z / e);
}
function gr(t, e) {
  const n = t * kr, r = e * kr, a = Math.cos(r);
  return Mr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Nc(t, e, n = 0) {
  const r = gr(t, e), a = Mr(0, 1, 0);
  let s = Cu(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Mr(1, 0, 0)), s = ka(s);
  let u = ka(Cu(r, s));
  const f = n * kr, p = Math.cos(f), y = Math.sin(f), b = Pu(Sa(s, p), Sa(u, y)), h = Pu(Sa(s, -y), Sa(u, p));
  return { fwd: r, right: ka(b), up: ka(h) };
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
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = Ki(t, "state_json")) == null ? void 0 : n.value) || "");
}
function Pc(t) {
  var u, f;
  const e = Pm(t), n = String(((u = Ki(t, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), r = Number(((f = Ki(t, "coverage")) == null ? void 0 : f.value) || 360) === 180 ? 180 : 360, a = t.__panoStateCache;
  if (a && a.source === e && a.bg === n && a.coverage === r)
    return a.parsed;
  const s = Nm(e, n);
  return s.coverage = r, t.__panoStateCache = { source: e, bg: n, coverage: r, parsed: s }, s;
}
function Ki(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function Au(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function Nd(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Cm(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Pd(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Cd(t, e, n = null) {
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
  return !r && n != null && (r = Cm(t == null ? void 0 : t.graph, n)), r;
}
function Am(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Cc(t, e = []) {
  const n = Am(t), r = [];
  return e.forEach((a) => {
    n.includes(String(a)) && r.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !r.includes(a) && r.push(a);
  }), r.length ? r : e;
}
function Iu(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: e, tail: n.length ? n[n.length - 1] : e };
}
function so(t, e) {
  const n = Iu(t), r = Iu(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Im(t, e = ["erp_image", "bg_erp"]) {
  var p;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return [];
  const a = Cc(t, e).map((y) => n.findIndex((b) => String((b == null ? void 0 : b.name) || "") === String(y))).filter((y) => y >= 0), s = n.map((y, b) => ({ input: y, idx: b })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...a, ...s])], f = [];
  for (const y of u) {
    const b = Cd(t, y);
    if ((b == null ? void 0 : b.id) != null) {
      f.push(String(b.id));
      continue;
    }
    const h = (p = n[y]) == null ? void 0 : p.link;
    if (h == null) continue;
    const S = Nd(t == null ? void 0 : t.graph, h), { originId: _ } = Pd(S);
    _ != null && f.push(String(_));
  }
  return [...new Set(f)];
}
const co = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = Ke) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((s) => {
        var f, p, y, b, h;
        if (!s) return;
        so(r, s == null ? void 0 : s.id), Im(s, ["erp_image", "bg_erp"]).some((S) => so(r, S)), qs(s), (p = (f = s.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || p.call(f), (y = s.setDirtyCanvas) == null || y.call(s, !0, !0), (h = (b = s.graph) == null ? void 0 : b.setDirtyCanvas) == null || h.call(b, !0, !0), String(s.__panoPreviewMode || ""), String(s.__panoPreviewMode || "");
      });
    }, Ke.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var t;
    !this.bound || !this.listener || !((t = Ke) != null && t.removeEventListener) || (Ke.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
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
  return typeof ((s = Ke) == null ? void 0 : s.apiURL) == "function" ? Ke.apiURL(a) : a;
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
function Ad(t) {
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
function Ys(t) {
  const e = ce == null ? void 0 : ce.nodeOutputs;
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
    for (const u of s)
      if (so(u, a)) return e[u];
  }
  return null;
}
function Tn(t) {
  if (!t) return "";
  if (typeof t == "string")
    return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Tn(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return lo({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Tn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : lo(t);
}
function Id(t, e) {
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
function Rm(t) {
  const e = [], n = /* @__PURE__ */ new Set(), r = (s) => {
    Array.isArray(s) && s.forEach((u) => e.push(u));
  }, a = (s, u = 0) => {
    !s || u > 3 || n.has(s) || typeof s == "object" && (n.add(s), r(s.images), a(s.output, u + 1), a(s.ui, u + 1), a(s.data, u + 1), a(s.result, u + 1));
  };
  return a(t, 0), e;
}
function Om(t, e) {
  try {
    const n = Rm(e);
    let r = "";
    for (const a of n)
      if (r = Tn(a), r) break;
    r ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(r || ""), Id(t.__panoOwnOutputSrc, t.__panoOwnOutputRev), t.__panoOwnOutputRev, void 0) : (Object.keys(e || {}), void 0);
  } catch {
  }
}
function Fm(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const r = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), a = Ys(n), s = Array.isArray(a == null ? void 0 : a.images) ? a.images : [], u = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], f = r ? [r, ...s, ...u] : [...s, ...u];
  let p = "";
  for (const R of f)
    if (p = Tn(R), p) break;
  if (!p) return null;
  const y = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), h = Ad(p).map((R) => Id(R, y));
  if (!h.length) return null;
  const S = `${p}|rev:${y}`;
  t.__panoOwnOutputImageCache || (t.__panoOwnOutputImageCache = {
    src: "",
    img: null,
    pendingSrc: "",
    pendingImg: null
  });
  const _ = t.__panoOwnOutputImageCache;
  if (_.img && _.src === S) return _.img;
  if (_.pendingImg && _.pendingSrc === S)
    return _.img && (_.img.complete || _.img.naturalWidth || _.img.width) ? _.img : _.pendingImg;
  const I = new Image();
  let L = -1;
  const O = () => {
    if (L += 1, L >= h.length) {
      t.__panoOwnOutputImageCache === _ && (_.pendingSrc = "", _.pendingImg = null);
      return;
    }
    I.src = h[L];
  };
  return I.onload = () => {
    var R;
    t.__panoOwnOutputImageCache === _ && _.pendingImg === I && _.pendingSrc === S && (_.src = S, _.img = I, _.pendingSrc = "", _.pendingImg = null), e == null || e(), (R = t.setDirtyCanvas) == null || R.call(t, !0, !0);
  }, I.onerror = () => {
    if (L + 1 >= h.length) {
      t.__panoOwnOutputImageCache === _ && _.pendingImg === I && (_.pendingSrc = "", _.pendingImg = null);
      return;
    }
    O();
  }, _.pendingSrc = S, _.pendingImg = I, O(), _.img && (_.img.complete || _.img.naturalWidth || _.img.width) ? _.img : I;
}
function Vm(t, e = []) {
  var y, b;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = Cc(t, e).map((h) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(h))).filter((h) => h >= 0), s = n.map((h, S) => ({ input: h, idx: S })).filter(({ input: h }) => String((h == null ? void 0 : h.type) || "").toUpperCase() === "IMAGE").map(({ idx: h }) => h), u = [.../* @__PURE__ */ new Set([...a, ...s])];
  for (const h of u) {
    const S = n[h], _ = S == null ? void 0 : S.link;
    if (_ == null) continue;
    const I = Nd(t.graph, _), { originId: L, originSlot: O } = Pd(I);
    if (L == null) continue;
    const R = Cd(t, h, L);
    if (!R) continue;
    const P = Number(O || 0), C = Ys((R == null ? void 0 : R.id) ?? L), E = Array.isArray(C == null ? void 0 : C.images) ? C.images : [];
    if (E.length) {
      const T = [];
      P >= 0 && P < E.length && T.push(E[P]), T.push(...E);
      for (const _t of T) {
        const V = Tn(_t);
        if (V)
          return String((S == null ? void 0 : S.name) || ""), { src: V, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let j = [];
    try {
      j = typeof (ce == null ? void 0 : ce.getNodeImageUrls) == "function" ? ce.getNodeImageUrls(R) || [] : [];
    } catch {
      j = [];
    }
    if (Array.isArray(j) && j.length) {
      const T = [];
      P >= 0 && P < j.length && T.push(j[P]), T.push(...j);
      for (const _t of T) {
        const V = Tn(_t);
        if (V)
          return String((S == null ? void 0 : S.name) || ""), { src: V, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const st = Array.isArray(R == null ? void 0 : R.imgs) ? R.imgs : [];
    if (st.length) {
      const T = [];
      P >= 0 && P < st.length && T.push(st[P]), T.push(...st);
      for (const _t of T) {
        const V = Tn(_t);
        if (V)
          return String((S == null ? void 0 : S.name) || ""), { src: V, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const dt = (y = R == null ? void 0 : R.widgets) == null ? void 0 : y.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image");
    if (dt) {
      let T = Tn(dt.value);
      if (T && !T.includes("/") && !T.includes(":") && (R.comfyClass === "LoadImage" || R.type === "LoadImage") && (T = Ke.apiURL(`/view?filename=${encodeURIComponent(T)}&type=input&subfolder=`)), T)
        return String((S == null ? void 0 : S.name) || ""), { src: T, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const f = Ys(t == null ? void 0 : t.id), p = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && p.push(...f.pano_input_images), Array.isArray((b = f == null ? void 0 : f.ui) == null ? void 0 : b.pano_input_images) && p.push(...f.ui.pano_input_images), p.length > 0)
    for (const h of p) {
      const S = Tn(h);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Hm(t, e = []) {
  const n = Vm(t, e), r = String((n == null ? void 0 : n.src) || "").trim();
  if (!r) return null;
  const a = Ad(r);
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = e.join("|") || "image", u = t.__panoLinkedInputImageCache.get(s);
  if (u && u.srcRaw === r && u.img) return u.img;
  const f = new Image(), p = { srcRaw: r, resolvedSrc: "", img: f };
  t.__panoLinkedInputImageCache.set(s, p);
  let y = -1;
  const b = () => {
    var S, _;
    if (y += 1, y >= a.length) {
      try {
        (_ = (S = t.__panoLinkedInputImageCache) == null ? void 0 : S.delete) == null || _.call(S, s);
      } catch {
      }
      String((n == null ? void 0 : n.sourceType) || ""), a.length;
      return;
    }
    const h = a[y];
    p.resolvedSrc = h, f.src = h;
  };
  return f.onload = () => {
    var h;
    String(p.resolvedSrc || f.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (h = t.setDirtyCanvas) == null || h.call(t, !0, !0);
  }, f.onerror = (h) => {
    var S, _;
    if (y + 1 < a.length) {
      b();
      return;
    }
    try {
      (_ = (S = t.__panoLinkedInputImageCache) == null ? void 0 : S.delete) == null || _.call(S, s);
    } catch {
    }
    String(p.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((h == null ? void 0 : h.type) || "error");
  }, b(), f;
}
function uo(t, e = [], n = null) {
  const r = Hm(t, e);
  return r ? (typeof n == "function" && (r.complete && (r.naturalWidth || r.width) || r.addEventListener("load", () => n(), { once: !0 })), r) : null;
}
function qs(t) {
  var e, n;
  if (t) {
    try {
      (n = (e = t.__panoLinkedInputImageCache) == null ? void 0 : e.clear) == null || n.call(e);
    } catch {
    }
    t.__panoOwnOutputImageCache = null, t.__panoWrappedErpCache = null;
  }
}
function Ed(t, e) {
  t.__panoRenderCache || (t.__panoRenderCache = {
    mode: String(e || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = t.__panoRenderCache, r = String(e || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function dr(t, e, n = "") {
  const r = Ed(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), a = performance.now();
  return e ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = a), !0) : r.isLoading ? a - Number(r.loadingSinceTs || 0) < _m ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Xs(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), r = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), a = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), s = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || r)), u = n / a, f = r / s, p = Math.min(u, f);
  return Number.isFinite(p) && p > 0 ? p : 1;
}
function Eu(t, e, n = 1) {
  const r = Number((e == null ? void 0 : e.x) || 0), a = Number((e == null ? void 0 : e.y) || 0), s = Number((e == null ? void 0 : e.w) || 0), u = Number((e == null ? void 0 : e.h) || 0);
  if (s <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), p = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), s * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), b = r + (s - p) * 0.5, h = a + (u - y) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(b, h, p, y, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", b + p * 0.5, h + y * 0.5 + 0.5), t.restore();
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
function Dd(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), r = Number((t == null ? void 0 : t.y) || 0), a = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), s = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), u = Number(e) > 0 ? Number(e) : 1;
  let f = a, p = a / u;
  return p > s && (p = s, f = s * u), {
    x: n + (a - f) * 0.5,
    y: r + (s - p) * 0.5,
    w: f,
    h: p
  };
}
function $m(t, e, n, r = 0) {
  if (!t || !e || !n) return !1;
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (a <= 1 || s <= 1) return !1;
  const u = Dd(n, a / s);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(r) || 0));
  return f > 0 && (t.fillStyle = `rgba(0,0,0,${f})`, t.fillRect(u.x, u.y, u.w, u.h)), t.restore(), !0;
}
function jm(t, e = null) {
  const r = Array.isArray(t.widgets) ? t.widgets : [];
  let a = 32;
  return r.forEach((s) => {
    var f;
    if (s === e || !s || s.hidden || s.type === "hidden") return;
    let u = 22;
    try {
      const p = typeof s.computeSize == "function" ? s.computeSize(((f = cr(t)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(p) && Number.isFinite(Number(p[1])) && (u = Number(p[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function Ka(t) {
  const n = jm(t) + 2, r = 8, a = cr(t), s = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || s < 80 ? null : { x: r, y: n, w: s, h: u };
}
function Td(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const r = String(e || "");
  if (!r) return null;
  const a = Lm(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const s = window.__panoSharedImageCache.get(a);
  if (s != null && s.img)
    return t.__panoPreviewImageCache.set(r, { src: a, img: s.img }), s.img;
  const u = t.__panoPreviewImageCache.get(r);
  if (u && u.src === a) return u.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var p, y, b;
    (y = (p = t.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || y.call(p), (b = t.setDirtyCanvas) == null || b.call(t, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), t.__panoPreviewImageCache.set(r, { src: a, img: f }), f;
}
function Um(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.__panoStickerSortCache;
  if ((r == null ? void 0 : r.source) === n && Array.isArray(r.sorted)) return r.sorted;
  const a = [...n].sort((s, u) => Number((s == null ? void 0 : s.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function Ld(t, e) {
  return To(e, {
    selectedId: null,
    hoveredId: null
  });
}
function Rd(t, e, n) {
  return xd(e, (r, a) => Td(t, r, a), { scene: n });
}
function Bm(t, e, n, r = 0.45) {
  const a = (t.x + e.x + n.x) / 3, s = (t.y + e.y + n.y) / 3, u = (f) => {
    const p = f.x - a, y = f.y - s, b = Math.hypot(p, y) || 1;
    return { x: f.x + p / b * r, y: f.y + y / b * r };
  };
  return [u(t), u(e), u(n)];
}
function Du(t, e, n, r, a, s, u, f) {
  const p = n.x * (r.y - a.y) + r.x * (a.y - n.y) + a.x * (n.y - r.y);
  if (Math.abs(p) < 1e-6) return;
  const [y, b, h] = Bm(s, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(b.x, b.y), t.lineTo(h.x, h.y), t.closePath(), t.clip();
  const S = (s.x * (r.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - r.y)) / p, _ = (s.x * (a.x - r.x) + u.x * (n.x - a.x) + f.x * (r.x - n.x)) / p, I = (s.x * (r.x * a.y - a.x * r.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * r.y - r.x * n.y)) / p, L = (s.y * (r.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - r.y)) / p, O = (s.y * (a.x - r.x) + u.y * (n.x - a.x) + f.y * (r.x - n.x)) / p, R = (s.y * (r.x * a.y - a.x * r.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * r.y - r.x * n.y)) / p;
  t.transform(S, L, _, O, I, R), t.drawImage(e, 0, 0), t.restore();
}
function Od(t, e, n, r) {
  const a = ks(t, e.right), s = ks(t, e.up), u = ks(t, e.fwd);
  if (u <= 1e-4) return null;
  const f = s / u / r, p = a / u / r;
  return { x: n.x + n.w * 0.5 + p * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Fd(t, e, n, r, a, s, u, f = 12, p = 9) {
  var it;
  const y = W(Number(u.hFOV_deg || 30), 1, 179) * kr, b = W(Number(u.vFOV_deg || 30), 1, 179) * kr, h = Math.tan(y * 0.5), S = Math.tan(b * 0.5), _ = u.crop || {}, I = W(Number(_.x0 ?? 0), 0, 1), L = W(Number(_.y0 ?? 0), 0, 1), O = W(Number(_.x1 ?? 1), 0, 1), R = W(Number(_.y1 ?? 1), 0, 1), P = Math.max(1e-4, O - I), C = Math.max(1e-4, R - L), E = Nc(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), j = [], st = [], dt = [], T = [];
  for (let tt = 0; tt <= p; tt++) {
    const ct = tt / p, q = (1 - (L + ct * C) * 2) * S;
    for (let lt = 0; lt <= f; lt++) {
      const Nt = lt / f, Rt = ((I + Nt * P) * 2 - 1) * h, le = E.fwd.x + E.right.x * Rt + E.up.x * q, _e = E.fwd.y + E.right.y * Rt + E.up.y * q, Fe = E.fwd.z + E.right.z * Rt + E.up.z * q, g = Math.hypot(le, _e, Fe) || 1e-8, ue = le / g, Ye = _e / g, qe = Fe / g, Ce = ue * r.right.x + Ye * r.right.y + qe * r.right.z, It = ue * r.up.x + Ye * r.up.y + qe * r.up.z, D = ue * r.fwd.x + Ye * r.fwd.y + qe * r.fwd.z;
      if (D <= 1e-4)
        j[tt] || (j[tt] = []), st[tt] || (st[tt] = []), j[tt][lt] = null, st[tt][lt] = null;
      else {
        const F = It / D / a, Y = Ce / D / a;
        j[tt] || (j[tt] = []), st[tt] || (st[tt] = []), j[tt][lt] = n.x + n.w * 0.5 + Y * n.h * 0.5, st[tt][lt] = n.y + n.h * 0.5 - F * n.h * 0.5;
      }
      dt[tt] || (dt[tt] = []), T[tt] || (T[tt] = []), dt[tt][lt] = Nt, T[tt][lt] = ct;
    }
  }
  const _t = (it = s.assets) == null ? void 0 : it[u.asset_id], V = Td(e, u.asset_id, _t);
  if (!V || !V.complete || !V.naturalWidth) return;
  const ht = Number(V.naturalWidth || V.width || 1), xt = Number(V.naturalHeight || V.height || 1), St = f < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = St;
  for (let tt = 0; tt < p; tt++)
    for (let ct = 0; ct < f; ct++) {
      const gt = j[tt][ct], q = st[tt][ct], lt = j[tt][ct + 1], Nt = st[tt][ct + 1], Lt = j[tt + 1][ct], Rt = st[tt + 1][ct], le = j[tt + 1][ct + 1], _e = st[tt + 1][ct + 1];
      if (gt === null || lt === null || Lt === null || le === null) continue;
      const Fe = dt[tt][ct] * ht, g = T[tt][ct] * xt, ue = dt[tt][ct + 1] * ht, Ye = T[tt][ct + 1] * xt, qe = dt[tt + 1][ct] * ht, Ce = T[tt + 1][ct] * xt, It = dt[tt + 1][ct + 1] * ht, D = T[tt + 1][ct + 1] * xt;
      Du(t, V, { x: Fe, y: g }, { x: ue, y: Ye }, { x: It, y: D }, { x: gt, y: q }, { x: lt, y: Nt }, { x: le, y: _e }), Du(t, V, { x: Fe, y: g }, { x: It, y: D }, { x: qe, y: Ce }, { x: gt, y: q }, { x: le, y: _e }, { x: Lt, y: Rt });
    }
}
function Gm(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const r = Pc(t), a = Ka(t);
  if (!a) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const s = Nc(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(t.__panoPreviewView.fov || 100) * kr * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(a.x, a.y, a.w, a.h, 8), e.fill(), e.stroke(), e.clip();
  const f = uo(
    t,
    Cc(t, ["erp_image", "bg_erp"]),
    () => {
      var E, j, st;
      (j = (E = t.__panoDomPreview) == null ? void 0 : E.requestDraw) == null || j.call(E), (st = t.setDirtyCanvas) == null || st.call(t, !0, !1);
    }
  ), p = !!(f && f.complete && (f.naturalWidth || f.width)), y = zd(t), b = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, h = y || b, S = oo, _ = Ld(t, r), I = Rd(t, r, _), L = Mc(t.__panoPreviewView, r == null ? void 0 : r.coverage);
  let O = !1;
  if (t.__panoRuntimeCore || (t.__panoRuntimeCore = Xi()), p) {
    const E = Eo({
      stateRevision: [
        "runtime_panorama_scene",
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0),
        Number((r == null ? void 0 : r.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(I) ? I.map((dt) => `${String((dt == null ? void 0 : dt.assetId) || "")}:${String((dt == null ? void 0 : dt.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: f,
      backgroundRevision: [
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0)
      ].join("|"),
      coverageDeg: Number((r == null ? void 0 : r.coverage) || 360) === 180 ? 180 : 360,
      scene: _,
      textures: I,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), st = t.__panoRuntimeCore.syncState(E) ? t.__panoRuntimeCore.renderToTarget("runtime_preview", L, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    O = !!st, st && e.drawImage(st, a.x, a.y, a.w, a.h);
  }
  const R = h ? 8 : 12, P = h ? 6 : 9, C = Um(t, r);
  if (!p || C.length === 0) {
    const E = Xs(e == null ? void 0 : e.canvas, a);
    Vd(e, a, s, u, E);
  }
  !O && p && fo(t, e, a, s, u, f, S), !O && C.length > 0 && C.forEach((E) => Fd(e, t, a, s, u, r, E, R, P)), e.restore();
}
function Km(t, e, n, r, a = "preview_scene", s = "") {
  const u = String(
    s || [
      String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
      Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
      Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
    ].join("|")
  );
  return Eo({
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
function Wa(t, e, n, r) {
  var s, u, f, p, y, b;
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
      const h = r.convertEventToCanvasOffset(e);
      if (Array.isArray(h) && h.length >= 2)
        return {
          x: Number(h[0]) - Number(((f = t == null ? void 0 : t.pos) == null ? void 0 : f[0]) || 0),
          y: Number(h[1]) - Number(((p = t == null ? void 0 : t.pos) == null ? void 0 : p[1]) || 0)
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
  var h, S;
  const n = Number(t == null ? void 0 : t.clientX), r = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const a = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, s = (h = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : h.call(a), u = (e == null ? void 0 : e.ds) || ((S = ce == null ? void 0 : ce.canvas) == null ? void 0 : S.ds);
  if (!s || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const p = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(s.left || 0)) / f - Number(p[0] || 0), b = (r - Number(s.top || 0)) / f - Number(p[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(b) ? null : { x: y, y: b };
}
function Ym(t, e, n) {
  var a, s;
  const r = Wm(e, n || (ce == null ? void 0 : ce.canvas));
  return r ? {
    x: r.x - Number(((a = t == null ? void 0 : t.pos) == null ? void 0 : a[0]) || 0),
    y: r.y - Number(((s = t == null ? void 0 : t.pos) == null ? void 0 : s[1]) || 0)
  } : null;
}
function Na(t) {
  if (t.__panoLegacyPreviewHooked) return;
  t.__panoPreviewMode, String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""), cr(t), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", wd(t, 320, 180), jr(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var S, _;
    const h = e ? e.apply(this, arguments) : void 0;
    try {
      const I = arguments[0];
      I && !((S = this.flags) != null && S.collapsed) && (r.stepInertia(performance.now()) && ((_ = this.setDirtyCanvas) == null || _.call(this, !0, !1)), Gm(this, I, r));
    } catch {
    }
    return h;
  }, t.onResize = function() {
    var S;
    const h = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ho(this, 150), (S = this.setDirtyCanvas) == null || S.call(this, !0, !0), $d(this, 220, null), h;
  };
  const r = Do({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (h) => {
      t.__panoPreviewView = h;
    },
    getViewportSize: () => {
      const h = Ka(t);
      return {
        w: Math.max(1, Number((h == null ? void 0 : h.w) || 0)),
        h: Math.max(1, Number((h == null ? void 0 : h.h) || 0))
      };
    },
    onInteraction: () => {
      var h;
      Hd(t), (h = t.setDirtyCanvas) == null || h.call(t, !0, !1);
    }
  }), a = t.onMouseDown;
  t.onMouseDown = function(h, S, _) {
    var I;
    try {
      if (!((I = this.flags) != null && I.collapsed)) {
        const L = Wa(this, h, S, _) || { x: 0, y: 0 }, O = cr(this), R = Number((O == null ? void 0 : O[0]) || 0), P = Number((O == null ? void 0 : O[1]) || 0);
        if (L.x >= R - 20 && L.y >= P - 20)
          return a ? a.apply(this, arguments) : void 0;
        const E = Ka(this);
        if (Au(L.x, L.y, E))
          return (h == null ? void 0 : h.button) === 0 && r.startDrag(L.x, L.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const s = t.onMouseMove;
  t.onMouseMove = function(h, S, _) {
    try {
      const I = Wa(this, h, S, _);
      if (r.state.drag.active) {
        if (typeof (h == null ? void 0 : h.buttons) == "number" && (h.buttons & 1) === 0)
          return r.endDrag(), !0;
        const L = I || r.state.drag;
        return r.moveDrag(L.x, L.y, "pano"), !0;
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
    const h = f ? f.apply(this, arguments) : void 0;
    return r.state.drag.active && r.endDrag(), h;
  };
  const p = t.onMouseWheel;
  t.onMouseWheel = function(h, S, _) {
    var I, L;
    try {
      if ((I = this.flags) != null && I.collapsed) return p ? p.apply(this, arguments) : void 0;
      const O = Wa(this, h, S, _), R = Ka(this);
      if (!O || !Au(O.x, O.y, R)) return p ? p.apply(this, arguments) : void 0;
      const P = Number((h == null ? void 0 : h.deltaY) ?? (h == null ? void 0 : h.wheelDeltaY) ?? (typeof S == "number" ? S : 0));
      return r.applyWheel(Math.sign(P)) && ((L = this.setDirtyCanvas) == null || L.call(this, !0, !1)), typeof (h == null ? void 0 : h.preventDefault) == "function" && h.preventDefault(), typeof (h == null ? void 0 : h.stopPropagation) == "function" && h.stopPropagation(), !0;
    } catch {
      return p ? p.apply(this, arguments) : void 0;
    }
  };
  const y = t.onRemoved, b = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = n, t.onDrawForeground = e, t.onMouseDown = a, t.onMouseMove = s, t.onMouseUp = u, t.onMouseLeave = f, t.onMouseWheel = p, t.onRemoved = y, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = b, t.onRemoved = function() {
    return b(), Li.unregister(this), co.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function qm(t, e) {
  const n = uo(
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
function Xm(t, e) {
  var y, b, h, S, _, I, L, O, R, P, C, E;
  const n = (b = (y = e == null ? void 0 : e.painting) == null ? void 0 : y.paint) == null ? void 0 : b.strokes, r = (S = (h = e == null ? void 0 : e.painting) == null ? void 0 : h.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, s = Array.isArray(r) && r.length > 0;
  if (!a && !s) return null;
  const u = qm(t, e), f = `${u.width}x${u.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== f) && (t.__panoPreviewPaintEngine = Bs(u), t.__panoPreviewPaintDescriptorKey = f, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const p = {
    paint: n || null,
    mask: r || null,
    groups: ((_ = e == null ? void 0 : e.painting) == null ? void 0 : _.groups) || null,
    rasterObjects: ((I = e == null ? void 0 : e.painting) == null ? void 0 : I.raster_objects) || null
  };
  return (((L = t.__panoPreviewPaintRevision) == null ? void 0 : L.paint) !== p.paint || ((O = t.__panoPreviewPaintRevision) == null ? void 0 : O.mask) !== p.mask || ((R = t.__panoPreviewPaintRevision) == null ? void 0 : R.groups) !== p.groups || ((P = t.__panoPreviewPaintRevision) == null ? void 0 : P.rasterObjects) !== p.rasterObjects) && (t.__panoPreviewPaintRevision = p, t.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    s ? "m1" : "m0",
    String(Array.isArray((C = e == null ? void 0 : e.painting) == null ? void 0 : C.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((E = e == null ? void 0 : e.painting) == null ? void 0 : E.raster_objects) ? e.painting.raster_objects.length : 0)
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
  const r = (f = e == null ? void 0 : e.painting_layer) == null ? void 0 : f.paint, a = Tn(r);
  if (!a) return null;
  t.__panoPaintingLayerImageCache || (t.__panoPaintingLayerImageCache = { src: "", img: null });
  const s = t.__panoPaintingLayerImageCache;
  if (s.img && s.src === a) return s.img;
  const u = new Image();
  return u.onload = () => {
    var p;
    n == null || n(), (p = t.setDirtyCanvas) == null || p.call(t, !0, !0);
  }, u.onerror = () => {
    var p;
    ((p = t.__panoPaintingLayerImageCache) == null ? void 0 : p.img) === u && (t.__panoPaintingLayerImageCache = { src: "", img: null });
  }, u.src = a, t.__panoPaintingLayerImageCache = { src: a, img: u }, u;
}
function Tu(t, e) {
  var s, u;
  const n = t == null ? void 0 : t.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((s = e == null ? void 0 : e.painting) == null ? void 0 : s.raster_objects) && e.painting.raster_objects.length > 0) {
    const f = Qm(t, e, () => {
      var p, y;
      return (y = (p = t.__panoDomPreview) == null ? void 0 : p.requestDraw) == null ? void 0 : y.call(p);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = e == null ? void 0 : e.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
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
  const u = ty(n);
  if (u.width === r && u.height === a) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  const p = ey(t, s, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!p) {
    e.drawImage(n, 0, 0, r, a);
    return;
  }
  try {
    p.clearRect(0, 0, u.width, u.height), p.drawImage(n, 0, 0, u.width, u.height);
    const y = p.getImageData(0, 0, u.width, u.height).data, b = e.getImageData(0, 0, r, a), h = b.data, S = Math.max(0, u.width - 1), _ = Math.max(0, u.height - 1);
    for (let I = 0; I < a; I += 1) {
      const L = (I + 0.5) * u.height / a - 0.5, O = W(Math.floor(L), 0, _), R = W(O + 1, 0, _), P = W(L - O, 0, 1);
      for (let C = 0; C < r; C += 1) {
        const E = (C + 0.5) * u.width / r - 0.5, j = W(Math.floor(E), 0, S), st = W(j + 1, 0, S), dt = W(E - j, 0, 1);
        let T = 0, _t = 0, V = 0, ht = 0;
        const xt = (tt, ct, gt) => {
          const q = (ct * u.width + tt) * 4, lt = (y[q + 3] || 0) / 255;
          T += lt * gt, _t += (y[q] || 0) / 255 * lt * gt, V += (y[q + 1] || 0) / 255 * lt * gt, ht += (y[q + 2] || 0) / 255 * lt * gt;
        };
        if (xt(j, O, (1 - dt) * (1 - P)), xt(st, O, dt * (1 - P)), xt(j, R, (1 - dt) * P), xt(st, R, dt * P), T <= 1e-6) continue;
        const St = (I * r + C) * 4, it = 1 - T;
        h[St] = Math.round(W((_t + h[St] / 255 * it) * 255, 0, 255)), h[St + 1] = Math.round(W((V + h[St + 1] / 255 * it) * 255, 0, 255)), h[St + 2] = Math.round(W((ht + h[St + 2] / 255 * it) * 255, 0, 255)), h[St + 3] = 255;
      }
    }
    e.putImageData(b, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, r, a);
  }
}
function Lu(t, e, n, r) {
  const a = Math.max(1, Number(e.naturalWidth || e.width || 0)), s = Math.max(1, Number(e.naturalHeight || e.height || 0)), f = `${String(e.currentSrc || e.src || "")}|${a}x${s}|${r}`;
  let p = t.__panoPreviewBgPaint;
  if (!p || p.__revKey !== f || p.width !== a || p.height !== s) {
    (!p || p.width !== a || p.height !== s) && (p = document.createElement("canvas"), p.width = a, p.height = s, t.__panoPreviewBgPaint = p);
    const y = p.getContext("2d");
    y.clearRect(0, 0, a, s), y.drawImage(e, 0, 0, a, s), ny(t, y, n, a, s, "__panoPreviewOverlayScratch"), p.__revKey = f;
  }
  return p;
}
function ry(t, e, n, r = null) {
  const a = String(t.__panoPreviewMode || "stickers");
  Ed(t, a);
  const s = Pc(t), u = a === "cutout" ? Fm(t, () => {
    var L, O;
    return (O = (L = t.__panoDomPreview) == null ? void 0 : L.requestDraw) == null ? void 0 : O.call(L);
  }) : null, f = !!(u && u.complete && (u.naturalWidth || u.width)), p = e.parentElement, y = 1, b = Math.max(1, Number((p == null ? void 0 : p.clientWidth) || e.clientWidth || 0)), h = Math.max(1, Number((p == null ? void 0 : p.clientHeight) || e.clientHeight || 0)), S = Math.max(64, Math.round(b * y)), _ = Math.max(64, Math.round(h * y)), I = e.getContext("2d");
  if (I)
    if (a === "cutout") {
      const L = zm(s), O = uo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var ht, xt;
          return (xt = (ht = t.__panoDomPreview) == null ? void 0 : ht.requestDraw) == null ? void 0 : xt.call(ht);
        }
      ), R = !!(O && O.complete && (O.naturalWidth || O.width));
      (e.width !== S || e.height !== _) && (e.width = S, e.height = _);
      const P = { x: 0, y: 0, w: S, h: _ }, C = f ? W(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : R ? W(Number((O.naturalWidth || O.width) / Math.max(1, Number(O.naturalHeight || O.height || 1))), 0.05, 20) : 1, E = L ? ym(L) : null, j = W(Number((E == null ? void 0 : E.aspect) || C || 1), 0.05, 20), st = Dd(P, j), dt = Xs(e, P);
      I.setTransform(1, 0, 0, 1, 0, 0), I.fillStyle = "#070707", I.fillRect(0, 0, S, _);
      let T = "none", _t = "Open editor and add frame", V = "";
      if (f)
        I.drawImage(u, st.x, st.y, st.w, st.h);
      else if (V = String((O == null ? void 0 : O.src) || ""), L)
        O && !R ? T = "loading" : R ? (T = "empty", _t = "Open editor or run node") : (T = "empty", _t = "Connect ERP image");
      else {
        if (R) {
          const ht = Tu(t, s), xt = ht != null && ht.source ? Lu(t, O, ht.source, ht.revision || "") : O;
          $m(I, xt, P, 0.44);
        }
        T = "empty", _t = "Open editor and add frame";
      }
      T === "loading" ? (Eu(I, st, dt), Ma(t, !1), dr(t, !0, V)) : T === "empty" ? (Ma(t, !0, _t), dr(t, !1, "")) : (Ma(t, !1), dr(t, !1, ""));
    } else {
      Ma(t, !1), (e.width !== S || e.height !== _) && (e.width = S, e.height = _);
      const L = { x: 0, y: 0, w: S, h: _ }, O = Xs(e, L);
      I.setTransform(1, 0, 0, 1, 0, 0), I.clearRect(0, 0, S, _), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const R = Nc(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), P = Math.tan(Number(t.__panoPreviewView.fov || 100) * kr * 0.5), C = uo(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var it, tt;
          return (tt = (it = t.__panoDomPreview) == null ? void 0 : it.requestDraw) == null ? void 0 : tt.call(it);
        }
      ), E = !!(C && C.complete && (C.naturalWidth || C.width));
      I.fillStyle = "#1a1a1e", I.fillRect(0, 0, S, _);
      const j = Ld(t, s), st = Rd(t, s, j), dt = Mc(t.__panoPreviewView, s == null ? void 0 : s.coverage), T = Tu(t, s), _t = (T == null ? void 0 : T.source) || null, V = E && _t ? Lu(t, C, _t, (T == null ? void 0 : T.revision) || "") : C, ht = V !== C ? String(V.__revKey || "") : C ? [
        String(C.currentSrc || C.src || ""),
        Number(C.naturalWidth || C.width || 0),
        Number(C.naturalHeight || C.height || 0)
      ].join("|") : "";
      t.__panoDomRuntimeCore || (t.__panoDomRuntimeCore = Xi());
      let xt = !1;
      if (E) {
        const tt = t.__panoDomRuntimeCore.syncState(
          Km(V, s, j, st, "runtime_dom_scene", ht)
        ) ? t.__panoDomRuntimeCore.renderToTarget("runtime_preview", dt, {
          width: L.w,
          height: L.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        tt && (I.drawImage(tt, L.x, L.y, L.w, L.h), xt = !0);
      }
      const St = j.stickers;
      if (E && xt)
        dr(t, !1, "");
      else if (E)
        fo(t, I, L, R, P, V, oo), dr(t, !1, "");
      else if (_t)
        fo(t, I, L, R, P, _t, oo), dr(t, !!C && !E, String((C == null ? void 0 : C.src) || ""));
      else {
        const it = !!C && !E;
        dr(t, it, String((C == null ? void 0 : C.src) || "")), it && Eu(I, L, O);
      }
      if ((!E || St.length === 0) && Vd(I, L, R, P, O), !xt && St.length > 0) {
        const it = zd(t), tt = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, ct = it || tt, gt = ct ? 8 : 12, q = ct ? 6 : 9;
        St.forEach((lt) => Fd(I, t, L, R, P, s, lt, gt, q));
      } else if (!C || !E) {
        const it = Math.max(14, Math.round(16 * O));
        I.fillStyle = "rgba(212,212,216,0.85)", I.font = `600 ${it}px Plus Jakarta Sans, Geist, sans-serif`, I.textAlign = "center", I.fillText("Open editor to add stickers", S * 0.5, _ * 0.5 + 24 * O);
      }
    }
}
function fo(t, e, n, r, a, s, u = vm) {
  const f = Pc(t), p = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  t.__panoBackgroundCore || (t.__panoBackgroundCore = Xi());
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
  const h = t.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(p.yaw || 0),
    pitchDeg: Number(p.pitch || 0),
    fovDeg: Number(p.fov || 100),
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
  }, {
    width: n.w,
    height: n.h,
    dpr: window.devicePixelRatio || 1,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  h && e.drawImage(h, n.x, n.y, n.w, n.h);
}
function Ru(t, e, n, r, a, s, u = 1) {
  let f = !1;
  t.strokeStyle = s, t.lineWidth = u, t.beginPath();
  for (const p of e) {
    const y = Od(p, n, r, a);
    if (!y) {
      f = !1;
      continue;
    }
    f ? t.lineTo(y.x, y.y) : (t.moveTo(y.x, y.y), f = !0);
  }
  t.stroke();
}
function Vd(t, e, n, r, a = 1) {
  t.save();
  const s = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const b = [];
    for (let h = -180; h <= 180; h += 15) b.push(gr(h, y));
    Ru(t, b, n, e, r, y === 0 ? u : s, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const b = [];
    for (let h = -89; h <= 89; h += 15) b.push(gr(y, h));
    Ru(t, b, n, e, r, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : s, y % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: gr(0, 0) },
    { name: "Right", dir: gr(90, 0) },
    { name: "Back", dir: gr(180, 0) },
    { name: "Left", dir: gr(-90, 0) }
  ];
  t.fillStyle = "rgba(250, 250, 250, 0.32)";
  const p = Math.max(9, Math.round(11 * a));
  t.font = `500 ${p}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", f.forEach((y) => {
    const b = Od(y.dir, n, e, r);
    b && t.fillText(y.name, b.x, b.y + 20 * a);
  }), t.restore();
}
function iy(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function Hd(t) {
  const e = iy(t);
  e.dragging = !1, e.hqFrames = bm;
}
function ho(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function zd(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function ay(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function oy(t, e, n = 20) {
  var u;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const r = (u = e.getBoundingClientRect) == null ? void 0 : u.call(e);
  if (!r) return !1;
  const a = Number(t.clientX) - Number(r.left || 0), s = Number(t.clientY) - Number(r.top || 0);
  return a >= r.width - n && s >= r.height - n;
}
function Fr(t, e) {
  return oy(t, e) ? !1 : (ay(t), !0);
}
function sy() {
  var n;
  const t = (n = ce == null ? void 0 : ce.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function cy(t) {
  var n;
  if (!t) return;
  const e = (n = ce == null ? void 0 : ce.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function ly(t, e = 360, n = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const r = cr(t), a = Number((r == null ? void 0 : r[0]) || 0), s = Number((r == null ? void 0 : r[1]) || 0);
  if (!Number.isFinite(a) || !Number.isFinite(s) || a >= e && s >= n) return;
  const u = [Math.max(e, a), Math.max(n, s)];
  try {
    typeof t.setSize == "function" ? t.setSize(u) : t.size = u, t.__panoStandaloneBootSized = !0;
  } catch (f) {
    String((f == null ? void 0 : f.message) || f || "unknown");
  }
}
function uy(t, e = 0, n = null, r = 1200) {
  const a = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = a > 0, !(a <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var s, u;
    t.__panoBootMinHeightTimer = null, (s = t == null ? void 0 : t.__panoDomPreview) != null && s.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, n == null || n(), (u = t.setDirtyCanvas) == null || u.call(t, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Ou(t, e = null, n = 0) {
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
      t.__panoUserResized = !0, ho(t, 150), e == null || e(), $d(t, 180, e);
    }
  };
}
function $d(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    t.__panoResizeSettleTimer = null, n == null || n(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function jr(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function fy(t, e = {}) {
  var gt;
  const n = e.__allowStandalone === !0, r = km(t);
  if (r && !n) {
    Sd(t);
    return;
  }
  r && ly(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", co.register(t);
  const a = t.__panoPreviewMode === "stickers", s = e.__noLegacyFallback === !0, u = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null, String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""), a || Li.unregister(t);
  const f = String(e.__panoForcedPath || "").trim(), p = a ? kd(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Sr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (p.chosenPath = f, p.reason = "controller_target_backend");
  const y = a ? p.chosenPath : "dom", b = p.signature || Sr(t);
  if (Number(t.__panoRebindGeneration || 0), Ws(t), t == null || t.id, t.__panoPreviewMode, p.reason, p.frontendVersionRaw, t.addDOMWidget, cr(t), t.__panoFrontendSig = b, t.__panoStickersPath = y, a && Li.register(t), a && y === "legacy_draw") {
    if (s) return;
    Zr(t, { keepMonitor: !0 }), Na(t);
    return;
  }
  if ((gt = t.__panoDomPreview) != null && gt.widget) return;
  if (t.__panoLegacyPreviewHooked && Zr(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    a && !s && Na(t);
    return;
  }
  const h = e.noPreview === !0, S = a || h ? 0 : 56, _ = document.createElement("div");
  if (wm(), _.className = "pano-node-preview-dom", _.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), h && _.classList.add("pano-node-preview--no-preview"), _.setAttribute("data-capture-wheel", "true"), _.setAttribute("tabindex", "-1"), _.style.cssText = [
    "width:100%",
    h ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), h) {
    const q = t.addDOMWidget(Ks(), "preview", _, Ou(t, null));
    jr(t), t.__panoDomPreview = { widget: q, root: _, requestDraw: () => {
    } }, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom";
    return;
  }
  const I = document.createElement("div");
  I.style.cssText = [
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
  const O = document.createElement("div");
  O.style.cssText = [
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
  ].join(";"), O.textContent = "Open editor and add frame", I.appendChild(L), I.appendChild(O), _.appendChild(I), wd(t, 120, 120), jr(t);
  let R = null;
  try {
    uy(t, S, () => {
      var q, lt;
      return (lt = (q = t.__panoDomPreview) == null ? void 0 : q.requestDraw) == null ? void 0 : lt.call(q);
    }), R = t.addDOMWidget(
      Ks(),
      "preview",
      _,
      Ou(t, () => {
        var q, lt;
        return (lt = (q = t.__panoDomPreview) == null ? void 0 : q.requestDraw) == null ? void 0 : lt.call(q);
      }, S)
    );
  } catch {
    a && Na(t);
    return;
  }
  const P = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, C = () => {
    P.needsDraw = !0, P.raf || (P.raf = requestAnimationFrame(st));
  }, E = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    ho(t, 150), C();
  }) : null;
  E == null || E.observe(I);
  const j = () => {
    if (!a || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const q = 3, lt = (Nt) => {
      requestAnimationFrame(() => {
        var Rt;
        const Lt = !!(_ != null && _.isConnected && (I != null && I.isConnected) && (L != null && L.isConnected) && Number(I.clientHeight || 0) > 0 && Number(L.clientHeight || 0) > 0);
        if (!Lt && Nt < q) {
          lt(Nt + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, t.__panoPreviewMode, Number((I == null ? void 0 : I.clientHeight) || 0), Number((L == null ? void 0 : L.clientHeight) || 0), !Lt) {
          if (s) {
            t.__panoPreviewMode, Number((I == null ? void 0 : I.clientHeight) || 0), Number((L == null ? void 0 : L.clientHeight) || 0);
            return;
          }
          Zr(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", Na(t), (Rt = t.setDirtyCanvas) == null || Rt.call(t, !0, !0);
        }
      });
    };
    lt(1);
  }, st = (q) => {
    var Nt, Lt, Rt;
    P.raf = 0;
    const lt = dt.stepInertia(q);
    (P.needsDraw || lt) && (P.needsDraw = !1, (Nt = t.flags) != null && Nt.collapsed || ry(t, L, null, dt), (Lt = t.setDirtyCanvas) == null || Lt.call(t, !0, !1)), (lt || P.needsDraw) && (P.raf = requestAnimationFrame(st)), xm() && (!t.__panoDebugLastTs || q - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = q, t.__panoPreviewMode, cr(t), vi(_), vi(I), vi(L), vi(_.parentElement), vi((Rt = _.parentElement) == null ? void 0 : Rt.parentElement), Number(L.width || 0), Number(L.height || 0), void 0);
  }, dt = Do({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (q) => {
      t.__panoPreviewView = q;
    },
    onInteraction: () => {
      C();
    }
  });
  L.addEventListener("pointerdown", (q) => {
    var lt, Nt;
    Fr(q, I) && u && q.button === 0 && ((lt = _.focus) == null || lt.call(_), (Nt = L.setPointerCapture) == null || Nt.call(L, q.pointerId), L.style.cursor = "grabbing", dt.startDrag(q.clientX, q.clientY, q.pointerId));
  }), L.addEventListener("pointermove", (q) => {
    !u || !dt.state.drag.active || (Fr(q, I), dt.moveDrag(q.clientX, q.clientY, "pano"));
  });
  const T = (q) => {
    var lt;
    !u || !dt.state.drag.active || (Fr(q, I), (lt = L.releasePointerCapture) == null || lt.call(L, q.pointerId), L.style.cursor = "grab", dt.endDrag(), Hd(t), C());
  };
  L.addEventListener("pointerup", T), L.addEventListener("pointercancel", T), L.addEventListener("pointerleave", (q) => {
    dt.state.drag.active && T(q);
  });
  const _t = (q) => {
    var Nt, Lt, Rt;
    if (!Fr(q, I) || !u) return;
    const lt = sy();
    dt.applyWheelEvent(q) && C(), (Nt = q.preventDefault) == null || Nt.call(q), (Lt = q.stopPropagation) == null || Lt.call(q), (Rt = q.stopImmediatePropagation) == null || Rt.call(q), requestAnimationFrame(() => {
      var le, _e;
      cy(lt), (_e = (le = ce == null ? void 0 : ce.canvas) == null ? void 0 : le.setDirty) == null || _e.call(le, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((q) => {
    I.addEventListener(q, _t, { passive: !1, capture: !0 }), L.addEventListener(q, _t, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((q) => {
    L.addEventListener(q, (lt) => Fr(lt, I)), I.addEventListener(q, (lt) => Fr(lt, I));
  });
  const V = Ki(t, "state_json");
  if (V && !V.__panoPreviewPatchedCb) {
    V.__panoPreviewPatchedCb = !0;
    const q = V.callback;
    V.callback = (lt) => {
      const Nt = q ? q(lt) : void 0;
      return C(), Nt;
    };
  }
  const ht = Ki(t, "bg_color");
  if (ht && !ht.__panoPreviewPatchedCb) {
    ht.__panoPreviewPatchedCb = !0;
    const q = ht.callback;
    ht.callback = (lt) => {
      const Nt = q ? q(lt) : void 0;
      return C(), Nt;
    };
  }
  const xt = t.onRemoved, St = t.onResize, it = t.onExecuted;
  t.onExecuted = function(q) {
    Om(t, q), qs(t), jr(t), C();
    const lt = it ? it.apply(this, arguments) : void 0;
    return jr(t), lt;
  };
  const tt = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return qs(t), jr(t), C(), tt ? tt.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var lt;
    const q = St ? St.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ho(this, 150), C(), (lt = this.setDirtyCanvas) == null || lt.call(this, !0, !1), q;
  }, t.onRemoved = function() {
    return ct(), Li.unregister(this), co.unregister(this), xt ? xt.apply(this, arguments) : void 0;
  };
  const ct = () => {
    var q;
    P.raf && cancelAnimationFrame(P.raf), (q = E == null ? void 0 : E.disconnect) == null || q.call(E), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = St, t.onExecuted = it, t.onConnectionsChange = tt, t.onRemoved = xt;
  };
  t.__panoDomRestore = ct, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: R, root: _, canvas: L, requestDraw: C, state: P, emptyHintEl: O }, j(), C();
}
function Fu(t, e = {}) {
  Md(t).attach({
    ...e,
    mode: "cutout"
  });
}
const po = Math.PI / 180;
function Nr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Vu(t, e) {
  return Nr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Pa(t, e) {
  return Nr(t.x * e, t.y * e, t.z * e);
}
function Hu(t, e) {
  return Nr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Ca(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Nr(t.x / e, t.y / e, t.z / e);
}
function dy(t, e) {
  const n = t * po, r = e * po, a = Math.cos(r);
  return Nr(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function hy(t, e, n = 0) {
  const r = dy(t, e), a = Nr(0, 1, 0);
  let s = Hu(a, r);
  Math.hypot(s.x, s.y, s.z) < 1e-6 && (s = Nr(1, 0, 0)), s = Ca(s);
  const u = Ca(Hu(r, s)), f = n * po, p = Math.cos(f), y = Math.sin(f), b = Vu(Pa(s, p), Pa(u, y)), h = Vu(Pa(s, -y), Pa(u, p));
  return { fwd: r, right: Ca(b), up: Ca(h) };
}
const Aa = 140, py = 180, zu = 40, Ms = 10;
function $u(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":");
  return { full: e, tail: String(n[n.length - 1] || "").trim() };
}
function ju(t, e) {
  const n = $u(t), r = $u(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Uu(t) {
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
  return typeof ((s = Ke) == null ? void 0 : s.apiURL) == "function" ? Ke.apiURL(a) : a;
}
function Ri(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Ri(t[0]);
    const e = typeof t[0] == "string" ? String(t[0] || "").trim() : "";
    if (e)
      return Uu({
        filename: e,
        subfolder: String(t[1] || "").trim(),
        type: String(t[2] || "output").trim() || "output"
      });
    for (const n of t) {
      const r = Ri(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Uu(t);
}
function Bu(t) {
  var a;
  const e = (a = pn) == null ? void 0 : a.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  if (e instanceof Map) {
    for (const s of e.keys())
      if (ju(s, n)) return e.get(s);
  } else
    for (const s of Object.keys(e))
      if (ju(s, n)) return e[s];
  return null;
}
function gy(t, e = "erp_image") {
  var I, L, O, R, P, C, E, j, st, dt, T, _t;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let r = null;
  const a = n.find((V) => String((V == null ? void 0 : V.name) || "") === String(e));
  if ((a == null ? void 0 : a.link) != null && (r = a.link), r == null) {
    const V = n.find((ht) => String((ht == null ? void 0 : ht.type) || "").toUpperCase() === "IMAGE" && (ht == null ? void 0 : ht.link) != null);
    (V == null ? void 0 : V.link) != null && (r = V.link);
  }
  if (r == null) return "";
  const s = ((L = (I = t == null ? void 0 : t.graph) == null ? void 0 : I.links) == null ? void 0 : L[r]) || ((P = (R = (O = pn) == null ? void 0 : O.graph) == null ? void 0 : R.links) == null ? void 0 : P[r]);
  if (!s) return "";
  const u = Number(s.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (j = (E = (C = pn) == null ? void 0 : C.graph) == null ? void 0 : E.getNodeById) == null ? void 0 : j.call(E, u), p = Bu(u), y = Bu(t == null ? void 0 : t.id), b = [
    p == null ? void 0 : p.images,
    (st = p == null ? void 0 : p.ui) == null ? void 0 : st.pano_input_images,
    p == null ? void 0 : p.pano_input_images,
    (dt = y == null ? void 0 : y.ui) == null ? void 0 : dt.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const V of b)
    if (Array.isArray(V))
      for (const ht of V) {
        const xt = Ri(ht);
        if (xt) return xt;
      }
  let h = [];
  try {
    h = typeof ((T = pn) == null ? void 0 : T.getNodeImageUrls) == "function" ? pn.getNodeImageUrls(f) || [] : [];
  } catch {
    h = [];
  }
  if (Array.isArray(h) && h.length > 0)
    for (const V of h) {
      const ht = Ri(V);
      if (ht) return ht;
    }
  if (f) {
    const V = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const ht of V) {
      const xt = Ri(ht);
      if (xt) return xt;
    }
  }
  const S = (_t = f == null ? void 0 : f.widgets) == null ? void 0 : _t.find((V) => String((V == null ? void 0 : V.name) || "").toLowerCase() === "image"), _ = String((S == null ? void 0 : S.value) || "").trim();
  return _ ? Ke.apiURL(`/view?filename=${encodeURIComponent(_)}&type=input&subfolder=`) : "";
}
function Gu(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function Ku(t, e, n, r, a, s) {
  var h, S, _;
  if (e.clearRect(0, 0, n, r), e.fillStyle = "#070707", e.fillRect(0, 0, n, r), !s || !s.complete || !(s.naturalWidth || s.width) || n <= 1 || r <= 1) {
    Gu(e, n, r);
    return;
  }
  const u = hy(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * po * 0.5), p = Number(((_ = (S = (h = t == null ? void 0 : t.widgets) == null ? void 0 : h.find) == null ? void 0 : S.call(h, (I) => (I == null ? void 0 : I.name) === "coverage")) == null ? void 0 : _.value) || 360) === 180 ? 180 : 360;
  t.__panoStandaloneCore || (t.__panoStandaloneCore = Xi());
  const y = Eo({
    stateRevision: [
      "standalone_preview_scene",
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0),
      p
    ].join("|"),
    backgroundSource: s,
    backgroundRevision: [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|"),
    coverageDeg: p,
    scene: To(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!t.__panoStandaloneCore.syncState(y) && (() => {
    const I = t.__panoStandaloneCore.renderToTarget(
      "preview_node",
      mm(a, p),
      { width: n, height: r, dpr: window.devicePixelRatio || 1 }
    );
    return I ? (e.drawImage(I, 0, 0, n, r), !0) : !1;
  })() || (fo(t, e, { x: 0, y: 0, w: n, h: r }, u, f, s, oo), Gu(e, n, r));
}
function Wu(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class my {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Do({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: je(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: W(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: W(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
        `min-height:${Aa}px`,
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
          return Aa;
        },
        getHeight() {
          return Aa;
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
            minHeight: Math.max(Aa, Number(s.minHeight || 0)),
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
      return Wu(a.x, a.y, s) ? (e.legacyDragPointer = !0, e.controller.startDrag(a.x - s.x, a.y - s.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var y, b, h, S, _, I;
      const s = Wa(this, n, r, a), u = e.getLegacyPreviewRect();
      if (!s || !Wu(s.x, s.y, u))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof r == "number" ? r : 0));
      Number(((y = e.view) == null ? void 0 : y.fov) || 100);
      const p = e.controller.applyWheel(Math.sign(f));
      return Number(((b = e.view) == null ? void 0 : b.fov) || 100), p && ((h = this.setDirtyCanvas) == null || h.call(this, !0, !1)), (S = n == null ? void 0 : n.preventDefault) == null || S.call(n), (_ = n == null ? void 0 : n.stopPropagation) == null || _.call(n), (I = n == null ? void 0 : n.stopImmediatePropagation) == null || I.call(n), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, a, s, u;
    const e = Math.max(80, Number(((a = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : a[0]) || 0) - Ms * 2), n = Math.max(60, Number(((u = (s = this.node) == null ? void 0 : s.size) == null ? void 0 : u[1]) || 0) - zu - Ms);
    return { x: Ms, y: zu, w: e, h: n };
  }
  drawLegacy(e) {
    var r, a;
    if (!e || (a = (r = this.node) == null ? void 0 : r.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (e.save(), e.translate(n.x, n.y), Ku(this.node, e, n.w, n.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, n.w, n.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), e.restore());
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
    this.canvas && this.ctx ? (Ku(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (s = (a = this.node).setDirtyCanvas) == null || s.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var n, r, a, s, u, f, p, y, b, h, S;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || a.call(r), this.resizeObserver = null;
    try {
      (u = (s = this.root) == null ? void 0 : s.remove) == null || u.call(s);
    } catch {
    }
    if (Array.isArray((f = this.node) == null ? void 0 : f.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((_) => _ !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const e = ((b = (y = (p = this.node) == null ? void 0 : p.widgets) == null ? void 0 : y.find) == null ? void 0 : b.call(y, (_) => (_ == null ? void 0 : _.name) === "coverage")) || null;
    e && (e.callback = this.orig.coverageWidgetCallback), (S = (h = this.node.__panoStandaloneCore) == null ? void 0 : h.dispose) == null || S.call(h), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
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
function jd(t) {
  return !!(t != null && t.prototype);
}
function Zs(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function by(t, e = {}) {
  jd(t) || yy(t, {
    ...e,
    onOpen: Zs(t, e.onOpen)
  });
}
function _y(t, e = {}) {
  if (!jd(t)) {
    Fu(t, {
      ...e,
      onOpen: Zs(t, e.onOpen)
    });
    return;
  }
  vy(t, "cutout_preview", (n) => {
    Fu(n, {
      ...e,
      onOpen: Zs(n, e.onOpen)
    });
  });
}
const Qe = {
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
}, jn = "pen";
function Yu(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function xy(t = 80, e = null, n = 8) {
  const r = [];
  let a = -1;
  const s = Math.max(1, Number(t || 80)), u = Math.max(1, Number(n || 8));
  function f(y) {
    if (r.splice(0, r.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((h) => {
      r.push(String(h || ""));
    }), !r.length)) return;
    const b = Number(y.index);
    Number.isInteger(b) ? b === -1 ? a = -1 : a = Math.max(0, Math.min(r.length - 1, b)) : a = r.length - 1;
  }
  function p(y) {
    r[a] !== y && (r.splice(a + 1), r.push(y), r.length > s && r.shift(), a = r.length - 1);
  }
  return f(e), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(y) {
      p(String(y || ""));
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
      const y = r.length, b = Math.max(0, y - u), h = a >= 0 ? Math.max(0, Math.min(a, b)) : b, S = r.slice(h, h + u), _ = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - h));
      return {
        version: 1,
        entries: S,
        index: _
      };
    },
    hydrate: f
  };
}
function Zt(t, e = null) {
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
function ky(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function My(t, e) {
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
function Ia(t, e, n = 1) {
  if (!Array.isArray(t)) return null;
  const r = [];
  for (const a of t) {
    const s = My(a, e);
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
    const p = Ia(t.points, e, 3);
    return p ? { geometryKind: a, points: p } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const s = Ia(t.points, e, 1);
  if (!s) return null;
  const u = Ia(t.rawPoints, e, 1), f = Ia(t.processedPoints, e, 1);
  return {
    geometryKind: a,
    points: s,
    rawPoints: u || s.map((p) => ({ ...p })),
    processedPoints: f || s.map((p) => ({ ...p }))
  };
}
function Py(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = ky(t.targetSpace);
  if (!n) return null;
  const r = String(t.toolKind || "").trim(), a = Ny(t.geometry, n, r, e === "paint");
  if (!a) return null;
  const s = Zt(t.size, null), u = Zt(t.opacity, null);
  if (s == null || u == null) return null;
  const f = String(t.id || "").trim(), p = String(t.actionGroupId || "").trim();
  if (!f || !p) return null;
  const y = Zt(t.radiusValue, null), b = String(t.radiusModel || "").trim() || null;
  let h = null;
  if (e === "paint") {
    const S = t.color;
    if (!S || typeof S != "object") return null;
    h = {
      r: Math.max(0, Math.min(1, Zt(S.r, 0))),
      g: Math.max(0, Math.min(1, Zt(S.g, 0))),
      b: Math.max(0, Math.min(1, Zt(S.b, 0))),
      a: Math.max(0, Math.min(1, Zt(S.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: p,
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
    color: h,
    radiusModel: b,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function qu(t, e) {
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
  const e = Zt(t.u0, null), n = Zt(t.v0, null), r = Zt(t.u1, null), a = Zt(t.v1, null);
  if (e == null || n == null || r == null || a == null) return null;
  const s = (f) => Math.max(0, Math.min(1, f)), u = { u0: s(e), v0: s(n), u1: s(r), v1: s(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function Ay(t) {
  const e = t || {};
  return {
    du: Zt(e.du, 0) ?? 0,
    dv: Zt(e.dv, 0) ?? 0,
    rot_deg: Zt(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Zt(e.scale, 1) ?? 1)
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
    z_index: Math.max(0, Zt(t.z_index ?? t.zIndex, e) ?? e),
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
    paint: qu(t.paint, "paint"),
    mask: qu(t.mask, "mask"),
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
  hsv01ToRgb: u,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: p
}) {
  var C, E;
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
    historyEntries: Array.from({ length: 8 }, (j, st) => ({ index: st, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: t.paintTool, mask: t.maskTool }
  };
  if (!y) return b;
  const h = ((C = e.find((j) => a(t.paintColor, j.color))) == null ? void 0 : C.id) || "", S = !h, _ = s(t.customPaintColor), I = Math.round(Math.max(0, Math.min(1, Number(((E = t.customPaintColor) == null ? void 0 : E.a) ?? 1))) * 100), L = f(t.primaryTool === "paint" ? t.paintTool : t.maskTool), O = t.brushSizes[L] ?? 10, R = p(), P = Array.from({ length: 8 }, (j, st) => t.customPaintHistory[st] || null);
  return {
    ...b,
    colorEnabled: t.paintTool !== "eraser",
    activeSwatchId: h,
    customColorActive: S,
    customColorCss: r(t.customPaintColor, 1),
    pickerHueColor: r({ ...u(_.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, _.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, _.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, _.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, _.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, _.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, _.h)) * 100}%`,
    alphaValue: I,
    alphaText: `${I}%`,
    historyEntries: P.map((j, st) => ({
      index: st,
      color: j ? { cssColor: r(j, 1) } : null
    })),
    sizeValue: O,
    sizeText: String(O),
    sizeFill: `${Math.max(0, Math.min(100, (O - 1) / 119 * 100))}%`,
    sizeDisabled: R,
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
function Ry({
  coverage: t,
  readOnly: e,
  selectionPicker: n,
  enabled: r,
  selectedKind: a,
  selectedItems: s,
  params: u,
  notes: f,
  visibilityRows: p,
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
    params: u,
    notes: f,
    paramsDisabled: !r,
    visibilityRows: p,
    uiSettings: e ? null : y,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function Oy({
  type: t,
  selected: e,
  selectedItems: n,
  selectedKind: r,
  geom: a,
  allLocked: s,
  selectedLocked: u,
  activeAspect: f,
  cutoutAspectOpen: p,
  isExternalSticker: y,
  isStickerHidden: b,
  canRestoreSelectedToInitial: h,
  iconSet: S
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let _ = [];
  if (n.length > 1)
    _ = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: s ? "Unlock" : "Lock", tip: s ? "Unlock" : "Lock", icon: s ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  else if (r === "stroke")
    _ = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  else if (t === "stickers" || r === "image") {
    if (_ = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back }
    ], y(e) || (_.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: S.duplicate }), _.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: S.replace_image })), y(e)) {
      const C = h(), E = b(e);
      _.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: C ? "Back to initial position" : "Already at initial position",
        icon: S.back_initial,
        disabled: !C
      }), _.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: E ? "Show" : "Hide",
        tip: E ? "Show input image" : "Hide input image",
        icon: E ? S.eye : S.eye_dashed
      });
    }
    _.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed }), y(e) || _.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete });
  } else
    _ = [
      {
        key: "aspect",
        kind: "aspect",
        icon: S.aspect,
        open: !!p,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((C) => ({ value: C, label: C, active: f === C }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Rotate 90°", tip: "Rotate 90°", icon: S.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  const I = a.corners.map((C) => C.x), L = a.corners.map((C) => C.y), O = Math.min(...I), R = Math.max(...I), P = Math.max(...L);
  return {
    visible: !0,
    left: (O + R) * 0.5,
    top: P + 18,
    items: _,
    anchor: { minX: O, maxX: R, maxY: P }
  };
}
const Kt = {
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
    const e = t, n = qr(() => {
      const r = { ...e.attrs };
      return e.tag === "button" && r.type == null && (r.type = e.type), e.label && (r["aria-label"] = e.label), e.tip && (r["data-tip"] = e.tip), e.pressed != null && (r["aria-pressed"] = e.pressed), r;
    });
    return (r, a) => (At(), ei(c0(t.tag), ld({
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
    return (e, n) => (At(), Tt("div", Fy, [
      ot("span", Vy, Se(t.fovValue), 1),
      (At(!0), Tt(ee, null, Ge(t.buttons, (r) => (At(), ei(go, {
        key: r.action,
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { "data-action": r.action, disabled: r.disabled === !0 }
      }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, zy = ["aria-label"], $y = { class: "pano-canvas-confirm-title" }, jy = { class: "pano-canvas-confirm-text" }, Uy = { class: "pano-canvas-confirm-actions" }, By = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Gy = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(t) {
    const e = t, n = /* @__PURE__ */ Fs(null), r = /* @__PURE__ */ Fs(null);
    let a = null;
    function s() {
      const h = r.value;
      return h ? Array.from(h.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function u(h) {
      const S = r.value;
      if (!S) return;
      const _ = S.querySelector(`[data-action='${h}']`);
      _ instanceof HTMLButtonElement && _.click();
    }
    function f() {
      var L;
      const h = r.value;
      if (!h) return;
      const S = h.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const I = s()[0] || h;
      (L = I == null ? void 0 : I.focus) == null || L.call(I);
    }
    function p() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function y(h) {
      var R;
      if (h.defaultPrevented) return;
      if (h.key === "Escape") {
        h.preventDefault(), h.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (h.key !== "Tab") return;
      const S = s(), _ = r.value;
      if (!S.length) {
        h.preventDefault(), (R = _ == null ? void 0 : _.focus) == null || R.call(_);
        return;
      }
      const I = S[0], L = S[S.length - 1], O = document.activeElement;
      if (h.shiftKey) {
        (O === I || O === _ || !(_ != null && _.contains(O))) && (h.preventDefault(), L.focus());
        return;
      }
      (O === L || !(_ != null && _.contains(O))) && (h.preventDefault(), I.focus());
    }
    function b(h) {
      h.target === n.value && u("confirm-cancel");
    }
    return Ai(() => e.model.visible, (h, S) => {
      if (h) {
        a = document.activeElement, hc(() => {
          f();
        });
        return;
      }
      S && p();
    }), mc(() => {
      p();
    }), (h, S) => t.model.visible === !0 ? (At(), Tt("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: gd(b, ["self"])
    }, [
      ot("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": t.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: y
      }, [
        ot("div", $y, Se(t.model.title), 1),
        ot("div", jy, Se(t.model.text), 1),
        ot("div", Uy, [
          S[0] || (S[0] = ot("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ot("button", By, Se(t.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, zy)
    ], 512)) : dn("", !0);
  }
}, Ky = ["data-paint-pane"], Wy = ["hidden"], Yy = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], qy = ["aria-pressed", "disabled"], Xy = ["hidden"], Zy = { class: "pano-paint-color-pop-head" }, Jy = { class: "pano-paint-color-field" }, Qy = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, tv = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, ev = { class: "pano-paint-color-field" }, nv = { class: "pano-paint-alpha-wrap" }, rv = ["value"], iv = { "data-paint-alpha-value": "" }, av = ["hidden"], ov = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, sv = ["data-paint-history-index", "aria-label", "disabled"], cv = ["data-paint-footer"], lv = ["data-paint-group"], uv = ["hidden"], fv = ["value", "disabled"], dv = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, hv = ["hidden"], pv = {
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
    return (r, a) => (At(), Tt("div", {
      class: be(["pano-paint-dock", { "is-hidden": t.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (At(!0), Tt(ee, null, Ge(t.panes, (s) => {
        var u;
        return At(), Tt("div", {
          key: s.key,
          class: be(["pano-paint-pane", { "is-active": t.state.activePane === s.key }]),
          "data-paint-pane": s.key
        }, [
          s.showColorFloat ? (At(), Tt("div", {
            key: 0,
            class: be(["pano-paint-color-float", { disabled: t.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: t.state.showColorRow === !1
          }, [
            (At(!0), Tt(ee, null, Ge(t.paintSwatches, (f) => (At(), Tt("button", {
              key: f.id,
              class: be(["pano-paint-color-dot", { active: t.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: Ue(e(f)),
              "aria-pressed": t.state.activeSwatchId === f.id ? "true" : "false",
              disabled: t.state.colorEnabled === !1
            }, null, 14, Yy))), 128)),
            ot("button", {
              class: be(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: t.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": t.state.customColorActive === !0 ? "true" : "false",
              disabled: t.state.colorEnabled === !1,
              style: Ue({ "--custom-color": String(t.state.customColorCss || "") })
            }, null, 14, qy),
            ot("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: t.state.colorPopOpen !== !0,
              style: Ue({
                "--picker-hue-color": String(t.state.pickerHueColor || ""),
                "--picker-sat": String(t.state.pickerSat || "0%"),
                "--picker-val": String(t.state.pickerVal || "0%"),
                "--picker-hue": String(t.state.pickerHue || "0%")
              })
            }, [
              ot("div", Zy, [
                ot("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Ue({ background: String(t.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ot("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ot("div", Jy, [
                ot("div", Qy, [
                  ot("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Ue({ left: String(t.state.pickerSvLeft || "0%"), top: String(t.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ot("div", tv, [
                  ot("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Ue({ left: String(t.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ot("label", ev, [
                a[1] || (a[1] = ot("span", null, "Opacity", -1)),
                ot("div", nv, [
                  ot("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: t.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, rv),
                  ot("span", iv, Se(t.state.alphaText || "100%"), 1)
                ])
              ]),
              ot("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: t.state.historyVisible === !1
              }, [
                ot("div", ov, [
                  (At(!0), Tt(ee, null, Ge(t.state.historyEntries || [], (f) => (At(), Tt("button", {
                    key: f.index,
                    class: be(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: Ue(n(f.color))
                  }, null, 14, sv))), 128))
                ])
              ], 8, av)
            ], 12, Xy)
          ], 10, Wy)) : dn("", !0),
          ot("div", {
            class: "pano-paint-footer",
            "data-paint-footer": s.footer
          }, [
            ot("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": s.group
            }, [
              (At(!0), Tt(ee, null, Ge(s.tools, (f) => {
                var p;
                return At(), ei(go, {
                  key: `${s.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((p = t.state.activeTools) == null ? void 0 : p[s.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, lv),
            ot("div", {
              class: be(["pano-paint-size-row", { disabled: t.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: t.state.showSizeRow === !1
            }, [
              ot("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: t.state.sizeValue ?? 10,
                disabled: t.state.sizeDisabled === !0,
                style: Ue({ "--v": String(t.state.sizeFill || "0%") })
              }, null, 12, fv),
              ot("span", dv, Se(t.state.sizeText || "10"), 1)
            ], 10, uv),
            ot("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = t.state.clearVisible) == null ? void 0 : u[s.key]) ?? !s.clearHidden)
            }, [
              ke(go, {
                icon: br(Kt).clear,
                label: s.clearLabel,
                tip: s.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": s.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, hv)
          ], 8, cv)
        ], 10, Ky);
      }), 128))
    ], 2));
  }
}, gv = {
  key: 0,
  class: "pano-cutout-menu"
}, mv = ["innerHTML"], yv = ["data-aspect"], vv = ["data-action", "aria-label", "data-tip", "disabled", "innerHTML"], bv = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(t) {
    return (e, n) => (At(), Tt("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Ue({ display: t.model.visible === !0 ? "flex" : "none", left: `${t.model.left || 0}px`, top: `${t.model.top || 0}px` })
    }, [
      (At(!0), Tt(ee, null, Ge(t.model.items || [], (r) => (At(), Tt(ee, {
        key: r.key
      }, [
        r.kind === "aspect" ? (At(), Tt("div", gv, [
          ot("button", {
            class: "pano-btn pano-btn-icon",
            type: "button",
            "data-action": "aspect",
            "aria-label": "Aspect Ratio",
            "data-tip": "Aspect ratio",
            innerHTML: r.icon
          }, null, 8, mv),
          ot("div", {
            class: be(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (At(!0), Tt(ee, null, Ge(r.choices || [], (a) => (At(), Tt("button", {
              key: a.value,
              class: be(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, Se(a.label), 11, yv))), 128))
          ], 2)
        ])) : (At(), Tt("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0,
          innerHTML: r.icon
        }, null, 8, vv))
      ], 64))), 128))
    ], 4));
  }
}, _v = {
  class: "pano-side",
  "data-side": ""
}, xv = { class: "pano-side-head" }, wv = ["innerHTML"], Sv = {
  key: 0,
  class: "pano-side-scroll"
}, kv = { class: "pano-inspector" }, Mv = { class: "pano-ui-row pano-coverage-row" }, Nv = ["data-selected"], Pv = ["aria-pressed", "disabled"], Cv = ["aria-pressed", "disabled"], Av = {
  key: 0,
  class: "pano-section-title"
}, Iv = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Ev = {
  class: "pano-picker",
  "data-picker": "selection"
}, Dv = ["disabled"], Tv = ["innerHTML"], Lv = ["hidden"], Rv = ["data-selection-id", "innerHTML"], Ov = {
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
  key: 1,
  class: "pano-side-footer"
}, db = ["data-action"], hb = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(t) {
    const e = t;
    function n(u) {
      return String(u || "").replace(/[&<>"']/g, (f) => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      })[f]);
    }
    const r = qr(() => `<span class="pano-side-title-icon" aria-hidden="true">${Kt.globe}</span><span>${n(e.nodeTitle)}</span>`);
    function a(u) {
      return { "--v": `${Number((u == null ? void 0 : u.fillPct) || 0)}%` };
    }
    function s(u, f) {
      return (f == null ? void 0 : f.paramsDisabled) === !0 || (u == null ? void 0 : u.enabled) === !1;
    }
    return (u, f) => {
      var p, y, b, h, S;
      return At(), Tt("div", _v, [
        ot("div", xv, [
          ot("div", {
            class: "pano-side-title",
            innerHTML: r.value
          }, null, 8, wv),
          f[0] || (f[0] = ot("div", { class: "pano-side-actions" }, null, -1))
        ]),
        f[13] || (f[13] = ot("div", { class: "pano-divider" }, null, -1)),
        t.model ? (At(), Tt("div", Sv, [
          ot("div", kv, [
            f[12] || (f[12] = ot("div", { class: "pano-section-title" }, [
              ot("span", null, "Scene")
            ], -1)),
            ot("div", Mv, [
              f[1] || (f[1] = ot("label", null, "Coverage", -1)),
              ot("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((p = t.model.coverage) == null ? void 0 : p.value) === 180 ? "1" : "0"
              }, [
                ot("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((y = t.model.coverage) == null ? void 0 : y.value) === 360 ? "true" : "false",
                  disabled: ((b = t.model.coverage) == null ? void 0 : b.disabled) === !0
                }, "360", 8, Pv),
                ot("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((h = t.model.coverage) == null ? void 0 : h.value) === 180 ? "true" : "false",
                  disabled: ((S = t.model.coverage) == null ? void 0 : S.disabled) === !0
                }, "180", 8, Cv)
              ], 8, Nv)
            ]),
            t.model.transformTitle !== !1 ? (At(), Tt("div", Av, [...f[2] || (f[2] = [
              ot("span", null, "Transform", -1)
            ])])) : dn("", !0),
            t.model.selectionPicker ? (At(), Tt("div", Iv, [
              ot("label", null, Se(t.model.selectionPicker.label), 1),
              ot("div", Ev, [
                ot("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: t.model.selectionPicker.disabled === !0
                }, [
                  ot("span", {
                    class: "pano-picker-label",
                    innerHTML: t.model.selectionPicker.currentLabelHtml
                  }, null, 8, Tv),
                  f[3] || (f[3] = ot("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Dv),
                ot("div", {
                  class: "pano-picker-pop",
                  hidden: t.model.selectionPicker.open !== !0
                }, [
                  (At(!0), Tt(ee, null, Ge(t.model.selectionPicker.items || [], (_) => (At(), Tt("button", {
                    key: _.id,
                    type: "button",
                    class: be(["pano-picker-item", { active: _.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": _.id,
                    innerHTML: _.labelHtml
                  }, null, 10, Rv))), 128))
                ], 8, Lv)
              ])
            ])) : dn("", !0),
            t.model.copyStateButton ? (At(), Tt("div", Ov, [
              ot("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: t.model.copyStateButton.disabled === !0
              }, [
                ot("span", {
                  innerHTML: br(Kt).copy
                }, null, 8, Vv),
                ot("span", null, Se(t.model.copyStateButton.label), 1)
              ], 8, Fv)
            ])) : dn("", !0),
            ot("div", {
              class: be(["pano-params", { disabled: t.model.paramsDisabled === !0 }])
            }, [
              (t.model.notes || []).length ? (At(!0), Tt(ee, { key: 0 }, Ge(t.model.notes, (_) => (At(), Tt("div", {
                key: _,
                class: "pano-param-note"
              }, Se(_), 1))), 128)) : (At(!0), Tt(ee, { key: 1 }, Ge(t.model.params || [], (_) => (At(), Tt("div", {
                key: _.key,
                class: "pano-field",
                "data-key": _.key
              }, [
                ot("label", null, Se(_.label), 1),
                ot("input", {
                  type: "range",
                  min: _.min,
                  max: _.max,
                  step: _.step,
                  value: _.value,
                  disabled: s(_, t.model),
                  style: Ue(a(_)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": _.key
                }, null, 12, zv),
                ot("input", {
                  type: "number",
                  min: _.min,
                  max: _.max,
                  step: _.step,
                  value: _.displayValue,
                  disabled: s(_, t.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": _.key
                }, null, 8, $v)
              ], 8, Hv))), 128))
            ], 2),
            (t.model.visibilityRows || []).length ? (At(), Tt(ee, { key: 3 }, [
              f[5] || (f[5] = ot("div", { class: "pano-divider" }, null, -1)),
              ot("div", jv, [
                f[4] || (f[4] = ot("div", { class: "pano-section-title" }, [
                  ot("span", null, "Layers")
                ], -1)),
                ot("div", Uv, [
                  (At(!0), Tt(ee, null, Ge(t.model.visibilityRows, (_) => (At(), Tt("div", {
                    key: _.key,
                    class: be(["pano-visibility-row", { "is-hidden": _.visible === !1, "is-disabled": _.enabled === !1 }]),
                    "data-visibility-row": _.key
                  }, [
                    ot("span", Gv, [
                      ot("span", {
                        class: "pano-visibility-name-icon",
                        "aria-hidden": "true",
                        innerHTML: _.icon
                      }, null, 8, Kv),
                      ot("span", null, Se(_.label), 1)
                    ]),
                    ot("button", {
                      class: be(["pano-visibility-toggle", { active: _.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": _.key,
                      "aria-label": _.ariaLabel,
                      "aria-pressed": _.visible === !0 ? "true" : "false",
                      "data-tip": _.tip,
                      disabled: _.enabled === !1,
                      innerHTML: _.visible === !0 ? br(Kt).eye : br(Kt).eye_dashed
                    }, null, 10, Wv)
                  ], 10, Bv))), 128))
                ])
              ])
            ], 64)) : dn("", !0),
            t.model.uiSettings ? (At(), Tt("details", {
              key: 4,
              class: "pano-ui-settings",
              open: t.model.uiSettings.open === !0
            }, [
              ot("summary", null, [
                f[6] || (f[6] = ot("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ot("span", {
                  class: "pano-ui-caret",
                  "aria-hidden": "true",
                  innerHTML: br(Kt).chevron
                }, null, 8, qv)
              ]),
              ot("div", Xv, [
                ot("div", Zv, [
                  f[7] || (f[7] = ot("label", null, "Drag X", -1)),
                  ot("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": t.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ot("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": t.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, Qv),
                    ot("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": t.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, tb)
                  ], 8, Jv)
                ]),
                ot("div", eb, [
                  f[8] || (f[8] = ot("label", null, "Drag Y", -1)),
                  ot("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": t.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ot("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": t.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, rb),
                    ot("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": t.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, ib)
                  ], 8, nb)
                ]),
                ot("div", ab, [
                  f[10] || (f[10] = ot("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  ot("div", ob, [
                    ot("button", sb, [
                      ot("span", cb, Se(t.model.uiSettings.qualityLabel), 1),
                      f[9] || (f[9] = ot("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    ot("div", {
                      class: "pano-picker-pop",
                      hidden: t.model.uiSettings.qualityOpen !== !0
                    }, [
                      (At(!0), Tt(ee, null, Ge(t.model.uiSettings.qualityOptions || [], (_) => (At(), Tt("button", {
                        key: _.value,
                        type: "button",
                        class: be(["pano-picker-item", { active: _.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": _.value
                      }, Se(_.label), 11, ub))), 128))
                    ], 8, lb)
                  ])
                ]),
                f[11] || (f[11] = ot("div", { class: "pano-ui-row" }, [
                  ot("span"),
                  ot("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, Yv)) : dn("", !0)
          ])
        ])) : dn("", !0),
        (t.model.footerButtons || []).length ? (At(), Tt("div", fb, [
          (At(!0), Tt(ee, null, Ge(t.model.footerButtons, (_) => (At(), Tt("button", {
            key: _.action,
            class: be(["pano-btn", { "pano-btn-primary": _.primary === !0 }]),
            type: "button",
            "data-action": _.action
          }, Se(_.label), 11, db))), 128))
        ])) : dn("", !0)
      ]);
    };
  }
}, pb = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(t) {
    return (e, n) => (At(), Tt("div", {
      class: be(["pano-tooltip", {
        show: t.model.visible === !0,
        "pano-tooltip-footer": t.model.variant === "footer",
        "pano-tooltip-tool-rail": t.model.variant === "tool-rail"
      }]),
      "data-tooltip": "",
      style: Ue({ left: `${t.model.left || 0}px`, top: `${t.model.top || 0}px` })
    }, Se(t.model.text || ""), 7));
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
    return (e, n) => (At(), Tt("div", gb, [
      (At(!0), Tt(ee, null, Ge(t.buttons, (r) => Lf((At(), ei(go, {
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
        [pd, r.visible !== !1]
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
      return At(), Tt("div", yb, [
        ot("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = t.buttons.find((a) => a.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(t.buttons.length)
        }, [
          (At(!0), Tt(ee, null, Ge(t.buttons, (a) => Lf((At(), Tt("button", {
            key: a.key,
            class: be(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            ot("span", {
              innerHTML: a.icon
            }, null, 8, _b),
            ot("span", xb, Se(a.label), 1)
          ], 10, bb)), [
            [pd, a.visible !== !1]
          ])), 128))
        ], 8, vb)
      ]);
    };
  }
};
function Ud(t = "stickers") {
  const e = String(t || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Kt.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Kt.unwrap, pressed: "false", extraClass: "" },
      ...e ? [{ key: "frame", label: "Frame", icon: Kt.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Kt.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Kt.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Kt.circle_dashed_tool, pressed: "false" },
      ...e ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Kt.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Kt.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Kt.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Kt.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Kt.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Kt.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Kt.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Kt.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Kt.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Kt.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Kt.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Kt.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Kt.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Kt.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Kt.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Kt.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Kt.lasso_tool }
        ]
      }
    ]
  };
}
const Sb = ["aria-label"], kb = { class: "pano-stage-wrap" }, Mb = ["aria-label", "data-tip", "innerHTML"], Nb = {
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
    let a = "", s = !1, u = null;
    const f = /* @__PURE__ */ Fs(null), p = qr(() => n.readOnly === !0), y = qr(() => n.shellPreset || Ud(n.type)), b = qr(() => {
      var C;
      const P = Array.isArray((C = y.value) == null ? void 0 : C.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return p.value && P.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Kt.fullscreen
      }), P;
    });
    function h() {
      const P = f.value;
      return P ? Array.from(P.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((C) => C instanceof HTMLElement ? !C.hidden && C.tabIndex >= 0 && C.offsetParent !== null : !1) : [];
    }
    function S() {
      var E;
      const C = h()[0] || f.value;
      (E = C == null ? void 0 : C.focus) == null || E.call(C);
    }
    function _() {
      var P;
      u != null && u.isConnected && ((P = u.focus) == null || P.call(u)), u = null;
    }
    function I(P) {
      var C, E, j, st;
      if (!P.defaultPrevented) {
        if (P.key === "Tab") {
          const dt = h();
          if (!dt.length) {
            P.preventDefault(), (E = (C = f.value) == null ? void 0 : C.focus) == null || E.call(C);
            return;
          }
          const T = dt[0], _t = dt[dt.length - 1], V = document.activeElement;
          if (P.shiftKey) {
            (V === T || V === f.value || !((j = f.value) != null && j.contains(V))) && (P.preventDefault(), _t.focus());
            return;
          }
          (V === _t || !((st = f.value) != null && st.contains(V))) && (P.preventDefault(), T.focus());
          return;
        }
        P.key === "Escape" && r("close");
      }
    }
    function L() {
      s || (a = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function O() {
      s && (document.body.style.overflow = a, s = !1);
    }
    function R(P) {
      document.removeEventListener("keydown", I), P ? (u || (u = document.activeElement), L(), document.addEventListener("keydown", I), hc(() => {
        S();
      })) : (O(), _());
    }
    return zf(() => {
      R(n.open);
    }), mc(() => {
      O(), document.removeEventListener("keydown", I), _();
    }), Ai(() => n.open, (P) => {
      R(P);
    }), (P, C) => {
      var E, j, st, dt;
      return t.open ? (At(), Tt("div", {
        key: 0,
        class: "pano-modal-overlay",
        onClick: C[0] || (C[0] = gd((T) => r("close"), ["self"]))
      }, [
        ot("section", {
          ref_key: "modalRef",
          ref: f,
          class: "pano-modal",
          role: "dialog",
          "aria-modal": "true",
          "aria-label": t.nodeTitle,
          tabindex: "-1"
        }, [
          ot("div", kb, [
            C[1] || (C[1] = z0('<canvas class="pano-stage pano-stage-bg" data-stage-background width="1600" height="800"></canvas><canvas class="pano-stage pano-stage-overlay" data-stage-overlay width="1600" height="800"></canvas><div class="pano-stage-loading" aria-hidden="true"></div><div class="pano-stage-drop-hint" aria-hidden="true"><div class="pano-stage-drop-hint-text">Drag and drop image here</div></div>', 4)),
            p.value ? dn("", !0) : (At(), Tt(ee, { key: 0 }, [
              ke(mb, {
                buttons: t.uiState.toolButtons || y.value.toolButtons || []
              }, null, 8, ["buttons"]),
              ke(pv, {
                "paint-swatches": t.paintSwatches,
                panes: y.value.paintPanes || [],
                state: t.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            ke(wb, {
              buttons: t.uiState.viewButtons || y.value.viewButtons || []
            }, null, 8, ["buttons"]),
            ke(Hy, {
              buttons: t.uiState.floatingButtons || b.value,
              "fov-value": t.uiState.fovValue || "100°"
            }, null, 8, ["buttons", "fov-value"]),
            ke(bv, {
              model: t.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            ot("button", {
              class: "pano-btn pano-btn-icon pano-output-preview-toggle",
              "data-action": "toggle-output-preview-size",
              "aria-label": ((E = t.uiState.outputPreviewToggle) == null ? void 0 : E.label) || "Expand Preview",
              "data-tip": ((j = t.uiState.outputPreviewToggle) == null ? void 0 : j.tip) || "Expand preview",
              style: Ue({ display: (st = t.uiState.outputPreviewToggle) != null && st.visible ? "" : "none" }),
              innerHTML: ((dt = t.uiState.outputPreviewToggle) == null ? void 0 : dt.icon) || br(Kt).fullscreen
            }, null, 12, Mb),
            ke(pb, {
              model: t.uiState.tooltip || {}
            }, null, 8, ["model"]),
            ke(Gy, {
              model: t.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          t.hideSidebar ? dn("", !0) : (At(), ei(hb, {
            key: 0,
            "node-title": t.nodeTitle,
            model: t.uiState.sidePanel || {}
          }, null, 8, ["node-title", "model"]))
        ], 8, Sb)
      ])) : dn("", !0);
    };
  }
}, mo = "state_json", hr = "sticker_image_1", Ns = "external_image", Ps = "pano_sticker_input_images", Ya = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Pe = Math.PI / 180, yr = 180 / Math.PI, yo = 24, Pb = 4, Cb = 4, ki = /* @__PURE__ */ new Map(), Js = /* @__PURE__ */ new Map(), Mi = /* @__PURE__ */ new Map(), ze = {
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
function en(t) {
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
function Ln(t, e, n) {
  return { x: t, y: e, z: n };
}
function Ea(t, e) {
  return Ln(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Da(t, e) {
  return Ln(t.x * e, t.y * e, t.z * e);
}
function _n(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Ta(t, e) {
  return Ln(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function Vr(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Ln(t.x / e, t.y / e, t.z / e);
}
function Mn(t, e) {
  const n = t * Pe, r = e * Pe, a = Math.cos(r);
  return Ln(a * Math.sin(n), Math.sin(r), a * Math.cos(n));
}
function Xu(t) {
  return {
    yaw: je(Math.atan2(t.x, t.z) * yr),
    pitch: W(Math.asin(W(t.y, -1, 1)) * yr, -90, 90)
  };
}
function ir(t, e) {
  let n = !1;
  for (let r = 0, a = e.length - 1; r < e.length; a = r++) {
    const s = e[r].x, u = e[r].y, f = e[a].x, p = e[a].y;
    u > t.y != p > t.y && t.x < (f - s) * (t.y - u) / (p - u || 1e-6) + s && (n = !n);
  }
  return n;
}
function mr(t, e) {
  const n = t.x - e.x, r = t.y - e.y;
  return n * n + r * r;
}
function Zu(t, e, n) {
  const r = Number(n.x || 0) - Number(e.x || 0), a = Number(n.y || 0) - Number(e.y || 0), s = Number(t.x || 0) - Number(e.x || 0), u = Number(t.y || 0) - Number(e.y || 0), f = r * r + a * a;
  if (f <= 1e-6) return mr(t, e);
  const p = W((s * r + u * a) / f, 0, 1), y = Number(e.x || 0) + r * p, b = Number(e.y || 0) + a * p, h = Number(t.x || 0) - y, S = Number(t.y || 0) - b;
  return h * h + S * S;
}
function Un(t, e, n) {
  return t + (e - t) * n;
}
function Nn(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(W(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(W(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${W(n, 0, 1)})`;
}
function Db(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let La = { fillStyle: "", url: "" };
function Tb(t, e, n) {
  if (La.url && La.fillStyle === String(t || ""))
    return La.url;
  const r = Db(`
<svg xmlns="http://www.w3.org/2000/svg" width="${yo}" height="${yo}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return La = { fillStyle: String(t || ""), url: r }, r;
}
function qa(t, e, n = 0.015) {
  return !t || !e ? !1 : Math.abs(Number(t.r ?? 0) - Number(e.r ?? 0)) <= n && Math.abs(Number(t.g ?? 0) - Number(e.g ?? 0)) <= n && Math.abs(Number(t.b ?? 0) - Number(e.b ?? 0)) <= n && Math.abs(Number(t.a ?? 1) - Number(e.a ?? 1)) <= n;
}
function on(t) {
  return {
    r: W(Number((t == null ? void 0 : t.r) ?? 0), 0, 1),
    g: W(Number((t == null ? void 0 : t.g) ?? 0), 0, 1),
    b: W(Number((t == null ? void 0 : t.b) ?? 0), 0, 1),
    a: W(Number((t == null ? void 0 : t.a) ?? 1), 0, 1)
  };
}
function De(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function Lb(t) {
  return Ya.some((e) => qa(t, e.color));
}
function Cs(t, e, n) {
  const r = (Number(t) % 1 + 1) % 1, a = W(Number(e), 0, 1), s = W(Number(n), 0, 1);
  if (a <= 1e-6) return { r: s, g: s, b: s };
  const u = Math.floor(r * 6), f = r * 6 - u, p = s * (1 - a), y = s * (1 - f * a), b = s * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: s, g: b, b: p };
    case 1:
      return { r: y, g: s, b: p };
    case 2:
      return { r: p, g: s, b };
    case 3:
      return { r: p, g: y, b: s };
    case 4:
      return { r: b, g: p, b: s };
    default:
      return { r: s, g: p, b: y };
  }
}
function As(t) {
  const e = W(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), n = W(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), r = W(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), a = Math.max(e, n, r), s = Math.min(e, n, r), u = a - s;
  let f = 0;
  u > 1e-6 && (a === e ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : a === n ? f = ((r - e) / u + 2) / 6 : f = ((e - n) / u + 4) / 6);
  const p = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: p, v: a };
}
function Rb(t) {
  const e = Number(t);
  return Number.isFinite(e) ? Number(e.toFixed(3)).toString() : "0";
}
function Ju(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : Number(e);
}
function Ob(t, e) {
  const n = Ju(t, 1), r = Ju(e, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const a = 1e3, s = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(r * a)), f = (h, S) => S ? f(S, h % S) : h, p = f(s, u) || 1, y = Math.max(1, Math.round(s / p)), b = Math.max(1, Math.round(u / p));
  return `${y}:${b}`;
}
function Qs(t) {
  const e = W(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * Pe, n = W(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * Pe;
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
function vr(t) {
  const e = Qs(t);
  return Fb(e) || Ob(e, 1);
}
function Vb(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = vr(e), e;
}
function _i(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : vr(t);
}
let Ra = null;
function Hb() {
  return Ra || (Ra = new Promise((t) => {
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
  }), Ra);
}
const Bd = "pano_suite.ui_settings.v1", Gd = "pano_suite.node_grid_visibility.v1";
let Ur = null, Pn = null, Oa = { text: null, parsed: null };
function Fi(t) {
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
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Bd)) || "").trim();
    if (!e) return Ur ? Fi(Ur) : null;
    const n = JSON.parse(e), r = Fi(n);
    return Ur = r, r;
  } catch {
    return Ur ? Fi(Ur) : null;
  }
}
function $b(t) {
  var n;
  const e = Fi(t);
  Ur = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Bd, JSON.stringify(e));
  } catch {
  }
  return e;
}
function Kd() {
  var t;
  if (Pn && typeof Pn == "object")
    return Pn;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Gd)) || "").trim();
    if (!e)
      return Pn = {}, Pn;
    const n = JSON.parse(e);
    return Pn = n && typeof n == "object" ? n : {}, Pn;
  } catch {
    return Pn = {}, Pn;
  }
}
function jb(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const a = Kd()[n];
  return typeof a == "boolean" ? a : !!e;
}
function Ub(t, e) {
  var a;
  const n = String(t ?? "").trim();
  if (!n) return;
  const r = Kd();
  r[n] = !!e, Pn = r;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Gd, JSON.stringify(r));
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
function Qu(t) {
  const { paintCount: e, maskCount: n } = Kb(t), r = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
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
function Hr(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function tf(t) {
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
    coverage: en(r),
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
  }, u = String(t || "").trim();
  if (!u) return s;
  try {
    let f = null;
    if (Oa.text === u ? f = Oa.parsed : (f = JSON.parse(u), Oa = { text: u, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return s;
    const p = {
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
    return a && (p.ui_settings = Fi({ ...p.ui_settings, ...a })), p.output_preset = ec(e, Number(p.output_preset || s.output_preset)), p.bg_color = String(n || p.bg_color || s.bg_color), p.coverage = en(r), delete p.editor_history, p;
  } catch {
    return Oa = { text: u, parsed: null }, s;
  }
}
function hn(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function Ac(t) {
  if (!t || t.__panoCoverageWidgetSyncInstalled) return;
  const e = hn(t, "coverage");
  if (!e) return;
  const n = typeof e.callback == "function" ? e.callback.bind(e) : null;
  e.callback = function(...r) {
    var s, u, f, p, y, b, h, S, _, I;
    const a = n ? n(...r) : void 0;
    return t.__panoStateCache = null, t.__panoLiveStateOverride = null, t.__panoWrappedErpCache = null, t.__panoPanoBackgroundCache = null, (u = (s = t.__panoPreviewNodeRuntime) == null ? void 0 : s.requestDraw) == null || u.call(s), (p = (f = t.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || p.call(f), (y = t.setDirtyCanvas) == null || y.call(t, !0, !0), (h = (b = t.graph) == null ? void 0 : b.setDirtyCanvas) == null || h.call(b, !0, !0), (I = (_ = (S = pn) == null ? void 0 : S.canvas) == null ? void 0 : _.setDirty) == null || I.call(_, !0, !0), a;
  }, t.__panoCoverageWidgetSyncInstalled = !0;
}
function qb(t) {
  const e = String(t ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(e) || /^#?[0-9a-fA-F]{3}$/.test(e);
}
function ef(t) {
  const e = String(t ?? "").trim();
  return e.startsWith("{") && e.endsWith("}");
}
function Xb(t) {
  var _, I, L, O, R;
  if (!t || t.__panoCoverageWidgetOrderMigrated) return;
  const e = hn(t, "coverage"), n = hn(t, "bg_color"), r = hn(t, mo), a = hn(t, "sticker_state");
  if (!e || !n || !r) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const s = String(e.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(s) && qb(s) && (ef(u) || u === ""))) {
    t.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (ef(u))
    try {
      const P = JSON.parse(u);
      y = String(en(P == null ? void 0 : P.coverage));
    } catch {
      y = "360";
    }
  const b = s, h = u, S = f;
  e.value = y, (_ = e.callback) == null || _.call(e, y), n.value = b, (I = n.callback) == null || I.call(n, b), r.value = h, (L = r.callback) == null || L.call(r, h), a && (a.value = S, (O = a.callback) == null || O.call(a, S)), (R = t.setDirtyCanvas) == null || R.call(t, !0, !0), t.__panoCoverageWidgetOrderMigrated = !0;
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
    var s, u;
    const a = String((r == null ? void 0 : r.name) || "");
    (a === e || a.trim() === e || a.toLowerCase().includes(String(e).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (s = r.inputEl) != null && s.style && (r.inputEl.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function tc(t, e, n) {
  var s, u;
  if (!t || typeof t.addWidget != "function") return null;
  let a = (Array.isArray(t.widgets) ? t.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(e));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (s = a.inputEl) != null && s.style && (a.inputEl.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = t == null ? void 0 : t.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), a) : (a = t.addWidget("button", e, null, n), a && (a.serialize = !1), a);
}
function Fa(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function ec(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(r);
  return Number.isFinite(a) ? Math.round(a) : e;
}
function Wd(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Qb(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Yd(t) {
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
      const u = typeof (t == null ? void 0 : t.getInputLink) == "function" ? t.getInputLink(e) : null, f = u ? (s = r.resolveSubgraphOutputLink) == null ? void 0 : s.call(r, Number(u.origin_slot ?? 0)) : null;
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
  return typeof ((a = Ke) == null ? void 0 : a.apiURL) == "function" ? Ke.apiURL(r) : r;
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
function qd(t) {
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
function Vi(t) {
  var r;
  const e = (r = pn) == null ? void 0 : r.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  return e instanceof Map ? e.get(t) || e.get(n) || e.get(Number(n)) || null : e[t] || e[n] || null;
}
function ti(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return ti(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return vo({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = ti(n);
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
    const a = ti(r);
    !a || n.has(a) || (n.add(a), e.push(a));
  }
  return e;
}
function o_(t, e, n, r = null) {
  var h;
  const a = Vi(t == null ? void 0 : t.id), s = Array.isArray((h = a == null ? void 0 : a.ui) == null ? void 0 : h[e]) ? a.ui[e] : Array.isArray(a == null ? void 0 : a[e]) ? a[e] : [], u = Array.isArray(s) && s.length ? s[0] : null, f = ti(u);
  if (!f) return null;
  const p = `__ui__${e}`, y = n.get(p);
  if (y && y.__panoSrc === f) return y;
  const b = new Image();
  return b.__panoSrc = f, b.onload = () => {
    typeof r == "function" && r(b);
  }, b.src = f, n.set(p, b), b;
}
function s_(t, e) {
  var P, C;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], a = r.findIndex((E) => String((E == null ? void 0 : E.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const s = r[a], u = s == null ? void 0 : s.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = Wd(t.graph, u), { originId: p, originSlot: y } = Yd(f);
  if (p == null) return { src: "", sourceType: "", inputName: n };
  const b = t_(t, a, p), h = Number(y || 0);
  if (!b) return { src: "", sourceType: "", inputName: n };
  let S = [];
  try {
    S = typeof ((P = pn) == null ? void 0 : P.getNodeImageUrls) == "function" ? pn.getNodeImageUrls(b) || [] : [];
  } catch {
    S = [];
  }
  if (Array.isArray(S) && S.length) {
    const E = [];
    h >= 0 && h < S.length && E.push(S[h]), E.push(...S);
    const j = Es(E);
    if (j.length) return { src: j[0], srcCandidates: j, sourceType: "appNodeImageUrls", inputName: n };
  }
  const _ = Vi((b == null ? void 0 : b.id) ?? p), I = a_(_, h), L = Es(I);
  if (L.length) return { src: L[0], srcCandidates: L, sourceType: "nodeOutputs", inputName: n };
  const O = Array.isArray(b == null ? void 0 : b.imgs) ? b.imgs : [];
  if (O.length) {
    const E = [];
    h >= 0 && h < O.length && E.push(O[h]), E.push(...O);
    const j = Es(E);
    if (j.length) return { src: j[0], srcCandidates: j, sourceType: "nodeImgs", inputName: n };
  }
  const R = (C = b == null ? void 0 : b.widgets) == null ? void 0 : C.find((E) => String((E == null ? void 0 : E.name) || "").toLowerCase() === "image");
  if (R) {
    let E = ti(R.value);
    if (E && !E.includes("/") && !E.includes(":") && (b.comfyClass === "LoadImage" || b.type === "LoadImage") && (E = Ke.apiURL(`/view?filename=${encodeURIComponent(E)}&type=input&subfolder=`)), E) return { src: E, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function c_(t, e, n, r = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const s = qd(a);
  if (!s.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(e || "image"), f = t.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === a && f.img) return f.img;
  const p = new Image(), y = { srcRaw: a, resolvedSrc: "", img: p };
  t.__panoLinkedInputImageCache.set(u, y);
  let b = -1;
  const h = () => {
    var _, I;
    if (b += 1, b >= s.length) {
      try {
        (I = (_ = t.__panoLinkedInputImageCache) == null ? void 0 : _.delete) == null || I.call(_, u);
      } catch {
      }
      return;
    }
    const S = s[b];
    y.resolvedSrc = S, p.src = S;
  };
  return p.onload = () => {
    var S;
    r == null || r(), (S = t.setDirtyCanvas) == null || S.call(t, !0, !0);
  }, p.onerror = () => {
    var S, _;
    if (b + 1 < s.length) {
      h();
      return;
    }
    try {
      (_ = (S = t.__panoLinkedInputImageCache) == null ? void 0 : S.delete) == null || _.call(S, u);
    } catch {
    }
  }, h(), p;
}
function l_(t, e, n, r = null) {
  const a = Array.isArray(n) ? n.map((I) => String(I || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const s = String(e || "image"), u = a.join(`
`), f = t.__panoLinkedInputImageCache.get(s);
  if (f && f.srcRaw === u && f.img) return f.img;
  const p = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((I) => {
    qd(I).forEach((L) => {
      const O = String(L || "").trim();
      !O || y.has(O) || (y.add(O), p.push(O));
    });
  }), !p.length) return null;
  const b = new Image(), h = { srcRaw: u, resolvedSrc: "", img: b };
  t.__panoLinkedInputImageCache.set(s, h);
  let S = -1;
  const _ = () => {
    var L, O;
    if (S += 1, S >= p.length) {
      try {
        (O = (L = t.__panoLinkedInputImageCache) == null ? void 0 : L.delete) == null || O.call(L, s);
      } catch {
      }
      return;
    }
    const I = p[S];
    h.resolvedSrc = I, b.src = I;
  };
  return b.onload = () => {
    var I;
    r == null || r(), (I = t.setDirtyCanvas) == null || I.call(t, !0, !0);
  }, b.onerror = () => {
    var I, L;
    if (S + 1 < p.length) {
      _();
      return;
    }
    try {
      (L = (I = t.__panoLinkedInputImageCache) == null ? void 0 : I.delete) == null || L.call(I, s);
    } catch {
    }
  }, _(), b;
}
function Xd(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const r of n) {
    const a = s_(t, r);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function nf(t, e = [], n = null, r = "") {
  const a = Array.isArray(e) ? e : [e], s = Xd(t, a), u = String(r || a.join("|") || "image_exact"), f = Array.isArray(s == null ? void 0 : s.srcCandidates) ? s.srcCandidates : [];
  if (f.length) return l_(t, u, f, n);
  const p = String((s == null ? void 0 : s.src) || "").trim();
  return p ? c_(t, u, p, n) : null;
}
async function Hi(t, e, n = {}) {
  const r = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? r, s = r, u = Zb(t, e);
  await Hb();
  const f = hn(t, "output_preset"), p = hn(t, "coverage"), y = hn(t, "bg_color"), b = hn(t, mo), h = Yb(
    String((b == null ? void 0 : b.value) || ""),
    ec(f == null ? void 0 : f.value, 2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    en(p == null ? void 0 : p.value)
  );
  t.__panoLiveStateOverride = JSON.stringify(h), e === "cutout" && (h.shots = Array.isArray(h.shots) ? h.shots.slice(0, 1) : [], h.shots.length || (h.active.selected_shot_id = null));
  const S = Ud(e), _ = /* @__PURE__ */ Mo({
    viewButtons: (S.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (S.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(S.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...s ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: ze.fullscreen, disabled: !1 }] : []
    ],
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: ze.fullscreen,
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
      customColorCss: Nn({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Nn({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
  }), I = document.createElement("div");
  document.body.appendChild(I);
  const L = w1(Nb, {
    open: !0,
    type: e,
    readOnly: r,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: S,
    paintSwatches: Ya.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Nn(i.color, 1)
    })),
    uiState: _,
    onClose: () => Lr()
  });
  try {
    L.mount(I);
  } catch (i) {
    try {
      L.unmount();
    } catch {
    }
    throw I.remove(), i;
  }
  const O = I.querySelector(".pano-modal-overlay"), R = I.querySelector(".pano-modal"), P = R == null ? void 0 : R.querySelector("[data-stage-overlay]"), C = R == null ? void 0 : R.querySelector("[data-stage-background]"), E = R == null ? void 0 : R.querySelector(".pano-stage-wrap");
  if (!O || !R || !P || !C || !E)
    throw L.unmount(), I.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const j = document.createElement("div");
  j.setAttribute("aria-hidden", "true"), j.style.position = "absolute", j.style.left = "0", j.style.top = "0", j.style.pointerEvents = "none", j.style.zIndex = "12", j.style.display = "none", j.style.willChange = "transform,width,height,background,border-radius", E == null || E.appendChild(j);
  const st = document.createElement("div");
  st.className = "pano-paint-size-preview", st.setAttribute("aria-hidden", "true");
  const dt = document.createElement("div");
  dt.className = "pano-paint-size-preview-sample", st.appendChild(dt), E == null || E.appendChild(st);
  const T = P.getContext("2d"), _t = Xi(), V = R.querySelector("[data-side]"), ht = R.querySelector("[data-selection-menu]"), xt = R.querySelector("[data-tooltip]"), St = R.querySelector("[data-paint-color-row]"), it = R.querySelector("[data-paint-color-pop]"), tt = R.querySelector("[data-paint-color-sv]"), ct = R.querySelector("[data-paint-color-sv-cursor]"), gt = R.querySelector("[data-paint-hue-strip]"), q = R.querySelector("[data-paint-hue-handle]");
  let lt = 0, Nt = 0;
  E == null || E.removeAttribute("data-stage-ready"), E == null || E.setAttribute("data-stage-loading-kind", "boot"), P.style.opacity = "1", C.style.opacity = "0", a && (V == null || V.remove(), R.classList.add("pano-modal-readonly"));
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
      on(g.customPaintColor),
      ...g.customPaintHistory.filter((o) => !qa(o, g.customPaintColor))
    ];
    g.customPaintHistory = i.slice(0, 8), g.customPaintSessionStart = null;
  }, Rt = (i = !1) => {
    !it || it.hidden || (i ? Lt() : g.customPaintSessionStart = null, it.hidden = !0, _.paintDock.colorPopOpen = !1);
  }, le = () => {
    it && (it.hidden && (g.customPaintSessionStart = on(g.customPaintColor)), it.hidden = !1, _.paintDock.colorPopOpen = !0);
  };
  R.addEventListener("pointerdown", (i) => {
    ma(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (R.querySelectorAll(".pano-picker-pop").forEach((o) => {
      o.hidden = !0;
    }), Rt(!0), e === "cutout" && g.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (g.cutoutAspectOpen = !1, g.menuMode = "", g.menuSize.measured = !1, Bt(), yt())));
  });
  const _e = e === "stickers" || e === "cutout" ? h.active.selected_sticker_id : h.active.selected_shot_id, Fe = JSON.stringify(tf(h)), g = {
    mode: "pano",
    selectedId: _e,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: en(h.coverage),
    historyController: xy(80, { entries: [Fe], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: jn,
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
    paintEngine: Bs(),
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
  e === "stickers" && (g.selectedId = null, h.active.selected_sticker_id = null), g.selectedIds = g.selectedId ? [g.selectedId] : [];
  const ue = /* @__PURE__ */ new Map(), Ye = /* @__PURE__ */ new Map(), qe = /* @__PURE__ */ new Map(), Ce = /* @__PURE__ */ new Map(), It = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: e === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, D = {
    timer: 0,
    target: null
  }, F = {
    active: !1,
    depth: 0
  };
  function Y() {
    _.toolButtons.forEach((i) => {
      const o = i.attr === "data-tool-mode", c = i.attr === "data-paint-tool", l = i.attr === "data-mask-tool";
      i.active = o ? i.value === g.primaryTool : c ? i.key === g.paintTool : l ? i.key === g.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function at(i) {
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
    return o.files && o.files.length ? Array.from(o.files).some((c) => fa(c)) : !1;
  }
  function A(i) {
    const o = !!i;
    F.active !== o && (F.active = o, E.classList.toggle("drop-active", o));
  }
  function z(i, o, c = g.viewFov, l = 140, d = 620) {
    const m = om(g.viewYaw, i), x = o - g.viewPitch, v = c - g.viewFov, w = Math.hypot(m, x) + Math.abs(v) * 0.6, k = Math.round(W(l + w * 2.2, l, d));
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
  yh();
  function G() {
    return e === "stickers" ? h.stickers : h.shots;
  }
  function X() {
    const i = h.painting || (h.painting = Oi(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Q(i = "paint") {
    var d, m;
    const o = Array.isArray((m = (d = h.painting) == null ? void 0 : d[i]) == null ? void 0 : m.strokes) ? h.painting[i].strokes : [], c = [], l = /* @__PURE__ */ new Set();
    for (const x of o) {
      const v = String((x == null ? void 0 : x.actionGroupId) || "").trim();
      !v || l.has(v) || (l.add(v), c.push(v));
    }
    return c;
  }
  function K() {
    return Q("paint");
  }
  function pt(i, o) {
    const c = String(o || "").trim();
    return c ? `${i === "mask" ? "mask" : "paint"}:${c}` : "";
  }
  function ft(i) {
    const o = String(i || "").trim();
    return o ? `raster:${o}` : "";
  }
  function ut(i) {
    const o = String(i || "").trim();
    if (!o) return "";
    const c = o.match(/^raster:(.*)$/);
    return String(c ? c[1] || "" : o).trim();
  }
  function wt(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return { layerKind: "paint", actionGroupId: "" };
    const l = c.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: c };
  }
  function Ct() {
    var o;
    let i = -1;
    for (const c of Array.isArray(h.stickers) ? h.stickers : [])
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of X())
      i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0));
    for (const c of Array.isArray((o = h.painting) == null ? void 0 : o.raster_objects) ? h.painting.raster_objects : [])
      String((c == null ? void 0 : c.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((c == null ? void 0 : c.z_index) || 0)));
    return i + 1;
  }
  function Et(i, o = null) {
    const c = String(i || "").trim();
    if (!c) return null;
    const l = X();
    let d = l.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === c);
    return d ? o != null && (d.z_index = Math.max(0, Number(o || 0))) : (d = {
      id: c,
      type: "strokeGroup",
      actionGroupId: c,
      z_index: o == null ? Ct() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(d)), d;
  }
  function Ft(i) {
    if (!(i != null && i.centerUv)) return [];
    const o = Number(i.centerUv.u || 0), c = Number(i.centerUv.v || 0), l = Number(i.halfW || 0), d = Number(i.halfH || 0);
    return [
      {
        u: ((o - l) % 1 + 1) % 1,
        v: W(c - d, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: W(c - d, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: W(c + d, 0, 1)
      },
      {
        u: ((o - l) % 1 + 1) % 1,
        v: W(c + d, 0, 1)
      }
    ];
  }
  function ne() {
    const i = new Set(K()), c = X().filter((l) => i.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return i.forEach((l) => {
      c.some((d) => String((d == null ? void 0 : d.actionGroupId) || "") === l) || c.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: Ct(),
        locked: !1,
        frame: null
      });
    }), c.sort((l, d) => Number((l == null ? void 0 : l.z_index) || 0) - Number((d == null ? void 0 : d.z_index) || 0)), h.painting.groups = c, c;
  }
  function ge(i, o, c) {
    var $;
    const l = (Z) => (Number(Z || 0) % 1 + 1) % 1, d = [];
    for (const Z of c) {
      const nt = Z == null ? void 0 : Z.geometry, vt = (nt == null ? void 0 : nt.geometryKind) === "lasso_fill" ? nt == null ? void 0 : nt.points : (nt == null ? void 0 : nt.processedPoints) || (nt == null ? void 0 : nt.rawPoints) || (nt == null ? void 0 : nt.points) || [];
      Array.isArray(vt) && d.push(...vt);
    }
    if (!d.length) return null;
    const m = l((($ = d[0]) == null ? void 0 : $.u) || 0);
    let x = 0, v = 0;
    d.forEach((Z) => {
      const nt = l((Z == null ? void 0 : Z.u) || 0);
      x += m + fn(nt, m), v += Number((Z == null ? void 0 : Z.v) || 0);
    });
    const w = (x / d.length % 1 + 1) % 1;
    let k = 1 / 0, N = -1 / 0, M = 1 / 0, H = -1 / 0;
    d.forEach((Z) => {
      const nt = l((Z == null ? void 0 : Z.u) || 0), vt = fn(nt, w);
      k = Math.min(k, vt), N = Math.max(N, vt);
      const rt = Number((Z == null ? void 0 : Z.v) || 0);
      M = Math.min(M, rt), H = Math.max(H, rt);
    });
    const B = c.reduce((Z, nt) => {
      const vt = er(String((nt == null ? void 0 : nt.toolKind) || "pen")), rt = Qe[vt] || Qe[jn], mt = Math.max(1, Number((nt == null ? void 0 : nt.size) || 10)) * Math.max(0.1, Number((rt == null ? void 0 : rt.sizeScale) ?? 1));
      return Math.max(Z, mt);
    }, 0), J = Math.max(35e-4, B / 2048);
    return {
      centerUv: { u: ((w + (k + N) * 0.5) % 1 + 1) % 1, v: W((M + H) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (N - k) * 0.5 + J,
      halfH: (H - M) * 0.5 + J,
      uvPad: J
    };
  }
  function kt(i, o, c) {
    const l = String(i || "").trim();
    if (!l) return null;
    const d = X().find((x) => String((x == null ? void 0 : x.actionGroupId) || "") === l);
    if (!d) return null;
    const m = c || mn(l, o);
    return d.frame = ge(l, o, m), d.frame;
  }
  function oe() {
    var l;
    const i = (Array.isArray(h.stickers) ? h.stickers : []).map((d) => ({
      type: "sticker",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), o = ne().map((d) => ({
      type: "strokeGroup",
      id: String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || ""),
      actionGroupId: String((d == null ? void 0 : d.actionGroupId) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    })), c = (Array.isArray((l = h.painting) == null ? void 0 : l.raster_objects) ? h.painting.raster_objects : []).filter((d) => String((d == null ? void 0 : d.layerKind) || "paint") === "paint").map((d) => ({
      type: "rasterObject",
      id: String((d == null ? void 0 : d.id) || ""),
      z_index: Number((d == null ? void 0 : d.z_index) || 0),
      item: d
    }));
    return [...i, ...o, ...c].sort((d, m) => Number(d.z_index || 0) - Number(m.z_index || 0));
  }
  function ln(i = !0) {
    var c, l, d, m, x, v;
    const o = oe().filter((w) => w.type === "strokeGroup").map((w) => String(w.actionGroupId || "")).filter((w) => !!w);
    if (i) {
      const w = String(((l = (c = g.interaction) == null ? void 0 : c.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), k = String(((m = (d = g.interaction) == null ? void 0 : d.stroke) == null ? void 0 : m.layerKind) || "").trim(), N = String(((v = (x = g.interaction) == null ? void 0 : x.stroke) == null ? void 0 : v.toolKind) || "").trim();
      w && k === "paint" && N !== "eraser" && !o.includes(w) && o.push(w);
    }
    return o;
  }
  function me(i = !0) {
    var v, w, k, N, M, H;
    const o = oe();
    if (!i) return o;
    const c = String(((w = (v = g.interaction) == null ? void 0 : v.stroke) == null ? void 0 : w.actionGroupId) || "").trim(), l = String(((N = (k = g.interaction) == null ? void 0 : k.stroke) == null ? void 0 : N.layerKind) || "").trim(), d = String(((H = (M = g.interaction) == null ? void 0 : M.stroke) == null ? void 0 : H.toolKind) || "").trim();
    if (!c || l !== "paint" || d === "eraser" || o.some((B) => B.type === "strokeGroup" && String(B.actionGroupId || "") === c))
      return o;
    const m = re();
    let x = o.reduce((B, J) => Math.max(B, Number((J == null ? void 0 : J.z_index) || 0)), -1) + 1;
    return m && xe(m) && String(m.actionGroupId || "") === c && (x = Number(m.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: c,
        actionGroupId: c,
        z_index: x,
        item: null
      }
    ].sort((B, J) => Number((B == null ? void 0 : B.z_index) || 0) - Number((J == null ? void 0 : J.z_index) || 0));
  }
  function Ve() {
    return X().slice().sort((i, o) => Number((i == null ? void 0 : i.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((i) => ii(pt("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function un() {
    var i;
    return (Array.isArray((i = h.painting) == null ? void 0 : i.raster_objects) ? h.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, c) => Number((o == null ? void 0 : o.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((o) => ri(ft((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function ni(i = g.interaction) {
    const o = String((i == null ? void 0 : i.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const c = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, l = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return c || l;
    }
    return !1;
  }
  function Zi() {
    var o, c, l, d;
    let i = null;
    try {
      const m = ln(), x = ((d = (l = (c = (o = g.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : c.call(o, m)) == null ? void 0 : l.displayPaint) == null ? void 0 : d.canvas) || null;
      x && (i = {
        source: x,
        revision: `${Ir()}:${Lo()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function Lo() {
    var d, m, x, v, w, k, N;
    const i = g.interaction, o = String((i == null ? void 0 : i.kind) || "");
    if (!ni(i)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const M = ((d = i == null ? void 0 : i.stroke) == null ? void 0 : d.geometry) || null, H = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), B = ((x = M == null ? void 0 : M.rawPoints) == null ? void 0 : x.length) ?? ((v = M == null ? void 0 : M.points) == null ? void 0 : v.length) ?? 0, J = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${H || "paint"}_${o}_live${J}_${B}_${g.livePaintInteractionRevision}`;
    }
    const c = String(((w = i == null ? void 0 : i.item) == null ? void 0 : w.actionGroupId) || ""), l = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.rasterObjectId) || ((N = i == null ? void 0 : i.item) == null ? void 0 : N.id) || "");
    return `_${o}_${c || l || "active"}_${g.livePaintInteractionRevision}`;
  }
  function Ro() {
    return [...Array.isArray(h.stickers) ? h.stickers : []];
  }
  function Ic(i) {
    return !1;
  }
  function Ae(i) {
    return !!i && Array.isArray(h.stickers) && h.stickers.includes(i);
  }
  function Xe() {
    var i;
    return Array.isArray((i = h.painting) == null ? void 0 : i.raster_objects) ? h.painting.raster_objects : [];
  }
  function ri(i) {
    const o = ut(i);
    if (!o) return null;
    const c = Xe().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
    return !c || String((c == null ? void 0 : c.layerKind) || "paint") !== "paint" ? null : {
      ...c,
      id: ft(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Ie(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const o = ut(i.rasterObjectId || i.id || "");
    return !!o && !!ri(ft(o));
  }
  function ii(i) {
    const o = wt(i), c = String(o.actionGroupId || "").trim();
    if (!c) return null;
    const l = X().find((d) => String((d == null ? void 0 : d.id) || (d == null ? void 0 : d.actionGroupId) || "") === c || String((d == null ? void 0 : d.actionGroupId) || "") === c);
    return l ? {
      ...l,
      id: pt("paint", c),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: c
    } : null;
  }
  function xe(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const o = String(i.actionGroupId || "").trim(), c = String(i.layerKind || "paint").trim() || "paint";
    return !!o && !!ii(pt(c, o));
  }
  function mn(i, o = null) {
    const c = wt(i, o), l = String(c.actionGroupId || "").trim();
    return l ? Tr(c.layerKind).filter((d) => String((d == null ? void 0 : d.actionGroupId) || "").trim() === l) : [];
  }
  function Zd(i, o = "paint") {
    var m, x, v;
    const c = String(i || "").trim(), d = `geomv5:${String(o || "paint").trim() || "paint"}:${c}:${g.mode}:${li()}`;
    if (g.mode === "frame") {
      const w = we(), k = String((w == null ? void 0 : w.id) || "");
      return `${d}:frame:${k}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(Number((m = g.frameView) == null ? void 0 : m.zoom) * 1e3)}:${Math.round(Number(((x = g.frameView) == null ? void 0 : x.panX) || 0))}:${Math.round(Number(((v = g.frameView) == null ? void 0 : v.panY) || 0))}`;
    }
    return `${d}:view:${Math.round(Number(g.viewYaw || 0) * 100)}:${Math.round(Number(g.viewPitch || 0) * 100)}:${Math.round(Number(g.viewFov || 0) * 100)}:${Math.round(Number((P == null ? void 0 : P.width) || 0))}:${Math.round(Number((P == null ? void 0 : P.height) || 0))}`;
  }
  function Ji(i, o, c) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: W(Number(i.v || 0) + Number(c || 0), 0, 1)
    };
  }
  function fn(i, o) {
    let c = Number(i || 0) - Number(o || 0);
    for (; c > 0.5; ) c -= 1;
    for (; c < -0.5; ) c += 1;
    return c;
  }
  function Oo(i, o = null, c = null) {
    var k;
    const l = wt(i, o), d = Array.isArray(c) ? c : mn(l.actionGroupId, l.layerKind), m = [];
    if (d.forEach((N) => {
      const M = (N == null ? void 0 : N.geometry) || null, H = (M == null ? void 0 : M.geometryKind) === "lasso_fill" ? M == null ? void 0 : M.points : (M == null ? void 0 : M.processedPoints) || (M == null ? void 0 : M.rawPoints) || (M == null ? void 0 : M.points) || [];
      Array.isArray(H) && m.push(...H);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const x = Number(((k = m[0]) == null ? void 0 : k.u) || 0);
    let v = 0, w = 0;
    return m.forEach((N) => {
      v += x + fn(Number((N == null ? void 0 : N.u) || 0), x), w += Number((N == null ? void 0 : N.v) || 0);
    }), {
      u: (v / m.length % 1 + 1) % 1,
      v: W(w / m.length, 0, 1)
    };
  }
  function Qi(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const d = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), x = fn(Number(i.u || 0), d), v = Number(i.v || 0) - m, w = Number(l || 0) * Pe, k = Math.cos(w), N = Math.sin(w), M = Math.max(0.02, Number(c || 1)), H = (x * k - v * N) * M, B = (x * N + v * k) * M;
    return {
      ...i,
      u: ((d + H) % 1 + 1) % 1,
      v: W(m + B, 0, 1)
    };
  }
  function Ec(i, o, c, l = null, d = null, m = null) {
    const x = wt(i, d), v = String(x.actionGroupId || "").trim();
    if (!v) return !1;
    const w = Tr(x.layerKind), k = Array.isArray(l) ? new Map(l.map((M) => [String((M == null ? void 0 : M.id) || ""), M])) : null;
    let N = !1;
    if (w.forEach((M) => {
      if (String((M == null ? void 0 : M.actionGroupId) || "").trim() !== v) return;
      const H = (k == null ? void 0 : k.get(String((M == null ? void 0 : M.id) || ""))) || M, B = M == null ? void 0 : M.geometry, J = H == null ? void 0 : H.geometry;
      !B || !J || (Array.isArray(J.points) && (B.points = J.points.map(($) => Ji($, o, c)), N = !0), Array.isArray(J.rawPoints) && (B.rawPoints = J.rawPoints.map(($) => Ji($, o, c)), N = !0), Array.isArray(J.processedPoints) && (B.processedPoints = J.processedPoints.map(($) => Ji($, o, c)), N = !0));
    }), N && m) {
      const M = X().find((H) => String((H == null ? void 0 : H.actionGroupId) || "") === v);
      M && (M.frame = null);
    }
    return N;
  }
  function Dc(i, o = 1, c = 0, l = null, d = null, m = null) {
    const x = wt(i, d), v = String(x.actionGroupId || "").trim();
    if (!v) return !1;
    const w = Tr(x.layerKind), k = Array.isArray(l) ? l : mn(v, x.layerKind), N = Array.isArray(k) ? new Map(k.map((B) => [String((B == null ? void 0 : B.id) || ""), B])) : null, M = (m == null ? void 0 : m.centerUv) ?? Oo(v, x.layerKind, k);
    let H = !1;
    if (w.forEach((B) => {
      if (String((B == null ? void 0 : B.actionGroupId) || "").trim() !== v) return;
      const J = (N == null ? void 0 : N.get(String((B == null ? void 0 : B.id) || ""))) || B, $ = B == null ? void 0 : B.geometry, Z = J == null ? void 0 : J.geometry;
      !$ || !Z || (Array.isArray(Z.points) && ($.points = Z.points.map((nt) => Qi(nt, M, o, c)), H = !0), Array.isArray(Z.rawPoints) && ($.rawPoints = Z.rawPoints.map((nt) => Qi(nt, M, o, c)), H = !0), Array.isArray(Z.processedPoints) && ($.processedPoints = Z.processedPoints.map((nt) => Qi(nt, M, o, c)), H = !0));
    }), H && m) {
      const B = X().find((J) => String((J == null ? void 0 : J.actionGroupId) || "") === v);
      B && (B.frame = null);
    }
    return H;
  }
  function Tc(i, o, c, l = null) {
    const d = ut(i);
    if (!d) return !1;
    const m = Xe().find((N) => String((N == null ? void 0 : N.id) || "").trim() === d);
    if (!m) return !1;
    const x = l && typeof l == "object" ? l : m, v = (x == null ? void 0 : x.transform) || {}, w = Number(v.du || 0) + Number(o || 0), k = W(Number(v.dv || 0) + Number(c || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = w, m.transform.dv = k, !0;
  }
  function Jd(i, o = 1, c = null) {
    const l = ut(i);
    if (!l) return !1;
    const d = Xe().find((k) => String((k == null ? void 0 : k.id) || "").trim() === l);
    if (!d) return !1;
    const m = c && typeof c == "object" ? c : d, x = (m == null ? void 0 : m.transform) || {}, v = Math.max(0.01, Number(x.scale || 1)), w = W(v * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return d.transform || (d.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), d.transform.scale = w, !0;
  }
  function re() {
    const i = String(g.selectedId || "");
    if (!i) return null;
    const o = ii(i);
    if (o) return o;
    const c = ri(i);
    return c || (e === "cutout" ? Ro().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null : G().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null);
  }
  function yn() {
    const i = Array.isArray(g.selectedIds) && g.selectedIds.length ? g.selectedIds : g.selectedId ? [g.selectedId] : [], o = [], c = /* @__PURE__ */ new Set();
    return i.forEach((l) => {
      const d = String(l || "").trim();
      if (!d || c.has(d)) return;
      c.add(d);
      const m = d === String(g.selectedId || "") ? re() : ii(d) || ri(d) || (e === "cutout" ? Ro().find((x) => String((x == null ? void 0 : x.id) || "") === d) : G().find((x) => String((x == null ? void 0 : x.id) || "") === d));
      m && o.push(m);
    }), o;
  }
  function Fo(i = null) {
    const o = Array.isArray(i) ? i : yn();
    if (!o || o.length < 2) return null;
    const c = o.map((k) => rn(k)).filter((k) => (k == null ? void 0 : k.visible) && Array.isArray(k.corners) && k.corners.length);
    if (!c.length) return null;
    const l = c.flatMap((k) => k.corners.map((N) => Number((N == null ? void 0 : N.x) || 0))), d = c.flatMap((k) => k.corners.map((N) => Number((N == null ? void 0 : N.y) || 0))), m = Math.min(...l), x = Math.max(...l), v = Math.min(...d), w = Math.max(...d);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + x) * 0.5, y: (v + w) * 0.5 },
      corners: [
        { x: m, y: v },
        { x, y: v },
        { x, y: w },
        { x: m, y: w }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + x) * 0.5, y: v, a: { x: m, y: v }, b: { x, y: v } },
        { edge: "right", x, y: (v + w) * 0.5, a: { x, y: v }, b: { x, y: w } },
        { edge: "bottom", x: (m + x) * 0.5, y: w, a: { x, y: w }, b: { x: m, y: w } },
        { edge: "left", x: m, y: (v + w) * 0.5, a: { x: m, y: w }, b: { x: m, y: v } }
      ],
      rotateStemBase: { x: (m + x) * 0.5, y: v },
      rotateHandle: { x: (m + x) * 0.5, y: v - 30 }
    };
  }
  function Qd(i) {
    const o = String((i == null ? void 0 : i.id) || "").trim();
    return !!o && Array.isArray(g.selectedIds) && g.selectedIds.includes(o);
  }
  function ta() {
    const i = re();
    return i ? xe(i) || Ie(i) ? "stroke" : "image" : null;
  }
  function Jn(i) {
    if (!i || typeof i != "object") return !1;
    if (xe(i)) {
      const o = String(i.actionGroupId || i.id || "").trim(), c = X().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    if (Ie(i)) {
      const o = ut(i.rasterObjectId || i.id || ""), c = Xe().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (c == null ? void 0 : c.locked) === !0;
    }
    return i.locked === !0;
  }
  function Vo(i = null) {
    const o = Array.isArray(i) ? i : yn();
    return o.length > 0 && o.every((c) => Jn(c));
  }
  function th(i, o) {
    const c = o === !0;
    if (!i || typeof i != "object") return !1;
    if (xe(i)) {
      const l = String(i.actionGroupId || i.id || "").trim(), d = X().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === l);
      return !d || d.locked === c ? !1 : (d.locked = c, !0);
    }
    if (Ie(i)) {
      const l = ut(i.rasterObjectId || i.id || ""), d = Xe().find((m) => String((m == null ? void 0 : m.id) || "").trim() === l);
      return !d || d.locked === c ? !1 : (d.locked = c, !0);
    }
    return i.locked === c ? !1 : (i.locked = c, !0);
  }
  function eh() {
    if (r) return;
    const i = yn();
    if (!i.length) return;
    const o = !Vo(i);
    let c = !1;
    i.forEach((l) => {
      th(l, o) && (c = !0);
    }), c && (fe(), ye(), Bt(), yt());
  }
  function ea(i) {
    g.selectedId = (i == null ? void 0 : i.id) || null, g.selectedIds = i != null && i.id ? [i.id] : [], i && Ae(i) ? h.active.selected_sticker_id = i.id || null : h.active.selected_sticker_id = null, i ? h.active.selected_shot_id = h.active.selected_shot_id : h.active.selected_shot_id = null;
  }
  function nh(i, o = null) {
    const c = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((x) => {
      const v = String((x == null ? void 0 : x.id) || "").trim();
      !v || l.has(v) || (l.add(v), c.push(v));
    }), g.selectedIds = c;
    const d = String(o || "").trim();
    g.selectedId = d && c.includes(d) ? d : c[c.length - 1] || null;
    const m = re();
    h.active.selected_sticker_id = m && Ae(m) && m.id || null, c.length || (h.active.selected_shot_id = null);
  }
  function Lc() {
    return (Array.isArray(h.stickers) ? h.stickers : []).map((o, c) => {
      var d, m;
      const l = Me(o) ? String(o.id || hr) : String(((m = (d = h.assets) == null ? void 0 : d[o.asset_id]) == null ? void 0 : m.name) || o.asset_id || o.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: o,
        label: l
      };
    });
  }
  function rh(i) {
    return i === "frame" ? ze.camera : i === "stroke" ? ze.paintbrush_vertical_tool : ze.image;
  }
  function Rc(i) {
    return !i || !i.item ? Is(String((i == null ? void 0 : i.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${rh(i.kind)}</span><span>${Is(String(i.label || ""))}</span>`;
  }
  function Oc() {
    return Ct();
  }
  function Me(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === hr || String(i.source_kind || "") === Ns;
  }
  function Cr(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function ih(i) {
    return Me(i) && Cr(i) ? _d : 1;
  }
  function ah() {
    return g.primaryTool === "mask" ? g.maskTool : g.paintTool;
  }
  function oh() {
    return String(ah() || "") === "lasso_fill";
  }
  function sh() {
    if (r) return;
    const i = re();
    !i || !Me(i) || (i.visible = Cr(i), an(), fe(), ye(), jt(), Bt(), yt());
  }
  function ch() {
    if (r || e !== "stickers") return;
    const i = re();
    if (!i || !Me(i)) return;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return;
    i.yaw_deg = Number(o.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(o.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(o.hFOV_deg ?? i.hFOV_deg ?? 30);
    const c = Ho(Ps, () => {
      yt();
    });
    c && (c.complete || c.naturalWidth || c.width) ? i.vFOV_deg = lr(
      Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    ) : i.vFOV_deg = Number(o.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(o.rot_deg ?? i.rot_deg ?? 0), fe(), ye(), jt(), Bt(), yt();
  }
  function lh(i) {
    if (!i || !Me(i)) return null;
    const o = i.initial_pose;
    if (!o || typeof o != "object") return null;
    const c = {
      yaw_deg: Number(o.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? i.rot_deg ?? 0)
    }, l = Ho(Ps, () => {
      yt();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (c.vFOV_deg = lr(
      c.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), c;
  }
  function uh() {
    const i = re();
    if (!i || !Me(i)) return !1;
    const o = lh(i);
    if (!o) return !1;
    const c = (l, d) => Math.abs(Number(l || 0) - Number(d || 0)) <= 1e-4;
    return !(c(i.yaw_deg, o.yaw_deg) && c(i.pitch_deg, o.pitch_deg) && c(i.hFOV_deg, o.hFOV_deg) && c(i.vFOV_deg, o.vFOV_deg) && c(i.rot_deg, o.rot_deg));
  }
  function Fc(i) {
    var c;
    const o = Vi(t == null ? void 0 : t.id);
    return Array.isArray((c = o == null ? void 0 : o.ui) == null ? void 0 : c[i]) ? o.ui[i] : Array.isArray(o == null ? void 0 : o[i]) ? o[i] : [];
  }
  function fh(i) {
    const o = Vi(t == null ? void 0 : t.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, i) ? o.ui[i] : o && Object.prototype.hasOwnProperty.call(o, i) ? o[i] : null;
  }
  function dh(i, o = null) {
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
  function Ho(i, o = null) {
    const c = Fc(i), l = Array.isArray(c) && c.length ? c[0] : null, d = ti(l);
    if (!d) return null;
    const m = `__ui__${i}`, x = ue.get(m);
    if (x && x.__panoSrc === d) return x;
    const v = new Image();
    return v.__panoSrc = d, v.onload = () => {
      typeof o == "function" ? o(v) : yt();
    }, v.src = d, ue.set(m, v), v;
  }
  function Vc(i = null) {
    const o = nf(t, ["sticker_image"], i, "sticker_image_exact");
    return o || Ho(Ps, i);
  }
  function Hc(i) {
    const o = String(i || "");
    let c = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      c ^= o.charCodeAt(l), c = Math.imul(c, 16777619);
    return String(c >>> 0);
  }
  function lr(i, o, c) {
    const l = Math.max(1, Number(o || 1)), d = Math.max(1, Number(c || 1)), m = W(Number(i || 30), 0.1, 179) * Pe, x = 2 * Math.atan(Math.tan(m * 0.5) * (d / l));
    return W(x * yr, 0.1, 179);
  }
  function hh(i) {
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
      const x = Number(m.yaw_deg), v = Number(m.pitch_deg), w = Number(m.roll_deg), k = Number(m.hFOV_deg);
      if (![x, v, w, k].every((B) => Number.isFinite(B))) return null;
      let N = ((x + 180) % 360 + 360) % 360 - 180;
      Object.is(N, -0) && (N = 0);
      const M = {
        yaw_deg: N,
        pitch_deg: W(v, -89.9, 89.9),
        roll_deg: w,
        hFOV_deg: W(k, 0.1, 179)
      }, H = Number(c.source_aspect);
      return Number.isFinite(H) && H > 0 && (M.source_aspect = H), M;
    } catch {
      return null;
    }
  }
  function zc(i) {
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), d = Number(i == null ? void 0 : i.hFOV_deg), m = Qs(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: je(Number.isFinite(o) ? o : 0),
        pitch_deg: W(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: W(Number.isFinite(d) ? d : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function ph(i) {
    var v;
    if (!i || typeof i != "object") return zc(null);
    const o = Number(i == null ? void 0 : i.yaw_deg), c = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), d = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let x = 1;
    if (Number.isFinite(d) && Number.isFinite(m)) {
      const w = W(d, 0.1, 179) * Pe, k = W(m, 0.1, 179) * Pe, N = Math.tan(k * 0.5);
      if (Math.abs(N) > 1e-6) {
        const M = Math.tan(w * 0.5) / N;
        Number.isFinite(M) && M > 0 && (x = M);
      }
    }
    if (i != null && i.asset_id && ((v = h == null ? void 0 : h.assets) != null && v[i.asset_id])) {
      const w = h.assets[i.asset_id], k = Number((w == null ? void 0 : w.w) || 0), N = Number((w == null ? void 0 : w.h) || 0);
      k > 0 && N > 0 && (x = k / N);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: je(Number.isFinite(o) ? o : 0),
        pitch_deg: W(Number.isFinite(c) ? c : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: W(Number.isFinite(d) ? d : 30, 0.1, 179)
      },
      source_aspect: x
    };
  }
  function gh(i) {
    var l, d, m, x, v;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((w) => String((w == null ? void 0 : w.name) || "") === String(i)) : null, c = o == null ? void 0 : o.link;
    if (c != null) {
      const w = Wd(t.graph, c), { originId: k, originSlot: N } = Yd(w), M = Vi(k), H = [
        M == null ? void 0 : M.output,
        M == null ? void 0 : M.result,
        (l = M == null ? void 0 : M.data) == null ? void 0 : l.output,
        (d = M == null ? void 0 : M.data) == null ? void 0 : d.result,
        (m = M == null ? void 0 : M.ui) == null ? void 0 : m.output,
        (x = M == null ? void 0 : M.ui) == null ? void 0 : x.result
      ];
      for (const B of H) {
        if (!Array.isArray(B)) continue;
        const J = Number(N || 0), $ = B[J];
        if (typeof $ == "string" && $.trim()) return $;
      }
    }
    return String(((v = hn(t, i)) == null ? void 0 : v.value) || "");
  }
  function mh(i, o, c) {
    const l = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : hh(o);
    if (l) {
      const x = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || l.source_aspect || 1), v = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: lr(l.hFOV_deg, x, v),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const d = Number((c == null ? void 0 : c.naturalWidth) || (c == null ? void 0 : c.width) || 1), m = Number((c == null ? void 0 : c.naturalHeight) || (c == null ? void 0 : c.height) || 1);
    return {
      yaw_deg: Number(g.viewYaw || 0),
      pitch_deg: Number(g.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: lr(30, d, m),
      rot_deg: 0
    };
  }
  function $c(i = "sync") {
    if (e !== "stickers" || r) return;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((B) => String((B == null ? void 0 : B.name) || "") === "sticker_image") : null, c = (o == null ? void 0 : o.link) ?? null, l = Vc(() => {
      var B;
      (B = t.__panoExternalStickerSync) == null || B.call(t, "image-loaded");
    }), d = dh(fh("pano_sticker_input_pose"), null), m = gh("sticker_state"), x = Hc(d && typeof d == "object" ? JSON.stringify(d) : m), v = Array.isArray(h.stickers) ? h.stickers : h.stickers = [], w = v.findIndex((B) => String((B == null ? void 0 : B.id) || "") === hr);
    if (c == null) {
      w >= 0 && (v.splice(w, 1), g.selectedId === hr && (g.selectedId = null, g.selectedIds = [], h.active.selected_sticker_id = null), ye(), jt(), Bt(), yt());
      return;
    }
    const k = v.reduce((B, J) => Math.max(B, Number((J == null ? void 0 : J.z_index) || 0)), -1);
    let N = w >= 0 ? v[w] : null;
    const M = !N || Number(N.source_link_id ?? -1) !== Number(c) || String(N.source_state_hash || "") !== x;
    N || (N = {
      id: hr,
      source_kind: Ns
    }, v.push(N)), N.id = hr, N.source_kind = Ns, N.source_link_id = Number(c), N.source_state_hash = x, N.visible = N.visible !== !1;
    let H = !1;
    if (M) {
      const B = mh(d, m, l);
      Object.assign(N, B, {
        initial_pose: { ...B },
        visible: !0,
        z_index: k + 1
      }), H = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const B = lr(
        Number(N.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(N.vFOV_deg || 0) - B) > 1e-6 && (N.vFOV_deg = B, H = !0);
    }
    H && (ye(), jt(), Bt()), yt();
  }
  function ai(i = {}) {
    const c = i.preservePanelValues !== !1 ? re() : null;
    c && (g.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: _i(c)
    }), g.selectedId = null, g.selectedIds = [], g.cutoutAspectOpen = !1, h.active.selected_sticker_id = null, h.active.selected_shot_id = null;
  }
  function zo() {
    bi(_.toolButtons, "value", "add-or-look", { visible: !1 });
  }
  function na() {
    g.mode === "frame" && (g.mode = "pano"), g.outputPreviewRect = null, _.viewButtons.forEach((i) => {
      const o = i.key === g.mode;
      i.pressed = o ? "true" : "false", i.visible = i.key !== "frame", i.disabled = i.key === "frame";
    }), _.outputPreviewToggle.visible = !1, _l() ? he(g.pointerPos) : P.style.cursor = g.mode === "pano" ? "grab" : "default";
  }
  function yh() {
    const o = Yc({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function $o() {
    const i = Mn(g.viewYaw, g.viewPitch);
    let o = Ln(0, 1, 0);
    Math.abs(_n(i, o)) > 0.999 && (o = Ln(0, 0, 1));
    const c = Vr(Ta(o, i)), l = Vr(Ta(i, c));
    return { right: c, up: l, fwd: i };
  }
  function oi(i) {
    const { right: o, up: c, fwd: l } = $o(), d = _n(i, o), m = _n(i, c), x = _n(i, l);
    if (x <= 1e-5) return null;
    const v = P.width, w = P.height, k = g.viewFov * Pe, N = 2 * Math.atan(Math.tan(k / 2) * (w / v)), M = v / 2 / Math.tan(k / 2), H = w / 2 / Math.tan(N / 2);
    return {
      x: v / 2 + d / x * M,
      y: w / 2 - m / x * H,
      z: x
    };
  }
  function jo(i, o) {
    const { right: c, up: l, fwd: d } = $o(), m = P.width, x = P.height, v = g.viewFov * Pe, w = 2 * Math.atan(Math.tan(v / 2) * (x / m)), k = (i - m / 2) / (m / 2) * Math.tan(v / 2), N = (x / 2 - o) / (x / 2) * Math.tan(w / 2), M = Ea(Ea(Da(c, k), Da(l, N)), d);
    return Vr(M);
  }
  function Qn() {
    const i = P.width, o = P.height, c = 2;
    if (i / Math.max(o, 1) >= c) {
      const v = o, w = v * c;
      return { x: (i - w) * 0.5, y: 0, w, h: v };
    }
    const d = i, m = d / c;
    return { x: 0, y: (o - m) * 0.5, w: d, h: m };
  }
  function jc(i) {
    var x;
    if (i && typeof i == "object" && (Me(i) || i.external === !0))
      return Vc(() => {
        var v;
        (v = t.__panoExternalStickerSync) == null || v.call(t, "image-loaded");
      });
    const o = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!o) return null;
    const c = ue.get(o);
    if (c) return c;
    const l = (x = h.assets) == null ? void 0 : x[o], d = i_(l);
    if (!d) return null;
    const m = new Image();
    return m.onload = () => yt(), m.src = d, ue.set(o, m), m;
  }
  function Uc(i, o = null) {
    const c = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!c) return null;
    const l = Ye.get(c);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const d = new Image();
    return d.onload = () => {
      typeof o == "function" && o();
    }, d.src = c, Ye.set(c, d), d;
  }
  function vh(i) {
    const o = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!o) return null;
    const c = qe.get(o);
    if (c) return c.ready ? c : null;
    const l = Uc(i, () => {
      const N = qe.get(o);
      N && (N.ready = !1), yt({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const d = Number(l.naturalWidth || l.width || 0), m = Number(l.naturalHeight || l.height || 0);
    if (d < 1 || m < 1) return null;
    const x = document.createElement("canvas");
    x.width = d, x.height = m;
    const v = x.getContext("2d", { willReadFrequently: !0 });
    if (!v) return null;
    v.clearRect(0, 0, d, m), v.drawImage(l, 0, 0, d, m);
    const w = v.getImageData(0, 0, d, m).data, k = { canvas: x, width: d, height: m, alpha: w, ready: !0 };
    return qe.set(o, k), k;
  }
  function bh(i, o, c = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const d = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), x = fn(Number(i.u || 0), d), v = Number(i.v || 0) - m, w = Math.max(0.02, Number(c || 1)), k = Number(l || 0) * Pe, N = Math.cos(k), M = Math.sin(k), H = x / w, B = v / w, J = H * N + B * M, $ = -H * M + B * N;
    return {
      ...i,
      u: ((d + J) % 1 + 1) % 1,
      v: m + $
    };
  }
  function _h(i, o) {
    if (!i || !o) return null;
    const c = (i == null ? void 0 : i.bbox) || null;
    if (!c) return null;
    const l = (i == null ? void 0 : i.transform) || {}, d = {
      u: (Number(c.u0 || 0) + Number(c.u1 || 0)) * 0.5,
      v: (Number(c.v0 || 0) + Number(c.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, x = bh(
      m,
      d,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), v = Number(c.u1 || 0) - Number(c.u0 || 0), w = Number(c.v1 || 0) - Number(c.v0 || 0);
    if (!(v > 1e-6) || !(w > 1e-6)) return null;
    const k = fn(Number(x.u || 0), Number(c.u0 || 0)) / v, N = (Number(x.v || 0) - Number(c.v0 || 0)) / w;
    if (k < 0 || k > 1 || N < 0 || N > 1) return 0;
    const M = vh(i);
    if (!M) return null;
    const H = W(Math.floor(k * M.width), 0, M.width - 1), B = W(Math.floor(N * M.height), 0, M.height - 1);
    return Number(M.alpha[(B * M.width + H) * 4 + 3] || 0);
  }
  function xh(i, o, c, l = null) {
    if (!(o != null && o.visible) || !ir(c, o.corners)) return !1;
    const d = l || bn(c, performance.now()), m = _h(i, d);
    return m === null ? !0 : m > 8;
  }
  function wh() {
    var l, d, m, x, v, w, k, N;
    const i = ((d = (l = g.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : d.call(l, ln(!1))) || null, o = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((v = (x = i == null ? void 0 : i.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : v.width) || 2048)), c = Math.max(1, Number(((w = i == null ? void 0 : i.descriptor) == null ? void 0 : w.height) || ((N = (k = i == null ? void 0 : i.displayPaint) == null ? void 0 : k.canvas) == null ? void 0 : N.height) || 1024));
    return { width: o, height: c };
  }
  function Sh() {
    var B, J, $;
    const i = g.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const c = Hn(), l = `${Lo()}:${c.width}:${c.height}`;
    if (((B = g._activePaintEraserPreviewInfo) == null ? void 0 : B.cacheKey) === l)
      return g._activePaintEraserPreviewInfo.value || null;
    const d = De(o), m = (d == null ? void 0 : d.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const Z = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Zo(Z, d.targetSpace, !0);
    }
    const x = ci(c.width, c.height, { readback: !0 });
    if (!sl(x, d, { w: c.width, h: c.height })) return null;
    const v = (($ = (J = x.ctx) == null ? void 0 : J.getImageData(0, 0, c.width, c.height)) == null ? void 0 : $.data) || null;
    if (!v) return null;
    let w = c.width, k = c.height, N = -1, M = -1;
    for (let Z = 0; Z < c.height; Z += 1)
      for (let nt = 0; nt < c.width; nt += 1)
        v[(Z * c.width + nt) * 4 + 3] <= 8 || (nt < w && (w = nt), Z < k && (k = Z), nt > N && (N = nt), Z > M && (M = Z));
    if (N < w || M < k)
      return g._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const H = {
      surface: x,
      bounds: { minX: w, minY: k, maxX: N, maxY: M },
      key: `${l}:${w}:${k}:${N}:${M}`
    };
    return g._activePaintEraserPreviewInfo = { cacheKey: l, value: H }, g._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), H;
  }
  function si() {
    g._activePaintEraserPreviewInfo = null, g._liveEraserPreviewCanvasCache = null;
  }
  function kh(i, o, c) {
    var l, d;
    if (!i) return null;
    if (i.type === "rasterObject" && ((l = i.item) != null && l.bbox)) {
      const m = i.item.bbox, x = ((d = i.item) == null ? void 0 : d.transform) || {}, v = Number(m.u0 || 0) + Number(x.du || 0), w = Number(m.u1 || 0) + Number(x.du || 0), k = Number(m.v0 || 0) + Number(x.dv || 0), N = Number(m.v1 || 0) + Number(x.dv || 0);
      return {
        minX: Math.floor((v % 1 + 1) % 1 * o),
        maxX: Math.ceil((w % 1 + 1) % 1 * o),
        minY: Math.floor(W(k, 0, 1) * c),
        maxY: Math.ceil(W(N, 0, 1) * c),
        wraps: w - v >= 1 || v < 0 || w > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = mn(i.actionGroupId, "paint"), x = kt(i.actionGroupId, "paint", m);
      if (!x) return null;
      const v = x.centerUv.u - x.halfW, w = x.centerUv.u + x.halfW, k = x.centerUv.v - x.halfH, N = x.centerUv.v + x.halfH;
      return {
        minX: Math.floor((v % 1 + 1) % 1 * o),
        maxX: Math.ceil((w % 1 + 1) % 1 * o),
        minY: Math.floor(W(k, 0, 1) * c),
        maxY: Math.ceil(W(N, 0, 1) * c),
        wraps: w - v >= 1 || v < 0 || w > 1
      };
    }
    return null;
  }
  function Mh(i, o, c) {
    if (!i || !o) return !1;
    const l = (x) => x.wraps ? [
      { minX: 0, maxX: x.maxX, minY: x.minY, maxY: x.maxY, wraps: !1 },
      { minX: x.minX, maxX: c - 1, minY: x.minY, maxY: x.maxY, wraps: !1 }
    ] : [x], d = l(i), m = l(o);
    return d.some((x) => m.some((v) => !(x.maxX < v.minX || v.maxX < x.minX || x.maxY < v.minY || v.maxY < x.minY)));
  }
  function Nh(i, o, c) {
    var mt, Dt, Vt, Mt, U, et, bt;
    if (!i || !o || !((mt = c == null ? void 0 : c.surface) != null && mt.canvas) || o.type !== "rasterObject") return i;
    const l = Number(i.width || c.surface.canvas.width || 0), d = Number(i.height || c.surface.canvas.height || 0);
    if (l < 1 || d < 1) return i;
    const m = kh(o, l, d);
    if (m && !Mh(m, c.bounds, l)) return i;
    const x = String(((Dt = o.item) == null ? void 0 : Dt.id) || o.id || ""), v = ((Vt = o.item) == null ? void 0 : Vt.transform) || {}, w = `${c.key}:${x}:${l}:${d}:${Number(v.du || 0).toFixed(6)}:${Number(v.dv || 0).toFixed(6)}:${Number(v.rot_deg || 0).toFixed(3)}:${Number(v.scale || 1).toFixed(4)}`, k = g._liveEraserPreviewCanvasCache instanceof Map ? g._liveEraserPreviewCanvasCache : g._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (k.has(w)) return k.get(w);
    const N = W(Math.floor(Number(((Mt = c.bounds) == null ? void 0 : Mt.minX) || 0)), 0, Math.max(0, l - 1)), M = W(Math.floor(Number(((U = c.bounds) == null ? void 0 : U.minY) || 0)), 0, Math.max(0, d - 1)), H = W(Math.ceil(Number(((et = c.bounds) == null ? void 0 : et.maxX) || 0)), N, Math.max(0, l - 1)), B = W(Math.ceil(Number(((bt = c.bounds) == null ? void 0 : bt.maxY) || 0)), M, Math.max(0, d - 1)), J = Math.max(1, H - N + 1), $ = Math.max(1, B - M + 1), Z = ci(l, d, { readback: !0 });
    Z.ctx.clearRect(0, 0, l, d), Z.ctx.drawImage(i, 0, 0);
    const nt = Z.ctx.getImageData(N, M, J, $);
    Z.ctx.save(), Z.ctx.globalCompositeOperation = "destination-out", Z.ctx.drawImage(c.surface.canvas, 0, 0), Z.ctx.restore();
    const vt = Z.ctx.getImageData(N, M, J, $);
    let rt = !1;
    for (let Pt = 0; Pt < J * $; Pt += 1) {
      const Ut = nt.data[Pt * 4 + 3], $t = vt.data[Pt * 4 + 3];
      if (Ut > $t) {
        rt = !0;
        break;
      }
    }
    return rt ? (k.size > 64 && k.clear(), k.set(w, Z.canvas), Z.canvas) : (k.set(w, i), i);
  }
  function Bc(i, o = null) {
    const c = ut((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.bbox) || null;
    if (!c || !l) return null;
    const d = Uc(i, o);
    if (!d || !(d.complete || d.width || d.naturalWidth)) return null;
    const { width: m, height: x } = wh(), v = (i == null ? void 0 : i.transform) || {}, w = [
      c,
      m,
      x,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      v.du,
      v.dv,
      v.rot_deg,
      v.scale,
      li()
    ].join(":"), k = Ce.get(w);
    if (k) return k;
    Ce.size > 64 && Ce.clear();
    const N = document.createElement("canvas");
    N.width = m, N.height = x;
    const M = N.getContext("2d");
    if (!M) return null;
    const H = Number(l.u0 || 0) * m, B = Number(l.v0 || 0) * x, J = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * m), $ = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * x), Z = H + J * 0.5 + Number(v.du || 0) * m, nt = B + $ * 0.5 + Number(v.dv || 0) * x, vt = Number(v.rot_deg || 0) * Pe, rt = Math.max(0.01, Number(v.scale || 1));
    for (const mt of [-m, 0, m])
      M.save(), M.translate(Z + mt, nt), M.rotate(vt), M.scale(rt, rt), M.drawImage(d, -J * 0.5, -$ * 0.5, J, $), M.restore();
    return Ce.set(w, N), N;
  }
  function Ph() {
    return To(h, {
      selectedId: g.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Ch(i) {
    return xd(
      h,
      (o, c, l) => jc(l || o),
      { scene: i }
    );
  }
  function Gc(i, o, c, l, d = "modal_object_view") {
    if (!i || !o || !c) return !1;
    String((c == null ? void 0 : c.mode) || "");
    const m = !!l && !!l.complete && Number(l.naturalWidth || l.width || 0) > 1 && Number(l.naturalHeight || l.height || 0) > 1;
    if (Zc(o, c))
      return Vh(
        o,
        c,
        m && g.showPanorama ? l : null,
        `${d}_bg_gl`
      );
    const v = Jc(), w = Qc(v), k = g.showObjects ? el() : Yo([]), M = yu({
      stateRevision: [
        d,
        m ? String(l.currentSrc || l.src || "") : "no_bg",
        m ? Number(l.naturalWidth || l.width || 0) : 0,
        m ? Number(l.naturalHeight || l.height || 0) : 0,
        Array.isArray(w) ? w.map(($) => `${String(($ == null ? void 0 : $.assetId) || "")}:${String(($ == null ? void 0 : $.revision) || "")}`).join(",") : "none",
        k.length ? k.map(($) => `${String(($ == null ? void 0 : $.id) || "")}:${String(($ == null ? void 0 : $.revision) || "")}:${Number(($ == null ? void 0 : $.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && g.showPanorama ? l : null,
      backgroundRevision: m ? `${d}:bg` : "",
      coverageDeg: en(h.coverage),
      scene: v,
      textures: w,
      paintSource: null,
      paintRevision: "",
      rasterEntries: k,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), H = _t;
    if (!H.syncState(M)) return !1;
    const J = H.renderToTarget(`${d}_direct`, c, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return J ? (i.drawImage(J, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function Uo(i, o = "sticker.png") {
    const c = new FormData();
    c.append("image", i), c.append("type", "input"), c.append("subfolder", "panorama_stickers");
    const l = await Ke.fetchApi("/upload/image", { method: "POST", body: c });
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
  async function Bo(i, o) {
    const c = await new Promise((v) => i.toBlob(v, "image/png")), l = new FormData();
    l.append("image", c, o), l.append("type", "temp"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const d = await Ke.fetchApi("/upload/image", { method: "POST", body: l });
    if (!d || d.status !== 200) throw new Error(`upload failed (${d == null ? void 0 : d.status})`);
    const m = await d.json(), x = String((m == null ? void 0 : m.name) || "").trim();
    if (!x) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: x,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let Go = null, ra = !1;
  function Ah() {
    const i = Qu(h.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const o = h.painting_layer, c = Ir();
    return !o || typeof o != "object" || String(o.revision || "") !== c || i.totalPaintCount > 0 && !o.paint || i.totalMaskCount > 0 && !o.mask;
  }
  function Ko() {
    const i = String(t.id ?? "0"), o = ki.get(i);
    if (ra && o) return o;
    const c = (async () => {
      var m, x, v, w, k, N, M, H, B, J, $, Z;
      const l = Ir(), d = Qu(h.painting);
      if (d.totalPaintCount <= 0 && d.totalMaskCount <= 0) {
        h.painting_layer !== null && (h.painting_layer = null, Go = l, Sn());
        return;
      }
      if (Go !== l && !ra) {
        ra = !0;
        try {
          la();
          const nt = ln(!1), vt = ((x = (m = g.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : x.call(m, nt)) || null, rt = ((v = vt == null ? void 0 : vt.displayPaint) == null ? void 0 : v.canvas) || null, mt = ((w = vt == null ? void 0 : vt.committedMask) == null ? void 0 : w.canvas) || null, Dt = Math.max(1, Number(((k = vt == null ? void 0 : vt.descriptor) == null ? void 0 : k.width) || (rt == null ? void 0 : rt.width) || (mt == null ? void 0 : mt.width) || 2048)), Vt = Math.max(1, Number(((N = vt == null ? void 0 : vt.descriptor) == null ? void 0 : N.height) || (rt == null ? void 0 : rt.height) || (mt == null ? void 0 : mt.height) || 1024));
          (!rt && d.totalPaintCount > 0 || !mt && d.totalMaskCount > 0) && ((!g._paintLayerSyncBlankSurface || Number(((M = g._paintLayerSyncBlankSurface.canvas) == null ? void 0 : M.width) || 0) !== Dt || Number(((H = g._paintLayerSyncBlankSurface.canvas) == null ? void 0 : H.height) || 0) !== Vt) && (g._paintLayerSyncBlankSurface = ci(Dt, Vt)), g._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Dt, Vt));
          const Mt = rt || d.totalPaintCount > 0 && ((B = g._paintLayerSyncBlankSurface) == null ? void 0 : B.canvas) || null, U = mt || d.totalMaskCount > 0 && ((J = g._paintLayerSyncBlankSurface) == null ? void 0 : J.canvas) || null;
          if (!Mt && !U) return;
          let et = null, bt = null;
          const Pt = [];
          if (d.totalPaintCount > 0) {
            et = await Bo(Mt, `pano_paint_${i}.png`);
            for (const Ut of nt) {
              const $t = String(Ut || "").trim();
              if (!$t) continue;
              const zt = ((Z = ($ = g.paintEngine) == null ? void 0 : $.getGroupDisplayCanvas) == null ? void 0 : Z.call($, $t)) || null;
              if (!zt) continue;
              const qt = $t.replace(/[^a-zA-Z0-9_-]+/g, "_"), Gt = await Bo(zt, `pano_group_${i}_${qt}.png`);
              Gt && Pt.push({
                id: $t,
                actionGroupId: $t,
                image: Gt
              });
            }
          }
          d.totalMaskCount > 0 && (bt = await Bo(U, `pano_mask_${i}.png`)), l === Ir() && (h.painting_layer = {
            paint: et,
            mask: bt,
            groups: Pt,
            revision: l
          }, Go = l, Sn());
        } catch (nt) {
          throw nt;
        } finally {
          ra = !1;
        }
      }
    })();
    return ki.set(i, c), c.finally(() => {
      ki.get(i) === c && ki.delete(i);
    }), c;
  }
  function ia() {
    const i = o_(t, "pano_input_images", ue, () => yt());
    if (i) return i;
    const o = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((x) => String((x == null ? void 0 : x.name) || "")) : [], c = o.includes("erp_image"), l = o.includes("bg_erp");
    let d = [];
    return r && (c || l) ? d = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : d = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], nf(t, d, () => yt(), `background:${d.join("|")}`);
  }
  function Kc(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Ih() {
    if (!It.hasPresentedFrame) return "boot";
    let i = !1, o = !1;
    if (g.showPanorama) {
      const c = ia();
      i = !!c && !Kc(c);
    }
    if (g.showObjects) {
      const c = Array.isArray(h.stickers) ? h.stickers : [];
      for (const l of c) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const d = jc(l);
        if (d && !Kc(d)) {
          o = !0;
          break;
        }
      }
    }
    return i && o ? "mixed" : i ? "background" : o ? "stickers" : "";
  }
  function Ar() {
    const i = new Set(
      (h.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(h.assets || {}).forEach((o) => {
      i.has(o) || (delete h.assets[o], ue.delete(o));
    });
  }
  function Wc(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(W(i.y, -1, 1))
    };
  }
  function Wo(i, o = null) {
    const { lon: c, lat: l } = Wc(i), d = Qn();
    let m = d.x + (c / (2 * Math.PI) + 0.5) * d.w;
    const x = d.y + (0.5 - l / Math.PI) * d.h;
    if (o !== null) {
      for (; m - o > d.w / 2; ) m -= d.w;
      for (; m - o < -d.w / 2; ) m += d.w;
    }
    return { x: m, y: x, z: 1 };
  }
  function aa(i) {
    const o = Mn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let c = Ln(0, 1, 0);
    Math.abs(_n(o, c)) > 0.999 && (c = Ln(0, 0, 1));
    const l = Vr(Ta(c, o)), d = Vr(Ta(o, l)), m = Math.tan(W(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * Pe), x = Math.tan(W(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * Pe), v = Number(i.rot_deg || i.roll_deg || 0) * Pe, w = Math.cos(v), k = Math.sin(v);
    return {
      centerDir: o,
      right: l,
      up: d,
      tanX: m,
      tanY: x,
      cr: w,
      sr: k
    };
  }
  function tr(i, o, c) {
    const l = o * i.cr - c * i.sr, d = o * i.sr + c * i.cr;
    return Vr(Ea(Ea(i.centerDir, Da(i.right, l)), Da(i.up, d)));
  }
  function Yc(i) {
    const o = aa(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: d }) => tr(o, l * o.tanX, d * o.tanY));
  }
  function Eh(i, o, c) {
    const l = aa(i), d = (o * 2 - 1) * l.tanX, m = (1 - c * 2) * l.tanY;
    return tr(l, d, m);
  }
  function qc(i) {
    const o = (i == null ? void 0 : i.bbox) || null, c = (i == null ? void 0 : i.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(c.du || 0)) % 1 + 1) % 1,
      v: W((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(c.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Dh(i) {
    var w, k, N, M;
    const o = (i == null ? void 0 : i.bbox) || null;
    if (!o) return [];
    const c = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((w = i == null ? void 0 : i.transform) == null ? void 0 : w.scale) || 1)), d = Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.rot_deg) || 0), m = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.du) || 0), x = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((H) => Ji(Qi(H, c, l, d), m, x));
  }
  function Th(i) {
    const o = ut((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), c = (i == null ? void 0 : i.transform) || {}, l = (i == null ? void 0 : i.bbox) || {}, d = `${o}:${g.mode}:${li()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${c.du}:${c.dv}:${c.rot_deg}:${c.scale}`;
    if (g.mode === "frame") {
      const m = we();
      return `${d}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}`;
    }
    return `${d}:view:${Math.round(Number(g.viewYaw || 0) * 100)}:${Math.round(Number(g.viewPitch || 0) * 100)}:${Math.round(Number(g.viewFov || 0) * 100)}:${Math.round(Number((P == null ? void 0 : P.width) || 0))}:${Math.round(Number((P == null ? void 0 : P.height) || 0))}`;
  }
  function Lh(i) {
    const o = String((i == null ? void 0 : i.id) || ""), l = [
      Ae(i) ? "sticker" : "item",
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
      const d = we();
      return `${l}:frame:${String((d == null ? void 0 : d.id) || "")}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}:${Math.round(0)}`;
    }
    return `${l}:view:${Math.round(Number(g.viewYaw || 0) * 100)}:${Math.round(Number(g.viewPitch || 0) * 100)}:${Math.round(Number(g.viewFov || 0) * 100)}:${Math.round(Number((P == null ? void 0 : P.width) || 0))}:${Math.round(Number((P == null ? void 0 : P.height) || 0))}`;
  }
  function Rh() {
    var o;
    const i = String(((o = h.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return i === "draft" ? g.hqFrames && g.hqFrames > 0 ? [28, 20] : g.interaction ? [12, 9] : [20, 14] : i === "high" ? g.hqFrames && g.hqFrames > 0 ? [48, 36] : g.interaction ? [20, 14] : [36, 26] : g.hqFrames && g.hqFrames > 0 ? [40, 30] : g.interaction ? [16, 12] : [28, 20];
  }
  function Xc() {
    var i;
    return !!C && !!((i = _t == null ? void 0 : _t.isSupported) != null && i.call(_t));
  }
  function Zc(i, o) {
    return !Xc() || e !== "stickers" && e !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((P == null ? void 0 : P.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((P == null ? void 0 : P.height) || 0));
  }
  function Jc() {
    return g.showObjects ? Ph() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Qc(i) {
    return !g.showObjects || !Array.isArray(i == null ? void 0 : i.stickers) || i.stickers.length === 0 ? [] : Ch(i);
  }
  function tl() {
    var i, o;
    return ((o = (i = g.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : o.call(i)) || null;
  }
  function Oh() {
    return tl() ? `${il()}:mask_display` : "";
  }
  function Yo(i) {
    if (!g.showMask) return i;
    const o = tl();
    if (!o) return i;
    const c = Oh(), l = i.reduce((d, m) => Math.max(d, Number((m == null ? void 0 : m.zIndex) || 0)), -1);
    return i.push({
      id: "mask_display",
      source: o,
      revision: c,
      zIndex: l + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function el() {
    var l, d;
    const i = me(!0), o = Sh(), c = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const x = String(m.actionGroupId || m.id || "");
        if (!x) continue;
        const v = ((d = (l = g.paintEngine) == null ? void 0 : l.getGroupDisplayCanvas) == null ? void 0 : d.call(l, x)) || null;
        if (!v) continue;
        c.push({
          id: `paint_group:${x}`,
          source: v,
          revision: `${il()}:${x}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const x = m.item || null, v = ut((x == null ? void 0 : x.id) || m.id || "");
        if (!v) continue;
        const w = Bc(x, () => yt());
        if (!w) continue;
        const k = Nh(w, m, o), N = (x == null ? void 0 : x.transform) || {};
        c.push({
          id: `raster:${v}`,
          source: k,
          revision: [
            Ir(),
            (o == null ? void 0 : o.key) || "",
            v,
            Number(N.du || 0).toFixed(6),
            Number(N.dv || 0).toFixed(6),
            Number(N.rot_deg || 0).toFixed(3),
            Number(N.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (x == null ? void 0 : x.visible) !== !1
        });
      }
    }
    return Yo(c);
  }
  function Fh(i, o = "modal_bg_gl") {
    const c = Jc(), l = Qc(c), d = !!i && !!i.complete && Number(i.naturalWidth || i.width || 0) > 1 && Number(i.naturalHeight || i.height || 0) > 1, m = d ? [
      String(i.currentSrc || i.src || ""),
      Number(i.naturalWidth || i.width || 0),
      Number(i.naturalHeight || i.height || 0)
    ].join("|") : "none", x = g.showObjects ? el() : Yo([]), v = null, w = [
      o,
      m,
      Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((k) => String((k == null ? void 0 : k.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((k) => `${String((k == null ? void 0 : k.assetId) || "")}:${String((k == null ? void 0 : k.revision) || "")}`).join(",") : "none",
      x.length ? x.map((k) => `${String((k == null ? void 0 : k.id) || "")}:${String((k == null ? void 0 : k.revision) || "")}:${Number((k == null ? void 0 : k.zIndex) || 0)}`).join(",") : "paint:none",
      g.showPanorama ? "panorama:1" : "panorama:0",
      g.showObjects ? "objects:1" : "objects:0",
      g.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: yu({
        stateRevision: w,
        backgroundSource: d ? i : null,
        backgroundRevision: d ? `${o}:${m}` : "",
        coverageDeg: en(h.coverage),
        scene: c,
        textures: l,
        paintSource: v,
        paintRevision: "",
        rasterEntries: x,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: d || l.length > 0 || x.length > 0
    };
  }
  function qo() {
    if (!C) return;
    const i = C.getContext("webgl2");
    if (i)
      i.viewport(0, 0, C.width, C.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const o = C.getContext("2d");
      o && (o.clearRect(0, 0, C.width, C.height), o.fillStyle = "#070707", o.fillRect(0, 0, C.width, C.height));
    }
    It.backgroundWasVisible = !1, It.backgroundDirty = !1;
  }
  function Vh(i, o, c, l = "modal_bg_gl") {
    var k;
    if (!Zc(i, o)) return !1;
    if (!It.backgroundDirty && It.backgroundWasVisible) return !0;
    const { descriptor: d, hasContent: m } = Fh(c, l);
    if (!m || !_t.syncState(d))
      return qo(), !1;
    const v = _t.renderToTarget("modal_pano", o, {
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), w = (k = C == null ? void 0 : C.getContext) == null ? void 0 : k.call(C, "2d");
    return !v || !w ? (qo(), !1) : (w.clearRect(0, 0, C.width, C.height), w.drawImage(v, 0, 0, C.width, C.height), It.backgroundWasVisible = !0, It.backgroundDirty = !1, !0);
  }
  function Hh(i = !1) {
    const o = P.width, c = P.height, l = Qn();
    if (T.globalAlpha = 1, T.lineWidth = 1, i || (T.fillStyle = "#070707", T.fillRect(0, 0, o, c), T.fillStyle = "#070707", T.fillRect(l.x, l.y, l.w, l.h)), la(), Gc(
      T,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      ia(),
      "modal_unwrap"
    ), g.showGrid && !g.fullscreen) {
      T.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const x = l.x + l.w * m / 16;
        T.beginPath(), T.moveTo(x, l.y), T.lineTo(x, l.y + l.h), T.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const x = l.y + l.h * m / 8;
        T.beginPath(), T.moveTo(l.x, x), T.lineTo(l.x + l.w, x), T.stroke();
      }
      T.strokeStyle = "rgba(250, 250, 250, 0.86)", T.lineWidth = 1.2, T.beginPath(), T.moveTo(l.x, l.y + l.h / 2), T.lineTo(l.x + l.w, l.y + l.h / 2), T.stroke(), T.fillStyle = "rgba(250, 250, 250, 0.42)", T.font = "500 11px Geist, sans-serif", T.textAlign = "center";
      const d = l.y + l.h * 0.57;
      T.fillText("Left", l.x + l.w * 0.25, d), T.fillText("Front", l.x + l.w * 0.5, d), T.fillText("Right", l.x + l.w * 0.75, d), T.fillText("Back", l.x + 38, d), T.fillText("Back", l.x + l.w - 38, d);
    }
  }
  function nl(i, o, c = 1) {
    let l = !1;
    T.strokeStyle = o, T.lineWidth = c, T.beginPath();
    for (const d of i) {
      const m = oi(d);
      if (!m) {
        l = !1;
        continue;
      }
      l ? T.lineTo(m.x, m.y) : (T.moveTo(m.x, m.y), l = !0);
    }
    T.stroke();
  }
  function zh(i = !1) {
    const o = P.width, c = P.height;
    if (i || (Xc() ? T.clearRect(0, 0, o, c) : (T.fillStyle = "#070707", T.fillRect(0, 0, o, c))), la(), Gc(
      T,
      { x: 0, y: 0, w: o, h: c },
      {
        mode: "panorama",
        yawDeg: g.viewYaw,
        pitchDeg: g.viewPitch,
        fovDeg: g.viewFov,
        coverageDeg: en(h.coverage)
      },
      ia(),
      "modal_pano"
    ), g.showGrid && !g.fullscreen) {
      for (let d = -180; d <= 180; d += 15) {
        const m = [];
        for (let x = -89; x <= 89; x += 4) m.push(Mn(d, x));
        nl(m, "#3f3f46", d % 90 === 0 ? 1.3 : 1);
      }
      for (let d = -75; d <= 75; d += 15) {
        const m = [];
        for (let x = -180; x <= 180; x += 4) m.push(Mn(x, d));
        nl(m, d === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", d === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: Mn(-90, 0) },
        { name: "Front", dir: Mn(0, 0) },
        { name: "Right", dir: Mn(90, 0) },
        { name: "Back", dir: Mn(180, 0) }
      ];
      T.fillStyle = "rgba(250, 250, 250, 0.42)", T.font = "500 11px Geist, sans-serif", T.textAlign = "center", l.forEach((d) => {
        const m = oi(d.dir);
        m && T.fillText(d.name, m.x, m.y + 24);
      });
    }
  }
  function $h(i, o = null, c = null, l = null) {
    if (g.mode === "frame") {
      const d = o || we();
      if (!d) return [];
      const m = c || ui(d);
      return gp(i, d, m);
    }
    return ll(i, l);
  }
  function oa(i, o = null, c = null, l = null, d = null) {
    if (!i) return null;
    if (g.mode === "unwrap") {
      const x = ll([i], d);
      return x[0] ? { x: x[0].x, y: x[0].y, z: 1 } : null;
    }
    const m = ca(i);
    return m ? Vn(m, o, c, l) : null;
  }
  function jh(i, o) {
    const c = String(i.actionGroupId || i.id || "").trim(), l = mn(c, i.layerKind), d = kt(c, i.layerKind, l), m = (d == null ? void 0 : d.centerUv) || Oo(c, i.layerKind, l), x = g.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, v = [], w = g.mode === "frame" ? we() : null, k = w ? ui(w) : null;
    for (const rt of l) {
      const mt = (rt == null ? void 0 : rt.geometry) || null, Dt = (mt == null ? void 0 : mt.geometryKind) === "lasso_fill" ? mt == null ? void 0 : mt.points : (mt == null ? void 0 : mt.processedPoints) || (mt == null ? void 0 : mt.rawPoints) || (mt == null ? void 0 : mt.points) || [], Vt = $h(Dt, w, k, x).filter((et) => Number.isFinite(et == null ? void 0 : et.x) && Number.isFinite(et == null ? void 0 : et.y));
      if (!Vt.length) continue;
      const Mt = er(String((rt == null ? void 0 : rt.toolKind) || "pen")), U = Qe[Mt] || Qe[jn];
      v.push({
        points: Vt,
        closed: String((mt == null ? void 0 : mt.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((rt == null ? void 0 : rt.size) || 10) * Math.max(0.1, Number((U == null ? void 0 : U.sizeScale) ?? 1)) + 10),
        layerKind: String((rt == null ? void 0 : rt.layerKind) || i.layerKind || "paint")
      });
    }
    const N = oa(m, null, w, k, x);
    if (!N) {
      const rt = { visible: !1, kind: "strokeGroup" };
      return g._strokeGeomCache.set(o, rt), rt;
    }
    const H = Ft(d).map((rt) => oa(rt, N.x, w, k, x)).filter((rt) => Number.isFinite(rt == null ? void 0 : rt.x) && Number.isFinite(rt == null ? void 0 : rt.y)).map((rt) => ({ x: Number(rt.x || 0), y: Number(rt.y || 0) }));
    if (H.length < 4) {
      const rt = { visible: !1, kind: "strokeGroup" };
      return g._strokeGeomCache.set(o, rt), rt;
    }
    const B = (rt, mt) => ({
      x: (Number((rt == null ? void 0 : rt.x) || 0) + Number((mt == null ? void 0 : mt.x) || 0)) * 0.5,
      y: (Number((rt == null ? void 0 : rt.y) || 0) + Number((mt == null ? void 0 : mt.y) || 0)) * 0.5,
      a: rt,
      b: mt
    }), J = B(H[0], H[1]), $ = B(H[1], H[2]), Z = B(H[2], H[3]), nt = B(H[3], H[0]), vt = {
      kind: "strokeGroup",
      center: { x: Number(N.x || 0), y: Number(N.y || 0) },
      corners: H,
      edgeMidpoints: [
        { edge: "top", ...J },
        { edge: "right", ...$ },
        { edge: "bottom", ...Z },
        { edge: "left", ...nt }
      ],
      rotateStemBase: { x: J.x, y: J.y },
      rotateHandle: { x: J.x, y: J.y - 30 },
      strokePaths: v,
      visible: !0
    };
    return g._strokeGeomCache.set(o, vt), vt;
  }
  function Uh(i, o) {
    const c = g.mode === "frame" ? we() : null, l = c ? ui(c) : null, d = qc(i), m = g.mode === "unwrap" ? Number((d == null ? void 0 : d.u) || 0) : null, x = oa(d, null, c, l, m), w = Dh(i).map((H) => oa(H, (x == null ? void 0 : x.x) ?? null, c, l, m)).filter((H) => Number.isFinite(H == null ? void 0 : H.x) && Number.isFinite(H == null ? void 0 : H.y));
    if (!Array.isArray(w) || w.length < 4) {
      const H = { visible: !1, kind: "rasterObject" };
      return g._strokeGeomCache.set(o, H), H;
    }
    const k = w.slice(0, 4).map((H) => ({ x: Number((H == null ? void 0 : H.x) || 0), y: Number((H == null ? void 0 : H.y) || 0) })), M = {
      kind: "rasterObject",
      center: {
        x: k.reduce((H, B) => H + Number(B.x || 0), 0) / k.length,
        y: k.reduce((H, B) => H + Number(B.y || 0), 0) / k.length
      },
      corners: k,
      visible: !0
    };
    return g._strokeGeomCache.set(o, M), M;
  }
  function Vn(i, o = null, c = null, l = null) {
    if (g.mode === "frame") {
      const vt = c || we(), rt = l || ui(vt), mt = vt ? cl(vt, i) : null;
      return mt ? {
        x: Number(rt.x || 0) + Number(mt.x || 0) * Number(rt.w || 0),
        y: Number(rt.y || 0) + Number(mt.y || 0) * Number(rt.h || 0),
        z: 1
      } : null;
    }
    if (g.mode === "unwrap") return Wo(i, o);
    const { right: d, up: m, fwd: x } = $o(), v = _n(i, d), w = _n(i, m), k = _n(i, x), N = P.width, M = P.height, H = g.viewFov * Pe, B = 2 * Math.atan(Math.tan(H / 2) * (M / Math.max(N, 1))), J = N / 2 / Math.tan(H / 2), $ = M / 2 / Math.tan(B / 2), Z = Math.max(k, 1e-4), nt = Math.max(N, M) * 2;
    return {
      x: W(N / 2 + v / Z * J, -nt, N + nt),
      y: W(M / 2 - w / Z * $, -nt, M + nt),
      z: Z
    };
  }
  function Bh(i) {
    const o = Mn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), c = g.mode === "frame" ? we() : null, l = c ? ui(c) : null, d = Vn(o, null, c, l);
    if (!d) return { visible: !1 };
    const m = aa(i), v = Yc(i).map((Dt) => Vn(Dt, d.x, c, l)), w = tr(m, 0, m.tanY), k = tr(m, 0, m.tanY + Math.max(m.tanY * 0.43, 0.053)), N = Vn(w, d.x, c, l), M = Vn(k, (N == null ? void 0 : N.x) ?? d.x, c, l), H = ((M == null ? void 0 : M.x) ?? N.x) - N.x, B = ((M == null ? void 0 : M.y) ?? N.y) - N.y, J = Math.hypot(H, B) || 1, $ = {
      x: N.x + H / J * 30,
      y: N.y + B / J * 30
    }, Z = Vn(tr(m, 0, m.tanY), d.x, c, l), nt = Vn(tr(m, m.tanX, 0), d.x, c, l), vt = Vn(tr(m, 0, -m.tanY), d.x, c, l), rt = Vn(tr(m, -m.tanX, 0), d.x, c, l), mt = [
      {
        edge: "top",
        x: Z.x,
        y: Z.y,
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
      corners: v.map((Dt) => ({ x: Dt.x, y: Dt.y })),
      edgeMidpoints: mt,
      rotateStemBase: { x: N.x, y: N.y },
      rotateHandle: $,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function rn(i) {
    if (xe(i)) {
      const d = String(i.actionGroupId || i.id || "").trim(), m = Zd(d, i.layerKind), x = g._strokeGeomCache.get(m);
      return x || (g._strokeGeomCache.size > 256 && g._strokeGeomCache.clear(), jh(i, m));
    }
    if (Ie(i)) {
      const d = Th(i), m = g._strokeGeomCache.get(d);
      return m || (g._strokeGeomCache.size > 256 && g._strokeGeomCache.clear(), Uh(i, d));
    }
    const o = Lh(i), c = g._strokeGeomCache.get(o);
    if (c) return c;
    g._strokeGeomCache.size > 256 && g._strokeGeomCache.clear();
    const l = Bh(i);
    return g._strokeGeomCache.set(o, l), l;
  }
  function sa(i, o, c, l = null) {
    const d = [];
    for (let m = 0; m <= c; m += 1) {
      const x = m / c;
      let v = 0, w = 0;
      o === 0 ? (v = x, w = 0) : o === 1 ? (v = 1, w = x) : o === 2 ? (v = 1 - x, w = 1) : (v = 0, w = 1 - x);
      const k = Eh(i, v, w), N = g.mode === "unwrap" ? Wo(k, l) : oi(k);
      N && d.push(N);
    }
    return d;
  }
  function Gh(i, o) {
    const c = Mn(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = g.mode === "unwrap" ? Wo(c) : null, d = l ? l.x : null, m = g.mode === "pano" ? 28 : 20, x = [
      sa(i, 0, m, d),
      sa(i, 1, m, d),
      sa(i, 2, m, d),
      sa(i, 3, m, d)
    ];
    T.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", T.lineWidth = o ? 2 : 1, T.beginPath();
    let v = !1;
    for (const w of x)
      for (const k of w)
        v ? T.lineTo(k.x, k.y) : (T.moveTo(k.x, k.y), v = !0);
    T.closePath(), T.stroke();
  }
  function Kh() {
    return [...Array.isArray(h.stickers) ? h.stickers : []].sort((o, c) => Number(o.z_index || 0) - Number(c.z_index || 0));
  }
  function rl() {
    return [...Array.isArray(h.stickers) ? h.stickers : []].sort((o, c) => Number(c.z_index || 0) - Number(o.z_index || 0));
  }
  function Xo(i, o = []) {
    if (!(!i || !Array.isArray(o) || o.length < 4)) {
      i.beginPath(), i.moveTo(o[0].x, o[0].y);
      for (let c = 1; c < 4; c += 1) i.lineTo(o[c].x, o[c].y);
      i.closePath();
    }
  }
  function Wh(i, o, c, l) {
    if (Ae(i)) {
      const d = T.globalAlpha;
      T.globalAlpha = ih(i), g.mode === "frame" ? (T.strokeStyle = c ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", T.lineWidth = c ? 2 : 1, Xo(T, o.corners), T.stroke()) : Gh(i, c), T.globalAlpha = d;
      return;
    }
    T.fillStyle = c ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", Xo(T, o.corners), T.fill(), T.strokeStyle = c ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", T.lineWidth = c ? 2.8 : 1.9, Xo(T, o.corners), T.stroke();
  }
  function Yh(i, o, c) {
    T.fillStyle = c, o.corners.forEach((l) => {
      T.beginPath(), T.arc(l.x, l.y, 6.5, 0, Math.PI * 2), T.fill();
    }), xe(i) || (T.strokeStyle = "rgba(250, 250, 250, 0.9)", T.lineWidth = 1.8, T.beginPath(), T.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), T.lineTo(o.rotateHandle.x, o.rotateHandle.y), T.stroke(), T.fillStyle = c, T.beginPath(), T.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), T.fill());
  }
  function qh() {
    var v;
    const [i, o] = Rh(), c = yn(), l = c.length > 1, d = e === "cutout" ? Kh() : G(), m = d.map((w) => `${String((w == null ? void 0 : w.id) || "")}:${Number((w == null ? void 0 : w.z_index) || 0)}`).join("|");
    (!g._sortedItemsCache || g._sortedItemsCache.src !== d || g._sortedItemsCache.orderKey !== m) && (g._sortedItemsCache = {
      src: d,
      orderKey: m,
      sorted: [...d]
    });
    const x = g._sortedItemsCache.sorted;
    for (const w of x) {
      const k = !l && Qd(w);
      if (g.mode === "frame" && !k || !g.showObjects) continue;
      const N = Ae(w), M = Jn(w);
      if (!N)
        continue;
      const H = rn(w);
      if (!(e !== "stickers" && !H.visible) && (Wh(w, H, k, M), k && H.visible)) {
        const B = M ? "#ff4d4f" : N && Me(w) ? "#f59e0b" : "#0070f3";
        Yh(w, H, B);
      }
    }
    if (l) {
      const w = Fo(c);
      if (w != null && w.visible) {
        const k = Vo(c) ? "#ff4d4f" : "#0070f3";
        T.save(), T.strokeStyle = "rgba(255, 255, 255, 0.95)", T.lineWidth = 2, T.setLineDash([6, 4]), T.beginPath(), T.moveTo(w.corners[0].x, w.corners[0].y);
        for (let N = 1; N < w.corners.length; N += 1) T.lineTo(w.corners[N].x, w.corners[N].y);
        T.closePath(), T.stroke(), T.setLineDash([]), T.fillStyle = k, w.corners.forEach((N) => {
          T.beginPath(), T.arc(N.x, N.y, 6.5, 0, Math.PI * 2), T.fill();
        }), T.restore();
      }
    } else
      c.forEach((w) => {
        if (!xe(w) && !Ie(w)) return;
        const k = rn(w);
        if (!(k != null && k.visible)) return;
        const N = Jn(w) ? "#ff4d4f" : "#0070f3";
        T.save(), T.strokeStyle = "rgba(255, 255, 255, 0.95)", T.lineWidth = 2, T.setLineDash([6, 4]), T.beginPath(), T.moveTo(k.corners[0].x, k.corners[0].y);
        for (let M = 1; M < k.corners.length; M += 1) T.lineTo(k.corners[M].x, k.corners[M].y);
        T.closePath(), T.stroke(), T.setLineDash([]), T.fillStyle = N, k.corners.forEach((M) => {
          T.beginPath(), T.arc(M.x, M.y, 6.5, 0, Math.PI * 2), T.fill();
        }), T.restore();
      });
    if (((v = g.interaction) == null ? void 0 : v.kind) === "marquee_select") {
      const w = Sl(g.interaction.start, g.interaction.current);
      T.save(), T.strokeStyle = "rgba(255, 255, 255, 0.9)", T.fillStyle = "rgba(255, 255, 255, 0.08)", T.lineWidth = 1, T.setLineDash([5, 4]), T.beginPath(), T.rect(w.x0, w.y0, w.x1 - w.x0, w.y1 - w.y0), T.fill(), T.stroke(), T.restore();
    }
    g.hqFrames && i >= 40 && o >= 30 && (g.hqFrames -= 1, g.hqFrames > 0 && yt());
  }
  function ca(i) {
    if (!i) return null;
    const o = (Number(i.u || 0) - 0.5) * (2 * Math.PI), c = (0.5 - Number(i.v || 0)) * Math.PI, l = Math.cos(c);
    return Ln(l * Math.sin(o), Math.sin(c), l * Math.cos(o));
  }
  function Xh(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function Zh(i, o, c, l = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Ee(i, "widthScale", 1),
      pressureLike: Ee(i, "pressureLike", 1)
    }, ...l, u: o, v: c };
  }
  function Jh(i, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function Zo(i, o, c = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const l = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", d = /* @__PURE__ */ new WeakMap();
    if (l) {
      let $ = null;
      i.forEach((Z) => {
        const nt = Number((Z == null ? void 0 : Z.u) || 0), vt = Number((Z == null ? void 0 : Z.v) || 0), rt = (nt % 1 + 1) % 1, mt = $ == null ? rt : $ + fn(rt, ($ % 1 + 1) % 1);
        d.set(Z, { x: mt, y: vt }), $ = mt;
      });
    }
    const m = ($) => !$ || typeof $ != "object" ? { x: 0, y: 0 } : d.get($) || Xh($), x = ($, Z, nt, vt = {}) => {
      const rt = l ? (Number(Z) % 1 + 1) % 1 : Number(Z), mt = Zh($, rt, nt, vt);
      return d.set(mt, { x: Number(Z), y: Number(nt) }), mt;
    }, v = ($, Z, nt) => {
      const vt = m($), rt = m(Z);
      return x($, Un(vt.x, rt.x, nt), Un(vt.y, rt.y, nt), {
        t: Un(Number(($ == null ? void 0 : $.t) || 0), Number((Z == null ? void 0 : Z.t) || 0), nt),
        widthScale: Un(Ee($, "widthScale", 1), Ee(Z, "widthScale", 1), nt),
        pressureLike: Un(Ee($, "pressureLike", 1), Ee(Z, "pressureLike", 1), nt)
      });
    };
    if (i.length === 1) {
      const $ = m(i[0]);
      return [x(i[0], $.x, $.y)];
    }
    const w = Jh(o, c), k = ($, Z) => {
      const nt = [0];
      for (let et = 1; et < $.length; et += 1) {
        const bt = m($[et - 1]), Pt = m($[et]);
        nt.push(nt[et - 1] + Math.hypot(Pt.x - bt.x, Pt.y - bt.y));
      }
      const vt = nt[nt.length - 1] || 0;
      if (vt <= 1e-8) {
        const et = $[0], bt = m(et);
        return [x(et, bt.x, bt.y)];
      }
      const rt = [];
      let mt = 0;
      for (let et = 0; et <= vt + 1e-9; et += Z) {
        for (; mt < nt.length - 2 && nt[mt + 1] < et; ) mt += 1;
        const bt = nt[mt], Pt = nt[mt + 1], Ut = Math.max(1e-8, Pt - bt);
        rt.push(v($[mt], $[mt + 1], W((et - bt) / Ut, 0, 1)));
      }
      const Dt = $[$.length - 1], Vt = m(Dt), Mt = rt[rt.length - 1], U = Mt ? m(Mt) : null;
      return (!U || Math.hypot(U.x - Vt.x, U.y - Vt.y) > Z * 0.35) && rt.push(x(Dt, Vt.x, Vt.y)), rt;
    }, N = ($) => {
      if (!Array.isArray($) || $.length < 3) return $ ? $.slice() : [];
      const Z = m($[0]), nt = [x($[0], Z.x, Z.y)];
      for (let mt = 0; mt < $.length - 1; mt += 1) {
        const Dt = $[mt], Vt = $[mt + 1], Mt = m(Dt), U = m(Vt), et = x(
          Dt,
          Mt.x * 0.75 + U.x * 0.25,
          Mt.y * 0.75 + U.y * 0.25,
          {
            t: Number(Dt.t || 0) * 0.75 + Number(Vt.t || 0) * 0.25,
            widthScale: Ee(Dt, "widthScale", 1) * 0.75 + Ee(Vt, "widthScale", 1) * 0.25,
            pressureLike: Ee(Dt, "pressureLike", 1) * 0.75 + Ee(Vt, "pressureLike", 1) * 0.25
          }
        ), bt = x(
          Dt,
          Mt.x * 0.25 + U.x * 0.75,
          Mt.y * 0.25 + U.y * 0.75,
          {
            t: Number(Dt.t || 0) * 0.25 + Number(Vt.t || 0) * 0.75,
            widthScale: Ee(Dt, "widthScale", 1) * 0.25 + Ee(Vt, "widthScale", 1) * 0.75,
            pressureLike: Ee(Dt, "pressureLike", 1) * 0.25 + Ee(Vt, "pressureLike", 1) * 0.75
          }
        );
        nt.push(et, bt);
      }
      const vt = $[$.length - 1], rt = m(vt);
      return nt.push(x(vt, rt.x, rt.y)), nt;
    }, M = k(i, w);
    if (M.length < 3) return M;
    const H = c ? 2 : 1;
    let B = M.slice();
    for (let $ = 0; $ < H; $ += 1) B = N(B);
    return k(B, Math.max(w * 0.75, 55e-5));
  }
  function Ee(i, o, c = 1) {
    const l = Number(i == null ? void 0 : i[o]);
    return Number.isFinite(l) ? Math.max(0, l) : c;
  }
  function Qh(i) {
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
    const l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(i)), l.height = Math.max(1, Math.round(o));
    const d = l.getContext("2d", c.readback ? { willReadFrequently: !0 } : void 0);
    return d && (d.clearRect(0, 0, l.width, l.height), d.imageSmoothingEnabled = !0), { canvas: l, ctx: d };
  }
  function li() {
    const i = ua();
    return `${String(g.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Ir() {
    const i = ua();
    return `${String(g.paintStrokeRevision)}:${String(g.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function il() {
    const i = Lo(), o = Ir();
    return i ? `${o}:${i}` : o;
  }
  function tp() {
    g.paintStrokeRevision += 1, g.paintCompositeRevision += 1;
  }
  function ep() {
    g.paintCompositeRevision += 1;
  }
  function np() {
    g._sortedItemsCache = null, g._strokeGeomCache.clear();
  }
  function al() {
    var i, o;
    g.paintEngineRevisionKey = null, (o = (i = g.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || o.call(i, h), g.paintEngineRevisionKey = li();
  }
  function an() {
    g.objectVisualRevision = Number(g.objectVisualRevision || 0) + 1, np(), It.backgroundDirty = !0, It.dirty = !0;
  }
  function vn({ rebuildPaintEngine: i = !1 } = {}) {
    tp(), an(), i && al();
  }
  function Er() {
    ep(), an();
  }
  function la() {
    var l;
    const i = ua(), o = `${i.width}x${i.height}`;
    g.paintEngineDescriptorKey !== o && (g.paintEngine = Bs(i), g.paintEngineDescriptorKey = o, g.paintEngineRevisionKey = "");
    const c = li();
    g.paintEngineRevisionKey !== c && (g.paintEngineRevisionKey = c, (l = g.paintEngine) == null || l.rebuildCommitted(h));
  }
  function ua() {
    const i = Math.max(1, Number((h == null ? void 0 : h.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function Hn() {
    return ua();
  }
  function rp(i, o, c, l, d = null) {
    const m = Qh(i), x = Ee(o, "widthScale", 1) * Ee(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * c * x) : m.model === "world_angle" ? d ? Math.max(0.5, m.value / Math.max(1e-6, Number(d.hFOV_deg || 90) * Pe) * c * x) : Math.max(0.5, m.value / (2 * Math.PI) * c * x) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * x);
  }
  function ip(i, o, c = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), d = String((o == null ? void 0 : o.toolKind) || "pen"), m = c.preview === !0, x = m ? 0.78 : 1;
    if (i.globalAlpha = d === "marker" ? 0.7 * x : 1, l === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (d === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const v = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, w = m ? Math.max(0.28, Number(v.a ?? 1) * 0.88) : Math.max(0.12, Number(v.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(v.r || 0) * 255)}, ${Math.round(Number(v.g || 0) * 255)}, ${Math.round(Number(v.b || 0) * 255)}, ${w})`;
  }
  function ap(i, o, c) {
    const l = Math.max(0.5, Math.min(c, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (i.beginPath(), i.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), i.fill());
  }
  function op(i, o, c, l, d = {}) {
    if (!i || !Array.isArray(o) || !o.length) return;
    const m = Math.max(l.w, l.h) * 0.25;
    i.save(), ip(i, c, d);
    const x = (v) => ap(i, v, m);
    if (o.length === 1) {
      x(o[0]), i.restore();
      return;
    }
    for (let v = 0; v < o.length - 1; v += 1) {
      const w = o[v], k = o[v + 1];
      if (!w || !k) continue;
      const N = Number(w.x || 0), M = Number(w.y || 0), H = Number(k.x || 0), B = Number(k.y || 0), J = Math.max(0.5, Math.min(m, Number(w.radiusPx || 0.5))), $ = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5)));
      if (!Number.isFinite(N) || !Number.isFinite(M) || !Number.isFinite(H) || !Number.isFinite(B) || !Number.isFinite(J) || !Number.isFinite($)) continue;
      const Z = H - N, nt = B - M, vt = Math.hypot(Z, nt);
      if (!Number.isFinite(vt) || vt < 1e-6) {
        x(w);
        continue;
      }
      if (vt > Math.max(l.w, l.h) * 0.5) continue;
      const rt = Math.max(0.5, Math.min(J, $)), mt = Math.max(0.35, Math.min(rt * 0.4, 2.25)), Dt = Math.max(1, Math.ceil(vt / mt));
      for (let Vt = 0; Vt <= Dt; Vt += 1) {
        const Mt = Vt / Dt;
        x({
          x: Un(N, H, Mt),
          y: Un(M, B, Mt),
          radiusPx: Un(J, $, Mt)
        });
      }
    }
    x(o[o.length - 1]), i.restore();
  }
  function sp(i, o, c, l) {
    op(i, o, c, l, { preview: !1 });
  }
  function cp(i, o, c, l, d) {
    var v, w, k, N;
    if (!i || !Array.isArray(o) || o.length < 3) return;
    const m = "u", x = "v";
    if (i.save(), String((c == null ? void 0 : c.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((c == null ? void 0 : c.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const M = (c == null ? void 0 : c.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(M.r || 0) * 255)}, ${Math.round(Number(M.g || 0) * 255)}, ${Math.round(Number(M.b || 0) * 255)}, ${Number(M.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((v = o[0]) == null ? void 0 : v[m]) || 0) * l.w, Number(((w = o[0]) == null ? void 0 : w[x]) || 0) * l.h);
    for (let M = 1; M < o.length; M += 1)
      i.lineTo(Number(((k = o[M]) == null ? void 0 : k[m]) || 0) * l.w, Number(((N = o[M]) == null ? void 0 : N[x]) || 0) * l.h);
    i.closePath(), i.fill(), i.restore();
  }
  function ol(i) {
    const o = (i == null ? void 0 : i.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function lp(i, o) {
    const c = ol(i);
    return !Array.isArray(c) || !c.length ? [] : c.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: rp(i, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function sl(i, o, c = null) {
    var v, w, k, N;
    if (!(i != null && i.ctx) || !o) return !1;
    const l = c || { w: Number(((v = i.canvas) == null ? void 0 : v.width) || 0), h: Number(((w = i.canvas) == null ? void 0 : w.height) || 0) }, d = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((k = o == null ? void 0 : o.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((N = o == null ? void 0 : o.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill")
      return cp(i.ctx, ol(d), d, l), !0;
    const x = lp(d, l);
    return x.length ? (sp(i.ctx, x, d, l), !0) : !1;
  }
  function up(i, o, c, l = 8) {
    const d = new Uint8Array(o * c), m = [], x = new Int32Array(o * c), v = new Int32Array(o * c);
    for (let w = 0; w < c; w += 1)
      for (let k = 0; k < o; k += 1) {
        const N = w * o + k;
        if (d[N] || i[N] <= l) continue;
        let M = 0, H = 0;
        x[H] = k, v[H] = w, H += 1, d[N] = 1;
        const B = [];
        let J = k, $ = w, Z = k, nt = w;
        for (; M < H; ) {
          const vt = x[M], rt = v[M];
          M += 1, B.push({ x: vt, y: rt }), vt < J && (J = vt), rt < $ && ($ = rt), vt > Z && (Z = vt), rt > nt && (nt = rt);
          const mt = [
            [(vt - 1 + o) % o, rt],
            [(vt + 1) % o, rt],
            [vt, rt - 1],
            [vt, rt + 1]
          ];
          for (const [Dt, Vt] of mt) {
            if (Vt < 0 || Vt >= c) continue;
            const Mt = Vt * o + Dt;
            d[Mt] || i[Mt] <= l || (d[Mt] = 1, x[H] = Dt, v[H] = Vt, H += 1);
          }
        }
        m.push({ pixels: B, minX: J, minY: $, maxX: Z, maxY: nt });
      }
    return m;
  }
  function fp(i, o) {
    const c = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((w) => Number((w == null ? void 0 : w.x) || 0)).filter((w) => Number.isFinite(w)))].sort((w, k) => w - k);
    if (!c.length) return null;
    if (c.length === 1)
      return { startX: c[0], widthPx: 1 };
    let l = -1, d = 0;
    for (let w = 0; w < c.length; w += 1) {
      const k = c[w], M = (w === c.length - 1 ? c[0] + o : c[w + 1]) - k - 1;
      M > l && (l = M, d = w);
    }
    const m = (c[(d + 1) % c.length] + o) % o;
    let x = 1 / 0, v = -1 / 0;
    for (const w of c) {
      const k = (w - m + o) % o;
      x = Math.min(x, k), v = Math.max(v, k);
    }
    return {
      startX: m,
      widthPx: Math.max(1, v - x + 1)
    };
  }
  function dp(i, o, c = {}) {
    var k;
    const l = Number((i == null ? void 0 : i.width) || 0), d = Number((i == null ? void 0 : i.height) || 0), m = (k = i == null ? void 0 : i.getContext) == null ? void 0 : k.call(i, "2d");
    if (!m || l < 1 || d < 1) return [];
    const x = m.getImageData(0, 0, l, d), v = new Uint8Array(l * d);
    for (let N = 0; N < v.length; N += 1) v[N] = x.data[N * 4 + 3];
    return up(v, l, d, 8).map((N, M) => {
      const H = fp(N, l);
      if (!H) return null;
      const B = Number(H.widthPx || 0), J = N.maxY - N.minY + 1, $ = Number(H.startX || 0), Z = document.createElement("canvas");
      Z.width = B, Z.height = J;
      const nt = Z.getContext("2d");
      if (!nt) return null;
      const vt = nt.createImageData(B, J);
      return N.pixels.forEach(({ x: rt, y: mt }) => {
        const Dt = (mt * l + rt) * 4, Vt = (Number(rt || 0) - $ + l) % l, Mt = ((mt - N.minY) * B + Vt) * 4;
        vt.data[Mt + 0] = x.data[Dt + 0], vt.data[Mt + 1] = x.data[Dt + 1], vt.data[Mt + 2] = x.data[Dt + 2], vt.data[Mt + 3] = x.data[Dt + 3];
      }), nt.putImageData(vt, 0, 0), {
        id: Hr("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((c == null ? void 0 : c.z_index) || 0) + M * 1e-3,
        locked: (c == null ? void 0 : c.locked) === !0,
        bbox: {
          u0: 0,
          v0: N.minY / d,
          u1: B / l,
          v1: (N.maxY + 1) / d
        },
        rasterDataUrl: Z.toDataURL("image/png"),
        transform: {
          du: $ / l,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function cl(i, o) {
    if (!i || !o) return null;
    const c = aa(i), l = _n(o, c.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const d = _n(o, c.right) / l, m = _n(o, c.up) / l, x = d * c.cr + m * c.sr, v = -d * c.sr + m * c.cr;
    return {
      x: (x / Math.max(1e-6, c.tanX) + 1) * 0.5,
      y: (1 - v / Math.max(1e-6, c.tanY)) * 0.5
    };
  }
  function hp(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (g.mode === "unwrap") {
      const c = Qn();
      return i.map((l) => ({
        x: c.x + Number(l.u || 0) * c.w,
        y: c.y + Number(l.v || 0) * c.h
      }));
    }
    const o = i.map((c) => oi(ca(c))).filter(Boolean);
    return o.every((c) => Number(c.z || 0) > 0) ? o.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function ll(i, o = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (g.mode === "unwrap") {
      const l = Qn();
      return i.map((d) => {
        const m = (Number(d.u || 0) % 1 + 1) % 1, x = o == null ? m : Number(o || 0) + fn(m, o);
        return {
          x: l.x + x * l.w,
          y: l.y + Number(d.v || 0) * l.h
        };
      });
    }
    const c = i.map((l) => oi(ca(l))).filter(Boolean);
    return c.every((l) => Number(l.z || 0) > 0) ? c.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function pp(i, o, c) {
    return !Array.isArray(i) || i.length < 3, [];
  }
  function gp(i, o, c) {
    if (!Array.isArray(i) || i.length < 1 || !o || !c) return [];
    const l = [];
    for (const d of i) {
      const m = ca(d), x = cl(o, m);
      x && l.push({
        x: Number(c.x || 0) + Number(x.x || 0) * Number(c.w || 0),
        y: Number(c.y || 0) + Number(x.y || 0) * Number(c.h || 0)
      });
    }
    return l;
  }
  function mp() {
    return ia(), !1;
  }
  function yp() {
    var w, k;
    if (((w = g.interaction) == null ? void 0 : w.kind) !== "paint_lasso_fill") return;
    const i = g.interaction.stroke, o = (k = i == null ? void 0 : i.geometry) == null ? void 0 : k.points;
    let c;
    if (g.mode === "frame") {
      const N = we();
      c = pp(o, N);
    } else
      c = hp(o);
    if (!Array.isArray(c) || c.length < 3) return;
    const l = String((i == null ? void 0 : i.layerKind) || "") === "mask", d = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(d.r || 0) * 255), x = Math.round(Number(d.g || 0) * 255), v = Math.round(Number(d.b || 0) * 255);
    T.save(), T.beginPath(), T.moveTo(Number(c[0].x || 0), Number(c[0].y || 0));
    for (let N = 1; N < c.length; N++) T.lineTo(Number(c[N].x || 0), Number(c[N].y || 0));
    T.closePath(), l ? (T.lineWidth = 2, T.setLineDash([6, 6]), T.lineDashOffset = 0, T.strokeStyle = "rgba(0,0,0,0.96)", T.stroke(), T.lineDashOffset = -6, T.strokeStyle = "rgba(255,255,255,0.96)", T.stroke(), T.setLineDash([]), T.lineDashOffset = 0) : (T.lineWidth = 1.5, T.setLineDash([6, 4]), T.strokeStyle = `rgba(${m},${x},${v},1)`, T.stroke(), T.setLineDash([])), T.restore();
  }
  function vp() {
    g.mode === "frame" ? mp() : g.mode === "unwrap" ? Hh(!1) : zh(!1), qh(), yp(), _.fovValue = `${Math.round(g.viewFov)}°`, Bt(), It.hasPresentedFrame || (It.hasPresentedFrame = !0, C.style.opacity = "1");
    const i = Ih();
    i ? (E == null || E.removeAttribute("data-stage-ready"), E == null || E.setAttribute("data-stage-loading-kind", i)) : (E == null || E.setAttribute("data-stage-ready", ""), E == null || E.removeAttribute("data-stage-loading-kind"));
  }
  function bp(i = g.interaction) {
    if (e !== "stickers" || g.mode !== "pano") return !1;
    const o = String((i == null ? void 0 : i.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function _p() {
    t.__panoLiveStateOverride = h, t.__panoLivePaintSurface = Zi();
  }
  function yt(i = {}) {
    var v, w, k, N, M, H, B, J, $, Z;
    const o = !!i.localOnly, c = i.externalSync === !0, l = String(i.cause || ""), d = String(((v = g.interaction) == null ? void 0 : v.kind) || "");
    (!o || d === "view" || d === "pan_frame" || bp() || !!((w = g.viewTween) != null && w.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (It.backgroundDirty = !0), o && ni() && (g.livePaintInteractionRevision += 1, It.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (zo(), na()), _p(), c && ((N = (k = t.__panoDomPreview) == null ? void 0 : k.requestDraw) == null || N.call(k), (M = t.setDirtyCanvas) == null || M.call(t, !0, !1)), c && !o && ((B = (H = t.graph) == null ? void 0 : H.setDirtyCanvas) == null || B.call(H, !0, !0), (Z = ($ = (J = pn) == null ? void 0 : J.canvas) == null ? void 0 : $.setDirty) == null || Z.call($, !0, !0)), It.dirty = !0;
  }
  function ul() {
    const i = P.getBoundingClientRect(), o = Math.max(2, Math.round(i.width)), c = Math.max(2, Math.round(i.height));
    return P.width !== o || P.height !== c || C.width !== o || C.height !== c ? (P.width = o, P.height = c, C.width = o, C.height = c, It.backgroundDirty = !0, It.dirty = !0, e === "cutout" && (It.pendingStableLayoutFrames = Math.max(Number(It.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Jo(i = performance.now()) {
    var o;
    if (It.running) {
      if (It.lastTickTs = i, g.outputPreviewAnim !== g.outputPreviewAnimTo) {
        const c = Math.max(1, Number(g.outputPreviewAnimDurationMs)), l = W((i - Number(g.outputPreviewAnimStartTs || 0)) / c, 0, 1), m = g.outputPreviewAnimTo > g.outputPreviewAnimFrom ? Ib(l) : Eb(l);
        g.outputPreviewAnim = Un(g.outputPreviewAnimFrom, g.outputPreviewAnimTo, m), It.dirty = !0, l >= 1 && (g.outputPreviewAnim = g.outputPreviewAnimTo);
      }
      if ((o = g.viewTween) != null && o.active) {
        const c = g.viewTween, l = W((i - c.startTs) / c.durationMs, 0, 1), d = Ab(l);
        g.viewYaw = je(c.startYaw + c.deltaYaw * d), g.viewPitch = c.startPitch + (c.targetPitch - c.startPitch) * d, g.viewFov = c.startFov + (c.targetFov - c.startFov) * d, It.backgroundDirty = !0, It.dirty = !0, l >= 1 && (g.viewTween = null);
      }
      if (g.viewInertia.vx = Number(Ne.state.inertia.vx || 0), g.viewInertia.vy = Number(Ne.state.inertia.vy || 0), g.viewInertia.active = !!Ne.state.inertia.active, Ne.stepInertia(i) && (g.viewInertia.vx = Number(Ne.state.inertia.vx || 0), g.viewInertia.vy = Number(Ne.state.inertia.vy || 0), g.viewInertia.active = !!Ne.state.inertia.active, It.backgroundDirty = !0, It.dirty = !0), (It.dirty || i - It.lastSizeCheckTs >= 220) && (ul(), It.lastSizeCheckTs = i), It.pendingStableLayoutFrames > 0 && (It.pendingStableLayoutFrames -= 1, It.dirty = !0), It.dirty) {
        if (It.pendingStableLayoutFrames > 0) {
          It.rafId = requestAnimationFrame(Jo);
          return;
        }
        It.dirty = !1, vp();
      }
      It.rafId = requestAnimationFrame(Jo);
    }
  }
  function xp() {
    It.running = !1, It.rafId && cancelAnimationFrame(It.rafId), It.rafId = 0;
  }
  function fe() {
    r || (g.historyController.commitActionGroup(JSON.stringify(tf(h))), ns());
  }
  function Qo(i) {
    if (r) return;
    const o = i < 0 ? g.historyController.undo() : g.historyController.redo();
    if (ns(), !o) return;
    const c = JSON.parse(o);
    Object.keys(h).forEach((l) => delete h[l]), Object.assign(h, c), g.selectedId = e === "stickers" || e === "cutout" ? h.active.selected_sticker_id : h.active.selected_shot_id, g.selectedIds = g.selectedId ? [g.selectedId] : [], vn(), Ze(), jt(), Sn(), yt({ cause: "cutout_frame" });
  }
  function fl() {
    var c, l;
    const i = Array.isArray((c = g.historyController) == null ? void 0 : c.entries) ? g.historyController.entries : [], o = Number((l = g.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !r && i.length > 1 && o > 0,
      canRedo: !r && i.length > 1 && o >= 0 && o < i.length - 1
    };
  }
  function Ze() {
    Y();
    const i = Ty({
      editor: g,
      swatches: Ya,
      paintColorPopOpen: it ? !it.hidden : !1,
      colorToCss: Nn,
      colorsApproximatelyEqual: qa,
      rgb01ToHsv: As,
      hsv01ToRgb: Cs,
      getBrushPresetIdForTool: er,
      isActiveLassoTool: oh
    });
    if (Object.assign(_.paintDock, i), !i.visible) {
      it && (it.hidden = !0);
      return;
    }
    Nt && (clearTimeout(Nt), Nt = 0), St && (!i.colorEnabled && it && !it.hidden && (Nt = window.setTimeout(() => {
      it.hidden = !0, _.paintDock.colorPopOpen = !1, Nt = 0;
    }, 170)), it && (it.style.setProperty("--picker-hue-color", i.pickerHueColor), it.style.setProperty("--picker-sat", i.pickerSat), it.style.setProperty("--picker-val", i.pickerVal), it.style.setProperty("--picker-hue", i.pickerHue)), ct && (ct.style.left = i.pickerSvLeft, ct.style.top = i.pickerSvTop), q && (q.style.left = i.pickerHueLeft));
  }
  function ts() {
    const i = re();
    i && (g.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: _i(i)
    }, jt());
  }
  function jt() {
    var mt, Dt, Vt, Mt;
    if (a) return;
    h.ui_settings = h.ui_settings || {};
    const i = Dy(h.ui_settings);
    if (s) {
      _.sidePanel = Ly({
        coverage: h.coverage,
        uiSettings: i,
        normalizeCoverageValue: en
      });
      return;
    }
    const o = re(), c = yn(), l = ta();
    c.length > 1 && (g.panelLastValues = g.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), o && l !== "stroke" && (g.panelLastValues = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: Number(o.hFOV_deg || (l === "image" ? 30 : 90)),
      vFOV_deg: Number(o.vFOV_deg || (l === "image" ? 30 : 60)),
      rot_deg: Number(o.rot_deg || 0),
      roll_deg: Number(o.roll_deg || 0),
      aspect_id: _i(o)
    });
    const d = g.panelLastValues || (e === "stickers" || l === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), m = l === "stroke" ? null : o, x = m || d, v = !!m;
    g.panelWasEnabled = v, zo();
    let w = null;
    if (e === "stickers" || e === "cutout") {
      const U = [{ id: "", labelHtml: Is(e === "stickers" ? "No image" : "Nothing selected"), item: null }];
      e === "stickers" ? G().forEach((Pt, Ut) => {
        var qt, Gt;
        const $t = Me(Pt) ? String(Pt.id || hr) : String(((Gt = (qt = h.assets) == null ? void 0 : qt[Pt.asset_id]) == null ? void 0 : Gt.name) || Pt.asset_id || Pt.id), zt = `${Ut + 1}. ${$t}${Me(Pt) && Cr(Pt) ? " (hidden)" : ""}`;
        U.push({ id: Pt.id, labelHtml: Rc({ item: Pt, label: zt, kind: "image" }), item: Pt, kind: "image" });
      }) : Lc().forEach((Pt) => {
        U.push({ id: Pt.item.id, labelHtml: Rc(Pt), item: Pt.item, kind: Pt.kind });
      });
      const et = (m == null ? void 0 : m.id) || "", bt = U.find((Pt) => Pt.id === et) || U[0];
      w = {
        label: "Selection",
        open: !1,
        disabled: U.length <= 1,
        currentLabelHtml: bt.labelHtml,
        items: U.map((Pt) => ({ id: Pt.id, labelHtml: Pt.labelHtml, active: Pt.id === et }))
      };
    }
    const k = [], N = (U, et, bt, Pt, Ut) => {
      const $t = W(Number(x[U] || 0), bt, Pt);
      k.push({
        key: U,
        label: et,
        min: bt,
        max: Pt,
        step: Ut,
        value: $t,
        displayValue: Rb($t),
        fillPct: W(($t - bt) / Math.max(1e-6, Pt - bt) * 100, 0, 100),
        enabled: v && !r
      });
    }, M = [];
    c.length > 1 ? (M.push(`Selected objects: ${c.length}`), M.push("Multi-selection supports z-order and delete.")) : (N("yaw_deg", "Yaw", -180, 180, 0.1), N("pitch_deg", "Pitch", -90, 90, 0.1), N("hFOV_deg", "H FOV", 1, 179, 0.1), N("vFOV_deg", "V FOV", 1, 179, 0.1), e === "stickers" || l === "image" ? N("rot_deg", "Rotation", -180, 180, 0.1) : N("roll_deg", "Roll", -180, 180, 0.1));
    const H = Array.isArray((Dt = (mt = h == null ? void 0 : h.painting) == null ? void 0 : mt.paint) == null ? void 0 : Dt.strokes) ? h.painting.paint.strokes.length : 0, B = Array.isArray((Mt = (Vt = h == null ? void 0 : h.painting) == null ? void 0 : Vt.mask) == null ? void 0 : Mt.strokes) ? h.painting.mask.strokes.length : 0, J = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((U) => String((U == null ? void 0 : U.name) || "")) : [], $ = Xd(
      t,
      J.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), Z = !!String(($ == null ? void 0 : $.src) || "").trim() || Fc("pano_input_images").length > 0, nt = Array.isArray(G()) && G().length > 0 || H > 0, vt = B > 0, rt = [
      { key: "mask", label: "Mask", icon: ze.circle_dashed_tool, visible: !!g.showMask, enabled: vt },
      { key: "objects", label: "Paint / Images", icon: ze.image, visible: !!g.showObjects, enabled: nt },
      { key: "panorama", label: "Panorama", icon: ze.globe, visible: !!g.showPanorama, enabled: Z }
    ].map((U) => ({
      ...U,
      ariaLabel: `Toggle ${U.label.toLowerCase()}`,
      tip: U.visible ? "Hide" : "Show"
    }));
    _.sidePanel = Ry({
      coverage: h.coverage,
      readOnly: r,
      selectionPicker: w,
      enabled: v,
      selectedKind: l,
      selectedItems: c,
      params: k,
      notes: M,
      visibilityRows: rt,
      uiSettings: i,
      normalizeCoverageValue: en
    });
  }
  function fa(i) {
    if (!i) return !1;
    if (String(i.type || "").toLowerCase().startsWith("image/")) return !0;
    const c = String(i.name || "").toLowerCase();
    return c.endsWith(".png") || c.endsWith(".jpg") || c.endsWith(".jpeg") || c.endsWith(".webp") || c.endsWith(".gif") || c.endsWith(".bmp");
  }
  async function dl(i) {
    if (r || e !== "stickers" && e !== "cutout" || !fa(i)) return;
    const o = Fa("asset"), c = URL.createObjectURL(i);
    try {
      const l = await new Promise((x, v) => {
        const w = new Image();
        w.onload = () => x(w), w.onerror = () => v(new Error("image load failed")), w.src = c;
      });
      ue.set(o, l);
      const d = Fa("st");
      h.stickers.push({
        id: d,
        asset_id: o,
        yaw_deg: g.viewYaw,
        pitch_deg: g.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: lr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: Oc()
      }), ea(h.stickers[h.stickers.length - 1]), yl(), fe(), jt(), Bt(), yt();
      const m = (async () => {
        const x = await Uo(i, String(i.name || o));
        (Array.isArray(h.stickers) ? h.stickers : []).filter((k) => String((k == null ? void 0 : k.asset_id) || "") === o).length && (h.assets[o] = x, Ar(), ye(), jt(), Bt(), yt());
      })();
      Mi.set(o, m);
      try {
        await m;
      } finally {
        Mi.delete(o);
      }
    } catch {
      delete h.assets[o], ue.delete(o);
      const l = Array.isArray(h.stickers) ? h.stickers : [], d = l.filter((m) => String((m == null ? void 0 : m.asset_id) || "") === o);
      d.length && (h.stickers = l.filter((m) => String((m == null ? void 0 : m.asset_id) || "") !== o), d.some((m) => {
        var x;
        return String((m == null ? void 0 : m.id) || "") === String(((x = g.selection) == null ? void 0 : x.id) || "");
      }) && ea(null), jt(), Bt(), yt());
    } finally {
      URL.revokeObjectURL(c);
    }
  }
  function hl(i) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const c = (l = o.files) == null ? void 0 : l[0];
      !c || typeof i != "function" || i(c);
    }, o.click();
  }
  function wp() {
    r || e !== "stickers" && e !== "cutout" || hl((i) => {
      dl(i);
    });
  }
  async function Sp(i) {
    var k;
    if (r || e !== "stickers" && e !== "cutout") return;
    const o = re();
    if (!o || !Ae(o) || Me(o) || !fa(i)) return;
    const c = String(o.id || ""), l = String(o.asset_id || ""), d = l ? De(((k = h.assets) == null ? void 0 : k[l]) || null) : null, m = Number(o.vFOV_deg || 0), x = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, v = Fa("asset"), w = URL.createObjectURL(i);
    try {
      const N = await new Promise((H, B) => {
        const J = new Image();
        J.onload = () => H(J), J.onerror = () => B(new Error("image load failed")), J.src = w;
      });
      ue.set(v, N), o.asset_id = v, o.vFOV_deg = lr(
        Number(o.hFOV_deg || 30),
        Number(N.naturalWidth || N.width || 1),
        Number(N.naturalHeight || N.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, an(), fe(), jt(), Bt(), yt();
      const M = (async () => {
        const H = await Uo(i, String(i.name || v));
        (Array.isArray(h.stickers) ? h.stickers : []).some(($) => String(($ == null ? void 0 : $.id) || "") === c && String(($ == null ? void 0 : $.asset_id) || "") === v) && (h.assets[v] = H, Ar(), ye(), jt(), Bt(), yt());
      })();
      Mi.set(v, M);
      try {
        await M;
      } finally {
        Mi.delete(v);
      }
    } catch {
      delete h.assets[v], ue.delete(v);
      const N = (Array.isArray(h.stickers) ? h.stickers : []).find((M) => String((M == null ? void 0 : M.id) || "") === c) || null;
      N && String(N.asset_id || "") === v && (l && d && (h.assets[l] = d), N.asset_id = l, N.vFOV_deg = m, N.crop = x ? { ...x } : null), an(), jt(), Bt(), yt();
    } finally {
      URL.revokeObjectURL(w);
    }
  }
  function kp() {
    if (r) return;
    const i = re();
    !i || !Ae(i) || Me(i) || hl((o) => {
      Sp(o);
    });
  }
  async function Mp() {
    if (r || e !== "stickers") return;
    const i = h.assets && typeof h.assets == "object" ? h.assets : {}, o = Object.entries(i).filter(([, l]) => {
      const d = String((l == null ? void 0 : l.type) || "").toLowerCase(), m = String((l == null ? void 0 : l.value) || "");
      return d === "dataurl" && m.startsWith("data:image");
    });
    if (!o.length) return;
    let c = !1;
    for (const [l, d] of o)
      try {
        const m = String((d == null ? void 0 : d.value) || "");
        if (!m) continue;
        const x = await fetch(m).then((M) => M.blob()), v = String(x.type || "image/png").split("/")[1] || "png", w = String((d == null ? void 0 : d.name) || `${l}.${v}`), k = new File([x], w, { type: x.type || "image/png" }), N = await Uo(k, w);
        h.assets[l] = {
          ...N,
          w: Number((d == null ? void 0 : d.w) || 0),
          h: Number((d == null ? void 0 : d.h) || 0)
        }, c = !0;
      } catch {
      }
    c && (ye(), yt());
  }
  function Np() {
    r || e === "cutout" && (h.shots = [], g.selectedId = null, g.selectedIds = [], g.mode === "frame" && (g.mode = "pano"), g.cutoutAspectOpen = !1, h.active.selected_shot_id = null, fe(), ye(), jt(), yt());
  }
  function Pp() {
    const i = Array.isArray(h.stickers) ? h.stickers : [], o = [];
    for (const c of i)
      Me(c) && (c.visible = !1, o.push(c));
    return o;
  }
  function pl(i, o, c = "Clear") {
    return new Promise((l) => {
      _.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(o || ""),
        confirmLabel: String(c || "Confirm"),
        resolve: l
      };
    });
  }
  async function Cp() {
    var c, l;
    if (r || !await pl(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    h.painting = Oi(null), vn();
    const o = Pp();
    e === "stickers" ? (h.stickers = o, h.assets = {}, g.selectedId = ((c = o[0]) == null ? void 0 : c.id) || null, g.selectedIds = g.selectedId ? [g.selectedId] : [], h.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, Ar()) : (h.stickers = o, h.assets = {}, h.shots = [], g.selectedId = null, g.selectedIds = [], h.active.selected_sticker_id = null, h.active.selected_shot_id = null, g.mode === "frame" && (g.mode = "pano"), g.cutoutAspectOpen = !1, Ar()), fe(), ye(), jt(), Bt(), yt();
  }
  async function Ap(i) {
    var m, x, v, w;
    if (r) return;
    const o = i === "mask" ? "mask" : "paint", c = o === "mask" ? "Mask" : "Paint", l = Tr(o);
    if (!(!l.length && !(((m = g.interaction) == null ? void 0 : m.kind) === "draw" && ((x = g.interaction) == null ? void 0 : x.layerKind) === o) || !await pl(
      `Clear ${c}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${c}`
    ))) {
      if (((v = g.interaction) == null ? void 0 : v.kind) === "draw" && ((w = g.interaction) == null ? void 0 : w.layerKind) === o) {
        const k = Hn();
        k && g.paintEngine.cancelActiveStroke(k), g.interaction = null;
      }
      l.length = 0, h.painting.raster_objects = Xe().filter((k) => String((k == null ? void 0 : k.layerKind) || "paint") !== o), o === "paint" && (X().length = 0), vn(), fe(), ye(), jt(), Bt(), Ze(), yt();
    }
  }
  function Ip() {
    if (r) return;
    const i = re();
    if (!i || !Ae(i) || Me(i)) return;
    const o = JSON.parse(JSON.stringify(i));
    o.id = Fa("st"), o.yaw_deg = je((o.yaw_deg || 0) + 8), o.z_index = Oc(), h.stickers.push(o), h.active.selected_sticker_id = o.id, g.selectedId = o.id, g.selectedIds = [o.id], an(), fe(), ye(), Bt(), jt(), yt();
  }
  function gl() {
    var c, l, d, m, x, v;
    if (r) return;
    const i = yn(), o = re();
    if (!(!o && i.length === 0)) {
      if (i.length > 1) {
        const w = new Set(i.filter((M) => xe(M)).map((M) => String(M.actionGroupId || M.id || ""))), k = new Set(i.filter((M) => Ie(M)).map((M) => ut(M.rasterObjectId || M.id || ""))), N = new Set(i.filter(Ae).map((M) => String(M.id || "")));
        w.size > 0 && (h.painting.paint.strokes = (Array.isArray((l = (c = h.painting) == null ? void 0 : c.paint) == null ? void 0 : l.strokes) ? h.painting.paint.strokes : []).filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || ""))), h.painting.groups = X().filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), vn()), k.size > 0 && (h.painting.raster_objects = Xe().filter((M) => !k.has(String((M == null ? void 0 : M.id) || ""))), Er()), N.size > 0 && (h.stickers = (Array.isArray(h.stickers) ? h.stickers : []).filter((M) => N.has(String((M == null ? void 0 : M.id) || "")) ? Me(M) ? (Cr(M) || (M.visible = !1), !0) : !1 : !0), Ar(), an()), g.selectedId = null, g.selectedIds = [], fe(), ye(), jt(), Bt(), yt();
        return;
      }
      if (xe(o)) {
        const w = String(o.actionGroupId || o.id || "").trim();
        h.painting.paint.strokes = (Array.isArray((m = (d = h.painting) == null ? void 0 : d.paint) == null ? void 0 : m.strokes) ? h.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== w), h.painting.groups = X().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== w), vn(), g.selectedId = null, g.selectedIds = [], fe(), ye(), jt(), Bt(), yt();
        return;
      }
      if (Ie(o)) {
        const w = ut(o.rasterObjectId || o.id || "");
        h.painting.raster_objects = Xe().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== w), Er(), g.selectedId = null, g.selectedIds = [], fe(), ye(), jt(), Bt(), yt();
        return;
      }
      if (e === "stickers" || Ae(o)) {
        if (Me(o)) {
          if (Cr(o)) return;
          o.visible = !1, an(), fe(), ye(), jt(), Bt(), yt();
          return;
        }
        h.stickers = h.stickers.filter((w) => w.id !== o.id), Ar(), an(), g.selectedId = ((x = h.stickers[0]) == null ? void 0 : x.id) || null, g.selectedIds = g.selectedId ? [g.selectedId] : [], h.active.selected_sticker_id = ((v = h.stickers[0]) == null ? void 0 : v.id) || null, fe(), ye(), jt(), Bt(), yt();
        return;
      }
      Np();
    }
  }
  function Ep(i, o) {
    if (!i) return;
    const c = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const H = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(H)) {
        const [$, Z] = H.split(":").map((nt) => Number(nt));
        if (Number.isFinite($) && Number.isFinite(Z)) return $ >= Z;
      }
      const B = Number(i.hFOV_deg || 64), J = Number(i.vFOV_deg || 40);
      return Math.abs(B - J) > 1e-6 ? B >= J : Qs(i) >= 1;
    })();
    let [d, m] = c[String(o)] || c["1:1"];
    d >= m !== l && ([d, m] = [m, d]);
    const x = d / m, v = W(Number(i.hFOV_deg || 64), 1, 179), w = W(Number(i.vFOV_deg || 40), 1, 179), k = Math.sqrt(Math.max(1, v * w)), N = W(k * Math.sqrt(x), 1, 179), M = W(k / Math.sqrt(x), 1, 179);
    i.hFOV_deg = N, i.vFOV_deg = M, i.aspect_id = String(o);
  }
  function Dp(i) {
    if (!i) return;
    const o = Math.max(1, Number(i.hFOV_deg || 90)), c = Math.max(1, Number(i.vFOV_deg || 60));
    i.hFOV_deg = c, i.vFOV_deg = o, i.aspect_id = vr(i);
  }
  function ml() {
    oe().forEach((o, c) => {
      o.type === "sticker" && o.item && (o.item.z_index = c), o.type === "strokeGroup" && o.item && (o.item.z_index = c), o.type === "rasterObject" && o.item && (o.item.z_index = c);
    });
  }
  function Tp() {
    if (r) return;
    const i = yn();
    if (!re() || i.length === 0) return;
    ml();
    const c = oe(), l = new Set(i.map((v) => Ae(v) ? `sticker:${String(v.id || "")}` : Ie(v) ? `rasterObject:${ut(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), d = [], m = [];
    if (c.forEach((v) => {
      var k, N;
      const w = v.type === "sticker" ? `sticker:${String(((k = v.item) == null ? void 0 : k.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((N = v.item) == null ? void 0 : N.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      l.has(w) ? d.push(v) : m.push(v);
    }), !d.length || d[d.length - 1] === c[c.length - 1]) return;
    [...m, ...d].forEach((v, w) => {
      v.type === "sticker" && v.item && (v.item.z_index = w), v.type === "strokeGroup" && v.item && (v.item.z_index = w), v.type === "rasterObject" && v.item && (v.item.z_index = w);
    }), an(), fe(), ye(), Bt(), yt();
  }
  function Lp() {
    if (r) return;
    const i = yn();
    if (!re() || i.length === 0) return;
    ml();
    const c = oe(), l = new Set(i.map((v) => Ae(v) ? `sticker:${String(v.id || "")}` : Ie(v) ? `rasterObject:${ut(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), d = [], m = [];
    if (c.forEach((v) => {
      var k, N;
      const w = v.type === "sticker" ? `sticker:${String(((k = v.item) == null ? void 0 : k.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((N = v.item) == null ? void 0 : N.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      l.has(w) ? d.push(v) : m.push(v);
    }), !d.length || d[0] === c[0]) return;
    [...d, ...m].forEach((v, w) => {
      v.type === "sticker" && v.item && (v.item.z_index = w), v.type === "strokeGroup" && v.item && (v.item.z_index = w), v.type === "rasterObject" && v.item && (v.item.z_index = w);
    }), an(), fe(), ye(), Bt(), yt();
  }
  function Rp() {
    r || (h.projection_model = "pinhole_rectilinear", h.alpha_mode = "straight", f && (h.output_preset = ec(f.value, Number(h.output_preset || 2048))), p && (h.coverage = en(p.value)), y && (h.bg_color = String(y.value || h.bg_color || "#00ff00")), Sn(), t.setDirtyCanvas(!0, !0));
  }
  function Sn() {
    var o;
    if (r) return;
    h.coverage = en(h.coverage);
    const i = JSON.stringify(h);
    b && (b.value = i, (o = b.callback) == null || o.call(b, i));
  }
  function da() {
    h.ui_settings = $b(h.ui_settings), r || Sn();
  }
  function ye() {
    var i;
    r || (Sn(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0));
  }
  function yl() {
    g.primaryTool !== "cursor" && (g.primaryTool = "cursor", Ze(), jt());
  }
  function Dr(i) {
    const o = P.getBoundingClientRect();
    return {
      x: (i.clientX - o.left) / o.width * P.width,
      y: (i.clientY - o.top) / o.height * P.height
    };
  }
  function ha(i) {
    const o = P.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(o.left || 0),
      y: Number(i.clientY) - Number(o.top || 0)
    };
  }
  function vl() {
    return g.mode === "pano" || g.mode === "unwrap";
  }
  function we() {
    return null;
  }
  function ui(i = we()) {
    return null;
  }
  function bl() {
    return !1;
  }
  function bn(i, o = performance.now()) {
    if (g.mode === "unwrap") {
      const m = Qn(), x = (i.x - m.x) / Math.max(1, m.w), v = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (x % 1 + 1) % 1,
        v: W(v, 0, 1),
        t: Number(o || 0)
      };
    }
    const c = jo(i.x, i.y), { lon: l, lat: d } = Wc(c);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: W(0.5 - d / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function zn(i, o, c = performance.now()) {
    return null;
  }
  function Op(i, o) {
    return !1;
  }
  function Fp(i, o) {
    const c = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, c / 2048)
    };
  }
  function er(i) {
    const o = String(i || "").trim();
    return o === "eraser" ? jn : Qe[o] ? o : g.activeBrushPresetId || jn;
  }
  function _l() {
    return (g.primaryTool === "paint" || g.primaryTool === "mask") && (vl() || bl());
  }
  function xl() {
    var i;
    return _l() && ((i = g.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function pa(i, o = !0) {
    const c = Number((i == null ? void 0 : i.x) || 0), l = Number((i == null ? void 0 : i.y) || 0), d = o !== !1, m = g.pointerPos || { x: 0, y: 0, inside: !1 }, x = m.inside !== d || Math.abs(m.x - c) > 0.01 || Math.abs(m.y - l) > 0.01;
    return g.pointerPos = { x: c, y: l, inside: d }, x;
  }
  function Vp() {
    var N, M;
    if (!xl()) return null;
    const i = g.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? g.maskTool : g.paintTool, c = er(o), l = Qe[c] || Qe[jn], d = Number(g.brushSizes[c] ?? 10), m = Math.max(1, d) * Math.max(0.1, Number(l.sizeScale ?? 1)), x = Math.max(3, m * 0.5), v = i === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : on(g.paintColor), w = i === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : W(Math.max(0.16, Number(v.a ?? 1) * 0.3), 0.16, 0.52), k = i === "mask" ? 0.95 : o === "eraser" ? 0.75 : W(Math.max(0.46, Number(v.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: o,
      preset: l,
      radius: x,
      fillStyle: Nn(v, w),
      strokeStyle: Nn(v, k),
      x: Number(((N = g.pointerPos) == null ? void 0 : N.x) || 0),
      y: Number(((M = g.pointerPos) == null ? void 0 : M.y) || 0),
      hotspotX: x,
      hotspotY: x
    };
  }
  function Hp() {
    var H, B, J;
    const i = Vp();
    if (!j) return;
    if (!i) {
      j.style.display = "none";
      return;
    }
    let o = i.radius * 2, c = i.radius * 2, l = "999px", d = 0, m = i.fillStyle, x = "1px solid rgba(222, 222, 222, 0.72)", v = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const w = "rgba(222, 222, 222, 0.72)", k = "rgba(52, 52, 52, 0.72)";
    let N = Number(i.hotspotX ?? o * 0.5), M = Number(i.hotspotY ?? c * 0.5);
    if (i.toolKind === "lasso_fill")
      o = yo, c = yo, l = "0", x = "0", v = "none", N = Pb, M = Cb, m = Tb(i.fillStyle, k, w);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const $ = Math.max(1, Number(((H = i.preset) == null ? void 0 : H.aspect) ?? 1));
      o = Math.max(10, i.radius * 2 * $), c = Math.max(6, i.radius * 2), l = `${Math.min(6, c * 0.42)}px`, d = Number(((J = (B = i.preset) == null ? void 0 : B.angle) == null ? void 0 : J.value) || 0) * yr;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    j.style.display = "block", j.style.width = `${Math.round(o)}px`, j.style.height = `${Math.round(c)}px`, j.style.borderRadius = l, j.style.border = x, j.style.boxShadow = v, j.style.background = m, j.style.backgroundRepeat = "no-repeat", j.style.backgroundPosition = "center", j.style.backgroundSize = "contain", j.style.transform = `translate(${Math.round(i.x - N)}px, ${Math.round(i.y - M)}px) rotate(${d}deg)`;
  }
  function zp() {
    var vt;
    if (!st || !dt) return;
    const i = g.primaryTool === "mask" ? "mask" : "paint", o = i === "mask" ? g.maskTool : g.paintTool;
    if (o === "lasso_fill") return;
    const c = er(o), l = Qe[c] || Qe[jn], d = Number(g.brushSizes[c] ?? 10), m = Math.max(1, d) * Math.max(0.1, Number(l.sizeScale ?? 1)), x = Math.max(6, m * 0.5), v = o === "eraser", w = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : v ? { r: 1, g: 1, b: 1, a: 0.22 } : on(g.paintColor), k = i === "mask" ? Nn(w, 0.22) : v ? "rgba(255,255,255,0.14)" : Nn(w, W(Math.max(0.18, Number(w.a ?? 1) * 0.34), 0.18, 0.56)), N = i === "mask" ? Nn(w, 0.96) : v ? "rgba(255,255,255,0.72)" : Nn(w, W(Math.max(0.56, Number(w.a ?? 1) * 0.96), 0.56, 1));
    let M = x * 2, H = x * 2, B = "999px", J = 0, $ = k;
    const Z = "rgba(222, 222, 222, 0.72)", nt = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      $ = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const rt = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      M = Math.max(16, x * 2 * rt), H = Math.max(10, x * 2), B = `${Math.min(8, H * 0.42)}px`, J = Number(((vt = l == null ? void 0 : l.angle) == null ? void 0 : vt.value) || 0) * yr;
    } else o === "brush" ? $ = `radial-gradient(circle at 50% 50%, ${N} 0%, ${k} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (M = Math.max(18, x * 1.8), H = M, $ = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${N} 43%, ${N} 58%, rgba(0,0,0,0) 59%)`) : v && ($ = "rgba(255,255,255,0.12)");
    dt.style.width = `${Math.round(M)}px`, dt.style.height = `${Math.round(H)}px`, dt.style.borderRadius = B, dt.style.background = $, dt.style.border = `1px solid ${Z}`, dt.style.boxShadow = `0 0 0 1px ${nt}`, dt.style.transform = `rotate(${J}deg)`, lt && (clearTimeout(lt), lt = 0), st.classList.remove("fade-out"), st.classList.add("show");
  }
  function ga() {
    !st || !st.classList.contains("show") || (st.classList.add("fade-out"), lt && clearTimeout(lt), lt = window.setTimeout(() => {
      st.classList.remove("show", "fade-out"), lt = 0;
    }, 180));
  }
  function $p(i, o, c, l) {
    const d = er(o), m = Qe[d] || Qe[jn], x = g.brushSizes[d] ?? 10, v = Math.max(1, x) * Math.max(0.1, m.sizeScale ?? 1), w = Fp(l, v), k = c.map((M) => ({
      ...M,
      t: Number((M == null ? void 0 : M.t) || 0),
      widthScale: Number.isFinite(Number(M == null ? void 0 : M.widthScale)) ? Math.max(0, Number(M.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(M == null ? void 0 : M.pressureLike)) ? Math.max(0, Number(M.pressureLike)) : 1
    })), N = {
      id: Hr(i),
      actionGroupId: Hr("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(g.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(g.mode || "pano") },
      layerKind: i,
      toolKind: o,
      size: v,
      createdAt: Date.now(),
      color: i === "paint" ? { ...g.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: w.radiusModel,
      radiusValue: w.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: k.map((M) => ({ ...M })),
        points: k.map((M) => ({ ...M }))
      }
    };
    return Yu(N, m), Number(m.aspect ?? 1), Number(N.aspect ?? 1), String(N.stampKind || ""), Number(N.size || 0), String(N.radiusModel || ""), Number(N.radiusValue || 0), { ...N.targetSpace }, N;
  }
  function jp(i, o, c, l) {
    const d = c.map((w) => ({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: Number.isFinite(Number(w == null ? void 0 : w.widthScale)) ? Math.max(0, Number(w.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(w == null ? void 0 : w.pressureLike)) ? Math.max(0, Number(w.pressureLike)) : 1
    })), m = er(o), x = Qe[m] || Qe[jn], v = {
      id: Hr(i),
      actionGroupId: Hr("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(g.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(g.mode || "pano") },
      layerKind: i,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...g.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: d.map((w) => ({ ...w }))
      }
    };
    return Yu(v, x), Number(x.aspect ?? 1), Number(v.aspect ?? 1), String(v.stampKind || ""), { ...v.targetSpace }, v;
  }
  function Tr(i) {
    const o = h.painting || (h.painting = Oi(null)), c = o[i] || (o[i] = { strokes: [] });
    return Array.isArray(c.strokes) || (c.strokes = []), c.strokes;
  }
  function Up(i, o, c = performance.now()) {
    let l;
    if (g.mode === "frame") {
      const k = we();
      if (!k) return !1;
      l = zn(o, k, c);
    } else
      l = bn(o, c);
    const d = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, x = d[d.length - 1];
    if (x) {
      const k = Math.abs(Number(l.u ?? l.x ?? 0) - Number(x.u ?? x.x ?? 0)), N = Math.abs(Number(l.v ?? l.y ?? 0) - Number(x.v ?? x.y ?? 0));
      if (k < 15e-4 && N < 15e-4) return !1;
    }
    const v = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    d.push({ ...v }), m.push({ ...v });
    const w = Hn();
    if (w) {
      const k = g.paintEngine.ensureTarget(w);
      g.paintEngine.appendStrokePoint(k, Number(v.u ?? 0), Number(v.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Bp(i, o, c = performance.now()) {
    var x, v;
    let l;
    if (g.mode === "frame") {
      const w = we();
      if (!w) return !1;
      l = zn(o, w, c);
    } else
      l = bn(o, c);
    const d = (v = (x = i == null ? void 0 : i.stroke) == null ? void 0 : x.geometry) == null ? void 0 : v.points;
    if (!l || !Array.isArray(d)) return !1;
    const m = d[d.length - 1];
    if (m) {
      const w = Math.abs(Number(l.u ?? l.x ?? 0) - Number(m.u ?? m.x ?? 0)), k = Math.abs(Number(l.v ?? l.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (w < 15e-4 && k < 15e-4) return !1;
    }
    return d.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Gp(i) {
    var rt, mt, Dt, Vt, Mt;
    const o = (i == null ? void 0 : i.stroke) || null;
    if (!o || (i == null ? void 0 : i.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    la();
    const c = Hn(), l = ci(c.width, c.height);
    if (!sl(l, o, { w: c.width, h: c.height })) return !1;
    const d = ((mt = (rt = l.ctx) == null ? void 0 : rt.getImageData(0, 0, c.width, c.height)) == null ? void 0 : mt.data) || null;
    if (!d) return !1;
    const m = new Map(X().map((U) => [String((U == null ? void 0 : U.actionGroupId) || (U == null ? void 0 : U.id) || "").trim(), U ? { ...U } : null])), x = [], v = [], w = [...Xe().filter((U) => String((U == null ? void 0 : U.layerKind) || "paint") !== "paint")];
    let k = !1, N = oe().reduce((U, et) => Math.max(U, Number((et == null ? void 0 : et.z_index) || 0)), -1) + 1;
    function M(U, et, bt, Pt = 8) {
      let Ut = et, $t = bt, zt = -1, qt = -1;
      for (let Gt = 0; Gt < bt; Gt += 1)
        for (let ie = 0; ie < et; ie += 1)
          U[(Gt * et + ie) * 4 + 3] <= Pt || (ie < Ut && (Ut = ie), Gt < $t && ($t = Gt), ie > zt && (zt = ie), Gt > qt && (qt = Gt));
      return zt < Ut || qt < $t ? null : { minX: Ut, minY: $t, maxX: zt, maxY: qt };
    }
    const H = M(d, c.width, c.height, 8);
    if (!H) return !1;
    function B(U, et) {
      return !U || !et ? !1 : !(U.maxX < et.minX || et.maxX < U.minX || U.maxY < et.minY || et.maxY < U.minY);
    }
    function J(U, et) {
      const bt = kt((U == null ? void 0 : U.actionGroupId) || (U == null ? void 0 : U.id) || "", "paint", et);
      if (!bt) return null;
      const Pt = bt.centerUv.u - bt.halfW, Ut = bt.centerUv.u + bt.halfW, $t = bt.centerUv.v - bt.halfH, zt = bt.centerUv.v + bt.halfH, qt = c.width, Gt = c.height;
      return {
        minX: Math.floor((Pt % 1 + 1) % 1 * qt),
        maxX: Math.ceil((Ut % 1 + 1) % 1 * qt),
        minY: Math.floor(W($t, 0, 1) * Gt),
        maxY: Math.ceil(W(zt, 0, 1) * Gt),
        wraps: Ut - Pt >= 1 || Pt < 0 || Ut > 1
      };
    }
    function $(U) {
      const et = (U == null ? void 0 : U.bbox) || null;
      if (!et) return null;
      const bt = (U == null ? void 0 : U.transform) || {}, Pt = c.width, Ut = c.height, $t = Number(et.u0 || 0) + Number(bt.du || 0), zt = Number(et.u1 || 0) + Number(bt.du || 0), qt = Number(et.v0 || 0) + Number(bt.dv || 0), Gt = Number(et.v1 || 0) + Number(bt.dv || 0);
      return {
        minX: Math.floor(($t % 1 + 1) % 1 * Pt),
        maxX: Math.ceil((zt % 1 + 1) % 1 * Pt),
        minY: Math.floor(W(qt, 0, 1) * Ut),
        maxY: Math.ceil(W(Gt, 0, 1) * Ut),
        wraps: zt - $t >= 1 || $t < 0 || zt > 1
      };
    }
    function Z(U) {
      return U ? U.wraps ? B(H, { minX: 0, maxX: U.maxX, minY: U.minY, maxY: U.maxY }) || B(H, { minX: U.minX, maxX: c.width - 1, minY: U.minY, maxY: U.maxY }) : B(H, U) : !0;
    }
    function nt(U) {
      if (!U) return { touched: !1, canvas: null };
      const et = ci(c.width, c.height, { readback: !0 });
      et.ctx.drawImage(U, 0, 0);
      const bt = et.ctx.getImageData(0, 0, c.width, c.height);
      et.ctx.save(), et.ctx.globalCompositeOperation = "destination-out", et.ctx.drawImage(l.canvas, 0, 0), et.ctx.restore();
      const Pt = et.ctx.getImageData(0, 0, c.width, c.height);
      for (let Ut = 0; Ut < c.width * c.height; Ut += 1) {
        if (d[Ut * 4 + 3] <= 8) continue;
        const zt = bt.data[Ut * 4 + 3], qt = Pt.data[Ut * 4 + 3];
        if (zt > qt)
          return { touched: !0, canvas: et.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function vt(U, et, bt) {
      const Pt = Number(bt == null ? void 0 : bt.z_index), Ut = dp(U, et, bt).map(($t, zt) => ({
        ...$t,
        z_index: Number.isFinite(Pt) ? Pt + zt * 1e-3 : N + zt * 1e-3
      }));
      return Ut.length && (N = Math.max(N, ...Ut.map(($t) => Number(($t == null ? void 0 : $t.z_index) || 0))) + 1), Ut;
    }
    for (const U of X()) {
      const et = String((U == null ? void 0 : U.actionGroupId) || (U == null ? void 0 : U.id) || "").trim();
      if (!et) continue;
      const bt = mn(et, "paint");
      if (!Z(J(U, bt))) {
        v.push(U), x.push(...bt);
        continue;
      }
      const Pt = ((Vt = (Dt = g.paintEngine) == null ? void 0 : Dt.getGroupTarget) == null ? void 0 : Vt.call(Dt, et)) || null, Ut = ((Mt = Pt == null ? void 0 : Pt.committedPaint) == null ? void 0 : Mt.canvas) || null;
      if (!Ut) {
        v.push(U), x.push(...bt);
        continue;
      }
      const $t = nt(Ut);
      if (!$t.touched || !$t.canvas) {
        v.push(U), x.push(...bt);
        continue;
      }
      k = !0;
      const zt = vt($t.canvas, "paint", m.get(et) || U || {});
      w.push(...zt);
    }
    for (const U of Xe().filter((et) => String((et == null ? void 0 : et.layerKind) || "paint") === "paint")) {
      if (!Z($(U))) {
        w.push(U);
        continue;
      }
      const et = Bc(U, null);
      if (!et) {
        w.push(U);
        continue;
      }
      const bt = nt(et);
      if (!bt.touched || !bt.canvas) {
        w.push(U);
        continue;
      }
      k = !0;
      const Pt = vt(bt.canvas, "paint", U);
      w.push(...Pt);
    }
    return k ? (h.painting.paint.strokes = x, h.painting.groups = v.sort((U, et) => Number((U == null ? void 0 : U.z_index) || 0) - Number((et == null ? void 0 : et.z_index) || 0)), h.painting.raster_objects = w.sort((U, et) => Number((U == null ? void 0 : U.z_index) || 0) - Number((et == null ? void 0 : et.z_index) || 0)), ai({ preservePanelValues: !1 }), !0) : !1;
  }
  function Kp(i) {
    var m, x, v, w;
    const o = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const c = String(((x = i == null ? void 0 : i.stroke) == null ? void 0 : x.toolKind) || "pen");
    if (i.layerKind === "paint" && c === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = Zo(o.rawPoints || o.points || [], i.stroke.targetSpace, !0)), Gp(i);
    const l = i.layerKind === "paint" && c !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && Et((v = i.stroke) == null ? void 0 : v.actionGroupId), Tr(i.layerKind).push(i.stroke), !0);
    const d = o.rawPoints || o.points || [];
    return d.length < 1 ? !1 : (o.processedPoints = Zo(d, i.stroke.targetSpace, !0), l && Et((w = i.stroke) == null ? void 0 : w.actionGroupId), Tr(i.layerKind).push(i.stroke), !0);
  }
  function wl(i) {
    if (e === "cutout" && g.mode === "frame")
      return null;
    const o = [
      ...me(!1).slice().sort((c, l) => Number((l == null ? void 0 : l.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var l;
        return c.type === "strokeGroup" ? ii(pt("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? ri(ft(((l = c.item) == null ? void 0 : l.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...e === "cutout" ? rl().filter((c) => Ic()) : []
    ];
    for (const c of o) {
      if (xe(c)) {
        const d = rn(c);
        if (!(d != null && d.visible)) continue;
        const m = Array.isArray(d.strokePaths) ? d.strokePaths : [];
        for (const x of m) {
          const v = Array.isArray(x == null ? void 0 : x.points) ? x.points : [];
          if (!v.length) continue;
          if (x.closed && v.length >= 3 && ir(i, v)) return { item: c, geom: d };
          const w = Math.max(8, Number((x == null ? void 0 : x.lineWidth) || 0) * 0.5 + 6);
          for (let k = 0; k < v.length - 1; k += 1)
            if (Zu(i, v[k], v[k + 1]) <= w * w) return { item: c, geom: d };
          if (v.length === 1 && mr(i, v[0]) <= w * w) return { item: c, geom: d };
        }
        continue;
      }
      if (Ie(c)) {
        const d = rn(c);
        if (!(d != null && d.visible)) continue;
        if (xh(c, d, i)) return { item: c, geom: d };
        continue;
      }
      const l = rn(c);
      if (l.visible && ir(i, l.corners))
        return { item: c, geom: l };
    }
    return null;
  }
  function es(i, o) {
    if (!i || !i.visible) return { kind: "none", cursor: g.mode === "pano" ? "grab" : "default" };
    if (i.kind === "strokeGroup") {
      const l = i.corners.findIndex((m) => mr(m, o) <= 121);
      if (l >= 0) {
        const m = i.corners[l], x = m.x - i.center.x, v = m.y - i.center.y, w = x * v >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: w };
      }
      const d = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const m of d) {
        const x = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && x.length >= 3 && ir(o, x)) return { kind: "move", cursor: "default" };
        const v = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let w = 0; w < x.length - 1; w += 1)
          if (Zu(o, x[w], x[w + 1]) <= v * v) return { kind: "move", cursor: "default" };
      }
      return ir(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: g.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const l = i.corners.findIndex((d) => mr(d, o) <= 121);
      if (l >= 0) {
        const d = i.corners[l], m = d.x - i.center.x, x = d.y - i.center.y, v = m * x >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: v };
      }
      return ir(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: g.mode === "pano" ? "grab" : "default" };
    }
    if (e === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const l = i.edgeMidpoints.find((d) => mr(d, o) <= 169);
      if (l) {
        const d = l.edge === "left" || l.edge === "right";
        return { kind: d ? "scale_x" : "scale_y", cursor: d ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const c = i.corners.findIndex((l) => mr(l, o) <= 121);
    if (c >= 0) {
      const l = i.corners[c], d = l.x - i.center.x, m = l.y - i.center.y, x = d * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: c, cursor: x };
    }
    return mr(i.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : ir(o, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: g.mode === "pano" ? "grab" : "default" };
  }
  function Sl(i, o) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function Wp(i, o) {
    return !!i && !!o && Number(o.x) >= Number(i.x0) && Number(o.x) <= Number(i.x1) && Number(o.y) >= Number(i.y0) && Number(o.y) <= Number(i.y1);
  }
  function Yp(i, o) {
    if (!i || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((d) => Wp(i, d))) return !0;
    const c = (Number(i.x0) + Number(i.x1)) * 0.5, l = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!ir({ x: c, y: l }, o.corners);
  }
  function he(i) {
    if (Hp(), g.interaction) {
      g.interaction.kind === "paint_stroke" || g.interaction.kind === "paint_lasso_fill" ? P.style.cursor = "none" : g.interaction.kind === "view" || g.interaction.kind === "pan_frame" ? P.style.cursor = "grabbing" : g.interaction.kind === "move" || g.interaction.kind === "move_multi" || g.interaction.kind === "move_stroke_group" || g.interaction.kind === "move_raster_object" ? P.style.cursor = "move" : g.interaction.kind === "scale" || g.interaction.kind === "scale_x" || g.interaction.kind === "scale_y" || g.interaction.kind === "scale_raster_object" ? P.style.cursor = g.interaction.cursor || "nwse-resize" : g.interaction.kind === "rotate" ? P.style.cursor = "grabbing" : P.style.cursor = "default";
      return;
    }
    if (xl()) {
      P.style.cursor = "none";
      return;
    }
    if (g.mode === "frame" && g.primaryTool !== "cursor") {
      P.style.cursor = "default";
      return;
    }
    if (g.primaryTool === "cursor" && g.marqueeModifier) {
      P.style.cursor = "default";
      return;
    }
    const o = re(), c = o ? rn(o) : null, l = o ? Jn(o) : !1, d = l ? { kind: "none", cursor: "default" } : es(c, i);
    if (!l && d.kind !== "none") {
      P.style.cursor = d.cursor;
      return;
    }
    if (g.primaryTool === "cursor" && wl(i)) {
      P.style.cursor = "default";
      return;
    }
    P.style.cursor = g.mode === "pano" ? "grab" : "default";
  }
  function Bt() {
    if (!ht) return;
    const i = re(), o = yn();
    if (!i && o.length === 0 || g.interaction) {
      _.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const c = ta(), l = Oy({
      type: e,
      selected: i,
      selectedItems: o,
      selectedKind: c,
      geom: o.length > 1 ? Fo(o) : rn(i),
      allLocked: Vo(o),
      selectedLocked: Jn(i),
      activeAspect: _i(i),
      cutoutAspectOpen: g.cutoutAspectOpen,
      isExternalSticker: Me,
      isStickerHidden: Cr,
      canRestoreSelectedToInitial: uh,
      iconSet: ze
    });
    if (!l.visible) {
      _.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    _.selectionMenu = {
      visible: !0,
      left: l.left,
      top: l.top,
      items: l.items
    }, requestAnimationFrame(() => {
      var N, M, H;
      if (!ht || _.selectionMenu.visible !== !0) return;
      const d = ht.getBoundingClientRect(), m = Math.round(Number((d == null ? void 0 : d.width) || 0)) || 220, x = Math.round(Number((d == null ? void 0 : d.height) || 0)) || 40, v = 14;
      let w = W((Number(((N = l.anchor) == null ? void 0 : N.minX) || 0) + Number(((M = l.anchor) == null ? void 0 : M.maxX) || 0)) * 0.5 - m * 0.5, v, P.width - m - v), k = Number(((H = l.anchor) == null ? void 0 : H.maxY) || 0) + 18;
      if (!Number.isFinite(w) || !Number.isFinite(k) || k + x > P.height - v) {
        _.selectionMenu.visible = !1;
        return;
      }
      _.selectionMenu.left = w, _.selectionMenu.top = k;
    });
  }
  function ma() {
    D.timer && (clearTimeout(D.timer), D.timer = 0), D.target = null, _.tooltip.visible = !1, _.tooltip.text = "", _.tooltip.variant = "";
  }
  function qp(i) {
    if (!xt || !i || !i.isConnected) return;
    const o = String(i.getAttribute("data-tip") || "").trim();
    if (!o) return;
    _.tooltip.text = o;
    const c = E.getBoundingClientRect(), l = i.getBoundingClientRect(), d = 8, m = xt.offsetWidth || 100, x = xt.offsetHeight || 24, v = !!i.closest(".pano-floating-left"), w = !!i.closest(".pano-paint-footer") || !!i.closest(".pano-paint-color-float");
    let k = "", N = l.left - c.left + l.width * 0.5 - m * 0.5, M = l.top - c.top - x - 8;
    if (v)
      k = "tool-rail", N = l.right - c.left + 10, M = l.top - c.top + l.height * 0.5 - x * 0.5, N = W(N, d, Math.max(d, c.width - m - d)), M = W(M, d, Math.max(d, c.height - x - d));
    else if (w) {
      k = "footer";
      const H = i.closest(".pano-paint-footer"), B = H ? H.getBoundingClientRect() : l;
      N = B.left - c.left + B.width * 0.5 - m * 0.5, M = B.bottom - c.top + 5, N = W(N, d, Math.max(d, c.width - m - d)), M = Math.max(d, M);
    }
    N = W(N, d, Math.max(d, c.width - m - d)), M = Math.max(d, M), _.tooltip.left = N, _.tooltip.top = M, _.tooltip.variant = k, _.tooltip.visible = !0;
  }
  const Ne = Do({
    getView: () => ({ yaw: g.viewYaw, pitch: g.viewPitch, fov: g.viewFov }),
    setView: (i) => {
      g.viewYaw = je(Number(i.yaw || 0)), g.viewPitch = W(Number(i.pitch || 0), -89.9, 89.9), g.viewFov = W(Number(i.fov || g.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = P.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || P.clientWidth || 0)),
        h: Math.max(1, Number(i.height || P.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, o;
      return {
        x: (i = h.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (o = h.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Qn,
    onInteraction: () => {
      It.backgroundDirty = !0, It.dirty = !0;
    }
  });
  P.onpointerdown = (i) => {
    const o = Dr(i);
    if (pa(o, !0), g.viewTween = null, Ne.state.inertia.active = !1, Ne.state.inertia.vx = 0, Ne.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), g.mode !== "frame") {
        const v = g.mode === "unwrap" ? o : ha(i);
        g.interaction = { kind: "view", last: v, lastTs: performance.now() }, Ne.startDrag(v.x, v.y, i.pointerId, performance.now());
      }
      he(o), P.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (r) {
      if (g.mode === "pano") {
        const v = ha(i);
        g.interaction = { kind: "view", last: v, lastTs: performance.now() }, Ne.startDrag(v.x, v.y, i.pointerId, performance.now()), he(o), P.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (it && !it.hidden)
      return;
    if ((g.primaryTool === "paint" || g.primaryTool === "mask") && (vl() || bl())) {
      const v = g.primaryTool === "mask" ? "mask" : "paint", w = g.primaryTool === "mask" ? g.maskTool : g.paintTool, k = { kind: "ERP_GLOBAL" }, N = bn(o, performance.now());
      g.interaction = {
        kind: w === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: v,
        _livePreviewToken: Hr("live"),
        stroke: w === "lasso_fill" ? jp(v, w, [N], k) : $p(v, w, [N], k)
      }, si();
      const M = Hn();
      if (M)
        if (g.paintEngine.beginStroke(g.interaction.stroke, M), g.interaction.kind === "paint_stroke") {
          const H = g.paintEngine.ensureTarget(M), B = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), J = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          g.paintEngine.appendStrokePoint(H, B, J, g.interaction.stroke);
        } else
          g.paintEngine.updateActiveStroke(g.interaction.stroke, M);
      he(o), P.setPointerCapture(i.pointerId), yt();
      return;
    }
    const c = yn(), l = re(), d = c.length > 1 ? Fo(c) : l ? rn(l) : null;
    if (g.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      g.interaction = { kind: "marquee_select", start: o, current: o }, he(o), P.setPointerCapture(i.pointerId), yt({ localOnly: !0 });
      return;
    }
    if (c.length > 1 && (d != null && d.visible)) {
      if ((c.some((w) => Jn(w)) ? { kind: "none" } : es(d, o)).kind === "move") {
        g.interaction = {
          kind: "move_multi",
          items: c.map((w) => w),
          offset: { x: o.x - d.center.x, y: o.y - d.center.y },
          startCenter: { x: d.center.x, y: d.center.y },
          stickerSnapshots: c.filter((w) => Ae(w)).map((w) => ({
            id: String(w.id || ""),
            yaw_deg: Number(w.yaw_deg || 0),
            pitch_deg: Number(w.pitch_deg || 0),
            center: (() => {
              var N, M;
              const k = rn(w);
              return k != null && k.visible ? { x: Number(((N = k.center) == null ? void 0 : N.x) || 0), y: Number(((M = k.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: c.filter((w) => xe(w)).map((w) => ({
            id: String(w.actionGroupId || w.id || ""),
            layerKind: String(w.layerKind || "paint"),
            snapshot: De(mn(w.actionGroupId, w.layerKind)),
            frameSnapshot: De(kt(w.actionGroupId, w.layerKind)),
            center: (() => {
              var N, M;
              const k = rn(w);
              return k != null && k.visible ? { x: Number(((N = k.center) == null ? void 0 : N.x) || 0), y: Number(((M = k.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Oo(w.actionGroupId, w.layerKind)
          })),
          rasterSnapshots: c.filter((w) => Ie(w)).map((w) => ({
            id: ut(w.rasterObjectId || w.id || ""),
            snapshot: De(Xe().find((k) => String((k == null ? void 0 : k.id) || "") === ut(w.rasterObjectId || w.id || ""))),
            center: (() => {
              var N, M;
              const k = rn(w);
              return k != null && k.visible ? { x: Number(((N = k.center) == null ? void 0 : N.x) || 0), y: Number(((M = k.center) == null ? void 0 : M.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: qc(w)
          }))
        }, he(o), P.setPointerCapture(i.pointerId);
        return;
      }
    } else if (l && (d != null && d.visible)) {
      const v = Jn(l) ? { kind: "none" } : es(d, o);
      if (v.kind === "scale") {
        g.interaction = xe(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          snapshot: De(mn(l.actionGroupId, l.layerKind)),
          frameSnapshot: De(kt(l.actionGroupId, l.layerKind)),
          cursor: v.cursor
        } : Ie(l) ? {
          kind: "scale_raster_object",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          snapshot: De(Xe().find((w) => String((w == null ? void 0 : w.id) || "") === ut(l.rasterObjectId || l.id || ""))),
          cursor: v.cursor
        } : {
          kind: "scale",
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: v.cursor
        }, he(o), P.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "scale_x" || v.kind === "scale_y") {
        g.interaction = {
          kind: v.kind,
          item: l,
          center: d.center,
          startDist: Math.max(1, Math.hypot(o.x - d.center.x, o.y - d.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: v.cursor,
          edge: v.edge
        }, he(o), P.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "rotate") {
        g.interaction = xe(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: d.center,
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x),
          snapshot: De(mn(l.actionGroupId, l.layerKind)),
          frameSnapshot: De(kt(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: d.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - d.center.y, o.x - d.center.x)
        }, he(o), P.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "move") {
        if (xe(l)) {
          const w = g.mode === "frame" ? (() => {
            const k = we();
            return k ? zn(o, k, performance.now()) : null;
          })() : bn(o, performance.now());
          g.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: w,
            snapshot: De(mn(l.actionGroupId, l.layerKind)),
            frameSnapshot: De(kt(l.actionGroupId, l.layerKind))
          }, he(o), P.setPointerCapture(i.pointerId);
          return;
        }
        if (Ie(l)) {
          const w = g.mode === "frame" ? (() => {
            const k = we();
            return k ? zn(o, k, performance.now()) : null;
          })() : bn(o, performance.now());
          g.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: w,
            snapshot: De(Xe().find((k) => String((k == null ? void 0 : k.id) || "") === ut(l.rasterObjectId || l.id || "")))
          }, he(o), P.setPointerCapture(i.pointerId);
          return;
        }
        g.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - d.center.x, y: o.y - d.center.y }
        }, he(o), P.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = wl(o);
    if (m) {
      const v = g.selectedId !== m.item.id;
      if (v && g.selectedId && (fe(), Sn()), ea(m.item), e === "cutout" && v && (g.cutoutAspectOpen = !1), v && jt(), Bt(), yt(), Jn(m.item)) {
        he(o);
        return;
      }
      g.interaction = {
        kind: xe(m.item) ? "move_stroke_group" : Ie(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: xe(m.item) || Ie(m.item) ? g.mode === "frame" ? (() => {
          const w = we();
          return w ? zn(o, w, performance.now()) : null;
        })() : bn(o, performance.now()) : null,
        snapshot: xe(m.item) ? De(mn(m.item.actionGroupId, m.item.layerKind)) : Ie(m.item) ? De(Xe().find((w) => String((w == null ? void 0 : w.id) || "") === ut(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: xe(m.item) ? De(kt(m.item.actionGroupId, m.item.layerKind)) : null
      }, he(o), P.setPointerCapture(i.pointerId);
      return;
    }
    const x = !!g.selectedId;
    if (x && (fe(), Sn()), ai(), x && jt(), Bt(), yt(), g.mode === "pano") {
      const v = ha(i);
      g.interaction = { kind: "view", last: v, lastTs: performance.now() }, Ne.startDrag(v.x, v.y, i.pointerId, performance.now()), he(o), P.setPointerCapture(i.pointerId);
    }
  }, P.onpointermove = (i) => {
    var l, d, m, x, v, w, k, N, M, H, B, J, $, Z, nt, vt, rt, mt, Dt, Vt;
    const o = Dr(i);
    if (pa(o, !0), !g.interaction) {
      he(o);
      return;
    }
    he(o);
    const c = g.interaction;
    if (c.kind === "paint_stroke") {
      const Mt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let U = !1;
      Mt.forEach((et) => {
        const bt = Dr(et);
        Up(c, bt, performance.now()) && (U = !0);
      }), U && yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "paint_lasso_fill") {
      const Mt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let U = !1;
      if (Mt.forEach((et) => {
        const bt = Dr(et);
        Bp(c, bt, performance.now()) && (U = !0);
      }), U) {
        const et = Hn();
        et && g.paintEngine.updateActiveStroke(c.stroke, et), yt({ localOnly: !0 });
      }
      return;
    }
    if (c.kind === "view") {
      const Mt = performance.now(), U = g.mode === "unwrap" ? o : ha(i);
      Ne.moveDrag(U.x, U.y, g.mode === "unwrap" ? "unwrap" : "pano", Mt), c.lastTs = Mt, c.last = U, yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "pan_frame") {
      g.frameView.panX += o.x - c.last.x, g.frameView.panY += o.y - c.last.y, c.last = o, yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "move") {
      const Mt = o.x - c.offset.x, U = o.y - c.offset.y;
      if (g.mode === "frame" && e === "cutout")
        return;
      if (g.mode === "unwrap") {
        const et = Qn(), bt = W((Mt - et.x) / Math.max(et.w, 1), 0, 1), Pt = W((U - et.y) / Math.max(et.h, 1), 0, 1);
        c.item.yaw_deg = je(bt * 360 - 180), c.item.pitch_deg = W(90 - Pt * 180, -90, 90);
      } else {
        const et = jo(Mt, U), bt = Xu(et);
        c.item.yaw_deg = bt.yaw, c.item.pitch_deg = bt.pitch;
      }
      Ae(c.item) && an(), yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "move_stroke_group") {
      const Mt = g.mode === "frame" ? (() => {
        const bt = we();
        return bt ? zn(o, bt, performance.now()) : null;
      })() : bn(o, performance.now());
      if (!Mt || !c.startUv) return;
      const U = fn(Number(Mt.u || 0), Number(c.startUv.u || 0)), et = Number(Mt.v || 0) - Number(c.startUv.v || 0);
      Ec((l = c.item) == null ? void 0 : l.actionGroupId, U, et, c.snapshot, (d = c.item) == null ? void 0 : d.layerKind, c.frameSnapshot) && (vn({ rebuildPaintEngine: !1 }), yt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_raster_object") {
      const Mt = g.mode === "frame" ? (() => {
        const bt = we();
        return bt ? zn(o, bt, performance.now()) : null;
      })() : bn(o, performance.now());
      if (!Mt || !c.startUv) return;
      const U = fn(Number(Mt.u || 0), Number(c.startUv.u || 0)), et = Number(Mt.v || 0) - Number(c.startUv.v || 0);
      Tc(((m = c.item) == null ? void 0 : m.rasterObjectId) || ((x = c.item) == null ? void 0 : x.id) || "", U, et, c.snapshot) && (Er(), yt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_raster_object") {
      const U = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      Jd(((v = c.item) == null ? void 0 : v.rasterObjectId) || ((w = c.item) == null ? void 0 : w.id) || "", U, c.snapshot) && (Er(), yt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "move_multi") {
      const Mt = o.x - Number(((k = c.offset) == null ? void 0 : k.x) || 0), U = o.y - Number(((N = c.offset) == null ? void 0 : N.y) || 0);
      let et = !1, bt = !1, Pt = !1;
      const Ut = Mt - Number(((M = c.startCenter) == null ? void 0 : M.x) || Mt), $t = U - Number(((H = c.startCenter) == null ? void 0 : H.y) || U);
      for (const zt of Array.isArray(c.stickerSnapshots) ? c.stickerSnapshots : []) {
        const qt = (e === "cutout" ? Ro() : G()).find((ie) => String((ie == null ? void 0 : ie.id) || "") === String(zt.id || ""));
        if (!qt || !Ae(qt)) continue;
        const Gt = {
          x: Number(((B = zt.center) == null ? void 0 : B.x) || 0) + Ut,
          y: Number(((J = zt.center) == null ? void 0 : J.y) || 0) + $t
        };
        if (!(g.mode === "frame" && e === "cutout")) {
          if (g.mode === "unwrap") {
            const ie = Qn(), Je = W((Gt.x - ie.x) / Math.max(ie.w, 1), 0, 1), fi = W((Gt.y - ie.y) / Math.max(ie.h, 1), 0, 1);
            qt.yaw_deg = je(Je * 360 - 180), qt.pitch_deg = W(90 - fi * 180, -90, 90);
          } else {
            const ie = jo(Gt.x, Gt.y), Je = Xu(ie);
            qt.yaw_deg = Je.yaw, qt.pitch_deg = Je.pitch;
          }
          et = !0;
        }
      }
      for (const zt of Array.isArray(c.strokeSnapshots) ? c.strokeSnapshots : []) {
        const qt = {
          x: Number((($ = zt.center) == null ? void 0 : $.x) || 0) + Ut,
          y: Number(((Z = zt.center) == null ? void 0 : Z.y) || 0) + $t
        }, Gt = g.mode === "frame" ? (() => {
          const Je = we();
          return Je ? zn(qt, Je, performance.now()) : null;
        })() : bn(qt, performance.now()), ie = zt.centerUv || null;
        if (Gt && ie) {
          const Je = fn(Number(Gt.u || 0), Number(ie.u || 0)), fi = Number(Gt.v || 0) - Number(ie.v || 0);
          Ec(zt.id, Je, fi, zt.snapshot, zt.layerKind, zt.frameSnapshot) && (et = !0, bt = !0);
        }
      }
      for (const zt of Array.isArray(c.rasterSnapshots) ? c.rasterSnapshots : []) {
        const qt = {
          x: Number(((nt = zt.center) == null ? void 0 : nt.x) || 0) + Ut,
          y: Number(((vt = zt.center) == null ? void 0 : vt.y) || 0) + $t
        }, Gt = g.mode === "frame" ? (() => {
          const Je = we();
          return Je ? zn(qt, Je, performance.now()) : null;
        })() : bn(qt, performance.now()), ie = zt.centerUv || null;
        if (Gt && ie) {
          const Je = fn(Number(Gt.u || 0), Number(ie.u || 0)), fi = Number(Gt.v || 0) - Number(ie.v || 0);
          Tc(zt.id, Je, fi, zt.snapshot) && (et = !0, Pt = !0);
        }
      }
      et && (bt ? vn({ rebuildPaintEngine: !1 }) : Pt ? Er() : an(), yt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "scale_stroke_group") {
      const U = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / Math.max(1, Number(c.startDist || 1));
      Dc((rt = c.item) == null ? void 0 : rt.actionGroupId, U, 0, c.snapshot, (mt = c.item) == null ? void 0 : mt.layerKind, c.frameSnapshot) && (vn({ rebuildPaintEngine: !1 }), yt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "rotate_stroke_group") {
      let Mt = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - Number(c.startAng || 0)) * yr;
      i.shiftKey && (Mt = Math.round(Mt / 45) * 45), Dc((Dt = c.item) == null ? void 0 : Dt.actionGroupId, 1, Mt, c.snapshot, (Vt = c.item) == null ? void 0 : Vt.layerKind, c.frameSnapshot) && (vn({ rebuildPaintEngine: !1 }), yt({ localOnly: !0 }));
      return;
    }
    if (c.kind === "marquee_select") {
      c.current = o, yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale") {
      const U = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = W(c.startHFOV * U, 1, 179), c.item.vFOV_deg = W(c.startVFOV * U, 1, 179), c.item.aspect_id = vr(c.item), yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_x") {
      const U = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.hFOV_deg = W(c.startHFOV * U, 1, 179), c.item.aspect_id = vr(c.item), yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "scale_y") {
      const U = Math.max(1, Math.hypot(o.x - c.center.x, o.y - c.center.y)) / c.startDist;
      c.item.vFOV_deg = W(c.startVFOV * U, 1, 179), c.item.aspect_id = vr(c.item), yt({ localOnly: !0 });
      return;
    }
    if (c.kind === "rotate") {
      let U = (Math.atan2(o.y - c.center.y, o.x - c.center.x) - c.startAng) * yr, et = c.startRot - U;
      i.shiftKey && (et = Math.round(et / 45) * 45);
      const bt = Ae(c.item) ? "rot_deg" : "roll_deg";
      c.item[bt] = et, yt({ localOnly: !0 });
    }
  }, P.onpointerup = () => {
    var o, c, l, d, m, x;
    const i = g.interaction;
    if (((o = g.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = g.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill")
      if (si(), Kp(g.interaction)) {
        vn();
        const v = String(((l = g.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (v) {
          const k = X().find((N) => String((N == null ? void 0 : N.actionGroupId) || "") === v);
          k && (k.frame = null);
        }
        const w = Hn();
        w && (String(((d = g.interaction.stroke) == null ? void 0 : d.toolKind) || "") === "eraser" ? (g.paintEngine.cancelActiveStroke(w), al()) : g.paintEngine.commitActiveStroke(g.interaction.stroke, w)), fe(), Sn(), jt(), Bt(), t.setDirtyCanvas(!0, !0), yt();
      } else {
        const v = Hn();
        v && g.paintEngine.cancelActiveStroke(v);
      }
    else if (((m = g.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const v = Sl(g.interaction.start, g.interaction.current), k = [
        ...e === "cutout" ? rl().filter((N) => !0) : [...G()],
        ...Ve(),
        ...un()
      ].filter((N) => Yp(v, rn(N)));
      nh(k, ((x = k[k.length - 1]) == null ? void 0 : x.id) || null), e === "cutout" && k.length && (g.cutoutAspectOpen = !1), jt(), Bt(), yt();
    } else if (g.interaction && g.interaction.kind !== "view" && g.interaction.kind !== "pan_frame") {
      let v = !1;
      (g.interaction.kind === "move_stroke_group" || g.interaction.kind === "scale_stroke_group" || g.interaction.kind === "rotate_stroke_group") && (v = !0), (g.interaction.kind === "move_raster_object" || g.interaction.kind === "scale_raster_object") && (v = !0), g.interaction.kind === "move_multi" && Array.isArray(g.interaction.strokeSnapshots) && g.interaction.strokeSnapshots.length && (v = !0), g.interaction.kind === "move_multi" && Array.isArray(g.interaction.rasterSnapshots) && g.interaction.rasterSnapshots.length && (v = !0), v && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(g.interaction.kind) || g.interaction.kind === "move_multi" && Array.isArray(g.interaction.strokeSnapshots) && g.interaction.strokeSnapshots.length ? vn({ rebuildPaintEngine: !0 }) : Er()), fe(), Sn(), t.setDirtyCanvas(!0, !0), ts(), g.hqFrames = 1, Bt(), yt();
    }
    g.interaction = null, si(), i && i.kind === "view" && Ne.endDrag(performance.now()), na(), Bt(), he(g.pointerPos), yt();
  }, P.onpointercancel = () => {
    var i, o, c;
    if (((i = g.interaction) == null ? void 0 : i.kind) === "view" && Ne.endDrag(performance.now()), ((o = g.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((c = g.interaction) == null ? void 0 : c.kind) === "paint_lasso_fill") {
      si();
      const l = Hn();
      l && g.paintEngine.cancelActiveStroke(l);
    }
    g.interaction = null, si(), na(), he(g.pointerPos), yt({ localOnly: !0 });
  }, P.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, P.onmousemove = (i) => {
    const o = Dr(i);
    pa(o, !0), !g.interaction && he(o);
  }, P.onmouseleave = () => {
    pa(g.pointerPos, !1), he(g.pointerPos);
  }, P.onwheel = (i) => {
    if (g.mode === "frame") {
      Dr(i), i.deltaY < 0 || 1 / 1.1, Op() && yt({ localOnly: !0 }), i.preventDefault();
      return;
    }
    g.mode === "pano" && (Ne.applyWheelEvent(i) && yt({ localOnly: !0 }), i.preventDefault());
  }, P.ondragover = (i) => {
    e !== "stickers" && e !== "cutout" || r || (i.preventDefault(), A(!0));
  }, P.ondrop = (i) => {
    var l;
    if (e !== "stickers" && e !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), F.depth = 0, A(!1);
    const c = Array.from(((l = i.dataTransfer) == null ? void 0 : l.files) || []).find((d) => fa(d));
    c && dl(c);
  };
  const kl = (i) => {
    e !== "stickers" && e !== "cutout" || r || at(i) && (F.depth += 1, A(!0), i.preventDefault());
  }, Ml = (i) => {
    e !== "stickers" && e !== "cutout" || r || (!F.active && at(i) && A(!0), F.active && i.preventDefault());
  }, Nl = (i) => {
    if (e !== "stickers" && e !== "cutout" || r || !F.active) return;
    F.depth = Math.max(0, F.depth - 1);
    const o = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (F.depth === 0 || o) && A(!1);
  }, Pl = (i) => {
    e !== "stickers" && e !== "cutout" || r || (F.depth = 0, A(!1), at(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", kl, !0), window.addEventListener("dragover", Ml, !0), window.addEventListener("dragleave", Nl, !0), window.addEventListener("drop", Pl, !0);
  function ns() {
    const { canUndo: i, canRedo: o } = fl();
    bi(_.toolButtons, "value", "undo", { disabled: !i }), bi(_.toolButtons, "value", "redo", { disabled: !o });
  }
  const Cl = (i, o, c = !1) => {
    var v;
    const l = re(), d = ta();
    if (!l || d === "stroke") return;
    const m = (((v = _.sidePanel) == null ? void 0 : v.params) || []).find((w) => w.key === i);
    if (!m || m.enabled === !1) return;
    let x = Number(o);
    Number.isNaN(x) && (x = 0), x = W(x, Number(m.min), Number(m.max)), i === "yaw_deg" && (x = je(x)), l[i] = x, e === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (l.aspect_id = vr(l)), jt(), yt(), c && fe();
  };
  V == null || V.addEventListener("click", async (i) => {
    var l, d, m, x, v, w, k, N, M, H, B;
    const o = i.target.closest("[data-action]");
    if (!o) return;
    const c = String(o.getAttribute("data-action") || "");
    if (c === "coverage-set") {
      const J = en(o.getAttribute("data-coverage"));
      if (J === en(h.coverage)) return;
      h.coverage = J, g.coverage = J, p && (p.value = String(J), (l = p.callback) == null || l.call(p, p.value)), s ? It.backgroundDirty = !0 : (ye(), (d = t.setDirtyCanvas) == null || d.call(t, !0, !0)), jt(), Bt(), yt();
      return;
    }
    if (c === "toggle-selection-picker") {
      if ((x = (m = _.sidePanel) == null ? void 0 : m.selectionPicker) != null && x.disabled) return;
      _.sidePanel.selectionPicker.open = !_.sidePanel.selectionPicker.open;
      return;
    }
    if (c === "select-picker-item") {
      _.sidePanel.selectionPicker.open = !1;
      const J = String(o.getAttribute("data-selection-id") || "");
      let $ = null;
      J && (e === "stickers" ? $ = G().find((Z) => String((Z == null ? void 0 : Z.id) || "") === J) || null : $ = ((v = Lc().find((Z) => {
        var nt;
        return String(((nt = Z == null ? void 0 : Z.item) == null ? void 0 : nt.id) || "") === J;
      })) == null ? void 0 : v.item) || null), ea($ || null), $ && !xe($) && z(
        je(Number($.yaw_deg || 0)),
        W(Number($.pitch_deg || 0), -89.9, 89.9),
        g.viewFov
      ), jt(), Bt(), yt();
      return;
    }
    if (c === "copy-state-inline") {
      const J = re(), $ = ta();
      if (!J || $ === "stroke" || yn().length > 1) return;
      const Z = JSON.stringify(e === "cutout" && $ !== "image" ? zc(J) : ph(J));
      try {
        await navigator.clipboard.writeText(Z), (w = _.sidePanel) != null && w.copyStateButton && (_.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var nt;
          (nt = _.sidePanel) != null && nt.copyStateButton && (_.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (c === "toggle-visibility") {
      const J = String(o.getAttribute("data-visibility") || "");
      J === "panorama" ? g.showPanorama = !g.showPanorama : J === "objects" ? g.showObjects = !g.showObjects : J === "mask" && (g.showMask = !g.showMask), jt(), yt();
      return;
    }
    if (c === "set-invert-x") {
      h.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", da(), jt(), (k = t.setDirtyCanvas) == null || k.call(t, !0, !0), yt();
      return;
    }
    if (c === "set-invert-y") {
      h.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", da(), jt(), (N = t.setDirtyCanvas) == null || N.call(t, !0, !0), yt();
      return;
    }
    if (c === "toggle-quality-picker") {
      (M = _.sidePanel) != null && M.uiSettings && (_.sidePanel.uiSettings.qualityOpen = !_.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (c === "set-quality") {
      const J = String(o.getAttribute("data-quality") || "balanced");
      h.ui_settings.preview_quality = J === "draft" || J === "high" ? J : "balanced", da(), jt(), (H = t.setDirtyCanvas) == null || H.call(t, !0, !0), yt();
      return;
    }
    if (c === "ui-reset-defaults") {
      h.ui_settings.invert_view_x = !1, h.ui_settings.invert_view_y = !1, h.ui_settings.preview_quality = "balanced", da(), jt(), (B = t.setDirtyCanvas) == null || B.call(t, !0, !0), yt();
      return;
    }
    if (c === "close-preview") {
      Lr();
      return;
    }
    if (c === "cancel-close") {
      Lr();
      return;
    }
    c === "save-close" && (Rp(), Lr());
  }), V == null || V.addEventListener("input", (i) => {
    const o = i.target.closest("[data-action='param-input']");
    o && Cl(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), V == null || V.addEventListener("change", (i) => {
    const o = i.target.closest("[data-action='param-input']");
    o && Cl(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const rs = () => {
    const i = !!g.showGrid;
    bi(_.floatingButtons, "action", "toggle-grid", {
      icon: i ? ze.eye : ze.eye_dashed,
      pressed: i ? "true" : "false",
      label: i ? "Hide Grid" : "Show Grid",
      tip: i ? "Hide grid" : "Show grid"
    });
  };
  rs(), R.addEventListener("click", (i) => {
    var v, w, k, N;
    if ((w = (v = i.target) == null ? void 0 : v.matches) != null && w.call(v, "[data-confirm-overlay]")) {
      const M = (k = _.confirmDialog) == null ? void 0 : k.resolve;
      _.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, M == null || M(!1);
      return;
    }
    const o = i.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      g.mode = String(o.getAttribute("data-view") || "pano"), e === "cutout" && g.mode === "frame" && re() && Ic(re()), yl(), na(), yt();
      return;
    }
    const c = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (c && !r) {
      if (c.matches("[data-tool-mode]")) {
        const M = String(c.getAttribute("data-tool-mode") || "cursor");
        g.primaryTool = M, (M === "paint" || M === "mask") && ai({ preservePanelValues: !0 }), Ze(), jt(), Bt(), yt();
        return;
      }
      if (c.matches("[data-tool-ui-action]")) {
        const M = String(c.getAttribute("data-tool-ui-action") || "");
        if ((M === "undo" || M === "redo") && c.disabled) return;
        M === "undo" ? Qo(-1) : M === "redo" ? Qo(1) : M === "clear" ? Cp() : (M === "add" || M === "add-image") && wp();
        return;
      }
      if (c.matches("[data-paint-tool]")) {
        g.primaryTool = "paint";
        const M = String(c.getAttribute("data-paint-tool") || "pen");
        g.paintTool = M, ai({ preservePanelValues: !0 }), Qe[M] && (g.activeBrushPresetId = M), Ze(), jt(), Bt(), yt();
        return;
      }
      if (c.matches("[data-mask-tool]")) {
        g.primaryTool = "mask", g.maskTool = String(c.getAttribute("data-mask-tool") || "pen"), ai({ preservePanelValues: !0 }), Ze(), jt(), Bt(), yt();
        return;
      }
      if (c.matches("[data-paint-layer-clear-current]")) {
        const M = String(c.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Ap(M);
        return;
      }
      if (c.matches("[data-paint-color-swatch]")) {
        const M = Ya.find((H) => H.id === c.getAttribute("data-paint-color-swatch"));
        if (!M) return;
        g.paintColor = on(M.color), Rt(!0), Ze();
        return;
      }
      if (c.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), it && !it.hidden ? Rt(!0) : le(), Ze();
        return;
      }
    }
    const l = String(((N = c == null ? void 0 : c.getAttribute) == null ? void 0 : N.call(c, "data-action")) || "");
    if (!r) {
      if (l === "aspect") {
        g.cutoutAspectOpen = !g.cutoutAspectOpen, g.menuSize.measured = !1, Bt(), yt();
        return;
      }
      if (l === "aspect-set") {
        const M = re();
        if (!M) return;
        const H = String(c.getAttribute("data-aspect") || "1:1");
        Ep(M, H), g.cutoutAspectOpen = !1, g.menuSize.measured = !1, ts(), fe(), ye(), Bt(), yt();
        return;
      }
      if (l === "rotate-90") {
        const M = re();
        if (!M) return;
        Dp(M), g.cutoutAspectOpen = !1, g.menuSize.measured = !1, ts(), fe(), ye(), Bt(), yt();
        return;
      }
      if (l === "bring-front") {
        Tp();
        return;
      }
      if (l === "send-back") {
        Lp();
        return;
      }
      if (l === "duplicate") {
        Ip();
        return;
      }
      if (l === "replace-image") {
        kp();
        return;
      }
      if (l === "toggle-lock") {
        eh();
        return;
      }
      if (l === "back-initial") {
        ch();
        return;
      }
      if (l === "toggle-visible") {
        sh();
        return;
      }
      if (l === "delete") {
        gl();
        return;
      }
    }
    if (l === "reset-view") {
      z(0, 0, 100, 180, 680);
      return;
    }
    if (l === "toggle-grid") {
      g.showGrid = !g.showGrid, Ub(t == null ? void 0 : t.id, g.showGrid), rs(), yt();
      return;
    }
    if (l === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), Jp();
      return;
    }
    if (l === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const M = !g.outputPreviewExpanded;
      g.outputPreviewExpanded = M, g.outputPreviewAnimFrom = g.outputPreviewAnim, g.outputPreviewAnimTo = M ? 1 : 0, g.outputPreviewAnimStartTs = performance.now(), Tl(), yt();
      return;
    }
    const d = i.target.closest("[data-paint-history-index]");
    if (!d) return;
    const m = Number(d.getAttribute("data-paint-history-index")), x = g.customPaintHistory[m];
    x && (g.customPaintColor = on(x), g.paintColor = on(x), Ze());
  }), R.addEventListener("input", (i) => {
    const o = i.target.closest("[data-paint-size-slider]");
    if (o) {
      if (o.disabled) return;
      const l = Math.max(1, Math.min(120, Math.round(Number(o.value)))), d = er(g.primaryTool === "paint" ? g.paintTool : g.maskTool);
      g.brushSizes[d] = l, Ze(), zp();
      return;
    }
    const c = i.target.closest("[data-paint-alpha-slider]");
    if (c) {
      const l = { ...g.customPaintColor, a: W(Number(c.value) / 100, 0, 1) };
      g.customPaintColor = on(l), g.paintColor = on(l), Ze();
    }
  }), R.addEventListener("change", (i) => {
    i.target.closest("[data-paint-size-slider]") && ga();
  }), R.addEventListener("pointerup", (i) => {
    i.target.closest("[data-paint-size-slider]") && ga();
  }), R.addEventListener("pointercancel", (i) => {
    i.target.closest("[data-paint-size-slider]") && ga();
  }), R.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && ga();
  }), R.addEventListener("pointerover", (i) => {
    const o = i.target.closest("[data-tip]");
    !o || !R.contains(o) || D.target !== o && (D.target = o, D.timer && clearTimeout(D.timer), D.timer = window.setTimeout(() => {
      D.target === o && qp(o);
    }, 220));
  }), R.addEventListener("pointerout", (i) => {
    var l, d;
    const o = i.target.closest("[data-tip]");
    !o || D.target !== o || (i.relatedTarget instanceof Element ? (d = (l = i.relatedTarget).closest) == null ? void 0 : d.call(l, "[data-tip]") : null) === o || ma();
  }), R.addEventListener("pointerdown", () => {
    ma();
  });
  const Xp = (i, o) => {
    var v;
    if (!tt) return;
    const c = tt.getBoundingClientRect(), l = W((i - c.left) / Math.max(1, c.width), 0, 1), d = 1 - W((o - c.top) / Math.max(1, c.height), 0, 1), m = As(g.customPaintColor), x = { ...Cs(m.h, l, d), a: Number(((v = g.customPaintColor) == null ? void 0 : v.a) ?? 1) };
    g.customPaintColor = on(x), g.paintColor = on(x), Ze();
  }, Zp = (i) => {
    var m;
    if (!gt) return;
    const o = gt.getBoundingClientRect(), c = W((i - o.left) / Math.max(1, o.width), 0, 1), l = As(g.customPaintColor), d = { ...Cs(c, l.s, l.v), a: Number(((m = g.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    g.customPaintColor = on(d), g.paintColor = on(d), Ze();
  }, Al = (i, o) => {
    const c = i.pointerId;
    o(i);
    const l = (m) => {
      m.pointerId === c && o(m);
    }, d = (m) => {
      m.pointerId === c && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", d));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", d), window.addEventListener("pointercancel", d);
  };
  tt && (tt.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Al(i, (o) => Xp(o.clientX, o.clientY));
  }), gt && (gt.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Al(i, (o) => Zp(o.clientX));
  }), R.addEventListener("click", (i) => {
    var d;
    const o = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const c = o.getAttribute("data-action") === "confirm-accept", l = (d = _.confirmDialog) == null ? void 0 : d.resolve;
    _.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, l == null || l(c);
  });
  const Il = () => {
    const i = !!g.fullscreen;
    bi(_.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? ze.fullscreen_close : ze.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, ya = (i) => {
    const o = !!i;
    g.fullscreen !== o && (g.fullscreen = o, R.classList.toggle("pano-modal-fullscreen", o), o ? (g.fullscreenPrevShowGrid = !!g.showGrid, g.showGrid = !1) : g.fullscreenPrevShowGrid !== null && (g.showGrid = !!g.fullscreenPrevShowGrid, g.fullscreenPrevShowGrid = null), rs(), Il(), yt());
  }, El = () => document.fullscreenElement === O, Jp = async () => {
    var i, o;
    try {
      if (!document.fullscreenEnabled) {
        ya(!g.fullscreen);
        return;
      }
      El() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((i = O.requestFullscreen) == null ? void 0 : i.call(O));
    } catch {
      ya(!g.fullscreen);
    }
  }, Dl = () => {
    document.fullscreenEnabled && ya(El());
  };
  document.addEventListener("fullscreenchange", Dl), Il();
  const Tl = () => {
    const i = !!g.outputPreviewExpanded;
    _.outputPreviewToggle.icon = i ? ze.fullscreen_close : ze.fullscreen, _.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", _.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Tl();
  const is = t.onExecuted, as = t.onConnectionsChange;
  let os = null, ss = null, cs = null;
  !r && e === "stickers" && (cs = (i = "sync") => {
    $c(i);
  }, t.__panoExternalStickerSync = cs, os = function(...o) {
    var c;
    typeof is == "function" && is.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "executed");
  }, t.onExecuted = os, ss = function(...o) {
    var c;
    typeof as == "function" && as.apply(this, o), (c = this.__panoExternalStickerSync) == null || c.call(this, "connections");
  }, t.onConnectionsChange = ss), r || (Js.set(String(t.id ?? "0"), () => Ko()), Ah() && Ko());
  const Lr = () => {
    var i, o, c, l, d, m, x, v, w;
    Js.delete(String(t.id ?? "0")), r || Ko(), document.fullscreenElement === O && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Dl), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (c = (o = t.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || c.call(o), (d = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || d.call(l, !0, !0), (v = (x = (m = pn) == null ? void 0 : m.canvas) == null ? void 0 : x.setDirty) == null || v.call(x, !0, !0), ma(), xp(), (w = _t == null ? void 0 : _t.dispose) == null || w.call(_t), A(!1), window.removeEventListener("keydown", Ll, !0), window.removeEventListener("keydown", Rl, !0), window.removeEventListener("keydown", va, !0), window.removeEventListener("keyup", va, !0), window.removeEventListener("keydown", Ol, !0), window.removeEventListener("dragenter", kl, !0), window.removeEventListener("dragover", Ml, !0), window.removeEventListener("dragleave", Nl, !0), window.removeEventListener("drop", Pl, !0), !r && e === "stickers" && (t.onExecuted === os && (t.onExecuted = is), t.onConnectionsChange === ss && (t.onConnectionsChange = as), t.__panoExternalStickerSync === cs && (t.__panoExternalStickerSync = null)), L.unmount(), I.remove();
  }, Ll = (i) => {
    var o, c, l, d;
    if (i.key === "Escape") {
      if (g.fullscreen && document.fullscreenElement === O) {
        i.preventDefault(), i.stopPropagation(), (o = i.stopImmediatePropagation) == null || o.call(i), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (g.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), ya(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (d = i.stopImmediatePropagation) == null || d.call(i), Lr();
    }
  }, Rl = (i) => {
    const o = String(i.key || ""), c = String(i.code || ""), l = Number(i.keyCode || 0);
    if (!(o === "Delete" || c === "Delete" || l === 46) && !(o === "Backspace" || c === "Backspace" || l === 8)) return;
    const x = i.target, v = ((x == null ? void 0 : x.tagName) || "").toUpperCase();
    v === "INPUT" || v === "TEXTAREA" || x != null && x.isContentEditable || !re() || (gl(), i.preventDefault(), i.stopPropagation());
  }, va = (i) => {
    const o = !!(i.ctrlKey || i.metaKey);
    g.marqueeModifier !== o && (g.marqueeModifier = o, he(g.pointerPos));
  }, Ol = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const o = String(i.key || "").toLowerCase(), c = String(i.code || "");
    if (o !== "z" && c !== "KeyZ") return;
    const l = i.target, d = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (d === "INPUT" || d === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: m, canRedo: x } = fl();
    i.shiftKey && !x || !i.shiftKey && !m || (Qo(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Ll, !0), window.addEventListener("keydown", Rl, !0), window.addEventListener("keydown", va, !0), window.addEventListener("keyup", va, !0), window.addEventListener("keydown", Ol, !0), O.addEventListener("pointerdown", (i) => {
    i.target === O && Lr();
  }), !r && e === "stickers" && $c("open"), Mp(), fe(), ns(), Ze(), jt(), zo(), ul(), he(g.pointerPos), yt(), It.rafId = requestAnimationFrame(Jo);
}
function rf(t, e, n, r) {
  if (!(t != null && t.prototype)) return;
  const a = (y) => {
    var b, h;
    try {
      (b = y.__panoDomRestore) == null || b.call(y);
    } catch {
    }
    try {
      (h = y.__panoLegacyRestore) == null || h.call(y);
    } catch {
    }
    y.__panoDomPreview = null, y.__panoLegacyPreviewHooked = !1, y.__panoPreviewHooked = !1, y.__panoPreviewAttached = !1, y.__panoPreviewMountKey = null;
  };
  function s(y) {
    var I;
    const b = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === b) return;
    a(y), n === "PanoramaStickers" && Xb(y), Ac(y), Jb(y, mo);
    const S = hn(y, mo);
    if (S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const L = S.callback;
      S.callback = (O) => {
        var P;
        const R = L ? L(O) : void 0;
        return (P = y.setDirtyCanvas) == null || P.call(y, !0, !1), R;
      };
    }
    const _ = hn(y, "bg_color");
    if (_ && (_.value == null || String(_.value).trim() === "" || String(_.value).toLowerCase() === "#000000") && (_.value = "#00ff00", (I = _.callback) == null || I.call(_, "#00ff00")), n === "PanoramaStickers") {
      tc(y, r, () => Hi(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = b;
        return;
      }
    }
    tc(y, r, () => Hi(y, "cutout")), _y(y, {
      buttonText: r,
      onOpen: () => Hi(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = b;
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
  const p = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const y = p ? p.apply(this, arguments) : void 0;
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
    Ac(t), tc(t, "Open Preview", () => Hi(t, "stickers", { readOnly: !0, hideSidebar: !1 })), by(t, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (s) => Hi(s, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), t.__panoStandaloneInstallDone = !0, t.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(e);
}
pn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  async beforeQueuePrompt() {
    const t = [...Js.values()].map((r) => {
      try {
        return typeof r == "function" ? r() : null;
      } catch {
        return null;
      }
    }).filter(Boolean);
    t.length > 0 && await Promise.allSettled(t);
    const e = [...ki.values()];
    e.length > 0 && await Promise.allSettled(e);
    const n = [...Mi.values()];
    n.length > 0 && await Promise.allSettled(n);
  },
  beforeRegisterNodeDef(t, e) {
    const n = String((e == null ? void 0 : e.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && rf(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && rf(t, e, "PanoramaCutout", "Open Cutout Editor"), Gs(n) && u_(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    Ac(t), Gs(e) && f_(t);
  }
});
