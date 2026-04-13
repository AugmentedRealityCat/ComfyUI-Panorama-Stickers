import * as Ca from "../../scripts/app.js";
import { app as dn } from "../../scripts/app.js";
import { api as Je } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Yc(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const de = {}, Ai = [], Kn = () => {
}, Yf = () => !1, ls = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), us = (t) => t.startsWith("onUpdate:"), Ue = Object.assign, Xc = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, Kg = Object.prototype.hasOwnProperty, te = (t, e) => Kg.call(t, e), Ft = Array.isArray, Ii = (t) => Fo(t) === "[object Map]", Xf = (t) => Fo(t) === "[object Set]", Cu = (t) => Fo(t) === "[object Date]", jt = (t) => typeof t == "function", Ce = (t) => typeof t == "string", Wn = (t) => typeof t == "symbol", se = (t) => t !== null && typeof t == "object", Zf = (t) => (se(t) || jt(t)) && jt(t.then) && jt(t.catch), Jf = Object.prototype.toString, Fo = (t) => Jf.call(t), Wg = (t) => Fo(t).slice(8, -1), Qf = (t) => Fo(t) === "[object Object]", Zc = (t) => Ce(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, vo = /* @__PURE__ */ Yc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), fs = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, qg = /-\w/g, tn = fs(
  (t) => t.replace(qg, (e) => e.slice(1).toUpperCase())
), Yg = /\B([A-Z])/g, ti = fs(
  (t) => t.replace(Yg, "-$1").toLowerCase()
), ds = fs((t) => t.charAt(0).toUpperCase() + t.slice(1)), rc = fs(
  (t) => t ? `on${ds(t)}` : ""
), or = (t, e) => !Object.is(t, e), ic = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, td = (t, e, n, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Xg = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Au;
const hs = () => Au || (Au = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ps(t) {
  if (Ft(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = Ce(r) ? tm(r) : ps(r);
      if (o)
        for (const c in o)
          e[c] = o[c];
    }
    return e;
  } else if (Ce(t) || se(t))
    return t;
}
const Zg = /;(?![^(]*\))/g, Jg = /:([^]+)/, Qg = /\/\*[^]*?\*\//g;
function tm(t) {
  const e = {};
  return t.replace(Qg, "").split(Zg).forEach((n) => {
    if (n) {
      const r = n.split(Jg);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function gs(t) {
  let e = "";
  if (Ce(t))
    e = t;
  else if (Ft(t))
    for (let n = 0; n < t.length; n++) {
      const r = gs(t[n]);
      r && (e += r + " ");
    }
  else if (se(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const em = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", nm = /* @__PURE__ */ Yc(em);
function ed(t) {
  return !!t || t === "";
}
function rm(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = Jc(t[r], e[r]);
  return n;
}
function Jc(t, e) {
  if (t === e) return !0;
  let n = Cu(t), r = Cu(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Wn(t), r = Wn(e), n || r)
    return t === e;
  if (n = Ft(t), r = Ft(e), n || r)
    return n && r ? rm(t, e) : !1;
  if (n = se(t), r = se(e), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(t).length, c = Object.keys(e).length;
    if (o !== c)
      return !1;
    for (const u in t) {
      const f = t.hasOwnProperty(u), m = e.hasOwnProperty(u);
      if (f && !m || !f && m || !Jc(t[u], e[u]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const nd = (t) => !!(t && t.__v_isRef === !0), rd = (t) => Ce(t) ? t : t == null ? "" : Ft(t) || se(t) && (t.toString === Jf || !jt(t.toString)) ? nd(t) ? rd(t.value) : JSON.stringify(t, id, 2) : String(t), id = (t, e) => nd(e) ? id(t, e.value) : Ii(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, o], c) => (n[oc(r, c) + " =>"] = o, n),
    {}
  )
} : Xf(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => oc(n))
} : Wn(e) ? oc(e) : se(e) && !Ft(e) && !Qf(e) ? String(e) : e, oc = (t, e = "") => {
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
let cn;
class im {
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
function om() {
  return cn;
}
let fe;
const ac = /* @__PURE__ */ new WeakSet();
class od {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, cn && cn.active && cn.effects.push(this);
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || sd(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Iu(this), cd(this);
    const e = fe, n = kn;
    fe = this, kn = !0;
    try {
      return this.fn();
    } finally {
      ld(this), fe = e, kn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        el(e);
      this.deps = this.depsTail = void 0, Iu(this), this.onStop && this.onStop(), this.flags &= -2;
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
let ad = 0, bo, _o;
function sd(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = _o, _o = t;
    return;
  }
  t.next = bo, bo = t;
}
function Qc() {
  ad++;
}
function tl() {
  if (--ad > 0)
    return;
  if (_o) {
    let e = _o;
    for (_o = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; bo; ) {
    let e = bo;
    for (bo = void 0; e; ) {
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
function cd(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function ld(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), el(r), am(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  t.deps = e, t.depsTail = n;
}
function Mc(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (ud(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function ud(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Eo) || (t.globalVersion = Eo, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Mc(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = fe, r = kn;
  fe = t, kn = !0;
  try {
    cd(t);
    const o = t.fn(t._value);
    (e.version === 0 || or(o, t._value)) && (t.flags |= 128, t._value = o, e.version++);
  } catch (o) {
    throw e.version++, o;
  } finally {
    fe = n, kn = r, ld(t), t.flags &= -3;
  }
}
function el(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: o } = t;
  if (r && (r.nextSub = o, t.prevSub = void 0), o && (o.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let c = n.computed.deps; c; c = c.nextDep)
      el(c, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function am(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let kn = !0;
const fd = [];
function sr() {
  fd.push(kn), kn = !1;
}
function cr() {
  const t = fd.pop();
  kn = t === void 0 ? !0 : t;
}
function Iu(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const n = fe;
    fe = void 0;
    try {
      e();
    } finally {
      fe = n;
    }
  }
}
let Eo = 0;
class sm {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class dd {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!fe || !kn || fe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== fe)
      n = this.activeLink = new sm(fe, this), fe.deps ? (n.prevDep = fe.depsTail, fe.depsTail.nextDep = n, fe.depsTail = n) : fe.deps = fe.depsTail = n, hd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = fe.depsTail, n.nextDep = void 0, fe.depsTail.nextDep = n, fe.depsTail = n, fe.deps === n && (fe.deps = r);
    }
    return n;
  }
  trigger(e) {
    this.version++, Eo++, this.notify(e);
  }
  notify(e) {
    Qc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      tl();
    }
  }
}
function hd(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        hd(r);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
  }
}
const Pc = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ Symbol(
  ""
), kc = /* @__PURE__ */ Symbol(
  ""
), To = /* @__PURE__ */ Symbol(
  ""
);
function He(t, e, n) {
  if (kn && fe) {
    let r = Pc.get(t);
    r || Pc.set(t, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new dd()), o.map = r, o.key = n), o.track();
  }
}
function ar(t, e, n, r, o, c) {
  const u = Pc.get(t);
  if (!u) {
    Eo++;
    return;
  }
  const f = (m) => {
    m && m.trigger();
  };
  if (Qc(), e === "clear")
    u.forEach(f);
  else {
    const m = Ft(t), y = m && Zc(n);
    if (m && n === "length") {
      const p = Number(r);
      u.forEach((w, M) => {
        (M === "length" || M === To || !Wn(M) && M >= p) && f(w);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), y && f(u.get(To)), e) {
        case "add":
          m ? y && f(u.get("length")) : (f(u.get(Gr)), Ii(t) && f(u.get(kc)));
          break;
        case "delete":
          m || (f(u.get(Gr)), Ii(t) && f(u.get(kc)));
          break;
        case "set":
          Ii(t) && f(u.get(Gr));
          break;
      }
  }
  tl();
}
function gi(t) {
  const e = /* @__PURE__ */ oe(t);
  return e === t ? e : (He(e, "iterate", To), /* @__PURE__ */ Cn(t) ? e : e.map(lr));
}
function ms(t) {
  return He(t = /* @__PURE__ */ oe(t), "iterate", To), t;
}
function jn(t, e) {
  return /* @__PURE__ */ kr(t) ? Fi(/* @__PURE__ */ Kr(t) ? lr(e) : e) : lr(e);
}
const cm = {
  __proto__: null,
  [Symbol.iterator]() {
    return sc(this, Symbol.iterator, (t) => jn(this, t));
  },
  concat(...t) {
    return gi(this).concat(
      ...t.map((e) => Ft(e) ? gi(e) : e)
    );
  },
  entries() {
    return sc(this, "entries", (t) => (t[1] = jn(this, t[1]), t));
  },
  every(t, e) {
    return tr(this, "every", t, e, void 0, arguments);
  },
  filter(t, e) {
    return tr(
      this,
      "filter",
      t,
      e,
      (n) => n.map((r) => jn(this, r)),
      arguments
    );
  },
  find(t, e) {
    return tr(
      this,
      "find",
      t,
      e,
      (n) => jn(this, n),
      arguments
    );
  },
  findIndex(t, e) {
    return tr(this, "findIndex", t, e, void 0, arguments);
  },
  findLast(t, e) {
    return tr(
      this,
      "findLast",
      t,
      e,
      (n) => jn(this, n),
      arguments
    );
  },
  findLastIndex(t, e) {
    return tr(this, "findLastIndex", t, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, e) {
    return tr(this, "forEach", t, e, void 0, arguments);
  },
  includes(...t) {
    return cc(this, "includes", t);
  },
  indexOf(...t) {
    return cc(this, "indexOf", t);
  },
  join(t) {
    return gi(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return cc(this, "lastIndexOf", t);
  },
  map(t, e) {
    return tr(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return ao(this, "pop");
  },
  push(...t) {
    return ao(this, "push", t);
  },
  reduce(t, ...e) {
    return Eu(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Eu(this, "reduceRight", t, e);
  },
  shift() {
    return ao(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return tr(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return ao(this, "splice", t);
  },
  toReversed() {
    return gi(this).toReversed();
  },
  toSorted(t) {
    return gi(this).toSorted(t);
  },
  toSpliced(...t) {
    return gi(this).toSpliced(...t);
  },
  unshift(...t) {
    return ao(this, "unshift", t);
  },
  values() {
    return sc(this, "values", (t) => jn(this, t));
  }
};
function sc(t, e, n) {
  const r = ms(t), o = r[e]();
  return r !== t && !/* @__PURE__ */ Cn(t) && (o._next = o.next, o.next = () => {
    const c = o._next();
    return c.done || (c.value = n(c.value)), c;
  }), o;
}
const lm = Array.prototype;
function tr(t, e, n, r, o, c) {
  const u = ms(t), f = u !== t && !/* @__PURE__ */ Cn(t), m = u[e];
  if (m !== lm[e]) {
    const w = m.apply(t, c);
    return f ? lr(w) : w;
  }
  let y = n;
  u !== t && (f ? y = function(w, M) {
    return n.call(this, jn(t, w), M, t);
  } : n.length > 2 && (y = function(w, M) {
    return n.call(this, w, M, t);
  }));
  const p = m.call(u, y, r);
  return f && o ? o(p) : p;
}
function Eu(t, e, n, r) {
  const o = ms(t), c = o !== t && !/* @__PURE__ */ Cn(t);
  let u = n, f = !1;
  o !== t && (c ? (f = r.length === 0, u = function(y, p, w) {
    return f && (f = !1, y = jn(t, y)), n.call(this, y, jn(t, p), w, t);
  }) : n.length > 3 && (u = function(y, p, w) {
    return n.call(this, y, p, w, t);
  }));
  const m = o[e](u, ...r);
  return f ? jn(t, m) : m;
}
function cc(t, e, n) {
  const r = /* @__PURE__ */ oe(t);
  He(r, "iterate", To);
  const o = r[e](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ ol(n[0]) ? (n[0] = /* @__PURE__ */ oe(n[0]), r[e](...n)) : o;
}
function ao(t, e, n = []) {
  sr(), Qc();
  const r = (/* @__PURE__ */ oe(t))[e].apply(t, n);
  return tl(), cr(), r;
}
const um = /* @__PURE__ */ Yc("__proto__,__v_isRef,__isVue"), pd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Wn)
);
function fm(t) {
  Wn(t) || (t = String(t));
  const e = /* @__PURE__ */ oe(this);
  return He(e, "has", t), e.hasOwnProperty(t);
}
class gd {
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
      return r === (o ? c ? wm : bd : c ? vd : yd).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const u = Ft(e);
    if (!o) {
      let m;
      if (u && (m = cm[n]))
        return m;
      if (n === "hasOwnProperty")
        return fm;
    }
    const f = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ en(e) ? e : r
    );
    if ((Wn(n) ? pd.has(n) : um(n)) || (o || He(e, "get", n), c))
      return f;
    if (/* @__PURE__ */ en(f)) {
      const m = u && Zc(n) ? f : f.value;
      return o && se(m) ? /* @__PURE__ */ Ac(m) : m;
    }
    return se(f) ? o ? /* @__PURE__ */ Ac(f) : /* @__PURE__ */ rl(f) : f;
  }
}
class md extends gd {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, o) {
    let c = e[n];
    const u = Ft(e) && Zc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ kr(c);
      if (!/* @__PURE__ */ Cn(r) && !/* @__PURE__ */ kr(r) && (c = /* @__PURE__ */ oe(c), r = /* @__PURE__ */ oe(r)), !u && /* @__PURE__ */ en(c) && !/* @__PURE__ */ en(r))
        return y || (c.value = r), !0;
    }
    const f = u ? Number(n) < e.length : te(e, n), m = Reflect.set(
      e,
      n,
      r,
      /* @__PURE__ */ en(e) ? e : o
    );
    return e === /* @__PURE__ */ oe(o) && (f ? or(r, c) && ar(e, "set", n, r) : ar(e, "add", n, r)), m;
  }
  deleteProperty(e, n) {
    const r = te(e, n);
    e[n];
    const o = Reflect.deleteProperty(e, n);
    return o && r && ar(e, "delete", n, void 0), o;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!Wn(n) || !pd.has(n)) && He(e, "has", n), r;
  }
  ownKeys(e) {
    return He(
      e,
      "iterate",
      Ft(e) ? "length" : Gr
    ), Reflect.ownKeys(e);
  }
}
class dm extends gd {
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
const hm = /* @__PURE__ */ new md(), pm = /* @__PURE__ */ new dm(), gm = /* @__PURE__ */ new md(!0);
const Cc = (t) => t, ca = (t) => Reflect.getPrototypeOf(t);
function mm(t, e, n) {
  return function(...r) {
    const o = this.__v_raw, c = /* @__PURE__ */ oe(o), u = Ii(c), f = t === "entries" || t === Symbol.iterator && u, m = t === "keys" && u, y = o[t](...r), p = n ? Cc : e ? Fi : lr;
    return !e && He(
      c,
      "iterate",
      m ? kc : Gr
    ), Ue(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: w, done: M } = y.next();
          return M ? { value: w, done: M } : {
            value: f ? [p(w[0]), p(w[1])] : p(w),
            done: M
          };
        }
      }
    );
  };
}
function la(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function ym(t, e) {
  const n = {
    get(o) {
      const c = this.__v_raw, u = /* @__PURE__ */ oe(c), f = /* @__PURE__ */ oe(o);
      t || (or(o, f) && He(u, "get", o), He(u, "get", f));
      const { has: m } = ca(u), y = e ? Cc : t ? Fi : lr;
      if (m.call(u, o))
        return y(c.get(o));
      if (m.call(u, f))
        return y(c.get(f));
      c !== u && c.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && He(/* @__PURE__ */ oe(o), "iterate", Gr), o.size;
    },
    has(o) {
      const c = this.__v_raw, u = /* @__PURE__ */ oe(c), f = /* @__PURE__ */ oe(o);
      return t || (or(o, f) && He(u, "has", o), He(u, "has", f)), o === f ? c.has(o) : c.has(o) || c.has(f);
    },
    forEach(o, c) {
      const u = this, f = u.__v_raw, m = /* @__PURE__ */ oe(f), y = e ? Cc : t ? Fi : lr;
      return !t && He(m, "iterate", Gr), f.forEach((p, w) => o.call(c, y(p), y(w), u));
    }
  };
  return Ue(
    n,
    t ? {
      add: la("add"),
      set: la("set"),
      delete: la("delete"),
      clear: la("clear")
    } : {
      add(o) {
        const c = /* @__PURE__ */ oe(this), u = ca(c), f = /* @__PURE__ */ oe(o), m = !e && !/* @__PURE__ */ Cn(o) && !/* @__PURE__ */ kr(o) ? f : o;
        return u.has.call(c, m) || or(o, m) && u.has.call(c, o) || or(f, m) && u.has.call(c, f) || (c.add(m), ar(c, "add", m, m)), this;
      },
      set(o, c) {
        !e && !/* @__PURE__ */ Cn(c) && !/* @__PURE__ */ kr(c) && (c = /* @__PURE__ */ oe(c));
        const u = /* @__PURE__ */ oe(this), { has: f, get: m } = ca(u);
        let y = f.call(u, o);
        y || (o = /* @__PURE__ */ oe(o), y = f.call(u, o));
        const p = m.call(u, o);
        return u.set(o, c), y ? or(c, p) && ar(u, "set", o, c) : ar(u, "add", o, c), this;
      },
      delete(o) {
        const c = /* @__PURE__ */ oe(this), { has: u, get: f } = ca(c);
        let m = u.call(c, o);
        m || (o = /* @__PURE__ */ oe(o), m = u.call(c, o)), f && f.call(c, o);
        const y = c.delete(o);
        return m && ar(c, "delete", o, void 0), y;
      },
      clear() {
        const o = /* @__PURE__ */ oe(this), c = o.size !== 0, u = o.clear();
        return c && ar(
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
    n[o] = mm(o, t, e);
  }), n;
}
function nl(t, e) {
  const n = ym(t, e);
  return (r, o, c) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? r : Reflect.get(
    te(n, o) && o in r ? n : r,
    o,
    c
  );
}
const vm = {
  get: /* @__PURE__ */ nl(!1, !1)
}, bm = {
  get: /* @__PURE__ */ nl(!1, !0)
}, _m = {
  get: /* @__PURE__ */ nl(!0, !1)
};
const yd = /* @__PURE__ */ new WeakMap(), vd = /* @__PURE__ */ new WeakMap(), bd = /* @__PURE__ */ new WeakMap(), wm = /* @__PURE__ */ new WeakMap();
function xm(t) {
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
function Sm(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : xm(Wg(t));
}
// @__NO_SIDE_EFFECTS__
function rl(t) {
  return /* @__PURE__ */ kr(t) ? t : il(
    t,
    !1,
    hm,
    vm,
    yd
  );
}
// @__NO_SIDE_EFFECTS__
function Nm(t) {
  return il(
    t,
    !1,
    gm,
    bm,
    vd
  );
}
// @__NO_SIDE_EFFECTS__
function Ac(t) {
  return il(
    t,
    !0,
    pm,
    _m,
    bd
  );
}
function il(t, e, n, r, o) {
  if (!se(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const c = Sm(t);
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
function Kr(t) {
  return /* @__PURE__ */ kr(t) ? /* @__PURE__ */ Kr(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function kr(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Cn(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ol(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function oe(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ oe(e) : t;
}
function Mm(t) {
  return !te(t, "__v_skip") && Object.isExtensible(t) && td(t, "__v_skip", !0), t;
}
const lr = (t) => se(t) ? /* @__PURE__ */ rl(t) : t, Fi = (t) => se(t) ? /* @__PURE__ */ Ac(t) : t;
// @__NO_SIDE_EFFECTS__
function en(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function al(t) {
  return /* @__PURE__ */ en(t) ? t.value : t;
}
const Pm = {
  get: (t, e, n) => e === "__v_raw" ? t : al(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const o = t[e];
    return /* @__PURE__ */ en(o) && !/* @__PURE__ */ en(n) ? (o.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function _d(t) {
  return /* @__PURE__ */ Kr(t) ? t : new Proxy(t, Pm);
}
class km {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new dd(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Eo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    fe !== this)
      return sd(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return ud(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function Cm(t, e, n = !1) {
  let r, o;
  return jt(t) ? r = t : (r = t.get, o = t.set), new km(r, o, n);
}
const ua = {}, ja = /* @__PURE__ */ new WeakMap();
let Hr;
function Am(t, e = !1, n = Hr) {
  if (n) {
    let r = ja.get(n);
    r || ja.set(n, r = []), r.push(t);
  }
}
function Im(t, e, n = de) {
  const { immediate: r, deep: o, once: c, scheduler: u, augmentJob: f, call: m } = n, y = (S) => o ? S : /* @__PURE__ */ Cn(S) || o === !1 || o === 0 ? Pr(S, 1) : Pr(S);
  let p, w, M, k, A = !1, C = !1;
  if (/* @__PURE__ */ en(t) ? (w = () => t.value, A = /* @__PURE__ */ Cn(t)) : /* @__PURE__ */ Kr(t) ? (w = () => y(t), A = !0) : Ft(t) ? (C = !0, A = t.some((S) => /* @__PURE__ */ Kr(S) || /* @__PURE__ */ Cn(S)), w = () => t.map((S) => {
    if (/* @__PURE__ */ en(S))
      return S.value;
    if (/* @__PURE__ */ Kr(S))
      return y(S);
    if (jt(S))
      return m ? m(S, 2) : S();
  })) : jt(t) ? e ? w = m ? () => m(t, 2) : t : w = () => {
    if (M) {
      sr();
      try {
        M();
      } finally {
        cr();
      }
    }
    const S = Hr;
    Hr = p;
    try {
      return m ? m(t, 3, [k]) : t(k);
    } finally {
      Hr = S;
    }
  } : w = Kn, e && o) {
    const S = w, q = o === !0 ? 1 / 0 : o;
    w = () => Pr(S(), q);
  }
  const O = om(), D = () => {
    p.stop(), O && O.active && Xc(O.effects, p);
  };
  if (c && e) {
    const S = e;
    e = (...q) => {
      S(...q), D();
    };
  }
  let $ = C ? new Array(t.length).fill(ua) : ua;
  const j = (S) => {
    if (!(!(p.flags & 1) || !p.dirty && !S))
      if (e) {
        const q = p.run();
        if (o || A || (C ? q.some((Q, ut) => or(Q, $[ut])) : or(q, $))) {
          M && M();
          const Q = Hr;
          Hr = p;
          try {
            const ut = [
              q,
              // pass undefined as the old value when it's changed for the first time
              $ === ua ? void 0 : C && $[0] === ua ? [] : $,
              k
            ];
            $ = q, m ? m(e, 3, ut) : (
              // @ts-expect-error
              e(...ut)
            );
          } finally {
            Hr = Q;
          }
        }
      } else
        p.run();
  };
  return f && f(j), p = new od(w), p.scheduler = u ? () => u(j, !1) : j, k = (S) => Am(S, !1, p), M = p.onStop = () => {
    const S = ja.get(p);
    if (S) {
      if (m)
        m(S, 4);
      else
        for (const q of S) q();
      ja.delete(p);
    }
  }, e ? r ? j(!0) : $ = p.run() : u ? u(j.bind(null, !0), !0) : p.run(), D.pause = p.pause.bind(p), D.resume = p.resume.bind(p), D.stop = D, D;
}
function Pr(t, e = 1 / 0, n) {
  if (e <= 0 || !se(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ en(t))
    Pr(t.value, e, n);
  else if (Ft(t))
    for (let r = 0; r < t.length; r++)
      Pr(t[r], e, n);
  else if (Xf(t) || Ii(t))
    t.forEach((r) => {
      Pr(r, e, n);
    });
  else if (Qf(t)) {
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
function $o(t, e, n, r) {
  try {
    return r ? t(...r) : t();
  } catch (o) {
    ys(o, e, n);
  }
}
function qn(t, e, n, r) {
  if (jt(t)) {
    const o = $o(t, e, n, r);
    return o && Zf(o) && o.catch((c) => {
      ys(c, e, n);
    }), o;
  }
  if (Ft(t)) {
    const o = [];
    for (let c = 0; c < t.length; c++)
      o.push(qn(t[c], e, n, r));
    return o;
  }
}
function ys(t, e, n, r = !0) {
  const o = e ? e.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: u } = e && e.appContext.config || de;
  if (e) {
    let f = e.parent;
    const m = e.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const p = f.ec;
      if (p) {
        for (let w = 0; w < p.length; w++)
          if (p[w](t, m, y) === !1)
            return;
      }
      f = f.parent;
    }
    if (c) {
      sr(), $o(c, null, 10, [
        t,
        m,
        y
      ]), cr();
      return;
    }
  }
  Em(t, n, o, r, u);
}
function Em(t, e, n, r = !0, o = !1) {
  if (o)
    throw t;
  console.error(t);
}
const Ze = [];
let Hn = -1;
const Ei = [];
let Mr = null, wi = 0;
const wd = /* @__PURE__ */ Promise.resolve();
let Ua = null;
function Tm(t) {
  const e = Ua || wd;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Lm(t) {
  let e = Hn + 1, n = Ze.length;
  for (; e < n; ) {
    const r = e + n >>> 1, o = Ze[r], c = Lo(o);
    c < t || c === t && o.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function sl(t) {
  if (!(t.flags & 1)) {
    const e = Lo(t), n = Ze[Ze.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Lo(n) ? Ze.push(t) : Ze.splice(Lm(e), 0, t), t.flags |= 1, xd();
  }
}
function xd() {
  Ua || (Ua = wd.then(Nd));
}
function Dm(t) {
  Ft(t) ? Ei.push(...t) : Mr && t.id === -1 ? Mr.splice(wi + 1, 0, t) : t.flags & 1 || (Ei.push(t), t.flags |= 1), xd();
}
function Tu(t, e, n = Hn + 1) {
  for (; n < Ze.length; n++) {
    const r = Ze[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid)
        continue;
      Ze.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Sd(t) {
  if (Ei.length) {
    const e = [...new Set(Ei)].sort(
      (n, r) => Lo(n) - Lo(r)
    );
    if (Ei.length = 0, Mr) {
      Mr.push(...e);
      return;
    }
    for (Mr = e, wi = 0; wi < Mr.length; wi++) {
      const n = Mr[wi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Mr = null, wi = 0;
  }
}
const Lo = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Nd(t) {
  try {
    for (Hn = 0; Hn < Ze.length; Hn++) {
      const e = Ze[Hn];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), $o(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Hn < Ze.length; Hn++) {
      const e = Ze[Hn];
      e && (e.flags &= -2);
    }
    Hn = -1, Ze.length = 0, Sd(), Ua = null, (Ze.length || Ei.length) && Nd();
  }
}
let Pn = null, Md = null;
function Ba(t) {
  const e = Pn;
  return Pn = t, Md = t && t.type.__scopeId || null, e;
}
function Rm(t, e = Pn, n) {
  if (!e || t._n)
    return t;
  const r = (...o) => {
    r._d && Bu(-1);
    const c = Ba(e);
    let u;
    try {
      u = t(...o);
    } finally {
      Ba(c), r._d && Bu(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Fr(t, e, n, r) {
  const o = t.dirs, c = e && e.dirs;
  for (let u = 0; u < o.length; u++) {
    const f = o[u];
    c && (f.oldValue = c[u].value);
    let m = f.dir[r];
    m && (sr(), qn(m, n, 8, [
      t.el,
      f,
      t,
      e
    ]), cr());
  }
}
function Om(t, e) {
  if (je) {
    let n = je.provides;
    const r = je.parent && je.parent.provides;
    r === n && (n = je.provides = Object.create(r)), n[t] = e;
  }
}
function Aa(t, e, n = !1) {
  const r = O0();
  if (r || Li) {
    let o = Li ? Li._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return n && jt(e) ? e.call(r && r.proxy) : e;
  }
}
const Fm = /* @__PURE__ */ Symbol.for("v-scx"), $m = () => Aa(Fm);
function Ia(t, e, n) {
  return Pd(t, e, n);
}
function Pd(t, e, n = de) {
  const { immediate: r, deep: o, flush: c, once: u } = n, f = Ue({}, n), m = e && r || !e && c !== "post";
  let y;
  if (Ro) {
    if (c === "sync") {
      const k = $m();
      y = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!m) {
      const k = () => {
      };
      return k.stop = Kn, k.resume = Kn, k.pause = Kn, k;
    }
  }
  const p = je;
  f.call = (k, A, C) => qn(k, p, A, C);
  let w = !1;
  c === "post" ? f.scheduler = (k) => {
    sn(k, p && p.suspense);
  } : c !== "sync" && (w = !0, f.scheduler = (k, A) => {
    A ? k() : sl(k);
  }), f.augmentJob = (k) => {
    e && (k.flags |= 4), w && (k.flags |= 2, p && (k.id = p.uid, k.i = p));
  };
  const M = Im(t, e, f);
  return Ro && (y ? y.push(M) : m && M()), M;
}
function Vm(t, e, n) {
  const r = this.proxy, o = Ce(t) ? t.includes(".") ? kd(r, t) : () => r[t] : t.bind(r, r);
  let c;
  jt(e) ? c = e : (c = e.handler, n = e);
  const u = Vo(this), f = Pd(o, c.bind(r), n);
  return u(), f;
}
function kd(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Hm = /* @__PURE__ */ Symbol("_vte"), zm = (t) => t.__isTeleport, jm = /* @__PURE__ */ Symbol("_leaveCb");
function cl(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, cl(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Cd(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Lu(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const Ga = /* @__PURE__ */ new WeakMap();
function wo(t, e, n, r, o = !1) {
  if (Ft(t)) {
    t.forEach(
      (C, O) => wo(
        C,
        e && (Ft(e) ? e[O] : e),
        n,
        r,
        o
      )
    );
    return;
  }
  if (xo(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && wo(t, e, n, r.component.subTree);
    return;
  }
  const c = r.shapeFlag & 4 ? dl(r.component) : r.el, u = o ? null : c, { i: f, r: m } = t, y = e && e.r, p = f.refs === de ? f.refs = {} : f.refs, w = f.setupState, M = /* @__PURE__ */ oe(w), k = w === de ? Yf : (C) => Lu(p, C) ? !1 : te(M, C), A = (C, O) => !(O && Lu(p, O));
  if (y != null && y !== m) {
    if (Du(e), Ce(y))
      p[y] = null, k(y) && (w[y] = null);
    else if (/* @__PURE__ */ en(y)) {
      const C = e;
      A(y, C.k) && (y.value = null), C.k && (p[C.k] = null);
    }
  }
  if (jt(m))
    $o(m, f, 12, [u, p]);
  else {
    const C = Ce(m), O = /* @__PURE__ */ en(m);
    if (C || O) {
      const D = () => {
        if (t.f) {
          const $ = C ? k(m) ? w[m] : p[m] : A() || !t.k ? m.value : p[t.k];
          if (o)
            Ft($) && Xc($, c);
          else if (Ft($))
            $.includes(c) || $.push(c);
          else if (C)
            p[m] = [c], k(m) && (w[m] = p[m]);
          else {
            const j = [c];
            A(m, t.k) && (m.value = j), t.k && (p[t.k] = j);
          }
        } else C ? (p[m] = u, k(m) && (w[m] = u)) : O && (A(m, t.k) && (m.value = u), t.k && (p[t.k] = u));
      };
      if (u) {
        const $ = () => {
          D(), Ga.delete(t);
        };
        $.id = -1, Ga.set(t, $), sn($, n);
      } else
        Du(t), D();
    }
  }
}
function Du(t) {
  const e = Ga.get(t);
  e && (e.flags |= 8, Ga.delete(t));
}
hs().requestIdleCallback;
hs().cancelIdleCallback;
const xo = (t) => !!t.type.__asyncLoader, Ad = (t) => t.type.__isKeepAlive;
function Um(t, e) {
  Id(t, "a", e);
}
function Bm(t, e) {
  Id(t, "da", e);
}
function Id(t, e, n = je) {
  const r = t.__wdc || (t.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return t();
  });
  if (vs(e, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ad(o.parent.vnode) && Gm(r, e, n, o), o = o.parent;
  }
}
function Gm(t, e, n, r) {
  const o = vs(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Ld(() => {
    Xc(r[e], o);
  }, n);
}
function vs(t, e, n = je, r = !1) {
  if (n) {
    const o = n[t] || (n[t] = []), c = e.__weh || (e.__weh = (...u) => {
      sr();
      const f = Vo(n), m = qn(e, n, t, u);
      return f(), cr(), m;
    });
    return r ? o.unshift(c) : o.push(c), c;
  }
}
const ur = (t) => (e, n = je) => {
  (!Ro || t === "sp") && vs(t, (...r) => e(...r), n);
}, Km = ur("bm"), Ed = ur("m"), Wm = ur(
  "bu"
), qm = ur("u"), Td = ur(
  "bum"
), Ld = ur("um"), Ym = ur(
  "sp"
), Xm = ur("rtg"), Zm = ur("rtc");
function Jm(t, e = je) {
  vs("ec", t, e);
}
const Qm = "components", Dd = /* @__PURE__ */ Symbol.for("v-ndc");
function t0(t) {
  return Ce(t) ? e0(Qm, t, !1) || t : t || Dd;
}
function e0(t, e, n = !0, r = !1) {
  const o = Pn || je;
  if (o) {
    const c = o.type;
    {
      const f = z0(
        c,
        !1
      );
      if (f && (f === e || f === tn(e) || f === ds(tn(e))))
        return c;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ru(o[t] || c[t], e) || // global registration
      Ru(o.appContext[t], e)
    );
    return !u && r ? c : u;
  }
}
function Ru(t, e) {
  return t && (t[e] || t[tn(e)] || t[ds(tn(e))]);
}
function Ti(t, e, n, r) {
  let o;
  const c = n, u = Ft(t);
  if (u || Ce(t)) {
    const f = u && /* @__PURE__ */ Kr(t);
    let m = !1, y = !1;
    f && (m = !/* @__PURE__ */ Cn(t), y = /* @__PURE__ */ kr(t), t = ms(t)), o = new Array(t.length);
    for (let p = 0, w = t.length; p < w; p++)
      o[p] = e(
        m ? y ? Fi(lr(t[p])) : lr(t[p]) : t[p],
        p,
        void 0,
        c
      );
  } else if (typeof t == "number") {
    o = new Array(t);
    for (let f = 0; f < t; f++)
      o[f] = e(f + 1, f, void 0, c);
  } else if (se(t))
    if (t[Symbol.iterator])
      o = Array.from(
        t,
        (f, m) => e(f, m, void 0, c)
      );
    else {
      const f = Object.keys(t);
      o = new Array(f.length);
      for (let m = 0, y = f.length; m < y; m++) {
        const p = f[m];
        o[m] = e(t[p], p, m, c);
      }
    }
  else
    o = [];
  return o;
}
const Ic = (t) => t ? nh(t) ? dl(t) : Ic(t.parent) : null, So = (
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
    $parent: (t) => Ic(t.parent),
    $root: (t) => Ic(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Od(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      sl(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Tm.bind(t.proxy)),
    $watch: (t) => Vm.bind(t)
  })
), lc = (t, e) => t !== de && !t.__isScriptSetup && te(t, e), n0 = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: c, accessCache: u, type: f, appContext: m } = t;
    if (e[0] !== "$") {
      const M = u[e];
      if (M !== void 0)
        switch (M) {
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
        if (lc(r, e))
          return u[e] = 1, r[e];
        if (o !== de && te(o, e))
          return u[e] = 2, o[e];
        if (te(c, e))
          return u[e] = 3, c[e];
        if (n !== de && te(n, e))
          return u[e] = 4, n[e];
        Ec && (u[e] = 0);
      }
    }
    const y = So[e];
    let p, w;
    if (y)
      return e === "$attrs" && He(t.attrs, "get", ""), y(t);
    if (
      // css module (injected by vue-loader)
      (p = f.__cssModules) && (p = p[e])
    )
      return p;
    if (n !== de && te(n, e))
      return u[e] = 4, n[e];
    if (
      // global properties
      w = m.config.globalProperties, te(w, e)
    )
      return w[e];
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: o, ctx: c } = t;
    return lc(o, e) ? (o[e] = n, !0) : r !== de && te(r, e) ? (r[e] = n, !0) : te(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (c[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: o, props: c, type: u }
  }, f) {
    let m;
    return !!(n[f] || t !== de && f[0] !== "$" && te(t, f) || lc(e, f) || te(c, f) || te(r, f) || te(So, f) || te(o.config.globalProperties, f) || (m = u.__cssModules) && m[f]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : te(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Ou(t) {
  return Ft(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Ec = !0;
function r0(t) {
  const e = Od(t), n = t.proxy, r = t.ctx;
  Ec = !1, e.beforeCreate && Fu(e.beforeCreate, t, "bc");
  const {
    // state
    data: o,
    computed: c,
    methods: u,
    watch: f,
    provide: m,
    inject: y,
    // lifecycle
    created: p,
    beforeMount: w,
    mounted: M,
    beforeUpdate: k,
    updated: A,
    activated: C,
    deactivated: O,
    beforeDestroy: D,
    beforeUnmount: $,
    destroyed: j,
    unmounted: S,
    render: q,
    renderTracked: Q,
    renderTriggered: ut,
    errorCaptured: nt,
    serverPrefetch: Y,
    // public API
    expose: F,
    inheritAttrs: rt,
    // assets
    components: mt,
    directives: ct,
    filters: Z
  } = e;
  if (y && i0(y, r, null), u)
    for (const it in u) {
      const st = u[it];
      jt(st) && (r[it] = st.bind(n));
    }
  if (o) {
    const it = o.call(n, n);
    se(it) && (t.data = /* @__PURE__ */ rl(it));
  }
  if (Ec = !0, c)
    for (const it in c) {
      const st = c[it], wt = jt(st) ? st.bind(n, n) : jt(st.get) ? st.get.bind(n, n) : Kn, Rt = !jt(st) && jt(st.set) ? st.set.bind(n) : Kn, J = Di({
        get: wt,
        set: Rt
      });
      Object.defineProperty(r, it, {
        enumerable: !0,
        configurable: !0,
        get: () => J.value,
        set: (Mt) => J.value = Mt
      });
    }
  if (f)
    for (const it in f)
      Rd(f[it], r, n, it);
  if (m) {
    const it = jt(m) ? m.call(n) : m;
    Reflect.ownKeys(it).forEach((st) => {
      Om(st, it[st]);
    });
  }
  p && Fu(p, t, "c");
  function at(it, st) {
    Ft(st) ? st.forEach((wt) => it(wt.bind(n))) : st && it(st.bind(n));
  }
  if (at(Km, w), at(Ed, M), at(Wm, k), at(qm, A), at(Um, C), at(Bm, O), at(Jm, nt), at(Zm, Q), at(Xm, ut), at(Td, $), at(Ld, S), at(Ym, Y), Ft(F))
    if (F.length) {
      const it = t.exposed || (t.exposed = {});
      F.forEach((st) => {
        Object.defineProperty(it, st, {
          get: () => n[st],
          set: (wt) => n[st] = wt,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  q && t.render === Kn && (t.render = q), rt != null && (t.inheritAttrs = rt), mt && (t.components = mt), ct && (t.directives = ct), Y && Cd(t);
}
function i0(t, e, n = Kn) {
  Ft(t) && (t = Tc(t));
  for (const r in t) {
    const o = t[r];
    let c;
    se(o) ? "default" in o ? c = Aa(
      o.from || r,
      o.default,
      !0
    ) : c = Aa(o.from || r) : c = Aa(o), /* @__PURE__ */ en(c) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (u) => c.value = u
    }) : e[r] = c;
  }
}
function Fu(t, e, n) {
  qn(
    Ft(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function Rd(t, e, n, r) {
  let o = r.includes(".") ? kd(n, r) : () => n[r];
  if (Ce(t)) {
    const c = e[t];
    jt(c) && Ia(o, c);
  } else if (jt(t))
    Ia(o, t.bind(n));
  else if (se(t))
    if (Ft(t))
      t.forEach((c) => Rd(c, e, n, r));
    else {
      const c = jt(t.handler) ? t.handler.bind(n) : e[t.handler];
      jt(c) && Ia(o, c, t);
    }
}
function Od(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: o,
    optionsCache: c,
    config: { optionMergeStrategies: u }
  } = t.appContext, f = c.get(e);
  let m;
  return f ? m = f : !o.length && !n && !r ? m = e : (m = {}, o.length && o.forEach(
    (y) => Ka(m, y, u, !0)
  ), Ka(m, e, u)), se(e) && c.set(e, m), m;
}
function Ka(t, e, n, r = !1) {
  const { mixins: o, extends: c } = e;
  c && Ka(t, c, n, !0), o && o.forEach(
    (u) => Ka(t, u, n, !0)
  );
  for (const u in e)
    if (!(r && u === "expose")) {
      const f = o0[u] || n && n[u];
      t[u] = f ? f(t[u], e[u]) : e[u];
    }
  return t;
}
const o0 = {
  data: $u,
  props: Vu,
  emits: Vu,
  // objects
  methods: po,
  computed: po,
  // lifecycle
  beforeCreate: Xe,
  created: Xe,
  beforeMount: Xe,
  mounted: Xe,
  beforeUpdate: Xe,
  updated: Xe,
  beforeDestroy: Xe,
  beforeUnmount: Xe,
  destroyed: Xe,
  unmounted: Xe,
  activated: Xe,
  deactivated: Xe,
  errorCaptured: Xe,
  serverPrefetch: Xe,
  // assets
  components: po,
  directives: po,
  // watch
  watch: s0,
  // provide / inject
  provide: $u,
  inject: a0
};
function $u(t, e) {
  return e ? t ? function() {
    return Ue(
      jt(t) ? t.call(this, this) : t,
      jt(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function a0(t, e) {
  return po(Tc(t), Tc(e));
}
function Tc(t) {
  if (Ft(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function Xe(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function po(t, e) {
  return t ? Ue(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Vu(t, e) {
  return t ? Ft(t) && Ft(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Ue(
    /* @__PURE__ */ Object.create(null),
    Ou(t),
    Ou(e ?? {})
  ) : e;
}
function s0(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Ue(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = Xe(t[r], e[r]);
  return n;
}
function Fd() {
  return {
    app: null,
    config: {
      isNativeTag: Yf,
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
let c0 = 0;
function l0(t, e) {
  return function(r, o = null) {
    jt(r) || (r = Ue({}, r)), o != null && !se(o) && (o = null);
    const c = Fd(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let m = !1;
    const y = c.app = {
      _uid: c0++,
      _component: r,
      _props: o,
      _container: null,
      _context: c,
      _instance: null,
      version: U0,
      get config() {
        return c.config;
      },
      set config(p) {
      },
      use(p, ...w) {
        return u.has(p) || (p && jt(p.install) ? (u.add(p), p.install(y, ...w)) : jt(p) && (u.add(p), p(y, ...w))), y;
      },
      mixin(p) {
        return c.mixins.includes(p) || c.mixins.push(p), y;
      },
      component(p, w) {
        return w ? (c.components[p] = w, y) : c.components[p];
      },
      directive(p, w) {
        return w ? (c.directives[p] = w, y) : c.directives[p];
      },
      mount(p, w, M) {
        if (!m) {
          const k = y._ceVNode || Qe(r, o);
          return k.appContext = c, M === !0 ? M = "svg" : M === !1 && (M = void 0), t(k, p, M), m = !0, y._container = p, p.__vue_app__ = y, dl(k.component);
        }
      },
      onUnmount(p) {
        f.push(p);
      },
      unmount() {
        m && (qn(
          f,
          y._instance,
          16
        ), t(null, y._container), delete y._container.__vue_app__);
      },
      provide(p, w) {
        return c.provides[p] = w, y;
      },
      runWithContext(p) {
        const w = Li;
        Li = y;
        try {
          return p();
        } finally {
          Li = w;
        }
      }
    };
    return y;
  };
}
let Li = null;
const u0 = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${tn(e)}Modifiers`] || t[`${ti(e)}Modifiers`];
function f0(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || de;
  let o = n;
  const c = e.startsWith("update:"), u = c && u0(r, e.slice(7));
  u && (u.trim && (o = n.map((p) => Ce(p) ? p.trim() : p)), u.number && (o = n.map(Xg)));
  let f, m = r[f = rc(e)] || // also try camelCase event handler (#2249)
  r[f = rc(tn(e))];
  !m && c && (m = r[f = rc(ti(e))]), m && qn(
    m,
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
    t.emitted[f] = !0, qn(
      y,
      t,
      6,
      o
    );
  }
}
const d0 = /* @__PURE__ */ new WeakMap();
function $d(t, e, n = !1) {
  const r = n ? d0 : e.emitsCache, o = r.get(t);
  if (o !== void 0)
    return o;
  const c = t.emits;
  let u = {}, f = !1;
  if (!jt(t)) {
    const m = (y) => {
      const p = $d(y, e, !0);
      p && (f = !0, Ue(u, p));
    };
    !n && e.mixins.length && e.mixins.forEach(m), t.extends && m(t.extends), t.mixins && t.mixins.forEach(m);
  }
  return !c && !f ? (se(t) && r.set(t, null), null) : (Ft(c) ? c.forEach((m) => u[m] = null) : Ue(u, c), se(t) && r.set(t, u), u);
}
function bs(t, e) {
  return !t || !ls(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), te(t, e[0].toLowerCase() + e.slice(1)) || te(t, ti(e)) || te(t, e));
}
function Hu(t) {
  const {
    type: e,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [c],
    slots: u,
    attrs: f,
    emit: m,
    render: y,
    renderCache: p,
    props: w,
    data: M,
    setupState: k,
    ctx: A,
    inheritAttrs: C
  } = t, O = Ba(t);
  let D, $;
  try {
    if (n.shapeFlag & 4) {
      const S = o || r, q = S;
      D = Un(
        y.call(
          q,
          S,
          p,
          w,
          k,
          M,
          A
        )
      ), $ = f;
    } else {
      const S = e;
      D = Un(
        S.length > 1 ? S(
          w,
          { attrs: f, slots: u, emit: m }
        ) : S(
          w,
          null
        )
      ), $ = e.props ? f : h0(f);
    }
  } catch (S) {
    No.length = 0, ys(S, t, 1), D = Qe(Cr);
  }
  let j = D;
  if ($ && C !== !1) {
    const S = Object.keys($), { shapeFlag: q } = j;
    S.length && q & 7 && (c && S.some(us) && ($ = p0(
      $,
      c
    )), j = $i(j, $, !1, !0));
  }
  return n.dirs && (j = $i(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(n.dirs) : n.dirs), n.transition && cl(j, n.transition), D = j, Ba(O), D;
}
const h0 = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || ls(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, p0 = (t, e) => {
  const n = {};
  for (const r in t)
    (!us(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function g0(t, e, n) {
  const { props: r, children: o, component: c } = t, { props: u, children: f, patchFlag: m } = e, y = c.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return r ? zu(r, u, y) : !!u;
    if (m & 8) {
      const p = e.dynamicProps;
      for (let w = 0; w < p.length; w++) {
        const M = p[w];
        if (Vd(u, r, M) && !bs(y, M))
          return !0;
      }
    }
  } else
    return (o || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? zu(r, u, y) : !0 : !!u;
  return !1;
}
function zu(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const c = r[o];
    if (Vd(e, t, c) && !bs(n, c))
      return !0;
  }
  return !1;
}
function Vd(t, e, n) {
  const r = t[n], o = e[n];
  return n === "style" && se(r) && se(o) ? !Jc(r, o) : r !== o;
}
function m0({ vnode: t, parent: e, suspense: n }, r) {
  for (; e; ) {
    const o = e.subTree;
    if (o.suspense && o.suspense.activeBranch === t && (o.suspense.vnode.el = o.el = r, t = o), o === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = r);
}
const Hd = {}, zd = () => Object.create(Hd), jd = (t) => Object.getPrototypeOf(t) === Hd;
function y0(t, e, n, r = !1) {
  const o = {}, c = zd();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Ud(t, e, o, c);
  for (const u in t.propsOptions[0])
    u in o || (o[u] = void 0);
  n ? t.props = r ? o : /* @__PURE__ */ Nm(o) : t.type.props ? t.props = o : t.props = c, t.attrs = c;
}
function v0(t, e, n, r) {
  const {
    props: o,
    attrs: c,
    vnode: { patchFlag: u }
  } = t, f = /* @__PURE__ */ oe(o), [m] = t.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const p = t.vnode.dynamicProps;
      for (let w = 0; w < p.length; w++) {
        let M = p[w];
        if (bs(t.emitsOptions, M))
          continue;
        const k = e[M];
        if (m)
          if (te(c, M))
            k !== c[M] && (c[M] = k, y = !0);
          else {
            const A = tn(M);
            o[A] = Lc(
              m,
              f,
              A,
              k,
              t,
              !1
            );
          }
        else
          k !== c[M] && (c[M] = k, y = !0);
      }
    }
  } else {
    Ud(t, e, o, c) && (y = !0);
    let p;
    for (const w in f)
      (!e || // for camelCase
      !te(e, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = ti(w)) === w || !te(e, p))) && (m ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[p] !== void 0) && (o[w] = Lc(
        m,
        f,
        w,
        void 0,
        t,
        !0
      )) : delete o[w]);
    if (c !== f)
      for (const w in c)
        (!e || !te(e, w)) && (delete c[w], y = !0);
  }
  y && ar(t.attrs, "set", "");
}
function Ud(t, e, n, r) {
  const [o, c] = t.propsOptions;
  let u = !1, f;
  if (e)
    for (let m in e) {
      if (vo(m))
        continue;
      const y = e[m];
      let p;
      o && te(o, p = tn(m)) ? !c || !c.includes(p) ? n[p] = y : (f || (f = {}))[p] = y : bs(t.emitsOptions, m) || (!(m in r) || y !== r[m]) && (r[m] = y, u = !0);
    }
  if (c) {
    const m = /* @__PURE__ */ oe(n), y = f || de;
    for (let p = 0; p < c.length; p++) {
      const w = c[p];
      n[w] = Lc(
        o,
        m,
        w,
        y[w],
        t,
        !te(y, w)
      );
    }
  }
  return u;
}
function Lc(t, e, n, r, o, c) {
  const u = t[n];
  if (u != null) {
    const f = te(u, "default");
    if (f && r === void 0) {
      const m = u.default;
      if (u.type !== Function && !u.skipFactory && jt(m)) {
        const { propsDefaults: y } = o;
        if (n in y)
          r = y[n];
        else {
          const p = Vo(o);
          r = y[n] = m.call(
            null,
            e
          ), p();
        }
      } else
        r = m;
      o.ce && o.ce._setProp(n, r);
    }
    u[
      0
      /* shouldCast */
    ] && (c && !f ? r = !1 : u[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === ti(n)) && (r = !0));
  }
  return r;
}
const b0 = /* @__PURE__ */ new WeakMap();
function Bd(t, e, n = !1) {
  const r = n ? b0 : e.propsCache, o = r.get(t);
  if (o)
    return o;
  const c = t.props, u = {}, f = [];
  let m = !1;
  if (!jt(t)) {
    const p = (w) => {
      m = !0;
      const [M, k] = Bd(w, e, !0);
      Ue(u, M), k && f.push(...k);
    };
    !n && e.mixins.length && e.mixins.forEach(p), t.extends && p(t.extends), t.mixins && t.mixins.forEach(p);
  }
  if (!c && !m)
    return se(t) && r.set(t, Ai), Ai;
  if (Ft(c))
    for (let p = 0; p < c.length; p++) {
      const w = tn(c[p]);
      ju(w) && (u[w] = de);
    }
  else if (c)
    for (const p in c) {
      const w = tn(p);
      if (ju(w)) {
        const M = c[p], k = u[w] = Ft(M) || jt(M) ? { type: M } : Ue({}, M), A = k.type;
        let C = !1, O = !0;
        if (Ft(A))
          for (let D = 0; D < A.length; ++D) {
            const $ = A[D], j = jt($) && $.name;
            if (j === "Boolean") {
              C = !0;
              break;
            } else j === "String" && (O = !1);
          }
        else
          C = jt(A) && A.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = C, k[
          1
          /* shouldCastTrue */
        ] = O, (C || te(k, "default")) && f.push(w);
      }
    }
  const y = [u, f];
  return se(t) && r.set(t, y), y;
}
function ju(t) {
  return t[0] !== "$" && !vo(t);
}
const ll = (t) => t === "_" || t === "_ctx" || t === "$stable", ul = (t) => Ft(t) ? t.map(Un) : [Un(t)], _0 = (t, e, n) => {
  if (e._n)
    return e;
  const r = Rm((...o) => ul(e(...o)), n);
  return r._c = !1, r;
}, Gd = (t, e, n) => {
  const r = t._ctx;
  for (const o in t) {
    if (ll(o)) continue;
    const c = t[o];
    if (jt(c))
      e[o] = _0(o, c, r);
    else if (c != null) {
      const u = ul(c);
      e[o] = () => u;
    }
  }
}, Kd = (t, e) => {
  const n = ul(e);
  t.slots.default = () => n;
}, Wd = (t, e, n) => {
  for (const r in e)
    (n || !ll(r)) && (t[r] = e[r]);
}, w0 = (t, e, n) => {
  const r = t.slots = zd();
  if (t.vnode.shapeFlag & 32) {
    const o = e._;
    o ? (Wd(r, e, n), n && td(r, "_", o, !0)) : Gd(e, r);
  } else e && Kd(t, e);
}, x0 = (t, e, n) => {
  const { vnode: r, slots: o } = t;
  let c = !0, u = de;
  if (r.shapeFlag & 32) {
    const f = e._;
    f ? n && f === 1 ? c = !1 : Wd(o, e, n) : (c = !e.$stable, Gd(e, o)), u = e;
  } else e && (Kd(t, e), u = { default: 1 });
  if (c)
    for (const f in o)
      !ll(f) && u[f] == null && delete o[f];
}, sn = k0;
function S0(t) {
  return N0(t);
}
function N0(t, e) {
  const n = hs();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: c,
    createElement: u,
    createText: f,
    createComment: m,
    setText: y,
    setElementText: p,
    parentNode: w,
    nextSibling: M,
    setScopeId: k = Kn,
    insertStaticContent: A
  } = t, C = (I, L, V, W = null, K = null, X = null, bt = void 0, vt = null, pt = !!L.dynamicChildren) => {
    if (I === L)
      return;
    I && !so(I, L) && (W = St(I), Mt(I, K, X, !0), I = null), L.patchFlag === -2 && (pt = !1, L.dynamicChildren = null);
    const { type: et, ref: d, shapeFlag: yt } = L;
    switch (et) {
      case _s:
        O(I, L, V, W);
        break;
      case Cr:
        D(I, L, V, W);
        break;
      case Ea:
        I == null && $(L, V, W, bt);
        break;
      case ze:
        mt(
          I,
          L,
          V,
          W,
          K,
          X,
          bt,
          vt,
          pt
        );
        break;
      default:
        yt & 1 ? q(
          I,
          L,
          V,
          W,
          K,
          X,
          bt,
          vt,
          pt
        ) : yt & 6 ? ct(
          I,
          L,
          V,
          W,
          K,
          X,
          bt,
          vt,
          pt
        ) : (yt & 64 || yt & 128) && et.process(
          I,
          L,
          V,
          W,
          K,
          X,
          bt,
          vt,
          pt,
          $t
        );
    }
    d != null && K ? wo(d, I && I.ref, X, L || I, !L) : d == null && I && I.ref != null && wo(I.ref, null, X, I, !0);
  }, O = (I, L, V, W) => {
    if (I == null)
      r(
        L.el = f(L.children),
        V,
        W
      );
    else {
      const K = L.el = I.el;
      L.children !== I.children && y(K, L.children);
    }
  }, D = (I, L, V, W) => {
    I == null ? r(
      L.el = m(L.children || ""),
      V,
      W
    ) : L.el = I.el;
  }, $ = (I, L, V, W) => {
    [I.el, I.anchor] = A(
      I.children,
      L,
      V,
      W,
      I.el,
      I.anchor
    );
  }, j = ({ el: I, anchor: L }, V, W) => {
    let K;
    for (; I && I !== L; )
      K = M(I), r(I, V, W), I = K;
    r(L, V, W);
  }, S = ({ el: I, anchor: L }) => {
    let V;
    for (; I && I !== L; )
      V = M(I), o(I), I = V;
    o(L);
  }, q = (I, L, V, W, K, X, bt, vt, pt) => {
    if (L.type === "svg" ? bt = "svg" : L.type === "math" && (bt = "mathml"), I == null)
      Q(
        L,
        V,
        W,
        K,
        X,
        bt,
        vt,
        pt
      );
    else {
      const et = I.el && I.el._isVueCE ? I.el : null;
      try {
        et && et._beginPatch(), Y(
          I,
          L,
          K,
          X,
          bt,
          vt,
          pt
        );
      } finally {
        et && et._endPatch();
      }
    }
  }, Q = (I, L, V, W, K, X, bt, vt) => {
    let pt, et;
    const { props: d, shapeFlag: yt, transition: Ct, dirs: It } = I;
    if (pt = I.el = u(
      I.type,
      X,
      d && d.is,
      d
    ), yt & 8 ? p(pt, I.children) : yt & 16 && nt(
      I.children,
      pt,
      null,
      W,
      K,
      uc(I, X),
      bt,
      vt
    ), It && Fr(I, null, W, "created"), ut(pt, I, I.scopeId, bt, W), d) {
      for (const kt in d)
        kt !== "value" && !vo(kt) && c(pt, kt, null, d[kt], X, W);
      "value" in d && c(pt, "value", null, d.value, X), (et = d.onVnodeBeforeMount) && Fn(et, W, I);
    }
    It && Fr(I, null, W, "beforeMount");
    const Yt = M0(K, Ct);
    Yt && Ct.beforeEnter(pt), r(pt, L, V), ((et = d && d.onVnodeMounted) || Yt || It) && sn(() => {
      try {
        et && Fn(et, W, I), Yt && Ct.enter(pt), It && Fr(I, null, W, "mounted");
      } finally {
      }
    }, K);
  }, ut = (I, L, V, W, K) => {
    if (V && k(I, V), W)
      for (let X = 0; X < W.length; X++)
        k(I, W[X]);
    if (K) {
      let X = K.subTree;
      if (L === X || Zd(X.type) && (X.ssContent === L || X.ssFallback === L)) {
        const bt = K.vnode;
        ut(
          I,
          bt,
          bt.scopeId,
          bt.slotScopeIds,
          K.parent
        );
      }
    }
  }, nt = (I, L, V, W, K, X, bt, vt, pt = 0) => {
    for (let et = pt; et < I.length; et++) {
      const d = I[et] = vt ? ir(I[et]) : Un(I[et]);
      C(
        null,
        d,
        L,
        V,
        W,
        K,
        X,
        bt,
        vt
      );
    }
  }, Y = (I, L, V, W, K, X, bt) => {
    const vt = L.el = I.el;
    let { patchFlag: pt, dynamicChildren: et, dirs: d } = L;
    pt |= I.patchFlag & 16;
    const yt = I.props || de, Ct = L.props || de;
    let It;
    if (V && $r(V, !1), (It = Ct.onVnodeBeforeUpdate) && Fn(It, V, L, I), d && Fr(L, I, V, "beforeUpdate"), V && $r(V, !0), (yt.innerHTML && Ct.innerHTML == null || yt.textContent && Ct.textContent == null) && p(vt, ""), et ? F(
      I.dynamicChildren,
      et,
      vt,
      V,
      W,
      uc(L, K),
      X
    ) : bt || st(
      I,
      L,
      vt,
      null,
      V,
      W,
      uc(L, K),
      X,
      !1
    ), pt > 0) {
      if (pt & 16)
        rt(vt, yt, Ct, V, K);
      else if (pt & 2 && yt.class !== Ct.class && c(vt, "class", null, Ct.class, K), pt & 4 && c(vt, "style", yt.style, Ct.style, K), pt & 8) {
        const Yt = L.dynamicProps;
        for (let kt = 0; kt < Yt.length; kt++) {
          const Wt = Yt[kt], Zt = yt[Wt], Me = Ct[Wt];
          (Me !== Zt || Wt === "value") && c(vt, Wt, Zt, Me, K, V);
        }
      }
      pt & 1 && I.children !== L.children && p(vt, L.children);
    } else !bt && et == null && rt(vt, yt, Ct, V, K);
    ((It = Ct.onVnodeUpdated) || d) && sn(() => {
      It && Fn(It, V, L, I), d && Fr(L, I, V, "updated");
    }, W);
  }, F = (I, L, V, W, K, X, bt) => {
    for (let vt = 0; vt < L.length; vt++) {
      const pt = I[vt], et = L[vt], d = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        pt.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (pt.type === ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !so(pt, et) || // - In the case of a component, it could contain anything.
        pt.shapeFlag & 198) ? w(pt.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          V
        )
      );
      C(
        pt,
        et,
        d,
        null,
        W,
        K,
        X,
        bt,
        !0
      );
    }
  }, rt = (I, L, V, W, K) => {
    if (L !== V) {
      if (L !== de)
        for (const X in L)
          !vo(X) && !(X in V) && c(
            I,
            X,
            L[X],
            null,
            K,
            W
          );
      for (const X in V) {
        if (vo(X)) continue;
        const bt = V[X], vt = L[X];
        bt !== vt && X !== "value" && c(I, X, vt, bt, K, W);
      }
      "value" in V && c(I, "value", L.value, V.value, K);
    }
  }, mt = (I, L, V, W, K, X, bt, vt, pt) => {
    const et = L.el = I ? I.el : f(""), d = L.anchor = I ? I.anchor : f("");
    let { patchFlag: yt, dynamicChildren: Ct, slotScopeIds: It } = L;
    It && (vt = vt ? vt.concat(It) : It), I == null ? (r(et, V, W), r(d, V, W), nt(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      L.children || [],
      V,
      d,
      K,
      X,
      bt,
      vt,
      pt
    )) : yt > 0 && yt & 64 && Ct && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    I.dynamicChildren && I.dynamicChildren.length === Ct.length ? (F(
      I.dynamicChildren,
      Ct,
      V,
      K,
      X,
      bt,
      vt
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (L.key != null || K && L === K.subTree) && qd(
      I,
      L,
      !0
      /* shallow */
    )) : st(
      I,
      L,
      V,
      d,
      K,
      X,
      bt,
      vt,
      pt
    );
  }, ct = (I, L, V, W, K, X, bt, vt, pt) => {
    L.slotScopeIds = vt, I == null ? L.shapeFlag & 512 ? K.ctx.activate(
      L,
      V,
      W,
      bt,
      pt
    ) : Z(
      L,
      V,
      W,
      K,
      X,
      bt,
      pt
    ) : U(I, L, pt);
  }, Z = (I, L, V, W, K, X, bt) => {
    const vt = I.component = R0(
      I,
      W,
      K
    );
    if (Ad(I) && (vt.ctx.renderer = $t), F0(vt, !1, bt), vt.asyncDep) {
      if (K && K.registerDep(vt, at, bt), !I.el) {
        const pt = vt.subTree = Qe(Cr);
        D(null, pt, L, V), I.placeholder = pt.el;
      }
    } else
      at(
        vt,
        I,
        L,
        V,
        K,
        X,
        bt
      );
  }, U = (I, L, V) => {
    const W = L.component = I.component;
    if (g0(I, L, V))
      if (W.asyncDep && !W.asyncResolved) {
        it(W, L, V);
        return;
      } else
        W.next = L, W.update();
    else
      L.el = I.el, W.vnode = L;
  }, at = (I, L, V, W, K, X, bt) => {
    const vt = () => {
      if (I.isMounted) {
        let { next: yt, bu: Ct, u: It, parent: Yt, vnode: kt } = I;
        {
          const nn = Yd(I);
          if (nn) {
            yt && (yt.el = kt.el, it(I, yt, bt)), nn.asyncDep.then(() => {
              sn(() => {
                I.isUnmounted || et();
              }, K);
            });
            return;
          }
        }
        let Wt = yt, Zt;
        $r(I, !1), yt ? (yt.el = kt.el, it(I, yt, bt)) : yt = kt, Ct && ic(Ct), (Zt = yt.props && yt.props.onVnodeBeforeUpdate) && Fn(Zt, Yt, yt, kt), $r(I, !0);
        const Me = Hu(I), Ee = I.subTree;
        I.subTree = Me, C(
          Ee,
          Me,
          // parent may have changed if it's in a teleport
          w(Ee.el),
          // anchor may have changed if it's in a fragment
          St(Ee),
          I,
          K,
          X
        ), yt.el = Me.el, Wt === null && m0(I, Me.el), It && sn(It, K), (Zt = yt.props && yt.props.onVnodeUpdated) && sn(
          () => Fn(Zt, Yt, yt, kt),
          K
        );
      } else {
        let yt;
        const { el: Ct, props: It } = L, { bm: Yt, m: kt, parent: Wt, root: Zt, type: Me } = I, Ee = xo(L);
        $r(I, !1), Yt && ic(Yt), !Ee && (yt = It && It.onVnodeBeforeMount) && Fn(yt, Wt, L), $r(I, !0);
        {
          Zt.ce && Zt.ce._hasShadowRoot() && Zt.ce._injectChildStyle(
            Me,
            I.parent ? I.parent.type : void 0
          );
          const nn = I.subTree = Hu(I);
          C(
            null,
            nn,
            V,
            W,
            I,
            K,
            X
          ), L.el = nn.el;
        }
        if (kt && sn(kt, K), !Ee && (yt = It && It.onVnodeMounted)) {
          const nn = L;
          sn(
            () => Fn(yt, Wt, nn),
            K
          );
        }
        (L.shapeFlag & 256 || Wt && xo(Wt.vnode) && Wt.vnode.shapeFlag & 256) && I.a && sn(I.a, K), I.isMounted = !0, L = V = W = null;
      }
    };
    I.scope.on();
    const pt = I.effect = new od(vt);
    I.scope.off();
    const et = I.update = pt.run.bind(pt), d = I.job = pt.runIfDirty.bind(pt);
    d.i = I, d.id = I.uid, pt.scheduler = () => sl(d), $r(I, !0), et();
  }, it = (I, L, V) => {
    L.component = I;
    const W = I.vnode.props;
    I.vnode = L, I.next = null, v0(I, L.props, W, V), x0(I, L.children, V), sr(), Tu(I), cr();
  }, st = (I, L, V, W, K, X, bt, vt, pt = !1) => {
    const et = I && I.children, d = I ? I.shapeFlag : 0, yt = L.children, { patchFlag: Ct, shapeFlag: It } = L;
    if (Ct > 0) {
      if (Ct & 128) {
        Rt(
          et,
          yt,
          V,
          W,
          K,
          X,
          bt,
          vt,
          pt
        );
        return;
      } else if (Ct & 256) {
        wt(
          et,
          yt,
          V,
          W,
          K,
          X,
          bt,
          vt,
          pt
        );
        return;
      }
    }
    It & 8 ? (d & 16 && Pt(et, K, X), yt !== et && p(V, yt)) : d & 16 ? It & 16 ? Rt(
      et,
      yt,
      V,
      W,
      K,
      X,
      bt,
      vt,
      pt
    ) : Pt(et, K, X, !0) : (d & 8 && p(V, ""), It & 16 && nt(
      yt,
      V,
      W,
      K,
      X,
      bt,
      vt,
      pt
    ));
  }, wt = (I, L, V, W, K, X, bt, vt, pt) => {
    I = I || Ai, L = L || Ai;
    const et = I.length, d = L.length, yt = Math.min(et, d);
    let Ct;
    for (Ct = 0; Ct < yt; Ct++) {
      const It = L[Ct] = pt ? ir(L[Ct]) : Un(L[Ct]);
      C(
        I[Ct],
        It,
        V,
        null,
        K,
        X,
        bt,
        vt,
        pt
      );
    }
    et > d ? Pt(
      I,
      K,
      X,
      !0,
      !1,
      yt
    ) : nt(
      L,
      V,
      W,
      K,
      X,
      bt,
      vt,
      pt,
      yt
    );
  }, Rt = (I, L, V, W, K, X, bt, vt, pt) => {
    let et = 0;
    const d = L.length;
    let yt = I.length - 1, Ct = d - 1;
    for (; et <= yt && et <= Ct; ) {
      const It = I[et], Yt = L[et] = pt ? ir(L[et]) : Un(L[et]);
      if (so(It, Yt))
        C(
          It,
          Yt,
          V,
          null,
          K,
          X,
          bt,
          vt,
          pt
        );
      else
        break;
      et++;
    }
    for (; et <= yt && et <= Ct; ) {
      const It = I[yt], Yt = L[Ct] = pt ? ir(L[Ct]) : Un(L[Ct]);
      if (so(It, Yt))
        C(
          It,
          Yt,
          V,
          null,
          K,
          X,
          bt,
          vt,
          pt
        );
      else
        break;
      yt--, Ct--;
    }
    if (et > yt) {
      if (et <= Ct) {
        const It = Ct + 1, Yt = It < d ? L[It].el : W;
        for (; et <= Ct; )
          C(
            null,
            L[et] = pt ? ir(L[et]) : Un(L[et]),
            V,
            Yt,
            K,
            X,
            bt,
            vt,
            pt
          ), et++;
      }
    } else if (et > Ct)
      for (; et <= yt; )
        Mt(I[et], K, X, !0), et++;
    else {
      const It = et, Yt = et, kt = /* @__PURE__ */ new Map();
      for (et = Yt; et <= Ct; et++) {
        const Be = L[et] = pt ? ir(L[et]) : Un(L[et]);
        Be.key != null && kt.set(Be.key, et);
      }
      let Wt, Zt = 0;
      const Me = Ct - Yt + 1;
      let Ee = !1, nn = 0;
      const rn = new Array(Me);
      for (et = 0; et < Me; et++) rn[et] = 0;
      for (et = It; et <= yt; et++) {
        const Be = I[et];
        if (Zt >= Me) {
          Mt(Be, K, X, !0);
          continue;
        }
        let pn;
        if (Be.key != null)
          pn = kt.get(Be.key);
        else
          for (Wt = Yt; Wt <= Ct; Wt++)
            if (rn[Wt - Yt] === 0 && so(Be, L[Wt])) {
              pn = Wt;
              break;
            }
        pn === void 0 ? Mt(Be, K, X, !0) : (rn[pn - Yt] = et + 1, pn >= nn ? nn = pn : Ee = !0, C(
          Be,
          L[pn],
          V,
          null,
          K,
          X,
          bt,
          vt,
          pt
        ), Zt++);
      }
      const Ie = Ee ? P0(rn) : Ai;
      for (Wt = Ie.length - 1, et = Me - 1; et >= 0; et--) {
        const Be = Yt + et, pn = L[Be], fr = L[Be + 1], dr = Be + 1 < d ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          fr.el || Xd(fr)
        ) : W;
        rn[et] === 0 ? C(
          null,
          pn,
          V,
          dr,
          K,
          X,
          bt,
          vt,
          pt
        ) : Ee && (Wt < 0 || et !== Ie[Wt] ? J(pn, V, dr, 2) : Wt--);
      }
    }
  }, J = (I, L, V, W, K = null) => {
    const { el: X, type: bt, transition: vt, children: pt, shapeFlag: et } = I;
    if (et & 6) {
      J(I.component.subTree, L, V, W);
      return;
    }
    if (et & 128) {
      I.suspense.move(L, V, W);
      return;
    }
    if (et & 64) {
      bt.move(I, L, V, $t);
      return;
    }
    if (bt === ze) {
      r(X, L, V);
      for (let yt = 0; yt < pt.length; yt++)
        J(pt[yt], L, V, W);
      r(I.anchor, L, V);
      return;
    }
    if (bt === Ea) {
      j(I, L, V);
      return;
    }
    if (W !== 2 && et & 1 && vt)
      if (W === 0)
        vt.beforeEnter(X), r(X, L, V), sn(() => vt.enter(X), K);
      else {
        const { leave: yt, delayLeave: Ct, afterLeave: It } = vt, Yt = () => {
          I.ctx.isUnmounted ? o(X) : r(X, L, V);
        }, kt = () => {
          X._isLeaving && X[jm](
            !0
            /* cancelled */
          ), yt(X, () => {
            Yt(), It && It();
          });
        };
        Ct ? Ct(X, Yt, kt) : kt();
      }
    else
      r(X, L, V);
  }, Mt = (I, L, V, W = !1, K = !1) => {
    const {
      type: X,
      props: bt,
      ref: vt,
      children: pt,
      dynamicChildren: et,
      shapeFlag: d,
      patchFlag: yt,
      dirs: Ct,
      cacheIndex: It,
      memo: Yt
    } = I;
    if (yt === -2 && (K = !1), vt != null && (sr(), wo(vt, null, V, I, !0), cr()), It != null && (L.renderCache[It] = void 0), d & 256) {
      L.ctx.deactivate(I);
      return;
    }
    const kt = d & 1 && Ct, Wt = !xo(I);
    let Zt;
    if (Wt && (Zt = bt && bt.onVnodeBeforeUnmount) && Fn(Zt, L, I), d & 6)
      H(I.component, V, W);
    else {
      if (d & 128) {
        I.suspense.unmount(V, W);
        return;
      }
      kt && Fr(I, null, L, "beforeUnmount"), d & 64 ? I.type.remove(
        I,
        L,
        V,
        $t,
        W
      ) : et && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !et.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (X !== ze || yt > 0 && yt & 64) ? Pt(
        et,
        L,
        V,
        !1,
        !0
      ) : (X === ze && yt & 384 || !K && d & 16) && Pt(pt, L, V), W && Bt(I);
    }
    const Me = Yt != null && It == null;
    (Wt && (Zt = bt && bt.onVnodeUnmounted) || kt || Me) && sn(() => {
      Zt && Fn(Zt, L, I), kt && Fr(I, null, L, "unmounted"), Me && (I.el = null);
    }, V);
  }, Bt = (I) => {
    const { type: L, el: V, anchor: W, transition: K } = I;
    if (L === ze) {
      ye(V, W);
      return;
    }
    if (L === Ea) {
      S(I);
      return;
    }
    const X = () => {
      o(V), K && !K.persisted && K.afterLeave && K.afterLeave();
    };
    if (I.shapeFlag & 1 && K && !K.persisted) {
      const { leave: bt, delayLeave: vt } = K, pt = () => bt(V, X);
      vt ? vt(I.el, X, pt) : pt();
    } else
      X();
  }, ye = (I, L) => {
    let V;
    for (; I !== L; )
      V = M(I), o(I), I = V;
    o(L);
  }, H = (I, L, V) => {
    const { bum: W, scope: K, job: X, subTree: bt, um: vt, m: pt, a: et } = I;
    Uu(pt), Uu(et), W && ic(W), K.stop(), X && (X.flags |= 8, Mt(bt, I, L, V)), vt && sn(vt, L), sn(() => {
      I.isUnmounted = !0;
    }, L);
  }, Pt = (I, L, V, W = !1, K = !1, X = 0) => {
    for (let bt = X; bt < I.length; bt++)
      Mt(I[bt], L, V, W, K);
  }, St = (I) => {
    if (I.shapeFlag & 6)
      return St(I.component.subTree);
    if (I.shapeFlag & 128)
      return I.suspense.next();
    const L = M(I.anchor || I.el), V = L && L[Hm];
    return V ? M(V) : L;
  };
  let Dt = !1;
  const zt = (I, L, V) => {
    let W;
    I == null ? L._vnode && (Mt(L._vnode, null, null, !0), W = L._vnode.component) : C(
      L._vnode || null,
      I,
      L,
      null,
      null,
      null,
      V
    ), L._vnode = I, Dt || (Dt = !0, Tu(W), Sd(), Dt = !1);
  }, $t = {
    p: C,
    um: Mt,
    m: J,
    r: Bt,
    mt: Z,
    mc: nt,
    pc: st,
    pbc: F,
    n: St,
    o: t
  };
  return {
    render: zt,
    hydrate: void 0,
    createApp: l0(zt)
  };
}
function uc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function $r({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function M0(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function qd(t, e, n = !1) {
  const r = t.children, o = e.children;
  if (Ft(r) && Ft(o))
    for (let c = 0; c < r.length; c++) {
      const u = r[c];
      let f = o[c];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = o[c] = ir(o[c]), f.el = u.el), !n && f.patchFlag !== -2 && qd(u, f)), f.type === _s && (f.patchFlag === -1 && (f = o[c] = ir(f)), f.el = u.el), f.type === Cr && !f.el && (f.el = u.el);
    }
}
function P0(t) {
  const e = t.slice(), n = [0];
  let r, o, c, u, f;
  const m = t.length;
  for (r = 0; r < m; r++) {
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
function Yd(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : Yd(e);
}
function Uu(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function Xd(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? Xd(e.subTree) : null;
}
const Zd = (t) => t.__isSuspense;
function k0(t, e) {
  e && e.pendingBranch ? Ft(t) ? e.effects.push(...t) : e.effects.push(t) : Dm(t);
}
const ze = /* @__PURE__ */ Symbol.for("v-fgt"), _s = /* @__PURE__ */ Symbol.for("v-txt"), Cr = /* @__PURE__ */ Symbol.for("v-cmt"), Ea = /* @__PURE__ */ Symbol.for("v-stc"), No = [];
let hn = null;
function xe(t = !1) {
  No.push(hn = t ? null : []);
}
function C0() {
  No.pop(), hn = No[No.length - 1] || null;
}
let Do = 1;
function Bu(t, e = !1) {
  Do += t, t < 0 && hn && e && (hn.hasOnce = !0);
}
function Jd(t) {
  return t.dynamicChildren = Do > 0 ? hn || Ai : null, C0(), Do > 0 && hn && hn.push(t), t;
}
function $e(t, e, n, r, o, c) {
  return Jd(
    _e(
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
function zi(t, e, n, r, o) {
  return Jd(
    Qe(
      t,
      e,
      n,
      r,
      o,
      !0
    )
  );
}
function Qd(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function so(t, e) {
  return t.type === e.type && t.key === e.key;
}
const th = ({ key: t }) => t ?? null, Ta = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Ce(t) || /* @__PURE__ */ en(t) || jt(t) ? { i: Pn, r: t, k: e, f: !!n } : t : null);
function _e(t, e = null, n = null, r = 0, o = null, c = t === ze ? 0 : 1, u = !1, f = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && th(e),
    ref: e && Ta(e),
    scopeId: Md,
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
    ctx: Pn
  };
  return f ? (fl(m, n), c & 128 && t.normalize(m)) : n && (m.shapeFlag |= Ce(n) ? 8 : 16), Do > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  hn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && hn.push(m), m;
}
const Qe = A0;
function A0(t, e = null, n = null, r = 0, o = null, c = !1) {
  if ((!t || t === Dd) && (t = Cr), Qd(t)) {
    const f = $i(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && fl(f, n), Do > 0 && !c && hn && (f.shapeFlag & 6 ? hn[hn.indexOf(t)] = f : hn.push(f)), f.patchFlag = -2, f;
  }
  if (j0(t) && (t = t.__vccOpts), e) {
    e = I0(e);
    let { class: f, style: m } = e;
    f && !Ce(f) && (e.class = gs(f)), se(m) && (/* @__PURE__ */ ol(m) && !Ft(m) && (m = Ue({}, m)), e.style = ps(m));
  }
  const u = Ce(t) ? 1 : Zd(t) ? 128 : zm(t) ? 64 : se(t) ? 4 : jt(t) ? 2 : 0;
  return _e(
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
function I0(t) {
  return t ? /* @__PURE__ */ ol(t) || jd(t) ? Ue({}, t) : t : null;
}
function $i(t, e, n = !1, r = !1) {
  const { props: o, ref: c, patchFlag: u, children: f, transition: m } = t, y = e ? eh(o || {}, e) : o, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: y,
    key: y && th(y),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && c ? Ft(c) ? c.concat(Ta(e)) : [c, Ta(e)] : Ta(e)
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
    patchFlag: e && t.type !== ze ? u === -1 ? 16 : u | 16 : u,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: m,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && $i(t.ssContent),
    ssFallback: t.ssFallback && $i(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return m && r && cl(
    p,
    m.clone(p)
  ), p;
}
function E0(t = " ", e = 0) {
  return Qe(_s, null, t, e);
}
function T0(t, e) {
  const n = Qe(Ea, null, t);
  return n.staticCount = e, n;
}
function La(t = "", e = !1) {
  return e ? (xe(), zi(Cr, null, t)) : Qe(Cr, null, t);
}
function Un(t) {
  return t == null || typeof t == "boolean" ? Qe(Cr) : Ft(t) ? Qe(
    ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : Qd(t) ? ir(t) : Qe(_s, null, String(t));
}
function ir(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : $i(t);
}
function fl(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Ft(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), fl(t, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = e._;
      !o && !jd(e) ? e._ctx = Pn : o === 3 && Pn && (Pn.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else jt(e) ? (e = { default: e, _ctx: Pn }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [E0(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function eh(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const o in r)
      if (o === "class")
        e.class !== r.class && (e.class = gs([e.class, r.class]));
      else if (o === "style")
        e.style = ps([e.style, r.style]);
      else if (ls(o)) {
        const c = e[o], u = r[o];
        u && c !== u && !(Ft(c) && c.includes(u)) ? e[o] = c ? [].concat(c, u) : u : u == null && c == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !us(o) && (e[o] = u);
      } else o !== "" && (e[o] = r[o]);
  }
  return e;
}
function Fn(t, e, n, r = null) {
  qn(t, e, 7, [
    n,
    r
  ]);
}
const L0 = Fd();
let D0 = 0;
function R0(t, e, n) {
  const r = t.type, o = (e ? e.appContext : t.appContext) || L0, c = {
    uid: D0++,
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
    scope: new im(
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
    propsOptions: Bd(r, o),
    emitsOptions: $d(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: de,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: de,
    data: de,
    props: de,
    attrs: de,
    slots: de,
    refs: de,
    setupState: de,
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
  return c.ctx = { _: c }, c.root = e ? e.root : c, c.emit = f0.bind(null, c), t.ce && t.ce(c), c;
}
let je = null;
const O0 = () => je || Pn;
let Wa, Dc;
{
  const t = hs(), e = (n, r) => {
    let o;
    return (o = t[n]) || (o = t[n] = []), o.push(r), (c) => {
      o.length > 1 ? o.forEach((u) => u(c)) : o[0](c);
    };
  };
  Wa = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => je = n
  ), Dc = e(
    "__VUE_SSR_SETTERS__",
    (n) => Ro = n
  );
}
const Vo = (t) => {
  const e = je;
  return Wa(t), t.scope.on(), () => {
    t.scope.off(), Wa(e);
  };
}, Gu = () => {
  je && je.scope.off(), Wa(null);
};
function nh(t) {
  return t.vnode.shapeFlag & 4;
}
let Ro = !1;
function F0(t, e = !1, n = !1) {
  e && Dc(e);
  const { props: r, children: o } = t.vnode, c = nh(t);
  y0(t, r, c, e), w0(t, o, n || e);
  const u = c ? $0(t, e) : void 0;
  return e && Dc(!1), u;
}
function $0(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, n0);
  const { setup: r } = n;
  if (r) {
    sr();
    const o = t.setupContext = r.length > 1 ? H0(t) : null, c = Vo(t), u = $o(
      r,
      t,
      0,
      [
        t.props,
        o
      ]
    ), f = Zf(u);
    if (cr(), c(), (f || t.sp) && !xo(t) && Cd(t), f) {
      if (u.then(Gu, Gu), e)
        return u.then((m) => {
          Ku(t, m);
        }).catch((m) => {
          ys(m, t, 0);
        });
      t.asyncDep = u;
    } else
      Ku(t, u);
  } else
    rh(t);
}
function Ku(t, e, n) {
  jt(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : se(e) && (t.setupState = _d(e)), rh(t);
}
function rh(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || Kn);
  {
    const o = Vo(t);
    sr();
    try {
      r0(t);
    } finally {
      cr(), o();
    }
  }
}
const V0 = {
  get(t, e) {
    return He(t, "get", ""), t[e];
  }
};
function H0(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, V0),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function dl(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(_d(Mm(t.exposed)), {
    get(e, n) {
      if (n in e)
        return e[n];
      if (n in So)
        return So[n](t);
    },
    has(e, n) {
      return n in e || n in So;
    }
  })) : t.proxy;
}
function z0(t, e = !0) {
  return jt(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function j0(t) {
  return jt(t) && "__vccOpts" in t;
}
const Di = (t, e) => /* @__PURE__ */ Cm(t, e, Ro), U0 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Rc;
const Wu = typeof window < "u" && window.trustedTypes;
if (Wu)
  try {
    Rc = /* @__PURE__ */ Wu.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const ih = Rc ? (t) => Rc.createHTML(t) : (t) => t, B0 = "http://www.w3.org/2000/svg", G0 = "http://www.w3.org/1998/Math/MathML", rr = typeof document < "u" ? document : null, qu = rr && /* @__PURE__ */ rr.createElement("template"), K0 = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const o = e === "svg" ? rr.createElementNS(B0, t) : e === "mathml" ? rr.createElementNS(G0, t) : n ? rr.createElement(t, { is: n }) : rr.createElement(t);
    return t === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (t) => rr.createTextNode(t),
  createComment: (t) => rr.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => rr.querySelector(t),
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
      qu.innerHTML = ih(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const f = qu.content;
      if (r === "svg" || r === "mathml") {
        const m = f.firstChild;
        for (; m.firstChild; )
          f.appendChild(m.firstChild);
        f.removeChild(m);
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
}, W0 = /* @__PURE__ */ Symbol("_vtc");
function q0(t, e, n) {
  const r = t[W0];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const Yu = /* @__PURE__ */ Symbol("_vod"), Y0 = /* @__PURE__ */ Symbol("_vsh"), X0 = /* @__PURE__ */ Symbol(""), Z0 = /(?:^|;)\s*display\s*:/;
function J0(t, e, n) {
  const r = t.style, o = Ce(n);
  let c = !1;
  if (n && !o) {
    if (e)
      if (Ce(e))
        for (const u of e.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && Da(r, f, "");
        }
      else
        for (const u in e)
          n[u] == null && Da(r, u, "");
    for (const u in n)
      u === "display" && (c = !0), Da(r, u, n[u]);
  } else if (o) {
    if (e !== n) {
      const u = r[X0];
      u && (n += ";" + u), r.cssText = n, c = Z0.test(n);
    }
  } else e && t.removeAttribute("style");
  Yu in t && (t[Yu] = c ? r.display : "", t[Y0] && (r.display = "none"));
}
const Xu = /\s*!important$/;
function Da(t, e, n) {
  if (Ft(n))
    n.forEach((r) => Da(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = Q0(t, e);
    Xu.test(n) ? t.setProperty(
      ti(r),
      n.replace(Xu, ""),
      "important"
    ) : t[r] = n;
  }
}
const Zu = ["Webkit", "Moz", "ms"], fc = {};
function Q0(t, e) {
  const n = fc[e];
  if (n)
    return n;
  let r = tn(e);
  if (r !== "filter" && r in t)
    return fc[e] = r;
  r = ds(r);
  for (let o = 0; o < Zu.length; o++) {
    const c = Zu[o] + r;
    if (c in t)
      return fc[e] = c;
  }
  return e;
}
const Ju = "http://www.w3.org/1999/xlink";
function Qu(t, e, n, r, o, c = nm(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(Ju, e.slice(6, e.length)) : t.setAttributeNS(Ju, e, n) : n == null || c && !ed(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    c ? "" : Wn(n) ? String(n) : n
  );
}
function tf(t, e, n, r, o) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? ih(n) : n);
    return;
  }
  const c = t.tagName;
  if (e === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const f = c === "OPTION" ? t.getAttribute("value") || "" : t.value, m = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== m || !("_value" in t)) && (t.value = m), n == null && t.removeAttribute(e), t._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const f = typeof t[e];
    f === "boolean" ? n = ed(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(o || e);
}
function t1(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function e1(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const ef = /* @__PURE__ */ Symbol("_vei");
function n1(t, e, n, r, o = null) {
  const c = t[ef] || (t[ef] = {}), u = c[e];
  if (r && u)
    u.value = r;
  else {
    const [f, m] = r1(e);
    if (r) {
      const y = c[e] = a1(
        r,
        o
      );
      t1(t, f, y, m);
    } else u && (e1(t, f, u, m), c[e] = void 0);
  }
}
const nf = /(?:Once|Passive|Capture)$/;
function r1(t) {
  let e;
  if (nf.test(t)) {
    e = {};
    let r;
    for (; r = t.match(nf); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : ti(t.slice(2)), e];
}
let dc = 0;
const i1 = /* @__PURE__ */ Promise.resolve(), o1 = () => dc || (i1.then(() => dc = 0), dc = Date.now());
function a1(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    qn(
      s1(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = o1(), n;
}
function s1(t, e) {
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
const rf = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, c1 = (t, e, n, r, o, c) => {
  const u = o === "svg";
  e === "class" ? q0(t, r, u) : e === "style" ? J0(t, n, r) : ls(e) ? us(e) || n1(t, e, n, r, c) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : l1(t, e, r, u)) ? (tf(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Qu(t, e, r, u, c, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (u1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !Ce(r))) ? tf(t, tn(e), r, c, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), Qu(t, e, r, u));
};
function l1(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && rf(e) && jt(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const o = t.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return rf(e) && Ce(n) ? !1 : e in t;
}
function u1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const r = tn(e);
  return Array.isArray(n) ? n.some((o) => tn(o) === r) : Object.keys(n).some((o) => tn(o) === r);
}
const f1 = ["ctrl", "shift", "alt", "meta"], d1 = {
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
  exact: (t, e) => f1.some((n) => t[`${n}Key`] && !e.includes(n))
}, h1 = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = ((o, ...c) => {
    for (let u = 0; u < e.length; u++) {
      const f = d1[e[u]];
      if (f && f(o, e)) return;
    }
    return t(o, ...c);
  }));
}, p1 = /* @__PURE__ */ Ue({ patchProp: c1 }, K0);
let of;
function g1() {
  return of || (of = S0(p1));
}
const m1 = ((...t) => {
  const e = g1().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const o = v1(r);
    if (!o) return;
    const c = e._component;
    !jt(c) && !c.render && !c.template && (c.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const u = n(o, !1, y1(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), u;
  }, e;
});
function y1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function v1(t) {
  return Ce(t) ? document.querySelector(t) : t;
}
const Te = Math.PI / 180, oh = Math.PI * 2, b1 = 2048;
function ge(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Ar(t, e, n) {
  return { x: t, y: e, z: n };
}
function qa(t, e) {
  return Ar(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Mi(t, e) {
  return Ar(t.x * e, t.y * e, t.z * e);
}
function Ra(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function af(t, e) {
  return Ar(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function go(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Ar(t.x / e, t.y / e, t.z / e);
}
function _1(t, e) {
  const n = Number(t || 0) * Te, r = Number(e || 0) * Te, o = Math.cos(r);
  return Ar(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Oa(t, e, n = 0) {
  const r = _1(t, e);
  let o = Ar(0, 1, 0);
  Math.abs(Ra(r, o)) > 0.999 && (o = Ar(0, 0, 1));
  let c = go(af(o, r)), u = go(af(r, c));
  const f = Number(n || 0) * Te, m = Math.cos(f), y = Math.sin(f), p = qa(Mi(c, m), Mi(u, y)), w = qa(Mi(c, -y), Mi(u, m));
  return c = go(p), u = go(w), { fwd: r, right: c, up: u };
}
function w1(t, e) {
  const n = (Number(t || 0) - 0.5) * oh, r = (0.5 - Number(e || 0)) * Math.PI, o = Math.cos(r);
  return Ar(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function sf(t, e, n = 1) {
  const r = Math.max(1, Math.round(Number(t || 1))), o = Math.max(1, Math.round(Number(e || 1))), c = Math.max(1, Number(n || 1)), u = Math.max(512, b1), f = Math.min(1, u / Math.max(r, o));
  return {
    sourceWidth: r,
    sourceHeight: o,
    sourceDpr: c,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(o * f))
  };
}
function cf(t, e, n) {
  const r = t.createShader(e);
  if (t.shaderSource(r, n), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(r) || "shader compile failed";
    throw t.deleteShader(r), new Error(o);
  }
  return r;
}
function lf(t, e, n) {
  const r = cf(t, t.VERTEX_SHADER, e);
  let o;
  try {
    o = cf(t, t.FRAGMENT_SHADER, n);
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
const uf = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, x1 = `#version 300 es
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
}`, S1 = `#version 300 es
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
function fa(t, e, n) {
  if (!t || t.mode === "unwrap") return null;
  const r = Number(t.mode === "cutout" ? t.hFovDeg || 90 : t.fovDeg || 100), o = Number(t.mode === "cutout" ? t.vFovDeg || 60 : 2 * Math.atan(Math.tan(ge(r, 1, 179) * Te * 0.5) * (n / Math.max(e, 1))) / Te);
  return {
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.mode === "cutout" && t.rollDeg || 0),
    hFovDeg: ge(r, 1, 179),
    vFovDeg: ge(o, 0.1, 179)
  };
}
function N1(t) {
  const e = Oa(
    Number(t.yawDeg || 0),
    Number(t.pitchDeg || 0),
    Number(t.rollDeg || 0)
  );
  return {
    right: e.right,
    up: e.up,
    fwd: e.fwd,
    tanX: Math.tan(ge(Number(t.hFovDeg || 30), 0.1, 179) * 0.5 * Te),
    tanY: Math.tan(ge(Number(t.vFovDeg || 30), 0.1, 179) * 0.5 * Te),
    crop: t.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: ge(Number(t.opacity ?? 1), 0, 1)
  };
}
function M1() {
  const t = document.createElement("canvas");
  let e = null, n = null, r = null, o = null, c = null, u = null, f = null, m = null, y = null, p = null, w = !1, M = sf(1, 1, 1), k = null, A = null, C = null, O = null;
  const D = /* @__PURE__ */ new Map();
  let $ = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  };
  function j(H = null, Pt = null) {
    const St = e.createTexture();
    return e.bindTexture(e.TEXTURE_2D, St), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, H ?? e.REPEAT), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, Pt ?? e.CLAMP_TO_EDGE), St;
  }
  function S() {
    if (w) return !0;
    try {
      return e = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), e ? (n = lf(e, uf, x1), r = lf(e, uf, S1), k = {
        mode: e.getUniformLocation(n, "u_mode"),
        yaw: e.getUniformLocation(n, "u_yaw"),
        pitch: e.getUniformLocation(n, "u_pitch"),
        roll: e.getUniformLocation(n, "u_roll"),
        hFov: e.getUniformLocation(n, "u_hfov"),
        vFov: e.getUniformLocation(n, "u_vfov"),
        viewport: e.getUniformLocation(n, "u_viewport"),
        opacity: e.getUniformLocation(n, "u_opacity"),
        paintOpacity: e.getUniformLocation(n, "u_paintOpacity"),
        maskOpacity: e.getUniformLocation(n, "u_maskOpacity"),
        hasPaint: e.getUniformLocation(n, "u_hasPaint"),
        hasMask: e.getUniformLocation(n, "u_hasMask"),
        showMaskTint: e.getUniformLocation(n, "u_showMaskTint"),
        maskTint: e.getUniformLocation(n, "u_maskTint"),
        background: e.getUniformLocation(n, "u_background"),
        paint: e.getUniformLocation(n, "u_paint"),
        mask: e.getUniformLocation(n, "u_mask")
      }, A = {
        texture: e.getUniformLocation(r, "u_texture"),
        mode: e.getUniformLocation(r, "u_mode"),
        viewRight: e.getUniformLocation(r, "u_viewRight"),
        viewUp: e.getUniformLocation(r, "u_viewUp"),
        viewFwd: e.getUniformLocation(r, "u_viewFwd"),
        viewHfov: e.getUniformLocation(r, "u_viewHfov"),
        viewVfov: e.getUniformLocation(r, "u_viewVfov"),
        stickerRight: e.getUniformLocation(r, "u_stickerRight"),
        stickerUp: e.getUniformLocation(r, "u_stickerUp"),
        stickerFwd: e.getUniformLocation(r, "u_stickerFwd"),
        stickerTanX: e.getUniformLocation(r, "u_stickerTanX"),
        stickerTanY: e.getUniformLocation(r, "u_stickerTanY"),
        crop: e.getUniformLocation(r, "u_crop"),
        opacity: e.getUniformLocation(r, "u_opacity")
      }, o = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, o), e.bufferData(e.ARRAY_BUFFER, new Float32Array([
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
      ]), e.STATIC_DRAW), c = j(e.REPEAT, e.CLAMP_TO_EDGE), u = j(e.REPEAT, e.CLAMP_TO_EDGE), f = j(e.REPEAT, e.CLAMP_TO_EDGE), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), w = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function q() {
    var H;
    if (e) {
      try {
        o && e.deleteBuffer(o), c && e.deleteTexture(c), u && e.deleteTexture(u), f && e.deleteTexture(f), D.forEach((Pt) => {
          mt(Pt);
        }), n && e.deleteProgram(n), r && e.deleteProgram(r), (H = e.getExtension("WEBGL_lose_context")) == null || H.loseContext();
      } catch {
      }
      e = null, n = null, r = null, o = null, c = null, u = null, f = null, D.clear(), m = null, y = null, p = null, $ = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, C = null, O = null, w = !1;
    }
  }
  function Q(H, Pt, St = 1) {
    M = sf(H, Pt, St), (t.width !== M.width || t.height !== M.height) && (t.width = M.width, t.height = M.height);
  }
  function ut(H, Pt, St = [], Dt = { width: 0, height: 0 }, zt = !1) {
    if (!e || !H || !Pt) return !1;
    const $t = Math.max(1, Number(Pt.width || Pt.videoWidth || Pt.naturalWidth || 0)), Gt = Math.max(1, Number(Pt.height || Pt.videoHeight || Pt.naturalHeight || 0)), I = Array.isArray(St) ? St.filter((L) => L && L.w > 0 && L.h > 0) : [];
    if (!I.length) return !1;
    if (e.bindTexture(e.TEXTURE_2D, H), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, zt ? 1 : 0), Dt.width !== $t || Dt.height !== Gt)
      return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, Pt), Dt.width = $t, Dt.height = Gt, e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (C || (C = document.createElement("canvas"), O = C.getContext("2d")), !O)
      return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, Pt), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const L of I) {
      const V = Math.max(0, Math.floor(Number(L.x || 0))), W = Math.max(0, Math.floor(Number(L.y || 0))), K = Math.min($t - V, Math.ceil(Number(L.w || 0))), X = Math.min(Gt - W, Math.ceil(Number(L.h || 0)));
      if (!(K <= 0 || X <= 0)) {
        if (C.width !== K || C.height !== X) {
          if (C.width = K, C.height = X, O = C.getContext("2d"), !O)
            return e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, Pt), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          O.clearRect(0, 0, K, X);
        O.drawImage(Pt, V, W, K, X, 0, 0, K, X), e.texSubImage2D(e.TEXTURE_2D, 0, V, W, e.RGBA, e.UNSIGNED_BYTE, C);
      }
    }
    return e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function nt(H, Pt, St, Dt, zt = null, $t = !1) {
    if (!S()) return !1;
    if (!St)
      return H === "background" ? m = null : H === "paint" ? y = null : p = null, !1;
    const Gt = String(Dt ?? ""), I = H === "background" ? m : H === "paint" ? y : p, L = $[H], V = Math.max(1, Number(St.width || St.videoWidth || St.naturalWidth || 0)), W = Math.max(1, Number(St.height || St.videoHeight || St.naturalHeight || 0)), K = L.width !== V || L.height !== W;
    return I === Gt && !K && !(Array.isArray(zt) && zt.length) || (e.bindTexture(e.TEXTURE_2D, Pt), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, $t ? 1 : 0), (Array.isArray(zt) && zt.length ? ut(Pt, St, zt, L, $t) : !1) || (e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, St), L.width = V, L.height = W), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), H === "background" ? m = Gt : H === "paint" ? y = Gt : p = Gt), !0;
  }
  function Y(H, Pt) {
    return nt("background", c, H, Pt, null, !0);
  }
  function F(H, Pt, St = null) {
    return nt("paint", u, H, Pt, St, !0);
  }
  function rt(H, Pt, St = null) {
    return nt("mask", f, H, Pt, St, !0);
  }
  function mt(H) {
    H != null && H.texture && e && e.deleteTexture(H.texture);
  }
  function ct(H) {
    if (!e || !(H != null && H.assetId) || !(H != null && H.source)) return null;
    const Pt = String(H.assetId), St = String(H.revision ?? ""), Dt = H.source, zt = Math.max(1, Number(Dt.width || Dt.naturalWidth || Dt.videoWidth || 0)), $t = Math.max(1, Number(Dt.height || Dt.naturalHeight || Dt.videoHeight || 0));
    if (zt <= 0 || $t <= 0) return null;
    let Gt = D.get(Pt);
    return Gt || (Gt = {
      texture: j(e.CLAMP_TO_EDGE, e.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, D.set(Pt, Gt)), (Gt.revision !== St || Gt.width !== zt || Gt.height !== $t) && (e.bindTexture(e.TEXTURE_2D, Gt.texture), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, Dt), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), Gt.revision = St, Gt.width = zt, Gt.height = $t), Gt.texture;
  }
  function Z(H = []) {
    if (!S()) return !1;
    const Pt = /* @__PURE__ */ new Set();
    return H.forEach((St) => {
      !(St != null && St.assetId) || !(St != null && St.source) || (Pt.add(String(St.assetId)), ct(St));
    }), D.forEach((St, Dt) => {
      Pt.has(Dt) || (mt(St), D.delete(Dt));
    }), !0;
  }
  function U() {
    return S() ? (e.viewport(0, 0, t.width, t.height), e.disable(e.DEPTH_TEST), e.disable(e.CULL_FACE), e.clearColor(0, 0, 0, 0), e.clear(e.COLOR_BUFFER_BIT), !0) : !1;
  }
  function at(H) {
    e.useProgram(H), e.bindBuffer(e.ARRAY_BUFFER, o), e.enableVertexAttribArray(0), e.vertexAttribPointer(0, 2, e.FLOAT, !1, 0, 0);
  }
  function it(H, Pt = {}) {
    if (!m) return null;
    e.disable(e.BLEND), at(n), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, c), e.uniform1i(k.background, 0), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, u), e.uniform1i(k.paint, 1), e.activeTexture(e.TEXTURE2), e.bindTexture(e.TEXTURE_2D, f), e.uniform1i(k.mask, 2), e.uniform2f(k.viewport, Math.max(1, M.width), Math.max(1, M.height)), e.uniform1i(k.mode, (H == null ? void 0 : H.mode) === "unwrap" ? 0 : (H == null ? void 0 : H.mode) === "cutout" ? 2 : 1);
    const St = fa(H, M.width, M.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return e.uniform1f(k.yaw, Number(St.yawDeg || 0) * Te), e.uniform1f(k.pitch, Number(St.pitchDeg || 0) * Te), e.uniform1f(k.roll, Number(St.rollDeg || 0) * Te), e.uniform1f(k.hFov, ge(Number(St.hFovDeg || 90), 0.1, 179) * Te), e.uniform1f(k.vFov, ge(Number(St.vFovDeg || 60), 0.1, 179) * Te), e.uniform1f(k.opacity, ge(Number(Pt.backgroundOpacity ?? 1), 0, 1)), e.uniform1f(k.paintOpacity, ge(Number(Pt.paintOpacity ?? 1), 0, 1)), e.uniform1f(k.maskOpacity, ge(Number(Pt.maskOpacity ?? 0.55), 0, 1)), e.uniform1i(k.hasPaint, y != null ? 1 : 0), e.uniform1i(k.hasMask, p != null ? 1 : 0), e.uniform1i(k.showMaskTint, Pt.showMaskTint === !1 ? 0 : 1), e.uniform3f(k.maskTint, 34 / 255, 197 / 255, 94 / 255), e.drawArrays(e.TRIANGLES, 0, 6), t;
  }
  function st(H, Pt, St) {
    var L;
    if (!((L = H == null ? void 0 : H.stickers) != null && L.length) || !(Pt != null && Pt.length)) return;
    const Dt = (St == null ? void 0 : St.mode) === "unwrap" ? 0 : (St == null ? void 0 : St.mode) === "cutout" ? 2 : 1, zt = fa(St, M.width, M.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, $t = Oa(zt.yawDeg, zt.pitchDeg, zt.rollDeg), Gt = /* @__PURE__ */ new Map();
    Pt.forEach((V) => {
      const W = ct(V);
      W && Gt.set(String(V.assetId || ""), W);
    }), e.enable(e.BLEND), e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA), at(r), e.uniform1i(A.texture, 0), e.uniform1i(A.mode, Dt), e.uniform3f(A.viewRight, $t.right.x, $t.right.y, $t.right.z), e.uniform3f(A.viewUp, $t.up.x, $t.up.y, $t.up.z), e.uniform3f(A.viewFwd, $t.fwd.x, $t.fwd.y, $t.fwd.z), e.uniform1f(A.viewHfov, ge(Number(zt.hFovDeg || 90), 0.1, 179) * Te), e.uniform1f(A.viewVfov, ge(Number(zt.vFovDeg || 60), 0.1, 179) * Te), [...H.stickers].sort((V, W) => Number((V == null ? void 0 : V.zIndex) || 0) - Number((W == null ? void 0 : W.zIndex) || 0)).forEach((V) => {
      const W = Gt.get(String((V == null ? void 0 : V.assetId) || ""));
      if (!W) return;
      const K = N1(V), X = K.crop;
      e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, W), e.uniform3f(A.stickerRight, K.right.x, K.right.y, K.right.z), e.uniform3f(A.stickerUp, K.up.x, K.up.y, K.up.z), e.uniform3f(A.stickerFwd, K.fwd.x, K.fwd.y, K.fwd.z), e.uniform1f(A.stickerTanX, Math.max(1e-6, K.tanX)), e.uniform1f(A.stickerTanY, Math.max(1e-6, K.tanY)), e.uniform4f(
        A.crop,
        ge(Number(X.x0 ?? 0), 0, 1),
        ge(Number(X.y0 ?? 0), 0, 1),
        ge(Number(X.x1 ?? 1), 0, 1),
        ge(Number(X.y1 ?? 1), 0, 1)
      ), e.uniform1f(A.opacity, K.opacity), e.drawArrays(e.TRIANGLES, 0, 6);
    }), e.disable(e.BLEND);
  }
  function wt(H) {
    return !U() || !m ? null : (it({
      mode: "panorama",
      yawDeg: (H == null ? void 0 : H.yawDeg) || 0,
      pitchDeg: (H == null ? void 0 : H.pitchDeg) || 0,
      fovDeg: (H == null ? void 0 : H.fovDeg) || 100
    }, H), t);
  }
  function Rt(H) {
    return !U() || !m ? null : (it({ mode: "unwrap" }, H), t);
  }
  function J(H) {
    return !U() || !m ? null : (it({
      mode: "cutout",
      yawDeg: (H == null ? void 0 : H.yawDeg) || 0,
      pitchDeg: (H == null ? void 0 : H.pitchDeg) || 0,
      rollDeg: (H == null ? void 0 : H.rollDeg) || 0,
      hFovDeg: (H == null ? void 0 : H.hFovDeg) || 90,
      vFovDeg: (H == null ? void 0 : H.vFovDeg) || 60
    }, H), t);
  }
  function Mt(H = {}) {
    return !S() || (Q(H.width, H.height, H.dpr || 1), !U()) ? null : (H.backgroundSource && (Y(H.backgroundSource, H.backgroundRevision ?? ""), it(H.view, H)), Z(H.textures || []), st(
      H.scene || { stickers: [] },
      H.textures || [],
      H.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t);
  }
  function Bt(H, Pt, St) {
    const Dt = Math.max(1, Number((H == null ? void 0 : H.viewportWidth) || M.sourceWidth || M.width || 1)), zt = Math.max(1, Number((H == null ? void 0 : H.viewportHeight) || M.sourceHeight || M.height || 1)), $t = Number(Pt), Gt = Number(St);
    if (!Number.isFinite($t) || !Number.isFinite(Gt)) return null;
    if ((H == null ? void 0 : H.mode) === "unwrap")
      return { u: ($t / Dt % 1 + 1) % 1, v: ge(Gt / zt, 0, 1) };
    const I = fa(H, Dt, zt);
    if (!I) return null;
    const L = Oa(I.yawDeg, I.pitchDeg, I.rollDeg), V = ($t - Dt * 0.5) / (Dt * 0.5) * Math.tan(ge(I.hFovDeg, 1, 179) * Te * 0.5), W = (zt * 0.5 - Gt) / (zt * 0.5) * Math.tan(ge(I.vFovDeg, 0.1, 179) * Te * 0.5), K = go(qa(qa(Mi(L.right, V), Mi(L.up, W)), L.fwd));
    return {
      u: (Math.atan2(K.x, K.z) / oh + 0.5 + 1) % 1,
      v: ge(0.5 - Math.asin(ge(K.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function ye(H, Pt, St) {
    const Dt = Math.max(1, Number((H == null ? void 0 : H.viewportWidth) || M.sourceWidth || M.width || 1)), zt = Math.max(1, Number((H == null ? void 0 : H.viewportHeight) || M.sourceHeight || M.height || 1));
    if ((H == null ? void 0 : H.mode) === "unwrap")
      return {
        x: (Number(Pt || 0) % 1 + 1) % 1 * Dt,
        y: ge(Number(St || 0), 0, 1) * zt,
        visible: !0
      };
    const $t = fa(H, Dt, zt);
    if (!$t)
      return { x: Dt * 0.5, y: zt * 0.5, visible: !1 };
    const Gt = Oa($t.yawDeg, $t.pitchDeg, $t.rollDeg), I = w1(Pt, St), L = Ra(I, Gt.right), V = Ra(I, Gt.up), W = Ra(I, Gt.fwd);
    if (W <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const K = Dt * 0.5 + L / W * (Dt * 0.5 / Math.tan(ge($t.hFovDeg, 1, 179) * Te * 0.5)), X = zt * 0.5 - V / W * (zt * 0.5 / Math.tan(ge($t.vFovDeg, 0.1, 179) * Te * 0.5));
    return { x: K, y: X, visible: K >= 0 && K <= Dt && X >= 0 && X <= zt };
  }
  return {
    init: S,
    dispose: q,
    setViewport: Q,
    setBackgroundErp: Y,
    setPaintErp: F,
    setMaskErp: rt,
    renderPanorama: wt,
    renderUnwrap: Rt,
    renderCutout: J,
    renderScene: Mt,
    screenToErpUv: Bt,
    erpUvToScreen: ye,
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
const ff = "__shared_renderer";
function P1(t) {
  return t ? (t.__panoGlViewportCache || (t.__panoGlViewportCache = /* @__PURE__ */ new Map()), t.__panoGlViewportCache) : null;
}
function k1(t, e) {
  var c;
  const n = P1(t);
  if (!n) return null;
  let r = n.get(ff);
  if (!r) {
    const u = M1();
    if (!((c = u == null ? void 0 : u.isSupported) != null && c.call(u))) return null;
    r = { renderer: u }, n.set(ff, r);
  }
  let o = n.get(e);
  return o || (o = { renderer: r.renderer, lastRenderKey: null, cachedCanvas: null }, n.set(e, o)), o;
}
function C1(t) {
  return t ? [
    String(t.currentSrc || t.src || ""),
    Number(t.naturalWidth || t.videoWidth || t.width || 0),
    Number(t.naturalHeight || t.videoHeight || t.height || 0)
  ].join("|") : "";
}
function A1(t) {
  const e = String((t == null ? void 0 : t.mode) || "panorama");
  return e === "unwrap" ? "unwrap" : e === "cutout" ? `c|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.rollDeg || 0).toFixed(4)}|${Number(t.hFovDeg || 90).toFixed(4)}|${Number(t.vFovDeg || 60).toFixed(4)}` : `p|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.fovDeg || 100).toFixed(4)}`;
}
function I1(t = {}) {
  return t.rect ? t.rect : {
    x: 0,
    y: 0,
    w: Math.max(1, Number(t.width || 1)),
    h: Math.max(1, Number(t.height || 1))
  };
}
function ji(t = {}) {
  const e = t.owner || null, n = t.ctx || null, r = I1(t);
  if (!e || !n || !(r != null && r.w) || !(r != null && r.h)) return !1;
  const o = String(t.cacheKey || "scene"), c = k1(e, o), u = t.backgroundSource || t.img || null, f = t.scene || { stickers: [], selectedId: null, hoveredId: null }, m = Array.isArray(t.textures) ? t.textures : [], y = t.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 };
  if (!(c != null && c.renderer)) return !1;
  const p = c.renderer, w = Math.max(1, Number(t.dpr || window.devicePixelRatio || 1)), M = t.backgroundRevision != null, k = typeof HTMLVideoElement < "u" && u instanceof HTMLVideoElement || typeof HTMLCanvasElement < "u" && u instanceof HTMLCanvasElement, A = M ? String(t.backgroundRevision) : k ? "" : C1(u), C = Number(t.backgroundOpacity ?? 1), D = f.stickers.length === 0 && m.length === 0 && (!!M || !k), $ = `${Math.round(r.w)}x${Math.round(r.h)}|${w}|${A1(y)}|${A}|${C.toFixed(3)}`;
  if (D && c.lastRenderKey === $ && c.cachedCanvas)
    return n.drawImage(c.cachedCanvas, r.x, r.y, r.w, r.h), !0;
  const j = p.renderScene({
    width: r.w,
    height: r.h,
    dpr: w,
    backgroundSource: u,
    backgroundRevision: A,
    textures: m,
    scene: f,
    view: y,
    backgroundOpacity: C
  });
  if (!j) return !1;
  if (D) {
    const S = j.width, q = j.height;
    (!c.cachedCanvas || c.cachedCanvas.width !== S || c.cachedCanvas.height !== q) && (c.cachedCanvas = document.createElement("canvas"), c.cachedCanvas.width = S, c.cachedCanvas.height = q);
    const Q = c.cachedCanvas.getContext("2d");
    Q.clearRect(0, 0, S, q), Q.drawImage(j, 0, 0), c.lastRenderKey = $;
  } else
    c.lastRenderKey = null;
  return n.drawImage(j, r.x, r.y, r.w, r.h), !0;
}
function E1(t = {}) {
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
  }, ji({
    ...t,
    cacheKey: t.cacheKey || t.mode || "erp_view",
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    view: e
  });
}
function da(t = {}) {
  const e = t.view || {
    mode: "cutout",
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.rollDeg || 0),
    hFovDeg: Number(t.hFovDeg || 90),
    vFovDeg: Number(t.vFovDeg || 60)
  };
  return ji({
    ...t,
    cacheKey: t.cacheKey || "cutout_view",
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    view: e
  });
}
function xi(t, e) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(t)), n.height = Math.max(1, Math.round(e));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function hl(t, e) {
  const n = Math.max(1, Math.ceil(t)), r = Math.max(1, Math.ceil(e));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function zn(t, e, n) {
  if (!t) return xi(e, n);
  const r = Math.max(1, Math.round(e)), o = Math.max(1, Math.round(n));
  return (t.canvas.width !== r || t.canvas.height !== o) && (t.canvas.width = r, t.canvas.height = o, t.ctx.imageSmoothingEnabled = !0), t;
}
function pe(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let hc = null, pc = null, df = null, hf = null, ie = null, co = null, Ye = null, xr = null;
function T1() {
  if (pc) return pc;
  const t = 6, e = 17, n = document.createElement("canvas");
  n.width = e, n.height = e;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e, e), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = t, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(e, e), r.moveTo(-e / 2, e / 2), r.lineTo(e / 2, e + e / 2), r.moveTo(e / 2, -e / 2), r.lineTo(e + e / 2, e / 2), r.stroke(), pc = n, n;
}
function mi(t, e) {
  if (!t || !e) return;
  const n = e.width, r = e.height;
  hc = zn(hc, n, r);
  const o = hc;
  pe(o), o.ctx.drawImage(e, 0, 0), o.ctx.globalCompositeOperation = "source-in", hf !== o.ctx && (df = o.ctx.createPattern(T1(), "repeat"), hf = o.ctx), o.ctx.fillStyle = df, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(o.canvas, 0, 0), t.restore();
}
function L1(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function D1(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function R1(t, e) {
  const n = Number(t == null ? void 0 : t.radiusValue), r = String((t == null ? void 0 : t.radiusModel) || "").trim(), o = (e == null ? void 0 : e.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function O1(t, e) {
  const n = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * e * 2);
  const r = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * e * 2);
}
const we = /* @__PURE__ */ new Map(), pl = 128;
function F1(t, e, n, r, o, c) {
  const u = Math.max(1, Math.round(t)), f = Math.max(0, Math.min(1, e)), m = `${u}:${f.toFixed(2)}:${n}:${r}:${o}:${c.toFixed(3)}`;
  if (we.has(m)) {
    const $ = we.get(m);
    return we.delete(m), we.set(m, $), $;
  }
  we.size >= pl && we.delete(we.keys().next().value);
  const y = u * 2 + 2, p = u + 1, w = hl(y, y), M = w.getContext("2d"), k = f * u, A = u + 1, C = `rgba(${n},${r},${o},${c})`, O = `rgba(${n},${r},${o},0)`, D = M.createRadialGradient(p, p, k, p, p, A);
  return D.addColorStop(0, C), D.addColorStop(1, O), M.fillStyle = D, M.fillRect(0, 0, y, y), we.set(m, w), w;
}
function $1(t, e, n, r, o, c, u) {
  const { r: f, g: m, b: y, a: p } = r, w = Math.max(2, Math.ceil(t) * 2), M = Math.max(2, Math.ceil(e) * 2), k = Math.max(0, o), A = Math.max(0, Math.min(0.99, c)), C = Math.max(0, Math.min(1, u ?? 0)), O = `chisel:${w}:${M}:${n.toFixed(2)}:${f}:${m}:${y}:${p.toFixed(3)}:${k.toFixed(2)}:${A.toFixed(2)}:${C.toFixed(2)}`;
  if (we.has(O)) {
    const nt = we.get(O);
    return we.delete(O), we.set(O, nt), nt;
  }
  we.size >= pl && we.delete(we.keys().next().value);
  const D = hl(w, M), $ = D.getContext("2d"), j = $.createImageData(w, M), S = j.data, q = Math.max(0, t - e), Q = Math.max(0, Math.min(1, n)), ut = 1 + k;
  for (let nt = 0; nt < M; nt++)
    for (let Y = 0; Y < w; Y++) {
      const F = Y + 0.5 - t, rt = nt + 0.5 - e, mt = Math.max(Math.abs(F) - q, 0), Z = Math.hypot(mt, rt) / e;
      if (Z >= 1) continue;
      const U = Z <= Q ? 1 : Math.max(0, (1 - Z) / Math.max(1e-4, 1 - Q)), at = 1 - Z, it = 1 + k * (1 - at) * (1 - at), st = 1 - A * at * at, wt = it * st / ut;
      let Rt = 1;
      if (C > 0) {
        const Bt = Math.floor((rt + e) / 1.5), ye = Math.floor((F + t) / 8), H = Wr(Ri(Bt * 41 + 500, ye * 19 + 300));
        Rt = 1 - C * 0.42 * H;
      }
      const J = Math.round(255 * Math.min(1, p * U * wt * Rt));
      if (J <= 0) continue;
      const Mt = (nt * w + Y) * 4;
      S[Mt] = f, S[Mt + 1] = m, S[Mt + 2] = y, S[Mt + 3] = J;
    }
  return $.putImageData(j, 0, 0), we.set(O, D), D;
}
function Ri(t, e) {
  const n = Math.trunc(Math.round(t * 4)), r = Math.trunc(Math.round(e * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function Wr(t) {
  let e = t + 1831565813 >>> 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function V1(t, e, n, r, o, c, u) {
  const f = t + 0.5 - n, m = e + 0.5 - r, y = Math.max(0, n - r), p = Math.max(Math.abs(f) - y, 0), w = Math.hypot(p, m) / r;
  if (w >= 1) return 0;
  const M = Wr(Ri(t * 17 + 3, e * 13 + 7)), k = w + c * 0.22 * (M - 0.5);
  if (k >= 1) return 0;
  const A = k <= o ? 1 : Math.max(0, (1 - k) / Math.max(1e-4, 1 - o)), C = H1(t, e, f, m, n, r), O = c * 0.55;
  if (C < O) return 0;
  const $ = 0.45 + 0.55 * ((C - O) / Math.max(1e-4, 1 - O));
  return Math.round(255 * Math.min(1, u * A * $));
}
function H1(t, e, n, r, o, c) {
  const u = Math.floor((n + o) / 3), f = Math.floor((r + c) / 2), m = Wr(Ri(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + o) / 1.5), p = Math.floor((r + c) / 1.5), w = Wr(Ri(y * 23 + 800, p * 29 + 500)), M = Wr(Ri(t * 3 + 100, e * 5 + 200));
  return m * 0.55 + w * 0.3 + M * 0.15;
}
function z1(t, e, n, r, o) {
  const { r: c, g: u, b: f, a: m } = r, y = Math.max(2, Math.ceil(t) * 2), p = Math.max(2, Math.ceil(e) * 2), w = Math.max(0, Math.min(1, o)), M = `crayon:${y}:${p}:${n.toFixed(2)}:${c}:${u}:${f}:${m.toFixed(3)}:${w.toFixed(2)}`;
  if (we.has(M)) {
    const $ = we.get(M);
    return we.delete(M), we.set(M, $), $;
  }
  we.size >= pl && we.delete(we.keys().next().value);
  const k = hl(y, p), A = k.getContext("2d"), C = A.createImageData(y, p), O = C.data, D = Math.max(0, Math.min(1, n));
  for (let $ = 0; $ < p; $++)
    for (let j = 0; j < y; j++) {
      const S = V1(j, $, t, e, D, w, m);
      if (S <= 0) continue;
      const q = ($ * y + j) * 4;
      O[q] = c, O[q + 1] = u, O[q + 2] = f, O[q + 3] = S;
    }
  return A.putImageData(C, 0, 0), we.set(M, k), k;
}
function ah(t, e, n) {
  var k;
  const r = String((e == null ? void 0 : e.stampKind) || "round"), o = R1(e, n), c = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), u = j1(e), f = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), m = Number(((k = e == null ? void 0 : e.angle) == null ? void 0 : k.value) ?? 0), y = O1(e, o), p = e == null ? void 0 : e.scatter, w = p ? { radius: Number(p.radius ?? 1.5), count: Math.max(1, Math.round(p.count ?? 6)) } : null;
  let M;
  if (r === "chisel") {
    const A = o * f, C = o, O = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), D = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), $ = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    M = $1(A, C, c, u, O, D, $);
  } else if (r === "crayon") {
    const A = o * f, C = o, O = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    M = z1(A, C, c, u, O);
  } else
    M = F1(o, c, u.r, u.g, u.b, u.a);
  return { ctx: t, stampTex: M, radiusPx: o, spacingPx: y, desc: n, aspect: f, angle: m, stampKind: r, scatter: w };
}
function j1(t) {
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
function U1(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const r = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function pf(t, e, n, r, o) {
  const c = t.angle, u = t.desc.width;
  function f(y, p) {
    c === 0 ? t.ctx.drawImage(t.stampTex, y - o, p - r, o * 2, r * 2) : (t.ctx.save(), t.ctx.translate(y, p), t.ctx.rotate(c), t.ctx.drawImage(t.stampTex, -o, -r, o * 2, r * 2), t.ctx.restore());
  }
  f(e, n);
  const m = c === 0 ? o : o * Math.abs(Math.cos(c)) + r * Math.abs(Math.sin(c));
  e - m < 0 && f(e + u, n), e + m > u && f(e - u, n);
}
function gl(t, e, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (t.scatter) {
    const { radius: m, count: y } = t.scatter, p = m * t.radiusPx * o, w = Ri(e, n);
    for (let M = 0; M < y; M++) {
      const k = Wr(w + M * 2) * Math.PI * 2, A = Math.sqrt(Wr(w + M * 2 + 1)) * p, C = e + Math.cos(k) * A, O = n + Math.sin(k) * A, D = Math.max(0.5, t.radiusPx * o * 0.48), $ = (0.5 - O / Math.max(1, t.desc.height)) * Math.PI, j = D * t.aspect / Math.max(0.05, Math.cos($));
      pf(t, C, O, D, j);
    }
    return;
  }
  const c = Math.max(0.5, t.radiusPx * o), u = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, f = c * t.aspect / Math.max(0.05, Math.cos(u));
  pf(t, e, n, c, f);
}
function gf(t, e, n) {
  const r = D1(e);
  if (!t || r.length === 0) return;
  const o = n.width, c = n.height, u = ah(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const f = [];
  for (let M = 0; M < r.length; M++) {
    let k = Number(r[M].u || 0) * o;
    const A = Number(r[M].v || 0) * c;
    M > 0 && Math.abs(k - f[M - 1].x) > o * 0.5 && (k += k < f[M - 1].x ? o : -o), f.push({ x: k, y: A });
  }
  if (gl(u, f[0].x, f[0].y, 1), f.length === 1) {
    t.restore();
    return;
  }
  let m = f[0], y = f[0], p = f[0], w = 0;
  for (let M = 1; M < f.length; M++) {
    const k = f[M], A = { x: (y.x + k.x) * 0.5, y: (y.y + k.y) * 0.5 };
    M === 1 ? w = Oo(u, p.x, p.y, A.x, A.y, w) : w = Ya(u, m, p, A, k, w), m = y, y = k, p = A;
  }
  f.length === 2 ? Oo(u, p.x, p.y, y.x, y.y, w) : Ya(u, m, p, y, y, w), t.restore();
}
function Fa(t, e, n) {
  var w;
  const r = Array.isArray((w = e == null ? void 0 : e.geometry) == null ? void 0 : w.points) ? e.geometry.points : [];
  if (!t || r.length < 3) return;
  const o = n.width, c = n.height, u = U1(e), f = [];
  let m = 1 / 0, y = -1 / 0;
  for (let M = 0; M < r.length; M++) {
    const k = L1(r[M]);
    let A = Number(k.x || 0) * o;
    M > 0 && Math.abs(A - f[M - 1].x) > o * 0.5 && (A += A < f[M - 1].x ? o : -o), f.push({ x: A, y: Number(k.y || 0) * c }), A < m && (m = A), A > y && (y = A);
  }
  function p(M) {
    t.beginPath(), t.moveTo(f[0].x + M, f[0].y);
    for (let k = 1; k < f.length; k++) t.lineTo(f[k].x + M, f[k].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = u, p(0), m < 0 && p(o), y > o && p(-o), t.restore();
}
function ha(t, e, n) {
  var u;
  if (String(((u = e == null ? void 0 : e.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Fa(t, e, n);
    return;
  }
  const c = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  c >= 0.999 ? gf(t, e, n) : (co = zn(co, n.width, n.height), pe(co), gf(co.ctx, e, n), t.save(), t.globalAlpha = c, t.drawImage(co.canvas, 0, 0), t.restore());
}
function Sr(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function Oo(t, e, n, r, o, c) {
  const u = r - e, f = o - n, m = Math.hypot(u, f);
  if (m < 1e-9) return c;
  let y = t.spacingPx - c;
  for (; y <= m; ) {
    const p = y / m;
    gl(t, e + u * p, n + f * p, 1), y += t.spacingPx;
  }
  return m - y + t.spacingPx;
}
function Ya(t, e, n, r, o, c) {
  const f = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, m = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, p = 0, w = f, M = w + m, k = M + y, A = M - w, C = 16;
  let O = c, D = n.x, $ = n.y;
  for (let j = 1; j <= C; j++) {
    const S = w + A * j / C, q = ((w - S) * e.x + (S - p) * n.x) / (w - p), Q = ((w - S) * e.y + (S - p) * n.y) / (w - p), ut = ((M - S) * n.x + (S - w) * r.x) / (M - w), nt = ((M - S) * n.y + (S - w) * r.y) / (M - w), Y = ((k - S) * r.x + (S - M) * o.x) / (k - M), F = ((k - S) * r.y + (S - M) * o.y) / (k - M), rt = ((M - S) * q + (S - p) * ut) / (M - p), mt = ((M - S) * Q + (S - p) * nt) / (M - p), ct = ((k - S) * ut + (S - w) * Y) / (k - w), Z = ((k - S) * nt + (S - w) * F) / (k - w), U = ((M - S) * rt + (S - w) * ct) / (M - w), at = ((M - S) * mt + (S - w) * Z) / (M - w);
    O = Oo(t, D, $, U, at, O), D = U, $ = at;
  }
  return O;
}
function B1(t, e, n, r) {
  const o = t.currentStroke.ctx;
  if (!o) return;
  const c = t.descriptor, u = c.width, f = n * c.height, m = t.activeStroke;
  let y = e * u;
  if (m && Math.abs(y - m.prev.x) > u * 0.5 && (y += y < m.prev.x ? u : -u), !m) {
    const k = ah(o, r, c), A = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), C = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), O = String((r == null ? void 0 : r.toolKind) || "") === "eraser", D = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", gl(k, y, f, 1), t.activeStroke = {
      pprev: { x: y, y: f },
      prev: { x: y, y: f },
      lastMidX: y,
      lastMidY: f,
      stampTex: k.stampTex,
      radiusPx: k.radiusPx,
      spacingPx: k.spacingPx,
      aspect: k.aspect,
      angle: k.angle,
      stampKind: k.stampKind,
      scatter: k.scatter,
      strokeOpacity: A,
      velocityWidthFactor: C,
      distSinceStamp: 0,
      isEraser: O,
      layerKind: D,
      pointCount: 1
    }, t.displayDirty = !0;
    return;
  }
  const p = (m.prev.x + y) * 0.5, w = (m.prev.y + f) * 0.5;
  o.globalCompositeOperation = "source-over";
  const M = {
    ctx: o,
    stampTex: m.stampTex,
    radiusPx: m.radiusPx,
    spacingPx: m.spacingPx,
    desc: c,
    aspect: m.aspect,
    angle: m.angle,
    stampKind: m.stampKind,
    scatter: m.scatter
  };
  m.pointCount === 1 ? m.distSinceStamp = Oo(M, m.lastMidX, m.lastMidY, p, w, m.distSinceStamp) : m.distSinceStamp = Ya(
    M,
    m.pprev,
    { x: m.lastMidX, y: m.lastMidY },
    { x: p, y: w },
    { x: y, y: f },
    m.distSinceStamp
  ), m.pprev = m.prev, m.prev = { x: y, y: f }, m.lastMidX = p, m.lastMidY = w, m.pointCount++, t.displayDirty = !0;
}
function Oc(t = {}) {
  const e = Math.max(1, Math.round(Number((t == null ? void 0 : t.width) || 2048))), n = Math.max(1, Math.round(Number((t == null ? void 0 : t.height) || 1024))), r = { kind: "ERP_GLOBAL", width: e, height: n }, o = /* @__PURE__ */ new Map(), c = xi(e, n), u = {
    descriptor: r,
    committedMask: xi(e, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: xi(e, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, m = xi(e, n);
  let y = null, p = "", w = null;
  function M(F) {
    return {
      actionGroupId: F,
      descriptor: r,
      committedPaint: xi(e, n),
      currentStroke: c,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function k(F) {
    let rt = o.get(F);
    return rt || (rt = M(F), o.set(F, rt)), rt;
  }
  function A(F) {
    return p === "mask" ? u : y ? k(y) : f;
  }
  function C(F) {
    var st;
    const rt = !w || w.length !== F.length || F.some((wt, Rt) => wt !== w[Rt]);
    let mt = u.displayDirty || f.displayDirty || rt;
    for (const wt of F) {
      const Rt = o.get(wt);
      if (Rt != null && Rt.displayDirty) {
        mt = !0;
        break;
      }
    }
    if (!mt) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const wt of F) {
      const Rt = o.get(wt);
      Rt && (Rt.displayDirty = !1);
    }
    w = [...F];
    const ct = m.ctx;
    pe(m);
    const Z = p === "paint" && ((st = y ? o.get(y) : f) == null ? void 0 : st.activeStroke) || null, U = !!(Z != null && Z.isEraser);
    for (const wt of F) {
      const Rt = o.get(wt);
      if (!Rt) continue;
      const Mt = y === Rt.actionGroupId && p === "paint" ? Rt.activeStroke : null;
      if (U)
        ie = zn(ie, e, n), pe(ie), ie.ctx.drawImage(Rt.committedPaint.canvas, 0, 0), Sr(ie.ctx, c.canvas), ct.drawImage(ie.canvas, 0, 0);
      else if (ct.drawImage(Rt.committedPaint.canvas, 0, 0), Mt) {
        const Bt = Rt.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Mt.strokeOpacity ?? 1));
        ct.save(), ct.globalAlpha = Bt, ct.drawImage(c.canvas, 0, 0), ct.restore();
      }
    }
    const at = p === "mask", it = u.activeStroke;
    at && (it != null && it.isEraser) ? (ie = zn(ie, e, n), pe(ie), ie.ctx.drawImage(u.committedMask.canvas, 0, 0), Sr(ie.ctx, c.canvas), mi(ct, ie.canvas)) : (mi(ct, u.committedMask.canvas), at && it && mi(ct, c.canvas));
  }
  function O(F) {
    var mt, ct, Z, U, at;
    for (const it of o.values())
      pe(it.committedPaint), pe(it.currentStroke), it.activeStroke = null, it.displayDirty = !0;
    pe(u.committedMask), pe(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, w = null;
    const rt = [
      ...Array.isArray((ct = (mt = F == null ? void 0 : F.painting) == null ? void 0 : mt.paint) == null ? void 0 : ct.strokes) ? F.painting.paint.strokes : [],
      ...Array.isArray((U = (Z = F == null ? void 0 : F.painting) == null ? void 0 : Z.mask) == null ? void 0 : U.strokes) ? F.painting.mask.strokes : []
    ];
    for (const it of rt) {
      if (((at = it == null ? void 0 : it.targetSpace) == null ? void 0 : at.kind) !== "ERP_GLOBAL") continue;
      const st = String((it == null ? void 0 : it.layerKind) || "paint"), Rt = String((it == null ? void 0 : it.toolKind) || "pen") === "eraser";
      if (st === "mask") {
        const J = u.descriptor;
        Rt ? (ie = zn(ie, J.width, J.height), pe(ie), ha(ie.ctx, it, J), Sr(u.committedMask.ctx, ie.canvas)) : ha(u.committedMask.ctx, it, J);
        continue;
      }
      if (Rt) {
        ie = zn(ie, r.width, r.height), pe(ie), ha(ie.ctx, it, r);
        for (const J of o.values())
          Sr(J.committedPaint.ctx, ie.canvas), J.displayDirty = !0;
      } else {
        const J = String((it == null ? void 0 : it.actionGroupId) || "__default__"), Mt = k(J), Bt = Mt.descriptor;
        ha(Mt.committedPaint.ctx, it, Bt), Mt.displayDirty = !0;
      }
    }
    C([...o.keys()]);
  }
  function D(F, rt) {
    p = String((F == null ? void 0 : F.layerKind) || "");
    const mt = String((F == null ? void 0 : F.toolKind) || "") === "eraser";
    if (p === "mask")
      y = null, pe(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const ct = mt ? f : k(String((F == null ? void 0 : F.actionGroupId) || "__default__"));
      y = mt ? "" : String((F == null ? void 0 : F.actionGroupId) || "__default__"), pe(ct.currentStroke), ct.activeStroke = null, ct.displayDirty = !0;
    }
  }
  function $(F, rt) {
    const mt = String((F == null ? void 0 : F.layerKind) || "paint"), ct = String((F == null ? void 0 : F.toolKind) || "") === "eraser", Z = mt === "mask" ? u : ct ? f : k(String((F == null ? void 0 : F.actionGroupId) || y || "__default__")), U = Z.activeStroke, at = Z.descriptor;
    if (U && U.pointCount > 1) {
      const st = Z.currentStroke.ctx;
      st.globalCompositeOperation = "source-over";
      const wt = {
        ctx: st,
        stampTex: U.stampTex,
        radiusPx: U.radiusPx,
        spacingPx: U.spacingPx,
        desc: at,
        aspect: U.aspect,
        angle: U.angle,
        stampKind: U.stampKind,
        scatter: U.scatter
      };
      U.pointCount === 2 ? Oo(wt, U.lastMidX, U.lastMidY, U.prev.x, U.prev.y, U.distSinceStamp) : Ya(wt, U.pprev, { x: U.lastMidX, y: U.lastMidY }, U.prev, U.prev, U.distSinceStamp);
    }
    Z.lassoPreviewActive && (pe(Z.currentStroke), Fa(Z.currentStroke.ctx, F, at), Z.lassoPreviewActive = !1);
    const it = mt === "mask" ? u.committedMask : Z.committedPaint;
    if (ct && mt === "paint")
      for (const st of o.values())
        Sr(st.committedPaint.ctx, Z.currentStroke.canvas), st.displayDirty = !0;
    else if (ct)
      Sr(it.ctx, Z.currentStroke.canvas);
    else {
      const st = Math.max(0, Math.min(1, (U == null ? void 0 : U.strokeOpacity) ?? 1));
      it.ctx.save(), it.ctx.globalAlpha = st, it.ctx.drawImage(Z.currentStroke.canvas, 0, 0), it.ctx.restore();
    }
    pe(Z.currentStroke), Z.activeStroke = null, Z.displayDirty = !0, y = null, p = "", C([...o.keys()]);
  }
  function j(F) {
    if (p === "mask")
      pe(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (p === "paint" && !y)
      pe(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const rt = o.get(y);
      rt && (pe(rt.currentStroke), rt.activeStroke = null, rt.lassoPreviewActive = !1, rt.displayDirty = !0);
    }
    y = null, p = "", C([...o.keys()]);
  }
  function S(F, rt) {
    var ct;
    if (p = String((F == null ? void 0 : F.layerKind) || ""), String(((ct = F == null ? void 0 : F.geometry) == null ? void 0 : ct.geometryKind) || "") === "lasso_fill") {
      if (p === "mask")
        pe(u.currentStroke), Fa(u.currentStroke.ctx, F, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const Z = String((F == null ? void 0 : F.toolKind) || "") === "eraser", U = Z ? f : k(String((F == null ? void 0 : F.actionGroupId) || y || "__default__"));
        y = Z ? "" : String((F == null ? void 0 : F.actionGroupId) || y || "__default__"), pe(U.currentStroke), Fa(U.currentStroke.ctx, F, U.descriptor), U.lassoPreviewActive = !0, U.displayDirty = !0;
      }
      C([...o.keys()]);
    }
  }
  function q(F) {
    return C(F ?? [...o.keys()]), {
      displayPaint: m,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function Q(F) {
    return o.get(String(F)) ?? null;
  }
  function ut() {
    return [...o.keys()];
  }
  function nt(F) {
    var at;
    const rt = o.get(String(F));
    if (!rt) return null;
    const mt = p === "paint" && y === rt.actionGroupId, ct = p === "paint" && ((at = y ? o.get(y) : f) == null ? void 0 : at.activeStroke) || null;
    if (ct != null && ct.isEraser)
      return Ye = zn(Ye, e, n), pe(Ye), Ye.ctx.drawImage(rt.committedPaint.canvas, 0, 0), Sr(Ye.ctx, c.canvas), Ye.canvas;
    const Z = mt ? rt.activeStroke : null;
    if (!Z) return rt.committedPaint.canvas;
    Ye = zn(Ye, e, n), pe(Ye), Ye.ctx.drawImage(rt.committedPaint.canvas, 0, 0);
    const U = rt.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Z.strokeOpacity ?? 1));
    return Ye.ctx.save(), Ye.ctx.globalAlpha = U, Ye.ctx.drawImage(c.canvas, 0, 0), Ye.ctx.restore(), Ye.canvas;
  }
  function Y() {
    return xr = zn(xr, e, n), pe(xr), mi(xr.ctx, u.committedMask.canvas), p === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (ie = zn(ie, e, n), pe(ie), ie.ctx.drawImage(u.committedMask.canvas, 0, 0), Sr(ie.ctx, c.canvas), pe(xr), mi(xr.ctx, ie.canvas)) : mi(xr.ctx, c.canvas)), xr.canvas;
  }
  return {
    rebuildCommitted: O,
    beginStroke: D,
    appendStrokePoint: B1,
    updateActiveStroke: S,
    commitActiveStroke: $,
    cancelActiveStroke: j,
    getErpTarget: q,
    ensureTarget: A,
    getGroupTarget: Q,
    getGroupDisplayCanvas: nt,
    getMaskDisplayCanvas: Y,
    getAllGroupIds: ut
  };
}
function z(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function $a(t, e, n) {
  const r = Number(t);
  return Number.isFinite(r) ? Math.max(Number(e), Math.min(Number(n), r)) : Number(e);
}
function Fe(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function G1(t, e) {
  let n = Fe(e) - Fe(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const mf = 0.12, K1 = 3, W1 = 35, q1 = 140, gc = 100, Y1 = 20, yf = 0.8;
function X1(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function ws(t = {}) {
  const e = typeof t.getView == "function" ? t.getView : (() => ({ yaw: 0, pitch: 0, fov: gc })), n = typeof t.setView == "function" ? t.setView : (() => {
  }), r = typeof t.getInvert == "function" ? t.getInvert : (() => ({ x: 1, y: 1 })), o = typeof t.getUnwrapRect == "function" ? t.getUnwrapRect : (() => ({ w: 1, h: 1 })), c = typeof t.onInteraction == "function" ? t.onInteraction : (() => {
  }), u = typeof t.onDebug == "function" ? t.onDebug : null, f = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function m(O, D = null) {
    u && u(O, D);
  }
  function y(O, D, $ = null, j = performance.now()) {
    return f.drag.active = !0, f.drag.lastX = Number(O || 0), f.drag.lastY = Number(D || 0), f.drag.lastTs = Number(j || performance.now()), f.drag.pointerId = $, f.inertia.active = !1, f.inertia.vx = 0, f.inertia.vy = 0, f.inertia.lastTs = f.drag.lastTs, f.velHistory = [], m("drag", { phase: "start", x: f.drag.lastX, y: f.drag.lastY, pointerId: $ }), !0;
  }
  function p(O, D, $ = "pano", j = performance.now()) {
    if (!f.drag.active) return !1;
    const S = Number(j || performance.now()), q = Number(O), Q = Number(D), ut = q - f.drag.lastX, nt = Q - f.drag.lastY;
    f.drag.lastX = q, f.drag.lastY = Q, f.drag.lastTs = S;
    const Y = r() || { x: 1, y: 1 }, F = Number(Y.x || 1), rt = Number(Y.y || 1), mt = { ...e() };
    let ct = 0, Z = 0;
    if ($ === "unwrap") {
      const at = o() || { w: 1, h: 1 }, it = Math.max(1, Number(at.w || 1)), st = Math.max(1, Number(at.h || 1)), wt = ut / it, Rt = nt / st;
      ct = -wt * 360 * F, Z = Rt * 180 * rt;
    } else
      ct = -ut * mf * F, Z = nt * mf * rt;
    mt.yaw = Fe(Number(mt.yaw || 0) + ct), mt.pitch = z(Number(mt.pitch || 0) + Z, -89.9, 89.9), n(mt), f.velHistory.push({ ts: S, yaw: mt.yaw, pitch: mt.pitch });
    let U = 0;
    for (; U < f.velHistory.length - 1 && f.velHistory[U].ts < S - 100; ) U++;
    return U > 0 && f.velHistory.splice(0, U), f.inertia.active = !1, f.inertia.lastTs = S, c(), m("drag", { phase: "move", dx: ut, dy: nt, dYaw: ct, dPitch: Z }), !0;
  }
  function w(O = performance.now()) {
    if (!f.drag.active) return !1;
    f.drag.active = !1;
    const D = Number(O || performance.now());
    f.drag.lastTs = D;
    const $ = f.velHistory.filter((S) => D - S.ts <= 80);
    if ($.length >= 2) {
      const S = $[0], q = $.at(-1), Q = Math.max(1e-3, (q.ts - S.ts) / 1e3);
      let ut = q.yaw - S.yaw;
      ut > 180 && (ut -= 360), ut < -180 && (ut += 360), f.inertia.vx = ut / Q, f.inertia.vy = (q.pitch - S.pitch) / Q;
    } else
      f.inertia.vx = 0, f.inertia.vy = 0;
    f.velHistory = [];
    const j = Math.hypot(f.inertia.vx, f.inertia.vy);
    return f.inertia.active = j > Y1, f.inertia.lastTs = D, m("drag", { phase: "end", speed: j, inertiaActive: f.inertia.active }), !0;
  }
  function M(O = performance.now()) {
    if (!f.inertia.active) return !1;
    const D = Number(O || performance.now()), $ = Math.max(1e-3, (D - (f.inertia.lastTs || D)) / 1e3);
    f.inertia.lastTs = D;
    const j = { ...e() };
    j.yaw = Fe(Number(j.yaw || 0) + f.inertia.vx * $), j.pitch = z(Number(j.pitch || 0) + f.inertia.vy * $, -89.9, 89.9);
    const S = Math.exp(-5.5 * $);
    return f.inertia.vx *= S, f.inertia.vy *= S, Math.abs(f.inertia.vx) < yf && Math.abs(f.inertia.vy) < yf && (f.inertia.vx = 0, f.inertia.vy = 0, f.inertia.active = !1), n(j), c(), f.inertia.active;
  }
  function k(O) {
    const D = Math.sign(Number(O || 0));
    if (!D) return !1;
    const $ = { ...e() }, j = Number($.fov || gc);
    return $.fov = z(j + D * K1, W1, q1), n($), c(), m("wheel", { deltaSign: D, fovBefore: j, fovAfter: $.fov }), !0;
  }
  function A(O) {
    return k(Math.sign(X1(O)));
  }
  function C() {
    n({ yaw: 0, pitch: 0, fov: gc }), f.inertia.active = !1, f.inertia.vx = 0, f.inertia.vy = 0, c();
  }
  return {
    state: f,
    startDrag: y,
    moveDrag: p,
    endDrag: w,
    stepInertia: M,
    applyWheel: k,
    applyWheelEvent: A,
    resetView: C
  };
}
function Fc(t) {
  const e = String(t || "").trim();
  return e ? e === "PanoramaPreview" || e === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(e) : !1;
}
const Yr = Math.PI / 180;
function Mn(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) ? n : Number(e);
}
function Xr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Xa(t, e) {
  return Xr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Pi(t, e) {
  return Xr(t.x * e, t.y * e, t.z * e);
}
function mo(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Xr(t.x / e, t.y / e, t.z / e);
}
function Z1(t, e) {
  const n = Number(t || 0) * Yr, r = Number(e || 0) * Yr, o = Math.cos(r);
  return Xr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function vf(t, e) {
  return Xr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function J1(t, e, n = 0) {
  const r = Z1(t, e), o = Xr(0, 1, 0);
  let c = vf(o, r);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Xr(1, 0, 0)), c = mo(c);
  let u = mo(vf(r, c));
  const f = Number(n || 0) * Yr, m = Math.cos(f), y = Math.sin(f), p = Xa(Pi(c, m), Pi(u, y)), w = Xa(Pi(c, -y), Pi(u, m));
  return { fwd: r, right: mo(p), up: mo(w) };
}
function Q1(t, e, n, r = 0.45) {
  const o = (t.x + e.x + n.x) / 3, c = (t.y + e.y + n.y) / 3, u = (f) => {
    const m = f.x - o, y = f.y - c, p = Math.hypot(m, y) || 1;
    return { x: f.x + m / p * r, y: f.y + y / p * r };
  };
  return [u(t), u(e), u(n)];
}
function bf(t, e, n, r, o, c, u, f) {
  const m = n.x * (r.y - o.y) + r.x * (o.y - n.y) + o.x * (n.y - r.y);
  if (Math.abs(m) < 1e-6) return !1;
  const [y, p, w] = Q1(c, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(p.x, p.y), t.lineTo(w.x, w.y), t.closePath(), t.clip();
  const M = (c.x * (r.y - o.y) + u.x * (o.y - n.y) + f.x * (n.y - r.y)) / m, k = (c.x * (o.x - r.x) + u.x * (n.x - o.x) + f.x * (r.x - n.x)) / m, A = (c.x * (r.x * o.y - o.x * r.y) + u.x * (o.x * n.y - n.x * o.y) + f.x * (n.x * r.y - r.x * n.y)) / m, C = (c.y * (r.y - o.y) + u.y * (o.y - n.y) + f.y * (n.y - r.y)) / m, O = (c.y * (o.x - r.x) + u.y * (n.x - o.x) + f.y * (r.x - n.x)) / m, D = (c.y * (r.x * o.y - o.x * r.y) + u.y * (o.x * n.y - n.x * o.y) + f.y * (n.x * r.y - r.x * n.y)) / m;
  return t.transform(M, C, k, O, A, D), t.drawImage(e, 0, 0), t.restore(), !0;
}
function ty(t, e) {
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
function sh(t) {
  const e = t || {}, n = Mn(e.yaw_deg, 0), r = Mn(e.pitch_deg, 0), o = Mn(e.roll_deg ?? e.rot_deg, 0), c = $a(Mn(e.hFOV_deg, 90), 1, 179), u = $a(Mn(e.vFOV_deg, 60), 1, 179), f = Math.tan(c * Yr * 0.5) / Math.max(1e-6, Math.tan(u * Yr * 0.5)), m = $a(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: o,
    hfov: c,
    vfov: u,
    aspect: m
  };
}
function ey(t, e, n, r, o, c = "balanced") {
  const u = (Y = {}) => {
    e.__panoCutoutProjectionStats = {
      drawnTriCount: 0,
      Nu: 0,
      Nv: 0,
      rectW: Mn(r == null ? void 0 : r.w, 0),
      rectH: Mn(r == null ? void 0 : r.h, 0),
      imageW: Mn((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width), 0),
      imageH: Mn((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height), 0),
      ...Y
    };
  };
  if (!t || !e || !n || !r || !o)
    return e && u({ reason: "invalid_args" }), !1;
  if (!n.complete || !(n.naturalWidth || n.width))
    return u({ reason: "image_not_ready" }), !1;
  const f = Mn(r.w, 0), m = Mn(r.h, 0);
  if (f <= 1 || m <= 1)
    return u({ reason: "invalid_rect", rectW: f, rectH: m }), !1;
  const y = Number(n.naturalWidth || n.width || 0), p = Number(n.naturalHeight || n.height || 0);
  if (y <= 1 || p <= 1)
    return u({ reason: "invalid_image", imageW: y, imageH: p }), !1;
  const w = ty(e, n) || n, { yaw: M, pitch: k, roll: A, hfov: C, vfov: O } = sh(o), D = J1(M, k, A), $ = Math.tan(C * Yr * 0.5), j = Math.tan(O * Yr * 0.5), S = c === "high" ? 20 : c === "draft" ? 10 : 14, q = c === "high" ? 14 : c === "draft" ? 7 : 10;
  let Q = 0;
  const ut = Array.from({ length: q + 1 }, () => Array(S + 1).fill(null)), nt = Array.from({ length: q + 1 }, () => Array(S + 1).fill(null));
  for (let Y = 0; Y <= q; Y += 1)
    for (let F = 0; F <= S; F += 1) {
      const rt = F / S, mt = Y / q, ct = (rt * 2 - 1) * $, Z = (1 - mt * 2) * j, U = mo(Xa(Xa(D.fwd, Pi(D.right, ct)), Pi(D.up, Z))), at = Math.atan2(U.x, U.z), it = Math.asin($a(U.y, -1, 1));
      let st = (at / (2 * Math.PI) + 0.5) * y;
      for (; st < 0; ) st += y;
      for (; st >= y; ) st -= y;
      const wt = (0.5 - it / Math.PI) * p;
      ut[Y][F] = { x: r.x + rt * r.w, y: r.y + mt * r.h }, nt[Y][F] = { x: st, y: wt };
    }
  for (let Y = 0; Y < q; Y += 1)
    for (let F = 0; F < S; F += 1) {
      const rt = ut[Y][F], mt = ut[Y][F + 1], ct = ut[Y + 1][F], Z = ut[Y + 1][F + 1], U = { ...nt[Y][F] }, at = { ...nt[Y][F + 1] }, it = { ...nt[Y + 1][F] }, st = { ...nt[Y + 1][F + 1] }, wt = Math.min(U.x, at.x, it.x, st.x);
      Math.max(U.x, at.x, it.x, st.x) - wt > y * 0.5 && [U, at, it, st].forEach((J) => {
        J.x < y * 0.5 && (J.x += y);
      }), bf(t, w, U, at, st, rt, mt, Z) && (Q += 1), bf(t, w, U, st, it, rt, Z, ct) && (Q += 1);
    }
  return u({
    drawnTriCount: Q,
    Nu: S,
    Nv: q,
    rectW: f,
    rectH: m,
    imageW: y,
    imageH: p,
    reason: "ok"
  }), Q > 0;
}
const ch = 0.28;
function ny(t) {
  const e = t && typeof t == "object" ? t : {}, n = z(Number(e.x0 ?? 0), 0, 1), r = z(Number(e.y0 ?? 0), 0, 1), o = z(Number(e.x1 ?? 1), 0, 1), c = z(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, o),
    y0: Math.min(r, c),
    x1: Math.max(n, o),
    y1: Math.max(r, c)
  };
}
function ry(t, e = {}) {
  if (!t || typeof t != "object") return null;
  const n = String(t.asset_id || t.assetId || "").trim(), r = t.type === "external_image" || t.source_kind === "external_image", o = n || (r ? String(t.id || "").trim() : ""), c = e.includeHidden === !0, u = t.visible === !1, f = c && r && u;
  return {
    id: String(t.id || ""),
    assetId: o,
    zIndex: Number(t.z_index || t.zIndex || 0),
    yawDeg: Number(t.yaw_deg || t.yawDeg || 0),
    pitchDeg: Number(t.pitch_deg || t.pitchDeg || 0),
    rollDeg: Number(t.rot_deg ?? t.roll_deg ?? t.rollDeg ?? 0),
    hFovDeg: z(Number(t.hFOV_deg || t.hFovDeg || 30), 1, 179),
    vFovDeg: z(Number(t.vFOV_deg || t.vFovDeg || 30), 1, 179),
    crop: ny(t.crop),
    opacity: f ? ch : z(Number(t.opacity ?? 1), 0, 1),
    visible: f ? !0 : t.visible !== !1,
    external: r
  };
}
function xs(t, e = {}) {
  var c;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], r = e.includeHidden === !0;
  return {
    stickers: n.map((u) => ry(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: e.selectedId ?? ((c = t == null ? void 0 : t.active) == null ? void 0 : c.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function lh(t, e, n = {}) {
  if (typeof e != "function") return [];
  const r = n.scene || xs(t, n), o = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, c = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var A;
    const m = String((f == null ? void 0 : f.assetId) || "").trim(), y = m || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const p = m ? o[m] : null, w = e(y, p, f), M = Number((w == null ? void 0 : w.naturalWidth) || (w == null ? void 0 : w.videoWidth) || (w == null ? void 0 : w.width) || 0), k = Number((w == null ? void 0 : w.naturalHeight) || (w == null ? void 0 : w.videoHeight) || (w == null ? void 0 : w.height) || 0);
    !w || M <= 0 || k <= 0 || (u.add(y), c.push({
      assetId: y,
      source: w,
      revision: String(((A = n.revisionFor) == null ? void 0 : A.call(n, y, p, w)) ?? [
        y,
        Number(w.naturalWidth || w.videoWidth || w.width || 0),
        Number(w.naturalHeight || w.videoHeight || w.height || 0),
        String(w.currentSrc || w.src || "")
      ].join("|"))
    }));
  }), c;
}
function ml(t) {
  return {
    mode: "panorama",
    yawDeg: Number((t == null ? void 0 : t.yaw) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch) || 0),
    fovDeg: z(Number((t == null ? void 0 : t.fov) || 100), 1, 179)
  };
}
function iy(t) {
  return ml(t);
}
function ki(t) {
  const e = sh(t || {});
  return {
    mode: "cutout",
    yawDeg: Number((t == null ? void 0 : t.yaw_deg) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch_deg) || 0),
    rollDeg: Number((e == null ? void 0 : e.roll) ?? (t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0),
    hFovDeg: z(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179),
    vFovDeg: z(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1)
  };
}
const { app: me } = Ca;
function $c() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (Ca == null ? void 0 : Ca.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Zr = Math.PI / 180, Vi = { Nu: 14, Nv: 9 }, mc = { Nu: 24, Nv: 14 }, _f = { Nu: 32, Nv: 20 }, oy = 10, ay = 120;
function uh() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Qt(t, e, n = null) {
  if (!uh()) return;
  const r = (t == null ? void 0 : t.id) ?? "?";
  if (n == null) {
    console.info(`[PANO_PREVIEW][${e}] node=${r}`);
    return;
  }
  console.info(`[PANO_PREVIEW][${e}] node=${r}`, n);
}
function lo(t) {
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
function sy() {
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
function cy(t) {
  const e = Ir(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function fh(t, e, n) {
  cy(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function Vc(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function dh(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function ly(t) {
  return Fc(dh(t));
}
function qr(t = null) {
  var c, u;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((u = (c = me == null ? void 0 : me.canvas) == null ? void 0 : c.constructor) == null ? void 0 : u.name) || "");
  return [e, r, n, o].join("|");
}
function hh(t, e = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: qr(e)
  } : String(t) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: qr(e)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: qr(e)
  };
}
const Mo = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(t) {
    !t || String(t.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(t), this.lastSignature || (this.lastSignature = qr(t)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(t) {
    t && this.nodes.delete(t), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const t = this.nodes.values().next().value || null, e = qr(t);
    e !== this.lastSignature && (this.lastSignature = e, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((r) => {
        if (!(!r || String(r.__panoPreviewMode || "") !== "stickers"))
          try {
            r.__panoRebindGeneration = this.generation, Qt(r, "path.switch", {
              from: String(r.__panoStickersPath || "unknown"),
              to: "rebind",
              reason: "frontend_signature_changed",
              signature: e,
              generation: this.generation
            }), ph(r).rebind(r.__panoAttachOptions || { mode: "stickers" });
          } catch (o) {
            Qt(r, "path.switch.error", { message: String((o == null ? void 0 : o.message) || o || "unknown") });
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
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = r === "cutout" ? "dom" : hh(r, t).chosenPath, c = Vc(t);
      this.activeBackend = c;
      const u = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = t.__panoPreviewNoPreview === !0, m = n.noPreview === !0;
      if (c === o && c !== "none" && u === r && f === m) {
        t.__panoAttachOptions = { ...n, mode: r }, t.__panoPreviewMode = r, t.__panoPreviewNoPreview = m, t.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      c !== "none" && Oi(t, { keepMonitor: r === "stickers" }), Xy(t, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = Vc(t);
    },
    rebind(n = {}) {
      const r = String(n.mode || (t == null ? void 0 : t.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Oi(t, { keepMonitor: r === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Oi(t), this.activeBackend = "none";
    }
  };
  return t.__panoPreviewController = e, e;
}
function uy(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function Oi(t, e = {}) {
  var f, m, y, p, w;
  if (!t) return;
  Qa.unregister(t), uy(t);
  const n = !!t.__panoDomPreview, r = !!t.__panoLegacyPreviewHooked, o = typeof t.__panoDomRestore == "function", c = typeof t.__panoLegacyRestore == "function";
  try {
    (f = t.__panoDomRestore) == null || f.call(t);
  } catch {
  }
  t.__panoDomRestore = null;
  try {
    (m = t.__panoLegacyRestore) == null || m.call(t);
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
      (w = (p = u.root) == null ? void 0 : p.remove) == null || w.call(p);
    } catch {
    }
  }
  try {
    Array.isArray(t.widgets) && (t.widgets = t.widgets.filter((M) => {
      if (M === (u == null ? void 0 : u.widget)) return !1;
      const k = String((M == null ? void 0 : M.name) || ""), A = String((M == null ? void 0 : M.type) || ""), C = $c();
      return !(k === C || A === C || k === "pano_preview" || A === "pano_preview" || k === "preview" && A === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", Qt(t, "teardown.done", {
    reason: String(e.reason || ""),
    removedDom: n || o,
    removedLegacy: r || c,
    keepMonitor: !!e.keepMonitor
  }), e.keepMonitor || Mo.unregister(t);
}
function Jr(t, e, n) {
  return { x: t, y: e, z: n };
}
function wf(t, e) {
  return Jr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function pa(t, e) {
  return Jr(t.x * e, t.y * e, t.z * e);
}
function yc(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function xf(t, e) {
  return Jr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function ga(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Jr(t.x / e, t.y / e, t.z / e);
}
function zr(t, e) {
  const n = t * Zr, r = e * Zr, o = Math.cos(r);
  return Jr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function yl(t, e, n = 0) {
  const r = zr(t, e), o = Jr(0, 1, 0);
  let c = xf(o, r);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Jr(1, 0, 0)), c = ga(c);
  let u = ga(xf(r, c));
  const f = n * Zr, m = Math.cos(f), y = Math.sin(f), p = wf(pa(c, m), pa(u, y)), w = wf(pa(c, -y), pa(u, m));
  return { fwd: r, right: ga(p), up: ga(w) };
}
function fy(t, e = "#00ff00") {
  const n = {
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
      assets: o.assets && typeof o.assets == "object" ? o.assets : {},
      stickers: Array.isArray(o.stickers) ? o.stickers : [],
      shots: Array.isArray(o.shots) ? o.shots : [],
      active: o.active && typeof o.active == "object" ? o.active : n.active
    };
  } catch {
    return n;
  }
}
function dy(t) {
  var n;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = Za(t, "state_json")) == null ? void 0 : n.value) || "");
}
function gh(t) {
  var c;
  const e = dy(t), n = String(((c = Za(t, "bg_color")) == null ? void 0 : c.value) || "#1a1a1e"), r = t.__panoStateCache;
  if (r && r.source === e && r.bg === n)
    return r.parsed;
  const o = fy(e, n);
  return t.__panoStateCache = { source: e, bg: n, parsed: o }, o;
}
function Za(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function Sf(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function mh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function hy(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function yh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function vh(t, e, n = null) {
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
  return !r && n != null && (r = hy(t == null ? void 0 : t.graph, n)), r;
}
function py(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function vl(t, e = []) {
  const n = py(t), r = [];
  return e.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    (o === "erp_image" || o === "bg_erp") && !r.includes(o) && r.push(o);
  }), r.length ? r : e;
}
function Nf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: e, tail: n.length ? n[n.length - 1] : e };
}
function Ja(t, e) {
  const n = Nf(t), r = Nf(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function gy(t, e = ["erp_image", "bg_erp"]) {
  var m;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return [];
  const o = vl(t, e).map((y) => n.findIndex((p) => String((p == null ? void 0 : p.name) || "") === String(y))).filter((y) => y >= 0), c = n.map((y, p) => ({ input: y, idx: p })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...o, ...c])], f = [];
  for (const y of u) {
    const p = vh(t, y);
    if ((p == null ? void 0 : p.id) != null) {
      f.push(String(p.id));
      continue;
    }
    const w = (m = n[y]) == null ? void 0 : m.link;
    if (w == null) continue;
    const M = mh(t == null ? void 0 : t.graph, w), { originId: k } = yh(M);
    k != null && f.push(String(k));
  }
  return [...new Set(f)];
}
const Qa = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = Je) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((c) => {
        var p, w, M, k, A;
        if (!c) return;
        const u = Ja(r, c == null ? void 0 : c.id), m = gy(c, ["erp_image", "bg_erp"]).some((C) => Ja(r, C)), y = u ? "self" : m ? "upstream" : "global_executed";
        Qt(c, "exec-refresh", { executedId: r, reason: y }), zc(c), Qt(c, "invalidate", { cachesCleared: !0 }), (w = (p = c.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || w.call(p), (M = c.setDirtyCanvas) == null || M.call(c, !0, !0), (A = (k = c.graph) == null ? void 0 : k.setDirtyCanvas) == null || A.call(k, !0, !0), Qt(c, "draw-request", {
          route: String(c.__panoPreviewMode || ""),
          mode: String(c.__panoPreviewMode || ""),
          reason: y
        });
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
function ts(t) {
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
  return typeof ((c = Je) == null ? void 0 : c.apiURL) == "function" ? Je.apiURL(o) : o;
}
function my(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function yy(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), c = r.join("/");
  return { filename: o, subfolder: c };
}
function vy(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), e.push(o));
  }), e;
}
function bh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (my(e)) return [e];
  const { filename: n, subfolder: r } = yy(e);
  if (!n) return [e];
  const o = ["temp", "output", "input"].map((c) => ts({
    filename: n,
    subfolder: r,
    type: c
  }));
  return vy([...o, e]);
}
function by(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? ts({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function Hc(t) {
  const e = me == null ? void 0 : me.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  const o = n;
  if (e instanceof Map) {
    for (const c of e.keys())
      if (Ja(c, o)) return e.get(c);
  } else {
    const c = Object.keys(e);
    for (const u of c)
      if (Ja(u, o)) return e[u];
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
      return ts({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Bn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : ts(t);
}
function _h(t, e) {
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
function _y(t) {
  const e = [], n = /* @__PURE__ */ new Set(), r = (c) => {
    Array.isArray(c) && c.forEach((u) => e.push(u));
  }, o = (c, u = 0) => {
    !c || u > 3 || n.has(c) || typeof c == "object" && (n.add(c), r(c.images), o(c.output, u + 1), o(c.ui, u + 1), o(c.data, u + 1), o(c.result, u + 1));
  };
  return o(t, 0), e;
}
function wy(t, e) {
  try {
    const n = _y(e);
    let r = "";
    for (const o of n)
      if (r = Bn(o), r) break;
    r ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(r || ""), Qt(t, "cutout.output-sync", {
      hasOutputImage: !0,
      src: _h(t.__panoOwnOutputSrc, t.__panoOwnOutputRev),
      rev: t.__panoOwnOutputRev
    })) : Qt(t, "cutout.output-sync", { hasOutputImage: !1, keys: Object.keys(e || {}) });
  } catch {
    Qt(t, "cutout.output-sync", { hasOutputImage: !1 });
  }
}
function xy(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const r = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), o = Hc(n), c = Array.isArray(o == null ? void 0 : o.images) ? o.images : [], u = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], f = r ? [r, ...c, ...u] : [...c, ...u];
  let m = "";
  for (const D of f)
    if (m = Bn(D), m) break;
  if (!m) return null;
  const y = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), w = bh(m).map((D) => _h(D, y));
  if (!w.length) return null;
  const M = `${m}|rev:${y}`;
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
  const A = new Image();
  let C = -1;
  const O = () => {
    if (C += 1, C >= w.length) {
      t.__panoOwnOutputImageCache === k && (k.pendingSrc = "", k.pendingImg = null);
      return;
    }
    A.src = w[C];
  };
  return A.onload = () => {
    var D;
    t.__panoOwnOutputImageCache === k && k.pendingImg === A && k.pendingSrc === M && (k.src = M, k.img = A, k.pendingSrc = "", k.pendingImg = null), e == null || e(), (D = t.setDirtyCanvas) == null || D.call(t, !0, !0);
  }, A.onerror = () => {
    if (C + 1 >= w.length) {
      t.__panoOwnOutputImageCache === k && k.pendingImg === A && (k.pendingSrc = "", k.pendingImg = null);
      return;
    }
    O();
  }, k.pendingSrc = M, k.pendingImg = A, O(), k.img && (k.img.complete || k.img.naturalWidth || k.img.width) ? k.img : A;
}
function Sy(t, e = []) {
  var y, p;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const r = vl(t, e), o = r.map((w) => n.findIndex((M) => String((M == null ? void 0 : M.name) || "") === String(w))).filter((w) => w >= 0), c = n.map((w, M) => ({ input: w, idx: M })).filter(({ input: w }) => String((w == null ? void 0 : w.type) || "").toUpperCase() === "IMAGE").map(({ idx: w }) => w), u = [.../* @__PURE__ */ new Set([...o, ...c])];
  Qt(t, "image-resolve", {
    inputCandidates: r,
    resolvedIndices: u,
    stage: "start"
  });
  for (const w of u) {
    const M = n[w], k = M == null ? void 0 : M.link;
    if (k == null) continue;
    const A = mh(t.graph, k), { originId: C, originSlot: O } = yh(A);
    if (C == null) continue;
    const D = vh(t, w, C);
    if (!D) continue;
    const $ = Number(O || 0), j = Hc((D == null ? void 0 : D.id) ?? C), S = Array.isArray(j == null ? void 0 : j.images) ? j.images : [];
    if (S.length) {
      const nt = [];
      $ >= 0 && $ < S.length && nt.push(S[$]), nt.push(...S);
      for (const Y of nt) {
        const F = Bn(Y);
        if (F)
          return Qt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "nodeOutputs",
            stage: "hit"
          }), { src: F, sourceType: "nodeOutputs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    let q = [];
    try {
      q = typeof (me == null ? void 0 : me.getNodeImageUrls) == "function" ? me.getNodeImageUrls(D) || [] : [];
    } catch {
      q = [];
    }
    if (Array.isArray(q) && q.length) {
      const nt = [];
      $ >= 0 && $ < q.length && nt.push(q[$]), nt.push(...q);
      for (const Y of nt) {
        const F = Bn(Y);
        if (F)
          return Qt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "appNodeImageUrls",
            stage: "hit"
          }), { src: F, sourceType: "appNodeImageUrls", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const Q = Array.isArray(D == null ? void 0 : D.imgs) ? D.imgs : [];
    if (Q.length) {
      const nt = [];
      $ >= 0 && $ < Q.length && nt.push(Q[$]), nt.push(...Q);
      for (const Y of nt) {
        const F = Bn(Y);
        if (F)
          return Qt(t, "image-resolve", {
            inputName: String((M == null ? void 0 : M.name) || ""),
            sourceType: "nodeImgs",
            stage: "hit"
          }), { src: F, sourceType: "nodeImgs", inputName: String((M == null ? void 0 : M.name) || "") };
      }
    }
    const ut = (y = D == null ? void 0 : D.widgets) == null ? void 0 : y.find((nt) => String((nt == null ? void 0 : nt.name) || "").toLowerCase() === "image");
    if (ut) {
      let nt = Bn(ut.value);
      if (nt && !nt.includes("/") && !nt.includes(":") && (D.comfyClass === "LoadImage" || D.type === "LoadImage") && (nt = Je.apiURL(`/view?filename=${encodeURIComponent(nt)}&type=input&subfolder=`)), nt)
        return Qt(t, "image-resolve", {
          inputName: String((M == null ? void 0 : M.name) || ""),
          sourceType: "widget",
          stage: "hit"
        }), { src: nt, sourceType: "widget", inputName: String((M == null ? void 0 : M.name) || "") };
    }
  }
  const f = Hc(t == null ? void 0 : t.id), m = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && m.push(...f.pano_input_images), Array.isArray((p = f == null ? void 0 : f.ui) == null ? void 0 : p.pano_input_images) && m.push(...f.ui.pano_input_images), m.length > 0)
    for (const w of m) {
      const M = Bn(w);
      if (M)
        return Qt(t, "image-resolve", { sourceType: "selfOutput", src: M, stage: "hit" }), { src: M, sourceType: "selfOutput", inputName: "fallback" };
    }
  return Qt(t, "image-resolve", { stage: "miss" }), { src: "", sourceType: "", inputName: "" };
}
function Ny(t, e = []) {
  const n = Sy(t, e), r = String((n == null ? void 0 : n.src) || "").trim();
  if (!r) return null;
  const o = bh(r);
  if (!o.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = e.join("|") || "image", u = t.__panoLinkedInputImageCache.get(c);
  if (u && u.srcRaw === r && u.img) return u.img;
  const f = new Image(), m = { srcRaw: r, resolvedSrc: "", img: f };
  t.__panoLinkedInputImageCache.set(c, m);
  let y = -1;
  const p = () => {
    var M, k;
    if (y += 1, y >= o.length) {
      try {
        (k = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || k.call(M, c);
      } catch {
      }
      Qt(t, "image-load", {
        ok: !1,
        src: r,
        preferredInputNames: e,
        sourceType: String((n == null ? void 0 : n.sourceType) || ""),
        attemptCount: o.length,
        errorType: "all_candidates_failed"
      });
      return;
    }
    const w = o[y];
    m.resolvedSrc = w, f.src = w;
  };
  return f.onload = () => {
    var w;
    Qt(t, "image-load", {
      ok: !0,
      src: r,
      resolvedSrc: String(m.resolvedSrc || f.src || ""),
      preferredInputNames: e,
      sourceType: String((n == null ? void 0 : n.sourceType) || ""),
      attemptCount: y + 1
    }), (w = t.setDirtyCanvas) == null || w.call(t, !0, !0);
  }, f.onerror = (w) => {
    var M, k;
    if (y + 1 < o.length) {
      p();
      return;
    }
    try {
      (k = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || k.call(M, c);
    } catch {
    }
    Qt(t, "image-load", {
      ok: !1,
      src: r,
      resolvedSrc: String(m.resolvedSrc || ""),
      preferredInputNames: e,
      sourceType: String((n == null ? void 0 : n.sourceType) || ""),
      attemptCount: y + 1,
      errorType: String((w == null ? void 0 : w.type) || "error")
    });
  }, p(), f;
}
function es(t, e = [], n = null) {
  const r = Ny(t, e);
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
function wh(t, e) {
  t.__panoRenderCache || (t.__panoRenderCache = {
    mode: String(e || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = t.__panoRenderCache, r = String(e || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Nr(t, e, n = "") {
  const r = wh(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), o = performance.now();
  return e ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o, Qt(t, "loading", { phase: "enter", src: String(n || "") })), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < ay ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, Qt(t, "loading", { phase: "exit", src: String(n || "") }), !1) : !1;
}
function jc(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), r = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), o = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), c = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || r)), u = n / o, f = r / c, m = Math.min(u, f);
  return Number.isFinite(m) && m > 0 ? m : 1;
}
function Mf(t, e, n = 1) {
  const r = Number((e == null ? void 0 : e.x) || 0), o = Number((e == null ? void 0 : e.y) || 0), c = Number((e == null ? void 0 : e.w) || 0), u = Number((e == null ? void 0 : e.h) || 0);
  if (c <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), m = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), c * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), p = r + (c - m) * 0.5, w = o + (u - y) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(p, w, m, y, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", p + m * 0.5, w + y * 0.5 + 0.5), t.restore();
}
function uo(t, e, n = "Open editor and add frame") {
  var o;
  const r = (o = t == null ? void 0 : t.__panoDomPreview) == null ? void 0 : o.emptyHintEl;
  r && (r.textContent = String(n || "Open editor and add frame"), r.style.display = e ? "flex" : "none");
}
function My(t) {
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
function xh(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), r = Number((t == null ? void 0 : t.y) || 0), o = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), c = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), u = Number(e) > 0 ? Number(e) : 1;
  let f = o, m = o / u;
  return m > c && (m = c, f = c * u), {
    x: n + (o - f) * 0.5,
    y: r + (c - m) * 0.5,
    w: f,
    h: m
  };
}
function Py(t, e, n, r = 0) {
  if (!t || !e || !n) return !1;
  const o = Math.max(1, Number(e.naturalWidth || e.width || 0)), c = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (o <= 1 || c <= 1) return !1;
  const u = xh(n, o / c);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(r) || 0));
  return f > 0 && (t.fillStyle = `rgba(0,0,0,${f})`, t.fillRect(u.x, u.y, u.w, u.h)), t.restore(), !0;
}
function ky(t, e) {
  if (!e || !e.complete || !(e.naturalWidth || e.width)) return null;
  const n = Number(e.naturalWidth || e.width || 0), r = Number(e.naturalHeight || e.height || 0);
  if (n <= 1 || r <= 1) return null;
  t.__panoWrappedErpCache || (t.__panoWrappedErpCache = { src: "", w: 0, h: 0, canvas: null });
  const o = String(e.src || ""), c = t.__panoWrappedErpCache;
  if (c.canvas && c.src === o && c.w === n && c.h === r) return c.canvas;
  const u = document.createElement("canvas");
  u.width = n * 2, u.height = r;
  const f = u.getContext("2d");
  return f ? (f.drawImage(e, 0, 0, n, r), f.drawImage(e, n, 0, n, r), t.__panoWrappedErpCache = { src: o, w: n, h: r, canvas: u }, u) : null;
}
function Cy(t, e = null) {
  const r = Array.isArray(t.widgets) ? t.widgets : [];
  let o = 32;
  return r.forEach((c) => {
    var f;
    if (c === e || !c || c.hidden || c.type === "hidden") return;
    let u = 22;
    try {
      const m = typeof c.computeSize == "function" ? c.computeSize(((f = Ir(t)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(m) && Number.isFinite(Number(m[1])) && (u = Number(m[1]));
    } catch {
      u = 22;
    }
    o += u;
  }), o;
}
function Uc(t) {
  const n = Cy(t) + 2, r = 8, o = Ir(t), c = Math.max(120, Number((o == null ? void 0 : o[0]) || 0) - 16), u = Math.max(84, Number((o == null ? void 0 : o[1]) || 0) - n - 8);
  return u < 40 || c < 80 ? null : { x: r, y: n, w: c, h: u };
}
function Sh(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const r = String(e || "");
  if (!r) return null;
  const o = by(n);
  if (!o) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const c = window.__panoSharedImageCache.get(o);
  if (c != null && c.img)
    return t.__panoPreviewImageCache.set(r, { src: o, img: c.img }), c.img;
  const u = t.__panoPreviewImageCache.get(r);
  if (u && u.src === o) return u.img;
  const f = new Image();
  return f.src = o, f.onload = () => {
    var m;
    return (m = t.setDirtyCanvas) == null ? void 0 : m.call(t, !0, !0);
  }, window.__panoSharedImageCache.set(o, { img: f }), t.__panoPreviewImageCache.set(r, { src: o, img: f }), f;
}
function Ay(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.__panoStickerSortCache;
  if ((r == null ? void 0 : r.source) === n && Array.isArray(r.sorted)) return r.sorted;
  const o = [...n].sort((c, u) => Number((c == null ? void 0 : c.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: o }, o;
}
function Nh(t, e) {
  return xs(e, {
    selectedId: null,
    hoveredId: null
  });
}
function Mh(t, e, n) {
  return lh(e, (r, o) => Sh(t, r, o), { scene: n });
}
function Iy(t, e, n, r = 0.45) {
  const o = (t.x + e.x + n.x) / 3, c = (t.y + e.y + n.y) / 3, u = (f) => {
    const m = f.x - o, y = f.y - c, p = Math.hypot(m, y) || 1;
    return { x: f.x + m / p * r, y: f.y + y / p * r };
  };
  return [u(t), u(e), u(n)];
}
function ns(t, e, n, r, o, c, u, f) {
  const m = n.x * (r.y - o.y) + r.x * (o.y - n.y) + o.x * (n.y - r.y);
  if (Math.abs(m) < 1e-6) return;
  const [y, p, w] = Iy(c, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(p.x, p.y), t.lineTo(w.x, w.y), t.closePath(), t.clip();
  const M = (c.x * (r.y - o.y) + u.x * (o.y - n.y) + f.x * (n.y - r.y)) / m, k = (c.x * (o.x - r.x) + u.x * (n.x - o.x) + f.x * (r.x - n.x)) / m, A = (c.x * (r.x * o.y - o.x * r.y) + u.x * (o.x * n.y - n.x * o.y) + f.x * (n.x * r.y - r.x * n.y)) / m, C = (c.y * (r.y - o.y) + u.y * (o.y - n.y) + f.y * (n.y - r.y)) / m, O = (c.y * (o.x - r.x) + u.y * (n.x - o.x) + f.y * (r.x - n.x)) / m, D = (c.y * (r.x * o.y - o.x * r.y) + u.y * (o.x * n.y - n.x * o.y) + f.y * (n.x * r.y - r.x * n.y)) / m;
  t.transform(M, C, k, O, A, D), t.drawImage(e, 0, 0), t.restore();
}
function Ph(t, e, n, r) {
  const o = yc(t, e.right), c = yc(t, e.up), u = yc(t, e.fwd);
  if (u <= 1e-4) return null;
  const f = c / u / r, m = o / u / r;
  return { x: n.x + n.w * 0.5 + m * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function kh(t, e, n, r, o, c, u, f = 12, m = 9) {
  var Z;
  const y = z(Number(u.hFOV_deg || 30), 1, 179) * Zr, p = z(Number(u.vFOV_deg || 30), 1, 179) * Zr, w = Math.tan(y * 0.5), M = Math.tan(p * 0.5), k = u.crop || {}, A = z(Number(k.x0 ?? 0), 0, 1), C = z(Number(k.y0 ?? 0), 0, 1), O = z(Number(k.x1 ?? 1), 0, 1), D = z(Number(k.y1 ?? 1), 0, 1), $ = Math.max(1e-4, O - A), j = Math.max(1e-4, D - C), S = yl(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), q = [], Q = [], ut = [], nt = [];
  for (let U = 0; U <= m; U++) {
    const at = U / m, st = (1 - (C + at * j) * 2) * M;
    for (let wt = 0; wt <= f; wt++) {
      const Rt = wt / f, Mt = ((A + Rt * $) * 2 - 1) * w, Bt = S.fwd.x + S.right.x * Mt + S.up.x * st, ye = S.fwd.y + S.right.y * Mt + S.up.y * st, H = S.fwd.z + S.right.z * Mt + S.up.z * st, Pt = Math.hypot(Bt, ye, H) || 1e-8, St = Bt / Pt, Dt = ye / Pt, zt = H / Pt, $t = St * r.right.x + Dt * r.right.y + zt * r.right.z, Gt = St * r.up.x + Dt * r.up.y + zt * r.up.z, I = St * r.fwd.x + Dt * r.fwd.y + zt * r.fwd.z;
      if (I <= 1e-4)
        q[U] || (q[U] = []), Q[U] || (Q[U] = []), q[U][wt] = null, Q[U][wt] = null;
      else {
        const L = Gt / I / o, V = $t / I / o;
        q[U] || (q[U] = []), Q[U] || (Q[U] = []), q[U][wt] = n.x + n.w * 0.5 + V * n.h * 0.5, Q[U][wt] = n.y + n.h * 0.5 - L * n.h * 0.5;
      }
      ut[U] || (ut[U] = []), nt[U] || (nt[U] = []), ut[U][wt] = Rt, nt[U][wt] = at;
    }
  }
  const Y = (Z = c.assets) == null ? void 0 : Z[u.asset_id], F = Sh(e, u.asset_id, Y);
  if (!F || !F.complete || !F.naturalWidth) return;
  const rt = Number(F.naturalWidth || F.width || 1), mt = Number(F.naturalHeight || F.height || 1), ct = f < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = ct;
  for (let U = 0; U < m; U++)
    for (let at = 0; at < f; at++) {
      const it = q[U][at], st = Q[U][at], wt = q[U][at + 1], Rt = Q[U][at + 1], J = q[U + 1][at], Mt = Q[U + 1][at], Bt = q[U + 1][at + 1], ye = Q[U + 1][at + 1];
      if (it === null || wt === null || J === null || Bt === null) continue;
      const H = ut[U][at] * rt, Pt = nt[U][at] * mt, St = ut[U][at + 1] * rt, Dt = nt[U][at + 1] * mt, zt = ut[U + 1][at] * rt, $t = nt[U + 1][at] * mt, Gt = ut[U + 1][at + 1] * rt, I = nt[U + 1][at + 1] * mt;
      ns(t, F, { x: H, y: Pt }, { x: St, y: Dt }, { x: Gt, y: I }, { x: it, y: st }, { x: wt, y: Rt }, { x: Bt, y: ye }), ns(t, F, { x: H, y: Pt }, { x: Gt, y: I }, { x: zt, y: $t }, { x: it, y: st }, { x: Bt, y: ye }, { x: J, y: Mt });
    }
}
function Ey(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const r = gh(t), o = Uc(t);
  if (!o) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const c = yl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(t.__panoPreviewView.fov || 100) * Zr * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(o.x, o.y, o.w, o.h, 8), e.fill(), e.stroke(), e.clip();
  const f = es(
    t,
    vl(t, ["erp_image", "bg_erp"]),
    () => {
      var S;
      return (S = t.setDirtyCanvas) == null ? void 0 : S.call(t, !0, !1);
    }
  ), m = !!(f && f.complete && (f.naturalWidth || f.width)), y = Ih(t), p = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, w = y || p, M = Vi, k = Nh(t, r), A = Mh(t, r, k), C = ml(t.__panoPreviewView), O = m ? ji({
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
    textures: A,
    scene: k,
    view: C
  }) : !1, D = w ? 8 : 12, $ = w ? 6 : 9, j = Ay(t, r);
  if (!m || j.length === 0) {
    const S = jc(e == null ? void 0 : e.canvas, o);
    Ch(e, o, c, u, S);
  }
  !O && m && rs(t, e, o, c, u, f, M), !O && j.length > 0 && j.forEach((S) => kh(e, t, o, c, u, r, S, D, $)), e.restore();
}
function Va(t, e, n, r) {
  var c, u, f, m, y, p;
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
      const w = r.convertEventToCanvasOffset(e);
      if (Array.isArray(w) && w.length >= 2)
        return {
          x: Number(w[0]) - Number(((f = t == null ? void 0 : t.pos) == null ? void 0 : f[0]) || 0),
          y: Number(w[1]) - Number(((m = t == null ? void 0 : t.pos) == null ? void 0 : m[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(e == null ? void 0 : e.canvasX)) && Number.isFinite(Number(e == null ? void 0 : e.canvasY)))
    return {
      x: Number(e.canvasX) - Number(((y = t == null ? void 0 : t.pos) == null ? void 0 : y[0]) || 0),
      y: Number(e.canvasY) - Number(((p = t == null ? void 0 : t.pos) == null ? void 0 : p[1]) || 0)
    };
  const o = Ly(t, e, r);
  return o || null;
}
function Ty(t, e) {
  var w, M;
  const n = Number(t == null ? void 0 : t.clientX), r = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, c = (w = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : w.call(o), u = (e == null ? void 0 : e.ds) || ((M = me == null ? void 0 : me.canvas) == null ? void 0 : M.ds);
  if (!c || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const m = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(c.left || 0)) / f - Number(m[0] || 0), p = (r - Number(c.top || 0)) / f - Number(m[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(p) ? null : { x: y, y: p };
}
function Ly(t, e, n) {
  var o, c;
  const r = Ty(e, n || (me == null ? void 0 : me.canvas));
  return r ? {
    x: r.x - Number(((o = t == null ? void 0 : t.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((c = t == null ? void 0 : t.pos) == null ? void 0 : c[1]) || 0)
  } : null;
}
function ma(t) {
  if (t.__panoLegacyPreviewHooked) return;
  Qt(t, "legacy.attach", {
    mode: t.__panoPreviewMode,
    nodeType: String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""),
    nodeSize: Ir(t)
  }), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", fh(t, 320, 180), Si(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var M, k;
    const w = e ? e.apply(this, arguments) : void 0;
    try {
      const A = arguments[0];
      A && !((M = this.flags) != null && M.collapsed) && (r.stepInertia(performance.now()) && ((k = this.setDirtyCanvas) == null || k.call(this, !0, !1)), Ey(this, A, r));
    } catch {
    }
    return w;
  }, t.onResize = function() {
    var M;
    const w = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, is(this, 150), (M = this.setDirtyCanvas) == null || M.call(this, !0, !0), Eh(this, 220, null), w;
  };
  const r = ws({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (w) => {
      t.__panoPreviewView = w;
    },
    onInteraction: () => {
      var w;
      Ah(t), (w = t.setDirtyCanvas) == null || w.call(t, !0, !1);
    }
  }), o = t.onMouseDown;
  t.onMouseDown = function(w, M, k) {
    var A;
    try {
      if (!((A = this.flags) != null && A.collapsed)) {
        const C = Va(this, w, M, k) || { x: 0, y: 0 }, O = Ir(this), D = Number((O == null ? void 0 : O[0]) || 0), $ = Number((O == null ? void 0 : O[1]) || 0);
        if (C.x >= D - 20 && C.y >= $ - 20)
          return o ? o.apply(this, arguments) : void 0;
        const S = Uc(this);
        if (Sf(C.x, C.y, S))
          return (w == null ? void 0 : w.button) === 0 && r.startDrag(C.x, C.y), !0;
      }
    } catch {
    }
    return o ? o.apply(this, arguments) : void 0;
  };
  const c = t.onMouseMove;
  t.onMouseMove = function(w, M, k) {
    try {
      const A = Va(this, w, M, k);
      if (r.state.drag.active) {
        if (typeof (w == null ? void 0 : w.buttons) == "number" && (w.buttons & 1) === 0)
          return r.endDrag(), !0;
        const C = A || r.state.drag;
        return r.moveDrag(C.x, C.y, "pano"), !0;
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
    const w = f ? f.apply(this, arguments) : void 0;
    return r.state.drag.active && r.endDrag(), w;
  };
  const m = t.onMouseWheel;
  t.onMouseWheel = function(w, M, k) {
    var A, C;
    try {
      if ((A = this.flags) != null && A.collapsed) return m ? m.apply(this, arguments) : void 0;
      const O = Va(this, w, M, k), D = Uc(this);
      if (!O || !Sf(O.x, O.y, D)) return m ? m.apply(this, arguments) : void 0;
      const $ = Number((w == null ? void 0 : w.deltaY) ?? (w == null ? void 0 : w.wheelDeltaY) ?? (typeof M == "number" ? M : 0));
      return r.applyWheel(Math.sign($)) && ((C = this.setDirtyCanvas) == null || C.call(this, !0, !1)), typeof (w == null ? void 0 : w.preventDefault) == "function" && w.preventDefault(), typeof (w == null ? void 0 : w.stopPropagation) == "function" && w.stopPropagation(), !0;
    } catch {
      return m ? m.apply(this, arguments) : void 0;
    }
  };
  const y = t.onRemoved, p = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = n, t.onDrawForeground = e, t.onMouseDown = o, t.onMouseMove = c, t.onMouseUp = u, t.onMouseLeave = f, t.onMouseWheel = m, t.onRemoved = y, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = p, t.onRemoved = function() {
    return p(), Mo.unregister(this), Qa.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function Dy(t, e) {
  const n = es(
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
function Ry(t, e) {
  var y, p, w, M, k, A, C, O, D, $, j, S;
  const n = (p = (y = e == null ? void 0 : e.painting) == null ? void 0 : y.paint) == null ? void 0 : p.strokes, r = (M = (w = e == null ? void 0 : e.painting) == null ? void 0 : w.mask) == null ? void 0 : M.strokes, o = Array.isArray(n) && n.length > 0, c = Array.isArray(r) && r.length > 0;
  if (!o && !c) return null;
  const u = Dy(t, e), f = `${u.width}x${u.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== f) && (t.__panoPreviewPaintEngine = Oc(u), t.__panoPreviewPaintDescriptorKey = f, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const m = {
    paint: n || null,
    mask: r || null,
    groups: ((k = e == null ? void 0 : e.painting) == null ? void 0 : k.groups) || null,
    rasterObjects: ((A = e == null ? void 0 : e.painting) == null ? void 0 : A.raster_objects) || null
  };
  return (((C = t.__panoPreviewPaintRevision) == null ? void 0 : C.paint) !== m.paint || ((O = t.__panoPreviewPaintRevision) == null ? void 0 : O.mask) !== m.mask || ((D = t.__panoPreviewPaintRevision) == null ? void 0 : D.groups) !== m.groups || (($ = t.__panoPreviewPaintRevision) == null ? void 0 : $.rasterObjects) !== m.rasterObjects) && (t.__panoPreviewPaintRevision = m, t.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    c ? "m1" : "m0",
    String(Array.isArray((j = e == null ? void 0 : e.painting) == null ? void 0 : j.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((S = e == null ? void 0 : e.painting) == null ? void 0 : S.raster_objects) ? e.painting.raster_objects.length : 0)
  ].join(":"), t.__panoPreviewPaintEngine.rebuildCommitted(e)), t.__panoPreviewPaintEngine;
}
function Oy(t) {
  var n;
  return (Array.isArray((n = t == null ? void 0 : t.painting) == null ? void 0 : n.groups) ? t.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function Fy(t, e) {
  const n = Ry(t, e);
  if (!n) return null;
  const r = Oy(e);
  return n.getErpTarget(r).displayPaint.canvas;
}
function $y(t, e, n = null) {
  var f;
  const r = (f = e == null ? void 0 : e.painting_layer) == null ? void 0 : f.paint, o = Bn(r);
  if (!o) return null;
  t.__panoPaintingLayerImageCache || (t.__panoPaintingLayerImageCache = { src: "", img: null });
  const c = t.__panoPaintingLayerImageCache;
  if (c.img && c.src === o) return c.img;
  const u = new Image();
  return u.onload = () => {
    var m;
    n == null || n(), (m = t.setDirtyCanvas) == null || m.call(t, !0, !0);
  }, u.onerror = () => {
    var m;
    ((m = t.__panoPaintingLayerImageCache) == null ? void 0 : m.img) === u && (t.__panoPaintingLayerImageCache = { src: "", img: null });
  }, u.src = o, t.__panoPaintingLayerImageCache = { src: o, img: u }, u;
}
function Pf(t, e) {
  var c, u;
  const n = t == null ? void 0 : t.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((c = e == null ? void 0 : e.painting) == null ? void 0 : c.raster_objects) && e.painting.raster_objects.length > 0) {
    const f = $y(t, e, () => {
      var m, y;
      return (y = (m = t.__panoDomPreview) == null ? void 0 : m.requestDraw) == null ? void 0 : y.call(m);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = e == null ? void 0 : e.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const o = Fy(t, e);
  return o ? {
    source: o,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function Vy(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function Hy(t, e, n, r) {
  let o = (t == null ? void 0 : t[e]) || null;
  return (!o || o.width !== n || o.height !== r) && (o = document.createElement("canvas"), o.width = n, o.height = r, t[e] = o), o;
}
function zy(t, e, n, r, o, c) {
  if (!e || !n || !(r > 0) || !(o > 0)) return;
  const u = Vy(n);
  if (u.width === r && u.height === o) {
    e.drawImage(n, 0, 0, r, o);
    return;
  }
  const m = Hy(t, c, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!m) {
    e.drawImage(n, 0, 0, r, o);
    return;
  }
  try {
    m.clearRect(0, 0, u.width, u.height), m.drawImage(n, 0, 0, u.width, u.height);
    const y = m.getImageData(0, 0, u.width, u.height).data, p = e.getImageData(0, 0, r, o), w = p.data, M = Math.max(0, u.width - 1), k = Math.max(0, u.height - 1);
    for (let A = 0; A < o; A += 1) {
      const C = (A + 0.5) * u.height / o - 0.5, O = z(Math.floor(C), 0, k), D = z(O + 1, 0, k), $ = z(C - O, 0, 1);
      for (let j = 0; j < r; j += 1) {
        const S = (j + 0.5) * u.width / r - 0.5, q = z(Math.floor(S), 0, M), Q = z(q + 1, 0, M), ut = z(S - q, 0, 1);
        let nt = 0, Y = 0, F = 0, rt = 0;
        const mt = (U, at, it) => {
          const st = (at * u.width + U) * 4, wt = (y[st + 3] || 0) / 255;
          nt += wt * it, Y += (y[st] || 0) / 255 * wt * it, F += (y[st + 1] || 0) / 255 * wt * it, rt += (y[st + 2] || 0) / 255 * wt * it;
        };
        if (mt(q, O, (1 - ut) * (1 - $)), mt(Q, O, ut * (1 - $)), mt(q, D, (1 - ut) * $), mt(Q, D, ut * $), nt <= 1e-6) continue;
        const ct = (A * r + j) * 4, Z = 1 - nt;
        w[ct] = Math.round(z((Y + w[ct] / 255 * Z) * 255, 0, 255)), w[ct + 1] = Math.round(z((F + w[ct + 1] / 255 * Z) * 255, 0, 255)), w[ct + 2] = Math.round(z((rt + w[ct + 2] / 255 * Z) * 255, 0, 255)), w[ct + 3] = 255;
      }
    }
    e.putImageData(p, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, r, o);
  }
}
function kf(t, e, n, r) {
  const o = Math.max(1, Number(e.naturalWidth || e.width || 0)), c = Math.max(1, Number(e.naturalHeight || e.height || 0)), f = `${String(e.currentSrc || e.src || "")}|${o}x${c}|${r}`;
  let m = t.__panoPreviewBgPaint;
  if (!m || m.__revKey !== f || m.width !== o || m.height !== c) {
    (!m || m.width !== o || m.height !== c) && (m = document.createElement("canvas"), m.width = o, m.height = c, t.__panoPreviewBgPaint = m);
    const y = m.getContext("2d");
    y.clearRect(0, 0, o, c), y.drawImage(e, 0, 0, o, c), zy(t, y, n, o, c, "__panoPreviewOverlayScratch"), m.__revKey = f;
  }
  return m;
}
function jy(t, e, n, r = null) {
  const o = String(t.__panoPreviewMode || "stickers");
  wh(t, o);
  const c = gh(t), u = o === "cutout" ? xy(t, () => {
    var C, O;
    return (O = (C = t.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : O.call(C);
  }) : null, f = !!(u && u.complete && (u.naturalWidth || u.width)), m = e.parentElement, y = 1, p = Math.max(1, Number((m == null ? void 0 : m.clientWidth) || e.clientWidth || 0)), w = Math.max(1, Number((m == null ? void 0 : m.clientHeight) || e.clientHeight || 0)), M = Math.max(64, Math.round(p * y)), k = Math.max(64, Math.round(w * y)), A = e.getContext("2d");
  if (A)
    if (o === "cutout") {
      const C = My(c), O = es(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var Z, U;
          return (U = (Z = t.__panoDomPreview) == null ? void 0 : Z.requestDraw) == null ? void 0 : U.call(Z);
        }
      ), D = !!(O && O.complete && (O.naturalWidth || O.width));
      (e.width !== M || e.height !== k) && (e.width = M, e.height = k);
      const $ = { x: 0, y: 0, w: M, h: k }, j = f ? z(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : D ? z(Number((O.naturalWidth || O.width) / Math.max(1, Number(O.naturalHeight || O.height || 1))), 0.05, 20) : 1, S = C ? ki(C) : null, q = z(Number((S == null ? void 0 : S.aspect) || j || 1), 0.05, 20), Q = xh($, q), ut = jc(e, $);
      A.setTransform(1, 0, 0, 1, 0, 0), A.fillStyle = "#070707", A.fillRect(0, 0, M, k);
      const nt = t == null ? void 0 : t.__panoCutoutPreviewSurface, Y = (nt == null ? void 0 : nt.source) || null;
      if (!!(Y && Number(Y.width || 0) > 1 && Number(Y.height || 0) > 1)) {
        A.drawImage(Y, Q.x, Q.y, Q.w, Q.h), uo(t, !1), Nr(t, !1, "");
        return;
      }
      let rt = "none", mt = "Open editor and add frame", ct = "";
      if (f)
        A.drawImage(u, Q.x, Q.y, Q.w, Q.h);
      else if (ct = String((O == null ? void 0 : O.src) || ""), C)
        O && !D ? rt = "loading" : D ? (rt = "empty", mt = "Open editor or run node") : (rt = "empty", mt = "Connect ERP image");
      else {
        if (D) {
          const Z = Pf(t, c), U = Z != null && Z.source ? kf(t, O, Z.source, Z.revision || "") : O;
          Py(A, U, $, 0.44);
        }
        rt = "empty", mt = "Open editor and add frame";
      }
      rt === "loading" ? (Mf(A, Q, ut), uo(t, !1), Nr(t, !0, ct)) : rt === "empty" ? (uo(t, !0, mt), Nr(t, !1, "")) : (uo(t, !1), Nr(t, !1, ""));
    } else {
      uo(t, !1), (e.width !== M || e.height !== k) && (e.width = M, e.height = k);
      const C = { x: 0, y: 0, w: M, h: k }, O = jc(e, C);
      A.setTransform(1, 0, 0, 1, 0, 0), A.clearRect(0, 0, M, k), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const D = yl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), $ = Math.tan(Number(t.__panoPreviewView.fov || 100) * Zr * 0.5), j = es(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var Z, U;
          return (U = (Z = t.__panoDomPreview) == null ? void 0 : Z.requestDraw) == null ? void 0 : U.call(Z);
        }
      ), S = !!(j && j.complete && (j.naturalWidth || j.width));
      A.fillStyle = "#1a1a1e", A.fillRect(0, 0, M, k);
      const q = Nh(t, c), Q = Mh(t, c, q), ut = ml(t.__panoPreviewView), nt = Pf(t, c), Y = (nt == null ? void 0 : nt.source) || null, F = S && Y ? kf(t, j, Y, (nt == null ? void 0 : nt.revision) || "") : j, rt = F !== j ? String(F.__revKey || "") : j ? [
        String(j.currentSrc || j.src || ""),
        Number(j.naturalWidth || j.width || 0),
        Number(j.naturalHeight || j.height || 0)
      ].join("|") : "", mt = S ? ji({
        owner: t,
        cacheKey: "runtime_dom_scene",
        ctx: A,
        rect: C,
        backgroundSource: F,
        backgroundRevision: rt,
        textures: Q,
        scene: q,
        view: ut
      }) : !1, ct = q.stickers;
      if (S && mt)
        Nr(t, !1, "");
      else if (S)
        rs(t, A, C, D, $, F, Vi), Nr(t, !1, "");
      else if (Y)
        rs(t, A, C, D, $, Y, Vi), Nr(t, !!j && !S, String((j == null ? void 0 : j.src) || ""));
      else {
        const Z = !!j && !S;
        Nr(t, Z, String((j == null ? void 0 : j.src) || "")), Z && Mf(A, C, O);
      }
      if ((!S || ct.length === 0) && Ch(A, C, D, $, O), !mt && ct.length > 0) {
        const Z = Ih(t), U = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, at = Z || U, it = at ? 8 : 12, st = at ? 6 : 9;
        ct.forEach((wt) => kh(A, t, C, D, $, c, wt, it, st));
      } else if (!j || !S) {
        const Z = Math.max(14, Math.round(16 * O));
        A.fillStyle = "rgba(212,212,216,0.85)", A.font = `600 ${Z}px Plus Jakarta Sans, Geist, sans-serif`, A.textAlign = "center", A.fillText("Open editor to add stickers", M * 0.5, k * 0.5 + 24 * O);
      }
    }
}
function rs(t, e, n, r, o, c, u = mc) {
  if (!(!!c && (typeof HTMLCanvasElement < "u" && c instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && c instanceof OffscreenCanvas || typeof ImageBitmap < "u" && c instanceof ImageBitmap) || !!c && c.complete && (c.naturalWidth || c.width))) return;
  const y = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  if (E1({
    owner: t,
    cacheKey: "runtime_pano_bg",
    ctx: e,
    rect: n,
    img: c,
    mode: "panorama",
    yawDeg: Number(y.yaw || 0),
    pitchDeg: Number(y.pitch || 0),
    fovDeg: Number(y.fov || 100)
  })) return;
  const p = Number(c.naturalWidth || c.width || 0), w = Number(c.naturalHeight || c.height || 0);
  if (p <= 1 || w <= 1) return;
  const k = ky(t, c) || c, A = Math.max(4, Number((u == null ? void 0 : u.Nu) || mc.Nu)), C = Math.max(4, Number((u == null ? void 0 : u.Nv) || mc.Nv)), O = A <= Vi.Nu && C <= Vi.Nv ? 0.24 : A >= _f.Nu && C >= _f.Nv ? 0.42 : 0.34, D = [], $ = [];
  for (let Q = 0; Q <= C; Q++)
    D[Q] = [], $[Q] = [];
  const j = n.x + n.w * 0.5, S = n.y + n.h * 0.5, q = n.h * 0.5;
  for (let Q = 0; Q <= C; Q++) {
    const ut = n.y + n.h * Q / C, nt = (S - ut) / q * o;
    for (let Y = 0; Y <= A; Y++) {
      const F = n.x + n.w * Y / A, rt = (F - j) / q * o, mt = r.fwd.x + r.right.x * rt + r.up.x * nt, ct = r.fwd.y + r.right.y * rt + r.up.y * nt, Z = r.fwd.z + r.right.z * rt + r.up.z * nt, U = Math.hypot(mt, ct, Z) || 1e-8, at = mt / U, it = ct / U, st = Z / U, wt = Math.atan2(at, st), Rt = Math.asin(z(it, -1, 1));
      let J = (wt / (2 * Math.PI) + 0.5) * p;
      for (; J < 0; ) J += p;
      for (; J >= p; ) J -= p;
      const Mt = (0.5 - Rt / Math.PI) * w;
      D[Q][Y] = { x: F, y: ut }, $[Q][Y] = { x: J, y: Mt };
    }
  }
  e.save(), e.__panoTriExpandPx = O, e.globalAlpha = 1;
  for (let Q = 0; Q < C; Q += 1)
    for (let ut = 0; ut < A; ut += 1) {
      const nt = D[Q][ut], Y = D[Q][ut + 1], F = D[Q + 1][ut], rt = D[Q + 1][ut + 1];
      if (!nt || !Y || !F || !rt) continue;
      const mt = { ...$[Q][ut] }, ct = { ...$[Q][ut + 1] }, Z = { ...$[Q + 1][ut] }, U = { ...$[Q + 1][ut + 1] }, at = Math.min(mt.x, ct.x, Z.x, U.x);
      Math.max(mt.x, ct.x, Z.x, U.x) - at > p * 0.5 && [mt, ct, Z, U].forEach((st) => {
        st.x < p * 0.5 && (st.x += p);
      }), ns(e, k, mt, ct, U, nt, Y, rt), ns(e, k, mt, U, Z, nt, rt, F);
    }
  e.__panoTriExpandPx = 0.45, e.restore();
}
function Cf(t, e, n, r, o, c, u = 1) {
  let f = !1;
  t.strokeStyle = c, t.lineWidth = u, t.beginPath();
  for (const m of e) {
    const y = Ph(m, n, r, o);
    if (!y) {
      f = !1;
      continue;
    }
    f ? t.lineTo(y.x, y.y) : (t.moveTo(y.x, y.y), f = !0);
  }
  t.stroke();
}
function Ch(t, e, n, r, o = 1) {
  t.save();
  const c = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const p = [];
    for (let w = -180; w <= 180; w += 15) p.push(zr(w, y));
    Cf(t, p, n, e, r, y === 0 ? u : c, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const p = [];
    for (let w = -89; w <= 89; w += 15) p.push(zr(y, w));
    Cf(t, p, n, e, r, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : c, y % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: zr(0, 0) },
    { name: "Right", dir: zr(90, 0) },
    { name: "Back", dir: zr(180, 0) },
    { name: "Left", dir: zr(-90, 0) }
  ];
  t.fillStyle = "rgba(250, 250, 250, 0.32)";
  const m = Math.max(9, Math.round(11 * o));
  t.font = `500 ${m}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", f.forEach((y) => {
    const p = Ph(y.dir, n, e, r);
    p && t.fillText(y.name, p.x, p.y + 20 * o);
  }), t.restore();
}
function Uy(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function Ah(t) {
  const e = Uy(t);
  e.dragging = !1, e.hqFrames = oy;
}
function is(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function Ih(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function By(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function Gy(t, e, n = 20) {
  var u;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const r = (u = e.getBoundingClientRect) == null ? void 0 : u.call(e);
  if (!r) return !1;
  const o = Number(t.clientX) - Number(r.left || 0), c = Number(t.clientY) - Number(r.top || 0);
  return o >= r.width - n && c >= r.height - n;
}
function yi(t, e) {
  return Gy(t, e) ? !1 : (By(t), !0);
}
function Ky() {
  var n;
  const t = (n = me == null ? void 0 : me.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function Wy(t) {
  var n;
  if (!t) return;
  const e = (n = me == null ? void 0 : me.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function qy(t, e = 360, n = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const r = Ir(t), o = Number((r == null ? void 0 : r[0]) || 0), c = Number((r == null ? void 0 : r[1]) || 0);
  if (!Number.isFinite(o) || !Number.isFinite(c) || o >= e && c >= n) return;
  const u = [Math.max(e, o), Math.max(n, c)];
  try {
    typeof t.setSize == "function" ? t.setSize(u) : t.size = u, t.__panoStandaloneBootSized = !0, Qt(t, "size.bootstrap", { from: [o, c], to: u });
  } catch (f) {
    Qt(t, "size.bootstrap.error", { message: String((f == null ? void 0 : f.message) || f || "unknown") });
  }
}
function Yy(t, e = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = o > 0, !(o <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var c, u;
    t.__panoBootMinHeightTimer = null, (c = t == null ? void 0 : t.__panoDomPreview) != null && c.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, n == null || n(), (u = t.setDirtyCanvas) == null || u.call(t, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Af(t, e = null, n = 0) {
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
      t.__panoUserResized = !0, is(t, 150), e == null || e(), Eh(t, 180, e);
    }
  };
}
function Eh(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    t.__panoResizeSettleTimer = null, n == null || n(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function Si(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function Xy(t, e = {}) {
  var Rt;
  const n = e.__allowStandalone === !0, r = ly(t);
  if (r && !n) {
    Qt(t, "attach.skip", { reason: "standalone_preview_node", route: "blocked_legacy_path", nodeType: dh(t) });
    return;
  }
  r && qy(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", Qa.register(t);
  const o = t.__panoPreviewMode === "stickers", c = e.__noLegacyFallback === !0, u = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null;
  const f = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
  o || Mo.unregister(t);
  const m = String(e.__panoForcedPath || "").trim(), y = o ? hh(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: qr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  o && (m === "dom" || m === "legacy_draw") && (y.chosenPath = m, y.reason = "controller_target_backend");
  const p = o ? y.chosenPath : "dom", w = y.signature || qr(t), M = Number(t.__panoRebindGeneration || 0), k = Vc(t);
  if (Qt(t, "attach.begin", {
    nodeId: (t == null ? void 0 : t.id) ?? null,
    nodeType: f,
    mode: t.__panoPreviewMode,
    legacyFrontend: p === "legacy_draw",
    activeBackend: k,
    targetBackend: p,
    chosenPath: p,
    pathReason: y.reason,
    signature: w,
    generation: M,
    frontendVersionRaw: y.frontendVersionRaw,
    hasDomWidget: typeof t.addDOMWidget == "function",
    size: Ir(t)
  }), t.__panoFrontendSig = w, t.__panoStickersPath = p, o && Mo.register(t), o && p === "legacy_draw") {
    if (c) return;
    Oi(t, { keepMonitor: !0 }), ma(t);
    return;
  }
  if ((Rt = t.__panoDomPreview) != null && Rt.widget) return;
  if (t.__panoLegacyPreviewHooked && Oi(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    o && !c && ma(t);
    return;
  }
  const A = e.noPreview === !0, C = o || A ? 0 : 56, O = document.createElement("div");
  if (sy(), O.className = "pano-node-preview-dom", O.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), A && O.classList.add("pano-node-preview--no-preview"), O.setAttribute("data-capture-wheel", "true"), O.setAttribute("tabindex", "-1"), O.style.cssText = [
    "width:100%",
    A ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), A) {
    const J = t.addDOMWidget($c(), "preview", O, Af(t, null));
    Si(t), t.__panoDomPreview = { widget: J, root: O, requestDraw: () => {
    } }, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom";
    return;
  }
  const D = document.createElement("div");
  D.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const $ = document.createElement("canvas");
  $.style.cssText = [
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
  const j = document.createElement("div");
  j.style.cssText = [
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
  ].join(";"), j.textContent = "Open editor and add frame", D.appendChild($), D.appendChild(j), O.appendChild(D), fh(t, 120, 120), Si(t);
  let S = null;
  try {
    Yy(t, C, () => {
      var J, Mt;
      return (Mt = (J = t.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : Mt.call(J);
    }), S = t.addDOMWidget(
      $c(),
      "preview",
      O,
      Af(t, () => {
        var J, Mt;
        return (Mt = (J = t.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : Mt.call(J);
      }, C)
    );
  } catch {
    o && ma(t);
    return;
  }
  const q = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, Q = () => {
    q.needsDraw = !0, q.raf || (q.raf = requestAnimationFrame(Y));
  }, ut = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    is(t, 150), Q();
  }) : null;
  ut == null || ut.observe(D);
  const nt = () => {
    if (!o || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const J = 3, Mt = (Bt) => {
      requestAnimationFrame(() => {
        var H;
        const ye = !!(O != null && O.isConnected && (D != null && D.isConnected) && ($ != null && $.isConnected) && Number(D.clientHeight || 0) > 0 && Number($.clientHeight || 0) > 0);
        if (!ye && Bt < J) {
          Mt(Bt + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, Qt(t, "probe.result", {
          mode: t.__panoPreviewMode,
          result: ye ? "dom_ok" : "dom_fail",
          wrapH: Number((D == null ? void 0 : D.clientHeight) || 0),
          canvasH: Number(($ == null ? void 0 : $.clientHeight) || 0),
          attempt: Bt
        }), !ye) {
          if (c) {
            Qt(t, "path.keep", {
              route: "dom",
              reason: "probe_dom_not_ready",
              mode: t.__panoPreviewMode,
              wrapH: Number((D == null ? void 0 : D.clientHeight) || 0),
              canvasH: Number(($ == null ? void 0 : $.clientHeight) || 0)
            });
            return;
          }
          Qt(t, "path.switch", {
            from: "dom",
            to: "legacy_draw",
            reason: "probe_dom_fail_fallback_legacy"
          }), Oi(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", ma(t), (H = t.setDirtyCanvas) == null || H.call(t, !0, !0);
        }
      });
    };
    Mt(1);
  }, Y = (J) => {
    var Bt, ye, H;
    q.raf = 0;
    const Mt = F.stepInertia(J);
    (q.needsDraw || Mt) && (q.needsDraw = !1, (Bt = t.flags) != null && Bt.collapsed || jy(t, $, null, F), (ye = t.setDirtyCanvas) == null || ye.call(t, !0, !1)), (Mt || q.needsDraw) && (q.raf = requestAnimationFrame(Y)), uh() && (!t.__panoDebugLastTs || J - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = J, Qt(t, "dom.snapshot", {
      mode: t.__panoPreviewMode,
      nodeSize: Ir(t),
      root: lo(O),
      wrap: lo(D),
      canvas: lo($),
      rootParent: lo(O.parentElement),
      rootGrandParent: lo((H = O.parentElement) == null ? void 0 : H.parentElement),
      canvasIntrinsic: { width: Number($.width || 0), height: Number($.height || 0) }
    }));
  }, F = ws({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (J) => {
      t.__panoPreviewView = J;
    },
    onInteraction: () => {
      Q();
    }
  });
  $.addEventListener("pointerdown", (J) => {
    var Mt, Bt;
    yi(J, D) && u && J.button === 0 && ((Mt = O.focus) == null || Mt.call(O), (Bt = $.setPointerCapture) == null || Bt.call($, J.pointerId), $.style.cursor = "grabbing", F.startDrag(J.clientX, J.clientY, J.pointerId));
  }), $.addEventListener("pointermove", (J) => {
    !u || !F.state.drag.active || (yi(J, D), F.moveDrag(J.clientX, J.clientY, "pano"));
  });
  const rt = (J) => {
    var Mt;
    !u || !F.state.drag.active || (yi(J, D), (Mt = $.releasePointerCapture) == null || Mt.call($, J.pointerId), $.style.cursor = "grab", F.endDrag(), Ah(t), Q());
  };
  $.addEventListener("pointerup", rt), $.addEventListener("pointercancel", rt), $.addEventListener("pointerleave", (J) => {
    F.state.drag.active && rt(J);
  });
  const mt = (J) => {
    var Bt, ye, H;
    if (Qt(t, "event", { kind: "wheel", via: "stickers", interactiveView: u }), !yi(J, D) || !u) return;
    const Mt = Ky();
    F.applyWheelEvent(J) && Q(), (Bt = J.preventDefault) == null || Bt.call(J), (ye = J.stopPropagation) == null || ye.call(J), (H = J.stopImmediatePropagation) == null || H.call(J), requestAnimationFrame(() => {
      var Pt, St;
      Wy(Mt), (St = (Pt = me == null ? void 0 : me.canvas) == null ? void 0 : Pt.setDirty) == null || St.call(Pt, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((J) => {
    D.addEventListener(J, mt, { passive: !1, capture: !0 }), $.addEventListener(J, mt, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((J) => {
    $.addEventListener(J, (Mt) => yi(Mt, D)), D.addEventListener(J, (Mt) => yi(Mt, D));
  });
  const ct = Za(t, "state_json");
  if (ct && !ct.__panoPreviewPatchedCb) {
    ct.__panoPreviewPatchedCb = !0;
    const J = ct.callback;
    ct.callback = (Mt) => {
      const Bt = J ? J(Mt) : void 0;
      return Q(), Bt;
    };
  }
  const Z = Za(t, "bg_color");
  if (Z && !Z.__panoPreviewPatchedCb) {
    Z.__panoPreviewPatchedCb = !0;
    const J = Z.callback;
    Z.callback = (Mt) => {
      const Bt = J ? J(Mt) : void 0;
      return Q(), Bt;
    };
  }
  const U = t.onRemoved, at = t.onResize, it = t.onExecuted;
  t.onExecuted = function(J) {
    wy(t, J), zc(t), Si(t), Q();
    const Mt = it ? it.apply(this, arguments) : void 0;
    return Si(t), Mt;
  };
  const st = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return zc(t), Si(t), Q(), st ? st.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var Mt;
    const J = at ? at.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, is(this, 150), Q(), (Mt = this.setDirtyCanvas) == null || Mt.call(this, !0, !1), J;
  }, t.onRemoved = function() {
    return wt(), Mo.unregister(this), Qa.unregister(this), U ? U.apply(this, arguments) : void 0;
  };
  const wt = () => {
    var J;
    q.raf && cancelAnimationFrame(q.raf), (J = ut == null ? void 0 : ut.disconnect) == null || J.call(ut), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = at, t.onExecuted = it, t.onConnectionsChange = st, t.onRemoved = U;
  };
  t.__panoDomRestore = wt, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: S, root: O, canvas: $, requestDraw: Q, state: q, emptyHintEl: j }, nt(), Q();
}
function If(t, e = {}) {
  ph(t).attach({
    ...e,
    mode: "cutout"
  });
}
const os = Math.PI / 180;
function Qr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Ef(t, e) {
  return Qr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function ya(t, e) {
  return Qr(t.x * e, t.y * e, t.z * e);
}
function Tf(t, e) {
  return Qr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function va(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Qr(t.x / e, t.y / e, t.z / e);
}
function Zy(t, e) {
  const n = t * os, r = e * os, o = Math.cos(r);
  return Qr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Jy(t, e, n = 0) {
  const r = Zy(t, e), o = Qr(0, 1, 0);
  let c = Tf(o, r);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Qr(1, 0, 0)), c = va(c);
  const u = va(Tf(r, c)), f = n * os, m = Math.cos(f), y = Math.sin(f), p = Ef(ya(c, m), ya(u, y)), w = Ef(ya(c, -y), ya(u, m));
  return { fwd: r, right: va(p), up: va(w) };
}
const ba = 140, Qy = 180, Lf = 40, vc = 10;
function Df(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":");
  return { full: e, tail: String(n[n.length - 1] || "").trim() };
}
function Rf(t, e) {
  const n = Df(t), r = Df(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Of(t) {
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
  return typeof ((c = Je) == null ? void 0 : c.apiURL) == "function" ? Je.apiURL(o) : o;
}
function Po(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Po(t[0]);
    const e = typeof t[0] == "string" ? String(t[0] || "").trim() : "";
    if (e)
      return Of({
        filename: e,
        subfolder: String(t[1] || "").trim(),
        type: String(t[2] || "output").trim() || "output"
      });
    for (const n of t) {
      const r = Po(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Of(t);
}
function Ff(t) {
  var o;
  const e = (o = dn) == null ? void 0 : o.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  if (e instanceof Map) {
    for (const c of e.keys())
      if (Rf(c, n)) return e.get(c);
  } else
    for (const c of Object.keys(e))
      if (Rf(c, n)) return e[c];
  return null;
}
function tv(t, e = "erp_image") {
  var A, C, O, D, $, j, S, q, Q, ut, nt, Y;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let r = null;
  const o = n.find((F) => String((F == null ? void 0 : F.name) || "") === String(e));
  if ((o == null ? void 0 : o.link) != null && (r = o.link), r == null) {
    const F = n.find((rt) => String((rt == null ? void 0 : rt.type) || "").toUpperCase() === "IMAGE" && (rt == null ? void 0 : rt.link) != null);
    (F == null ? void 0 : F.link) != null && (r = F.link);
  }
  if (r == null) return "";
  const c = ((C = (A = t == null ? void 0 : t.graph) == null ? void 0 : A.links) == null ? void 0 : C[r]) || (($ = (D = (O = dn) == null ? void 0 : O.graph) == null ? void 0 : D.links) == null ? void 0 : $[r]);
  if (!c) return "";
  const u = Number(c.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (q = (S = (j = dn) == null ? void 0 : j.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : q.call(S, u), m = Ff(u), y = Ff(t == null ? void 0 : t.id), p = [
    m == null ? void 0 : m.images,
    (Q = m == null ? void 0 : m.ui) == null ? void 0 : Q.pano_input_images,
    m == null ? void 0 : m.pano_input_images,
    (ut = y == null ? void 0 : y.ui) == null ? void 0 : ut.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const F of p)
    if (Array.isArray(F))
      for (const rt of F) {
        const mt = Po(rt);
        if (mt) return mt;
      }
  let w = [];
  try {
    w = typeof ((nt = dn) == null ? void 0 : nt.getNodeImageUrls) == "function" ? dn.getNodeImageUrls(f) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length > 0)
    for (const F of w) {
      const rt = Po(F);
      if (rt) return rt;
    }
  if (f) {
    const F = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const rt of F) {
      const mt = Po(rt);
      if (mt) return mt;
    }
  }
  const M = (Y = f == null ? void 0 : f.widgets) == null ? void 0 : Y.find((F) => String((F == null ? void 0 : F.name) || "").toLowerCase() === "image"), k = String((M == null ? void 0 : M.value) || "").trim();
  return k ? Je.apiURL(`/view?filename=${encodeURIComponent(k)}&type=input&subfolder=`) : "";
}
function $f(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function Vf(t, e, n, r, o, c) {
  if (e.clearRect(0, 0, n, r), e.fillStyle = "#070707", e.fillRect(0, 0, n, r), !c || !c.complete || !(c.naturalWidth || c.width) || n <= 1 || r <= 1) {
    $f(e, n, r);
    return;
  }
  const u = Jy(Number(o.yaw || 0), Number(o.pitch || 0), 0), f = Math.tan(Number(o.fov || 100) * os * 0.5);
  ji({
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
    scene: xs(null, {}),
    view: iy(o)
  }) || (rs(t, e, { x: 0, y: 0, w: n, h: r }, u, f, c, Vi), $f(e, n, r));
}
function Hf(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class ev {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = ws({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Fe(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: z(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: z(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
        `min-height:${ba}px`,
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
          return ba;
        },
        getHeight() {
          return ba;
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
            minHeight: Math.max(ba, Number(c.minHeight || 0)),
            minWidth: Math.max(Qy, Number(c.minWidth || 0))
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
      return Hf(o.x, o.y, c) ? (e.legacyDragPointer = !0, e.controller.startDrag(o.x - c.x, o.y - c.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var y, p, w, M, k, A;
      const c = Va(this, n, r, o), u = e.getLegacyPreviewRect();
      if (!c || !Hf(c.x, c.y, u))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof r == "number" ? r : 0));
      Number(((y = e.view) == null ? void 0 : y.fov) || 100);
      const m = e.controller.applyWheel(Math.sign(f));
      return Number(((p = e.view) == null ? void 0 : p.fov) || 100), m && ((w = this.setDirtyCanvas) == null || w.call(this, !0, !1)), (M = n == null ? void 0 : n.preventDefault) == null || M.call(n), (k = n == null ? void 0 : n.stopPropagation) == null || k.call(n), (A = n == null ? void 0 : n.stopImmediatePropagation) == null || A.call(n), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, c, u;
    const e = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - vc * 2), n = Math.max(60, Number(((u = (c = this.node) == null ? void 0 : c.size) == null ? void 0 : u[1]) || 0) - Lf - vc);
    return { x: vc, y: Lf, w: e, h: n };
  }
  drawLegacy(e) {
    var r, o;
    if (!e || (o = (r = this.node) == null ? void 0 : r.flags) != null && o.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (e.save(), e.translate(n.x, n.y), Vf(this.node, e, n.w, n.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, n.w, n.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), e.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const e = this.root.getBoundingClientRect(), n = 1, r = Math.max(1, Math.round(e.width * n)), o = Math.max(1, Math.round(e.height * n));
    (this.canvas.width !== r || this.canvas.height !== o) && (this.canvas.width = r, this.canvas.height = o, this.requestDraw());
  }
  refreshImage() {
    const e = tv(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (Vf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (c = (o = this.node).setDirtyCanvas) == null || c.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
function nv(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const n = new ev(t, e);
  t.__panoPreviewNodeRuntime = n, n.attach();
}
function rv(t, e, n) {
  if (!(t != null && t.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(e)}`;
  if (t[r]) return;
  t[r] = !0;
  const o = `[PanoramaPreview:${String(e)}]`, c = t.prototype.onNodeCreated;
  t.prototype.onNodeCreated = function() {
    const m = c ? c.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch (y) {
      try {
        console.warn(o, "onNodeCreated wiring skipped:", y);
      } catch {
      }
    }
    return m;
  };
  const u = t.prototype.onConfigure;
  t.prototype.onConfigure = function() {
    const m = u ? u.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch (y) {
      try {
        console.warn(o, "onConfigure wiring skipped:", y);
      } catch {
      }
    }
    return m;
  };
  const f = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const m = f ? f.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch (y) {
      try {
        console.warn(o, "onAdded wiring skipped:", y);
      } catch {
      }
    }
    return m;
  };
}
function Th(t) {
  return !!(t != null && t.prototype);
}
function Bc(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function iv(t, e = {}) {
  Th(t) || nv(t, {
    ...e,
    onOpen: Bc(t, e.onOpen)
  });
}
function ov(t, e = {}) {
  if (!Th(t)) {
    If(t, {
      ...e,
      onOpen: Bc(t, e.onOpen)
    });
    return;
  }
  rv(t, "cutout_preview", (n) => {
    If(n, {
      ...e,
      onOpen: Bc(n, e.onOpen)
    });
  });
}
function av(t = {}) {
  const {
    owner: e = null,
    ctx: n = null,
    rect: r = null,
    shot: o = null,
    bgImage: c = null,
    cachePrefix: u = "cutout_preview",
    quality: f = "balanced",
    drawDisplayList: m = null
  } = t;
  if (!n || !r || !o) return !1;
  const y = ki(o), p = typeof m == "function" ? !!m(n, r, y, c, String(u || "cutout_preview")) : !1, w = !p && !!c && !!ey(
    n,
    e,
    c,
    r,
    o,
    String(f || "balanced")
  );
  return !!p || !!w;
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
}, er = "pen";
function zf(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function sv(t = 80, e = null, n = 8) {
  const r = [];
  let o = -1;
  const c = Math.max(1, Number(t || 80)), u = Math.max(1, Number(n || 8));
  function f(y) {
    if (r.splice(0, r.length), o = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((w) => {
      r.push(String(w || ""));
    }), !r.length)) return;
    const p = Number(y.index);
    Number.isInteger(p) ? p === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, p)) : o = r.length - 1;
  }
  function m(y) {
    r[o] !== y && (r.splice(o + 1), r.push(y), r.length > c && r.shift(), o = r.length - 1);
  }
  return f(e), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(y) {
      m(String(y || ""));
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
      const y = r.length, p = Math.max(0, y - u), w = o >= 0 ? Math.min(p, o) : p, M = r.slice(w), k = o < 0 ? -1 : Math.max(-1, Math.min(M.length - 1, o - w));
      return {
        version: 1,
        entries: M,
        index: k
      };
    },
    hydrate: f
  };
}
function ae(t, e = null) {
  const n = Number(t);
  return Number.isFinite(n) ? n : e;
}
function cv() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function lv(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const c = ae(r.z_index ?? r.zIndex, e.length);
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
function uv(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function fv(t, e) {
  if (!t || typeof t != "object" || !e) return null;
  const n = ae(t.t, 0), r = ae(t.widthScale, null), o = ae(t.pressureLike, null);
  if (e.kind === "ERP_GLOBAL") {
    const c = ae(t.u, null), u = ae(t.v, null);
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
    const c = ae(t.u, null), u = ae(t.v, null);
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
function _a(t, e, n = 1) {
  if (!Array.isArray(t)) return null;
  const r = [];
  for (const o of t) {
    const c = fv(o, e);
    if (!c) return null;
    r.push(c);
  }
  return r.length >= n ? r : null;
}
function dv(t, e, n, r) {
  if (!t || typeof t != "object") return null;
  const o = String(t.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const m = _a(t.points, e, 3);
    return m ? { geometryKind: o, points: m } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const c = _a(t.points, e, 1);
  if (!c) return null;
  const u = _a(t.rawPoints, e, 1), f = _a(t.processedPoints, e, 1);
  return {
    geometryKind: o,
    points: c,
    rawPoints: u || c.map((m) => ({ ...m })),
    processedPoints: f || c.map((m) => ({ ...m }))
  };
}
function hv(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = uv(t.targetSpace);
  if (!n) return null;
  const r = String(t.toolKind || "").trim(), o = dv(t.geometry, n, r, e === "paint");
  if (!o) return null;
  const c = ae(t.size, null), u = ae(t.opacity, null);
  if (c == null || u == null) return null;
  const f = String(t.id || "").trim(), m = String(t.actionGroupId || "").trim();
  if (!f || !m) return null;
  const y = ae(t.radiusValue, null), p = String(t.radiusModel || "").trim() || null;
  let w = null;
  if (e === "paint") {
    const M = t.color;
    if (!M || typeof M != "object") return null;
    w = {
      r: Math.max(0, Math.min(1, ae(M.r, 0))),
      g: Math.max(0, Math.min(1, ae(M.g, 0))),
      b: Math.max(0, Math.min(1, ae(M.b, 0))),
      a: Math.max(0, Math.min(1, ae(M.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: m,
    targetSpace: n,
    layerKind: e,
    toolKind: r,
    brushPresetId: String(t.brushPresetId || "").trim() || null,
    size: Math.max(0, c),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: ae(t.hardness, null),
    flow: ae(t.flow, null),
    spacing: ae(t.spacing, null),
    createdAt: Math.trunc(ae(t.createdAt, 0)),
    color: w,
    radiusModel: p,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: o
  };
}
function jf(t, e) {
  const n = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return n;
  for (const r of t.strokes) {
    const o = hv(r, e);
    o && n.strokes.push(o);
  }
  return n;
}
function pv(t) {
  if (!t || typeof t != "object") return null;
  const e = ae(t.u0, null), n = ae(t.v0, null), r = ae(t.u1, null), o = ae(t.v1, null);
  if (e == null || n == null || r == null || o == null) return null;
  const c = (f) => Math.max(0, Math.min(1, f)), u = { u0: c(e), v0: c(n), u1: c(r), v1: c(o) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function gv(t) {
  const e = t || {};
  return {
    du: ae(e.du, 0) ?? 0,
    dv: ae(e.dv, 0) ?? 0,
    rot_deg: ae(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, ae(e.scale, 1) ?? 1)
  };
}
function mv(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const n = String(t.id || "").trim();
  if (!n) return null;
  const r = String(t.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(t.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const c = pv(t.bbox);
  return c ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, ae(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: c,
    rasterDataUrl: o,
    transform: gv(t.transform)
  } : null;
}
function yv(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    const o = mv(r, e.length);
    !o || n.has(o.id) || (n.add(o.id), e.push(o));
  }
  return e;
}
function ko(t) {
  const e = cv();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: lv(t.groups),
    paint: jf(t.paint, "paint"),
    mask: jf(t.mask, "mask"),
    raster_objects: yv(t.raster_objects)
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
}, as = {
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
    const e = t, n = Di(() => {
      const r = { ...e.attrs };
      return e.tag === "button" && r.type == null && (r.type = e.type), e.label && (r["aria-label"] = e.label), e.tip && (r["data-tip"] = e.tip), e.pressed != null && (r["aria-pressed"] = e.pressed), r;
    });
    return (r, o) => (xe(), zi(t0(t.tag), eh({
      class: ["pano-btn pano-btn-icon", t.extraClass]
    }, n.value, { innerHTML: t.icon }), null, 16, ["class", "innerHTML"]));
  }
}, vv = { class: "pano-floating-right" }, bv = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (xe(), $e("div", vv, [
      n[0] || (n[0] = _e("span", {
        class: "pano-fov-value",
        "data-fov-value": "",
        "aria-label": "Field of view"
      }, "100°", -1)),
      (xe(!0), $e(ze, null, Ti(t.buttons, (r) => (xe(), zi(as, {
        key: r.action,
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { "data-action": r.action }
      }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, _v = {
  class: "pano-paint-dock is-hidden",
  "data-paint-dock": ""
}, wv = ["data-paint-pane"], xv = {
  key: 0,
  class: "pano-paint-color-float",
  "data-paint-color-row": "",
  hidden: ""
}, Sv = ["data-paint-color-swatch", "aria-label"], Nv = ["data-paint-footer"], Mv = ["data-paint-group"], Pv = ["hidden"], kv = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] }
  },
  setup(t) {
    function e(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    return (n, r) => (xe(), $e("div", _v, [
      (xe(!0), $e(ze, null, Ti(t.panes, (o) => (xe(), $e("div", {
        key: o.key,
        class: "pano-paint-pane",
        "data-paint-pane": o.key
      }, [
        o.showColorFloat ? (xe(), $e("div", xv, [
          (xe(!0), $e(ze, null, Ti(t.paintSwatches, (c) => (xe(), $e("button", {
            key: c.id,
            class: "pano-paint-color-dot",
            type: "button",
            "data-paint-color-swatch": c.id,
            "aria-label": c.label,
            style: ps(e(c))
          }, null, 12, Sv))), 128)),
          r[0] || (r[0] = T0('<button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color"></button><div class="pano-paint-color-pop" data-paint-color-pop hidden><div class="pano-paint-color-pop-head"><span class="pano-paint-color-preview" data-paint-color-preview></span><span class="pano-paint-color-pop-label">Custom Color</span></div><div class="pano-paint-color-field"><div class="pano-paint-sv-panel" data-paint-color-sv><div class="pano-paint-sv-cursor" data-paint-color-sv-cursor></div></div><div class="pano-paint-hue-strip" data-paint-hue-strip><div class="pano-paint-hue-handle" data-paint-hue-handle></div></div></div><label class="pano-paint-color-field"><span>Opacity</span><div class="pano-paint-alpha-wrap"><input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider><span data-paint-alpha-value>100%</span></div></label><div class="pano-paint-color-history" data-paint-color-history-wrap><div class="pano-paint-color-history-list" data-paint-color-history></div></div></div>', 2))
        ])) : La("", !0),
        _e("div", {
          class: "pano-paint-footer",
          "data-paint-footer": o.footer
        }, [
          _e("div", {
            class: "pano-paint-footer-group",
            "data-paint-group": o.group
          }, [
            (xe(!0), $e(ze, null, Ti(o.tools, (c) => (xe(), zi(as, {
              key: `${o.key}-${c.key}`,
              icon: c.icon,
              label: c.label,
              tip: c.tip,
              attrs: { [c.attr]: c.key }
            }, null, 8, ["icon", "label", "tip", "attrs"]))), 128))
          ], 8, Mv),
          r[1] || (r[1] = _e("div", {
            class: "pano-paint-size-row",
            "data-paint-size-row": "",
            hidden: ""
          }, [
            _e("input", {
              class: "pano-paint-size-slider",
              "data-paint-size-slider": "",
              type: "range",
              min: "1",
              max: "120",
              step: "1",
              value: "10"
            }),
            _e("span", {
              class: "pano-paint-size-value",
              "data-paint-size-value": ""
            }, "10")
          ], -1)),
          _e("div", {
            class: "pano-paint-clear-row",
            "data-paint-clear-row": "",
            hidden: o.clearHidden
          }, [
            Qe(as, {
              icon: al(ce).clear,
              label: o.clearLabel,
              tip: o.clearTip,
              "extra-class": "pano-paint-layer-clear",
              attrs: { "data-paint-layer-clear-current": o.clearTarget }
            }, null, 8, ["icon", "label", "tip", "attrs"])
          ], 8, Pv)
        ], 8, Nv)
      ], 8, wv))), 128))
    ]));
  }
}, Cv = {
  class: "pano-side",
  "data-side": ""
}, Av = { class: "pano-side-head" }, Iv = ["innerHTML"], Ev = {
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
    const r = Di(() => `<span class="pano-side-title-icon" aria-hidden="true">${ce.globe}</span><span>${n(e.nodeTitle)}</span>`);
    return (o, c) => (xe(), $e("div", Cv, [
      _e("div", Av, [
        _e("div", {
          class: "pano-side-title",
          innerHTML: r.value
        }, null, 8, Iv),
        c[0] || (c[0] = _e("div", { class: "pano-side-actions" }, null, -1))
      ]),
      c[1] || (c[1] = _e("div", { class: "pano-divider" }, null, -1))
    ]));
  }
}, Tv = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, Lv = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (xe(), $e("div", Tv, [
      (xe(!0), $e(ze, null, Ti(t.buttons, (r) => (xe(), zi(as, {
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
}, Dv = { class: "pano-floating-top" }, Rv = ["data-view-count"], Ov = ["data-view", "aria-pressed", "aria-label"], Fv = ["innerHTML"], $v = { class: "label" }, Vv = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (xe(), $e("div", Dv, [
      _e("div", {
        class: "pano-view-toggle",
        "data-selected": "pano",
        "data-view-count": String(t.buttons.length)
      }, [
        (xe(!0), $e(ze, null, Ti(t.buttons, (r) => (xe(), $e("button", {
          key: r.key,
          class: gs(["pano-view-btn", r.extraClass]),
          "data-view": r.key,
          "aria-pressed": r.pressed,
          "aria-label": r.label
        }, [
          _e("span", {
            innerHTML: r.icon
          }, null, 8, Fv),
          _e("span", $v, rd(r.label), 1)
        ], 10, Ov))), 128))
      ], 8, Rv)
    ]));
  }
};
function Lh(t = "stickers") {
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
const Hv = ["aria-label"], zv = { class: "pano-stage-wrap" }, jv = ["innerHTML"], Uv = {
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
    let o = "";
    const c = Di(() => n.readOnly === !0), u = Di(() => n.shellPreset || Lh(n.type)), f = Di(() => {
      var k;
      const M = Array.isArray((k = u.value) == null ? void 0 : k.floatingButtons) ? u.value.floatingButtons.slice() : [];
      return c.value && M.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ce.fullscreen
      }), M;
    });
    function m(M) {
      M.key === "Escape" && r("close");
    }
    function y() {
      o = document.body.style.overflow, document.body.style.overflow = "hidden";
    }
    function p() {
      document.body.style.overflow = o;
    }
    function w(M) {
      document.removeEventListener("keydown", m), M ? (y(), document.addEventListener("keydown", m)) : p();
    }
    return Ed(() => {
      w(n.open);
    }), Td(() => {
      p(), document.removeEventListener("keydown", m);
    }), Ia(() => n.open, (M) => {
      w(M);
    }), (M, k) => t.open ? (xe(), $e("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: k[0] || (k[0] = h1((A) => r("close"), ["self"]))
    }, [
      _e("section", {
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": t.nodeTitle
      }, [
        _e("div", zv, [
          k[1] || (k[1] = _e("canvas", {
            class: "pano-stage",
            width: "1600",
            height: "800"
          }, null, -1)),
          k[2] || (k[2] = _e("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            _e("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          c.value ? La("", !0) : (xe(), $e(ze, { key: 0 }, [
            Qe(Lv, {
              buttons: u.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Qe(kv, {
              "paint-swatches": t.paintSwatches,
              panes: u.value.paintPanes || []
            }, null, 8, ["paint-swatches", "panes"])
          ], 64)),
          Qe(Vv, {
            buttons: u.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Qe(bv, { buttons: f.value }, null, 8, ["buttons"]),
          k[3] || (k[3] = _e("div", {
            class: "pano-selection-menu",
            "data-selection-menu": ""
          }, null, -1)),
          _e("button", {
            class: "pano-btn pano-btn-icon pano-output-preview-toggle",
            "data-action": "toggle-output-preview-size",
            "aria-label": "Expand Preview",
            "data-tip": "Expand preview",
            style: { display: "none" },
            innerHTML: al(ce).fullscreen
          }, null, 8, jv),
          k[4] || (k[4] = _e("div", {
            class: "pano-tooltip",
            "data-tooltip": ""
          }, null, -1))
        ]),
        t.hideSidebar ? La("", !0) : (xe(), zi(Ev, {
          key: 0,
          "node-title": t.nodeTitle
        }, null, 8, ["node-title"]))
      ], 8, Hv)
    ])) : La("", !0);
  }
}, Gc = "state_json", Vr = "sticker_image_1", bc = "external_image", _c = "pano_sticker_input_images", Ha = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Oe = Math.PI / 180, Ur = 180 / Math.PI, ss = 24, Bv = 4, Gv = 4, yo = /* @__PURE__ */ new Map(), Kc = /* @__PURE__ */ new Map(), Lt = {
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
function Kv(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function Wv(t) {
  return 1 - Math.pow(1 - t, 3);
}
function qv(t) {
  return t * t * t;
}
function Gn(t, e, n) {
  return { x: t, y: e, z: n };
}
function wa(t, e) {
  return Gn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function xa(t, e) {
  return Gn(t.x * e, t.y * e, t.z * e);
}
function xn(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Sa(t, e) {
  return Gn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function vi(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Gn(t.x / e, t.y / e, t.z / e);
}
function $n(t, e) {
  const n = t * Oe, r = e * Oe, o = Math.cos(r);
  return Gn(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Na(t) {
  return {
    yaw: Fe(Math.atan2(t.x, t.z) * Ur),
    pitch: z(Math.asin(z(t.y, -1, 1)) * Ur, -90, 90)
  };
}
function nr(t, e) {
  let n = !1;
  for (let r = 0, o = e.length - 1; r < e.length; o = r++) {
    const c = e[r].x, u = e[r].y, f = e[o].x, m = e[o].y;
    u > t.y != m > t.y && t.x < (f - c) * (t.y - u) / (m - u || 1e-6) + c && (n = !n);
  }
  return n;
}
function jr(t, e) {
  const n = t.x - e.x, r = t.y - e.y;
  return n * n + r * r;
}
function wc(t, e, n) {
  const r = Number(n.x || 0) - Number(e.x || 0), o = Number(n.y || 0) - Number(e.y || 0), c = Number(t.x || 0) - Number(e.x || 0), u = Number(t.y || 0) - Number(e.y || 0), f = r * r + o * o;
  if (f <= 1e-6) return jr(t, e);
  const m = z((c * r + u * o) / f, 0, 1), y = Number(e.x || 0) + r * m, p = Number(e.y || 0) + o * m, w = Number(t.x || 0) - y, M = Number(t.y || 0) - p;
  return w * w + M * M;
}
function Sn(t, e, n) {
  return t + (e - t) * n;
}
function Nn(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(z(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(z(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(z(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${z(n, 0, 1)})`;
}
function Yv(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let Ma = { fillStyle: "", url: "" };
function Xv(t, e, n) {
  if (Ma.url && Ma.fillStyle === String(t || ""))
    return Ma.url;
  const r = Yv(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ss}" height="${ss}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ma = { fillStyle: String(t || ""), url: r }, r;
}
function za(t, e, n = 0.015) {
  return !t || !e ? !1 : Math.abs(Number(t.r ?? 0) - Number(e.r ?? 0)) <= n && Math.abs(Number(t.g ?? 0) - Number(e.g ?? 0)) <= n && Math.abs(Number(t.b ?? 0) - Number(e.b ?? 0)) <= n && Math.abs(Number(t.a ?? 1) - Number(e.a ?? 1)) <= n;
}
function fn(t) {
  return {
    r: z(Number((t == null ? void 0 : t.r) ?? 0), 0, 1),
    g: z(Number((t == null ? void 0 : t.g) ?? 0), 0, 1),
    b: z(Number((t == null ? void 0 : t.b) ?? 0), 0, 1),
    a: z(Number((t == null ? void 0 : t.a) ?? 1), 0, 1)
  };
}
function an(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function Zv(t) {
  return Ha.some((e) => za(t, e.color));
}
function xc(t, e, n) {
  const r = (Number(t) % 1 + 1) % 1, o = z(Number(e), 0, 1), c = z(Number(n), 0, 1);
  if (o <= 1e-6) return { r: c, g: c, b: c };
  const u = Math.floor(r * 6), f = r * 6 - u, m = c * (1 - o), y = c * (1 - f * o), p = c * (1 - (1 - f) * o);
  switch (u % 6) {
    case 0:
      return { r: c, g: p, b: m };
    case 1:
      return { r: y, g: c, b: m };
    case 2:
      return { r: m, g: c, b: p };
    case 3:
      return { r: m, g: y, b: c };
    case 4:
      return { r: p, g: m, b: c };
    default:
      return { r: c, g: m, b: y };
  }
}
function fo(t) {
  const e = z(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), n = z(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), r = z(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), o = Math.max(e, n, r), c = Math.min(e, n, r), u = o - c;
  let f = 0;
  u > 1e-6 && (o === e ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : o === n ? f = ((r - e) / u + 2) / 6 : f = ((e - n) / u + 4) / 6);
  const m = o <= 1e-6 ? 0 : u / o;
  return { h: f, s: m, v: o };
}
function Sc(t) {
  const e = Number(t);
  return Number.isFinite(e) ? Number(e.toFixed(3)).toString() : "0";
}
function Uf(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : Number(e);
}
function Dh(t, e) {
  const n = Uf(t, 1), r = Uf(e, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, c = Math.max(1, Math.round(n * o)), u = Math.max(1, Math.round(r * o)), f = (w, M) => M ? f(M, w % M) : w, m = f(c, u) || 1, y = Math.max(1, Math.round(c / m)), p = Math.max(1, Math.round(u / m));
  return `${y}:${p}`;
}
function Wc(t) {
  const e = z(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * Oe, n = z(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * Oe;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Jv(t) {
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
function Br(t) {
  const e = Wc(t);
  return Jv(e) || Dh(e, 1);
}
function Qv(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = Br(e), e;
}
function bi(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : Br(t);
}
function tb() {
  if (document.getElementById("pano-suite-style-link")) return;
  const t = document.createElement("link");
  t.id = "pano-suite-style-link", t.rel = "stylesheet", t.href = new URL("./pano_editor.css", import.meta.url).toString(), document.head.appendChild(t);
}
const Rh = "pano_suite.ui_settings.v1", Oh = "pano_suite.node_grid_visibility.v1";
let Ni = null, Vn = null, Pa = { text: null, parsed: null };
function Co(t) {
  const e = t && typeof t == "object" ? t : {}, n = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function eb() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Rh)) || "").trim();
    if (!e) return Ni ? Co(Ni) : null;
    const n = JSON.parse(e), r = Co(n);
    return Ni = r, r;
  } catch {
    return Ni ? Co(Ni) : null;
  }
}
function nb(t) {
  var n;
  const e = Co(t);
  Ni = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Rh, JSON.stringify(e));
  } catch {
  }
  return e;
}
function Fh() {
  var t;
  if (Vn && typeof Vn == "object")
    return Vn;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Oh)) || "").trim();
    if (!e)
      return Vn = {}, Vn;
    const n = JSON.parse(e);
    return Vn = n && typeof n == "object" ? n : {}, Vn;
  } catch {
    return Vn = {}, Vn;
  }
}
function rb(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const o = Fh()[n];
  return typeof o == "boolean" ? o : !!e;
}
function ib(t, e) {
  var o;
  const n = String(t ?? "").trim();
  if (!n) return;
  const r = Fh();
  r[n] = !!e, Vn = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(Oh, JSON.stringify(r));
  } catch {
  }
}
function ob(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([n, r]) => {
    e[n] = r && typeof r == "object" ? { ...r } : r;
  }), e;
}
function ab(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const n = { ...e };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function sb(t) {
  var r, o;
  const e = Array.isArray((r = t == null ? void 0 : t.paint) == null ? void 0 : r.strokes) ? t.paint.strokes.length : 0, n = Array.isArray((o = t == null ? void 0 : t.mask) == null ? void 0 : o.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: n };
}
function Bf(t) {
  const { paintCount: e, maskCount: n } = sb(t), r = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
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
function _i(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Gf(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function cb(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : Qv(e)) : [];
}
function lb(t, e = 2048, n = "#00ff00") {
  const r = eb(), o = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    bg_color: n,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ko(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(r != null && r.invert_view_x),
      invert_view_y: !!(r != null && r.invert_view_y),
      preview_quality: String((r == null ? void 0 : r.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, c = String(t || "").trim();
  if (!c) return o;
  try {
    let u = null;
    if (Pa.text === c ? u = Pa.parsed : (u = JSON.parse(c), Pa = { text: c, parsed: u }), !u || typeof u != "object" || Array.isArray(u)) return o;
    const f = {
      ...o,
      ...u,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: ob(u.assets),
      stickers: ab(u.stickers),
      shots: cb(u.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: ko(u.painting),
      painting_layer: u.painting_layer && typeof u.painting_layer == "object" ? u.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(u.ui_settings && u.ui_settings.invert_view_x),
        invert_view_y: !!(u.ui_settings && u.ui_settings.invert_view_y),
        preview_quality: (() => {
          var y;
          const m = String(((y = u.ui_settings) == null ? void 0 : y.preview_quality) || "balanced");
          return m === "draft" || m === "balanced" || m === "high" ? m : "balanced";
        })()
      },
      active: u.active && typeof u.active == "object" ? { ...u.active } : { ...o.active }
    };
    return r && (f.ui_settings = Co({ ...f.ui_settings, ...r })), delete f.editor_history, f;
  } catch {
    return Pa = { text: c, parsed: null }, o;
  }
}
function Ci(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function ka(t) {
  return String(t ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function ub(t, e) {
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
function fb(t, e) {
  (Array.isArray(t == null ? void 0 : t.widgets) ? t.widgets : []).forEach((r) => {
    var c, u;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === e || o.trim() === e || o.toLowerCase().includes(String(e).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (c = r.inputEl) != null && c.style && (r.inputEl.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function qc(t, e, n) {
  var c, u;
  if (!t || typeof t.addWidget != "function") return null;
  let o = (Array.isArray(t.widgets) ? t.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(e));
  return o ? (o.callback = n, o.hidden = !1, o.__panoHidden = !1, o.type = "button", (c = o.inputEl) != null && c.style && (o.inputEl.style.display = ""), (u = o.parentEl) != null && u.style && (o.parentEl.style.display = ""), (typeof o.computeSize != "function" || o.computeSize() == null || o.hidden) && (o.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = t == null ? void 0 : t.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), o) : (o = t.addWidget("button", e, null, n), o && (o.serialize = !1), o);
}
function ho(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Kf(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : e;
}
function $h(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function db(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Vh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function hb(t, e, n = null) {
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
  return !r && n != null && (r = db(t == null ? void 0 : t.graph, n)), r;
}
function cs(t) {
  var o;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const r = `/view?${n.toString()}`;
  return typeof ((o = Je) == null ? void 0 : o.apiURL) == "function" ? Je.apiURL(r) : r;
}
function pb(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function gb(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), c = r.join("/");
  return { filename: o, subfolder: c };
}
function mb(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), e.push(o));
  }), e;
}
function Hh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (pb(e)) return [e];
  const { filename: n, subfolder: r } = gb(e);
  if (!n) return [e];
  const o = ["temp", "output", "input"].map((c) => cs({
    filename: n,
    subfolder: r,
    type: c
  }));
  return mb([...o, e]);
}
function yb(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? cs({
      filename: n,
      subfolder: String(t.subfolder || ""),
      type: String(t.storage || "input")
    }) : "";
  }
  return "";
}
function Ao(t) {
  var r;
  const e = (r = dn) == null ? void 0 : r.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  return e instanceof Map ? e.get(t) || e.get(n) || e.get(Number(n)) || null : e[t] || e[n] || null;
}
function Hi(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Hi(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return cs({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Hi(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : cs(t);
}
function vb(t, e = -1) {
  var o;
  const n = [];
  Array.isArray(t == null ? void 0 : t.images) && t.images.length && n.push(t.images), Array.isArray((o = t == null ? void 0 : t.ui) == null ? void 0 : o.images) && t.ui.images.length && n.push(t.ui.images);
  const r = [];
  for (const c of n)
    !Array.isArray(c) || !c.length || (e >= 0 && e < c.length && r.push(c[e]), r.push(...c));
  return r;
}
function Nc(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t || []) {
    const o = Hi(r);
    !o || n.has(o) || (n.add(o), e.push(o));
  }
  return e;
}
function bb(t, e, n, r = null) {
  var w;
  const o = Ao(t == null ? void 0 : t.id), c = Array.isArray((w = o == null ? void 0 : o.ui) == null ? void 0 : w[e]) ? o.ui[e] : Array.isArray(o == null ? void 0 : o[e]) ? o[e] : [], u = Array.isArray(c) && c.length ? c[0] : null, f = Hi(u);
  if (!f) return null;
  const m = `__ui__${e}`, y = n.get(m);
  if (y && y.__panoSrc === f) return y;
  const p = new Image();
  return p.__panoSrc = f, p.onload = () => {
    typeof r == "function" && r(p);
  }, p.src = f, n.set(m, p), p;
}
function _b(t, e) {
  var $, j;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], o = r.findIndex((S) => String((S == null ? void 0 : S.name) || "") === n);
  if (o < 0) return { src: "", sourceType: "", inputName: n };
  const c = r[o], u = c == null ? void 0 : c.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = $h(t.graph, u), { originId: m, originSlot: y } = Vh(f);
  if (m == null) return { src: "", sourceType: "", inputName: n };
  const p = hb(t, o, m), w = Number(y || 0);
  if (!p) return { src: "", sourceType: "", inputName: n };
  let M = [];
  try {
    M = typeof (($ = dn) == null ? void 0 : $.getNodeImageUrls) == "function" ? dn.getNodeImageUrls(p) || [] : [];
  } catch {
    M = [];
  }
  if (Array.isArray(M) && M.length) {
    const S = [];
    w >= 0 && w < M.length && S.push(M[w]), S.push(...M);
    const q = Nc(S);
    if (q.length) return { src: q[0], srcCandidates: q, sourceType: "appNodeImageUrls", inputName: n };
  }
  const k = Ao((p == null ? void 0 : p.id) ?? m), A = vb(k, w), C = Nc(A);
  if (C.length) return { src: C[0], srcCandidates: C, sourceType: "nodeOutputs", inputName: n };
  const O = Array.isArray(p == null ? void 0 : p.imgs) ? p.imgs : [];
  if (O.length) {
    const S = [];
    w >= 0 && w < O.length && S.push(O[w]), S.push(...O);
    const q = Nc(S);
    if (q.length) return { src: q[0], srcCandidates: q, sourceType: "nodeImgs", inputName: n };
  }
  const D = (j = p == null ? void 0 : p.widgets) == null ? void 0 : j.find((S) => String((S == null ? void 0 : S.name) || "").toLowerCase() === "image");
  if (D) {
    let S = Hi(D.value);
    if (S && !S.includes("/") && !S.includes(":") && (p.comfyClass === "LoadImage" || p.type === "LoadImage") && (S = Je.apiURL(`/view?filename=${encodeURIComponent(S)}&type=input&subfolder=`)), S) return { src: S, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function wb(t, e, n, r = null) {
  const o = String(n || "").trim();
  if (!o) return null;
  const c = Hh(o);
  if (!c.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(e || "image"), f = t.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === o && f.img) return f.img;
  const m = new Image(), y = { srcRaw: o, resolvedSrc: "", img: m };
  t.__panoLinkedInputImageCache.set(u, y);
  let p = -1;
  const w = () => {
    var k, A;
    if (p += 1, p >= c.length) {
      try {
        (A = (k = t.__panoLinkedInputImageCache) == null ? void 0 : k.delete) == null || A.call(k, u);
      } catch {
      }
      return;
    }
    const M = c[p];
    y.resolvedSrc = M, m.src = M;
  };
  return m.onload = () => {
    var M;
    r == null || r(), (M = t.setDirtyCanvas) == null || M.call(t, !0, !0);
  }, m.onerror = () => {
    var M, k;
    if (p + 1 < c.length) {
      w();
      return;
    }
    try {
      (k = (M = t.__panoLinkedInputImageCache) == null ? void 0 : M.delete) == null || k.call(M, u);
    } catch {
    }
  }, w(), m;
}
function xb(t, e, n, r = null) {
  const o = Array.isArray(n) ? n.map((A) => String(A || "").trim()).filter(Boolean) : [];
  if (!o.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = String(e || "image"), u = o.join(`
`), f = t.__panoLinkedInputImageCache.get(c);
  if (f && f.srcRaw === u && f.img) return f.img;
  const m = [], y = /* @__PURE__ */ new Set();
  if (o.forEach((A) => {
    Hh(A).forEach((C) => {
      const O = String(C || "").trim();
      !O || y.has(O) || (y.add(O), m.push(O));
    });
  }), !m.length) return null;
  const p = new Image(), w = { srcRaw: u, resolvedSrc: "", img: p };
  t.__panoLinkedInputImageCache.set(c, w);
  let M = -1;
  const k = () => {
    var C, O;
    if (M += 1, M >= m.length) {
      try {
        (O = (C = t.__panoLinkedInputImageCache) == null ? void 0 : C.delete) == null || O.call(C, c);
      } catch {
      }
      return;
    }
    const A = m[M];
    w.resolvedSrc = A, p.src = A;
  };
  return p.onload = () => {
    var A;
    r == null || r(), (A = t.setDirtyCanvas) == null || A.call(t, !0, !0);
  }, p.onerror = () => {
    var A, C;
    if (M + 1 < m.length) {
      k();
      return;
    }
    try {
      (C = (A = t.__panoLinkedInputImageCache) == null ? void 0 : A.delete) == null || C.call(A, c);
    } catch {
    }
  }, k(), p;
}
function zh(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const r of n) {
    const o = _b(t, r);
    if (String((o == null ? void 0 : o.src) || "").trim()) return o;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Wf(t, e = [], n = null, r = "") {
  const o = Array.isArray(e) ? e : [e], c = zh(t, o), u = String(r || o.join("|") || "image_exact"), f = Array.isArray(c == null ? void 0 : c.srcCandidates) ? c.srcCandidates : [];
  if (f.length) return xb(t, u, f, n);
  const m = String((c == null ? void 0 : c.src) || "").trim();
  return m ? wb(t, u, m, n) : null;
}
function Io(t, e, n = {}) {
  var ia, Su, Nu, oa, Mu, Pu, aa, ku;
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, c = r, u = ub(t, e);
  tb();
  const f = Ci(t, "output_preset"), m = Ci(t, "bg_color"), y = Ci(t, Gc), p = lb(
    String((y == null ? void 0 : y.value) || ""),
    Kf(f == null ? void 0 : f.value, 2048),
    String((m == null ? void 0 : m.value) || "#00ff00")
  );
  t.__panoLiveStateOverride = JSON.stringify(p), (Su = (ia = t.__panoDomPreview) == null ? void 0 : ia.requestDraw) == null || Su.call(ia), (Nu = t.setDirtyCanvas) == null || Nu.call(t, !0, !0), (Mu = (oa = t.graph) == null ? void 0 : oa.setDirtyCanvas) == null || Mu.call(oa, !0, !0), (ku = (aa = (Pu = dn) == null ? void 0 : Pu.canvas) == null ? void 0 : aa.setDirty) == null || ku.call(aa, !0, !0), e === "cutout" && (p.shots = Array.isArray(p.shots) ? p.shots.slice(0, 1) : [], p.shots.length || (p.active.selected_shot_id = null));
  const w = document.createElement("div");
  document.body.appendChild(w);
  const M = m1(Uv, {
    open: !0,
    type: e,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: u,
    shellPreset: Lh(e),
    paintSwatches: Ha.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Nn(i.color, 1)
    })),
    onClose: () => fi()
  });
  try {
    M.mount(w);
  } catch (i) {
    throw w.remove(), i;
  }
  const k = w.querySelector(".pano-modal-overlay"), A = w.querySelector(".pano-modal"), C = A == null ? void 0 : A.querySelector("canvas"), O = A == null ? void 0 : A.querySelector(".pano-stage-wrap");
  if (!k || !A || !C || !O)
    throw M.unmount(), w.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const D = document.createElement("div");
  D.setAttribute("aria-hidden", "true"), D.style.position = "absolute", D.style.left = "0", D.style.top = "0", D.style.pointerEvents = "none", D.style.zIndex = "12", D.style.display = "none", D.style.willChange = "transform,width,height,background,border-radius", O == null || O.appendChild(D);
  const $ = document.createElement("div");
  $.className = "pano-paint-size-preview", $.setAttribute("aria-hidden", "true");
  const j = document.createElement("div");
  j.className = "pano-paint-size-preview-sample", $.appendChild(j), O == null || O.appendChild($);
  const S = C.getContext("2d"), q = A.querySelector("[data-side]"), Q = A.querySelectorAll("[data-view]"), ut = A.querySelector(".pano-view-toggle"), nt = A.querySelector("[data-fov-value]"), Y = A.querySelector("[data-selection-menu]"), F = A.querySelector("[data-action='toggle-output-preview-size']"), rt = A.querySelector("[data-tool-ui-action='add-or-look']"), mt = A.querySelector("[data-view='frame']"), ct = A.querySelector("[data-action='toggle-fullscreen']"), Z = A.querySelector("[data-tooltip]"), U = A.querySelector("[data-tool-rail]"), at = A.querySelector("[data-paint-dock]"), it = Array.from(A.querySelectorAll("[data-paint-pane]")), st = A.querySelector("[data-paint-color-row]"), wt = A.querySelector("[data-paint-color-pop]"), Rt = A.querySelector("[data-paint-color-preview]"), J = A.querySelector("[data-paint-color-sv]"), Mt = A.querySelector("[data-paint-color-sv-cursor]"), Bt = A.querySelector("[data-paint-hue-strip]"), ye = A.querySelector("[data-paint-hue-handle]"), H = A.querySelector("[data-paint-alpha-slider]"), Pt = A.querySelector("[data-paint-alpha-value]"), St = A.querySelector("[data-paint-color-history-wrap]"), Dt = A.querySelector("[data-paint-color-history]"), zt = Array.from(A.querySelectorAll("[data-paint-size-row]")), $t = Array.from(A.querySelectorAll("[data-paint-clear-row]")), Gt = Array.from(A.querySelectorAll("[data-paint-layer-clear-current]")), I = Array.from(A.querySelectorAll("[data-paint-size-slider]")), L = Array.from(A.querySelectorAll("[data-paint-size-value]"));
  let V = 0, W = 0;
  e === "cutout" && (C.style.opacity = "0"), o && (q == null || q.remove(), A.classList.add("pano-modal-readonly"));
  function K(i) {
    at && at.classList.toggle("is-hidden", !i);
  }
  const X = () => {
    if (!d.customPaintSessionStart) return;
    if (za(d.customPaintSessionStart, d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    if (Zv(d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    const i = [
      fn(d.customPaintColor),
      ...d.customPaintHistory.filter((a) => !za(a, d.customPaintColor))
    ];
    d.customPaintHistory = i.slice(0, 8), d.customPaintSessionStart = null;
  }, bt = (i = !1) => {
    !wt || wt.hidden || (i ? X() : d.customPaintSessionStart = null, wt.hidden = !0);
  }, vt = () => {
    wt && (wt.hidden && (d.customPaintSessionStart = fn(d.customPaintColor)), wt.hidden = !1);
  };
  A.addEventListener("pointerdown", (i) => {
    ea(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (A.querySelectorAll(".pano-picker-pop").forEach((a) => {
      a.hidden = !0;
    }), bt(!0), e === "cutout" && d.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (d.cutoutAspectOpen = !1, d.menuMode = "", d.menuSize.measured = !1, Xt(), ft())));
  });
  const pt = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, et = JSON.stringify(Gf(p)), d = {
    mode: "pano",
    selectedId: pt,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    historyController: sv(80, { entries: [et], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: er,
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
    showGrid: rb(t == null ? void 0 : t.id, !0),
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
  e === "stickers" && (d.selectedId = null, p.active.selected_sticker_id = null), d.selectedIds = d.selectedId ? [d.selectedId] : [];
  const yt = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), It = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new Map(), kt = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: e === "cutout" ? 2 : 0,
    hasPresentedFrame: e !== "cutout"
  }, Wt = {
    timer: 0,
    target: null
  }, Zt = {
    active: !1,
    depth: 0
  };
  function Me(i) {
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
    return a.files && a.files.length ? Array.from(a.files).some((s) => Jo(s)) : !1;
  }
  function Ee(i) {
    const a = !!i;
    Zt.active !== a && (Zt.active = a, O.classList.toggle("drop-active", a));
  }
  function nn(i, a, s = d.viewFov, l = 140, h = 620) {
    const g = G1(d.viewYaw, i), _ = a - d.viewPitch, v = s - d.viewFov, b = Math.hypot(g, _) + Math.abs(v) * 0.6, N = Math.round(z(l + b * 2.2, l, h));
    d.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: N,
      startYaw: d.viewYaw,
      startPitch: d.viewPitch,
      startFov: d.viewFov,
      targetPitch: a,
      targetFov: s,
      deltaYaw: g
    }, d.viewInertia.active = !1, d.viewInertia.vx = 0, d.viewInertia.vy = 0, ft();
  }
  pp();
  function rn() {
    return e === "stickers" ? p.stickers : p.shots;
  }
  function Ie() {
    const i = p.painting || (p.painting = ko(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Be(i = "paint") {
    var h, g;
    const a = Array.isArray((g = (h = p.painting) == null ? void 0 : h[i]) == null ? void 0 : g.strokes) ? p.painting[i].strokes : [], s = [], l = /* @__PURE__ */ new Set();
    for (const _ of a) {
      const v = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !v || l.has(v) || (l.add(v), s.push(v));
    }
    return s;
  }
  function pn() {
    return Be("paint");
  }
  function fr(i, a) {
    const s = String(a || "").trim();
    return s ? `${i === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function dr(i) {
    const a = String(i || "").trim();
    return a ? `raster:${a}` : "";
  }
  function Ge(i) {
    const a = String(i || "").trim();
    if (!a) return "";
    const s = a.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : a).trim();
  }
  function Ui(i, a = null) {
    const s = String(i || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const l = s.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: a === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function Ss() {
    var a;
    let i = -1;
    for (const s of Array.isArray(p.stickers) ? p.stickers : [])
      i = Math.max(i, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Ie())
      i = Math.max(i, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((a = p.painting) == null ? void 0 : a.raster_objects) ? p.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((s == null ? void 0 : s.z_index) || 0)));
    return i + 1;
  }
  function bl(i, a = null) {
    const s = String(i || "").trim();
    if (!s) return null;
    const l = Ie();
    let h = l.find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === s);
    return h ? a != null && (h.z_index = Math.max(0, Number(a || 0))) : (h = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: a == null ? Ss() : Math.max(0, Number(a || 0)),
      locked: !1,
      frame: null
    }, l.push(h)), h;
  }
  function jh() {
    const i = new Set(pn()), s = Ie().filter((l) => i.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return i.forEach((l) => {
      s.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === l) || s.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: Ss(),
        locked: !1,
        frame: null
      });
    }), s.sort((l, h) => Number((l == null ? void 0 : l.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), p.painting.groups = s, s;
  }
  function Uh(i, a, s) {
    const l = [];
    for (const T of s) {
      const R = T == null ? void 0 : T.geometry, G = (R == null ? void 0 : R.geometryKind) === "lasso_fill" ? R == null ? void 0 : R.points : (R == null ? void 0 : R.processedPoints) || (R == null ? void 0 : R.rawPoints) || (R == null ? void 0 : R.points) || [];
      Array.isArray(G) && l.push(...G);
    }
    if (!l.length) return null;
    let h = 0, g = 0;
    l.forEach((T) => {
      h += Number((T == null ? void 0 : T.u) || 0), g += Number((T == null ? void 0 : T.v) || 0);
    });
    const _ = h / l.length;
    let v = 1 / 0, b = -1 / 0, N = 1 / 0, x = -1 / 0;
    l.forEach((T) => {
      const R = Ki(Number((T == null ? void 0 : T.u) || 0), _);
      v = Math.min(v, R), b = Math.max(b, R);
      const G = Number((T == null ? void 0 : T.v) || 0);
      N = Math.min(N, G), x = Math.max(x, G);
    });
    const P = s.reduce((T, R) => {
      const G = br(String((R == null ? void 0 : R.toolKind) || "pen")), tt = on[G] || on[er], gt = Math.max(1, Number((R == null ? void 0 : R.size) || 10)) * Math.max(0.1, Number((tt == null ? void 0 : tt.sizeScale) ?? 1));
      return Math.max(T, gt);
    }, 0), E = Math.max(35e-4, P / 2048);
    return {
      centerUv: { u: ((_ + (v + b) * 0.5) % 1 + 1) % 1, v: z((N + x) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (b - v) * 0.5 + E,
      halfH: (x - N) * 0.5 + E,
      uvPad: E
    };
  }
  function Er(i, a, s) {
    const l = String(i || "").trim();
    if (!l) return null;
    const h = Ie().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === l);
    if (!h) return null;
    if (!h.frame) {
      const g = s || mn(l, a);
      h.frame = Uh(l, a, g);
    }
    return h.frame;
  }
  function Tr() {
    var l;
    const i = (Array.isArray(p.stickers) ? p.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), a = jh().map((h) => ({
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
    return [...i, ...a, ...s].sort((h, g) => Number(h.z_index || 0) - Number(g.z_index || 0));
  }
  function Bi(i = !0) {
    var s, l, h, g, _, v;
    const a = Tr().filter((b) => b.type === "strokeGroup").map((b) => String(b.actionGroupId || "")).filter((b) => !!b);
    if (i) {
      const b = String(((l = (s = d.interaction) == null ? void 0 : s.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), N = String(((g = (h = d.interaction) == null ? void 0 : h.stroke) == null ? void 0 : g.layerKind) || "").trim(), x = String(((v = (_ = d.interaction) == null ? void 0 : _.stroke) == null ? void 0 : v.toolKind) || "").trim();
      b && N === "paint" && x !== "eraser" && !a.includes(b) && a.push(b);
    }
    return a;
  }
  function Ns(i = !0) {
    var v, b, N, x, P, E;
    const a = Tr();
    if (!i) return a;
    const s = String(((b = (v = d.interaction) == null ? void 0 : v.stroke) == null ? void 0 : b.actionGroupId) || "").trim(), l = String(((x = (N = d.interaction) == null ? void 0 : N.stroke) == null ? void 0 : x.layerKind) || "").trim(), h = String(((E = (P = d.interaction) == null ? void 0 : P.stroke) == null ? void 0 : E.toolKind) || "").trim();
    if (!s || l !== "paint" || h === "eraser" || a.some((T) => T.type === "strokeGroup" && String(T.actionGroupId || "") === s))
      return a;
    const g = ve();
    let _ = a.reduce((T, R) => Math.max(T, Number((R == null ? void 0 : R.z_index) || 0)), -1) + 1;
    return g && Ae(g) && String(g.actionGroupId || "") === s && (_ = Number(g.z_index || 0)), [
      ...a,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: _,
        item: null
      }
    ].sort((T, R) => Number((T == null ? void 0 : T.z_index) || 0) - Number((R == null ? void 0 : R.z_index) || 0));
  }
  function Bh() {
    return Ie().slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => ni(fr("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function Gh() {
    var i;
    return (Array.isArray((i = p.painting) == null ? void 0 : i.raster_objects) ? p.painting.raster_objects : []).filter((a) => String((a == null ? void 0 : a.layerKind) || "paint") === "paint").slice().sort((a, s) => Number((a == null ? void 0 : a.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((a) => ei(dr((a == null ? void 0 : a.id) || ""))).filter(Boolean);
  }
  function Ho(i = d.interaction) {
    const a = String((i == null ? void 0 : i.kind) || "");
    if (a === "paint_stroke" || a === "paint_lasso_fill" || a === "move_stroke_group" || a === "scale_stroke_group" || a === "rotate_stroke_group" || a === "move_raster_object") return !0;
    if (a === "move_multi") {
      const s = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, l = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return s || l;
    }
    return !1;
  }
  function _l(i = d.interaction) {
    if (e !== "cutout") return !1;
    const a = String((i == null ? void 0 : i.kind) || "");
    return Ho(i) || a === "move" || a === "scale" || a === "scale_x" || a === "scale_y" || a === "rotate" ? !0 : a === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Kh(i = d.interaction) {
    if (!_l(i)) return 0;
    const a = String((i == null ? void 0 : i.kind) || "");
    return a === "paint_stroke" || a === "paint_lasso_fill" ? 120 : 33;
  }
  function Gi() {
    var h, g, _, v, b, N, x;
    const i = d.interaction, a = String((i == null ? void 0 : i.kind) || "");
    if (!Ho(i)) return "";
    if (a === "paint_stroke" || a === "paint_lasso_fill") {
      const P = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, E = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.layerKind) || ""), T = ((_ = P == null ? void 0 : P.rawPoints) == null ? void 0 : _.length) ?? ((v = P == null ? void 0 : P.points) == null ? void 0 : v.length) ?? 0, R = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${E || "paint"}_${a}_live${R}_${T}_${d.livePaintInteractionRevision}`;
    }
    const s = String(((b = i == null ? void 0 : i.item) == null ? void 0 : b.actionGroupId) || ""), l = String(((N = i == null ? void 0 : i.item) == null ? void 0 : N.rasterObjectId) || ((x = i == null ? void 0 : i.item) == null ? void 0 : x.id) || "");
    return `_${a}_${s || l || "active"}_${d.livePaintInteractionRevision}`;
  }
  function Ms() {
    return [
      ...Array.isArray(p.stickers) ? p.stickers : [],
      ...Array.isArray(p.shots) ? p.shots : []
    ];
  }
  function gn(i) {
    return !!i && Array.isArray(p.shots) && p.shots.includes(i);
  }
  function Le(i) {
    return !!i && Array.isArray(p.stickers) && p.stickers.includes(i);
  }
  function ln() {
    var i;
    return Array.isArray((i = p.painting) == null ? void 0 : i.raster_objects) ? p.painting.raster_objects : [];
  }
  function ei(i) {
    const a = Ge(i);
    if (!a) return null;
    const s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === a);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: dr(a),
      type: "rasterObject",
      rasterObjectId: a
    };
  }
  function Ke(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const a = Ge(i.rasterObjectId || i.id || "");
    return !!a && !!ei(dr(a));
  }
  function ni(i) {
    const a = Ui(i), s = String(a.actionGroupId || "").trim();
    if (!s) return null;
    const l = Ie().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === s || String((h == null ? void 0 : h.actionGroupId) || "") === s);
    return l ? {
      ...l,
      id: fr("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Ae(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const a = String(i.actionGroupId || "").trim(), s = String(i.layerKind || "paint").trim() || "paint";
    return !!a && !!ni(fr(s, a));
  }
  function mn(i, a = null) {
    const s = Ui(i, a), l = String(s.actionGroupId || "").trim();
    return l ? ui(s.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === l) : [];
  }
  function Wh(i, a = "paint") {
    var g, _, v;
    const s = String(i || "").trim(), h = `${String(a || "paint").trim() || "paint"}:${s}:${d.mode}:${Rr()}`;
    if (d.mode === "frame") {
      const b = re(), N = String((b == null ? void 0 : b.id) || ""), x = b ? qe(b) : null;
      return `${h}:frame:${N}:${Math.round(Number((x == null ? void 0 : x.x) || 0))}:${Math.round(Number((x == null ? void 0 : x.y) || 0))}:${Math.round(Number((x == null ? void 0 : x.w) || 0))}:${Math.round(Number((x == null ? void 0 : x.h) || 0))}:${Math.round(Number(((g = d.frameView) == null ? void 0 : g.zoom) || 1) * 1e3)}:${Math.round(Number(((_ = d.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((v = d.frameView) == null ? void 0 : v.panY) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function zo(i, a, s) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(a || 0)) % 1 + 1) % 1,
      v: z(Number(i.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function Ki(i, a) {
    let s = Number(i || 0) - Number(a || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function wl(i, a = null, s = null) {
    var N;
    const l = Ui(i, a), h = Array.isArray(s) ? s : mn(l.actionGroupId, l.layerKind), g = [];
    if (h.forEach((x) => {
      const P = (x == null ? void 0 : x.geometry) || null, E = (P == null ? void 0 : P.geometryKind) === "lasso_fill" ? P == null ? void 0 : P.points : (P == null ? void 0 : P.processedPoints) || (P == null ? void 0 : P.rawPoints) || (P == null ? void 0 : P.points) || [];
      Array.isArray(E) && g.push(...E);
    }), !g.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((N = g[0]) == null ? void 0 : N.u) || 0);
    let v = 0, b = 0;
    return g.forEach((x) => {
      v += _ + Ki(Number((x == null ? void 0 : x.u) || 0), _), b += Number((x == null ? void 0 : x.v) || 0);
    }), {
      u: (v / g.length % 1 + 1) % 1,
      v: z(b / g.length, 0, 1)
    };
  }
  function jo(i, a, s = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((a == null ? void 0 : a.u) || 0), g = Number((a == null ? void 0 : a.v) || 0), _ = Ki(Number(i.u || 0), h), v = Number(i.v || 0) - g, b = Number(l || 0) * Oe, N = Math.cos(b), x = Math.sin(b), P = Math.max(0.02, Number(s || 1)), E = (_ * N - v * x) * P, T = (_ * x + v * N) * P;
    return {
      ...i,
      u: ((h + E) % 1 + 1) % 1,
      v: z(g + T, 0, 1)
    };
  }
  function xl(i, a, s, l = null, h = null, g = null) {
    const _ = Ui(i, h), v = String(_.actionGroupId || "").trim();
    if (!v) return !1;
    const b = ui(_.layerKind), N = Array.isArray(l) ? new Map(l.map((P) => [String((P == null ? void 0 : P.id) || ""), P])) : null;
    let x = !1;
    if (b.forEach((P) => {
      if (String((P == null ? void 0 : P.actionGroupId) || "").trim() !== v) return;
      const E = (N == null ? void 0 : N.get(String((P == null ? void 0 : P.id) || ""))) || P, T = P == null ? void 0 : P.geometry, R = E == null ? void 0 : E.geometry;
      !T || !R || (Array.isArray(R.points) && (T.points = R.points.map((G) => zo(G, a, s)), x = !0), Array.isArray(R.rawPoints) && (T.rawPoints = R.rawPoints.map((G) => zo(G, a, s)), x = !0), Array.isArray(R.processedPoints) && (T.processedPoints = R.processedPoints.map((G) => zo(G, a, s)), x = !0));
    }), x && g) {
      const P = Ie().find((E) => String((E == null ? void 0 : E.actionGroupId) || "") === v);
      P && (P.frame = {
        ...g,
        centerUv: {
          u: ((g.centerUv.u + a) % 1 + 1) % 1,
          v: z(g.centerUv.v + s, 0, 1)
        }
      });
    }
    return x;
  }
  function Sl(i, a = 1, s = 0, l = null, h = null, g = null) {
    const _ = Ui(i, h), v = String(_.actionGroupId || "").trim();
    if (!v) return !1;
    const b = ui(_.layerKind), N = Array.isArray(l) ? l : mn(v, _.layerKind), x = Array.isArray(N) ? new Map(N.map((T) => [String((T == null ? void 0 : T.id) || ""), T])) : null, P = (g == null ? void 0 : g.centerUv) ?? wl(v, _.layerKind, N);
    let E = !1;
    if (b.forEach((T) => {
      if (String((T == null ? void 0 : T.actionGroupId) || "").trim() !== v) return;
      const R = (x == null ? void 0 : x.get(String((T == null ? void 0 : T.id) || ""))) || T, G = T == null ? void 0 : T.geometry, tt = R == null ? void 0 : R.geometry;
      !G || !tt || (Array.isArray(tt.points) && (G.points = tt.points.map((gt) => jo(gt, P, a, s)), E = !0), Array.isArray(tt.rawPoints) && (G.rawPoints = tt.rawPoints.map((gt) => jo(gt, P, a, s)), E = !0), Array.isArray(tt.processedPoints) && (G.processedPoints = tt.processedPoints.map((gt) => jo(gt, P, a, s)), E = !0));
    }), E && g) {
      const T = Number(a || 1), R = Ie().find((G) => String((G == null ? void 0 : G.actionGroupId) || "") === v);
      R && (R.frame = {
        centerUv: g.centerUv,
        rot_deg: Number(g.rot_deg || 0) + Number(s || 0),
        halfW: g.halfW * T,
        halfH: g.halfH * T,
        uvPad: g.uvPad
      });
    }
    return E;
  }
  function Nl(i, a, s, l = null) {
    const h = Ge(i);
    if (!h) return !1;
    const g = ln().find((x) => String((x == null ? void 0 : x.id) || "").trim() === h);
    if (!g) return !1;
    const _ = l && typeof l == "object" ? l : g, v = (_ == null ? void 0 : _.transform) || {}, b = Number(v.du || 0) + Number(a || 0), N = z(Number(v.dv || 0) + Number(s || 0), -1, 1);
    return g.transform || (g.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), g.transform.du = b, g.transform.dv = N, !0;
  }
  function ve() {
    const i = String(d.selectedId || "");
    if (!i) return null;
    const a = ni(i);
    if (a) return a;
    const s = ei(i);
    return s || (e === "cutout" ? Ms().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null : rn().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null);
  }
  function An() {
    const i = Array.isArray(d.selectedIds) && d.selectedIds.length ? d.selectedIds : d.selectedId ? [d.selectedId] : [], a = [], s = /* @__PURE__ */ new Set();
    return i.forEach((l) => {
      const h = String(l || "").trim();
      if (!h || s.has(h)) return;
      s.add(h);
      const g = h === String(d.selectedId || "") ? ve() : ni(h) || ei(h) || (e === "cutout" ? Ms().find((_) => String((_ == null ? void 0 : _.id) || "") === h) : rn().find((_) => String((_ == null ? void 0 : _.id) || "") === h));
      g && a.push(g);
    }), a;
  }
  function Ps(i = null) {
    const a = Array.isArray(i) ? i : An();
    if (!a || a.length < 2) return null;
    const s = a.map((N) => De(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!s.length) return null;
    const l = s.flatMap((N) => N.corners.map((x) => Number((x == null ? void 0 : x.x) || 0))), h = s.flatMap((N) => N.corners.map((x) => Number((x == null ? void 0 : x.y) || 0))), g = Math.min(...l), _ = Math.max(...l), v = Math.min(...h), b = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (g + _) * 0.5, y: (v + b) * 0.5 },
      corners: [
        { x: g, y: v },
        { x: _, y: v },
        { x: _, y: b },
        { x: g, y: b }
      ],
      edgeMidpoints: [
        { edge: "top", x: (g + _) * 0.5, y: v, a: { x: g, y: v }, b: { x: _, y: v } },
        { edge: "right", x: _, y: (v + b) * 0.5, a: { x: _, y: v }, b: { x: _, y: b } },
        { edge: "bottom", x: (g + _) * 0.5, y: b, a: { x: _, y: b }, b: { x: g, y: b } },
        { edge: "left", x: g, y: (v + b) * 0.5, a: { x: g, y: b }, b: { x: g, y: v } }
      ],
      rotateStemBase: { x: (g + _) * 0.5, y: v },
      rotateHandle: { x: (g + _) * 0.5, y: v - 30 }
    };
  }
  function qh(i) {
    const a = String((i == null ? void 0 : i.id) || "").trim();
    return !!a && Array.isArray(d.selectedIds) && d.selectedIds.includes(a);
  }
  function Ml() {
    const i = ve();
    return i ? Ae(i) || Ke(i) ? "stroke" : gn(i) ? "frame" : "image" : null;
  }
  function hr(i) {
    if (!i || typeof i != "object") return !1;
    if (Ae(i)) {
      const a = String(i.actionGroupId || i.id || "").trim(), s = Ie().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === a);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (Ke(i)) {
      const a = Ge(i.rasterObjectId || i.id || ""), s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === a);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return i.locked === !0;
  }
  function ks(i = null) {
    const a = Array.isArray(i) ? i : An();
    return a.length > 0 && a.every((s) => hr(s));
  }
  function Yh(i, a) {
    const s = a === !0;
    if (!i || typeof i != "object") return !1;
    if (Ae(i)) {
      const l = String(i.actionGroupId || i.id || "").trim(), h = Ie().find((g) => String((g == null ? void 0 : g.actionGroupId) || (g == null ? void 0 : g.id) || "").trim() === l);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    if (Ke(i)) {
      const l = Ge(i.rasterObjectId || i.id || ""), h = ln().find((g) => String((g == null ? void 0 : g.id) || "").trim() === l);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    return i.locked === s ? !1 : (i.locked = s, !0);
  }
  function Xh() {
    if (r) return;
    const i = An();
    if (!i.length) return;
    const a = !ks(i);
    let s = !1;
    i.forEach((l) => {
      Yh(l, a) && (s = !0);
    }), s && (le(), Se(), Xt(), ft());
  }
  function Uo(i) {
    d.selectedId = (i == null ? void 0 : i.id) || null, d.selectedIds = i != null && i.id ? [i.id] : [], i && Le(i) ? p.active.selected_sticker_id = i.id || null : p.active.selected_sticker_id = null, i && gn(i) ? p.active.selected_shot_id = i.id || null : i ? gn(i) || (p.active.selected_shot_id = p.active.selected_shot_id) : p.active.selected_shot_id = null;
  }
  function Zh(i, a = null) {
    const s = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((_) => {
      const v = String((_ == null ? void 0 : _.id) || "").trim();
      !v || l.has(v) || (l.add(v), s.push(v));
    }), d.selectedIds = s;
    const h = String(a || "").trim();
    d.selectedId = h && s.includes(h) ? h : s[s.length - 1] || null;
    const g = ve();
    p.active.selected_sticker_id = g && Le(g) && g.id || null, g && gn(g) ? p.active.selected_shot_id = g.id || null : s.length || (p.active.selected_shot_id = null);
  }
  function Jh() {
    const i = (Array.isArray(p.shots) ? p.shots : []).map((s, l) => ({
      kind: "frame",
      item: s,
      label: "Frame"
    })), a = (Array.isArray(p.stickers) ? p.stickers : []).map((s, l) => {
      var g, _;
      const h = Pe(s) ? String(s.id || Vr) : String(((_ = (g = p.assets) == null ? void 0 : g[s.asset_id]) == null ? void 0 : _.name) || s.asset_id || s.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: s,
        label: h
      };
    });
    return [...i, ...a];
  }
  function Qh(i) {
    return i === "frame" ? Lt.camera : i === "stroke" ? Lt.paintbrush_vertical_tool : Lt.image;
  }
  function Pl(i) {
    return !i || !i.item ? ka(String((i == null ? void 0 : i.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${Qh(i.kind)}</span><span>${ka(String(i.label || ""))}</span>`;
  }
  function kl() {
    return Ss();
  }
  function Pe(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === Vr || String(i.source_kind || "") === bc;
  }
  function ri(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function tp(i) {
    return Pe(i) && ri(i) ? ch : 1;
  }
  function ep() {
    return d.primaryTool === "mask" ? d.maskTool : d.paintTool;
  }
  function np() {
    return String(ep() || "") === "lasso_fill";
  }
  function rp() {
    if (r) return;
    const i = ve();
    !i || !Pe(i) || (i.visible = ri(i), yn(), le(), Se(), ee(), Xt(), ft());
  }
  function ip() {
    if (r || e !== "stickers") return;
    const i = ve();
    if (!i || !Pe(i)) return;
    const a = i.initial_pose;
    if (!a || typeof a != "object") return;
    i.yaw_deg = Number(a.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(a.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(a.hFOV_deg ?? i.hFOV_deg ?? 30);
    const s = Cs(_c, () => {
      ft();
    });
    s && (s.complete || s.naturalWidth || s.width) ? i.vFOV_deg = Lr(
      Number(a.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : i.vFOV_deg = Number(a.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(a.rot_deg ?? i.rot_deg ?? 0), le(), Se(), ee(), Xt(), ft();
  }
  function op(i) {
    if (!i || !Pe(i)) return null;
    const a = i.initial_pose;
    if (!a || typeof a != "object") return null;
    const s = {
      yaw_deg: Number(a.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(a.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(a.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(a.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(a.rot_deg ?? i.rot_deg ?? 0)
    }, l = Cs(_c, () => {
      ft();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (s.vFOV_deg = Lr(
      s.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), s;
  }
  function ap() {
    const i = ve();
    if (!i || !Pe(i)) return !1;
    const a = op(i);
    if (!a) return !1;
    const s = (l, h) => Math.abs(Number(l || 0) - Number(h || 0)) <= 1e-4;
    return !(s(i.yaw_deg, a.yaw_deg) && s(i.pitch_deg, a.pitch_deg) && s(i.hFOV_deg, a.hFOV_deg) && s(i.vFOV_deg, a.vFOV_deg) && s(i.rot_deg, a.rot_deg));
  }
  function Cl(i) {
    var s;
    const a = Ao(t == null ? void 0 : t.id);
    return Array.isArray((s = a == null ? void 0 : a.ui) == null ? void 0 : s[i]) ? a.ui[i] : Array.isArray(a == null ? void 0 : a[i]) ? a[i] : [];
  }
  function sp(i) {
    const a = Ao(t == null ? void 0 : t.id);
    return a != null && a.ui && Object.prototype.hasOwnProperty.call(a.ui, i) ? a.ui[i] : a && Object.prototype.hasOwnProperty.call(a, i) ? a[i] : null;
  }
  function cp(i, a = null) {
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
  function Cs(i, a = null) {
    const s = Cl(i), l = Array.isArray(s) && s.length ? s[0] : null, h = Hi(l);
    if (!h) return null;
    const g = `__ui__${i}`, _ = yt.get(g);
    if (_ && _.__panoSrc === h) return _;
    const v = new Image();
    return v.__panoSrc = h, v.onload = () => {
      typeof a == "function" ? a(v) : ft();
    }, v.src = h, yt.set(g, v), v;
  }
  function Al(i = null) {
    const a = Wf(t, ["sticker_image"], i, "sticker_image_exact");
    return a || Cs(_c, i);
  }
  function Il(i) {
    const a = String(i || "");
    let s = 2166136261;
    for (let l = 0; l < a.length; l += 1)
      s ^= a.charCodeAt(l), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Lr(i, a, s) {
    const l = Math.max(1, Number(a || 1)), h = Math.max(1, Number(s || 1)), g = z(Number(i || 30), 0.1, 179) * Oe, _ = 2 * Math.atan(Math.tan(g * 0.5) * (h / l));
    return z(_ * Ur, 0.1, 179);
  }
  function lp(i) {
    const a = String(i || "").trim();
    if (!a) return null;
    try {
      const s = JSON.parse(a);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const l = s.version;
      let h = null;
      if (typeof l == "number" && Number.isInteger(l) ? h = l : typeof l == "string" && /^\d+$/.test(l) && (h = Number.parseInt(l, 10)), h !== 1) return null;
      const g = s.pose;
      if (!g || typeof g != "object") return null;
      const _ = Number(g.yaw_deg), v = Number(g.pitch_deg), b = Number(g.roll_deg), N = Number(g.hFOV_deg);
      if (![_, v, b, N].every((T) => Number.isFinite(T))) return null;
      let x = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(x, -0) && (x = 0);
      const P = {
        yaw_deg: x,
        pitch_deg: z(v, -89.9, 89.9),
        roll_deg: b,
        hFOV_deg: z(N, 0.1, 179)
      }, E = Number(s.source_aspect);
      return Number.isFinite(E) && E > 0 && (P.source_aspect = E), P;
    } catch {
      return null;
    }
  }
  function El(i) {
    const a = Number(i == null ? void 0 : i.yaw_deg), s = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), g = Wc(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Fe(Number.isFinite(a) ? a : 0),
        pitch_deg: z(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: z(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function up(i) {
    var v;
    if (!i || typeof i != "object") return El(null);
    const a = Number(i == null ? void 0 : i.yaw_deg), s = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), g = Number(i == null ? void 0 : i.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(h) && Number.isFinite(g)) {
      const b = z(h, 0.1, 179) * Oe, N = z(g, 0.1, 179) * Oe, x = Math.tan(N * 0.5);
      if (Math.abs(x) > 1e-6) {
        const P = Math.tan(b * 0.5) / x;
        Number.isFinite(P) && P > 0 && (_ = P);
      }
    }
    if (i != null && i.asset_id && ((v = p == null ? void 0 : p.assets) != null && v[i.asset_id])) {
      const b = p.assets[i.asset_id], N = Number((b == null ? void 0 : b.w) || 0), x = Number((b == null ? void 0 : b.h) || 0);
      N > 0 && x > 0 && (_ = N / x);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Fe(Number.isFinite(a) ? a : 0),
        pitch_deg: z(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: z(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function fp(i) {
    var l, h, g, _, v;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((b) => String((b == null ? void 0 : b.name) || "") === String(i)) : null, s = a == null ? void 0 : a.link;
    if (s != null) {
      const b = $h(t.graph, s), { originId: N, originSlot: x } = Vh(b), P = Ao(N), E = [
        P == null ? void 0 : P.output,
        P == null ? void 0 : P.result,
        (l = P == null ? void 0 : P.data) == null ? void 0 : l.output,
        (h = P == null ? void 0 : P.data) == null ? void 0 : h.result,
        (g = P == null ? void 0 : P.ui) == null ? void 0 : g.output,
        (_ = P == null ? void 0 : P.ui) == null ? void 0 : _.result
      ];
      for (const T of E) {
        if (!Array.isArray(T)) continue;
        const R = Number(x || 0), G = T[R];
        if (typeof G == "string" && G.trim()) return G;
      }
    }
    return String(((v = Ci(t, i)) == null ? void 0 : v.value) || "");
  }
  function dp(i, a, s) {
    const l = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : lp(a);
    if (l) {
      const _ = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || l.source_aspect || 1), v = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Lr(l.hFOV_deg, _, v),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const h = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(d.viewYaw || 0),
      pitch_deg: Number(d.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Lr(30, h, g),
      rot_deg: 0
    };
  }
  function Tl(i = "sync") {
    if (e !== "stickers" || r) return;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((T) => String((T == null ? void 0 : T.name) || "") === "sticker_image") : null, s = (a == null ? void 0 : a.link) ?? null, l = Al(() => {
      var T;
      (T = t.__panoExternalStickerSync) == null || T.call(t, "image-loaded");
    }), h = cp(sp("pano_sticker_input_pose"), null), g = fp("sticker_state"), _ = Il(h && typeof h == "object" ? JSON.stringify(h) : g), v = Array.isArray(p.stickers) ? p.stickers : p.stickers = [], b = v.findIndex((T) => String((T == null ? void 0 : T.id) || "") === Vr);
    if (s == null) {
      b >= 0 && (v.splice(b, 1), d.selectedId === Vr && (d.selectedId = null, d.selectedIds = [], p.active.selected_sticker_id = null), Se(), ee(), Xt(), ft());
      return;
    }
    const N = v.reduce((T, R) => Math.max(T, Number((R == null ? void 0 : R.z_index) || 0)), -1);
    let x = b >= 0 ? v[b] : null;
    const P = !x || Number(x.source_link_id ?? -1) !== Number(s) || String(x.source_state_hash || "") !== _;
    x || (x = {
      id: Vr,
      source_kind: bc
    }, v.push(x)), x.id = Vr, x.source_kind = bc, x.source_link_id = Number(s), x.source_state_hash = _, x.visible = x.visible !== !1;
    let E = !1;
    if (P) {
      const T = dp(h, g, l);
      Object.assign(x, T, {
        initial_pose: { ...T },
        visible: !0,
        z_index: N + 1
      }), E = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const T = Lr(
        Number(x.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(x.vFOV_deg || 0) - T) > 1e-6 && (x.vFOV_deg = T, E = !0);
    }
    E && (Se(), ee(), Xt()), ft();
  }
  function ii(i = {}) {
    const s = i.preservePanelValues !== !1 ? ve() : null;
    s && (d.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: bi(s)
    }), d.selectedId = null, d.selectedIds = [], d.cutoutAspectOpen = !1, p.active.selected_sticker_id = null, p.active.selected_shot_id = null;
  }
  function hp() {
    var l;
    if (e !== "cutout") return;
    const i = Array.isArray(p.shots) ? p.shots : [];
    if (!Array.isArray(i) || i.length === 0) return;
    const a = String(((l = p.active) == null ? void 0 : l.selected_shot_id) || ""), s = i.find((h) => String((h == null ? void 0 : h.id) || "") === a) || i[0];
    s && (p.active.selected_shot_id = s.id || null, d.viewYaw = Fe(Number(s.yaw_deg || 0)), d.viewPitch = z(Number(s.pitch_deg || 0), -89.9, 89.9));
  }
  function Bo() {
    if (!rt) return;
    e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0 ? (rt.innerHTML = Lt.crosshair, rt.setAttribute("aria-label", "Look at frame"), rt.setAttribute("data-tip", "Look at frame")) : (rt.innerHTML = Lt.plus_circle, rt.setAttribute("aria-label", "Add frame"), rt.setAttribute("data-tip", "Add frame"));
  }
  function Go() {
    const i = e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0;
    d.mode === "frame" && !i && (d.mode = "pano"), mt && (mt.disabled = !i, mt.setAttribute("aria-disabled", i ? "false" : "true")), Q.forEach((a) => {
      const s = a.dataset.view === d.mode;
      a.setAttribute("aria-pressed", s ? "true" : "false");
    }), ut && ut.setAttribute("data-selected", d.mode), iu() ? be(d.pointerPos) : C.style.cursor = d.mode === "pano" ? "grab" : "default";
  }
  function pp() {
    const a = Fl({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !a || a.length !== 4 ? !1 : a[0].y >= a[3].y;
  }
  function As() {
    const i = $n(d.viewYaw, d.viewPitch);
    let a = Gn(0, 1, 0);
    Math.abs(xn(i, a)) > 0.999 && (a = Gn(0, 0, 1));
    const s = vi(Sa(a, i)), l = vi(Sa(i, s));
    return { right: s, up: l, fwd: i };
  }
  function Wi(i) {
    const { right: a, up: s, fwd: l } = As(), h = xn(i, a), g = xn(i, s), _ = xn(i, l);
    if (_ <= 1e-5) return null;
    const v = C.width, b = C.height, N = d.viewFov * Oe, x = 2 * Math.atan(Math.tan(N / 2) * (b / v)), P = v / 2 / Math.tan(N / 2), E = b / 2 / Math.tan(x / 2);
    return {
      x: v / 2 + h / _ * P,
      y: b / 2 - g / _ * E,
      z: _
    };
  }
  function Is(i, a) {
    const { right: s, up: l, fwd: h } = As(), g = C.width, _ = C.height, v = d.viewFov * Oe, b = 2 * Math.atan(Math.tan(v / 2) * (_ / g)), N = (i - g / 2) / (g / 2) * Math.tan(v / 2), x = (_ / 2 - a) / (_ / 2) * Math.tan(b / 2), P = wa(wa(xa(s, N), xa(l, x)), h);
    return vi(P);
  }
  function pr() {
    const i = C.width, a = C.height, s = 2;
    if (i / Math.max(a, 1) >= s) {
      const v = a, b = v * s;
      return { x: (i - b) * 0.5, y: 0, w: b, h: v };
    }
    const h = i, g = h / s;
    return { x: 0, y: (a - g) * 0.5, w: h, h: g };
  }
  function gp(i) {
    var _;
    if (i && typeof i == "object" && (Pe(i) || i.external === !0))
      return Al(() => {
        var v;
        (v = t.__panoExternalStickerSync) == null || v.call(t, "image-loaded");
      });
    const a = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!a) return null;
    const s = yt.get(a);
    if (s) return s;
    const l = (_ = p.assets) == null ? void 0 : _[a], h = yb(l);
    if (!h) return null;
    const g = new Image();
    return g.onload = () => ft(), g.src = h, yt.set(a, g), g;
  }
  function Ll(i, a = null) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Ct.get(s);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const h = new Image();
    return h.onload = () => {
      typeof a == "function" && a();
    }, h.src = s, Ct.set(s, h), h;
  }
  function mp(i) {
    const a = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!a) return null;
    const s = It.get(a);
    if (s) return s.ready ? s : null;
    const l = Ll(i, () => {
      const x = It.get(a);
      x && (x.ready = !1), ft({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const h = Number(l.naturalWidth || l.width || 0), g = Number(l.naturalHeight || l.height || 0);
    if (h < 1 || g < 1) return null;
    const _ = document.createElement("canvas");
    _.width = h, _.height = g;
    const v = _.getContext("2d", { willReadFrequently: !0 });
    if (!v) return null;
    v.clearRect(0, 0, h, g), v.drawImage(l, 0, 0, h, g);
    const b = v.getImageData(0, 0, h, g).data, N = { canvas: _, width: h, height: g, alpha: b, ready: !0 };
    return It.set(a, N), N;
  }
  function yp(i, a, s = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((a == null ? void 0 : a.u) || 0), g = Number((a == null ? void 0 : a.v) || 0), _ = Ki(Number(i.u || 0), h), v = Number(i.v || 0) - g, b = Math.max(0.02, Number(s || 1)), N = Number(l || 0) * Oe, x = Math.cos(N), P = Math.sin(N), E = _ / b, T = v / b, R = E * x + T * P, G = -E * P + T * x;
    return {
      ...i,
      u: ((h + R) % 1 + 1) % 1,
      v: g + G
    };
  }
  function vp(i, a) {
    if (!i || !a) return null;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return null;
    const l = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, g = {
      u: ((Number(a.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(a.v || 0) - Number(l.dv || 0)
    }, _ = yp(
      g,
      h,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), v = Number(s.u1 || 0) - Number(s.u0 || 0), b = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(v > 1e-6) || !(b > 1e-6)) return null;
    const N = Ki(Number(_.u || 0), Number(s.u0 || 0)) / v, x = (Number(_.v || 0) - Number(s.v0 || 0)) / b;
    if (N < 0 || N > 1 || x < 0 || x > 1) return 0;
    const P = mp(i);
    if (!P) return null;
    const E = z(Math.floor(N * P.width), 0, P.width - 1), T = z(Math.floor(x * P.height), 0, P.height - 1);
    return Number(P.alpha[(T * P.width + E) * 4 + 3] || 0);
  }
  function Dl(i, a, s, l = null) {
    if (!(a != null && a.visible) || !nr(s, a.corners)) return !1;
    const h = l || vn(s, performance.now()), g = vp(i, h);
    return g === null ? !0 : g > 8;
  }
  function bp() {
    var l, h, g, _, v, b, N, x;
    const i = ((h = (l = d.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, Bi(!1))) || null, a = Math.max(1, Number(((g = i == null ? void 0 : i.descriptor) == null ? void 0 : g.width) || ((v = (_ = i == null ? void 0 : i.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : v.width) || 2048)), s = Math.max(1, Number(((b = i == null ? void 0 : i.descriptor) == null ? void 0 : b.height) || ((x = (N = i == null ? void 0 : i.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : x.height) || 1024));
    return { width: a, height: s };
  }
  function Rl(i = null) {
    var v, b, N, x, P, E, T, R, G, tt, gt, Nt, dt;
    si();
    const a = Array.isArray(i) ? i : Bi(!1), s = ((b = (v = d.paintEngine) == null ? void 0 : v.getErpTarget) == null ? void 0 : b.call(v, a)) || null, l = Math.max(1, Number(((N = s == null ? void 0 : s.descriptor) == null ? void 0 : N.width) || ((P = (x = s == null ? void 0 : s.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : P.width) || 2048)), h = Math.max(1, Number(((E = s == null ? void 0 : s.descriptor) == null ? void 0 : E.height) || ((R = (T = s == null ? void 0 : s.displayPaint) == null ? void 0 : T.canvas) == null ? void 0 : R.height) || 1024));
    (!d._rasterComposeSurface || Number(((G = d._rasterComposeSurface.canvas) == null ? void 0 : G.width) || 0) !== l || Number(((tt = d._rasterComposeSurface.canvas) == null ? void 0 : tt.height) || 0) !== h) && (d._rasterComposeSurface = Dr(l, h));
    const g = d._rasterComposeSurface;
    g.ctx.clearRect(0, 0, l, h);
    let _ = !1;
    for (const _t of Tr()) {
      if (_t.type === "strokeGroup") {
        const ht = ((Nt = (gt = d.paintEngine) == null ? void 0 : gt.getGroupDisplayCanvas) == null ? void 0 : Nt.call(gt, _t.actionGroupId)) || null;
        if (!ht) continue;
        g.ctx.drawImage(ht, 0, 0), _ = !0;
        continue;
      }
      if (_t.type === "rasterObject" && String(((dt = _t.item) == null ? void 0 : dt.layerKind) || "paint") === "paint") {
        const ht = Ko(_t.item, () => ft());
        if (!ht) continue;
        g.ctx.drawImage(ht, 0, 0), _ = !0;
      }
    }
    return _ ? g.canvas : null;
  }
  function _p(i = null) {
    var v, b, N, x, P, E, T;
    si();
    const a = i || ((b = (v = d.paintEngine) == null ? void 0 : v.getErpTarget) == null ? void 0 : b.call(v, Bi(!1))) || null, s = ((N = a == null ? void 0 : a.committedMask) == null ? void 0 : N.canvas) || null, l = Math.max(1, Number(((x = a == null ? void 0 : a.descriptor) == null ? void 0 : x.width) || (s == null ? void 0 : s.width) || 2048)), h = Math.max(1, Number(((P = a == null ? void 0 : a.descriptor) == null ? void 0 : P.height) || (s == null ? void 0 : s.height) || 1024)), g = ln().filter((R) => String((R == null ? void 0 : R.layerKind) || "paint") === "mask").slice().sort((R, G) => Number((R == null ? void 0 : R.z_index) || 0) - Number((G == null ? void 0 : G.z_index) || 0));
    if (!s && !g.length) return null;
    (!d._maskComposeSurface || Number(((E = d._maskComposeSurface.canvas) == null ? void 0 : E.width) || 0) !== l || Number(((T = d._maskComposeSurface.canvas) == null ? void 0 : T.height) || 0) !== h) && (d._maskComposeSurface = Dr(l, h));
    const _ = d._maskComposeSurface;
    _.ctx.clearRect(0, 0, l, h), s && _.ctx.drawImage(s, 0, 0);
    for (const R of g) {
      const G = Ko(R, () => ft());
      G && _.ctx.drawImage(G, 0, 0);
    }
    return _.canvas;
  }
  function wp() {
    var T, R, G;
    const i = d.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const a = (i == null ? void 0 : i.stroke) || null;
    if (!a || String((a == null ? void 0 : a.layerKind) || "") !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return null;
    const s = Yn(), l = `${Gi()}:${s.width}:${s.height}`;
    if (((T = d._activePaintEraserPreviewInfo) == null ? void 0 : T.cacheKey) === l)
      return d._activePaintEraserPreviewInfo.value || null;
    const h = an(a), g = (h == null ? void 0 : h.geometry) || null;
    if (g && String(g.geometryKind || "") !== "lasso_fill") {
      const tt = Array.isArray(g.rawPoints) && g.rawPoints.length ? g.rawPoints : Array.isArray(g.points) ? g.points : [];
      g.processedPoints = zs(tt, h.targetSpace, !0);
    }
    const _ = Dr(s.width, s.height);
    if (!Kl(_, h, { w: s.width, h: s.height })) return null;
    const v = ((G = (R = _.ctx) == null ? void 0 : R.getImageData(0, 0, s.width, s.height)) == null ? void 0 : G.data) || null;
    if (!v) return null;
    let b = s.width, N = s.height, x = -1, P = -1;
    for (let tt = 0; tt < s.height; tt += 1)
      for (let gt = 0; gt < s.width; gt += 1)
        v[(tt * s.width + gt) * 4 + 3] <= 8 || (gt < b && (b = gt), tt < N && (N = tt), gt > x && (x = gt), tt > P && (P = tt));
    if (x < b || P < N)
      return d._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const E = {
      surface: _,
      bounds: { minX: b, minY: N, maxX: x, maxY: P },
      key: `${l}:${b}:${N}:${x}:${P}`
    };
    return d._activePaintEraserPreviewInfo = { cacheKey: l, value: E }, d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), E;
  }
  function qi() {
    d._activePaintEraserPreviewInfo = null, d._liveEraserPreviewCanvasCache = null;
  }
  function xp(i, a, s) {
    var l, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((l = i.item) != null && l.bbox)) {
      const g = i.item.bbox, _ = ((h = i.item) == null ? void 0 : h.transform) || {}, v = Number(g.u0 || 0) + Number(_.du || 0), b = Number(g.u1 || 0) + Number(_.du || 0), N = Number(g.v0 || 0) + Number(_.dv || 0), x = Number(g.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((v % 1 + 1) % 1 * a),
        maxX: Math.ceil((b % 1 + 1) % 1 * a),
        minY: Math.floor(z(N, 0, 1) * s),
        maxY: Math.ceil(z(x, 0, 1) * s),
        wraps: b - v >= 1 || v < 0 || b > 1
      };
    }
    if (i.type === "strokeGroup") {
      const g = mn(i.actionGroupId, "paint"), _ = Er(i.actionGroupId, "paint", g);
      if (!_) return null;
      const v = _.centerUv.u - _.halfW, b = _.centerUv.u + _.halfW, N = _.centerUv.v - _.halfH, x = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((v % 1 + 1) % 1 * a),
        maxX: Math.ceil((b % 1 + 1) % 1 * a),
        minY: Math.floor(z(N, 0, 1) * s),
        maxY: Math.ceil(z(x, 0, 1) * s),
        wraps: b - v >= 1 || v < 0 || b > 1
      };
    }
    return null;
  }
  function Sp(i, a, s) {
    if (!i || !a) return !1;
    const l = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: s - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], h = l(i), g = l(a);
    return h.some((_) => g.some((v) => !(_.maxX < v.minX || v.maxX < _.minX || _.maxY < v.minY || v.maxY < _.minY)));
  }
  function Ol(i, a, s) {
    var P, E, T;
    if (!i || !a || !((P = s == null ? void 0 : s.surface) != null && P.canvas) || a.type !== "rasterObject") return i;
    const l = Number(i.width || s.surface.canvas.width || 0), h = Number(i.height || s.surface.canvas.height || 0);
    if (l < 1 || h < 1) return i;
    const g = xp(a, l, h);
    if (g && !Sp(g, s.bounds, l)) return i;
    const _ = String(((E = a.item) == null ? void 0 : E.id) || a.id || ""), v = ((T = a.item) == null ? void 0 : T.transform) || {}, b = `${s.key}:${_}:${l}:${h}:${Number(v.du || 0).toFixed(6)}:${Number(v.dv || 0).toFixed(6)}:${Number(v.rot_deg || 0).toFixed(3)}:${Number(v.scale || 1).toFixed(4)}`, N = d._liveEraserPreviewCanvasCache instanceof Map ? d._liveEraserPreviewCanvasCache : d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (N.has(b)) return N.get(b);
    const x = Dr(l, h);
    return x.ctx.clearRect(0, 0, l, h), x.ctx.drawImage(i, 0, 0), x.ctx.save(), x.ctx.globalCompositeOperation = "destination-out", x.ctx.drawImage(s.surface.canvas, 0, 0), x.ctx.restore(), N.size > 64 && N.clear(), N.set(b, x.canvas), x.canvas;
  }
  function Ko(i, a = null) {
    const s = Ge((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.bbox) || null;
    if (!s || !l) return null;
    const h = Ll(i, a);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: g, height: _ } = bp(), v = (i == null ? void 0 : i.transform) || {}, b = [
      s,
      g,
      _,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      v.du,
      v.dv,
      v.rot_deg,
      v.scale,
      Rr()
    ].join(":"), N = Yt.get(b);
    if (N) return N;
    Yt.size > 64 && Yt.clear();
    const x = document.createElement("canvas");
    x.width = g, x.height = _;
    const P = x.getContext("2d");
    if (!P) return null;
    const E = Number(l.u0 || 0) * g, T = Number(l.v0 || 0) * _, R = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * g), G = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * _), tt = E + R * 0.5 + Number(v.du || 0) * g, gt = T + G * 0.5 + Number(v.dv || 0) * _, Nt = Number(v.rot_deg || 0) * Oe, dt = Math.max(0.01, Number(v.scale || 1));
    for (const _t of [-g, 0, g])
      P.save(), P.translate(tt + _t, gt), P.rotate(Nt), P.scale(dt, dt), P.drawImage(h, -R * 0.5, -G * 0.5, R, G), P.restore();
    return Yt.set(b, x), x;
  }
  function Np(i) {
    return xs(p, {
      stickers: i ? [i] : [],
      selectedId: d.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Mp(i, a) {
    return lh(
      p,
      (s, l, h) => gp(h || s),
      { scene: a, stickers: i ? [i] : [] }
    );
  }
  function Wo(i, a, s, l, h = "modal_object_view") {
    var b, N, x, P, E;
    if (!i || !a || !s) return !1;
    let g = !1;
    const _ = wp();
    if (l && d.showPanorama) {
      const T = da({
        owner: t,
        cacheKey: `${h}_bg_only`,
        ctx: i,
        rect: a,
        img: l,
        view: s
      });
      g = g || !!T;
    }
    if (d.showObjects)
      for (const T of Ns(!0)) {
        if (T.type === "sticker" && T.item) {
          const R = Np(T.item), G = Mp(T.item, R), tt = ji({
            owner: t,
            cacheKey: `${h}_sticker_${String(T.id || T.item.id || "")}`,
            ctx: i,
            rect: a,
            backgroundSource: null,
            textures: G,
            scene: R,
            view: s
          });
          g = g || !!tt;
          continue;
        }
        if (T.type === "rasterObject" && T.item) {
          let R = Ko(T.item, () => ft());
          if (!R) continue;
          const G = _ ? `_${_.key}` : "";
          _ && (R = Ol(R, T, _));
          const tt = ((b = T.item) == null ? void 0 : b.transform) || {};
          da({
            owner: t,
            cacheKey: `${h}_raster_${String(T.id || T.item.id || "")}`,
            ctx: i,
            rect: a,
            img: R,
            view: s,
            backgroundRevision: `${ai()}_raster_${String(T.id || T.item.id || "")}_${Number(tt.du || 0).toFixed(6)}_${Number(tt.dv || 0).toFixed(6)}_${Number(tt.rot_deg || 0).toFixed(3)}_${Number(tt.scale || 1).toFixed(4)}${G}`,
            backgroundOpacity: 1
          }), g = !0;
          continue;
        }
        if (T.type === "strokeGroup") {
          let R = ((x = (N = d.paintEngine) == null ? void 0 : N.getGroupDisplayCanvas) == null ? void 0 : x.call(N, T.actionGroupId)) || null;
          if (!R) continue;
          _ && (R = Ol(R, T, _)), da({
            owner: t,
            cacheKey: `${h}_group_${String(T.actionGroupId || "")}`,
            ctx: i,
            rect: a,
            img: R,
            view: s,
            backgroundRevision: `${Rr()}_${String(T.actionGroupId || "")}${Gi()}`,
            backgroundOpacity: 1
          }), g = !0;
        }
      }
    const v = d.showMask && ((E = (P = d.paintEngine) == null ? void 0 : P.getMaskDisplayCanvas) == null ? void 0 : E.call(P)) || null;
    return v && (da({
      owner: t,
      cacheKey: `${h}_mask`,
      ctx: i,
      rect: a,
      img: v,
      view: s,
      backgroundRevision: `${Rr()}${Gi()}_mask`,
      backgroundOpacity: 1
    }), g = !0), g;
  }
  async function Es(i, a = "sticker.png") {
    const s = new FormData();
    s.append("image", i), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const l = await Je.fetchApi("/upload/image", { method: "POST", body: s });
    if (!l || l.status !== 200)
      throw new Error(`upload failed (${(l == null ? void 0 : l.status) || "no-response"})`);
    const h = await l.json(), g = String((h == null ? void 0 : h.name) || "").trim();
    if (!g)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: g,
      subfolder: String((h == null ? void 0 : h.subfolder) || "panorama_stickers"),
      storage: String((h == null ? void 0 : h.type) || "input"),
      name: String((i == null ? void 0 : i.name) || a)
    };
  }
  async function Ts(i, a) {
    const s = await new Promise((v) => i.toBlob(v, "image/png")), l = new FormData();
    l.append("image", s, a), l.append("type", "temp"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const h = await Je.fetchApi("/upload/image", { method: "POST", body: l });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const g = await h.json(), _ = String((g == null ? void 0 : g.name) || "").trim();
    if (!_) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: _,
      subfolder: String((g == null ? void 0 : g.subfolder) || "panorama_stickers"),
      storage: String((g == null ? void 0 : g.type) || "input")
    };
  }
  let Ls = null, qo = !1;
  function Pp() {
    const i = Bf(p.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const a = p.painting_layer, s = ai();
    return !a || typeof a != "object" || String(a.revision || "") !== s || i.totalPaintCount > 0 && !a.paint || i.totalMaskCount > 0 && !a.mask;
  }
  function Ds() {
    const i = String(t.id ?? "0"), a = yo.get(i);
    if (qo && a) return a;
    const s = (async () => {
      var g, _, v, b, N, x, P, E, T, R;
      const l = ai(), h = Bf(p.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        p.painting_layer !== null && (p.painting_layer = null, Ls = l, En());
        return;
      }
      if (Ls !== l && !qo) {
        qo = !0;
        try {
          si();
          const G = Bi(!1), tt = ((_ = (g = d.paintEngine) == null ? void 0 : g.getErpTarget) == null ? void 0 : _.call(g, G)) || null, gt = Rl(G), Nt = _p(tt), dt = Math.max(1, Number(((v = tt == null ? void 0 : tt.descriptor) == null ? void 0 : v.width) || (gt == null ? void 0 : gt.width) || (Nt == null ? void 0 : Nt.width) || 2048)), _t = Math.max(1, Number(((b = tt == null ? void 0 : tt.descriptor) == null ? void 0 : b.height) || (gt == null ? void 0 : gt.height) || (Nt == null ? void 0 : Nt.height) || 1024));
          (!gt && h.totalPaintCount > 0 || !Nt && h.totalMaskCount > 0) && ((!d._paintLayerSyncBlankSurface || Number(((N = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== dt || Number(((x = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : x.height) || 0) !== _t) && (d._paintLayerSyncBlankSurface = Dr(dt, _t)), d._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, dt, _t));
          const ht = gt || h.totalPaintCount > 0 && ((P = d._paintLayerSyncBlankSurface) == null ? void 0 : P.canvas) || null, xt = Nt || h.totalMaskCount > 0 && ((E = d._paintLayerSyncBlankSurface) == null ? void 0 : E.canvas) || null;
          if (!ht && !xt) return;
          let lt = null, B = null;
          const ot = [];
          if (h.totalPaintCount > 0) {
            lt = await Ts(ht, `pano_paint_${i}.png`);
            for (const Et of G) {
              const Ot = String(Et || "").trim();
              if (!Ot) continue;
              const Tt = ((R = (T = d.paintEngine) == null ? void 0 : T.getGroupDisplayCanvas) == null ? void 0 : R.call(T, Ot)) || null;
              if (!Tt) continue;
              const Vt = Ot.replace(/[^a-zA-Z0-9_-]+/g, "_"), Ut = await Ts(Tt, `pano_group_${i}_${Vt}.png`);
              Ut && ot.push({
                id: Ot,
                actionGroupId: Ot,
                image: Ut
              });
            }
          }
          h.totalMaskCount > 0 && (B = await Ts(xt, `pano_mask_${i}.png`)), l === ai() && (p.painting_layer = {
            paint: lt,
            mask: B,
            groups: ot,
            revision: l
          }, Ls = l, En());
        } catch (G) {
          console.warn("[pano] paint layer upload failed:", G);
        } finally {
          qo = !1;
        }
      }
    })();
    return yo.set(i, s), s.finally(() => {
      yo.get(i) === s && yo.delete(i);
    }), s;
  }
  function oi() {
    const i = bb(t, "pano_input_images", yt, () => ft());
    if (i) return i;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((_) => String((_ == null ? void 0 : _.name) || "")) : [], s = a.includes("erp_image"), l = a.includes("bg_erp");
    let h = [];
    return r && (s || l) ? h = s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : h = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Wf(t, h, () => ft(), `background:${h.join("|")}`);
  }
  function Yi() {
    const i = new Set(
      (p.stickers || []).map((a) => String((a == null ? void 0 : a.asset_id) || "")).filter((a) => !!a)
    );
    Object.keys(p.assets || {}).forEach((a) => {
      i.has(a) || (delete p.assets[a], yt.delete(a));
    });
  }
  function Rs(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(z(i.y, -1, 1))
    };
  }
  function Os(i, a = null) {
    const { lon: s, lat: l } = Rs(i), h = pr();
    let g = h.x + (s / (2 * Math.PI) + 0.5) * h.w;
    const _ = h.y + (0.5 - l / Math.PI) * h.h;
    if (a !== null) {
      for (; g - a > h.w / 2; ) g -= h.w;
      for (; g - a < -h.w / 2; ) g += h.w;
    }
    return { x: g, y: _, z: 1 };
  }
  function Yo(i) {
    const a = $n(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let s = Gn(0, 1, 0);
    Math.abs(xn(a, s)) > 0.999 && (s = Gn(0, 0, 1));
    const l = vi(Sa(s, a)), h = vi(Sa(a, l)), g = Math.tan(z(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * Oe), _ = Math.tan(z(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * Oe), v = Number(i.rot_deg || i.roll_deg || 0) * Oe, b = Math.cos(v), N = Math.sin(v);
    return {
      centerDir: a,
      right: l,
      up: h,
      tanX: g,
      tanY: _,
      cr: b,
      sr: N
    };
  }
  function gr(i, a, s) {
    const l = a * i.cr - s * i.sr, h = a * i.sr + s * i.cr;
    return vi(wa(wa(i.centerDir, xa(i.right, l)), xa(i.up, h)));
  }
  function Fl(i) {
    const a = Yo(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: h }) => gr(a, l * a.tanX, h * a.tanY));
  }
  function $l(i, a, s) {
    const l = Yo(i), h = (a * 2 - 1) * l.tanX, g = (1 - s * 2) * l.tanY;
    return gr(l, h, g);
  }
  function kp(i) {
    const a = (i == null ? void 0 : i.bbox) || null, s = (i == null ? void 0 : i.transform) || {};
    return a ? {
      u: (((Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: z((Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Cp(i) {
    var b, N, x, P;
    const a = (i == null ? void 0 : i.bbox) || null;
    if (!a) return [];
    const s = {
      u: (Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5,
      v: (Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((b = i == null ? void 0 : i.transform) == null ? void 0 : b.scale) || 1)), h = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.rot_deg) || 0), g = Number(((x = i == null ? void 0 : i.transform) == null ? void 0 : x.du) || 0), _ = Number(((P = i == null ? void 0 : i.transform) == null ? void 0 : P.dv) || 0);
    return [
      { u: Number(a.u0 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v1 || 0) },
      { u: Number(a.u0 || 0), v: Number(a.v1 || 0) }
    ].map((E) => zo(jo(E, s, l, h), g, _));
  }
  function Ap(i) {
    const a = Ge((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), s = (i == null ? void 0 : i.transform) || {}, l = (i == null ? void 0 : i.bbox) || {}, h = `${a}:${d.mode}:${Rr()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (d.mode === "frame") {
      const g = re(), _ = g ? qe(g) : null;
      return `${h}:frame:${String((g == null ? void 0 : g.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Ip(i) {
    const a = String((i == null ? void 0 : i.id) || ""), l = [
      gn(i) ? "frame" : Le(i) ? "sticker" : "item",
      a,
      d.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      bi(i)
    ].join(":");
    if (d.mode === "frame") {
      const h = re(), g = h ? qe(h) : null;
      return `${l}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Ep() {
    var a;
    const i = String(((a = p.ui_settings) == null ? void 0 : a.preview_quality) || "balanced");
    return i === "draft" ? d.hqFrames && d.hqFrames > 0 ? [28, 20] : d.interaction ? [12, 9] : [20, 14] : i === "high" ? d.hqFrames && d.hqFrames > 0 ? [48, 36] : d.interaction ? [20, 14] : [36, 26] : d.hqFrames && d.hqFrames > 0 ? [40, 30] : d.interaction ? [16, 12] : [28, 20];
  }
  function Tp(i = !1) {
    const a = C.width, s = C.height, l = pr();
    if (S.globalAlpha = 1, S.lineWidth = 1, i || (S.fillStyle = "#070707", S.fillRect(0, 0, a, s), S.fillStyle = "#070707", S.fillRect(l.x, l.y, l.w, l.h)), si(), Wo(
      S,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      oi(),
      "modal_unwrap"
    ), d.showGrid && !d.fullscreen) {
      S.strokeStyle = "#3f3f46";
      for (let g = 0; g <= 16; g += 1) {
        const _ = l.x + l.w * g / 16;
        S.beginPath(), S.moveTo(_, l.y), S.lineTo(_, l.y + l.h), S.stroke();
      }
      for (let g = 0; g <= 8; g += 1) {
        const _ = l.y + l.h * g / 8;
        S.beginPath(), S.moveTo(l.x, _), S.lineTo(l.x + l.w, _), S.stroke();
      }
      S.strokeStyle = "rgba(250, 250, 250, 0.86)", S.lineWidth = 1.2, S.beginPath(), S.moveTo(l.x, l.y + l.h / 2), S.lineTo(l.x + l.w, l.y + l.h / 2), S.stroke(), S.fillStyle = "rgba(250, 250, 250, 0.42)", S.font = "500 11px Geist, sans-serif", S.textAlign = "center";
      const h = l.y + l.h * 0.57;
      S.fillText("Left", l.x + l.w * 0.25, h), S.fillText("Front", l.x + l.w * 0.5, h), S.fillText("Right", l.x + l.w * 0.75, h), S.fillText("Back", l.x + 38, h), S.fillText("Back", l.x + l.w - 38, h);
    }
  }
  function Vl(i, a, s = 1) {
    let l = !1;
    S.strokeStyle = a, S.lineWidth = s, S.beginPath();
    for (const h of i) {
      const g = Wi(h);
      if (!g) {
        l = !1;
        continue;
      }
      l ? S.lineTo(g.x, g.y) : (S.moveTo(g.x, g.y), l = !0);
    }
    S.stroke();
  }
  function Lp(i = !1) {
    const a = C.width, s = C.height;
    if (i || (S.fillStyle = "#070707", S.fillRect(0, 0, a, s)), si(), Wo(
      S,
      { x: 0, y: 0, w: a, h: s },
      {
        mode: "panorama",
        yawDeg: d.viewYaw,
        pitchDeg: d.viewPitch,
        fovDeg: d.viewFov
      },
      oi(),
      "modal_pano"
    ), d.showGrid && !d.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const g = [];
        for (let _ = -89; _ <= 89; _ += 4) g.push($n(h, _));
        Vl(g, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const g = [];
        for (let _ = -180; _ <= 180; _ += 4) g.push($n(_, h));
        Vl(g, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: $n(-90, 0) },
        { name: "Front", dir: $n(0, 0) },
        { name: "Right", dir: $n(90, 0) },
        { name: "Back", dir: $n(180, 0) }
      ];
      S.fillStyle = "rgba(250, 250, 250, 0.42)", S.font = "500 11px Geist, sans-serif", S.textAlign = "center", l.forEach((h) => {
        const g = Wi(h.dir);
        g && S.fillText(h.name, g.x, g.y + 24);
      });
    }
  }
  function Hl(i, a = null, s = null) {
    if (d.mode === "frame") {
      const l = a || re();
      if (!l) return [];
      const h = s || qe(l);
      return fg(i, l, h);
    }
    return cg(i);
  }
  function Dp(i, a) {
    const s = String(i.actionGroupId || i.id || "").trim(), l = mn(s, i.layerKind), h = [], g = [], _ = d.mode === "frame" ? re() : null, v = _ ? qe(_) : null;
    for (const dt of l) {
      const _t = (dt == null ? void 0 : dt.geometry) || null, ht = (_t == null ? void 0 : _t.geometryKind) === "lasso_fill" ? _t == null ? void 0 : _t.points : (_t == null ? void 0 : _t.processedPoints) || (_t == null ? void 0 : _t.rawPoints) || (_t == null ? void 0 : _t.points) || [], xt = Hl(ht, _, v).filter((ot) => Number.isFinite(ot == null ? void 0 : ot.x) && Number.isFinite(ot == null ? void 0 : ot.y));
      if (!xt.length) continue;
      g.push(...xt);
      const lt = br(String((dt == null ? void 0 : dt.toolKind) || "pen")), B = on[lt] || on[er];
      h.push({
        points: xt,
        closed: String((_t == null ? void 0 : _t.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((dt == null ? void 0 : dt.size) || 10) * Math.max(0.1, Number((B == null ? void 0 : B.sizeScale) ?? 1)) + 10),
        layerKind: String((dt == null ? void 0 : dt.layerKind) || i.layerKind || "paint")
      });
    }
    if (!g.length) {
      const dt = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(a, dt), dt;
    }
    let b = 1 / 0, N = 1 / 0, x = -1 / 0, P = -1 / 0;
    for (const dt of h)
      for (const ht of Array.isArray(dt == null ? void 0 : dt.points) ? dt.points : []) {
        const xt = Number((ht == null ? void 0 : ht.x) || 0), lt = Number((ht == null ? void 0 : ht.y) || 0);
        b = Math.min(b, xt - 2), N = Math.min(N, lt - 2), x = Math.max(x, xt + 2), P = Math.max(P, lt + 2);
      }
    if (!Number.isFinite(b) || !Number.isFinite(N) || !Number.isFinite(x) || !Number.isFinite(P)) {
      const dt = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(a, dt), dt;
    }
    const E = [
      { x: b, y: N },
      { x, y: N },
      { x, y: P },
      { x: b, y: P }
    ], T = { x: (b + x) * 0.5, y: (N + P) * 0.5 }, R = { x: T.x, y: N }, G = { x, y: T.y }, tt = { x: T.x, y: P }, gt = { x: b, y: T.y }, Nt = {
      kind: "strokeGroup",
      center: T,
      corners: E,
      edgeMidpoints: [
        { edge: "top", x: R.x, y: R.y, a: E[0], b: E[1] },
        { edge: "right", x: G.x, y: G.y, a: E[1], b: E[2] },
        { edge: "bottom", x: tt.x, y: tt.y, a: E[2], b: E[3] },
        { edge: "left", x: gt.x, y: gt.y, a: E[3], b: E[0] }
      ],
      rotateStemBase: R,
      rotateHandle: { x: R.x, y: R.y - 30 },
      strokePaths: h,
      visible: !0
    };
    return d._strokeGeomCache.set(a, Nt), Nt;
  }
  function Rp(i, a) {
    const s = Cp(i), l = Hl(s);
    if (!Array.isArray(l) || l.length < 4) {
      const v = { visible: !1, kind: "rasterObject" };
      return d._strokeGeomCache.set(a, v), v;
    }
    const h = l.slice(0, 4).map((v) => ({ x: Number((v == null ? void 0 : v.x) || 0), y: Number((v == null ? void 0 : v.y) || 0) })), _ = {
      kind: "rasterObject",
      center: {
        x: h.reduce((v, b) => v + Number(b.x || 0), 0) / h.length,
        y: h.reduce((v, b) => v + Number(b.y || 0), 0) / h.length
      },
      corners: h,
      visible: !0
    };
    return d._strokeGeomCache.set(a, _), _;
  }
  function mr(i, a = null, s = null, l = null) {
    if (d.mode === "frame") {
      const Nt = s || re(), dt = l || qe(Nt), _t = Nt ? Ji(Nt, i) : null;
      return _t ? {
        x: Number(dt.x || 0) + Number(_t.x || 0) * Number(dt.w || 0),
        y: Number(dt.y || 0) + Number(_t.y || 0) * Number(dt.h || 0),
        z: 1
      } : null;
    }
    if (d.mode === "unwrap") return Os(i, a);
    const { right: h, up: g, fwd: _ } = As(), v = xn(i, h), b = xn(i, g), N = xn(i, _), x = C.width, P = C.height, E = d.viewFov * Oe, T = 2 * Math.atan(Math.tan(E / 2) * (P / Math.max(x, 1))), R = x / 2 / Math.tan(E / 2), G = P / 2 / Math.tan(T / 2), tt = Math.max(N, 1e-4), gt = Math.max(x, P) * 2;
    return {
      x: z(x / 2 + v / tt * R, -gt, x + gt),
      y: z(P / 2 - b / tt * G, -gt, P + gt),
      z: tt
    };
  }
  function Op(i) {
    const a = $n(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), s = d.mode === "frame" ? re() : null, l = s ? qe(s) : null, h = mr(a, null, s, l);
    if (!h) return { visible: !1 };
    const g = Yo(i), v = Fl(i).map((ht) => mr(ht, h.x, s, l)), b = gr(g, 0, g.tanY), N = gr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), x = mr(b, h.x, s, l), P = mr(N, (x == null ? void 0 : x.x) ?? h.x, s, l), E = ((P == null ? void 0 : P.x) ?? x.x) - x.x, T = ((P == null ? void 0 : P.y) ?? x.y) - x.y, R = Math.hypot(E, T) || 1, G = {
      x: x.x + E / R * 30,
      y: x.y + T / R * 30
    }, tt = mr(gr(g, 0, g.tanY), h.x, s, l), gt = mr(gr(g, g.tanX, 0), h.x, s, l), Nt = mr(gr(g, 0, -g.tanY), h.x, s, l), dt = mr(gr(g, -g.tanX, 0), h.x, s, l), _t = [
      {
        edge: "top",
        x: tt.x,
        y: tt.y,
        a: { x: v[0].x, y: v[0].y },
        b: { x: v[1].x, y: v[1].y }
      },
      {
        edge: "right",
        x: gt.x,
        y: gt.y,
        a: { x: v[1].x, y: v[1].y },
        b: { x: v[2].x, y: v[2].y }
      },
      {
        edge: "bottom",
        x: Nt.x,
        y: Nt.y,
        a: { x: v[2].x, y: v[2].y },
        b: { x: v[3].x, y: v[3].y }
      },
      {
        edge: "left",
        x: dt.x,
        y: dt.y,
        a: { x: v[3].x, y: v[3].y },
        b: { x: v[0].x, y: v[0].y }
      }
    ];
    return {
      center: { x: h.x, y: h.y },
      corners: v.map((ht) => ({ x: ht.x, y: ht.y })),
      edgeMidpoints: _t,
      rotateStemBase: { x: x.x, y: x.y },
      rotateHandle: G,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function De(i) {
    if (Ae(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), g = Wh(h, i.layerKind), _ = d._strokeGeomCache.get(g);
      return _ || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), Dp(i, g));
    }
    if (Ke(i)) {
      const h = Ap(i), g = d._strokeGeomCache.get(h);
      return g || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), Rp(i, h));
    }
    const a = Ip(i), s = d._strokeGeomCache.get(a);
    if (s) return s;
    d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear();
    const l = Op(i);
    return d._strokeGeomCache.set(a, l), l;
  }
  function Xo(i, a, s, l = null) {
    const h = [];
    for (let g = 0; g <= s; g += 1) {
      const _ = g / s;
      let v = 0, b = 0;
      a === 0 ? (v = _, b = 0) : a === 1 ? (v = 1, b = _) : a === 2 ? (v = 1 - _, b = 1) : (v = 0, b = 1 - _);
      const N = $l(i, v, b), x = d.mode === "unwrap" ? Os(N, l) : Wi(N);
      x && h.push(x);
    }
    return h;
  }
  function Fp(i, a) {
    const s = $n(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = d.mode === "unwrap" ? Os(s) : null, h = l ? l.x : null, g = d.mode === "pano" ? 28 : 20, _ = [
      Xo(i, 0, g, h),
      Xo(i, 1, g, h),
      Xo(i, 2, g, h),
      Xo(i, 3, g, h)
    ];
    S.strokeStyle = a ? "rgba(250, 250, 250, 0.9)" : "#71717a", S.lineWidth = a ? 2 : 1, S.beginPath();
    let v = !1;
    for (const b of _)
      for (const N of b)
        v ? S.lineTo(N.x, N.y) : (S.moveTo(N.x, N.y), v = !0);
    S.closePath(), S.stroke();
  }
  function $p() {
    const i = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(s.z_index || 0) - Number(l.z_index || 0));
    if (d.mode === "frame") return i;
    const a = Array.isArray(p.shots) ? p.shots : [];
    return [...i, ...a];
  }
  function Fs() {
    const i = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(l.z_index || 0) - Number(s.z_index || 0));
    if (d.mode === "frame") return i;
    const a = Array.isArray(p.shots) ? p.shots : [];
    return [...i, ...a];
  }
  function $s(i, a = []) {
    if (!(!i || !Array.isArray(a) || a.length < 4)) {
      i.beginPath(), i.moveTo(a[0].x, a[0].y);
      for (let s = 1; s < 4; s += 1) i.lineTo(a[s].x, a[s].y);
      i.closePath();
    }
  }
  function Vp(i, a, s, l) {
    if (Le(i)) {
      const h = S.globalAlpha;
      S.globalAlpha = tp(i), d.mode === "frame" ? (S.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", S.lineWidth = s ? 2 : 1, $s(S, a.corners), S.stroke()) : Fp(i, s), S.globalAlpha = h;
      return;
    }
    S.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", $s(S, a.corners), S.fill(), S.strokeStyle = s ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", S.lineWidth = s ? 2.8 : 1.9, $s(S, a.corners), S.stroke();
  }
  function Hp(i, a, s) {
    S.fillStyle = s, a.corners.forEach((l) => {
      S.beginPath(), S.arc(l.x, l.y, 6.5, 0, Math.PI * 2), S.fill();
    }), gn(i) && (S.strokeStyle = s, S.lineCap = "round", S.lineWidth = 4, a.edgeMidpoints.forEach((l) => {
      var x, P, E, T;
      const h = (((x = l.b) == null ? void 0 : x.x) ?? l.x) - (((P = l.a) == null ? void 0 : P.x) ?? l.x), g = (((E = l.b) == null ? void 0 : E.y) ?? l.y) - (((T = l.a) == null ? void 0 : T.y) ?? l.y), _ = Math.hypot(h, g) || 1, v = h / _, b = g / _, N = 10;
      S.beginPath(), S.moveTo(l.x - v * N, l.y - b * N), S.lineTo(l.x + v * N, l.y + b * N), S.stroke();
    }), S.lineCap = "butt"), Ae(i) || (S.strokeStyle = "rgba(250, 250, 250, 0.9)", S.lineWidth = 1.8, S.beginPath(), S.moveTo(a.rotateStemBase.x, a.rotateStemBase.y), S.lineTo(a.rotateHandle.x, a.rotateHandle.y), S.stroke(), S.fillStyle = s, S.beginPath(), S.arc(a.rotateHandle.x, a.rotateHandle.y, 10, 0, Math.PI * 2), S.fill());
  }
  function zp() {
    var v;
    const [i, a] = Ep(), s = An(), l = s.length > 1, h = e === "cutout" ? $p() : rn(), g = h.map((b) => `${String((b == null ? void 0 : b.id) || "")}:${gn(b) ? "frame" : Number((b == null ? void 0 : b.z_index) || 0)}`).join("|");
    (!d._sortedItemsCache || d._sortedItemsCache.src !== h || d._sortedItemsCache.orderKey !== g) && (d._sortedItemsCache = {
      src: h,
      orderKey: g,
      sorted: [...h]
    });
    const _ = d._sortedItemsCache.sorted;
    for (const b of _) {
      const N = !l && qh(b);
      if (d.mode === "frame" && !N || !d.showObjects && !gn(b)) continue;
      const x = De(b);
      if (e !== "stickers" && !x.visible)
        continue;
      const P = Le(b), E = hr(b);
      if (Vp(b, x, N, E), N && x.visible) {
        const T = E ? "#ff4d4f" : P && Pe(b) ? "#f59e0b" : "#0070f3";
        Hp(b, x, T);
      }
    }
    if (l) {
      const b = Ps(s);
      if (b != null && b.visible) {
        const N = ks(s) ? "#ff4d4f" : "#0070f3";
        S.save(), S.strokeStyle = "rgba(255, 255, 255, 0.95)", S.lineWidth = 2, S.setLineDash([6, 4]), S.beginPath(), S.moveTo(b.corners[0].x, b.corners[0].y);
        for (let x = 1; x < b.corners.length; x += 1) S.lineTo(b.corners[x].x, b.corners[x].y);
        S.closePath(), S.stroke(), S.setLineDash([]), S.fillStyle = N, b.corners.forEach((x) => {
          S.beginPath(), S.arc(x.x, x.y, 6.5, 0, Math.PI * 2), S.fill();
        }), S.restore();
      }
    } else
      s.forEach((b) => {
        if (!Ae(b) && !Ke(b)) return;
        const N = De(b);
        if (!(N != null && N.visible)) return;
        const x = hr(b) ? "#ff4d4f" : "#0070f3";
        S.save(), S.strokeStyle = "rgba(255, 255, 255, 0.95)", S.lineWidth = 2, S.setLineDash([6, 4]), S.beginPath(), S.moveTo(N.corners[0].x, N.corners[0].y);
        for (let P = 1; P < N.corners.length; P += 1) S.lineTo(N.corners[P].x, N.corners[P].y);
        S.closePath(), S.stroke(), S.setLineDash([]), Ae(b) && (S.fillStyle = x, N.corners.forEach((P) => {
          S.beginPath(), S.arc(P.x, P.y, 6.5, 0, Math.PI * 2), S.fill();
        })), S.restore();
      });
    if (((v = d.interaction) == null ? void 0 : v.kind) === "marquee_select") {
      const b = su(d.interaction.start, d.interaction.current);
      S.save(), S.strokeStyle = "rgba(255, 255, 255, 0.9)", S.fillStyle = "rgba(255, 255, 255, 0.08)", S.lineWidth = 1, S.setLineDash([5, 4]), S.beginPath(), S.rect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0), S.fill(), S.stroke(), S.restore();
    }
    d.hqFrames && i >= 40 && a >= 30 && (d.hqFrames -= 1, d.hqFrames > 0 && ft());
  }
  function zl(i) {
    const a = ki(i), s = z(Number((a == null ? void 0 : a.aspect) || 1), 0.05, 20), l = 320;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function jp() {
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
  function jl(i, a = {}) {
    if (!i) return "";
    const s = oi(), l = s && (s.complete || s.naturalWidth || s.width) ? [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|") : "no_bg", h = zl(i);
    return [
      String((i == null ? void 0 : i.id) || ""),
      JSON.stringify(i || null),
      ai(),
      jp(),
      Gi(),
      l,
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(a.quality || "balanced")
    ].join("|");
  }
  function Ul(i = {}) {
    var v, b;
    if (e !== "cutout") return null;
    const a = i.shot || re();
    if (!a)
      return t.__panoCutoutPreviewSurface = null, null;
    const s = zl(a);
    (!t.__panoCutoutPreviewCanvas || Number(t.__panoCutoutPreviewCanvas.width || 0) !== s.width || Number(t.__panoCutoutPreviewCanvas.height || 0) !== s.height) && (t.__panoCutoutPreviewCanvas = document.createElement("canvas"), t.__panoCutoutPreviewCanvas.width = s.width, t.__panoCutoutPreviewCanvas.height = s.height);
    const l = jl(a, i);
    if (((v = t.__panoCutoutPreviewSurface) == null ? void 0 : v.source) === t.__panoCutoutPreviewCanvas && ((b = t.__panoCutoutPreviewSurface) == null ? void 0 : b.revision) === l)
      return t.__panoCutoutPreviewSurface;
    const h = t.__panoCutoutPreviewCanvas, g = h.getContext("2d");
    return g ? Bp(
      g,
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
  function Up() {
    if (e !== "cutout") return;
    const i = re();
    if (!i) {
      d.outputPreviewRect = null, F && (F.style.display = "none");
      return;
    }
    const a = 14, s = z(Number(d.outputPreviewAnim ?? (d.outputPreviewExpanded ? 1 : 0)), 0, 1), l = Math.max(120, Math.min(250, C.width * 0.28)), h = Math.max(260, Math.min(560, C.width * 0.62)), g = Math.max(76, Math.min(150, C.height * 0.22)), _ = Math.max(160, Math.min(340, C.height * 0.48)), v = Sn(l, h, s), b = Sn(g, _, s), N = ki(i), x = Number((N == null ? void 0 : N.aspect) || 1);
    let P = v, E = P / x;
    E > b && (E = b, P = E * x);
    const T = C.width - a - P, R = a, G = 12;
    d.outputPreviewRect = { x: T, y: R, w: P, h: E };
    const tt = () => {
      if (!F) return;
      const xt = `${Math.round(T + P - 8 - 24)}px`, lt = `${Math.round(R + 8)}px`;
      F.style.display = "inline-flex", F.style.left !== xt && (F.style.left = xt), F.style.top !== lt && (F.style.top = lt);
    }, gt = (xt, lt, B, ot, Et) => {
      const Ot = Math.max(0, Math.min(Et, Math.min(B, ot) * 0.5));
      S.beginPath(), typeof S.roundRect == "function" ? S.roundRect(xt, lt, B, ot, Ot) : (S.moveTo(xt + Ot, lt), S.arcTo(xt + B, lt, xt + B, lt + ot, Ot), S.arcTo(xt + B, lt + ot, xt, lt + ot, Ot), S.arcTo(xt, lt + ot, xt, lt, Ot), S.arcTo(xt, lt, xt + B, lt, Ot)), S.closePath();
    };
    S.save(), S.shadowColor = "rgba(0, 0, 0, 0.45)", S.shadowBlur = 22, S.shadowOffsetX = 0, S.shadowOffsetY = 8, S.fillStyle = "rgba(10, 10, 10, 0.72)", gt(T, R, P, E, G), S.fill(), S.restore(), S.save(), gt(T, R, P, E, G), S.clip();
    const Nt = jl(i, { quality: "balanced" });
    let dt = t.__panoCutoutPreviewSurface;
    (!dt || dt.revision !== Nt) && !d.interaction && !d.cutoutPreviewSurfaceRaf && !d.cutoutPreviewSurfaceTimer && (dt = Ul({ shot: i, quality: "balanced" }));
    const _t = (dt == null ? void 0 : dt.source) || null, ht = !!(_t && Number(_t.width || 0) > 1 && Number(_t.height || 0) > 1);
    if ((dt == null ? void 0 : dt.revision) !== Nt && Vs(), !ht) {
      S.fillStyle = "rgba(255, 255, 255, 0.06)", S.fillRect(T, R, P, E), S.strokeStyle = "rgba(255, 255, 255, 0.12)", S.lineWidth = 1, S.strokeRect(T + 0.5, R + 0.5, P - 1, E - 1), Vs(), S.restore(), tt();
      return;
    }
    S.drawImage(_t, T, R, P, E), S.restore(), tt();
  }
  function Bp(i, a, s, l = {}) {
    const h = oi();
    return av({
      owner: t,
      ctx: i,
      rect: a,
      shot: s,
      bgImage: h,
      cachePrefix: String(l.cachePrefix || "modal_cutout_output_preview"),
      quality: String(l.quality || "balanced"),
      drawDisplayList: Wo
    });
  }
  function Gp() {
    Ul();
  }
  function Vs() {
    if (e !== "cutout") return;
    const i = performance.now(), a = Kh(), s = i - Number(d.cutoutPreviewSurfaceLastTs || 0);
    if (d.cutoutPreviewSurfaceRaf || d.cutoutPreviewSurfaceTimer) return;
    const l = () => {
      d.cutoutPreviewSurfaceRaf = requestAnimationFrame(() => {
        var h, g, _, v, b, N, x, P;
        d.cutoutPreviewSurfaceRaf = 0, d.cutoutPreviewSurfaceLastTs = performance.now(), Gp(), kt.dirty = !0, (g = (h = t.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || g.call(h), (_ = t.setDirtyCanvas) == null || _.call(t, !0, !1), (b = (v = t.graph) == null ? void 0 : v.setDirtyCanvas) == null || b.call(v, !0, !0), (P = (x = (N = dn) == null ? void 0 : N.canvas) == null ? void 0 : x.setDirty) == null || P.call(x, !0, !0);
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
  function Hs(i, a) {
    if (!i || !a) return null;
    const s = Number(a.x || 0), l = Number(a.y || 0);
    return $l(i, s, l);
  }
  function Xi(i) {
    if (!i) return null;
    const a = (Number(i.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(i.v || 0)) * Math.PI, l = Math.cos(s);
    return Gn(l * Math.sin(a), Math.sin(s), l * Math.cos(a));
  }
  function We(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function yr(i, a, s, l = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Ve(i, "widthScale", 1),
      pressureLike: Ve(i, "pressureLike", 1)
    }, ...l, u: a, v: s };
  }
  function Kp(i, a, s) {
    const l = We(i), h = We(a);
    return yr(i, Sn(l.x, h.x, s), Sn(l.y, h.y, s), {
      t: Sn(Number((i == null ? void 0 : i.t) || 0), Number((a == null ? void 0 : a.t) || 0), s),
      widthScale: Sn(Ve(i, "widthScale", 1), Ve(a, "widthScale", 1), s),
      pressureLike: Sn(Ve(i, "pressureLike", 1), Ve(a, "pressureLike", 1), s)
    });
  }
  function Wp(i, a = !1) {
    return a ? 12e-4 : 18e-4;
  }
  function zs(i, a, s = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    if (i.length === 1) return [yr(i[0], We(i[0]).x, We(i[0]).y)];
    const l = Wp(a, s), h = (x, P) => {
      const E = [0];
      for (let _t = 1; _t < x.length; _t += 1) {
        const ht = We(x[_t - 1]), xt = We(x[_t]);
        E.push(E[_t - 1] + Math.hypot(xt.x - ht.x, xt.y - ht.y));
      }
      const T = E[E.length - 1] || 0;
      if (T <= 1e-8) {
        const _t = x[0], ht = We(_t);
        return [yr(_t, ht.x, ht.y)];
      }
      const R = [];
      let G = 0;
      for (let _t = 0; _t <= T + 1e-9; _t += P) {
        for (; G < E.length - 2 && E[G + 1] < _t; ) G += 1;
        const ht = E[G], xt = E[G + 1], lt = Math.max(1e-8, xt - ht);
        R.push(Kp(x[G], x[G + 1], z((_t - ht) / lt, 0, 1)));
      }
      const tt = x[x.length - 1], gt = We(tt), Nt = R[R.length - 1], dt = Nt ? We(Nt) : null;
      return (!dt || Math.hypot(dt.x - gt.x, dt.y - gt.y) > P * 0.35) && R.push(yr(tt, gt.x, gt.y)), R;
    }, g = (x) => {
      if (!Array.isArray(x) || x.length < 3) return x ? x.slice() : [];
      const P = [yr(x[0], We(x[0]).x, We(x[0]).y)];
      for (let E = 0; E < x.length - 1; E += 1) {
        const T = x[E], R = x[E + 1], G = We(T), tt = We(R), gt = yr(
          T,
          G.x * 0.75 + tt.x * 0.25,
          G.y * 0.75 + tt.y * 0.25,
          {
            t: Number(T.t || 0) * 0.75 + Number(R.t || 0) * 0.25,
            widthScale: Ve(T, "widthScale", 1) * 0.75 + Ve(R, "widthScale", 1) * 0.25,
            pressureLike: Ve(T, "pressureLike", 1) * 0.75 + Ve(R, "pressureLike", 1) * 0.25
          }
        ), Nt = yr(
          T,
          G.x * 0.25 + tt.x * 0.75,
          G.y * 0.25 + tt.y * 0.75,
          {
            t: Number(T.t || 0) * 0.25 + Number(R.t || 0) * 0.75,
            widthScale: Ve(T, "widthScale", 1) * 0.25 + Ve(R, "widthScale", 1) * 0.75,
            pressureLike: Ve(T, "pressureLike", 1) * 0.25 + Ve(R, "pressureLike", 1) * 0.75
          }
        );
        P.push(gt, Nt);
      }
      return P.push(yr(x[x.length - 1], We(x[x.length - 1]).x, We(x[x.length - 1]).y)), P;
    }, _ = h(i, l);
    if (_.length < 3) return _;
    const v = s ? 2 : 1;
    let b = _.slice();
    for (let x = 0; x < v; x += 1) b = g(b);
    return h(b, Math.max(l * 0.75, 55e-5));
  }
  function Ve(i, a, s = 1) {
    const l = Number(i == null ? void 0 : i[a]);
    return Number.isFinite(l) ? Math.max(0, l) : s;
  }
  function qp(i) {
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
  function Dr(i, a) {
    const s = document.createElement("canvas");
    s.width = Math.max(1, Math.round(i)), s.height = Math.max(1, Math.round(a));
    const l = s.getContext("2d");
    return l && (l.clearRect(0, 0, s.width, s.height), l.imageSmoothingEnabled = !0), { canvas: s, ctx: l };
  }
  function Rr() {
    const i = Zo();
    return `${String(d.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function ai() {
    const i = Zo();
    return `${String(d.paintStrokeRevision)}:${String(d.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Yp() {
    d.paintStrokeRevision += 1, d.paintCompositeRevision += 1;
  }
  function Xp() {
    d.paintCompositeRevision += 1;
  }
  function Zp() {
    d._sortedItemsCache = null, d._strokeGeomCache.clear();
  }
  function Bl() {
    var i, a;
    d.paintEngineRevisionKey = null, (a = (i = d.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || a.call(i, p), d.paintEngineRevisionKey = Rr();
  }
  function yn() {
    d.objectVisualRevision = Number(d.objectVisualRevision || 0) + 1, Zp();
  }
  function In({ rebuildPaintEngine: i = !1 } = {}) {
    Yp(), yn(), i && Bl();
  }
  function Zi() {
    Xp(), yn();
  }
  function si() {
    var l;
    const i = Zo(), a = `${i.width}x${i.height}`;
    d.paintEngineDescriptorKey !== a && (d.paintEngine = Oc(i), d.paintEngineDescriptorKey = a, d.paintEngineRevisionKey = "");
    const s = Rr();
    d.paintEngineRevisionKey !== s && (d.paintEngineRevisionKey = s, (l = d.paintEngine) == null || l.rebuildCommitted(p));
  }
  function Zo() {
    const i = oi(), a = Number((i == null ? void 0 : i.naturalWidth) || (i == null ? void 0 : i.width) || 0), s = Number((i == null ? void 0 : i.naturalHeight) || (i == null ? void 0 : i.height) || 0);
    if (a > 1 && s > 1)
      return { kind: "ERP_GLOBAL", width: a, height: s };
    const l = Math.max(1, Number((p == null ? void 0 : p.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: l,
      height: Math.max(1, Math.round(l * 0.5))
    };
  }
  function Yn() {
    return Zo();
  }
  function Jp(i, a, s, l, h = null) {
    const g = qp(i), _ = Ve(a, "widthScale", 1) * Ve(a, "pressureLike", 1);
    return g.model === "erp_uv_norm" ? Math.max(0.5, g.value * s * _) : g.model === "world_angle" ? h ? Math.max(0.5, g.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Oe) * s * _) : Math.max(0.5, g.value / (2 * Math.PI) * s * _) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * _);
  }
  function Qp(i, a, s = {}) {
    const l = String((a == null ? void 0 : a.layerKind) || "paint"), h = String((a == null ? void 0 : a.toolKind) || "pen"), g = s.preview === !0, _ = g ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * _ : 1, l === "mask") {
      i.fillStyle = g ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const v = String((a == null ? void 0 : a.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (a == null ? void 0 : a.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, b = g ? Math.max(0.28, Number(v.a ?? 1) * 0.88) : Math.max(0.12, Number(v.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(v.r || 0) * 255)}, ${Math.round(Number(v.g || 0) * 255)}, ${Math.round(Number(v.b || 0) * 255)}, ${b})`;
  }
  function tg(i, a, s) {
    const l = Math.max(0.5, Math.min(s, Number((a == null ? void 0 : a.radiusPx) || 0.5)));
    !Number.isFinite(a == null ? void 0 : a.x) || !Number.isFinite(a == null ? void 0 : a.y) || !Number.isFinite(l) || (i.beginPath(), i.arc(Number(a.x || 0), Number(a.y || 0), l, 0, Math.PI * 2), i.fill());
  }
  function eg(i, a, s, l, h = {}) {
    if (!i || !Array.isArray(a) || !a.length) return;
    const g = Math.max(l.w, l.h) * 0.25;
    i.save(), Qp(i, s, h);
    const _ = (v) => tg(i, v, g);
    if (a.length === 1) {
      _(a[0]), i.restore();
      return;
    }
    for (let v = 0; v < a.length - 1; v += 1) {
      const b = a[v], N = a[v + 1];
      if (!b || !N) continue;
      const x = Number(b.x || 0), P = Number(b.y || 0), E = Number(N.x || 0), T = Number(N.y || 0), R = Math.max(0.5, Math.min(g, Number(b.radiusPx || 0.5))), G = Math.max(0.5, Math.min(g, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(x) || !Number.isFinite(P) || !Number.isFinite(E) || !Number.isFinite(T) || !Number.isFinite(R) || !Number.isFinite(G)) continue;
      const tt = E - x, gt = T - P, Nt = Math.hypot(tt, gt);
      if (!Number.isFinite(Nt) || Nt < 1e-6) {
        _(b);
        continue;
      }
      if (Nt > Math.max(l.w, l.h) * 0.5) continue;
      const dt = Math.max(0.5, Math.min(R, G)), _t = Math.max(0.35, Math.min(dt * 0.4, 2.25)), ht = Math.max(1, Math.ceil(Nt / _t));
      for (let xt = 0; xt <= ht; xt += 1) {
        const lt = xt / ht;
        _({
          x: Sn(x, E, lt),
          y: Sn(P, T, lt),
          radiusPx: Sn(R, G, lt)
        });
      }
    }
    _(a[a.length - 1]), i.restore();
  }
  function ng(i, a, s, l) {
    eg(i, a, s, l, { preview: !1 });
  }
  function rg(i, a, s, l, h) {
    var v, b, N, x;
    if (!i || !Array.isArray(a) || a.length < 3) return;
    const g = "u", _ = "v";
    if (i.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const P = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(P.r || 0) * 255)}, ${Math.round(Number(P.g || 0) * 255)}, ${Math.round(Number(P.b || 0) * 255)}, ${Number(P.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((v = a[0]) == null ? void 0 : v[g]) || 0) * l.w, Number(((b = a[0]) == null ? void 0 : b[_]) || 0) * l.h);
    for (let P = 1; P < a.length; P += 1)
      i.lineTo(Number(((N = a[P]) == null ? void 0 : N[g]) || 0) * l.w, Number(((x = a[P]) == null ? void 0 : x[_]) || 0) * l.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Gl(i) {
    const a = (i == null ? void 0 : i.geometry) || null;
    return a ? String(a.geometryKind || "") === "lasso_fill" ? Array.isArray(a.points) ? a.points : [] : Array.isArray(a.processedPoints) && a.processedPoints.length ? a.processedPoints : Array.isArray(a.rawPoints) && a.rawPoints.length ? a.rawPoints : Array.isArray(a.points) ? a.points : [] : [];
  }
  function ig(i, a) {
    const s = Gl(i);
    return !Array.isArray(s) || !s.length ? [] : s.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((a == null ? void 0 : a.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((a == null ? void 0 : a.h) || 1),
      radiusPx: Jp(i, l, Number((a == null ? void 0 : a.w) || 1), Number((a == null ? void 0 : a.h) || 1))
    }));
  }
  function Kl(i, a, s = null) {
    var v, b, N, x;
    if (!(i != null && i.ctx) || !a) return !1;
    const l = s || { w: Number(((v = i.canvas) == null ? void 0 : v.width) || 0), h: Number(((b = i.canvas) == null ? void 0 : b.height) || 0) }, h = String((a == null ? void 0 : a.toolKind) || "") === "eraser" ? {
      ...a,
      layerKind: "mask",
      toolKind: String(((N = a == null ? void 0 : a.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : a;
    if (String(((x = a == null ? void 0 : a.geometry) == null ? void 0 : x.geometryKind) || "") === "lasso_fill")
      return rg(i.ctx, Gl(h), h, l), !0;
    const _ = ig(h, l);
    return _.length ? (ng(i.ctx, _, h, l), !0) : !1;
  }
  function og(i, a, s, l = 8) {
    const h = new Uint8Array(a * s), g = [], _ = new Int32Array(a * s), v = new Int32Array(a * s);
    for (let b = 0; b < s; b += 1)
      for (let N = 0; N < a; N += 1) {
        const x = b * a + N;
        if (h[x] || i[x] <= l) continue;
        let P = 0, E = 0;
        _[E] = N, v[E] = b, E += 1, h[x] = 1;
        const T = [];
        let R = N, G = b, tt = N, gt = b;
        for (; P < E; ) {
          const Nt = _[P], dt = v[P];
          P += 1, T.push({ x: Nt, y: dt }), Nt < R && (R = Nt), dt < G && (G = dt), Nt > tt && (tt = Nt), dt > gt && (gt = dt);
          const _t = [
            [Nt - 1, dt],
            [Nt + 1, dt],
            [Nt, dt - 1],
            [Nt, dt + 1]
          ];
          for (const [ht, xt] of _t) {
            if (ht < 0 || xt < 0 || ht >= a || xt >= s) continue;
            const lt = xt * a + ht;
            h[lt] || i[lt] <= l || (h[lt] = 1, _[E] = ht, v[E] = xt, E += 1);
          }
        }
        g.push({ pixels: T, minX: R, minY: G, maxX: tt, maxY: gt });
      }
    return g;
  }
  function ag(i, a, s = {}) {
    var N;
    const l = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), g = (N = i == null ? void 0 : i.getContext) == null ? void 0 : N.call(i, "2d");
    if (!g || l < 1 || h < 1) return [];
    const _ = g.getImageData(0, 0, l, h), v = new Uint8Array(l * h);
    for (let x = 0; x < v.length; x += 1) v[x] = _.data[x * 4 + 3];
    return og(v, l, h, 8).map((x, P) => {
      const E = x.maxX - x.minX + 1, T = x.maxY - x.minY + 1, R = document.createElement("canvas");
      R.width = E, R.height = T;
      const G = R.getContext("2d");
      if (!G) return null;
      const tt = G.createImageData(E, T);
      return x.pixels.forEach(({ x: gt, y: Nt }) => {
        const dt = (Nt * l + gt) * 4, _t = ((Nt - x.minY) * E + (gt - x.minX)) * 4;
        tt.data[_t + 0] = _.data[dt + 0], tt.data[_t + 1] = _.data[dt + 1], tt.data[_t + 2] = _.data[dt + 2], tt.data[_t + 3] = _.data[dt + 3];
      }), G.putImageData(tt, 0, 0), {
        id: _i("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + P * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: x.minX / l,
          v0: x.minY / h,
          u1: (x.maxX + 1) / l,
          v1: (x.maxY + 1) / h
        },
        rasterDataUrl: R.toDataURL("image/png"),
        transform: {
          du: 0,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Ji(i, a) {
    if (!i || !a) return null;
    const s = Yo(i), l = xn(a, s.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const h = xn(a, s.right) / l, g = xn(a, s.up) / l, _ = h * s.cr + g * s.sr, v = -h * s.sr + g * s.cr;
    return {
      x: (_ / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - v / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function sg(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (d.mode === "unwrap") {
      const s = pr();
      return i.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const a = i.map((s) => Wi(Xi(s))).filter(Boolean);
    return a.every((s) => Number(s.z || 0) > 0) ? a.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function cg(i) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (d.mode === "unwrap") {
      const s = pr();
      return i.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const a = i.map((s) => Wi(Xi(s))).filter(Boolean);
    return a.every((s) => Number(s.z || 0) > 0) ? a.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function lg(i, a = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let s = 0; s < i.length; s += 1) {
      const l = i[s], h = i[(s + 1) % i.length];
      if (!l || !h || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(l.x), Number(h.y) - Number(l.y)) > a) return !1;
    }
    return !0;
  }
  function ug(i, a, s) {
    if (!Array.isArray(i) || i.length < 3 || !a || !s) return [];
    const l = [];
    for (const h of i) {
      const g = Xi(h), _ = Ji(a, g);
      if (!_) return [];
      l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return lg(l, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? l : [];
  }
  function fg(i, a, s) {
    if (!Array.isArray(i) || i.length < 1 || !a || !s) return [];
    const l = [];
    for (const h of i) {
      const g = Xi(h), _ = Ji(a, g);
      _ && l.push({
        x: Number(s.x || 0) + Number(_.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(_.y || 0) * Number(s.h || 0)
      });
    }
    return l;
  }
  function dg() {
    var l;
    const i = re(), a = qe(i), s = oi();
    if (!i || !a) return !1;
    if (S.save(), S.fillStyle = "#050505", S.fillRect(0, 0, C.width, C.height), S.shadowColor = "rgba(0, 0, 0, 0.45)", S.shadowBlur = 24, S.shadowOffsetX = 0, S.shadowOffsetY = 10, S.fillStyle = "rgba(14, 14, 14, 1)", S.fillRect(a.x, a.y, a.w, a.h), S.restore(), S.save(), S.beginPath(), S.rect(a.x, a.y, a.w, a.h), S.clip(), s && (s.complete || s.naturalWidth || s.width) && Number(s.naturalWidth || s.width || 0) > 1 && Number(s.naturalHeight || s.height || 0) > 1) {
      const h = ki(i);
      Wo(S, a, h, s, `modal_frame_${String(i.id || "")}`) || drawCutoutProjectionPreview(
        S,
        t,
        s,
        a,
        i,
        String(((l = p.ui_settings) == null ? void 0 : l.preview_quality) || "balanced")
      );
    } else
      S.fillStyle = "rgba(255, 255, 255, 0.03)", S.fillRect(a.x, a.y, a.w, a.h);
    return S.restore(), S.save(), S.strokeStyle = "rgba(255, 255, 255, 0.12)", S.lineWidth = 1, S.strokeRect(a.x + 0.5, a.y + 0.5, a.w - 1, a.h - 1), S.restore(), !0;
  }
  function hg() {
    var b, N;
    if (((b = d.interaction) == null ? void 0 : b.kind) !== "paint_lasso_fill") return;
    const i = d.interaction.stroke, a = (N = i == null ? void 0 : i.geometry) == null ? void 0 : N.points;
    let s;
    if (d.mode === "frame") {
      const x = re(), P = qe(x);
      s = ug(a, x, P);
    } else
      s = sg(a);
    if (!Array.isArray(s) || s.length < 3) return;
    const l = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, g = Math.round(Number(h.r || 0) * 255), _ = Math.round(Number(h.g || 0) * 255), v = Math.round(Number(h.b || 0) * 255);
    S.save(), S.beginPath(), S.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let x = 1; x < s.length; x++) S.lineTo(Number(s[x].x || 0), Number(s[x].y || 0));
    S.closePath(), l ? (S.lineWidth = 2, S.setLineDash([6, 6]), S.lineDashOffset = 0, S.strokeStyle = "rgba(0,0,0,0.96)", S.stroke(), S.lineDashOffset = -6, S.strokeStyle = "rgba(255,255,255,0.96)", S.stroke(), S.setLineDash([]), S.lineDashOffset = 0) : (S.lineWidth = 1.5, S.setLineDash([6, 4]), S.strokeStyle = `rgba(${g},${_},${v},1)`, S.stroke(), S.setLineDash([])), S.restore();
  }
  function pg() {
    d.mode === "frame" ? dg() : d.mode === "unwrap" ? Tp(!1) : Lp(!1), zp(), d.mode !== "frame" && Up(), hg(), nt && (nt.textContent = `${Math.round(d.viewFov)}°`), Xt(), kt.hasPresentedFrame || (kt.hasPresentedFrame = !0, C.style.opacity = "1");
  }
  function gg() {
    var a;
    if (e !== "cutout") return !1;
    const i = String(((a = d.interaction) == null ? void 0 : a.kind) || "");
    return i === "move" || i === "scale" || i === "scale_x" || i === "scale_y" || i === "rotate";
  }
  function mg(i = {}) {
    var l, h, g, _;
    const a = i.updateCutoutPreview !== !1;
    if (t.__panoLiveStateOverride = p, e === "cutout") {
      t.__panoLivePaintSurface = null, a && Vs();
      return;
    }
    let s = null;
    try {
      const v = Bi(!1), b = Ho(), N = ((_ = (g = (h = (l = d.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, v)) == null ? void 0 : g.displayPaint) == null ? void 0 : _.canvas) || null, x = b ? null : Rl(v), P = b ? N || x : x || N;
      P && (s = {
        source: P,
        revision: `${ai()}:${Gi()}`
      });
    } catch {
      s = null;
    }
    t.__panoLivePaintSurface = s;
  }
  function ft(i = {}) {
    var g, _, v, b, N, x, P, E;
    const a = !!i.localOnly, s = String(i.cause || "");
    a && Ho() && (d.livePaintInteractionRevision += 1), (!a || s === "selection" || s === "mode" || s === "cutout_frame") && (Bo(), Go());
    const h = e === "cutout" && (!a || s === "paint" || s === "cutout_frame" || s === "frame_transform" || s === "frame_view" || _l() || gg());
    mg({ updateCutoutPreview: h }), (h || !a || e !== "cutout") && ((_ = (g = t.__panoDomPreview) == null ? void 0 : g.requestDraw) == null || _.call(g), (v = t.setDirtyCanvas) == null || v.call(t, !0, !1)), a || ((N = (b = t.graph) == null ? void 0 : b.setDirtyCanvas) == null || N.call(b, !0, !0), (E = (P = (x = dn) == null ? void 0 : x.canvas) == null ? void 0 : P.setDirty) == null || E.call(P, !0, !0)), kt.dirty = !0;
  }
  function Wl() {
    const i = C.getBoundingClientRect(), a = Math.max(2, Math.round(i.width)), s = Math.max(2, Math.round(i.height));
    return C.width !== a || C.height !== s ? (C.width = a, C.height = s, kt.dirty = !0, e === "cutout" && (kt.pendingStableLayoutFrames = Math.max(Number(kt.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function js(i = performance.now()) {
    var a;
    if (kt.running) {
      if (kt.lastTickTs = i, d.outputPreviewAnim !== d.outputPreviewAnimTo) {
        const s = Math.max(1, Number(d.outputPreviewAnimDurationMs)), l = z((i - Number(d.outputPreviewAnimStartTs || 0)) / s, 0, 1), g = d.outputPreviewAnimTo > d.outputPreviewAnimFrom ? Wv(l) : qv(l);
        d.outputPreviewAnim = Sn(d.outputPreviewAnimFrom, d.outputPreviewAnimTo, g), kt.dirty = !0, l >= 1 && (d.outputPreviewAnim = d.outputPreviewAnimTo);
      }
      if ((a = d.viewTween) != null && a.active) {
        const s = d.viewTween, l = z((i - s.startTs) / s.durationMs, 0, 1), h = Kv(l);
        d.viewYaw = Fe(s.startYaw + s.deltaYaw * h), d.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * h, d.viewFov = s.startFov + (s.targetFov - s.startFov) * h, kt.dirty = !0, l >= 1 && (d.viewTween = null);
      }
      if (d.viewInertia.vx = Number(Re.state.inertia.vx || 0), d.viewInertia.vy = Number(Re.state.inertia.vy || 0), d.viewInertia.active = !!Re.state.inertia.active, Re.stepInertia(i) && (d.viewInertia.vx = Number(Re.state.inertia.vx || 0), d.viewInertia.vy = Number(Re.state.inertia.vy || 0), d.viewInertia.active = !!Re.state.inertia.active, kt.dirty = !0), (kt.dirty || i - kt.lastSizeCheckTs >= 220) && (Wl(), kt.lastSizeCheckTs = i), kt.pendingStableLayoutFrames > 0 && (kt.pendingStableLayoutFrames -= 1, kt.dirty = !0), kt.dirty) {
        if (kt.pendingStableLayoutFrames > 0) {
          kt.rafId = requestAnimationFrame(js);
          return;
        }
        kt.dirty = !1, pg();
      }
      kt.rafId = requestAnimationFrame(js);
    }
  }
  function yg() {
    kt.running = !1, kt.rafId && cancelAnimationFrame(kt.rafId), kt.rafId = 0;
  }
  function le() {
    r || (d.historyController.commitActionGroup(JSON.stringify(Gf(p))), qs());
  }
  function Qi(i) {
    if (r) return;
    const a = i < 0 ? d.historyController.undo() : d.historyController.redo();
    if (qs(), !a) return;
    const s = JSON.parse(a);
    Object.keys(p).forEach((l) => delete p[l]), Object.assign(p, s), d.selectedId = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, d.selectedIds = d.selectedId ? [d.selectedId] : [], In(), un(), ee(), En(), ft({ cause: "cutout_frame" });
  }
  function ql() {
    var s, l;
    const i = Array.isArray((s = d.historyController) == null ? void 0 : s.entries) ? d.historyController.entries : [], a = Number((l = d.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !r && i.length > 1 && a > 0,
      canRedo: !r && i.length > 1 && a >= 0 && a < i.length - 1
    };
  }
  function un() {
    var _, v, b;
    U == null || U.querySelectorAll("[data-tool-mode]").forEach((N) => {
      const x = N.getAttribute("data-tool-mode") === d.primaryTool;
      N.classList.toggle("active", x), N.setAttribute("aria-pressed", x ? "true" : "false");
    });
    const i = d.primaryTool === "paint" || d.primaryTool === "mask";
    if (at && K(i), !i) {
      it.forEach((N) => {
        N.classList.remove("is-active");
      }), wt && (wt.hidden = !0);
      return;
    }
    const a = d.primaryTool, s = it.find((N) => String(N.getAttribute("data-paint-pane") || "") === a) || null;
    if (it.forEach((N) => {
      N.classList.toggle("is-active", N === s);
    }), zt.forEach((N) => {
      N.hidden = !1;
    }), $t.forEach((N) => {
      N.hidden = !1;
    }), W && (clearTimeout(W), W = 0), A.querySelectorAll("[data-paint-tool]").forEach((N) => {
      N.classList.toggle("active", N.getAttribute("data-paint-tool") === d.paintTool);
    }), A.querySelectorAll("[data-mask-tool]").forEach((N) => {
      N.classList.toggle("active", N.getAttribute("data-mask-tool") === d.maskTool);
    }), st) {
      const N = d.paintTool !== "eraser";
      st.hidden = !1, st.classList.toggle("disabled", !N), !N && wt && !wt.hidden && (W = window.setTimeout(() => {
        wt.hidden = !0, W = 0;
      }, 170));
      const x = ((_ = Ha.find((E) => za(d.paintColor, E.color))) == null ? void 0 : _.id) || "";
      st.querySelectorAll("[data-paint-color-swatch]").forEach((E) => {
        const T = E.getAttribute("data-paint-color-swatch") === x;
        E.classList.toggle("active", T), E.setAttribute("aria-pressed", T ? "true" : "false"), E.disabled = !N;
      });
      const P = st.querySelector("[data-paint-color-custom]");
      if (P) {
        const E = !x;
        P.classList.toggle("active", E), P.style.setProperty("--custom-color", Nn(d.customPaintColor, 1)), P.setAttribute("aria-pressed", E ? "true" : "false"), P.disabled = !N;
      }
      if (H && (H.value = String(Math.round(z(Number(((v = d.customPaintColor) == null ? void 0 : v.a) ?? 1), 0, 1) * 100))), Pt && (Pt.textContent = `${Math.round(z(Number(((b = d.customPaintColor) == null ? void 0 : b.a) ?? 1), 0, 1) * 100)}%`), Rt && (Rt.style.background = Nn(d.customPaintColor)), wt) {
        const E = fo(d.customPaintColor);
        wt.style.setProperty("--picker-hue-color", Nn({ ...xc(E.h, 1, 1), a: 1 }, 1)), wt.style.setProperty("--picker-sat", `${z(E.s, 0, 1) * 100}%`), wt.style.setProperty("--picker-val", `${(1 - z(E.v, 0, 1)) * 100}%`), wt.style.setProperty("--picker-hue", `${z(E.h, 0, 1) * 100}%`);
      }
      if (Mt) {
        const E = fo(d.customPaintColor);
        Mt.style.left = `${z(E.s, 0, 1) * 100}%`, Mt.style.top = `${(1 - z(E.v, 0, 1)) * 100}%`;
      }
      if (ye) {
        const E = fo(d.customPaintColor);
        ye.style.left = `${z(E.h, 0, 1) * 100}%`;
      }
      if (St && Dt) {
        const E = Array.from({ length: 8 }, (T, R) => d.customPaintHistory[R] || null);
        Dt.innerHTML = E.map((T, R) => `
          <button class="pano-paint-color-history-dot${T ? "" : " empty"}" type="button" data-paint-history-index="${R}" ${T ? `style="--swatch:${Nn(T, 1)}"` : ""} aria-label="Recent color ${R + 1}" ${T ? "" : "disabled"}></button>
        `).join(""), Dt.querySelectorAll("[data-paint-history-index]").forEach((T) => {
          T.onclick = () => {
            const R = Number(T.getAttribute("data-paint-history-index")), G = d.customPaintHistory[R];
            G && (d.customPaintColor = fn(G), d.paintColor = fn(G), un());
          };
        });
      }
    }
    const l = br(d.primaryTool === "paint" ? d.paintTool : d.maskTool), h = d.brushSizes[l] ?? 10, g = np();
    zt.forEach((N) => {
      N.classList.toggle("disabled", g);
    }), I.forEach((N) => {
      N.value = String(h);
      const x = (h - 1) / 119 * 100;
      N.style.setProperty("--v", `${z(x, 0, 100)}%`), N.disabled = g;
    }), L.forEach((N) => {
      N.textContent = String(h);
    });
  }
  function ci(i, a, s, l, h, g, _, v = !0) {
    const b = document.createElement("div");
    b.dataset.key = s, b.dataset.min = String(h), b.dataset.max = String(g), b.className = "pano-field", b.innerHTML = `<label>${l}</label><input type='range' min='${h}' max='${g}' step='${_}' value='${Number(a[s] || 0)}'><input type='number' min='${h}' max='${g}' step='${_}' value='${Sc(a[s] || 0)}'>`;
    const [N, x] = b.querySelectorAll("input"), P = () => {
      const T = Number(h), R = Number(g), tt = (Number(N.value) - T) / Math.max(1e-6, R - T) * 100;
      N.style.setProperty("--v", `${z(tt, 0, 100)}%`);
    };
    N.disabled = !v, x.disabled = !v;
    const E = (T) => {
      if (!v) return;
      let R = Number(T);
      Number.isNaN(R) && (R = 0), R = z(R, h, g), s === "yaw_deg" && (R = Fe(R)), a[s] = R, e === "cutout" && (s === "hFOV_deg" || s === "vFOV_deg") && (a.aspect_id = Br(a)), N.value = String(R), x.value = Sc(R), P(), ft();
    };
    N.oninput = () => E(N.value), x.oninput = () => E(x.value), N.onchange = () => le(), x.onchange = () => le(), P(), i.appendChild(b);
  }
  function Us() {
    const i = ve();
    if (!i) return;
    d.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: bi(i)
    }, q.querySelectorAll(".pano-field[data-key]").forEach((g) => {
      const _ = g.dataset.key;
      if (!_ || !(_ in i)) return;
      const v = g.querySelector("input[type='range']"), b = g.querySelector("input[type='number']");
      if (!v || !b) return;
      const N = Number(g.dataset.min ?? v.min ?? 0), x = Number(g.dataset.max ?? v.max ?? 0);
      let P = Number(i[_] || 0);
      Number.isNaN(P) && (P = 0), P = z(P, N, x);
      const E = String(P);
      v.value !== E && (v.value = E);
      const T = Sc(P);
      b.value !== T && (b.value = T);
      const R = (P - N) / Math.max(1e-6, x - N) * 100;
      v.style.setProperty("--v", `${z(R, 0, 100)}%`);
    });
    const s = bi(i), l = q.querySelector(".pano-cutout-aspect-label span");
    l && (l.textContent = s), q.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]").forEach((g) => {
      g.classList.toggle("active", String(g.getAttribute("data-aspect")) === s);
    });
  }
  function ee() {
    var ot, Et, Ot, Tt, Vt, Ut, Kt, qt, he, Xn, Zn, eo, sa, di, hi, no;
    if (o) return;
    const i = [...q.children].slice(0, 2);
    q.innerHTML = "", i.forEach((At) => q.appendChild(At));
    const a = q.querySelector(".pano-side-actions");
    if (a && (a.innerHTML = ""), c) {
      const At = document.createElement("div");
      At.className = "pano-inspector";
      const Jt = document.createElement("details");
      Jt.className = "pano-ui-settings", Jt.open = !1, Jt.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Lt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(ot = p.ui_settings) != null && ot.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Et = p.ui_settings) != null && Et.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Ot = p.ui_settings) != null && Ot.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(Tt = p.ui_settings) != null && Tt.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Vt = p.ui_settings) != null && Vt.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Ut = p.ui_settings) != null && Ut.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const ke = Jt.querySelector("[data-setting='invert-x']"), Tn = Jt.querySelector("[data-setting='invert-y']"), Jn = Jt.querySelector("[data-ui-picker='quality']"), Ln = Jt.querySelector("[data-action='ui-reset-defaults']"), Qn = (ue, Ne, _n, pi) => {
        const _r = ue.querySelector(".pano-picker-trigger"), ro = ue.querySelector(".pano-picker-label"), wn = ue.querySelector(".pano-picker-pop"), wr = () => {
          const Rn = String(_n()), On = Ne.find((io) => String(io.value) === Rn) || Ne[0];
          ro.textContent = On.label, wn.innerHTML = "", Ne.forEach((io) => {
            const oo = document.createElement("button");
            oo.type = "button", oo.className = `pano-picker-item${String(io.value) === Rn ? " active" : ""}`, oo.textContent = io.label, oo.onclick = () => {
              pi(io.value), wn.hidden = !0, wr(), vr(), ft();
            }, wn.appendChild(oo);
          });
        };
        return _r.onclick = (Rn) => {
          Rn.stopPropagation(), Jt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((On) => {
            On !== wn && (On.hidden = !0);
          }), wn.hidden = !wn.hidden;
        }, wr(), wr;
      }, Dn = (ue, Ne) => {
        ue.setAttribute("data-selected", Ne ? "1" : "0"), ue.querySelectorAll(".pano-segment-btn").forEach((_n) => {
          _n.setAttribute("aria-pressed", _n.getAttribute("data-value") === (Ne ? "1" : "0") ? "true" : "false");
        });
      };
      ke.querySelectorAll(".pano-segment-btn").forEach((ue) => {
        ue.onclick = () => {
          const Ne = ue.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = Ne, Dn(ke, Ne), vr(), ft();
        };
      }), Tn.querySelectorAll(".pano-segment-btn").forEach((ue) => {
        ue.onclick = () => {
          const Ne = ue.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = Ne, Dn(Tn, Ne), vr(), ft();
        };
      });
      const Ht = Qn(
        Jn,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(p.ui_settings.preview_quality || "balanced"),
        (ue) => {
          const Ne = String(ue || "balanced");
          p.ui_settings.preview_quality = Ne === "draft" || Ne === "high" ? Ne : "balanced";
        }
      );
      Ln.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", Dn(ke, !1), Dn(Tn, !1), Ht(), vr(), ft();
      }, At.appendChild(Jt), q.appendChild(At);
      const ne = document.createElement("div");
      ne.className = "pano-side-footer", ne.innerHTML = '<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>', ne.querySelector("[data-action='close-preview']").onclick = () => fi(), q.appendChild(ne), to(At);
      return;
    }
    const s = ve(), l = An(), h = Ml();
    l.length > 1 && (d.panelLastValues = d.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), s && h !== "stroke" && (d.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (h === "image" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (h === "image" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: bi(s)
    });
    const g = d.panelLastValues || (e === "stickers" || h === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = h === "stroke" ? null : s, v = _ || g, b = !!_, N = document.createElement("div");
    N.className = "pano-inspector";
    const x = document.createElement("div");
    for (x.innerHTML = `
      <div class="pano-section-title">
        <span>Transform</span>
      </div>
    `; x.firstChild; ) N.appendChild(x.firstChild);
    if (q.appendChild(N), e === "stickers" || e === "cutout") {
      const At = document.createElement("div");
      At.className = "pano-field-wide pano-target-row";
      const Jt = "Selection";
      At.innerHTML = `
        <label>${Jt}</label>
        <div class="pano-picker">
          <button class="pano-picker-trigger" type="button">
            <span class="pano-picker-label"></span>
            <span class="pano-picker-caret">▾</span>
          </button>
          <div class="pano-picker-pop" hidden></div>
        </div>
      `;
      const ke = At.querySelector(".pano-picker-trigger"), Tn = At.querySelector(".pano-picker-label"), Jn = At.querySelector(".pano-picker-pop"), Ln = [{ id: "", label: e === "stickers" ? "No image" : "Nothing selected", item: null }];
      e === "stickers" ? rn().forEach((Ht, ne) => {
        var _n, pi;
        const ue = Pe(Ht) ? String(Ht.id || Vr) : String(((pi = (_n = p.assets) == null ? void 0 : _n[Ht.asset_id]) == null ? void 0 : pi.name) || Ht.asset_id || Ht.id), Ne = `${ne + 1}. ${ue}${Pe(Ht) && ri(Ht) ? " (hidden)" : ""}`;
        Ln.push({ id: Ht.id, label: Ne, item: Ht, kind: "image" });
      }) : Jh().forEach((Ht) => {
        Ln.push({ id: Ht.item.id, label: Ht.label, item: Ht.item, kind: Ht.kind });
      });
      const Qn = (_ == null ? void 0 : _.id) || "", Dn = Ln.find((Ht) => Ht.id === Qn) || Ln[0];
      Tn.innerHTML = Dn.item ? Pl(Dn) : ka(String(Dn.label || "")), Jn.innerHTML = "", Ln.forEach((Ht) => {
        const ne = document.createElement("button");
        ne.type = "button", ne.className = `pano-picker-item${Ht.id === Qn ? " active" : ""}`, ne.innerHTML = Ht.item ? Pl(Ht) : ka(String(Ht.label || "")), ne.onclick = () => {
          Jn.hidden = !0, Uo(Ht.item || null);
          const ue = Ht.item || null;
          if (ue && !Ae(ue)) {
            const Ne = Fe(Number(ue.yaw_deg || 0)), _n = z(Number(ue.pitch_deg || 0), -89.9, 89.9);
            nn(Ne, _n, d.viewFov);
          }
          ee(), Xt(), ft();
        }, Jn.appendChild(ne);
      }), ke.disabled = Ln.length <= 1, ke.onclick = (Ht) => {
        Ht.stopPropagation(), !ke.disabled && (Jn.hidden = !Jn.hidden);
      }, N.appendChild(At);
    }
    const P = document.createElement("div");
    P.className = "pano-state-actions", P.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${Lt.copy}<span>Copy State</span></button>`;
    const E = P.querySelector("[data-action='copy-state-inline']");
    E.disabled = !b || h === "stroke" || l.length > 1, E.onclick = async () => {
      if (!b || h === "stroke" || l.length > 1) return;
      const At = JSON.stringify(e === "cutout" && h !== "image" ? El(v) : up(s));
      try {
        await navigator.clipboard.writeText(At);
        const Jt = E.querySelector("span");
        Jt && (Jt.textContent = "Copied", window.setTimeout(() => {
          Jt.textContent = "Copy State";
        }, 900));
      } catch {
      }
    }, N.appendChild(P);
    const T = document.createElement("div");
    T.className = `pano-params${d.panelWasEnabled ? "" : " disabled"}`, N.appendChild(T), l.length > 1 ? (T.innerHTML = `
        <div class="pano-param-note">Selected objects: ${l.length}</div>
        <div class="pano-param-note">Multi-selection supports z-order and delete.</div>
      `, T.classList.toggle("disabled", !b), d.panelWasEnabled = b, Bo()) : (ci(T, v, "yaw_deg", "Yaw", -180, 180, 0.1, b && !r), ci(T, v, "pitch_deg", "Pitch", -90, 90, 0.1, b && !r), ci(T, v, "hFOV_deg", "H FOV", 1, 179, 0.1, b && !r), ci(T, v, "vFOV_deg", "V FOV", 1, 179, 0.1, b && !r), e === "stickers" || h === "image" ? ci(T, v, "rot_deg", "Rotation", -180, 180, 0.1, b && !r) : ci(T, v, "roll_deg", "Roll", -180, 180, 0.1, b && !r), b !== d.panelWasEnabled ? requestAnimationFrame(() => {
      T.classList.toggle("disabled", !b);
    }) : T.classList.toggle("disabled", !b), d.panelWasEnabled = b, Bo());
    const R = document.createElement("div");
    R.className = "pano-visibility-section", R.innerHTML = `
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
    const G = Array.isArray((qt = (Kt = p == null ? void 0 : p.painting) == null ? void 0 : Kt.paint) == null ? void 0 : qt.strokes) ? p.painting.paint.strokes.length : 0, tt = Array.isArray((Xn = (he = p == null ? void 0 : p.painting) == null ? void 0 : he.mask) == null ? void 0 : Xn.strokes) ? p.painting.mask.strokes.length : 0, gt = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((At) => String((At == null ? void 0 : At.name) || "")) : [], Nt = zh(
      t,
      gt.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), dt = !!String((Nt == null ? void 0 : Nt.src) || "").trim() || Cl("pano_input_images").length > 0, _t = Array.isArray(rn()) && rn().length > 0 || G > 0, ht = tt > 0, xt = (At) => At === "panorama" ? dt : At === "objects" ? _t : ht, lt = (At, Jt) => {
      const ke = At.closest("[data-visibility-row]"), Tn = xt(String(At.getAttribute("data-visibility") || ""));
      At.innerHTML = Jt ? Lt.eye : Lt.eye_dashed, At.setAttribute("aria-pressed", Jt ? "true" : "false"), At.setAttribute("data-tip", Jt ? "Hide" : "Show"), At.disabled = !Tn, At.classList.toggle("active", !!Jt), ke == null || ke.classList.toggle("is-hidden", !Jt), ke == null || ke.classList.toggle("is-disabled", !Tn);
    };
    if (R.querySelectorAll("[data-visibility]").forEach((At) => {
      const Jt = String(At.getAttribute("data-visibility") || ""), ke = () => Jt === "panorama" ? !!d.showPanorama : Jt === "objects" ? !!d.showObjects : !!d.showMask;
      lt(At, ke()), At.onclick = () => {
        xt(Jt) && (Jt === "panorama" ? d.showPanorama = !d.showPanorama : Jt === "objects" ? d.showObjects = !d.showObjects : d.showMask = !d.showMask, lt(At, ke()), ft());
      };
    }), N.appendChild(Object.assign(document.createElement("div"), { className: "pano-divider" })), N.appendChild(R), !r) {
      const At = document.createElement("details");
      At.className = "pano-ui-settings", At.open = !1, At.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Lt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(Zn = p.ui_settings) != null && Zn.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(eo = p.ui_settings) != null && eo.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(sa = p.ui_settings) != null && sa.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(di = p.ui_settings) != null && di.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(hi = p.ui_settings) != null && hi.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(no = p.ui_settings) != null && no.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const Jt = At.querySelector("[data-setting='invert-x']"), ke = At.querySelector("[data-setting='invert-y']"), Tn = At.querySelector("[data-ui-picker='quality']"), Jn = At.querySelector("[data-action='ui-reset-defaults']"), Ln = (Ht, ne, ue, Ne) => {
        const _n = Ht.querySelector(".pano-picker-trigger"), pi = Ht.querySelector(".pano-picker-label"), _r = Ht.querySelector(".pano-picker-pop"), ro = () => {
          const wn = String(ue()), wr = ne.find((Rn) => String(Rn.value) === wn) || ne[0];
          pi.textContent = wr.label, _r.innerHTML = "", ne.forEach((Rn) => {
            const On = document.createElement("button");
            On.type = "button", On.className = `pano-picker-item${String(Rn.value) === wn ? " active" : ""}`, On.textContent = Rn.label, On.onclick = () => {
              Ne(Rn.value), _r.hidden = !0, ro(), vr(), t.setDirtyCanvas(!0, !0), ft();
            }, _r.appendChild(On);
          });
        };
        return _n.onclick = (wn) => {
          wn.stopPropagation(), At.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((wr) => {
            wr !== _r && (wr.hidden = !0);
          }), _r.hidden = !_r.hidden;
        }, ro(), ro;
      }, Qn = (Ht, ne) => {
        Ht.setAttribute("data-selected", ne ? "1" : "0"), Ht.querySelectorAll(".pano-segment-btn").forEach((ue) => {
          ue.setAttribute("aria-pressed", ue.getAttribute("data-value") === (ne ? "1" : "0") ? "true" : "false");
        });
      };
      Jt.querySelectorAll(".pano-segment-btn").forEach((Ht) => {
        Ht.onclick = () => {
          const ne = Ht.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = ne, Qn(Jt, ne), vr(), t.setDirtyCanvas(!0, !0), ft();
        };
      }), ke.querySelectorAll(".pano-segment-btn").forEach((Ht) => {
        Ht.onclick = () => {
          const ne = Ht.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = ne, Qn(ke, ne), vr(), t.setDirtyCanvas(!0, !0), ft();
        };
      });
      const Dn = Ln(
        Tn,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(p.ui_settings.preview_quality || "balanced"),
        (Ht) => {
          const ne = String(Ht || "balanced");
          p.ui_settings.preview_quality = ne === "draft" || ne === "high" ? ne : "balanced";
        }
      );
      Jn.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", Qn(Jt, !1), Qn(ke, !1), Dn(), vr(), t.setDirtyCanvas(!0, !0), ft();
      }, N.appendChild(At);
    }
    const B = document.createElement("div");
    B.className = "pano-side-footer", B.innerHTML = `
      <button class="pano-btn" data-action="cancel-close">Cancel</button>
      <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
    `, B.querySelector("[data-action='cancel-close']").onclick = () => fi(), B.querySelector("[data-action='save-close']").onclick = () => {
      nu(), fi();
    }, q.appendChild(B), to(N);
  }
  function Jo(i) {
    if (!i) return !1;
    if (String(i.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(i.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function Yl(i) {
    if (r || e !== "stickers" && e !== "cutout" || !Jo(i)) return;
    const a = ho("asset"), s = URL.createObjectURL(i);
    try {
      const l = await new Promise((_, v) => {
        const b = new Image();
        b.onload = () => _(b), b.onerror = () => v(new Error("image load failed")), b.src = s;
      });
      yt.set(a, l);
      const h = await Es(i, String(i.name || a));
      p.assets[a] = h;
      const g = ho("st");
      p.stickers.push({
        id: g,
        asset_id: a,
        yaw_deg: d.viewYaw,
        pitch_deg: d.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Lr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: kl()
      }), Uo(p.stickers[p.stickers.length - 1]), Gs(), le(), Se(), ee(), Xt(), ft();
    } catch (l) {
      console.error("[PanoramaSuite] failed to add sticker asset", l), delete p.assets[a], yt.delete(a);
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function Xl(i) {
    const a = document.createElement("input");
    a.type = "file", a.accept = "image/*", a.onchange = () => {
      var l;
      const s = (l = a.files) == null ? void 0 : l[0];
      !s || typeof i != "function" || i(s);
    }, a.click();
  }
  function Bs() {
    r || e !== "stickers" && e !== "cutout" || Xl((i) => {
      Yl(i);
    });
  }
  async function vg(i) {
    if (r || e !== "stickers" && e !== "cutout") return;
    const a = ve();
    if (!a || !Le(a) || Pe(a) || !Jo(i)) return;
    const s = ho("asset"), l = URL.createObjectURL(i);
    try {
      const h = await new Promise((_, v) => {
        const b = new Image();
        b.onload = () => _(b), b.onerror = () => v(new Error("image load failed")), b.src = l;
      });
      yt.set(s, h);
      const g = await Es(i, String(i.name || s));
      p.assets[s] = g, a.asset_id = s, a.vFOV_deg = Lr(
        Number(a.hFOV_deg || 30),
        Number(h.naturalWidth || h.width || 1),
        Number(h.naturalHeight || h.height || 1)
      ), a.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Yi(), yn(), le(), Se(), ee(), Xt(), ft();
    } catch (h) {
      console.error("[PanoramaSuite] failed to replace sticker asset", h), delete p.assets[s], yt.delete(s);
    } finally {
      URL.revokeObjectURL(l);
    }
  }
  function bg() {
    if (r) return;
    const i = ve();
    !i || !Le(i) || Pe(i) || Xl((a) => {
      vg(a);
    });
  }
  async function _g() {
    if (r || e !== "stickers") return;
    const i = p.assets && typeof p.assets == "object" ? p.assets : {}, a = Object.entries(i).filter(([, l]) => {
      const h = String((l == null ? void 0 : l.type) || "").toLowerCase(), g = String((l == null ? void 0 : l.value) || "");
      return h === "dataurl" && g.startsWith("data:image");
    });
    if (!a.length) return;
    let s = !1;
    for (const [l, h] of a)
      try {
        const g = String((h == null ? void 0 : h.value) || "");
        if (!g) continue;
        const _ = await fetch(g).then((P) => P.blob()), v = String(_.type || "image/png").split("/")[1] || "png", b = String((h == null ? void 0 : h.name) || `${l}.${v}`), N = new File([_], b, { type: _.type || "image/png" }), x = await Es(N, b);
        p.assets[l] = {
          ...x,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, s = !0;
      } catch (g) {
        console.error("[PanoramaSuite] failed to migrate embedded sticker asset", { assetId: l, err: g });
      }
    s && (Se(), ft());
  }
  function Zl() {
    r || e === "cutout" && (Gs(), p.shots = [{
      id: ho("sh"),
      yaw_deg: d.viewYaw,
      pitch_deg: d.viewPitch,
      hFOV_deg: 64,
      vFOV_deg: 40,
      roll_deg: 0,
      aspect_id: Dh(64, 40)
    }], Uo(p.shots[0]), d.cutoutAspectOpen = !1, le(), Se(), ee(), ft({ cause: "cutout_frame" }));
  }
  function wg() {
    r || e === "cutout" && (p.shots = [], d.selectedId = null, d.selectedIds = [], d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, p.active.selected_shot_id = null, le(), Se(), ee(), ft());
  }
  function xg() {
    const i = Array.isArray(p.stickers) ? p.stickers : [], a = [];
    for (const s of i)
      Pe(s) && (s.visible = !1, a.push(s));
    return a;
  }
  function Jl(i, a, s = "Clear") {
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
      const g = (b) => {
        h.remove(), l(!!b);
      };
      h.addEventListener("pointerdown", (b) => {
        b.target === h && g(!1);
      });
      const _ = h.querySelector("[data-action='cancel']"), v = h.querySelector("[data-action='confirm']");
      _.onclick = () => g(!1), v.onclick = () => g(!0), O.appendChild(h), v.focus();
    });
  }
  async function Ql() {
    var s, l;
    if (r || !await Jl(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    p.painting = ko(null), In();
    const a = xg();
    e === "stickers" ? (p.stickers = a, p.assets = {}, d.selectedId = ((s = a[0]) == null ? void 0 : s.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], p.active.selected_sticker_id = ((l = a[0]) == null ? void 0 : l.id) || null, Yi()) : (p.stickers = a, p.assets = {}, p.shots = [], d.selectedId = null, d.selectedIds = [], p.active.selected_sticker_id = null, p.active.selected_shot_id = null, d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, Yi()), le(), Se(), ee(), Xt(), ft();
  }
  async function Sg(i) {
    var g, _, v, b;
    if (r) return;
    const a = i === "mask" ? "mask" : "paint", s = a === "mask" ? "Mask" : "Paint", l = ui(a);
    if (!(!l.length && !(((g = d.interaction) == null ? void 0 : g.kind) === "draw" && ((_ = d.interaction) == null ? void 0 : _.layerKind) === a) || !await Jl(
      `Clear ${s}`,
      `This will remove all ${a} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((v = d.interaction) == null ? void 0 : v.kind) === "draw" && ((b = d.interaction) == null ? void 0 : b.layerKind) === a) {
        const N = Yn();
        N && d.paintEngine.cancelActiveStroke(N), d.interaction = null;
      }
      l.length = 0, p.painting.raster_objects = ln().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== a), a === "paint" && (Ie().length = 0), In(), le(), Se(), ee(), Xt(), un(), ft();
    }
  }
  function Ng() {
    if (r) return;
    const i = ve();
    if (!i || !Le(i) || Pe(i)) return;
    const a = JSON.parse(JSON.stringify(i));
    a.id = ho("st"), a.yaw_deg = Fe((a.yaw_deg || 0) + 8), a.z_index = kl(), p.stickers.push(a), p.active.selected_sticker_id = a.id, d.selectedId = a.id, d.selectedIds = [a.id], yn(), le(), Se(), Xt(), ee(), ft();
  }
  function tu() {
    var s, l, h, g, _, v, b;
    if (r) return;
    const i = An(), a = ve();
    if (!(!a && i.length === 0)) {
      if (i.length > 1) {
        const N = new Set(i.filter((E) => Ae(E)).map((E) => String(E.actionGroupId || E.id || ""))), x = new Set(i.filter((E) => Ke(E)).map((E) => Ge(E.rasterObjectId || E.id || ""))), P = new Set(i.filter(Le).map((E) => String(E.id || "")));
        N.size > 0 && (p.painting.paint.strokes = (Array.isArray((l = (s = p.painting) == null ? void 0 : s.paint) == null ? void 0 : l.strokes) ? p.painting.paint.strokes : []).filter((E) => !N.has(String((E == null ? void 0 : E.actionGroupId) || ""))), p.painting.groups = Ie().filter((E) => !N.has(String((E == null ? void 0 : E.actionGroupId) || (E == null ? void 0 : E.id) || ""))), In()), x.size > 0 && (p.painting.raster_objects = ln().filter((E) => !x.has(String((E == null ? void 0 : E.id) || ""))), Zi()), P.size > 0 && (p.stickers = (Array.isArray(p.stickers) ? p.stickers : []).filter((E) => P.has(String((E == null ? void 0 : E.id) || "")) ? Pe(E) ? (ri(E) || (E.visible = !1), !0) : !1 : !0), Yi(), yn()), d.selectedId = null, d.selectedIds = [], le(), Se(), ee(), Xt(), ft();
        return;
      }
      if (Ae(a)) {
        const N = String(a.actionGroupId || a.id || "").trim();
        p.painting.paint.strokes = (Array.isArray((g = (h = p.painting) == null ? void 0 : h.paint) == null ? void 0 : g.strokes) ? p.painting.paint.strokes : []).filter((x) => String((x == null ? void 0 : x.actionGroupId) || "").trim() !== N), p.painting.groups = Ie().filter((x) => String((x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || "").trim() !== N), In(), d.selectedId = null, d.selectedIds = [], le(), Se(), ee(), Xt(), ft();
        return;
      }
      if (Ke(a)) {
        const N = Ge(a.rasterObjectId || a.id || "");
        p.painting.raster_objects = ln().filter((x) => String((x == null ? void 0 : x.id) || "").trim() !== N), Zi(), d.selectedId = null, d.selectedIds = [], le(), Se(), ee(), Xt(), ft();
        return;
      }
      if (e === "stickers" || Le(a)) {
        if (Pe(a)) {
          if (ri(a)) return;
          a.visible = !1, yn(), le(), Se(), ee(), Xt(), ft();
          return;
        }
        p.stickers = p.stickers.filter((N) => N.id !== a.id), Yi(), yn(), d.selectedId = e === "cutout" ? p.active.selected_shot_id || ((_ = p.stickers[0]) == null ? void 0 : _.id) || null : ((v = p.stickers[0]) == null ? void 0 : v.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], p.active.selected_sticker_id = ((b = p.stickers[0]) == null ? void 0 : b.id) || null, le(), Se(), ee(), Xt(), ft();
        return;
      }
      wg();
    }
  }
  function Mg(i, a) {
    if (!i) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const E = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(E)) {
        const [G, tt] = E.split(":").map((gt) => Number(gt));
        if (Number.isFinite(G) && Number.isFinite(tt)) return G >= tt;
      }
      const T = Number(i.hFOV_deg || 64), R = Number(i.vFOV_deg || 40);
      return Math.abs(T - R) > 1e-6 ? T >= R : Wc(i) >= 1;
    })();
    let [h, g] = s[String(a)] || s["1:1"];
    h >= g !== l && ([h, g] = [g, h]);
    const _ = h / g, v = z(Number(i.hFOV_deg || 64), 1, 179), b = z(Number(i.vFOV_deg || 40), 1, 179), N = Math.sqrt(Math.max(1, v * b)), x = z(N * Math.sqrt(_), 1, 179), P = z(N / Math.sqrt(_), 1, 179);
    i.hFOV_deg = x, i.vFOV_deg = P, i.aspect_id = String(a);
  }
  function Pg(i) {
    if (!i) return;
    const a = Math.max(1, Number(i.hFOV_deg || 90)), s = Math.max(1, Number(i.vFOV_deg || 60));
    i.hFOV_deg = s, i.vFOV_deg = a, i.aspect_id = Br(i);
  }
  function eu() {
    Tr().forEach((a, s) => {
      a.type === "sticker" && a.item && (a.item.z_index = s), a.type === "strokeGroup" && a.item && (a.item.z_index = s), a.type === "rasterObject" && a.item && (a.item.z_index = s);
    });
  }
  function kg() {
    if (r) return;
    const i = An();
    if (!ve() || i.length === 0) return;
    eu();
    const s = Tr(), l = new Set(i.map((v) => Le(v) ? `sticker:${String(v.id || "")}` : Ke(v) ? `rasterObject:${Ge(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), h = [], g = [];
    if (s.forEach((v) => {
      var N, x;
      const b = v.type === "sticker" ? `sticker:${String(((N = v.item) == null ? void 0 : N.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((x = v.item) == null ? void 0 : x.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      l.has(b) ? h.push(v) : g.push(v);
    }), !h.length || h[h.length - 1] === s[s.length - 1]) return;
    [...g, ...h].forEach((v, b) => {
      v.type === "sticker" && v.item && (v.item.z_index = b), v.type === "strokeGroup" && v.item && (v.item.z_index = b), v.type === "rasterObject" && v.item && (v.item.z_index = b);
    }), yn(), le(), Se(), Xt(), ft();
  }
  function Cg() {
    if (r) return;
    const i = An();
    if (!ve() || i.length === 0) return;
    eu();
    const s = Tr(), l = new Set(i.map((v) => Le(v) ? `sticker:${String(v.id || "")}` : Ke(v) ? `rasterObject:${Ge(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), h = [], g = [];
    if (s.forEach((v) => {
      var N, x;
      const b = v.type === "sticker" ? `sticker:${String(((N = v.item) == null ? void 0 : N.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((x = v.item) == null ? void 0 : x.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      l.has(b) ? h.push(v) : g.push(v);
    }), !h.length || h[0] === s[0]) return;
    [...h, ...g].forEach((v, b) => {
      v.type === "sticker" && v.item && (v.item.z_index = b), v.type === "strokeGroup" && v.item && (v.item.z_index = b), v.type === "rasterObject" && v.item && (v.item.z_index = b);
    }), yn(), le(), Se(), Xt(), ft();
  }
  function nu() {
    r || (p.projection_model = "pinhole_rectilinear", p.alpha_mode = "straight", f && (p.output_preset = Kf(f.value, Number(p.output_preset || 2048))), m && (p.bg_color = String(m.value || p.bg_color || "#00ff00")), En(), t.setDirtyCanvas(!0, !0));
  }
  function En() {
    var a;
    if (r) return;
    const i = JSON.stringify(p);
    y && (y.value = i, (a = y.callback) == null || a.call(y, i));
  }
  function vr() {
    p.ui_settings = nb(p.ui_settings), r || En();
  }
  function Se() {
    var i;
    r || (En(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0));
  }
  function Gs() {
    d.primaryTool !== "cursor" && (d.primaryTool = "cursor", un(), ee());
  }
  function li(i) {
    const a = C.getBoundingClientRect();
    return {
      x: (i.clientX - a.left) / a.width * C.width,
      y: (i.clientY - a.top) / a.height * C.height
    };
  }
  function ru() {
    return d.mode === "pano" || d.mode === "unwrap";
  }
  function re() {
    var s;
    if (e !== "cutout") return null;
    const i = Array.isArray(p.shots) ? p.shots : [], a = String(((s = p.active) == null ? void 0 : s.selected_shot_id) || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === a) || i[0] || null;
  }
  function qe(i = re()) {
    var E, T, R, G;
    if (!i) return null;
    const a = Math.max(1e-4, Number(((E = ki(i)) == null ? void 0 : E.aspect) || 1)), s = 56, l = Math.max(80, C.width - s * 2), h = Math.max(80, C.height - s * 2);
    let g = l, _ = g / a;
    _ > h && (_ = h, g = _ * a);
    const v = Math.max(0.1, Number(((T = d.frameView) == null ? void 0 : T.zoom) || 1)), b = g * v, N = _ * v, x = Number(((R = d.frameView) == null ? void 0 : R.panX) || 0), P = Number(((G = d.frameView) == null ? void 0 : G.panY) || 0);
    return {
      x: (C.width - b) * 0.5 + x,
      y: (C.height - N) * 0.5 + P,
      w: b,
      h: N
    };
  }
  function Ks() {
    return e === "cutout" && d.mode === "frame" && !!re();
  }
  function vn(i, a = performance.now()) {
    if (d.mode === "unwrap") {
      const g = pr(), _ = (i.x - g.x) / Math.max(1, g.w), v = (i.y - g.y) / Math.max(1, g.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: z(v, 0, 1),
        t: Number(a || 0)
      };
    }
    const s = Is(i.x, i.y), { lon: l, lat: h } = Rs(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: z(0.5 - h / Math.PI, 0, 1),
      t: Number(a || 0)
    };
  }
  function bn(i, a, s = performance.now()) {
    const l = qe(a);
    if (!l) return null;
    const h = {
      x: (Number(i.x) - l.x) / Math.max(1, l.w),
      y: (Number(i.y) - l.y) / Math.max(1, l.h)
    }, g = Hs(a, h);
    if (!g) return null;
    const { lon: _, lat: v } = Rs(g);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: z(0.5 - v / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Ag(i, a) {
    var N;
    const s = re(), l = qe(s);
    if (!s || !l) return !1;
    const h = Math.max(0.1, Number(((N = d.frameView) == null ? void 0 : N.zoom) || 1)), g = z(h * Number(a), 0.25, 12);
    if (Math.abs(g - h) < 1e-6) return !1;
    const _ = (Number(i.x) - l.x) / Math.max(1e-6, l.w), v = (Number(i.y) - l.y) / Math.max(1e-6, l.h);
    d.frameView.zoom = g;
    const b = qe(s);
    return b ? (d.frameView.panX += Number(i.x) - (b.x + b.w * _), d.frameView.panY += Number(i.y) - (b.y + b.h * v), !0) : !1;
  }
  function Ig(i, a) {
    const s = Number(a || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function br(i) {
    const a = String(i || "").trim();
    return a === "eraser" ? er : on[a] ? a : d.activeBrushPresetId || er;
  }
  function iu() {
    return (d.primaryTool === "paint" || d.primaryTool === "mask") && (ru() || Ks());
  }
  function ou() {
    var i;
    return iu() && ((i = d.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function Qo(i, a = !0) {
    const s = Number((i == null ? void 0 : i.x) || 0), l = Number((i == null ? void 0 : i.y) || 0), h = a !== !1, g = d.pointerPos || { x: 0, y: 0, inside: !1 }, _ = g.inside !== h || Math.abs(g.x - s) > 0.01 || Math.abs(g.y - l) > 0.01;
    return d.pointerPos = { x: s, y: l, inside: h }, _;
  }
  function Eg() {
    var x, P;
    if (!ou()) return null;
    const i = d.primaryTool === "mask" ? "mask" : "paint", a = i === "mask" ? d.maskTool : d.paintTool, s = br(a), l = on[s] || on[er], h = Number(d.brushSizes[s] ?? 10), g = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(3, g * 0.5), v = i === "mask" ? a === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : a === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : fn(d.paintColor), b = i === "mask" ? a === "lasso_fill" ? 0.18 : 0.2 : a === "eraser" ? 0.06 : z(Math.max(0.16, Number(v.a ?? 1) * 0.3), 0.16, 0.52), N = i === "mask" ? 0.95 : a === "eraser" ? 0.75 : z(Math.max(0.46, Number(v.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: a,
      preset: l,
      radius: _,
      fillStyle: Nn(v, b),
      strokeStyle: Nn(v, N),
      x: Number(((x = d.pointerPos) == null ? void 0 : x.x) || 0),
      y: Number(((P = d.pointerPos) == null ? void 0 : P.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function Tg() {
    var E, T, R;
    const i = Eg();
    if (!D) return;
    if (!i) {
      D.style.display = "none";
      return;
    }
    let a = i.radius * 2, s = i.radius * 2, l = "999px", h = 0, g = i.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", v = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const b = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let x = Number(i.hotspotX ?? a * 0.5), P = Number(i.hotspotY ?? s * 0.5);
    if (i.toolKind === "lasso_fill")
      a = ss, s = ss, l = "0", _ = "0", v = "none", x = Bv, P = Gv, g = Xv(i.fillStyle, N, b);
    else if (i.layerKind === "mask")
      g = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const G = Math.max(1, Number(((E = i.preset) == null ? void 0 : E.aspect) ?? 1));
      a = Math.max(10, i.radius * 2 * G), s = Math.max(6, i.radius * 2), l = `${Math.min(6, s * 0.42)}px`, h = Number(((R = (T = i.preset) == null ? void 0 : T.angle) == null ? void 0 : R.value) || 0) * Ur;
    } else i.toolKind === "brush" ? g = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (g = "rgba(255,255,255,0.14)");
    D.style.display = "block", D.style.width = `${Math.round(a)}px`, D.style.height = `${Math.round(s)}px`, D.style.borderRadius = l, D.style.border = _, D.style.boxShadow = v, D.style.background = g, D.style.backgroundRepeat = "no-repeat", D.style.backgroundPosition = "center", D.style.backgroundSize = "contain", D.style.transform = `translate(${Math.round(i.x - x)}px, ${Math.round(i.y - P)}px) rotate(${h}deg)`;
  }
  function Lg() {
    var Nt;
    if (!$ || !j) return;
    const i = d.primaryTool === "mask" ? "mask" : "paint", a = i === "mask" ? d.maskTool : d.paintTool;
    if (a === "lasso_fill") return;
    const s = br(a), l = on[s] || on[er], h = Number(d.brushSizes[s] ?? 10), g = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(6, g * 0.5), v = a === "eraser", b = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : v ? { r: 1, g: 1, b: 1, a: 0.22 } : fn(d.paintColor), N = i === "mask" ? Nn(b, 0.22) : v ? "rgba(255,255,255,0.14)" : Nn(b, z(Math.max(0.18, Number(b.a ?? 1) * 0.34), 0.18, 0.56)), x = i === "mask" ? Nn(b, 0.96) : v ? "rgba(255,255,255,0.72)" : Nn(b, z(Math.max(0.56, Number(b.a ?? 1) * 0.96), 0.56, 1));
    let P = _ * 2, E = _ * 2, T = "999px", R = 0, G = N;
    const tt = "rgba(222, 222, 222, 0.72)", gt = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      G = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (a === "marker") {
      const dt = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      P = Math.max(16, _ * 2 * dt), E = Math.max(10, _ * 2), T = `${Math.min(8, E * 0.42)}px`, R = Number(((Nt = l == null ? void 0 : l.angle) == null ? void 0 : Nt.value) || 0) * Ur;
    } else a === "brush" ? G = `radial-gradient(circle at 50% 50%, ${x} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : a === "lasso_fill" ? (P = Math.max(18, _ * 1.8), E = P, G = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${x} 43%, ${x} 58%, rgba(0,0,0,0) 59%)`) : v && (G = "rgba(255,255,255,0.12)");
    j.style.width = `${Math.round(P)}px`, j.style.height = `${Math.round(E)}px`, j.style.borderRadius = T, j.style.background = G, j.style.border = `1px solid ${tt}`, j.style.boxShadow = `0 0 0 1px ${gt}`, j.style.transform = `rotate(${R}deg)`, V && (clearTimeout(V), V = 0), $.classList.remove("fade-out"), $.classList.add("show");
  }
  function ta() {
    !$ || !$.classList.contains("show") || ($.classList.add("fade-out"), V && clearTimeout(V), V = window.setTimeout(() => {
      $.classList.remove("show", "fade-out"), V = 0;
    }, 180));
  }
  function Dg(i, a, s, l) {
    const h = br(a), g = on[h] || on[er], _ = d.brushSizes[h] ?? 10, v = Math.max(1, _) * Math.max(0.1, g.sizeScale ?? 1), b = Ig(l, v), N = s.map((P) => ({
      ...P,
      t: Number((P == null ? void 0 : P.t) || 0),
      widthScale: Number.isFinite(Number(P == null ? void 0 : P.widthScale)) ? Math.max(0, Number(P.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(P == null ? void 0 : P.pressureLike)) ? Math.max(0, Number(P.pressureLike)) : 1
    })), x = {
      id: _i(i),
      actionGroupId: _i("ag"),
      targetSpace: l && typeof l == "object" ? { ...l } : { kind: "ERP_GLOBAL" },
      layerKind: i,
      toolKind: a,
      size: v,
      createdAt: Date.now(),
      color: i === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: b.radiusModel,
      radiusValue: b.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((P) => ({ ...P })),
        points: N.map((P) => ({ ...P }))
      }
    };
    return zf(x, g), x;
  }
  function Rg(i, a, s, l) {
    const h = s.map((b) => ({
      ...b,
      t: Number((b == null ? void 0 : b.t) || 0),
      widthScale: Number.isFinite(Number(b == null ? void 0 : b.widthScale)) ? Math.max(0, Number(b.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(b == null ? void 0 : b.pressureLike)) ? Math.max(0, Number(b.pressureLike)) : 1
    })), g = br(a), _ = on[g] || on[er], v = {
      id: _i(i),
      actionGroupId: _i("ag"),
      targetSpace: l && typeof l == "object" ? { ...l } : { kind: "ERP_GLOBAL" },
      layerKind: i,
      toolKind: a,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((b) => ({ ...b }))
      }
    };
    return zf(v, _), v;
  }
  function ui(i) {
    const a = p.painting || (p.painting = ko(null)), s = a[i] || (a[i] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function Og(i, a, s = performance.now()) {
    let l;
    if (d.mode === "frame") {
      const N = re();
      if (!N) return !1;
      l = bn(a, N, s);
    } else
      l = vn(a, s);
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, g = i.stroke.geometry.points, _ = h[h.length - 1];
    if (_) {
      const N = Math.abs(Number(l.u ?? l.x ?? 0) - Number(_.u ?? _.x ?? 0)), x = Math.abs(Number(l.v ?? l.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (N < 15e-4 && x < 15e-4) return !1;
    }
    const v = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...v }), g.push({ ...v });
    const b = Yn();
    if (b) {
      const N = d.paintEngine.ensureTarget(b);
      d.paintEngine.appendStrokePoint(N, Number(v.u ?? 0), Number(v.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Fg(i, a, s = performance.now()) {
    var _, v;
    let l;
    if (d.mode === "frame") {
      const b = re();
      if (!b) return !1;
      l = bn(a, b, s);
    } else
      l = vn(a, s);
    const h = (v = (_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : v.points;
    if (!l || !Array.isArray(h)) return !1;
    const g = h[h.length - 1];
    if (g) {
      const b = Math.abs(Number(l.u ?? l.x ?? 0) - Number(g.u ?? g.x ?? 0)), N = Math.abs(Number(l.v ?? l.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (b < 15e-4 && N < 15e-4) return !1;
    }
    return h.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function $g(i) {
    var dt, _t, ht, xt, lt;
    const a = (i == null ? void 0 : i.stroke) || null;
    if (!a || (i == null ? void 0 : i.layerKind) !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return !1;
    si();
    const s = Yn(), l = Dr(s.width, s.height);
    if (!Kl(l, a, { w: s.width, h: s.height })) return !1;
    const h = ((_t = (dt = l.ctx) == null ? void 0 : dt.getImageData(0, 0, s.width, s.height)) == null ? void 0 : _t.data) || null;
    if (!h) return !1;
    const g = new Map(Ie().map((B) => [String((B == null ? void 0 : B.actionGroupId) || (B == null ? void 0 : B.id) || "").trim(), B ? { ...B } : null])), _ = [], v = [], b = [...ln().filter((B) => String((B == null ? void 0 : B.layerKind) || "paint") !== "paint")];
    let N = !1, x = Tr().reduce((B, ot) => Math.max(B, Number((ot == null ? void 0 : ot.z_index) || 0)), -1) + 1;
    function P(B, ot, Et, Ot = 8) {
      let Tt = ot, Vt = Et, Ut = -1, Kt = -1;
      for (let qt = 0; qt < Et; qt += 1)
        for (let he = 0; he < ot; he += 1)
          B[(qt * ot + he) * 4 + 3] <= Ot || (he < Tt && (Tt = he), qt < Vt && (Vt = qt), he > Ut && (Ut = he), qt > Kt && (Kt = qt));
      return Ut < Tt || Kt < Vt ? null : { minX: Tt, minY: Vt, maxX: Ut, maxY: Kt };
    }
    const E = P(h, s.width, s.height, 8);
    if (!E) return !1;
    function T(B, ot) {
      return !B || !ot ? !1 : !(B.maxX < ot.minX || ot.maxX < B.minX || B.maxY < ot.minY || ot.maxY < B.minY);
    }
    function R(B, ot) {
      const Et = Er((B == null ? void 0 : B.actionGroupId) || (B == null ? void 0 : B.id) || "", "paint", ot);
      if (!Et) return null;
      const Ot = Et.centerUv.u - Et.halfW, Tt = Et.centerUv.u + Et.halfW, Vt = Et.centerUv.v - Et.halfH, Ut = Et.centerUv.v + Et.halfH, Kt = s.width, qt = s.height;
      return {
        minX: Math.floor((Ot % 1 + 1) % 1 * Kt),
        maxX: Math.ceil((Tt % 1 + 1) % 1 * Kt),
        minY: Math.floor(z(Vt, 0, 1) * qt),
        maxY: Math.ceil(z(Ut, 0, 1) * qt),
        wraps: Tt - Ot >= 1 || Ot < 0 || Tt > 1
      };
    }
    function G(B) {
      const ot = (B == null ? void 0 : B.bbox) || null;
      if (!ot) return null;
      const Et = (B == null ? void 0 : B.transform) || {}, Ot = s.width, Tt = s.height, Vt = Number(ot.u0 || 0) + Number(Et.du || 0), Ut = Number(ot.u1 || 0) + Number(Et.du || 0), Kt = Number(ot.v0 || 0) + Number(Et.dv || 0), qt = Number(ot.v1 || 0) + Number(Et.dv || 0);
      return {
        minX: Math.floor((Vt % 1 + 1) % 1 * Ot),
        maxX: Math.ceil((Ut % 1 + 1) % 1 * Ot),
        minY: Math.floor(z(Kt, 0, 1) * Tt),
        maxY: Math.ceil(z(qt, 0, 1) * Tt),
        wraps: Ut - Vt >= 1 || Vt < 0 || Ut > 1
      };
    }
    function tt(B) {
      return B ? B.wraps ? T(E, { minX: 0, maxX: B.maxX, minY: B.minY, maxY: B.maxY }) || T(E, { minX: B.minX, maxX: s.width - 1, minY: B.minY, maxY: B.maxY }) : T(E, B) : !0;
    }
    function gt(B) {
      if (!B) return { touched: !1, canvas: null };
      const ot = Dr(s.width, s.height);
      ot.ctx.drawImage(B, 0, 0);
      const Et = ot.ctx.getImageData(0, 0, s.width, s.height);
      ot.ctx.save(), ot.ctx.globalCompositeOperation = "destination-out", ot.ctx.drawImage(l.canvas, 0, 0), ot.ctx.restore();
      const Ot = ot.ctx.getImageData(0, 0, s.width, s.height);
      for (let Tt = 0; Tt < s.width * s.height; Tt += 1) {
        if (h[Tt * 4 + 3] <= 8) continue;
        const Ut = Et.data[Tt * 4 + 3], Kt = Ot.data[Tt * 4 + 3];
        if (Ut > Kt)
          return { touched: !0, canvas: ot.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function Nt(B, ot, Et) {
      const Ot = Number(Et == null ? void 0 : Et.z_index), Tt = ag(B, ot, Et).map((Vt, Ut) => ({
        ...Vt,
        z_index: Number.isFinite(Ot) ? Ot + Ut * 1e-3 : x + Ut * 1e-3
      }));
      return Tt.length && (x = Math.max(x, ...Tt.map((Vt) => Number((Vt == null ? void 0 : Vt.z_index) || 0))) + 1), Tt;
    }
    for (const B of Ie()) {
      const ot = String((B == null ? void 0 : B.actionGroupId) || (B == null ? void 0 : B.id) || "").trim();
      if (!ot) continue;
      const Et = mn(ot, "paint");
      if (!tt(R(B, Et))) {
        v.push(B), _.push(...Et);
        continue;
      }
      const Ot = ((xt = (ht = d.paintEngine) == null ? void 0 : ht.getGroupTarget) == null ? void 0 : xt.call(ht, ot)) || null, Tt = ((lt = Ot == null ? void 0 : Ot.committedPaint) == null ? void 0 : lt.canvas) || null;
      if (!Tt) {
        v.push(B), _.push(...Et);
        continue;
      }
      const Vt = gt(Tt);
      if (!Vt.touched || !Vt.canvas) {
        v.push(B), _.push(...Et);
        continue;
      }
      N = !0;
      const Ut = Nt(Vt.canvas, "paint", g.get(ot) || B || {});
      b.push(...Ut);
    }
    for (const B of ln().filter((ot) => String((ot == null ? void 0 : ot.layerKind) || "paint") === "paint")) {
      if (!tt(G(B))) {
        b.push(B);
        continue;
      }
      const ot = Ko(B, null);
      if (!ot) {
        b.push(B);
        continue;
      }
      const Et = gt(ot);
      if (!Et.touched || !Et.canvas) {
        b.push(B);
        continue;
      }
      N = !0;
      const Ot = Nt(Et.canvas, "paint", B);
      b.push(...Ot);
    }
    return N ? (p.painting.paint.strokes = _, p.painting.groups = v.sort((B, ot) => Number((B == null ? void 0 : B.z_index) || 0) - Number((ot == null ? void 0 : ot.z_index) || 0)), p.painting.raster_objects = b.sort((B, ot) => Number((B == null ? void 0 : B.z_index) || 0) - Number((ot == null ? void 0 : ot.z_index) || 0)), ii({ preservePanelValues: !1 }), !0) : !1;
  }
  function Vg(i) {
    var g, _, v, b;
    const a = ((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) || null;
    if (!a) return !1;
    const s = String(((_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (i.layerKind === "paint" && s === "eraser")
      return a.geometryKind !== "lasso_fill" && (a.processedPoints = zs(a.rawPoints || a.points || [], i.stroke.targetSpace, !0)), $g(i);
    const l = i.layerKind === "paint" && s !== "eraser";
    if (a.geometryKind === "lasso_fill")
      return (Array.isArray(a.points) ? a.points : []).length < 3 ? !1 : (l && bl((v = i.stroke) == null ? void 0 : v.actionGroupId), ui(i.layerKind).push(i.stroke), !0);
    const h = a.rawPoints || a.points || [];
    return h.length < 1 ? !1 : (a.processedPoints = zs(h, i.stroke.targetSpace, !0), l && bl((b = i.stroke) == null ? void 0 : b.actionGroupId), ui(i.layerKind).push(i.stroke), !0);
  }
  function au(i) {
    var s;
    if (e === "cutout" && d.mode === "frame") {
      const l = re(), h = qe(l);
      if (!l || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const _ = bn(i, l, performance.now()), v = _ ? Xi(_) : null;
      if (v)
        for (const N of Fs()) {
          if (!Le(N)) continue;
          const x = Ji(N, v);
          if (x && Number(x.x) >= 0 && Number(x.x) <= 1 && Number(x.y) >= 0 && Number(x.y) <= 1) {
            const P = De(N);
            if (P != null && P.visible) return { item: N, geom: P };
          }
        }
      const b = Ns(!1).slice().sort((N, x) => Number((x == null ? void 0 : x.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of b) {
        if (N.type === "strokeGroup") {
          const E = ni(fr("paint", N.actionGroupId || N.id || ""));
          if (!E) continue;
          const T = De(E);
          if (!(T != null && T.visible)) continue;
          const R = Array.isArray(T.strokePaths) ? T.strokePaths : [];
          for (const G of R) {
            const tt = Array.isArray(G == null ? void 0 : G.points) ? G.points : [];
            if (!tt.length) continue;
            if (G.closed && tt.length >= 3 && nr(i, tt)) return { item: E, geom: T };
            const gt = Math.max(8, Number((G == null ? void 0 : G.lineWidth) || 0) * 0.5 + 6);
            for (let Nt = 0; Nt < tt.length - 1; Nt += 1)
              if (wc(i, tt[Nt], tt[Nt + 1]) <= gt * gt) return { item: E, geom: T };
            if (tt.length === 1 && jr(i, tt[0]) <= gt * gt) return { item: E, geom: T };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const E = ei(dr(((s = N.item) == null ? void 0 : s.id) || N.id || ""));
          if (!E) continue;
          const T = De(E);
          if (Dl(E, T, i, _)) return { item: E, geom: T };
          continue;
        }
        const x = N.item;
        if (!x || !Le(x) || !v) continue;
        const P = Ji(x, v);
        if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
          const E = De(x);
          if (E != null && E.visible) return { item: x, geom: E };
        }
      }
      return null;
    }
    const a = [
      ...Ns(!1).slice().sort((l, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var h;
        return l.type === "strokeGroup" ? ni(fr("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? ei(dr(((h = l.item) == null ? void 0 : h.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...e === "cutout" ? Fs().filter((l) => gn(l)) : []
    ];
    for (const l of a) {
      if (Ae(l)) {
        const g = De(l);
        if (!(g != null && g.visible)) continue;
        const _ = Array.isArray(g.strokePaths) ? g.strokePaths : [];
        for (const v of _) {
          const b = Array.isArray(v == null ? void 0 : v.points) ? v.points : [];
          if (!b.length) continue;
          if (v.closed && b.length >= 3 && nr(i, b)) return { item: l, geom: g };
          const N = Math.max(8, Number((v == null ? void 0 : v.lineWidth) || 0) * 0.5 + 6);
          for (let x = 0; x < b.length - 1; x += 1)
            if (wc(i, b[x], b[x + 1]) <= N * N) return { item: l, geom: g };
          if (b.length === 1 && jr(i, b[0]) <= N * N) return { item: l, geom: g };
        }
        continue;
      }
      if (Ke(l)) {
        const g = De(l);
        if (!(g != null && g.visible)) continue;
        if (Dl(l, g, i)) return { item: l, geom: g };
        continue;
      }
      const h = De(l);
      if (h.visible && nr(i, h.corners))
        return { item: l, geom: h };
    }
    return null;
  }
  function Ws(i, a) {
    if (!i || !i.visible) return { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (i.kind === "strokeGroup") {
      const l = i.corners.findIndex((g) => jr(g, a) <= 121);
      if (l >= 0) {
        const g = i.corners[l], _ = g.x - i.center.x, v = g.y - i.center.y, b = _ * v >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: b };
      }
      const h = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const g of h) {
        const _ = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && _.length >= 3 && nr(a, _)) return { kind: "move", cursor: "default" };
        const v = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let b = 0; b < _.length - 1; b += 1)
          if (wc(a, _[b], _[b + 1]) <= v * v) return { kind: "move", cursor: "default" };
      }
      return nr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject")
      return nr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (e === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const l = i.edgeMidpoints.find((h) => jr(h, a) <= 169);
      if (l) {
        const h = l.edge === "left" || l.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const s = i.corners.findIndex((l) => jr(l, a) <= 121);
    if (s >= 0) {
      const l = i.corners[s], h = l.x - i.center.x, g = l.y - i.center.y, _ = h * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: _ };
    }
    return jr(i.rotateHandle, a) <= 144 ? { kind: "rotate", cursor: "grab" } : nr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
  }
  function su(i, a) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((a == null ? void 0 : a.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((a == null ? void 0 : a.y) || 0))
    };
  }
  function Hg(i, a) {
    return !!i && !!a && Number(a.x) >= Number(i.x0) && Number(a.x) <= Number(i.x1) && Number(a.y) >= Number(i.y0) && Number(a.y) <= Number(i.y1);
  }
  function zg(i, a) {
    if (!i || !(a != null && a.visible) || !Array.isArray(a.corners)) return !1;
    if (a.corners.some((h) => Hg(i, h))) return !0;
    const s = (Number(i.x0) + Number(i.x1)) * 0.5, l = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!nr({ x: s, y: l }, a.corners);
  }
  function be(i) {
    if (Tg(), d.interaction) {
      d.interaction.kind === "paint_stroke" || d.interaction.kind === "paint_lasso_fill" ? C.style.cursor = "none" : d.interaction.kind === "view" || d.interaction.kind === "pan_frame" ? C.style.cursor = "grabbing" : d.interaction.kind === "move" || d.interaction.kind === "move_multi" || d.interaction.kind === "move_stroke_group" || d.interaction.kind === "move_raster_object" ? C.style.cursor = "move" : d.interaction.kind === "scale" || d.interaction.kind === "scale_x" || d.interaction.kind === "scale_y" ? C.style.cursor = d.interaction.cursor || "nwse-resize" : d.interaction.kind === "rotate" ? C.style.cursor = "grabbing" : C.style.cursor = "default";
      return;
    }
    if (ou()) {
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
    const a = ve(), s = a ? De(a) : null, l = a ? hr(a) : !1, h = l ? { kind: "none", cursor: "default" } : Ws(s, i);
    if (!l && h.kind !== "none") {
      C.style.cursor = h.cursor;
      return;
    }
    if (d.primaryTool === "cursor" && au(i)) {
      C.style.cursor = "default";
      return;
    }
    C.style.cursor = d.mode === "pano" ? "grab" : "default";
  }
  function Xt() {
    if (!Y) return;
    const i = ve(), a = An();
    if (!i && a.length === 0 || d.interaction) {
      Y.style.display = "none";
      return;
    }
    if (a.length > 1) {
      const lt = "multi", B = ks(a);
      if (d.menuMode !== lt)
        Y.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Lt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Lt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${B ? "Unlock" : "Lock"}" data-tip="${B ? "Unlock" : "Lock"}">${B ? Lt.lock_open : Lt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Lt.delete}</button>
        `, d.menuMode = lt, d.menuSize.measured = !1, to(Y);
      else {
        const At = Y.querySelector("[data-action='toggle-lock']");
        At && (At.innerHTML = B ? Lt.lock_open : Lt.lock_closed, At.setAttribute("aria-label", B ? "Unlock" : "Lock"), At.setAttribute("data-tip", B ? "Unlock" : "Lock"));
      }
      const ot = Ps(a);
      if (!(ot != null && ot.visible)) {
        Y.style.display = "none";
        return;
      }
      const Et = ot.corners.map((At) => At.x), Ot = ot.corners.map((At) => At.y), Tt = Math.min(...Et), Vt = Math.max(...Et), Ut = Math.max(...Ot), Kt = Y.style.display, qt = Y.style.visibility;
      Y.style.display = "flex", Y.style.visibility = "hidden";
      const he = Y.getBoundingClientRect(), Xn = Math.round(Number((he == null ? void 0 : he.width) || 0)) || Y.offsetWidth || d.menuSize.w || 220, Zn = Math.round(Number((he == null ? void 0 : he.height) || 0)) || Y.offsetHeight || d.menuSize.h || 40;
      d.menuSize.w = Number.isFinite(Xn) && Xn > 0 ? Xn : 220, d.menuSize.h = Number.isFinite(Zn) && Zn > 0 ? Zn : 40, Y.style.display = Kt, Y.style.visibility = qt, d.menuSize.measured = !0;
      const eo = d.menuSize.w, sa = d.menuSize.h, di = 14;
      Y.style.display = "flex";
      let hi = (Tt + Vt) * 0.5 - eo * 0.5, no = Ut + 18;
      if (hi = z(hi, di, C.width - eo - di), no + sa > C.height - di) {
        Y.style.display = "none";
        return;
      }
      Y.style.left = `${hi}px`, Y.style.top = `${no}px`;
      return;
    }
    const s = Ml(), l = hr(i), h = s === "stroke" ? "stroke:paint" : e === "stickers" || s === "image" ? `stickers:${Pe(i) ? "external" : "normal"}` : `cutout:${d.cutoutAspectOpen ? "open" : "closed"}`;
    if (d.menuMode !== h) {
      if (s === "stroke")
        Y.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Lt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Lt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Lt.lock_open : Lt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Lt.delete}</button>
        `;
      else if (e === "stickers" || s === "image")
        Y.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Lt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Lt.send_back}</button>
          ${Pe(i) ? "" : `<button class="pano-btn pano-btn-icon" data-action="duplicate" aria-label="Duplicate" data-tip="Duplicate">${Lt.duplicate}</button><button class="pano-btn pano-btn-icon" data-action="replace-image" aria-label="Replace Image" data-tip="Replace image">${Lt.replace_image}</button>`}
          ${Pe(i) ? `<button class="pano-btn pano-btn-icon" data-action="back-initial" aria-label="Back to Initial" data-tip="Back to initial position">${Lt.back_initial}</button>` : ""}
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Lt.lock_open : Lt.lock_closed}</button>
          ${Pe(i) ? `<button class="pano-btn pano-btn-icon" data-action="toggle-visible" aria-label="Hide" data-tip="Hide input image">${Lt.eye_dashed}</button>` : `<button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Lt.delete}</button>`}
        `;
      else {
        const lt = bi(i);
        Y.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${Lt.aspect}</button>
            <div class="pano-aspect-popover${d.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
              <button class="pano-btn pano-aspect-choice${lt === "1:1" ? " active" : ""}" data-action="aspect-set" data-aspect="1:1">1:1</button>
              <button class="pano-btn pano-aspect-choice${lt === "4:3" ? " active" : ""}" data-action="aspect-set" data-aspect="4:3">4:3</button>
              <button class="pano-btn pano-aspect-choice${lt === "3:2" ? " active" : ""}" data-action="aspect-set" data-aspect="3:2">3:2</button>
              <button class="pano-btn pano-aspect-choice${lt === "16:9" ? " active" : ""}" data-action="aspect-set" data-aspect="16:9">16:9</button>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon" data-action="rotate-90" aria-label="Rotate 90°" data-tip="Rotate 90°">${Lt.rotate_90}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Lt.lock_open : Lt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Lt.delete}</button>
        `;
      }
      d.menuMode = h, d.menuSize.measured = !1, to(Y);
    }
    if ((e === "stickers" || s === "image") && Pe(i)) {
      const lt = Y.querySelector("[data-action='back-initial']");
      if (lt) {
        const ot = ap();
        lt.disabled = !ot, lt.setAttribute("aria-disabled", ot ? "false" : "true"), lt.setAttribute("data-tip", ot ? "Back to initial position" : "Already at initial position");
      }
      const B = Y.querySelector("[data-action='toggle-visible']");
      if (B) {
        const ot = ri(i);
        B.innerHTML = ot ? Lt.eye : Lt.eye_dashed, B.setAttribute("aria-label", ot ? "Show" : "Hide"), B.setAttribute("data-tip", ot ? "Show input image" : "Hide input image");
      }
    }
    const g = Y.querySelector("[data-action='toggle-lock']");
    g && (g.innerHTML = l ? Lt.lock_open : Lt.lock_closed, g.setAttribute("aria-label", l ? "Unlock" : "Lock"), g.setAttribute("data-tip", l ? "Unlock" : "Lock"));
    const _ = De(i);
    if (!(_ != null && _.visible)) {
      Y.style.display = "none";
      return;
    }
    const v = _.corners, b = v.map((lt) => lt.x), N = v.map((lt) => lt.y), x = Math.min(...b), P = Math.max(...b), E = Math.max(...N), T = Y.style.display, R = Y.style.visibility;
    Y.style.display = "flex", Y.style.visibility = "hidden";
    const G = Y.getBoundingClientRect(), tt = Math.round(Number((G == null ? void 0 : G.width) || 0)) || Y.offsetWidth || d.menuSize.w || 220, gt = Math.round(Number((G == null ? void 0 : G.height) || 0)) || Y.offsetHeight || d.menuSize.h || 40;
    d.menuSize.w = Number.isFinite(tt) && tt > 0 ? tt : 220, d.menuSize.h = Number.isFinite(gt) && gt > 0 ? gt : 40, Y.style.display = T, Y.style.visibility = R, d.menuSize.measured = !0;
    const Nt = d.menuSize.w, dt = d.menuSize.h, _t = 14;
    Y.style.display = "flex";
    let ht = (x + P) * 0.5 - Nt * 0.5, xt = E + 18;
    if (!Number.isFinite(ht) || !Number.isFinite(xt)) {
      Y.style.display = "none";
      return;
    }
    if (ht = z(ht, _t, C.width - Nt - _t), xt + dt > C.height - _t) {
      Y.style.display = "none";
      return;
    }
    Y.style.left = `${ht}px`, Y.style.top = `${xt}px`;
  }
  function ea() {
    Z && (Wt.timer && (clearTimeout(Wt.timer), Wt.timer = 0), Wt.target = null, Z.classList.remove("show", "pano-tooltip-footer", "pano-tooltip-tool-rail"));
  }
  function jg(i) {
    if (!Z || !i || !i.isConnected) return;
    const a = String(i.getAttribute("data-tip") || "").trim();
    if (!a) return;
    Z.textContent = a;
    const s = O.getBoundingClientRect(), l = i.getBoundingClientRect(), h = 8, g = Z.offsetWidth || 100, _ = Z.offsetHeight || 24, v = !!i.closest(".pano-floating-left"), b = !!i.closest(".pano-paint-footer") || !!i.closest(".pano-paint-color-float");
    Z.classList.remove("pano-tooltip-footer", "pano-tooltip-tool-rail");
    let N = l.left - s.left + l.width * 0.5 - g * 0.5, x = l.top - s.top - _ - 8;
    if (v)
      Z.classList.add("pano-tooltip-tool-rail"), N = l.right - s.left + 10, x = l.top - s.top + l.height * 0.5 - _ * 0.5, N = z(N, h, Math.max(h, s.width - g - h)), x = z(x, h, Math.max(h, s.height - _ - h));
    else if (b) {
      Z.classList.add("pano-tooltip-footer");
      const P = i.closest(".pano-paint-footer"), E = P ? P.getBoundingClientRect() : l;
      N = E.left - s.left + E.width * 0.5 - g * 0.5, x = E.bottom - s.top + 5, N = z(N, h, Math.max(h, s.width - g - h)), x = Math.max(h, x);
    }
    N = z(N, h, Math.max(h, s.width - g - h)), x = Math.max(h, x), Z.style.left = `${N}px`, Z.style.top = `${x}px`, Z.classList.add("show");
  }
  function to(i) {
    i.querySelectorAll("[data-tip]").forEach((a) => {
      a.__panoTipBound || (a.__panoTipBound = !0, a.addEventListener("pointerenter", () => {
        Wt.target = a, Wt.timer && clearTimeout(Wt.timer), Wt.timer = window.setTimeout(() => {
          Wt.target === a && jg(a);
        }, 220);
      }), a.addEventListener("pointerleave", () => {
        Wt.target === a && (Wt.target = null), ea();
      }), a.addEventListener("pointerdown", ea));
    });
  }
  const Re = ws({
    getView: () => ({ yaw: d.viewYaw, pitch: d.viewPitch, fov: d.viewFov }),
    setView: (i) => {
      d.viewYaw = Fe(Number(i.yaw || 0)), d.viewPitch = z(Number(i.pitch || 0), -89.9, 89.9), d.viewFov = z(Number(i.fov || d.viewFov || 100), 35, 140);
    },
    getInvert: () => {
      var i, a;
      return {
        x: (i = p.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (a = p.ui_settings) != null && a.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: pr,
    onInteraction: () => {
      kt.dirty = !0;
    }
  });
  C.onpointerdown = (i) => {
    const a = li(i);
    if (Qo(a, !0), d.viewTween = null, Re.state.inertia.active = !1, Re.state.inertia.vx = 0, Re.state.inertia.vy = 0, i.button === 1) {
      i.preventDefault(), d.mode !== "frame" && (d.interaction = { kind: "view", last: a, lastTs: performance.now() }, Re.startDrag(a.x, a.y, i.pointerId, performance.now())), be(a), C.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (r) {
      d.mode === "pano" && (d.interaction = { kind: "view", last: a, lastTs: performance.now() }, Re.startDrag(a.x, a.y, i.pointerId, performance.now()), be(a), C.setPointerCapture(i.pointerId));
      return;
    }
    if (wt && !wt.hidden)
      return;
    if ((d.primaryTool === "paint" || d.primaryTool === "mask") && (ru() || Ks())) {
      const v = d.primaryTool === "mask" ? "mask" : "paint", b = d.primaryTool === "mask" ? d.maskTool : d.paintTool, N = Ks() ? re() : null, x = { kind: "ERP_GLOBAL" }, P = N ? bn(a, N, performance.now()) : vn(a, performance.now());
      d.interaction = {
        kind: b === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: v,
        _livePreviewToken: _i("live"),
        stroke: b === "lasso_fill" ? Rg(v, b, [P], x) : Dg(v, b, [P], x)
      }, qi();
      const E = Yn();
      if (E)
        if (d.paintEngine.beginStroke(d.interaction.stroke, E), d.interaction.kind === "paint_stroke") {
          const T = d.paintEngine.ensureTarget(E), R = Number((P == null ? void 0 : P.u) ?? (P == null ? void 0 : P.x) ?? 0), G = Number((P == null ? void 0 : P.v) ?? (P == null ? void 0 : P.y) ?? 0);
          d.paintEngine.appendStrokePoint(T, R, G, d.interaction.stroke);
        } else
          d.paintEngine.updateActiveStroke(d.interaction.stroke, E);
      be(a), C.setPointerCapture(i.pointerId), ft();
      return;
    }
    const s = An(), l = ve(), h = s.length > 1 ? Ps(s) : l ? De(l) : null;
    if (d.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      d.interaction = { kind: "marquee_select", start: a, current: a }, be(a), C.setPointerCapture(i.pointerId), ft({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (h != null && h.visible)) {
      if ((s.some((b) => hr(b)) ? { kind: "none" } : Ws(h, a)).kind === "move") {
        d.interaction = {
          kind: "move_multi",
          items: s.map((b) => b),
          offset: { x: a.x - h.center.x, y: a.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: s.filter((b) => Le(b)).map((b) => ({
            id: String(b.id || ""),
            yaw_deg: Number(b.yaw_deg || 0),
            pitch_deg: Number(b.pitch_deg || 0),
            center: (() => {
              var x, P;
              const N = De(b);
              return N != null && N.visible ? { x: Number(((x = N.center) == null ? void 0 : x.x) || 0), y: Number(((P = N.center) == null ? void 0 : P.y) || 0) } : { x: a.x, y: a.y };
            })()
          })),
          strokeSnapshots: s.filter((b) => Ae(b)).map((b) => ({
            id: String(b.actionGroupId || b.id || ""),
            layerKind: String(b.layerKind || "paint"),
            snapshot: an(mn(b.actionGroupId, b.layerKind)),
            frameSnapshot: an(Er(b.actionGroupId, b.layerKind)),
            center: (() => {
              var x, P;
              const N = De(b);
              return N != null && N.visible ? { x: Number(((x = N.center) == null ? void 0 : x.x) || 0), y: Number(((P = N.center) == null ? void 0 : P.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: wl(b.actionGroupId, b.layerKind)
          })),
          rasterSnapshots: s.filter((b) => Ke(b)).map((b) => ({
            id: Ge(b.rasterObjectId || b.id || ""),
            snapshot: an(ln().find((N) => String((N == null ? void 0 : N.id) || "") === Ge(b.rasterObjectId || b.id || ""))),
            center: (() => {
              var x, P;
              const N = De(b);
              return N != null && N.visible ? { x: Number(((x = N.center) == null ? void 0 : x.x) || 0), y: Number(((P = N.center) == null ? void 0 : P.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: kp(b)
          }))
        }, be(a), C.setPointerCapture(i.pointerId);
        return;
      }
    } else if (l && (h != null && h.visible)) {
      const v = hr(l) ? { kind: "none" } : Ws(h, a);
      if (v.kind === "scale") {
        d.interaction = Ae(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          snapshot: an(mn(l.actionGroupId, l.layerKind)),
          frameSnapshot: an(Er(l.actionGroupId, l.layerKind)),
          cursor: v.cursor
        } : {
          kind: "scale",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: v.cursor
        }, be(a), C.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "scale_x" || v.kind === "scale_y") {
        d.interaction = {
          kind: v.kind,
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: v.cursor,
          edge: v.edge
        }, be(a), C.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "rotate") {
        d.interaction = Ae(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: h.center,
          startAng: Math.atan2(a.y - h.center.y, a.x - h.center.x),
          snapshot: an(mn(l.actionGroupId, l.layerKind)),
          frameSnapshot: an(Er(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: h.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(a.y - h.center.y, a.x - h.center.x)
        }, be(a), C.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "move") {
        if (Ae(l)) {
          const b = d.mode === "frame" ? (() => {
            const N = re();
            return N ? bn(a, N, performance.now()) : null;
          })() : vn(a, performance.now());
          d.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: b,
            snapshot: an(mn(l.actionGroupId, l.layerKind)),
            frameSnapshot: an(Er(l.actionGroupId, l.layerKind))
          }, be(a), C.setPointerCapture(i.pointerId);
          return;
        }
        if (Ke(l)) {
          const b = d.mode === "frame" ? (() => {
            const N = re();
            return N ? bn(a, N, performance.now()) : null;
          })() : vn(a, performance.now());
          d.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: b,
            snapshot: an(ln().find((N) => String((N == null ? void 0 : N.id) || "") === Ge(l.rasterObjectId || l.id || "")))
          }, be(a), C.setPointerCapture(i.pointerId);
          return;
        }
        d.interaction = {
          kind: "move",
          item: l,
          offset: { x: a.x - h.center.x, y: a.y - h.center.y }
        }, be(a), C.setPointerCapture(i.pointerId);
        return;
      }
    }
    const g = au(a);
    if (g) {
      const v = d.selectedId !== g.item.id;
      if (v && d.selectedId && (le(), En()), Uo(g.item), e === "cutout" && v && (d.cutoutAspectOpen = !1), v && ee(), Xt(), ft(), v) {
        be(a);
        return;
      }
      if (hr(g.item)) {
        be(a);
        return;
      }
      d.interaction = {
        kind: Ae(g.item) ? "move_stroke_group" : Ke(g.item) ? "move_raster_object" : "move",
        item: g.item,
        offset: { x: a.x - g.geom.center.x, y: a.y - g.geom.center.y },
        startUv: Ae(g.item) || Ke(g.item) ? d.mode === "frame" ? (() => {
          const b = re();
          return b ? bn(a, b, performance.now()) : null;
        })() : vn(a, performance.now()) : null,
        snapshot: Ae(g.item) ? an(mn(g.item.actionGroupId, g.item.layerKind)) : Ke(g.item) ? an(ln().find((b) => String((b == null ? void 0 : b.id) || "") === Ge(g.item.rasterObjectId || g.item.id || ""))) : null,
        frameSnapshot: Ae(g.item) ? an(Er(g.item.actionGroupId, g.item.layerKind)) : null
      }, be(a), C.setPointerCapture(i.pointerId);
      return;
    }
    const _ = !!d.selectedId;
    _ && (le(), En()), ii(), _ && ee(), Xt(), ft(), d.mode === "pano" && (d.interaction = { kind: "view", last: a, lastTs: performance.now() }, Re.startDrag(a.x, a.y, i.pointerId, performance.now()), be(a), C.setPointerCapture(i.pointerId));
  }, C.onpointermove = (i) => {
    var l, h, g, _, v, b, N, x, P, E, T, R, G, tt, gt, Nt, dt, _t;
    const a = li(i);
    if (Qo(a, !0), !d.interaction) {
      be(a);
      return;
    }
    be(a);
    const s = d.interaction;
    if (s.kind === "paint_stroke") {
      const ht = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let xt = !1;
      ht.forEach((lt) => {
        const B = li(lt);
        Og(s, B, performance.now()) && (xt = !0);
      }), xt && ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const ht = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let xt = !1;
      if (ht.forEach((lt) => {
        const B = li(lt);
        Fg(s, B, performance.now()) && (xt = !0);
      }), xt) {
        const lt = Yn();
        lt && d.paintEngine.updateActiveStroke(s.stroke, lt), ft({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const ht = performance.now();
      Re.moveDrag(a.x, a.y, d.mode === "unwrap" ? "unwrap" : "pano", ht), s.lastTs = ht, s.last = a, ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      d.frameView.panX += a.x - s.last.x, d.frameView.panY += a.y - s.last.y, s.last = a, ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const ht = a.x - s.offset.x, xt = a.y - s.offset.y;
      if (d.mode === "frame" && e === "cutout") {
        const lt = re(), B = qe(lt);
        if (!lt || !B) return;
        const ot = {
          x: z((ht - B.x) / Math.max(1, B.w), 0, 1),
          y: z((xt - B.y) / Math.max(1, B.h), 0, 1)
        }, Et = Hs(lt, ot);
        if (!Et) return;
        const Ot = Na(Et);
        s.item.yaw_deg = Ot.yaw, s.item.pitch_deg = Ot.pitch;
      } else if (d.mode === "unwrap") {
        const lt = pr(), B = z((ht - lt.x) / Math.max(lt.w, 1), 0, 1), ot = z((xt - lt.y) / Math.max(lt.h, 1), 0, 1);
        s.item.yaw_deg = Fe(B * 360 - 180), s.item.pitch_deg = z(90 - ot * 180, -90, 90);
      } else {
        const lt = Is(ht, xt), B = Na(lt);
        s.item.yaw_deg = B.yaw, s.item.pitch_deg = B.pitch;
      }
      ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const ht = d.mode === "frame" ? (() => {
        const B = re();
        return B ? bn(a, B, performance.now()) : null;
      })() : vn(a, performance.now());
      if (!ht || !s.startUv) return;
      const xt = Number(ht.u || 0) - Number(s.startUv.u || 0), lt = Number(ht.v || 0) - Number(s.startUv.v || 0);
      xl((l = s.item) == null ? void 0 : l.actionGroupId, xt, lt, s.snapshot, (h = s.item) == null ? void 0 : h.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !0 }), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const ht = d.mode === "frame" ? (() => {
        const B = re();
        return B ? bn(a, B, performance.now()) : null;
      })() : vn(a, performance.now());
      if (!ht || !s.startUv) return;
      const xt = Number(ht.u || 0) - Number(s.startUv.u || 0), lt = Number(ht.v || 0) - Number(s.startUv.v || 0);
      Nl(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((_ = s.item) == null ? void 0 : _.id) || "", xt, lt, s.snapshot) && (Zi(), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const ht = a.x - Number(((v = s.offset) == null ? void 0 : v.x) || 0), xt = a.y - Number(((b = s.offset) == null ? void 0 : b.y) || 0);
      let lt = !1, B = !1, ot = !1;
      const Et = ht - Number(((N = s.startCenter) == null ? void 0 : N.x) || ht), Ot = xt - Number(((x = s.startCenter) == null ? void 0 : x.y) || xt);
      for (const Tt of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const Vt = (e === "cutout" ? Ms() : rn()).find((Kt) => String((Kt == null ? void 0 : Kt.id) || "") === String(Tt.id || ""));
        if (!Vt || !Le(Vt)) continue;
        const Ut = {
          x: Number(((P = Tt.center) == null ? void 0 : P.x) || 0) + Et,
          y: Number(((E = Tt.center) == null ? void 0 : E.y) || 0) + Ot
        };
        if (d.mode === "frame" && e === "cutout") {
          const Kt = re(), qt = qe(Kt);
          if (!Kt || !qt) continue;
          const he = {
            x: z((Ut.x - qt.x) / Math.max(1, qt.w), 0, 1),
            y: z((Ut.y - qt.y) / Math.max(1, qt.h), 0, 1)
          }, Xn = Hs(Kt, he);
          if (!Xn) continue;
          const Zn = Na(Xn);
          Vt.yaw_deg = Zn.yaw, Vt.pitch_deg = Zn.pitch;
        } else if (d.mode === "unwrap") {
          const Kt = pr(), qt = z((Ut.x - Kt.x) / Math.max(Kt.w, 1), 0, 1), he = z((Ut.y - Kt.y) / Math.max(Kt.h, 1), 0, 1);
          Vt.yaw_deg = Fe(qt * 360 - 180), Vt.pitch_deg = z(90 - he * 180, -90, 90);
        } else {
          const Kt = Is(Ut.x, Ut.y), qt = Na(Kt);
          Vt.yaw_deg = qt.yaw, Vt.pitch_deg = qt.pitch;
        }
        lt = !0;
      }
      for (const Tt of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const Vt = {
          x: Number(((T = Tt.center) == null ? void 0 : T.x) || 0) + Et,
          y: Number(((R = Tt.center) == null ? void 0 : R.y) || 0) + Ot
        }, Ut = d.mode === "frame" ? (() => {
          const qt = re();
          return qt ? bn(Vt, qt, performance.now()) : null;
        })() : vn(Vt, performance.now()), Kt = Tt.centerUv || null;
        if (Ut && Kt) {
          const qt = Number(Ut.u || 0) - Number(Kt.u || 0), he = Number(Ut.v || 0) - Number(Kt.v || 0);
          xl(Tt.id, qt, he, Tt.snapshot, Tt.layerKind, Tt.frameSnapshot) && (lt = !0, B = !0);
        }
      }
      for (const Tt of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const Vt = {
          x: Number(((G = Tt.center) == null ? void 0 : G.x) || 0) + Et,
          y: Number(((tt = Tt.center) == null ? void 0 : tt.y) || 0) + Ot
        }, Ut = d.mode === "frame" ? (() => {
          const qt = re();
          return qt ? bn(Vt, qt, performance.now()) : null;
        })() : vn(Vt, performance.now()), Kt = Tt.centerUv || null;
        if (Ut && Kt) {
          const qt = Number(Ut.u || 0) - Number(Kt.u || 0), he = Number(Ut.v || 0) - Number(Kt.v || 0);
          Nl(Tt.id, qt, he, Tt.snapshot) && (lt = !0, ot = !0);
        }
      }
      lt && (B ? In({ rebuildPaintEngine: !0 }) : ot ? Zi() : yn(), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const xt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Sl((gt = s.item) == null ? void 0 : gt.actionGroupId, xt, 0, s.snapshot, (Nt = s.item) == null ? void 0 : Nt.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !0 }), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let ht = (Math.atan2(a.y - s.center.y, a.x - s.center.x) - Number(s.startAng || 0)) * Ur;
      i.shiftKey && (ht = Math.round(ht / 45) * 45), Sl((dt = s.item) == null ? void 0 : dt.actionGroupId, 1, ht, s.snapshot, (_t = s.item) == null ? void 0 : _t.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !0 }), ft({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = a, ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const xt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = z(s.startHFOV * xt, 1, 179), s.item.vFOV_deg = z(s.startVFOV * xt, 1, 179), s.item.aspect_id = Br(s.item), ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const xt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = z(s.startHFOV * xt, 1, 179), s.item.aspect_id = Br(s.item), ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const xt = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = z(s.startVFOV * xt, 1, 179), s.item.aspect_id = Br(s.item), ft({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let xt = (Math.atan2(a.y - s.center.y, a.x - s.center.x) - s.startAng) * Ur, lt = s.startRot - xt;
      i.shiftKey && (lt = Math.round(lt / 45) * 45);
      const B = Le(s.item) ? "rot_deg" : "roll_deg";
      s.item[B] = lt, ft({ localOnly: !0 });
    }
  }, C.onpointerup = () => {
    var a, s, l, h, g, _;
    const i = d.interaction;
    if (((a = d.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill")
      if (qi(), Vg(d.interaction)) {
        In();
        const v = String(((l = d.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (v) {
          const N = Ie().find((x) => String((x == null ? void 0 : x.actionGroupId) || "") === v);
          N && (N.frame = null);
        }
        const b = Yn();
        b && (String(((h = d.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (d.paintEngine.cancelActiveStroke(b), Bl()) : d.paintEngine.commitActiveStroke(d.interaction.stroke, b)), le(), En(), ee(), Xt(), t.setDirtyCanvas(!0, !0), ft();
      } else {
        const v = Yn();
        v && d.paintEngine.cancelActiveStroke(v);
      }
    else if (((g = d.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const v = su(d.interaction.start, d.interaction.current), N = [
        ...e === "cutout" ? Fs().filter((x) => !gn(x)) : [...rn()],
        ...Bh(),
        ...Gh()
      ].filter((x) => zg(v, De(x)));
      Zh(N, ((_ = N[N.length - 1]) == null ? void 0 : _.id) || null), e === "cutout" && N.length && (d.cutoutAspectOpen = !1), ee(), Xt(), ft();
    } else if (d.interaction && d.interaction.kind !== "view" && d.interaction.kind !== "pan_frame") {
      let v = !1;
      (d.interaction.kind === "move_stroke_group" || d.interaction.kind === "scale_stroke_group" || d.interaction.kind === "rotate_stroke_group") && (v = !0), d.interaction.kind === "move_raster_object" && (v = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length && (v = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.rasterSnapshots) && d.interaction.rasterSnapshots.length && (v = !0), v && Zi(), le(), En(), t.setDirtyCanvas(!0, !0), Us(), d.hqFrames = 1, Xt(), ft();
    }
    d.interaction = null, qi(), i && i.kind === "view" && Re.endDrag(performance.now()), Go(), Xt(), be(d.pointerPos), ft();
  }, C.onpointercancel = () => {
    var i, a, s;
    if (((i = d.interaction) == null ? void 0 : i.kind) === "view" && Re.endDrag(performance.now()), ((a = d.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      qi();
      const l = Yn();
      l && d.paintEngine.cancelActiveStroke(l);
    }
    d.interaction = null, qi(), Go(), be(d.pointerPos), ft({ localOnly: !0 });
  }, C.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, C.onmousemove = (i) => {
    const a = li(i);
    Qo(a, !0), !d.interaction && be(a);
  }, C.onmouseleave = () => {
    Qo(d.pointerPos, !1), be(d.pointerPos);
  }, C.onwheel = (i) => {
    if (d.mode === "frame") {
      const a = li(i), s = i.deltaY < 0 ? 1.1 : 1 / 1.1;
      Ag(a, s) && ft({ localOnly: !0 }), i.preventDefault();
      return;
    }
    d.mode === "pano" && (Re.applyWheelEvent(i) && ft({ localOnly: !0 }), i.preventDefault());
  }, C.ondragover = (i) => {
    e !== "stickers" && e !== "cutout" || r || (i.preventDefault(), Ee(!0));
  }, C.ondrop = (i) => {
    var l;
    if (e !== "stickers" && e !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Zt.depth = 0, Ee(!1);
    const s = Array.from(((l = i.dataTransfer) == null ? void 0 : l.files) || []).find((h) => Jo(h));
    s && Yl(s);
  };
  const cu = (i) => {
    e !== "stickers" && e !== "cutout" || r || Me(i) && (Zt.depth += 1, Ee(!0), i.preventDefault());
  }, lu = (i) => {
    e !== "stickers" && e !== "cutout" || r || (!Zt.active && Me(i) && Ee(!0), Zt.active && i.preventDefault());
  }, uu = (i) => {
    if (e !== "stickers" && e !== "cutout" || r || !Zt.active) return;
    Zt.depth = Math.max(0, Zt.depth - 1);
    const a = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Zt.depth === 0 || a) && Ee(!1);
  }, fu = (i) => {
    e !== "stickers" && e !== "cutout" || r || (Zt.depth = 0, Ee(!1), Me(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", cu, !0), window.addEventListener("dragover", lu, !0), window.addEventListener("dragleave", uu, !0), window.addEventListener("drop", fu, !0), Q.forEach((i) => {
    i.onclick = () => {
      i.disabled || (d.mode = i.dataset.view, e === "cutout" && d.mode === "frame" && ve() && gn(ve()) && (ii({ preservePanelValues: !0 }), ee(), Xt()), Gs(), Go(), ft());
    };
  });
  function qs() {
    const { canUndo: i, canRedo: a } = ql();
    A.querySelectorAll("[data-action='undo'], [data-tool-ui-action='undo']").forEach((s) => {
      s.disabled = !i;
    }), A.querySelectorAll("[data-action='redo'], [data-tool-ui-action='redo']").forEach((s) => {
      s.disabled = !a;
    });
  }
  const Ys = A.querySelector("[data-action='undo']");
  Ys && (Ys.onclick = () => {
    r || Ys.disabled || Qi(-1);
  });
  const Xs = A.querySelector("[data-action='redo']");
  Xs && (Xs.onclick = () => {
    r || Xs.disabled || Qi(1);
  });
  const du = A.querySelector("[data-action='add']");
  du && (du.onclick = () => {
    r || (e === "stickers" ? Bs() : Zl());
  });
  const hu = A.querySelector("[data-action='clear']");
  hu && (hu.onclick = () => {
    r || Ql();
  });
  const pu = A.querySelector("[data-action='save']");
  pu && (pu.onclick = () => {
    r || nu();
  }), A.querySelector("[data-action='reset-view']").onclick = () => {
    nn(0, 0, 100, 180, 680);
  };
  const Or = A.querySelector("[data-action='toggle-grid']"), Zs = () => {
    if (!Or) return;
    const i = !!d.showGrid;
    Or.innerHTML = i ? Lt.eye : Lt.eye_dashed, Or.setAttribute("aria-pressed", i ? "true" : "false"), Or.setAttribute("aria-label", i ? "Hide Grid" : "Show Grid"), Or.setAttribute("data-tip", i ? "Hide grid" : "Show grid");
  };
  if (Or && (Zs(), Or.onclick = () => {
    d.showGrid = !d.showGrid, ib(t == null ? void 0 : t.id, d.showGrid), Zs(), ft();
  }), U && (U.querySelectorAll("[data-tool-mode]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const a = String(i.getAttribute("data-tool-mode") || "cursor");
      d.primaryTool = a, (a === "paint" || a === "mask") && ii({ preservePanelValues: !0 }), un(), ee(), Xt(), ft();
    };
  }), U.querySelectorAll("[data-tool-ui-action]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const a = String(i.getAttribute("data-tool-ui-action") || "");
      if (!((a === "undo" || a === "redo") && i.disabled)) {
        if (a === "undo") Qi(-1);
        else if (a === "redo") Qi(1);
        else if (a === "clear") Ql();
        else if (a === "add") Bs();
        else if (a === "add-image") Bs();
        else if (a === "add-or-look") {
          const s = re();
          if ((p.shots || []).length === 0)
            Zl();
          else {
            const l = s;
            if (!l) return;
            d.selectedId = l.id || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], p.active.selected_shot_id = d.selectedId;
            const h = Fe(Number(l.yaw_deg || 0)), g = z(Number(l.pitch_deg || 0), -89.9, 89.9);
            nn(h, g, d.viewFov), ee(), Xt(), ft();
          }
        }
      }
    };
  })), A.querySelectorAll("[data-paint-tool]").forEach((i) => {
    i.onclick = () => {
      d.primaryTool = "paint";
      const a = String(i.getAttribute("data-paint-tool") || "pen");
      d.paintTool = a, ii({ preservePanelValues: !0 }), on[a] && (d.activeBrushPresetId = a), un(), ee(), Xt(), ft();
    };
  }), A.querySelectorAll("[data-mask-tool]").forEach((i) => {
    i.onclick = () => {
      d.primaryTool = "mask", d.maskTool = String(i.getAttribute("data-mask-tool") || "pen"), ii({ preservePanelValues: !0 }), un(), ee(), Xt(), ft();
    };
  }), Gt.forEach((i) => {
    i.onclick = () => {
      const a = String(i.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
      Sg(a);
    };
  }), I.forEach((i) => {
    i.oninput = () => {
      if (i.disabled) return;
      const a = Math.max(1, Math.min(120, Math.round(Number(i.value)))), s = br(d.primaryTool === "paint" ? d.paintTool : d.maskTool);
      d.brushSizes[s] = a;
      const l = (a - 1) / 119 * 100;
      I.forEach((h) => {
        h.value = String(a), h.style.setProperty("--v", `${z(l, 0, 100)}%`);
      }), L.forEach((h) => {
        h.textContent = String(a);
      }), Lg();
    }, i.onchange = () => ta(), i.addEventListener("pointerup", ta), i.addEventListener("pointercancel", ta), i.addEventListener("blur", ta);
  }), st) {
    st.querySelectorAll("[data-paint-color-swatch]").forEach((a) => {
      a.onclick = () => {
        const s = Ha.find((l) => l.id === a.getAttribute("data-paint-color-swatch"));
        s && (d.paintColor = fn(s.color), bt(!0), un());
      };
    });
    const i = st.querySelector("[data-paint-color-custom]");
    i && (i.onclick = (a) => {
      a.preventDefault(), a.stopPropagation(), wt && !wt.hidden ? bt(!0) : vt(), un();
    });
  }
  const Ug = (i, a) => {
    var v;
    if (!J) return;
    const s = J.getBoundingClientRect(), l = z((i - s.left) / Math.max(1, s.width), 0, 1), h = 1 - z((a - s.top) / Math.max(1, s.height), 0, 1), g = fo(d.customPaintColor), _ = { ...xc(g.h, l, h), a: Number(((v = d.customPaintColor) == null ? void 0 : v.a) ?? 1) };
    d.customPaintColor = fn(_), d.paintColor = fn(_), un();
  }, Bg = (i) => {
    var g;
    if (!Bt) return;
    const a = Bt.getBoundingClientRect(), s = z((i - a.left) / Math.max(1, a.width), 0, 1), l = fo(d.customPaintColor), h = { ...xc(s, l.s, l.v), a: Number(((g = d.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    d.customPaintColor = fn(h), d.paintColor = fn(h), un();
  }, gu = (i, a) => {
    const s = i.pointerId;
    a(i);
    const l = (g) => {
      g.pointerId === s && a(g);
    }, h = (g) => {
      g.pointerId === s && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  J && (J.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), gu(i, (a) => Ug(a.clientX, a.clientY));
  }), Bt && (Bt.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), gu(i, (a) => Bg(a.clientX));
  }), H && (H.oninput = () => {
    const i = { ...d.customPaintColor, a: z(Number(H.value) / 100, 0, 1) };
    d.customPaintColor = fn(i), d.paintColor = fn(i), un();
  });
  const mu = () => {
    if (!ct) return;
    const i = !!d.fullscreen;
    ct.innerHTML = i ? Lt.fullscreen_close : Lt.fullscreen, ct.setAttribute("aria-label", i ? "Exit Fullscreen" : "Fullscreen"), ct.setAttribute("data-tip", i ? "Exit fullscreen" : "Fullscreen");
  }, na = (i) => {
    const a = !!i;
    d.fullscreen !== a && (d.fullscreen = a, A.classList.toggle("pano-modal-fullscreen", a), a ? (d.fullscreenPrevShowGrid = !!d.showGrid, d.showGrid = !1) : d.fullscreenPrevShowGrid !== null && (d.showGrid = !!d.fullscreenPrevShowGrid, d.fullscreenPrevShowGrid = null), Zs(), mu(), ft());
  }, yu = () => document.fullscreenElement === k, Gg = async () => {
    var i, a;
    try {
      if (!document.fullscreenEnabled) {
        na(!d.fullscreen);
        return;
      }
      yu() ? await ((a = document.exitFullscreen) == null ? void 0 : a.call(document)) : await ((i = k.requestFullscreen) == null ? void 0 : i.call(k));
    } catch {
      na(!d.fullscreen);
    }
  }, vu = () => {
    document.fullscreenEnabled && na(yu());
  };
  document.addEventListener("fullscreenchange", vu), ct && (mu(), ct.onclick = (i) => {
    i.preventDefault(), i.stopPropagation(), Gg();
  });
  const bu = () => {
    if (!F) return;
    const i = !!d.outputPreviewExpanded;
    F.innerHTML = i ? Lt.fullscreen_close : Lt.fullscreen, F.setAttribute("aria-label", i ? "Reduce Preview" : "Expand Preview"), F.setAttribute("data-tip", i ? "Reduce preview" : "Expand preview");
  };
  F && (bu(), F.onclick = (i) => {
    i.preventDefault(), i.stopPropagation();
    const a = !d.outputPreviewExpanded;
    d.outputPreviewExpanded = a, d.outputPreviewAnimFrom = d.outputPreviewAnim, d.outputPreviewAnimTo = a ? 1 : 0, d.outputPreviewAnimStartTs = performance.now(), bu(), ft();
  }), Y.addEventListener("click", (i) => {
    const a = i.target.closest("[data-action]");
    if (!a) return;
    const s = a.getAttribute("data-action");
    if (!r) {
      if (s === "aspect") {
        d.cutoutAspectOpen = !d.cutoutAspectOpen, d.menuSize.measured = !1, Xt(), ft();
        return;
      }
      if (s === "aspect-set") {
        const l = ve();
        if (!l) return;
        const h = String(a.getAttribute("data-aspect") || "1:1");
        Mg(l, h), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Us(), le(), Se(), Xt(), ft();
        return;
      }
      if (s === "rotate-90") {
        const l = ve();
        if (!l) return;
        Pg(l), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Us(), le(), Se(), Xt(), ft();
        return;
      }
      if (s === "bring-front") {
        kg();
        return;
      }
      if (s === "send-back") {
        Cg();
        return;
      }
      if (s === "duplicate") {
        Ng();
        return;
      }
      if (s === "replace-image") {
        bg();
        return;
      }
      if (s === "toggle-lock") {
        Xh();
        return;
      }
      if (s === "back-initial") {
        ip();
        return;
      }
      if (s === "toggle-visible") {
        rp();
        return;
      }
      if (s === "delete") {
        tu();
        return;
      }
      ft();
    }
  });
  const Js = t.onExecuted, Qs = t.onConnectionsChange;
  let tc = null, ec = null, nc = null;
  !r && e === "stickers" && (nc = (i = "sync") => {
    Tl(i);
  }, t.__panoExternalStickerSync = nc, tc = function(...a) {
    var s;
    typeof Js == "function" && Js.apply(this, a), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, t.onExecuted = tc, ec = function(...a) {
    var s;
    typeof Qs == "function" && Qs.apply(this, a), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, t.onConnectionsChange = ec), r || (Kc.set(String(t.id ?? "0"), () => Ds()), Pp() && Ds());
  const fi = () => {
    var i, a, s, l, h, g, _, v;
    d.cutoutPreviewSurfaceRaf && (cancelAnimationFrame(d.cutoutPreviewSurfaceRaf), d.cutoutPreviewSurfaceRaf = 0), d.cutoutPreviewSurfaceTimer && (clearTimeout(d.cutoutPreviewSurfaceTimer), d.cutoutPreviewSurfaceTimer = 0), Kc.delete(String(t.id ?? "0")), r || Ds(), document.fullscreenElement === k && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", vu), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (s = (a = t.__panoDomPreview) == null ? void 0 : a.requestDraw) == null || s.call(a), (h = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || h.call(l, !0, !0), (v = (_ = (g = dn) == null ? void 0 : g.canvas) == null ? void 0 : _.setDirty) == null || v.call(_, !0, !0), ea(), yg(), Ee(!1), window.removeEventListener("keydown", _u, !0), window.removeEventListener("keydown", wu, !0), window.removeEventListener("keydown", ra, !0), window.removeEventListener("keyup", ra, !0), window.removeEventListener("keydown", xu, !0), window.removeEventListener("dragenter", cu, !0), window.removeEventListener("dragover", lu, !0), window.removeEventListener("dragleave", uu, !0), window.removeEventListener("drop", fu, !0), !r && e === "stickers" && (t.onExecuted === tc && (t.onExecuted = Js), t.onConnectionsChange === ec && (t.onConnectionsChange = Qs), t.__panoExternalStickerSync === nc && (t.__panoExternalStickerSync = null)), M.unmount(), w.remove();
  }, _u = (i) => {
    var a;
    if (i.key === "Escape") {
      if (d.fullscreen && document.fullscreenElement === k) {
        (a = document.exitFullscreen) == null || a.call(document).catch(() => {
        });
        return;
      }
      if (d.fullscreen) {
        na(!1);
        return;
      }
      fi();
    }
  }, wu = (i) => {
    const a = String(i.key || ""), s = String(i.code || ""), l = Number(i.keyCode || 0);
    if (!(a === "Delete" || s === "Delete" || l === 46) && !(a === "Backspace" || s === "Backspace" || l === 8)) return;
    const _ = i.target, v = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    v === "INPUT" || v === "TEXTAREA" || _ != null && _.isContentEditable || !ve() || (tu(), i.preventDefault(), i.stopPropagation());
  }, ra = (i) => {
    const a = !!(i.ctrlKey || i.metaKey);
    d.marqueeModifier !== a && (d.marqueeModifier = a, be(d.pointerPos));
  }, xu = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const a = String(i.key || "").toLowerCase(), s = String(i.code || "");
    if (a !== "z" && s !== "KeyZ") return;
    const l = i.target, h = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: g, canRedo: _ } = ql();
    i.shiftKey && !_ || !i.shiftKey && !g || (Qi(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", _u, !0), window.addEventListener("keydown", wu, !0), window.addEventListener("keydown", ra, !0), window.addEventListener("keyup", ra, !0), window.addEventListener("keydown", xu, !0), k.addEventListener("pointerdown", (i) => {
    i.target === k && fi();
  }), to(A), hp(), !r && e === "stickers" && Tl("open"), _g(), le(), qs(), un(), at && requestAnimationFrame(() => {
    at.classList.add("is-ready");
  }), ee(), Bo(), Wl(), be(d.pointerPos), ft(), kt.rafId = requestAnimationFrame(js);
}
function qf(t, e, n, r) {
  if (!(t != null && t.prototype)) return;
  const o = (y) => {
    var p, w;
    try {
      (p = y.__panoDomRestore) == null || p.call(y);
    } catch {
    }
    try {
      (w = y.__panoLegacyRestore) == null || w.call(y);
    } catch {
    }
    y.__panoDomPreview = null, y.__panoLegacyPreviewHooked = !1, y.__panoPreviewHooked = !1, y.__panoPreviewAttached = !1, y.__panoPreviewMountKey = null;
  };
  function c(y) {
    var A;
    const p = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === p) return;
    o(y), fb(y, Gc);
    const M = Ci(y, Gc);
    if (M && !M.__panoPreviewPatchedCb) {
      M.__panoPreviewPatchedCb = !0;
      const C = M.callback;
      M.callback = (O) => {
        var $;
        const D = C ? C(O) : void 0;
        return ($ = y.setDirtyCanvas) == null || $.call(y, !0, !1), D;
      };
    }
    const k = Ci(y, "bg_color");
    if (k && (k.value == null || String(k.value).trim() === "" || String(k.value).toLowerCase() === "#000000") && (k.value = "#00ff00", (A = k.callback) == null || A.call(k, "#00ff00")), n === "PanoramaStickers") {
      qc(y, r, () => Io(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = p;
        return;
      }
    }
    qc(y, r, () => Io(y, "cutout")), ov(y, {
      buttonText: r,
      onOpen: () => Io(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = p;
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
  const m = t.prototype.onAdded;
  t.prototype.onAdded = function() {
    const y = m ? m.apply(this, arguments) : void 0;
    return this.widgets && c(this), y;
  };
}
function Sb(t) {
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
function Nb(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const r = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), o = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = o, !r && o < 40) {
      requestAnimationFrame(e);
      return;
    }
    qc(t, "Open Preview", () => Io(t, "stickers", { readOnly: !0, hideSidebar: !1 })), iv(t, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (c) => Io(c, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), t.__panoStandaloneInstallDone = !0, t.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(e);
}
dn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  async beforeQueuePrompt() {
    const t = [...Kc.values()].map((n) => {
      try {
        return typeof n == "function" ? n() : null;
      } catch {
        return null;
      }
    }).filter(Boolean);
    t.length > 0 && await Promise.allSettled(t);
    const e = [...yo.values()];
    e.length > 0 && await Promise.allSettled(e);
  },
  beforeRegisterNodeDef(t, e) {
    const n = String((e == null ? void 0 : e.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && qf(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && qf(t, e, "PanoramaCutout", "Open Cutout Editor"), Fc(n) && Sb(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    Fc(e) && Nb(t);
  }
});
