import * as Ia from "../../scripts/app.js";
import { app as dn } from "../../scripts/app.js";
import { api as Qe } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Qc(t) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const n of t.split(",")) e[n] = 1;
  return (n) => n in e;
}
const he = {}, ki = [], Wn = () => {
}, ed = () => !1, fs = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), ds = (t) => t.startsWith("onUpdate:"), Ge = Object.assign, tl = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, em = Object.prototype.hasOwnProperty, te = (t, e) => em.call(t, e), Ft = Array.isArray, Ci = (t) => Fo(t) === "[object Map]", nd = (t) => Fo(t) === "[object Set]", Du = (t) => Fo(t) === "[object Date]", Ut = (t) => typeof t == "function", Ee = (t) => typeof t == "string", qn = (t) => typeof t == "symbol", se = (t) => t !== null && typeof t == "object", rd = (t) => (se(t) || Ut(t)) && Ut(t.then) && Ut(t.catch), id = Object.prototype.toString, Fo = (t) => id.call(t), nm = (t) => Fo(t).slice(8, -1), od = (t) => Fo(t) === "[object Object]", el = (t) => Ee(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, bo = /* @__PURE__ */ Qc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), hs = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return ((n) => e[n] || (e[n] = t(n)));
}, rm = /-\w/g, en = hs(
  (t) => t.replace(rm, (e) => e.slice(1).toUpperCase())
), im = /\B([A-Z])/g, Zr = hs(
  (t) => t.replace(im, "-$1").toLowerCase()
), ps = hs((t) => t.charAt(0).toUpperCase() + t.slice(1)), ac = hs(
  (t) => t ? `on${ps(t)}` : ""
), Bn = (t, e) => !Object.is(t, e), sc = (t, ...e) => {
  for (let n = 0; n < t.length; n++)
    t[n](...e);
}, ad = (t, e, n, r = !1) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, om = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let Ru;
const gs = () => Ru || (Ru = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ms(t) {
  if (Ft(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = Ee(r) ? lm(r) : ms(r);
      if (o)
        for (const c in o)
          e[c] = o[c];
    }
    return e;
  } else if (Ee(t) || se(t))
    return t;
}
const am = /;(?![^(]*\))/g, sm = /:([^]+)/, cm = /\/\*[^]*?\*\//g;
function lm(t) {
  const e = {};
  return t.replace(cm, "").split(am).forEach((n) => {
    if (n) {
      const r = n.split(sm);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function ys(t) {
  let e = "";
  if (Ee(t))
    e = t;
  else if (Ft(t))
    for (let n = 0; n < t.length; n++) {
      const r = ys(t[n]);
      r && (e += r + " ");
    }
  else if (se(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
const um = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", fm = /* @__PURE__ */ Qc(um);
function sd(t) {
  return !!t || t === "";
}
function dm(t, e) {
  if (t.length !== e.length) return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = nl(t[r], e[r]);
  return n;
}
function nl(t, e) {
  if (t === e) return !0;
  let n = Du(t), r = Du(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = qn(t), r = qn(e), n || r)
    return t === e;
  if (n = Ft(t), r = Ft(e), n || r)
    return n && r ? dm(t, e) : !1;
  if (n = se(t), r = se(e), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(t).length, c = Object.keys(e).length;
    if (o !== c)
      return !1;
    for (const u in t) {
      const f = t.hasOwnProperty(u), m = e.hasOwnProperty(u);
      if (f && !m || !f && m || !nl(t[u], e[u]))
        return !1;
    }
  }
  return String(t) === String(e);
}
const cd = (t) => !!(t && t.__v_isRef === !0), ld = (t) => Ee(t) ? t : t == null ? "" : Ft(t) || se(t) && (t.toString === id || !Ut(t.toString)) ? cd(t) ? ld(t.value) : JSON.stringify(t, ud, 2) : String(t), ud = (t, e) => cd(e) ? ud(t, e.value) : Ci(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (n, [r, o], c) => (n[cc(r, c) + " =>"] = o, n),
    {}
  )
} : nd(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((n) => cc(n))
} : qn(e) ? cc(e) : se(e) && !Ft(e) && !od(e) ? String(e) : e, cc = (t, e = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    qn(t) ? `Symbol(${(n = t.description) != null ? n : e})` : t
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let sn;
class hm {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = sn, !e && sn && (this.index = (sn.scopes || (sn.scopes = [])).push(
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
      const n = sn;
      try {
        return sn = this, e();
      } finally {
        sn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = sn, sn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (sn = this.prevScope, this.prevScope = void 0);
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
function pm() {
  return sn;
}
let de;
const lc = /* @__PURE__ */ new WeakSet();
class fd {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, sn && sn.active && sn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, lc.has(this) && (lc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || hd(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ou(this), pd(this);
    const e = de, n = kn;
    de = this, kn = !0;
    try {
      return this.fn();
    } finally {
      gd(this), de = e, kn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        ol(e);
      this.deps = this.depsTail = void 0, Ou(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? lc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ac(this) && this.run();
  }
  get dirty() {
    return Ac(this);
  }
}
let dd = 0, vo, _o;
function hd(t, e = !1) {
  if (t.flags |= 8, e) {
    t.next = _o, _o = t;
    return;
  }
  t.next = vo, vo = t;
}
function rl() {
  dd++;
}
function il() {
  if (--dd > 0)
    return;
  if (_o) {
    let e = _o;
    for (_o = void 0; e; ) {
      const n = e.next;
      e.next = void 0, e.flags &= -9, e = n;
    }
  }
  let t;
  for (; vo; ) {
    let e = vo;
    for (vo = void 0; e; ) {
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
function pd(t) {
  for (let e = t.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function gd(t) {
  let e, n = t.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), ol(r), gm(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  t.deps = e, t.depsTail = n;
}
function Ac(t) {
  for (let e = t.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (md(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!t._dirty;
}
function md(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Eo) || (t.globalVersion = Eo, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Ac(t))))
    return;
  t.flags |= 2;
  const e = t.dep, n = de, r = kn;
  de = t, kn = !0;
  try {
    pd(t);
    const o = t.fn(t._value);
    (e.version === 0 || Bn(o, t._value)) && (t.flags |= 128, t._value = o, e.version++);
  } catch (o) {
    throw e.version++, o;
  } finally {
    de = n, kn = r, gd(t), t.flags &= -3;
  }
}
function ol(t, e = !1) {
  const { dep: n, prevSub: r, nextSub: o } = t;
  if (r && (r.nextSub = o, t.prevSub = void 0), o && (o.prevSub = r, t.nextSub = void 0), n.subs === t && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let c = n.computed.deps; c; c = c.nextDep)
      ol(c, !0);
  }
  !e && !--n.sc && n.map && n.map.delete(n.key);
}
function gm(t) {
  const { prevDep: e, nextDep: n } = t;
  e && (e.nextDep = n, t.prevDep = void 0), n && (n.prevDep = e, t.nextDep = void 0);
}
let kn = !0;
const yd = [];
function sr() {
  yd.push(kn), kn = !1;
}
function cr() {
  const t = yd.pop();
  kn = t === void 0 ? !0 : t;
}
function Ou(t) {
  const { cleanup: e } = t;
  if (t.cleanup = void 0, e) {
    const n = de;
    de = void 0;
    try {
      e();
    } finally {
      de = n;
    }
  }
}
let Eo = 0;
class mm {
  constructor(e, n) {
    this.sub = e, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class al {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!de || !kn || de === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== de)
      n = this.activeLink = new mm(de, this), de.deps ? (n.prevDep = de.depsTail, de.depsTail.nextDep = n, de.depsTail = n) : de.deps = de.depsTail = n, bd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = de.depsTail, n.nextDep = void 0, de.depsTail.nextDep = n, de.depsTail = n, de.deps === n && (de.deps = r);
    }
    return n;
  }
  trigger(e) {
    this.version++, Eo++, this.notify(e);
  }
  notify(e) {
    rl();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      il();
    }
  }
}
function bd(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const e = t.dep.computed;
    if (e && !t.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        bd(r);
    }
    const n = t.dep.subs;
    n !== t && (t.prevSub = n, n && (n.nextSub = t)), t.dep.subs = t;
  }
}
const Ic = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ Symbol(
  ""
), Ec = /* @__PURE__ */ Symbol(
  ""
), To = /* @__PURE__ */ Symbol(
  ""
);
function ze(t, e, n) {
  if (kn && de) {
    let r = Ic.get(t);
    r || Ic.set(t, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new al()), o.map = r, o.key = n), o.track();
  }
}
function ar(t, e, n, r, o, c) {
  const u = Ic.get(t);
  if (!u) {
    Eo++;
    return;
  }
  const f = (m) => {
    m && m.trigger();
  };
  if (rl(), e === "clear")
    u.forEach(f);
  else {
    const m = Ft(t), y = m && el(n);
    if (m && n === "length") {
      const p = Number(r);
      u.forEach((x, N) => {
        (N === "length" || N === To || !qn(N) && N >= p) && f(x);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), y && f(u.get(To)), e) {
        case "add":
          m ? y && f(u.get("length")) : (f(u.get(Ur)), Ci(t) && f(u.get(Ec)));
          break;
        case "delete":
          m || (f(u.get(Ur)), Ci(t) && f(u.get(Ec)));
          break;
        case "set":
          Ci(t) && f(u.get(Ur));
          break;
      }
  }
  il();
}
function hi(t) {
  const e = /* @__PURE__ */ Qt(t);
  return e === t ? e : (ze(e, "iterate", To), /* @__PURE__ */ pn(t) ? e : e.map(Cn));
}
function bs(t) {
  return ze(t = /* @__PURE__ */ Qt(t), "iterate", To), t;
}
function Un(t, e) {
  return /* @__PURE__ */ lr(t) ? Ri(/* @__PURE__ */ jr(t) ? Cn(e) : e) : Cn(e);
}
const ym = {
  __proto__: null,
  [Symbol.iterator]() {
    return uc(this, Symbol.iterator, (t) => Un(this, t));
  },
  concat(...t) {
    return hi(this).concat(
      ...t.map((e) => Ft(e) ? hi(e) : e)
    );
  },
  entries() {
    return uc(this, "entries", (t) => (t[1] = Un(this, t[1]), t));
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
      (n) => n.map((r) => Un(this, r)),
      arguments
    );
  },
  find(t, e) {
    return er(
      this,
      "find",
      t,
      e,
      (n) => Un(this, n),
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
      (n) => Un(this, n),
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
    return fc(this, "includes", t);
  },
  indexOf(...t) {
    return fc(this, "indexOf", t);
  },
  join(t) {
    return hi(this).join(t);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...t) {
    return fc(this, "lastIndexOf", t);
  },
  map(t, e) {
    return er(this, "map", t, e, void 0, arguments);
  },
  pop() {
    return ao(this, "pop");
  },
  push(...t) {
    return ao(this, "push", t);
  },
  reduce(t, ...e) {
    return Fu(this, "reduce", t, e);
  },
  reduceRight(t, ...e) {
    return Fu(this, "reduceRight", t, e);
  },
  shift() {
    return ao(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, e) {
    return er(this, "some", t, e, void 0, arguments);
  },
  splice(...t) {
    return ao(this, "splice", t);
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
    return ao(this, "unshift", t);
  },
  values() {
    return uc(this, "values", (t) => Un(this, t));
  }
};
function uc(t, e, n) {
  const r = bs(t), o = r[e]();
  return r !== t && !/* @__PURE__ */ pn(t) && (o._next = o.next, o.next = () => {
    const c = o._next();
    return c.done || (c.value = n(c.value)), c;
  }), o;
}
const bm = Array.prototype;
function er(t, e, n, r, o, c) {
  const u = bs(t), f = u !== t && !/* @__PURE__ */ pn(t), m = u[e];
  if (m !== bm[e]) {
    const x = m.apply(t, c);
    return f ? Cn(x) : x;
  }
  let y = n;
  u !== t && (f ? y = function(x, N) {
    return n.call(this, Un(t, x), N, t);
  } : n.length > 2 && (y = function(x, N) {
    return n.call(this, x, N, t);
  }));
  const p = m.call(u, y, r);
  return f && o ? o(p) : p;
}
function Fu(t, e, n, r) {
  const o = bs(t), c = o !== t && !/* @__PURE__ */ pn(t);
  let u = n, f = !1;
  o !== t && (c ? (f = r.length === 0, u = function(y, p, x) {
    return f && (f = !1, y = Un(t, y)), n.call(this, y, Un(t, p), x, t);
  }) : n.length > 3 && (u = function(y, p, x) {
    return n.call(this, y, p, x, t);
  }));
  const m = o[e](u, ...r);
  return f ? Un(t, m) : m;
}
function fc(t, e, n) {
  const r = /* @__PURE__ */ Qt(t);
  ze(r, "iterate", To);
  const o = r[e](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ ul(n[0]) ? (n[0] = /* @__PURE__ */ Qt(n[0]), r[e](...n)) : o;
}
function ao(t, e, n = []) {
  sr(), rl();
  const r = (/* @__PURE__ */ Qt(t))[e].apply(t, n);
  return il(), cr(), r;
}
const vm = /* @__PURE__ */ Qc("__proto__,__v_isRef,__isVue"), vd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(qn)
);
function _m(t) {
  qn(t) || (t = String(t));
  const e = /* @__PURE__ */ Qt(this);
  return ze(e, "has", t), e.hasOwnProperty(t);
}
class _d {
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
      return r === (o ? c ? Im : Nd : c ? Sd : xd).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const u = Ft(e);
    if (!o) {
      let m;
      if (u && (m = ym[n]))
        return m;
      if (n === "hasOwnProperty")
        return _m;
    }
    const f = Reflect.get(
      e,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Be(e) ? e : r
    );
    if ((qn(n) ? vd.has(n) : vm(n)) || (o || ze(e, "get", n), c))
      return f;
    if (/* @__PURE__ */ Be(f)) {
      const m = u && el(n) ? f : f.value;
      return o && se(m) ? /* @__PURE__ */ Lc(m) : m;
    }
    return se(f) ? o ? /* @__PURE__ */ Lc(f) : /* @__PURE__ */ cl(f) : f;
  }
}
class wd extends _d {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, n, r, o) {
    let c = e[n];
    const u = Ft(e) && el(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ lr(c);
      if (!/* @__PURE__ */ pn(r) && !/* @__PURE__ */ lr(r) && (c = /* @__PURE__ */ Qt(c), r = /* @__PURE__ */ Qt(r)), !u && /* @__PURE__ */ Be(c) && !/* @__PURE__ */ Be(r))
        return y || (c.value = r), !0;
    }
    const f = u ? Number(n) < e.length : te(e, n), m = Reflect.set(
      e,
      n,
      r,
      /* @__PURE__ */ Be(e) ? e : o
    );
    return e === /* @__PURE__ */ Qt(o) && (f ? Bn(r, c) && ar(e, "set", n, r) : ar(e, "add", n, r)), m;
  }
  deleteProperty(e, n) {
    const r = te(e, n);
    e[n];
    const o = Reflect.deleteProperty(e, n);
    return o && r && ar(e, "delete", n, void 0), o;
  }
  has(e, n) {
    const r = Reflect.has(e, n);
    return (!qn(n) || !vd.has(n)) && ze(e, "has", n), r;
  }
  ownKeys(e) {
    return ze(
      e,
      "iterate",
      Ft(e) ? "length" : Ur
    ), Reflect.ownKeys(e);
  }
}
class wm extends _d {
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
const xm = /* @__PURE__ */ new wd(), Sm = /* @__PURE__ */ new wm(), Nm = /* @__PURE__ */ new wd(!0);
const Tc = (t) => t, ua = (t) => Reflect.getPrototypeOf(t);
function Mm(t, e, n) {
  return function(...r) {
    const o = this.__v_raw, c = /* @__PURE__ */ Qt(o), u = Ci(c), f = t === "entries" || t === Symbol.iterator && u, m = t === "keys" && u, y = o[t](...r), p = n ? Tc : e ? Ri : Cn;
    return !e && ze(
      c,
      "iterate",
      m ? Ec : Ur
    ), Ge(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: x, done: N } = y.next();
          return N ? { value: x, done: N } : {
            value: f ? [p(x[0]), p(x[1])] : p(x),
            done: N
          };
        }
      }
    );
  };
}
function fa(t) {
  return function(...e) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Pm(t, e) {
  const n = {
    get(o) {
      const c = this.__v_raw, u = /* @__PURE__ */ Qt(c), f = /* @__PURE__ */ Qt(o);
      t || (Bn(o, f) && ze(u, "get", o), ze(u, "get", f));
      const { has: m } = ua(u), y = e ? Tc : t ? Ri : Cn;
      if (m.call(u, o))
        return y(c.get(o));
      if (m.call(u, f))
        return y(c.get(f));
      c !== u && c.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !t && ze(/* @__PURE__ */ Qt(o), "iterate", Ur), o.size;
    },
    has(o) {
      const c = this.__v_raw, u = /* @__PURE__ */ Qt(c), f = /* @__PURE__ */ Qt(o);
      return t || (Bn(o, f) && ze(u, "has", o), ze(u, "has", f)), o === f ? c.has(o) : c.has(o) || c.has(f);
    },
    forEach(o, c) {
      const u = this, f = u.__v_raw, m = /* @__PURE__ */ Qt(f), y = e ? Tc : t ? Ri : Cn;
      return !t && ze(m, "iterate", Ur), f.forEach((p, x) => o.call(c, y(p), y(x), u));
    }
  };
  return Ge(
    n,
    t ? {
      add: fa("add"),
      set: fa("set"),
      delete: fa("delete"),
      clear: fa("clear")
    } : {
      add(o) {
        const c = /* @__PURE__ */ Qt(this), u = ua(c), f = /* @__PURE__ */ Qt(o), m = !e && !/* @__PURE__ */ pn(o) && !/* @__PURE__ */ lr(o) ? f : o;
        return u.has.call(c, m) || Bn(o, m) && u.has.call(c, o) || Bn(f, m) && u.has.call(c, f) || (c.add(m), ar(c, "add", m, m)), this;
      },
      set(o, c) {
        !e && !/* @__PURE__ */ pn(c) && !/* @__PURE__ */ lr(c) && (c = /* @__PURE__ */ Qt(c));
        const u = /* @__PURE__ */ Qt(this), { has: f, get: m } = ua(u);
        let y = f.call(u, o);
        y || (o = /* @__PURE__ */ Qt(o), y = f.call(u, o));
        const p = m.call(u, o);
        return u.set(o, c), y ? Bn(c, p) && ar(u, "set", o, c) : ar(u, "add", o, c), this;
      },
      delete(o) {
        const c = /* @__PURE__ */ Qt(this), { has: u, get: f } = ua(c);
        let m = u.call(c, o);
        m || (o = /* @__PURE__ */ Qt(o), m = u.call(c, o)), f && f.call(c, o);
        const y = c.delete(o);
        return m && ar(c, "delete", o, void 0), y;
      },
      clear() {
        const o = /* @__PURE__ */ Qt(this), c = o.size !== 0, u = o.clear();
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
    n[o] = Mm(o, t, e);
  }), n;
}
function sl(t, e) {
  const n = Pm(t, e);
  return (r, o, c) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? r : Reflect.get(
    te(n, o) && o in r ? n : r,
    o,
    c
  );
}
const km = {
  get: /* @__PURE__ */ sl(!1, !1)
}, Cm = {
  get: /* @__PURE__ */ sl(!1, !0)
}, Am = {
  get: /* @__PURE__ */ sl(!0, !1)
};
const xd = /* @__PURE__ */ new WeakMap(), Sd = /* @__PURE__ */ new WeakMap(), Nd = /* @__PURE__ */ new WeakMap(), Im = /* @__PURE__ */ new WeakMap();
function Em(t) {
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
function Tm(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Em(nm(t));
}
// @__NO_SIDE_EFFECTS__
function cl(t) {
  return /* @__PURE__ */ lr(t) ? t : ll(
    t,
    !1,
    xm,
    km,
    xd
  );
}
// @__NO_SIDE_EFFECTS__
function Lm(t) {
  return ll(
    t,
    !1,
    Nm,
    Cm,
    Sd
  );
}
// @__NO_SIDE_EFFECTS__
function Lc(t) {
  return ll(
    t,
    !0,
    Sm,
    Am,
    Nd
  );
}
function ll(t, e, n, r, o) {
  if (!se(t) || t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const c = Tm(t);
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
function jr(t) {
  return /* @__PURE__ */ lr(t) ? /* @__PURE__ */ jr(t.__v_raw) : !!(t && t.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function lr(t) {
  return !!(t && t.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function pn(t) {
  return !!(t && t.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ul(t) {
  return t ? !!t.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function Qt(t) {
  const e = t && t.__v_raw;
  return e ? /* @__PURE__ */ Qt(e) : t;
}
function Dm(t) {
  return !te(t, "__v_skip") && Object.isExtensible(t) && ad(t, "__v_skip", !0), t;
}
const Cn = (t) => se(t) ? /* @__PURE__ */ cl(t) : t, Ri = (t) => se(t) ? /* @__PURE__ */ Lc(t) : t;
// @__NO_SIDE_EFFECTS__
function Be(t) {
  return t ? t.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Rm(t) {
  return Om(t, !1);
}
function Om(t, e) {
  return /* @__PURE__ */ Be(t) ? t : new Fm(t, e);
}
class Fm {
  constructor(e, n) {
    this.dep = new al(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? e : /* @__PURE__ */ Qt(e), this._value = n ? e : Cn(e), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(e) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ pn(e) || /* @__PURE__ */ lr(e);
    e = r ? e : /* @__PURE__ */ Qt(e), Bn(e, n) && (this._rawValue = e, this._value = r ? e : Cn(e), this.dep.trigger());
  }
}
function fl(t) {
  return /* @__PURE__ */ Be(t) ? t.value : t;
}
const $m = {
  get: (t, e, n) => e === "__v_raw" ? t : fl(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const o = t[e];
    return /* @__PURE__ */ Be(o) && !/* @__PURE__ */ Be(n) ? (o.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function Md(t) {
  return /* @__PURE__ */ jr(t) ? t : new Proxy(t, $m);
}
class Hm {
  constructor(e, n, r) {
    this.fn = e, this.setter = n, this._value = void 0, this.dep = new al(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Eo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    de !== this)
      return hd(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return md(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function Vm(t, e, n = !1) {
  let r, o;
  return Ut(t) ? r = t : (r = t.get, o = t.set), new Hm(r, o, n);
}
const da = {}, Ba = /* @__PURE__ */ new WeakMap();
let Fr;
function zm(t, e = !1, n = Fr) {
  if (n) {
    let r = Ba.get(n);
    r || Ba.set(n, r = []), r.push(t);
  }
}
function Um(t, e, n = he) {
  const { immediate: r, deep: o, once: c, scheduler: u, augmentJob: f, call: m } = n, y = (R) => o ? R : /* @__PURE__ */ pn(R) || o === !1 || o === 0 ? Nr(R, 1) : Nr(R);
  let p, x, N, k, I = !1, C = !1;
  if (/* @__PURE__ */ Be(t) ? (x = () => t.value, I = /* @__PURE__ */ pn(t)) : /* @__PURE__ */ jr(t) ? (x = () => y(t), I = !0) : Ft(t) ? (C = !0, I = t.some((R) => /* @__PURE__ */ jr(R) || /* @__PURE__ */ pn(R)), x = () => t.map((R) => {
    if (/* @__PURE__ */ Be(R))
      return R.value;
    if (/* @__PURE__ */ jr(R))
      return y(R);
    if (Ut(R))
      return m ? m(R, 2) : R();
  })) : Ut(t) ? e ? x = m ? () => m(t, 2) : t : x = () => {
    if (N) {
      sr();
      try {
        N();
      } finally {
        cr();
      }
    }
    const R = Fr;
    Fr = p;
    try {
      return m ? m(t, 3, [k]) : t(k);
    } finally {
      Fr = R;
    }
  } : x = Wn, e && o) {
    const R = x, P = o === !0 ? 1 / 0 : o;
    x = () => Nr(R(), P);
  }
  const F = pm(), $ = () => {
    p.stop(), F && F.active && tl(F.effects, p);
  };
  if (c && e) {
    const R = e;
    e = (...P) => {
      R(...P), $();
    };
  }
  let L = C ? new Array(t.length).fill(da) : da;
  const V = (R) => {
    if (!(!(p.flags & 1) || !p.dirty && !R))
      if (e) {
        const P = p.run();
        if (o || I || (C ? P.some((J, tt) => Bn(J, L[tt])) : Bn(P, L))) {
          N && N();
          const J = Fr;
          Fr = p;
          try {
            const tt = [
              P,
              // pass undefined as the old value when it's changed for the first time
              L === da ? void 0 : C && L[0] === da ? [] : L,
              k
            ];
            L = P, m ? m(e, 3, tt) : (
              // @ts-expect-error
              e(...tt)
            );
          } finally {
            Fr = J;
          }
        }
      } else
        p.run();
  };
  return f && f(V), p = new fd(x), p.scheduler = u ? () => u(V, !1) : V, k = (R) => zm(R, !1, p), N = p.onStop = () => {
    const R = Ba.get(p);
    if (R) {
      if (m)
        m(R, 4);
      else
        for (const P of R) P();
      Ba.delete(p);
    }
  }, e ? r ? V(!0) : L = p.run() : u ? u(V.bind(null, !0), !0) : p.run(), $.pause = p.pause.bind(p), $.resume = p.resume.bind(p), $.stop = $, $;
}
function Nr(t, e = 1 / 0, n) {
  if (e <= 0 || !se(t) || t.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(t) || 0) >= e))
    return t;
  if (n.set(t, e), e--, /* @__PURE__ */ Be(t))
    Nr(t.value, e, n);
  else if (Ft(t))
    for (let r = 0; r < t.length; r++)
      Nr(t[r], e, n);
  else if (nd(t) || Ci(t))
    t.forEach((r) => {
      Nr(r, e, n);
    });
  else if (od(t)) {
    for (const r in t)
      Nr(t[r], e, n);
    for (const r of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, r) && Nr(t[r], e, n);
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
    vs(o, e, n);
  }
}
function Yn(t, e, n, r) {
  if (Ut(t)) {
    const o = $o(t, e, n, r);
    return o && rd(o) && o.catch((c) => {
      vs(c, e, n);
    }), o;
  }
  if (Ft(t)) {
    const o = [];
    for (let c = 0; c < t.length; c++)
      o.push(Yn(t[c], e, n, r));
    return o;
  }
}
function vs(t, e, n, r = !0) {
  const o = e ? e.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: u } = e && e.appContext.config || he;
  if (e) {
    let f = e.parent;
    const m = e.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const p = f.ec;
      if (p) {
        for (let x = 0; x < p.length; x++)
          if (p[x](t, m, y) === !1)
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
  jm(t, n, o, r, u);
}
function jm(t, e, n, r = !0, o = !1) {
  if (o)
    throw t;
  console.error(t);
}
const Je = [];
let Vn = -1;
const Ai = [];
let Sr = null, vi = 0;
const Pd = /* @__PURE__ */ Promise.resolve();
let Ga = null;
function kd(t) {
  const e = Ga || Pd;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Bm(t) {
  let e = Vn + 1, n = Je.length;
  for (; e < n; ) {
    const r = e + n >>> 1, o = Je[r], c = Lo(o);
    c < t || c === t && o.flags & 2 ? e = r + 1 : n = r;
  }
  return e;
}
function dl(t) {
  if (!(t.flags & 1)) {
    const e = Lo(t), n = Je[Je.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(t.flags & 2) && e >= Lo(n) ? Je.push(t) : Je.splice(Bm(e), 0, t), t.flags |= 1, Cd();
  }
}
function Cd() {
  Ga || (Ga = Pd.then(Id));
}
function Gm(t) {
  Ft(t) ? Ai.push(...t) : Sr && t.id === -1 ? Sr.splice(vi + 1, 0, t) : t.flags & 1 || (Ai.push(t), t.flags |= 1), Cd();
}
function $u(t, e, n = Vn + 1) {
  for (; n < Je.length; n++) {
    const r = Je[n];
    if (r && r.flags & 2) {
      if (t && r.id !== t.uid)
        continue;
      Je.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Ad(t) {
  if (Ai.length) {
    const e = [...new Set(Ai)].sort(
      (n, r) => Lo(n) - Lo(r)
    );
    if (Ai.length = 0, Sr) {
      Sr.push(...e);
      return;
    }
    for (Sr = e, vi = 0; vi < Sr.length; vi++) {
      const n = Sr[vi];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Sr = null, vi = 0;
  }
}
const Lo = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Id(t) {
  try {
    for (Vn = 0; Vn < Je.length; Vn++) {
      const e = Je[Vn];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), $o(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Vn < Je.length; Vn++) {
      const e = Je[Vn];
      e && (e.flags &= -2);
    }
    Vn = -1, Je.length = 0, Ad(), Ga = null, (Je.length || Ai.length) && Id();
  }
}
let Pn = null, Ed = null;
function Ka(t) {
  const e = Pn;
  return Pn = t, Ed = t && t.type.__scopeId || null, e;
}
function Km(t, e = Pn, n) {
  if (!e || t._n)
    return t;
  const r = (...o) => {
    r._d && Xu(-1);
    const c = Ka(e);
    let u;
    try {
      u = t(...o);
    } finally {
      Ka(c), r._d && Xu(1);
    }
    return u;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function Dr(t, e, n, r) {
  const o = t.dirs, c = e && e.dirs;
  for (let u = 0; u < o.length; u++) {
    const f = o[u];
    c && (f.oldValue = c[u].value);
    let m = f.dir[r];
    m && (sr(), Yn(m, n, 8, [
      t.el,
      f,
      t,
      e
    ]), cr());
  }
}
function Wm(t, e) {
  if (je) {
    let n = je.provides;
    const r = je.parent && je.parent.provides;
    r === n && (n = je.provides = Object.create(r)), n[t] = e;
  }
}
function Ea(t, e, n = !1) {
  const r = W0();
  if (r || Ei) {
    let o = Ei ? Ei._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return n && Ut(e) ? e.call(r && r.proxy) : e;
  }
}
const qm = /* @__PURE__ */ Symbol.for("v-scx"), Ym = () => Ea(qm);
function Ta(t, e, n) {
  return Td(t, e, n);
}
function Td(t, e, n = he) {
  const { immediate: r, deep: o, flush: c, once: u } = n, f = Ge({}, n), m = e && r || !e && c !== "post";
  let y;
  if (Ro) {
    if (c === "sync") {
      const k = Ym();
      y = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!m) {
      const k = () => {
      };
      return k.stop = Wn, k.resume = Wn, k.pause = Wn, k;
    }
  }
  const p = je;
  f.call = (k, I, C) => Yn(k, p, I, C);
  let x = !1;
  c === "post" ? f.scheduler = (k) => {
    an(k, p && p.suspense);
  } : c !== "sync" && (x = !0, f.scheduler = (k, I) => {
    I ? k() : dl(k);
  }), f.augmentJob = (k) => {
    e && (k.flags |= 4), x && (k.flags |= 2, p && (k.id = p.uid, k.i = p));
  };
  const N = Um(t, e, f);
  return Ro && (y ? y.push(N) : m && N()), N;
}
function Xm(t, e, n) {
  const r = this.proxy, o = Ee(t) ? t.includes(".") ? Ld(r, t) : () => r[t] : t.bind(r, r);
  let c;
  Ut(e) ? c = e : (c = e.handler, n = e);
  const u = Ho(this), f = Td(o, c.bind(r), n);
  return u(), f;
}
function Ld(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Zm = /* @__PURE__ */ Symbol("_vte"), Jm = (t) => t.__isTeleport, Qm = /* @__PURE__ */ Symbol("_leaveCb");
function hl(t, e) {
  t.shapeFlag & 6 && t.component ? (t.transition = e, hl(t.component.subTree, e)) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Dd(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Hu(t, e) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(t, e)) && !n.configurable);
}
const Wa = /* @__PURE__ */ new WeakMap();
function wo(t, e, n, r, o = !1) {
  if (Ft(t)) {
    t.forEach(
      (C, F) => wo(
        C,
        e && (Ft(e) ? e[F] : e),
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
  const c = r.shapeFlag & 4 ? yl(r.component) : r.el, u = o ? null : c, { i: f, r: m } = t, y = e && e.r, p = f.refs === he ? f.refs = {} : f.refs, x = f.setupState, N = /* @__PURE__ */ Qt(x), k = x === he ? ed : (C) => Hu(p, C) ? !1 : te(N, C), I = (C, F) => !(F && Hu(p, F));
  if (y != null && y !== m) {
    if (Vu(e), Ee(y))
      p[y] = null, k(y) && (x[y] = null);
    else if (/* @__PURE__ */ Be(y)) {
      const C = e;
      I(y, C.k) && (y.value = null), C.k && (p[C.k] = null);
    }
  }
  if (Ut(m))
    $o(m, f, 12, [u, p]);
  else {
    const C = Ee(m), F = /* @__PURE__ */ Be(m);
    if (C || F) {
      const $ = () => {
        if (t.f) {
          const L = C ? k(m) ? x[m] : p[m] : I() || !t.k ? m.value : p[t.k];
          if (o)
            Ft(L) && tl(L, c);
          else if (Ft(L))
            L.includes(c) || L.push(c);
          else if (C)
            p[m] = [c], k(m) && (x[m] = p[m]);
          else {
            const V = [c];
            I(m, t.k) && (m.value = V), t.k && (p[t.k] = V);
          }
        } else C ? (p[m] = u, k(m) && (x[m] = u)) : F && (I(m, t.k) && (m.value = u), t.k && (p[t.k] = u));
      };
      if (u) {
        const L = () => {
          $(), Wa.delete(t);
        };
        L.id = -1, Wa.set(t, L), an(L, n);
      } else
        Vu(t), $();
    }
  }
}
function Vu(t) {
  const e = Wa.get(t);
  e && (e.flags |= 8, Wa.delete(t));
}
gs().requestIdleCallback;
gs().cancelIdleCallback;
const xo = (t) => !!t.type.__asyncLoader, Rd = (t) => t.type.__isKeepAlive;
function t0(t, e) {
  Od(t, "a", e);
}
function e0(t, e) {
  Od(t, "da", e);
}
function Od(t, e, n = je) {
  const r = t.__wdc || (t.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return t();
  });
  if (_s(e, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Rd(o.parent.vnode) && n0(r, e, n, o), o = o.parent;
  }
}
function n0(t, e, n, r) {
  const o = _s(
    e,
    t,
    r,
    !0
    /* prepend */
  );
  Hd(() => {
    tl(r[e], o);
  }, n);
}
function _s(t, e, n = je, r = !1) {
  if (n) {
    const o = n[t] || (n[t] = []), c = e.__weh || (e.__weh = (...u) => {
      sr();
      const f = Ho(n), m = Yn(e, n, t, u);
      return f(), cr(), m;
    });
    return r ? o.unshift(c) : o.push(c), c;
  }
}
const ur = (t) => (e, n = je) => {
  (!Ro || t === "sp") && _s(t, (...r) => e(...r), n);
}, r0 = ur("bm"), Fd = ur("m"), i0 = ur(
  "bu"
), o0 = ur("u"), $d = ur(
  "bum"
), Hd = ur("um"), a0 = ur(
  "sp"
), s0 = ur("rtg"), c0 = ur("rtc");
function l0(t, e = je) {
  _s("ec", t, e);
}
const u0 = "components", Vd = /* @__PURE__ */ Symbol.for("v-ndc");
function f0(t) {
  return Ee(t) ? d0(u0, t, !1) || t : t || Vd;
}
function d0(t, e, n = !0, r = !1) {
  const o = Pn || je;
  if (o) {
    const c = o.type;
    {
      const f = J0(
        c,
        !1
      );
      if (f && (f === e || f === en(e) || f === ps(en(e))))
        return c;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      zu(o[t] || c[t], e) || // global registration
      zu(o.appContext[t], e)
    );
    return !u && r ? c : u;
  }
}
function zu(t, e) {
  return t && (t[e] || t[en(e)] || t[ps(en(e))]);
}
function Ii(t, e, n, r) {
  let o;
  const c = n, u = Ft(t);
  if (u || Ee(t)) {
    const f = u && /* @__PURE__ */ jr(t);
    let m = !1, y = !1;
    f && (m = !/* @__PURE__ */ pn(t), y = /* @__PURE__ */ lr(t), t = bs(t)), o = new Array(t.length);
    for (let p = 0, x = t.length; p < x; p++)
      o[p] = e(
        m ? y ? Ri(Cn(t[p])) : Cn(t[p]) : t[p],
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
const Dc = (t) => t ? ch(t) ? yl(t) : Dc(t.parent) : null, So = (
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
    $parent: (t) => Dc(t.parent),
    $root: (t) => Dc(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Ud(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      dl(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = kd.bind(t.proxy)),
    $watch: (t) => Xm.bind(t)
  })
), dc = (t, e) => t !== he && !t.__isScriptSetup && te(t, e), h0 = {
  get({ _: t }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: c, accessCache: u, type: f, appContext: m } = t;
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
        if (dc(r, e))
          return u[e] = 1, r[e];
        if (o !== he && te(o, e))
          return u[e] = 2, o[e];
        if (te(c, e))
          return u[e] = 3, c[e];
        if (n !== he && te(n, e))
          return u[e] = 4, n[e];
        Rc && (u[e] = 0);
      }
    }
    const y = So[e];
    let p, x;
    if (y)
      return e === "$attrs" && ze(t.attrs, "get", ""), y(t);
    if (
      // css module (injected by vue-loader)
      (p = f.__cssModules) && (p = p[e])
    )
      return p;
    if (n !== he && te(n, e))
      return u[e] = 4, n[e];
    if (
      // global properties
      x = m.config.globalProperties, te(x, e)
    )
      return x[e];
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: o, ctx: c } = t;
    return dc(o, e) ? (o[e] = n, !0) : r !== he && te(r, e) ? (r[e] = n, !0) : te(t.props, e) || e[0] === "$" && e.slice(1) in t ? !1 : (c[e] = n, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: o, props: c, type: u }
  }, f) {
    let m;
    return !!(n[f] || t !== he && f[0] !== "$" && te(t, f) || dc(e, f) || te(c, f) || te(r, f) || te(So, f) || te(o.config.globalProperties, f) || (m = u.__cssModules) && m[f]);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : te(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
function Uu(t) {
  return Ft(t) ? t.reduce(
    (e, n) => (e[n] = null, e),
    {}
  ) : t;
}
let Rc = !0;
function p0(t) {
  const e = Ud(t), n = t.proxy, r = t.ctx;
  Rc = !1, e.beforeCreate && ju(e.beforeCreate, t, "bc");
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
    beforeMount: x,
    mounted: N,
    beforeUpdate: k,
    updated: I,
    activated: C,
    deactivated: F,
    beforeDestroy: $,
    beforeUnmount: L,
    destroyed: V,
    unmounted: R,
    render: P,
    renderTracked: J,
    renderTriggered: tt,
    errorCaptured: rt,
    serverPrefetch: bt,
    // public API
    expose: H,
    inheritAttrs: Y,
    // assets
    components: lt,
    directives: ft,
    filters: et
  } = e;
  if (y && g0(y, r, null), u)
    for (const ot in u) {
      const ut = u[ot];
      Ut(ut) && (r[ot] = ut.bind(n));
    }
  if (o) {
    const ot = o.call(n, n);
    se(ot) && (t.data = /* @__PURE__ */ cl(ot));
  }
  if (Rc = !0, c)
    for (const ot in c) {
      const ut = c[ot], kt = Ut(ut) ? ut.bind(n, n) : Ut(ut.get) ? ut.get.bind(n, n) : Wn, Et = !Ut(ut) && Ut(ut.set) ? ut.set.bind(n) : Wn, X = Ti({
        get: kt,
        set: Et
      });
      Object.defineProperty(r, ot, {
        enumerable: !0,
        configurable: !0,
        get: () => X.value,
        set: (Nt) => X.value = Nt
      });
    }
  if (f)
    for (const ot in f)
      zd(f[ot], r, n, ot);
  if (m) {
    const ot = Ut(m) ? m.call(n) : m;
    Reflect.ownKeys(ot).forEach((ut) => {
      Wm(ut, ot[ut]);
    });
  }
  p && ju(p, t, "c");
  function it(ot, ut) {
    Ft(ut) ? ut.forEach((kt) => ot(kt.bind(n))) : ut && ot(ut.bind(n));
  }
  if (it(r0, x), it(Fd, N), it(i0, k), it(o0, I), it(t0, C), it(e0, F), it(l0, rt), it(c0, J), it(s0, tt), it($d, L), it(Hd, R), it(a0, bt), Ft(H))
    if (H.length) {
      const ot = t.exposed || (t.exposed = {});
      H.forEach((ut) => {
        Object.defineProperty(ot, ut, {
          get: () => n[ut],
          set: (kt) => n[ut] = kt,
          enumerable: !0
        });
      });
    } else t.exposed || (t.exposed = {});
  P && t.render === Wn && (t.render = P), Y != null && (t.inheritAttrs = Y), lt && (t.components = lt), ft && (t.directives = ft), bt && Dd(t);
}
function g0(t, e, n = Wn) {
  Ft(t) && (t = Oc(t));
  for (const r in t) {
    const o = t[r];
    let c;
    se(o) ? "default" in o ? c = Ea(
      o.from || r,
      o.default,
      !0
    ) : c = Ea(o.from || r) : c = Ea(o), /* @__PURE__ */ Be(c) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (u) => c.value = u
    }) : e[r] = c;
  }
}
function ju(t, e, n) {
  Yn(
    Ft(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy),
    e,
    n
  );
}
function zd(t, e, n, r) {
  let o = r.includes(".") ? Ld(n, r) : () => n[r];
  if (Ee(t)) {
    const c = e[t];
    Ut(c) && Ta(o, c);
  } else if (Ut(t))
    Ta(o, t.bind(n));
  else if (se(t))
    if (Ft(t))
      t.forEach((c) => zd(c, e, n, r));
    else {
      const c = Ut(t.handler) ? t.handler.bind(n) : e[t.handler];
      Ut(c) && Ta(o, c, t);
    }
}
function Ud(t) {
  const e = t.type, { mixins: n, extends: r } = e, {
    mixins: o,
    optionsCache: c,
    config: { optionMergeStrategies: u }
  } = t.appContext, f = c.get(e);
  let m;
  return f ? m = f : !o.length && !n && !r ? m = e : (m = {}, o.length && o.forEach(
    (y) => qa(m, y, u, !0)
  ), qa(m, e, u)), se(e) && c.set(e, m), m;
}
function qa(t, e, n, r = !1) {
  const { mixins: o, extends: c } = e;
  c && qa(t, c, n, !0), o && o.forEach(
    (u) => qa(t, u, n, !0)
  );
  for (const u in e)
    if (!(r && u === "expose")) {
      const f = m0[u] || n && n[u];
      t[u] = f ? f(t[u], e[u]) : e[u];
    }
  return t;
}
const m0 = {
  data: Bu,
  props: Gu,
  emits: Gu,
  // objects
  methods: po,
  computed: po,
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
  components: po,
  directives: po,
  // watch
  watch: b0,
  // provide / inject
  provide: Bu,
  inject: y0
};
function Bu(t, e) {
  return e ? t ? function() {
    return Ge(
      Ut(t) ? t.call(this, this) : t,
      Ut(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function y0(t, e) {
  return po(Oc(t), Oc(e));
}
function Oc(t) {
  if (Ft(t)) {
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
function po(t, e) {
  return t ? Ge(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function Gu(t, e) {
  return t ? Ft(t) && Ft(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : Ge(
    /* @__PURE__ */ Object.create(null),
    Uu(t),
    Uu(e ?? {})
  ) : e;
}
function b0(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = Ge(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = Ze(t[r], e[r]);
  return n;
}
function jd() {
  return {
    app: null,
    config: {
      isNativeTag: ed,
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
let v0 = 0;
function _0(t, e) {
  return function(r, o = null) {
    Ut(r) || (r = Ge({}, r)), o != null && !se(o) && (o = null);
    const c = jd(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let m = !1;
    const y = c.app = {
      _uid: v0++,
      _component: r,
      _props: o,
      _container: null,
      _context: c,
      _instance: null,
      version: t1,
      get config() {
        return c.config;
      },
      set config(p) {
      },
      use(p, ...x) {
        return u.has(p) || (p && Ut(p.install) ? (u.add(p), p.install(y, ...x)) : Ut(p) && (u.add(p), p(y, ...x))), y;
      },
      mixin(p) {
        return c.mixins.includes(p) || c.mixins.push(p), y;
      },
      component(p, x) {
        return x ? (c.components[p] = x, y) : c.components[p];
      },
      directive(p, x) {
        return x ? (c.directives[p] = x, y) : c.directives[p];
      },
      mount(p, x, N) {
        if (!m) {
          const k = y._ceVNode || tn(r, o);
          return k.appContext = c, N === !0 ? N = "svg" : N === !1 && (N = void 0), t(k, p, N), m = !0, y._container = p, p.__vue_app__ = y, yl(k.component);
        }
      },
      onUnmount(p) {
        f.push(p);
      },
      unmount() {
        m && (Yn(
          f,
          y._instance,
          16
        ), t(null, y._container), delete y._container.__vue_app__);
      },
      provide(p, x) {
        return c.provides[p] = x, y;
      },
      runWithContext(p) {
        const x = Ei;
        Ei = y;
        try {
          return p();
        } finally {
          Ei = x;
        }
      }
    };
    return y;
  };
}
let Ei = null;
const w0 = (t, e) => e === "modelValue" || e === "model-value" ? t.modelModifiers : t[`${e}Modifiers`] || t[`${en(e)}Modifiers`] || t[`${Zr(e)}Modifiers`];
function x0(t, e, ...n) {
  if (t.isUnmounted) return;
  const r = t.vnode.props || he;
  let o = n;
  const c = e.startsWith("update:"), u = c && w0(r, e.slice(7));
  u && (u.trim && (o = n.map((p) => Ee(p) ? p.trim() : p)), u.number && (o = n.map(om)));
  let f, m = r[f = ac(e)] || // also try camelCase event handler (#2249)
  r[f = ac(en(e))];
  !m && c && (m = r[f = ac(Zr(e))]), m && Yn(
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
    t.emitted[f] = !0, Yn(
      y,
      t,
      6,
      o
    );
  }
}
const S0 = /* @__PURE__ */ new WeakMap();
function Bd(t, e, n = !1) {
  const r = n ? S0 : e.emitsCache, o = r.get(t);
  if (o !== void 0)
    return o;
  const c = t.emits;
  let u = {}, f = !1;
  if (!Ut(t)) {
    const m = (y) => {
      const p = Bd(y, e, !0);
      p && (f = !0, Ge(u, p));
    };
    !n && e.mixins.length && e.mixins.forEach(m), t.extends && m(t.extends), t.mixins && t.mixins.forEach(m);
  }
  return !c && !f ? (se(t) && r.set(t, null), null) : (Ft(c) ? c.forEach((m) => u[m] = null) : Ge(u, c), se(t) && r.set(t, u), u);
}
function ws(t, e) {
  return !t || !fs(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), te(t, e[0].toLowerCase() + e.slice(1)) || te(t, Zr(e)) || te(t, e));
}
function Ku(t) {
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
    props: x,
    data: N,
    setupState: k,
    ctx: I,
    inheritAttrs: C
  } = t, F = Ka(t);
  let $, L;
  try {
    if (n.shapeFlag & 4) {
      const R = o || r, P = R;
      $ = jn(
        y.call(
          P,
          R,
          p,
          x,
          k,
          N,
          I
        )
      ), L = f;
    } else {
      const R = e;
      $ = jn(
        R.length > 1 ? R(
          x,
          { attrs: f, slots: u, emit: m }
        ) : R(
          x,
          null
        )
      ), L = e.props ? f : N0(f);
    }
  } catch (R) {
    No.length = 0, vs(R, t, 1), $ = tn(Mr);
  }
  let V = $;
  if (L && C !== !1) {
    const R = Object.keys(L), { shapeFlag: P } = V;
    R.length && P & 7 && (c && R.some(ds) && (L = M0(
      L,
      c
    )), V = Oi(V, L, !1, !0));
  }
  return n.dirs && (V = Oi(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && hl(V, n.transition), $ = V, Ka(F), $;
}
const N0 = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || fs(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, M0 = (t, e) => {
  const n = {};
  for (const r in t)
    (!ds(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
};
function P0(t, e, n) {
  const { props: r, children: o, component: c } = t, { props: u, children: f, patchFlag: m } = e, y = c.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (n && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return r ? Wu(r, u, y) : !!u;
    if (m & 8) {
      const p = e.dynamicProps;
      for (let x = 0; x < p.length; x++) {
        const N = p[x];
        if (Gd(u, r, N) && !ws(y, N))
          return !0;
      }
    }
  } else
    return (o || f) && (!f || !f.$stable) ? !0 : r === u ? !1 : r ? u ? Wu(r, u, y) : !0 : !!u;
  return !1;
}
function Wu(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const c = r[o];
    if (Gd(e, t, c) && !ws(n, c))
      return !0;
  }
  return !1;
}
function Gd(t, e, n) {
  const r = t[n], o = e[n];
  return n === "style" && se(r) && se(o) ? !nl(r, o) : r !== o;
}
function k0({ vnode: t, parent: e, suspense: n }, r) {
  for (; e; ) {
    const o = e.subTree;
    if (o.suspense && o.suspense.activeBranch === t && (o.suspense.vnode.el = o.el = r, t = o), o === t)
      (t = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  n && n.activeBranch === t && (n.vnode.el = r);
}
const Kd = {}, Wd = () => Object.create(Kd), qd = (t) => Object.getPrototypeOf(t) === Kd;
function C0(t, e, n, r = !1) {
  const o = {}, c = Wd();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Yd(t, e, o, c);
  for (const u in t.propsOptions[0])
    u in o || (o[u] = void 0);
  n ? t.props = r ? o : /* @__PURE__ */ Lm(o) : t.type.props ? t.props = o : t.props = c, t.attrs = c;
}
function A0(t, e, n, r) {
  const {
    props: o,
    attrs: c,
    vnode: { patchFlag: u }
  } = t, f = /* @__PURE__ */ Qt(o), [m] = t.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const p = t.vnode.dynamicProps;
      for (let x = 0; x < p.length; x++) {
        let N = p[x];
        if (ws(t.emitsOptions, N))
          continue;
        const k = e[N];
        if (m)
          if (te(c, N))
            k !== c[N] && (c[N] = k, y = !0);
          else {
            const I = en(N);
            o[I] = Fc(
              m,
              f,
              I,
              k,
              t,
              !1
            );
          }
        else
          k !== c[N] && (c[N] = k, y = !0);
      }
    }
  } else {
    Yd(t, e, o, c) && (y = !0);
    let p;
    for (const x in f)
      (!e || // for camelCase
      !te(e, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Zr(x)) === x || !te(e, p))) && (m ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[p] !== void 0) && (o[x] = Fc(
        m,
        f,
        x,
        void 0,
        t,
        !0
      )) : delete o[x]);
    if (c !== f)
      for (const x in c)
        (!e || !te(e, x)) && (delete c[x], y = !0);
  }
  y && ar(t.attrs, "set", "");
}
function Yd(t, e, n, r) {
  const [o, c] = t.propsOptions;
  let u = !1, f;
  if (e)
    for (let m in e) {
      if (bo(m))
        continue;
      const y = e[m];
      let p;
      o && te(o, p = en(m)) ? !c || !c.includes(p) ? n[p] = y : (f || (f = {}))[p] = y : ws(t.emitsOptions, m) || (!(m in r) || y !== r[m]) && (r[m] = y, u = !0);
    }
  if (c) {
    const m = /* @__PURE__ */ Qt(n), y = f || he;
    for (let p = 0; p < c.length; p++) {
      const x = c[p];
      n[x] = Fc(
        o,
        m,
        x,
        y[x],
        t,
        !te(y, x)
      );
    }
  }
  return u;
}
function Fc(t, e, n, r, o, c) {
  const u = t[n];
  if (u != null) {
    const f = te(u, "default");
    if (f && r === void 0) {
      const m = u.default;
      if (u.type !== Function && !u.skipFactory && Ut(m)) {
        const { propsDefaults: y } = o;
        if (n in y)
          r = y[n];
        else {
          const p = Ho(o);
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
    ] && (r === "" || r === Zr(n)) && (r = !0));
  }
  return r;
}
const I0 = /* @__PURE__ */ new WeakMap();
function Xd(t, e, n = !1) {
  const r = n ? I0 : e.propsCache, o = r.get(t);
  if (o)
    return o;
  const c = t.props, u = {}, f = [];
  let m = !1;
  if (!Ut(t)) {
    const p = (x) => {
      m = !0;
      const [N, k] = Xd(x, e, !0);
      Ge(u, N), k && f.push(...k);
    };
    !n && e.mixins.length && e.mixins.forEach(p), t.extends && p(t.extends), t.mixins && t.mixins.forEach(p);
  }
  if (!c && !m)
    return se(t) && r.set(t, ki), ki;
  if (Ft(c))
    for (let p = 0; p < c.length; p++) {
      const x = en(c[p]);
      qu(x) && (u[x] = he);
    }
  else if (c)
    for (const p in c) {
      const x = en(p);
      if (qu(x)) {
        const N = c[p], k = u[x] = Ft(N) || Ut(N) ? { type: N } : Ge({}, N), I = k.type;
        let C = !1, F = !0;
        if (Ft(I))
          for (let $ = 0; $ < I.length; ++$) {
            const L = I[$], V = Ut(L) && L.name;
            if (V === "Boolean") {
              C = !0;
              break;
            } else V === "String" && (F = !1);
          }
        else
          C = Ut(I) && I.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = C, k[
          1
          /* shouldCastTrue */
        ] = F, (C || te(k, "default")) && f.push(x);
      }
    }
  const y = [u, f];
  return se(t) && r.set(t, y), y;
}
function qu(t) {
  return t[0] !== "$" && !bo(t);
}
const pl = (t) => t === "_" || t === "_ctx" || t === "$stable", gl = (t) => Ft(t) ? t.map(jn) : [jn(t)], E0 = (t, e, n) => {
  if (e._n)
    return e;
  const r = Km((...o) => gl(e(...o)), n);
  return r._c = !1, r;
}, Zd = (t, e, n) => {
  const r = t._ctx;
  for (const o in t) {
    if (pl(o)) continue;
    const c = t[o];
    if (Ut(c))
      e[o] = E0(o, c, r);
    else if (c != null) {
      const u = gl(c);
      e[o] = () => u;
    }
  }
}, Jd = (t, e) => {
  const n = gl(e);
  t.slots.default = () => n;
}, Qd = (t, e, n) => {
  for (const r in e)
    (n || !pl(r)) && (t[r] = e[r]);
}, T0 = (t, e, n) => {
  const r = t.slots = Wd();
  if (t.vnode.shapeFlag & 32) {
    const o = e._;
    o ? (Qd(r, e, n), n && ad(r, "_", o, !0)) : Zd(e, r);
  } else e && Jd(t, e);
}, L0 = (t, e, n) => {
  const { vnode: r, slots: o } = t;
  let c = !0, u = he;
  if (r.shapeFlag & 32) {
    const f = e._;
    f ? n && f === 1 ? c = !1 : Qd(o, e, n) : (c = !e.$stable, Zd(e, o)), u = e;
  } else e && (Jd(t, e), u = { default: 1 });
  if (c)
    for (const f in o)
      !pl(f) && u[f] == null && delete o[f];
}, an = $0;
function D0(t) {
  return R0(t);
}
function R0(t, e) {
  const n = gs();
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
    parentNode: x,
    nextSibling: N,
    setScopeId: k = Wn,
    insertStaticContent: I
  } = t, C = (A, D, z, Z = null, q = null, W = null, st = void 0, yt = null, dt = !!D.dynamicChildren) => {
    if (A === D)
      return;
    A && !so(A, D) && (Z = Mt(A), Nt(A, q, W, !0), A = null), D.patchFlag === -2 && (dt = !1, D.dynamicChildren = null);
    const { type: nt, ref: It, shapeFlag: wt } = D;
    switch (nt) {
      case xs:
        F(A, D, z, Z);
        break;
      case Mr:
        $(A, D, z, Z);
        break;
      case La:
        A == null && L(D, z, Z, st);
        break;
      case Ue:
        lt(
          A,
          D,
          z,
          Z,
          q,
          W,
          st,
          yt,
          dt
        );
        break;
      default:
        wt & 1 ? P(
          A,
          D,
          z,
          Z,
          q,
          W,
          st,
          yt,
          dt
        ) : wt & 6 ? ft(
          A,
          D,
          z,
          Z,
          q,
          W,
          st,
          yt,
          dt
        ) : (wt & 64 || wt & 128) && nt.process(
          A,
          D,
          z,
          Z,
          q,
          W,
          st,
          yt,
          dt,
          Rt
        );
    }
    It != null && q ? wo(It, A && A.ref, W, D || A, !D) : It == null && A && A.ref != null && wo(A.ref, null, W, A, !0);
  }, F = (A, D, z, Z) => {
    if (A == null)
      r(
        D.el = f(D.children),
        z,
        Z
      );
    else {
      const q = D.el = A.el;
      D.children !== A.children && y(q, D.children);
    }
  }, $ = (A, D, z, Z) => {
    A == null ? r(
      D.el = m(D.children || ""),
      z,
      Z
    ) : D.el = A.el;
  }, L = (A, D, z, Z) => {
    [A.el, A.anchor] = I(
      A.children,
      D,
      z,
      Z,
      A.el,
      A.anchor
    );
  }, V = ({ el: A, anchor: D }, z, Z) => {
    let q;
    for (; A && A !== D; )
      q = N(A), r(A, z, Z), A = q;
    r(D, z, Z);
  }, R = ({ el: A, anchor: D }) => {
    let z;
    for (; A && A !== D; )
      z = N(A), o(A), A = z;
    o(D);
  }, P = (A, D, z, Z, q, W, st, yt, dt) => {
    if (D.type === "svg" ? st = "svg" : D.type === "math" && (st = "mathml"), A == null)
      J(
        D,
        z,
        Z,
        q,
        W,
        st,
        yt,
        dt
      );
    else {
      const nt = A.el && A.el._isVueCE ? A.el : null;
      try {
        nt && nt._beginPatch(), bt(
          A,
          D,
          q,
          W,
          st,
          yt,
          dt
        );
      } finally {
        nt && nt._endPatch();
      }
    }
  }, J = (A, D, z, Z, q, W, st, yt) => {
    let dt, nt;
    const { props: It, shapeFlag: wt, transition: d, dirs: Ct } = A;
    if (dt = A.el = u(
      A.type,
      W,
      It && It.is,
      It
    ), wt & 8 ? p(dt, A.children) : wt & 16 && rt(
      A.children,
      dt,
      null,
      Z,
      q,
      hc(A, W),
      st,
      yt
    ), Ct && Dr(A, null, Z, "created"), tt(dt, A, A.scopeId, st, Z), It) {
      for (const Yt in It)
        Yt !== "value" && !bo(Yt) && c(dt, Yt, null, It[Yt], W, Z);
      "value" in It && c(dt, "value", null, It.value, W), (nt = It.onVnodeBeforeMount) && Fn(nt, Z, A);
    }
    Ct && Dr(A, null, Z, "beforeMount");
    const Wt = O0(q, d);
    Wt && d.beforeEnter(dt), r(dt, D, z), ((nt = It && It.onVnodeMounted) || Wt || Ct) && an(() => {
      try {
        nt && Fn(nt, Z, A), Wt && d.enter(dt), Ct && Dr(A, null, Z, "mounted");
      } finally {
      }
    }, q);
  }, tt = (A, D, z, Z, q) => {
    if (z && k(A, z), Z)
      for (let W = 0; W < Z.length; W++)
        k(A, Z[W]);
    if (q) {
      let W = q.subTree;
      if (D === W || rh(W.type) && (W.ssContent === D || W.ssFallback === D)) {
        const st = q.vnode;
        tt(
          A,
          st,
          st.scopeId,
          st.slotScopeIds,
          q.parent
        );
      }
    }
  }, rt = (A, D, z, Z, q, W, st, yt, dt = 0) => {
    for (let nt = dt; nt < A.length; nt++) {
      const It = A[nt] = yt ? or(A[nt]) : jn(A[nt]);
      C(
        null,
        It,
        D,
        z,
        Z,
        q,
        W,
        st,
        yt
      );
    }
  }, bt = (A, D, z, Z, q, W, st) => {
    const yt = D.el = A.el;
    let { patchFlag: dt, dynamicChildren: nt, dirs: It } = D;
    dt |= A.patchFlag & 16;
    const wt = A.props || he, d = D.props || he;
    let Ct;
    if (z && Rr(z, !1), (Ct = d.onVnodeBeforeUpdate) && Fn(Ct, z, D, A), It && Dr(D, A, z, "beforeUpdate"), z && Rr(z, !0), (wt.innerHTML && d.innerHTML == null || wt.textContent && d.textContent == null) && p(yt, ""), nt ? H(
      A.dynamicChildren,
      nt,
      yt,
      z,
      Z,
      hc(D, q),
      W
    ) : st || ut(
      A,
      D,
      yt,
      null,
      z,
      Z,
      hc(D, q),
      W,
      !1
    ), dt > 0) {
      if (dt & 16)
        Y(yt, wt, d, z, q);
      else if (dt & 2 && wt.class !== d.class && c(yt, "class", null, d.class, q), dt & 4 && c(yt, "style", wt.style, d.style, q), dt & 8) {
        const Wt = D.dynamicProps;
        for (let Yt = 0; Yt < Wt.length; Yt++) {
          const Xt = Wt[Yt], Pt = wt[Xt], ee = d[Xt];
          (ee !== Pt || Xt === "value") && c(yt, Xt, Pt, ee, q, z);
        }
      }
      dt & 1 && A.children !== D.children && p(yt, D.children);
    } else !st && nt == null && Y(yt, wt, d, z, q);
    ((Ct = d.onVnodeUpdated) || It) && an(() => {
      Ct && Fn(Ct, z, D, A), It && Dr(D, A, z, "updated");
    }, Z);
  }, H = (A, D, z, Z, q, W, st) => {
    for (let yt = 0; yt < D.length; yt++) {
      const dt = A[yt], nt = D[yt], It = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        dt.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (dt.type === Ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !so(dt, nt) || // - In the case of a component, it could contain anything.
        dt.shapeFlag & 198) ? x(dt.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          z
        )
      );
      C(
        dt,
        nt,
        It,
        null,
        Z,
        q,
        W,
        st,
        !0
      );
    }
  }, Y = (A, D, z, Z, q) => {
    if (D !== z) {
      if (D !== he)
        for (const W in D)
          !bo(W) && !(W in z) && c(
            A,
            W,
            D[W],
            null,
            q,
            Z
          );
      for (const W in z) {
        if (bo(W)) continue;
        const st = z[W], yt = D[W];
        st !== yt && W !== "value" && c(A, W, yt, st, q, Z);
      }
      "value" in z && c(A, "value", D.value, z.value, q);
    }
  }, lt = (A, D, z, Z, q, W, st, yt, dt) => {
    const nt = D.el = A ? A.el : f(""), It = D.anchor = A ? A.anchor : f("");
    let { patchFlag: wt, dynamicChildren: d, slotScopeIds: Ct } = D;
    Ct && (yt = yt ? yt.concat(Ct) : Ct), A == null ? (r(nt, z, Z), r(It, z, Z), rt(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      D.children || [],
      z,
      It,
      q,
      W,
      st,
      yt,
      dt
    )) : wt > 0 && wt & 64 && d && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren && A.dynamicChildren.length === d.length ? (H(
      A.dynamicChildren,
      d,
      z,
      q,
      W,
      st,
      yt
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (D.key != null || q && D === q.subTree) && th(
      A,
      D,
      !0
      /* shallow */
    )) : ut(
      A,
      D,
      z,
      It,
      q,
      W,
      st,
      yt,
      dt
    );
  }, ft = (A, D, z, Z, q, W, st, yt, dt) => {
    D.slotScopeIds = yt, A == null ? D.shapeFlag & 512 ? q.ctx.activate(
      D,
      z,
      Z,
      st,
      dt
    ) : et(
      D,
      z,
      Z,
      q,
      W,
      st,
      dt
    ) : G(A, D, dt);
  }, et = (A, D, z, Z, q, W, st) => {
    const yt = A.component = K0(
      A,
      Z,
      q
    );
    if (Rd(A) && (yt.ctx.renderer = Rt), q0(yt, !1, st), yt.asyncDep) {
      if (q && q.registerDep(yt, it, st), !A.el) {
        const dt = yt.subTree = tn(Mr);
        $(null, dt, D, z), A.placeholder = dt.el;
      }
    } else
      it(
        yt,
        A,
        D,
        z,
        q,
        W,
        st
      );
  }, G = (A, D, z) => {
    const Z = D.component = A.component;
    if (P0(A, D, z))
      if (Z.asyncDep && !Z.asyncResolved) {
        ot(Z, D, z);
        return;
      } else
        Z.next = D, Z.update();
    else
      D.el = A.el, Z.vnode = D;
  }, it = (A, D, z, Z, q, W, st) => {
    const yt = () => {
      if (A.isMounted) {
        let { next: wt, bu: d, u: Ct, parent: Wt, vnode: Yt } = A;
        {
          const nn = eh(A);
          if (nn) {
            wt && (wt.el = Yt.el, ot(A, wt, st)), nn.asyncDep.then(() => {
              an(() => {
                A.isUnmounted || nt();
              }, q);
            });
            return;
          }
        }
        let Xt = wt, Pt;
        Rr(A, !1), wt ? (wt.el = Yt.el, ot(A, wt, st)) : wt = Yt, d && sc(d), (Pt = wt.props && wt.props.onVnodeBeforeUpdate) && Fn(Pt, Wt, wt, Yt), Rr(A, !0);
        const ee = Ku(A), Me = A.subTree;
        A.subTree = ee, C(
          Me,
          ee,
          // parent may have changed if it's in a teleport
          x(Me.el),
          // anchor may have changed if it's in a fragment
          Mt(Me),
          A,
          q,
          W
        ), wt.el = ee.el, Xt === null && k0(A, ee.el), Ct && an(Ct, q), (Pt = wt.props && wt.props.onVnodeUpdated) && an(
          () => Fn(Pt, Wt, wt, Yt),
          q
        );
      } else {
        let wt;
        const { el: d, props: Ct } = D, { bm: Wt, m: Yt, parent: Xt, root: Pt, type: ee } = A, Me = xo(D);
        Rr(A, !1), Wt && sc(Wt), !Me && (wt = Ct && Ct.onVnodeBeforeMount) && Fn(wt, Xt, D), Rr(A, !0);
        {
          Pt.ce && Pt.ce._hasShadowRoot() && Pt.ce._injectChildStyle(
            ee,
            A.parent ? A.parent.type : void 0
          );
          const nn = A.subTree = Ku(A);
          C(
            null,
            nn,
            z,
            Z,
            A,
            q,
            W
          ), D.el = nn.el;
        }
        if (Yt && an(Yt, q), !Me && (wt = Ct && Ct.onVnodeMounted)) {
          const nn = D;
          an(
            () => Fn(wt, Xt, nn),
            q
          );
        }
        (D.shapeFlag & 256 || Xt && xo(Xt.vnode) && Xt.vnode.shapeFlag & 256) && A.a && an(A.a, q), A.isMounted = !0, D = z = Z = null;
      }
    };
    A.scope.on();
    const dt = A.effect = new fd(yt);
    A.scope.off();
    const nt = A.update = dt.run.bind(dt), It = A.job = dt.runIfDirty.bind(dt);
    It.i = A, It.id = A.uid, dt.scheduler = () => dl(It), Rr(A, !0), nt();
  }, ot = (A, D, z) => {
    D.component = A;
    const Z = A.vnode.props;
    A.vnode = D, A.next = null, A0(A, D.props, Z, z), L0(A, D.children, z), sr(), $u(A), cr();
  }, ut = (A, D, z, Z, q, W, st, yt, dt = !1) => {
    const nt = A && A.children, It = A ? A.shapeFlag : 0, wt = D.children, { patchFlag: d, shapeFlag: Ct } = D;
    if (d > 0) {
      if (d & 128) {
        Et(
          nt,
          wt,
          z,
          Z,
          q,
          W,
          st,
          yt,
          dt
        );
        return;
      } else if (d & 256) {
        kt(
          nt,
          wt,
          z,
          Z,
          q,
          W,
          st,
          yt,
          dt
        );
        return;
      }
    }
    Ct & 8 ? (It & 16 && B(nt, q, W), wt !== nt && p(z, wt)) : It & 16 ? Ct & 16 ? Et(
      nt,
      wt,
      z,
      Z,
      q,
      W,
      st,
      yt,
      dt
    ) : B(nt, q, W, !0) : (It & 8 && p(z, ""), Ct & 16 && rt(
      wt,
      z,
      Z,
      q,
      W,
      st,
      yt,
      dt
    ));
  }, kt = (A, D, z, Z, q, W, st, yt, dt) => {
    A = A || ki, D = D || ki;
    const nt = A.length, It = D.length, wt = Math.min(nt, It);
    let d;
    for (d = 0; d < wt; d++) {
      const Ct = D[d] = dt ? or(D[d]) : jn(D[d]);
      C(
        A[d],
        Ct,
        z,
        null,
        q,
        W,
        st,
        yt,
        dt
      );
    }
    nt > It ? B(
      A,
      q,
      W,
      !0,
      !1,
      wt
    ) : rt(
      D,
      z,
      Z,
      q,
      W,
      st,
      yt,
      dt,
      wt
    );
  }, Et = (A, D, z, Z, q, W, st, yt, dt) => {
    let nt = 0;
    const It = D.length;
    let wt = A.length - 1, d = It - 1;
    for (; nt <= wt && nt <= d; ) {
      const Ct = A[nt], Wt = D[nt] = dt ? or(D[nt]) : jn(D[nt]);
      if (so(Ct, Wt))
        C(
          Ct,
          Wt,
          z,
          null,
          q,
          W,
          st,
          yt,
          dt
        );
      else
        break;
      nt++;
    }
    for (; nt <= wt && nt <= d; ) {
      const Ct = A[wt], Wt = D[d] = dt ? or(D[d]) : jn(D[d]);
      if (so(Ct, Wt))
        C(
          Ct,
          Wt,
          z,
          null,
          q,
          W,
          st,
          yt,
          dt
        );
      else
        break;
      wt--, d--;
    }
    if (nt > wt) {
      if (nt <= d) {
        const Ct = d + 1, Wt = Ct < It ? D[Ct].el : Z;
        for (; nt <= d; )
          C(
            null,
            D[nt] = dt ? or(D[nt]) : jn(D[nt]),
            z,
            Wt,
            q,
            W,
            st,
            yt,
            dt
          ), nt++;
      }
    } else if (nt > d)
      for (; nt <= wt; )
        Nt(A[nt], q, W, !0), nt++;
    else {
      const Ct = nt, Wt = nt, Yt = /* @__PURE__ */ new Map();
      for (nt = Wt; nt <= d; nt++) {
        const Pe = D[nt] = dt ? or(D[nt]) : jn(D[nt]);
        Pe.key != null && Yt.set(Pe.key, nt);
      }
      let Xt, Pt = 0;
      const ee = d - Wt + 1;
      let Me = !1, nn = 0;
      const cn = new Array(ee);
      for (nt = 0; nt < ee; nt++) cn[nt] = 0;
      for (nt = Ct; nt <= wt; nt++) {
        const Pe = A[nt];
        if (Pt >= ee) {
          Nt(Pe, q, W, !0);
          continue;
        }
        let ce;
        if (Pe.key != null)
          ce = Yt.get(Pe.key);
        else
          for (Xt = Wt; Xt <= d; Xt++)
            if (cn[Xt - Wt] === 0 && so(Pe, D[Xt])) {
              ce = Xt;
              break;
            }
        ce === void 0 ? Nt(Pe, q, W, !0) : (cn[ce - Wt] = nt + 1, ce >= nn ? nn = ce : Me = !0, C(
          Pe,
          D[ce],
          z,
          null,
          q,
          W,
          st,
          yt,
          dt
        ), Pt++);
      }
      const Jr = Me ? F0(cn) : ki;
      for (Xt = Jr.length - 1, nt = ee - 1; nt >= 0; nt--) {
        const Pe = Wt + nt, ce = D[Pe], Vo = D[Pe + 1], zo = Pe + 1 < It ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Vo.el || nh(Vo)
        ) : Z;
        cn[nt] === 0 ? C(
          null,
          ce,
          z,
          zo,
          q,
          W,
          st,
          yt,
          dt
        ) : Me && (Xt < 0 || nt !== Jr[Xt] ? X(ce, z, zo, 2) : Xt--);
      }
    }
  }, X = (A, D, z, Z, q = null) => {
    const { el: W, type: st, transition: yt, children: dt, shapeFlag: nt } = A;
    if (nt & 6) {
      X(A.component.subTree, D, z, Z);
      return;
    }
    if (nt & 128) {
      A.suspense.move(D, z, Z);
      return;
    }
    if (nt & 64) {
      st.move(A, D, z, Rt);
      return;
    }
    if (st === Ue) {
      r(W, D, z);
      for (let wt = 0; wt < dt.length; wt++)
        X(dt[wt], D, z, Z);
      r(A.anchor, D, z);
      return;
    }
    if (st === La) {
      V(A, D, z);
      return;
    }
    if (Z !== 2 && nt & 1 && yt)
      if (Z === 0)
        yt.beforeEnter(W), r(W, D, z), an(() => yt.enter(W), q);
      else {
        const { leave: wt, delayLeave: d, afterLeave: Ct } = yt, Wt = () => {
          A.ctx.isUnmounted ? o(W) : r(W, D, z);
        }, Yt = () => {
          W._isLeaving && W[Qm](
            !0
            /* cancelled */
          ), wt(W, () => {
            Wt(), Ct && Ct();
          });
        };
        d ? d(W, Wt, Yt) : Yt();
      }
    else
      r(W, D, z);
  }, Nt = (A, D, z, Z = !1, q = !1) => {
    const {
      type: W,
      props: st,
      ref: yt,
      children: dt,
      dynamicChildren: nt,
      shapeFlag: It,
      patchFlag: wt,
      dirs: d,
      cacheIndex: Ct,
      memo: Wt
    } = A;
    if (wt === -2 && (q = !1), yt != null && (sr(), wo(yt, null, z, A, !0), cr()), Ct != null && (D.renderCache[Ct] = void 0), It & 256) {
      D.ctx.deactivate(A);
      return;
    }
    const Yt = It & 1 && d, Xt = !xo(A);
    let Pt;
    if (Xt && (Pt = st && st.onVnodeBeforeUnmount) && Fn(Pt, D, A), It & 6)
      ge(A.component, z, Z);
    else {
      if (It & 128) {
        A.suspense.unmount(z, Z);
        return;
      }
      Yt && Dr(A, null, D, "beforeUnmount"), It & 64 ? A.type.remove(
        A,
        D,
        z,
        Rt,
        Z
      ) : nt && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !nt.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (W !== Ue || wt > 0 && wt & 64) ? B(
        nt,
        D,
        z,
        !1,
        !0
      ) : (W === Ue && wt & 384 || !q && It & 16) && B(dt, D, z), Z && Bt(A);
    }
    const ee = Wt != null && Ct == null;
    (Xt && (Pt = st && st.onVnodeUnmounted) || Yt || ee) && an(() => {
      Pt && Fn(Pt, D, A), Yt && Dr(A, null, D, "unmounted"), ee && (A.el = null);
    }, z);
  }, Bt = (A) => {
    const { type: D, el: z, anchor: Z, transition: q } = A;
    if (D === Ue) {
      pe(z, Z);
      return;
    }
    if (D === La) {
      R(A);
      return;
    }
    const W = () => {
      o(z), q && !q.persisted && q.afterLeave && q.afterLeave();
    };
    if (A.shapeFlag & 1 && q && !q.persisted) {
      const { leave: st, delayLeave: yt } = q, dt = () => st(z, W);
      yt ? yt(A.el, W, dt) : dt();
    } else
      W();
  }, pe = (A, D) => {
    let z;
    for (; A !== D; )
      z = N(A), o(A), A = z;
    o(D);
  }, ge = (A, D, z) => {
    const { bum: Z, scope: q, job: W, subTree: st, um: yt, m: dt, a: nt } = A;
    Yu(dt), Yu(nt), Z && sc(Z), q.stop(), W && (W.flags |= 8, Nt(st, A, D, z)), yt && an(yt, D), an(() => {
      A.isUnmounted = !0;
    }, D);
  }, B = (A, D, z, Z = !1, q = !1, W = 0) => {
    for (let st = W; st < A.length; st++)
      Nt(A[st], D, z, Z, q);
  }, Mt = (A) => {
    if (A.shapeFlag & 6)
      return Mt(A.component.subTree);
    if (A.shapeFlag & 128)
      return A.suspense.next();
    const D = N(A.anchor || A.el), z = D && D[Zm];
    return z ? N(z) : D;
  };
  let xt = !1;
  const $t = (A, D, z) => {
    let Z;
    A == null ? D._vnode && (Nt(D._vnode, null, null, !0), Z = D._vnode.component) : C(
      D._vnode || null,
      A,
      D,
      null,
      null,
      null,
      z
    ), D._vnode = A, xt || (xt = !0, $u(Z), Ad(), xt = !1);
  }, Rt = {
    p: C,
    um: Nt,
    m: X,
    r: Bt,
    mt: et,
    mc: rt,
    pc: ut,
    pbc: H,
    n: Mt,
    o: t
  };
  return {
    render: $t,
    hydrate: void 0,
    createApp: _0($t)
  };
}
function hc({ type: t, props: e }, n) {
  return n === "svg" && t === "foreignObject" || n === "mathml" && t === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : n;
}
function Rr({ effect: t, job: e }, n) {
  n ? (t.flags |= 32, e.flags |= 4) : (t.flags &= -33, e.flags &= -5);
}
function O0(t, e) {
  return (!t || t && !t.pendingBranch) && e && !e.persisted;
}
function th(t, e, n = !1) {
  const r = t.children, o = e.children;
  if (Ft(r) && Ft(o))
    for (let c = 0; c < r.length; c++) {
      const u = r[c];
      let f = o[c];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = o[c] = or(o[c]), f.el = u.el), !n && f.patchFlag !== -2 && th(u, f)), f.type === xs && (f.patchFlag === -1 && (f = o[c] = or(f)), f.el = u.el), f.type === Mr && !f.el && (f.el = u.el);
    }
}
function F0(t) {
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
function eh(t) {
  const e = t.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : eh(e);
}
function Yu(t) {
  if (t)
    for (let e = 0; e < t.length; e++)
      t[e].flags |= 8;
}
function nh(t) {
  if (t.placeholder)
    return t.placeholder;
  const e = t.component;
  return e ? nh(e.subTree) : null;
}
const rh = (t) => t.__isSuspense;
function $0(t, e) {
  e && e.pendingBranch ? Ft(t) ? e.effects.push(...t) : e.effects.push(t) : Gm(t);
}
const Ue = /* @__PURE__ */ Symbol.for("v-fgt"), xs = /* @__PURE__ */ Symbol.for("v-txt"), Mr = /* @__PURE__ */ Symbol.for("v-cmt"), La = /* @__PURE__ */ Symbol.for("v-stc"), No = [];
let hn = null;
function Ne(t = !1) {
  No.push(hn = t ? null : []);
}
function H0() {
  No.pop(), hn = No[No.length - 1] || null;
}
let Do = 1;
function Xu(t, e = !1) {
  Do += t, t < 0 && hn && e && (hn.hasOnce = !0);
}
function ih(t) {
  return t.dynamicChildren = Do > 0 ? hn || ki : null, H0(), Do > 0 && hn && hn.push(t), t;
}
function He(t, e, n, r, o, c) {
  return ih(
    ve(
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
function Hi(t, e, n, r, o) {
  return ih(
    tn(
      t,
      e,
      n,
      r,
      o,
      !0
    )
  );
}
function oh(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function so(t, e) {
  return t.type === e.type && t.key === e.key;
}
const ah = ({ key: t }) => t ?? null, Da = ({
  ref: t,
  ref_key: e,
  ref_for: n
}) => (typeof t == "number" && (t = "" + t), t != null ? Ee(t) || /* @__PURE__ */ Be(t) || Ut(t) ? { i: Pn, r: t, k: e, f: !!n } : t : null);
function ve(t, e = null, n = null, r = 0, o = null, c = t === Ue ? 0 : 1, u = !1, f = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && ah(e),
    ref: e && Da(e),
    scopeId: Ed,
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
  return f ? (ml(m, n), c & 128 && t.normalize(m)) : n && (m.shapeFlag |= Ee(n) ? 8 : 16), Do > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  hn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && hn.push(m), m;
}
const tn = V0;
function V0(t, e = null, n = null, r = 0, o = null, c = !1) {
  if ((!t || t === Vd) && (t = Mr), oh(t)) {
    const f = Oi(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return n && ml(f, n), Do > 0 && !c && hn && (f.shapeFlag & 6 ? hn[hn.indexOf(t)] = f : hn.push(f)), f.patchFlag = -2, f;
  }
  if (Q0(t) && (t = t.__vccOpts), e) {
    e = z0(e);
    let { class: f, style: m } = e;
    f && !Ee(f) && (e.class = ys(f)), se(m) && (/* @__PURE__ */ ul(m) && !Ft(m) && (m = Ge({}, m)), e.style = ms(m));
  }
  const u = Ee(t) ? 1 : rh(t) ? 128 : Jm(t) ? 64 : se(t) ? 4 : Ut(t) ? 2 : 0;
  return ve(
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
function z0(t) {
  return t ? /* @__PURE__ */ ul(t) || qd(t) ? Ge({}, t) : t : null;
}
function Oi(t, e, n = !1, r = !1) {
  const { props: o, ref: c, patchFlag: u, children: f, transition: m } = t, y = e ? sh(o || {}, e) : o, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: y,
    key: y && ah(y),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && c ? Ft(c) ? c.concat(Da(e)) : [c, Da(e)] : Da(e)
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
    patchFlag: e && t.type !== Ue ? u === -1 ? 16 : u | 16 : u,
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
    ssContent: t.ssContent && Oi(t.ssContent),
    ssFallback: t.ssFallback && Oi(t.ssFallback),
    placeholder: t.placeholder,
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return m && r && hl(
    p,
    m.clone(p)
  ), p;
}
function U0(t = " ", e = 0) {
  return tn(xs, null, t, e);
}
function j0(t, e) {
  const n = tn(La, null, t);
  return n.staticCount = e, n;
}
function Ra(t = "", e = !1) {
  return e ? (Ne(), Hi(Mr, null, t)) : tn(Mr, null, t);
}
function jn(t) {
  return t == null || typeof t == "boolean" ? tn(Mr) : Ft(t) ? tn(
    Ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : oh(t) ? or(t) : tn(xs, null, String(t));
}
function or(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Oi(t);
}
function ml(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (Ft(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), ml(t, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = e._;
      !o && !qd(e) ? e._ctx = Pn : o === 3 && Pn && (Pn.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else Ut(e) ? (e = { default: e, _ctx: Pn }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [U0(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function sh(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const o in r)
      if (o === "class")
        e.class !== r.class && (e.class = ys([e.class, r.class]));
      else if (o === "style")
        e.style = ms([e.style, r.style]);
      else if (fs(o)) {
        const c = e[o], u = r[o];
        u && c !== u && !(Ft(c) && c.includes(u)) ? e[o] = c ? [].concat(c, u) : u : u == null && c == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !ds(o) && (e[o] = u);
      } else o !== "" && (e[o] = r[o]);
  }
  return e;
}
function Fn(t, e, n, r = null) {
  Yn(t, e, 7, [
    n,
    r
  ]);
}
const B0 = jd();
let G0 = 0;
function K0(t, e, n) {
  const r = t.type, o = (e ? e.appContext : t.appContext) || B0, c = {
    uid: G0++,
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
    scope: new hm(
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
    propsOptions: Xd(r, o),
    emitsOptions: Bd(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: he,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: he,
    data: he,
    props: he,
    attrs: he,
    slots: he,
    refs: he,
    setupState: he,
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
  return c.ctx = { _: c }, c.root = e ? e.root : c, c.emit = x0.bind(null, c), t.ce && t.ce(c), c;
}
let je = null;
const W0 = () => je || Pn;
let Ya, $c;
{
  const t = gs(), e = (n, r) => {
    let o;
    return (o = t[n]) || (o = t[n] = []), o.push(r), (c) => {
      o.length > 1 ? o.forEach((u) => u(c)) : o[0](c);
    };
  };
  Ya = e(
    "__VUE_INSTANCE_SETTERS__",
    (n) => je = n
  ), $c = e(
    "__VUE_SSR_SETTERS__",
    (n) => Ro = n
  );
}
const Ho = (t) => {
  const e = je;
  return Ya(t), t.scope.on(), () => {
    t.scope.off(), Ya(e);
  };
}, Zu = () => {
  je && je.scope.off(), Ya(null);
};
function ch(t) {
  return t.vnode.shapeFlag & 4;
}
let Ro = !1;
function q0(t, e = !1, n = !1) {
  e && $c(e);
  const { props: r, children: o } = t.vnode, c = ch(t);
  C0(t, r, c, e), T0(t, o, n || e);
  const u = c ? Y0(t, e) : void 0;
  return e && $c(!1), u;
}
function Y0(t, e) {
  const n = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, h0);
  const { setup: r } = n;
  if (r) {
    sr();
    const o = t.setupContext = r.length > 1 ? Z0(t) : null, c = Ho(t), u = $o(
      r,
      t,
      0,
      [
        t.props,
        o
      ]
    ), f = rd(u);
    if (cr(), c(), (f || t.sp) && !xo(t) && Dd(t), f) {
      if (u.then(Zu, Zu), e)
        return u.then((m) => {
          Ju(t, m);
        }).catch((m) => {
          vs(m, t, 0);
        });
      t.asyncDep = u;
    } else
      Ju(t, u);
  } else
    lh(t);
}
function Ju(t, e, n) {
  Ut(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : se(e) && (t.setupState = Md(e)), lh(t);
}
function lh(t, e, n) {
  const r = t.type;
  t.render || (t.render = r.render || Wn);
  {
    const o = Ho(t);
    sr();
    try {
      p0(t);
    } finally {
      cr(), o();
    }
  }
}
const X0 = {
  get(t, e) {
    return ze(t, "get", ""), t[e];
  }
};
function Z0(t) {
  const e = (n) => {
    t.exposed = n || {};
  };
  return {
    attrs: new Proxy(t.attrs, X0),
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function yl(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Md(Dm(t.exposed)), {
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
function J0(t, e = !0) {
  return Ut(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Q0(t) {
  return Ut(t) && "__vccOpts" in t;
}
const Ti = (t, e) => /* @__PURE__ */ Vm(t, e, Ro), t1 = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Hc;
const Qu = typeof window < "u" && window.trustedTypes;
if (Qu)
  try {
    Hc = /* @__PURE__ */ Qu.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const uh = Hc ? (t) => Hc.createHTML(t) : (t) => t, e1 = "http://www.w3.org/2000/svg", n1 = "http://www.w3.org/1998/Math/MathML", ir = typeof document < "u" ? document : null, tf = ir && /* @__PURE__ */ ir.createElement("template"), r1 = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const o = e === "svg" ? ir.createElementNS(e1, t) : e === "mathml" ? ir.createElementNS(n1, t) : n ? ir.createElement(t, { is: n }) : ir.createElement(t);
    return t === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
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
  insertStaticContent(t, e, n, r, o, c) {
    const u = n ? n.previousSibling : e.lastChild;
    if (o && (o === c || o.nextSibling))
      for (; e.insertBefore(o.cloneNode(!0), n), !(o === c || !(o = o.nextSibling)); )
        ;
    else {
      tf.innerHTML = uh(
        r === "svg" ? `<svg>${t}</svg>` : r === "mathml" ? `<math>${t}</math>` : t
      );
      const f = tf.content;
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
}, i1 = /* @__PURE__ */ Symbol("_vtc");
function o1(t, e, n) {
  const r = t[i1];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
const ef = /* @__PURE__ */ Symbol("_vod"), a1 = /* @__PURE__ */ Symbol("_vsh"), s1 = /* @__PURE__ */ Symbol(""), c1 = /(?:^|;)\s*display\s*:/;
function l1(t, e, n) {
  const r = t.style, o = Ee(n);
  let c = !1;
  if (n && !o) {
    if (e)
      if (Ee(e))
        for (const u of e.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && Oa(r, f, "");
        }
      else
        for (const u in e)
          n[u] == null && Oa(r, u, "");
    for (const u in n)
      u === "display" && (c = !0), Oa(r, u, n[u]);
  } else if (o) {
    if (e !== n) {
      const u = r[s1];
      u && (n += ";" + u), r.cssText = n, c = c1.test(n);
    }
  } else e && t.removeAttribute("style");
  ef in t && (t[ef] = c ? r.display : "", t[a1] && (r.display = "none"));
}
const nf = /\s*!important$/;
function Oa(t, e, n) {
  if (Ft(n))
    n.forEach((r) => Oa(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = u1(t, e);
    nf.test(n) ? t.setProperty(
      Zr(r),
      n.replace(nf, ""),
      "important"
    ) : t[r] = n;
  }
}
const rf = ["Webkit", "Moz", "ms"], pc = {};
function u1(t, e) {
  const n = pc[e];
  if (n)
    return n;
  let r = en(e);
  if (r !== "filter" && r in t)
    return pc[e] = r;
  r = ps(r);
  for (let o = 0; o < rf.length; o++) {
    const c = rf[o] + r;
    if (c in t)
      return pc[e] = c;
  }
  return e;
}
const of = "http://www.w3.org/1999/xlink";
function af(t, e, n, r, o, c = fm(e)) {
  r && e.startsWith("xlink:") ? n == null ? t.removeAttributeNS(of, e.slice(6, e.length)) : t.setAttributeNS(of, e, n) : n == null || c && !sd(n) ? t.removeAttribute(e) : t.setAttribute(
    e,
    c ? "" : qn(n) ? String(n) : n
  );
}
function sf(t, e, n, r, o) {
  if (e === "innerHTML" || e === "textContent") {
    n != null && (t[e] = e === "innerHTML" ? uh(n) : n);
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
    f === "boolean" ? n = sd(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    t[e] = n;
  } catch {
  }
  u && t.removeAttribute(o || e);
}
function f1(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function d1(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
const cf = /* @__PURE__ */ Symbol("_vei");
function h1(t, e, n, r, o = null) {
  const c = t[cf] || (t[cf] = {}), u = c[e];
  if (r && u)
    u.value = r;
  else {
    const [f, m] = p1(e);
    if (r) {
      const y = c[e] = y1(
        r,
        o
      );
      f1(t, f, y, m);
    } else u && (d1(t, f, u, m), c[e] = void 0);
  }
}
const lf = /(?:Once|Passive|Capture)$/;
function p1(t) {
  let e;
  if (lf.test(t)) {
    e = {};
    let r;
    for (; r = t.match(lf); )
      t = t.slice(0, t.length - r[0].length), e[r[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Zr(t.slice(2)), e];
}
let gc = 0;
const g1 = /* @__PURE__ */ Promise.resolve(), m1 = () => gc || (g1.then(() => gc = 0), gc = Date.now());
function y1(t, e) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Yn(
      b1(r, n.value),
      e,
      5,
      [r]
    );
  };
  return n.value = t, n.attached = m1(), n;
}
function b1(t, e) {
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
const uf = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, v1 = (t, e, n, r, o, c) => {
  const u = o === "svg";
  e === "class" ? o1(t, r, u) : e === "style" ? l1(t, n, r) : fs(e) ? ds(e) || h1(t, e, n, r, c) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : _1(t, e, r, u)) ? (sf(t, e, r), !t.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && af(t, e, r, u, c, e !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (w1(t, e) || // @ts-expect-error _def is private
  t._def.__asyncLoader && (/[A-Z]/.test(e) || !Ee(r))) ? sf(t, en(e), r, c, e) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), af(t, e, r, u));
};
function _1(t, e, n, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in t && uf(e) && Ut(n));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && t.tagName === "IFRAME" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const o = t.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return uf(e) && Ee(n) ? !1 : e in t;
}
function w1(t, e) {
  const n = (
    // @ts-expect-error _def is private
    t._def.props
  );
  if (!n)
    return !1;
  const r = en(e);
  return Array.isArray(n) ? n.some((o) => en(o) === r) : Object.keys(n).some((o) => en(o) === r);
}
const x1 = ["ctrl", "shift", "alt", "meta"], S1 = {
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
  exact: (t, e) => x1.some((n) => t[`${n}Key`] && !e.includes(n))
}, N1 = (t, e) => {
  if (!t) return t;
  const n = t._withMods || (t._withMods = {}), r = e.join(".");
  return n[r] || (n[r] = ((o, ...c) => {
    for (let u = 0; u < e.length; u++) {
      const f = S1[e[u]];
      if (f && f(o, e)) return;
    }
    return t(o, ...c);
  }));
}, M1 = /* @__PURE__ */ Ge({ patchProp: v1 }, r1);
let ff;
function P1() {
  return ff || (ff = D0(M1));
}
const k1 = ((...t) => {
  const e = P1().createApp(...t), { mount: n } = e;
  return e.mount = (r) => {
    const o = A1(r);
    if (!o) return;
    const c = e._component;
    !Ut(c) && !c.render && !c.template && (c.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const u = n(o, !1, C1(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), u;
  }, e;
});
function C1(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function A1(t) {
  return Ee(t) ? document.querySelector(t) : t;
}
const Le = Math.PI / 180, fh = Math.PI * 2, I1 = 2048;
function E1() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_GL_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoGlDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function T1(t) {
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
function mc(t, e, n, r = {}) {
  E1() && console.warn(`[PANO_GL][${t}] ${e}`, {
    ...r,
    source: T1(n)
  });
}
function be(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Pr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Xa(t, e) {
  return Pr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Si(t, e) {
  return Pr(t.x * e, t.y * e, t.z * e);
}
function Fa(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function df(t, e) {
  return Pr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function go(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Pr(t.x / e, t.y / e, t.z / e);
}
function L1(t, e) {
  const n = Number(t || 0) * Le, r = Number(e || 0) * Le, o = Math.cos(r);
  return Pr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function $a(t, e, n = 0) {
  const r = L1(t, e);
  let o = Pr(0, 1, 0);
  Math.abs(Fa(r, o)) > 0.999 && (o = Pr(0, 0, 1));
  let c = go(df(o, r)), u = go(df(r, c));
  const f = Number(n || 0) * Le, m = Math.cos(f), y = Math.sin(f), p = Xa(Si(c, m), Si(u, y)), x = Xa(Si(c, -y), Si(u, m));
  return c = go(p), u = go(x), { fwd: r, right: c, up: u };
}
function D1(t, e) {
  const n = (Number(t || 0) - 0.5) * fh, r = (0.5 - Number(e || 0)) * Math.PI, o = Math.cos(r);
  return Pr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function hf(t, e, n = 1) {
  const r = Math.max(1, Math.round(Number(t || 1))), o = Math.max(1, Math.round(Number(e || 1))), c = Math.max(1, Number(n || 1)), u = Math.max(512, I1), f = Math.min(1, u / Math.max(r, o));
  return {
    sourceWidth: r,
    sourceHeight: o,
    sourceDpr: c,
    renderScale: f,
    width: Math.max(1, Math.round(r * f)),
    height: Math.max(1, Math.round(o * f))
  };
}
function pf(t, e, n) {
  const r = t.createShader(e);
  if (t.shaderSource(r, n), t.compileShader(r), !t.getShaderParameter(r, t.COMPILE_STATUS)) {
    const o = t.getShaderInfoLog(r) || "shader compile failed";
    throw t.deleteShader(r), new Error(o);
  }
  return r;
}
function gf(t, e, n) {
  const r = pf(t, t.VERTEX_SHADER, e);
  let o;
  try {
    o = pf(t, t.FRAGMENT_SHADER, n);
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
const mf = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, R1 = `#version 300 es
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
}`, O1 = `#version 300 es
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
function ha(t, e, n) {
  if (!t || t.mode === "unwrap") return null;
  const r = Number(t.mode === "cutout" ? t.hFovDeg || 90 : t.fovDeg || 100), o = Number(t.mode === "cutout" ? t.vFovDeg || 60 : 2 * Math.atan(Math.tan(be(r, 1, 179) * Le * 0.5) * (n / Math.max(e, 1))) / Le);
  return {
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.mode === "cutout" && t.rollDeg || 0),
    hFovDeg: be(r, 1, 179),
    vFovDeg: be(o, 0.1, 179)
  };
}
function F1(t) {
  const e = $a(
    Number(t.yawDeg || 0),
    Number(t.pitchDeg || 0),
    Number(t.rollDeg || 0)
  );
  return {
    right: e.right,
    up: e.up,
    fwd: e.fwd,
    tanX: Math.tan(be(Number(t.hFovDeg || 30), 0.1, 179) * 0.5 * Le),
    tanY: Math.tan(be(Number(t.vFovDeg || 30), 0.1, 179) * 0.5 * Le),
    crop: t.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: be(Number(t.opacity ?? 1), 0, 1)
  };
}
function dh(t = {}) {
  const e = (t == null ? void 0 : t.targetCanvas) || document.createElement("canvas");
  let n = null, r = null, o = null, c = null, u = null, f = null, m = null, y = null, p = null, x = null, N = !1, k = hf(1, 1, 1), I = null, C = null, F = null, $ = null;
  const L = /* @__PURE__ */ new Map();
  let V = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  };
  function R(B = null, Mt = null) {
    const xt = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, xt), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, B ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, Mt ?? n.CLAMP_TO_EDGE), xt;
  }
  function P() {
    if (N) return !0;
    try {
      return n = e.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (r = gf(n, mf, R1), o = gf(n, mf, O1), I = {
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
        background: n.getUniformLocation(r, "u_background"),
        paint: n.getUniformLocation(r, "u_paint"),
        mask: n.getUniformLocation(r, "u_mask")
      }, C = {
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
      ]), n.STATIC_DRAW), u = R(n.REPEAT, n.CLAMP_TO_EDGE), f = R(n.REPEAT, n.CLAMP_TO_EDGE), m = R(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), N = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function J() {
    var B;
    if (n) {
      try {
        c && n.deleteBuffer(c), u && n.deleteTexture(u), f && n.deleteTexture(f), m && n.deleteTexture(m), L.forEach((Mt) => {
          ft(Mt);
        }), r && n.deleteProgram(r), o && n.deleteProgram(o), (B = n.getExtension("WEBGL_lose_context")) == null || B.loseContext();
      } catch {
      }
      n = null, r = null, o = null, c = null, u = null, f = null, m = null, L.clear(), y = null, p = null, x = null, V = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, F = null, $ = null, N = !1;
    }
  }
  function tt(B, Mt, xt = 1) {
    k = hf(B, Mt, xt), (e.width !== k.width || e.height !== k.height) && (e.width = k.width, e.height = k.height);
  }
  function rt(B, Mt, xt = [], $t = { width: 0, height: 0 }, Rt = !1) {
    if (!n || !B || !Mt) return !1;
    const Vt = Number(Mt.width || Mt.videoWidth || Mt.naturalWidth || 0), A = Number(Mt.height || Mt.videoHeight || Mt.naturalHeight || 0);
    if (!(Vt > 1) || !(A > 1)) return !1;
    const D = Array.isArray(xt) ? xt.filter((z) => z && z.w > 0 && z.h > 0) : [];
    if (!D.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, B), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Rt ? 1 : 0), $t.width !== Vt || $t.height !== A)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Mt), $t.width = Vt, $t.height = A, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (F || (F = document.createElement("canvas"), $ = F.getContext("2d")), !$)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Mt), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const z of D) {
      const Z = Math.max(0, Math.floor(Number(z.x || 0))), q = Math.max(0, Math.floor(Number(z.y || 0))), W = Math.min(Vt - Z, Math.ceil(Number(z.w || 0))), st = Math.min(A - q, Math.ceil(Number(z.h || 0)));
      if (!(W <= 0 || st <= 0)) {
        if (F.width !== W || F.height !== st) {
          if (F.width = W, F.height = st, $ = F.getContext("2d"), !$)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, Mt), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          $.clearRect(0, 0, W, st);
        $.drawImage(Mt, Z, q, W, st, 0, 0, W, st), n.texSubImage2D(n.TEXTURE_2D, 0, Z, q, n.RGBA, n.UNSIGNED_BYTE, F);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function bt(B, Mt, xt, $t, Rt = null, Vt = !1) {
    if (!P()) return !1;
    if (!xt)
      return B === "background" ? y = null : B === "paint" ? p = null : x = null, !1;
    const A = String($t ?? ""), D = B === "background" ? y : B === "paint" ? p : x, z = V[B], Z = Number(xt.width || xt.videoWidth || xt.naturalWidth || 0), q = Number(xt.height || xt.videoHeight || xt.naturalHeight || 0), W = z.width !== Z || z.height !== q;
    if (D === A && !W && !(Array.isArray(Rt) && Rt.length)) return !0;
    if (!(Z > 0) || !(q > 0))
      return mc(B, "skip-invalid-size", xt, { revision: A, sourceWidth: Z, sourceHeight: q }), !1;
    if (n.bindTexture(n.TEXTURE_2D, Mt), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, Vt ? 1 : 0), !(Array.isArray(Rt) && Rt.length ? rt(Mt, xt, Rt, z, Vt) : !1)) {
      n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, xt);
      const yt = n.getError();
      if (yt !== n.NO_ERROR)
        return mc(B, "texImage2D-error", xt, {
          revision: A,
          sourceWidth: Z,
          sourceHeight: q,
          glError: yt
        }), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !1;
      z.width = Z, z.height = q;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), B === "background" ? y = A : B === "paint" ? p = A : x = A, !0;
  }
  function H(B, Mt) {
    return bt("background", u, B, Mt, null, !0);
  }
  function Y(B, Mt, xt = null) {
    return bt("paint", f, B, Mt, xt, !0);
  }
  function lt(B, Mt, xt = null) {
    return bt("mask", m, B, Mt, xt, !0);
  }
  function ft(B) {
    B != null && B.texture && n && n.deleteTexture(B.texture);
  }
  function et(B) {
    if (!n || !(B != null && B.assetId) || !(B != null && B.source)) return null;
    const Mt = String(B.assetId), xt = String(B.revision ?? ""), $t = B.source, Rt = Number($t.width || $t.naturalWidth || $t.videoWidth || 0), Vt = Number($t.height || $t.naturalHeight || $t.videoHeight || 0);
    if (Rt <= 0 || Vt <= 0) return null;
    let A = L.get(Mt);
    if (A || (A = {
      texture: R(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, L.set(Mt, A)), A.revision !== xt || A.width !== Rt || A.height !== Vt) {
      n.bindTexture(n.TEXTURE_2D, A.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, $t);
      const D = n.getError();
      if (D !== n.NO_ERROR)
        return mc(`sticker:${Mt}`, "texImage2D-error", $t, {
          revision: xt,
          width: Rt,
          height: Vt,
          glError: D
        }), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), A.revision = xt, A.width = Rt, A.height = Vt;
    }
    return A.texture;
  }
  function G(B = []) {
    if (!P()) return !1;
    const Mt = /* @__PURE__ */ new Set();
    return B.forEach((xt) => {
      !(xt != null && xt.assetId) || !(xt != null && xt.source) || (Mt.add(String(xt.assetId)), et(xt));
    }), L.forEach((xt, $t) => {
      Mt.has($t) || (ft(xt), L.delete($t));
    }), !0;
  }
  function it() {
    return P() ? (n.viewport(0, 0, e.width, e.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function ot(B) {
    n.useProgram(B), n.bindBuffer(n.ARRAY_BUFFER, c), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function ut(B, Mt = {}) {
    if (!y) return null;
    n.disable(n.BLEND), ot(r), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, u), n.uniform1i(I.background, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(I.paint, 1), n.activeTexture(n.TEXTURE2), n.bindTexture(n.TEXTURE_2D, m), n.uniform1i(I.mask, 2), n.uniform2f(I.viewport, Math.max(1, k.width), Math.max(1, k.height)), n.uniform1i(I.mode, (B == null ? void 0 : B.mode) === "unwrap" ? 0 : (B == null ? void 0 : B.mode) === "cutout" ? 2 : 1);
    const xt = ha(B, k.width, k.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(I.yaw, Number(xt.yawDeg || 0) * Le), n.uniform1f(I.pitch, Number(xt.pitchDeg || 0) * Le), n.uniform1f(I.roll, Number(xt.rollDeg || 0) * Le), n.uniform1f(I.hFov, be(Number(xt.hFovDeg || 90), 0.1, 179) * Le), n.uniform1f(I.vFov, be(Number(xt.vFovDeg || 60), 0.1, 179) * Le), n.uniform1f(I.opacity, be(Number(Mt.backgroundOpacity ?? 1), 0, 1)), n.uniform1f(I.paintOpacity, be(Number(Mt.paintOpacity ?? 1), 0, 1)), n.uniform1f(I.maskOpacity, be(Number(Mt.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(I.hasPaint, p != null ? 1 : 0), n.uniform1i(I.hasMask, x != null ? 1 : 0), n.uniform1i(I.showMaskTint, Mt.showMaskTint === !1 ? 0 : 1), n.uniform3f(I.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), e;
  }
  function kt(B, Mt, xt) {
    var z;
    if (!((z = B == null ? void 0 : B.stickers) != null && z.length) || !(Mt != null && Mt.length)) return;
    const $t = (xt == null ? void 0 : xt.mode) === "unwrap" ? 0 : (xt == null ? void 0 : xt.mode) === "cutout" ? 2 : 1, Rt = ha(xt, k.width, k.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, Vt = $a(Rt.yawDeg, Rt.pitchDeg, Rt.rollDeg), A = /* @__PURE__ */ new Map();
    Mt.forEach((Z) => {
      const q = et(Z);
      q && A.set(String(Z.assetId || ""), q);
    }), n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), ot(o), n.uniform1i(C.texture, 0), n.uniform1i(C.mode, $t), n.uniform3f(C.viewRight, Vt.right.x, Vt.right.y, Vt.right.z), n.uniform3f(C.viewUp, Vt.up.x, Vt.up.y, Vt.up.z), n.uniform3f(C.viewFwd, Vt.fwd.x, Vt.fwd.y, Vt.fwd.z), n.uniform1f(C.viewHfov, be(Number(Rt.hFovDeg || 90), 0.1, 179) * Le), n.uniform1f(C.viewVfov, be(Number(Rt.vFovDeg || 60), 0.1, 179) * Le), [...B.stickers].sort((Z, q) => Number((Z == null ? void 0 : Z.zIndex) || 0) - Number((q == null ? void 0 : q.zIndex) || 0)).forEach((Z) => {
      const q = A.get(String((Z == null ? void 0 : Z.assetId) || ""));
      if (!q) return;
      const W = F1(Z), st = W.crop;
      n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, q), n.uniform3f(C.stickerRight, W.right.x, W.right.y, W.right.z), n.uniform3f(C.stickerUp, W.up.x, W.up.y, W.up.z), n.uniform3f(C.stickerFwd, W.fwd.x, W.fwd.y, W.fwd.z), n.uniform1f(C.stickerTanX, Math.max(1e-6, W.tanX)), n.uniform1f(C.stickerTanY, Math.max(1e-6, W.tanY)), n.uniform4f(
        C.crop,
        be(Number(st.x0 ?? 0), 0, 1),
        be(Number(st.y0 ?? 0), 0, 1),
        be(Number(st.x1 ?? 1), 0, 1),
        be(Number(st.y1 ?? 1), 0, 1)
      ), n.uniform1f(C.opacity, W.opacity), n.drawArrays(n.TRIANGLES, 0, 6);
    }), n.disable(n.BLEND);
  }
  function Et(B) {
    return !it() || !y ? null : (ut({
      mode: "panorama",
      yawDeg: (B == null ? void 0 : B.yawDeg) || 0,
      pitchDeg: (B == null ? void 0 : B.pitchDeg) || 0,
      fovDeg: (B == null ? void 0 : B.fovDeg) || 100
    }, B), e);
  }
  function X(B) {
    return !it() || !y ? null : (ut({ mode: "unwrap" }, B), e);
  }
  function Nt(B) {
    return !it() || !y ? null : (ut({
      mode: "cutout",
      yawDeg: (B == null ? void 0 : B.yawDeg) || 0,
      pitchDeg: (B == null ? void 0 : B.pitchDeg) || 0,
      rollDeg: (B == null ? void 0 : B.rollDeg) || 0,
      hFovDeg: (B == null ? void 0 : B.hFovDeg) || 90,
      vFovDeg: (B == null ? void 0 : B.vFovDeg) || 60
    }, B), e);
  }
  function Bt(B = {}) {
    return !P() || (tt(B.width, B.height, B.dpr || 1), !it()) ? null : (B.backgroundSource && (H(B.backgroundSource, B.backgroundRevision ?? ""), ut(B.view, B)), G(B.textures || []), kt(
      B.scene || { stickers: [] },
      B.textures || [],
      B.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), e);
  }
  function pe(B, Mt, xt) {
    const $t = Math.max(1, Number((B == null ? void 0 : B.viewportWidth) || k.sourceWidth || k.width || 1)), Rt = Math.max(1, Number((B == null ? void 0 : B.viewportHeight) || k.sourceHeight || k.height || 1)), Vt = Number(Mt), A = Number(xt);
    if (!Number.isFinite(Vt) || !Number.isFinite(A)) return null;
    if ((B == null ? void 0 : B.mode) === "unwrap")
      return { u: (Vt / $t % 1 + 1) % 1, v: be(A / Rt, 0, 1) };
    const D = ha(B, $t, Rt);
    if (!D) return null;
    const z = $a(D.yawDeg, D.pitchDeg, D.rollDeg), Z = (Vt - $t * 0.5) / ($t * 0.5) * Math.tan(be(D.hFovDeg, 1, 179) * Le * 0.5), q = (Rt * 0.5 - A) / (Rt * 0.5) * Math.tan(be(D.vFovDeg, 0.1, 179) * Le * 0.5), W = go(Xa(Xa(Si(z.right, Z), Si(z.up, q)), z.fwd));
    return {
      u: (Math.atan2(W.x, W.z) / fh + 0.5 + 1) % 1,
      v: be(0.5 - Math.asin(be(W.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function ge(B, Mt, xt) {
    const $t = Math.max(1, Number((B == null ? void 0 : B.viewportWidth) || k.sourceWidth || k.width || 1)), Rt = Math.max(1, Number((B == null ? void 0 : B.viewportHeight) || k.sourceHeight || k.height || 1));
    if ((B == null ? void 0 : B.mode) === "unwrap")
      return {
        x: (Number(Mt || 0) % 1 + 1) % 1 * $t,
        y: be(Number(xt || 0), 0, 1) * Rt,
        visible: !0
      };
    const Vt = ha(B, $t, Rt);
    if (!Vt)
      return { x: $t * 0.5, y: Rt * 0.5, visible: !1 };
    const A = $a(Vt.yawDeg, Vt.pitchDeg, Vt.rollDeg), D = D1(Mt, xt), z = Fa(D, A.right), Z = Fa(D, A.up), q = Fa(D, A.fwd);
    if (q <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const W = $t * 0.5 + z / q * ($t * 0.5 / Math.tan(be(Vt.hFovDeg, 1, 179) * Le * 0.5)), st = Rt * 0.5 - Z / q * (Rt * 0.5 / Math.tan(be(Vt.vFovDeg, 0.1, 179) * Le * 0.5));
    return { x: W, y: st, visible: W >= 0 && W <= $t && st >= 0 && st <= Rt };
  }
  return {
    init: P,
    dispose: J,
    setViewport: tt,
    setBackgroundErp: H,
    setPaintErp: Y,
    setMaskErp: lt,
    renderPanorama: Et,
    renderUnwrap: X,
    renderCutout: Nt,
    renderScene: Bt,
    screenToErpUv: pe,
    erpUvToScreen: ge,
    getCanvas() {
      return e;
    },
    isSupported() {
      return P();
    },
    getViewport() {
      return { ...k };
    }
  };
}
const yf = "__shared_renderer";
function $1(t) {
  return t ? (t.__panoGlViewportCache || (t.__panoGlViewportCache = /* @__PURE__ */ new Map()), t.__panoGlViewportCache) : null;
}
function H1(t, e) {
  var c;
  const n = $1(t);
  if (!n) return null;
  let r = n.get(yf);
  if (!r) {
    const u = dh();
    if (!((c = u == null ? void 0 : u.isSupported) != null && c.call(u))) return null;
    r = { renderer: u }, n.set(yf, r);
  }
  let o = n.get(e);
  return o || (o = { renderer: r.renderer, lastRenderKey: null, cachedCanvas: null }, n.set(e, o)), o;
}
function V1(t) {
  return t ? [
    String(t.currentSrc || t.src || ""),
    Number(t.naturalWidth || t.videoWidth || t.width || 0),
    Number(t.naturalHeight || t.videoHeight || t.height || 0)
  ].join("|") : "";
}
function z1(t) {
  const e = String((t == null ? void 0 : t.mode) || "panorama");
  return e === "unwrap" ? "unwrap" : e === "cutout" ? `c|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.rollDeg || 0).toFixed(4)}|${Number(t.hFovDeg || 90).toFixed(4)}|${Number(t.vFovDeg || 60).toFixed(4)}` : `p|${Number(t.yawDeg || 0).toFixed(4)}|${Number(t.pitchDeg || 0).toFixed(4)}|${Number(t.fovDeg || 100).toFixed(4)}`;
}
function U1(t = {}) {
  return t.rect ? t.rect : {
    x: 0,
    y: 0,
    w: Math.max(1, Number(t.width || 1)),
    h: Math.max(1, Number(t.height || 1))
  };
}
function Vi(t = {}) {
  const e = t.owner || null, n = t.ctx || null, r = U1(t);
  if (!e || !n || !(r != null && r.w) || !(r != null && r.h)) return !1;
  const o = String(t.cacheKey || "scene"), c = H1(e, o), u = t.backgroundSource || t.img || null, f = t.scene || { stickers: [], selectedId: null, hoveredId: null }, m = Array.isArray(t.textures) ? t.textures : [], y = t.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 };
  if (!(c != null && c.renderer)) return !1;
  const p = c.renderer, x = Math.max(1, Number(t.dpr || window.devicePixelRatio || 1)), N = t.backgroundRevision != null, k = typeof HTMLVideoElement < "u" && u instanceof HTMLVideoElement || typeof HTMLCanvasElement < "u" && u instanceof HTMLCanvasElement, I = N ? String(t.backgroundRevision) : k ? "" : V1(u), C = Number(t.backgroundOpacity ?? 1), $ = f.stickers.length === 0 && m.length === 0 && (!!N || !k), L = `${Math.round(r.w)}x${Math.round(r.h)}|${x}|${z1(y)}|${I}|${C.toFixed(3)}`;
  if ($ && c.lastRenderKey === L && c.cachedCanvas)
    return n.drawImage(c.cachedCanvas, r.x, r.y, r.w, r.h), !0;
  const V = p.renderScene({
    width: r.w,
    height: r.h,
    dpr: x,
    backgroundSource: u,
    backgroundRevision: I,
    textures: m,
    scene: f,
    view: y,
    backgroundOpacity: C
  });
  if (!V) return !1;
  if ($) {
    const R = V.width, P = V.height;
    (!c.cachedCanvas || c.cachedCanvas.width !== R || c.cachedCanvas.height !== P) && (c.cachedCanvas = document.createElement("canvas"), c.cachedCanvas.width = R, c.cachedCanvas.height = P);
    const J = c.cachedCanvas.getContext("2d");
    J.clearRect(0, 0, R, P), J.drawImage(V, 0, 0), c.lastRenderKey = L;
  } else
    c.lastRenderKey = null;
  return n.drawImage(V, r.x, r.y, r.w, r.h), !0;
}
function j1(t = {}) {
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
  }, Vi({
    ...t,
    cacheKey: t.cacheKey || t.mode || "erp_view",
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    view: e
  });
}
function pa(t = {}) {
  const e = t.view || {
    mode: "cutout",
    yawDeg: Number(t.yawDeg || 0),
    pitchDeg: Number(t.pitchDeg || 0),
    rollDeg: Number(t.rollDeg || 0),
    hFovDeg: Number(t.hFovDeg || 90),
    vFovDeg: Number(t.vFovDeg || 60)
  };
  return Vi({
    ...t,
    cacheKey: t.cacheKey || "cutout_view",
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    view: e
  });
}
function _i(t, e) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(t)), n.height = Math.max(1, Math.round(e));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function bl(t, e) {
  const n = Math.max(1, Math.ceil(t)), r = Math.max(1, Math.ceil(e));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function zn(t, e, n) {
  if (!t) return _i(e, n);
  const r = Math.max(1, Math.round(e)), o = Math.max(1, Math.round(n));
  return (t.canvas.width !== r || t.canvas.height !== o) && (t.canvas.width = r, t.canvas.height = o, t.ctx.imageSmoothingEnabled = !0), t;
}
function ye(t) {
  t != null && t.ctx && t.ctx.clearRect(0, 0, t.canvas.width, t.canvas.height);
}
let yc = null, bc = null, bf = null, vf = null, oe = null, co = null, Xe = null, _r = null;
function B1() {
  if (bc) return bc;
  const t = 6, e = 17, n = document.createElement("canvas");
  n.width = e, n.height = e;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, e, e), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = t, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(e, e), r.moveTo(-e / 2, e / 2), r.lineTo(e / 2, e + e / 2), r.moveTo(e / 2, -e / 2), r.lineTo(e + e / 2, e / 2), r.stroke(), bc = n, n;
}
function pi(t, e) {
  if (!t || !e) return;
  const n = e.width, r = e.height;
  yc = zn(yc, n, r);
  const o = yc;
  ye(o), o.ctx.drawImage(e, 0, 0), o.ctx.globalCompositeOperation = "source-in", vf !== o.ctx && (bf = o.ctx.createPattern(B1(), "repeat"), vf = o.ctx), o.ctx.fillStyle = bf, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", t.save(), t.globalCompositeOperation = "source-over", t.drawImage(o.canvas, 0, 0), t.restore();
}
function G1(t) {
  return !t || typeof t != "object" ? { x: 0, y: 0 } : { x: Number(t.u || 0), y: Number(t.v || 0) };
}
function K1(t) {
  const e = t == null ? void 0 : t.geometry;
  return e ? Array.isArray(e.rawPoints) && e.rawPoints.length ? e.rawPoints : Array.isArray(e.points) && e.points.length ? e.points : [] : [];
}
function W1(t, e) {
  const n = Number(t == null ? void 0 : t.radiusValue), r = String((t == null ? void 0 : t.radiusModel) || "").trim(), o = (e == null ? void 0 : e.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((t == null ? void 0 : t.baseSize) || (t == null ? void 0 : t.size) || 10) * 0.5);
}
function q1(t, e) {
  const n = Number(t == null ? void 0 : t.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * e * 2);
  const r = String((t == null ? void 0 : t.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * e * 2);
}
const Se = /* @__PURE__ */ new Map(), vl = 128;
function Y1(t, e, n, r, o, c) {
  const u = Math.max(1, Math.round(t)), f = Math.max(0, Math.min(1, e)), m = `${u}:${f.toFixed(2)}:${n}:${r}:${o}:${c.toFixed(3)}`;
  if (Se.has(m)) {
    const L = Se.get(m);
    return Se.delete(m), Se.set(m, L), L;
  }
  Se.size >= vl && Se.delete(Se.keys().next().value);
  const y = u * 2 + 2, p = u + 1, x = bl(y, y), N = x.getContext("2d"), k = f * u, I = u + 1, C = `rgba(${n},${r},${o},${c})`, F = `rgba(${n},${r},${o},0)`, $ = N.createRadialGradient(p, p, k, p, p, I);
  return $.addColorStop(0, C), $.addColorStop(1, F), N.fillStyle = $, N.fillRect(0, 0, y, y), Se.set(m, x), x;
}
function X1(t, e, n, r, o, c, u) {
  const { r: f, g: m, b: y, a: p } = r, x = Math.max(2, Math.ceil(t) * 2), N = Math.max(2, Math.ceil(e) * 2), k = Math.max(0, o), I = Math.max(0, Math.min(0.99, c)), C = Math.max(0, Math.min(1, u ?? 0)), F = `chisel:${x}:${N}:${n.toFixed(2)}:${f}:${m}:${y}:${p.toFixed(3)}:${k.toFixed(2)}:${I.toFixed(2)}:${C.toFixed(2)}`;
  if (Se.has(F)) {
    const rt = Se.get(F);
    return Se.delete(F), Se.set(F, rt), rt;
  }
  Se.size >= vl && Se.delete(Se.keys().next().value);
  const $ = bl(x, N), L = $.getContext("2d"), V = L.createImageData(x, N), R = V.data, P = Math.max(0, t - e), J = Math.max(0, Math.min(1, n)), tt = 1 + k;
  for (let rt = 0; rt < N; rt++)
    for (let bt = 0; bt < x; bt++) {
      const H = bt + 0.5 - t, Y = rt + 0.5 - e, lt = Math.max(Math.abs(H) - P, 0), et = Math.hypot(lt, Y) / e;
      if (et >= 1) continue;
      const G = et <= J ? 1 : Math.max(0, (1 - et) / Math.max(1e-4, 1 - J)), it = 1 - et, ot = 1 + k * (1 - it) * (1 - it), ut = 1 - I * it * it, kt = ot * ut / tt;
      let Et = 1;
      if (C > 0) {
        const Bt = Math.floor((Y + e) / 1.5), pe = Math.floor((H + t) / 8), ge = Br(Li(Bt * 41 + 500, pe * 19 + 300));
        Et = 1 - C * 0.42 * ge;
      }
      const X = Math.round(255 * Math.min(1, p * G * kt * Et));
      if (X <= 0) continue;
      const Nt = (rt * x + bt) * 4;
      R[Nt] = f, R[Nt + 1] = m, R[Nt + 2] = y, R[Nt + 3] = X;
    }
  return L.putImageData(V, 0, 0), Se.set(F, $), $;
}
function Li(t, e) {
  const n = Math.trunc(Math.round(t * 4)), r = Math.trunc(Math.round(e * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function Br(t) {
  let e = t + 1831565813 >>> 0;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Z1(t, e, n, r, o, c, u) {
  const f = t + 0.5 - n, m = e + 0.5 - r, y = Math.max(0, n - r), p = Math.max(Math.abs(f) - y, 0), x = Math.hypot(p, m) / r;
  if (x >= 1) return 0;
  const N = Br(Li(t * 17 + 3, e * 13 + 7)), k = x + c * 0.22 * (N - 0.5);
  if (k >= 1) return 0;
  const I = k <= o ? 1 : Math.max(0, (1 - k) / Math.max(1e-4, 1 - o)), C = J1(t, e, f, m, n, r), F = c * 0.55;
  if (C < F) return 0;
  const L = 0.45 + 0.55 * ((C - F) / Math.max(1e-4, 1 - F));
  return Math.round(255 * Math.min(1, u * I * L));
}
function J1(t, e, n, r, o, c) {
  const u = Math.floor((n + o) / 3), f = Math.floor((r + c) / 2), m = Br(Li(u * 13 + 700, f * 17 + 400)), y = Math.floor((n + o) / 1.5), p = Math.floor((r + c) / 1.5), x = Br(Li(y * 23 + 800, p * 29 + 500)), N = Br(Li(t * 3 + 100, e * 5 + 200));
  return m * 0.55 + x * 0.3 + N * 0.15;
}
function Q1(t, e, n, r, o) {
  const { r: c, g: u, b: f, a: m } = r, y = Math.max(2, Math.ceil(t) * 2), p = Math.max(2, Math.ceil(e) * 2), x = Math.max(0, Math.min(1, o)), N = `crayon:${y}:${p}:${n.toFixed(2)}:${c}:${u}:${f}:${m.toFixed(3)}:${x.toFixed(2)}`;
  if (Se.has(N)) {
    const L = Se.get(N);
    return Se.delete(N), Se.set(N, L), L;
  }
  Se.size >= vl && Se.delete(Se.keys().next().value);
  const k = bl(y, p), I = k.getContext("2d"), C = I.createImageData(y, p), F = C.data, $ = Math.max(0, Math.min(1, n));
  for (let L = 0; L < p; L++)
    for (let V = 0; V < y; V++) {
      const R = Z1(V, L, t, e, $, x, m);
      if (R <= 0) continue;
      const P = (L * y + V) * 4;
      F[P] = c, F[P + 1] = u, F[P + 2] = f, F[P + 3] = R;
    }
  return I.putImageData(C, 0, 0), Se.set(N, k), k;
}
function hh(t, e, n) {
  var k;
  const r = String((e == null ? void 0 : e.stampKind) || "round"), o = W1(e, n), c = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.hardness) ?? 0.9))), u = ty(e), f = Math.max(0.1, Number((e == null ? void 0 : e.aspect) ?? 1)), m = Number(((k = e == null ? void 0 : e.angle) == null ? void 0 : k.value) ?? 0), y = q1(e, o), p = e == null ? void 0 : e.scatter, x = p ? { radius: Number(p.radius ?? 1.5), count: Math.max(1, Math.round(p.count ?? 6)) } : null;
  let N;
  if (r === "chisel") {
    const I = o * f, C = o, F = Math.max(0, Number((e == null ? void 0 : e.chiselEdgeLift) ?? 0.4)), $ = Math.max(0, Number((e == null ? void 0 : e.chiselCenterDip) ?? 0.3)), L = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.chiselFiber) ?? 0)));
    N = X1(I, C, c, u, F, $, L);
  } else if (r === "crayon") {
    const I = o * f, C = o, F = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.crayonGrain) ?? 0.65)));
    N = Q1(I, C, c, u, F);
  } else
    N = Y1(o, c, u.r, u.g, u.b, u.a);
  return { ctx: t, stampTex: N, radiusPx: o, spacingPx: y, desc: n, aspect: f, angle: m, stampKind: r, scatter: x };
}
function ty(t) {
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
function ey(t) {
  const e = String((t == null ? void 0 : t.layerKind) || "paint");
  if (String((t == null ? void 0 : t.toolKind) || "pen") === "eraser" || e === "mask") return "rgba(255,255,255,1)";
  const r = (t == null ? void 0 : t.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function _f(t, e, n, r, o) {
  const c = t.angle, u = t.desc.width;
  function f(y, p) {
    c === 0 ? t.ctx.drawImage(t.stampTex, y - o, p - r, o * 2, r * 2) : (t.ctx.save(), t.ctx.translate(y, p), t.ctx.rotate(c), t.ctx.drawImage(t.stampTex, -o, -r, o * 2, r * 2), t.ctx.restore());
  }
  f(e, n);
  const m = c === 0 ? o : o * Math.abs(Math.cos(c)) + r * Math.abs(Math.sin(c));
  e - m < 0 && f(e + u, n), e + m > u && f(e - u, n);
}
function _l(t, e, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (t.scatter) {
    const { radius: m, count: y } = t.scatter, p = m * t.radiusPx * o, x = Li(e, n);
    for (let N = 0; N < y; N++) {
      const k = Br(x + N * 2) * Math.PI * 2, I = Math.sqrt(Br(x + N * 2 + 1)) * p, C = e + Math.cos(k) * I, F = n + Math.sin(k) * I, $ = Math.max(0.5, t.radiusPx * o * 0.48), L = (0.5 - F / Math.max(1, t.desc.height)) * Math.PI, V = $ * t.aspect / Math.max(0.05, Math.cos(L));
      _f(t, C, F, $, V);
    }
    return;
  }
  const c = Math.max(0.5, t.radiusPx * o), u = (0.5 - n / Math.max(1, t.desc.height)) * Math.PI, f = c * t.aspect / Math.max(0.05, Math.cos(u));
  _f(t, e, n, c, f);
}
function wf(t, e, n) {
  const r = K1(e);
  if (!t || r.length === 0) return;
  const o = n.width, c = n.height, u = hh(t, e, n);
  t.save(), t.globalCompositeOperation = "source-over";
  const f = [];
  for (let N = 0; N < r.length; N++) {
    let k = Number(r[N].u || 0) * o;
    const I = Number(r[N].v || 0) * c;
    N > 0 && Math.abs(k - f[N - 1].x) > o * 0.5 && (k += k < f[N - 1].x ? o : -o), f.push({ x: k, y: I });
  }
  if (_l(u, f[0].x, f[0].y, 1), f.length === 1) {
    t.restore();
    return;
  }
  let m = f[0], y = f[0], p = f[0], x = 0;
  for (let N = 1; N < f.length; N++) {
    const k = f[N], I = { x: (y.x + k.x) * 0.5, y: (y.y + k.y) * 0.5 };
    N === 1 ? x = Oo(u, p.x, p.y, I.x, I.y, x) : x = Za(u, m, p, I, k, x), m = y, y = k, p = I;
  }
  f.length === 2 ? Oo(u, p.x, p.y, y.x, y.y, x) : Za(u, m, p, y, y, x), t.restore();
}
function Ha(t, e, n) {
  var x;
  const r = Array.isArray((x = e == null ? void 0 : e.geometry) == null ? void 0 : x.points) ? e.geometry.points : [];
  if (!t || r.length < 3) return;
  const o = n.width, c = n.height, u = ey(e), f = [];
  let m = 1 / 0, y = -1 / 0;
  for (let N = 0; N < r.length; N++) {
    const k = G1(r[N]);
    let I = Number(k.x || 0) * o;
    N > 0 && Math.abs(I - f[N - 1].x) > o * 0.5 && (I += I < f[N - 1].x ? o : -o), f.push({ x: I, y: Number(k.y || 0) * c }), I < m && (m = I), I > y && (y = I);
  }
  function p(N) {
    t.beginPath(), t.moveTo(f[0].x + N, f[0].y);
    for (let k = 1; k < f.length; k++) t.lineTo(f[k].x + N, f[k].y);
    t.closePath(), t.fill();
  }
  t.save(), t.globalCompositeOperation = "source-over", t.fillStyle = u, p(0), m < 0 && p(o), y > o && p(-o), t.restore();
}
function ga(t, e, n) {
  var u;
  if (String(((u = e == null ? void 0 : e.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Ha(t, e, n);
    return;
  }
  const c = String((e == null ? void 0 : e.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((e == null ? void 0 : e.opacity) ?? 1)));
  c >= 0.999 ? wf(t, e, n) : (co = zn(co, n.width, n.height), ye(co), wf(co.ctx, e, n), t.save(), t.globalAlpha = c, t.drawImage(co.canvas, 0, 0), t.restore());
}
function wr(t, e) {
  t.save(), t.globalCompositeOperation = "destination-out", t.drawImage(e, 0, 0), t.restore();
}
function Oo(t, e, n, r, o, c) {
  const u = r - e, f = o - n, m = Math.hypot(u, f);
  if (m < 1e-9) return c;
  let y = t.spacingPx - c;
  for (; y <= m; ) {
    const p = y / m;
    _l(t, e + u * p, n + f * p, 1), y += t.spacingPx;
  }
  return m - y + t.spacingPx;
}
function Za(t, e, n, r, o, c) {
  const f = Math.sqrt(Math.hypot(n.x - e.x, n.y - e.y)) + 1e-4, m = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, p = 0, x = f, N = x + m, k = N + y, I = N - x, C = 16;
  let F = c, $ = n.x, L = n.y;
  for (let V = 1; V <= C; V++) {
    const R = x + I * V / C, P = ((x - R) * e.x + (R - p) * n.x) / (x - p), J = ((x - R) * e.y + (R - p) * n.y) / (x - p), tt = ((N - R) * n.x + (R - x) * r.x) / (N - x), rt = ((N - R) * n.y + (R - x) * r.y) / (N - x), bt = ((k - R) * r.x + (R - N) * o.x) / (k - N), H = ((k - R) * r.y + (R - N) * o.y) / (k - N), Y = ((N - R) * P + (R - p) * tt) / (N - p), lt = ((N - R) * J + (R - p) * rt) / (N - p), ft = ((k - R) * tt + (R - x) * bt) / (k - x), et = ((k - R) * rt + (R - x) * H) / (k - x), G = ((N - R) * Y + (R - x) * ft) / (N - x), it = ((N - R) * lt + (R - x) * et) / (N - x);
    F = Oo(t, $, L, G, it, F), $ = G, L = it;
  }
  return F;
}
function ny(t, e, n, r) {
  const o = t.currentStroke.ctx;
  if (!o) return;
  const c = t.descriptor, u = c.width, f = n * c.height, m = t.activeStroke;
  let y = e * u;
  if (m && Math.abs(y - m.prev.x) > u * 0.5 && (y += y < m.prev.x ? u : -u), !m) {
    const k = hh(o, r, c), I = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), C = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), F = String((r == null ? void 0 : r.toolKind) || "") === "eraser", $ = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", _l(k, y, f, 1), t.activeStroke = {
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
      strokeOpacity: I,
      velocityWidthFactor: C,
      distSinceStamp: 0,
      isEraser: F,
      layerKind: $,
      pointCount: 1
    }, t.displayDirty = !0;
    return;
  }
  const p = (m.prev.x + y) * 0.5, x = (m.prev.y + f) * 0.5;
  o.globalCompositeOperation = "source-over";
  const N = {
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
  m.pointCount === 1 ? m.distSinceStamp = Oo(N, m.lastMidX, m.lastMidY, p, x, m.distSinceStamp) : m.distSinceStamp = Za(
    N,
    m.pprev,
    { x: m.lastMidX, y: m.lastMidY },
    { x: p, y: x },
    { x: y, y: f },
    m.distSinceStamp
  ), m.pprev = m.prev, m.prev = { x: y, y: f }, m.lastMidX = p, m.lastMidY = x, m.pointCount++, t.displayDirty = !0;
}
function Vc(t = {}) {
  const e = Math.max(1, Math.round(Number((t == null ? void 0 : t.width) || 2048))), n = Math.max(1, Math.round(Number((t == null ? void 0 : t.height) || 1024))), r = { kind: "ERP_GLOBAL", width: e, height: n }, o = /* @__PURE__ */ new Map(), c = _i(e, n), u = {
    descriptor: r,
    committedMask: _i(e, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: _i(e, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, m = _i(e, n);
  let y = null, p = "", x = null;
  function N(H) {
    return {
      actionGroupId: H,
      descriptor: r,
      committedPaint: _i(e, n),
      currentStroke: c,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function k(H) {
    let Y = o.get(H);
    return Y || (Y = N(H), o.set(H, Y)), Y;
  }
  function I(H) {
    return p === "mask" ? u : y ? k(y) : f;
  }
  function C(H) {
    var ut;
    const Y = !x || x.length !== H.length || H.some((kt, Et) => kt !== x[Et]);
    let lt = u.displayDirty || f.displayDirty || Y;
    for (const kt of H) {
      const Et = o.get(kt);
      if (Et != null && Et.displayDirty) {
        lt = !0;
        break;
      }
    }
    if (!lt) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const kt of H) {
      const Et = o.get(kt);
      Et && (Et.displayDirty = !1);
    }
    x = [...H];
    const ft = m.ctx;
    ye(m);
    const et = p === "paint" && ((ut = y ? o.get(y) : f) == null ? void 0 : ut.activeStroke) || null, G = !!(et != null && et.isEraser);
    for (const kt of H) {
      const Et = o.get(kt);
      if (!Et) continue;
      const Nt = y === Et.actionGroupId && p === "paint" ? Et.activeStroke : null;
      if (G)
        oe = zn(oe, e, n), ye(oe), oe.ctx.drawImage(Et.committedPaint.canvas, 0, 0), wr(oe.ctx, c.canvas), ft.drawImage(oe.canvas, 0, 0);
      else if (ft.drawImage(Et.committedPaint.canvas, 0, 0), Nt) {
        const Bt = Et.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Nt.strokeOpacity ?? 1));
        ft.save(), ft.globalAlpha = Bt, ft.drawImage(c.canvas, 0, 0), ft.restore();
      }
    }
    const it = p === "mask", ot = u.activeStroke;
    it && (ot != null && ot.isEraser) ? (oe = zn(oe, e, n), ye(oe), oe.ctx.drawImage(u.committedMask.canvas, 0, 0), wr(oe.ctx, c.canvas), pi(ft, oe.canvas)) : (pi(ft, u.committedMask.canvas), it && ot && pi(ft, c.canvas));
  }
  function F(H) {
    var lt, ft, et, G, it;
    for (const ot of o.values())
      ye(ot.committedPaint), ye(ot.currentStroke), ot.activeStroke = null, ot.displayDirty = !0;
    ye(u.committedMask), ye(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, x = null;
    const Y = [
      ...Array.isArray((ft = (lt = H == null ? void 0 : H.painting) == null ? void 0 : lt.paint) == null ? void 0 : ft.strokes) ? H.painting.paint.strokes : [],
      ...Array.isArray((G = (et = H == null ? void 0 : H.painting) == null ? void 0 : et.mask) == null ? void 0 : G.strokes) ? H.painting.mask.strokes : []
    ];
    for (const ot of Y) {
      if (((it = ot == null ? void 0 : ot.targetSpace) == null ? void 0 : it.kind) !== "ERP_GLOBAL") continue;
      const ut = String((ot == null ? void 0 : ot.layerKind) || "paint"), Et = String((ot == null ? void 0 : ot.toolKind) || "pen") === "eraser";
      if (ut === "mask") {
        const X = u.descriptor;
        Et ? (oe = zn(oe, X.width, X.height), ye(oe), ga(oe.ctx, ot, X), wr(u.committedMask.ctx, oe.canvas)) : ga(u.committedMask.ctx, ot, X);
        continue;
      }
      if (Et) {
        oe = zn(oe, r.width, r.height), ye(oe), ga(oe.ctx, ot, r);
        for (const X of o.values())
          wr(X.committedPaint.ctx, oe.canvas), X.displayDirty = !0;
      } else {
        const X = String((ot == null ? void 0 : ot.actionGroupId) || "__default__"), Nt = k(X), Bt = Nt.descriptor;
        ga(Nt.committedPaint.ctx, ot, Bt), Nt.displayDirty = !0;
      }
    }
    C([...o.keys()]);
  }
  function $(H, Y) {
    p = String((H == null ? void 0 : H.layerKind) || "");
    const lt = String((H == null ? void 0 : H.toolKind) || "") === "eraser";
    if (p === "mask")
      y = null, ye(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const ft = lt ? f : k(String((H == null ? void 0 : H.actionGroupId) || "__default__"));
      y = lt ? "" : String((H == null ? void 0 : H.actionGroupId) || "__default__"), ye(ft.currentStroke), ft.activeStroke = null, ft.displayDirty = !0;
    }
  }
  function L(H, Y) {
    const lt = String((H == null ? void 0 : H.layerKind) || "paint"), ft = String((H == null ? void 0 : H.toolKind) || "") === "eraser", et = lt === "mask" ? u : ft ? f : k(String((H == null ? void 0 : H.actionGroupId) || y || "__default__")), G = et.activeStroke, it = et.descriptor;
    if (G && G.pointCount > 1) {
      const ut = et.currentStroke.ctx;
      ut.globalCompositeOperation = "source-over";
      const kt = {
        ctx: ut,
        stampTex: G.stampTex,
        radiusPx: G.radiusPx,
        spacingPx: G.spacingPx,
        desc: it,
        aspect: G.aspect,
        angle: G.angle,
        stampKind: G.stampKind,
        scatter: G.scatter
      };
      G.pointCount === 2 ? Oo(kt, G.lastMidX, G.lastMidY, G.prev.x, G.prev.y, G.distSinceStamp) : Za(kt, G.pprev, { x: G.lastMidX, y: G.lastMidY }, G.prev, G.prev, G.distSinceStamp);
    }
    et.lassoPreviewActive && (ye(et.currentStroke), Ha(et.currentStroke.ctx, H, it), et.lassoPreviewActive = !1);
    const ot = lt === "mask" ? u.committedMask : et.committedPaint;
    if (ft && lt === "paint")
      for (const ut of o.values())
        wr(ut.committedPaint.ctx, et.currentStroke.canvas), ut.displayDirty = !0;
    else if (ft)
      wr(ot.ctx, et.currentStroke.canvas);
    else {
      const ut = Math.max(0, Math.min(1, (G == null ? void 0 : G.strokeOpacity) ?? 1));
      ot.ctx.save(), ot.ctx.globalAlpha = ut, ot.ctx.drawImage(et.currentStroke.canvas, 0, 0), ot.ctx.restore();
    }
    ye(et.currentStroke), et.activeStroke = null, et.displayDirty = !0, y = null, p = "", C([...o.keys()]);
  }
  function V(H) {
    if (p === "mask")
      ye(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (p === "paint" && !y)
      ye(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (y) {
      const Y = o.get(y);
      Y && (ye(Y.currentStroke), Y.activeStroke = null, Y.lassoPreviewActive = !1, Y.displayDirty = !0);
    }
    y = null, p = "", C([...o.keys()]);
  }
  function R(H, Y) {
    var ft;
    if (p = String((H == null ? void 0 : H.layerKind) || ""), String(((ft = H == null ? void 0 : H.geometry) == null ? void 0 : ft.geometryKind) || "") === "lasso_fill") {
      if (p === "mask")
        ye(u.currentStroke), Ha(u.currentStroke.ctx, H, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const et = String((H == null ? void 0 : H.toolKind) || "") === "eraser", G = et ? f : k(String((H == null ? void 0 : H.actionGroupId) || y || "__default__"));
        y = et ? "" : String((H == null ? void 0 : H.actionGroupId) || y || "__default__"), ye(G.currentStroke), Ha(G.currentStroke.ctx, H, G.descriptor), G.lassoPreviewActive = !0, G.displayDirty = !0;
      }
      C([...o.keys()]);
    }
  }
  function P(H) {
    return C(H ?? [...o.keys()]), {
      displayPaint: m,
      committedMask: u.committedMask,
      descriptor: r
    };
  }
  function J(H) {
    return o.get(String(H)) ?? null;
  }
  function tt() {
    return [...o.keys()];
  }
  function rt(H) {
    var it;
    const Y = o.get(String(H));
    if (!Y) return null;
    const lt = p === "paint" && y === Y.actionGroupId, ft = p === "paint" && ((it = y ? o.get(y) : f) == null ? void 0 : it.activeStroke) || null;
    if (ft != null && ft.isEraser)
      return Xe = zn(Xe, e, n), ye(Xe), Xe.ctx.drawImage(Y.committedPaint.canvas, 0, 0), wr(Xe.ctx, c.canvas), Xe.canvas;
    const et = lt ? Y.activeStroke : null;
    if (!et) return Y.committedPaint.canvas;
    Xe = zn(Xe, e, n), ye(Xe), Xe.ctx.drawImage(Y.committedPaint.canvas, 0, 0);
    const G = Y.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, et.strokeOpacity ?? 1));
    return Xe.ctx.save(), Xe.ctx.globalAlpha = G, Xe.ctx.drawImage(c.canvas, 0, 0), Xe.ctx.restore(), Xe.canvas;
  }
  function bt() {
    return _r = zn(_r, e, n), ye(_r), pi(_r.ctx, u.committedMask.canvas), p === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (oe = zn(oe, e, n), ye(oe), oe.ctx.drawImage(u.committedMask.canvas, 0, 0), wr(oe.ctx, c.canvas), ye(_r), pi(_r.ctx, oe.canvas)) : pi(_r.ctx, c.canvas)), _r.canvas;
  }
  return {
    rebuildCommitted: F,
    beginStroke: $,
    appendStrokePoint: ny,
    updateActiveStroke: R,
    commitActiveStroke: L,
    cancelActiveStroke: V,
    getErpTarget: P,
    ensureTarget: I,
    getGroupTarget: J,
    getGroupDisplayCanvas: rt,
    getMaskDisplayCanvas: bt,
    getAllGroupIds: tt
  };
}
function j(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Va(t, e, n) {
  const r = Number(t);
  return Number.isFinite(r) ? Math.max(Number(e), Math.min(Number(n), r)) : Number(e);
}
function $e(t) {
  return ((t + 180) % 360 + 360) % 360 - 180;
}
function ry(t, e) {
  let n = $e(e) - $e(t);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const xf = 0.12, iy = 3, oy = 35, ay = 140, vc = 100, sy = 20, Sf = 0.8;
function cy(t) {
  return Number.isFinite(Number(t == null ? void 0 : t.deltaY)) ? Number(t.deltaY) : Number.isFinite(Number(t == null ? void 0 : t.wheelDelta)) ? -Number(t.wheelDelta) : Number.isFinite(Number(t == null ? void 0 : t.detail)) ? Number(t.detail) * 40 : 0;
}
function Ss(t = {}) {
  const e = typeof t.getView == "function" ? t.getView : (() => ({ yaw: 0, pitch: 0, fov: vc })), n = typeof t.setView == "function" ? t.setView : (() => {
  }), r = typeof t.getInvert == "function" ? t.getInvert : (() => ({ x: 1, y: 1 })), o = typeof t.getUnwrapRect == "function" ? t.getUnwrapRect : (() => ({ w: 1, h: 1 })), c = typeof t.onInteraction == "function" ? t.onInteraction : (() => {
  }), u = typeof t.onDebug == "function" ? t.onDebug : null, f = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function m(F, $ = null) {
    u && u(F, $);
  }
  function y(F, $, L = null, V = performance.now()) {
    return f.drag.active = !0, f.drag.lastX = Number(F || 0), f.drag.lastY = Number($ || 0), f.drag.lastTs = Number(V || performance.now()), f.drag.pointerId = L, f.inertia.active = !1, f.inertia.vx = 0, f.inertia.vy = 0, f.inertia.lastTs = f.drag.lastTs, f.velHistory = [], m("drag", { phase: "start", x: f.drag.lastX, y: f.drag.lastY, pointerId: L }), !0;
  }
  function p(F, $, L = "pano", V = performance.now()) {
    if (!f.drag.active) return !1;
    const R = Number(V || performance.now()), P = Number(F), J = Number($), tt = P - f.drag.lastX, rt = J - f.drag.lastY;
    f.drag.lastX = P, f.drag.lastY = J, f.drag.lastTs = R;
    const bt = r() || { x: 1, y: 1 }, H = Number(bt.x || 1), Y = Number(bt.y || 1), lt = { ...e() };
    let ft = 0, et = 0;
    if (L === "unwrap") {
      const it = o() || { w: 1, h: 1 }, ot = Math.max(1, Number(it.w || 1)), ut = Math.max(1, Number(it.h || 1)), kt = tt / ot, Et = rt / ut;
      ft = -kt * 360 * H, et = Et * 180 * Y;
    } else
      ft = -tt * xf * H, et = rt * xf * Y;
    lt.yaw = $e(Number(lt.yaw || 0) + ft), lt.pitch = j(Number(lt.pitch || 0) + et, -89.9, 89.9), n(lt), f.velHistory.push({ ts: R, yaw: lt.yaw, pitch: lt.pitch });
    let G = 0;
    for (; G < f.velHistory.length - 1 && f.velHistory[G].ts < R - 100; ) G++;
    return G > 0 && f.velHistory.splice(0, G), f.inertia.active = !1, f.inertia.lastTs = R, c(), m("drag", { phase: "move", dx: tt, dy: rt, dYaw: ft, dPitch: et }), !0;
  }
  function x(F = performance.now()) {
    if (!f.drag.active) return !1;
    f.drag.active = !1;
    const $ = Number(F || performance.now());
    f.drag.lastTs = $;
    const L = f.velHistory.filter((R) => $ - R.ts <= 80);
    if (L.length >= 2) {
      const R = L[0], P = L.at(-1), J = Math.max(1e-3, (P.ts - R.ts) / 1e3);
      let tt = P.yaw - R.yaw;
      tt > 180 && (tt -= 360), tt < -180 && (tt += 360), f.inertia.vx = tt / J, f.inertia.vy = (P.pitch - R.pitch) / J;
    } else
      f.inertia.vx = 0, f.inertia.vy = 0;
    f.velHistory = [];
    const V = Math.hypot(f.inertia.vx, f.inertia.vy);
    return f.inertia.active = V > sy, f.inertia.lastTs = $, m("drag", { phase: "end", speed: V, inertiaActive: f.inertia.active }), !0;
  }
  function N(F = performance.now()) {
    if (!f.inertia.active) return !1;
    const $ = Number(F || performance.now()), L = Math.max(1e-3, ($ - (f.inertia.lastTs || $)) / 1e3);
    f.inertia.lastTs = $;
    const V = { ...e() };
    V.yaw = $e(Number(V.yaw || 0) + f.inertia.vx * L), V.pitch = j(Number(V.pitch || 0) + f.inertia.vy * L, -89.9, 89.9);
    const R = Math.exp(-5.5 * L);
    return f.inertia.vx *= R, f.inertia.vy *= R, Math.abs(f.inertia.vx) < Sf && Math.abs(f.inertia.vy) < Sf && (f.inertia.vx = 0, f.inertia.vy = 0, f.inertia.active = !1), n(V), c(), f.inertia.active;
  }
  function k(F) {
    const $ = Math.sign(Number(F || 0));
    if (!$) return !1;
    const L = { ...e() }, V = Number(L.fov || vc);
    return L.fov = j(V + $ * iy, oy, ay), n(L), c(), m("wheel", { deltaSign: $, fovBefore: V, fovAfter: L.fov }), !0;
  }
  function I(F) {
    return k(Math.sign(cy(F)));
  }
  function C() {
    n({ yaw: 0, pitch: 0, fov: vc }), f.inertia.active = !1, f.inertia.vx = 0, f.inertia.vy = 0, c();
  }
  return {
    state: f,
    startDrag: y,
    moveDrag: p,
    endDrag: x,
    stepInertia: N,
    applyWheel: k,
    applyWheelEvent: I,
    resetView: C
  };
}
function zc(t) {
  const e = String(t || "").trim();
  return e ? e === "PanoramaPreview" || e === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(e) : !1;
}
const Kr = Math.PI / 180;
function Mn(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) ? n : Number(e);
}
function Wr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Ja(t, e) {
  return Wr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Ni(t, e) {
  return Wr(t.x * e, t.y * e, t.z * e);
}
function mo(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Wr(t.x / e, t.y / e, t.z / e);
}
function ly(t, e) {
  const n = Number(t || 0) * Kr, r = Number(e || 0) * Kr, o = Math.cos(r);
  return Wr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Nf(t, e) {
  return Wr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function uy(t, e, n = 0) {
  const r = ly(t, e), o = Wr(0, 1, 0);
  let c = Nf(o, r);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Wr(1, 0, 0)), c = mo(c);
  let u = mo(Nf(r, c));
  const f = Number(n || 0) * Kr, m = Math.cos(f), y = Math.sin(f), p = Ja(Ni(c, m), Ni(u, y)), x = Ja(Ni(c, -y), Ni(u, m));
  return { fwd: r, right: mo(p), up: mo(x) };
}
function fy(t, e, n, r = 0.45) {
  const o = (t.x + e.x + n.x) / 3, c = (t.y + e.y + n.y) / 3, u = (f) => {
    const m = f.x - o, y = f.y - c, p = Math.hypot(m, y) || 1;
    return { x: f.x + m / p * r, y: f.y + y / p * r };
  };
  return [u(t), u(e), u(n)];
}
function Mf(t, e, n, r, o, c, u, f) {
  const m = n.x * (r.y - o.y) + r.x * (o.y - n.y) + o.x * (n.y - r.y);
  if (Math.abs(m) < 1e-6) return !1;
  const [y, p, x] = fy(c, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(p.x, p.y), t.lineTo(x.x, x.y), t.closePath(), t.clip();
  const N = (c.x * (r.y - o.y) + u.x * (o.y - n.y) + f.x * (n.y - r.y)) / m, k = (c.x * (o.x - r.x) + u.x * (n.x - o.x) + f.x * (r.x - n.x)) / m, I = (c.x * (r.x * o.y - o.x * r.y) + u.x * (o.x * n.y - n.x * o.y) + f.x * (n.x * r.y - r.x * n.y)) / m, C = (c.y * (r.y - o.y) + u.y * (o.y - n.y) + f.y * (n.y - r.y)) / m, F = (c.y * (o.x - r.x) + u.y * (n.x - o.x) + f.y * (r.x - n.x)) / m, $ = (c.y * (r.x * o.y - o.x * r.y) + u.y * (o.x * n.y - n.x * o.y) + f.y * (n.x * r.y - r.x * n.y)) / m;
  return t.transform(N, C, k, F, I, $), t.drawImage(e, 0, 0), t.restore(), !0;
}
function dy(t, e) {
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
function ph(t) {
  const e = t || {}, n = Mn(e.yaw_deg, 0), r = Mn(e.pitch_deg, 0), o = Mn(e.roll_deg ?? e.rot_deg, 0), c = Va(Mn(e.hFOV_deg, 90), 1, 179), u = Va(Mn(e.vFOV_deg, 60), 1, 179), f = Math.tan(c * Kr * 0.5) / Math.max(1e-6, Math.tan(u * Kr * 0.5)), m = Va(f, 0.1, 10);
  return {
    yaw: n,
    pitch: r,
    roll: o,
    hfov: c,
    vfov: u,
    aspect: m
  };
}
function hy(t, e, n, r, o, c = "balanced") {
  const u = (bt = {}) => {
    e.__panoCutoutProjectionStats = {
      drawnTriCount: 0,
      Nu: 0,
      Nv: 0,
      rectW: Mn(r == null ? void 0 : r.w, 0),
      rectH: Mn(r == null ? void 0 : r.h, 0),
      imageW: Mn((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width), 0),
      imageH: Mn((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height), 0),
      ...bt
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
  const x = dy(e, n) || n, { yaw: N, pitch: k, roll: I, hfov: C, vfov: F } = ph(o), $ = uy(N, k, I), L = Math.tan(C * Kr * 0.5), V = Math.tan(F * Kr * 0.5), R = c === "high" ? 20 : c === "draft" ? 10 : 14, P = c === "high" ? 14 : c === "draft" ? 7 : 10;
  let J = 0;
  const tt = Array.from({ length: P + 1 }, () => Array(R + 1).fill(null)), rt = Array.from({ length: P + 1 }, () => Array(R + 1).fill(null));
  for (let bt = 0; bt <= P; bt += 1)
    for (let H = 0; H <= R; H += 1) {
      const Y = H / R, lt = bt / P, ft = (Y * 2 - 1) * L, et = (1 - lt * 2) * V, G = mo(Ja(Ja($.fwd, Ni($.right, ft)), Ni($.up, et))), it = Math.atan2(G.x, G.z), ot = Math.asin(Va(G.y, -1, 1));
      let ut = (it / (2 * Math.PI) + 0.5) * y;
      for (; ut < 0; ) ut += y;
      for (; ut >= y; ) ut -= y;
      const kt = (0.5 - ot / Math.PI) * p;
      tt[bt][H] = { x: r.x + Y * r.w, y: r.y + lt * r.h }, rt[bt][H] = { x: ut, y: kt };
    }
  for (let bt = 0; bt < P; bt += 1)
    for (let H = 0; H < R; H += 1) {
      const Y = tt[bt][H], lt = tt[bt][H + 1], ft = tt[bt + 1][H], et = tt[bt + 1][H + 1], G = { ...rt[bt][H] }, it = { ...rt[bt][H + 1] }, ot = { ...rt[bt + 1][H] }, ut = { ...rt[bt + 1][H + 1] }, kt = Math.min(G.x, it.x, ot.x, ut.x);
      Math.max(G.x, it.x, ot.x, ut.x) - kt > y * 0.5 && [G, it, ot, ut].forEach((X) => {
        X.x < y * 0.5 && (X.x += y);
      }), Mf(t, x, G, it, ut, Y, lt, et) && (J += 1), Mf(t, x, G, ut, ot, Y, et, ft) && (J += 1);
    }
  return u({
    drawnTriCount: J,
    Nu: R,
    Nv: P,
    rectW: f,
    rectH: m,
    imageW: y,
    imageH: p,
    reason: "ok"
  }), J > 0;
}
const gh = 0.28;
function py(t) {
  const e = t && typeof t == "object" ? t : {}, n = j(Number(e.x0 ?? 0), 0, 1), r = j(Number(e.y0 ?? 0), 0, 1), o = j(Number(e.x1 ?? 1), 0, 1), c = j(Number(e.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, o),
    y0: Math.min(r, c),
    x1: Math.max(n, o),
    y1: Math.max(r, c)
  };
}
function gy(t, e = {}) {
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
    crop: py(t.crop),
    opacity: f ? gh : j(Number(t.opacity ?? 1), 0, 1),
    visible: f ? !0 : t.visible !== !1,
    external: r
  };
}
function Ns(t, e = {}) {
  var c;
  const n = Array.isArray(e.stickers) ? e.stickers : Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], r = e.includeHidden === !0;
  return {
    stickers: n.map((u) => gy(u, { includeHidden: r })).filter((u) => u && (r || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: e.selectedId ?? ((c = t == null ? void 0 : t.active) == null ? void 0 : c.selected_sticker_id) ?? null,
    hoveredId: e.hoveredId ?? null
  };
}
function mh(t, e, n = {}) {
  if (typeof e != "function") return [];
  const r = n.scene || Ns(t, n), o = t && typeof t == "object" && t.assets && typeof t.assets == "object" ? t.assets : {}, c = [], u = /* @__PURE__ */ new Set();
  return r.stickers.forEach((f) => {
    var I;
    const m = String((f == null ? void 0 : f.assetId) || "").trim(), y = m || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const p = m ? o[m] : null, x = e(y, p, f), N = Number((x == null ? void 0 : x.naturalWidth) || (x == null ? void 0 : x.videoWidth) || (x == null ? void 0 : x.width) || 0), k = Number((x == null ? void 0 : x.naturalHeight) || (x == null ? void 0 : x.videoHeight) || (x == null ? void 0 : x.height) || 0);
    !x || N <= 0 || k <= 0 || (u.add(y), c.push({
      assetId: y,
      source: x,
      revision: String(((I = n.revisionFor) == null ? void 0 : I.call(n, y, p, x)) ?? [
        y,
        Number(x.naturalWidth || x.videoWidth || x.width || 0),
        Number(x.naturalHeight || x.videoHeight || x.height || 0),
        String(x.currentSrc || x.src || "")
      ].join("|"))
    }));
  }), c;
}
function wl(t) {
  return {
    mode: "panorama",
    yawDeg: Number((t == null ? void 0 : t.yaw) || 0),
    pitchDeg: Number((t == null ? void 0 : t.pitch) || 0),
    fovDeg: j(Number((t == null ? void 0 : t.fov) || 100), 1, 179)
  };
}
function my(t) {
  return wl(t);
}
function Mi(t) {
  const e = ph(t || {});
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
const { app: _e } = Ia;
function Uc() {
  var t, e;
  return String(
    ((e = (t = window == null ? void 0 : window.comfyAPI) == null ? void 0 : t.app) == null ? void 0 : e.ANIM_PREVIEW_WIDGET) || (Ia == null ? void 0 : Ia.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const qr = Math.PI / 180, Fi = { Nu: 14, Nv: 9 }, _c = { Nu: 24, Nv: 14 }, Pf = { Nu: 32, Nv: 20 }, yy = 10, by = 120;
function yh() {
  var t;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Jt(t, e, n = null) {
  if (!yh()) return;
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
function vy() {
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
function _y(t) {
  const e = kr(t);
  return !e || e[0] < 10 || e[1] < 10;
}
function bh(t, e, n) {
  _y(t) && (t.size = [Math.max(1, Number(e || 1)), Math.max(1, Number(n || 1))]);
}
function jc(t) {
  var e;
  return t != null && t.__panoLegacyPreviewHooked ? "legacy_draw" : (e = t == null ? void 0 : t.__panoDomPreview) != null && e.widget ? "dom" : "none";
}
function vh(t) {
  return String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
}
function wy(t) {
  return zc(vh(t));
}
function Gr(t = null) {
  var c, u;
  const e = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (t == null ? void 0 : t.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((u = (c = _e == null ? void 0 : _e.canvas) == null ? void 0 : c.constructor) == null ? void 0 : u.name) || "");
  return [e, r, n, o].join("|");
}
function _h(t, e = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Gr(e)
  } : String(t) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Gr(e)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Gr(e)
  };
}
const Mo = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(t) {
    !t || String(t.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(t), this.lastSignature || (this.lastSignature = Gr(t)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(t) {
    t && this.nodes.delete(t), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const t = this.nodes.values().next().value || null, e = Gr(t);
    e !== this.lastSignature && (this.lastSignature = e, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((r) => {
        if (!(!r || String(r.__panoPreviewMode || "") !== "stickers"))
          try {
            r.__panoRebindGeneration = this.generation, Jt(r, "path.switch", {
              from: String(r.__panoStickersPath || "unknown"),
              to: "rebind",
              reason: "frontend_signature_changed",
              signature: e,
              generation: this.generation
            }), wh(r).rebind(r.__panoAttachOptions || { mode: "stickers" });
          } catch (o) {
            Jt(r, "path.switch.error", { message: String((o == null ? void 0 : o.message) || o || "unknown") });
          }
      });
    }, 300));
  }
};
function wh(t) {
  if (t != null && t.__panoPreviewController) return t.__panoPreviewController;
  const e = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = r === "cutout" ? "dom" : _h(r, t).chosenPath, c = jc(t);
      this.activeBackend = c;
      const u = String(t.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = t.__panoPreviewNoPreview === !0, m = n.noPreview === !0;
      if (c === o && c !== "none" && u === r && f === m) {
        t.__panoAttachOptions = { ...n, mode: r }, t.__panoPreviewMode = r, t.__panoPreviewNoPreview = m, t.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : t.__panoOpenEditor;
        return;
      }
      c !== "none" && Di(t, { keepMonitor: r === "stickers" }), cb(t, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = jc(t);
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
function xy(t) {
  if (!(t != null && t.__panoDomMountProbe)) return;
  const e = t.__panoDomMountProbe;
  e.cancelled = !0, e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = 0), t.__panoDomMountProbe = null;
}
function Di(t, e = {}) {
  var f, m, y, p, x;
  if (!t) return;
  es.unregister(t), xy(t);
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
      (x = (p = u.root) == null ? void 0 : p.remove) == null || x.call(p);
    } catch {
    }
  }
  try {
    Array.isArray(t.widgets) && (t.widgets = t.widgets.filter((N) => {
      if (N === (u == null ? void 0 : u.widget)) return !1;
      const k = String((N == null ? void 0 : N.name) || ""), I = String((N == null ? void 0 : N.type) || ""), C = Uc();
      return !(k === C || I === C || k === "pano_preview" || I === "pano_preview" || k === "preview" && I === "pano_preview");
    }));
  } catch {
  }
  t.__panoDomPreview = null, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoPreviewInertia = null, t.__panoDomHealth = null, t.__panoDomProbePending = !1, t.__panoDomMountProbe = null, t.__panoPreviewNoPreview = !1, t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = !1, t.__panoActiveBackend = "none", Jt(t, "teardown.done", {
    reason: String(e.reason || ""),
    removedDom: n || o,
    removedLegacy: r || c,
    keepMonitor: !!e.keepMonitor
  }), e.keepMonitor || Mo.unregister(t);
}
function Yr(t, e, n) {
  return { x: t, y: e, z: n };
}
function kf(t, e) {
  return Yr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function ma(t, e) {
  return Yr(t.x * e, t.y * e, t.z * e);
}
function wc(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Cf(t, e) {
  return Yr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function ya(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Yr(t.x / e, t.y / e, t.z / e);
}
function $r(t, e) {
  const n = t * qr, r = e * qr, o = Math.cos(r);
  return Yr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function xl(t, e, n = 0) {
  const r = $r(t, e), o = Yr(0, 1, 0);
  let c = Cf(o, r);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Yr(1, 0, 0)), c = ya(c);
  let u = ya(Cf(r, c));
  const f = n * qr, m = Math.cos(f), y = Math.sin(f), p = kf(ma(c, m), ma(u, y)), x = kf(ma(c, -y), ma(u, m));
  return { fwd: r, right: ya(p), up: ya(x) };
}
function Sy(t, e = "#00ff00") {
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
function Ny(t) {
  var n;
  const e = t == null ? void 0 : t.__panoLiveStateOverride;
  return e && typeof e == "object" || typeof e == "string" && e.trim() ? e : String(((n = Qa(t, "state_json")) == null ? void 0 : n.value) || "");
}
function xh(t) {
  var c;
  const e = Ny(t), n = String(((c = Qa(t, "bg_color")) == null ? void 0 : c.value) || "#1a1a1e"), r = t.__panoStateCache;
  if (r && r.source === e && r.bg === n)
    return r.parsed;
  const o = Sy(e, n);
  return t.__panoStateCache = { source: e, bg: n, parsed: o }, o;
}
function Qa(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function Af(t, e, n) {
  return !!n && t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
function Sh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function My(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Nh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Mh(t, e, n = null) {
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
  return !r && n != null && (r = My(t == null ? void 0 : t.graph, n)), r;
}
function Py(t) {
  return (Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Sl(t, e = []) {
  const n = Py(t), r = [];
  return e.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    (o === "erp_image" || o === "bg_erp") && !r.includes(o) && r.push(o);
  }), r.length ? r : e;
}
function If(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: e, tail: n.length ? n[n.length - 1] : e };
}
function ts(t, e) {
  const n = If(t), r = If(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function ky(t, e = ["erp_image", "bg_erp"]) {
  var m;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return [];
  const o = Sl(t, e).map((y) => n.findIndex((p) => String((p == null ? void 0 : p.name) || "") === String(y))).filter((y) => y >= 0), c = n.map((y, p) => ({ input: y, idx: p })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...o, ...c])], f = [];
  for (const y of u) {
    const p = Mh(t, y);
    if ((p == null ? void 0 : p.id) != null) {
      f.push(String(p.id));
      continue;
    }
    const x = (m = n[y]) == null ? void 0 : m.link;
    if (x == null) continue;
    const N = Sh(t == null ? void 0 : t.graph, x), { originId: k } = Nh(N);
    k != null && f.push(String(k));
  }
  return [...new Set(f)];
}
const es = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var t;
    this.bound || !((t = Qe) != null && t.addEventListener) || (this.listener = (e) => {
      const n = (e == null ? void 0 : e.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((c) => {
        var p, x, N, k, I;
        if (!c) return;
        const u = ts(r, c == null ? void 0 : c.id), m = ky(c, ["erp_image", "bg_erp"]).some((C) => ts(r, C)), y = u ? "self" : m ? "upstream" : "global_executed";
        Jt(c, "exec-refresh", { executedId: r, reason: y }), Gc(c), Jt(c, "invalidate", { cachesCleared: !0 }), (x = (p = c.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || x.call(p), (N = c.setDirtyCanvas) == null || N.call(c, !0, !0), (I = (k = c.graph) == null ? void 0 : k.setDirtyCanvas) == null || I.call(k, !0, !0), Jt(c, "draw-request", {
          route: String(c.__panoPreviewMode || ""),
          mode: String(c.__panoPreviewMode || ""),
          reason: y
        });
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
function ns(t) {
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
  return typeof ((c = Qe) == null ? void 0 : c.apiURL) == "function" ? Qe.apiURL(o) : o;
}
function Cy(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function Ay(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), c = r.join("/");
  return { filename: o, subfolder: c };
}
function Iy(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), e.push(o));
  }), e;
}
function Ph(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Cy(e)) return [e];
  const { filename: n, subfolder: r } = Ay(e);
  if (!n) return [e];
  const o = ["temp", "output", "input"].map((c) => ns({
    filename: n,
    subfolder: r,
    type: c
  }));
  return Iy([...o, e]);
}
function Ey(t) {
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
function Bc(t) {
  const e = _e == null ? void 0 : _e.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  const o = n;
  if (e instanceof Map) {
    for (const c of e.keys())
      if (ts(c, o)) return e.get(c);
  } else {
    const c = Object.keys(e);
    for (const u of c)
      if (ts(u, o)) return e[u];
  }
  return null;
}
function Gn(t) {
  if (!t) return "";
  if (typeof t == "string")
    return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Gn(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return ns({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = Gn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : ns(t);
}
function kh(t, e) {
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
function Ty(t) {
  const e = [], n = /* @__PURE__ */ new Set(), r = (c) => {
    Array.isArray(c) && c.forEach((u) => e.push(u));
  }, o = (c, u = 0) => {
    !c || u > 3 || n.has(c) || typeof c == "object" && (n.add(c), r(c.images), o(c.output, u + 1), o(c.ui, u + 1), o(c.data, u + 1), o(c.result, u + 1));
  };
  return o(t, 0), e;
}
function Ly(t, e) {
  try {
    const n = Ty(e);
    let r = "";
    for (const o of n)
      if (r = Gn(o), r) break;
    r ? (t.__panoOwnOutputRev = Number(t.__panoOwnOutputRev || 0) + 1, t.__panoOwnOutputSrc = String(r || ""), Jt(t, "cutout.output-sync", {
      hasOutputImage: !0,
      src: kh(t.__panoOwnOutputSrc, t.__panoOwnOutputRev),
      rev: t.__panoOwnOutputRev
    })) : Jt(t, "cutout.output-sync", { hasOutputImage: !1, keys: Object.keys(e || {}) });
  } catch {
    Jt(t, "cutout.output-sync", { hasOutputImage: !1 });
  }
}
function Dy(t, e = null) {
  const n = t == null ? void 0 : t.id;
  if (n == null) return null;
  const r = String((t == null ? void 0 : t.__panoOwnOutputSrc) || "").trim(), o = Bc(n), c = Array.isArray(o == null ? void 0 : o.images) ? o.images : [], u = Array.isArray(t == null ? void 0 : t.imgs) ? t.imgs : [], f = r ? [r, ...c, ...u] : [...c, ...u];
  let m = "";
  for (const $ of f)
    if (m = Gn($), m) break;
  if (!m) return null;
  const y = Number((t == null ? void 0 : t.__panoOwnOutputRev) || 0), x = Ph(m).map(($) => kh($, y));
  if (!x.length) return null;
  const N = `${m}|rev:${y}`;
  t.__panoOwnOutputImageCache || (t.__panoOwnOutputImageCache = {
    src: "",
    img: null,
    pendingSrc: "",
    pendingImg: null
  });
  const k = t.__panoOwnOutputImageCache;
  if (k.img && k.src === N) return k.img;
  if (k.pendingImg && k.pendingSrc === N)
    return k.img && (k.img.complete || k.img.naturalWidth || k.img.width) ? k.img : k.pendingImg;
  const I = new Image();
  let C = -1;
  const F = () => {
    if (C += 1, C >= x.length) {
      t.__panoOwnOutputImageCache === k && (k.pendingSrc = "", k.pendingImg = null);
      return;
    }
    I.src = x[C];
  };
  return I.onload = () => {
    var $;
    t.__panoOwnOutputImageCache === k && k.pendingImg === I && k.pendingSrc === N && (k.src = N, k.img = I, k.pendingSrc = "", k.pendingImg = null), e == null || e(), ($ = t.setDirtyCanvas) == null || $.call(t, !0, !0);
  }, I.onerror = () => {
    if (C + 1 >= x.length) {
      t.__panoOwnOutputImageCache === k && k.pendingImg === I && (k.pendingSrc = "", k.pendingImg = null);
      return;
    }
    F();
  }, k.pendingSrc = N, k.pendingImg = I, F(), k.img && (k.img.complete || k.img.naturalWidth || k.img.width) ? k.img : I;
}
function Ry(t, e = []) {
  var y, p;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const r = Sl(t, e), o = r.map((x) => n.findIndex((N) => String((N == null ? void 0 : N.name) || "") === String(x))).filter((x) => x >= 0), c = n.map((x, N) => ({ input: x, idx: N })).filter(({ input: x }) => String((x == null ? void 0 : x.type) || "").toUpperCase() === "IMAGE").map(({ idx: x }) => x), u = [.../* @__PURE__ */ new Set([...o, ...c])];
  Jt(t, "image-resolve", {
    inputCandidates: r,
    resolvedIndices: u,
    stage: "start"
  });
  for (const x of u) {
    const N = n[x], k = N == null ? void 0 : N.link;
    if (k == null) continue;
    const I = Sh(t.graph, k), { originId: C, originSlot: F } = Nh(I);
    if (C == null) continue;
    const $ = Mh(t, x, C);
    if (!$) continue;
    const L = Number(F || 0), V = Bc(($ == null ? void 0 : $.id) ?? C), R = Array.isArray(V == null ? void 0 : V.images) ? V.images : [];
    if (R.length) {
      const rt = [];
      L >= 0 && L < R.length && rt.push(R[L]), rt.push(...R);
      for (const bt of rt) {
        const H = Gn(bt);
        if (H)
          return Jt(t, "image-resolve", {
            inputName: String((N == null ? void 0 : N.name) || ""),
            sourceType: "nodeOutputs",
            stage: "hit"
          }), { src: H, sourceType: "nodeOutputs", inputName: String((N == null ? void 0 : N.name) || "") };
      }
    }
    let P = [];
    try {
      P = typeof (_e == null ? void 0 : _e.getNodeImageUrls) == "function" ? _e.getNodeImageUrls($) || [] : [];
    } catch {
      P = [];
    }
    if (Array.isArray(P) && P.length) {
      const rt = [];
      L >= 0 && L < P.length && rt.push(P[L]), rt.push(...P);
      for (const bt of rt) {
        const H = Gn(bt);
        if (H)
          return Jt(t, "image-resolve", {
            inputName: String((N == null ? void 0 : N.name) || ""),
            sourceType: "appNodeImageUrls",
            stage: "hit"
          }), { src: H, sourceType: "appNodeImageUrls", inputName: String((N == null ? void 0 : N.name) || "") };
      }
    }
    const J = Array.isArray($ == null ? void 0 : $.imgs) ? $.imgs : [];
    if (J.length) {
      const rt = [];
      L >= 0 && L < J.length && rt.push(J[L]), rt.push(...J);
      for (const bt of rt) {
        const H = Gn(bt);
        if (H)
          return Jt(t, "image-resolve", {
            inputName: String((N == null ? void 0 : N.name) || ""),
            sourceType: "nodeImgs",
            stage: "hit"
          }), { src: H, sourceType: "nodeImgs", inputName: String((N == null ? void 0 : N.name) || "") };
      }
    }
    const tt = (y = $ == null ? void 0 : $.widgets) == null ? void 0 : y.find((rt) => String((rt == null ? void 0 : rt.name) || "").toLowerCase() === "image");
    if (tt) {
      let rt = Gn(tt.value);
      if (rt && !rt.includes("/") && !rt.includes(":") && ($.comfyClass === "LoadImage" || $.type === "LoadImage") && (rt = Qe.apiURL(`/view?filename=${encodeURIComponent(rt)}&type=input&subfolder=`)), rt)
        return Jt(t, "image-resolve", {
          inputName: String((N == null ? void 0 : N.name) || ""),
          sourceType: "widget",
          stage: "hit"
        }), { src: rt, sourceType: "widget", inputName: String((N == null ? void 0 : N.name) || "") };
    }
  }
  const f = Bc(t == null ? void 0 : t.id), m = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && m.push(...f.pano_input_images), Array.isArray((p = f == null ? void 0 : f.ui) == null ? void 0 : p.pano_input_images) && m.push(...f.ui.pano_input_images), m.length > 0)
    for (const x of m) {
      const N = Gn(x);
      if (N)
        return Jt(t, "image-resolve", { sourceType: "selfOutput", src: N, stage: "hit" }), { src: N, sourceType: "selfOutput", inputName: "fallback" };
    }
  return Jt(t, "image-resolve", { stage: "miss" }), { src: "", sourceType: "", inputName: "" };
}
function Oy(t, e = []) {
  const n = Ry(t, e), r = String((n == null ? void 0 : n.src) || "").trim();
  if (!r) return null;
  const o = Ph(r);
  if (!o.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = e.join("|") || "image", u = t.__panoLinkedInputImageCache.get(c);
  if (u && u.srcRaw === r && u.img) return u.img;
  const f = new Image(), m = { srcRaw: r, resolvedSrc: "", img: f };
  t.__panoLinkedInputImageCache.set(c, m);
  let y = -1;
  const p = () => {
    var N, k;
    if (y += 1, y >= o.length) {
      try {
        (k = (N = t.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || k.call(N, c);
      } catch {
      }
      Jt(t, "image-load", {
        ok: !1,
        src: r,
        preferredInputNames: e,
        sourceType: String((n == null ? void 0 : n.sourceType) || ""),
        attemptCount: o.length,
        errorType: "all_candidates_failed"
      });
      return;
    }
    const x = o[y];
    m.resolvedSrc = x, f.src = x;
  };
  return f.onload = () => {
    var x;
    Jt(t, "image-load", {
      ok: !0,
      src: r,
      resolvedSrc: String(m.resolvedSrc || f.src || ""),
      preferredInputNames: e,
      sourceType: String((n == null ? void 0 : n.sourceType) || ""),
      attemptCount: y + 1
    }), (x = t.setDirtyCanvas) == null || x.call(t, !0, !0);
  }, f.onerror = (x) => {
    var N, k;
    if (y + 1 < o.length) {
      p();
      return;
    }
    try {
      (k = (N = t.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || k.call(N, c);
    } catch {
    }
    Jt(t, "image-load", {
      ok: !1,
      src: r,
      resolvedSrc: String(m.resolvedSrc || ""),
      preferredInputNames: e,
      sourceType: String((n == null ? void 0 : n.sourceType) || ""),
      attemptCount: y + 1,
      errorType: String((x == null ? void 0 : x.type) || "error")
    });
  }, p(), f;
}
function rs(t, e = [], n = null) {
  const r = Oy(t, e);
  return r ? (typeof n == "function" && (r.complete && (r.naturalWidth || r.width) || r.addEventListener("load", () => n(), { once: !0 })), r) : null;
}
function Gc(t) {
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
  const n = t.__panoRenderCache, r = String(e || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function xr(t, e, n = "") {
  const r = Ch(t, (t == null ? void 0 : t.__panoPreviewMode) || "unknown"), o = performance.now();
  return e ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o, Jt(t, "loading", { phase: "enter", src: String(n || "") })), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < by ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, Jt(t, "loading", { phase: "exit", src: String(n || "") }), !1) : !1;
}
function Kc(t, e) {
  const n = Math.max(1, Number((e == null ? void 0 : e.w) || 1)), r = Math.max(1, Number((e == null ? void 0 : e.h) || 1)), o = Math.max(1, Number((t == null ? void 0 : t.clientWidth) || n)), c = Math.max(1, Number((t == null ? void 0 : t.clientHeight) || r)), u = n / o, f = r / c, m = Math.min(u, f);
  return Number.isFinite(m) && m > 0 ? m : 1;
}
function Ef(t, e, n = 1) {
  const r = Number((e == null ? void 0 : e.x) || 0), o = Number((e == null ? void 0 : e.y) || 0), c = Number((e == null ? void 0 : e.w) || 0), u = Number((e == null ? void 0 : e.h) || 0);
  if (c <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), m = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), c * 0.44)), y = Math.max(Math.round(34 * n), f + Math.round(14 * n)), p = r + (c - m) * 0.5, x = o + (u - y) * 0.5;
  t.save(), t.fillStyle = "rgba(20,20,24,0.72)", t.beginPath(), t.roundRect(p, x, m, y, 8), t.fill(), t.fillStyle = "rgba(161,161,170,0.95)", t.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", t.fillText("Loading...", p + m * 0.5, x + y * 0.5 + 0.5), t.restore();
}
function uo(t, e, n = "Open editor and add frame") {
  var o;
  const r = (o = t == null ? void 0 : t.__panoDomPreview) == null ? void 0 : o.emptyHintEl;
  r && (r.textContent = String(n || "Open editor and add frame"), r.style.display = e ? "flex" : "none");
}
function Fy(t) {
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
function Ah(t, e) {
  const n = Number((t == null ? void 0 : t.x) || 0), r = Number((t == null ? void 0 : t.y) || 0), o = Math.max(1, Number((t == null ? void 0 : t.w) || 0)), c = Math.max(1, Number((t == null ? void 0 : t.h) || 0)), u = Number(e) > 0 ? Number(e) : 1;
  let f = o, m = o / u;
  return m > c && (m = c, f = c * u), {
    x: n + (o - f) * 0.5,
    y: r + (c - m) * 0.5,
    w: f,
    h: m
  };
}
function $y(t, e, n, r = 0) {
  if (!t || !e || !n) return !1;
  const o = Math.max(1, Number(e.naturalWidth || e.width || 0)), c = Math.max(1, Number(e.naturalHeight || e.height || 0));
  if (o <= 1 || c <= 1) return !1;
  const u = Ah(n, o / c);
  t.save(), t.imageSmoothingEnabled = !0, t.imageSmoothingQuality = "low", t.drawImage(e, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(r) || 0));
  return f > 0 && (t.fillStyle = `rgba(0,0,0,${f})`, t.fillRect(u.x, u.y, u.w, u.h)), t.restore(), !0;
}
function Hy(t, e) {
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
function Vy(t, e = null) {
  const r = Array.isArray(t.widgets) ? t.widgets : [];
  let o = 32;
  return r.forEach((c) => {
    var f;
    if (c === e || !c || c.hidden || c.type === "hidden") return;
    let u = 22;
    try {
      const m = typeof c.computeSize == "function" ? c.computeSize(((f = kr(t)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(m) && Number.isFinite(Number(m[1])) && (u = Number(m[1]));
    } catch {
      u = 22;
    }
    o += u;
  }), o;
}
function Wc(t) {
  const n = Vy(t) + 2, r = 8, o = kr(t), c = Math.max(120, Number((o == null ? void 0 : o[0]) || 0) - 16), u = Math.max(84, Number((o == null ? void 0 : o[1]) || 0) - n - 8);
  return u < 40 || c < 80 ? null : { x: r, y: n, w: c, h: u };
}
function Ih(t, e, n) {
  t.__panoPreviewImageCache || (t.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const r = String(e || "");
  if (!r) return null;
  const o = Ey(n);
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
function zy(t, e) {
  const n = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], r = t.__panoStickerSortCache;
  if ((r == null ? void 0 : r.source) === n && Array.isArray(r.sorted)) return r.sorted;
  const o = [...n].sort((c, u) => Number((c == null ? void 0 : c.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return t.__panoStickerSortCache = { source: n, sorted: o }, o;
}
function Eh(t, e) {
  return Ns(e, {
    selectedId: null,
    hoveredId: null
  });
}
function Th(t, e, n) {
  return mh(e, (r, o) => Ih(t, r, o), { scene: n });
}
function Uy(t, e, n, r = 0.45) {
  const o = (t.x + e.x + n.x) / 3, c = (t.y + e.y + n.y) / 3, u = (f) => {
    const m = f.x - o, y = f.y - c, p = Math.hypot(m, y) || 1;
    return { x: f.x + m / p * r, y: f.y + y / p * r };
  };
  return [u(t), u(e), u(n)];
}
function is(t, e, n, r, o, c, u, f) {
  const m = n.x * (r.y - o.y) + r.x * (o.y - n.y) + o.x * (n.y - r.y);
  if (Math.abs(m) < 1e-6) return;
  const [y, p, x] = Uy(c, u, f, Number(t.__panoTriExpandPx || 0.45));
  t.save(), t.beginPath(), t.moveTo(y.x, y.y), t.lineTo(p.x, p.y), t.lineTo(x.x, x.y), t.closePath(), t.clip();
  const N = (c.x * (r.y - o.y) + u.x * (o.y - n.y) + f.x * (n.y - r.y)) / m, k = (c.x * (o.x - r.x) + u.x * (n.x - o.x) + f.x * (r.x - n.x)) / m, I = (c.x * (r.x * o.y - o.x * r.y) + u.x * (o.x * n.y - n.x * o.y) + f.x * (n.x * r.y - r.x * n.y)) / m, C = (c.y * (r.y - o.y) + u.y * (o.y - n.y) + f.y * (n.y - r.y)) / m, F = (c.y * (o.x - r.x) + u.y * (n.x - o.x) + f.y * (r.x - n.x)) / m, $ = (c.y * (r.x * o.y - o.x * r.y) + u.y * (o.x * n.y - n.x * o.y) + f.y * (n.x * r.y - r.x * n.y)) / m;
  t.transform(N, C, k, F, I, $), t.drawImage(e, 0, 0), t.restore();
}
function Lh(t, e, n, r) {
  const o = wc(t, e.right), c = wc(t, e.up), u = wc(t, e.fwd);
  if (u <= 1e-4) return null;
  const f = c / u / r, m = o / u / r;
  return { x: n.x + n.w * 0.5 + m * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function Dh(t, e, n, r, o, c, u, f = 12, m = 9) {
  var et;
  const y = j(Number(u.hFOV_deg || 30), 1, 179) * qr, p = j(Number(u.vFOV_deg || 30), 1, 179) * qr, x = Math.tan(y * 0.5), N = Math.tan(p * 0.5), k = u.crop || {}, I = j(Number(k.x0 ?? 0), 0, 1), C = j(Number(k.y0 ?? 0), 0, 1), F = j(Number(k.x1 ?? 1), 0, 1), $ = j(Number(k.y1 ?? 1), 0, 1), L = Math.max(1e-4, F - I), V = Math.max(1e-4, $ - C), R = xl(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), P = [], J = [], tt = [], rt = [];
  for (let G = 0; G <= m; G++) {
    const it = G / m, ut = (1 - (C + it * V) * 2) * N;
    for (let kt = 0; kt <= f; kt++) {
      const Et = kt / f, Nt = ((I + Et * L) * 2 - 1) * x, Bt = R.fwd.x + R.right.x * Nt + R.up.x * ut, pe = R.fwd.y + R.right.y * Nt + R.up.y * ut, ge = R.fwd.z + R.right.z * Nt + R.up.z * ut, B = Math.hypot(Bt, pe, ge) || 1e-8, Mt = Bt / B, xt = pe / B, $t = ge / B, Rt = Mt * r.right.x + xt * r.right.y + $t * r.right.z, Vt = Mt * r.up.x + xt * r.up.y + $t * r.up.z, A = Mt * r.fwd.x + xt * r.fwd.y + $t * r.fwd.z;
      if (A <= 1e-4)
        P[G] || (P[G] = []), J[G] || (J[G] = []), P[G][kt] = null, J[G][kt] = null;
      else {
        const D = Vt / A / o, z = Rt / A / o;
        P[G] || (P[G] = []), J[G] || (J[G] = []), P[G][kt] = n.x + n.w * 0.5 + z * n.h * 0.5, J[G][kt] = n.y + n.h * 0.5 - D * n.h * 0.5;
      }
      tt[G] || (tt[G] = []), rt[G] || (rt[G] = []), tt[G][kt] = Et, rt[G][kt] = it;
    }
  }
  const bt = (et = c.assets) == null ? void 0 : et[u.asset_id], H = Ih(e, u.asset_id, bt);
  if (!H || !H.complete || !H.naturalWidth) return;
  const Y = Number(H.naturalWidth || H.width || 1), lt = Number(H.naturalHeight || H.height || 1), ft = f < 10 ? 0.35 : 0.45;
  t.__panoTriExpandPx = ft;
  for (let G = 0; G < m; G++)
    for (let it = 0; it < f; it++) {
      const ot = P[G][it], ut = J[G][it], kt = P[G][it + 1], Et = J[G][it + 1], X = P[G + 1][it], Nt = J[G + 1][it], Bt = P[G + 1][it + 1], pe = J[G + 1][it + 1];
      if (ot === null || kt === null || X === null || Bt === null) continue;
      const ge = tt[G][it] * Y, B = rt[G][it] * lt, Mt = tt[G][it + 1] * Y, xt = rt[G][it + 1] * lt, $t = tt[G + 1][it] * Y, Rt = rt[G + 1][it] * lt, Vt = tt[G + 1][it + 1] * Y, A = rt[G + 1][it + 1] * lt;
      is(t, H, { x: ge, y: B }, { x: Mt, y: xt }, { x: Vt, y: A }, { x: ot, y: ut }, { x: kt, y: Et }, { x: Bt, y: pe }), is(t, H, { x: ge, y: B }, { x: Vt, y: A }, { x: $t, y: Rt }, { x: ot, y: ut }, { x: Bt, y: pe }, { x: X, y: Nt });
    }
}
function jy(t, e, n = null) {
  String(t.__panoPreviewMode || "stickers");
  const r = xh(t), o = Wc(t);
  if (!o) return;
  t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const c = xl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(t.__panoPreviewView.fov || 100) * qr * 0.5);
  e.save(), e.fillStyle = "#1a1a1e", e.strokeStyle = "#3f3f46", e.lineWidth = 1, e.beginPath(), e.roundRect(o.x, o.y, o.w, o.h, 8), e.fill(), e.stroke(), e.clip();
  const f = rs(
    t,
    Sl(t, ["erp_image", "bg_erp"]),
    () => {
      var R;
      return (R = t.setDirtyCanvas) == null ? void 0 : R.call(t, !0, !1);
    }
  ), m = !!(f && f.complete && (f.naturalWidth || f.width)), y = Fh(t), p = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, x = y || p, N = Fi, k = Eh(t, r), I = Th(t, r, k), C = wl(t.__panoPreviewView), F = m ? Vi({
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
    textures: I,
    scene: k,
    view: C
  }) : !1, $ = x ? 8 : 12, L = x ? 6 : 9, V = zy(t, r);
  if (!m || V.length === 0) {
    const R = Kc(e == null ? void 0 : e.canvas, o);
    Rh(e, o, c, u, R);
  }
  !F && m && os(t, e, o, c, u, f, N), !F && V.length > 0 && V.forEach((R) => Dh(e, t, o, c, u, r, R, $, L)), e.restore();
}
function za(t, e, n, r) {
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
      const x = r.convertEventToCanvasOffset(e);
      if (Array.isArray(x) && x.length >= 2)
        return {
          x: Number(x[0]) - Number(((f = t == null ? void 0 : t.pos) == null ? void 0 : f[0]) || 0),
          y: Number(x[1]) - Number(((m = t == null ? void 0 : t.pos) == null ? void 0 : m[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(e == null ? void 0 : e.canvasX)) && Number.isFinite(Number(e == null ? void 0 : e.canvasY)))
    return {
      x: Number(e.canvasX) - Number(((y = t == null ? void 0 : t.pos) == null ? void 0 : y[0]) || 0),
      y: Number(e.canvasY) - Number(((p = t == null ? void 0 : t.pos) == null ? void 0 : p[1]) || 0)
    };
  const o = Gy(t, e, r);
  return o || null;
}
function By(t, e) {
  var x, N;
  const n = Number(t == null ? void 0 : t.clientX), r = Number(t == null ? void 0 : t.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (e == null ? void 0 : e.canvas) || (e == null ? void 0 : e.canvasEl) || (e == null ? void 0 : e.canvas_element) || (e == null ? void 0 : e.front_canvas) || null, c = (x = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : x.call(o), u = (e == null ? void 0 : e.ds) || ((N = _e == null ? void 0 : _e.canvas) == null ? void 0 : N.ds);
  if (!c || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const m = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(c.left || 0)) / f - Number(m[0] || 0), p = (r - Number(c.top || 0)) / f - Number(m[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(p) ? null : { x: y, y: p };
}
function Gy(t, e, n) {
  var o, c;
  const r = By(e, n || (_e == null ? void 0 : _e.canvas));
  return r ? {
    x: r.x - Number(((o = t == null ? void 0 : t.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((c = t == null ? void 0 : t.pos) == null ? void 0 : c[1]) || 0)
  } : null;
}
function ba(t) {
  if (t.__panoLegacyPreviewHooked) return;
  Jt(t, "legacy.attach", {
    mode: t.__panoPreviewMode,
    nodeType: String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || ""),
    nodeSize: kr(t)
  }), t.__panoLegacyPreviewHooked = !0, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "legacy_draw", bh(t, 320, 180), wi(t);
  const e = t.onDrawForeground, n = t.onResize;
  t.onDrawForeground = function() {
    var N, k;
    const x = e ? e.apply(this, arguments) : void 0;
    try {
      const I = arguments[0];
      I && !((N = this.flags) != null && N.collapsed) && (r.stepInertia(performance.now()) && ((k = this.setDirtyCanvas) == null || k.call(this, !0, !1)), jy(this, I, r));
    } catch {
    }
    return x;
  }, t.onResize = function() {
    var N;
    const x = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, as(this, 150), (N = this.setDirtyCanvas) == null || N.call(this, !0, !0), $h(this, 220, null), x;
  };
  const r = Ss({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (x) => {
      t.__panoPreviewView = x;
    },
    onInteraction: () => {
      var x;
      Oh(t), (x = t.setDirtyCanvas) == null || x.call(t, !0, !1);
    }
  }), o = t.onMouseDown;
  t.onMouseDown = function(x, N, k) {
    var I;
    try {
      if (!((I = this.flags) != null && I.collapsed)) {
        const C = za(this, x, N, k) || { x: 0, y: 0 }, F = kr(this), $ = Number((F == null ? void 0 : F[0]) || 0), L = Number((F == null ? void 0 : F[1]) || 0);
        if (C.x >= $ - 20 && C.y >= L - 20)
          return o ? o.apply(this, arguments) : void 0;
        const R = Wc(this);
        if (Af(C.x, C.y, R))
          return (x == null ? void 0 : x.button) === 0 && r.startDrag(C.x, C.y), !0;
      }
    } catch {
    }
    return o ? o.apply(this, arguments) : void 0;
  };
  const c = t.onMouseMove;
  t.onMouseMove = function(x, N, k) {
    try {
      const I = za(this, x, N, k);
      if (r.state.drag.active) {
        if (typeof (x == null ? void 0 : x.buttons) == "number" && (x.buttons & 1) === 0)
          return r.endDrag(), !0;
        const C = I || r.state.drag;
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
    const x = f ? f.apply(this, arguments) : void 0;
    return r.state.drag.active && r.endDrag(), x;
  };
  const m = t.onMouseWheel;
  t.onMouseWheel = function(x, N, k) {
    var I, C;
    try {
      if ((I = this.flags) != null && I.collapsed) return m ? m.apply(this, arguments) : void 0;
      const F = za(this, x, N, k), $ = Wc(this);
      if (!F || !Af(F.x, F.y, $)) return m ? m.apply(this, arguments) : void 0;
      const L = Number((x == null ? void 0 : x.deltaY) ?? (x == null ? void 0 : x.wheelDeltaY) ?? (typeof N == "number" ? N : 0));
      return r.applyWheel(Math.sign(L)) && ((C = this.setDirtyCanvas) == null || C.call(this, !0, !1)), typeof (x == null ? void 0 : x.preventDefault) == "function" && x.preventDefault(), typeof (x == null ? void 0 : x.stopPropagation) == "function" && x.stopPropagation(), !0;
    } catch {
      return m ? m.apply(this, arguments) : void 0;
    }
  };
  const y = t.onRemoved, p = () => {
    t.__panoLegacyPreviewHooked && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.onResize = n, t.onDrawForeground = e, t.onMouseDown = o, t.onMouseMove = c, t.onMouseUp = u, t.onMouseLeave = f, t.onMouseWheel = m, t.onRemoved = y, t.__panoLegacyPreviewHooked = !1, t.__panoPreviewHooked = !1, t.__panoPreviewDrag = null, t.__panoLegacyRestore = null);
  };
  t.__panoLegacyRestore = p, t.onRemoved = function() {
    return p(), Mo.unregister(this), es.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function Ky(t, e) {
  const n = rs(
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
function Wy(t, e) {
  var y, p, x, N, k, I, C, F, $, L, V, R;
  const n = (p = (y = e == null ? void 0 : e.painting) == null ? void 0 : y.paint) == null ? void 0 : p.strokes, r = (N = (x = e == null ? void 0 : e.painting) == null ? void 0 : x.mask) == null ? void 0 : N.strokes, o = Array.isArray(n) && n.length > 0, c = Array.isArray(r) && r.length > 0;
  if (!o && !c) return null;
  const u = Ky(t, e), f = `${u.width}x${u.height}`;
  (!t.__panoPreviewPaintEngine || t.__panoPreviewPaintDescriptorKey !== f) && (t.__panoPreviewPaintEngine = Vc(u), t.__panoPreviewPaintDescriptorKey = f, t.__panoPreviewPaintRevision = null, t.__panoPreviewPaintRevisionKey = "");
  const m = {
    paint: n || null,
    mask: r || null,
    groups: ((k = e == null ? void 0 : e.painting) == null ? void 0 : k.groups) || null,
    rasterObjects: ((I = e == null ? void 0 : e.painting) == null ? void 0 : I.raster_objects) || null
  };
  return (((C = t.__panoPreviewPaintRevision) == null ? void 0 : C.paint) !== m.paint || ((F = t.__panoPreviewPaintRevision) == null ? void 0 : F.mask) !== m.mask || (($ = t.__panoPreviewPaintRevision) == null ? void 0 : $.groups) !== m.groups || ((L = t.__panoPreviewPaintRevision) == null ? void 0 : L.rasterObjects) !== m.rasterObjects) && (t.__panoPreviewPaintRevision = m, t.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    c ? "m1" : "m0",
    String(Array.isArray((V = e == null ? void 0 : e.painting) == null ? void 0 : V.groups) ? e.painting.groups.length : 0),
    String(Array.isArray((R = e == null ? void 0 : e.painting) == null ? void 0 : R.raster_objects) ? e.painting.raster_objects.length : 0)
  ].join(":"), t.__panoPreviewPaintEngine.rebuildCommitted(e)), t.__panoPreviewPaintEngine;
}
function qy(t) {
  var n;
  return (Array.isArray((n = t == null ? void 0 : t.painting) == null ? void 0 : n.groups) ? t.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function Yy(t, e) {
  const n = Wy(t, e);
  if (!n) return null;
  const r = qy(e);
  return n.getErpTarget(r).displayPaint.canvas;
}
function Xy(t, e, n = null) {
  var f;
  const r = (f = e == null ? void 0 : e.painting_layer) == null ? void 0 : f.paint, o = Gn(r);
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
function Tf(t, e) {
  var c, u;
  const n = t == null ? void 0 : t.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((c = e == null ? void 0 : e.painting) == null ? void 0 : c.raster_objects) && e.painting.raster_objects.length > 0) {
    const f = Xy(t, e, () => {
      var m, y;
      return (y = (m = t.__panoDomPreview) == null ? void 0 : m.requestDraw) == null ? void 0 : y.call(m);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = e == null ? void 0 : e.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const o = Yy(t, e);
  return o ? {
    source: o,
    revision: String(t.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function Zy(t) {
  return {
    width: Math.max(1, Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.videoWidth) || (t == null ? void 0 : t.width) || 0)),
    height: Math.max(1, Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.videoHeight) || (t == null ? void 0 : t.height) || 0))
  };
}
function Jy(t, e, n, r) {
  let o = (t == null ? void 0 : t[e]) || null;
  return (!o || o.width !== n || o.height !== r) && (o = document.createElement("canvas"), o.width = n, o.height = r, t[e] = o), o;
}
function Qy(t, e, n, r, o, c) {
  if (!e || !n || !(r > 0) || !(o > 0)) return;
  const u = Zy(n);
  if (u.width === r && u.height === o) {
    e.drawImage(n, 0, 0, r, o);
    return;
  }
  const m = Jy(t, c, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!m) {
    e.drawImage(n, 0, 0, r, o);
    return;
  }
  try {
    m.clearRect(0, 0, u.width, u.height), m.drawImage(n, 0, 0, u.width, u.height);
    const y = m.getImageData(0, 0, u.width, u.height).data, p = e.getImageData(0, 0, r, o), x = p.data, N = Math.max(0, u.width - 1), k = Math.max(0, u.height - 1);
    for (let I = 0; I < o; I += 1) {
      const C = (I + 0.5) * u.height / o - 0.5, F = j(Math.floor(C), 0, k), $ = j(F + 1, 0, k), L = j(C - F, 0, 1);
      for (let V = 0; V < r; V += 1) {
        const R = (V + 0.5) * u.width / r - 0.5, P = j(Math.floor(R), 0, N), J = j(P + 1, 0, N), tt = j(R - P, 0, 1);
        let rt = 0, bt = 0, H = 0, Y = 0;
        const lt = (G, it, ot) => {
          const ut = (it * u.width + G) * 4, kt = (y[ut + 3] || 0) / 255;
          rt += kt * ot, bt += (y[ut] || 0) / 255 * kt * ot, H += (y[ut + 1] || 0) / 255 * kt * ot, Y += (y[ut + 2] || 0) / 255 * kt * ot;
        };
        if (lt(P, F, (1 - tt) * (1 - L)), lt(J, F, tt * (1 - L)), lt(P, $, (1 - tt) * L), lt(J, $, tt * L), rt <= 1e-6) continue;
        const ft = (I * r + V) * 4, et = 1 - rt;
        x[ft] = Math.round(j((bt + x[ft] / 255 * et) * 255, 0, 255)), x[ft + 1] = Math.round(j((H + x[ft + 1] / 255 * et) * 255, 0, 255)), x[ft + 2] = Math.round(j((Y + x[ft + 2] / 255 * et) * 255, 0, 255)), x[ft + 3] = 255;
      }
    }
    e.putImageData(p, 0, 0);
  } catch {
    e.drawImage(n, 0, 0, r, o);
  }
}
function Lf(t, e, n, r) {
  const o = Math.max(1, Number(e.naturalWidth || e.width || 0)), c = Math.max(1, Number(e.naturalHeight || e.height || 0)), f = `${String(e.currentSrc || e.src || "")}|${o}x${c}|${r}`;
  let m = t.__panoPreviewBgPaint;
  if (!m || m.__revKey !== f || m.width !== o || m.height !== c) {
    (!m || m.width !== o || m.height !== c) && (m = document.createElement("canvas"), m.width = o, m.height = c, t.__panoPreviewBgPaint = m);
    const y = m.getContext("2d");
    y.clearRect(0, 0, o, c), y.drawImage(e, 0, 0, o, c), Qy(t, y, n, o, c, "__panoPreviewOverlayScratch"), m.__revKey = f;
  }
  return m;
}
function tb(t, e, n, r = null) {
  const o = String(t.__panoPreviewMode || "stickers");
  Ch(t, o);
  const c = xh(t), u = o === "cutout" ? Dy(t, () => {
    var C, F;
    return (F = (C = t.__panoDomPreview) == null ? void 0 : C.requestDraw) == null ? void 0 : F.call(C);
  }) : null, f = !!(u && u.complete && (u.naturalWidth || u.width)), m = e.parentElement, y = 1, p = Math.max(1, Number((m == null ? void 0 : m.clientWidth) || e.clientWidth || 0)), x = Math.max(1, Number((m == null ? void 0 : m.clientHeight) || e.clientHeight || 0)), N = Math.max(64, Math.round(p * y)), k = Math.max(64, Math.round(x * y)), I = e.getContext("2d");
  if (I)
    if (o === "cutout") {
      const C = Fy(c), F = rs(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var et, G;
          return (G = (et = t.__panoDomPreview) == null ? void 0 : et.requestDraw) == null ? void 0 : G.call(et);
        }
      ), $ = !!(F && F.complete && (F.naturalWidth || F.width));
      (e.width !== N || e.height !== k) && (e.width = N, e.height = k);
      const L = { x: 0, y: 0, w: N, h: k }, V = f ? j(Number((u.naturalWidth || u.width) / Math.max(1, Number(u.naturalHeight || u.height || 1))), 0.05, 20) : $ ? j(Number((F.naturalWidth || F.width) / Math.max(1, Number(F.naturalHeight || F.height || 1))), 0.05, 20) : 1, R = C ? Mi(C) : null, P = j(Number((R == null ? void 0 : R.aspect) || V || 1), 0.05, 20), J = Ah(L, P), tt = Kc(e, L);
      I.setTransform(1, 0, 0, 1, 0, 0), I.fillStyle = "#070707", I.fillRect(0, 0, N, k);
      const rt = t == null ? void 0 : t.__panoCutoutPreviewSurface, bt = (rt == null ? void 0 : rt.source) || null;
      if (!!(bt && Number(bt.width || 0) > 1 && Number(bt.height || 0) > 1)) {
        I.drawImage(bt, J.x, J.y, J.w, J.h), uo(t, !1), xr(t, !1, "");
        return;
      }
      let Y = "none", lt = "Open editor and add frame", ft = "";
      if (f)
        I.drawImage(u, J.x, J.y, J.w, J.h);
      else if (ft = String((F == null ? void 0 : F.src) || ""), C)
        F && !$ ? Y = "loading" : $ ? (Y = "empty", lt = "Open editor or run node") : (Y = "empty", lt = "Connect ERP image");
      else {
        if ($) {
          const et = Tf(t, c), G = et != null && et.source ? Lf(t, F, et.source, et.revision || "") : F;
          $y(I, G, L, 0.44);
        }
        Y = "empty", lt = "Open editor and add frame";
      }
      Y === "loading" ? (Ef(I, J, tt), uo(t, !1), xr(t, !0, ft)) : Y === "empty" ? (uo(t, !0, lt), xr(t, !1, "")) : (uo(t, !1), xr(t, !1, ""));
    } else {
      uo(t, !1), (e.width !== N || e.height !== k) && (e.width = N, e.height = k);
      const C = { x: 0, y: 0, w: N, h: k }, F = Kc(e, C);
      I.setTransform(1, 0, 0, 1, 0, 0), I.clearRect(0, 0, N, k), t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const $ = xl(Number(t.__panoPreviewView.yaw || 0), Number(t.__panoPreviewView.pitch || 0), 0), L = Math.tan(Number(t.__panoPreviewView.fov || 100) * qr * 0.5), V = rs(
        t,
        ["erp_image", "bg_erp"],
        () => {
          var et, G;
          return (G = (et = t.__panoDomPreview) == null ? void 0 : et.requestDraw) == null ? void 0 : G.call(et);
        }
      ), R = !!(V && V.complete && (V.naturalWidth || V.width));
      I.fillStyle = "#1a1a1e", I.fillRect(0, 0, N, k);
      const P = Eh(t, c), J = Th(t, c, P), tt = wl(t.__panoPreviewView), rt = Tf(t, c), bt = (rt == null ? void 0 : rt.source) || null, H = R && bt ? Lf(t, V, bt, (rt == null ? void 0 : rt.revision) || "") : V, Y = H !== V ? String(H.__revKey || "") : V ? [
        String(V.currentSrc || V.src || ""),
        Number(V.naturalWidth || V.width || 0),
        Number(V.naturalHeight || V.height || 0)
      ].join("|") : "", lt = R ? Vi({
        owner: t,
        cacheKey: "runtime_dom_scene",
        ctx: I,
        rect: C,
        backgroundSource: H,
        backgroundRevision: Y,
        textures: J,
        scene: P,
        view: tt
      }) : !1, ft = P.stickers;
      if (R && lt)
        xr(t, !1, "");
      else if (R)
        os(t, I, C, $, L, H, Fi), xr(t, !1, "");
      else if (bt)
        os(t, I, C, $, L, bt, Fi), xr(t, !!V && !R, String((V == null ? void 0 : V.src) || ""));
      else {
        const et = !!V && !R;
        xr(t, et, String((V == null ? void 0 : V.src) || "")), et && Ef(I, C, F);
      }
      if ((!R || ft.length === 0) && Rh(I, C, $, L, F), !lt && ft.length > 0) {
        const et = Fh(t), G = r != null && r.state ? r.state.inertia.active || r.state.drag.active : !1, it = et || G, ot = it ? 8 : 12, ut = it ? 6 : 9;
        ft.forEach((kt) => Dh(I, t, C, $, L, c, kt, ot, ut));
      } else if (!V || !R) {
        const et = Math.max(14, Math.round(16 * F));
        I.fillStyle = "rgba(212,212,216,0.85)", I.font = `600 ${et}px Plus Jakarta Sans, Geist, sans-serif`, I.textAlign = "center", I.fillText("Open editor to add stickers", N * 0.5, k * 0.5 + 24 * F);
      }
    }
}
function os(t, e, n, r, o, c, u = _c) {
  if (!(!!c && (typeof HTMLCanvasElement < "u" && c instanceof HTMLCanvasElement || typeof OffscreenCanvas < "u" && c instanceof OffscreenCanvas || typeof ImageBitmap < "u" && c instanceof ImageBitmap) || !!c && c.complete && (c.naturalWidth || c.width))) return;
  const y = (t == null ? void 0 : t.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  if (j1({
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
  const p = Number(c.naturalWidth || c.width || 0), x = Number(c.naturalHeight || c.height || 0);
  if (p <= 1 || x <= 1) return;
  const k = Hy(t, c) || c, I = Math.max(4, Number((u == null ? void 0 : u.Nu) || _c.Nu)), C = Math.max(4, Number((u == null ? void 0 : u.Nv) || _c.Nv)), F = I <= Fi.Nu && C <= Fi.Nv ? 0.24 : I >= Pf.Nu && C >= Pf.Nv ? 0.42 : 0.34, $ = [], L = [];
  for (let J = 0; J <= C; J++)
    $[J] = [], L[J] = [];
  const V = n.x + n.w * 0.5, R = n.y + n.h * 0.5, P = n.h * 0.5;
  for (let J = 0; J <= C; J++) {
    const tt = n.y + n.h * J / C, rt = (R - tt) / P * o;
    for (let bt = 0; bt <= I; bt++) {
      const H = n.x + n.w * bt / I, Y = (H - V) / P * o, lt = r.fwd.x + r.right.x * Y + r.up.x * rt, ft = r.fwd.y + r.right.y * Y + r.up.y * rt, et = r.fwd.z + r.right.z * Y + r.up.z * rt, G = Math.hypot(lt, ft, et) || 1e-8, it = lt / G, ot = ft / G, ut = et / G, kt = Math.atan2(it, ut), Et = Math.asin(j(ot, -1, 1));
      let X = (kt / (2 * Math.PI) + 0.5) * p;
      for (; X < 0; ) X += p;
      for (; X >= p; ) X -= p;
      const Nt = (0.5 - Et / Math.PI) * x;
      $[J][bt] = { x: H, y: tt }, L[J][bt] = { x: X, y: Nt };
    }
  }
  e.save(), e.__panoTriExpandPx = F, e.globalAlpha = 1;
  for (let J = 0; J < C; J += 1)
    for (let tt = 0; tt < I; tt += 1) {
      const rt = $[J][tt], bt = $[J][tt + 1], H = $[J + 1][tt], Y = $[J + 1][tt + 1];
      if (!rt || !bt || !H || !Y) continue;
      const lt = { ...L[J][tt] }, ft = { ...L[J][tt + 1] }, et = { ...L[J + 1][tt] }, G = { ...L[J + 1][tt + 1] }, it = Math.min(lt.x, ft.x, et.x, G.x);
      Math.max(lt.x, ft.x, et.x, G.x) - it > p * 0.5 && [lt, ft, et, G].forEach((ut) => {
        ut.x < p * 0.5 && (ut.x += p);
      }), is(e, k, lt, ft, G, rt, bt, Y), is(e, k, lt, G, et, rt, Y, H);
    }
  e.__panoTriExpandPx = 0.45, e.restore();
}
function Df(t, e, n, r, o, c, u = 1) {
  let f = !1;
  t.strokeStyle = c, t.lineWidth = u, t.beginPath();
  for (const m of e) {
    const y = Lh(m, n, r, o);
    if (!y) {
      f = !1;
      continue;
    }
    f ? t.lineTo(y.x, y.y) : (t.moveTo(y.x, y.y), f = !0);
  }
  t.stroke();
}
function Rh(t, e, n, r, o = 1) {
  t.save();
  const c = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const p = [];
    for (let x = -180; x <= 180; x += 15) p.push($r(x, y));
    Df(t, p, n, e, r, y === 0 ? u : c, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const p = [];
    for (let x = -89; x <= 89; x += 15) p.push($r(y, x));
    Df(t, p, n, e, r, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : c, y % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: $r(0, 0) },
    { name: "Right", dir: $r(90, 0) },
    { name: "Back", dir: $r(180, 0) },
    { name: "Left", dir: $r(-90, 0) }
  ];
  t.fillStyle = "rgba(250, 250, 250, 0.32)";
  const m = Math.max(9, Math.round(11 * o));
  t.font = `500 ${m}px Plus Jakarta Sans, Geist, sans-serif`, t.textAlign = "center", t.textBaseline = "middle", f.forEach((y) => {
    const p = Lh(y.dir, n, e, r);
    p && t.fillText(y.name, p.x, p.y + 20 * o);
  }), t.restore();
}
function eb(t) {
  return t.__panoStandaloneRenderState || (t.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), t.__panoStandaloneRenderState;
}
function Oh(t) {
  const e = eb(t);
  e.dragging = !1, e.hqFrames = yy;
}
function as(t, e = 150, n = performance.now()) {
  t && (t.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(e || 0)));
}
function Fh(t, e = performance.now()) {
  return Number(e || performance.now()) < Number((t == null ? void 0 : t.__panoResizeUntil) || 0);
}
function nb(t) {
  var e;
  t.preventDefault(), t.stopPropagation(), (e = t.stopImmediatePropagation) == null || e.call(t);
}
function rb(t, e, n = 20) {
  var u;
  if (!t || !e || !Number.isFinite(Number(t.clientX)) || !Number.isFinite(Number(t.clientY))) return !1;
  const r = (u = e.getBoundingClientRect) == null ? void 0 : u.call(e);
  if (!r) return !1;
  const o = Number(t.clientX) - Number(r.left || 0), c = Number(t.clientY) - Number(r.top || 0);
  return o >= r.width - n && c >= r.height - n;
}
function gi(t, e) {
  return rb(t, e) ? !1 : (nb(t), !0);
}
function ib() {
  var n;
  const t = (n = _e == null ? void 0 : _e.canvas) == null ? void 0 : n.ds;
  if (!t) return null;
  const e = Array.isArray(t.offset) ? [Number(t.offset[0] || 0), Number(t.offset[1] || 0)] : [0, 0];
  return { scale: Number(t.scale || 1), offset: e };
}
function ob(t) {
  var n;
  if (!t) return;
  const e = (n = _e == null ? void 0 : _e.canvas) == null ? void 0 : n.ds;
  e && (e.scale = t.scale, Array.isArray(e.offset) && (e.offset[0] = t.offset[0], e.offset[1] = t.offset[1]));
}
function ab(t, e = 360, n = 260) {
  if (!t || t.__panoUserResized === !0 || t.__panoStandaloneBootSized === !0) return;
  const r = kr(t), o = Number((r == null ? void 0 : r[0]) || 0), c = Number((r == null ? void 0 : r[1]) || 0);
  if (!Number.isFinite(o) || !Number.isFinite(c) || o >= e && c >= n) return;
  const u = [Math.max(e, o), Math.max(n, c)];
  try {
    typeof t.setSize == "function" ? t.setSize(u) : t.size = u, t.__panoStandaloneBootSized = !0, Jt(t, "size.bootstrap", { from: [o, c], to: u });
  } catch (f) {
    Jt(t, "size.bootstrap.error", { message: String((f == null ? void 0 : f.message) || f || "unknown") });
  }
}
function sb(t, e = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(e || 0));
  t != null && t.__panoBootMinHeightTimer && (clearTimeout(t.__panoBootMinHeightTimer), t.__panoBootMinHeightTimer = null), t.__panoBootMinHeightActive = o > 0, !(o <= 0) && (t.__panoBootMinHeightTimer = setTimeout(() => {
    var c, u;
    t.__panoBootMinHeightTimer = null, (c = t == null ? void 0 : t.__panoDomPreview) != null && c.widget && t.__panoBootMinHeightActive && (t.__panoBootMinHeightActive = !1, n == null || n(), (u = t.setDirtyCanvas) == null || u.call(t, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Rf(t, e = null, n = 0) {
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
      t.__panoUserResized = !0, as(t, 150), e == null || e(), $h(t, 180, e);
    }
  };
}
function $h(t, e = 180, n = null) {
  t && (t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    t.__panoResizeSettleTimer = null, n == null || n(), (r = t.setDirtyCanvas) == null || r.call(t, !0, !0);
  }, Math.max(0, Number(e || 0))));
}
function wi(t) {
  t && Array.isArray(t.imgs) && t.imgs.length && (t.imgs = []);
}
function cb(t, e = {}) {
  var Et;
  const n = e.__allowStandalone === !0, r = wy(t);
  if (r && !n) {
    Jt(t, "attach.skip", { reason: "standalone_preview_node", route: "blocked_legacy_path", nodeType: vh(t) });
    return;
  }
  r && ab(t), t.__panoPreviewMode = String(e.mode || "stickers") === "cutout" ? "cutout" : "stickers", es.register(t);
  const o = t.__panoPreviewMode === "stickers", c = e.__noLegacyFallback === !0, u = t.__panoPreviewMode !== "cutout";
  t.__panoAttachOptions = { ...e, mode: t.__panoPreviewMode }, t.__panoPreviewNoPreview = e.noPreview === !0, t.__panoPreviewButtonText = String(e.buttonText || (t.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), t.__panoOpenEditor = typeof e.onOpen == "function" ? e.onOpen : null;
  const f = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
  o || Mo.unregister(t);
  const m = String(e.__panoForcedPath || "").trim(), y = o ? _h(t.__panoPreviewMode, t) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Gr(t),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  o && (m === "dom" || m === "legacy_draw") && (y.chosenPath = m, y.reason = "controller_target_backend");
  const p = o ? y.chosenPath : "dom", x = y.signature || Gr(t), N = Number(t.__panoRebindGeneration || 0), k = jc(t);
  if (Jt(t, "attach.begin", {
    nodeId: (t == null ? void 0 : t.id) ?? null,
    nodeType: f,
    mode: t.__panoPreviewMode,
    legacyFrontend: p === "legacy_draw",
    activeBackend: k,
    targetBackend: p,
    chosenPath: p,
    pathReason: y.reason,
    signature: x,
    generation: N,
    frontendVersionRaw: y.frontendVersionRaw,
    hasDomWidget: typeof t.addDOMWidget == "function",
    size: kr(t)
  }), t.__panoFrontendSig = x, t.__panoStickersPath = p, o && Mo.register(t), o && p === "legacy_draw") {
    if (c) return;
    Di(t, { keepMonitor: !0 }), ba(t);
    return;
  }
  if ((Et = t.__panoDomPreview) != null && Et.widget) return;
  if (t.__panoLegacyPreviewHooked && Di(t, { keepMonitor: !0 }), typeof t.addDOMWidget != "function") {
    o && !c && ba(t);
    return;
  }
  const I = e.noPreview === !0, C = o || I ? 0 : 56, F = document.createElement("div");
  if (vy(), F.className = "pano-node-preview-dom", F.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), I && F.classList.add("pano-node-preview--no-preview"), F.setAttribute("data-capture-wheel", "true"), F.setAttribute("tabindex", "-1"), F.style.cssText = [
    "width:100%",
    I ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), I) {
    const X = t.addDOMWidget(Uc(), "preview", F, Rf(t, null));
    wi(t), t.__panoDomPreview = { widget: X, root: F, requestDraw: () => {
    } }, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom";
    return;
  }
  const $ = document.createElement("div");
  $.style.cssText = [
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
  const V = document.createElement("div");
  V.style.cssText = [
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
  ].join(";"), V.textContent = "Open editor and add frame", $.appendChild(L), $.appendChild(V), F.appendChild($), bh(t, 120, 120), wi(t);
  let R = null;
  try {
    sb(t, C, () => {
      var X, Nt;
      return (Nt = (X = t.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : Nt.call(X);
    }), R = t.addDOMWidget(
      Uc(),
      "preview",
      F,
      Rf(t, () => {
        var X, Nt;
        return (Nt = (X = t.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : Nt.call(X);
      }, C)
    );
  } catch {
    o && ba(t);
    return;
  }
  const P = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, J = () => {
    P.needsDraw = !0, P.raf || (P.raf = requestAnimationFrame(bt));
  }, tt = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    as(t, 150), J();
  }) : null;
  tt == null || tt.observe($);
  const rt = () => {
    if (!o || t.__panoDomProbePending) return;
    t.__panoDomProbePending = !0;
    const X = 3, Nt = (Bt) => {
      requestAnimationFrame(() => {
        var ge;
        const pe = !!(F != null && F.isConnected && ($ != null && $.isConnected) && (L != null && L.isConnected) && Number($.clientHeight || 0) > 0 && Number(L.clientHeight || 0) > 0);
        if (!pe && Bt < X) {
          Nt(Bt + 1);
          return;
        }
        if (t.__panoDomProbePending = !1, Jt(t, "probe.result", {
          mode: t.__panoPreviewMode,
          result: pe ? "dom_ok" : "dom_fail",
          wrapH: Number(($ == null ? void 0 : $.clientHeight) || 0),
          canvasH: Number((L == null ? void 0 : L.clientHeight) || 0),
          attempt: Bt
        }), !pe) {
          if (c) {
            Jt(t, "path.keep", {
              route: "dom",
              reason: "probe_dom_not_ready",
              mode: t.__panoPreviewMode,
              wrapH: Number(($ == null ? void 0 : $.clientHeight) || 0),
              canvasH: Number((L == null ? void 0 : L.clientHeight) || 0)
            });
            return;
          }
          Jt(t, "path.switch", {
            from: "dom",
            to: "legacy_draw",
            reason: "probe_dom_fail_fallback_legacy"
          }), Di(t, { keepMonitor: !0 }), t.__panoStickersPath = "legacy_draw_auto", ba(t), (ge = t.setDirtyCanvas) == null || ge.call(t, !0, !0);
        }
      });
    };
    Nt(1);
  }, bt = (X) => {
    var Bt, pe, ge;
    P.raf = 0;
    const Nt = H.stepInertia(X);
    (P.needsDraw || Nt) && (P.needsDraw = !1, (Bt = t.flags) != null && Bt.collapsed || tb(t, L, null, H), (pe = t.setDirtyCanvas) == null || pe.call(t, !0, !1)), (Nt || P.needsDraw) && (P.raf = requestAnimationFrame(bt)), yh() && (!t.__panoDebugLastTs || X - t.__panoDebugLastTs > 1200) && (t.__panoDebugLastTs = X, Jt(t, "dom.snapshot", {
      mode: t.__panoPreviewMode,
      nodeSize: kr(t),
      root: lo(F),
      wrap: lo($),
      canvas: lo(L),
      rootParent: lo(F.parentElement),
      rootGrandParent: lo((ge = F.parentElement) == null ? void 0 : ge.parentElement),
      canvasIntrinsic: { width: Number(L.width || 0), height: Number(L.height || 0) }
    }));
  }, H = Ss({
    getView: () => (t.__panoPreviewView || (t.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), t.__panoPreviewView),
    setView: (X) => {
      t.__panoPreviewView = X;
    },
    onInteraction: () => {
      J();
    }
  });
  L.addEventListener("pointerdown", (X) => {
    var Nt, Bt;
    gi(X, $) && u && X.button === 0 && ((Nt = F.focus) == null || Nt.call(F), (Bt = L.setPointerCapture) == null || Bt.call(L, X.pointerId), L.style.cursor = "grabbing", H.startDrag(X.clientX, X.clientY, X.pointerId));
  }), L.addEventListener("pointermove", (X) => {
    !u || !H.state.drag.active || (gi(X, $), H.moveDrag(X.clientX, X.clientY, "pano"));
  });
  const Y = (X) => {
    var Nt;
    !u || !H.state.drag.active || (gi(X, $), (Nt = L.releasePointerCapture) == null || Nt.call(L, X.pointerId), L.style.cursor = "grab", H.endDrag(), Oh(t), J());
  };
  L.addEventListener("pointerup", Y), L.addEventListener("pointercancel", Y), L.addEventListener("pointerleave", (X) => {
    H.state.drag.active && Y(X);
  });
  const lt = (X) => {
    var Bt, pe, ge;
    if (Jt(t, "event", { kind: "wheel", via: "stickers", interactiveView: u }), !gi(X, $) || !u) return;
    const Nt = ib();
    H.applyWheelEvent(X) && J(), (Bt = X.preventDefault) == null || Bt.call(X), (pe = X.stopPropagation) == null || pe.call(X), (ge = X.stopImmediatePropagation) == null || ge.call(X), requestAnimationFrame(() => {
      var B, Mt;
      ob(Nt), (Mt = (B = _e == null ? void 0 : _e.canvas) == null ? void 0 : B.setDirty) == null || Mt.call(B, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((X) => {
    $.addEventListener(X, lt, { passive: !1, capture: !0 }), L.addEventListener(X, lt, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((X) => {
    L.addEventListener(X, (Nt) => gi(Nt, $)), $.addEventListener(X, (Nt) => gi(Nt, $));
  });
  const ft = Qa(t, "state_json");
  if (ft && !ft.__panoPreviewPatchedCb) {
    ft.__panoPreviewPatchedCb = !0;
    const X = ft.callback;
    ft.callback = (Nt) => {
      const Bt = X ? X(Nt) : void 0;
      return J(), Bt;
    };
  }
  const et = Qa(t, "bg_color");
  if (et && !et.__panoPreviewPatchedCb) {
    et.__panoPreviewPatchedCb = !0;
    const X = et.callback;
    et.callback = (Nt) => {
      const Bt = X ? X(Nt) : void 0;
      return J(), Bt;
    };
  }
  const G = t.onRemoved, it = t.onResize, ot = t.onExecuted;
  t.onExecuted = function(X) {
    Ly(t, X), Gc(t), wi(t), J();
    const Nt = ot ? ot.apply(this, arguments) : void 0;
    return wi(t), Nt;
  };
  const ut = t.onConnectionsChange;
  t.onConnectionsChange = function() {
    return Gc(t), wi(t), J(), ut ? ut.apply(this, arguments) : void 0;
  }, t.onResize = function() {
    var Nt;
    const X = it ? it.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, as(this, 150), J(), (Nt = this.setDirtyCanvas) == null || Nt.call(this, !0, !1), X;
  }, t.onRemoved = function() {
    return kt(), Mo.unregister(this), es.unregister(this), G ? G.apply(this, arguments) : void 0;
  };
  const kt = () => {
    var X;
    P.raf && cancelAnimationFrame(P.raf), (X = tt == null ? void 0 : tt.disconnect) == null || X.call(tt), t.__panoResizeSettleTimer && (clearTimeout(t.__panoResizeSettleTimer), t.__panoResizeSettleTimer = null), t.__panoDomPreview = null, t.__panoDomRestore = null, t.onResize = it, t.onExecuted = ot, t.onConnectionsChange = ut, t.onRemoved = G;
  };
  t.__panoDomRestore = kt, t.__panoPreviewHooked = !0, t.__panoActiveBackend = "dom", t.__panoDomPreview = { widget: R, root: F, canvas: L, requestDraw: J, state: P, emptyHintEl: V }, rt(), J();
}
function Of(t, e = {}) {
  wh(t).attach({
    ...e,
    mode: "cutout"
  });
}
const ss = Math.PI / 180;
function Xr(t, e, n) {
  return { x: t, y: e, z: n };
}
function Ff(t, e) {
  return Xr(t.x + e.x, t.y + e.y, t.z + e.z);
}
function va(t, e) {
  return Xr(t.x * e, t.y * e, t.z * e);
}
function $f(t, e) {
  return Xr(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function _a(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Xr(t.x / e, t.y / e, t.z / e);
}
function lb(t, e) {
  const n = t * ss, r = e * ss, o = Math.cos(r);
  return Xr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function ub(t, e, n = 0) {
  const r = lb(t, e), o = Xr(0, 1, 0);
  let c = $f(o, r);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = Xr(1, 0, 0)), c = _a(c);
  const u = _a($f(r, c)), f = n * ss, m = Math.cos(f), y = Math.sin(f), p = Ff(va(c, m), va(u, y)), x = Ff(va(c, -y), va(u, m));
  return { fwd: r, right: _a(p), up: _a(x) };
}
const wa = 140, fb = 180, Hf = 40, xc = 10;
function Vf(t) {
  const e = String(t ?? "").trim();
  if (!e) return { full: "", tail: "" };
  const n = e.split(":");
  return { full: e, tail: String(n[n.length - 1] || "").trim() };
}
function zf(t, e) {
  const n = Vf(t), r = Vf(e);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Uf(t) {
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
  return typeof ((c = Qe) == null ? void 0 : c.apiURL) == "function" ? Qe.apiURL(o) : o;
}
function Po(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return Po(t[0]);
    const e = typeof t[0] == "string" ? String(t[0] || "").trim() : "";
    if (e)
      return Uf({
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
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : Uf(t);
}
function jf(t) {
  var o;
  const e = (o = dn) == null ? void 0 : o.nodeOutputs;
  if (!e || t == null) return null;
  const n = String(t);
  let r = null;
  if (e instanceof Map ? r = e.get(t) || e.get(n) || e.get(Number(n)) || null : r = e[t] || e[n] || null, r) return r;
  if (e instanceof Map) {
    for (const c of e.keys())
      if (zf(c, n)) return e.get(c);
  } else
    for (const c of Object.keys(e))
      if (zf(c, n)) return e[c];
  return null;
}
function db(t, e = "erp_image") {
  var I, C, F, $, L, V, R, P, J, tt, rt, bt;
  const n = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [];
  let r = null;
  const o = n.find((H) => String((H == null ? void 0 : H.name) || "") === String(e));
  if ((o == null ? void 0 : o.link) != null && (r = o.link), r == null) {
    const H = n.find((Y) => String((Y == null ? void 0 : Y.type) || "").toUpperCase() === "IMAGE" && (Y == null ? void 0 : Y.link) != null);
    (H == null ? void 0 : H.link) != null && (r = H.link);
  }
  if (r == null) return "";
  const c = ((C = (I = t == null ? void 0 : t.graph) == null ? void 0 : I.links) == null ? void 0 : C[r]) || ((L = ($ = (F = dn) == null ? void 0 : F.graph) == null ? void 0 : $.links) == null ? void 0 : L[r]);
  if (!c) return "";
  const u = Number(c.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (P = (R = (V = dn) == null ? void 0 : V.graph) == null ? void 0 : R.getNodeById) == null ? void 0 : P.call(R, u), m = jf(u), y = jf(t == null ? void 0 : t.id), p = [
    m == null ? void 0 : m.images,
    (J = m == null ? void 0 : m.ui) == null ? void 0 : J.pano_input_images,
    m == null ? void 0 : m.pano_input_images,
    (tt = y == null ? void 0 : y.ui) == null ? void 0 : tt.pano_input_images,
    y == null ? void 0 : y.pano_input_images
  ];
  for (const H of p)
    if (Array.isArray(H))
      for (const Y of H) {
        const lt = Po(Y);
        if (lt) return lt;
      }
  let x = [];
  try {
    x = typeof ((rt = dn) == null ? void 0 : rt.getNodeImageUrls) == "function" ? dn.getNodeImageUrls(f) || [] : [];
  } catch {
    x = [];
  }
  if (Array.isArray(x) && x.length > 0)
    for (const H of x) {
      const Y = Po(H);
      if (Y) return Y;
    }
  if (f) {
    const H = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const Y of H) {
      const lt = Po(Y);
      if (lt) return lt;
    }
  }
  const N = (bt = f == null ? void 0 : f.widgets) == null ? void 0 : bt.find((H) => String((H == null ? void 0 : H.name) || "").toLowerCase() === "image"), k = String((N == null ? void 0 : N.value) || "").trim();
  return k ? Qe.apiURL(`/view?filename=${encodeURIComponent(k)}&type=input&subfolder=`) : "";
}
function Bf(t, e, n) {
  t.strokeStyle = "rgba(255,255,255,0.16)", t.lineWidth = 1, t.beginPath(), t.moveTo(e * 0.5, 0), t.lineTo(e * 0.5, n), t.moveTo(0, n * 0.5), t.lineTo(e, n * 0.5), t.stroke();
}
function Gf(t, e, n, r, o, c) {
  if (e.clearRect(0, 0, n, r), e.fillStyle = "#070707", e.fillRect(0, 0, n, r), !c || !c.complete || !(c.naturalWidth || c.width) || n <= 1 || r <= 1) {
    Bf(e, n, r);
    return;
  }
  const u = ub(Number(o.yaw || 0), Number(o.pitch || 0), 0), f = Math.tan(Number(o.fov || 100) * ss * 0.5);
  Vi({
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
    scene: Ns(null, {}),
    view: my(o)
  }) || (os(t, e, { x: 0, y: 0, w: n, h: r }, u, f, c, Fi), Bf(e, n, r));
}
function Kf(t, e, n) {
  return t >= n.x && t <= n.x + n.w && e >= n.y && e <= n.y + n.h;
}
class hb {
  constructor(e, n = {}) {
    this.node = e, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Ss({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: $e(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: j(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: j(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
        `min-height:${wa}px`,
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
          return wa;
        },
        getHeight() {
          return wa;
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
            minHeight: Math.max(wa, Number(c.minHeight || 0)),
            minWidth: Math.max(fb, Number(c.minWidth || 0))
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
      return Kf(o.x, o.y, c) ? (e.legacyDragPointer = !0, e.controller.startDrag(o.x - c.x, o.y - c.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : e.orig.onMouseDown ? e.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var y, p, x, N, k, I;
      const c = za(this, n, r, o), u = e.getLegacyPreviewRect();
      if (!c || !Kf(c.x, c.y, u))
        return e.orig.onMouseWheel ? e.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof r == "number" ? r : 0));
      Number(((y = e.view) == null ? void 0 : y.fov) || 100);
      const m = e.controller.applyWheel(Math.sign(f));
      return Number(((p = e.view) == null ? void 0 : p.fov) || 100), m && ((x = this.setDirtyCanvas) == null || x.call(this, !0, !1)), (N = n == null ? void 0 : n.preventDefault) == null || N.call(n), (k = n == null ? void 0 : n.stopPropagation) == null || k.call(n), (I = n == null ? void 0 : n.stopImmediatePropagation) == null || I.call(n), !0;
    };
  }
  localPoint(e) {
    return !Array.isArray(e) || e.length < 2 ? null : { x: Number(e[0] || 0), y: Number(e[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, c, u;
    const e = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - xc * 2), n = Math.max(60, Number(((u = (c = this.node) == null ? void 0 : c.size) == null ? void 0 : u[1]) || 0) - Hf - xc);
    return { x: xc, y: Hf, w: e, h: n };
  }
  drawLegacy(e) {
    var r, o;
    if (!e || (o = (r = this.node) == null ? void 0 : r.flags) != null && o.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (e.save(), e.translate(n.x, n.y), Gf(this.node, e, n.w, n.h, this.view, this.img), this.errorText && (e.fillStyle = "rgba(18,18,22,0.92)", e.fillRect(0, 0, n.w, n.h), e.fillStyle = "rgba(236,236,242,0.92)", e.font = "600 12px sans-serif", e.textAlign = "center", e.textBaseline = "middle", e.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), e.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const e = this.root.getBoundingClientRect(), n = 1, r = Math.max(1, Math.round(e.width * n)), o = Math.max(1, Math.round(e.height * n));
    (this.canvas.width !== r || this.canvas.height !== o) && (this.canvas.width = r, this.canvas.height = o, this.requestDraw());
  }
  refreshImage() {
    const e = db(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (Gf(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (c = (o = this.node).setDirtyCanvas) == null || c.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
function pb(t, e = {}) {
  if (!t || t.__panoPreviewNodeRuntime) return;
  const n = new hb(t, e);
  t.__panoPreviewNodeRuntime = n, n.attach();
}
function gb(t, e, n) {
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
function Hh(t) {
  return !!(t != null && t.prototype);
}
function qc(t, e) {
  return typeof e == "function" ? (...n) => e(t, ...n) : e;
}
function mb(t, e = {}) {
  Hh(t) || pb(t, {
    ...e,
    onOpen: qc(t, e.onOpen)
  });
}
function yb(t, e = {}) {
  if (!Hh(t)) {
    Of(t, {
      ...e,
      onOpen: qc(t, e.onOpen)
    });
    return;
  }
  gb(t, "cutout_preview", (n) => {
    Of(n, {
      ...e,
      onOpen: qc(n, e.onOpen)
    });
  });
}
function bb(t = {}) {
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
  const y = Mi(o), p = typeof m == "function" ? !!m(n, r, y, c, String(u || "cutout_preview")) : !1, x = !p && !!c && !!hy(
    n,
    e,
    c,
    r,
    o,
    String(f || "balanced")
  );
  return !!p || !!x;
}
const rn = {
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
function Wf(t, e) {
  t.brushPresetId = e.id, t.stampKind = e.stampKind, t.hardness = e.hardness, t.spacing = e.spacing, t.flow = e.flow, t.opacity = e.opacity, t.opacityMode = e.opacityMode, t.aspect = e.aspect, t.angle = { ...e.angle }, t.velocityWidthFactor = e.velocityWidthFactor, t.chiselEdgeLift = e.chiselEdgeLift, t.chiselCenterDip = e.chiselCenterDip, t.chiselFiber = e.chiselFiber ?? 0, t.crayonGrain = e.crayonGrain ?? 0, t.scatter = e.scatter ? { ...e.scatter } : null;
}
function vb(t = 80, e = null, n = 8) {
  const r = [];
  let o = -1;
  const c = Math.max(1, Number(t || 80)), u = Math.max(1, Number(n || 8));
  function f(y) {
    if (r.splice(0, r.length), o = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((x) => {
      r.push(String(x || ""));
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
      const y = r.length, p = Math.max(0, y - u), x = o >= 0 ? Math.min(p, o) : p, N = r.slice(x), k = o < 0 ? -1 : Math.max(-1, Math.min(N.length - 1, o - x));
      return {
        version: 1,
        entries: N,
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
function _b() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function wb(t) {
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
function xb(t) {
  if (!t || typeof t != "object") return null;
  const e = String(t.kind || "").trim();
  if (e === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (e === "FRAME_LOCAL") {
    const n = String(t.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Sb(t, e) {
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
function xa(t, e, n = 1) {
  if (!Array.isArray(t)) return null;
  const r = [];
  for (const o of t) {
    const c = Sb(o, e);
    if (!c) return null;
    r.push(c);
  }
  return r.length >= n ? r : null;
}
function Nb(t, e, n, r) {
  if (!t || typeof t != "object") return null;
  const o = String(t.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const m = xa(t.points, e, 3);
    return m ? { geometryKind: o, points: m } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const c = xa(t.points, e, 1);
  if (!c) return null;
  const u = xa(t.rawPoints, e, 1), f = xa(t.processedPoints, e, 1);
  return {
    geometryKind: o,
    points: c,
    rawPoints: u || c.map((m) => ({ ...m })),
    processedPoints: f || c.map((m) => ({ ...m }))
  };
}
function Mb(t, e) {
  if (!t || typeof t != "object" || String(t.layerKind || "") !== e) return null;
  const n = xb(t.targetSpace);
  if (!n) return null;
  const r = String(t.toolKind || "").trim(), o = Nb(t.geometry, n, r, e === "paint");
  if (!o) return null;
  const c = ae(t.size, null), u = ae(t.opacity, null);
  if (c == null || u == null) return null;
  const f = String(t.id || "").trim(), m = String(t.actionGroupId || "").trim();
  if (!f || !m) return null;
  const y = ae(t.radiusValue, null), p = String(t.radiusModel || "").trim() || null;
  let x = null;
  if (e === "paint") {
    const N = t.color;
    if (!N || typeof N != "object") return null;
    x = {
      r: Math.max(0, Math.min(1, ae(N.r, 0))),
      g: Math.max(0, Math.min(1, ae(N.g, 0))),
      b: Math.max(0, Math.min(1, ae(N.b, 0))),
      a: Math.max(0, Math.min(1, ae(N.a, 1)))
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
    color: x,
    radiusModel: p,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: o
  };
}
function qf(t, e) {
  const n = { strokes: [] };
  if (!t || typeof t != "object" || !Array.isArray(t.strokes)) return n;
  for (const r of t.strokes) {
    const o = Mb(r, e);
    o && n.strokes.push(o);
  }
  return n;
}
function Pb(t) {
  if (!t || typeof t != "object") return null;
  const e = ae(t.u0, null), n = ae(t.v0, null), r = ae(t.u1, null), o = ae(t.v1, null);
  if (e == null || n == null || r == null || o == null) return null;
  const c = (f) => Math.max(0, Math.min(1, f)), u = { u0: c(e), v0: c(n), u1: c(r), v1: c(o) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function kb(t) {
  const e = t || {};
  return {
    du: ae(e.du, 0) ?? 0,
    dv: ae(e.dv, 0) ?? 0,
    rot_deg: ae(e.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, ae(e.scale, 1) ?? 1)
  };
}
function Cb(t, e) {
  if (!t || typeof t != "object" || String(t.type || "") !== "raster_frozen") return null;
  const n = String(t.id || "").trim();
  if (!n) return null;
  const r = String(t.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(t.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const c = Pb(t.bbox);
  return c ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, ae(t.z_index ?? t.zIndex, e) ?? e),
    locked: t.locked === !0,
    bbox: c,
    rasterDataUrl: o,
    transform: kb(t.transform)
  } : null;
}
function Ab(t) {
  if (!Array.isArray(t)) return [];
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t) {
    const o = Cb(r, e.length);
    !o || n.has(o.id) || (n.add(o.id), e.push(o));
  }
  return e;
}
function ko(t) {
  const e = _b();
  return !t || typeof t != "object" ? e : {
    version: 1,
    groups: wb(t.groups),
    paint: qf(t.paint, "paint"),
    mask: qf(t.mask, "mask"),
    raster_objects: Ab(t.raster_objects)
  };
}
const le = {
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
}, cs = {
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
    const e = t, n = Ti(() => {
      const r = { ...e.attrs };
      return e.tag === "button" && r.type == null && (r.type = e.type), e.label && (r["aria-label"] = e.label), e.tip && (r["data-tip"] = e.tip), e.pressed != null && (r["aria-pressed"] = e.pressed), r;
    });
    return (r, o) => (Ne(), Hi(f0(t.tag), sh({
      class: ["pano-btn pano-btn-icon", t.extraClass]
    }, n.value, { innerHTML: t.icon }), null, 16, ["class", "innerHTML"]));
  }
}, Ib = { class: "pano-floating-right" }, Eb = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (Ne(), He("div", Ib, [
      n[0] || (n[0] = ve("span", {
        class: "pano-fov-value",
        "data-fov-value": "",
        "aria-label": "Field of view"
      }, "100°", -1)),
      (Ne(!0), He(Ue, null, Ii(t.buttons, (r) => (Ne(), Hi(cs, {
        key: r.action,
        icon: r.icon,
        label: r.label,
        tip: r.tip,
        pressed: r.pressed,
        attrs: { "data-action": r.action }
      }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
    ]));
  }
}, Tb = {
  class: "pano-paint-dock is-hidden",
  "data-paint-dock": ""
}, Lb = ["data-paint-pane"], Db = {
  key: 0,
  class: "pano-paint-color-float",
  "data-paint-color-row": "",
  hidden: ""
}, Rb = ["data-paint-color-swatch", "aria-label"], Ob = ["data-paint-footer"], Fb = ["data-paint-group"], $b = ["hidden"], Hb = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] }
  },
  setup(t) {
    function e(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    return (n, r) => (Ne(), He("div", Tb, [
      (Ne(!0), He(Ue, null, Ii(t.panes, (o) => (Ne(), He("div", {
        key: o.key,
        class: "pano-paint-pane",
        "data-paint-pane": o.key
      }, [
        o.showColorFloat ? (Ne(), He("div", Db, [
          (Ne(!0), He(Ue, null, Ii(t.paintSwatches, (c) => (Ne(), He("button", {
            key: c.id,
            class: "pano-paint-color-dot",
            type: "button",
            "data-paint-color-swatch": c.id,
            "aria-label": c.label,
            style: ms(e(c))
          }, null, 12, Rb))), 128)),
          r[0] || (r[0] = j0('<button class="pano-paint-color-dot pano-paint-color-dot-rainbow" type="button" data-paint-color-custom aria-label="Custom color"></button><div class="pano-paint-color-pop" data-paint-color-pop hidden><div class="pano-paint-color-pop-head"><span class="pano-paint-color-preview" data-paint-color-preview></span><span class="pano-paint-color-pop-label">Custom Color</span></div><div class="pano-paint-color-field"><div class="pano-paint-sv-panel" data-paint-color-sv><div class="pano-paint-sv-cursor" data-paint-color-sv-cursor></div></div><div class="pano-paint-hue-strip" data-paint-hue-strip><div class="pano-paint-hue-handle" data-paint-hue-handle></div></div></div><label class="pano-paint-color-field"><span>Opacity</span><div class="pano-paint-alpha-wrap"><input type="range" min="0" max="100" step="1" value="100" data-paint-alpha-slider><span data-paint-alpha-value>100%</span></div></label><div class="pano-paint-color-history" data-paint-color-history-wrap><div class="pano-paint-color-history-list" data-paint-color-history></div></div></div>', 2))
        ])) : Ra("", !0),
        ve("div", {
          class: "pano-paint-footer",
          "data-paint-footer": o.footer
        }, [
          ve("div", {
            class: "pano-paint-footer-group",
            "data-paint-group": o.group
          }, [
            (Ne(!0), He(Ue, null, Ii(o.tools, (c) => (Ne(), Hi(cs, {
              key: `${o.key}-${c.key}`,
              icon: c.icon,
              label: c.label,
              tip: c.tip,
              attrs: { [c.attr]: c.key }
            }, null, 8, ["icon", "label", "tip", "attrs"]))), 128))
          ], 8, Fb),
          r[1] || (r[1] = ve("div", {
            class: "pano-paint-size-row",
            "data-paint-size-row": "",
            hidden: ""
          }, [
            ve("input", {
              class: "pano-paint-size-slider",
              "data-paint-size-slider": "",
              type: "range",
              min: "1",
              max: "120",
              step: "1",
              value: "10"
            }),
            ve("span", {
              class: "pano-paint-size-value",
              "data-paint-size-value": ""
            }, "10")
          ], -1)),
          ve("div", {
            class: "pano-paint-clear-row",
            "data-paint-clear-row": "",
            hidden: o.clearHidden
          }, [
            tn(cs, {
              icon: fl(le).clear,
              label: o.clearLabel,
              tip: o.clearTip,
              "extra-class": "pano-paint-layer-clear",
              attrs: { "data-paint-layer-clear-current": o.clearTarget }
            }, null, 8, ["icon", "label", "tip", "attrs"])
          ], 8, $b)
        ], 8, Ob)
      ], 8, Lb))), 128))
    ]));
  }
}, Vb = {
  class: "pano-side",
  "data-side": ""
}, zb = { class: "pano-side-head" }, Ub = ["innerHTML"], jb = {
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
    const r = Ti(() => `<span class="pano-side-title-icon" aria-hidden="true">${le.globe}</span><span>${n(e.nodeTitle)}</span>`);
    return (o, c) => (Ne(), He("div", Vb, [
      ve("div", zb, [
        ve("div", {
          class: "pano-side-title",
          innerHTML: r.value
        }, null, 8, Ub),
        c[0] || (c[0] = ve("div", { class: "pano-side-actions" }, null, -1))
      ]),
      c[1] || (c[1] = ve("div", { class: "pano-divider" }, null, -1))
    ]));
  }
}, Bb = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, Gb = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (Ne(), He("div", Bb, [
      (Ne(!0), He(Ue, null, Ii(t.buttons, (r) => (Ne(), Hi(cs, {
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
}, Kb = { class: "pano-floating-top" }, Wb = ["data-view-count"], qb = ["data-view", "aria-pressed", "aria-label"], Yb = ["innerHTML"], Xb = { class: "label" }, Zb = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(t) {
    return (e, n) => (Ne(), He("div", Kb, [
      ve("div", {
        class: "pano-view-toggle",
        "data-selected": "pano",
        "data-view-count": String(t.buttons.length)
      }, [
        (Ne(!0), He(Ue, null, Ii(t.buttons, (r) => (Ne(), He("button", {
          key: r.key,
          class: ys(["pano-view-btn", r.extraClass]),
          "data-view": r.key,
          "aria-pressed": r.pressed,
          "aria-label": r.label
        }, [
          ve("span", {
            innerHTML: r.icon
          }, null, 8, Yb),
          ve("span", Xb, ld(r.label), 1)
        ], 10, qb))), 128))
      ], 8, Wb)
    ]));
  }
};
function Vh(t = "stickers") {
  const e = String(t || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: le.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: le.unwrap, pressed: "false", extraClass: "" },
      ...e ? [{ key: "frame", label: "Frame", icon: le.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: le.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: le.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: le.circle_dashed_tool, pressed: "false" },
      ...e ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: le.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: le.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: le.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: le.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: le.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: le.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: le.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: le.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: le.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: le.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: le.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: le.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: le.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: le.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: le.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: le.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: le.lasso_tool }
        ]
      }
    ]
  };
}
const Jb = ["aria-label"], Qb = { class: "pano-stage-wrap" }, tv = ["innerHTML"], ev = {
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
    const f = /* @__PURE__ */ Rm(null), m = Ti(() => n.readOnly === !0), y = Ti(() => n.shellPreset || Vh(n.type)), p = Ti(() => {
      var V;
      const L = Array.isArray((V = y.value) == null ? void 0 : V.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return m.value && L.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: le.fullscreen
      }), L;
    });
    function x() {
      const L = f.value;
      return L ? Array.from(L.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((V) => V instanceof HTMLElement ? !V.hidden && V.tabIndex >= 0 && V.offsetParent !== null : !1) : [];
    }
    function N() {
      var R;
      const V = x()[0] || f.value;
      (R = V == null ? void 0 : V.focus) == null || R.call(V);
    }
    function k() {
      var L;
      u != null && u.isConnected && ((L = u.focus) == null || L.call(u)), u = null;
    }
    function I(L) {
      var V, R, P, J;
      if (!L.defaultPrevented) {
        if (L.key === "Tab") {
          const tt = x();
          if (!tt.length) {
            L.preventDefault(), (R = (V = f.value) == null ? void 0 : V.focus) == null || R.call(V);
            return;
          }
          const rt = tt[0], bt = tt[tt.length - 1], H = document.activeElement;
          if (L.shiftKey) {
            (H === rt || H === f.value || !((P = f.value) != null && P.contains(H))) && (L.preventDefault(), bt.focus());
            return;
          }
          (H === bt || !((J = f.value) != null && J.contains(H))) && (L.preventDefault(), rt.focus());
          return;
        }
        L.key === "Escape" && r("close");
      }
    }
    function C() {
      c || (o = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function F() {
      c && (document.body.style.overflow = o, c = !1);
    }
    function $(L) {
      document.removeEventListener("keydown", I), L ? (u || (u = document.activeElement), C(), document.addEventListener("keydown", I), kd(() => {
        N();
      })) : (F(), k());
    }
    return Fd(() => {
      $(n.open);
    }), $d(() => {
      F(), document.removeEventListener("keydown", I), k();
    }), Ta(() => n.open, (L) => {
      $(L);
    }), (L, V) => t.open ? (Ne(), He("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: V[0] || (V[0] = N1((R) => r("close"), ["self"]))
    }, [
      ve("section", {
        ref_key: "modalRef",
        ref: f,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": t.nodeTitle,
        tabindex: "-1"
      }, [
        ve("div", Qb, [
          V[1] || (V[1] = ve("canvas", {
            class: "pano-stage pano-stage-bg",
            "data-stage-background": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          V[2] || (V[2] = ve("canvas", {
            class: "pano-stage pano-stage-overlay",
            "data-stage-overlay": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          V[3] || (V[3] = ve("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            ve("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          m.value ? Ra("", !0) : (Ne(), He(Ue, { key: 0 }, [
            tn(Gb, {
              buttons: y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            tn(Hb, {
              "paint-swatches": t.paintSwatches,
              panes: y.value.paintPanes || []
            }, null, 8, ["paint-swatches", "panes"])
          ], 64)),
          tn(Zb, {
            buttons: y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          tn(Eb, { buttons: p.value }, null, 8, ["buttons"]),
          V[4] || (V[4] = ve("div", {
            class: "pano-selection-menu",
            "data-selection-menu": ""
          }, null, -1)),
          ve("button", {
            class: "pano-btn pano-btn-icon pano-output-preview-toggle",
            "data-action": "toggle-output-preview-size",
            "aria-label": "Expand Preview",
            "data-tip": "Expand preview",
            style: { display: "none" },
            innerHTML: fl(le).fullscreen
          }, null, 8, tv),
          V[5] || (V[5] = ve("div", {
            class: "pano-tooltip",
            "data-tooltip": ""
          }, null, -1))
        ]),
        t.hideSidebar ? Ra("", !0) : (Ne(), Hi(jb, {
          key: 0,
          "node-title": t.nodeTitle
        }, null, 8, ["node-title"]))
      ], 8, Jb)
    ])) : Ra("", !0);
  }
}, Yc = "state_json", Or = "sticker_image_1", Sc = "external_image", Nc = "pano_sticker_input_images", Ua = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Fe = Math.PI / 180, Vr = 180 / Math.PI, ls = 24, nv = 4, rv = 4, yo = /* @__PURE__ */ new Map(), Xc = /* @__PURE__ */ new Map(), Dt = {
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
function iv(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}
function ov(t) {
  return 1 - Math.pow(1 - t, 3);
}
function av(t) {
  return t * t * t;
}
function Kn(t, e, n) {
  return { x: t, y: e, z: n };
}
function Sa(t, e) {
  return Kn(t.x + e.x, t.y + e.y, t.z + e.z);
}
function Na(t, e) {
  return Kn(t.x * e, t.y * e, t.z * e);
}
function xn(t, e) {
  return t.x * e.x + t.y * e.y + t.z * e.z;
}
function Ma(t, e) {
  return Kn(
    t.y * e.z - t.z * e.y,
    t.z * e.x - t.x * e.z,
    t.x * e.y - t.y * e.x
  );
}
function mi(t) {
  const e = Math.hypot(t.x, t.y, t.z) || 1e-8;
  return Kn(t.x / e, t.y / e, t.z / e);
}
function $n(t, e) {
  const n = t * Fe, r = e * Fe, o = Math.cos(r);
  return Kn(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Pa(t) {
  return {
    yaw: $e(Math.atan2(t.x, t.z) * Vr),
    pitch: j(Math.asin(j(t.y, -1, 1)) * Vr, -90, 90)
  };
}
function rr(t, e) {
  let n = !1;
  for (let r = 0, o = e.length - 1; r < e.length; o = r++) {
    const c = e[r].x, u = e[r].y, f = e[o].x, m = e[o].y;
    u > t.y != m > t.y && t.x < (f - c) * (t.y - u) / (m - u || 1e-6) + c && (n = !n);
  }
  return n;
}
function Hr(t, e) {
  const n = t.x - e.x, r = t.y - e.y;
  return n * n + r * r;
}
function Mc(t, e, n) {
  const r = Number(n.x || 0) - Number(e.x || 0), o = Number(n.y || 0) - Number(e.y || 0), c = Number(t.x || 0) - Number(e.x || 0), u = Number(t.y || 0) - Number(e.y || 0), f = r * r + o * o;
  if (f <= 1e-6) return Hr(t, e);
  const m = j((c * r + u * o) / f, 0, 1), y = Number(e.x || 0) + r * m, p = Number(e.y || 0) + o * m, x = Number(t.x || 0) - y, N = Number(t.y || 0) - p;
  return x * x + N * N;
}
function Sn(t, e, n) {
  return t + (e - t) * n;
}
function Nn(t, e = null) {
  const n = e == null ? Number((t == null ? void 0 : t.a) ?? 1) : Number(e);
  return `rgba(${Math.round(j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1) * 255)}, ${Math.round(j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1) * 255)}, ${Math.round(j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1) * 255)}, ${j(n, 0, 1)})`;
}
function sv(t) {
  return `url("data:image/svg+xml,${encodeURIComponent(t)}")`;
}
let ka = { fillStyle: "", url: "" };
function cv(t, e, n) {
  if (ka.url && ka.fillStyle === String(t || ""))
    return ka.url;
  const r = sv(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ls}" height="${ls}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${e}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${t}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return ka = { fillStyle: String(t || ""), url: r }, r;
}
function ja(t, e, n = 0.015) {
  return !t || !e ? !1 : Math.abs(Number(t.r ?? 0) - Number(e.r ?? 0)) <= n && Math.abs(Number(t.g ?? 0) - Number(e.g ?? 0)) <= n && Math.abs(Number(t.b ?? 0) - Number(e.b ?? 0)) <= n && Math.abs(Number(t.a ?? 1) - Number(e.a ?? 1)) <= n;
}
function fn(t) {
  return {
    r: j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1),
    g: j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1),
    b: j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1),
    a: j(Number((t == null ? void 0 : t.a) ?? 1), 0, 1)
  };
}
function on(t) {
  return t == null ? t : JSON.parse(JSON.stringify(t));
}
function lv(t) {
  return Ua.some((e) => ja(t, e.color));
}
function Pc(t, e, n) {
  const r = (Number(t) % 1 + 1) % 1, o = j(Number(e), 0, 1), c = j(Number(n), 0, 1);
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
  const e = j(Number((t == null ? void 0 : t.r) ?? 0), 0, 1), n = j(Number((t == null ? void 0 : t.g) ?? 0), 0, 1), r = j(Number((t == null ? void 0 : t.b) ?? 0), 0, 1), o = Math.max(e, n, r), c = Math.min(e, n, r), u = o - c;
  let f = 0;
  u > 1e-6 && (o === e ? f = ((n - r) / u + (n < r ? 6 : 0)) / 6 : o === n ? f = ((r - e) / u + 2) / 6 : f = ((e - n) / u + 4) / 6);
  const m = o <= 1e-6 ? 0 : u / o;
  return { h: f, s: m, v: o };
}
function kc(t) {
  const e = Number(t);
  return Number.isFinite(e) ? Number(e.toFixed(3)).toString() : "0";
}
function Yf(t, e = 0) {
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : Number(e);
}
function zh(t, e) {
  const n = Yf(t, 1), r = Yf(e, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, c = Math.max(1, Math.round(n * o)), u = Math.max(1, Math.round(r * o)), f = (x, N) => N ? f(N, x % N) : x, m = f(c, u) || 1, y = Math.max(1, Math.round(c / m)), p = Math.max(1, Math.round(u / m));
  return `${y}:${p}`;
}
function Zc(t) {
  const e = j(Number((t == null ? void 0 : t.hFOV_deg) || 90), 1, 179) * Fe, n = j(Number((t == null ? void 0 : t.vFOV_deg) || 60), 1, 179) * Fe;
  return Math.max(0.05, Math.min(20, Math.tan(e * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function uv(t) {
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
function zr(t) {
  const e = Zc(t);
  return uv(e) || zh(e, 1);
}
function fv(t) {
  if (!t || typeof t != "object") return t;
  const e = { ...t, locked: t.locked === !0 };
  return delete e.out_w, delete e.out_h, e.aspect_id = zr(e), e;
}
function yi(t) {
  if (!t || typeof t != "object") return "1:1";
  const e = String(t.aspect_id || "").trim();
  return /^\d+:\d+$/.test(e) ? e : zr(t);
}
function dv() {
  if (document.getElementById("pano-suite-style-link")) return;
  const t = document.createElement("link");
  t.id = "pano-suite-style-link", t.rel = "stylesheet", t.href = new URL("./pano_editor.css", import.meta.url).toString(), document.head.appendChild(t);
}
const Uh = "pano_suite.ui_settings.v1", jh = "pano_suite.node_grid_visibility.v1";
let xi = null, Hn = null, Ca = { text: null, parsed: null };
function Co(t) {
  const e = t && typeof t == "object" ? t : {}, n = String(e.preview_quality || "balanced");
  return {
    invert_view_x: !!e.invert_view_x,
    invert_view_y: !!e.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function hv() {
  var t;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Uh)) || "").trim();
    if (!e) return xi ? Co(xi) : null;
    const n = JSON.parse(e), r = Co(n);
    return xi = r, r;
  } catch {
    return xi ? Co(xi) : null;
  }
}
function pv(t) {
  var n;
  const e = Co(t);
  xi = e;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Uh, JSON.stringify(e));
  } catch {
  }
  return e;
}
function Bh() {
  var t;
  if (Hn && typeof Hn == "object")
    return Hn;
  try {
    const e = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(jh)) || "").trim();
    if (!e)
      return Hn = {}, Hn;
    const n = JSON.parse(e);
    return Hn = n && typeof n == "object" ? n : {}, Hn;
  } catch {
    return Hn = {}, Hn;
  }
}
function gv(t, e = !0) {
  const n = String(t ?? "").trim();
  if (!n) return !!e;
  const o = Bh()[n];
  return typeof o == "boolean" ? o : !!e;
}
function mv(t, e) {
  var o;
  const n = String(t ?? "").trim();
  if (!n) return;
  const r = Bh();
  r[n] = !!e, Hn = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(jh, JSON.stringify(r));
  } catch {
  }
}
function yv(t) {
  if (!t || typeof t != "object") return {};
  const e = {};
  return Object.entries(t).forEach(([n, r]) => {
    e[n] = r && typeof r == "object" ? { ...r } : r;
  }), e;
}
function bv(t) {
  return Array.isArray(t) ? t.map((e) => {
    if (!e || typeof e != "object") return e;
    const n = { ...e };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function vv(t) {
  var r, o;
  const e = Array.isArray((r = t == null ? void 0 : t.paint) == null ? void 0 : r.strokes) ? t.paint.strokes.length : 0, n = Array.isArray((o = t == null ? void 0 : t.mask) == null ? void 0 : o.strokes) ? t.mask.strokes.length : 0;
  return { paintCount: e, maskCount: n };
}
function Xf(t) {
  const { paintCount: e, maskCount: n } = vv(t), r = Array.isArray(t == null ? void 0 : t.raster_objects) ? t.raster_objects : [];
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
function bi(t) {
  return `${t}_${Math.random().toString(16).slice(2, 10)}`;
}
function Zf(t) {
  if (!t || typeof t != "object") return t;
  const e = JSON.parse(JSON.stringify(t));
  return delete e.editor_history, delete e.painting_layer, e;
}
function _v(t) {
  return Array.isArray(t) ? t.map((e) => !e || typeof e != "object" ? e : fv(e)) : [];
}
function wv(t, e = 2048, n = "#00ff00") {
  const r = hv(), o = {
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
    if (Ca.text === c ? u = Ca.parsed : (u = JSON.parse(c), Ca = { text: c, parsed: u }), !u || typeof u != "object" || Array.isArray(u)) return o;
    const f = {
      ...o,
      ...u,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: yv(u.assets),
      stickers: bv(u.stickers),
      shots: _v(u.shots),
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
    return Ca = { text: c, parsed: null }, o;
  }
}
function Pi(t, e) {
  var n;
  return ((n = t.widgets) == null ? void 0 : n.find((r) => r.name === e)) || null;
}
function Aa(t) {
  return String(t ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
}
function xv(t, e) {
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
function Sv(t, e) {
  (Array.isArray(t == null ? void 0 : t.widgets) ? t.widgets : []).forEach((r) => {
    var c, u;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === e || o.trim() === e || o.toLowerCase().includes(String(e).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (c = r.inputEl) != null && c.style && (r.inputEl.style.display = "none"), (u = r.parentEl) != null && u.style && (r.parentEl.style.display = "none")));
  });
}
function Jc(t, e, n) {
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
function Jf(t, e = 2048) {
  if (typeof t == "number" && Number.isFinite(t)) return Math.round(t);
  const n = String(t ?? "").trim();
  if (!n) return e;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : e;
}
function Gh(t, e) {
  if (!t || e == null) return null;
  const n = t.links;
  return n ? n instanceof Map ? n.get(e) || n.get(Number(e)) || n.get(String(e)) || null : n[e] || n[String(e)] || null : null;
}
function Nv(t, e) {
  var n, r;
  return !t || e == null ? null : typeof t.getNodeById == "function" ? t.getNodeById(e) : ((n = t._nodes_by_id) == null ? void 0 : n[e]) || ((r = t._nodes_by_id) == null ? void 0 : r[String(e)]) || null;
}
function Kh(t) {
  return t ? typeof t == "object" && !Array.isArray(t) ? {
    originId: t.origin_id ?? null,
    originSlot: Number(t.origin_slot ?? 0)
  } : Array.isArray(t) ? {
    originId: t[1] ?? null,
    originSlot: Number(t[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Mv(t, e, n = null) {
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
  return !r && n != null && (r = Nv(t == null ? void 0 : t.graph, n)), r;
}
function us(t) {
  var o;
  if (!t || typeof t != "object") return "";
  const e = String(t.filename || "");
  if (!e) return "";
  const n = new URLSearchParams();
  n.set("filename", e), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const r = `/view?${n.toString()}`;
  return typeof ((o = Qe) == null ? void 0 : o.apiURL) == "function" ? Qe.apiURL(r) : r;
}
function Pv(t) {
  const e = String(t || "").trim();
  return e ? /^https?:\/\//i.test(e) || e.startsWith("/") || e.startsWith("blob:") || e.startsWith("data:") : !1;
}
function kv(t) {
  const n = String(t || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), c = r.join("/");
  return { filename: o, subfolder: c };
}
function Cv(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  return t.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), e.push(o));
  }), e;
}
function Wh(t) {
  const e = String(t || "").trim();
  if (!e) return [];
  if (Pv(e)) return [e];
  const { filename: n, subfolder: r } = kv(e);
  if (!n) return [e];
  const o = ["temp", "output", "input"].map((c) => us({
    filename: n,
    subfolder: r,
    type: c
  }));
  return Cv([...o, e]);
}
function Av(t) {
  if (!t || typeof t != "object") return "";
  const e = String(t.type || "").trim().toLowerCase();
  if (e === "dataurl") return String(t.value || "");
  if (e === "comfy_image") {
    const n = String(t.filename || "").trim();
    return n ? us({
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
function $i(t) {
  if (!t) return "";
  if (typeof t == "string") return String(t || "").trim();
  if (Array.isArray(t)) {
    if (t.length === 0) return "";
    if (t.length === 1) return $i(t[0]);
    const e = String(t[0] || "").trim();
    if (e) {
      const n = String(t[1] || "").trim(), r = String(t[2] || "output").trim() || "output";
      return us({ filename: e, subfolder: n, type: r });
    }
    for (const n of t) {
      const r = $i(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (t == null ? void 0 : t.src) == "string" && t.src ? t.src : typeof (t == null ? void 0 : t.url) == "string" && t.url ? t.url : us(t);
}
function Iv(t, e = -1) {
  var o;
  const n = [];
  Array.isArray(t == null ? void 0 : t.images) && t.images.length && n.push(t.images), Array.isArray((o = t == null ? void 0 : t.ui) == null ? void 0 : o.images) && t.ui.images.length && n.push(t.ui.images);
  const r = [];
  for (const c of n)
    !Array.isArray(c) || !c.length || (e >= 0 && e < c.length && r.push(c[e]), r.push(...c));
  return r;
}
function Cc(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  for (const r of t || []) {
    const o = $i(r);
    !o || n.has(o) || (n.add(o), e.push(o));
  }
  return e;
}
function Ev(t, e, n, r = null) {
  var x;
  const o = Ao(t == null ? void 0 : t.id), c = Array.isArray((x = o == null ? void 0 : o.ui) == null ? void 0 : x[e]) ? o.ui[e] : Array.isArray(o == null ? void 0 : o[e]) ? o[e] : [], u = Array.isArray(c) && c.length ? c[0] : null, f = $i(u);
  if (!f) return null;
  const m = `__ui__${e}`, y = n.get(m);
  if (y && y.__panoSrc === f) return y;
  const p = new Image();
  return p.__panoSrc = f, p.onload = () => {
    typeof r == "function" && r(p);
  }, p.src = f, n.set(m, p), p;
}
function Tv(t, e) {
  var L, V;
  const n = String(e || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const r = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs : [], o = r.findIndex((R) => String((R == null ? void 0 : R.name) || "") === n);
  if (o < 0) return { src: "", sourceType: "", inputName: n };
  const c = r[o], u = c == null ? void 0 : c.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = Gh(t.graph, u), { originId: m, originSlot: y } = Kh(f);
  if (m == null) return { src: "", sourceType: "", inputName: n };
  const p = Mv(t, o, m), x = Number(y || 0);
  if (!p) return { src: "", sourceType: "", inputName: n };
  let N = [];
  try {
    N = typeof ((L = dn) == null ? void 0 : L.getNodeImageUrls) == "function" ? dn.getNodeImageUrls(p) || [] : [];
  } catch {
    N = [];
  }
  if (Array.isArray(N) && N.length) {
    const R = [];
    x >= 0 && x < N.length && R.push(N[x]), R.push(...N);
    const P = Cc(R);
    if (P.length) return { src: P[0], srcCandidates: P, sourceType: "appNodeImageUrls", inputName: n };
  }
  const k = Ao((p == null ? void 0 : p.id) ?? m), I = Iv(k, x), C = Cc(I);
  if (C.length) return { src: C[0], srcCandidates: C, sourceType: "nodeOutputs", inputName: n };
  const F = Array.isArray(p == null ? void 0 : p.imgs) ? p.imgs : [];
  if (F.length) {
    const R = [];
    x >= 0 && x < F.length && R.push(F[x]), R.push(...F);
    const P = Cc(R);
    if (P.length) return { src: P[0], srcCandidates: P, sourceType: "nodeImgs", inputName: n };
  }
  const $ = (V = p == null ? void 0 : p.widgets) == null ? void 0 : V.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
  if ($) {
    let R = $i($.value);
    if (R && !R.includes("/") && !R.includes(":") && (p.comfyClass === "LoadImage" || p.type === "LoadImage") && (R = Qe.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`)), R) return { src: R, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function Lv(t, e, n, r = null) {
  const o = String(n || "").trim();
  if (!o) return null;
  const c = Wh(o);
  if (!c.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(e || "image"), f = t.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === o && f.img) return f.img;
  const m = new Image(), y = { srcRaw: o, resolvedSrc: "", img: m };
  t.__panoLinkedInputImageCache.set(u, y);
  let p = -1;
  const x = () => {
    var k, I;
    if (p += 1, p >= c.length) {
      try {
        (I = (k = t.__panoLinkedInputImageCache) == null ? void 0 : k.delete) == null || I.call(k, u);
      } catch {
      }
      return;
    }
    const N = c[p];
    y.resolvedSrc = N, m.src = N;
  };
  return m.onload = () => {
    var N;
    r == null || r(), (N = t.setDirtyCanvas) == null || N.call(t, !0, !0);
  }, m.onerror = () => {
    var N, k;
    if (p + 1 < c.length) {
      x();
      return;
    }
    try {
      (k = (N = t.__panoLinkedInputImageCache) == null ? void 0 : N.delete) == null || k.call(N, u);
    } catch {
    }
  }, x(), m;
}
function Dv(t, e, n, r = null) {
  const o = Array.isArray(n) ? n.map((I) => String(I || "").trim()).filter(Boolean) : [];
  if (!o.length) return null;
  t.__panoLinkedInputImageCache || (t.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = String(e || "image"), u = o.join(`
`), f = t.__panoLinkedInputImageCache.get(c);
  if (f && f.srcRaw === u && f.img) return f.img;
  const m = [], y = /* @__PURE__ */ new Set();
  if (o.forEach((I) => {
    Wh(I).forEach((C) => {
      const F = String(C || "").trim();
      !F || y.has(F) || (y.add(F), m.push(F));
    });
  }), !m.length) return null;
  const p = new Image(), x = { srcRaw: u, resolvedSrc: "", img: p };
  t.__panoLinkedInputImageCache.set(c, x);
  let N = -1;
  const k = () => {
    var C, F;
    if (N += 1, N >= m.length) {
      try {
        (F = (C = t.__panoLinkedInputImageCache) == null ? void 0 : C.delete) == null || F.call(C, c);
      } catch {
      }
      return;
    }
    const I = m[N];
    x.resolvedSrc = I, p.src = I;
  };
  return p.onload = () => {
    var I;
    r == null || r(), (I = t.setDirtyCanvas) == null || I.call(t, !0, !0);
  }, p.onerror = () => {
    var I, C;
    if (N + 1 < m.length) {
      k();
      return;
    }
    try {
      (C = (I = t.__panoLinkedInputImageCache) == null ? void 0 : I.delete) == null || C.call(I, c);
    } catch {
    }
  }, k(), p;
}
function qh(t, e = []) {
  const n = Array.isArray(e) ? e : [e];
  for (const r of n) {
    const o = Tv(t, r);
    if (String((o == null ? void 0 : o.src) || "").trim()) return o;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Qf(t, e = [], n = null, r = "") {
  const o = Array.isArray(e) ? e : [e], c = qh(t, o), u = String(r || o.join("|") || "image_exact"), f = Array.isArray(c == null ? void 0 : c.srcCandidates) ? c.srcCandidates : [];
  if (f.length) return Dv(t, u, f, n);
  const m = String((c == null ? void 0 : c.src) || "").trim();
  return m ? Lv(t, u, m, n) : null;
}
function Io(t, e, n = {}) {
  var aa, Au, Iu, sa, Eu, Tu, ca, Lu;
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, c = r, u = xv(t, e);
  dv();
  const f = Pi(t, "output_preset"), m = Pi(t, "bg_color"), y = Pi(t, Yc), p = wv(
    String((y == null ? void 0 : y.value) || ""),
    Jf(f == null ? void 0 : f.value, 2048),
    String((m == null ? void 0 : m.value) || "#00ff00")
  );
  t.__panoLiveStateOverride = JSON.stringify(p), (Au = (aa = t.__panoDomPreview) == null ? void 0 : aa.requestDraw) == null || Au.call(aa), (Iu = t.setDirtyCanvas) == null || Iu.call(t, !0, !0), (Eu = (sa = t.graph) == null ? void 0 : sa.setDirtyCanvas) == null || Eu.call(sa, !0, !0), (Lu = (ca = (Tu = dn) == null ? void 0 : Tu.canvas) == null ? void 0 : ca.setDirty) == null || Lu.call(ca, !0, !0), e === "cutout" && (p.shots = Array.isArray(p.shots) ? p.shots.slice(0, 1) : [], p.shots.length || (p.active.selected_shot_id = null));
  const x = document.createElement("div");
  document.body.appendChild(x);
  const N = k1(ev, {
    open: !0,
    type: e,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: u,
    shellPreset: Vh(e),
    paintSwatches: Ua.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Nn(i.color, 1)
    })),
    onClose: () => li()
  });
  try {
    N.mount(x);
  } catch (i) {
    try {
      N.unmount();
    } catch {
    }
    throw x.remove(), i;
  }
  const k = x.querySelector(".pano-modal-overlay"), I = x.querySelector(".pano-modal"), C = I == null ? void 0 : I.querySelector("[data-stage-overlay]"), F = I == null ? void 0 : I.querySelector("[data-stage-background]"), $ = I == null ? void 0 : I.querySelector(".pano-stage-wrap");
  if (!k || !I || !C || !F || !$)
    throw N.unmount(), x.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const L = document.createElement("div");
  L.setAttribute("aria-hidden", "true"), L.style.position = "absolute", L.style.left = "0", L.style.top = "0", L.style.pointerEvents = "none", L.style.zIndex = "12", L.style.display = "none", L.style.willChange = "transform,width,height,background,border-radius", $ == null || $.appendChild(L);
  const V = document.createElement("div");
  V.className = "pano-paint-size-preview", V.setAttribute("aria-hidden", "true");
  const R = document.createElement("div");
  R.className = "pano-paint-size-preview-sample", V.appendChild(R), $ == null || $.appendChild(V);
  const P = C.getContext("2d"), J = dh({ targetCanvas: F }), tt = I.querySelector("[data-side]"), rt = I.querySelectorAll("[data-view]"), bt = I.querySelector(".pano-view-toggle"), H = I.querySelector("[data-fov-value]"), Y = I.querySelector("[data-selection-menu]"), lt = I.querySelector("[data-action='toggle-output-preview-size']"), ft = I.querySelector("[data-tool-ui-action='add-or-look']"), et = I.querySelector("[data-view='frame']"), G = I.querySelector("[data-action='toggle-fullscreen']"), it = I.querySelector("[data-tooltip]"), ot = I.querySelector("[data-tool-rail]"), ut = I.querySelector("[data-paint-dock]"), kt = Array.from(I.querySelectorAll("[data-paint-pane]")), Et = I.querySelector("[data-paint-color-row]"), X = I.querySelector("[data-paint-color-pop]"), Nt = I.querySelector("[data-paint-color-preview]"), Bt = I.querySelector("[data-paint-color-sv]"), pe = I.querySelector("[data-paint-color-sv-cursor]"), ge = I.querySelector("[data-paint-hue-strip]"), B = I.querySelector("[data-paint-hue-handle]"), Mt = I.querySelector("[data-paint-alpha-slider]"), xt = I.querySelector("[data-paint-alpha-value]"), $t = I.querySelector("[data-paint-color-history-wrap]"), Rt = I.querySelector("[data-paint-color-history]"), Vt = Array.from(I.querySelectorAll("[data-paint-size-row]")), A = Array.from(I.querySelectorAll("[data-paint-clear-row]")), D = Array.from(I.querySelectorAll("[data-paint-layer-clear-current]")), z = Array.from(I.querySelectorAll("[data-paint-size-slider]")), Z = Array.from(I.querySelectorAll("[data-paint-size-value]"));
  let q = 0, W = 0;
  e === "cutout" && (C.style.opacity = "0"), o && (tt == null || tt.remove(), I.classList.add("pano-modal-readonly"));
  function st(i) {
    ut && ut.classList.toggle("is-hidden", !i);
  }
  const yt = () => {
    if (!d.customPaintSessionStart) return;
    if (ja(d.customPaintSessionStart, d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    if (lv(d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    const i = [
      fn(d.customPaintColor),
      ...d.customPaintHistory.filter((a) => !ja(a, d.customPaintColor))
    ];
    d.customPaintHistory = i.slice(0, 8), d.customPaintSessionStart = null;
  }, dt = (i = !1) => {
    !X || X.hidden || (i ? yt() : d.customPaintSessionStart = null, X.hidden = !0);
  }, nt = () => {
    X && (X.hidden && (d.customPaintSessionStart = fn(d.customPaintColor)), X.hidden = !1);
  };
  I.addEventListener("pointerdown", (i) => {
    ra(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (I.querySelectorAll(".pano-picker-pop").forEach((a) => {
      a.hidden = !0;
    }), dt(!0), e === "cutout" && d.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (d.cutoutAspectOpen = !1, d.menuMode = "", d.menuSize.measured = !1, qt(), pt())));
  });
  const It = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, wt = JSON.stringify(Zf(p)), d = {
    mode: "pano",
    selectedId: It,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    historyController: vb(80, { entries: [wt], index: 0 }),
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
    showGrid: gv(t == null ? void 0 : t.id, !0),
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
  e === "stickers" && (d.selectedId = null, p.active.selected_sticker_id = null), d.selectedIds = d.selectedId ? [d.selectedId] : [];
  const Ct = /* @__PURE__ */ new Map(), Wt = /* @__PURE__ */ new Map(), Yt = /* @__PURE__ */ new Map(), Xt = /* @__PURE__ */ new Map(), Pt = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: e === "cutout" ? 2 : 0,
    hasPresentedFrame: e !== "cutout",
    backgroundDirty: !0,
    backgroundWasVisible: !1
  }, ee = {
    timer: 0,
    target: null
  }, Me = {
    active: !1,
    depth: 0
  };
  function nn(i) {
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
    return a.files && a.files.length ? Array.from(a.files).some((s) => ta(s)) : !1;
  }
  function cn(i) {
    const a = !!i;
    Me.active !== a && (Me.active = a, $.classList.toggle("drop-active", a));
  }
  function Jr(i, a, s = d.viewFov, l = 140, h = 620) {
    const g = ry(d.viewYaw, i), _ = a - d.viewPitch, b = s - d.viewFov, v = Math.hypot(g, _) + Math.abs(b) * 0.6, S = Math.round(j(l + v * 2.2, l, h));
    d.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: S,
      startYaw: d.viewYaw,
      startPitch: d.viewPitch,
      startFov: d.viewFov,
      targetPitch: a,
      targetFov: s,
      deltaYaw: g
    }, d.viewInertia.active = !1, d.viewInertia.vx = 0, d.viewInertia.vy = 0, pt();
  }
  wp();
  function Pe() {
    return e === "stickers" ? p.stickers : p.shots;
  }
  function ce() {
    const i = p.painting || (p.painting = ko(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function Vo(i = "paint") {
    var h, g;
    const a = Array.isArray((g = (h = p.painting) == null ? void 0 : h[i]) == null ? void 0 : g.strokes) ? p.painting[i].strokes : [], s = [], l = /* @__PURE__ */ new Set();
    for (const _ of a) {
      const b = String((_ == null ? void 0 : _.actionGroupId) || "").trim();
      !b || l.has(b) || (l.add(b), s.push(b));
    }
    return s;
  }
  function zo() {
    return Vo("paint");
  }
  function zi(i, a) {
    const s = String(a || "").trim();
    return s ? `${i === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function Ui(i) {
    const a = String(i || "").trim();
    return a ? `raster:${a}` : "";
  }
  function Ke(i) {
    const a = String(i || "").trim();
    if (!a) return "";
    const s = a.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : a).trim();
  }
  function ji(i, a = null) {
    const s = String(i || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const l = s.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: a === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function Ms() {
    var a;
    let i = -1;
    for (const s of Array.isArray(p.stickers) ? p.stickers : [])
      i = Math.max(i, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of ce())
      i = Math.max(i, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((a = p.painting) == null ? void 0 : a.raster_objects) ? p.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((s == null ? void 0 : s.z_index) || 0)));
    return i + 1;
  }
  function Nl(i, a = null) {
    const s = String(i || "").trim();
    if (!s) return null;
    const l = ce();
    let h = l.find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === s);
    return h ? a != null && (h.z_index = Math.max(0, Number(a || 0))) : (h = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: a == null ? Ms() : Math.max(0, Number(a || 0)),
      locked: !1,
      frame: null
    }, l.push(h)), h;
  }
  function Yh() {
    const i = new Set(zo()), s = ce().filter((l) => i.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return i.forEach((l) => {
      s.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === l) || s.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: Ms(),
        locked: !1,
        frame: null
      });
    }), s.sort((l, h) => Number((l == null ? void 0 : l.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), p.painting.groups = s, s;
  }
  function Xh(i, a, s) {
    const l = [];
    for (const T of s) {
      const O = T == null ? void 0 : T.geometry, U = (O == null ? void 0 : O.geometryKind) === "lasso_fill" ? O == null ? void 0 : O.points : (O == null ? void 0 : O.processedPoints) || (O == null ? void 0 : O.rawPoints) || (O == null ? void 0 : O.points) || [];
      Array.isArray(U) && l.push(...U);
    }
    if (!l.length) return null;
    let h = 0, g = 0;
    l.forEach((T) => {
      h += Number((T == null ? void 0 : T.u) || 0), g += Number((T == null ? void 0 : T.v) || 0);
    });
    const _ = h / l.length;
    let b = 1 / 0, v = -1 / 0, S = 1 / 0, w = -1 / 0;
    l.forEach((T) => {
      const O = Ki(Number((T == null ? void 0 : T.u) || 0), _);
      b = Math.min(b, O), v = Math.max(v, O);
      const U = Number((T == null ? void 0 : T.v) || 0);
      S = Math.min(S, U), w = Math.max(w, U);
    });
    const M = s.reduce((T, O) => {
      const U = yr(String((O == null ? void 0 : O.toolKind) || "pen")), Q = rn[U] || rn[nr], ct = Math.max(1, Number((O == null ? void 0 : O.size) || 10)) * Math.max(0.1, Number((Q == null ? void 0 : Q.sizeScale) ?? 1));
      return Math.max(T, ct);
    }, 0), E = Math.max(35e-4, M / 2048);
    return {
      centerUv: { u: ((_ + (b + v) * 0.5) % 1 + 1) % 1, v: j((S + w) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (v - b) * 0.5 + E,
      halfH: (w - S) * 0.5 + E,
      uvPad: E
    };
  }
  function Cr(i, a, s) {
    const l = String(i || "").trim();
    if (!l) return null;
    const h = ce().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === l);
    if (!h) return null;
    if (!h.frame) {
      const g = s || mn(l, a);
      h.frame = Xh(l, a, g);
    }
    return h.frame;
  }
  function Ar() {
    var l;
    const i = (Array.isArray(p.stickers) ? p.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), a = Yh().map((h) => ({
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
    var s, l, h, g, _, b;
    const a = Ar().filter((v) => v.type === "strokeGroup").map((v) => String(v.actionGroupId || "")).filter((v) => !!v);
    if (i) {
      const v = String(((l = (s = d.interaction) == null ? void 0 : s.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), S = String(((g = (h = d.interaction) == null ? void 0 : h.stroke) == null ? void 0 : g.layerKind) || "").trim(), w = String(((b = (_ = d.interaction) == null ? void 0 : _.stroke) == null ? void 0 : b.toolKind) || "").trim();
      v && S === "paint" && w !== "eraser" && !a.includes(v) && a.push(v);
    }
    return a;
  }
  function Ps(i = !0) {
    var b, v, S, w, M, E;
    const a = Ar();
    if (!i) return a;
    const s = String(((v = (b = d.interaction) == null ? void 0 : b.stroke) == null ? void 0 : v.actionGroupId) || "").trim(), l = String(((w = (S = d.interaction) == null ? void 0 : S.stroke) == null ? void 0 : w.layerKind) || "").trim(), h = String(((E = (M = d.interaction) == null ? void 0 : M.stroke) == null ? void 0 : E.toolKind) || "").trim();
    if (!s || l !== "paint" || h === "eraser" || a.some((T) => T.type === "strokeGroup" && String(T.actionGroupId || "") === s))
      return a;
    const g = we();
    let _ = a.reduce((T, O) => Math.max(T, Number((O == null ? void 0 : O.z_index) || 0)), -1) + 1;
    return g && Te(g) && String(g.actionGroupId || "") === s && (_ = Number(g.z_index || 0)), [
      ...a,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: _,
        item: null
      }
    ].sort((T, O) => Number((T == null ? void 0 : T.z_index) || 0) - Number((O == null ? void 0 : O.z_index) || 0));
  }
  function Zh() {
    return ce().slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => ti(zi("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function Jh() {
    var i;
    return (Array.isArray((i = p.painting) == null ? void 0 : i.raster_objects) ? p.painting.raster_objects : []).filter((a) => String((a == null ? void 0 : a.layerKind) || "paint") === "paint").slice().sort((a, s) => Number((a == null ? void 0 : a.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((a) => Qr(Ui((a == null ? void 0 : a.id) || ""))).filter(Boolean);
  }
  function Uo(i = d.interaction) {
    const a = String((i == null ? void 0 : i.kind) || "");
    if (a === "paint_stroke" || a === "paint_lasso_fill" || a === "move_stroke_group" || a === "scale_stroke_group" || a === "rotate_stroke_group" || a === "move_raster_object") return !0;
    if (a === "move_multi") {
      const s = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, l = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return s || l;
    }
    return !1;
  }
  function Ml(i = d.interaction) {
    if (e !== "cutout") return !1;
    const a = String((i == null ? void 0 : i.kind) || "");
    return Uo(i) || a === "move" || a === "scale" || a === "scale_x" || a === "scale_y" || a === "rotate" ? !0 : a === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Qh(i = d.interaction) {
    if (!Ml(i)) return 0;
    const a = String((i == null ? void 0 : i.kind) || "");
    return a === "paint_stroke" || a === "paint_lasso_fill" ? 120 : 33;
  }
  function Gi() {
    var h, g, _, b, v, S, w;
    const i = d.interaction, a = String((i == null ? void 0 : i.kind) || "");
    if (!Uo(i)) return "";
    if (a === "paint_stroke" || a === "paint_lasso_fill") {
      const M = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, E = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.layerKind) || ""), T = ((_ = M == null ? void 0 : M.rawPoints) == null ? void 0 : _.length) ?? ((b = M == null ? void 0 : M.points) == null ? void 0 : b.length) ?? 0, O = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${E || "paint"}_${a}_live${O}_${T}_${d.livePaintInteractionRevision}`;
    }
    const s = String(((v = i == null ? void 0 : i.item) == null ? void 0 : v.actionGroupId) || ""), l = String(((S = i == null ? void 0 : i.item) == null ? void 0 : S.rasterObjectId) || ((w = i == null ? void 0 : i.item) == null ? void 0 : w.id) || "");
    return `_${a}_${s || l || "active"}_${d.livePaintInteractionRevision}`;
  }
  function ks() {
    return [
      ...Array.isArray(p.stickers) ? p.stickers : [],
      ...Array.isArray(p.shots) ? p.shots : []
    ];
  }
  function gn(i) {
    return !!i && Array.isArray(p.shots) && p.shots.includes(i);
  }
  function De(i) {
    return !!i && Array.isArray(p.stickers) && p.stickers.includes(i);
  }
  function ln() {
    var i;
    return Array.isArray((i = p.painting) == null ? void 0 : i.raster_objects) ? p.painting.raster_objects : [];
  }
  function Qr(i) {
    const a = Ke(i);
    if (!a) return null;
    const s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === a);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: Ui(a),
      type: "rasterObject",
      rasterObjectId: a
    };
  }
  function We(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const a = Ke(i.rasterObjectId || i.id || "");
    return !!a && !!Qr(Ui(a));
  }
  function ti(i) {
    const a = ji(i), s = String(a.actionGroupId || "").trim();
    if (!s) return null;
    const l = ce().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === s || String((h == null ? void 0 : h.actionGroupId) || "") === s);
    return l ? {
      ...l,
      id: zi("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Te(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const a = String(i.actionGroupId || "").trim(), s = String(i.layerKind || "paint").trim() || "paint";
    return !!a && !!ti(zi(s, a));
  }
  function mn(i, a = null) {
    const s = ji(i, a), l = String(s.actionGroupId || "").trim();
    return l ? ci(s.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === l) : [];
  }
  function tp(i, a = "paint") {
    var g, _, b;
    const s = String(i || "").trim(), h = `${String(a || "paint").trim() || "paint"}:${s}:${d.mode}:${Tr()}`;
    if (d.mode === "frame") {
      const v = ie(), S = String((v == null ? void 0 : v.id) || ""), w = v ? Ye(v) : null;
      return `${h}:frame:${S}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}:${Math.round(Number(((g = d.frameView) == null ? void 0 : g.zoom) || 1) * 1e3)}:${Math.round(Number(((_ = d.frameView) == null ? void 0 : _.panX) || 0))}:${Math.round(Number(((b = d.frameView) == null ? void 0 : b.panY) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function jo(i, a, s) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(a || 0)) % 1 + 1) % 1,
      v: j(Number(i.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function Ki(i, a) {
    let s = Number(i || 0) - Number(a || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function Pl(i, a = null, s = null) {
    var S;
    const l = ji(i, a), h = Array.isArray(s) ? s : mn(l.actionGroupId, l.layerKind), g = [];
    if (h.forEach((w) => {
      const M = (w == null ? void 0 : w.geometry) || null, E = (M == null ? void 0 : M.geometryKind) === "lasso_fill" ? M == null ? void 0 : M.points : (M == null ? void 0 : M.processedPoints) || (M == null ? void 0 : M.rawPoints) || (M == null ? void 0 : M.points) || [];
      Array.isArray(E) && g.push(...E);
    }), !g.length) return { u: 0.5, v: 0.5 };
    const _ = Number(((S = g[0]) == null ? void 0 : S.u) || 0);
    let b = 0, v = 0;
    return g.forEach((w) => {
      b += _ + Ki(Number((w == null ? void 0 : w.u) || 0), _), v += Number((w == null ? void 0 : w.v) || 0);
    }), {
      u: (b / g.length % 1 + 1) % 1,
      v: j(v / g.length, 0, 1)
    };
  }
  function Bo(i, a, s = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((a == null ? void 0 : a.u) || 0), g = Number((a == null ? void 0 : a.v) || 0), _ = Ki(Number(i.u || 0), h), b = Number(i.v || 0) - g, v = Number(l || 0) * Fe, S = Math.cos(v), w = Math.sin(v), M = Math.max(0.02, Number(s || 1)), E = (_ * S - b * w) * M, T = (_ * w + b * S) * M;
    return {
      ...i,
      u: ((h + E) % 1 + 1) % 1,
      v: j(g + T, 0, 1)
    };
  }
  function kl(i, a, s, l = null, h = null, g = null) {
    const _ = ji(i, h), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const v = ci(_.layerKind), S = Array.isArray(l) ? new Map(l.map((M) => [String((M == null ? void 0 : M.id) || ""), M])) : null;
    let w = !1;
    if (v.forEach((M) => {
      if (String((M == null ? void 0 : M.actionGroupId) || "").trim() !== b) return;
      const E = (S == null ? void 0 : S.get(String((M == null ? void 0 : M.id) || ""))) || M, T = M == null ? void 0 : M.geometry, O = E == null ? void 0 : E.geometry;
      !T || !O || (Array.isArray(O.points) && (T.points = O.points.map((U) => jo(U, a, s)), w = !0), Array.isArray(O.rawPoints) && (T.rawPoints = O.rawPoints.map((U) => jo(U, a, s)), w = !0), Array.isArray(O.processedPoints) && (T.processedPoints = O.processedPoints.map((U) => jo(U, a, s)), w = !0));
    }), w && g) {
      const M = ce().find((E) => String((E == null ? void 0 : E.actionGroupId) || "") === b);
      M && (M.frame = {
        ...g,
        centerUv: {
          u: ((g.centerUv.u + a) % 1 + 1) % 1,
          v: j(g.centerUv.v + s, 0, 1)
        }
      });
    }
    return w;
  }
  function Cl(i, a = 1, s = 0, l = null, h = null, g = null) {
    const _ = ji(i, h), b = String(_.actionGroupId || "").trim();
    if (!b) return !1;
    const v = ci(_.layerKind), S = Array.isArray(l) ? l : mn(b, _.layerKind), w = Array.isArray(S) ? new Map(S.map((T) => [String((T == null ? void 0 : T.id) || ""), T])) : null, M = (g == null ? void 0 : g.centerUv) ?? Pl(b, _.layerKind, S);
    let E = !1;
    if (v.forEach((T) => {
      if (String((T == null ? void 0 : T.actionGroupId) || "").trim() !== b) return;
      const O = (w == null ? void 0 : w.get(String((T == null ? void 0 : T.id) || ""))) || T, U = T == null ? void 0 : T.geometry, Q = O == null ? void 0 : O.geometry;
      !U || !Q || (Array.isArray(Q.points) && (U.points = Q.points.map((ct) => Bo(ct, M, a, s)), E = !0), Array.isArray(Q.rawPoints) && (U.rawPoints = Q.rawPoints.map((ct) => Bo(ct, M, a, s)), E = !0), Array.isArray(Q.processedPoints) && (U.processedPoints = Q.processedPoints.map((ct) => Bo(ct, M, a, s)), E = !0));
    }), E && g) {
      const T = Number(a || 1), O = ce().find((U) => String((U == null ? void 0 : U.actionGroupId) || "") === b);
      O && (O.frame = {
        centerUv: g.centerUv,
        rot_deg: Number(g.rot_deg || 0) + Number(s || 0),
        halfW: g.halfW * T,
        halfH: g.halfH * T,
        uvPad: g.uvPad
      });
    }
    return E;
  }
  function Al(i, a, s, l = null) {
    const h = Ke(i);
    if (!h) return !1;
    const g = ln().find((w) => String((w == null ? void 0 : w.id) || "").trim() === h);
    if (!g) return !1;
    const _ = l && typeof l == "object" ? l : g, b = (_ == null ? void 0 : _.transform) || {}, v = Number(b.du || 0) + Number(a || 0), S = j(Number(b.dv || 0) + Number(s || 0), -1, 1);
    return g.transform || (g.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), g.transform.du = v, g.transform.dv = S, !0;
  }
  function we() {
    const i = String(d.selectedId || "");
    if (!i) return null;
    const a = ti(i);
    if (a) return a;
    const s = Qr(i);
    return s || (e === "cutout" ? ks().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null : Pe().find((l) => String((l == null ? void 0 : l.id) || "") === i) || null);
  }
  function An() {
    const i = Array.isArray(d.selectedIds) && d.selectedIds.length ? d.selectedIds : d.selectedId ? [d.selectedId] : [], a = [], s = /* @__PURE__ */ new Set();
    return i.forEach((l) => {
      const h = String(l || "").trim();
      if (!h || s.has(h)) return;
      s.add(h);
      const g = h === String(d.selectedId || "") ? we() : ti(h) || Qr(h) || (e === "cutout" ? ks().find((_) => String((_ == null ? void 0 : _.id) || "") === h) : Pe().find((_) => String((_ == null ? void 0 : _.id) || "") === h));
      g && a.push(g);
    }), a;
  }
  function Cs(i = null) {
    const a = Array.isArray(i) ? i : An();
    if (!a || a.length < 2) return null;
    const s = a.map((S) => Re(S)).filter((S) => (S == null ? void 0 : S.visible) && Array.isArray(S.corners) && S.corners.length);
    if (!s.length) return null;
    const l = s.flatMap((S) => S.corners.map((w) => Number((w == null ? void 0 : w.x) || 0))), h = s.flatMap((S) => S.corners.map((w) => Number((w == null ? void 0 : w.y) || 0))), g = Math.min(...l), _ = Math.max(...l), b = Math.min(...h), v = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (g + _) * 0.5, y: (b + v) * 0.5 },
      corners: [
        { x: g, y: b },
        { x: _, y: b },
        { x: _, y: v },
        { x: g, y: v }
      ],
      edgeMidpoints: [
        { edge: "top", x: (g + _) * 0.5, y: b, a: { x: g, y: b }, b: { x: _, y: b } },
        { edge: "right", x: _, y: (b + v) * 0.5, a: { x: _, y: b }, b: { x: _, y: v } },
        { edge: "bottom", x: (g + _) * 0.5, y: v, a: { x: _, y: v }, b: { x: g, y: v } },
        { edge: "left", x: g, y: (b + v) * 0.5, a: { x: g, y: v }, b: { x: g, y: b } }
      ],
      rotateStemBase: { x: (g + _) * 0.5, y: b },
      rotateHandle: { x: (g + _) * 0.5, y: b - 30 }
    };
  }
  function ep(i) {
    const a = String((i == null ? void 0 : i.id) || "").trim();
    return !!a && Array.isArray(d.selectedIds) && d.selectedIds.includes(a);
  }
  function Il() {
    const i = we();
    return i ? Te(i) || We(i) ? "stroke" : gn(i) ? "frame" : "image" : null;
  }
  function fr(i) {
    if (!i || typeof i != "object") return !1;
    if (Te(i)) {
      const a = String(i.actionGroupId || i.id || "").trim(), s = ce().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === a);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (We(i)) {
      const a = Ke(i.rasterObjectId || i.id || ""), s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === a);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return i.locked === !0;
  }
  function As(i = null) {
    const a = Array.isArray(i) ? i : An();
    return a.length > 0 && a.every((s) => fr(s));
  }
  function np(i, a) {
    const s = a === !0;
    if (!i || typeof i != "object") return !1;
    if (Te(i)) {
      const l = String(i.actionGroupId || i.id || "").trim(), h = ce().find((g) => String((g == null ? void 0 : g.actionGroupId) || (g == null ? void 0 : g.id) || "").trim() === l);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    if (We(i)) {
      const l = Ke(i.rasterObjectId || i.id || ""), h = ln().find((g) => String((g == null ? void 0 : g.id) || "").trim() === l);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    return i.locked === s ? !1 : (i.locked = s, !0);
  }
  function rp() {
    if (r) return;
    const i = An();
    if (!i.length) return;
    const a = !As(i);
    let s = !1;
    i.forEach((l) => {
      np(l, a) && (s = !0);
    }), s && (ue(), ke(), qt(), pt());
  }
  function Go(i) {
    d.selectedId = (i == null ? void 0 : i.id) || null, d.selectedIds = i != null && i.id ? [i.id] : [], i && De(i) ? p.active.selected_sticker_id = i.id || null : p.active.selected_sticker_id = null, i && gn(i) ? p.active.selected_shot_id = i.id || null : i ? gn(i) || (p.active.selected_shot_id = p.active.selected_shot_id) : p.active.selected_shot_id = null;
  }
  function ip(i, a = null) {
    const s = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((_) => {
      const b = String((_ == null ? void 0 : _.id) || "").trim();
      !b || l.has(b) || (l.add(b), s.push(b));
    }), d.selectedIds = s;
    const h = String(a || "").trim();
    d.selectedId = h && s.includes(h) ? h : s[s.length - 1] || null;
    const g = we();
    p.active.selected_sticker_id = g && De(g) && g.id || null, g && gn(g) ? p.active.selected_shot_id = g.id || null : s.length || (p.active.selected_shot_id = null);
  }
  function op() {
    const i = (Array.isArray(p.shots) ? p.shots : []).map((s, l) => ({
      kind: "frame",
      item: s,
      label: "Frame"
    })), a = (Array.isArray(p.stickers) ? p.stickers : []).map((s, l) => {
      var g, _;
      const h = Ae(s) ? String(s.id || Or) : String(((_ = (g = p.assets) == null ? void 0 : g[s.asset_id]) == null ? void 0 : _.name) || s.asset_id || s.id || `Image ${l + 1}`);
      return {
        kind: "image",
        item: s,
        label: h
      };
    });
    return [...i, ...a];
  }
  function ap(i) {
    return i === "frame" ? Dt.camera : i === "stroke" ? Dt.paintbrush_vertical_tool : Dt.image;
  }
  function El(i) {
    return !i || !i.item ? Aa(String((i == null ? void 0 : i.label) || "")) : `<span class="pano-picker-item-icon" aria-hidden="true">${ap(i.kind)}</span><span>${Aa(String(i.label || ""))}</span>`;
  }
  function Tl() {
    return Ms();
  }
  function Ae(i) {
    return !i || typeof i != "object" ? !1 : String(i.id || "") === Or || String(i.source_kind || "") === Sc;
  }
  function ei(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function sp(i) {
    return Ae(i) && ei(i) ? gh : 1;
  }
  function cp() {
    return d.primaryTool === "mask" ? d.maskTool : d.paintTool;
  }
  function lp() {
    return String(cp() || "") === "lasso_fill";
  }
  function up() {
    if (r) return;
    const i = we();
    !i || !Ae(i) || (i.visible = ei(i), yn(), ue(), ke(), ne(), qt(), pt());
  }
  function fp() {
    if (r || e !== "stickers") return;
    const i = we();
    if (!i || !Ae(i)) return;
    const a = i.initial_pose;
    if (!a || typeof a != "object") return;
    i.yaw_deg = Number(a.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(a.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(a.hFOV_deg ?? i.hFOV_deg ?? 30);
    const s = Is(Nc, () => {
      pt();
    });
    s && (s.complete || s.naturalWidth || s.width) ? i.vFOV_deg = Ir(
      Number(a.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : i.vFOV_deg = Number(a.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(a.rot_deg ?? i.rot_deg ?? 0), ue(), ke(), ne(), qt(), pt();
  }
  function dp(i) {
    if (!i || !Ae(i)) return null;
    const a = i.initial_pose;
    if (!a || typeof a != "object") return null;
    const s = {
      yaw_deg: Number(a.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(a.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(a.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(a.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(a.rot_deg ?? i.rot_deg ?? 0)
    }, l = Is(Nc, () => {
      pt();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (s.vFOV_deg = Ir(
      s.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), s;
  }
  function hp() {
    const i = we();
    if (!i || !Ae(i)) return !1;
    const a = dp(i);
    if (!a) return !1;
    const s = (l, h) => Math.abs(Number(l || 0) - Number(h || 0)) <= 1e-4;
    return !(s(i.yaw_deg, a.yaw_deg) && s(i.pitch_deg, a.pitch_deg) && s(i.hFOV_deg, a.hFOV_deg) && s(i.vFOV_deg, a.vFOV_deg) && s(i.rot_deg, a.rot_deg));
  }
  function Ll(i) {
    var s;
    const a = Ao(t == null ? void 0 : t.id);
    return Array.isArray((s = a == null ? void 0 : a.ui) == null ? void 0 : s[i]) ? a.ui[i] : Array.isArray(a == null ? void 0 : a[i]) ? a[i] : [];
  }
  function pp(i) {
    const a = Ao(t == null ? void 0 : t.id);
    return a != null && a.ui && Object.prototype.hasOwnProperty.call(a.ui, i) ? a.ui[i] : a && Object.prototype.hasOwnProperty.call(a, i) ? a[i] : null;
  }
  function gp(i, a = null) {
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
  function Is(i, a = null) {
    const s = Ll(i), l = Array.isArray(s) && s.length ? s[0] : null, h = $i(l);
    if (!h) return null;
    const g = `__ui__${i}`, _ = Ct.get(g);
    if (_ && _.__panoSrc === h) return _;
    const b = new Image();
    return b.__panoSrc = h, b.onload = () => {
      typeof a == "function" ? a(b) : pt();
    }, b.src = h, Ct.set(g, b), b;
  }
  function Dl(i = null) {
    const a = Qf(t, ["sticker_image"], i, "sticker_image_exact");
    return a || Is(Nc, i);
  }
  function Rl(i) {
    const a = String(i || "");
    let s = 2166136261;
    for (let l = 0; l < a.length; l += 1)
      s ^= a.charCodeAt(l), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Ir(i, a, s) {
    const l = Math.max(1, Number(a || 1)), h = Math.max(1, Number(s || 1)), g = j(Number(i || 30), 0.1, 179) * Fe, _ = 2 * Math.atan(Math.tan(g * 0.5) * (h / l));
    return j(_ * Vr, 0.1, 179);
  }
  function mp(i) {
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
      const _ = Number(g.yaw_deg), b = Number(g.pitch_deg), v = Number(g.roll_deg), S = Number(g.hFOV_deg);
      if (![_, b, v, S].every((T) => Number.isFinite(T))) return null;
      let w = ((_ + 180) % 360 + 360) % 360 - 180;
      Object.is(w, -0) && (w = 0);
      const M = {
        yaw_deg: w,
        pitch_deg: j(b, -89.9, 89.9),
        roll_deg: v,
        hFOV_deg: j(S, 0.1, 179)
      }, E = Number(s.source_aspect);
      return Number.isFinite(E) && E > 0 && (M.source_aspect = E), M;
    } catch {
      return null;
    }
  }
  function Ol(i) {
    const a = Number(i == null ? void 0 : i.yaw_deg), s = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), g = Zc(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $e(Number.isFinite(a) ? a : 0),
        pitch_deg: j(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: j(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function yp(i) {
    var b;
    if (!i || typeof i != "object") return Ol(null);
    const a = Number(i == null ? void 0 : i.yaw_deg), s = Number(i == null ? void 0 : i.pitch_deg), l = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), g = Number(i == null ? void 0 : i.vFOV_deg);
    let _ = 1;
    if (Number.isFinite(h) && Number.isFinite(g)) {
      const v = j(h, 0.1, 179) * Fe, S = j(g, 0.1, 179) * Fe, w = Math.tan(S * 0.5);
      if (Math.abs(w) > 1e-6) {
        const M = Math.tan(v * 0.5) / w;
        Number.isFinite(M) && M > 0 && (_ = M);
      }
    }
    if (i != null && i.asset_id && ((b = p == null ? void 0 : p.assets) != null && b[i.asset_id])) {
      const v = p.assets[i.asset_id], S = Number((v == null ? void 0 : v.w) || 0), w = Number((v == null ? void 0 : v.h) || 0);
      S > 0 && w > 0 && (_ = S / w);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $e(Number.isFinite(a) ? a : 0),
        pitch_deg: j(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: j(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: _
    };
  }
  function bp(i) {
    var l, h, g, _, b;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((v) => String((v == null ? void 0 : v.name) || "") === String(i)) : null, s = a == null ? void 0 : a.link;
    if (s != null) {
      const v = Gh(t.graph, s), { originId: S, originSlot: w } = Kh(v), M = Ao(S), E = [
        M == null ? void 0 : M.output,
        M == null ? void 0 : M.result,
        (l = M == null ? void 0 : M.data) == null ? void 0 : l.output,
        (h = M == null ? void 0 : M.data) == null ? void 0 : h.result,
        (g = M == null ? void 0 : M.ui) == null ? void 0 : g.output,
        (_ = M == null ? void 0 : M.ui) == null ? void 0 : _.result
      ];
      for (const T of E) {
        if (!Array.isArray(T)) continue;
        const O = Number(w || 0), U = T[O];
        if (typeof U == "string" && U.trim()) return U;
      }
    }
    return String(((b = Pi(t, i)) == null ? void 0 : b.value) || "");
  }
  function vp(i, a, s) {
    const l = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : mp(a);
    if (l) {
      const _ = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || l.source_aspect || 1), b = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: Ir(l.hFOV_deg, _, b),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const h = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(d.viewYaw || 0),
      pitch_deg: Number(d.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Ir(30, h, g),
      rot_deg: 0
    };
  }
  function Fl(i = "sync") {
    if (e !== "stickers" || r) return;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.find((T) => String((T == null ? void 0 : T.name) || "") === "sticker_image") : null, s = (a == null ? void 0 : a.link) ?? null, l = Dl(() => {
      var T;
      (T = t.__panoExternalStickerSync) == null || T.call(t, "image-loaded");
    }), h = gp(pp("pano_sticker_input_pose"), null), g = bp("sticker_state"), _ = Rl(h && typeof h == "object" ? JSON.stringify(h) : g), b = Array.isArray(p.stickers) ? p.stickers : p.stickers = [], v = b.findIndex((T) => String((T == null ? void 0 : T.id) || "") === Or);
    if (s == null) {
      v >= 0 && (b.splice(v, 1), d.selectedId === Or && (d.selectedId = null, d.selectedIds = [], p.active.selected_sticker_id = null), ke(), ne(), qt(), pt());
      return;
    }
    const S = b.reduce((T, O) => Math.max(T, Number((O == null ? void 0 : O.z_index) || 0)), -1);
    let w = v >= 0 ? b[v] : null;
    const M = !w || Number(w.source_link_id ?? -1) !== Number(s) || String(w.source_state_hash || "") !== _;
    w || (w = {
      id: Or,
      source_kind: Sc
    }, b.push(w)), w.id = Or, w.source_kind = Sc, w.source_link_id = Number(s), w.source_state_hash = _, w.visible = w.visible !== !1;
    let E = !1;
    if (M) {
      const T = vp(h, g, l);
      Object.assign(w, T, {
        initial_pose: { ...T },
        visible: !0,
        z_index: S + 1
      }), E = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const T = Ir(
        Number(w.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(w.vFOV_deg || 0) - T) > 1e-6 && (w.vFOV_deg = T, E = !0);
    }
    E && (ke(), ne(), qt()), pt();
  }
  function ni(i = {}) {
    const s = i.preservePanelValues !== !1 ? we() : null;
    s && (d.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: yi(s)
    }), d.selectedId = null, d.selectedIds = [], d.cutoutAspectOpen = !1, p.active.selected_sticker_id = null, p.active.selected_shot_id = null;
  }
  function _p() {
    var l;
    if (e !== "cutout") return;
    const i = Array.isArray(p.shots) ? p.shots : [];
    if (!Array.isArray(i) || i.length === 0) return;
    const a = String(((l = p.active) == null ? void 0 : l.selected_shot_id) || ""), s = i.find((h) => String((h == null ? void 0 : h.id) || "") === a) || i[0];
    s && (p.active.selected_shot_id = s.id || null, d.viewYaw = $e(Number(s.yaw_deg || 0)), d.viewPitch = j(Number(s.pitch_deg || 0), -89.9, 89.9));
  }
  function Ko() {
    if (!ft) return;
    e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0 ? (ft.innerHTML = Dt.crosshair, ft.setAttribute("aria-label", "Look at frame"), ft.setAttribute("data-tip", "Look at frame")) : (ft.innerHTML = Dt.plus_circle, ft.setAttribute("aria-label", "Add frame"), ft.setAttribute("data-tip", "Add frame"));
  }
  function Wo() {
    const i = e === "cutout" && Array.isArray(p.shots) && p.shots.length > 0;
    d.mode === "frame" && !i && (d.mode = "pano"), et && (et.disabled = !i, et.setAttribute("aria-disabled", i ? "false" : "true")), rt.forEach((a) => {
      const s = a.dataset.view === d.mode;
      a.setAttribute("aria-pressed", s ? "true" : "false");
    }), bt && bt.setAttribute("data-selected", d.mode), uu() ? xe(d.pointerPos) : C.style.cursor = d.mode === "pano" ? "grab" : "default";
  }
  function wp() {
    const a = Ul({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !a || a.length !== 4 ? !1 : a[0].y >= a[3].y;
  }
  function Es() {
    const i = $n(d.viewYaw, d.viewPitch);
    let a = Kn(0, 1, 0);
    Math.abs(xn(i, a)) > 0.999 && (a = Kn(0, 0, 1));
    const s = mi(Ma(a, i)), l = mi(Ma(i, s));
    return { right: s, up: l, fwd: i };
  }
  function Wi(i) {
    const { right: a, up: s, fwd: l } = Es(), h = xn(i, a), g = xn(i, s), _ = xn(i, l);
    if (_ <= 1e-5) return null;
    const b = C.width, v = C.height, S = d.viewFov * Fe, w = 2 * Math.atan(Math.tan(S / 2) * (v / b)), M = b / 2 / Math.tan(S / 2), E = v / 2 / Math.tan(w / 2);
    return {
      x: b / 2 + h / _ * M,
      y: v / 2 - g / _ * E,
      z: _
    };
  }
  function Ts(i, a) {
    const { right: s, up: l, fwd: h } = Es(), g = C.width, _ = C.height, b = d.viewFov * Fe, v = 2 * Math.atan(Math.tan(b / 2) * (_ / g)), S = (i - g / 2) / (g / 2) * Math.tan(b / 2), w = (_ / 2 - a) / (_ / 2) * Math.tan(v / 2), M = Sa(Sa(Na(s, S), Na(l, w)), h);
    return mi(M);
  }
  function dr() {
    const i = C.width, a = C.height, s = 2;
    if (i / Math.max(a, 1) >= s) {
      const b = a, v = b * s;
      return { x: (i - v) * 0.5, y: 0, w: v, h: b };
    }
    const h = i, g = h / s;
    return { x: 0, y: (a - g) * 0.5, w: h, h: g };
  }
  function xp(i) {
    var _;
    if (i && typeof i == "object" && (Ae(i) || i.external === !0))
      return Dl(() => {
        var b;
        (b = t.__panoExternalStickerSync) == null || b.call(t, "image-loaded");
      });
    const a = String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!a) return null;
    const s = Ct.get(a);
    if (s) return s;
    const l = (_ = p.assets) == null ? void 0 : _[a], h = Av(l);
    if (!h) return null;
    const g = new Image();
    return g.onload = () => pt(), g.src = h, Ct.set(a, g), g;
  }
  function $l(i, a = null) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Wt.get(s);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
    const h = new Image();
    return h.onload = () => {
      typeof a == "function" && a();
    }, h.src = s, Wt.set(s, h), h;
  }
  function Sp(i) {
    const a = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!a) return null;
    const s = Yt.get(a);
    if (s) return s.ready ? s : null;
    const l = $l(i, () => {
      const w = Yt.get(a);
      w && (w.ready = !1), pt({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const h = Number(l.naturalWidth || l.width || 0), g = Number(l.naturalHeight || l.height || 0);
    if (h < 1 || g < 1) return null;
    const _ = document.createElement("canvas");
    _.width = h, _.height = g;
    const b = _.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, h, g), b.drawImage(l, 0, 0, h, g);
    const v = b.getImageData(0, 0, h, g).data, S = { canvas: _, width: h, height: g, alpha: v, ready: !0 };
    return Yt.set(a, S), S;
  }
  function Np(i, a, s = 1, l = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((a == null ? void 0 : a.u) || 0), g = Number((a == null ? void 0 : a.v) || 0), _ = Ki(Number(i.u || 0), h), b = Number(i.v || 0) - g, v = Math.max(0.02, Number(s || 1)), S = Number(l || 0) * Fe, w = Math.cos(S), M = Math.sin(S), E = _ / v, T = b / v, O = E * w + T * M, U = -E * M + T * w;
    return {
      ...i,
      u: ((h + O) % 1 + 1) % 1,
      v: g + U
    };
  }
  function Mp(i, a) {
    if (!i || !a) return null;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return null;
    const l = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, g = {
      u: ((Number(a.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(a.v || 0) - Number(l.dv || 0)
    }, _ = Np(
      g,
      h,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), b = Number(s.u1 || 0) - Number(s.u0 || 0), v = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(b > 1e-6) || !(v > 1e-6)) return null;
    const S = Ki(Number(_.u || 0), Number(s.u0 || 0)) / b, w = (Number(_.v || 0) - Number(s.v0 || 0)) / v;
    if (S < 0 || S > 1 || w < 0 || w > 1) return 0;
    const M = Sp(i);
    if (!M) return null;
    const E = j(Math.floor(S * M.width), 0, M.width - 1), T = j(Math.floor(w * M.height), 0, M.height - 1);
    return Number(M.alpha[(T * M.width + E) * 4 + 3] || 0);
  }
  function Hl(i, a, s, l = null) {
    if (!(a != null && a.visible) || !rr(s, a.corners)) return !1;
    const h = l || bn(s, performance.now()), g = Mp(i, h);
    return g === null ? !0 : g > 8;
  }
  function Pp() {
    var l, h, g, _, b, v, S, w;
    const i = ((h = (l = d.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, Bi(!1))) || null, a = Math.max(1, Number(((g = i == null ? void 0 : i.descriptor) == null ? void 0 : g.width) || ((b = (_ = i == null ? void 0 : i.displayPaint) == null ? void 0 : _.canvas) == null ? void 0 : b.width) || 2048)), s = Math.max(1, Number(((v = i == null ? void 0 : i.descriptor) == null ? void 0 : v.height) || ((w = (S = i == null ? void 0 : i.displayPaint) == null ? void 0 : S.canvas) == null ? void 0 : w.height) || 1024));
    return { width: a, height: s };
  }
  function Vl(i = null) {
    var b, v, S, w, M, E, T, O, U, Q, ct, St, gt;
    oi();
    const a = Array.isArray(i) ? i : Bi(!1), s = ((v = (b = d.paintEngine) == null ? void 0 : b.getErpTarget) == null ? void 0 : v.call(b, a)) || null, l = Math.max(1, Number(((S = s == null ? void 0 : s.descriptor) == null ? void 0 : S.width) || ((M = (w = s == null ? void 0 : s.displayPaint) == null ? void 0 : w.canvas) == null ? void 0 : M.width) || 2048)), h = Math.max(1, Number(((E = s == null ? void 0 : s.descriptor) == null ? void 0 : E.height) || ((O = (T = s == null ? void 0 : s.displayPaint) == null ? void 0 : T.canvas) == null ? void 0 : O.height) || 1024));
    (!d._rasterComposeSurface || Number(((U = d._rasterComposeSurface.canvas) == null ? void 0 : U.width) || 0) !== l || Number(((Q = d._rasterComposeSurface.canvas) == null ? void 0 : Q.height) || 0) !== h) && (d._rasterComposeSurface = Er(l, h));
    const g = d._rasterComposeSurface;
    g.ctx.clearRect(0, 0, l, h);
    let _ = !1;
    for (const vt of Ar()) {
      if (vt.type === "strokeGroup") {
        const mt = ((St = (ct = d.paintEngine) == null ? void 0 : ct.getGroupDisplayCanvas) == null ? void 0 : St.call(ct, vt.actionGroupId)) || null;
        if (!mt) continue;
        g.ctx.drawImage(mt, 0, 0), _ = !0;
        continue;
      }
      if (vt.type === "rasterObject" && String(((gt = vt.item) == null ? void 0 : gt.layerKind) || "paint") === "paint") {
        const mt = qo(vt.item, () => pt());
        if (!mt) continue;
        g.ctx.drawImage(mt, 0, 0), _ = !0;
      }
    }
    return _ ? g.canvas : null;
  }
  function kp(i = null) {
    var b, v, S, w, M, E, T;
    oi();
    const a = i || ((v = (b = d.paintEngine) == null ? void 0 : b.getErpTarget) == null ? void 0 : v.call(b, Bi(!1))) || null, s = ((S = a == null ? void 0 : a.committedMask) == null ? void 0 : S.canvas) || null, l = Math.max(1, Number(((w = a == null ? void 0 : a.descriptor) == null ? void 0 : w.width) || (s == null ? void 0 : s.width) || 2048)), h = Math.max(1, Number(((M = a == null ? void 0 : a.descriptor) == null ? void 0 : M.height) || (s == null ? void 0 : s.height) || 1024)), g = ln().filter((O) => String((O == null ? void 0 : O.layerKind) || "paint") === "mask").slice().sort((O, U) => Number((O == null ? void 0 : O.z_index) || 0) - Number((U == null ? void 0 : U.z_index) || 0));
    if (!s && !g.length) return null;
    (!d._maskComposeSurface || Number(((E = d._maskComposeSurface.canvas) == null ? void 0 : E.width) || 0) !== l || Number(((T = d._maskComposeSurface.canvas) == null ? void 0 : T.height) || 0) !== h) && (d._maskComposeSurface = Er(l, h));
    const _ = d._maskComposeSurface;
    _.ctx.clearRect(0, 0, l, h), s && _.ctx.drawImage(s, 0, 0);
    for (const O of g) {
      const U = qo(O, () => pt());
      U && _.ctx.drawImage(U, 0, 0);
    }
    return _.canvas;
  }
  function Cp() {
    var T, O, U;
    const i = d.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const a = (i == null ? void 0 : i.stroke) || null;
    if (!a || String((a == null ? void 0 : a.layerKind) || "") !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return null;
    const s = Xn(), l = `${Gi()}:${s.width}:${s.height}`;
    if (((T = d._activePaintEraserPreviewInfo) == null ? void 0 : T.cacheKey) === l)
      return d._activePaintEraserPreviewInfo.value || null;
    const h = on(a), g = (h == null ? void 0 : h.geometry) || null;
    if (g && String(g.geometryKind || "") !== "lasso_fill") {
      const Q = Array.isArray(g.rawPoints) && g.rawPoints.length ? g.rawPoints : Array.isArray(g.points) ? g.points : [];
      g.processedPoints = Bs(Q, h.targetSpace, !0);
    }
    const _ = Er(s.width, s.height);
    if (!Jl(_, h, { w: s.width, h: s.height })) return null;
    const b = ((U = (O = _.ctx) == null ? void 0 : O.getImageData(0, 0, s.width, s.height)) == null ? void 0 : U.data) || null;
    if (!b) return null;
    let v = s.width, S = s.height, w = -1, M = -1;
    for (let Q = 0; Q < s.height; Q += 1)
      for (let ct = 0; ct < s.width; ct += 1)
        b[(Q * s.width + ct) * 4 + 3] <= 8 || (ct < v && (v = ct), Q < S && (S = Q), ct > w && (w = ct), Q > M && (M = Q));
    if (w < v || M < S)
      return d._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const E = {
      surface: _,
      bounds: { minX: v, minY: S, maxX: w, maxY: M },
      key: `${l}:${v}:${S}:${w}:${M}`
    };
    return d._activePaintEraserPreviewInfo = { cacheKey: l, value: E }, d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), E;
  }
  function qi() {
    d._activePaintEraserPreviewInfo = null, d._liveEraserPreviewCanvasCache = null;
  }
  function Ap(i, a, s) {
    var l, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((l = i.item) != null && l.bbox)) {
      const g = i.item.bbox, _ = ((h = i.item) == null ? void 0 : h.transform) || {}, b = Number(g.u0 || 0) + Number(_.du || 0), v = Number(g.u1 || 0) + Number(_.du || 0), S = Number(g.v0 || 0) + Number(_.dv || 0), w = Number(g.v1 || 0) + Number(_.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * a),
        maxX: Math.ceil((v % 1 + 1) % 1 * a),
        minY: Math.floor(j(S, 0, 1) * s),
        maxY: Math.ceil(j(w, 0, 1) * s),
        wraps: v - b >= 1 || b < 0 || v > 1
      };
    }
    if (i.type === "strokeGroup") {
      const g = mn(i.actionGroupId, "paint"), _ = Cr(i.actionGroupId, "paint", g);
      if (!_) return null;
      const b = _.centerUv.u - _.halfW, v = _.centerUv.u + _.halfW, S = _.centerUv.v - _.halfH, w = _.centerUv.v + _.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * a),
        maxX: Math.ceil((v % 1 + 1) % 1 * a),
        minY: Math.floor(j(S, 0, 1) * s),
        maxY: Math.ceil(j(w, 0, 1) * s),
        wraps: v - b >= 1 || b < 0 || v > 1
      };
    }
    return null;
  }
  function Ip(i, a, s) {
    if (!i || !a) return !1;
    const l = (_) => _.wraps ? [
      { minX: 0, maxX: _.maxX, minY: _.minY, maxY: _.maxY, wraps: !1 },
      { minX: _.minX, maxX: s - 1, minY: _.minY, maxY: _.maxY, wraps: !1 }
    ] : [_], h = l(i), g = l(a);
    return h.some((_) => g.some((b) => !(_.maxX < b.minX || b.maxX < _.minX || _.maxY < b.minY || b.maxY < _.minY)));
  }
  function zl(i, a, s) {
    var M, E, T;
    if (!i || !a || !((M = s == null ? void 0 : s.surface) != null && M.canvas) || a.type !== "rasterObject") return i;
    const l = Number(i.width || s.surface.canvas.width || 0), h = Number(i.height || s.surface.canvas.height || 0);
    if (l < 1 || h < 1) return i;
    const g = Ap(a, l, h);
    if (g && !Ip(g, s.bounds, l)) return i;
    const _ = String(((E = a.item) == null ? void 0 : E.id) || a.id || ""), b = ((T = a.item) == null ? void 0 : T.transform) || {}, v = `${s.key}:${_}:${l}:${h}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, S = d._liveEraserPreviewCanvasCache instanceof Map ? d._liveEraserPreviewCanvasCache : d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (S.has(v)) return S.get(v);
    const w = Er(l, h);
    return w.ctx.clearRect(0, 0, l, h), w.ctx.drawImage(i, 0, 0), w.ctx.save(), w.ctx.globalCompositeOperation = "destination-out", w.ctx.drawImage(s.surface.canvas, 0, 0), w.ctx.restore(), S.size > 64 && S.clear(), S.set(v, w.canvas), w.canvas;
  }
  function qo(i, a = null) {
    const s = Ke((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.bbox) || null;
    if (!s || !l) return null;
    const h = $l(i, a);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: g, height: _ } = Pp(), b = (i == null ? void 0 : i.transform) || {}, v = [
      s,
      g,
      _,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      Tr()
    ].join(":"), S = Xt.get(v);
    if (S) return S;
    Xt.size > 64 && Xt.clear();
    const w = document.createElement("canvas");
    w.width = g, w.height = _;
    const M = w.getContext("2d");
    if (!M) return null;
    const E = Number(l.u0 || 0) * g, T = Number(l.v0 || 0) * _, O = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * g), U = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * _), Q = E + O * 0.5 + Number(b.du || 0) * g, ct = T + U * 0.5 + Number(b.dv || 0) * _, St = Number(b.rot_deg || 0) * Fe, gt = Math.max(0.01, Number(b.scale || 1));
    for (const vt of [-g, 0, g])
      M.save(), M.translate(Q + vt, ct), M.rotate(St), M.scale(gt, gt), M.drawImage(h, -O * 0.5, -U * 0.5, O, U), M.restore();
    return Xt.set(v, w), w;
  }
  function Ep(i) {
    return Ns(p, {
      stickers: i ? [i] : [],
      selectedId: d.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Tp(i, a) {
    return mh(
      p,
      (s, l, h) => xp(h || s),
      { scene: a, stickers: i ? [i] : [] }
    );
  }
  function Yo(i, a, s, l, h = "modal_object_view") {
    var S, w, M, E, T;
    if (!i || !a || !s) return !1;
    let g = !1;
    const _ = Cp();
    if (!!l && !!l.complete && Number(l.naturalWidth || l.width || 0) > 1 && Number(l.naturalHeight || l.height || 0) > 1 && d.showPanorama) {
      const O = Hs(a, s) ? Vp(a, s, l, `${h}_bg_gl`) : pa({
        owner: t,
        cacheKey: `${h}_bg_only`,
        ctx: i,
        rect: a,
        img: l,
        view: s
      });
      g = g || !!O;
    } else Hs(a, s) && Hp();
    if (d.showObjects)
      for (const O of Ps(!0)) {
        if (O.type === "sticker" && O.item) {
          const U = Ep(O.item), Q = Tp(O.item, U), ct = Vi({
            owner: t,
            cacheKey: `${h}_sticker_${String(O.id || O.item.id || "")}`,
            ctx: i,
            rect: a,
            backgroundSource: null,
            textures: Q,
            scene: U,
            view: s
          });
          g = g || !!ct;
          continue;
        }
        if (O.type === "rasterObject" && O.item) {
          let U = qo(O.item, () => pt());
          if (!U) continue;
          const Q = _ ? `_${_.key}` : "";
          _ && (U = zl(U, O, _));
          const ct = ((S = O.item) == null ? void 0 : S.transform) || {};
          pa({
            owner: t,
            cacheKey: `${h}_raster_${String(O.id || O.item.id || "")}`,
            ctx: i,
            rect: a,
            img: U,
            view: s,
            backgroundRevision: `${ii()}_raster_${String(O.id || O.item.id || "")}_${Number(ct.du || 0).toFixed(6)}_${Number(ct.dv || 0).toFixed(6)}_${Number(ct.rot_deg || 0).toFixed(3)}_${Number(ct.scale || 1).toFixed(4)}${Q}`,
            backgroundOpacity: 1
          }), g = !0;
          continue;
        }
        if (O.type === "strokeGroup") {
          let U = ((M = (w = d.paintEngine) == null ? void 0 : w.getGroupDisplayCanvas) == null ? void 0 : M.call(w, O.actionGroupId)) || null;
          if (!U) continue;
          _ && (U = zl(U, O, _)), pa({
            owner: t,
            cacheKey: `${h}_group_${String(O.actionGroupId || "")}`,
            ctx: i,
            rect: a,
            img: U,
            view: s,
            backgroundRevision: `${Tr()}_${String(O.actionGroupId || "")}${Gi()}`,
            backgroundOpacity: 1
          }), g = !0;
        }
      }
    const v = d.showMask && ((T = (E = d.paintEngine) == null ? void 0 : E.getMaskDisplayCanvas) == null ? void 0 : T.call(E)) || null;
    return v && (pa({
      owner: t,
      cacheKey: `${h}_mask`,
      ctx: i,
      rect: a,
      img: v,
      view: s,
      backgroundRevision: `${Tr()}${Gi()}_mask`,
      backgroundOpacity: 1
    }), g = !0), g;
  }
  async function Ls(i, a = "sticker.png") {
    const s = new FormData();
    s.append("image", i), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const l = await Qe.fetchApi("/upload/image", { method: "POST", body: s });
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
  async function Ds(i, a) {
    const s = await new Promise((b) => i.toBlob(b, "image/png")), l = new FormData();
    l.append("image", s, a), l.append("type", "temp"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const h = await Qe.fetchApi("/upload/image", { method: "POST", body: l });
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
  let Rs = null, Xo = !1;
  function Lp() {
    const i = Xf(p.painting);
    if (i.totalPaintCount <= 0 && i.totalMaskCount <= 0) return !1;
    const a = p.painting_layer, s = ii();
    return !a || typeof a != "object" || String(a.revision || "") !== s || i.totalPaintCount > 0 && !a.paint || i.totalMaskCount > 0 && !a.mask;
  }
  function Os() {
    const i = String(t.id ?? "0"), a = yo.get(i);
    if (Xo && a) return a;
    const s = (async () => {
      var g, _, b, v, S, w, M, E, T, O;
      const l = ii(), h = Xf(p.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        p.painting_layer !== null && (p.painting_layer = null, Rs = l, En());
        return;
      }
      if (Rs !== l && !Xo) {
        Xo = !0;
        try {
          oi();
          const U = Bi(!1), Q = ((_ = (g = d.paintEngine) == null ? void 0 : g.getErpTarget) == null ? void 0 : _.call(g, U)) || null, ct = Vl(U), St = kp(Q), gt = Math.max(1, Number(((b = Q == null ? void 0 : Q.descriptor) == null ? void 0 : b.width) || (ct == null ? void 0 : ct.width) || (St == null ? void 0 : St.width) || 2048)), vt = Math.max(1, Number(((v = Q == null ? void 0 : Q.descriptor) == null ? void 0 : v.height) || (ct == null ? void 0 : ct.height) || (St == null ? void 0 : St.height) || 1024));
          (!ct && h.totalPaintCount > 0 || !St && h.totalMaskCount > 0) && ((!d._paintLayerSyncBlankSurface || Number(((S = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : S.width) || 0) !== gt || Number(((w = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : w.height) || 0) !== vt) && (d._paintLayerSyncBlankSurface = Er(gt, vt)), d._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, gt, vt));
          const mt = ct || h.totalPaintCount > 0 && ((M = d._paintLayerSyncBlankSurface) == null ? void 0 : M.canvas) || null, _t = St || h.totalMaskCount > 0 && ((E = d._paintLayerSyncBlankSurface) == null ? void 0 : E.canvas) || null;
          if (!mt && !_t) return;
          let ht = null, K = null;
          const at = [];
          if (h.totalPaintCount > 0) {
            ht = await Ds(mt, `pano_paint_${i}.png`);
            for (const Tt of U) {
              const Ot = String(Tt || "").trim();
              if (!Ot) continue;
              const Lt = ((O = (T = d.paintEngine) == null ? void 0 : T.getGroupDisplayCanvas) == null ? void 0 : O.call(T, Ot)) || null;
              if (!Lt) continue;
              const Ht = Ot.replace(/[^a-zA-Z0-9_-]+/g, "_"), jt = await Ds(Lt, `pano_group_${i}_${Ht}.png`);
              jt && at.push({
                id: Ot,
                actionGroupId: Ot,
                image: jt
              });
            }
          }
          h.totalMaskCount > 0 && (K = await Ds(_t, `pano_mask_${i}.png`)), l === ii() && (p.painting_layer = {
            paint: ht,
            mask: K,
            groups: at,
            revision: l
          }, Rs = l, En());
        } catch (U) {
          console.warn("[pano] paint layer upload failed:", U);
        } finally {
          Xo = !1;
        }
      }
    })();
    return yo.set(i, s), s.finally(() => {
      yo.get(i) === s && yo.delete(i);
    }), s;
  }
  function ri() {
    const i = Ev(t, "pano_input_images", Ct, () => pt());
    if (i) return i;
    const a = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((_) => String((_ == null ? void 0 : _.name) || "")) : [], s = a.includes("erp_image"), l = a.includes("bg_erp");
    let h = [];
    return r && (s || l) ? h = s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : h = e === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Qf(t, h, () => pt(), `background:${h.join("|")}`);
  }
  function Yi() {
    const i = new Set(
      (p.stickers || []).map((a) => String((a == null ? void 0 : a.asset_id) || "")).filter((a) => !!a)
    );
    Object.keys(p.assets || {}).forEach((a) => {
      i.has(a) || (delete p.assets[a], Ct.delete(a));
    });
  }
  function Fs(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(j(i.y, -1, 1))
    };
  }
  function $s(i, a = null) {
    const { lon: s, lat: l } = Fs(i), h = dr();
    let g = h.x + (s / (2 * Math.PI) + 0.5) * h.w;
    const _ = h.y + (0.5 - l / Math.PI) * h.h;
    if (a !== null) {
      for (; g - a > h.w / 2; ) g -= h.w;
      for (; g - a < -h.w / 2; ) g += h.w;
    }
    return { x: g, y: _, z: 1 };
  }
  function Zo(i) {
    const a = $n(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0));
    let s = Kn(0, 1, 0);
    Math.abs(xn(a, s)) > 0.999 && (s = Kn(0, 0, 1));
    const l = mi(Ma(s, a)), h = mi(Ma(a, l)), g = Math.tan(j(Number(i.hFOV_deg || 20), 0.1, 179) * 0.5 * Fe), _ = Math.tan(j(Number(i.vFOV_deg || 20), 0.1, 179) * 0.5 * Fe), b = Number(i.rot_deg || i.roll_deg || 0) * Fe, v = Math.cos(b), S = Math.sin(b);
    return {
      centerDir: a,
      right: l,
      up: h,
      tanX: g,
      tanY: _,
      cr: v,
      sr: S
    };
  }
  function hr(i, a, s) {
    const l = a * i.cr - s * i.sr, h = a * i.sr + s * i.cr;
    return mi(Sa(Sa(i.centerDir, Na(i.right, l)), Na(i.up, h)));
  }
  function Ul(i) {
    const a = Zo(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: h }) => hr(a, l * a.tanX, h * a.tanY));
  }
  function jl(i, a, s) {
    const l = Zo(i), h = (a * 2 - 1) * l.tanX, g = (1 - s * 2) * l.tanY;
    return hr(l, h, g);
  }
  function Dp(i) {
    const a = (i == null ? void 0 : i.bbox) || null, s = (i == null ? void 0 : i.transform) || {};
    return a ? {
      u: (((Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: j((Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Rp(i) {
    var v, S, w, M;
    const a = (i == null ? void 0 : i.bbox) || null;
    if (!a) return [];
    const s = {
      u: (Number(a.u0 || 0) + Number(a.u1 || 0)) * 0.5,
      v: (Number(a.v0 || 0) + Number(a.v1 || 0)) * 0.5
    }, l = Math.max(0.01, Number(((v = i == null ? void 0 : i.transform) == null ? void 0 : v.scale) || 1)), h = Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.rot_deg) || 0), g = Number(((w = i == null ? void 0 : i.transform) == null ? void 0 : w.du) || 0), _ = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.dv) || 0);
    return [
      { u: Number(a.u0 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v0 || 0) },
      { u: Number(a.u1 || 0), v: Number(a.v1 || 0) },
      { u: Number(a.u0 || 0), v: Number(a.v1 || 0) }
    ].map((E) => jo(Bo(E, s, l, h), g, _));
  }
  function Op(i) {
    const a = Ke((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), s = (i == null ? void 0 : i.transform) || {}, l = (i == null ? void 0 : i.bbox) || {}, h = `${a}:${d.mode}:${Tr()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (d.mode === "frame") {
      const g = ie(), _ = g ? Ye(g) : null;
      return `${h}:frame:${String((g == null ? void 0 : g.id) || "")}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function Fp(i) {
    const a = String((i == null ? void 0 : i.id) || ""), l = [
      gn(i) ? "frame" : De(i) ? "sticker" : "item",
      a,
      d.mode,
      Number((i == null ? void 0 : i.yaw_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.pitch_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.hFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.vFOV_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.rot_deg) || 0).toFixed(4),
      Number((i == null ? void 0 : i.roll_deg) || 0).toFixed(4),
      yi(i)
    ].join(":");
    if (d.mode === "frame") {
      const h = ie(), g = h ? Ye(h) : null;
      return `${l}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((C == null ? void 0 : C.width) || 0))}:${Math.round(Number((C == null ? void 0 : C.height) || 0))}`;
  }
  function $p() {
    var a;
    const i = String(((a = p.ui_settings) == null ? void 0 : a.preview_quality) || "balanced");
    return i === "draft" ? d.hqFrames && d.hqFrames > 0 ? [28, 20] : d.interaction ? [12, 9] : [20, 14] : i === "high" ? d.hqFrames && d.hqFrames > 0 ? [48, 36] : d.interaction ? [20, 14] : [36, 26] : d.hqFrames && d.hqFrames > 0 ? [40, 30] : d.interaction ? [16, 12] : [28, 20];
  }
  function Bl() {
    var i;
    return !!(F && ((i = J == null ? void 0 : J.isSupported) != null && i.call(J)));
  }
  function Hs(i, a) {
    return !Bl() || String((a == null ? void 0 : a.mode) || "") !== "panorama" ? !1 : Number((i == null ? void 0 : i.x) || 0) === 0 && Number((i == null ? void 0 : i.y) || 0) === 0 && Math.round(Number((i == null ? void 0 : i.w) || 0)) === Math.round(Number((C == null ? void 0 : C.width) || 0)) && Math.round(Number((i == null ? void 0 : i.h) || 0)) === Math.round(Number((C == null ? void 0 : C.height) || 0));
  }
  function Hp() {
    if (!F) return;
    const i = F.getContext("webgl2");
    if (i)
      i.viewport(0, 0, F.width, F.height), i.clearColor(0, 0, 0, 1), i.clear(i.COLOR_BUFFER_BIT);
    else {
      const a = F.getContext("2d");
      a && (a.clearRect(0, 0, F.width, F.height), a.fillStyle = "#070707", a.fillRect(0, 0, F.width, F.height));
    }
    Pt.backgroundWasVisible = !1, Pt.backgroundDirty = !1;
  }
  function Vp(i, a, s, l = "modal_bg_gl") {
    if (!Hs(i, a) || !s) return !1;
    if (!Pt.backgroundDirty && Pt.backgroundWasVisible) return !0;
    const h = [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|"), g = J.renderScene({
      width: i.w,
      height: i.h,
      dpr: window.devicePixelRatio || 1,
      backgroundSource: s,
      backgroundRevision: `${l}:${h}`,
      textures: [],
      scene: { stickers: [], selectedId: null, hoveredId: null },
      view: a,
      backgroundOpacity: 1
    });
    return Pt.backgroundWasVisible = !!g, Pt.backgroundDirty = !g, !!g;
  }
  function zp(i = !1) {
    const a = C.width, s = C.height, l = dr();
    if (P.globalAlpha = 1, P.lineWidth = 1, i || (P.fillStyle = "#070707", P.fillRect(0, 0, a, s), P.fillStyle = "#070707", P.fillRect(l.x, l.y, l.w, l.h)), oi(), Yo(
      P,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      ri(),
      "modal_unwrap"
    ), d.showGrid && !d.fullscreen) {
      P.strokeStyle = "#3f3f46";
      for (let g = 0; g <= 16; g += 1) {
        const _ = l.x + l.w * g / 16;
        P.beginPath(), P.moveTo(_, l.y), P.lineTo(_, l.y + l.h), P.stroke();
      }
      for (let g = 0; g <= 8; g += 1) {
        const _ = l.y + l.h * g / 8;
        P.beginPath(), P.moveTo(l.x, _), P.lineTo(l.x + l.w, _), P.stroke();
      }
      P.strokeStyle = "rgba(250, 250, 250, 0.86)", P.lineWidth = 1.2, P.beginPath(), P.moveTo(l.x, l.y + l.h / 2), P.lineTo(l.x + l.w, l.y + l.h / 2), P.stroke(), P.fillStyle = "rgba(250, 250, 250, 0.42)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center";
      const h = l.y + l.h * 0.57;
      P.fillText("Left", l.x + l.w * 0.25, h), P.fillText("Front", l.x + l.w * 0.5, h), P.fillText("Right", l.x + l.w * 0.75, h), P.fillText("Back", l.x + 38, h), P.fillText("Back", l.x + l.w - 38, h);
    }
  }
  function Gl(i, a, s = 1) {
    let l = !1;
    P.strokeStyle = a, P.lineWidth = s, P.beginPath();
    for (const h of i) {
      const g = Wi(h);
      if (!g) {
        l = !1;
        continue;
      }
      l ? P.lineTo(g.x, g.y) : (P.moveTo(g.x, g.y), l = !0);
    }
    P.stroke();
  }
  function Up(i = !1) {
    const a = C.width, s = C.height;
    if (i || (Bl() ? P.clearRect(0, 0, a, s) : (P.fillStyle = "#070707", P.fillRect(0, 0, a, s))), oi(), Yo(
      P,
      { x: 0, y: 0, w: a, h: s },
      {
        mode: "panorama",
        yawDeg: d.viewYaw,
        pitchDeg: d.viewPitch,
        fovDeg: d.viewFov
      },
      ri(),
      "modal_pano"
    ), d.showGrid && !d.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const g = [];
        for (let _ = -89; _ <= 89; _ += 4) g.push($n(h, _));
        Gl(g, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const g = [];
        for (let _ = -180; _ <= 180; _ += 4) g.push($n(_, h));
        Gl(g, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: $n(-90, 0) },
        { name: "Front", dir: $n(0, 0) },
        { name: "Right", dir: $n(90, 0) },
        { name: "Back", dir: $n(180, 0) }
      ];
      P.fillStyle = "rgba(250, 250, 250, 0.42)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center", l.forEach((h) => {
        const g = Wi(h.dir);
        g && P.fillText(h.name, g.x, g.y + 24);
      });
    }
  }
  function Kl(i, a = null, s = null) {
    if (d.mode === "frame") {
      const l = a || ie();
      if (!l) return [];
      const h = s || Ye(l);
      return _g(i, l, h);
    }
    return yg(i);
  }
  function jp(i, a) {
    const s = String(i.actionGroupId || i.id || "").trim(), l = mn(s, i.layerKind), h = [], g = [], _ = d.mode === "frame" ? ie() : null, b = _ ? Ye(_) : null;
    for (const gt of l) {
      const vt = (gt == null ? void 0 : gt.geometry) || null, mt = (vt == null ? void 0 : vt.geometryKind) === "lasso_fill" ? vt == null ? void 0 : vt.points : (vt == null ? void 0 : vt.processedPoints) || (vt == null ? void 0 : vt.rawPoints) || (vt == null ? void 0 : vt.points) || [], _t = Kl(mt, _, b).filter((at) => Number.isFinite(at == null ? void 0 : at.x) && Number.isFinite(at == null ? void 0 : at.y));
      if (!_t.length) continue;
      g.push(..._t);
      const ht = yr(String((gt == null ? void 0 : gt.toolKind) || "pen")), K = rn[ht] || rn[nr];
      h.push({
        points: _t,
        closed: String((vt == null ? void 0 : vt.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((gt == null ? void 0 : gt.size) || 10) * Math.max(0.1, Number((K == null ? void 0 : K.sizeScale) ?? 1)) + 10),
        layerKind: String((gt == null ? void 0 : gt.layerKind) || i.layerKind || "paint")
      });
    }
    if (!g.length) {
      const gt = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(a, gt), gt;
    }
    let v = 1 / 0, S = 1 / 0, w = -1 / 0, M = -1 / 0;
    for (const gt of h)
      for (const mt of Array.isArray(gt == null ? void 0 : gt.points) ? gt.points : []) {
        const _t = Number((mt == null ? void 0 : mt.x) || 0), ht = Number((mt == null ? void 0 : mt.y) || 0);
        v = Math.min(v, _t - 2), S = Math.min(S, ht - 2), w = Math.max(w, _t + 2), M = Math.max(M, ht + 2);
      }
    if (!Number.isFinite(v) || !Number.isFinite(S) || !Number.isFinite(w) || !Number.isFinite(M)) {
      const gt = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(a, gt), gt;
    }
    const E = [
      { x: v, y: S },
      { x: w, y: S },
      { x: w, y: M },
      { x: v, y: M }
    ], T = { x: (v + w) * 0.5, y: (S + M) * 0.5 }, O = { x: T.x, y: S }, U = { x: w, y: T.y }, Q = { x: T.x, y: M }, ct = { x: v, y: T.y }, St = {
      kind: "strokeGroup",
      center: T,
      corners: E,
      edgeMidpoints: [
        { edge: "top", x: O.x, y: O.y, a: E[0], b: E[1] },
        { edge: "right", x: U.x, y: U.y, a: E[1], b: E[2] },
        { edge: "bottom", x: Q.x, y: Q.y, a: E[2], b: E[3] },
        { edge: "left", x: ct.x, y: ct.y, a: E[3], b: E[0] }
      ],
      rotateStemBase: O,
      rotateHandle: { x: O.x, y: O.y - 30 },
      strokePaths: h,
      visible: !0
    };
    return d._strokeGeomCache.set(a, St), St;
  }
  function Bp(i, a) {
    const s = Rp(i), l = Kl(s);
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
  function pr(i, a = null, s = null, l = null) {
    if (d.mode === "frame") {
      const St = s || ie(), gt = l || Ye(St), vt = St ? Ji(St, i) : null;
      return vt ? {
        x: Number(gt.x || 0) + Number(vt.x || 0) * Number(gt.w || 0),
        y: Number(gt.y || 0) + Number(vt.y || 0) * Number(gt.h || 0),
        z: 1
      } : null;
    }
    if (d.mode === "unwrap") return $s(i, a);
    const { right: h, up: g, fwd: _ } = Es(), b = xn(i, h), v = xn(i, g), S = xn(i, _), w = C.width, M = C.height, E = d.viewFov * Fe, T = 2 * Math.atan(Math.tan(E / 2) * (M / Math.max(w, 1))), O = w / 2 / Math.tan(E / 2), U = M / 2 / Math.tan(T / 2), Q = Math.max(S, 1e-4), ct = Math.max(w, M) * 2;
    return {
      x: j(w / 2 + b / Q * O, -ct, w + ct),
      y: j(M / 2 - v / Q * U, -ct, M + ct),
      z: Q
    };
  }
  function Gp(i) {
    const a = $n(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), s = d.mode === "frame" ? ie() : null, l = s ? Ye(s) : null, h = pr(a, null, s, l);
    if (!h) return { visible: !1 };
    const g = Zo(i), b = Ul(i).map((mt) => pr(mt, h.x, s, l)), v = hr(g, 0, g.tanY), S = hr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), w = pr(v, h.x, s, l), M = pr(S, (w == null ? void 0 : w.x) ?? h.x, s, l), E = ((M == null ? void 0 : M.x) ?? w.x) - w.x, T = ((M == null ? void 0 : M.y) ?? w.y) - w.y, O = Math.hypot(E, T) || 1, U = {
      x: w.x + E / O * 30,
      y: w.y + T / O * 30
    }, Q = pr(hr(g, 0, g.tanY), h.x, s, l), ct = pr(hr(g, g.tanX, 0), h.x, s, l), St = pr(hr(g, 0, -g.tanY), h.x, s, l), gt = pr(hr(g, -g.tanX, 0), h.x, s, l), vt = [
      {
        edge: "top",
        x: Q.x,
        y: Q.y,
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
        x: gt.x,
        y: gt.y,
        a: { x: b[3].x, y: b[3].y },
        b: { x: b[0].x, y: b[0].y }
      }
    ];
    return {
      center: { x: h.x, y: h.y },
      corners: b.map((mt) => ({ x: mt.x, y: mt.y })),
      edgeMidpoints: vt,
      rotateStemBase: { x: w.x, y: w.y },
      rotateHandle: U,
      topEdge: { a: 0, b: 1 },
      visible: !0
    };
  }
  function Re(i) {
    if (Te(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), g = tp(h, i.layerKind), _ = d._strokeGeomCache.get(g);
      return _ || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), jp(i, g));
    }
    if (We(i)) {
      const h = Op(i), g = d._strokeGeomCache.get(h);
      return g || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), Bp(i, h));
    }
    const a = Fp(i), s = d._strokeGeomCache.get(a);
    if (s) return s;
    d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear();
    const l = Gp(i);
    return d._strokeGeomCache.set(a, l), l;
  }
  function Jo(i, a, s, l = null) {
    const h = [];
    for (let g = 0; g <= s; g += 1) {
      const _ = g / s;
      let b = 0, v = 0;
      a === 0 ? (b = _, v = 0) : a === 1 ? (b = 1, v = _) : a === 2 ? (b = 1 - _, v = 1) : (b = 0, v = 1 - _);
      const S = jl(i, b, v), w = d.mode === "unwrap" ? $s(S, l) : Wi(S);
      w && h.push(w);
    }
    return h;
  }
  function Kp(i, a) {
    const s = $n(Number(i.yaw_deg || 0), Number(i.pitch_deg || 0)), l = d.mode === "unwrap" ? $s(s) : null, h = l ? l.x : null, g = d.mode === "pano" ? 28 : 20, _ = [
      Jo(i, 0, g, h),
      Jo(i, 1, g, h),
      Jo(i, 2, g, h),
      Jo(i, 3, g, h)
    ];
    P.strokeStyle = a ? "rgba(250, 250, 250, 0.9)" : "#71717a", P.lineWidth = a ? 2 : 1, P.beginPath();
    let b = !1;
    for (const v of _)
      for (const S of v)
        b ? P.lineTo(S.x, S.y) : (P.moveTo(S.x, S.y), b = !0);
    P.closePath(), P.stroke();
  }
  function Wp() {
    const i = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(s.z_index || 0) - Number(l.z_index || 0));
    if (d.mode === "frame") return i;
    const a = Array.isArray(p.shots) ? p.shots : [];
    return [...i, ...a];
  }
  function Vs() {
    const i = [...Array.isArray(p.stickers) ? p.stickers : []].sort((s, l) => Number(l.z_index || 0) - Number(s.z_index || 0));
    if (d.mode === "frame") return i;
    const a = Array.isArray(p.shots) ? p.shots : [];
    return [...i, ...a];
  }
  function zs(i, a = []) {
    if (!(!i || !Array.isArray(a) || a.length < 4)) {
      i.beginPath(), i.moveTo(a[0].x, a[0].y);
      for (let s = 1; s < 4; s += 1) i.lineTo(a[s].x, a[s].y);
      i.closePath();
    }
  }
  function qp(i, a, s, l) {
    if (De(i)) {
      const h = P.globalAlpha;
      P.globalAlpha = sp(i), d.mode === "frame" ? (P.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", P.lineWidth = s ? 2 : 1, zs(P, a.corners), P.stroke()) : Kp(i, s), P.globalAlpha = h;
      return;
    }
    P.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", zs(P, a.corners), P.fill(), P.strokeStyle = s ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", P.lineWidth = s ? 2.8 : 1.9, zs(P, a.corners), P.stroke();
  }
  function Yp(i, a, s) {
    P.fillStyle = s, a.corners.forEach((l) => {
      P.beginPath(), P.arc(l.x, l.y, 6.5, 0, Math.PI * 2), P.fill();
    }), gn(i) && (P.strokeStyle = s, P.lineCap = "round", P.lineWidth = 4, a.edgeMidpoints.forEach((l) => {
      var w, M, E, T;
      const h = (((w = l.b) == null ? void 0 : w.x) ?? l.x) - (((M = l.a) == null ? void 0 : M.x) ?? l.x), g = (((E = l.b) == null ? void 0 : E.y) ?? l.y) - (((T = l.a) == null ? void 0 : T.y) ?? l.y), _ = Math.hypot(h, g) || 1, b = h / _, v = g / _, S = 10;
      P.beginPath(), P.moveTo(l.x - b * S, l.y - v * S), P.lineTo(l.x + b * S, l.y + v * S), P.stroke();
    }), P.lineCap = "butt"), Te(i) || (P.strokeStyle = "rgba(250, 250, 250, 0.9)", P.lineWidth = 1.8, P.beginPath(), P.moveTo(a.rotateStemBase.x, a.rotateStemBase.y), P.lineTo(a.rotateHandle.x, a.rotateHandle.y), P.stroke(), P.fillStyle = s, P.beginPath(), P.arc(a.rotateHandle.x, a.rotateHandle.y, 10, 0, Math.PI * 2), P.fill());
  }
  function Xp() {
    var b;
    const [i, a] = $p(), s = An(), l = s.length > 1, h = e === "cutout" ? Wp() : Pe(), g = h.map((v) => `${String((v == null ? void 0 : v.id) || "")}:${gn(v) ? "frame" : Number((v == null ? void 0 : v.z_index) || 0)}`).join("|");
    (!d._sortedItemsCache || d._sortedItemsCache.src !== h || d._sortedItemsCache.orderKey !== g) && (d._sortedItemsCache = {
      src: h,
      orderKey: g,
      sorted: [...h]
    });
    const _ = d._sortedItemsCache.sorted;
    for (const v of _) {
      const S = !l && ep(v);
      if (d.mode === "frame" && !S || !d.showObjects && !gn(v)) continue;
      const w = Re(v);
      if (e !== "stickers" && !w.visible)
        continue;
      const M = De(v), E = fr(v);
      if (qp(v, w, S, E), S && w.visible) {
        const T = E ? "#ff4d4f" : M && Ae(v) ? "#f59e0b" : "#0070f3";
        Yp(v, w, T);
      }
    }
    if (l) {
      const v = Cs(s);
      if (v != null && v.visible) {
        const S = As(s) ? "#ff4d4f" : "#0070f3";
        P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.95)", P.lineWidth = 2, P.setLineDash([6, 4]), P.beginPath(), P.moveTo(v.corners[0].x, v.corners[0].y);
        for (let w = 1; w < v.corners.length; w += 1) P.lineTo(v.corners[w].x, v.corners[w].y);
        P.closePath(), P.stroke(), P.setLineDash([]), P.fillStyle = S, v.corners.forEach((w) => {
          P.beginPath(), P.arc(w.x, w.y, 6.5, 0, Math.PI * 2), P.fill();
        }), P.restore();
      }
    } else
      s.forEach((v) => {
        if (!Te(v) && !We(v)) return;
        const S = Re(v);
        if (!(S != null && S.visible)) return;
        const w = fr(v) ? "#ff4d4f" : "#0070f3";
        P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.95)", P.lineWidth = 2, P.setLineDash([6, 4]), P.beginPath(), P.moveTo(S.corners[0].x, S.corners[0].y);
        for (let M = 1; M < S.corners.length; M += 1) P.lineTo(S.corners[M].x, S.corners[M].y);
        P.closePath(), P.stroke(), P.setLineDash([]), Te(v) && (P.fillStyle = w, S.corners.forEach((M) => {
          P.beginPath(), P.arc(M.x, M.y, 6.5, 0, Math.PI * 2), P.fill();
        })), P.restore();
      });
    if (((b = d.interaction) == null ? void 0 : b.kind) === "marquee_select") {
      const v = hu(d.interaction.start, d.interaction.current);
      P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.9)", P.fillStyle = "rgba(255, 255, 255, 0.08)", P.lineWidth = 1, P.setLineDash([5, 4]), P.beginPath(), P.rect(v.x0, v.y0, v.x1 - v.x0, v.y1 - v.y0), P.fill(), P.stroke(), P.restore();
    }
    d.hqFrames && i >= 40 && a >= 30 && (d.hqFrames -= 1, d.hqFrames > 0 && pt());
  }
  function Wl(i) {
    const a = Mi(i), s = j(Number((a == null ? void 0 : a.aspect) || 1), 0.05, 20), l = 320;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function Zp() {
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
  function ql(i, a = {}) {
    if (!i) return "";
    const s = ri(), l = s && (s.complete || s.naturalWidth || s.width) ? [
      String(s.currentSrc || s.src || ""),
      Number(s.naturalWidth || s.width || 0),
      Number(s.naturalHeight || s.height || 0)
    ].join("|") : "no_bg", h = Wl(i);
    return [
      String((i == null ? void 0 : i.id) || ""),
      JSON.stringify(i || null),
      ii(),
      Zp(),
      Gi(),
      l,
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(a.quality || "balanced")
    ].join("|");
  }
  function Yl(i = {}) {
    var b, v;
    if (e !== "cutout") return null;
    const a = i.shot || ie();
    if (!a)
      return t.__panoCutoutPreviewSurface = null, null;
    const s = Wl(a);
    (!t.__panoCutoutPreviewCanvas || Number(t.__panoCutoutPreviewCanvas.width || 0) !== s.width || Number(t.__panoCutoutPreviewCanvas.height || 0) !== s.height) && (t.__panoCutoutPreviewCanvas = document.createElement("canvas"), t.__panoCutoutPreviewCanvas.width = s.width, t.__panoCutoutPreviewCanvas.height = s.height);
    const l = ql(a, i);
    if (((b = t.__panoCutoutPreviewSurface) == null ? void 0 : b.source) === t.__panoCutoutPreviewCanvas && ((v = t.__panoCutoutPreviewSurface) == null ? void 0 : v.revision) === l)
      return t.__panoCutoutPreviewSurface;
    const h = t.__panoCutoutPreviewCanvas, g = h.getContext("2d");
    return g ? Qp(
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
  function Jp() {
    if (e !== "cutout") return;
    const i = ie();
    if (!i) {
      d.outputPreviewRect = null, lt && (lt.style.display = "none");
      return;
    }
    const a = 14, s = j(Number(d.outputPreviewAnim ?? (d.outputPreviewExpanded ? 1 : 0)), 0, 1), l = Math.max(120, Math.min(250, C.width * 0.28)), h = Math.max(260, Math.min(560, C.width * 0.62)), g = Math.max(76, Math.min(150, C.height * 0.22)), _ = Math.max(160, Math.min(340, C.height * 0.48)), b = Sn(l, h, s), v = Sn(g, _, s), S = Mi(i), w = Number((S == null ? void 0 : S.aspect) || 1);
    let M = b, E = M / w;
    E > v && (E = v, M = E * w);
    const T = C.width - a - M, O = a, U = 12;
    d.outputPreviewRect = { x: T, y: O, w: M, h: E };
    const Q = () => {
      if (!lt) return;
      const _t = `${Math.round(T + M - 8 - 24)}px`, ht = `${Math.round(O + 8)}px`;
      lt.style.display = "inline-flex", lt.style.left !== _t && (lt.style.left = _t), lt.style.top !== ht && (lt.style.top = ht);
    }, ct = (_t, ht, K, at, Tt) => {
      const Ot = Math.max(0, Math.min(Tt, Math.min(K, at) * 0.5));
      P.beginPath(), typeof P.roundRect == "function" ? P.roundRect(_t, ht, K, at, Ot) : (P.moveTo(_t + Ot, ht), P.arcTo(_t + K, ht, _t + K, ht + at, Ot), P.arcTo(_t + K, ht + at, _t, ht + at, Ot), P.arcTo(_t, ht + at, _t, ht, Ot), P.arcTo(_t, ht, _t + K, ht, Ot)), P.closePath();
    };
    P.save(), P.shadowColor = "rgba(0, 0, 0, 0.45)", P.shadowBlur = 22, P.shadowOffsetX = 0, P.shadowOffsetY = 8, P.fillStyle = "rgba(10, 10, 10, 0.72)", ct(T, O, M, E, U), P.fill(), P.restore(), P.save(), ct(T, O, M, E, U), P.clip();
    const St = ql(i, { quality: "balanced" });
    let gt = t.__panoCutoutPreviewSurface;
    (!gt || gt.revision !== St) && !d.interaction && !d.cutoutPreviewSurfaceRaf && !d.cutoutPreviewSurfaceTimer && (gt = Yl({ shot: i, quality: "balanced" }));
    const vt = (gt == null ? void 0 : gt.source) || null, mt = !!(vt && Number(vt.width || 0) > 1 && Number(vt.height || 0) > 1);
    if ((gt == null ? void 0 : gt.revision) !== St && Us(), !mt) {
      P.fillStyle = "rgba(255, 255, 255, 0.06)", P.fillRect(T, O, M, E), P.strokeStyle = "rgba(255, 255, 255, 0.12)", P.lineWidth = 1, P.strokeRect(T + 0.5, O + 0.5, M - 1, E - 1), Us(), P.restore(), Q();
      return;
    }
    P.drawImage(vt, T, O, M, E), P.restore(), Q();
  }
  function Qp(i, a, s, l = {}) {
    const h = ri();
    return bb({
      owner: t,
      ctx: i,
      rect: a,
      shot: s,
      bgImage: h,
      cachePrefix: String(l.cachePrefix || "modal_cutout_output_preview"),
      quality: String(l.quality || "balanced"),
      drawDisplayList: Yo
    });
  }
  function tg() {
    Yl();
  }
  function Us() {
    if (e !== "cutout") return;
    const i = performance.now(), a = Qh(), s = i - Number(d.cutoutPreviewSurfaceLastTs || 0);
    if (d.cutoutPreviewSurfaceRaf || d.cutoutPreviewSurfaceTimer) return;
    const l = () => {
      d.cutoutPreviewSurfaceRaf = requestAnimationFrame(() => {
        var h, g, _, b, v, S, w, M;
        d.cutoutPreviewSurfaceRaf = 0, d.cutoutPreviewSurfaceLastTs = performance.now(), tg(), Pt.dirty = !0, (g = (h = t.__panoDomPreview) == null ? void 0 : h.requestDraw) == null || g.call(h), (_ = t.setDirtyCanvas) == null || _.call(t, !0, !1), (v = (b = t.graph) == null ? void 0 : b.setDirtyCanvas) == null || v.call(b, !0, !0), (M = (w = (S = dn) == null ? void 0 : S.canvas) == null ? void 0 : w.setDirty) == null || M.call(w, !0, !0);
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
  function js(i, a) {
    if (!i || !a) return null;
    const s = Number(a.x || 0), l = Number(a.y || 0);
    return jl(i, s, l);
  }
  function Xi(i) {
    if (!i) return null;
    const a = (Number(i.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(i.v || 0)) * Math.PI, l = Math.cos(s);
    return Kn(l * Math.sin(a), Math.sin(s), l * Math.cos(a));
  }
  function qe(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function gr(i, a, s, l = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Ve(i, "widthScale", 1),
      pressureLike: Ve(i, "pressureLike", 1)
    }, ...l, u: a, v: s };
  }
  function eg(i, a, s) {
    const l = qe(i), h = qe(a);
    return gr(i, Sn(l.x, h.x, s), Sn(l.y, h.y, s), {
      t: Sn(Number((i == null ? void 0 : i.t) || 0), Number((a == null ? void 0 : a.t) || 0), s),
      widthScale: Sn(Ve(i, "widthScale", 1), Ve(a, "widthScale", 1), s),
      pressureLike: Sn(Ve(i, "pressureLike", 1), Ve(a, "pressureLike", 1), s)
    });
  }
  function ng(i, a = !1) {
    return a ? 12e-4 : 18e-4;
  }
  function Bs(i, a, s = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    if (i.length === 1) return [gr(i[0], qe(i[0]).x, qe(i[0]).y)];
    const l = ng(a, s), h = (w, M) => {
      const E = [0];
      for (let vt = 1; vt < w.length; vt += 1) {
        const mt = qe(w[vt - 1]), _t = qe(w[vt]);
        E.push(E[vt - 1] + Math.hypot(_t.x - mt.x, _t.y - mt.y));
      }
      const T = E[E.length - 1] || 0;
      if (T <= 1e-8) {
        const vt = w[0], mt = qe(vt);
        return [gr(vt, mt.x, mt.y)];
      }
      const O = [];
      let U = 0;
      for (let vt = 0; vt <= T + 1e-9; vt += M) {
        for (; U < E.length - 2 && E[U + 1] < vt; ) U += 1;
        const mt = E[U], _t = E[U + 1], ht = Math.max(1e-8, _t - mt);
        O.push(eg(w[U], w[U + 1], j((vt - mt) / ht, 0, 1)));
      }
      const Q = w[w.length - 1], ct = qe(Q), St = O[O.length - 1], gt = St ? qe(St) : null;
      return (!gt || Math.hypot(gt.x - ct.x, gt.y - ct.y) > M * 0.35) && O.push(gr(Q, ct.x, ct.y)), O;
    }, g = (w) => {
      if (!Array.isArray(w) || w.length < 3) return w ? w.slice() : [];
      const M = [gr(w[0], qe(w[0]).x, qe(w[0]).y)];
      for (let E = 0; E < w.length - 1; E += 1) {
        const T = w[E], O = w[E + 1], U = qe(T), Q = qe(O), ct = gr(
          T,
          U.x * 0.75 + Q.x * 0.25,
          U.y * 0.75 + Q.y * 0.25,
          {
            t: Number(T.t || 0) * 0.75 + Number(O.t || 0) * 0.25,
            widthScale: Ve(T, "widthScale", 1) * 0.75 + Ve(O, "widthScale", 1) * 0.25,
            pressureLike: Ve(T, "pressureLike", 1) * 0.75 + Ve(O, "pressureLike", 1) * 0.25
          }
        ), St = gr(
          T,
          U.x * 0.25 + Q.x * 0.75,
          U.y * 0.25 + Q.y * 0.75,
          {
            t: Number(T.t || 0) * 0.25 + Number(O.t || 0) * 0.75,
            widthScale: Ve(T, "widthScale", 1) * 0.25 + Ve(O, "widthScale", 1) * 0.75,
            pressureLike: Ve(T, "pressureLike", 1) * 0.25 + Ve(O, "pressureLike", 1) * 0.75
          }
        );
        M.push(ct, St);
      }
      return M.push(gr(w[w.length - 1], qe(w[w.length - 1]).x, qe(w[w.length - 1]).y)), M;
    }, _ = h(i, l);
    if (_.length < 3) return _;
    const b = s ? 2 : 1;
    let v = _.slice();
    for (let w = 0; w < b; w += 1) v = g(v);
    return h(v, Math.max(l * 0.75, 55e-5));
  }
  function Ve(i, a, s = 1) {
    const l = Number(i == null ? void 0 : i[a]);
    return Number.isFinite(l) ? Math.max(0, l) : s;
  }
  function rg(i) {
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
  function Er(i, a) {
    const s = document.createElement("canvas");
    s.width = Math.max(1, Math.round(i)), s.height = Math.max(1, Math.round(a));
    const l = s.getContext("2d");
    return l && (l.clearRect(0, 0, s.width, s.height), l.imageSmoothingEnabled = !0), { canvas: s, ctx: l };
  }
  function Tr() {
    const i = Qo();
    return `${String(d.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function ii() {
    const i = Qo();
    return `${String(d.paintStrokeRevision)}:${String(d.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function ig() {
    d.paintStrokeRevision += 1, d.paintCompositeRevision += 1;
  }
  function og() {
    d.paintCompositeRevision += 1;
  }
  function ag() {
    d._sortedItemsCache = null, d._strokeGeomCache.clear();
  }
  function Xl() {
    var i, a;
    d.paintEngineRevisionKey = null, (a = (i = d.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || a.call(i, p), d.paintEngineRevisionKey = Tr();
  }
  function yn() {
    d.objectVisualRevision = Number(d.objectVisualRevision || 0) + 1, ag();
  }
  function In({ rebuildPaintEngine: i = !1 } = {}) {
    ig(), yn(), i && Xl();
  }
  function Zi() {
    og(), yn();
  }
  function oi() {
    var l;
    const i = Qo(), a = `${i.width}x${i.height}`;
    d.paintEngineDescriptorKey !== a && (d.paintEngine = Vc(i), d.paintEngineDescriptorKey = a, d.paintEngineRevisionKey = "");
    const s = Tr();
    d.paintEngineRevisionKey !== s && (d.paintEngineRevisionKey = s, (l = d.paintEngine) == null || l.rebuildCommitted(p));
  }
  function Qo() {
    const i = ri(), a = Number((i == null ? void 0 : i.naturalWidth) || (i == null ? void 0 : i.width) || 0), s = Number((i == null ? void 0 : i.naturalHeight) || (i == null ? void 0 : i.height) || 0);
    if (a > 1 && s > 1)
      return { kind: "ERP_GLOBAL", width: a, height: s };
    const l = Math.max(1, Number((p == null ? void 0 : p.output_preset) || 2048));
    return {
      kind: "ERP_GLOBAL",
      width: l,
      height: Math.max(1, Math.round(l * 0.5))
    };
  }
  function Xn() {
    return Qo();
  }
  function sg(i, a, s, l, h = null) {
    const g = rg(i), _ = Ve(a, "widthScale", 1) * Ve(a, "pressureLike", 1);
    return g.model === "erp_uv_norm" ? Math.max(0.5, g.value * s * _) : g.model === "world_angle" ? h ? Math.max(0.5, g.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Fe) * s * _) : Math.max(0.5, g.value / (2 * Math.PI) * s * _) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * _);
  }
  function cg(i, a, s = {}) {
    const l = String((a == null ? void 0 : a.layerKind) || "paint"), h = String((a == null ? void 0 : a.toolKind) || "pen"), g = s.preview === !0, _ = g ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * _ : 1, l === "mask") {
      i.fillStyle = g ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((a == null ? void 0 : a.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (a == null ? void 0 : a.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, v = g ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${v})`;
  }
  function lg(i, a, s) {
    const l = Math.max(0.5, Math.min(s, Number((a == null ? void 0 : a.radiusPx) || 0.5)));
    !Number.isFinite(a == null ? void 0 : a.x) || !Number.isFinite(a == null ? void 0 : a.y) || !Number.isFinite(l) || (i.beginPath(), i.arc(Number(a.x || 0), Number(a.y || 0), l, 0, Math.PI * 2), i.fill());
  }
  function ug(i, a, s, l, h = {}) {
    if (!i || !Array.isArray(a) || !a.length) return;
    const g = Math.max(l.w, l.h) * 0.25;
    i.save(), cg(i, s, h);
    const _ = (b) => lg(i, b, g);
    if (a.length === 1) {
      _(a[0]), i.restore();
      return;
    }
    for (let b = 0; b < a.length - 1; b += 1) {
      const v = a[b], S = a[b + 1];
      if (!v || !S) continue;
      const w = Number(v.x || 0), M = Number(v.y || 0), E = Number(S.x || 0), T = Number(S.y || 0), O = Math.max(0.5, Math.min(g, Number(v.radiusPx || 0.5))), U = Math.max(0.5, Math.min(g, Number(S.radiusPx || 0.5)));
      if (!Number.isFinite(w) || !Number.isFinite(M) || !Number.isFinite(E) || !Number.isFinite(T) || !Number.isFinite(O) || !Number.isFinite(U)) continue;
      const Q = E - w, ct = T - M, St = Math.hypot(Q, ct);
      if (!Number.isFinite(St) || St < 1e-6) {
        _(v);
        continue;
      }
      if (St > Math.max(l.w, l.h) * 0.5) continue;
      const gt = Math.max(0.5, Math.min(O, U)), vt = Math.max(0.35, Math.min(gt * 0.4, 2.25)), mt = Math.max(1, Math.ceil(St / vt));
      for (let _t = 0; _t <= mt; _t += 1) {
        const ht = _t / mt;
        _({
          x: Sn(w, E, ht),
          y: Sn(M, T, ht),
          radiusPx: Sn(O, U, ht)
        });
      }
    }
    _(a[a.length - 1]), i.restore();
  }
  function fg(i, a, s, l) {
    ug(i, a, s, l, { preview: !1 });
  }
  function dg(i, a, s, l, h) {
    var b, v, S, w;
    if (!i || !Array.isArray(a) || a.length < 3) return;
    const g = "u", _ = "v";
    if (i.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const M = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(M.r || 0) * 255)}, ${Math.round(Number(M.g || 0) * 255)}, ${Math.round(Number(M.b || 0) * 255)}, ${Number(M.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((b = a[0]) == null ? void 0 : b[g]) || 0) * l.w, Number(((v = a[0]) == null ? void 0 : v[_]) || 0) * l.h);
    for (let M = 1; M < a.length; M += 1)
      i.lineTo(Number(((S = a[M]) == null ? void 0 : S[g]) || 0) * l.w, Number(((w = a[M]) == null ? void 0 : w[_]) || 0) * l.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Zl(i) {
    const a = (i == null ? void 0 : i.geometry) || null;
    return a ? String(a.geometryKind || "") === "lasso_fill" ? Array.isArray(a.points) ? a.points : [] : Array.isArray(a.processedPoints) && a.processedPoints.length ? a.processedPoints : Array.isArray(a.rawPoints) && a.rawPoints.length ? a.rawPoints : Array.isArray(a.points) ? a.points : [] : [];
  }
  function hg(i, a) {
    const s = Zl(i);
    return !Array.isArray(s) || !s.length ? [] : s.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((a == null ? void 0 : a.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((a == null ? void 0 : a.h) || 1),
      radiusPx: sg(i, l, Number((a == null ? void 0 : a.w) || 1), Number((a == null ? void 0 : a.h) || 1))
    }));
  }
  function Jl(i, a, s = null) {
    var b, v, S, w;
    if (!(i != null && i.ctx) || !a) return !1;
    const l = s || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((v = i.canvas) == null ? void 0 : v.height) || 0) }, h = String((a == null ? void 0 : a.toolKind) || "") === "eraser" ? {
      ...a,
      layerKind: "mask",
      toolKind: String(((S = a == null ? void 0 : a.geometry) == null ? void 0 : S.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : a;
    if (String(((w = a == null ? void 0 : a.geometry) == null ? void 0 : w.geometryKind) || "") === "lasso_fill")
      return dg(i.ctx, Zl(h), h, l), !0;
    const _ = hg(h, l);
    return _.length ? (fg(i.ctx, _, h, l), !0) : !1;
  }
  function pg(i, a, s, l = 8) {
    const h = new Uint8Array(a * s), g = [], _ = new Int32Array(a * s), b = new Int32Array(a * s);
    for (let v = 0; v < s; v += 1)
      for (let S = 0; S < a; S += 1) {
        const w = v * a + S;
        if (h[w] || i[w] <= l) continue;
        let M = 0, E = 0;
        _[E] = S, b[E] = v, E += 1, h[w] = 1;
        const T = [];
        let O = S, U = v, Q = S, ct = v;
        for (; M < E; ) {
          const St = _[M], gt = b[M];
          M += 1, T.push({ x: St, y: gt }), St < O && (O = St), gt < U && (U = gt), St > Q && (Q = St), gt > ct && (ct = gt);
          const vt = [
            [St - 1, gt],
            [St + 1, gt],
            [St, gt - 1],
            [St, gt + 1]
          ];
          for (const [mt, _t] of vt) {
            if (mt < 0 || _t < 0 || mt >= a || _t >= s) continue;
            const ht = _t * a + mt;
            h[ht] || i[ht] <= l || (h[ht] = 1, _[E] = mt, b[E] = _t, E += 1);
          }
        }
        g.push({ pixels: T, minX: O, minY: U, maxX: Q, maxY: ct });
      }
    return g;
  }
  function gg(i, a, s = {}) {
    var S;
    const l = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), g = (S = i == null ? void 0 : i.getContext) == null ? void 0 : S.call(i, "2d");
    if (!g || l < 1 || h < 1) return [];
    const _ = g.getImageData(0, 0, l, h), b = new Uint8Array(l * h);
    for (let w = 0; w < b.length; w += 1) b[w] = _.data[w * 4 + 3];
    return pg(b, l, h, 8).map((w, M) => {
      const E = w.maxX - w.minX + 1, T = w.maxY - w.minY + 1, O = document.createElement("canvas");
      O.width = E, O.height = T;
      const U = O.getContext("2d");
      if (!U) return null;
      const Q = U.createImageData(E, T);
      return w.pixels.forEach(({ x: ct, y: St }) => {
        const gt = (St * l + ct) * 4, vt = ((St - w.minY) * E + (ct - w.minX)) * 4;
        Q.data[vt + 0] = _.data[gt + 0], Q.data[vt + 1] = _.data[gt + 1], Q.data[vt + 2] = _.data[gt + 2], Q.data[vt + 3] = _.data[gt + 3];
      }), U.putImageData(Q, 0, 0), {
        id: bi("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + M * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: w.minX / l,
          v0: w.minY / h,
          u1: (w.maxX + 1) / l,
          v1: (w.maxY + 1) / h
        },
        rasterDataUrl: O.toDataURL("image/png"),
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
    const s = Zo(i), l = xn(a, s.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const h = xn(a, s.right) / l, g = xn(a, s.up) / l, _ = h * s.cr + g * s.sr, b = -h * s.sr + g * s.cr;
    return {
      x: (_ / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - b / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function mg(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (d.mode === "unwrap") {
      const s = dr();
      return i.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const a = i.map((s) => Wi(Xi(s))).filter(Boolean);
    return a.every((s) => Number(s.z || 0) > 0) ? a.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function yg(i) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (d.mode === "unwrap") {
      const s = dr();
      return i.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const a = i.map((s) => Wi(Xi(s))).filter(Boolean);
    return a.every((s) => Number(s.z || 0) > 0) ? a.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function bg(i, a = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let s = 0; s < i.length; s += 1) {
      const l = i[s], h = i[(s + 1) % i.length];
      if (!l || !h || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(l.x), Number(h.y) - Number(l.y)) > a) return !1;
    }
    return !0;
  }
  function vg(i, a, s) {
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
    return bg(l, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? l : [];
  }
  function _g(i, a, s) {
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
  function wg() {
    var l;
    const i = ie(), a = Ye(i), s = ri();
    if (!i || !a) return !1;
    if (P.save(), P.fillStyle = "#050505", P.fillRect(0, 0, C.width, C.height), P.shadowColor = "rgba(0, 0, 0, 0.45)", P.shadowBlur = 24, P.shadowOffsetX = 0, P.shadowOffsetY = 10, P.fillStyle = "rgba(14, 14, 14, 1)", P.fillRect(a.x, a.y, a.w, a.h), P.restore(), P.save(), P.beginPath(), P.rect(a.x, a.y, a.w, a.h), P.clip(), s && (s.complete || s.naturalWidth || s.width) && Number(s.naturalWidth || s.width || 0) > 1 && Number(s.naturalHeight || s.height || 0) > 1) {
      const h = Mi(i);
      Yo(P, a, h, s, `modal_frame_${String(i.id || "")}`) || drawCutoutProjectionPreview(
        P,
        t,
        s,
        a,
        i,
        String(((l = p.ui_settings) == null ? void 0 : l.preview_quality) || "balanced")
      );
    } else
      P.fillStyle = "rgba(255, 255, 255, 0.03)", P.fillRect(a.x, a.y, a.w, a.h);
    return P.restore(), P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.12)", P.lineWidth = 1, P.strokeRect(a.x + 0.5, a.y + 0.5, a.w - 1, a.h - 1), P.restore(), !0;
  }
  function xg() {
    var v, S;
    if (((v = d.interaction) == null ? void 0 : v.kind) !== "paint_lasso_fill") return;
    const i = d.interaction.stroke, a = (S = i == null ? void 0 : i.geometry) == null ? void 0 : S.points;
    let s;
    if (d.mode === "frame") {
      const w = ie(), M = Ye(w);
      s = vg(a, w, M);
    } else
      s = mg(a);
    if (!Array.isArray(s) || s.length < 3) return;
    const l = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, g = Math.round(Number(h.r || 0) * 255), _ = Math.round(Number(h.g || 0) * 255), b = Math.round(Number(h.b || 0) * 255);
    P.save(), P.beginPath(), P.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let w = 1; w < s.length; w++) P.lineTo(Number(s[w].x || 0), Number(s[w].y || 0));
    P.closePath(), l ? (P.lineWidth = 2, P.setLineDash([6, 6]), P.lineDashOffset = 0, P.strokeStyle = "rgba(0,0,0,0.96)", P.stroke(), P.lineDashOffset = -6, P.strokeStyle = "rgba(255,255,255,0.96)", P.stroke(), P.setLineDash([]), P.lineDashOffset = 0) : (P.lineWidth = 1.5, P.setLineDash([6, 4]), P.strokeStyle = `rgba(${g},${_},${b},1)`, P.stroke(), P.setLineDash([])), P.restore();
  }
  function Sg() {
    d.mode === "frame" ? wg() : d.mode === "unwrap" ? zp(!1) : Up(!1), Xp(), d.mode !== "frame" && Jp(), xg(), H && (H.textContent = `${Math.round(d.viewFov)}°`), qt(), Pt.hasPresentedFrame || (Pt.hasPresentedFrame = !0, C.style.opacity = "1");
  }
  function Ng() {
    var a;
    if (e !== "cutout") return !1;
    const i = String(((a = d.interaction) == null ? void 0 : a.kind) || "");
    return i === "move" || i === "scale" || i === "scale_x" || i === "scale_y" || i === "rotate";
  }
  function Mg(i = {}) {
    var l, h, g, _;
    const a = i.updateCutoutPreview !== !1;
    if (t.__panoLiveStateOverride = p, e === "cutout") {
      t.__panoLivePaintSurface = null, a && Us();
      return;
    }
    let s = null;
    try {
      const b = Bi(!1), v = Uo(), S = ((_ = (g = (h = (l = d.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, b)) == null ? void 0 : g.displayPaint) == null ? void 0 : _.canvas) || null, w = v ? null : Vl(b), M = v ? S || w : w || S;
      M && (s = {
        source: M,
        revision: `${ii()}:${Gi()}`
      });
    } catch {
      s = null;
    }
    t.__panoLivePaintSurface = s;
  }
  function pt(i = {}) {
    var v, S, w, M, E, T, O, U, Q, ct;
    const a = !!i.localOnly, s = i.externalSync === !0, l = String(i.cause || ""), h = String(((v = d.interaction) == null ? void 0 : v.kind) || "");
    (!a || h === "view" || h === "pan_frame" || !!((S = d.viewTween) != null && S.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (Pt.backgroundDirty = !0), a && Uo() && (d.livePaintInteractionRevision += 1), (!a || l === "selection" || l === "mode" || l === "cutout_frame") && (Ko(), Wo());
    const b = e === "cutout" && (!a || l === "paint" || l === "cutout_frame" || l === "frame_transform" || l === "frame_view" || Ml() || Ng());
    Mg({ updateCutoutPreview: b }), s && (b || !a || e !== "cutout") && ((M = (w = t.__panoDomPreview) == null ? void 0 : w.requestDraw) == null || M.call(w), (E = t.setDirtyCanvas) == null || E.call(t, !0, !1)), s && !a && ((O = (T = t.graph) == null ? void 0 : T.setDirtyCanvas) == null || O.call(T, !0, !0), (ct = (Q = (U = dn) == null ? void 0 : U.canvas) == null ? void 0 : Q.setDirty) == null || ct.call(Q, !0, !0)), Pt.dirty = !0;
  }
  function Ql() {
    const i = C.getBoundingClientRect(), a = Math.max(2, Math.round(i.width)), s = Math.max(2, Math.round(i.height));
    return C.width !== a || C.height !== s ? (C.width = a, C.height = s, Pt.backgroundDirty = !0, Pt.dirty = !0, e === "cutout" && (Pt.pendingStableLayoutFrames = Math.max(Number(Pt.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Gs(i = performance.now()) {
    var a;
    if (Pt.running) {
      if (Pt.lastTickTs = i, d.outputPreviewAnim !== d.outputPreviewAnimTo) {
        const s = Math.max(1, Number(d.outputPreviewAnimDurationMs)), l = j((i - Number(d.outputPreviewAnimStartTs || 0)) / s, 0, 1), g = d.outputPreviewAnimTo > d.outputPreviewAnimFrom ? ov(l) : av(l);
        d.outputPreviewAnim = Sn(d.outputPreviewAnimFrom, d.outputPreviewAnimTo, g), Pt.dirty = !0, l >= 1 && (d.outputPreviewAnim = d.outputPreviewAnimTo);
      }
      if ((a = d.viewTween) != null && a.active) {
        const s = d.viewTween, l = j((i - s.startTs) / s.durationMs, 0, 1), h = iv(l);
        d.viewYaw = $e(s.startYaw + s.deltaYaw * h), d.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * h, d.viewFov = s.startFov + (s.targetFov - s.startFov) * h, Pt.backgroundDirty = !0, Pt.dirty = !0, l >= 1 && (d.viewTween = null);
      }
      if (d.viewInertia.vx = Number(Oe.state.inertia.vx || 0), d.viewInertia.vy = Number(Oe.state.inertia.vy || 0), d.viewInertia.active = !!Oe.state.inertia.active, Oe.stepInertia(i) && (d.viewInertia.vx = Number(Oe.state.inertia.vx || 0), d.viewInertia.vy = Number(Oe.state.inertia.vy || 0), d.viewInertia.active = !!Oe.state.inertia.active, Pt.backgroundDirty = !0, Pt.dirty = !0), (Pt.dirty || i - Pt.lastSizeCheckTs >= 220) && (Ql(), Pt.lastSizeCheckTs = i), Pt.pendingStableLayoutFrames > 0 && (Pt.pendingStableLayoutFrames -= 1, Pt.dirty = !0), Pt.dirty) {
        if (Pt.pendingStableLayoutFrames > 0) {
          Pt.rafId = requestAnimationFrame(Gs);
          return;
        }
        Pt.dirty = !1, Sg();
      }
      Pt.rafId = requestAnimationFrame(Gs);
    }
  }
  function Pg() {
    Pt.running = !1, Pt.rafId && cancelAnimationFrame(Pt.rafId), Pt.rafId = 0;
  }
  function ue() {
    r || (d.historyController.commitActionGroup(JSON.stringify(Zf(p))), Zs());
  }
  function Qi(i) {
    if (r) return;
    const a = i < 0 ? d.historyController.undo() : d.historyController.redo();
    if (Zs(), !a) return;
    const s = JSON.parse(a);
    Object.keys(p).forEach((l) => delete p[l]), Object.assign(p, s), d.selectedId = e === "stickers" || e === "cutout" ? p.active.selected_sticker_id : p.active.selected_shot_id, d.selectedIds = d.selectedId ? [d.selectedId] : [], In(), un(), ne(), En(), pt({ cause: "cutout_frame" });
  }
  function tu() {
    var s, l;
    const i = Array.isArray((s = d.historyController) == null ? void 0 : s.entries) ? d.historyController.entries : [], a = Number((l = d.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !r && i.length > 1 && a > 0,
      canRedo: !r && i.length > 1 && a >= 0 && a < i.length - 1
    };
  }
  function un() {
    var _, b, v;
    ot == null || ot.querySelectorAll("[data-tool-mode]").forEach((S) => {
      const w = S.getAttribute("data-tool-mode") === d.primaryTool;
      S.classList.toggle("active", w), S.setAttribute("aria-pressed", w ? "true" : "false");
    });
    const i = d.primaryTool === "paint" || d.primaryTool === "mask";
    if (ut && st(i), !i) {
      kt.forEach((S) => {
        S.classList.remove("is-active");
      }), X && (X.hidden = !0);
      return;
    }
    const a = d.primaryTool, s = kt.find((S) => String(S.getAttribute("data-paint-pane") || "") === a) || null;
    if (kt.forEach((S) => {
      S.classList.toggle("is-active", S === s);
    }), Vt.forEach((S) => {
      S.hidden = !1;
    }), A.forEach((S) => {
      S.hidden = !1;
    }), W && (clearTimeout(W), W = 0), I.querySelectorAll("[data-paint-tool]").forEach((S) => {
      S.classList.toggle("active", S.getAttribute("data-paint-tool") === d.paintTool);
    }), I.querySelectorAll("[data-mask-tool]").forEach((S) => {
      S.classList.toggle("active", S.getAttribute("data-mask-tool") === d.maskTool);
    }), Et) {
      const S = d.paintTool !== "eraser";
      Et.hidden = !1, Et.classList.toggle("disabled", !S), !S && X && !X.hidden && (W = window.setTimeout(() => {
        X.hidden = !0, W = 0;
      }, 170));
      const w = ((_ = Ua.find((E) => ja(d.paintColor, E.color))) == null ? void 0 : _.id) || "";
      Et.querySelectorAll("[data-paint-color-swatch]").forEach((E) => {
        const T = E.getAttribute("data-paint-color-swatch") === w;
        E.classList.toggle("active", T), E.setAttribute("aria-pressed", T ? "true" : "false"), E.disabled = !S;
      });
      const M = Et.querySelector("[data-paint-color-custom]");
      if (M) {
        const E = !w;
        M.classList.toggle("active", E), M.style.setProperty("--custom-color", Nn(d.customPaintColor, 1)), M.setAttribute("aria-pressed", E ? "true" : "false"), M.disabled = !S;
      }
      if (Mt && (Mt.value = String(Math.round(j(Number(((b = d.customPaintColor) == null ? void 0 : b.a) ?? 1), 0, 1) * 100))), xt && (xt.textContent = `${Math.round(j(Number(((v = d.customPaintColor) == null ? void 0 : v.a) ?? 1), 0, 1) * 100)}%`), Nt && (Nt.style.background = Nn(d.customPaintColor)), X) {
        const E = fo(d.customPaintColor);
        X.style.setProperty("--picker-hue-color", Nn({ ...Pc(E.h, 1, 1), a: 1 }, 1)), X.style.setProperty("--picker-sat", `${j(E.s, 0, 1) * 100}%`), X.style.setProperty("--picker-val", `${(1 - j(E.v, 0, 1)) * 100}%`), X.style.setProperty("--picker-hue", `${j(E.h, 0, 1) * 100}%`);
      }
      if (pe) {
        const E = fo(d.customPaintColor);
        pe.style.left = `${j(E.s, 0, 1) * 100}%`, pe.style.top = `${(1 - j(E.v, 0, 1)) * 100}%`;
      }
      if (B) {
        const E = fo(d.customPaintColor);
        B.style.left = `${j(E.h, 0, 1) * 100}%`;
      }
      if ($t && Rt) {
        const E = Array.from({ length: 8 }, (T, O) => d.customPaintHistory[O] || null);
        Rt.innerHTML = E.map((T, O) => `
          <button class="pano-paint-color-history-dot${T ? "" : " empty"}" type="button" data-paint-history-index="${O}" ${T ? `style="--swatch:${Nn(T, 1)}"` : ""} aria-label="Recent color ${O + 1}" ${T ? "" : "disabled"}></button>
        `).join(""), Rt.querySelectorAll("[data-paint-history-index]").forEach((T) => {
          T.onclick = () => {
            const O = Number(T.getAttribute("data-paint-history-index")), U = d.customPaintHistory[O];
            U && (d.customPaintColor = fn(U), d.paintColor = fn(U), un());
          };
        });
      }
    }
    const l = yr(d.primaryTool === "paint" ? d.paintTool : d.maskTool), h = d.brushSizes[l] ?? 10, g = lp();
    Vt.forEach((S) => {
      S.classList.toggle("disabled", g);
    }), z.forEach((S) => {
      S.value = String(h);
      const w = (h - 1) / 119 * 100;
      S.style.setProperty("--v", `${j(w, 0, 100)}%`), S.disabled = g;
    }), Z.forEach((S) => {
      S.textContent = String(h);
    });
  }
  function ai(i, a, s, l, h, g, _, b = !0) {
    const v = document.createElement("div");
    v.dataset.key = s, v.dataset.min = String(h), v.dataset.max = String(g), v.className = "pano-field", v.innerHTML = `<label>${l}</label><input type='range' min='${h}' max='${g}' step='${_}' value='${Number(a[s] || 0)}'><input type='number' min='${h}' max='${g}' step='${_}' value='${kc(a[s] || 0)}'>`;
    const [S, w] = v.querySelectorAll("input"), M = () => {
      const T = Number(h), O = Number(g), Q = (Number(S.value) - T) / Math.max(1e-6, O - T) * 100;
      S.style.setProperty("--v", `${j(Q, 0, 100)}%`);
    };
    S.disabled = !b, w.disabled = !b;
    const E = (T) => {
      if (!b) return;
      let O = Number(T);
      Number.isNaN(O) && (O = 0), O = j(O, h, g), s === "yaw_deg" && (O = $e(O)), a[s] = O, e === "cutout" && (s === "hFOV_deg" || s === "vFOV_deg") && (a.aspect_id = zr(a)), S.value = String(O), w.value = kc(O), M(), pt();
    };
    S.oninput = () => E(S.value), w.oninput = () => E(w.value), S.onchange = () => ue(), w.onchange = () => ue(), M(), i.appendChild(v);
  }
  function Ks() {
    const i = we();
    if (!i) return;
    d.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (e === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (e === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: yi(i)
    }, tt.querySelectorAll(".pano-field[data-key]").forEach((g) => {
      const _ = g.dataset.key;
      if (!_ || !(_ in i)) return;
      const b = g.querySelector("input[type='range']"), v = g.querySelector("input[type='number']");
      if (!b || !v) return;
      const S = Number(g.dataset.min ?? b.min ?? 0), w = Number(g.dataset.max ?? b.max ?? 0);
      let M = Number(i[_] || 0);
      Number.isNaN(M) && (M = 0), M = j(M, S, w);
      const E = String(M);
      b.value !== E && (b.value = E);
      const T = kc(M);
      v.value !== T && (v.value = T);
      const O = (M - S) / Math.max(1e-6, w - S) * 100;
      b.style.setProperty("--v", `${j(O, 0, 100)}%`);
    });
    const s = yi(i), l = tt.querySelector(".pano-cutout-aspect-label span");
    l && (l.textContent = s), tt.querySelectorAll(".pano-cutout-aspect-pop [data-aspect]").forEach((g) => {
      g.classList.toggle("active", String(g.getAttribute("data-aspect")) === s);
    });
  }
  function ne() {
    var at, Tt, Ot, Lt, Ht, jt, Gt, Kt, me, Zn, Jn, eo, la, ui, fi, no;
    if (o) return;
    const i = [...tt.children].slice(0, 2);
    tt.innerHTML = "", i.forEach((At) => tt.appendChild(At));
    const a = tt.querySelector(".pano-side-actions");
    if (a && (a.innerHTML = ""), c) {
      const At = document.createElement("div");
      At.className = "pano-inspector";
      const Zt = document.createElement("details");
      Zt.className = "pano-ui-settings", Zt.open = !1, Zt.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Dt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(at = p.ui_settings) != null && at.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Tt = p.ui_settings) != null && Tt.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(Ot = p.ui_settings) != null && Ot.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(Lt = p.ui_settings) != null && Lt.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(Ht = p.ui_settings) != null && Ht.invert_view_y ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(jt = p.ui_settings) != null && jt.invert_view_y ? "true" : "false"}">Inverted</button>
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
      const Ie = Zt.querySelector("[data-setting='invert-x']"), Tn = Zt.querySelector("[data-setting='invert-y']"), Qn = Zt.querySelector("[data-ui-picker='quality']"), Ln = Zt.querySelector("[data-action='ui-reset-defaults']"), tr = (fe, Ce, _n, di) => {
        const br = fe.querySelector(".pano-picker-trigger"), ro = fe.querySelector(".pano-picker-label"), wn = fe.querySelector(".pano-picker-pop"), vr = () => {
          const Rn = String(_n()), On = Ce.find((io) => String(io.value) === Rn) || Ce[0];
          ro.textContent = On.label, wn.innerHTML = "", Ce.forEach((io) => {
            const oo = document.createElement("button");
            oo.type = "button", oo.className = `pano-picker-item${String(io.value) === Rn ? " active" : ""}`, oo.textContent = io.label, oo.onclick = () => {
              di(io.value), wn.hidden = !0, vr(), mr(), pt();
            }, wn.appendChild(oo);
          });
        };
        return br.onclick = (Rn) => {
          Rn.stopPropagation(), Zt.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((On) => {
            On !== wn && (On.hidden = !0);
          }), wn.hidden = !wn.hidden;
        }, vr(), vr;
      }, Dn = (fe, Ce) => {
        fe.setAttribute("data-selected", Ce ? "1" : "0"), fe.querySelectorAll(".pano-segment-btn").forEach((_n) => {
          _n.setAttribute("aria-pressed", _n.getAttribute("data-value") === (Ce ? "1" : "0") ? "true" : "false");
        });
      };
      Ie.querySelectorAll(".pano-segment-btn").forEach((fe) => {
        fe.onclick = () => {
          const Ce = fe.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = Ce, Dn(Ie, Ce), mr(), pt();
        };
      }), Tn.querySelectorAll(".pano-segment-btn").forEach((fe) => {
        fe.onclick = () => {
          const Ce = fe.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = Ce, Dn(Tn, Ce), mr(), pt();
        };
      });
      const zt = tr(
        Qn,
        [
          { value: "draft", label: "Draft" },
          { value: "balanced", label: "Balanced" },
          { value: "high", label: "High" }
        ],
        () => String(p.ui_settings.preview_quality || "balanced"),
        (fe) => {
          const Ce = String(fe || "balanced");
          p.ui_settings.preview_quality = Ce === "draft" || Ce === "high" ? Ce : "balanced";
        }
      );
      Ln.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", Dn(Ie, !1), Dn(Tn, !1), zt(), mr(), pt();
      }, At.appendChild(Zt), tt.appendChild(At);
      const re = document.createElement("div");
      re.className = "pano-side-footer", re.innerHTML = '<button class="pano-btn pano-btn-primary" data-action="close-preview">Close</button>', re.querySelector("[data-action='close-preview']").onclick = () => li(), tt.appendChild(re), to(At);
      return;
    }
    const s = we(), l = An(), h = Il();
    l.length > 1 && (d.panelLastValues = d.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), s && h !== "stroke" && (d.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (h === "image" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (h === "image" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: yi(s)
    });
    const g = d.panelLastValues || (e === "stickers" || h === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = h === "stroke" ? null : s, b = _ || g, v = !!_, S = document.createElement("div");
    S.className = "pano-inspector";
    const w = document.createElement("div");
    for (w.innerHTML = `
      <div class="pano-section-title">
        <span>Transform</span>
      </div>
    `; w.firstChild; ) S.appendChild(w.firstChild);
    if (tt.appendChild(S), e === "stickers" || e === "cutout") {
      const At = document.createElement("div");
      At.className = "pano-field-wide pano-target-row";
      const Zt = "Selection";
      At.innerHTML = `
        <label>${Zt}</label>
        <div class="pano-picker">
          <button class="pano-picker-trigger" type="button">
            <span class="pano-picker-label"></span>
            <span class="pano-picker-caret">▾</span>
          </button>
          <div class="pano-picker-pop" hidden></div>
        </div>
      `;
      const Ie = At.querySelector(".pano-picker-trigger"), Tn = At.querySelector(".pano-picker-label"), Qn = At.querySelector(".pano-picker-pop"), Ln = [{ id: "", label: e === "stickers" ? "No image" : "Nothing selected", item: null }];
      e === "stickers" ? Pe().forEach((zt, re) => {
        var _n, di;
        const fe = Ae(zt) ? String(zt.id || Or) : String(((di = (_n = p.assets) == null ? void 0 : _n[zt.asset_id]) == null ? void 0 : di.name) || zt.asset_id || zt.id), Ce = `${re + 1}. ${fe}${Ae(zt) && ei(zt) ? " (hidden)" : ""}`;
        Ln.push({ id: zt.id, label: Ce, item: zt, kind: "image" });
      }) : op().forEach((zt) => {
        Ln.push({ id: zt.item.id, label: zt.label, item: zt.item, kind: zt.kind });
      });
      const tr = (_ == null ? void 0 : _.id) || "", Dn = Ln.find((zt) => zt.id === tr) || Ln[0];
      Tn.innerHTML = Dn.item ? El(Dn) : Aa(String(Dn.label || "")), Qn.innerHTML = "", Ln.forEach((zt) => {
        const re = document.createElement("button");
        re.type = "button", re.className = `pano-picker-item${zt.id === tr ? " active" : ""}`, re.innerHTML = zt.item ? El(zt) : Aa(String(zt.label || "")), re.onclick = () => {
          Qn.hidden = !0, Go(zt.item || null);
          const fe = zt.item || null;
          if (fe && !Te(fe)) {
            const Ce = $e(Number(fe.yaw_deg || 0)), _n = j(Number(fe.pitch_deg || 0), -89.9, 89.9);
            Jr(Ce, _n, d.viewFov);
          }
          ne(), qt(), pt();
        }, Qn.appendChild(re);
      }), Ie.disabled = Ln.length <= 1, Ie.onclick = (zt) => {
        zt.stopPropagation(), !Ie.disabled && (Qn.hidden = !Qn.hidden);
      }, S.appendChild(At);
    }
    const M = document.createElement("div");
    M.className = "pano-state-actions", M.innerHTML = `<button class="pano-btn subtle pano-btn-tight pano-btn-copy" data-action="copy-state-inline">${Dt.copy}<span>Copy State</span></button>`;
    const E = M.querySelector("[data-action='copy-state-inline']");
    E.disabled = !v || h === "stroke" || l.length > 1, E.onclick = async () => {
      if (!v || h === "stroke" || l.length > 1) return;
      const At = JSON.stringify(e === "cutout" && h !== "image" ? Ol(b) : yp(s));
      try {
        await navigator.clipboard.writeText(At);
        const Zt = E.querySelector("span");
        Zt && (Zt.textContent = "Copied", window.setTimeout(() => {
          Zt.textContent = "Copy State";
        }, 900));
      } catch {
      }
    }, S.appendChild(M);
    const T = document.createElement("div");
    T.className = `pano-params${d.panelWasEnabled ? "" : " disabled"}`, S.appendChild(T), l.length > 1 ? (T.innerHTML = `
        <div class="pano-param-note">Selected objects: ${l.length}</div>
        <div class="pano-param-note">Multi-selection supports z-order and delete.</div>
      `, T.classList.toggle("disabled", !v), d.panelWasEnabled = v, Ko()) : (ai(T, b, "yaw_deg", "Yaw", -180, 180, 0.1, v && !r), ai(T, b, "pitch_deg", "Pitch", -90, 90, 0.1, v && !r), ai(T, b, "hFOV_deg", "H FOV", 1, 179, 0.1, v && !r), ai(T, b, "vFOV_deg", "V FOV", 1, 179, 0.1, v && !r), e === "stickers" || h === "image" ? ai(T, b, "rot_deg", "Rotation", -180, 180, 0.1, v && !r) : ai(T, b, "roll_deg", "Roll", -180, 180, 0.1, v && !r), v !== d.panelWasEnabled ? requestAnimationFrame(() => {
      T.classList.toggle("disabled", !v);
    }) : T.classList.toggle("disabled", !v), d.panelWasEnabled = v, Ko());
    const O = document.createElement("div");
    O.className = "pano-visibility-section", O.innerHTML = `
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
    const U = Array.isArray((Kt = (Gt = p == null ? void 0 : p.painting) == null ? void 0 : Gt.paint) == null ? void 0 : Kt.strokes) ? p.painting.paint.strokes.length : 0, Q = Array.isArray((Zn = (me = p == null ? void 0 : p.painting) == null ? void 0 : me.mask) == null ? void 0 : Zn.strokes) ? p.painting.mask.strokes.length : 0, ct = Array.isArray(t == null ? void 0 : t.inputs) ? t.inputs.map((At) => String((At == null ? void 0 : At.name) || "")) : [], St = qh(
      t,
      ct.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), gt = !!String((St == null ? void 0 : St.src) || "").trim() || Ll("pano_input_images").length > 0, vt = Array.isArray(Pe()) && Pe().length > 0 || U > 0, mt = Q > 0, _t = (At) => At === "panorama" ? gt : At === "objects" ? vt : mt, ht = (At, Zt) => {
      const Ie = At.closest("[data-visibility-row]"), Tn = _t(String(At.getAttribute("data-visibility") || ""));
      At.innerHTML = Zt ? Dt.eye : Dt.eye_dashed, At.setAttribute("aria-pressed", Zt ? "true" : "false"), At.setAttribute("data-tip", Zt ? "Hide" : "Show"), At.disabled = !Tn, At.classList.toggle("active", !!Zt), Ie == null || Ie.classList.toggle("is-hidden", !Zt), Ie == null || Ie.classList.toggle("is-disabled", !Tn);
    };
    if (O.querySelectorAll("[data-visibility]").forEach((At) => {
      const Zt = String(At.getAttribute("data-visibility") || ""), Ie = () => Zt === "panorama" ? !!d.showPanorama : Zt === "objects" ? !!d.showObjects : !!d.showMask;
      ht(At, Ie()), At.onclick = () => {
        _t(Zt) && (Zt === "panorama" ? d.showPanorama = !d.showPanorama : Zt === "objects" ? d.showObjects = !d.showObjects : d.showMask = !d.showMask, ht(At, Ie()), pt());
      };
    }), S.appendChild(Object.assign(document.createElement("div"), { className: "pano-divider" })), S.appendChild(O), !r) {
      const At = document.createElement("details");
      At.className = "pano-ui-settings", At.open = !1, At.innerHTML = `
      <summary>
        <span class="pano-ui-summary-label">UI Settings</span>
        <span class="pano-ui-caret" aria-hidden="true">${Dt.chevron}</span>
      </summary>
      <div class="pano-ui-settings-body">
        <div class="pano-ui-row">
          <label>Drag X</label>
          <div class="pano-segment" data-setting="invert-x" data-selected="${(Jn = p.ui_settings) != null && Jn.invert_view_x ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(eo = p.ui_settings) != null && eo.invert_view_x ? "false" : "true"}">Normal</button>
            <button class="pano-segment-btn" type="button" data-value="1" aria-pressed="${(la = p.ui_settings) != null && la.invert_view_x ? "true" : "false"}">Inverted</button>
          </div>
        </div>
        <div class="pano-ui-row">
          <label>Drag Y</label>
          <div class="pano-segment" data-setting="invert-y" data-selected="${(ui = p.ui_settings) != null && ui.invert_view_y ? "1" : "0"}">
            <button class="pano-segment-btn" type="button" data-value="0" aria-pressed="${(fi = p.ui_settings) != null && fi.invert_view_y ? "false" : "true"}">Normal</button>
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
      const Zt = At.querySelector("[data-setting='invert-x']"), Ie = At.querySelector("[data-setting='invert-y']"), Tn = At.querySelector("[data-ui-picker='quality']"), Qn = At.querySelector("[data-action='ui-reset-defaults']"), Ln = (zt, re, fe, Ce) => {
        const _n = zt.querySelector(".pano-picker-trigger"), di = zt.querySelector(".pano-picker-label"), br = zt.querySelector(".pano-picker-pop"), ro = () => {
          const wn = String(fe()), vr = re.find((Rn) => String(Rn.value) === wn) || re[0];
          di.textContent = vr.label, br.innerHTML = "", re.forEach((Rn) => {
            const On = document.createElement("button");
            On.type = "button", On.className = `pano-picker-item${String(Rn.value) === wn ? " active" : ""}`, On.textContent = Rn.label, On.onclick = () => {
              Ce(Rn.value), br.hidden = !0, ro(), mr(), t.setDirtyCanvas(!0, !0), pt();
            }, br.appendChild(On);
          });
        };
        return _n.onclick = (wn) => {
          wn.stopPropagation(), At.querySelectorAll(".pano-ui-picker .pano-picker-pop").forEach((vr) => {
            vr !== br && (vr.hidden = !0);
          }), br.hidden = !br.hidden;
        }, ro(), ro;
      }, tr = (zt, re) => {
        zt.setAttribute("data-selected", re ? "1" : "0"), zt.querySelectorAll(".pano-segment-btn").forEach((fe) => {
          fe.setAttribute("aria-pressed", fe.getAttribute("data-value") === (re ? "1" : "0") ? "true" : "false");
        });
      };
      Zt.querySelectorAll(".pano-segment-btn").forEach((zt) => {
        zt.onclick = () => {
          const re = zt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_x = re, tr(Zt, re), mr(), t.setDirtyCanvas(!0, !0), pt();
        };
      }), Ie.querySelectorAll(".pano-segment-btn").forEach((zt) => {
        zt.onclick = () => {
          const re = zt.getAttribute("data-value") === "1";
          p.ui_settings.invert_view_y = re, tr(Ie, re), mr(), t.setDirtyCanvas(!0, !0), pt();
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
        (zt) => {
          const re = String(zt || "balanced");
          p.ui_settings.preview_quality = re === "draft" || re === "high" ? re : "balanced";
        }
      );
      Qn.onclick = () => {
        p.ui_settings.invert_view_x = !1, p.ui_settings.invert_view_y = !1, p.ui_settings.preview_quality = "balanced", tr(Zt, !1), tr(Ie, !1), Dn(), mr(), t.setDirtyCanvas(!0, !0), pt();
      }, S.appendChild(At);
    }
    const K = document.createElement("div");
    K.className = "pano-side-footer", K.innerHTML = `
      <button class="pano-btn" data-action="cancel-close">Cancel</button>
      <button class="pano-btn pano-btn-primary" data-action="save-close">Save</button>
    `, K.querySelector("[data-action='cancel-close']").onclick = () => li(), K.querySelector("[data-action='save-close']").onclick = () => {
      cu(), li();
    }, tt.appendChild(K), to(S);
  }
  function ta(i) {
    if (!i) return !1;
    if (String(i.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(i.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function eu(i) {
    if (r || e !== "stickers" && e !== "cutout" || !ta(i)) return;
    const a = ho("asset"), s = URL.createObjectURL(i);
    try {
      const l = await new Promise((_, b) => {
        const v = new Image();
        v.onload = () => _(v), v.onerror = () => b(new Error("image load failed")), v.src = s;
      });
      Ct.set(a, l);
      const h = await Ls(i, String(i.name || a));
      p.assets[a] = h;
      const g = ho("st");
      p.stickers.push({
        id: g,
        asset_id: a,
        yaw_deg: d.viewYaw,
        pitch_deg: d.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Ir(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: Tl()
      }), Go(p.stickers[p.stickers.length - 1]), qs(), ue(), ke(), ne(), qt(), pt();
    } catch (l) {
      console.error("[PanoramaSuite] failed to add sticker asset", l), delete p.assets[a], Ct.delete(a);
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function nu(i) {
    const a = document.createElement("input");
    a.type = "file", a.accept = "image/*", a.onchange = () => {
      var l;
      const s = (l = a.files) == null ? void 0 : l[0];
      !s || typeof i != "function" || i(s);
    }, a.click();
  }
  function Ws() {
    r || e !== "stickers" && e !== "cutout" || nu((i) => {
      eu(i);
    });
  }
  async function kg(i) {
    if (r || e !== "stickers" && e !== "cutout") return;
    const a = we();
    if (!a || !De(a) || Ae(a) || !ta(i)) return;
    const s = ho("asset"), l = URL.createObjectURL(i);
    try {
      const h = await new Promise((_, b) => {
        const v = new Image();
        v.onload = () => _(v), v.onerror = () => b(new Error("image load failed")), v.src = l;
      });
      Ct.set(s, h);
      const g = await Ls(i, String(i.name || s));
      p.assets[s] = g, a.asset_id = s, a.vFOV_deg = Ir(
        Number(a.hFOV_deg || 30),
        Number(h.naturalWidth || h.width || 1),
        Number(h.naturalHeight || h.height || 1)
      ), a.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Yi(), yn(), ue(), ke(), ne(), qt(), pt();
    } catch (h) {
      console.error("[PanoramaSuite] failed to replace sticker asset", h), delete p.assets[s], Ct.delete(s);
    } finally {
      URL.revokeObjectURL(l);
    }
  }
  function Cg() {
    if (r) return;
    const i = we();
    !i || !De(i) || Ae(i) || nu((a) => {
      kg(a);
    });
  }
  async function Ag() {
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
        const _ = await fetch(g).then((M) => M.blob()), b = String(_.type || "image/png").split("/")[1] || "png", v = String((h == null ? void 0 : h.name) || `${l}.${b}`), S = new File([_], v, { type: _.type || "image/png" }), w = await Ls(S, v);
        p.assets[l] = {
          ...w,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, s = !0;
      } catch (g) {
        console.error("[PanoramaSuite] failed to migrate embedded sticker asset", { assetId: l, err: g });
      }
    s && (ke(), pt());
  }
  function ru() {
    r || e === "cutout" && (qs(), p.shots = [{
      id: ho("sh"),
      yaw_deg: d.viewYaw,
      pitch_deg: d.viewPitch,
      hFOV_deg: 64,
      vFOV_deg: 40,
      roll_deg: 0,
      aspect_id: zh(64, 40)
    }], Go(p.shots[0]), d.cutoutAspectOpen = !1, ue(), ke(), ne(), pt({ cause: "cutout_frame" }));
  }
  function Ig() {
    r || e === "cutout" && (p.shots = [], d.selectedId = null, d.selectedIds = [], d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, p.active.selected_shot_id = null, ue(), ke(), ne(), pt());
  }
  function Eg() {
    const i = Array.isArray(p.stickers) ? p.stickers : [], a = [];
    for (const s of i)
      Ae(s) && (s.visible = !1, a.push(s));
    return a;
  }
  function iu(i, a, s = "Clear") {
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
      const g = (v) => {
        h.remove(), l(!!v);
      };
      h.addEventListener("pointerdown", (v) => {
        v.target === h && g(!1);
      });
      const _ = h.querySelector("[data-action='cancel']"), b = h.querySelector("[data-action='confirm']");
      _.onclick = () => g(!1), b.onclick = () => g(!0), $.appendChild(h), b.focus();
    });
  }
  async function ou() {
    var s, l;
    if (r || !await iu(
      "Clear All Paint Data",
      e === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    p.painting = ko(null), In();
    const a = Eg();
    e === "stickers" ? (p.stickers = a, p.assets = {}, d.selectedId = ((s = a[0]) == null ? void 0 : s.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], p.active.selected_sticker_id = ((l = a[0]) == null ? void 0 : l.id) || null, Yi()) : (p.stickers = a, p.assets = {}, p.shots = [], d.selectedId = null, d.selectedIds = [], p.active.selected_sticker_id = null, p.active.selected_shot_id = null, d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, Yi()), ue(), ke(), ne(), qt(), pt();
  }
  async function Tg(i) {
    var g, _, b, v;
    if (r) return;
    const a = i === "mask" ? "mask" : "paint", s = a === "mask" ? "Mask" : "Paint", l = ci(a);
    if (!(!l.length && !(((g = d.interaction) == null ? void 0 : g.kind) === "draw" && ((_ = d.interaction) == null ? void 0 : _.layerKind) === a) || !await iu(
      `Clear ${s}`,
      `This will remove all ${a} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((b = d.interaction) == null ? void 0 : b.kind) === "draw" && ((v = d.interaction) == null ? void 0 : v.layerKind) === a) {
        const S = Xn();
        S && d.paintEngine.cancelActiveStroke(S), d.interaction = null;
      }
      l.length = 0, p.painting.raster_objects = ln().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== a), a === "paint" && (ce().length = 0), In(), ue(), ke(), ne(), qt(), un(), pt();
    }
  }
  function Lg() {
    if (r) return;
    const i = we();
    if (!i || !De(i) || Ae(i)) return;
    const a = JSON.parse(JSON.stringify(i));
    a.id = ho("st"), a.yaw_deg = $e((a.yaw_deg || 0) + 8), a.z_index = Tl(), p.stickers.push(a), p.active.selected_sticker_id = a.id, d.selectedId = a.id, d.selectedIds = [a.id], yn(), ue(), ke(), qt(), ne(), pt();
  }
  function au() {
    var s, l, h, g, _, b, v;
    if (r) return;
    const i = An(), a = we();
    if (!(!a && i.length === 0)) {
      if (i.length > 1) {
        const S = new Set(i.filter((E) => Te(E)).map((E) => String(E.actionGroupId || E.id || ""))), w = new Set(i.filter((E) => We(E)).map((E) => Ke(E.rasterObjectId || E.id || ""))), M = new Set(i.filter(De).map((E) => String(E.id || "")));
        S.size > 0 && (p.painting.paint.strokes = (Array.isArray((l = (s = p.painting) == null ? void 0 : s.paint) == null ? void 0 : l.strokes) ? p.painting.paint.strokes : []).filter((E) => !S.has(String((E == null ? void 0 : E.actionGroupId) || ""))), p.painting.groups = ce().filter((E) => !S.has(String((E == null ? void 0 : E.actionGroupId) || (E == null ? void 0 : E.id) || ""))), In()), w.size > 0 && (p.painting.raster_objects = ln().filter((E) => !w.has(String((E == null ? void 0 : E.id) || ""))), Zi()), M.size > 0 && (p.stickers = (Array.isArray(p.stickers) ? p.stickers : []).filter((E) => M.has(String((E == null ? void 0 : E.id) || "")) ? Ae(E) ? (ei(E) || (E.visible = !1), !0) : !1 : !0), Yi(), yn()), d.selectedId = null, d.selectedIds = [], ue(), ke(), ne(), qt(), pt();
        return;
      }
      if (Te(a)) {
        const S = String(a.actionGroupId || a.id || "").trim();
        p.painting.paint.strokes = (Array.isArray((g = (h = p.painting) == null ? void 0 : h.paint) == null ? void 0 : g.strokes) ? p.painting.paint.strokes : []).filter((w) => String((w == null ? void 0 : w.actionGroupId) || "").trim() !== S), p.painting.groups = ce().filter((w) => String((w == null ? void 0 : w.actionGroupId) || (w == null ? void 0 : w.id) || "").trim() !== S), In(), d.selectedId = null, d.selectedIds = [], ue(), ke(), ne(), qt(), pt();
        return;
      }
      if (We(a)) {
        const S = Ke(a.rasterObjectId || a.id || "");
        p.painting.raster_objects = ln().filter((w) => String((w == null ? void 0 : w.id) || "").trim() !== S), Zi(), d.selectedId = null, d.selectedIds = [], ue(), ke(), ne(), qt(), pt();
        return;
      }
      if (e === "stickers" || De(a)) {
        if (Ae(a)) {
          if (ei(a)) return;
          a.visible = !1, yn(), ue(), ke(), ne(), qt(), pt();
          return;
        }
        p.stickers = p.stickers.filter((S) => S.id !== a.id), Yi(), yn(), d.selectedId = e === "cutout" ? p.active.selected_shot_id || ((_ = p.stickers[0]) == null ? void 0 : _.id) || null : ((b = p.stickers[0]) == null ? void 0 : b.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], p.active.selected_sticker_id = ((v = p.stickers[0]) == null ? void 0 : v.id) || null, ue(), ke(), ne(), qt(), pt();
        return;
      }
      Ig();
    }
  }
  function Dg(i, a) {
    if (!i) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const E = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(E)) {
        const [U, Q] = E.split(":").map((ct) => Number(ct));
        if (Number.isFinite(U) && Number.isFinite(Q)) return U >= Q;
      }
      const T = Number(i.hFOV_deg || 64), O = Number(i.vFOV_deg || 40);
      return Math.abs(T - O) > 1e-6 ? T >= O : Zc(i) >= 1;
    })();
    let [h, g] = s[String(a)] || s["1:1"];
    h >= g !== l && ([h, g] = [g, h]);
    const _ = h / g, b = j(Number(i.hFOV_deg || 64), 1, 179), v = j(Number(i.vFOV_deg || 40), 1, 179), S = Math.sqrt(Math.max(1, b * v)), w = j(S * Math.sqrt(_), 1, 179), M = j(S / Math.sqrt(_), 1, 179);
    i.hFOV_deg = w, i.vFOV_deg = M, i.aspect_id = String(a);
  }
  function Rg(i) {
    if (!i) return;
    const a = Math.max(1, Number(i.hFOV_deg || 90)), s = Math.max(1, Number(i.vFOV_deg || 60));
    i.hFOV_deg = s, i.vFOV_deg = a, i.aspect_id = zr(i);
  }
  function su() {
    Ar().forEach((a, s) => {
      a.type === "sticker" && a.item && (a.item.z_index = s), a.type === "strokeGroup" && a.item && (a.item.z_index = s), a.type === "rasterObject" && a.item && (a.item.z_index = s);
    });
  }
  function Og() {
    if (r) return;
    const i = An();
    if (!we() || i.length === 0) return;
    su();
    const s = Ar(), l = new Set(i.map((b) => De(b) ? `sticker:${String(b.id || "")}` : We(b) ? `rasterObject:${Ke(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], g = [];
    if (s.forEach((b) => {
      var S, w;
      const v = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((w = b.item) == null ? void 0 : w.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(v) ? h.push(b) : g.push(b);
    }), !h.length || h[h.length - 1] === s[s.length - 1]) return;
    [...g, ...h].forEach((b, v) => {
      b.type === "sticker" && b.item && (b.item.z_index = v), b.type === "strokeGroup" && b.item && (b.item.z_index = v), b.type === "rasterObject" && b.item && (b.item.z_index = v);
    }), yn(), ue(), ke(), qt(), pt();
  }
  function Fg() {
    if (r) return;
    const i = An();
    if (!we() || i.length === 0) return;
    su();
    const s = Ar(), l = new Set(i.map((b) => De(b) ? `sticker:${String(b.id || "")}` : We(b) ? `rasterObject:${Ke(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], g = [];
    if (s.forEach((b) => {
      var S, w;
      const v = b.type === "sticker" ? `sticker:${String(((S = b.item) == null ? void 0 : S.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((w = b.item) == null ? void 0 : w.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      l.has(v) ? h.push(b) : g.push(b);
    }), !h.length || h[0] === s[0]) return;
    [...h, ...g].forEach((b, v) => {
      b.type === "sticker" && b.item && (b.item.z_index = v), b.type === "strokeGroup" && b.item && (b.item.z_index = v), b.type === "rasterObject" && b.item && (b.item.z_index = v);
    }), yn(), ue(), ke(), qt(), pt();
  }
  function cu() {
    r || (p.projection_model = "pinhole_rectilinear", p.alpha_mode = "straight", f && (p.output_preset = Jf(f.value, Number(p.output_preset || 2048))), m && (p.bg_color = String(m.value || p.bg_color || "#00ff00")), En(), t.setDirtyCanvas(!0, !0));
  }
  function En() {
    var a;
    if (r) return;
    const i = JSON.stringify(p);
    y && (y.value = i, (a = y.callback) == null || a.call(y, i));
  }
  function mr() {
    p.ui_settings = pv(p.ui_settings), r || En();
  }
  function ke() {
    var i;
    r || (En(), (i = t.setDirtyCanvas) == null || i.call(t, !0, !0));
  }
  function qs() {
    d.primaryTool !== "cursor" && (d.primaryTool = "cursor", un(), ne());
  }
  function si(i) {
    const a = C.getBoundingClientRect();
    return {
      x: (i.clientX - a.left) / a.width * C.width,
      y: (i.clientY - a.top) / a.height * C.height
    };
  }
  function lu() {
    return d.mode === "pano" || d.mode === "unwrap";
  }
  function ie() {
    var s;
    if (e !== "cutout") return null;
    const i = Array.isArray(p.shots) ? p.shots : [], a = String(((s = p.active) == null ? void 0 : s.selected_shot_id) || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === a) || i[0] || null;
  }
  function Ye(i = ie()) {
    var E, T, O, U;
    if (!i) return null;
    const a = Math.max(1e-4, Number(((E = Mi(i)) == null ? void 0 : E.aspect) || 1)), s = 56, l = Math.max(80, C.width - s * 2), h = Math.max(80, C.height - s * 2);
    let g = l, _ = g / a;
    _ > h && (_ = h, g = _ * a);
    const b = Math.max(0.1, Number(((T = d.frameView) == null ? void 0 : T.zoom) || 1)), v = g * b, S = _ * b, w = Number(((O = d.frameView) == null ? void 0 : O.panX) || 0), M = Number(((U = d.frameView) == null ? void 0 : U.panY) || 0);
    return {
      x: (C.width - v) * 0.5 + w,
      y: (C.height - S) * 0.5 + M,
      w: v,
      h: S
    };
  }
  function Ys() {
    return e === "cutout" && d.mode === "frame" && !!ie();
  }
  function bn(i, a = performance.now()) {
    if (d.mode === "unwrap") {
      const g = dr(), _ = (i.x - g.x) / Math.max(1, g.w), b = (i.y - g.y) / Math.max(1, g.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (_ % 1 + 1) % 1,
        v: j(b, 0, 1),
        t: Number(a || 0)
      };
    }
    const s = Ts(i.x, i.y), { lon: l, lat: h } = Fs(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: j(0.5 - h / Math.PI, 0, 1),
      t: Number(a || 0)
    };
  }
  function vn(i, a, s = performance.now()) {
    const l = Ye(a);
    if (!l) return null;
    const h = {
      x: (Number(i.x) - l.x) / Math.max(1, l.w),
      y: (Number(i.y) - l.y) / Math.max(1, l.h)
    }, g = js(a, h);
    if (!g) return null;
    const { lon: _, lat: b } = Fs(g);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_ / (2 * Math.PI) + 0.5 + 1) % 1,
      v: j(0.5 - b / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function $g(i, a) {
    var S;
    const s = ie(), l = Ye(s);
    if (!s || !l) return !1;
    const h = Math.max(0.1, Number(((S = d.frameView) == null ? void 0 : S.zoom) || 1)), g = j(h * Number(a), 0.25, 12);
    if (Math.abs(g - h) < 1e-6) return !1;
    const _ = (Number(i.x) - l.x) / Math.max(1e-6, l.w), b = (Number(i.y) - l.y) / Math.max(1e-6, l.h);
    d.frameView.zoom = g;
    const v = Ye(s);
    return v ? (d.frameView.panX += Number(i.x) - (v.x + v.w * _), d.frameView.panY += Number(i.y) - (v.y + v.h * b), !0) : !1;
  }
  function Hg(i, a) {
    const s = Number(a || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function yr(i) {
    const a = String(i || "").trim();
    return a === "eraser" ? nr : rn[a] ? a : d.activeBrushPresetId || nr;
  }
  function uu() {
    return (d.primaryTool === "paint" || d.primaryTool === "mask") && (lu() || Ys());
  }
  function fu() {
    var i;
    return uu() && ((i = d.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function ea(i, a = !0) {
    const s = Number((i == null ? void 0 : i.x) || 0), l = Number((i == null ? void 0 : i.y) || 0), h = a !== !1, g = d.pointerPos || { x: 0, y: 0, inside: !1 }, _ = g.inside !== h || Math.abs(g.x - s) > 0.01 || Math.abs(g.y - l) > 0.01;
    return d.pointerPos = { x: s, y: l, inside: h }, _;
  }
  function Vg() {
    var w, M;
    if (!fu()) return null;
    const i = d.primaryTool === "mask" ? "mask" : "paint", a = i === "mask" ? d.maskTool : d.paintTool, s = yr(a), l = rn[s] || rn[nr], h = Number(d.brushSizes[s] ?? 10), g = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(3, g * 0.5), b = i === "mask" ? a === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : a === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : fn(d.paintColor), v = i === "mask" ? a === "lasso_fill" ? 0.18 : 0.2 : a === "eraser" ? 0.06 : j(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), S = i === "mask" ? 0.95 : a === "eraser" ? 0.75 : j(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: a,
      preset: l,
      radius: _,
      fillStyle: Nn(b, v),
      strokeStyle: Nn(b, S),
      x: Number(((w = d.pointerPos) == null ? void 0 : w.x) || 0),
      y: Number(((M = d.pointerPos) == null ? void 0 : M.y) || 0),
      hotspotX: _,
      hotspotY: _
    };
  }
  function zg() {
    var E, T, O;
    const i = Vg();
    if (!L) return;
    if (!i) {
      L.style.display = "none";
      return;
    }
    let a = i.radius * 2, s = i.radius * 2, l = "999px", h = 0, g = i.fillStyle, _ = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const v = "rgba(222, 222, 222, 0.72)", S = "rgba(52, 52, 52, 0.72)";
    let w = Number(i.hotspotX ?? a * 0.5), M = Number(i.hotspotY ?? s * 0.5);
    if (i.toolKind === "lasso_fill")
      a = ls, s = ls, l = "0", _ = "0", b = "none", w = nv, M = rv, g = cv(i.fillStyle, S, v);
    else if (i.layerKind === "mask")
      g = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const U = Math.max(1, Number(((E = i.preset) == null ? void 0 : E.aspect) ?? 1));
      a = Math.max(10, i.radius * 2 * U), s = Math.max(6, i.radius * 2), l = `${Math.min(6, s * 0.42)}px`, h = Number(((O = (T = i.preset) == null ? void 0 : T.angle) == null ? void 0 : O.value) || 0) * Vr;
    } else i.toolKind === "brush" ? g = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (g = "rgba(255,255,255,0.14)");
    L.style.display = "block", L.style.width = `${Math.round(a)}px`, L.style.height = `${Math.round(s)}px`, L.style.borderRadius = l, L.style.border = _, L.style.boxShadow = b, L.style.background = g, L.style.backgroundRepeat = "no-repeat", L.style.backgroundPosition = "center", L.style.backgroundSize = "contain", L.style.transform = `translate(${Math.round(i.x - w)}px, ${Math.round(i.y - M)}px) rotate(${h}deg)`;
  }
  function Ug() {
    var St;
    if (!V || !R) return;
    const i = d.primaryTool === "mask" ? "mask" : "paint", a = i === "mask" ? d.maskTool : d.paintTool;
    if (a === "lasso_fill") return;
    const s = yr(a), l = rn[s] || rn[nr], h = Number(d.brushSizes[s] ?? 10), g = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), _ = Math.max(6, g * 0.5), b = a === "eraser", v = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : fn(d.paintColor), S = i === "mask" ? Nn(v, 0.22) : b ? "rgba(255,255,255,0.14)" : Nn(v, j(Math.max(0.18, Number(v.a ?? 1) * 0.34), 0.18, 0.56)), w = i === "mask" ? Nn(v, 0.96) : b ? "rgba(255,255,255,0.72)" : Nn(v, j(Math.max(0.56, Number(v.a ?? 1) * 0.96), 0.56, 1));
    let M = _ * 2, E = _ * 2, T = "999px", O = 0, U = S;
    const Q = "rgba(222, 222, 222, 0.72)", ct = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      U = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (a === "marker") {
      const gt = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      M = Math.max(16, _ * 2 * gt), E = Math.max(10, _ * 2), T = `${Math.min(8, E * 0.42)}px`, O = Number(((St = l == null ? void 0 : l.angle) == null ? void 0 : St.value) || 0) * Vr;
    } else a === "brush" ? U = `radial-gradient(circle at 50% 50%, ${w} 0%, ${S} 48%, rgba(0,0,0,0) 100%)` : a === "lasso_fill" ? (M = Math.max(18, _ * 1.8), E = M, U = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${w} 43%, ${w} 58%, rgba(0,0,0,0) 59%)`) : b && (U = "rgba(255,255,255,0.12)");
    R.style.width = `${Math.round(M)}px`, R.style.height = `${Math.round(E)}px`, R.style.borderRadius = T, R.style.background = U, R.style.border = `1px solid ${Q}`, R.style.boxShadow = `0 0 0 1px ${ct}`, R.style.transform = `rotate(${O}deg)`, q && (clearTimeout(q), q = 0), V.classList.remove("fade-out"), V.classList.add("show");
  }
  function na() {
    !V || !V.classList.contains("show") || (V.classList.add("fade-out"), q && clearTimeout(q), q = window.setTimeout(() => {
      V.classList.remove("show", "fade-out"), q = 0;
    }, 180));
  }
  function jg(i, a, s, l) {
    const h = yr(a), g = rn[h] || rn[nr], _ = d.brushSizes[h] ?? 10, b = Math.max(1, _) * Math.max(0.1, g.sizeScale ?? 1), v = Hg(l, b), S = s.map((M) => ({
      ...M,
      t: Number((M == null ? void 0 : M.t) || 0),
      widthScale: Number.isFinite(Number(M == null ? void 0 : M.widthScale)) ? Math.max(0, Number(M.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(M == null ? void 0 : M.pressureLike)) ? Math.max(0, Number(M.pressureLike)) : 1
    })), w = {
      id: bi(i),
      actionGroupId: bi("ag"),
      targetSpace: l && typeof l == "object" ? { ...l } : { kind: "ERP_GLOBAL" },
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
    return Wf(w, g), w;
  }
  function Bg(i, a, s, l) {
    const h = s.map((v) => ({
      ...v,
      t: Number((v == null ? void 0 : v.t) || 0),
      widthScale: Number.isFinite(Number(v == null ? void 0 : v.widthScale)) ? Math.max(0, Number(v.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(v == null ? void 0 : v.pressureLike)) ? Math.max(0, Number(v.pressureLike)) : 1
    })), g = yr(a), _ = rn[g] || rn[nr], b = {
      id: bi(i),
      actionGroupId: bi("ag"),
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
        points: h.map((v) => ({ ...v }))
      }
    };
    return Wf(b, _), b;
  }
  function ci(i) {
    const a = p.painting || (p.painting = ko(null)), s = a[i] || (a[i] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function Gg(i, a, s = performance.now()) {
    let l;
    if (d.mode === "frame") {
      const S = ie();
      if (!S) return !1;
      l = vn(a, S, s);
    } else
      l = bn(a, s);
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, g = i.stroke.geometry.points, _ = h[h.length - 1];
    if (_) {
      const S = Math.abs(Number(l.u ?? l.x ?? 0) - Number(_.u ?? _.x ?? 0)), w = Math.abs(Number(l.v ?? l.y ?? 0) - Number(_.v ?? _.y ?? 0));
      if (S < 15e-4 && w < 15e-4) return !1;
    }
    const b = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...b }), g.push({ ...b });
    const v = Xn();
    if (v) {
      const S = d.paintEngine.ensureTarget(v);
      d.paintEngine.appendStrokePoint(S, Number(b.u ?? 0), Number(b.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Kg(i, a, s = performance.now()) {
    var _, b;
    let l;
    if (d.mode === "frame") {
      const v = ie();
      if (!v) return !1;
      l = vn(a, v, s);
    } else
      l = bn(a, s);
    const h = (b = (_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.geometry) == null ? void 0 : b.points;
    if (!l || !Array.isArray(h)) return !1;
    const g = h[h.length - 1];
    if (g) {
      const v = Math.abs(Number(l.u ?? l.x ?? 0) - Number(g.u ?? g.x ?? 0)), S = Math.abs(Number(l.v ?? l.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (v < 15e-4 && S < 15e-4) return !1;
    }
    return h.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Wg(i) {
    var gt, vt, mt, _t, ht;
    const a = (i == null ? void 0 : i.stroke) || null;
    if (!a || (i == null ? void 0 : i.layerKind) !== "paint" || String((a == null ? void 0 : a.toolKind) || "") !== "eraser") return !1;
    oi();
    const s = Xn(), l = Er(s.width, s.height);
    if (!Jl(l, a, { w: s.width, h: s.height })) return !1;
    const h = ((vt = (gt = l.ctx) == null ? void 0 : gt.getImageData(0, 0, s.width, s.height)) == null ? void 0 : vt.data) || null;
    if (!h) return !1;
    const g = new Map(ce().map((K) => [String((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "").trim(), K ? { ...K } : null])), _ = [], b = [], v = [...ln().filter((K) => String((K == null ? void 0 : K.layerKind) || "paint") !== "paint")];
    let S = !1, w = Ar().reduce((K, at) => Math.max(K, Number((at == null ? void 0 : at.z_index) || 0)), -1) + 1;
    function M(K, at, Tt, Ot = 8) {
      let Lt = at, Ht = Tt, jt = -1, Gt = -1;
      for (let Kt = 0; Kt < Tt; Kt += 1)
        for (let me = 0; me < at; me += 1)
          K[(Kt * at + me) * 4 + 3] <= Ot || (me < Lt && (Lt = me), Kt < Ht && (Ht = Kt), me > jt && (jt = me), Kt > Gt && (Gt = Kt));
      return jt < Lt || Gt < Ht ? null : { minX: Lt, minY: Ht, maxX: jt, maxY: Gt };
    }
    const E = M(h, s.width, s.height, 8);
    if (!E) return !1;
    function T(K, at) {
      return !K || !at ? !1 : !(K.maxX < at.minX || at.maxX < K.minX || K.maxY < at.minY || at.maxY < K.minY);
    }
    function O(K, at) {
      const Tt = Cr((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "", "paint", at);
      if (!Tt) return null;
      const Ot = Tt.centerUv.u - Tt.halfW, Lt = Tt.centerUv.u + Tt.halfW, Ht = Tt.centerUv.v - Tt.halfH, jt = Tt.centerUv.v + Tt.halfH, Gt = s.width, Kt = s.height;
      return {
        minX: Math.floor((Ot % 1 + 1) % 1 * Gt),
        maxX: Math.ceil((Lt % 1 + 1) % 1 * Gt),
        minY: Math.floor(j(Ht, 0, 1) * Kt),
        maxY: Math.ceil(j(jt, 0, 1) * Kt),
        wraps: Lt - Ot >= 1 || Ot < 0 || Lt > 1
      };
    }
    function U(K) {
      const at = (K == null ? void 0 : K.bbox) || null;
      if (!at) return null;
      const Tt = (K == null ? void 0 : K.transform) || {}, Ot = s.width, Lt = s.height, Ht = Number(at.u0 || 0) + Number(Tt.du || 0), jt = Number(at.u1 || 0) + Number(Tt.du || 0), Gt = Number(at.v0 || 0) + Number(Tt.dv || 0), Kt = Number(at.v1 || 0) + Number(Tt.dv || 0);
      return {
        minX: Math.floor((Ht % 1 + 1) % 1 * Ot),
        maxX: Math.ceil((jt % 1 + 1) % 1 * Ot),
        minY: Math.floor(j(Gt, 0, 1) * Lt),
        maxY: Math.ceil(j(Kt, 0, 1) * Lt),
        wraps: jt - Ht >= 1 || Ht < 0 || jt > 1
      };
    }
    function Q(K) {
      return K ? K.wraps ? T(E, { minX: 0, maxX: K.maxX, minY: K.minY, maxY: K.maxY }) || T(E, { minX: K.minX, maxX: s.width - 1, minY: K.minY, maxY: K.maxY }) : T(E, K) : !0;
    }
    function ct(K) {
      if (!K) return { touched: !1, canvas: null };
      const at = Er(s.width, s.height);
      at.ctx.drawImage(K, 0, 0);
      const Tt = at.ctx.getImageData(0, 0, s.width, s.height);
      at.ctx.save(), at.ctx.globalCompositeOperation = "destination-out", at.ctx.drawImage(l.canvas, 0, 0), at.ctx.restore();
      const Ot = at.ctx.getImageData(0, 0, s.width, s.height);
      for (let Lt = 0; Lt < s.width * s.height; Lt += 1) {
        if (h[Lt * 4 + 3] <= 8) continue;
        const jt = Tt.data[Lt * 4 + 3], Gt = Ot.data[Lt * 4 + 3];
        if (jt > Gt)
          return { touched: !0, canvas: at.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function St(K, at, Tt) {
      const Ot = Number(Tt == null ? void 0 : Tt.z_index), Lt = gg(K, at, Tt).map((Ht, jt) => ({
        ...Ht,
        z_index: Number.isFinite(Ot) ? Ot + jt * 1e-3 : w + jt * 1e-3
      }));
      return Lt.length && (w = Math.max(w, ...Lt.map((Ht) => Number((Ht == null ? void 0 : Ht.z_index) || 0))) + 1), Lt;
    }
    for (const K of ce()) {
      const at = String((K == null ? void 0 : K.actionGroupId) || (K == null ? void 0 : K.id) || "").trim();
      if (!at) continue;
      const Tt = mn(at, "paint");
      if (!Q(O(K, Tt))) {
        b.push(K), _.push(...Tt);
        continue;
      }
      const Ot = ((_t = (mt = d.paintEngine) == null ? void 0 : mt.getGroupTarget) == null ? void 0 : _t.call(mt, at)) || null, Lt = ((ht = Ot == null ? void 0 : Ot.committedPaint) == null ? void 0 : ht.canvas) || null;
      if (!Lt) {
        b.push(K), _.push(...Tt);
        continue;
      }
      const Ht = ct(Lt);
      if (!Ht.touched || !Ht.canvas) {
        b.push(K), _.push(...Tt);
        continue;
      }
      S = !0;
      const jt = St(Ht.canvas, "paint", g.get(at) || K || {});
      v.push(...jt);
    }
    for (const K of ln().filter((at) => String((at == null ? void 0 : at.layerKind) || "paint") === "paint")) {
      if (!Q(U(K))) {
        v.push(K);
        continue;
      }
      const at = qo(K, null);
      if (!at) {
        v.push(K);
        continue;
      }
      const Tt = ct(at);
      if (!Tt.touched || !Tt.canvas) {
        v.push(K);
        continue;
      }
      S = !0;
      const Ot = St(Tt.canvas, "paint", K);
      v.push(...Ot);
    }
    return S ? (p.painting.paint.strokes = _, p.painting.groups = b.sort((K, at) => Number((K == null ? void 0 : K.z_index) || 0) - Number((at == null ? void 0 : at.z_index) || 0)), p.painting.raster_objects = v.sort((K, at) => Number((K == null ? void 0 : K.z_index) || 0) - Number((at == null ? void 0 : at.z_index) || 0)), ni({ preservePanelValues: !1 }), !0) : !1;
  }
  function qg(i) {
    var g, _, b, v;
    const a = ((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) || null;
    if (!a) return !1;
    const s = String(((_ = i == null ? void 0 : i.stroke) == null ? void 0 : _.toolKind) || "pen");
    if (i.layerKind === "paint" && s === "eraser")
      return a.geometryKind !== "lasso_fill" && (a.processedPoints = Bs(a.rawPoints || a.points || [], i.stroke.targetSpace, !0)), Wg(i);
    const l = i.layerKind === "paint" && s !== "eraser";
    if (a.geometryKind === "lasso_fill")
      return (Array.isArray(a.points) ? a.points : []).length < 3 ? !1 : (l && Nl((b = i.stroke) == null ? void 0 : b.actionGroupId), ci(i.layerKind).push(i.stroke), !0);
    const h = a.rawPoints || a.points || [];
    return h.length < 1 ? !1 : (a.processedPoints = Bs(h, i.stroke.targetSpace, !0), l && Nl((v = i.stroke) == null ? void 0 : v.actionGroupId), ci(i.layerKind).push(i.stroke), !0);
  }
  function du(i) {
    var s;
    if (e === "cutout" && d.mode === "frame") {
      const l = ie(), h = Ye(l);
      if (!l || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const _ = vn(i, l, performance.now()), b = _ ? Xi(_) : null;
      if (b)
        for (const S of Vs()) {
          if (!De(S)) continue;
          const w = Ji(S, b);
          if (w && Number(w.x) >= 0 && Number(w.x) <= 1 && Number(w.y) >= 0 && Number(w.y) <= 1) {
            const M = Re(S);
            if (M != null && M.visible) return { item: S, geom: M };
          }
        }
      const v = Ps(!1).slice().sort((S, w) => Number((w == null ? void 0 : w.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0));
      for (const S of v) {
        if (S.type === "strokeGroup") {
          const E = ti(zi("paint", S.actionGroupId || S.id || ""));
          if (!E) continue;
          const T = Re(E);
          if (!(T != null && T.visible)) continue;
          const O = Array.isArray(T.strokePaths) ? T.strokePaths : [];
          for (const U of O) {
            const Q = Array.isArray(U == null ? void 0 : U.points) ? U.points : [];
            if (!Q.length) continue;
            if (U.closed && Q.length >= 3 && rr(i, Q)) return { item: E, geom: T };
            const ct = Math.max(8, Number((U == null ? void 0 : U.lineWidth) || 0) * 0.5 + 6);
            for (let St = 0; St < Q.length - 1; St += 1)
              if (Mc(i, Q[St], Q[St + 1]) <= ct * ct) return { item: E, geom: T };
            if (Q.length === 1 && Hr(i, Q[0]) <= ct * ct) return { item: E, geom: T };
          }
          continue;
        }
        if (S.type === "rasterObject") {
          const E = Qr(Ui(((s = S.item) == null ? void 0 : s.id) || S.id || ""));
          if (!E) continue;
          const T = Re(E);
          if (Hl(E, T, i, _)) return { item: E, geom: T };
          continue;
        }
        const w = S.item;
        if (!w || !De(w) || !b) continue;
        const M = Ji(w, b);
        if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
          const E = Re(w);
          if (E != null && E.visible) return { item: w, geom: E };
        }
      }
      return null;
    }
    const a = [
      ...Ps(!1).slice().sort((l, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var h;
        return l.type === "strokeGroup" ? ti(zi("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? Qr(Ui(((h = l.item) == null ? void 0 : h.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...e === "cutout" ? Vs().filter((l) => gn(l)) : []
    ];
    for (const l of a) {
      if (Te(l)) {
        const g = Re(l);
        if (!(g != null && g.visible)) continue;
        const _ = Array.isArray(g.strokePaths) ? g.strokePaths : [];
        for (const b of _) {
          const v = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!v.length) continue;
          if (b.closed && v.length >= 3 && rr(i, v)) return { item: l, geom: g };
          const S = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let w = 0; w < v.length - 1; w += 1)
            if (Mc(i, v[w], v[w + 1]) <= S * S) return { item: l, geom: g };
          if (v.length === 1 && Hr(i, v[0]) <= S * S) return { item: l, geom: g };
        }
        continue;
      }
      if (We(l)) {
        const g = Re(l);
        if (!(g != null && g.visible)) continue;
        if (Hl(l, g, i)) return { item: l, geom: g };
        continue;
      }
      const h = Re(l);
      if (h.visible && rr(i, h.corners))
        return { item: l, geom: h };
    }
    return null;
  }
  function Xs(i, a) {
    if (!i || !i.visible) return { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (i.kind === "strokeGroup") {
      const l = i.corners.findIndex((g) => Hr(g, a) <= 121);
      if (l >= 0) {
        const g = i.corners[l], _ = g.x - i.center.x, b = g.y - i.center.y, v = _ * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: v };
      }
      const h = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const g of h) {
        const _ = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && _.length >= 3 && rr(a, _)) return { kind: "move", cursor: "default" };
        const b = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let v = 0; v < _.length - 1; v += 1)
          if (Mc(a, _[v], _[v + 1]) <= b * b) return { kind: "move", cursor: "default" };
      }
      return rr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject")
      return rr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (e === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const l = i.edgeMidpoints.find((h) => Hr(h, a) <= 169);
      if (l) {
        const h = l.edge === "left" || l.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const s = i.corners.findIndex((l) => Hr(l, a) <= 121);
    if (s >= 0) {
      const l = i.corners[s], h = l.x - i.center.x, g = l.y - i.center.y, _ = h * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: _ };
    }
    return Hr(i.rotateHandle, a) <= 144 ? { kind: "rotate", cursor: "grab" } : rr(a, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
  }
  function hu(i, a) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((a == null ? void 0 : a.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((a == null ? void 0 : a.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((a == null ? void 0 : a.y) || 0))
    };
  }
  function Yg(i, a) {
    return !!i && !!a && Number(a.x) >= Number(i.x0) && Number(a.x) <= Number(i.x1) && Number(a.y) >= Number(i.y0) && Number(a.y) <= Number(i.y1);
  }
  function Xg(i, a) {
    if (!i || !(a != null && a.visible) || !Array.isArray(a.corners)) return !1;
    if (a.corners.some((h) => Yg(i, h))) return !0;
    const s = (Number(i.x0) + Number(i.x1)) * 0.5, l = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!rr({ x: s, y: l }, a.corners);
  }
  function xe(i) {
    if (zg(), d.interaction) {
      d.interaction.kind === "paint_stroke" || d.interaction.kind === "paint_lasso_fill" ? C.style.cursor = "none" : d.interaction.kind === "view" || d.interaction.kind === "pan_frame" ? C.style.cursor = "grabbing" : d.interaction.kind === "move" || d.interaction.kind === "move_multi" || d.interaction.kind === "move_stroke_group" || d.interaction.kind === "move_raster_object" ? C.style.cursor = "move" : d.interaction.kind === "scale" || d.interaction.kind === "scale_x" || d.interaction.kind === "scale_y" ? C.style.cursor = d.interaction.cursor || "nwse-resize" : d.interaction.kind === "rotate" ? C.style.cursor = "grabbing" : C.style.cursor = "default";
      return;
    }
    if (fu()) {
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
    const a = we(), s = a ? Re(a) : null, l = a ? fr(a) : !1, h = l ? { kind: "none", cursor: "default" } : Xs(s, i);
    if (!l && h.kind !== "none") {
      C.style.cursor = h.cursor;
      return;
    }
    if (d.primaryTool === "cursor" && du(i)) {
      C.style.cursor = "default";
      return;
    }
    C.style.cursor = d.mode === "pano" ? "grab" : "default";
  }
  function qt() {
    if (!Y) return;
    const i = we(), a = An();
    if (!i && a.length === 0 || d.interaction) {
      Y.style.display = "none";
      return;
    }
    if (a.length > 1) {
      const ht = "multi", K = As(a);
      if (d.menuMode !== ht)
        Y.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${K ? "Unlock" : "Lock"}" data-tip="${K ? "Unlock" : "Lock"}">${K ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `, d.menuMode = ht, d.menuSize.measured = !1, to(Y);
      else {
        const At = Y.querySelector("[data-action='toggle-lock']");
        At && (At.innerHTML = K ? Dt.lock_open : Dt.lock_closed, At.setAttribute("aria-label", K ? "Unlock" : "Lock"), At.setAttribute("data-tip", K ? "Unlock" : "Lock"));
      }
      const at = Cs(a);
      if (!(at != null && at.visible)) {
        Y.style.display = "none";
        return;
      }
      const Tt = at.corners.map((At) => At.x), Ot = at.corners.map((At) => At.y), Lt = Math.min(...Tt), Ht = Math.max(...Tt), jt = Math.max(...Ot), Gt = Y.style.display, Kt = Y.style.visibility;
      Y.style.display = "flex", Y.style.visibility = "hidden";
      const me = Y.getBoundingClientRect(), Zn = Math.round(Number((me == null ? void 0 : me.width) || 0)) || Y.offsetWidth || d.menuSize.w || 220, Jn = Math.round(Number((me == null ? void 0 : me.height) || 0)) || Y.offsetHeight || d.menuSize.h || 40;
      d.menuSize.w = Number.isFinite(Zn) && Zn > 0 ? Zn : 220, d.menuSize.h = Number.isFinite(Jn) && Jn > 0 ? Jn : 40, Y.style.display = Gt, Y.style.visibility = Kt, d.menuSize.measured = !0;
      const eo = d.menuSize.w, la = d.menuSize.h, ui = 14;
      Y.style.display = "flex";
      let fi = (Lt + Ht) * 0.5 - eo * 0.5, no = jt + 18;
      if (fi = j(fi, ui, C.width - eo - ui), no + la > C.height - ui) {
        Y.style.display = "none";
        return;
      }
      Y.style.left = `${fi}px`, Y.style.top = `${no}px`;
      return;
    }
    const s = Il(), l = fr(i), h = s === "stroke" ? "stroke:paint" : e === "stickers" || s === "image" ? `stickers:${Ae(i) ? "external" : "normal"}` : `cutout:${d.cutoutAspectOpen ? "open" : "closed"}`;
    if (d.menuMode !== h) {
      if (s === "stroke")
        Y.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `;
      else if (e === "stickers" || s === "image")
        Y.innerHTML = `
          <button class="pano-btn pano-btn-icon" data-action="bring-front" aria-label="Bring to Front" data-tip="Bring to front">${Dt.bring_front}</button>
          <button class="pano-btn pano-btn-icon" data-action="send-back" aria-label="Send to Back" data-tip="Send to back">${Dt.send_back}</button>
          ${Ae(i) ? "" : `<button class="pano-btn pano-btn-icon" data-action="duplicate" aria-label="Duplicate" data-tip="Duplicate">${Dt.duplicate}</button><button class="pano-btn pano-btn-icon" data-action="replace-image" aria-label="Replace Image" data-tip="Replace image">${Dt.replace_image}</button>`}
          ${Ae(i) ? `<button class="pano-btn pano-btn-icon" data-action="back-initial" aria-label="Back to Initial" data-tip="Back to initial position">${Dt.back_initial}</button>` : ""}
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          ${Ae(i) ? `<button class="pano-btn pano-btn-icon" data-action="toggle-visible" aria-label="Hide" data-tip="Hide input image">${Dt.eye_dashed}</button>` : `<button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>`}
        `;
      else {
        const ht = yi(i);
        Y.innerHTML = `
          <div class="pano-cutout-menu">
            <button class="pano-btn pano-btn-icon" data-action="aspect" aria-label="Aspect Ratio" data-tip="Aspect ratio">${Dt.aspect}</button>
            <div class="pano-aspect-popover${d.cutoutAspectOpen ? " open" : ""}" role="dialog" aria-label="Aspect Ratio">
              <button class="pano-btn pano-aspect-choice${ht === "1:1" ? " active" : ""}" data-action="aspect-set" data-aspect="1:1">1:1</button>
              <button class="pano-btn pano-aspect-choice${ht === "4:3" ? " active" : ""}" data-action="aspect-set" data-aspect="4:3">4:3</button>
              <button class="pano-btn pano-aspect-choice${ht === "3:2" ? " active" : ""}" data-action="aspect-set" data-aspect="3:2">3:2</button>
              <button class="pano-btn pano-aspect-choice${ht === "16:9" ? " active" : ""}" data-action="aspect-set" data-aspect="16:9">16:9</button>
            </div>
          </div>
          <button class="pano-btn pano-btn-icon" data-action="rotate-90" aria-label="Rotate 90°" data-tip="Rotate 90°">${Dt.rotate_90}</button>
          <button class="pano-btn pano-btn-icon" data-action="toggle-lock" aria-label="${l ? "Unlock" : "Lock"}" data-tip="${l ? "Unlock" : "Lock"}">${l ? Dt.lock_open : Dt.lock_closed}</button>
          <button class="pano-btn pano-btn-icon" data-action="delete" aria-label="Delete" data-tip="Delete">${Dt.delete}</button>
        `;
      }
      d.menuMode = h, d.menuSize.measured = !1, to(Y);
    }
    if ((e === "stickers" || s === "image") && Ae(i)) {
      const ht = Y.querySelector("[data-action='back-initial']");
      if (ht) {
        const at = hp();
        ht.disabled = !at, ht.setAttribute("aria-disabled", at ? "false" : "true"), ht.setAttribute("data-tip", at ? "Back to initial position" : "Already at initial position");
      }
      const K = Y.querySelector("[data-action='toggle-visible']");
      if (K) {
        const at = ei(i);
        K.innerHTML = at ? Dt.eye : Dt.eye_dashed, K.setAttribute("aria-label", at ? "Show" : "Hide"), K.setAttribute("data-tip", at ? "Show input image" : "Hide input image");
      }
    }
    const g = Y.querySelector("[data-action='toggle-lock']");
    g && (g.innerHTML = l ? Dt.lock_open : Dt.lock_closed, g.setAttribute("aria-label", l ? "Unlock" : "Lock"), g.setAttribute("data-tip", l ? "Unlock" : "Lock"));
    const _ = Re(i);
    if (!(_ != null && _.visible)) {
      Y.style.display = "none";
      return;
    }
    const b = _.corners, v = b.map((ht) => ht.x), S = b.map((ht) => ht.y), w = Math.min(...v), M = Math.max(...v), E = Math.max(...S), T = Y.style.display, O = Y.style.visibility;
    Y.style.display = "flex", Y.style.visibility = "hidden";
    const U = Y.getBoundingClientRect(), Q = Math.round(Number((U == null ? void 0 : U.width) || 0)) || Y.offsetWidth || d.menuSize.w || 220, ct = Math.round(Number((U == null ? void 0 : U.height) || 0)) || Y.offsetHeight || d.menuSize.h || 40;
    d.menuSize.w = Number.isFinite(Q) && Q > 0 ? Q : 220, d.menuSize.h = Number.isFinite(ct) && ct > 0 ? ct : 40, Y.style.display = T, Y.style.visibility = O, d.menuSize.measured = !0;
    const St = d.menuSize.w, gt = d.menuSize.h, vt = 14;
    Y.style.display = "flex";
    let mt = (w + M) * 0.5 - St * 0.5, _t = E + 18;
    if (!Number.isFinite(mt) || !Number.isFinite(_t)) {
      Y.style.display = "none";
      return;
    }
    if (mt = j(mt, vt, C.width - St - vt), _t + gt > C.height - vt) {
      Y.style.display = "none";
      return;
    }
    Y.style.left = `${mt}px`, Y.style.top = `${_t}px`;
  }
  function ra() {
    it && (ee.timer && (clearTimeout(ee.timer), ee.timer = 0), ee.target = null, it.classList.remove("show", "pano-tooltip-footer", "pano-tooltip-tool-rail"));
  }
  function Zg(i) {
    if (!it || !i || !i.isConnected) return;
    const a = String(i.getAttribute("data-tip") || "").trim();
    if (!a) return;
    it.textContent = a;
    const s = $.getBoundingClientRect(), l = i.getBoundingClientRect(), h = 8, g = it.offsetWidth || 100, _ = it.offsetHeight || 24, b = !!i.closest(".pano-floating-left"), v = !!i.closest(".pano-paint-footer") || !!i.closest(".pano-paint-color-float");
    it.classList.remove("pano-tooltip-footer", "pano-tooltip-tool-rail");
    let S = l.left - s.left + l.width * 0.5 - g * 0.5, w = l.top - s.top - _ - 8;
    if (b)
      it.classList.add("pano-tooltip-tool-rail"), S = l.right - s.left + 10, w = l.top - s.top + l.height * 0.5 - _ * 0.5, S = j(S, h, Math.max(h, s.width - g - h)), w = j(w, h, Math.max(h, s.height - _ - h));
    else if (v) {
      it.classList.add("pano-tooltip-footer");
      const M = i.closest(".pano-paint-footer"), E = M ? M.getBoundingClientRect() : l;
      S = E.left - s.left + E.width * 0.5 - g * 0.5, w = E.bottom - s.top + 5, S = j(S, h, Math.max(h, s.width - g - h)), w = Math.max(h, w);
    }
    S = j(S, h, Math.max(h, s.width - g - h)), w = Math.max(h, w), it.style.left = `${S}px`, it.style.top = `${w}px`, it.classList.add("show");
  }
  function to(i) {
    i.querySelectorAll("[data-tip]").forEach((a) => {
      a.__panoTipBound || (a.__panoTipBound = !0, a.addEventListener("pointerenter", () => {
        ee.target = a, ee.timer && clearTimeout(ee.timer), ee.timer = window.setTimeout(() => {
          ee.target === a && Zg(a);
        }, 220);
      }), a.addEventListener("pointerleave", () => {
        ee.target === a && (ee.target = null), ra();
      }), a.addEventListener("pointerdown", ra));
    });
  }
  const Oe = Ss({
    getView: () => ({ yaw: d.viewYaw, pitch: d.viewPitch, fov: d.viewFov }),
    setView: (i) => {
      d.viewYaw = $e(Number(i.yaw || 0)), d.viewPitch = j(Number(i.pitch || 0), -89.9, 89.9), d.viewFov = j(Number(i.fov || d.viewFov || 100), 35, 140);
    },
    getInvert: () => {
      var i, a;
      return {
        x: (i = p.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (a = p.ui_settings) != null && a.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: dr,
    onInteraction: () => {
      Pt.backgroundDirty = !0, Pt.dirty = !0;
    }
  });
  C.onpointerdown = (i) => {
    const a = si(i);
    if (ea(a, !0), d.viewTween = null, Oe.state.inertia.active = !1, Oe.state.inertia.vx = 0, Oe.state.inertia.vy = 0, i.button === 1) {
      i.preventDefault(), d.mode !== "frame" && (d.interaction = { kind: "view", last: a, lastTs: performance.now() }, Oe.startDrag(a.x, a.y, i.pointerId, performance.now())), xe(a), C.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (r) {
      d.mode === "pano" && (d.interaction = { kind: "view", last: a, lastTs: performance.now() }, Oe.startDrag(a.x, a.y, i.pointerId, performance.now()), xe(a), C.setPointerCapture(i.pointerId));
      return;
    }
    if (X && !X.hidden)
      return;
    if ((d.primaryTool === "paint" || d.primaryTool === "mask") && (lu() || Ys())) {
      const b = d.primaryTool === "mask" ? "mask" : "paint", v = d.primaryTool === "mask" ? d.maskTool : d.paintTool, S = Ys() ? ie() : null, w = { kind: "ERP_GLOBAL" }, M = S ? vn(a, S, performance.now()) : bn(a, performance.now());
      d.interaction = {
        kind: v === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: bi("live"),
        stroke: v === "lasso_fill" ? Bg(b, v, [M], w) : jg(b, v, [M], w)
      }, qi();
      const E = Xn();
      if (E)
        if (d.paintEngine.beginStroke(d.interaction.stroke, E), d.interaction.kind === "paint_stroke") {
          const T = d.paintEngine.ensureTarget(E), O = Number((M == null ? void 0 : M.u) ?? (M == null ? void 0 : M.x) ?? 0), U = Number((M == null ? void 0 : M.v) ?? (M == null ? void 0 : M.y) ?? 0);
          d.paintEngine.appendStrokePoint(T, O, U, d.interaction.stroke);
        } else
          d.paintEngine.updateActiveStroke(d.interaction.stroke, E);
      xe(a), C.setPointerCapture(i.pointerId), pt();
      return;
    }
    const s = An(), l = we(), h = s.length > 1 ? Cs(s) : l ? Re(l) : null;
    if (d.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      d.interaction = { kind: "marquee_select", start: a, current: a }, xe(a), C.setPointerCapture(i.pointerId), pt({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (h != null && h.visible)) {
      if ((s.some((v) => fr(v)) ? { kind: "none" } : Xs(h, a)).kind === "move") {
        d.interaction = {
          kind: "move_multi",
          items: s.map((v) => v),
          offset: { x: a.x - h.center.x, y: a.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: s.filter((v) => De(v)).map((v) => ({
            id: String(v.id || ""),
            yaw_deg: Number(v.yaw_deg || 0),
            pitch_deg: Number(v.pitch_deg || 0),
            center: (() => {
              var w, M;
              const S = Re(v);
              return S != null && S.visible ? { x: Number(((w = S.center) == null ? void 0 : w.x) || 0), y: Number(((M = S.center) == null ? void 0 : M.y) || 0) } : { x: a.x, y: a.y };
            })()
          })),
          strokeSnapshots: s.filter((v) => Te(v)).map((v) => ({
            id: String(v.actionGroupId || v.id || ""),
            layerKind: String(v.layerKind || "paint"),
            snapshot: on(mn(v.actionGroupId, v.layerKind)),
            frameSnapshot: on(Cr(v.actionGroupId, v.layerKind)),
            center: (() => {
              var w, M;
              const S = Re(v);
              return S != null && S.visible ? { x: Number(((w = S.center) == null ? void 0 : w.x) || 0), y: Number(((M = S.center) == null ? void 0 : M.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: Pl(v.actionGroupId, v.layerKind)
          })),
          rasterSnapshots: s.filter((v) => We(v)).map((v) => ({
            id: Ke(v.rasterObjectId || v.id || ""),
            snapshot: on(ln().find((S) => String((S == null ? void 0 : S.id) || "") === Ke(v.rasterObjectId || v.id || ""))),
            center: (() => {
              var w, M;
              const S = Re(v);
              return S != null && S.visible ? { x: Number(((w = S.center) == null ? void 0 : w.x) || 0), y: Number(((M = S.center) == null ? void 0 : M.y) || 0) } : { x: a.x, y: a.y };
            })(),
            centerUv: Dp(v)
          }))
        }, xe(a), C.setPointerCapture(i.pointerId);
        return;
      }
    } else if (l && (h != null && h.visible)) {
      const b = fr(l) ? { kind: "none" } : Xs(h, a);
      if (b.kind === "scale") {
        d.interaction = Te(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          snapshot: on(mn(l.actionGroupId, l.layerKind)),
          frameSnapshot: on(Cr(l.actionGroupId, l.layerKind)),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(a.x - h.center.x, a.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: b.cursor
        }, xe(a), C.setPointerCapture(i.pointerId);
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
        }, xe(a), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        d.interaction = Te(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: h.center,
          startAng: Math.atan2(a.y - h.center.y, a.x - h.center.x),
          snapshot: on(mn(l.actionGroupId, l.layerKind)),
          frameSnapshot: on(Cr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: h.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(a.y - h.center.y, a.x - h.center.x)
        }, xe(a), C.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Te(l)) {
          const v = d.mode === "frame" ? (() => {
            const S = ie();
            return S ? vn(a, S, performance.now()) : null;
          })() : bn(a, performance.now());
          d.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: v,
            snapshot: on(mn(l.actionGroupId, l.layerKind)),
            frameSnapshot: on(Cr(l.actionGroupId, l.layerKind))
          }, xe(a), C.setPointerCapture(i.pointerId);
          return;
        }
        if (We(l)) {
          const v = d.mode === "frame" ? (() => {
            const S = ie();
            return S ? vn(a, S, performance.now()) : null;
          })() : bn(a, performance.now());
          d.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: v,
            snapshot: on(ln().find((S) => String((S == null ? void 0 : S.id) || "") === Ke(l.rasterObjectId || l.id || "")))
          }, xe(a), C.setPointerCapture(i.pointerId);
          return;
        }
        d.interaction = {
          kind: "move",
          item: l,
          offset: { x: a.x - h.center.x, y: a.y - h.center.y }
        }, xe(a), C.setPointerCapture(i.pointerId);
        return;
      }
    }
    const g = du(a);
    if (g) {
      const b = d.selectedId !== g.item.id;
      if (b && d.selectedId && (ue(), En()), Go(g.item), e === "cutout" && b && (d.cutoutAspectOpen = !1), b && ne(), qt(), pt(), b) {
        xe(a);
        return;
      }
      if (fr(g.item)) {
        xe(a);
        return;
      }
      d.interaction = {
        kind: Te(g.item) ? "move_stroke_group" : We(g.item) ? "move_raster_object" : "move",
        item: g.item,
        offset: { x: a.x - g.geom.center.x, y: a.y - g.geom.center.y },
        startUv: Te(g.item) || We(g.item) ? d.mode === "frame" ? (() => {
          const v = ie();
          return v ? vn(a, v, performance.now()) : null;
        })() : bn(a, performance.now()) : null,
        snapshot: Te(g.item) ? on(mn(g.item.actionGroupId, g.item.layerKind)) : We(g.item) ? on(ln().find((v) => String((v == null ? void 0 : v.id) || "") === Ke(g.item.rasterObjectId || g.item.id || ""))) : null,
        frameSnapshot: Te(g.item) ? on(Cr(g.item.actionGroupId, g.item.layerKind)) : null
      }, xe(a), C.setPointerCapture(i.pointerId);
      return;
    }
    const _ = !!d.selectedId;
    _ && (ue(), En()), ni(), _ && ne(), qt(), pt(), d.mode === "pano" && (d.interaction = { kind: "view", last: a, lastTs: performance.now() }, Oe.startDrag(a.x, a.y, i.pointerId, performance.now()), xe(a), C.setPointerCapture(i.pointerId));
  }, C.onpointermove = (i) => {
    var l, h, g, _, b, v, S, w, M, E, T, O, U, Q, ct, St, gt, vt;
    const a = si(i);
    if (ea(a, !0), !d.interaction) {
      xe(a);
      return;
    }
    xe(a);
    const s = d.interaction;
    if (s.kind === "paint_stroke") {
      const mt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let _t = !1;
      mt.forEach((ht) => {
        const K = si(ht);
        Gg(s, K, performance.now()) && (_t = !0);
      }), _t && pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const mt = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let _t = !1;
      if (mt.forEach((ht) => {
        const K = si(ht);
        Kg(s, K, performance.now()) && (_t = !0);
      }), _t) {
        const ht = Xn();
        ht && d.paintEngine.updateActiveStroke(s.stroke, ht), pt({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const mt = performance.now();
      Oe.moveDrag(a.x, a.y, d.mode === "unwrap" ? "unwrap" : "pano", mt), s.lastTs = mt, s.last = a, pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      d.frameView.panX += a.x - s.last.x, d.frameView.panY += a.y - s.last.y, s.last = a, pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const mt = a.x - s.offset.x, _t = a.y - s.offset.y;
      if (d.mode === "frame" && e === "cutout") {
        const ht = ie(), K = Ye(ht);
        if (!ht || !K) return;
        const at = {
          x: j((mt - K.x) / Math.max(1, K.w), 0, 1),
          y: j((_t - K.y) / Math.max(1, K.h), 0, 1)
        }, Tt = js(ht, at);
        if (!Tt) return;
        const Ot = Pa(Tt);
        s.item.yaw_deg = Ot.yaw, s.item.pitch_deg = Ot.pitch;
      } else if (d.mode === "unwrap") {
        const ht = dr(), K = j((mt - ht.x) / Math.max(ht.w, 1), 0, 1), at = j((_t - ht.y) / Math.max(ht.h, 1), 0, 1);
        s.item.yaw_deg = $e(K * 360 - 180), s.item.pitch_deg = j(90 - at * 180, -90, 90);
      } else {
        const ht = Ts(mt, _t), K = Pa(ht);
        s.item.yaw_deg = K.yaw, s.item.pitch_deg = K.pitch;
      }
      pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const mt = d.mode === "frame" ? (() => {
        const K = ie();
        return K ? vn(a, K, performance.now()) : null;
      })() : bn(a, performance.now());
      if (!mt || !s.startUv) return;
      const _t = Number(mt.u || 0) - Number(s.startUv.u || 0), ht = Number(mt.v || 0) - Number(s.startUv.v || 0);
      kl((l = s.item) == null ? void 0 : l.actionGroupId, _t, ht, s.snapshot, (h = s.item) == null ? void 0 : h.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !0 }), pt({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const mt = d.mode === "frame" ? (() => {
        const K = ie();
        return K ? vn(a, K, performance.now()) : null;
      })() : bn(a, performance.now());
      if (!mt || !s.startUv) return;
      const _t = Number(mt.u || 0) - Number(s.startUv.u || 0), ht = Number(mt.v || 0) - Number(s.startUv.v || 0);
      Al(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((_ = s.item) == null ? void 0 : _.id) || "", _t, ht, s.snapshot) && (Zi(), pt({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const mt = a.x - Number(((b = s.offset) == null ? void 0 : b.x) || 0), _t = a.y - Number(((v = s.offset) == null ? void 0 : v.y) || 0);
      let ht = !1, K = !1, at = !1;
      const Tt = mt - Number(((S = s.startCenter) == null ? void 0 : S.x) || mt), Ot = _t - Number(((w = s.startCenter) == null ? void 0 : w.y) || _t);
      for (const Lt of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const Ht = (e === "cutout" ? ks() : Pe()).find((Gt) => String((Gt == null ? void 0 : Gt.id) || "") === String(Lt.id || ""));
        if (!Ht || !De(Ht)) continue;
        const jt = {
          x: Number(((M = Lt.center) == null ? void 0 : M.x) || 0) + Tt,
          y: Number(((E = Lt.center) == null ? void 0 : E.y) || 0) + Ot
        };
        if (d.mode === "frame" && e === "cutout") {
          const Gt = ie(), Kt = Ye(Gt);
          if (!Gt || !Kt) continue;
          const me = {
            x: j((jt.x - Kt.x) / Math.max(1, Kt.w), 0, 1),
            y: j((jt.y - Kt.y) / Math.max(1, Kt.h), 0, 1)
          }, Zn = js(Gt, me);
          if (!Zn) continue;
          const Jn = Pa(Zn);
          Ht.yaw_deg = Jn.yaw, Ht.pitch_deg = Jn.pitch;
        } else if (d.mode === "unwrap") {
          const Gt = dr(), Kt = j((jt.x - Gt.x) / Math.max(Gt.w, 1), 0, 1), me = j((jt.y - Gt.y) / Math.max(Gt.h, 1), 0, 1);
          Ht.yaw_deg = $e(Kt * 360 - 180), Ht.pitch_deg = j(90 - me * 180, -90, 90);
        } else {
          const Gt = Ts(jt.x, jt.y), Kt = Pa(Gt);
          Ht.yaw_deg = Kt.yaw, Ht.pitch_deg = Kt.pitch;
        }
        ht = !0;
      }
      for (const Lt of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const Ht = {
          x: Number(((T = Lt.center) == null ? void 0 : T.x) || 0) + Tt,
          y: Number(((O = Lt.center) == null ? void 0 : O.y) || 0) + Ot
        }, jt = d.mode === "frame" ? (() => {
          const Kt = ie();
          return Kt ? vn(Ht, Kt, performance.now()) : null;
        })() : bn(Ht, performance.now()), Gt = Lt.centerUv || null;
        if (jt && Gt) {
          const Kt = Number(jt.u || 0) - Number(Gt.u || 0), me = Number(jt.v || 0) - Number(Gt.v || 0);
          kl(Lt.id, Kt, me, Lt.snapshot, Lt.layerKind, Lt.frameSnapshot) && (ht = !0, K = !0);
        }
      }
      for (const Lt of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const Ht = {
          x: Number(((U = Lt.center) == null ? void 0 : U.x) || 0) + Tt,
          y: Number(((Q = Lt.center) == null ? void 0 : Q.y) || 0) + Ot
        }, jt = d.mode === "frame" ? (() => {
          const Kt = ie();
          return Kt ? vn(Ht, Kt, performance.now()) : null;
        })() : bn(Ht, performance.now()), Gt = Lt.centerUv || null;
        if (jt && Gt) {
          const Kt = Number(jt.u || 0) - Number(Gt.u || 0), me = Number(jt.v || 0) - Number(Gt.v || 0);
          Al(Lt.id, Kt, me, Lt.snapshot) && (ht = !0, at = !0);
        }
      }
      ht && (K ? In({ rebuildPaintEngine: !0 }) : at ? Zi() : yn(), pt({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const _t = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Cl((ct = s.item) == null ? void 0 : ct.actionGroupId, _t, 0, s.snapshot, (St = s.item) == null ? void 0 : St.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !0 }), pt({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let mt = (Math.atan2(a.y - s.center.y, a.x - s.center.x) - Number(s.startAng || 0)) * Vr;
      i.shiftKey && (mt = Math.round(mt / 45) * 45), Cl((gt = s.item) == null ? void 0 : gt.actionGroupId, 1, mt, s.snapshot, (vt = s.item) == null ? void 0 : vt.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !0 }), pt({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = a, pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const _t = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = j(s.startHFOV * _t, 1, 179), s.item.vFOV_deg = j(s.startVFOV * _t, 1, 179), s.item.aspect_id = zr(s.item), pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const _t = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = j(s.startHFOV * _t, 1, 179), s.item.aspect_id = zr(s.item), pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const _t = Math.max(1, Math.hypot(a.x - s.center.x, a.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = j(s.startVFOV * _t, 1, 179), s.item.aspect_id = zr(s.item), pt({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let _t = (Math.atan2(a.y - s.center.y, a.x - s.center.x) - s.startAng) * Vr, ht = s.startRot - _t;
      i.shiftKey && (ht = Math.round(ht / 45) * 45);
      const K = De(s.item) ? "rot_deg" : "roll_deg";
      s.item[K] = ht, pt({ localOnly: !0 });
    }
  }, C.onpointerup = () => {
    var a, s, l, h, g, _;
    const i = d.interaction;
    if (((a = d.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill")
      if (qi(), qg(d.interaction)) {
        In();
        const b = String(((l = d.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
        if (b) {
          const S = ce().find((w) => String((w == null ? void 0 : w.actionGroupId) || "") === b);
          S && (S.frame = null);
        }
        const v = Xn();
        v && (String(((h = d.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (d.paintEngine.cancelActiveStroke(v), Xl()) : d.paintEngine.commitActiveStroke(d.interaction.stroke, v)), ue(), En(), ne(), qt(), t.setDirtyCanvas(!0, !0), pt();
      } else {
        const b = Xn();
        b && d.paintEngine.cancelActiveStroke(b);
      }
    else if (((g = d.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const b = hu(d.interaction.start, d.interaction.current), S = [
        ...e === "cutout" ? Vs().filter((w) => !gn(w)) : [...Pe()],
        ...Zh(),
        ...Jh()
      ].filter((w) => Xg(b, Re(w)));
      ip(S, ((_ = S[S.length - 1]) == null ? void 0 : _.id) || null), e === "cutout" && S.length && (d.cutoutAspectOpen = !1), ne(), qt(), pt();
    } else if (d.interaction && d.interaction.kind !== "view" && d.interaction.kind !== "pan_frame") {
      let b = !1;
      (d.interaction.kind === "move_stroke_group" || d.interaction.kind === "scale_stroke_group" || d.interaction.kind === "rotate_stroke_group") && (b = !0), d.interaction.kind === "move_raster_object" && (b = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length && (b = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.rasterSnapshots) && d.interaction.rasterSnapshots.length && (b = !0), b && Zi(), ue(), En(), t.setDirtyCanvas(!0, !0), Ks(), d.hqFrames = 1, qt(), pt();
    }
    d.interaction = null, qi(), i && i.kind === "view" && Oe.endDrag(performance.now()), Wo(), qt(), xe(d.pointerPos), pt();
  }, C.onpointercancel = () => {
    var i, a, s;
    if (((i = d.interaction) == null ? void 0 : i.kind) === "view" && Oe.endDrag(performance.now()), ((a = d.interaction) == null ? void 0 : a.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      qi();
      const l = Xn();
      l && d.paintEngine.cancelActiveStroke(l);
    }
    d.interaction = null, qi(), Wo(), xe(d.pointerPos), pt({ localOnly: !0 });
  }, C.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, C.onmousemove = (i) => {
    const a = si(i);
    ea(a, !0), !d.interaction && xe(a);
  }, C.onmouseleave = () => {
    ea(d.pointerPos, !1), xe(d.pointerPos);
  }, C.onwheel = (i) => {
    if (d.mode === "frame") {
      const a = si(i), s = i.deltaY < 0 ? 1.1 : 1 / 1.1;
      $g(a, s) && pt({ localOnly: !0 }), i.preventDefault();
      return;
    }
    d.mode === "pano" && (Oe.applyWheelEvent(i) && pt({ localOnly: !0 }), i.preventDefault());
  }, C.ondragover = (i) => {
    e !== "stickers" && e !== "cutout" || r || (i.preventDefault(), cn(!0));
  }, C.ondrop = (i) => {
    var l;
    if (e !== "stickers" && e !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Me.depth = 0, cn(!1);
    const s = Array.from(((l = i.dataTransfer) == null ? void 0 : l.files) || []).find((h) => ta(h));
    s && eu(s);
  };
  const pu = (i) => {
    e !== "stickers" && e !== "cutout" || r || nn(i) && (Me.depth += 1, cn(!0), i.preventDefault());
  }, gu = (i) => {
    e !== "stickers" && e !== "cutout" || r || (!Me.active && nn(i) && cn(!0), Me.active && i.preventDefault());
  }, mu = (i) => {
    if (e !== "stickers" && e !== "cutout" || r || !Me.active) return;
    Me.depth = Math.max(0, Me.depth - 1);
    const a = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Me.depth === 0 || a) && cn(!1);
  }, yu = (i) => {
    e !== "stickers" && e !== "cutout" || r || (Me.depth = 0, cn(!1), nn(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", pu, !0), window.addEventListener("dragover", gu, !0), window.addEventListener("dragleave", mu, !0), window.addEventListener("drop", yu, !0), rt.forEach((i) => {
    i.onclick = () => {
      i.disabled || (d.mode = i.dataset.view, e === "cutout" && d.mode === "frame" && we() && gn(we()) && (ni({ preservePanelValues: !0 }), ne(), qt()), qs(), Wo(), pt());
    };
  });
  function Zs() {
    const { canUndo: i, canRedo: a } = tu();
    I.querySelectorAll("[data-action='undo'], [data-tool-ui-action='undo']").forEach((s) => {
      s.disabled = !i;
    }), I.querySelectorAll("[data-action='redo'], [data-tool-ui-action='redo']").forEach((s) => {
      s.disabled = !a;
    });
  }
  const Js = I.querySelector("[data-action='undo']");
  Js && (Js.onclick = () => {
    r || Js.disabled || Qi(-1);
  });
  const Qs = I.querySelector("[data-action='redo']");
  Qs && (Qs.onclick = () => {
    r || Qs.disabled || Qi(1);
  });
  const bu = I.querySelector("[data-action='add']");
  bu && (bu.onclick = () => {
    r || (e === "stickers" ? Ws() : ru());
  });
  const vu = I.querySelector("[data-action='clear']");
  vu && (vu.onclick = () => {
    r || ou();
  });
  const _u = I.querySelector("[data-action='save']");
  _u && (_u.onclick = () => {
    r || cu();
  }), I.querySelector("[data-action='reset-view']").onclick = () => {
    Jr(0, 0, 100, 180, 680);
  };
  const Lr = I.querySelector("[data-action='toggle-grid']"), tc = () => {
    if (!Lr) return;
    const i = !!d.showGrid;
    Lr.innerHTML = i ? Dt.eye : Dt.eye_dashed, Lr.setAttribute("aria-pressed", i ? "true" : "false"), Lr.setAttribute("aria-label", i ? "Hide Grid" : "Show Grid"), Lr.setAttribute("data-tip", i ? "Hide grid" : "Show grid");
  };
  if (Lr && (tc(), Lr.onclick = () => {
    d.showGrid = !d.showGrid, mv(t == null ? void 0 : t.id, d.showGrid), tc(), pt();
  }), ot && (ot.querySelectorAll("[data-tool-mode]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const a = String(i.getAttribute("data-tool-mode") || "cursor");
      d.primaryTool = a, (a === "paint" || a === "mask") && ni({ preservePanelValues: !0 }), un(), ne(), qt(), pt();
    };
  }), ot.querySelectorAll("[data-tool-ui-action]").forEach((i) => {
    i.onclick = () => {
      if (r) return;
      const a = String(i.getAttribute("data-tool-ui-action") || "");
      if (!((a === "undo" || a === "redo") && i.disabled)) {
        if (a === "undo") Qi(-1);
        else if (a === "redo") Qi(1);
        else if (a === "clear") ou();
        else if (a === "add") Ws();
        else if (a === "add-image") Ws();
        else if (a === "add-or-look") {
          const s = ie();
          if ((p.shots || []).length === 0)
            ru();
          else {
            const l = s;
            if (!l) return;
            d.selectedId = l.id || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], p.active.selected_shot_id = d.selectedId;
            const h = $e(Number(l.yaw_deg || 0)), g = j(Number(l.pitch_deg || 0), -89.9, 89.9);
            Jr(h, g, d.viewFov), ne(), qt(), pt();
          }
        }
      }
    };
  })), I.querySelectorAll("[data-paint-tool]").forEach((i) => {
    i.onclick = () => {
      d.primaryTool = "paint";
      const a = String(i.getAttribute("data-paint-tool") || "pen");
      d.paintTool = a, ni({ preservePanelValues: !0 }), rn[a] && (d.activeBrushPresetId = a), un(), ne(), qt(), pt();
    };
  }), I.querySelectorAll("[data-mask-tool]").forEach((i) => {
    i.onclick = () => {
      d.primaryTool = "mask", d.maskTool = String(i.getAttribute("data-mask-tool") || "pen"), ni({ preservePanelValues: !0 }), un(), ne(), qt(), pt();
    };
  }), D.forEach((i) => {
    i.onclick = () => {
      const a = String(i.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
      Tg(a);
    };
  }), z.forEach((i) => {
    i.oninput = () => {
      if (i.disabled) return;
      const a = Math.max(1, Math.min(120, Math.round(Number(i.value)))), s = yr(d.primaryTool === "paint" ? d.paintTool : d.maskTool);
      d.brushSizes[s] = a;
      const l = (a - 1) / 119 * 100;
      z.forEach((h) => {
        h.value = String(a), h.style.setProperty("--v", `${j(l, 0, 100)}%`);
      }), Z.forEach((h) => {
        h.textContent = String(a);
      }), Ug();
    }, i.onchange = () => na(), i.addEventListener("pointerup", na), i.addEventListener("pointercancel", na), i.addEventListener("blur", na);
  }), Et) {
    Et.querySelectorAll("[data-paint-color-swatch]").forEach((a) => {
      a.onclick = () => {
        const s = Ua.find((l) => l.id === a.getAttribute("data-paint-color-swatch"));
        s && (d.paintColor = fn(s.color), dt(!0), un());
      };
    });
    const i = Et.querySelector("[data-paint-color-custom]");
    i && (i.onclick = (a) => {
      a.preventDefault(), a.stopPropagation(), X && !X.hidden ? dt(!0) : nt(), un();
    });
  }
  const Jg = (i, a) => {
    var b;
    if (!Bt) return;
    const s = Bt.getBoundingClientRect(), l = j((i - s.left) / Math.max(1, s.width), 0, 1), h = 1 - j((a - s.top) / Math.max(1, s.height), 0, 1), g = fo(d.customPaintColor), _ = { ...Pc(g.h, l, h), a: Number(((b = d.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    d.customPaintColor = fn(_), d.paintColor = fn(_), un();
  }, Qg = (i) => {
    var g;
    if (!ge) return;
    const a = ge.getBoundingClientRect(), s = j((i - a.left) / Math.max(1, a.width), 0, 1), l = fo(d.customPaintColor), h = { ...Pc(s, l.s, l.v), a: Number(((g = d.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    d.customPaintColor = fn(h), d.paintColor = fn(h), un();
  }, wu = (i, a) => {
    const s = i.pointerId;
    a(i);
    const l = (g) => {
      g.pointerId === s && a(g);
    }, h = (g) => {
      g.pointerId === s && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  Bt && (Bt.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), wu(i, (a) => Jg(a.clientX, a.clientY));
  }), ge && (ge.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), wu(i, (a) => Qg(a.clientX));
  }), Mt && (Mt.oninput = () => {
    const i = { ...d.customPaintColor, a: j(Number(Mt.value) / 100, 0, 1) };
    d.customPaintColor = fn(i), d.paintColor = fn(i), un();
  });
  const xu = () => {
    if (!G) return;
    const i = !!d.fullscreen;
    G.innerHTML = i ? Dt.fullscreen_close : Dt.fullscreen, G.setAttribute("aria-label", i ? "Exit Fullscreen" : "Fullscreen"), G.setAttribute("data-tip", i ? "Exit fullscreen" : "Fullscreen");
  }, ia = (i) => {
    const a = !!i;
    d.fullscreen !== a && (d.fullscreen = a, I.classList.toggle("pano-modal-fullscreen", a), a ? (d.fullscreenPrevShowGrid = !!d.showGrid, d.showGrid = !1) : d.fullscreenPrevShowGrid !== null && (d.showGrid = !!d.fullscreenPrevShowGrid, d.fullscreenPrevShowGrid = null), tc(), xu(), pt());
  }, Su = () => document.fullscreenElement === k, tm = async () => {
    var i, a;
    try {
      if (!document.fullscreenEnabled) {
        ia(!d.fullscreen);
        return;
      }
      Su() ? await ((a = document.exitFullscreen) == null ? void 0 : a.call(document)) : await ((i = k.requestFullscreen) == null ? void 0 : i.call(k));
    } catch {
      ia(!d.fullscreen);
    }
  }, Nu = () => {
    document.fullscreenEnabled && ia(Su());
  };
  document.addEventListener("fullscreenchange", Nu), G && (xu(), G.onclick = (i) => {
    i.preventDefault(), i.stopPropagation(), tm();
  });
  const Mu = () => {
    if (!lt) return;
    const i = !!d.outputPreviewExpanded;
    lt.innerHTML = i ? Dt.fullscreen_close : Dt.fullscreen, lt.setAttribute("aria-label", i ? "Reduce Preview" : "Expand Preview"), lt.setAttribute("data-tip", i ? "Reduce preview" : "Expand preview");
  };
  lt && (Mu(), lt.onclick = (i) => {
    i.preventDefault(), i.stopPropagation();
    const a = !d.outputPreviewExpanded;
    d.outputPreviewExpanded = a, d.outputPreviewAnimFrom = d.outputPreviewAnim, d.outputPreviewAnimTo = a ? 1 : 0, d.outputPreviewAnimStartTs = performance.now(), Mu(), pt();
  }), Y.addEventListener("click", (i) => {
    const a = i.target.closest("[data-action]");
    if (!a) return;
    const s = a.getAttribute("data-action");
    if (!r) {
      if (s === "aspect") {
        d.cutoutAspectOpen = !d.cutoutAspectOpen, d.menuSize.measured = !1, qt(), pt();
        return;
      }
      if (s === "aspect-set") {
        const l = we();
        if (!l) return;
        const h = String(a.getAttribute("data-aspect") || "1:1");
        Dg(l, h), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Ks(), ue(), ke(), qt(), pt();
        return;
      }
      if (s === "rotate-90") {
        const l = we();
        if (!l) return;
        Rg(l), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, Ks(), ue(), ke(), qt(), pt();
        return;
      }
      if (s === "bring-front") {
        Og();
        return;
      }
      if (s === "send-back") {
        Fg();
        return;
      }
      if (s === "duplicate") {
        Lg();
        return;
      }
      if (s === "replace-image") {
        Cg();
        return;
      }
      if (s === "toggle-lock") {
        rp();
        return;
      }
      if (s === "back-initial") {
        fp();
        return;
      }
      if (s === "toggle-visible") {
        up();
        return;
      }
      if (s === "delete") {
        au();
        return;
      }
      pt();
    }
  });
  const ec = t.onExecuted, nc = t.onConnectionsChange;
  let rc = null, ic = null, oc = null;
  !r && e === "stickers" && (oc = (i = "sync") => {
    Fl(i);
  }, t.__panoExternalStickerSync = oc, rc = function(...a) {
    var s;
    typeof ec == "function" && ec.apply(this, a), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, t.onExecuted = rc, ic = function(...a) {
    var s;
    typeof nc == "function" && nc.apply(this, a), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, t.onConnectionsChange = ic), r || (Xc.set(String(t.id ?? "0"), () => Os()), Lp() && Os());
  const li = () => {
    var i, a, s, l, h, g, _, b, v;
    d.cutoutPreviewSurfaceRaf && (cancelAnimationFrame(d.cutoutPreviewSurfaceRaf), d.cutoutPreviewSurfaceRaf = 0), d.cutoutPreviewSurfaceTimer && (clearTimeout(d.cutoutPreviewSurfaceTimer), d.cutoutPreviewSurfaceTimer = 0), Xc.delete(String(t.id ?? "0")), r || Os(), document.fullscreenElement === k && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Nu), t.__panoLiveStateOverride = null, t.__panoLivePaintSurface = null, (s = (a = t.__panoDomPreview) == null ? void 0 : a.requestDraw) == null || s.call(a), (h = (l = t.graph) == null ? void 0 : l.setDirtyCanvas) == null || h.call(l, !0, !0), (b = (_ = (g = dn) == null ? void 0 : g.canvas) == null ? void 0 : _.setDirty) == null || b.call(_, !0, !0), ra(), Pg(), (v = J == null ? void 0 : J.dispose) == null || v.call(J), cn(!1), window.removeEventListener("keydown", Pu, !0), window.removeEventListener("keydown", ku, !0), window.removeEventListener("keydown", oa, !0), window.removeEventListener("keyup", oa, !0), window.removeEventListener("keydown", Cu, !0), window.removeEventListener("dragenter", pu, !0), window.removeEventListener("dragover", gu, !0), window.removeEventListener("dragleave", mu, !0), window.removeEventListener("drop", yu, !0), !r && e === "stickers" && (t.onExecuted === rc && (t.onExecuted = ec), t.onConnectionsChange === ic && (t.onConnectionsChange = nc), t.__panoExternalStickerSync === oc && (t.__panoExternalStickerSync = null)), N.unmount(), x.remove();
  }, Pu = (i) => {
    var a, s, l, h;
    if (i.key === "Escape") {
      if (d.fullscreen && document.fullscreenElement === k) {
        i.preventDefault(), i.stopPropagation(), (a = i.stopImmediatePropagation) == null || a.call(i), (s = document.exitFullscreen) == null || s.call(document).catch(() => {
        });
        return;
      }
      if (d.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), ia(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), li();
    }
  }, ku = (i) => {
    const a = String(i.key || ""), s = String(i.code || ""), l = Number(i.keyCode || 0);
    if (!(a === "Delete" || s === "Delete" || l === 46) && !(a === "Backspace" || s === "Backspace" || l === 8)) return;
    const _ = i.target, b = ((_ == null ? void 0 : _.tagName) || "").toUpperCase();
    b === "INPUT" || b === "TEXTAREA" || _ != null && _.isContentEditable || !we() || (au(), i.preventDefault(), i.stopPropagation());
  }, oa = (i) => {
    const a = !!(i.ctrlKey || i.metaKey);
    d.marqueeModifier !== a && (d.marqueeModifier = a, xe(d.pointerPos));
  }, Cu = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const a = String(i.key || "").toLowerCase(), s = String(i.code || "");
    if (a !== "z" && s !== "KeyZ") return;
    const l = i.target, h = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: g, canRedo: _ } = tu();
    i.shiftKey && !_ || !i.shiftKey && !g || (Qi(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Pu, !0), window.addEventListener("keydown", ku, !0), window.addEventListener("keydown", oa, !0), window.addEventListener("keyup", oa, !0), window.addEventListener("keydown", Cu, !0), k.addEventListener("pointerdown", (i) => {
    i.target === k && li();
  }), to(I), _p(), !r && e === "stickers" && Fl("open"), Ag(), ue(), Zs(), un(), ut && requestAnimationFrame(() => {
    ut.classList.add("is-ready");
  }), ne(), Ko(), Ql(), xe(d.pointerPos), pt(), Pt.rafId = requestAnimationFrame(Gs);
}
function td(t, e, n, r) {
  if (!(t != null && t.prototype)) return;
  const o = (y) => {
    var p, x;
    try {
      (p = y.__panoDomRestore) == null || p.call(y);
    } catch {
    }
    try {
      (x = y.__panoLegacyRestore) == null || x.call(y);
    } catch {
    }
    y.__panoDomPreview = null, y.__panoLegacyPreviewHooked = !1, y.__panoPreviewHooked = !1, y.__panoPreviewAttached = !1, y.__panoPreviewMountKey = null;
  };
  function c(y) {
    var I;
    const p = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === p) return;
    o(y), Sv(y, Yc);
    const N = Pi(y, Yc);
    if (N && !N.__panoPreviewPatchedCb) {
      N.__panoPreviewPatchedCb = !0;
      const C = N.callback;
      N.callback = (F) => {
        var L;
        const $ = C ? C(F) : void 0;
        return (L = y.setDirtyCanvas) == null || L.call(y, !0, !1), $;
      };
    }
    const k = Pi(y, "bg_color");
    if (k && (k.value == null || String(k.value).trim() === "" || String(k.value).toLowerCase() === "#000000") && (k.value = "#00ff00", (I = k.callback) == null || I.call(k, "#00ff00")), n === "PanoramaStickers") {
      Jc(y, r, () => Io(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = p;
        return;
      }
    }
    Jc(y, r, () => Io(y, "cutout")), yb(y, {
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
function Rv(t) {
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
function Ov(t) {
  if (!t || t.__panoStandaloneInstallDone || t.__panoStandaloneInstallProbeActive) return;
  t.__panoStandaloneInstallProbeActive = !0;
  const e = () => {
    const r = Number((t == null ? void 0 : t.id) ?? -1) >= 0 && !!(t != null && t.graph), o = Number(t.__panoStandaloneInstallProbeTries || 0) + 1;
    if (t.__panoStandaloneInstallProbeTries = o, !r && o < 40) {
      requestAnimationFrame(e);
      return;
    }
    Jc(t, "Open Preview", () => Io(t, "stickers", { readOnly: !0, hideSidebar: !1 })), mb(t, {
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
    const t = [...Xc.values()].map((n) => {
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
    (n === "PanoramaStickers" || n === "Panorama Stickers") && td(t, e, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && td(t, e, "PanoramaCutout", "Open Cutout Editor"), zc(n) && Rv(t);
  },
  nodeCreated(t) {
    const e = String((t == null ? void 0 : t.comfyClass) || (t == null ? void 0 : t.type) || (t == null ? void 0 : t.title) || "");
    zc(e) && Ov(t);
  }
});
